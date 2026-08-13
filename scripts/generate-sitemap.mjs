#!/usr/bin/env node
/**
 * Regenerates the sitemap from the filesystem plus `data/articles.json`.
 *
 * Output is a sitemap index (`/sitemap.xml`) pointing at two children:
 *   /sitemap-pages.xml   institutional pages, landing pages, listing pages
 *   /sitemap-blog.xml    published articles, PT and EN
 *
 * Rules applied:
 *   - a page is included only if it exists on disk and is not `noindex`
 *   - drafts and merged (redirected) articles never appear
 *   - hreflang alternates are emitted only for confirmed bidirectional pairs
 *   - x-default appears on the homepage pair and the services hub only, and
 *     points at the Portuguese URL
 *   - lastmod is carried over from the previous sitemap where a page has one,
 *     so untouched pages do not all claim to have changed today
 */
import { readFile, writeFile } from 'node:fs/promises';
import { existsSync, globSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT, PUBLIC, ORIGIN } from './lib/chrome.mjs';

const TODAY = new Date().toISOString().slice(0, 10);
const data = JSON.parse(await readFile(join(ROOT, 'data', 'articles.json'), 'utf8'));

// --- previous lastmod values -------------------------------------------------
const previous = new Map();
for (const file of ['sitemap.xml', 'sitemap-pages.xml', 'sitemap-blog.xml']) {
  const p = join(PUBLIC, file);
  if (!existsSync(p)) continue;
  const xml = await readFile(p, 'utf8');
  for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>\s*(?:<xhtml:link[^>]*>\s*)*<lastmod>([^<]+)<\/lastmod>/g)) {
    previous.set(m[1].replace(ORIGIN, ''), m[2]);
  }
}

// --- what exists on disk -----------------------------------------------------
const onDisk = new Set(
  globSync('**/index.html', { cwd: PUBLIC }).map((f) => '/' + f.replace(/index\.html$/, ''))
);
const noindex = new Set();
// What each page declares in its own <head>, written by scripts/hreflang.mjs.
// Used only where a Dutch alternate is added to a page whose set this script
// does not otherwise model, so the sitemap lists every member of that set
// instead of the Dutch one alone.
const declared = new Map(); // path -> [[hreflang, href]]
for (const path of onDisk) {
  const html = await readFile(join(PUBLIC, path.slice(1), 'index.html'), 'utf8');
  if (/<meta[^>]+name=["']robots["'][^>]+noindex/i.test(html)) noindex.add(path);
  const alts = [...html.matchAll(/<link[^>]+rel="alternate"[^>]+hreflang="([^"]+)"[^>]+href="([^"]+)"/g)]
    .map((m) => [m[1], m[2].replace(ORIGIN, '')])
    .filter(([, href]) => href.startsWith('/'));
  if (alts.length) declared.set(path, alts);
}

// --- translation pairs -------------------------------------------------------
const pairs = new Map(); // pt url -> en url
for (const a of data.articles.pt) {
  if (a.status !== 'published' || !a.translationOf) continue;
  const en = data.articles.en.find((x) => x.slug === a.translationOf && x.status === 'published');
  if (en) pairs.set(a.url, en.url);
}

// --- the Dutch cluster -------------------------------------------------------
// The Dutch pages record their confirmed equivalents in data/articles.json
// (`alternates`), because a counterpart may be Portuguese or English and never
// shares the slug that `translationOf` pairs on. The reciprocal declaration goes
// on that one target and nowhere else, exactly as scripts/hreflang.mjs writes it
// into the markup: a sitemap that said something different from the pages would
// be two contradictory annotations of the same set.
const nlAlternates = new Map(); // url -> [[hreflang, href]]
for (const a of data.articles.nl || []) {
  if (a.status !== 'published') continue;
  const own = [];
  for (const [key, target] of Object.entries(a.alternates || {})) {
    own.push([key === 'pt' ? 'pt-PT' : 'en-GB', target]);
    nlAlternates.set(target, [['nl', a.url]]);
  }
  if (!own.length) continue;
  own.push(['nl', a.url]);
  nlAlternates.set(a.url, own);
}

const basePairs = (url) => {
  if (url === '/') return [['pt-PT', '/'], ['en-GB', '/en/'], ['x-default', '/']];
  if (url === '/en/') return [['pt-PT', '/'], ['en-GB', '/en/'], ['x-default', '/']];
  if (url === '/seguros/') return [['pt-PT', '/seguros/'], ['x-default', '/seguros/']];
  if (pairs.has(url)) return [['pt-PT', url], ['en-GB', pairs.get(url)]];
  for (const [pt, en] of pairs) if (en === url) return [['pt-PT', pt], ['en-GB', en]];
  return [];
};

const alternatesFor = (url) => {
  const nlAlts = nlAlternates.get(url) || [];
  // A page that gains a Dutch alternate must still list the rest of its set.
  // For the landings that set lives in the markup, not in `pairs`.
  const out = [...(nlAlts.length ? declared.get(url) || basePairs(url) : basePairs(url))];
  for (const [lang, href] of nlAlts) {
    if (!out.some(([l, h]) => l === lang && h === href)) out.push([lang, href]);
  }
  return out;
};

const entry = ({ url, lastmod, changefreq, priority }) => {
  const alts = alternatesFor(url)
    .filter(([, href]) => onDisk.has(href) && !noindex.has(href))
    .map(([lang, href]) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${ORIGIN}${href}" />`)
    .join('\n');
  return `  <url>
    <loc>${ORIGIN}${url}</loc>
${alts ? alts + '\n' : ''}    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
};

const wrap = (entries) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`;

// --- pages -------------------------------------------------------------------
const isArticle = (u) => /^\/(en\/)?blog\/[^/]+\/$/.test(u) && !u.startsWith('/blog/categoria/') && !u.startsWith('/blog/pagina/');

const priorityFor = (u) => {
  if (u === '/' || u === '/en/') return '1.0';
  if (u === '/seguros/' || u === '/blog/' || u === '/en/blog/') return '0.9';
  if (/^\/seguros\/[^/]+\/$/.test(u) || /^\/en\/insurance\/[^/]+\/$/.test(u)) return '0.9';
  // Pagination is checked before the category hubs: a paginated category URL
  // such as /en/blog/category/home-property/page/2/ is a low-value crawl
  // target, not a hub, and must not inherit the hub's 0.7.
  if (/pagina\/\d+\/$|page\/\d+\/$/.test(u)) return '0.4';
  if (/^\/blog\/categoria\//.test(u) || /^\/en\/blog\/category\//.test(u)) return '0.7';
  if (/^\/(politica-de-privacidade|termos-e-condicoes|en\/privacy-policy|en\/terms-and-conditions)\//.test(u)) return '0.3';
  return '0.8';
};

const changefreqFor = (u) =>
  u === '/' || u === '/en/' || u === '/blog/' || u === '/en/blog/' ? 'weekly' : 'monthly';

const pageUrls = [...onDisk]
  .filter((u) => !noindex.has(u))
  .filter((u) => !isArticle(u))
  // Thank-you pages are dead ends, and the download page and the
  // mediator-transfer tool are both Disallowed in robots.txt. Listing a
  // crawl-blocked URL in the sitemap is a contradiction Search Console reports
  // as an error, so they stay out.
  .filter((u) => !/^\/(nl\/bedankt|descarregar|alterarmediador)\//.test(u))
  .sort();

const pageEntries = pageUrls.map((url) =>
  entry({
    url,
    lastmod: previous.get(url) || TODAY,
    changefreq: changefreqFor(url),
    priority: priorityFor(url),
  })
);

// --- articles ----------------------------------------------------------------
const articles = [...data.articles.pt, ...data.articles.en]
  .filter((a) => a.status === 'published')
  .filter((a) => onDisk.has(a.url) && !noindex.has(a.url))
  .sort((a, b) => a.url.localeCompare(b.url));

const articleEntries = articles.map((a) =>
  entry({
    url: a.url,
    lastmod: (a.modified || a.published || TODAY).slice(0, 10),
    changefreq: 'monthly',
    priority: a.featured ? '0.8' : '0.7',
  })
);

await writeFile(join(PUBLIC, 'sitemap-pages.xml'), wrap(pageEntries));
await writeFile(join(PUBLIC, 'sitemap-blog.xml'), wrap(articleEntries));
await writeFile(
  join(PUBLIC, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${ORIGIN}/sitemap-pages.xml</loc>
    <lastmod>${TODAY}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${ORIGIN}/sitemap-blog.xml</loc>
    <lastmod>${TODAY}</lastmod>
  </sitemap>
</sitemapindex>
`
);

// --- consistency report ------------------------------------------------------
const inSitemap = new Set([...pageUrls, ...articles.map((a) => a.url)]);
const missing = [...onDisk].filter((u) => !inSitemap.has(u) && !noindex.has(u));
const dead = [...inSitemap].filter((u) => !onDisk.has(u));

console.log(`pages: ${pageEntries.length}`);
console.log(`articles: ${articleEntries.length}`);
console.log(`noindex skipped: ${noindex.size}`);
console.log(`on disk but not in sitemap: ${missing.length}${missing.length ? ' -> ' + missing.join(', ') : ''}`);
console.log(`in sitemap but not on disk: ${dead.length}${dead.length ? ' -> ' + dead.join(', ') : ''}`);
