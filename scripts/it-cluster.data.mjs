/**
 * The Italian market descriptor.
 *
 * Same consumers as the other market clusters: scripts/lib/market-registry.mjs,
 * which the shared renderer (scripts/lib/market-cluster.mjs), the hreflang
 * post-processor (scripts/hreflang.mjs via scripts/lib/market-hreflang.mjs)
 * and the language selector (scripts/lang-switcher.mjs) all read.
 *
 * Here the URL segment and the language code coincide (/it/, `it`), but the
 * written form is still declared in full where the attribute expects a
 * region: hreflang it-IT, OG locale it_IT.
 *
 * Audience: Italian families in Lisbon, Cascais and Porto (often tax
 * residents), Italians buying in Spain and in the Algarve. Pages cover
 * Portugal first and Spain where the reader's question spans both.
 *
 * Language policy — see LANG_POLICY_IT in ./it-content/shared.mjs: English is
 * the official working language; written communication reaches the client
 * in Italian through AI-assisted translation.
 *
 * Forms: every page uses the shared short form (`shortForm: true`) under the
 * single form name below. Unlike /dk/, no page carries a per-page quote
 * `wizard` — that would need a data/i18n/quote-form/it.json table plus four
 * more registered form names. The product pages instead pre-select their
 * branch (formBranch) on the short form.
 */
import { IT_UI, IT_BRANCHES } from './it-content/ui.mjs';
import { LANG_POLICY_IT } from './it-content/shared.mjs';
import { HUB_PAGE } from './it-content/hub.mjs';
import { HOME_PAGE } from './it-content/home.mjs';
import { BREADCRUMB_ROOT as REBUILD_CRUMB } from './it-content/shared.mjs';
import { rebuildValuePage } from './lib/rebuild-value-page.mjs';
import { HEALTH_PAGE } from './it-content/health.mjs';
import { MOTOR_PAGE } from './it-content/motor.mjs';
import { LIABILITY_PAGE } from './it-content/liability.mjs';
import { MOVING_PAGE } from './it-content/moving.mjs';
import { PROPERTY_PAGE } from './it-content/property.mjs';
import { GUIDE_PAGE } from './it-content/guide.mjs';
import { KR_PAGE } from './it-content/niche-kr.mjs';
import { ESTATE_PAGE } from './it-content/niche-estate.mjs';
import { BUILD_PAGE } from './it-content/niche-build.mjs';
import { VILLALET_PAGE } from './it-content/niche-villalet.mjs';
import { EQUINE_PAGE } from './it-content/niche-equine.mjs';
import { AVIATION_PAGE } from './it-content/niche-aviation.mjs';
import { CYBER_PAGE } from './it-content/niche-cyber.mjs';
import { FAMILY_OFFICE_PAGE } from './it-content/niche-family-office.mjs';
import { GOLF_PAGE } from './it-content/golf.mjs';
import { NAUTICAL_PAGE } from './it-content/nautical.mjs';

export { LANG_POLICY_IT, BREADCRUMB_ROOT } from './it-content/shared.mjs';

// Rebuild value (October 2026): explanation, SCRIM link, the home form.
// The home page links to it from "related", so the page is reachable from
// the product it explains.
const REBUILD_VALUE_PAGE = rebuildValuePage('it', { breadcrumbRoot: REBUILD_CRUMB, homePage: HOME_PAGE, formBranch: 'IT · Casa' });

HOME_PAGE.related = [...(HOME_PAGE.related || []).filter((r) => r.url !== REBUILD_VALUE_PAGE.url), { url: REBUILD_VALUE_PAGE.url, label: REBUILD_VALUE_PAGE.breadcrumb.at(-1).name }];

export const PAGES = [
  HUB_PAGE,
  HOME_PAGE,
  REBUILD_VALUE_PAGE,
  HEALTH_PAGE,
  MOTOR_PAGE,
  LIABILITY_PAGE,
  MOVING_PAGE,
  PROPERTY_PAGE,
  GUIDE_PAGE,
  // Specialist (HNW niche) pages — Portugal and Spain, placed through
  // specialist markets and co-brokerage partners. Cluster keys niche-* are
  // shared with the EN/DE/ES/PL counterparts for hreflang pairing.
  KR_PAGE,
  ESTATE_PAGE,
  BUILD_PAGE,
  VILLALET_PAGE,
  EQUINE_PAGE,
  AVIATION_PAGE,
  CYBER_PAGE,
  // Family offices (October 2026): pillar of the family-office cluster.
  FAMILY_OFFICE_PAGE,
  // Pillar articles (September 2026): golf and the sea in Portugal and Spain.
  // Cluster keys 'golf' / 'nautical' pair them with every other language.
  GOLF_PAGE,
  NAUTICAL_PAGE,
];

export const IT_MARKET = {
  key: 'it',
  // Mega-menu "Assicurazioni in Spagna": /it/ pages cover both countries, so
  // the Spain menu points at their Spain content instead of the English pages.
  spainNav: {
    overviewTitle: 'Panoramica',
    overview: [{ href: '/it/#spagna', label: 'Assicurazioni in Spagna', flag: '🇪🇸' }],
    personalTitle: 'Privati',
    personal: [
      { href: '/it/assicurazione-casa-alto-valore/#alto-valore', label: 'Casa di alto valore in Spagna' },
      { href: '/it/comprare-casa-portogallo-spagna-assicurazione/', label: 'Comprare casa in Spagna' },
      { href: '/it/responsabilita-civile-famiglia/', label: 'Responsabilità civile della famiglia' },
    ],
    propertyTitle: 'Immobili',
    property: [
      { href: '/it/assicurazione-affitto-villa-lusso/', label: 'Affitto di ville di lusso' },
      { href: '/it/assicurazione-costruzione-villa/', label: 'Costruzione e ristrutturazione' },
      { href: '/it/assicurazione-tenuta-vigneto/', label: 'Tenute e vigneti' },
    ],
    privateTitle: 'Private Clients',
    privateClients: [{ href: '/it/#specialistiche', label: 'Coperture specialistiche' }],
  },
  pcSpainHref: '/it/assicurazione-casa-alto-valore/#alto-valore',
  name: 'Italia',

  htmlLang: 'it',
  hreflang: 'it-IT',
  inLanguage: 'it-IT',
  ogLocale: 'it_IT',
  ogImage: '/images/og-adlerrochefort-it.png',

  // Lead attribution, carried on every submission and on the generate_lead
  // event so an Italian lead is distinguishable from every other market.
  marketValue: 'italy',
  languageValue: 'it',
  formName: 'it-richiesta',
  gtagName: 'it_richiesta',
  subjectPrefix: 'Nuova richiesta (IT) — ',
  consentValue: 'Sì',

  // Short shared lead form, same shape and reasoning as PL/DK.
  shortForm: true,
  otherValue: 'IT · Altro',

  langPolicy: LANG_POLICY_IT,
  ui: IT_UI,
  branches: IT_BRANCHES,
  pages: PAGES,
};
