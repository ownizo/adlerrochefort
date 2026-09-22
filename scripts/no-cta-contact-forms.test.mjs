import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

// The 2 "no quote CTA" blog pages (PT + EN), each with its own dedicated
// contact form instead of the generic quote-request CTA.
const PAGES = [
  {
    path: 'public/blog/adler-pro-plataforma-saas/index.html',
    formName: 'adler-pro-interesse',
    fields: ['nome', 'email', 'empresa', 'mensagem'],
  },
  {
    path: 'public/blog/parcerias-imobiliarias-comissoes/index.html',
    formName: 'parcerias-imobiliarias',
    fields: ['nome', 'agencia', 'email', 'telefone'],
  },
  {
    path: 'public/en/blog/adler-pro-saas-platform/index.html',
    formName: 'adler-pro-interest',
    fields: ['name', 'email', 'company', 'message'],
  },
  {
    path: 'public/en/blog/real-estate-partnerships-commissions/index.html',
    formName: 'real-estate-partnership',
    fields: ['name', 'agency', 'email', 'phone'],
  },
];

test('no-CTA blog pages have their own dedicated contact form, not the generic quote form', () => {
  const failures = [];
  for (const { path, formName, fields } of PAGES) {
    const html = readFileSync(path, 'utf8');
    if (html.includes('name="cotacao-blog"') || html.includes('name="quote-blog"')) {
      failures.push(`${path}: still has the generic quote-request form`);
    }
    if (!html.includes(`name="${formName}"`)) failures.push(`${path}: missing its own form name (${formName})`);
    for (const field of fields) {
      if (!new RegExp(`name="${field}"`).test(html)) failures.push(`${path}: missing field ${field}`);
    }
    if (!/name="(rgpd|gdpr_consent)" value="(sim|yes)"[^>]*required/.test(html)) {
      failures.push(`${path}: missing a required GDPR consent checkbox`);
    }
    if (!new RegExp(`getElementById\\('${formName}-source'\\)`).test(html)) {
      failures.push(`${path}: missing the source_url auto-population script`);
    }
    if (html.includes('Receba 3 cotações') || html.includes('Get 3 quotes within 24 hours')) {
      failures.push(`${path}: still has the generic quote-CTA title, which is misleading here (this is not a quote request)`);
    }
  }
  assert.deepEqual(failures, []);
});
