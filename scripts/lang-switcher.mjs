#!/usr/bin/env node
/**
 * Block 7.1 — the language selector.
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
 * August 2026: French and German were promoted to full site languages, which
 * reverses the narrower rule this pass used to apply. All five languages are
 * now offered on every selector, in the order PT | EN | NL | FR | DE, whether
 * or not a counterpart exists — a French visitor whom the edge router drops on
 * /fr/ previously had no way back out of it. Where there is no counterpart the
 * link still goes to that language's home or archive and is still marked
 * .lang-unavailable, so the selector never promises more than it has.
 *
 * Pages with no selector at all are left alone. /seguros-empresas-lagos/ and
 * /en/expat-insurance-lagos-portugal/ carry their own nav design with no
 * .lang-switcher styling, and adding one would mean injecting CSS into pages
 * whose design is out of scope for this work. Their hreflang tags still declare
 * the pairs. /de/, /fr/ and /nl/ now carry the switcher — their homepages were
 * given the .lang-switcher rules as part of the same promotion.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { globSync, existsSync } from 'node:fs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = join(ROOT, 'public');

const PAGE_CLUSTERS = [
  { pt: '/', en: '/en/', de: '/de/', fr: '/fr/', nl: '/nl/' },
  { pt: '/blog/', en: '/en/blog/' },
  { pt: '/seguros/tvde/', en: '/en/insurance/tvde/' },
  { pt: '/seguros/condominios/', en: '/en/condominium-insurance-algarve/' },
  { pt: '/seguros-empresas-lagos/', en: '/en/expat-insurance-lagos-portugal/', nl: '/nl/verzekeringen-portugal/' },
  { pt: '/seguros/habitacao/', en: '/en/home-insurance-quote/', nl: '/nl/woonverzekering-portugal/' },
  { pt: '/seguros/alojamento-local/', nl: '/nl/alojamento-local-verzekering-portugal/' },
  { pt: '/politica-de-privacidade/', en: '/en/privacy-policy/' },
  { pt: '/termos-e-condicoes/', en: '/en/terms-and-conditions/' },
];

/**
 * Where a language sends a visitor when this page has no counterpart in it.
 * Portuguese and English have an article archive to land in; Dutch, German and
 * French have a single page each, so their fallback is that page.
 */
const FALLBACK = {
  pt: (isBlog) => (isBlog ? '/blog/' : '/'),
  en: (isBlog) => (isBlog ? '/en/blog/' : '/en/'),
  de: () => '/de/',
  fr: () => '/fr/',
  nl: () => '/nl/',
};

const LABEL = { pt: 'PT', en: 'EN', de: 'DE', fr: 'FR', nl: 'NL' };

// --- pair map -----------------------------------------------------------------
const data = JSON.parse(await readFile(join(ROOT, 'data', 'articles.json'), 'utf8'));
const cluster = new Map(); // path -> { pt, en, de, fr, nl }

const byUrl = new Map();
for (const lang of ['pt', 'en']) for (const a of data.articles[lang]) byUrl.set(a.url, { ...a, lang });

for (const lang of ['pt', 'en']) {
  for (const a of data.articles[lang]) {
    if (a.status !== 'published' || !a.translationOf) continue;
    const otherUrl = lang === 'pt' ? `/en/blog/${a.translationOf}/` : `/blog/${a.translationOf}/`;
    const other = byUrl.get(otherUrl);
    if (other?.status !== 'published' || other.translationOf !== a.slug) continue;
    if (!existsSync(join(PUBLIC, otherUrl, 'index.html'))) continue;
    cluster.set(a.url, lang === 'pt' ? { pt: a.url, en: otherUrl } : { pt: otherUrl, en: a.url });
  }
}
for (const c of PAGE_CLUSTERS) {
  for (const path of Object.values(c)) cluster.set(path, c);
}

/**
 * The Dutch cluster, from data/articles.json.
 *
 * Each Dutch page names the counterparts that were confirmed for it, and the
 * Dutch link is added to those pages only — never to their siblings. The
 * English article on health insurance for expatriates gains a Dutch link; its
 * Portuguese twin, which nobody has called the same page as the Dutch one, is
 * left pointing at the Dutch home. Spread rather than mutate: cluster entries
 * from PAGE_CLUSTERS are shared between the members of a cluster, so writing to
 * one in place would leak the Dutch link into all of them.
 */
for (const a of data.articles.nl || []) {
  if (a.status !== 'published' || !existsSync(join(PUBLIC, a.url, 'index.html'))) continue;
  for (const target of Object.values(a.alternates || {})) {
    cluster.set(target, { ...(cluster.get(target) || {}), nl: a.url });
  }
  cluster.set(a.url, { ...(a.alternates || {}), nl: a.url });
}

const langOf = (path) => {
  const m = path.match(/^\/(en|de|fr|nl)\//);
  return m ? m[1] : 'pt';
};

// --- rewrite ------------------------------------------------------------------
const SWITCHER = /(<div class="lang-switcher">)([\s\S]*?)(<\/div>)/;
const MOBILE_SWITCHER = /(<div class="mobile-lang-switcher">)([\s\S]*?)(<\/div>)/;
const files = globSync('**/*.html', { cwd: PUBLIC }).sort();
const report = { rewritten: [], unchanged: 0, noSwitcher: [], selfLinkFixed: 0, deadEndFixed: 0, mobileRewritten: 0 };

for (const rel of files) {
  const path = '/' + rel.replace(/index\.html$/, '');
  const file = join(PUBLIC, rel);
  let html = await readFile(file, 'utf8');
  const match = html.match(SWITCHER);
  if (!match) {
    report.noSwitcher.push(path);
    continue;
  }

  const before = match[0];
  const lang = langOf(path);
  const pair = cluster.get(path) || {};
  const isBlog = path.startsWith('/blog/') || path.startsWith('/en/blog/');

  // All five languages are offered on every selector now that French and
  // German are full site languages (see the file header). The order is fixed —
  // PT | EN | NL | FR | DE — so the control reads the same on every page.
  const order = ['pt', 'en', 'nl', 'fr', 'de'];
  const targets = order.map((l) => {
    if (l === lang) return { l, href: path, active: true };
    const href = pair[l] || FALLBACK[l](isBlog);
    // A language with no counterpart still gets a link — to its own home or
    // archive — but it is marked, because offering it unmarked is a promise the
    // other language cannot keep. This is the convention the corpus already
    // uses; the class is styled in the shared chrome.
    return href ? { l, href, active: false, unavailable: !pair[l] } : null;
  }).filter(Boolean);

  // If the page's own language somehow isn't in the list, the selector would
  // lose its "you are here" marker. Never observed, but cheap to guard.
  if (!targets.some((t) => t.active)) targets.unshift({ l: lang, href: path, active: true });

  // One list of anchors, rendered twice: the desktop selector separates its
  // items with a pipe, the mobile drawer does not. Both were drifting apart
  // before — the drawer kept whatever the page was built with, so pages could
  // offer three languages on a phone and five on a laptop.
  const anchor = (t, indent) => {
    const attrs = [`href="${t.href}"`];
    if (t.active) attrs.push('class="active"');
    else if (t.unavailable) attrs.push('class="lang-unavailable"');
    if (t.l !== 'pt' && t.l !== 'en') attrs.push(`lang="${t.l}"`);
    return `${indent}<a ${attrs.join(' ')}>${LABEL[t.l]}</a>`;
  };

  const render = (m, sep) => {
    const indent = (m[2].match(/\n([ \t]+)</) || [, '      '])[1];
    const joiner = sep ? `\n${indent}<span class="lang-switcher-sep">|</span>\n` : '\n';
    return `${m[1]}\n${targets.map((t) => anchor(t, indent)).join(joiner)}\n${indent.slice(0, -2)}${m[3]}`;
  };

  const after = render(match, true);
  const mobileMatch = html.match(MOBILE_SWITCHER);
  const mobileAfter = mobileMatch ? render(mobileMatch, false) : null;
  const mobileChanged = mobileMatch && mobileAfter !== mobileMatch[0];

  if (after === before && !mobileChanged) {
    report.unchanged += 1;
    continue;
  }

  // Counted for the report: a selector that pointed "stay here" somewhere else,
  // and a selector that offered only the language you were already reading.
  if (/<a href="(?!\/?$)[^"]*" class="active">/.test(before) === false && /class="active"/.test(before)) {
    report.selfLinkFixed += 1;
  }
  if ((before.match(/<a /g) || []).length < 2) report.deadEndFixed += 1;

  if (after !== before) html = html.replace(SWITCHER, after.replace(/\$/g, '$$$$'));
  if (mobileChanged) {
    html = html.replace(MOBILE_SWITCHER, mobileAfter.replace(/\$/g, '$$$$'));
    report.mobileRewritten += 1;
  }
  await writeFile(file, html);
  report.rewritten.push(path);
}

console.log(`selectors rewritten:       ${report.rewritten.length}`);
console.log(`  mobile drawers rewritten: ${report.mobileRewritten}`);
console.log(`selectors already correct: ${report.unchanged}`);
console.log(`  of the rewritten, dead ends (only one language offered): ${report.deadEndFixed}`);
console.log(`pages with no selector:    ${report.noSwitcher.length}`);
const orphanPairs = report.noSwitcher.filter((p) => cluster.has(p));
console.log(`  of those, pages that do have a counterpart (${orphanPairs.length}):`);
orphanPairs.forEach((p) => console.log(`    ${p}`));
