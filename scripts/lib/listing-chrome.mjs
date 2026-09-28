/**
 * Chrome-preserving writer for the generated blog listings (/blog/, /en/blog/,
 * category and pagination pages).
 *
 * Why this exists: the listing pages' chrome (header, mega-nav, language
 * selector, footer, stylesheet links, hreflang, the organisation JSON-LD) is
 * maintained by site-wide passes that run over public/ — unify-chrome.mjs,
 * stamp-mega-nav.mjs, add-market-to-corpus.mjs / lib/lang-selector.mjs,
 * hreflang.mjs, upgrade-org-schema.mjs, apply-palette-olive-lemon.py,
 * apply-font-stolzl.py, and hand edits. generate-blog.mjs used to rebuild the
 * whole page from lib/chrome.mjs's page() skeleton, which none of those passes
 * update, so every run rolled the listings back to an older chrome.
 *
 * Instead, the generator now owns only the listing content and splices it
 * into the page that is already on disk:
 *
 *   - <head>: the metaHead() block (<title> … twitter:image). Any
 *     `<link rel="alternate" hreflang>` lines already in that block are kept
 *     and re-inserted after the same line they followed (hreflang.mjs owns
 *     them, not the generator).
 *   - <main> … </main>: replaced wholesale.
 *   - JSON-LD: the BreadcrumbList and ItemList blocks are replaced; the
 *     organisation block is left exactly as it is.
 *
 * Everything else is copied byte for byte. A page that does not exist yet
 * (a new pagination page or category) is cloned from its nearest existing
 * sibling in the same listing tree, with the sibling's own URL in the chrome
 * (the language selector's self-link) rewritten to the new page's URL and
 * the sibling's hreflang alternates dropped.
 *
 * Files are only written when their content actually changes, so re-running
 * the generator is idempotent.
 */
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';

const LEGACY_PALETTE = /#17243D|#B8323E|#872733|#E8919B/i;

const lineKey = (line) => {
  const t = line.trim();
  const m = t.match(/^<(?:link|meta)\s+(?:rel|name|property)="[^"]+"/);
  return m ? m[0] : t;
};

function locateMetaBlock(html, where) {
  const headEnd = html.indexOf('</head>');
  const start = html.indexOf('<title>');
  if (start === -1 || start > headEnd) throw new Error(`${where}: <title> not found in <head>`);
  const tw = html.indexOf('<meta name="twitter:image"', start);
  if (tw === -1 || tw > headEnd) throw new Error(`${where}: twitter:image meta not found in <head>`);
  const end = html.indexOf('\n', tw);
  // Include everything from the start of the <title> line.
  const lineStart = html.lastIndexOf('\n', start) + 1;
  return { start: lineStart, end };
}

function spliceHead(tpl, head, { keepHreflang, where }) {
  const { start, end } = locateMetaBlock(tpl, where);
  const oldLines = tpl.slice(start, end).split('\n');
  const isHreflang = (l) => /^\s*<link rel="alternate" hreflang=/.test(l);
  // Each preserved hreflang line remembers the non-hreflang line it followed.
  const kept = [];
  if (keepHreflang) {
    let anchor = null;
    for (const l of oldLines) {
      if (isHreflang(l)) kept.push({ line: l, anchor });
      else anchor = lineKey(l);
    }
  }
  const newLines = head.split('\n').filter((l) => !(kept.length && isHreflang(l)));
  const out = [];
  const placed = new Set();
  for (const l of newLines) {
    // Unanchored / unmatched hreflang lines go just before og:type.
    if (lineKey(l) === '<meta property="og:type"') {
      for (const k of kept) if (!placed.has(k) && !newLines.some((n) => lineKey(n) === k.anchor)) {
        out.push(k.line);
        placed.add(k);
      }
    }
    out.push(l);
    for (const k of kept) if (!placed.has(k) && k.anchor === lineKey(l)) {
      out.push(k.line);
      placed.add(k);
    }
  }
  for (const k of kept) if (!placed.has(k)) out.push(k.line);
  return tpl.slice(0, start) + out.join('\n') + tpl.slice(end);
}

function spliceMain(tpl, body, where) {
  const s = tpl.indexOf('<main>');
  const e = tpl.indexOf('</main>');
  if (s === -1 || e === -1 || tpl.indexOf('<main>', s + 1) !== -1) throw new Error(`${where}: expected exactly one <main>…</main>`);
  return tpl.slice(0, s) + `<main>\n${body}\n</main>` + tpl.slice(e + '</main>'.length);
}

const LD_RE = /<script type="application\/ld\+json">\n[\s\S]*?\n<\/script>/g;

function spliceJsonLd(tpl, bodyEnd, where) {
  const gen = bodyEnd.match(LD_RE) || [];
  const pick = (blocks, type) => blocks.find((b) => b.includes(`"@type": "${type}"`) && !b.includes('"@graph"'));
  let out = tpl;
  for (const type of ['BreadcrumbList', 'ItemList']) {
    const next = pick(gen, type);
    const prev = pick(out.match(LD_RE) || [], type);
    if (!next) throw new Error(`${where}: generator produced no ${type} JSON-LD`);
    if (!prev) throw new Error(`${where}: page has no ${type} JSON-LD block to replace`);
    JSON.parse(next.replace(/^<script[^>]*>|<\/script>$/g, ''));
    out = out.replace(prev, () => next);
  }
  return out;
}

/**
 * @param {object} o
 * @param {string} o.publicDir   absolute path of public/
 * @param {string} o.path        URL path of the page, e.g. "/en/blog/page/3/"
 * @param {string[]} o.templates candidate URL paths to clone from when the page
 *                               does not exist yet, nearest first
 * @param {string} o.head        metaHead() output
 * @param {string} o.body        inner HTML of <main>
 * @param {string} o.bodyEnd     JSON-LD blocks (breadcrumb + item list used)
 * @returns {Promise<{rel: string, changed: boolean, from: string}>}
 */
export async function writeListingPage({ publicDir, path, templates = [], head, body, bodyEnd }) {
  const fileOf = (p) => join(publicDir, p.replace(/^\/|\/$/g, ''), 'index.html');
  const target = fileOf(path);
  const exists = existsSync(target);
  const from = exists ? path : templates.find((t) => existsSync(fileOf(t)));
  if (!from) throw new Error(`${path}: page does not exist and no template page found (${templates.join(', ')})`);
  const where = `${path}${from === path ? '' : ` (cloned from ${from})`}`;
  const before = readFileSync(fileOf(from), 'utf8');

  let html = spliceHead(before, head, { keepHreflang: from === path, where });
  html = spliceMain(html, body, where);
  html = spliceJsonLd(html, bodyEnd, where);
  if (from !== path) html = html.split(`href="${from}"`).join(`href="${path}"`);

  if (LEGACY_PALETTE.test(html)) {
    const hit = html.match(LEGACY_PALETTE)[0];
    throw new Error(`${where}: output contains legacy palette colour ${hit} — fix the source data (data/articles.json imageGradient) rather than shipping it`);
  }

  const changed = !exists || before !== html;
  if (changed) {
    await mkdir(dirname(target), { recursive: true });
    await writeFile(target, html);
  }
  return { rel: `public${path}index.html`, changed, from };
}

/** Writes a file only when its bytes differ. Returns true if written. */
export async function writeIfChanged(file, content) {
  if (existsSync(file) && (await readFile(file, 'utf8')) === content) return false;
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, content);
  return true;
}
