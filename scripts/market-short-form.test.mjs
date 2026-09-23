import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { MARKETS } from './lib/market-registry.mjs';

// Especificação v2, Parte 4. The five market clusters (PL/SE/DK/ZH/IL) each
// share one lead form across four pages — the hub, the guide, the moving page
// and the buying-a-home page. `shortForm` moves that form to the same shape
// "analise-gratuita" (PT), "free-analysis" (EN) and "de-angebot-anfrage" (DE)
// already use, for all four pages at once: a cluster never carries the short
// form on its hub and the long one three clicks away.
//
// This file iterates MARKETS rather than naming clusters, so a market gets
// covered the moment it opts in — the rollout was one cluster per PR, and an
// un-flipped cluster is checked for the old shape instead, not skipped.

const CORE = ['name', 'email', 'phone', 'insurance_type'];
const SHORT_ONLY = ['company'];
const LONG_ONLY = ['localidade', 'country', 'residence_status', 'start_date', 'preferred_language'];

function sharedFormPages(market) {
  // A page with its own wizard has its own form-name and is not part of this.
  return market.pages.filter((p) => !p.wizard);
}

function formBlock(url) {
  const html = readFileSync(`public${url}index.html`, 'utf8');
  const m = html.match(/<form\b[^>]*class="lead-form"[\s\S]*?<\/form>/);
  assert.ok(m, `${url}: no shared lead form found`);
  return m[0];
}

for (const market of MARKETS) {
  const pages = sharedFormPages(market);

  test(`${market.key}: all ${pages.length} pages sharing "${market.formName}" carry the same form shape — no per-page exception`, () => {
    const shapes = pages.map((p) => {
      const names = [...formBlock(p.url).matchAll(/\bname="([a-z_]+)"/g)].map((m) => m[1]);
      return JSON.stringify([...new Set(names)].sort());
    });
    assert.equal(new Set(shapes).size, 1, `pages sharing one form-name diverged: ${pages.map((p) => p.url).join(', ')}`);
  });

  test(`${market.key}: the shared form ${market.shortForm ? 'is the short shape' : 'is still the long shape'}`, () => {
    for (const page of pages) {
      const block = formBlock(page.url);
      const has = (n) => new RegExp(`\\bname="${n}"`).test(block);

      for (const n of CORE) assert.ok(has(n), `${page.url}: missing core field "${n}"`);
      assert.ok(has('consent'), `${page.url}: missing the consent checkbox`);

      for (const n of SHORT_ONLY) {
        assert.equal(has(n), Boolean(market.shortForm), `${page.url}: "${n}" should ${market.shortForm ? '' : 'not '}be present`);
      }
      for (const n of LONG_ONLY) {
        assert.equal(has(n), !market.shortForm, `${page.url}: "${n}" should ${market.shortForm ? 'not ' : ''}be present`);
      }
    }
  });

  if (market.shortForm) {
    test(`${market.key}: the company field is optional and labelled in ${market.name}'s own language`, () => {
      for (const page of pages) {
        const block = formBlock(page.url);
        const field = block.match(/<input[^>]*name="company"[^>]*>/);
        assert.ok(field, `${page.url}: no company field`);
        assert.doesNotMatch(field[0], /\brequired\b/, `${page.url}: company must stay optional`);
      }
      assert.ok(market.ui.f.company, `${market.key}: PL_UI-style f.company label missing`);
      assert.ok(market.ui.f.companyPh, `${market.key}: f.companyPh placeholder missing`);
    });

    test(`${market.key}: the short form keeps an optional message and drops the branch questionnaire`, () => {
      for (const page of pages) {
        const html = readFileSync(`public${page.url}index.html`, 'utf8');
        const block = formBlock(page.url);
        assert.match(block, /name="message"/, `${page.url}: the optional message stays`);
        assert.doesNotMatch(block, /form-branch-fields/, `${page.url}: branch questionnaire must be gone`);
        assert.doesNotMatch(block, /data-branch-select/, `${page.url}: branch select hook must be gone`);
        assert.doesNotMatch(html, /lead-branch-fields\.js/, `${page.url}: branch script is only for pages that still have groups`);
      }
    });

    test(`${market.key}: the consent checkbox value is one the backend recognises as consent given`, async () => {
      const { buildQuoteRequestRow } = await import('../netlify/functions/lib/quote-requests-sync.mjs');
      const row = buildQuoteRequestRow(market.formName, {
        name: 'Test', email: 't@example.com', consent: market.consentValue,
      });
      assert.equal(row.consentimento.aceite, true,
        `"${market.consentValue}" is rendered as this cluster's consent value but is not recognised by the backend`);
    });
  }
}
