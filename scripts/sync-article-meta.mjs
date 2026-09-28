#!/usr/bin/env node
/**
 * Refreshes the listing metadata in data/articles.json from the articles'
 * own <head> — for articles whose page was rewritten after it was registered.
 *
 * build-articles-data.mjs cannot be used for this any more: it rebuilds the
 * whole file from data/articles.extracted.json and its own hard-coded
 * taxonomy, so it drops the PT `clusters`, the per-article `cluster` field and
 * everything registered by the newer builders (build-surf-articles.mjs,
 * build-golf-nautical-pt-en.mjs, …), and reassigns categories.
 *
 * This pass is surgical. For each published PT/EN article whose page carries
 * an `article:modified_time` later than the record's `modified`:
 *
 *   metaTitle    <- <title>
 *   description  <- <meta name="description">
 *   modified     <- article:modified_time
 *   excerpt      <- new description, only if the excerpt was the old description
 *   title        <- new <h1>, only if the card title was the old <h1> (as
 *                   recorded in data/articles.extracted.json); an editorial
 *                   card title is left alone
 *
 * Nothing else is touched. Idempotent: a second run finds nothing newer.
 *
 * Usage: node scripts/sync-article-meta.mjs [--dry-run]
 * Then re-run scripts/generate-blog.mjs to refresh the listings and feeds.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DRY = process.argv.includes('--dry-run');

const NAMED = {
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', rsquo: '’', lsquo: '‘', ldquo: '“', rdquo: '”',
  mdash: '—', ndash: '–', hellip: '…', middot: '·', euro: '€', ordm: 'º', ordf: 'ª', laquo: '«', raquo: '»',
  eacute: 'é', aacute: 'á', iacute: 'í', oacute: 'ó', uacute: 'ú', atilde: 'ã', otilde: 'õ', ccedil: 'ç',
  ecirc: 'ê', acirc: 'â', ocirc: 'ô', agrave: 'à', Eacute: 'É', Aacute: 'Á', uuml: 'ü', ouml: 'ö', auml: 'ä',
};
const decode = (s) =>
  s == null
    ? s
    : s
        .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
        .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(+d))
        .replace(/&([a-zA-Z]+);/g, (m, n) => NAMED[n] ?? m);
const pick = (html, re) => {
  const m = html.match(re);
  return m ? decode(m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()) : null;
};

const dataPath = join(ROOT, 'data', 'articles.json');
const raw = await readFile(dataPath, 'utf8');
const data = JSON.parse(raw);
const extracted = JSON.parse(await readFile(join(ROOT, 'data', 'articles.extracted.json'), 'utf8'));
const oldH1 = new Map([...extracted.pt, ...extracted.en].map((a) => [a.slug, decode(a.h1)]));

let changed = 0;
for (const lang of ['pt', 'en']) {
  for (const a of data.articles[lang]) {
    if (a.status !== 'published') continue;
    const file = join(ROOT, 'public', a.url, 'index.html');
    if (!existsSync(file)) continue;
    const html = await readFile(file, 'utf8');
    const head = html.slice(0, html.indexOf('</head>'));
    const modified = pick(head, /<meta property="article:modified_time" content="([^"]*)"/);
    if (!modified || modified.slice(0, 10) <= (a.modified || '').slice(0, 10)) continue;

    const title = pick(head, /<title>([\s\S]*?)<\/title>/);
    const description = pick(head, /<meta\s+name="description"\s+content="([^"]*)"/);
    const h1 = pick(html, /<h1[^>]*>([\s\S]*?)<\/h1>/);
    const upd = {};
    if (title && title !== a.metaTitle) upd.metaTitle = title;
    if (description && description !== a.description) {
      upd.description = description;
      if (a.excerpt === a.description) upd.excerpt = description;
    }
    if (h1 && h1 !== a.title && oldH1.get(a.slug) === a.title) upd.title = h1;
    upd.modified = modified;
    Object.assign(a, upd);
    changed++;
    console.log(`${lang}/${a.slug}: ${Object.keys(upd).join(', ')}`);
  }
}

const out = JSON.stringify(data, null, 2) + '\n';
if (out !== raw && !DRY) await writeFile(dataPath, out);
console.log(`${changed} article record(s) ${DRY ? 'would be ' : ''}refreshed`);
