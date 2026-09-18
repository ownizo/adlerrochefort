#!/usr/bin/env node
/**
 * Phase 2 — regulatory terminology, reduced scope.
 *
 * Adler & Rochefort is registered with the ASF as an *agente de seguros*
 * (no. 425591790/3) holding agency agreements with several insurers. Peer firms
 * in the same registered category market themselves as "brokers" in English, so
 * the noun is kept. What this pass corrects is narrower:
 *
 *   1. An inconsistency. The English homepage <h1> says "insurance broker"
 *      while an earlier pass rewrote most other English instances to
 *      "insurance intermediary". English standardises on "broker".
 *
 *   2. An absolute claim. "Independent" used as a standalone label is replaced
 *      by the concrete fact it stands for — agency agreements with several
 *      insurers — in every language.
 *
 *   3. A statement about the legal relationship with clients. As an agent we
 *      act under agency agreements, so "we work for you, not the insurer" is
 *      rephrased without asserting whose agent we are.
 *
 * Deliberately NOT changed:
 *
 *   - "broker" (EN), "courtier" (FR), "Versicherungsmakler"/"Makler" (DE),
 *     "mediador de seguros" (PT), "verzekeringsagent"/"verzekeringsbemiddelaar"
 *     (NL). These are correct and stay everywhere, including metadata, JSON-LD,
 *     alt text and headings.
 *   - Schema.org @type: "InsuranceAgency".
 *   - Any URL slug, anchor id or href="#…" fragment. Several ids contain
 *     "broker" or "independente"; renaming them would change a published URL
 *     fragment. The visible heading text is rewritten, the id is not, so a
 *     heading and its anchor can legitimately disagree after this pass.
 *   - Layout, styling and component structure.
 *
 * The rules themselves live in scripts/lib/terminology-rules.mjs, shared with
 * the two repeatable enforcement passes. Every rule is an exact string; there is
 * deliberately no bare "intermediary" → "broker" rule, because the previous pass
 * ran the mirror of one and produced "intermediaryage" (from "brokerage") and
 * "vian intermediary" (from "via broker"), both of which this pass restores.
 * Anything not matched by an exact rule is left alone and printed in the
 * residual audit at the end, so a judgement call shows up as a reported line
 * rather than a silent rewrite.
 *
 * Run: node scripts/phase2-terminology.mjs
 * Then: node scripts/generate-nl-cluster.mjs && node scripts/generate-blog.mjs
 *       && node scripts/generate-sitemap.mjs
 */
import { readFile, writeFile } from 'node:fs/promises';
import { globSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  EXCLUDE,
  PROTECTED,
  EN_BROKER,
  EN_INDEPENDENCE,
  PT_INDEPENDENCE,
  NL_INDEPENDENCE,
  FR_INDEPENDENCE,
  DE_INDEPENDENCE,
  EN_RELATIONSHIP,
  PT_RELATIONSHIP,
} from './lib/terminology-rules.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

// ---------------------------------------------------------------------------
// Files. The generator sources are swept alongside the published tree so that
// re-running a generator reproduces the corrected wording instead of restoring
// the old one — the regression that happened once already with data/articles.json.
// Every script under scripts/ is included, not just the ones that own a language
// tree: build-location-articles.mjs asserts that strings copied out of its
// template page are still present, generate-blog.mjs hard-codes the blog index
// description, and internal-links.mjs and upgrade-articles.mjs each carry a
// self-designation of their own. The passes themselves are excluded, since their
// docblocks quote the wording being corrected in order to explain it.
// ---------------------------------------------------------------------------
const files = [
  ...globSync('public/**/*.html', { cwd: ROOT }),
  ...globSync('public/**/*.xml', { cwd: ROOT }),
  ...globSync('public/**/*.txt', { cwd: ROOT }),
  'data/articles.json',
  'data/articles.extracted.json',
  'data/homepage-cards.json',
  ...globSync('scripts/*.mjs', { cwd: ROOT }),
  ...globSync('scripts/lib/*.mjs', { cwd: ROOT }),
  ...globSync('scripts/nl-content/*.mjs', { cwd: ROOT }),
].filter((f) => !EXCLUDE.some((re) => re.test(f)));

const rulesFor = (rel) => {
  if (rel.startsWith('public/nl/') || rel.startsWith('scripts/nl-')) return NL_INDEPENDENCE;
  if (rel.startsWith('public/fr/')) return FR_INDEPENDENCE;
  if (rel.startsWith('public/de/')) return DE_INDEPENDENCE;
  if (rel.startsWith('public/en/')) return [...EN_BROKER, ...EN_INDEPENDENCE, ...EN_RELATIONSHIP];
  // Root-level PT pages, the shared data files and the generators carry both
  // Portuguese and English strings.
  return [
    ...EN_BROKER,
    ...EN_INDEPENDENCE,
    ...EN_RELATIONSHIP,
    ...PT_INDEPENDENCE,
    ...PT_RELATIONSHIP,
    ...NL_INDEPENDENCE,
  ];
};

const applied = new Map();
const touched = [];

for (const rel of files) {
  const file = join(ROOT, rel);
  const original = await readFile(file, 'utf8');

  // Park the published URL fragments behind placeholders no rule can match.
  const parked = [];
  let text = original;
  for (const re of PROTECTED) {
    text = text.replace(re, (m) => {
      parked.push(m);
      return `\u0000${parked.length - 1}\u0000`;
    });
  }

  for (const [from, to] of rulesFor(rel)) {
    if (from === to || !text.includes(from)) continue;
    applied.set(from, (applied.get(from) || 0) + text.split(from).length - 1);
    text = text.split(from).join(to);
  }

  text = text.replace(/\u0000(\d+)\u0000/g, (_, i) => parked[Number(i)]);
  if (/\u0000/.test(text)) throw new Error(`unrestored placeholder in ${rel}`);

  if (text !== original) {
    await writeFile(file, text);
    touched.push(rel);
  }
}

// --- Guard against the class of bug that produced "intermediaryage" ---------
// "brokerage" on its own is legitimate — it is the word the old pass mangled —
// so only the mangled forms and doubled nouns are flagged.
const CORRUPTION = [
  /intermediaryage/i,
  /vian intermediary/i,
  /brokerage broker/i,
  /\bbroker broker\b/i,
  /\bintermediary intermediary\b/i,
];
const corrupted = [];
for (const rel of files) {
  const text = await readFile(join(ROOT, rel), 'utf8');
  for (const re of CORRUPTION) {
    if (re.test(text)) corrupted.push(`${rel} :: ${re}`);
  }
}

// --- Residual audit ---------------------------------------------------------
// Everything still saying "intermediary"/"independent" after the pass, so a
// judgement call is a reported line rather than a silent rewrite.
const residual = [];
for (const rel of files) {
  if (!rel.startsWith('public/')) continue;
  const text = await readFile(join(ROOT, rel), 'utf8');
  for (const m of text.matchAll(/[^<>]{0,60}\b(?:intermediar(?:y|ies)|independen\w*|onafhankelijk\w*|ind[ée]pendan\w*|unabh[äa]ngig\w*)\b[^<>]{0,60}/gi)) {
    residual.push(`${relative('public', rel)} :: ${m[0].replace(/\s+/g, ' ').trim()}`);
  }
}

console.log(`files changed: ${touched.length}`);
console.log(`rules applied: ${applied.size}`);
console.log(`corruption guard: ${corrupted.length ? corrupted.join('; ') : 'clean'}`);
console.log(`residual mentions left for review: ${residual.length}`);
console.log('\nreplacements:');
for (const [k, v] of [...applied].sort((a, b) => b[1] - a[1])) {
  console.log('  ' + String(v).padStart(4), JSON.stringify(k.length > 90 ? k.slice(0, 90) + '…' : k));
}

await writeFile(
  join(ROOT, 'data', 'phase2-terminology-audit.json'),
  JSON.stringify(
    {
      filesChanged: touched,
      replacements: Object.fromEntries([...applied].sort((a, b) => b[1] - a[1])),
      corruptionGuard: corrupted,
      residual: [...new Set(residual)].sort(),
    },
    null,
    2
  ) + '\n'
);
