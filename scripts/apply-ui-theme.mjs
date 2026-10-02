#!/usr/bin/env node
/**
 * Links the October 2026 interface layer (/css/ar-theme.css) into every page.
 *
 * The layer restyles the interface only — navigation, section blocks, buttons,
 * fields, cards, footer, cookie notice. It does not touch any page's markup or
 * copy, so this pass adds exactly one line per page: the <link> as the last
 * element of <head>, after every inline <style> block, so it wins over them.
 *
 * Idempotent: a page that already links the layer is left alone. Pages with no
 * </head> (none today) are reported rather than guessed at.
 *
 * Future pages: scripts/lang-switcher.mjs (the pass that visits every page) and
 * scripts/lib/market-cluster.mjs (generated market pages) emit the same link,
 * from the same constant, so regenerating a page keeps the theme.
 *
 *   node scripts/apply-ui-theme.mjs            # write
 *   node scripts/apply-ui-theme.mjs --dry-run  # report only
 */
import { readFile, writeFile } from 'node:fs/promises';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { globSync } from 'node:fs';
import { THEME_STYLESHEET, THEME_CSS_LINK } from './lib/lang-selector.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = join(ROOT, 'public');
const DRY = process.argv.includes('--dry-run');

// Not a page of the site: a downloadable e-mail signature with its own inline
// styling for mail clients.
const SKIP = new Set(['email-signature.html']);

const files = globSync('**/*.html', { cwd: PUBLIC }).filter((f) => !SKIP.has(f)).sort();
const report = { added: 0, already: 0, noHead: [] };

for (const rel of files) {
  const file = join(PUBLIC, rel);
  const html = await readFile(file, 'utf8');
  if (html.includes(THEME_STYLESHEET)) { report.already += 1; continue; }
  const at = html.indexOf('</head>');
  if (at === -1) { report.noHead.push(rel); continue; }
  const out = `${html.slice(0, at)}${THEME_CSS_LINK}\n${html.slice(at)}`;
  if (!DRY) await writeFile(file, out);
  report.added += 1;
}

console.log(`${DRY ? '[dry-run] ' : ''}theme linked:   ${report.added}`);
console.log(`already linked: ${report.already}`);
console.log(`no </head>:     ${report.noHead.length}`);
report.noHead.forEach((f) => console.log(`  ${relative(ROOT, join(PUBLIC, f))}`));
