#!/usr/bin/env node
// Inserts the Private Client & Expat "one-stop-shop" block at the top of every
// language homepage, above the existing hero (menus and all content stay). Nothing
// existing is removed or rewritten: the block sits between <!-- AR-OSS -->
// markers and is replaced in place on re-runs. Existing H1s, sections, forms
// and URLs stay as they are. Spain always comes first.
//
// Two modes:
//   link   — one hub per country: the España | Portugal switch links the two URLs.
//   toggle — one hub for both countries: both versions are in the HTML and a
//            CSS-only radio switch shows one (no JavaScript, both indexable).
//
// Insurer names come only from data/partners.json (approved single source).
// Usage: node scripts/apply-one-stop-shop.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { T2 } from './one-stop-shop.i18n.mjs';

const REPO = join(dirname(fileURLToPath(import.meta.url)), '..');
const ROOT = join(REPO, 'public');
const CSS = '<link rel="stylesheet" href="/css/ar-oss.css">';
const START = '<!-- AR-OSS -->';
const END = '<!-- /AR-OSS -->';
const esc = (s) => s.replace(/&(?!(?:[a-z]+|#\d+);)/g, '&amp;');

const BROKERS = new Set(['Hispania', 'Innovarisk']);
const { partners: APPROVED } = JSON.parse(readFileSync(join(REPO, 'data', 'partners.json'), 'utf8'));
const INSURERS = APPROVED.filter((n) => !BROKERS.has(n));
const PARTNERS = APPROVED.filter((n) => BROKERS.has(n));

// ---------------------------------------------------------------- copy ----
const T = {
  en: {
    country: { es: 'Spain', pt: 'Portugal' },
    title: 'One adviser for everything you live in, drive and value.',
    lead: 'Home, luxury and collector cars, health, travel and professional liability — arranged with specialist insurers, held in one file, renewed on one calendar. For HNW and UHNW families settling in, investing in or moving between Spain and Portugal.',
    cta1: 'Request a written proposal', cta2: (c) => `What we arrange in ${c}`, cta2all: 'The five pillars',
    quote: '“Protection first. The premium is a consequence, never the brief.”', by: 'Hugo Gonçalves, Founder &amp; Managing Director',
    pillarsEyebrow: 'The five pillars',
    headline: { es: 'Everything you own in Spain, protected as one.', pt: 'Everything you own in Portugal, protected as one.' },
    intro: { es: 'High-value homes, luxury and classic cars, jewellery and health in Spain — from the same adviser who looks after Portugal.', pt: 'Specialist insurers for high-value homes, collector cars and international health — with domestic plans where they serve you better.' },
    explore: (title, c) => `Explore ${title.toLowerCase()} in ${c}`,
    accentTitle: 'Built to work together — not five policies, one programme.',
    accentBody: 'Collector cars and fine jewellery are often written alongside the home policy. We design the programme as a whole, so each cover strengthens the next and nothing falls between two insurers.',
    accentBtn: 'Start with what you own',
    partnersTitle: 'The insurers and partners we work with',
    partnersSub: 'Independent: no exclusive agreement with any insurer. Each option is chosen on wording, limits and claims service.',
    insurersLabel: 'Insurers', brokersLabel: 'Specialist brokers &amp; co-broking partners',
    beyondEyebrow: 'Beyond the five pillars', beyondTitle: 'For what doesn’t fit in a standard policy.', beyondSub: 'Specialist cover, arranged within the same programme.',
    guidesEyebrow: 'Guides &amp; insights', guidesTitle: 'Read before you decide.', guidesMore: 'More on private client cover below', read: 'Read the guide',
    countryAria: 'Country',
    status: { av: 'Available', ih: 'International + domestic', on: 'Buy online' },
    pillars: [
      ['Home', 'Second home or primary residence'],
      ['Luxury & classic cars', 'Classic, collector or performance'],
      ['Health', 'International and domestic plans'],
      ['Travel', 'Holidays and business trips'],
      ['Professional liability', 'For independent professionals']
    ],
    points: {
      es: [
        ['High-value homes, rebuild value from €700,000', 'Holiday and second homes for non-resident owners', 'Jewellery and watches insured separately from the home'],
        ['Luxury cars on agreed value, from €200,000', 'Classic cars — one car or a whole collection', 'Designed to sit alongside your home and collections cover'],
        ['International health (IPMI): treatment wherever you are, in Spain or abroad', 'Domestic health plans in Spain: coming soon', 'Plans built for life between Spain and your home country'],
        ['Single-trip and annual travel cover', 'Compare and buy online in minutes', 'For holidays, family travel and business trips'],
        ['Therapists, yoga, Pilates and Tai Chi instructors', 'Written under EU freedom of services', 'Same adviser, same file as your personal programme']
      ],
      pt: [
        ['Primary residences, second homes and holiday homes', 'Insured on rebuild value, not market price', 'Jewellery, art and valuables written with the home policy'],
        ['Luxury and performance cars', 'Classic and collector cars on agreed value', 'Motor liability up to €50M, arranged alongside the vehicle cover'],
        ['International health (IPMI): treatment wherever you are, in Portugal or abroad', 'Domestic health plans, including options for households over 65', 'A written comparison of every option on cover and claims service'],
        ['Single-trip and annual travel cover', 'Compare and buy online in minutes', 'For holidays, family travel and business trips'],
        ['Therapists, consultants, instructors and liberal professions', 'Limits from €250,000', 'Proposals prepared individually, after a detailed review of the risk']
      ]
    },
    beyond: {
      art: ['Art & collections', 'Fine art, wine and collections, at home or on loan.'],
      jewel: ['Jewellery & watches', 'All-risks cover, at home and when you travel.'],
      boat: ['Yachts & boats', 'Hull and liability for boats kept in Iberian marinas.'],
      fo: ['Family office', 'One coordinated programme for the family’s assets and people.'],
      fl: ['Family liability', 'Personal liability for the whole household.'],
      kr: ['Kidnap, ransom & extortion', 'Discreet cover and crisis response for families and executives.']
    }
  },
  pt: {
    country: { es: 'Espanha', pt: 'Portugal' },
    title: 'Um único interlocutor para tudo o que habita, conduz e valoriza.',
    lead: 'Casa, automóveis de luxo e de coleção, saúde, viagem e responsabilidade civil profissional — colocados em seguradoras especializadas, num único processo e com um único calendário de renovações. Para famílias HNW e UHNW que vivem, investem ou se dividem entre Espanha e Portugal.',
    cta1: 'Pedir uma proposta escrita', cta2: (c) => `O que tratamos em ${c}`, cta2all: 'Os cinco pilares',
    quote: '“Primeiro a proteção. O prémio é uma consequência, nunca o ponto de partida.”', by: 'Hugo Gonçalves, Fundador e Diretor-Geral',
    pillarsEyebrow: 'Os cinco pilares',
    headline: { es: 'Tudo o que tem em Espanha, protegido como um todo.', pt: 'Tudo o que tem em Portugal, protegido como um todo.' },
    intro: { es: 'Casas de valor elevado, automóveis de luxo e clássicos, joias e saúde em Espanha — com o mesmo interlocutor que trata de Portugal.', pt: 'Seguradoras especializadas para casas de valor elevado, automóveis de coleção e saúde internacional — com planos domésticos quando servem melhor.' },
    explore: (title, c) => `Saber mais — ${c}`,
    accentTitle: 'Pensado para funcionar em conjunto — não cinco apólices, um programa.',
    accentBody: 'Automóveis de coleção e joias são muitas vezes subscritos em conjunto com o seguro da casa. Desenhamos o programa como um todo, para que cada cobertura reforce a seguinte e nada fique entre duas seguradoras.',
    accentBtn: 'Comece pelo que tem',
    partnersTitle: 'As seguradoras e parceiros com quem trabalhamos',
    partnersSub: 'Independentes: sem acordos de exclusividade com nenhuma seguradora. Cada opção é escolhida pelo clausulado, pelos capitais e pela gestão de sinistros.',
    insurersLabel: 'Seguradoras', brokersLabel: 'Corretores especializados e parceiros de co-mediação',
    beyondEyebrow: 'Para além dos cinco pilares', beyondTitle: 'Para o que não cabe numa apólice standard.', beyondSub: 'Coberturas especializadas, dentro do mesmo programa.',
    guidesEyebrow: 'Saber mais', guidesTitle: 'Leia antes de decidir.', guidesMore: 'Mais sobre Private Clients abaixo', read: 'Ler mais',
    countryAria: 'País',
    status: { av: 'Disponível', ih: 'Internacional + doméstico', on: 'Compra online' },
    pillars: [
      ['Casa', 'Segunda habitação ou residência permanente'],
      ['Automóveis de luxo e clássicos', 'Clássicos, de coleção ou desportivos'],
      ['Saúde', 'Planos internacionais e domésticos'],
      ['Viagem', 'Férias e viagens de negócios'],
      ['RC profissional', 'Para profissionais independentes']
    ],
    points: {
      es: [
        ['Casas de valor elevado, reconstrução desde 700.000 €', 'Casas de férias e segundas habitações de proprietários não residentes', 'Joias e relógios seguros à parte da casa'],
        ['Automóveis de luxo com valor acordado, a partir de 200.000 €', 'Automóveis clássicos — um só ou uma coleção inteira', 'Pensado para funcionar com o seguro da casa e das coleções'],
        ['Saúde internacional (IPMI): tratamento onde estiver, em Espanha ou no estrangeiro', 'Planos de saúde domésticos em Espanha: brevemente', 'Planos pensados para uma vida entre Espanha e o país de origem'],
        ['Seguro de viagem por viagem ou anual', 'Compare e compre online em minutos', 'Para férias, viagens em família e de negócios'],
        ['Terapeutas e instrutores de yoga, Pilates e Tai Chi', 'Subscrito em livre prestação de serviços (LPS)', 'O mesmo interlocutor e o mesmo processo do seu programa pessoal']
      ],
      pt: [
        ['Residências permanentes, segundas habitações e casas de férias', 'Seguro pelo valor de reconstrução, não pelo valor de mercado', 'Joias, arte e objetos de valor com o seguro da casa'],
        ['Automóveis de luxo e desportivos', 'Automóveis clássicos e de coleção com valor acordado', 'RC automóvel até 50 M€, contratada a par da viatura'],
        ['Saúde internacional (IPMI): tratamento onde estiver, em Portugal ou no estrangeiro', 'Planos de saúde domésticos, incluindo opções para agregados com mais de 65 anos', 'Comparação escrita de cada opção: coberturas e gestão de sinistros'],
        ['Seguro de viagem por viagem ou anual', 'Compare e compre online em minutos', 'Para férias, viagens em família e de negócios'],
        ['Terapeutas, consultores, instrutores e profissões liberais', 'Capitais a partir de 250.000 €', 'Propostas preparadas caso a caso, após análise detalhada do risco']
      ]
    },
    beyond: {
      art: ['Arte e coleções', 'Arte, vinhos e coleções, em casa ou emprestados.'],
      jewel: ['Joias e relógios', 'Cobertura all-risks, em casa e em viagem.'],
      boat: ['Embarcações e iates', 'Casco e responsabilidade civil para embarcações em marinas ibéricas.'],
      fo: ['Family office', 'Um programa coordenado para o património e as pessoas da família.'],
      fl: ['RC familiar', 'Responsabilidade civil para todo o agregado.']
    }
  },
  de: {
    country: { es: 'Spanien', pt: 'Portugal' },
    title: 'Ein Ansprechpartner für alles, was Sie bewohnen, fahren und schätzen.',
    lead: 'Immobilien, Luxus- und Sammlerfahrzeuge, Gesundheit, Reisen und Berufshaftpflicht – bei spezialisierten Versicherern platziert, in einer Akte geführt, mit einem Erneuerungskalender. Für HNW- und UHNW-Familien, die in Spanien und Portugal leben, investieren oder zwischen beiden Ländern pendeln.',
    cta1: 'Schriftliches Angebot anfordern', cta2: (c) => `Was wir in ${c} abdecken`, cta2all: 'Die fünf Säulen',
    quote: '„Zuerst der Schutz. Die Prämie ist eine Folge, nie der Ausgangspunkt.“', by: 'Hugo Gonçalves, Gründer &amp; Geschäftsführer',
    pillarsEyebrow: 'Die fünf Säulen',
    headline: { es: 'Alles, was Sie in Spanien besitzen, als Ganzes geschützt.', pt: 'Alles, was Sie in Portugal besitzen, als Ganzes geschützt.' },
    intro: { es: 'Hochwertige Immobilien, Luxusautos und Oldtimer, Schmuck und Gesundheit in Spanien – vom selben Berater, der auch Portugal betreut.', pt: 'Spezialisierte Versicherer für hochwertige Immobilien, Sammlerfahrzeuge und internationale Krankenversicherung – mit lokalen Tarifen, wo sie besser passen.' },
    explore: (title, c) => `Mehr dazu – ${c}`,
    accentTitle: 'Aufeinander abgestimmt – nicht fünf Policen, sondern ein Programm.',
    accentBody: 'Sammlerfahrzeuge und wertvoller Schmuck werden oft zusammen mit der Hausversicherung gezeichnet. Wir gestalten das Programm als Ganzes, damit jede Deckung die nächste stärkt und nichts zwischen zwei Versicherern verloren geht.',
    accentBtn: 'Mit dem beginnen, was Sie besitzen',
    partnersTitle: 'Versicherer und Partner, mit denen wir arbeiten',
    partnersSub: 'Unabhängig: keine Exklusivvereinbarung mit einem Versicherer. Jede Option wird nach Bedingungen, Summen und Schadenservice ausgewählt.',
    insurersLabel: 'Versicherer', brokersLabel: 'Spezialmakler &amp; Co-Broking-Partner',
    beyondEyebrow: 'Über die fünf Säulen hinaus', beyondTitle: 'Für alles, was nicht in eine Standardpolice passt.', beyondSub: 'Spezialdeckungen im selben Programm.',
    guidesEyebrow: 'Ratgeber', guidesTitle: 'Lesen, bevor Sie entscheiden.', guidesMore: 'Mehr zu Private Clients weiter unten', read: 'Weiterlesen',
    countryAria: 'Land',
    status: { av: 'Verfügbar', ih: 'International + lokal', on: 'Online abschließen' },
    pillars: [
      ['Immobilien', 'Zweit- oder Hauptwohnsitz'],
      ['Luxusautos & Oldtimer', 'Oldtimer, Sammler- oder Sportwagen'],
      ['Gesundheit', 'Internationale und lokale Tarife'],
      ['Reisen', 'Urlaub und Geschäftsreisen'],
      ['Berufshaftpflicht', 'Für Selbstständige']
    ],
    points: {
      es: [
        ['Hochwertige Immobilien ab 700.000 € Wiederaufbauwert', 'Ferien- und Zweitwohnungen für nicht ansässige Eigentümer', 'Schmuck und Uhren separat von der Hausversicherung'],
        ['Luxusautos zum vereinbarten Wert, ab 200.000 €', 'Oldtimer – ein Fahrzeug oder eine ganze Sammlung', 'Abgestimmt auf Haus- und Sammlungsversicherung'],
        ['Internationale Krankenversicherung (IPMI): Behandlung, wo immer Sie sind', 'Lokale Krankenversicherung in Spanien: in Kürze', 'Für ein Leben zwischen Spanien und Ihrem Heimatland'],
        ['Einzelreise- und Jahresreiseversicherung', 'Online vergleichen und in wenigen Minuten abschließen', 'Für Urlaub, Familienreisen und Geschäftsreisen'],
        ['Therapeuten sowie Yoga-, Pilates- und Tai-Chi-Lehrer', 'Im Rahmen der EU-Dienstleistungsfreiheit gezeichnet', 'Derselbe Berater, dieselbe Akte wie Ihr privates Programm']
      ],
      pt: [
        ['Hauptwohnsitz, Zweitwohnsitz und Ferienhaus', 'Versichert zum Wiederaufbauwert, nicht zum Marktwert', 'Schmuck, Kunst und Wertsachen zusammen mit der Hausversicherung'],
        ['Luxus- und Sportwagen', 'Oldtimer und Sammlerfahrzeuge zum vereinbarten Wert', 'Kfz-Haftpflicht bis 50 Mio. €, parallel zur Fahrzeugdeckung'],
        ['Internationale Krankenversicherung (IPMI): Behandlung, wo immer Sie sind', 'Lokale Krankenversicherung, auch für Haushalte über 65', 'Schriftlicher Vergleich jeder Option nach Leistung und Schadenservice'],
        ['Einzelreise- und Jahresreiseversicherung', 'Online vergleichen und in wenigen Minuten abschließen', 'Für Urlaub, Familienreisen und Geschäftsreisen'],
        ['Therapeuten, Berater, Trainer und freie Berufe', 'Deckungssummen ab 250.000 €', 'Angebote individuell, nach eingehender Risikoprüfung']
      ]
    },
    beyond: {
      art: ['Kunst & Sammlungen', 'Kunst, Wein und Sammlungen, zu Hause oder als Leihgabe.'],
      jewel: ['Schmuck & Uhren', 'Allgefahrendeckung, zu Hause und auf Reisen.'],
      boat: ['Yachten & Boote', 'Kasko und Haftpflicht für Boote in iberischen Marinas.'],
      fo: ['Family Office', 'Ein abgestimmtes Programm für Vermögen und Personen der Familie.'],
      fl: ['Privathaftpflicht', 'Haftpflicht für den ganzen Haushalt.'],
      kr: ['Entführung, Lösegeld & Erpressung', 'Diskrete Deckung und Krisenberatung für Familien und Führungskräfte.']
    }
  }
};

// --------------------------------------------------------------- links ----
// pillars: [home, car, health, travel, liability]; beyond: [key, href]; guides: [tag, title, href]
const L = {
  en: {
    hub: { es: '/en/private-clients-spain/', pt: '/en/private-clients/' },
    pillars: {
      es: ['/en/home-insurance-spain/', '/en/luxury-car-insurance-spain/', '/en/health-insurance-portugal-spain/', '/en/travel-insurance/', '/en/therapists-yoga-pilates-liability-insurance/'],
      pt: ['/en/blog/luxury-home-insurance-portugal/', '/en/blog/luxury-car-insurance-portugal/', '/en/international-health-insurance-portugal/', '/en/travel-insurance/', '/en/professional-liability-insurance-portugal/']
    },
    beyond: {
      es: [['art', '/en/art-jewellery-watches-insurance/'], ['jewel', '/en/jewellery-watch-insurance-spain/'], ['boat', '/en/blog/marinas-yachts-portugal-spain/'], ['fo', '/en/family-office-insurance/'], ['fl', '/en/family-liability-insurance-spain/'], ['kr', '/en/kidnap-ransom-extortion-insurance/']],
      pt: [['art', '/en/art-jewellery-watches-insurance/'], ['jewel', '/en/art-jewellery-watches-insurance/'], ['boat', '/en/blog/marinas-yachts-portugal-spain/'], ['fo', '/en/family-office-insurance/'], ['fl', '/en/blog/family-liability-cover-portugal/'], ['kr', '/en/kidnap-ransom-extortion-insurance/']]
    },
    guides: {
      es: [['Home', 'Second home insurance in Spain: what to check first', '/en/blog/second-home-insurance-spain/'], ['Cars', 'Classic and high-value car insurance in Spain', '/en/blog/classic-high-value-car-insurance-spain/'], ['Health', 'Allianz Care vs Cigna Global in Portugal & Spain', '/en/blog/allianz-care-vs-cigna-global-portugal-spain/']],
      pt: [['Health', 'Allianz Care vs Cigna Global in Portugal & Spain', '/en/blog/allianz-care-vs-cigna-global-portugal-spain/'], ['Home', 'Rebuild value: how much to insure your home for', '/en/rebuild-value-home-insurance-portugal/'], ['Cars', 'Classic car insurance in Portugal: registration and agreed value', '/en/blog/classic-collector-cars-portugal-matriculation-agreed-value/']]
    }
  },
  pt: {
    pillars: {
      es: ['/seguros/habitacao-espanha/', '/seguros/carros-luxo-espanha/', '/seguros/saude-portugal-espanha/', '/seguros/seguro-viagem/', '/seguros/rc-yoga-pilates-bem-estar/'],
      pt: ['/seguros/habitacao/', '/private-clients/automoveis-classicos/', '/seguros/saude-internacional/', '/seguros/seguro-viagem/', '/seguros/responsabilidade-civil-profissional/']
    },
    beyond: {
      es: [['art', '/private-clients/arte-joias-relogios/'], ['jewel', '/seguros/joias-relogios-espanha/'], ['boat', '/blog/marinas-iates-portugal-espanha/'], ['fo', '/private-clients/family-offices/'], ['fl', '/seguros/responsabilidade-civil-familiar/']],
      pt: [['art', '/private-clients/arte-joias-relogios/'], ['jewel', '/private-clients/arte-joias-relogios/'], ['boat', '/blog/marinas-iates-portugal-espanha/'], ['fo', '/private-clients/family-offices/'], ['fl', '/seguros/responsabilidade-civil-familiar/']]
    },
    guides: {
      es: [['Casa', 'Casas de férias em Espanha', '/seguros/casa-ferias-espanha/'], ['Automóveis', 'Automóveis clássicos em Espanha', '/seguros/carros-classicos-espanha/'], ['Saúde', 'Seguro de saúde em Portugal e Espanha', '/seguros/saude-portugal-espanha/']],
      pt: [['Casa', 'Casas de férias em Portugal', '/seguros/casa-ferias-portugal/'], ['Casa', 'Casa desocupada: o que muda no seguro', '/seguros/casa-desocupada/'], ['Saúde', 'Seguro de saúde internacional', '/seguros/saude-internacional/']]
    }
  },
  de: {
    hub: { es: '/de/private-clients-spanien/', pt: '/de/private-clients-portugal/' },
    pillars: {
      es: ['/de/hausversicherung-spanien/', '/de/luxusauto-versicherung-spanien/', '/de/krankenversicherung-portugal-spanien/', '/de/reiseversicherung/', '/de/berufshaftpflicht-therapeuten-wellness-portugal/'],
      pt: ['/de/hausversicherung-portugal/', '/de/blog/oldtimer-luxusauto-versicherung-portugal-spanien/', '/de/internationale-krankenversicherung/', '/de/reiseversicherung/', '/de/berufshaftpflicht-freiberufler-portugal/']
    },
    beyond: {
      es: [['art', '/de/blog/kunstversicherung-portugal-spanien/'], ['jewel', '/de/schmuck-uhren-versicherung-portugal-spanien/'], ['boat', '/de/blog/marinas-yachten-portugal-spanien/'], ['fo', '/de/family-office-versicherung/'], ['fl', '/de/privathaftpflicht-spanien/'], ['kr', '/de/entfuehrung-loesegeld-versicherung/']],
      pt: [['art', '/de/blog/kunstversicherung-portugal-spanien/'], ['jewel', '/de/schmuck-uhren-versicherung-portugal-spanien/'], ['boat', '/de/blog/marinas-yachten-portugal-spanien/'], ['fo', '/de/family-office-versicherung/'], ['kr', '/de/entfuehrung-loesegeld-versicherung/']]
    },
    guides: {
      es: [['Immobilien', 'Ferienhausversicherung in Spanien', '/de/ferienhausversicherung-spanien/'], ['Fahrzeuge', 'Oldtimerversicherung in Spanien', '/de/oldtimerversicherung-spanien/'], ['Gesundheit', 'Krankenversicherung in Portugal & Spanien', '/de/krankenversicherung-portugal-spanien/']],
      pt: [['Immobilien', 'Ferienhausversicherung in Portugal', '/de/ferienhausversicherung-portugal/'], ['Immobilien', 'Wiederaufbauwert in der Hausversicherung', '/de/wiederaufbauwert-hausversicherung-portugal/'], ['Gesundheit', 'Internationale Krankenversicherung', '/de/internationale-krankenversicherung/']]
    }
  }
};

// --------------------------------------------------------------- pages ----
// Homepages: the block is the first thing under the menu, both countries in
// the HTML (Spain first), CSS-only switch. Links for most languages are read
// from that homepage's own mega-menu, so they always point at live pages.
const HOMES = ['en', 'de', 'es', 'nl', 'fr', 'it', 'pl', 'se', 'dk', 'zh', 'il'];
const PAGES = [
  { file: 'index.html', lang: 'pt', mode: 'toggle', anchor: '#contacto' },
  ...HOMES.map((lang) => ({ file: `${lang}/index.html`, lang, mode: 'toggle', anchor: '#contact', fromNav: !L[lang] }))
];
// Earlier placement on the Private Client hubs: removed again (homepage only).
const REMOVE = ['en/private-clients-spain/index.html', 'en/private-clients/index.html', 'de/private-clients-spanien/index.html', 'de/private-clients-portugal/index.html', 'de/private-clients/index.html', 'private-clients/index.html'];

for (const [k, t] of Object.entries(T2)) {
  T[k] = { ...t, explore: (title, c) => `${t.more} — ${c}`, cta2: () => t.cta2all };
}

function navLinks(html) {
  const i = html.indexOf('<nav class="site-nav"');
  const nav = html.slice(i, html.indexOf('</nav>', i));
  const panel = (id) => {
    const s = nav.indexOf(`id="navPanel${id}"`);
    const e = nav.indexOf('id="navPanel', s + 10);
    const chunk = nav.slice(s, e < 0 ? undefined : e);
    return chunk.split('nav-panel-col-title').slice(1).map((c) => [...c.matchAll(/href="([^"]+)" role="menuitem">([^<]*)</g)].map((m) => [m[1], m[2]]));
  };
  return { PT: panel('PT'), ES: panel('ES'), PC: panel('PC') };
}

function deriveLinks(html, t) {
  const n = navLinks(html);
  const hp = n.PT[2], art = n.PT[1][0][0];
  const label = (x, c) => [x[1].replace(/&amp;/g, '&'), x[0], c];
  return {
    pillars: {
      es: [n.ES[0][0][0], n.ES[1][2][0], hp[2][0], hp[1][0], hp[5][0]],
      pt: [n.PT[0][0][0], n.PT[1][1][0], hp[0][0], hp[1][0], hp[4][0]]
    },
    beyond: {
      es: [['art', art], ['jewel', n.ES[1][0][0]], ['boat', n.ES[1][3][0]], ['fo', n.PC[1][0][0]], ['fl', hp[3][0]]],
      pt: [['art', art], ['jewel', art], ['boat', n.PT[1][2][0]], ['fo', n.PC[1][0][0]], ['fl', hp[3][0]]]
    },
    guides: {
      es: [[t.pillars[0][0], `${n.ES[0][1][1].replace(/&amp;/g, '&')} — ${t.country.es}`, n.ES[0][1][0]], [t.pillars[1][0], `${n.ES[1][1][1].replace(/&amp;/g, '&')} — ${t.country.es}`, n.ES[1][1][0]], [t.pillars[2][0], hp[2][1].replace(/&amp;/g, '&'), hp[2][0]]],
      pt: [[t.pillars[0][0], `${n.PT[0][1][1].replace(/&amp;/g, '&')} — ${t.country.pt}`, n.PT[0][1][0]], [t.pillars[1][0], `${n.PT[1][1][1].replace(/&amp;/g, '&')} — ${t.country.pt}`, n.PT[1][1][0]], [t.pillars[2][0], hp[0][1].replace(/&amp;/g, '&'), hp[0][0]]]
    }
  };
}
const STATUS = ['av', 'av', 'ih', 'on', 'av'];

function pane(t, l, c, anchor) {
  const cards = t.pillars.map(([title, kicker], i) => `
      <article class="ar-oss-card">
        <div class="ar-oss-card-top"><span>0${i + 1} — ${esc(kicker)}</span><span class="ar-oss-badge">${t.status[STATUS[i]]}</span></div>
        <h3>${esc(title)}</h3>
        <ul>${t.points[c][i].map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
        <a class="ar-oss-btn ar-oss-btn-line" href="${l.pillars[c][i]}">${esc(t.explore(title, t.country[c]))}</a>
      </article>`).join('');
  return { cards: `${cards}
      <article class="ar-oss-card ar-oss-card-accent">
        <h3>${esc(t.accentTitle)}</h3>
        <p>${esc(t.accentBody)}</p>
        <a class="ar-oss-btn" href="${anchor}">${esc(t.accentBtn)}</a>
      </article>`,
    beyond: l.beyond[c].filter(([k]) => t.beyond[k]).map(([k, h]) => `<a class="ar-oss-tile" href="${h}"><strong>${esc(t.beyond[k][0])}</strong><span>${esc(t.beyond[k][1])}</span></a>`).join(''),
    guides: l.guides[c].map(([tag, title, h]) => `<a class="ar-oss-guide" href="${h}"><em>${esc(tag)}</em><strong>${esc(title)}</strong><span>${t.read}</span></a>`).join('') };
}

function block(p) {
  const t = T[p.lang], l = p.links || L[p.lang];
  const order = ['es', 'pt'];
  const toggle = p.mode === 'toggle';
  const sw = toggle
    ? `<div class="ar-oss-switch" role="group" aria-label="${t.countryAria}"><label for="ar-oss-r-es" class="ar-oss-l-es">España</label><label for="ar-oss-r-pt" class="ar-oss-l-pt">Portugal</label></div>`
    : `<nav class="ar-oss-switch" aria-label="${t.countryAria}">${order.map((c) => `<a href="${l.hub[c]}"${p.c === c ? ' aria-current="page"' : ''}>${c === 'es' ? 'España' : 'Portugal'}</a>`).join('')}</nav>`;
  const cs = toggle ? order : [p.c];
  const wrap = (c, html) => (toggle ? `<div class="ar-oss-pane ar-oss-pane-${c}">${html}</div>` : html);
  const panes = Object.fromEntries(cs.map((c) => [c, pane(t, l, c, p.anchor)]));
  const pillarsSec = cs.map((c) => wrap(c, `
    <div class="ar-oss-head"><div><span class="ar-oss-eyebrow">${t.pillarsEyebrow} · ${t.country[c]}</span><h2${c === cs[0] ? ' id="ar-oss-pillars-h"' : ''}>${esc(t.headline[c])}</h2><p>${esc(t.intro[c])}</p></div></div>
    <div class="ar-oss-grid">${panes[c].cards}
    </div>`)).join('');
  const beyondSec = cs.map((c) => wrap(c, `<div class="ar-oss-grid">${panes[c].beyond}</div>`)).join('');
  const guidesSec = cs.map((c) => wrap(c, `<div class="ar-oss-grid">${panes[c].guides}</div>`)).join('');
  const radios = toggle ? `<input type="radio" name="ar-oss-country" id="ar-oss-r-es" class="ar-oss-r ar-oss-r-es" checked><input type="radio" name="ar-oss-country" id="ar-oss-r-pt" class="ar-oss-r ar-oss-r-pt">` : '';
  return `${START}
<div class="ar-oss${toggle ? ' ar-oss-toggle' : ''}" id="one-stop-shop">${radios}
  <section class="ar-oss-block ar-oss-dark ar-oss-hero" aria-labelledby="ar-oss-title">
    <div class="ar-oss-hero-main">
      <div>${sw}</div>
      <h2 id="ar-oss-title">${esc(t.title)}</h2>
      <p class="ar-oss-lead">${esc(t.lead)}</p>
      <div class="ar-oss-actions">
        <a class="ar-oss-btn ar-oss-btn-primary" href="${p.anchor}">${esc(t.cta1)}</a>
        <a class="ar-oss-btn ar-oss-btn-ghost" href="#ar-oss-pillars">${esc(toggle ? t.cta2all : t.cta2(t.country[p.c]))}</a>
      </div>
    </div>
    <div class="ar-oss-hero-side">
      <blockquote class="ar-oss-quote">${t.quote}</blockquote>
      <p class="ar-oss-quote-by">${t.by}</p>
    </div>
  </section>

  <section class="ar-oss-block" id="ar-oss-pillars" aria-labelledby="ar-oss-pillars-h">${pillarsSec}
  </section>

  <section class="ar-oss-block partners-section" aria-labelledby="ar-oss-partners-h">
    <div class="ar-oss-head"><div><h2 id="ar-oss-partners-h" style="font-size:clamp(28px,3vw,38px)">${esc(t.partnersTitle)}</h2></div><p>${esc(t.partnersSub)}</p></div>
    <span class="ar-oss-label">${t.insurersLabel}</span>
    <ul class="ar-oss-chips">${INSURERS.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
    <span class="ar-oss-label">${t.brokersLabel}</span>
    <ul class="ar-oss-chips ar-oss-chips-dark" style="margin-bottom:0">${PARTNERS.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
  </section>

  <section class="ar-oss-block ar-oss-dark" aria-labelledby="ar-oss-beyond-h">
    <div class="ar-oss-head"><div><span class="ar-oss-eyebrow">${esc(t.beyondEyebrow)}</span><h2 id="ar-oss-beyond-h">${esc(t.beyondTitle)}</h2></div><p>${esc(t.beyondSub)}</p></div>
    ${beyondSec}
  </section>

  <section class="ar-oss-block" aria-labelledby="ar-oss-guides-h">
    <div class="ar-oss-head"><div><span class="ar-oss-eyebrow">${t.guidesEyebrow}${toggle ? '' : ' · ' + t.country[p.c]}</span><h2 id="ar-oss-guides-h">${esc(t.guidesTitle)}</h2></div><a class="ar-oss-more" href="#ar-oss-more">${esc(t.guidesMore)}</a></div>
    ${guidesSec}
  </section>
</div>
<div id="ar-oss-more"></div>
${END}
`;
}

function insertPoint(html, file) {
  const marker = '<!-- HERO -->';
  if (html.split(marker).length === 2) return html.indexOf(marker);
  const h1 = html.indexOf('<h1');
  if (h1 < 0) throw new Error(`no <h1> in ${file}`);
  const at = html.slice(0, h1).lastIndexOf('<section');
  if (at < 0) throw new Error(`no hero section in ${file}`);
  return at;
}

for (const f of REMOVE) {
  const path = join(ROOT, f);
  let html = readFileSync(path, 'utf8');
  if (!html.includes(START)) continue;
  html = html.slice(0, html.indexOf(START)) + html.slice(html.indexOf(END) + END.length + 1);
  html = html.replace(`${CSS}\n`, '');
  writeFileSync(path, html);
  console.log(`${f}: block removed`);
}

for (const p of PAGES) {
  const path = join(ROOT, p.file);
  let html = readFileSync(path, 'utf8');
  const before = html.length;
  if (p.fromNav) p.links = deriveLinks(html, T[p.lang]);
  if (!html.includes(CSS)) html = html.replace('</head>', `${CSS}\n</head>`);
  const b = block(p);
  if (html.includes(START)) {
    const s = html.indexOf(START), e = html.indexOf(END) + END.length + 1;
    html = html.slice(0, s) + b + html.slice(e);
  } else {
    const at = insertPoint(html, p.file);
    html = html.slice(0, at) + b + '\n' + html.slice(at);
  }
  writeFileSync(path, html);
  console.log(`${p.file}: ${before} -> ${html.length} bytes`);
}
