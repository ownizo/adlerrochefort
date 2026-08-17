#!/usr/bin/env node
/**
 * Regulatory terminology — repeatable enforcement pass.
 *
 * Adler & Rochefort is registered with the ASF as an *agente de seguros*
 * (no. 425591790/3) holding agency agreements with several insurers. In
 * Portuguese the registered umbrella term is *mediador de seguros*;
 * "corretor"/"corretora" (broker) and "agência de seguros" (agency) are
 * different ASF categories, so using them to describe the firm misstates its
 * registration. In English, French, German and Dutch the firm markets itself
 * with the ordinary market noun — broker, courtier, Versicherungsmakler,
 * verzekeringsagent — as its peers in the same registered category do.
 *
 * This pass re-applies, across every published page and every generator source:
 *
 *   - the Portuguese category rules (corretor/agência -> mediador de seguros);
 *   - the English alignment on "broker";
 *   - the removal of "independent" as a standalone label, in all five languages,
 *     replaced by the concrete fact behind it: agency agreements with several
 *     insurers;
 *   - the rephrasing of "we work for you, not the insurer", which as an agent we
 *     cannot assert.
 *
 * The rule tables are in scripts/lib/terminology-rules.mjs, shared with
 * scripts/phase2-terminology.mjs and scripts/block0-compliance.mjs. Before, this
 * script carried its own PT/EN/NL tables with no FR or DE table at all, which is
 * how the French and German homepages kept a claim the other three had dropped.
 *
 * Two things are protected from rewriting:
 *
 *   - Anchor slugs. Several headings have an id containing "broker" or
 *     "independente", each linked from a table of contents. Renaming them would
 *     change a published URL fragment for no reader benefit, so ids and their
 *     matching href="#..." stay as they are while the visible heading text is
 *     rewritten. The same protection covers the URL-encoded article title inside
 *     a WhatsApp share link, where a replacement containing a space would
 *     corrupt the URL.
 *
 *   - public/alterarmediador/index.html, which quotes the category printed on
 *     the ASF certificate ("Agente de Seguros") inside a letter the client sends
 *     to their insurer. Rewriting a quoted registration entry is a regulatory
 *     question rather than a copy question.
 *
 * Idempotent: re-running finds nothing left to change.
 *
 * Run: node scripts/terminology.mjs
 */
import { readFile, writeFile } from 'node:fs/promises';
import { globSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT } from './lib/partials.mjs';
import {
  EXCLUDE as RULE_EXCLUDE,
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

const EXCLUDE = [...RULE_EXCLUDE, /email-signature\.html$/];

// --- Portuguese category terms ----------------------------------------------
// The Portuguese pages were corrected in an earlier pass; these rules stay so
// the pass is repeatable and so a reintroduced phrase is caught.
const PT_CATEGORY = [
  ['Análise gratuita por corretora registada na ASF', 'Análise gratuita por mediador registado na ASF'],
  ['Corretora registada na ASF', 'Mediador de seguros registado na ASF'],
  ['corretora registada na ASF', 'mediador registado na ASF'],
  ['É uma agência de seguros registada na ASF', 'É um mediador de seguros registado na ASF'],
  ['Agência de seguros especializada', 'Mediador de seguros especializado'],
  ['agência de seguros especializada', 'mediador de seguros especializado'],
  ['Uma agência de seguros', 'Um mediador de seguros'],
  ['uma agência de seguros', 'um mediador de seguros'],
  ['Agência de seguros', 'Mediador de seguros'],
  ['agência de seguros', 'mediador de seguros'],
  // "Agente de Seguros" is left alone deliberately: its only occurrence is the
  // category quoted from the ASF certificate on /alterarmediador/, excluded above.
  ['Fale agora com um corretor', 'Fale connosco'],
  ['Fale com um corretor', 'Fale connosco'],
  ['corretor pelo WhatsApp', 'connosco pelo WhatsApp'],
  ['corretores de seguros', 'mediadores de seguros'],
  ['corretor de seguros', 'mediador de seguros'],
  ['corretora de seguros', 'mediador de seguros'],
  ['nossa corretora', 'nosso mediador'],
  ['um corretor independente', 'um mediador'],
  ['o seu corretor', 'o seu mediador'],
];

// The data files are swept with the published tree on purpose. They are the
// sources the listings, the feeds and the sitemap are generated from, so a title
// or excerpt left saying "corretor" in any of them is reintroduced into the HTML
// the next time a generator runs — which is exactly what happened once already.
// articles.extracted.json is the raw extraction that build-articles-data.mjs
// turns into articles.json, so cleaning only the derived file leaves the
// regression one script run away.
//
// Every script under scripts/ is swept for the same reason, not just the ones
// that own a language tree: build-location-articles.mjs asserts that strings
// copied out of its template page are still present, generate-blog.mjs
// hard-codes the blog index description, and internal-links.mjs and
// upgrade-articles.mjs each carry a self-designation of their own.
//
// data/compliance-audit.json is deliberately NOT swept, and neither is
// lib/terminology-rules.mjs or either pass. The first is the report a pass of
// this kind writes, and rewriting it would make the audit assert something it
// never observed; the second is the rule table, and rewriting it with itself
// would turn every rule's left-hand side into its right-hand side and disarm the
// pass. All of them are in EXCLUDE.
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
  if (rel.startsWith('public/nl/') || rel.startsWith('scripts/nl-')) return [...NL_INDEPENDENCE, ...PT_CATEGORY];
  if (rel.startsWith('public/fr/')) return FR_INDEPENDENCE;
  if (rel.startsWith('public/de/')) return DE_INDEPENDENCE;
  if (rel.startsWith('public/en/')) return [...EN_BROKER, ...EN_INDEPENDENCE, ...EN_RELATIONSHIP];
  // Root-level PT pages, the shared data files and the generators carry both
  // Portuguese and English strings.
  return [
    ...EN_BROKER,
    ...EN_INDEPENDENCE,
    ...EN_RELATIONSHIP,
    ...PT_CATEGORY,
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

  // Park protected regions behind a placeholder no rule can match. NUL is used
  // rather than a space-delimited index, which the earlier version of this
  // script did: " 12 " also matches any bare figure in body copy, so a
  // restore could splice a protected id into the middle of a sentence.
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

console.log(`files changed: ${touched.length}`);
console.log('replacements:');
for (const [k, v] of [...applied].sort((a, b) => b[1] - a[1])) {
  console.log('  ' + String(v).padStart(4), JSON.stringify(k.length > 90 ? k.slice(0, 90) + '…' : k));
}
