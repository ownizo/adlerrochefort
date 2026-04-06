import { getStore } from "@netlify/blobs";

const STORE = getStore({ name: "vault-metrics", consistency: "strong" });

function jsonHeaders() {
  return {
    "Content-Type": "application/json",
    "Cache-Control": "no-store",
  };
}

function sanitizePath(input) {
  if (!input || typeof input !== "string") return "/";
  try {
    const url = new URL(input, "https://example.com");
    let path = url.pathname || "/";
    if (!path.startsWith("/")) path = "/" + path;
    return path.length > 300 ? path.slice(0, 300) : path;
  } catch {
    return "/";
  }
}

function sanitizeValue(input, max = 80) {
  if (!input || typeof input !== "string") return "";
  return input.trim().slice(0, max);
}

function toDateKey(dateInput) {
  const d = new Date(dateInput);
  if (Number.isNaN(d.getTime())) return null;
  return d.toISOString().slice(0, 10);
}

function clampNumber(value, min, max, fallback = 0) {
  const n = Number(value);
  if (!Number.isFinite(n)) return fallback;
  if (n < min) return min;
  if (n > max) return max;
  return n;
}

async function validateAdmin(req) {
  const url = new URL(req.url);
  const token =
    url.searchParams.get("token") ||
    req.headers.get("authorization")?.replace("Bearer ", "");

  if (!token) return null;

  const sessions = getStore("vault-sessions");
  const session = await sessions.get(token, { type: "json" }).catch(() => null);
  if (!session || session.type !== "admin" || new Date(session.expiresAt) < new Date()) {
    return null;
  }

  return session;
}

async function trackVisitStart(req, context) {
  const headers = jsonHeaders();
  let body;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Corpo do pedido inválido" }), { status: 400, headers });
  }

  const visitId = sanitizeValue(body.visitId, 64);
  const sessionId = sanitizeValue(body.sessionId, 64);
  const path = sanitizePath(body.path || body.url);

  if (!visitId || !sessionId || !path || path.startsWith("/.netlify") || path.startsWith("/api/")) {
    return new Response(JSON.stringify({ ignored: true }), { status: 200, headers });
  }

  const startedAt = body.startedAt && !Number.isNaN(new Date(body.startedAt).getTime())
    ? new Date(body.startedAt).toISOString()
    : new Date().toISOString();

  const dateKey = toDateKey(startedAt);
  if (!dateKey) {
    return new Response(JSON.stringify({ error: "Data inválida" }), { status: 400, headers });
  }

  const key = `visit:${dateKey}:${visitId}`;
  const existing = await STORE.get(key, { type: "json" }).catch(() => null);
  const country = sanitizeValue(context?.geo?.country?.name || context?.geo?.country?.code || body.country || "Unknown", 80) || "Unknown";
  const city = sanitizeValue(context?.geo?.city || body.city || "Unknown", 80) || "Unknown";
  const hour = clampNumber(body.clientHour, 0, 23, new Date(startedAt).getUTCHours());

  const payload = {
    visitId,
    sessionId,
    path,
    referrer: sanitizeValue(body.referrer, 300),
    startedAt,
    dateKey,
    hour,
    country,
    city,
    userAgent: sanitizeValue(req.headers.get("user-agent") || "", 300),
    durationSeconds: clampNumber(existing?.durationSeconds || 0, 0, 7200, 0),
    updatedAt: new Date().toISOString(),
  };

  await STORE.setJSON(key, { ...(existing || {}), ...payload });
  return new Response(JSON.stringify({ success: true }), { status: 200, headers });
}

async function trackVisitEnd(req) {
  const headers = jsonHeaders();
  let body;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Corpo do pedido inválido" }), { status: 400, headers });
  }

  const visitId = sanitizeValue(body.visitId, 64);
  const dateKey = sanitizeValue(body.dateKey, 10);
  if (!visitId || !dateKey) {
    return new Response(JSON.stringify({ ignored: true }), { status: 200, headers });
  }

  const key = `visit:${dateKey}:${visitId}`;
  const existing = await STORE.get(key, { type: "json" }).catch(() => null);
  if (!existing) {
    return new Response(JSON.stringify({ ignored: true }), { status: 200, headers });
  }

  const durationSeconds = clampNumber(body.durationSeconds, 0, 7200, 0);
  await STORE.setJSON(key, {
    ...existing,
    durationSeconds: Math.max(existing.durationSeconds || 0, durationSeconds),
    endedAt: body.endedAt && !Number.isNaN(new Date(body.endedAt).getTime())
      ? new Date(body.endedAt).toISOString()
      : new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });

  return new Response(JSON.stringify({ success: true }), { status: 200, headers });
}

function iterateDates(startDate, endDate) {
  const result = [];
  const start = new Date(startDate + "T00:00:00.000Z");
  const end = new Date(endDate + "T00:00:00.000Z");
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime()) || start > end) return result;

  const cursor = new Date(start);
  while (cursor <= end) {
    result.push(cursor.toISOString().slice(0, 10));
    cursor.setUTCDate(cursor.getUTCDate() + 1);
  }
  return result;
}

function normalizeFilter(value) {
  const v = sanitizeValue(value, 120);
  return v ? v.toLowerCase() : "";
}

function avgDuration(sum, count) {
  if (!count) return 0;
  return Number((sum / count).toFixed(1));
}

async function getMetrics(req) {
  const headers = jsonHeaders();
  const admin = await validateAdmin(req);
  if (!admin) {
    return new Response(JSON.stringify({ error: "Acesso restrito a administradores" }), { status: 403, headers });
  }

  const url = new URL(req.url);
  const today = new Date().toISOString().slice(0, 10);
  const defaultStart = new Date(Date.now() - 29 * 86400000).toISOString().slice(0, 10);

  const start = toDateKey(url.searchParams.get("start") || defaultStart) || defaultStart;
  const end = toDateKey(url.searchParams.get("end") || today) || today;

  const pageFilter = normalizeFilter(url.searchParams.get("page"));
  const countryFilter = normalizeFilter(url.searchParams.get("country"));
  const cityFilter = normalizeFilter(url.searchParams.get("city"));
  const hourFilterRaw = url.searchParams.get("hour");
  const hourFilter = hourFilterRaw !== null && hourFilterRaw !== "" ? clampNumber(hourFilterRaw, 0, 23, -1) : -1;

  const dateKeys = iterateDates(start, end);
  const entries = [];

  for (const dateKey of dateKeys) {
    const { blobs } = await STORE.list({ prefix: `visit:${dateKey}:` });
    if (!blobs.length) continue;

    const rows = await Promise.all(blobs.map((blob) => STORE.get(blob.key, { type: "json" }).catch(() => null)));
    for (const row of rows) {
      if (!row || !row.path || !row.sessionId) continue;
      const rowPage = String(row.path).toLowerCase();
      const rowCountry = String(row.country || "Unknown").toLowerCase();
      const rowCity = String(row.city || "Unknown").toLowerCase();
      const rowHour = clampNumber(row.hour, 0, 23, 0);

      if (pageFilter && rowPage !== pageFilter) continue;
      if (countryFilter && rowCountry !== countryFilter) continue;
      if (cityFilter && rowCity !== cityFilter) continue;
      if (hourFilter >= 0 && rowHour !== hourFilter) continue;

      entries.push({
        dateKey: row.dateKey || dateKey,
        monthKey: (row.dateKey || dateKey || "").slice(0, 7),
        path: row.path,
        sessionId: row.sessionId,
        country: row.country || "Unknown",
        city: row.city || "Unknown",
        hour: rowHour,
        durationSeconds: clampNumber(row.durationSeconds, 0, 7200, 0),
      });
    }
  }

  const byDay = new Map();
  const byMonth = new Map();
  const byHour = new Map();
  const byPage = new Map();
  const byCountry = new Map();
  const byCity = new Map();
  const uniqueVisitors = new Set();
  const pagesSet = new Set();
  const countriesSet = new Set();
  const citiesSet = new Set();

  let totalDuration = 0;

  const pushAggregate = (map, key, item) => {
    const current = map.get(key) || { views: 0, durationSeconds: 0, sessions: new Set() };
    current.views += 1;
    current.durationSeconds += item.durationSeconds;
    current.sessions.add(item.sessionId);
    map.set(key, current);
  };

  for (const item of entries) {
    uniqueVisitors.add(item.sessionId);
    totalDuration += item.durationSeconds;
    pagesSet.add(item.path);
    countriesSet.add(item.country);
    citiesSet.add(item.city);

    pushAggregate(byDay, item.dateKey, item);
    pushAggregate(byMonth, item.monthKey, item);
    pushAggregate(byHour, String(item.hour).padStart(2, "0"), item);
    pushAggregate(byPage, item.path, item);
    pushAggregate(byCountry, item.country, item);
    pushAggregate(byCity, item.city, item);
  }

  const toRows = (map, keyName) => {
    return Array.from(map.entries())
      .map(([key, value]) => ({
        [keyName]: key,
        views: value.views,
        uniqueVisitors: value.sessions.size,
        avgTimeSeconds: avgDuration(value.durationSeconds, value.views),
      }))
      .sort((a, b) => b.views - a.views);
  };

  const totalViews = entries.length;
  const summary = {
    totalViews,
    uniqueVisitors: uniqueVisitors.size,
    avgTimeSeconds: avgDuration(totalDuration, totalViews),
    totalDurationSeconds: totalDuration,
  };

  const pageRows = toRows(byPage, "page");

  return new Response(
    JSON.stringify({
      success: true,
      filters: { start, end, page: pageFilter, country: countryFilter, city: cityFilter, hour: hourFilter >= 0 ? hourFilter : "" },
      summary,
      series: {
        byDay: toRows(byDay, "date").sort((a, b) => a.date.localeCompare(b.date)),
        byMonth: toRows(byMonth, "month").sort((a, b) => a.month.localeCompare(b.month)),
        byHour: toRows(byHour, "hour").sort((a, b) => a.hour.localeCompare(b.hour)),
      },
      rankings: {
        byPage: pageRows,
        byCountry: toRows(byCountry, "country"),
        byCity: toRows(byCity, "city"),
      },
      options: {
        pages: Array.from(pagesSet).sort((a, b) => a.localeCompare(b)),
        countries: Array.from(countriesSet).sort((a, b) => a.localeCompare(b)),
        cities: Array.from(citiesSet).sort((a, b) => a.localeCompare(b)),
      },
    }),
    { status: 200, headers }
  );
}

export default async (req, context) => {
  const headers = jsonHeaders();

  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers });
  }

  const path = new URL(req.url).pathname;

  if (req.method === "POST" && path === "/api/metrics/track") {
    const clone = req.clone();
    let action = "";
    try {
      const body = await clone.json();
      action = body.action || "visit-start";
    } catch {
      action = "";
    }

    if (action === "visit-end") {
      return trackVisitEnd(req);
    }
    return trackVisitStart(req, context);
  }

  if (req.method === "GET" && path === "/api/vault/metrics") {
    return getMetrics(req);
  }

  return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405, headers });
};

export const config = {
  path: ["/api/metrics/track", "/api/vault/metrics"],
};
