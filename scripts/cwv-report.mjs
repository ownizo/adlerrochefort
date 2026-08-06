#!/usr/bin/env node
/**
 * Block 7.3 — Core Web Vitals measurement.
 *
 * There is no browser in this environment, so this is not a lab LCP figure
 * from Lighthouse. It measures the thing that determines LCP on a static
 * hand-written site: the bytes a browser must fetch before it can paint the
 * largest element above the fold, and whether that element has reserved space.
 *
 * The critical path for a page here is:
 *   the HTML document (styles are inlined, so there is no blocking stylesheet)
 *   + the nav logo, which is above the fold on every page
 *   + the LCP candidate — the article featured image, or the hero image
 *
 * Google Fonts is a render-blocking third-party stylesheet on every page and
 * is reported separately, because it is a real cost this pass did not address.
 *
 * Layout shift is reported as the count of above-the-fold images without
 * intrinsic dimensions: each one is a box the browser cannot reserve, and the
 * reflow when it arrives is exactly what CLS measures.
 */
import { readFile, stat } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { globSync } from 'node:fs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = join(ROOT, 'public');
const TREE = process.argv[2] || PUBLIC;

const bytes = async (p) => (await stat(join(TREE, p)).catch(() => null))?.size ?? null;
const kb = (n) => `${(n / 1024).toFixed(0)} KB`;

/** The best format a modern browser would pick for this <img>. */
function chosen(html, imgTag) {
  const at = html.indexOf(imgTag);
  const open = html.lastIndexOf('<picture>', at);
  if (open === -1 || html.indexOf('</picture>', at) === -1) return null;
  const block = html.slice(open, at);
  return (block.match(/srcset="([^"]*)"/) || [])[1] || null;
}

const pages = [
  { label: 'PT homepage', path: 'index.html' },
  { label: 'EN homepage', path: 'en/index.html' },
  { label: 'PT article (TVDE)', path: 'blog/seguro-tvde-portugal/index.html' },
  { label: 'EN article (TVDE)', path: 'en/blog/tvde-insurance-portugal/index.html' },
  { label: 'PT blog index', path: 'blog/index.html' },
  { label: 'TVDE landing', path: 'seguros/tvde/index.html' },
];

const rows = [];
for (const page of pages) {
  const html = await readFile(join(TREE, page.path), 'utf8').catch(() => null);
  if (html === null) continue;

  const doc = Buffer.byteLength(html);
  const imgs = [...html.matchAll(/<img\b[^>]*>/g)].map((m) => m[0]);

  const logoTag = imgs.find((t) => t.includes('logo-adler-rochefort.png'));
  const logo = logoTag ? await bytes((chosen(html, logoTag) || '/images/logo-adler-rochefort.png').slice(1)) : 0;

  // The LCP candidate: the featured image on an article, otherwise the first
  // non-logo image that is not lazy-loaded.
  const lcpTag =
    imgs.find((t) => /article-featured-image/.test(t)) ||
    imgs.find((t) => !t.includes('logo-adler-rochefort') && !/loading="lazy"/.test(t));
  let lcp = 0;
  let lcpSrc = '(text — no above-the-fold image)';
  if (lcpTag) {
    lcpSrc = chosen(html, lcpTag) || (lcpTag.match(/src="([^"]*)"/) || [])[1];
    lcp = (await bytes(lcpSrc.replace(/^\//, ''))) ?? 0;
  }

  const eager = imgs.filter((t) => !/loading="lazy"/.test(t));
  const noDims = eager.filter((t) => !(/\swidth="/.test(t) && /\sheight="/.test(t)));

  rows.push({
    label: page.label,
    doc,
    logo: logo ?? 0,
    lcp,
    lcpSrc,
    critical: doc + (logo ?? 0) + lcp,
    images: imgs.length,
    eager: eager.length,
    unreserved: noDims.length,
    fonts: /fonts\.googleapis\.com/.test(html),
  });
}

const pad = (s, n) => String(s).padEnd(n);
console.log(pad('page', 22) + pad('document', 11) + pad('logo', 9) + pad('LCP image', 11) + pad('critical', 11) + 'unreserved');
console.log('-'.repeat(74));
for (const r of rows) {
  console.log(
    pad(r.label, 22) +
      pad(kb(r.doc), 11) +
      pad(kb(r.logo), 9) +
      pad(kb(r.lcp), 11) +
      pad(kb(r.critical), 11) +
      r.unreserved
  );
}
console.log('-'.repeat(74));
console.log(`total critical path across the six sampled pages: ${kb(rows.reduce((s, r) => s + r.critical, 0))}`);
console.log(`\nLCP candidate per page:`);
rows.forEach((r) => console.log(`  ${pad(r.label, 22)} ${r.lcpSrc}`));

// --- site-wide -----------------------------------------------------------------
const files = globSync('**/*.html', { cwd: TREE });
let all = 0;
let lazy = 0;
let dims = 0;
let eagerNoDims = 0;
for (const f of files) {
  const html = await readFile(join(TREE, f), 'utf8');
  for (const m of html.matchAll(/<img\b[^>]*>/g)) {
    all += 1;
    const isLazy = /loading="lazy"/.test(m[0]);
    const hasDims = /\swidth="/.test(m[0]) && /\sheight="/.test(m[0]);
    if (isLazy) lazy += 1;
    if (hasDims) dims += 1;
    if (!isLazy && !hasDims) eagerNoDims += 1;
  }
}
console.log(`\nsite-wide across ${files.length} pages:`);
console.log(`  <img> tags:                        ${all}`);
console.log(`  loading="lazy":                    ${lazy}`);
console.log(`  explicit width and height:         ${dims}`);
console.log(`  eager with no reserved box (CLS):  ${eagerNoDims}`);
