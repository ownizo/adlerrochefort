import { BREADCRUMB_ROOT } from './shared.mjs';

/**
 * The anchor page. Part 5 of the brief calls this "the page that has to
 * land" — the existing German-language content in this market answers "what
 * is the SNS" and stops, saying nothing about the decisions a German actually
 * faces before moving. This occupies that gap: Abmeldung, GKV vs. PKV,
 * Anwartschaftsversicherung, S1 for pensioners, Schadenfreiheitsklasse, and
 * the order and deadlines that tie them together.
 *
 * The GKV/PKV/Anwartschaft/S1 mechanics below are general German social- and
 * private-insurance law, not proprietary claims about Adler & Rochefort or
 * about a named insurer — checked against GKV-Spitzenverband/DVKA's own
 * published guidance for retirees abroad and Finanztip's consumer explainer
 * on Anwartschaftsversicherung before writing, per the brief's verification
 * rule. Portugal-specific claims (waiting periods, whether a Portuguese motor
 * insurer honours a German no-claims record) are hedged exactly as Part 6
 * instructs, not asserted as guaranteed outcomes.
 */
export const MOVING_PAGE = {
  slug: 'umzug-deutschland-portugal-versicherung',
  url: '/de/umzug-deutschland-portugal-versicherung/',
  title: 'Umzug von Deutschland nach Portugal: Diese Versicherungen müssen Sie regeln | Adler & Rochefort',
  description:
    'Abmeldung, GKV oder PKV, Anwartschaftsversicherung, S1-Formular für Rentner und Schadenfreiheitsklasse: die Reihenfolge und die Fristen für Versicherungen beim Umzug von Deutschland nach Portugal.',
  keywords:
    'Umzug Portugal Versicherung, Auswanderung Portugal Krankenversicherung, GKV Ausland abmelden, PKV Auswanderung Anwartschaft, S1 Formular Rentner Portugal, Schadenfreiheitsklasse Portugal, Versicherung Portugal Deutsche',
  eyebrow: 'Umzug Deutschland → Portugal',
  h1: 'Versicherungen beim Umzug von Deutschland nach Portugal',
  standfirst:
    'Die meisten deutschsprachigen Seiten zu diesem Thema erklären, was das SNS ist, und hören dort auf. Hier geht es um die Entscheidungen, die tatsächlich vor und nach dem Umzug anstehen: was mit Ihrer deutschen Krankenversicherung passiert, ob eine Anwartschaft sinnvoll ist, wie das S1-Formular für Rentner funktioniert, und in welcher Reihenfolge das alles geregelt werden muss.',
  heroMeta: 'Registrierter Versicherungsmakler · ASF Nr. 425591790/3 · Lissabon · Lagos · Spanien',
  heroCta: 'Beratung anfragen',
  hreflang: {},
  langLinks: {},
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Umzug und Versicherung' }],
  published: '2026-09-12T09:00:00+00:00',
  modified: '2026-09-12T09:00:00+00:00',
  pullquote: 'Das teuerste Missverständnis ist nicht die falsche Police. Es ist die falsche Reihenfolge.',
  schemaType: 'Article',
  formHeading: 'Beratung zu Ihrem Umzug anfragen',
  formBranch: '',
  formSubject: 'Umzug von Deutschland nach Portugal',
  formCta: 'Beratung anfragen',
  formIntro:
    'Beschreiben Sie kurz Ihre Situation — geplantes Abmeldedatum, ob Sie Rentner sind, ob ein Fahrzeug mitkommt. Wir sagen Ihnen, was zuerst geregelt werden muss.',
  formPlaceholder:
    'Zum Beispiel: geplantes Abmeldedatum, GKV oder PKV, ob Sie eine deutsche Rente beziehen, ob ein Fahrzeug mitkommt, ob Sie kaufen oder mieten.',
  sections: `
<section class="section plain" aria-labelledby="reihenfolge">
  <div class="container narrow article-body">
    <h2 id="reihenfolge">Die Reihenfolge, nicht nur die Themen</h2>
    <p>Jedes einzelne Thema auf dieser Seite lässt sich für sich lösen. Das eigentliche Problem ist die Reihenfolge: Die Krankenversicherung muss vor der Abmeldung entschieden sein, nicht danach. Die Entscheidung zwischen kleiner und großer Anwartschaft muss vor der Kündigung der PKV fallen, nicht nach der Ankunft in Portugal. Und die Schadenfreiheitsklasse für Ihr Fahrzeug muss dokumentiert sein, bevor der deutsche Vertrag endet — danach ist der Nachweis schwer bis unmöglich zu bekommen.</p>
    <p>Diese Seite ist deshalb entlang der Reihenfolge aufgebaut, nicht entlang der Versicherungssparten.</p>
    <ol class="process-steps">
      <li><div><strong>6–8 Wochen vorher: Krankenversicherung klären</strong><span>GKV oder PKV, Anwartschaft ja oder nein, portugiesische Police anfragen. Die medizinische Risikoprüfung braucht Zeit — eine Police kann nicht rückwirkend beginnen.</span></div></li>
      <li><div><strong>Vor der Abmeldung: Fristen und Fahrzeug</strong><span>Schadenfreiheitsklasse Ihres Autos schriftlich bestätigen lassen. Prüfen, ob Ihr Fahrzeug mitkommt oder importiert werden soll.</span></div></li>
      <li><div><strong>Abmeldung in Deutschland</strong><span>Beim Einwohnermeldeamt, mit dem exakten Datum. Dieses Datum bestimmt, wann Ihre GKV-Mitgliedschaft endet.</span></div></li>
      <li><div><strong>Nach Ankunft: Registrierung in Portugal</strong><span>Aufenthaltsregistrierung bei der Câmara Municipal, NIF, gegebenenfalls Anmeldung beim Centro de Saúde.</span></div></li>
      <li><div><strong>Rentner: S1-Formular beantragen</strong><span>Bei Ihrer deutschen gesetzlichen Krankenkasse, sobald der Wohnsitz in Portugal feststeht.</span></div></li>
      <li><div><strong>Laufend: Hausversicherung, sobald eine Immobilie feststeht</strong><span>Vor dem Notartermin (escritura), nicht danach — dazu mehr auf der Seite zur Hausversicherung.</span></div></li>
    </ol>
  </div>
</section>

<section class="section tint" aria-labelledby="gkv-pkv">
  <div class="container narrow article-body">
    <h2 id="gkv-pkv">Was passiert mit meiner deutschen Krankenversicherung?</h2>
    <p>Die Antwort hängt davon ab, ob Sie gesetzlich (GKV) oder privat (PKV) versichert sind — und die beiden Wege sind grundverschieden.</p>
    <h3>Gesetzlich Versicherte (GKV)</h3>
    <p>Die Mitgliedschaft in der gesetzlichen Krankenversicherung hängt am Wohnsitz und in der Regel an einer Beschäftigung oder einem Rentenbezug in Deutschland. Geben Sie Ihren deutschen Wohnsitz endgültig auf und arbeiten oder beziehen keine Rente mehr aus Deutschland, endet die GKV-Mitgliedschaft grundsätzlich mit der Abmeldung. Es gibt eine wichtige Ausnahme: Rentner, die ausschließlich eine deutsche Rente beziehen, können ihre gesetzliche Versicherung über das <strong>S1-Formular</strong> behalten — dazu weiter unten mehr.</p>
    <h3>Privat Versicherte (PKV)</h3>
    <p>Ein PKV-Vertrag endet nicht automatisch mit dem Wegzug. Das ist zugleich das Problem: Viele PKV-Tarife bieten im Ausland gar keinen oder nur einen zeitlich begrenzten Schutz (etwa für Urlaubsreisen), nicht für einen dauerhaften Wohnsitz in Portugal. Sie zahlen dann womöglich weiter volle Beiträge für eine Deckung, die im Ernstfall nicht greift.</p>
    <p>Wer die PKV nicht komplett kündigen will — eine Kündigung ist oft schwer rückgängig zu machen, besonders mit zunehmendem Alter oder bei Vorerkrankungen —, kann sie stattdessen über eine <strong>Anwartschaftsversicherung</strong> ruhend stellen: ein reduzierter Beitrag ohne Leistungsanspruch, der das Recht auf spätere Rückkehr in den ursprünglichen Tarif ohne neue Gesundheitsprüfung sichert. Die Wahl zwischen kleiner und großer Anwartschaft ist genau die "teure, schwer umkehrbare Entscheidung", die in den meisten portugiesischen Ratgebern fehlt — wir behandeln sie ausführlich, mit dem Unterschied zwischen beiden Varianten und wovon die Wahl tatsächlich abhängt, auf der Seite zur <a href="/de/anwartschaftsversicherung-portugal/">Anwartschaftsversicherung beim Umzug nach Portugal</a>.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="portugiesische-kv">
  <div class="container narrow article-body">
    <h2 id="portugiesische-kv">Brauche ich eine portugiesische Krankenversicherung?</h2>
    <p>In den allermeisten Fällen: ja, zusätzlich. Als registrierter Resident haben Sie Zugang zum staatlichen Gesundheitssystem (SNS), sobald Sie beim Centro de Saúde angemeldet sind. In der Praxis bedeutet das oft Wartezeiten bei Fachärzten und eine sprachliche Hürde, die viele deutsche Expats unterschätzen. Eine private portugiesische Krankenversicherung ergänzt das SNS um schnellere Termine und freie Klinikwahl — und wird für bestimmte Aufenthaltstitel ohnehin als Nachweis verlangt.</p>
    <p>Was dabei zu beachten ist — Wartezeiten, Gesundheitsprüfung, Vorerkrankungen, Netzwerke und Erstattungsmodelle — behandeln wir ausführlich auf der Seite zur <a href="/de/krankenversicherung-portugal/">Krankenversicherung in Portugal</a>.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="s1">
  <div class="container narrow article-body">
    <h2 id="s1">Das S1-Formular für Rentner</h2>
    <p>Beziehen Sie ausschließlich eine deutsche gesetzliche Rente und keine Beschäftigungs- oder sonstigen Einkünfte in Portugal, können Sie über Ihre deutsche gesetzliche Krankenkasse ein <strong>S1-Formular</strong> beantragen. Das Verfahren wird auf deutscher Seite über die Deutsche Verbindungsstelle Krankenversicherung – Ausland (DVKA) koordiniert. Mit dem S1 registriert, erhalten Sie in Portugal Zugang zum SNS zu denselben Bedingungen wie ein portugiesischer Rentner — die Kosten trägt im Ergebnis die deutsche Seite.</p>
    <div class="callout">
      <span class="callout-label">Was das S1 gibt und was nicht</span>
      Das S1 öffnet den Zugang zum staatlichen System. Es ersetzt keine private Zusatzversicherung — dieselben praktischen Einschränkungen des SNS (Wartezeiten, Sprache) gelten auch mit S1. Viele Rentner kombinieren das S1 daher mit einer schlanken privaten Police für Zusatzleistungen, statt sich ausschließlich auf das SNS zu verlassen.
    </div>
    <p>Ausführlich, mit der genauen Gegenüberstellung von Leistung und Lücke sowie der Altersgrenze bei regulären Versicherern: <a href="/de/s1-formular-rentner-portugal/">Das S1-Formular für Rentner</a>.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="auto">
  <div class="container narrow article-body">
    <h2 id="auto">Kann ich mein Auto mitbringen?</h2>
    <p>Grundsätzlich ja — die Frage ist, ob sich die Ummeldung auf ein portugiesisches Kennzeichen lohnt oder ob ein Neukauf vor Ort sinnvoller ist. Solange das Fahrzeug deutsch zugelassen bleibt, muss die deutsche Kfz-Versicherung fortbestehen, bis eine portugiesische Deckung greift — eine Lücke zwischen beiden ist der teuerste und am leichtesten vermeidbare Fehler in diesem Prozess.</p>
    <p>Ihre deutsche <strong>Schadenfreiheitsklasse</strong> ist bei einem portugiesischen Versicherer wirtschaftlich wertvoll, aber ihre Anerkennung ist nicht garantiert und hängt vom jeweiligen Versicherer ab. Lassen Sie sich die Schadenfreiheitsklasse von Ihrem deutschen Versicherer schriftlich bestätigen, <strong>bevor</strong> der Vertrag endet — dieser Nachweis ist im Nachhinein schwer zu beschaffen. Details zu Kennzeichenwahl, Import und Dokumenten behandelt die Seite zur <a href="/de/autoversicherung-portugal/">Autoversicherung in Portugal</a>; zur ISV-Befreiung bei dauerhafter Wohnsitzverlegung im Detail siehe <a href="/de/isv-befreiung-fahrzeugimport-portugal/">ISV-Befreiung beim Fahrzeugimport</a>.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="haus">
  <div class="container narrow article-body">
    <h2 id="haus">Wie versichere ich ein Haus in Portugal?</h2>
    <p>Zwei Konzepte, die deutschen Käufern selten vorher erklärt werden. Erstens: In Deutschland ist der Unterversicherungsverzicht bei vielen Wohngebäudeversicherungen üblich. In Portugal gilt stattdessen die <em>regra proporcional</em> — bei einer zu niedrig angesetzten Versicherungssumme wird jede Schadenzahlung anteilig gekürzt, unabhängig von der Schadenhöhe. Zweitens: Die in Deutschland fast selbstverständliche Privathaftpflicht existiert in Portugal nicht in derselben automatischen Form, und Erdbebendeckung ist optional und separat bepreist.</p>
    <p>Wenn Sie kaufen: Die Versicherungssumme sollte vor dem Notartermin (escritura) auf Basis der Wiederaufbaukosten festgelegt sein, nicht auf Basis des Kaufpreises. Vertiefend, mit Beispielen zur Wiederaufbaukoste-Berechnung: <a href="/en/blog/mortgage-sum-insured-vs-rebuild-cost-portugal/" hreflang="en">Insuring to the Bank's Figure Is Not the Same as Insuring to Rebuild Cost</a> (Englisch). Alle Details zur Hausversicherung selbst stehen auf <a href="/de/hausversicherung-portugal/">Hausversicherung in Portugal</a>. Kaufen Sie eine Bestandsimmobilie im Hinterland oder auf einem größeren Grundstück, prüfen Sie zudem die Legalisierung vor der escritura — siehe <a href="/de/nicht-legalisierte-immobilie-versichern-portugal/">eine nicht legalisierte Immobilie versichern</a>.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="vergleich">
  <div class="container narrow article-body">
    <h2 id="vergleich">Wie funktioniert Versicherung in Portugal im Vergleich zu Deutschland?</h2>
    <p>Ein paar strukturelle Unterschiede, die den Alltag mit einer portugiesischen Police prägen:</p>
    <ul>
      <li><strong>Aufsicht.</strong> Statt der BaFin beaufsichtigt in Portugal die <em>Autoridade de Supervisão de Seguros e Fundos de Pensões</em> (ASF) Versicherer und Vermittler.</li>
      <li><strong>Sprache der Police.</strong> Verträge portugiesischer Versicherer werden gesetzlich auf Portugiesisch ausgestellt — unabhängig davon, in welcher Sprache die Beratung stattfand.</li>
      <li><strong>Privathaftpflicht und Erdbeben.</strong> Beide sind, anders als in Deutschland gewohnt, nicht automatisch Teil einer Standardpolice.</li>
      <li><strong>Streitbeilegung im Schadenfall.</strong> Bei Uneinigkeit über die Schadenhöhe sieht das portugiesische Versicherungsvertragsrecht (Decreto-Lei n.º 72/2008, Art. 50.º) ein Schiedsgutachterverfahren vor: jede Seite benennt einen Sachverständigen, bei Uneinigkeit entscheidet ein dritter. Ein Mechanismus, den die meisten deutschen Expats erst kennenlernen, wenn sie ihn brauchen.</li>
    </ul>
    <p>Der Rest — Maklerpflichten, Vergleich mehrerer Anbieter, schriftliche Bedingungen vor Vertragsschluss — funktioniert im Grundsatz ähnlich wie in Deutschland, nur eben in einem Versichererportfolio, das die meisten deutschen Expats vorher nicht kennen.</p>
  </div>
</section>`,
  faqTitle: 'Umzug und Versicherung — häufige Fragen',
  faq: [
    {
      q: 'Was passiert mit meiner deutschen Krankenversicherung, wenn ich nach Portugal ziehe?',
      a: '<p>Bei gesetzlich Versicherten endet die Mitgliedschaft in der Regel mit der Abmeldung aus Deutschland, außer Sie beziehen ausschließlich eine deutsche Rente und beantragen ein S1-Formular. Bei privat Versicherten endet der Vertrag nicht automatisch, bietet aber oft keinen praktischen Schutz für einen dauerhaften Wohnsitz im Ausland — die Umwandlung in eine Anwartschaftsversicherung (klein oder groß) ist der Schritt, der meist übersehen wird.</p>',
    },
    {
      q: 'Brauche ich eine portugiesische Krankenversicherung?',
      a: '<p>In den meisten Fällen ja, ergänzend zum staatlichen SNS, dem Sie als registrierter Resident beitreten. Details zu Wartezeiten, Gesundheitsprüfung und Netzwerken stehen auf unserer Seite zur Krankenversicherung in Portugal.</p>',
    },
    {
      q: 'Wie versichere ich ein Haus in Portugal?',
      a: '<p>Über die Wiederaufbaukosten, nicht über den Kaufpreis — wegen der portugiesischen regra proporcional, die eine zu niedrige Versicherungssumme anteilig auf jede Schadenzahlung anwendet. Privathaftpflicht und Erdbebendeckung sind separat zu prüfen, da sie nicht automatisch enthalten sind.</p>',
    },
    {
      q: 'Welche Versicherungen brauche ich beim Umzug?',
      a: '<p>Mindestens: eine Krankenversicherung ohne Deckungslücke, eine Kfz-Lösung ohne Lücke zwischen deutscher und portugiesischer Police (falls ein Fahrzeug mitkommt), und eine Hausversicherung sobald eine Immobilie feststeht. Die Reihenfolge und die jeweiligen Fristen stehen im Abschnitt oben auf dieser Seite.</p>',
    },
    {
      q: 'Kann ich mein Auto mitbringen?',
      a: '<p>Ja. Die Frage ist eher, ob sich die Ummeldung lohnt und wie die Deckung zwischen deutschem und portugiesischem Vertrag lückenlos organisiert wird. Lassen Sie sich Ihre Schadenfreiheitsklasse schriftlich bestätigen, bevor der deutsche Vertrag endet.</p>',
    },
    {
      q: 'Wie funktioniert Versicherung in Portugal im Vergleich zu Deutschland?',
      a: '<p>Andere Aufsichtsbehörde (ASF statt BaFin), Policen gesetzlich auf Portugiesisch, keine automatische Privathaftpflicht, optionale Erdbebendeckung, und ein eigenes Schiedsgutachterverfahren bei Streit über die Schadenhöhe. Im Grundsatz — Maklerpflichten, Vergleich, schriftliche Bedingungen — ist der Ablauf dem deutschen aber ähnlich.</p>',
    },
  ],
  related: [
    { url: '/de/anwartschaftsversicherung-portugal/', label: 'Anwartschaftsversicherung beim Umzug nach Portugal' },
    { url: '/de/krankenversicherung-portugal/', label: 'Krankenversicherung in Portugal' },
    { url: '/de/hausversicherung-portugal/', label: 'Hausversicherung in Portugal' },
    { url: '/de/autoversicherung-portugal/', label: 'Autoversicherung in Portugal' },
    { url: '/en/blog/mortgage-sum-insured-vs-rebuild-cost-portugal/', label: "Insuring to the Bank's Figure Is Not the Same as Insuring to Rebuild Cost (Englisch)", hreflang: 'en' },
  ],
};
