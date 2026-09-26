/**
 * Cross-language pairing for the Polish, Swedish and Danish clusters.
 *
 * The three clusters were built to the same eight-page shape on purpose, so
 * every page in one has a genuine counterpart in the other two: the Polish
 * page on household cover and the Danish one answer the same question for a
 * different reader, which is exactly what hreflang is for. Each page declares
 * its `cluster` key, and the groups below are derived from those keys — so a
 * pairing cannot be asserted for a page that was never written.
 *
 * The market homepages additionally join the existing homepage cluster, which
 * is the one place on the site where all eight languages genuinely have the
 * same page. Product pages pair only with their two siblings; there is no
 * /en/ or /de/ page that answers "ansvarsforsikring i Portugal", and claiming
 * one would send a visitor somewhere that does not answer what they asked.
 *
 * Two consumers read this, which is the point:
 *   * scripts/hreflang.mjs, which writes the <link rel="alternate"> blocks;
 *   * scripts/lang-switcher.mjs and scripts/lib/market-cluster.mjs, which
 *     render the selector. Selector and hreflang can therefore never disagree.
 */
import { MARKETS } from './market-registry.mjs';
import { LANGS } from './lang-selector.mjs';

/**
 * The homepages that already existed before these three markets. The hub
 * cluster is the union of these and the three new market homepages, so the
 * declaration is reciprocal in both directions — a unilateral hreflang is
 * ignored by search engines and was the exact defect scripts/hreflang.mjs was
 * written to fix.
 */
export const EXISTING_HOME_CLUSTER = {
  '/': 'pt-PT',
  '/en/': 'en-GB',
  '/nl/': 'nl',
  '/fr/': 'fr',
  '/de/': 'de',
};

const HREFLANG_TO_KEY = Object.fromEntries(LANGS.map((l) => [l.hreflang, l.key]));

/**
 * Specialist (niche) pages, September 2026. The generated markets carry them
 * with `niche-*` cluster keys; the English and German versions are
 * hand-authored, so they are declared here to join the same groups. x-default
 * for every niche group is the English page.
 */
export const NICHE_EXTERNAL = {
  'niche-kr': { '/en/kidnap-ransom-extortion-insurance/': 'en-GB', '/de/entfuehrung-loesegeld-versicherung/': 'de' },
  'niche-estate': { '/en/rural-estate-vineyard-insurance/': 'en-GB', '/de/weingut-landgut-versicherung/': 'de' },
  'niche-build': { '/en/luxury-home-construction-insurance/': 'en-GB', '/de/bauversicherung-luxusimmobilie/': 'de' },
  'niche-villalet': { '/en/luxury-villa-rental-insurance/': 'en-GB', '/de/luxusvilla-vermietung-versicherung/': 'de' },
  'niche-equine': { '/en/equine-horse-insurance/': 'en-GB', '/de/pferdeversicherung/': 'de' },
  'niche-aviation': { '/en/private-aviation-insurance/': 'en-GB', '/de/privatflugzeug-versicherung/': 'de' },
  'niche-cyber': { '/en/family-cyber-fraud-insurance/': 'en-GB', '/de/cyber-betrug-versicherung-familie/': 'de' },
};

/** cluster key -> x-default path, for groups whose default is not the PT homepage. */
export const CLUSTER_X_DEFAULT = Object.fromEntries(
  Object.entries(NICHE_EXTERNAL).map(([k, g]) => [k, Object.keys(g).find((u) => u.startsWith('/en/'))]),
);

/** clusterKey -> { path: hreflangValue }, derived from the page objects. */
export function clusterGroups() {
  const groups = new Map();
  for (const market of MARKETS) {
    const hreflang = market.hreflang;
    for (const page of market.pages) {
      if (!page.cluster) continue;
      const group = groups.get(page.cluster) || {};
      group[page.url] = hreflang;
      groups.set(page.cluster, group);
    }
  }
  for (const [key, extra] of Object.entries(NICHE_EXTERNAL)) {
    if (groups.has(key)) groups.set(key, { ...extra, ...groups.get(key) });
  }
  const hub = groups.get('hub');
  if (hub) groups.set('hub', { ...EXISTING_HOME_CLUSTER, ...hub });
  return groups;
}

/** Every group, in the shape scripts/hreflang.mjs expects in its PAGE_CLUSTERS array. */
export const MARKET_HREFLANG_CLUSTERS = [...clusterGroups().values()];

/**
 * The same list without the homepage group.
 *
 * scripts/hreflang.mjs keeps its own literal record of the homepage cluster —
 * that array is the written-down history of what the markup declared and which
 * declarations were corrected — so the eight paths are listed there, in that
 * file's own order, and only the seven product/guide groups are imported. Two
 * sources for one set would otherwise mean two orders for it, and the later
 * spread would silently decide which one the corpus got.
 */
export const MARKET_PRODUCT_CLUSTERS = [...clusterGroups()]
  .filter(([key]) => key !== 'hub')
  .map(([, group]) => group);

/** path -> { langKey: path } for every language other than the page's own. */
const PAIRS = new Map();
for (const group of MARKET_HREFLANG_CLUSTERS) {
  for (const path of Object.keys(group)) {
    const pairs = {};
    for (const [other, hreflang] of Object.entries(group)) {
      if (other === path) continue;
      const key = HREFLANG_TO_KEY[hreflang];
      if (key) pairs[key] = other;
    }
    PAIRS.set(path, pairs);
  }
}

export function marketPairs(path) {
  return PAIRS.get(path) || null;
}

/** Paths whose x-default is the Portuguese homepage (the site's entry point). */
export const MARKET_X_DEFAULT = MARKETS.map((m) => `/${m.key}/`);
