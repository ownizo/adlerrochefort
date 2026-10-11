/**
 * High-value home conditions (October 2026), Simplified Chinese — four pages.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';
import { sec, ul, p, PUBLISHED_OCT } from '../lib/hnw-oct-sections.mjs';
import { homeSlug, homeUrl } from '../lib/hnw-home-urls.mjs';

const C = 'zh-CN';
const base = (key, crumb) => ({
  slug: homeSlug(key, C), url: homeUrl(key, C), cluster: key,
  published: PUBLISHED_OCT, modified: PUBLISHED_OCT,
  breadcrumb: [...BREADCRUMB_ROOT, { name: crumb }],
  schemaType: 'Article', formBranch: 'ZH · Home', formCta: '提交咨询',
});
const rel = (key, label) => ({ url: homeUrl(key, C), label });
const NOTE = sec('plain', 'notice', '重要提示', p('本页为保险中介提供的一般性信息，并非个人建议。保障范围取决于保险公司的核保以及实际签发保单的条款。'));

export const HOME_PAGES = [
  {
    ...base('home-conditions', '高价值住宅：保单条件'),
    title: '葡萄牙与西班牙高价值住宅保险：保单条件 | Adler & Rochefort',
    description: '高净值家庭住宅保险在葡萄牙和西班牙带来的不同：保证重建、不适用比例赔付、大额损失免除免赔额、替代住所等。',
    keywords: '葡萄牙 豪宅保险, 西班牙 别墅保险, 高净值 住宅保险, 不适用比例赔付, 保证重建, 替代住所',
    eyebrow: 'Private Clients · 住宅',
    h1: '葡萄牙与西班牙高价值住宅保险：逐条解读保单条件',
    standfirst: '普通住宅保险是为一般房屋设计的。对于阿尔加维或马贝拉的别墅，它恰恰在损失重大时暴露出局限。我们代理的 Private Clients 条款则从相反的方向设计。',
    pullquote: '比例赔付规则不是在出险当天谈判的，而是事先就排除。',
    formHeading: '获取保单的书面评估',
    formSubject: '高价值住宅 — 保单条件',
    formIntro: '请发送现有保单。我们会以英文书面逐条回复：您已有什么、缺少什么，以及出险时意味着什么。',
    formPlaceholder: '例如：阿尔加维的别墅，带客房和泳池，银行附送的保单，艺术品和手表未单独列明。',
    sections: [
      sec('plain', 'sum', '保额：现场评估与保证重建', ul([
        '<strong>免费现场评估：</strong>保险公司的风险顾问确定重建成本，建议家财和贵重物品保额，并提出防损建议。',
        '<strong>保证重建：</strong>接受评估建议后，即使重建费用超过保额，全损后房屋也会重建。',
        '<strong>不适用比例赔付：</strong>部分损失全额赔付，不因不足额投保而打折。',
        '<strong>真实重建成本：</strong>相同设计与材料品质、专业费用、新的建筑法规要求、清理残骸，并每年自动指数调整。',
      ])),
      sec('tint', 'grounds', '房屋、附属建筑与土地', ul([
        '<strong>其他建筑</strong>——客房、车库、围墙——额外按房屋保额的 20% 承保，挡土墙和围墙不另设分项限额。',
        '<strong>树木、灌木与草坪</strong>最高 10%；<strong>地基加固</strong>另按损失的 10% 赔付。',
        '<strong>渗漏查找不设分项限额</strong>（水、燃气、取暖油），并赔付流失的水或油。',
        '<strong>现代住宅：</strong>补贴漏水检测系统、重建时加装太阳能或地热、风暴停电后的发电机；钥匙丢失换锁不设限额、无免赔额；家庭成员永久残疾时的住宅改造。',
      ])),
      sec('plain', 'accommodation', '房屋无法居住时', ul([
        '<strong>同等标准的替代住所</strong>，包括宠物和马匹，直至房屋恢复可居住，无免赔额，房屋部分不设固定期限。',
        '<strong>租金损失</strong>以及因邻居物业受损而被当局<strong>强制疏散</strong>。',
      ])),
      sec('tint', 'contents', '家财：在家与在外', `${ul([
        '<strong>全球一切险</strong>——无需另购行李险。',
        '<strong>最高超出家财保额 25%</strong>；新旧置换不扣折旧；访客及家政人员物品；新购物品自动保障 90 天；家庭活动取消及帐篷租赁。',
      ])}
${p('注意：未单独列明的家财对现金、珠宝手表、银器、收藏品和葡萄酒设有特别限额。贵重物品应按约定价值单独列明。')}`),
      sec('plain', 'claim', '理赔', ul([
        '<strong>大额损失免除免赔额：</strong>单次超过 10,000 欧元的承保损失不适用基本免赔额。',
        '<strong>赔付方式自选：</strong>现金赔付，或由您选择的供应商和工匠修复，不扣减。',
        '<strong>紧急维修</strong>在保额之外支付，由保险公司自行处理理赔。',
      ])),
      NOTE,
    ].join('\n'),
    faqTitle: '高价值住宅：常见问题',
    faq: [
      { q: '是否适用比例赔付？', a: '<p>在我们代理的 Private Clients 条款中不适用：部分损失全额赔付。</p>' },
      { q: '替代住所赔付多久？', a: '<p>房屋部分直至恢复可居住为止，无免赔额。</p>' },
    ],
    related: [rel('art-beyond', '超越约定价值的艺术品与珠宝保障'), rel('family-protection', '住宅保险中的家庭保障'), rel('home-declare', '需要告知保险公司的事项'), { url: '/zh/home-insurance-portugal/', label: '葡萄牙住宅保险' }],
  },
  {
    ...base('art-beyond', '艺术品与珠宝'),
    title: '超越约定价值的艺术品与珠宝保障 | Adler & Rochefort',
    description: '约定价值只是起点：低估保护、产权瑕疵、委托创作、借展与新购藏品——Private Clients 保单如何处理。',
    keywords: '葡萄牙 艺术品保险, 西班牙 艺术品保险, 约定价值 艺术品, 产权瑕疵 保险, 借展 保险, 珠宝保险',
    eyebrow: 'Private Clients · 艺术与收藏',
    h1: '超越约定价值的艺术品与珠宝保障：低估、来源、委托与借展',
    standfirst: '按约定价值为重要藏品投保是第一原则。我们代理的 Private Clients 条款更进一步。',
    pullquote: '估价报告上的日期，是您保障的一部分。',
    formHeading: '获取收藏保障的书面评估',
    formSubject: '艺术品与珠宝',
    formIntro: '请发送清单、估价日期和现有保单。我们会书面说明今天能赔多少。',
    formPlaceholder: '例如：2019 年估价的中国当代艺术作品、未估价的手表、一件借给展览的作品。',
    sections: [
      sec('plain', 'market', '当市场上涨时', ul([
        '<strong>艺术品：</strong>若列明作品价值高于保额，且在损失前五年内经专业估价，保单按市场价值赔付，最高为保额的两倍，额外部分以 500 万欧元为上限。',
        '<strong>珠宝、手表及其他：</strong>同一原则，估价有效期为两年，以该类别总保额为限。',
      ])),
      sec('tint', 'partial', '部分损失与贬值', p('赔付修复费用（不扣折旧）以及修复后仍存在的价值损失。成对或成套的艺术品或珠宝，可交出剩余部分，按整套赔付。')),
      sec('plain', 'title', '产权瑕疵', p('如第三方主张投保期间购入的作品系被盗或从未合法出售，保单支付抗辩的法律费用；若对方胜诉，赔付作品损失——设有年度限额，并以购买前对来源进行了合理核查为前提。')),
      sec('tint', 'commissions', '委托、借展与新购', ul([
        '<strong>创作中的作品</strong>在完成前受损，或因艺术家去世而未完成：赔付材料和约定的工费。',
        '<strong>借入的作品</strong>保障前七天；<strong>借出给博物馆的作品</strong>事先告知即可继续保障。',
        '<strong>新购藏品</strong>自动保障 90 天，最高为该类别保额的四分之一；<strong>家政人员盗窃</strong>在保障范围内。',
      ])),
      NOTE,
    ].join('\n'),
    faqTitle: '艺术品与珠宝：常见问题',
    faq: [{ q: '如果画作价值高于保额怎么办？', a: '<p>若有五年内的专业估价，按市场价值赔付，最高为保额两倍，额外部分以 500 万欧元为上限。</p>' }],
    related: [rel('home-conditions', '高价值住宅：保单条件')],
  },
  {
    ...base('family-protection', '家庭保障'),
    title: '住宅保险中的家庭保障 | Adler & Rochefort',
    description: '劫车、入室抢劫、跟踪骚扰、儿童被拐、网络欺凌与绑架相关费用：Private Clients 住宅保险中的家庭保障。',
    keywords: '家庭保障 保险, 劫车 保险, 入室抢劫 保险, 跟踪骚扰 保险, 绑架 费用 保险, 网络欺凌 保险',
    eyebrow: 'Private Clients · 家庭',
    h1: '住宅保险中的家庭保障：劫车、入室抢劫、跟踪骚扰与绑架费用',
    standfirst: '高净值家庭面临的某些风险与房屋本身无关。最好的住宅保险依然予以承保。',
    pullquote: '受保障的是您的家人，还是只有您的房子？',
    formHeading: '获取私密的书面评估',
    formSubject: '家庭保障',
    formIntro: '请发送住宅和责任保单。我们会私密地书面说明缺少的保障。',
    formPlaceholder: '例如：四口之家住在里斯本，经常出差，有司机和家政人员。',
    sections: [
      sec('plain', 'cover', '家庭保障涵盖什么', `${ul([
        '<strong>劫车</strong>——在汽车被盗或企图盗窃时，家庭成员被强行拉出或扣留。',
        '<strong>入室抢劫</strong>——家人或访客在场时，闯入者在住宅、临时住所、船上或房车内实施暴力或威胁。',
        '<strong>家外抢劫</strong>；由已受法院禁令约束者实施的<strong>跟踪骚扰</strong>。',
        '<strong>13 岁以下儿童被拐</strong>；在公共交通工具上被<strong>劫持</strong>超过四小时；<strong>空中及道路暴力</strong>事件。',
      ])}
${p('视事件而定：医疗费用、心理支持、休养、安保顾问与警卫、住宅安防升级、临时搬迁，以及永久伤残或身故的给付。全球有效，官方旅行警告国家除外。')}`),
      sec('tint', 'kidnap', '绑架：法律允许的范围', p('根据葡萄牙法律（第 72/2008 号法令第 14 条），绑架风险本身不得承保，但绑架后的<strong>费用</strong>可以：谈判专家、安保与公关顾问、家属差旅、律师、医疗与心理护理、收入损失以及线索奖励。')),
      sec('plain', 'cyber', '网络欺凌与声誉', p('若家庭成员在网上遭受同一人反复骚扰，导致失业、学校处分或缺勤超过一周：公关顾问、数字取证专家、网络安全顾问、声誉管理服务、工资损失及临时搬迁。')),
      sec('tint', 'liability', '配套的责任保障', `${ul(['全球家庭责任险最高 1000 万欧元，抗辩费用另计。', '高尔夫、蹦床与充气城堡、物业内的高尔夫球车和四轮摩托、雇主过错导致的家政人员受伤、信用卡及支票欺诈。'])}
${p('除外：26 英尺及以上或超过 50 马力的船只、有报酬的董事职务（D&amp;O）、职业活动及危险犬只。')}`),
      NOTE,
    ].join('\n'),
    faqTitle: '家庭保障：常见问题',
    faq: [{ q: '住宅保险真的承保劫车吗？', a: '<p>在我们代理的 Private Clients 条款中是的：包括医疗费用、心理支持和永久伤残给付等。</p>' }],
    related: [rel('home-conditions', '高价值住宅：保单条件'), { url: '/zh/liability-insurance-portugal/', label: '葡萄牙责任保险' }],
  },
  {
    ...base('home-declare', '告知义务'),
    title: '需要告知保险公司的事项 | Adler & Rochefort',
    description: '出租、装修、房屋空置、借展艺术品、安防变化：高价值住宅保险要求告知的事项，以及出险后应怎么做。',
    keywords: '住宅保险 告知义务 葡萄牙, 房屋空置 保险, 装修 告知 保险公司, 度假屋出租 保险',
    eyebrow: 'Private Clients · 住宅',
    h1: '需要告知保险公司的事项：高价值住宅保险背后的义务',
    standfirst: '这一领域被拒赔或减赔的案件，多数并非因为除外责任，而是因为情况发生变化却从未告知。以下是实用清单。',
    pullquote: '再好的保单，也可能因未告知的事项而失效。',
    formHeading: '由我们代为告知',
    formSubject: '告知保险公司',
    formIntro: '请告诉我们将发生的变化。我们会书面通知保险公司并向您确认条件。',
    formPlaceholder: '例如：春季将翻新厨房和浴室，1 月至 3 月房屋关闭无人居住。',
    sections: [
      sec('plain', 'before', '事先告知', ul(['居住情况变化——出租，包括短租。', '用途变化——在家经营或接待付费客人。', '预计费用超过 25 万欧元的施工。', '将艺术品或贵重物品借给画廊、博物馆或展会。'])),
      sec('tint', 'now', '发生后立即告知', `${ul(['房屋状况恶化，包括沉降或滑坡迹象。', '安防措施的任何变化——警报关闭、监控合同终止、保险箱移除。', '家庭成员职业重大变化、被起诉或定罪（交通除外）或破产。'])}
${p('风险增加须在 14 天内告知。')}`),
      sec('plain', 'empty', '房屋空置的月份', ul(['<strong>空置：</strong>房屋基本搬空超过 30 天且未告知，免赔额提高至保额的 5%。', '<strong>冰冻：</strong>无人居住超过 60 天，管道冻裂损失不予承保，除非保持供暖或排空管道。'])),
      sec('tint', 'after', '出险之后', ul(['尽快报案——盗窃或家庭保障事件还须报警。', '防止损失扩大，保留紧急维修发票；其他维修须事先同意。', '保留受损物品，准备附发票的清单，并在保险公司要求后 60 天内提交签字的损失证明。', '部分损失须在 180 天内开始修复，否则按扣除折旧后的重建成本赔付。', '未经书面同意，不得对第三方承认责任。'])),
      NOTE,
    ].join('\n'),
    faqTitle: '告知义务：常见问题',
    faq: [{ q: '出租房屋需要告知吗？', a: '<p>需要，且须事先告知，包括短租。保险公司可能调整条件或保费。</p>' }],
    related: [rel('home-conditions', '高价值住宅：保单条件'), { url: '/zh/home-insurance-spain/', label: '西班牙住宅保险' }],
  },
];
