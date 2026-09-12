/**
 * /zh/moving-to-portugal/
 *
 * Search intent: 移居葡萄牙保险 — someone in China with a date, or close to
 * one, who wants to know what to arrange before the flight and what can only
 * be arranged after landing.
 *
 * §7 is explicit that this must stay an insurance page and not become an
 * immigration article. The organising device that keeps it there: almost
 * every insurance step in Portugal is gated on the NIF, so the page is
 * structured around that gate — what can be done before it exists, what
 * unlocks once it does, and where the genuine gaps open up in between.
 *
 * The Chinese-specific content: documents from Chinese insurers generally do
 * not travel (already argued on /zh/car-insurance-portugal/, referenced not
 * repeated here); the container-shipping window is long and the goods need
 * cover that neither the old nor the new household policy provides; and
 * health cover has waiting periods, which means the timing question is
 * "before you need it", not "after you arrive".
 */
import { BREADCRUMB_ROOT } from './shared.mjs';

export const MOVING_PAGE = {
  slug: 'moving-to-portugal',
  url: '/zh/moving-to-portugal/',
  cluster: 'moving',
  title: '迁居葡萄牙：保险该按什么顺序安排 | Adler & Rochefort',
  description:
    '从中国搬到葡萄牙的保险时间表：出发前能办什么、NIF 之后才能办什么、医疗保险的等待期为什么要提前、搬家途中的财物、落地后的房屋与车辆安排，附实用清单。',
  keywords:
    '移居葡萄牙保险, 搬到葡萄牙, 葡萄牙保险 NIF, 葡萄牙落地安排, 葡萄牙医疗保险等待期, 葡萄牙搬家保险',
  eyebrow: '迁居指南',
  h1: '迁居葡萄牙：保险安排的先后顺序',
  standfirst:
    '在葡萄牙，几乎每一项保险都卡在同一道门上：纳税人号码（NIF）。想清楚哪些事能在出发前做、哪些只能落地后做，就不会在最需要保障的那几周里出现空档。',
  published: '2026-09-12T09:00:00+00:00',
  modified: '2026-09-12T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: '迁居葡萄牙' }],
  pullquote: '医疗保险的等待期，是唯一一件越早办越省事、越晚办越无解的事。',
  schemaType: 'Article',
  formHeading: '迁居前的保险咨询',
  formBranch: '',
  formSubject: '迁居葡萄牙的保险安排',
  formCta: '提交咨询',
  formIntro:
    '请说明预计到达的时间、目的地城市、同行人数，以及是否已经在看房或打算买车。',
  formPlaceholder:
    '例如：我们一家三口十一月搬到波尔图，先租房住一年，之后打算买房，落地后会买车。',
  sections: `
<section class="section plain" aria-labelledby="nif-zhe-dao-men">
  <div class="container narrow article-body">
    <h2 id="nif-zhe-dao-men">先理解那道门：NIF</h2>
    <p>NIF（<em>Número de Identificação Fiscal</em>）是葡萄牙的纳税人号码。它不是居留身份，与签证也不是一回事——它只是税务上的识别号码，但葡萄牙几乎所有合同关系都以它为前提：开银行账户、签租约、买房、买车、办水电、以及<strong>投保</strong>。</p>
    <p>对保险来说，这意味着一条很清晰的分界线：</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">NIF 前后可以安排的保险事项</caption>
        <thead>
          <tr><th scope="col">没有 NIF 时</th><th scope="col">有了 NIF 之后</th></tr>
        </thead>
        <tbody>
          <tr><td>可以咨询、可以比较方案、可以准备材料</td><td>可以正式出单</td></tr>
          <tr><td>旅行类的短期医疗保障（在原居地投保）</td><td>葡萄牙本地的私人医疗保险</td></tr>
          <tr><td>搬家运输的货物保险（通常由搬家公司安排）</td><td>房屋保险、汽车保险、责任保险</td></tr>
        </tbody>
      </table>
    </div>
    <p>所以合理的做法是：出发前把能准备的准备好，落地后第一周内把 NIF 办下来，然后按需要的顺序出单。NIF 的申请属于税务机关（<em>Autoridade Tributária</em>）的程序，非居民通常需要通过税务代表办理；具体要求请以主管机关的现行规定为准，本页只说明它对保险时间表的影响。</p>
  </div>
</section>

<section class="section tint" aria-labelledby="chufa-qian">
  <div class="container narrow article-body">
    <h2 id="chufa-qian">出发之前：四件事</h2>
    <p><strong>一、医疗保障的空档期。</strong>这是时间表上唯一真正紧的一环。到葡萄牙后需要先在卫生中心登记、取得使用者编号（<em>número de utente</em>）才能正常使用公立体系；而葡萄牙的私人医疗保险有等待期，签单当天并不等于保障即刻生效。两头相加，落地后的头一段时间可能没有可用的保障。</p>
    <p>常见的处理方式是：在出发前投保一份覆盖抵达后一段时间的国际或旅行医疗保障，作为过渡；同时把葡萄牙本地的私人医疗保险的咨询与核保流程提前启动，这样落地拿到 NIF 后可以尽快出单，让等待期尽早开始计算。等待期是按保单生效日起算的，越早开始越好——这一项没有任何补救办法，只能提前。</p>
    <p><strong>二、搬家途中的财物。</strong>从中国到葡萄牙的海运通常需要一到两个月。这段时间里，您的家具、电器、个人物品既不在国内的任何保单下，也还不在葡萄牙的房屋保险下（房屋保险覆盖的是房子里的财物，不是海上的集装箱）。运输保险通常由国际搬家公司提供，需要注意三点：是否按申报价值全额承保、是否要求逐件清单、以及“自行打包的箱子”是否被除外——很多运输保单只保搬家公司自己打包的物品。贵重物品（首饰、手表、重要文件）建议随身携带，不要装箱。</p>
    <p><strong>三、可以带走的文件。</strong>出险与理赔记录方面，如果您曾在欧盟国家投保过车辆，离开前向原保险公司索取无事故证明；如果只有中国保险公司的记录，实务上通常无法被葡萄牙保险公司采用（原因见<a href="/zh/car-insurance-portugal/">汽车保险</a>那一页），可以准备但不必寄望。真正有用的是：护照与身份文件、结婚与出生证明（家庭保单会用到）、驾照、以及如有既往病史的相关病历——后者用于如实完成健康问卷。</p>
    <p><strong>四、不要在出发前买葡萄牙的房屋或车辆保险。</strong>这两项都需要具体的标的信息（房产文件、车辆证件），在没有房子、没有车的阶段无法有效安排。可以做的是了解清楚需要什么、准备好资料。</p>
  </div>
</section>

<section class="section plain" aria-labelledby="dadao-zhihou">
  <div class="container narrow article-body">
    <h2 id="dadao-zhihou">落地之后：按这个顺序</h2>
    <ol class="process-steps">
      <li><div><strong>NIF。</strong><span>其他一切的前提。</span></div></li>
      <li><div><strong>银行账户。</strong><span>多数保险公司通过葡萄牙账户的直接扣款（<em>débito direto</em>）收取保费；是否必须是本地账户取决于保险公司，但有本地账户会让流程顺很多。</span></div></li>
      <li><div><strong>卫生中心登记。</strong><span>取得 <em>número de utente</em>，这是使用 SNS 公立体系的前提，通常需要居住地址证明。</span></div></li>
      <li><div><strong>私人医疗保险。</strong><span>拿到 NIF 后尽快出单，让等待期开始计算。同时确认所在城市的网络机构（详见<a href="/zh/health-insurance-portugal/">私人医疗保险</a>）。</span></div></li>
      <li><div><strong>租房的财物与责任保险。</strong><span>如果先租房，一份 <em>seguro de recheio</em> 覆盖自己的财物，并附带对房东与邻居的责任保障。租住公寓时尤其值得安排——漏水泡到楼下是葡萄牙最常见的责任事故。</span></div></li>
      <li><div><strong>汽车。</strong><span>买车与投保同步进行，保险从交付当天生效，之后完成过户登记。驾照状态请先按 IMT 的现行规定确认。</span></div></li>
      <li><div><strong>房屋保险。</strong><span>如果买房，保障必须在签署产权转让书（<em>escritura</em>）当天已经生效，有房贷时银行会作为受益人（详见<a href="/zh/buying-property-portugal/">在葡萄牙买房</a>）。</span></div></li>
      <li><div><strong>责任保险。</strong><span>如果在葡萄牙从事执业或经营活动，职业责任通常需要在开始接单前就安排好，有些行业是法定强制（详见<a href="/zh/liability-insurance-portugal/">民事责任保险</a>）。</span></div></li>
      <li><div><strong>半年后的复核。</strong><span>安顿下来之后，实际情况往往与计划时不同：住的地方变了、买了车、财物增加了、开始了新的业务。把几份保单一起复核一次，通常能发现一两处缺口或重复。</span></div></li>
    </ol>
  </div>
</section>

<section class="section tint" aria-labelledby="changjian-kongdang">
  <div class="container narrow article-body">
    <h2 id="changjian-kongdang">最容易出现空档的三个时刻</h2>
    <p><strong>落地后的头几周。</strong>公立体系还没登记、私人保险还在等待期、旅行保障已经到期。解决办法是让过渡性的医疗保障覆盖到本地保单等待期结束之后，而不是覆盖到落地当天。</p>
    <p><strong>集装箱在海上的那段时间。</strong>原居地的保单已经终止、葡萄牙的房屋保险还没有标的。解决办法是确认搬家公司的运输保险条款，并把贵重物品随身带。</p>
    <p><strong>买房交割日。</strong>卖方的保单在产权转移后不再保护您，而新保单如果安排在交割之后生效，中间就有一段真空。解决办法是把生效日定在 <em>escritura</em> 当天或之前一天，而不是“办完手续再说”。</p>
    <div class="callout">
      <span class="callout-label">一句提醒</span>
      保险的空档很少在发生时被察觉，通常是在需要用的时候才发现。以上三个时刻是我们在实务中反复遇到的，提前一周处理都比事后补救容易得多。
    </div>
  </div>
</section>

<section class="section plain" aria-labelledby="shiyong-qingdan">
  <div class="container narrow article-body">
    <h2 id="shiyong-qingdan">实用清单</h2>
    <p><strong>出发前</strong></p>
    <ul>
      <li>投保覆盖抵达后一段时间的过渡性医疗保障，期限延伸到本地保单等待期结束之后。</li>
      <li>确认搬家运输保险的承保方式：申报价值、逐件清单、自行打包的物品是否除外。</li>
      <li>贵重物品与重要文件随身携带，不装箱。</li>
      <li>如曾在欧盟国家投保车辆，索取无事故证明。</li>
      <li>整理护照、身份文件、结婚与出生证明、驾照、相关病历。</li>
      <li>启动葡萄牙私人医疗保险的咨询与核保准备，以便落地后尽快出单。</li>
    </ul>
    <p><strong>落地后的第一个月</strong></p>
    <ul>
      <li>办理 NIF。</li>
      <li>开立葡萄牙银行账户（用于保费扣款）。</li>
      <li>在居住地卫生中心登记，取得 <em>número de utente</em>。</li>
      <li>私人医疗保险出单，确认等待期的起算日与所在城市的网络机构。</li>
      <li>租房的话，安排财物与责任保险；确认租约中关于保险的约定。</li>
      <li>如需用车，确认驾照状态（按 IMT 现行规定），再安排买车与投保。</li>
    </ul>
    <p><strong>之后的半年内</strong></p>
    <ul>
      <li>买房时，把房屋保险的生效日定在交割当天或之前。</li>
      <li>开始执业或经营活动前，安排职业责任保险。</li>
      <li>财物大幅增加、装修完成、家庭成员变化后，更新对应保单的保额。</li>
      <li>把所有保单一起复核一次，检查缺口与重复。</li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="women-de-zuoyong">
  <div class="container narrow article-body">
    <h2 id="women-de-zuoyong">我们在这件事里做什么</h2>
    <p>迁居阶段最有用的服务不是出单，而是把顺序和时间点排清楚。我们可以在您还没到葡萄牙的时候就开始沟通：说明需要哪些资料、哪些事项必须等 NIF、哪些可以提前准备，以及在您的具体计划里哪几周可能出现保障空档。等到条件具备，再按顺序出单。</p>
    <p class="legal-note">NIF 申请、居留手续、驾照与车辆登记、以及移民相关事项由葡萄牙各主管机关规定，本页不构成这些方面的意见，请以主管机关或您的法律顾问的现行要求为准。服务语言为英语，书面进行。</p>
  </div>
</section>`,
  faqTitle: '迁居葡萄牙：常见问题',
  faq: [
    {
      q: '没有 NIF 可以先投保吗？',
      a: '<p>一般不行。葡萄牙保险公司通常需要 NIF 才能正式出单，多数还需要一个可送达的地址与可用于缴费的付款方式。可以在没有 NIF 的阶段做的是咨询、比较方案、准备材料，以及在原居地投保覆盖过渡期的旅行或国际医疗保障。</p>',
    },
    {
      q: '落地后到私人医疗保险生效之间，怎么过渡？',
      a: '<p>通常的做法是在出发前投保一份过渡性的医疗保障，期限不要只覆盖到落地当天，而要延伸到本地保单的等待期结束之后。同时把本地保单的咨询与核保提前启动，拿到 NIF 后尽快出单，让等待期尽早开始计算。等待期按保单生效日起算，没有提前补救的办法。</p>',
    },
    {
      q: '海运途中的家具和电器谁来保？',
      a: '<p>通常由国际搬家公司提供的运输保险承保，因为这段时间它既不在原居地的保单下，也还不在葡萄牙的房屋保险下。需要确认三件事：是否按申报价值承保、是否要求逐件清单、以及自行打包的箱子是否被除外——很多运输保单只保搬家公司自己打包的物品。首饰、手表、重要文件建议随身携带。</p>',
    },
    {
      q: '我在中国的保单能继续用吗？',
      a: '<p>一般不适合作为在葡萄牙常住的保障。国内的医疗与财产保险按国内的机构与结算体系设计，境外通常只在有限的旅行情形下提供保障。车辆的出险记录也通常无法被葡萄牙保险公司采用。实务上的做法是在葡萄牙重新安排本地保单，而把原有保单按原居地的实际需要处理。</p>',
    },
    {
      q: '需要先买房才能办房屋保险吗？',
      a: '<p>投保需要具体的房产信息（地址、面积、建成年份、产权文件），所以通常在确定标的之后才能出单。但时间点很关键：保障应当在签署产权转让书（<em>escritura</em>）当天已经生效，因此实务上是在交割前几天准备好，约定当天生效，而不是等交割结束后再办。</p>',
    },
    {
      q: '还没决定住哪个城市，医疗保险会受影响吗？',
      a: '<p>会。私人医疗保险的实际价值取决于所在城市的网络机构密度，里斯本与波尔图很密集，其他地区差别较大。如果居住地还没定，可以先说明可能的几个选项，我们会说明各自的网络覆盖情况；等地址确定后，也可以在续保时调整方案。</p>',
    },
  ],
  related: [
    { url: '/zh/health-insurance-portugal/', label: '私人医疗保险' },
    { url: '/zh/car-insurance-portugal/', label: '汽车保险' },
    { url: '/zh/buying-property-portugal/', label: '在葡萄牙买房：分阶段的保险安排' },
  ],
};
