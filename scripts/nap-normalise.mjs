#!/usr/bin/env node
/**
 * Block 7.4 — one spelling of the legal name.
 *
 * The trading name was already consistent. The legal name behind it was not:
 * six spellings across 593 occurrences, differing in the comma after "Ownizo",
 * in "Lda" against "LDA", and in the trailing period. A citation checker
 * comparing the site against the company register does not see six spellings of
 * one company, it sees a weak match.
 *
 * The canonical form used here is the one the brief specifies and the one
 * already carried by the alternateName field in thirty JSON-LD blocks:
 *
 *     Ownizo, Unipessoal Lda.
 *
 * Punctuation that followed the old spelling is preserved, so a name that sat
 * mid-sentence still reads correctly afterwards.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { globSync } from 'node:fs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = join(ROOT, 'public');

const CANONICAL = 'Ownizo, Unipessoal Lda.';

// "Ownizo" then an optional comma, "Unipessoal", an optional comma, "Lda" in
// either case, and an optional trailing period. Everything the corpus contains.
const NAME = /Ownizo,?\s+Unipessoal,?\s+(?:Lda|LDA)\.?/g;

let files = 0;
let replacements = 0;
const perFile = [];

for (const rel of globSync('**/*.html', { cwd: PUBLIC }).sort()) {
  const file = join(PUBLIC, rel);
  const html = await readFile(file, 'utf8');
  let n = 0;
  const out = html.replace(NAME, (m) => {
    if (m === CANONICAL) return m;
    n += 1;
    return CANONICAL;
  });
  if (n) {
    await writeFile(file, out);
    files += 1;
    replacements += n;
    perFile.push([rel, n]);
  }
}

// The two JSON-LD business nodes that name the company but never give the
// number. A citation without a phone is half a citation.
const MISSING_PHONE = [
  'en/private-clients/index.html',
  'nl/verzekeringen-portugal/index.html',
];
let phonesAdded = 0;
for (const rel of MISSING_PHONE) {
  const file = join(PUBLIC, rel);
  const html = await readFile(file, 'utf8');
  if (/"telephone"/.test(html)) continue;
  const out = html.replace(
    /("legalName":\s*"Ownizo, Unipessoal Lda\.",)/,
    '$1\n    "telephone": "+351928226570",\n    "email": "insurance@adlerrochefort.com",'
  );
  if (out !== html) {
    await writeFile(file, out);
    phonesAdded += 1;
  }
}

console.log(`legal-name spellings normalised: ${replacements} in ${files} files`);
console.log(`ld+json nodes given a telephone:  ${phonesAdded}`);
perFile.sort((a, b) => b[1] - a[1]).slice(0, 8).forEach(([f, n]) => console.log(`  ${n}  ${f}`));
