#!/usr/bin/env node
/**
 * Phase A.3 — regulatory terminology.
 *
 * Adler & Rochefort is registered with the ASF as a *mediador de seguros* —
 * an insurance intermediary. "Corretor"/"corretora" (broker) and "agência de
 * seguros" (agency) are different ASF categories, so using them to describe
 * the firm misstates its registration. This pass replaces them across every
 * published page, in Portuguese, English and Dutch.
 *
 * Two things are protected from rewriting:
 *
 *   - Anchor slugs. Ten headings have an id containing "broker", each linked
 *     from a table of contents. Renaming them would change a published URL
 *     fragment for no reader benefit, so ids and their matching href="#..."
 *     stay as they are while the visible heading text is rewritten. The same
 *     protection covers the URL-encoded article title inside a WhatsApp share
 *     link, where a replacement containing a space would corrupt the URL.
 *
 *   - public/alterarmediador/index.html, which quotes the category printed on
 *     the ASF certificate. Rewriting a quoted registration entry is a
 *     regulatory question rather than a copy question; the page already
 *     carries a TODO for Hugo to confirm the exact wording.
 *
 * Sentences built on the agent-versus-broker contrast are rewritten whole,
 * ahead of the generic rules, so the comparison survives instead of collapsing
 * into "an agent ... an intermediary ... an intermediary".
 */
import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { execSync } from 'node:child_process';
import { ROOT } from './lib/partials.mjs';

const EXCLUDE = [/alterarmediador/, /email-signature\.html$/];

/** Regions whose text must survive the pass byte for byte. */
const PROTECTED = [
  /\sid="[^"]*brok[^"]*"/gi,
  /\shref="#[^"]*brok[^"]*"/gi,
  /%[0-9A-Fa-f]{2}[A-Za-z]*brok[A-Za-z]*/gi,
];

// --- Portuguese -------------------------------------------------------------
// The Portuguese pages were already corrected in an earlier pass; these rules
// stay so the pass is repeatable and so a reintroduced phrase is caught.
const PT = [
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
  ['um corretor independente', 'um mediador independente'],
  ['o seu corretor', 'o seu mediador'],
];

// --- English ----------------------------------------------------------------
const EN = [
  // Contrast sentences, rewritten whole.
  [
    'Unlike an agent tied to a single insurer, a broker works for you',
    'Unlike an agent tied to a single insurer, an independent intermediary works for you',
  ],
  [
    '<strong>a broker works for you, not for the insurance company',
    '<strong>an independent intermediary works for you, not for the insurance company',
  ],
  [
    'Use an independent broker</strong> &mdash; a broker registered with the ASF works for you',
    'Use an independent intermediary</strong> &mdash; an intermediary registered with the ASF works for you',
  ],
  ['It is an insurance agency registered with the ASF', 'It is an insurance intermediary registered with the ASF'],

  // Firm self-description.
  ['ASF-registered insurance broker', 'ASF-registered insurance intermediary'],
  ['Insurance broker registered with the ASF', 'Insurance intermediary registered with the ASF'],
  ['insurance broker registered with the ASF', 'insurance intermediary registered with the ASF'],
  ['English-speaking Insurance Broker', 'English-speaking Insurance Intermediary'],
  ['English-speaking insurance broker', 'English-speaking insurance intermediary'],
  ['Expat Insurance Broker', 'Expat Insurance Intermediary'],
  ['Talk to a broker', 'Talk to us'],
  ['talk to a broker', 'talk to us'],
  ['this brokerage does not advise on', 'this intermediary does not advise on'],
  ['traditional brokerage expertise', 'traditional insurance mediation expertise'],
  ['Insurance brokerage', 'Insurance mediation'],
  ['insurance brokerage', 'insurance mediation'],
  ['brokerage', 'insurance mediation'],

  // Generic market usage.
  ['insurance brokers', 'insurance intermediaries'],
  ['insurance broker', 'insurance intermediary'],
  ["An independent broker's", "An independent intermediary's"],
  ['An independent broker&rsquo;s', 'An independent intermediary&rsquo;s'],
  ['An independent broker’s', 'An independent intermediary’s'],
  ['An independent broker', 'An independent intermediary'],
  ['an independent broker', 'an independent intermediary'],
  ['an independent local broker', 'an independent local intermediary'],
  ['a specialised insurance broker', 'a specialised insurance intermediary'],
  ['a specialist broker', 'a specialist intermediary'],
  ['Consult a specialist broker', 'Consult a specialist intermediary'],
  ['a good broker', 'a good intermediary'],
  ['one broker', 'one intermediary'],
  ['another broker', 'another intermediary'],
  ['the broker', 'the intermediary'],
  ['A broker', 'An intermediary'],
  ['a broker', 'an intermediary'],
  ['Brokers', 'Intermediaries'],
  ['brokers', 'intermediaries'],
  ['Broker', 'Intermediary'],
  ['broker', 'intermediary'],
];

// --- Dutch ------------------------------------------------------------------
const NL = [
  ['verzekeringsmakelaar', 'verzekeringsbemiddelaar'],
  ['Verzekeringsmakelaar', 'Verzekeringsbemiddelaar'],
  ['makelaar', 'bemiddelaar'],
  ['Makelaar', 'Bemiddelaar'],
];

// The three data files are included with the published tree on purpose. They
// are the sources the listings, the feeds and the sitemap are generated from,
// so a title or excerpt left saying "broker" in any of them is reintroduced
// into the HTML the next time a generator runs — which is exactly what happened
// once already. articles.extracted.json is the raw extraction that
// build-articles-data.mjs turns into articles.json, so cleaning only the
// derived file leaves the regression one script run away.
//
// data/compliance-audit.json is deliberately NOT swept. It is the report this
// kind of pass writes, and its whole job is to record which phrases were found;
// rewriting it would make the audit assert something it never observed.
const files = [
  ...execSync('find public \\( -name "*.html" -o -name "*.xml" -o -name "*.txt" \\)', {
    cwd: ROOT,
  })
    .toString()
    .trim()
    .split('\n')
    .filter(Boolean)
    .filter((f) => !EXCLUDE.some((re) => re.test(f))),
  'data/articles.json',
  'data/articles.extracted.json',
  'data/homepage-cards.json',
];

const applied = new Map();
const touched = [];

for (const rel of files) {
  const file = join(ROOT, rel);
  const original = await readFile(file, 'utf8');

  // Park protected regions behind placeholders that no rule can match.
  const parked = [];
  let html = original;
  for (const re of PROTECTED) {
    html = html.replace(re, (m) => {
      parked.push(m);
      return ` ${parked.length - 1} `;
    });
  }

  const rules = rel.startsWith('public/nl/')
    ? [...NL, ...PT]
    : rel.startsWith('public/en/')
      ? EN
      : [...PT, ...EN];

  for (const [from, to] of rules) {
    if (from === to || !html.includes(from)) continue;
    applied.set(from, (applied.get(from) || 0) + html.split(from).length - 1);
    html = html.split(from).join(to);
  }

  html = html.replace(/ (\d+) /g, (_, i) => parked[Number(i)]);

  if (html !== original) {
    await writeFile(file, html);
    touched.push(rel);
  }
}

console.log(`files changed: ${touched.length}`);
console.log('replacements:');
for (const [k, v] of [...applied].sort((a, b) => b[1] - a[1])) {
  console.log('  ' + String(v).padStart(4), JSON.stringify(k));
}
