import { BREADCRUMB_ROOT } from './shared.mjs';

/**
 * Private Clients — premium identity, German headings, per Part 6. The
 * underwriting-route facts (Hiscox all-risks/agreed-value household cover,
 * Liberty Mutual through Innovarisk for non-standard property, specialty
 * capacity through Innovarisk for bespoke risk) are translated from
 * public/en/private-clients/index.html's own "Who underwrites this cover"
 * section — not invented. Classic cars and yacht/marine cover are included
 * because the repository already carries real guides for both (classic-
 * collector-cars-portugal-matriculation-agreed-value, luxury-car-insurance-
 * portugal, yacht-insurance-algarve-marinas); nothing here goes further than
 * what those pages already establish.
 */
export const PRIVATE_CLIENTS_PAGE = {
  slug: 'private-clients-portugal',
  url: '/de/private-clients-portugal/',
  title: 'Private Clients Portugal: Versicherung für komplexe Risiken | Adler & Rochefort',
  description:
    'Für internationale Familien, Eigentümer und Unternehmer mit komplexeren Risiken: Luxusimmobilien, Kunst und Sammlungen, Schmuck und Uhren, Oldtimer und mehrere Wohnsitze — individuell zusammengestellt statt aus dem Standardprodukt.',
  keywords: 'Private Clients Versicherung Portugal, Luxusimmobilien Versicherung Portugal, Kunstversicherung Portugal, Oldtimer Versicherung Portugal, Versicherung Zweitwohnsitz Portugal',
  eyebrow: 'Private Clients',
  h1: 'Private Clients: Versicherung für komplexere Risiken',
  standfirst:
    'Für internationale Familien, Eigentümer und Unternehmer mit komplexeren Risiken. Standardprodukte sind nicht für jedes Risiko gemacht — komplexe Vermögenswerte brauchen eine integrierte Risikoanalyse statt einer Police von der Stange.',
  heroMeta: 'Registrierter Versicherungsmakler · ASF Nr. 425591790/3 · Lagos, Algarve',
  heroCta: 'Private Client Beratung anfragen',
  hreflang: {},
  langLinks: {},
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Private Clients' }],
  published: '2026-09-12T09:00:00+00:00',
  modified: '2026-09-12T09:00:00+00:00',
  pullquote: 'Standardprodukte sind nicht für jedes Risiko gemacht.',
  schemaType: 'WebPage',
  formHeading: 'Private Client Beratung anfragen',
  formBranch: 'Private Clients',
  formSubject: 'Private Clients Portugal',
  formCta: 'Private Client Beratung anfragen',
  formIntro: 'Beschreiben Sie kurz, um welche Vermögenswerte es geht — wir sagen Ihnen, welcher Weg zur individuellen Risikoprüfung passt.',
  formPlaceholder: 'Zum Beispiel: Anzahl und Art der Immobilien, besondere Sammlungen oder Fahrzeuge, ob bereits eine Schadenhistorie besteht, gewünschter Deckungsumfang.',
  sections: `
<section class="section plain" aria-labelledby="warum">
  <div class="container narrow article-body">
    <h2 id="warum">Warum ein Standardprodukt hier nicht ausreicht</h2>
    <p>Eine gewöhnliche Hausrat- oder Wohngebäudepolice ist für den Durchschnittsfall kalkuliert: ein Hauptwohnsitz, gewöhnlicher Hausrat, ein überschaubarer Wiederbeschaffungswert. Sobald eine Immobilie leer steht, saisonal vermietet wird, ungewöhnlich gebaut ist oder bereits eine Schadenhistorie hat, oder sobald Kunst, Schmuck, Uhren oder Fahrzeuge einen Wert erreichen, der über das hinausgeht, was ein Sublimit vorsieht, passt das Standardprodukt nicht mehr. Es fehlt nicht an gutem Willen des Versicherers — das Produkt ist schlicht nicht für dieses Risiko kalkuliert.</p>
    <p>Für diese Fälle braucht es individuelle Risikoprüfung statt einer Tabelle, aus der ein Tarif abgelesen wird.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="bereiche">
  <div class="container">
    <span class="eyebrow">Was wir abdecken</span>
    <h2 id="bereiche">Bereiche, in denen wir beraten</h2>
    <div class="feature-grid">
      <div class="feature-card">
        <span class="fc-tag">Immobilien</span>
        <h3>Luxusimmobilien &amp; Zweitwohnsitze</h3>
        <p>Hochwertige Häuser, saisonal genutzte Zweitwohnsitze, mehrere Immobilien in unterschiedlichen Regionen.</p>
      </div>
      <div class="feature-card">
        <span class="fc-tag">Sammlungen</span>
        <h3>Kunst und Sammlungen</h3>
        <p>Einzelbewertung statt Sublimit, mit Deckung auch außerhalb des Wohnsitzes und weltweit.</p>
      </div>
      <div class="feature-card">
        <span class="fc-tag">Wertgegenstände</span>
        <h3>Schmuck und Uhren</h3>
        <p>Vereinbarte Werte je Einzelstück statt einer pauschalen Obergrenze für "Wertsachen".</p>
      </div>
      <div class="feature-card">
        <span class="fc-tag">Fahrzeuge</span>
        <h3>Oldtimer</h3>
        <p>Individuell bewertete Fahrzeuge, oft mit vereinbartem Wert und eingeschränkter Nutzung statt Kilometerpauschale.</p>
      </div>
      <div class="feature-card">
        <span class="fc-tag">Gesundheit</span>
        <h3>Internationale Krankenversicherung</h3>
        <p>Für Familien mit Wohnsitz in mehreren Ländern — Abgrenzung zur portugiesischen Standardpolice auf unserer <a href="/de/krankenversicherung-portugal/">Krankenversicherungsseite</a>.</p>
      </div>
      <div class="feature-card">
        <span class="fc-tag">Haftung</span>
        <h3>Haftpflicht</h3>
        <p>Für Familien mit internationalem Vermögen und entsprechend höherem Haftungsrisiko.</p>
      </div>
      <div class="feature-card wide">
        <span class="fc-tag">Marine</span>
        <h3>Yachten und Boote</h3>
        <p>Was Algarve-Marinas vor der Liegeplatzvergabe an Nachweisen verlangen, behandelt unser englischsprachiger Leitfaden im Detail — sprechen Sie uns direkt an, wenn es um Ihr Boot oder Ihre Yacht geht.</p>
      </div>
    </div>
  </div>
</section>

<section class="section plain" aria-labelledby="uw">
  <div class="container narrow article-body">
    <h2 id="uw">Wer diese Risiken zeichnet</h2>
    <p>Wir sind Versicherungsmakler und an keinen dieser Zeichner gebunden — wo eine ordentlich aufgebaute Standardpolice denselben Zweck günstiger erfüllt, sagen wir das.</p>
    <h3>Hiscox</h3>
    <p>Hausratdeckung auf All-Risk-Basis, mit Kunst, Schmuck, Uhren und Sammlungen zu vereinbarten Werten, Deckung für Besitz außerhalb des Wohnsitzes und weltweit, sowie Familienhaftpflicht.</p>
    <h3>Liberty Mutual, über Innovarisk</h3>
    <p>Immobilien, die der Standardmarkt schlecht abdeckt: unkonventionelle Bauweise, gemischte Nutzung, kurzfristige Vermietung und Alojamento Local, sowie Objekte mit vorheriger Schadenhistorie. Innovarisk ist eine Underwriting-Agentur (MGA) und selbst kein Versicherer — sie vermittelt den Zugang zur Zeichnungskapazität von Liberty Mutual für Risiken, die ein Standardprodukt nicht abdeckt.</p>
    <h3>Spezialkapazität, über Innovarisk</h3>
    <p>Existiert kein Produkt von der Stange, geht das Risiko an eine spezialisierte Underwriting-Agentur und wird individuell gezeichnet statt tabellarisch bepreist.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="ablauf">
  <div class="container narrow article-body">
    <h2 id="ablauf">Wie die individuelle Zeichnung abläuft</h2>
    <p>Anders als bei einer Standardpolice reicht online eingegebene Postleitzahl und Wohnfläche nicht aus. Der Zeichner verlangt in der Regel eine schriftliche Einreichung mit Fotos oder einer aktuellen Bewertung, einer Beschreibung der Bauweise oder Nutzung, und gegebenenfalls der Schadenhistorie. Das dauert länger als eine Sofort-Police, führt aber zu Bedingungen, die tatsächlich zum Risiko passen — schriftlich, bevor Sie unterschreiben.</p>
  </div>
</section>`,
  faqTitle: 'Private Clients Portugal — häufige Fragen',
  faq: [
    {
      q: 'Ab wann brauche ich eine Private-Client-Lösung statt einer Standardpolice?',
      a: '<p>Sobald eine Immobilie ungewöhnlich gebaut ist, überwiegend leer steht, saisonal vermietet wird oder eine Schadenhistorie hat — oder sobald Kunst, Schmuck, Uhren oder Fahrzeuge einen Wert erreichen, der über dem üblichen Sublimit einer Standardpolice liegt.</p>',
    },
    {
      q: 'Sind Kunst und Sammlungen zum tatsächlichen Wert versichert?',
      a: '<p>Über die genannten Zeichner ja, mit Einzelbewertung statt einer pauschalen Obergrenze — und mit Deckung auch außerhalb des Wohnsitzes und weltweit, je nach Police.</p>',
    },
    {
      q: 'Was ist Innovarisk?',
      a: '<p>Eine Underwriting-Agentur (MGA), kein Versicherer. Sie vermittelt Zugang zur Zeichnungskapazität von Liberty Mutual und zu weiterer Spezialkapazität für Risiken, die ein Standardprodukt nicht abdeckt.</p>',
    },
    {
      q: 'Ist mein Oldtimer eigenständig versicherbar?',
      a: '<p>Ja, mit individueller Bewertung statt einer generischen Kfz-Police — üblicherweise mit vereinbartem Wert und teils eingeschränkter Nutzung.</p>',
    },
  ],
  related: [
    { url: '/de/hausversicherung-portugal/', label: 'Hausversicherung in Portugal' },
    { url: '/en/private-clients/', label: 'Private Clients &amp; Collections (Englisch)', hreflang: 'en' },
    { url: '/en/blog/luxury-car-insurance-portugal/', label: 'Luxury Car Insurance in Portugal (Englisch)', hreflang: 'en' },
  ],
};
