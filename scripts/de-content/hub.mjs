/**
 * The hub — and, unlike the Dutch cluster, also the homepage. Part 4 of the
 * brief lists "/de/ (hub)" as one of the eleven pages, not a landing next to a
 * separately hand-authored /de/index.html, so this record replaces the
 * homepage outright. It keeps the working-language disclosure, the ASF
 * registration, the partner list and the factual "why us" material the old
 * hand-authored homepage already carried, and restructures the rest around
 * the methodology and content-block brief in Part 6.
 */

// The insurer row is the site's one list, in scripts/lib/site-sections.mjs.
// The heading and lead below it stay German and stay here.
import { insurerPanel } from '../lib/site-sections.mjs';

export const HUB_PAGE = {
  slug: 'de-hub',
  url: '/de/versicherung-portugal/',
  title: 'Versicherung in Portugal | Adler & Rochefort',
  description:
    'Nicht einfach versichert, richtig versichert: Versicherungsberatung für deutsche Privatkunden, Familien, Eigentümer und Unternehmer in Portugal. Kranken-, Haus-, Auto- und Lebensversicherung — wir beginnen mit dem Risiko, nicht mit dem Preis.',
  keywords:
    'Versicherung Portugal, Versicherungsmakler Portugal, Versicherung Portugal Deutsche, Krankenversicherung Portugal, Hausversicherung Portugal, Autoversicherung Portugal, Versicherung Algarve',
  eyebrow: 'Versicherungsmakler · Algarve, Portugal',
  h1: 'Nicht einfach versichert. <em>Richtig versichert.</em>',
  standfirst:
    'Versicherungsberatung für Privatkunden, Familien, Eigentümer und Unternehmer in Portugal. Wir vergleichen nicht nur Preise. Wir vergleichen, wie gut Sie wirklich geschützt sind.',
  heroMeta: 'Registrierter Versicherungsmakler · ASF Nr. 425591790/3 · Lissabon · Lagos · Spanien',
  heroCta: 'Versicherung anfragen',
  heroCtaSecondary: 'Beratung anfragen',
  // Die Startseiten-Gruppe umfasst inzwischen zehn Sprachen (siehe
  // scripts/hreflang.mjs und scripts/lib/market-hreflang.mjs). /se/ und /dk/
  // sind URL-Segmente, keine Sprachcodes — ausgeliefert wird sv bzw. da; /il/
  // ebenso, dort ist die Sprache he und das hreflang he-IL.
  hreflang: {
    en: '/en/expat-insurance-portugal/',
  },
  langLinks: {
    en: '/en/expat-insurance-portugal/',
  },
  breadcrumb: [{ name: 'Startseite', url: '/de/' }, { name: 'Versicherungen in Portugal' }],
  published: '2026-09-12T09:00:00+00:00',
  modified: '2026-09-12T09:00:00+00:00',
  pullquote: 'Eine Versicherung zeigt ihren Wert erst im Schadenfall.',
  isHub: false,
  schemaType: 'WebPage',
  formHeading: 'Ihr kostenloses Angebot',
  formBranch: '',
  formSubject: 'Versicherungen in Portugal',
  formIntro:
    'Beschreiben Sie kurz Ihre Situation. Wir sagen Ihnen, welches Risiko zuerst geklärt werden sollte und was warten kann.',
  formCta: 'Angebot anfragen',
  formPlaceholder:
    'Zum Beispiel: Sie ziehen um oder leben bereits hier, Immobilie oder Miete, mit oder ohne Fahrzeug, privat oder als Unternehmer.',
  sections: `
<section class="section plain" aria-labelledby="ausgangspunkt">
  <div class="container narrow article-body">
    <h2 id="ausgangspunkt">Wir beginnen nicht mit dem Preis. Wir beginnen mit Ihrem Risiko.</h2>
    <p>Die meisten Angebote, die deutsche Expats in Portugal sehen, beginnen mit einer Zahl: der günstigsten Prämie für eine bestimmte Deckungssumme. Das beantwortet die falsche Frage zuerst. Zwei Policen mit derselben Prämie können bei Hausrat, Selbstbehalt, Ausschlüssen, Wartezeiten oder Höchstgrenzen erheblich voneinander abweichen — und genau das entscheidet im Schadenfall, nicht die Zahl auf dem Angebot.</p>
    <p>Deshalb analysieren wir zuerst Ihre tatsächliche Situation: welche Risiken bei Ihnen konkret bestehen, was für Sie wichtig ist, und erst dann, welche Bedingungen dazu passen. Die beste Versicherung gibt es nicht — entscheidend ist, welche Bedingungen zu Ihrer Situation passen.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="methodik">
  <div class="container narrow">
    <span class="eyebrow">Unsere Methodik</span>
    <h2 id="methodik">So arbeiten wir</h2>
    <ol class="process-steps">
      <li><div><strong>Risiko verstehen</strong><span>Wir beginnen mit Ihrer persönlichen Situation, nicht mit einem Tarif.</span></div></li>
      <li><div><strong>Markt vergleichen</strong><span>Wir vergleichen geeignete Lösungen aus unserem Versichererportfolio.</span></div></li>
      <li><div><strong>Bedingungen prüfen</strong><span>Deckung, Ausschlüsse, Limits und Selbstbehalte — nicht nur die Prämie.</span></div></li>
      <li><div><strong>Unterschiede erklären</strong><span>Klare Empfehlungen statt Versicherungsjargon.</span></div></li>
      <li><div><strong>Entscheidung</strong><span>Sie entscheiden mit vollständiger Information — wir drängen nicht.</span></div></li>
      <li><div><strong>Schadenfall</strong><span>Wir unterstützen Sie bei der Kommunikation mit dem Versicherer.</span></div></li>
    </ol>
  </div>
</section>

<section class="section plain" aria-labelledby="risiken-de">
  <div class="container narrow article-body">
    <h2 id="risiken-de">Zwei Annahmen, die deutsche Expats teuer zu stehen kommen</h2>
    <p>Zwei Deckungen, die in Deutschland selbstverständlich sind, funktionieren in Portugal anders — und werden fast nie erklärt, bevor es zu spät ist.</p>
    <div class="callout">
      <span class="callout-label">Privathaftpflicht</span>
      In Deutschland hat sie praktisch jeder Haushalt, oft ohne aktiv darüber nachzudenken. In Portugal existiert kein direktes Äquivalent in derselben Form — sie ist weder verpflichtend noch automatisch Teil einer Hausratpolice. Wer davon ausgeht, "das ist doch sowieso mitversichert", stellt diese Annahme meist erst im Schadenfall auf die Probe.
    </div>
    <div class="callout">
      <span class="callout-label">Erdbebenversicherung</span>
      Für die meisten deutschen Käufer ein Konzept ohne Referenzpunkt zu Hause. In Portugal ist Erdbebendeckung optional und wird gesondert bepreist — gerade an der Algarve und im Großraum Lissabon ein Thema, über das man vor dem Kauf einer Immobilie nachdenken sollte, nicht danach.
    </div>
    <p>Beide Themen vertiefen wir auf der Seite zur <a href="/de/hausversicherung-portugal/">Hausversicherung in Portugal</a>.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="themen">
  <div class="container">
    <span class="eyebrow">Ihre Absicherung im Überblick</span>
    <h2 id="themen">Wofür wir Sie beraten</h2>
    <p class="lead">Neun Themen, die für deutsche Expats in Portugal am häufigsten zur Frage stehen — jedes mit eigenen Fallstricken, die eine allgemeine Übersetzung aus dem Deutschen nicht abdeckt.</p>
    <div class="feature-grid">
      <div class="feature-card">
        <span class="fc-tag">Gesundheit</span>
        <h3>Krankenversicherung</h3>
        <p>SNS, private Krankenversicherung und was mit Ihrer deutschen GKV oder PKV beim Wegzug passiert.</p>
        <a class="fc-link" href="/de/krankenversicherung-portugal/">Mehr erfahren</a>
      </div>
      <div class="feature-card">
        <span class="fc-tag">Immobilie</span>
        <h3>Hausversicherung</h3>
        <p>Gebäude, Hausrat, Erdbeben, Pool und die <em>regra proporcional</em> — die portugiesische Antwort auf den Unterversicherungsverzicht.</p>
        <a class="fc-link" href="/de/hausversicherung-portugal/">Mehr erfahren</a>
      </div>
      <div class="feature-card">
        <span class="fc-tag">Fahrzeug</span>
        <h3>Autoversicherung</h3>
        <p>Deutsches oder portugiesisches Kennzeichen, Ummeldung und wie Ihre Schadenfreiheitsklasse behandelt wird.</p>
        <a class="fc-link" href="/de/autoversicherung-portugal/">Mehr erfahren</a>
      </div>
      <div class="feature-card">
        <span class="fc-tag">Vorsorge</span>
        <h3>Lebensversicherung</h3>
        <p>Risikolebensversicherung, Absicherung im Zusammenhang mit einer Hypothek und Familienabsicherung als Resident.</p>
        <a class="fc-link" href="/de/lebensversicherung-portugal/">Mehr erfahren</a>
      </div>
      <div class="feature-card">
        <span class="fc-tag">Komplexe Risiken</span>
        <h3>Private Clients</h3>
        <p>Für internationale Familien, Eigentümer und Unternehmer mit Luxusimmobilien, Kunst, Sammlungen oder mehreren Wohnsitzen.</p>
        <a class="fc-link" href="/de/private-clients-portugal/">Mehr erfahren</a>
      </div>
      <div class="feature-card">
        <span class="fc-tag">Selbstständige &amp; Betriebe</span>
        <h3>Unternehmen</h3>
        <p>Betriebs- und Berufshaftpflicht für Selbstständige und kleine Unternehmen in Portugal. Sprechen Sie uns direkt an — die eigene Themenseite ist in Vorbereitung.</p>
      </div>
      <div class="feature-card">
        <span class="fc-tag">Therapie &amp; Wellness</span>
        <h3>Therapeuten &amp; Wellness-Instruktoren</h3>
        <p>Osteopathie, Akupunktur &amp; Co. mit ACSS-Zulassung unterliegen der gesetzlichen Pflichtversicherung; Yoga, Pilates und Meditation nicht — zwei Rechtsrahmen, oft verwechselt.</p>
        <a class="fc-link" href="/de/berufshaftpflicht-therapeuten-wellness-portugal/">Mehr erfahren</a>
      </div>
      <div class="feature-card wide">
        <span class="fc-tag">Umzug</span>
        <h3>Versicherungen beim Umzug von Deutschland nach Portugal</h3>
        <p>Abmeldung, GKV/PKV, Anwartschaftsversicherung, S1-Formular für Rentner und die Reihenfolge, in der das alles geregelt werden muss — unsere ausführlichste Seite für diesen Umzug.</p>
        <a class="fc-link" href="/de/umzug-deutschland-portugal-versicherung/">Zur Umzugs-Übersicht</a>
      </div>
    </div>
  </div>
</section>

<section class="section plain" aria-labelledby="schadenfall">
  <div class="container narrow article-body">
    <h2 id="schadenfall">Im Schadenfall</h2>
    <p>Eine Versicherung zeigt ihren Wert erst im Schadenfall. Versicherung endet für uns deshalb nicht mit dem Vertragsabschluss.</p>
    <p>Im Schadenfall helfen wir dabei, die notwendigen Informationen zu ordnen, die Anfragen des Versicherers zu verstehen, mit dem Versicherer zu kommunizieren, den Ablauf zu verfolgen und Unterlagen zu klären. Wir halten Sie währenddessen auf dem Laufenden.</p>
    <p>Was wir nicht tun: Ergebnisse versprechen, eine Zahlung garantieren oder die Entscheidung des Versicherers vorwegnehmen. Das liegt nicht in unserer Hand — die sorgfältige Begleitung des Prozesses schon.</p>
  </div>
</section>

${insurerPanel({
  id: 'versicherer',
  heading: 'Versicherer &amp; Co-Brokerage-Partner, <em>mit denen wir arbeiten</em>',
  lead:
    'Als Makler sind wir nicht an einen einzigen Versicherer gebunden. Wir beraten innerhalb unseres Versichererportfolios und wählen die passende Lösung für Ihre Situation.',
})}

<section class="section tint" aria-labelledby="warum">
  <div class="container narrow article-body">
    <h2 id="warum">Warum Adler &amp; Rochefort</h2>
    <ul class="reasons" style="margin-top:0;">
      <li>
        <span class="check">&#10003;</span>
        <div><strong>Registrierter Versicherungsmakler.</strong> <span>Adler &amp; Rochefort ist die Handelsmarke der Ownizo, Unipessoal Lda., bei der ASF unter Nr. 425591790/3 registriert. Wir beraten innerhalb unseres Versichererportfolios.</span></div>
      </li>
      <li>
        <span class="check">&#10003;</span>
        <div><strong>Vor Ort in Portugal.</strong> <span>Büros in Lissabon und Lagos, Mandanten in Portugal und Spanien.</span></div>
      </li>
      <li>
        <span class="check">&#10003;</span>
        <div><strong>Schriftliche Kommunikation.</strong> <span>Angebote, Bedingungen und Absprachen erhalten Sie schriftlich, damit nachvollziehbar bleibt, was vereinbart wurde.</span></div>
      </li>
      <li>
        <span class="check">&#10003;</span>
        <div><strong>Datenschutz nach DSGVO.</strong> <span>Ihre Angaben werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet. Details in unserer <a href="/en/privacy-policy" hreflang="en">Datenschutzerklärung</a>.</span></div>
      </li>
      <li>
        <span class="check">&#10003;</span>
        <div><strong>Maklerwechsel ohne neue Police.</strong> <span>Bereits versichert, aber schlecht betreut? Wir übernehmen die Verwaltung Ihrer bestehenden Verträge, ohne Änderung Ihres bestehenden Schutzes.</span></div>
      </li>
    </ul>
  </div>
</section>`,
  faqTitle: 'Versicherungen in Portugal — häufige Fragen',
  faq: [
    {
      q: 'Sind Sie ein deutsches Versicherungsunternehmen?',
      a: '<p>Nein. Adler &amp; Rochefort ist die Handelsmarke der Ownizo, Unipessoal Lda., einem in Portugal bei der ASF registrierten Versicherungsmakler (Nr. 425591790/3). Wir vermitteln Policen portugiesischer und international tätiger Versicherer aus unserem Versichererportfolio — wir sind kein deutscher Versicherer und keine deutsche Niederlassung.</p>',
    },
    {
      q: 'In welcher Sprache läuft die Beratung ab?',
      a: '<p>Diese Seiten sind auf Deutsch, weil die Themen deutsche Expats in Portugal betreffen. Angebote, Erläuterungen, Korrespondenz und Schadenbegleitung erhalten Sie schriftlich auf Deutsch. Policen portugiesischer Versicherer werden gesetzlich auf Portugiesisch ausgestellt; wir sorgen dafür, dass Sie auf Deutsch genau verstehen, was darin steht, bevor Sie unterschreiben.</p>',
    },
    {
      q: 'Was kostet Ihre Beratung?',
      a: '<p>Nichts zusätzlich zur Prämie. Als Versicherungsmakler werden wir vom Versicherer vergütet, nicht von Ihnen. Ein Vergleich und eine Erläuterung der Bedingungen sind kostenlos und unverbindlich.</p>',
    },
    {
      q: 'Arbeiten Sie in ganz Portugal oder nur an der Algarve?',
      a: '<p>In ganz Portugal und in Spanien. Wir haben Büros in Lissabon und Lagos; Spanien betreuen wir im europäischen Dienstleistungsverkehr von unserer ASF-Registrierung aus.</p>',
    },
    {
      q: 'Wo sollte ich als Erstes ansetzen?',
      a: '<p>Das hängt davon ab, ob Sie bereits umgezogen sind oder den Umzug planen. Steht der Umzug noch bevor, beginnen Sie mit unserer <a href="/de/umzug-deutschland-portugal-versicherung/">Übersicht zu Versicherungen beim Umzug</a> — dort steht die Reihenfolge, in der Entscheidungen anstehen. Leben Sie bereits hier, ist die Krankenversicherung meist das dringlichste Thema.</p>',
    },
  ],
  related: [
    { url: '/de/umzug-deutschland-portugal-versicherung/', label: 'Versicherungen beim Umzug von Deutschland nach Portugal' },
    { url: '/en/expat-insurance-lagos-portugal/', label: 'Expat insurance in Lagos, Algarve (Englisch)' },
  ],
};
