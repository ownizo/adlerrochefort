/**
 * October 2026 HNW pages, Simplified Chinese (zh-CN).
 *   IPMI_PAGE          /zh/allianz-care-vs-cigna-global/          (cluster: ipmi)
 *   CLASSIC_CARS_PAGE  /zh/classic-car-insurance-portugal-spain/  (cluster: classic-cars)
 * Romanised slugs, as the rest of the cluster (see scripts/zh-cluster.data.mjs).
 */
import { BREADCRUMB_ROOT } from './shared.mjs';
import { sec, table, ul, p, PUBLISHED_OCT } from '../lib/hnw-oct-sections.mjs';

const cta = (text, label) => `${p(text)}
    <p><a href="#baojia" class="btn-cta">${label}</a></p>
    <p class="legal-note">本页为一般性信息。保障范围取决于保险公司对风险的核保以及实际签发保单的条款。</p>`;

export const IPMI_PAGE = {
  slug: 'allianz-care-vs-cigna-global',
  url: '/zh/allianz-care-vs-cigna-global/',
  cluster: 'ipmi',
  title: 'Allianz Care 与 Cigna Global 国际医疗保险比较 | Adler & Rochefort',
  description:
    'Allianz Care 还是 Cigna Global？为居住在葡萄牙和西班牙的家庭比较两款国际医疗保险：保障等级、美国保障、可选模块与核保。',
  keywords:
    'Allianz Care Cigna Global 比较, 葡萄牙国际医疗保险, 西班牙国际医疗保险, 海外华人医疗保险, 全球医疗保险 含美国, 葡萄牙黄金签证 医疗保险',
  eyebrow: '国际医疗 · 葡萄牙与西班牙',
  h1: 'Allianz Care 还是 Cigna Global：在葡萄牙和西班牙生活的家庭如何选择国际医疗保险',
  standfirst:
    '对许多家庭来说，一份葡萄牙或西班牙本地医疗保险就已足够。但如果您的生活分布在里斯本、上海、香港和纽约之间，或希望在每种疾病最好的医院接受治疗，就需要一份国际医疗保险。我们比较客户最常问到的两款计划。',
  published: PUBLISHED_OCT,
  modified: PUBLISHED_OCT,
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Allianz Care 与 Cigna Global' }],
  pullquote: '关键不在于哪份保险更好，而在于您希望在哪里接受治疗。',
  schemaType: 'Article',
  formHeading: '获取书面比较',
  formBranch: 'ZH · Health',
  formSubject: 'Allianz Care 与 Cigna Global',
  formCta: '提交咨询',
  formIntro:
    '请告诉我们需要投保的家庭成员、居住地，以及希望在哪些地方就医（包括中国或美国）。我们会以英文书面回复，附上为您配置的两款计划。',
  formPlaceholder:
    '例如：夫妻 46 岁和 44 岁，两个孩子，住在里斯本，经常回上海，希望保障区域包括美国。',
  sections: [
    sec('plain', 'local-vs-international', '本地保险还是国际保险？', `${p('葡萄牙和西班牙的私人医疗保险围绕本国的医院和诊所网络设计。对在居住地就医的人来说很好用，但对国际化生活的家庭有几个限制：')}
${ul([
      '<strong>年度限额</strong>按项目设定，日常就医足够，但对长期癌症治疗或复杂手术可能偏低。',
      '<strong>境外保障</strong>通常只限于旅行中的急诊，在其他国家的计划性治疗一般不在保障范围内。',
      '<strong>投保条件：</strong>在葡萄牙，保险公司要求投保人和每位被保险人都有葡萄牙税号（NIF）和地址，许多计划还设有最高投保年龄。',
    ])}
${p('国际医疗保险（IPMI）正好相反：年度限额以百万计；可在所选区域内接受计划性治疗——欧洲、全球（不含美国）或全球（含美国），包括中国；家庭再次搬迁时保单随之延续。医疗转运和送返是产品设计的一部分。')}`),
    sec('tint', 'allianz-care', 'Allianz Care：新的产品系列', `${p('Allianz Care 是安联旗下 Allianz Partners 的国际医疗保险品牌。2025 年 11 月推出新系列，面向在本国以外居住至少十二个月的个人和家庭，主要在欧盟和英国销售。')}
${ul([
      '<strong>三个核心计划：Base、Enhanced 和 Signature</strong>，均包含住院、单人病房和医疗送返。',
      '<strong>生育保障</strong>包含在 Enhanced 和 Signature 中，等待期十二个月。',
      '<strong>门诊和牙科</strong>为可选保障。',
      '<strong>癌症筛查、健康体检和激素替代治疗</strong>覆盖全系列；门诊精神科和心理治疗无等待期。',
      '除全球选项外，还提供<strong>仅限欧洲</strong>的保障区域。',
    ])}`),
    sec('plain', 'cigna-global', 'Cigna Global：模块化计划', ul([
      '<strong>三个核心保障等级：Silver、Gold 和 Platinum</strong>——住院、住院期间的专科治疗、癌症治疗和住院精神科治疗。Platinum 的年度限额最高，无固定上限。',
      '<strong>四个可选模块：</strong>国际门诊、国际医疗转运、国际健康与保健、国际视力与牙科。',
      '<strong>保障区域：</strong>全球（不含美国）或全球（含美国）。',
      '<strong>免赔额和共付比例</strong>可自选，并设有年度自付上限——这是调整保费的主要方式。',
      '<strong>生育保障</strong>包含在 Gold 和 Platinum 中，需投保满十二个月。',
    ])),
    sec('tint', 'comparison', '对比一览', `${table('Allianz Care 与 Cigna Global 对比', ['', 'Allianz Care', 'Cigna Global'], [
      ['核心等级', 'Base、Enhanced、Signature', 'Silver、Gold、Platinum'],
      ['住院、单人病房', '所有计划均含', '核心保障内'],
      ['医疗送返 / 转运', '所有计划均含送返', '可选医疗转运模块'],
      ['门诊', '可选', '可选模块'],
      ['牙科', '可选', '可选模块（含视力）'],
      ['生育', 'Enhanced、Signature，满 12 个月后', 'Gold、Platinum，满 12 个月后'],
      ['保障区域', '可选仅限欧洲，另有全球选项', '全球不含美国或含美国'],
      ['保费调整方式', '等级、区域、可选保障', '免赔额、共付、区域、模块'],
    ])}
${p('限额、等待期和除外责任因等级而异，以各保险公司的保障表为准。每份比较我们都会附上相关保障表。')}`),
    sec('plain', 'who', '哪款计划适合哪种家庭', ul([
      '<strong>生活重心在欧洲</strong>——在葡萄牙或西班牙居住，工作和孩子上学都在欧洲：Allianz Care 选择欧洲或全球不含美国的区域通常很合适，并已包含医疗送返。',
      '<strong>与美国有联系</strong>——在美国有房产，或孩子在美国读书：需要含美国的全球保障，两款计划在这一部分的保费差异最大，值得同时报价。',
      '<strong>与中国有联系</strong>——经常回国或希望在国内就医：选择全球区域，计划性治疗在中国同样可获保障，具体以计划条款为准。',
      '<strong>只保重大风险：</strong>Cigna Global 搭配较高的免赔额和共付比例。',
      '<strong>既往病史：</strong>两家公司都会审核健康问卷，可能将既往疾病列为除外或加收保费，结果可能不同。',
    ])),
    sec('tint', 'visa', '签证与居留', p(
      '在<strong>葡萄牙</strong>，国际医疗保险常被用来证明 D7、D8 等居留签证所需的医疗保障。申请<strong>西班牙非营利居留签证</strong>时，领事馆通常要求由获准在西班牙经营的保险公司承保、保障完整且无共付和等待期——并非所有国际医疗保险的配置都符合，需要针对签证进行设置。'
    )),
    sec('plain', 'contact', '为您的家庭配置两款计划', cta('Adler &amp; Rochefort 同时代理 Allianz Care 和 Cigna Global。我们会根据您家庭的实际情况配置两款计划，并以书面形式说明差异，附上保障表。', '获取书面比较')),
  ].join('\n'),
  faqTitle: 'Allianz Care 与 Cigna Global：常见问题',
  faq: [
    { q: 'Allianz Care 和 Cigna Global 哪个更好？', a: '<p>没有绝对的好坏。Allianz Care 所有计划都包含住院和医疗送返，并提供仅限欧洲的区域；Cigna Global 为模块化设计，免赔额和共付灵活，可选择是否包含美国。关键在于家庭居住、出行和希望就医的地方，以及每家公司对既往病史给出的条件。</p>' },
    { q: '我需要美国保障吗？', a: '<p>只有在您希望于旅行急诊以外在美国接受治疗时才需要。含美国的区域在两款计划中都是最贵的。</p>' },
    { q: '在中国就医也能理赔吗？', a: '<p>选择全球区域时，在中国的计划性治疗也在保障范围内，以计划条款为准。</p>' },
    { q: '生育从一开始就有保障吗？', a: '<p>没有。只有较高等级——Allianz Care 的 Enhanced 和 Signature、Cigna Global 的 Gold 和 Platinum——且需投保满十二个月。</p>' },
  ],
  related: [
    { url: '/zh/health-insurance-portugal/', label: '葡萄牙医疗保险' },
    { url: '/zh/health-insurance-spain/', label: '西班牙医疗保险' },
    { url: '/zh/classic-car-insurance-portugal-spain/', label: '经典车与高价值汽车' },
    { url: '/zh/moving-to-portugal/', label: '移居葡萄牙' },
  ],
};

export const CLASSIC_CARS_PAGE = {
  slug: 'classic-car-insurance-portugal-spain',
  url: '/zh/classic-car-insurance-portugal-spain/',
  cluster: 'classic-cars',
  title: '葡萄牙与西班牙的经典车和高价值汽车保险 | Adler & Rochefort',
  description:
    '在葡萄牙和西班牙为经典车或高价值汽车投保：历史车辆认证、约定价值、收藏车库、赛道日与外国车牌。',
  keywords:
    '葡萄牙 经典车保险, 西班牙 老爷车保险, 约定价值 汽车保险, 收藏车 保险, 超跑 保险 马贝拉, 西班牙 历史车辆',
  eyebrow: 'Private Clients · 汽车',
  h1: '葡萄牙与西班牙的经典车和高价值汽车：历史身份、约定价值与收藏',
  standfirst:
    '这里的气候善待车身，山路仿佛为六十年代的跑车而建，太阳海岸的超级跑车密度几乎居欧洲之首。普通车险并不是为这些车设计的。',
  published: PUBLISHED_OCT,
  modified: PUBLISHED_OCT,
  breadcrumb: [...BREADCRUMB_ROOT, { name: '经典车与高价值汽车' }],
  pullquote: '全损之后，普通车险赔的是一辆旧车的价钱；经典车保单赔的是您这辆车的价值。',
  schemaType: 'Article',
  formHeading: '获取车辆保障的书面评估',
  formBranch: 'ZH · Motor',
  formSubject: '经典车与高价值汽车',
  formCta: '提交咨询',
  formIntro:
    '请发送车辆清单——品牌、型号、年份、停放地点和使用方式——以及已有的估价。我们会以英文书面回复：现有保单全损时赔多少，以及应该赔多少。',
  formPlaceholder:
    '例如：一辆 1972 年的保时捷 911、一辆新款超跑，停放在阿尔加维的封闭车库，每年参加两次车友会活动。',
  sections: [
    sec('plain', 'portugal', '葡萄牙：具有历史价值的车辆', p(
      '在葡萄牙，车龄至少三十年、已停产、车况良好且基本保持原厂状态的汽车，可由认可机构认证为 <em>veículo de interesse histórico</em>（具有历史价值的车辆），包括 ACP Clássicos、葡萄牙古董车俱乐部和卡拉穆卢博物馆。自 2018 年起，车龄超过三十年的认证车辆免于定期年检；在特定条件下还可免缴车辆通行税（IUC），需逐案确认。对保险而言，认证证书主要是原厂状态和车况的证明。'
    )),
    sec('tint', 'spain', '西班牙：新的历史车辆法规', ul([
      '自 2024 年 10 月 1 日起，西班牙施行新的《历史车辆条例》（Reglamento de Vehículos Históricos）。',
      '制造或首次登记至少三十年、已停产且保持原厂状态的车辆可认定为历史车辆。',
      '许多车辆保留普通车牌，并在挡风玻璃上贴黄色“H”标志；另一些在出具技术报告后于交通局登记为历史车辆。',
      'ITV 年检频率降低：30 至 40 年每两年一次，40 至 45 年每三年一次，45 年以上每四年一次；60 年以上免检。',
    ])),
    sec('plain', 'value', '约定价值，而非市场价值', p(
      '经典车或高价值汽车保单中最重要的条款是赔偿基础。普通保单全损时按<strong>市场价值</strong>赔付，由保险公司在事故后确定——对经典车几乎总是偏低。<strong>约定价值</strong>在投保时依据近期估价、照片和文件确定，全损时即按此金额赔付。约定价值应每隔几年以及每次修复后重新评估。对于现代超跑，关注点则是前几年的新车价值赔付、选装配置、原厂零件和授权维修。'
    )),
    sec('tint', 'collection', '收藏车库，而非一份车辆清单', p(
      '收藏保单把整个车库视为一体：一份保单涵盖所有车辆和约定价值；停用或修复中的车辆保障火灾、盗窃和损坏，无需为不上路的车支付行驶保障；指定驾驶人；拖车或专业运输途中的保障；车库本身的消防和安防也是风险的一部分。部分豪华车产品只与房屋保险一并承保。'
    )),
    sec('plain', 'use', '车辆的使用方式', ul([
      '<strong>里程与用途：</strong>经典车保单通常以有限的年行驶里程和休闲用途为前提。',
      '<strong>公路上的定速拉力赛、选美赛和车友会活动</strong>通常可保；计时比赛和赛道不在其内。',
      '<strong>赛道日</strong>——阿尔加维赛道、埃斯托里尔、Ascari——几乎被所有公路保单除外，需要单独投保。',
      '<strong>无钥匙盗窃：</strong>保险公司会询问车库、定位设备和钥匙的保管方式。',
    ])),
    sec('tint', 'plates', '外国车牌与搬迁', p(
      '在葡萄牙和西班牙成为居民后，需在规定期限内为车辆重新登记——葡萄牙需办理进口手续并缴纳 ISV，西班牙则在交通总局（DGT）登记。在此之前，必须弄清原保单允许什么、多长时间，以及出险后如何处理。对经典车而言，搬迁往往是同时办理登记和历史身份的好时机。'
    )),
    sec('plain', 'contact', '书面评估', cta('请发送车辆清单、估价和现有保单。我们会书面说明哪些已获保障、缺少什么以及可选方案。', '获取书面评估')),
  ].join('\n'),
  faqTitle: '经典车与高价值汽车：常见问题',
  faq: [
    { q: '经典车需要特殊保险吗？', a: '<p>所有上路车辆都必须投保强制第三者责任险。区别在于其余部分：经典车保单按约定价值承保，以有限的休闲使用为前提，并涵盖车友会活动。</p>' },
    { q: '约定价值和市场价值有什么区别？', a: '<p>约定价值在投保时依据估价确定，全损时按此赔付；市场价值由保险公司在事故后确定，对经典车通常低得多。</p>' },
    { q: '赛道日有保障吗？', a: '<p>公路保单几乎从不承保，需要为赛道日单独投保。</p>' },
  ],
  related: [
    { url: '/zh/car-insurance-portugal/', label: '葡萄牙汽车保险' },
    { url: '/zh/car-insurance-spain/', label: '西班牙汽车保险' },
    { url: '/zh/allianz-care-vs-cigna-global/', label: 'Allianz Care 与 Cigna Global' },
    { url: '/zh/golf-homes-portugal-spain/', label: '高尔夫与高端住宅' },
  ],
};
