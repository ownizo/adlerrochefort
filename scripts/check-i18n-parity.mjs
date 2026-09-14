#!/usr/bin/env node
/**
 * Key-parity check for the quote-form i18n string tables
 * (data/i18n/quote-form/{lang}.json — see scripts/lib/i18n.mjs).
 *
 * Rule (Especificação dos Formulários de Cotação v2, secção 7): every key
 * that exists in pt.json (the canonical structure) must exist in the other
 * nine language files, and vice versa — a key present in, say, de.json but
 * absent from pt.json is just as much a drift as the reverse, since it means
 * pt.json is no longer the structure everyone else was built from.
 *
 * Exception, by deliberate design, not oversight: keys under the top-level
 * `pt_only` namespace exist ONLY in pt.json — that's the "Antes de
 * preencher" framing block (spec v2, secção 1.2), Portuguese-only by
 * requirement. Every other language's file must NOT carry a `pt_only` key
 * at all; if one shows up there, that's a FAIL (someone copied the block
 * into a file it was never meant for), not a WARN.
 *
 * Modelled on scripts/check-generator-freshness.mjs's report shape: a FAIL
 * (non-zero exit) for the thing that actually breaks a page — a page-facing
 * string with no key to read, or a key that renders the wrong language's
 * text — and nothing at WARN level here, because a key-parity drift has no
 * "real but not broken yet" middle state the way a stale generated file
 * does: it either matches or it doesn't.
 *
 * Read-only: writes nothing. Run: node scripts/check-i18n-parity.mjs
 * (also `npm run check:i18n`).
 */
import { LANGS, loadAll, flattenKeys } from './lib/i18n.mjs';

const CANONICAL_LANG = 'pt';
const PT_ONLY_PREFIX = 'pt_only.';

const tables = await loadAll();
const flat = {};
for (const lang of LANGS) flat[lang] = flattenKeys(tables[lang]);

const canonicalKeys = Object.keys(flat[CANONICAL_LANG]);
const canonicalCommonKeys = canonicalKeys.filter((k) => !k.startsWith(PT_ONLY_PREFIX));
const canonicalPtOnlyKeys = canonicalKeys.filter((k) => k.startsWith(PT_ONLY_PREFIX));

const FAILS = [];

for (const lang of LANGS) {
  if (lang === CANONICAL_LANG) continue;
  const keys = new Set(Object.keys(flat[lang]));

  // pt_only.* must not exist anywhere outside pt.json.
  const leaked = [...keys].filter((k) => k.startsWith(PT_ONLY_PREFIX));
  for (const k of leaked) {
    FAILS.push(`[pt-only-leaked] ${lang}.json carries "${k}", a pt_only key — remove it, this block is Portuguese-only by design`);
  }

  // Every non-pt_only canonical key must exist in this language.
  for (const k of canonicalCommonKeys) {
    if (!keys.has(k)) {
      FAILS.push(`[missing-key] ${lang}.json is missing "${k}" (present in pt.json)`);
    }
  }

  // And nothing extra: a key here that pt.json doesn't have means pt.json
  // is no longer the canonical structure the others were built from.
  const commonKeysHere = [...keys].filter((k) => !k.startsWith(PT_ONLY_PREFIX));
  for (const k of commonKeysHere) {
    if (!canonicalCommonKeys.includes(k)) {
      FAILS.push(`[extra-key] ${lang}.json has "${k}", which pt.json does not — add it to pt.json first, or remove it here`);
    }
  }
}

console.log('=== i18n key-parity check (quote-form) ===\n');
console.log(`languages checked : ${LANGS.join(', ')}`);
console.log(`canonical (pt) common keys : ${canonicalCommonKeys.length}`);
console.log(`canonical (pt) pt_only keys: ${canonicalPtOnlyKeys.length}\n`);

if (FAILS.length) {
  console.log(`FAIL (${FAILS.length}):`);
  for (const f of FAILS) console.log(`  ${f}`);
} else {
  console.log('All nine non-Portuguese files match pt.json\'s common keys exactly, and none leaked a pt_only key.');
}

console.log(`\n=== ${FAILS.length} failure(s) ===`);
process.exit(FAILS.length ? 1 : 0);
