import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { PAGES } from './nl-cluster.data.mjs';

// NL articles do not collect. They link to the ramo wizard, or to the
// homepage short form when there is no pillar or the page crosses ramos.
// The generator skips any page with ctaRoutesTo; this test is what keeps
// a later run from being the only thing that would notice a regression.

const routed = PAGES.filter((page) => page.ctaRoutesTo);

test('every NL page that declares ctaRoutesTo publishes that link and no form', () => {
  assert.ok(routed.length >= 13, `expected the NL article set, got ${routed.length}`);
  const failures = [];
  for (const page of routed) {
    const path = `public${page.url}index.html`;
    const html = readFileSync(path, 'utf8');
    if (/<form\b/.test(html)) failures.push(`${page.url}: still has a <form>`);
    if (html.includes('nl-offerte-aanvraag')) failures.push(`${page.url}: still names the generic form`);
    if (!html.includes(page.ctaRoutesTo)) failures.push(`${page.url}: missing ${page.ctaRoutesTo}`);
    if (!html.includes('24 uur')) failures.push(`${page.url}: CTA must keep the 24h SLA, matching zorg, woon and /nl/`);
    if (/3 offertes|drie offertes/i.test(html)) failures.push(`${page.url}: promises a quote count`);
  }
  assert.deepEqual(failures, []);
});

test('no published Dutch page still collects nl-offerte-aanvraag', () => {
  const leftovers = [];
  for (const page of PAGES) {
    const html = readFileSync(`public${page.url}index.html`, 'utf8');
    if (html.includes('name="nl-offerte-aanvraag"') || html.includes('value="nl-offerte-aanvraag"')) {
      leftovers.push(page.url);
    }
  }
  assert.deepEqual(leftovers, []);
});
