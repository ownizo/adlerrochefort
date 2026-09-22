import { Resend } from "resend";
import { sendLeadToCrm, buildCrmLeadPayload } from "./lib/crm-sync.mjs";
import { insertQuoteRequest } from "./lib/quote-requests-sync.mjs";
import { parseDynamicFields } from "./lib/dynamic-fields.mjs";
import { isTestModeSubmission } from "./lib/lead-classification.mjs";
// Static JSON imports, not a computed require()/fs.readFileSync() of a path
// under data/ — same reasoning as netlify/functions/lib/plate.mjs: esbuild
// only inlines a *static* import at bundle time, and a static one crossing
// out of netlify/functions/ bundles just fine (unlike a dynamic require,
// which esbuild never even tries to resolve). Used only to turn a
// nationality ISO code into a readable name for the notification email
// (B3, Especificação v2) — dados_comuns.nacionalidade in quote_requests
// keeps the raw code either way, see quote-requests-sync.mjs.
import ptQuoteFormStrings from "../../data/i18n/quote-form/pt.json" with { type: "json" };
import enQuoteFormStrings from "../../data/i18n/quote-form/en.json" with { type: "json" };
import deQuoteFormStrings from "../../data/i18n/quote-form/de.json" with { type: "json" };
import nlQuoteFormStrings from "../../data/i18n/quote-form/nl.json" with { type: "json" };
import plQuoteFormStrings from "../../data/i18n/quote-form/pl.json" with { type: "json" };
import svQuoteFormStrings from "../../data/i18n/quote-form/sv.json" with { type: "json" };
import daQuoteFormStrings from "../../data/i18n/quote-form/da.json" with { type: "json" };
import zhQuoteFormStrings from "../../data/i18n/quote-form/zh.json" with { type: "json" };
import heQuoteFormStrings from "../../data/i18n/quote-form/he.json" with { type: "json" };

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
//
// CRM sync (adlerpro/admin.adlerrochefort.com)
// After the notification email is sent, and only for submissions classified
// as an individual (person) lead (see netlify/functions/lib/lead-classification.mjs),
// this also fires a best-effort, authenticated, server-to-server call to the
// CRM's lead-intake endpoint (see netlify/functions/lib/crm-sync.mjs). This is
// strictly additional: it never replaces the email, never blocks the response
// to Netlify Forms, and any failure (network, timeout, CRM down, wrong
// secret) is caught and only logged — the visitor-facing flow is unaffected
// either way. Business/condominium/ambiguous leads are skipped here and keep
// going through email only; CRM sync for them is a later phase.
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
  // Stamped client-side by ar-conversion.js / ar-quote-form.js. Quote forms
  // render every field, so this only ever mattered for the allow-listed
  // forms below, where the full URL was being dropped from the email.
  source_url: "Page URL",
  message: "Message",
  gdpr_consent: "GDPR consent",
  // adler-pro-interesse/adler-pro-interest, parcerias-imobiliarias/real-estate-partnership
  // (Phase 12, no-CTA blog pages — see HANDLED_FORMS below).
  nome: "Full name",
  empresa: "Company",
  mensagem: "Message",
  agencia: "Agency",
  telefone: "Phone",
  company: "Company",
  agency: "Agency",
  // Dutch landing page (/nl/verzekeringen-portugal/). The visitor writes in
  // Dutch; the labels stay English because the team works in English.
  naam: "Name",
  telefoon: "Phone",
  type_verzekering: "Type of insurance",
  opmerkingen: "Notes",
  toestemming: "GDPR consent",
  lang: "Page language",
  // German cluster (/de/*, scripts/generate-de-cluster.mjs). `language` and
  // `market` are the GA4-style attribution fields from brief Part 11, not the
  // `lang` shortcut above — de-angebot-anfrage carries a fixed `language: 'DE'`
  // classification in lead-classification.mjs instead, so these two are only
  // ever shown in the notification email, not read by crm-sync.mjs.
  telefon: "Phone",
  versicherungsart: "Type of insurance",
  nachricht: "Notes",
  einwilligung: "GDPR consent",
  product_interest: "Product interest",
  market: "Market segment",
};

// Labels for the quote forms. Anything not listed is still rendered, using the
// field name tidied up — better a rough label than a silently dropped answer.
const QUOTE_LABELS = {
  ramo: "Ramo",
  nome: "Nome",
  email: "Email",
  telefone: "Telefone / WhatsApp",
  nif: "NIF",
  // Especificação v2 — Passo 1 (Identificação, transversal a todos os ramos)
  // and the Auto-specific Passo 2 fields (public/seguros/auto/,
  // public/en/car-insurance-portugal/). `nacionalidade` and `data_carta`
  // reuse the same names on both language pages by design — see this
  // session's PR notes for why, in short: risk-specific fields that are not
  // part of COMMON_FIELD_ALIASES (netlify/functions/lib/quote-requests-sync.mjs)
  // don't need a language-specific alias, so keeping one name everywhere
  // keeps quote_requests.dados_risco consistent across languages.
  data_nascimento: "Data de nascimento",
  nacionalidade: "Nacionalidade",
  residente_fiscal: "Residente fiscal em Portugal",
  data_carta: "Data de emissão da carta de condução",
  data_inicio: "Data de início pretendida",
  rgpd: "Consentimento RGPD",
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
  // Especificação v2 — Passo 2 (Habitação), Fase 2.
  regime_ocupacao: "Regime de ocupação",
  al_regime: "Regime de Alojamento Local",
  area_bruta: "Área bruta de construção (m²)",
  casas_banho: "N.º de casas de banho",
  obras_ano: "Ano das obras",
  obras_descricao: "Descrição das obras",
  capital_edificio: "Capital seguro do edifício",
  capital_conteudo: "Capital seguro do conteúdo",
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
  // Phase 9 (brief §21/§22): the first page of the visitor's session, where
  // it differs from source_url (the page the form itself was submitted
  // from) — e.g. a lead who read an article, then submitted the review
  // form, shows the article here and the review page in source_url.
  landing_page: "Página de entrada (1.ª página da sessão)",

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
  // Especificação v2 — Passo 2 (RC Profissional), Fase 2 C3. O único campo
  // que o bloco do ramo acrescenta aos transversais — profissão, capital e
  // obrigatoriedade continuam a existir como campos (acima, herdados da
  // versão anterior da página, não removidos do formulário partilhado da
  // homepage), mas deixaram de ser pedidos neste wizard dedicado; ficam
  // para o contacto manual de 48-72h que a página agora anuncia.
  faturacao_anual: "Faturação anual",
  // Private Clients page (/private-clients/) — same "review" field name as the
  // EN Collections & Valuables form (both are a checkbox group), so it reuses
  // that FIELD_LABELS entry when this form is ever rendered through that path;
  // "localizacao" and "existing-cover" get a Portuguese label here because
  // this is a quote:true PT form (QUOTE_LABELS/renderAllFields), not the
  // FIELD_LABELS/English one "existing-cover" already serves.
  localizacao: "Onde se encontra o património",
  "existing-cover": "Já tem seguros em vigor",
  review: "O que pretende proteger",
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

  // The English car insurance landing (/en/car-insurance-portugal/). The
  // registration status and the claims history are the two answers that decide
  // which insurers can be approached at all, so they are labelled in full
  // rather than left to humanise().
  vehicle: "Make, model and year",
  "registration-status": "Registration status",
  "licence-country": "Country that issued the licence",
  "claims-history": "Claims history",
  "cover-level": "Cover level sought",

  // Especificação v2 — Passo 1/2 (Fase 1: Auto pilot). `matricula`,
  // `data_carta` and `rgpd` are intentionally language-neutral field names
  // (same key submitted by both the PT and EN wizard pages — see their
  // QUOTE_LABELS (PT) entries above and COMMON_FIELD_ALIASES in
  // quote-requests-sync.mjs). Their English wording belongs in
  // QUOTE_LABELS_EN below, NOT here: an earlier edit added it here instead,
  // which — since later duplicate keys win in a JS object literal — silently
  // overwrote the correct PT entries above for these three keys, so every
  // PT-language quote email (en=false in renderAllFields) showed "Registration
  // plate"/"Driving licence issue date"/"GDPR consent" instead of "Matrícula"/
  // "Data de emissão da carta de condução"/"Consentimento RGPD". Confirmed via
  // esbuild's own "Duplicate key" bundler warnings, which plain `node --check`
  // and `node --test` never surface. `address`, `date_of_birth`, `nationality`
  // and `tax_resident_pt` below ARE genuinely EN-only field names (the EN
  // wizard page does not reuse `morada`/`data_nascimento`/`nacionalidade`/
  // `residente_fiscal`), so those stay here without a duplicate-key hazard.
  address: "Address",
  date_of_birth: "Date of birth",
  nationality: "Nationality",
  tax_resident_pt: "Tax resident in Portugal",

  // Especificação v2 — Passo 2 (Habitação, Fase 2). `town` is genuinely
  // EN-only (the EN page does not reuse `localidade`), so it stays here
  // without a duplicate-key hazard. The other nine keys below are
  // language-neutral (same PT/EN QUOTE_LABELS entries above) — their English
  // wording moved to QUOTE_LABELS_EN, same fix as matricula/data_carta/rgpd
  // below: this branch was written before that fix and reproduced the exact
  // same mistake independently, appending them here instead, which would
  // have clobbered the PT labels for these nine Habitação fields the same
  // way. Caught by the same esbuild "Duplicate key" bundling check, before
  // any deploy this time.
  town: "Town / city",

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

  // Cross-sell layer (Phase 5: conversion) — see CROSSSELL_FIELDS below.
  additional_insurance_needs: "Also interested in",
  insurance_needs: "What they need help with",
  preferred_contact: "Preferred contact method",
  notes: "Notes",
  // Situation-based acquisition (Phase 7) — see CROSSSELL_FIELDS below.
  entry_situation: "Came from",
};

// Never rendered: Netlify plumbing and the honeypot.
const INTERNAL_FIELDS = new Set([
  "form-name",
  "bot-field",
  "formName",
  // Especificação v2 (quote-request wizard, public/js/quote-wizard.js /
  // quote-nationality.js): structured for quote_requests
  // (netlify/functions/lib/quote-requests-sync.mjs), not for a human-read
  // email row. `nacionalidade_nome` is the wizard's free-text country
  // search box — `nacionalidade` (the hidden field next to it) already
  // carries the ISO code that matters; showing both would just duplicate
  // the same answer in the email.
  "dados_dinamicos",
  "nacionalidade_nome",
  "nationality_name",
]);

// The handful of field names shared by both languages need an English label
// when the lead came from an English page.
const QUOTE_LABELS_EN = {
  source: "Source article",
  source_url: "Page it was sent from",
  lang: "Page language",
  // Phase 9 (brief §21/§22): see the matching entry in QUOTE_LABELS for
  // what this field is — kept in English here since every form that
  // carries it (the Spain cluster, Insurance Review) is `en: true`.
  landing_page: "First page of the visit (if different)",

  // The Polish, Swedish, Danish and Chinese clusters (/pl/*, /se/*, /dk/*,
  // /zh/*). The visitor
  // writes in their own language; the labels are English because the team reads
  // the inbox in English, which is the same rule the Dutch and German entries
  // in FIELD_LABELS already follow.
  //
  // These forms are `quote: true`, so renderAllFields() shows every answer and
  // a field added to a market page appears in the email without this function
  // changing. That is the reason they are quote forms rather than allow-listed
  // ones: de-angebot-anfrage and nl-offerte-aanvraag go through FIELD_LABELS,
  // and their branch qualification answers (kv_*, hv_*, av_*, lv_*) are
  // therefore dropped from the notification entirely.
  market: "Source market",
  language: "Page language",
  product_interest: "Product interest",
  insurance_type: "Type of insurance",
  residence_status: "Status in Portugal",
  start_date: "Cover should start",
  preferred_language: "Preferred language for correspondence",
  localidade: "Town in Portugal",
  country: "Country they live in now",
  consent: "GDPR consent",
  subject: "Subject",
  message: "What we should know",

  // Branch qualification fields. The ids are shared by all four markets on
  // purpose, so one label serves Warsaw, Stockholm, Copenhagen and Shanghai
  // and the inbox reads the same whichever cluster the lead came from.
  // Reusing the ids is also why the Chinese cluster needed no new labels
  // here: its form asks the same questions, in Chinese.
  home_property_type: "Type of property",
  home_rebuild_value: "Estimated rebuild cost",
  home_contents_value: "Approximate value of the contents",
  health_household: "Who is to be covered",
  health_history: "Chronic conditions or ongoing treatment",
  motor_vehicle: "Make, model and year",
  motor_plate: "Current registration",
  motor_claims_history: "Claims-free history",
  liability_activity: "Activity or situation to cover",
  liability_clients: "Where the clients or third parties are",

  // Especificação v2 — language-neutral field names shared by the PT and EN
  // Auto wizard pages (see the matching comment next to QUOTE_LABELS above,
  // where the PT wording for these same three keys lives). Moved here after
  // being found, via esbuild's "Duplicate key" bundler warning, mistakenly
  // appended to QUOTE_LABELS instead — that silently clobbered the correct PT
  // labels for every PT-language submission using these fields.
  matricula: "Registration plate",
  data_carta: "Driving licence issue date",
  rgpd: "GDPR consent",

  // Especificação v2 — Passo 2 (Habitação, Fase 2). Language-neutral field
  // names shared by the PT and EN Habitação wizard pages (see the matching
  // comment next to QUOTE_LABELS above, where the PT wording for these same
  // nine keys lives).
  regime_ocupacao: "Occupancy",
  al_regime: "Short-term rental regime",
  ano_construcao: "Year of construction",
  area_bruta: "Gross construction area (m²)",
  casas_banho: "Number of bathrooms",
  obras_ano: "Year of the renovation",
  obras_descricao: "Renovation work description",
  capital_edificio: "Sum insured — building",
  capital_conteudo: "Sum insured — contents",
};

// Especificação v2, "restantes línguas" Parte A ponto 2 — unlike
// QUOTE_LABELS_EN above (staff read the German cluster's shared
// de-angebot-anfrage/nl-offerte-aanvraag forms in English, an existing,
// unrelated convention), a dedicated-wizard German form's own intake email
// must show German labels, confirmed by direct inspection of the first
// de-autoversicherung-wizard test-mode submission's payload_teste: it read
// "Registration plate"/"Page it was sent from" (QUOTE_LABELS_EN, via the
// `en: true` this form's HANDLED_FORMS entry carried at first) instead of
// German. Selected via `formConfig.lang === 'de'` in renderAllFields/
// quoteIntro/displayValue below — `en: true` stays on the form config too
// (unchanged meaning: which nationality-country-name table and quoteIntro
// fallback wording to use when `lang` doesn't name a table of its own),
// but `lang` takes priority for the label lookup itself. Only the fields a
// German wizard page can actually send need an entry here — grown one
// ramo at a time, the same way QUOTE_LABELS/QUOTE_LABELS_EN were.
const QUOTE_LABELS_DE = {
  ramo: "Bereich",
  nome: "Name",
  email: "E-Mail",
  telefone: "Telefon / WhatsApp",
  nif: "NIF",
  data_nascimento: "Geburtsdatum",
  morada: "Anschrift",
  localidade: "Ort",
  codigo_postal: "Postleitzahl",
  nacionalidade: "Staatsangehörigkeit",
  residente_fiscal: "Steuerlich ansässig in Portugal",
  matricula: "Kennzeichen",
  data_carta: "Datum der Führerscheinausstellung",
  data_inicio: "Gewünschtes Startdatum",
  rgpd: "DSGVO-Einwilligung",
  source_url: "Seite, von der aus gesendet wurde",

  // Especificação v2, "restantes línguas" Parte C — Hausversicherung DE.
  regime_ocupacao: "Nutzungsart",
  al_regime: "Art der Kurzzeitvermietung",
  ano_construcao: "Baujahr",
  area_bruta: "Bruttobaufläche (m²)",
  casas_banho: "Anzahl der Badezimmer",
  obras_ano: "Jahr der Renovierung",
  obras_descricao: "Beschreibung der Renovierung",
  capital_edificio: "Versicherungssumme Gebäude",
  capital_conteudo: "Versicherungssumme Hausrat",

  // Especificação v2, Parte C — Berufshaftpflicht (RC Profissional) DE,
  // built from the generic "Unternehmen" branch per Hugo's explicit choice
  // (no dedicated DE page existed for this ramo before).
  faturacao_anual: "Jahresumsatz",

  // Especificação v2, Parte D1 — Lebensversicherung DE. Deliberately no
  // health/lifestyle fields (no smoking status, no risk sport, no height/
  // weight, no medical history) — the medical questionnaire belongs to the
  // insurer's own adhesion step, same reasoning as Saúde's own dynamic
  // blocks and quote-health-persons.js's own top comment.
  capital: "Gewünschtes Kapital",
};

// Especificação v2, Parte 2 continuação (NL) — same pattern as
// QUOTE_LABELS_DE above, grown for the four NL ramos converted in this
// pass: Habitação, Saúde, RC Profissional, and the new Bedrijfsverzekering
// (Especificação v2, Parte D2 — no dedicated NL page existed before).
const QUOTE_LABELS_NL = {
  ramo: "Verzekeringstak",
  nome: "Naam",
  email: "E-mail",
  telefone: "Telefoon / WhatsApp",
  nif: "NIF",
  data_nascimento: "Geboortedatum",
  morada: "Adres",
  localidade: "Woonplaats",
  codigo_postal: "Postcode",
  nacionalidade: "Nationaliteit",
  residente_fiscal: "Fiscaal ingezetene van Portugal",
  data_inicio: "Gewenste ingangsdatum",
  rgpd: "AVG-toestemming",
  source_url: "Pagina van waaruit verzonden",

  // Habitação (woonverzekering) NL.
  regime_ocupacao: "Gebruik van de woning",
  al_regime: "Soort kortetermijnverhuur",
  ano_construcao: "Bouwjaar",
  area_bruta: "Bruto woonoppervlak (m²)",
  casas_banho: "Aantal badkamers",
  obras_ano: "Jaar van de verbouwing",
  obras_descricao: "Beschrijving van de werkzaamheden",
  capital_edificio: "Verzekerd bedrag gebouw",
  capital_conteudo: "Verzekerd bedrag inboedel",

  // RC Profissional (beroepsaansprakelijkheid) NL.
  faturacao_anual: "Jaaromzet",

  // Bedrijfsverzekering NL (Especificação v2, Parte D2) — no `empresa`/nif
  // pessoal ambiguity here: nome/nif above are the contact person's own,
  // nome_empresa/nif_empresa below are the company's, always both present.
  // The three ramo_* checkboxes are each their own field (present with
  // value "sim" only when checked, per the standard HTML checkbox
  // contract) — data-required-group="ramos_pretendidos" on the markup only
  // groups them for the "at least one" client-side validation, it is not
  // itself a submitted field name.
  nome_empresa: "Bedrijfsnaam",
  nif_empresa: "NIF van het bedrijf",
  ramo_acidentes_trabalho: "Arbeidsongevallen",
  ramo_multirriscos: "Multirisicoverzekering",
  ramo_responsabilidade_civil: "Aansprakelijkheidsverzekering",
};

// Especificação v2, Parte B — PL/SE/DK/ZH share one generator
// (scripts/lib/market-cluster.mjs) and are converted together. Same
// pattern as QUOTE_LABELS_DE/NL above, grown one ramo at a time — Home
// (Habitação) is the first of the four.
const QUOTE_LABELS_PL = {
  ramo: "Ubezpieczenie",
  nome: "Imię i nazwisko",
  email: "E-mail",
  telefone: "Telefon / WhatsApp",
  nif: "NIF",
  data_nascimento: "Data urodzenia",
  morada: "Adres",
  localidade: "Miejscowość",
  codigo_postal: "Kod pocztowy",
  nacionalidade: "Obywatelstwo",
  residente_fiscal: "Rezydent podatkowy w Portugalii",
  data_inicio: "Preferowana data rozpoczęcia",
  rgpd: "Zgoda RODO",
  source_url: "Strona, z której wysłano",

  regime_ocupacao: "Sposób użytkowania nieruchomości",
  al_regime: "Rodzaj wynajmu krótkoterminowego",
  ano_construcao: "Rok budowy",
  area_bruta: "Powierzchnia brutto (m²)",
  casas_banho: "Liczba łazienek",
  obras_ano: "Rok remontu",
  obras_descricao: "Opis wykonanych prac",
  capital_edificio: "Suma ubezpieczenia budynku",
  capital_conteudo: "Suma ubezpieczenia ruchomości",

  matricula: "Numer rejestracyjny",
  data_carta: "Data wydania prawa jazdy",

  faturacao_anual: "Roczny obrót",
};

const QUOTE_LABELS_SV = {
  ramo: "Försäkring",
  nome: "Namn",
  email: "E-post",
  telefone: "Telefon / WhatsApp",
  nif: "NIF",
  data_nascimento: "Födelsedatum",
  morada: "Adress",
  localidade: "Ort",
  codigo_postal: "Postnummer",
  nacionalidade: "Nationalitet",
  residente_fiscal: "Skattemässigt bosatt i Portugal",
  data_inicio: "Önskat startdatum",
  rgpd: "GDPR-samtycke",
  source_url: "Sida varifrån det skickades",

  regime_ocupacao: "Bostadens användning",
  al_regime: "Typ av korttidsuthyrning",
  ano_construcao: "Byggår",
  area_bruta: "Bruttoarea (m²)",
  casas_banho: "Antal badrum",
  obras_ano: "Renoveringsår",
  obras_descricao: "Beskrivning av arbetena",
  capital_edificio: "Försäkringsbelopp byggnad",
  capital_conteudo: "Försäkringsbelopp lösöre",

  matricula: "Registreringsnummer",
  data_carta: "Datum för körkortets utfärdande",

  faturacao_anual: "Årsomsättning",
};

const QUOTE_LABELS_DA = {
  ramo: "Forsikring",
  nome: "Navn",
  email: "E-mail",
  telefone: "Telefon / WhatsApp",
  nif: "NIF",
  data_nascimento: "Fødselsdato",
  morada: "Adresse",
  localidade: "By",
  codigo_postal: "Postnummer",
  nacionalidade: "Nationalitet",
  residente_fiscal: "Skattemæssigt hjemmehørende i Portugal",
  data_inicio: "Ønsket startdato",
  rgpd: "Samtykke (databeskyttelsesforordningen)",
  source_url: "Side, hvorfra det blev sendt",

  regime_ocupacao: "Boligens anvendelse",
  al_regime: "Type korttidsudlejning",
  ano_construcao: "Byggeår",
  area_bruta: "Bruttoareal (m²)",
  casas_banho: "Antal badeværelser",
  obras_ano: "Renoveringsår",
  obras_descricao: "Beskrivelse af det udførte arbejde",
  capital_edificio: "Forsikringssum bygning",
  capital_conteudo: "Forsikringssum indbo",

  matricula: "Nummerplade",
  data_carta: "Kørekortets udstedelsesdato",

  faturacao_anual: "Årlig omsætning",
};

const QUOTE_LABELS_ZH = {
  ramo: "险种",
  nome: "姓名",
  email: "电子邮箱",
  telefone: "电话 / WhatsApp",
  nif: "NIF",
  data_nascimento: "出生日期",
  morada: "地址",
  localidade: "所在城市",
  codigo_postal: "邮政编码",
  nacionalidade: "国籍",
  residente_fiscal: "是否为葡萄牙税务居民",
  data_inicio: "期望的起保日期",
  rgpd: "GDPR 同意",
  source_url: "发送页面",

  regime_ocupacao: "房屋使用方式",
  al_regime: "短期出租类型",
  ano_construcao: "建造年份",
  area_bruta: "建筑总面积（平方米）",
  casas_banho: "卫生间数量",
  obras_ano: "翻修年份",
  obras_descricao: "工程描述",
  capital_edificio: "建筑保险金额",
  capital_conteudo: "室内财产保险金额",

  matricula: "车牌号",
  data_carta: "驾照签发日期",

  faturacao_anual: "年营业额",
};

// Especificação v2, Parte C — Hebrew. `nif`/`rgpd` stay the bare Latin
// abbreviation, same as every other language's table (see QUOTE_LABELS_DA's
// nif above) — a short, unbroken Latin run renders fine inside an RTL line
// with no isolation needed, unlike the compound Latin+space/Latin+digit
// runs he.json's common.errors.* isolates (e.g. a full postal-code or
// phone example). Only Home's fields are filled in so far (regime_ocupacao
// through capital_conteudo); matricula/data_carta/faturacao_anual are
// listed now, matching QUOTE_LABELS_PL/SV/DA/ZH's own precedent of writing
// the full label set up front, ready for the Motor/Liability ramos.
const QUOTE_LABELS_HE = {
  ramo: "ענף",
  nome: "שם",
  email: "דוא״ל",
  telefone: "טלפון",
  nif: "NIF",
  data_nascimento: "תאריך לידה",
  morada: "כתובת",
  localidade: "עיר",
  codigo_postal: "מיקוד",
  nacionalidade: "אזרחות",
  residente_fiscal: "תושבות מס בפורטוגל",
  data_inicio: "מועד תחילה מבוקש",
  rgpd: "הסכמה (GDPR)",
  source_url: "עמוד המקור",

  regime_ocupacao: "אופן השימוש בנכס",
  al_regime: "סוג ההשכרה לטווח קצר",
  ano_construcao: "שנת בנייה",
  area_bruta: "שטח ברוטו (מ״ר)",
  casas_banho: "מספר חדרי רחצה",
  obras_ano: "שנת השיפוץ",
  obras_descricao: "תיאור העבודות",
  capital_edificio: "סכום ביטוח המבנה",
  capital_conteudo: "סכום ביטוח התכולה",

  matricula: "מספר רישוי",
  data_carta: "תאריך הנפקת הרישיון",

  faturacao_anual: "מחזור שנתי",
};

// Lookup by `lang`, refactored from a growing if/else-if chain in
// renderAllFields once PL/SE/DK/ZH brought the count to six — same
// reasoning as LANG_COUNTRY_TABLES above. `lang` is undefined for every
// form that predates this system (they fall through to `en`/QUOTE_LABELS).
const QUOTE_LABELS_BY_LANG = {
  de: QUOTE_LABELS_DE,
  nl: QUOTE_LABELS_NL,
  pl: QUOTE_LABELS_PL,
  sv: QUOTE_LABELS_SV,
  da: QUOTE_LABELS_DA,
  zh: QUOTE_LABELS_ZH,
  he: QUOTE_LABELS_HE,
};

// Forms handled by this notification flow, with the wording used in the email.
// Exported so lead-classification.test.mjs can assert every key here also has
// a CRM classification decision — see "CRM coverage" in that test file.
export const HANDLED_FORMS = {
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
  // Phase 12 (PT repositioning): the 2 "no quote CTA" blog pages — these are
  // not insurance leads, so they skip the quote:true path (no ramo, no SLA
  // promise) and go through the same simple flow as relocation-services/
  // fiscal-representation above.
  "adler-pro-interesse": {
    heading: "Novo contacto — Interesse na Adler Pro",
    intro: "Um visitante do blog demonstrou interesse na plataforma Adler Pro.",
    subjectPrefix: "Novo contacto Adler Pro",
  },
  "parcerias-imobiliarias": {
    heading: "Novo contacto — Parceria imobiliária",
    intro: "Uma agência imobiliária demonstrou interesse numa parceria.",
    subjectPrefix: "Nova parceria imobiliária",
  },
  "adler-pro-interest": {
    heading: "New contact — Adler Pro interest",
    intro: "A blog visitor expressed interest in the Adler Pro platform.",
    subjectPrefix: "New Adler Pro contact",
  },
  "real-estate-partnership": {
    heading: "New contact — Real estate partnership",
    intro: "A real estate agency expressed interest in a partnership.",
    subjectPrefix: "New real estate partnership",
  },
  "nl-offerte-aanvraag": {
    heading: "New Dutch quote request",
    intro:
      "A new submission was received from the Dutch landing page (/nl/verzekeringen-portugal/). " +
      "The visitor expects a written reply by email within 24 hours — do not call.",
    subjectPrefix: "New Dutch quote request",
  },
  "de-angebot-anfrage": {
    heading: "New German quote request",
    intro:
      "A new submission was received from the German cluster (/de/*). " +
      "The visitor expects a written reply by email within 24 hours — do not call.",
    subjectPrefix: "New German quote request",
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
  "cotacao-saude": {
    quote: true,
    heading: "Novo pedido de cotação — Saúde",
    page: "/seguros/saude/",
    branch: "Saúde",
  },
  "cotacao-empresarial": {
    quote: true,
    heading: "Novo pedido de análise — Multirriscos Empresarial",
    // Phase 12 (PT repositioning) rebuild: empresarial's real turnaround is
    // 48-72 working hours, same as RC Profissional — see slaHours above.
    slaHours: "48 a 72",
    page: "/seguros/empresarial/",
    branch: "Empresarial",
  },
  // Phase 12 (PT repositioning): the two new pillar pages. Same shape as the
  // other quote:true forms — renderAllFields() handles every field generically,
  // and the branch below is what sorts these leads in the inbox.
  "private-clients-review": {
    quote: true,
    heading: "Novo pedido — Private Clients",
    page: "/private-clients/",
    branch: "Private Clients",
  },
  "cotacao-rc-profissional": {
    quote: true,
    heading: "Novo pedido de análise — RC Profissional",
    // Especificação v2, A3: RC's real turnaround is 48-72 working hours,
    // not the 24h every other ramo promises — the intake email's intro
    // line reads this instead of assuming 24h (see slaHours below).
    slaHours: "48 a 72",
    page: "/seguros/responsabilidade-civil-profissional/",
    branch: "RC Profissional",
  },
  // RC niche cluster (TNC, Massagistas, Profissões Específicas, Eventos):
  // these four had no HANDLED_FORMS entry at all before this pass — visitors
  // filling them in got no email notification and no CRM sync, since a form
  // not listed here is dropped at the "Ignored" early-return above. Added
  // now, same shape as cotacao-rc-profissional right above.
  "cotacao-rc-tnc": {
    quote: true,
    heading: "Novo pedido de análise — RC Terapêuticas Não Convencionais",
    // Especificação v2, A3: RC's real turnaround is 48-72 working hours,
    // not the 24h every other ramo promises — the intake email's intro
    // line reads this instead of assuming 24h (see slaHours below).
    slaHours: "48 a 72",
    page: "/seguros/rc-terapeuticas-nao-convencionais/",
    branch: "RC Terapêuticas Não Convencionais",
  },
  "cotacao-rc-massagistas": {
    quote: true,
    heading: "Novo pedido de análise — RC Massagistas",
    // Especificação v2, A3: RC's real turnaround is 48-72 working hours,
    // not the 24h every other ramo promises — the intake email's intro
    // line reads this instead of assuming 24h (see slaHours below).
    slaHours: "48 a 72",
    page: "/seguros/rc-massagistas/",
    branch: "RC Massagistas",
  },
  "cotacao-rc-profissoes-especificas": {
    quote: true,
    heading: "Novo pedido de análise — RC Profissões Específicas",
    // Especificação v2, A3: RC's real turnaround is 48-72 working hours,
    // not the 24h every other ramo promises — the intake email's intro
    // line reads this instead of assuming 24h (see slaHours below).
    slaHours: "48 a 72",
    page: "/seguros/rc-profissoes-especificas/",
    branch: "RC Profissões Específicas",
  },
  "cotacao-rc-eventos": {
    quote: true,
    heading: "Novo pedido de análise — RC Organização de Eventos",
    // Especificação v2, A3: RC's real turnaround is 48-72 working hours,
    // not the 24h every other ramo promises — the intake email's intro
    // line reads this instead of assuming 24h (see slaHours below).
    slaHours: "48 a 72",
    page: "/seguros/responsabilidade-civil-eventos/",
    branch: "RC Organização de Eventos",
  },
  // Added with the same gap the comment above describes: this page didn't
  // exist yet when that pass ran, so it never got a HANDLED_FORMS entry —
  // submissions were silently "Ignored" (no email, no CRM sync) since launch.
  "cotacao-rc-yoga": {
    quote: true,
    heading: "Novo pedido de análise — RC Yoga, Pilates e Bem-Estar",
    // Especificação v2, A3: RC's real turnaround is 48-72 working hours,
    // not the 24h every other ramo promises — the intake email's intro
    // line reads this instead of assuming 24h (see slaHours below).
    slaHours: "48 a 72",
    page: "/seguros/rc-yoga-pilates-bem-estar/",
    branch: "RC Yoga, Pilates e Bem-Estar",
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
  // "health-insurance-quote-wizard" is /en/health-insurance-quote/'s own,
  // exclusive form-name (Especificação v2, Fase 2 C4) — same
  // "lighter lead funnels into a shared bucket, pillar page needs its own
  // name once its field set diverges" pattern as "home-insurance-quote-
  // wizard"/"car-insurance-quote-wizard" below. "expat-health-quote" above
  // stays untouched, still shared with the 30+ blog CTAs that already used
  // it.
  "health-insurance-quote-wizard": {
    quote: true,
    en: true,
    heading: "New health insurance quote request",
    page: "/en/health-insurance-quote/",
    branch: "Health",
  },
  // Especificação v2, Fase 2 C2: the new dedicated EN page for RC
  // Profissional, /en/professional-liability-insurance-portugal/ — its own
  // exclusive form-name, same reasoning as "health-insurance-quote-wizard"
  // right above. Mirrors "cotacao-rc-profissional" (its PT counterpart)
  // including the 48-72h SLA.
  "professional-liability-quote-wizard": {
    quote: true,
    en: true,
    heading: "New professional liability insurance quote request",
    slaHours: "48 a 72",
    page: "/en/professional-liability-insurance-portugal/",
    branch: "RC Profissional",
  },
  // EN counterpart of "cotacao-empresarial" (Phase 12 empresarial pillar
  // rebuild) — same shape, same 48-72h SLA, single-page form (not a wizard).
  "business-insurance-quote": {
    quote: true,
    en: true,
    heading: "New business insurance review request",
    slaHours: "48 a 72",
    page: "/en/business-insurance-portugal/",
    branch: "Empresarial",
  },
  // "home-insurance-quote" (no suffix) is also the shared HOME_FORM name
  // scripts/property-cluster.data.mjs's generated secondary pages use
  // (unoccupied/second-home/apartment/earthquake/flood-insurance-portugal
  // and dozens of blog CTAs) — the same pre-existing "lighter lead funnels
  // into the pillar's Netlify Forms bucket" convention documented next to
  // "car-insurance-quote-wizard" below, and the same reason it needs a
  // form-name of its own now that this page asks for NIF, date of birth,
  // nationality, occupancy and more that none of those simpler forms send.
  "home-insurance-quote-wizard": {
    quote: true,
    en: true,
    heading: "New home insurance quote request",
    page: "/en/home-insurance-quote/",
    branch: "Home",
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
  // The Portuguese motor page. `page` is only the fallback shown in the email
  // when the submission carries no source_url, and it used to name a path that
  // has never existed on this site; the form itself lives at /seguros/auto/.
  "seguro-auto": {
    quote: true,
    heading: "Novo pedido — Seguro Auto",
    page: "/seguros/auto/",
    branch: "Automóvel",
  },
  // "car-insurance-quote" (no suffix) is also the form-name of a much
  // simpler CTA embedded at the bottom of five EN car-insurance blog
  // articles (data-endpoint="/en/car-insurance-portugal/") — a pre-existing
  // site convention of funnelling a lighter lead into the same Netlify
  // Forms bucket as the page it links to, harmless while both forms asked
  // for roughly the same handful of fields. The wizard (Especificação v2,
  // Fase 1) no longer does: it asks for NIF, date of birth, nationality,
  // registration plate and more, none of which the blog CTA has any way to
  // send. Sharing one form-name between the two meant Netlify's own
  // field-detection, and this file's rendering of a submission's answers,
  // could reflect either form depending on which one happened to be
  // submitted last — confirmed in production: a real submission from the
  // /en/car-insurance-portugal/ page itself arrived shaped like the old,
  // pre-wizard field set. The fix is this page's own, exclusive form-name;
  // the plain "car-insurance-quote" entry above stays untouched and keeps
  // serving the five blog CTAs exactly as before — they were never part of
  // this project and are out of scope for it.
  "car-insurance-quote-wizard": {
    quote: true,
    en: true,
    heading: "New car insurance quote request",
    page: "/en/car-insurance-portugal/",
    branch: "Car",
  },
  // Especificação v2, "restantes línguas" Parte 2 — the first DE page to
  // become a genuine wizard, exclusive form-name, instead of sharing the
  // German cluster's single branch-select form ("de-angebot-anfrage",
  // still used by the other 21 pages, this one's own copy removed).
  // `lang: "de"` (Parte A ponto 2 of the follow-up prompt, after the first
  // test-mode submission's payload_teste showed English/Portuguese labels
  // instead of German): a dedicated wizard's own intake email reads in
  // German — see QUOTE_LABELS_DE, and the `lang === "de"` branches in
  // renderAllFields/displayValue/quoteIntro. `en: true` stays too, unlike
  // `lang` it is NOT about label choice for this form any more — it only
  // still selects `heading`/`subjectPrefix`-adjacent EN-vs-PT plumbing
  // elsewhere that has no German branch yet (there is none for this form,
  // kept for forward-compatibility with any shared code path that still
  // reads it before `lang`).
  "de-autoversicherung-wizard": {
    quote: true,
    en: true,
    lang: "de",
    heading: "New German Auto quote request",
    page: "/de/autoversicherung-portugal/",
    branch: "Auto (DE)",
  },
  // Especificação v2, "restantes línguas" Parte C — same pattern as
  // de-autoversicherung-wizard right above: exclusive form-name, own copy
  // of the shared de-angebot-anfrage form removed, `lang: "de"` for German
  // labels in the intake email.
  "de-hausversicherung-wizard": {
    quote: true,
    en: true,
    lang: "de",
    heading: "New German Home quote request",
    page: "/de/hausversicherung-portugal/",
    branch: "Habitação (DE)",
  },
  // Especificação v2, "restantes línguas" Parte C — same pattern as the two
  // above. The "pessoa segura" repeater (dados_dinamicos) needs no new
  // wiring here — renderDynamicBlocksSection already has a `lang: "de"`
  // branch (DYNAMIC_BLOCKS_COPY.de), added in the Parte A fix in
  // anticipation of this exact form.
  "de-krankenversicherung-wizard": {
    quote: true,
    en: true,
    lang: "de",
    heading: "New German Health quote request",
    page: "/de/krankenversicherung-portugal/",
    branch: "Saúde (DE)",
  },
  // Especificação v2, Parte C — the German RC Profissional page had no
  // dedicated equivalent before this pass (unlike Auto/Habitação/Saúde,
  // which already existed as full pages with a branch-select form); built
  // from the generic "Unternehmen" branch of the shared de-angebot-anfrage
  // form per Hugo's explicit choice via AskUserQuestion, not invented.
  // Same 48-72h SLA as its PT ("cotacao-rc-profissional") and EN
  // ("professional-liability-quote-wizard") counterparts — see slaHours.
  "de-berufshaftpflicht-freiberufler-wizard": {
    quote: true,
    en: true,
    lang: "de",
    heading: "New German professional liability quote request",
    slaHours: "48 a 72",
    page: "/de/berufshaftpflicht-freiberufler-portugal/",
    branch: "RC Profissional (DE)",
  },
  // Especificação v2, Parte 2 continuação (NL) — nl-woonverzekering-wizard,
  // this page's exclusive form-name (it used to share nl-offerte-aanvraag
  // with 15 other NL pages). `lang: "nl"` for Dutch labels in the intake
  // email, same reasoning as the DE forms above.
  "nl-woonverzekering-wizard": {
    quote: true,
    lang: "nl",
    heading: "New Dutch Home quote request",
    page: "/nl/woonverzekering-portugal/",
    branch: "Habitação (NL)",
  },
  // The "pessoa segura" repeater (dados_dinamicos) needs no new wiring here
  // — renderDynamicBlocksSection already has a `lang: "nl"` branch
  // (DYNAMIC_BLOCKS_COPY.nl), added alongside QUOTE_LABELS_NL in the
  // Habitação PR in anticipation of this exact form.
  "nl-zorgverzekering-wizard": {
    quote: true,
    lang: "nl",
    heading: "New Dutch Health quote request",
    page: "/nl/zorgverzekering-portugal/",
    branch: "Saúde (NL)",
  },
  // Same 48-72h SLA as its PT/EN/DE counterparts — see slaHours.
  "nl-zzp-beroepsaansprakelijkheid-wizard": {
    quote: true,
    lang: "nl",
    heading: "New Dutch professional liability quote request",
    slaHours: "48 a 72",
    page: "/nl/zzp-beroepsaansprakelijkheid-portugal/",
    branch: "RC Profissional (NL)",
  },
  // Especificação v2, Parte D2 — Bedrijfsverzekering NL, built from scratch
  // (no dedicated NL page existed for this simplified 3-branch business
  // ramo before), per Hugo's explicit definition in the "Parte D" prompt —
  // not invented. 48-72h SLA: covers responsabilidade civil among its three
  // options, same reasoning as the RC-only forms above.
  "nl-bedrijfsverzekering-wizard": {
    quote: true,
    lang: "nl",
    heading: "New Dutch business insurance quote request",
    slaHours: "48 a 72",
    page: "/nl/bedrijfsverzekering-portugal/",
    branch: "Empresarial (NL)",
  },
  // Especificação v2, Parte D1 — Lebensversicherung DE, built from the
  // generic "Lebensversicherung" branch of the shared de-angebot-anfrage
  // form (page already existed; only the form itself was dedicated). No
  // slaHours: 24h, same default as Auto/Habitação/Saúde.
  "de-lebensversicherung-wizard": {
    quote: true,
    lang: "de",
    heading: "New German life insurance quote request",
    page: "/de/lebensversicherung-portugal/",
    branch: "Vida (DE)",
  },
  // Especificação v2, Parte D3 — Private Clients DE, built from the
  // generic "Private Clients" branch of the shared de-angebot-anfrage
  // form. Only two wizard steps (no ramo-specific step 2 — the common
  // block covers everything the spec asks for), per Hugo's own "reduzir a
  // dois passos" instruction rather than leaving an empty step.
  "de-private-clients-wizard": {
    quote: true,
    lang: "de",
    heading: "New German Private Clients quote request",
    page: "/de/private-clients-portugal/",
    branch: "Private Clients (DE)",
  },
  // Especificação v2, Parte B — PL/SE/DK/ZH share one generator
  // (scripts/lib/market-cluster.mjs) and are converted together. Home
  // (Habitação) is the first of the four ramos.
  "pl-ubezpieczenie-domu-wizard": {
    quote: true,
    lang: "pl",
    heading: "New Polish Home quote request",
    page: "/pl/ubezpieczenie-domu-portugalia/",
    branch: "Habitação (PL)",
  },
  "se-hemforsakring-wizard": {
    quote: true,
    lang: "sv",
    heading: "New Swedish Home quote request",
    page: "/se/hemforsakring-portugal/",
    branch: "Habitação (SE)",
  },
  "dk-husforsikring-wizard": {
    quote: true,
    lang: "da",
    heading: "New Danish Home quote request",
    page: "/dk/husforsikring-portugal/",
    branch: "Habitação (DK)",
  },
  "zh-home-insurance-wizard": {
    quote: true,
    lang: "zh",
    heading: "New Chinese Home quote request",
    page: "/zh/home-insurance-portugal/",
    branch: "Habitação (ZH)",
  },
  // Especificação v2, Parte C — Hebrew, first ramo. Same shape as the
  // PL/SE/DK/ZH entries above, `lang: "he"` for the internal notification
  // email — independent of the page's own formLangNote promise to the
  // *customer* that correspondence happens in English (see the header
  // comment in scripts/il-content/ui.mjs); the PL/SE/DK/ZH pages make the
  // identical promise to their own visitors and still use their own
  // language for this internal email, which is read by the team, not sent
  // to the lead.
  "il-home-insurance-wizard": {
    quote: true,
    lang: "he",
    heading: "New Hebrew Home quote request",
    page: "/il/home-insurance-portugal/",
    branch: "Habitação (IL)",
  },
  // The "pessoa segura" repeater (dados_dinamicos) needs no new wiring
  // here — renderDynamicBlocksSection already has pl/sv/da/zh branches in
  // DYNAMIC_BLOCKS_COPY, added alongside the Home ramo in anticipation.
  "pl-ubezpieczenie-zdrowotne-wizard": {
    quote: true,
    lang: "pl",
    heading: "New Polish Health quote request",
    page: "/pl/ubezpieczenie-zdrowotne-portugalia/",
    branch: "Saúde (PL)",
  },
  "se-sjukvardsforsakring-wizard": {
    quote: true,
    lang: "sv",
    heading: "New Swedish Health quote request",
    page: "/se/sjukvardsforsakring-portugal/",
    branch: "Saúde (SE)",
  },
  "dk-sundhedsforsikring-wizard": {
    quote: true,
    lang: "da",
    heading: "New Danish Health quote request",
    page: "/dk/sundhedsforsikring-portugal/",
    branch: "Saúde (DK)",
  },
  "zh-health-insurance-wizard": {
    quote: true,
    lang: "zh",
    heading: "New Chinese Health quote request",
    page: "/zh/health-insurance-portugal/",
    branch: "Saúde (ZH)",
  },
  // Especificação v2, Parte C — Hebrew, second ramo.
  "il-health-insurance-wizard": {
    quote: true,
    lang: "he",
    heading: "New Hebrew Health quote request",
    page: "/il/health-insurance-portugal/",
    branch: "Saúde (IL)",
  },
  // Third of the four ramos shared by the PL/SE/DK/ZH generator: Car (Auto).
  "pl-ubezpieczenie-samochodu-wizard": {
    quote: true,
    lang: "pl",
    heading: "New Polish Car quote request",
    page: "/pl/ubezpieczenie-samochodu-portugalia/",
    branch: "Auto (PL)",
  },
  "se-bilforsakring-wizard": {
    quote: true,
    lang: "sv",
    heading: "New Swedish Car quote request",
    page: "/se/bilforsakring-portugal/",
    branch: "Auto (SE)",
  },
  "dk-bilforsikring-wizard": {
    quote: true,
    lang: "da",
    heading: "New Danish Car quote request",
    page: "/dk/bilforsikring-portugal/",
    branch: "Auto (DK)",
  },
  "zh-car-insurance-wizard": {
    quote: true,
    lang: "zh",
    heading: "New Chinese Car quote request",
    page: "/zh/car-insurance-portugal/",
    branch: "Auto (ZH)",
  },
  // Especificação v2, Parte C — Hebrew, third ramo.
  "il-car-insurance-wizard": {
    quote: true,
    lang: "he",
    heading: "New Hebrew Car quote request",
    page: "/il/car-insurance-portugal/",
    branch: "Auto (IL)",
  },
  // Fourth and last of the four ramos shared by the PL/SE/DK/ZH generator:
  // Liability (RC Profissional). Same 48-72h SLA as its PT/EN/DE/NL
  // counterparts — see slaHours.
  "pl-ubezpieczenie-odpowiedzialnosci-cywilnej-wizard": {
    quote: true,
    lang: "pl",
    heading: "New Polish Liability quote request",
    slaHours: "48 a 72",
    page: "/pl/ubezpieczenie-odpowiedzialnosci-cywilnej-portugalia/",
    branch: "RC Profissional (PL)",
  },
  "se-ansvarsforsakring-wizard": {
    quote: true,
    lang: "sv",
    heading: "New Swedish Liability quote request",
    slaHours: "48 a 72",
    page: "/se/ansvarsforsakring-portugal/",
    branch: "RC Profissional (SE)",
  },
  "dk-ansvarsforsikring-wizard": {
    quote: true,
    lang: "da",
    heading: "New Danish Liability quote request",
    slaHours: "48 a 72",
    page: "/dk/ansvarsforsikring-portugal/",
    branch: "RC Profissional (DK)",
  },
  "zh-liability-insurance-wizard": {
    quote: true,
    lang: "zh",
    heading: "New Chinese Liability quote request",
    slaHours: "48 a 72",
    page: "/zh/liability-insurance-portugal/",
    branch: "RC Profissional (ZH)",
  },
  // Especificação v2, Parte C — Hebrew, fourth and last ramo.
  "il-liability-insurance-wizard": {
    quote: true,
    lang: "he",
    heading: "New Hebrew Liability quote request",
    slaHours: "48 a 72",
    page: "/il/liability-insurance-portugal/",
    branch: "RC Profissional (IL)",
  },
  "car-insurance-quote": {
    quote: true,
    en: true,
    heading: "New car insurance quote request",
    page: "/en/car-insurance-portugal/",
    branch: "Car",
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
  // "lead-de" (the old, single hand-authored /de/ homepage form) is retired as
  // of scripts/generate-de-cluster.mjs: /de/ is now generated and posts
  // "de-angebot-anfrage" like every other page in the German cluster — see
  // that name below, next to "nl-offerte-aanvraag", which it mirrors.

  // Spain market layer (Phase 1). Same shape as the Portuguese/English forms
  // above — one Netlify form name per page — with `branch` carrying an "ES ·"
  // prefix so a Spain lead is never labelled the same as a Portugal one in the
  // inbox. Every field on these forms is rendered generically by
  // renderAllFields(), including the `country` hidden field the pages set to
  // "Spain"; nothing below needs to special-case it.
  "expat-insurance-review-spain": {
    quote: true,
    en: true,
    heading: "New expat insurance review request — Spain",
    page: "/en/expat-insurance-spain/",
    branch: "ES · Expat",
  },
  "home-insurance-quote-spain": {
    quote: true,
    en: true,
    heading: "New home insurance quote request — Spain",
    page: "/en/home-insurance-spain/",
    branch: "ES · Home",
  },
  "landlord-insurance-quote-spain": {
    quote: true,
    en: true,
    heading: "New landlord insurance quote request — Spain",
    page: "/en/landlord-insurance-spain/",
    branch: "ES · Landlord",
  },
  "health-insurance-quote-spain": {
    quote: true,
    en: true,
    heading: "New health insurance quote request — Spain",
    page: "/en/health-insurance-spain/",
    branch: "ES · Health",
  },
  "car-insurance-quote-spain": {
    quote: true,
    en: true,
    heading: "New car insurance quote request — Spain",
    page: "/en/car-insurance-spain/",
    branch: "ES · Car",
  },
  "life-insurance-review-spain": {
    quote: true,
    en: true,
    heading: "New life insurance review request — Spain",
    page: "/en/life-insurance-spain/",
    branch: "ES · Life",
  },
  "mortgage-protection-review-spain": {
    quote: true,
    en: true,
    heading: "New mortgage protection review request — Spain",
    page: "/en/mortgage-protection-spain/",
    branch: "ES · Mortgage Protection",
  },
  "private-client-review-spain": {
    quote: true,
    en: true,
    heading: "New private client review request — Spain",
    page: "/en/private-clients-spain/",
    branch: "ES · Private Clients",
  },

  // International multi-product review (Phase 5: conversion). One form for
  // visitors who need more than one product, or do not know which product
  // page to start from. The market-correct branch ("PT · Multi-product" /
  // "ES · Multi-product") is stamped client-side into the hidden `ramo`
  // field from the visible country choice — see build-insurance-review.mjs —
  // so quoteSubject() picks it up as the first-priority branch field with no
  // change needed here. "Multi-product" below is only the last-resort
  // fallback if that field somehow arrives empty.
  "international-insurance-review": {
    quote: true,
    en: true,
    heading: "New multi-product insurance review request",
    page: "/en/insurance-review/",
    branch: "Multi-product",
  },

  // Poland, Sweden and Denmark (September 2026). One Netlify form per market,
  // shared by all eight pages of that market's cluster.
  //
  // `quote: true` rather than the FIELD_LABELS allow-list the Dutch and German
  // landings use, so renderAllFields() renders every answer — including the
  // branch qualification fields, which the allow-listed path silently drops.
  // `en: true` so the labels come from QUOTE_LABELS_EN: the visitor writes in
  // Polish, Swedish or Danish and the team reads the result in English.
  //
  // `branch` is only the last-resort fallback. Every one of these forms carries
  // a market-tagged `insurance_type` ("SE · Bil", "DK · Bolig"), which
  // quoteSubject() already reads first, so a Swedish motor lead arrives as
  // "[LEAD SE · Bil] Anna Svensson — Cascais" with no change to that function —
  // the same convention the Spain cluster established with its "ES ·" prefix.
  //
  // No `intro` key: quote forms build their own opening line from `page` and
  // the submitted source_url, so an `intro` here would never be read.
  "pl-zapytanie-ofertowe": {
    quote: true,
    en: true,
    heading: "New Polish quote request",
    page: "/pl/",
    branch: "PL · Inne",
  },
  "se-offertforfragan": {
    quote: true,
    en: true,
    heading: "New Swedish quote request",
    page: "/se/",
    branch: "SE · Annat",
  },
  "dk-forespoergsel": {
    quote: true,
    en: true,
    heading: "New Danish quote request",
    page: "/dk/",
    branch: "DK · Andet",
  },
  "zh-baojia-shenqing": {
    quote: true,
    en: true,
    heading: "New Chinese quote request",
    page: "/zh/",
    branch: "ZH · Other",
  },
  // Hebrew (/il/*). The form is named for what it is in Hebrew — a quote
  // request — transliterated, because form names travel through Netlify's
  // dashboard, the function's own keys and the CRM classification table, and
  // an ASCII key is the one that reads the same in all three. The reply is
  // English like every other market: `en: true`.
  "il-bakashat-hatzaa": {
    quote: true,
    en: true,
    heading: "New Hebrew quote request",
    page: "/il/",
    branch: "IL · Other",
  },
};

const humanise = (key) =>
  key.replace(/[_-]+/g, " ").replace(/^./, (c) => c.toUpperCase());

// Cross-sell fields (Phase 5: conversion) — the one thing in a submission
// that represents a second, undelivered opportunity rather than a detail of
// the first one. Rendered with a highlighted box instead of a plain line so
// it cannot be scanned past in the inbox, per the brief's own instruction
// that "the email should make the additional opportunities clearly visible."
// Every other field keeps the flat, single-line rendering it always had.
const CROSSSELL_FIELDS = new Set(["additional_insurance_needs", "insurance_needs", "entry_situation"]);

/** Renders every answered field, known label or not, in submission order. */
// B3 (Especificação v2): the wizard's nationality fields (`nacionalidade`
// on PT pages, `nationality` on EN pages — see quote-nationality.js) submit
// an ISO 3166-1 alpha-2 code ("AT"), because that's what belongs in
// quote_requests.dados_comuns.nacionalidade (a stable, language-independent
// value). The notification email is for a human, so it shows the country
// name instead — the same lookup table the combobox itself uses
// client-side (data/i18n/quote-form/{lang}.json's countries.<CODE>),
// falling back to the raw code for anything not in that table rather than
// showing nothing.
const NATIONALITY_FIELDS = new Set(["nacionalidade", "nationality"]);

const LANG_COUNTRY_TABLES = {
  de: deQuoteFormStrings.countries,
  nl: nlQuoteFormStrings.countries,
  pl: plQuoteFormStrings.countries,
  sv: svQuoteFormStrings.countries,
  da: daQuoteFormStrings.countries,
  zh: zhQuoteFormStrings.countries,
  he: heQuoteFormStrings.countries,
};

function displayValue(key, value, en, lang) {
  if (NATIONALITY_FIELDS.has(key)) {
    // Especificação v2, "restantes línguas" — `lang` names an actual
    // language-specific country table (de, nl so far); `en` stays the
    // PT/EN fallback for every form that predates `lang` existing at all.
    const table = LANG_COUNTRY_TABLES[lang] || (en ? enQuoteFormStrings.countries : ptQuoteFormStrings.countries);
    return table?.[value] || value;
  }
  return formatValue(value);
}

// Especificação v2, Fase 2 C4 (Saúde) — `dados_dinamicos` is excluded from
// the plain field loop below (INTERNAL_FIELDS) because it's raw JSON meant
// for quote_requests.pessoas_seguras (see netlify/functions/lib/
// dynamic-fields.mjs and public/js/quote-wizard.js's own serialisation),
// not for a human to read as-is. Without this, the email for a Saúde
// submission would say nothing at all about who is actually being insured
// — the one thing that ramo's wizard step exists to collect. Reuses
// dynamic-fields.mjs's own parser so a malformed value is handled exactly
// the same way here as when the row is built (silently, never thrown).
// Especificação v2, "restantes línguas" — `lang` currently only ever names
// 'de' (the one language with dynamic-block ramos — Saúde — converted so
// far); every other caller passes it undefined and gets the pre-existing
// en/pt behaviour unchanged.
const DYNAMIC_BLOCKS_COPY = {
  de: { heading: "Zu versichernde Personen", person: "Person", name: "Name", dob: "Geburtsdatum" },
  nl: { heading: "Te verzekeren personen", person: "Persoon", name: "Naam", dob: "Geboortedatum" },
  // Especificação v2, Parte B — PL/SE/DK/ZH share one generator and are
  // converted together.
  pl: { heading: "Osoby do ubezpieczenia", person: "Osoba", name: "Imię i nazwisko", dob: "Data urodzenia" },
  sv: { heading: "Personer som ska försäkras", person: "Person", name: "Namn", dob: "Födelsedatum" },
  da: { heading: "Personer der skal forsikres", person: "Person", name: "Navn", dob: "Fødselsdato" },
  zh: { heading: "需投保人员", person: "被保险人", name: "姓名", dob: "出生日期" },
  // Especificação v2, Parte C — unused until the Hebrew Saúde ramo ships
  // (only Home has a wizard config so far), added alongside the rest of the
  // Hebrew infrastructure per the same "infra bundled with the first ramo"
  // precedent PL/SE/DK/ZH followed. Not isolated for bidi: this heading is
  // plain Hebrew with no embedded Latin/numeric run, unlike the `nome`/`nif`
  // labels rendered per-person in renderDynamicBlocksSection below, which
  // stay untranslated "NIF" for every language including this one.
  he: { heading: "מבוטחים", person: "מבוטח", name: "שם", dob: "תאריך לידה" },
  en: { heading: "People to insure", person: "Person", name: "Name", dob: "Date of birth" },
  pt: { heading: "Pessoas a segurar", person: "Pessoa", name: "Nome", dob: "Data de nascimento" },
};

function renderDynamicBlocksSection(data, en, lang) {
  const { blocks } = parseDynamicFields(data?.dados_dinamicos);
  if (!blocks.length) return "";
  const t = DYNAMIC_BLOCKS_COPY[lang] || (en ? DYNAMIC_BLOCKS_COPY.en : DYNAMIC_BLOCKS_COPY.pt);
  const rows = blocks
    .map((block, i) => {
      const nome = escapeHtml(block?.nome || "");
      const nascimento = escapeHtml(block?.data_nascimento || "");
      const nif = escapeHtml(block?.nif || "");
      return (
        `<p style="margin:0 0 8px;"><strong>${t.person} ${i + 1}:</strong> ` +
        `${t.name} ${nome} · ${t.dob} ${nascimento} · NIF ${nif}</p>`
      );
    })
    .join("");
  return `<p style="margin:16px 0 8px;"><strong>${t.heading}</strong></p>${rows}`;
}

export function renderAllFields(data, en = false, lang) {
  const fields = Object.keys(data)
    .filter((key) => !INTERNAL_FIELDS.has(key))
    .filter((key) => data[key] != null && String(formatValue(data[key])).trim() !== "")
    .map((key) => {
      const label = escapeHtml(
        QUOTE_LABELS_BY_LANG[lang]?.[key] ||
          (en && QUOTE_LABELS_EN[key]) ||
          QUOTE_LABELS[key] ||
          humanise(key)
      );
      const value = escapeHtml(displayValue(key, data[key], en, lang));
      if (CROSSSELL_FIELDS.has(key)) {
        return `<p style="margin:0 0 10px;padding:10px 14px;background:#F2EBDA;border-left:3px solid #7A9A6B;"><strong>${label}:</strong> ${value}</p>`;
      }
      return `<p style="margin:0 0 8px;"><strong>${label}:</strong> ${value}</p>`;
    })
    .join("");
  return fields + renderDynamicBlocksSection(data, en, lang);
}

/**
 * Subject line for a quote: `[LEAD TVDE] Ana Silva — Lisboa — 3 viaturas`.
 * The two qualifiers are whichever of the location- and size-type answers the
 * branch happened to ask for, so the inbox is sortable without opening anything.
 */
export function quoteSubject(data, fallbackBranch) {
  let branch =
    data.ramo ||
    data.tipo_seguro ||
    data["tipo-seguro"] ||
    data.insurance_type ||
    data["insurance-type"] ||
    data.type_verzekering ||
    fallbackBranch ||
    "Geral";

  // The dedicated Spain landing pages already carry a pre-tagged branch
  // ("ES · Car Insurance") via their own fallbackBranch, so leads there sort
  // correctly with no change here. The one form that does not is the /en/
  // homepage's generic free-analysis form: its branch comes from a
  // Portugal-shaped `insurance_type` select (e.g. "Health") shared by both
  // markets, and only the explicit `country` field says which market a lead
  // is actually in. Tag it the same way here so a Spain lead from that form
  // is never mistaken for a Portugal one in the inbox.
  if (data.country === "Spain" && !/^ES\s*·/.test(branch)) {
    branch = `ES · ${branch}`;
  }

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

/**
 * The intake email's opening line for a quote form. Especificação v2, A3:
 * RC's real turnaround is 48-72 working hours, not the 24h every other
 * ramo promises — formConfig.slaHours (set only on the 6 RC form
 * HANDLED_FORMS entries) is the single source of truth for this, so this
 * function never has to know which ramo it's looking at beyond that one
 * field. Pure and exported so the PT/EN, 24h/48-72h combinations are each
 * a one-line test rather than something only visible by reading a real
 * email.
 */
export function quoteIntro(formConfig, from) {
  // Especificação v2, C2: "professional-liability-quote-wizard" is the first
  // EN form to carry a real slaHours (48-72h, same as its PT counterpart
  // "cotacao-rc-profissional") — until now every EN HANDLED_FORMS entry left
  // slaHours unset, so the branch below never had to honour it and always
  // said "one working day" (≈24h), which would have been a silent wrong
  // promise for this form. slaHours is stored PT-style ("48 a 72"); " a " is
  // translated to " to " for the English sentence, everything else about the
  // string (the two numbers) carries over unchanged.
  // Especificação v2, "restantes línguas" Parte A ponto 2 — `lang === 'de'`
  // checked before `en`, same priority as renderAllFields/displayValue
  // above: a dedicated German wizard's intake email reads in German, not
  // the English de-angebot-anfrage/nl-offerte-aanvraag convention.
  if (formConfig.lang === "de") {
    const slaText = formConfig.slaHours ? `${formConfig.slaHours.replace(" a ", " bis ")} Arbeitsstunden` : "24 Arbeitsstunden";
    return `Gesendet von ${escapeHtml(from)}. Eine Antwort innerhalb von ${slaText} wurde zugesagt.`;
  }
  // Especificação v2, Parte 2 continuação — same reasoning and priority as
  // `lang === 'de'` right above: a dedicated Dutch wizard's intake email
  // reads in Dutch, not the English nl-offerte-aanvraag convention.
  if (formConfig.lang === "nl") {
    const slaText = formConfig.slaHours ? `${formConfig.slaHours.replace(" a ", " tot ")} werkuren` : "24 uur";
    return `Verzonden vanaf ${escapeHtml(from)}. Een antwoord binnen ${slaText} werd toegezegd.`;
  }
  // Especificação v2, Parte B — PL/SE/DK/ZH, same priority and reasoning as
  // the branches above: a dedicated wizard's intake email reads in the
  // page's own language.
  if (formConfig.lang === "pl") {
    const slaText = formConfig.slaHours ? `${formConfig.slaHours.replace(" a ", " do ")} godzin roboczych` : "24 godzin roboczych";
    return `Zgłoszenie wysłane z ${escapeHtml(from)}. Odpowiedź w ciągu ${slaText} została obiecana.`;
  }
  if (formConfig.lang === "sv") {
    const slaText = formConfig.slaHours ? `${formConfig.slaHours.replace(" a ", " till ")} arbetstimmar` : "24 arbetstimmar";
    return `Skickat från ${escapeHtml(from)}. Ett svar inom ${slaText} har utlovats.`;
  }
  if (formConfig.lang === "da") {
    const slaText = formConfig.slaHours ? `${formConfig.slaHours.replace(" a ", " til ")} arbejdstimer` : "24 arbejdstimer";
    return `Sendt fra ${escapeHtml(from)}. Et svar inden for ${slaText} er blevet lovet.`;
  }
  if (formConfig.lang === "zh") {
    const slaText = formConfig.slaHours ? `${formConfig.slaHours.replace(" a ", " 至 ")}个工作小时` : "24个工作小时";
    return `发送自 ${escapeHtml(from)}。承诺将在${slaText}内回复。`;
  }
  // Especificação v2, Parte C — same priority and reasoning as the branches
  // above: a dedicated Hebrew wizard's intake email reads in Hebrew. `from`
  // is wrapped in the U+2066/U+2069 isolate pair (see he.json's own
  // _comment and scripts/il-content/ui.mjs's header) because this string
  // goes through escapeHtml() into an RTL-rendered HTML email — a URL's
  // slash-separated segments would otherwise take the paragraph's
  // right-to-left direction and print in reverse order.
  if (formConfig.lang === "he") {
    const slaText = formConfig.slaHours ? `${formConfig.slaHours.replace(" a ", " עד ")} שעות עבודה` : "24 שעות עבודה";
    return `נשלח מ־⁦${escapeHtml(from)}⁩. הובטחה תשובה בתוך ${slaText}.`;
  }
  if (formConfig.en) {
    const slaText = formConfig.slaHours ? `${formConfig.slaHours.replace(" a ", " to ")} business hours` : "one working day";
    return `Submitted from ${escapeHtml(from)}. A reply within ${slaText} was promised.`;
  }
  const slaText = formConfig.slaHours ? `${formConfig.slaHours} horas úteis` : "24 horas úteis";
  return `Pedido submetido a partir de ${escapeHtml(from)}. Resposta prometida em ${slaText}.`;
}

// Especificação v2, "restantes línguas" Parte 4: a construção do conteúdo do
// email precisa de correr tanto no envio real (quando RESEND_API_KEY está
// configurada) como no modo de teste (para ficar registada em log, mesmo sem
// nunca ser enviada) — extraída para não duplicar a lógica nos dois sítios.
// Pura: não faz I/O nenhum.
export function buildIntakeEmail(formConfig, data, payload) {
  let rows;
  let subject;
  let intro;

  if (formConfig.quote) {
    rows = renderAllFields(data, Boolean(formConfig.en), formConfig.lang);
    subject = quoteSubject(data, formConfig.branch);
    const from = data.source_url || formConfig.page || data.source || "—";
    intro = quoteIntro(formConfig, from);
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

  // Especificação v2, Parte C — the one RTL language this inbox receives.
  // Without `dir="rtl"` here, mail clients that don't auto-detect direction
  // from the first strong character left-align the Hebrew rows, which is
  // legible but reads wrong; every other language leaves this unset because
  // none of them need it.
  const dirAttr = formConfig.lang === "he" ? ' dir="rtl"' : "";
  const html = `
    <div${dirAttr}>
    <h2 style="font-family:Arial,sans-serif;">${formConfig.heading}</h2>
    <p style="font-family:Arial,sans-serif;">${intro}</p>
    <hr/>
    <div style="font-family:Arial,sans-serif;font-size:14px;color:#333;">${rows}</div>
    <hr/>
    <p style="font-family:Arial,sans-serif;font-size:12px;color:#888;">Submitted: ${escapeHtml(
      payload.created_at || new Date().toISOString()
    )}</p>
    </div>
  `;

  return { subject, html };
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

  // Especificação v2, "restantes línguas" Parte 0 ponto 3 / Parte 4: o Hugo
  // não faz submissões manuais nesta fase, em nenhuma língua — o modo de
  // teste é a via de validação que o substitui. Uma submissão em modo de
  // teste grava em quote_requests na mesma (marcada `teste = true`, ver
  // insertQuoteRequest abaixo), mas NUNCA dispara o email nem a
  // sincronização real com o CRM: em vez disso, os dois payloads são
  // construídos e registados em log tal como seriam para uma submissão
  // real, para que a construção do email e do payload do CRM continue a ser
  // verificada mesmo sem envio — ver lead-classification.mjs's
  // TEST_MODE_SENTINEL/isTestModeSubmission() para o valor convencionado.
  const isTest = isTestModeSubmission(data);

  // Email is independent from CRM sync below: a missing RESEND_API_KEY (or any
  // failure sending the email) only skips the email, it must never skip the
  // CRM sync — and vice-versa, see the CRM sync block after this one. Test
  // mode is independent of RESEND_API_KEY too: content is built and logged
  // whether or not a real key is configured, since the whole point is to
  // verify construction without ever actually sending.
  // Especificação v2, "restantes línguas" Parte 1 ponto 1 — function-log
  // reading has not returned useful content in this project's sessions so
  // far (several attempts via `netlify logs`, always one empty INFO line
  // regardless of the window asked for), which left the two payloads below
  // unverifiable in practice despite being logged. testPayload collects them
  // as this handler builds them anyway, so insertQuoteRequest can write them
  // onto the test row itself (payload_teste column) — readable by direct
  // query, not dependent on any log tool. The console.log lines stay too,
  // for whichever environment log reading does work in; the database column
  // is the reliable channel from here on.
  const testPayload = isTest ? {} : undefined;

  if (isTest) {
    const { subject, html } = buildIntakeEmail(formConfig, data, payload);
    testPayload.email = { subject, html };
    console.log(`[submission-created] TEST MODE formName=${formName} — email and CRM sync not sent, both payloads logged below instead`);
    console.log(`[submission-created] TEST_EMAIL subject=${JSON.stringify(subject)}`);
    console.log(`[submission-created] TEST_EMAIL_HTML ${html}`);
  } else if (!process.env.RESEND_API_KEY) {
    console.log("RESEND_API_KEY not set — skipping intake notification email.");
  } else {
    const { subject, html } = buildIntakeEmail(formConfig, data, payload);
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
  }

  // ── CRM sync (best-effort, additional to the email above) ──────────────────
  // Netlify Forms' submission-created payload always carries `payload.id`, a
  // UUID unique to this submission — used as-is as the idempotency key sent
  // to the CRM (see website_leads.submission_id in the adlerpro repo). The
  // fallback below only matters if that assumption ever breaks: it builds a
  // deterministic key from non-sensitive fields (form, email, timestamp) so a
  // retry of the exact same submission still collides instead of creating a
  // duplicate lead, even though it would not catch the same person
  // resubmitting the same form at a different time — an acceptable gap here
  // since payload.id is expected to always be present in practice.
  const submissionId =
    payload.id || (data.email && payload.created_at
      ? `noid:${formName}:${String(data.email).trim().toLowerCase()}:${payload.created_at}`
      : undefined);

  if (isTest) {
    // buildCrmLeadPayload is pure and untouched (see the file-level comment
    // on it in crm-sync.mjs) — calling it directly here, instead of
    // sendLeadToCrm, is what lets test mode log the exact same
    // privacy-restricted payload a real submission would send, without ever
    // making the network call sendLeadToCrm wraps it in.
    const { payload: crmPayload, skippedReason } = buildCrmLeadPayload(formName, data, {
      submissionId,
      sourceUrl: data.source_url,
    });
    testPayload.crm = { payload: crmPayload, skippedReason };
    console.log(
      `[submission-created] TEST_CRM_PAYLOAD ${crmPayload ? JSON.stringify(crmPayload) : `null (skippedReason=${skippedReason})`}`
    );
  } else {
    try {
      await sendLeadToCrm(formName, data, {
        submissionId,
        sourceUrl: data.source_url,
      });
    } catch (err) {
      // sendLeadToCrm already catches its own errors; this is a last-resort net
      // so a bug in it can never take the submission pipeline down with it.
      console.error("[crm-sync] unexpected error:", err);
    }
  }

  // ── quote_requests (Supabase, best-effort, additional to the above) ────────
  // Formulários de Cotação v2, Fase 0. Nunca deve afetar a resposta ao
  // Netlify Forms nem o email/CRM sync acima — ver netlify/functions/lib/
  // quote-requests-sync.mjs. Grava sempre, modo de teste incluído — é o que
  // torna uma submissão de teste verificável por leitura direta da tabela;
  // isTest flui para a coluna `teste` da linha.
  try {
    await insertQuoteRequest(formName, data, { submissionId, isTest, testPayload });
  } catch (err) {
    console.error("[quote-requests-sync] unexpected error:", err);
  }

  return new Response("OK", { status: 200 });
};
