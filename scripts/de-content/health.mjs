import { BREADCRUMB_ROOT } from './shared.mjs';

/**
 * Krankenversicherung — one of the strongest pages on the site per Part 6.
 * SNS mechanics, the CUF/HPA merger, waiting periods, medical underwriting
 * and the mutualista/MGEN route are drawn from scripts/nl-content/health.mjs
 * (its zorgverzekering-portugal entry), translated and re-verified against
 * this session's own MGEN/Médis research rather than re-derived from
 * scratch — the merger date and the network facts are the same facts, not a
 * fresh claim about a different market.
 */
export const HEALTH_PAGE = {
  slug: 'krankenversicherung-portugal',
  // Hand-authored wizard, not regenerated from this file's formBranch/BRANCHES:
  // generate-de-cluster.mjs splices the published <section id="angebot">
  // back in verbatim. See publishedFormSection() there for why.
  dedicatedForm: 'de-krankenversicherung-wizard',
  url: '/de/krankenversicherung-portugal/',
  title: 'Krankenversicherung in Portugal für deutsche Expats | Adler & Rochefort',
  description:
    'SNS und wo es in der Praxis an Grenzen stößt, das private Netzwerk an der Algarve, Wartezeiten und Gesundheitsprüfung, Vorerkrankungen und die mutualistische Alternative bei höherem Alter.',
  keywords:
    'Krankenversicherung Portugal, Krankenversicherung Portugal Deutsche, private Krankenversicherung Portugal, Krankenversicherung Portugal Rentner, SNS Portugal, Vorerkrankungen Krankenversicherung Portugal',
  eyebrow: 'Krankenversicherung',
  h1: 'Krankenversicherung in Portugal: was Sie wirklich brauchen',
  standfirst:
    'Portugal hat ein öffentliches Gesundheitssystem, das auf dem Papier vollständig ist und in der Praxis an einem Punkt hakt: der Zeit. Diese Seite erklärt, was das SNS leistet, wo eine private Police den Unterschied macht, und welche Optionen bestehen, wenn Alter oder Vorerkrankungen die reguläre Aufnahme erschweren.',
  heroMeta: 'Registrierter Versicherungsmakler · ASF Nr. 425591790/3 · Lagos, Algarve',
  heroCta: 'Deckung prüfen lassen',
  hreflang: {},
  langLinks: {},
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Krankenversicherung' }],
  published: '2026-09-12T09:00:00+00:00',
  modified: '2026-09-12T09:00:00+00:00',
  pullquote: 'Das SNS ist ein Sicherheitsnetz, kein Termin in angemessener Zeit.',
  schemaType: 'WebPage',
  formHeading: 'Krankenversicherung anfragen',
  formBranch: 'Krankenversicherung',
  formSubject: 'Krankenversicherung Portugal',
  formCta: 'Deckung prüfen lassen',
  // Especificação v2, A1/A2: "ob es etwas Medizinisches zu melden gibt" and
  // "bestehende Vorerkrankungen" removed — same reasoning and wording as
  // scripts/{dk,se,pl,zh,il}-content/health.mjs, which already say
  // explicitly that health details are handled separately, never via the
  // form.
  formIntro:
    'Nennen Sie uns Alter und Familienzusammensetzung — medizinische Details besprechen wir separat, nie über das Formular.',
  formPlaceholder:
    'Zum Beispiel: Alter der zu versichernden Personen, ob Sie ein S1-Formular haben, und in welcher Gemeinde Sie wohnen.',
  sections: `
<section class="section plain" aria-labelledby="sns">
  <div class="container narrow article-body">
    <h2 id="sns">Das SNS, und wo es in der Praxis an Grenzen stößt</h2>
    <p>Der <em>Serviço Nacional de Saúde</em> (SNS) ist das portugiesische öffentliche Gesundheitssystem. Als registrierter Resident melden Sie sich bei Ihrem <em>Centro de Saúde</em> an, erhalten eine <em>número de utente</em> und haben grundsätzlich Zugang zu denselben Bedingungen wie ein portugiesischer Bürger. Für Notfälle ist das System solide, und die Qualität der Behandlung ist nicht das Problem.</p>
    <p>Das Problem ist die Wartezeit für alles, was nicht akut ist: eine Überweisung zum Facharzt, ein MRT, eine planbare Operation. In Teilen des Landes werden solche Wartelisten in Monaten gerechnet, teils in Jahren. An der Algarve kommt ein zweiter Faktor hinzu — die Bevölkerungsdichte schwankt saisonal, während die Kapazität auf den Jahresdurchschnitt ausgelegt ist, nicht auf August.</p>
    <div class="callout">
      <span class="callout-label">Die richtige Einordnung</span>
      Eine private Police ersetzt das SNS nicht und muss das auch nicht. Fast alle unsere Kunden behalten die SNS-Anmeldung für Notfälle und Medikamente und nutzen die private Deckung für alles, wofür das SNS sonst eine Warteliste vorsähe.
    </div>
  </div>
</section>

<section class="section tint" aria-labelledby="netzwerk">
  <div class="container narrow article-body">
    <h2 id="netzwerk">Das private Netzwerk an der Algarve</h2>
    <p>Eine Police ist genau so viel wert wie das Netzwerk in Ihrer Nähe. Landesweite Abdeckung bedeutet nicht automatisch, dass die Klinik, zu der Sie gehen würden, auch vertraglich angebunden ist.</p>
    <p>An der westlichen Algarve dreht sich das in der Praxis um die CUF-Einheiten in Alvor, Lagos und Gambelas (vormals HPA) sowie private Kliniken in Lagos, Portimão und Faro. CUF hat im Januar 2026 75&nbsp;% der Grupo HPA Saúde übernommen; seit Juni 2026 firmieren diese Einheiten unter der Marke CUF. Gebäude, Teams und Standorte sind dieselben geblieben.</p>
    <div class="callout">
      <span class="callout-label">Warum das für Ihre Police wichtig ist</span>
      Diese Einheiten wurden vor der Übernahme von jedem Versicherer einzeln vertraglich angebunden. Eine Vereinbarung, die mit HPA bestand, ist unter CUF nicht automatisch dieselbe Vereinbarung zu denselben Eigenanteilen. Wir bestätigen den aktuellen Netzwerkstatus und die Erstattungshöhe beim jeweiligen Versicherer für Ihre Postleitzahl, statt anzunehmen, dass der Stand vor der Fusion noch gilt.
    </div>
  </div>
</section>

<section class="section plain" aria-labelledby="wartezeit">
  <div class="container narrow article-body">
    <h2 id="wartezeit">Wartezeiten und Gesundheitsprüfung</h2>
    <p>Zwei Mechanismen entscheiden, ob Sie das bekommen, was Sie erwarten.</p>
    <h3>Wartezeiten (períodos de carência)</h3>
    <p>Ein Zeitraum zu Beginn der Police, in dem bestimmte Leistungen noch nicht erstattet werden — kurz für normale Konsultationen, länger für Operationen, deutlich länger für Entbindungen. Die genaue Dauer unterscheidet sich je nach Versicherer und Leistung; Notfallbehandlungen fallen in der Regel nicht darunter. Kam Ihre Vorversicherung unterbrechungsfrei vor der neuen Police, lässt sich das bei manchen Versicherern anrechnen — ein weiterer Grund, keine Deckungslücke entstehen zu lassen (siehe <a href="/de/umzug-deutschland-portugal-versicherung/">Versicherungen beim Umzug</a>).</p>
    <h3>Gesundheitsprüfung (Risikoprüfung)</h3>
    <p>Sie füllen eine Gesundheitserklärung aus. Vorerkrankungen werden häufig ausgeschlossen, manchmal gegen einen Aufschlag mitversichert, in einigen Fällen führen sie zur Ablehnung. Zwei Punkte sind dabei nicht verhandelbar:</p>
    <ul>
      <li><strong>Vollständigkeit liegt in Ihrem eigenen Interesse.</strong> Etwas zu verschweigen ist kein Kniff, der funktioniert. Es wird beim ersten damit zusammenhängenden Schadenfall sichtbar — und dann steht nicht der Schadenfall zur Debatte, sondern die Police selbst.</li>
      <li><strong>Das Alter ist der schärfste Filter.</strong> Die meisten portugiesischen Versicherer haben ein Höchstaufnahmealter für neue Policen. Wer darüber liegt, kommt über den regulären Weg nicht mehr hinein — unabhängig vom Gesundheitszustand.</li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="modelle">
  <div class="container narrow article-body">
    <h2 id="modelle">Netzwerk oder Kostenerstattung — und warum Prämienvergleich allein irreführend ist</h2>
    <p>Zwei Policen mit derselben monatlichen Prämie können bei Klinikabdeckung, ambulanten Höchstgrenzen, Erstattungsmodell, Wartezeiten, Ausschlüssen, geografischer Reichweite und Jahreshöchstgrenzen erheblich voneinander abweichen. Genau das ist der konkrete Beweis für unsere Positionierung: Wir beginnen nicht mit dem Preis, sondern mit dem Risiko.</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption>Modelle, nicht Rangfolge — welches Modell zu Ihrer Wohnsituation passt, hängt von Ihrer Postleitzahl ab, nicht von einer allgemeinen Empfehlung.</caption>
        <thead>
          <tr><th scope="col">Versicherer</th><th scope="col">Modell</th><th scope="col">Stark für</th></tr>
        </thead>
        <tbody>
          <tr><td>Allianz</td><td>Kombination aus Netzwerkzugang und freier Arztwahl mit Kostenerstattung</td><td>Wer auch außerhalb Portugals behandelt werden möchte</td></tr>
          <tr><td>Médis <span style="white-space:nowrap;">(über Zurich)</span></td><td>Netzwerkpolice mit Eigenanteilen innerhalb des Netzwerks</td><td>Wer dauerhaft in Portugal lebt und den Komfort des Netzwerks schätzt</td></tr>
          <tr><td>APRIL</td><td>Kostenerstattung — freie Arztwahl, Sie legen vor und reichen die Rechnung ein</td><td>International mobile Expats und kürzlich Angekommene</td></tr>
          <tr><td>AdvanceCare</td><td>Netzwerkverwalter mit sehr breitem Kliniknetz</td><td>Wer außerhalb der großen Städte wohnt — Algarve, Alentejo, Inseln</td></tr>
        </tbody>
      </table>
    </div>
    <p>Médis wird über unsere Agenturvereinbarung mit Zurich vermittelt, nicht über eine eigenständige Médis-Agentur. Die beste Krankenversicherung gibt es nicht. Entscheidend ist, welche Bedingungen zu Ihrer Situation passen — Ihr Wohnort, Ihr Alter, Ihre Familienzusammensetzung und ob Sie regelmäßig außerhalb Portugals behandelt werden möchten.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="mutualista">
  <div class="container narrow article-body">
    <h2 id="mutualista">Die mutualistische Route: wenn die reguläre Aufnahme nicht gelingt</h2>
    <p>Für zwei Gruppen führt der reguläre Weg nicht zum Ziel: wer über dem Höchstaufnahmealter liegt, und wer eine Vorgeschichte hat, die zur Ablehnung führt. Für sie gibt es in Portugal einen zweiten Weg — die <em>associações mutualistas</em>, Versicherungsvereine auf Gegenseitigkeit, von denen MGEN die bekannteste für nicht-portugiesische Residenten ist.</p>
    <p>Der wesentliche Unterschied liegt in der Aufnahme: Eine mutualistische Mitgliedschaft funktioniert über die Mitgliedschaft selbst statt über individuelle Risikoprüfung, wodurch das Höchstaufnahmealter der klassischen Versicherer dort nicht in gleicher Form gilt. Für jemanden Anfang siebzig, der gerade in Portugal ankommt, ist das oft der einzige realistische Weg zu privater Deckung.</p>
    <p>Dem steht gegenüber, dass es sich nicht um eine Versicherung im klassischen Sinn handelt: Struktur, Beitragsaufbau und Reichweite der Deckung unterscheiden sich wesentlich von einer Police bei Allianz oder Médis. Das ist kein Nachteil, aber etwas, das Sie vor dem Beitritt verstehen sollten, nicht danach. Wir stellen beide Wege gegenüber, wenn Ihre Situation das erfordert. Ausführlich zur Gesundheitsprüfung selbst und zum Unterschied zwischen Ausschluss und Ablehnung: <a href="/de/vorerkrankungen-krankenversicherung-portugal/">Krankenversicherung mit Vorerkrankungen</a>. Für Rentner mit ausschließlich deutscher Rente kommt zusätzlich das <a href="/de/s1-formular-rentner-portugal/">S1-Formular</a> ins Spiel.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="international">
  <div class="container narrow article-body">
    <h2 id="international">Portugiesische Police oder internationale private Krankenversicherung?</h2>
    <p>Eine portugiesische Police deckt Behandlung in Portugal, mit oder ohne begrenzter Notfalldeckung im Ausland. Eine internationale private Krankenversicherung (International Private Medical Insurance) deckt dagegen mehrere Länder, ist in der Regel teurer und richtet sich eher an Vielreisende oder Familien mit Wohnsitz in mehreren Ländern. Aus unserem Portfolio ist <strong>APRIL</strong> die Option mit diesem Zuschnitt: ein Erstattungsmodell mit freier Arztwahl, konzipiert für Personen, die zwischen Ländern pendeln oder in absehbarer Zeit erneut umziehen könnten, mit vereinfachter Gesundheitsprüfung gegenüber einer klassischen portugiesischen Police. Für die meisten deutschen Residenten, die dauerhaft an der Algarve oder anderswo in Portugal leben, ist die portugiesische Lösung dennoch die passendere und wirtschaftlichere Wahl — die internationale Variante lohnt sich dort, wo internationale Mobilität selbst der Grund für die Wahl ist, etwa bei einigen der auf unserer <a href="/de/private-clients-portugal/">Private-Clients-Seite</a> beschriebenen Situationen.</p>
  </div>
</section>`,
  faqTitle: 'Krankenversicherung Portugal — häufige Fragen',
  faq: [
    {
      q: 'Brauche ich eine private Krankenversicherung in Portugal?',
      a: '<p>Rechtlich nicht zwingend, wenn Sie Zugang zum SNS haben. In der Praxis schließt eine private Police die Lücke, die das SNS bei nicht-akuter Versorgung lässt — Facharzttermine, Diagnostik und planbare Operationen, wo die Wartezeiten in Monaten gerechnet werden. Für bestimmte Aufenthaltstitel wird eine Krankenversicherung zudem als Nachweis verlangt.</p>',
    },
    {
      q: 'Was passiert mit meiner deutschen Versicherung?',
      a: '<p>Das hängt davon ab, ob Sie gesetzlich oder privat versichert sind. Bei PKV ist die Anwartschaftsversicherung oft die richtige Zwischenlösung statt einer Kündigung — Details dazu auf unserer Seite zur <a href="/de/anwartschaftsversicherung-portugal/">Anwartschaftsversicherung beim Umzug nach Portugal</a>. Die Reihenfolge und Fristen rund um den Umzug insgesamt stehen auf unserer Seite zum <a href="/de/umzug-deutschland-portugal-versicherung/">Umzug von Deutschland nach Portugal</a>.</p>',
    },
    {
      q: 'Kann ich mich mit Vorerkrankungen versichern?',
      a: '<p>Oft ja, aber mit Einschränkungen: Die Vorerkrankung wird häufig ausgeschlossen, manchmal gegen einen Aufschlag mitversichert. Vollständige Angaben sind entscheidend — Unvollständigkeit gefährdet nicht nur den einzelnen Schadenfall, sondern die Police insgesamt.</p>',
    },
    {
      q: 'Gibt es Altersgrenzen?',
      a: '<p>Ja. Die meisten regulären Versicherer haben ein Höchstaufnahmealter für neue Policen. Darüber führt in der Regel nur die mutualistische Route (z. B. MGEN) zu privater Deckung, da sie auf Mitgliedschaft statt individueller Risikoprüfung basiert.</p>',
    },
    {
      q: 'Was kostet eine Krankenversicherung in Portugal?',
      a: '<p>Das hängt von Alter, Familienzusammensetzung, gewähltem Modell (Netzwerk oder Kostenerstattung) und Deckungsumfang ab. Eine seriöse Zahl nennen wir erst, nachdem wir Ihr Profil kennen — eine allgemeine Zahl an dieser Stelle würde für niemanden konkret stimmen.</p>',
    },
  ],
  related: [
    { url: '/de/vorerkrankungen-krankenversicherung-portugal/', label: 'Krankenversicherung mit Vorerkrankungen' },
    { url: '/de/s1-formular-rentner-portugal/', label: 'Das S1-Formular für Rentner' },
    { url: '/de/umzug-deutschland-portugal-versicherung/', label: 'Versicherungen beim Umzug von Deutschland nach Portugal' },
    { url: '/de/anwartschaftsversicherung-portugal/', label: 'Anwartschaftsversicherung beim Umzug nach Portugal' },
    { url: '/de/private-clients-portugal/', label: 'Private Clients: komplexe Risiken' },
    { url: '/en/blog/medis-health-insurance-portugal/', label: 'Médis Health Insurance in Portugal (Englisch)', hreflang: 'en' },
  ],
};
