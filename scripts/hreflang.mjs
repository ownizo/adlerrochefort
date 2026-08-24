#!/usr/bin/env node
/**
 * Block 7.1 / 7.2 — hreflang, canonicals and the language switcher.
 *
 * PT and EN are two audiences, not two renderings of one site. Most articles
 * exist in one language only, and that is the intended state. So the rule this
 * script enforces is narrow: a page declares hreflang only when a real
 * counterpart exists on disk, the declaration is reciprocal on both sides, and
 * a page with no counterpart declares nothing at all beyond its own canonical.
 *
 * What the corpus actually had before this ran:
 *
 *   * x-default on 186 pages, almost all of them articles pointing at
 *     themselves — which tells a crawler "this is the fallback for every
 *     unmatched language", 186 times over;
 *   * self-only hreflang on monolingual articles, a declaration that carries no
 *     information and invites a crawler to look for the pair that isn't there;
 *   * 22 duplicated en-GB lines across 11 Portuguese articles;
 *   * a homepage cluster where /de/, /fr/ and /nl/ each declared all five
 *     languages while / and /en/ declared only each other — unilateral, so the
 *     three smaller languages were making a claim the two big ones denied.
 *
 * The pairs themselves are read from data/articles.json (translationOf) for
 * articles and from PAGE_CLUSTERS for everything else. Nothing is inferred from
 * slugs, and no pairing is invented: PAGE_CLUSTERS records what the markup
 * already declared, plus the two corrections named above.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { globSync, existsSync } from 'node:fs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = join(ROOT, 'public');
const SITE = 'https://adlerrochefort.com';

/**
 * Cross-language clusters for pages that are not blog articles.
 *
 * Every entry here was already declared somewhere in the markup, with two
 * exceptions, both fixes rather than new pairings:
 *   * the homepage cluster is completed in both directions — / and /en/ now
 *     declare de, fr and nl, which those three were already declaring back;
 *   * /blog/ and /en/blog/ are paired. They are the same page in two
 *     languages, and the only reason they weren't paired is that the pairing
 *     was never written down.
 *
 * The two Dutch landings joined later: the home-insurance trio records the
 * pt/en pair the markup already had plus the Dutch page that now mirrors it,
 * and the Alojamento Local pair is declared by the Dutch page itself.
 */
const PAGE_CLUSTERS = [
  { '/': 'pt-PT', '/en/': 'en-GB', '/de/': 'de', '/fr/': 'fr', '/nl/': 'nl', xDefault: '/' },
  { '/blog/': 'pt-PT', '/en/blog/': 'en-GB' },
  { '/seguros/tvde/': 'pt-PT', '/en/insurance/tvde/': 'en-GB' },
  { '/seguros/condominios/': 'pt-PT', '/en/condominium-insurance-algarve/': 'en-GB' },
  {
    '/seguros-empresas-lagos/': 'pt-PT',
    '/en/expat-insurance-lagos-portugal/': 'en-GB',
    '/nl/verzekeringen-portugal/': 'nl',
  },
  {
    '/seguros/habitacao/': 'pt-PT',
    '/en/home-insurance-quote/': 'en-GB',
    '/nl/woonverzekering-portugal/': 'nl',
  },
  { '/seguros/alojamento-local/': 'pt-PT', '/nl/alojamento-local-verzekering-portugal/': 'nl' },
  // Motor. Both pages are the commercial car-insurance quote page for Portugal,
  // one in Portuguese and one in English; the English side did not exist when
  // this list was written.
  { '/seguros/auto/': 'pt-PT', '/en/car-insurance-portugal/': 'en-GB' },
  { '/politica-de-privacidade/': 'pt-PT', '/en/privacy-policy/': 'en-GB' },
  { '/termos-e-condicoes/': 'pt-PT', '/en/terms-and-conditions/': 'en-GB' },
];

/**
 * x-default belongs on the homepage and the services hub and nowhere else. It
 * names the page to serve when no declared language matches the visitor, and
 * that is a question about the site's entry points, not about an article on
 * mandatory hotel cover.
 */
const X_DEFAULT = new Map([
  ['/', '/'],
  ['/en/', '/'],
  ['/de/', '/'],
  ['/fr/', '/'],
  ['/nl/', '/'],
  ['/seguros/', '/seguros/'],
]);

/** Pages that exist to be downloaded or copied from, not found in search. */
const NOINDEX = new Set(['/descarregar/', '/email-signature.html']);

// --- build the pair map -------------------------------------------------------
const data = JSON.parse(await readFile(join(ROOT, 'data', 'articles.json'), 'utf8'));
const alternates = new Map(); // path -> [{ lang, path }]
const report = {
  pairs: [],
  monolingual: { pt: [], en: [] },
  unilateral: [],
  brokenTargets: [],
  changed: [],
};

const onDisk = (p) => existsSync(join(PUBLIC, p, 'index.html')) || existsSync(join(PUBLIC, p));

const byUrl = new Map();
for (const lang of ['pt', 'en']) for (const a of data.articles[lang]) byUrl.set(a.url, { ...a, lang });

for (const lang of ['pt', 'en']) {
  for (const a of data.articles[lang]) {
    if (a.status !== 'published') continue;
    if (!a.translationOf) {
      report.monolingual[lang].push(a.url);
      continue;
    }
    const otherUrl = lang === 'pt' ? `/en/blog/${a.translationOf}/` : `/blog/${a.translationOf}/`;
    const other = byUrl.get(otherUrl);

    // A pair needs four things to be true: the counterpart is in the data, it
    // is published, it points back, and the file is actually on disk. Anything
    // less and the declaration would be a promise the site cannot keep.
    const reciprocal = other?.translationOf === a.slug;
    if (!other || other.status !== 'published' || !reciprocal || !onDisk(otherUrl)) {
      report.unilateral.push({
        url: a.url,
        declares: otherUrl,
        reason: !other
          ? 'counterpart not in the data source'
          : other.status !== 'published'
            ? `counterpart status is "${other.status}"`
            : !reciprocal
              ? 'counterpart does not point back'
              : 'counterpart file missing on disk',
      });
      report.monolingual[lang].push(a.url);
      continue;
    }
    alternates.set(a.url, [
      { lang: lang === 'pt' ? 'pt-PT' : 'en-GB', path: a.url },
      { lang: lang === 'pt' ? 'en-GB' : 'pt-PT', path: otherUrl },
    ]);
    if (lang === 'pt') report.pairs.push({ pt: a.url, en: otherUrl });
  }
}

for (const cluster of PAGE_CLUSTERS) {
  const members = Object.entries(cluster).filter(([k]) => k !== 'xDefault');
  const live = members.filter(([path]) => onDisk(path));
  for (const [path] of members) {
    if (!onDisk(path)) report.brokenTargets.push({ cluster: members[0][0], missing: path });
  }
  if (live.length < 2) continue;
  for (const [path] of live) {
    alternates.set(
      path,
      live.map(([p, lang]) => ({ lang, path: p }))
    );
  }
}

/**
 * The Dutch cluster.
 *
 * Its pages are generated from scripts/nl-cluster.data.mjs and registered in
 * data/articles.json with an `alternates` field, because a Dutch page's
 * counterpart can be Portuguese or English and never shares its slug — which
 * is all `translationOf` can express.
 *
 * Each equivalent was confirmed page by page, so the reciprocal declaration is
 * added to that one target and nowhere else. In particular the target keeps its
 * own pt/en pair untouched: /en/blog/health-insurance-expats-portugal/ gains a
 * Dutch alternate, while its Portuguese twin, which nobody has claimed is the
 * same page as the Dutch one, is left alone.
 */
for (const a of data.articles.nl || []) {
  if (a.status !== 'published' || !onDisk(a.url)) continue;
  const own = [];
  for (const [key, target] of Object.entries(a.alternates || {})) {
    const lang = key === 'pt' ? 'pt-PT' : 'en-GB';
    if (!onDisk(target)) {
      report.brokenTargets.push({ from: a.url, target });
      continue;
    }
    own.push({ lang, path: target });
    const declared = alternates.get(target) || [{ lang, path: target }];
    if (!declared.some((x) => x.lang === 'nl')) {
      alternates.set(target, [...declared, { lang: 'nl', path: a.url }]);
    }
  }
  if (!own.length) continue;
  own.push({ lang: 'nl', path: a.url });
  alternates.set(a.url, own);
}

// --- rewrite ------------------------------------------------------------------
const HREFLANG_TAG = /[ \t]*<link\b[^>]*\bhreflang="[^"]*"[^>]*>\n?/g;
const CANONICAL_TAG = /[ \t]*<link\b[^>]*\brel="canonical"[^>]*>\n?/g;

const files = globSync('**/*.html', { cwd: PUBLIC }).sort();
let scanned = 0;

for (const rel of files) {
  const path = '/' + rel.replace(/index\.html$/, '');
  const self = SITE + path;
  const file = join(PUBLIC, rel);
  let html = await readFile(file, 'utf8');
  const before = html;
  scanned += 1;

  // Whether the head is pretty-printed or minified decides only how the block
  // is spaced; the minified English articles have no newlines to anchor on.
  const pretty = /\n[ \t]*<(?:link|meta|title)\b/.test(html);
  const nl = pretty ? '\n' : '';
  const pad = pretty ? '  ' : '';

  const lines = [`<link rel="canonical" href="${self}">`];
  for (const alt of alternates.get(path) || []) {
    lines.push(`<link rel="alternate" hreflang="${alt.lang}" href="${SITE}${alt.path}">`);
  }
  if (X_DEFAULT.has(path)) {
    // A lone x-default is a fallback with nothing to fall back from. The
    // services hub has no counterpart in another language, so it declares
    // itself as well, which is what makes the x-default meaningful.
    if (!alternates.has(path)) {
      const lang = path.startsWith('/en/') ? 'en-GB' : 'pt-PT';
      lines.push(`<link rel="alternate" hreflang="${lang}" href="${self}">`);
    }
    lines.push(`<link rel="alternate" hreflang="x-default" href="${SITE}${X_DEFAULT.get(path)}">`);
  }
  const block = lines.map((l, i) => (i ? pad + l : l)).join(nl);

  html = html.replace(HREFLANG_TAG, '');
  let replaced = false;
  html = html.replace(CANONICAL_TAG, (m) => {
    if (replaced) return '';
    replaced = true;
    const indent = m.match(/^[ \t]*/)[0];
    return indent + block + (m.endsWith('\n') ? '\n' : '');
  });
  if (!replaced) {
    // No canonical at all — the two email-signature utilities, which are also
    // the only two pages in the corpus with no description meta. Anchor on the
    // title, which every page has.
    html = html.replace(/([ \t]*)(<title>[\s\S]*?<\/title>)/, (m, indent, tag) =>
      `${indent}${tag}${nl || ' '}${pretty ? indent : ''}${block}`
    );
  }

  if (NOINDEX.has(path) && !/<meta name="robots"/.test(html)) {
    html = html.replace(
      /([ \t]*)(<link rel="canonical")/,
      (m, indent, tag) => `${indent}<meta name="robots" content="noindex, follow">${nl || ' '}${indent}${tag}`
    );
  }

  if (html !== before) {
    await writeFile(file, html);
    report.changed.push(rel);
  }
}

// --- verify every declared target resolves ------------------------------------
for (const [path, alts] of alternates) {
  for (const alt of alts) {
    if (!onDisk(alt.path)) report.brokenTargets.push({ from: path, target: alt.path });
  }
}

await writeFile(
  join(ROOT, 'data', 'hreflang-report.json'),
  JSON.stringify(
    {
      generated: 'run scripts/hreflang.mjs to refresh',
      totals: {
        htmlFiles: scanned,
        filesChanged: report.changed.length,
        pagesWithHreflang: alternates.size,
        articlePairs: report.pairs.length,
        monolingualPt: report.monolingual.pt.length,
        monolingualEn: report.monolingual.en.length,
        unilateralDeclarations: report.unilateral.length,
        brokenHreflangTargets: report.brokenTargets.length,
        xDefaultPages: X_DEFAULT.size,
      },
      note:
        'monolingualPt / monolingualEn are informative. PT and EN are separate ' +
        'audiences; an article existing in one language only is the intended ' +
        'state and is not a task.',
      articlePairs: report.pairs,
      monolingual: report.monolingual,
      unilateralDeclarations: report.unilateral,
      brokenHreflangTargets: report.brokenTargets,
    },
    null,
    2
  ) + '\n'
);

console.log(`html files scanned:       ${scanned}`);
console.log(`files changed:            ${report.changed.length}`);
console.log(`pages with hreflang:      ${alternates.size}`);
console.log(`PT<->EN article pairs:    ${report.pairs.length}`);
console.log(`monolingual PT articles:  ${report.monolingual.pt.length}  (informative)`);
console.log(`monolingual EN articles:  ${report.monolingual.en.length}  (informative)`);
console.log(`unilateral declarations:  ${report.unilateral.length}`);
report.unilateral.forEach((u) => console.log(`  ${u.url} -> ${u.declares}  (${u.reason})`));
console.log(`broken hreflang targets:  ${report.brokenTargets.length}`);
report.brokenTargets.forEach((b) => console.log(`  ${JSON.stringify(b)}`));
console.log(`x-default pages:          ${X_DEFAULT.size}`);
