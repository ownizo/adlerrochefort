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
  title: 'ביטוח לבתים, לאמנות ולמשפחה בפורטוגל ובספרד | Adler & Rochefort',
  description:
    'ביטוח לבתים בעלי ערך גבוה, אמנות ואוספים, אחריות אזרחית משפחתית ובריאות בין־לאומית בפורטוגל ובספרד. משרדים בליסבון ובלאגוש, רישום ASF 425591790/3.',
  keywords:
    'ביטוח בפורטוגל, ביטוח בית יוקרה פורטוגל, ביטוח אמנות ואוספים, אחריות אזרחית משפחתית, ביטוח בריאות בין־לאומי, ישראלים בפורטוגל, ביטוח בספרד, לקוחות פרטיים',
  eyebrow: 'לקוחות פרטיים · פורטוגל וספרד',
  h1: 'ביטוח לרכוש<br><em>בעל ערך גבוה.</em>',
  standfirst:
    'בתי מגורים, אמנות ואוספים, אחריות אזרחית והגנה על המשפחה — בפורטוגל ובספרד. חיתום פרטני, חוות דעת בכתב ויועץ אחד — מהפנייה הראשונה ועד התביעה.',
  published: '2026-09-13T09:00:00+00:00',
  modified: '2026-09-26T09:00:00+00:00',
  breadcrumb: [{ name: 'ביטוח בפורטוגל', url: '/il/' }],
  pullquote:
    'בנכסים בעלי ערך גבוה השאלה איננה כמה עולה הפוליסה, אלא מה בדיוק היא תשלם ביום שבו תצטרכו אותה.',
  schemaType: 'WebPage',
  formHeading: 'ספרו לנו על המצב שלכם',
  formBranch: '',
  formSubject: 'פנייה כללית (IL)',
  formCta: 'שליחת הפנייה',
  formIntro:
    'כתבו מה צריך להיות מכוסה וממתי, או צרפו את הפוליסה הקיימת שלכם. נחזור אליכם בכתב: מה הפוליסה כוללת היום, מה חסר בה, ומה נדרש כדי לבנות כיסוי מתאים.',
  formPlaceholder:
    'למשל: אנחנו עוברים לליסבון במרץ, קנינו דירה בבניין עם condomínio, מתכננים לקנות רכב כאן, ויש לנו שני ילדים.',
  sections: `
<section class="section plain" aria-labelledby="arba-hevdelim">
  <div class="container narrow article-body">
    <h2 id="arba-hevdelim">ארבעה הבדלים שכדאי להכיר לפני שקוראים הצעה</h2>
    <p>ביטוח בפורטוגל הוא לא עולם זר — אבל הוא בנוי אחרת ממה שמכירים מישראל. רוב הלקוחות הישראלים שאנחנו פוגשים מבינים ביטוח היטב. הבעיה כמעט תמיד לא חוסר ידע, אלא ידע נכון שהועבר ממקום אחד למקום אחר: מוצר שנראה מוכר מזמין הנחה מוכרת. אלה ארבעת ההבדלים המבניים שמייצרים את מרבית אי־ההבנות.</p>
    <p><strong>ראשית, כיסוי לרעידת אדמה הוא בדרך כלל תוספת נפרדת.</strong> בישראל כיסוי רעידת אדמה הוא חלק שגור מהשיח על ביטוח דירה, ורבים מגיעים בהנחה שזה פשוט מה שביטוח דירה כולל. בפורטוגל זה עובד אחרת: כיסוי נזקי רעידת אדמה (<em dir="ltr">sismos</em>) הוא בדרך כלל הרחבה אופציונלית, שצריך לבקש במפורש, שעולה כסף, ושלפעמים מגיעה עם השתתפות עצמית משמעותית משלה. יש מבטחים שמציעים אותה בקלות ויש כאלה שפחות, וזה משתנה גם לפי אזור ולפי סוג הבנייה. אל תניחו שהיא שם. בקשו לראות בכתב אם היא נכללה בהצעה — וגם באיזו השתתפות עצמית.</p>
    <p><strong>שנית, סכום הביטוח של המבנה הוא עלות בנייה מחדש, לא מחיר הנכס.</strong> ההיגיון הזה מוכר מישראל, אבל שווה לחזור עליו כי כאן הוא נאכף בצורה ישירה. מה שמבטחים בפורטוגל הוא "כמה יעלה להקים את המבנה הזה מחדש" (<em dir="ltr">valor de reconstrução</em>) — מספר שבדרך כלל נמוך ממה ששילמתם, כי מחיר הנכס כולל גם את הקרקע ואת המיקום. אם הסכום נקבע נמוך מדי, נכנס לתמונה מה שאתם מכירים בשם ביטוח חסר: בפורטוגל קוראים לזה <em dir="ltr">regra proporcional</em>, והמשמעות היא שגם בנזק חלקי, התגמול עלול להיות מופחת באותו שיעור שבו הסכום היה חסר.</p>
    <p><strong>שלישית, "ביטוח חובה" לרכב מכסה כאן יותר ממה שהמילה מרמזת.</strong> בישראל ביטוח חובה עוסק בנזקי גוף, ונזק לרכוש של צד שלישי הוא תפקידם של ביטוח צד ג׳ או מקיף. בפורטוגל השכבה החובה — <em dir="ltr">Responsabilidade Civil Automóvel</em> — מכסה גם נזקי גוף וגם נזק לרכוש של צד שלישי, יחד. מה שהיא לא מכסה זה את הרכב שלכם: לשם כך צריך כיסוי מקיף. אותה מילה, תכולה אחרת.</p>
    <p><strong>רביעית, אחריות אזרחית היא כאן מוצר בפני עצמו.</strong> בישראל צד ג׳ הוא בדרך כלל הרחבה בתוך פוליסת הדירה. בפורטוגל <em dir="ltr">Responsabilidade Civil</em> היא משפחת מוצרים שלמה — פרטית ומקצועית — ופוליסת דירה עשויה לכלול סכום אחריות מסוים, אך לעיתים מוגבל לשכנים באותו בניין, ולעיתים לא נכלל בכלל. זה תלוי במבטח ובתוכנית.</p>
    <div class="callout">
      <span class="callout-label">בשורה אחת</span>
      הניסיון הישראלי שלכם שווה משהו כאן, אבל צריך לחלק אותו מחדש: מבנה לפי עלות בנייה, רעידת אדמה כתוספת שנבדקת, בריאות במקביל למערכת הציבורית, ואחריות אזרחית כנושא נפרד. מי שסידר את ארבעת אלה קורא הצעה אחרת לגמרי.
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
        <h3><a href="/il/home-insurance-portugal/">ביטוח לבתים בעלי ערך גבוה</a></h3>
        <p>מסגרת הכיסוי לבית, לתכולה, לאמנות ולאוספים: סקר באתר, ויתור על כלל ביטוח החסר, בנייה מחדש מובטחת וערך מוסכם. וגם היסודות — ההבדל בין מבנה לתכולה, עד לאן מגיע הביטוח של ה־<em dir="ltr">condomínio</em>, איך אומדים עלות בנייה מחדש, נזקי מים ואש, כיסוי רעידת אדמה כתוספת, ותנאים לבית שני ולתקופות שהנכס ריק.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/il/health-insurance-portugal/">ביטוח בריאות פרטי ובין־לאומי למשפחות</a></h3>
        <p>איך ה־<em dir="ltr">SNS</em> הציבורי, רפואה פרטית וביטוח בריאות פרטי מתקיימים במקביל, רשתות מול החזר, תקופות המתנה, הצהרת בריאות וחיתום, מצבים רפואיים קיימים ופוליסות משפחתיות.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/il/car-insurance-portugal/">ביטוח רכב</a></h3>
        <p>מה בדיוק כוללת שכבת החובה, מה מוסיף כיסוי מקיף, קניית רכב בפורטוגל, ייבוא רכב, שאלת הרישיון הישראלי, והאם היסטוריית התביעות מישראל נלקחת בחשבון.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/il/liability-insurance-portugal/">אחריות אזרחית משפחתית</a></h3>
        <p>אחריות של משק הבית בגבולות של מיליוני אירו, בתחולה עולמית, עם הוצאות הגנה מעבר לגבול: אורחים, צוות בית, בריכות וסירות. ובנפרד — אחריות מקצועית (<em dir="ltr">Responsabilidade Civil Profissional</em>), שהיא חוזה אחר.</p>
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
    <h2 id="mishpachot-vaasakim">בתים, אוספים, משפחות — ומה שנשאר נפרד</h2>
    <p><strong>בתים, אמנות ואוספים.</strong> בבית בעל ערך גבוה, פוליסת דירה סטנדרטית היא לרוב הכלי הלא נכון: היא מגבילה פריטי ערך בסעיף נפרד (למשל, סך התכשיטים לא יעלה על אחוז מסוים מסכום התכולה), קוצבת את הדיור החלופי לחודשים ספורים, ומכסה גינה, חומות ובריכה בסכום סמלי. הפוליסות שאנחנו מסדרים ללקוחות פרטיים בנויות אחרת: סקר באתר שקובע את עלות הבנייה מחדש, ויתור על כלל ביטוח החסר כשמתקבלים הסכומים המומלצים, ואמנות, תכשיטים, שעונים ואוספים בערך מוסכם מראש. <a href="/il/home-insurance-portugal/">מסגרת הכיסוי המלאה נמצאת בעמוד ביטוח הבית</a>.</p>
    <p><strong>משפחות עם ילדים.</strong> השאלה הראשונה היא כמעט תמיד בריאות פרטית: תוך כמה זמן מקבלים תור לרופא ילדים, איך בונים פוליסה משפחתית, ואיך נספרות תקופות ההמתנה של הילדים. שתי נקודות פחות מדוברות: אחריות אזרחית של משק הבית — נזק שילד גרם בבית של מישהו אחר, אופניים שפגעו בהולך רגל — מטופלת בפרק האחריות ולא בפרק המבנה או התכולה; ומי רשום כמבוטח בפוליסה, כי זה קובע מי רשאי לתבוע ביום שצריך.</p>
    <p><strong>בריאות בין־לאומית.</strong> משפחה שחיה בין פורטוגל, ספרד וישראל צריכה לרוב יותר מתוכנית מקומית: בחירה חופשית של בית חולים, כיסוי מחוץ לפורטוגל, ותנאים שממשיכים ללוות את המשפחה גם כשהיא עוברת מדינה. <a href="/il/health-insurance-portugal/">עמוד ביטוח הבריאות</a> מסביר את ההבדל בין תוכנית פורטוגזית לתוכנית בין־לאומית.</p>
    <p><strong>מה שנשאר נפרד.</strong> אחריות מקצועית (<em dir="ltr">Responsabilidade Civil Profissional</em>), ביטוח לחצרים עסקיים וביטוחים שקשורים להעסקת עובדים הם חוזים אחרים, עם חיתום משלהם. הם לא מרכז הכובד של העמודים האלה — <a href="/il/">/il/</a> עוסק בביטוח של משפחות ושל הרכוש הפרטי שלהן — אבל אם יש לכם פעילות עסקית בפורטוגל או בספרד, כדאי לציין את זה באותה פנייה.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="eich-anachnu-ovdim">
  <div class="container narrow article-body">
    <h2 id="eich-anachnu-ovdim">מי אנחנו ואיך אנחנו עובדים</h2>
    <p><bdi>Adler &amp; Rochefort</bdi> היא סוכנות לתיווך ביטוח ללקוחות פרטיים ולמשפחות בעלות הון משמעותי, בפורטוגל ובספרד. אנחנו רשומים אצל הרשות הפורטוגזית (רישום <bdi>ASF</bdi> <bdi>425591790/3</bdi>), המשרדים שלנו בליסבון ובלאגוש, ובספרד אנחנו פועלים במסגרת חופש מתן השירותים באיחוד האירופי. אין לנו משרד בישראל. אנחנו מייעצים בתוך מגוון המבטחים שאנחנו עובדים איתם, ואיננו אתר השוואת מחירים: קודם מגדירים מה הכיסוי צריך לכלול, ורק אחר כך משווים בין נוסחים שמכסים את אותו דבר.</p>
    <ol class="process-steps">
      <li><div><strong>מתחילים מהמשפחה ומהרכוש, לא מהמוצר.</strong><span>אילו בתים, באילו מדינות, מה השווי, אילו אוספים, מי גר בבית ומי עובד בו.</span></div></li>
      <li><div><strong>חיתום פרטני.</strong><span>כל סיכון מוצג למבטח בנפרד, עם הפרטים שהוא צריך — ולא דרך מחשבון.</span></div></li>
      <li><div><strong>חוות דעת בכתב, באנגלית.</strong><span>לפני החתימה: סכומי ביטוח, השתתפות עצמית, חריגים עיקריים ומועדי דיווח — ומה אנחנו ממליצים ולמה.</span></div></li>
      <li><div><strong>יועץ אחד, עד התביעה.</strong><span>אותו אדם מהפנייה הראשונה, דרך החידושים ועד ההתנהלות מול המבטח ביום התביעה.</span></div></li>
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
      'אנחנו מטפלים בביטוח של משפחות בעלות הון משמעותי שיש להן בית, אמנות או אוספים בפורטוגל ובספרד — בין אם הן גרות כאן, מחלקות את השנה בין כמה מדינות או מחזיקות כאן בית שני. בחינת הצורך, חיתום פרטני, חוות דעת בכתב, טיפול שוטף וליווי בתביעות — אצל אותו יועץ מתחילת הדרך.',
    alt: 'יועץ ביטוח שמלווה תושבים בין־לאומיים בפורטוגל',
  },
  insurers: {
    heading: 'מבטחים ושותפי תיווך משותף <em>שאנחנו עובדים איתם</em>',
    lead:
      'כסוכנים אנחנו לא משויכים למבטח אחד. אנחנו מייעצים בתוך מגוון המבטחים שאנחנו עובדים איתם, ומחפשים את הנוסח שמתאים לבית, לאוספים ולמשפחה שלכם.',
  },
  faqTitle: 'ביטוח בפורטוגל: שאלות שישראלים שואלים',
  faq: [
    {
      q: 'אתם נותנים שירות בעברית?',
      a: '<p>לא. התוכן כאן בעברית כדי שתוכלו להבין את התמונה לפני שאתם מחליטים משהו, אבל העבודה עצמה מתנהלת בכתב באנגלית: הצעות מחיר, הסבר תנאים, התכתבות וליווי בתביעה. אנחנו מעדיפים לומר את זה מראש ולא שתגלו את זה באמצע תביעה. אם בן משפחה, חבר או יועץ שקורא אנגלית עובר על המסמכים איתכם — זה בסדר גמור ונפוץ מאוד.</p>',
    },
    {
      q: 'יש לכם משרד בישראל?',
      a: '<p>אין. המשרדים שלנו בליסבון ובלאגוש, ואנחנו רשומים כסוכנות ביטוח אצל הרשות הפורטוגזית <bdi>ASF</bdi> (מספר רישום <bdi>425591790/3</bdi>). אנחנו עובדים מול לקוחות שנמצאים בישראל באותו אופן שבו אנחנו עובדים מול לקוחות במקומות אחרים: בדוא״ל, בטלפון ובווידאו. מה שאנחנו מסדרים הוא ביטוח לנכסים, לאנשים ולפעילות בפורטוגל ובספרד. ביטוחים ישראליים הם לא התחום שלנו.</p>',
    },
    {
      q: 'אתם מבטחים גם נכסים בספרד?',
      a: '<p>כן. בספרד אנחנו פועלים במסגרת חופש מתן השירותים באיחוד האירופי, ומשפחות רבות מחזיקות בית בפורטוגל ובית נוסף בספרד. בפוליסות ללקוחות פרטיים אפשר לעיתים לרכז את שני הבתים, את האוספים ואת האחריות האזרחית של המשפחה תחת מבנה אחד, עם יועץ אחד. האם זה אפשרי בפועל ובאילו תנאים — תלוי במבטח ובסיכון, ונאמר לכם את זה בכתב.</p>',
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
