/**
 * The Danish market descriptor.
 *
 * Same three consumers as Poland and Sweden: scripts/lib/market-registry.mjs,
 * which the shared renderer (scripts/lib/market-cluster.mjs), the hreflang
 * post-processor (scripts/hreflang.mjs via scripts/lib/market-hreflang.mjs)
 * and the language selector (scripts/lang-switcher.mjs) all read.
 *
 * Note the language codes carefully. The URL segment is /dk/ because that is
 * how the brief specifies the market path, and DK is the country code — but
 * the LANGUAGE code is `da`. So html lang="da", hreflang da-DK, OG locale
 * da_DK. "DK" must never appear as an HTML language code.
 */
import { DK_UI, DK_BRANCHES } from './dk-content/ui.mjs';
import { LANG_POLICY_DK } from './dk-content/shared.mjs';
import { HUB_PAGE } from './dk-content/hub.mjs';
import { HOME_PAGE } from './dk-content/home.mjs';
import { HEALTH_PAGE } from './dk-content/health.mjs';
import { MOTOR_PAGE } from './dk-content/motor.mjs';
import { LIABILITY_PAGE } from './dk-content/liability.mjs';
import { MOVING_PAGE } from './dk-content/moving.mjs';
import { PROPERTY_PAGE } from './dk-content/property.mjs';
import { GUIDE_PAGE } from './dk-content/guide.mjs';

export { LANG_POLICY_DK, BREADCRUMB_ROOT } from './dk-content/shared.mjs';

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

export const DK_MARKET = {
  key: 'dk',
  name: 'Danmark',

  // Language identity — `da`, not `dk`. See the note at the top of the file.
  htmlLang: 'da',
  hreflang: 'da-DK',
  inLanguage: 'da-DK',
  ogLocale: 'da_DK',

  // Lead attribution, carried on every submission and on the generate_lead
  // event so a Danish lead is distinguishable from a Polish or Swedish one.
  marketValue: 'denmark',
  languageValue: 'da',
  formName: 'dk-forespoergsel',
  gtagName: 'dk_forespoergsel',
  subjectPrefix: 'Ny forespørgsel (DK) — ',
  consentValue: 'Ja',
  otherValue: 'DK · Andet',

  langPolicy: LANG_POLICY_DK,
  ui: DK_UI,
  branches: DK_BRANCHES,
  pages: PAGES,
};
