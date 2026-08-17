#!/usr/bin/env node
/**
 * Block 0 — regulatory compliance sweep.
 *
 * 1. Removes the unverifiable metrics from the homepage and every other page.
 * 2. Unifies the regulatory self-designation: "mediador de seguros" in
 *    Portuguese, "broker" in English, French, German and Dutch. Generic,
 *    third-party references are deliberately left alone and listed in the audit
 *    output instead.
 * 3. Removes "independent" used as a standalone label, in all five languages,
 *    and the "we work for you, not the insurer" claim that as an *agente de
 *    seguros* the firm cannot assert.
 * 4. Prints the promotional-language audit (report only — nothing rewritten).
 *
 * The English table here used to run in the opposite direction, rewriting
 * "broker" to "insurance intermediary". That is what left the homepage <h1>
 * saying one thing and the rest of the English site another, and re-running it
 * would undo the correction. The self-designation rules now come from
 * scripts/lib/terminology-rules.mjs, shared with scripts/terminology.mjs and
 * scripts/phase2-terminology.mjs, so the three passes cannot drift apart again.
 * That module is also where the French and German tables live, which this script
 * previously had none of.
 *
 * public/alterarmediador/index.html is excluded: it quotes the category printed
 * on the ASF certificate ("Agente de Seguros") inside a letter the client sends
 * to their insurer.
 *
 * Idempotent: re-running finds nothing left to change.
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
const PUBLIC = join(ROOT, 'public');

const files = globSync('**/*.html', { cwd: PUBLIC }).filter(
  (f) => !EXCLUDE.some((re) => re.test(f))
);

// --- Portuguese self-designation --------------------------------------------
// "corretor"/"corretora" (broker) and "agência de seguros" (agency) are ASF
// categories the firm is not registered in. Ordered longest-first so the
// specific phrases win over the generic ones.
const PT_SELF_DESIGNATION = [
  ['Corretora registada na ASF n.º 425591790/3', 'Mediador de seguros registado na ASF n.º 425591790/3'],
  ['Análise gratuita por corretora registada na ASF.', 'Análise gratuita por mediador de seguros registado na ASF.'],
  ['Cotação personalizada em 24h por corretora registada na ASF.', 'Cotação personalizada em 24h por mediador de seguros registado na ASF.'],
  ['Fale agora com um corretor pelo WhatsApp.', 'Fale agora com um mediador de seguros pelo WhatsApp.'],
  ['Fale com um corretor pelo WhatsApp e esclareça o seu caso.', 'Fale com um mediador de seguros pelo WhatsApp e esclareça o seu caso.'],
  ['Porquê uma corretora local com visão internacional', 'Porquê um mediador de seguros local com visão internacional'],
  ['com um corretor antes de assinar', 'com um mediador de seguros antes de assinar'],
  ['confirme estes pontos com o seu corretor', 'confirme estes pontos com o seu mediador de seguros'],
  ['rever os seguintes pontos com o seu corretor', 'rever os seguintes pontos com o seu mediador de seguros'],
  ['Agência de seguros especializada', 'Mediador de seguros especializado'],
];

// --- English self-designation -----------------------------------------------
// "Insurance mediation" is the statutory name of the activity (mediação de
// seguros) and is correct for the service; only the noun for the firm is
// standardised on "broker", which EN_BROKER does.
const EN_SELF_DESIGNATION = [
  ['the insurance brokerage services offered by Adler &amp; Rochefort', 'the insurance mediation services offered by Adler &amp; Rochefort'],
];

// --- Unverifiable metrics ---------------------------------------------------
const HERO_STATS_OLD = `    <div class="hero-stats">
      <div>
        <div class="hero-stat-num">+400</div>
        <div class="hero-stat-label">Clientes empresariais</div>
      </div>
      <div>
        <div class="hero-stat-num">12</div>
        <div class="hero-stat-label">Anos de experiência</div>
      </div>
      <div>
        <div class="hero-stat-num">98%</div>
        <div class="hero-stat-label">Taxa de sinistros resolvidos</div>
      </div>
      <div>
        <div class="hero-stat-num">EN</div>
        <div class="hero-stat-label">Apoio em inglês</div>
      </div>
    </div>`;

const HERO_STATS_NEW = `    <div class="hero-stats">
      <div>
        <div class="hero-stat-num">ASF</div>
        <div class="hero-stat-label">Mediador registado n.º 425591790/3</div>
      </div>
      <div>
        <div class="hero-stat-num">20+</div>
        <div class="hero-stat-label">Anos de experiência do fundador em gestão de risco e turismo</div>
      </div>
      <div>
        <div class="hero-stat-num">24h</div>
        <div class="hero-stat-label">Resposta em 24h úteis</div>
      </div>
      <div>
        <div class="hero-stat-num">PT + EN</div>
        <div class="hero-stat-label">Apoio bilingue</div>
      </div>
    </div>`;

const TECH_METRICS_OLD = `          <div class="tech-metric">
            <div class="tech-metric-num">-70%</div>
            <div class="tech-metric-label">Tempo administrativo</div>
          </div>
          <div class="tech-metric">
            <div class="tech-metric-num">+400</div>
            <div class="tech-metric-label">Empresas protegidas</div>
          </div>`;

const TECH_METRICS_NEW = `          <div class="tech-metric">
            <div class="tech-metric-num">Multi</div>
            <div class="tech-metric-label">Comparamos o mercado</div>
          </div>
          <div class="tech-metric">
            <div class="tech-metric-num">ASF</div>
            <div class="tech-metric-label">Mediador registado n.º 425591790/3</div>
          </div>`;

const METRICS = [
  [HERO_STATS_OLD, HERO_STATS_NEW],
  [TECH_METRICS_OLD, TECH_METRICS_NEW],
  [
    'Mediador de seguros com a plataforma de IA Os Meus Seguros: proteção 360 para empresas e gestão inteligente para particulares. +400 clientes empresariais.',
    'Mediador de seguros registado na ASF n.º 425591790/3 com a plataforma de IA Os Meus Seguros: proteção 360 para empresas e gestão inteligente para particulares.',
  ],
  ['<span>+400 Clientes Satisfeitos</span>', '<span>Mediador registado na ASF n.º 425591790/3</span>'],
  [
    'Em 12 anos de gestão de frotas empresariais, identificámos 5 erros',
    'Na gestão de frotas empresariais, identificámos 5 erros',
  ],
];

// --- Promotional-language audit (report only) -------------------------------
const PROMO = [
  /\bgarantimos\b/gi,
  /\bmelhor pre[çc]o\b/gi,
  /\bmais barato\b/gi,
  /\bnunca falha\b/gi,
  /\bwe guarantee\b/gi,
  /\bcheapest\b/gi,
  /\bbest price\b/gi,
];

const changed = [];
const promoHits = [];
const residualTerminology = [];

// Portuguese pages sit at the root of public/, so they are what is left once the
// four language subtrees are accounted for. The metrics blocks are Portuguese
// homepage markup and are applied everywhere harmlessly — they only ever match
// the one page that carries them.
const rulesFor = (rel) => {
  if (rel.startsWith('nl/')) return [...METRICS, ...NL_INDEPENDENCE];
  if (rel.startsWith('fr/')) return [...METRICS, ...FR_INDEPENDENCE];
  if (rel.startsWith('de/')) return [...METRICS, ...DE_INDEPENDENCE];
  if (rel.startsWith('en/')) {
    return [...METRICS, ...EN_BROKER, ...EN_SELF_DESIGNATION, ...EN_INDEPENDENCE, ...EN_RELATIONSHIP];
  }
  return [
    ...METRICS,
    ...EN_BROKER,
    ...EN_SELF_DESIGNATION,
    ...EN_INDEPENDENCE,
    ...EN_RELATIONSHIP,
    ...PT_SELF_DESIGNATION,
    ...PT_INDEPENDENCE,
    ...PT_RELATIONSHIP,
  ];
};

for (const rel of files) {
  const file = join(PUBLIC, rel);
  const original = await readFile(file, 'utf8');

  // Park the published URL fragments — anchor ids and their href="#…" targets —
  // behind placeholders no rule can match. Several headings have an id
  // containing "broker" or "independente" and are linked from a table of
  // contents; renaming one would change a published fragment for no reader
  // benefit. The visible heading text is rewritten, the id is not, so a heading
  // and its anchor can legitimately disagree after this pass.
  const parked = [];
  let html = original;
  for (const re of PROTECTED) {
    html = html.replace(re, (m) => {
      parked.push(m);
      return `\u0000${parked.length - 1}\u0000`;
    });
  }

  for (const [from, to] of rulesFor(rel)) {
    if (from === to || !html.includes(from)) continue;
    html = html.split(from).join(to);
  }

  html = html.replace(/\u0000(\d+)\u0000/g, (_, i) => parked[Number(i)]);
  if (/\u0000/.test(html)) throw new Error(`unrestored placeholder in ${rel}`);

  if (html !== original) {
    await writeFile(file, html);
    changed.push(relative(ROOT, file));
  }

  for (const re of PROMO) {
    for (const m of html.matchAll(re)) {
      const start = Math.max(0, m.index - 70);
      promoHits.push(`${rel} :: …${html.slice(start, m.index + m[0].length + 70).replace(/\s+/g, ' ')}…`);
    }
  }
  // The audit used to list every occurrence of "broker", which was the wrong
  // noun at the time. It is now the right one in English, so what is worth
  // reporting is the opposite: "corretor"/"corretora", which is the wrong ASF
  // category in Portuguese, and any English page that has drifted back to
  // "intermediary" or reintroduced an "independent" label. Report only — these
  // are read by a human, because a generic or statutory use of either word is
  // legitimate and must not be swept.
  for (const m of html.matchAll(/[^<>]{0,60}\bcorretor[ae]?s?\b[^<>]{0,60}/gi)) {
    residualTerminology.push(`${rel} :: ${m[0].replace(/\s+/g, ' ').trim()}`);
  }
  for (const m of html.matchAll(/[^<>]{0,60}\b(?:intermediar(?:y|ies)|independen\w*|onafhankelijk\w*|ind[ée]pendan\w*|unabh[äa]ngig\w*)\b[^<>]{0,60}/gi)) {
    residualTerminology.push(`${rel} :: ${m[0].replace(/\s+/g, ' ').trim()}`);
  }
}

console.log(`files changed: ${changed.length}`);
console.log(`promotional-language hits: ${promoHits.length}`);
console.log(`residual terminology mentions for review: ${residualTerminology.length}`);

await writeFile(
  join(ROOT, 'data', 'compliance-audit.json'),
  JSON.stringify(
    { changed, promoHits, residualTerminology: [...new Set(residualTerminology)].sort() },
    null,
    2
  ) + '\n'
);
