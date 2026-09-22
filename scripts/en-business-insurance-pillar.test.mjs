import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const PILLAR_PATH = 'public/en/business-insurance-portugal/index.html';

test('EN business insurance pillar mirrors the PT empresarial pillar: required fields, NIF, ramos pretendidos, RGPD, 48-72h SLA', () => {
  const html = readFileSync(PILLAR_PATH, 'utf8');
  const form = html.match(/<form class="contact-form" id="quoteForm"[\s\S]*?<\/form>/)?.[0];
  assert.ok(form, 'business-insurance-quote form not found');

  assert.match(form, /id="q-name" name="name"[^>]*required/);
  assert.match(form, /id="q-email" name="email"[^>]*required/);
  assert.match(form, /id="q-phone" name="phone"[^>]*required/);
  assert.match(form, /id="q-company" name="company"[^>]*required/);
  assert.match(form, /id="q-nif" name="nif"[^>]*required/, 'Company NIF must be required');

  assert.ok(form.includes('Covers you’re interested in') || form.includes("Covers you're interested in"));
  for (const ramo of [
    'Workplace accidents insurance',
    'Multi-risk insurance',
    'Public liability',
    'Cyber risk',
    'D&amp;O (Directors &amp; Officers)',
    'Construction works insurance',
    'Fleet insurance',
  ]) {
    assert.ok(
      form.includes(`name="ramos_pretendidos" value="${ramo}"`),
      `missing ramos_pretendidos option: ${ramo}`
    );
  }
  assert.ok(form.includes('data-required-group="ramos_pretendidos"'), 'ramos_pretendidos group must be required');

  assert.match(form, /name="rgpd" value="yes"[^>]*required/);

  // No "Antes de preencher"-equivalent box on the EN pillar — PT-only per spec.
  assert.ok(!html.includes('Before you fill'), 'EN pillar should not have a translated "before you fill this in" box');
});

test('EN business insurance pillar promises 48-72h, not 24h, and has no leftover professional-liability template content', () => {
  const html = readFileSync(PILLAR_PATH, 'utf8');
  assert.ok(!html.includes('24 business hours'), 'no stray 24h SLA copy should remain');
  const matches = html.match(/48[- ]to[- ]72 business hours|48-72h/g) || [];
  assert.ok(matches.length >= 2, `expected at least 2 mentions of the 48-72h SLA, found ${matches.length}`);
  assert.ok(!html.includes('data-wizard'), 'this pillar is a single-page form, not a wizard, like its PT counterpart');
  assert.ok(!html.includes('quote-nationality.js'), 'no nationality field on this form, so no need for its script');
});

test('EN and PT empresarial pillars carry reciprocal hreflang, and the EN pillar is in the sitemap', () => {
  const en = readFileSync(PILLAR_PATH, 'utf8');
  const pt = readFileSync('public/seguros/empresarial/index.html', 'utf8');
  assert.ok(en.includes('hreflang="pt-PT" href="https://adlerrochefort.com/seguros/empresarial/"'));
  assert.ok(pt.includes('hreflang="en-GB" href="https://adlerrochefort.com/en/business-insurance-portugal/"'));
  const sitemap = readFileSync('public/sitemap-pages.xml', 'utf8');
  assert.ok(sitemap.includes('https://adlerrochefort.com/en/business-insurance-portugal/'));
});
