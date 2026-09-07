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
 *
 * --dry-run: computes and reports every change exactly as a real run would,
 * including the regenerated public/css/ar-chrome.css, but writes nothing to
 * disk. Prints the same stats block a real run does, plus the full list of
 * files it would touch grouped by which region(s) changed on each. Use this
 * before every run that follows more than a trivial chrome edit — the diff
 * this script produces is one shot across every consumer page at once, so
 * it is worth seeing the full shape of it before committing to it.
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

const DRY_RUN = process.argv.includes('--dry-run');
const write = DRY_RUN ? async () => {} : writeFile;
if (DRY_RUN) console.error('--- DRY RUN: no files will be written ---');

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
const COMMERCIAL_FALLBACK = { pt: '/', en: '/en/', nl: '/nl/', fr: '/fr/', de: '/de/' };

const SOURCES = new Set([
  join(PUBLIC, 'index.html'),
  join(PUBLIC, 'en', 'index.html'),
  join(PUBLIC, 'nl', 'index.html'),
]);

// Pages with a chrome of their own that this pass must not flatten.
//
// /fr/ and /de/ became full site languages in August 2026. Each is a single
// hand-maintained homepage and, like the PT/EN/NL homepages in SOURCES, it is a
// source of chrome rather than a consumer of it — langOf() would otherwise
// treat both as Portuguese and overwrite their footers with the PT one.
//
// The Spain cluster (8 commercial pages + 20 blog/category pages) and
// /en/insurance-review/ carry their own footer, defined once in
// scripts/lib/spain-chrome.mjs specifically because it is NOT the Portugal
// footer: it shows both markets' product links side by side and has no
// Company/Languages columns, since these pages have no PT/NL/FR/DE
// translation to switch to. Sweeping them into this pass would replace that
// deliberately market-neutral footer with the fuller EN-homepage one — which
// also carries a PT/EN/NL/FR/DE language switcher that would be actively
// misleading on a page that only exists in English — for no gain, since
// these pages already link across both markets. Excluded on the same
// principle as /de/ and /fr/ above: a chrome of their own, not a gap to fill.
const SKIP = [
  /email-signature\.html$/,
  /\/descarregar\//,
  /\/de\//,
  /\/fr\//,
  /\/en\/insurance-review\//,
  /spain/,
];

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
// Per-file record of which regions changed, keyed by the path relative to
// public/ — this is what --dry-run (and the summary at the end of a real
// run) reports, so a change can be reviewed as "what kind of edit, on which
// files" rather than as one large diff.
const changes = new Map();
const mark = (file, region) => {
  const rel = relative(PUBLIC, file);
  if (!changes.has(rel)) changes.set(rel, []);
  changes.get(rel).push(region);
};

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
    if (topMatch[0] !== chrome.topBar) {
      html = html.replace(topMatch[0], chrome.topBar);
      mark(file, 'topBar');
    }
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
    const rebuiltNav = articleNav(lang, {
      switcher: langSwitcher(lang, targets),
      backHref: hrefMatch ? hrefMatch[1] : undefined,
      backLabel: backMatch ? backMatch[1].trim() : undefined,
    });
    if (navMatch[0] !== rebuiltNav) {
      html = html.replace(navMatch[0], rebuiltNav);
      mark(file, 'articleNav');
    }
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
      mark(file, 'landingNav');
    }
    const drawerStart = html.indexOf('<!-- MOBILE NAV -->');
    if (drawerStart !== -1) {
      const r = replaceRegion(html, '<!-- MOBILE NAV -->', '\n</div>', drawer);
      html = r.html;
      if (r.hit) {
        stats.landingDrawer++;
        mark(file, 'landingDrawer');
      }
    }
  }

  // --- footer --------------------------------------------------------------
  if (chrome.footer) {
    const beforeFooter = html;
    const r = replaceRegion(html, '<footer>', '</footer>', chrome.footer);
    html = r.html;
    if (r.hit) {
      if (html !== beforeFooter) mark(file, 'footer');
      stats.footer++;
    }
  }

  // --- cookie notice -------------------------------------------------------
  if (chrome.cookie) {
    if (html.includes('id="cookieBanner"')) {
      const beforeCookie = html;
      const r = replaceRegion(html, '<!-- COOKIE CONSENT BANNER -->', '\n</div>', chrome.cookie);
      html = r.html;
      if (r.hit) {
        if (html !== beforeCookie) mark(file, 'cookie');
        stats.cookie++;
      }
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
      mark(file, 'cookie-inserted');
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
    mark(file, 'css-link-added');
  }

  if (html !== before) {
    await write(file, html);
    stats.files++;
  }
}

await mkdir(join(PUBLIC, 'css'), { recursive: true });
const css = chromeStylesheet();
if (!DRY_RUN) await writeFile(join(PUBLIC, 'css', 'ar-chrome.css'), css);

console.log(JSON.stringify({ ...stats, chromeCssBytes: css.length, dryRun: DRY_RUN }, null, 2));

if (DRY_RUN) {
  const byRegion = new Map();
  for (const [rel, regions] of changes) {
    for (const region of regions) {
      if (!byRegion.has(region)) byRegion.set(region, []);
      byRegion.get(region).push(rel);
    }
  }
  console.log('\n--- files that would change, grouped by region ---');
  for (const [region, relFiles] of byRegion) {
    console.log(`\n${region} (${relFiles.length}):`);
    for (const f of relFiles) console.log(`  ${f}`);
  }
  console.log(`\nTotal distinct files that would change: ${changes.size}`);
}

// ---------------------------------------------------------------------------
// Second pass — pages that carried no top bar or no footer at all.
//
// The ASF top bar is a regulatory disclosure and the footer holds the Livro de
// Reclamações and the ASF reporting channel, so neither is optional. 59 English
// articles and /alterarmediador/ had no top bar; the two Dutch sub-pages had no
// footer.
// ---------------------------------------------------------------------------
const filled = { topBar: 0, footer: 0 };
const filledFiles = [];
for (const file of files) {
  const rel = relative(PUBLIC, file);
  const lang = langOf(rel);
  const chrome = CHROME[lang];
  let html = await readFile(file, 'utf8');
  const before = html;

  if (chrome.topBar && !html.includes('class="asf-top-bar"') && /<body[^>]*>/.test(html)) {
    html = html.replace(/(<body[^>]*>)/, `$1\n\n${chrome.topBar}`);
    filled.topBar++;
    filledFiles.push(`${rel} (topBar inserted)`);
  }
  if (chrome.footer && !html.includes('<footer>') && html.includes('</body>')) {
    html = html.replace(/<\/body>/, `${chrome.footer}\n</body>`);
    filled.footer++;
    filledFiles.push(`${rel} (footer inserted)`);
  }
  if (html !== before) await write(file, html);
}
console.log('filled gaps:', JSON.stringify({ ...filled, dryRun: DRY_RUN }));
if (DRY_RUN && filledFiles.length) {
  console.log('\n--- gap-fill would touch ---');
  for (const f of filledFiles) console.log(`  ${f}`);
}
