/**
 * /zh/liability-insurance-portugal/
 *
 * Search intent: 葡萄牙责任保险 / 葡萄牙职业责任险 — a resident who has been
 * told a policy "includes liability" and does not know what that means, or a
 * consultant, therapist or small-business owner who has been asked for proof
 * of professional cover.
 *
 * This is the page that most needs writing from scratch rather than
 * translating. Personal civil liability barely exists as a standalone
 * consumer product in China: 第三者责任 is something a reader knows from car
 * insurance, and 雇主责任 from work, but the idea that private life generates
 * an insurable legal exposure is genuinely new. So the page builds
 * Responsabilidade Civil from the ground up — what it is, what triggers it,
 * what it is not — before it gets anywhere near products.
 *
 * §6 forbids implying one generic policy covers every profession. The
 * professional section is therefore organised by activity, and says plainly
 * that the wording follows the activity and that some activities are not
 * accepted at all by some insurers.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';

export const LIABILITY_PAGE = {
  slug: 'liability-insurance-portugal',
  url: '/zh/liability-insurance-portugal/',
  cluster: 'liability',
  title: '葡萄牙民事责任保险：个人与职业责任 | Adler & Rochefort',
  description:
    '葡萄牙的 Responsabilidade Civil 是什么：个人民事责任、职业责任、第三方人身伤害与财产损失、保额与除外责任、索赔提出制条款，以及为什么不存在通用于所有行业的一份责任险。',
  keywords:
    '葡萄牙责任保险, 葡萄牙民事责任保险, Responsabilidade Civil, 葡萄牙职业责任险, 葡萄牙个人责任险, 葡萄牙第三者责任',
  eyebrow: '民事责任',
  h1: '葡萄牙民事责任保险：赔别人的那一块',
  standfirst:
    '葡萄牙民事责任保险（<em>Responsabilidade Civil</em>）处理的是您依法应当对他人承担的赔偿责任——从楼上漏水泡了邻居，到一份专业意见让客户产生损失。它与国内的车险第三者责任同源，但适用范围广得多。',
  published: '2026-09-12T09:00:00+00:00',
  modified: '2026-09-12T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: '民事责任保险' }],
  pullquote: '不存在一份适用于所有职业的责任险。条款是跟着活动写的。',
  schemaType: 'Article',
  // Especificação v2, Parte B — this page's dedicated wizard replaces the
  // shared zh-inquiry branch-select form. Same faturacao_anual field as
  // PT/EN/DE/NL RC Profissional, and the same 48-72h SLA.
  wizard: {
    idPrefix: 'zh-rcp',
    formName: 'zh-liability-insurance-wizard',
    ramo: 'Liability',
    heading: '申请责任保险报价',
    intro: '请填写基本信息。我们将在48至72个工作小时内回复。',
    stepLabel2: '经营活动',
    submitLabel: '提交申请',
    microNote:
      '我们将在48至72个工作小时内回复。您的信息仅用于准备本报价，并根据《通用数据保护条例》（GDPR）处理——请参阅<a href="/en/privacy-policy" hreflang="en">隐私政策</a>。',
    fieldsHtml: `        <div class="contact-form-field"><label for="zh-rcp-faturacao">年营业额 *</label><input type="number" id="zh-rcp-faturacao" name="faturacao_anual" placeholder="例如：85000" required></div>
        <p class="wizard-helper">经营活动类型、期望的保险金额，以及保单是否为合同或行业协会所要求，我们将在后续联系中进一步了解。</p>`,
  },
  sections: `
<section class="section plain" aria-labelledby="shi-shenme">
  <div class="container narrow article-body">
    <h2 id="shi-shenme">先说清楚它是什么</h2>
    <p>“民事责任”这个词对中国读者并不陌生，但熟悉的语境通常只有一个：车险里的第三者责任。在葡萄牙，同一个法律概念的适用面要宽得多，而且它是独立成产品的。</p>
    <p><em>Responsabilidade Civil</em> 指的是：当您的行为或疏忽造成他人的人身伤害或财产损失，并且依法应当赔偿时，由保险公司在保额范围内代为赔付，并承担相应的法律费用。三个要素是叠加的——<strong>有损害、可归责于您、法律上应当赔偿</strong>。三者缺一，责任险就不介入。</p>
    <p>这也解释了它与其他保险的分界：</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">民事责任保险与相邻保障的区别</caption>
        <thead>
          <tr><th scope="col">发生的事</th><th scope="col">由哪一部分处理</th></tr>
        </thead>
        <tbody>
          <tr><td>您家水管爆裂，泡坏了自己的地板与家具</td><td>房屋保险的建筑与室内财物部分</td></tr>
          <tr><td>同一次漏水泡坏了楼下邻居的天花板</td><td>民事责任</td></tr>
          <tr><td>您自己在家里摔伤</td><td>医疗保险或个人意外保险</td></tr>
          <tr><td>来家里的客人被您的狗咬伤</td><td>民事责任</td></tr>
          <tr><td>您给客户的方案出错，客户因此损失一笔钱</td><td>职业责任</td></tr>
          <tr><td>您的电脑被偷</td><td>室内财物或企业财产保险</td></tr>
        </tbody>
      </table>
    </div>
    <p>可以这样记：其他保险赔的是<strong>您自己的损失</strong>，责任险赔的是<strong>别人向您索赔的金额</strong>。</p>
  </div>
</section>

<section class="section tint" aria-labelledby="geren-zeren">
  <div class="container narrow article-body">
    <h2 id="geren-zeren">个人与家庭的民事责任</h2>
    <p>在葡萄牙，个人责任保障最常见的形式是附加在房屋保险里的 <em>responsabilidade civil</em> 条款。它通常覆盖房产的所有权与使用带来的责任，以及居住在该房产的家庭成员的日常行为。</p>
    <p>需要确认的是三件事，因为各家保险公司的写法差别很大：</p>
    <ul>
      <li><strong>保额。</strong>有些方案的责任额度只有几万欧元。一次涉及人身伤害的索赔可以远超这个数字——第三方的医疗费、收入损失、长期照护都可能计入。</li>
      <li><strong>范围只限邻居，还是覆盖更广的第三方。</strong>有一类写法把责任限定为“对同一建筑内其他单元的损害”，也就是只处理漏水泡邻居这一类。孩子在学校弄坏别人的东西、家里的狗在公园咬人、骑自行车撞到行人，这些是否在内，必须看条款。</li>
      <li><strong>家庭成员的定义。</strong>通常指同住的配偶与未成年子女。成年子女、家中的长辈、家政人员是否包含，各家不同。</li>
    </ul>
    <p>对于租房居住的客户，情形略有不同：责任保障通常来自租客的财物保险（<em>seguro de recheio</em>）附带的责任条款，覆盖对房东的房屋以及对邻居的损害。这是在葡萄牙租房时值得安排的一项，尤其是租住公寓。</p>
    <div class="callout">
      <span class="callout-label">一个常见的实际场景</span>
      公寓里洗衣机进水管接头老化，深夜漏水，渗到楼下两户。自己家的地板由房屋保险处理；楼下两户的天花板、墙面、家具由责任部分处理。如果责任额度只有两万欧元、而两户的修复加上邻居的临时住宿超过这个数字，差额由您承担。这类事故在葡萄牙非常常见，不是极端假设。
    </div>
  </div>
</section>

<section class="section plain" aria-labelledby="zhiye-zeren">
  <div class="container narrow article-body">
    <h2 id="zhiye-zeren">职业责任：按活动定，不存在通用版本</h2>
    <p>职业责任保险（<em>Responsabilidade Civil Profissional</em>）保障的是您在提供专业服务过程中的过失、错误或疏漏给客户或第三方造成的损失。在葡萄牙，某些受监管的职业依法必须投保（例如律师、建筑师、部分医疗执业者），另一些则由客户或合作方在合同中要求。</p>
    <p><strong>这里最重要的一句话是：不存在一份适用于所有职业的责任险。</strong>保单的承保范围是按具体活动描述来写的，保单上写着什么活动，就保什么活动。同样重要的是，某些活动有的保险公司根本不承保，或者只在附加严格条件的前提下承保。以下按活动类型说明差异所在：</p>
    <ul>
      <li><strong>顾问与技术服务（IT、管理、工程、设计、财务咨询）。</strong>核心风险是建议或交付成果导致客户的经济损失。关键条款：是否包含纯经济损失（<em>danos patrimoniais puros</em>）——很多通用责任险只保人身伤害与实体财产损失，把经济损失排除在外，而这恰恰是顾问最主要的风险。此外要看数据与保密相关的责任、以及分包与第三方产品的责任划分。</li>
      <li><strong>理疗、康复与身体接触类执业（物理治疗、按摩、整脊、针灸）。</strong>核心风险是对客户的人身伤害。保险公司会非常在意：具体使用哪些手法、有没有相应的资质与注册、是否涉及侵入性操作。同一间工作室里做推拿与做针灸，承保条件可能完全不同——针灸涉及穿刺，多数保险公司把它作为单独的风险来评估，有的不承保。</li>
      <li><strong>养生、美容与健康相关服务（美容、纹绣、营养建议、健身指导）。</strong>这一类的边界最需要说清楚。做法与所宣称的效果直接影响承保：提供一般性的营养或健身建议，与作出接近医疗的诊断或治疗承诺，是两件不同的事，后者通常不在承保范围内，或需要执业资质。</li>
      <li><strong>服务与手工行业（装修、维修、安装、清洁、园艺）。</strong>核心风险是在客户场所造成的财产损害，以及施工成果的缺陷。要注意两项区分：对施工过程中造成的其他财产的损害通常可保；对自己施工成果本身的缺陷（返工费用）通常除外。使用高温作业、拆改水电、上屋面作业，都可能有单独条件。</li>
      <li><strong>公司与经营场所（<em>Responsabilidade Civil de Exploração</em>）。</strong>覆盖经营活动与场所给第三方造成的损害：客户在店内滑倒、货物损坏、场所设施造成的伤害。这与职业责任是两块不同的保障，很多小企业主以为买了一块就等于买了两块。</li>
      <li><strong>房东责任。</strong>出租房产给他人使用，会产生对租客与访客的责任。自住条款的房屋保单不覆盖出租用途的责任，短租（<em>alojamento local</em>）尤其需要专门安排。</li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="tiaokuan-yaodian">
  <div class="container narrow article-body">
    <h2 id="tiaokuan-yaodian">条款里必须看懂的几项</h2>
    <p><strong>保额与限额结构（<em>capital e sublimites</em>）。</strong>责任险通常有两层限额：单次索赔上限，以及保单年度内的累计上限。有些方案还对特定风险另设分项上限。只看“保额 50 万欧元”是不够的，要看它是单次的还是年度累计的。</p>
    <p><strong>自负额（<em>franquia</em>）。</strong>职业责任险的自负额通常不低，而且可能按每次索赔适用。这会影响小额索赔是否值得申报。</p>
    <p><strong>索赔提出制（<em>claims made</em>）。</strong>这是职业责任险里最容易被忽略的机制，也是与房屋、车险最不一样的地方。多数职业责任保单按“索赔提出”承保：<strong>只有在保单有效期内被正式提出的索赔才受保障</strong>，而不是看事情发生在哪一年。这带来两个实际问题：</p>
    <ul>
      <li><strong>追溯期（<em>retroatividade</em>）。</strong>保单是否覆盖投保之前已发生但尚未被索赔的行为？追溯期的长短需要明确约定。第一次投保时如果没有追溯期，那么此前几年的工作等于没有保障。</li>
      <li><strong>停业后的延长期。</strong>如果结束执业、退休或离开葡萄牙，保单到期后停止承保，而客户可能在之后几年才提出索赔。是否需要安排延长申报期，取决于行业与合同责任期限。</li>
    </ul>
    <p><strong>常见的除外责任。</strong>故意行为与明知的违法行为；罚款与行政处罚；合同约定的违约金；自己工作成果的返工费用；在保单约定的活动范围之外从事的业务；未取得必要资质的执业；在保单约定地域范围之外发生的索赔。</p>
    <p><strong>地域与司法管辖范围。</strong>如果客户在中国、德国或美国，而保单的管辖范围只写葡萄牙，那么在境外被提出的索赔可能不在保障范围内。这一项对跨境服务的顾问尤其关键，必须在投保时说明客户的实际所在地。</p>
    <p><strong>法律费用与抗辩（<em>defesa jurídica</em>）。</strong>责任险通常包含为您抗辩的费用，有时在保额之内、有时在保额之外，各家写法不同。在索赔金额有争议的案件里，这部分成本可能占很大比重。</p>
  </div>
</section>

<section class="section plain" aria-labelledby="ruhe-tou">
  <div class="container narrow article-body">
    <h2 id="ruhe-tou">投保时保险公司会问什么</h2>
    <p>职业责任的报价不是按“行业”给的，而是按您具体做什么给的。通常需要提供：</p>
    <ol class="process-steps">
      <li><div><strong>活动的具体描述。</strong><span>越具体越好。“咨询”不够，“为制造业客户做 ERP 系统选型与实施管理，不承担编程开发”才是可以写进保单的描述。</span></div></li>
      <li><div><strong>资质与注册情况。</strong><span>相关的执业资格、专业协会注册、在葡萄牙的经营登记（<em>atividade</em> 的分类）。</span></div></li>
      <li><div><strong>年营业额与客户结构。</strong><span>营业额是主要定价因素之一；客户所在国家决定地域范围。</span></div></li>
      <li><div><strong>单笔合同的规模。</strong><span>影响单次索赔上限的选择。</span></div></li>
      <li><div><strong>过往索赔情况。</strong><span>需要如实申报，包括已发生但尚未被索赔的情形。</span></div></li>
      <li><div><strong>是否有分包或团队成员。</strong><span>决定谁被列为被保险人。</span></div></li>
    </ol>
    <p>如实且具体地描述活动，是这类保险里最重要的一步。描述过窄，实际做的业务可能落在保障之外；描述含糊，理赔时保险公司有空间主张该活动未被承保。</p>
  </div>
</section>

<section class="section tint" aria-labelledby="women-de-zuoyong">
  <div class="container narrow article-body">
    <h2 id="women-de-zuoyong">我们在这件事里做什么</h2>
    <ul>
      <li><strong>投保前。</strong>区分个人责任、经营责任与职业责任三块分别需要什么；把活动描述写清楚；确认地域范围、纯经济损失、追溯期与自负额；在签字前用英语书面说明保额结构与主要除外责任。</li>
      <li><strong>保单期间。</strong>业务范围变化、新增客户所在国家、营业额变动、团队扩充——这些都需要更新保单，否则新增的部分可能不在保障内。</li>
      <li><strong>被索赔时。</strong>协助按时通知保险公司（责任险对通知时限要求严格）、整理事实与文件、对接保险公司指定的法律程序。</li>
    </ul>
    <p class="legal-note">是否属于依法强制投保的职业、以及具体保障范围，取决于适用法规、保险公司与所选方案，并以保单文件为准。本页为一般性说明，不构成法律意见。服务语言为英语，书面进行。</p>
  </div>
</section>`,
  faqTitle: '葡萄牙民事责任保险：常见问题',
  faq: [
    {
      q: 'Responsabilidade Civil 到底是什么？',
      a: '<p>它是民事责任保险：当您的行为或疏忽造成他人的人身伤害或财产损失、并且依法应当赔偿时，由保险公司在保额范围内代为赔付，并承担相应的法律费用。国内读者最熟悉的同类概念是车险里的第三者责任，只是在葡萄牙这个概念的适用面广得多，并且独立成产品——覆盖日常生活、房产持有与使用、以及执业活动。</p>',
    },
    {
      q: '我的房屋保险里已经有责任保障，够吗？',
      a: '<p>要看两项。一是额度：有些方案只有几万欧元，而一次涉及人身伤害的索赔可能远超这个数字。二是范围：有一类写法把责任限定为对同一建筑内其他单元的损害，也就是只处理漏水泡邻居这类情形，而孩子在外面造成的损坏、宠物伤人、骑车撞到行人是否在内，要看条款。这两项都需要在保单上确认，而不是假设。</p>',
    },
    {
      q: '一份责任险能覆盖我所有的业务活动吗？',
      a: '<p>不能。职业责任保单是按具体活动描述承保的——保单上写了什么活动就保什么活动。同一位从业者增加了新的服务类型，通常需要更新保单。此外，某些活动有的保险公司根本不承保，或只在附加条件的前提下承保，所以也不存在一份通用于所有职业的责任险。</p>',
    },
    {
      q: '什么是“索赔提出制”，为什么重要？',
      a: '<p>多数职业责任保单按 <em>claims made</em>（索赔提出制）承保：只有在保单有效期内被正式提出的索赔才受保障，而不看事情发生在哪一年。因此需要注意两点：追溯期决定保单是否覆盖投保之前的工作；结束执业后，客户仍可能在之后几年提出索赔，这时可能需要安排延长申报期。</p>',
    },
    {
      q: '我的客户在中国，保单管用吗？',
      a: '<p>取决于保单的地域与司法管辖范围。如果保单只写葡萄牙或欧盟，而索赔在中国或其他地区被提出，这类索赔可能不在保障范围内。跨境提供服务时，必须在投保时说明客户实际所在的国家，并把相应的地域范围写进保单。</p>',
    },
    {
      q: '个人责任险在葡萄牙常见吗？',
      a: '<p>很常见，只是形式与国内不同：它通常作为房屋保险（业主）或财物保险（租客）的一个条款存在，而不是一份单独购买的产品。对于有孩子、养宠物、或住在公寓楼里的家庭，它是日常最有可能真正用到的一块保障。</p>',
    },
    {
      q: '纯经济损失是什么意思？为什么要专门确认？',
      a: '<p>纯经济损失（<em>danos patrimoniais puros</em>）指的是没有伴随人身伤害或实体财产损坏的金钱损失，例如因为一份错误的建议导致客户多付了一笔税、或错过了一个时限。很多通用责任险只保人身伤害与实体财产损失，把纯经济损失排除在外——而这恰恰是顾问类职业最主要的风险，所以必须逐字确认是否包含。</p>',
    },
  ],
  related: [
    { url: '/zh/home-insurance-portugal/', label: '房屋与财产保险' },
    { url: '/zh/insurance-guide-portugal/', label: '葡萄牙保险指南与常见问题' },
  ],
};
