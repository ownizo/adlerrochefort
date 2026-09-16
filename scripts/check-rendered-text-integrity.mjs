#!/usr/bin/env node
/**
 * Fails the build if any served page contains one of three template-bug
 * signatures: a literal "undefined" (a missing key/field interpolated
 * straight into the template literal), an HTML tag that was escaped
 * instead of rendered (`&lt;a href=...&gt;`, visible as raw markup instead
 * of a link), or a stringified object leak (`[object Object]`).
 *
 * Especificação v2, Parte 2 continuação, Parte A — asked for after two of
 * these were found live, by accident, while doing something else: PR #207
 * (the residente-fiscal dropdown showed literally "undefined" on 16
 * PL/SE/DK/ZH wizard pages — `ui.selectPlaceholder` read a field that
 * actually lives at `ui.f.selectPlaceholder`) and PR #208 (the same 16
 * pages' privacy-policy link showed as raw `&lt;a href=...&gt;` text — the
 * microNote string was run through esc() even though it's trusted markup,
 * same contract as page.sections). Both had been live for one to three
 * PRs before anyone looked at the rendered page rather than the data. This
 * script is that look, made permanent and automatic: every one of these
 * three signatures is unambiguous — no legitimate page text produces any
 * of them — so a hit is always a real defect, never a judgement call.
 *
 * Building it here also turned up a third, unrelated instance already live
 * on main, found by the same three-pattern sweep applied to every public
 * page rather than just the wizard ones: five EN blog category pages
 * (spain-health/property/car/life/private-clients) render a literal
 * "undefined" page-intro paragraph — EN_CATEGORY_INTROS in
 * scripts/generate-blog.mjs has no entry for any of the five Spain
 * category slugs, so `EN_CATEGORY_INTROS[c.slug] + landing` string-
 * concatenates `undefined` with the landing link. And two EN pages
 * (earthquake-insurance-portugal, flood-insurance-portugal) show raw
 * `&lt;em&gt;…&lt;/em&gt;` text from scripts/property-cluster.data.mjs's
 * own body copy. Reported rather than fixed here — out of scope for the
 * quote-form wizard work this script was written for, and left for a
 * decision on whether/how to fix separately.
 *
 * Scope: every public/**\/*.html file, whole page — not scoped to <form>
 * like check-clinical-data-guard.mjs, since a template-interpolation bug
 * is exactly as real in page-intro copy as it is in a form label. <script>
 * and <style> blocks and HTML comments are stripped first, since ordinary
 * JS legitimately contains the word "undefined" constantly
 * (`!== undefined`, `typeof x === 'undefined'`) and that is not this bug.
 *
 * Usage: node scripts/check-rendered-text-integrity.mjs (also `npm run
 * check:text-integrity`, and wired into `npm test`'s pretest step —
 * cheapest defect class there is to catch, per the brief that asked for
 * this script, so it runs every time, not just on request).
 */
import { readFile } from 'node:fs/promises';
import { globSync } from 'node:fs';
import { join } from 'node:path';
import { PUBLIC } from './lib/chrome.mjs';

const STRIP_SCRIPT = /<script\b[^>]*>[\s\S]*?<\/script>/gi;
const STRIP_STYLE = /<style\b[^>]*>[\s\S]*?<\/style>/gi;
const STRIP_COMMENT = /<!--[\s\S]*?-->/g;

const PATTERNS = [
  { name: 'literal "undefined"', re: /\bundefined\b/g },
  { name: 'literal "[object Object]"', re: /\[object Object\]/g },
  // A real HTML tag never survives into the source as `&lt;tag`; only an
  // over-escaped trusted string produces this. Requires a following space
  // or `&gt;` so it doesn't fire on a bare "5 &lt; 10"-style comparison
  // (none exist on the site today, but the pattern should stay correct if
  // one ever does).
  { name: 'escaped HTML tag', re: /&lt;\/?[a-zA-Z][a-zA-Z0-9]*(&gt;| )/g },
];

function stripNonContent(html) {
  return html.replace(STRIP_SCRIPT, '').replace(STRIP_STYLE, '').replace(STRIP_COMMENT, '');
}

const files = globSync('**/*.html', { cwd: PUBLIC });
const hits = [];

for (const rel of files) {
  const html = await readFile(join(PUBLIC, rel), 'utf8');
  const text = stripNonContent(html);
  for (const { name, re } of PATTERNS) {
    re.lastIndex = 0;
    let m;
    let countForFile = 0;
    while ((m = re.exec(text))) {
      countForFile++;
      if (countForFile > 3) break; // one file with a systemic bug repeats it; 3 examples is enough to point at it
      const ctx = text.slice(Math.max(0, m.index - 40), m.index + m[0].length + 40).replace(/\s+/g, ' ').trim();
      hits.push({ file: rel, kind: name, detail: `…${ctx}…` });
    }
  }
}

console.log('=== Rendered-text integrity check (every public page) ===\n');
console.log(`html files scanned: ${files.length}`);

if (hits.length) {
  console.log(`\nFAIL (${hits.length}):`);
  for (const h of hits) {
    console.log(`  public/${h.file} — ${h.kind}: ${h.detail}`);
  }
  console.log(
    '\nEach of these is a template-interpolation bug that reached a served page — a missing i18n/data key ' +
      '(shows as literal "undefined"), a value passed through esc() that should have been trusted markup ' +
      '(shows as literal &lt;tag&gt; text), or a stringified object (shows as literal "[object Object]"). ' +
      'Fix the source the same way PR #207/#208 did, then regenerate.'
  );
} else {
  console.log('\nno "undefined"/"[object Object]"/escaped-HTML-tag pattern found on any served page.');
}

console.log(`\n=== ${hits.length} failure(s) ===`);
process.exit(hits.length ? 1 : 0);
