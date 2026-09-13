/**
 * Interface copy for the Hebrew cluster: chrome, footer, form labels,
 * validation messages, cookie banner.
 *
 * Shapes are dictated by scripts/lib/market-cluster.mjs and shared with
 * Poland, Sweden, Denmark and China; the words are Hebrew, written for an
 * Israeli reader rather than translated from the English file — Hebrew
 * interface copy, geresh/gershayim where Hebrew uses them (דוא״ל), the maqaf
 * in compounds (בין־לאומי), and inclusive verb forms (מאשר/ת) rather than a
 * masculine default.
 *
 * Four decisions in here are deliberate rather than stylistic:
 *
 *   * `insurance_type` values stay English and market-tagged ("IL · Home")
 *     because netlify/functions/submission-created.mjs builds the notification
 *     subject from this field and the team reads the inbox in English. The
 *     visible label is for the reader; the value is for the inbox in Lagos.
 *     The branch field IDs are the same ones the other four markets use, so
 *     QUOTE_LABELS_EN already covers them and the Hebrew form needed no new
 *     labels in the notification function.
 *
 *   * `prefLangOptions` offers English and Portuguese only. The repository
 *     records those two as the agency's working languages; offering Hebrew
 *     correspondence here would be a service promise nothing in the codebase
 *     supports. What marks the enquiry as a Hebrew-language one is the
 *     `language` attribution field (he), not a claim about staffing.
 *
 *   * The phone help text and the example placeholders offer an Israeli
 *     dialling code alongside the Portuguese one, because a reader who has not
 *     moved yet is writing from an Israeli number. The input itself is forced
 *     to LTR by the renderer (see market-cluster.mjs) so that a typed +972…
 *     does not visually reorder against the right-to-left form around it.
 *
 *   * The Latin and numeric runs that sit inside a Hebrew sentence — ASF
 *     425591790/3, the two phone numbers, the mailbox, "Ownizo, Unipessoal
 *     Lda." — are wrapped in U+2066 LEFT-TO-RIGHT ISOLATE … U+2069 POP
 *     DIRECTIONAL ISOLATE rather than in <bdi> markup. Not a stylistic choice:
 *     these particular strings are rendered into HTML in some places and into
 *     plain text in others (submitError goes through alert(), phoneBad into a
 *     text node), and the isolate characters are the one mechanism that works
 *     in both. They are also what <bdi> is defined in terms of, so the two are
 *     the same fix expressed differently.
 *
 *     What they prevent is concrete. "רישום ASF 425591790/3" without an
 *     isolate renders as "רישום 425591790/3 ASF", because the space between a
 *     Latin word and a number takes the paragraph's direction; "+351 928 226
 *     570" renders with its digit groups in reverse order for the same reason;
 *     and the full stop in "Lda." drifts off the end of the abbreviation it
 *     belongs to. Nothing here reverses a string by hand — the isolates tell
 *     the Unicode algorithm where the left-to-right run begins and ends and
 *     let it do the ordering.
 */

export const IL_BRANCHES = [
  {
    value: 'IL · Home',
    label: 'ביטוח דירה או בית (למגורים, לבית שני או להשכרה)',
    legend: 'על הנכס',
    fields: [
      {
        id: 'home_property_type',
        label: 'סוג הנכס',
        placeholder: 'למשל: דירה בליסבון בבניין עם condomínio, וילה באלגרבה, בית שמשמש לחופשות',
      },
      {
        id: 'home_rebuild_value',
        label: 'אומדן עלות הבנייה מחדש (אם ידוע)',
        placeholder: 'למשל: כ־200,000 אירו. אם לא ידוע — זה בסדר, נעזור לאמוד',
      },
      {
        id: 'home_contents_value',
        label: 'שווי משוער של התכולה',
        placeholder: 'למשל: כ־50,000 אירו כולל רהיטים ומוצרי חשמל, ובנפרד תכשיטים ושעון',
      },
    ],
  },
  {
    value: 'IL · Health',
    label: 'ביטוח בריאות פרטי',
    legend: 'מי צריך להיות מבוטח',
    fields: [
      {
        id: 'health_household',
        label: 'מספר הנפשות והגילים',
        placeholder: 'למשל: שני מבוגרים (42 ו־39) ושני ילדים (9 ו־5)',
      },
      {
        id: 'health_history',
        label: 'יש מצב רפואי מתמשך או טיפול קיים?',
        placeholder: 'שורה אחת מספיקה. פרטים רפואיים נסגור בשיחה נפרדת, לא דרך הטופס',
      },
    ],
  },
  {
    value: 'IL · Motor',
    label: 'ביטוח רכב',
    legend: 'על הרכב',
    fields: [
      {
        id: 'motor_vehicle',
        label: 'יצרן, דגם ושנה',
        placeholder: 'למשל: Volvo XC60 משנת 2021, דיזל',
      },
      {
        id: 'motor_plate',
        label: 'מצב הרישום כרגע',
        placeholder: 'למשל: רשום כבר בפורטוגל / מתכננים לקנות רכב בפורטוגל / שוקלים לייבא רכב',
      },
      {
        id: 'motor_claims_history',
        label: 'ניסיון נהיגה והיסטוריית תביעות',
        placeholder: 'למשל: 12 שנות רישיון, בלי תביעות בחמש השנים האחרונות, המבטח הקודם בישראל',
      },
    ],
  },
  {
    value: 'IL · Liability',
    label: 'ביטוח אחריות (Responsabilidade Civil) — פרטי או מקצועי',
    legend: 'מה צריך להיות מכוסה',
    fields: [
      {
        id: 'liability_activity',
        label: 'העיסוק או המצב המדויק',
        placeholder: 'למשל: ייעוץ, פיזיותרפיה, השכרת נכס, בית קפה, אחריות של משק בית',
      },
      {
        id: 'liability_clients',
        label: 'איפה נמצאים הלקוחות או הצדדים השלישיים',
        placeholder: 'למשל: לקוחות בפורטוגל ובישראל, מקבלים אנשים בקליניקה בליסבון',
      },
    ],
  },
];

export const IL_UI = {
  skipLink: 'דילוג לתוכן הראשי',
  asfBar:
    'סוכנות ביטוח רשומה בפורטוגל — רישום ⁦ASF 425591790/3⁩ · לאגוש, אלגרבה, פורטוגל',
  navAria: 'ניווט ראשי',
  navCta: 'לקבלת הצעה',
  mobileCta: 'לקבלת הצעה',
  breadcrumbAria: 'מסלול הניווט',
  heroMeta: 'סוכנות ביטוח רשומה בפורטוגל · רישום ⁦ASF 425591790/3⁩ · לאגוש, אלגרבה',
  heroCta: 'לקבלת הצעה',
  relatedTitle: 'עמודים קשורים',
  pullquoteAria: 'ציטוט',
  langPolicyId: 'sfat-avoda',

  faqId: 'shelot-nefotzot',
  faqEyebrow: 'שאלות נפוצות',
  faqTitle: 'שאלות נפוצות',

  formId: 'hatzaa',
  formTitle: 'בקשת הצעה',
  formLangNote:
    'הטופס מוצג בעברית. שפת העבודה שלנו היא אנגלית: הצעות מחיר, הסבר תנאים וליווי בתביעות נעשים בכתב באנגלית, וגם התשובה תגיע באנגלית.',
  formSubmit: 'שליחה',
  formSending: 'שולחים…',
  formFootnote:
    'בדרך כלל נחזור אליכם בתוך יום עסקים. בקשת הצעה לא מחייבת אתכם לשום דבר.',
  honeypot: 'נא לא למלא את השדה הזה',
  successHeading: 'הפנייה נשלחה. תודה.',
  successBody:
    'בדרך כלל נשיב בכתב באנגלית בתוך יום עסקים. לעניין דחוף אפשר להתקשר: ⁦+351 928 226 570⁩.',
  submitError:
    'השליחה לא הושלמה. אפשר לנסות שוב, או לכתוב לכתובת ⁦insurance@adlerrochefort.com⁩.',

  f: {
    name: 'שם',
    email: 'דוא״ל',
    phone: 'טלפון',
    phoneHelp:
      'נא לכתוב את המספר עם קידומת בין־לאומית, למשל ⁦+972 50 123 4567⁩ או ⁦+351 912 345 678⁩.',
    localidade: 'עיר או אזור בפורטוגל',
    localidadePh: 'למשל: ליסבון, קשקאיש, פורטו, לאגוש',
    country: 'ארץ המושב כרגע',
    countryPh: 'למשל: ישראל, פורטוגל',
    residence: 'המצב שלכם בפורטוגל',
    residenceOptions: [
      { v: 'Planning move', l: 'מתכננים מעבר לפורטוגל' },
      { v: 'Recently arrived', l: 'הגענו לפורטוגל לא מכבר' },
      { v: 'Resident', l: 'מתגוררים בפורטוגל' },
      { v: 'Non-resident owner', l: 'בעלי נכס בפורטוגל, מתגוררים במקום אחר' },
    ],
    selectPlaceholder: 'בחרו אפשרות',
    type: 'הביטוח שמעניין אתכם',
    typeOther: 'אחר, או עוד לא ברור',
    startDate: 'מועד תחילה מבוקש',
    startDatePh: 'למשל: 1 במרץ, יום חתימת ה־escritura, בהקדם האפשרי',
    prefLang: 'שפת ההתכתבות',
    prefLangOptions: [
      { v: 'English', l: 'אנגלית — שפת העבודה שלנו' },
      { v: 'Portuguese', l: 'פורטוגזית' },
    ],
    message: 'הודעה',
    messagePh:
      'תארו את המצב: מה צריך להיות מכוסה, ממתי, ומה מדאיג אתכם. כמה שהתיאור מדויק יותר, כך התשובה שימושית יותר.',
    consent:
      'אני מאשר/ת ש־Adler &amp; Rochefort ייצרו איתי קשר בנוגע לפנייה הזו ויעבדו את הפרטים שמסרתי לצורך כך.',
  },

  v: {
    name: 'נא למלא שם.',
    nameShort: 'נא למלא שם מלא.',
    email: 'נא למלא כתובת דוא״ל.',
    emailBad: 'כתובת הדוא״ל נראית חסרה.',
    phone: 'נא למלא מספר טלפון.',
    phoneBad: 'נא לכתוב מספר עם קידומת בין־לאומית, למשל ⁦+351 912 345 678⁩.',
    type: 'נא לבחור איזה ביטוח מעניין אתכם.',
    consent: 'בלי האישור הזה לא נוכל להשיב לפנייה.',
  },

  cookie: {
    title: 'על קובצי Cookie',
    body: 'אנחנו משתמשים בקובצי Cookie רק כדי למדוד ביצועי פרסום ותנועה לאתר. קובצי Cookie אנליטיים לא נטענים לפני שנתתם הסכמה.',
    reject: 'דחייה',
    accept: 'אישור',
  },

  footer: {
    desc:
      'סוכנות ביטוח רשומה בפורטוגל, עבור תושבים ובעלי עסקים בין־לאומיים בפורטוגל. ייעוץ ברור בתוך מגוון המבטחים שאנחנו עובדים איתם.',
    badge: 'סוכנות ביטוח רשומה בפורטוגל — רישום ⁦ASF 425591790/3⁩',
    coverTitle: 'סוגי ביטוח',
    coverLinks: [
      { url: '/il/home-insurance-portugal/', label: 'ביטוח דירה ומבנה' },
      { url: '/il/health-insurance-portugal/', label: 'ביטוח בריאות פרטי' },
      { url: '/il/car-insurance-portugal/', label: 'ביטוח רכב' },
      { url: '/il/liability-insurance-portugal/', label: 'ביטוח אחריות' },
      { url: '/il/insurance-guide-portugal/', label: 'מדריך הביטוח בפורטוגל' },
    ],
    langsTitle: 'שפות',
    contactTitle: 'יצירת קשר',
    contactCta: 'לקבלת הצעה',
    copy: 'כל הזכויות שמורות',
    vault: 'מעבר ל־MyCoverVault',
    privacy: 'מדיניות פרטיות',
    terms: 'תנאי שימוש',
    complaints: 'ספר הפניות (Livro de Reclamações)',
    asfChannel: 'ערוץ הדיווח של ASF',
    regulatory: [
      'Adler &amp; Rochefort הוא השם המסחרי של ⁦Ownizo, Unipessoal Lda.⁩',
      '⁦Ownizo, Unipessoal Lda.⁩ רשומה כסוכנות ביטוח אצל רשות הפיקוח על הביטוח וקרנות הפנסיה בפורטוגל (ASF), מספר רישום 425591790/3. אנחנו מייעצים בתוך מגוון המבטחים שאנחנו עובדים איתם.',
      'התוכן בעמוד הזה הוא הסבר כללי, ואינו ייעוץ ביטוחי או משפטי המותאם למצב אישי. הכיסוי בפועל תלוי בנסיבות שלכם ובתנאי הפוליסה שנבחרה.',
    ],
  },
};
