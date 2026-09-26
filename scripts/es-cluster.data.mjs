/**
 * The Spanish market descriptor.
 *
 * Same consumers as the other generated markets: scripts/lib/market-registry.mjs,
 * which the shared renderer (scripts/lib/market-cluster.mjs), the hreflang
 * helpers (scripts/lib/market-hreflang.mjs), the language selector
 * (scripts/lib/lang-selector.mjs) and scripts/add-market-to-corpus.mjs read.
 *
 * Language identity: URL segment /es/, html lang="es", hreflang es-ES, OG
 * locale es_ES. The audience includes Latin American families, but the pages
 * are written in neutral formal Spanish and declared es-ES because the firm
 * serves Spain and Portugal; a region-free `es` would claim the pages for every
 * Spanish-speaking market, which they do not address.
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

export { LANG_POLICY_ES, BREADCRUMB_ROOT } from './es-content/shared.mjs';

export const PAGES = [
  HUB_PAGE,
  HOME_PAGE,
  HEALTH_PAGE,
  MOTOR_PAGE,
  LIABILITY_PAGE,
  MOVING_PAGE,
  PROPERTY_PAGE,
  GUIDE_PAGE,
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
];

export const ES_MARKET = {
  key: 'es',
  name: 'España',

  htmlLang: 'es',
  hreflang: 'es-ES',
  inLanguage: 'es-ES',
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
