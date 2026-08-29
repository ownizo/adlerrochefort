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
//
// market vs. language: dois conceitos diferentes (ver comentário junto de
// FORM_CLASSIFICATION). `market` é o país/mercado do lead (hoje: 'PT' ou
// 'ES'); `language` é só a língua da página/formulário, propagada para o CRM
// via metadata (ver crm-sync.mjs), nunca gravada em `market`.
// -----------------------------------------------------------------------------

function firstNonEmpty(values) {
  for (const v of values) {
    if (v != null && String(v).trim() !== '') return String(v).trim();
  }
  return undefined;
}

// Palavras que, num campo de texto livre (empresa/profissão/atividade),
// indicam uma pessoa coletiva e não uma pessoa singular. Lista pequena e
// conservadora de propósito: um falso negativo aqui (deixar uma empresa cair
// em "individual") é menos grave para este caso de uso do que um falso
// positivo a marcar uma pessoa singular como empresa e perder o lead.
const BUSINESS_ENTITY_KEYWORDS = /\b(lda|s\.?a\.?|unipessoal|sociedade|ltd|inc|gmbh|srl|corp|associação|associacao)\b/i;

function hasBusinessKeyword(data, fieldNames) {
  return fieldNames.some((name) => {
    const value = data?.[name];
    return value != null && BUSINESS_ENTITY_KEYWORDS.test(String(value));
  });
}

function hasNonEmptyValue(data, fieldNames) {
  return fieldNames.some((name) => {
    const value = data?.[name];
    return value != null && String(value).trim() !== '';
  });
}

/**
 * Classificação contextual genérica para ramos/formulários de "profissão
 * específica" ou "empresa OU particular" — hoje usada por Responsabilidade
 * Civil Profissional / Professional indemnity e pelos formulários dedicados
 * de RC (TNC, Massagistas, Profissões Específicas). Mesmo padrão a replicar
 * para qualquer formulário futuro do mesmo tipo.
 *
 * `strictCompanyFields`: campos que são SÓ um nome de empresa (campo de
 * identidade separado do nome da pessoa, ex.: "Empresa (opcional)" em
 * analise-gratuita/free-analysis) — presentes e não vazios já chegam para
 * classificar como business, sem precisar de palavra-chave.
 * `keywordFields`: campos de texto livre onde a pessoa pode ter escrito o
 * nome de uma empresa em vez de uma profissão/atividade individual (ex.:
 * "Empresa ou nome individual" nos formulários dedicados de RC, onde o
 * próprio campo admite as duas coisas) — só conta como sinal de empresa se
 * o texto contiver uma das BUSINESS_ENTITY_KEYWORDS.
 *
 * Sem nenhum sinal -> individual. Nome e email válidos já são garantidos
 * antes disto por buildCrmLeadPayload.
 */
function classifyBySignals(data, { strictCompanyFields = [], keywordFields = [] }) {
  if (hasNonEmptyValue(data, strictCompanyFields)) return 'business';
  if (hasBusinessKeyword(data, keywordFields)) return 'business';
  return 'individual';
}

// RC Profissional / Professional indemnity chegam por dois caminhos: os
// formulários partilhados (cotacao-blog/analise-gratuita/free-analysis/
// quote-blog, branch selecionado) e o formulário dedicado
// (cotacao-rc-profissional). Os nomes de campo diferem ligeiramente, mas o
// produto é o mesmo — ver "product: 'professional-liability'" nos dois
// pontos de FORM_CLASSIFICATION/BRANCH_CLASSIFICATION abaixo.
const classifyProfessionalIndemnityBranch = (data) =>
  classifyBySignals(data, {
    // `empresa`/`company` só existem nos formulários partilhados
    // analise-gratuita/free-analysis, onde são um campo de identidade
    // separado do nome — nunca presentes em cotacao-blog/quote-blog.
    strictCompanyFields: ['empresa', 'company'],
    keywordFields: ['rcp_profissao', 'pi_profession'],
  });

// No formulário dedicado /seguros/responsabilidade-civil-profissional/, o
// campo `empresa` está explicitamente rotulado "Empresa ou nome individual"
// — dual-purpose, por isso só conta com base em palavra-chave, nunca só por
// estar preenchido.
const classifyRcProfissionalDedicated = (data) =>
  classifyBySignals(data, { keywordFields: ['empresa', 'rcp_profissao'] });

// /seguros/rc-profissoes-especificas/ — mesmo padrão "empresa ou nome
// individual" (pe_empresa), mais o próprio select de atividade (pe_atividade
// inclui "Sociedade de Advogados", que já contém a palavra-chave "sociedade")
// e o campo livre "outra atividade" (pe_outra).
const classifyRcProfissoesEspecificas = (data) =>
  classifyBySignals(data, { keywordFields: ['pe_empresa', 'pe_atividade', 'pe_outra'] });

// /seguros/responsabilidade-civil-eventos/ — o próprio campo de nome é
// rotulado "Nome / empresa" e não existe nenhum outro campo capaz de indicar
// o tipo de entidade (ev_tipo é o tipo de EVENTO, não de organizador). Um
// organizador pode ser pessoa, empresa ou associação — sem sinal de empresa
// explícito, não dá para assumir individual: fica ambiguous (nunca
// sincroniza), como pedido explicitamente para este caso.
function classifyRcEventos(data) {
  if (hasBusinessKeyword(data, ['nome', 'name'])) return 'business';
  return 'ambiguous';
}

// Determina o mercado a partir do campo `country` (Portugal | Spain) — usado
// só por international-insurance-review, o único formulário onde o mesmo
// form-name pode representar os dois mercados. Devolve undefined (não 'PT'
// nem 'EN') quando o valor não é um dos dois esperados, em vez de adivinhar.
function deriveMarketFromCountryField(data) {
  const country = firstNonEmpty([data?.country]);
  if (country === 'Portugal') return 'PT';
  if (country === 'Spain') return 'ES';
  return undefined;
}

// Ramo escolhido num formulário partilhado (cotacao-blog / analise-gratuita /
// free-analysis / quote-blog) -> classificação. As chaves são os `value` reais
// das opções do <select data-branch-select>, em PT e EN (ver
// public/index.html, public/en/index.html e public/blog/*/index.html).
//
// entityType: 'contextual' marca um ramo cuja classificação depende dos
// dados da submissão (ver classify() acima) em vez de ser fixa — usado hoje
// só por Responsabilidade Civil Profissional / Professional indemnity.
//
// Nota "Organização de Eventos": este ramo não existe como opção do
// <select> partilhado (só existe como formulário dedicado,
// cotacao-rc-eventos, classificado em FORM_CLASSIFICATION). Se/quando for
// adicionado também aqui, aplicar o mesmo tratamento contextual — nunca
// 'individual' por omissão.
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
    product: 'professional-liability',
    classify: classifyProfessionalIndemnityBranch,
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
    product: 'professional-liability',
    classify: classifyProfessionalIndemnityBranch,
  },
  'Cyber': { entityType: 'business', product: 'cyber' },
  'Life & mortgage protection': { entityType: 'individual', product: 'life' },
  "Workers' compensation": { entityType: 'business', product: 'workers-comp' },
  'Other': { entityType: 'ambiguous', product: 'other' },
};

// Nomes de campo usados pelo <select data-branch-select> consoante o
// formulário (ver public/index.html, public/en/index.html, public/blog/*).
const BRANCH_FIELD_NAMES = ['tipo_seguro', 'tipo-seguro', 'insurance_type', 'insurance-type', 'type_verzekering'];

// Classificação por formulário. `branch: true` marca os formulários
// partilhados cujo entityType/product dependem do ramo escolhido (ver
// BRANCH_CLASSIFICATION) — nunca classificar o formulário inteiro como
// individual quando alguns ramos são empresariais/condomínio.
//
// `market`: string fixa, OU função (data) => 'PT' | 'ES' | undefined para o
// único formulário onde o mesmo form-name serve os dois mercados
// (international-insurance-review). NUNCA 'EN' — EN é uma língua, não um
// mercado (ver `language` abaixo). Todos os formulários em inglês listados
// aqui são sobre Portugal (páginas /en/* dirigidas a expats), exceto os
// explicitamente marcados market: 'ES' (cluster Espanha) — confirmado
// lendo o conteúdo real de cada página, não assumido pelo prefixo /en/.
//
// `language`: só definido quando a língua da página difere do português —
// propagado para website_leads.metadata.language por crm-sync.mjs. Os
// formulários nl-offerte-aanvraag/lead-nl/lead-fr/lead-de já submetem o seu
// próprio campo `lang` (ver public/nl|fr|de/*), que crm-sync.mjs usa
// diretamente; não precisam de `language` fixo aqui.
const FORM_CLASSIFICATION = {
  // ── PT, língua PT ──────────────────────────────────────────────────────
  contacto: { entityType: 'individual', market: 'PT', product: 'contact' },
  'cotacao-tvde': { entityType: 'individual', market: 'PT', product: 'tvde' },
  'cotacao-frota': { entityType: 'business', market: 'PT', product: 'fleet' },
  'cotacao-alojamento-local': { entityType: 'individual', market: 'PT', product: 'short-term-rental' },
  'cotacao-habitacao': { entityType: 'individual', market: 'PT', product: 'home' },
  'cotacao-empresarial': { entityType: 'business', market: 'PT', product: 'business-multirisk' },
  'seguro-auto': { entityType: 'individual', market: 'PT', product: 'auto' },
  'auditoria-condominio': { entityType: 'condominium', market: 'PT', product: 'condominium' },
  'alterar-mediador': { entityType: 'individual', market: 'PT', product: 'mediator-change' },
  'private-clients-review': { entityType: 'individual', market: 'PT', product: 'private-clients' },
  // RC Profissional e o cluster de nicho (TNC, Massagistas, Profissões
  // Específicas, Eventos) — formulários dedicados novos (ver secção 6/7 do
  // pedido). Mesmo `product` que o ramo partilhado equivalente
  // (professional-liability), exceto Eventos, que é um produto diferente.
  'cotacao-rc-profissional': {
    entityType: 'contextual',
    market: 'PT',
    product: 'professional-liability',
    classify: classifyRcProfissionalDedicated,
  },
  // Sem qualquer campo de empresa/atividade-empresarial no formulário — só
  // um select fechado de atividades terapêuticas individuais. Sempre
  // individual, não é "contextual" porque não há dado nenhum capaz de
  // apontar para business.
  'cotacao-rc-tnc': { entityType: 'individual', market: 'PT', product: 'professional-liability' },
  'cotacao-rc-massagistas': { entityType: 'individual', market: 'PT', product: 'professional-liability' },
  'cotacao-rc-profissoes-especificas': {
    entityType: 'contextual',
    market: 'PT',
    product: 'professional-liability',
    classify: classifyRcProfissoesEspecificas,
  },
  'cotacao-rc-eventos': {
    entityType: 'contextual',
    market: 'PT',
    product: 'event-liability',
    classify: classifyRcEventos,
  },

  // Formulários partilhados por branch — ver BRANCH_CLASSIFICATION.
  'cotacao-blog': { branch: true, market: 'PT' },
  'analise-gratuita': { branch: true, market: 'PT' },
  'quote-blog': { branch: true, market: 'PT', language: 'EN' },
  'free-analysis': { branch: true, market: 'PT', language: 'EN' },

  // ── PT, língua EN (páginas /en/* sobre Portugal — confirmado pelo
  // conteúdo real de cada página: NIF, Algarve, NIF/D7, seguro decenal,
  // etc. `market: 'EN'` seria uma confusão entre língua e mercado). ──────
  'relocation-services': { entityType: 'individual', market: 'PT', language: 'EN', product: 'relocation' },
  'fiscal-representation': { entityType: 'individual', market: 'PT', language: 'EN', product: 'fiscal-representation' },
  // Mesmo produto que private-clients-review (PT) — ambos são o cluster de
  // património/coleções/valores para clientes privados, só muda o formulário
  // de entrada; ver secção 8 do pedido.
  'valuables-review': { entityType: 'individual', market: 'PT', language: 'EN', product: 'private-clients' },
  'quote-tvde-en': { entityType: 'individual', market: 'PT', language: 'EN', product: 'tvde' },
  'expat-health-quote': { entityType: 'individual', market: 'PT', language: 'EN', product: 'health' },
  'home-insurance-quote': { entityType: 'individual', market: 'PT', language: 'EN', product: 'home' },
  'contact-en': { entityType: 'individual', market: 'PT', language: 'EN', product: 'contact' },
  'condominium-audit': { entityType: 'condominium', market: 'PT', language: 'EN', product: 'condominium' },
  // Sem campo de empresa; "senhorio" aqui é sempre um proprietário individual
  // (ver secção 9 do pedido) — nenhuma das 4 páginas que usam este form-name
  // pede dados de empresa.
  'landlord-insurance-quote': { entityType: 'individual', market: 'PT', language: 'EN', product: 'landlord' },
  'car-insurance-quote': { entityType: 'individual', market: 'PT', language: 'EN', product: 'auto' },
  'expat-insurance-review': { entityType: 'individual', market: 'PT', language: 'EN', product: 'insurance-review' },

  // ── PT, outras línguas (o próprio formulário já submete `lang`) ───────
  'nl-offerte-aanvraag': { entityType: 'individual', market: 'PT', product: 'general' },
  'lead-nl': { entityType: 'individual', market: 'PT', product: 'general' },
  'lead-fr': { entityType: 'individual', market: 'PT', product: 'general' },
  'lead-de': { entityType: 'individual', market: 'PT', product: 'general' },

  // ── Espanha — mesmo CRM, market: 'ES'. Confirmado por leitura de cada
  // página: todas têm `<input type="hidden" name="country" value="Spain">`
  // e nenhuma tem campo de empresa. ─────────────────────────────────────
  'expat-insurance-review-spain': { entityType: 'individual', market: 'ES', language: 'EN', product: 'insurance-review' },
  'home-insurance-quote-spain': { entityType: 'individual', market: 'ES', language: 'EN', product: 'home' },
  'landlord-insurance-quote-spain': { entityType: 'individual', market: 'ES', language: 'EN', product: 'landlord' },
  'health-insurance-quote-spain': { entityType: 'individual', market: 'ES', language: 'EN', product: 'health' },
  'car-insurance-quote-spain': { entityType: 'individual', market: 'ES', language: 'EN', product: 'auto' },
  'life-insurance-review-spain': { entityType: 'individual', market: 'ES', language: 'EN', product: 'life' },
  'mortgage-protection-review-spain': { entityType: 'individual', market: 'ES', language: 'EN', product: 'mortgage-protection' },
  'private-client-review-spain': { entityType: 'individual', market: 'ES', language: 'EN', product: 'private-clients' },

  // ── Mercado determinado por submissão: o mesmo formulário serve PT e ES,
  // consoante o campo `country` (Portugal | Spain) escolhido pelo visitante
  // antes de mais nada. Sem campo de empresa — sempre individual. ───────
  'international-insurance-review': {
    entityType: 'individual',
    market: deriveMarketFromCountryField,
    language: 'EN',
    product: 'insurance-review',
  },
};

/**
 * Classifica uma submissão. Formulários não listados (incluindo os que não
 * têm nada a ver com leads comerciais, ou um formulário novo ainda por
 * classificar) devolvem 'ambiguous' — nunca sincronizar por omissão. Este é
 * o fail-safe: mesmo que a lista acima fique desatualizada em runtime, nunca
 * degrada para 'individual'.
 */
export function classifySubmission(formName, data) {
  const config = FORM_CLASSIFICATION[formName];
  if (!config) return { entityType: 'ambiguous', market: undefined, product: undefined };

  const market = typeof config.market === 'function' ? config.market(data) : config.market;

  if (config.branch) {
    const branchValue = firstNonEmpty(BRANCH_FIELD_NAMES.map((name) => data?.[name]));
    const branchInfo = branchValue ? BRANCH_CLASSIFICATION[branchValue] : undefined;
    if (!branchInfo) {
      return { entityType: 'ambiguous', market, product: undefined, branchLabel: branchValue, language: config.language };
    }
    const entityType = branchInfo.entityType === 'contextual' ? branchInfo.classify(data) : branchInfo.entityType;
    return { entityType, market, product: branchInfo.product, branchLabel: branchValue, language: config.language };
  }

  const entityType = config.entityType === 'contextual' ? config.classify(data) : config.entityType;
  return { entityType, market, product: config.product, language: config.language };
}

/**
 * Extrai só nome/email/telefone — os únicos dados de contacto que chegam ao
 * CRM. Cobre os nomes de campo usados nos vários formulários (PT/EN/NL/FR/DE
 * e os formulários mais recentes, que usam `name`/`phone` diretamente).
 */
export function extractContact(data) {
  const name = firstNonEmpty([data?.nome, data?.name, data?.full_name, data?.naam]);
  const email = firstNonEmpty([data?.email]);
  const phone = firstNonEmpty([data?.telefone, data?.telemovel, data?.phone, data?.telefoon]);
  return { name, email, phone };
}

export const CRM_HANDLED_FORMS = new Set(Object.keys(FORM_CLASSIFICATION));
