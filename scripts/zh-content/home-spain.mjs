/**
 * /zh/home-insurance-spain/ (cluster es-home)
 *
 * Search intent: 西班牙房屋保险 / 西班牙别墅保险 / 西班牙房产保险 — an owner of a
 * higher-value home in Madrid, Barcelona, Valencia or on the Costa del Sol,
 * often non-resident for part of the year.
 *
 * Original copy, not the Portugal page with the country swapped. The spine is
 * the three layers a Spanish home actually sits under — the comunidad's
 * building policy, the owner's own policy, and the Consorcio de Compensación
 * de Seguros for extraordinary risks — because that is the real structural
 * difference from Portugal (where earthquake is an optional extra) and from
 * China (where most urban owners never insure the flat at all).
 *
 * The high-value framework (house, contents, valuables, liability, family +
 * disclaimer) follows cov.py, insurer-neutral and price-free, condensed so the
 * Spain-specific sections carry the page. No prices, no insurer names.
 */
import { BREADCRUMB_ES, siblingNote } from './shared.mjs';

export const HOME_ES_PAGE = {
  slug: 'home-insurance-spain',
  url: '/zh/home-insurance-spain/',
  cluster: 'es-home',
  title: '西班牙高价值房屋保险：巨灾风险与重建保额 | Adler & Rochefort',
  description:
    '西班牙高价值住宅保险：社区保险、自己的保单与 Consorcio 巨灾保障如何分工；重建保额、艺术品按约定价值承保、空置与出租用途。马德里、巴塞罗那、瓦伦西亚、太阳海岸。',
  keywords:
    '西班牙房屋保险, 西班牙别墅保险, 西班牙高价值房屋保险, seguro de hogar, Consorcio de Compensación de Seguros, 西班牙洪水保险, 西班牙社区保险, comunidad de propietarios, 马贝拉别墅保险, 巴塞罗那公寓保险, 瓦伦西亚房屋保险',
  eyebrow: '西班牙 · 高价值住宅',
  h1: '西班牙高价值房屋保险：先弄清三层保障',
  standfirst:
    '在西班牙，一处住宅同时处在三层保障之下：社区为建筑投保、您自己的保单（<em>seguro de hogar</em>）保户内与家业、公共机构 Consorcio 承担洪水与地震等巨灾。三层之间的缝隙，就是理赔时最容易出问题的地方。',
  published: '2026-09-27T09:00:00+00:00',
  modified: '2026-09-27T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ES, { name: '西班牙房屋保险' }],
  pullquote: 'Consorcio 赔的是洪水和地震，但它按您保单上的保额来算。保额写低了，巨灾面前也一样打折。',
  schemaType: 'Article',
  formHeading: '西班牙房屋保险咨询',
  formBranch: 'ZH · Home',
  formSubject: '西班牙房屋保险',
  formCta: '提交咨询',
  formIntro:
    '请说明房产所在城市或地区、类型与面积、全年的使用方式（自住、第二居所或出租），以及是否有需要单独列明的艺术品与贵重物品。如有现有保单，也请一并发给我们。',
  formPlaceholder:
    '例如：马贝拉一栋 2008 年建成的独立别墅，约 420 平方米，带泳池；每年居住约五个月；另有字画、瓷器与手表需要单独列明。',
  sections: `
<section class="section plain" aria-labelledby="san-ceng">
  <div class="container narrow article-body">${siblingNote({
    label: '在葡萄牙也有房产？',
    href: '/zh/home-insurance-portugal/',
    text: '葡萄牙高价值房屋保险',
  })}
    <h2 id="san-ceng">三层保障，各管一段</h2>
    <p><strong>第一层：社区的建筑保险。</strong>公寓楼与封闭式住宅区通常由业主社区（<em>comunidad de propietarios</em>）统一为建筑整体投保：结构、屋面、外墙、楼梯、电梯、公共管线，以及泳池、花园等公共设施。它保的是“楼”，不是“家”。</p>
    <p><strong>第二层：您自己的保单。</strong><em>Seguro de hogar</em> 分成两个保额：建筑（<em>continente</em>）与室内财物（<em>contenido</em>）。住公寓的业主，建筑部分通常只需覆盖户内的装修与固定设施，因为结构已由社区投保；独立别墅的业主则要为整栋建筑、围墙、泳池与附属建筑投保。家具、艺术品、首饰与个人物品，只能由这一层保障。</p>
    <p><strong>第三层：Consorcio de Compensación de Seguros。</strong>这是西班牙独有的公共机构，承担“非常风险”（<em>riesgos extraordinarios</em>）。它不需要单独购买：只要您有一份有效的财产保单，附加费就已经包含在保费里，发生巨灾时由 Consorcio 直接赔付。</p>
    <div class="callout">
      <span class="callout-label">与国内、与葡萄牙的差别</span>
      在国内城市，很少有业主为自己的住宅单独投保；在葡萄牙，地震通常是一项需要单独选择的附加保障。西班牙的逻辑不同：巨灾风险通过 Consorcio 由全体投保人共同分担，但只惠及“已经有保单的人”，而且按这份保单写明的保额计算。
    </div>
  </div>
</section>

<section class="section tint" aria-labelledby="consorcio">
  <div class="container narrow article-body">
    <h2 id="consorcio">Consorcio 承担什么，不承担什么</h2>
    <p>按照 Consorcio 的规则，它承担的非常风险主要包括：</p>
    <ul>
      <li><strong>自然现象。</strong>洪水（<em>inundación extraordinaria</em>）、地震与海啸、火山喷发、非典型气旋风暴（按其定义，包括风速超过每小时 120 公里的强风）、海浪冲击（<em>embate de mar</em>），以及天体坠落。</li>
      <li><strong>社会与政治事件。</strong>恐怖主义、暴乱、民众骚乱，以及和平时期武装力量的行动。</li>
    </ul>
    <p>需要清楚的是它的边界：</p>
    <ul>
      <li><strong>普通的风暴与暴雨，由您的保险公司处理。</strong>未达到 Consorcio 定义的风雨、冰雹、屋顶进水，属于您自己保单的保障范围，适用保单本身的条件与自负额。</li>
      <li><strong>没有保单，就没有 Consorcio。</strong>它不是政府救济，只对有效保单所覆盖的财产赔付。</li>
      <li><strong>保额决定赔款。</strong>Consorcio 按您保单上的保额与条件计算赔付，保额不足同样适用比例赔付。</li>
      <li><strong>报案有专门的渠道。</strong>巨灾发生后，理赔向 Consorcio 提出（可通过保险公司或代理人协助），需要照片、清单与保单资料。我们会协助整理并提交。</li>
    </ul>
    <p class="legal-note">Consorcio 的承保范围、定义与赔付规则由西班牙法规确定，可能调整。本页为一般性说明，以 Consorcio 的现行规则与您的保单条款为准。</p>
  </div>
</section>

<section class="section plain" aria-labelledby="diqu-fengxian">
  <div class="container narrow article-body">
    <h2 id="diqu-fengxian">不同地区，风险不同</h2>
    <p>西班牙的住宅风险有明显的地区差异。核保时保险公司会看，理赔时也会体现：</p>
    <ul>
      <li><strong>瓦伦西亚、穆尔西亚与安达卢西亚沿海：DANA 与突发洪水。</strong>秋季的高空冷涡（<em>DANA</em>）可以在几小时内带来极端降雨。2024 年瓦伦西亚的洪灾之后，地下室、地下车库、底层住宅与停放车辆的保障方式成为业主最关心的问题。建议在买房前查阅官方洪水区划图，并确认保额与室内财物清单是最新的。</li>
      <li><strong>太阳海岸与地中海山坡地带：山火。</strong>被松林与灌木包围的别墅，夏季山火风险真实存在。防火隔离带、植被管理与泳池作为消防水源，都可能影响核保。</li>
      <li><strong>沿海一线：风暴与海浪。</strong>海滨住宅的阳台、玻璃、围墙与花园容易受冬季风暴影响；达到定义的海浪冲击由 Consorcio 承担，其余属于您自己的保单。</li>
      <li><strong>巴塞罗那与马德里的老建筑：水渍。</strong>百年建筑的管线与屋面是水渍理赔的主要来源，也最常涉及与楼上楼下邻居、与社区之间的责任划分。</li>
      <li><strong>加那利群岛：火山与风。</strong>2021 年拉帕尔马岛的火山喷发由 Consorcio 承担；岛上的强风与海洋性气候也影响建筑的维护要求。</li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="gao-jiazhi-kuangjia">
  <div class="container">
    <h2 id="gao-jiazhi-kuangjia">高价值住宅的保障框架</h2>
    <p>价值较高的住宅，需要的不是标准零售保单，而是逐一核保的私人客户保单。以下是我们所安排的保单的参考条件，每一份方案都会以书面形式逐项对照：</p>
    <div class="feature-grid">
      <div class="feature-card"><h3>房屋本身</h3><p>保险公司可安排现场查勘确认重建费用；接受建议保额后放弃比例赔付，全损时保证重建；同等标准的临时住所；花园、围墙、泳池与附属建筑各有独立保额。</p></div>
      <div class="feature-card"><h3>室内财物</h3><p>家中、旅途与第二居所均按一切险承保；接受建议保额后可在约定幅度内超出保额赔付；意外损坏、酒窖与储藏室盗窃、户外家具不设掏空保障的分项限额。</p></div>
      <div class="feature-card"><h3>艺术品、收藏与贵重物品</h3><p>字画、瓷器、首饰、名表与收藏按评估后的约定价值列明，全损按约定价值赔付；修复后贬值予以补偿；新购藏品在约定期限内自动承保。</p></div>
      <div class="feature-card"><h3>家庭个人责任</h3><p>保额可达数百万欧元、全球有效，抗辩费用另计；覆盖全家，包括在外地求学的子女，以及与住所相关的访客与家政人员。</p></div>
      <div class="feature-card"><h3>家庭保障</h3><p>部分保单还包括绑架与勒索、入室抢劫与劫车、威胁与跟踪、网络欺凌后的专业支援，以及事件发生后的心理支援。</p></div>
    </div>
    <p class="legal-note">以上是我们所安排的高价值资产保单的参考条件。保障范围、限额、自负额与除外责任因保险公司与风险而异，仅以最终出具的保单条款为准。</p>
  </div>
</section>

<section class="section plain" aria-labelledby="chongjian-baoe">
  <div class="container narrow article-body">
    <h2 id="chongjian-baoe">保额：重建费用，不是成交价</h2>
    <p>建筑保额（<em>capital de continente</em>）应当对应重建费用——按今天的人工与材料价格，把建筑按原有标准重新建起来的成本。它不包含土地与位置价值。在马贝拉或巴塞罗那的好地段，成交价里位置占了很大比例，重建费用往往明显低于成交价；反过来，用料考究、工艺复杂的住宅，重建费用也可能高于一般估算。</p>
    <p>几个常被误用的数字：</p>
    <ul>
      <li><strong>成交价。</strong>包含土地与位置，不是重建费用。</li>
      <li><strong>房产税籍价值（<em>valor catastral</em>）。</strong>用于税务，与重建成本没有直接关系。</li>
      <li><strong>银行评估（<em>tasación</em>）。</strong>评估报告里通常有一个“保险价值”（<em>valor de seguro</em>），可以作为参考起点，但未必反映高端装修与定制工艺。</li>
    </ul>
    <p>保额明显偏低时，西班牙保单同样适用比例赔付（<em>regla proporcional</em>）：假设保额只相当于应有金额的六成，一次局部损失也可能只赔六成。这对 Consorcio 承担的巨灾损失同样适用——这正是私人客户保单通过查勘与建议保额取消比例赔付的意义所在。</p>
  </div>
</section>

<section class="section tint" aria-labelledby="shequ-baoxian">
  <div class="container narrow article-body">
    <h2 id="shequ-baoxian">社区保险覆盖到哪里</h2>
    <p>买公寓或封闭住宅区里的房产时，社区保险是必须看的一份文件。需要确认三件事：</p>
    <ul>
      <li><strong>它保什么、保额多少。</strong>向社区管理人（<em>administrador de fincas</em>）索取保单摘要。有的社区保单范围完整，有的只保最基本的风险，保额也可能多年未调整。</li>
      <li><strong>公共部分与私有部分的界线。</strong>阳台、窗户、露台、屋顶平台属于谁，由产权文件与社区章程决定。渗水事故里，这条界线决定由谁的保单赔付。</li>
      <li><strong>它不保您户内的东西。</strong>您的装修、厨房、家具、艺术品与个人物品，与社区保险无关。户内的水管漏水泡了楼下，通常也是您自己保单的责任部分来处理。</li>
    </ul>
  </div>
</section>

<section class="section plain" aria-labelledby="kongzhi-yu-chuzu">
  <div class="container narrow article-body">
    <h2 id="kongzhi-yu-chuzu">非居民业主、空置期与出租用途</h2>
    <p><strong>空置期。</strong>许多保单对连续无人居住的天数有上限，超过后盗窃与水渍等保障可能受限。一年只住几个月的业主，应当把住宅申报为第二居所（<em>vivienda secundaria</em>），并考虑定期查看、漏水自动关断阀与联网安防——这些往往也是保险公司的核保条件。</p>
    <p><strong>出租用途。</strong>长租与旅游短租在保单上是两件不同的事。旅游短租需要所在自治区的登记或许可，规则各地不同：巴塞罗那等城市限制很严，安达卢西亚、瓦伦西亚与马德里各有登记要求，近年全国层面也增加了统一登记。<strong>先确认出租合法，再安排保险</strong>——没有许可的出租，保险往往无从谈起。合法出租的住宅，需要在保单上写明用途，并安排对租客与访客的责任保障。</p>
    <p><strong>房贷。</strong>银行可以要求房产有保险，但您没有义务购买银行自己的保险产品，只要保单满足贷款合同的条件。详见<a href="/zh/buying-property-spain/">在西班牙买房的保险安排</a>。</p>
  </div>
</section>

<section class="section tint" aria-labelledby="women-de-zuoyong">
  <div class="container narrow article-body">
    <h2 id="women-de-zuoyong">我们在这件事里做什么</h2>
    <ul>
      <li><strong>投保前。</strong>核对社区保险、确认重建保额（必要时安排查勘）、将艺术品与贵重物品按约定价值列明、把实际使用方式写进保单，并在签字前用英语书面说明保额、自负额、主要除外责任与报案时限。</li>
      <li><strong>保单期间。</strong>装修、加建泳池、使用方式变化、开始出租、新购藏品——这些都需要更新保单。</li>
      <li><strong>理赔时。</strong>协助向保险公司或 Consorcio 报案、整理照片与清单、跟进查勘与时限。西班牙法律规定的一般报案时限是知悉事故后七天内，保单可以约定更长。</li>
    </ul>
    <p class="legal-note">服务语言为英语，书面进行。保单以西班牙语出具，适用西班牙法律。</p>
  </div>
</section>`,
  faqTitle: '西班牙房屋保险：常见问题',
  faq: [
    {
      q: '在西班牙，洪水和地震包含在房屋保险里吗？',
      a: '<p>由 Consorcio de Compensación de Seguros 承担。只要您有一份有效的财产保单，Consorcio 的附加费就已经包含在保费中，洪水、地震、火山喷发、非典型气旋风暴与海浪冲击等非常风险由它直接赔付。未达到其定义的普通风雨，则由您的保险公司按保单条件处理。</p>',
    },
    {
      q: '社区已经有保险，我还需要自己投保吗？',
      a: '<p>需要。社区保险保的是建筑整体与公共设施，不保您户内的装修、家具、艺术品与个人物品，也通常不处理您户内漏水对邻居造成的损害。先向社区管理人索取保单摘要，再用自己的保单补上缺口。</p>',
    },
    {
      q: '保额应该按成交价还是重建费用？',
      a: '<p>按重建费用。成交价与税籍价值都不是重建成本；银行评估报告中的“保险价值”可以作为参考起点。保额明显偏低会触发比例赔付，这一点对 Consorcio 承担的巨灾损失同样适用。</p>',
    },
    {
      q: '我一年只在西班牙住几个月，保单有什么要注意的？',
      a: '<p>主要是空置条款。连续无人居住超过一定天数后，盗窃与水渍等保障可能受限。应当如实申报为第二居所，并考虑定期查看、漏水关断阀与安防系统。具体天数与条件因保险公司而异，我们会在书面建议中写明。</p>',
    },
    {
      q: '房子用于旅游短租，自住的保单还有效吗？',
      a: '<p>通常不够。旅游短租需要所在自治区的登记或许可，保单也需要写明出租用途，并包含对租客与访客的责任。未申报的出租用途，是理赔被拒的常见原因。</p>',
    },
    {
      q: '字画、瓷器和手表怎么投保？',
      a: '<p>按评估后的约定价值逐项列明。全损时按约定价值赔付，不在折旧上争执；修复后贬值也可获补偿。存放在西班牙与其他国家的藏品，应按实际存放地点分别列明。</p>',
    },
    {
      q: '银行要求我买它的房屋保险，必须接受吗？',
      a: '<p>不必须。银行可以要求房产投保，并可能以利率优惠鼓励您购买其产品，但您有权选择其他保险公司，只要保单满足贷款合同的条件。比较时把保障范围、保费差额与利率优惠放在一起看。</p>',
    },
  ],
  related: [
    { url: '/zh/buying-property-spain/', label: '在西班牙买房：各阶段的保险安排' },
    { url: '/zh/liability-insurance-spain/', label: '西班牙家庭责任保险' },
    { url: '/zh/insurance-guide-spain/', label: '西班牙保险指南' },
  ],
};
