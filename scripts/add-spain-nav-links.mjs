#!/usr/bin/env node
/**
 * Step 3 of the Spain navigation/footer propagation work (see
 * SPAIN-DIAGNOSIS.md and the PR this ships in).
 *
 * Two separate, small fixes, both scoped to /en/*spain* pages only:
 *
 * (A) The 8 Spain commercial pages and 5 Spain blog-category pages already
 *     carry a flat product nav (desktop `.nav-links-left` and, on the 8
 *     commercial pages, a `#mobileNav` drawer) linking every Spain product
 *     page — except Mortgage Protection, missing from both, the same
 *     completeness gap the footer had before this PR. Adds it, positioned
 *     between Life Insurance and Private Clients, matching the footer's
 *     order.
 *
 * (B) The 19 individual Spain blog articles carry only a compact reading
 *     header (logo, "Back to Insights", market indicator) with no product
 *     links at all — confirmed in SPAIN-DIAGNOSIS.md as the reason a visitor
 *     who lands on a Spain blog post from search has no navigational path to
 *     the Spain commercial pages. These pages are single-row, burger-less
 *     headers (no mobile drawer, no dropdown-panel CSS/JS the way
 *     public/en/index.html's mega menu has), so replicating that mega menu
 *     verbatim into 18 self-contained files would mean duplicating its
 *     dropdown CSS and toggle JS into each one — a much larger, riskier
 *     change for a reading page than the goal requires. Instead this adds a
 *     slim, always-visible "Insurance in Spain" link strip directly under
 *     the main nav: the same 8 destinations, no new JS, ~10 lines of scoped
 *     CSS appended to each page's own <style> block.
 *
 *     /en/blog/insurance-portugal-spain-international-residents/ is
 *     deliberately excluded — reserved for separate work per the task brief.
 *
 * Idempotent: safe to re-run.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { execSync } from 'node:child_process';
import { ROOT, PUBLIC } from './lib/partials.mjs';

const DRY_RUN = process.argv.includes('--dry-run');
const RESERVED = 'en/blog/insurance-portugal-spain-international-residents/index.html';

const MORTGAGE_LINK_DESKTOP = '<a href="/en/mortgage-protection-spain/">Mortgage Protection</a>';
const MORTGAGE_LINK_MOBILE =
  '<a href="/en/mortgage-protection-spain/" onclick="toggleMenu()">Mortgage Protection</a>';

function findRegion(html, startMarker, endMarker) {
  const s = html.indexOf(startMarker);
  if (s === -1) return null;
  const e = html.indexOf(endMarker, s);
  if (e === -1) return null;
  return { start: s, end: e + endMarker.length };
}

// ---------------------------------------------------------------------------
// (A) Mortgage Protection link — 8 commercial + 5 category pages.
// ---------------------------------------------------------------------------
const navTargets = execSync(
  'find public/en -maxdepth 1 -iname "*spain*" -type d && find public/en/blog/category -maxdepth 1 -iname "spain-*" -type d',
  { cwd: ROOT, shell: '/bin/bash' }
)
  .toString()
  .trim()
  .split('\n')
  .filter(Boolean)
  .map((d) => join(ROOT, d, 'index.html'));

const summaryA = { desktopAdded: 0, mobileAdded: 0, filesChanged: 0 };

for (const file of navTargets) {
  const before = await readFile(file, 'utf8');
  let html = before;
  const rel = relative(PUBLIC, join(ROOT, file));

  const navLeft = findRegion(html, '<div class="nav-links-left">', '</div>');
  if (navLeft && !html.slice(navLeft.start, navLeft.end).includes('mortgage-protection-spain')) {
    const scoped = html.slice(navLeft.start, navLeft.end);
    const lifeLink = scoped.match(/<a href="\/en\/life-insurance-spain\/">[^<]*<\/a>/);
    if (lifeLink) {
      const insertAt = navLeft.start + lifeLink.index + lifeLink[0].length;
      html = html.slice(0, insertAt) + `\n    ${MORTGAGE_LINK_DESKTOP}` + html.slice(insertAt);
      summaryA.desktopAdded++;
    } else {
      console.error(`(A) SKIP desktop nav (no life-insurance-spain link found in nav-links-left): ${rel}`);
    }
  }

  const mobileNav = findRegion(html, '<div class="mobile-nav" id="mobileNav">', '</div>');
  if (mobileNav && !html.slice(mobileNav.start, mobileNav.end).includes('mortgage-protection-spain')) {
    const scoped = html.slice(mobileNav.start, mobileNav.end);
    const lifeLink = scoped.match(/<a href="\/en\/life-insurance-spain\/" onclick="toggleMenu\(\)">[^<]*<\/a>/);
    if (lifeLink) {
      const insertAt = mobileNav.start + lifeLink.index + lifeLink[0].length;
      html = html.slice(0, insertAt) + `\n  ${MORTGAGE_LINK_MOBILE}` + html.slice(insertAt);
      summaryA.mobileAdded++;
    } else {
      console.error(`(A) SKIP mobile nav (no life-insurance-spain link found in #mobileNav): ${rel}`);
    }
  }

  if (html !== before) {
    if (!DRY_RUN) await writeFile(file, html);
    summaryA.filesChanged++;
  }
}

// ---------------------------------------------------------------------------
// (B) "Insurance in Spain" sub-nav strip — 18 individual blog articles.
// ---------------------------------------------------------------------------
const SUBNAV_HTML = `<div class="spain-subnav" aria-label="Insurance in Spain">
  <span class="spain-subnav-label">Insurance in Spain</span>
  <a href="/en/expat-insurance-spain/">Overview</a>
  <a href="/en/health-insurance-spain/">Health</a>
  <a href="/en/home-insurance-spain/">Home</a>
  <a href="/en/landlord-insurance-spain/">Landlord</a>
  <a href="/en/car-insurance-spain/">Car</a>
  <a href="/en/life-insurance-spain/">Life</a>
  <a href="/en/mortgage-protection-spain/">Mortgage</a>
  <a href="/en/private-clients-spain/">Private Clients</a>
</div>`;

const SUBNAV_CSS = `
.spain-subnav{background:var(--cream2);border-bottom:1px solid var(--border);padding:11px 48px;display:flex;align-items:center;gap:18px;overflow-x:auto;white-space:nowrap;-webkit-overflow-scrolling:touch}
.spain-subnav-label{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);flex-shrink:0}
.spain-subnav a{font-size:13px;font-weight:600;color:var(--primary-text);text-decoration:none;flex-shrink:0}
.spain-subnav a:hover{color:var(--accent)}
@media(max-width:760px){.spain-subnav{padding:10px 24px}}
`;

const RESERVED_PATH = join(PUBLIC, RESERVED);
const blogTargets = execSync('find public/en/blog -maxdepth 1 -iname "*spain*" -type d', {
  cwd: ROOT,
  shell: '/bin/bash',
})
  .toString()
  .trim()
  .split('\n')
  .filter(Boolean)
  .map((d) => join(ROOT, d, 'index.html'))
  .filter((f) => f !== RESERVED_PATH);

const summaryB = { subnavAdded: 0, cssAdded: 0, filesChanged: 0, skipped: [] };

for (const file of blogTargets) {
  const before = await readFile(file, 'utf8');
  let html = before;
  const rel = relative(PUBLIC, join(ROOT, file));

  if (!html.includes('class="spain-subnav"')) {
    const marker = '</nav>\n\n<nav class="breadcrumb"';
    const idx = html.indexOf(marker);
    if (idx === -1) {
      console.error(`(B) SKIP (marker not found — inspect by hand): ${rel}`);
      summaryB.skipped.push(rel);
    } else {
      const insertAt = idx + '</nav>'.length;
      html = html.slice(0, insertAt) + `\n\n${SUBNAV_HTML}` + html.slice(insertAt);
      summaryB.subnavAdded++;
    }
  }

  if (!html.includes('.spain-subnav{')) {
    const styleClose = html.indexOf('</style>');
    if (styleClose === -1) {
      console.error(`(B) SKIP css (no </style> found — inspect by hand): ${rel}`);
    } else {
      html = html.slice(0, styleClose) + SUBNAV_CSS + html.slice(styleClose);
      summaryB.cssAdded++;
    }
  }

  if (html !== before) {
    if (!DRY_RUN) await writeFile(file, html);
    summaryB.filesChanged++;
  }
}

console.log(
  JSON.stringify(
    {
      dryRun: DRY_RUN,
      A_mortgageLink: { ...summaryA, totalCandidateFiles: navTargets.length },
      B_spainSubnav: { ...summaryB, totalCandidateFiles: blogTargets.length },
    },
    null,
    2
  )
);
