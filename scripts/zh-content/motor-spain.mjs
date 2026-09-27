/**
 * /zh/car-insurance-spain/ (cluster es-motor)
 *
 * Search intent: 西班牙汽车保险 / 西班牙车险 / 西班牙驾照换领 / 西班牙进口车 —
 * a family in Madrid, Barcelona, Valencia or on the Costa del Sol arranging
 * cover on a Spanish-plated car, bringing a car from another country, or
 * insuring a higher-value or collector car.
 *
 * Original copy. The Spain-specific points: seguro obligatorio and the FIVA
 * register the police check it against; terceros / terceros ampliado / todo
 * riesgo as the market's own vocabulary; Spanish registration (DGT, ITV,
 * impuesto de matriculación) after becoming resident; the SINCO claims file
 * and foreign no-claims certificates; the parte amistoso and the statutory
 * seven-day notice. Licence rules are DGT's and we say so rather than
 * asserting them — same stance as the Portugal page with IMT.
 */
import { BREADCRUMB_ES, siblingNote } from './shared.mjs';

export const MOTOR_ES_PAGE = {
  slug: 'car-insurance-spain',
  url: '/zh/car-insurance-spain/',
  cluster: 'es-motor',
  title: '西班牙汽车保险：强制险、进口车辆与驾照 | Adler & Rochefort',
  description:
    '西班牙汽车保险：强制险与全险的区别、西班牙牌照与车辆登记、从国外带车、驾照与 DGT、海外出险记录能否采用，以及较高价值与收藏车辆的约定价值承保。',
  keywords:
    '西班牙汽车保险, 西班牙车险, seguro de coche, seguro obligatorio, todo riesgo, 西班牙进口车, 西班牙车辆登记, 西班牙驾照, 西班牙经典车保险, 马德里车险, 巴塞罗那车险, 马拉加车险',
  eyebrow: '西班牙 · 汽车保险',
  h1: '西班牙汽车保险：从强制险到收藏车辆',
  standfirst:
    '在西班牙，每一辆上路的车都必须有强制险，警方可以当场查询。强制险之上保多少，取决于车的价值、您怎么用它，以及您的驾驶记录能不能被西班牙的保险公司认可。',
  published: '2026-09-27T09:00:00+00:00',
  modified: '2026-09-27T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ES, { name: '西班牙汽车保险' }],
  pullquote: '在西班牙，保险公司看的是您在 SINCO 里的记录。海外的良好记录能不能算数，要在投保前用文件说明。',
  schemaType: 'Article',
  formHeading: '西班牙汽车保险咨询',
  formBranch: 'ZH · Motor',
  formSubject: '西班牙汽车保险',
  formCta: '提交咨询',
  formIntro:
    '请说明车辆品牌、车型与年份、目前的登记情况（西班牙牌照、外国牌照或准备购车）、主要驾驶人的驾龄与近年的出险情况。',
  formPlaceholder:
    '例如：2022 年 Mercedes-Benz GLE，已是西班牙牌照，常驻马拉加；主要驾驶人驾龄 15 年，近五年无事故；另有一辆 1970 年代的经典跑车需要投保。',
  sections: `
<section class="section plain" aria-labelledby="qiangzhi-xian">
  <div class="container narrow article-body">${siblingNote({
    label: '车在葡萄牙？',
    href: '/zh/car-insurance-portugal/',
    text: '葡萄牙汽车保险',
  })}
    <h2 id="qiangzhi-xian">强制险：保的是别人</h2>
    <p>西班牙法律要求所有机动车投保强制民事责任险（<em>seguro obligatorio</em>），赔付您对他人造成的人身伤害与财产损失，法定最低限额按欧盟标准设定。它不赔您自己的车，也不赔有过错的驾驶人本人。</p>
    <p>所有车辆的投保状态登记在一个全国数据库（<em>FIVA</em>）中，交警可以当场查询。无强制险上路，会面临高额罚款与车辆被扣押；即使车辆长期停放，只要仍在登记状态，通常也需要保持投保，或办理正式的停驶手续。</p>
    <p>实务中，几乎所有保单都在强制部分之上附加了自愿责任（<em>responsabilidad civil voluntaria</em>），把第三者责任提高到远超法定最低的额度——这一点对驾驶较高价值车辆的家庭尤其重要。</p>
  </div>
</section>

<section class="section tint" aria-labelledby="san-dang">
  <div class="container narrow article-body">
    <h2 id="san-dang">三个档次：terceros、terceros ampliado、todo riesgo</h2>
    <p>西班牙市场用三个词区分保障档次，每家保险公司的打包方式不同，名称相同不等于内容相同：</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">西班牙汽车保险的三个档次</caption>
        <thead>
          <tr><th scope="col">档次</th><th scope="col">通常包含</th></tr>
        </thead>
        <tbody>
          <tr><td><em>Terceros</em>（第三者）</td><td>强制险与自愿责任，通常附带道路救援与基本法律保障。</td></tr>
          <tr><td><em>Terceros ampliado</em>（扩展第三者）</td><td>在第三者基础上加上玻璃、盗窃、火灾，有时包括自然事件。</td></tr>
          <tr><td><em>Todo riesgo</em>（全险）</td><td>再加上自己车辆的碰撞损失，可选择有自负额（<em>con franquicia</em>）或无自负额。</td></tr>
        </tbody>
      </table>
    </div>
    <p>对较高价值的车辆，还要逐项确认：全损时按什么价值赔付（新车价、约定价值或市场价值）、新车价保障维持多久、原厂维修与原厂配件、代步车的级别与天数，以及道路救援是否覆盖全欧洲——对经常开车往返葡萄牙与法国的家庭，这一项很实际。</p>
  </div>
</section>

<section class="section plain" aria-labelledby="paizhao-dengji">
  <div class="container narrow article-body">
    <h2 id="paizhao-dengji">西班牙牌照、车辆登记与从国外带车</h2>
    <p>在西班牙购买的车辆，以您的 NIE 登记在交通总局（<em>DGT</em>）名下，保险在交车当天生效，不留空档。二手车过户前，建议向 DGT 调取车辆报告，确认没有未结清的负担与罚款，并核对定期检验（<em>ITV</em>）的有效期。</p>
    <p>从其他国家带车进来时，时间线大致是这样的：</p>
    <ul>
      <li><strong>过渡阶段。</strong>成为西班牙居民后，外国牌照车辆通常须在规定期限内办理西班牙登记（<em>matriculación</em>）。在此之前，保险一般仍按原注册国安排，西班牙保险公司通常无法为尚未在西班牙登记的车辆出具常规保单。</li>
      <li><strong>登记环节。</strong>一般包括技术检验、相关税费（例如登记税 <em>impuesto de matriculación</em>，部分情况下可因迁居而减免），来自欧盟以外的车辆还涉及海关与认证。</li>
      <li><strong>登记完成后。</strong>取得西班牙牌照与行驶证后，即可投保西班牙的常规保单。进口车的市场参考价值可能与原国家不同，这会影响车损保额，值得事先确认。</li>
    </ul>
    <p class="legal-note">车辆登记、税费与期限由 DGT、税务与海关机关规定，会随时间变化。本页只说明其中与保险相关的部分，请以主管机关的现行规定为准。</p>
  </div>
</section>

<section class="section tint" aria-labelledby="jiazhao">
  <div class="container narrow article-body">
    <h2 id="jiazhao">驾照：以 DGT 的规定为准</h2>
    <p>外国驾照在西班牙的使用与换领，由交通总局（<em>DGT</em>）规定。一般而言，欧盟国家签发的驾照在西班牙有效；其他国家的驾照，游客身份下通常可在一定期限内使用，而成为居民后，能否换领西班牙驾照取决于西班牙与签发国之间是否有互换协议——没有协议的，通常需要在西班牙重新考取。</p>
    <p>中国驾照的具体情况、所需翻译与期限，<strong>请以 DGT 的现行规定为准，我们不对此作出确认。</strong>与保险直接相关的是两点：第一，保单上写明的驾驶人必须持有在西班牙有效的驾照，否则理赔时可能产生争议；第二，重新考取驾照后的“驾龄”在保险公司的计算方式可能与实际驾驶年数不同，海外驾驶经验需要用文件证明。</p>
  </div>
</section>

<section class="section plain" aria-labelledby="chuxian-jilu">
  <div class="container narrow article-body">
    <h2 id="chuxian-jilu">海外出险记录：能不能带过来</h2>
    <p>西班牙的保险公司共享一个出险记录数据库（<em>SINCO</em>），定价主要依据其中的记录。刚来西班牙的驾驶人在这里没有记录，常被当作“新驾驶人”定价。</p>
    <p>可以争取的做法是：向原保险公司索取近年的无出险证明（最好注明保单期间、被保险车辆与理赔情况），必要时附翻译。部分保险公司会据此给予相应的折扣，部分不接受，各家政策不同。欧盟国家保险公司出具的标准化理赔记录证明，通常最容易被采用。</p>
  </div>
</section>

<section class="section tint" aria-labelledby="gao-jiazhi-cheliang">
  <div class="container narrow article-body">
    <h2 id="gao-jiazhi-cheliang">较高价值与收藏车辆</h2>
    <p>高端车型与收藏车辆，适合按约定价值承保：投保时依评估确定价值，全损时按此金额赔付，而不是按事故当时的市场折旧价争论。常见的条件包括：车库停放、年度行驶里程上限、指定驾驶人，以及对经典车的原厂修复要求。</p>
    <p>车龄较长、保持原貌的车辆，可以申请登记为历史车辆（<em>vehículo histórico</em>），保险也有专门的经典车方案。家庭拥有多辆车时，可以考虑统一安排，便于管理续保日期与驾驶人。</p>
  </div>
</section>

<section class="section plain" aria-labelledby="shigu">
  <div class="container narrow article-body">
    <h2 id="shigu">发生事故时</h2>
    <ol class="process-steps">
      <li><div><strong>确保安全，有人受伤时报警。</strong><span>欧盟通用紧急电话 112。</span></div></li>
      <li><div><strong>填写双方事故声明（<em>parte amistoso</em> / <em>declaración amistosa de accidente</em>）。</strong><span>双方签字，各执一份。看不懂的内容不要签，可以只记录事实、拍照并交换资料。</span></div></li>
      <li><div><strong>及时报案。</strong><span>西班牙法律规定的一般报案时限是知悉事故后七天内，保单可以约定更长。</span></div></li>
      <li><div><strong>保留证据。</strong><span>现场照片、对方车牌与保险信息、证人联系方式。</span></div></li>
    </ol>
  </div>
</section>

<section class="section tint" aria-labelledby="women-de-zuoyong">
  <div class="container narrow article-body">
    <h2 id="women-de-zuoyong">我们在这件事里做什么</h2>
    <ul>
      <li><strong>投保前。</strong>根据车辆价值与用途选择档次、争取海外出险记录被采用、为收藏车辆安排约定价值，并在签字前用英语书面说明保障、自负额与除外责任。</li>
      <li><strong>保单期间。</strong>更换车辆、增加驾驶人、完成西班牙登记或换领驾照后，及时更新保单。</li>
      <li><strong>事故发生时。</strong>协助报案、理解事故声明、跟进与保险公司的沟通和时限。</li>
    </ul>
    <p class="legal-note">具体保障以保险公司出具的保单为准。服务语言为英语，书面进行。</p>
  </div>
</section>`,
  faqTitle: '西班牙汽车保险：常见问题',
  faq: [
    {
      q: '西班牙的汽车保险哪些是强制的？',
      a: '<p>强制的只有民事责任部分（<em>seguro obligatorio</em>），赔付您对他人造成的人身伤害与财产损失。车辆的投保状态登记在全国数据库中，交警可以当场查询。自己车辆的损失、盗窃、玻璃等属于自愿选择的保障。</p>',
    },
    {
      q: 'Todo riesgo 就是什么都保吗？',
      a: '<p>不是。<em>Todo riesgo</em> 在第三者与扩展保障的基础上增加了自己车辆的碰撞损失，但各家的内容、自负额、全损赔付方式与救援范围差别很大。名称相同的两份报价，需要逐项比较。</p>',
    },
    {
      q: '我在国外多年无事故，西班牙保险公司认可吗？',
      a: '<p>部分保险公司认可。请向原保险公司索取近年的无出险证明，注明保单期间与理赔情况，必要时附翻译。西班牙保险公司主要依据本地数据库 SINCO 定价，海外记录能否折算，各家政策不同。</p>',
    },
    {
      q: '中国驾照在西班牙可以直接用吗？',
      a: '<p>外国驾照的使用期限与换领条件由交通总局 DGT 规定，取决于您的身份与两国之间是否有互换协议。请以 DGT 的现行规定为准，我们不对此作出确认。与保险相关的是：保单上的驾驶人必须持有在西班牙有效的驾照。</p>',
    },
    {
      q: '外国牌照的车可以在西班牙投保吗？',
      a: '<p>通常不能按西班牙的常规保单投保。成为西班牙居民后，外国牌照车辆一般须在规定期限内办理西班牙登记；在此之前，保险通常仍按原注册国安排。完成登记后，即可投保西班牙的常规保单。</p>',
    },
    {
      q: '经典车和收藏车辆怎么投保？',
      a: '<p>适合按约定价值承保，常见条件包括车库停放、年度里程上限与指定驾驶人。符合条件的车辆可登记为历史车辆（<em>vehículo histórico</em>），并使用专门的经典车方案。</p>',
    },
  ],
  related: [
    { url: '/zh/insurance-guide-spain/', label: '西班牙保险指南' },
    { url: '/zh/liability-insurance-spain/', label: '西班牙家庭责任保险' },
    { url: '/zh/car-insurance-portugal/', label: '葡萄牙汽车保险' },
  ],
};
