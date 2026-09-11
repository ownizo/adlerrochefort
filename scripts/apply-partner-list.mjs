/**
 * Applies data/partners.json's canonical partner list to every hand-authored
 * page that renders the same `.partners-logos` block the landing-page
 * generator (scripts/lib/landing.mjs) produces, but that isn't itself
 * produced by that generator (so re-running generate-landings.mjs wouldn't
 * touch it). Scope is deliberately narrow: it only rewrites the exact
 * `<div class="partner-logo">...</div>` list inside a `.partners-logos`
 * block. It does not touch article prose, meta descriptions, or any other
 * mention of an insurer's name — those are edited by hand per file, because
 * "is this a partner claim or an editorial reference" isn't something safe
 * to decide mechanically.
 *
 * Run by hand: node scripts/apply-partner-list.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const { partners } = JSON.parse(readFileSync(join(ROOT, 'data', 'partners.json'), 'utf8'));

// Files confirmed (by direct grep, 2026-09-11) to carry the OLD generator
// block verbatim — Hiscox / Allianz / Zurich / Asisa / Innovarisk, one
// `<div class="partner-logo"><span class="partner-logo-text">NAME</span></div>`
// per line — with no per-entry links. public/en/index.html is deliberately
// excluded: its block has per-entry links into editorial articles for three
// names and needs a hand edit, not this mechanical one.
const TARGET_FILES = [
  'public/index.html',
  'public/private-clients/index.html',
  'public/en/insurance/tvde/index.html',
  'public/seguros/index.html',
  'public/seguros/auto/index.html',
  'public/seguros/alojamento-local/index.html',
  'public/seguros/responsabilidade-civil-profissional/index.html',
  'public/seguros/frota/index.html',
  'public/seguros/empresarial/index.html',
  'public/seguros/tvde/index.html',
  'public/seguros/habitacao/index.html',
];

const OLD_BLOCK_RE =
  /(<div class="partners-logos[^"]*">\n)([\s\S]*?)(\n\s*<\/div>)/;

const newEntries = partners
  .map((p) => `    <div class="partner-logo"><span class="partner-logo-text">${p}</span></div>`)
  .join('\n');

let changed = 0;
let skipped = [];

for (const rel of TARGET_FILES) {
  const path = join(ROOT, rel);
  const html = readFileSync(path, 'utf8');
  const match = html.match(OLD_BLOCK_RE);
  if (!match) {
    skipped.push(`${rel} — no .partners-logos block found, left untouched`);
    continue;
  }
  const currentNames = [...match[2].matchAll(/partner-logo-text">([^<]+)</g)].map((m) => m[1]);
  const alreadyCorrect = JSON.stringify(currentNames) === JSON.stringify(partners);
  if (alreadyCorrect) {
    skipped.push(`${rel} — already matches the canonical list, left untouched`);
    continue;
  }
  const updated = html.replace(OLD_BLOCK_RE, `$1${newEntries}$3`);
  writeFileSync(path, updated);
  console.log(`updated: ${rel} (was: ${currentNames.join(', ')})`);
  changed++;
}

console.log(`\n${changed} file(s) updated.`);
if (skipped.length) console.log(skipped.map((s) => `  skip: ${s}`).join('\n'));
