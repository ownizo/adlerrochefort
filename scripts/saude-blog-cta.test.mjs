import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

// PT blog articles whose CTA routes straight to the saúde pillar wizard.
const SAUDE_ARTICLE_PATHS = [
  'public/blog/allianz-april-medis-seguro-saude-portugal-2026/index.html',
  'public/blog/seguro-saude-doencas-preexistentes-portugal/index.html',
  'public/blog/seguro-saude-expatriados-portugal/index.html',
  'public/blog/seguro-saude-portugal/index.html',
];

test('PT saúde blog CTAs link straight to the pillar wizard, with no embedded form and the correct 24h SLA', () => {
  const failures = [];
  for (const path of SAUDE_ARTICLE_PATHS) {
    const html = readFileSync(path, 'utf8');
    if (html.includes('name="cotacao-blog"')) failures.push(`${path}: still has the raw embedded generic form`);
    if (!/href="\/seguros\/saude\/\?source=blog%3A[a-z0-9-]+#pedido"/.test(html)) failures.push(`${path}: missing ?source=blog:<slug> link to the saúde pillar wizard`);
    if (html.includes('Receba 3 cotações')) failures.push(`${path}: still has the generic "Receba 3 cotações" promise`);
    // Saúde's real SLA is 24h — unlike RC, this was already correct in the
    // generic form's copy, so it's untouched, not "fixed".
    if (!html.includes('Resposta em 24h úteis')) failures.push(`${path}: cta-topo-micro missing "Resposta em 24h úteis"`);
    if (html.includes('quotation-before-fill')) failures.push(`${path}: saúde pillar has no positioning box to mirror — none expected here`);
  }
  assert.deepEqual(failures, []);
});

test('saúde pillar wizard has no capital field and no clinical-data fields', () => {
  const html = readFileSync('public/seguros/saude/index.html', 'utf8');
  const capitalField = /name="[^"]*capital[^"]*"/i.test(html);
  assert.equal(capitalField, false, 'saúde pillar form should not ask for a capital figure');
});
