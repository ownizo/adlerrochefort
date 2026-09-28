// -----------------------------------------------------------------------------
// plate.mjs — Portuguese vehicle plate normalisation, server side.
//
// The plate field is free text on every form (owner decision: clients may
// enter a Portuguese, Spanish or foreign plate, and the browser no longer
// checks its format). This is therefore not a validator: it only tidies a
// value that happens to be a Portuguese plate into its hyphenated form for
// the CRM, and callers keep anything else exactly as typed (see
// quote-requests-sync.mjs, `normalizePlate(v) || v`).
//
// It lives inside netlify/functions/lib/ on purpose. An earlier version
// reached across to public/js/quote-validators.js with
// `createRequire(import.meta.url)(...)`, which esbuild (Netlify's
// node_bundler, netlify.toml) does not inline — the deployed bundle kept a
// runtime require() of a file that isn't shipped and every
// submission-created invocation threw MODULE_NOT_FOUND. The browser copy
// of this function has since been removed along with the client-side plate
// rule; this file is now the only one.
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
