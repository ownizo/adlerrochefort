/**
 * The Polish market descriptor.
 *
 * Read by scripts/lib/market-registry.mjs, which is in turn read by the shared
 * renderer (scripts/lib/market-cluster.mjs), the hreflang post-processor
 * (scripts/hreflang.mjs, via scripts/lib/market-hreflang.mjs) and the language
 * selector (scripts/lang-switcher.mjs). One list, three consumers — so a page
 * cannot exist for the renderer and be invisible to hreflang.
 *
 * Note the language codes. The URL segment is /pl/ and the market is Poland,
 * and here the language code happens to agree: html lang="pl", hreflang
 * pl-PL, OG locale pl_PL. Sweden and Denmark are the cases where the segment
 * and the code diverge.
 */
import { PL_UI, PL_BRANCHES } from './pl-content/ui.mjs';
import { LANG_POLICY_PL } from './pl-content/shared.mjs';
import { HUB_PAGE } from './pl-content/hub.mjs';
import { HOME_PAGE } from './pl-content/home.mjs';
import { BREADCRUMB_ROOT as REBUILD_CRUMB } from './pl-content/shared.mjs';
import { rebuildValuePage } from './lib/rebuild-value-page.mjs';
import { HEALTH_PAGE } from './pl-content/health.mjs';
import { MOTOR_PAGE } from './pl-content/motor.mjs';
import { LIABILITY_PAGE } from './pl-content/liability.mjs';
import { MOVING_PAGE } from './pl-content/moving.mjs';
import { PROPERTY_PAGE } from './pl-content/property.mjs';
import { GUIDE_PAGE } from './pl-content/guide.mjs';
// Specialist (niche) pages, September 2026. Each covers Portugal and Spain;
// the `cluster` keys (niche-*) are shared with /en/, /de/, /es/ and /it/ so
// the hreflang pairing falls out of the page objects.
import { NICHE_KR_PAGE } from './pl-content/niche-kr.mjs';
import { NICHE_ESTATE_PAGE } from './pl-content/niche-estate.mjs';
import { NICHE_BUILD_PAGE } from './pl-content/niche-build.mjs';
import { NICHE_VILLALET_PAGE } from './pl-content/niche-villalet.mjs';
import { NICHE_EQUINE_PAGE } from './pl-content/niche-equine.mjs';
import { NICHE_AVIATION_PAGE } from './pl-content/niche-aviation.mjs';
import { NICHE_CYBER_PAGE } from './pl-content/niche-cyber.mjs';
// Spain cluster, September 2026. Written for Poles in Spain (Costa Blanca,
// Costa del Sol, the Canaries, Barcelona/Valencia) — not translations of the
// Portugal pages. The es-* cluster keys are shared with /nl/, /dk/, /se/,
// /il/, /zh/, /en/ and /de/, so hreflang pairs them from the page objects.
import { ES_GUIDE_PAGE } from './pl-content/es-guide.mjs';
import { ES_HOME_PAGE } from './pl-content/es-home.mjs';
import { ES_HEALTH_PAGE } from './pl-content/es-health.mjs';
import { ES_MOTOR_PAGE } from './pl-content/es-motor.mjs';
import { ES_LIABILITY_PAGE } from './pl-content/es-liability.mjs';
import { ES_PROPERTY_PAGE } from './pl-content/es-property.mjs';
// Golf and nautical pillar articles, September 2026 (cluster keys golf /
// nautical), each covering Portugal and Spain.
import { GOLF_PAGE } from './pl-content/golf.mjs';
import { NAUTICAL_PAGE } from './pl-content/nautical.mjs';

export { LANG_POLICY_PL, BREADCRUMB_ROOT } from './pl-content/shared.mjs';

// Rebuild value (October 2026): explanation, SCRIM link, the home form.
// The home page links to it from "related", so the page is reachable from
// the product it explains.
const REBUILD_VALUE_PAGE = rebuildValuePage('pl', { breadcrumbRoot: REBUILD_CRUMB, homePage: HOME_PAGE });

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
  NICHE_KR_PAGE,
  NICHE_ESTATE_PAGE,
  NICHE_BUILD_PAGE,
  NICHE_VILLALET_PAGE,
  NICHE_EQUINE_PAGE,
  NICHE_AVIATION_PAGE,
  NICHE_CYBER_PAGE,
  ES_GUIDE_PAGE,
  ES_HOME_PAGE,
  ES_HEALTH_PAGE,
  ES_MOTOR_PAGE,
  ES_LIABILITY_PAGE,
  ES_PROPERTY_PAGE,
  GOLF_PAGE,
  NAUTICAL_PAGE,
];

export const PL_MARKET = {
  key: 'pl',
  name: 'Polska',

  // Language identity. `htmlLang` goes in <html lang>, `hreflang` in the
  // alternate links, `inLanguage` in the JSON-LD, `ogLocale` in Open Graph.
  htmlLang: 'pl',
  hreflang: 'pl-PL',
  inLanguage: 'pl-PL',
  ogLocale: 'pl_PL',

  // Lead attribution. `marketValue` and `languageValue` travel with every
  // submission and with the generate_lead event, which is what makes a Polish
  // lead distinguishable from a Danish one in both the inbox and in Ads.
  marketValue: 'poland',
  languageValue: 'pl',
  formName: 'pl-zapytanie-ofertowe',
  gtagName: 'pl_zapytanie_ofertowe',
  subjectPrefix: 'Nowe zapytanie (PL) — ',
  consentValue: 'Tak',

  // Especificação v2, Parte 4 — this cluster's shared lead form uses the
  // short shape (name, email, phone, optional company, insurance type,
  // the chosen ramo's own optional fields, message, consent), the same one
  // "analise-gratuita" (PT), "free-analysis" (EN) and "de-angebot-anfrage"
  // (DE) already use. Localidade, country of residence, residence status,
  // start date and preferred language leave the form: they are asked in
  // the follow-up, where they can be asked precisely, rather than standing
  // between a first-time visitor and sending anything at all. Applies to
  // all four pages sharing this form-name, with no per-page exception.
  shortForm: true,
  otherValue: 'PL · Inne',

  langPolicy: LANG_POLICY_PL,
  ui: PL_UI,
  branches: PL_BRANCHES,
  pages: PAGES,
};
