# -*- coding: utf-8 -*-
"""PT travel insurance landings — 25 Nov 2026 (residents in Portugal).
Premium angle only: generic Portuguese travel topics (price, Europe, Erasmus,
cancellation guides, seniors, families) are left to Viagem Garantida to avoid
cannibalisation. Built by scripts/build-travel-landings.py. Comparison only."""

UI = {"pt": dict(home_crumb="Seguro de viagem", others="Compare o seguro de viagem por tipo de viagem",
                 guides="Guias de seguro de viagem", tool_h="Compare planos para esta viagem",
                 tool_p="Preços em tempo real de várias seguradoras, ordenados primeiro pela cobertura médica. Ajuste os campos à sua viagem.",
                 faq_h="Perguntas frequentes", rel_h="Leia também", main_link="Todas as viagens: comparador de seguros de viagem premium",
                 who_h="Quem faz o quê", cta="Comparar planos premium")}
P = {"pt": {}}
T = P["pt"]
IPMI = "/seguros/saude-internacional/"

T["usa"] = dict(
    slug="eua-longo-curso", preset=dict(dest="US", intent="forTourism"),
    title="Seguro de Viagem para os EUA e Longo Curso — Limites Médicos Altos | Adler & Rochefort",
    desc="Compare seguros de viagem para os EUA, Canadá, Japão e Caraíbas por despesas médicas, repatriamento e cancelamento. Planos premium de várias seguradoras, ordenados pela proteção.",
    crumb="EUA e longo curso", eyebrow="Seguro de viagem para os EUA e longo curso",
    h1="Seguro de viagem para os EUA e longo curso: compare primeiro os limites médicos",
    lead="Nova Iorque, uma viagem pelo Canadá, o Japão ou as Caraíbas: os destinos onde a saúde é mais cara do mundo. Compare planos de várias seguradoras ordenados pela cobertura médica, com os EUA já selecionados.",
    sections=[
        ("Porque o longo curso pede outra apólice", "<p>Nos EUA não há sistema público a que recorrer: os hospitais faturam a preços privados e um internamento com cirurgia pode ultrapassar as seis casas. Muitas apólices «mundo» excluem os EUA e o Canadá se essa zona não for escolhida. O ESTA é obrigatório; o seguro não — e é por isso que tantos viajantes vão subsegurados.</p>"),
        ("O que comparar", "<ul><li><strong>Despesas médicas</strong>: um limite alto ou ilimitado.</li><li><strong>Pagamento direto</strong> ao hospital pela assistência.</li><li><strong>Repatriamento ao custo real</strong>, incluindo avião-ambulância.</li><li><strong>Responsabilidade civil</strong>: as indemnizações nos EUA são elevadas.</li><li><strong>Cancelamento</strong> à medida do custo não reembolsável da viagem.</li></ul>"),
        ("O seu seguro de saúde não viaja consigo", "<p>Os seguros de saúde domésticos contratados em Portugal cobrem a assistência no estrangeiro apenas com limites baixos, ou não a cobrem. O Cartão Europeu de Seguro de Doença não é válido nos EUA. Para quem viaja muito ou vive parte do ano fora, veja também o <a href=\"" + IPMI + "\">seguro de saúde internacional</a>.</p>"),
        ("Canadá, Japão e Caraíbas", "<p>Escolha a zona geográfica do destino mais caro da viagem. Um cruzeiro nas Caraíbas a partir de Miami ou uma escala de vários dias em Nova Iorque exigem a zona EUA.</p>"),
    ],
    faq=[
        ("O seguro de viagem é obrigatório para os EUA?", "Não. É obrigatório o ESTA, não o seguro. Sem seguro, paga o custo total de qualquer tratamento."),
        ("Que limite de despesas médicas devo escolher?", "O mais alto razoavelmente possível, com pagamento direto ao hospital."),
        ("O meu seguro de saúde cobre-me nos EUA?", "Os seguros domésticos cobrem o estrangeiro com limites baixos ou não cobrem. Confirme nas condições da sua apólice."),
    ],
)

T["nomad"] = dict(
    slug="nomadas-digitais", preset=dict(intent="digitalNomad"),
    title="Seguro de Viagem para Nómadas Digitais — Compare Planos | Adler & Rochefort",
    desc="Compare seguros de viagem para nómadas digitais e trabalho remoto: despesas médicas, repatriamento e responsabilidade civil durante meses no estrangeiro.",
    crumb="Nómadas digitais", eyebrow="Seguro de viagem para nómadas digitais",
    h1="Seguro de viagem para nómadas digitais: meses fora, bem protegidos",
    lead="Primavera em Bali, verão no México, inverno na Tailândia: é um estilo de vida, não umas férias. Compare planos para nómadas ordenados pela cobertura médica e pelo repatriamento.",
    sections=[
        ("O que uma apólice para nómadas tem de fazer", "<ul><li><strong>Períodos longos</strong>, muitas vezes renováveis mês a mês.</li><li><strong>Vários países</strong> na mesma apólice, incluindo os EUA se lá passar.</li><li><strong>Despesas médicas altas e repatriamento</strong> ao custo real.</li><li><strong>Responsabilidade civil</strong> em casas arrendadas e cowork.</li><li><strong>Equipamento</strong>: portáteis e câmaras têm limites baixos por objeto.</li></ul>"),
        ("Quando precisa de um seguro de saúde", "<p>Quando se fixa num país a maior parte do ano, o seguro de viagem deixa de ser a ferramenta certa. Veja o <a href=\"" + IPMI + "\">seguro de saúde internacional</a>.</p>"),
    ],
    faq=[
        ("Posso contratar depois de já ter saído de Portugal?", "Alguns planos permitem, muitas vezes com período de carência; outros só antes da partida."),
        ("Estou coberto quando venho a Portugal?", "Normalmente só em visitas curtas, se de todo. Leia o âmbito territorial."),
        ("O meu portátil está coberto?", "Dentro do limite de bagagem, com limite baixo por objeto."),
    ],
)

T["longstay"] = dict(
    slug="estadias-longas", preset=dict(intent="expat"),
    title="Seguro de Viagem para Estadias Longas no Estrangeiro — Compare | Adler & Rochefort",
    desc="Compare seguros de viagem para estadias longas: sabáticas, temporadas no estrangeiro, expatriação e os meses antes de uma mudança. Despesas médicas, repatriamento e responsabilidade civil.",
    crumb="Estadias longas", eyebrow="Seguro de viagem para estadias longas",
    h1="Seguro para estadias longas: da sabática aos meses antes da mudança",
    lead="Uma sabática, uma temporada a trabalhar fora, ou os meses de transição antes de se instalar noutro país. Compare planos pelos limites que contam quando se está meses fora.",
    sections=[
        ("Para quem é", "<ul><li><strong>Sabáticas</strong> com vários países.</li><li><strong>Famílias</strong> com filhos numa escola no estrangeiro durante um período.</li><li><strong>Expatriação</strong> antes de ter seguro de saúde no país de destino.</li></ul>"),
        ("O que comparar", "<ul><li><strong>Duração máxima</strong> e prorrogação a partir do estrangeiro.</li><li><strong>Despesas médicas</strong> e pagamento direto.</li><li><strong>Repatriamento</strong> ao custo real.</li><li><strong>Visitas a Portugal</strong> durante o período.</li><li><strong>Doenças pré-existentes</strong>: declare-as.</li></ul>"),
        ("O limite de um seguro de viagem", "<p>Quando outro país passa a ser a sua residência, precisa de um seguro de saúde aí — veja o <a href=\"" + IPMI + "\">seguro de saúde internacional</a>.</p>"),
    ],
    faq=[
        ("Quanto tempo pode durar?", "Conforme o plano, vários meses ou até um ano."),
        ("Posso vir a Portugal durante a estadia?", "Muitos planos permitem visitas curtas; confirme as condições."),
        ("Serve para um visto de residência?", "Por vezes, para o primeiro período. Confirme os requisitos do consulado."),
    ],
)

T["group"] = dict(
    slug="viagens-de-grupo", preset=dict(intent="groupTravel"),
    title="Seguro de Viagem para Grupos — Casamentos, Golfe e Empresas | Adler & Rochefort",
    desc="Compare seguros de viagem para grupos: casamentos no estrangeiro, grupos de golfe, viagens de família e viagens de incentivo de empresas. Uma só pesquisa para todo o grupo.",
    crumb="Viagens de grupo", eyebrow="Seguro de viagem para grupos",
    h1="Seguro de viagem para grupos: uma só pesquisa para todos",
    lead="Um casamento em Maiorca, uma semana de golfe na Escócia, uma viagem de família de várias gerações ou um incentivo de empresa. Compare planos de grupo com todos no mesmo orçamento.",
    sections=[
        ("Viagens de grupo típicas", "<ul><li><strong>Casamentos de destino</strong> com convidados de vários países.</li><li><strong>Grupos de golfe</strong>.</li><li><strong>Viagens multigeracionais</strong>, onde os limites de idade contam.</li><li><strong>Incentivos e retiros de empresa</strong>.</li></ul>"),
        ("O que verificar", "<ul><li><strong>Dimensão do grupo</strong> e se todos têm de residir no mesmo país.</li><li><strong>Idades</strong>: um viajante mais velho pode mudar o preço de todo o grupo.</li><li><strong>Cancelamento</strong> se um dos membros não puder viajar.</li><li><strong>Responsabilidade civil</strong> no golfe, em barcos e no desporto.</li></ul>"),
        ("Convidados de outros países", "<p>O seguro é tarifado pelo país de residência: cada convidado pode usar o mesmo comparador com o seu país.</p>"),
    ],
    faq=[
        ("Quantas pessoas por orçamento?", "Até 12 viajantes por pesquisa; grupos maiores podem fazer várias."),
        ("Todos precisam do mesmo plano?", "No mesmo orçamento, sim."),
        ("Convidados que vivem fora de Portugal podem contratar?", "Sim, indicando o seu próprio país de residência."),
    ],
)
