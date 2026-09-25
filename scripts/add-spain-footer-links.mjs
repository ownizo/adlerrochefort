#!/usr/bin/env node
/**
 * Surgical, Spain-only footer propagation.
 *
 * Context: public/en/index.html's footer gained a Spain product column on
 * 2026-08-28 (plus two sentences mentioning Spain, in the brand blurb and the
 * regulatory disclosure). scripts/unify-chrome.mjs — whose job is exactly
 * this kind of chrome propagation — was never re-run afterward, so none of
 * the ~189 other /en/ pages picked it up. See SPAIN-DIAGNOSIS.md.
 *
 * Running unify-chrome.mjs itself would fix that, but as a side effect: its
 * footer swap is a full region replace, and the CURRENT homepage footer also
 * differs from the deployed consumer footer in ways that have nothing to do
 * with Spain — most importantly, its "Services" column was narrowed to
 * "Portugal" and dropped 4 links (international-health-insurance-portugal,
 * and three blog posts) that consumer pages still carry. A full swap would
 * silently remove those from ~189 pages. This script does only the minimum:
 * it inserts the Spain column and updates the two Spain-mentioning sentences
 * on their own, leaving every other column and every other word of the
 * footer exactly as it is on each page today.
 *
 * Scope, deliberately narrow:
 *   - /en/ pages only. PT/NL/DE/FR pages are structurally out of reach of
 *     this fix anyway: each language's footer is sourced from that
 *     language's own homepage (scripts/lib/partials.mjs), and none of PT/NL's
 *     homepages have a Spain column to source from. Adding one there would be
 *     a separate, unreviewed editorial decision this script does not make.
 *   - Never touches the Spain cluster itself (any /en/ page whose path
 *     contains "spain") or
 *     /en/insurance-review/ — both already carry their own deliberately
 *     market-neutral footer (scripts/lib/spain-chrome.mjs), which already
 *     covers both markets and must not be replaced with the fuller
 *     EN-homepage footer.
 *   - Idempotent: a page that already has a Spain footer column, an
 *     already-Spain-aware brand blurb, or an already-Spain-aware regulatory
 *     sentence is left alone for that piece. Safe to re-run.
 *
 * Everything else found during the chrome audit (a missing PT "Massagistas"
 * footer link, 16 stale PT/EN article translation-pair links, and 11 /nl/
 * pages missing their ASF top bar and footer entirely) is deliberately not
 * touched here — unrelated to Spain, left for separate follow-up.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { execSync } from 'node:child_process';
import { ROOT, PUBLIC, CHROME } from './lib/partials.mjs';

const DRY_RUN = process.argv.includes('--dry-run');

// ---------------------------------------------------------------------------
// Extract the Spain column and the two sentences from the current source of
// truth (public/en/index.html, via CHROME.en.footer) rather than hand-copying
// them, so this script always propagates whatever is actually on the
// homepage right now.
// ---------------------------------------------------------------------------
const footer = CHROME.en.footer;

function findMatchingClose(html, openIdx) {
  let depth = 0;
  const tagRe = /<div\b[^>]*>|<\/div>/g;
  tagRe.lastIndex = openIdx;
  let m;
  while ((m = tagRe.exec(html))) {
    if (m[0].startsWith('</')) {
      depth--;
      if (depth === 0) return m.index + m[0].length;
    } else {
      depth++;
    }
  }
  throw new Error('unbalanced <div> while locating Spain footer column');
}

const spainTitleIdx = footer.indexOf('<div class="footer-col-title">Spain</div>');
if (spainTitleIdx === -1) {
  throw new Error('Spain footer column not found in CHROME.en.footer — has public/en/index.html changed shape?');
}
const spainDivStart = footer.lastIndexOf('<div>', spainTitleIdx);
const spainDivEnd = findMatchingClose(footer, spainDivStart);
const SPAIN_COLUMN = footer.slice(spainDivStart, spainDivEnd);

function between(html, startMarker, endMarker) {
  const s = html.indexOf(startMarker);
  const e = html.indexOf(endMarker, s);
  return html.slice(s, e + endMarker.length);
}

const NEW_BRAND_DESC = between(footer, '<p class="footer-brand-desc">', '</p>');

const NEW_REGULATORY_SENTENCE = (() => {
  const regBlock = between(footer, '<div class="footer-regulatory">', '</div>');
  const paras = [...regBlock.matchAll(/<p>[\s\S]*?<\/p>/g)].map((m) => m[0]);
  const asfPara = paras.find((p) => p.includes('425591790/3'));
  if (!asfPara) throw new Error('ASF regulatory paragraph not found in CHROME.en.footer');
  return asfPara;
})();

const OLD_BRAND_DESC =
  '<p class="footer-brand-desc">ASF-registered private-client insurance broker in Portugal and Spain. We compare the market for international residents in Portugal &mdash; home, health, car and condominium cover.</p>';
const OLD_REGULATORY_SENTENCE =
  '<p>Ownizo, Unipessoal Lda. is registered with the Portuguese Insurance and Pension Funds Supervisory Authority (ASF) under no. 425591790/3.</p>';

// ---------------------------------------------------------------------------
// Target files: /en/ pages only, excluding the homepage (source),
// insurance-review and the Spain cluster (their own footer).
// ---------------------------------------------------------------------------
const files = execSync('find public/en -name "index.html"', { cwd: ROOT })
  .toString()
  .trim()
  .split('\n')
  .map((f) => join(ROOT, f))
  .filter((f) => f !== join(PUBLIC, 'en', 'index.html'))
  .filter((f) => !/\/en\/insurance-review\//.test(f))
  .filter((f) => !/spain/.test(f));

const CONTACT_COL_MARKER = /<div>\s*<div class="footer-col-title">Contact<\/div>/;

const summary = { spainColumnAdded: 0, brandDescUpdated: 0, regulatorySentenceUpdated: 0, filesChanged: 0, skippedNoContactMarker: 0 };
const changed = { spainColumnAdded: [], brandDescUpdated: [], regulatorySentenceUpdated: [] };

for (const file of files) {
  const original = await readFile(file, 'utf8');
  const rel = relative(PUBLIC, file);

  // Everything below must only ever touch the real site footer — the bare
  // `<footer>` tag, exactly as unify-chrome.mjs itself matches it. At least
  // one page (en/thank-you/) also carries a second, decorative
  // `<footer class="on-dark">` earlier in the body with its own copy of the
  // same regulatory sentence; a whole-document string replace would silently
  // edit that one instead of the real footer. So `head` (left alone) and
  // `tail` (the only part any replacement below can touch) are split once,
  // up front, at the first bare `<footer>` tag.
  const siteFooterStart = original.indexOf('<footer>');
  if (siteFooterStart === -1) {
    console.error(`SKIP (no bare <footer> tag found — inspect by hand): ${rel}`);
    continue;
  }
  const head = original.slice(0, siteFooterStart);
  let tail = original.slice(siteFooterStart);

  if (!tail.includes('<div class="footer-col-title">Spain</div>')) {
    const m = tail.match(CONTACT_COL_MARKER);
    if (!m) {
      console.error(`SKIP (no Contact-column marker in site footer — inspect by hand): ${rel}`);
      summary.skippedNoContactMarker++;
    } else {
      tail = tail.slice(0, m.index) + SPAIN_COLUMN + '\n    ' + tail.slice(m.index);
      summary.spainColumnAdded++;
      changed.spainColumnAdded.push(rel);
    }
  }

  if (tail.includes(OLD_BRAND_DESC)) {
    tail = tail.replace(OLD_BRAND_DESC, NEW_BRAND_DESC);
    summary.brandDescUpdated++;
    changed.brandDescUpdated.push(rel);
  }

  if (tail.includes(OLD_REGULATORY_SENTENCE)) {
    tail = tail.replace(OLD_REGULATORY_SENTENCE, NEW_REGULATORY_SENTENCE);
    summary.regulatorySentenceUpdated++;
    changed.regulatorySentenceUpdated.push(rel);
  }

  const html = head + tail;
  if (html !== original) {
    if (!DRY_RUN) await writeFile(file, html);
    summary.filesChanged++;
  }
}

console.log(JSON.stringify({ ...summary, dryRun: DRY_RUN, totalCandidateFiles: files.length }, null, 2));
if (DRY_RUN) {
  for (const [region, list] of Object.entries(changed)) {
    console.log(`\n${region} (${list.length}):`);
    for (const f of list) console.log(`  ${f}`);
  }
}
