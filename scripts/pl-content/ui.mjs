/**
 * Interface copy for the Polish cluster: chrome, footer, form labels,
 * validation messages, cookie banner.
 *
 * Everything a Polish visitor reads that is not editorial body copy lives
 * here, so the cluster can be proof-read for language in one place. The
 * structure is dictated by scripts/lib/market-cluster.mjs, which is shared
 * with Sweden and Denmark — the shapes match, the words do not.
 *
 * The `insurance_type` option values are deliberately English and
 * market-tagged ("PL · Dom"): netlify/functions/submission-created.mjs builds
 * the notification subject line from this field, so the value is written for
 * the person reading the inbox in Lagos while the visible label is written for
 * the person filling the form in Warsaw. The Spanish cluster established this
 * convention ("ES · …"); reusing it means quoteSubject() needed no change.
 */

export const PL_BRANCHES = [
  {
    value: 'PL · Dom',
    label: 'Ubezpieczenie domu lub mieszkania',
    legend: 'Kilka szczegółów o nieruchomości',
    fields: [
      { id: 'home_property_type', label: 'Rodzaj nieruchomości', placeholder: 'np. mieszkanie we wspólnocie, dom wolnostojący, dom letniskowy' },
      { id: 'home_rebuild_value', label: 'Szacowana wartość odbudowy (jeśli jest znana)', placeholder: 'np. 180 000 EUR — jeśli nie wiadomo, pomożemy oszacować' },
      { id: 'home_contents_value', label: 'Przybliżona wartość ruchomości domowych', placeholder: 'np. 30 000 EUR łącznie z wyposażeniem i elektroniką' },
    ],
  },
  {
    value: 'PL · Zdrowie',
    label: 'Ubezpieczenie zdrowotne',
    legend: 'Kto ma być objęty ochroną',
    fields: [
      { id: 'health_household', label: 'Liczba osób i ich wiek', placeholder: 'np. 2 osoby dorosłe (41 i 39 lat) oraz dziecko (7 lat)' },
      // 'health_history' removed (Especificação v2, A1) — a clinical
      // question ("chronic conditions or ongoing treatment") has no place
      // in a public lead form; see the matching removal in
      // scripts/upgrade-forms.mjs for the full reasoning. Same 40-page
      // one-off removal already applied to the generated HTML across all
      // five market clusters (pl/se/dk/zh/il).
    ],
  },
  {
    value: 'PL · Samochód',
    label: 'Ubezpieczenie samochodu',
    legend: 'Kilka szczegółów o pojeździe',
    fields: [
      { id: 'motor_vehicle', label: 'Marka, model i rok produkcji', placeholder: 'np. Skoda Octavia 2019, silnik 1.6 diesel' },
      { id: 'motor_plate', label: 'Aktualna rejestracja', placeholder: 'np. polskie tablice, planuję przerejestrowanie / już portugalskie' },
      { id: 'motor_claims_history', label: 'Historia szkodowa', placeholder: 'np. 8 lat bez szkody, zaświadczenie z polskiego ubezpieczyciela' },
    ],
  },
  {
    value: 'PL · OC ogólna',
    label: 'Odpowiedzialność cywilna (prywatna lub zawodowa)',
    legend: 'Czego ma dotyczyć ochrona',
    fields: [
      { id: 'liability_activity', label: 'Jaka działalność lub sytuacja', placeholder: 'np. konsultant IT, fizjoterapeutka, wynajem mieszkania, życie prywatne' },
      { id: 'liability_clients', label: 'Gdzie znajdują się klienci lub osoby trzecie', placeholder: 'np. klienci w Portugalii i w Polsce, pacjenci przyjmowani w gabinecie w Lizbonie' },
    ],
  },
];

export const PL_UI = {
  // chrome
  skipLink: 'Przejdź do treści',
  asfBar: 'Zarejestrowany agent ubezpieczeniowy — ASF nr 425591790/3 · Lagos, Algarve, Portugalia',
  navAria: 'Nawigacja główna',
  navCta: 'Zapytaj o ofertę',

  mega: {
    portugal: 'Ubezpieczenia w Portugalii',
    portugalMenu: 'Menu Portugalia',
    spain: 'Ubezpieczenia w Hiszpanii',
    spainMenu: 'Menu Hiszpania',
    privateClients: 'Private Clients',
    privateClientsMenu: 'Menu Private Clients',
    whyUs: 'Dlaczego my',
    whyUsMenu: 'Menu Dlaczego my',
    overview: 'Przegląd',
    personal: 'Ubezpieczenia osobiste',
    personalShort: 'Osobiste',
    moving: 'Przeprowadzka i nieruchomość',
    property: 'Nieruchomość',
    hubItem: 'Ubezpieczenia w Portugalii',
    spainHub: 'Ubezpieczenia dla expats w Hiszpanii',
    spainHealth: 'Ubezpieczenie zdrowotne',
    spainHome: 'Ubezpieczenie domu',
    spainCar: 'Ubezpieczenie samochodu',
    spainLife: 'Ubezpieczenie na życie',
    spainLandlord: 'Ubezpieczenie wynajmującego',
    spainMortgage: 'Ochrona kredytu hipotecznego',
    spainPC: 'Ubezpieczenie Private Client',
    pcPortugal: 'Private Clients — Portugalia',
    pcSpain: 'Private Clients — Hiszpania',
    whyAbout: 'O nas',
    whyHow: 'Jak pracujemy',
    whyBroker: 'Dlaczego pośrednik',
    whyClaims: 'Szkody',
    burger: 'Menu',
  },
  mobileCta: 'Zapytaj o ofertę',
  breadcrumbAria: 'Ścieżka nawigacji',
  heroMeta: 'Zarejestrowany agent ubezpieczeniowy · ASF nr 425591790/3 · Lagos, Algarve',
  heroCta: 'Zapytaj o ofertę',
  relatedTitle: 'Powiązane strony',
  pullquoteAria: 'Wyróżniony cytat',
  langPolicyId: 'jezyk-pracy',

  // FAQ
  faqId: 'pytania',
  faqEyebrow: 'Najczęstsze pytania',
  faqTitle: 'Najczęściej zadawane pytania',

  // form
  formId: 'oferta',
  formTitle: 'Zapytaj o ofertę',
  formLangNote: 'Formularz jest po polsku. Odpowiadamy i prowadzimy sprawę po angielsku, pisemnie.',
  formSubmit: 'Wyślij zapytanie',
  formSending: 'Wysyłanie…',
  formFootnote: 'Odpowiadamy w ciągu jednego dnia roboczego. Zapytanie nie jest zobowiązaniem do zawarcia umowy.',
  honeypot: 'Proszę nie wypełniać tego pola',
  successHeading: 'Dziękujemy — zapytanie do nas dotarło.',
  successBody: 'Odpowiadamy w ciągu jednego dnia roboczego, po angielsku i pisemnie. Jeśli sprawa jest pilna, proszę zadzwonić: +351 928 226 570.',
  submitError: 'Nie udało się wysłać formularza. Proszę spróbować ponownie lub napisać na insurance@adlerrochefort.com.',

  f: {
    name: 'Imię i nazwisko',
    email: 'Adres e-mail',
    phone: 'Telefon',
    phoneHelp: 'Proszę podać numer z prefiksem kraju, np. +48 601 234 567.',
    company: 'Firma (opcjonalnie)',
    companyPh: 'np. nazwa firmy, jeśli zapytanie dotyczy działalności',
    localidade: 'Miejscowość w Portugalii',
    localidadePh: 'np. Lizbona, Porto, Lagos, Cascais',
    country: 'Kraj obecnego zamieszkania',
    countryPh: 'np. Polska',
    residence: 'Status pobytu w Portugalii',
    residenceOptions: [
      { v: 'Planning move', l: 'Planuję przeprowadzkę' },
      { v: 'Recently arrived', l: 'Niedawno przyjechałem / przyjechałam' },
      { v: 'Resident', l: 'Mieszkam w Portugalii na stałe' },
      { v: 'Non-resident owner', l: 'Mam nieruchomość, ale nie mieszkam tu na stałe' },
    ],
    selectPlaceholder: 'Proszę wybrać',
    type: 'Jakiego ubezpieczenia dotyczy zapytanie?',
    typeOther: 'Inne lub jeszcze nie wiem',
    startDate: 'Od kiedy ochrona ma obowiązywać?',
    startDatePh: 'np. od 1 marca, w dniu podpisania aktu notarialnego, jak najszybciej',
    prefLang: 'Preferowany język korespondencji',
    prefLangOptions: [
      { v: 'English', l: 'Angielski — nasz język pracy' },
      { v: 'Portuguese', l: 'Portugalski' },
    ],
    message: 'Co powinniśmy wiedzieć?',
    messagePh: 'Proszę opisać sytuację własnymi słowami — im konkretniej, tym trafniejsza będzie odpowiedź.',
    consent: 'Zgadzam się, aby Adler &amp; Rochefort skontaktowało się ze mną w sprawie tego zapytania i przetwarzało podane dane w tym celu.',
  },

  v: {
    name: 'Proszę podać imię i nazwisko.',
    nameShort: 'Proszę podać pełne imię i nazwisko.',
    email: 'Proszę podać adres e-mail.',
    emailBad: 'Ten adres e-mail wygląda na niepełny.',
    phone: 'Proszę podać numer telefonu.',
    phoneBad: 'Proszę podać numer z prefiksem kraju, np. +48 601 234 567.',
    type: 'Proszę wybrać rodzaj ubezpieczenia.',
    consent: 'Bez tej zgody nie możemy odpowiedzieć na zapytanie.',
  },

  cookie: {
    title: 'Pliki cookie',
    body: 'Używamy plików cookie wyłącznie do pomiaru skuteczności reklam i ruchu na stronie. Bez zgody nie ustawiamy żadnych cookies analitycznych.',
    reject: 'Odrzuć',
    accept: 'Akceptuję',
  },

  footer: {
    desc: 'Agencja ubezpieczeniowa dla osób z zagranicy i firm w Algarve, Portugalia. Jasne doradztwo w ramach naszego portfela ubezpieczycieli.',
    badge: 'Zarejestrowany agent ubezpieczeniowy — ASF nr 425591790/3',
    coverTitle: 'Ubezpieczenia',
    coverLinks: [
      { url: '/pl/ubezpieczenie-domu-portugalia/', label: 'Ubezpieczenie domu' },
      { url: '/pl/ubezpieczenie-zdrowotne-portugalia/', label: 'Ubezpieczenie zdrowotne' },
      { url: '/pl/ubezpieczenie-samochodu-portugalia/', label: 'Ubezpieczenie samochodu' },
      { url: '/pl/ubezpieczenie-odpowiedzialnosci-cywilnej-portugalia/', label: 'Odpowiedzialność cywilna' },
      { url: '/pl/ubezpieczenia-portugalia-przewodnik/', label: 'Przewodnik po ubezpieczeniach' },
    ],
    langsTitle: 'Języki',
    contactTitle: 'Kontakt',
    contactCta: 'Zapytaj o ofertę',
    copy: 'Wszelkie prawa zastrzeżone',
    vault: 'Przejdź do MyCoverVault',
    privacy: 'Polityka prywatności',
    terms: 'Regulamin',
    complaints: 'Księga skarg',
    asfChannel: 'Kanał zgłoszeń ASF',
    regulatory: [
      'Adler &amp; Rochefort to marka handlowa spółki Ownizo, Unipessoal Lda.',
      'Ownizo, Unipessoal Lda. jest zarejestrowana w portugalskim organie nadzoru ubezpieczeń i funduszy emerytalnych (ASF) jako agent ubezpieczeniowy pod numerem 425591790/3. Doradzamy w ramach portfela ubezpieczycieli, z którymi współpracujemy.',
      'Ta strona zawiera informacje ogólne i nie stanowi indywidualnej porady ubezpieczeniowej ani prawnej. Zakres odpowiedniej ochrony zależy od sytuacji oraz od warunków konkretnej polisy.',
    ],
  },
};
