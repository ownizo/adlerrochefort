/**
 * Shared mega-nav markup. One information architecture everywhere:
 *
 *   Portugal ▾   Spain ▾   Private Clients ▾     LOGO     [Insights] Why us ▾   CTA   Lang
 *
 * Homepages that already carry this (PT, EN, DE) remain the source of truth
 * for those languages — scripts/stamp-mega-nav.mjs copies them onto inner
 * pages. This module exists for the languages whose homepage never grew the
 * mega-nav: the five market clusters, plus NL and FR, so a visitor can tell
 * where they are and move between markets without guessing the URL.
 *
 * Spain product pages and private-client landings in English are stamped from
 * the EN homepage rather than generated here. Cluster Spain/Private Clients
 * items point at the English pages: those markets have no Spain cluster of
 * their own, and English is the working language.
 */
export const NAV_SCRIPT = '<script defer src="/js/ar-nav.js"></script>';

export const CARET = `<svg class="nav-caret" viewBox="0 0 10 6" fill="none" aria-hidden="true"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

export const SPAIN_HREFS = {
  overview: '/en/expat-insurance-spain/',
  health: '/en/health-insurance-spain/',
  home: '/en/home-insurance-spain/',
  car: '/en/car-insurance-spain/',
  life: '/en/life-insurance-spain/',
  landlord: '/en/landlord-insurance-spain/',
  mortgage: '/en/mortgage-protection-spain/',
  privateClients: '/en/private-clients-spain/',
};

export const PC_HREFS = {
  portugal: '/en/private-clients/',
  spain: '/en/private-clients-spain/',
};

export const WHY_HREFS = {
  about: '/en/about/',
  how: '/en/how-we-work/',
  broker: '/en/why-use-an-insurance-broker/',
  claims: '/en/claims-support/',
};

const item = ({ href, label, flag, onclick }) => {
  const extra = onclick ? ` onclick="${onclick}"` : '';
  const text = flag ? `<span class="nav-panel-flag">${flag}</span> ${label}` : label;
  return `<a href="${href}" role="menuitem"${extra}>${text}</a>`;
};

const mobileItem = ({ href, label, flag }) => {
  const text = flag ? `${flag} ${label}` : label;
  return `<a href="${href}">${text}</a>`;
};

/**
 * @param {object} spec
 * @param {string} spec.navAria
 * @param {string} spec.logoHref
 * @param {string} [spec.logoAlt]
 * @param {object} spec.portugal
 * @param {object} spec.spain
 * @param {object} spec.privateClients
 * @param {object|null} [spec.whyUs]
 * @param {object|null} [spec.insights]
 * @param {{href:string,label:string}} spec.cta
 * @param {string} spec.switcher  full <div class="lang-switcher">…</div>
 * @param {string} [spec.mobileSwitcher]
 * @param {string} spec.burgerLabel
 */
export function renderMegaNav(spec) {
  const {
    navAria,
    logoHref,
    logoAlt = 'Adler & Rochefort',
    portugal: pt,
    spain: es,
    privateClients: pc,
    whyUs,
    insights,
    cta,
    switcher,
    mobileSwitcher,
    burgerLabel,
  } = spec;

  const ptOverview = (pt.overview || []).map((l) => `            ${item(l)}`).join('\n');
  const ptPersonal = (pt.personal || []).map((l) => `            ${item(l)}`).join('\n');
  const ptMoving = (pt.moving || []).map((l) => `            ${item(l)}`).join('\n');

  const esOverview = (es.overview || []).map((l) => `            ${item(l)}`).join('\n');
  const esPersonal = (es.personal || []).map((l) => `            ${item(l)}`).join('\n');
  const esProperty = (es.property || []).map((l) => `            ${item(l)}`).join('\n');
  const esPC = (es.privateClients || []).map((l) => `            ${item(l)}`).join('\n');

  const pcItems = (pc.items || []).map((l) => `        ${item(l)}`).join('\n');
  const whyItems = whyUs ? (whyUs.items || []).map((l) => `        ${item(l)}`).join('\n') : '';

  const insightsLink = insights
    ? `    <a href="${insights.href}">${insights.label}</a>\n`
    : '';

  const whyBlock = whyUs
    ? `    <div class="nav-item">
      <button type="button" class="nav-trigger" id="navTriggerWhy" aria-expanded="false" aria-controls="navPanelWhy">
        ${whyUs.trigger}
        ${CARET}
      </button>
      <div class="nav-panel nav-panel--sm" id="navPanelWhy" role="menu" aria-label="${whyUs.menuAria}" hidden>
${whyItems}
      </div>
    </div>
`
    : '';

  const nav = `<nav class="site-nav" role="navigation" aria-label="${navAria}">
  <div class="nav-links-left">
    <div class="nav-item">
      <button type="button" class="nav-trigger" id="navTriggerPT" aria-expanded="false" aria-controls="navPanelPT">
        ${pt.trigger}
        ${CARET}
      </button>
      <div class="nav-panel" id="navPanelPT" role="menu" aria-label="${pt.menuAria}" hidden>
        <div class="nav-panel-cols">
          <div class="nav-panel-col nav-panel-col--overview nav-panel-overview">
            <div class="nav-panel-col-title">${pt.overviewTitle}</div>
${ptOverview}
          </div>
          <div class="nav-panel-col">
            <div class="nav-panel-col-title">${pt.personalTitle}</div>
${ptPersonal}
          </div>
          <div class="nav-panel-col">
            <div class="nav-panel-col-title">${pt.movingTitle}</div>
${ptMoving}
          </div>
        </div>
      </div>
    </div>
    <div class="nav-item">
      <button type="button" class="nav-trigger" id="navTriggerES" aria-expanded="false" aria-controls="navPanelES">
        ${es.trigger}
        ${CARET}
      </button>
      <div class="nav-panel" id="navPanelES" role="menu" aria-label="${es.menuAria}" hidden>
        <div class="nav-panel-cols nav-panel-cols--4">
          <div class="nav-panel-col nav-panel-col--overview nav-panel-overview">
            <div class="nav-panel-col-title">${es.overviewTitle}</div>
${esOverview}
          </div>
          <div class="nav-panel-col">
            <div class="nav-panel-col-title">${es.personalTitle}</div>
${esPersonal}
          </div>
          <div class="nav-panel-col">
            <div class="nav-panel-col-title">${es.propertyTitle}</div>
${esProperty}
          </div>
          <div class="nav-panel-col">
            <div class="nav-panel-col-title">${es.privateTitle}</div>
${esPC}
          </div>
        </div>
      </div>
    </div>
    <div class="nav-item">
      <button type="button" class="nav-trigger" id="navTriggerPC" aria-expanded="false" aria-controls="navPanelPC">
        ${pc.trigger}
        ${CARET}
      </button>
      <div class="nav-panel nav-panel--sm" id="navPanelPC" role="menu" aria-label="${pc.menuAria}" hidden>
${pcItems}
      </div>
    </div>
  </div>
  <a href="${logoHref}" class="nav-logo">
    <img src="/images/logo-adler-rochefort.png" alt="${logoAlt}" class="nav-logo-img" decoding="async" width="1000" height="354" loading="eager">
  </a>
  <div class="nav-links-right">
${insightsLink}${whyBlock}    <a href="${cta.href}" class="nav-cta">${cta.label}</a>
    ${switcher.trim()}
  </div>
  <button class="nav-burger" aria-label="${burgerLabel}" aria-controls="mobileNav" aria-expanded="false">
    <span></span><span></span><span></span>
  </button>
</nav>`;

  const mobPt = [...(pt.overview || []), ...(pt.personal || []), ...(pt.moving || [])]
    .map(mobileItem)
    .join('\n      ');
  const mobEs = [...(es.overview || []), ...(es.personal || []), ...(es.property || []), ...(es.privateClients || [])]
    .map(mobileItem)
    .join('\n      ');
  const mobPc = (pc.items || []).map(mobileItem).join('\n      ');
  const mobWhy = whyUs
    ? `  <div class="mobile-accordion-item">
    <button type="button" class="mobile-accordion-trigger" aria-expanded="false" aria-controls="mobAccWhy">
      ${whyUs.trigger}
      ${CARET}
    </button>
    <div class="mobile-accordion-panel" id="mobAccWhy" hidden>
      ${(whyUs.items || []).map(mobileItem).join('\n      ')}
    </div>
  </div>
`
    : '';
  const mobInsights = insights
    ? `  <a href="${insights.href}">${insights.label}</a>\n`
    : '';
  const mobSwitch = mobileSwitcher
    ? `  <div class="mobile-lang-switcher">
${mobileSwitcher}
  </div>
`
    : '';

  const mobile = `<!-- MOBILE NAV -->
<div class="mobile-nav" id="mobileNav">
  <div class="mobile-accordion-item">
    <button type="button" class="mobile-accordion-trigger" aria-expanded="false" aria-controls="mobAccPT">
      🇵🇹 ${pt.trigger}
      ${CARET}
    </button>
    <div class="mobile-accordion-panel" id="mobAccPT" hidden>
      ${mobPt}
    </div>
  </div>
  <div class="mobile-accordion-item">
    <button type="button" class="mobile-accordion-trigger" aria-expanded="false" aria-controls="mobAccES">
      🇪🇸 ${es.trigger}
      ${CARET}
    </button>
    <div class="mobile-accordion-panel" id="mobAccES" hidden>
      ${mobEs}
    </div>
  </div>
  <div class="mobile-accordion-item">
    <button type="button" class="mobile-accordion-trigger" aria-expanded="false" aria-controls="mobAccPC">
      ${pc.trigger}
      ${CARET}
    </button>
    <div class="mobile-accordion-panel" id="mobAccPC" hidden>
      ${mobPc}
    </div>
  </div>
${mobInsights}${mobWhy}  <a href="${cta.href}">${cta.label}</a>
${mobSwitch}</div>`;

  return { nav, mobile };
}

function crumbName(page) {
  const trail = page.breadcrumb || [];
  return trail.length ? trail[trail.length - 1].name : page.eyebrow;
}

function spainSpec(m) {
  return {
    trigger: m.spain,
    menuAria: m.spainMenu,
    overviewTitle: m.overview,
    overview: [{ href: SPAIN_HREFS.overview, label: m.spainHub, flag: '🇪🇸' }],
    personalTitle: m.personalShort,
    personal: [
      { href: SPAIN_HREFS.health, label: m.spainHealth },
      { href: SPAIN_HREFS.home, label: m.spainHome },
      { href: SPAIN_HREFS.car, label: m.spainCar },
      { href: SPAIN_HREFS.life, label: m.spainLife },
    ],
    propertyTitle: m.property,
    property: [
      { href: SPAIN_HREFS.landlord, label: m.spainLandlord },
      { href: SPAIN_HREFS.mortgage, label: m.spainMortgage },
    ],
    privateTitle: m.privateClients,
    privateClients: [{ href: SPAIN_HREFS.privateClients, label: m.spainPC }],
  };
}

function pcSpec(m) {
  return {
    trigger: m.privateClients,
    menuAria: m.privateClientsMenu,
    items: [
      { href: PC_HREFS.portugal, label: m.pcPortugal, flag: '🇵🇹' },
      { href: PC_HREFS.spain, label: m.pcSpain, flag: '🇪🇸' },
    ],
  };
}

function whySpec(m) {
  return {
    trigger: m.whyUs,
    menuAria: m.whyUsMenu,
    items: [
      { href: WHY_HREFS.about, label: m.whyAbout },
      { href: WHY_HREFS.how, label: m.whyHow },
      { href: WHY_HREFS.broker, label: m.whyBroker },
      { href: WHY_HREFS.claims, label: m.whyClaims },
    ],
  };
}

/**
 * Mega-nav for a market-cluster page (PL/SE/DK/ZH/IL). Portugal items come
 * from that market's own pages; Spain and Private Clients point at English.
 */
export function clusterMegaNav(market, { switcher, mobileSwitcher, ctaHref }) {
  const ui = market.ui;
  const m = ui.mega;
  const byCluster = Object.fromEntries(market.pages.map((p) => [p.cluster, p]));
  const link = (cluster, flag) => {
    const page = byCluster[cluster];
    if (!page) return null;
    const label = page.isHub || cluster === 'hub' ? m.hubItem : crumbName(page);
    return { href: page.url, label, flag };
  };

  return renderMegaNav({
    navAria: ui.navAria,
    logoHref: `/${market.key}/`,
    portugal: {
      trigger: m.portugal,
      menuAria: m.portugalMenu,
      overviewTitle: m.overview,
      overview: [link('hub', '🇵🇹')].filter(Boolean),
      personalTitle: m.personal,
      personal: ['home', 'health', 'motor', 'liability'].map((c) => link(c)).filter(Boolean),
      movingTitle: m.moving,
      moving: ['moving', 'property', 'guide'].map((c) => link(c)).filter(Boolean),
    },
    spain: spainSpec(m),
    privateClients: pcSpec(m),
    whyUs: whySpec(m),
    insights: null,
    cta: { href: ctaHref, label: ui.navCta },
    switcher,
    mobileSwitcher,
    burgerLabel: m.burger,
  });
}

/** Dutch homepage / cluster mega. Portugal items stay on /nl/. */
export const NL_MEGA_COPY = {
  navAria: 'Hoofdnavigatie',
  portugal: 'Verzekeringen in Portugal',
  portugalMenu: 'Menu Portugal',
  spain: 'Verzekeringen in Spanje',
  spainMenu: 'Menu Spanje',
  privateClients: 'Private Clients',
  privateClientsMenu: 'Menu Private Clients',
  whyUs: 'Waarom wij',
  whyUsMenu: 'Menu Waarom wij',
  overview: 'Overzicht',
  personal: 'Particulier',
  personalShort: 'Particulier',
  moving: 'Wonen & ondernemen',
  property: 'Wonen',
  hubItem: 'Verzekeringen voor expats in Portugal',
  spainHub: 'Verzekeringen voor expats in Spanje',
  spainHealth: 'Zorgverzekering',
  spainHome: 'Woonverzekering',
  spainCar: 'Autoverzekering',
  spainLife: 'Levensverzekering',
  spainLandlord: 'Verhuurdersverzekering',
  spainMortgage: 'Hypotheekbescherming',
  spainPC: 'Private Client-verzekering',
  pcPortugal: 'Private Clients — Portugal',
  pcSpain: 'Private Clients — Spanje',
  whyAbout: 'Over ons',
  whyHow: 'Hoe wij werken',
  whyBroker: 'Waarom een bemiddelaar',
  whyClaims: 'Schadebehandeling',
  burger: 'Menu',
  cta: 'Offerte aanvragen',
};

export function nlMegaNav({ switcher, mobileSwitcher, ctaHref = '/nl/#offerte' }) {
  const m = NL_MEGA_COPY;
  return renderMegaNav({
    navAria: m.navAria,
    logoHref: '/nl/',
    logoAlt: 'Adler & Rochefort — verzekeringsbemiddelaar in Portugal',
    portugal: {
      trigger: m.portugal,
      menuAria: m.portugalMenu,
      overviewTitle: m.overview,
      overview: [{ href: '/nl/verzekeringen-portugal/', label: m.hubItem, flag: '🇵🇹' }],
      personalTitle: m.personal,
      personal: [
        { href: '/nl/zorgverzekering-portugal/', label: 'Zorgverzekering' },
        { href: '/nl/woonverzekering-portugal/', label: 'Woonverzekering' },
        { href: '/nl/auto-importeren-portugal-verzekering/', label: 'Auto importeren' },
      ],
      movingTitle: m.moving,
      moving: [
        { href: '/nl/vve-verzekering-portugal/', label: 'VvE-verzekering' },
        { href: '/nl/alojamento-local-verzekering-portugal/', label: 'Alojamento Local' },
        { href: '/nl/bedrijfsverzekering-portugal/', label: 'Bedrijfsverzekering' },
        { href: '/nl/zzp-beroepsaansprakelijkheid-portugal/', label: 'ZZP-aansprakelijkheid' },
      ],
    },
    spain: spainSpec(m),
    privateClients: pcSpec(m),
    whyUs: whySpec(m),
    insights: null,
    cta: { href: ctaHref, label: m.cta },
    switcher,
    mobileSwitcher,
    burgerLabel: m.burger,
  });
}

/** French homepage mega. The French cluster is a single hub; products in
 *  Portugal that have no /fr/ page link to the English equivalent. */
export const FR_MEGA_COPY = {
  navAria: 'Navigation principale',
  portugal: 'Assurances au Portugal',
  portugalMenu: 'Menu Portugal',
  spain: 'Assurances en Espagne',
  spainMenu: 'Menu Espagne',
  privateClients: 'Private Clients',
  privateClientsMenu: 'Menu Private Clients',
  whyUs: 'Pourquoi nous',
  whyUsMenu: 'Menu Pourquoi nous',
  overview: 'Aperçu',
  personal: 'Assurances personnelles',
  personalShort: 'Personnel',
  moving: 'Installation',
  property: 'Immobilier',
  hubItem: 'Assurances pour expatriés au Portugal',
  spainHub: 'Assurances pour expatriés en Espagne',
  spainHealth: 'Assurance santé',
  spainHome: 'Assurance habitation',
  spainCar: 'Assurance auto',
  spainLife: 'Assurance vie',
  spainLandlord: 'Assurance propriétaire-bailleur',
  spainMortgage: 'Protection emprunteur',
  spainPC: 'Assurance Private Client',
  pcPortugal: 'Private Clients — Portugal',
  pcSpain: 'Private Clients — Espagne',
  whyAbout: 'À propos',
  whyHow: 'Notre façon de travailler',
  whyBroker: 'Pourquoi un courtier',
  whyClaims: 'Sinistres',
  burger: 'Menu',
  cta: 'Demander un devis',
};

export function frMegaNav({ switcher, mobileSwitcher, ctaHref = '/fr/#devis' }) {
  const m = FR_MEGA_COPY;
  return renderMegaNav({
    navAria: m.navAria,
    logoHref: '/fr/',
    logoAlt: 'Adler & Rochefort — courtier en assurances francophone au Portugal',
    portugal: {
      trigger: m.portugal,
      menuAria: m.portugalMenu,
      overviewTitle: m.overview,
      overview: [{ href: '/fr/', label: m.hubItem, flag: '🇵🇹' }],
      personalTitle: m.personal,
      personal: [
        { href: '/en/health-insurance-quote/', label: m.spainHealth },
        { href: '/en/home-insurance-quote/', label: m.spainHome },
        { href: '/en/car-insurance-portugal/', label: m.spainCar },
      ],
      movingTitle: m.moving,
      moving: [
        { href: '/en/expat-visa-insurance-portugal/', label: 'Visa & relocation' },
        { href: '/en/expat-insurance-portugal/', label: 'Insurance for expats' },
      ],
    },
    spain: spainSpec(m),
    privateClients: pcSpec(m),
    whyUs: whySpec(m),
    insights: null,
    cta: { href: ctaHref, label: m.cta },
    switcher,
    mobileSwitcher,
    burgerLabel: m.burger,
  });
}

/** Balanced extraction of <nav class="site-nav"…>…</nav> and #mobileNav. */
export function extractSiteNav(html) {
  const m = html.match(/<nav class="site-nav[^"]*"[^>]*>[\s\S]*?<\/nav>/);
  return m ? m[0] : null;
}

export function extractMobileNav(html) {
  const startToken = '<div class="mobile-nav"';
  const s = html.indexOf(startToken);
  if (s === -1) return null;
  let i = html.indexOf('>', s);
  if (i === -1) return null;
  let depth = 1;
  i += 1;
  while (i < html.length && depth > 0) {
    const nextOpen = html.indexOf('<div', i);
    const nextClose = html.indexOf('</div>', i);
    if (nextClose === -1) return null;
    if (nextOpen !== -1 && nextOpen < nextClose) {
      depth += 1;
      i = nextOpen + 4;
    } else {
      depth -= 1;
      i = nextClose + 6;
    }
  }
  const chunk = html.slice(s, i);
  const commentStart = html.lastIndexOf('<!-- MOBILE NAV -->', s);
  if (commentStart !== -1 && s - commentStart < 40) {
    return html.slice(commentStart, i);
  }
  return chunk;
}


export function swapLangSwitcher(nav, switcher) {
  if (!nav || !switcher) return nav;
  return nav.replace(
    /<div class="lang-switcher">[\s\S]*?<div class="ar-langsel"[\s\S]*?<\/div>\s*<\/div>/,
    switcher.trim()
  );
}
