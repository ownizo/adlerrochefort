/**
 * /il/ — the Hebrew market homepage, which is also the cluster hub.
 *
 * Search intent: ביטוח בפורטוגל / ישראלים בפורטוגל — someone who lives in
 * Portugal, is moving here, or owns property here, and wants to understand how
 * the market works before buying anything.
 *
 * The angle that makes this page Israeli rather than translated: an Israeli
 * reader is not new to insurance. Household cover, a mortgage bank demanding a
 * policy, supplementary health plans, comprehensive motor cover — all of that
 * is familiar. What trips people up is the places where Portugal's structure
 * differs from the Israeli one they already know, because a familiar-looking
 * product invites a familiar assumption.
 *
 *   1. Seismic cover. Israeli household policies commonly carry earthquake
 *      cover, and Israeli buyers arrive expecting it to be part of what a home
 *      policy is. In Portugal it is generally a separate, optional extension
 *      (sismos) that has to be asked for and paid for. This is the single most
 *      consequential wrong assumption we see, so it leads the page and it is
 *      repeated on the home and buying-property pages.
 *   2. Health. Israel runs on קופות חולים with a choice of fund, a
 *      supplementary layer on top and private cover above that. Portugal's SNS
 *      is not a fund-choice model, and private health insurance here is a
 *      separate market with networks, waiting periods and underwriting. It is
 *      also not an immigration instrument, which is where the compliance line
 *      on this cluster sits.
 *   3. Compulsory motor cover. In Israel, ביטוח חובה is about bodily injury,
 *      and damage to a third party's property is the job of צד ג׳ or מקיף. In
 *      Portugal the compulsory Responsabilidade Civil layer covers bodily
 *      injury and third-party property damage together. Same word,
 *      "compulsory", different contents.
 *   4. Standalone civil liability. In Israel third-party liability is usually
 *      met as a rider inside the household policy. In Portugal
 *      Responsabilidade Civil is its own product family, personal and
 *      professional, and has to be considered on its own terms.
 *
 * One Hebrew term does a lot of work here: ביטוח חסר is already the Israeli
 * name for underinsurance, which is exactly what Portugal's regra proporcional
 * penalises. Naming it lets the page explain proportional settlement in one
 * sentence instead of five.
 *
 * Latin and Portuguese runs are isolated with <bdi> or dir="ltr" so they do not
 * reorder inside right-to-left paragraph flow. Nothing is reversed by hand.
 */
export const HUB_PAGE = {
  slug: 'il',
  url: '/il/',
  cluster: 'hub',
  isHub: true,
  title: 'ביטוח בפורטוגל: מדריך לישראלים שגרים, קונים נכס או עוברים לפורטוגל | Adler & Rochefort',
  description:
    'איך עובד ביטוח בפורטוגל: ביטוח דירה, בריאות פרטי, רכב ואחריות — ובמה המבנה שונה ממה שמכירים מישראל. סוכנות ביטוח רשומה בפורטוגל, רישום ASF 425591790/3.',
  keywords:
    'ביטוח בפורטוגל, ישראלים בפורטוגל, ביטוח דירה בפורטוגל, ביטוח בריאות בפורטוגל, ביטוח רכב בפורטוגל, ביטוח אחריות בפורטוגל, מעבר לפורטוגל, קניית דירה בפורטוגל',
  eyebrow: 'ביטוח בפורטוגל',
  h1: 'ביטוח בפורטוגל: לישראלים שגרים, קונים נכס או עושים כאן עסקים',
  standfirst:
    'ביטוח בפורטוגל הוא לא עולם זר — אבל הוא בנוי אחרת ממה שמכירים מישראל. ביטוח דירה מבוטח לפי עלות בנייה מחדש ולא לפי מחיר הנכס, כיסוי רעידת אדמה הוא בדרך כלל תוספת שצריך לבקש, ביטוח חובה לרכב מכסה כאן גם נזק לרכוש של צד שלישי, ואחריות אזרחית היא מוצר בפני עצמו. כדאי להבין את זה לפני שמדברים על מחיר.',
  published: '2026-09-13T09:00:00+00:00',
  modified: '2026-09-13T09:00:00+00:00',
  breadcrumb: [{ name: 'ביטוח בפורטוגל', url: '/il/' }],
  pullquote:
    'הפוליסה הזולה ביותר נעשית יקרה מאוד ביום שבו מתברר שהנזק שקרה נמצא ברשימת החריגים.',
  schemaType: 'WebPage',
  formHeading: 'ספרו לנו על המצב שלכם',
  formBranch: '',
  formSubject: 'פנייה כללית (IL)',
  formCta: 'שליחת הפנייה',
  formIntro:
    'כתבו מה צריך להיות מכוסה וממתי. נחזור אליכם עם מה שצריך כדי להוציא הצעה, מה אפשר לסדר בפועל, ומה כדאי לבדוק לפני שמחליטים.',
  formPlaceholder:
    'למשל: אנחנו עוברים לליסבון במרץ, קנינו דירה בבניין עם condomínio, מתכננים לקנות רכב כאן, ויש לנו שני ילדים.',
  sections: `
<section class="section plain" aria-labelledby="arba-hevdelim">
  <div class="container narrow article-body">
    <h2 id="arba-hevdelim">ארבעה הבדלים שכדאי להכיר לפני שקוראים הצעה</h2>
    <p>רוב הלקוחות הישראלים שאנחנו פוגשים מבינים ביטוח היטב. הבעיה כמעט תמיד לא חוסר ידע, אלא ידע נכון שהועבר ממקום אחד למקום אחר: מוצר שנראה מוכר מזמין הנחה מוכרת. אלה ארבעת ההבדלים המבניים שמייצרים את מרבית אי־ההבנות.</p>
    <p><strong>ראשית, כיסוי לרעידת אדמה הוא בדרך כלל תוספת נפרדת.</strong> בישראל כיסוי רעידת אדמה הוא חלק שגור מהשיח על ביטוח דירה, ורבים מגיעים בהנחה שזה פשוט מה שביטוח דירה כולל. בפורטוגל זה עובד אחרת: כיסוי נזקי רעידת אדמה (<em dir="ltr">sismos</em>) הוא בדרך כלל הרחבה אופציונלית, שצריך לבקש במפורש, שעולה כסף, ושלפעמים מגיעה עם השתתפות עצמית משמעותית משלה. יש מבטחים שמציעים אותה בקלות ויש כאלה שפחות, וזה משתנה גם לפי אזור ולפי סוג הבנייה. אל תניחו שהיא שם. בקשו לראות בכתב אם היא נכללה בהצעה — וגם באיזו השתתפות עצמית.</p>
    <p><strong>שנית, סכום הביטוח של המבנה הוא עלות בנייה מחדש, לא מחיר הנכס.</strong> ההיגיון הזה מוכר מישראל, אבל שווה לחזור עליו כי כאן הוא נאכף בצורה ישירה. מה שמבטחים בפורטוגל הוא "כמה יעלה להקים את המבנה הזה מחדש" (<em dir="ltr">valor de reconstrução</em>) — מספר שבדרך כלל נמוך ממה ששילמתם, כי מחיר הנכס כולל גם את הקרקע ואת המיקום. אם הסכום נקבע נמוך מדי, נכנס לתמונה מה שאתם מכירים בשם ביטוח חסר: בפורטוגל קוראים לזה <em dir="ltr">regra proporcional</em>, והמשמעות היא שגם בנזק חלקי, התגמול עלול להיות מופחת באותו שיעור שבו הסכום היה חסר.</p>
    <p><strong>שלישית, "ביטוח חובה" לרכב מכסה כאן יותר ממה שהמילה מרמזת.</strong> בישראל ביטוח חובה עוסק בנזקי גוף, ונזק לרכוש של צד שלישי הוא תפקידם של ביטוח צד ג׳ או מקיף. בפורטוגל השכבה החובה — <em dir="ltr">Responsabilidade Civil Automóvel</em> — מכסה גם נזקי גוף וגם נזק לרכוש של צד שלישי, יחד. מה שהיא לא מכסה זה את הרכב שלכם: לשם כך צריך כיסוי מקיף. אותה מילה, תכולה אחרת.</p>
    <p><strong>רביעית, אחריות אזרחית היא כאן מוצר בפני עצמו.</strong> בישראל צד ג׳ הוא בדרך כלל הרחבה בתוך פוליסת הדירה. בפורטוגל <em dir="ltr">Responsabilidade Civil</em> היא משפחת מוצרים שלמה — פרטית ומקצועית — ופוליסת דירה עשויה לכלול סכום אחריות מסוים, אך לעיתים מוגבל לשכנים באותו בניין, ולעיתים לא נכלל בכלל. זה תלוי במבטח ובתוכנית.</p>
    <div class="callout">
      <span class="callout-label">בשורה אחת</span>
      הניסיון הישראלי שלכם שווה משהו כאן, אבל צריך לחלק אותו מחדש: מבנה לפי עלות בנייה, רעידת אדמה כתוספת שנבדקת, בריאות במקביל למערכת הציבורית, ואחריות אזרחית כנושא נפרד. מי שסידר את ארבעת אלה, כבר לא בוחר פוליסה לפי המחיר בלבד.
    </div>
  </div>
</section>

<section class="section tint" aria-labelledby="munachim">
  <div class="container narrow article-body">
    <h2 id="munachim">שבע מילים בפורטוגזית שיחזרו בכל פוליסה</h2>
    <p>הפוליסה מונפקת בפורטוגזית כי החוק מחייב. שבע המילים האלה מופיעות כמעט בכל מסמך, ומי שמזהה אותן כבר לא קורא את הפוליסה של עצמו בעיניים עצומות.</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">מונחי יסוד בביטוח פורטוגזי, עברית מול פורטוגזית</caption>
        <thead>
          <tr><th scope="col">בעברית</th><th scope="col">בפורטוגזית</th><th scope="col">למה זה חשוב</th></tr>
        </thead>
        <tbody>
          <tr><td>פרמיה</td><td><em dir="ltr">prémio</em></td><td>בדרך כלל מחושבת שנתית. פריסה לתשלומים לרוב מוסיפה עלות.</td></tr>
          <tr><td>סכום ביטוח</td><td><em dir="ltr">capital seguro</em></td><td>המספר הקריטי ביום התביעה, במיוחד במבנה.</td></tr>
          <tr><td>השתתפות עצמית</td><td><em dir="ltr">franquia</em></td><td>מופיעה לעיתים גם כסכום קבוע וגם כאחוז, ולרוב חל הגבוה מביניהם.</td></tr>
          <tr><td>חריגים</td><td><em dir="ltr">exclusões</em></td><td>מה שהפוליסה באמת אומרת כתוב בפרק הזה.</td></tr>
          <tr><td>מקרה ביטוח / תביעה</td><td><em dir="ltr">sinistro</em></td><td>לדיווח יש מועד, נמדד מיום האירוע, ולרוב הוא קצר.</td></tr>
          <tr><td>תנאים כלליים</td><td><em dir="ltr">condições gerais</em></td><td>מסמך הבסיס. ה־<em dir="ltr">condições particulares</em> (תנאים מיוחדים) משנים אותו.</td></tr>
          <tr><td>תקופת המתנה</td><td><em dir="ltr">períodos de carência</em></td><td>הסעיף שהכי מרבים לפספס בביטוח בריאות.</td></tr>
        </tbody>
      </table>
    </div>
    <p>אין צורך לזכור אותן. אבל כשמישהו אומר לכם "הפוליסה הזאת מכסה הכול", אפשר לשאול ישירות: מה כתוב בפרק ה־<em dir="ltr">exclusões</em>, ומה ה־<em dir="ltr">franquia</em>. מי שיודע לענות מיד, בדרך כלל באמת קרא את התנאים.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="arba-sugim">
  <div class="container narrow">
    <h2 id="arba-sugim">ארבעת סוגי הביטוח שעליהם שואלים הכי הרבה</h2>
    <ul class="hub-list">
      <li class="hub-item">
        <h3><a href="/il/home-insurance-portugal/">ביטוח דירה, בית ותכולה</a></h3>
        <p>ההבדל בין מבנה לתכולה, עד לאן מגיע הביטוח של ה־<em dir="ltr">condomínio</em>, איך אומדים עלות בנייה מחדש, נזקי מים ואש, כיסוי רעידת אדמה כתוספת, ותנאים לבית שני ולתקופות שהנכס ריק.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/il/health-insurance-portugal/">ביטוח בריאות פרטי</a></h3>
        <p>איך ה־<em dir="ltr">SNS</em> הציבורי, רפואה פרטית וביטוח בריאות פרטי מתקיימים במקביל, רשתות מול החזר, תקופות המתנה, הצהרת בריאות וחיתום, מצבים רפואיים קיימים ופוליסות משפחתיות.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/il/car-insurance-portugal/">ביטוח רכב</a></h3>
        <p>מה בדיוק כוללת שכבת החובה, מה מוסיף כיסוי מקיף, קניית רכב בפורטוגל, ייבוא רכב, שאלת הרישיון הישראלי, והאם היסטוריית התביעות מישראל נלקחת בחשבון.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/il/liability-insurance-portugal/">ביטוח אחריות אזרחית</a></h3>
        <p>אחריות פרטית ומקצועית (<em dir="ltr">Responsabilidade Civil</em>): יועצים, עצמאים, מטפלים, אנשי בריאות ורווחה, נותני שירותים ובעלי עסקים קטנים.</p>
      </li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="shlosha-madrichim">
  <div class="container narrow">
    <h2 id="shlosha-madrichim">שלושה מדריכים לפי מצב</h2>
    <ul class="hub-list">
      <li class="hub-item">
        <h3><a href="/il/moving-to-portugal/">מעבר מישראל לפורטוגל: סדר הפעולות בביטוח</a></h3>
        <p>מה לסדר לפני העזיבה, מה מסתדר רק אחרי ההגעה, איפה נדרש <em dir="ltr">NIF</em>, ובאילו נקודות נוצרים רווחי כיסוי שאיש לא מתכוון להם.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/il/buying-property-portugal/">קניית דירה בפורטוגל: ביטוח לפי שלבי העסקה</a></h3>
        <p>מה לבדוק לפני החתימה, מה הבנק עשוי לדרוש למשכנתה, למה הכיסוי צריך להתחיל ביום ה־<em dir="ltr">escritura</em>, ומה משלימים אחרי הרכישה.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/il/insurance-guide-portugal/">מדריך הביטוח בפורטוגל ושאלות נפוצות</a></h3>
        <p>מבנה השוק, ממה מורכבת פוליסה, איך מתנהלת תביעה, חידוש וביטול, ואילו שאלות כדאי לשאול כל סוכן — כולל אותנו.</p>
      </li>
    </ul>
  </div>
</section>

<section class="section plain" aria-labelledby="mishpachot-vaasakim">
  <div class="container narrow article-body">
    <h2 id="mishpachot-vaasakim">משפחות, נכסים, עצמאים ובעלי עסקים</h2>
    <p><strong>משפחות עם ילדים.</strong> השאלה הראשונה היא כמעט תמיד בריאות פרטית: תוך כמה זמן מקבלים תור לרופא ילדים, איך בונים פוליסה משפחתית, ואיך נספרות תקופות ההמתנה של הילדים. שתי נקודות פחות מדוברות: אחריות אזרחית של משק הבית — נזק שילד גרם בבית של מישהו אחר, אופניים שפגעו בהולך רגל — מטופלת בפרק האחריות ולא בפרק המבנה או התכולה; ומי רשום כמבוטח בפוליסה, כי זה קובע מי רשאי לתבוע ביום שצריך.</p>
    <p><strong>נכסים ותכולה בשווי גבוה.</strong> לא לכל לקוח יש נכסים שדורשים סידור מיוחד, ואין שום סיבה להניח שכן. אבל אם יש — בית בשווי גבוה, אמנות, תכשיטים, שעונים, כמה נכסים — כדאי לדעת שפוליסות דירה סטנדרטיות מגבילות פריטי ערך בסעיף נפרד (למשל, סך התכשיטים לא יעלה על אחוז מסוים מסכום התכולה), ולפעמים דורשות כספת או מערכת אזעקה. זו לא סירוב לבטח, אלא דרישה להצהיר ולסדר בנפרד. הצהרה מדויקת עכשיו היא מה שמונע מחלוקת על שווי אחר כך.</p>
    <p><strong>עצמאים ובעלי עסקים.</strong> מי שעובד או מנהל עסק בפורטוגל צריך להסתכל, מעל הפוליסות הפרטיות, גם על אחריות מקצועית (<em dir="ltr">Responsabilidade Civil Profissional</em>), על ביטוח לנכס או לחצרים העסקיים, ועל ביטוחים שקשורים להעסקת עובדים, לפי אופי הפעילות. זה לא מרכז הכובד של האשכול הזה — <a href="/il/">/il/</a> עוסק בעיקר בביטוח של אנשים ומשפחות — אבל אם יש לכם פעילות עסקית בפורטוגל, כדאי לציין את זה באותה פנייה.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="eich-anachnu-ovdim">
  <div class="container narrow article-body">
    <h2 id="eich-anachnu-ovdim">מי אנחנו ואיך אנחנו עובדים</h2>
    <p><bdi>Adler &amp; Rochefort</bdi> היא סוכנות ביטוח רשומה בפורטוגל (רישום <bdi>ASF</bdi> <bdi>425591790/3</bdi>), עם משרד בלאגוש שבאלגרבה. אין לנו משרד בישראל. אנחנו מייעצים בתוך מגוון המבטחים שאנחנו עובדים איתם, לא אתר השוואת מחירים, ולא מוכרים "הפרמיה הזולה בשוק" כטיעון. מחיר חשוב — הוא כמעט תמיד חלק מההחלטה — אבל הסדר הוא קודם להגדיר מה הכיסוי צריך לכלול, ואחר כך להשוות מחירים בין הצעות שמכסות את אותו דבר. הורדת פרמיה על ידי מחיקת כיסוי שכן צריך היא לא חיסכון, היא דחיית העלות למועד גרוע יותר.</p>
    <ol class="process-steps">
      <li><div><strong>מתחילים מהמצב, לא מהמוצר.</strong><span>מה צריך להיות מכוסה, מה השווי, מי גר בנכס, יש משכנתה, יש פעילות עסקית.</span></div></li>
      <li><div><strong>כיסוי לפני מחיר.</strong><span>קודם מגדירים מה הפוליסה חייבת לכסות ועל מה מוותרים ביודעין, ורק אז משווים הצעות.</span></div></li>
      <li><div><strong>התנאים מוסברים בכתב באנגלית.</strong><span>לפני החתימה: סכומי ביטוח, השתתפות עצמית, חריגים עיקריים ומועדי דיווח.</span></div></li>
      <li><div><strong>בתביעה יש עם מי לדבר.</strong><span>פתיחת התביעה, ההתנהלות מול המבטח, ושמירה על לוחות הזמנים. כאן נמצא הערך האמיתי של סוכן.</span></div></li>
    </ol>
    <p class="legal-note">הכיסוי בפועל תלוי במבטח ובתוכנית שנבחרה. העמוד הזה מתאר איך השוק הפורטוגזי מתנהל בדרך כלל, ואינו אישור לתנאים של חוזה מסוים.</p>
  </div>
</section>`,
  // The portrait band and the insurer panel below are rendered by
  // scripts/lib/site-sections.mjs from the existing shared asset and the
  // existing insurer list; only the Hebrew wording lives here.
  audience: {
    heading: 'בשביל מי <em>אנחנו כאן</em>',
    body:
      'אנחנו מטפלים בביטוח בפורטוגל של לקוחות דוברי עברית: משפחות, מי שקונה נכס, בעלי נכסים, עצמאים ואנשי מקצוע. בין אם הגעתם השנה ובין אם אתם כאן כבר שנים, הצד הפורטוגזי של הביטוח הוא עלינו — בדיקת הצורך, השוואת תוכניות מתאימות, הפקה, טיפול שוטף וליווי בתביעות, אצל אותו אדם מתחילת הדרך.',
    alt: 'יועץ ביטוח שמלווה תושבים בין־לאומיים בפורטוגל',
  },
  insurers: {
    heading: 'אנחנו משווים בין <em>מבטחים מובילים</em>',
    lead:
      'כסוכנים אנחנו לא משויכים למבטח אחד. אנחנו מייעצים בתוך מגוון המבטחים שאנחנו עובדים איתם, ומחפשים את התוכנית שמתאימה למצב שלכם — לא רק את הפרמיה הנמוכה ביותר.',
  },
  faqTitle: 'ביטוח בפורטוגל: שאלות שישראלים שואלים',
  faq: [
    {
      q: 'אתם נותנים שירות בעברית?',
      a: '<p>לא. התוכן כאן בעברית כדי שתוכלו להבין את התמונה לפני שאתם מחליטים משהו, אבל העבודה עצמה מתנהלת בכתב באנגלית: הצעות מחיר, הסבר תנאים, התכתבות וליווי בתביעה. אנחנו מעדיפים לומר את זה מראש ולא שתגלו את זה באמצע תביעה. אם בן משפחה, חבר או יועץ שקורא אנגלית עובר על המסמכים איתכם — זה בסדר גמור ונפוץ מאוד.</p>',
    },
    {
      q: 'יש לכם משרד בישראל?',
      a: '<p>אין. המשרד שלנו נמצא בלאגוש שבאלגרבה, פורטוגל, ואנחנו רשומים כסוכנות ביטוח אצל הרשות הפורטוגזית <bdi>ASF</bdi> (מספר רישום <bdi>425591790/3</bdi>). אנחנו עובדים מול לקוחות שנמצאים בישראל באותו אופן שבו אנחנו עובדים מול לקוחות במקומות אחרים: בדוא״ל, בטלפון ובווידאו. מה שאנחנו יכולים לסדר הוא ביטוח פורטוגזי — פוליסות של מבטחים בפורטוגל, על נכסים, רכבים, אנשים ופעילות בפורטוגל. ביטוחים ישראליים הם לא התחום שלנו.</p>',
    },
    {
      q: 'ביטוח דירה הוא חובה בפורטוגל?',
      a: '<p>צריך להפריד בין שתי שכבות. בבניין בבעלות משותפת (<em dir="ltr">propriedade horizontal</em>, מה שאנחנו קוראים לו בית משותף), החוק הפורטוגזי מחייב ביטוח נגד אש, וזה מסודר בדרך כלל דרך ה־<em dir="ltr">condomínio</em> ומתייחס לחלקים המשותפים של המבנה. לגבי הדירה שלכם מבפנים ולגבי התכולה, בדרך כלל אין חיוב חוקי — אבל אם יש משכנתה, הבנק כמעט בוודאות ידרוש פוליסה כתנאי להלוואה. בפועל התוצאה זהה: מי שיש לו נכס צריך ביטוח, והשאלה היא רק איך מגדירים את הכיסוי.</p>',
    },
    {
      q: 'כיסוי לרעידת אדמה נכלל אוטומטית, כמו שמקובל בישראל?',
      a: '<p>אין להניח שכן. בפורטוגל כיסוי נזקי רעידת אדמה (<em dir="ltr">sismos</em>) הוא בדרך כלל הרחבה אופציונלית בפוליסת דירה, ולא רכיב שמגיע כברירת מחדל. הזמינות, המחיר וההשתתפות העצמית משתנים בין מבטחים, ולפעמים גם לפי אזור, שנת בנייה וסוג הבנייה. זו אחת ההנחות שאנחנו בודקים במפורש בכל הצעה: אם ביקשתם את הכיסוי, הוא צריך להיות רשום בפוליסה בשמו, עם הסכום וההשתתפות העצמית שלו — ולא להישאר הנחה בעל פה. <a href="/il/home-insurance-portugal/">ההסבר המלא נמצא בעמוד ביטוח הדירה</a>.</p>',
    },
    {
      q: 'אפשר לבטח בפורטוגל לפני שיש אשרת שהייה או תעודת תושב?',
      a: '<p>בדרך כלל כן, אבל צריך כמה דברים בסיסיים, והנפוץ ביניהם הוא מספר משלם מיסים פורטוגזי (<bdi>NIF</bdi>). רוב המבטחים גם צריכים כתובת למשלוח מסמכים ואמצעי תשלום פעיל. אם נדרש דווקא חשבון בנק פורטוגזי — זה משתנה בין מבטחים. המצב של בעל נכס שאינו תושב, שגר מחוץ לפורטוגל, הוא מצב נפוץ ואפשר לסדר אותו. את הרשימה המדויקת לפי המצב שלכם נשלח בתשובה הראשונה.</p>',
    },
    {
      q: 'הפוליסה בפורטוגזית ואני לא קורא פורטוגזית. מה עושים?',
      a: '<p>מבטחים בפורטוגל מנפיקים פוליסות בפורטוגזית כי החוק מחייב, וזה לא משתנה כשהלקוח זר. מה שאנחנו עושים זה להעביר לכם בכתב באנגלית, לפני החתימה, את החלקים שקובעים: סכומי הביטוח, ההשתתפות העצמית, החריגים העיקריים ומועדי הדיווח על נזק. אם צריך, אפשר להעביר את ההסבר הזה גם למי שעוזר לכם לבדוק.</p>',
    },
    {
      q: 'אתם אתר השוואת מחירים?',
      a: '<p>לא. אנחנו סוכנות ביטוח רשומה, שמייעצת בתוך מגוון המבטחים שהיא עובדת איתם — לא כל המבטחים בפורטוגל. אנחנו כן משווים תוכניות, אבל ההשוואה מתחילה מהשוואת כיסוי: שתי פוליסות שהפרמיה שלהן נבדלת ב־30% הן פעמים רבות פשוט לא אותו מוצר.</p>',
    },
    {
      q: 'אילו מסמכים בדרך כלל צריך?',
      a: '<p>בדרך כלל: <bdi>NIF</bdi>, מסמך זיהוי וכתובת בפורטוגל. לביטוח דירה — ה־<em dir="ltr">caderneta predial</em> (מסמך המידע של הנכס ברשויות המס) או מסמכי הרכישה, שמהם עולים השטח ושנת הבנייה. לביטוח רכב — מסמכי הרכב, ופרטים על ניסיון הנהיגה והתביעות. לביטוח בריאות — גילי המבוטחים והרכב המשפחה. את הרשימה המלאה נשלח לפי המצב הספציפי.</p>',
    },
  ],
  related: [
    { url: '/il/insurance-guide-portugal/', label: 'מדריך הביטוח בפורטוגל ושאלות נפוצות' },
    { url: '/il/moving-to-portugal/', label: 'מעבר מישראל לפורטוגל: סדר הפעולות בביטוח' },
  ],
};
