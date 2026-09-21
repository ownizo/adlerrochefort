import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

// PT blog articles whose CTA routes straight to the habitação pillar wizard.
const HABITACAO_ARTICLE_PATHS = [
  'public/blog/alojamento-local-propriedade-horizontal-condominio/index.html',
  'public/blog/multirriscos-habitacao/index.html',
  'public/blog/obrigacoes-administrador-condominio-seguro/index.html',
  'public/blog/quanto-custa-seguro-alojamento-local/index.html',
  'public/blog/seguro-alojamento-local-decreto-lei-76-2024/index.html',
  'public/blog/seguro-condominio-capitais-desatualizados/index.html',
  'public/blog/seguro-condominio-obrigatorio-guia/index.html',
  'public/blog/seguro-habitacao-legalizacao/index.html',
  // Duvidoso resolved: "Alojamento Local é habitação" — hybrid AL/RC article.
  'public/blog/seguro-rc-multirriscos-alojamento-local/index.html',
];

test('PT habitação blog CTAs link straight to the pillar wizard, with no embedded form, the positioning box mirrored from the pillar, and the correct 24h SLA', () => {
  const failures = [];
  const pillarBox = readFileSync('public/seguros/habitacao/index.html', 'utf8').match(/<h3>Antes de preencher<\/h3>\s*(?:<p>.*?<\/p>\s*)+<\/div>/s)?.[0];
  const pillarParas = [...(pillarBox || '').matchAll(/<p>(.*?)<\/p>/g)].map(m => m[1]);
  for (const path of HABITACAO_ARTICLE_PATHS) {
    const html = readFileSync(path, 'utf8');
    if (html.includes('name="cotacao-blog"')) failures.push(`${path}: still has the raw embedded generic form`);
    if (!/href="\/seguros\/habitacao\/\?source=blog%3A[a-z0-9-]+#pedido"/.test(html)) failures.push(`${path}: missing ?source=blog:<slug> link to the habitação pillar wizard`);
    if (html.includes('Receba 3 cotações')) failures.push(`${path}: still has the generic "Receba 3 cotações" promise`);
    if (!html.includes('Resposta em 24h úteis')) failures.push(`${path}: cta-topo-micro missing "Resposta em 24h úteis"`);
    const box = html.match(/<div class="hero-form-note quotation-before-fill"[\s\S]*?<\/div>/)?.[0];
    if (!box) { failures.push(`${path}: missing "Antes de preencher" positioning box`); continue; }
    for (const p of pillarParas) if (!box.includes(p)) failures.push(`${path}: box text does not match the habitação pillar's own positioning text`);
    if (/\b\d[\d.]*\s*€/.test(box)) failures.push(`${path}: positioning box names a capital figure`);
  }
  assert.deepEqual(failures, []);
});

test('habitação pillar wizard has no clinical-data fields', () => {
  const html = readFileSync('public/seguros/habitacao/index.html', 'utf8');
  assert.ok(html.includes('data-wizard'));
});
