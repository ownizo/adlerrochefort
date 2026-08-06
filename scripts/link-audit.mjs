#!/usr/bin/env node
/**
 * Link and orphan audit.
 *
 * Walks every HTML file under public/, resolves every internal href against
 * what is actually on disk (and against the redirect rules in _redirects and
 * netlify.toml), and reports:
 *
 *   * broken links — an href that resolves to nothing and matches no redirect;
 *   * redirected links — an href that only works because of a 301, which is a
 *     link that should be pointed at the destination directly;
 *   * orphans — a page in the sitemap that nothing else links to;
 *   * thin inbound — a page with fewer than two inbound links.
 *
 * Read-only: it writes a JSON report and prints a summary, and changes nothing.
 */
import { readFile, writeFile, access } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { globSync } from 'node:fs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = join(ROOT, 'public');
const SITE = 'https://adlerrochefort.com';

const exists = (p) => access(p).then(() => true, () => false);

// --- redirect rules -----------------------------------------------------------
const redirects = [];
{
  const raw = await readFile(join(PUBLIC, '_redirects'), 'utf8').catch(() => '');
  for (const line of raw.split('\n')) {
    const t = line.trim();
    if (!t || t.startsWith('#')) continue;
    const [from, to] = t.split(/\s+/);
    redirects.push({ from, to });
  }
}
{
  const toml = await readFile(join(ROOT, 'netlify.toml'), 'utf8');
  const blocks = toml.split('[[redirects]]').slice(1);
  for (const b of blocks) {
    const from = b.match(/from\s*=\s*"([^"]+)"/)?.[1];
    const to = b.match(/to\s*=\s*"([^"]+)"/)?.[1];
    if (from && to) redirects.push({ from, to });
  }
}

const matchRedirect = (path) =>
  redirects.find((r) =>
    r.from.endsWith('/*') ? path.startsWith(r.from.slice(0, -1)) : r.from === path
  );

/** Maps a site path to the file that would serve it, or null. */
async function resolve(path) {
  const clean = path.replace(/[?#].*$/, '');
  if (!clean.startsWith('/')) return null;
  const candidates = clean.endsWith('/')
    ? [join(PUBLIC, clean, 'index.html')]
    : [join(PUBLIC, clean), join(PUBLIC, clean + '.html'), join(PUBLIC, clean, 'index.html')];
  for (const c of candidates) if (await exists(c)) return c;
  return null;
}

// --- crawl --------------------------------------------------------------------
const files = globSync('**/*.html', { cwd: PUBLIC }).sort();
const inbound = new Map(); // target path -> Set of source pages
const outbound = new Map(); // source page -> Set of target paths
const broken = [];
const viaRedirect = [];
const cache = new Map();

const pagePath = (rel) => '/' + rel.replace(/index\.html$/, '').replace(/\.html$/, '');

for (const rel of files) {
  const from = pagePath(rel);
  const html = await readFile(join(PUBLIC, rel), 'utf8');

  for (const m of html.matchAll(/<a\b[^>]*\shref="([^"]+)"/g)) {
    let href = m[1];
    if (href.startsWith(SITE)) href = href.slice(SITE.length) || '/';
    if (!href.startsWith('/')) continue; // external, mailto:, tel:, #anchor
    const target = href.replace(/[?#].*$/, '');
    if (!target) continue;

    if (!inbound.has(target)) inbound.set(target, new Set());
    if (target !== from) inbound.get(target).add(from);
    if (!outbound.has(from)) outbound.set(from, new Set());
    if (target !== from) outbound.get(from).add(target);

    if (!cache.has(target)) cache.set(target, await resolve(target));
    if (cache.get(target)) continue;

    const rule = matchRedirect(target);
    if (rule) viaRedirect.push({ from: `public/${rel}`, href: target, to: rule.to });
    else broken.push({ from: `public/${rel}`, href: target });
  }
}

// --- orphans, measured against what is actually indexable ---------------------
const sitemap = await readFile(join(PUBLIC, 'sitemap-blog.xml'), 'utf8').catch(() => '');
const pagesMap = await readFile(join(PUBLIC, 'sitemap-pages.xml'), 'utf8').catch(() => '');
const indexed = [...`${sitemap}\n${pagesMap}`.matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map((m) => m[1].replace(SITE, ''))
  .filter((u) => u !== '/');

const count = (u) => (inbound.get(u) || inbound.get(u.replace(/\/$/, '')) || new Set()).size;
const orphans = indexed.filter((u) => count(u) === 0);
const thin = indexed.filter((u) => count(u) === 1);

// --- click depth --------------------------------------------------------------
// Breadth-first from the two homepages. A page reachable in more than three hops
// is buried, whatever its inbound count says.
const depth = new Map([['/', 0], ['/en/', 0]]);
let frontier = ['/', '/en/'];
while (frontier.length) {
  const next = [];
  for (const from of frontier) {
    for (const to of outbound.get(from) || []) {
      if (depth.has(to)) continue;
      depth.set(to, depth.get(from) + 1);
      next.push(to);
    }
  }
  frontier = next;
}
const depthOf = (u) => (depth.has(u) ? depth.get(u) : depth.get(u.replace(/\/$/, '')));
const deep = indexed
  .map((u) => ({ url: u, clicks: depthOf(u) ?? null }))
  .filter((d) => d.clicks === null || d.clicks > 3);

const out = {
  generated: 'run scripts/link-audit.mjs to refresh',
  totals: {
    htmlFiles: files.length,
    indexedUrls: indexed.length,
    brokenLinks: broken.length,
    linksViaRedirect: viaRedirect.length,
    orphans: orphans.length,
    singleInbound: thin.length,
    deeperThanThreeClicks: deep.length,
  },
  broken,
  viaRedirect,
  orphans,
  singleInbound: thin.map((u) => ({ url: u, from: [...(inbound.get(u) || [])] })),
  deeperThanThreeClicks: deep,
  maxClickDepth: indexed.reduce((max, u) => Math.max(max, depthOf(u) ?? 0), 0),
};

await writeFile(join(ROOT, 'data', 'link-audit.json'), JSON.stringify(out, null, 2) + '\n');

console.log(`html files:        ${files.length}`);
console.log(`indexed urls:      ${indexed.length}`);
console.log(`broken links:      ${broken.length}`);
broken.slice(0, 40).forEach((b) => console.log(`  ${b.href}  <- ${b.from}`));
console.log(`links via 301:     ${viaRedirect.length}`);
viaRedirect.slice(0, 20).forEach((b) => console.log(`  ${b.href} -> ${b.to}  <- ${b.from}`));
console.log(`orphans:           ${orphans.length}`);
orphans.slice(0, 40).forEach((u) => console.log(`  ${u}`));
console.log(`single inbound:    ${thin.length}`);
thin.slice(0, 20).forEach((u) => console.log(`  ${u}`));
console.log(`max click depth:   ${out.maxClickDepth}`);
console.log(`deeper than 3:     ${deep.length}`);
deep.slice(0, 20).forEach((d) => console.log(`  ${d.url}  (${d.clicks ?? 'unreachable'})`));
