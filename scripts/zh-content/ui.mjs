/**
 * Interface copy for the Chinese cluster: chrome, footer, form labels,
 * validation messages, cookie banner.
 *
 * Shapes are dictated by scripts/lib/market-cluster.mjs and shared with
 * Poland, Sweden and Denmark; the words are Simplified Chinese, written for a
 * mainland reader — full-width punctuation, “ ” rather than 「」, and no
 * European sentence scaffolding carried over from the Nordic files.
 *
 * Two decisions in here are deliberate rather than stylistic:
 *
 *   * `insurance_type` values stay English and market-tagged ("ZH · Home")
 *     because netlify/functions/submission-created.mjs builds the notification
 *     subject from this field. The visible label is for the reader; the value
 *     is for the inbox in Lagos. The branch field IDs are the same ones the
 *     other three markets use, so QUOTE_LABELS_EN already covers them and the
 *     Chinese form needed no new labels in the notification function.
 *
 *   * `prefLangOptions` offers English and Portuguese only. Brief §22: the
 *     site may be in Chinese while support runs in the languages the agency
 *     actually works in, and offering Chinese correspondence here would be a
 *     promise the repository cannot support. What identifies the enquiry as a
 *     Chinese-language one is the `language` attribution field (zh), not a
 *     service claim.
 */

export const ZH_BRANCHES = [
  {
    value: 'ZH · Home',
    label: '房屋保险（自住、第二居所或出租）',
    legend: '关于这处房产',
    fields: [
      { id: 'home_property_type', label: '房产类型', placeholder: '例如：里斯本公寓（含 condomínio）、阿尔加维独立别墅、度假用房' },
      { id: 'home_rebuild_value', label: '估算重建费用（如果知道）', placeholder: '例如：约 20 万欧元；不清楚也没关系，我们可以协助估算' },
      { id: 'home_contents_value', label: '室内财物的大致价值', placeholder: '例如：约 5 万欧元，含家具、电器；另有手表与首饰' },
    ],
  },
  {
    value: 'ZH · Health',
    label: '私人医疗保险',
    legend: '需要投保的人',
    fields: [
      { id: 'health_household', label: '人数与年龄', placeholder: '例如：两位成人（42 岁、39 岁）与两个孩子（9 岁、5 岁）' },
      // 'health_history' removed (Especificação v2, A1) — a clinical
      // question ("chronic conditions or ongoing treatment") has no place
      // in a public lead form; see the matching removal in
      // scripts/upgrade-forms.mjs for the full reasoning. Same 40-page
      // one-off removal already applied to the generated HTML across all
      // five market clusters (pl/se/dk/zh/il).
    ],
  },
  {
    value: 'ZH · Motor',
    label: '汽车保险',
    legend: '关于这辆车',
    fields: [
      { id: 'motor_vehicle', label: '品牌、车型与年份', placeholder: '例如：2021 年 Volvo XC60，柴油' },
      { id: 'motor_plate', label: '目前的登记情况', placeholder: '例如：已是葡萄牙牌照 / 打算在葡萄牙购车 / 计划从他国进口' },
      { id: 'motor_claims_history', label: '驾驶与出险记录', placeholder: '例如：驾龄 12 年，近五年无事故；原保险公司在中国' },
    ],
  },
  {
    value: 'ZH · Liability',
    label: '民事责任保险（个人或职业）',
    legend: '需要保障的范围',
    fields: [
      { id: 'liability_activity', label: '具体活动或情形', placeholder: '例如：咨询顾问、理疗师、房产出租、餐饮经营、家庭日常责任' },
      { id: 'liability_clients', label: '客户或第三方所在地', placeholder: '例如：客户在葡萄牙与中国；在里斯本的工作室接待客人' },
    ],
  },
];

export const ZH_UI = {
  skipLink: '跳到主要内容',
  asfBar: '葡萄牙注册保险代理人 — ASF 注册号 425591790/3 · 拉各斯，阿尔加维，葡萄牙',
  navAria: '主导航',
  navCta: '索取报价',

  mega: {
    portugal: '葡萄牙保险',
    portugalMenu: '葡萄牙菜单',
    spain: '西班牙保险',
    spainMenu: '西班牙菜单',
    privateClients: 'Private Clients',
    privateClientsMenu: 'Private Clients 菜单',
    whyUs: '为什么选择我们',
    whyUsMenu: '为什么选择我们',
    overview: '概览',
    personal: '个人保险',
    personalShort: '个人',
    moving: '搬家与房产',
    property: '房产',
    hubItem: '葡萄牙保险',
    spainHub: '西班牙外籍人士保险',
    spainHealth: '医疗保险',
    spainHome: '房屋保险',
    spainCar: '汽车保险',
    spainLife: '人寿保险',
    spainLandlord: '房东保险',
    spainMortgage: '房贷保障',
    spainPC: 'Private Client 保险',
    pcPortugal: 'Private Clients — 葡萄牙',
    pcSpain: 'Private Clients — 西班牙',
    whyAbout: '关于我们',
    whyHow: '我们如何工作',
    whyBroker: '为什么找经纪人',
    whyClaims: '理赔支持',
    burger: '菜单',
  },
  mobileCta: '索取报价',
  breadcrumbAria: '面包屑导航',
  heroMeta: '葡萄牙注册保险代理人 · ASF 注册号 425591790/3 · 拉各斯，阿尔加维',
  heroCta: '索取报价',
  relatedTitle: '相关页面',
  pullquoteAria: '引述',
  langPolicyId: 'gongzuo-yuyan',

  faqId: 'changjian-wenti',
  faqEyebrow: '常见问题',
  faqTitle: '常见问题',

  formId: 'baojia',
  formTitle: '索取报价',
  formLangNote:
    '本表单界面为中文。我们的工作语言是英语：报价、条款说明与理赔沟通均以英语书面进行，回复也将是英语。',
  formSubmit: '提交',
  formSending: '正在提交…',
  formFootnote: '我们通常在一个工作日内回复。索取报价不构成任何投保义务。',
  honeypot: '请勿填写此栏',
  successHeading: '已收到，谢谢。',
  successBody:
    '我们通常在一个工作日内以英语书面回复。如有紧急情况，请致电 +351 928 226 570。',
  submitError: '提交未成功。请重试，或发送邮件至 insurance@adlerrochefort.com。',

  f: {
    name: '姓名',
    email: '电子邮箱',
    phone: '电话号码',
    phoneHelp: '请填写含国际区号的号码，例如 +351 912 345 678 或 +86 138 0000 0000。',
    company: '公司（选填）',
    companyPh: '例如：公司名称，若此次咨询与业务相关',
    localidade: '在葡萄牙的城市或地区',
    localidadePh: '例如：里斯本、卡斯凯什、波尔图、拉各斯',
    country: '目前居住的国家',
    countryPh: '例如：中国、葡萄牙',
    residence: '您在葡萄牙的身份状态',
    residenceOptions: [
      { v: 'Planning move', l: '计划迁居葡萄牙' },
      { v: 'Recently arrived', l: '刚到葡萄牙不久' },
      { v: 'Resident', l: '已在葡萄牙长期居住' },
      { v: 'Non-resident owner', l: '在葡萄牙持有房产，但不常住' },
    ],
    selectPlaceholder: '请选择',
    type: '需要的保险',
    typeOther: '其他，或尚不确定',
    startDate: '预计开始日期',
    startDatePh: '例如：3 月 1 日、签署 escritura 当天、越快越好',
    prefLang: '通信语言',
    prefLangOptions: [
      { v: 'English', l: '英语 — 我们的工作语言' },
      { v: 'Portuguese', l: '葡萄牙语' },
    ],
    message: '留言',
    messagePh: '请说明您的情况：需要保障什么、从什么时候开始、有哪些顾虑。写得越具体，回复越有用。',
    consent: '我同意 Adler &amp; Rochefort 就本次咨询与我联系，并为此目的处理我提供的资料。',
  },

  v: {
    name: '请填写您的姓名。',
    nameShort: '请填写完整姓名。',
    email: '请填写您的电子邮箱。',
    emailBad: '这个邮箱地址看起来不完整。',
    phone: '请填写您的电话号码。',
    phoneBad: '请填写含国际区号的号码，例如 +351 912 345 678。',
    type: '请选择您需要的保险类型。',
    consent: '未取得您的同意，我们无法回复这次咨询。',
  },

  cookie: {
    title: 'Cookie 说明',
    body: '我们仅使用 Cookie 来衡量广告效果与访问量。未取得同意前，不会设置分析类 Cookie。',
    reject: '拒绝',
    accept: '同意',
  },

  footer: {
    desc: '葡萄牙注册保险代理人，服务在葡萄牙的国际居民与企业。在我们合作的保险公司范围内提供清晰的建议。',
    badge: '葡萄牙注册保险代理人 — ASF 注册号 425591790/3',
    coverTitle: '保险类别',
    coverLinks: [
      { url: '/zh/home-insurance-portugal/', label: '房屋保险' },
      { url: '/zh/health-insurance-portugal/', label: '私人医疗保险' },
      { url: '/zh/car-insurance-portugal/', label: '汽车保险' },
      { url: '/zh/liability-insurance-portugal/', label: '民事责任保险' },
      { url: '/zh/insurance-guide-portugal/', label: '葡萄牙保险指南' },
    ],
    langsTitle: '语言',
    contactTitle: '联系我们',
    contactCta: '索取报价',
    copy: '版权所有',
    vault: '前往 MyCoverVault',
    privacy: '隐私政策',
    terms: '条款与条件',
    complaints: '投诉登记簿（Livro de Reclamações）',
    asfChannel: 'ASF 举报渠道',
    regulatory: [
      'Adler &amp; Rochefort 是 Ownizo, Unipessoal Lda. 的商业名称。',
      'Ownizo, Unipessoal Lda. 在葡萄牙保险与退休基金监理局（ASF）注册为保险代理人，注册号 425591790/3。我们在合作的保险公司范围内提供建议。',
      '本页内容为一般性说明，不构成针对个人情况的保险建议或法律意见。实际保障范围取决于您的具体情况与所选保单的条款。',
    ],
  },
};
