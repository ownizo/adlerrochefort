/**
 * Interface copy for the Danish cluster: chrome, footer, form labels,
 * validation messages, cookie banner.
 *
 * Shapes are dictated by scripts/lib/market-cluster.mjs and shared with Poland
 * and Sweden; the words are Danish and written for a Danish reader.
 *
 * The insurance_type values stay English and market-tagged ("DK · Bolig")
 * because netlify/functions/submission-created.mjs builds the notification
 * subject from this field — the label is for Copenhagen, the value is for the
 * inbox in Lagos. Field ids are identical across all three markets so that
 * scripts/form-payload-test.mjs and the email labels stay consistent.
 */

export const DK_BRANCHES = [
  {
    value: 'DK · Bolig',
    label: 'Hus- eller indboforsikring',
    legend: 'Lidt om boligen',
    fields: [
      { id: 'home_property_type', label: 'Boligtype', placeholder: 'f.eks. lejlighed i condomínio, villa, sommerhus' },
      { id: 'home_rebuild_value', label: 'Anslået genopførelsespris (hvis du ved det)', placeholder: 'f.eks. 180.000 EUR — ved du det ikke, regner vi det ud sammen' },
      { id: 'home_contents_value', label: 'Omtrentlig værdi af indboet', placeholder: 'f.eks. 30.000 EUR inkl. møbler og elektronik' },
    ],
  },
  {
    value: 'DK · Sundhed',
    label: 'Sundhedsforsikring',
    legend: 'Hvem skal være dækket',
    fields: [
      { id: 'health_household', label: 'Antal personer og aldre', placeholder: 'f.eks. to voksne (43 og 41) og et barn (6)' },
      // 'health_history' removed (Especificação v2, A1) — a clinical
      // question ("chronic conditions or ongoing treatment") has no place
      // in a public lead form; see the matching removal in
      // scripts/upgrade-forms.mjs for the full reasoning. Same 40-page
      // one-off removal already applied to the generated HTML across all
      // five market clusters (pl/se/dk/zh/il).
    ],
  },
  {
    value: 'DK · Bil',
    label: 'Bilforsikring',
    legend: 'Lidt om bilen',
    fields: [
      { id: 'motor_vehicle', label: 'Mærke, model og årgang', placeholder: 'f.eks. Skoda Octavia 2018, diesel' },
      { id: 'motor_plate', label: 'Nuværende indregistrering', placeholder: 'f.eks. danske nummerplader, skal importeres / allerede portugisiske' },
      { id: 'motor_claims_history', label: 'Skadefri periode', placeholder: 'f.eks. 12 år uden skader, skadesattest fra dansk selskab' },
    ],
  },
  {
    value: 'DK · Ansvar',
    label: 'Ansvarsforsikring (privat eller erhverv)',
    legend: 'Hvad dækningen skal omfatte',
    fields: [
      { id: 'liability_activity', label: 'Hvilken aktivitet eller situation', placeholder: 'f.eks. it-konsulent, fysioterapeut, udlejning af bolig, privatliv' },
      { id: 'liability_clients', label: 'Hvor er kunderne eller tredjemand', placeholder: 'f.eks. kunder i Danmark og Portugal, klienter modtages i Lissabon' },
    ],
  },
];

export const DK_UI = {
  skipLink: 'Gå til indholdet',
  asfBar: 'Registreret forsikringsformidler — ASF nr. 425591790/3 · Lagos, Algarve, Portugal',
  navAria: 'Hovednavigation',
  navCta: 'Få et tilbud',
  mobileCta: 'Få et tilbud',
  breadcrumbAria: 'Brødkrummer',
  heroMeta: 'Registreret forsikringsformidler · ASF nr. 425591790/3 · Lagos, Algarve',
  heroCta: 'Få et tilbud',
  relatedTitle: 'Relaterede sider',
  pullquoteAria: 'Citat',
  langPolicyId: 'arbejdssprog',

  faqId: 'spoergsmaal',
  faqEyebrow: 'Ofte stillede spørgsmål',
  faqTitle: 'Ofte stillede spørgsmål',

  formId: 'tilbud',
  formTitle: 'Få et tilbud',
  formLangNote: 'Formularen er på dansk. Vi svarer og behandler sagen på engelsk, skriftligt.',
  formSubmit: 'Send forespørgsel',
  formSending: 'Sender…',
  formFootnote: 'Vi svarer inden for én arbejdsdag. En forespørgsel forpligter ikke til noget.',
  honeypot: 'Udfyld ikke dette felt',
  successHeading: 'Tak — din forespørgsel er modtaget.',
  successBody: 'Vi svarer inden for én arbejdsdag, skriftligt og på engelsk. Er det presserende, så ring på +351 928 226 570.',
  submitError: 'Formularen kunne ikke sendes. Prøv igen, eller skriv til insurance@adlerrochefort.com.',

  f: {
    name: 'Navn',
    email: 'E-mailadresse',
    phone: 'Telefon',
    phoneHelp: 'Angiv nummeret med landekode, f.eks. +45 20 12 34 56.',
    localidade: 'By i Portugal',
    localidadePh: 'f.eks. Lissabon, Cascais, Lagos, Albufeira',
    country: 'Land du bor i nu',
    countryPh: 'f.eks. Danmark',
    residence: 'Din status i Portugal',
    residenceOptions: [
      { v: 'Planning move', l: 'Planlægger at flytte' },
      { v: 'Recently arrived', l: 'Netop flyttet hertil' },
      { v: 'Resident', l: 'Bosat i Portugal' },
      { v: 'Non-resident owner', l: 'Ejer bolig, men bor her ikke fast' },
    ],
    selectPlaceholder: 'Vælg',
    type: 'Hvad handler forespørgslen om?',
    typeOther: 'Andet eller ved ikke endnu',
    startDate: 'Hvornår skal dækningen begynde?',
    startDatePh: 'f.eks. 1. marts, på dagen for escritura, hurtigst muligt',
    prefLang: 'Sprog for korrespondancen',
    prefLangOptions: [
      { v: 'English', l: 'Engelsk — vores arbejdssprog' },
      { v: 'Portuguese', l: 'Portugisisk' },
    ],
    message: 'Hvad bør vi vide?',
    messagePh: 'Beskriv situationen med dine egne ord — jo mere konkret, jo bedre bliver svaret.',
    consent: 'Jeg giver samtykke til, at Adler &amp; Rochefort kontakter mig om denne forespørgsel og behandler mine oplysninger til det formål.',
  },

  v: {
    name: 'Angiv dit navn.',
    nameShort: 'Angiv både fornavn og efternavn.',
    email: 'Angiv din e-mailadresse.',
    emailBad: 'E-mailadressen ser ufuldstændig ud.',
    phone: 'Angiv dit telefonnummer.',
    phoneBad: 'Angiv nummeret med landekode, f.eks. +45 20 12 34 56.',
    type: 'Vælg, hvad forespørgslen handler om.',
    consent: 'Uden samtykke kan vi ikke besvare forespørgslen.',
  },

  cookie: {
    title: 'Cookies',
    body: 'Vi bruger udelukkende cookies til at måle annonceresultater og trafik. Uden samtykke sættes der ingen analysecookies.',
    reject: 'Afvis',
    accept: 'Acceptér',
  },

  footer: {
    desc: 'Forsikringsformidler for udlandsdanskere, andre udlandsboende og virksomheder i Algarve, Portugal. Klar rådgivning inden for vores portefølje af forsikringsselskaber.',
    badge: 'Registreret forsikringsformidler — ASF nr. 425591790/3',
    coverTitle: 'Forsikringer',
    coverLinks: [
      { url: '/dk/husforsikring-portugal/', label: 'Husforsikring' },
      { url: '/dk/sundhedsforsikring-portugal/', label: 'Sundhedsforsikring' },
      { url: '/dk/bilforsikring-portugal/', label: 'Bilforsikring' },
      { url: '/dk/ansvarsforsikring-portugal/', label: 'Ansvarsforsikring' },
      { url: '/dk/forsikringsguide-portugal/', label: 'Forsikringsguide' },
    ],
    langsTitle: 'Sprog',
    contactTitle: 'Kontakt',
    contactCta: 'Få et tilbud',
    copy: 'Alle rettigheder forbeholdes',
    vault: 'Til MyCoverVault',
    privacy: 'Privatlivspolitik',
    terms: 'Betingelser',
    complaints: 'Klagebog',
    asfChannel: 'ASF’s whistleblowerkanal',
    regulatory: [
      'Adler &amp; Rochefort er et varemærke tilhørende Ownizo, Unipessoal Lda.',
      'Ownizo, Unipessoal Lda. er registreret hos den portugisiske tilsynsmyndighed for forsikring og pensionsfonde (ASF) som forsikringsagent med nummer 425591790/3. Vi rådgiver inden for vores portefølje af forsikringsselskaber.',
      'Denne side indeholder generel information og udgør ikke individuel forsikringsrådgivning eller juridisk rådgivning. Hvilken dækning der passer, afhænger af din situation og af betingelserne i den valgte police.',
    ],
  },
};
