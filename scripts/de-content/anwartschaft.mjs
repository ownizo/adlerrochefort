import { BREADCRUMB_ROOT } from './shared.mjs';

/**
 * Anwartschaftsversicherung — split out of the anchor page's PKV section
 * (scripts/de-content/moving.mjs) into its own page. The kleine/große
 * Anwartschaft mechanics were checked against GKV-Spitzenverband/DVKA's own
 * guidance and Finanztip's consumer explainer before the anchor page was
 * first written; this page goes deeper into the same, already-verified
 * mechanism rather than researching new ground.
 *
 * Deliberate framing throughout: this describes how Anwartschaftsversicherung
 * works as a mechanism and the questions worth asking, not what any specific
 * insurer's contract permits. German PKV contract terms are a matter between
 * the reader and their German insurer — nothing here states what a named
 * insurer's tariff does, and nothing claims to advise on the German contract
 * itself (see the closing paragraph of the first section).
 */
export const ANWARTSCHAFT_PAGE = {
  slug: 'anwartschaftsversicherung-portugal',
  url: '/de/anwartschaftsversicherung-portugal/',
  title: 'Anwartschaftsversicherung beim Umzug nach Portugal | Adler & Rochefort',
  description:
    'Was eine Anwartschaftsversicherung sichert, der Unterschied zwischen kleiner und großer Anwartschaft, was eine einfache Kündigung der PKV riskiert, und wie das mit einer portugiesischen Krankenversicherung zusammenspielt.',
  keywords:
    'Anwartschaftsversicherung Portugal, PKV Auswanderung Anwartschaft, kleine große Anwartschaft, PKV kündigen Auswanderung, private Krankenversicherung ruhend stellen Portugal',
  eyebrow: 'PKV & Auswanderung',
  h1: 'Anwartschaftsversicherung beim Umzug nach Portugal',
  standfirst:
    'Wer privat krankenversichert ist und nach Portugal zieht, steht vor einer Entscheidung, die kaum ein portugiesischer Ratgeber erklärt: die private Krankenversicherung einfach kündigen, oder über eine Anwartschaftsversicherung ruhend stellen? Die Antwort ist teuer zu korrigieren, wenn sie falsch getroffen wird — diese Seite ordnet den Mechanismus ein, ohne Ihnen zu sagen, was Ihr eigener Vertrag im Einzelnen erlaubt.',
  heroMeta: 'Registrierter Versicherungsmakler · ASF Nr. 425591790/3 · Lissabon · Lagos · Spanien',
  heroCta: 'Beratung anfragen',
  hreflang: {},
  langLinks: {},
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Anwartschaftsversicherung' }],
  published: '2026-09-12T09:00:00+00:00',
  modified: '2026-09-12T09:00:00+00:00',
  pullquote: 'Eine Anwartschaft kostet während der Auslandszeit Geld, für das Sie nichts in Anspruch nehmen können. Das ist kein Konstruktionsfehler — das ist ihr Zweck.',
  schemaType: 'Article',
  formHeading: 'Beratung zu Ihrer Situation anfragen',
  formBranch: '',
  formSubject: 'Anwartschaftsversicherung und Krankenversicherung Portugal',
  formCta: 'Beratung anfragen',
  formIntro:
    'Wir beraten zur portugiesischen Seite Ihrer Absicherung — welche Deckung Sie hier tatsächlich brauchen, während Ihre deutsche PKV ruht oder weiterläuft. Die Entscheidung über kleine oder große Anwartschaft selbst treffen Sie mit Ihrem deutschen Versicherer.',
  formPlaceholder:
    'Zum Beispiel: Ihr Alter, ob Sie bereits eine Anwartschaft haben oder erwägen, geplantes Abmeldedatum, ob eine Rückkehr nach Deutschland absehbar ist.',
  sections: `
<section class="section plain" aria-labelledby="was-ist-es">
  <div class="container narrow article-body">
    <h2 id="was-ist-es">Was eine Anwartschaftsversicherung ist, und was sie sichert</h2>
    <p>Eine Anwartschaftsversicherung ist keine Krankenversicherung im eigentlichen Sinn. Sie zahlen während der Auslandszeit einen deutlich reduzierten Beitrag, haben dafür aber <strong>keinen Leistungsanspruch</strong> — sie deckt keine Behandlung, weder in Deutschland noch in Portugal. Was sie stattdessen kauft, ist das Recht, später ohne erneute Gesundheitsprüfung in Ihren ursprünglichen PKV-Tarif zurückzukehren.</p>
    <p>Das ist der Punkt, an dem eine einfache Kündigung gefährlich wird: Ohne Anwartschaft verlieren Sie dieses Rückkehrrecht. Eine neue PKV, egal bei welchem Versicherer, verlangt dann eine neue Gesundheitsprüfung — mit dem vollen Risiko, dass eine in der Zwischenzeit aufgetretene Erkrankung zu einem Risikozuschlag, einem Leistungsausschluss oder im schlechtesten Fall zu einer Ablehnung führt.</p>
    <div class="callout">
      <span class="callout-label">Was diese Seite nicht tut</span>
      Wir sind portugiesischer Versicherungsmakler, kein deutscher PKV-Berater. Diese Seite erklärt den Mechanismus und die Fragen, die Sie klären sollten — nicht, was Ihr eigener Tarif im Detail zulässt. Die Bedingungen unterscheiden sich zwischen Versicherern und Tarifen; klären Sie die Einzelheiten schriftlich mit Ihrem deutschen PKV-Versicherer, bevor Sie kündigen oder eine Anwartschaft beantragen.
    </div>
  </div>
</section>

<section class="section tint" aria-labelledby="klein-gross">
  <div class="container narrow article-body">
    <h2 id="klein-gross">Kleine oder große Anwartschaft — der Unterschied, der über Jahre Geld kostet</h2>
    <p>Beide Varianten sichern dasselbe Grundrecht: Rückkehr in den ursprünglichen Tarif ohne neue Gesundheitsprüfung. Der Unterschied liegt darin, was während der Auslandszeit mit Ihren <strong>Alterungsrückstellungen</strong> passiert — dem Kapital, das Ihr Versicherer aus Ihren Beiträgen bildet, um die mit dem Alter steigenden Gesundheitskosten abzufedern.</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption>Beide Varianten im Vergleich — welche für Sie sinnvoll ist, hängt von Alter, Rückkehrwahrscheinlichkeit und geplanter Auslandsdauer ab, nicht von einer pauschalen Empfehlung.</caption>
        <thead>
          <tr><th scope="col"></th><th scope="col">Kleine Anwartschaft</th><th scope="col">Große Anwartschaft</th></tr>
        </thead>
        <tbody>
          <tr><td>Beitrag während der Auslandszeit</td><td>Niedriger</td><td>Höher</td></tr>
          <tr><td>Rückkehrrecht ohne Gesundheitsprüfung</td><td>Ja</td><td>Ja</td></tr>
          <tr><td>Alterungsrückstellungen</td><td>Werden nicht weiter aufgebaut</td><td>Werden weiter aufgebaut</td></tr>
          <tr><td>Beitrag bei Wiedereintritt</td><td>Nach dem dann erreichten Alter</td><td>Wie bei durchgehender Versicherung im ursprünglichen Tarif</td></tr>
        </tbody>
      </table>
    </div>
    <p>Die kleine Anwartschaft ist während der Auslandszeit günstiger, verschiebt die Kosten aber auf den Zeitpunkt der Rückkehr: Sie zahlen dann so, als wären Sie neu mit Ihrem <em>dann erreichten</em> Alter eingetreten — nicht mit dem Alter, in dem Sie ursprünglich Mitglied wurden. Die große Anwartschaft kostet mehr während der Auslandszeit, "friert" dafür Ihr ursprüngliches Eintrittsalter für die Beitragsberechnung ein.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="kuendigung">
  <div class="container narrow article-body">
    <h2 id="kuendigung">Was passiert, wenn ich einfach kündige?</h2>
    <p>Eine Kündigung ohne Anwartschaft beendet den Vertrag vollständig — es gibt keinen Vertrag mehr, der später "wiederbelebt" werden könnte. Ein späterer Wiedereintritt in die PKV, bei diesem oder einem anderen Versicherer, ist dann ein <strong>neuer</strong> Vertragsschluss mit neuer Gesundheitsprüfung. Was das konkret bedeutet, hängt vom dann erreichten Alter und Gesundheitszustand ab — von einem höheren Beitrag über Leistungsausschlüsse für zwischenzeitlich aufgetretene Erkrankungen bis zur Ablehnung reicht die Bandbreite möglicher Ergebnisse.</p>
    <p>Für wen eine Kündigung trotzdem infrage kommt: wer sicher weiß, dauerhaft nicht nach Deutschland zurückzukehren, oder wer plant, in Portugal dauerhaft über eine andere Lösung versichert zu bleiben (siehe unten) und das Rückkehrrecht bewusst nicht benötigt. Das ist eine Abwägung, die Sie mit Ihrem deutschen Versicherer und, wo es um die finanzielle Tragweite geht, mit einem unabhängigen Berater in Deutschland treffen.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="alter">
  <div class="container narrow article-body">
    <h2 id="alter">Warum das Alter beim Wiedereintritt zählt</h2>
    <p>PKV-Beiträge steigen grundsätzlich mit dem Eintrittsalter — je später der Eintritt, desto höher der Beitrag für dieselbe Leistung, weil weniger Jahre für den Aufbau der Alterungsrückstellungen zur Verfügung stehen. Bei der kleinen Anwartschaft wirkt genau dieser Mechanismus bei der Rückkehr gegen Sie: Sie gelten beitragsrechnerisch als würden Sie mit Ihrem heutigen, höheren Alter neu in den Tarif eintreten. Je länger die Auslandszeit und je später die Rückkehr, desto größer wird dieser Unterschied. Das ist der Kernkompromiss der kleinen Anwartschaft — niedrigerer Beitrag jetzt, gegen einen möglicherweise erheblich höheren Beitrag später.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="portugal">
  <div class="container narrow article-body">
    <h2 id="portugal">Das Zusammenspiel mit portugiesischer Deckung und dem SNS</h2>
    <p>Eine Anwartschaft, ob klein oder groß, deckt <strong>keine</strong> Behandlung — weder in Deutschland noch in Portugal. Sie brauchen für die Zeit in Portugal eine eigenständige, tatsächlich leistende Absicherung. Für die meisten Residenten sind das zwei Bausteine: die Anmeldung beim SNS als registrierter Resident, ergänzt um eine portugiesische private Krankenversicherung für das, was das SNS an Wartezeit mit sich bringt. Was dabei zu klären ist — Netzwerk, Wartezeiten, Gesundheitsprüfung, Vorerkrankungen — steht auf unserer Seite zur <a href="/de/krankenversicherung-portugal/">Krankenversicherung in Portugal</a>.</p>
    <p>Die Anwartschaft und die portugiesische Police laufen parallel und unabhängig voneinander: Die eine sichert Ihnen die spätere Rückkehr in die deutsche PKV, die andere deckt Behandlung, während Sie hier leben. Keine der beiden ersetzt die andere.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="entscheidung">
  <div class="container narrow article-body">
    <h2 id="entscheidung">Wovon die Entscheidung tatsächlich abhängt</h2>
    <p>Nicht von einer allgemeinen Empfehlung, sondern von vier Fragen, die Sie mit Ihrem deutschen PKV-Versicherer schriftlich klären sollten, bevor Sie kündigen oder eine Anwartschaft beantragen:</p>
    <ul>
      <li><strong>Wie wahrscheinlich und wann ist eine Rückkehr nach Deutschland?</strong> Je sicherer und je später im Leben eine Rückkehr, desto eher rechnet sich die große Anwartschaft trotz höherer laufender Kosten.</li>
      <li><strong>Wie ist Ihr aktueller Gesundheitszustand, und wie könnte er sich entwickeln?</strong> Das Rückkehrrecht ohne neue Gesundheitsprüfung ist umso wertvoller, je eher sich der Gesundheitszustand während der Auslandszeit verschlechtern könnte.</li>
      <li><strong>Was kostet die jeweilige Anwartschaft konkret, über die geplante Auslandsdauer gerechnet — und was würde der Wiedereintritt nach einer Kündigung stattdessen kosten?</strong> Nur Ihr Versicherer kann Ihnen diese beiden Zahlen für Ihren Tarif nennen; ohne sie ist jede allgemeine Empfehlung Spekulation.</li>
      <li><strong>Lässt sich die Entscheidung später noch ändern?</strong> Fragen Sie ausdrücklich, ob und wie von kleiner auf große Anwartschaft gewechselt werden kann, und ob es dafür eine Frist gibt.</li>
    </ul>
  </div>
</section>`,
  faqTitle: 'Anwartschaftsversicherung — häufige Fragen',
  faq: [
    {
      q: 'Muss ich eine Anwartschaftsversicherung abschließen, wenn ich nach Portugal ziehe?',
      a: '<p>Nein, das ist keine Pflicht. Es ist eine Möglichkeit, das Recht auf spätere Rückkehr in Ihren PKV-Tarif ohne neue Gesundheitsprüfung zu sichern. Ohne sie ist eine Kündigung endgültig, und ein späterer Wiedereintritt ist ein neuer Vertrag mit neuer Gesundheitsprüfung.</p>',
    },
    {
      q: 'Was ist der Unterschied zwischen kleiner und großer Anwartschaft?',
      a: '<p>Beide sichern das Rückkehrrecht ohne neue Gesundheitsprüfung. Bei der kleinen Anwartschaft wachsen Ihre Alterungsrückstellungen während der Auslandszeit nicht weiter, wodurch Sie bei Rückkehr nach Ihrem dann erreichten Alter bezahlen. Bei der großen Anwartschaft wachsen die Rückstellungen weiter, wodurch Sie bei Rückkehr so bezahlen, als wären Sie durchgehend versichert gewesen — gegen einen höheren laufenden Beitrag während der Auslandszeit.</p>',
    },
    {
      q: 'Deckt die Anwartschaft eine Behandlung in Portugal?',
      a: '<p>Nein. Eine Anwartschaft ist keine Krankenversicherung und deckt keine Behandlung, weder in Deutschland noch in Portugal. Sie brauchen dafür eine eigenständige Absicherung — in der Regel die SNS-Anmeldung als Resident, ergänzt um eine portugiesische private Krankenversicherung.</p>',
    },
    {
      q: 'Kann ich einfach kündigen, statt eine Anwartschaft abzuschließen?',
      a: '<p>Ja, aber eine Kündigung ist endgültig: Es gibt danach keinen Vertrag mehr, der wiederbelebt werden könnte. Ein späterer Wiedereintritt ist ein neuer Vertragsschluss mit neuer Gesundheitsprüfung, mit allen damit verbundenen Risiken bei Alter oder Gesundheitszustand.</p>',
    },
    {
      q: 'Wer kann mir sagen, was mein konkreter PKV-Tarif erlaubt?',
      a: '<p>Ausschließlich Ihr deutscher PKV-Versicherer. Wir beraten zur portugiesischen Seite Ihrer Absicherung — welche Deckung Sie hier tatsächlich benötigen, während Ihre deutsche PKV ruht oder weiterläuft — nicht zu den Bedingungen des deutschen Vertrags selbst.</p>',
    },
  ],
  related: [
    { url: '/de/umzug-deutschland-portugal-versicherung/', label: 'Versicherungen beim Umzug von Deutschland nach Portugal' },
    { url: '/de/krankenversicherung-portugal/', label: 'Krankenversicherung in Portugal' },
  ],
};
