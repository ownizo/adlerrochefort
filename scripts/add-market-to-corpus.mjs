#!/usr/bin/env node
/**
 * Joins a newly registered language market to the rest of the site.
 *
 *   node scripts/add-market-to-corpus.mjs es            # write
 *   node scripts/add-market-to-corpus.mjs it --dry-run  # report only
 *
 * Written for Spanish (/es/, September 2026) and parameterised so that Italian
 * — and any later market — goes through exactly the same path:
 *
 *   1. register the descriptor in scripts/lib/market-registry.mjs;
 *   2. node scripts/generate-market-clusters.mjs <key>
 *   3. node scripts/add-market-to-corpus.mjs <key>
 *   4. node scripts/generate-sitemap.mjs
 *
 * Why not simply run scripts/lang-switcher.mjs and scripts/hreflang.mjs over
 * the corpus? Because both REWRITE whole blocks from their own records, and on
 * past runs they reverted hand-tuned pairs those records did not know about
 * (the German Madeira page's English link, for one). This script only ever
 * ADDS: one selector row per language list and one hreflang line per paired
 * page, and it never touches anything else in the file. Every step is
 * idempotent — a second run changes nothing.
 *
 * What it does, in order:
 *
 *   a. Regenerates every registered market cluster (scripts/lib/market-cluster.mjs).
 *      The generated pages are a pure function of the descriptors — verified
 *      byte-identical before Spanish was added — so this is how the other
 *      markets' pages gain the new selector row and hreflang alternates, in the
 *      exact order the generator emits them. A page is only written if its
 *      bytes change.
 *
 *   b. Every other HTML page under public/: in each language list (header
 *      menu, mobile drawer, footer menu and its <noscript> copy) a row for the
 *      new language is inserted after the row of the language that precedes it
 *      in scripts/lib/lang-selector.mjs, copying that row's own markup shape
 *      (with or without dir/hreflang/spans), so the list stays internally
 *      consistent and identical to what lang-switcher.mjs would render. The row
 *      points at the page's real counterpart where scripts/lib/market-hreflang.mjs
 *      pairs one, and otherwise at the new market's home, labelled as such.
 *
 *   c. Pages that market-hreflang pairs with a page of the new market — in
 *      practice the hand-built homepages /, /en/, /nl/, /fr/, /de/ — gain one
 *      <link rel="alternate"> for it, placed after their last non-x-default
 *      alternate, which is where scripts/hreflang.mjs would put it.
 *
 *   d. The market's lead forms are registered where the dk forms are: the
 *      notification flow (netlify/functions/submission-created.mjs
 *      HANDLED_FORMS), the CRM classification (netlify/functions/lib/
 *      lead-classification.mjs FORM_CLASSIFICATION) and the consent parser
 *      (netlify/functions/lib/quote-requests-sync.mjs CONSENT_TRUE_VALUES).
 *      Form names come from the descriptor — the shared `formName` and any
 *      per-page `wizard.formName` — so nothing is guessed.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { globSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { MARKETS, MARKET_BY_KEY } from './lib/market-registry.mjs';
import { LANGS, SELECTOR_UI } from './lib/lang-selector.mjs';
import { marketPairs } from './lib/market-hreflang.mjs';
import { buildPairMap } from './lib/lang-pairs.mjs';
import { renderPage } from './lib/market-cluster.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = join(ROOT, 'public');
const ORIGIN = 'https://adlerrochefort.com';

const args = process.argv.slice(2);
const DRY = args.includes('--dry-run');
const key = args.find((a) => !a.startsWith('--'));

if (!key || !MARKET_BY_KEY[key]) {
  console.error(`Usage: node scripts/add-market-to-corpus.mjs <key> [--dry-run]`);
  console.error(`Registered markets: ${MARKETS.map((m) => m.key).join(', ')}`);
  process.exit(1);
}

const market = MARKET_BY_KEY[key];
const lang = LANGS.find((l) => l.key === key);
if (!lang) {
  console.error(`"${key}" is registered but has no row in scripts/lib/lang-selector.mjs CATALOG — add one first.`);
  process.exit(1);
}

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const reEsc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const report = { regenerated: [], selectorPages: [], selectorRows: 0, hreflangPages: [], forms: [], skipped: [] };

async function save(file, before, after) {
  if (before === after) return false;
  if (!DRY) await writeFile(file, after);
  return true;
}

/* ─────────── a. regenerate the market clusters ─────────── */

const generated = new Set();
for (const m of MARKETS) {
  for (const page of m.pages) {
    generated.add(page.url);
    const file = join(PUBLIC, page.url.replace(/^\/|\/$/g, ''), 'index.html');
    let before = '';
    try {
      before = await readFile(file, 'utf8');
    } catch {
      /* new page */
    }
    if (await save(file, before, renderPage(m, page))) report.regenerated.push(page.url);
  }
}

/* ─────────── b + c. the rest of the corpus ─────────── */

const pairMap = await buildPairMap();
const LANG_ORDER = LANGS.map((l) => l.key);
const predecessors = LANG_ORDER.slice(0, LANG_ORDER.indexOf(key)).reverse();
const htmlOf = Object.fromEntries(LANGS.map((l) => [l.key, l.html]));
const homes = new Set(LANGS.filter((l) => !['pt', 'en'].includes(l.key)).map((l) => l.home));

const langOf = (path) => {
  const seg = path.split('/')[1];
  return LANG_ORDER.includes(seg) && seg !== 'pt' ? seg : 'pt';
};

/** Insert the new row into one <ul>…</ul> language list. Returns the new list or null. */
function addRow(list, { href, fallback, pageLang }) {
  if (new RegExp(`<a\\b[^>]*\\blang="${reEsc(lang.html)}"`).test(list)) return null; // already there
  // Anchor: the nearest preceding language that this list carries.
  let anchor = null;
  for (const k of predecessors) {
    const m = list.match(new RegExp(`([ \\t]*)(<li><a\\b[^>]*\\blang="${reEsc(htmlOf[k])}"[^>]*>[\\s\\S]*?</a></li>)`));
    if (m) {
      anchor = m;
      break;
    }
  }
  if (!anchor) return null;
  const [whole, indent, row] = anchor;
  const openTag = row.match(/<a\b[^>]*>/)[0];
  const hasDir = /\sdir="/.test(openTag);
  const hasHreflang = /\shreflang="/.test(openTag);
  const spanned = /<a\b[^>]*><span>/.test(row);

  let note = '';
  if (fallback && spanned) {
    // Reuse the wording this list already uses for "home page" so the new row
    // reads exactly like its neighbours; fall back to the selector's own copy.
    const existing = [...list.matchAll(/<a\b[^>]*href="([^"]*)"[^>]*>[\s\S]*?<span class="ar-langsel-note">([^<]*)<\/span>/g)].find(
      (m) => homes.has(m[1])
    );
    const text = existing ? existing[2] : esc((SELECTOR_UI[pageLang] || SELECTOR_UI.en).home);
    note = `<span class="ar-langsel-note">${text}</span>`;
  }
  const attrs = [`href="${esc(href)}"`, `lang="${lang.html}"`];
  if (hasDir) attrs.push(`dir="${lang.dir || 'ltr'}"`);
  if (hasHreflang) attrs.push(`hreflang="${lang.hreflang}"`);
  const inner = spanned ? `<span>${esc(lang.label)}</span>${note}` : esc(lang.label);
  const newRow = `<li><a ${attrs.join(' ')}>${inner}</a></li>`;
  const at = anchor.index + whole.length;
  return list.slice(0, at) + `\n${indent}${newRow}` + list.slice(at);
}

/** A <ul> is a language list if it links at least three catalogued languages by `lang`. */
function isLanguageList(list) {
  const langs = new Set([...list.matchAll(/<li><a\b[^>]*\blang="([^"]+)"/g)].map((m) => m[1]));
  return [...langs].filter((l) => Object.values(htmlOf).includes(l)).length >= 3;
}

const files = globSync('**/*.html', { cwd: PUBLIC }).sort();
for (const rel of files) {
  const path = '/' + rel.replace(/index\.html$/, '');
  if (generated.has(path)) continue;
  const file = join(PUBLIC, rel);
  const before = await readFile(file, 'utf8');
  let html = before;

  const pageLang = langOf(path);
  const pairs = { ...(pairMap.get(path) || {}), ...(marketPairs(path) || {}) };
  const href = pairs[key] || lang.home;
  const fallback = !pairs[key];

  // b. selector rows
  let rows = 0;
  html = html.replace(/<ul\b[^>]*>[\s\S]*?<\/ul>/g, (list) => {
    if (!isLanguageList(list)) return list;
    const out = addRow(list, { href, fallback, pageLang });
    if (out === null) return list;
    rows += 1;
    return out;
  });

  // c. hreflang
  let addedHreflang = false;
  const mp = marketPairs(path);
  if (mp && mp[key] && !new RegExp(`hreflang="${reEsc(market.hreflang)}"`).test(html.split('</head>')[0])) {
    const alts = [...html.matchAll(/([ \t]*)<link\b[^>]*\brel="alternate"[^>]*\bhreflang="([^"]+)"[^>]*>/g)].filter(
      (m) => m[2] !== 'x-default'
    );
    const last = alts[alts.length - 1];
    if (last) {
      const at = last.index + last[0].length;
      const pretty = /\n/.test(html.slice(Math.max(0, last.index - 1), last.index + 1)) || last[1].length > 0;
      const line = `<link rel="alternate" hreflang="${market.hreflang}" href="${ORIGIN}${mp[key]}">`;
      html = html.slice(0, at) + (pretty ? `\n${last[1]}` : '') + line + html.slice(at);
      addedHreflang = true;
    } else {
      report.skipped.push(`${path}: paired with ${mp[key]} but has no hreflang block to extend`);
    }
  }

  if (await save(file, before, html)) {
    if (rows) {
      report.selectorPages.push(path);
      report.selectorRows += rows;
    }
    if (addedHreflang) report.hreflangPages.push(path);
  }
}

/* ─────────── d. form registration ─────────── */

const LANG_NAME = new Intl.DisplayNames(['en'], { type: 'language' }).of(market.htmlLang.slice(0, 2));
const KEY_UP = market.key.toUpperCase();
const LANG_UP = market.languageValue.toUpperCase();
const RAMO = {
  home: { en: 'Home', pt: 'Habitação', product: 'home' },
  health: { en: 'Health', pt: 'Saúde', product: 'health' },
  motor: { en: 'Car', pt: 'Automóvel', product: 'auto' },
  liability: { en: 'Liability', pt: 'RC Profissional', product: 'professional-liability' },
};

const wizardPages = market.pages.filter((p) => p.wizard?.formName);

async function patch(relPath, fn) {
  const file = join(ROOT, relPath);
  const before = await readFile(file, 'utf8');
  const after = fn(before);
  if (await save(file, before, after)) report.forms.push(relPath);
}

/** Insert `block` just before the `\n};` that closes the object opened by `opener`. */
function insertIntoObject(src, opener, block) {
  const start = src.indexOf(opener);
  if (start === -1) throw new Error(`cannot find "${opener}"`);
  const end = src.indexOf('\n};', start);
  return src.slice(0, end) + '\n' + block.replace(/\n$/, '') + src.slice(end);
}

await patch('netlify/functions/submission-created.mjs', (src) => {
  const hasLabels = new RegExp(`^\\s+${market.htmlLang.slice(0, 2)}: QUOTE_LABELS_`, 'm').test(src);
  const entries = [];
  if (!src.includes(`"${market.formName}": {`)) {
    entries.push(`  "${market.formName}": {
    quote: true,
    en: true,
    heading: "New ${LANG_NAME} quote request",
    page: "/${market.key}/",
    branch: ${JSON.stringify(market.otherValue)},
  },`);
  }
  for (const p of wizardPages) {
    if (src.includes(`"${p.wizard.formName}": {`)) continue;
    const r = RAMO[p.cluster] || { en: p.cluster, pt: p.cluster };
    // Without a QUOTE_LABELS table for this language the email falls back to
    // English labels (`en: true`) rather than to Portuguese.
    entries.push(`  "${p.wizard.formName}": {
    quote: true,
    lang: "${market.htmlLang.slice(0, 2)}",${hasLabels ? '' : '\n    en: true,'}
    heading: "New ${LANG_NAME} ${r.en} quote request",
    page: "${p.url}",
    branch: "${r.pt} (${KEY_UP})",${p.cluster === 'liability' ? '\n    slaHours: "48 a 72",' : ''}
  },`);
  }
  if (!entries.length) return src;
  const block = `  // ${LANG_NAME} (/${market.key}/) — registered by scripts/add-market-to-corpus.mjs
  // from scripts/${market.key}-cluster.data.mjs, same shape as the dk entries.
${entries.join('\n')}
`;
  return insertIntoObject(src, 'export const HANDLED_FORMS = {', block);
});

await patch('netlify/functions/lib/lead-classification.mjs', (src) => {
  const entries = [];
  if (!src.includes(`'${market.formName}':`)) {
    entries.push(`  '${market.formName}': { entityType: 'individual', market: 'PT', product: 'general', language: '${LANG_UP}' },`);
  }
  for (const p of wizardPages) {
    if (src.includes(`'${p.wizard.formName}':`)) continue;
    const r = RAMO[p.cluster];
    if (!r) continue;
    entries.push(
      p.cluster === 'liability'
        ? `  '${p.wizard.formName}': {
    entityType: 'contextual',
    market: 'PT',
    language: '${LANG_UP}',
    product: 'professional-liability',
    classify: classifyRcProfissionalDedicated,
  },`
        : `  '${p.wizard.formName}': { entityType: 'individual', market: 'PT', language: '${LANG_UP}', product: '${r.product}' },`
    );
  }
  if (!entries.length) return src;
  const block = `  // ${LANG_NAME} (/${market.key}/) — registered by scripts/add-market-to-corpus.mjs.
  // \`market\` stays 'PT' like every other language cluster: the business is
  // Portuguese; the lead's own market travels in the submitted \`market\` field.
${entries.join('\n')}
`;
  return insertIntoObject(src, 'const FORM_CLASSIFICATION = {', block);
});

await patch('netlify/functions/lib/quote-requests-sync.mjs', (src) => {
  const value = market.consentValue.toLowerCase();
  const m = src.match(/const CONSENT_TRUE_VALUES = new Set\(\[([\s\S]*?)\]\);/);
  if (!m) throw new Error('cannot find CONSENT_TRUE_VALUES');
  if (m[1].includes(JSON.stringify(value))) return src;
  const indent = (m[1].match(/\n([ \t]+)"/) || [, '    '])[1];
  const body = m[1].replace(/\s*$/, '') + `\n${indent}${JSON.stringify(value)}, // ${KEY_UP}\n  `;
  return src.replace(m[0], `const CONSENT_TRUE_VALUES = new Set([${body}]);`);
});

/* ─────────── report ─────────── */

console.log(`${DRY ? '[dry run] ' : ''}${market.name} (/${market.key}/) joined to the corpus`);
console.log(`  generated pages rewritten:   ${report.regenerated.length}`);
console.log(`  pages given a selector row:  ${report.selectorPages.length} (${report.selectorRows} lists)`);
console.log(`  pages given an hreflang:     ${report.hreflangPages.length}${report.hreflangPages.length ? ' — ' + report.hreflangPages.join(', ') : ''}`);
console.log(`  form registrations patched:  ${report.forms.length ? report.forms.join(', ') : 'none (already registered)'}`);
if (report.skipped.length) {
  console.log('  skipped:');
  report.skipped.forEach((s) => console.log(`    ${s}`));
}
console.log('Next: node scripts/generate-sitemap.mjs');
