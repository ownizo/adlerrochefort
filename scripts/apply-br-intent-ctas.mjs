#!/usr/bin/env node
/**
 * Brazilian cluster — intent-matched CTAs, internal links and segmentation
 * (November 2026).
 *
 * Why: an outside audit of the four PT guides for Brazilians found that every
 * one opened with the same "Peça uma análise do seu património" heading and
 * that every secondary route (the link under the short form and the closing
 * contact block) went to the generic hub, not to the product the reader was
 * researching. The guides also had almost no links into the product pages.
 *
 * What it does (idempotent — each replacement is skipped once applied):
 *   - Each guide: heading and subtitle above the short form match the guide's
 *     product; the form's message placeholder matches it too (the branch was
 *     already preselected by apply-short-blog-forms.mjs); the link under the
 *     form and the closing contact block go to that product's page and back to
 *     the preselected form (#pedido-rapido); WhatsApp text names the guide.
 *   - Each guide: contextual links in the body to the product pages and to the
 *     other guides.
 *   - Hub /seguros/brasileiros-em-portugal/: a "Com quem trabalhamos" section
 *     for the three segments we target (families moving, property buyers and
 *     investors, business owners and professionals).
 *   - The same body-link replacements are applied to
 *     scripts/brasileiros-hub.data.mjs, so a rebuild of the cluster keeps them.
 *     Re-run this script after scripts/build-audience-hubs.mjs.
 *
 * Editorial rules of the cluster still apply: no insurer named, no prices,
 * no health data requested in a form.
 *
 * Run: node scripts/apply-br-intent-ctas.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const wa = (msg) => `https://wa.me/351928226570?text=${encodeURIComponent(msg)}`;
const OLD_WA = wa('Olá, li o vosso artigo para brasileiros e gostaria de mais informação.');

const OLD_TOP = `<div class="cta-topo-title">Peça uma análise do seu património</div>
    <div class="cta-topo-subtitle">Análise gratuita por mediador de seguros registado na ASF. Sem compromisso.</div>`;
const OLD_PH = 'placeholder="Ex.: casa no Algarve, família de 4, mudança para Portugal em janeiro…"';
const OLD_ALT = '<a class="arsf-alt" href="/seguros/brasileiros-em-portugal/#pedido">Prefere enviar já todos os dados? Pedir análise →</a>';
const OLD_CONTACT = `<h2>Peça uma análise por escrito</h2>
      <p>Explicamos as apólices portuguesas com o vocabulário que conhece do Brasil — por escrito, antes de assinar.</p>
      <div class="article-contact-actions" style="display:flex;flex-wrap:wrap;gap:14px;align-items:center;">
        <a href="/seguros/brasileiros-em-portugal/#pedido" class="contact-link">Pedir uma análise</a>
        <a href="${OLD_WA}" class="contact-link" rel="noopener" target="_blank" style="background:#25D366;">WhatsApp</a>`;

const BTN = 'display:inline-block;padding:11px 20px;font-weight:600;text-decoration:none;';

function ctas({ title, sub, ph, altHref, altText, h2, text, btn, waMsg }) {
  return [
    [OLD_TOP, `<div class="cta-topo-title">${title}</div>
    <div class="cta-topo-subtitle">${sub}</div>`],
    [OLD_PH, `placeholder="${ph}"`],
    [OLD_ALT, `<a class="arsf-alt" href="${altHref}">${altText} →</a>`],
    [OLD_CONTACT, `<h2>${h2}</h2>
      <p>${text}</p>
      <div class="article-contact-actions" style="display:flex;flex-wrap:wrap;gap:14px;align-items:center;">
        <a href="#pedido-rapido" class="contact-link" style="${BTN}background:#292929;color:#fff;">${btn}</a>
        <a href="${altHref}" class="contact-link" style="${BTN}background:transparent;color:#292929;border:1px solid #292929;">${altText}</a>
        <a href="${wa(waMsg)}" class="contact-link" rel="noopener" target="_blank" style="${BTN}background:#25D366;color:#fff;">WhatsApp</a>`],
  ];
}

// Body replacements: applied to the published article AND to the data file.
const BODY = {
  'plano-de-saude-portugal-brasileiros': [
    ['<li><strong>Seguro português:</strong> cobre em Portugal;',
     '<li><strong><a href="/seguros/saude/">Seguro português</a>:</strong> cobre em Portugal;'],
    ['<li><strong>Seguro internacional:</strong> cobre em vários países,',
     '<li><strong><a href="/seguros/saude-internacional/brasileiros-no-exterior/">Seguro internacional</a>:</strong> cobre em vários países,'],
    ['As doenças que já existem antes da contratação ficam normalmente excluídas ou sujeitas a carência.',
     'As doenças que já existem antes da contratação ficam normalmente excluídas ou sujeitas a carência — veja <a href="/blog/seguro-saude-doencas-preexistentes-portugal/">como os seguros tratam as doenças pré-existentes</a>.'],
    ['<li>Morada em Portugal — e, com ela, o seguro de saúde português ou internacional.</li>',
     '<li>Morada em Portugal — e, com ela, o seguro de saúde português ou internacional. Se for comprar casa, veja também <a href="/blog/comprar-imovel-portugal-brasileiros-seguros/">os seguros da compra, passo a passo</a>.</li>'],
  ],
  'seguro-casa-portugal-brasileiros': [
    ['Se o capital ficar abaixo, aplica-se a <strong>regra proporcional</strong>:',
     'Se o capital ficar abaixo, aplica-se a <strong><a href="/blog/subseguro-portugal/">regra proporcional</a></strong>:'],
    ['Peça a apólice do condomínio ao administrador antes de contratar a sua.',
     'Peça a apólice do condomínio ao administrador antes de contratar a sua — e veja <a href="/blog/seguro-condominio-obrigatorio-guia/">o que o seguro de condomínio obrigatório cobre</a>.'],
    ['Arte, joias e relógios em valo',
     'Veja <a href="/seguros/habitacao/">o seguro de habitação para residências de elevado valor</a> e <a href="/private-clients/">Private Clients</a>. Arte, joias e relógios em valo'],
    ['Declare o uso real desde o início.</p>',
     'Declare o uso real desde o início. Veja <a href="/seguros/casa-desocupada/">seguro de casa desocupada</a>.</p>'],
  ],
  'cnh-carta-conducao-portugal-seguro-auto-brasileiros': [
    ['<h2>As coberturas, com os nomes portugueses</h2>',
     '<h2>As coberturas, com os nomes portugueses</h2>\n    <p>Pode ver o detalhe em <a href="/seguros/auto/">seguro automóvel</a>; o essencial, com o vocabulário do Brasil:</p>'],
    ['É uma das razões para comparar.</p>',
     'É uma das razões para comparar. Se está a tratar ao mesmo tempo da casa, veja <a href="/blog/seguro-casa-portugal-brasileiros/">o seguro residencial em Portugal para brasileiros</a>.</p>'],
  ],
  'comprar-imovel-portugal-brasileiros-seguros': [
    ['e o seguro de saúde segue regras próprias em cada caso.</p>',
     'e o seguro de saúde segue regras próprias em cada caso: veja <a href="/blog/plano-de-saude-portugal-brasileiros/">plano de saúde em Portugal para brasileiros</a>.</p>'],
    ['exige normalmente dois seguros: o <strong>multirriscos</strong> do imóvel',
     'exige normalmente dois seguros: o <strong><a href="/blog/seguro-casa-portugal-brasileiros/">multirriscos</a></strong> do imóvel'],
    ['Arrendar a turistas exige registo de Alojamento Local e um seguro de responsabilidade civil obrigatório;',
     'Arrendar a turistas exige registo de Alojamento Local e um <a href="/seguros/alojamento-local/">seguro de responsabilidade civil obrigatório</a>;'],
    ['pode indemnizar até ao capital máximo contratado, acima do valor de reconstrução.</p>',
     'pode indemnizar até ao capital máximo contratado, acima do valor de reconstrução. Veja <a href="/seguros/habitacao/">o seguro de habitação para residências de elevado valor</a> e <a href="/private-clients/">Private Clients</a>.</p>'],
  ],
};

const PAGES = {
  'plano-de-saude-portugal-brasileiros': ctas({
    title: 'Peça uma proposta de seguro de saúde para a sua família',
    sub: 'Português, internacional ou os dois — com cobertura no Brasil quando faz sentido. Mediador de seguros registado na ASF, sem compromisso.',
    ph: 'Ex.: casal e dois filhos, mudança de São Paulo em março, queremos continuar a ter médicos no Brasil…',
    altHref: '/seguros/saude-internacional/brasileiros-no-exterior/',
    altText: 'Ver o seguro de saúde internacional',
    h2: 'Compare o seguro de saúde da sua família, por escrito',
    text: 'Português, internacional ou os dois: comparamos as propostas lado a lado — âmbito geográfico, carências, exclusões e capitais — com o vocabulário que conhece do Brasil.',
    btn: 'Pedir proposta de seguro de saúde',
    waMsg: 'Olá, li o vosso guia sobre plano de saúde em Portugal para brasileiros e gostaria de uma proposta.',
  }),
  'seguro-casa-portugal-brasileiros': ctas({
    title: 'Peça uma proposta de seguro de casa',
    sub: 'Multirriscos pelo valor de reconstrução, com o sismo e o recheio decididos consigo. Mediador de seguros registado na ASF, sem compromisso.',
    ph: 'Ex.: apartamento T3 em Lisboa, com condomínio; queremos incluir sismo e recheio…',
    altHref: '/seguros/habitacao/',
    altText: 'Ver o seguro de habitação',
    h2: 'Seguro de casa: proposta por escrito, antes de assinar',
    text: 'Comparamos capitais, franquias — incluindo a do sismo — e exclusões, e explicamos cada apólice com o vocabulário que conhece do Brasil.',
    btn: 'Pedir proposta de seguro de casa',
    waMsg: 'Olá, li o vosso guia de seguro residencial para brasileiros e gostaria de uma proposta.',
  }),
  'cnh-carta-conducao-portugal-seguro-auto-brasileiros': ctas({
    title: 'Peça uma proposta de seguro automóvel',
    sub: 'Com a sua CNH e a declaração da seguradora brasileira levadas em conta desde o início. Mediador de seguros registado na ASF, sem compromisso.',
    ph: 'Ex.: carro a comprar em Portugal, CNH desde 2012, declaração da seguradora brasileira sem sinistros…',
    altHref: '/seguros/auto/',
    altText: 'Ver o seguro automóvel',
    h2: 'Seguro automóvel: proposta por escrito, antes de assinar',
    text: 'Levamos o seu histórico do Brasil às seguradoras com que trabalhamos e comparamos coberturas, franquias e garantias, uma a uma.',
    btn: 'Pedir proposta de seguro automóvel',
    waMsg: 'Olá, li o vosso guia sobre a CNH e o seguro automóvel e gostaria de uma proposta.',
  }),
  'comprar-imovel-portugal-brasileiros-seguros': ctas({
    title: 'Vai comprar casa em Portugal? Trate dos seguros antes da escritura',
    sub: 'Multirriscos do imóvel e, se houver crédito, o seguro de vida comparado com o do banco. Mediador de seguros registado na ASF, sem compromisso.',
    ph: 'Ex.: moradia em Cascais, escritura em fevereiro, crédito habitação com dois titulares…',
    altHref: '/seguros/habitacao/',
    altText: 'Ver o seguro de habitação',
    h2: 'Os seguros da sua compra, por escrito',
    text: 'Multirriscos com início no dia da escritura e, com crédito, o seguro de vida comparado com o do banco pelo custo total — com o vocabulário que conhece do Brasil.',
    btn: 'Pedir proposta para a compra',
    waMsg: 'Olá, li o vosso guia sobre comprar imóvel em Portugal sendo brasileiro e gostaria de uma proposta.',
  }),
};

const HUB_ANCHOR = '\n\n<section class="lp-section">\n  <h2>O que a lei exige</h2>';
const HUB_MARK = '<!-- ar-br-segments -->';
const HUB_SECTION = `\n\n${HUB_MARK}
<section class="lp-section" id="com-quem-trabalhamos">
  <h2>Com quem trabalhamos</h2>
  <p>Não somos um comparador de preços. Trabalhamos sobretudo com três perfis de clientes brasileiros, para quem as coberturas, os capitais e a forma como a seguradora trata um sinistro pesam mais do que o prémio mais baixo.</p>
  <div class="lp-grid"><div class="lp-card"><h3>Famílias que se mudam para Portugal</h3><p>Seguro de saúde português ou internacional para toda a família, com cobertura no Brasil quando faz sentido, e a casa segura desde o primeiro dia. Veja <a href="/blog/plano-de-saude-portugal-brasileiros/">plano de saúde em Portugal para brasileiros</a> e <a href="/seguros/saude-internacional/brasileiros-no-exterior/">seguro de saúde internacional</a>.</p></div><div class="lp-card"><h3>Compradores e investidores imobiliários</h3><p>Da escritura em Lisboa, Cascais ou no Algarve ao arrendamento: multirriscos pelo valor de reconstrução, o seguro de vida do crédito comparado com o do banco e moradias de valor elevado com vistoria. Veja <a href="/blog/comprar-imovel-portugal-brasileiros-seguros/">comprar imóvel em Portugal sendo brasileiro</a> e <a href="/private-clients/">Private Clients</a>.</p></div><div class="lp-card"><h3>Empresários e profissionais</h3><p>Quem abre empresa ou exerce uma profissão em Portugal: responsabilidade civil profissional e multirriscos empresarial, com a casa e a saúde da família tratadas no mesmo sítio. Veja <a href="/seguros/responsabilidade-civil-profissional/">RC profissional</a> e <a href="/seguros/empresarial/">multirriscos empresarial</a>.</p></div></div>
</section>`;

function apply(text, pairs, label, problems) {
  for (const [from, to] of pairs) {
    if (text.includes(to)) continue;
    if (!text.includes(from)) { problems.push(`${label}: not found → ${from.slice(0, 70)}…`); continue; }
    text = text.replace(from, to);
  }
  return text;
}

const problems = [];
for (const [slug, pairs] of Object.entries(PAGES)) {
  const f = join(ROOT, 'public/blog', slug, 'index.html');
  const before = readFileSync(f, 'utf8');
  const after = apply(apply(before, pairs, slug, problems), BODY[slug], slug, problems);
  if (after !== before) writeFileSync(f, after);
  console.log(`${after !== before ? 'updated' : 'unchanged'}  /blog/${slug}/`);
}

const dataFile = join(ROOT, 'scripts/brasileiros-hub.data.mjs');
let data = readFileSync(dataFile, 'utf8');
const dataBefore = data;
for (const [slug, pairs] of Object.entries(BODY)) data = apply(data, pairs, `data:${slug}`, problems);
if (data !== dataBefore) writeFileSync(dataFile, data);
console.log(`${data !== dataBefore ? 'updated' : 'unchanged'}  scripts/brasileiros-hub.data.mjs`);

const hubFile = join(ROOT, 'public/seguros/brasileiros-em-portugal/index.html');
let hub = readFileSync(hubFile, 'utf8');
if (!hub.includes(HUB_MARK)) {
  if (!hub.includes(HUB_ANCHOR)) problems.push('hub: anchor section not found');
  else { hub = hub.replace(HUB_ANCHOR, HUB_SECTION + HUB_ANCHOR); writeFileSync(hubFile, hub); console.log('updated    /seguros/brasileiros-em-portugal/'); }
} else console.log('unchanged  /seguros/brasileiros-em-portugal/');

if (problems.length) { console.error('\nProblems:\n' + problems.join('\n')); process.exit(1); }
