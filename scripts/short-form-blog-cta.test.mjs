import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

// PT blog articles that don't map to any specific ramo pillar — routed to
// the homepage's generic "analise-gratuita" hero form instead.
const SHORT_FORM_ARTICLE_PATHS = [
  'public/blog/20-anos-turismo-seguros-hotelaria/index.html',
  'public/blog/seguro-titulo-imovel-portugal/index.html',
];

test('PT catch-all blog CTAs link straight to the homepage\'s generic "analise-gratuita" form, with no embedded form and the correct 24h SLA', () => {
  const failures = [];
  const homeHtml = readFileSync('public/index.html', 'utf8');
  const homeBox = homeHtml.match(/<div class="hero-form-note">\s*<h3>Antes de preencher<\/h3>[\s\S]*?<\/div>/)?.[0];
  const homeParas = [...(homeBox || '').matchAll(/<p>(.*?)<\/p>/g)].map(m => m[1]);
  assert.ok(homeParas.length > 0, 'could not find the homepage hero "Antes de preencher" box to mirror');

  for (const path of SHORT_FORM_ARTICLE_PATHS) {
    const html = readFileSync(path, 'utf8');
    if (html.includes('name="cotacao-blog"')) failures.push(`${path}: still has the raw embedded generic form`);
    if (!/href="\/\?source=blog%3A[a-z0-9-]+#inicio"/.test(html)) failures.push(`${path}: missing ?source=blog:<slug> link to the homepage's generic form`);
    if (html.includes('Receba 3 cotações')) failures.push(`${path}: still has the generic "Receba 3 cotações" promise`);
    if (!html.includes('Solicitar Análise Gratuita')) failures.push(`${path}: CTA button text should mirror the homepage form's own "Solicitar Análise Gratuita" language`);
    if (!html.includes('Resposta em 24h úteis')) failures.push(`${path}: cta-topo-micro missing "Resposta em 24h úteis"`);
    const box = html.match(/<div class="hero-form-note quotation-before-fill"[\s\S]*?<\/div>/)?.[0];
    if (!box) { failures.push(`${path}: missing "Antes de preencher" positioning box`); continue; }
    for (const p of homeParas) if (!box.includes(p)) failures.push(`${path}: box text does not match the homepage form's own positioning text`);
  }
  assert.deepEqual(failures, []);
});

test('the homepage "analise-gratuita" form exists with nome, email, telefone, optional empresa and tipo de seguro, and captures source_url', () => {
  const html = readFileSync('public/index.html', 'utf8');
  const form = html.match(/<form class="hero-card-form" name="analise-gratuita"[\s\S]*?<\/form>/)?.[0];
  assert.ok(form, 'analise-gratuita form not found');
  assert.match(form, /id="nome" name="nome"[^>]*required/);
  assert.match(form, /id="email" name="email"[^>]*required/);
  assert.match(form, /id="telefone" name="telefone"/);
  assert.ok(!/id="telefone" name="telefone"[^>]*required/.test(form), 'telefone should stay optional');
  assert.match(form, /id="empresa" name="empresa"/);
  assert.ok(!/id="empresa" name="empresa"[^>]*required/.test(form), 'empresa should stay optional on this catch-all form');
  assert.match(form, /id="tipo_seguro" name="tipo_seguro"/);
  assert.ok(form.includes('name="source_url"'), 'form must capture source_url for ?source=blog:<slug> attribution');
});
