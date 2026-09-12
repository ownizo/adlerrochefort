#!/usr/bin/env node
/**
 * Detects generated output that has drifted from its own source, without
 * fixing anything. Five checks, two severities:
 *
 *   FAIL (non-zero exit — the mode that silently breaks a live page):
 *     1. A class referenced in a page's markup has no matching rule in the
 *        stylesheet(s) that page links (ar-site.css / ar-chrome.css only —
 *        the only two this repo can rebuild from source and diff against;
 *        see "Deliberately not covered" below). This is exactly the failure
 *        mode that broke 4 /seguros/* pages when .lp-form-note was dropped
 *        from ar-site.css without the 4 consumers being told.
 *     2. A blog index/category pagination count that no longer matches its
 *        published-article count — either a page that should exist doesn't,
 *        or one exists that shouldn't (content shrank).
 *
 *   WARN (reports, exit stays 0 — real drift, but nothing is broken yet):
 *     3. Chrome partials (topBar/footer/cookie/nav) stale relative to
 *        scripts/lib/partials.mjs, delegated to `unify-chrome.mjs --dry-run`
 *        rather than re-implemented — that script is the actual source of
 *        truth for "is a consumer page's chrome current", and duplicating
 *        its comparison logic here would just be a second thing to keep in
 *        sync with a third.
 *     4. public/css/ar-site.css or public/css/ar-chrome.css differing from
 *        what their own builder function would emit right now.
 *     5. public/{blog,en/blog}/feed.xml carrying a different "latest 30 by
 *        date" window than data/articles.json currently implies.
 *     6. data/hreflang-report.json's recorded totals (file count, article
 *        pairs) no longer matching the corpus as it stands.
 *
 * Deliberately NOT covered, on purpose rather than by oversight:
 *   - The Spain cluster's chrome (scripts/lib/spain-chrome.mjs) and the
 *     hand-authored blog-article template (the shape this branch's own new
 *     articles use) are each self-contained by design, with no single
 *     canonical source the way ar-site.css/ar-chrome.css/partials.mjs are.
 *     Checking them would mean inventing a "should these match each other"
 *     rule nobody asked for. A future, separate check could cover Spain's
 *     chrome specifically, mirroring check 3's shape against
 *     spain-chrome.mjs instead of partials.mjs.
 *   - public/css/ar-conversion.css, ar-landing.css, ar-nl.css and
 *     ar-property.css have no discovered "rebuild from source" function, so
 *     check 1 cannot diff a page's use of their classes against a source of
 *     truth. Pages that link only these are skipped by check 1 entirely
 *     rather than guessed at.
 *   - hreflang.mjs itself is not run: unlike unify-chrome.mjs, it has no
 *     --dry-run and writes corrected hreflang tags into page files as a
 *     side effect, so "running it to see what it would do" would not be
 *     read-only. Check 6 instead recomputes two cheap, independent proxy
 *     figures (total HTML file count, article-pair count from
 *     data/articles.json's translationOf field, using the same logic
 *     generate-sitemap.mjs already uses for pairing) and compares them
 *     against the report's own recorded totals. This does not verify every
 *     figure in the report, only whether the corpus has moved since it was
 *     produced — real drift shows up as a mismatch either way.
 *   - Editorial correctness (stale prices, wrong statutory citations, the
 *     six/seven-therapies class of error) — mechanical staleness only.
 *
 * Read-only: writes nothing, deletes nothing. The two stylesheet builders it
 * calls (buildSharedStylesheet, chromeStylesheet) are pure functions that
 * return a string; nothing on disk is touched to produce the comparison.
 *
 * Usage: node scripts/check-generator-freshness.mjs [--quiet]
 *   --quiet   suppress WARN detail, print only the summary line and any FAILs.
 * Exit code: 0 if no FAIL-level finding (WARNs do not affect it), 1 otherwise.
 */
import { readFile } from 'node:fs/promises';
import { globSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join } from 'node:path';
import { ROOT, PUBLIC, buildSharedStylesheet } from './lib/chrome.mjs';
import { chromeStylesheet } from './lib/partials.mjs';

const QUIET = process.argv.includes('--quiet');
const FAILS = [];
const WARNS = [];
const fail = (check, detail) => FAILS.push({ check, detail });
const warn = (check, detail) => WARNS.push({ check, detail });

const data = JSON.parse(await readFile(join(ROOT, 'data', 'articles.json'), 'utf8'));
const allHtmlFiles = globSync('**/index.html', { cwd: PUBLIC });
const rel = (f) => 'public/' + f;

// -----------------------------------------------------------------------
// Check 1 (FAIL): a class a page depends on would be DROPPED if the
// stylesheet it links were rebuilt right now.
//
// Deliberately not "every class used must have a rule somewhere" — most
// structural/grouping classes (landing.mjs's .field, for instance) carry no
// rule of their own by design; their appearance comes from a parent grid or
// from the elements inside them. Checking for that would be almost entirely
// false positives. What actually broke the 4 /seguros/* pages was narrower
// and mechanical: a class the CURRENT COMMITTED stylesheet still defines,
// that a fresh rebuild would remove, that some page still uses. That's a
// three-way comparison (committed vs. rebuilt vs. markup), not a two-way one.
// -----------------------------------------------------------------------
{
  const REBUILDABLE = {
    'ar-site.css': { relPath: 'public/css/ar-site.css', fresh: buildSharedStylesheet() },
    'ar-chrome.css': { relPath: 'public/css/ar-chrome.css', fresh: chromeStylesheet() },
  };
  const classesIn = (css) => new Set([...css.matchAll(/\.(-?[a-zA-Z_][a-zA-Z0-9_-]*)/g)].map((m) => m[1]));

  const DROPPED = {};
  for (const [name, { relPath, fresh }] of Object.entries(REBUILDABLE)) {
    const committed = await readFile(join(ROOT, relPath), 'utf8').catch(() => '');
    const before = classesIn(committed);
    const after = classesIn(fresh);
    DROPPED[name] = new Set([...before].filter((c) => !after.has(c)));
  }
  const anyDrops = Object.values(DROPPED).some((s) => s.size);

  if (anyDrops) {
    for (const f of allHtmlFiles) {
      const path = join(PUBLIC, f);
      const html = await readFile(path, 'utf8');
      const linked = [...html.matchAll(/<link[^>]+href="\/css\/([a-z-]+\.css)"/g)].map((m) => m[1]);
      const relevant = linked.filter((sheet) => sheet in DROPPED && DROPPED[sheet].size);
      if (!relevant.length) continue;

      const used = new Set();
      for (const m of html.matchAll(/\sclass="([^"]*)"/g)) {
        for (const token of m[1].split(/\s+/).filter(Boolean)) used.add(token);
      }

      for (const sheet of relevant) {
        const broken = [...used].filter((c) => DROPPED[sheet].has(c)).sort();
        if (broken.length) {
          fail(
            'class-with-no-rule',
            `${rel(f)} uses ${broken.join(', ')} — ${sheet} would drop this rule if rebuilt now`
          );
        }
      }
    }
  }
}

// -----------------------------------------------------------------------
// Check 2 (FAIL): pagination page count vs. published article count.
// -----------------------------------------------------------------------
{
  const PER_PAGE = 12;
  const onDiskPages = (baseDir) => {
    // page 1 is the index itself, not a numbered directory.
    const nums = globSync('*/index.html', { cwd: baseDir })
      .map((f) => parseInt(f.split('/')[0], 10))
      .filter((n) => !Number.isNaN(n));
    return nums.length ? Math.max(...nums) : 1;
  };
  const checkListing = (label, count, pageDir) => {
    const expected = Math.max(1, Math.ceil(count / PER_PAGE));
    const existsBase = globSync('index.html', { cwd: pageDir.replace(/\/page$|\/pagina$/, '') }).length > 0;
    if (!existsBase) return; // the listing itself doesn't exist — not this check's concern
    const actual = onDiskPages(pageDir);
    if (actual !== expected) {
      fail(
        'pagination-count',
        `${label}: ${count} published ÷ ${PER_PAGE} = ${expected} page(s) needed, ${actual} exist on disk`
      );
    }
  };

  const ptPublished = data.articles.pt.filter((a) => a.status === 'published');
  const enPublished = data.articles.en.filter((a) => a.status === 'published');

  checkListing('/blog/', ptPublished.length, join(PUBLIC, 'blog', 'pagina'));
  checkListing('/en/blog/', enPublished.length, join(PUBLIC, 'en', 'blog', 'page'));

  for (const c of [...data.categories.pt, ...(data.clusters?.pt || [])]) {
    const n = ptPublished.filter((a) => a.category === c.slug || a.cluster === c.slug).length;
    if (n) checkListing(`/blog/categoria/${c.slug}/`, n, join(PUBLIC, 'blog', 'categoria', c.slug, 'pagina'));
  }
  for (const c of data.categories.en) {
    const n = enPublished.filter((a) => a.category === c.slug).length;
    if (n) checkListing(`/en/blog/category/${c.slug}/`, n, join(PUBLIC, 'en', 'blog', 'category', c.slug, 'page'));
  }
}

// -----------------------------------------------------------------------
// Check 3 (WARN): chrome partials, delegated to unify-chrome.mjs --dry-run.
// -----------------------------------------------------------------------
{
  let out = '';
  try {
    out = execFileSync('node', ['scripts/unify-chrome.mjs', '--dry-run'], { cwd: ROOT, encoding: 'utf8' });
  } catch (e) {
    // --dry-run writes nothing, so a non-zero exit means the script itself
    // errored, not that it found drift. Surface that distinctly.
    warn('chrome-partials', `unify-chrome.mjs --dry-run failed to run: ${e.message}`);
  }
  const statsMatch = out.match(/^\{[\s\S]*?\n\}/m);
  const filledMatch = out.match(/^filled gaps: (\{.*\})$/m);
  if (statsMatch) {
    const stats = JSON.parse(statsMatch[0]);
    const perRegion = Object.entries(stats).filter(
      ([k, v]) => typeof v === 'number' && v > 0 && !['chromeCssBytes', 'files'].includes(k)
    );
    if (perRegion.length) {
      const stale = perRegion.map(([k, v]) => `${k}: ${v}`).join(', ');
      warn(
        'chrome-partials',
        `${stale} (${stats.files} distinct file(s) total) — run \`node scripts/unify-chrome.mjs --dry-run\` for the full list`
      );
    }
  }
  if (filledMatch) {
    const filled = JSON.parse(filledMatch[1]);
    const gaps = Object.entries(filled)
      .filter(([k, v]) => typeof v === 'number' && v > 0)
      .map(([k, v]) => `${k}: missing entirely on ${v} file(s)`)
      .join(', ');
    if (gaps) warn('chrome-partials-gaps', gaps);
  }
}

// -----------------------------------------------------------------------
// Check 4 (WARN): generated stylesheet vs its own builder.
// -----------------------------------------------------------------------
{
  const pairs = [
    ['public/css/ar-site.css', buildSharedStylesheet()],
    ['public/css/ar-chrome.css', chromeStylesheet()],
  ];
  for (const [relPath, fresh] of pairs) {
    const committed = await readFile(join(ROOT, relPath), 'utf8').catch(() => null);
    if (committed !== null && committed !== fresh) {
      warn('stylesheet-stale', `${relPath} differs from what its builder would emit now`);
    }
  }
}

// -----------------------------------------------------------------------
// Check 5 (WARN): RSS feed contents vs. current latest-30.
// -----------------------------------------------------------------------
{
  const latestUrls = (arr) =>
    new Set(
      arr
        .filter((a) => a.status === 'published')
        .sort((a, b) => (b.published || '').localeCompare(a.published || ''))
        .slice(0, 30)
        .map((a) => a.url)
    );
  const feedUrls = async (feedPath, origin) => {
    const xml = await readFile(feedPath, 'utf8').catch(() => null);
    if (xml === null) return null;
    return new Set([...xml.matchAll(/<link>([^<]+)<\/link>/g)].map((m) => m[1].replace(origin, '')).filter(Boolean));
  };
  const compare = async (label, expected, feedPath) => {
    const actual = await feedUrls(feedPath, 'https://adlerrochefort.com');
    if (actual === null) return;
    const added = [...expected].filter((u) => !actual.has(u));
    const removed = [...actual].filter((u) => !expected.has(u));
    if (added.length || removed.length) {
      warn('feed-stale', `${label}: ${added.length} article(s) that should be in the latest-30 are missing, ${removed.length} present that shouldn't be`);
    }
  };
  await compare('public/blog/feed.xml', latestUrls(data.articles.pt), join(PUBLIC, 'blog', 'feed.xml'));
  await compare('public/en/blog/feed.xml', latestUrls(data.articles.en), join(PUBLIC, 'en', 'blog', 'feed.xml'));
}

// -----------------------------------------------------------------------
// Check 6 (WARN): data/hreflang-report.json vs. two cheap proxy figures.
// -----------------------------------------------------------------------
{
  const reportPath = join(ROOT, 'data', 'hreflang-report.json');
  const report = JSON.parse(await readFile(reportPath, 'utf8').catch(() => '{}'));
  if (report.totals) {
    // scripts/hreflang.mjs records what it scanned, which is every .html file
    // in public/ — not only the index.html pages allHtmlFiles collects. Count
    // the same set here or this check reports a permanent off-by-one for
    // public/email-signature.html, which is not a page and never drifts.
    const currentHtmlFiles = globSync('**/*.html', { cwd: PUBLIC }).length;
    // Same pairing logic generate-sitemap.mjs uses: a PT article's
    // translationOf resolving to a published EN article of that slug.
    const enBySlug = new Map(data.articles.en.filter((a) => a.status === 'published').map((a) => [a.slug, a]));
    const currentArticlePairs = data.articles.pt.filter(
      (a) => a.status === 'published' && a.translationOf && enBySlug.has(a.translationOf)
    ).length;

    if (report.totals.htmlFiles !== currentHtmlFiles) {
      warn('hreflang-report-stale', `recorded htmlFiles=${report.totals.htmlFiles}, current=${currentHtmlFiles}`);
    }
    if (report.totals.articlePairs !== currentArticlePairs) {
      warn('hreflang-report-stale', `recorded articlePairs=${report.totals.articlePairs}, current=${currentArticlePairs}`);
    }
  } else {
    warn('hreflang-report-stale', 'data/hreflang-report.json has no totals block to compare');
  }
}

// -----------------------------------------------------------------------
// Report
// -----------------------------------------------------------------------
console.log('=== Generator freshness check ===\n');

if (FAILS.length) {
  console.log(`FAIL (${FAILS.length}):`);
  for (const { check, detail } of FAILS) console.log(`  [${check}] ${detail}`);
  console.log('');
}
if (WARNS.length && !QUIET) {
  console.log(`WARN (${WARNS.length}):`);
  for (const { check, detail } of WARNS) console.log(`  [${check}] ${detail}`);
  console.log('');
} else if (WARNS.length) {
  console.log(`WARN: ${WARNS.length} finding(s) — rerun without --quiet for detail\n`);
}

console.log(`=== ${FAILS.length} failure(s), ${WARNS.length} warning(s) ===`);
process.exit(FAILS.length ? 1 : 0);
