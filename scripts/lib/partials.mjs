/**
 * Single source of truth for the site chrome.
 *
 * Before this module existed the header, top bar, language switcher, footer
 * and cookie notice were hand-copied into every page. A fingerprint of the
 * footer alone found 27 distinct variants across 220 files, and the copies
 * had drifted: article footers were missing two whole columns, carried a
 * stale "Insights" list and had no cookie notice at all. Any change had to be
 * made in every copy or the copies diverged again.
 *
 * The chrome now has exactly one definition per language. The Portuguese
 * chrome is read out of public/index.html, the English out of
 * public/en/index.html and the Dutch out of public/nl/index.html — those three
 * pages remain the editable source. scripts/unify-chrome.mjs pushes the result
 * into every other page, so editing a homepage nav link updates the whole
 * site.
 *
 * Two things are deliberately NOT unified:
 *   - Per-page body content and its stylesheet. This module only ever touches
 *     chrome regions and appends a chrome-only stylesheet.
 *   - Article pages used to keep a compact "back to Insights" header. That
 *     left visitors unable to reach Portugal / Spain / Private Clients from
 *     an article. articleNav now returns the language homepage mega-nav.
 */
import { readFile } from 'node:fs/promises';
import { footerSelectorHtml, langSelectorHtml, selectorTargets, LANG_BY_KEY } from './lang-selector.mjs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
export const PUBLIC = join(ROOT, 'public');
export const ORIGIN = 'https://adlerrochefort.com';

function between(html, startMarker, endMarker, { optional = false } = {}) {
  const s = html.indexOf(startMarker);
  if (s === -1) {
    if (optional) return null;
    throw new Error(`marker not found: ${startMarker}`);
  }
  const e = html.indexOf(endMarker, s);
  if (e === -1) {
    if (optional) return null;
    throw new Error(`end marker not found after ${startMarker}`);
  }
  return html.slice(s, e + endMarker.length);
}

const sources = {
  pt: await readFile(join(PUBLIC, 'index.html'), 'utf8'),
  en: await readFile(join(PUBLIC, 'en', 'index.html'), 'utf8'),
  nl: await readFile(join(PUBLIC, 'nl', 'index.html'), 'utf8'),
  de: await readFile(join(PUBLIC, 'de', 'index.html'), 'utf8'),
};

/**
 * Homepage anchors are relative to "/". Every other page needs them absolute
 * or "#contacto" resolves against the article's own URL.
 */
const rootFor = { pt: '/', en: '/en/', nl: '/nl/', de: '/de/' };
const absolutise = (html, lang) =>
  html
    .replace(/href="#([a-z0-9-]+)"/gi, `href="${rootFor[lang]}#$1"`)
    .replace(/href="#"/g, `href="${rootFor[lang]}"`);

function extract(lang) {
  const src = sources[lang];
  const opt = { optional: true };
  return {
    topBar: between(src, '<div class="asf-top-bar">', '</div>', opt),
    nav: between(src, '<nav class="site-nav"', '</nav>', opt),
    mobileNav: between(src, '<div class="mobile-nav" id="mobileNav">', '\n</div>', opt),
    footer: between(src, '<footer>', '</footer>', opt),
    cookie: between(src, '<!-- COOKIE CONSENT BANNER -->', '\n</div>', opt),
  };
}

const raw = { pt: extract('pt'), en: extract('en'), nl: extract('nl'), de: extract('de') };

const build = (lang) => {
  const r = raw[lang];
  const abs = (h) => (h ? absolutise(h, lang) : null);
  return {
    topBar: abs(r.topBar),
    nav: abs(r.nav),
    mobileNav: abs(r.mobileNav),
    footer: abs(r.footer),
    // The cookie notice links to a policy page by absolute path already and
    // must not have its onclick handlers rewritten.
    cookie: r.cookie,
  };
};

export const CHROME = { pt: build('pt'), en: build('en'), nl: build('nl'), de: build('de') };

// The English and Dutch homepages carry no cookie notice of their own. Rather
// than leave those pages without one, the Portuguese banner's markup is reused
// with translated wording and the matching privacy policy.
CHROME.en.cookie = `<!-- COOKIE CONSENT BANNER -->
<div class="cookie-banner" id="cookieBanner">
  <div class="cookie-banner-content">
    <div class="cookie-banner-text">
      <strong>This site uses cookies</strong>
      <p>We use cookies to improve your browsing experience. By continuing, you agree to our <a href="/en/privacy-policy/">Privacy Policy</a>.</p>
    </div>
    <div class="cookie-banner-actions">
      <button class="cookie-btn cookie-btn-reject" onclick="respondCookies(false)">Reject</button>
      <button class="cookie-btn cookie-btn-accept" onclick="respondCookies(true)">Accept</button>
    </div>
  </div>
</div>`;

CHROME.nl.cookie = `<!-- COOKIE CONSENT BANNER -->
<div class="cookie-banner" id="cookieBanner">
  <div class="cookie-banner-content">
    <div class="cookie-banner-text">
      <strong>Deze site gebruikt cookies</strong>
      <p>We gebruiken cookies om uw surfervaring te verbeteren. Door verder te gaan, gaat u akkoord met ons <a href="/politica-de-privacidade/">privacybeleid</a>.</p>
    </div>
    <div class="cookie-banner-actions">
      <button class="cookie-btn cookie-btn-reject" onclick="respondCookies(false)">Weigeren</button>
      <button class="cookie-btn cookie-btn-accept" onclick="respondCookies(true)">Accepteren</button>
    </div>
  </div>
</div>`;

// ---------------------------------------------------------------------------
// Language switcher
//
// A switcher entry is only rendered as a real counterpart when the target page
// actually exists. Portuguese, English and Dutch address different audiences
// and it is intentional that many articles exist in one language only; pointing
// at a translation that was never written would produce a 404. When there is no
// counterpart the entry falls back to that language's blog index or home page,
// and the control says so in the row rather than implying a translation.
//
// September 2026: the control itself moved to scripts/lib/lang-selector.mjs.
// Polish, Swedish and Danish brought the site to eight languages, which a row
// of two-letter codes separated by pipes cannot hold on a phone — so the row
// became a disclosure button listing each language under its own name. The
// markup is defined once there and rendered from three places: here (for
// scripts/unify-chrome.mjs), scripts/lang-switcher.mjs (the canonical pass over
// every page in public/) and scripts/lib/market-cluster.mjs (the PL/SE/DK
// generator). All three emit the same bytes for the same inputs, so no two of
// them can undo each other's work.
//
// The `<div class="lang-switcher">` / `<div class="mobile-lang-switcher">`
// wrapper is kept: public/js/lang-pref.js delegates its nf_lang cookie writes
// off `.lang-switcher a`, and 192 pages carry their own inline copy of the
// switcher CSS. Only the inside changed.
// ---------------------------------------------------------------------------

/**
 * Nearest real page per language for a page with no counterpart.
 *
 * Portuguese and English have an article archive worth landing in, but only
 * for a reader who is already in one: sending someone reading /en/about/ to
 * /blog/ is a worse answer than the Portuguese home page. So those two are a
 * function of where the reader is, exactly as scripts/lang-switcher.mjs
 * decides it — the two emitters have to agree or each run of one would undo
 * the other. The seven localised markets have a home page each and nothing
 * else, whatever the page.
 */
export const LANG_FALLBACK = {
  pt: '/blog/',
  en: '/en/blog/',
  nl: '/nl/',
  fr: '/fr/',
  de: '/de/',
  pl: '/pl/',
  se: '/se/',
  dk: '/dk/',
  zh: '/zh/',
  il: '/il/',
};

const isBlogPath = (url) => url.startsWith('/blog/') || url.startsWith('/en/blog/');

function fallbacksFor(pageUrl) {
  return isBlogPath(pageUrl)
    ? LANG_FALLBACK
    : { ...LANG_FALLBACK, pt: '/', en: '/en/' };
}

/** The order the switcher renders in — the canonical one, from the selector module. */
export const LANG_ORDER = Object.keys(LANG_BY_KEY);

/**
 * `closeIndent` is where the wrapper's closing tag sits, and it differs between
 * the two containers this switcher goes into: siteNav and articleNav open it at
 * four spaces, mobileDrawer at two. Getting it wrong is invisible on the page
 * but not to scripts/lang-switcher.mjs, which preserves whatever indentation a
 * page already has — the two passes would then rewrite the same two bytes back
 * and forth on every run.
 */
export function langSwitcher(
  current,
  targets = {},
  { mobile = false, fallback = {}, closeIndent = mobile ? '  ' : '    ' } = {}
) {
  const cls = mobile ? 'mobile-lang-switcher' : 'lang-switcher';
  const pageUrl = targets[current] || LANG_BY_KEY[current]?.home || '/';
  const pairs = { ...targets };
  delete pairs[current];
  const selector = langSelectorHtml({
    pageLang: current,
    targets: selectorTargets({
      pageLang: current,
      pageUrl,
      pairs,
      fallbacks: { ...fallbacksFor(pageUrl), ...fallback },
    }),
    mobile,
    indent: '      ',
  });
  return `<div class="${cls}">\n${selector}\n${closeIndent}</div>`;
}

/**
 * The footer, with its language selector rebuilt for one page.
 *
 * The footer partial is read out of a homepage, and the selector inside it is
 * the homepage's: its `aria-current` row points at `/`, and its nine links
 * point at that page's counterparts. Installing that partial verbatim on 291
 * other pages would put the wrong targets in every one of their footers — and
 * scripts/lang-switcher.mjs, which rebuilds the same control from the same
 * data, would correct them on its next run, so the two passes would rewrite
 * the same block back and forth for ever. This is the footer equivalent of
 * langSwitcher() above, and it exists for the same reason.
 *
 * Everything outside the language column is the partial unchanged.
 */
export function footerFor(lang, targets = {}) {
  const base = CHROME[lang]?.footer;
  if (!base) return base;
  const pageUrl = targets[lang] || LANG_BY_KEY[lang]?.home || '/';
  const pairs = { ...targets };
  delete pairs[lang];
  const selector = footerSelectorHtml({
    pageLang: lang,
    targets: selectorTargets({ pageLang: lang, pageUrl, pairs, fallbacks: fallbacksFor(pageUrl) }),
    indent: '      ',
  });
  // A function replacement, so a label or href containing `$` cannot be read
  // as a capture reference. The pattern eats the control's own indentation
  // because footerSelectorHtml emits its own.
  return base.replace(
    /[ \t]*<div class="ar-langsel ar-langsel-footer"[\s\S]*?<\/noscript>/,
    () => selector
  );
}

// ---------------------------------------------------------------------------
// Full site header
//
// One definition of the header the homepages use, so the commercial landing
// pages cannot drift away from it again. The landing pages had grown a fork of
// this markup with the logo moved to the end of the nav and no burger-driven
// drawer to fall back on; below the breakpoint that left them with no brand
// element on screen at all.
//
// Only the link sets differ between pages, so they are passed in rather than
// duplicated: `left` and `right` are the two desktop groups, `cta` the button
// that ends the right-hand group, and `drawer` the list the burger opens. The
// source order is the one the layout expects — left group, logo, right group,
// burger — because `.nav-links-left` / `.nav-links-right` each take `flex: 1`
// and centre the logo between them.
//
// The compact "A&R" mark next to the logo is the last line of defence for the
// same guarantee: it stays hidden while the image is fine and takes over if the
// request for it fails, so the header is never brandless.
// ---------------------------------------------------------------------------

const NAV_ARIA = {
  pt: 'Navegação principal',
  en: 'Main navigation',
  nl: 'Hoofdnavigatie',
};

const navLink = (l) =>
  `<a href="${l.href}"${l.cta ? ' class="nav-cta"' : ''}${l.attrs ? ' ' + l.attrs : ''}>${l.label}</a>`;

/**
 * The header itself. `switcher` is the markup from langSwitcher(); passing it
 * in keeps the "never link a translation that does not exist" rule in one
 * place rather than duplicating it per page.
 *
 * `.site-nav` is what the header is styled through, and the only <nav> on the
 * page that carries it — the breadcrumb, the table of contents, the category
 * strip and the pagination are navigations too, and used to be styled as
 * headers because the rules selected the bare element.
 */
export function siteNav({ lang = 'en', home, left = [], right = [], cta, switcher = '' }) {
  const rightLinks = [...right, ...(cta ? [{ ...cta, cta: true }] : [])];
  return `<nav class="site-nav" role="navigation" aria-label="${NAV_ARIA[lang]}">
  <div class="nav-links-left">
${left.map((l) => '    ' + navLink(l)).join('\n')}
  </div>
  <a href="${home}" class="nav-logo">
    <img src="/images/logo-adler-rochefort.png" alt="Adler &amp; Rochefort" class="nav-logo-img" decoding="async" width="1000" height="354" loading="eager" onerror="this.remove();this.parentNode.classList.add('logo-fallback')">
    <span class="nav-logo-mark" aria-hidden="true">A&amp;R</span>
  </a>
  <div class="nav-links-right">
${rightLinks.map((l) => '    ' + navLink(l)).join('\n')}
    ${switcher}
  </div>
  <button class="nav-burger" aria-label="Menu" aria-controls="mobileNav" aria-expanded="false">
    <span></span><span></span><span></span>
  </button>
</nav>`;
}

/**
 * The drawer the burger opens. Hidden by default by `.mobile-nav`; every entry
 * closes it again so a same-page anchor does not leave the drawer covering the
 * section it just jumped to.
 */
export function mobileDrawer({ links = [], switcher = '' }) {
  return `<!-- MOBILE NAV -->
<div class="mobile-nav" id="mobileNav">
${links.map((l) => `  <a href="${l.href}" onclick="toggleMenu()">${l.label}</a>`).join('\n')}
  ${switcher}
</div>`;
}

// ---------------------------------------------------------------------------
// Article reading header
//
// One definition, used by every article in every language. Articles keep the
// compact header — logo, a way back to the index, language switcher — because
// a full navigation bar competes with the article itself. Everything below the
// header (top bar, footer, cookie notice) is the same partial the rest of the
// site uses.
// ---------------------------------------------------------------------------

const BACK_LABEL = {
  pt: '&larr; Voltar aos Insights',
  en: '&larr; Back to Insights',
  nl: '&larr; Terug naar Insights',
};
const BACK_HREF = { pt: '/blog/', en: '/en/blog/', nl: '/nl/' };
const NAV_HOME = { pt: '/', en: '/en/', nl: '/nl/' };

export function swapLangSwitcher(nav, switcher) {
  if (!nav || !switcher) return nav;
  return nav.replace(
    /<div class="lang-switcher">[\s\S]*?<div class="ar-langsel"[\s\S]*?<\/div>\s*<\/div>/,
    switcher.trim()
  );
}

export function articleNav(lang, { switcher = '', backHref, backLabel } = {}) {
  const mega = CHROME[lang] && CHROME[lang].nav;
  if (mega) return swapLangSwitcher(mega, switcher);
  return `<nav class="site-nav" role="navigation" aria-label="${
    lang === 'pt' ? 'Navegação do artigo' : lang === 'nl' ? 'Artikelnavigatie' : 'Article navigation'
  }">
  <a href="${NAV_HOME[lang]}" class="nav-logo">
    <img src="/images/logo-adler-rochefort.png" alt="Adler & Rochefort" class="nav-logo-img" decoding="async" width="1000" height="354" loading="eager">
  </a>
  <div class="nav-right">
    <a href="${backHref || BACK_HREF[lang]}" class="nav-back">${backLabel || BACK_LABEL[lang]}</a>
    ${switcher}
  </div>
</nav>`;
}

// ---------------------------------------------------------------------------
// Chrome stylesheet
//
// Pulled out of the homepage's own CSS so the shared markup renders the same
// everywhere. Only chrome selectors are copied — nothing here can change the
// typography or layout of a page's body, which is why it is safe to append to
// pages that have their own stylesheet.
// ---------------------------------------------------------------------------

const CHROME_SELECTORS = [
  /^:root$/,
  /^html$/,
  /^\.asf-top-bar\b/,
  /^\.site-nav\b/,
  /^\.nav-/,
  /^\.lang-switcher/,
  /^\.lang-unavailable/,
  /^\.mobile-nav/,
  /^\.mobile-accordion-/,
  /^\.mobile-lang-switcher/,
  /^footer\b/,
  /^\.footer-/,
  /^\.cookie-banner/,
  /^\.cookie-btn/,
];

const isChromeSelector = (sel) =>
  sel
    .split(',')
    .map((s) => s.trim())
    .some((s) => CHROME_SELECTORS.some((re) => re.test(s)));

/** Splits a stylesheet into top-level rules, keeping @media blocks intact. */
function topLevelRules(css) {
  const rules = [];
  let depth = 0;
  let start = 0;
  for (let i = 0; i < css.length; i++) {
    const c = css[i];
    if (c === '{') depth++;
    else if (c === '}') {
      depth--;
      if (depth === 0) {
        rules.push(css.slice(start, i + 1).trim());
        start = i + 1;
      }
    }
  }
  return rules.filter(Boolean);
}

/**
 * A rule's prelude as the cascade sees it: the selector or at-rule alone.
 *
 * topLevelRules() splits on braces, so any section comment sitting above a
 * rule arrives glued to the front of its prelude. Left in place that comment
 * made `@media` blocks fail their `startsWith('@media')` test and be dropped —
 * which is how the homepage's whole "RESPONSIVE" block, and with it the rules
 * that hide the desktop nav and reveal the burger below 1024px, went missing
 * from the generated chrome stylesheet while the desktop rules it overrides
 * were kept.
 */
const preludeOf = (rule) =>
  rule
    .slice(0, rule.indexOf('{'))
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .trim();

function filterChromeCss(css) {
  const out = [];
  for (const rule of topLevelRules(css)) {
    const brace = rule.indexOf('{');
    const prelude = preludeOf(rule);
    if (prelude.startsWith('@media')) {
      const inner = rule.slice(brace + 1, rule.lastIndexOf('}'));
      const kept = topLevelRules(inner).filter((r) => isChromeSelector(preludeOf(r)));
      if (kept.length) out.push(`${prelude} {\n${kept.join('\n')}\n}`);
    } else if (prelude.startsWith('@')) {
      // @font-face, @keyframes and friends — cheap to keep, and the chrome
      // animations reference them.
      if (/^@(font-face|keyframes|supports)/.test(prelude)) out.push(rule);
    } else if (isChromeSelector(prelude)) {
      out.push(rule);
    }
  }
  return out.join('\n');
}

export function chromeStylesheet() {
  const blocks = [
    ...[...sources.pt.matchAll(/<style>([\s\S]*?)<\/style>/g)].map((m) => m[1]),
    ...[...sources.en.matchAll(/<style>([\s\S]*?)<\/style>/g)].map((m) => m[1]),
  ];
  const body = blocks.map(filterChromeCss).filter(Boolean).join('\n');
  return `/* Generated by scripts/unify-chrome.mjs from public/index.html + public/en/index.html — do not edit by hand.
   Chrome only: top bar, navigation, language switcher, footer, cookie notice.
   Nothing in this file targets page body content. */
${body}
.lang-unavailable { opacity: 0.55; }

/* Mega-nav on inner pages: keep the logo in the flex row, not absolutely centred. */
.site-nav:has(.nav-links-left) {
  justify-content: space-between;
}
.site-nav:has(.nav-links-left) .nav-logo {
  position: static;
  left: auto;
  transform: none;
}
`;
}
