import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

// PT blog articles whose CTA routes straight to the private-clients pillar's own form.
const PRIVATE_CLIENTS_ARTICLE_PATHS = [
  'public/blog/investimento-americano-luxo-portugal/index.html',
  'public/blog/seguros-private-clients-portugal/index.html',
  // Missed in the original PR #232 batch — "Private Clients" is this
  // article's own blog category, and it's explicitly listed under
  // "Análises relacionadas" on the /private-clients/ pillar itself.
  'public/blog/subseguro-portugal/index.html',
];

test('PT private-clients blog CTAs link straight to the pillar form, with no embedded form and the correct 24h SLA', () => {
  const failures = [];
  for (const path of PRIVATE_CLIENTS_ARTICLE_PATHS) {
    const html = readFileSync(path, 'utf8');
    if (html.includes('name="cotacao-blog"')) failures.push(`${path}: still has the raw embedded generic form`);
    if (!/href="\/private-clients\/\?source=blog%3A[a-z0-9-]+#pedido"/.test(html)) failures.push(`${path}: missing ?source=blog:<slug> link to the private-clients pillar form`);
    if (!html.includes('Pedir análise →')) failures.push(`${path}: CTA button text should mirror the pillar's own "Pedir análise" language, not the generic "cotação" wording`);
    if (html.includes('Receba 3 cotações')) failures.push(`${path}: still has the generic "Receba 3 cotações" promise`);
    if (!html.includes('Resposta em 24h úteis')) failures.push(`${path}: cta-topo-micro missing "Resposta em 24h úteis"`);
    if (html.includes('quotation-before-fill')) failures.push(`${path}: private-clients pillar has no positioning box to mirror — none expected here`);
  }
  assert.deepEqual(failures, []);
});

test('private-clients pillar form has no capital field and requires the "what to protect" checkbox group', () => {
  const html = readFileSync('public/private-clients/index.html', 'utf8');
  const capitalField = /name="[^"]*capital[^"]*"/i.test(html);
  assert.equal(capitalField, false, 'private-clients form should not ask for a capital figure');
  assert.ok(html.includes('data-required-group="review"'), 'expected the "O que pretende proteger?" required checkbox group');
});
