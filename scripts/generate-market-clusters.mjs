#!/usr/bin/env node
/**
 * Generates the Polish, Swedish, Danish, Simplified Chinese and Hebrew market
 * clusters.
 *
 *   node scripts/generate-market-clusters.mjs           # all five
 *   node scripts/generate-market-clusters.mjs pl        # one market
 *   node scripts/generate-market-clusters.mjs se dk zh il
 *
 * Afterwards, run the corpus post-processors so the new pages join the site's
 * existing systems rather than sitting beside them:
 *
 *   node scripts/hreflang.mjs           # canonicals + hreflang, whole corpus
 *   node scripts/lang-switcher.mjs      # the ten-language selector, every page
 *   node scripts/generate-sitemap.mjs   # filesystem-driven, picks the pages up
 *
 * ── The page map ──────────────────────────────────────────────────────────────
 *
 * The five clusters share one eight-page shape, modelled on the Dutch
 * section's structure but with slugs chosen for how each language actually
 * searches — not transliterated Dutch. Every row is a genuine counterpart,
 * which is what lets hreflang pair them (see scripts/lib/market-hreflang.mjs).
 *
 *   NL reference          PL                                              SE                                  DK                                  ZH / IL
 *   ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
 *   /nl/ (hub)            /pl/                                            /se/                                /dk/                                /zh/ · /il/
 *   woonhuisverzekering   /pl/ubezpieczenie-domu-portugalia/              /se/hemforsakring-portugal/         /dk/husforsikring-portugal/         …/home-insurance-portugal/
 *   zorgverzekering       /pl/ubezpieczenie-zdrowotne-portugalia/         /se/sjukvardsforsakring-portugal/   /dk/sundhedsforsikring-portugal/    …/health-insurance-portugal/
 *   autoverzekering       /pl/ubezpieczenie-samochodu-portugalia/         /se/bilforsakring-portugal/         /dk/bilforsikring-portugal/         …/car-insurance-portugal/
 *   aansprakelijkheid     /pl/ubezpieczenie-odpowiedzialnosci-cywilnej-portugalia/  /se/ansvarsforsakring-portugal/  /dk/ansvarsforsikring-portugal/  …/liability-insurance-portugal/
 *   verhuizen naar PT     /pl/przeprowadzka-do-portugalii-ubezpieczenia/  /se/flytta-till-portugal-forsakring/ /dk/flytte-til-portugal-forsikring/ …/moving-to-portugal/
 *   huis kopen in PT      /pl/zakup-nieruchomosci-w-portugalii-ubezpieczenie/ /se/kopa-hus-i-portugal-forsakring/ /dk/kobe-bolig-i-portugal-forsikring/ …/buying-property-portugal/
 *   verzekeringen gids    /pl/ubezpieczenia-portugalia-przewodnik/        /se/forsakringsguide-portugal/      /dk/forsikringsguide-portugal/      …/insurance-guide-portugal/
 *
 * The European slugs are ASCII-folded (ą→a, å/ä→a, ö→o, ø→o) because that is
 * what these markets type into a search box and what the rest of the site
 * already does. The Chinese and Hebrew clusters share one romanised functional
 * set for a different reason, argued in scripts/zh-cluster.data.mjs and
 * scripts/il-cluster.data.mjs: the sitemap is built by globbing on-disk
 * directory names, so Unicode paths would have to survive percent-encoding
 * identically in three places. Hebrew adds a second reason — a percent-encoded
 * right-to-left path is unreadable once pasted into a left-to-right context,
 * which is where URLs get shared. Both languages are carried by the titles,
 * headings and anchor text instead, which is where search reads them anyway.
 *
 * That the two share a slug set is a convenience rather than a coincidence:
 * identical slugs and identical `cluster` keys are what make the hreflang
 * pairing between them fall out of the page objects with no table to maintain.
 *
 * The URL segment is the market, not the language code: /se/ serves Swedish,
 * whose language code is sv, and /dk/ serves Danish, whose code is da. /zh/ is
 * the one case where the two coincide — but the written form still has to be
 * declared, so the HTML lang and hreflang attributes say zh-CN, never bare zh.
 * /il/ is the opposite case and the one to be careful with: the segment is
 * Israel, the language is Hebrew, so lang="he" and hreflang="he-IL". It is also
 * the only cluster rendered right-to-left, via `dir: 'rtl'` on its descriptor —
 * a single field, read only by the renderer's <html> tag, which is what keeps
 * the other nine languages left-to-right.
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
