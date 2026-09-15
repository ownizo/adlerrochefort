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
 * inbox in Lagos.
 */

export const SE_BRANCHES = [
  {
    value: 'SE · Hem',
    label: 'Hem- eller villaförsäkring',
    legend: 'Några uppgifter om bostaden',
    fields: [
      { id: 'home_property_type', label: 'Typ av bostad', placeholder: 't.ex. lägenhet i condomínio, villa, fritidshus' },
      { id: 'home_rebuild_value', label: 'Uppskattad återuppbyggnadskostnad (om du vet)', placeholder: 't.ex. 180 000 EUR — vet du inte, hjälper vi till att räkna' },
      { id: 'home_contents_value', label: 'Ungefärligt värde på lösöret', placeholder: 't.ex. 30 000 EUR inklusive möbler och elektronik' },
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
  asfBar: 'Registrerad försäkringsförmedlare — ASF nr 425591790/3 · Lagos, Algarve, Portugal',
  navAria: 'Huvudnavigering',
  navCta: 'Begär offert',
  mobileCta: 'Begär offert',
  breadcrumbAria: 'Brödsmulor',
  heroMeta: 'Registrerad försäkringsförmedlare · ASF nr 425591790/3 · Lagos, Algarve',
  heroCta: 'Begär offert',
  relatedTitle: 'Relaterade sidor',
  pullquoteAria: 'Citat',
  langPolicyId: 'arbetssprak',

  faqId: 'fragor',
  faqEyebrow: 'Vanliga frågor',
  faqTitle: 'Vanliga frågor',

  formId: 'offert',
  formTitle: 'Begär offert',
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
    desc: 'Försäkringsförmedlare för utlandsboende och företag i Algarve, Portugal. Tydlig rådgivning inom vår portfölj av försäkringsbolag.',
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
    contactCta: 'Begär offert',
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
