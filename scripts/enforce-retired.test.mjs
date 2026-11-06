import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';

// Every path that answers 301/410 in public/_redirects (or is listed in
// data/retired-pages.json) must be absent from public/, the sitemaps and the
// llms files, and no internal link may point at it.
test('no retired page has come back', () => {
  const r = spawnSync(process.execPath, ['scripts/enforce-retired.mjs', '--check'], { encoding: 'utf8' });
  assert.equal(r.status, 0, r.stdout + r.stderr);
});
