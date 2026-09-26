/**
 * Interface copy for the Swedish cluster: chrome, footer, form labels,
 * validation messages, cookie banner.
 *
 * Shapes are dictated by scripts/lib/market-cluster.mjs and shared with Poland
 * and Denmark; the words are Swedish and written for a Swedish reader, not
 * translated from the Polish file.
 *
 * The insurance_type values stay English and market-tagged ("SE · Hem")
 * because netlify/functions/submission-created.mjs builds the notification
 * subject from this field — the label is for Stockholm, the value is for the
 * firm's inbox.
 */

export const SE_BRANCHES = [
  {
    value: 'SE · Hem',
    label: 'Hem- eller villaförsäkring',
    legend: 'Några uppgifter om bostaden',
    fields: [
      { id: 'home_property_type', label: 'Typ av bostad', placeholder: 't.ex. villa, quinta, stadsvåning i condomínio, fritidshus' },
      { id: 'home_rebuild_value', label: 'Uppskattad återuppbyggnadskostnad (om du vet)', placeholder: 't.ex. 1 500 000 EUR — vet du inte, fastställs den vid besiktning' },
      { id: 'home_contents_value', label: 'Ungefärligt värde på lösöret', placeholder: 't.ex. 250 000 EUR; konst, smycken och samlingar gärna separat' },
    ],
  },
  {
    value: 'SE · Sjukvård',
    label: 'Sjukvårdsförsäkring',
    legend: 'Vilka som ska omfattas',
    fields: [
      { id: 'health_household', label: 'Antal personer och åldrar', placeholder: 't.ex. två vuxna (43 och 41) samt ett barn (6)' },
      // 'health_history' removed (Especificação v2, A1) — a clinical
      // question ("chronic conditions or ongoing treatment") has no place
      // in a public lead form; see the matching removal in
      // scripts/upgrade-forms.mjs for the full reasoning. Same 40-page
      // one-off removal already applied to the generated HTML across all
      // five market clusters (pl/se/dk/zh/il).
    ],
  },
  {
    value: 'SE · Bil',
    label: 'Bilförsäkring',
    legend: 'Några uppgifter om bilen',
    fields: [
      { id: 'motor_vehicle', label: 'Märke, modell och årsmodell', placeholder: 't.ex. Volvo V60 2018, diesel' },
      { id: 'motor_plate', label: 'Nuvarande registrering', placeholder: 't.ex. svenska skyltar, ska importeras / redan portugisiska' },
      { id: 'motor_claims_history', label: 'Skadefri tid', placeholder: 't.ex. 12 år skadefritt, intyg från svenskt bolag' },
    ],
  },
  {
    value: 'SE · Ansvar',
    label: 'Ansvarsförsäkring (privat eller yrkesmässig)',
    legend: 'Vad skyddet ska gälla',
    fields: [
      { id: 'liability_activity', label: 'Vilken verksamhet eller situation', placeholder: 't.ex. IT-konsult, fysioterapeut, uthyrning av bostad, privatliv' },
      { id: 'liability_clients', label: 'Var finns kunderna eller tredje man', placeholder: 't.ex. kunder i Sverige och Portugal, patienter tas emot i Lissabon' },
    ],
  },
];

export const SE_UI = {
  skipLink: 'Gå till innehållet',
  asfBar: 'Registrerad försäkringsförmedlare — ASF nr 425591790/3 · Lissabon och Lagos · Portugal och Spanien',
  navAria: 'Huvudnavigering',
  navCta: 'Begär genomgång',

  mega: {
    portugal: 'Försäkring i Portugal',
    portugalMenu: 'Meny Portugal',
    spain: 'Försäkring i Spanien',
    spainMenu: 'Meny Spanien',
    privateClients: 'Private Clients',
    privateClientsMenu: 'Meny Private Clients',
    whyUs: 'Varför vi',
    whyUsMenu: 'Meny Varför vi',
    overview: 'Översikt',
    personal: 'Personförsäkring',
    personalShort: 'Privat',
    moving: 'Flytt & bostad',
    property: 'Fastighet',
    hubItem: 'Försäkring i Portugal',
    spainHub: 'Försäkring för expats i Spanien',
    spainHealth: 'Sjukvårdsförsäkring',
    spainHome: 'Hemförsäkring',
    spainCar: 'Bilförsäkring',
    spainLife: 'Livförsäkring',
    spainLandlord: 'Hyresvärdsförsäkring',
    spainMortgage: 'Bolånskydd',
    spainPC: 'Private Client-försäkring',
    pcPortugal: 'Private Clients — Portugal',
    pcSpain: 'Private Clients — Spanien',
    whyAbout: 'Om oss',
    whyHow: 'Så arbetar vi',
    whyBroker: 'Varför en mäklare',
    whyClaims: 'Skadehjälp',
    burger: 'Meny',
  },
  mobileCta: 'Begär genomgång',
  breadcrumbAria: 'Brödsmulor',
  heroMeta: 'Registrerad försäkringsförmedlare · ASF nr 425591790/3 · Portugal och Spanien',
  heroCta: 'Begär en skriftlig genomgång',
  relatedTitle: 'Relaterade sidor',
  pullquoteAria: 'Citat',
  langPolicyId: 'arbetssprak',

  faqId: 'fragor',
  faqEyebrow: 'Vanliga frågor',
  faqTitle: 'Vanliga frågor',

  formId: 'offert',
  formTitle: 'Begär en skriftlig genomgång',
  formLangNote: 'Formuläret är på svenska. Vi svarar och sköter ärendet på engelska, skriftligt.',
  formSubmit: 'Skicka förfrågan',
  formSending: 'Skickar…',
  formFootnote: 'Vi svarar inom en arbetsdag. En förfrågan innebär ingen bindning.',
  honeypot: 'Fyll inte i detta fält',
  successHeading: 'Tack — din förfrågan har kommit fram.',
  successBody: 'Vi svarar inom en arbetsdag, skriftligt och på engelska. Är det brådskande, ring +351 928 226 570.',
  submitError: 'Formuläret kunde inte skickas. Försök igen eller mejla insurance@adlerrochefort.com.',

  f: {
    name: 'Namn',
    email: 'E-postadress',
    phone: 'Telefon',
    phoneHelp: 'Ange numret med landsnummer, t.ex. +46 70 123 45 67.',
    company: 'Företag (frivilligt)',
    companyPh: 't.ex. företagets namn, om förfrågan gäller verksamheten',
    localidade: 'Ort i Portugal',
    localidadePh: 't.ex. Lissabon, Cascais, Lagos, Albufeira',
    country: 'Land du bor i nu',
    countryPh: 't.ex. Sverige',
    residence: 'Din status i Portugal',
    residenceOptions: [
      { v: 'Planning move', l: 'Planerar att flytta' },
      { v: 'Recently arrived', l: 'Nyligen flyttat hit' },
      { v: 'Resident', l: 'Bosatt i Portugal' },
      { v: 'Non-resident owner', l: 'Äger bostad men bor inte här permanent' },
    ],
    selectPlaceholder: 'Välj',
    type: 'Vad gäller förfrågan?',
    typeOther: 'Annat eller vet inte än',
    startDate: 'När ska skyddet börja gälla?',
    startDatePh: 't.ex. 1 mars, på dagen för escritura, så snart som möjligt',
    prefLang: 'Språk för korrespondensen',
    prefLangOptions: [
      { v: 'English', l: 'Engelska — vårt arbetsspråk' },
      { v: 'Portuguese', l: 'Portugisiska' },
    ],
    message: 'Vad bör vi känna till?',
    messagePh: 'Beskriv situationen med egna ord — desto konkretare, desto bättre blir svaret.',
    consent: 'Jag samtycker till att Adler &amp; Rochefort kontaktar mig om denna förfrågan och behandlar mina uppgifter för det syftet.',
  },

  v: {
    name: 'Ange ditt namn.',
    nameShort: 'Ange för- och efternamn.',
    email: 'Ange din e-postadress.',
    emailBad: 'E-postadressen ser ofullständig ut.',
    phone: 'Ange ditt telefonnummer.',
    phoneBad: 'Ange numret med landsnummer, t.ex. +46 70 123 45 67.',
    type: 'Välj vad förfrågan gäller.',
    consent: 'Utan samtycke kan vi inte besvara förfrågan.',
  },

  cookie: {
    title: 'Cookies',
    body: 'Vi använder cookies enbart för att mäta annonsresultat och trafik. Utan samtycke sätts inga analyscookies.',
    reject: 'Neka',
    accept: 'Godkänn',
  },

  footer: {
    desc: 'Försäkringsförmedlare för privatpersoner och familjer med betydande tillgångar i Portugal och Spanien. Kontor i Lissabon och Lagos. Individuell riskbedömning och skriftlig rådgivning.',
    badge: 'Registrerad försäkringsförmedlare — ASF nr 425591790/3',
    coverTitle: 'Försäkringar',
    coverLinks: [
      { url: '/se/hemforsakring-portugal/', label: 'Hemförsäkring' },
      { url: '/se/sjukvardsforsakring-portugal/', label: 'Sjukvårdsförsäkring' },
      { url: '/se/bilforsakring-portugal/', label: 'Bilförsäkring' },
      { url: '/se/ansvarsforsakring-portugal/', label: 'Ansvarsförsäkring' },
      { url: '/se/forsakringsguide-portugal/', label: 'Försäkringsguide' },
    ],
    langsTitle: 'Språk',
    contactTitle: 'Kontakt',
    contactCta: 'Begär genomgång',
    copy: 'Alla rättigheter förbehållna',
    vault: 'Till MyCoverVault',
    privacy: 'Integritetspolicy',
    terms: 'Villkor',
    complaints: 'Klagomålsbok',
    asfChannel: 'ASF:s visselblåsarkanal',
    regulatory: [
      'Adler &amp; Rochefort är ett varumärke som tillhör Ownizo, Unipessoal Lda.',
      'Ownizo, Unipessoal Lda. är registrerat hos den portugisiska tillsynsmyndigheten för försäkring och pensionsfonder (ASF) som försäkringsagent med nummer 425591790/3. Vi ger rådgivning inom vår portfölj av försäkringsbolag.',
      'Denna sida innehåller allmän information och utgör inte individuell försäkringsrådgivning eller juridisk rådgivning. Vilket skydd som passar beror på din situation och på villkoren i den valda försäkringen.',
    ],
  },
};
