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
    auto_geral: {
      fonte: "/blog/seguro-automovel-guia-completo/ e /blog/seguro-individual-automovel/",
      texto:
        "O seguro automóvel é obrigatório em Portugal desde 1980 (capitais mínimos 2026: 6.450.000€ " +
        "danos corporais, 1.300.000€ danos materiais). Três níveis: Responsabilidade Civil (mínimo " +
        "legal, só cobre terceiros), Terceiros Completo (+ incêndio, furto, fenómenos da natureza, " +
        "assistência — melhor relação custo-benefício para veículos com 4-10 anos) e Contra Todos os " +
        "Riscos (inclui danos próprios, recomendado para veículos novos ou financiados). Franquia mais " +
        "alta reduz o prémio; agrupar apólices na mesma seguradora pode dar 10-20% de desconto.",
    },
    auto_expatriados: {
      fonte: "/blog/seguro-auto-expatriados/",
      texto:
        "Carta de condução UE/EEE é válida sem troca; carta do Reino Unido é reconhecida 90 dias, " +
        "depois deve trocar-se no IMT em 2 anos; outras cartas até 185 dias. Documentos necessários: " +
        "NIF, carta de condução (traduzida se necessário), DUA, comprovativo de morada e carta de " +
        "experiência de sinistralidade da seguradora anterior (pedir ANTES de cancelar a apólice de " +
        "origem — pode transferir 20-40% de bónus). Preços indicativos: RC 350€-700€/ano, Terceiros " +
        "Completo 500€-1.100€/ano, Contra Todos os Riscos 800€-2.000€/ano para um expatriado sem bónus local.",
    },
    auto_luxo: {
      fonte: "/en/blog/luxury-car-insurance-portugal/",
      texto:
        "Seguros automóvel standard têm tetos de capital seguro demasiado baixos para supercarros, " +
        "clássicos ou edições limitadas, e pagam pelo valor de mercado depreciado, não pelo valor real " +
        "de substituição. Um produto especializado para viaturas de luxo/coleção oferece capital " +
        "individualizado sem teto máximo, rede de reparação de marca, cobertura para eventos/exposições, " +
        "e modelo pay-per-use (prémio calculado pela utilização real, não por uma assunção anual fixa).",
    },
    frota: {
      fonte: "/blog/seguro-frota-erros-comuns/",
      texto:
        "5 erros comuns em seguros de frota: não segmentar veículos por perfil de risco; manter " +
        "coberturas de danos próprios em veículos com mais de 5 anos (poupança de 15-20% ao ajustar); " +
        "não usar o histórico de sinistralidade como argumento de negociação; não incluir veículo de " +
        "substituição (imobilização custa 200€-500€/dia em produtividade); renovar automaticamente sem " +
        "consultar o mercado.",
    },
    tvde: {
      fonte: "/blog/seguro-tvde-portugal/",
      texto:
        "Regulado pela Lei n.º 45/2018. Exige seguro de responsabilidade civil automóvel que cubra " +
        "expressamente uso profissional TVDE (um seguro pessoal comum não cobre e a seguradora pode " +
        "recusar o sinistro) mais seguro de acidentes pessoais para passageiros. Preços indicativos: RC " +
        "com cobertura TVDE 1.200€-2.500€/ano; Contra Todos os Riscos com TVDE 2.500€-4.500€/ano; " +
        "acidentes pessoais de passageiros 150€-400€/ano. Erro mais grave: usar seguro pessoal na " +
        "atividade TVDE.",
    },
    casa_geral: {
      fonte: "/blog/seguro-habitacao-proteger-casa/ e /blog/multirriscos-habitacao/",
      texto:
        "Seguro de incêndio é o único obrigatório por lei (art. 1429º do Código Civil) para frações em " +
        "propriedade horizontal e só cobre incêndio, raio e explosão na estrutura — não cobre o recheio " +
        "nem danos por água (a causa mais frequente de sinistros em habitação em Portugal). Um seguro " +
        "multirriscos completo acrescenta danos por água, fenómenos atmosféricos, furto, responsabilidade " +
        "civil e assistência ao lar 24h. A regra proporcional é a maior armadilha: se o capital segurado " +
        "representa só 50% do valor real, a seguradora paga só 50% do prejuízo, mesmo em sinistros " +
        "parciais. Preço indicativo: 120€-300€/ano para um T2/T3 urbano.",
    },
    casa_legalizacao: {
      fonte: "/blog/seguro-habitacao-legalizacao/",
      texto:
        "Obras sem licença (marquises fechadas, anexos convertidos, pisos acrescentados, piscinas sem " +
        "licença) podem anular ou reduzir a cobertura do seguro de habitação: a seguradora pode recusar " +
        "indemnização se o sinistro estiver diretamente ligado à construção ilegal, aplicar a regra " +
        "proporcional se a área real é maior do que a declarada, ou excluir simplesmente as áreas não " +
        "declaradas. A solução é legalizar as obras (projeto, taxas camarárias, eventual coima) e " +
        "atualizar a caderneta predial antes de renovar o seguro.",
    },
    casa_valores_desatualizados: {
      fonte: "/blog/valores-segurados-desatualizados/ e /blog/seguro-condominio-capitais-desatualizados/",
      texto:
        "O infrasseguro acontece quando o capital declarado fica abaixo do valor real dos bens: a " +
        "seguradora aplica então a regra proporcional e paga só uma fração do prejuízo mesmo que o " +
        "sinistro seja inferior ao capital da apólice. É um erro silencioso — a apólice renova " +
        "automaticamente e ninguém revê os valores enquanto o negócio ou a casa crescem. Nas revisões " +
        "que a Adler & Rochefort faz, identificaram-se situações de infrasseguro em 34% dos casos em 2025.",
    },
    casa_custo_algarve: {
      fonte: "/en/blog/home-insurance-cost-algarve-price-drivers/",
      texto:
        "No Algarve, o preço do seguro de habitação depende sobretudo do valor de reconstrução (não do " +
        "valor de mercado), da localização (exposição a cheias, distância dos bombeiros), do uso " +
        "(residência permanente vs. segunda habitação vs. alojamento local) e de ativos exteriores " +
        "(piscina, painéis solares, jardins). Casas de férias ficam frequentemente vazias durante longos " +
        "períodos — algumas apólices têm condições especiais para desocupação prolongada que a apólice " +
        "standard pode não cobrir.",
    },
    casa_luxo: {
      fonte: "/en/blog/luxury-home-insurance-portugal/",
      texto:
        "Seguros standard funcionam por \"riscos nomeados\" (só cobrem o que está listado); uma apólice " +
        "\"all-risks\" para imóveis de luxo cobre qualquer dano acidental exceto o que estiver " +
        "expressamente excluído, com capital reforçado (mínimo tipicamente 150.000€) e sem aplicar a " +
        "regra proporcional da forma tradicional. Inclui cláusulas próprias para arte, joias, adegas, " +
        "jardins, piscinas e anexos, e opções específicas para casas de férias desocupadas parte do ano.",
    },
    casa_segunda_habitacao: {
      fonte: "/en/blog/second-home-rent-out-holiday-let-standard-home-cover/",
      texto:
        "Uma segunda habitação arrendada a hóspedes é um risco diferente de uma casa de uso privado: " +
        "mais pessoas a usar a casa, chaves/códigos de acesso, maior risco de danos e de responsabilidade " +
        "civil por lesões a hóspedes, e perda de rendimento de arrendamento se a casa ficar inutilizável. " +
        "Um seguro de habitação standard declarado como \"uso privado\" pode recusar um sinistro " +
        "envolvendo hóspedes — é essencial declarar o uso de arrendamento turístico à seguradora.",
    },
    condominio_obrigatorio: {
      fonte: "/blog/seguro-condominio-obrigatorio-guia/",
      texto:
        "O único seguro de condomínio obrigatório por lei (art. 1429º do Código Civil) é o de incêndio, " +
        "cobrindo frações e partes comuns. Não cobre danos por água, tempestade, sismo, danos elétricos " +
        "nem responsabilidade civil das partes comuns — para isso é preciso um multirriscos condomínio. " +
        "Pode ser coletivo (uma apólice para todo o edifício, gerida pelo administrador) ou individual " +
        "(cada condómino segura a sua fração); o coletivo é normalmente mais simples e evita lacunas.",
    },
    condominio_conteudos: {
      fonte: "/en/blog/condominium-insurance-doesnt-cover-contents/",
      texto:
        "O seguro do condomínio protege as partes comuns e a estrutura do edifício — não o recheio do " +
        "apartamento, benfeitorias interiores, responsabilidade civil privada do condómino, alojamento " +
        "alternativo ou perda de renda. Após danos por água, furto ou incêndio, o condómino descobre " +
        "frequentemente que a apólice coletiva não cobre os seus prejuízos pessoais — precisa de seguro " +
        "de recheio e responsabilidade civil próprios.",
    },
    condominio_capitais_desatualizados: {
      fonte: "/blog/seguro-condominio-capitais-desatualizados/",
      texto:
        "Quando o capital seguro do edifício é inferior ao custo real de reconstrução, aplica-se a " +
        "regra proporcional: um edifício segurado a 50% do valor real recebe apenas 50% de qualquer " +
        "indemnização, mesmo em sinistros parciais. A causa mais comum é o capital ficar congelado " +
        "durante anos enquanto os custos de construção sobem. É a lacuna mais cara e mais fácil de " +
        "corrigir numa auditoria ao seguro do condomínio.",
    },
    condominio_administradores: {
      fonte: "/blog/obrigacoes-administrador-condominio-seguro/",
      texto:
        "O administrador de condomínio deve fixar anualmente o capital seguro do edifício e submetê-lo " +
        "à assembleia; se não atualizar este valor face à inflação da construção, o edifício fica " +
        "subsegurado e o administrador expõe-se a questionamento dos condóminos em caso de sinistro. " +
        "Boas práticas: rever o capital todos os anos, confirmar coberturas facultativas relevantes " +
        "(sísmico no Algarve, danos por água em edifícios antigos) e documentar as decisões tomadas.",
    },
    condominio_sismo: {
      fonte: "/en/blog/earthquake-cover-algarve-buildings/",
      texto:
        "O Algarve é uma das regiões com maior exposição sísmica em Portugal (o terramoto de 1755 teve " +
        "origem ao largo, a sudoeste). A lei só exige seguro de incêndio para condomínios — a cobertura " +
        "sísmica é normalmente uma extensão opcional, frequentemente omitida para manter a quota baixa. " +
        "Num edifício subsegurado, mesmo eventos cobertos pagam menos do que o necessário para " +
        "reconstruir devido à regra proporcional.",
    },
    alojamento_local: {
      fonte:
        "/blog/seguro-alojamento-local-decreto-lei-76-2024/, /blog/quanto-custa-seguro-alojamento-local/ e /blog/seguro-rc-multirriscos-alojamento-local/",
      texto:
        "O Alojamento Local exige por lei responsabilidade civil específica para a atividade (capital " +
        "mínimo de referência 75.000€ por sinistro), mantida mesmo após o Decreto-Lei n.º 76/2024 que " +
        "trouxe mais estabilidade ao registo. O seguro do condomínio ou um seguro de habitação normal " +
        "NÃO cobrem a atividade de AL. RC e multirriscos são coisas diferentes e complementares: a RC " +
        "responde por danos causados a hóspedes/terceiros, o multirriscos protege o imóvel e recheio do " +
        "próprio titular. Preço indicativo: 120€-400€/ano para um apartamento/moradia pequena a média.",
    },
    hotelaria_coberturas: {
      fonte:
        "/blog/seguro-multiriscos-hotel-portugal/, /blog/hotel-fenomenos-climaticos-extremos/ e /blog/comparar-propostas-seguro-hotel-erros-comuns/",
      texto:
        "Um multirriscos de hotel bem desenhado cobre edifício e recheio ao valor real de reconstrução, " +
        "danos por água, fenómenos da natureza (tempestade, granizo, inundação — atenção a sublimites e " +
        "franquias), quebra de máquinas, responsabilidade civil de exploração e perda de exploração com " +
        "período de indemnização suficiente (reconstruir um hotel pode levar mais de 12 meses). Ao " +
        "comparar propostas, nunca comparar só o prémio: alinhar sempre capitais, franquias e exclusões " +
        "antes de decidir.",
    },
    hotelaria_obrigatorios_rc: {
      fonte:
        "/blog/seguros-obrigatorios-hotelaria-turismo/, /blog/rc-exploracao-unidades-turisticas/ e /blog/seguro-acidentes-pessoais-trabalhadores-hotelaria/",
      texto:
        "Empreendimentos turísticos precisam de responsabilidade civil obrigatória, seguro de acidentes " +
        "de trabalho e seguro de incêndio. A RC de Exploração cobre danos a hóspedes (quedas, " +
        "intoxicações, acidentes em piscina/spa) — muitas unidades têm capitais insuficientes face ao " +
        "risco real. O seguro de acidentes de trabalho é obrigatório para todos os trabalhadores " +
        "(incluindo sazonais); o seguro de acidentes pessoais é um complemento facultativo mas valioso " +
        "para retenção de equipas num setor de alta rotatividade.",
    },
    hotelaria_rural_boutique: {
      fonte: "/blog/seguros-turismo-rural-hoteis-boutique/",
      texto:
        "Turismo rural e hotéis boutique em edifícios históricos precisam de capital de reconstrução " +
        "ajustado a técnicas e materiais tradicionais (não ao valor de construção moderna), cláusulas " +
        "específicas para arte/antiguidades/adegas, e cobertura de responsabilidade civil para " +
        "atividades como passeios a cavalo, provas de vinho ou piscinas naturais — riscos que uma " +
        "apólice de hotel convencional normalmente não contempla.",
    },
    hotelaria_experiencia: {
      fonte: "/blog/20-anos-turismo-seguros-hotelaria/",
      texto:
        "O fundador da Adler & Rochefort, Hugo Gonçalves, tem quase 20 anos de experiência no setor do " +
        "turismo global, incluindo na Hotelbeds (HBX Group), um dos maiores distribuidores hoteleiros do " +
        "mundo. Essa experiência operacional direta — e não apenas conhecimento de produtos de seguros — " +
        "permite identificar riscos que mediadores generalistas costumam ignorar em hotelaria, turismo e " +
        "alojamento local.",
    },
    restauracao: {
      fonte: "/blog/seguros-bares-restaurantes-sinistros/",
      texto:
        "Sinistros mais comuns em bares/restaurantes: incêndio na cozinha, danos por água, avaria de " +
        "equipamento de frio (perda de stock alimentar), responsabilidade civil por intoxicação " +
        "alimentar, acidentes com clientes, furto e perda de receita por encerramento temporário. " +
        "Coberturas essenciais: multirriscos do estabelecimento, RC de exploração e de produtos, avaria " +
        "de máquinas, deterioração de mercadorias e perda de exploração. Participar o sinistro à " +
        "seguradora nas primeiras 24-48h acelera muito o processo (prazo legal: 8 dias úteis).",
    },
    rc_profissional: {
      fonte: "/blog/responsabilidade-civil-profissional/",
      texto:
        "A Responsabilidade Civil Profissional cobre danos a terceiros por erros, omissões ou " +
        "negligência no exercício profissional (diferente da RC geral, que cobre danos físicos " +
        "acidentais). Obrigatória por lei para advogados, médicos, engenheiros, arquitetos, " +
        "contabilistas e mediadores imobiliários, entre outros — mas qualquer empresa de consultoria, " +
        "tecnologia ou gestão deveria ter uma apólice adequada ao volume de negócio, com cobertura " +
        "retroativa e prazo de reporte após cessação do contrato.",
    },
    rc_terapeuticas: {
      fonte: "/blog/seguro-responsabilidade-civil-terapeuticas-nao-convencionais/",
      texto:
        "A Lei n.º 71/2013 exige seguro de responsabilidade civil profissional para as seis " +
        "terapêuticas não convencionais reconhecidas (acupunctura, fitoterapia, homeopatia, medicina " +
        "tradicional chinesa, naturopatia, osteopatia), condição para a cédula profissional da ACSS. " +
        "Capitais recomendados: mínimo 50.000€ para profissionais individuais, 100.000€-250.000€ para " +
        "clínicas. Custo indicativo: 150€-500€/ano. O yoga não está formalmente na lista mas instrutores " +
        "enfrentam riscos semelhantes de responsabilidade civil.",
    },
    ciberseguranca: {
      fonte: "/blog/seguro-ciberseguranca-empresas-portugal/ e /blog/ransomware-portugal-riscos-ciberneticos/",
      texto:
        "Portugal registou um aumento de 67% em ataques de ransomware a empresas em 2025, com foco em " +
        "PME de 5-50 milhões de euros de faturação. Um bom ciberseguro cobre resposta a incidente 24/7, " +
        "recuperação de dados, perda de receita por interrupção de sistemas, RC por fuga de dados, " +
        "extorsão cibernética e custos regulatórios (CNPD/RGPD). Atenção: o pagamento do próprio resgate " +
        "normalmente não está coberto, e infraestruturas antigas sem suporte costumam ser excluídas.",
    },
    empresas_obrigatorios: {
      fonte: "/blog/seguros-obrigatorios-empresas-portugal/",
      texto:
        "Seguros obrigatórios transversais para empresas: acidentes de trabalho (qualquer empresa com " +
        "trabalhadores), automóvel RC (veículos próprios ou em leasing) e incêndio/multirriscos (frações " +
        "em propriedade horizontal). Há também mais de uma centena de seguros específicos por setor " +
        "(construção, mediação imobiliária, profissões liberais, agências de viagens, alojamento local, " +
        "transporte de mercadorias). Riscos como ciberataques, avaria de máquinas ou responsabilidade de " +
        "administradores (D&O) não são cobertos pelo mínimo legal, mas são das maiores ameaças reais.",
    },
    empresas_distribuicao: {
      fonte: "/blog/seguros-empresas-distribuicao/",
      texto:
        "Empresas de distribuição acumulam riscos em várias categorias: mercadoria em trânsito, frota, " +
        "armazéns, stock armazenado (próprio e de terceiros) e responsabilidade civil por danos ao " +
        "consumidor final. Um programa adequado integra seguro de transporte (inland transit), seguro de " +
        "frota, multirriscos industrial e perda de exploração. Erro comum: apólices genéricas que " +
        "excluem mercadoria de terceiros em depósito ou não acompanham variações sazonais do inventário.",
    },
    empresas_revisao_apolice: {
      fonte: "/blog/revisao-apolice-empresarial/",
      texto:
        "58% das empresas nunca reviram a apólice depois de a assinar, e 1/3 dos sinistros resulta em " +
        "pagamento parcial ou recusado por essa razão. Num caso real, uma empresa de distribuição com " +
        "seguro desde 2016 (nunca atualizado) recebeu apenas 50.000€ de indemnização num sinistro de " +
        "230.000€ porque o negócio tinha crescido 3x sem que o capital fosse revisto. Uma revisão anual " +
        "gratuita verifica valores segurados, novos riscos (ciber, ambiental, RC profissional) e " +
        "coberturas desnecessárias.",
    },
    do_administradores: {
      fonte: "/blog/responsabilidade-administradores-seguro-do/",
      texto:
        "Em Portugal, administradores e gerentes respondem pessoalmente — com o próprio património — " +
        "por decisões de gestão que causem prejuízo à empresa, sócios, credores ou terceiros. O seguro " +
        "D&O (Directors & Officers) cobre custos de defesa jurídica e indemnizações mesmo quando a " +
        "reclamação é infundada, incluindo processos por insolvência com indícios de má gestão, " +
        "incumprimento fiscal ou reclamações de sócios minoritários. As PME são frequentemente as mais " +
        "expostas por terem administradores menos informados sobre este risco.",
    },
    obra_construcao: {
      fonte: "/blog/seguro-obra-construcao/",
      texto:
        "O seguro de obra e RC de construção é obrigatório para qualquer obra sujeita a licenciamento, " +
        "mas o mínimo legal cobre pouco: fica normalmente de fora danos à obra por fenómenos naturais, " +
        "roubo de materiais no estaleiro, RC cruzada entre empreiteiro e subempreiteiros, e erro de " +
        "projeto/cálculo estrutural. A apólice deve proteger todas as partes envolvidas (dono de obra, " +
        "empreiteiro, subempreiteiros, projetistas) e incluir cobertura para o período de manutenção " +
        "pós-obra.",
    },
    vida_hipoteca: {
      fonte: "/en/blog/mortgage-life-insurance-foreign-buyers-portugal/",
      texto:
        "Quando um banco português aprova um crédito habitação, propõe normalmente um seguro de vida " +
        "associado — mas este seguro pode ser comparado e contratado fora do banco, muitas vezes com " +
        "poupanças de 30% a 50% no prémio. Pontos a verificar antes de mudar de seguradora: o que " +
        "acontece ao spread do crédito se mudar a apólice, como está definida a invalidez, se o prémio " +
        "reduz com o capital em dívida, e se são exigidos exames médicos.",
    },
    investimento_luxo: {
      fonte: "/blog/investimento-americano-luxo-portugal/",
      texto:
        "Investidores americanos em imobiliário de luxo, turismo premium e estruturas corporate " +
        "(holdings, SPV, fundos) em Portugal enfrentam riscos específicos: valores segurados " +
        "desatualizados, apólices mal traduzidas e falta de articulação entre seguros do imóvel, da " +
        "operação e da holding. A Adler & Rochefort estrutura multirriscos para imóveis de prestígio " +
        "(incluindo períodos de desocupação), seguros de operação turística e RC de administradores " +
        "(D&O) para as estruturas societárias, com gestão de sinistros em inglês.",
    },
    parcerias_imobiliarias: {
      fonte: "/blog/parcerias-imobiliarias-comissoes/",
      texto:
        "Cada transação imobiliária gera necessidade imediata de seguros: multirriscos habitação, " +
        "seguro de vida associado ao crédito, e seguro de condomínio. Numa parceria de referenciação, a " +
        "imobiliária apresenta o cliente à Adler & Rochefort e recebe uma comissão transparente e " +
        "recorrente por cada apólice contratada, sem necessitar de licenciamento próprio. O seguro de " +
        "vida crédito habitação contratado fora do banco pode gerar poupanças de 30-50% para o cliente.",
    },
    adler_pro: {
      fonte: "/blog/adler-pro-plataforma-saas/",
      texto:
        "Os Meus Seguros é a plataforma SaaS da Adler & Rochefort para gestão de seguros empresariais: " +
        "centraliza todas as apólices da empresa num só local, envia alertas automáticos de renovação, " +
        "digitaliza a gestão de sinistros e apresenta um dashboard analítico de custos e sinistralidade. " +
        "Não substitui o mediador — dá-lhe mais tempo para análise estratégica e negociação, em vez de " +
        "tarefas administrativas repetitivas.",
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
    auto_geral: {
      fonte: "/en/blog/car-insurance-complete-guide/ e /en/blog/individual-car-insurance/",
      texto:
        "Car insurance has been mandatory in Portugal since 1980 (2026 minimums: €6,450,000 bodily " +
        "injury, €1,300,000 material damage per claim). Three tiers: Third Party Only (legal minimum, " +
        "only covers others), Third Party Extended (+ fire, theft, natural events, roadside assistance " +
        "— best value for cars 3-8 years old) and Comprehensive/All Risks (adds own-damage cover, " +
        "recommended for new or financed vehicles). A higher deductible lowers the premium; bundling " +
        "policies with the same insurer can unlock 10-20% discounts.",
    },
    auto_expatriados: {
      fonte: "/en/blog/car-insurance-expatriates/ e /en/blog/car-insurance-cost-portugal/",
      texto:
        "EU/EEA licences are valid without exchange; UK licences are recognised for 90 days then must " +
        "be exchanged at the IMT within 2 years; other licences up to 185 days. Required documents: " +
        "NIF, driving licence (translated if needed), vehicle registration (DUA), proof of address, and " +
        "a claims experience letter from your previous insurer (request it BEFORE cancelling — it can " +
        "transfer 20-40% of your no-claims bonus). Indicative prices: TPL €350-700/year, third-party " +
        "extended €500-1,100/year, comprehensive €800-2,000/year for an expat without a local bonus.",
    },
    auto_luxo: {
      fonte: "/en/blog/luxury-car-insurance-portugal/",
      texto:
        "Standard motor policies cap insured value far below what a supercar, classic or limited-edition " +
        "vehicle is worth, and settle claims on depreciated market value rather than true replacement " +
        "cost. A specialist luxury/collector product offers individualised valuation with no maximum " +
        "capital ceiling, marque-approved repair networks, cover for exhibitions/events, and a " +
        "pay-per-use model priced on real annual mileage rather than a flat assumption.",
    },
    frota: {
      fonte: "/en/blog/fleet-insurance-common-mistakes/",
      texto:
        "5 common fleet insurance mistakes: not segmenting vehicles by risk profile; keeping own-damage " +
        "cover on vehicles over 5 years old (adjusting this can save 15-20% of the premium); not using " +
        "claims history as a negotiating tool; skipping replacement-vehicle cover (immobilisation costs " +
        "€200-500/day in lost productivity); and auto-renewing without checking the market.",
    },
    tvde: {
      fonte: "/en/blog/tvde-insurance-portugal/",
      texto:
        "Regulated by Law No. 45/2018. Requires motor third-party liability insurance that expressly " +
        "covers professional TVDE use (a standard personal policy does not cover it and the insurer can " +
        "refuse the claim) plus personal accident insurance for passengers. Indicative prices: TPL with " +
        "TVDE cover €1,200-2,500/year; comprehensive with TVDE cover €2,500-4,500/year; passenger " +
        "personal accident €150-400/year. The most serious mistake is using personal insurance for TVDE activity.",
    },
    casa_geral: {
      fonte: "/en/blog/home-insurance-protect-property/ e /en/blog/home-insurance-multi-risk/",
      texto:
        "Fire insurance is the only cover mandatory by law (Article 1429 of the Civil Code) for " +
        "condominium units, and it only covers fire, lightning and explosion to the structure — not " +
        "contents, and not water damage (the most frequent cause of home claims in Portugal). A full " +
        "multi-risk policy adds water damage, weather events, theft, civil liability and 24h home " +
        "assistance. The proportional rule is the biggest trap: if the insured value is only 50% of the " +
        "real value, the insurer pays only 50% of any loss, even a partial one. Indicative price: " +
        "€120-300/year for an urban 2-3 bedroom flat.",
    },
    casa_legalizacao: {
      fonte: "/en/blog/home-insurance-legalization/",
      texto:
        "Unlicensed works (enclosed balconies, converted annexes, added floors, unlicensed pools) can " +
        "void or reduce home insurance cover: the insurer can refuse compensation if the claim is " +
        "directly linked to the illegal construction, apply the proportional rule if the real area " +
        "exceeds what was declared, or simply exclude the undeclared areas. The fix is to legalise the " +
        "works (project, municipal fees, possible fine) and update the property's tax registry before " +
        "renewing the policy.",
    },
    casa_valores_desatualizados: {
      fonte: "/en/blog/outdated-insured-values/",
      texto:
        "Underinsurance happens when the declared value falls below the real value of the assets: the " +
        "insurer then applies the proportional rule and pays only a fraction of the loss even if the " +
        "claim is smaller than the insured capital. It is a silent error — the policy auto-renews and " +
        "nobody reviews the values as the business or home grows. In Adler & Rochefort's reviews, " +
        "underinsurance was found in 34% of cases in 2025.",
    },
    casa_custo_algarve: {
      fonte: "/en/blog/home-insurance-cost-algarve-price-drivers/",
      texto:
        "In the Algarve, home insurance pricing depends mainly on rebuild value (not market value), " +
        "location (flood exposure, distance from fire services), use (permanent residence vs second " +
        "home vs holiday let) and outdoor assets (pool, solar panels, gardens). Holiday homes often sit " +
        "empty for long stretches — some policies apply specific conditions for extended unoccupancy " +
        "that a standard policy may not cover.",
    },
    casa_luxo: {
      fonte: "/en/blog/luxury-home-insurance-portugal/",
      texto:
        "Standard policies are written on a \"named perils\" basis (only covering what's listed); an " +
        "all-risks policy for luxury homes covers any accidental damage except what is expressly " +
        "excluded, with reinforced capital (typically starting at €150,000) and without applying the " +
        "proportional rule the traditional way. It includes dedicated clauses for art, jewellery, wine " +
        "cellars, gardens, pools and annexes, plus specific options for holiday homes left empty part of the year.",
    },
    casa_segunda_habitacao: {
      fonte: "/en/blog/second-home-rent-out-holiday-let-standard-home-cover/",
      texto:
        "A second home rented to guests is a different risk from a privately-used home: more people " +
        "using the property, keys/access codes, higher damage and liability exposure from guest " +
        "injuries, and loss of rental income if the property becomes unusable. A standard home policy " +
        "declared as \"private use\" can refuse a claim involving guests — declaring rental use to the " +
        "insurer is essential.",
    },
    condominio_obrigatorio: {
      fonte: "/blog/seguro-condominio-obrigatorio-guia/ (PT)",
      texto:
        "The only condominium insurance mandatory by law (Article 1429 of the Civil Code) is fire " +
        "cover, for units and common areas. It does not cover water damage, storm, earthquake, " +
        "electrical damage or civil liability for common areas — for that you need a multi-risk " +
        "condominium policy. Cover can be collective (one policy for the whole building, managed by the " +
        "administrator) or individual (each owner insures their own unit); collective is usually simpler " +
        "and avoids gaps between units.",
    },
    condominio_conteudos: {
      fonte: "/en/blog/condominium-insurance-doesnt-cover-contents/",
      texto:
        "Condominium insurance protects the common parts and the building structure — not your " +
        "furniture, electronics, improvements inside your unit, private liability, alternative " +
        "accommodation or loss of rent. After water damage, theft, fire or a liability claim, owners " +
        "frequently discover the collective policy does not cover their personal losses — you need your " +
        "own contents and liability cover.",
    },
    condominio_capitais_desatualizados: {
      fonte: "/blog/seguro-condominio-capitais-desatualizados/ (PT)",
      texto:
        "When a building's insured capital is below its real rebuild cost, the proportional rule " +
        "applies: a building insured at 50% of its real value receives only 50% of any payout, even for " +
        "partial claims. The most common cause is capital being frozen for years while construction " +
        "costs rise. It is the most expensive and easiest-to-fix gap found in a condominium policy audit.",
    },
    condominio_administradores: {
      fonte: "/blog/obrigacoes-administrador-condominio-seguro/ (PT)",
      texto:
        "The condominium administrator must set the building's insured capital every year and submit " +
        "it to the owners' assembly; failing to update this value against construction-cost inflation " +
        "leaves the building underinsured and exposes the administrator to questions from owners after a " +
        "claim. Good practice: review the capital annually, confirm relevant optional covers (seismic in " +
        "the Algarve, water damage in older buildings) and document the decisions taken.",
    },
    condominio_sismo: {
      fonte: "/en/blog/earthquake-cover-algarve-buildings/",
      texto:
        "The Algarve is one of the most seismically exposed regions in Portugal (the 1755 earthquake " +
        "originated offshore to the south-west). The law only requires fire insurance for condominiums " +
        "— seismic cover is usually an optional extension, frequently left off to keep the shared quota " +
        "low. In an underinsured building, even covered events pay out less than needed to rebuild, " +
        "because of the proportional rule.",
    },
    alojamento_local: {
      fonte:
        "/blog/seguro-alojamento-local-decreto-lei-76-2024/, /blog/quanto-custa-seguro-alojamento-local/ e /blog/seguro-rc-multirriscos-alojamento-local/ (PT)",
      texto:
        "Short-term rental (Alojamento Local) requires by law a civil liability policy specific to the " +
        "activity (reference minimum capital €75,000 per claim), an obligation kept even after " +
        "Decree-Law 76/2024 brought more stability to the registration process. Condominium insurance or " +
        "a normal home policy do NOT cover AL activity. Liability and multi-risk cover are different and " +
        "complementary: liability responds for damage to guests/third parties, multi-risk protects the " +
        "owner's own property and contents. Indicative price: €120-400/year for a small-to-medium apartment or house.",
    },
    hotelaria_coberturas: {
      fonte: "/blog/seguro-multiriscos-hotel-portugal/, /blog/hotel-fenomenos-climaticos-extremos/ e /blog/comparar-propostas-seguro-hotel-erros-comuns/ (PT)",
      texto:
        "A well-designed hotel multi-risk policy covers building and contents at real rebuild value, " +
        "water damage, weather events (storm, hail, flood — watch for sublimits and deductibles), " +
        "machinery breakdown, operational liability and business interruption with a long-enough " +
        "indemnity period (rebuilding a hotel can take over 12 months). When comparing proposals, never " +
        "compare price alone: always align capital, deductibles and exclusions first.",
    },
    hotelaria_obrigatorios_rc: {
      fonte: "/blog/seguros-obrigatorios-hotelaria-turismo/, /blog/rc-exploracao-unidades-turisticas/ e /blog/seguro-acidentes-pessoais-trabalhadores-hotelaria/ (PT); /en/blog/mandatory-insurance-hospitality-tourism/",
      texto:
        "Tourist developments need mandatory civil liability, work accident insurance and fire " +
        "insurance. Operational liability covers guest incidents (falls, food poisoning, pool/spa " +
        "accidents) — many properties carry insufficient capital for the real exposure. Work accident " +
        "insurance is mandatory for every employee (including seasonal staff); personal accident " +
        "insurance is an optional but valuable add-on for staff retention in a high-turnover sector.",
    },
    hotelaria_rural_boutique: {
      fonte: "/blog/seguros-turismo-rural-hoteis-boutique/ (PT)",
      texto:
        "Rural tourism and boutique hotels in historic buildings need rebuild capital adjusted to " +
        "traditional materials and techniques (not modern construction value), dedicated clauses for " +
        "art/antiques/wine cellars, and liability cover for activities like horse riding, wine tastings " +
        "or natural pools — risks a conventional hotel policy typically does not contemplate.",
    },
    hotelaria_experiencia: {
      fonte: "/en/blog/20-years-tourism-hospitality-insurance/",
      texto:
        "Adler & Rochefort's founder, Hugo Gonçalves, has nearly 20 years of experience in global " +
        "tourism, including at Hotelbeds (HBX Group), one of the world's largest hotel distribution " +
        "platforms. That direct operational experience — not just insurance-product knowledge — helps " +
        "identify risks in hospitality, tourism and short-term rental that generalist brokers usually miss.",
    },
    restauracao: {
      fonte: "/en/blog/bars-restaurants-insurance-claims/",
      texto:
        "Most common claims for bars/restaurants: kitchen fire, water damage, refrigeration equipment " +
        "failure (loss of food stock), liability for food poisoning, customer accidents, theft, and loss " +
        "of revenue from temporary closure. Essential covers: multi-risk for the establishment, public " +
        "and product liability, machinery breakdown, goods deterioration and business interruption. " +
        "Reporting a claim within the first 24-48h speeds things up considerably (legal deadline: 8 working days).",
    },
    rc_profissional: {
      fonte: "/en/blog/professional-indemnity-insurance/",
      texto:
        "Professional Indemnity covers damage to third parties from errors, omissions or negligence in " +
        "professional practice (different from general liability, which covers accidental physical " +
        "damage). Legally mandatory for lawyers, doctors, engineers, architects, accountants and real " +
        "estate agents, among others — but any consulting, technology or management firm should carry a " +
        "policy sized to its turnover, with retroactive cover and a reporting period after the contract ends.",
    },
    rc_terapeuticas: {
      fonte: "/en/blog/liability-insurance-complementary-therapies/",
      texto:
        "Law No. 71/2013 requires professional liability insurance for the six recognised complementary " +
        "therapies (acupuncture, phytotherapy, homeopathy, traditional Chinese medicine, naturopathy, " +
        "osteopathy), a condition for the ACSS professional licence. Recommended sums insured: minimum " +
        "€50,000 for solo practitioners, €100,000-250,000 for clinics. Indicative cost: €150-500/year. " +
        "Yoga is not formally on the list but instructors face similar liability exposure.",
    },
    ciberseguranca: {
      fonte: "/en/blog/cyber-insurance-businesses-portugal/ e /en/blog/ransomware-portugal-cyber-risks/",
      texto:
        "Portugal saw a 67% rise in ransomware attacks on businesses in 2025, concentrated on SMEs with " +
        "€5-50 million turnover. A good cyber policy covers 24/7 incident response, data recovery, " +
        "revenue loss from system interruption, liability for data breaches, cyber extortion, and " +
        "regulatory costs (CNPD/GDPR). Watch out: the ransom payment itself is typically not reimbursed, " +
        "and unsupported legacy infrastructure is commonly excluded.",
    },
    empresas_obrigatorios: {
      fonte: "/en/blog/mandatory-insurance-companies-portugal/",
      texto:
        "Cross-sector mandatory business insurance: work accident cover (any company with employees), " +
        "motor third-party liability (owned or leased vehicles) and fire/multi-risk (condominium units). " +
        "There are also over a hundred sector-specific mandatory policies (construction, real estate " +
        "agencies, regulated professions, travel agencies, short-term rental, goods transport). Risks " +
        "like cyberattacks, machinery breakdown or directors' liability (D&O) are not covered by the " +
        "legal minimum, yet are among the biggest real threats.",
    },
    empresas_distribuicao: {
      fonte: "/en/blog/distribution-companies-insurance/",
      texto:
        "Distribution companies accumulate risk across several categories: goods in transit, fleet, " +
        "warehouses, stored stock (own and third-party) and liability for damage to the end consumer. A " +
        "proper programme integrates inland transit insurance, fleet insurance, industrial multi-risk " +
        "and business interruption. Common mistake: generic policies that exclude third-party goods in " +
        "storage or don't track seasonal inventory swings.",
    },
    empresas_revisao_apolice: {
      fonte: "/en/blog/business-insurance-policy-review/",
      texto:
        "58% of businesses have never reviewed their policy after signing, and a third of claims result " +
        "in partial or refused payment for that reason. In a real case, a distribution company insured " +
        "since 2016 (never updated) received only €50,000 on a €230,000 claim because the business had " +
        "grown 3x without the capital being reviewed. A free annual review checks insured values, new " +
        "risks (cyber, environmental, professional liability) and unnecessary coverages.",
    },
    do_administradores: {
      fonte: "/en/blog/directors-and-officers-insurance-d-o/",
      texto:
        "In Portugal, directors and managers are personally liable — with their own assets — for " +
        "management decisions that harm the company, shareholders, creditors or third parties. D&O " +
        "insurance covers legal defence costs and compensation even when the claim is unfounded, " +
        "including insolvency proceedings with signs of mismanagement, tax non-compliance or minority " +
        "shareholder claims. SMEs are often the most exposed because their directors are less aware of this risk.",
    },
    obra_construcao: {
      fonte: "/en/blog/construction-works-insurance/",
      texto:
        "Construction and works liability insurance is mandatory for any licensed project, but the " +
        "legal minimum covers little: damage to works in progress from natural events, theft of " +
        "materials on site, cross-liability between contractor and subcontractors, and design/structural " +
        "calculation errors are typically excluded. The policy should protect every party involved " +
        "(project owner, contractor, subcontractors, designers) and include cover for the post-completion maintenance period.",
    },
    vida_hipoteca: {
      fonte: "/en/blog/mortgage-life-insurance-foreign-buyers-portugal/",
      texto:
        "When a Portuguese bank approves a mortgage, it usually proposes life insurance bundled with " +
        "the loan — but this policy can be compared and taken out independently, often saving 30-50% on " +
        "the premium. Check before switching: what happens to the mortgage spread discount if you move " +
        "the policy, how disability is defined, whether the premium decreases with the outstanding " +
        "balance, and whether medical exams are required.",
    },
    investimento_luxo: {
      fonte: "/en/blog/american-investment-luxury-portugal/",
      texto:
        "American investors in Portuguese luxury real estate, premium tourism and corporate structures " +
        "(holdings, SPVs, funds) face specific risks: outdated insured values, poorly translated " +
        "policies and coverages that don't talk to each other across the property, the operation and the " +
        "holding. Adler & Rochefort structures multi-risk cover for prestige properties (including " +
        "unoccupied periods), tourism operation insurance and directors' liability (D&O) for the " +
        "corporate structures, with claims handled in English.",
    },
    parcerias_imobiliarias: {
      fonte: "/en/blog/real-estate-partnerships-commissions/",
      texto:
        "Every real estate transaction creates an immediate insurance need: multi-risk home cover, " +
        "mortgage-linked life insurance and condominium insurance. In a referral partnership, the agency " +
        "introduces the client to Adler & Rochefort and earns a transparent, recurring commission on " +
        "every policy taken out, with no licensing needed on their side. Mortgage life insurance taken " +
        "out independently of the bank can save the client 30-50% on the premium.",
    },
    adler_pro: {
      fonte: "/en/blog/adler-pro-saas-platform/",
      texto:
        "Os Meus Seguros is Adler & Rochefort's SaaS platform for enterprise insurance management: it " +
        "centralises every company policy in one place, sends automatic renewal alerts, digitises claims " +
        "management and provides an analytics dashboard on cost and loss ratio. It does not replace the " +
        "broker — it frees up time for strategic analysis and negotiation instead of repetitive admin work.",
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
