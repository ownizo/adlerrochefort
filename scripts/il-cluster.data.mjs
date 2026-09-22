/**
 * The Hebrew market descriptor.
 *
 * Same three consumers as the other four market descriptors:
 * scripts/lib/market-registry.mjs, which the shared renderer
 * (scripts/lib/market-cluster.mjs), the hreflang post-processor
 * (scripts/hreflang.mjs via scripts/lib/market-hreflang.mjs) and the language
 * selector (scripts/lang-switcher.mjs) all read.
 *
 * Four things are specific to this market.
 *
 * Language codes. This is the clearest case on the site of why the URL segment
 * is not a language code: the market is Israel and the language is Hebrew, so
 * the segment is /il/, the HTML language is `he`, and the hreflang is `he-IL`.
 * Three different strings for three different things. `il` and `IL` are country
 * codes and are never language codes; `he-PT` would claim Hebrew as spoken in
 * Portugal, which is not what the pages are — they are Hebrew for a reader with
 * an Israeli frame of reference, about Portugal.
 *
 * Direction. `dir: 'rtl'` is the only new field in the descriptor shape, and it
 * is read in exactly one place — the renderer's <html> tag — from which every
 * other right-to-left behaviour follows: the CSS is scoped on
 * html[dir="rtl"] and the renderer's bidi isolation is gated on this flag. The
 * four existing markets have no `dir` field and so regenerate unchanged, which
 * is what keeps Portuguese, English, Dutch, French, German, Polish, Swedish,
 * Danish and Chinese left-to-right.
 *
 * Attribution. `languageValue` is 'he' — the language of the enquiry — while
 * `marketValue` is 'israel', the market the lead comes from. Two fields on
 * purpose: a Hebrew-language enquiry and a lead sourced from Israel are not the
 * same fact, and the pair is what lets the inbox in Lagos tell them apart.
 *
 * Slugs are romanised functional English under /il/, identical to the Chinese
 * set. The reason is the one recorded in scripts/zh-cluster.data.mjs: the
 * sitemap is built by globbing on-disk directory names and the link audit
 * compares hrefs to those paths, so non-ASCII directories would have to decode
 * identically in three places to stay correct. Hebrew would add a second
 * problem on top of that — a percent-encoded right-to-left path is unreadable
 * when pasted into a left-to-right context, which is where URLs get shared. The
 * Hebrew is carried by the titles, headings and anchor text. A side benefit:
 * identical slugs and identical `cluster` keys make the hreflang pairing with
 * the other market clusters fall out automatically.
 */
import { IL_UI, IL_BRANCHES } from './il-content/ui.mjs';
import { LANG_POLICY_IL } from './il-content/shared.mjs';
import { HUB_PAGE } from './il-content/hub.mjs';
import { HOME_PAGE } from './il-content/home.mjs';
import { HEALTH_PAGE } from './il-content/health.mjs';
import { MOTOR_PAGE } from './il-content/motor.mjs';
import { LIABILITY_PAGE } from './il-content/liability.mjs';
import { MOVING_PAGE } from './il-content/moving.mjs';
import { PROPERTY_PAGE } from './il-content/property.mjs';
import { GUIDE_PAGE } from './il-content/guide.mjs';

export { LANG_POLICY_IL, BREADCRUMB_ROOT } from './il-content/shared.mjs';

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

export const IL_MARKET = {
  key: 'il',
  name: 'עברית',

  // Language identity — `he`, hreflang `he-IL`. Never `il`, `IL` or `he-PT`.
  htmlLang: 'he',
  hreflang: 'he-IL',
  inLanguage: 'he',
  ogLocale: 'he_IL',

  // The only market with a direction. Read by the renderer for the <html> tag
  // and to gate bidi isolation; absent elsewhere, so nothing else changes.
  dir: 'rtl',

  // Lead attribution, carried on every submission and on the generate_lead
  // event so a Hebrew-language lead is distinguishable from the others.
  marketValue: 'israel',
  languageValue: 'he',
  formName: 'il-bakashat-hatzaa',
  gtagName: 'il_bakashat_hatzaa',
  subjectPrefix: 'פנייה חדשה (IL) — ',
  consentValue: 'מאשר',

  // Especificação v2, Parte 4 — short shared lead form, same shape and same
  // reasoning as PL's (see scripts/pl-cluster.data.mjs). All four pages
  // sharing this form-name, no per-page exception.
  shortForm: true,
  otherValue: 'IL · Other',

  langPolicy: LANG_POLICY_IL,
  ui: IL_UI,
  branches: IL_BRANCHES,
  pages: PAGES,
};
