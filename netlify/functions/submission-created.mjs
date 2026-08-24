import { Resend } from "resend";

// -----------------------------------------------------------------------------
// Netlify Forms trigger: fires on every verified submission of any form on the
// site. We only act on the intake forms listed in HANDLED_FORMS and email a
// notification to the team via Resend (same flow used elsewhere on the site).
//
// Two families of form arrive here:
//   * the older intake forms, which have a fixed, known set of fields and are
//     rendered from the FIELD_LABELS allow-list;
//   * the quote forms on /seguros/ and the article CTAs, whose fields differ by
//     branch. Those are rendered in full, so a field added to a landing page
//     shows up in the email without this function needing to change.
// -----------------------------------------------------------------------------

function escapeHtml(value) {
  return String(value == null ? "" : value).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[c]));
}

// Checkbox groups (e.g. "review" on the valuables form) arrive as an array.
function formatValue(value) {
  return Array.isArray(value) ? value.join(", ") : value;
}

const FIELD_LABELS = {
  package: "Interested in (package)",
  full_name: "Full name",
  // The Collections & Valuables form uses the shorter field names below.
  name: "Full name",
  email: "Email",
  phone: "Phone",
  country: "Country",
  tax_residence_country: "Country of tax residence",
  has_nif: "Already has a NIF",
  has_representative: "Already has a fiscal representative",
  review: "Would like to review",
  location: "Where the items are kept",
  valuation: "Current valuation",
  "existing-cover": "Existing cover",
  source: "Submitted from",
  message: "Message",
  gdpr_consent: "GDPR consent",
  // Dutch landing page (/nl/verzekeringen-portugal/). The visitor writes in
  // Dutch; the labels stay English because the team works in English.
  naam: "Name",
  telefoon: "Phone",
  type_verzekering: "Type of insurance",
  opmerkingen: "Notes",
  toestemming: "GDPR consent",
  lang: "Page language",
};

// Labels for the quote forms. Anything not listed is still rendered, using the
// field name tidied up — better a rough label than a silently dropped answer.
const QUOTE_LABELS = {
  ramo: "Ramo",
  nome: "Nome",
  email: "Email",
  telefone: "Telefone / WhatsApp",
  nif: "NIF",
  empresa: "Empresa",
  cae: "CAE / atividade",
  perfil: "Motorista ou operador",
  operador: "Operador TVDE",
  licenca_imt: "N.º de licença IMT",
  n_viaturas: "N.º de viaturas",
  tipos_viatura: "Tipos de viatura",
  veiculo: "Veículo",
  matricula: "Matrícula",
  km_ano: "Km/ano",
  km_ano_agregado: "Km/ano agregados",
  zona: "Zona de operação",
  anos_carta: "Anos de carta",
  sinistros_3_anos: "Sinistros (3 anos)",
  seguro_atual: "Seguro atual",
  vencimento: "Data de vencimento",
  tipo_unidade: "Tipo de unidade",
  registo_al: "N.º de registo AL",
  morada: "Morada",
  n_quartos: "N.º de quartos",
  capacidade: "Capacidade",
  valor_imovel: "Valor do imóvel",
  valor_recheio: "Valor do recheio",
  piscina: "Tem piscina",
  propriedade_horizontal: "Propriedade horizontal",
  tipo_imovel: "Tipo de imóvel",
  codigo_postal: "Código postal",
  ano_construcao: "Ano de construção",
  area: "Área (m²)",
  ocupacao: "Perfil de ocupação",
  valor_reconstrucao: "Valor de reconstrução",
  seguranca: "Sistemas de segurança",
  n_colaboradores: "N.º de colaboradores",
  volume_negocios: "Volume de negócios",
  n_estabelecimentos: "N.º de estabelecimentos",
  morada_estabelecimentos: "Morada(s)",
  valor_edificio: "Valor do edifício / benfeitorias",
  valor_equipamentos: "Valor de equipamentos",
  valor_existencias: "Valor de existências",
  seguros_atuais: "Seguros em vigor",
  mensagem: "Notas",
  tipo_seguro: "Tipo de seguro",
  "tipo-seguro": "Tipo de seguro",
  source: "Artigo de origem",
  source_url: "Página de origem",

  // Branch-specific qualification fields on the homepage form. Same wording as
  // the visible labels, so the email reads back exactly what was asked.
  saude_idade: "Idade da pessoa mais velha a segurar",
  saude_pessoas: "Quantas pessoas a segurar",
  saude_preexistentes: "Doenças pré-existentes a declarar",
  auto_veiculo: "Marca, modelo e ano",
  auto_matricula: "Matrícula",
  auto_anos_carta: "Anos de carta",
  tvde_perfil: "É motorista ou operador?",
  tvde_viaturas: "N.º de viaturas",
  tvde_zona: "Zona de operação",
  frota_empresa: "Empresa",
  frota_viaturas: "N.º de viaturas",
  frota_sinistros: "Sinistros nos últimos 3 anos",
  habitacao_tipo: "Tipo de imóvel",
  habitacao_cp: "Código postal",
  habitacao_valor: "Valor de reconstrução estimado",
  al_tipo: "Tipo de unidade",
  al_registo: "N.º de registo AL",
  al_capacidade: "Capacidade (hóspedes)",
  condominio_nome: "Nome do condomínio",
  condominio_nif: "NIF do condomínio",
  condominio_morada: "Morada e código postal",
  condominio_fracoes: "Número de frações",
  condominio_pisos: "Número de pisos",
  condominio_ano_construcao: "Ano de construção",
  condominio_elevador: "Existe elevador",
  condominio_espacos_exteriores: "Existe piscina ou espaços comuns exteriores",
  condominio_capital: "Capital seguro atual do edifício",
  condominio_seguradora: "Seguradora atual",
  condominio_vencimento: "Data de vencimento",
  condominio_contacto: "Quem contacta",
  horeca_tipo: "Tipo de estabelecimento",
  horeca_colaboradores: "N.º de colaboradores",
  horeca_volume: "Volume de negócios anual",
  empresarial_empresa: "Empresa",
  empresarial_cae: "CAE / atividade",
  empresarial_colaboradores: "N.º de colaboradores",
  rcp_profissao: "Profissão ou atividade",
  rcp_capital: "Capital pretendido",
  rcp_obrigatorio: "É exigido por ordem profissional ou contrato?",
  cyber_empresa: "Empresa",
  cyber_postos: "N.º de postos de trabalho",
  cyber_dados: "Trata dados pessoais de clientes?",
  vida_capital: "Capital em dívida",
  vida_banco: "Banco",
  vida_nascimento: "Data de nascimento",
  at_empresa: "Empresa",
  at_trabalhadores: "N.º de trabalhadores",
  at_massa_salarial: "Massa salarial anual",

  // English homepage branch fields.
  insurance_type: "Type of insurance",
  "insurance-type": "Type of insurance",
  health_age: "Age of the oldest person to insure",
  health_people: "How many people to insure",
  health_preexisting: "Pre-existing conditions to declare",
  car_vehicle: "Make, model and year",
  car_plate: "Registration plate",
  car_licence_years: "Years holding a licence",
  tvde_role: "Driver or operator",
  tvde_vehicles: "Number of vehicles",
  tvde_area: "Area of operation",
  fleet_company: "Company",
  fleet_vehicles: "Number of vehicles",
  fleet_claims: "Claims in the last 3 years",
  home_type: "Property type",
  home_postcode: "Postcode",
  home_rebuild_value: "Estimated rebuild value",
  al_unit_type: "Type of unit",
  al_licence: "AL registration number",
  al_guests: "Capacity (guests)",
  condo_units: "Number of units",
  condo_postcode: "Postcode",
  condo_role: "Role in the condominium",
  horeca_venue: "Type of venue",
  horeca_staff: "Number of staff",
  horeca_turnover: "Annual turnover",
  business_company: "Company",
  business_activity: "CAE / activity",
  business_staff: "Number of staff",
  pi_profession: "Profession or activity",
  pi_limit: "Limit of indemnity sought",
  pi_required: "Required by a professional body or contract",
  cyber_company_en: "Company",
  cyber_seats: "Number of workstations",
  cyber_personal_data: "Processes customer personal data",
  life_outstanding: "Outstanding mortgage balance",
  life_bank: "Bank",
  life_dob: "Date of birth",
  wc_company: "Company",
  wc_employees: "Number of employees",
  wc_payroll: "Annual payroll",

  // Older intake forms that previously sent no notification at all.
  name: "Name",
  phone: "Phone",
  company: "Company",
  message: "Message",
  situation: "Situation described",
  postcode: "Postcode",
  "property-type": "Property type",
  "property-use": "Property use",
  "construction-year": "Year of construction",
  "rebuild-value": "Rebuild value",
  "current-policy": "Current policy",
  // Only the national expat hub asks this; the other forms infer the country
  // from the postcode, which a lead who has not moved yet does not have.
  owner_location: "Where they live now",
  role: "Role",
  buildings: "Buildings",
  funcao: "Função",
  edificios: "Edifícios",
  telemovel: "Telemóvel",
  codigoPostal: "Código postal",
  numCartaConducao: "N.º de carta de condução",
  dataCartaConducao: "Data da carta de condução",
  cartaoCidadao: "Cartão de cidadão (ficheiro)",
  certidaoPermanente: "Certidão permanente (ficheiro)",
  cartaAssinada: "Carta assinada (ficheiro)",
  tipoCliente: "Tipo de cliente",
  seguradora: "Seguradora atual",
  seguradoraDetalhe: "Seguradora (detalhe)",
  apolices: "Apólices a transferir",
  localidade: "Localidade",
  subject: "Assunto",
};

// Never rendered: Netlify plumbing and the honeypot.
const INTERNAL_FIELDS = new Set(["form-name", "bot-field", "formName"]);

// The handful of field names shared by both languages need an English label
// when the lead came from an English page.
const QUOTE_LABELS_EN = {
  source: "Source article",
  source_url: "Page it was sent from",
  lang: "Page language",
};

// Forms handled by this notification flow, with the wording used in the email.
const HANDLED_FORMS = {
  "relocation-services": {
    heading: "New relocation &amp; company services enquiry",
    intro: "A new submission was received from the Settle in Portugal landing page.",
    subjectPrefix: "New relocation enquiry",
  },
  "fiscal-representation": {
    heading: "New fiscal representation enquiry",
    intro: "A new submission was received from the fiscal representation service page.",
    subjectPrefix: "New fiscal representation enquiry",
  },
  "nl-offerte-aanvraag": {
    heading: "New Dutch quote request",
    intro:
      "A new submission was received from the Dutch landing page (/nl/verzekeringen-portugal/). " +
      "The visitor expects a written reply by email within 24 hours — do not call.",
    subjectPrefix: "New Dutch quote request",
  },
  "valuables-review": {
    heading: "New Collections &amp; Valuables review request",
    intro:
      "A new submission was received from the Collections &amp; Valuables cluster " +
      "(/en/private-clients/ or one of its articles). The visitor expects a written " +
      "reply within 24 hours — reply by email or WhatsApp, do not call.",
    subjectPrefix: "New valuables review request",
  },

  // --- quote forms ------------------------------------------------------------
  "cotacao-tvde": {
    quote: true,
    heading: "Novo pedido de cotação — TVDE",
    page: "/seguros/tvde/",
    branch: "TVDE",
  },
  "cotacao-frota": {
    quote: true,
    heading: "Novo pedido de cotação — Frota",
    page: "/seguros/frota/",
    branch: "Frota",
  },
  "cotacao-alojamento-local": {
    quote: true,
    heading: "Novo pedido de cotação — Alojamento Local",
    page: "/seguros/alojamento-local/",
    branch: "Alojamento Local",
  },
  "cotacao-habitacao": {
    quote: true,
    heading: "Novo pedido de cotação — Habitação",
    page: "/seguros/habitacao/",
    branch: "Habitação",
  },
  "cotacao-empresarial": {
    quote: true,
    heading: "Novo pedido de análise — Multirriscos Empresarial",
    page: "/seguros/empresarial/",
    branch: "Empresarial",
  },
  "quote-tvde-en": {
    quote: true,
    en: true,
    heading: "New quote request — TVDE (EN)",
    page: "/en/insurance/tvde/",
    branch: "TVDE",
  },
  "cotacao-blog": { quote: true, heading: "Novo pedido de cotação — artigo Insights" },
  "analise-gratuita": { quote: true, heading: "Novo pedido de análise gratuita — homepage" },
  "free-analysis": {
    quote: true,
    en: true,
    heading: "New free-analysis request — homepage (EN)",
    page: "/en/",
  },
  "quote-blog": { quote: true, en: true, heading: "New quote request — article (EN)" },

  // Older forms that were live but had no notification wired up: leads sat in
  // the Netlify Forms dashboard and nobody was emailed. Rendered in full, same
  // as the quote forms, so nothing a visitor typed is dropped.
  "expat-health-quote": {
    quote: true,
    en: true,
    heading: "New expat health quote request",
    branch: "Health",
  },
  "home-insurance-quote": {
    quote: true,
    en: true,
    heading: "New home insurance quote request",
    page: "/en/home-insurance-quote/",
    branch: "Home",
  },
  "landlord-insurance-quote": {
    quote: true,
    en: true,
    heading: "New landlord insurance quote request",
    page: "/en/landlord-insurance-portugal/",
    branch: "Home",
  },
  "seguro-auto": {
    quote: true,
    heading: "Novo pedido — Seguro Auto",
    page: "/seguro-auto/",
    branch: "Automóvel",
  },
  contacto: {
    quote: true,
    heading: "Nova mensagem de contacto",
    page: "/#contacto",
    branch: "Contacto",
  },
  "contact-en": {
    quote: true,
    en: true,
    heading: "New contact message (EN)",
    page: "/en/#contact",
    branch: "Contact",
  },
  "condominium-audit": {
    quote: true,
    en: true,
    heading: "New condominium audit request (EN)",
    page: "/en/condominium-insurance-algarve/",
    branch: "Condominium",
  },
  "auditoria-condominio": {
    quote: true,
    heading: "Novo pedido de auditoria de condomínio",
    page: "/seguros-condominios-algarve/",
    branch: "Condomínio",
  },
  "alterar-mediador": {
    quote: true,
    heading: "Novo pedido de mudança de mediador",
    page: "/alterarmediador/",
    branch: "Mudança de mediador",
  },
  // The national expat hub. Its visitors arrive without knowing which product
  // they need, so insurance_type is often "Not sure — help me work it out";
  // the branch below is the fallback for those, and quoteSubject uses the
  // answer itself whenever there is one.
  "expat-insurance-review": {
    quote: true,
    en: true,
    heading: "New expat insurance review request",
    page: "/en/expat-insurance-portugal/",
    branch: "Expat review",
  },
  "lead-nl": { quote: true, en: true, heading: "New lead — Dutch landing page", page: "/nl/" },
  "lead-fr": { quote: true, en: true, heading: "New lead — French landing page", page: "/fr/" },
  "lead-de": { quote: true, en: true, heading: "New lead — German landing page", page: "/de/" },
};

const humanise = (key) =>
  key.replace(/[_-]+/g, " ").replace(/^./, (c) => c.toUpperCase());

/** Renders every answered field, known label or not, in submission order. */
export function renderAllFields(data, en = false) {
  return Object.keys(data)
    .filter((key) => !INTERNAL_FIELDS.has(key))
    .filter((key) => data[key] != null && String(formatValue(data[key])).trim() !== "")
    .map(
      (key) =>
        `<p style="margin:0 0 8px;"><strong>${escapeHtml(
          (en && QUOTE_LABELS_EN[key]) || QUOTE_LABELS[key] || humanise(key)
        )}:</strong> ${escapeHtml(formatValue(data[key]))}</p>`
    )
    .join("");
}

/**
 * Subject line for a quote: `[LEAD TVDE] Ana Silva — Lisboa — 3 viaturas`.
 * The two qualifiers are whichever of the location- and size-type answers the
 * branch happened to ask for, so the inbox is sortable without opening anything.
 */
export function quoteSubject(data, fallbackBranch) {
  const branch =
    data.ramo ||
    data.tipo_seguro ||
    data["tipo-seguro"] ||
    data.insurance_type ||
    data["insurance-type"] ||
    data.type_verzekering ||
    fallbackBranch ||
    "Geral";
  const name = data.nome || data.name || data.full_name || "sem nome";

  const where = [
    data.zona,
    data.tvde_zona,
    data.tvde_area,
    data.codigo_postal,
    data.habitacao_cp,
    data.condominio_morada,
    data.condo_postcode,
    data.postcode,
    data.home_postcode,
    data.morada,
    data.localidade,
  ]
    .map((v) => (v == null ? "" : String(v).trim()))
    .find(Boolean);

  const sizeFields = [
    ["n_viaturas", "viatura", "viaturas"],
    ["tvde_viaturas", "viatura", "viaturas"],
    ["frota_viaturas", "viatura", "viaturas"],
    ["tvde_vehicles", "vehicle", "vehicles"],
    ["fleet_vehicles", "vehicle", "vehicles"],
    ["n_colaboradores", "colaborador", "colaboradores"],
    ["horeca_colaboradores", "colaborador", "colaboradores"],
    ["empresarial_colaboradores", "colaborador", "colaboradores"],
    ["at_trabalhadores", "trabalhador", "trabalhadores"],
    ["business_staff", "employee", "employees"],
    ["wc_employees", "employee", "employees"],
    ["capacidade", "hóspede", "hóspedes"],
    ["al_capacidade", "hóspede", "hóspedes"],
    ["al_guests", "guest", "guests"],
    ["n_quartos", "quarto", "quartos"],
    ["saude_pessoas", "pessoa", "pessoas"],
    ["health_people", "person", "people"],
    ["buildings", "building", "buildings"],
    ["edificios", "edifício", "edifícios"],
    ["condominio_fracoes", "fração", "frações"],
    ["condo_units", "unit", "units"],
  ];
  let size = "";
  for (const [key, singular, plural] of sizeFields) {
    const v = data[key];
    if (v != null && String(v).trim() !== "") {
      const n = String(v).trim();
      size = `${n} ${n === "1" ? singular : plural}`;
      break;
    }
  }

  return ["[LEAD " + branch + "] " + name, where, size].filter(Boolean).join(" — ");
}

export default async (req) => {
  let body;
  try {
    body = await req.json();
  } catch {
    return new Response("Bad request", { status: 400 });
  }

  const payload = body && body.payload ? body.payload : {};
  const formName = payload.form_name || payload.formName || "";

  // Only handle the known intake forms; ignore other site forms.
  const formConfig = HANDLED_FORMS[formName];
  if (!formConfig) {
    return new Response("Ignored", { status: 200 });
  }

  const data = payload.data || {};

  if (!process.env.RESEND_API_KEY) {
    console.log("RESEND_API_KEY not set — skipping intake notification email.");
    return new Response("OK", { status: 200 });
  }

  let rows;
  let subject;
  let intro;

  if (formConfig.quote) {
    rows = renderAllFields(data, Boolean(formConfig.en));
    subject = quoteSubject(data, formConfig.branch);
    const from = data.source_url || formConfig.page || data.source || "—";
    intro = formConfig.en
      ? `Submitted from ${escapeHtml(from)}. A reply within one working day was promised.`
      : `Pedido submetido a partir de ${escapeHtml(from)}. Resposta prometida em 24 horas úteis.`;
  } else {
    rows = Object.keys(FIELD_LABELS)
      .filter((key) => data[key] != null && String(formatValue(data[key])).trim() !== "")
      .map(
        (key) =>
          `<p style="margin:0 0 8px;"><strong>${escapeHtml(FIELD_LABELS[key])}:</strong> ${escapeHtml(
            formatValue(data[key])
          )}</p>`
      )
      .join("");

    // Each intake form names these two fields differently; fall back across them
    // so the subject line is meaningful whichever form fired.
    const pkg = data.package || data.type_verzekering || formatValue(data.review) || "—";
    const name = data.full_name || data.naam || data.name || "unknown";
    subject = `${formConfig.subjectPrefix} — ${pkg} — ${name}`;
    intro = formConfig.intro;
  }

  const html = `
    <h2 style="font-family:Arial,sans-serif;">${formConfig.heading}</h2>
    <p style="font-family:Arial,sans-serif;">${intro}</p>
    <hr/>
    <div style="font-family:Arial,sans-serif;font-size:14px;color:#333;">${rows}</div>
    <hr/>
    <p style="font-family:Arial,sans-serif;font-size:12px;color:#888;">Submitted: ${escapeHtml(
      payload.created_at || new Date().toISOString()
    )}</p>
  `;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "leads@adlerrochefort.com",
      to: "insurance@adlerrochefort.com",
      replyTo: data.email || undefined,
      subject,
      html,
    });
  } catch (err) {
    console.error("Failed to send intake notification email:", err);
    // Do not fail the submission pipeline on email errors.
  }

  return new Response("OK", { status: 200 });
};
