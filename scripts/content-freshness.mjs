#!/usr/bin/env node
/**
 * Stale-content flagging — Phase 9 (SEO consolidation), brief §14/§15/§16.
 *
 * Flags published EN articles that (a) touch a regulatory-risk topic —
 * visa/residency, driving licences, vehicle importation, legal minimums,
 * mortgage/legal requirements — and (b) have not been modified in a while,
 * using the `modified` date data/articles.json already tracks for every
 * article. No new metadata field was invented for this: the repo already
 * records when an article last changed, and that is a real, honest signal
 * — a `lastReviewed` field nobody ever updates would not be.
 *
 * This never changes a date or a page. It only reports. See audit/
 * content-freshness.md for what a human (or a future agent session) should
 * actually go check.
 *
 * Usage: node scripts/content-freshness.mjs [--stale-days=180]
 */
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

function parseArgs(argv) {
  const out = {};
  for (const arg of argv) {
    const m = /^--([a-z-]+)(?:=(.*))?$/.exec(arg);
    if (m) out[m[1]] = m[2] === undefined ? true : m[2];
  }
  return out;
}

const args = parseArgs(process.argv.slice(2));
const STALE_DAYS = Number(args['stale-days'] || 180);

// Keyword → topic label, checked against title + description + category +
// tag (lowercased). A page matching more than one keyword is still one
// finding, tagged with every matching topic.
const REGULATORY_TOPICS = [
  { topic: 'visa_residency', keywords: ['visa', 'residency', 'residence permit', 'd7', 'd8', 'aima', 'golden visa', 'nif', 'schengen'] },
  { topic: 'driving_licence', keywords: ['driving licence', 'driving license', "driver's licence", 'foreign licence'] },
  { topic: 'vehicle_importation', keywords: ['importing a car', 'vehicle importation', 'isv', 'matrícula', 'matricula', 'customs declaration'] },
  { topic: 'legal_minimums', keywords: ['legal minimum', 'mandatory insurance', 'compulsory insurance', 'required by law'] },
  { topic: 'mortgage_legal', keywords: ['mortgage', 'lender requires', "lender's requirement"] },
  { topic: 'fiscal_representation', keywords: ['fiscal representation', 'fiscal representative', 'tax representative'] },
];

function topicsFor(article) {
  const haystack = [article.title, article.description, article.category, article.tag]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
  return REGULATORY_TOPICS.filter((t) => t.keywords.some((k) => haystack.includes(k))).map((t) => t.topic);
}

function daysSince(isoDate) {
  const then = new Date(isoDate).getTime();
  if (!Number.isFinite(then)) return null;
  return Math.round((Date.now() - then) / 86400000);
}

function reviewStatus(days) {
  if (days == null) return 'unknown';
  if (days >= STALE_DAYS * 2) return 'overdue';
  if (days >= STALE_DAYS) return 'due_for_review';
  return 'current';
}

async function main() {
  const data = JSON.parse(await readFile(join(ROOT, 'data', 'articles.json'), 'utf8'));
  const published = [...data.articles.en, ...data.articles.pt].filter((a) => a.status === 'published');

  const findings = [];
  for (const a of published) {
    const topics = topicsFor(a);
    if (topics.length === 0) continue;
    const days = daysSince(a.modified || a.published);
    const status = reviewStatus(days);
    if (status === 'current') continue;
    findings.push({
      url: a.url,
      market: a.url.includes('-spain') || /spain/i.test(a.slug) ? 'spain' : 'portugal',
      lang: a.lang,
      topics,
      lastModified: (a.modified || a.published || '').slice(0, 10),
      daysSinceModified: days,
      reviewStatus: status,
    });
  }

  findings.sort((a, b) => (b.daysSinceModified || 0) - (a.daysSinceModified || 0));

  await mkdir(join(ROOT, 'audit'), { recursive: true });
  const report = {
    generatedAt: new Date().toISOString(),
    staleDaysThreshold: STALE_DAYS,
    articlesScanned: published.length,
    regulatoryRiskArticles: published.filter((a) => topicsFor(a).length > 0).length,
    findings,
  };
  await writeFile(join(ROOT, 'audit', 'content-freshness.json'), JSON.stringify(report, null, 2));

  const md = [
    '# Content freshness',
    '',
    `Generated: ${report.generatedAt.slice(0, 10)} · articles scanned: ${published.length} · regulatory-risk articles: ${report.regulatoryRiskArticles} · stale threshold: ${STALE_DAYS} days`,
    '',
    'Method: `modified` date from data/articles.json (a real, already-tracked field) crossed against a keyword match on title/description/category/tag for visa/residency, driving-licence, vehicle-importation, legal-minimum, mortgage-legal and fiscal-representation topics. Nothing here is a fabricated freshness score, and no date is changed by running this.',
    '',
    findings.length === 0
      ? `No regulatory-risk article is over the ${STALE_DAYS}-day threshold.`
      : findings
          .map(
            (f) =>
              `## ${f.url}\n- market: ${f.market} · topics: ${f.topics.join(', ')}\n- last modified: ${f.lastModified} (${f.daysSinceModified} days ago) — **${f.reviewStatus === 'overdue' ? 'OVERDUE' : 'due for review'}**`
          )
          .join('\n\n'),
    '',
  ].join('\n');
  await writeFile(join(ROOT, 'audit', 'content-freshness.md'), md);

  console.log(`Scanned ${published.length} published articles, ${report.regulatoryRiskArticles} touch a regulatory-risk topic.`);
  console.log(`${findings.length} at or beyond the ${STALE_DAYS}-day threshold. See audit/content-freshness.md`);
}

main();
