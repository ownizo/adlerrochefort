#!/usr/bin/env node
/**
 * Takes the header off the ceiling.
 *
 * Two defects with one cause. The header was styled through the element
 * selector `nav` — 405 copies of `nav { position: fixed; top: 36px; height:
 * 76px; background: <dark green>; display: flex }` across the inline
 * stylesheets and the shared ones — so every other <nav> on the page was
 * styled as a second header. A breadcrumb trail, an "on this page" table of
 * contents, a category strip and a pagination row are all <nav> elements, and
 * each one became another fixed green bar pinned over the real header at the
 * top of the viewport, one painted on top of the next in document order. That
 * is what a phone was showing above every page: no logo, no menu, just the
 * breadcrumb and the contents list stacked over each other where the header
 * should have been.
 *
 * The pinning was the other half. `top: 36px` assumes the ASF disclosure above
 * the header is exactly 36px tall. It is 33px on a desktop and, on a phone, two
 * or three wrapped lines of nearer 50px — so the header sat on top of the
 * disclosure it was supposed to sit under. Because the header was out of the
 * flow, every page then had to guess how much padding its first element needed
 * to clear 112px of chrome: 136px on articles, 96px or 120px on the same
 * articles at mobile widths, and nothing at all on the generated /blog/ and
 * /seguros/ indexes, whose breadcrumb was simply underneath the header.
 *
 * So the header nav is named — `.site-nav` — and it sticks instead of being
 * fixed. The disclosure keeps its place in the flow above it and scrolls away;
 * from then on the header pins itself to the top edge, whatever height the
 * disclosure turned out to be. Nothing is overlapped, so nothing has to be
 * cleared, and the guessed paddings come out with it. The two commercial quote
 * pages had already been fixed exactly this way by hand — see the mobile block
 * of css/ar-landing.css, which this generalises to the whole site.
 *
 * Idempotent: a second run reports no changes.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { execSync } from 'node:child_process';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = join(ROOT, 'public');

// ---------------------------------------------------------------------------
// CSS
// ---------------------------------------------------------------------------

/**
 * A style rule as the cascade sees it: prelude, then declarations. Written with
 * a lookbehind rather than a consuming group so the `{` that opens a @media
 * block can still serve as the boundary of the first rule inside it — that is
 * where most of the mobile overrides live.
 */
const RULE = /(?<=^|[{};])([^{}]*?)\{([^{}]*)\}/g;

const selectorsOf = (prelude) =>
  prelude
    // The comment above a rule arrives glued to the front of its prelude.
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

/**
 * The header, named. Splitting a prelude on commas only finds selectors once
 * the comment in front of it is out of the way, since the comments here are
 * prose and full of commas of their own.
 */
function nameHeaderSelector(prelude) {
  const end = prelude.lastIndexOf('*/');
  const comment = end === -1 ? '' : prelude.slice(0, end + 2);
  const list = prelude.slice(comment.length);
  return (
    comment +
    list
      .split(',')
      .map((part) => (part.trim() === 'nav' ? part.replace(/\bnav\b/, '.site-nav') : part))
      .join(',')
  );
}

/**
 * Clearance a page reserved for the fixed header, and what the same rule needs
 * now that the header takes up room of its own. Every one of these is the old
 * 112px of chrome plus the gap the design actually wanted, so what is left
 * after the subtraction is that gap.
 */
const CLEARANCE = [
  ['.breadcrumb', [[136, 32], [120, 20], [96, 24]]],
  ['.legal-container', [[120, 40], [100, 32]]],
  ['.hero', [[150, 48], [140, 60], [112, 0]]],
  ['.lp-hero', [[150, 70], [130, 50], [100, 56]]],
  ['.lp-main', [[112, 0]]],
];

/** `position: fixed; top: 36px; left: 0; right: 0` -> `position: sticky; top: 0`. */
function unpin(decls) {
  let d = decls.replace(/(position\s*:\s*)fixed/g, '$1sticky');
  d = d.replace(/(\btop\s*:\s*)[^;}]+/g, '$10');
  // Offsets a sticky header has no use for, and which would shift it sideways
  // if the page ever scrolled horizontally.
  d = d.replace(/(?:^|;)[ \t\n]*(?:left|right)\s*:\s*0(?=\s*(?:;|$))/g, '');
  return d;
}

/**
 * The burger drawer was hung below 112px of fixed chrome. It now covers the
 * viewport and starts below the header, which stays above it and remains the
 * way to close it again.
 */
function redrawer(decls) {
  if (!/position\s*:\s*fixed/.test(decls)) return decls;
  let d = decls.replace(/(\btop\s*:\s*)112px/g, '$10');
  d = d.replace(/(\bpadding\s*:\s*)40px 28px/g, '$1124px 28px 40px');
  if (!/overflow-y/.test(d)) d = d.replace(/(\bpadding\s*:[^;]*;)/, '$1 overflow-y: auto;');
  return d;
}

/**
 * `overflow-x: hidden` on <body> makes the body its own scroll container, and a
 * sticky child of a container that never scrolls never sticks. `clip` hides the
 * same overflow without creating one. The hidden declaration stays in front of
 * it for browsers that do not know `clip`, where the header simply scrolls away
 * instead of pinning.
 */
function clipInsteadOfHidden(decls) {
  if (!/overflow-x\s*:\s*hidden/.test(decls) || /overflow-x\s*:\s*clip/.test(decls)) return decls;
  return decls.replace(/(overflow-x\s*:\s*hidden)/, '$1; overflow-x: clip');
}

/** In-page links used to land under the fixed header; now they clear the sticky one. */
function scrollPadding(decls) {
  if (!/scroll-behavior\s*:\s*smooth/.test(decls) || /scroll-padding-top/.test(decls)) return decls;
  return decls.replace(/(scroll-behavior\s*:\s*smooth)(;?)/, '$1; scroll-padding-top: 96px$2');
}

const clearance = (decls, pairs) =>
  pairs.reduce(
    (d, [from, to]) =>
      d.replace(
        new RegExp(`(padding(?:-top)?\\s*:\\s*)${from}px`, 'g'),
        `$1${to === 0 ? '0' : to + 'px'}`
      ),
    decls
  );

function transformCss(css) {
  return css.replace(RULE, (whole, prelude, decls) => {
    const sels = selectorsOf(prelude);
    if (!sels.length || sels[0].startsWith('@')) return whole;

    const head = sels.includes('nav') ? nameHeaderSelector(prelude) : prelude;

    let d = decls;
    if (sels.includes('nav') || sels.includes('.site-nav')) d = unpin(d);
    if (sels.includes('.mobile-nav')) d = redrawer(d);
    if (sels.includes('body') || sels.includes('html')) d = clipInsteadOfHidden(d);
    if (sels.includes('html')) d = scrollPadding(d);
    for (const [sel, pairs] of CLEARANCE) if (sels.includes(sel)) d = clearance(d, pairs);

    return head === prelude && d === decls ? whole : `${head}{${d}}`;
  });
}

const transformStyleBlocks = (html) =>
  html.replace(
    /(<style[^>]*>)([\s\S]*?)(<\/style>)/g,
    (m, open, css, close) => open + transformCss(css) + close
  );

// ---------------------------------------------------------------------------
// Markup
// ---------------------------------------------------------------------------

/**
 * The header is the first <nav> in the body on every page that has one — the
 * breadcrumb, the contents list, the category strip and the pagination all come
 * later. It gets the class the CSS now asks for; anything it already carried
 * (the Dutch cluster's `.on-dark`) is kept.
 */
function nameHeaderNav(html) {
  const from = html.indexOf('<body');
  if (from === -1) return html;
  const m = /<nav\b([^>]*)>/.exec(html.slice(from));
  if (!m) return html;
  const [tag, attrs] = m;
  if (/\bsite-nav\b/.test(attrs)) return html;
  const named = /class="/.test(attrs)
    ? tag.replace(/class="/, 'class="site-nav ')
    : tag.replace(/^<nav/, '<nav class="site-nav"');
  const at = from + m.index;
  return html.slice(0, at) + named + html.slice(at + tag.length);
}

// ---------------------------------------------------------------------------

const files = execSync('find public -name "*.html" -o -name "*.css"', { cwd: ROOT })
  .toString()
  .trim()
  .split('\n')
  .map((f) => join(ROOT, f))
  .sort();

const changed = [];
for (const file of files) {
  const before = await readFile(file, 'utf8');
  const after = file.endsWith('.css')
    ? transformCss(before)
    : nameHeaderNav(transformStyleBlocks(before));
  if (after !== before) {
    await writeFile(file, after);
    changed.push(relative(PUBLIC, file));
  }
}

console.log(`${changed.length} of ${files.length} files rewritten`);
