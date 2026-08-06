#!/usr/bin/env node
/**
 * Block 6 — internal linking.
 *
 * Three problems, fixed together because they share one traversal:
 *
 *   1. Articles sat at the end of the graph. Most Portuguese articles had no
 *      link out of the prose at all, so a reader who finished one had nowhere
 *      to go but the navigation, and the commercial pages built in block 2
 *      received almost nothing from the content that justifies them.
 *   2. 181 English articles linked to /en/contact, which only resolves through
 *      a 301. Every one of those was a hop of link equity thrown away.
 *   3. The clusters did not talk to each other. A fleet operator reading about
 *      TVDE has an accidentes de trabalho exposure; nothing said so.
 *
 * Anchor text is descriptive in every case — no "click here", no bare URLs.
 * The blocks are marked with sentinel comments so the script can be re-run.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { globSync } from 'node:fs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = join(ROOT, 'public');

const data = JSON.parse(await readFile(join(ROOT, 'data', 'articles.json'), 'utf8'));
const proposal = JSON.parse(
  await readFile(join(ROOT, 'data', 'en-categories-proposal.json'), 'utf8')
);
const enCluster = new Map();
for (const c of proposal.categories) for (const s of c.articles) enCluster.set(s, c.slug);

const published = {
  pt: data.articles.pt.filter((a) => a.status === 'published'),
  en: data.articles.en.filter((a) => a.status === 'published'),
};
const clusterOf = (a) => (a.lang === 'pt' ? a.category : enCluster.get(a.slug));

const CALLOUT_STYLE =
  'background:#F0F4ED;border-left:4px solid #7A9A6B;padding:14px 18px;margin:32px 0 0;font-size:14px;line-height:1.6;color:#637060;border-radius:0 6px 6px 0;';
// Deliberately quieter than the callout: two identically-boxed paragraphs in a
// row read as one block of furniture and stop being read at all.
const PEERS_STYLE =
  'border-top:1px solid #E5DFCB;padding-top:18px;margin:36px 0 0;font-size:14px;line-height:1.7;color:#637060;';
const LINK_STYLE = 'color:#7A9A6B;font-weight:600;';
const START = '<!-- cluster-links -->';
const END = '<!-- /cluster-links -->';

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const plain = (h) =>
  h.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&[a-z]+;/g, '').trim();

/**
 * Commercial page each article should point at. Assigned per article rather
 * than per cluster: the hotelaria cluster covers both holiday lets and hotels,
 * and those are two different products.
 */
const LANDING = {
  // Automóvel e TVDE
  'seguro-tvde-portugal': ['/seguros/tvde/', 'seguro TVDE'],
  'seguro-frota-erros-comuns': ['/seguros/frota/', 'seguro de frota'],
  'seguro-auto-expatriados': ['/seguro-auto/', 'seguro automóvel'],
  'seguro-automovel-guia-completo': ['/seguro-auto/', 'seguro automóvel'],
  // Alojamento Local
  'alojamento-local-propriedade-horizontal-condominio': [
    '/seguros/alojamento-local/',
    'seguro de Alojamento Local',
  ],
  'quanto-custa-seguro-alojamento-local': ['/seguros/alojamento-local/', 'seguro de Alojamento Local'],
  'seguro-alojamento-local-decreto-lei-76-2024': [
    '/seguros/alojamento-local/',
    'seguro de Alojamento Local',
  ],
  'seguro-rc-multirriscos-alojamento-local': [
    '/seguros/alojamento-local/',
    'seguro de Alojamento Local',
  ],
};

/** Everything else falls back to its cluster's page. */
const CLUSTER_LANDING = {
  'habitacao-particulares': ['/seguros/habitacao/', 'seguro de habitação'],
  'seguros-empresariais': ['/seguros/empresarial/', 'multirriscos empresarial'],
  'hotelaria-turismo': ['/seguros/empresarial/', 'multirriscos empresarial para hotelaria'],
};

/** English: one commercial page, so only the articles it actually answers. */
const LANDING_EN = {
  'tvde-insurance-portugal': ['/en/insurance/tvde/', 'TVDE insurance'],
  'fleet-insurance-common-mistakes': ['/en/insurance/tvde/', 'TVDE and ride-hailing fleet insurance'],
  'car-insurance-expatriates': ['/en/insurance/tvde/', 'TVDE insurance'],
};

const report = {
  redirectLinks: 0,
  redirectFiles: 0,
  landingCallouts: 0,
  peerBlocks: 0,
  bridges: 0,
  noLanding: [],
};

// --- 1. links that only resolved through a redirect ---------------------------
// /en/contact has never been a page. The anchor on 181 English articles pointed
// at it and Netlify bounced every click to /en/#contact.
const RELINK = [[/href="\/en\/contact"/g, 'href="/en/#contact"']];

for (const rel of globSync('**/*.html', { cwd: PUBLIC })) {
  const path = join(PUBLIC, rel);
  let html = await readFile(path, 'utf8');
  const before = html;
  for (const [re, to] of RELINK) {
    const hits = (html.match(re) || []).length;
    if (hits) {
      html = html.replace(re, to);
      report.redirectLinks += hits;
    }
  }
  if (html !== before) {
    await writeFile(path, html);
    report.redirectFiles += 1;
  }
}

// --- 2. cluster links inside the prose ----------------------------------------
/** End index of the div opened at `open`, found by counting depth. */
function divEnd(html, open) {
  const tags = /<div\b|<\/div>/g;
  tags.lastIndex = open;
  let depth = 0;
  let m;
  while ((m = tags.exec(html))) {
    depth += m[0] === '</div>' ? -1 : 1;
    if (depth === 0) return m.index;
  }
  return -1;
}

for (const lang of ['pt', 'en']) {
  const all = published[lang];
  for (const article of all) {
    const path = join(PUBLIC, article.url, 'index.html');
    let html = await readFile(path, 'utf8');
    const before = html;

    // Drop any block from a previous run before measuring, so the counts below
    // describe the article's own prose rather than this script's output.
    html = html.replace(new RegExp(`\\s*${START}[\\s\\S]*?${END}`, 'g'), '');

    const bodyOpen = html.indexOf('<div class="article-body">');
    if (bodyOpen === -1) continue;
    const bodyClose = divEnd(html, bodyOpen);
    if (bodyClose === -1) continue;
    const body = html.slice(bodyOpen, bodyClose);
    const linked = new Set([...body.matchAll(/href="(\/[^"#]*)"/g)].map((m) => m[1]));

    const cluster = clusterOf(article);
    const parts = [];

    // 2a. peers in the same cluster, taken as the next neighbours in the
    // date-ordered ring. Picking the newest three instead would have aimed
    // every article in a cluster at the same three pages.
    const ring = all
      .filter((a) => clusterOf(a) === cluster)
      .sort((a, b) => (a.published < b.published ? 1 : -1));
    const at = ring.findIndex((a) => a.slug === article.slug);
    const already = ring.filter((a) => a.slug !== article.slug && linked.has(a.url));
    const need = 3 - already.length;
    if (need > 0 && ring.length > 1 && at !== -1) {
      const pick = [];
      for (let step = 1; step < ring.length && pick.length < need; step += 1) {
        const cand = ring[(at + step) % ring.length];
        if (!linked.has(cand.url)) pick.push(cand);
      }
      if (pick.length) {
        const links = pick
          .map((a) => `<a href="${a.url}" style="${LINK_STYLE}">${esc(plain(a.title))}</a>`)
          .join(' &middot; ');
        parts.push(
          `<p style="${PEERS_STYLE}"><strong>${
            lang === 'pt' ? 'Continuar neste tema' : 'More on this subject'
          }:</strong> ${links}</p>`
        );
        report.peerBlocks += 1;
      }
    }

    // 2b. one link to the commercial page for this subject.
    const landing =
      lang === 'pt'
        ? LANDING[article.slug] || CLUSTER_LANDING[cluster]
        : LANDING_EN[article.slug];
    if (landing && !linked.has(landing[0])) {
      const [url, label] = landing;
      parts.push(
        lang === 'pt'
          ? `<p style="${CALLOUT_STYLE}">Precisa de uma proposta? A página de <a href="${url}" style="${LINK_STYLE}">${label}</a> reúne o que a lei exige, as coberturas que costumam faltar nas apólices e o formulário de cotação — resposta em 24 horas úteis, por mediador registado na ASF.</p>`
          : `<p style="${CALLOUT_STYLE}">Need a quote? The <a href="${url}" style="${LINK_STYLE}">${label}</a> page sets out what the law requires, the covers policies commonly leave out, and the quote form — answered within one working day by an ASF-registered intermediary.</p>`
      );
      report.landingCallouts += 1;
    } else if (!landing) {
      report.noLanding.push(`${lang}:${article.slug} (${cluster || 'no cluster'})`);
    }

    if (parts.length) {
      const block = `\n\n    ${START}\n    ${parts.join('\n    ')}\n    ${END}\n  `;
      html = html.slice(0, bodyClose) + block + html.slice(bodyClose);
    }

    if (html !== before) await writeFile(path, html);
  }
}

// --- 3. cross-cluster bridges on the commercial pages -------------------------
// The pairings come from how the exposures actually overlap: a TVDE driver who
// buys a second car becomes a fleet, a hotel with a shuttle becomes a fleet, a
// holiday let inside a building is also a condomínio risk.
const PAGES = {
  '/seguros/tvde/': {
    title: 'Riscos relacionados',
    intro:
      'Quem trabalha em TVDE raramente tem só a viatura para segurar. Estes são os riscos que costumam aparecer a seguir:',
    links: [
      [
        '/seguros/frota/',
        'seguro de frota',
        'A partir de três viaturas, agrupar as apólices numa só dá um vencimento, um histórico de sinistralidade e negociação sobre o conjunto.',
      ],
      [
        '/seguros/empresarial/',
        'multirriscos empresarial',
        'Se a atividade passa por uma sociedade com escritório, garagem ou oficina, o património da empresa precisa de apólice própria.',
      ],
    ],
    todo:
      'TODO: criar /seguros/acidentes-trabalho/ — a ponte TVDE ↔ Acidentes de Trabalho pedida no plano de ligações internas não pode ser feita enquanto a página não existir. Motoristas com contrato são trabalhadores por conta de outrem e o seguro é obrigatório.',
  },
  '/seguros/frota/': {
    title: 'Riscos relacionados',
    intro: 'Uma frota traz consigo exposições que a apólice automóvel não cobre:',
    links: [
      [
        '/seguros/tvde/',
        'seguro TVDE',
        'Viaturas afetas a plataformas de transporte de passageiros precisam de utilização declarada; uma apólice particular pode recusar o sinistro.',
      ],
      [
        '/seguros/empresarial/',
        'multirriscos empresarial',
        'Instalações, oficina, stock de peças e responsabilidade civil de exploração ficam de fora do seguro das viaturas.',
      ],
    ],
    todo:
      'TODO: criar /seguros/acidentes-trabalho/ — condutores ao serviço da empresa são a exposição mais frequente numa frota e a ponte Frota ↔ Acidentes de Trabalho fica em aberto até a página existir.',
  },
  '/seguros/alojamento-local/': {
    title: 'Riscos relacionados',
    intro:
      'Um alojamento local é ao mesmo tempo um imóvel, um negócio e, quase sempre, uma fração num condomínio:',
    links: [
      [
        '/seguros/habitacao/',
        'seguro de habitação',
        'O edifício e o recheio continuam a precisar de cobertura própria, e o uso turístico tem de estar declarado na apólice.',
      ],
      [
        '/seguros/empresarial/',
        'multirriscos empresarial',
        'Com várias unidades ou com serviços prestados aos hóspedes, a exposição passa a ser de negócio e não de habitação.',
      ],
    ],
    todo: null,
  },
  '/seguros/habitacao/': {
    title: 'Riscos relacionados',
    intro: 'O que segura a casa raramente chega quando a casa também gera rendimento:',
    links: [
      [
        '/seguros/alojamento-local/',
        'seguro de Alojamento Local',
        'Arrendar a hóspedes muda a natureza do risco e exige responsabilidade civil e coberturas que a apólice de habitação não tem.',
      ],
      [
        '/seguros/empresarial/',
        'multirriscos empresarial',
        'Vários imóveis detidos por uma sociedade seguram-se melhor como carteira do que um a um.',
      ],
    ],
    todo: null,
  },
  '/seguros/empresarial/': {
    title: 'Riscos relacionados',
    intro:
      'O multirriscos protege o património. As exposições que sobram costumam ser as mais caras:',
    links: [
      [
        '/seguros/frota/',
        'seguro de frota',
        'Viaturas ao serviço da empresa, incluindo as de shuttle e de distribuição, seguram-se em conjunto.',
      ],
      [
        '/seguros/alojamento-local/',
        'seguro de Alojamento Local',
        'Para quem explora unidades de alojamento, a responsabilidade civil perante hóspedes é tratada em apólice própria.',
      ],
    ],
    todo:
      'TODO: criar /seguros/acidentes-trabalho/ e /seguros/responsabilidade-civil-profissional/ — as pontes Hotelaria ↔ RC de Exploração e Saúde ↔ Acidentes de Trabalho ↔ Pessoas e Benefícios ficam por fechar enquanto estas páginas não existirem.',
  },
};

const BRIDGE_START = '<!-- cross-cluster-bridge -->';
const BRIDGE_END = '<!-- /cross-cluster-bridge -->';

for (const [url, spec] of Object.entries(PAGES)) {
  const path = join(PUBLIC, url, 'index.html');
  let html = await readFile(path, 'utf8');
  const before = html;

  html = html.replace(new RegExp(`\\s*${BRIDGE_START}[\\s\\S]*?${BRIDGE_END}`, 'g'), '');

  const items = spec.links
    .map(
      ([href, label, why]) =>
        `      <li style="margin-bottom:12px;"><a href="${href}" style="color:var(--primary);font-weight:600;">${
          label.charAt(0).toUpperCase() + label.slice(1)
        }</a> — ${why}</li>`
    )
    .join('\n');

  const section = `\n${BRIDGE_START}
<section class="lp-section" aria-label="${spec.title}">
  <h2>${spec.title}</h2>
  <p>${spec.intro}</p>
  <ul>
${items}
  </ul>${spec.todo ? `\n  <!-- ${spec.todo} -->` : ''}
</section>
${BRIDGE_END}\n`;

  const anchor = html.indexOf('<section class="blog-section"');
  if (anchor === -1) {
    console.warn(`no insertion anchor on ${url}`);
    continue;
  }
  html = html.slice(0, anchor) + section + html.slice(anchor);
  report.bridges += 1;
  if (html !== before) await writeFile(path, html);
}

console.log(`redirect-only links rewritten: ${report.redirectLinks} in ${report.redirectFiles} files`);
console.log(`in-body peer blocks added:     ${report.peerBlocks}`);
console.log(`commercial-page callouts:      ${report.landingCallouts}`);
console.log(`cross-cluster bridge sections: ${report.bridges}`);
console.log(`\narticles with no commercial page to point at (${report.noLanding.length}):`);
const byCluster = {};
for (const s of report.noLanding) {
  const c = s.slice(s.indexOf('(') + 1, -1);
  byCluster[c] = (byCluster[c] || 0) + 1;
}
Object.entries(byCluster)
  .sort((a, b) => b[1] - a[1])
  .forEach(([c, n]) => console.log(`  ${c}: ${n}`));
