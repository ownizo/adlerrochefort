#!/usr/bin/env node
/**
 * Retired pages never come back.
 *
 * A page is retired when its path is the source of a 301 or 410 rule in
 * public/_redirects, or a key in data/retired-pages.json. Several generators
 * under scripts/ still hold data for pages that were retired later, so running
 * one of them can write a retired page back into public/.
 *
 * This script runs as the Netlify build command, before every deploy, and:
 *   - deletes any retired page found in public/ (its index.html, and the folder
 *     if it is left empty);
 *   - removes retired URLs from the sitemaps; in the llms files it drops list
 *     entries about a retired page and unwraps the link anywhere else;
 *   - lists internal links that still point at a retired page.
 * It never fails the deploy. With --check (npm run check-retired) it changes
 * nothing and exits non-zero if anything is found.
 *
 * The 301! / 410! rules are forced, so a page that slipped through would not
 * be served anyway; this keeps public/, the sitemaps and llms files clean too.
 */
import { readFileSync, writeFileSync, existsSync, rmSync, readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PUB = join(ROOT, 'public');
const CHECK = process.argv.includes('--check');

const norm = (p) => '/' + p.replace(/^https?:\/\/[^/]+/, '').replace(/\*$/, '').replace(/^\/+|\/+$/g, '') + '/';

function retiredPaths() {
  const out = new Set();
  for (const line of readFileSync(join(PUB, '_redirects'), 'utf8').split('\n')) {
    const p = line.trim().split(/\s+/);
    if (p.length >= 3 && p[0].startsWith('/') && /^(301|410)!?$/.test(p[2])) {
      const n = norm(p[0]);
      if (n !== '/') out.add(n);
    }
  }
  const file = join(ROOT, 'data', 'retired-pages.json');
  if (existsSync(file)) {
    const data = JSON.parse(readFileSync(file, 'utf8'));
    for (const k of Object.keys(data.retired || {})) if (norm(k) !== '/') out.add(norm(k));
  }
  return out;
}

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, acc);
    else if (name.endsWith('.html')) acc.push(p);
  }
  return acc;
}

const retired = retiredPaths();
const isRetired = (u) => retired.has(norm(u));
const report = { pages: [], sitemap: [], llms: [], links: new Map() };

// 1. Pages
for (const path of retired) {
  const file = join(PUB, path, 'index.html');
  if (!existsSync(file)) continue;
  report.pages.push(path);
  if (!CHECK) {
    rmSync(file);
    const dir = join(PUB, path);
    if (readdirSync(dir).length === 0) rmSync(dir, { recursive: true });
  }
}

// 2. Sitemaps
for (const name of ['sitemap-pages.xml', 'sitemap-blog.xml']) {
  const file = join(PUB, name);
  if (!existsSync(file)) continue;
  const xml = readFileSync(file, 'utf8');
  const next = xml.replace(/[ \t]*<url>[\s\S]*?<\/url>\n?/g, (block) => {
    const loc = block.match(/<loc>([^<]*)<\/loc>/);
    if (loc && isRetired(loc[1])) { report.sitemap.push(loc[1]); return ''; }
    return block.replace(/[ \t]*<xhtml:link [^>]*href="([^"]*)"[^>]*\/>\n?/g, (l, href) => {
      if (!isRetired(href)) return l;
      report.sitemap.push(href);
      return '';
    });
  });
  if (!CHECK && next !== xml) writeFileSync(file, next);
}

// 3. llms files
const MD_LINK = /\[([^\]]*)\]\((https:\/\/adlerrochefort\.com\/[^)\s]*)\)/g;
for (const name of ['llms.txt', 'llms-full.txt']) {
  const file = join(PUB, name);
  if (!existsSync(file)) continue;
  const text = readFileSync(file, 'utf8');
  const keep = [];
  for (const line of text.split('\n')) {
    const links = [...line.matchAll(MD_LINK)];
    if (!links.some((m) => isRetired(m[2]))) { keep.push(line); continue; }
    report.llms.push(line.slice(0, 80));
    if (/^\s*-+\s*\[/.test(line) && links.length === 1) continue; // entry only about the retired page
    keep.push(line.replace(MD_LINK, (m, label, url) => (isRetired(url) ? label : m)));
  }
  const next = keep.join('\n');
  if (!CHECK && next !== text) writeFileSync(file, next);
}

// 4. Internal links (reported only)
for (const file of walk(PUB)) {
  const html = readFileSync(file, 'utf8');
  for (const m of html.matchAll(/href="(?:https:\/\/adlerrochefort\.com)?(\/[^"#?]*)/g)) {
    if (/\.[a-z0-9]{2,12}$/i.test(m[1]) || !isRetired(m[1])) continue;
    if (!report.links.has(m[1])) report.links.set(m[1], new Set());
    report.links.get(m[1]).add(file.slice(PUB.length + 1));
  }
}

const verb = CHECK ? 'found' : 'removed';
console.log(`[enforce-retired] ${retired.size} retired paths`);
console.log(`[enforce-retired] pages ${verb}: ${report.pages.length}${report.pages.length ? ' — ' + report.pages.join(', ') : ''}`);
console.log(`[enforce-retired] sitemap entries ${verb}: ${report.sitemap.length}`);
console.log(`[enforce-retired] llms lines ${CHECK ? 'found' : 'cleaned'}: ${report.llms.length}`);
if (report.links.size) {
  console.log(`[enforce-retired] internal links to retired pages (they redirect, but should be updated): ${report.links.size}`);
  for (const [href, files] of report.links) console.log(`  ${href} <- ${[...files].slice(0, 3).join(', ')}${files.size > 3 ? ' …' : ''}`);
}
if (CHECK && report.pages.length + report.sitemap.length + report.llms.length + report.links.size) process.exit(1);
