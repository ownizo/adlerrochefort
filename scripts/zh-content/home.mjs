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
  title: '高价值房屋保险：葡萄牙与西班牙 | Adler & Rochefort',
  description:
    '高价值住宅保险：现场查勘与重建费用、取消比例赔付、艺术品与收藏按约定价值承保、百万级家庭责任。逐一核保，书面建议，服务葡萄牙与西班牙。',
  keywords:
    '高价值房屋保险, 豪宅保险 葡萄牙, 艺术品保险, 葡萄牙房屋保险, 葡萄牙房产保险, multirriscos habitação, 葡萄牙公寓保险, 葡萄牙别墅保险, 葡萄牙第二居所保险, 葡萄牙房屋重建费用, 葡萄牙地震保险',
  eyebrow: '高价值住宅',
  h1: '高价值房屋保险：从建筑到艺术收藏',
  standfirst:
    '价值较高的住宅需要的不是标准的 <em>multirriscos habitação</em>，而是逐一核保的私人客户保单：现场查勘确认重建费用、取消比例赔付、贵重物品按约定价值列明，以及与家业相称的责任保额。',
  published: '2026-09-12T09:00:00+00:00',
  modified: '2026-09-26T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: '房屋保险' }],
  pullquote: '保额不是您付了多少钱买这处房产，而是把它按原有标准重新建起来要花多少钱。',
  schemaType: 'Article',
  // Especificação v2, Parte B — this page's dedicated wizard replaces the
  // shared zh-inquiry branch-select form.
  wizard: {
    idPrefix: 'zh-hab',
    formName: 'zh-home-insurance-wizard',
    ramo: 'Home insurance',
    heading: '申请房屋保险报价',
    intro: '请填写基本信息。我们将在24个工作小时内回复。',
    stepLabel2: '房产信息',
    submitLabel: '提交申请',
    microNote:
      '我们将在24个工作小时内回复。您的信息仅用于准备本报价，并根据《通用数据保护条例》（GDPR）处理——请参阅<a href="/en/privacy-policy" hreflang="en">隐私政策</a>。',
    scripts: ['quote-field-toggle.js'],
    fieldsHtml: `        <div class="contact-form-field">
          <label for="zh-hab-regime">房屋使用方式 *</label>
          <select id="zh-hab-regime" name="regime_ocupacao" data-branch-select required>
            <option value="">请选择</option>
            <option value="permanente">主要住所</option>
            <option value="holiday_home">度假屋 / 第二居所</option>
            <option value="alojamento_local">Alojamento Local（短期出租）</option>
          </select>
        </div>
        <div data-branch="alojamento_local" hidden>
          <div class="contact-form-field">
            <label for="zh-hab-al-regime">短期出租类型 *</label>
            <select id="zh-hab-al-regime" name="al_regime" required disabled>
              <option value="">请选择</option>
              <option value="tempo_inteiro">全部</option>
              <option value="parcial">部分（与房东共用住所）</option>
            </select>
          </div>
        </div>
        <div class="contact-form-field"><label for="zh-hab-ano-construcao">建造年份 *</label><input type="number" id="zh-hab-ano-construcao" name="ano_construcao" min="1800" required></div>
        <div class="contact-form-field"><label for="zh-hab-area">建筑总面积（平方米） *</label><input type="number" id="zh-hab-area" name="area_bruta" min="1" required></div>
        <div class="contact-form-field"><label for="zh-hab-wc">卫生间数量 *</label><input type="number" id="zh-hab-wc" name="casas_banho" min="0" required></div>
        <div class="contact-form-field">
          <label class="contact-form-checkbox" for="zh-hab-obras-check"><input type="checkbox" id="zh-hab-obras-check" data-field-toggle="zh-hab-obras-group"> 近年是否进行过翻修？</label>
        </div>
        <div id="zh-hab-obras-group" hidden>
          <div class="contact-form-field"><label for="zh-hab-obras-ano">翻修年份 *</label><input type="number" id="zh-hab-obras-ano" name="obras_ano" data-validate="renovation-year" data-validate-ref="ano_construcao" required disabled></div>
          <div class="contact-form-field"><label for="zh-hab-obras-desc">请描述已完成的工程 *</label><textarea id="zh-hab-obras-desc" name="obras_descricao" minlength="4" required disabled></textarea></div>
        </div>
        <div class="contact-form-field"><label for="zh-hab-capital-edificio">建筑保险金额（欧元） *</label><input type="number" id="zh-hab-capital-edificio" name="capital_edificio" min="0" step="1000" required></div>
        <div class="contact-form-field"><label for="zh-hab-capital-conteudo">室内财产保险金额（欧元） *</label><input type="number" id="zh-hab-capital-conteudo" name="capital_conteudo" min="0" step="500" required></div>`,
  },
  sections: `
<section class="section plain" aria-labelledby="weishenme-yao-bao">
  <div class="container narrow article-body">
    <h2 id="weishenme-yao-bao">为什么在葡萄牙，房子本身要投保</h2>
    <p>在国内城市，很少有业主为自己住的那套房子单独买财产保险。这不是疏忽，而是环境决定的：房屋是钢筋混凝土结构、小区有物业、真正的重大损失概率低，而且大多数人对“房子”的价值感知集中在土地与位置上，不在建筑本体上。</p>
    <p>葡萄牙的情况不同，原因有三个很具体：</p>
    <ul>
      <li><strong>房屋结构与年代更分散。</strong>里斯本、阿尔加维和其他地区大量住宅是二十世纪七八十年代甚至更早的砖混或石造建筑，管线老化、屋面渗漏、外墙裂缝是常见问题，而不是意外。</li>
      <li><strong>水渍损失非常普遍。</strong>葡萄牙房屋保险最高频的理赔类型不是火灾也不是盗窃，而是 <em>danos por água</em>——水管爆裂、卫浴渗漏、屋顶进水，以及由此造成的对楼下邻居的损害。</li>
      <li><strong>有房贷就必须有保险。</strong>银行放款时会把房屋保险作为条件，受益人指向银行。没有保单，贷款流程走不下去。</li>
    </ul>
    <p>所以在葡萄牙，房屋保险与其说是“额外买的一份保险”，不如说是持有房产的组成部分。真正需要决定的不是买不买，而是保多少、保什么、哪些条款必须调整。</p>
  </div>
</section>

<section class="section tint" aria-labelledby="fangwu-benti">
  <div class="container">
    <h2 id="fangwu-benti">房屋本身</h2>
    <p>价值较高的住宅，问题的重点不同于普通公寓。以下是我们所安排的私人客户保单在房屋部分的参考条件，每一份方案我们都会以书面形式逐项对照：</p>
    <div class="feature-grid">
      <div class="feature-card"><h3>现场查勘与重建费用</h3><p>对于价值较高的住宅，保险公司会免费安排现场查勘，确认重建费用，建议室内财物与贵重物品的保额，并提出防损建议。</p></div>
      <div class="feature-card"><h3>不适用比例赔付</h3><p>接受建议保额后，保险公司放弃比例赔付原则：即使建造成本此后上涨，局部损失也全额赔付。</p></div>
      <div class="feature-card"><h3>保证重建</h3><p>发生全损时，即使重建费用超过建筑保额，房屋也会被重建——前提是已接受查勘建议的保额。</p></div>
      <div class="feature-card"><h3>同等标准的临时住所</h3><p>房屋无法居住期间，提供同等标准的替代住所，宠物与马匹亦包括在内——而不是零售市场常见的几个月上限。</p></div>
      <div class="feature-card"><h3>花园、围墙与附属建筑</h3><p>树木、灌木与草坪、围墙与挡土墙、泳池、附属建筑与客房，各有独立保额，而不是象征性的一个小数目。</p></div>
      <div class="feature-card"><h3>水、燃气与查漏</h3><p>查找并修复水、燃气或供暖系统的泄漏，不设单独分项限额，流失的水或燃料也在赔付之列。</p></div>
      <div class="feature-card"><h3>赔付方式由您选择</h3><p>现金赔付，或由您选定的供应商、工匠与修复师修复，两种方式均无扣减。</p></div>
      <div class="feature-card"><h3>重大损失免除自负额</h3><p>损失超过一定金额时，自负额完全免除——恰恰在它原本最沉重的时候。</p></div>
      <div class="feature-card"><h3>今天的房屋</h3><p>太阳能板、储能电池与备用发电机，重建时的环保升级，以及钥匙遗失或被盗时的换锁费用。</p></div>
      <div class="feature-card"><h3>因伤残而改造</h3><p>家庭成员因意外或疾病造成永久伤残时，对住宅进行适应性改造的费用。</p></div>
    </div>
  </div>
</section>

<section class="section plain" aria-labelledby="shinei-caiwu">
  <div class="container">
    <h2 id="shinei-caiwu">室内财物</h2>
    <p>家具、陈设与个人物品，按一切险承保，而不是逐项列举的有限风险：</p>
    <div class="feature-grid">
      <div class="feature-card"><h3>全球一切险</h3><p>个人物品在家中、旅途中和第二居所均按一切险承保，随身携带的物品不设单独分项限额。</p></div>
      <div class="feature-card"><h3>可超出保额的室内财物赔付</h3><p>接受建议保额后，如实际价值高于室内财物保额，赔付可在预先约定的幅度内超出保额。</p></div>
      <div class="feature-card"><h3>关键处不设分项限额</h3><p>意外损坏与遗失、储藏室与酒窖内的盗窃、户外家具，均不设掏空保障的分项限额。</p></div>
      <div class="feature-card"><h3>访客物品与新购物品</h3><p>访客的物品同样受到保障；新购置的物品在申报期内自动承保。</p></div>
      <div class="feature-card"><h3>家中活动</h3><p>在家中举办庆典时的活动取消费用，以及帐篷、舞台等临时搭建物。</p></div>
    </div>
  </div>
</section>

<section class="section tint" aria-labelledby="guizhong-wupin">
  <div class="container">
    <h2 id="guizhong-wupin">艺术品、收藏与贵重物品</h2>
    <p>首饰、名表、艺术品与收藏按评估后的约定价值单独列明——赔的是写明的价值，而不是事后各说各话：</p>
    <div class="feature-grid">
      <div class="feature-card"><h3>约定价值</h3><p>艺术品、首饰、手表与收藏按投保时依评估确定的价值列明——全损时即按此金额赔付，不在折旧上争执。</p></div>
      <div class="feature-card"><h3>无自负额</h3><p>按约定价值或申报价值投保的贵重物品不适用自负额。</p></div>
      <div class="feature-card"><h3>修复后的贬值</h3><p>物品经修复后市场价值下降的，差额予以赔付——修复费用也不设上限。</p></div>
      <div class="feature-card"><h3>防止估值不足</h3><p>经专业评估的物品在出险当日价值高于保额的，保单可在约定幅度内超出约定价值赔付。</p></div>
      <div class="feature-card"><h3>新购藏品与酒窖</h3><p>新购藏品在一定期限内自动承保；葡萄酒与烈酒收藏另有专门的储存条件。</p></div>
    </div>
  </div>
</section>

<section class="section plain" aria-labelledby="jiating-zeren">
  <div class="container">
    <h2 id="jiating-zeren">家庭个人责任</h2>
    <p>房屋保单附带的零售级责任额度，对资产较多的家庭通常不够。私人客户方案的责任部分：</p>
    <div class="feature-grid">
      <div class="feature-card"><h3>与家业相称的保额</h3><p>家庭个人责任保额可达数百万欧元，全球范围有效。</p></div>
      <div class="feature-card"><h3>抗辩费用另计</h3><p>法律抗辩费用在保额之外另行支付，而不是从保额中扣减。</p></div>
      <div class="feature-card"><h3>谁在保障之内</h3><p>整个家庭，包括在外地求学的子女，以及偶尔替您照看宠物的人；与住所相关的访客与家政人员。</p></div>
      <div class="feature-card"><h3>每一处住所</h3><p>无论作为业主、租户还是居住者——在葡萄牙、在西班牙，或家庭在任何地方拥有的住所。</p></div>
    </div>
    <p><a href="/zh/liability-insurance-portugal/">详细了解家庭个人责任保险</a></p>
  </div>
</section>

<section class="section tint" aria-labelledby="jiating-baozhang">
  <div class="container">
    <h2 id="jiating-baozhang">家庭保障</h2>
    <p>部分私人客户保单还为家庭本身提供保障，针对的是资产较多的家庭更可能面对的风险：</p>
    <div class="feature-grid">
      <div class="feature-card"><h3>绑架与勒索</h3><p>家庭成员遭绑架与勒索时的相关费用，包括专业顾问费用与悬赏线索的奖金。</p></div>
      <div class="feature-card"><h3>劫车与入室抢劫</h3><p>遭遇劫车、加重入室盗窃、人身袭击、路怒或空怒事件后的支援与补偿。</p></div>
      <div class="feature-card"><h3>威胁与跟踪</h3><p>家庭成员受到威胁或跟踪时的安全顾问、临时迁居与法律支援。</p></div>
      <div class="feature-card"><h3>网络欺凌与名誉</h3><p>反复遭受网络欺凌后的心理咨询师、网络安全顾问、律师费用，必要时包括转学费用。</p></div>
      <div class="feature-card"><h3>心理支援</h3><p>上述任何事件发生后，为家庭提供专业心理支援。</p></div>
    </div>
    <p class="legal-note">以上是我们所安排的高价值资产保单的参考条件。保障范围、限额、自负额与除外责任因保险公司与风险而异，仅以最终出具的保单条款为准。</p>
  </div>
</section>

<section class="section plain" aria-labelledby="liang-ge-baoe">
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

<section class="section tint" aria-labelledby="zhongjian-feiyong">
  <div class="container narrow article-body">
    <h2 id="zhongjian-feiyong">重建费用：整份保单里最关键的数字</h2>
    <p>中国买家最常犯的一个错误，是把成交价填成保额。逻辑上很自然——保额不就应该等于房子的价值吗？但在葡萄牙的房屋保险里，这两个数字衡量的是不同的东西。</p>
    <p><em>Valor de reconstrução</em>（重建费用）指的是：如果这栋建筑被毁，按现在的人工与材料价格，把它重新建起来要花多少钱。它<strong>不包含土地价值，也不包含位置溢价</strong>。而在葡萄牙，尤其是里斯本、卡斯凯什和阿尔加维沿海，房价里位置的占比很高，所以重建费用往往只是成交价的一部分。反过来，对于用料考究、工艺复杂的住宅，重建费用也可能高于一般估算。</p>
    <p>按成交价投保会怎样？并不会赔得更多——房屋保险是补偿性的，赔的是实际损失，不会因为保额高就多赔。</p>
    <p>反过来低估更危险，因为葡萄牙保单普遍适用<strong>比例赔付原则</strong>（<em>regra proporcional</em>）：</p>
    <div class="callout">
      <span class="callout-label">比例赔付是怎么算的</span>
      假设保单上的建筑保额只相当于应有重建费用的 60%。厨房发生火灾，保险公司可以只按修复费用的 60% 赔付，再扣除自负额。损失只是局部的，赔款却按整体不足的比例打了折。这正是私人客户保单通过现场查勘、接受建议保额来取消比例赔付的原因。
    </div>
    <p>这就是为什么这个数字值得认真对待。实务中通常按建筑面积乘以每平方米的重建单价来估算，单价取决于地区、建筑类型与装修标准；有些保险公司提供自动重估条款（<em>atualização automática de capitais</em>），按通胀逐年调整，在建材涨价的年份很有用。</p>
    <p class="legal-note">具体的每平方米单价与是否适用比例赔付，取决于保险公司与所选方案。以上说明的是葡萄牙市场的通常做法。</p>
  </div>
</section>

<section class="section plain" aria-labelledby="condominio">
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

<section class="section tint" aria-labelledby="bao-shenme">
  <div class="container narrow article-body">
    <h2 id="bao-shenme">标准零售保单通常包含什么、不包含什么</h2>
    <p>作为对照，以下是葡萄牙零售市场上标准房屋保单比较典型的情形——也正是私人客户保单着力改进的地方。不同保险公司的方案差异很大，以下不是对任何一份具体合同的确认。</p>
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
          <tr><td>盗窃与入室抢劫</td><td>通常包含。可能要求门锁与安防达到一定标准；现金与首饰另设分项限额，高价值物品需按约定价值单独列明。</td></tr>
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
    <p><strong>关于地震，值得单独说一句。</strong>里斯本、塞图巴尔和阿尔加维在地震风险区划上并非低风险地区，1755 年的里斯本大地震和 1969 年的圣维森特角地震都是真实记录。地震保障在葡萄牙市场上通常作为附加项提供，条件取决于地区、建筑年代与结构类型。不要假设它已经包含在内，也不要假设它不重要。</p>
  </div>
</section>

<section class="section plain" aria-labelledby="di-er-ju-suo">
  <div class="container narrow article-body">
    <h2 id="di-er-ju-suo">第二居所、空置房产与出租用途</h2>
    <p>很多中国客户在葡萄牙的房产不是全年自住：可能一年住两三个月，可能给家人偶尔使用，可能通过平台短租，也可能长租给本地住户。这三种用途在保单上是三件不同的事。</p>
    <p><strong>第二居所与长期空置。</strong>多数保险公司在条款里约定了连续无人居住的天数上限（常见的是 60 天或 90 天，具体各家不同）。超过这个期限，某些保障可能受限——最典型的是盗窃与水渍，因为无人在场时漏水会持续很久。可行的安排通常包括：申报为第二居所而非主要住所、约定定期查看、安装漏水关断阀或安防系统。关键是<strong>如实申报实际使用方式</strong>，而不是把它写成常住房。</p>
    <p><strong>出租用途。</strong>无论是长租还是短租（<em>alojamento local</em>），一旦房产用于出租，风险结构就变了：使用者不是业主、人员流动、租客财物、对租客的责任都是新的问题。用自住条款的保单去覆盖短租房，是理赔被拒的常见原因。短租通常需要专门的方案。</p>
    <p><strong>出租给长期住户。</strong>业主投保建筑与业主责任，租客自行投保其个人财物。保单上写清房产是出租状态，这一点在有房贷时尤其重要，因为银行的要求与租赁用途可能同时适用。</p>
  </div>
</section>

<section class="section tint" aria-labelledby="fangdai">
  <div class="container narrow article-body">
    <h2 id="fangdai">房贷相关的要求</h2>
    <p>如果房产有葡萄牙的房贷，银行通常会要求两件事：房屋多险保单（<em>multirriscos</em>），以及寿险（<em>seguro de vida</em>）。银行会作为保单的受益人（<em>beneficiário</em>），并要求在放款前提供保险证明。</p>
    <p>银行通常会直接提供一份自己的保险方案。<strong>这份方案未必不合适——很多时候它是可用的。</strong>但它是按银行的标准流程生成的，不是按您这套房子的具体情况定制的，所以值得做的事是比较范围，而不是默认接受或默认拒绝。比较时看四项：建筑保额是否与真实重建费用相符、地震是否包含、室内财物保额是否够、自负额是多少。</p>
    <p>在葡萄牙，借款人有权自行选择保险公司，只要保单满足银行在贷款合同中约定的条件（受益人、保额、保障范围）。有些银行会把“使用本行保险”与利率优惠挂钩，这时需要把保费差额和利率优惠放在一起算，而不是只看其中一边。</p>
    <p class="legal-note">具体要求由贷款合同与银行规定决定。签署前请以银行提供的书面条件为准。</p>
  </div>
</section>


<section class="section plain" aria-labelledby="jiancha-qingdan">
  <div class="container narrow article-body">
    <h2 id="jiancha-qingdan">接受保险方案之前应该核对的几项</h2>
    <p>拿到一份方案或保单草案时，或者想检视现有的保单，可以按这个顺序逐项对照。这不需要懂葡萄牙语，只需要知道该找哪几个数字。</p>
    <ol class="process-steps">
      <li><div><strong>建筑保额（<em>capital edifício</em>）。</strong><span>它是否接近真实的重建费用，而不是成交价、不是银行估值、不是房产税籍价值（<em>valor patrimonial tributário</em>）？</span></div></li>
      <li><div><strong>室内财物保额（<em>capital recheio</em>）。</strong><span>如果全部重新购置一遍，这个数字够吗？</span></div></li>
      <li><div><strong>地震保障。</strong><span>是否包含？如果包含，保额与自负额是多少？如果不包含，明确知道这是一个选择，而不是一次遗漏。</span></div></li>
      <li><div><strong>除外责任（<em>exclusões</em>）。</strong><span>至少读清楚水渍、逐渐渗漏、维护不足、施工这几项的写法。</span></div></li>
      <li><div><strong>自负额（<em>franquia</em>）。</strong><span>是固定金额还是百分比？两者并列时按哪一项适用？水渍的自负额常常单独更高。</span></div></li>
      <li><div><strong>贵重物品。</strong><span>首饰、手表、艺术品是按约定价值逐项列明，还是受室内财物保额的百分比分项限额约束？是否附带安防条件？</span></div></li>
      <li><div><strong>空置条款。</strong><span>连续无人居住多少天之后保障受限？这个天数与您的实际使用方式是否吻合？</span></div></li>
      <li><div><strong>出租用途。</strong><span>如果房产会出租（长租或短租），保单上是否写明？没写明就等于没有。</span></div></li>
      <li><div><strong>民事责任。</strong><span>额度是否与家业相称？范围是否全球有效？抗辩费用是否在保额之外？</span></div></li>
      <li><div><strong>投保人与被保险人信息。</strong><span>姓名拼写、NIF、房产地址是否与产权文件一致？共同持有时是否两人都在保单上？</span></div></li>
      <li><div><strong>房贷受益人条款。</strong><span>如果有贷款，银行是否已按要求列为受益人？</span></div></li>
      <li><div><strong>生效日期。</strong><span>保障从哪一天开始？签署产权转让书（<em>escritura</em>）当天必须已经生效。</span></div></li>
    </ol>
    <div class="callout">
      <span class="callout-label">最值得问的一个问题</span>
      不是“这份保单多少钱”，而是“这份保单不保什么”。欢迎把您现有的保单发给我们，我们会以书面形式指出其中的缺口。能立刻具体回答后一个问题的人，通常真的读过条款。
    </div>
  </div>
</section>

<section class="section tint" aria-labelledby="women-de-zuoyong">
  <div class="container narrow article-body">
    <h2 id="women-de-zuoyong">我们在这件事里做什么</h2>
    <p>Adler &amp; Rochefort 是面向高净值家庭的私人客户保险代理机构（ASF 注册号 425591790/3），在里斯本和拉各斯设有办公室，服务葡萄牙与西班牙的客户。在房屋保险上，从首次联系到理赔由同一位顾问负责，工作分三段：</p>
    <ul>
      <li><strong>投保前。</strong>安排现场查勘或估算重建费用、确认室内财物保额、将贵重物品按约定价值列明、确认地震等可选保障、把实际使用方式（自住、第二居所、出租）写进保单，并在签字前用英语书面说明保额、自负额、主要除外责任与报案时限。</li>
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
