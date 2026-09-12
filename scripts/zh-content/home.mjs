/**
 * /zh/home-insurance-portugal/
 *
 * Search intent: 葡萄牙房屋保险 / 葡萄牙房产保险 — an owner, a buyer, or a
 * non-resident landlord who needs household cover on a Portuguese property.
 *
 * Written for a mainland reader rather than translated, which means three
 * things the Swedish and Danish versions of this page do not need to do:
 *
 *   - Start from the fact that insuring one's own flat is not a habit most
 *     urban Chinese owners bring with them. The page therefore explains why
 *     the product exists before explaining what it contains.
 *   - Spend real space on 重建费用 vs 成交价 and on proportional settlement,
 *     because a buyer whose instinct is "保额 = 房价" will over-insure by a
 *     large multiple, or accept a bank figure they cannot check.
 *   - Treat the condomínio as a genuinely new institution rather than as an
 *     equivalent of 物业, which it is not: 物业 manages, the condomínio's
 *     insurance covers, and the two boundaries do not coincide.
 *
 * §3 of the brief requires the "what to check before accepting a proposal"
 * section; it is the ninth block, written as a checklist a buyer can hold
 * against a PDF.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';

export const HOME_PAGE = {
  slug: 'home-insurance-portugal',
  url: '/zh/home-insurance-portugal/',
  cluster: 'home',
  title: '葡萄牙房屋保险：房产与室内财物的投保方式 | Adler & Rochefort',
  description:
    '葡萄牙房屋保险（multirriscos habitação）实际保什么：建筑与室内财物的划分、重建费用怎么定、比例赔付、水渍与地震、第二居所与空置条件、出租用途与房贷要求。',
  keywords:
    '葡萄牙房屋保险, 葡萄牙房产保险, multirriscos habitação, 葡萄牙公寓保险, 葡萄牙别墅保险, 葡萄牙第二居所保险, 葡萄牙房屋重建费用, 葡萄牙地震保险',
  eyebrow: '房屋与财产',
  h1: '葡萄牙房屋保险：从建筑到室内财物',
  standfirst:
    '葡萄牙的房屋保险叫 <em>multirriscos habitação</em>，由两个保额组成：建筑与室内财物。保额对应的是重建费用，不是您的成交价——这一条决定了理赔时能拿回多少。',
  published: '2026-09-12T09:00:00+00:00',
  modified: '2026-09-12T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: '房屋保险' }],
  pullquote: '保额不是您付了多少钱买这套房，而是把烧掉的部分重新盖起来要花多少钱。',
  schemaType: 'Article',
  formHeading: '房屋保险咨询',
  formBranch: 'ZH · Home',
  formSubject: '葡萄牙房屋保险',
  formCta: '提交咨询',
  formIntro:
    '我们需要几项关于房产的基本信息：类型、面积、建成年份、是自住还是第二居所、有没有房贷。',
  formPlaceholder:
    '例如：里斯本 Parque das Nações 一套 95 平方米公寓，2006 年建成，在 condomínio 内，有 Millennium 房贷，平时自住。',
  sections: `
<section class="section plain" aria-labelledby="weishenme-yao-bao">
  <div class="container narrow article-body">
    <h2 id="weishenme-yao-bao">为什么在葡萄牙，房子本身要投保</h2>
    <p>在国内城市，很少有业主为自己住的那套房子单独买财产保险。这不是疏忽，而是环境决定的：房屋是钢筋混凝土结构、小区有物业、真正的重大损失概率低，而且大多数人对“房子”的价值感知集中在土地与位置上，不在建筑本体上。</p>
    <p>葡萄牙的情况不同，原因有三个很具体：</p>
    <ul>
      <li><strong>房屋结构与年代更分散。</strong>阿尔加维和里斯本大量住宅是二十世纪七八十年代甚至更早的砖混或石造建筑，管线老化、屋面渗漏、外墙裂缝是常见问题，而不是意外。</li>
      <li><strong>水渍损失非常普遍。</strong>葡萄牙房屋保险最高频的理赔类型不是火灾也不是盗窃，而是 <em>danos por água</em>——水管爆裂、卫浴渗漏、屋顶进水，以及由此造成的对楼下邻居的损害。</li>
      <li><strong>有房贷就必须有保险。</strong>银行放款时会把房屋保险作为条件，受益人指向银行。没有保单，贷款流程走不下去。</li>
    </ul>
    <p>所以在葡萄牙，房屋保险与其说是“额外买的一份保险”，不如说是持有房产的组成部分。真正需要决定的不是买不买，而是保多少、保什么、哪些条款必须调整。</p>
  </div>
</section>

<section class="section tint" aria-labelledby="liang-ge-baoe">
  <div class="container narrow article-body">
    <h2 id="liang-ge-baoe">两个保额：建筑与室内财物</h2>
    <p>一份 <em>multirriscos habitação</em> 的骨架是两个数字：</p>
    <p><strong><em>capital edifício</em>（建筑保额）。</strong>覆盖建筑本体：结构、屋面、地面、内外墙、固定的水电燃气管线、固定橱柜、卫浴洁具。如果您买的是公寓（<em>fração autónoma</em>），投保的是您这一户的部分，而不是整栋楼。</p>
    <p><strong><em>capital recheio</em>（室内财物保额）。</strong>覆盖可移动的部分：家具、可移动家电、电子设备、衣物、餐具、儿童用品、运动器材。这一项经常被填得过低，因为大多数人低估自己家里东西的总价值——真要重新买一遍，数字往往比预想高很多。</p>
    <p>两者之间的界线不总在直觉的位置上。常见的模糊项目包括：<strong>分体空调与热泵</strong>、<strong>太阳能板与热水系统</strong>、<strong>阳台封窗与遮阳棚</strong>、<strong>围墙与大门</strong>、<strong>泳池</strong>、<strong>内嵌式家电</strong>。不同保险公司的归类方式不一样，有几家要求单独申报并列明价值。</p>
    <div class="callout">
      <span class="callout-label">实务做法</span>
      投保前把这些模糊项目逐一确认，写进保单。写进保单的泳池是有保障的；没人提过的泳池，会在出事那天变成一个争论题目——而那一天永远是最不适合争论的时候。
    </div>
  </div>
</section>

<section class="section plain" aria-labelledby="zhongjian-feiyong">
  <div class="container narrow article-body">
    <h2 id="zhongjian-feiyong">重建费用：整份保单里最容易被填错的数字</h2>
    <p>中国买家最常犯的一个错误，是把成交价填成保额。逻辑上很自然——保额不就应该等于房子的价值吗？但在葡萄牙的房屋保险里，这两个数字衡量的是不同的东西。</p>
    <p><em>Valor de reconstrução</em>（重建费用）指的是：如果这栋建筑被毁，按现在的人工与材料价格，把它重新建起来要花多少钱。它<strong>不包含土地价值，也不包含位置溢价</strong>。而在葡萄牙，尤其是里斯本、卡斯凯什和阿尔加维沿海，房价里位置的占比很高。结果就是一套 60 万欧元成交的公寓，重建费用可能在 15 万到 20 万欧元之间。</p>
    <p>按 60 万投保会怎样？并不会赔得更多——房屋保险是补偿性的，赔的是实际损失，不会因为保额高就多赔。您只是多付了三倍的保费。</p>
    <p>反过来低估更危险，因为葡萄牙保单普遍适用<strong>比例赔付原则</strong>（<em>regra proporcional</em>）：</p>
    <div class="callout">
      <span class="callout-label">比例赔付是怎么算的</span>
      假设应有的重建费用是 20 万欧元，而保单上写的是 12 万（相当于应有金额的 60%）。厨房发生火灾，修复费用 3 万欧元。保险公司可以按 60% 赔付，即 1.8 万欧元，再扣除自负额。损失只是局部的，赔款却按整体不足的比例打了折。
    </div>
    <p>这就是为什么这个数字值得认真对待。实务中通常按建筑面积乘以每平方米的重建单价来估算，单价取决于地区、建筑类型与装修标准；有些保险公司提供自动重估条款（<em>atualização automática de capitais</em>），按通胀逐年调整，在建材涨价的年份很有用。</p>
    <p class="legal-note">具体的每平方米单价与是否适用比例赔付，取决于保险公司与所选方案。以上说明的是葡萄牙市场的通常做法。</p>
  </div>
</section>

<section class="section tint" aria-labelledby="condominio">
  <div class="container narrow article-body">
    <h2 id="condominio">Condomínio 的保险覆盖到哪里</h2>
    <p><em>Condomínio</em> 常被理解成“物业”，但它们不是一回事。物业是管理机构，而 <em>condomínio</em> 在葡萄牙法律上是全体业主组成的共有体：共同决策、共同分摊、共同持有建筑的公共部分（<em>partes comuns</em>）。</p>
    <p>对于分层共有的建筑（<em>propriedade horizontal</em>），葡萄牙法律要求为火灾风险投保，这份保单通常由 <em>condomínio</em> 统一办理，覆盖公共部分：结构、屋面、楼梯、电梯、外墙、共用管线。</p>
    <p>需要注意的是三点：</p>
    <ul>
      <li><strong>它通常只保火灾这一项，或者范围很有限。</strong>水渍、盗窃、玻璃、地震往往不在其中，或者保额很低。</li>
      <li><strong>它不保您户内的东西。</strong>您自己的装修、家具、电器、个人物品，与 <em>condomínio</em> 的保单无关。</li>
      <li><strong>公共部分与私有部分的界线由产权文件决定。</strong>阳台、窗户、封闭的露台归谁，不同楼盘写法不同，也是渗水事故里最常见的争议点。</li>
    </ul>
    <p>合理的做法是：向管委会（<em>administração do condomínio</em>）索取现有保单的保障明细，看清它保了什么、保额多少，然后用自己的保单补上缺口，而不是假设“楼里有保险，我就不用买了”。</p>
  </div>
</section>

<section class="section plain" aria-labelledby="bao-shenme">
  <div class="container narrow article-body">
    <h2 id="bao-shenme">通常包含什么，通常不包含什么</h2>
    <p>不同保险公司的方案差异很大——这一点在葡萄牙尤其明显，两份保费相近的保单可能在保障范围上相差很远。以下是市场上比较典型的情形，不是对任何一份具体合同的确认。</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">葡萄牙房屋保险常见保障与常见除外</caption>
        <thead>
          <tr><th scope="col">项目</th><th scope="col">通常情况</th></tr>
        </thead>
        <tbody>
          <tr><td>火灾、爆炸、闪电</td><td>基础保障，几乎所有方案都包含。</td></tr>
          <tr><td>水渍（<em>danos por água</em>）</td><td>通常包含，但自负额较高，且“查漏与破拆修复”的费用是否包含，各家不同。</td></tr>
          <tr><td>风暴与暴雨</td><td>通常包含，但常设风速门槛，或要求建筑无原有缺陷。</td></tr>
          <tr><td>盗窃与入室抢劫</td><td>通常包含。可能要求门锁与安防达到一定标准；现金与首饰另设分项限额。</td></tr>
          <tr><td>电涌与电器损坏</td><td>常见但不一定默认包含，需要确认是否已勾选。</td></tr>
          <tr><td>玻璃破碎</td><td>通常包含，保额有限。</td></tr>
          <tr><td>地震（<em>fenómenos sísmicos</em>）</td><td><strong>在葡萄牙通常是可选项，不是默认包含。</strong>需要单独确认并单独定价。</td></tr>
          <tr><td>民事责任</td><td>通常带有一定额度，但范围可能仅限同楼邻居，额度也可能偏低。</td></tr>
          <tr><td>逐渐渗漏、老化、缺乏维护</td><td>常见除外责任。保险保的是意外事故，不是建筑的自然老化。</td></tr>
          <tr><td>施工与结构改造引起的损失</td><td>通常除外，尤其在未申报装修的情况下。</td></tr>
          <tr><td>长期空置期间发生的损失</td><td>可能受限或除外，取决于连续空置天数的约定。</td></tr>
        </tbody>
      </table>
    </div>
    <p><strong>关于地震，值得单独说一句。</strong>里斯本、塞图巴尔和阿尔加维在地震风险区划上并非低风险地区，1755 年的里斯本大地震和 1969 年的圣维森特角地震都是真实记录。地震保障在葡萄牙市场上通常作为附加项提供，价格取决于地区、建筑年代与结构类型。不要假设它已经包含在内，也不要假设它不重要。</p>
  </div>
</section>

<section class="section tint" aria-labelledby="di-er-ju-suo">
  <div class="container narrow article-body">
    <h2 id="di-er-ju-suo">第二居所、空置房产与出租用途</h2>
    <p>很多中国客户在葡萄牙的房产不是全年自住：可能一年住两三个月，可能给家人偶尔使用，可能通过平台短租，也可能长租给本地住户。这三种用途在保单上是三件不同的事。</p>
    <p><strong>第二居所与长期空置。</strong>多数保险公司在条款里约定了连续无人居住的天数上限（常见的是 60 天或 90 天，具体各家不同）。超过这个期限，某些保障可能受限——最典型的是盗窃与水渍，因为无人在场时漏水会持续很久。可行的安排通常包括：申报为第二居所而非主要住所、约定定期查看、安装漏水关断阀或安防系统。关键是<strong>如实申报实际使用方式</strong>，而不是把它写成常住房。</p>
    <p><strong>出租用途。</strong>无论是长租还是短租（<em>alojamento local</em>），一旦房产用于出租，风险结构就变了：使用者不是业主、人员流动、租客财物、对租客的责任都是新的问题。用自住条款的保单去覆盖短租房，是理赔被拒的常见原因。短租通常需要专门的方案。</p>
    <p><strong>出租给长期住户。</strong>业主投保建筑与业主责任，租客自行投保其个人财物。保单上写清房产是出租状态，这一点在有房贷时尤其重要，因为银行的要求与租赁用途可能同时适用。</p>
  </div>
</section>

<section class="section plain" aria-labelledby="fangdai">
  <div class="container narrow article-body">
    <h2 id="fangdai">房贷相关的要求</h2>
    <p>如果房产有葡萄牙的房贷，银行通常会要求两件事：房屋多险保单（<em>multirriscos</em>），以及寿险（<em>seguro de vida</em>）。银行会作为保单的受益人（<em>beneficiário</em>），并要求在放款前提供保险证明。</p>
    <p>银行通常会直接提供一份自己的保险方案。<strong>这份方案未必不合适——很多时候它是可用的。</strong>但它是按银行的标准流程生成的，不是按您这套房子的具体情况定制的，所以值得做的事是比较范围，而不是默认接受或默认拒绝。比较时看四项：建筑保额是否与真实重建费用相符、地震是否包含、室内财物保额是否够、自负额是多少。</p>
    <p>在葡萄牙，借款人有权自行选择保险公司，只要保单满足银行在贷款合同中约定的条件（受益人、保额、保障范围）。有些银行会把“使用本行保险”与利率优惠挂钩，这时需要把保费差额和利率优惠放在一起算，而不是只看其中一边。</p>
    <p class="legal-note">具体要求由贷款合同与银行规定决定。签署前请以银行提供的书面条件为准。</p>
  </div>
</section>

<section class="section tint" aria-labelledby="guizhong-wupin">
  <div class="container narrow article-body">
    <h2 id="guizhong-wupin">贵重物品与较高价值的房产</h2>
    <p>并不是每位客户都有需要特别安排的财物。但如果确实有——首饰、名表、艺术品、收藏、高端音响或摄影器材、较高价值的住宅、或者多处房产——那么普通方案的几项限制需要提前知道：</p>
    <ul>
      <li><strong>分项限额（<em>sublimites</em>）。</strong>珠宝、贵金属、现金、艺术品通常有单独上限，常以室内财物保额的百分比表示（例如 20%），有时还有单件上限。</li>
      <li><strong>安防条件。</strong>超过一定金额，保险公司可能要求保险箱、警报系统或特定门锁标准，并写入特别条款。不满足条件时，这部分保障可能不成立。</li>
      <li><strong>逐项申报与价值证明。</strong>单件价值较高的物品通常需要列明，并提供评估报告或购买凭证。申报清楚的好处在理赔时才体现：赔的是写明的价值，不是事后各说各话。</li>
      <li><strong>多处房产。</strong>几处房产分别投保，还是在一份方案里统一安排，取决于用途与保险公司的承保条件。用途不同（自住、第二居所、出租）通常需要分别约定。</li>
    </ul>
    <p>需要说明的是，这些安排的目的不是“买更贵的保险”，而是让保单上的数字与实际情况一致。一份没有如实申报的高保额保单，在理赔时并不比低保额保单更可靠。</p>
  </div>
</section>

<section class="section plain" aria-labelledby="jiancha-qingdan">
  <div class="container narrow article-body">
    <h2 id="jiancha-qingdan">接受保险方案之前，中国买家应该核对的几项</h2>
    <p>拿到一份报价或保单草案时，可以按这个顺序逐项对照。这不需要懂葡萄牙语，只需要知道该找哪几个数字。</p>
    <ol class="process-steps">
      <li><strong>建筑保额（<em>capital edifício</em>）。</strong>它是否接近真实的重建费用，而不是成交价、不是银行估值、不是房产税籍价值（<em>valor patrimonial tributário</em>）？</li>
      <li><strong>室内财物保额（<em>capital recheio</em>）。</strong>如果全部重新购置一遍，这个数字够吗？</li>
      <li><strong>地震保障。</strong>是否包含？如果包含，保额与自负额是多少？如果不包含，明确知道这是一个选择，而不是一次遗漏。</li>
      <li><strong>除外责任（<em>exclusões</em>）。</strong>至少读清楚水渍、逐渐渗漏、维护不足、施工这几项的写法。</li>
      <li><strong>自负额（<em>franquia</em>）。</strong>是固定金额还是百分比？两者并列时按哪一项适用？水渍的自负额常常单独更高。</li>
      <li><strong>贵重物品限额。</strong>珠宝、现金、艺术品的分项上限是多少，是否附带安防条件？</li>
      <li><strong>空置条款。</strong>连续无人居住多少天之后保障受限？这个天数与您的实际使用方式是否吻合？</li>
      <li><strong>出租用途。</strong>如果房产会出租（长租或短租），保单上是否写明？没写明就等于没有。</li>
      <li><strong>民事责任。</strong>额度多少？范围是否只限同楼邻居，还是覆盖更广的第三方？</li>
      <li><strong>投保人与被保险人信息。</strong>姓名拼写、NIF、房产地址是否与产权文件一致？共同持有时是否两人都在保单上？</li>
      <li><strong>房贷受益人条款。</strong>如果有贷款，银行是否已按要求列为受益人？</li>
      <li><strong>生效日期。</strong>保障从哪一天开始？签署产权转让书（<em>escritura</em>）当天必须已经生效。</li>
    </ol>
    <div class="callout">
      <span class="callout-label">最值得问的一个问题</span>
      不是“这份保单多少钱”，而是“这份保单不保什么”。能立刻具体回答后一个问题的人，通常真的读过条款。
    </div>
  </div>
</section>

<section class="section tint" aria-labelledby="women-de-zuoyong">
  <div class="container narrow article-body">
    <h2 id="women-de-zuoyong">我们在这件事里做什么</h2>
    <p>Adler &amp; Rochefort 是在葡萄牙注册的保险代理机构（ASF 注册号 425591790/3）。在房屋保险上，我们的工作是三段：</p>
    <ul>
      <li><strong>投保前。</strong>估算重建费用、确认室内财物保额、逐项确认地震与贵重物品等可选保障、把实际使用方式（自住、第二居所、出租）写进保单，并在签字前用英语书面说明保额、自负额、主要除外责任与报案时限。</li>
      <li><strong>保单期间。</strong>装修、加装泳池或太阳能、使用方式变化、房产出租、续保重估——这些都需要更新保单，否则理赔时的依据仍然是旧信息。</li>
      <li><strong>理赔时。</strong>协助报案、准备材料、与保险公司和查勘人员沟通、盯住时限。葡萄牙的报案时限通常很短，从事故发生日起算，错过之后的补救空间有限。</li>
    </ul>
    <p class="legal-note">服务语言为英语，书面进行。保单依葡萄牙法律以葡萄牙语出具。</p>
  </div>
</section>`,
  faqTitle: '葡萄牙房屋保险：常见问题',
  faq: [
    {
      q: '葡萄牙的房屋保险是强制的吗？',
      a: '<p>分两层。对于分层共有的建筑（公寓楼，法律上称 <em>propriedade horizontal</em>），葡萄牙法律要求为火灾风险投保，这部分通常由 <em>condomínio</em> 统一办理，覆盖建筑的公共部分。对于您自己户内以及室内财物，一般不是法律强制，但如果有房贷，银行几乎一定会要求。独立住宅（别墅）在没有贷款的情况下通常不强制，但没有保险意味着重建费用完全自担。</p>',
    },
    {
      q: '保额应该填成交价还是重建费用？',
      a: '<p>重建费用（<em>valor de reconstrução</em>）。它指的是按现在的人工与材料价格把建筑重新盖起来的成本，不包含土地与位置价值，因此通常明显低于成交价。按成交价投保不会多赔，只会多付保费；按明显低于实际的金额投保，则可能触发比例赔付，即使是局部损失也按不足比例打折。</p>',
    },
    {
      q: '地震保障是自动包含的吗？',
      a: '<p>在葡萄牙市场上通常不是。地震（<em>fenómenos sísmicos</em>）一般作为可选保障单独提供并单独定价，是否包含取决于保险公司与所选方案。里斯本、塞图巴尔与阿尔加维在风险区划上不属于低风险地区，所以这一项值得明确确认，而不是假设。</p>',
    },
    {
      q: 'Condomínio 已经有保险，我还需要自己买吗？',
      a: '<p>通常需要。<em>Condomínio</em> 的保单覆盖建筑的公共部分，且常常只针对火灾或范围有限，与您户内的装修、家具、电器和个人物品无关。合理做法是先向管委会索取现有保单的保障明细，看清它保什么、保额多少，再用自己的保单补上缺口。</p>',
    },
    {
      q: '我住在中国，能为葡萄牙的房产投保吗？',
      a: '<p>通常可以。非居民业主投保是很常见的情形，一般需要葡萄牙纳税人号码（NIF）、身份证明、房产文件，以及可用于缴费的付款方式（是否必须是葡萄牙银行账户，取决于保险公司）。需要注意的是空置条款：长期无人居住时某些保障可能受限，所以保单上要如实写明实际使用方式。</p>',
    },
    {
      q: '房子拿去短租，自住的保单还有效吗？',
      a: '<p>通常无效，或者至少不足。用于出租——尤其是短租（<em>alojamento local</em>）——的房产风险结构与自住不同，需要在保单上写明用途，往往要用专门的方案。没有申报的出租用途，是理赔被拒的常见原因之一。</p>',
    },
    {
      q: '银行给的保险方案可以直接用吗？',
      a: '<p>可以用，但值得先比较范围。银行方案是按标准流程生成的，未必针对您这套房子的情况。比较时看四项：建筑保额是否与真实重建费用相符、地震是否包含、室内财物保额是否足够、自负额是多少。在葡萄牙，借款人一般有权自行选择保险公司，只要保单满足贷款合同约定的条件。如果银行把使用本行保险与利率优惠挂钩，需要把保费差额与利率优惠一起算。</p>',
    },
    {
      q: '装修之后需要通知保险公司吗？',
      a: '<p>需要。厨卫翻新、加装泳池或太阳能、封闭阳台、扩建——这些都会改变重建费用和风险结构。不更新保单，理赔时的依据仍是旧信息，可能导致赔付不足。同理，室内财物价值明显增加时也应调整保额。</p>',
    },
  ],
  related: [
    { url: '/zh/buying-property-portugal/', label: '在葡萄牙买房：分阶段的保险安排' },
    { url: '/zh/liability-insurance-portugal/', label: '民事责任保险' },
    { url: '/zh/insurance-guide-portugal/', label: '葡萄牙保险指南与常见问题' },
  ],
};
