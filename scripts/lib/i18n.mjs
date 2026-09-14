/**
 * Loader for the quote-form i18n string tables.
 *
 * One JSON file per language under data/i18n/quote-form/, same key
 * structure in each — see scripts/check-i18n-parity.mjs for the build-time
 * check that keeps them that way. Organisation mirrors scripts/lib/
 * lang-pairs.mjs (a small, well-commented module other scripts import
 * rather than each re-reading the raw files), not because the two loaders
 * share logic — they don't — but so anyone who already knows lang-pairs.mjs
 * recognises the shape here.
 *
 * `pt_only.*` is the deliberate exception: the "Antes de preencher" framing
 * block only exists in Portuguese (see Especificação dos Formulários de
 * Cotação v2, secção 1.2) — every other language's file simply has no
 * `pt_only` key at all, and the parity checker knows to skip it rather than
 * fail every other language for not carrying a section that was never meant
 * for them.
 */
import { readFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
export const I18N_DIR = join(ROOT, 'data', 'i18n', 'quote-form');

// The ten language trees this site actually serves (scripts/hreflang.mjs,
// scripts/lib/market-hreflang.mjs) — 'sv'/'da' are the language codes for
// the /se//dk/ URL segments, not the segments themselves; 'he' likewise for
// /il/. Filenames use the language code, matching this list exactly.
export const LANGS = ['pt', 'en', 'nl', 'de', 'fr', 'pl', 'sv', 'da', 'zh', 'he'];

const cache = new Map();

export async function loadLang(lang) {
  if (!LANGS.includes(lang)) throw new Error(`unknown quote-form language: ${lang}`);
  if (cache.has(lang)) return cache.get(lang);
  const path = join(I18N_DIR, `${lang}.json`);
  const json = JSON.parse(await readFile(path, 'utf8'));
  cache.set(lang, json);
  return json;
}

export async function loadAll() {
  const out = {};
  for (const lang of LANGS) out[lang] = await loadLang(lang);
  return out;
}

/** Flattens a nested string table to `"a.b.c"` -> value, depth-first. Used by
 *  both the parity checker and any page-side lookup that wants a flat key. */
export function flattenKeys(obj, prefix = '') {
  const out = {};
  for (const [k, v] of Object.entries(obj || {})) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      Object.assign(out, flattenKeys(v, key));
    } else {
      out[key] = v;
    }
  }
  return out;
}
