#!/usr/bin/env node
/**
 * Builds the author avatar the article template asks for.
 *
 * Every article footer renders /images/hugo-goncalves-avatar.webp with a .jpg
 * fallback at 56×56, and neither file existed — 170 pages were shipping a
 * broken image where the author is supposed to be. Both are derived here from
 * the full-size portrait, cropped square to head and shoulders and written at
 * 112px so the 56px slot stays sharp on a retina screen.
 *
 * The crop is fixed rather than face-detected: it is one photograph, and a
 * hardcoded box that is right beats a heuristic that might not be.
 */
import { createRequire } from 'node:module';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const sharp = createRequire(import.meta.url)('/opt/buildhome/node-deps/node_modules/sharp');
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const IMAGES = join(ROOT, 'public', 'images');

const SOURCE = join(IMAGES, 'hugo-goncalves.jpg'); // 928 × 1024
const CROP = { left: 200, top: 105, width: 500, height: 500 };
const SIZE = 112;

const base = sharp(SOURCE).extract(CROP).resize(SIZE, SIZE);

const jpg = await base.clone().jpeg({ quality: 86, mozjpeg: true }).toFile(join(IMAGES, 'hugo-goncalves-avatar.jpg'));
const webp = await base.clone().webp({ quality: 82 }).toFile(join(IMAGES, 'hugo-goncalves-avatar.webp'));

console.log(`hugo-goncalves-avatar.jpg   ${jpg.width}×${jpg.height}  ${(jpg.size / 1024).toFixed(1)} kB`);
console.log(`hugo-goncalves-avatar.webp  ${webp.width}×${webp.height}  ${(webp.size / 1024).toFixed(1)} kB`);
