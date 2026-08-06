#!/usr/bin/env node
/**
 * Rebuilds the Insights section on the Portuguese homepage from
 * data/articles.json — six featured articles and a link through to /blog/,
 * replacing the 38 hand-maintained cards that were there.
 *
 * This is the counterpart of rebuild-en-homepage-insights.mjs, and it fixes
 * two problems at once:
 *
 *   - The hand-maintained list had drifted from the articles it described.
 *     Two cards advertised articles that no longer exist: "Seguro automóvel
 *     individual" and "Seguro de habitação: como escolher a proteção certa",
 *     both retired into stronger articles and both pointing at their
 *     successor. A reader saw two titles, clicked either, and arrived at the
 *     same page. Generating the section from the data source removes them and
 *     makes a repeat impossible: an article with status "merged" cannot be
 *     rendered.
 *
 *   - Every one of the 38 cards rendered on load, so the homepage carried 38
 *     card images below the fold and the "VER MAIS ARTIGOS" button toggled a
 *     class that no stylesheet acted on. The button now goes to /blog/, which
 *     is where the full listing lives.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { card } from './lib/blog-parts.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PAGE = join(ROOT, 'public', 'index.html');

const data = JSON.parse(await readFile(join(ROOT, 'data', 'articles.json'), 'utf8'));
const featured = data.articles.pt.filter((a) => a.status === 'published' && a.featured);
if (featured.length !== 6) throw new Error(`expected 6 featured PT articles, got ${featured.length}`);

let html = await readFile(PAGE, 'utf8');
const before = html;

// --- 1. replace the grid -----------------------------------------------------
const sectionStart = html.indexOf('<section class="blog-section" id="blog"');
const gridStart = html.indexOf('<div class="blog-grid">', sectionStart);
const sectionEnd = html.indexOf('</section>', gridStart);
if (sectionStart === -1 || gridStart === -1 || sectionEnd === -1) {
  throw new Error('blog section markers not found');
}

const newGrid = `<div class="blog-grid">
${featured.map((a, i) => card(a, i)).join('\n\n')}
  </div>
  <div class="blog-toggle-wrapper" style="text-align: center; margin-top: 40px;">
    <a href="/blog/" class="btn-primary">VER TODOS OS ARTIGOS &rarr;</a>
  </div>
`;

const replaced = html.slice(gridStart, sectionEnd);
html = html.slice(0, gridStart) + newGrid + html.slice(sectionEnd);

// --- 2. drop the now-unreachable toggle handler ------------------------------
const scriptStart = html.indexOf('<script>\nfunction toggleBlog()');
if (scriptStart !== -1) {
  const scriptEnd = html.indexOf('</script>', scriptStart) + '</script>\n'.length;
  html = html.slice(0, scriptStart) + html.slice(scriptEnd);
}

if (html === before) throw new Error('no change made');
await writeFile(PAGE, html);

const cardsBefore = replaced.split('class="blog-card fade-up"').length - 1;
console.log(`cards: ${cardsBefore} -> ${featured.length}`);
console.log(`featured: ${featured.map((a) => a.slug).join(', ')}`);
console.log(`bytes: ${before.length} -> ${html.length}`);
console.log(`toggleBlog removed: ${!html.includes('function toggleBlog')}`);
