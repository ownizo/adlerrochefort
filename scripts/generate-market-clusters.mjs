#!/usr/bin/env node
/**
 * Generates the Polish, Swedish, Danish and Simplified Chinese market clusters.
 *
 *   node scripts/generate-market-clusters.mjs           # all four
 *   node scripts/generate-market-clusters.mjs pl        # one market
 *   node scripts/generate-market-clusters.mjs se dk zh
 *
 * Afterwards, run the corpus post-processors so the new pages join the site's
 * existing systems rather than sitting beside them:
 *
 *   node scripts/hreflang.mjs           # canonicals + hreflang, whole corpus
 *   node scripts/lang-switcher.mjs      # the nine-language selector, every page
 *   node scripts/generate-sitemap.mjs   # filesystem-driven, picks the pages up
 *
 * ── The page map ──────────────────────────────────────────────────────────────
 *
 * The four clusters share one eight-page shape, modelled on the Dutch
 * section's structure but with slugs chosen for how each language actually
 * searches — not transliterated Dutch. Every row is a genuine counterpart,
 * which is what lets hreflang pair them (see scripts/lib/market-hreflang.mjs).
 *
 *   NL reference          PL                                              SE                                  DK                                  ZH
 *   ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
 *   /nl/ (hub)            /pl/                                            /se/                                /dk/                                /zh/
 *   woonhuisverzekering   /pl/ubezpieczenie-domu-portugalia/              /se/hemforsakring-portugal/         /dk/husforsikring-portugal/         /zh/home-insurance-portugal/
 *   zorgverzekering       /pl/ubezpieczenie-zdrowotne-portugalia/         /se/sjukvardsforsakring-portugal/   /dk/sundhedsforsikring-portugal/    /zh/health-insurance-portugal/
 *   autoverzekering       /pl/ubezpieczenie-samochodu-portugalia/         /se/bilforsakring-portugal/         /dk/bilforsikring-portugal/         /zh/car-insurance-portugal/
 *   aansprakelijkheid     /pl/ubezpieczenie-odpowiedzialnosci-cywilnej-portugalia/  /se/ansvarsforsakring-portugal/  /dk/ansvarsforsikring-portugal/  /zh/liability-insurance-portugal/
 *   verhuizen naar PT     /pl/przeprowadzka-do-portugalii-ubezpieczenia/  /se/flytta-till-portugal-forsakring/ /dk/flytte-til-portugal-forsikring/ /zh/moving-to-portugal/
 *   huis kopen in PT      /pl/zakup-nieruchomosci-w-portugalii-ubezpieczenie/ /se/kopa-hus-i-portugal-forsakring/ /dk/kobe-bolig-i-portugal-forsikring/ /zh/buying-property-portugal/
 *   verzekeringen gids    /pl/ubezpieczenia-portugalia-przewodnik/        /se/forsakringsguide-portugal/      /dk/forsikringsguide-portugal/      /zh/insurance-guide-portugal/
 *
 * The European slugs are ASCII-folded (ą→a, å/ä→a, ö→o, ø→o) because that is
 * what these markets type into a search box and what the rest of the site
 * already does. The Chinese cluster uses romanised functional slugs for a
 * different reason, argued in scripts/zh-cluster.data.mjs: the sitemap is
 * built by globbing on-disk directory names, so Unicode paths would have to
 * survive percent-encoding identically in three places. The Chinese is carried
 * by the titles, headings and anchor text instead.
 *
 * The URL segment is the market, not the language code: /se/ serves Swedish,
 * whose language code is sv, and /dk/ serves Danish, whose code is da. /zh/ is
 * the one case where the two coincide — but the written form still has to be
 * declared, so the HTML lang and hreflang attributes say zh-CN, never bare zh.
 */
import { MARKETS, MARKET_BY_KEY, MARKET_KEYS } from './lib/market-registry.mjs';
import { writeMarket } from './lib/market-cluster.mjs';

const args = process.argv.slice(2).filter((a) => a !== 'all');
const selected = args.length ? args : MARKET_KEYS;

const unknown = selected.filter((k) => !MARKET_BY_KEY[k]);
if (unknown.length) {
  console.error(`Unknown market(s): ${unknown.join(', ')}. Known: ${MARKET_KEYS.join(', ')}`);
  process.exit(1);
}

let total = 0;
for (const key of selected) {
  const market = MARKET_BY_KEY[key];
  const written = await writeMarket(market);
  total += written.length;
  console.log(`\n${market.name} (/${market.key}/) — ${written.length} pages`);
  for (const url of written) console.log(`  ${url}`);
}

console.log(`\n${total} pages written across ${selected.length} market(s).`);
console.log('Next: node scripts/hreflang.mjs && node scripts/lang-switcher.mjs && node scripts/generate-sitemap.mjs');

void MARKETS;
