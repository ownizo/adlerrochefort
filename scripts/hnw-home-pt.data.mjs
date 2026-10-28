/**
 * PT (pt-PT) — condições do seguro de habitação para patrimónios elevados
 * (outubro de 2026). Conteúdo tirado das condições Private Clients que a
 * Adler & Rochefort coloca em Portugal e Espanha. Regra da casa: nas páginas de
 * habitação HNW não se nomeia a seguradora nem se indicam prémios.
 * Renderizado por scripts/build-hnw-oct-articles.mjs.
 */

const pc = (slug) => `/private-clients/?source=blog%3A${slug}#pedido`;

export const PT_HOME = [
  {
    key: 'home-conditions',
    group: 'home-conditions',
    slug: 'seguro-casa-elevado-valor-condicoes',
    tag: 'Private Clients',
    title: 'Seguro de casa de elevado valor em Portugal e Espanha: as condições, cláusula a cláusula',
    metaTitle: 'Seguro de casa de elevado valor: as condições que contam',
    description: 'O que muda num seguro de habitação Private Clients: reconstrução garantida, sem regra proporcional, franquia dispensada nos grandes sinistros, alojamento alternativo e mais.',
    excerpt: 'As cláusulas que separam um seguro de habitação Private Clients do multirriscos corrente — o que faz cada uma e porque pesa no dia do sinistro.',
    keywords: 'seguro casa de luxo, seguro habitação elevado valor, seguro moradia de luxo portugal, sem regra proporcional, reconstrução garantida, alojamento alternativo, pesquisa de avarias, seguro private clients habitação',
    whatsapp: 'Olá, li o vosso artigo sobre as condições do seguro de casas de elevado valor e gostaria que analisassem a minha apólice.',
    ctaHref: pc('seguro-casa-elevado-valor-condicoes'),
    ctaTop: 'Peça uma análise por escrito da apólice da sua casa',
    ctaMeio: {
      title: 'A sua apólice atual tem estas cláusulas?',
      desc: 'Envie-a a um agente de seguros pelo WhatsApp. Respondemos por escrito.',
    },
    ctaFinal: {
      title: 'Compare a sua apólice com esta lista',
      text: 'Envie-nos a apólice atual. Dizemos por escrito, cláusula a cláusula, o que já tem, o que lhe falta e o que isso significa num sinistro.',
    },
    intro: `<p>A maioria dos seguros de habitação em Portugal e em Espanha foi escrita para a casa média — e serve-a bem. Uma moradia na Quinta do Lago, uma quinta em Sintra ou uma casa em La Zagaleta não são a casa média, e o multirriscos corrente mostra os seus limites precisamente quando o sinistro é grande: o capital ficou desatualizado, a regra proporcional corta a indemnização, os muros e a piscina ficam reduzidos a um valor simbólico e a família passa meses num apartamento arrendado.</p>
<p>As condições Private Clients que colocamos estão construídas ao contrário. Este artigo percorre-as cláusula a cláusula — a casa, o recheio, o próprio sinistro — para que as possa comparar com a apólice que tem hoje.</p>`,
    body: [
      ['O capital: vistoria e reconstrução garantida', `<ul>
<li><strong>Vistoria sem custo.</strong> Nas casas de valor mais elevado, a seguradora envia o seu próprio técnico para determinar o custo de reconstrução, aconselhar os capitais de recheio e de objetos de valor e recomendar medidas de prevenção.</li>
<li><strong>Reconstrução garantida.</strong> Se as recomendações da vistoria forem aceites, a casa é reconstruída após uma perda total mesmo que o custo ultrapasse o capital do edifício.</li>
<li><strong>Sem regra proporcional.</strong> A regra do subseguro do artigo 134.º da Lei do Contrato de Seguro é expressamente afastada: um sinistro parcial é pago por inteiro.</li>
<li><strong>Atualização automática</strong> do capital do edifício em cada renovação, pelo índice publicado pela ASF.</li>
<li><strong>Custo de reconstrução real:</strong> o mesmo projeto e a mesma qualidade de materiais e de execução, honorários de arquitetos, engenheiros e advogados, o custo de cumprir novas exigências legais e a remoção de escombros.</li>
</ul>`],
      ['A casa e o terreno', `<ul>
<li><strong>Outras construções permanentes</strong> — casa de hóspedes, garagens, casa da piscina, muros — cobertas por mais 20% do capital da casa, sem sublimite próprio para muros de vedação ou de suporte.</li>
<li><strong>Árvores, arbustos, plantas e relvados</strong> até 10% do capital da casa, após incêndio, tempestade, furto, vandalismo ou embate — e remoção de árvores derrubadas pela tempestade.</li>
<li><strong>Terreno.</strong> Se a reconstrução exigir escavação ou estabilização do solo, é paga mais 10% do valor do sinistro para esse efeito.</li>
<li><strong>Pesquisa de avarias sem sublimite.</strong> Localizar e reparar uma rotura de água, gás ou gasóleo de aquecimento, abrir e repor paredes e pavimentos — e a água ou o combustível perdidos.</li>
<li><strong>A casa de hoje.</strong> Comparticipação num sistema de deteção de fugas após um sinistro de água relevante, em painéis solares ou geotermia quando parte da casa é reconstruída, num gerador após um corte prolongado de energia por tempestade, e cobertura da perda de rendimento solar e de sistemas alternativos de água.</li>
<li><strong>Fechaduras</strong> substituídas sem limite e sem franquia se as chaves forem perdidas ou furtadas.</li>
<li><strong>Adaptação da casa.</strong> Se um membro da família ficar com uma incapacidade permanente, por doença ou acidente, são pagas as obras que lhe permitem continuar a viver na casa.</li>
</ul>`],
      ['Quando a casa não pode ser habitada', `<p>Depois de um incêndio ou de uma inundação grave, a pergunta que mais importa a uma família é onde vai viver, e durante quanto tempo.</p>
<ul>
<li><strong>Alojamento equivalente</strong> — uma casa do mesmo nível, incluindo espaço para animais e cavalos — durante todo o tempo necessário para tornar a casa habitável, sem franquia e sem limite fixo de tempo para a casa.</li>
<li><strong>Perda de rendas</strong> de qualquer parte arrendada.</li>
<li><strong>Evacuação imposta</strong> pelas autoridades por causa de danos numa propriedade vizinha — incluindo os bens essenciais comprados por a família não poder entrar em casa.</li>
</ul>`],
      ['O recheio, em casa e fora dela', `<ul>
<li><strong>Todos os riscos, em todo o mundo.</strong> O recheio está coberto contra perda e dano acidental onde quer que esteja — dispensa um seguro de bagagem à parte.</li>
<li><strong>Até 25% acima do capital do recheio</strong> se a reposição custar mais do que o previsto, desde que o capital acordado tenha sido mantido.</li>
<li><strong>Novo por velho</strong>, sem dedução por uso.</li>
<li><strong>Bens de hóspedes e do pessoal</strong> na residência incluídos.</li>
<li><strong>Bens recém-adquiridos</strong> cobertos automaticamente durante 90 dias, até um quarto do capital do recheio.</li>
<li><strong>Eventos em casa:</strong> custos de cancelamento de uma celebração privada e tendas alugadas.</li>
<li><strong>Para a família:</strong> propinas e residência de estudantes perdidas após acidente ou doença prolongada, apoio em caso de cyberbullying, carrinhos de golfe e moto-4 usados na propriedade.</li>
</ul>
<p>Um ponto exige atenção: o recheio não especificado tem limites especiais para dinheiro, joias e relógios, pratas, coleções, armas e vinho. Tudo o que tem valor nessas categorias deve ser especificado como objeto de valor, por valor acordado.</p>`],
      ['O próprio sinistro', `<ul>
<li><strong>Franquia dispensada nos grandes sinistros.</strong> A franquia base não se aplica a nenhum sinistro coberto acima de 10 000 € — precisamente quando mais pesaria.</li>
<li><strong>Indemnização à sua escolha.</strong> Pagamento em dinheiro ou reparação pelos fornecedores e artesãos que escolher, sem penalização por nenhuma das opções.</li>
<li><strong>Reparações urgentes</strong> para proteger a casa pagas para além do capital.</li>
<li><strong>Bens retirados</strong> da casa para os proteger continuam cobertos onde estiverem.</li>
<li><strong>Gestão de sinistros</strong> feita pela própria seguradora, com a vistoria já no processo — o que torna a regularização rápida.</li>
</ul>`],
      ['Responsabilidade civil e família', `<p>O mesmo contrato inclui normalmente responsabilidade civil familiar em todo o mundo, com capitais de vários milhões de euros e custos de defesa para além do capital, e uma secção de proteção familiar para riscos que acompanham as pessoas e não os edifícios — despesas com rapto, carjacking, assalto à residência, perseguição, rapto de menores. Tratamo-los num artigo próprio sobre a <a href="/blog/protecao-familiar-seguro-habitacao/">proteção familiar no seguro de habitação</a>.</p>`],
    ],
    checklist: [
      'O custo de reconstrução foi fixado por vistoria e as recomendações foram aceites?',
      'A regra proporcional está expressamente afastada na sua apólice?',
      'Muros, piscina, anexos e jardins estão cobertos em proporção da casa — ou reduzidos a um valor simbólico?',
      'O alojamento alternativo está limitado a poucos meses ou a um montante fixo?',
      'A franquia é dispensada nos grandes sinistros e pode escolher entre dinheiro e os seus próprios artesãos?',
      'Joias, relógios, pratas e vinho estão especificados como objetos de valor ou ficaram dentro dos limites do recheio?',
    ],
    closing: `<p>A Adler &amp; Rochefort é agente de seguros registado na ASF, com sede em Lisboa, e coloca seguros de habitação Private Clients para casas em Portugal e em Espanha. Lemos a sua apólice atual à luz desta lista e respondemos por escrito, cláusula a cláusula. Veja também <a href="/blog/seguro-casa-elevado-valor-o-que-declarar/">o que tem de comunicar à seguradora</a> e a página de <a href="/private-clients/">Private Clients</a>.</p>`,
    faq: [
      ['O que é a reconstrução garantida?', 'A garantia de que, após uma perda total, a casa é reconstruída mesmo que o custo ultrapasse o capital do edifício. Aplica-se quando os capitais recomendados pela vistoria da seguradora foram aceites.'],
      ['A regra proporcional aplica-se a um seguro de casa de elevado valor?', 'Não nas condições Private Clients que colocamos: a regra do subseguro do artigo 134.º da Lei do Contrato de Seguro é expressamente afastada, e um sinistro parcial é pago por inteiro.'],
      ['Durante quanto tempo é pago o alojamento alternativo?', 'Para a casa, durante todo o tempo necessário para a tornar habitável, em alojamento equivalente e sem franquia. Os seguros correntes limitam-no habitualmente a poucos meses ou a um montante fixo.'],
      ['Posso escolher o meu empreiteiro ou restaurador?', 'Sim. Pode receber a indemnização em dinheiro ou mandar reparar pelos fornecedores e artesãos que escolher, sem penalização.'],
      ['Há franquia num sinistro grande?', 'A franquia base é dispensada em qualquer sinistro coberto acima de 10 000 €. As franquias especiais, como a de casa desocupada ou a de aluimento, continuam a aplicar-se.'],
    ],
    related: [
      ['/blog/valores-segurados-desatualizados/', 'Private Clients', 'Valores seguros desatualizados'],
      ['/seguros/habitacao/valor-reconstrucao/', 'Habitação', 'Valor de reconstrução'],
      ['/blog/arte-joias-alem-do-valor-acordado/', 'Arte e joias', 'Arte e joias para além do valor acordado'],
      ['/private-clients/', 'Private Clients', 'Private Clients — Portugal e Espanha'],
    ],
  },
  {
    key: 'art-beyond',
    group: 'art-beyond',
    slug: 'arte-joias-alem-do-valor-acordado',
    tag: 'Arte e Coleções',
    title: 'Arte e joias para além do valor acordado: subavaliação, título defeituoso, encomendas e empréstimos',
    metaTitle: 'Seguro de arte e joias para além do valor acordado',
    description: 'O valor acordado é o começo. O que paga um seguro Private Clients quando uma obra estava subavaliada, tem um problema de título, está por concluir ou está emprestada.',
    excerpt: 'O valor acordado resolve a pergunta óbvia. Estas são as menos óbvias que um colecionador encontra: um mercado que subiu, um título contestado, uma encomenda em curso, um empréstimo a um museu.',
    keywords: 'seguro de arte portugal, seguro obras de arte, valor acordado arte, título defeituoso seguro, seguro empréstimo obra de arte, seguro joias portugal, seguro coleção subavaliação',
    whatsapp: 'Olá, li o vosso artigo sobre seguros de arte e joias e gostaria que analisassem a minha coleção.',
    ctaHref: pc('arte-joias-alem-do-valor-acordado'),
    ctaTop: 'Peça uma análise por escrito do seguro da sua coleção',
    ctaMeio: {
      title: 'Quando foi avaliada a sua coleção pela última vez?',
      desc: 'A data da avaliação decide quanto está protegido se o mercado subiu. Fale connosco pelo WhatsApp.',
    },
    ctaFinal: {
      title: 'A sua coleção merece um parecer por escrito',
      text: 'Envie-nos a lista, as datas das avaliações e a apólice atual. Respondemos por escrito com o que pagaria hoje.',
    },
    intro: `<p>Qualquer colecionador conhece a primeira regra: especificar as peças importantes por <strong>valor acordado</strong>, fixado contra uma avaliação, para que uma perda total pague esse valor sem discussão sobre depreciação. As condições Private Clients que colocamos vão mais longe — e é nessa parte que os colecionadores mais se surpreendem, pela positiva, se a lista estiver atualizada.</p>`,
    body: [
      ['Quando o mercado sobe: proteção contra a subavaliação', `<p>O mercado da arte mexe-se mais depressa do que as datas de renovação. Um quadro especificado por um valor fixado há cinco anos pode valer muito mais no dia em que se perde.</p>
<ul>
<li><strong>Obras de arte:</strong> se uma obra especificada valer mais do que o capital seguro e tiver sido avaliada por um profissional nos cinco anos anteriores ao sinistro, a apólice paga o valor de mercado até ao dobro do capital — com um acréscimo máximo de 5 milhões de euros.</li>
<li><strong>Joias, relógios e outros objetos de valor:</strong> o mesmo princípio, com uma janela de avaliação de dois anos, até ao capital total da categoria.</li>
</ul>
<p>A lição é simples: a data do certificado de avaliação faz parte da cobertura. Reavalie a arte pelo menos de cinco em cinco anos, e as joias e relógios de dois em dois.</p>`],
      ['Dano parcial e desvalorização', `<p>Uma obra danificada pode muitas vezes ser restaurada, mas raramente recupera todo o valor de mercado. A apólice paga o restauro, sem dedução por uso, <strong>e a desvalorização que fica depois dele</strong>, medida em percentagem. Nos pares e conjuntos de arte e joalharia — um brinco, uma de duas jarras — pode entregar a peça que sobra e ser indemnizado pelo conjunto inteiro.</p>`],
      ['Título defeituoso', `<p>A proveniência é o ponto cego do colecionador. Se um terceiro alegar que uma obra especificada, comprada durante o seguro, foi furtada, espoliada ou nunca vendida legitimamente, a apólice paga os custos jurídicos da defesa e, se a reclamação vingar, a perda da obra — até um montante anual definido. A cobertura não se aplica quando o problema era conhecido ou podia ter sido descoberto com uma verificação razoável da proveniência antes da compra; mais uma razão para guardar o dossiê de proveniência com a fatura.</p>`],
      ['Encomendas, empréstimos e novas aquisições', `<ul>
<li><strong>Obras em curso.</strong> Um quadro, uma escultura ou uma joia encomendada que se danifique antes de concluída — ou fique por acabar por morte do artista — está coberta pelos materiais e mão de obra pagos ou contratados.</li>
<li><strong>Obras emprestadas a si:</strong> cobertas durante os primeiros sete dias do empréstimo.</li>
<li><strong>As suas obras emprestadas</strong> a um museu ou exposição continuam cobertas. Informe a seguradora antes de o empréstimo começar.</li>
<li><strong>Novas aquisições</strong> numa categoria que já tem especificada ficam cobertas automaticamente durante 90 dias, até um quarto do capital da categoria; declare-as dentro desse prazo.</li>
<li><strong>Furto por um empregado doméstico</strong> está coberto; a apropriação dentro da família não.</li>
</ul>`],
      ['O que a cobertura não especificada não faz', `<p>As peças não especificadas estão sujeitas a limites por objeto e, dentro do recheio, a limites especiais para joias, relógios, pratas, coleções e vinho. Uma coleção de relógios ou uma garrafeira deixada dentro do limite do recheio está subsegurada por definição. Se uma peça importa, deve estar na lista.</p>
<p>Exclusões a ter presentes: danos durante a limpeza, o restauro ou a mudança de moldura, deterioração gradual e ação da luz, pragas e — em selos, moedas e colecionáveis — desbotamento, vincos e temperaturas extremas. As condições de conservação fazem parte do risco.</p>`],
    ],
    checklist: [
      'Todas as peças importantes especificadas por valor acordado.',
      'Arte avaliada há menos de cinco anos; joias e relógios há menos de dois.',
      'Dossiê de proveniência guardado com a fatura de cada compra.',
      'Encomendas em curso e empréstimos declarados antes de começarem.',
      'Novas aquisições declaradas em 90 dias.',
      'Joias guardadas em cofre ou em banco quando a apólice o exige.',
    ],
    closing: `<p>A Adler &amp; Rochefort coloca seguros Private Clients para arte, joias e coleções em Portugal e em Espanha. Revemos a lista, as datas das avaliações e as condições de guarda, e dizemos por escrito o que a apólice pagaria hoje. Veja também <a href="/blog/seguro-casa-elevado-valor-condicoes/">as condições do seguro de casa de elevado valor</a> e a página de <a href="/private-clients/">Private Clients</a>.</p>`,
    faq: [
      ['E se o meu quadro valer mais do que o capital seguro?', 'Se tiver sido avaliado por um profissional nos cinco anos anteriores ao sinistro, a apólice paga o valor de mercado até ao dobro do capital, com um acréscimo máximo de 5 milhões de euros. Sem avaliação recente, o valor acordado é o limite.'],
      ['O que é a cobertura de título defeituoso?', 'Cobre os custos jurídicos de defesa perante quem alegue que não é o legítimo proprietário de uma obra especificada, e a perda da obra se essa reclamação vingar, com limite anual e desde que tenha feito uma verificação razoável da proveniência.'],
      ['Uma obra encomendada está segura antes de ser entregue?', 'Sim, pelos materiais e mão de obra contratados, se se danificar antes de concluída ou não puder ser terminada por morte do artista.'],
      ['As minhas obras estão seguras quando emprestadas a um museu?', 'Sim, desde que a seguradora seja informada antes de o empréstimo começar.'],
    ],
    related: [
      ['/blog/seguro-casa-elevado-valor-condicoes/', 'Private Clients', 'Seguro de casa de elevado valor: as condições'],
      ['/blog/valores-segurados-desatualizados/', 'Private Clients', 'Valores seguros desatualizados'],
      ['/blog/seguros-private-clients-portugal/', 'Private Clients', 'Private clients: patrimónios com riscos complexos'],
      ['/private-clients/', 'Private Clients', 'Private Clients — Portugal e Espanha'],
    ],
  },
  {
    key: 'family-protection',
    group: 'family-protection',
    slug: 'protecao-familiar-seguro-habitacao',
    tag: 'Private Clients',
    title: 'Proteção familiar no seguro de habitação: carjacking, assalto à residência, perseguição e despesas com rapto',
    metaTitle: 'Proteção familiar no seguro de habitação de elevado valor',
    description: 'Carjacking, assalto à residência, perseguição, rapto de menores, cyberbullying e despesas com rapto: a proteção familiar dentro de um seguro de habitação Private Clients.',
    excerpt: 'Alguns dos riscos de uma família com património nada têm a ver com o edifício. Os melhores seguros de habitação cobrem-nos na mesma — o que faz essa cobertura e onde estão os seus limites.',
    keywords: 'proteção familiar seguro, seguro carjacking, seguro assalto residência, seguro perseguição stalking, seguro rapto de menores, despesas com rapto seguro portugal, seguro cyberbullying, seguro famílias alto património',
    whatsapp: 'Olá, li o vosso artigo sobre proteção familiar e gostaria de uma análise discreta das coberturas da minha família.',
    ctaHref: pc('protecao-familiar-seguro-habitacao'),
    ctaTop: 'Peça uma análise por escrito da proteção da sua família',
    ctaMeio: {
      title: 'A sua família está segura, ou só a sua casa?',
      desc: 'Fale com um agente de seguros pelo WhatsApp, com total discrição.',
    },
    ctaFinal: {
      title: 'Uma análise discreta, por escrito',
      text: 'Envie-nos as apólices de habitação e de responsabilidade civil atuais. Dizemos por escrito o que falta.',
    },
    intro: `<p>Um seguro de habitação corrente segura um edifício e o seu recheio. Os riscos que tiram o sono a uma família com património são outros: um carro levado num semáforo com uma criança no banco de trás, um assalto com a família em casa, um antigo funcionário que não desiste, uma ameaça que chega por telefone. Nas condições Private Clients que colocamos, estes riscos fazem parte do mesmo contrato da casa, numa secção chamada <strong>proteção familiar</strong>.</p>`,
    body: [
      ['O que cobre a proteção familiar', `<ul>
<li><strong>Carjacking</strong> — a retirada ou retenção forçada de um membro da família durante o roubo, ou tentativa de roubo, de um automóvel.</li>
<li><strong>Assalto à residência</strong> — violência ou ameaça de violência por um intruso dentro da casa, de uma residência temporária, de um barco ou de uma autocaravana, com a família ou convidados presentes.</li>
<li><strong>Agressão agravada</strong> — roubo ou tentativa de roubo com violência fora de casa.</li>
<li><strong>Perseguição</strong> — atos repetidos contra a família por alguém que já é objeto de uma ordem judicial de proteção.</li>
<li><strong>Rapto de menores</strong> de idade inferior a 13 anos.</li>
<li><strong>Sequestro</strong> — um membro da família retido à força durante mais de quatro horas a bordo de um avião, barco ou comboio comercial.</li>
<li><strong>Air rage e road rage</strong> — agressão a bordo de um avião ou num incidente de trânsito.</li>
</ul>
<p>Consoante o caso, a apólice paga despesas médicas, apoio psiquiátrico e psicológico, repouso e recuperação, consultores e vigilantes de segurança, reforço da segurança da casa, deslocação temporária e um capital por invalidez permanente ou morte. A cobertura é mundial, exceto nos países com aviso de viagem do Ministério dos Negócios Estrangeiros à data do evento.</p>`],
      ['Rapto: o que a lei portuguesa permite', `<p>A lei portuguesa (artigo 14.º do Decreto-Lei 72/2008) proíbe segurar o próprio risco de rapto. O que uma apólice pode fazer — e as condições que colocamos fazem — é pagar as <strong>despesas com o rapto</strong>: negociador profissional, consultores de segurança e de comunicação, vigilantes, deslocações e alojamento da família, comunicações, custos jurídicos, cuidados médicos e psicológicos da pessoa libertada, rendimentos perdidos e uma recompensa por informações que levem a uma detenção. Para famílias com exposição real — viagens frequentes a países de risco, perfil público, negócios no estrangeiro — um <a href="/blog/family-office-rapto-extorsao/">seguro de rapto e extorsão</a> próprio acrescenta consultores de gestão de crise desde o primeiro contacto.</p>`],
      ['Cyberbullying e reputação', `<p>Quando um membro da família é assediado, ameaçado ou difamado online pela mesma pessoa ou grupo em mais de três ocasiões, e daí resulta um despedimento, uma detenção injusta, um processo disciplinar escolar ou mais de uma semana sem ir à escola ou ao trabalho, a apólice paga um consultor de comunicação, um perito forense digital, um consultor de cibersegurança e um serviço de gestão da reputação online, além de salários perdidos e deslocação temporária, dentro de limites definidos.</p>`],
      ['A responsabilidade civil à volta', `<p>O mesmo seguro inclui responsabilidade civil familiar em todo o mundo, com capitais até 10 milhões de euros e custos de defesa para além do capital. Alguns pormenores merecem ser conhecidos:</p>
<ul>
<li><strong>Golfe:</strong> danos em bens de terceiros pagos independentemente de culpa, um capital de acidentes pessoais e até uma verba para o «hole in one».</li>
<li><strong>Equipamentos infantis</strong> — trampolins, insufláveis — e <strong>carrinhos de golfe e moto-4</strong> usados na propriedade.</li>
<li><strong>Pessoal doméstico</strong> acidentado por culpa do empregador, para além do seguro obrigatório de acidentes de trabalho.</li>
<li><strong>Cartões de crédito, cheques falsificados e notas falsas.</strong></li>
<li><strong>Uma residência arrendada</strong> e pequenas atividades acessórias em casa.</li>
</ul>
<p>As exclusões contam tanto quanto as coberturas: embarcações de 26 pés ou mais, ou com mais de 50 cv, precisam de seguro próprio, tal como cargos de administração remunerados (D&amp;O), atividades profissionais e cães classificados como perigosos.</p>`],
    ],
    checklist: [
      'O seu seguro de habitação tem uma secção de proteção familiar?',
      'Carjacking, assalto à residência e perseguição estão cobertos para todos os membros da família?',
      'O capital de responsabilidade civil é proporcional ao património, com custos de defesa à parte?',
      'Embarcações, cargos de administração e atividades profissionais estão seguros noutro contrato?',
      'Se a família viaja para países de risco, existe um seguro de rapto e extorsão próprio?',
    ],
    closing: `<p>A Adler &amp; Rochefort coloca seguros de habitação Private Clients com proteção familiar, e seguros de rapto, resgate e extorsão, para famílias em Portugal e em Espanha. Analisamos o que tem, com discrição e por escrito. Veja também <a href="/blog/seguro-casa-elevado-valor-condicoes/">as condições do seguro de casa de elevado valor</a> e a página de <a href="/private-clients/">Private Clients</a>.</p>`,
    faq: [
      ['Um seguro de habitação cobre mesmo o carjacking?', 'Nas condições Private Clients que colocamos, sim: a secção de proteção familiar paga apoio médico e psicológico, repouso e recuperação e um capital por invalidez permanente após um carjacking, entre outros eventos.'],
      ['É possível segurar o rapto em Portugal?', 'O risco de rapto em si não pode ser seguro pela lei portuguesa. As despesas que se seguem a um rapto — negociadores, consultores de segurança, custos jurídicos e médicos, rendimentos perdidos — podem, e estão cobertas nas condições que colocamos.'],
      ['A perseguição está coberta sem ordem judicial?', 'Não. A cobertura aplica-se quando o responsável já é objeto de uma ordem judicial ou providência que proteja a família.'],
      ['Onde se aplica a proteção familiar?', 'Em todo o mundo, exceto nos países com aviso de viagem do Ministério dos Negócios Estrangeiros à data do evento.'],
    ],
    related: [
      ['/blog/family-office-rapto-extorsao/', 'Family Office', 'Rapto e extorsão'],
      ['/blog/seguro-casa-elevado-valor-condicoes/', 'Private Clients', 'Seguro de casa de elevado valor: as condições'],
      ['/blog/family-office-crime-fraude-ciber/', 'Family Office', 'Crime, fraude e risco cibernético'],
      ['/private-clients/', 'Private Clients', 'Private Clients — Portugal e Espanha'],
    ],
  },
  {
    key: 'home-declare',
    group: 'home-declare',
    slug: 'seguro-casa-elevado-valor-o-que-declarar',
    tag: 'Private Clients',
    title: 'O que tem de comunicar à seguradora: as obrigações por trás de um seguro de casa de elevado valor',
    metaTitle: 'Seguro de casa de elevado valor: o que comunicar à seguradora',
    description: 'Arrendamento, obras, meses de casa fechada, empréstimos de arte, alterações de segurança: o que um seguro de casa de elevado valor exige que declare, e o que fazer após um sinistro.',
    excerpt: 'A melhor apólice do mercado pode falhar num sinistro se algo não foi declarado. Uma lista prática do que comunicar, quando, e do que fazer depois de um sinistro.',
    keywords: 'agravamento do risco seguro habitação, o que declarar seguradora, casa desocupada seguro, obras seguro habitação, arrendamento seguro habitação, deveres após sinistro, seguro casa elevado valor',
    whatsapp: 'Olá, li o vosso artigo sobre o que comunicar à seguradora e gostaria de ajuda a rever a minha situação.',
    ctaHref: pc('seguro-casa-elevado-valor-o-que-declarar'),
    ctaTop: 'Vai fazer obras, arrendar ou fechar a casa uns meses?',
    ctaMeio: {
      title: 'Diga-nos antes de acontecer',
      desc: 'Nós comunicamos à seguradora, por escrito, e confirmamos as condições. Fale connosco pelo WhatsApp.',
    },
    ctaFinal: {
      title: 'Nós tratamos das declarações por si',
      text: 'Diga-nos o que vai mudar. Comunicamos à seguradora por escrito e confirmamos-lhe as condições, com registo.',
    },
    intro: `<p>Um seguro de habitação Private Clients é generoso onde o seguro corrente é avaro. Em troca, pede ao proprietário que mantenha a seguradora informada. A maior parte dos sinistros recusados ou reduzidos neste segmento não tem a ver com exclusões; tem a ver com algo que mudou e nunca foi declarado. A Lei do Contrato de Seguro obriga a comunicar o agravamento do risco, e a falta dessa comunicação pode reduzir ou anular uma indemnização. Esta é a lista prática.</p>`,
    body: [
      ['Comunicar antes de acontecer', `<ul>
<li><strong>Alteração da ocupação</strong> — por exemplo, arrendar a casa, de longa ou curta duração.</li>
<li><strong>Alteração do uso</strong> — uma atividade profissional na casa, ou hóspedes pagantes.</li>
<li><strong>Obras</strong> com custo previsto acima de 250 000 €. Danos causados por obras não declaradas podem não estar cobertos, e a seguradora quer normalmente ver o seguro do empreiteiro.</li>
<li><strong>Empréstimo de arte ou objetos de valor</strong> a uma galeria, museu, feira ou exposição.</li>
</ul>`],
      ['Comunicar logo que aconteça', `<ul>
<li>Qualquer deterioração do imóvel, incluindo sinais de assentamento, deslizamento ou empolamento do terreno.</li>
<li>Qualquer alteração das medidas de segurança — um alarme desligado, o contrato com a central de alarmes terminado, um cofre retirado.</li>
<li>Uma mudança relevante de profissão de um membro da família.</li>
<li>Uma acusação ou condenação penal (fora do âmbito rodoviário), ou uma insolvência, de um membro da família.</li>
</ul>
<p>O agravamento do risco deve ser comunicado no prazo de 14 dias; a seguradora pode então propor novas condições.</p>`],
      ['Os meses de casa fechada', `<p>Muitas casas de elevado valor em Portugal e em Espanha são segundas habitações. Duas cláusulas merecem atenção:</p>
<ul>
<li><strong>Casa desocupada.</strong> Se a casa estiver substancialmente vazia de mobília e recheio há mais de 30 dias seguidos e a seguradora não tiver sido avisada, a franquia de um sinistro sobe para 5% do capital seguro.</li>
<li><strong>Canalizações geladas.</strong> Os danos de água gelada em canos ou aparelhos não estão cobertos se a casa estiver desabitada há mais de 60 dias, a menos que tenha sido mantida aquecida ou o sistema esvaziado. Na Serra da Estrela, em Trás-os-Montes ou nos Pirenéus, isto conta.</li>
</ul>
<p>Uma casa habitada parte do ano, mas mobilada, não é uma casa «vazia». A solução é descrever à partida o padrão de utilização e manter o alarme e a vigilância da casa tal como declarados.</p>`],
      ['Depois de um sinistro', `<ul>
<li><strong>Comunique depressa</strong> — a nós e à seguradora — e, em caso de furto, perda acidental ou evento de proteção familiar, também às autoridades.</li>
<li><strong>Proteja o imóvel</strong> de danos adicionais e guarde as faturas das reparações urgentes; as reparações não urgentes precisam de acordo prévio da seguradora.</li>
<li><strong>Guarde os bens danificados</strong> até a seguradora os ver.</li>
<li><strong>Prepare um inventário</strong> com faturas, fotografias e avaliações, e uma declaração de perdas assinada no prazo de 60 dias após o pedido da seguradora.</li>
<li><strong>Comece a reparação em 180 dias</strong> num sinistro parcial; depois disso, a apólice paga o custo de reconstrução com dedução da depreciação. Reconstruir noutro local altera a base de indemnização.</li>
<li><strong>Não assuma responsabilidade</strong> perante terceiros sem o acordo escrito da seguradora.</li>
</ul>`],
      ['Manutenção e as exclusões habituais', `<p>O proprietário deve manter o imóvel em bom estado. Desgaste, deterioração gradual, podridão, bolor, defeitos de projeto ou de construção, erosão costeira ou fluvial, geada e pragas estão excluídos — embora um dano súbito que deles resulte possa continuar coberto. Uma casa sobre a falésia no Algarve ou uma quinta antiga com madeiras originais merece um dossiê de manutenção tanto quanto um alarme.</p>`],
    ],
    checklist: [
      'Arrendamento, hóspedes pagantes ou atividade profissional em casa declarados por escrito.',
      'Obras acima de 250 000 € comunicadas antes de começarem.',
      'Padrão de ocupação descrito e ausências longas comunicadas.',
      'Aquecimento ligado ou água esvaziada quando a casa fica fechada no inverno.',
      'Medidas de segurança iguais às declaradas, ou alterações comunicadas.',
      'Empréstimos de arte ou objetos de valor declarados antes de saírem de casa.',
    ],
    closing: `<p>A Adler &amp; Rochefort trata destas comunicações pelos seus clientes, por escrito, e guarda o registo. Diga-nos o que vai mudar; comunicamos à seguradora e confirmamos-lhe as condições. Veja também <a href="/blog/seguro-casa-elevado-valor-condicoes/">as condições, cláusula a cláusula</a> e a página de <a href="/private-clients/">Private Clients</a>.</p>`,
    faq: [
      ['Tenho de avisar a seguradora se arrendar a casa?', 'Sim. Uma alteração da ocupação, incluindo um arrendamento de curta duração, deve ser declarada antes de acontecer. A seguradora pode ajustar as condições ou o prémio.'],
      ['E se a casa ficar vazia uns meses?', 'Se estiver substancialmente vazia de mobília há mais de 30 dias e a seguradora não tiver sido avisada, a franquia sobe para 5% do capital. Os danos por gelo ficam excluídos ao fim de 60 dias de desocupação, a menos que a casa tenha sido aquecida ou esvaziada.'],
      ['Tenho de declarar obras?', 'As obras com custo previsto acima de 250 000 € têm de ser declaradas antes de começarem; os danos causados por obras não declaradas podem não estar cobertos.'],
      ['Quanto tempo tenho para começar a reparação após um sinistro?', '180 dias num sinistro parcial. Depois disso, a apólice paga o custo de reconstrução com dedução da depreciação.'],
    ],
    related: [
      ['/blog/seguro-casa-elevado-valor-condicoes/', 'Private Clients', 'Seguro de casa de elevado valor: as condições'],
      ['/blog/multirriscos-habitacao/', 'Habitação', 'Multirriscos habitação'],
      ['/blog/valores-segurados-desatualizados/', 'Private Clients', 'Valores seguros desatualizados'],
      ['/private-clients/', 'Private Clients', 'Private Clients — Portugal e Espanha'],
    ],
  },
];
