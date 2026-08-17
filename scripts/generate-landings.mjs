#!/usr/bin/env node
/**
 * Block 2 — commercial landing pages under /seguros/.
 *
 * Copy is written here rather than in a CMS because the site has no build
 * step; the generated HTML is what ships. Every factual claim is either a
 * statutory reference or a description of standard market wording — no
 * figures about Adler & Rochefort's own book appear anywhere.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ROOT, ORIGIN, writePage, esc, jsonLd, breadcrumbLd, ORGANIZATION, page } from './lib/chrome.mjs';
import { landingPage, quoteForm, PARTNERS_PT } from './lib/landing.mjs';
import { breadcrumbHtml, metaHead, CTA_PT, card } from './lib/blog-parts.mjs';

const data = JSON.parse(await readFile(join(ROOT, 'data', 'articles.json'), 'utf8'));
const published = data.articles.pt.filter((a) => a.status === 'published');
const written = [];

const related = (category, n = 3) =>
  published
    .filter((a) => a.category === category)
    .sort((a, b) => (b.published || '').localeCompare(a.published || ''))
    .slice(0, n);

const wa = (msg) => `https://wa.me/351928226570?text=${encodeURIComponent(msg)}`;

const GDPR =
  'Resposta em 24 horas úteis. Os seus dados são usados apenas para preparar a cotação e tratados ao abrigo do RGPD — consulte a <a href="/politica-de-privacidade/">Política de Privacidade</a>.';

const COMMON = [
  { name: 'nome', label: 'Nome', required: true, placeholder: 'O seu nome' },
  { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'o.seu@email.com' },
  { name: 'telefone', label: 'Telefone / WhatsApp', type: 'tel', required: true, placeholder: '+351 …' },
];

const STEPS = [
  {
    title: 'Enquadramento',
    text: 'Analisamos a atividade, os capitais em causa e a apólice atual, se existir. É nesta fase que aparecem as divergências entre o risco real e o risco declarado.',
  },
  {
    title: 'Consulta ao mercado',
    text: 'Levamos o mesmo risco, descrito da mesma forma, a várias seguradoras. Como mediador registado na ASF não representamos uma companhia — negociamos com todas as que subscrevem o risco.',
  },
  {
    title: 'Comparação lado a lado',
    text: 'Recebe as propostas numa tabela única: capitais, franquias, exclusões e prémio. Sem comparar exclusões, comparar prémios não diz nada.',
  },
  {
    title: 'Emissão e sinistros',
    text: 'Tratamos da emissão e ficamos como interlocutor em caso de sinistro. A participação, a peritagem e o acompanhamento até ao pagamento passam por nós.',
  },
];

const finalCta = (title, sub, ctaLabel, waLink, waLabel) => `<section class="cta-strip" aria-label="Contacto">
  <div class="cta-strip-text">
    <h2 class="cta-strip-title">${title}</h2>
    <p class="cta-strip-sub">${esc(sub)}</p>
    <div style="margin-top:36px;display:flex;gap:18px;flex-wrap:wrap;align-items:center;">
      <a href="#pedido" class="btn-primary">${esc(ctaLabel)}</a>
      <a href="${waLink}" class="btn-ghost" rel="noopener" target="_blank">${esc(waLabel)}</a>
    </div>
  </div>
  <div class="cta-strip-actions">
    <div class="cta-contact-item">
      <div>
        <div class="cta-contact-label">Telefone</div>
        <div class="cta-contact-value"><a href="tel:+351928226570" style="color:inherit;text-decoration:none;">+351 928 226 570</a></div>
      </div>
    </div>
    <div class="cta-contact-item">
      <div>
        <div class="cta-contact-label">Email</div>
        <div class="cta-contact-value"><a href="mailto:insurance@adlerrochefort.com" style="color:inherit;text-decoration:none;">insurance@adlerrochefort.com</a></div>
      </div>
    </div>
  </div>
</section>`;

const crumbs = (name, slug) => [
  { name: 'Início', url: '/' },
  { name: 'Seguros', url: '/seguros/' },
  { name, url: `/seguros/${slug}/` },
];

// =============================================================================
// 2.1 — TVDE
// =============================================================================
const TVDE = {
  lang: 'pt',
  url: '/seguros/tvde/',
  slug: 'tvde',
  category: 'seguros-auto-tvde',
  metaTitle: 'Seguro TVDE Portugal | Cotação em 24h | Adler & Rochefort',
  metaDescription:
    'Seguro TVDE para motoristas e operadores Uber, Bolt e Free Now. Responsabilidade civil com uso profissional, acidentes pessoais de passageiros e frota. Cotação em 24h úteis.',
  h1: 'Seguro TVDE em Portugal — <em>Uber, Bolt e Free Now</em>',
  heroSub:
    'A apólice particular não cobre transporte remunerado de passageiros. Comparamos as seguradoras que aceitam TVDE e devolvemos propostas comparáveis em 24 horas úteis — para um carro ou para uma frota.',
  ctaPrimary: 'Pedir cotação TVDE',
  ctaSecondary: 'Falar por WhatsApp',
  whatsapp: wa('Olá, gostaria de uma cotação de seguro TVDE.'),
  trust: [
    'ASF n.º 425591790/3',
    'Motorista ou operador',
    'Resposta em 24h úteis',
  ],
  serviceName: 'Seguro TVDE',
  serviceType: 'Seguro automóvel para transporte individual e remunerado de passageiros',
  audience: 'Motoristas e operadores TVDE em Portugal',
  formSourceId: 'cotacao-tvde-source',
  crumbs: crumbs('Seguro TVDE', 'tvde'),
  law: [
    'A atividade de transporte individual e remunerado de passageiros em veículos descaracterizados está regulada pela <strong>Lei n.º 45/2018, de 10 de agosto</strong>. Para operar, o veículo tem de estar afeto a um operador licenciado pelo IMT e o condutor tem de possuir certificado TVDE válido.',
    'Em matéria de seguros, a lei impõe duas coberturas distintas e cumulativas. A primeira é o <strong>seguro de responsabilidade civil automóvel</strong>, obrigatório para qualquer veículo, mas que aqui tem de contemplar expressamente o transporte remunerado de passageiros. A segunda é o <strong>seguro de acidentes pessoais dos passageiros transportados</strong>, exigido especificamente pelo regime TVDE.',
    'É neste ponto que a maioria dos problemas nasce: uma apólice particular comum exclui o transporte remunerado. Se o sinistro ocorrer durante uma viagem de plataforma, a seguradora pode invocar agravamento não declarado do risco e recusar a regularização, deixando o condutor pessoalmente responsável pelos danos. A apólice tem de declarar a utilização TVDE desde o início. Explicámos o enquadramento completo no artigo <a href="/blog/seguro-tvde-portugal/">seguro TVDE em Portugal</a>.',
  ],
  lawList: [
    'Licença de operador TVDE emitida pelo IMT',
    'Certificado de motorista TVDE válido',
    'Responsabilidade civil automóvel com uso profissional declarado',
    'Acidentes pessoais para os passageiros transportados',
    'Inspeção periódica obrigatória em dia',
    'Seguro de acidentes de trabalho quando existam motoristas por conta de outrem',
  ],
  essentialIntro:
    'Estas são as coberturas sem as quais a atividade não está regularizada. Nenhuma delas é opcional para quem opera em plataforma.',
  essential: [
    {
      title: 'Responsabilidade civil automóvel',
      text: 'Cobre os danos causados a terceiros. Os capitais mínimos legais são de 6.450.000 € para danos corporais e 1.300.000 € para danos materiais por sinistro. A apólice tem de indicar o uso profissional para transporte remunerado.',
    },
    {
      title: 'Acidentes pessoais de passageiros',
      text: 'Cobertura exigida pelo regime TVDE. Responde por morte, invalidez permanente e despesas de tratamento dos passageiros transportados, independentemente de haver culpa do condutor.',
    },
    {
      title: 'Acidentes de trabalho',
      text: 'Obrigatório quando o operador tem motoristas por conta de outrem. Cobre o próprio motorista enquanto trabalhador — algo que nem a RC automóvel nem os acidentes pessoais de passageiros fazem.',
    },
    {
      title: 'Proteção do condutor',
      text: 'Nas apólices em que o motorista é o tomador, esta cobertura responde pelos danos corporais do próprio condutor, que a responsabilidade civil não cobre por definição.',
    },
  ],
  recommendedIntro:
    'Estas coberturas não são exigidas por lei, mas em TVDE o veículo é a ferramenta de trabalho: ficar sem ele é ficar sem rendimento.',
  recommended: [
    {
      title: 'Danos próprios',
      text: 'Choque, colisão e capotamento no próprio veículo. Praticamente indispensável quando o carro está em leasing ou renting, porque o contrato de financiamento costuma exigi-la e o valor em dívida não desaparece com o sinistro.',
    },
    {
      title: 'Assistência em viagem 24h',
      text: 'Reboque e desempanagem sem franquia quilométrica. Em atividade profissional, a diferença entre assistência a partir do km 0 e a partir do km 25 é material.',
    },
    {
      title: 'Veículo de substituição',
      text: 'Mantém o rendimento durante a reparação. Verifique o número de dias e se a cobertura funciona também em avaria mecânica, não só em acidente.',
    },
    {
      title: 'Quebra isolada de vidros',
      text: 'Sinistro frequente e de reparação rápida. Contratada isoladamente, evita acionar danos próprios e agravar o histórico de sinistralidade.',
    },
    {
      title: 'Furto e incêndio',
      text: 'Cobertura autónoma dos danos próprios. Relevante para quem estaciona o veículo na via pública durante a noite.',
    },
    {
      title: 'Perda de rendimento',
      text: 'Subsídio diário durante o período de imobilização. Nem todas as seguradoras a oferecem em TVDE — quando existe, é uma das coberturas com maior impacto prático.',
    },
  ],
  mistakes: [
    {
      title: 'Manter a apólice particular e conduzir em plataforma',
      text: 'É o erro mais caro e o mais comum. A apólice particular exclui o transporte remunerado; a exclusão só se torna visível na participação do sinistro, quando já não há nada a fazer.',
    },
    {
      title: 'Assumir que a plataforma cobre o motorista',
      text: 'Uber, Bolt e Free Now contratam coberturas próprias com âmbitos e limites definidos por si. Não substituem a apólice do veículo nem as obrigações legais do operador.',
    },
    {
      title: 'Esquecer os acidentes de trabalho',
      text: 'Um operador com motoristas contratados está obrigado a seguro de acidentes de trabalho. A falta é infração autónoma e deixa o operador exposto às prestações devidas ao trabalhador.',
    },
    {
      title: 'Segurar a frota como somatório de apólices individuais',
      text: 'A partir de três viaturas compensa quase sempre agrupar em apólice de <a href="/seguros/frota/">seguro de frota</a>: um vencimento, um histórico de sinistralidade e negociação sobre o conjunto.',
    },
    {
      title: 'Não declarar a zona real de operação',
      text: 'A tarifação depende do local de circulação habitual. Declarar uma zona e operar noutra é uma inexatidão que a seguradora pode invocar.',
    },
  ],
  steps: STEPS,
  faq: [
    {
      q: 'O meu seguro particular cobre viagens Uber ou Bolt?',
      a: 'Não. As apólices particulares excluem o transporte remunerado de passageiros. Para conduzir em plataforma, a apólice tem de declarar a utilização TVDE, o que altera a tarifação e as condições de subscrição.',
    },
    {
      q: 'Que seguros são obrigatórios para TVDE?',
      a: 'Responsabilidade civil automóvel com uso profissional declarado e seguro de acidentes pessoais para os passageiros transportados. Se o operador tiver motoristas por conta de outrem, acresce o seguro de acidentes de trabalho.',
    },
    {
      q: 'Quanto custa um seguro TVDE?',
      a: 'Depende da viatura, da idade e antiguidade de carta do condutor, da zona de operação, dos quilómetros anuais, do histórico de sinistralidade e das coberturas escolhidas. Não publicamos tabelas de preços porque um valor médio não se aplica a nenhum caso concreto — a cotação é feita sobre os seus dados.',
    },
    {
      q: 'Preciso de seguro se sou motorista mas o carro é do operador?',
      a: 'A apólice do veículo é responsabilidade de quem o tem registado, normalmente o operador. Mas confirme o que essa apólice cobre em relação a si: a responsabilidade civil protege terceiros, não o condutor. A proteção do condutor ou o seguro de acidentes de trabalho é que respondem pelos seus danos corporais.',
    },
    {
      q: 'Todas as seguradoras aceitam TVDE?',
      a: 'Não. É um risco que nem todas as companhias subscrevem, e as que subscrevem aplicam critérios diferentes quanto a idade do veículo, antiguidade de carta e sinistralidade. Parte do trabalho de mediação é saber onde o risco tem colocação.',
    },
    {
      q: 'Posso juntar várias viaturas TVDE na mesma apólice?',
      a: 'Sim, através de uma apólice de frota. Costuma fazer sentido a partir de três viaturas, e simplifica a gestão porque passa a existir um único vencimento e um histórico de sinistralidade agregado.',
    },
    {
      q: 'O que acontece se tiver um acidente com um passageiro a bordo?',
      a: 'Com a apólice correta, a responsabilidade civil responde pelos danos a terceiros e a cobertura de acidentes pessoais responde pelos danos do passageiro transportado. Com uma apólice particular, a seguradora pode recusar por a utilização não estar coberta.',
    },
    {
      q: 'Quanto tempo demora a ter proposta?',
      a: 'Respondemos em 24 horas úteis a partir do momento em que temos os dados do veículo e do condutor. A emissão depois da aceitação é normalmente no próprio dia.',
    },
  ],
};

TVDE.form = quoteForm({
  formName: 'cotacao-tvde',
  branch: 'TVDE',
  title: 'Cotação de seguro TVDE',
  subtitle: 'Preencha o essencial. Respondemos em 24 horas úteis.',
  submit: 'Pedir cotação →',
  micro: GDPR,
  fields: [
    ...COMMON,
    { name: 'nif', label: 'NIF', placeholder: 'Contribuinte' },
    {
      name: 'perfil',
      label: 'É motorista ou operador?',
      type: 'radio',
      required: true,
      options: ['Motorista', 'Operador TVDE'],
    },
    { name: 'operador', label: 'Nome do operador TVDE', placeholder: 'Se aplicável' },
    { name: 'licenca_imt', label: 'N.º de licença IMT', placeholder: 'Se aplicável' },
    { name: 'n_viaturas', label: 'N.º de viaturas', type: 'number', placeholder: '1' },
    { name: 'veiculo', label: 'Marca, modelo e ano', placeholder: 'Ex.: Toyota Corolla 2021' },
    { name: 'matricula', label: 'Matrícula', placeholder: 'AA-00-AA' },
    { name: 'km_ano', label: 'Km por ano (estimativa)', placeholder: 'Ex.: 45 000' },
    {
      name: 'zona',
      label: 'Zona de operação',
      type: 'select',
      options: ['Lisboa', 'Porto', 'Algarve', 'Outra'],
    },
    { name: 'anos_carta', label: 'Anos de carta', type: 'number', placeholder: 'Ex.: 12' },
    {
      name: 'sinistros_3_anos',
      label: 'Sinistros nos últimos 3 anos',
      type: 'select',
      options: ['Nenhum', '1', '2', '3 ou mais'],
    },
    { name: 'seguro_atual', label: 'Seguradora atual', placeholder: 'Se existir' },
    { name: 'vencimento', label: 'Data de vencimento', type: 'date' },
    { name: 'mensagem', label: 'Notas', type: 'textarea', full: true, placeholder: 'Algo que devamos saber?' },
  ],
});

TVDE.finalCta = finalCta(
  'Pedir cotação<br><em>de seguro TVDE</em>',
  'Envie os dados do veículo e do condutor. Comparamos as seguradoras que subscrevem TVDE e devolvemos as propostas lado a lado em 24 horas úteis.',
  'Preencher o formulário',
  wa('Olá, gostaria de uma cotação de seguro TVDE.'),
  'Falar por WhatsApp'
);

// =============================================================================
// 2.2 — Frota
// =============================================================================
const FROTA = {
  lang: 'pt',
  url: '/seguros/frota/',
  slug: 'frota',
  category: 'seguros-auto-tvde',
  metaTitle: 'Seguro de Frota para Empresas | Adler & Rochefort',
  metaDescription:
    'Seguro de frota automóvel para empresas em Portugal: apólice única, vencimento único e negociação sobre a sinistralidade agregada. Ligeiros, pesados, TVDE e viaturas de serviço.',
  h1: 'Seguro de frota <em>para empresas</em>',
  heroSub:
    'A partir de três viaturas, gerir apólices individuais custa mais do que o prémio. Uma apólice de frota concentra vencimento, sinistralidade e negociação num único contrato.',
  ctaPrimary: 'Pedir cotação de frota',
  ctaSecondary: 'Falar por WhatsApp',
  whatsapp: wa('Olá, gostaria de uma cotação de seguro de frota.'),
  trust: ['ASF n.º 425591790/3', 'A partir de 3 viaturas', 'Resposta em 24h úteis'],
  serviceName: 'Seguro de frota automóvel',
  serviceType: 'Seguro automóvel de frota para empresas',
  audience: 'Empresas com frota automóvel em Portugal',
  formSourceId: 'cotacao-frota-source',
  crumbs: crumbs('Seguro de frota', 'frota'),
  law: [
    'A obrigação de seguro é a mesma de qualquer veículo: responsabilidade civil automóvel, com capitais mínimos de 6.450.000 € para danos corporais e 1.300.000 € para danos materiais por sinistro. O que muda numa frota não é a obrigação, é a forma como o risco é subscrito e tarifado.',
    'Se a empresa tem trabalhadores que conduzem no exercício das suas funções, o <strong>seguro de acidentes de trabalho</strong> é igualmente obrigatório e cobre o condutor enquanto trabalhador — o que a responsabilidade civil automóvel, por definição, não faz. Um acidente <em>in itinere</em> ou em serviço é, simultaneamente, um sinistro automóvel e um acidente de trabalho.',
    'Nas frotas afetas a transporte remunerado de passageiros aplicam-se ainda as obrigações do regime respetivo — nomeadamente o <a href="/seguros/tvde/">seguro TVDE</a>, com a cobertura de acidentes pessoais dos passageiros que a Lei n.º 45/2018 exige.',
  ],
  essentialIntro:
    'A base de qualquer apólice de frota, aplicável a todas as viaturas do contrato.',
  essential: [
    {
      title: 'Responsabilidade civil automóvel',
      text: 'Cobertura obrigatória para cada viatura da frota, com os capitais mínimos legais. Numa apólice de frota é subscrita em bloco, o que permite negociar sobre a exposição agregada em vez de viatura a viatura.',
    },
    {
      title: 'Acidentes de trabalho',
      text: 'Obrigatório para os colaboradores que conduzem em serviço. Frequentemente contratado à parte, mas deve ser revisto ao mesmo tempo que a frota para que os prémios e os vencimentos fiquem alinhados.',
    },
    {
      title: 'Proteção dos condutores',
      text: 'Responde pelos danos corporais de quem vai ao volante. Numa frota com vários condutores por viatura, é o que evita que a proteção dependa de quem conduzia naquele dia.',
    },
    {
      title: 'Assistência em viagem',
      text: 'Reboque, desempanagem e transporte de ocupantes. Em frota, o critério relevante é a franquia quilométrica e o tempo de resposta contratado, não a existência da cobertura.',
    },
  ],
  recommendedIntro:
    'As coberturas que distinguem uma frota gerida de uma frota apenas segurada.',
  recommended: [
    {
      title: 'Danos próprios em bloco',
      text: 'Contratados para toda a frota com franquia uniforme. Simplifica a gestão e evita que apenas as viaturas mais recentes fiquem protegidas.',
    },
    {
      title: 'Viaturas de substituição',
      text: 'Definidas por escalão de viatura. Numa frota operacional, o custo de imobilização ultrapassa quase sempre o custo da cobertura.',
    },
    {
      title: 'Mercadoria transportada',
      text: 'A carga não está coberta pelo seguro automóvel. Para distribuição e logística é uma cobertura autónoma, tratada no artigo sobre <a href="/blog/seguros-empresas-distribuicao/">seguros para empresas de distribuição</a>.',
    },
    {
      title: 'Responsabilidade civil de exploração',
      text: 'Cobre os danos causados a terceiros na operação — cargas e descargas, manobras em instalações de clientes — que o seguro automóvel não abrange.',
    },
    {
      title: 'Quebra isolada de vidros',
      text: 'Sinistro de alta frequência e baixo valor. Contratada em separado, evita degradar o histórico de sinistralidade que determina a renovação da frota.',
    },
    {
      title: 'Gestão documental centralizada',
      text: 'Certificados, cartas verdes e vencimentos num único ponto. Não é uma cobertura, é o que impede que uma viatura circule com o seguro vencido.',
    },
  ],
  mistakes: [
    {
      title: 'Renovar viatura a viatura',
      text: 'Vencimentos dispersos impedem negociar o conjunto e obrigam a repetir doze vezes por ano o mesmo processo administrativo.',
    },
    {
      title: 'Não acompanhar a sinistralidade',
      text: 'Numa frota, a taxa de sinistralidade determina a renovação seguinte. Sem a medir por viatura e por condutor, não há como agir sobre ela. Aprofundámos o tema em <a href="/blog/seguro-frota-erros-comuns/">erros comuns na gestão de seguros de frota</a>.',
    },
    {
      title: 'Ignorar a utilização real das viaturas',
      text: 'Uma viatura de serviço usada para transferes turísticos ou para TVDE tem uma utilização diferente da declarada. A divergência é oponível pela seguradora.',
    },
    {
      title: 'Esquecer os acidentes de trabalho',
      text: 'O seguro automóvel não cobre o condutor-trabalhador. Sem apólice de acidentes de trabalho, o custo das prestações recai sobre a empresa.',
    },
    {
      title: 'Deixar cair viaturas do contrato',
      text: 'Entradas e saídas não comunicadas geram períodos sem cobertura. A movimentação da frota tem de ser reportada à seguradora, não anotada internamente.',
    },
  ],
  steps: STEPS,
  faq: [
    {
      q: 'A partir de quantas viaturas compensa uma apólice de frota?',
      a: 'Habitualmente a partir de três. Abaixo disso a vantagem é sobretudo administrativa; acima disso passa a haver também margem de negociação sobre a sinistralidade agregada.',
    },
    {
      q: 'Posso ter ligeiros, pesados e viaturas TVDE na mesma apólice?',
      a: 'Depende da seguradora. Algumas aceitam frotas mistas; outras exigem contratos separados por tipo de utilização, sobretudo quando existe transporte remunerado de passageiros. É um dos pontos que verificamos na consulta ao mercado.',
    },
    {
      q: 'O que acontece quando entram ou saem viaturas?',
      a: 'A apólice de frota prevê movimentação durante a vigência, com acerto de prémio. O essencial é comunicar a alteração à seguradora no momento — uma viatura não comunicada não está coberta.',
    },
    {
      q: 'A sinistralidade de uma viatura afeta as restantes?',
      a: 'Sim. Na frota, a tarifação é feita sobre o conjunto, pelo que a sinistralidade individual influencia a renovação de todo o contrato. É a razão pela qual vale a pena separar os sinistros de baixo valor em coberturas autónomas.',
    },
    {
      q: 'O seguro de frota cobre a mercadoria transportada?',
      a: 'Não. A carga exige uma cobertura autónoma de mercadorias transportadas, contratada em separado do seguro automóvel.',
    },
    {
      q: 'E os colaboradores que usam viatura própria em serviço?',
      a: 'A viatura própria mantém a sua apólice, mas a empresa continua exposta em sede de acidentes de trabalho e, em certos casos, de responsabilidade civil. É uma situação que deve ficar expressamente enquadrada.',
    },
    {
      q: 'Quanto tempo demora a cotar uma frota?',
      a: 'Respondemos em 24 horas úteis quando temos a listagem de viaturas com matrícula, ano e utilização, e o histórico de sinistralidade dos últimos três anos.',
    },
  ],
};

FROTA.form = quoteForm({
  formName: 'cotacao-frota',
  branch: 'Frota de empresa',
  title: 'Cotação de seguro de frota',
  subtitle: 'Envie a dimensão da frota. Respondemos em 24 horas úteis.',
  submit: 'Pedir cotação →',
  micro: GDPR,
  fields: [
    ...COMMON,
    { name: 'empresa', label: 'Empresa', required: true, placeholder: 'Designação social' },
    { name: 'nif', label: 'NIF', placeholder: 'Contribuinte' },
    { name: 'cae', label: 'CAE / setor', placeholder: 'Ex.: 49392 — transporte de passageiros' },
    { name: 'n_viaturas', label: 'N.º de viaturas', type: 'number', required: true, placeholder: 'Ex.: 8' },
    {
      name: 'tipos_viatura',
      label: 'Tipos de viatura',
      type: 'checkboxes',
      options: ['Ligeiros de passageiros', 'Ligeiros de mercadorias', 'Pesados', 'TVDE', 'Motociclos'],
    },
    { name: 'km_ano_agregado', label: 'Km/ano agregados', placeholder: 'Ex.: 320 000' },
    {
      name: 'sinistros_3_anos',
      label: 'Sinistralidade nos últimos 3 anos',
      type: 'select',
      options: ['Nenhuma', '1 a 3 sinistros', '4 a 10 sinistros', 'Mais de 10 sinistros'],
    },
    { name: 'seguro_atual', label: 'Seguradora atual', placeholder: 'Se existir' },
    { name: 'vencimento', label: 'Data de vencimento', type: 'date' },
    { name: 'mensagem', label: 'Notas', type: 'textarea', full: true, placeholder: 'Algo que devamos saber?' },
  ],
});

FROTA.finalCta = finalCta(
  'Pedir cotação<br><em>de seguro de frota</em>',
  'Envie a listagem de viaturas e o histórico de sinistralidade. Levamos o mesmo risco a várias seguradoras e devolvemos as propostas comparáveis em 24 horas úteis.',
  'Preencher o formulário',
  wa('Olá, gostaria de uma cotação de seguro de frota.'),
  'Falar por WhatsApp'
);

// =============================================================================
// 2.3 — Alojamento Local
// =============================================================================
const AL = {
  lang: 'pt',
  url: '/seguros/alojamento-local/',
  slug: 'alojamento-local',
  category: 'hotelaria-turismo',
  metaTitle: 'Seguro de Alojamento Local | Obrigatório desde o DL 76/2024 | Adler & Rochefort',
  metaDescription:
    'Seguro de alojamento local obrigatório: responsabilidade civil, multirriscos e perda de exploração. O que o Decreto-Lei n.º 76/2024 exige e porque o seguro do condomínio não chega.',
  h1: 'Seguro de <em>Alojamento Local</em>',
  heroSub:
    'O seguro de responsabilidade civil é condição do registo de AL. O seguro de incêndio do condomínio não o substitui, e uma moradia segurada como habitação própria não está coberta enquanto explorada turisticamente.',
  ctaPrimary: 'Pedir cotação AL',
  ctaSecondary: 'Falar por WhatsApp',
  whatsapp: wa('Olá, gostaria de uma cotação de seguro de alojamento local.'),
  trust: ['ASF n.º 425591790/3', 'Apartamento, moradia ou hostel', 'Resposta em 24h úteis'],
  serviceName: 'Seguro de Alojamento Local',
  serviceType: 'Seguro de responsabilidade civil e multirriscos para alojamento local',
  audience: 'Titulares e exploradores de alojamento local em Portugal',
  formSourceId: 'cotacao-alojamento-local-source',
  crumbs: crumbs('Seguro de Alojamento Local', 'alojamento-local'),
  law: [
    'O regime do alojamento local consta do <strong>Decreto-Lei n.º 128/2014</strong>, alterado de forma significativa pelo <strong>Decreto-Lei n.º 76/2024, de 23 de outubro</strong>. Entre os requisitos de exploração está a existência de <strong>seguro de responsabilidade civil</strong> que cubra danos patrimoniais e não patrimoniais causados a hóspedes e a terceiros decorrentes da atividade.',
    'O seguro é condição de manutenção do registo: a sua falta ou caducidade pode determinar o cancelamento. Não se trata de uma recomendação comercial — é um requisito administrativo verificável.',
    'Há dois equívocos recorrentes. O primeiro é assumir que o <strong>seguro de incêndio do condomínio</strong> cobre a unidade: cobre as partes comuns e a estrutura, não o recheio da fração nem a responsabilidade do explorador perante o hóspede. O segundo é manter o imóvel segurado como <strong>habitação própria</strong> depois de o registar como AL: a apólice foi subscrita para uma utilização diferente daquela que passou a existir. Detalhámos o tema em <a href="/blog/seguro-alojamento-local-decreto-lei-76-2024/">o que muda com o Decreto-Lei n.º 76/2024</a>.',
  ],
  lawList: [
    'Registo de AL válido e número atribuído',
    'Seguro de responsabilidade civil da atividade, em vigor',
    'Comunicação da alteração de utilização à seguradora do imóvel',
    'Cumprimento das regras de segurança aplicáveis à tipologia',
    'Nos prédios em propriedade horizontal, articulação com o seguro do condomínio',
  ],
  essentialIntro:
    'O núcleo mínimo para operar em conformidade e não ficar exposto ao sinistro mais provável.',
  essential: [
    {
      title: 'Responsabilidade civil de exploração',
      text: 'Cobre os danos causados a hóspedes e a terceiros no âmbito da atividade — quedas, danos em bens, acidentes nas zonas comuns da unidade. É a cobertura exigida pelo regime do AL.',
    },
    {
      title: 'Incêndio e elementos da natureza',
      text: 'Protege a estrutura da fração ou da moradia. Nos prédios em propriedade horizontal articula-se com a apólice do condomínio, que cobre as partes comuns e não o interior.',
    },
    {
      title: 'Danos por água',
      text: 'O sinistro mais frequente em habitação e em AL. Numa unidade com rotatividade de hóspedes e utilização intensiva das canalizações, a frequência é ainda maior.',
    },
    {
      title: 'Recheio e equipamento',
      text: 'Mobiliário, eletrodomésticos, roupa de casa e equipamento de cozinha. O capital deve refletir o custo de reposição a novo, não o valor contabilístico.',
    },
  ],
  recommendedIntro:
    'Coberturas que não são exigidas pelo registo mas que respondem aos sinistros que efetivamente ocorrem em exploração turística.',
  recommended: [
    {
      title: 'Danos causados por hóspedes',
      text: 'Atos dolosos ou negligentes de quem ocupa a unidade. Não está incluído por defeito na maioria das apólices de habitação e é uma das razões pelas quais uma apólice residencial não serve.',
    },
    {
      title: 'Perda de exploração',
      text: 'Compensa a receita perdida enquanto a unidade está inabitável após um sinistro coberto. É a cobertura que separa um sinistro incómodo de um sinistro ruinoso.',
    },
    {
      title: 'Responsabilidade civil de piscina',
      text: 'Quando existe piscina, o risco de afogamento e de queda é tratado à parte e sujeito a condições de segurança específicas — vedação, sinalização, profundidade indicada.',
    },
    {
      title: 'Roubo com e sem arrombamento',
      text: 'Inclui o furto praticado por quem tem acesso legítimo à unidade, situação que muitas apólices excluem se não for expressamente contratada.',
    },
    {
      title: 'Furto de valores e bagagem de hóspedes',
      text: 'Responde por bens dos hóspedes desaparecidos na unidade. Reduz a exposição a reclamações diretas e a avaliações negativas em plataforma.',
    },
    {
      title: 'Assistência 24h à unidade',
      text: 'Canalizador, eletricista e serralheiro em urgência. Numa unidade explorada à distância, é o que evita o cancelamento da reserva seguinte.',
    },
  ],
  mistakes: [
    {
      title: 'Confiar no seguro do condomínio',
      text: 'Cobre as partes comuns. Não cobre o recheio da fração nem a responsabilidade do explorador perante o hóspede. Explicámos a articulação em <a href="/blog/alojamento-local-propriedade-horizontal-condominio/">AL em propriedade horizontal</a>.',
    },
    {
      title: 'Manter o imóvel segurado como habitação própria',
      text: 'A utilização declarada deixou de corresponder à real. É uma divergência silenciosa que só se revela na participação do sinistro.',
    },
    {
      title: 'Subestimar o capital do recheio',
      text: 'Uma unidade equipada para arrendamento turístico tem mais recheio do que uma habitação equivalente. Um capital insuficiente ativa a regra proporcional e reduz a indemnização.',
    },
    {
      title: 'Não contratar perda de exploração',
      text: 'A reparação demora semanas ou meses. Sem esta cobertura, as reservas canceladas e a receita perdida ficam integralmente a cargo do titular.',
    },
    {
      title: 'Ignorar a piscina e os anexos',
      text: 'Piscinas, jacuzzis, churrasqueiras e anexos alteram o risco e nem sempre estão incluídos por defeito. Devem ser declarados individualmente.',
    },
  ],
  steps: STEPS,
  faq: [
    {
      q: 'O seguro de alojamento local é obrigatório?',
      a: 'Sim. O regime do alojamento local exige seguro de responsabilidade civil que cubra danos causados a hóspedes e a terceiros pela atividade. A sua falta pode determinar o cancelamento do registo.',
    },
    {
      q: 'O seguro do condomínio não chega?',
      a: 'Não. O seguro do condomínio cobre as partes comuns do edifício. Não cobre o recheio da sua fração, nem os danos causados por hóspedes, nem a sua responsabilidade civil enquanto explorador.',
    },
    {
      q: 'Já tenho seguro de habitação. Preciso de outro?',
      a: 'Precisa de comunicar a alteração de utilização à seguradora. Uma apólice subscrita para habitação própria permanente não cobre a exploração turística; consoante a companhia, o contrato é adaptado ou substituído por um produto de AL.',
    },
    {
      q: 'Quanto custa o seguro de alojamento local?',
      a: 'Varia com a tipologia, a capacidade, os capitais de edifício e recheio, a existência de piscina e as coberturas escolhidas. Abordámos os fatores de preço no artigo <a href="/blog/quanto-custa-seguro-alojamento-local/">quanto custa o seguro de alojamento local</a>; o valor concreto sai da cotação sobre os seus dados.',
    },
    {
      q: 'Cobre os danos causados pelos hóspedes?',
      a: 'Só se essa cobertura estiver expressamente contratada. Não é automática na generalidade das apólices de habitação e é uma das principais diferenças de um produto específico de AL.',
    },
    {
      q: 'E se a unidade ficar inabitável depois de um sinistro?',
      a: 'É o que a cobertura de perda de exploração resolve: compensa a receita que a unidade deixa de gerar durante o período de reparação, dentro dos limites e do período de indemnização contratados.',
    },
    {
      q: 'Tenho várias unidades. Podem ficar na mesma apólice?',
      a: 'Sim, e normalmente compensa. Uma apólice multi-unidade concentra o vencimento e permite negociar sobre o conjunto, além de simplificar a prova de seguro para cada registo.',
    },
    {
      q: 'Quanto tempo demora a emissão?',
      a: 'Enviamos proposta em 24 horas úteis. Depois da aceitação, a apólice é normalmente emitida no próprio dia — o que importa quando o registo depende dela.',
    },
  ],
};

AL.form = quoteForm({
  formName: 'cotacao-alojamento-local',
  branch: 'Alojamento Local',
  title: 'Cotação de seguro AL',
  subtitle: 'Preencha o essencial. Respondemos em 24 horas úteis.',
  submit: 'Pedir cotação →',
  micro: GDPR,
  fields: [
    ...COMMON,
    {
      name: 'tipo_unidade',
      label: 'Tipo de unidade',
      type: 'select',
      required: true,
      options: ['Apartamento', 'Moradia', 'Hostel', 'Quartos', 'Estabelecimento de hospedagem'],
    },
    { name: 'registo_al', label: 'N.º de registo AL', placeholder: 'Se já emitido' },
    { name: 'morada', label: 'Morada', full: true, placeholder: 'Morada da unidade' },
    { name: 'n_quartos', label: 'N.º de quartos', type: 'number', placeholder: 'Ex.: 3' },
    { name: 'capacidade', label: 'Capacidade (hóspedes)', type: 'number', placeholder: 'Ex.: 6' },
    { name: 'valor_imovel', label: 'Valor do imóvel (reconstrução)', placeholder: 'Ex.: 180 000 €' },
    { name: 'valor_recheio', label: 'Valor do recheio', placeholder: 'Ex.: 25 000 €' },
    { name: 'piscina', label: 'Tem piscina?', type: 'radio', options: ['Não', 'Sim'] },
    {
      name: 'propriedade_horizontal',
      label: 'Está em propriedade horizontal?',
      type: 'radio',
      options: ['Não', 'Sim'],
    },
    { name: 'seguro_atual', label: 'Seguro atual', placeholder: 'Seguradora, se existir' },
    { name: 'vencimento', label: 'Data de vencimento', type: 'date' },
    { name: 'mensagem', label: 'Notas', type: 'textarea', full: true, placeholder: 'Algo que devamos saber?' },
  ],
});

AL.finalCta = finalCta(
  'Pedir cotação<br><em>de seguro AL</em>',
  'Envie os dados da unidade. Comparamos o mercado e devolvemos propostas com os capitais e as exclusões lado a lado, em 24 horas úteis.',
  'Preencher o formulário',
  wa('Olá, gostaria de uma cotação de seguro de alojamento local.'),
  'Falar por WhatsApp'
);

// =============================================================================
// 2.4 — Habitação
// =============================================================================
const HABITACAO = {
  lang: 'pt',
  url: '/seguros/habitacao/',
  slug: 'habitacao',
  category: 'habitacao-particulares',
  metaTitle: 'Seguro de Habitação e Multirriscos | Adler & Rochefort',
  metaDescription:
    'Seguro multirriscos habitação em Portugal: incêndio obrigatório, danos por água, recheio e responsabilidade civil familiar. Comparamos o mercado e explicamos as exclusões.',
  h1: 'Seguro de <em>habitação</em>',
  heroSub:
    'O seguro que o banco exige protege primeiro a garantia do banco. Comparamos o mercado sobre o capital de reconstrução real e mostramos as exclusões antes de assinar, não depois do sinistro.',
  ctaPrimary: 'Pedir cotação',
  ctaSecondary: 'Falar por WhatsApp',
  whatsapp: wa('Olá, gostaria de uma cotação de seguro de habitação.'),
  trust: ['ASF n.º 425591790/3', 'Proprietário, senhorio ou inquilino', 'Resposta em 24h úteis'],
  serviceName: 'Seguro multirriscos habitação',
  serviceType: 'Seguro de habitação e multirriscos residencial',
  audience: 'Proprietários, senhorios e inquilinos em Portugal',
  formSourceId: 'cotacao-habitacao-source',
  crumbs: crumbs('Seguro de habitação', 'habitacao'),
  law: [
    'Em Portugal, o único seguro legalmente obrigatório associado à casa é o <strong>seguro de incêndio</strong>. Nos edifícios em propriedade horizontal, o Código Civil impõe-o tanto sobre a fração autónoma como sobre as partes comuns, cabendo ao condomínio segurar estas últimas.',
    'Tudo o resto — danos por água, fenómenos sísmicos, tempestades, roubo, quebra de vidros, recheio, responsabilidade civil familiar — é facultativo e vive dentro do <strong>multirriscos habitação</strong>. Quem tem crédito à habitação contrata normalmente a apólice indicada pelo banco, que é válida mas foi desenhada em torno do valor em dívida.',
    'A variável decisiva é o <strong>capital seguro do edifício</strong>, que deve corresponder ao custo de reconstrução — não ao valor de mercado, não ao valor da escritura e não ao valor em dívida. Um capital insuficiente ativa a regra proporcional, e a indemnização é reduzida na mesma proporção mesmo num sinistro parcial. Desenvolvemos o tema em <a href="/blog/multirriscos-habitacao/">multirriscos habitação</a>.',
  ],
  essentialIntro:
    'A base de qualquer apólice de habitação, independentemente do perfil de ocupação.',
  essential: [
    {
      title: 'Incêndio, raio e explosão',
      text: 'Cobertura obrigatória. Deve ser calculada sobre o custo de reconstrução do edifício, incluindo demolição e remoção de escombros.',
    },
    {
      title: 'Danos por água',
      text: 'O sinistro mais participado em habitação. Verifique se cobre a rotura de canalizações e a pesquisa e reparação da avaria, que costumam custar mais do que os danos visíveis.',
    },
    {
      title: 'Fenómenos da natureza',
      text: 'Tempestades, inundações e, em apólice separada ou como cobertura adicional, fenómenos sísmicos. Em zonas de risco sísmico é uma decisão que deve ser tomada de forma consciente e não por omissão.',
    },
    {
      title: 'Responsabilidade civil familiar',
      text: 'Danos causados a terceiros pelo agregado, incluindo por menores e animais de companhia, dentro e fora de casa. É das coberturas mais úteis e das menos conhecidas.',
    },
  ],
  recommendedIntro:
    'Coberturas que dependem do perfil da casa e de quem lá vive.',
  recommended: [
    {
      title: 'Recheio com valor de reposição a novo',
      text: 'Sem esta menção, a indemnização é calculada com depreciação. Bens de valor elevado devem ser declarados individualmente.',
    },
    {
      title: 'Roubo e furto',
      text: 'Verifique as exigências de segurança — fechaduras, alarme, cofre — porque o incumprimento dessas condições é motivo de recusa.',
    },
    {
      title: 'Quebra de vidros e loiças sanitárias',
      text: 'Baixo custo, alta frequência. Cobre vidros, espelhos fixos, vitrocerâmicas e loiças.',
    },
    {
      title: 'Danos elétricos',
      text: 'Sobretensões que danificam eletrodomésticos e equipamento eletrónico, incluindo painéis solares e carregadores de veículos elétricos quando declarados.',
    },
    {
      title: 'Privação temporária de uso',
      text: 'Paga o alojamento alternativo enquanto a casa está inabitável. Frequentemente limitada a um número reduzido de meses — confirme o limite.',
    },
    {
      title: 'Piscina, anexos e muros',
      text: 'Estruturas exteriores raramente estão incluídas por defeito. Devem ser declaradas e capitalizadas à parte.',
    },
  ],
  mistakes: [
    {
      title: 'Segurar pelo valor de mercado ou pelo valor da escritura',
      text: 'O capital do edifício é o custo de reconstruir, que não coincide com nenhum dos dois. É o erro que mais indemnizações reduz.',
    },
    {
      title: 'Aceitar sem rever a apólice indicada pelo banco',
      text: 'É válida, mas foi construída em torno do montante em dívida. O recheio, a responsabilidade civil e a privação de uso ficam normalmente no mínimo.',
    },
    {
      title: 'Não declarar obras e alterações',
      text: 'Ampliações e alterações não comunicadas criam divergência entre a realidade física e o risco segurado. Tratámos as implicações em <a href="/blog/seguro-habitacao-legalizacao/">seguro de habitação e legalização do imóvel</a>.',
    },
    {
      title: 'Ignorar a cláusula de desocupação',
      text: 'Muitas apólices limitam ou suspendem coberturas quando a casa fica desocupada durante períodos prolongados. É determinante em segundas habitações.',
    },
    {
      title: 'Subestimar o recheio',
      text: 'O somatório de mobiliário, eletrodomésticos, roupa, equipamento eletrónico e bens pessoais é quase sempre superior ao que se estima de cabeça.',
    },
  ],
  steps: STEPS,
  faq: [
    {
      q: 'Que seguro de casa é obrigatório em Portugal?',
      a: 'Apenas o seguro de incêndio. Nos edifícios em propriedade horizontal é obrigatório sobre a fração e sobre as partes comuns. O multirriscos habitação, que agrega as restantes coberturas, é facultativo.',
    },
    {
      q: 'Sou obrigado a contratar o seguro que o banco propõe?',
      a: 'Não. O banco pode exigir que exista seguro com determinadas coberturas e que a instituição figure como beneficiária, mas a escolha da seguradora é sua. A transferência de apólice é um procedimento normal.',
    },
    {
      q: 'Que capital devo declarar para o edifício?',
      a: 'O custo de reconstrução, incluindo demolição e remoção de escombros. Não o valor de mercado, não o valor da escritura e não o valor em dívida ao banco.',
    },
    {
      q: 'O que é a regra proporcional?',
      a: 'Se o capital seguro for inferior ao valor real do bem, a seguradora indemniza na mesma proporção. Uma casa segurada por metade do custo de reconstrução recebe metade da indemnização, mesmo num sinistro parcial.',
    },
    {
      q: 'O seguro cobre danos por água causados ao vizinho?',
      a: 'Sim, através da responsabilidade civil da apólice, dentro do capital contratado. Os danos na sua própria fração são cobertos pela cobertura de danos por água.',
    },
    {
      q: 'Vivo fora de Portugal e a casa fica vazia vários meses. Muda alguma coisa?',
      a: 'Muda. A maioria das apólices tem uma cláusula de desocupação que limita ou suspende coberturas ao fim de um determinado número de dias consecutivos. Deve ser verificada e, se necessário, negociada antes da subscrição.',
    },
    {
      q: 'Sou inquilino. Preciso de seguro?',
      a: 'O edifício é responsabilidade do senhorio, mas o seu recheio e a sua responsabilidade civil não estão cobertos pela apólice dele. Existem apólices específicas de inquilino para essa parte.',
    },
    {
      q: 'Quanto tempo demora a proposta?',
      a: '24 horas úteis a partir do momento em que temos a morada, a área, o ano de construção e os capitais pretendidos.',
    },
  ],
};

HABITACAO.form = quoteForm({
  formName: 'cotacao-habitacao',
  branch: 'Habitação',
  title: 'Cotação de seguro de habitação',
  subtitle: 'Preencha o essencial. Respondemos em 24 horas úteis.',
  submit: 'Pedir cotação →',
  micro: GDPR,
  fields: [
    ...COMMON,
    {
      name: 'tipo_imovel',
      label: 'Tipo de imóvel',
      type: 'select',
      required: true,
      options: ['Apartamento', 'Moradia', 'Moradia em banda', 'Outro'],
    },
    { name: 'morada', label: 'Morada', placeholder: 'Rua e localidade' },
    { name: 'codigo_postal', label: 'Código postal', placeholder: '0000-000' },
    { name: 'ano_construcao', label: 'Ano de construção', type: 'number', placeholder: 'Ex.: 1998' },
    { name: 'area', label: 'Área (m²)', type: 'number', placeholder: 'Ex.: 120' },
    {
      name: 'ocupacao',
      label: 'Perfil de ocupação',
      type: 'select',
      required: true,
      options: ['Proprietário-ocupante', 'Senhorio (arrendado)', 'Inquilino', 'Segunda habitação'],
    },
    { name: 'valor_reconstrucao', label: 'Valor de reconstrução estimado', placeholder: 'Ex.: 160 000 €' },
    { name: 'valor_recheio', label: 'Valor do recheio', placeholder: 'Ex.: 30 000 €' },
    {
      name: 'seguranca',
      label: 'Sistemas de segurança',
      type: 'checkboxes',
      options: ['Alarme', 'Porta de segurança', 'Grades', 'Videovigilância', 'Cofre', 'Nenhum'],
    },
    { name: 'seguro_atual', label: 'Seguradora atual', placeholder: 'Se existir' },
    { name: 'vencimento', label: 'Data de vencimento', type: 'date' },
    { name: 'mensagem', label: 'Notas', type: 'textarea', full: true, placeholder: 'Algo que devamos saber?' },
  ],
});

HABITACAO.finalCta = finalCta(
  'Pedir cotação<br><em>de seguro de habitação</em>',
  'Envie os dados do imóvel. Comparamos o mercado sobre o mesmo capital de reconstrução e mostramos as exclusões antes de assinar.',
  'Preencher o formulário',
  wa('Olá, gostaria de uma cotação de seguro de habitação.'),
  'Falar por WhatsApp'
);

// =============================================================================
// 2.5 — Multirriscos Empresarial
// =============================================================================
const EMPRESARIAL = {
  lang: 'pt',
  url: '/seguros/empresarial/',
  slug: 'empresarial',
  category: 'seguros-empresariais',
  metaTitle: 'Seguro Multirriscos Empresarial | Adler & Rochefort',
  metaDescription:
    'Multirriscos empresarial em Portugal: edifício, equipamento, existências, responsabilidade civil de exploração e perda de lucros. Revemos capitais e comparamos o mercado.',
  h1: 'Multirriscos <em>empresarial</em>',
  heroSub:
    'Uma apólice que agrega o património, a responsabilidade civil e a continuidade do negócio. A discussão relevante raramente é o prémio — é o capital seguro e o que fica de fora.',
  ctaPrimary: 'Pedir análise',
  ctaSecondary: 'Falar por WhatsApp',
  whatsapp: wa('Olá, gostaria de uma análise de seguros para a minha empresa.'),
  trust: ['ASF n.º 425591790/3', 'Revisão de capitais incluída', 'Resposta em 24h úteis'],
  serviceName: 'Seguro multirriscos empresarial',
  serviceType: 'Seguro multirriscos e responsabilidade civil para empresas',
  audience: 'Empresas e empresários em nome individual em Portugal',
  formSourceId: 'cotacao-empresarial-source',
  crumbs: crumbs('Multirriscos Empresarial', 'empresarial'),
  law: [
    'O multirriscos empresarial não é, em si, obrigatório. O que é obrigatório varia com a atividade — e há um seguro que praticamente nenhuma empresa escapa: o <strong>seguro de acidentes de trabalho</strong>, exigido para todos os trabalhadores por conta de outrem, com regime próprio para os trabalhadores independentes.',
    'A lei impõe ainda seguros específicos a atividades reguladas: construção, mediação de seguros, transporte, atividades de saúde, entre outras. Fizemos o levantamento em <a href="/blog/seguros-obrigatorios-empresas-portugal/">seguros obrigatórios para empresas em Portugal</a>.',
    'Fora das obrigações legais, o que determina a exposição real é a <strong>responsabilidade civil de exploração</strong> — os danos causados a terceiros na atividade — e a adequação dos <strong>capitais seguros</strong>. Um capital desatualizado ativa a regra proporcional: uma empresa segurada por metade do valor de reconstrução recebe metade da indemnização, mesmo num sinistro parcial.',
  ],
  essentialIntro:
    'O que qualquer empresa com instalações e colaboradores deve ter em vigor.',
  essential: [
    {
      title: 'Incêndio e elementos da natureza',
      text: 'Edifício, benfeitorias e conteúdo. Nas instalações arrendadas, a cobertura das benfeitorias e do recheio é do arrendatário, não do senhorio.',
    },
    {
      title: 'Responsabilidade civil de exploração',
      text: 'Danos causados a terceiros no exercício da atividade — clientes, fornecedores, visitantes, vizinhos. É a cobertura que responde ao sinistro que a empresa não previu.',
    },
    {
      title: 'Acidentes de trabalho',
      text: 'Obrigatório para todos os trabalhadores por conta de outrem. Cobre despesas de tratamento, indemnizações por incapacidade e pensões, que de outro modo recaem sobre a empresa.',
    },
    {
      title: 'Equipamento e existências',
      text: 'Máquinas, equipamento informático, stock e mercadoria. Os valores devem ser revistos anualmente — é onde a desatualização é mais frequente.',
    },
  ],
  recommendedIntro:
    'As coberturas que decidem se um sinistro é um contratempo ou o fim da atividade.',
  recommended: [
    {
      title: 'Perda de lucros',
      text: 'Compensa a margem bruta perdida e os custos fixos que continuam a correr durante a paralisação. É a cobertura mais ignorada e a que mais empresas fecha quando falta.',
    },
    {
      title: 'Riscos cibernéticos',
      text: 'Ransomware, interrupção de atividade, resposta a incidentes e notificação à CNPD, que o RGPD impõe em 72 horas. Tratámos o cenário concreto em <a href="/blog/ransomware-portugal-riscos-ciberneticos/">ransomware em Portugal</a>.',
    },
    {
      title: 'Responsabilidade civil profissional',
      text: 'Erros e omissões no serviço prestado. Obrigatória em várias profissões reguladas e recomendável em qualquer atividade de consultoria ou projeto.',
    },
    {
      title: 'Responsabilidade de administradores (D&O)',
      text: 'Responde por decisões de gestão que causem dano à sociedade, a sócios ou a terceiros. O património pessoal dos gerentes é a alternativa.',
    },
    {
      title: 'Danos elétricos e avaria de máquinas',
      text: 'Sobretensões e avaria súbita de equipamento produtivo. Em indústria e restauração, é frequentemente o sinistro mais caro que não está coberto.',
    },
    {
      title: 'Deterioração de mercadorias em frio',
      text: 'Para restauração, distribuição alimentar e farmácia. Uma falha de energia prolongada destrói o stock sem qualquer dano visível às instalações.',
    },
  ],
  mistakes: [
    {
      title: 'Capitais que nunca foram revistos',
      text: 'A empresa cresceu, o capital seguro ficou igual. É a causa direta de indemnizações reduzidas por regra proporcional — desenvolvido em <a href="/blog/valores-segurados-desatualizados/">valores segurados desatualizados</a>.',
    },
    {
      title: 'Não contratar perda de lucros',
      text: 'A indemnização paga a reparação, não a receita perdida durante os meses de paragem, nem os salários que continuaram a ser pagos.',
    },
    {
      title: 'Deixar a atividade declarada desatualizada',
      text: 'O CAE inicial deixa de refletir o que a empresa faz. Quando o sinistro decorre da atividade nova, a seguradora tem fundamento para discutir a cobertura.',
    },
    {
      title: 'Sobrepor apólices contratadas em anos diferentes',
      text: 'Coberturas duplicadas em contratos distintos aumentam o custo total sem aumentar a proteção — e complicam a regularização quando duas seguradoras se consideram parcialmente responsáveis.',
    },
    {
      title: 'Tratar a RC de exploração como acessório',
      text: 'Em atividades que recebem público, é a cobertura com maior probabilidade de ser acionada, e o capital contratado é frequentemente simbólico face à exposição real.',
    },
  ],
  steps: STEPS,
  faq: [
    {
      q: 'Que seguros são obrigatórios para uma empresa em Portugal?',
      a: 'O seguro de acidentes de trabalho é obrigatório para todos os trabalhadores por conta de outrem. Acrescem seguros específicos consoante a atividade — construção, transporte, atividades reguladas — e o seguro automóvel das viaturas da empresa.',
    },
    {
      q: 'O multirriscos empresarial é obrigatório?',
      a: 'Não, salvo quando imposto por contrato, por exemplo pelo senhorio das instalações ou por uma entidade financiadora. É, no entanto, a apólice que concentra a proteção do património e da responsabilidade civil.',
    },
    {
      q: 'O que é a regra proporcional e porque é importante?',
      a: 'Se o capital seguro for inferior ao valor real do bem, a indemnização é reduzida na mesma proporção. Metade do capital significa metade da indemnização, mesmo num sinistro parcial de pequeno valor.',
    },
    {
      q: 'O que é a cobertura de perda de lucros?',
      a: 'Compensa a margem bruta que a empresa deixa de gerar e os custos fixos que continuam durante o período de paralisação após um sinistro coberto, dentro do período de indemnização contratado.',
    },
    {
      q: 'Estamos em instalações arrendadas. O que temos de segurar?',
      a: 'O edifício é responsabilidade do senhorio, mas as benfeitorias, o recheio, o equipamento, as existências e a responsabilidade civil de exploração são da empresa. É uma repartição frequentemente mal resolvida no contrato de arrendamento.',
    },
    {
      q: 'Precisamos de seguro de riscos cibernéticos?',
      a: 'Se a empresa trata dados pessoais, factura por sistemas informáticos ou depende deles para operar, a exposição existe. O RGPD obriga à notificação de violações de dados em 72 horas, e o custo de resposta a um incidente raramente é o resgate.',
    },
    {
      q: 'Com que frequência devemos rever as apólices?',
      a: 'Anualmente, e sempre que haja investimento relevante, mudança de instalações, alteração de atividade ou variação significativa do número de colaboradores.',
    },
    {
      q: 'Quanto tempo demora a análise?',
      a: 'Devolvemos um primeiro parecer em 24 horas úteis. A análise completa de uma carteira com várias apólices costuma demorar alguns dias, consoante a documentação disponível.',
    },
  ],
};

EMPRESARIAL.form = quoteForm({
  formName: 'cotacao-empresarial',
  branch: 'Multirriscos Empresarial',
  title: 'Análise de seguros da empresa',
  subtitle: 'Preencha o essencial. Respondemos em 24 horas úteis.',
  submit: 'Pedir análise →',
  micro: GDPR,
  fields: [
    ...COMMON,
    { name: 'empresa', label: 'Empresa', required: true, placeholder: 'Designação social' },
    { name: 'nif', label: 'NIF', placeholder: 'Contribuinte' },
    { name: 'cae', label: 'CAE / atividade', placeholder: 'Ex.: 56101 — restauração' },
    { name: 'n_colaboradores', label: 'N.º de colaboradores', type: 'number', placeholder: 'Ex.: 14' },
    { name: 'volume_negocios', label: 'Volume de negócios anual', placeholder: 'Ex.: 1 200 000 €' },
    { name: 'n_estabelecimentos', label: 'N.º de estabelecimentos', type: 'number', placeholder: 'Ex.: 2' },
    { name: 'morada_estabelecimentos', label: 'Morada(s)', full: true, placeholder: 'Localidade dos estabelecimentos' },
    { name: 'valor_edificio', label: 'Valor do edifício / benfeitorias', placeholder: 'Ex.: 400 000 €' },
    { name: 'valor_equipamentos', label: 'Valor de equipamentos', placeholder: 'Ex.: 90 000 €' },
    { name: 'valor_existencias', label: 'Valor de existências', placeholder: 'Ex.: 60 000 €' },
    {
      name: 'seguros_atuais',
      label: 'Seguros já em vigor',
      type: 'checkboxes',
      options: [
        'Multirriscos',
        'Responsabilidade civil',
        'Acidentes de trabalho',
        'Frota',
        'Riscos cibernéticos',
        'D&O',
      ],
    },
    { name: 'vencimento', label: 'Data de vencimento', type: 'date' },
    { name: 'mensagem', label: 'Notas', type: 'textarea', full: true, placeholder: 'Algo que devamos saber?' },
  ],
});

EMPRESARIAL.finalCta = finalCta(
  'Pedir análise<br><em>de seguros da empresa</em>',
  'Enviamos um parecer sobre os capitais, as sobreposições e as lacunas antes de qualquer proposta comercial. Resposta em 24 horas úteis.',
  'Preencher o formulário',
  wa('Olá, gostaria de uma análise de seguros para a minha empresa.'),
  'Falar por WhatsApp'
);

// =============================================================================
// 2.1 EN — /en/insurance/tvde/
//
// The English page is written for the English-speaking TVDE audience, not
// translated from the Portuguese: it leads with the licence and residency
// mechanics that a foreign driver actually asks about first.
// =============================================================================
const GDPR_EN =
  'We reply within one working day. Your details are used only to prepare the quote and are processed under the GDPR — see our <a href="/en/privacy-policy/">Privacy Policy</a>.';

const TVDE_EN = {
  lang: 'en',
  url: '/en/insurance/tvde/',
  slug: 'tvde',
  metaTitle: 'TVDE Insurance in Portugal | Uber, Bolt & Free Now | Adler & Rochefort',
  metaDescription:
    'TVDE insurance for Uber, Bolt and Free Now drivers and operators in Portugal. Motor liability with professional use, passenger accident cover and fleet policies. Quote within one working day.',
  h1: 'TVDE insurance in Portugal — <em>Uber, Bolt and Free Now</em>',
  heroSub:
    'A private motor policy does not cover carrying passengers for payment. We compare the insurers that underwrite TVDE and come back with like-for-like quotes within one working day — for one car or for a fleet.',
  ctaPrimary: 'Request a TVDE quote',
  ctaSecondary: 'Message us on WhatsApp',
  whatsapp: wa('Hello, I would like a TVDE insurance quote.'),
  trust: ['ASF reg. 425591790/3', 'Driver or operator', 'Reply within one working day'],
  serviceName: 'TVDE insurance',
  serviceType: 'Motor insurance for ride-hailing (TVDE) drivers and operators',
  audience: 'TVDE drivers and operators in Portugal',
  formSourceId: 'quote-tvde-source',
  hreflang: [
    { lang: 'pt-PT', url: '/seguros/tvde/' },
    { lang: 'en-GB', url: '/en/insurance/tvde/' },
  ],
  crumbs: [
    { name: 'Home', url: '/en/' },
    { name: 'Insurance', url: '/en/insurance/tvde/' },
    { name: 'TVDE insurance', url: '/en/insurance/tvde/' },
  ],
  law: [
    'Ride-hailing in Portugal — legally <em>transporte individual e remunerado de passageiros em veículos descaracterizados</em>, or TVDE — is governed by <strong>Law 45/2018 of 10 August</strong>. The vehicle must be attached to an operator licensed by the IMT, and the person driving must hold a valid TVDE driver certificate.',
    'On the insurance side the law requires two separate and cumulative covers. The first is <strong>motor third-party liability</strong>, compulsory for any vehicle, but which here must expressly contemplate carrying passengers for payment. The second is <strong>personal accident cover for the passengers carried</strong>, required specifically by the TVDE regime.',
    'This is where most of the trouble starts. An ordinary private policy excludes carriage for hire and reward. If the accident happens during a platform trip, the insurer can argue that the risk was materially different from the one declared and decline the claim, leaving the driver personally liable. The policy has to declare TVDE use from the outset — not after the first claim.',
  ],
  lawList: [
    'IMT operator licence',
    'Valid TVDE driver certificate',
    'Motor third-party liability declaring professional use',
    'Personal accident cover for passengers carried',
    'Vehicle roadworthiness test (IPO) up to date',
    'Workers’ compensation insurance where drivers are employed',
  ],
  essentialIntro:
    'These are the covers without which the activity is not compliant. None of them is optional for anyone driving on a platform.',
  essential: [
    {
      title: 'Motor third-party liability',
      text: 'Covers damage caused to others. The statutory minimums are €6,450,000 for bodily injury and €1,300,000 for material damage per claim. The policy must state professional use for carriage of passengers.',
    },
    {
      title: 'Passenger personal accident',
      text: 'Required by the TVDE regime. Responds for death, permanent disability and treatment costs of the passengers carried, regardless of whether the driver was at fault.',
    },
    {
      title: 'Workers’ compensation',
      text: 'Compulsory where the operator employs drivers. It covers the driver as an employee — something neither motor liability nor passenger accident cover does.',
    },
    {
      title: 'Driver protection',
      text: 'Where the driver is the policyholder, this cover responds for the driver’s own bodily injury, which third-party liability by definition does not.',
    },
  ],
  recommendedIntro:
    'Not required by law, but in TVDE the car is the tool: losing it means losing the income it produces.',
  recommended: [
    {
      title: 'Own damage',
      text: 'Impact, collision and overturning to your own vehicle. Effectively unavoidable on a leased or financed car, because the finance agreement usually requires it and the outstanding balance does not disappear with the vehicle.',
    },
    {
      title: '24h roadside assistance',
      text: 'Towing and breakdown recovery with no distance excess. In professional use the difference between assistance from km 0 and from km 25 is a real one.',
    },
    {
      title: 'Replacement vehicle',
      text: 'Keeps income running during repair. Check the number of days and whether it applies to mechanical breakdown as well as accident.',
    },
    {
      title: 'Glass cover',
      text: 'Frequent and quick to repair. Bought as a standalone cover, it avoids claiming on own damage and worsening your claims record.',
    },
    {
      title: 'Theft and fire',
      text: 'Available separately from own damage. Relevant for anyone who parks on the street overnight.',
    },
    {
      title: 'Loss of income',
      text: 'A daily allowance while the vehicle is off the road. Not every insurer offers it on TVDE — where it exists, it is one of the covers with the most practical effect.',
    },
  ],
  mistakes: [
    {
      title: 'Driving on a platform with a private policy',
      text: 'The most expensive mistake and the most common one. The exclusion is invisible until the claim is filed, by which point nothing can be done about it.',
    },
    {
      title: 'Assuming the platform covers you',
      text: 'Uber, Bolt and Free Now arrange their own cover, with scopes and limits they define. It does not replace the vehicle’s policy or the operator’s legal obligations.',
    },
    {
      title: 'Forgetting workers’ compensation',
      text: 'An operator with employed drivers must hold workers’ compensation insurance. Its absence is a separate infringement and leaves the operator exposed to the benefits owed to the employee.',
    },
    {
      title: 'Insuring a fleet as a pile of individual policies',
      text: 'From three vehicles up it almost always pays to group them into a fleet policy: one renewal date, one claims history, one negotiation.',
    },
    {
      title: 'Not declaring the real operating area',
      text: 'Rating depends on where the vehicle habitually circulates. Declaring one city and working in another is a misstatement the insurer can rely on.',
    },
  ],
  steps: [
    {
      title: 'Understanding the risk',
      text: 'We look at the vehicle, the driver, the operating pattern and the current policy if there is one. This is where the gap between the declared risk and the real one shows up.',
    },
    {
      title: 'Going to the market',
      text: 'We take the same risk, described the same way, to several insurers. As an ASF-registered insurance broker we do not represent one company — we negotiate with all of those that underwrite the risk.',
    },
    {
      title: 'Side-by-side comparison',
      text: 'You get the quotes in a single table: sums insured, excesses, exclusions and premium. Comparing premiums without comparing exclusions tells you nothing.',
    },
    {
      title: 'Issue and claims',
      text: 'We handle issuance and stay as your point of contact if you have a claim. Notification, loss adjustment and follow-up through to payment go through us.',
    },
  ],
  faq: [
    {
      q: 'Does my private car insurance cover Uber or Bolt trips?',
      a: 'No. Private policies exclude carriage of passengers for hire and reward. To drive on a platform the policy must declare TVDE use, which changes both the rating and the underwriting terms.',
    },
    {
      q: 'Which insurances are compulsory for TVDE?',
      a: 'Motor third-party liability with professional use declared, and personal accident cover for the passengers carried. If the operator employs drivers, workers’ compensation insurance is added to that.',
    },
    {
      q: 'How much does TVDE insurance cost?',
      a: 'It depends on the vehicle, the driver’s age and licence history, the operating area, annual mileage, claims record and the covers chosen. We do not publish price tables because an average figure applies to nobody in particular — the quote is built on your data.',
    },
    {
      q: 'I drive but the car belongs to the operator. Do I need my own cover?',
      a: 'The vehicle policy is the responsibility of the registered owner, normally the operator. Check what that policy does for you, though: third-party liability protects others, not the driver. Driver protection or workers’ compensation is what responds for your own injuries.',
    },
    {
      q: 'Do all insurers accept TVDE?',
      a: 'No. Not every company underwrites it, and those that do apply different criteria on vehicle age, licence seniority and claims history. Knowing where the risk can be placed is part of the intermediary’s job.',
    },
    {
      q: 'Can several TVDE vehicles go on one policy?',
      a: 'Yes, through a fleet policy. It usually makes sense from three vehicles up and simplifies administration, because there is then a single renewal date and an aggregated claims history.',
    },
    {
      q: 'I am not yet resident and have no NIF. Can I be insured?',
      a: 'A Portuguese NIF is required to register a vehicle and to issue a policy on it. Residency is a separate question. If you are still going through that process, tell us at what stage you are and we will confirm what can be issued now and what has to wait.',
    },
    {
      q: 'How long does a quote take?',
      a: 'We reply within one working day of receiving the vehicle and driver details. Issue after acceptance is usually same-day.',
    },
  ],
};

TVDE_EN.form = quoteForm({
  formName: 'quote-tvde-en',
  branch: 'TVDE',
  title: 'TVDE insurance quote',
  subtitle: 'Fill in the essentials. We reply within one working day.',
  submit: 'Request a quote →',
  micro: GDPR_EN,
  fields: [
    { name: 'nome', label: 'Name', required: true, placeholder: 'Your name' },
    { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'you@email.com' },
    { name: 'telefone', label: 'Phone / WhatsApp', type: 'tel', required: true, placeholder: '+351 …' },
    { name: 'nif', label: 'NIF', placeholder: 'Portuguese tax number' },
    {
      name: 'perfil',
      label: 'Are you a driver or an operator?',
      type: 'radio',
      required: true,
      options: ['Driver', 'TVDE operator'],
    },
    { name: 'operador', label: 'TVDE operator name', placeholder: 'If applicable' },
    { name: 'licenca_imt', label: 'IMT licence number', placeholder: 'If applicable' },
    { name: 'n_viaturas', label: 'Number of vehicles', type: 'number', placeholder: '1' },
    { name: 'veiculo', label: 'Make, model and year', placeholder: 'e.g. Toyota Corolla 2021' },
    { name: 'matricula', label: 'Registration plate', placeholder: 'AA-00-AA' },
    { name: 'km_ano', label: 'Estimated km per year', placeholder: 'e.g. 45,000' },
    {
      name: 'zona',
      label: 'Operating area',
      type: 'select',
      placeholder: 'Select',
      options: ['Lisbon', 'Porto', 'Algarve', 'Other'],
    },
    { name: 'anos_carta', label: 'Years holding a licence', type: 'number', placeholder: 'e.g. 12' },
    {
      name: 'sinistros_3_anos',
      label: 'Claims in the last 3 years',
      type: 'select',
      placeholder: 'Select',
      options: ['None', '1', '2', '3 or more'],
    },
    { name: 'seguro_atual', label: 'Current insurer', placeholder: 'If any' },
    { name: 'vencimento', label: 'Renewal date', type: 'date' },
    { name: 'mensagem', label: 'Notes', type: 'textarea', full: true, placeholder: 'Anything we should know?' },
  ],
});

TVDE_EN.finalCta = `<section class="cta-strip" aria-label="Contact">
  <div class="cta-strip-text">
    <h2 class="cta-strip-title">Request a<br><em>TVDE quote</em></h2>
    <p class="cta-strip-sub">Send us the vehicle and driver details. We compare the insurers that underwrite TVDE and come back with the quotes side by side within one working day.</p>
    <div style="margin-top:36px;display:flex;gap:18px;flex-wrap:wrap;align-items:center;">
      <a href="#pedido" class="btn-primary">Fill in the form</a>
      <a href="${wa('Hello, I would like a TVDE insurance quote.')}" class="btn-ghost" rel="noopener" target="_blank">Message us on WhatsApp</a>
    </div>
  </div>
  <div class="cta-strip-actions">
    <div class="cta-contact-item">
      <div>
        <div class="cta-contact-label">Phone</div>
        <div class="cta-contact-value"><a href="tel:+351928226570" style="color:inherit;text-decoration:none;">+351 928 226 570</a></div>
      </div>
    </div>
    <div class="cta-contact-item">
      <div>
        <div class="cta-contact-label">Email</div>
        <div class="cta-contact-value"><a href="mailto:insurance@adlerrochefort.com" style="color:inherit;text-decoration:none;">insurance@adlerrochefort.com</a></div>
      </div>
    </div>
  </div>
</section>`;

// The PT page is the other half of the only real pair in this block.
TVDE.hreflang = [
  { lang: 'pt-PT', url: '/seguros/tvde/' },
  { lang: 'en-GB', url: '/en/insurance/tvde/' },
];

// =============================================================================
// Render
// =============================================================================
const LANDINGS = [TVDE, FROTA, AL, HABITACAO, EMPRESARIAL];

for (const spec of LANDINGS) {
  const rel = related(spec.category).filter((a) => a.status === 'published');
  written.push(await writePage(spec.url.replace(/^\/|\/$/g, ''), landingPage(spec, rel)));
}

// The EN taxonomy is still awaiting sign-off, so the related articles here are
// picked from named English slugs rather than from a category that does not
// exist yet.
const EN_RELATED_SLUGS = [
  'tvde-insurance-portugal',
  'fleet-insurance-common-mistakes',
  'car-insurance-expatriates',
];
const enBySlug = new Map(data.articles.en.filter((a) => a.status === 'published').map((a) => [a.slug, a]));
const enRelated = EN_RELATED_SLUGS.map((s) => enBySlug.get(s)).filter(Boolean);
written.push(await writePage('en/insurance/tvde', landingPage(TVDE_EN, enRelated)));

// --- /seguros/ hub -----------------------------------------------------------
const HUB_CARDS = [
  {
    url: '/seguros/tvde/',
    title: 'Seguro TVDE',
    text: 'Uber, Bolt e Free Now. Responsabilidade civil com uso profissional declarado, acidentes pessoais de passageiros e acidentes de trabalho para motoristas contratados.',
  },
  {
    url: '/seguros/frota/',
    title: 'Seguro de frota',
    text: 'A partir de três viaturas: vencimento único, sinistralidade agregada e negociação sobre o conjunto. Ligeiros, pesados, viaturas de serviço e frotas TVDE.',
  },
  {
    url: '/seguros/alojamento-local/',
    title: 'Seguro de Alojamento Local',
    text: 'Responsabilidade civil exigida pelo regime de AL, multirriscos da unidade, danos causados por hóspedes e perda de exploração.',
  },
  {
    url: '/seguros/habitacao/',
    title: 'Seguro de habitação',
    text: 'Multirriscos habitação sobre o capital de reconstrução real. Danos por água, recheio, responsabilidade civil familiar e cláusula de desocupação.',
  },
  {
    url: '/seguros/empresarial/',
    title: 'Multirriscos empresarial',
    text: 'Edifício, equipamento, existências, responsabilidade civil de exploração e perda de lucros. Com revisão dos capitais antes da cotação.',
  },
  {
    url: '/seguros/auto/',
    title: 'Seguro automóvel',
    text: 'Responsabilidade civil obrigatória, danos próprios, assistência e proteção do condutor para uso particular.',
  },
  {
    url: '/seguros/condominios/',
    title: 'Seguro de condomínio',
    text: 'Partes comuns, responsabilidade civil do condomínio e obrigações do administrador nos edifícios em propriedade horizontal.',
  },
  {
    url: '/seguros-empresas-lagos/',
    title: 'Seguros para empresas em Lagos',
    text: 'Apoio presencial no Algarve a empresas de turismo, restauração e serviços, a partir do escritório de Lagos.',
  },
];

const hubHead = metaHead({
  title: 'Seguros para empresas e particulares em Portugal | Adler & Rochefort',
  description:
    'Todas as áreas em que trabalhamos: TVDE, frota, alojamento local, habitação, multirriscos empresarial, automóvel e condomínios. Mediador de seguros registado na ASF.',
  canonical: '/seguros/',
  robots: 'index, follow',
  hreflang: [
    { lang: 'pt-PT', url: '/seguros/' },
    { lang: 'x-default', url: '/seguros/' },
  ],
});

const hubCrumbs = [
  { name: 'Início', url: '/' },
  { name: 'Seguros', url: '/seguros/' },
];

const hubBody = [
  breadcrumbHtml(hubCrumbs),
  `<header class="page-head">
  <div class="section-eyebrow">Áreas de especialização</div>
  <h1 class="section-title" style="margin-bottom:28px;">Seguros para <em>empresas e particulares</em></h1>
  <div class="page-intro">
    <p>Somos um mediador de seguros registado na ASF com o n.º 425591790/3. Não representamos uma seguradora: levamos o mesmo risco, descrito da mesma forma, a várias companhias e apresentamos as propostas lado a lado — capitais, franquias, exclusões e prémio.</p>
    <p>Estas são as áreas em que trabalhamos com maior profundidade. Cada página explica o que a lei exige, que coberturas existem, o que costuma faltar nas apólices que revemos e permite pedir cotação diretamente. Para outras necessidades — vida, saúde, acidentes pessoais, caução, responsabilidade civil profissional — <a href="/#contacto">fale connosco</a>.</p>
  </div>
</header>`,
  `<section class="lp-section">
  <div class="lp-grid">
${HUB_CARDS.map(
  (c) => `    <a href="${c.url}" class="lp-card fade-up" style="text-decoration:none;color:inherit;display:block;">
      <h3>${esc(c.title)}</h3>
      <p>${esc(c.text)}</p>
      <p style="margin-top:14px;color:var(--primary);font-weight:600;font-size:13px;">Ver detalhes &rarr;</p>
    </a>`
).join('\n')}
  </div>
</section>`,
  PARTNERS_PT,
  CTA_PT,
].join('\n\n');

const hubBodyEnd = [
  jsonLd({
    '@context': 'https://schema.org',
    '@graph': [
      ORGANIZATION,
      {
        '@type': 'WebSite',
        '@id': `${ORIGIN}/#website`,
        url: `${ORIGIN}/`,
        name: 'Adler & Rochefort',
        inLanguage: 'pt-PT',
        publisher: { '@id': `${ORIGIN}/#organization` },
      },
      {
        '@type': 'ItemList',
        name: 'Áreas de especialização',
        itemListElement: HUB_CARDS.map((c, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          url: ORIGIN + c.url,
          name: c.title,
        })),
      },
    ],
  }),
  jsonLd(breadcrumbLd(hubCrumbs)),
].join('\n');

written.push(await writePage('seguros', page({ lang: 'pt-PT', head: hubHead, body: hubBody, bodyEnd: hubBodyEnd })));

console.log(written.join('\n'));
await writeFile(join(ROOT, 'data', 'generated-landing-pages.json'), JSON.stringify(written, null, 2) + '\n');
