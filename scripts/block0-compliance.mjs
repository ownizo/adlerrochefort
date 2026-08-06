#!/usr/bin/env node
/**
 * Block 0 — regulatory compliance sweep.
 *
 * 1. Removes the unverifiable metrics from the homepage and every other page.
 * 2. Unifies the regulatory self-designation on "mediador de seguros" (PT) and
 *    "insurance intermediary" (EN). Generic, third-party references to brokers
 *    are deliberately left alone and listed in the audit output instead.
 * 3. Prints the promotional-language audit (report only — nothing rewritten).
 *
 * Idempotent: re-running finds nothing left to change.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { globSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = join(ROOT, 'public');

const files = globSync('**/*.html', { cwd: PUBLIC }).map((f) => join(PUBLIC, f));

// --- Regulatory terminology -------------------------------------------------
// Ordered longest-first so the specific phrases win over the generic ones.
const TERMINOLOGY = [
  // Portuguese
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

  // English — self-designation only
  ['Adler &amp; Rochefort is a registered insurance broker, authorised by the ASF', 'Adler &amp; Rochefort is a registered insurance intermediary, authorised by the ASF'],
  ['We are insurance brokers registered and authorised by the Portuguese Insurance and Pension Funds Supervisory Authority', 'We are an insurance intermediary registered and authorised by the Portuguese Insurance and Pension Funds Supervisory Authority'],
  ["We're an independent insurance broker registered with the ASF", "We're an independent insurance intermediary registered with the ASF"],
  ['We are an independent broker registered with the ASF', 'We are an independent insurance intermediary registered with the ASF'],
  ['English-speaking, ASF-registered insurance broker', 'English-speaking, ASF-registered insurance intermediary'],
  ['ASF-registered, English-speaking broker', 'ASF-registered, English-speaking insurance intermediary'],
  ['English-speaking, ASF-registered broker', 'English-speaking, ASF-registered insurance intermediary'],
  ['independent, ASF-registered broker', 'independent, ASF-registered insurance intermediary'],
  ['independent ASF-registered broker', 'independent ASF-registered insurance intermediary'],
  ['ASF-registered broker n.&ordm; 425591790/3', 'ASF-registered insurance intermediary n.&ordm; 425591790/3'],
  ['ASF-registered broker n.º 425591790/3', 'ASF-registered insurance intermediary n.º 425591790/3'],
  ['Free analysis by an ASF-registered broker.', 'Free analysis by an ASF-registered insurance intermediary.'],
  ['As an ASF-registered broker we compare the market for you', 'As an ASF-registered insurance intermediary we compare the market for you'],
  ['ASF-registered broker', 'ASF-registered insurance intermediary'],
  ['Talk to a broker now on WhatsApp.', 'Talk to an insurance intermediary now on WhatsApp.'],
  ['Talk it through with an English-speaking broker on WhatsApp.', 'Talk it through with an English-speaking insurance intermediary on WhatsApp.'],
  ['a broker like Adler &amp; Rochefort', 'an insurance intermediary like Adler &amp; Rochefort'],
  ['broker like Adler &amp; Rochefort works for you', 'insurance intermediary like Adler &amp; Rochefort works for you'],
  ['the insurance brokerage services offered by Adler &amp; Rochefort', 'the insurance mediation services offered by Adler &amp; Rochefort'],
  ['Adler &amp; Rochefort is an insurance broker registered with the ASF', 'Adler &amp; Rochefort is an insurance intermediary registered with the ASF'],
  ['Written by an ASF-registered Portuguese broker.', 'Written by an ASF-registered Portuguese insurance intermediary.'],
  ['Independent broker analysis &middot; Adler', 'Independent intermediary analysis &middot; Adler'],
  ['Independent broker analysis · Adler', 'Independent intermediary analysis · Adler'],
  ['An independent broker&rsquo;s comparison', 'An independent insurance intermediary&rsquo;s comparison'],
  ['An independent broker’s comparison', 'An independent insurance intermediary’s comparison'],
  ['A broker authorised by the ASF analyses', 'An insurance intermediary authorised by the ASF analyses'],
  ['An ASF-authorised broker compares plans', 'An ASF-authorised insurance intermediary compares plans'],
  ['Independent broker, free quote in 24h.', 'Independent insurance intermediary, free quote in 24h.'],
  ['Independent broker, free quote.', 'Independent insurance intermediary, free quote.'],
  ['Independent broker, all in English.', 'Independent insurance intermediary, all in English.'],
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
const residualBroker = [];

for (const file of files) {
  const original = await readFile(file, 'utf8');
  let html = original;

  for (const [from, to] of [...METRICS, ...TERMINOLOGY]) {
    if (html.includes(from)) html = html.split(from).join(to);
  }

  if (html !== original) {
    await writeFile(file, html);
    changed.push(relative(ROOT, file));
  }

  const rel = relative(PUBLIC, file);
  for (const re of PROMO) {
    for (const m of html.matchAll(re)) {
      const start = Math.max(0, m.index - 70);
      promoHits.push(`${rel} :: …${html.slice(start, m.index + m[0].length + 70).replace(/\s+/g, ' ')}…`);
    }
  }
  for (const m of html.matchAll(/[^<>]{0,80}\bbrokers?\b[^<>]{0,60}/gi)) {
    residualBroker.push(`${rel} :: ${m[0].replace(/\s+/g, ' ').trim()}`);
  }
  for (const m of html.matchAll(/[^<>]{0,60}\bcorretor[ae]?s?\b[^<>]{0,60}/gi)) {
    residualBroker.push(`${rel} :: ${m[0].replace(/\s+/g, ' ').trim()}`);
  }
}

console.log(`files changed: ${changed.length}`);
console.log(`promotional-language hits: ${promoHits.length}`);
console.log(`residual broker/corretor mentions: ${residualBroker.length}`);

await writeFile(
  join(ROOT, 'data', 'compliance-audit.json'),
  JSON.stringify({ changed, promoHits, residualBroker: [...new Set(residualBroker)].sort() }, null, 2) + '\n'
);
