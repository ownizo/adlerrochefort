/**
 * The Swedish market descriptor.
 *
 * Same three consumers as the Polish one: scripts/lib/market-registry.mjs,
 * which the shared renderer (scripts/lib/market-cluster.mjs), the hreflang
 * post-processor (scripts/hreflang.mjs via scripts/lib/market-hreflang.mjs)
 * and the language selector (scripts/lang-switcher.mjs) all read.
 *
 * Note the language codes carefully. The URL segment is /se/ because that is
 * how the brief specifies the market path, and SE is the country code — but
 * the LANGUAGE code is `sv`. So html lang="sv", hreflang sv-SE, OG locale
 * sv_SE. "SE" must never appear as an HTML language code.
 */
import { SE_UI, SE_BRANCHES } from './se-content/ui.mjs';
import { LANG_POLICY_SE } from './se-content/shared.mjs';
import { HUB_PAGE } from './se-content/hub.mjs';
import { HOME_PAGE } from './se-content/home.mjs';
import { BREADCRUMB_ROOT as REBUILD_CRUMB } from './se-content/shared.mjs';
import { rebuildValuePage } from './lib/rebuild-value-page.mjs';
import { HEALTH_PAGE } from './se-content/health.mjs';
import { MOTOR_PAGE } from './se-content/motor.mjs';
import { LIABILITY_PAGE } from './se-content/liability.mjs';
import { MOVING_PAGE } from './se-content/moving.mjs';
import { PROPERTY_PAGE } from './se-content/property.mjs';
import { GUIDE_PAGE } from './se-content/guide.mjs';
// Spain cluster (cluster keys es-*), paired by key with the other markets.
import { ES_GUIDE_PAGE } from './se-content/es-guide.mjs';
import { ES_HOME_PAGE } from './se-content/es-home.mjs';
import { ES_HEALTH_PAGE } from './se-content/es-health.mjs';
import { ES_MOTOR_PAGE } from './se-content/es-motor.mjs';
import { ES_LIABILITY_PAGE } from './se-content/es-liability.mjs';
import { ES_PROPERTY_PAGE } from './se-content/es-property.mjs';
// Golf and nautical pillar articles, September 2026 (cluster keys golf /
// nautical), each covering Portugal and Spain.
import { GOLF_PAGE } from './se-content/golf.mjs';
import { NAUTICAL_PAGE } from './se-content/nautical.mjs';

export { LANG_POLICY_SE, BREADCRUMB_ROOT } from './se-content/shared.mjs';

// Rebuild value (October 2026): explanation, SCRIM link, the home form.
// The home page links to it from "related", so the page is reachable from
// the product it explains.
const REBUILD_VALUE_PAGE = rebuildValuePage('se', { breadcrumbRoot: REBUILD_CRUMB, homePage: HOME_PAGE });

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
  ES_GUIDE_PAGE,
  ES_HOME_PAGE,
  ES_HEALTH_PAGE,
  ES_MOTOR_PAGE,
  ES_LIABILITY_PAGE,
  ES_PROPERTY_PAGE,
  GOLF_PAGE,
  NAUTICAL_PAGE,
];

export const SE_MARKET = {
  key: 'se',
  name: 'Sverige',

  // Language identity — `sv`, not `se`. See the note at the top of the file.
  htmlLang: 'sv',
  hreflang: 'sv-SE',
  inLanguage: 'sv-SE',
  ogLocale: 'sv_SE',

  // Lead attribution, carried on every submission and on the generate_lead
  // event so a Swedish lead is distinguishable from a Polish or Danish one.
  marketValue: 'sweden',
  languageValue: 'sv',
  formName: 'se-offertforfragan',
  gtagName: 'se_offertforfragan',
  subjectPrefix: 'Ny förfrågan (SE) — ',
  consentValue: 'Ja',

  // Especificação v2, Parte 4 — short shared lead form, same shape and same
  // reasoning as PL's (see scripts/pl-cluster.data.mjs). All four pages
  // sharing this form-name, no per-page exception.
  shortForm: true,
  otherValue: 'SE · Annat',

  langPolicy: LANG_POLICY_SE,
  ui: SE_UI,
  branches: SE_BRANCHES,
  pages: PAGES,
};
