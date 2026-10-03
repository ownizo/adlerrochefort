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
  // Family offices (October 2026): hand-authored PT/EN/DE/FR members of the pillar.
  'niche-familyoffice': {
    '/private-clients/family-offices/': 'pt-PT',
    '/en/family-office-insurance/': 'en-GB',
    '/de/family-office-versicherung/': 'de',
    '/fr/assurance-family-office/': 'fr',
  },
};

/** Spain cluster (September 2026): hand-authored EN/DE/NL members of the es-* groups. */
export const SPAIN_EXTERNAL = {
  'es-guide': { '/en/expat-insurance-spain/': 'en-GB', '/de/versicherung-spanien/': 'de', '/nl/verzekeringen-spanje/': 'nl' },
  'es-home': { '/en/home-insurance-spain/': 'en-GB', '/de/hausversicherung-spanien/': 'de', '/nl/woonverzekering-spanje/': 'nl' },
  'es-health': { '/en/health-insurance-spain/': 'en-GB', '/de/krankenversicherung-spanien/': 'de', '/nl/zorgverzekering-spanje/': 'nl' },
  'es-motor': { '/en/car-insurance-spain/': 'en-GB', '/de/autoversicherung-spanien/': 'de', '/nl/autoverzekering-spanje/': 'nl' },
  'es-liability': { '/en/family-liability-insurance-spain/': 'en-GB', '/de/privathaftpflicht-spanien/': 'de', '/nl/aansprakelijkheidsverzekering-spanje/': 'nl' },
  'es-property': { '/en/blog/insurance-buying-property-spain/': 'en-GB', '/de/immobilienkauf-spanien-versicherung/': 'de', '/nl/huis-kopen-spanje-verzekering/': 'nl' },
};

/**
 * Spanish cluster additions (October 2026): hand-authored members of the
 * Spain groups that only /es/ has a counterpart for (life, mortgage
 * protection, landlord), and of the new Portugal groups (pt-*). Only pages
 * that already carry an hreflang block are listed, so every declaration
 * written from /es/ can be reciprocated by scripts/add-market-to-corpus.mjs.
 */
export const ES_CLUSTER_EXTERNAL = {
  // Rebuild value (October 2026): the hand-authored members, written by
  // scripts/build-rebuild-value-pages.mjs with the full twelve-language block.
  'rebuild-value': {
    '/seguros/habitacao/valor-reconstrucao/': 'pt-PT',
    '/en/rebuild-value-home-insurance-portugal/': 'en-GB',
    '/de/wiederaufbauwert-hausversicherung-portugal/': 'de',
    '/nl/herbouwwaarde-woonverzekering-portugal/': 'nl',
    '/fr/valeur-reconstruction-assurance-habitation-portugal/': 'fr',
  },
  'es-life': { '/de/lebensversicherung-spanien/': 'de' },
  'es-mortgage': { '/de/hypothekenschutz-spanien/': 'de' },
  'es-landlord': { '/de/vermieterversicherung-spanien/': 'de' },
  'pt-landing': { '/de/versicherung-portugal/': 'de', '/nl/verzekeringen-portugal/': 'nl' },
  'pt-professional': {
    '/seguros/responsabilidade-civil-profissional/': 'pt-PT',
    '/en/professional-liability-insurance-portugal/': 'en-GB',
    '/de/berufshaftpflicht-freiberufler-portugal/': 'de',
  },
  'pt-rental': { '/seguros/alojamento-local/': 'pt-PT', '/nl/alojamento-local-verzekering-portugal/': 'nl' },
  'city-madeira': { '/de/versicherung-madeira/': 'de' },
  'pt-unlicensed': {
    '/blog/seguro-habitacao-legalizacao/': 'pt-PT',
    '/en/blog/home-insurance-legalization/': 'en-GB',
    '/nl/niet-gelegaliseerde-woning-verzekeren-portugal/': 'nl',
  },
};

/** Golf and nautical pillars (September 2026): hand-authored PT/EN/DE/FR/NL members. */
export const GOLF_NAUTICAL_EXTERNAL = {
  golf: {
    '/blog/golfe-casas-alto-valor-portugal-espanha/': 'pt-PT',
    '/en/blog/golf-homes-portugal-spain/': 'en-GB',
    '/de/blog/golf-immobilien-portugal-spanien/': 'de',
    '/fr/golf-residences-portugal-espagne/': 'fr',
    '/nl/golf-woningen-portugal-spanje/': 'nl',
  },
  nautical: {
    '/blog/marinas-iates-portugal-espanha/': 'pt-PT',
    '/en/blog/marinas-yachts-portugal-spain/': 'en-GB',
    '/de/blog/marinas-yachten-portugal-spanien/': 'de',
    '/fr/ports-plaisance-yachts-portugal-espagne/': 'fr',
    '/nl/jachthavens-jachten-portugal-spanje/': 'nl',
  },
};

/**
 * High-income professions (October 2026): professional liability for lawyers,
 * doctors and dentists, architects and engineers, financial advisers and real
 * estate agents. Hand-authored PT (/seguros/) and EN members; the Spanish
 * pages are generated from scripts/es-content/professionals.mjs.
 */
export const PROF_EXTERNAL = {
  'prof-lawyers': { '/seguros/rc-advogados/': 'pt-PT', '/en/lawyers-professional-liability-insurance/': 'en-GB' },
  'prof-medical': { '/seguros/rc-medicos-dentistas/': 'pt-PT', '/en/medical-malpractice-insurance-doctors-dentists/': 'en-GB' },
  'prof-architects': { '/seguros/rc-arquitetos-engenheiros/': 'pt-PT', '/en/architects-engineers-professional-indemnity/': 'en-GB' },
  'prof-financial': { '/seguros/rc-consultores-financeiros/': 'pt-PT', '/en/financial-advisers-professional-indemnity/': 'en-GB' },
  'prof-realestate': { '/seguros/rc-mediadores-imobiliarios/': 'pt-PT', '/en/real-estate-agents-professional-liability/': 'en-GB' },
};

/** cluster key -> x-default path, for groups whose default is not the PT homepage. */
export const CLUSTER_X_DEFAULT = Object.fromEntries(
  Object.entries({ ...NICHE_EXTERNAL, ...SPAIN_EXTERNAL, ...GOLF_NAUTICAL_EXTERNAL, ...ES_CLUSTER_EXTERNAL, ...PROF_EXTERNAL })
    .map(([k, g]) => [k, Object.keys(g).find((u) => u.startsWith('/en/'))])
    .filter(([, v]) => v),
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
  for (const [key, extra] of Object.entries({ ...NICHE_EXTERNAL, ...SPAIN_EXTERNAL, ...GOLF_NAUTICAL_EXTERNAL, ...ES_CLUSTER_EXTERNAL, ...PROF_EXTERNAL })) {
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
