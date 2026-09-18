#!/usr/bin/env node
/**
 * Key-parity check for the quote-form i18n string tables
 * (data/i18n/quote-form/{lang}.json — see scripts/lib/i18n.mjs).
 *
 * Rule (Especificação dos Formulários de Cotação v2, secção 7): pt.json is
 * the canonical structure. Two kinds of drift, two severities:
 *
 *   FAIL — always a mistake, never a legitimate state:
 *     - a `pt_only.*` key (the "Antes de preencher" framing block, secção
 *       1.2 — Portuguese-only by requirement) appears in any file other
 *       than pt.json.
 *     - a non-pt_only key exists in some language file that pt.json does
 *       not have. pt.json is the structure everyone else is built from; a
 *       key that only exists somewhere else means that stopped being true.
 *
 *   WARN — expected during a phased rollout (Especificação v2 ships one
 *   ramo/language pair at a time — see the plan's faseamento), not a
 *   build-breaking problem:
 *     - a key exists in pt.json but is missing from another language's
 *       file. Fase 1 (PT+EN, Auto only) is the first case this hits on
 *       purpose: pt.json/en.json gain real `ramos.auto.*` keys the other
 *       eight files don't have yet, and that must not fail the build — it's
 *       translation debt to close in a later phase, not a structural error.
 *
 * Modelled on scripts/check-generator-freshness.mjs's FAIL/WARN report
 * shape and exit-code convention (WARN never affects the exit code).
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
const WARNS = [];

for (const lang of LANGS) {
  if (lang === CANONICAL_LANG) continue;
  const keys = new Set(Object.keys(flat[lang]));

  // pt_only.* must not exist anywhere outside pt.json — always a mistake.
  const leaked = [...keys].filter((k) => k.startsWith(PT_ONLY_PREFIX));
  for (const k of leaked) {
    FAILS.push(`[pt-only-leaked] ${lang}.json carries "${k}", a pt_only key — remove it, this block is Portuguese-only by design`);
  }

  // A canonical key missing here is translation debt (WARN), not a build
  // break — expected mid-rollout, tracked so it doesn't get forgotten.
  const missing = canonicalCommonKeys.filter((k) => !keys.has(k));
  if (missing.length) {
    const scoped = missing.filter(k => !k.startsWith('ramos.empresarial.') && !k.startsWith('ramos.vida.') && !k.startsWith('ramos.private_clients.'));
    if (scoped.length) FAILS.push(`[quotation-keys] ${lang}: ${scoped.join(', ')}`);
    WARNS.push(`[missing-keys] ${lang}.json is missing ${missing.length} key(s) present in pt.json — not yet translated for this phase: ${missing.slice(0, 5).join(', ')}${missing.length > 5 ? `, +${missing.length - 5} more` : ''}`);
  }

  // A key here that pt.json doesn't have is always wrong — pt.json is the
  // structure everyone else is built from, never the other way round.
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
  console.log();
}
if (WARNS.length) {
  console.log(`WARN (${WARNS.length}):`);
  for (const w of WARNS) console.log(`  ${w}`);
  console.log();
}
if (!FAILS.length && !WARNS.length) {
  console.log('All nine non-Portuguese files match pt.json\'s common keys exactly, and none leaked a pt_only key.\n');
}

console.log(`=== ${FAILS.length} failure(s), ${WARNS.length} warning(s) ===`);
process.exit(FAILS.length ? 1 : 0);
