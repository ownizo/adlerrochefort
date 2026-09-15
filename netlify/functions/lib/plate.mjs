// -----------------------------------------------------------------------------
// plate.mjs — Portuguese vehicle plate normalisation, server side.
//
// A deliberate, small duplication of public/js/quote-validators.js's
// normalizePlate() (byte-for-byte the same logic), not a require() of that
// file. The first version of this fix (Especificação v2 hotfix) reached
// across with `createRequire(import.meta.url)("../../../public/js/
// quote-validators.js")` — that resolves fine with plain `node`, including
// under `node --test`, but esbuild's bundler (Netlify's
// node_bundler = "esbuild", netlify.toml) does not treat a dynamically
// constructed require (the result of calling createRequire(), rather than
// the literal identifier `require`) as a static import to inline. The
// deployed bundle kept the runtime require() call as-is, expecting
// public/js/quote-validators.js to exist relative to the BUNDLED function
// at /var/task/netlify/functions/submission-created.mjs — it doesn't, since
// only the function's own files are deployed, not arbitrary paths under
// public/. Every submission-created invocation threw MODULE_NOT_FOUND
// before running any of its own code: no email, no CRM sync, no
// quote_requests insert, for every form on the site, confirmed live in
// production via `netlify logs --source functions`.
//
// A file that lives inside netlify/functions/lib/ from the start, with no
// path reaching outside it, cannot have this problem — esbuild bundles
// same-tree ES module imports correctly, which is exactly why every other
// file in this directory (classifySubmission, applyDynamicFields, etc.) is
// already written this way.
//
// If the two copies of this function are ever found to disagree, that is a
// bug in whichever one was last edited without updating the other —
// scripts/quote-validators.test.mjs and this file's own test both assert
// the same fixed set of shapes/examples for exactly that reason.
// -----------------------------------------------------------------------------

const PLATE_SHAPES = ["LLNNNN", "NNLLNN", "NNNNLL", "LLNNLL"];

function plateShape(sixChars) {
  let out = "";
  for (let i = 0; i < 6; i++) {
    out += /[A-Z]/.test(sixChars[i]) ? "L" : /[0-9]/.test(sixChars[i]) ? "N" : "?";
  }
  return out;
}

/**
 * Accepts input with or without hyphens, normalises to uppercase with
 * hyphens, and checks it against the four formats currently in use:
 * AA-00-00, 00-AA-00, 00-00-AA, AA-00-AA. Returns null for anything that
 * doesn't match one of those four shapes — never throws.
 */
export function normalizePlate(value) {
  const clean = String(value || "")
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "");
  if (clean.length !== 6) return null;
  if (!PLATE_SHAPES.includes(plateShape(clean))) return null;
  return clean.slice(0, 2) + "-" + clean.slice(2, 4) + "-" + clean.slice(4, 6);
}
