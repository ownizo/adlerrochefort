/**
 * /zh/insurance-guide-spain/ — the Spain cluster's landing page (cluster es-guide).
 *
 * Search intent: 西班牙保险 / 西班牙华人保险 / 西班牙房屋保险怎么买 — a family
 * that owns, is buying, or lives in Spain and wants the map before the detail.
 *
 * Written for a Chinese reader in Spain rather than translated from the
 * Portugal guide. Two angles make it Spanish:
 *
 *   - Where the Chinese families actually are — Madrid, Barcelona and its
 *     belt, Valencia, and the Costa del Sol — and why the insurance questions
 *     differ between those four places (old Eixample buildings and strict
 *     tourist-let rules in Barcelona, DANA flash floods around Valencia,
 *     villas, pools and wildfire on the Costa del Sol).
 *   - The handful of structural points where Spain differs from Portugal
 *     (Consorcio de Compensación de Seguros, comunidad de propietarios, NIE,
 *     the non-lucrative visa health rules, compulsory dog and boat cover), so
 *     a family with homes in both countries does not carry one country's
 *     assumptions into the other.
 *
 * The language policy is the market's: pages in Chinese, work in English, in
 * writing; Spanish policies explained before signature.
 */
import { BREADCRUMB_ROOT, siblingNote } from './shared.mjs';

export const GUIDE_ES_PAGE = {
  slug: 'insurance-guide-spain',
  url: '/zh/insurance-guide-spain/',
  cluster: 'es-guide',
  title: '西班牙保险指南：高净值家庭的四类核心保障 | Adler & Rochefort',
  description:
    '为在西班牙拥有住宅的华人家庭而写：马德里、巴塞罗那、瓦伦西亚与太阳海岸的房屋、医疗、汽车与家庭责任保险，Consorcio 巨灾保障与西语保单的要点。',
  keywords:
    '西班牙保险, 西班牙华人保险, 西班牙保险指南, 西班牙房屋保险, 西班牙医疗保险, 西班牙汽车保险, 西班牙责任保险, 马德里保险, 巴塞罗那保险, 瓦伦西亚保险, 太阳海岸保险, Consorcio de Compensación de Seguros',
  eyebrow: '西班牙 · 保险指南',
  h1: '西班牙保险指南：先看清地图，再看条款',
  standfirst:
    '房屋、医疗、汽车与家庭责任——在西班牙，这四类保障各有与葡萄牙、也与国内不同的规则。本页说明西班牙市场如何运作、华人家庭集中的几个地区各自要注意什么，以及我们在西班牙如何为您工作。',
  published: '2026-09-27T09:00:00+00:00',
  modified: '2026-09-27T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: '西班牙保险指南' }],
  pullquote: '在西班牙，洪水和地震由 Consorcio 承担，但前提是您先有一份自己的保单——而且保额写对了。',
  schemaType: 'Article',
  formHeading: '说明您在西班牙的情况',
  formBranch: '',
  formSubject: '西班牙保险咨询（ZH）',
  formCta: '提交咨询',
  formIntro:
    '请说明资产在西班牙哪个地区、需要保障什么、从什么时候开始；如有现有的西班牙保单，也可以一并发给我们。我们会以英语书面回复：需要哪些资料、可以安排到什么程度，以及现有保障中值得先确认的地方。',
  formPlaceholder:
    '例如：我们在马贝拉有一栋带泳池的别墅，一年住四个月；在马德里有一套自住公寓；家中有字画与手表需要单独列明。',
  sections: `
<section class="section plain" aria-labelledby="huaren-jiating">
  <div class="container narrow article-body">${siblingNote({
    label: '在葡萄牙也有房产？',
    href: '/zh/insurance-guide-portugal/',
    text: '葡萄牙保险指南与常见问题',
  })}
    <h2 id="huaren-jiating">华人家庭在西班牙：四个地区，四组不同的问题</h2>
    <p>在西班牙生活或置业的华人家庭，主要集中在四个地方：马德里、巴塞罗那及其周边城市、瓦伦西亚，以及马拉加与马贝拉所在的太阳海岸（<em>Costa del Sol</em>）。保险产品在全国是一样的，但同一份保单在这四个地方要回答的问题并不相同。</p>
    <ul>
      <li><strong>马德里。</strong>以城市公寓为主，建筑由社区（<em>comunidad de propietarios</em>）统一投保；户内的装修、家具与贵重物品要靠自己的保单。内陆气候并不等于没有水患——近年的强降雨同样在马德里造成过地下室与车库进水。</li>
      <li><strong>巴塞罗那及周边。</strong>扩展区（<em>Eixample</em>）等老城区有大量上世纪初的建筑，管线老化带来的水渍是最常见的理赔。巴塞罗那对旅游短租的许可管理在全国最严格之一，出租用途必须先确认合法性，再谈保险。</li>
      <li><strong>瓦伦西亚。</strong>2024 年秋季的 DANA 强降雨让所有人看到了地中海沿岸突发洪水的破坏力。在这里，洪水保障如何运作、保额是否足够、车辆与地下车库如何处理，是房屋保险的核心问题。</li>
      <li><strong>太阳海岸。</strong>独立别墅、泳池、花园与较长的空置期是常态，许多业主并不常住。空置条款、泳池与访客的责任、山坡地带的山火，以及沿海的风暴与海浪冲击，需要逐项写进保单。</li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="yu-putaoya-butong">
  <div class="container narrow article-body">
    <h2 id="yu-putaoya-butong">西班牙与葡萄牙最重要的几处差别</h2>
    <p>许多客户在两国都有房产。两国同属欧盟、市场结构相近，但以下几点不能互相套用：</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">西班牙与葡萄牙保险市场的主要差别</caption>
        <thead>
          <tr><th scope="col">事项</th><th scope="col">西班牙</th><th scope="col">葡萄牙</th></tr>
        </thead>
        <tbody>
          <tr><td>洪水、地震等巨灾风险</td><td>由公共机构 <em>Consorcio de Compensación de Seguros</em> 承担，费用以附加费形式包含在财产保单中。</td><td>地震通常是可选保障，需单独确认、单独定价。</td></tr>
          <tr><td>公寓楼的建筑保险</td><td>由社区（<em>comunidad de propietarios</em>）统一投保建筑整体。</td><td>由 <em>condomínio</em> 统一投保公共部分，法律要求至少包含火灾。</td></tr>
          <tr><td>外国人的税号</td><td>NIE（<em>Número de Identidad de Extranjero</em>）。</td><td>NIF（<em>Número de Identificação Fiscal</em>）。</td></tr>
          <tr><td>保单语言</td><td>西班牙语。</td><td>葡萄牙语。</td></tr>
          <tr><td>犬只与船艇</td><td>潜在危险犬种与休闲船艇依法须投保责任险；狩猎者亦须投保。</td><td>规则不同，需按具体情况确认。</td></tr>
        </tbody>
      </table>
    </div>
    <p>对在两国都有房产的家庭，我们的做法是把住宅、贵重物品与家庭责任放在一起规划：避免两国保单之间出现空白，也避免同一件艺术品在两份保单里重复或都没有列明。</p>
  </div>
</section>

<section class="section plain" aria-labelledby="xibanya-si-lei">
  <div class="container narrow">
    <h2 id="xibanya-si-lei">西班牙：四类核心保障与一份买房指南</h2>
    <ul class="hub-list">
      <li class="hub-item">
        <h3><a href="/zh/home-insurance-spain/">西班牙高价值房屋保险</a></h3>
        <p>社区保险、自己的保单与 Consorcio 三层如何分工；重建保额、艺术品与收藏按约定价值承保、空置期与出租用途。</p>
      </li>
      <li class="hub-item">
        <h3><a href="/zh/health-insurance-spain/">西班牙私人医疗保险</a></h3>
        <p>公立体系与居留、非营利居留签证通常要求的“无共付、无等待期”保单、本地方案与家庭国际医疗的差别。</p>
      </li>
      <li class="hub-item">
        <h3><a href="/zh/car-insurance-spain/">西班牙汽车保险</a></h3>
        <p>强制险与全险、西班牙牌照与车辆登记、从国外带车、驾照问题、海外出险记录，以及较高价值与收藏车辆。</p>
      </li>
      <li class="hub-item">
        <h3><a href="/zh/liability-insurance-spain/">西班牙家庭责任保险</a></h3>
        <p>房屋保单附带的 <em>responsabilidad civil familiar</em> 够不够；泳池、家政人员、犬只、船艇与出租，以及百万级、全球有效的家庭责任。</p>
      </li>
      <li class="hub-item">
        <h3><a href="/zh/buying-property-spain/">在西班牙买房：各阶段的保险安排</a></h3>
        <p>定金合同（<em>arras</em>）、公证与产权登记、银行房贷与保险捆绑、保额按重建费用、从交割当天起保。</p>
      </li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="xiyu-shuyu">
  <div class="container narrow article-body">
    <h2 id="xiyu-shuyu">西班牙保单上会反复出现的几个词</h2>
    <p>西班牙的保单以西班牙语出具。认识以下几个词，您看自己的保单时就不再是完全被动的：</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">西班牙保险基本术语中西对照</caption>
        <thead>
          <tr><th scope="col">中文</th><th scope="col">西班牙语</th><th scope="col">为什么重要</th></tr>
        </thead>
        <tbody>
          <tr><td>保费</td><td><em>prima</em></td><td>通常按年计算，其中已包含 Consorcio 附加费与税费。</td></tr>
          <tr><td>保额</td><td><em>suma asegurada</em> / <em>capital</em></td><td>建筑（<em>continente</em>）与室内财物（<em>contenido</em>）分开写。</td></tr>
          <tr><td>自负额</td><td><em>franquicia</em></td><td>每次理赔自己承担的部分。</td></tr>
          <tr><td>除外责任</td><td><em>exclusiones</em></td><td>保单真正的边界写在这里。</td></tr>
          <tr><td>事故 / 理赔案</td><td><em>siniestro</em></td><td>法律规定的一般报案时限是知悉后七天内。</td></tr>
          <tr><td>一般条款 / 特别条款</td><td><em>condiciones generales</em> / <em>particulares</em></td><td>特别条款写的是您这份保单的具体内容，优先适用。</td></tr>
          <tr><td>等待期</td><td><em>carencia</em></td><td>医疗保险里最需要提前确认的一项。</td></tr>
          <tr><td>比例赔付</td><td><em>regla proporcional</em></td><td>保额不足时，局部损失也会按比例打折。</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section class="section plain" aria-labelledby="zai-xibanya-zenme-zuo">
  <div class="container narrow article-body">
    <h2 id="zai-xibanya-zenme-zuo">我们在西班牙如何工作</h2>
    <p>Adler &amp; Rochefort 是 Ownizo, Unipessoal Lda. 的商业名称，在葡萄牙保险与退休基金监理局（ASF）注册为保险代理人，注册号 425591790/3，在里斯本与拉各斯设有办公室。在西班牙，我们依据欧盟服务自由原则（<em>libre prestación de servicios</em>）开展业务：保单由在西班牙获准经营的保险公司出具，适用西班牙的保险法规。</p>
    <ol class="process-steps">
      <li><div><strong>先了解情况。</strong><span>资产在哪个自治区、价值多少、谁在使用、全年住多久、有哪些贵重物品与特殊风险；如有现有保单，请一并发给我们。</span></div></li>
      <li><div><strong>逐一核保。</strong><span>每处房产、每件列明的物品都按实际情况向保险公司申报，而不是套用标准方案。</span></div></li>
      <li><div><strong>书面建议。</strong><span>保单以西班牙语出具；签字之前，保额、自负额、除外责任与报案时限会以英语书面说清楚。</span></div></li>
      <li><div><strong>同一位顾问，直到理赔。</strong><span>从首次联系到报案、与保险公司或 Consorcio 沟通、盯住时限，始终由同一个人负责。</span></div></li>
    </ol>
    <p class="legal-note">本页说明的是西班牙市场通常的运作方式，不构成对某一份具体合同条款的确认。实际保障以保险公司出具的保单为准。服务语言为英语，书面进行。</p>
  </div>
</section>`,
  faqTitle: '西班牙保险：常见问题',
  faq: [
    {
      q: '你们在西班牙可以合法提供服务吗？',
      a: '<p>可以。我们在葡萄牙 ASF 注册为保险代理人（注册号 425591790/3），并依据欧盟服务自由原则在西班牙开展业务。您的保单由在西班牙获准经营的保险公司出具，适用西班牙法律。</p>',
    },
    {
      q: '你们提供中文服务吗？',
      a: '<p>不提供。网站的中文内容是为了让您先把事情看明白，但具体工作以英语书面进行：报价、条款说明、往来邮件与理赔沟通都是英语。西班牙的保单以西班牙语出具，我们会在您签字前用英语书面说明其中的关键部分。由懂英语的家人或顾问协助核对文件，完全没有问题。</p>',
    },
    {
      q: '在西班牙，洪水和地震需要单独购买吗？',
      a: '<p>通常不需要单独购买。洪水、地震、火山喷发、非典型气旋风暴、海浪冲击等巨灾风险，由公共机构 <em>Consorcio de Compensación de Seguros</em> 承担，费用以附加费形式包含在您的财产保单中。前提是您有一份有效的保单，而且赔付以这份保单的保额为基础——保额写低了，巨灾损失同样会按比例打折。</p>',
    },
    {
      q: '我在西班牙和葡萄牙都有房产，可以统一安排吗？',
      a: '<p>可以统一规划，但通常是两国各自的保单。我们会把两处住宅、贵重物品与家庭责任放在一起看：家庭责任可以安排为全球有效的一份保障，艺术品与收藏按存放地点逐项列明，避免两国之间出现空白或重复。</p>',
    },
    {
      q: '在西班牙投保需要哪些资料？',
      a: '<p>通常是 NIE（外国人身份号码）、身份证明、房产或车辆资料，以及可用于缴费的付款方式；多数保险公司使用西班牙银行账户扣款，但并非一律如此。房屋保险还需要面积、建成年份与建筑类型；医疗保险需要每位被保险人的年龄。完整清单我们会按您的情况以书面形式给出。</p>',
    },
    {
      q: '我不常住西班牙，也能投保吗？',
      a: '<p>可以。非居民业主在西班牙投保非常普遍，尤其是在太阳海岸与地中海沿岸。关键是如实申报实际使用方式：是第二居所、全年空置较久，还是用于出租。空置条款与出租用途是理赔争议最常见的两个来源。</p>',
    },
  ],
  related: [
    { url: '/zh/home-insurance-spain/', label: '西班牙高价值房屋保险' },
    { url: '/zh/buying-property-spain/', label: '在西班牙买房：各阶段的保险安排' },
    { url: '/zh/insurance-guide-portugal/', label: '葡萄牙保险指南与常见问题' },
  ],
};
