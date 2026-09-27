/**
 * /il/buying-property-spain/ — insurance through the stages of a Spanish
 * property purchase (cluster key es-property).
 *
 * Search intent: קניית דירה בספרד / קניית וילה במרבייה — an Israeli buyer
 * between reservation and completion, with or without a Spanish mortgage.
 *
 * Structure mirrors the Portugal page's three stages (before signing, on the
 * day, after) because that is how a buyer lives it, but the content is
 * Spanish: arras, notary and Registro de la Propiedad; the mortgage-law rule
 * that the lender may require home insurance but may not force its own
 * product (Ley 5/2019, stated generally); the Consorcio surcharge; rebuild
 * cost not price; cover from the escritura; community insurance; a general
 * note that non-resident owners may need a tax representative — for the
 * buyer's lawyer and tax adviser, not us.
 */
import { BREADCRUMB_ROOT_ES, withSibling } from './shared.mjs';

const SECTIONS = `
<section class="section plain" aria-labelledby="shlavim-sfarad">
  <div class="container narrow article-body">
    <h2 id="shlavim-sfarad">איך נראית עסקה בספרד, ואיפה הביטוח נכנס</h2>
    <p>רכישת נכס בספרד עוברת בדרך כלל כמה תחנות: הזמנה ראשונית עם פיקדון קטן; חוזה <em dir="ltr">arras</em> — בדרך כלל עם מקדמה של כעשרה אחוזים, שהקונה מפסיד אם הוא נסוג והמוכר מחזיר בכפל אם הוא נסוג; חתימה על שטר המכר (<em dir="ltr">escritura pública</em>) בפני נוטריון; ורישום ברשם המקרקעין (<em dir="ltr">Registro de la Propiedad</em>). לפני כל זה צריך מספר זיהוי לזרים (<em dir="ltr">NIE</em>).</p>
    <p>הביטוח נוגע בעסקה בשלושה מועדים: לפני החתימה נקבעים הסכומים; ביום ה־<em dir="ltr">escritura</em> הסיכון עובר אליכם; ואחרי הקנייה מגיעים השיפוץ, ההשכרה והתקופות הריקות. העמוד מסודר לפי שלושתם.</p>
    <p>ולמען הסר ספק: אנחנו סוכנות ביטוח. את הבדיקות המשפטיות — ה־<em dir="ltr">nota simple</em>, שעבודים, חובות ל־<em dir="ltr">comunidad</em>, היתרי בנייה ורישוי להשכרה — עושה עורך הדין שלכם.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="lifnei-sfarad">
  <div class="container narrow article-body">
    <h2 id="lifnei-sfarad">לפני החתימה</h2>
    <p><strong>1. סכום הביטוח לפי עלות בנייה מחדש.</strong> לא מחיר הקנייה ולא הערכת הבנק (<em dir="ltr">tasación</em>). בווילה בקוסטה דל סול הקרקע והנוף הם לעיתים רוב המחיר; בדירה בבניין ישן במדריד או בברצלונה, עלות השיקום יכולה להפתיע כלפי מעלה. סכום נמוך מדי מפעיל את כלל ביטוח החסר (<em dir="ltr">regla proporcional</em>) — גם במה שה־<em dir="ltr">Consorcio</em> משלם על רעידת אדמה או הצפה.</p>
    <p><strong>2. אם יש משכנתה — מה הבנק רשאי לדרוש.</strong> בנק ספרדי רשאי לדרוש ביטוח מבנה כתנאי להלוואה, ומציע בדרך כלל את המוצר שלו, לעיתים עם הנחה בריבית. לפי חוק האשראי לנדל״ן, הלווה אינו חייב לקנות את הביטוח דרך הבנק: פוליסה אחרת שעומדת בדרישות — בכיסוי מקביל ועם רישום הבנק כמוטב — צריכה להתקבל. כדאי לבקש את הדרישות בכתב ולהשוות את העלות הכוללת, כולל השפעת ההנחה בריבית, לאורך כל תקופת ההלוואה.</p>
    <p><strong>3. פוליסת ה־<em dir="ltr">comunidad</em>.</strong> בבניין או במתחם עם שטחים משותפים, בקשו לראות את פוליסת הבניין: מה היא מכסה, מה ההשתתפות העצמית שלה, ואיפה נגמרת האחריות שלה. היא לא מכסה את פנים הדירה ואת התכולה.</p>
    <p><strong>4. תכנית השימוש.</strong> מגורים, בית שני שעומד ריק, השכרה לתיירים — כל אחד מהם משפיע על הפוליסה. אם אתם מתכננים להשכיר, בדקו עם עורך הדין לפני הקנייה אם הרישוי האזורי או העירוני בכלל מאפשר זאת בנכס הזה.</p>
    <p><strong>5. אמנות, תכשיטים ואוספים שיעברו לבית.</strong> אם הם מגיעים מישראל או מבית אחר, כדאי לסדר את הכיסוי שלהם לפני ההובלה ולא אחריה.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="beyom-sfarad">
  <div class="container narrow article-body">
    <h2 id="beyom-sfarad">ביום החתימה</h2>
    <p><strong>הכיסוי מתחיל בתאריך ה־<em dir="ltr">escritura</em>.</strong> מרגע החתימה בפני הנוטריון הנכס שלכם, וכל מה שקורה בו — שריפה, נזילה, פריצה — הוא אירוע שלכם, גם אם עדיין לא הגעתם. אם יש משכנתה, הבנק ידרוש אישור ביטוח ממילא; אם אין, אף אחד לא יזכיר לכם.</p>
    <p><strong>תאריך שזז — פוליסה שזזה.</strong> תאריכי חתימה בספרד זזים לא פעם. פוליסה שתחילתה נקבעה לתאריך המקורי לא מתעדכנת לבד.</p>
    <p><strong>פרטים שתואמים את השטר.</strong> כתובת, המזהה הקדסטרי (<em dir="ltr">referencia catastral</em>), שמות הבעלים וחלוקת הבעלות. אי־התאמה מתגלה בדרך כלל בתביעה.</p>
    <div class="callout">
      <span class="callout-label">שלושה דברים שכדאי שיהיו נכונים ביום ה־<span dir="ltr">escritura</span></span>
      סכום המבנה לפי עלות בנייה מחדש, סכום התכולה לפי מה שיהיה בבית בפועל, ותאריך תחילת כיסוי זהה לתאריך החתימה.
    </div>
  </div>
</section>

<section class="section tint" aria-labelledby="acharei-sfarad">
  <div class="container narrow article-body">
    <h2 id="acharei-sfarad">אחרי הקנייה</h2>
    <p><strong>שיפוץ.</strong> בווילות ישנות בקוסטה דל סול שיפוץ מקיף הוא כמעט כלל. בזמן העבודות, בקשו לראות את ביטוח הקבלן; כשהן נגמרות, עדכנו את סכום המבנה והתכולה.</p>
    <p><strong>השכרה.</strong> השכרה לתיירים היא שימוש שונה בנכס, והיא צריכה להופיע בפוליסה — יחד עם פרק אחריות שמתאים לאורחים. הרישוי עצמו הוא עניין אזורי ועירוני.</p>
    <p><strong>תקופות ריקות.</strong> בית שני שעומד ריק בין ביקורים הוא המצב השכיח, ובדיוק שם חלים תנאי אי־התפוסה של הפוליסה.</p>
    <p><strong>מיסים ונציג.</strong> בעלי נכס שאינם תושבי ספרד חייבים בדיווח מס על הנכס, ובמצבים מסוימים — במיוחד למי שגר מחוץ לאיחוד האירופי — עשויים להידרש למנות נציג לענייני מס. זה נושא ליועץ המס, לא לנו; אנחנו מזכירים אותו כי הוא שייך לאותה רשימת משימות.</p>
    <p class="legal-note">מה שכתוב כאן הוא הסבר כללי ואינו ייעוץ משפטי או מיסויי. הכיסוי בפועל נקבע בפוליסה שתונפק ובכפוף לחיתום המבטח.</p>
  </div>
</section>`;

export const ES_PROPERTY_PAGE = {
  slug: 'buying-property-spain',
  url: '/il/buying-property-spain/',
  cluster: 'es-property',
  title: 'קניית נכס בספרד: הביטוח לפי שלבי העסקה | Adler & Rochefort',
  description:
    'קניית בית בספרד: arras, נוטריון ורישום, מה הבנק רשאי לדרוש בביטוח ומה לא, סכום לפי עלות בנייה מחדש, כיסוי מיום ה־escritura ופוליסת ה־comunidad.',
  keywords:
    'קניית דירה בספרד, קניית וילה במרבייה, arras, escritura, משכנתה בספרד ביטוח, Registro de la Propiedad, NIE, ביטוח נכס ספרד',
  eyebrow: 'ספרד · קניית נכס',
  h1: 'קניית נכס בספרד: הביטוח לפי שלבי העסקה',
  standfirst:
    'בין חוזה ה־arras לחתימה אצל הנוטריון יש כמה החלטות ביטוח שכדאי לקבל בזמן: סכום הביטוח, הדרישות של הבנק, ותאריך שבו הכיסוי חייב להיות בתוקף.',
  published: '2026-09-27T09:00:00+00:00',
  modified: '2026-09-27T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT_ES, { name: 'קניית נכס בספרד', url: '/il/buying-property-spain/' }],
  pullquote:
    'הבנק רשאי לדרוש ביטוח. הוא לא רשאי לחייב אתכם לקנות אותו דרכו.',
  schemaType: 'Article',
  formHeading: 'באמצע עסקה בספרד? נבדוק מה צריך להיות בתוקף ומתי',
  formBranch: 'IL · Home',
  formSubject: 'קניית נכס בספרד (IL)',
  formCta: 'שליחת הפנייה',
  formIntro:
    'כתבו איזה נכס, איפה, באיזה שלב אתם ואם יש משכנתה. נחזור אליכם בכתב באנגלית עם מה שנדרש ביום ה־escritura ומה מומלץ מעבר לזה.',
  formPlaceholder:
    'למשל: וילה באסטפונה, חוזה arras נחתם, escritura בדצמבר, משכנתה בבנק ספרדי, כוונה להשכיר בקיץ.',
  sections: withSibling(SECTIONS, {
    label: 'קונים גם בפורטוגל?',
    body: 'השלבים שם — ה־CPCV וה־escritura — שונים — <a href="/il/buying-property-portugal/">קניית דירה בפורטוגל: ביטוח לפי שלבי העסקה</a>.',
  }),
  faqTitle: 'קניית נכס בספרד: שאלות נפוצות',
  faq: [
    {
      q: 'ממתי הנכס צריך להיות מבוטח?',
      a: '<p>מתאריך החתימה על ה־<em dir="ltr">escritura</em> בפני הנוטריון. מאותו רגע הסיכון עליכם, גם אם עוד לא הגעתם לנכס. אם התאריך זז, צריך להזיז גם את תחילת הפוליסה.</p>',
    },
    {
      q: 'הבנק מחייב אותי לקנות את ביטוח הבית דרכו?',
      a: '<p>הבנק רשאי לדרוש ביטוח מבנה כתנאי למשכנתה, אבל לפי חוק האשראי לנדל״ן בספרד אינו רשאי לחייב אתכם לקנות אותו דרכו: פוליסה אחרת בכיסוי מקביל, עם רישום הבנק כמוטב, צריכה להתקבל. לעיתים הבנק מציע הנחה בריבית תמורת המוצרים שלו, ולכן כדאי להשוות את העלות הכוללת לאורך ההלוואה. בקשו את הדרישות בכתב.</p>',
    },
    {
      q: 'לפי איזה סכום לבטח?',
      a: '<p>לפי עלות הבנייה מחדש, לא לפי מחיר הקנייה ולא לפי ה־<em dir="ltr">tasación</em> של הבנק. סכום נמוך מדי מפעיל את כלל ביטוח החסר, שמקטין את התגמול באותו יחס גם בנזק חלקי — כולל במה שה־<em dir="ltr">Consorcio</em> משלם.</p>',
    },
    {
      q: 'רעידת אדמה והצפה כלולות?',
      a: '<p>בדרך כלל כן, דרך ה־<em dir="ltr">Consorcio de Compensación de Seguros</em>, שממומן מתוספת בכל פוליסת רכוש בספרד. זה שונה מפורטוגל, שם כיסוי רעידת אדמה הוא הרחבה אופציונלית. ה־<em dir="ltr">Consorcio</em> משלם לפי הסכומים שבפוליסה שלכם.</p>',
    },
    {
      q: 'קניתי דירה בבניין. פוליסת ה־comunidad לא מספיקה?',
      a: '<p>לא. היא מכסה את החלקים המשותפים — גג, חזיתות, מעליות, צנרת ראשית, בריכה וגינה משותפות — ולא את פנים הדירה או התכולה. כדאי לראות אותה כדי לדעת איפה היא נגמרת, ולבטח את מה שהיא לא מכסה.</p>',
    },
    {
      q: 'אני לא תושב ספרד. יש משהו שצריך לדעת?',
      a: '<p>מבחינת הביטוח, בעלים שאינם תושבים הם מצב שגרתי; מה שחשוב הוא להצהיר על השימוש — בית שני, תקופות ריקות, השכרה. מבחינת המס, בעלים שאינם תושבים חייבים בדיווח, ובמצבים מסוימים עשויים להידרש למנות נציג לענייני מס. זה נושא ליועץ המס שלכם.</p>',
    },
  ],
  related: [
    { url: '/il/buying-property-portugal/', label: 'קניית דירה בפורטוגל: ביטוח לפי שלבי העסקה' },
    { url: '/il/home-insurance-spain/', label: 'ביטוח לבתים בעלי ערך גבוה בספרד' },
    { url: '/il/insurance-guide-spain/', label: 'ביטוח בספרד: המדריך לישראלים' },
  ],
};
