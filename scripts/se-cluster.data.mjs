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
import { HEALTH_PAGE } from './se-content/health.mjs';
import { MOTOR_PAGE } from './se-content/motor.mjs';
import { LIABILITY_PAGE } from './se-content/liability.mjs';
import { MOVING_PAGE } from './se-content/moving.mjs';
import { PROPERTY_PAGE } from './se-content/property.mjs';
import { GUIDE_PAGE } from './se-content/guide.mjs';

export { LANG_POLICY_SE, BREADCRUMB_ROOT } from './se-content/shared.mjs';

export const PAGES = [
  HUB_PAGE,
  HOME_PAGE,
  HEALTH_PAGE,
  MOTOR_PAGE,
  LIABILITY_PAGE,
  MOVING_PAGE,
  PROPERTY_PAGE,
  GUIDE_PAGE,
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
  otherValue: 'SE · Annat',

  langPolicy: LANG_POLICY_SE,
  ui: SE_UI,
  branches: SE_BRANCHES,
  pages: PAGES,
};
