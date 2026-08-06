#!/usr/bin/env node
/**
 * Builds data/articles.json — the single source of truth for the article
 * listings (homepage, /blog/, category pages, sitemap, RSS, related blocks).
 *
 * Metadata comes from each article's own <head>; the taxonomy, the featured
 * flags, the translation pairing and the draft entries are declared here.
 * Re-run after adding an article so it is picked up everywhere at once.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = async (p) => JSON.parse(await readFile(join(ROOT, p), 'utf8'));

const extracted = await read('data/articles.extracted.json');
const cards = await read('data/homepage-cards.json');
const cardImages = await read('data/homepage-card-images.json');

// --- PT taxonomy ------------------------------------------------------------
export const PT_CATEGORIES = [
  {
    slug: 'seguros-auto-tvde',
    title: 'Seguros Automóvel e TVDE',
    short: 'Automóvel e TVDE',
    landing: '/seguros/tvde/',
    landingLabel: 'Seguro TVDE',
  },
  {
    slug: 'hotelaria-turismo',
    title: 'Hotelaria, Turismo e Alojamento Local',
    short: 'Hotelaria e AL',
    landing: '/seguros/alojamento-local/',
    landingLabel: 'Seguro de Alojamento Local',
  },
  {
    slug: 'seguros-empresariais',
    title: 'Seguros Empresariais',
    short: 'Empresas',
    landing: '/seguros/empresarial/',
    landingLabel: 'Multirriscos Empresarial',
  },
  {
    slug: 'habitacao-particulares',
    title: 'Habitação e Particulares',
    short: 'Habitação',
    landing: '/seguros/habitacao/',
    landingLabel: 'Seguro de Habitação',
  },
  {
    slug: 'seguros-saude',
    title: 'Seguros de Saúde',
    short: 'Saúde',
    landing: null,
    landingLabel: null,
  },
  {
    slug: 'tecnologia-parcerias',
    title: 'Tecnologia e Parcerias',
    short: 'Tecnologia',
    landing: null,
    landingLabel: null,
  },
];

const CATEGORY_OF = {
  // Seguros Automóvel e TVDE
  'seguro-tvde-portugal': 'seguros-auto-tvde',
  'seguro-automovel-guia-completo': 'seguros-auto-tvde',
  'seguro-individual-automovel': 'seguros-auto-tvde',
  'seguro-auto-expatriados': 'seguros-auto-tvde',
  'seguro-frota-erros-comuns': 'seguros-auto-tvde',
  // Hotelaria, Turismo e Alojamento Local
  'alojamento-local-propriedade-horizontal-condominio': 'hotelaria-turismo',
  'comparar-propostas-seguro-hotel-erros-comuns': 'hotelaria-turismo',
  'hotel-fenomenos-climaticos-extremos': 'hotelaria-turismo',
  'quanto-custa-seguro-alojamento-local': 'hotelaria-turismo',
  'rc-exploracao-unidades-turisticas': 'hotelaria-turismo',
  'seguro-acidentes-pessoais-trabalhadores-hotelaria': 'hotelaria-turismo',
  'seguro-alojamento-local-decreto-lei-76-2024': 'hotelaria-turismo',
  'seguro-multiriscos-hotel-portugal': 'hotelaria-turismo',
  'seguro-rc-multirriscos-alojamento-local': 'hotelaria-turismo',
  'seguros-turismo-rural-hoteis-boutique': 'hotelaria-turismo',
  'seguros-obrigatorios-hotelaria-turismo': 'hotelaria-turismo',
  'seguros-bares-restaurantes-sinistros': 'hotelaria-turismo',
  // Seguros Empresariais
  'seguros-obrigatorios-empresas-portugal': 'seguros-empresariais',
  'responsabilidade-civil-profissional': 'seguros-empresariais',
  'ransomware-portugal-riscos-ciberneticos': 'seguros-empresariais',
  'seguro-ciberseguranca-empresas-portugal': 'seguros-empresariais',
  'responsabilidade-administradores-seguro-do': 'seguros-empresariais',
  'seguro-obra-construcao': 'seguros-empresariais',
  'valores-segurados-desatualizados': 'seguros-empresariais',
  'revisao-apolice-empresarial': 'seguros-empresariais',
  'seguros-empresas-distribuicao': 'seguros-empresariais',
  'seguro-responsabilidade-civil-terapeuticas-nao-convencionais': 'seguros-empresariais',
  // Habitação e Particulares
  'seguro-habitacao-proteger-casa': 'habitacao-particulares',
  'multirriscos-habitacao': 'habitacao-particulares',
  'seguro-habitacao-legalizacao': 'habitacao-particulares',
  'seguro-condominio-obrigatorio-guia': 'habitacao-particulares',
  'seguro-condominio-capitais-desatualizados': 'habitacao-particulares',
  'obrigacoes-administrador-condominio-seguro': 'habitacao-particulares',
  'seguro-titulo-imovel-portugal': 'habitacao-particulares',
  // Seguros de Saúde
  'seguro-saude-portugal': 'seguros-saude',
  'seguro-saude-expatriados-portugal': 'seguros-saude',
  'allianz-april-medis-seguro-saude-portugal-2026': 'seguros-saude',
  'seguro-saude-doencas-preexistentes-portugal': 'seguros-saude',
  // Tecnologia e Parcerias
  'adler-pro-plataforma-saas': 'tecnologia-parcerias',
  'parcerias-imobiliarias-comissoes': 'tecnologia-parcerias',
  '20-anos-turismo-seguros-hotelaria': 'tecnologia-parcerias',
  'investimento-americano-luxo-portugal': 'tecnologia-parcerias',
};

// Six articles surfaced on the homepage.
const FEATURED = [
  'seguro-tvde-portugal',
  'seguro-alojamento-local-decreto-lei-76-2024',
  'seguro-saude-doencas-preexistentes-portugal',
  'seguro-ciberseguranca-empresas-portugal',
  'multirriscos-habitacao',
  'seguros-obrigatorios-empresas-portugal',
];

// Six English articles surfaced on /en/. Chosen so the English categories with
// commercial weight are each represented once; the list is not a translation of
// the Portuguese one because the two audiences differ.
const FEATURED_EN = [
  'health-insurance-portugal-residency-visa',
  'best-home-insurance-portugal-2026',
  'insuring-valuables-portugal',
  'alojamento-local-insurance-requirements',
  'tvde-insurance-portugal',
  'cyber-insurance-businesses-portugal',
];

// Articles absorbed into a pillar in Block 4. Kept out of the listings and the
// sitemap; their URLs answer with a 301 from public/_redirects.
const MERGED = {
  'seguro-individual-automovel': '/blog/seguro-automovel-guia-completo/',
  'seguro-habitacao-proteger-casa': '/blog/multirriscos-habitacao/',
};

// Slugs reserved for planned articles. Not published, not in the sitemap —
// they exist so the taxonomy and internal linking already have a home for them.
const DRAFTS = [
  ['seguro-tvde-lisboa', 'seguros-auto-tvde'],
  ['seguro-frota-tvde', 'seguros-auto-tvde'],
  ['acidentes-trabalho-motoristas-tvde', 'seguros-auto-tvde'],
  ['seguro-pessoal-nao-cobre-uber-bolt', 'seguros-auto-tvde'],
  ['motorista-tvde-estrangeiro-portugal', 'seguros-auto-tvde'],
  ['sinistro-tvde-passo-a-passo', 'seguros-auto-tvde'],
  ['seguro-transfers-turisticos', 'seguros-auto-tvde'],
  ['seguro-rent-a-car-aluguer-sem-condutor', 'seguros-auto-tvde'],
  ['seguro-tuk-tuk-buggies-turismo', 'seguros-auto-tvde'],
  ['seguro-autocaravanas-campervans-aluguer', 'seguros-auto-tvde'],
  ['seguro-carrinhas-escolas-surf-atividades', 'seguros-auto-tvde'],
  ['seguro-frota-hotel-shuttles', 'hotelaria-turismo'],
  ['seguro-habitacao-expatriados-portugal', 'habitacao-particulares'],
  ['seguro-condominio-vs-seguro-proprio', 'habitacao-particulares'],
  ['seguro-habitacao-piscina-anexos', 'habitacao-particulares'],
  ['seguro-acidentes-trabalho-obrigacoes-empregador', 'seguros-empresariais'],
  ['perda-de-lucros-cobertura-esquecida', 'seguros-empresariais'],
  ['seguro-caucao-concursos-publicos', 'seguros-empresariais'],
];

const MONTHS_PT = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
];

const MONTHS_EN = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const strip = (s) => (s || '').replace(/<[^>]+>/g, '').trim();

function decodeEntities(s) {
  if (!s) return s;
  return s
    .replace(/&amp;/g, '&')
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/&rsquo;/g, '’')
    .replace(/&lsquo;/g, '‘')
    .replace(/&ldquo;/g, '“')
    .replace(/&rdquo;/g, '”')
    .replace(/&middot;/g, '·')
    .replace(/&eacute;/g, 'é')
    .replace(/&aacute;/g, 'á')
    .replace(/&atilde;/g, 'ã')
    .replace(/&ccedil;/g, 'ç')
    .replace(/&oacute;/g, 'ó')
    .replace(/&otilde;/g, 'õ')
    .replace(/&uacute;/g, 'ú')
    .replace(/&iacute;/g, 'í')
    .replace(/&ordm;/g, 'º')
    .replace(/&nbsp;/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

const enBySlug = new Map(extracted.en.map((a) => [a.slug, a]));
const ptBySlug = new Map(extracted.pt.map((a) => [a.slug, a]));

function buildArticle(a, lang) {
  // The card maps now hold both homepages' cards, keyed by slug. Slugs do not
  // collide across languages, so a single lookup is safe for either side.
  const card = cards[a.slug] || null;
  const img = cardImages[a.slug] || null;
  const date = a.published ? new Date(a.published) : null;
  const category = lang === 'pt' ? CATEGORY_OF[a.slug] || null : null;

  // Translation pairing is only recorded when the counterpart is actually
  // published. A dangling hreflang — or one aimed at a URL that now 301s — is
  // worse than none at all.
  let translationOf = null;
  if (lang === 'pt' && a.hreflangEn && !MERGED[a.slug]) {
    const m = a.hreflangEn.match(/\/en\/blog\/([^/]+)\//);
    if (m && enBySlug.has(m[1]) && !enBySlug.get(m[1]).noindex) translationOf = m[1];
  }
  if (lang === 'en' && a.hreflangPt) {
    const m = a.hreflangPt.match(/\/blog\/([^/]+)\//);
    if (m && ptBySlug.has(m[1]) && !MERGED[m[1]]) translationOf = m[1];
  }

  return {
    slug: a.slug,
    lang,
    status: MERGED[a.slug] ? 'merged' : a.noindex ? 'draft' : 'published',
    mergedInto: MERGED[a.slug] || undefined,
    url: lang === 'pt' ? `/blog/${a.slug}/` : `/en/blog/${a.slug}/`,
    category,
    tag: decodeEntities(a.tag) || null,
    title: decodeEntities(card?.title || a.h1 || a.title),
    metaTitle: decodeEntities(a.title),
    description: decodeEntities(a.description),
    excerpt: decodeEntities(strip(card?.excerpt) || a.description),
    image: img?.src || a.featuredImage || null,
    imageGradient: img?.gradient || null,
    imageAlt: decodeEntities(img?.alt || a.h1 || a.title),
    published: a.published,
    modified: a.modified || a.published,
    dateLabel: date
      ? `${(lang === 'en' ? MONTHS_EN : MONTHS_PT)[date.getUTCMonth()]} ${date.getUTCFullYear()}`
      : null,
    readingTime: Math.max(3, Math.round(a.words / 220)),
    featured: (lang === 'en' ? FEATURED_EN : FEATURED).includes(a.slug),
    translationOf,
  };
}

const pt = extracted.pt.map((a) => buildArticle(a, 'pt'));
const en = extracted.en.map((a) => buildArticle(a, 'en'));

for (const [slug, category] of DRAFTS) {
  pt.push({
    slug,
    lang: 'pt',
    status: 'draft',
    url: `/blog/${slug}/`,
    category,
    tag: null,
    title: null,
    metaTitle: null,
    description: null,
    excerpt: null,
    image: null,
    imageAlt: null,
    published: null,
    modified: null,
    dateLabel: null,
    readingTime: null,
    featured: false,
    translationOf: null,
  });
}

const byDateDesc = (a, b) => (b.published || '').localeCompare(a.published || '');
pt.sort(byDateDesc);
en.sort(byDateDesc);

const uncategorised = pt.filter((a) => a.status === 'published' && !a.category);
if (uncategorised.length) {
  console.error('Uncategorised PT articles:', uncategorised.map((a) => a.slug).join(', '));
  process.exitCode = 1;
}

await writeFile(
  join(ROOT, 'data', 'articles.json'),
  JSON.stringify({ categories: { pt: PT_CATEGORIES }, articles: { pt, en } }, null, 2) + '\n'
);

const pub = (list) => list.filter((a) => a.status === 'published');
console.log(`pt published=${pub(pt).length} merged=${pt.filter((a) => a.status === 'merged').length} draft=${pt.filter((a) => a.status === 'draft').length}`);
console.log(`en published=${pub(en).length} draft=${en.filter((a) => a.status === 'draft').length}`);
for (const c of PT_CATEGORIES) {
  console.log(`  ${c.slug}: ${pub(pt).filter((a) => a.category === c.slug).length}`);
}
console.log(`featured: ${pt.filter((a) => a.featured).length}`);
console.log(`pt with translation pair: ${pt.filter((a) => a.translationOf).length}`);
