#!/usr/bin/env node
/**
 * Cannibalisation flagging — Phase 9 (SEO consolidation).
 *
 * Compares the title + H1 of every primary commercial/hub page against
 * every other page in the same market and flags pairs whose wording
 * overlaps enough that they could be competing for the same search intent.
 *
 * This is a FLAGGING tool, not a consolidation tool (brief §7/§8): it never
 * merges, redirects, deletes, or rewrites a page. Every flagged pair is
 * either confirmed a false positive (a deliberately differentiated cluster
 * — e.g. the four Portugal landlord pages — annotated as such using
 * data/query-ownership.mjs) or left for a human decision once real ranking
 * evidence exists.
 *
 * Method (documented per brief §40, not an opaque score): each page's
 * title + H1 is lowercased, the brand name and a small stopword list are
 * removed, and what remains is treated as a set of significant words.
 * Jaccard similarity (|intersection| / |union|) between two pages' word
 * sets is the overlap score. This is a blunt, explainable heuristic — it
 * will both under- and over-flag — which is exactly why it only ever
 * flags for review rather than acting.
 *
 * Usage: node scripts/cannibalization-check.mjs
 * Output: audit/cannibalization.json, audit/cannibalization.md
 */
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { QUERY_OWNERSHIP } from '../data/query-ownership.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = join(ROOT, 'public');
const THRESHOLD = 0.45; // documented, not tuned to hide or manufacture findings

// The primary commercial/hub pages to compare — NOT every page on the site.
// Blog/situation articles are excluded by design: Portugal alone has ~190
// published articles, deliberately covering distinct long-tail angles, and
// running this same check across all of them would produce mostly noise.
// This list is the same set surveyed by hand before writing
// data/query-ownership.mjs.
const PAGES = [
  'expat-insurance-portugal', 'expat-insurance-lagos-portugal', 'expat-visa-insurance-portugal',
  'fiscal-representation-portugal', 'car-insurance-portugal', 'condominium-insurance-algarve',
  'apartment-insurance-portugal', 'earthquake-insurance-portugal', 'flood-insurance-portugal',
  'landlord-insurance-portugal', 'landlord-liability-insurance-portugal',
  'non-resident-landlord-insurance-portugal', 'rental-property-insurance-portugal',
  'second-home-insurance-portugal', 'unoccupied-home-insurance-portugal',
  'international-health-insurance-portugal', 'health-insurance-quote', 'home-insurance-quote',
  'private-clients', 'relocation-services', 'insurance/tvde',
  'expat-insurance-spain', 'home-insurance-spain', 'landlord-insurance-spain',
  'health-insurance-spain', 'car-insurance-spain', 'life-insurance-spain',
  'mortgage-protection-spain', 'private-clients-spain',
  'insurance-review', 'about', 'how-we-work', 'why-use-an-insurance-broker', 'claims-support',
];

const STOPWORDS = new Set([
  'adler', 'rochefort', 'insurance', 'portugal', 'spain', 'international', 'expat', 'expats',
  'for', 'the', 'a', 'an', 'in', 'of', 'and', 'or', 'cover', 'quote', 'owners', 'owner',
  'residents', 'resident', 'clients', 'client', 'broker', 'english', 'speaking', 'english-speaking',
  'with', 'your', 'you', 'to', 'is', 'are', 'i', 'my', '&', '|', 'free', 'get',
]);

function marketOf(slug) {
  if (slug.endsWith('-spain')) return 'spain';
  if (['insurance-review', 'about', 'how-we-work', 'why-use-an-insurance-broker', 'claims-support'].includes(slug)) return 'shared';
  return 'portugal';
}

function wordSet(text) {
  return new Set(
    text
      .toLowerCase()
      .replace(/&amp;/g, '&')
      .replace(/[^a-z0-9&\s-]/g, ' ')
      .split(/\s+/)
      .filter((w) => w && !STOPWORDS.has(w))
  );
}

function jaccard(a, b) {
  const inter = [...a].filter((w) => b.has(w)).length;
  const union = new Set([...a, ...b]).size;
  return union === 0 ? 0 : inter / union;
}

// Pairs already accounted for by a deliberate, documented cluster in
// query-ownership.mjs (a topic's own destination plus its
// relatedInformational siblings) are annotated rather than presented as a
// fresh finding.
function knownClusterPairs() {
  const pairs = new Set();
  for (const market of ['portugal', 'spain']) {
    for (const entry of QUERY_OWNERSHIP[market]) {
      const related = entry.relatedInformational || [];
      const destSlug = entry.destination.replace(/^\/en\//, '').replace(/\/$/, '');
      for (const r of related) {
        // relatedInformational may point at /en/{slug}/ pages (this file's
        // PAGES list) as well as /en/blog/{slug}/ articles (out of scope
        // for this check) — either way, record the pair key the same way.
        pairs.add([destSlug, r].sort().join('::'));
      }
      for (let i = 0; i < related.length; i++) {
        for (let j = i + 1; j < related.length; j++) {
          pairs.add([related[i], related[j]].sort().join('::'));
        }
      }
    }
  }
  return pairs;
}

async function loadPage(slug) {
  const html = await readFile(join(PUBLIC, 'en', slug, 'index.html'), 'utf8');
  const title = (html.match(/<title>([^<]*)<\/title>/) || [, ''])[1];
  const h1 = (html.match(/<h1[^>]*>(.*?)<\/h1>/s) || [, ''])[1].replace(/<[^>]+>/g, '');
  const canonical = (html.match(/rel="canonical" href="([^"]*)"/) || [, ''])[1];
  return { slug, title, h1, canonical, words: wordSet(`${title} ${h1}`) };
}

async function main() {
  const pages = [];
  for (const slug of PAGES) {
    try {
      pages.push(await loadPage(slug));
    } catch (err) {
      console.error(`WARN: could not load /en/${slug}/ — ${err.message}`);
    }
  }

  const known = knownClusterPairs();
  const findings = [];

  for (let i = 0; i < pages.length; i++) {
    for (let j = i + 1; j < pages.length; j++) {
      const a = pages[i], b = pages[j];
      const marketA = marketOf(a.slug), marketB = marketOf(b.slug);
      // Cross-market pairs are never a cannibalisation risk — Portugal and
      // Spain deliberately target the same product with separate pages.
      // "shared" pages (trust/utility) don't compete for product queries
      // either, per query-ownership.mjs's own annotation.
      if (marketA !== marketB || marketA === 'shared') continue;

      const score = jaccard(a.words, b.words);
      if (score < THRESHOLD) continue;

      const pairKey = [a.slug, b.slug].sort().join('::');
      findings.push({
        market: marketA,
        pageA: `/en/${a.slug}/`,
        pageB: `/en/${b.slug}/`,
        titleA: a.title,
        titleB: b.title,
        score: Math.round(score * 100) / 100,
        knownDifferentiatedCluster: known.has(pairKey),
        recommendedAction: known.has(pairKey)
          ? 'monitor — deliberate topic cluster, see data/query-ownership.mjs'
          : 'flag for review — no ranking evidence available to consolidate safely',
      });
    }
  }

  findings.sort((a, b) => b.score - a.score);

  await mkdir(join(ROOT, 'audit'), { recursive: true });
  await writeFile(join(ROOT, 'audit', 'cannibalization.json'), JSON.stringify({ generatedAt: new Date().toISOString(), threshold: THRESHOLD, pagesChecked: pages.length, findings }, null, 2));

  const md = [
    '# Cannibalisation check',
    '',
    `Generated: ${new Date().toISOString().slice(0, 10)} · pages checked: ${pages.length} · similarity threshold: ${THRESHOLD}`,
    '',
    'Method: Jaccard similarity of title+H1 significant words (brand name and common insurance stopwords removed). This flags for human review only — nothing here is merged, redirected or rewritten automatically.',
    '',
    findings.length === 0
      ? 'No pairs at or above the threshold.'
      : findings
          .map(
            (f) =>
              `## ${f.pageA} ↔ ${f.pageB} — score ${f.score} (${f.market})\n- "${f.titleA}"\n- "${f.titleB}"\n- ${f.knownDifferentiatedCluster ? '**Known differentiated cluster** — ' : ''}${f.recommendedAction}`
          )
          .join('\n\n'),
    '',
  ].join('\n');
  await writeFile(join(ROOT, 'audit', 'cannibalization.md'), md);

  console.log(`Checked ${pages.length} pages. ${findings.length} pair(s) at or above threshold ${THRESHOLD}.`);
  for (const f of findings) {
    console.log(`  ${f.score}  ${f.pageA}  <->  ${f.pageB}  ${f.knownDifferentiatedCluster ? '(known cluster)' : '(NEEDS REVIEW)'}`);
  }
}

main();
