#!/usr/bin/env node
/**
 * Rebuilds the Insights section on the English homepage the same way the
 * Portuguese one was rebuilt: six featured articles from data/articles.json
 * plus a link through to /en/blog/, instead of 106 cards of which 100 were
 * hidden by CSS and revealed by a "load more" button.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PAGE = join(ROOT, 'public', 'en', 'index.html');

const data = JSON.parse(await readFile(join(ROOT, 'data', 'articles.json'), 'utf8'));
const { card } = await import('./lib/blog-parts.mjs');

const featured = data.articles.en.filter((a) => a.status === 'published' && a.featured);
if (featured.length !== 6) throw new Error(`expected 6 featured EN articles, got ${featured.length}`);

let html = await readFile(PAGE, 'utf8');
const before = html;

// --- 1. replace the grid ------------------------------------------------------
const gridStart = html.indexOf('<div class="blog-grid">', html.indexOf('<section class="blog-section" id="blog"'));
const toggleStart = html.indexOf('<div class="blog-toggle-wrapper"', gridStart);
const sectionEnd = html.indexOf('</section>', gridStart);
if (gridStart === -1 || toggleStart === -1 || sectionEnd === -1) throw new Error('blog section markers not found');

const newGrid = `<div class="blog-grid">
${featured.map((a, i) => card(a, i)).join('\n\n')}
  </div>
  <div class="blog-toggle-wrapper" style="text-align: center; margin-top: 40px;">
    <a href="/en/blog/" class="btn-primary">View all articles &rarr;</a>
  </div>
`;

html = html.slice(0, gridStart) + newGrid + html.slice(sectionEnd);

// --- 2. drop the CSS that hid cards 7+ ---------------------------------------
html = html.replace(
  /  \/\* Hide blog articles from the 7th by default \*\/\n  #blog \.blog-card:nth-child\(n\+7\) \{\n    display: none;\n  \}\n  \/\* Expanded state — show all \*\/\n  #blog\.blog-expanded \.blog-card:nth-child\(n\+7\) \{\n    display: flex;\n  \}\n\n/,
  ''
);

// --- 3. drop the now-unreachable toggle handler ------------------------------
const scriptStart = html.indexOf('<script>\nfunction toggleBlog()');
if (scriptStart !== -1) {
  const scriptEnd = html.indexOf('</script>', scriptStart) + '</script>\n'.length;
  html = html.slice(0, scriptStart) + html.slice(scriptEnd);
}

if (html === before) throw new Error('no change made');
await writeFile(PAGE, html);

console.log(`featured: ${featured.map((a) => a.slug).join(', ')}`);
console.log(`bytes: ${before.length} -> ${html.length}`);
console.log(`nth-child rule removed: ${!html.includes('blog-card:nth-child(n+7)')}`);
console.log(`toggleBlog removed: ${!html.includes('function toggleBlog')}`);
