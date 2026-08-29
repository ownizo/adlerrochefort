// -----------------------------------------------------------------------------
// lead-classification.mjs — classifica uma submissão de formulário para saber
// se pode ser sincronizada automaticamente com o CRM (admin.adlerrochefort.com)
// como um cliente individual (pessoa singular).
//
// Puro e sem I/O de propósito — testado em lead-classification.test.mjs sem
// precisar de rede nem de Supabase.
//
// entityType:
//   'individual'   -> pessoa singular; pode sincronizar
//   'business'     -> empresa; NÃO sincroniza (fase 1)
//   'condominium'  -> condomínio; NÃO sincroniza (fase 1)
//   'ambiguous'    -> não foi possível determinar com segurança; NÃO sincroniza
// -----------------------------------------------------------------------------

// Palavras que, num campo de texto livre (profissão/atividade), indicam uma
// pessoa coletiva e não uma pessoa singular. Lista pequena e conservadora de
// propósito: um falso negativo aqui (deixar uma empresa cair em "individual")
// é menos grave para este caso de uso do que um falso positivo a marcar uma
// pessoa singular como empresa e perder o lead — ver "classificação
// contextual" no pedido que motivou isto.
const BUSINESS_ENTITY_KEYWORDS = /\b(lda|s\.?a\.?|unipessoal|sociedade|ltd|inc|gmbh|srl|corp|associação|associacao)\b/i;

/**
 * Classificação contextual para ramos de "profissão específica" — hoje só
 * Responsabilidade Civil Profissional / Professional indemnity, que cobre
 * atividades tipicamente exercidas a título individual (Massagistas,
 * Acupuntura, Naturopatia, Terapêuticas Não Convencionais, outras profissões
 * liberais) mas também pode ser pedida por uma empresa. Mesmo padrão a
 * replicar se/quando aparecer um formulário dedicado a "Profissões
 * Específicas" — ver classifySubmission mais abaixo.
 *
 * Sinais de empresa, por ordem:
 *   1. um campo de empresa FIXO do formulário (fora do branch) está
 *      preenchido — hoje `empresa` (analise-gratuita) / `company`
 *      (free-analysis); os formulários cotacao-blog/quote-blog não têm este
 *      campo, pelo que aqui é sempre undefined nesses casos.
 *   2. o texto livre da profissão (rcp_profissao / pi_profession) contém uma
 *      palavra tipicamente associada a pessoa coletiva (Lda, Unipessoal,
 *      Sociedade, Ltd, ...).
 * Sem nenhum destes sinais -> individual. Nome e email válidos já são
 * garantidos antes disto por buildCrmLeadPayload, e o próprio ramo já indica
 * uma atividade tipicamente exercida a título individual.
 */
function classifySpecificProfession(data, { companyFieldNames, professionFieldNames }) {
  const companyField = firstNonEmpty(companyFieldNames.map((name) => data?.[name]));
  if (companyField) return 'business';

  const professionText = firstNonEmpty(professionFieldNames.map((name) => data?.[name]));
  if (professionText && BUSINESS_ENTITY_KEYWORDS.test(professionText)) return 'business';

  return 'individual';
}

const classifyProfessionalIndemnity = (data) =>
  classifySpecificProfession(data, {
    companyFieldNames: ['empresa', 'company'],
    professionFieldNames: ['rcp_profissao', 'pi_profession'],
  });

// Ramo escolhido num formulário partilhado (cotacao-blog / analise-gratuita /
// free-analysis / quote-blog) -> classificação. As chaves são os `value` reais
// das opções do <select data-branch-select>, em PT e EN (ver
// public/index.html, public/en/index.html e public/blog/*/index.html).
//
// entityType: 'contextual' marca um ramo cuja classificação depende dos
// dados da submissão (ver classify() acima) em vez de ser fixa — usado hoje
// só por Responsabilidade Civil Profissional / Professional indemnity.
//
// Nota "Organização de Eventos": não existe hoje nenhuma opção de branch nem
// formulário para isto no site (confirmado — nenhum <select> do repositório
// tem uma opção de eventos). Se/quando for adicionada, NÃO mapear como
// 'individual' por omissão — precisa do mesmo tratamento contextual de cima
// (pessoa, empresa ou associação são todas possíveis). Enquanto não existir
// aqui, uma opção desse género cai no fallback de `classifySubmission`
// abaixo (branch não reconhecido -> 'ambiguous'), que já é o comportamento
// correto.
const BRANCH_CLASSIFICATION = {
  // PT
  'Saúde': { entityType: 'individual', product: 'health' },
  'Automóvel': { entityType: 'individual', product: 'auto' },
  'TVDE (Uber, Bolt, Free Now)': { entityType: 'individual', product: 'tvde' },
  'Frota de empresa': { entityType: 'business', product: 'fleet' },
  'Habitação': { entityType: 'individual', product: 'home' },
  'Alojamento Local': { entityType: 'individual', product: 'short-term-rental' },
  'Condomínio': { entityType: 'condominium', product: 'condominium' },
  'Hotelaria e Restauração': { entityType: 'business', product: 'horeca' },
  'Multirriscos Empresarial': { entityType: 'business', product: 'business-multirisk' },
  'Responsabilidade Civil Profissional': {
    entityType: 'contextual',
    product: 'professional-indemnity',
    classify: classifyProfessionalIndemnity,
  },
  'Riscos Cibernéticos': { entityType: 'business', product: 'cyber' },
  'Vida e Crédito Habitação': { entityType: 'individual', product: 'life' },
  'Acidentes de Trabalho': { entityType: 'business', product: 'workers-comp' },
  'Outro': { entityType: 'ambiguous', product: 'other' },
  // EN
  'Health': { entityType: 'individual', product: 'health' },
  'Car': { entityType: 'individual', product: 'auto' },
  'Company fleet': { entityType: 'business', product: 'fleet' },
  'Home': { entityType: 'individual', product: 'home' },
  'Holiday let (Alojamento Local)': { entityType: 'individual', product: 'short-term-rental' },
  'Condominium': { entityType: 'condominium', product: 'condominium' },
  'Hospitality & restaurants': { entityType: 'business', product: 'horeca' },
  'Business combined (multirriscos)': { entityType: 'business', product: 'business-multirisk' },
  'Professional indemnity': {
    entityType: 'contextual',
    product: 'professional-indemnity',
    classify: classifyProfessionalIndemnity,
  },
  'Cyber': { entityType: 'business', product: 'cyber' },
  'Life & mortgage protection': { entityType: 'individual', product: 'life' },
  "Workers' compensation": { entityType: 'business', product: 'workers-comp' },
  'Other': { entityType: 'ambiguous', product: 'other' },
};

// Nomes de campo usados pelo <select data-branch-select> consoante o
// formulário (ver public/index.html, public/en/index.html, public/blog/*).
const BRANCH_FIELD_NAMES = ['tipo_seguro', 'tipo-seguro', 'insurance_type', 'insurance-type', 'type_verzekering'];

// Classificação fixa por formulário. `branch: true` marca os formulários
// partilhados cujo entityType/product dependem do ramo escolhido (ver
// BRANCH_CLASSIFICATION) — nunca classificar o formulário inteiro como
// individual quando alguns ramos são empresariais/condomínio.
const FORM_CLASSIFICATION = {
  'relocation-services': { entityType: 'individual', market: 'EN', product: 'relocation' },
  'fiscal-representation': { entityType: 'individual', market: 'EN', product: 'fiscal-representation' },
  'nl-offerte-aanvraag': { entityType: 'individual', market: 'NL', product: 'general' },
  'valuables-review': { entityType: 'individual', market: 'EN', product: 'valuables' },

  'cotacao-tvde': { entityType: 'individual', market: 'PT', product: 'tvde' },
  'cotacao-frota': { entityType: 'business', market: 'PT', product: 'fleet' },
  'cotacao-alojamento-local': { entityType: 'individual', market: 'PT', product: 'short-term-rental' },
  'cotacao-habitacao': { entityType: 'individual', market: 'PT', product: 'home' },
  'cotacao-empresarial': { entityType: 'business', market: 'PT', product: 'business-multirisk' },
  'quote-tvde-en': { entityType: 'individual', market: 'EN', product: 'tvde' },
  'cotacao-blog': { branch: true, market: 'PT' },
  'analise-gratuita': { branch: true, market: 'PT' },
  'free-analysis': { branch: true, market: 'EN' },
  'quote-blog': { branch: true, market: 'EN' },
  'expat-health-quote': { entityType: 'individual', market: 'EN', product: 'health' },
  'home-insurance-quote': { entityType: 'individual', market: 'EN', product: 'home' },
  'seguro-auto': { entityType: 'individual', market: 'PT', product: 'auto' },
  contacto: { entityType: 'individual', market: 'PT', product: 'contact' },
  'contact-en': { entityType: 'individual', market: 'EN', product: 'contact' },
  'condominium-audit': { entityType: 'condominium', market: 'EN', product: 'condominium' },
  'auditoria-condominio': { entityType: 'condominium', market: 'PT', product: 'condominium' },
  'alterar-mediador': { entityType: 'individual', market: 'PT', product: 'mediator-change' },
  'lead-nl': { entityType: 'individual', market: 'NL', product: 'general' },
  'lead-fr': { entityType: 'individual', market: 'FR', product: 'general' },
  'lead-de': { entityType: 'individual', market: 'DE', product: 'general' },
};

function firstNonEmpty(values) {
  for (const v of values) {
    if (v != null && String(v).trim() !== '') return String(v).trim();
  }
  return undefined;
}

/**
 * Classifica uma submissão. Formulários não listados (incluindo os que não
 * têm nada a ver com leads comerciais) devolvem 'ambiguous' — nunca
 * sincronizar por omissão.
 */
export function classifySubmission(formName, data) {
  const config = FORM_CLASSIFICATION[formName];
  if (!config) return { entityType: 'ambiguous', market: undefined, product: undefined };

  if (config.branch) {
    const branchValue = firstNonEmpty(BRANCH_FIELD_NAMES.map((name) => data?.[name]));
    const branchInfo = branchValue ? BRANCH_CLASSIFICATION[branchValue] : undefined;
    if (!branchInfo) {
      return { entityType: 'ambiguous', market: config.market, product: undefined, branchLabel: branchValue };
    }
    const entityType = branchInfo.entityType === 'contextual' ? branchInfo.classify(data) : branchInfo.entityType;
    return { entityType, market: config.market, product: branchInfo.product, branchLabel: branchValue };
  }

  return { entityType: config.entityType, market: config.market, product: config.product };
}

/**
 * Extrai só nome/email/telefone — os únicos dados de contacto que chegam ao
 * CRM. Cobre os nomes de campo usados nos vários formulários (PT/EN/NL/FR/DE).
 */
export function extractContact(data) {
  const name = firstNonEmpty([data?.nome, data?.name, data?.full_name, data?.naam]);
  const email = firstNonEmpty([data?.email]);
  const phone = firstNonEmpty([data?.telefone, data?.telemovel, data?.phone, data?.telefoon]);
  return { name, email, phone };
}

export const CRM_HANDLED_FORMS = new Set(Object.keys(FORM_CLASSIFICATION));
