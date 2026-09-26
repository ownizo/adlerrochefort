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
import { HEALTH_PAGE } from './it-content/health.mjs';
import { MOTOR_PAGE } from './it-content/motor.mjs';
import { LIABILITY_PAGE } from './it-content/liability.mjs';
import { MOVING_PAGE } from './it-content/moving.mjs';
import { PROPERTY_PAGE } from './it-content/property.mjs';
import { GUIDE_PAGE } from './it-content/guide.mjs';

export { LANG_POLICY_IT, BREADCRUMB_ROOT } from './it-content/shared.mjs';

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

export const IT_MARKET = {
  key: 'it',
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
