// PLACEHOLDER — Hugo tem de validar/ajustar estes valores antes de publicar em produção.
// Todos os valores monetários abaixo são estimativas de exemplo, não tarifários reais
// da Allianz/APRIL/Médis nem de nenhuma seguradora parceira.

const ZONA_MULTIPLICADOR_PADRAO = {
  Lagos: 1.0,
  Portimão: 1.0,
  Faro: 1.05,
  Albufeira: 1.05,
  Loulé: 1.05,
  Tavira: 1.0,
  Lisboa: 1.15,
  Porto: 1.1,
  Outro: 0.95,
};

const REGIME_MULTIPLICADOR = {
  individual: 1.0,
  grupo: 0.85, // PLACEHOLDER — desconto indicativo para regime de grupo
};

export const PRICING_RULES = {
  saude: {
    faixas_etarias: [
      { min: 0, max: 17, faixa_min_eur: 18, faixa_max_eur: 30 },
      { min: 18, max: 30, faixa_min_eur: 25, faixa_max_eur: 40 },
      { min: 31, max: 45, faixa_min_eur: 35, faixa_max_eur: 60 },
      { min: 46, max: 60, faixa_min_eur: 55, faixa_max_eur: 95 },
      { min: 61, max: 75, faixa_min_eur: 90, faixa_max_eur: 160 },
      { min: 76, max: 120, faixa_min_eur: 140, faixa_max_eur: 240 },
    ],
    multiplicador_zona: ZONA_MULTIPLICADOR_PADRAO,
  },
  vida: {
    faixas_etarias: [
      { min: 0, max: 30, faixa_min_eur: 10, faixa_max_eur: 20 },
      { min: 31, max: 45, faixa_min_eur: 15, faixa_max_eur: 35 },
      { min: 46, max: 60, faixa_min_eur: 30, faixa_max_eur: 65 },
      { min: 61, max: 75, faixa_min_eur: 60, faixa_max_eur: 130 },
      { min: 76, max: 120, faixa_min_eur: 110, faixa_max_eur: 220 },
    ],
    multiplicador_zona: ZONA_MULTIPLICADOR_PADRAO,
  },
  auto: {
    // Faixas etárias refletem risco (condutores jovens/muito seniores tendem a pagar mais).
    faixas_etarias: [
      { min: 18, max: 24, faixa_min_eur: 45, faixa_max_eur: 90 },
      { min: 25, max: 35, faixa_min_eur: 30, faixa_max_eur: 55 },
      { min: 36, max: 60, faixa_min_eur: 25, faixa_max_eur: 45 },
      { min: 61, max: 120, faixa_min_eur: 35, faixa_max_eur: 65 },
    ],
    multiplicador_zona: ZONA_MULTIPLICADOR_PADRAO,
  },
  casa: {
    // Seguro habitação depende sobretudo da localização/tipologia, não da idade do tomador.
    faixas_etarias: [{ min: 0, max: 120, faixa_min_eur: 15, faixa_max_eur: 35 }],
    multiplicador_zona: ZONA_MULTIPLICADOR_PADRAO,
  },
  condominio: {
    faixas_etarias: [{ min: 0, max: 120, faixa_min_eur: 8, faixa_max_eur: 25 }],
    multiplicador_zona: ZONA_MULTIPLICADOR_PADRAO,
  },
};

const DISCLAIMERS = {
  saude: {
    pt: "Esta é uma estimativa puramente indicativa. O valor real do prémio será calculado após análise detalhada do risco pela seguradora, incluindo questionário de saúde.",
    en: "This is a purely indicative estimate. The actual premium will be calculated after a detailed risk assessment by the insurer, including a health questionnaire.",
  },
  vida: {
    pt: "Esta é uma estimativa puramente indicativa. O valor real do prémio depende do capital seguro pretendido e será calculado após análise de risco e questionário de saúde pela seguradora.",
    en: "This is a purely indicative estimate. The actual premium depends on the sum insured requested and will be calculated after a risk assessment and health questionnaire by the insurer.",
  },
  auto: {
    pt: "Esta é uma estimativa puramente indicativa. O valor real do prémio depende do veículo, histórico de condução e coberturas escolhidas, e será calculado pela seguradora.",
    en: "This is a purely indicative estimate. The actual premium depends on the vehicle, driving history and chosen coverage, and will be calculated by the insurer.",
  },
  casa: {
    pt: "Esta é uma estimativa puramente indicativa. O valor real do prémio depende da tipologia, valor patrimonial e coberturas do imóvel, e será calculado após análise pela seguradora.",
    en: "This is a purely indicative estimate. The actual premium depends on the property type, insured value and chosen coverage, and will be calculated after assessment by the insurer.",
  },
  condominio: {
    pt: "Esta é uma estimativa puramente indicativa. O valor real do prémio depende da tipologia do edifício e coberturas escolhidas, e será calculado após análise pela seguradora.",
    en: "This is a purely indicative estimate. The actual premium depends on the building type and chosen coverage, and will be calculated after assessment by the insurer.",
  },
};

function resolveZonaMultiplicador(tabela, cidade) {
  if (!cidade) return tabela.Outro;
  const normalizado = String(cidade).trim();
  const match = Object.keys(tabela).find(
    (key) => key.toLowerCase() === normalizado.toLowerCase()
  );
  return match ? tabela[match] : tabela.Outro;
}

function resolveFaixaEtaria(faixas, idade) {
  const idadeNum = Number(idade);
  const found = faixas.find((f) => idadeNum >= f.min && idadeNum <= f.max);
  if (found) return found;
  // Idade fora de todas as faixas definidas (ex: negativa ou muito acima) -> usa a faixa extrema mais próxima.
  return idadeNum < faixas[0].min ? faixas[0] : faixas[faixas.length - 1];
}

/**
 * Motor de regras determinístico para a tool `calcular_estimativa`.
 * Nunca é o modelo a inventar o valor — esta função é a única fonte do número.
 */
export function calcularEstimativa(input) {
  const { tipo_seguro, idade, cidade, regime = "individual" } = input;

  const regras = PRICING_RULES[tipo_seguro];
  if (!regras) {
    return { erro: `Tipo de seguro desconhecido: ${tipo_seguro}` };
  }

  const faixa = resolveFaixaEtaria(regras.faixas_etarias, idade);
  const zonaMultiplicador = resolveZonaMultiplicador(regras.multiplicador_zona, cidade);
  const regimeMultiplicador = REGIME_MULTIPLICADOR[regime] ?? 1.0;

  const fatorTotal = zonaMultiplicador * regimeMultiplicador;
  const faixa_min_eur = Math.round(faixa.faixa_min_eur * fatorTotal);
  const faixa_max_eur = Math.round(faixa.faixa_max_eur * fatorTotal);

  const disclaimer = DISCLAIMERS[tipo_seguro];

  return {
    tipo_seguro,
    faixa_min_eur,
    faixa_max_eur,
    moeda: "EUR",
    periodicidade: "mensal",
    disclaimer_pt: disclaimer.pt,
    disclaimer_en: disclaimer.en,
  };
}
