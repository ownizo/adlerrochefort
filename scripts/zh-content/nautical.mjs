/**
 * /zh/marinas-yachts-portugal-spain/ — the sea, the marinas and yachting in
 * Portugal and Spain, the waterfront homes, and protecting the yacht, the
 * home and the family (cluster key `nautical`).
 *
 * Search intent: 葡萄牙游艇码头 / 西班牙游艇 / 马略卡游艇 / 海景房 — a Chinese
 * yacht owner or sailor, or a family buying a waterfront home, who knows the
 * yacht scene from Hong Kong, Shenzhen or Sanya.
 *
 * Subject first (~45% destinations and sailing, ~30% homes and berths, ~25%
 * protection). Legal specifics — compulsory third-party cover for recreational
 * craft, charter registration, MLC for commercial yachts, berth concessions —
 * kept general. Formal 您. Insurer-neutral, price-free.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';

const SECTIONS = `
<section class="section plain" aria-labelledby="cong-xianggang">
  <div class="container narrow article-body">
    <h2 id="cong-xianggang">从维多利亚港到大西洋</h2>
    <p>熟悉香港游艇会、深圳湾或三亚游艇港的人，对游艇生活并不陌生：周末出海、在港湾里停一晚、回到同一个泊位。伊比利亚半岛提供的是另一种尺度。一边是大西洋——稳定的信风、绵长的涌浪，以及历史上向西通往海岛与加勒比海的航线；另一边是西地中海——巴利阿里群岛、可以过夜锚泊的小海湾，以及本身就像一座小城的游艇码头。两者之间，是欧洲一些最美的临水住宅。</p>
    <p>风也不同。夏季，葡萄牙西海岸吹着稳定的北风 <em>nortada</em>，南下的船可以连日满帆；直布罗陀海峡里，东风 <em>levante</em> 与西风 <em>poniente</em> 交替，往来于地中海与大西洋之间的船要按风向选择通过的时机；马略卡北部与加泰罗尼亚的 <em>tramontana</em>，能在几个小时里把平静的海面变得波涛汹涌。地中海的主要航海季从春天持续到十月，多数游艇在帕尔马、维拉摩拉或拉各斯的码头或岸上过冬、保养。</p>
    <p>本文先谈海与港口，再谈临水住宅与泊位，最后谈如何为游艇、房屋与家人安排保障。</p>
  </div>
</section>

<section class="section tint" aria-labelledby="putaoya-matou">
  <div class="container narrow article-body">
    <h2 id="putaoya-matou">葡萄牙：大西洋，从阿尔加维到亚速尔群岛</h2>
    <h3>阿尔加维：维拉摩拉、拉各斯与波尔蒂芒</h3>
    <p><em>Vilamoura</em> 码头是葡萄牙规模最大、最成熟的游艇码头之一：数百个泊位，环水而建的步道、餐厅与住宅，附近就是“金三角”的高尔夫球场。西边的 <em>Lagos</em> 是驶向大西洋的经典出发点，短途航程即可抵达 Ponta da Piedade 的礁岩海湾。阿拉德河口的 <em>Portimão</em> 则补全了这段海岸。</p>
    <h3>里斯本、卡斯凯什与特罗亚</h3>
    <p>在里斯本，航海是城市的一部分：4月25日大桥下的 <em>Doca de Alcântara</em>，以及城东宽阔的特茹河口边的 <em>Parque das Nações</em> 码头。河口处的 <em>Cascais</em> 码头举办过多项在葡萄牙进行的国际帆船赛事，午后的大西洋风相当可靠。越过萨杜河口，<em>Tróia</em> 面向半岛与孔波塔的海滩。</p>
    <h3>马德拉与亚速尔群岛</h3>
    <p>马德拉岛上有丰沙尔市中心的 <em>Funchal</em> 码头，以及阳光充足的西南海岸的 <em>Calheta</em>。在大洋中央，亚速尔群岛法亚尔岛上的 <em>Horta</em>，是横渡大西洋的船只几乎必经的一站；船员们有一个传统：在码头的堤墙上画下自己船的名字，然后继续下一段航程。</p>
    <h3>大西洋航线</h3>
    <p>每年秋天，数以百计的游艇从伊比利亚半岛南下加那利群岛，再向西横渡到加勒比海，其中许多参加 <em>ARC</em>（大西洋横渡拉力赛）——它在飓风季结束后的十一月从大加那利岛的拉斯帕尔马斯出发。春天，一些船经亚速尔群岛返航。在这条航线上，“出海”不再是一次离港，而是一整季的海上生活。</p>
  </div>
</section>

<section class="section plain" aria-labelledby="xibanya-matou">
  <div class="container narrow article-body">
    <h2 id="xibanya-matou">西班牙：从巴利阿里群岛到加那利群岛</h2>
    <h3>马略卡岛帕尔马</h3>
    <p>帕尔马大概是地中海的游艇之都。城市海湾里有 <em>Club de Mar</em> 与承办国王杯帆船赛（<em>Copa del Rey</em>）的 <em>Real Club Náutico de Palma</em>；西边卡尔维亚海岸有 <em>Puerto Portals</em> 与 <em>Port Adriano</em>。周边是船厂、维修服务和每年的游艇展，而整座岛屿——北部海湾、卡布雷拉、邻近的梅诺卡——都在一天的航程之内。</p>
    <h3>伊维萨岛</h3>
    <p>正对老城的 <em>Marina Ibiza</em> 与 <em>Ibiza Magna</em>，是往返伊维萨与福门特拉之间度过夏天的基地——清澈的海水，夜晚停泊在没有公路可达的小海湾里。</p>
    <h3>太阳海岸：巴努斯港与索托格兰德</h3>
    <p>马贝拉旁的 <em>Puerto Banús</em> 是南部海岸最知名的码头，大型游艇停靠在中央码头上。再往西，<em>Sotogrande</em> 码头是一个完整社区的一部分——临水住宅、高尔夫球场与马球俱乐部——更像居住地，而不是观光步道。索托格兰德的高尔夫，详见<a href="/zh/golf-homes-portugal-spain/">高尔夫一文</a>。</p>
    <h3>巴塞罗那、瓦伦西亚与布拉瓦海岸</h3>
    <p>2024 年，巴塞罗那承办了第 37 届美洲杯帆船赛；市中心的 <em>OneOcean Port Vell</em> 是地中海停靠大型游艇的代表性设施之一。瓦伦西亚曾于 2007 年和 2010 年承办美洲杯。再往北是布拉瓦海岸——礁岩海湾、渔村与小港，一直延伸到法国边境。</p>
    <h3>加那利群岛</h3>
    <p>大加那利岛的拉斯帕尔马斯是 ARC 的起点，每到秋季，码头里停满了准备横渡的游艇。全年而言，群岛在温和的气候中提供真正的大洋航行。</p>
  </div>
</section>

<section class="section tint" aria-labelledby="linshui-zhuzhai">
  <div class="container narrow article-body">
    <h2 id="linshui-zhuzhai">临水住宅与泊位</h2>
    <p><strong>别墅与码头公寓。</strong>在维拉摩拉、索托格兰德、Puerto Portals 或 Port Adriano，许多住宅就建在水边：阳台下方就是码头的公寓，步行即可抵达自家游艇泊位的别墅。在个别地方，尤其是索托格兰德，还有带私人栈桥或泊位的住宅——前提是规划与许可允许。</p>
    <p><strong>泊位不是普通房产。</strong>在两国的大多数码头，所购买的是在码头经营特许权框架内对某个泊位的长期使用权，而不是一片水域的完整产权。因此需要仔细阅读特许权条款与码头章程：期限到何时、能否转让、各方承担什么责任。</p>
    <p><strong>业主组织与章程。</strong>与球场社区一样，码头公寓楼与海滨社区也有业主组织——葡萄牙的 <em>condomínio</em>、西班牙的 <em>comunidad de propietarios</em>——为公共部分投保，有时也包括公共栈桥与浮码头。</p>
    <p><strong>船员与人员。</strong>较大的游艇配有船长，有时还有固定船员；临水住宅则配有物业经理、园丁与家政。多数海外业主并不常年在此，两次到访之间，游艇与房子都交给别人照看。</p>
  </div>
</section>

<section class="section plain" aria-labelledby="baozhang-youting">
  <div class="container narrow article-body">
    <h2 id="baozhang-youting">为游艇安排保障</h2>
    <p><strong>船壳与机器，按约定价值。</strong>较高价值的游艇，船体、主机与设备按事先约定的价值投保——全损时不在折旧上争执。约定价值需要及时更新，尤其是在翻新或更换主机之后。</p>
    <p><strong>第三者责任。</strong>在葡萄牙和西班牙，休闲船艇都须投保第三者责任险。法律要求的只是最低标准；在拥挤的码头里，一艘大型游艇的责任限额应当与它可能造成的损害相称。</p>
    <p><strong>船长与船员。</strong>雇用职业船长或固定船员，您就是雇主，须承担相应的义务。商业游艇还适用国际《海事劳工公约》（<em>MLC</em>）的要求。保单应当涵盖船员以及对船员的责任。</p>
    <p><strong>自用与包租。</strong>对外包租，即使是短期，也需要商业登记与许可，以及为商业用途设计的保障。自用保单不会承担因有偿包租而产生的索赔。</p>
    <p><strong>航行区域与限制。</strong>保单规定了可以航行的区域：地中海、大西洋沿岸、各海岛。横渡加勒比海需要扩展，有时还附有关于飓风季以及游艇在此期间所在位置的条件。冬季停航——上岸或在水中——也需要申报。</p>
    <p><strong>附属艇、水上摩托与水上玩具。</strong>附属小艇、水上摩托与各类设备本身就是独立的船艇，有时各有其强制保险要求，须确认已列入保单、使用者的责任也已涵盖。船上的个人物品——手表、首饰、潜水装备——同样需要在保单中有所安排。</p>
    <p><strong>码头。</strong>码头章程通常要求一定限额以上的责任保险，并由船东承担游艇对码头设施、邻船与设备造成的损害。</p>
  </div>
</section>

<section class="section tint" aria-labelledby="baozhang-linshui">
  <div class="container narrow article-body">
    <h2 id="baozhang-linshui">为临水住宅与家人安排保障</h2>
    <p><strong>风暴、洪水与盐雾。</strong>临水住宅面对冬季风暴、海浪冲击，以及盐雾对设备、栏杆和门窗的腐蚀。在西班牙，特大洪水与海浪冲击由 <em>Consorcio de Compensación de Seguros</em> 按您保单的保额承担；在葡萄牙，风暴与洪水由保单本身处理，地震则通常是需要单独选择的附加保障。在两国，盐雾造成的渐进性损坏一般被视为维护问题，而不是保险事故。</p>
    <p><strong>栈桥与浮码头。</strong>私人栈桥既是需要投保的财产，也是责任来源——客人滑倒、邻居的船受损。须确认它已列入房屋保单或游艇保单。</p>
    <p><strong>家庭责任与收藏。</strong>保额数百万欧元、全球有效、抗辩费用另付的家庭个人责任保障，以及按约定价值承保的艺术品与首饰——在家中、船上与旅途中都适用。详见<a href="/zh/home-insurance-spain/">西班牙</a>与<a href="/zh/home-insurance-portugal/">葡萄牙</a>高价值房屋保险，以及<a href="/zh/liability-insurance-spain/">家庭责任保险</a>。</p>
  </div>
</section>

<section class="section plain" aria-labelledby="qingdan-youting">
  <div class="container narrow article-body">
    <h2 id="qingdan-youting">游艇与临水住宅：简短核对清单</h2>
    <ul>
      <li>船体、主机与设备的约定价值是否最新。</li>
      <li>第三者责任限额与游艇规模相称，高于法定最低标准。</li>
      <li>航行区域符合计划，包括横渡与冬季停航。</li>
      <li>船长与船员：保障与雇主义务。</li>
      <li>如有包租：商业登记与商业保障。</li>
      <li>附属艇、水上摩托与船上个人物品。</li>
      <li>住宅：风暴与洪水、栈桥与浮码头，以及西班牙 Consorcio 的承保范围。</li>
    </ul>
  </div>
</section>`;

export const NAUTICAL_PAGE = {
  slug: 'marinas-yachts-portugal-spain',
  url: '/zh/marinas-yachts-portugal-spain/',
  cluster: 'nautical',
  title: '葡萄牙与西班牙的游艇码头与游艇生活 | Adler & Rochefort',
  description:
    '葡萄牙与西班牙游艇码头：维拉摩拉、卡斯凯什、亚速尔、帕尔马、伊维萨与巴努斯港，临水住宅与泊位，以及如何为游艇、房屋与家人安排保障。',
  keywords:
    '葡萄牙游艇码头, 西班牙游艇, 马略卡游艇, 帕尔马码头, Puerto Banús, Vilamoura, 游艇保险, 西班牙船艇保险, 临水住宅, 海景别墅, 泊位, ARC 横渡大西洋',
  eyebrow: '葡萄牙与西班牙 · 游艇与航海',
  h1: '葡萄牙与西班牙的码头与游艇：海、港口与临水的家',
  standfirst:
    '从维拉摩拉、卡斯凯什与亚速尔群岛的大西洋，到帕尔马、伊维萨与巴努斯港——伊比利亚半岛最重要的航海目的地、水边的住宅，以及为游艇和家人安排保障时需要知道的事。',
  published: '2026-09-27T09:00:00+00:00',
  modified: '2026-09-27T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: '码头与游艇' }],
  pullquote: '游艇与临水的家，面对的是同一片海。为它们安排保障，也应当出自同一番思考。',
  schemaType: 'Article',
  formHeading: '游艇与临水住宅：书面评估',
  formBranch: 'ZH · Other',
  formSubject: '游艇、码头与临水住宅',
  formCta: '提交咨询',
  formIntro:
    '请告诉我们游艇的长度、年份、停泊地点与航行范围，以及临水住宅的情况；如有现有保单，也请一并发给我们。我们会以英语书面回复：目前保了什么、缺口在哪里、应当补充什么。',
  formPlaceholder:
    '例如：一艘 16 米帆船停在帕尔马，雇有职业船长，计划十一月横渡加勒比海；另在 Port Adriano 有一套码头公寓。',
  sections: SECTIONS,
  faqTitle: '码头、游艇与临水住宅：常见问题',
  faq: [
    {
      q: '在葡萄牙和西班牙，游艇第三者责任险是强制的吗？',
      a: '<p>是的。两国都要求休闲船艇投保第三者责任险。法律规定的限额只是最低标准，大型游艇应当按其可能造成的损害确定限额。码头通常也有自己的最低限额要求。</p>',
    },
    {
      q: '我们买了一个泊位，它是我们的产权吗？',
      a: '<p>在大多数码头，所购买的是码头经营特许权框架内的长期使用权，而不是完整产权。因此需要仔细阅读特许权条款与码头章程——权利期限、能否转让，以及对码头设施和邻船损害的责任。</p>',
    },
    {
      q: '我们不用游艇时，可以对外包租吗？',
      a: '<p>对外包租需要商业登记与许可，以及为商业用途设计的保障。自用保单不会承担因有偿包租而产生的索赔。如果有包租计划，建议在第一次咨询时就说明。</p>',
    },
    {
      q: '我们计划横渡大西洋，保单涵盖吗？',
      a: '<p>不一定。保单规定了航行区域，横渡加勒比海需要扩展，有时还附有关于飓风季——通常为六月至十一月底——以及游艇在此期间所在位置的条件。这些应在出发前安排好，而不是到了拉斯帕尔马斯才处理。</p>',
    },
    {
      q: '我们的房子在水边，保险上有什么不同？',
      a: '<p>风暴、海浪冲击与洪水是主要风险；在西班牙，特大洪水与海浪冲击由 <em>Consorcio</em> 承担。私人栈桥或浮码头须列入保单，既作为财产，也作为责任来源。盐雾造成的渐进性损坏一般被视为维护问题，而非保险事故。</p>',
    },
  ],
  related: [
    { url: '/zh/golf-homes-portugal-spain/', label: '葡萄牙与西班牙高尔夫：名场、社区与住宅' },
    { url: '/zh/home-insurance-spain/', label: '西班牙高价值房屋保险' },
    { url: '/zh/home-insurance-portugal/', label: '葡萄牙高价值房屋保险' },
    { url: '/zh/liability-insurance-spain/', label: '西班牙家庭责任保险' },
    { url: '/zh/liability-insurance-portugal/', label: '葡萄牙民事责任保险' },
  ],
};
