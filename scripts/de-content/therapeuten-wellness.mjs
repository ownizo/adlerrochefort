import { BREADCRUMB_ROOT } from './shared.mjs';

/**
 * Berufshaftpflicht für Therapeuten und Wellness-Instruktoren — the German
 * cluster's professional-liability page, and the page the hub's "Unternehmen"
 * card has been pointing readers toward by hand ("Sprechen Sie uns direkt
 * an — die eigene Themenseite ist in Vorbereitung") since hub.mjs was written.
 * This module fulfils that placeholder for the therapist/wellness niche
 * specifically — it does not attempt the broader "any small business" scope
 * that card's copy still describes, which stays unbuilt.
 *
 * Facts (the two legal regimes, the ACSS cédula, the €150.000 minimum, and
 * the yoga/Pilates/Tai Chi/Qigong/meditation exclusion from it) are carried
 * over from the English cluster — public/en/blog/lei-71-2013-therapies-
 * liability-portugal/ and public/en/blog/yoga-instructor-liability-
 * insurance-portugal/ — themselves verified against the Portuguese pages
 * built in September 2026 (public/seguros/rc-terapeuticas-nao-
 * convencionais/, public/seguros/rc-yoga-pilates-bem-estar/). Nothing here
 * states a fact those pages do not already establish.
 *
 * The Heilpraktiker paragraph and the "a German-issued policy rarely
 * responds to a Portuguese claim" note are new for the German reader
 * specifically — the English pages have no equivalent audience and did not
 * need either.
 *
 * No insurer is named, per the policy set out in PR #160: marketing pages
 * describe the panel, not a specific carrier.
 *
 * hreflang / langLinks are deliberately left empty, as on every other
 * single-language page in this cluster (see private-clients.mjs) — cross-
 * language pairing for this page is out of scope for this branch.
 */
export const THERAPEUTEN_WELLNESS_PAGE = {
  slug: 'berufshaftpflicht-therapeuten-wellness-portugal',
  url: '/de/berufshaftpflicht-therapeuten-wellness-portugal/',
  title: 'Berufshaftpflicht für Therapeuten und Wellness-Instruktoren in Portugal | Adler & Rochefort',
  description:
    'Osteopathie, Akupunktur oder Naturheilkunde mit ACSS-Zulassung: Pflichtversicherung ab 150.000 €. Yoga, Pilates oder Meditation ohne Zulassung: keine gesetzliche Pflicht, aber echtes Haftungsrisiko. Zwei Rechtsrahmen, eine Seite.',
  keywords:
    'Berufshaftpflicht Therapeuten Portugal, Yoga Versicherung Portugal, Osteopathie Versicherung Portugal, Wellness Instruktor Haftpflicht Portugal, ACSS Zulassung Versicherung, Heilpraktiker Portugal Versicherung',
  eyebrow: 'Berufshaftpflicht',
  h1: 'Berufshaftpflicht für <em>Therapeuten und Wellness-Instruktoren</em>',
  standfirst:
    '„Therapeut" und „Wellness-Instruktor" klingen nach derselben Kategorie. Rechtlich sind es zwei völlig verschiedene Fälle: die eine Tätigkeit unterliegt in Portugal einer gesetzlichen Versicherungspflicht mit Mindestsumme, die andere nicht — und die falsche Police für die falsche Kategorie lässt Sie im Schadenfall ungedeckt da stehen.',
  heroMeta: 'Registrierter Versicherungsvermittler · ASF Nr. 425591790/3 · Lagos, Algarve',
  heroCta: 'Angebot anfragen',
  hreflang: {},
  langLinks: {},
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Berufshaftpflicht für Therapeuten und Wellness' }],
  published: '2026-09-14T09:00:00+00:00',
  modified: '2026-09-14T09:00:00+00:00',
  pullquote: 'Nicht die Ausbildung entscheidet über die Versicherungspflicht — die cédula profissional der ACSS entscheidet.',
  schemaType: 'WebPage',
  formHeading: 'Angebot für Ihre Tätigkeit anfragen',
  formBranch: 'Therapeuten & Wellness',
  formSubject: 'Berufshaftpflicht Therapeuten & Wellness',
  formCta: 'Angebot anfragen',
  formIntro:
    'Beschreiben Sie kurz Ihre Tätigkeit und ob Sie eine ACSS-Zulassung (cédula profissional) besitzen — wir sagen Ihnen, welcher Rechtsrahmen für Sie gilt und was die Police abdecken muss.',
  formPlaceholder:
    'Zum Beispiel: welche Tätigkeit genau, mit oder ohne cédula profissional, eigene Praxis oder Studio, mobil oder auch im Ausland tätig.',
  sections: `
<section class="section plain" aria-labelledby="zwei-rahmen">
  <div class="container narrow article-body">
    <h2 id="zwei-rahmen">Zwei Tätigkeiten, zwei Rechtsrahmen</h2>
    <p>Portugal unterscheidet klar zwischen zwei Gruppen, die im Deutschen oft unter denselben Sammelbegriff fallen. Die eine Gruppe übt eine der sieben gesetzlich anerkannten „terapêuticas não convencionais" aus — Akupunktur, Phytotherapie, Homöopathie, Traditionelle Chinesische Medizin, Naturheilkunde, Osteopathie und Chiropraktik — mit staatlich ausgestellter Berufszulassung und gesetzlicher Versicherungspflicht. Die andere unterrichtet Yoga, Pilates, Tai Chi, Qigong oder Meditation — Tätigkeiten, für die es in Portugal weder eine Berufszulassung noch eine gesetzliche Versicherungspflicht gibt, obwohl das Haftungsrisiko real bleibt.</p>
    <p>Welche Gruppe für Sie zutrifft, entscheidet nicht die Ausbildung und nicht der in Deutschland geführte Titel — es entscheidet ausschließlich, ob Sie eine <em>cédula profissional</em> (die Berufszulassung) der <strong>ACSS</strong> (<em>Administração Central do Sistema de Saúde</em>, die portugiesische Zentralverwaltung des Gesundheitssystems) besitzen, wie im nächsten Abschnitt erklärt.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="sieben-therapien">
  <div class="container narrow article-body">
    <h2 id="sieben-therapien">Die sieben gesetzlich geregelten Therapien</h2>
    <p>Das Gesetz Lei n.º 71/2013 erkennt sieben nicht-konventionelle Therapien an und verpflichtet ihre Ausübenden zur Berufshaftpflichtversicherung:</p>
    <ul class="reasons" style="margin-top:0;">
      <li><span class="check">&#10003;</span><div><strong>Akupunktur</strong></div></li>
      <li><span class="check">&#10003;</span><div><strong>Phytotherapie</strong></div></li>
      <li><span class="check">&#10003;</span><div><strong>Homöopathie</strong></div></li>
      <li><span class="check">&#10003;</span><div><strong>Traditionelle Chinesische Medizin</strong></div></li>
      <li><span class="check">&#10003;</span><div><strong>Naturheilkunde</strong></div></li>
      <li><span class="check">&#10003;</span><div><strong>Osteopathie</strong></div></li>
      <li><span class="check">&#10003;</span><div><strong>Chiropraktik</strong></div></li>
    </ul>
    <p>Wer eine dieser sieben Tätigkeiten ausübt, benötigt die <em>cédula profissional</em> — die Berufszulassung, die die ACSS ausstellt. Die Portaria n.º 200/2014 macht eine Berufshaftpflichtversicherung mit einer Mindestversicherungssumme von <strong>150.000 €</strong> je Schadenfall und Versicherungsjahr zur Bedingung für die Ausstellung dieser Zulassung. Ohne gültige Versicherung erlischt praktisch auch die Zulassung.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="heilpraktiker">
  <div class="container narrow article-body">
    <h2 id="heilpraktiker">Was das für den deutschen Heilpraktiker bedeutet</h2>
    <p>In Deutschland ist der Weg zur Ausübung vieler dieser Tätigkeiten die Heilpraktiker-Erlaubnis nach dem Heilpraktikergesetz — ein eigenes, in Portugal unbekanntes Zulassungssystem. Das führt zu einer verständlichen, aber falschen Annahme: dass eine deutsche Heilpraktiker-Erlaubnis eine praktizierende Person in Portugal automatisch in das Pflichtregime der sieben Therapien hineinstellt, oder umgekehrt automatisch davon ausschließt.</p>
    <p>Beides stimmt nicht. Die deutsche Ausbildung und der deutsche Titel spielen für die portugiesische Rechtslage keine Rolle. Entscheidend ist ausschließlich, ob eine <em>cédula profissional</em> der ACSS vorliegt oder beantragt wurde. Ein in Deutschland als Heilpraktiker(in) für Osteopathie zugelassener Therapeut, der in Portugal praktiziert, fällt unter das Pflichtregime, sobald die portugiesische Zulassung besteht — unabhängig vom deutschen Titel. Wer dagegen Yoga oder eine andere nicht gelistete Tätigkeit unterrichtet, fällt nicht darunter, selbst mit einer sehr fundierten deutschen Zusatzausbildung.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="wellness">
  <div class="container narrow article-body">
    <h2 id="wellness">Yoga, Pilates, Tai Chi, Qigong und Meditation: außerhalb der Versicherungspflicht</h2>
    <p>Diese Tätigkeiten stehen nicht auf der Liste der Lei n.º 71/2013. Es gibt weder eine ACSS-Zulassung noch eine gesetzliche Mindestversicherungssumme dafür — das Haftungsrisiko einer Unterrichtsstunde bleibt jedoch dasselbe, ob eine gesetzliche Pflicht besteht oder nicht. Viele Studios, Hotels und Retreat-Veranstalter verlangen inzwischen vertraglich den Nachweis einer eigenen Police, unabhängig von der fehlenden gesetzlichen Pflicht.</p>
    <p>Ein wichtiger Unterschied im Kleingedruckten: Bei den sieben regulierten Therapien wird der Ausschluss von Personenschäden wieder eingeschlossen, wenn der Schaden aus der Ausübung einer dieser sieben Therapien entsteht. Bei Yoga, Pilates und den übrigen Wellness-Tätigkeiten funktioniert der Wiedereinschluss anders: er greift, wenn der Schaden auf eine Sorgfaltspflichtverletzung bei der Ausübung der Tätigkeit zurückgeht — nicht auf die Ausübung einer der sieben Therapien, die hier ohnehin nicht vorliegt. Eine Police, die dies nicht richtig abbildet, lässt genau die Deckung fehlen, die eigentlich gebraucht wird.</p>
    <div class="callout">
      <span class="callout-label">Zuständigkeitsbereich prüfen</span>
      Eine in Deutschland abgeschlossene Berufs- oder Betriebshaftpflicht reagiert in aller Regel nicht auf eine in Portugal erhobene Forderung. Vor einem Retreat oder regelmäßigem Unterricht in Portugal lohnt sich ein Blick auf den räumlichen und gerichtlichen Geltungsbereich der bestehenden Police, statt stillschweigend von einer Deckung auszugehen, die dort gar nicht besteht.
    </div>
  </div>
</section>

<section class="section plain" aria-labelledby="deckung">
  <div class="container narrow article-body">
    <h2 id="deckung">Was die Police abdecken sollte</h2>
    <ul class="reasons" style="margin-top:0;">
      <li><span class="check">&#10003;</span><div><strong>Berufshaftpflicht</strong><span>Fehler, Unterlassungen oder Sorgfaltspflichtverletzungen bei der Ausübung der Tätigkeit.</span></div></li>
      <li><span class="check">&#10003;</span><div><strong>Verletzung der Vertraulichkeit</strong><span>Unbefugter Umgang mit Patienten- oder Klientendaten.</span></div></li>
      <li><span class="check">&#10003;</span><div><strong>Rechtsverteidigungskosten</strong><span>Auch bei einer unbegründeten Forderung entstehen Kosten, bevor überhaupt feststeht, ob ein Anspruch berechtigt ist.</span></div></li>
      <li><span class="check">&#10003;</span><div><strong>Betriebshaftpflicht für die eigene Praxis oder das Studio</strong><span>Deckt Schäden am Ort der Ausübung — bei den sieben regulierten Therapien separat vom Berufshaftpflichtmodul zu prüfen.</span></div></li>
    </ul>
    <p>Ausgeschlossen bleiben in aller Regel ärztliche und pflegerische Handlungen, Schäden am eigenen Praxisraum selbst sowie Sachverhalte, die vor Vertragsabschluss bereits bekannt waren — unabhängig davon, welcher der beiden Rechtsrahmen greift.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="summe">
  <div class="container narrow article-body">
    <h2 id="summe">Versicherungssumme</h2>
    <p>Für die sieben regulierten Therapien schreibt die Portaria n.º 200/2014 <strong>150.000 €</strong> je Schadenfall und Versicherungsjahr als gesetzliches Minimum vor. Die Lösungen, die wir vermitteln, beginnen bei <strong>250.000 €</strong> — der gesetzliche Mindestbetrag deckt eine Personenschadensforderung oft schlecht, sobald Entschädigung, Gutachten und Verteidigungskosten über einen mehrjährigen Prozess hinweg zusammenkommen.</p>
    <p>Für Yoga-, Pilates- und andere Wellness-Tätigkeiten gibt es keine gesetzliche Mindestsumme — wir empfehlen dieselbe Größenordnung ab 250.000 €, angepasst an Tätigkeitsart, Anzahl der Teilnehmenden und ob auch im Ausland unterrichtet wird.</p>
    <p>Wir arbeiten mit einem geprüften Panel internationaler Spezialversicherer für dieses Risiko, ausgewählt nach den Vertragsbedingungen und danach, wie im Schadenfall tatsächlich reagiert wird — nicht nach dem niedrigsten Preis. Welcher Versicherer im Einzelfall zeichnet, steht im Angebot und in den Vertragsunterlagen, nicht auf dieser Seite.</p>
  </div>
</section>`,
  faqTitle: 'Berufshaftpflicht für Therapeuten und Wellness — häufige Fragen',
  faq: [
    {
      q: 'Ist eine Berufshaftpflicht für Yoga- oder Wellness-Unterricht in Portugal gesetzlich vorgeschrieben?',
      a: '<p>Nein. Die gesetzliche Pflicht nach Lei n.º 71/2013 und Portaria n.º 200/2014 gilt nur für die sieben anerkannten Therapien mit ACSS-Zulassung. Yoga, Pilates, Tai Chi, Qigong und Meditation stehen nicht auf dieser Liste. Die Haftung für Schäden während des Unterrichts besteht trotzdem — nur eben ohne gesetzliche Mindestsumme.</p>',
    },
    {
      q: 'Was ist die cédula profissional?',
      a: '<p>Die Berufszulassung, die die ACSS (Administração Central do Sistema de Saúde, die portugiesische Zentralverwaltung des Gesundheitssystems) für die Ausübung einer der sieben regulierten Therapien ausstellt. Der Nachweis einer ausreichenden Berufshaftpflichtversicherung ist Bedingung für ihre Ausstellung.</p>',
    },
    {
      q: 'Ich bin in Deutschland als Heilpraktiker(in) zugelassen — fällt das automatisch unter die portugiesische Regelung?',
      a: '<p>Nicht automatisch, weder in die eine noch in die andere Richtung. Die deutsche Heilpraktiker-Erlaubnis hat kein Äquivalent im portugiesischen System. Entscheidend ist ausschließlich, ob eine cédula profissional der ACSS vorliegt oder beantragt wurde — nicht die deutsche Ausbildung oder der deutsche Titel.</p>',
    },
    {
      q: 'Deckt meine deutsche Berufs- oder Betriebshaftpflicht Schäden in Portugal ab?',
      a: '<p>In aller Regel nicht. Prüfen Sie den räumlichen und gerichtlichen Geltungsbereich der bestehenden Police, bevor Sie regelmäßig oder für ein Retreat in Portugal unterrichten — eine in Deutschland abgeschlossene Police reagiert selten auf eine dort erhobene Forderung.</p>',
    },
    {
      q: 'Wie hoch sollte die Versicherungssumme sein?',
      a: '<p>Für die sieben regulierten Therapien beträgt das gesetzliche Minimum 150.000 €; unsere Lösungen beginnen bei 250.000 €. Für Yoga und verwandte Tätigkeiten gibt es kein gesetzliches Minimum, wir empfehlen aber dieselbe Größenordnung, je nach Tätigkeit und Reichweite.</p>',
    },
  ],
  related: [
    { url: '/en/blog/liability-insurance-complementary-therapies/', label: 'Liability insurance for complementary and alternative medicine practitioners (Englisch)', hreflang: 'en' },
    { url: '/en/blog/lei-71-2013-therapies-liability-portugal/', label: 'The seven Lei 71/2013 therapies: the cédula, the cover and the €150,000 minimum (Englisch)', hreflang: 'en' },
    { url: '/en/blog/yoga-instructor-liability-insurance-portugal/', label: 'Liability insurance for yoga instructors in Portugal (Englisch)', hreflang: 'en' },
  ],
};
