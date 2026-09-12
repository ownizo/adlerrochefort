/**
 * The Simplified Chinese market descriptor.
 *
 * Same three consumers as the Polish, Swedish and Danish ones:
 * scripts/lib/market-registry.mjs, which the shared renderer
 * (scripts/lib/market-cluster.mjs), the hreflang post-processor
 * (scripts/hreflang.mjs via scripts/lib/market-hreflang.mjs) and the language
 * selector (scripts/lang-switcher.mjs) all read.
 *
 * Two things are specific to this market.
 *
 * Language codes. The URL segment /zh/ happens to coincide with the language
 * subtag, unlike /se/ (sv) and /dk/ (da) — but the written form still has to
 * be declared, because zh is ambiguous between scripts. These pages are
 * Simplified Chinese, so: html lang="zh-CN", hreflang zh-CN, OG locale zh_CN.
 * Never bare `zh`, and never `cn` (that is a country, not a language).
 *
 * Attribution. `languageValue` is 'zh' — the language of the enquiry — while
 * `marketValue` is 'china', the market the lead comes from. The two are
 * deliberately different fields; collapsing them would lose the distinction
 * between a Chinese-language enquiry and a lead sourced from China.
 *
 * Slugs are romanised functional English under /zh/ rather than Unicode. The
 * brief allows this where Unicode URLs are not safely supported, and here they
 * are not: the sitemap is built by globbing on-disk directory names
 * (scripts/generate-sitemap.mjs) and the link audit compares hrefs to those
 * paths, so percent-encoded directories would have to be decoded identically
 * in three places to stay correct. The Chinese is carried by the titles,
 * headings and anchor text, which is where search engines read it anyway.
 */
import { ZH_UI, ZH_BRANCHES } from './zh-content/ui.mjs';
import { LANG_POLICY_ZH } from './zh-content/shared.mjs';
import { HUB_PAGE } from './zh-content/hub.mjs';
import { HOME_PAGE } from './zh-content/home.mjs';
import { HEALTH_PAGE } from './zh-content/health.mjs';
import { MOTOR_PAGE } from './zh-content/motor.mjs';
import { LIABILITY_PAGE } from './zh-content/liability.mjs';
import { MOVING_PAGE } from './zh-content/moving.mjs';
import { PROPERTY_PAGE } from './zh-content/property.mjs';
import { GUIDE_PAGE } from './zh-content/guide.mjs';

export { LANG_POLICY_ZH, BREADCRUMB_ROOT } from './zh-content/shared.mjs';

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

export const ZH_MARKET = {
  key: 'zh',
  name: '简体中文',

  // Language identity — zh-CN, never bare `zh`. See the note at the top.
  htmlLang: 'zh-CN',
  hreflang: 'zh-CN',
  inLanguage: 'zh-CN',
  ogLocale: 'zh_CN',

  // Lead attribution, carried on every submission and on the generate_lead
  // event so a Chinese-language lead is distinguishable from the others.
  marketValue: 'china',
  languageValue: 'zh',
  formName: 'zh-baojia-shenqing',
  gtagName: 'zh_baojia_shenqing',
  subjectPrefix: '新咨询 (ZH) — ',
  consentValue: '同意',
  otherValue: 'ZH · Other',

  langPolicy: LANG_POLICY_ZH,
  ui: ZH_UI,
  branches: ZH_BRANCHES,
  pages: PAGES,
};
