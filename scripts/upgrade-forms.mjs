#!/usr/bin/env node
/**
 * Block 3 — lead form upgrade.
 *
 * 3.1  Replaces the coarse insurance-type dropdown with the thirteen branches
 *      the business actually quotes, on the homepage form and on the CTA form
 *      carried by every article, in both languages.
 * 3.2  Adds progressive, branch-specific qualification fields to the homepage
 *      form. They ship in the HTML (disabled and hidden) so Netlify registers
 *      them at deploy time, and /js/lead-branch-fields.js reveals the block
 *      that matches the selected branch.
 * 3.3  Adds a hidden source_url to every form the notification function reads.
 *
 * The English side carries the same thirteen branches — the same intermediary
 * quotes the same lines of business whichever language the visitor reads in —
 * but its own field names, so the notification email labels them in English.
 *
 * Idempotent: re-running it finds the new markup already in place and stops.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { globSync } from 'node:fs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = join(ROOT, 'public');

// The fourteen branches, in the order agreed for the dropdown.
const BRANCHES = [
  'Saúde',
  'Automóvel',
  'TVDE (Uber, Bolt, Free Now)',
  'Frota de empresa',
  'Habitação',
  'Alojamento Local',
  'Condomínio',
  'Hotelaria e Restauração',
  'Multirriscos Empresarial',
  'Responsabilidade Civil Profissional',
  'Riscos Cibernéticos',
  'Vida e Crédito Habitação',
  'Acidentes de Trabalho',
  'Outro',
];

const options = (placeholder) =>
  `<option value="">${placeholder}</option>` +
  BRANCHES.map((b) => `<option value="${b}">${b}</option>`).join('');

// The same fourteen branches as the English reader would name them.
const BRANCHES_EN = [
  'Health',
  'Car',
  'TVDE (Uber, Bolt, Free Now)',
  'Company fleet',
  'Home',
  'Holiday let (Alojamento Local)',
  'Condominium',
  'Hospitality &amp; restaurants',
  'Business combined (multirriscos)',
  'Professional indemnity',
  'Cyber',
  'Life &amp; mortgage protection',
  "Workers' compensation",
  'Other',
];

const optionsEn = (placeholder) =>
  `<option value="">${placeholder}</option>` +
  BRANCHES_EN.map((b) => `<option value="${b}">${b}</option>`).join('');

// --- 3.2 branch fields --------------------------------------------------------
// Deliberately short: three questions per branch is what can be answered from
// memory in the hero. Anything deeper belongs on the branch's landing page.
const BRANCH_FIELDS = {
  'Saúde': [
    ['saude_idade', 'Idade da pessoa mais velha a segurar', 'number', 'Ex.: 42'],
    ['saude_pessoas', 'Quantas pessoas a segurar', 'number', 'Ex.: 3'],
    ['saude_preexistentes', 'Doenças pré-existentes a declarar', 'text', 'Sim / Não'],
  ],
  'Automóvel': [
    ['auto_veiculo', 'Marca, modelo e ano', 'text', 'Ex.: Renault Clio 2019'],
    ['auto_matricula', 'Matrícula', 'text', 'AA-00-AA'],
    ['auto_anos_carta', 'Anos de carta', 'number', 'Ex.: 15'],
  ],
  'TVDE (Uber, Bolt, Free Now)': [
    ['tvde_perfil', 'É motorista ou operador?', 'text', 'Motorista / Operador'],
    ['tvde_viaturas', 'N.º de viaturas', 'number', 'Ex.: 1'],
    ['tvde_zona', 'Zona de operação', 'text', 'Lisboa, Porto, Algarve…'],
  ],
  'Frota de empresa': [
    ['frota_empresa', 'Empresa', 'text', 'Designação social'],
    ['frota_viaturas', 'N.º de viaturas', 'number', 'Ex.: 8'],
    ['frota_sinistros', 'Sinistros nos últimos 3 anos', 'text', 'Ex.: 2'],
  ],
  'Habitação': [
    ['habitacao_tipo', 'Tipo de imóvel', 'text', 'Apartamento / Moradia'],
    ['habitacao_cp', 'Código postal', 'text', '0000-000'],
    ['habitacao_valor', 'Valor de reconstrução estimado', 'text', 'Ex.: 160 000 €'],
  ],
  'Alojamento Local': [
    ['al_tipo', 'Tipo de unidade', 'text', 'Apartamento / Moradia / Hostel'],
    ['al_registo', 'N.º de registo AL', 'text', 'Se já emitido'],
    ['al_capacidade', 'Capacidade (hóspedes)', 'number', 'Ex.: 6'],
  ],
  // Condomínio is the one branch that breaks the three-question rule, and on
  // purpose: an administrator asking for a building quote already has the
  // minute book in front of them, and the answers below are exactly what an
  // insurer needs before it will price the risk at all. Asking for them once
  // here avoids the round trip that every condominium enquiry otherwise costs.
  'Condomínio': [
    ['condominio_nome', 'Nome do condomínio', 'text', 'Ex.: Condomínio Edifício Atlântico'],
    ['condominio_nif', 'NIF do condomínio', 'text', '000 000 000'],
    ['condominio_morada', 'Morada e código postal', 'text', 'Rua, n.º, 0000-000 Localidade'],
    ['condominio_fracoes', 'Número de frações', 'number', 'Ex.: 24'],
    ['condominio_pisos', 'Número de pisos', 'number', 'Ex.: 5'],
    ['condominio_ano_construcao', 'Ano de construção', 'number', 'Ex.: 1998'],
    ['condominio_elevador', 'Existe elevador', 'select', 'Selecionar', ['Sim', 'Não']],
    [
      'condominio_espacos_exteriores',
      'Existe piscina ou espaços comuns exteriores',
      'select',
      'Selecionar',
      ['Sim', 'Não'],
    ],
    ['condominio_capital', 'Capital seguro atual do edifício', 'text', 'Ex.: 2 400 000 €'],
    ['condominio_seguradora', 'Seguradora atual', 'text', 'Se já existe apólice'],
    ['condominio_vencimento', 'Data de vencimento', 'date', ''],
    [
      'condominio_contacto',
      'Quem contacta',
      'select',
      'Selecionar',
      ['Administrador profissional', 'Administrador condómino', 'Condómino'],
    ],
  ],
  'Hotelaria e Restauração': [
    ['horeca_tipo', 'Tipo de estabelecimento', 'text', 'Hotel, restaurante, bar…'],
    ['horeca_colaboradores', 'N.º de colaboradores', 'number', 'Ex.: 12'],
    ['horeca_volume', 'Volume de negócios anual', 'text', 'Ex.: 700 000 €'],
  ],
  'Multirriscos Empresarial': [
    ['empresarial_empresa', 'Empresa', 'text', 'Designação social'],
    ['empresarial_cae', 'CAE / atividade', 'text', 'Ex.: 56101'],
    ['empresarial_colaboradores', 'N.º de colaboradores', 'number', 'Ex.: 14'],
  ],
  'Responsabilidade Civil Profissional': [
    ['rcp_profissao', 'Profissão ou atividade', 'text', 'Ex.: arquitetura'],
    ['rcp_capital', 'Capital pretendido', 'text', 'Ex.: 500 000 €'],
    ['rcp_obrigatorio', 'É exigido por ordem profissional ou contrato?', 'text', 'Sim / Não'],
  ],
  'Riscos Cibernéticos': [
    ['cyber_empresa', 'Empresa', 'text', 'Designação social'],
    ['cyber_postos', 'N.º de postos de trabalho', 'number', 'Ex.: 25'],
    ['cyber_dados', 'Trata dados pessoais de clientes?', 'text', 'Sim / Não'],
  ],
  'Vida e Crédito Habitação': [
    ['vida_capital', 'Capital em dívida', 'text', 'Ex.: 180 000 €'],
    ['vida_banco', 'Banco', 'text', 'Instituição de crédito'],
    ['vida_nascimento', 'Data de nascimento', 'date', ''],
  ],
  'Acidentes de Trabalho': [
    ['at_empresa', 'Empresa', 'text', 'Designação social'],
    ['at_trabalhadores', 'N.º de trabalhadores', 'number', 'Ex.: 9'],
    ['at_massa_salarial', 'Massa salarial anual', 'text', 'Ex.: 210 000 €'],
  ],
};

/**
 * One conditional field. Ships disabled so the browser leaves it out of the
 * submission until /js/lead-branch-fields.js reveals and enables the group —
 * see the comment at the top of that file for why the two must move together.
 */
const branchField = ([name, label, type, placeholder, options]) => {
  const control =
    type === 'select'
      ? `<select id="${name}" name="${name}" disabled><option value="">${placeholder}</option>` +
        options.map((o) => `<option value="${o}">${o}</option>`).join('') +
        `</select>`
      : `<input type="${type}" id="${name}" name="${name}" placeholder="${placeholder}" disabled>`;
  return `          <div class="form-field">
            <label for="${name}">${label}</label>
            ${control}
          </div>`;
};

const branchBlock = (branch, fields) => `        <div class="form-branch-fields" data-branch="${branch}" hidden>
${fields.map(branchField).join('\n')}
        </div>`;

const ALL_BRANCH_BLOCKS = Object.entries(BRANCH_FIELDS)
  .map(([branch, fields]) => branchBlock(branch, fields))
  .join('\n');

// English equivalents. Distinct field names so the notification email can label
// them in English without guessing which homepage the lead came from.
const BRANCH_FIELDS_EN = {
  'Health': [
    ['health_age', 'Age of the oldest person to insure', 'number', 'e.g. 42'],
    ['health_people', 'How many people to insure', 'number', 'e.g. 3'],
    ['health_preexisting', 'Pre-existing conditions to declare', 'text', 'Yes / No'],
  ],
  'Car': [
    ['car_vehicle', 'Make, model and year', 'text', 'e.g. Renault Clio 2019'],
    ['car_plate', 'Registration plate', 'text', 'AA-00-AA'],
    ['car_licence_years', 'Years holding a licence', 'number', 'e.g. 15'],
  ],
  'TVDE (Uber, Bolt, Free Now)': [
    ['tvde_role', 'Driver or operator?', 'text', 'Driver / Operator'],
    ['tvde_vehicles', 'Number of vehicles', 'number', 'e.g. 1'],
    ['tvde_area', 'Area of operation', 'text', 'Lisbon, Porto, Algarve…'],
  ],
  'Company fleet': [
    ['fleet_company', 'Company', 'text', 'Registered name'],
    ['fleet_vehicles', 'Number of vehicles', 'number', 'e.g. 8'],
    ['fleet_claims', 'Claims in the last 3 years', 'text', 'e.g. 2'],
  ],
  'Home': [
    ['home_type', 'Property type', 'text', 'Apartment / House'],
    ['home_postcode', 'Postcode', 'text', '0000-000'],
    ['home_rebuild_value', 'Estimated rebuild value', 'text', 'e.g. €160,000'],
  ],
  'Holiday let (Alojamento Local)': [
    ['al_unit_type', 'Type of unit', 'text', 'Apartment / House / Hostel'],
    ['al_licence', 'AL registration number', 'text', 'If already issued'],
    ['al_guests', 'Capacity (guests)', 'number', 'e.g. 6'],
  ],
  // The English side keeps the three-question shape here: an owner of a single
  // fraction rarely holds the building's figures, so the detail that the
  // Portuguese administrator can answer from memory is asked later.
  'Condominium': [
    ['condo_units', 'Number of units in the building', 'number', 'e.g. 24'],
    ['condo_postcode', 'Building postcode', 'text', '0000-000'],
    ['condo_role', 'Are you the administrator or an owner?', 'text', 'Administrator / Owner'],
  ],
  'Hospitality &amp; restaurants': [
    ['horeca_venue', 'Type of venue', 'text', 'Hotel, restaurant, bar…'],
    ['horeca_staff', 'Number of staff', 'number', 'e.g. 12'],
    ['horeca_turnover', 'Annual turnover', 'text', 'e.g. €700,000'],
  ],
  'Business combined (multirriscos)': [
    ['business_company', 'Company', 'text', 'Registered name'],
    ['business_activity', 'CAE / activity', 'text', 'e.g. 56101'],
    ['business_staff', 'Number of staff', 'number', 'e.g. 14'],
  ],
  'Professional indemnity': [
    ['pi_profession', 'Profession or activity', 'text', 'e.g. architecture'],
    ['pi_limit', 'Limit of indemnity sought', 'text', 'e.g. €500,000'],
    ['pi_required', 'Required by a professional body or contract?', 'text', 'Yes / No'],
  ],
  'Cyber': [
    ['cyber_company_en', 'Company', 'text', 'Registered name'],
    ['cyber_seats', 'Number of workstations', 'number', 'e.g. 25'],
    ['cyber_personal_data', 'Do you process customer personal data?', 'text', 'Yes / No'],
  ],
  'Life &amp; mortgage protection': [
    ['life_outstanding', 'Outstanding mortgage balance', 'text', 'e.g. €180,000'],
    ['life_bank', 'Bank', 'text', 'Lender'],
    ['life_dob', 'Date of birth', 'date', ''],
  ],
  "Workers' compensation": [
    ['wc_company', 'Company', 'text', 'Registered name'],
    ['wc_employees', 'Number of employees', 'number', 'e.g. 9'],
    ['wc_payroll', 'Annual payroll', 'text', 'e.g. €210,000'],
  ],
};

const ALL_BRANCH_BLOCKS_EN = Object.entries(BRANCH_FIELDS_EN)
  .map(([branch, fields]) => branchBlock(branch, fields))
  .join('\n');

// --- re-sync helpers ----------------------------------------------------------
//
// The first version of this script inserted the branch markup once and then
// skipped any page that already had it. That made the run idempotent but also
// made it inert: adding a branch to the lists above reached new pages only.
// The helpers below let every run rewrite the select and the conditional-field
// blocks from the lists, so this file stays the single source of truth for
// which branches exist and what each one asks.

/** Index just past the `</div>` that closes the `<div>` opening at `start`. */
function closeOfDiv(html, start) {
  const re = /<div\b|<\/div>/g;
  re.lastIndex = start;
  let depth = 0;
  let m;
  while ((m = re.exec(html))) {
    if (m[0] === '</div>') {
      if (--depth === 0) return m.index + '</div>'.length;
    } else {
      depth++;
    }
  }
  throw new Error('unbalanced <div> while scanning the conditional-field blocks');
}

/** Replaces the whole run of conditional-field blocks with freshly built ones. */
function syncBranchBlocks(html, blocks) {
  const marker = '<div class="form-branch-fields"';
  const first = html.indexOf(marker);
  if (first === -1) return html;
  const lineStart = html.lastIndexOf('\n', first) + 1;
  let end = closeOfDiv(html, first);
  for (;;) {
    const next = html.indexOf(marker, end);
    // Only absorb the next block if the two are adjacent siblings; anything
    // else means the run has ended.
    if (next === -1 || html.slice(end, next).trim() !== '') break;
    end = closeOfDiv(html, next);
  }
  return html.slice(0, lineStart) + blocks + html.slice(end);
}

/** Replaces the whole `<select …>…</select>` opening at `marker`. */
function syncSelect(html, marker, replacement) {
  const at = html.indexOf(marker);
  if (at === -1) return html;
  const end = html.indexOf('</select>', at) + '</select>'.length;
  return html.slice(0, at) + replacement + html.slice(end);
}

// Shared between the two homepages; built from the tokens already in :root.
const BRANCH_CSS = `<style>
  .form-branch-fields[hidden] { display: none; }
  .form-branch-fields {
    border-top: 1px solid var(--border, #E5DFCB);
    margin-top: 4px;
    padding-top: 14px;
  }
  .form-gdpr {
    margin-top: 12px;
    font-size: 11px;
    line-height: 1.55;
    color: var(--muted, #8A8B7E);
  }
  .form-gdpr a { color: var(--primary, #7A9A6B); }
</style>
</head>`;

const report = {
  homepage: false,
  homepageEn: false,
  articles: [],
  articlesEn: [],
  ctaFormAdded: [],
  sourceUrlAdded: [],
  honeypotAdded: [],
  skipped: [],
  preselected: 0,
  noBranch: [],
};

// --- homepage -----------------------------------------------------------------
{
  const path = join(PUBLIC, 'index.html');
  let html = await readFile(path, 'utf8');
  const before = html;

  if (!html.includes('data-branch-select')) {
    const oldSelect = html.slice(
      html.indexOf('<select id="tipo_seguro"'),
      html.indexOf('</select>', html.indexOf('<select id="tipo_seguro"')) + '</select>'.length
    );
    if (!oldSelect) throw new Error('tipo_seguro select not found');

    html = html.replace(
      oldSelect,
      `<select id="tipo_seguro" name="tipo_seguro" data-branch-select required>
            ${options('Seleccione o tipo de seguro...')}
          </select>`
    );

    // Branch fields go directly after the field wrapper holding the select.
    const selectAt = html.indexOf('<select id="tipo_seguro"');
    const anchor = '</select>\n          </div>';
    let at = html.indexOf(anchor, selectAt);
    let anchorLen = anchor.length;
    if (at === -1) {
      const loose = html.indexOf('</div>', html.indexOf('</select>', selectAt));
      at = loose;
      anchorLen = '</div>'.length;
    }
    if (at === -1) throw new Error('could not locate the end of the tipo_seguro field wrapper');
    html = html.slice(0, at + anchorLen) + '\n' + ALL_BRANCH_BLOCKS + html.slice(at + anchorLen);

    // Honeypot, source URL and the GDPR line the other forms already carry.
    html = html.replace(
      '<form class="hero-card-form" name="analise-gratuita" method="POST" data-netlify="true">\n        <input type="hidden" name="form-name" value="analise-gratuita">',
      `<form class="hero-card-form" name="analise-gratuita" method="POST" data-netlify="true" netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="analise-gratuita">
        <input type="hidden" name="source_url" value="">
        <p style="display:none"><label>Não preencher: <input name="bot-field"></label></p>`
    );

    html = html.replace(
      '<button type="submit" class="form-submit">Solicitar Análise Gratuita →</button>\n      </form>',
      `<button type="submit" class="form-submit">Solicitar Análise Gratuita →</button>
        <p class="form-gdpr">Resposta em 24 horas úteis. Os seus dados são usados apenas para preparar a análise e tratados ao abrigo do RGPD — consulte a <a href="/politica-de-privacidade/">Política de Privacidade</a>.</p>
      </form>`
    );

    if (!html.includes('/js/lead-branch-fields.js')) {
      html = html.replace(
        '</body>',
        '<script defer src="/js/lead-branch-fields.js"></script>\n</body>'
      );
    }

    // Styling for the two new pieces, built from the tokens already in :root.
    if (!html.includes('.form-branch-fields')) {
      html = html.replace('</head>', BRANCH_CSS);
    }
  }

  // Re-synced on every run, not just the first, so a branch added to the lists
  // at the top of this file reaches the page that was built before it existed.
  html = syncSelect(
    html,
    '<select id="tipo_seguro"',
    `<select id="tipo_seguro" name="tipo_seguro" data-branch-select required>
            ${options('Seleccione o tipo de seguro...')}
          </select>`
  );
  html = syncBranchBlocks(html, ALL_BRANCH_BLOCKS);

  if (html !== before) {
    await writeFile(path, html);
    report.homepage = true;
  } else {
    report.skipped.push('public/index.html (already in sync)');
  }
}

// --- article CTA forms --------------------------------------------------------
//
// The article form gets exactly what the homepage form got: the fourteen
// branches, the conditional fields, and — because the article already tells us
// what the reader came for — the matching branch selected on arrival. Someone
// who has just read the TVDE guide should not have to find "TVDE" in a list of
// fourteen.
//
// The mapping is by article tag first and category second, because a tag is the
// narrower statement: "Alojamento Local" and "Hotelaria & Turismo" share a
// category but quote as different branches. Where an article's subject has no
// branch in the dropdown, nothing is preselected — a wrong preselection is
// worse than none, and the gaps are reported at the end of the run.
const TAG_BRANCH = {
  'Seguros TVDE': 'TVDE (Uber, Bolt, Free Now)',
  'Seguros Automóvel': 'Automóvel',
  'Frotas & Transportes': 'Frota de empresa',
  'Distribuição & Logística': 'Frota de empresa',
  'Alojamento Local': 'Alojamento Local',
  'Hotelaria & Turismo': 'Hotelaria e Restauração',
  'Restauração & Hotelaria': 'Hotelaria e Restauração',
  'Riscos Cibernéticos': 'Riscos Cibernéticos',
  'Responsabilidade Civil': 'Responsabilidade Civil Profissional',
  'Obras & Construção': 'Multirriscos Empresarial',
  'D&O / Administradores': 'Multirriscos Empresarial',
  'Guia Legal & Compliance': 'Multirriscos Empresarial',
  'Gestão de Seguros': 'Multirriscos Empresarial',
  'Seguros Habitação': 'Habitação',
  'Seguros Individuais': 'Habitação',
  'Imobiliário · Titularidade': 'Habitação',
  'Seguros de Saúde': 'Saúde',
  'Seguros de Saúde · Expatriados': 'Saúde',
  'Condomínios': 'Condomínio',
};

const CATEGORY_BRANCH = {
  'seguros-auto-tvde': 'Automóvel',
  'hotelaria-turismo': 'Hotelaria e Restauração',
  'seguros-empresariais': 'Multirriscos Empresarial',
  'habitacao-particulares': 'Habitação',
  'seguros-saude': 'Saúde',
  condominios: 'Condomínio',
};

const CLUSTER_BRANCH_EN = {
  'health-insurance': 'Health',
  'home-property': 'Home',
  motor: 'Car',
  'business-liability': 'Business combined (multirriscos)',
  'holiday-lets-hospitality': 'Holiday let (Alojamento Local)',
  'personal-family': 'Home',
  // valuables-collections, marine and moving-to-portugal have no branch in the
  // thirteen; those articles open with nothing selected.
};

const data = JSON.parse(await readFile(join(ROOT, 'data', 'articles.json'), 'utf8'));
const enProposal = JSON.parse(
  await readFile(join(ROOT, 'data', 'en-categories-proposal.json'), 'utf8')
);
const enClusterOf = new Map();
for (const c of enProposal.categories) for (const s of c.articles) enClusterOf.set(s, c.slug);

/** Article page path -> branch to preselect, or undefined. */
const branchForPage = new Map();
for (const a of data.articles.pt) {
  if (a.status !== 'published') continue;
  const branch = TAG_BRANCH[a.tag] || CATEGORY_BRANCH[a.category];
  branchForPage.set(a.url, branch);
}
for (const a of data.articles.en) {
  if (a.status !== 'published') continue;
  branchForPage.set(a.url, CLUSTER_BRANCH_EN[enClusterOf.get(a.slug)]);
}

/** Marks one option selected, leaving the rest of the markup alone. */
const preselect = (select, branch) =>
  branch && select.includes(`<option value="${branch}">`)
    ? select.replace(`<option value="${branch}">`, `<option value="${branch}" selected>`)
    : select;

// The article form styles its fields with .cta-field, the homepage with
// .form-field. Same shape (label + input in a div), different stylesheet, so
// the shared blocks are re-labelled on the way in rather than given new CSS.
const articleBlocks = (blocks) => blocks.split('class="form-field"').join('class="cta-field"');

/**
 * Gives an article's CTA form the homepage treatment: thirteen branches, the
 * conditional fields, the reader's own branch already selected, the hidden
 * source URL and the script that reveals the matching block.
 */
function upgradeArticleForm(html, { selectName, oldSelect, newSelect, blocks }) {
  const selectStart = `<select name="${selectName}"`;

  if (html.includes(oldSelect)) {
    html = html.split(oldSelect).join(newSelect);
  } else {
    // Already carries the branch list from an earlier run: swap the whole
    // select so the preselection and the data-branch-select hook land too.
    const at = html.indexOf(selectStart);
    if (at !== -1) {
      const end = html.indexOf('</select>', at) + '</select>'.length;
      html = html.slice(0, at) + newSelect + html.slice(end);
    }
  }

  // Conditional fields: inserted after the select's field div the first time,
  // re-synced from the lists at the top of this file on every run after.
  if (!html.includes('class="form-branch-fields"')) {
    const at = html.indexOf(selectStart);
    if (at !== -1) {
      const closeSelect = html.indexOf('</select>', at) + '</select>'.length;
      const wrapperEnd = html.indexOf('</div>', closeSelect);
      if (wrapperEnd !== -1) {
        const cut = wrapperEnd + '</div>'.length;
        html = html.slice(0, cut) + '\n' + articleBlocks(blocks) + html.slice(cut);
      }
    }
  } else {
    html = syncBranchBlocks(html, articleBlocks(blocks));
  }

  if (!html.includes('.form-branch-fields')) html = html.replace('</head>', BRANCH_CSS);

  if (!html.includes('name="source_url"')) {
    html = html.replace(
      /(<input type="hidden" name="source" value="[^"]*">)/,
      '$1\n      <input type="hidden" name="source_url" value="">'
    );
  }

  if (!html.includes('/js/lead-branch-fields.js')) {
    html = html.replace('</body>', '<script defer src="/js/lead-branch-fields.js"></script>\n</body>');
  }

  return html;
}

const OLD_SELECT =
  '<select name="tipo-seguro" required><option value="">Selecionar</option><option value="Saúde">Saúde</option><option value="Auto">Auto</option><option value="Casa">Casa</option><option value="Empresa">Empresa</option><option value="Outro">Outro</option></select>';

// --- 3.4 articles that carry no CTA form at all -------------------------------
//
// The condominium articles were written before the dropdown had a condominium
// branch, so they were given a link to the landing page instead of a form —
// the reader had to change page to ask for anything. Now that the branch
// exists they get the same in-article form as every other article: the base
// markup goes in here, and the upgrade loop below then does to it exactly what
// it does to the forms that were already in the files.
const CTA_TOPO_CSS = `<style>
  /* CTA TOPO — same component as the rest of the article set. */
  .cta-topo { background: #F5F1E8; border-left: 4px solid #C9A84C; padding: 28px 32px; margin-bottom: 36px; }
  .cta-topo-title { font-family: 'Montserrat', sans-serif; font-size: 20px; font-weight: 700; color: #1B2B4B; margin-bottom: 6px; }
  .cta-topo-subtitle { font-size: 13px; color: #637060; margin-bottom: 18px; }
  .cta-topo-form { display: flex; gap: 10px; flex-wrap: wrap; align-items: flex-end; }
  .cta-topo-form .cta-field { flex: 1; min-width: 140px; }
  .cta-topo-form .cta-field label { display: block; font-size: 11px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: #8A8B7E; margin-bottom: 4px; }
  .cta-topo-form .cta-field input,
  .cta-topo-form .cta-field select { width: 100%; padding: 10px 12px; border: 1px solid #E5DFCB; background: #fff; font-family: 'Montserrat', sans-serif; font-size: 13px; color: #4A5A45; outline: none; transition: border-color 0.2s; }
  .cta-topo-form .cta-field input:focus,
  .cta-topo-form .cta-field select:focus { border-color: #C9A84C; }
  .cta-topo-form .cta-btn { background: #1B2B4B; color: #fff; border: none; padding: 10px 24px; font-family: 'Montserrat', sans-serif; font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; cursor: pointer; transition: background 0.2s; white-space: nowrap; }
  .cta-topo-form .cta-btn:hover { background: #2a3f66; }
  .cta-topo-micro { font-size: 10px; color: #B5B1A1; margin-top: 10px; }
  @media (max-width: 768px) {
    .cta-topo { padding: 20px 18px; }
    .cta-topo-title { font-size: 17px; }
    .cta-topo-form { flex-direction: column; }
    .cta-topo-form .cta-field { min-width: 100%; }
  }
</style>
</head>`;

const ctaTopoBlock = (slug, title, subtitle) => `
  <div class="cta-topo">
    <div class="cta-topo-title">${title}</div>
    <div class="cta-topo-subtitle">${subtitle}</div>
    <form class="cta-topo-form" name="cotacao-blog" method="POST" data-netlify="true" netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="cotacao-blog">
      <input type="hidden" name="source" value="${slug}">
      <p style="display:none"><label>Não preencher: <input name="bot-field"></label></p>
      <div class="cta-field"><label>Nome</label><input type="text" name="nome" required placeholder="O seu nome"></div>
      <div class="cta-field"><label>Email</label><input type="email" name="email" required placeholder="o.seu@email.com"></div>
      <div class="cta-field"><label>Tipo de seguro</label>${OLD_SELECT}</div>
      <button type="submit" class="cta-btn">Pedir cotação</button>
    </form>
    <div class="cta-topo-micro">Resposta em 24h úteis. Os seus dados são tratados ao abrigo do RGPD.</div>
  </div>
`;

const MISSING_CTA_FORM = {
  'obrigacoes-administrador-condominio-seguro': [
    'Auditoria gratuita ao seguro do condomínio',
    'Revemos capitais, coberturas e responsabilidade civil do edifício. Mediador registado na ASF, sem compromisso.',
  ],
  'seguro-condominio-capitais-desatualizados': [
    'Verificar o capital seguro do seu edifício',
    'Comparamos o capital em apólice com o custo real de reconstrução. Mediador registado na ASF, sem compromisso.',
  ],
  'seguro-condominio-obrigatorio-guia': [
    'Pedir cotação para o seu condomínio',
    'Levamos o mesmo edifício a várias seguradoras e apresentamos as propostas lado a lado. Sem compromisso.',
  ],
};

for (const [slug, [title, subtitle]] of Object.entries(MISSING_CTA_FORM)) {
  const path = join(PUBLIC, 'blog', slug, 'index.html');
  let html = await readFile(path, 'utf8');
  if (html.includes('name="cotacao-blog"')) continue;
  const anchor = '<div class="article-body">';
  const at = html.indexOf(anchor);
  if (at === -1) throw new Error(`${slug}: article-body not found`);
  html = html.slice(0, at) + ctaTopoBlock(slug, title, subtitle).trimStart() + '\n  ' + html.slice(at);
  if (!html.includes('.cta-topo ')) html = html.replace('</head>', CTA_TOPO_CSS);
  await writeFile(path, html);
  report.ctaFormAdded.push(`public/blog/${slug}/index.html`);
}

for (const rel of globSync('**/*.html', { cwd: PUBLIC })) {
  if (rel.startsWith('en/') || rel.startsWith('nl/')) continue;
  const path = join(PUBLIC, rel);
  let html = await readFile(path, 'utf8');
  if (!html.includes('name="cotacao-blog"')) continue;
  const before = html;

  const url = '/' + rel.replace(/index\.html$/, '');
  const branch = branchForPage.get(url);
  if (branchForPage.has(url) && !branch) report.noBranch.push(url);

  html = upgradeArticleForm(html, {
    selectName: 'tipo-seguro',
    oldSelect: OLD_SELECT,
    newSelect: preselect(
      `<select name="tipo-seguro" data-branch-select required>${options('Selecionar')}</select>`,
      branch
    ),
    blocks: ALL_BRANCH_BLOCKS,
  });

  if (html !== before) {
    await writeFile(path, html);
    report.articles.push(`public/${rel}`);
  }
  if (branch) report.preselected++;
}

// --- English homepage ---------------------------------------------------------
{
  const path = join(PUBLIC, 'en', 'index.html');
  let html = await readFile(path, 'utf8');
  const before = html;

  if (!html.includes('data-branch-select')) {
    const selectAt = html.indexOf('<select id="insurance_type"');
    if (selectAt === -1) throw new Error('insurance_type select not found');
    const selectEnd = html.indexOf('</select>', selectAt) + '</select>'.length;

    html =
      html.slice(0, selectAt) +
      `<select id="insurance_type" name="insurance_type" data-branch-select required>
            ${optionsEn('Select insurance type...')}
          </select>` +
      html.slice(selectEnd);

    // Branch fields go directly after the field wrapper holding the select.
    const wrapperEnd =
      html.indexOf('</div>', html.indexOf('</select>', html.indexOf('<select id="insurance_type"'))) +
      '</div>'.length;
    if (wrapperEnd === -1) throw new Error('could not locate the end of the insurance_type wrapper');
    html = html.slice(0, wrapperEnd) + '\n' + ALL_BRANCH_BLOCKS_EN + html.slice(wrapperEnd);

    // Honeypot, source URL and the GDPR line, which this form was missing.
    html = html.replace(
      '<form class="hero-card-form" name="free-analysis" method="POST" data-netlify="true">\n        <input type="hidden" name="form-name" value="free-analysis">',
      `<form class="hero-card-form" name="free-analysis" method="POST" data-netlify="true" netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="free-analysis">
        <input type="hidden" name="source_url" value="">
        <p style="display:none"><label>Don't fill this out: <input name="bot-field"></label></p>`
    );

    html = html.replace(
      '<button type="submit" class="form-submit">Request Free Analysis →</button>\n      </form>',
      `<button type="submit" class="form-submit">Request Free Analysis →</button>
        <p class="form-gdpr">Reply within 24 business hours. Your details are used only to prepare the review and are handled under the GDPR — see our <a href="/en/privacy-policy/">Privacy Policy</a>.</p>
      </form>`
    );

    if (!html.includes('/js/lead-branch-fields.js')) {
      html = html.replace(
        '</body>',
        '<script defer src="/js/lead-branch-fields.js"></script>\n</body>'
      );
    }

    if (!html.includes('.form-branch-fields')) {
      html = html.replace('</head>', BRANCH_CSS);
    }
  }

  // Same re-sync as the Portuguese homepage, for the same reason.
  html = syncSelect(
    html,
    '<select id="insurance_type"',
    `<select id="insurance_type" name="insurance_type" data-branch-select required>
            ${optionsEn('Select insurance type...')}
          </select>`
  );
  html = syncBranchBlocks(html, ALL_BRANCH_BLOCKS_EN);

  if (html !== before) {
    await writeFile(path, html);
    report.homepageEn = true;
  } else {
    report.skipped.push('public/en/index.html (already in sync)');
  }
}

// --- English article CTA forms ------------------------------------------------
const OLD_SELECT_EN =
  '<select name="insurance-type" required><option value="">Select</option><option value="Health">Health</option><option value="Car">Car</option><option value="Home">Home</option><option value="Business">Business</option><option value="Other">Other</option></select>';

for (const rel of globSync('en/**/*.html', { cwd: PUBLIC })) {
  const path = join(PUBLIC, rel);
  let html = await readFile(path, 'utf8');
  if (!html.includes('value="quote-blog"')) continue;
  const before = html;

  const url = '/' + rel.replace(/index\.html$/, '');
  const branch = branchForPage.get(url);
  if (branchForPage.has(url) && !branch) report.noBranch.push(url);

  html = upgradeArticleForm(html, {
    selectName: 'insurance-type',
    oldSelect: OLD_SELECT_EN,
    newSelect: preselect(
      `<select name="insurance-type" data-branch-select required>${optionsEn('Select')}</select>`,
      branch
    ),
    blocks: ALL_BRANCH_BLOCKS_EN,
  });

  if (html !== before) {
    await writeFile(path, html);
    report.articlesEn.push(`public/${rel}`);
  }
  if (branch) report.preselected++;
}

// --- 3.5 source_url on every remaining Netlify form ---------------------------
//
// 3.3 gave the homepage and article forms a hidden source_url. The
// hand-authored landing pages never got one, so a lead from, say,
// /seguros/condominios/ reached the inbox with no record of the page it came
// from beyond a static "source" slug — and the pages that lack even that were
// indistinguishable from each other. Every Netlify form on the site now
// carries the field, and the page script fills it in on load.
{
  const SOURCE_URL_INPUT = '<input type="hidden" name="source_url" value="">';
  for (const rel of globSync('**/*.html', { cwd: PUBLIC })) {
    const path = join(PUBLIC, rel);
    let html = await readFile(path, 'utf8');
    if (!html.includes('data-netlify="true"')) continue;
    if (html.includes('name="source_url"')) continue;
    const before = html;

    // One per form: anchor on the form-name field Netlify requires anyway.
    html = html.replace(
      /([ \t]*)(<input type="hidden" name="form-name" value="[^"]*">)/g,
      `$1$2\n$1${SOURCE_URL_INPUT}`
    );
    if (!html.includes('/js/lead-branch-fields.js')) {
      html = html.replace('</body>', '<script defer src="/js/lead-branch-fields.js"></script>\n</body>');
    }

    if (html !== before) {
      await writeFile(path, html);
      report.sourceUrlAdded.push(`public/${rel}`);
    }
  }
}

// --- 3.6 honeypot field on every form that declares one ----------------------
//
// `netlify-honeypot="bot-field"` on the form tag does nothing on its own: it
// names a field the form must also contain. A form that declares the attribute
// without the field is not protected, and nothing anywhere reports it. This
// pass closes the gap wherever it opens.
{
  const FORM_RE = /<form[^>]*netlify-honeypot="bot-field"[^>]*>([\s\S]*?)<\/form>/g;
  for (const rel of globSync('**/*.html', { cwd: PUBLIC })) {
    const path = join(PUBLIC, rel);
    let html = await readFile(path, 'utf8');
    if (!html.includes('netlify-honeypot="bot-field"')) continue;
    const before = html;
    const en = rel.startsWith('en/') || rel.startsWith('nl/');
    const trap = `<p style="display:none"><label>${
      en ? "Don't fill this out" : 'Não preencher'
    }: <input name="bot-field"></label></p>`;

    html = html.replace(FORM_RE, (whole, inner) => {
      if (inner.includes('name="bot-field"')) return whole;
      const anchor = inner.match(/([ \t]*)<input type="hidden" name="form-name" value="[^"]*">/);
      if (!anchor) return whole;
      return whole.replace(anchor[0], `${anchor[0]}\n${anchor[1]}${trap}`);
    });

    if (html !== before) {
      await writeFile(path, html);
      report.honeypotAdded.push(`public/${rel}`);
    }
  }
}

console.log(`PT homepage upgraded: ${report.homepage}`);
console.log(`EN homepage upgraded: ${report.homepageEn}`);
console.log(`CTA form added where there was none: ${report.ctaFormAdded.length}`);
console.log(`source_url added to forms that lacked it: ${report.sourceUrlAdded.length}`);
console.log(`honeypot field added where it was declared but absent: ${report.honeypotAdded.length}`);
console.log(`PT article CTA forms upgraded: ${report.articles.length}`);
console.log(`EN article CTA forms upgraded: ${report.articlesEn.length}`);
console.log(`articles opening on their own branch: ${report.preselected}`);
if (report.noBranch.length)
  console.log(
    `no branch in the dropdown for these subjects (nothing preselected):\n  ` +
      report.noBranch.join('\n  ')
  );
if (report.skipped.length) console.log('skipped:\n  ' + report.skipped.join('\n  '));

