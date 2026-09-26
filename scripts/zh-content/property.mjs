/**
 * /zh/buying-property-portugal/
 *
 * Search intent: 葡萄牙买房保险 — a buyer somewhere between "we are looking"
 * and "the escritura is next week", who has just been told they need
 * insurance and does not know what the document in front of them says.
 *
 * §8 requires geographic breadth rather than an Algarve page, so the regional
 * section treats Lisbon, Cascais, Porto, the Algarve and the interior as five
 * genuinely different underwriting situations — which they are — instead of
 * naming cities decoratively.
 *
 * The page is organised by the transaction's own timeline (before, at, after
 * completion) because that is how a buyer experiences it, and the §8 mistakes
 * list closes it. Overlap with /zh/home-insurance-portugal/ is deliberate but
 * bounded: that page explains what the product covers, this one explains when
 * each decision has to be made and by whom.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';

export const PROPERTY_PAGE = {
  slug: 'buying-property-portugal',
  url: '/zh/buying-property-portugal/',
  cluster: 'property',
  title: '在葡萄牙买房：保险该在哪个阶段安排 | Adler & Rochefort',
  description:
    '在葡萄牙购置房产的保险安排：签约前要了解什么、房贷的要求、保障为何须在 escritura 当天生效、高价值房产的现场查勘，以及最常见的六个错误。',
  keywords:
    '葡萄牙买房保险, 葡萄牙房产投保, 葡萄牙房贷保险, escritura 保险, 葡萄牙买房流程 保险, 葡萄牙房产重建价值',
  eyebrow: '买房',
  h1: '在葡萄牙买房：保险按阶段怎么安排',
  standfirst:
    '买房过程中与保险有关的决定其实只有几个，但每一个都有时间点。最关键的一条：保障必须在签署产权转让书（<em>escritura</em>）当天已经生效，而不是办完手续之后再补。',
  published: '2026-09-12T09:00:00+00:00',
  modified: '2026-09-26T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: '在葡萄牙买房' }],
  pullquote: '交割当天房子已经是您的了。保单晚一天生效，那一天的风险就是自己的。',
  schemaType: 'Article',
  formHeading: '买房相关的保险咨询',
  formBranch: 'ZH · Home',
  formSubject: '葡萄牙买房的保险安排',
  formCta: '提交咨询',
  formIntro:
    '请说明房产所在地区、类型与面积、预计交割日期，以及是否有葡萄牙的房贷。',
  formPlaceholder:
    '例如：卡斯凯什一套 140 平方米的联排别墅，1998 年建成，预计十月底交割，有 Novo Banco 的房贷。',
  sections: `
<section class="section plain" aria-labelledby="liucheng-li-de-baoxian">
  <div class="container narrow article-body">
    <h2 id="liucheng-li-de-baoxian">保险在买房流程里的位置</h2>
    <p>葡萄牙的买房流程通常分三步：签署意向或预约买卖合同（<em>CPCV</em>，<em>contrato de promessa de compra e venda</em>，通常支付定金）、办理贷款（如需）、签署产权转让书（<em>escritura</em> 或 <em>escritura pública de compra e venda</em>，一般在公证处或律师处完成，当天付清余款并完成产权转移）。</p>
    <p>保险出现在三个位置：</p>
    <ul>
      <li><strong>贷款审批期间。</strong>银行要求提供保险方案作为放款条件——通常是房屋多险保单加寿险。</li>
      <li><strong>交割当天。</strong>房屋保险必须已经生效，因为从签字那一刻起，风险就转移给您了。</li>
      <li><strong>入住与装修之后。</strong>室内财物、贵重物品、责任额度、以及装修后重建费用的调整。</li>
    </ul>
    <p>剩下的工作是把每一项的数字定对。</p>
  </div>
</section>

<section class="section tint" aria-labelledby="jiaoge-qian">
  <div class="container narrow article-body">
    <h2 id="jiaoge-qian">交割之前：要了解的几件事</h2>
    <p><strong>拿到房产的基本信息。</strong>投保需要几项事实，这些都在您买房时本来就会看到的文件里：</p>
    <ul>
      <li><em>Caderneta predial</em>（房产税籍资料）：面积、建成年份、房产的税籍价值（<em>VPT</em>）。</li>
      <li><em>Certidão permanente</em> 或产权登记资料：产权人、是否存在抵押或其他负担。</li>
      <li><em>Licença de utilização</em>（使用许可）：房产的合法用途（住宅、商业、旅游）。这一项会影响可投保的方案，尤其是打算短租时。</li>
      <li>建筑结构与材料、有无泳池、有无太阳能、屋面类型、上次翻修的时间。</li>
    </ul>
    <p><strong>注意税籍价值不是重建费用。</strong><em>VPT</em> 是税务上的评估值，通常明显低于真实的重建成本；成交价通常明显高于它。两个数字都不能直接填进保单——保额要用的是第三个数字：<em>valor de reconstrução</em>（重建费用）。这一点的完整解释在<a href="/zh/home-insurance-portugal/">房屋保险</a>那一页。</p>
    <p><strong>银行的要求。</strong>如果有葡萄牙的房贷，贷款合同会写明保险条件：受益人（银行）、最低保额、必须包含的保障。银行通常会一并提供自己的保险方案。<strong>这份方案未必不合适，很多时候是可用的</strong>——但它按标准流程生成，不是针对这套房子定制的。值得做的是比较范围：建筑保额是否对应真实重建费用、地震是否包含、室内财物是否足够、自负额多少。在葡萄牙，借款人一般有权自行选择保险公司，只要保单满足贷款合同约定的条件；如果银行把使用本行保险与利率优惠挂钩，把保费差额和利率优惠放在一起算再决定。</p>
    <p><strong>时间上要留出余量。</strong>保险出单本身很快，但核保可能需要补充资料（房龄较大的房产、有泳池、结构特殊、或保额较高时更常见）。建议在交割前一到两周启动，而不是前一天。</p>
  </div>
</section>

<section class="section plain" aria-labelledby="jiaoge-dangtian">
  <div class="container narrow article-body">
    <h2 id="jiaoge-dangtian">交割当天：三项必须核对</h2>
    <ol class="process-steps">
      <li><div><strong>生效日期。</strong><span>保单的起保日必须是 <em>escritura</em> 当天或之前。卖方的保单在产权转移后不再保护您，中间的空档没有任何保障。</span></div></li>
      <li><div><strong>投保人与被保险人信息。</strong><span>姓名拼写要与身份文件一致（中文姓名的拼音顺序在葡萄牙的文件里经常被写反，值得特别核对）、NIF 正确、房产地址与产权文件一致。如果是共同持有，两位持有人都应在保单上，否则理赔时另一方可能无权主张。</span></div></li>
      <li><div><strong>房贷受益人条款。</strong><span>有贷款时，银行必须按贷款合同的要求被列为受益人（<em>beneficiário</em>），并且银行通常要在放款前看到保险证明。这一项漏掉会直接卡住交割。</span></div></li>
    </ol>
    <div class="callout">
      <span class="callout-label">一个容易忽略的细节</span>
      如果房产由公司名下持有，或者由多人按份共有，保单上的投保人应当与产权结构一致。用个人名义为公司持有的房产投保，理赔时会出现“被保险人对该标的无保险利益”的问题——这是形式问题，但后果是实质的。
    </div>
  </div>
</section>

<section class="section tint" aria-labelledby="mai-hou">
  <div class="container narrow article-body">
    <h2 id="mai-hou">买下之后：还要补的几块</h2>
    <p>交割当天生效的通常只是建筑部分——这是银行要求的最低限度。真正住进去之后，还有几块需要补：</p>
    <p><strong>室内财物（<em>recheio</em>）。</strong>家具、家电、电子设备、衣物。如果是从中国海运过来的整套家当，实际价值往往比预估高。建议按“全部重新购置一遍”来估算，而不是按折旧后的价值。</p>
    <p><strong>民事责任额度。</strong>房屋保单里通常带有一定责任额度，但可能偏低、也可能只覆盖同楼邻居。有孩子、养宠物、或住在公寓楼里的情况下，这一项值得单独确认并提高（详见<a href="/zh/liability-insurance-portugal/">民事责任保险</a>）。</p>
    <p><strong>贵重物品。</strong>珠宝、手表、艺术品、收藏、高端影音或摄影器材，通常有分项限额，超过一定金额要逐项申报，可能附带保险箱或安防条件。并不是每位客户都需要这项安排，但如果确实有这类财物，必须提前申报——理赔时按写明的价值赔，不是事后估。</p>
    <p><strong>地震保障。</strong>在葡萄牙通常是可选项，不是默认包含。要明确确认自己的保单里有没有，以及保额与自负额。</p>
    <p><strong>使用方式。</strong>自住、第二居所、长租、短租（<em>alojamento local</em>）——这四种在保单上是四件不同的事。如果买房时是自住、后来改为出租，必须更新保单，否则出租期间的事故可能不被保障。</p>
    <p><strong>装修之后的重估。</strong>翻新厨卫、加装泳池或太阳能、封闭阳台、扩建面积，都会改变重建费用。装修完成后调整保额，是最容易被忘记、后果又最直接的一步。</p>
  </div>
</section>

<section class="section plain" aria-labelledby="diqu-chayi">
  <div class="container narrow article-body">
    <h2 id="diqu-chayi">不同地区，核保关注点不同</h2>
    <p>葡萄牙各地的房产差别很大，保险公司的关注点也不一样。以下是实务中常见的差异，具体承保条件仍取决于保险公司与房产本身。</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">葡萄牙各地区房产投保的常见关注点</caption>
        <thead>
          <tr><th scope="col">地区</th><th scope="col">常见的关注点</th></tr>
        </thead>
        <tbody>
          <tr><td>里斯本市区</td><td>老城区（Alfama、Príncipe Real、Graça 等）多为翻修过的历史建筑：管线与屋面状况、相邻建筑的连带风险、地震区划、以及 <em>condomínio</em> 保单与自有保单的边界。</td></tr>
          <tr><td>卡斯凯什与里斯本沿海</td><td>独立住宅与别墅较多：重建费用较高、常有泳池与庭院设施、临海的风暴与盐雾侵蚀、以及贵重财物的申报与安防条件。</td></tr>
          <tr><td>波尔图与北部</td><td>降雨量明显高于南部：屋面与排水、渗漏历史、老建筑的结构翻修记录；市中心公寓的 <em>condomínio</em> 结构也较复杂。</td></tr>
          <tr><td>阿尔加维</td><td>第二居所与出租用途占比高：空置条款、短租申报、泳池、以及夏季的用电负荷与火灾风险。</td></tr>
          <tr><td>内陆与乡村地区</td><td>林地火灾风险（<em>risco de incêndio florestal</em>）是核保重点：与林地的距离、周边清理状况；此外供水供电方式、消防到达时间、以及长期空置的问题。</td></tr>
        </tbody>
      </table>
    </div>
    <p>这不是“哪里更好保”的排名，而是说明同一份报价表放到不同地区会得出不同结果。看房阶段把房产的实际情况说清楚，报价才有意义。</p>
  </div>
</section>

<section class="section tint" aria-labelledby="liu-ge-cuowu">
  <div class="container narrow article-body">
    <h2 id="liu-ge-cuowu">在葡萄牙买房时最常见的六个保险错误</h2>
    <ol class="process-steps">
      <li><div><strong>按成交价投保，而不是按重建费用。</strong><span>多付保费，赔付并不增加。反过来按明显偏低的金额投保，则可能触发比例赔付，即使局部损失也按不足比例打折。</span></div></li>
      <li><div><strong>以为地震已经包含。</strong><span>在葡萄牙它通常是可选项。里斯本、塞图巴尔与阿尔加维都不属于低风险地区，值得明确确认。</span></div></li>
      <li><div><strong>只保了建筑，忘了室内财物。</strong><span>银行只要求建筑部分，于是很多买家的保单里 <em>recheio</em> 保额是零，或者是一个随手填的数字。</span></div></li>
      <li><div><strong>出租用途没有申报。</strong><span>自住条款的保单覆盖不了出租——尤其是短租。这是理赔被拒最常见的原因之一。</span></div></li>
      <li><div><strong>装修后没有更新保额。</strong><span>翻新与扩建改变了重建费用，而保单上还是旧数字，理赔时按旧数字算。</span></div></li>
      <li><div><strong>忽略空置条款。</strong><span>第二居所长期无人居住时，盗窃与水渍等保障可能受限。保单上要写明实际使用方式，而不是写成常住房。</span></div></li>
    </ol>
    <p class="legal-note">以上为葡萄牙市场的通常情况，具体条款取决于保险公司与所选方案，并以保单文件为准。买房流程、税费与贷款条件属于法律与银行事务，本页不构成这些方面的意见。</p>
  </div>
</section>

<section class="section plain" aria-labelledby="women-de-zuoyong">
  <div class="container narrow article-body">
    <h2 id="women-de-zuoyong">我们在这件事里做什么</h2>
    <ul>
      <li><strong>交割前。</strong>按房产文件估算重建费用（较高价值的房产可安排保险公司现场查勘）、对照银行在贷款合同里的保险要求、比较银行方案与其他方案的范围、确认地震与贵重物品等可选保障、把生效日定在交割当天或之前。</li>
      <li><strong>交割当天。</strong>确认保单已生效、受益人条款符合银行要求、投保人与房产信息与产权文件一致。</li>
      <li><strong>入住之后。</strong>补齐室内财物与与家业相称的责任额度、将艺术品与贵重物品按约定价值列明、按实际使用方式调整条款、装修后重估保额。</li>
      <li><strong>理赔时。</strong>协助报案、准备材料、与保险公司和查勘人员沟通、盯住时限。</li>
    </ul>
    <p class="legal-note">服务语言为英语，书面进行。保单依葡萄牙法律以葡萄牙语出具。</p>
  </div>
</section>`,
  faqTitle: '在葡萄牙买房：保险相关的常见问题',
  faq: [
    {
      q: '房屋保险应该在什么时候办？',
      a: '<p>生效日必须是签署产权转让书（<em>escritura</em>）当天或之前，因为从签字那一刻起风险就转移给您了，而卖方的保单在产权转移后不再保护您。实务上建议在交割前一到两周启动，因为核保有时需要补充资料（房龄较大、有泳池、结构特殊或保额较高时更常见）。</p>',
    },
    {
      q: '保额该填成交价、税籍价值还是别的数字？',
      a: '<p>都不是。要用的是重建费用（<em>valor de reconstrução</em>）：按现在的人工与材料价格把建筑重新盖起来的成本，不含土地与位置价值。成交价通常明显高于它，税籍价值（<em>VPT</em>）通常明显低于它，两者都不能直接填进保单。</p>',
    },
    {
      q: '必须用银行提供的保险吗？',
      a: '<p>在葡萄牙，借款人一般有权自行选择保险公司，只要保单满足贷款合同约定的条件（受益人、最低保额、必须包含的保障）。银行的方案未必不合适，但值得比较范围而不是默认接受。如果银行把使用本行保险与利率优惠挂钩，需要把保费差额与利率优惠放在一起计算。具体要求以贷款合同的书面条件为准。</p>',
    },
    {
      q: '我不住在葡萄牙，可以为买下的房产投保吗？',
      a: '<p>可以，非居民业主投保很常见。通常需要 NIF、身份证明、房产文件与可用于缴费的付款方式。要特别注意空置条款：长期无人居住时盗窃与水渍等保障可能受限，所以保单上应写明这是第二居所以及大致的使用方式，而不是写成常住房。</p>',
    },
    {
      q: '房产是通过公司持有的，保单怎么写？',
      a: '<p>保单上的投保人应当与产权结构一致。用个人名义为公司持有的房产投保，理赔时会出现被保险人对该标的没有保险利益的问题。按份共有时，各共有人都应列在保单上，否则其中一方可能无权主张赔付。</p>',
    },
    {
      q: '买的是期房或正在翻修的房子怎么办？',
      a: '<p>这两种情况的保险安排不同。施工期间通常由施工方的工程险与责任险覆盖，业主的房屋保单一般在房产可使用并交付之后才开始。购买尚在建设中的房产时，应确认施工方的保障范围与自己保单的起保时点如何衔接，避免中间出现真空；翻修完成后则需要按新的重建费用调整保额。</p>',
    },
    {
      q: '交割之后再买保险来得及吗？',
      a: '<p>有房贷时通常不可行——银行会在放款前要求看到保险证明。即便没有贷款，交割当天到投保之间的这段时间也是完全没有保障的，而这段时间恰恰经常伴随搬家、装修与人员进出，风险并不低。建议不要留这个空档。</p>',
    },
  ],
  related: [
    { url: '/zh/home-insurance-portugal/', label: '房屋与财产保险' },
    { url: '/zh/moving-to-portugal/', label: '迁居葡萄牙：保险安排的顺序' },
    { url: '/zh/insurance-guide-portugal/', label: '葡萄牙保险指南与常见问题' },
  ],
};
