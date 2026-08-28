#!/usr/bin/env node
/**
 * One-off, additive append to data/articles.json for the three new
 * situational articles built in Phase 7 (international growth). Follows the
 * pattern established in Phases 2-4: .push() only, never re-sort, diff-
 * verified afterwards to touch nothing else. See those phases' own scripts
 * for why the real extract/build blog pipeline is not run here — it has a
 * documented, unrelated drift issue with the currently-committed listing
 * pages.
 *
 * Run once: node scripts/append-phase7-articles.mjs
 */
import { readFile, writeFile } from 'node:fs/promises';

const path = 'data/articles.json';
const data = JSON.parse(await readFile(path, 'utf8'));

const NEW = [
  {
    slug: 'insurance-buying-property-portugal',
    lang: 'en',
    status: 'published',
    url: '/en/blog/insurance-buying-property-portugal/',
    category: 'home-property',
    tag: 'Buying property',
    title: 'Buying Property in Portugal: What Insurance Should You Consider?',
    metaTitle: 'Insurance to Consider When Buying Property in Portugal | Adler &amp; Rochefort',
    description:
      'What insurance actually comes up when buying property in Portugal — buildings cover from completion, condominium, mortgage protection, landlord insurance if you plan to let it, and what to check first.',
    excerpt:
      'What insurance actually comes up when buying property in Portugal — buildings cover from completion, condominium, mortgage protection, landlord insurance if you plan to let it, and what to check first.',
    image: null,
    imageGradient: null,
    imageAlt: 'Buying Property in Portugal: What Insurance Should You Consider?',
    published: '2026-08-28T09:00:00+00:00',
    modified: '2026-08-28T09:00:00+00:00',
    dateLabel: 'August 2026',
    readingTime: 7,
    featured: false,
    translationOf: null,
  },
  {
    slug: 'family-moving-to-portugal-insurance',
    lang: 'en',
    status: 'published',
    url: '/en/blog/family-moving-to-portugal-insurance/',
    category: 'moving-to-portugal',
    tag: 'Family',
    title: 'Moving to Portugal with Your Family: Insurance to Consider',
    metaTitle: 'Moving to Portugal with Your Family: Insurance to Consider | Adler &amp; Rochefort',
    description:
      'What insurance actually comes up for a family moving to Portugal — health, home, car, life and family protection — and how each one connects to the others.',
    excerpt:
      'What insurance actually comes up for a family moving to Portugal — health, home, car, life and family protection — and how each one connects to the others.',
    image: null,
    imageGradient: null,
    imageAlt: 'Moving to Portugal with Your Family: Insurance to Consider',
    published: '2026-08-28T09:00:00+00:00',
    modified: '2026-08-28T09:00:00+00:00',
    dateLabel: 'August 2026',
    readingTime: 6,
    featured: false,
    translationOf: null,
  },
  {
    slug: 'family-insurance-spain',
    lang: 'en',
    status: 'published',
    url: '/en/blog/family-insurance-spain/',
    category: 'spain-health',
    tag: 'Family',
    title: 'Insurance for Families Living in Spain: What Should You Review?',
    metaTitle: 'Insurance for Families Living in Spain | What International Residents Should Review',
    description:
      'What insurance actually comes up for a family living in Spain — health, home, car and life — and how to work out which of them apply to your situation rather than assuming you need all four.',
    excerpt:
      'What insurance actually comes up for a family living in Spain — health, home, car and life — and how to work out which of them apply to your situation rather than assuming you need all four.',
    image: null,
    imageGradient: null,
    imageAlt: 'Insurance for Families Living in Spain: What Should You Review?',
    published: '2026-08-28T09:00:00+00:00',
    modified: '2026-08-28T09:00:00+00:00',
    dateLabel: 'August 2026',
    readingTime: 6,
    featured: false,
    translationOf: null,
  },
];

const existingSlugs = new Set(data.articles.en.map((a) => a.slug));
let added = 0;
for (const article of NEW) {
  if (existingSlugs.has(article.slug)) {
    console.log(`skip (already present): ${article.slug}`);
    continue;
  }
  data.articles.en.push(article);
  added++;
  console.log(`added: ${article.slug}`);
}

await writeFile(path, JSON.stringify(data, null, 2) + '\n');
console.log(`\n${added} article(s) appended to ${path}.`);
