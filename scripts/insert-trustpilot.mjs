#!/usr/bin/env node
/**
 * Inserts (or refreshes) the Trustpilot reviews block on the hand-authored hub
 * and private-client pages. Idempotent: the block sits between
 * <!-- trustpilot:start --> and <!-- trustpilot:end --> markers.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { trustpilotBlock } from './lib/trustpilot-reviews.mjs';

const TARGETS = [
  ['public/index.html', 'pt', '<section class="partners-section">'],
  ['public/private-clients/index.html', 'pt', '<section class="partners-section">'],
  ['public/en/index.html', 'en', '<section class="partners-section">'],
  ['public/de/index.html', 'de', '<section class="partners-section">'],
  ['public/nl/index.html', 'nl', '<section class="section brands">'],
  ['public/en/private-clients/index.html', 'en', '<!-- FAQ -->\n<section class="lp-sec">'],
  ['public/de/private-clients/index.html', 'de', '<section class="section" aria-labelledby="faq-title" id="haeufige-fragen">'],
  ['public/fr/index.html', 'fr', '<section class="section brands">'],
];
let n = 0;
for (const [file, lang, anchor] of TARGETS) {
  let s = readFileSync(file, 'utf8');
  const block = trustpilotBlock(lang);
  if (s.includes('<!-- trustpilot:start -->')) {
    s = s.replace(/<!-- trustpilot:start -->[\s\S]*?<!-- trustpilot:end -->/, block);
  } else {
    const i = s.indexOf(anchor);
    if (i < 0) { console.error('anchor missing', file); continue; }
    s = s.slice(0, i) + block + '\n\n' + s.slice(i);
  }
  const o = readFileSync(file, 'utf8');
  if (s !== o) { writeFileSync(file, s); n++; }
}
console.log('trustpilot block written on', n, 'pages');
