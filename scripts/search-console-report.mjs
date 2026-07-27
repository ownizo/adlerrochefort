#!/usr/bin/env node
// -----------------------------------------------------------------------------
// Search Console: fiscal-representation query monitor
//
// Pulls Search Analytics data for adlerrochefort.com, keeps only the queries
// that belong to the fiscal-representation cluster, prints them, and appends
// one timestamped row per query to a history file so movement can be tracked
// over time.
//
// Run manually:
//   node scripts/search-console-report.mjs
//   node scripts/search-console-report.mjs --days=90
//   node scripts/search-console-report.mjs --start=2026-06-01 --end=2026-06-30
//
// Credentials come from environment variables only — see README.md. Nothing is
// written to the repo except the history CSV, and no credential value is ever
// printed or logged.
//
// This script is intentionally NOT wired into CI or into any Netlify build.
// -----------------------------------------------------------------------------

import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const TOKEN_URL = "https://oauth2.googleapis.com/token";
const SCOPE = "https://www.googleapis.com/auth/webmasters.readonly";
const API_BASE = "https://searchconsole.googleapis.com/webmasters/v3";

// A query counts as part of the cluster if it contains any of these fragments.
const KEYWORDS = ["fiscal", "nif", "tax repr", "representative"];

const HISTORY_FILE = path.join(
  process.cwd(),
  "scripts",
  "data",
  "fiscal-representation-search-history.csv"
);
const HISTORY_HEADER =
  "run_at,start_date,end_date,query,clicks,impressions,ctr,position\n";

// --- arguments --------------------------------------------------------------

function parseArgs(argv) {
  const out = {};
  for (const arg of argv) {
    const match = /^--([a-z-]+)(?:=(.*))?$/.exec(arg);
    if (!match) continue;
    out[match[1]] = match[2] === undefined ? true : match[2];
  }
  return out;
}

function isoDate(date) {
  return date.toISOString().slice(0, 10);
}

function resolveDateRange(args) {
  if (args.start && args.end) return { startDate: args.start, endDate: args.end };
  // Search Console data lags by roughly two to three days, so end the window
  // three days back to avoid reporting a partial final day.
  const days = Number(args.days || 28);
  if (!Number.isFinite(days) || days < 1) {
    throw new Error("--days must be a positive number");
  }
  const end = new Date(Date.now() - 3 * 86400000);
  const start = new Date(end.getTime() - (days - 1) * 86400000);
  return { startDate: isoDate(start), endDate: isoDate(end) };
}

// --- credentials ------------------------------------------------------------

function readCredentials() {
  const inlineJson = process.env.GSC_SERVICE_ACCOUNT_JSON;
  const jsonPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;

  let clientEmail = process.env.GSC_CLIENT_EMAIL;
  let privateKey = process.env.GSC_PRIVATE_KEY;

  if (!clientEmail || !privateKey) {
    let raw = null;
    if (inlineJson) {
      raw = inlineJson;
    } else if (jsonPath) {
      raw = fs.readFileSync(jsonPath, "utf8");
    }
    if (raw) {
      const parsed = JSON.parse(raw);
      clientEmail = clientEmail || parsed.client_email;
      privateKey = privateKey || parsed.private_key;
    }
  }

  const siteUrl = process.env.GSC_SITE_URL || "https://adlerrochefort.com/";

  if (!clientEmail || !privateKey) {
    throw new Error(
      "Missing credentials. Set GSC_CLIENT_EMAIL and GSC_PRIVATE_KEY, or " +
        "GSC_SERVICE_ACCOUNT_JSON, or GOOGLE_APPLICATION_CREDENTIALS. " +
        "See the Search Console monitoring section of README.md."
    );
  }

  // Private keys pasted into a shell or a Netlify env var usually arrive with
  // literal \n sequences rather than real newlines.
  return { clientEmail, privateKey: privateKey.replace(/\\n/g, "\n"), siteUrl };
}

function base64url(input) {
  return Buffer.from(input)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

async function getAccessToken({ clientEmail, privateKey }) {
  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = base64url(
    JSON.stringify({
      iss: clientEmail,
      scope: SCOPE,
      aud: TOKEN_URL,
      iat: now,
      exp: now + 3600,
    })
  );
  const signer = crypto.createSign("RSA-SHA256");
  signer.update(`${header}.${claims}`);
  const signature = signer.sign(privateKey).toString("base64")
    .replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: `${header}.${claims}.${signature}`,
    }),
  });

  if (!res.ok) {
    // Deliberately does not echo the request body, which contains the signed
    // assertion.
    throw new Error(`Token request failed: HTTP ${res.status} ${res.statusText}`);
  }
  const body = await res.json();
  if (!body.access_token) throw new Error("Token response contained no access_token");
  return body.access_token;
}

// --- Search Console ---------------------------------------------------------

async function fetchQueries({ siteUrl, token, startDate, endDate }) {
  const rows = [];
  const pageSize = 5000;
  for (let startRow = 0; ; startRow += pageSize) {
    const res = await fetch(
      `${API_BASE}/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          startDate,
          endDate,
          dimensions: ["query"],
          type: "web",
          rowLimit: pageSize,
          startRow,
        }),
      }
    );
    if (!res.ok) {
      throw new Error(
        `Search Analytics request failed: HTTP ${res.status} ${res.statusText}`
      );
    }
    const body = await res.json();
    const page = body.rows || [];
    rows.push(...page);
    if (page.length < pageSize) break;
  }
  return rows;
}

function matchesCluster(query) {
  const q = query.toLowerCase();
  return KEYWORDS.some((keyword) => q.includes(keyword));
}

// --- history ----------------------------------------------------------------

function csvCell(value) {
  const str = String(value);
  return /[",\n]/.test(str) ? `"${str.replace(/"/g, '""')}"` : str;
}

function appendHistory(runAt, startDate, endDate, rows) {
  fs.mkdirSync(path.dirname(HISTORY_FILE), { recursive: true });
  if (!fs.existsSync(HISTORY_FILE)) {
    fs.writeFileSync(HISTORY_FILE, HISTORY_HEADER, "utf8");
  }
  const lines = rows
    .map((row) =>
      [
        runAt,
        startDate,
        endDate,
        row.query,
        row.clicks,
        row.impressions,
        row.ctr.toFixed(4),
        row.position.toFixed(1),
      ]
        .map(csvCell)
        .join(",")
    )
    .join("\n");
  if (lines) fs.appendFileSync(HISTORY_FILE, `${lines}\n`, "utf8");
}

// --- main -------------------------------------------------------------------

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const { startDate, endDate } = resolveDateRange(args);
  const credentials = readCredentials();

  const token = await getAccessToken(credentials);
  const allRows = await fetchQueries({
    siteUrl: credentials.siteUrl,
    token,
    startDate,
    endDate,
  });

  const rows = allRows
    .map((row) => ({
      query: row.keys[0],
      clicks: row.clicks || 0,
      impressions: row.impressions || 0,
      ctr: row.ctr || 0,
      position: row.position || 0,
    }))
    .filter((row) => matchesCluster(row.query))
    .sort((a, b) => b.impressions - a.impressions);

  const runAt = new Date().toISOString();

  console.log(`Site      : ${credentials.siteUrl}`);
  console.log(`Range     : ${startDate} to ${endDate}`);
  console.log(`Filter    : query contains ${KEYWORDS.join(", ")}`);
  console.log(`Matched   : ${rows.length} of ${allRows.length} queries`);
  console.log("");

  if (rows.length === 0) {
    console.log("No matching queries in this window.");
  } else {
    const width = Math.min(
      60,
      Math.max(5, ...rows.map((row) => row.query.length))
    );
    console.log(
      `${"query".padEnd(width)}  ${"clicks".padStart(6)}  ${"impr".padStart(
        6
      )}  ${"ctr".padStart(6)}  ${"pos".padStart(5)}`
    );
    console.log("-".repeat(width + 30));
    for (const row of rows) {
      console.log(
        `${row.query.slice(0, width).padEnd(width)}  ${String(row.clicks).padStart(
          6
        )}  ${String(row.impressions).padStart(6)}  ${(row.ctr * 100)
          .toFixed(2)
          .padStart(5)}%  ${row.position.toFixed(1).padStart(5)}`
      );
    }
    const totals = rows.reduce(
      (acc, row) => ({
        clicks: acc.clicks + row.clicks,
        impressions: acc.impressions + row.impressions,
      }),
      { clicks: 0, impressions: 0 }
    );
    console.log("-".repeat(width + 30));
    console.log(
      `${"TOTAL".padEnd(width)}  ${String(totals.clicks).padStart(6)}  ${String(
        totals.impressions
      ).padStart(6)}`
    );
  }

  appendHistory(runAt, startDate, endDate, rows);
  console.log("");
  console.log(`Appended ${rows.length} row(s) to ${path.relative(process.cwd(), HISTORY_FILE)}`);
}

main().catch((err) => {
  console.error(`search-console-report failed: ${err.message}`);
  process.exitCode = 1;
});
