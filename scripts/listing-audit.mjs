#!/usr/bin/env node
/**
 * Listing duplicate check.
 *
 * Two cards on the Portuguese homepage advertised different articles but
 * pointed at the same destination, because the article they described had been
 * retired into a stronger one and the card was repointed instead of removed.
 * A reader saw two headlines and got one page; a crawler saw one page reached
 * by two different anchor texts.
 *
 * This walks every listing — the homepage Insights sections, the blog indexes,
 * the paginated pages and the category pages — and reports any destination
 * that appears more than once inside the same listing, and any listing entry
 * pointing at an article that is not published.
 *
 * Read-only. Exits non-zero if anything is found, so it can gate a build.
 */
import { readFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { globSync } from 'node:fs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = join(ROOT, 'public');

const data = JSON.parse(await readFile(join(ROOT, 'data', 'articles.json'), 'utf8'));
const byUrl = new Map();
for (const lang of Object.keys(data.articles)) {
  for (const a of data.articles[lang]) byUrl.set(a.url, a);
}

const listings = globSync('**/*.html', { cwd: PUBLIC })
  .filter((rel) => /^(index\.html|en\/index\.html|blog\/|en\/blog\/)/.test(rel))
  .sort();

let duplicates = 0;
let unpublished = 0;

for (const rel of listings) {
  const html = await readFile(join(PUBLIC, rel), 'utf8');

  // A listing entry is a card anchor. Related-article blocks and body links use
  // other classes, so they are not counted here.
  const hrefs = [...html.matchAll(/<a href="([^"]+)" class="blog-card\b/g)].map((m) => m[1]);
  if (!hrefs.length) continue;

  const seen = new Map();
  for (const h of hrefs) seen.set(h, (seen.get(h) || 0) + 1);

  for (const [href, n] of seen) {
    if (n > 1) {
      duplicates++;
      console.log(`DUPLICATE  ${rel}: ${href} appears ${n}x`);
    }
    const a = byUrl.get(href);
    if (a && a.status !== 'published') {
      unpublished++;
      console.log(`${a.status.toUpperCase()}  ${rel}: ${href} is status "${a.status}"`);
    }
    if (!a && href.includes('/blog/') && !/\/(categoria|category|pagina|page)\//.test(href)) {
      unpublished++;
      console.log(`UNKNOWN    ${rel}: ${href} is not in data/articles.json`);
    }
  }
  console.log(`ok  ${rel.padEnd(46)} ${hrefs.length} cards, ${seen.size} distinct destinations`);
}

console.log(`\nlistings checked:        ${listings.length}`);
console.log(`duplicate destinations:  ${duplicates}`);
console.log(`non-published entries:   ${unpublished}`);
process.exit(duplicates + unpublished ? 1 : 0);
