#!/usr/bin/env python3
"""Builds three Portuguese product pages for private clients, cloning the
chrome, form and scripts of /private-clients/family-offices/:

  /private-clients/arte-joias-relogios/
  /private-clients/automoveis-classicos/
  /seguros/casa-desocupada/

Why (October 2026): AI-search monitoring (HubSpot AEO, PT prompts) showed
0% visibility for art & jewellery, classic cars and unoccupied homes, while
the site only covered these topics in EN/DE or as PT blog articles. These
pages give each topic a PT commercial page with its own form source.

Content is drawn from the site's own EN pages and PT articles on the same
topics, and from conditions stated by the firm. No insurer is attributed a
clause it was not stated to offer; no prices.

Idempotent. Run from the repository root:
  python3 scripts/build-pt-hnw-product-pages.py
then: node scripts/generate-sitemap.mjs
"""
import html
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / "public"
BASE = "https://adlerrochefort.com"
TEMPLATE = PUBLIC / "private-clients/family-offices/index.html"
DATE = "2026-10-16"
WA = "https://wa.me/351928226570?text="
DISCLAIMER = ("A Adler &amp; Rochefort é uma marca comercial da Ownizo, Unipessoal Lda., registada na ASF com o "
              "n.º 425591790/3. Informação geral prestada por um agente de seguros, que não substitui aconselhamento "
              "personalizado; o âmbito de cada apólice depende das respetivas condições e da aceitação do risco pela seguradora.")

PAGES = [
    {
        "path": "/private-clients/arte-joias-relogios/",
        "slug": "arte-joias-relogios",
        "area": ["Portugal", "Spain"],
        "en": "/en/blog/insuring-art-portugal-spain/",
        "de": "/de/blog/kunstversicherung-portugal-spanien/",
        "ramo": "Private Clients",
        "title": "Seguro de Arte, Joias e Relógios · Portugal e Espanha",
        "desc": "Arte, joias e relógios especificados por valor acordado, com cobertura todos os riscos, em casa e em viagem. Parecer por escrito de um agente de seguros registado na ASF.",
        "crumbs": [("Início", "/"), ("Private Clients", "/private-clients/"), ("Arte, joias e relógios", None)],
        "h1": "Arte, joias <em>e relógios</em>",
        "h1_plain": "Seguro de arte, joias e relógios",
        "lead": "Seguro para coleções de arte, joias e relógios em Portugal e em Espanha. O seguro de recheio corrente limita o que paga por objeto e por categoria; acima desses limites, a peça simplesmente não está segura. Especificamos as peças que importam por valor acordado, numa apólice todos os riscos, e dizemos por escrito o que pagaria hoje.",
        "wa": "Olá, gostaria de falar sobre o seguro de arte, joias ou relógios.",
        "form_title": "Falar sobre a sua coleção",
        "options": ["Obras de arte", "Joias", "Relógios", "Peças usadas em viagem", "Empréstimos a museus ou exposições", "Ainda não sei — quero falar com um agente de seguros"],
        "sections": [
            ("O limite por objeto decide tudo", """<p>Um multirriscos habitação indica um capital total de recheio e, nas condições particulares, limita o que paga por cada objeto. Esse limite situa-se muitas vezes entre <strong>1.500 € e 5.000 €</strong>. Acima dele, o excesso não está seguro, por maior que seja o capital do recheio.</p>
  <p>Há ainda um segundo limite: os objetos de valor no seu conjunto ficam muitas vezes restritos a <strong>20% a 25% do capital do recheio</strong>. Os dois limites aplicam-se ao mesmo tempo, e vale o mais baixo. A única forma de sair deles é especificar a peça, com descrição e valor próprios.</p>"""),
            ("Valor acordado, não valor apurado depois do sinistro", """<p>Uma peça especificada por <strong>valor acordado</strong> tem o valor fixado no início do contrato, com base numa avaliação. Numa perda total — furto sem recuperação, destruição — é esse o valor pago, sem discussão sobre depreciação.</p>
  <p>Nas condições Private Clients que colocamos, a proteção vai mais longe quando o mercado sobe:</p>
  <ul class="lp-list">
    <li><strong>Obras de arte:</strong> se uma obra especificada valer mais do que o capital seguro e tiver sido avaliada por um profissional nos cinco anos anteriores ao sinistro, a apólice paga o valor de mercado até ao dobro do capital, com um acréscimo máximo de 5 milhões de euros.</li>
    <li><strong>Joias, relógios e outros objetos de valor:</strong> o mesmo princípio, com uma janela de avaliação de dois anos, até ao capital total da categoria.</li>
  </ul>
  <p>A data do certificado de avaliação faz parte da cobertura: arte reavaliada pelo menos de cinco em cinco anos, joias e relógios de dois em dois.</p>"""),
            ("Dano parcial: restauro e desvalorização", """<p>Uma obra danificada pode ser restaurada, mas raramente recupera todo o valor. Uma boa secção de arte paga o restauro por um conservador aceite pelas duas partes e paga também a <strong>desvalorização que fica depois do restauro</strong>. Um recheio corrente paga a fatura da reparação e dá o assunto por encerrado.</p>
  <p>Nos <strong>pares e conjuntos</strong> — um brinco, uma de duas jarras, um conjunto de joalharia — a perda de uma peça não reduz o valor do conjunto a metade. As condições que colocamos permitem entregar a peça que sobra e ser indemnizado pelo conjunto inteiro.</p>"""),
            ("Perda, furto e dano acidental", """<p>A cobertura por riscos nomeados responde ao furto e, em muitas apólices portuguesas, só ao furto com arrombamento ou violência. Não responde à perda: a pedra que sai do engaste, o anel que cai num ralo, o relógio esquecido no quarto de hotel. A cobertura <strong>todos os riscos</strong> responde.</p>
  <p>As peças especificadas podem ter cobertura em todo o mundo. Leia as condições: em viagem, as peças seguem normalmente na bagagem de mão; no hotel, a cobertura pode depender do uso do cofre; e algumas apólices excluem objetos deixados num veículo.</p>"""),
            ("Cofre, alarme e outras condições de guarda", """<p>Acima de certos valores, a apólice impõe condições de segurança — e são condições, não recomendações. Se não estavam cumpridas no momento do sinistro, a indemnização falha, seja qual for o valor acordado. É habitual pedir-se um cofre com classificação europeia, ancorado; que as peças acima de um certo valor fiquem no cofre quando não são usadas ou quando a casa fica vazia de noite; e um alarme de grau definido, por vezes ligado a central.</p>
  <p>Combinamos consigo condições que a casa consegue cumprir na prática, em vez de condições aceites no início e esquecidas depois.</p>"""),
            ("Título, encomendas, empréstimos e novas aquisições", """<ul class="lp-list">
    <li><strong>Título defeituoso:</strong> se um terceiro reclamar uma obra especificada comprada durante o seguro, a apólice paga os custos de defesa e, se a reclamação vingar, a perda da obra, até um montante anual definido. Não se aplica quando o problema era conhecido ou detetável com uma verificação razoável da proveniência.</li>
    <li><strong>Obras encomendadas:</strong> uma peça danificada antes de concluída fica coberta pelos materiais e mão de obra pagos ou contratados.</li>
    <li><strong>Empréstimos:</strong> obras emprestadas a si estão cobertas nos primeiros sete dias; as suas obras emprestadas a um museu continuam cobertas, desde que a seguradora seja informada antes.</li>
    <li><strong>Novas aquisições:</strong> cobertas automaticamente durante 90 dias, até um quarto do capital da categoria; declare-as dentro desse prazo.</li>
  </ul>
  <p>Exclusões a ter presentes: danos durante limpeza, restauro ou mudança de moldura, deterioração gradual, ação da luz e pragas.</p>"""),
            ("Portugal e Espanha", """<p>As regras de especificação, valor acordado e todos os riscos funcionam da mesma forma nos dois países, e as condições Private Clients que colocamos cobrem peças guardadas em qualquer um deles. Três diferenças:</p>
  <ul class="lp-list">
    <li><strong>Catástrofes:</strong> em Espanha, sismos, inundações extraordinárias e tempestades atípicas são indemnizados pelo <em>Consorcio de Compensación de Seguros</em>, a partir dos capitais da apólice. Em Portugal, o sismo é uma cobertura opcional que, para uma coleção, convém contratar.</li>
    <li><strong>Furto sem violência:</strong> as apólices distinguem roubo de furto (em Espanha, <em>robo</em> e <em>hurto</em>). A cobertura corrente responde ao primeiro e limita ou exclui o segundo, sobretudo fora de casa.</li>
    <li><strong>Saída de obras:</strong> obras antigas podem precisar de autorização de exportação ao abrigo da lei do património, em Portugal como em Espanha, antes de seguirem para um restaurador ou outra casa. O tempo de espera tem de estar coberto.</li>
  </ul>"""),
            ("O que precisamos para preparar o parecer", """<ul class="lp-list">
    <li>A lista das peças que importam, com descrição: autor, técnica e dimensões; marca, modelo e referência nos relógios; metal, pedras e certificados nas joias.</li>
    <li>As avaliações que tiver, com data.</li>
    <li>Onde estão guardadas e que segurança existe (cofre, alarme).</li>
    <li>A apólice atual, se houver.</li>
  </ul>
  <p>Respondemos por escrito: o que a apólice atual pagaria hoje, onde fica aquém e as opções colocadas junto de seguradoras especializadas.</p>"""),
        ],
        "faq": [
            ("Onde encontro o limite por objeto na minha apólice?", "Nas condições particulares, normalmente em «objetos de valor» ou «bens de valor especial». Há dois números: uma percentagem do capital do recheio para a categoria e um valor máximo por objeto. Ambos se aplicam e vale o mais baixo."),
            ("Uma joia tem de estar sempre no cofre?", "Não, mas a apólice diz quando tem de estar. É habitual exigir que as peças acima de um certo valor fiquem num cofre classificado sempre que não são usadas, ou sempre que a casa fica vazia de noite."),
            ("O seguro paga o restauro ou o valor da obra?", "Uma secção de arte bem construída paga as duas coisas: o custo do restauro e a desvalorização que fica depois dele. Numa perda total, paga o valor acordado."),
            ("De quanto em quanto tempo devo reavaliar a coleção?", "Arte pelo menos de cinco em cinco anos; joias e relógios de dois em dois. Nas condições que colocamos, a data da avaliação decide se a proteção contra a subavaliação se aplica."),
            ("Posso segurar peças que estão em Portugal e em Espanha na mesma apólice?", "Nas condições Private Clients que colocamos, sim: as peças podem estar guardadas em qualquer um dos dois países, com o mesmo interlocutor."),
        ],
        "related": [
            ("/blog/arte-joias-alem-do-valor-acordado/", "Arte e joias para além do valor acordado"),
            ("/blog/seguro-casa-elevado-valor-o-que-declarar/", "Casa de elevado valor: o que declarar"),
            ("/private-clients/", "Private Clients — Portugal e Espanha"),
        ],
        "cta_title": "Pedir parecer<br><em>sobre a sua coleção</em>",
        "cta_sub": "Envie a lista das peças, as datas das avaliações e a apólice atual. Respondemos por escrito com o que pagaria hoje. Resposta em 24 horas úteis.",
    },
    {
        "path": "/private-clients/automoveis-classicos/",
        "slug": "automoveis-classicos",
        "en": "/en/blog/classic-collector-cars-portugal-matriculation-agreed-value/",
        "de": "/de/blog/oldtimer-luxusauto-versicherung-portugal-spanien/",
        "ramo": "Private Clients",
        "title": "Seguro de Automóveis Clássicos e de Coleção em Portugal",
        "desc": "Automóveis clássicos e de coleção com valor acordado, RC automóvel até 50 milhões de euros e danos próprios no mercado Lloyd's. Agente de seguros registado na ASF.",
        "crumbs": [("Início", "/"), ("Private Clients", "/private-clients/"), ("Automóveis clássicos", None)],
        "h1": "Automóveis <em>clássicos e de coleção</em>",
        "h1_plain": "Seguro de automóveis clássicos e de coleção",
        "lead": "Seguro para automóveis clássicos e de coleção em Portugal. Uma apólice automóvel corrente paga o valor venal depois de uma perda total e pressupõe uma utilização diária. Um clássico precisa de valor acordado, de uma utilização limitada bem definida e de reparadores especializados.",
        "wa": "Olá, gostaria de falar sobre o seguro de um automóvel clássico ou de coleção.",
        "form_title": "Falar sobre os seus automóveis",
        "options": ["Um automóvel clássico", "Uma coleção de automóveis", "Automóvel moderno de elevado valor", "Automóvel ainda com matrícula estrangeira", "Ainda não sei — quero falar com um agente de seguros"],
        "sections": [
            ("Como funciona a solução que colocamos", """<p>Para automóveis clássicos e de coleção, colocamos uma solução em duas partes:</p>
  <ul class="lp-list">
    <li><strong>Responsabilidade civil automóvel</strong>, obrigatória para cada veículo, com capital até <strong>50 milhões de euros</strong>. É contratada em separado, por veículo.</li>
    <li><strong>Seguro complementar de danos próprios</strong> — o Seguro de Automóveis de Coleção do mercado Lloyd's, através da Innovarisk — que cobre o automóvel por valor acordado.</li>
  </ul>
  <p>Condições principais desta solução: o automóvel tem de ter <strong>matrícula portuguesa</strong> (não precisa de estar registado como histórico) e a utilização está limitada a <strong>3.000 km por ano</strong> por veículo.</p>"""),
            ("Valor acordado, não valor venal", """<p>Numa apólice corrente, o valor de uma perda total é fixado depois do sinistro, pela seguradora, e num clássico é quase sempre baixo. Com <strong>valor acordado</strong>, o valor é fixado no início do contrato, com base numa avaliação recente, fotografias e documentação. Numa perda total, é esse o valor pago.</p>
  <p>Servem de prova de valor: uma avaliação escrita de um especialista da marca, de uma leiloeira ou de um avaliador reconhecido; as faturas e o registo fotográfico do restauro; resultados recentes de leilão do mesmo modelo; a fatura de compra, se for recente. Os valores dos bons clássicos mudam — o valor acordado deve ser revisto de poucos em poucos anos e depois de qualquer restauro.</p>"""),
            ("Utilização limitada e garagem", """<p>A maioria dos clássicos sai num fim de semana seco, para um encontro de clube ou um passeio de verão, e passa o resto do ano na garagem. Uma apólice de utilização limitada cobra pela utilização real. Em troca, as seguradoras esperam normalmente que exista outro automóvel para o dia a dia e que o clássico fique numa garagem fechada.</p>
  <p>Ralis de regularidade e passeios de clube em estrada aberta são normalmente seguráveis. A competição cronometrada e os dias em circuito estão, em regra, excluídos e precisam de um seguro específico.</p>"""),
            ("Matrícula portuguesa e certificação de veículo histórico", """<p>Um automóvel que chega a Portugal com matrícula estrangeira tem de ser legalizado no IMT, com inspeção e os impostos aplicáveis. Só depois pode ter uma apólice portuguesa — e a solução de coleção que colocamos exige matrícula portuguesa. Enquanto o carro está guardado ou em transporte, a cobertura pode ser tratada à parte.</p>
  <p>Um automóvel com pelo menos trinta anos, fora de produção e sem alterações significativas pode ser certificado como <strong>veículo de interesse histórico</strong> por entidades reconhecidas, como o ACP Clássicos, o Clube Português de Automóveis Antigos ou o Museu do Caramulo. A certificação não é exigida pela solução que colocamos, mas é uma boa prova de originalidade e de estado, que ajuda a fixar o valor.</p>"""),
            ("Automóveis modernos de elevado valor", """<p>Num superdesportivo ou num automóvel moderno de elevado valor, as perguntas são outras: se a apólice paga valor em novo nos primeiros anos, como trata os opcionais e a personalização, se as reparações são feitas com peças originais numa oficina da marca e como responde ao furto sem chave. Para estes automóveis colocamos também um produto da Liberty, através da Innovarisk, que só é subscrito em conjunto com o seguro multirriscos da habitação.</p>"""),
            ("O que precisamos para preparar o parecer", """<ul class="lp-list">
    <li>Marca, modelo, ano e matrícula de cada automóvel.</li>
    <li>Prova de valor: avaliação, faturas de restauro ou resultados de leilão comparáveis.</li>
    <li>Onde o automóvel está guardado e que segurança existe.</li>
    <li>Quantos quilómetros faz por ano e se há outro automóvel para o dia a dia.</li>
    <li>A apólice atual, se houver.</li>
  </ul>
  <p>Respondemos por escrito: o que a apólice atual pagaria hoje numa perda total, onde fica aquém e a proposta.</p>"""),
        ],
        "faq": [
            ("O automóvel tem de estar registado como clássico?", "Na solução de coleção que colocamos, não. Tem de ter matrícula portuguesa e uma utilização até 3.000 km por ano."),
            ("O seguro de clássicos inclui responsabilidade civil?", "Não. O seguro de automóveis de coleção cobre danos próprios por valor acordado. Cada veículo tem de ter a sua responsabilidade civil automóvel, que tratamos em separado, com capital até 50 milhões de euros."),
            ("Posso segurar um clássico que ainda tem matrícula estrangeira?", "Uma seguradora portuguesa não emite apólice contra uma matrícula que não consegue verificar. Até à legalização no IMT, o automóvel circula ao abrigo do seguro do país de matrícula; a cobertura enquanto está guardado ou em transporte pode ser tratada à parte."),
            ("O que acontece se ultrapassar os quilómetros acordados?", "Informe antes de acontecer, não na renovação. A quilometragem limitada é uma condição da tarifa."),
            ("Track days estão cobertos?", "Não. Os dias em circuito estão excluídos das apólices de estrada e precisam de um seguro específico para esse dia."),
        ],
        "related": [
            ("/blog/seguro-carros-classicos-alto-valor-portugal-espanha/", "Automóveis clássicos e de elevado valor em Portugal e Espanha"),
            ("/seguros/auto/", "Seguro automóvel"),
            ("/private-clients/", "Private Clients — Portugal e Espanha"),
        ],
        "cta_title": "Pedir parecer<br><em>sobre os seus automóveis</em>",
        "cta_sub": "Envie a lista dos automóveis, as avaliações que tiver e a apólice atual. Respondemos por escrito em 24 horas úteis.",
    },
    {
        "path": "/seguros/casa-desocupada/",
        "slug": "casa-desocupada",
        "en": "/en/unoccupied-home-insurance-portugal/",
        "ramo": "Habitação",
        "title": "Seguro de Casa Desocupada em Portugal | Adler & Rochefort",
        "desc": "Seguro para casas vazias: entre inquilinos, em obras, por herança ou à espera da mudança. O que as seguradoras cobrem, o que limitam e que condições impõem.",
        "crumbs": [("Início", "/"), ("Seguros", "/seguros/"), ("Habitação", "/seguros/habitacao/"), ("Casa desocupada", None)],
        "h1": "Casa <em>desocupada</em>",
        "h1_plain": "Seguro de casa desocupada",
        "lead": "Seguro para casas e apartamentos vazios em Portugal. Uma casa fica vazia por razões normais — obras, herança, intervalo entre inquilinos, compra feita anos antes da mudança. As seguradoras tratam todas estas situações como um risco diferente de uma casa habitada, e a maioria das apólices di-lo algures nas condições.",
        "wa": "Olá, gostaria de falar sobre o seguro de uma casa desocupada.",
        "form_title": "Falar sobre a sua casa",
        "options": ["Entre inquilinos", "Em obras", "Herança por partilhar", "Comprada, à espera da mudança", "À venda", "Proprietário a viver no estrangeiro"],
        "sections": [
            ("Porque é que as seguradoras tratam a casa vazia de outra forma", """<p>Os riscos são os de qualquer casa, sem a pessoa que daria por eles. Uma junta a pingar transforma-se num soalho encharcado; uma telha solta, num teto molhado ao fim de um inverno; um assalto numa rua habitada é interrompido, numa casa vazia é demorado.</p>
  <ul class="lp-list">
    <li><strong>Danos por água:</strong> a principal causa de sinistros em casas vazias e a cobertura mais vezes limitada ou excluída durante a desocupação.</li>
    <li><strong>Furto e vandalismo:</strong> cobre, caldeiras, aparelhos de ar condicionado e painéis solares.</li>
    <li><strong>Deterioração não detetada:</strong> humidade, bolor e podridão, em regra excluídos como causas graduais.</li>
    <li><strong>Tempestades descobertas tarde:</strong> o telhado danificado em janeiro e descoberto em abril.</li>
    <li><strong>Responsabilidade civil:</strong> a telha que cai na rua ou a infiltração no andar de baixo não esperam pela ocupação.</li>
  </ul>"""),
            ("Não há um número de dias igual para todos", """<p>Não existe em Portugal uma regra nacional que diga quando uma casa passa a estar «desocupada». Cada seguradora define-o nas suas condições, com o seu prazo e as suas exigências, e as definições variam de facto de contrato para contrato. Quem lhe disser que a resposta é 30, 60 ou 90 dias está a citar uma seguradora como se fosse uma regra. Lemos as condições da sua apólice e dizemos-lhe o que estabelecem.</p>"""),
            ("O que normalmente se consegue, e o que não", """<div class="lp-grid">
    <div class="lp-card"><h3>Muitas vezes disponível</h3><p>Incêndio, raio e explosão; tempestades e choque de veículos; responsabilidade civil do imóvel; furto, frequentemente com condições de segurança; fenómenos sísmicos, quando a apólice os inclui.</p></div>
    <div class="lp-card"><h3>Muitas vezes limitado</h3><p>Danos por água durante a desocupação; atos de vandalismo; recheio, sobretudo bens portáteis ou de valor; quebra de vidros; franquias mais altas do que numa casa habitada.</p></div>
    <div class="lp-card"><h3>Normalmente condicionado</h3><p>Água cortada e canalização esvaziada; visitas periódicas por uma pessoa identificada, com registo; alarme ligado e mantido; a seguradora informada antes de a desocupação começar.</p></div>
  </div>
  <p>Tudo nesta página é orientação geral. Limites, franquias, condições de desocupação e exclusões variam entre seguradoras e entre apólices; quem decide um sinistro são as condições da sua apólice.</p>"""),
            ("Se a casa está em obras", """<p>Uma apólice de habitação é escrita para um edifício acabado e habitável. Uma obra com empreiteiros, andaimes e telhado aberto é outra coisa. Consoante a dimensão dos trabalhos, a resposta pode ser a apólice de habitação com a obra declarada, ou outro contrato ao lado do seguro do próprio empreiteiro.</p>
  <ul class="lp-list">
    <li><strong>Informe a seguradora antes de a obra começar</strong>, não quando acontece o sinistro.</li>
    <li><strong>Peça o certificado do seguro do empreiteiro</strong>, em vez de se contentar com a garantia verbal.</li>
  </ul>"""),
            ("Passos práticos que mantêm a cobertura", """<ul class="lp-list">
    <li><strong>Corte a água</strong> no contador e esvazie a canalização se a casa ficar vazia no inverno.</li>
    <li><strong>Tenha alguém com a chave</strong>, que possa entrar, verificar e receber o perito.</li>
    <li><strong>Registe as visitas</strong> com data ou fotografia. Se a cobertura depende de visitas, o registo é a prova.</li>
    <li><strong>Não deixe a casa parecer vazia:</strong> correio acumulado, jardim por tratar e estores sempre fechados anunciam-no.</li>
    <li><strong>Mantenha o alarme a funcionar.</strong> Um alarme declarado e desligado há um ano é pior do que nenhum.</li>
    <li><strong>Avise quando a situação muda:</strong> entra um inquilino, a obra acaba, a herança é partilhada.</li>
  </ul>
  <p>Se não tem quem visite a casa no Algarve Ocidental, a <a href="https://guardemar.com" rel="noopener" target="_blank">Guardemar</a>, serviço de acompanhamento e manutenção de casas fundado por Hugo Gonçalves, faz visitas periódicas com registo.</p>"""),
            ("O que precisamos para preparar a proposta", """<ul class="lp-list">
    <li><strong>Porque está vazia:</strong> entre inquilinos, obras, herança, à espera da mudança — as seguradoras respondem de forma diferente a cada caso.</li>
    <li><strong>Durante quanto tempo,</strong> com uma estimativa realista.</li>
    <li><strong>O imóvel:</strong> morada, tipo, área, ano de construção, estado e se está mobilado.</li>
    <li><strong>Segurança e acesso:</strong> fechaduras, estores, alarme e quem tem a chave.</li>
    <li><strong>Serviços:</strong> se a água e a luz estão ligadas e se a canalização foi esvaziada.</li>
  </ul>
  <p>Respondemos em 24 horas úteis, por escrito, com o que está disponível e as condições associadas à desocupação. Quando nenhuma seguradora aceita o imóvel no estado em que está, dizemo-lo claramente.</p>"""),
        ],
        "faq": [
            ("Ao fim de quantos dias uma casa conta como desocupada?", "Não há regra nacional em Portugal. Cada seguradora define o prazo e as condições nas suas apólices, e as definições variam. A resposta que o protege é a que está escrita na sua apólice."),
            ("Os danos por água estão cobertos numa casa vazia?", "Muitas vezes são limitados ou excluídos durante o período de desocupação, ou ficam condicionados ao corte da água e ao esvaziamento da canalização. É o ponto a confirmar primeiro."),
            ("Tenho de avisar a seguradora de que a casa vai ficar vazia?", "Sim, antes de a desocupação começar. Muitas apólices exigem-no, e uma alteração do risco não comunicada pode pôr em causa a indemnização."),
            ("Uma casa herdada e ainda por partilhar pode ser segura?", "Sim. O imóvel continua a precisar de seguro durante a partilha, e é muitas vezes nessa fase que fica vazio mais tempo. Ajudamos a definir quem é o tomador e que condições se aplicam."),
            ("Estou a fazer obras. O meu seguro de casa cobre?", "Depende da dimensão das obras e de terem sido declaradas. Informe a seguradora antes de começarem; nas obras estruturais, a resposta pode ser outro contrato ao lado do seguro do empreiteiro."),
        ],
        "related": [
            ("/seguros/habitacao/", "Seguro multirriscos habitação"),
            ("/blog/seguro-casa-elevado-valor-condicoes/", "Casa de elevado valor: as condições que importam"),
            ("/private-clients/", "Private Clients — Portugal e Espanha"),
        ],
        "cta_title": "Pedir proposta<br><em>para uma casa desocupada</em>",
        "cta_sub": "Diga-nos porque está vazia e durante quanto tempo. Respondemos por escrito em 24 horas úteis.",
    },
]


def esc(s):
    return html.escape(s, quote=True)


def strip_tags(s):
    return re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", s))).strip()


def options_html(opts):
    out = []
    for i, o in enumerate(opts):
        extra = ' aria-describedby="review-label" data-required-group="review"' if i == 0 else ""
        out.append(f'<label for="review-{i}"><input type="checkbox" id="review-{i}" name="review" value="{esc(o)}"{extra}> {esc(o)}</label>')
    return '<div class="lp-check-grid">' + "".join(out) + "</div></div>"


def breadcrumb(page):
    parts = [f'<a href="{u}">{n}</a>' if u else n for n, u in page["crumbs"]]
    return '<nav class="breadcrumb" aria-label="Breadcrumb">' + "<span>&rsaquo;</span>".join(parts) + "</nav>"


def body_sections(page):
    out = []
    for i, (h2, content) in enumerate(page["sections"]):
        style = ' style="background:var(--cream2);max-width:none;"' if i % 2 == 1 else ""
        inner = f"  <h2>{h2}</h2>\n  {content}"
        if style:
            inner = f'  <div style="max-width:1100px;margin:0 auto;">\n{inner}\n  </div>'
        out.append(f'<section class="lp-section"{style}>\n{inner}\n</section>')
    faq = "\n".join(f"    <details><summary>{esc(q)}</summary><p>{esc(a)}</p></details>" for q, a in page["faq"])
    out.append(f'<section class="lp-section" id="faq">\n  <h2>Perguntas frequentes</h2>\n  <div class="lp-faq">\n{faq}\n  </div>\n</section>')
    rel = "\n".join(f'      <li style="margin-bottom:12px;"><a href="{u}" style="color:var(--primary);font-weight:600;">{esc(t)}</a></li>' for u, t in page["related"])
    out.append(f'<section class="lp-section" aria-label="Leitura relacionada">\n  <h2>Leitura relacionada</h2>\n  <ul>\n{rel}\n  </ul>\n</section>')
    out.append(f'<section class="lp-section">\n  <div class="lp-card lp-card--muted"><p class="lp-form-micro">{DISCLAIMER}</p></div>\n</section>')
    return "\n\n".join(out) + "\n\n"


def ld(page):
    url = BASE + page["path"]
    org = {"@type": "InsuranceAgency", "@id": BASE + "/#organization", "name": "Adler & Rochefort", "url": BASE + "/",
           "identifier": {"@type": "PropertyValue", "name": "Registo ASF", "value": "425591790/3"}}
    person = {"@type": "Person", "@id": BASE + "/#hugo-goncalves", "name": "Hugo Gonçalves",
              "jobTitle": "Founder & Risk Management Specialist", "worksFor": {"@id": org["@id"]}}
    service = {"@type": "Service", "@id": url + "#service", "name": page["h1_plain"], "description": page["desc"],
               "url": url, "provider": {"@id": org["@id"]},
               "areaServed": [{"@type": "Country", "name": c} for c in page.get("area", ["Portugal"])]}
    webpage = {"@type": "WebPage", "@id": url + "#webpage", "url": url, "name": page["title"], "description": page["desc"],
               "inLanguage": "pt-PT", "dateModified": DATE, "author": {"@id": person["@id"]}, "reviewedBy": {"@id": person["@id"]},
               "about": {"@id": service["@id"]}}
    crumbs = {"@type": "BreadcrumbList", "itemListElement": [
        {"@type": "ListItem", "position": i + 1, "name": n, "item": BASE + (u or page["path"])} for i, (n, u) in enumerate(page["crumbs"])]}
    faq = {"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in page["faq"]]}
    return {"@context": "https://schema.org", "@graph": [org, person, service, webpage, crumbs, faq]}


def build(page):
    s = TEMPLATE.read_text(encoding="utf-8")
    url = BASE + page["path"]
    title, desc = esc(page["title"]), esc(page["desc"])
    s = re.sub(r"<title>.*?</title>", f"<title>{title}</title>", s, count=1, flags=re.S)
    for prop, val in (("description", desc), ("og:title", title), ("twitter:title", title),
                      ("og:description", desc), ("twitter:description", desc), ("og:url", url)):
        s = re.sub(rf'<meta (property|name)="{prop}" content="[^"]*">',
                   lambda m, v=val, p=prop: f'<meta {m.group(1)}="{p}" content="{v}">', s, count=1)
    s = re.sub(r'<meta name="keywords" content="[^"]*">\n?', "", s, count=1)
    s = re.sub(r'<link rel="canonical" href="[^"]*">', f'<link rel="canonical" href="{url}">', s, count=1)
    s = re.sub(r'([ \t]*<link rel="alternate" hreflang="[^"]+" href="[^"]*">\n?)+',
               f'  <link rel="alternate" hreflang="pt-PT" href="{url}">\n', s, count=1)
    # structured data: drop every head JSON-LD block, insert one graph
    head_end = s.index("</head>")
    head = re.sub(r'<script type="application/ld\+json">.*?</script>\n?', "", s[:head_end], flags=re.S)
    head += '<script type="application/ld+json">' + json.dumps(ld(page), ensure_ascii=False) + "</script>\n"
    s = head + s[head_end:]

    i, j = s.index("<main>"), s.index("</main>")
    m = s[i:j]
    m = re.sub(r'<nav class="breadcrumb".*?</nav>', breadcrumb(page), m, count=1, flags=re.S)
    m = re.sub(r"<h1>.*?</h1>", f"<h1>{page['h1']}</h1>", m, count=1, flags=re.S)
    m = re.sub(r'<p class="lp-hero-sub">.*?</p>', f'<p class="lp-hero-sub">{esc(page["lead"])}</p>', m, count=1, flags=re.S)
    wa = WA + __import__("urllib.parse").parse.quote(page["wa"])
    m = re.sub(r'href="https://wa\.me/[^"]*"', f'href="{wa}"', m)
    m = re.sub(r'(<div class="lp-form-card[^"]*">\s*<h2>).*?(</h2>)', lambda x: x.group(1) + page["form_title"] + x.group(2), m, count=1, flags=re.S)
    m = re.sub(r'(<input type="hidden" name="ramo" value=")[^"]*', lambda x: x.group(1) + esc(page["ramo"]), m, count=1)
    m = re.sub(r'(<input type="hidden" name="source" value=")[^"]*', lambda x: x.group(1) + "landing:" + page["slug"], m, count=1)
    m = re.sub(r'<div class="lp-check-grid">.*?</div></div>', options_html(page["options"]), m, count=1, flags=re.S)
    m = m.replace("Já tem seguros em vigor para este património?", "Já tem seguro em vigor?")
    m = re.sub(r'placeholder="Ex\.: Lisboa, Algarve, mais do que um local"', 'placeholder="Ex.: Lisboa, Algarve, Espanha"', m, count=1)
    a = m.index("<!-- AR-AUTHOR -->")
    first = m.index('<section class="lp-section"', a)
    cta = m.index('<section class="cta-strip"')
    m = m[:first] + body_sections(page) + m[cta:]
    m = re.sub(r'<h2 class="cta-strip-title">.*?</h2>', f'<h2 class="cta-strip-title">{page["cta_title"]}</h2>', m, count=1, flags=re.S)
    m = re.sub(r'<p class="cta-strip-sub">.*?</p>', f'<p class="cta-strip-sub">{esc(page["cta_sub"])}</p>', m, count=1, flags=re.S)
    s = s[:i] + m + s[j:]
    # language selector: the template points at the family-office pages in each
    # language. Stay on this page in PT; elsewhere, the counterpart if one
    # exists, otherwise that language's home (same rule as lang-switcher.mjs).
    swap = {"/private-clients/family-offices/": page["path"]}
    homes = {"/en/family-office-insurance/": page.get("en", "/en/"), "/fr/assurance-family-office/": "/fr/",
             "/de/family-office-versicherung/": page.get("de", "/de/"), "/es/seguro-family-office/": "/es/",
             "/it/assicurazione-family-office/": "/it/"}
    swap.update(homes)
    def fix_switch(block):
        for a, b in swap.items():
            block = block.replace(f'href="{a}"', f'href="{b}"')
        return block
    s = re.sub(r'<li><a href="[^"]*" lang="[^"]*"(?: dir="ltr")? hreflang="[^"]*"[^>]*><span>[^<]*</span></a></li>',
               lambda x: fix_switch(x.group(0)), s)
    out = PUBLIC / page["path"].strip("/") / "index.html"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(s, encoding="utf-8")
    return out


def link_from_hubs():
    """One contextual link from the PT private-clients pillar and the PT home page."""
    links = {
        "private-clients/index.html": [("/private-clients/arte-joias-relogios/", "Arte, joias e relógios"),
                                       ("/private-clients/automoveis-classicos/", "Automóveis clássicos e de coleção"),
                                       ("/seguros/casa-desocupada/", "Casa desocupada")],
        "seguros/habitacao/index.html": [("/seguros/casa-desocupada/", "Casa desocupada"),
                                         ("/private-clients/arte-joias-relogios/", "Arte, joias e relógios")],
    }
    for rel, items in links.items():
        f = PUBLIC / rel
        s = f.read_text(encoding="utf-8")
        if "<!-- pt-hnw-product-links -->" in s:
            continue
        lis = "".join(f'<li style="margin-bottom:10px;"><a href="{u}" style="color:var(--primary);font-weight:600;">{t}</a></li>' for u, t in items)
        block = (f'<!-- pt-hnw-product-links -->\n<section class="lp-section" aria-label="Seguros específicos">\n'
                 f'  <h2>Seguros específicos</h2>\n  <ul>{lis}</ul>\n</section>\n')
        k = s.index('<section class="cta-strip"') if '<section class="cta-strip"' in s else s.index("</main>")
        s = s[:k] + block + s[k:]
        f.write_text(s, encoding="utf-8")


if __name__ == "__main__":
    for p in PAGES:
        print("built", build(p).relative_to(ROOT))
    link_from_hubs()
