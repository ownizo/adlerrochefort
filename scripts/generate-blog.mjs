#!/usr/bin/env node
/**
 * Block 1 — blog architecture.
 *
 * Generates, from `data/articles.json` alone:
 *   /blog/                      index, 12 articles per page
 *   /blog/pagina/N/             pagination
 *   /blog/categoria/{slug}/     six PT category pages (paginated the same way)
 *   /blog/feed.xml              RSS 2.0
 *   /en/blog/                   EN index, 12 per page
 *   /en/blog/page/N/            EN pagination
 *   /en/blog/feed.xml           EN RSS 2.0
 *
 * EN category pages are deliberately NOT generated: the EN taxonomy proposal
 * is written to data/en-categories-proposal.json for sign-off first.
 */
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import {
  ROOT,
  PUBLIC,
  ORIGIN,
  page,
  writePage,
  writeSharedStylesheet,
  esc,
  jsonLd,
  breadcrumbLd,
  ORGANIZATION,
} from './lib/chrome.mjs';
import { grid, breadcrumbHtml, pagination, metaHead, CTA_PT, CTA_EN } from './lib/blog-parts.mjs';

const PER_PAGE = 12;
const data = JSON.parse(await readFile(join(ROOT, 'data', 'articles.json'), 'utf8'));
const CATEGORIES = data.categories.pt;

const byDateDesc = (a, b) => (b.published || '').localeCompare(a.published || '');
const ptArticles = data.articles.pt.filter((a) => a.status === 'published').sort(byDateDesc);
const enArticles = data.articles.en.filter((a) => a.status === 'published').sort(byDateDesc);

const written = [];
const chunk = (arr) => {
  const out = [];
  for (let i = 0; i < arr.length; i += PER_PAGE) out.push(arr.slice(i, i + PER_PAGE));
  return out.length ? out : [[]];
};

// ---------------------------------------------------------------------------
// Copy
// ---------------------------------------------------------------------------

const BLOG_INTRO = `<p>Esta é a secção de análise da Adler &amp; Rochefort. Reunimos aqui o que aprendemos a ler nas apólices que passam pelas nossas mãos: as coberturas que a lei portuguesa impõe, as que as seguradoras oferecem como opção e as que quase ninguém contrata até precisar delas. Escrevemos sobre seguro automóvel e TVDE, hotelaria e alojamento local, riscos empresariais, habitação e saúde — sempre com o enquadramento legal aplicável em Portugal e a referência ao diploma ou norma que o sustenta.</p>
<p>Não publicamos comparações de preços nem rankings de seguradoras. Publicamos o que muda a decisão: uma exclusão redigida de forma ambígua, um capital seguro desatualizado, uma atividade declarada que já não corresponde à que exerce. Se um artigo lhe levantar uma dúvida sobre a sua própria apólice, fale connosco — somos um mediador de seguros registado na ASF com o n.º 425591790/3 e a análise não tem custo.</p>`;

const CATEGORY_INTROS = {
  'seguros-auto-tvde': `<p>O seguro automóvel é o único seguro obrigatório para quem circula em Portugal, mas a obrigação legal — responsabilidade civil perante terceiros — é também a cobertura mais estreita que existe. Tudo o resto (danos próprios, quebra isolada de vidros, assistência em viagem, veículo de substituição, proteção do condutor) é facultativo e é aí que as apólices se distinguem umas das outras.</p>
<p>Para quem conduz em TVDE a questão muda de natureza. A atividade de transporte individual e remunerado de passageiros em veículo descaracterizado está regulada pela Lei n.º 45/2018 e exige uma apólice que cubra o transporte remunerado de passageiros. Uma apólice particular comum não cobre essa utilização: em caso de sinistro com passageiro a bordo, a seguradora pode recusar o pagamento por agravamento não declarado do risco. O mesmo raciocínio aplica-se às frotas empresariais, onde a titularidade dos veículos, o número de condutores e a existência de utilização mista alteram por completo a forma como o risco é subscrito.</p>
<p>Nesta categoria reunimos os artigos sobre seguro automóvel particular, TVDE, frotas de empresa e as situações intermédias — condutores expatriados com carta estrangeira, veículos importados, viaturas afetas a duas atividades. O objetivo é o mesmo em todos: identificar antes do sinistro aquilo que a apólice não cobre.</p>`,

  'hotelaria-turismo': `<p>Alojamento local, hotelaria e restauração partilham um traço que os distingue de quase todos os outros negócios: recebem pessoas dentro do espaço explorado. Isso transforma a responsabilidade civil de exploração numa cobertura central e não acessória, e é essa a razão pela qual o legislador português a tornou obrigatória para o alojamento local através do Decreto-Lei n.º 76/2024, que revê o regime anterior fixado no Decreto-Lei n.º 128/2014.</p>
<p>Na prática, os riscos concentram-se em pontos previsíveis: quedas em zonas molhadas, piscinas sem vedação conforme, intoxicações alimentares, incêndio na cozinha, danos causados por hóspedes ao edifício e a terceiros, e a perda de exploração durante o período de reparação. A cobertura de perda de exploração é frequentemente a que falta — um restaurante que fecha três meses por incêndio recebe a indemnização pelos danos materiais, mas suporta sozinho a receita que deixou de gerar e os salários que continuou a pagar.</p>
<p>Há ainda a questão da atividade declarada. Uma moradia registada como alojamento local mas segurada como habitação própria permanente não está coberta enquanto explorada turisticamente. É uma divergência silenciosa, que só se manifesta no momento da participação do sinistro.</p>
<p>Os artigos desta categoria cobrem o regime legal do alojamento local, os seguros obrigatórios em hotelaria e turismo, sinistros típicos em bares e restaurantes e a articulação entre a apólice do proprietário e a do explorador.</p>`,

  'seguros-empresariais': `<p>Uma empresa em Portugal tem obrigações de seguro que variam com a atividade, mas há um núcleo comum: o seguro de acidentes de trabalho é obrigatório para todos os trabalhadores por conta de outrem, e os trabalhadores independentes têm um regime próprio de proteção. A partir daí, a lei impõe seguros específicos a atividades reguladas — construção, mediação, transporte, saúde, entre outras — e deixa o resto à avaliação de cada empresa.</p>
<p>O multirriscos empresarial é a apólice que agrega a proteção do património: edifício, recheio, equipamento, mercadoria, e normalmente responsabilidade civil de exploração. A discussão relevante raramente é o prémio; é o capital seguro. Um capital desatualizado ativa a regra proporcional, e uma empresa segurada por metade do valor de reconstrução recebe metade da indemnização mesmo num sinistro parcial.</p>
<p>Ao lado disso ganharam peso riscos que há dez anos eram marginais. A responsabilidade civil profissional cobre o erro técnico e o conselho errado. A responsabilidade de administradores e gerentes (D&amp;O) responde por decisões de gestão. O seguro de riscos cibernéticos cobre o ransomware, a interrupção de atividade e a notificação à Comissão Nacional de Proteção de Dados após uma violação de dados pessoais — uma obrigação que o RGPD impõe em 72 horas.</p>
<p>Reunimos aqui as análises sobre seguros obrigatórios, multirriscos, responsabilidade civil, riscos cibernéticos, obras e construção, e a revisão periódica de carteiras empresariais.</p>`,

  'habitacao-particulares': `<p>Em Portugal só um seguro relacionado com a casa é verdadeiramente obrigatório: o seguro de incêndio sobre a fração e sobre as partes comuns, imposto pelo Código Civil e pelo regime da propriedade horizontal. Todo o resto — danos por água, fenómenos sísmicos, roubo, responsabilidade civil familiar, recheio, quebra de vidros — depende do multirriscos habitação que cada proprietário decidir contratar. Quem tem crédito à habitação contrata normalmente a apólice exigida pelo banco, e é aí que começa a maior parte dos problemas: essa apólice protege primeiro a garantia do banco e só depois o património de quem lá vive.</p>
<p>Os pontos que mais vezes falham são três. O capital do edifício, que deve corresponder ao custo de reconstrução e não ao valor de mercado nem ao valor da escritura. O recheio, quase sempre subestimado, e onde os bens de valor elevado exigem declaração individual. E a cláusula de desocupação, que suspende ou limita coberturas em casas vazias durante períodos prolongados — uma situação comum em segundas habitações.</p>
<p>Há ainda o enquadramento documental: legalização do imóvel, licença de utilização, obras não participadas às finanças. Uma divergência entre a realidade física do imóvel e o que consta na apólice ou na caderneta predial pode reduzir ou anular a indemnização.</p>
<p>Esta categoria agrupa os artigos sobre multirriscos habitação, condomínios, risco de título na compra e a proteção do património familiar.</p>`,

  'seguros-saude': `<p>O acesso à saúde em Portugal assenta no Serviço Nacional de Saúde, e o seguro de saúde privado não o substitui: complementa-o, sobretudo no tempo de espera para consulta de especialidade, meios complementares de diagnóstico e cirurgia programada. É essa a comparação útil — não «seguro contra SNS», mas o que cada um resolve melhor e a que custo.</p>
<p>A variável que determina quase tudo numa apólice de saúde é a forma como trata as doenças pré-existentes. A regra dominante no mercado português é a exclusão: patologias diagnosticadas ou sintomáticas antes da adesão ficam de fora, muitas vezes de forma vitalícia. Existem exceções e caminhos alternativos, nomeadamente as mutualidades e alguns planos de grupo, mas cada um traz condições próprias de admissão. A declaração inicial de saúde é o documento crítico de todo o processo: uma omissão, ainda que involuntária, permite à seguradora anular o contrato ou recusar o sinistro.</p>
<p>A seguir vêm os períodos de carência, que suspendem coberturas nos primeiros meses e são mais longos em parto e estomatologia; os copagamentos e franquias; e os limites anuais por cobertura, que raramente são visíveis na comparação comercial.</p>
<p>Nesta categoria analisamos planos de saúde individuais e de grupo, doenças pré-existentes, carências, rede convencionada e a articulação com o SNS.</p>`,

  'tecnologia-parcerias': `<p>A mediação de seguros mudou menos na cobertura do que na gestão. O que antes era uma pasta de apólices em papel é hoje um problema de dados: saber que apólices tem uma empresa, quando renovam, que capitais estão desatualizados, que atividade está declarada em cada uma e onde há duplicação de coberturas entre contratos assinados em anos diferentes.</p>
<p>É esse o campo desta categoria. Escrevemos sobre a tecnologia que usamos para gerir carteiras — a plataforma Os Meus Seguros e o trabalho de consolidação documental que a alimenta —, sobre a forma como a informação estruturada altera a conversa de renovação, e sobre o que a inteligência artificial faz e não faz de útil na análise de condições gerais.</p>
<p>Reunimos também aqui os artigos sobre parcerias e canais de referência. A Adler &amp; Rochefort trabalha com mediadores imobiliários, gestores de alojamento local, escritórios de contabilidade e empresas de relocation, e a mecânica dessas relações — quem apresenta o cliente, quem faz a análise técnica, como se estrutura a comissão e o que a regulação da ASF permite — é matéria que interessa a quem pondera trabalhar connosco.</p>
<p>Por fim, incluímos as peças mais institucionais: percurso, formação, seguradoras parceiras e a experiência acumulada no setor do turismo que deu origem à especialização em hotelaria.</p>`,
};

const CATEGORY_META = {
  'seguros-auto-tvde': {
    title: 'Seguros Automóvel e TVDE | Insights | Adler & Rochefort',
    description:
      'Análises sobre seguro automóvel, TVDE e frotas em Portugal: obrigações legais, coberturas facultativas e exclusões que só aparecem no sinistro.',
  },
  'hotelaria-turismo': {
    title: 'Hotelaria, Turismo e Alojamento Local | Insights | Adler & Rochefort',
    description:
      'Seguros obrigatórios no alojamento local e na hotelaria em Portugal, responsabilidade civil de exploração, perda de exploração e sinistros típicos.',
  },
  'seguros-empresariais': {
    title: 'Seguros Empresariais | Insights | Adler & Rochefort',
    description:
      'Multirriscos empresarial, responsabilidade civil, D&O, riscos cibernéticos e acidentes de trabalho: o que a lei portuguesa exige e o que fica de fora.',
  },
  'habitacao-particulares': {
    title: 'Habitação e Particulares | Insights | Adler & Rochefort',
    description:
      'Multirriscos habitação, condomínios e património familiar: capital de reconstrução, cláusula de desocupação e o que o seguro do banco não protege.',
  },
  'seguros-saude': {
    title: 'Seguros de Saúde | Insights | Adler & Rochefort',
    description:
      'Seguro de saúde em Portugal: doenças pré-existentes, carências, copagamentos, rede convencionada e articulação com o SNS.',
  },
  'tecnologia-parcerias': {
    title: 'Tecnologia e Parcerias | Insights | Adler & Rochefort',
    description:
      'Gestão digital de apólices, a plataforma Os Meus Seguros, parcerias de referência e o percurso da Adler & Rochefort na mediação de seguros.',
  },
};

// ---------------------------------------------------------------------------
// PT — /blog/ and /blog/pagina/N/
// ---------------------------------------------------------------------------

const categoryNav = (activeSlug) => {
  const chips = [
    `<a class="category-chip${activeSlug ? '' : ' active'}" href="/blog/">Todos<span class="category-chip-count">${ptArticles.length}</span></a>`,
    ...CATEGORIES.map((c) => {
      const n = ptArticles.filter((a) => a.category === c.slug).length;
      return `<a class="category-chip${activeSlug === c.slug ? ' active' : ''}" href="/blog/categoria/${c.slug}/">${esc(c.short)}<span class="category-chip-count">${n}</span></a>`;
    }),
  ];
  return `<nav class="category-nav" aria-label="Categorias">${chips.join('')}</nav>`;
};

const itemListLd = (items, name) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name,
  itemListElement: items.map((a, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    url: ORIGIN + a.url,
    name: a.title,
  })),
});

async function buildListing({
  articles,
  basePath,
  pageHref,
  h1,
  intro,
  meta,
  crumbs,
  nav,
  lang,
  cta,
  collectionName,
  feed,
}) {
  const pages = chunk(articles);
  for (let i = 0; i < pages.length; i++) {
    const n = i + 1;
    const path = n === 1 ? basePath : pageHref(n);
    const suffix = n === 1 ? '' : lang === 'en' ? ` — page ${n}` : ` — página ${n}`;
    const head = metaHead({
      title: n === 1 ? meta.title : meta.title.replace(' | ', `${suffix} | `),
      description: meta.description,
      canonical: path,
      prev: n === 2 ? basePath : n > 2 ? pageHref(n - 1) : undefined,
      next: n < pages.length ? pageHref(n + 1) : undefined,
      robots: 'index, follow',
      feed,
    });
    const body = [
      breadcrumbHtml(crumbs),
      `<header class="page-head">
  <div class="section-eyebrow">Insights</div>
  <h1 class="section-title" style="margin-bottom:28px;">${h1}</h1>
  <div class="page-intro">${n === 1 ? intro : `<p>${esc(collectionName)}${suffix}.</p>`}</div>
</header>`,
      nav,
      grid(pages[i]),
      pagination(n, pages.length, (x) => (x === 1 ? basePath : pageHref(x)), lang),
      cta,
    ].join('\n\n');

    const bodyEnd = [
      jsonLd({ '@context': 'https://schema.org', '@graph': [ORGANIZATION] }),
      jsonLd(breadcrumbLd(crumbs.map((c) => ({ name: c.name, url: c.url })))),
      jsonLd(itemListLd(pages[i], collectionName)),
    ].join('\n');

    written.push(await writePage(path.replace(/^\/|\/$/g, ''), page({ lang: lang === 'en' ? 'en-GB' : 'pt-PT', head, body, bodyEnd })));
  }
  return pages.length;
}

await writeSharedStylesheet();

const ptPages = await buildListing({
  articles: ptArticles,
  basePath: '/blog/',
  pageHref: (n) => `/blog/pagina/${n}/`,
  h1: 'Insights &mdash; <em>Análises sobre seguros em Portugal</em>',
  intro: BLOG_INTRO,
  meta: {
    title: 'Insights — Análises sobre seguros em Portugal | Adler & Rochefort',
    description:
      'Análises sobre seguros em Portugal: obrigações legais, coberturas essenciais e exclusões — automóvel e TVDE, alojamento local, empresas, habitação e saúde.',
  },
  crumbs: [
    { name: 'Início', url: '/' },
    { name: 'Insights', url: '/blog/' },
  ],
  nav: categoryNav(null),
  lang: 'pt',
  cta: CTA_PT,
  collectionName: 'Insights',
});

// ---------------------------------------------------------------------------
// PT category pages
// ---------------------------------------------------------------------------

for (const c of CATEGORIES) {
  const items = ptArticles.filter((a) => a.category === c.slug);
  const landing = c.landing
    ? `\n<p><strong>Precisa de uma proposta?</strong> Veja a página de <a href="${c.landing}">${esc(c.landingLabel)}</a>.</p>`
    : '';
  await buildListing({
    articles: items,
    basePath: `/blog/categoria/${c.slug}/`,
    pageHref: (n) => `/blog/categoria/${c.slug}/pagina/${n}/`,
    h1: esc(c.title),
    intro: CATEGORY_INTROS[c.slug] + landing,
    meta: CATEGORY_META[c.slug],
    crumbs: [
      { name: 'Início', url: '/' },
      { name: 'Insights', url: '/blog/' },
      { name: c.title, url: `/blog/categoria/${c.slug}/` },
    ],
    nav: categoryNav(c.slug),
    lang: 'pt',
    cta: CTA_PT,
    collectionName: c.title,
  });
}

// ---------------------------------------------------------------------------
// EN — /en/blog/ (index only; taxonomy pending sign-off)
// ---------------------------------------------------------------------------

const EN_INTRO = `<p>This is where Adler &amp; Rochefort writes up what we learn from the policies that cross our desk. The audience is the one we actually serve in English: people who have moved to Portugal, or own property here, and are trying to work out how Portuguese insurance behaves when it is tested — what the law requires, what the standard wording quietly excludes, and where an internationally-minded household or business is exposed by a policy written for a domestic one.</p>
<p>The subjects follow that reality rather than mirroring our Portuguese section: health cover and residency requirements, homes on the Algarve coast and in Lisbon, holiday lets and Alojamento Local, valuables and collections, boats, cross-border company structures and professional liability. We name the applicable Portuguese legislation where it matters and we do not publish price rankings. If something here raises a question about your own policy, ask us — we are an insurance intermediary registered with the ASF under n.º 425591790/3 and the review costs nothing.</p>`;

const enPages = await buildListing({
  articles: enArticles,
  basePath: '/en/blog/',
  pageHref: (n) => `/en/blog/page/${n}/`,
  h1: 'Insights &mdash; <em>Insurance in Portugal, explained</em>',
  intro: EN_INTRO,
  meta: {
    title: 'Insights — Insurance in Portugal, explained | Adler & Rochefort',
    description:
      'English-language analysis of insurance in Portugal: health cover, homes and holiday lets, valuables, marine, business and liability — by an ASF-registered intermediary.',
  },
  crumbs: [
    { name: 'Home', url: '/en/' },
    { name: 'Insights', url: '/en/blog/' },
  ],
  nav: '',
  lang: 'en',
  cta: CTA_EN,
  collectionName: 'Insights',
});

// ---------------------------------------------------------------------------
// RSS
// ---------------------------------------------------------------------------

const rss = (items, { path, title, description, lang }) => {
  const latest = items.slice(0, 30);
  const pubDate = (d) => new Date(d).toUTCString();
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${esc(title)}</title>
<link>${ORIGIN}${path.replace(/feed\.xml$/, '')}</link>
<description>${esc(description)}</description>
<language>${lang}</language>
<atom:link href="${ORIGIN}${path}" rel="self" type="application/rss+xml"/>
${latest
  .map(
    (a) => `<item>
<title>${esc(a.title)}</title>
<link>${ORIGIN}${a.url}</link>
<guid isPermaLink="true">${ORIGIN}${a.url}</guid>
<pubDate>${pubDate(a.published)}</pubDate>
<description>${esc(a.excerpt || a.description || '')}</description>
</item>`
  )
  .join('\n')}
</channel>
</rss>
`;
};

await mkdir(join(PUBLIC, 'blog'), { recursive: true });
await writeFile(
  join(PUBLIC, 'blog', 'feed.xml'),
  rss(ptArticles, {
    path: '/blog/feed.xml',
    title: 'Adler & Rochefort — Insights',
    description: 'Análises sobre seguros em Portugal.',
    lang: 'pt-PT',
  })
);
written.push('public/blog/feed.xml');

await mkdir(join(PUBLIC, 'en', 'blog'), { recursive: true });
await writeFile(
  join(PUBLIC, 'en', 'blog', 'feed.xml'),
  rss(enArticles, {
    path: '/en/blog/feed.xml',
    title: 'Adler & Rochefort — Insights',
    description: 'Insurance in Portugal, explained.',
    lang: 'en-GB',
  })
);
written.push('public/en/blog/feed.xml');

console.log(`PT index pages: ${ptPages}`);
console.log(`EN index pages: ${enPages}`);
console.log(`files written: ${written.length}`);
await writeFile(join(ROOT, 'data', 'generated-blog-pages.json'), JSON.stringify(written, null, 2) + '\n');
