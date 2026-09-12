import { BREADCRUMB_ROOT } from './shared.mjs';

/**
 * Autoversicherung. ISV/IMT mechanics and the gap-between-two-plates framing
 * are translated from scripts/nl-content/motor.mjs's auto-importeren entry —
 * same underlying Portuguese import procedure, not a fresh claim. Part 6 is
 * explicit that no legal or underwriting promise should be made that cannot
 * be supported, so the Schadenfreiheitsklasse section is hedged throughout
 * rather than asserting universal acceptance by Portuguese insurers.
 */
export const MOTOR_PAGE = {
  slug: 'autoversicherung-portugal',
  url: '/de/autoversicherung-portugal/',
  title: 'Autoversicherung in Portugal für deutsche Expats | Adler & Rochefort',
  description:
    'Kfz-Haftpflicht und Vollkasko in Portugal, deutsches oder portugiesisches Kennzeichen, ISV und das IMT-Verfahren, und wie Ihre deutsche Schadenfreiheitsklasse behandelt wird.',
  keywords:
    'Autoversicherung Portugal, Autoversicherung Portugal Deutsche, Kfz Versicherung Portugal, deutsche Schadenfreiheitsklasse Portugal, Auto importieren Portugal ISV, Kfz Kennzeichen Portugal',
  eyebrow: 'Autoversicherung',
  h1: 'Autoversicherung in Portugal: Kennzeichen, Deckung und Ihre Fahrhistorie',
  standfirst:
    'Die Frage ist selten, ob Sie Ihr Auto mitbringen können — sondern ob sich das lohnt, und wie Sie die Deckungslücke zwischen deutschem und portugiesischem Kennzeichen vermeiden. Diese Seite ordnet beides ein, ohne Zusagen zu machen, die kein Versicherer garantieren kann.',
  heroMeta: 'Registrierter Versicherungsmakler · ASF Nr. 425591790/3 · Lagos, Algarve',
  heroCta: 'Angebot anfragen',
  hreflang: {},
  langLinks: {},
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Autoversicherung' }],
  published: '2026-09-12T09:00:00+00:00',
  modified: '2026-09-12T09:00:00+00:00',
  pullquote: 'Die Deckung muss durchlaufen, während sich das Kennzeichen ändert — nicht danach.',
  schemaType: 'WebPage',
  formHeading: 'Autoversicherung anfragen',
  formBranch: 'Autoversicherung',
  formSubject: 'Autoversicherung Portugal',
  formCta: 'Angebot anfragen',
  formIntro:
    'Nennen Sie uns Fahrzeug, aktuelles Kennzeichen und Ihren geplanten Zeitplan — wir sagen Ihnen, wie die Deckung lückenlos organisiert wird.',
  formPlaceholder:
    'Zum Beispiel: Marke, Modell, Baujahr, aktuelles Kennzeichen, geplantes Datum der Einfuhr, schadenfreie Jahre in Deutschland.',
  sections: `
<section class="section plain" aria-labelledby="deckungsarten">
  <div class="container narrow article-body">
    <h2 id="deckungsarten">Haftpflicht, Teilkasko, Vollkasko</h2>
    <p>Die Kfz-Haftpflichtversicherung ist in Portugal gesetzlich vorgeschrieben, ebenso wie in Deutschland. Darüber hinaus gibt es je nach Versicherer Teilkasko- und Vollkaskovarianten mit unterschiedlichen Selbstbehalten, sowie optional Assistance-Leistungen (Pannenhilfe, Abschleppen) und teils Rechtsschutz. Welcher Deckungsumfang sinnvoll ist, hängt vom Fahrzeugwert, dem Alter des Fahrzeugs und davon ab, ob eine Finanzierung oder ein Leasingvertrag eine bestimmte Mindestdeckung verlangt.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="kennzeichen">
  <div class="container narrow article-body">
    <h2 id="kennzeichen">Deutsches oder portugiesisches Kennzeichen — und die Lücke dazwischen</h2>
    <p>Solange Ihr Fahrzeug deutsch zugelassen bleibt, ist Ihre deutsche Kfz-Versicherung auf Wohnsitz und Zulassung in Deutschland ausgelegt. Sobald Sie sich in Deutschland abmelden, passt diese Grundlage nicht mehr zur Wirklichkeit — auch wenn die Police formal weiterläuft. Eine portugiesische Versicherung wiederum kann eine reguläre Police in der Regel erst auf ein portugiesisches Kennzeichen ausstellen.</p>
    <div class="callout">
      <span class="callout-label">Was tatsächlich funktioniert</span>
      Melden Sie Ihrem deutschen Versicherer die Auswanderung mit dem genauen Datum und fragen Sie schriftlich, ob und wie lange die Deckung nach der Abmeldung fortbesteht. Ist diese Frist kürzer als die Dauer der Ummeldung — was häufig der Fall ist — organisieren wir eine Deckung für die Zwischenzeit und stellen die endgültige portugiesische Police auf den Tag, an dem die <em>matrícula</em> ausgestellt wird. Kündigen Sie niemals zuerst und klären Sie den Anschluss erst danach.
    </div>
  </div>
</section>

<section class="section plain" aria-labelledby="isv">
  <div class="container narrow article-body">
    <h2 id="isv">ISV und das IMT-Verfahren im Überblick</h2>
    <p>Wir sind Versicherungsmakler, kein Zollagent — das hier ist die Übersicht, die Sie für Ihre Entscheidung brauchen, keine vollständige Anleitung. Für die Durchführung arbeitet praktisch jeder mit einem <em>despachante</em> (Zollagenten).</p>
    <h3>ISV — Imposto sobre Veículos</h3>
    <p>Die portugiesische Kfz-Zulassungssteuer, fällig bei der Erstzulassung in Portugal. Die Berechnung basiert auf zwei Komponenten: <strong>Hubraum</strong> und <strong>CO₂-Ausstoß</strong>. Auf das Ergebnis wird ein Abschlag nach Alter des Fahrzeugs angewendet. Das erklärt die beiden Extreme: Ein junger, schwerer Diesel kann eine Steuer im vierstelligen Bereich auslösen, während ein älterer Kleinwagen mit Benzinmotor vergleichsweise günstig wegkommt.</p>
    <p>Ziehen Sie dauerhaft nach Portugal um, kann eine <strong>Befreiung wegen Wohnsitzverlegung</strong> greifen. Dafür gelten strenge Voraussetzungen — unter anderem, wie lange Sie das Fahrzeug vor dem Umzug bereits besaßen und wie lange Sie es danach behalten müssen — und der Antrag ist an Fristen gebunden, die mit Ihrer Registrierung zu laufen beginnen. Wer erst fährt und sich später informiert, ist zu spät dran.</p>
    <h3>Der Ablauf beim IMT</h3>
    <ol>
      <li>Zollanmeldung (<em>Alfândega</em>) und Abwicklung der ISV, oder Antrag auf die Befreiung.</li>
      <li>Technische Prüfung: <em>Inspeção Técnica</em> für Importfahrzeuge, mit Kontrolle der EU-Konformität.</li>
      <li>Homologation beim IMT und Zuteilung des portugiesischen Kennzeichens.</li>
      <li>Ausstellung des <em>Documento Único Automóvel</em>.</li>
    </ol>
    <p>Sobald die <em>matrícula</em> feststeht, beginnt die portugiesische Police. Das ist der Moment, an dem die Deckung endgültig wird.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="schadenfreiheitsklasse">
  <div class="container narrow article-body">
    <h2 id="schadenfreiheitsklasse">Ihre deutsche Schadenfreiheitsklasse</h2>
    <p>Ihre in Deutschland erreichte Schadenfreiheitsklasse ist bei einem portugiesischen Versicherer wirtschaftlich wertvoll — ihre Anerkennung ist jedoch nicht garantiert und hängt vom jeweiligen Versicherer ab. Wir können keine universelle Zusage machen, dass jeder Versicherer sie in vollem Umfang übernimmt.</p>
    <p>Was Sie tun sollten: Lassen Sie sich Ihre Schadenfreiheitsklasse von Ihrem deutschen Versicherer <strong>schriftlich bestätigen, bevor der Vertrag endet</strong>. Dieser Nachweis ist im Nachhinein schwer bis unmöglich zu beschaffen, und ohne ihn verhandeln wir aus einer deutlich schwächeren Position.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="fuehrerschein">
  <div class="container narrow article-body">
    <h2 id="fuehrerschein">Ihr Führerschein</h2>
    <p>Ihr deutscher Führerschein ist als EU-Führerschein in Portugal gültig; ein Umtausch ist zum Fahren nicht erforderlich. Als Resident registrieren Sie Ihren EU-Führerschein beim <strong>IMT</strong> — das ist kein Umtausch, Sie behalten Ihr Dokument, sondern eine Registrierung mit einer Frist, die ab Ihrer Aufenthaltsregistrierung läuft.</p>
    <p>Warum das auf einer Versicherungsseite steht: Im Schadenfall wird geprüft, ob die fahrende Person berechtigt war. Ein gültiger, aber nicht registrierter Führerschein ist in der Regel kein Deckungsproblem, aber genau die Art von administrativem losem Ende, das eine Schadenregulierung verzögert, wenn es schnell gehen sollte. Läuft Ihr Führerschein ab, während Sie in Portugal wohnen, verlängern Sie ihn zudem nicht mehr in Deutschland, sondern beim IMT.</p>
  </div>
</section>`,
  faqTitle: 'Autoversicherung Portugal — häufige Fragen',
  faq: [
    {
      q: 'Kann ich mein deutsches Auto in Portugal versichern?',
      a: '<p>Ja, solange es noch deutsch zugelassen ist, kann eine Übergangsdeckung organisiert werden — meist über Ihren deutschen Versicherer, mit schriftlicher Bestätigung der Fortlaufdauer nach der Abmeldung. Eine reguläre portugiesische Police setzt in der Regel ein portugiesisches Kennzeichen voraus.</p>',
    },
    {
      q: 'Muss ich mein Fahrzeug ummelden?',
      a: '<p>Nicht sofort, aber für einen dauerhaften Aufenthalt in der Regel ja. Der Ablauf führt über Zollanmeldung und ISV (oder die Befreiung wegen Wohnsitzverlegung), technische Prüfung und Homologation beim IMT. Rechnen Sie mit Wochen, nicht Tagen.</p>',
    },
    {
      q: 'Wird meine deutsche Schadenfreiheitsklasse berücksichtigt?',
      a: '<p>Möglich, aber nicht garantiert — das hängt vom jeweiligen Versicherer ab. Lassen Sie sich die Schadenfreiheitsklasse von Ihrem deutschen Versicherer schriftlich bestätigen, bevor der Vertrag endet; danach ist der Nachweis schwer zu bekommen.</p>',
    },
    {
      q: 'Welche Unterlagen brauche ich?',
      a: '<p>Unter anderem: Fahrzeugpapiere, schriftlicher Schadenfreiheitsnachweis Ihres deutschen Versicherers, Ihre Aufenthaltsregistrierung und NIF, sowie — bei Einfuhr — die Zoll- und IMT-Dokumente. Wir sagen Ihnen die vollständige Liste für Ihren konkreten Fall.</p>',
    },
    {
      q: 'Vollkasko oder Haftpflicht?',
      a: '<p>Haftpflicht ist gesetzlich vorgeschrieben. Ob sich Teilkasko oder Vollkasko lohnt, hängt vom Fahrzeugwert, seinem Alter und einer eventuellen Finanzierungsauflage ab. Wir stellen Ihnen die Optionen für Ihr konkretes Fahrzeug gegenüber.</p>',
    },
  ],
  related: [
    { url: '/de/umzug-deutschland-portugal-versicherung/', label: 'Versicherungen beim Umzug von Deutschland nach Portugal' },
    { url: '/de/hausversicherung-portugal/', label: 'Hausversicherung in Portugal' },
  ],
};
