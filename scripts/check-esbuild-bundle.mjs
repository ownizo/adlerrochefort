#!/usr/bin/env node
/**
 * Gate: every file Netlify actually deploys as a function must bundle
 * cleanly with esbuild — exactly the bundler netlify.toml selects
 * (`[functions] node_bundler = "esbuild"`) — with zero warnings and zero
 * unresolved runtime requires, not just pass `node --check`/`node --test`.
 *
 * Written after two production incidents in one day (Especificação dos
 * Formulários de Cotação v2 hotfixes), both invisible to every gate that
 * existed before this one:
 *
 *   1. netlify/functions/lib/quote-requests-sync.mjs called
 *      `createRequire(import.meta.url)("../../../public/js/quote-validators.js")`
 *      to reuse a browser file's normalizePlate(). `node --check` and
 *      `node --test` resolve this fine — plain Node's module resolution
 *      doesn't care that the target lives outside netlify/functions/. But
 *      esbuild's bundler only inlines a *static* require/import; calling the
 *      function `createRequire()` *returns* is not recognised as the
 *      special `require` it rewrites, so esbuild leaves the call as literal
 *      runtime source in the bundle, completely unexamined — confirmed
 *      empirically below (see NODE_ONLY_TARGETS and the note before
 *      SUSPECT_REQUIRE_RE): bundling the broken commit produced a clean
 *      exit 0, zero warnings, and the exact same require() call sitting
 *      untouched in the output. In production, that bundle is deployed as
 *      the single file /var/task/netlify/functions/submission-created.mjs
 *      — nothing else from the repo ships alongside it — so the require()
 *      threw MODULE_NOT_FOUND on every invocation, crashing the shared
 *      handler for every form on the site (no email, no CRM sync, no
 *      quote_requests insert) before any of its own logic ran. Confirmed
 *      live via `netlify logs --source functions`.
 *
 *   2. Two independent edits (the Auto wizard's matricula/data_carta/rgpd,
 *      then — reproduced again, separately, on the Habitação branch — nine
 *      more field names) appended English label text into QUOTE_LABELS (the
 *      PT object) instead of QUOTE_LABELS_EN. A later duplicate key in a JS
 *      object literal silently wins at runtime — valid JS, so `node --check`
 *      has nothing to say about it, and no existing test happened to read
 *      those specific labels back. esbuild's bundler *does* notice: it warns
 *      "Duplicate key" for every one, with both locations, by design (it has
 *      to pick a winner during minification/scope analysis). That warning
 *      was already there to see in this repo, in both incidents, every time
 *      — nothing before this gate ever ran the check that would have shown
 *      it before a deploy instead of after one.
 *
 * Three checks per entry point, none satisfied by the others:
 *
 *   - esbuild's own errors and warnings (catches class 2, and any genuinely
 *     unresolvable import — a typo'd path, a missing dependency).
 *   - A scan of the bundled OUTPUT text for any require() call still
 *     addressing a string literal that isn't a Node builtin. Netlify
 *     deploys each function as ONE bundled file with nothing else from the
 *     repo alongside it, so *any* such leftover call is already broken for
 *     production regardless of whether the target happens to exist in this
 *     checkout — there is no "resolves the same from a different
 *     environment" case worth telling apart from a genuinely missing file.
 *   - A scan for the literal token `createRequire` anywhere in the bundled
 *     output (catches class 1 — this is the check that actually would have
 *     caught it, see the note below). Confirmed empirically that the
 *     require()-literal scan above does NOT catch this class: the broken
 *     code was `createRequire(import.meta.url)("../../../public/js/
 *     quote-validators.js")` — a double call, `(createRequire(x))(y)` — so
 *     the string literal never sits next to the token `require(` at all; it
 *     sits next to a call to whatever `createRequire(x)` returned. Bundling
 *     the broken commit produced a clean exit 0, zero require()-literal
 *     hits, and the untouched `createRequire(...)("...")` call sitting
 *     verbatim in the output — esbuild has no way to know what path a
 *     dynamically-obtained require will be called with, so it doesn't try.
 *     `createRequire` has exactly one legitimate purpose (dynamic,
 *     path-computed module loading) and that purpose is exactly what breaks
 *     under Netlify's single-file-per-function deploy — so any occurrence
 *     at all, literal argument or not, is a hard fail here, not just the
 *     shape this incident happened to take.
 *
 * No WARN tier here, unlike check-generator-freshness.mjs/check-i18n-parity.mjs
 * — B1 (Especificação v2, dívida técnica) is explicit that this gate exists
 * specifically so gates stop being green while production is broken, so any
 * finding here is FAIL.
 *
 * esbuild is deliberately NOT a package.json dependency, same convention as
 * jsdom in scripts/wizard-required-fields-test.mjs and friends — a
 * dev-only tool for local/CI checks, not something the deployed site needs
 * declared. Resolved the same resilient way: local install, then the shared
 * ad hoc location, then clear instructions rather than silently skipping
 * (a skipped gate is a fail-open gate, exactly the failure mode this
 * project has already been burned by once this session — see goNext() in
 * public/js/quote-wizard.js).
 */

import { readdirSync } from "node:fs";
import { join, dirname, resolve as resolvePath, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { builtinModules } from "node:module";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolvePath(__dirname, "..");
const FUNCTIONS_DIR = join(REPO_ROOT, "netlify/functions");

async function loadEsbuild() {
  try {
    return await import("esbuild");
  } catch {
    // not installed locally
  }
  try {
    return await import("/tmp/domtest/node_modules/esbuild/lib/main.js");
  } catch {
    // not installed there either
  }
  console.error("esbuild not found. Run:  npm install --no-save esbuild");
  process.exit(1);
}

const BUILTIN = new Set([...builtinModules, ...builtinModules.map((m) => `node:${m}`)]);

// Matches require("literal") / require('literal') calls whose argument is a
// plain string (no interpolation, no computed expression) — the only shape
// a dynamically-obtained require() (class 1 above) or an unresolved bare
// import can survive bundling as. esbuild's own CJS-interop shim (present in
// most bundles that pull in a CommonJS dependency) never calls require()
// with a literal string argument in its own definition, so this doesn't
// false-positive on that.
const SUSPECT_REQUIRE_RE = /\brequire\(\s*(["'])((?:(?!\1).)+)\1\s*\)/g;

function findSuspectRequires(bundledText) {
  const found = [];
  for (const match of bundledText.matchAll(SUSPECT_REQUIRE_RE)) {
    const target = match[2];
    if (BUILTIN.has(target)) continue;
    found.push(target);
  }
  return [...new Set(found)];
}

async function checkEntry(esbuild, entryPath) {
  const relEntry = relative(REPO_ROOT, entryPath);
  const problems = [];

  let result;
  try {
    result = await esbuild.build({
      entryPoints: [entryPath],
      bundle: true,
      platform: "node",
      format: "esm",
      write: false,
      logLevel: "silent",
    });
  } catch (err) {
    for (const e of err.errors || [{ text: String(err.message || err) }]) {
      problems.push(`[esbuild error] ${e.text}${e.location ? ` (${e.location.file}:${e.location.line})` : ""}`);
    }
    return { relEntry, problems };
  }

  for (const w of result.warnings || []) {
    problems.push(`[esbuild warning] ${w.text}${w.location ? ` (${w.location.file}:${w.location.line})` : ""}`);
  }

  const output = result.outputFiles?.[0]?.text || "";
  for (const target of findSuspectRequires(output)) {
    problems.push(
      `[unresolved runtime require] require("${target}") survives bundling unexamined — Netlify deploys this ` +
        `function as a single file with nothing else from the repo alongside it, so this will throw ` +
        `MODULE_NOT_FOUND in production regardless of whether "${target}" exists in this checkout. If it's a ` +
        `real dependency, use a static import/require so esbuild inlines it; if it's meant to stay external, ` +
        `mark it explicitly rather than leaving it unexamined.`
    );
  }
  if (output.includes("createRequire")) {
    problems.push(
      `[dynamic require] createRequire(...) appears in the bundled output — esbuild cannot statically see what ` +
        `path a dynamically-obtained require will be called with, so it never tries to resolve or inline it. ` +
        `The call survives verbatim and resolves at runtime relative to this function's own deployed location, ` +
        `where nothing else from the repo exists. Use a static import/require of a file inside netlify/functions/ ` +
        `instead (see netlify/functions/lib/plate.mjs for why, and the pattern to follow).`
    );
  }

  return { relEntry, problems };
}

async function main() {
  const esbuild = await loadEsbuild();

  const entries = readdirSync(FUNCTIONS_DIR, { withFileTypes: true })
    .filter((d) => d.isFile() && d.name.endsWith(".mjs") && !d.name.endsWith(".test.mjs"))
    .map((d) => join(FUNCTIONS_DIR, d.name))
    .sort();

  console.log("=== esbuild bundle check ===");
  console.log(`${entries.length} function(s): ${entries.map((e) => relative(REPO_ROOT, e)).join(", ")}\n`);

  const allProblems = [];
  for (const entry of entries) {
    const { relEntry, problems } = await checkEntry(esbuild, entry);
    if (problems.length === 0) {
      console.log(`OK   ${relEntry}`);
    } else {
      console.log(`FAIL ${relEntry}`);
      for (const p of problems) {
        console.log(`  ${p}`);
        allProblems.push(`${relEntry}: ${p}`);
      }
    }
  }

  console.log(`\n=== ${allProblems.length} failure(s) ===`);
  if (allProblems.length > 0) process.exit(1);
}

main();
