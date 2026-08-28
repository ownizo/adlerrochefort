#!/usr/bin/env node
/**
 * Title / meta-description quality check — Phase 9, brief §12/§13.
 *
 * Scans every public/en/**\/index.html and flags:
 *   - duplicate titles (two pages with the exact same <title>)
 *   - duplicate meta descriptions
 *   - missing or empty meta description
 *   - a commercial page's title/H1 not naming its market (Portugal/Spain)
 *     where the URL itself is market-specific
 *   - a title clearly inconsistent with its own H1 (near-zero word overlap)
 *
 * No arbitrary pixel-perfect scoring, no keyword-density scoring — these
 * are the concrete, binary problems the brief named. Reports only; nothing
 * here rewrites a title.
 *
 * Usage: node scripts/title-quality.mjs
 * Output: audit/title-quality.json, audit/title-quality.md
 */
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { globSync } from 'node:fs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = join(ROOT, 'public');

const STOPWORDS = new Set(['insurance', 'the', 'a', 'an', 'in', 'of', 'and', 'or', 'for', 'to', 'with', '&', '|', 'adler', 'rochefort']);

function words(text) {
  return new Set(
    text
      .toLowerCase()
      .replace(/&amp;/g, '&')
      .replace(/[^a-z0-9&\s-]/g, ' ')
      .split(/\s+/)
      .filter((w) => w && !STOPWORDS.has(w))
  );
}

function overlap(a, b) {
  const inter = [...a].filter((w) => b.has(w)).length;
  const union = new Set([...a, ...b]).size;
  return union === 0 ? 0 : inter / union;
}

async function loadPage(path) {
  const html = await readFile(path, 'utf8');
  const rel = '/' + path.replace(PUBLIC + '/', '').replace(/index\.html$/, '');
  const title = (html.match(/<title>([^<]*)<\/title>/) || [, ''])[1].trim();
  const h1 = (html.match(/<h1[^>]*>(.*?)<\/h1>/s) || [, ''])[1].replace(/<[^>]+>/g, '').trim();
  const descMatch = html.match(/<meta name="description" content="([^"]*)"/);
  const description = descMatch ? descMatch[1].trim() : null;
  const noindex = /<meta[^>]+name=["']robots["'][^>]+noindex/i.test(html);
  return { rel, title, h1, description, noindex };
}

async function main() {
  const files = globSync('en/**/index.html', { cwd: PUBLIC });
  const pages = [];
  for (const f of files) {
    const p = await loadPage(join(PUBLIC, f));
    if (p.noindex) continue; // noindex pages are exempt — nothing to rank
    pages.push(p);
  }

  const findings = [];

  // Duplicate titles.
  const byTitle = new Map();
  for (const p of pages) {
    if (!p.title) continue;
    if (!byTitle.has(p.title)) byTitle.set(p.title, []);
    byTitle.get(p.title).push(p.rel);
  }
  for (const [title, urls] of byTitle) {
    if (urls.length > 1) {
      findings.push({ type: 'duplicate_title', title, urls, severity: 'high' });
    }
  }

  // Duplicate descriptions (excluding pages with no description at all,
  // reported separately below).
  const byDesc = new Map();
  for (const p of pages) {
    if (!p.description) continue;
    if (!byDesc.has(p.description)) byDesc.set(p.description, []);
    byDesc.get(p.description).push(p.rel);
  }
  for (const [description, urls] of byDesc) {
    if (urls.length > 1) {
      findings.push({ type: 'duplicate_description', description, urls, severity: 'medium' });
    }
  }

  // Missing / empty description.
  for (const p of pages) {
    if (!p.description) {
      findings.push({ type: 'missing_description', url: p.rel, severity: 'medium' });
    }
  }

  // Market missing from a market-specific commercial page's title.
  for (const p of pages) {
    const isSpainUrl = p.rel.includes('-spain/');
    const isPortugalCommercial = /-portugal\//.test(p.rel) && !p.rel.includes('/blog/');
    const titleLower = p.title.toLowerCase();
    if (isSpainUrl && !titleLower.includes('spain')) {
      findings.push({ type: 'market_missing_from_title', url: p.rel, expectedMarket: 'Spain', title: p.title, severity: 'high' });
    }
    if (isPortugalCommercial && !titleLower.includes('portugal') && !titleLower.includes('portuguese') && !titleLower.includes('algarve') && !titleLower.includes('lagos')) {
      findings.push({ type: 'market_missing_from_title', url: p.rel, expectedMarket: 'Portugal', title: p.title, severity: 'medium' });
    }
  }

  // Title vs H1 word-overlap check. Deliberately low severity and worth
  // reading with real skepticism: several pages on this site use a
  // literal, keyword-descriptive <title> alongside a deliberately
  // editorial, emotionally-written H1 (About: title "About Adler &
  // Rochefort..." / H1 "You built a life somewhere else..."), which is a
  // real, intentional pattern, not a defect this heuristic can tell apart
  // from an accidental mismatch. Reported so a human can skim and dismiss
  // the false positives quickly, not as a to-do list.
  for (const p of pages) {
    if (!p.title || !p.h1) continue;
    const score = overlap(words(p.title), words(p.h1));
    if (score < 0.2) {
      findings.push({ type: 'title_h1_mismatch', url: p.rel, title: p.title, h1: p.h1, overlapScore: Math.round(score * 100) / 100, severity: 'low' });
    }
  }

  const bySeverity = { high: 0, medium: 0, low: 0 };
  for (const f of findings) bySeverity[f.severity] = (bySeverity[f.severity] || 0) + 1;

  await mkdir(join(ROOT, 'audit'), { recursive: true });
  const report = { generatedAt: new Date().toISOString(), pagesChecked: pages.length, bySeverity, findings };
  await writeFile(join(ROOT, 'audit', 'title-quality.json'), JSON.stringify(report, null, 2));

  const md = [
    '# Title / meta-description quality',
    '',
    `Generated: ${report.generatedAt.slice(0, 10)} · pages checked: ${pages.length} (noindex pages excluded) · findings: high ${bySeverity.high || 0}, medium ${bySeverity.medium || 0}, low ${bySeverity.low || 0}`,
    '',
    findings.length === 0
      ? 'No issues found.'
      : findings.map((f) => `## ${f.type} (${f.severity})\n${JSON.stringify(f, null, 2)}`).join('\n\n'),
    '',
  ].join('\n');
  await writeFile(join(ROOT, 'audit', 'title-quality.md'), md);

  console.log(`Checked ${pages.length} pages. Findings: high ${bySeverity.high || 0}, medium ${bySeverity.medium || 0}, low ${bySeverity.low || 0}.`);
  for (const f of findings) {
    const ref = f.url || f.title || (f.urls && f.urls.join(', '));
    console.log(`  [${f.severity}] ${f.type}: ${ref}`);
  }
}

main();
