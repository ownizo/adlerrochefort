#!/usr/bin/env node
/**
 * Phase A — replaces the hand-copied chrome on every page with the single
 * partial defined in scripts/lib/partials.mjs.
 *
 * Run it after editing the chrome on public/index.html, public/en/index.html
 * or public/nl/index.html. Those three pages are the source; every other page
 * is a consumer.
 *
 * What gets replaced on each page:
 *   - the ASF top bar
 *   - the footer, including the regulatory block, Livro de Reclamações and the
 *     ASF reporting channel
 *   - the cookie notice, inserted where a page had none
 *   - the language switcher inside an article's reading header, rebuilt so it
 *     never points at a translation that does not exist
 *
 * What is left alone:
 *   - page body content
 *   - the article reading header's shape (logo + back link), which stays
 *     compact by design but now comes from one definition
 *   - the homepage navigations, which are the source being copied
 */
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { execSync } from 'node:child_process';
import {
  ROOT,
  PUBLIC,
  CHROME,
  chromeStylesheet,
  articleNav,
  langSwitcher,
  siteNav,
  mobileDrawer,
} from './lib/partials.mjs';

// ---------------------------------------------------------------------------
// Commercial landing pages
//
// These carry the full site header rather than an article's compact one, and
// each had its own hand-written copy of it. The copies had drifted: the logo
// had moved to the end of the nav, where the absolutely-positioned rule that
// centres it pushed it off the right edge of a phone, and the language
// switcher had lost NL. Only the link sets genuinely differ between them, so
// the markup now comes from siteNav()/mobileDrawer() and the links live here.
//
// `switcher` lists the pages that really exist in each language. Neither quote
// page has a Portuguese or Dutch translation, so those entries fall back to
// the nearest real page in that language and render dimmed
// (`.lang-unavailable`) rather than pointing at a URL that would 404.
// ---------------------------------------------------------------------------

const LANDING_LINKS_EN = {
  left: [
    { href: '/en/#services', label: 'Services' },
    { href: '/en/#why-us', label: 'Why us' },
    { href: '/en/#adler-pro', label: 'Businesses' },
  ],
  right: [
    { href: '/en/#adler-one', label: 'Individuals' },
    { href: '/en/#blog', label: 'Insights' },
  ],
  cta: { href: '#quote-form', label: 'Free Quote' },
};

const LANDING = {
  'en/health-insurance-quote/index.html': {
    lang: 'en',
    home: '/en/',
    ...LANDING_LINKS_EN,
    targets: { en: '/en/health-insurance-quote/' },
  },
  'en/home-insurance-quote/index.html': {
    lang: 'en',
    home: '/en/',
    ...LANDING_LINKS_EN,
    targets: { en: '/en/home-insurance-quote/' },
  },
};

/** Nearest real page per language for pages that have no translation. */
const COMMERCIAL_FALLBACK = { pt: '/', en: '/en/', nl: '/nl/' };

const SOURCES = new Set([
  join(PUBLIC, 'index.html'),
  join(PUBLIC, 'en', 'index.html'),
  join(PUBLIC, 'nl', 'index.html'),
]);

// Pages with a chrome of their own that this pass must not flatten.
const SKIP = [/email-signature\.html$/, /\/descarregar\//, /\/de\//, /\/fr\//];

const data = JSON.parse(await readFile(join(ROOT, 'data', 'articles.json'), 'utf8'));
const bySlug = { pt: new Map(), en: new Map() };
for (const lang of ['pt', 'en']) {
  for (const a of data.articles[lang]) bySlug[lang].set(a.slug, a);
}
/** slug -> counterpart url, in both directions, only where both sides exist. */
const pair = new Map();
for (const a of data.articles.pt) {
  if (!a.translationOf) continue;
  const other = bySlug.en.get(a.translationOf);
  if (!other || other.status !== 'published' || a.status !== 'published') continue;
  pair.set(a.url, other.url);
  pair.set(other.url, a.url);
}

const langOf = (rel) => (rel.startsWith('en/') ? 'en' : rel.startsWith('nl/') ? 'nl' : 'pt');

function replaceRegion(html, startMarker, endMarker, replacement) {
  const s = html.indexOf(startMarker);
  if (s === -1) return { html, hit: false };
  const e = html.indexOf(endMarker, s);
  if (e === -1) return { html, hit: false };
  return { html: html.slice(0, s) + replacement + html.slice(e + endMarker.length), hit: true };
}

const files = execSync('find public -name "*.html"', { cwd: ROOT })
  .toString()
  .trim()
  .split('\n')
  .map((f) => join(ROOT, f))
  .filter((f) => !SOURCES.has(f) && !SKIP.some((re) => re.test(f)));

const stats = { topBar: 0, footer: 0, cookie: 0, nav: 0, landingNav: 0, landingDrawer: 0, css: 0, files: 0 };

for (const file of files) {
  const rel = relative(PUBLIC, file);
  const lang = langOf(rel);
  const chrome = CHROME[lang];
  let html = await readFile(file, 'utf8');
  const before = html;

  // --- top bar -------------------------------------------------------------
  // Some pages carry a campaign-specific top bar pointing at their own offer.
  // Those are page content, not chrome, so only the generic ASF wording is
  // normalised; a bar linking somewhere other than the contact anchor stays.
  const topMatch = html.match(/<div class="asf-top-bar">[\s\S]*?<\/div>/);
  if (chrome.topBar && topMatch && /#contacto|#contact|apólice atual|current policy/i.test(topMatch[0])) {
    html = html.replace(topMatch[0], chrome.topBar);
    stats.topBar++;
  }

  // --- article reading header ---------------------------------------------
  // Rebuild the switcher from the data source so it can never 404.
  const url = '/' + rel.replace(/index\.html$/, '');
  const navMatch = html.match(/<nav(?:\s[^>]*)?>[\s\S]*?<\/nav>/);
  if (navMatch && /class="nav-back"/.test(navMatch[0])) {
    const backMatch = navMatch[0].match(/class="nav-back">([\s\S]*?)<\/a>/);
    const hrefMatch = navMatch[0].match(/<a href="([^"]+)" class="nav-back"/);
    const targets = { [lang]: url };
    const counterpart = pair.get(url);
    if (counterpart) targets[counterpart.startsWith('/en/') ? 'en' : 'pt'] = counterpart;
    html = html.replace(
      navMatch[0],
      articleNav(lang, {
        switcher: langSwitcher(lang, targets),
        backHref: hrefMatch ? hrefMatch[1] : undefined,
        backLabel: backMatch ? backMatch[1].trim() : undefined,
      })
    );
    stats.nav++;
  }

  // --- landing page header -------------------------------------------------
  // The full site header, rebuilt from the shared partial so it keeps the
  // homepage's source order: left group, logo, right group, burger, drawer.
  const landing = LANDING[rel];
  if (landing) {
    const switcherOpts = { fallback: COMMERCIAL_FALLBACK };
    const nav = siteNav({
      lang: landing.lang,
      home: landing.home,
      left: landing.left,
      right: landing.right,
      cta: landing.cta,
      switcher: langSwitcher(landing.lang, landing.targets, switcherOpts),
    });
    const drawer = mobileDrawer({
      links: [...landing.left, ...landing.right, landing.cta],
      switcher: langSwitcher(landing.lang, landing.targets, { ...switcherOpts, mobile: true }),
    });
    const navMatch2 = html.match(/<nav(?:\s[^>]*)?>[\s\S]*?<\/nav>/);
    if (navMatch2) {
      html = html.replace(navMatch2[0], nav);
      stats.landingNav++;
    }
    const drawerStart = html.indexOf('<!-- MOBILE NAV -->');
    if (drawerStart !== -1) {
      const r = replaceRegion(html, '<!-- MOBILE NAV -->', '\n</div>', drawer);
      html = r.html;
      if (r.hit) stats.landingDrawer++;
    }
  }

  // --- footer --------------------------------------------------------------
  if (chrome.footer) {
    const r = replaceRegion(html, '<footer>', '</footer>', chrome.footer);
    html = r.html;
    if (r.hit) stats.footer++;
  }

  // --- cookie notice -------------------------------------------------------
  if (chrome.cookie) {
    if (html.includes('id="cookieBanner"')) {
      const r = replaceRegion(html, '<!-- COOKIE CONSENT BANNER -->', '\n</div>', chrome.cookie);
      html = r.html;
      if (r.hit) stats.cookie++;
    } else if (html.includes('</body>')) {
      // No notice at all — the whole of /blog/ was in this state.
      const handlers = `<script>
  (function () {
    var b = document.getElementById('cookieBanner');
    if (b && !localStorage.getItem('cookie_consent')) b.classList.add('show');
  })();
  function respondCookies(accepted) {
    localStorage.setItem('cookie_consent', accepted ? 'accepted' : 'rejected');
    document.getElementById('cookieBanner').classList.remove('show');
  }
</script>`;
      html = html.replace(/<\/body>/, `${chrome.cookie}\n${handlers}\n</body>`);
      stats.cookie++;
    }
  }

  // --- chrome stylesheet ---------------------------------------------------
  // Appended last in <head> so the shared chrome rules win over whatever copy
  // of them the page happened to carry inline. Generated pages already link
  // /css/ar-site.css, which is the homepage's full stylesheet and therefore
  // already contains every chrome rule — adding the subset on top of it would
  // be a second request for bytes the page has.
  if (
    !html.includes('/css/ar-chrome.css') &&
    !html.includes('/css/ar-site.css') &&
    html.includes('</head>')
  ) {
    html = html.replace(/<\/head>/, '<link rel="stylesheet" href="/css/ar-chrome.css">\n</head>');
    stats.css++;
  }

  if (html !== before) {
    await writeFile(file, html);
    stats.files++;
  }
}

await mkdir(join(PUBLIC, 'css'), { recursive: true });
const css = chromeStylesheet();
await writeFile(join(PUBLIC, 'css', 'ar-chrome.css'), css);

console.log(JSON.stringify({ ...stats, chromeCssBytes: css.length }, null, 2));

// ---------------------------------------------------------------------------
// Second pass — pages that carried no top bar or no footer at all.
//
// The ASF top bar is a regulatory disclosure and the footer holds the Livro de
// Reclamações and the ASF reporting channel, so neither is optional. 59 English
// articles and /alterarmediador/ had no top bar; the two Dutch sub-pages had no
// footer.
// ---------------------------------------------------------------------------
const filled = { topBar: 0, footer: 0 };
for (const file of files) {
  const rel = relative(PUBLIC, file);
  const lang = langOf(rel);
  const chrome = CHROME[lang];
  let html = await readFile(file, 'utf8');
  const before = html;

  if (chrome.topBar && !html.includes('class="asf-top-bar"') && /<body[^>]*>/.test(html)) {
    html = html.replace(/(<body[^>]*>)/, `$1\n\n${chrome.topBar}`);
    filled.topBar++;
  }
  if (chrome.footer && !html.includes('<footer>') && html.includes('</body>')) {
    html = html.replace(/<\/body>/, `${chrome.footer}\n</body>`);
    filled.footer++;
  }
  if (html !== before) await writeFile(file, html);
}
console.log('filled gaps:', JSON.stringify(filled));
