/**
 * /il/home-insurance-portugal/ — household and property insurance.
 *
 * Search intent: ביטוח דירה בפורטוגל / ביטוח מבנה ותכולה פורטוגל — an owner,
 * a buyer, or a landlord who wants to know what a Portuguese home policy
 * actually contains before accepting a proposal.
 *
 * Written against the Israeli reader's existing knowledge rather than from
 * zero. An Israeli owner already knows the מבנה/תכולה split, already knows a
 * mortgage bank will demand a policy, and already knows the words ביטוח חסר.
 * So the page spends its length on the four places where the Portuguese
 * product diverges from that mental model:
 *
 *   * Seismic cover. Brief §6 is explicit that it must not be presented as
 *     automatically included, and for this market that is not a formality: an
 *     Israeli buyer's default assumption is that earthquake cover is part of
 *     what household insurance is. So it gets its own section, its own FAQ
 *     answer, and a line in the pre-signature checklist — stated as "ask, and
 *     get it in writing", never as "you have it" and never as "you don't".
 *   * The condomínio's fire policy, which covers the building's common parts
 *     and is routinely mistaken for cover on the flat itself.
 *   * Reconstruction value versus purchase price, and regra proporcional named
 *     by its familiar Hebrew equivalent, ביטוח חסר.
 *   * Occupancy: second homes, holiday homes, short-term rental and long
 *     unoccupied periods all carry conditions, and undeclared use is the most
 *     common way a valid-looking policy fails at claim time.
 *
 * Everything about what a specific policy covers is qualified. Portuguese
 * household wordings differ between insurers on exactly the points a reader
 * most wants a flat answer about, and a flat answer here would be wrong on
 * some proportion of proposals.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';

export const HOME_PAGE = {
  slug: 'home-insurance-portugal',
  url: '/il/home-insurance-portugal/',
  cluster: 'home',
  title: 'ביטוח דירה בפורטוגל: מבנה, תכולה ומה שכדאי לבדוק | Adler & Rochefort',
  description:
    'ביטוח דירה ובית בפורטוגל: ההבדל בין מבנה לתכולה, עלות בנייה מחדש, נזקי מים ואש, כיסוי רעידת אדמה כתוספת, בית שני והשכרה, ומה לבדוק לפני שמאשרים הצעה.',
  keywords:
    'ביטוח דירה בפורטוגל, ביטוח מבנה בפורטוגל, ביטוח תכולה בפורטוגל, ביטוח בית בפורטוגל, רעידת אדמה ביטוח פורטוגל, ביטוח נכס להשכרה פורטוגל',
  eyebrow: 'ביטוח דירה ומבנה',
  h1: 'ביטוח דירה ובית בפורטוגל',
  standfirst:
    'פוליסת דירה פורטוגזית נראית מוכרת למי שמכיר ביטוח דירה מישראל — ובדיוק בגלל זה קל לפספס את ההבדלים. הנה מה שהפוליסה מכסה, איך נקבע סכום הביטוח, מה נשאר בחוץ אלא אם ביקשתם, ומה לבדוק לפני שמאשרים הצעה.',
  published: '2026-09-13T09:00:00+00:00',
  modified: '2026-09-13T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'ביטוח דירה ומבנה', url: '/il/home-insurance-portugal/' }],
  pullquote:
    'סכום הביטוח של המבנה אינו מה ששילמתם על הנכס. הוא מה שיעלה לבנות אותו מחדש.',
  schemaType: 'Article',
  // Especificação v2, Parte C — wizard config, same three-step shape as the
  // PL/SE/DK/ZH cluster (scripts/lib/market-cluster.mjs's wizardFormHtml),
  // Hebrew field text mirrored exactly from data/i18n/quote-form/he.json's
  // ramos.habitacao block, which check-i18n-parity.mjs holds as the source
  // of truth. `fieldsHtml` is inserted as raw HTML (not run through esc()),
  // so Latin terms embedded in a Hebrew label use <bdi> here rather than
  // the isolate characters he.json needs for its esc()/textContent-shared
  // strings — see the reasoning in scripts/il-content/ui.mjs's header.
  wizard: {
    idPrefix: 'il-hab',
    formName: 'il-home-insurance-wizard',
    ramo: 'Home insurance',
    heading: 'בקשת הצעה לביטוח דירה',
    intro: 'נא למלא את הפרטים החשובים. נשיב בתוך 24 שעות עבודה.',
    stepLabel2: 'פרטי הנכס',
    submitLabel: 'שליחת הבקשה',
    microNote:
      'נשיב בתוך 24 שעות עבודה. הפרטים משמשים אך ורק להכנת ההצעה הזו ומעובדים בהתאם לתקנה האירופית להגנת מידע (<bdi>GDPR</bdi>) — ראו <a href="/en/privacy-policy" hreflang="en">מדיניות הפרטיות</a>.',
    scripts: ['quote-field-toggle.js'],
    fieldsHtml: `        <div class="contact-form-field">
          <label for="il-hab-regime">אופן השימוש בנכס *</label>
          <select id="il-hab-regime" name="regime_ocupacao" data-branch-select required>
            <option value="">בחרו אפשרות</option>
            <option value="permanente">מגורי קבע</option>
            <option value="holiday_home">בית שני / בית חופשה</option>
            <option value="alojamento_local"><bdi>Alojamento Local</bdi> (השכרה לטווח קצר)</option>
          </select>
        </div>
        <div data-branch="alojamento_local" hidden>
          <div class="contact-form-field">
            <label for="il-hab-al-regime">סוג ההשכרה לטווח קצר *</label>
            <select id="il-hab-al-regime" name="al_regime" required disabled>
              <option value="">בחרו אפשרות</option>
              <option value="tempo_inteiro">מלא</option>
              <option value="parcial">חלקי (שימוש משותף בדירה)</option>
            </select>
          </div>
        </div>
        <div class="contact-form-field"><label for="il-hab-ano-construcao">שנת בנייה *</label><input type="number" id="il-hab-ano-construcao" name="ano_construcao" min="1800" required></div>
        <div class="contact-form-field"><label for="il-hab-area">שטח ברוטו (מ״ר) *</label><input type="number" id="il-hab-area" name="area_bruta" min="1" required></div>
        <div class="contact-form-field"><label for="il-hab-wc">מספר חדרי רחצה *</label><input type="number" id="il-hab-wc" name="casas_banho" min="0" required></div>
        <div class="contact-form-field">
          <label class="contact-form-checkbox" for="il-hab-obras-check"><input type="checkbox" id="il-hab-obras-check" data-field-toggle="il-hab-obras-group"> בוצע שיפוץ בשנים האחרונות?</label>
        </div>
        <div id="il-hab-obras-group" hidden>
          <div class="contact-form-field"><label for="il-hab-obras-ano">שנת השיפוץ *</label><input type="number" id="il-hab-obras-ano" name="obras_ano" data-validate="renovation-year" data-validate-ref="ano_construcao" required disabled></div>
          <div class="contact-form-field"><label for="il-hab-obras-desc">נא לתאר את העבודות שבוצעו *</label><textarea id="il-hab-obras-desc" name="obras_descricao" minlength="10" required disabled></textarea></div>
        </div>
        <div class="contact-form-field"><label for="il-hab-capital-edificio">סכום ביטוח המבנה (<bdi>€</bdi>) *</label><input type="number" id="il-hab-capital-edificio" name="capital_edificio" min="0" step="1000" required></div>
        <div class="contact-form-field"><label for="il-hab-capital-conteudo">סכום ביטוח התכולה (<bdi>€</bdi>) *</label><input type="number" id="il-hab-capital-conteudo" name="capital_conteudo" min="0" step="500" required></div>`,
  },
  sections: `
<section class="section plain" aria-labelledby="mivne-vetchula">
  <div class="container narrow article-body">
    <h2 id="mivne-vetchula">מבנה ותכולה: אותה חלוקה, גבול אחר</h2>
    <p>החלוקה בין מבנה לתכולה מוכרת, אבל הגבול המדויק בין השניים נקבע בפורטוגל לפי הפוליסה ולא לפי האינטואיציה. פוליסת דירה פורטוגזית נקראת בדרך כלל <em dir="ltr">seguro multirriscos habitação</em> — ביטוח רב־סיכונים לדירה — ומורכבת משני סכומי ביטוח נפרדים, שאפשר לרכוש יחד או רק את אחד מהם.</p>
    <p><strong>מבנה</strong> (<em dir="ltr">edifício</em>) הוא הקונסטרוקציה עצמה: קירות, גג, רצפות, מערכות אינסטלציה וחשמל, ובדרך כלל גם מה שמחובר חיבור של קבע — מטבח מותקן, ארונות קיר, דלתות, חלונות, אריחים. <strong>תכולה</strong> (<em dir="ltr">recheio</em> או <em dir="ltr">conteúdo</em>) היא מה שהייתם לוקחים איתכם במעבר דירה: רהיטים, מוצרי חשמל, בגדים, ציוד, כלים.</p>
    <p>שני מקרי גבול חוזרים כל הזמן. מכשירי חשמל גדולים משובצים — תנור, כיריים, מדיח — מסווגים אצל חלק מהמבטחים כמבנה ואצל אחרים כתכולה. מערכות מיזוג, דודי שמש ופאנלים סולריים גם הם משתנים. זה לא עניין תיאורטי: אם המכשיר נחשב תכולה ולא רכשתם כיסוי תכולה, הוא לא מכוסה. שווה לשאול את השאלה הזאת מראש ולקבל את התשובה בכתב, במיוחד בדירה שנמכרה עם מטבח מלא.</p>
    <p>מי צריך מה: בעל דירה שגר בה צריך בדרך כלל את שני הסכומים. משכיר צריך מבנה, ותכולה רק בגובה מה ששייך לו — רהיטים ומוצרי חשמל שהשאיר בדירה, לא החפצים של השוכר. שוכר צריך תכולה בלבד, ולעיתים גם אחריות אזרחית, שהיא לרוב מה שיטפל בנזק מים שיצא מהדירה שלו אל השכנים.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="condominio">
  <div class="container narrow article-body">
    <h2 id="condominio">מה הביטוח של ה־<span dir="ltr">condomínio</span> מכסה — ומה לא</h2>
    <p>זו נקודת הבלבול הראשונה בבית משותף. בבניין בבעלות משותפת (<em dir="ltr">propriedade horizontal</em>) החוק הפורטוגזי מחייב ביטוח אש, והוא נרכש בדרך כלל על ידי ה־<em dir="ltr">condomínio</em> — ועד הבית — ומשולם דרך דמי הוועד. הוא קיים. הוא פשוט לא מכסה את מה שרבים חושבים.</p>
    <p>הפוליסה של ה־<em dir="ltr">condomínio</em> מכסה בדרך כלל את החלקים המשותפים ואת המבנה כמסגרת — גג, חדר מדרגות, קירות חוץ, מעלית — ובהיקף שנקבע בפוליסה שלה, שלרוב מתמקד בסיכון אש. מה שהיא בדרך כלל לא מכסה: את פנים הדירה שלכם, את התכולה שלכם, נזקי מים שמקורם בתוך הדירה שלכם, וגם לא בהכרח נזק שנגרם לדירה שלכם מאירוע בחלקים המשותפים בהיקף שמספיק לכם.</p>
    <p>יש גם צד שני להנחה הזאת: לפעמים הכיסוי של הוועד כן חל, ואז אין טעם לשלם פעמיים על אותה שכבה. לכן השאלה המעשית היא לא "יש ביטוח בניין?" אלא "מה כתוב בפוליסה של ה־<em dir="ltr">condomínio</em>, ועל מה הפוליסה שלי צריכה להשתלב". כדאי לבקש מהוועד עותק של ה־<em dir="ltr">condições particulares</em>. זו בקשה שגרתית לגמרי.</p>
    <div class="callout">
      <span class="callout-label">מה לשאול את ועד הבית</span>
      מה סכום הביטוח של המבנה בפוליסה המשותפת, אילו סיכונים היא כוללת מלבד אש, האם יש בה כיסוי לנזקי מים בחלקים המשותפים, והאם היא כוללת כיסוי לרעידת אדמה. שלוש מהשאלות האלה משפיעות ישירות על מה שצריך להיות בפוליסה שלכם.
    </div>
  </div>
</section>

<section class="section plain" aria-labelledby="sechum-bituach">
  <div class="container narrow article-body">
    <h2 id="sechum-bituach">סכום הביטוח: עלות בנייה מחדש, ולא מחיר הנכס</h2>
    <p>זה המספר שקובע יותר מכל דבר אחר מה יקרה ביום התביעה. מה שמבטחים בפורטוגל הוא עלות הבנייה מחדש (<em dir="ltr">valor de reconstrução</em>) — כמה יעלה להקים את המבנה הזה מחדש — ולא מה ששילמתם עליו. מחיר הרכישה כולל את הקרקע, את המיקום, את הנוף ואת מצב השוק, וכל אלה לא נשרפים ולא נהרסים.</p>
    <p>המשמעות היא ששני נכסים באותו מחיר יכולים להיות בעלי סכומי ביטוח שונים מאוד: דירה בליסבון במיקום מרכזי עשויה להיות מבוטחת בסכום נמוך משמעותית ממחירה, בעוד וילה באזור זול יותר, עם שטח בנוי גדול ובנייה מורכבת, יכולה להיות מבוטחת בסכום גבוה יחסית למחירה.</p>
    <p>ומה קורה אם הסכום נקבע נמוך מדי — מה שאתם מכירים כביטוח חסר. בפורטוגל הכלל נקרא <em dir="ltr">regra proporcional</em>, והוא חל גם על נזק חלקי. אם המבנה היה צריך להיות מבוטח ב־300,000 אירו ובוטח ב־180,000, כלומר 60% מהנדרש, אז בנזק של 20,000 אירו התגמול עלול להיחשב לפי אותם 60% — כ־12,000 אירו, פחות ההשתתפות העצמית. אף אחד לא שרף את הבית; פשוט הסכום היה חסר.</p>
    <p>לכן שווה להתייחס בכבוד לשדה הזה. שטח בנוי במטרים רבועים, שנת בנייה, סוג בנייה ואיכות הגימור הם הקלט; לא צריך שמאות פורמלית בשלב ההצעה, אבל כן צריך מספר מבוסס ולא מספר שנוח לפרמיה. בתכולה ההיגיון זהה: סכום התכולה צריך לשקף מה יעלה לקנות הכול מחדש, לא מה שילמתם לפני שמונה שנים.</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">שני מספרים שמתבלבלים ביניהם בביטוח מבנה</caption>
        <thead>
          <tr><th scope="col">המספר</th><th scope="col">מה הוא</th><th scope="col">איפה הוא מופיע</th></tr>
        </thead>
        <tbody>
          <tr><td>מחיר הרכישה</td><td>מה שילמתם, כולל קרקע ומיקום</td><td>ב־<em dir="ltr">escritura</em> ובמשכנתה. לא סכום הביטוח.</td></tr>
          <tr><td>עלות בנייה מחדש</td><td>מה יעלה להקים את המבנה מחדש</td><td><em dir="ltr">capital seguro</em> של המבנה בפוליסה.</td></tr>
          <tr><td>שווי התכולה</td><td>מה יעלה לקנות את התכולה מחדש</td><td><em dir="ltr">capital seguro</em> של התכולה, סכום נפרד.</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section class="section tint" aria-labelledby="ma-mechuse">
  <div class="container narrow article-body">
    <h2 id="ma-mechuse">מה בדרך כלל מכוסה, ואיפה מסתיים הכיסוי</h2>
    <p>ההיקף משתנה בין מבטחים ובין תוכניות, ולכן מה שלמטה הוא תמונה טיפוסית של השוק ולא תיאור של פוליסה מסוימת. בכל אחד מהסעיפים האלה החריגים הם מה שקובע.</p>
    <p><strong>נזקי מים</strong> הם עילת התביעה הנפוצה ביותר בדירות בפורטוגל, וגם זו שהחריגים שלה הכי מפורטים. פוליסות מכסות בדרך כלל פיצוץ או נזילה פתאומית מצינור, ומטפלות גם בנזק שנגרם לשכנים. מה שלרוב לא מכוסה: בלאי הדרגתי וחלחול איטי שנמשך זמן, נזק שנובע מאי־תחזוקה, ולעיתים גם חדירת מים מהגג בבניין ישן. עלות איתור הנזילה ותיקון הצינור עצמו לפעמים מכוסה ולפעמים לא — זה סעיף נפרד שכדאי לבדוק בשמו.</p>
    <p><strong>אש, ברק ופיצוץ</strong> הם הגרעין הקלאסי, וזו גם השכבה שהחוק מחייב בבית משותף דרך ה־<em dir="ltr">condomínio</em>. <strong>סערה, רוח וגשם</strong> מכוסים בדרך כלל, לעיתים בכפוף לעוצמה מסוימת שמוגדרת בפוליסה. <strong>גניבה ופריצה</strong> מכוסות בדרך כלל בכפוף לסימני התפרצות ולתנאי מיגון שרשומים בפוליסה, ולעיתים בכפוף לדיווח למשטרה בתוך פרק זמן קצוב. <strong>נזק חשמלי</strong> — קלקול מכשירים בעקבות נחשול מתח — הוא לרוב הרחבה בסכום מוגבל, שלפעמים לא כוללת מכשירים מעל גיל מסוים.</p>
    <p><strong>אחריות אזרחית</strong> נכללת בהרבה פוליסות דירה בסכום מסוים, וכאן ההגדרה חשובה: לפעמים היא מוגבלת לנזק לשכנים באותו בניין, לפעמים היא רחבה יותר וכוללת אחריות של משק הבית בכלל, ולפעמים היא לא נכללת. אם אתם צריכים אחריות פרטית רחבה — נזק שילד גרם, כלב שנשך, אופניים שפגעו בהולך רגל — <a href="/il/liability-insurance-portugal/">כדאי לקרוא על ביטוח אחריות אזרחית בנפרד</a> ולא להניח שפוליסת הדירה מכסה את זה.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="reidat-adama">
  <div class="container narrow article-body">
    <h2 id="reidat-adama">רעידת אדמה: אל תניחו שזה נכלל</h2>
    <p>זו ההנחה השגויה שאנחנו פוגשים אצל לקוחות ישראלים יותר מכל אחרת, ולא בגלל חוסר ידע — בגלל ידע שהועבר ממקום אחד לשני. בישראל כיסוי לרעידת אדמה הוא חלק שגור מהשיח על ביטוח דירה, עד כדי כך שרבים מניחים שזה פשוט מה שביטוח דירה כולל.</p>
    <p>בפורטוגל זה לא ברירת המחדל. כיסוי נזקי רעידת אדמה (<em dir="ltr">sismos</em>, ולפעמים מופיע כ־<em dir="ltr">fenómenos sísmicos</em>) הוא בדרך כלל הרחבה אופציונלית: צריך לבקש אותה במפורש, היא מוסיפה לפרמיה, ולעיתים יש לה השתתפות עצמית נפרדת ומשמעותית, שמחושבת כאחוז מסכום הביטוח ולא כסכום קבוע. הזמינות והמחיר משתנים בין מבטחים, ולפעמים גם לפי אזור, שנת בנייה וסוג הקונסטרוקציה. יש מבטחים שמציעים את ההרחבה בקלות, ויש שמסייגים אותה.</p>
    <p>אנחנו לא אומרים שאין לכם כיסוי, וגם לא שיש. אנחנו אומרים שזה לא דבר שמניחים. בכל הצעה שאנחנו מוציאים, אם ביקשתם את הכיסוי הוא צריך להופיע בפוליסה בשמו, עם סכום הביטוח וההשתתפות העצמית שלו כתובים לידו. בקשה בעל פה שלא הגיעה לנייר היא לא כיסוי. אם התשובה מהמבטח היא שההרחבה לא זמינה לנכס הזה — גם את זה נאמר לכם, ולא נסתיר אותו מתחת לפרמיה נוחה.</p>
    <p class="legal-note">הזמינות של כיסוי רעידת אדמה, המחיר, ההשתתפות העצמית והחריגים נקבעים על ידי המבטח ותלויים בנכס הספציפי ובתוצאות החיתום. אין כאן אמירה שכיסוי כזה יאושר או שיוצע לכל נכס.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="shimush-banechess">
  <div class="container narrow article-body">
    <h2 id="shimush-banechess">מגורי קבע, בית שני, השכרה ותקופות שהנכס ריק</h2>
    <p>הסעיף הזה הוא הדרך הנפוצה ביותר שבה פוליסה שנראית תקפה נכשלת ביום התביעה. פוליסות דירה בפורטוגל מתמחרות ומגדירות את הכיסוי לפי אופן השימוש בנכס, וההצהרה שנתתם בהצעה היא חלק מהחוזה.</p>
    <p><strong>מגורי קבע</strong> (<em dir="ltr">habitação permanente</em>) הוא המצב הפשוט: מישהו גר בנכס לאורך השנה. <strong>בית שני או בית חופשה</strong> (<em dir="ltr">segunda habitação</em>) מתומחר אחרת ולעיתים מגיע עם תנאים — למשל, דרישה שהמים או החשמל יהיו מנותקים בתקופות ארוכות של היעדרות, או הגבלה על כיסוי גניבה כשהנכס ריק. <strong>נכס מושכר</strong> לטווח ארוך מחייב הצהרה, ו<strong>השכרה לטווח קצר</strong> — <em dir="ltr">Alojamento Local</em> — היא כמעט תמיד עניין נפרד לגמרי, שפוליסת דירה רגילה לא בהכרח מכסה. יש מבטחים שמסרבים לכסות שימוש כזה בפוליסת מגורים, ויש שמציעים מוצר אחר בשבילו.</p>
    <p><strong>תקופות שהנכס ריק</strong> הן הסעיף שכדאי לקרוא בשמו: בפוליסות רבות יש תנאי שמגביל או מבטל כיסוי מסוים אם הנכס לא אוכלס מעל מספר ימים רצופים — לעיתים 30, לעיתים 60, לעיתים 90, תלוי בפוליסה. זה נוגע במיוחד לגניבה ולנזקי מים. בעל נכס שאינו תושב, שמגיע לפורטוגל פעמיים בשנה, נמצא בדיוק בסעיף הזה, ולכן שווה לו לדעת מה המספר שכתוב בפוליסה שלו.</p>
    <p><strong>שיפוץ</strong> הוא מצב זמני שמשנה את הסיכון וגם את סכום הביטוח: עבודות בנייה בנכס מכוסה עלולות להיות מוחרגות, ושיפוץ שהעלה את עלות הבנייה מחדש צריך לעדכן את סכום הביטוח. שיפוץ מטבחים וחדרי רחצה שלא דווח הוא סיבה קלאסית לביטוח חסר בלי שאף אחד שם לב.</p>
    <p>ההיגיון פשוט: הצהרה מדויקת עולה לפעמים כמה עשרות אירו בפרמיה, והצהרה לא מדויקת עולה את התביעה כולה. אם השימוש בנכס משתנה — עברתם לגור בו, התחלתם להשכיר, יצאתם לשנה — זה שינוי שצריך לדווח, לא פרט טכני.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="pritei-erech">
  <div class="container narrow article-body">
    <h2 id="pritei-erech">תכשיטים, שעונים ופריטי ערך</h2>
    <p>לא לכל לקוח יש פריטים שדורשים טיפול מיוחד, ואין סיבה להניח שכן. אבל אם יש, כדאי להכיר את המכניקה: פוליסות דירה מגבילות פריטי ערך (<em dir="ltr">objetos de valor</em>) בסעיף נפרד, בדרך כלל כאחוז מסכום התכולה — למשל, סך התכשיטים לא יעלה על 20% מסכום התכולה, ולעיתים גם תקרה לפריט בודד. מעל סכומים מסוימים המבטח עשוי לדרוש רשימה מפורטת, חשבוניות או הערכת שמאי, וכן אמצעי מיגון כמו כספת או מערכת אזעקה.</p>
    <p>שתי נקודות מעשיות. ראשית, פריט שלא הוצהר בדרך כלל לא יזכה לתגמול מעל התקרה הכללית, גם אם השווי שלו מוכח. שנית, השווי צריך להיות מתועד <em>לפני</em> האירוע ולא אחריו — צילומים, חשבוניות והערכות שנשמרו מחוץ לבית הם מה שמונע מחלוקת על שווי. בתכשיטים ובשעונים שנרכשו בישראל, שווה לשמור את החשבונית המקורית גם אם היא בעברית; אנחנו נסביר למבטח מה כתוב בה.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="checklist-israelim">
  <div class="container narrow article-body">
    <h2 id="checklist-israelim">מה כדאי לבדוק לפני שמאשרים הצעה</h2>
    <p>אלה השאלות שאנחנו ממילא עוברים עליהן עם כל לקוח. הן שימושיות גם אם תבחרו לעבוד עם מישהו אחר — וזו בדיוק הסיבה שהן כתובות כאן.</p>
    <ol class="process-steps">
      <li><div><strong>מה סכום הביטוח של המבנה, ואיך הוא חושב.</strong><span>שטח בנוי, שנת בנייה וסוג בנייה. אם ההצעה נגזרה ממחיר הרכישה — זה סימן שכדאי לבדוק מחדש.</span></div></li>
      <li><div><strong>מה סכום התכולה, ומה התקרה לפריטי ערך.</strong><span>ובאיזה אחוז מסכום התכולה מוגבלים תכשיטים.</span></div></li>
      <li><div><strong>האם כיסוי רעידת אדמה נכלל, ובאיזו השתתפות עצמית.</strong><span>בכתב, בשם המפורש שלו. אם לא ביקשתם — הניחו שהוא לא שם.</span></div></li>
      <li><div><strong>מה מכוסה בנזקי מים, ומה מוחרג.</strong><span>במיוחד: חלחול הדרגתי, איתור הנזילה, ותיקון הצינור עצמו.</span></div></li>
      <li><div><strong>מה כתוב על תקופות שהנכס ריק.</strong><span>כמה ימים רצופים, ומה נפגע אחריהם — בדרך כלל גניבה ונזקי מים.</span></div></li>
      <li><div><strong>איך הוצהר השימוש בנכס.</strong><span>מגורי קבע, בית שני, מושכר או <em dir="ltr">Alojamento Local</em>. הצהרה לא מדויקת היא הסיכון הגדול ביותר בפוליסה.</span></div></li>
      <li><div><strong>מה סכום האחריות האזרחית, ולמי הוא חל.</strong><span>שכנים באותו בניין בלבד, או אחריות משק בית רחבה.</span></div></li>
      <li><div><strong>מה ההשתתפות העצמית, לכל פרק בנפרד.</strong><span>לעיתים סכום, לעיתים אחוז, ולרוב חל הגבוה מביניהם.</span></div></li>
      <li><div><strong>תוך כמה זמן צריך לדווח על נזק.</strong><span>המועד נמדד מיום האירוע, ולרוב הוא קצר מאוד.</span></div></li>
      <li><div><strong>איך משתלבת הפוליסה של ה־<span dir="ltr">condomínio</span>.</strong><span>כדי לא לשלם פעמיים על אותה שכבה, וכדי לא להישאר בלי שכבה שחשבתם שקיימת.</span></div></li>
    </ol>
    <p>הצעה טובה עונה על עשר השאלות האלה בכתב. הצעה שעונה רק על "מה הפרמיה" לא נבדקה עדיין.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="mashkanta">
  <div class="container narrow article-body">
    <h2 id="mashkanta">משכנתה: מה הבנק בדרך כלל דורש</h2>
    <p>מי שקונה בפורטוגל עם מימון יגלה שהבנק הוא לרוב מי שקובע את לוח הזמנים. בפועל הבנקים דורשים בדרך כלל שתי פוליסות כתנאי להלוואה: ביטוח מבנה על הנכס, וביטוח חיים שמכסה את יתרת ההלוואה (<em dir="ltr">seguro de vida</em>). הדרישה המדויקת, הסכומים והמועדים משתנים בין בנקים ובין תיקים.</p>
    <p>שתי נקודות שכדאי לדעת מראש. הבנק ירצה להירשם כמוטב בפוליסת המבנה, וזו בקשה שגרתית שמסודרת בנוסח הפוליסה. ובנוסף — הבנק יציע לכם בדרך כלל את הפוליסה שלו, אבל אינכם מחויבים לרכוש דווקא אותה: אפשר להביא פוליסה ממבטח אחר, כל עוד היא עומדת בדרישות שהבנק הציב. לפעמים תנאי המשכנתה עצמם מתומחרים בהתאם, ולכן שווה להשוות את שני המסלולים במלואם ולא רק את הפרמיה. <a href="/il/buying-property-portugal/">העמוד על קניית נכס</a> עובר על זה לפי שלבי העסקה.</p>
  </div>
</section>`,
  faqTitle: 'ביטוח דירה בפורטוגל: שאלות נפוצות',
  faq: [
    {
      q: 'ביטוח דירה הוא חובה בפורטוגל?',
      a: '<p>בבניין בבעלות משותפת (<em dir="ltr">propriedade horizontal</em>) החוק הפורטוגזי מחייב ביטוח אש, שנרכש בדרך כלל דרך ה־<em dir="ltr">condomínio</em> ומתייחס למבנה ולחלקים המשותפים. לגבי פנים הדירה והתכולה בדרך כלל אין חיוב חוקי — אבל אם יש משכנתה, הבנק כמעט בוודאות ידרוש ביטוח מבנה כתנאי להלוואה. למעשה, מי שיש לו נכס כאן מבוטח בדרך כלל, והשאלה היא רק מה הוגדר בכיסוי.</p>',
    },
    {
      q: 'כיסוי לרעידת אדמה נכלל בפוליסה?',
      a: '<p>אל תניחו שכן. בפורטוגל כיסוי נזקי רעידת אדמה (<em dir="ltr">sismos</em>) הוא בדרך כלל הרחבה אופציונלית שצריך לבקש במפורש, שמוסיפה לפרמיה, ולעיתים עם השתתפות עצמית נפרדת שמחושבת כאחוז מסכום הביטוח. הזמינות והתנאים משתנים בין מבטחים ולעיתים גם לפי אזור, שנת בנייה וסוג הבנייה, ואישור ההרחבה תלוי בחיתום. הדרך הנכונה לבדוק היא לראות את הכיסוי כתוב בפוליסה בשמו, עם הסכום וההשתתפות העצמית לידו.</p>',
    },
    {
      q: 'על איזה סכום צריך לבטח את המבנה?',
      a: '<p>על עלות הבנייה מחדש (<em dir="ltr">valor de reconstrução</em>), לא על מחיר הרכישה. מחיר הרכישה כולל קרקע ומיקום, שלא נהרסים. הקלט לחישוב הוא שטח בנוי, שנת בנייה, סוג בנייה ורמת גימור. אם הסכום נקבע נמוך מהנדרש, נכנס לתמונה מה שמכונה בישראל ביטוח חסר ובפורטוגל <em dir="ltr">regra proporcional</em>: גם בנזק חלקי, התגמול עלול להיות מופחת באותו שיעור.</p>',
    },
    {
      q: 'הביטוח של ועד הבית לא מספיק?',
      a: '<p>בדרך כלל לא, אבל גם לא מיותר. הפוליסה של ה־<em dir="ltr">condomínio</em> מכסה לרוב את המבנה ואת החלקים המשותפים, בהיקף שמתמקד באש. היא בדרך כלל לא מכסה את התכולה שלכם, לא נזקי מים שמקורם בתוך הדירה שלכם, ולא בהכרח את פנים הדירה בהיקף שמספיק לכם. הדרך המעשית היא לבקש מהוועד את התנאים המיוחדים של הפוליסה שלו, ולבנות את הפוליסה שלכם כך שתשתלב איתה במקום לכפול אותה.</p>',
    },
    {
      q: 'אני בעל נכס בפורטוגל אבל גר בישראל. אפשר לבטח?',
      a: '<p>כן, זה מצב נפוץ ואפשר לסדר אותו. בדרך כלל נדרשים <bdi>NIF</bdi> פורטוגזי, מסמך זיהוי, מסמכי הנכס ואמצעי תשלום; אם נדרש דווקא חשבון בנק פורטוגזי — זה משתנה בין מבטחים. מה שחשוב במיוחד במצב הזה הוא סעיף התקופות שהנכס ריק: אם הנכס לא מאוכלס מעל מספר ימים רצופים שכתוב בפוליסה, כיסויים מסוימים — בדרך כלל גניבה ונזקי מים — עלולים להיות מוגבלים או מבוטלים. את המספר הזה כדאי לדעת לפני שחותמים, לא אחרי.</p>',
    },
    {
      q: 'אני משכיר את הדירה. צריך פוליסה אחרת?',
      a: '<p>צריך לפחות להצהיר על זה, וקרוב לוודאי שהתנאים ייראו אחרת. השכרה לטווח ארוך היא בדרך כלל אפשרית בפוליסת מגורים בכפוף להצהרה ולתמחור מתאים, ואתם מבטחים את המבנה ואת התכולה שבבעלותכם, לא את החפצים של השוכר. השכרה לטווח קצר (<em dir="ltr">Alojamento Local</em>) היא סיפור נפרד: יש מבטחים שלא יכסו שימוש כזה בפוליסת מגורים כלל, ויש שמציעים מוצר אחר. שימוש שלא הוצהר הוא אחת הדרכים הבטוחות שתביעה תידחה.</p>',
    },
    {
      q: 'שיפצנו את הבית. צריך לעדכן משהו?',
      a: '<p>כן, בשני מובנים. בזמן העבודות: שיפוץ משנה את פרופיל הסיכון, ונזק שנגרם בקשר לעבודות בנייה עשוי להיות מוחרג בפוליסה הרגילה — כדאי לבדוק את זה לפני שהפועלים נכנסים. ואחרי העבודות: שיפוץ שהעלה את עלות הבנייה מחדש מחייב עדכון של סכום הביטוח, אחרת נוצר ביטוח חסר בלי שאף אחד התכוון לזה. מטבח וחדרי רחצה חדשים הם המקרה הקלאסי.</p>',
    },
    {
      q: 'תוך כמה זמן צריך לדווח על נזק?',
      a: '<p>המועד כתוב בפוליסה, נמדד מיום האירוע או מהיום שבו נודע לכם עליו, ובפוליסות פורטוגזיות הוא בדרך כלל קצר — לעיתים מדובר בימים בודדים. בגניבה בדרך כלל נדרש גם דיווח למשטרה בתוך פרק זמן קצוב. זה אחד הדברים שאנחנו מציינים בכתב יחד עם הפוליסה, כי מועד שהוחמץ הוא סיבת הדחייה שהכי חבל עליה.</p>',
    },
  ],
  related: [
    { url: '/il/buying-property-portugal/', label: 'קניית דירה בפורטוגל: ביטוח לפי שלבי העסקה' },
    { url: '/il/liability-insurance-portugal/', label: 'ביטוח אחריות אזרחית בפורטוגל' },
    { url: '/il/insurance-guide-portugal/', label: 'מדריך הביטוח בפורטוגל ושאלות נפוצות' },
  ],
};
