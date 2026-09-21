import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

// PT blog articles routed to the empresarial pillar (Empresas + Hotelaria e
// AL categories), including D&O and RC Exploração per the resolution rule.
const EMPRESARIAL_ARTICLE_PATHS = [
  'public/blog/ransomware-portugal-riscos-ciberneticos/index.html',
  'public/blog/responsabilidade-administradores-seguro-do/index.html',
  'public/blog/revisao-apolice-empresarial/index.html',
  'public/blog/seguro-ciberseguranca-empresas-portugal/index.html',
  'public/blog/seguro-obra-construcao/index.html',
  'public/blog/seguros-empresas-distribuicao/index.html',
  'public/blog/seguros-obrigatorios-empresas-portugal/index.html',
  'public/blog/valores-segurados-desatualizados/index.html',
  'public/blog/comparar-propostas-seguro-hotel-erros-comuns/index.html',
  'public/blog/hotel-fenomenos-climaticos-extremos/index.html',
  'public/blog/rc-exploracao-unidades-turisticas/index.html',
  'public/blog/seguro-acidentes-pessoais-trabalhadores-hotelaria/index.html',
  'public/blog/seguro-multiriscos-hotel-portugal/index.html',
  'public/blog/seguros-bares-restaurantes-sinistros/index.html',
  'public/blog/seguros-obrigatorios-hotelaria-turismo/index.html',
  'public/blog/seguros-turismo-rural-hoteis-boutique/index.html',
];

test('PT empresarial blog CTAs link straight to the pillar form, with the positioning box mirrored and correct 48-72h SLA', () => {
  const failures = [];
  const pillarBox = readFileSync('public/seguros/empresarial/index.html', 'utf8').match(/<div class="hero-form-note">\s*<h3>Antes de preencher<\/h3>[\s\S]*?<\/div>/)?.[0];
  const pillarParas = [...(pillarBox || '').matchAll(/<p>(.*?)<\/p>/g)].map(m => m[1]);
  for (const path of EMPRESARIAL_ARTICLE_PATHS) {
    const html = readFileSync(path, 'utf8');
    if (html.includes('name="cotacao-blog"')) failures.push(`${path}: still has the raw embedded generic form`);
    if (!/href="\/seguros\/empresarial\/\?source=blog%3A[a-z0-9-]+#pedido"/.test(html)) failures.push(`${path}: missing ?source=blog:<slug> link to the empresarial pillar form`);
    if (html.includes('Receba 3 cotações')) failures.push(`${path}: still has the generic "Receba 3 cotações" promise`);
    if (!html.includes('Pedir análise')) failures.push(`${path}: CTA button text should mirror the pillar's own "Pedir análise" language`);
    if (!html.includes('Resposta em 48 a 72 horas úteis')) failures.push(`${path}: cta-topo-micro should promise the empresarial pillar's real 48-72h SLA, not the generic 24h`);
    const box = html.match(/<div class="hero-form-note quotation-before-fill"[\s\S]*?<\/div>/)?.[0];
    if (!box) { failures.push(`${path}: missing "Antes de preencher" positioning box`); continue; }
    for (const p of pillarParas) if (!box.includes(p)) failures.push(`${path}: box text does not match the empresarial pillar's own positioning text`);
    if (/\b\d[\d.]*\s*€/.test(box)) failures.push(`${path}: positioning box names a capital figure`);
  }
  assert.deepEqual(failures, []);
});
