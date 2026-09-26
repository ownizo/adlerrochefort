/**
 * /zh/insurance-guide-portugal/
 *
 * The evergreen pillar. Search intent: the broad, un-narrowed questions —
 * 葡萄牙保险怎么买 / 葡萄牙保险 强制 / 外国人 葡萄牙 保险 — asked by someone
 * who has not yet decided which product they are looking for.
 *
 * §9 lists the questions this page has to answer. They are answered as
 * questions a Chinese reader would actually type, not as translations of the
 * English brief's phrasing, and the answers point into the cluster rather
 * than duplicating it.
 *
 * This page also carries the two positioning arguments that belong once on
 * the site and not on every page: why price alone is the wrong first filter
 * (§12), and how a Portuguese intermediary differs from what a Chinese reader
 * expects from an agent or a platform (§11). The business/entrepreneur
 * material (§15) sits here too, as one section — deliberately not as its own
 * page, because /zh/ is an individual and family cluster.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';

export const GUIDE_PAGE = {
  slug: 'insurance-guide-portugal',
  url: '/zh/insurance-guide-portugal/',
  cluster: 'guide',
  title: '葡萄牙保险指南：常见问题与市场运作方式 | Adler & Rochefort',
  description:
    '葡萄牙保险入门：需要哪些保险、哪些是强制的、外国人能否投保、保单由哪些文件组成、理赔怎么走、除保费外该比较什么，以及私人客户保险中介的作用。',
  keywords:
    '葡萄牙保险, 葡萄牙保险指南, 葡萄牙保险常见问题, 外国人 葡萄牙保险, 葡萄牙保险理赔, 葡萄牙保险中介',
  eyebrow: '保险指南',
  h1: '葡萄牙保险指南：从头理解这个市场',
  standfirst:
    '这一页回答的是还没有细分到某个产品之前的问题：我到底需要哪几份保险、哪些是法律强制的、外国人能不能买、理赔实际是怎么走的，以及除了保费还该比较什么。',
  published: '2026-09-12T09:00:00+00:00',
  modified: '2026-09-26T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: '葡萄牙保险指南' }],
  pullquote: '保险不是比较保费的数字，而是决定哪些风险自己承担、哪些交给保险公司。',
  schemaType: 'Article',
  formHeading: '把您的情况说给我们听',
  formBranch: '',
  formSubject: '一般咨询（ZH）',
  formCta: '提交咨询',
  formIntro:
    '不确定需要哪几份保险也没关系。把情况说清楚，我们会回复应该先处理什么、需要哪些资料。',
  formPlaceholder:
    '例如：在里斯本租房住，刚开始做自由职业的设计工作，想了解医疗和责任方面该怎么安排。',
  sections: `
<section class="section plain" aria-labelledby="wo-xuyao-naxie">
  <div class="container narrow article-body">
    <h2 id="wo-xuyao-naxie">在葡萄牙生活，我需要哪几份保险？</h2>
    <p>没有一个适用于所有人的答案，但有一个适用于所有人的排序方法：<strong>按“出事之后自己扛不扛得住”来排</strong>，而不是按保费高低来排。</p>
    <p>按这个标准，多数在葡萄牙生活的家庭最终会落在这几项上：</p>
    <ul>
      <li><strong>汽车的第三者责任险</strong>——如果有车，这是法律强制的，没有选择。</li>
      <li><strong>房屋保险</strong>——有房产就需要；有房贷时银行必然要求。重建费用是自己扛不动的那一类损失。</li>
      <li><strong>民事责任</strong>——赔别人的那一块。保费通常不高，但涉及第三方人身伤害时的金额可以很大。</li>
      <li><strong>私人医疗保险</strong>——不是必需，因为公立体系（SNS）覆盖全民；它买的是就诊速度与选择权。有孩子的家庭使用频率最高。</li>
      <li><strong>职业责任</strong>——如果在葡萄牙执业或经营，部分行业依法强制，其余常被客户在合同中要求。</li>
      <li><strong>租客的财物与责任保险</strong>——租房时的那一份，尤其住公寓楼。</li>
    </ul>
    <p>不在这个清单上的，不是不重要，而是优先级更低：小额的电子设备延保、旅行取消、宠物医疗——这些是舒适度，不是风险管理。</p>
  </div>
</section>

<section class="section tint" aria-labelledby="qiangzhi-de">
  <div class="container narrow article-body">
    <h2 id="qiangzhi-de">哪些保险在葡萄牙是强制的？</h2>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">葡萄牙法律强制或普遍被要求的保险</caption>
        <thead>
          <tr><th scope="col">保险</th><th scope="col">是否强制</th></tr>
        </thead>
        <tbody>
          <tr><td>汽车第三者责任险</td><td>法律强制，所有上路车辆。</td></tr>
          <tr><td>公寓楼公共部分的火灾保险</td><td>法律要求，通常由 <em>condomínio</em> 统一办理。</td></tr>
          <tr><td>工伤保险（有雇员时）</td><td>雇主的法定义务。</td></tr>
          <tr><td>部分受监管职业的职业责任险</td><td>依各行业法规而定（例如律师、建筑师、部分医疗执业者）。</td></tr>
          <tr><td>自有住宅的房屋保险</td><td>一般不是法律强制，但有房贷时银行必然要求。</td></tr>
          <tr><td>私人医疗保险</td><td>不强制。公立体系（SNS）覆盖在葡萄牙合法居住的人。</td></tr>
          <tr><td>个人民事责任险</td><td>不强制，但通常包含在房屋或财物保险中。</td></tr>
        </tbody>
      </table>
    </div>
    <p>关于居留与签证申请中的医疗保障要求：那属于主管机关的规定，会随时间与签证类别变化，<strong>我们不对某份保单是否满足这类要求作出确认</strong>。请以主管机关或您的移民法律顾问的现行要求为准。</p>
  </div>
</section>

<section class="section plain" aria-labelledby="waiguoren-neng-bu-neng">
  <div class="container narrow article-body">
    <h2 id="waiguoren-neng-bu-neng">外国人能在葡萄牙买保险吗？住在国外也能吗？</h2>
    <p>能。国籍本身不是障碍，葡萄牙保险公司承保外国客户是日常业务。实务上的门槛是资料，通常包括：</p>
    <ul>
      <li><strong>NIF</strong>（葡萄牙纳税人号码）——几乎所有保单的前提。</li>
      <li><strong>身份证明</strong>——护照或居留证件。</li>
      <li><strong>可送达的地址</strong>——用于寄送保单与通知。</li>
      <li><strong>付款方式</strong>——多数保险公司通过葡萄牙账户的直接扣款（<em>débito direto</em>）收费；是否必须是本地账户取决于保险公司。</li>
    </ul>
    <p><strong>住在葡萄牙以外，也可以为葡萄牙的房产投保。</strong>非居民业主是很常见的客户类型。需要注意的只有一点：长期空置的条款。多数保单约定连续无人居住的天数上限，超过之后某些保障（最典型的是盗窃与水渍）可能受限。解决办法是如实申报为第二居所、并按保险公司的要求安排定期查看或安防措施——而不是把它申报成常住房。</p>
    <p>居留身份会影响的是保障的内容而不是资格：例如没有在葡萄牙登记居住的人无法使用公立体系，这会改变私人医疗保险的定位。</p>
  </div>
</section>

<section class="section tint" aria-labelledby="baodan-youshenme-zucheng">
  <div class="container narrow article-body">
    <h2 id="baodan-youshenme-zucheng">一份葡萄牙保单由哪些文件组成</h2>
    <p>这一点值得知道，因为读保单时要读的往往不是最厚的那一份。</p>
    <ul>
      <li><strong><em>Condições gerais</em>（一般条款）。</strong>最厚的那份，定义保障、除外责任与双方义务。</li>
      <li><strong><em>Condições especiais</em>（特别条款）。</strong>针对某一类保障的补充规则，例如地震、贵重物品。</li>
      <li><strong><em>Condições particulares</em>（个别条款）。</strong><strong>最重要的一份，通常只有一两页。</strong>写的是您的具体信息：被保险人、标的、保额、自负额、已选与未选的保障、生效期间。当它与一般条款冲突时，以它为准。</li>
      <li><strong><em>Ata adicional</em>（批单）。</strong>保单期间的任何变更都通过批单生效——口头确认不算，必须有批单。</li>
    </ul>
    <div class="callout">
      <span class="callout-label">只读一份的话，读哪一份</span>
      读 <em>condições particulares</em>。它是唯一按您的情况填写的文件，保额是否填对、地震有没有勾选、自负额多少、房产用途怎么写，全在这一两页上。
    </div>
    <p>依葡萄牙法律，保单以葡萄牙语出具，这一点不因客户是外国人而改变。我们的做法是在您签字之前，用英语书面说明其中的关键部分：保额、自负额、主要除外责任与报案时限。</p>
  </div>
</section>

<section class="section plain" aria-labelledby="lipei-zenme-zou">
  <div class="container narrow article-body">
    <h2 id="lipei-zenme-zou">理赔实际是怎么走的</h2>
    <p>葡萄牙的理赔流程不复杂，但对<strong>时限和文件</strong>要求严格。这与国内近年常见的“线上秒赔”体验差别很大，值得提前知道，免得误判进度。</p>
    <ol class="process-steps">
      <li><div><strong>在时限内报案。</strong><span>保单会写明通知期限，从事故发生或发现之日起算，通常很短（常见为八天，以保单为准）。超过时限，保险公司可以据此减少或拒绝赔付。</span></div></li>
      <li><div><strong>保存证据。</strong><span>照片、损坏的物品、维修报价、发票、警方或消防记录。在查勘之前不要丢弃损坏物品，也不要急于全面修复——留下可查验的状态。</span></div></li>
      <li><div><strong>查勘定损（<em>peritagem</em>）。</strong><span>保险公司指派查勘人员评估原因与金额。这是整个流程中最关键的一步：原因认定决定这次损失属于哪一项保障，或者是否落入除外责任。</span></div></li>
      <li><div><strong>核定与赔付。</strong><span>按认定的金额扣除自负额后赔付，或由保险公司安排维修。涉及第三方时，还需要等待责任划分。</span></div></li>
      <li><div><strong>有争议时。</strong><span>可以要求书面说明拒赔或减赔的依据，可以自行委托独立查勘，也可以向保险公司的投诉部门、监管机构（ASF）或消费者调解机制提出。</span></div></li>
    </ol>
    <p>一个中介在这个环节的作用是具体的：帮您在时限内报案、说明需要哪些材料、与查勘人员和保险公司沟通、在认定结果有疑问时提出异议。这件事的价值不在出单那天，而在这几周。</p>
  </div>
</section>

<section class="section tint" aria-labelledby="chu-le-jiage">
  <div class="container narrow article-body">
    <h2 id="chu-le-jiage">除了保费，还该比较什么</h2>
    <p>保费只有在保障范围可比的前提下才有意义。在葡萄牙市场上，名称相同、保费看似接近或相差很大的两份保单，常常根本不是同一件东西。</p>
    <p>保险的本质是风险管理：把自己扛不动的损失，用一笔确定的、可以承受的支出转移出去。一份保费较低、但把地震、水渍的查漏破拆费用、或出租用途排除在外的保单，并不是“同样的东西打了折”，而是一件<strong>更小的东西</strong>。它可能恰好够用，也可能在最需要的那一天正好不够——区别在于这是一个知情的选择，还是一次没被发现的删减。</p>
    <p>所以比较时看这六项：</p>
    <ul>
      <li><strong>保额（<em>capital seguro</em>）</strong>是否对应真实的风险敞口——房屋按重建费用、财物按重新购置。</li>
      <li><strong>除外责任（<em>exclusões</em>）</strong>里有没有恰好是您最担心的那一项。</li>
      <li><strong>自负额（<em>franquia</em>）</strong>是固定金额还是百分比，特定风险是否单独更高。</li>
      <li><strong>分项限额（<em>sublimites</em>）</strong>——珠宝、现金、艺术品、特定风险的单独上限。</li>
      <li><strong>可选保障是否已勾选</strong>——地震、电器损坏、玻璃、法律保障这些不一定默认包含。</li>
      <li><strong>理赔与服务流程</strong>——报案渠道、查勘安排、维修网络、是否有人对接。</li>
    </ul>
    <p>把这六项列出来之后再看保费，判断通常就很清楚了。我们的建议以书面形式给出，依据是保障是否与风险相称，而不是保费高低。</p>
  </div>
</section>

<section class="section plain" aria-labelledby="zhongjie-de-zuoyong">
  <div class="container narrow article-body">
    <h2 id="zhongjie-de-zuoyong">保险中介在葡萄牙是什么角色</h2>
    <p>葡萄牙的保险销售受 ASF（<em>Autoridade de Supervisão de Seguros e Fundos de Pensões</em>，保险与退休基金监理局）监管。中介必须注册并公开注册编号与类别。</p>
    <p><strong>Adler &amp; Rochefort</strong> 是 Ownizo, Unipessoal Lda. 的商号，在 ASF 注册为保险代理人（<em>agente de seguros</em>），注册编号 <strong>425591790/3</strong>。我们是面向高净值家庭的私人客户保险代理机构，在里斯本和拉各斯设有办公室，客户遍及葡萄牙；在西班牙，我们依据欧盟服务自由原则提供服务。我们在合作的保险公司范围内逐一核保、以书面形式提供建议，并由同一位顾问协助客户处理理赔。</p>
    <p>为了避免误解，几点说明：</p>
    <ul>
      <li><strong>我们不是比价网站</strong>，也不承保风险——承保方是保险公司，保单是您与保险公司之间的合同。</li>
      <li><strong>我们在自己的保险公司组合范围内提供建议</strong>，不代表整个葡萄牙市场的所有产品。</li>
      <li><strong>客户不向我们另付咨询费</strong>；中介的报酬包含在保费中，这是市场的通常做法。</li>
      <li><strong>我们不提供法律、税务、移民或医疗方面的意见。</strong>遇到这些问题，我们会说明它超出了保险的范围。</li>
    </ul>
    <p class="legal-note">Adler &amp; Rochefort 是 Ownizo, Unipessoal Lda. 的商号。Ownizo, Unipessoal Lda. 在葡萄牙保险与退休基金监理局（ASF）注册为保险代理人，注册编号 425591790/3。</p>
  </div>
</section>

<section class="section tint" aria-labelledby="qiye-yu-ziyou-zhiye">
  <div class="container narrow article-body">
    <h2 id="qiye-yu-ziyou-zhiye">如果您在葡萄牙有经营活动</h2>
    <p>本栏目的重点是个人与家庭的保险。但有相当一部分客户同时在葡萄牙经营或执业——开餐厅、做民宿、做咨询、开工作室——这时除了个人的几份保单，通常还要看这几块：</p>
    <ul>
      <li><strong>职业责任（<em>Responsabilidade Civil Profissional</em>）。</strong>按具体活动承保，详见<a href="/zh/liability-insurance-portugal/">民事责任保险</a>。</li>
      <li><strong>经营责任（<em>Responsabilidade Civil de Exploração</em>）。</strong>场所与经营活动对第三方造成的损害，例如客人在店内受伤。</li>
      <li><strong>商业场所综合险（<em>multirriscos comercial</em>）。</strong>店面或办公场所的建筑、设备、库存、营业中断。</li>
      <li><strong>员工相关保险。</strong>有雇员时，工伤保险（<em>seguro de acidentes de trabalho</em>）是雇主的法定义务；自雇者按其登记身份另有相应规定。</li>
    </ul>
    <p>如果您有这类需要，在第一次咨询时一并说明即可，我们会一起看，而不是分成两次沟通。</p>
  </div>
</section>

<section class="section plain" aria-labelledby="quanbu-yemian">
  <div class="container narrow">
    <h2 id="quanbu-yemian">按产品查看</h2>
    <ul class="hub-list">
      <li class="hub-item">
        <h3><a href="/zh/home-insurance-portugal/">房屋与财产保险</a></h3>
        <p>建筑与室内财物、重建费用、水渍与地震、第二居所与出租用途、房贷要求。</p>
      </li>
      <li class="hub-item">
        <h3><a href="/zh/health-insurance-portugal/">私人医疗保险</a></h3>
        <p>SNS 与私人保险的关系、医疗网络与报销、等待期、核保与既往症、家庭保单。</p>
      </li>
      <li class="hub-item">
        <h3><a href="/zh/car-insurance-portugal/">汽车保险</a></h3>
        <p>强制责任险与可选保障、买车与进口、驾照的保险后果、出险记录。</p>
      </li>
      <li class="hub-item">
        <h3><a href="/zh/liability-insurance-portugal/">民事责任保险</a></h3>
        <p>个人与家庭责任、按行业区分的职业责任、索赔提出制、地域范围。</p>
      </li>
      <li class="hub-item">
        <h3><a href="/zh/moving-to-portugal/">迁居葡萄牙</a></h3>
        <p>出发前与落地后的顺序、NIF 这道门、最容易出现空档的三个时刻。</p>
      </li>
      <li class="hub-item">
        <h3><a href="/zh/buying-property-portugal/">在葡萄牙买房</a></h3>
        <p>分阶段的安排、交割当天的三项核对、各地区的核保差异、六个常见错误。</p>
      </li>
    </ul>
  </div>
</section>`,
  faqTitle: '葡萄牙保险：完整常见问题',
  faq: [
    {
      q: '我在葡萄牙生活，到底需要买哪些保险？',
      a: '<p>按“出事之后自己扛不扛得住”来排序。有车必须有第三者责任险（法律强制）；有房产需要房屋保险（有房贷时银行必然要求）；民事责任保费不高但涉及第三方人身伤害时金额可以很大；私人医疗不是必需，但买的是就诊速度与选择权，有孩子的家庭使用最频繁；在葡萄牙执业或经营的话还要看职业责任。租房居住则通常安排一份财物加责任保险。</p>',
    },
    {
      q: '房屋保险在葡萄牙是强制的吗？',
      a: '<p>对公寓楼的公共部分，法律要求投保火灾风险，通常由 <em>condomínio</em> 统一办理。对您自己户内与室内财物，一般不是法律强制，但有房贷时银行必然要求。独立住宅无贷款时通常不强制——不过没有保险意味着整笔重建费用自担。</p>',
    },
    {
      q: '有 SNS 公立体系，还需要私人医疗保险吗？',
      a: '<p>不是必需。SNS 覆盖在葡萄牙合法居住的人，在急重症与复杂治疗上是市场的主体。私人保险解决的是等待时间与选择权：专科门诊、影像检查、非紧急手术能多快安排，能否选医生。很多家庭两者并用。</p>',
    },
    {
      q: '外国人可以在葡萄牙买保险吗？',
      a: '<p>可以，国籍不是障碍。实务门槛是资料：NIF（葡萄牙纳税人号码）、身份证明、可送达的地址、以及可用于缴费的付款方式。是否必须使用葡萄牙银行账户，取决于保险公司。</p>',
    },
    {
      q: '我住在中国，可以为葡萄牙的房产投保吗？',
      a: '<p>可以，这是很常见的情形。要特别注意空置条款：多数保单约定连续无人居住的天数上限，超过之后盗窃与水渍等保障可能受限。正确做法是在保单上如实申报为第二居所及实际使用方式，并按保险公司要求安排定期查看或安防措施。</p>',
    },
    {
      q: '民事责任保险是什么？',
      a: '<p>它处理的是您依法应当对他人承担的赔偿：第三方的人身伤害与财产损失，以及相应的法律费用。国内读者最熟悉的同类概念是车险的第三者责任，只是在葡萄牙它的适用面广得多——日常生活、房产的持有与使用、执业活动都可能触发。详见<a href="/zh/liability-insurance-portugal/">民事责任保险</a>。</p>',
    },
    {
      q: '投保通常需要哪些文件？',
      a: '<p>基础是 NIF、身份证明与葡萄牙的地址。此外按产品而定：房屋需要 <em>caderneta predial</em> 或购房文件（面积、建成年份）；汽车需要行车证件（DUA）与驾驶人、出险情况；医疗需要各被保险人的年龄与健康问卷；职业责任需要活动描述、资质与营业额。完整清单会按您的情况给出。</p>',
    },
    {
      q: '我不会说葡萄牙语，你们能帮忙吗？',
      a: '<p>可以，我们的工作就是处理这一层。需要说清楚的是语言安排：网站的中文内容是为了让您先把事情看明白，但具体工作以英语书面进行——报价、条款说明、往来邮件与理赔沟通都是英语，我们不提供中文的客户服务。保单依葡萄牙法律以葡萄牙语出具，我们会在您签字前用英语书面说明其中的关键部分。如果由懂英语的家人、朋友或顾问协助核对文件，完全没有问题。</p>',
    },
    {
      q: '理赔是怎么进行的？',
      a: '<p>先在保单约定的时限内报案（通常很短，常见为八天，以保单为准），保存证据并在查勘前不要丢弃损坏物品；保险公司指派查勘人员认定原因与金额；之后按认定金额扣除自负额赔付或安排维修。有争议时可以要求书面依据、自行委托独立查勘，或向保险公司投诉部门、监管机构 ASF 及消费者调解机制提出。</p>',
    },
    {
      q: '除了保费，还应该比较什么？',
      a: '<p>六项：保额是否对应真实风险敞口、除外责任里有没有您最担心的那一项、自负额的计算方式、贵重物品等分项限额、可选保障（地震、电器、玻璃、法律保障）是否已勾选、以及理赔与服务流程。把这六项列清楚再看保费，两份价格相差三成的报价通常会显出原本不是同一件东西。</p>',
    },
    {
      q: '你们提供中文客服吗？',
      a: '<p>不提供。我们没有中文的客户服务团队或中文顾问，服务语言是英语，书面进行。中文网站的作用是让您在联系之前就能把制度、术语与关键决定看明白——这一部分本身也是有价值的。</p>',
    },
    {
      q: '保单可以中途取消吗？',
      a: '<p>取决于合同条款与保险类型。葡萄牙的保单通常为一年期并自动续保，退保或不续保需要在约定的提前期内以书面方式通知（常见的提前期为到期前 30 天，以保单为准）。中途解除时保费的处理方式也由条款约定。因为这一项各家差别不小，建议在投保前就确认续保与解除的规则。</p>',
    },
  ],
  related: [
    { url: '/zh/', label: '葡萄牙保险：华人客户总览' },
    { url: '/zh/home-insurance-portugal/', label: '房屋与财产保险' },
    { url: '/zh/health-insurance-portugal/', label: '私人医疗保险' },
  ],
};
