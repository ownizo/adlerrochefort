/**
 * /zh/health-insurance-spain/ (cluster es-health)
 *
 * Search intent: 西班牙医疗保险 / 西班牙非营利居留 医疗保险 / 西班牙私人医保 —
 * a family preparing a residence application, or already living in Spain,
 * who needs to know what the public system gives them and what a private
 * policy must contain.
 *
 * Written for a Chinese family rather than translated. The non-lucrative
 * residence visa is the practical reason most readers arrive here, so the
 * requirements consulates generally state (insurer authorised in Spain, cover
 * comparable to the public system, no co-payments, no waiting periods) are
 * set out plainly — and, as on the Portugal page, we say we do not confirm
 * visa acceptance: that belongs to the consulate. S1/EHIC is covered briefly
 * and honestly: it concerns EU pensioners, which most Chinese passport
 * holders are not.
 *
 * No clinical questions anywhere near the form (Especificação v2, A1).
 */
import { BREADCRUMB_ES, siblingNote } from './shared.mjs';

export const HEALTH_ES_PAGE = {
  slug: 'health-insurance-spain',
  url: '/zh/health-insurance-spain/',
  cluster: 'es-health',
  title: '西班牙私人医疗保险：居留要求与家庭国际医疗 | Adler & Rochefort',
  description:
    '西班牙公立医疗与居留的关系、非营利居留签证通常要求的无共付无等待期保单、本地方案与家庭国际医疗的差别，以及既往症与健康核保。',
  keywords:
    '西班牙医疗保险, 西班牙私人医疗保险, 西班牙非营利居留 医疗保险, seguro médico sin copagos, 西班牙签证医疗保险, 西班牙国际医疗保险, 西班牙家庭医疗保险, 西班牙公立医疗',
  eyebrow: '西班牙 · 私人医疗',
  h1: '西班牙私人医疗保险：从居留要求到全家的国际医疗',
  standfirst:
    '西班牙的公立医疗水平很高，但能否使用、何时能用，取决于您的居留与缴费身份。私人医疗保险在这里常常不只是“补充”，而是居留申请的前提条件——保单怎么写，直接关系到申请材料是否被接受。',
  published: '2026-09-27T09:00:00+00:00',
  modified: '2026-09-27T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ES, { name: '西班牙私人医疗保险' }],
  pullquote: '领事馆看的是保单上的字：没有共付、没有等待期、覆盖整个居留期。少一项，材料就可能被退回。',
  schemaType: 'Article',
  formHeading: '西班牙医疗保险咨询',
  formBranch: 'ZH · Health',
  formSubject: '西班牙私人医疗保险',
  formCta: '提交咨询',
  formIntro:
    '请说明需要投保的人数与年龄、在西班牙居住的城市、需要本地方案还是国际方案，以及是否用于居留申请。我们会以英语书面回复可行的方案与所需资料。',
  formPlaceholder:
    '例如：两位成人（45 岁、43 岁）与一个 12 岁的孩子，计划申请非营利居留，住在马德里；孩子明年可能去英国读书。',
  sections: `
<section class="section plain" aria-labelledby="gongli-tixi">
  <div class="container narrow article-body">${siblingNote({
    label: '也在葡萄牙生活？',
    href: '/zh/health-insurance-portugal/',
    text: '葡萄牙家庭国际私人医疗保险',
  })}
    <h2 id="gongli-tixi">西班牙的公立体系：好，但不是人人都能马上用</h2>
    <p>西班牙的国家卫生体系（<em>Sistema Nacional de Salud</em>，SNS）由各自治区的卫生服务具体运营——马德里的 <em>SERMAS</em>、加泰罗尼亚的 <em>CatSalut</em>、瓦伦西亚的 <em>GVA Sanitat</em>、安达卢西亚的 <em>SAS</em>。取得医保卡（<em>tarjeta sanitaria</em>）后，可以在所在地的卫生中心就诊。</p>
    <p>关键在于“取得”这一步。一般来说，在西班牙工作并缴纳社会保险的人及其家属可以使用公立体系；而以非营利居留等身份生活、不在西班牙工作的家庭，通常不会自动纳入，需要依靠私人医疗保险。居住满一定期限后，部分情况下可以通过缴费加入公立体系的特别协议（<em>convenio especial</em>），条件由各自治区规定。</p>
    <p>即使能使用公立体系，专科门诊与非紧急手术的等待时间，也是许多家庭选择私人保险的原因。</p>
  </div>
</section>

<section class="section tint" aria-labelledby="fei-yingli-juliu">
  <div class="container narrow article-body">
    <h2 id="fei-yingli-juliu">非营利居留签证：保单通常要满足的条件</h2>
    <p>非营利居留（<em>residencia no lucrativa</em>）是许多华人家庭选择的居留方式。按照西班牙领事馆通常公布的要求，申请人需要一份私人医疗保险，一般应当满足：</p>
    <ul>
      <li><strong>由获准在西班牙经营的保险公司出具。</strong></li>
      <li><strong>保障范围与公立体系相当。</strong>包括门诊、专科、住院、手术与急诊，而不是只保住院或只保意外。</li>
      <li><strong>无共付（<em>sin copagos</em>）。</strong>就诊时不需要自付费用。</li>
      <li><strong>无等待期（<em>sin carencias</em>）。</strong>保单生效即可使用全部保障。</li>
      <li><strong>覆盖整个居留期。</strong>通常至少一年，有的领事馆要求一次性缴清年度保费并出具证明。</li>
    </ul>
    <div class="callout">
      <span class="callout-label">我们不确认签证是否会被接受</span>
      签证材料的要求由领事馆与西班牙主管机关规定，各地与各时期可能不同。请以您所递交申请的领事馆的现行要求、或您的移民法律顾问的意见为准。把书面要求交给我们，我们会说明哪些方案可以满足、保单证明上会写明什么——但不会为了配合申请而声称某份保单“符合签证要求”。
    </div>
    <p>其他居留类型（例如数字游民签证、工作居留）对医疗保障的要求各不相同，同样以书面要求为准。</p>
  </div>
</section>

<section class="section plain" aria-labelledby="bendi-yu-guoji">
  <div class="container narrow article-body">
    <h2 id="bendi-yu-guoji">本地方案与国际方案：给不同的家庭</h2>
    <p><strong>西班牙本地方案。</strong>保险公司签约的医生与医院网络（<em>cuadro médico</em>）内就诊，直接结算。马德里、巴塞罗那、瓦伦西亚与马拉加的网络都很密集。适合以西班牙为主要生活地、较少长期离开的家庭；也是满足非营利居留要求最常见的方式。</p>
    <p><strong>国际私人医疗保险。</strong>适合在西班牙、葡萄牙、中国与其他国家之间往来，或子女在英国、美国等地求学的家庭。通常提供高得多的年度额度、在全球或约定区域内自由选择医院与医生、直接结算，以及医疗转运与送返。保障区域（是否包含美国）、自负额与门诊模块，是影响条件的主要因素。</p>
    <p>需要注意的是：国际方案是否满足某一领事馆的签证要求，要看它的出具公司与保单证明的写法，不能默认。两者也可以组合——以本地方案满足居留要求，另以国际方案覆盖全球。</p>
  </div>
</section>

<section class="section tint" aria-labelledby="oumeng-gongmin">
  <div class="container narrow article-body">
    <h2 id="oumeng-gongmin">关于 S1 与欧洲健康卡</h2>
    <p>经常被提到的 S1 表格与欧洲健康保险卡（EHIC），适用于在欧盟成员国参保的人：例如在另一个欧盟国家领取养老金、移居西班牙的退休人员，可以凭 S1 在西班牙登记使用公立医疗。持中国护照、未在欧盟国家参保的家庭，通常不适用这一安排。如果家中有成员持有欧盟国籍或在其他欧盟国家参保，情况会不同，值得单独确认。</p>
  </div>
</section>

<section class="section plain" aria-labelledby="jiwangzheng">
  <div class="container narrow article-body">
    <h2 id="jiwangzheng">健康核保、既往症与年龄</h2>
    <p><strong>健康问卷。</strong>投保时，保险公司会通过正式的健康问卷了解每位被保险人的情况，可能要求补充资料。结果可能是正常承保、对某些情况附加除外、加费，或者拒保。这是正常流程，每位家庭成员单独核保。</p>
    <p><strong>既往症。</strong>本地方案通常不保投保前已存在的疾病。国际方案中，部分产品提供全面核保后有条件纳入，或在一定年限后纳入。无论哪种方式，<strong>如实申报</strong>都是保单能用的前提——理赔时保险公司会核对病历，申报不实可能导致拒赔甚至解除合同。</p>
    <p><strong>年龄。</strong>多数产品设有首次投保的年龄上限。年龄较大的申请人可选方案较少，越早安排越从容。</p>
    <p><strong>孩子。</strong>新生儿在出生后一定期限内加入保单时，部分保险公司可免除等待期；产科保障在普通方案中通常有较长等待期——而满足签证要求的“无等待期”方案，对产科的处理也需要逐字确认。</p>
  </div>
</section>

<section class="section tint" aria-labelledby="women-de-zuoyong">
  <div class="container narrow article-body">
    <h2 id="women-de-zuoyong">我们在这件事里做什么</h2>
    <ul>
      <li><strong>投保前。</strong>按您的居留计划、居住城市与家庭成员的出行方式，比较本地与国际方案；对照领事馆的书面要求说明哪些方案可以满足；在签字前用英语书面说明保障范围、除外责任与等待期。</li>
      <li><strong>保单期间。</strong>居留续签时的保单证明、孩子出国读书、家庭成员增加、居住地变化——这些都需要及时调整。</li>
      <li><strong>需要就医或理赔时。</strong>协助理解预授权流程、报销单据与时限，跟进与保险公司的沟通。</li>
    </ul>
    <p class="legal-note">医疗保险的具体保障、等待期与除外责任以保险公司出具的保单为准。本页为一般性说明，不构成移民或法律意见。服务语言为英语，书面进行。</p>
  </div>
</section>`,
  faqTitle: '西班牙私人医疗保险：常见问题',
  faq: [
    {
      q: '申请西班牙非营利居留，需要什么样的医疗保险？',
      a: '<p>按照领事馆通常公布的要求，一般需要由获准在西班牙经营的保险公司出具、保障范围与公立体系相当、无共付、无等待期、覆盖整个居留期的私人医疗保险。具体要求以您递交申请的领事馆的现行规定为准，我们不对签证是否被接受作出确认。</p>',
    },
    {
      q: '国际医疗保险可以用于西班牙的居留申请吗？',
      a: '<p>不能默认。关键看出具保单的公司是否获准在西班牙经营，以及保单证明是否写明领事馆要求的内容。常见的做法是以本地方案满足居留要求，另以国际方案覆盖在其他国家的就医需要；也有国际方案可以直接满足要求，需要逐一确认。</p>',
    },
    {
      q: '在西班牙住下来之后，可以使用公立医疗吗？',
      a: '<p>取决于您的身份。在西班牙工作并缴纳社会保险的人及其家属一般可以使用；以非营利居留身份生活的家庭通常不会自动纳入。居住满一定期限后，部分情况下可以通过特别协议（<em>convenio especial</em>）缴费加入，条件由各自治区规定。</p>',
    },
    {
      q: '我有既往病史，还能投保吗？',
      a: '<p>通常可以投保，但既往症本身可能被列为除外，或在一定条件下纳入，取决于产品与核保结果。请在保险公司的正式健康问卷中如实申报，并在书面上确认承保是否附带除外条款。请不要在网站表单中填写任何健康信息。</p>',
    },
    {
      q: '孩子在国外读书，能放在同一份保单里吗？',
      a: '<p>国际医疗保险通常可以，前提是保障区域覆盖孩子读书的国家（例如是否包含美国需要单独选择）。本地西班牙方案一般只在西班牙境内提供完整保障，出境只有有限的旅行急诊保障。</p>',
    },
    {
      q: 'S1 表格对我们适用吗？',
      a: '<p>S1 适用于在欧盟成员国参保的人，例如在另一个欧盟国家领取养老金后移居西班牙的退休人员。持中国护照、未在欧盟国家参保的家庭通常不适用。如果家中有成员持有欧盟国籍或在其他欧盟国家参保，情况会不同。</p>',
    },
  ],
  related: [
    { url: '/zh/insurance-guide-spain/', label: '西班牙保险指南' },
    { url: '/zh/buying-property-spain/', label: '在西班牙买房：各阶段的保险安排' },
    { url: '/zh/health-insurance-portugal/', label: '葡萄牙家庭国际私人医疗保险' },
  ],
};
