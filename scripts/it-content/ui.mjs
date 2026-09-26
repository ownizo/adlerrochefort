/**
 * Interface copy for the Italian cluster: chrome, footer, form labels,
 * validation messages, cookie banner.
 *
 * Shapes are dictated by scripts/lib/market-cluster.mjs and shared with the
 * other market clusters; the words are Italian, formal register (Lei), and
 * written for an Italian reader.
 *
 * The insurance_type values are market-tagged ("IT · Casa") because
 * netlify/functions/submission-created.mjs builds the notification subject
 * from this field — the label is for the visitor, the value is for the inbox.
 * Field ids are identical across all markets so that
 * scripts/form-payload-test.mjs and the email labels stay consistent.
 *
 * Language wording must match LANG_POLICY_IT in ./shared.mjs: English is the
 * official working language; written communication reaches the client in
 * Italian through AI-assisted translation.
 */

export const IT_BRANCHES = [
  {
    value: 'IT · Casa',
    label: 'Assicurazione casa e contenuto',
    legend: 'Qualche informazione sull’immobile',
    fields: [
      { id: 'home_property_type', label: 'Tipo di immobile', placeholder: 'es. villa con piscina, palazzo storico a Lisbona, appartamento in condominio' },
      { id: 'home_rebuild_value', label: 'Costo di ricostruzione stimato (se lo conosce)', placeholder: 'se non lo conosce, lo stabiliamo insieme — spesso con un sopralluogo' },
      { id: 'home_contents_value', label: 'Valore indicativo del contenuto', placeholder: 'es. arredi, opere d’arte, gioielli e orologi — meglio se suddivisi' },
    ],
  },
  {
    value: 'IT · Salute',
    label: 'Assicurazione sanitaria',
    legend: 'Chi deve essere assicurato',
    fields: [
      { id: 'health_household', label: 'Numero di persone ed età', placeholder: 'es. due adulti (47 e 44 anni) e due figli (9 e 12)' },
    ],
  },
  {
    value: 'IT · Auto',
    label: 'Assicurazione auto',
    legend: 'Qualche informazione sull’auto',
    fields: [
      { id: 'motor_vehicle', label: 'Marca, modello e anno', placeholder: 'es. Alfa Romeo Stelvio 2022, benzina' },
      { id: 'motor_plate', label: 'Immatricolazione attuale', placeholder: 'es. targa italiana, da reimmatricolare / già portoghese' },
      { id: 'motor_claims_history', label: 'Storia assicurativa', placeholder: 'es. classe di merito 1, nessun sinistro negli ultimi 10 anni' },
    ],
  },
  {
    value: 'IT · Responsabilità civile',
    label: 'Responsabilità civile (famiglia o professionale)',
    legend: 'Che cosa deve comprendere la copertura',
    fields: [
      { id: 'liability_activity', label: 'Quale attività o situazione', placeholder: 'es. RC della famiglia, personale domestico, barca, locazione, attività professionale' },
      { id: 'liability_clients', label: 'Dove si trovano clienti o terzi', placeholder: 'es. clienti in Italia e in Portogallo, ricevo clienti a Lisbona' },
    ],
  },
];

export const IT_UI = {
  skipLink: 'Vai al contenuto',
  asfBar: 'Intermediario assicurativo registrato — ASF n. 425591790/3 · Portogallo e Spagna · Lisbona e Lagos',
  navAria: 'Navigazione principale',
  navCta: 'Valutazione scritta',

  mega: {
    portugal: 'Assicurazioni in Portogallo',
    portugalMenu: 'Menu Portogallo',
    spain: 'Assicurazioni in Spagna',
    spainMenu: 'Menu Spagna',
    privateClients: 'Private Clients',
    privateClientsMenu: 'Menu Private Clients',
    whyUs: 'Perché noi',
    whyUsMenu: 'Menu Perché noi',
    overview: 'Panoramica',
    personal: 'Assicurazioni personali',
    personalShort: 'Privati',
    moving: 'Trasferimento e casa',
    property: 'Immobili',
    hubItem: 'Assicurazioni in Portogallo',
    spainHub: 'Assicurazioni per expat in Spagna',
    spainHealth: 'Assicurazione sanitaria',
    spainHome: 'Assicurazione casa',
    spainCar: 'Assicurazione auto',
    spainLife: 'Assicurazione vita',
    spainLandlord: 'Assicurazione per locatori',
    spainMortgage: 'Protezione del mutuo',
    spainPC: 'Assicurazione Private Client',
    pcPortugal: 'Private Clients — Portogallo',
    pcSpain: 'Private Clients — Spagna',
    whyAbout: 'Chi siamo',
    whyHow: 'Come lavoriamo',
    whyBroker: 'Perché un intermediario',
    whyClaims: 'Gestione dei sinistri',
    burger: 'Menu',
  },
  mobileCta: 'Valutazione scritta',
  breadcrumbAria: 'Percorso di navigazione',
  heroMeta: 'Intermediario assicurativo registrato · ASF n. 425591790/3 · Lisbona e Lagos',
  heroCta: 'Richieda una valutazione scritta',
  relatedTitle: 'Pagine correlate',
  pullquoteAria: 'Citazione',
  langPolicyId: 'lingua-di-lavoro',

  faqId: 'domande',
  faqEyebrow: 'Domande frequenti',
  faqTitle: 'Domande frequenti',

  formId: 'richiesta',
  formTitle: 'Richieda una valutazione scritta',
  formLangNote: 'Il modulo è in italiano. Le rispondiamo per iscritto in italiano, con l’aiuto della traduzione assistita dall’intelligenza artificiale; la nostra lingua di lavoro ufficiale è l’inglese.',
  formSubmit: 'Invii la richiesta',
  formSending: 'Invio in corso…',
  formFootnote: 'Rispondiamo entro un giorno lavorativo. La richiesta non comporta alcun impegno.',
  honeypot: 'Non compili questo campo',
  successHeading: 'Grazie — abbiamo ricevuto la Sua richiesta.',
  successBody: 'Le risponderemo entro un giorno lavorativo, per iscritto e in italiano. Per questioni urgenti può chiamare il +351 928 226 570 (in inglese o portoghese).',
  submitError: 'Non è stato possibile inviare il modulo. La preghiamo di riprovare o di scrivere a insurance@adlerrochefort.com.',

  f: {
    name: 'Nome e cognome',
    email: 'Indirizzo e-mail',
    phone: 'Telefono',
    phoneHelp: 'Indichi il numero con il prefisso internazionale, es. +39 347 123 4567.',
    company: 'Società (facoltativo)',
    companyPh: 'es. nome della società, se la richiesta riguarda un’attività',
    localidade: 'Località in Portogallo o in Spagna',
    localidadePh: 'es. Lisbona, Cascais, Porto, Comporta, Lagos, Marbella, Madrid',
    country: 'Paese in cui vive attualmente',
    countryPh: 'es. Italia',
    residence: 'La Sua situazione in Portogallo o in Spagna',
    residenceOptions: [
      { v: 'Planning move', l: 'Sto pianificando il trasferimento' },
      { v: 'Recently arrived', l: 'Mi sono trasferito da poco' },
      { v: 'Resident', l: 'Sono residente' },
      { v: 'Non-resident owner', l: 'Sono proprietario ma non residente' },
    ],
    selectPlaceholder: 'Selezioni',
    type: 'Di che cosa si tratta?',
    typeOther: 'Altro, oppure non lo so ancora',
    startDate: 'Da quando deve decorrere la copertura?',
    startDatePh: 'es. dal 1° marzo, dal giorno del rogito (escritura), il prima possibile',
    prefLang: 'Lingua della corrispondenza',
    prefLangOptions: [
      { v: 'Italian', l: 'Italiano — per iscritto, con traduzione assistita' },
      { v: 'English', l: 'Inglese — la nostra lingua di lavoro' },
      { v: 'Portuguese', l: 'Portoghese' },
    ],
    message: 'Che cosa dovremmo sapere?',
    messagePh: 'Descriva la situazione con parole Sue: più è concreta, più precisa sarà la risposta.',
    consent: 'Acconsento a essere contattato da Adler &amp; Rochefort in merito a questa richiesta e al trattamento dei miei dati a tale scopo.',
  },

  v: {
    name: 'Indichi il Suo nome.',
    nameShort: 'Indichi sia il nome sia il cognome.',
    email: 'Indichi il Suo indirizzo e-mail.',
    emailBad: 'L’indirizzo e-mail sembra incompleto.',
    phone: 'Indichi il Suo numero di telefono.',
    phoneBad: 'Indichi il numero con il prefisso internazionale, es. +39 347 123 4567.',
    type: 'Selezioni l’oggetto della richiesta.',
    consent: 'Senza il Suo consenso non possiamo rispondere alla richiesta.',
  },

  cookie: {
    title: 'Cookie',
    body: 'Utilizziamo i cookie esclusivamente per misurare il rendimento degli annunci e il traffico. Senza il Suo consenso non viene impostato alcun cookie analitico.',
    reject: 'Rifiuta',
    accept: 'Accetta',
  },

  footer: {
    desc: 'Intermediario assicurativo per clienti privati con patrimoni importanti in Portogallo e in Spagna, con uffici a Lisbona e Lagos. Sottoscrizione individuale, consulenza per iscritto e un unico consulente dal primo contatto al sinistro.',
    badge: 'Intermediario assicurativo registrato — ASF n. 425591790/3',
    coverTitle: 'Assicurazioni',
    coverLinks: [
      { url: '/it/assicurazione-casa-alto-valore/', label: 'Assicurazione casa' },
      { url: '/it/assicurazione-sanitaria-internazionale/', label: 'Assicurazione sanitaria' },
      { url: '/it/assicurazione-auto-portogallo/', label: 'Assicurazione auto' },
      { url: '/it/responsabilita-civile-famiglia/', label: 'Responsabilità civile' },
      { url: '/it/guida-assicurazioni-portogallo/', label: 'Guida alle assicurazioni' },
    ],
    langsTitle: 'Lingue',
    contactTitle: 'Contatti',
    contactCta: 'Valutazione scritta',
    copy: 'Tutti i diritti riservati',
    vault: 'Accedi a MyCoverVault',
    privacy: 'Informativa sulla privacy',
    terms: 'Condizioni d’uso',
    complaints: 'Libro dei reclami',
    asfChannel: 'Canale di segnalazione dell’ASF',
    regulatory: [
      'Adler &amp; Rochefort è un marchio di Ownizo, Unipessoal Lda.',
      'Ownizo, Unipessoal Lda. è registrata presso l’autorità portoghese di vigilanza sulle assicurazioni e i fondi pensione (ASF) come agente assicurativo con il numero 425591790/3 e opera in Spagna in regime di libera prestazione di servizi nell’Unione europea. Prestiamo consulenza nell’ambito del nostro portafoglio di compagnie assicurative.',
      'Questa pagina contiene informazioni di carattere generale e non costituisce consulenza assicurativa individuale né consulenza legale. La copertura adeguata dipende dalla Sua situazione e dalle condizioni della polizza scelta.',
    ],
  },
};
