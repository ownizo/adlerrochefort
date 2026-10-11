/**
 * High-value home conditions articles (October 2026): the URL of each
 * language version, by cluster key. One source for the PT/EN/DE/NL builder
 * (scripts/build-hnw-oct-articles.mjs) and for the hreflang groups of the
 * generated markets (scripts/lib/market-hreflang.mjs). No FR member.
 */
export const HOME_GROUPS = {
  'home-conditions': {
    'pt-PT': '/blog/seguro-casa-elevado-valor-condicoes/',
    'en-GB': '/en/blog/high-value-home-insurance-conditions-clause-by-clause/',
    de: '/de/blog/hochwertige-immobilie-hausversicherung-bedingungen/',
    nl: '/nl/woonverzekering-hoogwaardige-woning-voorwaarden/',
    es: '/es/seguro-hogar-alto-valor-condiciones/',
    'it-IT': '/it/assicurazione-casa-alto-valore-condizioni/',
    'pl-PL': '/pl/ubezpieczenie-domu-wysokiej-wartosci-warunki/',
    'da-DK': '/dk/husforsikring-eksklusiv-bolig-vilkaar/',
    'sv-SE': '/se/hemforsakring-exklusiv-bostad-villkor/',
    'he-IL': '/il/high-value-home-insurance-conditions/',
    'zh-CN': '/zh/high-value-home-insurance-conditions/',
  },
  'art-beyond': {
    'pt-PT': '/blog/arte-joias-alem-do-valor-acordado/',
    'en-GB': '/en/blog/art-jewellery-cover-beyond-agreed-value/',
    de: '/de/blog/kunst-schmuck-versicherung-ueber-vereinbarten-wert/',
    nl: '/nl/kunst-sieraden-verzekering-boven-getaxeerde-waarde/',
    es: '/es/seguro-arte-joyas-mas-alla-valor-convenido/',
    'it-IT': '/it/assicurazione-arte-gioielli-oltre-valore-concordato/',
    'pl-PL': '/pl/ubezpieczenie-sztuki-bizuterii-ponad-wartosc-uzgodniona/',
    'da-DK': '/dk/kunst-smykker-forsikring-ud-over-aftalt-vaerdi/',
    'sv-SE': '/se/konst-smycken-forsakring-utover-avtalat-varde/',
    'he-IL': '/il/art-jewellery-beyond-agreed-value/',
    'zh-CN': '/zh/art-jewellery-beyond-agreed-value/',
  },
  'family-protection': {
    'pt-PT': '/blog/protecao-familiar-seguro-habitacao/',
    'en-GB': '/en/blog/family-protection-cover-home-policy/',
    de: '/de/blog/familienschutz-hausversicherung/',
    nl: '/nl/gezinsbescherming-woonverzekering/',
    es: '/es/proteccion-familiar-seguro-hogar/',
    'it-IT': '/it/protezione-famiglia-assicurazione-casa/',
    'pl-PL': '/pl/ochrona-rodziny-ubezpieczenie-domu/',
    'da-DK': '/dk/familiebeskyttelse-husforsikring/',
    'sv-SE': '/se/familjeskydd-hemforsakring/',
    'he-IL': '/il/family-protection-home-insurance/',
    'zh-CN': '/zh/family-protection-home-insurance/',
  },
  'home-declare': {
    'pt-PT': '/blog/seguro-casa-elevado-valor-o-que-declarar/',
    'en-GB': '/en/blog/high-value-home-policy-what-to-declare/',
    de: '/de/blog/hochwertige-immobilie-versicherung-anzeigepflichten/',
    nl: '/nl/woonverzekering-hoogwaardige-woning-meldplicht/',
    es: '/es/seguro-hogar-alto-valor-que-declarar/',
    'it-IT': '/it/assicurazione-casa-alto-valore-cosa-dichiarare/',
    'pl-PL': '/pl/ubezpieczenie-domu-wysokiej-wartosci-co-zglosic/',
    'da-DK': '/dk/husforsikring-eksklusiv-bolig-oplysningspligt/',
    'sv-SE': '/se/hemforsakring-exklusiv-bostad-anmalningsplikt/',
    'he-IL': '/il/high-value-home-what-to-declare/',
    'zh-CN': '/zh/high-value-home-what-to-declare/',
  },
};

/** Hand-authored members (PT/EN/DE/NL), in the shape market-hreflang.mjs expects. */
export const HOME_EXTERNAL = Object.fromEntries(
  Object.entries(HOME_GROUPS).map(([k, g]) => [k, Object.fromEntries(['pt-PT', 'en-GB', 'de', 'nl'].map((c) => [g[c], c]))]),
);

/** Slug (last path segment) of a language version. */
export const homeSlug = (key, code) => HOME_GROUPS[key][code].replace(/\/$/, '').split('/').pop();
/** Full URL of a language version. */
export const homeUrl = (key, code) => HOME_GROUPS[key][code];
