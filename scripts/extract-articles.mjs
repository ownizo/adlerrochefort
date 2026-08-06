#!/usr/bin/env node
/**
 * One-off extractor. Crawls public/blog and public/en/blog, reads the metadata
 * that already lives in each article's <head>, and writes the raw inventory to
 * data/articles.extracted.json. The curated data/articles.json is produced from
 * this and then hand-maintained; re-run only to spot articles missing from it.
 */
import { readdir, readFile, writeFile, stat } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

function pick(html, re) {
  const m = html.match(re);
  return m ? m[1].replace(/\s+/g, ' ').trim() : null;
}

function decode(s) {
  if (s == null) return s;
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&rsquo;/g, '’')
    .replace(/&nbsp;/g, ' ');
}

async function inventory(relDir) {
  const abs = join(ROOT, 'public', relDir);
  const entries = await readdir(abs, { withFileTypes: true });
  const out = [];
  for (const e of entries) {
    if (!e.isDirectory()) continue;
    const file = join(abs, e.name, 'index.html');
    try {
      await stat(file);
    } catch {
      continue;
    }
    const html = await readFile(file, 'utf8');
    const head = html.slice(0, html.indexOf('</head>') + 7);
    out.push({
      slug: e.name,
      path: `/${relDir}/${e.name}/`,
      title: decode(pick(head, /<title>([\s\S]*?)<\/title>/)),
      h1: decode(pick(html, /<h1[^>]*>([\s\S]*?)<\/h1>/)),
      description: decode(pick(head, /<meta name="description" content="([\s\S]*?)"\s*\/?>/)),
      ogTitle: decode(pick(head, /<meta property="og:title" content="([\s\S]*?)"\s*\/?>/)),
      ogImage: pick(head, /<meta property="og:image" content="([\s\S]*?)"\s*\/?>/),
      published: pick(head, /<meta property="article:published_time" content="([\s\S]*?)"\s*\/?>/),
      modified: pick(head, /<meta property="article:modified_time" content="([\s\S]*?)"\s*\/?>/),
      canonical: pick(head, /<link rel="canonical" href="([\s\S]*?)"\s*\/?>/),
      hreflangPt: pick(head, /<link rel="alternate" hreflang="pt-PT" href="([\s\S]*?)"\s*\/?>/),
      hreflangEn: pick(head, /<link rel="alternate" hreflang="en(?:-GB)?" href="([\s\S]*?)"\s*\/?>/),
      tag: decode(pick(html, /<div class="article-tag">([\s\S]*?)<\/div>/)),
      dateLabel: decode(pick(html, /<div class="article-date">([\s\S]*?)<\/div>/)),
      featuredImage: pick(html, /<img src="(\/images\/blog\/[^"]+)"[^>]*class="article-featured-image"/),
      noindex: /content="noindex/.test(head),
      words: html.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length,
    });
  }
  out.sort((a, b) => a.slug.localeCompare(b.slug));
  return out;
}

const pt = await inventory('blog');
const en = await inventory('en/blog');

await writeFile(
  join(ROOT, 'data', 'articles.extracted.json'),
  JSON.stringify({ pt, en }, null, 2) + '\n'
);

console.log(`pt=${pt.length} en=${en.length}`);
console.log('pt missing published:', pt.filter((a) => !a.published).map((a) => a.slug).join(', ') || 'none');
console.log('en noindex:', en.filter((a) => a.noindex).map((a) => a.slug).join(', ') || 'none');
