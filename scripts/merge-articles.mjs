#!/usr/bin/env node
/**
 * Block 4 — article consolidation.
 *
 * Two Portuguese articles were competing with a stronger article on the same
 * query. Rather than leave them to split the ranking signal, their genuinely
 * unique sections are folded into the surviving article and the old URLs are
 * 301'd to it:
 *
 *   /blog/seguro-individual-automovel/   -> /blog/seguro-automovel-guia-completo/
 *   /blog/seguro-habitacao-proteger-casa/ -> /blog/multirriscos-habitacao/
 *
 * /blog/seguro-habitacao-legalizacao/ stays as it is: it answers a different
 * question (illegal building work voiding cover), not a variant of the same one.
 *
 * Sections that merely restate something the surviving article already covers
 * are dropped rather than duplicated — the list of what was kept and what was
 * dropped is printed at the end of the run.
 */
import { readFile, writeFile, rm, access } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { globSync } from 'node:fs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = join(ROOT, 'public');
const BLOG = join(PUBLIC, 'blog');

const MERGES = [
  { from: 'seguro-individual-automovel', to: 'seguro-automovel-guia-completo' },
  { from: 'seguro-habitacao-proteger-casa', to: 'multirriscos-habitacao' },
];

/** True once the absorbed article has been removed from disk. */
const gone = async (slug) =>
  access(join(BLOG, slug, 'index.html')).then(
    () => false,
    () => true
  );

const report = { sections: [], dropped: [], relinked: [], hreflang: [], removed: [], dates: [] };

/**
 * Pulls one `<h3>` section out of an article body: the heading and everything
 * up to the next heading, mid-article CTA, or the end of the body.
 */
function section(html, heading) {
  const start = html.indexOf(`<h3>${heading}</h3>`);
  if (start === -1) throw new Error(`section not found: ${heading}`);
  const stops = ['\n    <h3>', '\n    <div class="cta-meio">', '\n  </div>']
    .map((s) => html.indexOf(s, start + 10))
    .filter((i) => i !== -1);
  const end = Math.min(...stops);
  return html.slice(start, end).trimEnd();
}

/** Inserts a block immediately before an existing heading in the target. */
function insertBefore(html, heading, block) {
  const at = html.indexOf(`    <h3>${heading}</h3>`);
  if (at === -1) throw new Error(`target heading not found: ${heading}`);
  return html.slice(0, at) + `    ${block}\n\n` + html.slice(at);
}

// --- 1. automóvel -------------------------------------------------------------
if (await gone('seguro-individual-automovel')) {
  console.log('automóvel merge already applied');
} else {
  const src = await readFile(join(BLOG, 'seguro-individual-automovel', 'index.html'), 'utf8');
  const path = join(BLOG, 'seguro-automovel-guia-completo', 'index.html');
  let html = await readFile(path, 'utf8');

  {
    const KEEP = ['Os 5 erros mais comuns no seguro automóvel', 'Quando faz sentido mudar de seguradora?'];    for (const heading of KEEP) {
      html = insertBefore(
        html,
        'Porque é que um mediador de seguros faz a diferença',
        section(src, heading)
      );
      report.sections.push(`seguro-automovel-guia-completo ← "${heading}"`);
    }

    // The absorbed article opened this list with a years-of-experience claim
    // that nothing on the site substantiates. The observation stands without it.
    html = html.replace(
      'Na nossa experiência de mais de 15 anos a aconselhar clientes particulares e empresariais, estes são os erros que se repetem com maior frequência:',
      'Estes são os erros que se repetem com maior frequência nas apólices que revemos:'
    );

    await writeFile(path, html);
  }
}

report.dropped.push(
  'seguro-individual-automovel › "Os três níveis de cobertura" (already covered by the target\'s own three-tier section)',
  'seguro-individual-automovel › "O papel do mediador de seguros" (already covered by "Porque é que um mediador de seguros faz a diferença")'
);

// --- 2. habitação -------------------------------------------------------------
if (await gone('seguro-habitacao-proteger-casa')) {
  console.log('habitação merge already applied');
} else {
  const src = await readFile(join(BLOG, 'seguro-habitacao-proteger-casa', 'index.html'), 'utf8');
  const path = join(BLOG, 'multirriscos-habitacao', 'index.html');
  let html = await readFile(path, 'utf8');

  {
    // The callout pointed at the article being absorbed. This page is now the
    // main guide, so it points forward to the commercial page instead.
    html = html.replace(
      /<p style="background:#E8E5DF;[^"]*">Este artigo faz parte[\s\S]*?<\/p>\n/,
      `<p style="background:#E8E5DF;border-left:4px solid #17243D;padding:14px 18px;margin-bottom:28px;font-size:14px;line-height:1.6;color:#526984;border-radius:0 6px 6px 0;">Este é o nosso guia principal sobre seguro de habitação em Portugal. Para pedir cotação com coberturas e capitais já enquadrados, veja a página de <a href="/seguros/habitacao/" style="color:#17243D;font-weight:600;">seguro de habitação</a>.</p>\n`
    );

    const PLAN = [
      ['Seguro de edifício vs. seguro de recheio: duas proteções distintas', 'Os 5 erros mais comuns no seguro de habitação'],
      ['O capital segurado: como o valor do imóvel influencia a apólice', 'Proprietário, inquilino ou senhorio: coberturas diferentes'],
      ['Como obter a melhor relação qualidade-preço', 'O que verificar na sua apólice atual'],
    ];
    for (const [heading, before] of PLAN) {
      html = insertBefore(html, before, section(src, heading));
      report.sections.push(`multirriscos-habitacao ← "${heading}"`);
    }

    // The mediator section and a rewritten series block close the article. The
    // original series list linked to this very page, so it is re-pointed at the
    // articles and the commercial page that remain.
    const mediator = section(src, 'O papel do mediador na escolha do seguro certo');
    const series = `<h3>Neste guia: a série sobre seguro de habitação</h3>
    <p>Este é o guia principal do cluster sobre habitação. Cada artigo de apoio aprofunda um ponto específico:</p>
    <ul>
      <li><a href="/blog/seguro-habitacao-legalizacao/">Seguro de habitação e legalização do imóvel</a> — porque é que obras não legalizadas podem anular a cobertura.</li>
      <li><a href="/seguros/habitacao/">Seguro de habitação: coberturas, capitais e cotação</a> — o que a lei exige, o que costuma faltar nas apólices e como pedir proposta.</li>
    </ul>
    <p>Tem uma casa de férias ou que arrenda a hóspedes? Veja o guia complementar sobre <a href="/blog/quanto-custa-seguro-alojamento-local/">seguro de Alojamento Local</a>, com responsabilidade civil, capitais mínimos e cobertura para arrendamento.</p>`;

    const bodyEnd = html.lastIndexOf('\n  </div>', html.indexOf('<div class="blog-cta"'));
    if (bodyEnd === -1) throw new Error('article body end not found');
    html = html.slice(0, bodyEnd) + `\n\n    ${mediator}\n\n    ${series}` + html.slice(bodyEnd);
    report.sections.push(
      'multirriscos-habitacao ← "O papel do mediador na escolha do seguro certo"',
      'multirriscos-habitacao ← "Neste guia: a série sobre seguro de habitação" (rewritten: the old list linked to this page)'
    );

    await writeFile(path, html);
  }
}

report.dropped.push(
  'seguro-habitacao-proteger-casa › "A obrigação legal: o seguro de incêndio em propriedade horizontal" (the target opens with the same article 1429.º explanation)',
  'seguro-habitacao-proteger-casa › "As coberturas essenciais de um seguro de habitação completo" (duplicate of the target\'s multirriscos cover list)',
  'seguro-habitacao-proteger-casa › "Os erros mais comuns dos proprietários" (duplicate of "Os 5 erros mais comuns no seguro de habitação")',
  'seguro-habitacao-proteger-casa › "Inquilinos vs. proprietários" (duplicate of "Proprietário, inquilino ou senhorio")'
);

// --- 3. re-point every inbound link ------------------------------------------
for (const rel of globSync('**/*.html', { cwd: PUBLIC })) {
  const path = join(PUBLIC, rel);
  let html = await readFile(path, 'utf8');
  const before = html;

  for (const { from, to } of MERGES) {
    if (rel.startsWith(`blog/${from}/`)) continue;

    // hreflang and x-default pointing at a URL that will only 301 is an error
    // in its own right: drop the annotation, keep the page's own canonical.
    const hreflangLines = html.match(
      new RegExp(`^<link rel="alternate" hreflang="[^"]*" href="[^"]*/blog/${from}/">\\n`, 'gm')
    );
    if (hreflangLines) {
      html = html.replace(
        new RegExp(`^<link rel="alternate" hreflang="[^"]*" href="[^"]*/blog/${from}/">\\n`, 'gm'),
        ''
      );
      report.hreflang.push(`public/${rel} (${hreflangLines.length} annotation(s) to /blog/${from}/)`);
    }

    // Body links, including the language switcher, go to the surviving article
    // rather than through a redirect.
    html = html.split(`/blog/${from}/`).join(`/blog/${to}/`);
  }

  if (html !== before) {
    await writeFile(path, html);
    report.relinked.push(`public/${rel}`);
  }
}

// --- 4. remove the absorbed articles -----------------------------------------
for (const { from } of MERGES) {
  await rm(join(BLOG, from), { recursive: true, force: true });
  report.removed.push(`public/blog/${from}/`);
}

// --- 5. resync the dates and reading time of the enlarged articles ------------
// Both surviving articles gained several sections, so the modified date and the
// reading time they advertise are no longer true. The published date is left
// alone: the article is the same article, not a new one.
const MERGE_DATE = '2026-08-06T09:00:00+00:00';
const dataPath = join(ROOT, 'data', 'articles.json');
const data = JSON.parse(await readFile(dataPath, 'utf8'));

for (const { to } of MERGES) {
  const path = join(BLOG, to, 'index.html');
  let html = await readFile(path, 'utf8');

  const body = html.slice(
    html.indexOf('<div class="article-body">'),
    html.indexOf('<div class="blog-cta"')
  );
  const words = body.replace(/<[^>]+>/g, ' ').trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));

  html = html
    .replace(
      /<meta property="article:modified_time" content="[^"]*">/,
      `<meta property="article:modified_time" content="${MERGE_DATE}">`
    )
    .replace(/"dateModified": "[^"]*"/, `"dateModified": "${MERGE_DATE}"`)
    .replace(
      /(<div class="article-date">[^<]*?&middot; )\d+ min de leitura</,
      `$1${minutes} min de leitura<`
    );

  await writeFile(path, html);

  const entry = data.articles.pt.find((a) => a.slug === to);
  if (entry) {
    entry.modified = MERGE_DATE;
    entry.readingTime = minutes;
  }
  report.dates.push(`${to}: modified ${MERGE_DATE}, ${words} words, ${minutes} min`);
}

await writeFile(dataPath, JSON.stringify(data, null, 2) + '\n');

console.log('\nsections carried over:');
report.sections.forEach((s) => console.log('  ' + s));
console.log('\nsections dropped as duplicates:');
report.dropped.forEach((s) => console.log('  ' + s));
console.log(`\nhreflang annotations removed (${report.hreflang.length}):`);
report.hreflang.forEach((s) => console.log('  ' + s));
console.log(`\nfiles re-linked: ${report.relinked.length}`);
report.relinked.forEach((s) => console.log('  ' + s));
console.log('\nremoved:');
report.removed.forEach((s) => console.log('  ' + s));
console.log('\ndates and reading time resynced:');
report.dates.forEach((s) => console.log('  ' + s));
