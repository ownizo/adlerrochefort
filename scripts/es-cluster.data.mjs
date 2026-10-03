/**
 * The Spanish market descriptor.
 *
 * Same consumers as the other generated markets: scripts/lib/market-registry.mjs,
 * which the shared renderer (scripts/lib/market-cluster.mjs), the hreflang
 * helpers (scripts/lib/market-hreflang.mjs), the language selector
 * (scripts/lib/lang-selector.mjs) and scripts/add-market-to-corpus.mjs read.
 *
 * Audience (October 2026): Latin American families living in, moving to or
 * investing in Portugal and Spain. The cluster mirrors the Portugal and Spain
 * halves of /de/ and /nl/ — a landing page per country, the core lines in
 * each, and the specialist pages shared by both.
 *
 * Language identity: URL segment /es/, html lang="es", hreflang `es` (no
 * region), OG locale es_ES. Until October 2026 the pages were declared es-ES
 * because they addressed Spanish owners; they are now written for readers in
 * Mexico, Colombia, Venezuela, Argentina and the rest of Latin America as
 * much as for Spanish residents, and a region-free `es` is the declaration
 * that matches. Text is neutral formal Spanish (usted, no voseo, no
 * peninsular-only colloquialisms).
 *
 * Two differences from the Danish descriptor, both deliberate:
 *   * the service runs in Spanish, so `knowsLanguage` adds 'es' to the
 *     organisation node on these pages (the other markets keep en/pt only);
 *   * no page carries a `wizard`. The per-page quote wizards validate a
 *     Portuguese NIF, a 0000-000 postcode and a Portuguese plate as required
 *     fields, which would lock out exactly the readers this cluster is for —
 *     families living in Spain. All pages share one short form,
 *     'es-solicitud', with the product preselected per page.
 */
import { ES_UI, ES_BRANCHES } from './es-content/ui.mjs';
import { LANG_POLICY_ES } from './es-content/shared.mjs';
import { HUB_PAGE } from './es-content/hub.mjs';
import { HOME_PAGE } from './es-content/home.mjs';
import { BREADCRUMB_PORTUGAL as REBUILD_CRUMB } from './es-content/shared.mjs';
import { rebuildValuePage } from './lib/rebuild-value-page.mjs';
import { HEALTH_PAGE } from './es-content/health.mjs';
import { MOTOR_PAGE } from './es-content/motor.mjs';
import { LIABILITY_PAGE } from './es-content/liability.mjs';
import { MOVING_PAGE } from './es-content/moving.mjs';
import { PROPERTY_PAGE } from './es-content/property.mjs';
import { GUIDE_PAGE } from './es-content/guide.mjs';
import { NICHE_KR_PAGE } from './es-content/niche-kr.mjs';
import { NICHE_ESTATE_PAGE } from './es-content/niche-estate.mjs';
import { NICHE_BUILD_PAGE } from './es-content/niche-build.mjs';
import { NICHE_VILLALET_PAGE } from './es-content/niche-villalet.mjs';
import { NICHE_EQUINE_PAGE } from './es-content/niche-equine.mjs';
import { NICHE_AVIATION_PAGE } from './es-content/niche-aviation.mjs';
import { NICHE_CYBER_PAGE } from './es-content/niche-cyber.mjs';
import { NICHE_FAMILY_OFFICE_PAGE } from './es-content/niche-family-office.mjs';
import { PROFESSIONAL_PAGES } from './es-content/professionals.mjs';
import { GOLF_PAGE } from './es-content/golf.mjs';
import { NAUTICAL_PAGE } from './es-content/nautical.mjs';
// Portugal cluster additions (October 2026).
import { PT_LANDING_PAGE } from './es-content/pt-landing.mjs';
import { PT_VISA_PAGE } from './es-content/pt-visa.mjs';
import { PT_PREEXISTING_PAGE } from './es-content/pt-preexisting.mjs';
import { PT_EARTHQUAKE_PAGE } from './es-content/pt-earthquake.mjs';
import { PT_LIFE_PAGE } from './es-content/pt-life.mjs';
import { PT_RENTAL_PAGE } from './es-content/pt-rental.mjs';
import { PT_PROFESSIONAL_PAGE } from './es-content/pt-professional.mjs';
import { PT_UNLICENSED_PAGE } from './es-content/pt-unlicensed.mjs';
import { PT_CLAIMS_PAGE } from './es-content/pt-claims.mjs';
// Spain cluster (October 2026) — cluster keys es-*, paired with EN/DE/NL and
// the other generated markets in scripts/lib/market-hreflang.mjs.
import { ES_GUIDE_PAGE } from './es-content/es-guide.mjs';
import { ES_VISA_PAGE } from './es-content/es-visa.mjs';
import { ES_HEALTH_PAGE } from './es-content/es-health.mjs';
import { ES_PREEXISTING_PAGE } from './es-content/es-preexisting.mjs';
import { ES_HOME_PAGE } from './es-content/es-home.mjs';
import { ES_MOTOR_PAGE } from './es-content/es-motor.mjs';
import { ES_LIABILITY_PAGE } from './es-content/es-liability.mjs';
import { ES_PROPERTY_PAGE } from './es-content/es-property.mjs';
import { ES_LIFE_PAGE } from './es-content/es-life.mjs';
import { ES_MORTGAGE_PAGE } from './es-content/es-mortgage.mjs';
import { ES_LANDLORD_PAGE } from './es-content/es-landlord.mjs';
import { ES_MOVING_PAGE } from './es-content/es-moving.mjs';
// City pages (October 2026) — only where Latin American demand is documented:
// Madrid, Barcelona and Valencia (INE / municipal registers), Madeira
// (Venezuelans are the island's largest foreign nationality) and Lisbon.
import { CITY_MADRID_PAGE } from './es-content/city-madrid.mjs';
import { CITY_BARCELONA_PAGE } from './es-content/city-barcelona.mjs';
import { CITY_VALENCIA_PAGE } from './es-content/city-valencia.mjs';
import { CITY_LISBOA_PAGE } from './es-content/city-lisboa.mjs';
import { CITY_MADEIRA_PAGE } from './es-content/city-madeira.mjs';

export { LANG_POLICY_ES, BREADCRUMB_ROOT } from './es-content/shared.mjs';

// Rebuild value (October 2026): explanation, SCRIM link, the home form.
// The home page links to it from "related", so the page is reachable from
// the product it explains.
const REBUILD_VALUE_PAGE = rebuildValuePage('es', { breadcrumbRoot: REBUILD_CRUMB, homePage: HOME_PAGE, formBranch: 'Español · Hogar' });

HOME_PAGE.related = [...(HOME_PAGE.related || []).filter((r) => r.url !== REBUILD_VALUE_PAGE.url), { url: REBUILD_VALUE_PAGE.url, label: REBUILD_VALUE_PAGE.breadcrumb.at(-1).name }];

export const PAGES = [
  HUB_PAGE,
  // Portugal — the original eight-page shape (cluster keys home, health, …,
  // paired with the Portugal pages of every generated market) plus the
  // October 2026 additions with pt-* keys.
  HOME_PAGE,
  REBUILD_VALUE_PAGE,
  HEALTH_PAGE,
  MOTOR_PAGE,
  LIABILITY_PAGE,
  MOVING_PAGE,
  PROPERTY_PAGE,
  GUIDE_PAGE,
  PT_LANDING_PAGE,
  PT_VISA_PAGE,
  PT_PREEXISTING_PAGE,
  PT_EARTHQUAKE_PAGE,
  PT_LIFE_PAGE,
  PT_RENTAL_PAGE,
  PT_PROFESSIONAL_PAGE,
  PT_UNLICENSED_PAGE,
  PT_CLAIMS_PAGE,
  // Spain.
  ES_GUIDE_PAGE,
  ES_VISA_PAGE,
  ES_HEALTH_PAGE,
  ES_PREEXISTING_PAGE,
  ES_HOME_PAGE,
  ES_MOTOR_PAGE,
  ES_LIABILITY_PAGE,
  ES_PROPERTY_PAGE,
  ES_LIFE_PAGE,
  ES_MORTGAGE_PAGE,
  ES_LANDLORD_PAGE,
  ES_MOVING_PAGE,
  CITY_MADRID_PAGE,
  CITY_BARCELONA_PAGE,
  CITY_VALENCIA_PAGE,
  CITY_LISBOA_PAGE,
  CITY_MADEIRA_PAGE,
  // Specialist lines (Portugal and Spain), placed through specialist markets
  // and co-brokerage partners. Cluster keys niche-* pair them with the
  // /it/ and /pl/ counterparts in scripts/lib/market-hreflang.mjs.
  NICHE_KR_PAGE,
  NICHE_ESTATE_PAGE,
  NICHE_BUILD_PAGE,
  NICHE_VILLALET_PAGE,
  NICHE_EQUINE_PAGE,
  NICHE_AVIATION_PAGE,
  NICHE_CYBER_PAGE,
  // Family offices (October 2026): pillar of the family-office cluster.
  NICHE_FAMILY_OFFICE_PAGE,
  // High-income professions (October 2026): professional liability, Spain and
  // Portugal. Cluster keys prof-* pair them with /seguros/ and /en/ pages.
  ...PROFESSIONAL_PAGES,
  // Pillar articles (September 2026): golf and the sea in Portugal and Spain.
  // Cluster keys 'golf' / 'nautical' pair them with every other language.
  GOLF_PAGE,
  NAUTICAL_PAGE,
];

export const ES_MARKET = {
  key: 'es',
  // Mega-menu "Seguros en Portugal": the Portugal half has its own landing
  // page and more products than the derived four-plus-three columns hold.
  portugalNav: {
    overviewTitle: 'Visión general',
    overview: [
      { href: '/es/seguros-portugal/', label: 'Seguros en Portugal', flag: '🇵🇹' },
      { href: '/es/', label: 'Portugal y España' },
    ],
    personalTitle: 'Particulares',
    personal: [
      { href: '/es/seguro-medico-visado-portugal/', label: 'Seguro médico para el visado' },
      { href: '/es/seguro-salud-internacional/', label: 'Seguro de salud' },
      { href: '/es/seguro-hogar-alto-valor/', label: 'Vivienda de alto valor' },
      { href: '/es/seguro-coche-portugal/', label: 'Seguro de auto' },
      { href: '/es/seguro-responsabilidad-civil-familiar/', label: 'Responsabilidad civil' },
      { href: '/es/seguro-vida-portugal/', label: 'Seguro de vida' },
    ],
    movingTitle: 'Traslado y vivienda',
    moving: [
      { href: '/es/mudarse-a-portugal-seguros/', label: 'Mudarse a Portugal' },
      { href: '/es/comprar-casa-en-portugal-seguro/', label: 'Comprar casa' },
      { href: '/es/seguro-alquiler-portugal/', label: 'Alquilar su vivienda' },
      { href: '/es/seguro-terremoto-portugal/', label: 'El terremoto' },
      { href: '/es/guia-seguros-portugal-espana/', label: 'Guía de seguros' },
    ],
  },
  // Mega-menu "Seguros en España": the Spain half of the cluster.
  spainNav: {
    overviewTitle: 'Visión general',
    overview: [{ href: '/es/seguros-espana/', label: 'Seguros en España', flag: '🇪🇸' }],
    personalTitle: 'Particulares',
    personal: [
      { href: '/es/seguro-medico-visado-espana/', label: 'Seguro médico para el visado' },
      { href: '/es/seguro-salud-espana/', label: 'Seguro de salud' },
      { href: '/es/seguro-hogar-espana/', label: 'Seguro de hogar' },
      { href: '/es/seguro-coche-espana/', label: 'Seguro de auto' },
      { href: '/es/seguro-responsabilidad-civil-espana/', label: 'Responsabilidad civil' },
      { href: '/es/seguro-vida-espana/', label: 'Seguro de vida' },
    ],
    propertyTitle: 'Inmuebles',
    property: [
      { href: '/es/comprar-casa-en-espana-seguro/', label: 'Comprar casa' },
      { href: '/es/seguro-hipoteca-espana/', label: 'Seguros de la hipoteca' },
      { href: '/es/seguro-alquiler-espana/', label: 'Alquilar su vivienda' },
      { href: '/es/mudarse-a-espana-seguros/', label: 'Mudarse a España' },
    ],
    privateTitle: 'Private Clients',
    privateClients: [
      { href: '/es/#especializadas', label: 'Coberturas especializadas' },
      { href: '/es/seguro-family-office/', label: 'Family offices' },
    ],
  },
  pcSpainHref: '/es/seguro-hogar-espana/',
  name: 'España',

  htmlLang: 'es',
  hreflang: 'es',
  inLanguage: 'es',
  ogLocale: 'es_ES',
  ogImage: '/images/og-adlerrochefort-es.png',

  // The organisation genuinely works in Spanish for this market.
  knowsLanguage: ['es', 'en', 'pt'],

  // Lead attribution. `marketValue` names the language market, not the
  // country of the risk: a Spanish-speaking lead may concern Spain or Portugal.
  marketValue: 'spain-es',
  languageValue: 'es',
  formName: 'es-solicitud',
  gtagName: 'es_solicitud',
  subjectPrefix: 'Nueva solicitud (ES) — ',
  consentValue: 'Sí',

  shortForm: true,
  otherValue: 'Español · Otro',

  langPolicy: LANG_POLICY_ES,
  ui: ES_UI,
  branches: ES_BRANCHES,
  pages: PAGES,
};
