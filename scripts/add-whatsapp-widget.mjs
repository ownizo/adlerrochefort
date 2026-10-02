#!/usr/bin/env node
/**
 * Puts the floating WhatsApp button on every served page.
 *
 *   node scripts/add-whatsapp-widget.mjs            # write
 *   node scripts/add-whatsapp-widget.mjs --dry-run  # report only
 *
 * The button itself is public/js/insurance-chat-widget.js (a fixed green
 * circle bottom-right, label in the page's language). Generated clusters
 * (scripts/lib/market-cluster.mjs, generate-de-cluster.mjs,
 * generate-nl-cluster.mjs) emit the tag themselves; this script covers the
 * hand-authored pages and is idempotent: a page that already loads the widget
 * is left untouched. Excluded: the email-signature template, which is not a
 * page anyone browses.
 */
import { readFileSync, writeFileSync, globSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const PUBLIC = join(dirname(fileURLToPath(import.meta.url)), '..', 'public');
const DRY = process.argv.includes('--dry-run');
const EXCLUDE = new Set(['email-signature.html']);
const SEG_LANG = { en: 'en', de: 'de', nl: 'nl', fr: 'fr', es: 'es', it: 'it', pl: 'pl', se: 'sv', dk: 'da', zh: 'zh', il: 'he' };

let added = 0;
const skipped = [];
for (const rel of globSync('**/*.html', { cwd: PUBLIC }).sort()) {
  if (EXCLUDE.has(rel)) continue;
  const file = join(PUBLIC, rel);
  const html = readFileSync(file, 'utf8');
  if (html.includes('/js/insurance-chat-widget.js')) continue;
  if (!html.includes('</body>')) { skipped.push(rel); continue; }
  const lang = SEG_LANG[rel.split('/')[0]] || 'pt';
  const tag = `<script defer src="/js/insurance-chat-widget.js" data-lang="${lang}"></script>`;
  const i = html.lastIndexOf('</body>');
  if (!DRY) writeFileSync(file, `${html.slice(0, i)}${tag}\n${html.slice(i)}`);
  added += 1;
}
console.log(`${DRY ? '[dry run] ' : ''}WhatsApp widget added to ${added} page(s).`);
if (skipped.length) console.log(`No </body>, skipped: ${skipped.join(', ')}`);
