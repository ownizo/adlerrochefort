/**
 * /il/liability-insurance-spain/ — family (personal) liability in Spain
 * (cluster key es-liability).
 *
 * Search intent: אחריות אזרחית ספרד / ביטוח צד ג׳ ספרד — an Israeli household
 * with a villa, pool, staff, a boat or a dog in Spain.
 *
 * Israeli angle: in Israel צד ג׳ is usually a rider inside the household
 * policy, and in Spain too responsabilidad civil familiar usually rides on the
 * home policy — the familiar shape is right here, the limit is what is wrong
 * for a high-net-worth household. Spanish specifics kept general and
 * qualified: empleadas de hogar must be registered with Social Security;
 * potentially dangerous dogs require liability insurance, and the 2023 animal
 * welfare law extended the obligation to dog owners generally subject to
 * implementing rules; recreational boats carry compulsory liability.
 * Professional liability is a separate contract.
 */
import { BREADCRUMB_ROOT_ES, withSibling } from './shared.mjs';

const SECTIONS = `
<section class="section plain" aria-labelledby="rc-familiar">
  <div class="container narrow article-body">
    <h2 id="rc-familiar">מה כבר יש לכם בפוליסת הבית — ומה הגבול שלו</h2>
    <p>כאן דווקא המבנה מוכר: כמו בישראל, פוליסות בית בספרד כוללות בדרך כלל פרק אחריות אזרחית (<em dir="ltr">responsabilidad civil familiar</em> או <em dir="ltr">RC privada</em>) — נזק שאתם, בני הזוג או הילדים גרמתם לאחרים בחיי היומיום. מה שצריך לבדוק הוא הגבול. הוא נקבע לשוק הרחב, ובדרך כלל מסתכם בכמה מאות אלפי אירו — סכום שיכול להיגמר בתביעה אחת על פגיעת גוף חמורה.</p>
    <p>ועוד שלוש שאלות: האם הפרק מכסה את משק הבית כולו או רק את בעל הפוליסה; האם הוא חל מחוץ לספרד — בחופשה, בבית בפורטוגל, בביקור בישראל; והאם הוצאות ההגנה המשפטית נכללות בגבול או משולמות מעליו.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="gvulot-milyonim">
  <div class="container">
    <h2 id="gvulot-milyonim">אחריות משפחתית ללקוחות פרטיים</h2>
    <p>למשק בית בעל הון משמעותי החשיפה אינה פרופורציונלית לשווי הבית — היא פרופורציונלית למה שיש לתבוע. בפוליסות ללקוחות פרטיים פרק האחריות בנוי כך:</p>
    <div class="feature-grid">
      <div class="feature-card"><h3>גבולות של מיליונים</h3><p>אחריות אזרחית משפחתית בגבולות של כמה מיליוני אירו, בתחולה עולמית.</p></div>
      <div class="feature-card"><h3>הוצאות הגנה מעבר לגבול</h3><p>הוצאות ההגנה המשפטית משולמות בנוסף לגבול, ולא מנוכות ממנו.</p></div>
      <div class="feature-card"><h3>כל משק הבית</h3><p>בני הזוג, ילדים — גם כשהם לומדים הרחק מהבית — ובקשר לבית, גם אורחים וצוות.</p></div>
      <div class="feature-card"><h3>כל בתי המשפחה</h3><p>כבעלים, כשוכרים או כמחזיקים — בספרד, בפורטוגל או בכל מקום שבו יש למשפחה בית.</p></div>
    </div>
    <p class="legal-note">הגבולות, התנאים והחריגים משתנים לפי המבטח ולפי הסיכון, ונקבעים רק במסמכי הפוליסה שמונפקת לכם.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="eifo-nolad-sfarad">
  <div class="container narrow article-body">
    <h2 id="eifo-nolad-sfarad">איפה נולדות תביעות אחריות בבית בספרד</h2>
    <p><strong>בריכה.</strong> בווילה בקוסטה דל סול, הבריכה היא מקור הסיכון הגדול ביותר כלפי אורחים, ובמיוחד ילדים של אורחים. גדר, כיסוי ושילוט אינם רק עניין של זהירות — הם גם הדבר הראשון שייבדק בתביעה.</p>
    <p><strong>עובדות ועובדי משק בית.</strong> בספרד חובה לרשום עובדת משק בית (<em dir="ltr">empleada de hogar</em>) בביטוח הלאומי, גם בהיקף חלקי. זה מכסה את הזכויות הסוציאליות שלה, אבל לא את האחריות שלכם אם היא נפגעה בבית או גרמה נזק לאחרים. גנן, מנהל נכס או עובד תחזוקה — כדאי לוודא שיש להם ביטוח משלהם.</p>
    <p><strong>כלבים.</strong> בעלי כלבים מגזעים המוגדרים כמסוכנים (<em dir="ltr">perros potencialmente peligrosos</em>) נדרשים ברישיון ובביטוח אחריות. חוק רווחת בעלי החיים משנת 2023 הרחיב את חובת הביטוח לבעלי כלבים באופן כללי; היישום תלוי בתקנות, וכדאי לבדוק את המצב העדכני. גם בלי חובה, נשיכה היא תביעה נפוצה, וצריך לוודא שהפוליסה מכסה את הכלב במפורש.</p>
    <p><strong>סירות.</strong> בספרד חלה חובת ביטוח אחריות על כלי שיט לנופש. הכיסוי החובה מוגבל, ובסירה משמעותית נכון לבטח את כלי השיט ואת האחריות בפוליסה ימית ייעודית.</p>
    <p><strong>השכרה.</strong> מי שמשכיר את הבית לתיירים אחראי כלפי האורחים על מצב הנכס. חלק מהכללים האזוריים דורשים ביטוח אחריות להשכרה לתיירים, ופרק האחריות בפוליסת בית רגילה לא נכתב לשימוש הזה. <a href="/il/home-insurance-spain/">על השכרה ורישוי — בעמוד ביטוח הבית בספרד</a>.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="nifrad-sfarad">
  <div class="container narrow article-body">
    <h2 id="nifrad-sfarad">מה נשאר נפרד</h2>
    <p>אחריות מקצועית (<em dir="ltr">responsabilidad civil profesional</em>) — של רופא, עורך דין, יועץ או חברה — היא חוזה אחר, עם חיתום משלו, ואינה חלק מאחריות המשפחה. כך גם אחריות של חברה או של דירקטורים. אם יש לכם פעילות עסקית בספרד, כדאי לציין זאת בפנייה, כדי שנדע מה נשאר מחוץ לפוליסת המשפחה.</p>
    <p>וגם אחריות כנהג: נזק שגרמתם ברכב מכוסה בביטוח הרכב, לא בפרק האחריות של הבית. <a href="/il/car-insurance-spain/">על כך בעמוד ביטוח הרכב בספרד</a>.</p>
  </div>
</section>`;

export const ES_LIABILITY_PAGE = {
  slug: 'liability-insurance-spain',
  url: '/il/liability-insurance-spain/',
  cluster: 'es-liability',
  title: 'אחריות אזרחית משפחתית בספרד | Adler & Rochefort',
  description:
    'אחריות אזרחית משפחתית בספרד: מה כלול בפוליסת הבית ומה חסר, גבולות של מיליונים בתחולה עולמית, בריכה, עובדות משק בית, כלבים, סירות והשכרה.',
  keywords:
    'אחריות אזרחית ספרד, responsabilidad civil familiar, ביטוח צד ג׳ ספרד, ביטוח אחריות וילה ספרד, empleada de hogar, ביטוח כלב ספרד, ביטוח סירה ספרד',
  eyebrow: 'ספרד · אחריות אזרחית',
  h1: 'אחריות אזרחית משפחתית בספרד',
  standfirst:
    'פוליסת בית בספרד כוללת בדרך כלל פרק אחריות — אבל בגבול שנקבע לשוק הרחב. למשפחה עם וילה, בריכה, צוות, סירה או כלב, השאלה היא לא אם יש כיסוי, אלא כמה ואיפה.',
  published: '2026-09-27T09:00:00+00:00',
  modified: '2026-09-27T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT_ES, { name: 'אחריות אזרחית בספרד', url: '/il/liability-insurance-spain/' }],
  pullquote:
    'החשיפה של משק בית אינה נמדדת בשווי הבית, אלא במה שיש לתבוע.',
  schemaType: 'Article',
  formHeading: 'בדיקת האחריות האזרחית של המשפחה בספרד',
  formBranch: 'IL · Liability',
  formSubject: 'אחריות אזרחית בספרד (IL)',
  formCta: 'שליחת הפנייה',
  formIntro:
    'כתבו מה יש לכם בספרד — בית, בריכה, צוות, סירה, כלב, השכרה — או צרפו את פוליסת הבית הקיימת. נחזור אליכם בכתב באנגלית עם הגבול שיש לכם היום ומה נכון להוסיף.',
  formPlaceholder:
    'למשל: וילה עם בריכה במרבייה, עובדת משק בית פעמיים בשבוע, סירה בפוארטו באנוס, ושני ילדים שלומדים בלונדון.',
  sections: withSibling(SECTIONS, {
    label: 'יש לכם גם בית בפורטוגל?',
    body: 'שם אחריות אזרחית היא לרוב מוצר נפרד — <a href="/il/liability-insurance-portugal/">אחריות אזרחית משפחתית בפורטוגל</a>.',
  }),
  faqTitle: 'אחריות אזרחית בספרד: שאלות נפוצות',
  faq: [
    {
      q: 'פוליסת הבית שלי בספרד כוללת אחריות אזרחית?',
      a: '<p>ברוב המקרים כן — פרק <em dir="ltr">responsabilidad civil familiar</em> או <em dir="ltr">RC privada</em>. מה שצריך לבדוק הוא הגבול, שבדרך כלל מסתכם בכמה מאות אלפי אירו; את מי הוא מכסה; האם הוא חל מחוץ לספרד; והאם הוצאות ההגנה נכללות בגבול או משולמות מעליו.</p>',
    },
    {
      q: 'איזה גבול אחריות מתאים למשפחה שלנו?',
      a: '<p>אין מספר אחד. השאלה היא מה יש לתבוע ואילו סיכונים יש בחיי המשפחה — בריכה, צוות, סירה, השכרה, ילדים שנוהגים. למשקי בית בעלי הון משמעותי, פוליסות ללקוחות פרטיים מציעות גבולות של כמה מיליוני אירו בתחולה עולמית, עם הוצאות הגנה מעבר לגבול.</p>',
    },
    {
      q: 'עובדת משק הבית רשומה בביטוח הלאומי. זה מספיק?',
      a: '<p>הרישום (<em dir="ltr">empleada de hogar</em>) הוא חובה בספרד ומכסה את הזכויות הסוציאליות שלה. הוא לא מכסה את האחריות שלכם כלפיה אם נפגעה בבית, או כלפי אחרים אם היא גרמה נזק במסגרת העבודה. את זה צריך לבדוק בפרק האחריות של הפוליסה.</p>',
    },
    {
      q: 'יש חובת ביטוח לכלבים בספרד?',
      a: '<p>לבעלי כלבים מגזעים המוגדרים כמסוכנים — כן, יחד עם רישיון. חוק רווחת בעלי החיים משנת 2023 הרחיב את חובת ביטוח האחריות לבעלי כלבים באופן כללי, והיישום תלוי בתקנות; כדאי לבדוק את המצב העדכני. בכל מקרה, כדאי לוודא שהפוליסה מכסה את הכלב במפורש.</p>',
    },
    {
      q: 'יש לנו סירה. היא מכוסה באחריות של הבית?',
      a: '<p>בדרך כלל לא, או רק בסירות קטנות מאוד. בספרד חלה חובת ביטוח אחריות על כלי שיט לנופש, ובסירה משמעותית נכון לבטח את כלי השיט ואת האחריות בפוליסה ימית ייעודית, בגבול שמתאים לסיכון.</p>',
    },
    {
      q: 'אני רופא או יועץ. אחריות מקצועית נכללת?',
      a: '<p>לא. אחריות מקצועית (<em dir="ltr">responsabilidad civil profesional</em>) היא חוזה נפרד עם חיתום משלו, ואינה חלק מאחריות המשפחה. אם יש לכם פעילות מקצועית או עסקית בספרד, ציינו זאת בפנייה.</p>',
    },
  ],
  related: [
    { url: '/il/liability-insurance-portugal/', label: 'אחריות אזרחית משפחתית בפורטוגל' },
    { url: '/il/home-insurance-spain/', label: 'ביטוח לבתים בעלי ערך גבוה בספרד' },
    { url: '/il/insurance-guide-spain/', label: 'ביטוח בספרד: המדריך לישראלים' },
  ],
};
