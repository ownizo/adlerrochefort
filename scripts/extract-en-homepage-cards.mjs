#!/usr/bin/env node
/**
 * Pulls the card copy and card artwork off the English homepage into the two
 * shared card maps, the same way the Portuguese cards were captured before the
 * homepage grid was reduced to six featured articles.
 *
 * Run this before rewriting /en/index.html — once the grid is trimmed the
 * remaining cards are the only ones left to read.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = async (p) => JSON.parse(await readFile(join(ROOT, p), 'utf8'));

const html = await readFile(join(ROOT, 'public', 'en', 'index.html'), 'utf8');
const section = html.slice(html.indexOf('<section class="blog-section" id="blog"'));
const grid = section.slice(0, section.indexOf('</section>'));

const cards = await read('data/homepage-cards.json');
const images = await read('data/homepage-card-images.json');

const strip = (s) => String(s ?? '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const pick = (s, re) => {
  const m = s.match(re);
  return m ? m[1] : null;
};

let found = 0;
const anchors = grid.split(/<a href="/).slice(1);
for (const chunk of anchors) {
  const href = chunk.slice(0, chunk.indexOf('"'));
  const m = href.match(/^\/en\/blog\/([^/]+)\/$/);
  if (!m) continue;
  const slug = m[1];
  const block = chunk.slice(0, chunk.indexOf('</a>'));

  cards[slug] = {
    tag: strip(pick(block, /<div class="blog-card-tag">([\s\S]*?)<\/div>/)),
    date: strip(pick(block, /<div class="blog-card-date">([\s\S]*?)<\/div>/)),
    title: strip(pick(block, /<h3 class="blog-card-title">([\s\S]*?)<\/h3>/)),
    excerpt: strip(pick(block, /<p class="blog-card-excerpt">([\s\S]*?)<\/p>/)),
  };

  const src = pick(block, /<img src="([^"]+)"/);
  // Cards without artwork use an inline gradient on .blog-card-img-bg; keeping
  // it means the generated listings look like the homepage they came from.
  const gradient = pick(block, /<div class="blog-card-img-bg" style="background:\s*([^"]+?);?"/);
  images[slug] = {
    src: src || null,
    alt: pick(block, /<img [^>]*alt="([^"]*)"/) || cards[slug].title,
    gradient: src ? null : gradient,
  };
  found++;
}

await writeFile(join(ROOT, 'data', 'homepage-cards.json'), JSON.stringify(cards, null, 2) + '\n');
await writeFile(
  join(ROOT, 'data', 'homepage-card-images.json'),
  JSON.stringify(images, null, 2) + '\n'
);
console.log(`en cards captured: ${found}`);
console.log(`totals — cards: ${Object.keys(cards).length}, images: ${Object.keys(images).length}`);
