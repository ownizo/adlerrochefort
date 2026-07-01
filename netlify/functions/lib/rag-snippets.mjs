// Excertos curados manualmente a partir dos artigos publicados no site (sem vector DB).
// Cada tópico agrupa um pequeno conjunto de factos extraídos dos artigos reais listados em
// `fonte`, para o modelo responder com base em conteúdo verificado em vez de inventar.
// Se o volume de artigos crescer muito, considerar Supabase pgvector no futuro.

export const RAG_SNIPPETS = {
  pt: {
    modelos_rede_reembolso: {
      fonte: "/blog/allianz-april-medis-seguro-saude-portugal-2026/",
      texto:
        "Em Portugal há dois modelos de seguro de saúde: rede convencionada (o segurado vai a um " +
        "hospital/clínica da rede e paga só um copagamento, tipicamente entre 5€ e 25€, a seguradora " +
        "acerta o resto diretamente) e reembolso (o segurado escolhe livremente médico/hospital, paga " +
        "tudo e a seguradora reembolsa entre 60% e 90%, até ao limite anual). A maioria dos planos " +
        "combina os dois modelos, com ênfase diferente consoante a seguradora.",
    },
    allianz: {
      fonte: "/blog/allianz-april-medis-seguro-saude-portugal-2026/",
      texto:
        "Allianz: forte em cobertura internacional e planos premium para profissionais liberais e " +
        "quadros superiores. Pontos fortes: rede hospitalar alargada em Portugal, boa personalização de " +
        "coberturas. A considerar: planos de entrada com copagamentos mais elevados. Ideal para quem " +
        "viaja com frequência ou valoriza cobertura internacional.",
    },
    april: {
      fonte: "/blog/allianz-april-medis-seguro-saude-portugal-2026/",
      texto:
        "APRIL: seguradora de origem francesa especializada em expatriados e residentes estrangeiros. " +
        "Apólices disponíveis em inglês e francês, processo de adesão simplificado para estrangeiros. " +
        "A considerar: rede convencionada em Portugal mais limitada do que Médis ou Allianz. Ideal para " +
        "expatriados e nómadas digitais.",
    },
    medis: {
      fonte: "/blog/allianz-april-medis-seguro-saude-portugal-2026/",
      texto:
        "Médis (grupo Ageas): maior rede convencionada do mercado português, com acesso direto a " +
        "milhares de prestadores sem adiantamento de despesas. A considerar: cobertura internacional " +
        "limitada, apólice disponível apenas em português. Ideal para famílias portuguesas que " +
        "privilegiam acesso direto sem adiantamento.",
    },
    comparacao_precos: {
      fonte: "/blog/allianz-april-medis-seguro-saude-portugal-2026/",
      texto:
        "Valores de referência 2026 para um plano intermédio (capital ~75.000€, copagamentos standard): " +
        "adulto de 30 anos, 35€–55€/mês; adulto de 45 anos, 55€–85€/mês; adulto de 60 anos, " +
        "110€–180€/mês; família (casal + 2 filhos), 140€–220€/mês. Períodos de carência típicos: 30 a " +
        "90 dias para consultas, 180 a 365 dias para cirurgias programadas.",
    },
    erros_comuns: {
      fonte: "/blog/allianz-april-medis-seguro-saude-portugal-2026/",
      texto:
        "Erros mais comuns ao escolher seguro de saúde: escolher só pelo preço (copagamentos altos e " +
        "capitais insuficientes custam mais a longo prazo); ignorar períodos de carência; não declarar " +
        "condições pré-existentes no questionário (pode anular a apólice); não verificar se o " +
        "hospital/médico preferido está na rede convencionada.",
    },
    sns_vs_privado: {
      fonte: "/blog/seguro-saude-portugal/ e /blog/seguro-saude-expatriados-portugal/",
      texto:
        "O SNS é universal mas tem listas de espera de meses para consultas de especialidade e mais de " +
        "12 meses para cirurgias programadas em muitos casos, cobertura limitada em dentária, " +
        "oftalmologia, psicologia e fisioterapia, e funciona predominantemente em português. O seguro " +
        "privado não substitui o SNS, complementa-o: muitas famílias usam o SNS para urgências e o " +
        "privado para consultas, exames e cirurgias programadas com acesso mais rápido.",
    },
    tipos_seguro: {
      fonte: "/blog/seguro-saude-portugal/",
      texto:
        "Tipos de seguro de saúde em Portugal: individual (uma pessoa), familiar (tomador + cônjuge + " +
        "filhos dependentes numa única apólice, geralmente mais vantajoso que apólices separadas) e de " +
        "grupo/empresarial (contratado pela empresa para colaboradores, coberturas mais amplas a custo " +
        "por pessoa inferior ao individual).",
    },
    coberturas: {
      fonte: "/blog/seguro-saude-portugal/",
      texto:
        "Coberturas a verificar antes de contratar: internamento hospitalar (cirurgias, cuidados " +
        "intensivos, honorários médicos, com limites anuais e por episódio), consultas e exames " +
        "ambulatórios, estomatologia/medicina dentária, oftalmologia, maternidade e parto (carência " +
        "típica de 10 a 12 meses) e medicina no estrangeiro para quem viaja com frequência.",
    },
    parcerias_expat: {
      fonte: "/blog/seguro-saude-expatriados-portugal/",
      texto:
        "Para expatriados, os vistos D7, Golden Visa e de nómada digital exigem prova de seguro de " +
        "saúde como condição de aprovação da residência. A Adler & Rochefort trabalha com Allianz, " +
        "Medis e AdvanceCare (mais de 18.000 prestadores) para este perfil, com apólices e atendimento " +
        "adaptados a quem chega do estrangeiro.",
    },
  },
  en: {
    modelos_rede_reembolso: {
      fonte: "/en/blog/allianz-april-medis-health-insurance-portugal-2026/",
      texto:
        "Two models dominate health insurance in Portugal: in-network (you visit a clinic/hospital " +
        "with a direct agreement with your insurer, pay a small copayment of roughly €5–€25, and the " +
        "insurer settles the rest directly) and reimbursement (you choose any provider, pay upfront, " +
        "and claim back 60%–90% up to your annual limit). Many policies combine both models.",
    },
    allianz: {
      fonte: "/en/blog/allianz-april-medis-health-insurance-portugal-2026/",
      texto:
        "Allianz: strong international coverage on premium plans, extensive network in Portugal " +
        "(CUF, Luz Saúde, Lusíadas), dental/optical from mid-tier plans up, English documentation on " +
        "premium plans. Considerations: higher premiums at entry level, waiting periods of 30–90 days " +
        "for consultations and 180–365 days for scheduled surgeries. Best for professionals with " +
        "international exposure.",
    },
    april: {
      fonte: "/en/blog/allianz-april-medis-health-insurance-portugal-2026/",
      texto:
        "APRIL: French-origin insurer specialised in expats and international residents. Policies in " +
        "English and French, simplified documentation, reimbursement model as standard, shorter " +
        "waiting periods (30–60 days consultations, 180 days surgery). Considerations: smaller " +
        "in-network in Portugal, lower annual limits on entry plans (€50,000–€100,000).",
    },
    medis: {
      fonte: "/en/blog/allianz-april-medis-health-insurance-portugal-2026/",
      texto:
        "Médis (Ageas Portugal): largest in-network in Portugal, low copayments (€5–€15 for routine " +
        "consultations), strong dental/optical and family plans. Considerations: limited international " +
        "coverage, no English-language documentation, longer waiting periods (60–90 days consultations, " +
        "270–365 days scheduled surgery), requires fuller Portuguese documentation.",
    },
    comparacao_precos: {
      fonte:
        "/en/blog/allianz-april-medis-health-insurance-portugal-2026/ e /en/blog/health-insurance-cost-portugal-2026/",
      texto:
        "Typical 2026 monthly premiums for an intermediate plan (~€75,000 annual limit): age 30, " +
        "€35–€55; age 45, €55–€85; age 60, €110–€180; family with two children, €140–€220. Price bands " +
        "rise noticeably from age 45 onward, and from age 70 many standard plans restrict new entries, " +
        "so broker-led placement matters more than headline price.",
    },
    erros_comuns: {
      fonte: "/en/blog/allianz-april-medis-health-insurance-portugal-2026/",
      texto:
        "Common mistakes: choosing by price alone (cheapest plans often have highest copayments and " +
        "lowest annual limits), ignoring waiting periods for services you'll likely need, not " +
        "declaring pre-existing conditions (can trigger claim denial or cancellation), and not " +
        "reviewing the policy annually as needs and the market change.",
    },
    sns_vs_privado: {
      fonte: "/en/blog/sns-vs-private-insurance-expats-portugal/ e /en/blog/health-insurance-expats-portugal/",
      texto:
        "SNS (public healthcare) is available to legal residents but has long specialist waits, " +
        "surgery waiting lists that can exceed 12 months, gaps in dental/ophthalmology/psychology " +
        "care, and operates mostly in Portuguese. Private insurance does not replace SNS, it " +
        "complements it — most expats use SNS for emergencies and private cover for speed, choice of " +
        "provider and English-language service.",
    },
    visto_d7: {
      fonte: "/en/blog/d7-visa-health-insurance-valid-proof/",
      texto:
        "For the D7 visa, valid health insurance proof should show: full name of each insured person " +
        "exactly as in the application, policy start/end dates, coverage in Portugal, medical/hospital " +
        "benefits (not just accident cover), and the insurer name plus policy/certificate number. " +
        "Travel insurance can sometimes work for the initial visa stage, but a weak certificate can " +
        "delay the process even when the underlying policy is valid.",
    },
    condicoes_pre_existentes: {
      fonte: "/en/blog/private-health-insurance-pre-existing-condition-portugal/",
      texto:
        "A pre-existing condition is any illness, injury, diagnosis or treatment that existed before " +
        "the policy starts, even if stable. Insurers may accept the policy excluding that condition, " +
        "apply a waiting period, request medical reports, charge a higher premium, or in serious cases " +
        "decline the application. Failing to disclose known conditions can lead to claim refusal or " +
        "policy cancellation later.",
    },
    reforma_65: {
      fonte: "/en/blog/retiring-algarve-health-cover-65-plus/",
      texto:
        "After 60–65, many standard health plans become more selective with new applicants — some " +
        "insurers still accept older clients but with medical underwriting, exclusions, higher premiums " +
        "or reduced options. Retirees should prioritise realistic hospitalisation limits, access to " +
        "private specialists in the Algarve, clear pre-existing condition rules and renewability, over " +
        "a cheap outpatient-only plan.",
    },
    parcerias_expat: {
      fonte: "/en/blog/health-insurance-expats-portugal/",
      texto:
        "The D7 visa, Golden Visa and digital nomad visa all require proof of health insurance as a " +
        "condition of residency approval. Adler & Rochefort works with Allianz, Medis and AdvanceCare " +
        "(18,000+ providers) for expat profiles, with English-language support throughout.",
    },
  },
};

const DEFAULT_TOPICS = [
  "modelos_rede_reembolso",
  "allianz",
  "april",
  "medis",
  "comparacao_precos",
];

/**
 * Devolve um bloco de texto com os excertos relevantes para os tópicos pedidos,
 * para injectar no contexto da chamada à API (RAG sem vector DB).
 */
export function getRagContext(lang, topics) {
  const idioma = lang === "en" ? "en" : "pt";
  const dicionario = RAG_SNIPPETS[idioma];
  const listaTopicos =
    Array.isArray(topics) && topics.length > 0 ? topics : DEFAULT_TOPICS;

  const blocos = listaTopicos
    .filter((topico) => dicionario[topico])
    .map((topico) => {
      const { fonte, texto } = dicionario[topico];
      return `[${topico}] (fonte: ${fonte})\n${texto}`;
    });

  return blocos.join("\n\n");
}
