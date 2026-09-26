/**
 * /zh/ — the Chinese market homepage, which is also the cluster hub.
 *
 * Search intent: 葡萄牙保险 / 葡萄牙华人保险 — someone who lives in Portugal,
 * is moving here, or owns property here and wants to know how the market
 * works before buying anything.
 *
 * The angle that makes this page Chinese rather than translated: the three
 * structural differences between what a mainland reader already knows and
 * what Portugal does.
 *
 *   1. Household insurance. In urban China most owners never insure the flat
 *      itself; in Portugal cover is effectively part of ownership, and a
 *      mortgage lender will require it.
 *   2. The sum insured. A Chinese buyer reads "保额" against the purchase
 *      price, which in China is mostly location and land. Portugal insures
 *      the cost of rebuilding, which is a different and usually smaller
 *      number — and getting it wrong triggers proportional settlement.
 *   3. Personal liability. 百万医疗 and 重疾 are household words; a standalone
 *      personal civil-liability product essentially is not, so
 *      Responsabilidade Civil has to be explained from scratch rather than
 *      translated.
 *
 * Those three ideas organise the whole cluster, so they belong on the hub.
 */
export const HUB_PAGE = {
  slug: 'zh',
  url: '/zh/',
  cluster: 'hub',
  isHub: true,
  title: '葡萄牙与西班牙高价值资产保险 | Adler & Rochefort',
  description:
    '面向高净值家庭的私人客户保险：高价值住宅、艺术品与收藏、百万级个人责任、国际医疗与汽车，覆盖葡萄牙与西班牙。里斯本与拉各斯办公室，ASF 注册号 425591790/3。',
  ogTitle: '高价值资产的专属保险 | Adler & Rochefort',
  keywords:
    '高净值保险, 私人客户保险, 葡萄牙保险, 西班牙保险, 葡萄牙华人保险, 高价值房屋保险, 艺术品保险, 葡萄牙房屋保险, 葡萄牙医疗保险, 葡萄牙汽车保险, 葡萄牙责任保险, 移居葡萄牙保险, 葡萄牙保险代理',
  eyebrow: '私人客户 · 葡萄牙与西班牙',
  h1: '高价值资产的<br><em>专属保险。</em>',
  standfirst:
    '住宅、艺术品与收藏、民事责任与家庭保障，覆盖葡萄牙与西班牙。逐一核保，书面建议，从首次联系到理赔，始终由同一位顾问负责。',
  published: '2026-09-12T09:00:00+00:00',
  modified: '2026-09-26T09:00:00+00:00',
  breadcrumb: [{ name: '首页', url: '/zh/' }],
  pullquote:
    '一份保单真正的价值，要到理赔那一天才看得出来——看的是条款写了什么，以及那时有没有人站在您这一边。',
  schemaType: 'WebPage',
  formHeading: '说明您的情况',
  formBranch: '',
  formSubject: '一般咨询（ZH）',
  formCta: '提交咨询',
  formIntro:
    '请说明需要保障什么、从什么时候开始；如有现有保单，也可以一并发给我们。我们会以书面形式回复：需要哪些资料、可以安排到什么程度，以及现有保障中值得先确认的地方。',
  formPlaceholder:
    '例如：我们在卡斯凯什有一处主要住所、在西班牙有一处度假房，家中有艺术品与手表需要单独列明，另有两个孩子在国外读书。',
  sections: `
<section class="section plain" aria-labelledby="san-ge-chabie">
  <div class="container narrow article-body">
    <h2 id="san-ge-chabie">先理解三件事，其余都好办</h2>
    <p>我们接触过的中国客户，绝大多数不是不了解保险，而是把一套在国内行之有效的经验直接搬了过来。多数误解可以归结为三个结构性差别。</p>
    <p><strong>第一，房子本身是要投保的。</strong>在国内城市，很少有业主为自己的住宅单独买财产保险；房屋的风险感觉上由小区、物业和开发商分担了。在葡萄牙不是这样：房屋保险（<em>seguro multirriscos habitação</em>）实际上是房产持有的一部分，如果有房贷，银行几乎一定会把它作为放款条件。买房之后没有保险，不是省了一笔钱，而是把重建费用整笔留在了自己身上。</p>
    <p><strong>第二，保额对应的是重建费用，不是成交价。</strong>这一点对中国买家尤其反直觉。国内房价里很大一部分是位置与土地价值，而葡萄牙房屋保险要投保的是“把这栋建筑重新盖起来要花多少钱”（<em>valor de reconstrução</em>）。这个数字通常低于您的成交价，但它必须接近真实的建造成本——因为葡萄牙普遍适用比例赔付原则（<em>regra proporcional</em>）：如果保额比应有金额低 40%，即使是一次局部损失，赔款也可能按同样比例打折。</p>
    <p><strong>第三，个人民事责任是单独的一块。</strong>在国内，个人责任险几乎不作为独立产品存在，大家熟悉的是车险里的第三者责任。在葡萄牙，民事责任保险（<em>Responsabilidade Civil</em>）是日常生活和执业活动中很常规的一项：水管漏水泡了楼下的住户、家里的狗咬了人、您作为顾问给出的意见让客户产生损失——这些都属于它。房屋保单里可能带一点责任额度，但常常只限于同楼邻居，或者根本不在其中，取决于保险公司与所选方案。</p>
    <div class="callout">
      <span class="callout-label">一句话总结</span>
      国内的经验在葡萄牙依然有用，但需要重新分块：房屋按重建费用投保、医疗与公立体系并行、责任单独考虑、理赔靠文件与时限。这四件事想清楚，选保单就不再是比保费。
    </div>
  </div>
</section>

<section class="section tint" aria-labelledby="shuyu">
  <div class="container narrow article-body">
    <h2 id="shuyu">保单上会反复出现的七个葡萄牙语词</h2>
    <p>保单依法以葡萄牙语出具。这七个词几乎出现在每一份文件里，认识它们，您看自己的保单时就不再是完全被动的。</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">葡萄牙保险基本术语中葡对照</caption>
        <thead>
          <tr><th scope="col">中文</th><th scope="col">葡萄牙语</th><th scope="col">为什么重要</th></tr>
        </thead>
        <tbody>
          <tr><td>保费</td><td><em>prémio</em></td><td>通常按年计算；分期缴纳往往另加费用。</td></tr>
          <tr><td>保额</td><td><em>capital seguro</em></td><td>出事时最关键的一个数字，尤其是房屋。</td></tr>
          <tr><td>自负额</td><td><em>franquia</em></td><td>常同时写成固定金额与百分比，通常按对客户较不利的一项适用。</td></tr>
          <tr><td>除外责任</td><td><em>exclusões</em></td><td>保单的真实内容其实写在这一节里。</td></tr>
          <tr><td>事故 / 理赔案</td><td><em>sinistro</em></td><td>报案有时限，从事故发生日起算，通常很短。</td></tr>
          <tr><td>一般条款</td><td><em>condições gerais</em></td><td>基础文件；<em>condições particulares</em>（特别条款）会修改它。</td></tr>
          <tr><td>等待期</td><td><em>períodos de carência</em></td><td>医疗保险里最容易被忽略的一项。</td></tr>
        </tbody>
      </table>
    </div>
    <p>不必记住它们。但当有人告诉您“这份保单什么都保”时，您可以直接问：<em>exclusões</em> 那一节写了什么，<em>franquia</em> 是多少。能立刻答上来的人，通常真的读过条款。</p>
  </div>
</section>

<section class="section plain" aria-labelledby="si-lei-baoxian">
  <div class="container narrow">
    <h2 id="si-lei-baoxian">四类核心保障</h2>
    <ul class="hub-list">
      <li class="hub-item">
        <h3><a href="/zh/home-insurance-portugal/">高价值房屋与财产保险</a></h3>
        <p>现场查勘与重建费用、取消比例赔付、贵重物品与收藏的约定价值、<em>condomínio</em> 公共保险覆盖到哪里、水渍与地震风险、第二居所与空置条件。</p>
      </li>
      <li class="hub-item">
        <h3><a href="/zh/health-insurance-portugal/">国际私人医疗保险</a></h3>
        <p>为全家安排的国际医疗、SNS 公立体系与私人保险如何并行、医疗网络与报销型的差别、等待期、健康核保、既往症与家庭保单。</p>
      </li>
      <li class="hub-item">
        <h3><a href="/zh/car-insurance-portugal/">汽车保险</a></h3>
        <p>强制第三者责任与全险的实际差别、较高价值车辆、车辆进口与驾照问题，以及海外的出险记录能不能被采用。</p>
      </li>
      <li class="hub-item">
        <h3><a href="/zh/liability-insurance-portugal/">民事责任保险</a></h3>
        <p>家庭个人责任（<em>Responsabilidade Civil</em>）：数百万欧元保额、全球范围、抗辩费用另计，涵盖家政人员、访客、泳池与船艇；职业责任另行安排。</p>
      </li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="san-fen-zhinan">
  <div class="container narrow">
    <h2 id="san-fen-zhinan">三份按情形写的指南</h2>
    <ul class="hub-list">
      <li class="hub-item">
        <h3><a href="/zh/moving-to-portugal/">迁居葡萄牙：保险安排的顺序</a></h3>
        <p>出发前该办什么、到了之后该办什么、哪些环节需要 NIF、空档最容易出现在什么时候。</p>
      </li>
      <li class="hub-item">
        <h3><a href="/zh/buying-property-portugal/">在葡萄牙买房：分阶段的保险安排</a></h3>
        <p>签约前要了解什么、银行贷款可能要求什么、保障应当从 <em>escritura</em> 当天开始、买房后还要补什么。</p>
      </li>
      <li class="hub-item">
        <h3><a href="/zh/insurance-guide-portugal/">葡萄牙保险指南与常见问题</a></h3>
        <p>市场结构、保单由哪些文件组成、理赔流程、续保与退保，以及应该向任何中介提出的那几个问题。</p>
      </li>
    </ul>
  </div>
</section>

<section class="section plain" aria-labelledby="siren-kehu">
  <div class="container narrow article-body">
    <h2 id="siren-kehu">我们专注的领域：高净值家庭的私人客户保险</h2>
    <p>Adler &amp; Rochefort 为在葡萄牙和西班牙拥有较高价值资产的家庭安排保险。这类家庭的需要与大众市场不同：保额更高、资产更分散，而普通零售保单中的分项限额与标准条款，往往恰好在最关键的地方不够用。</p>
    <ul>
      <li><strong>高价值住宅。</strong>主要住所、第二居所与出租房产；较高价值的房屋可由保险公司安排现场查勘，确认重建费用，并按约定取消比例赔付。</li>
      <li><strong>艺术品、收藏与贵重物品。</strong>首饰、名表、艺术品、葡萄酒收藏，按评估后的约定价值列明投保，全损时按约定价值赔付，不在折旧上争执。</li>
      <li><strong>家庭个人责任。</strong>保额可达数百万欧元、全球范围，抗辩费用在保额之外另行支付；覆盖家政人员、访客、泳池与船艇等情形。</li>
      <li><strong>国际私人医疗。</strong>为全家安排的国际医疗保险，适合在多个国家生活、工作或求学的家庭。</li>
      <li><strong>汽车。</strong>家庭用车与较高价值车辆，按实际使用方式安排保障。</li>
    </ul>
    <p>每一个风险都逐一核保，建议以书面形式给出。企业主与自由职业者的职业责任（<em>Responsabilidade Civil Profissional</em>）另行安排，但可以在同一次沟通中一并说明。</p>
  </div>
</section>

<section class="section tint" aria-labelledby="women-zenme-zuo">
  <div class="container narrow article-body">
    <h2 id="women-zenme-zuo">我们是谁，怎么工作</h2>
    <p>Adler &amp; Rochefort 是 Ownizo, Unipessoal Lda. 的商业名称，在葡萄牙保险与退休基金监理局（ASF）注册为保险代理人，注册号 425591790/3。我们在里斯本和拉各斯设有办公室，客户遍及葡萄牙全境；在西班牙，我们依据欧盟服务自由原则提供服务。我们在合作的保险公司范围内提供建议，不是比价网站——先确定保障范围，再在范围一致的前提下比较方案。</p>
    <ol class="process-steps">
      <li><div><strong>先了解情况。</strong><span>资产在哪里、价值多少、谁住在里面、有哪些贵重物品与特殊风险；如有现有保单，请一并发给我们。</span></div></li>
      <li><div><strong>逐一核保。</strong><span>每处房产、每件列明的物品都按实际情况向保险公司申报，而不是套用标准方案。</span></div></li>
      <li><div><strong>书面建议。</strong><span>签字之前，保额、自负额、除外责任和报案时限会以英语书面说清楚。</span></div></li>
      <li><div><strong>同一位顾问，直到理赔。</strong><span>从首次联系到报案、与保险公司沟通、盯住时限，始终由同一个人负责。</span></div></li>
    </ol>
    <p class="legal-note">实际保障取决于保险公司与所出具保单的条款。本页说明的是市场通常的运作方式，不构成对某一份具体合同条款的确认。</p>
  </div>
</section>`,
  // 下方的人像区块与保险公司列表由 scripts/lib/site-sections.mjs 渲染，
  // 这里只保留中文文案。
  audience: {
    heading: '我们<em>服务的对象</em>',
    body:
      '我们为在葡萄牙和西班牙拥有较高价值资产的家庭打理保险：住宅、艺术品与收藏、家庭责任、国际医疗与汽车。无论您常住于此，还是只在一年中的部分时间居住，从咨询、书面建议、投保到理赔协助，全程由同一位顾问负责。',
    alt: '为葡萄牙与西班牙私人客户服务的保险顾问',
  },
  insurers: {
    heading: '我们合作的<em>保险公司与联合经纪伙伴</em>',
    lead:
      '我们不隶属于任何一家保险公司。我们在合作的保险公司范围内提供建议，为每个风险寻找条款最合适的方案。',
  },
  faqTitle: '私人客户保险：常见问题',
  faq: [
    {
      q: '你们提供中文服务吗？',
      a: '<p>不提供。网站的中文内容是为了让您先把事情看明白，但具体工作以英语书面进行：报价、条款说明、往来邮件和理赔沟通都是英语。我们宁可在这里说清楚，也不希望您在理赔过程中才发现。如果由懂英语的家人、朋友或顾问协助核对文件，完全没有问题，也很常见。</p>',
    },
    {
      q: '在葡萄牙，房屋保险是强制的吗？',
      a: '<p>要分两层看。对于分层共有的建筑（<em>propriedade horizontal</em>，即通常所说的公寓楼），葡萄牙法律要求对火灾风险投保，这部分一般由 <em>condomínio</em> 统一办理，涉及的是建筑的公共部分。对于您自己单元内部以及室内财物，则通常不是法律强制，但如果有房贷，银行几乎一定会要求。实务上的结论是一样的：有房产就应当有保险，问题只是范围怎么定。</p>',
    },
    {
      q: '我还没有居留身份，可以在葡萄牙投保吗？',
      a: '<p>通常可以，但需要具备一些基本条件，最常见的是葡萄牙纳税人号码（NIF）。多数保险公司还需要一个可以送达文件的地址，以及可用于缴费的付款方式；是否必须是葡萄牙的银行账户，取决于保险公司。非居民持有房产而在葡萄牙以外居住的情况很常见，也是可以安排的。具体所需材料，我们会在第一次回复里按您的情况列出。</p>',
    },
    {
      q: '我的保单是葡萄牙语的，我看不懂怎么办？',
      a: '<p>葡萄牙保险公司依法以葡萄牙语出具保单，这一点不会因为客户是外国人而改变。我们的做法是在您签字之前，用英语书面说明其中的关键部分：保额、自负额、主要除外责任和报案时限。需要的话，也可以把这份说明转给协助您的人一起看。</p>',
    },
    {
      q: '你们也为西班牙的资产安排保险吗？',
      a: '<p>是的。我们在里斯本和拉各斯设有办公室，客户遍及葡萄牙全境；在西班牙，我们依据欧盟服务自由原则提供服务。许多客户在两国都有房产，住宅、贵重物品与家庭责任可以统一规划，由同一位顾问跟进。</p>',
    },
    {
      q: '你们是比价平台吗？',
      a: '<p>不是。我们是注册的保险代理机构，在合作的保险公司范围内提供建议。我们会比较方案，但比较的前提是保障范围一致——保费看似接近或相差很大的两份保单，常常根本不是同一件东西。</p>',
    },
    {
      q: '一般需要准备哪些资料？',
      a: '<p>通常是：NIF、身份证明、在葡萄牙的地址。房屋保险还需要 <em>caderneta predial</em>（房产税籍资料）或购房文件，上面有面积与建成年份；汽车保险需要行车证件与驾驶、出险情况；医疗保险需要投保人的年龄与家庭成员信息。完整清单我们会按您的具体情况给出。</p>',
    },
  ],
  related: [
    { url: '/zh/insurance-guide-portugal/', label: '葡萄牙保险指南与常见问题' },
    { url: '/zh/moving-to-portugal/', label: '迁居葡萄牙：保险安排的顺序' },
  ],
};
