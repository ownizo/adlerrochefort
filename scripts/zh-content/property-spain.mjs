/**
 * /zh/buying-property-spain/ (cluster es-property)
 *
 * Search intent: 在西班牙买房 保险 / 西班牙购房流程 / 西班牙房贷 银行保险 —
 * a buyer between reservation and completion who wants to know when each
 * piece of cover has to be in place.
 *
 * Original copy organised by the Spanish purchase sequence: NIE, reserva,
 * contrato de arras, due diligence (nota simple, community and IBI
 * certificates), escritura before the notario, Registro de la Propiedad.
 * The mortgage section states the general rule under the 2019 mortgage-credit
 * law — the bank may require the property to be insured and may reward tied
 * products, but cannot oblige you to take its own policy. The sum insured is
 * rebuild cost, with the tasación's valor de seguro as a starting point.
 * Residence and tax points are kept general and flagged as outside insurance
 * advice; the golden-visa line is stated as the fact it is (new applications
 * ended in April 2025) so a reader does not conflate buying with residence.
 */
import { BREADCRUMB_ES, siblingNote } from './shared.mjs';

export const PROPERTY_ES_PAGE = {
  slug: 'buying-property-spain',
  url: '/zh/buying-property-spain/',
  cluster: 'es-property',
  title: '在西班牙买房：从定金合同到公证交割的保险安排 | Adler & Rochefort',
  description:
    '在西班牙买房各阶段的保险：定金合同、公证与产权登记、银行房贷与保险捆绑、保额按重建费用、社区保险，以及保单从交割当天生效。',
  keywords:
    '在西班牙买房, 西班牙买房 保险, 西班牙购房流程, contrato de arras, 西班牙公证, Registro de la Propiedad, 西班牙房贷保险, 西班牙非居民买房, 马贝拉买房, 巴塞罗那买房, 瓦伦西亚买房',
  eyebrow: '西班牙 · 买房',
  h1: '在西班牙买房：保险该在哪一步到位',
  standfirst:
    '西班牙的购房流程有清楚的几个节点：定金合同、尽职调查、公证签署、产权登记。保险不需要最早办，但必须在公证签署那一天已经生效——而保额、社区保险与银行条件，最好在签定金合同之前就弄清楚。',
  published: '2026-09-27T09:00:00+00:00',
  modified: '2026-09-27T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ES, { name: '在西班牙买房' }],
  pullquote: '在公证处签字的那一刻，房子的风险就转到了您身上。保单晚一天生效，那一天就是自己扛。',
  schemaType: 'Article',
  formHeading: '西班牙买房相关的保险咨询',
  formBranch: 'ZH · Home',
  formSubject: '西班牙买房的保险安排',
  formCta: '提交咨询',
  formIntro:
    '请说明房产所在城市或地区、类型与面积、预计公证签署日期、是否有西班牙的房贷，以及买后打算自住、作第二居所还是出租。',
  formPlaceholder:
    '例如：瓦伦西亚一套 160 平方米的公寓，1965 年建成、刚翻新，预计十一月公证签署，有西班牙银行房贷；买后作为第二居所。',
  sections: `
<section class="section plain" aria-labelledby="liucheng">
  <div class="container narrow article-body">${siblingNote({
    label: '也在葡萄牙看房？',
    href: '/zh/buying-property-portugal/',
    text: '在葡萄牙买房：分阶段的保险安排',
  })}
    <h2 id="liucheng">西班牙购房流程与保险的位置</h2>
    <ol class="process-steps">
      <li><div><strong>取得 NIE。</strong><span>外国人在西班牙买房、开户、签合同、投保都需要外国人身份号码（<em>NIE</em>）。</span></div></li>
      <li><div><strong>预订与定金合同（<em>contrato de arras</em>）。</strong><span>买方支付一笔定金锁定房产。最常见的 <em>arras penitenciales</em> 意味着：买方反悔，定金归卖方；卖方反悔，须双倍返还。</span></div></li>
      <li><div><strong>尽职调查。</strong><span>向产权登记处（<em>Registro de la Propiedad</em>）调取产权摘要（<em>nota simple</em>），确认产权人与抵押等负担；向社区索取无欠费证明，核对房产税（<em>IBI</em>）缴纳情况与建筑许可。</span></div></li>
      <li><div><strong>公证签署（<em>escritura pública</em>）。</strong><span>在公证人（<em>notario</em>）面前签署买卖契约并付清房款，房产的风险从这一刻转移到买方。<strong>保险必须在这一天已经生效。</strong></span></div></li>
      <li><div><strong>产权登记。</strong><span>契约提交产权登记处登记，完成后您的产权对第三方具有效力。</span></div></li>
    </ol>
  </div>
</section>

<section class="section tint" aria-labelledby="dingjin-qian">
  <div class="container narrow article-body">
    <h2 id="dingjin-qian">签定金合同之前：值得先弄清的三件事</h2>
    <p>定金一旦支付，退出的代价就很高。以下三件事在签 <em>arras</em> 之前了解清楚，花费很少，却可能改变您的决定或谈判：</p>
    <ul>
      <li><strong>社区保险。</strong>公寓或封闭式住宅区，向社区管理人索取建筑保险的摘要：保什么、保额多少、多久没有调整过。保障薄弱的社区保险，意味着一次大的屋面或外墙损失可能需要业主额外分摊。</li>
      <li><strong>地区风险。</strong>在瓦伦西亚、穆尔西亚与安达卢西亚沿海，查阅官方洪水区划图；在山坡别墅区，了解山火风险与防火要求。这些会影响保险条件，也会影响您对房产本身的判断。</li>
      <li><strong>出租是否合法。</strong>如果打算作旅游短租，先确认所在自治区与城市是否还发放许可、该房产是否已有登记。没有许可的出租，保险往往无从谈起。</li>
    </ul>
  </div>
</section>

<section class="section plain" aria-labelledby="fangdai-yu-baoxian">
  <div class="container narrow article-body">
    <h2 id="fangdai-yu-baoxian">银行房贷与保险：可以要求投保，不能强迫买它的</h2>
    <p>有西班牙房贷时，银行会要求房产投保，并在保单上被列为受益人。按照 2019 年的房贷法规，银行可以用利率优惠（<em>bonificación</em>）鼓励您购买其房屋保险、人寿保险或其他产品，但<strong>不能强迫您购买银行自己的保险</strong>；只要您的保单满足贷款合同约定的条件，银行应当接受。</p>
    <p>比较时，把三件事放在一起看：银行保险的保障范围与保额是否合适、与其他方案的保费差额、以及利率优惠在整个贷款期内的价值。同时留意优惠的条件——若日后更换保险，利率可能随之调整。</p>
    <p class="legal-note">具体要求以贷款合同与银行的书面条件为准。本页为一般性说明。</p>
  </div>
</section>

<section class="section tint" aria-labelledby="baoe">
  <div class="container narrow article-body">
    <h2 id="baoe">保额：按重建费用，不按成交价</h2>
    <p>建筑保额应当对应把建筑按原有标准重新建起来的成本，不包含土地与位置价值。成交价与房产税籍价值（<em>valor catastral</em>）都不是这个数字。</p>
    <p>一个实用的起点是银行评估报告（<em>tasación</em>）中的“保险价值”（<em>valor de seguro</em>）——它通常就是评估师估算的重建成本。但对于刚翻新、用料考究或有定制工艺的住宅，这个数字可能偏低；较高价值的房产，保险公司可以安排现场查勘确认重建费用，并在接受建议保额后放弃比例赔付。</p>
    <p>这一点在西班牙还有额外的意义：洪水、地震等巨灾由 Consorcio de Compensación de Seguros 承担，但它按您保单上的保额计算赔付。保额写低了，巨灾面前同样按比例打折。</p>
  </div>
</section>

<section class="section plain" aria-labelledby="jiaoge-dangtian">
  <div class="container narrow article-body">
    <h2 id="jiaoge-dangtian">公证签署当天：逐项核对</h2>
    <ol class="process-steps">
      <li><div><strong>生效日期与时间。</strong><span>保单从签署当天生效，不留空档。</span></div></li>
      <li><div><strong>投保人与被保险人。</strong><span>姓名与 NIE 与契约一致；夫妻共同持有时两人都在保单上。</span></div></li>
      <li><div><strong>地址与房产描述。</strong><span>与产权登记一致，包括车位与储藏室。</span></div></li>
      <li><div><strong>建筑与室内财物保额。</strong><span>建筑按重建费用；室内财物按实际计划，即使暂时是空房，也为即将运入的家具与物品留出保额。</span></div></li>
      <li><div><strong>银行受益人条款。</strong><span>有贷款时，银行已按合同要求列为受益人。</span></div></li>
      <li><div><strong>使用方式。</strong><span>自住、第二居所或出租，如实写明。</span></div></li>
    </ol>
  </div>
</section>

<section class="section tint" aria-labelledby="mai-hou">
  <div class="container narrow article-body">
    <h2 id="mai-hou">买下之后：还要补的几块</h2>
    <ul>
      <li><strong>贵重物品与收藏。</strong>搬入字画、瓷器、首饰与手表后，按评估后的约定价值逐项列明，而不是让它们落在室内财物的分项限额里。</li>
      <li><strong>家庭责任。</strong>房屋保单附带的责任额度通常有限；有泳池、家政人员或经常招待访客的家庭，应安排百万级、全球有效的家庭责任。</li>
      <li><strong>空置期的安排。</strong>作为第二居所时，确认空置条款，考虑漏水关断阀与联网安防。</li>
      <li><strong>装修之后。</strong>翻新完成后更新建筑保额，否则理赔时仍按旧的数字计算。</li>
    </ul>
    <div class="callout">
      <span class="callout-label">关于居留与税务</span>
      西班牙已于 2025 年 4 月停止受理以购房投资取得居留（黄金签证）的新申请，买房本身不再是一条居留途径。非居民业主在西班牙通常仍有申报义务（例如非居民所得税），部分情况下需要指定税务代表。这些属于移民与税务顾问的范围，不属于保险咨询，请向相应的专业人士确认。
    </div>
  </div>
</section>

<section class="section plain" aria-labelledby="liu-ge-cuowu">
  <div class="container narrow article-body">
    <h2 id="liu-ge-cuowu">在西班牙买房时最常见的六个保险错误</h2>
    <ol>
      <li><strong>把成交价或税籍价值填成保额。</strong></li>
      <li><strong>默认接受银行的保险，</strong>没有比较范围、保费与利率优惠的整体账。</li>
      <li><strong>以为社区有保险，自己就不用买。</strong></li>
      <li><strong>保单生效日晚于公证签署日。</strong></li>
      <li><strong>作为第二居所却按常住申报，</strong>空置条款在理赔时成为问题。</li>
      <li><strong>先出租、后确认许可与保险。</strong></li>
    </ol>
  </div>
</section>

<section class="section tint" aria-labelledby="women-de-zuoyong">
  <div class="container narrow article-body">
    <h2 id="women-de-zuoyong">我们在这件事里做什么</h2>
    <ul>
      <li><strong>签定金合同之前。</strong>帮您看社区保险摘要与地区风险对保险条件的影响。</li>
      <li><strong>公证签署之前。</strong>确认重建保额、比较银行保险与其他方案、把使用方式与贵重物品写进保单，并在签字前用英语书面说明保障、自负额与除外责任；确保保单在签署当天生效。</li>
      <li><strong>买下之后。</strong>补上贵重物品、家庭责任与空置期的安排，装修后更新保额，理赔时协助报案与跟进。</li>
    </ul>
    <p class="legal-note">本页为一般性说明，不构成法律、税务或移民意见。服务语言为英语，书面进行。</p>
  </div>
</section>`,
  faqTitle: '在西班牙买房：保险相关的常见问题',
  faq: [
    {
      q: '在西班牙买房，保险应该什么时候生效？',
      a: '<p>最迟在公证签署（<em>escritura</em>）当天生效。房产的风险在签署那一刻转移到买方，保单晚一天生效，那一天的损失就由您自己承担。建议在签署前一至两周确定方案。</p>',
    },
    {
      q: '签定金合同时需要买保险吗？',
      a: '<p>通常不需要，这时房产仍属于卖方。但建议在签定金合同之前了解社区保险、地区洪水与山火风险，以及出租许可情况——这些可能影响您的决定，而定金一旦支付，退出的代价很高。</p>',
    },
    {
      q: '银行要求我买它的房屋保险，必须接受吗？',
      a: '<p>不必须。银行可以要求房产投保并列为受益人，也可以用利率优惠鼓励您购买其产品，但不能强迫您购买银行自己的保险。只要您的保单满足贷款合同约定的条件，银行应当接受。比较时把保障、保费差额与利率优惠放在一起算。</p>',
    },
    {
      q: '保额应该填多少？',
      a: '<p>按重建费用，而不是成交价或税籍价值。银行评估报告中的“保险价值”（<em>valor de seguro</em>）是一个实用的起点；较高价值的房产，保险公司可以安排现场查勘确认重建费用。</p>',
    },
    {
      q: '我不是西班牙居民，可以在西班牙买房并投保吗？',
      a: '<p>可以。需要 NIE、身份证明与可用于缴费的付款方式。关于居留与税务：西班牙已于 2025 年 4 月停止受理购房投资居留（黄金签证）的新申请；非居民业主通常仍有税务申报义务，请向税务顾问确认。</p>',
    },
    {
      q: '房子买来打算出租，保险有什么不同？',
      a: '<p>出租用途需要在保单上写明，并安排对租客与访客的责任。旅游短租还需要所在自治区与城市的许可，规则各地不同，部分城市限制很严。建议先确认许可，再安排保险。</p>',
    },
  ],
  related: [
    { url: '/zh/home-insurance-spain/', label: '西班牙高价值房屋保险' },
    { url: '/zh/insurance-guide-spain/', label: '西班牙保险指南' },
    { url: '/zh/buying-property-portugal/', label: '在葡萄牙买房：分阶段的保险安排' },
  ],
};
