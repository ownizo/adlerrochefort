/**
 * Constants shared by every page in the Hebrew cluster.
 *
 * Separate from the market descriptor to avoid an import cycle: the descriptor
 * imports the page modules, and the page modules import the breadcrumb root.
 *
 * LANG_POLICY is the working-language disclosure /de/, /nl/, /pl/, /se/, /dk/
 * and /zh/ already carry, rewritten for a Hebrew reader. It is load-bearing:
 * the repository records the agency's working languages as English and
 * Portuguese and nothing more, so no page here may imply Hebrew-speaking
 * advisers, an Israeli desk or an Israeli office. The disclosure says plainly,
 * on every page, which language the work happens in — while the reader is
 * still deciding whether to write to us, not in the middle of a claim.
 *
 * The second paragraph is the commercially important one. Portuguese insurers
 * issue policies in Portuguese because the law requires it, and a reader who
 * cannot check the wording is exactly the reader who needs the sums insured,
 * the deductibles, the exclusions and the notification deadlines set out in
 * writing before signing.
 *
 * Latin runs inside the Hebrew are isolated with <bdi>, never reordered by
 * hand: the brand name, the phone number and the email address all have to
 * survive being dropped into right-to-left paragraph flow.
 */
export const LANG_POLICY_IL = {
  heading: 'על השפה: האתר בעברית, שפת העבודה אנגלית',
  body: [
    'העמודים האלה כתובים בעברית, כי מי ששואל את השאלות האלה חושב עליהן בעברית. אבל העבודה עצמה לא מתנהלת בעברית: הצעות מחיר, הסבר של תנאי הפוליסה, ההתכתבות והליווי בתביעה נעשים בכתב באנגלית, וגם התשובה שתקבלו תהיה באנגלית. אנחנו כותבים את זה בכל עמוד ולא מחכים שתגלו את זה באמצע תביעה — שם זה מתגלה בתזמון הגרוע ביותר.',
    'מבטחים בפורטוגל מנפיקים פוליסות בפורטוגזית, ומבטחים בספרד — בספרדית; זה לא משתנה כשהלקוח הוא זר. מה שאנחנו כן עושים: לפני החתימה, להעביר לכם בכתב באנגלית את מה שכתוב בפוליסה — סכומי הביטוח, ההשתתפות העצמית, החריגים ולוחות הזמנים לדיווח על נזק, וגם מה שאתם מניחים שמכוסה ובפועל אינו מכוסה. אם נוח לכם שבן משפחה, חבר או יועץ שקורא אנגלית יעבור על המסמכים איתכם, זו בקשה סבירה לגמרי ואנחנו נערכים לפיה.',
  ],
};

/** /il/ is itself the hub, so product pages sit one level below it. */
export const BREADCRUMB_ROOT = [{ name: 'ביטוח בפורטוגל', url: '/il/' }];

/**
 * The Spain cluster (es-* keys, September 2026) sits under the same hub, with
 * the Spain guide as an intermediate crumb so the trail says which country the
 * page is about. The guide itself uses only the first element.
 */
export const BREADCRUMB_ROOT_ES = [
  { name: 'ביטוח בפורטוגל ובספרד', url: '/il/' },
  { name: 'ביטוח בספרד', url: '/il/insurance-guide-spain/' },
];

/**
 * Portugal ↔ Spain sibling link. Inserted as a callout at the end of a page's
 * FIRST section, so it is seen early and the page's plain/tint band rhythm is
 * untouched (no extra section, nothing for nextBand() to miscount).
 */
export function withSibling(sections, { label, body }) {
  const anchor = '\n  </div>\n</section>';
  const i = sections.indexOf(anchor);
  if (i < 0) throw new Error('withSibling: no section close found');
  const note = `\n    <div class="callout">\n      <span class="callout-label">${label}</span>\n      ${body}\n    </div>`;
  return sections.slice(0, i) + note + sections.slice(i);
}
