#!/usr/bin/env node
/**
 * The language selector — the canonical pass that writes it into every page.
 *
 * The selector was built as if every page had a counterpart in every language,
 * which is not how this site works. Three failure shapes were in the corpus:
 *
 *   * on 97 English articles with no Portuguese counterpart, the selector
 *     rendered a single "EN" and nothing else — a control that offers no
 *     choice;
 *   * on 49 Portuguese pages the PT link pointed at the homepage rather than at
 *     the page the visitor was already reading, so "stay in Portuguese" meant
 *     "lose your place";
 *   * on 30 Portuguese pages the NL link pointed at the Lagos business page
 *     regardless of subject, so a Dutch reader on an article about health
 *     insurance was sent to a page about commercial cover in Lagos.
 *
 * None of these 404, and the link audit confirms that. They are still wrong:
 * a language selector is a promise that the other language has something for
 * you, and the honest version of that promise, when no counterpart exists, is
 * the blog index or the homepage in that language.
 *
 * Pairs come from the same source as the hreflang tags, so the two can never
 * disagree.
 *
 * September 2026 — nine languages, and a control that can hold them.
 * Polish (/pl/), Swedish (/se/) and Danish (/dk/) joined PT, EN, NL, FR and DE,
 * and Simplified Chinese (/zh/) followed.
 * Five items on one row was already tight on a 375px viewport; nine two-letter
 * codes in a row would either wrap the header or shrink past tapping size, and
 * "PL | SE | DK" tells a Warsaw visitor nothing they recognise. The row was
 * therefore replaced by a disclosure button — [globe] Polski [chevron] — whose
 * menu lists all nine languages under their own names. The markup comes from
 * scripts/lib/lang-selector.mjs, which scripts/lib/market-cluster.mjs also
 * renders from, so a generated market page is already correct before this pass
 * runs and this pass is a no-op on it.
 *
 * Note what is deliberately preserved: the `<div class="lang-switcher">` and
 * `<div class="mobile-lang-switcher">` wrappers. 347 pages carry the first and
 * 92 the second, 192 of them with their own inline copy of the switcher CSS,
 * and public/js/lang-pref.js delegates its nf_lang cookie writes off
 * `.lang-switcher a`. Renaming the wrapper would have meant touching all of
 * that; only the inside is new. /css/ar-langsel.css is specific enough (0,2,1)
 * to win against the inline `.lang-switcher a` rules without !important, so the
 * old declarations can stay where they are and simply lose.
 *
 * Both assets are injected here rather than left to each page's generator,
 * because the pages that carry a switcher were built by a dozen different
 * scripts and this is the one pass that visits all of them. Injection is
 * idempotent: a page that already links them is left alone.
 *
 * Pages with no selector at all are left alone. /seguros-empresas-lagos/ and
 * /en/expat-insurance-lagos-portugal/ carry their own nav design with no
 * .lang-switcher styling, and adding one would mean injecting CSS into pages
 * whose design is out of scope for this work. Their hreflang tags still declare
 * the pairs. The Spain cluster's `class="lang-switcher market-switch"` is a
 * market toggle (Portugal | España), not a language control, and is skipped by
 * the exact-attribute match below, which is the behaviour that file relies on.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { globSync } from 'node:fs';
import {
  LANGSEL_CSS_LINK,
  LANGSEL_SCRIPT_TAG,
  LANGSEL_STYLESHEET,
  LANGSEL_SCRIPT,
  langSelectorHtml,
  selectorTargets,
} from './lib/lang-selector.mjs';
import { marketPairs } from './lib/market-hreflang.mjs';
import { buildPairMap } from './lib/lang-pairs.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = join(ROOT, 'public');

// --- pair map -----------------------------------------------------------------
// Shared with scripts/unify-chrome.mjs, which rebuilds the same control on the
// reading header and the two commercial landing pages — see the note at the top
// of scripts/lib/lang-pairs.mjs for why one record rather than two.
const cluster = await buildPairMap();

/**
 * Where a language sends a visitor when this page has no counterpart in it.
 * Portuguese and English have an article archive to land in; the seven localised
 * markets have their own home page, which the selector labels as such so the
 * row never implies a translation that was not written.
 */
const FALLBACK = {
  pt: (isBlog) => (isBlog ? '/blog/' : '/'),
  en: (isBlog) => (isBlog ? '/en/blog/' : '/en/'),
  de: () => '/de/',
  fr: () => '/fr/',
  nl: () => '/nl/',
  pl: () => '/pl/',
  se: () => '/se/',
  dk: () => '/dk/',
  zh: () => '/zh/',
};

/**
 * The page's own language, as a URL-segment key.
 *
 * /se/ and /dk/ are market segments, not language codes: those pages declare
 * lang="sv" and lang="da". The key used here and in lang-selector.mjs is the
 * segment, and the module maps it to the language code — see the note at the
 * top of scripts/lib/lang-selector.mjs. /zh/ is the one segment that is also
 * the language subtag, but it still has to be listed here: leave it out and
 * the Chinese pages are read as Portuguese and offer themselves as the PT row.
 */
const langOf = (path) => {
  const m = path.match(/^\/(en|de|fr|nl|pl|se|dk|zh)\//);
  return m ? m[1] : 'pt';
};

// --- switcher location --------------------------------------------------------
/**
 * Find a switcher wrapper and its matching close tag.
 *
 * The lazy `[\s\S]*?` regex this used to be was safe while the selector's
 * contents were flat anchors; the disclosure control nests two divs deep, so a
 * lazy match now stops at the first inner `</div>` and shreds the markup. Count
 * depth instead. `class="lang-switcher"` is matched exactly, which is what
 * keeps the Spain cluster's `class="lang-switcher market-switch"` out.
 */
function findSwitcher(html, className) {
  const open = `<div class="${className}">`;
  const start = html.indexOf(open);
  if (start === -1) return null;
  const innerStart = start + open.length;
  const tags = /<(\/?)div\b[^>]*>/g;
  tags.lastIndex = innerStart;
  let depth = 1;
  let t;
  while ((t = tags.exec(html))) {
    depth += t[1] ? -1 : 1;
    if (depth === 0) {
      const lineStart = html.lastIndexOf('\n', start) + 1;
      return {
        start,
        end: t.index + t[0].length,
        inner: html.slice(innerStart, t.index),
        // Indentation of the wrapper's own line, so the close tag is put back
        // where the page already had it and this pass stays a no-op on pages
        // whose generator indents differently from the corpus norm.
        wrapperIndent: /^[ \t]*$/.test(html.slice(lineStart, start)) ? html.slice(lineStart, start) : '    ',
        open,
      };
    }
  }
  return null;
}

// --- rewrite ------------------------------------------------------------------
const files = globSync('**/*.html', { cwd: PUBLIC }).sort();
const report = {
  rewritten: [],
  unchanged: 0,
  noSwitcher: [],
  mobileRewritten: 0,
  cssInjected: 0,
  scriptInjected: 0,
};

for (const rel of files) {
  const path = '/' + rel.replace(/index\.html$/, '');
  const file = join(PUBLIC, rel);
  let html = await readFile(file, 'utf8');
  const desktop = findSwitcher(html, 'lang-switcher');
  if (!desktop) {
    report.noSwitcher.push(path);
    continue;
  }

  const lang = langOf(path);
  const isBlog = path.startsWith('/blog/') || path.startsWith('/en/blog/');

  // Two sources of pairs, and the market one wins where both speak. The
  // articles/PAGE_CLUSTERS map knows the PT|EN|NL|FR|DE corpus; market-hreflang
  // knows the Polish, Swedish and Danish clusters and the eight-way homepage
  // set. They agree on the homepages by construction (market-hreflang's
  // EXISTING_HOME_CLUSTER is the same five paths listed above).
  const pairs = { ...(cluster.get(path) || {}), ...(marketPairs(path) || {}) };
  delete pairs[lang];

  const fallbacks = Object.fromEntries(
    Object.entries(FALLBACK).map(([key, fn]) => [key, fn(isBlog)])
  );
  const targets = selectorTargets({ pageLang: lang, pageUrl: path, pairs, fallbacks });

  const render = (found, mobile) => {
    // Keep whatever indentation the page indents switcher contents by, so a
    // rerun rewrites meaning and never whitespace.
    const indent = (found.inner.match(/\n([ \t]+)</) || [, `${found.wrapperIndent}  `])[1];
    const body = langSelectorHtml({ pageLang: lang, targets, mobile, indent });
    return `${found.open}\n${body}\n${found.wrapperIndent}</div>`;
  };

  const desktopAfter = render(desktop, false);
  const desktopChanged = desktopAfter !== html.slice(desktop.start, desktop.end);
  if (desktopChanged) {
    html = html.slice(0, desktop.start) + desktopAfter + html.slice(desktop.end);
  }

  const mobile = findSwitcher(html, 'mobile-lang-switcher');
  let mobileChanged = false;
  if (mobile) {
    const mobileAfter = render(mobile, true);
    mobileChanged = mobileAfter !== html.slice(mobile.start, mobile.end);
    if (mobileChanged) {
      html = html.slice(0, mobile.start) + mobileAfter + html.slice(mobile.end);
      report.mobileRewritten += 1;
    }
  }

  // The control is markup plus 2 KB of CSS and 2 KB of JS, and a page that has
  // the first and not the other two renders a button that does nothing. Both
  // are appended last in <head> / before </body> so they win over, and run
  // after, whatever the page already carries.
  let assetsAdded = false;
  if (!html.includes(LANGSEL_STYLESHEET) && html.includes('</head>')) {
    html = html.replace('</head>', `${LANGSEL_CSS_LINK}\n</head>`);
    report.cssInjected += 1;
    assetsAdded = true;
  }
  if (!html.includes(LANGSEL_SCRIPT) && html.includes('</body>')) {
    html = html.replace(/(\s*)<\/body>/, `$1${LANGSEL_SCRIPT_TAG}$1</body>`);
    report.scriptInjected += 1;
    assetsAdded = true;
  }

  if (!desktopChanged && !mobileChanged && !assetsAdded) {
    report.unchanged += 1;
    continue;
  }

  await writeFile(file, html);
  report.rewritten.push(path);
}

console.log(`pages updated:             ${report.rewritten.length}`);
console.log(`  mobile drawers rewritten: ${report.mobileRewritten}`);
console.log(`  stylesheet injected:      ${report.cssInjected}`);
console.log(`  script injected:          ${report.scriptInjected}`);
console.log(`pages already correct:     ${report.unchanged}`);
console.log(`pages with no selector:    ${report.noSwitcher.length}`);
const orphanPairs = report.noSwitcher.filter((p) => cluster.has(p) || marketPairs(p));
console.log(`  of those, pages that do have a counterpart (${orphanPairs.length}):`);
orphanPairs.forEach((p) => console.log(`    ${p}`));
