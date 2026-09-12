/**
 * /zh/car-insurance-portugal/
 *
 * Search intent: 葡萄牙汽车保险 — someone who has just bought, imported, or
 * is about to buy a car here, or who wants to know whether their driving
 * history counts for anything.
 *
 * Two things make this page Chinese rather than translated:
 *
 *   - The no-claims question. A European arriving from Sweden or the
 *     Netherlands can usually get a bonus/malus statement that a Portuguese
 *     insurer will read. A record from a Chinese insurer normally cannot be
 *     used the same way, so the page explains the consequence (starting near
 *     the base rate) instead of pretending the document solves it.
 *   - The licence question, which §5 forbids answering definitively. The page
 *     therefore does not state whether a Chinese licence can be exchanged; it
 *     states that this is an IMT question, and explains the insurance
 *     consequence of driving on a licence that is not valid here — which is
 *     the part that actually belongs on an insurance site.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';

export const MOTOR_PAGE = {
  slug: 'car-insurance-portugal',
  url: '/zh/car-insurance-portugal/',
  cluster: 'motor',
  title: '葡萄牙汽车保险：强制责任险与全险 | Adler & Rochefort',
  description:
    '葡萄牙汽车保险如何运作：强制第三者责任险、全险的实际范围、在葡萄牙买车与车辆进口、驾照问题、出险记录能否采用、理赔流程与所需文件。',
  keywords:
    '葡萄牙汽车保险, 葡萄牙车险, 葡萄牙强制责任险, 葡萄牙全险, 葡萄牙买车保险, 葡萄牙车辆进口保险, 葡萄牙驾照',
  eyebrow: '汽车保险',
  h1: '葡萄牙汽车保险：强制的部分与自选的部分',
  standfirst:
    '在葡萄牙，只有第三者责任险（<em>responsabilidade civil automóvel</em>）是法律强制的。其余的——车损、盗窃、玻璃、道路救援——都是自选项，而“全险”这个词在不同保险公司手里含义并不相同。',
  published: '2026-09-12T09:00:00+00:00',
  modified: '2026-09-12T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: '汽车保险' }],
  pullquote: '强制险保的是别人。保自己的车，是另一件需要单独决定的事。',
  schemaType: 'Article',
  formHeading: '汽车保险咨询',
  formBranch: 'ZH · Motor',
  formSubject: '葡萄牙汽车保险',
  formCta: '提交咨询',
  formIntro:
    '我们需要车辆信息（品牌、型号、年份）、目前的注册地，以及驾驶人的情况与出险记录。',
  formPlaceholder:
    '例如：2021 年宝马 X3，已挂葡萄牙牌，主驾驶人 41 岁，在国内有十年驾龄、无事故。',
  sections: `
<section class="section plain" aria-labelledby="qiangzhi-de-bufen">
  <div class="container narrow article-body">
    <h2 id="qiangzhi-de-bufen">强制的只有一项</h2>
    <p>葡萄牙法律要求所有在道路上行驶的机动车投保<strong>第三者民事责任险</strong>（<em>seguro de responsabilidade civil automóvel</em>）。它赔的是您给别人造成的损害：对方的人身伤害、对方的车辆与财产损失。它<strong>不赔您自己的车</strong>。</p>
    <p>强制险有法定的最低保额，并且额度很高——人身伤害部分的法定最低限额是数百万欧元级别。这是欧盟层面统一要求的结果，所以在这一项上，各家保险公司之间的差别不在保额，而在服务与价格。</p>
    <p>没有有效的强制险上路，在葡萄牙是严重违法行为：罚款、车辆可能被扣，事故中造成的损害要自己全额承担。车辆即使长期停放不开，只要仍在登记状态，一般也需要保持保险有效，或者办理正式的停驶/注销手续。</p>
  </div>
</section>

<section class="section tint" aria-labelledby="quanxian-shi-shenme">
  <div class="container narrow article-body">
    <h2 id="quanxian-shi-shenme">“全险”不是一个标准产品</h2>
    <p>中文里说的“全险”，在葡萄牙对应的是在强制险之上加买一组可选保障。不同保险公司的打包方式不同，所以两份都叫 <em>seguro de danos próprios</em> 的报价，实际内容可能差别很大。需要逐项确认的是这些：</p>
    <ul>
      <li><strong>车损（<em>danos próprios</em> / <em>choque, colisão e capotamento</em>）。</strong>碰撞、翻车造成自己车辆的损失。这是全险的核心，也是保费的主要来源。注意自负额（<em>franquia</em>）：常见的是车辆价值的某个百分比且设最低金额，小事故可能达不到理赔门槛。</li>
      <li><strong>盗窃（<em>furto ou roubo</em>）。</strong>整车被盗与车内固定设备被盗。有些方案要求防盗装置。</li>
      <li><strong>火灾与爆炸（<em>incêndio</em>）。</strong>通常与盗窃一起提供。</li>
      <li><strong>玻璃（<em>quebra isolada de vidros</em>）。</strong>前后风挡与车窗单独破损。这一项使用频率高、价格低，通常值得买——葡萄牙的碎石路面与高速路况让挡风玻璃损伤很常见。</li>
      <li><strong>自然事件。</strong>风暴、洪水、冰雹、落物。阿尔加维与里斯本地区的冬季暴雨会造成实际损失。</li>
      <li><strong>道路救援（<em>assistência em viagem</em>）。</strong>拖车、故障处理、代步车、在国外的援助。范围差别非常大：有些只在葡萄牙境内、有些覆盖欧洲、有些含代步车有些不含。</li>
      <li><strong>驾驶人意外（<em>ocupantes</em>）。</strong>对驾驶人与乘客的人身伤害给付，因为强制险不保有过错方自己。</li>
      <li><strong>法律保障（<em>proteção jurídica</em>）。</strong>事故后的法律费用与代理。</li>
    </ul>
    <div class="callout">
      <span class="callout-label">关于车损的估值方式</span>
      车损理赔通常按事故当时的市价（<em>valor venal</em> 或保单约定的价值表）计算，不是按您的购车价。车龄增加后，这个数字下降很快，所以对旧车来说，全险的性价比在某一年会明显转折——这个判断值得在续保时重新做一次，而不是年年照续。
    </div>
  </div>
</section>

<section class="section plain" aria-labelledby="mai-che">
  <div class="container narrow article-body">
    <h2 id="mai-che">在葡萄牙买车</h2>
    <p>买车的流程与保险是扣在一起的：车辆过户登记通常需要有效的保险，而保险需要车辆识别信息。实务上的顺序是：</p>
    <ol class="process-steps">
      <li><div><strong>确认车辆信息。</strong><span>行车证（<em>Documento Único Automóvel</em>，简称 DUA）上的车架号、排量、首次登记日期、目前的登记人。</span></div></li>
      <li><div><strong>确认没有未结清的负担。</strong><span>车辆上可能存在保留所有权登记（融资未结清）或税费欠缴，过户前应当核实。</span></div></li>
      <li><div><strong>投保。</strong><span>保险以您为投保人，从交付当天生效。日期不要留空档：卖方的保单在过户后不保护您。</span></div></li>
      <li><div><strong>办理过户登记。</strong><span>在登记机构（<em>IRN</em> / <em>Conservatória do Registo Automóvel</em>）完成所有权变更。</span></div></li>
      <li><div><strong>确认年检状态。</strong><span>车辆定期检验（<em>inspeção periódica</em>，即 IPO）的有效期，逾期会影响上路与理赔中的争议。</span></div></li>
    </ol>
    <p>从经销商买新车时，对方通常会提供一份保险方案。与房贷保险的情形类似：可以用，但值得比较范围，尤其是自负额、救援覆盖区域和代步车条款这三项。</p>
  </div>
</section>

<section class="section tint" aria-labelledby="jinkou-cheliang">
  <div class="container narrow article-body">
    <h2 id="jinkou-cheliang">从国外带车进来</h2>
    <p>把车从中国运到葡萄牙并不常见——关税、认证与右左舵之外的技术标准差异让它在经济上通常不成立。更常见的情况是从欧盟其他国家（例如客户先在德国或荷兰居住过）把车带过来。</p>
    <p>无论来源地，保险上的时间线是这样的：</p>
    <ul>
      <li><strong>过渡阶段。</strong>车辆仍挂外国牌照时，保险通常仍需以原注册国的方式安排，或使用短期过渡方案。葡萄牙保险公司一般无法为尚未在葡萄牙登记的车辆出具常规保单，具体取决于保险公司。</li>
      <li><strong>完成登记之后。</strong>取得葡萄牙牌照与新的 DUA，即可投保葡萄牙的常规保单。这时需要提供新的登记文件。</li>
      <li><strong>车辆价值的认定。</strong>进口车在葡萄牙市场的参考价值可能与原注册国不同，这会影响车损保障的保额，值得事先确认。</li>
    </ul>
    <p class="legal-note">车辆进口、税费（ISV）与登记的规定属于海关与 IMT 的职权范围，会随时间变化。请以主管机关的现行规定为准；本页只说明其中与保险相关的部分。</p>
  </div>
</section>

<section class="section plain" aria-labelledby="jiazhao">
  <div class="container narrow article-body">
    <h2 id="jiazhao">关于驾照，我们只说与保险有关的部分</h2>
    <p>中国驾照在葡萄牙能否直接使用、能否换领葡萄牙驾照、需要什么条件——这属于葡萄牙道路交通主管机关 <strong>IMT</strong>（<em>Instituto da Mobilidade e dos Transportes</em>）的规定范围。规定会变化，也取决于您的居留状态、在葡萄牙居住的时间、驾照的签发情况以及双边安排。<strong>我们不对此作出确认，也不提供换照方面的意见。</strong>请以 IMT 的现行规定，或您的法律顾问的意见为准。</p>
    <p>属于保险范围、并且确实重要的是后果这一面：</p>
    <div class="callout">
      <span class="callout-label">为什么驾照状态会影响理赔</span>
      葡萄牙的汽车保单通常要求驾驶人持有在葡萄牙有效的驾驶资格。如果事故发生时驾驶人不具备有效资格，强制险对第三方的赔付一般仍会进行（法律保护受害方），但保险公司可以就赔付金额向驾驶人追偿，同时车损、盗窃等自身损失的保障可能不成立。也就是说，驾照问题不会让别人得不到赔偿，但会让您自己承担这笔钱。
    </div>
    <p>所以实务上的建议很简单：先把驾照状态按 IMT 的规定确认清楚，再决定买车与投保的时间。投保时如实填写驾驶人信息与驾照签发情况，不要为了顺利出单而含糊处理。</p>
  </div>
</section>

<section class="section tint" aria-labelledby="chuxian-jilu">
  <div class="container narrow article-body">
    <h2 id="chuxian-jilu">出险记录：能不能带过来</h2>
    <p>葡萄牙的车险定价与欧洲多数市场一样，很大程度上取决于无事故年限（<em>bonus/malus</em>）。新客户如果能提供原保险公司出具的无事故证明（<em>declaração de sinistralidade</em>），通常可以获得相应的折扣等级。</p>
    <p>这里有一个对中国客户不太乐观但必须说清的现实：<strong>中国保险公司出具的出险记录，葡萄牙保险公司通常无法采用。</strong>原因是格式与评级体系不对应、无法核验、也不在欧洲保险公司互认的范围内。这不是绝对的——是否接受取决于保险公司，个别公司对翻译并公证的文件可能给予一定考虑——但合理的预期是：<strong>按接近基础费率起算，通过在葡萄牙的无事故年限逐年积累折扣。</strong></p>
    <p>几点实务上的补充：</p>
    <ul>
      <li>如果您曾在欧盟其他国家投保，那份记录通常是可用的，值得在离开前索取。</li>
      <li>驾龄本身（而非折扣等级）通常仍会被考虑，所以如实填写领证年份是有意义的。</li>
      <li>把家庭中驾龄较长的一方登记为主驾驶人，可能影响定价，但必须与实际使用情况相符——申报不实在理赔时会成为问题。</li>
      <li>第一年保费偏高是常态。第二、三年在没有出险的情况下通常会明显下降，续保时值得重新比较。</li>
    </ul>
  </div>
</section>

<section class="section plain" aria-labelledby="lipei-liucheng">
  <div class="container narrow article-body">
    <h2 id="lipei-liucheng">出了事故怎么办</h2>
    <ol class="process-steps">
      <li><div><strong>现场安全与记录。</strong><span>放置三角警示牌、穿反光背心（葡萄牙法律要求车内常备）、拍照记录现场与双方车辆、记下对方车牌与保险公司。</span></div></li>
      <li><div><strong>填写友好事故声明书（<em>Declaração Amigável de Acidente Automóvel</em>）。</strong><span>这是欧洲通用的标准表格，双方共同填写并签字。它不是认责书，而是事实记录——但它填得是否清楚，会直接影响责任划分。车内常备一份。</span></div></li>
      <li><div><strong>涉及人员受伤或有争议时报警。</strong><span>由 GNR 或 PSP 出具记录。</span></div></li>
      <li><div><strong>在时限内报案。</strong><span>葡萄牙保单通常要求在事故发生后很短的时间内通知保险公司（常见为八天，具体以保单为准）。</span></div></li>
      <li><div><strong>查勘与维修。</strong><span>由保险公司指定或认可的查勘人员评估，之后确定维修方案或按全损处理。</span></div></li>
    </ol>
    <p>我们在这个环节的作用是对接：协助报案、说明表格怎么填、跟进查勘与定损、在责任划分或赔付金额有争议时与保险公司沟通。</p>
  </div>
</section>

<section class="section tint" aria-labelledby="women-de-zuoyong">
  <div class="container narrow article-body">
    <h2 id="women-de-zuoyong">我们在这件事里做什么</h2>
    <ul>
      <li><strong>投保前。</strong>按车辆与使用情况确认需要哪些可选保障、说明自负额的实际影响、确认救援的覆盖范围，并在签字前用英语书面说明保额、自负额与主要除外责任。</li>
      <li><strong>保单期间。</strong>换车、增加驾驶人、车辆用途变化（例如用于营运或网约车，这通常需要不同的保单）、续保时按无事故年限重新议价。</li>
      <li><strong>理赔时。</strong>报案、材料准备、与查勘人员和保险公司沟通、盯住时限。</li>
    </ul>
    <p class="legal-note">具体保障、自负额与除外责任取决于保险公司与所选方案，并以保单文件为准。驾照、车辆登记与进口相关规定由主管机关制定，本页不构成这方面的意见。服务语言为英语，书面进行。</p>
  </div>
</section>`,
  faqTitle: '葡萄牙汽车保险：常见问题',
  faq: [
    {
      q: '在葡萄牙，汽车保险是强制的吗？',
      a: '<p>第三者民事责任险是强制的，所有上路的机动车都必须投保。它赔的是您对他人造成的人身伤害与财产损失，不赔您自己的车。车损、盗窃、玻璃、道路救援都属于自选保障。车辆即使长期停放，只要仍在登记状态，一般也需要保持保险有效或办理正式的停驶手续。</p>',
    },
    {
      q: '我在中国的无事故记录，在葡萄牙有用吗？',
      a: '<p>通常无法直接采用。中国保险公司出具的记录在格式与评级体系上与欧洲的 bonus/malus 不对应，也难以核验，是否接受完全取决于保险公司。合理的预期是按接近基础费率起算，再通过在葡萄牙的无事故年限逐年积累折扣。如果您曾在欧盟其他国家投保，那份记录通常是可用的，离开前值得索取。</p>',
    },
    {
      q: '我可以用中国驾照在葡萄牙开车吗？',
      a: '<p>这属于葡萄牙道路交通主管机关 IMT 的规定范围，取决于您的居留状态、在葡萄牙居住的时间与现行规则，而且规则会变化，我们不对此作出确认。与保险相关的部分是后果：如果事故发生时驾驶人不具备在葡萄牙有效的驾驶资格，强制险对第三方的赔付一般仍会进行，但保险公司可以向驾驶人追偿，而车损等自身损失的保障可能不成立。因此建议先按 IMT 的现行规定确认驾照状态，再决定买车与投保的时间。</p>',
    },
    {
      q: '“全险”到底包含什么？',
      a: '<p>葡萄牙没有一个叫“全险”的标准产品。中文里说的全险，对应的是在强制险之上加买一组可选保障：车损、盗窃与火灾、玻璃、自然事件、道路救援、驾乘人员意外、法律保障。不同保险公司的打包方式不同，所以两份名称相同的报价可能内容差别很大，必须逐项对照。</p>',
    },
    {
      q: '车损理赔按什么价值计算？',
      a: '<p>通常按事故当时的市场价值，或保单约定的价值表，而不是您的购车价。车龄增加后这个数字下降较快，所以对旧车来说，某一年之后全险的性价比会明显下降。这个判断建议在每次续保时重新做一次。</p>',
    },
    {
      q: '刚到葡萄牙、还没有 NIF，可以投保吗？',
      a: '<p>通常需要先有 NIF（葡萄牙纳税人号码）。多数保险公司还需要一个可送达的地址与可用于缴费的付款方式。由于车辆过户登记通常也需要有效保险，实务上的顺序是：先办 NIF，再买车并同步投保，然后完成登记。</p>',
    },
    {
      q: '把车用于网约车或营运，保单一样吗？',
      a: '<p>不一样。载客营运（包括平台接单）属于不同的用途，通常需要专门的保单；用私家车用途的保单从事营运活动，是理赔被拒的常见原因。如果有这类计划，请在投保时说明。</p>',
    },
  ],
  related: [
    { url: '/zh/moving-to-portugal/', label: '迁居葡萄牙：保险安排的顺序' },
    { url: '/zh/insurance-guide-portugal/', label: '葡萄牙保险指南与常见问题' },
  ],
};
