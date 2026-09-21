import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

// PT blog articles routed to the auto (individual) pillar wizard.
const AUTO_ARTICLE_PATHS = [
  'public/blog/seguro-auto-expatriados/index.html',
  'public/blog/seguro-automovel-guia-completo/index.html',
];
// Fleet insurance is a distinct B2B pillar (company-level, no policyholder
// date-of-birth field at all) — routed there instead of /seguros/auto/.
const FROTA_ARTICLE_PATH = 'public/blog/seguro-frota-erros-comuns/index.html';

test('PT auto blog CTAs link straight to the pillar wizard, with the positioning box mirrored and correct 24h SLA', () => {
  const failures = [];
  const pillarBox = readFileSync('public/seguros/auto/index.html', 'utf8').match(/<h3>Antes de preencher<\/h3>\s*(?:<p>.*?<\/p>\s*)+<\/div>/s)?.[0];
  const pillarParas = [...(pillarBox || '').matchAll(/<p>(.*?)<\/p>/g)].map(m => m[1]);
  for (const path of AUTO_ARTICLE_PATHS) {
    const html = readFileSync(path, 'utf8');
    if (html.includes('name="cotacao-blog"')) failures.push(`${path}: still has the raw embedded generic form`);
    if (!/href="\/seguros\/auto\/\?source=blog%3A[a-z0-9-]+#pedido"/.test(html)) failures.push(`${path}: missing ?source=blog:<slug> link to the auto pillar wizard`);
    if (html.includes('Receba 3 cotações')) failures.push(`${path}: still has the generic "Receba 3 cotações" promise`);
    if (!html.includes('Resposta em 24h úteis')) failures.push(`${path}: cta-topo-micro missing "Resposta em 24h úteis"`);
    const box = html.match(/<div class="hero-form-note quotation-before-fill"[\s\S]*?<\/div>/)?.[0];
    if (!box) { failures.push(`${path}: missing "Antes de preencher" positioning box`); continue; }
    for (const p of pillarParas) if (!box.includes(p)) failures.push(`${path}: box text does not match the auto pillar's own positioning text`);
  }
  assert.deepEqual(failures, []);
});

test('the frota (fleet) article links to its own B2B pillar, not /seguros/auto/, and has no positioning box (the pillar has none)', () => {
  const html = readFileSync(FROTA_ARTICLE_PATH, 'utf8');
  assert.ok(!html.includes('name="cotacao-blog"'), 'still has the raw embedded generic form');
  assert.match(html, /href="\/seguros\/frota\/\?source=blog%3Aseguro-frota-erros-comuns#pedido"/);
  assert.ok(!html.includes('quotation-before-fill'), 'frota pillar has no positioning box to mirror');
  assert.ok(html.includes('Resposta em 24h úteis'));
});
