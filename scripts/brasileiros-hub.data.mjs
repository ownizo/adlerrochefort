/**
 * Content for the Brazilian-audience hub — /seguros/brasileiros-em-portugal/ —
 * and its four satellite articles in the PT blog (October 2026).
 *
 * Why: Brazilians are the largest foreign community in Portugal (more than a
 * third of foreign residents) and the nationality that bought the most homes
 * in 2025 among non-Portuguese households (9,808 purchases, INE via
 * idealista); in the premium segment, Brazilian buyers invested €65.8 million
 * in 2025 at an average of €1.4 million, 42 % of it in Cascais (Porta da
 * Frente Christie's via idealista). The PT site speaks to Portuguese readers;
 * this cluster speaks to them.
 *
 * Same renderer as the US, Canadian and Irish hubs (landingPage() in
 * scripts/lib/landing.mjs); written in European Portuguese, as the rest of
 * /seguros/, with the Brazilian term beside the Portuguese one wherever the
 * two differ — that vocabulary gap is the angle of the whole cluster.
 *
 * Editorial rules: no insurer named, no prices, legal points hedged and sent
 * to the authority; health data never requested in a form.
 */

const wa = (msg) => `https://wa.me/351928226570?text=${encodeURIComponent(msg)}`;

export const GDPR =
  'Respondemos em 24 horas úteis. Os seus dados são usados apenas para preparar a análise e tratados ao abrigo do RGPD — consulte a <a href="/politica-de-privacidade/">Política de Privacidade</a>.';

export const BR_ARTICLES = [
  {
    slug: 'plano-de-saude-portugal-brasileiros',
    tag: 'Para brasileiros',
    title: 'Plano de saúde em Portugal para brasileiros: o que muda',
    metaTitle: 'Plano de saúde em Portugal para brasileiros: o que muda | Adler & Rochefort',
    description:
      'O plano de saúde brasileiro não acompanha a mudança. Como funcionam o SNS, o PB4, o seguro de saúde português e o internacional — e em que ordem tratar de cada um.',
    keywords: 'plano de saúde Portugal brasileiros, seguro de saúde Portugal brasileiro, PB4 Portugal, SNS brasileiros, seguro de saúde internacional Portugal, carência seguro saúde Portugal',
    image: '/images/blog/topics/1613490493576-7fde63acd811.jpg',
    readingTime: 7,
    body: `
    <p>No Brasil, o plano de saúde é quase uma extensão da vida: a rede credenciada, o pronto-socorro do hospital de sempre, o pediatra que conhece a família. Quem se muda para Portugal descobre depressa que nada disto viaja na mala — e que o sistema português tem outra lógica, outros nomes e outra ordem.</p>

    <h2>O plano brasileiro fica no Brasil</h2>
    <p>Os planos de saúde regulados pela ANS cobrem, por regra, o atendimento no Brasil. Alguns incluem urgências em viagem; quase nenhum cobre a vida de quem passou a residir noutro país. Antes de cancelar o plano, pergunte por escrito à operadora o que acontece se deixar de residir no Brasil — e não o cancele antes de ter a cobertura em Portugal em vigor.</p>

    <h2>O SNS, o PB4 e o Estatuto de Igualdade</h2>
    <p>O <em>Serviço Nacional de Saúde</em> (SNS) é o sistema público português, acessível a quem reside legalmente no país, através da inscrição no centro de saúde da área de residência, onde recebe o <em>número de utente</em>.</p>
    <ul>
      <li><strong>O PB4.</strong> O acordo de segurança social entre Portugal e o Brasil prevê um certificado de direito a assistência médica — o PB4 — para determinadas situações, em especial estadias temporárias de quem está abrangido pelo sistema brasileiro. Confirme junto das autoridades brasileiras se se aplica ao seu caso antes de viajar.</li>
      <li><strong>Residência.</strong> Para quem fixa residência, o caminho é a inscrição no SNS. A atribuição de médico de família não é automática e há esperas para especialidades em várias regiões.</li>
    </ul>

    <h2>Seguro de saúde português ou internacional</h2>
    <p>Em Portugal diz-se «seguro de saúde», não «plano». A lógica é parecida com a de um plano com rede credenciada: dentro da rede (<em>rede convencionada</em>) paga um <strong>copagamento</strong> — a vossa coparticipação — por consulta ou exame; fora da rede, há reembolso parcial.</p>
    <ul>
      <li><strong>Seguro português:</strong> cobre em Portugal; no estrangeiro, normalmente só urgências. As seguradoras emitem-no a quem tem <strong>morada de residência em Portugal</strong> e pedem o <strong>NIF de cada pessoa segura</strong>, crianças incluídas.</li>
      <li><strong>Seguro internacional:</strong> cobre em vários países, incluindo o Brasil se o âmbito o previr, com livre escolha de médico. É a solução para quem quer continuar a tratar-se com o médico de sempre em São Paulo ou no Rio.</li>
    </ul>

    <h2>Carências e doenças pré-existentes</h2>
    <p>A palavra é a mesma — carência — e a lógica também: períodos em que certas coberturas ainda não funcionam, mais longos para parto e cirurgias programadas. As doenças que já existem antes da contratação ficam normalmente excluídas ou sujeitas a carência. Há seguros portugueses sem questionário clínico e sem idade máxima de adesão, úteis para pais mais velhos que acompanham a família. Os dados de saúde são entregues diretamente à seguradora, nunca num formulário de site.</p>

    <h2>A ordem que funciona</h2>
    <ol>
      <li>NIF para toda a família, incluindo os menores.</li>
      <li>Para o visto, um seguro de viagem com despesas médicas e repatriamento.</li>
      <li>Morada em Portugal — e, com ela, o seguro de saúde português ou internacional.</li>
      <li>Inscrição no SNS assim que tiver a documentação de residência.</li>
      <li>Só então, cancelar o plano brasileiro, se fizer sentido.</li>
    </ol>
`,
    faq: [
      { q: 'O meu plano de saúde brasileiro cobre-me em Portugal?', a: 'Por regra, não para quem passa a residir em Portugal; alguns planos cobrem apenas urgências em viagem. Peça à operadora uma resposta por escrito antes de cancelar.' },
      { q: 'O que é o PB4?', a: 'É o certificado de direito a assistência médica previsto no acordo de segurança social entre Portugal e o Brasil, pensado sobretudo para estadias temporárias de quem está abrangido pelo sistema brasileiro. Confirme a aplicação ao seu caso junto das autoridades brasileiras.' },
      { q: 'Posso contratar um seguro de saúde português antes de chegar?', a: 'Normalmente não: as seguradoras portuguesas exigem morada de residência em Portugal e NIF de cada pessoa segura. Um seguro internacional pode, conforme a seguradora, ser contratado antes.' },
      { q: 'Os meus filhos precisam de NIF para entrar no seguro?', a: 'Sim. O tomador e todas as pessoas seguras, incluindo menores, precisam de NIF português.' },
    ],
  },
  {
    slug: 'seguro-casa-portugal-brasileiros',
    tag: 'Para brasileiros',
    title: 'Seguro residencial em Portugal: o guia para brasileiros',
    metaTitle: 'Seguro residencial em Portugal: guia para brasileiros | Adler & Rochefort',
    description:
      'O seguro residencial chama-se multirriscos em Portugal: valor de reconstrução, condomínio, sismo opcional e as diferenças que mais surpreendem quem vem do Brasil.',
    keywords: 'seguro residencial Portugal brasileiros, seguro casa Portugal, multirriscos habitação, valor de reconstrução, seguro apartamento Lisboa brasileiros, seguro sismo Portugal',
    image: '/images/blog/topics/1613977257363-707ba9348227.jpg',
    readingTime: 7,
    body: `
    <p>No Brasil fala-se em «seguro residencial»; em Portugal, em <em>multirriscos habitação</em>. A estrutura é familiar — o imóvel e o conteúdo, a que aqui se chama <em>recheio</em> — mas há três diferenças que mudam a indemnização e que quase ninguém explica a quem chega do Brasil.</p>

    <h2>1. O capital é o valor de reconstrução</h2>
    <p>O valor seguro do edifício deve ser o custo de o reconstruir, não o preço que pagou nem o valor da avaliação do banco. Em Cascais ou em Lisboa, o preço reflete sobretudo a localização; o que se segura é o que custaria voltar a construir. Se o capital ficar abaixo, aplica-se a <strong>regra proporcional</strong>: a seguradora paga na mesma proporção, mesmo num sinistro pequeno. Veja <a href="/seguros/habitacao/valor-reconstrucao/">como calcular o valor de reconstrução</a>, com o simulador SCRIM.</p>

    <h2>2. O sismo é opcional</h2>
    <p>Para quem vem do Brasil, o terramoto é uma hipótese distante. Em Portugal não é: a região de Lisboa e o Algarve são as zonas de maior risco sísmico do continente. A cobertura de <em>fenómenos sísmicos</em> contrata-se à parte e tem uma franquia em percentagem do capital. Se não for contratada, o sismo não está coberto.</p>

    <h2>3. O condomínio só segura o mínimo</h2>
    <p>Num apartamento, o condomínio é obrigado por lei a ter seguro de incêndio — e muitos ficam por aí. Danos por água entre frações, sismo, a parte construída da sua fração e o seu recheio têm de estar na sua apólice. Peça a apólice do condomínio ao administrador antes de contratar a sua.</p>

    <h2>Vocabulário que vale a pena conhecer</h2>
    <ul>
      <li><strong>Seguro residencial</strong> → <em>multirriscos habitação</em>.</li>
      <li><strong>Conteúdo</strong> → <em>recheio</em>.</li>
      <li><strong>Prêmio</strong> → <em>prémio</em> (o mesmo conceito).</li>
      <li><strong>Franquia</strong> → <em>franquia</em> (o mesmo conceito; no sismo é uma percentagem).</li>
      <li><strong>Corretor (SUSEP)</strong> → <em>mediador de seguros</em>, registado na ASF.</li>
      <li><strong>IPTU</strong> → IMI, o imposto municipal sobre imóveis.</li>
    </ul>

    <h2>Casas de valor elevado</h2>
    <p>Para moradias em Cascais, na Quinta da Marinha ou no Algarve, colocamos apólices que vão além das seguradoras generalistas: vistoria sem custo, sem regra proporcional quando se aceitam os capitais recomendados e, em perda total, mediante acordo entre seguradora e segurado, indemnização até ao capital máximo contratado, acima do valor de reconstrução. Arte, joias e relógios em valor acordado, cobertos também quando viajam ao Brasil.</p>

    <h2>Casa vazia parte do ano</h2>
    <p>Muitas famílias passam temporadas no Brasil. As apólices têm uma cláusula de desocupação: a partir de um número de dias seguidos sem ninguém em casa, o furto e os danos por água podem ficar limitados. Declare o uso real desde o início.</p>
`,
    faq: [
      { q: 'O seguro de casa é obrigatório em Portugal?', a: 'Só o seguro de incêndio nos edifícios em propriedade horizontal, normalmente contratado pelo condomínio. Com crédito habitação, o banco exige também seguro do imóvel. Para o resto, é uma decisão sua.' },
      { q: 'Por que valor devo segurar a casa?', a: 'Pelo valor de reconstrução, não pelo preço de compra. O simulador SCRIM da APS dá uma estimativa; nas casas de valor elevado, a vistoria da seguradora fixa o valor consigo.' },
      { q: 'O terramoto está coberto?', a: 'Só se contratar a cobertura de fenómenos sísmicos, que em Portugal é opcional.' },
      { q: 'As apólices estão em português do Brasil?', a: 'Estão em português europeu. O vocabulário difere em alguns pontos — recheio, prémio, multirriscos — e explicamos cada apólice por escrito antes de assinar.' },
    ],
  },
  {
    slug: 'cnh-carta-conducao-portugal-seguro-auto-brasileiros',
    tag: 'Para brasileiros',
    title: 'CNH em Portugal: carta de condução e seguro automóvel para brasileiros',
    metaTitle: 'CNH em Portugal: carta e seguro automóvel para brasileiros | Adler & Rochefort',
    description:
      'A CNH é reconhecida em Portugal com condições. O que muda quando passa a residir, como funciona o seguro automóvel português e o que acontece ao seu bônus.',
    keywords: 'CNH Portugal, carteira de motorista brasileira Portugal, troca CNH Portugal IMT, seguro auto Portugal brasileiros, bônus seguro auto Portugal, seguro automóvel Portugal',
    image: '/images/blog/topics/1503376780353-7e6692767b70.jpg',
    readingTime: 6,
    body: `
    <p>Para muitos brasileiros, o carro é a primeira compra depois da casa. Antes de assinar o seguro, convém ter resolvidas duas coisas: a carta de condução e o histórico de condutor — porque nenhuma das duas funciona em Portugal exatamente como no Brasil.</p>

    <h2>A CNH é reconhecida — com condições</h2>
    <p>Portugal reconhece cartas de condução emitidas por países da CPLP e da OCDE que cumpram determinadas condições, e o Brasil está entre eles. Segundo o IMT, entre as condições estão a carta estar válida, não terem passado mais de quinze anos desde a emissão e o titular ter menos de sessenta anos. Cumpridas as condições, a troca por uma carta portuguesa é opcional para conduzir em Portugal; passa a ser necessária, por exemplo, para obter novas categorias.</p>
    <p>As condições mudam e cada caso tem pormenores: confirme a sua situação no IMT antes de deixar a carta caducar ou de precisar de a renovar.</p>

    <h2>As coberturas, com os nomes portugueses</h2>
    <ul>
      <li><strong>Responsabilidade civil</strong> — obrigatória: danos causados a terceiros. Equivale à parte de terceiros do seguro brasileiro.</li>
      <li><strong>Danos próprios</strong> — o equivalente ao «compreensivo»: danos no seu carro, com franquia normalmente em percentagem do valor.</li>
      <li><strong>Garantias à escolha</strong> — quebra de vidros, furto ou roubo, incêndio, assistência em viagem, ocupantes. Em Portugal escolhem-se uma a uma.</li>
    </ul>

    <h2>O seu bônus não vem automaticamente</h2>
    <p>No Brasil, as classes de bônus baixam o prêmio ano após ano. As seguradoras portuguesas não têm acesso a esse histórico, e as regras europeias que obrigam a reconhecer certificados de outros países da União não se aplicam ao Brasil. Peça à sua seguradora brasileira, antes de cancelar, uma declaração com os anos de seguro, a classe de bônus e os sinistros. Algumas seguradoras portuguesas valorizam-na; outras não. É uma das razões para comparar.</p>

    <h2>Trazer o carro do Brasil?</h2>
    <p>Quase nunca compensa: a homologação europeia, o desalfandegamento e o ISV — o imposto português sobre veículos, calculado sobre a cilindrada e as emissões — tornam o processo caro e lento. Existe uma isenção por transferência de residência, com condições estritas, mas o normal é comprar em Portugal.</p>

    <h2>Em caso de acidente</h2>
    <p>Use a <em>Declaração Amigável</em>, o formulário europeu assinado pelos dois condutores. Assine só aquilo com que concorda e comunique o sinistro no prazo da apólice.</p>
`,
    faq: [
      { q: 'Posso conduzir em Portugal com a minha CNH?', a: 'Sim, se cumprir as condições do regime de reconhecimento das cartas de países da CPLP e da OCDE publicadas pelo IMT, entre elas a validade da carta e limites de idade da carta e do titular. Confirme o seu caso no IMT.' },
      { q: 'Tenho de trocar a CNH por uma carta portuguesa?', a: 'Se cumprir as condições de reconhecimento, a troca é opcional para conduzir em Portugal. Torna-se necessária para obter novas categorias, entre outros casos.' },
      { q: 'O meu bônus do Brasil conta em Portugal?', a: 'Não automaticamente. Algumas seguradoras valorizam uma declaração da seguradora brasileira com anos de seguro, classe de bônus e sinistros. Peça-a antes de cancelar.' },
      { q: 'Qual é o seguro obrigatório?', a: 'A responsabilidade civil automóvel, que cobre os danos a terceiros. Os danos no seu carro são cobertura facultativa.' },
    ],
  },
  {
    slug: 'comprar-imovel-portugal-brasileiros-seguros',
    tag: 'Para brasileiros',
    title: 'Comprar imóvel em Portugal sendo brasileiro: os seguros, passo a passo',
    metaTitle: 'Comprar imóvel em Portugal sendo brasileiro: os seguros | Adler & Rochefort',
    description:
      'Do CPCV à escritura, o que o banco exige (e o que não pode impor), o seguro de vida do crédito, o arrendamento e a transferência de dinheiro do Brasil.',
    keywords: 'comprar imóvel Portugal brasileiro, comprar apartamento Lisboa brasileiros, crédito habitação brasileiro Portugal seguro de vida, seguro imóvel Portugal brasileiros, alojamento local brasileiros, investir imóvel Portugal',
    image: '/images/blog/topics/1613977257363-707ba9348227.jpg',
    readingTime: 7,
    body: `
    <p>Os brasileiros são a nacionalidade estrangeira que mais casas comprou em Portugal em 2025, e no segmento alto Cascais concentra a maior parte do investimento. Comprar aqui parece-se com comprar no Brasil — promessa, escritura, registo — mas os seguros funcionam de outra maneira, e o banco também.</p>

    <h2>Os passos, com os nomes portugueses</h2>
    <ul>
      <li><strong>NIF</strong> — o equivalente ao CPF, indispensável antes de assinar seja o que for.</li>
      <li><strong>CPCV com sinal</strong> — o contrato-promessa. Quem desiste perde o sinal; se for o vendedor, devolve-o em dobro.</li>
      <li><strong>Escritura</strong> — a partir desse dia, a casa é sua e o risco também. O seguro deve começar nesse mesmo dia.</li>
      <li><strong>IMT e imposto do selo</strong> — os impostos da compra (atenção: aqui o IMT é um imposto, não o instituto dos transportes).</li>
    </ul>
    <p>Desde 2023, comprar imóvel deixou de dar acesso à autorização de residência para investimento (o «golden visa»). Muitos brasileiros chegam por outras vias — o estatuto de igualdade, a autorização de residência CPLP, os vistos D7 ou D8 — e o seguro de saúde segue regras próprias em cada caso.</p>

    <h2>O que o banco exige — e o que não pode impor</h2>
    <p>No financiamento imobiliário brasileiro conhece o MIP e o DFI. Em Portugal, o <em>crédito habitação</em> exige normalmente dois seguros: o <strong>multirriscos</strong> do imóvel e o <strong>seguro de vida</strong> dos titulares, com o banco como beneficiário. A diferença importante: <strong>pode escolher a seguradora</strong>. O banco pode reduzir o spread se contratar com ele, mas tem de aceitar apólices de outra seguradora que cumpram as coberturas exigidas. Faça a conta completa. Veja <a href="/seguros/habitacao/valor-reconstrucao/">o valor de reconstrução</a>.</p>

    <h2>Se vai arrendar</h2>
    <p>Arrendar a turistas exige registo de Alojamento Local e um seguro de responsabilidade civil obrigatório; o seguro de casa normal não cobre a atividade. Em Lisboa, novos registos estão limitados em muitas freguesias — confirme antes de comprar. Para arrendamento de longa duração, a apólice do senhorio tem de dizer que a casa está arrendada.</p>

    <h2>A transferência do Brasil: o momento mais vulnerável</h2>
    <p>A fraude mais comum nas compras internacionais é simples: um email que parece do advogado ou da imobiliária anuncia uma «mudança de conta» dias antes da escritura. Confirme sempre os dados bancários por outro canal e desconfie de qualquer alteração de última hora.</p>

    <h2>Moradias de valor elevado</h2>
    <p>Em Cascais, no Estoril ou no Algarve, o seguro certo tem vistoria, não aplica a regra proporcional quando aceita os capitais recomendados e, em perda total, mediante acordo entre seguradora e segurado, pode indemnizar até ao capital máximo contratado, acima do valor de reconstrução.</p>
`,
    faq: [
      { q: 'Sou obrigado a fazer os seguros no banco?', a: 'Não. O banco pode exigir seguro do imóvel e seguro de vida com determinadas coberturas, mas tem de aceitar apólices de outra seguradora que as cumpram. Pode perder uma bonificação do spread.' },
      { q: 'Comprar casa dá-me residência em Portugal?', a: 'Já não. Desde 2023, a compra de imóvel deixou de ser via para a autorização de residência para investimento.' },
      { q: 'A partir de quando tenho de segurar a casa?', a: 'Desde o dia da escritura. Contrate antes, com início nessa data.' },
      { q: 'Posso comprar do Brasil, com procuração?', a: 'Sim, e o seguro pode ser contratado em seu nome, com NIF português, com início na data da escritura. Garanta que alguém de confiança recebe as chaves.' },
    ],
  },
];

export const BR_HUB = {
  lang: 'pt',
  url: '/seguros/brasileiros-em-portugal/',
  slug: 'brasileiros-em-portugal',
  metaTitle: 'Seguros para brasileiros em Portugal | Adler &amp; Rochefort',
  metaDescription:
    'Seguros para brasileiros que compram casa, se mudam ou já vivem em Portugal: seguro de saúde, casa, carro e vida, explicados com o vocabulário que conhece do Brasil.',
  h1: 'Seguros para brasileiros em Portugal',
  heroSub:
    'A língua é a mesma; o vocabulário dos seguros, não. Em Portugal o plano de saúde chama-se seguro de saúde, o seguro residencial chama-se multirriscos, o seu bônus não viaja e o banco não pode impor-lhe a seguradora. Explicamos tudo por escrito, antes de assinar.',
  ctaPrimary: 'Pedir uma análise',
  ctaSecondary: 'Falar por WhatsApp',
  whatsapp: wa('Olá, sou brasileiro e gostaria de ajuda com seguros em Portugal.'),
  trust: [
    'Mediador de seguros registado na ASF &middot; n.º 425591790/3',
    'Lisboa e Lagos &middot; Portugal e Espanha',
    'Análise por escrito em 24–72h úteis',
  ],
  serviceName: 'Seguros para brasileiros que compram casa, se mudam ou vivem em Portugal',
  serviceType: 'Mediação de seguros',
  audience: 'Brasileiros residentes, investidores e compradores de imóveis em Portugal',
  formSourceId: 'brasileiros-hub-source',
  crumbs: [
    { name: 'Início', url: '/' },
    { name: 'Seguros', url: '/seguros/' },
    { name: 'Seguros para brasileiros em Portugal' },
  ],

  law: [
    'O plano de saúde brasileiro, regulado pela ANS, cobre por regra o atendimento no Brasil. Para quem passa a residir em Portugal, a base é o SNS — com inscrição no centro de saúde — e um seguro de saúde português ou internacional. O certificado <strong>PB4</strong>, previsto no acordo de segurança social entre os dois países, aplica-se sobretudo a estadias temporárias.',
    'As seguradoras portuguesas emitem o seguro de saúde a quem tem <strong>morada de residência em Portugal</strong> e pedem o <strong>NIF de cada pessoa segura</strong>, crianças incluídas. É por isso que a ordem da mudança importa.',
    'A <strong>CNH</strong> é reconhecida em Portugal com condições publicadas pelo IMT; o seu <strong>bônus</strong> não é reconhecido automaticamente pelas seguradoras portuguesas.',
    'No crédito habitação, o banco exige seguro de vida e do imóvel, mas <strong>tem de aceitar apólices de outra seguradora</strong> que cumpram as coberturas pedidas.',
  ],

  essentialIntro: 'As coberturas que quase todas as famílias brasileiras acabam por precisar em Portugal.',
  essential: [
    { title: 'Seguro de saúde', text: 'Português ou internacional, com o SNS como base. Veja <a href="/blog/plano-de-saude-portugal-brasileiros/">plano de saúde em Portugal para brasileiros</a> e <a href="/seguros/saude/">seguro de saúde</a>.' },
    { title: 'Seguro de casa', text: 'Multirriscos pelo valor de reconstrução, com o sismo decidido conscientemente. Veja <a href="/blog/seguro-casa-portugal-brasileiros/">o guia para brasileiros</a> e <a href="/seguros/habitacao/">seguro de habitação</a>.' },
    { title: 'Seguro automóvel', text: 'A CNH, as coberturas portuguesas e o seu bônus. Veja <a href="/blog/cnh-carta-conducao-portugal-seguro-auto-brasileiros/">CNH e seguro automóvel</a> e <a href="/seguros/auto/">seguro automóvel</a>.' },
    { title: 'Seguro de vida e crédito habitação', text: 'O que o banco exige e o que pode escolher. Veja <a href="/blog/comprar-imovel-portugal-brasileiros-seguros/">comprar imóvel em Portugal sendo brasileiro</a>.' },
  ],

  recommendedIntro: 'Os temas que surgem precisamente porque quem compra, se muda ou investe vem do Brasil.',
  recommended: [
    { title: 'O valor de reconstrução', text: 'O capital da casa não é o preço que pagou. Veja <a href="/seguros/habitacao/valor-reconstrucao/">como calcular o valor de reconstrução</a>, com o simulador SCRIM.' },
    { title: 'Alojamento Local', text: 'Arrendar a turistas exige registo e um seguro de responsabilidade civil obrigatório. Veja <a href="/seguros/alojamento-local/">seguro de Alojamento Local</a>.' },
    { title: 'Moradias de valor elevado', text: 'Cascais, Estoril, Quinta da Marinha e Algarve: vistoria, sem regra proporcional e arte em valor acordado. Veja <a href="/private-clients/">Private Clients</a>.' },
  ],

  mistakes: [
    { title: 'Cancelar o plano brasileiro antes de ter cobertura em Portugal', text: 'Entre a chegada e o seguro português pode haver semanas sem cobertura. Primeiro a nova apólice em vigor, depois o cancelamento.' },
    { title: 'Segurar a casa pelo preço de compra', text: 'Em Lisboa e Cascais o preço é sobretudo localização. O capital certo é o valor de reconstrução.' },
    { title: 'Dar por adquirido que o bônus conta', text: 'As seguradoras portuguesas decidem caso a caso. Leve a declaração da seguradora brasileira.' },
    { title: 'Assinar no banco todos os seguros do crédito', text: 'Pode escolher a seguradora. Compare o custo total ao longo do empréstimo, não só a bonificação do spread.' },
  ],

  steps: [
    { title: 'A sua situação', text: 'Onde vai viver, com que autorização de residência, o que vai comprar ou arrendar e o que já tem no Brasil.' },
    { title: 'Consulta ao mercado', text: 'Levamos o mesmo risco, descrito da mesma forma, às seguradoras com que trabalhamos, escolhidas pelas coberturas e pela forma como tratam um sinistro — não pelo prémio mais baixo.' },
    { title: 'Comparação por escrito', text: 'Recebe as propostas lado a lado: capitais, franquias, exclusões e prémio, com o vocabulário explicado.' },
    { title: 'Emissão e sinistros', text: 'Tratamos da emissão e continuamos a ser o seu contacto se alguma coisa acontecer.' },
  ],

  faq: [
    { q: 'Atendem brasileiros em português?', a: 'Sim — em português, por escrito. As apólices portuguesas estão em português europeu; explicamos as diferenças de vocabulário antes de assinar.' },
    { q: 'Posso tratar dos seguros antes de me mudar?', a: 'Em parte. O seguro de viagem para o visto e, conforme a seguradora, um seguro de saúde internacional podem ser tratados antes. O seguro de saúde português exige morada de residência em Portugal e NIF de cada pessoa segura.' },
    { q: 'O meu plano de saúde brasileiro serve em Portugal?', a: 'Por regra, não para quem passa a residir em Portugal. Veja <a href="/blog/plano-de-saude-portugal-brasileiros/">o que muda</a>.' },
    { q: 'Trabalham também em Espanha?', a: 'Sim. Estamos registados na ASF e operamos em Espanha em regime de livre prestação de serviços.' },
  ],

  finalCta: `<section class="cta-strip" aria-label="Contacto">
  <div class="cta-strip-text">
    <h2 class="cta-strip-title">Peça uma análise por escrito</h2>
    <p class="cta-strip-sub">Conte-nos onde vai viver, o que vai comprar e o que já tem no Brasil. Respondemos por escrito, em 24 horas úteis.</p>
    <div style="margin-top:36px;display:flex;gap:18px;flex-wrap:wrap;align-items:center;">
      <a href="#pedido" class="btn-primary">Pedir uma análise</a>
      <a href="${wa('Olá, sou brasileiro e gostaria de ajuda com seguros em Portugal.')}" class="btn-ghost" rel="noopener" target="_blank">Falar por WhatsApp</a>
    </div>
  </div>
  <div class="cta-strip-actions">
    <div class="cta-contact-item"><div><div class="cta-contact-label">Telefone</div><div class="cta-contact-value"><a href="tel:+351928226570" style="color:inherit;text-decoration:none;">+351 928 226 570</a></div></div></div>
    <div class="cta-contact-item"><div><div class="cta-contact-label">Email</div><div class="cta-contact-value"><a href="mailto:insurance@adlerrochefort.com" style="color:inherit;text-decoration:none;">insurance@adlerrochefort.com</a></div></div></div>
  </div>
</section>`,
};
