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

// The thirteen branches, in the order agreed for the dropdown.
const BRANCHES = [
  'Saúde',
  'Automóvel',
  'TVDE (Uber, Bolt, Free Now)',
  'Frota de empresa',
  'Habitação',
  'Alojamento Local',
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

// The same thirteen branches as the English reader would name them.
const BRANCHES_EN = [
  'Health',
  'Car',
  'TVDE (Uber, Bolt, Free Now)',
  'Company fleet',
  'Home',
  'Holiday let (Alojamento Local)',
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

const branchBlock = (branch, fields) => `        <div class="form-branch-fields" data-branch="${branch}" hidden>
${fields
  .map(
    ([name, label, type, placeholder]) => `          <div class="form-field">
            <label for="${name}">${label}</label>
            <input type="${type}" id="${name}" name="${name}" placeholder="${placeholder}" disabled>
          </div>`
  )
  .join('\n')}
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

const report = { homepage: false, homepageEn: false, articles: [], articlesEn: [], skipped: [] };

// --- homepage -----------------------------------------------------------------
{
  const path = join(PUBLIC, 'index.html');
  let html = await readFile(path, 'utf8');

  if (html.includes('data-branch-select')) {
    report.skipped.push('public/index.html (already upgraded)');
  } else {
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

    await writeFile(path, html);
    report.homepage = true;
  }
}

// --- article CTA forms --------------------------------------------------------
const OLD_SELECT =
  '<select name="tipo-seguro" required><option value="">Selecionar</option><option value="Saúde">Saúde</option><option value="Auto">Auto</option><option value="Casa">Casa</option><option value="Empresa">Empresa</option><option value="Outro">Outro</option></select>';
const NEW_SELECT = `<select name="tipo-seguro" required>${options('Selecionar')}</select>`;

for (const rel of globSync('**/*.html', { cwd: PUBLIC })) {
  const path = join(PUBLIC, rel);
  let html = await readFile(path, 'utf8');
  if (!html.includes('name="cotacao-blog"')) continue;
  const before = html;

  if (html.includes(OLD_SELECT)) html = html.split(OLD_SELECT).join(NEW_SELECT);

  if (!html.includes('name="source_url"')) {
    html = html.replace(
      /(<input type="hidden" name="source" value="[^"]*">)/,
      '$1\n      <input type="hidden" name="source_url" value="">'
    );
  }

  if (!html.includes('/js/lead-branch-fields.js')) {
    html = html.replace('</body>', '<script defer src="/js/lead-branch-fields.js"></script>\n</body>');
  }

  if (html !== before) {
    await writeFile(path, html);
    report.articles.push(`public/${rel}`);
  }
}

// --- English homepage ---------------------------------------------------------
{
  const path = join(PUBLIC, 'en', 'index.html');
  let html = await readFile(path, 'utf8');

  if (html.includes('data-branch-select')) {
    report.skipped.push('public/en/index.html (already upgraded)');
  } else {
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

    await writeFile(path, html);
    report.homepageEn = true;
  }
}

// --- English article CTA forms ------------------------------------------------
const OLD_SELECT_EN =
  '<select name="insurance-type" required><option value="">Select</option><option value="Health">Health</option><option value="Car">Car</option><option value="Home">Home</option><option value="Business">Business</option><option value="Other">Other</option></select>';
const NEW_SELECT_EN = `<select name="insurance-type" required>${optionsEn('Select')}</select>`;

for (const rel of globSync('en/**/*.html', { cwd: PUBLIC })) {
  const path = join(PUBLIC, rel);
  let html = await readFile(path, 'utf8');
  if (!html.includes('value="quote-blog"')) continue;
  const before = html;

  if (html.includes(OLD_SELECT_EN)) html = html.split(OLD_SELECT_EN).join(NEW_SELECT_EN);

  if (!html.includes('name="source_url"')) {
    html = html.replace(
      /(<input type="hidden" name="source" value="[^"]*">)/,
      '$1\n      <input type="hidden" name="source_url" value="">'
    );
  }

  if (!html.includes('/js/lead-branch-fields.js')) {
    html = html.replace('</body>', '<script defer src="/js/lead-branch-fields.js"></script>\n</body>');
  }

  if (html !== before) {
    await writeFile(path, html);
    report.articlesEn.push(`public/${rel}`);
  }
}

console.log(`PT homepage upgraded: ${report.homepage}`);
console.log(`EN homepage upgraded: ${report.homepageEn}`);
console.log(`PT article CTA forms upgraded: ${report.articles.length}`);
console.log(`EN article CTA forms upgraded: ${report.articlesEn.length}`);
if (report.skipped.length) console.log('skipped:\n  ' + report.skipped.join('\n  '));

