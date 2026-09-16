/**
 * /zh/health-insurance-portugal/
 *
 * Search intent: 葡萄牙医疗保险 / 葡萄牙私人医疗保险 — a resident, a family
 * about to arrive, or a parent comparing private cover against the SNS.
 *
 * Written from the Chinese starting point rather than translated. A mainland
 * reader arrives with two mental models that do not transfer:
 *
 *   - 百万医疗险: a very high annual ceiling, a large deductible, cheap at
 *     younger ages, reimbursement after the fact. Portuguese private cover is
 *     the opposite shape — modest ceilings, co-payments, and value that comes
 *     from network access and waiting times, not from the headline limit.
 *   - 重疾险 as the serious-illness product. Portugal separates that into life
 *     and critical-illness contracts; the health policy does not do that job,
 *     and saying so early avoids a real disappointment later.
 *
 * §4 requires the explicit caution about residence permits and visas. It is
 * stated once as its own paragraph and once in the FAQ, in both cases as a
 * refusal to confirm rather than a hedge.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';

export const HEALTH_PAGE = {
  slug: 'health-insurance-portugal',
  url: '/zh/health-insurance-portugal/',
  cluster: 'health',
  title: '葡萄牙私人医疗保险：SNS 之外的选择 | Adler & Rochefort',
  description:
    '葡萄牙私人医疗保险如何运作：SNS 公立体系与私人保险的关系、医疗网络与报销型、等待期、健康核保、既往症、年龄限制、家庭保单与儿童保障。',
  keywords:
    '葡萄牙医疗保险, 葡萄牙私人医疗保险, 葡萄牙健康保险, SNS 葡萄牙, 葡萄牙家庭医疗保险, 葡萄牙儿童医疗保险, 葡萄牙医疗保险等待期',
  eyebrow: '私人医疗',
  h1: '葡萄牙私人医疗保险：它解决什么问题，不解决什么问题',
  standfirst:
    '葡萄牙有覆盖全民的公立医疗体系（SNS）。私人医疗保险不是它的替代品，而是叠加在它之上的一层——买的主要是就诊速度与选择权，而不是更高的赔付上限。',
  published: '2026-09-12T09:00:00+00:00',
  modified: '2026-09-12T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: '私人医疗保险' }],
  pullquote: '在葡萄牙，私人医疗保险买到的主要不是钱，而是时间和选择权。',
  schemaType: 'Article',
  // Especificação v2, Parte B — this page's dedicated wizard replaces the
  // shared zh-inquiry branch-select form.
  wizard: {
    idPrefix: 'zh-sau',
    formName: 'zh-health-insurance-wizard',
    ramo: 'Health insurance',
    heading: '申请医疗保险报价',
    intro: '请填写基本信息。我们将在24个工作小时内回复。',
    stepLabel2: '需投保人员',
    submitLabel: '提交申请',
    adultBirthDate: true,
    microNote:
      '我们将在24个工作小时内回复。您的信息仅用于准备本报价，并根据《通用数据保护条例》（GDPR）处理——请参阅<a href="/en/privacy-policy" hreflang="en">隐私政策</a>。',
    scripts: ['quote-health-persons.js'],
    fieldsHtml: `        <p class="wizard-helper" style="margin-bottom:16px;">每位需投保人员都需要提供葡萄牙税号（NIF），儿童也不例外——没有此号码将无法准备报价。我们在此不询问任何医疗信息：健康问卷将在加入保险时直接与保险公司完成。</p>
        <div data-persons-repeater>
          <div data-persons-list></div>
          <button type="button" class="wizard-nav-back" data-persons-add>+ 添加人员</button>
        </div>`,
  },
  sections: `
<section class="section plain" aria-labelledby="liang-ceng-jiegou">
  <div class="container narrow article-body">
    <h2 id="liang-ceng-jiegou">先理解葡萄牙的两层结构</h2>
    <p>葡萄牙有公立医疗体系 <strong>SNS</strong>（<em>Serviço Nacional de Saúde</em>）。在葡萄牙合法居住的人一般都可以使用它，通常需要在居住地的卫生中心（<em>centro de saúde</em>）登记，取得使用者编号（<em>número de utente</em>）。急诊与重症治疗依靠的是公立体系，这一点很重要：葡萄牙的公立医院在急重症、肿瘤治疗、复杂手术上的水平是市场的主体，私立机构在这些领域并不总是更强。</p>
    <p>SNS 的真实短板在别处：<strong>等待时间</strong>。专科门诊、影像检查、非紧急手术的排队可能是几周到几个月，具体取决于科别与地区。家庭医生（<em>médico de família</em>）的分配在一些地区也需要等待。</p>
    <p>私人医疗保险就是叠在这一层之上的补充：它让您在私立医院和诊所网络内较快看上专科、做检查、安排非紧急手术，并且可以选择医生。它<strong>不是</strong>把您从公立体系里“换出来”，两者是并行使用的。</p>
    <div class="callout">
      <span class="callout-label">与国内产品的差别</span>
      如果您熟悉国内的百万医疗险——高额度、高免赔、事后报销——那么葡萄牙的私人医疗保险在结构上几乎是相反的：年度额度不高（常见的是几万欧元级别，按项目分项设限）、每次就诊有共付金额、价值来自网络内的可及性。用“额度高不高”来比较两地产品，会得出错误结论。
    </div>
  </div>
</section>

<section class="section tint" aria-labelledby="liang-zhong-moshi">
  <div class="container narrow article-body">
    <h2 id="liang-zhong-moshi">两种模式：医疗网络与报销</h2>
    <p>葡萄牙市场上的私人医疗保险基本上是两种模式，或两者的组合。</p>
    <p><strong>网络型（<em>rede convencionada</em>）。</strong>保险公司与私立医院、诊所、检验机构签约形成网络。您在网络内就诊，只支付共付金额（<em>co-pagamento</em>，例如一次专科门诊 15–25 欧元），其余由保险公司与机构直接结算。这是使用起来最省事的方式，也是大多数客户实际使用的方式。关键问题是：<strong>您所在的城市，网络里有哪些机构？</strong>里斯本和波尔图的网络非常密集，阿尔加维和内陆地区要具体看。这个问题必须在投保前确认，而不是在需要看医生的时候才发现最近的网络机构在两小时车程之外。</p>
    <p><strong>报销型（<em>reembolso</em>）。</strong>您自由选择任何医生或机构，先自付，再向保险公司申请报销，按约定比例（例如 80%）和年度上限赔付。灵活，但需要垫付并处理单据。如果您有特定想找的医生、或者经常在不同地区甚至国外就诊，这一模式的价值就体现出来。</p>
    <p>多数方案是混合的：网络内用共付，网络外按报销比例处理，两者的上限分别计算。比较方案时，光看保费无法判断，要看的是网络覆盖、共付金额、报销比例与各项分项上限这四项的组合。</p>
  </div>
</section>

<section class="section plain" aria-labelledby="baozhang-fanwei">
  <div class="container narrow article-body">
    <h2 id="baozhang-fanwei">保障通常分成哪几块</h2>
    <p>葡萄牙的私人医疗保单一般按模块组合，各模块有独立的年度上限。常见的划分是：</p>
    <ul>
      <li><strong>门诊（<em>ambulatório</em>）。</strong>专科门诊、检验、影像检查、理疗。日常使用最频繁的一块，也是最能体现网络价值的一块。</li>
      <li><strong>住院与手术（<em>internamento</em>）。</strong>住院治疗、手术、麻醉、住院期间的检查。这一块的上限通常最高。有些方案只买住院模块，门诊自付——保费明显更低，适合把保险定位为“大事保障”的人。</li>
      <li><strong>产科（<em>parto</em>）。</strong>通常有较长的等待期（市场上常见的是一年以上，具体取决于保险公司），并且在投保时已怀孕的情况下一般不予承保。计划在葡萄牙生育的家庭，这一项需要提前很久规划。</li>
      <li><strong>牙科（<em>estomatologia</em>）。</strong>通常保障有限，常以网络内折扣价或较低年度上限的形式提供。把牙科当作主要投保理由，通常会失望。</li>
      <li><strong>药品与其他。</strong>部分方案包含处方药报销、眼镜补助、居家护理等，额度一般不大。</li>
    </ul>
    <p><strong>重大疾病不在这份保单里。</strong>如果您熟悉国内的重疾险——确诊即按约定给付一笔现金——那么在葡萄牙这是另一类产品（<em>seguro de vida</em> 的附加保障或独立的 <em>doenças graves</em> 合同），与私人医疗保险分开销售，逻辑也不同：医疗保险赔的是治疗费用，重疾保障给的是一笔与费用无关的现金。两者不能互相替代。</p>
  </div>
</section>

<section class="section tint" aria-labelledby="denghaiqi-yu-hebao">
  <div class="container narrow article-body">
    <h2 id="denghaiqi-yu-hebao">等待期、健康核保与既往症</h2>
    <p>这一节是实务中最容易产生误解的地方，值得逐项说清。</p>
    <p><strong>等待期（<em>períodos de carência</em>）。</strong>保单生效后，某些保障要过一段时间才能使用。市场上常见的做法是：门诊较短（可能是几十天）、住院与手术更长、产科最长。等待期的长度取决于保险公司与所选方案。这意味着<strong>医疗保险不能等到需要时再买</strong>——已经出现症状或已在排队等治疗时投保，这次治疗基本不会被保障。</p>
    <p><strong>健康核保（<em>questionário médico</em>）。</strong>投保时需要填写健康问卷，保险公司可能要求补充资料或体检。核保结果可能是：正常承保、加费承保、对某一部位或某类疾病附加除外、或者拒保。这是正常流程，不是针对外国人。</p>
    <p><strong>既往症（<em>doenças pré-existentes</em>）。</strong>葡萄牙的私人医疗保险通常不保投保前已存在的疾病。这一点没有折中的说法。有些保险公司会在特定条件下、经过一定年限后有条件地纳入，也有些方案对某些慢性情况直接列为除外。结论是：如果有既往病史，投保前如实申报，并在书面上确认这次承保是否附带除外条款。</p>
    <div class="callout">
      <span class="callout-label">为什么必须如实申报</span>
      隐瞒病史不会让保障变宽，只会让它在最关键的时候失效。葡萄牙保险公司在理赔阶段会核对病历，发现申报不实可以拒赔甚至解除合同。如实申报可能带来加费或除外条款，但换来的是一份确定能用的保单。
    </div>
    <p><strong>年龄限制。</strong>葡萄牙的私人医疗保险普遍有投保年龄上限（市场上常见的在 55 至 70 岁之间，取决于保险公司与产品），部分产品在一定年龄后不再续保或改为有限保障。年龄越大，可选方案越少、保费越高。如果您计划在葡萄牙长期居住并考虑私人医疗，越早安排选择越多。</p>
  </div>
</section>

<section class="section plain" aria-labelledby="jiating">
  <div class="container narrow article-body">
    <h2 id="jiating">带孩子来的家庭</h2>
    <p>带学龄或学前孩子搬来葡萄牙的家庭，问得最多的是同一组问题：儿科能不能及时约到、孩子的保障怎么安排、一家人是一份保单还是各自一份。</p>
    <p><strong>家庭保单的组合方式。</strong>多数保险公司允许一份保单包含配偶与子女，通常按每位被保险人的年龄分别定价，有时对第二个及以后的孩子提供一定折扣。每位被保险人的健康核保是独立进行的：父母之一被附加除外条款，不影响孩子的承保条件。</p>
    <p><strong>孩子的等待期照样适用。</strong>新生儿在出生后一定期限内加入保单，有些保险公司可以免除部分等待期，具体取决于保险公司与合同条款——这一项在孩子出生前就应确认，而不是之后。</p>
    <p><strong>儿科的实际价值。</strong>孩子生病的频率远高于成年人，而私立儿科诊所的当日或次日就诊是家长最常使用的功能。所以对家庭来说，门诊模块的网络密度比住院上限更重要——反过来，只买住院模块的家庭方案，实际使用感受往往很差。</p>
    <p><strong>不在保险范围内的事。</strong>关于学校、居留手续、儿童入学与签证的问题，不属于保险咨询的范围，我们也不提供这方面的意见。这一页只讨论医疗保险本身。</p>
  </div>
</section>

<section class="section tint" aria-labelledby="juliu-shenqing">
  <div class="container narrow article-body">
    <h2 id="juliu-shenqing">关于居留与签证要求，我们不做确认</h2>
    <p>不少人问：买一份私人医疗保险，是否就满足了居留许可或签证对医疗保障的要求？</p>
    <p><strong>我们不对此作出确认。</strong>移民与签证的材料要求由葡萄牙的主管机关规定，并且会变化；不同签证类别、不同申请路径的要求也不相同。一份私人医疗保单是否被某一类申请接受，以及需要包含哪些保障、写明什么字样，应当以主管机关或您的移民法律顾问的现行要求为准。</p>
    <p>我们能做的是：如果您的申请文件明确写出了对保单的具体要求（保障范围、最低保额、有效期、需注明的内容），把它提供给我们，我们会说明在合作的保险公司范围内哪些方案可以满足、哪些不能。我们不会为了配合申请而声称某份保单“符合签证要求”。</p>
  </div>
</section>

<section class="section plain" aria-labelledby="biao-le-shenme">
  <div class="container narrow article-body">
    <h2 id="biao-le-shenme">比较方案时实际要看的东西</h2>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">私人医疗保险方案比较要点</caption>
        <thead>
          <tr><th scope="col">要看什么</th><th scope="col">为什么重要</th></tr>
        </thead>
        <tbody>
          <tr><td>您所在城市的网络机构</td><td>网络不覆盖当地，保单在日常使用中的价值大幅下降。</td></tr>
          <tr><td>门诊模块的年度上限与共付金额</td><td>这是使用频率最高的一块，直接决定体验。</td></tr>
          <tr><td>住院与手术的上限</td><td>决定这份保单在大事上顶不顶得住。</td></tr>
          <tr><td>等待期长度</td><td>决定保单什么时候真正开始有用。</td></tr>
          <tr><td>核保结论与除外条款</td><td>必须拿到书面确认，而不是口头“应该没问题”。</td></tr>
          <tr><td>续保条件与年龄上限</td><td>决定这份保单能陪您多久。</td></tr>
          <tr><td>保费的年度调整机制</td><td>医疗保费通常随年龄分段上调，需要知道未来的走势。</td></tr>
        </tbody>
      </table>
    </div>
    <p>把这七项列出来再比较价格，通常会发现两份保费相差 30% 的方案原本不是同一件东西。这也是我们不以“最低保费”作为建议依据的原因。</p>
  </div>
</section>

<section class="section tint" aria-labelledby="women-de-zuoyong">
  <div class="container narrow article-body">
    <h2 id="women-de-zuoyong">我们在这件事里做什么</h2>
    <ul>
      <li><strong>投保前。</strong>确认您所在地区的网络覆盖、按实际使用需求选择模块组合、说明等待期与核保流程、协助如实完成健康问卷，并在签字前用英语书面说明保额、共付、等待期与除外条款。</li>
      <li><strong>保单期间。</strong>家庭成员增减、搬迁到网络覆盖不同的地区、续保时的保费调整与方案调整。</li>
      <li><strong>使用与理赔时。</strong>说明网络内就诊与报销的流程、协助提交报销材料、在保险公司对某项治疗有异议时对接沟通。</li>
    </ul>
    <p class="legal-note">具体保障、等待期、核保结论与除外条款取决于保险公司与所选方案，并以保单文件为准。本页说明的是葡萄牙市场通常的运作方式，不构成个人化的保险建议或医疗建议。服务语言为英语，书面进行。</p>
  </div>
</section>`,
  faqTitle: '葡萄牙私人医疗保险：常见问题',
  faq: [
    {
      q: '有了 SNS，还需要私人医疗保险吗？',
      a: '<p>取决于您最在意什么。SNS 在急重症与复杂治疗上是市场的主体，而且成本很低。私人保险解决的是等待时间与选择权：专科门诊、影像检查、非紧急手术能不能很快安排，能不能选医生。很多家庭的做法是两者并用：急诊靠公立，日常门诊与检查靠私人网络。</p>',
    },
    {
      q: '私人医疗保险能满足居留许可或签证的医疗保障要求吗？',
      a: '<p>我们不对此作出确认。这类要求由葡萄牙主管机关规定、会随时间变化，并且因签证类别与申请路径而不同，应当以主管机关或您的移民法律顾问的现行要求为准。如果您的申请文件写明了对保单的具体要求，可以提供给我们，我们会说明在合作的保险公司范围内哪些方案可以满足、哪些不能。</p>',
    },
    {
      q: '既往症会被保吗？',
      a: '<p>通常不保。葡萄牙的私人医疗保险一般将投保前已存在的疾病列为除外，部分保险公司在特定条件下、经过一定年限后可能有条件纳入。无论结论如何，都必须如实申报：隐瞒病史不会扩大保障，只会在理赔阶段导致拒赔甚至解约。申报后请索取书面的核保结论，确认是否附带除外条款。</p>',
    },
    {
      q: '等待期有多长？',
      a: '<p>取决于保险公司与所选方案。市场上的通常规律是门诊较短、住院与手术较长、产科最长（常见为一年以上）。实务上的含义是：医疗保险不能等到需要用时再买，已出现症状或已在排队等治疗的情况，这次治疗基本不会被保障。</p>',
    },
    {
      q: '计划在葡萄牙生孩子，产科保障怎么安排？',
      a: '<p>需要提前规划。产科通常是等待期最长的一项，而且投保时已怀孕一般不予承保。如果生育在计划之内，这一项应当在计划之前很久就纳入保单，并书面确认等待期的起算方式与保障上限。新生儿加入保单的时限与是否免除等待期，也应在出生前先确认。</p>',
    },
    {
      q: '保单会保重大疾病吗？',
      a: '<p>私人医疗保险赔的是治疗费用，不是国内重疾险那样的确诊即付现金。葡萄牙市场上，重大疾病给付属于另一类产品（寿险的附加保障或独立的 <em>doenças graves</em> 合同），单独销售、单独核保。两者用途不同，不能互相替代。</p>',
    },
    {
      q: '我年龄偏大，还能投保吗？',
      a: '<p>要看具体年龄与产品。葡萄牙的私人医疗保险普遍有投保年龄上限，市场上常见的范围在 55 到 70 岁之间，取决于保险公司与产品；部分产品在一定年龄后不再续保或转为有限保障。年龄越大可选方案越少、保费越高，所以如果计划长期居住，越早安排选择越多。</p>',
    },
    {
      q: '我在中国的医疗保险能在葡萄牙用吗？',
      a: '<p>一般不能作为常住地的医疗保障使用。国内的医疗保险通常按国内的医疗机构与结算体系设计，境外就医即便有保障也往往是有限期限的旅行类保障，不适用于长期居住。在葡萄牙定居后，通常的做法是登记使用 SNS，并视需要另行安排本地的私人医疗保险。</p>',
    },
  ],
  related: [
    { url: '/zh/moving-to-portugal/', label: '迁居葡萄牙：保险安排的顺序' },
    { url: '/zh/insurance-guide-portugal/', label: '葡萄牙保险指南与常见问题' },
  ],
};
