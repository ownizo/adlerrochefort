import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { MARKETS } from './lib/market-registry.mjs';
import { LANGS } from './lib/lang-selector.mjs';
import { HANDLED_FORMS } from '../netlify/functions/submission-created.mjs';
import { CRM_HANDLED_FORMS, classifySubmission } from '../netlify/functions/lib/lead-classification.mjs';
import { buildQuoteRequestRow } from '../netlify/functions/lib/quote-requests-sync.mjs';

// Every registered language market must be wired into the rest of the site —
// the checks scripts/add-market-to-corpus.mjs exists to satisfy. This file
// iterates MARKETS rather than naming clusters (same reasoning as
// market-short-form.test.mjs), so a market added later — Italian after
// Spanish — is covered the moment it is registered, and a registration that
// skipped the integration step fails here instead of in production.

const html = (url) => readFileSync(`public${url}index.html`, 'utf8');
const head = (url) => html(url).split('</head>')[0];
const HAND_BUILT_HUBS = ['/', '/en/', '/nl/', '/fr/', '/de/'];

for (const market of MARKETS) {
  const formNames = [market.formName, ...market.pages.filter((p) => p.wizard).map((p) => p.wizard.formName)];

  test(`${market.key}: every form is in the notification flow and the CRM classification`, () => {
    for (const name of formNames) {
      assert.ok(HANDLED_FORMS[name], `${name} missing from submission-created.mjs HANDLED_FORMS`);
      assert.ok(CRM_HANDLED_FORMS.has(name), `${name} missing from lead-classification.mjs FORM_CLASSIFICATION`);
      assert.notEqual(classifySubmission(name, {}).entityType, 'ambiguous', `${name} classifies as ambiguous`);
    }
  });

  test(`${market.key}: the shared form's consent value "${market.consentValue}" is recorded as consent given`, () => {
    const row = buildQuoteRequestRow(market.formName, {
      name: 'Test Person',
      email: 'test@example.com',
      consent: market.consentValue,
    });
    assert.equal(row.consentimento.aceite, true);
  });

  test(`${market.key}: the language selector offers it`, () => {
    assert.ok(LANGS.some((l) => l.key === market.key), `${market.key} has no row in lang-selector LANGS`);
    const row = LANGS.find((l) => l.key === market.key);
    for (const url of HAND_BUILT_HUBS) {
      assert.match(html(url), new RegExp(`<a href="/${market.key}/" lang="${row.html}"`), `${url}: no selector row for /${market.key}/`);
    }
  });

  test(`${market.key}: its hub and the hand-built hubs declare each other in hreflang`, () => {
    for (const url of HAND_BUILT_HUBS) {
      assert.match(head(url), new RegExp(`hreflang="${market.hreflang}" href="https://adlerrochefort.com/${market.key}/"`), `${url} does not declare /${market.key}/`);
    }
    assert.match(head(`/${market.key}/`), /hreflang="pt-PT" href="https:\/\/adlerrochefort.com\/"/);
    assert.match(head(`/${market.key}/`), /hreflang="x-default" href="https:\/\/adlerrochefort.com\/"/);
  });

  test(`${market.key}: every page parses its JSON-LD and keeps FAQPage in step with the visible FAQ`, () => {
    for (const page of market.pages) {
      const src = html(page.url);
      const blocks = [...src.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]));
      assert.ok(blocks.length, `${page.url}: no JSON-LD`);
      const faq = blocks.flatMap((b) => b['@graph'] || [b]).find((n) => n['@type'] === 'FAQPage');
      if (!page.faq?.length) continue;
      assert.deepEqual(
        faq.mainEntity.map((q) => q.name),
        page.faq.map((q) => q.q),
        `${page.url}: FAQPage questions differ from the visible FAQ`
      );
      assert.match(src, new RegExp(`<html lang="${market.htmlLang}"`));
    }
  });
}
