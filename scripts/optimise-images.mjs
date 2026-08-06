#!/usr/bin/env node
/**
 * Block 7.3 — images on the critical path.
 *
 * Three problems, in descending order of how much they cost a visitor:
 *
 *   1. /images/hugo-goncalves.png is 5.55 MB and sits on both homepages with
 *      no lazy attribute and no dimensions. It renders in a 380px grid column.
 *      Every homepage visit downloaded a 2376x3168 portrait to draw it at a
 *      sixth of that.
 *
 *   2. /images/logo-adler-rochefort.png is 331 KB, 3499px wide, and appears in
 *      the nav of 218 pages — above the fold, every single time. It renders at
 *      44-60px tall. Re-encoding it as a 1000px palette PNG keeps the same URL
 *      and the same appearance at any plausible pixel density, so no markup
 *      changes and no risk to the design. WebP is measurably *larger* for this
 *      artwork, so the PNG stays a PNG.
 *
 *   3. The article featured image carries loading="lazy". It sits directly
 *      under the author block, which makes it the LCP element on most article
 *      pages — and lazy-loading the LCP element delays it by a round trip,
 *      which is the opposite of what the attribute is for. Cards further down
 *      the page keep loading="lazy"; they are the case it was written for.
 *
 * WebP is added as a <source>, never as a replacement: the original JPEG stays
 * as the <img> fallback, so nothing breaks for a client that cannot decode it.
 * Cards get a 640px variant because they render at 640x360 and were being
 * served 1200px sources. The two blog indexes turn out to use SVG and CSS
 * gradients rather than photographs, so the cards this affects are the ones on
 * the homepage and in the related-article grids.
 */
import { readFile, writeFile, readdir, stat } from 'node:fs/promises';
import { join, dirname, basename, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { globSync } from 'node:fs';
import { createRequire } from 'node:module';

const sharp = createRequire(import.meta.url)('/opt/buildhome/node-deps/node_modules/sharp');

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = join(ROOT, 'public');
const IMAGES = join(PUBLIC, 'images');
const BLOG_IMAGES = join(IMAGES, 'blog');

const kb = (n) => `${(n / 1024).toFixed(0)} KB`;
const size = async (p) => (await stat(join(PUBLIC, p)).catch(() => ({ size: 0 }))).size;

const before = {};
const after = {};
const notes = [];

// --- 1. blog rasters: a full-size and a card-size WebP ------------------------
const blogFiles = (await readdir(BLOG_IMAGES)).filter((f) => /\.(jpe?g|png)$/i.test(f));
const derived = new Map(); // '/images/blog/x.jpg' -> { webp, webp640, width, height }

let origBytes = 0;
let webpBytes = 0;
let cardBytes = 0;

for (const file of blogFiles) {
  const src = join(BLOG_IMAGES, file);
  const stem = basename(file, extname(file));
  const meta = await sharp(src).metadata();

  const full = join(BLOG_IMAGES, `${stem}.webp`);
  const card = join(BLOG_IMAGES, `${stem}-640.webp`);
  await sharp(src).webp({ quality: 76, effort: 6 }).toFile(full);
  await sharp(src).resize({ width: 640 }).webp({ quality: 74, effort: 6 }).toFile(card);

  origBytes += (await stat(src)).size;
  webpBytes += (await stat(full)).size;
  cardBytes += (await stat(card)).size;

  derived.set(`/images/blog/${file}`, {
    webp: `/images/blog/${stem}.webp`,
    webp640: `/images/blog/${stem}-640.webp`,
    width: meta.width,
    height: meta.height,
  });
}
notes.push(
  `blog rasters: ${blogFiles.length} images, ${kb(origBytes)} JPEG/PNG -> ` +
    `${kb(webpBytes)} full-size WebP, ${kb(cardBytes)} card-size WebP`
);

// --- 2. the nav logo, re-encoded in place -------------------------------------
const LOGO = '/images/logo-adler-rochefort.png';
before.logo = await size(LOGO);
const logoOut = await sharp(join(PUBLIC, LOGO))
  .resize({ width: 1000 })
  .png({ palette: true, quality: 90, effort: 9 })
  .toBuffer({ resolveWithObject: true });
await writeFile(join(PUBLIC, LOGO), logoOut.data);
const LOGO_W = logoOut.info.width;
const LOGO_H = logoOut.info.height;
after.logo = logoOut.data.length;
notes.push(
  `logo: ${kb(before.logo)} (3499px) -> ${kb(after.logo)} (${LOGO_W}px), same URL, renders at 44-60px`
);

// --- 3. the founder portrait --------------------------------------------------
const PORTRAIT = join(IMAGES, 'hugo-goncalves.png');
before.portrait = (await stat(PORTRAIT)).size;
const portraitJpg = await sharp(PORTRAIT)
  .resize({ width: 640 })
  .jpeg({ quality: 82, mozjpeg: true })
  .toBuffer({ resolveWithObject: true });
await writeFile(join(IMAGES, 'hugo-goncalves-640.jpg'), portraitJpg.data);
const portraitWebp = await sharp(PORTRAIT).resize({ width: 640 }).webp({ quality: 80, effort: 6 }).toBuffer();
await writeFile(join(IMAGES, 'hugo-goncalves-640.webp'), portraitWebp);
const PORTRAIT_W = portraitJpg.info.width;
const PORTRAIT_H = portraitJpg.info.height;
after.portrait = portraitWebp.length;
notes.push(
  `founder portrait: ${kb(before.portrait)} PNG -> ${kb(portraitJpg.data.length)} JPEG / ` +
    `${kb(after.portrait)} WebP at ${PORTRAIT_W}x${PORTRAIT_H}. The original stays on disk; ` +
    `nothing references it now.`
);

// --- 4. markup ----------------------------------------------------------------
const data = JSON.parse(await readFile(join(ROOT, 'data', 'articles.json'), 'utf8'));

// Keyed by language as well as by path: fifteen images are shared between a
// Portuguese article and its English counterpart, so a map keyed on the path
// alone hands the English sentence to the Portuguese page.
const altBySrc = { pt: new Map(), en: new Map() };
for (const lang of ['pt', 'en']) {
  for (const a of data.articles[lang]) {
    if (a.image && a.imageAlt) altBySrc[lang].set(a.image, a.imageAlt);
  }
}

// The 24 SVG featured images need no re-encoding — they are vector and a few
// kilobytes each — but they render with style="width:100%" and no height, so
// the browser cannot reserve their box and the text below them jumps when they
// arrive. Their intrinsic size comes from the viewBox.
const svgDims = new Map();
for (const file of await readdir(BLOG_IMAGES)) {
  if (!file.endsWith('.svg')) continue;
  const box = (await readFile(join(BLOG_IMAGES, file), 'utf8')).match(
    /viewBox="0 0 ([\d.]+) ([\d.]+)"/
  );
  if (box) svgDims.set(`/images/blog/${file}`, { width: Math.round(+box[1]), height: Math.round(+box[2]) });
}

/** Keeps every attribute the tag already had, minus the ones being replaced. */
const strip = (tag, ...names) =>
  names.reduce((t, n) => t.replace(new RegExp(`\\s${n}="[^"]*"`, 'g'), ''), tag);

const counts = { cards: 0, featured: 0, portrait: 0, logoDims: 0, altImproved: 0, svgReserved: 0 };
const files = globSync('**/*.html', { cwd: PUBLIC }).sort();

for (const rel of files) {
  const file = join(PUBLIC, rel);
  let html = await readFile(file, 'utf8');
  const original = html;
  const lang = rel.startsWith('en/') ? 'en' : 'pt';

  // The <source> element sits between <picture> and <img>, so the opening group
  // has to allow for it — otherwise a second run matches from <img> onward,
  // fails the already-done check, and rewrites markup it has already rewritten.
  html = html.replace(/(<picture>\s*(?:<source\b[^>]*>\s*)*)?<img\b[^>]*>(\s*<\/picture>)?/g, (whole) => {
    if (whole.startsWith('<picture>')) return whole; // already done, or the author avatar
    if (whole.endsWith('</picture>')) return whole; // inside a <picture> this match cannot see the start of
    let tag = whole;
    const src = (tag.match(/src="([^"]*)"/) || [])[1];
    if (!src) return whole;

    // -- the nav logo: dimensions only, so the browser can reserve the box ----
    // Marked eager on purpose. It is the first thing painted on every page, so
    // deferring it would trade a visible header for nothing: the file is 20 KB.
    if (src === LOGO) {
      if (/\swidth="/.test(tag) && /\sheight="/.test(tag)) {
        const fixed = strip(tag, 'width', 'height', 'loading').replace(
          /\s*\/?>$/,
          ` width="${LOGO_W}" height="${LOGO_H}" loading="eager">`
        );
        if (fixed !== tag) counts.logoDims += 1;
        return fixed;
      }
      counts.logoDims += 1;
      return tag.replace(
        /\s*\/?>$/,
        ` width="${LOGO_W}" height="${LOGO_H}" loading="eager" decoding="async">`
      );
    }

    // -- the founder portrait on the two homepages ---------------------------
    if (src === '/images/hugo-goncalves.png') {
      counts.portrait += 1;
      const rest = strip(tag, 'src', 'width', 'height', 'loading', 'decoding').replace(/^<img/, '');
      return (
        `<picture>` +
        `<source type="image/webp" srcset="/images/hugo-goncalves-640.webp">` +
        `<img src="/images/hugo-goncalves-640.jpg"${rest.replace(
          /\s*\/?>$/,
          ` width="${PORTRAIT_W}" height="${PORTRAIT_H}" loading="lazy" decoding="async">`
        )}` +
        `</picture>`
      );
    }

    const d = derived.get(src);
    const svg = svgDims.get(src);
    const featured = /class="[^"]*article-featured-image/.test(tag);
    if (!d && !svg && !featured) return whole;

    // -- the article featured image: the LCP element on an article page ------
    if (featured) {
      counts.featured += 1;
      const alt = altBySrc[lang].get(src);
      if (alt && /alt="(?:Imagem do Blog|Blog Image)[^"]*"/i.test(tag)) {
        tag = tag.replace(/alt="[^"]*"/, `alt="${alt.replace(/"/g, '&quot;')}"`);
        counts.altImproved += 1;
      }
      let img = strip(tag, 'loading', 'fetchpriority', 'decoding', 'width', 'height');
      const box = d || svgDims.get(src);
      const dims = box ? ` width="${box.width}" height="${box.height}"` : '';
      if (!d && box) counts.svgReserved += 1;
      img = img.replace(/\s*\/?>$/, `${dims} fetchpriority="high" decoding="async">`);
      return d ? `<picture><source type="image/webp" srcset="${d.webp}">${img}</picture>` : img;
    }

    // -- everything else pointing at a blog raster is a card -----------------
    counts.cards += 1;
    let img = strip(tag, 'decoding');
    if (!/\sloading="/.test(img)) img = img.replace(/\s*\/?>$/, ' loading="lazy">');
    img = img.replace(/\s*\/?>$/, ' decoding="async">');
    if (!d) {
      // An SVG card: nothing to re-encode, but it still needs a reserved box.
      if (!(/\swidth="/.test(img) && /\sheight="/.test(img))) {
        img = strip(img, 'width', 'height').replace(
          /\s*\/?>$/,
          ` width="${svg.width}" height="${svg.height}">`
        );
        counts.svgReserved += 1;
      }
      return img;
    }
    return `<picture><source type="image/webp" srcset="${d.webp640}">${img}</picture>`;
  });

  if (html !== original) await writeFile(file, html);
}

console.log(notes.map((n) => `  ${n}`).join('\n'));
console.log(`\nmarkup:`);
console.log(`  card images given a 640px WebP source: ${counts.cards}`);
console.log(`  featured images switched to eager + fetchpriority=high: ${counts.featured}`);
console.log(`  SVG images given a reserved box from their viewBox: ${counts.svgReserved}`);
console.log(`  featured alt texts taken from the data source: ${counts.altImproved}`);
console.log(`  founder portraits rewritten: ${counts.portrait}`);
console.log(`  nav logos given explicit dimensions: ${counts.logoDims}`);
