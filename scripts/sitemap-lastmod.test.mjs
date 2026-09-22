import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync, copyFileSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const git = (args) => execFileSync('git', args, { cwd: ROOT, encoding: 'utf8' }).trim();

// `lastmod` is a claim about when a page last actually changed. The canonical
// chrome passes (hreflang.mjs, lang-switcher.mjs, unify-chrome.mjs) reindent
// the lines they own, and this script used to read `git status` — which cannot
// tell reindentation from an edit — so running any of them first handed every
// page they touched today's date. A run of the generator must never be the
// reason a date moves.
const PAGE = 'public/blog/index.html';
const SITEMAP = join(ROOT, 'public/sitemap-pages.xml');
const LOC = '<loc>https://adlerrochefort.com/blog/</loc>';

function lastmodForBlogIndex() {
  const xml = readFileSync(SITEMAP, 'utf8');
  const at = xml.indexOf(LOC);
  assert.notEqual(at, -1, 'the /blog/ entry must exist in the sitemap');
  return xml.slice(at, at + 400).match(/<lastmod>([^<]+)<\/lastmod>/)[1];
}

function run() {
  execFileSync('node', ['scripts/generate-sitemap.mjs'], { cwd: ROOT, stdio: 'ignore' });
}

test('a whitespace-only edit does not move a page\'s lastmod', (t) => {
  // Skipped rather than failed where the premise cannot hold: a dirty /blog/
  // page means a real edit is in flight and this test would fight it.
  if (git(['status', '--porcelain', '--', PAGE])) return t.skip('/blog/ has uncommitted changes');

  const abs = join(ROOT, PAGE);
  const backups = ['public/sitemap.xml', 'public/sitemap-pages.xml', 'public/sitemap-blog.xml']
    .map((f) => [join(ROOT, f), join(ROOT, f + '.lastmod-test-bak')]);
  for (const [src, bak] of backups) copyFileSync(src, bak);
  const original = readFileSync(abs, 'utf8');
  const committed = git(['log', '-1', '--date=short', '--pretty=format:%ad', '--', PAGE]);

  try {
    const i = original.indexOf('<body');
    writeFileSync(abs, original.slice(0, i) + '  ' + original.slice(i));
    assert.equal(git(['diff', '--name-only', '--ignore-all-space', '--', PAGE]), '',
      'the edit must be whitespace-only for this test to mean anything');
    run();
    assert.equal(lastmodForBlogIndex(), committed,
      'reindenting a page must leave its lastmod on the date it last really changed');

    writeFileSync(abs, original.replace('</body>', '<!-- lastmod test --></body>'));
    assert.notEqual(git(['diff', '--name-only', '--ignore-all-space', '--', PAGE]), '',
      'the second edit must be substantive');
    run();
    const today = new Date().toISOString().slice(0, 10);
    assert.equal(lastmodForBlogIndex(), today, 'a real edit must still move lastmod to today');
  } finally {
    writeFileSync(abs, original);
    for (const [src, bak] of backups) { copyFileSync(bak, src); rmSync(bak); }
  }
});
