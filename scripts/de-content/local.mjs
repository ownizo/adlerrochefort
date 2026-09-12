import { BREADCRUMB_ROOT } from './shared.mjs';

/**
 * The four local pages (Part 4/6). Each ties the region's actual risk
 * profile to the product pages already built rather than repeating their
 * content, and none invents a fact not already established elsewhere on the
 * site (CUF/HPA network, the 1755-earthquake seismic zoning, Monchique's
 * 2018 wildfire). "Wir betreuen Kunden in…" everywhere except Algarve/Lagos,
 * where the registered address is real and the stronger claim is true.
 */

const ALGARVE_PAGE = {
  slug: 'versicherung-algarve',
  url: '/de/versicherung-algarve/',
  title: 'Versicherung Algarve für deutsche Expats und Eigentümer | Adler & Rochefort',
  description:
    'Hausversicherung, Krankenversicherung und Autoversicherung für deutsche Eigentümer und Expats an der Algarve — Küstenlage, Ferienimmobilien, Pools und das private Klinik-Netzwerk vor Ort.',
  keywords: 'Versicherung Algarve, Hausversicherung Algarve, Krankenversicherung Algarve, Ferienhaus Versicherung Algarve, Versicherungsmakler Algarve Deutsche',
  eyebrow: 'Regional · Algarve',
  h1: 'Versicherung an der Algarve',
  standfirst:
    'Wir sitzen in Lagos, mitten in der Algarve — das ist keine Marketingaussage, sondern unsere registrierte Geschäftsadresse. Diese Seite ordnet ein, welche Risiken für deutsche Eigentümer und Expats an der Algarve tatsächlich zählen.',
  heroMeta: 'Registrierter Versicherungsmakler · ASF Nr. 425591790/3 · Lagos, Algarve',
  heroCta: 'Angebot anfragen',
  hreflang: {},
  langLinks: {},
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Algarve' }],
  published: '2026-09-12T09:00:00+00:00',
  modified: '2026-09-12T09:00:00+00:00',
  schemaType: 'WebPage',
  formHeading: 'Angebot für die Algarve anfragen',
  formBranch: '',
  formSubject: 'Versicherung Algarve',
  formCta: 'Angebot anfragen',
  formIntro: 'Sagen Sie uns, worum es geht — Ferienhaus, Hauptwohnsitz, Fahrzeug oder Krankenversicherung — wir kennen die Region und die Anbieter vor Ort.',
  formPlaceholder: 'Zum Beispiel: Gemeinde (Lagos, Portimão, Faro, Tavira, Monchique …), Immobilientyp, Pool vorhanden, Hauptwohnsitz oder saisonale Nutzung.',
  sections: `
<section class="section plain" aria-labelledby="profil">
  <div class="container narrow article-body">
    <h2 id="profil">Küste und Hinterland sind zwei unterschiedliche Risikoprofile</h2>
    <p>Die Algarve ist keine homogene Region. An der Küste — Lagos, Portimão, Albufeira, Faro, Tavira — dominieren Ferienimmobilien, saisonale Vermietung und Pools; das Risiko ist Wasser, Sturm und Diebstahl in der Nebensaison. Im Hinterland — Monchique, Aljezur, Silves — überwiegt dichter Wald, und genau dort brannte im August 2018 die Serra de Monchique über tausende Hektar. Beide Profile brauchen eine andere Gewichtung bei der Deckung, nicht dieselbe Police mit anderem Absender.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="haus">
  <div class="container narrow article-body">
    <h2 id="haus">Ferienimmobilie, Pool und Alojamento Local</h2>
    <p>Ein großer Teil der von Deutschen gehaltenen Immobilien an der Algarve wird zeitweise vermietet oder steht während eines Teils des Jahres leer — beides muss der Versicherer wissen, damit die Police im Schadenfall greift. Pools sind an der Algarve nahezu Standard und müssen bei der Versicherungssumme separat angegeben werden. Erdbebendeckung ist an der Algarve keine theoretische Frage — Details dazu auf unserer Seite zur <a href="/de/hausversicherung-portugal/">Hausversicherung</a>.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="gesundheit">
  <div class="container narrow article-body">
    <h2 id="gesundheit">Gesundheitsversorgung vor Ort</h2>
    <p>An der westlichen Algarve dreht sich die private Versorgung um die CUF-Einheiten in Alvor, Lagos und Gambelas (vormals HPA) sowie private Kliniken in Lagos, Portimão und Faro. Was das für Ihre Police bedeutet, insbesondere seit der Übernahme durch CUF, steht auf unserer Seite zur <a href="/de/krankenversicherung-portugal/">Krankenversicherung</a>.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="auto">
  <div class="container narrow article-body">
    <h2 id="auto">Fahrzeug und Saisonverkehr</h2>
    <p>Wer sein Fahrzeug aus Deutschland mitbringt, sollte die Übergangsdeckung und die Ummeldung frühzeitig planen — Details auf unserer Seite zur <a href="/de/autoversicherung-portugal/">Autoversicherung</a>. In der Hauptsaison steigt an der Algarve zudem das Verkehrsaufkommen spürbar, was sich in der Unfallstatistik der Sommermonate niederschlägt.</p>
  </div>
</section>`,
  faqTitle: 'Versicherung Algarve — häufige Fragen',
  faq: [
    {
      q: 'Habt ihr ein Büro an der Algarve?',
      a: '<p>Ja — unsere registrierte Geschäftsadresse ist in Lagos, an der westlichen Algarve.</p>',
    },
    {
      q: 'Versichert ihr auch das Hinterland, nicht nur die Küste?',
      a: '<p>Ja, ganz Portugal. An der Algarve kennen wir die westliche Region am besten — von Küstenorten bis zum bewaldeten Hinterland um Monchique, wo das Waldbrandrisiko eine andere Gewichtung braucht als an der Küste.</p>',
    },
    {
      q: 'Ist eine Ferienimmobilie an der Algarve anders zu versichern als ein Hauptwohnsitz?',
      a: '<p>Ja. Saisonale Vermietung, Leerstand und Pool müssen der Versicherung gemeldet werden — Details auf unserer Seite zur Hausversicherung.</p>',
    },
  ],
  related: [
    { url: '/de/hausversicherung-portugal/', label: 'Hausversicherung in Portugal' },
    { url: '/de/krankenversicherung-portugal/', label: 'Krankenversicherung in Portugal' },
    { url: '/de/umzug-deutschland-portugal-versicherung/', label: 'Versicherungen beim Umzug von Deutschland nach Portugal' },
  ],
};

export const LOCAL_PAGES = [ALGARVE_PAGE];
