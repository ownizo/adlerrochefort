/**
 * Interface copy for the Spanish cluster: chrome, footer, form labels,
 * validation messages, cookie banner.
 *
 * Shapes are dictated by scripts/lib/market-cluster.mjs and shared with the
 * other generated markets; the words are Spanish, formal register (usted),
 * written for readers in Spain and Latin America alike — no voseo, no
 * peninsular-only colloquialisms.
 *
 * Unlike the Danish, Swedish or Polish clusters, the service itself runs in
 * Spanish: quotes, explanations, correspondence and claims. Every string that
 * touches language (formLangNote, successBody, the language-policy block in
 * shared.mjs, the hub FAQ) says the same thing — change them together.
 *
 * The insurance_type values are tagged "Español · …" rather than "ES · …"
 * because "ES ·" already means the Spain *market* in the English and German
 * Spain clusters (netlify/functions/submission-created.mjs builds the
 * notification subject from this field). This cluster is a language market
 * that sells in both Spain and Portugal, and the inbox must be able to tell
 * the two apart at a glance.
 */

export const ES_BRANCHES = [
  {
    value: 'Español · Hogar',
    label: 'Seguro de hogar, arte y colecciones',
    legend: 'Sobre la vivienda',
    fields: [
      { id: 'home_property_type', label: 'Tipo de vivienda', placeholder: 'p. ej., villa con piscina en Marbella, piso en Lisboa, casa en Comporta' },
      { id: 'home_rebuild_value', label: 'Coste de reconstrucción estimado (si lo conoce)', placeholder: 'si no lo conoce, lo fijamos juntos — a menudo con una inspección' },
      { id: 'home_contents_value', label: 'Valor aproximado del contenido', placeholder: 'p. ej., mobiliario, arte, joyas y relojes — mejor por separado' },
    ],
  },
  {
    value: 'Español · Salud',
    label: 'Seguro de salud internacional',
    legend: 'Quién debe quedar cubierto',
    fields: [
      { id: 'health_household', label: 'Número de personas y edades', placeholder: 'p. ej., dos adultos (48 y 45) y dos hijos (12 y 9)' },
    ],
  },
  {
    value: 'Español · Coche',
    label: 'Seguro de coche',
    legend: 'Sobre el vehículo',
    fields: [
      { id: 'motor_vehicle', label: 'Marca, modelo y año', placeholder: 'p. ej., Porsche Cayenne 2023, híbrido' },
      { id: 'motor_plate', label: 'Matrícula actual', placeholder: 'p. ej., española, pendiente de importar a Portugal / ya portuguesa' },
      { id: 'motor_claims_history', label: 'Historial sin siniestros', placeholder: 'p. ej., 15 años sin siniestros, certificado de la aseguradora actual' },
    ],
  },
  {
    value: 'Español · Responsabilidad civil',
    label: 'Responsabilidad civil (familiar o profesional)',
    legend: 'Qué debe cubrir',
    fields: [
      { id: 'liability_activity', label: 'Actividad o situación', placeholder: 'p. ej., responsabilidad civil familiar, personal doméstico, embarcación, alquiler' },
      { id: 'liability_clients', label: 'Dónde están los clientes o terceros', placeholder: 'p. ej., clientes en España y Portugal, visitas en Madrid' },
    ],
  },
];

export const ES_UI = {
  skipLink: 'Ir al contenido',
  asfBar: 'Mediador de seguros registrado — ASF n.º 425591790/3 · España y Portugal · Lisboa y Lagos',
  navAria: 'Navegación principal',
  navCta: 'Análisis por escrito',

  mega: {
    portugal: 'Seguros en Portugal',
    portugalMenu: 'Menú Portugal',
    spain: 'Seguros en España',
    spainMenu: 'Menú España',
    privateClients: 'Private Clients',
    privateClientsMenu: 'Menú Private Clients',
    whyUs: 'Por qué nosotros',
    whyUsMenu: 'Menú Por qué nosotros',
    overview: 'Visión general',
    personal: 'Seguros personales',
    personalShort: 'Particulares',
    moving: 'Traslado y vivienda',
    property: 'Inmuebles',
    hubItem: 'Seguros en España y Portugal',
    spainHub: 'Seguros para residentes extranjeros en España (inglés)',
    spainHealth: 'Seguro de salud (inglés)',
    spainHome: 'Seguro de hogar (inglés)',
    spainCar: 'Seguro de coche (inglés)',
    spainLife: 'Seguro de vida (inglés)',
    spainLandlord: 'Seguro para propietarios que alquilan (inglés)',
    spainMortgage: 'Protección de hipoteca (inglés)',
    spainPC: 'Private Clients España (inglés)',
    pcPortugal: 'Private Clients — Portugal',
    pcSpain: 'Private Clients — España',
    whyAbout: 'Quiénes somos',
    whyHow: 'Cómo trabajamos',
    whyBroker: 'Por qué un mediador',
    whyClaims: 'Gestión de siniestros',
    burger: 'Menú',
  },
  mobileCta: 'Análisis por escrito',
  breadcrumbAria: 'Ruta de navegación',
  heroMeta: 'Mediador de seguros registrado · ASF n.º 425591790/3 · Lisboa y Lagos',
  heroCta: 'Solicitar un análisis por escrito',
  relatedTitle: 'Páginas relacionadas',
  pullquoteAria: 'Cita',
  langPolicyId: 'idioma-de-trabajo',

  faqId: 'preguntas',
  faqEyebrow: 'Preguntas frecuentes',
  faqTitle: 'Preguntas frecuentes',

  formId: 'solicitud',
  formTitle: 'Solicite un análisis por escrito',
  formLangNote: 'Le respondemos en español, por escrito, y llevamos todo el expediente en español.',
  formSubmit: 'Enviar solicitud',
  formSending: 'Enviando…',
  formFootnote: 'Respondemos en un día laborable. La solicitud no le compromete a nada.',
  honeypot: 'No rellene este campo',
  successHeading: 'Gracias — hemos recibido su solicitud.',
  successBody: 'Le responderemos en un día laborable, por escrito y en español. Si es urgente, llame al +351 928 226 570.',
  submitError: 'No se ha podido enviar el formulario. Inténtelo de nuevo o escriba a insurance@adlerrochefort.com.',

  f: {
    name: 'Nombre y apellidos',
    email: 'Correo electrónico',
    phone: 'Teléfono',
    phoneHelp: 'Indique el número con el prefijo internacional, p. ej., +34 612 345 678.',
    company: 'Empresa (opcional)',
    companyPh: 'p. ej., el nombre de la sociedad, si la consulta se refiere a ella',
    localidade: 'Localidad en España o Portugal',
    localidadePh: 'p. ej., Madrid, Marbella, Lisboa, Cascais, Oporto',
    country: 'País de residencia actual',
    countryPh: 'p. ej., España',
    residence: 'Su situación',
    residenceOptions: [
      { v: 'Planning move', l: 'Preparo un traslado' },
      { v: 'Recently arrived', l: 'Me he trasladado hace poco' },
      { v: 'Resident', l: 'Residente' },
      { v: 'Non-resident owner', l: 'Propietario no residente' },
    ],
    selectPlaceholder: 'Seleccione',
    type: '¿Sobre qué es su consulta?',
    typeOther: 'Otro asunto o aún no lo sé',
    startDate: '¿Cuándo debe empezar la cobertura?',
    startDatePh: 'p. ej., 1 de marzo, el día de la escritura, lo antes posible',
    prefLang: 'Idioma de la correspondencia',
    prefLangOptions: [
      { v: 'Spanish', l: 'Español' },
      { v: 'English', l: 'Inglés' },
      { v: 'Portuguese', l: 'Portugués' },
    ],
    message: '¿Qué deberíamos saber?',
    messagePh: 'Describa la situación con sus propias palabras — cuanto más concreta, mejor será la respuesta.',
    consent: 'Autorizo a Adler &amp; Rochefort a contactarme sobre esta solicitud y a tratar mis datos con esa finalidad.',
  },

  v: {
    name: 'Indique su nombre.',
    nameShort: 'Indique nombre y apellidos.',
    email: 'Indique su correo electrónico.',
    emailBad: 'La dirección de correo parece incompleta.',
    phone: 'Indique su número de teléfono.',
    phoneBad: 'Indique el número con el prefijo internacional, p. ej., +34 612 345 678.',
    type: 'Seleccione el asunto de su consulta.',
    consent: 'Sin su autorización no podemos responder a la solicitud.',
  },

  cookie: {
    title: 'Cookies',
    body: 'Solo utilizamos cookies para medir el rendimiento de los anuncios y el tráfico. Sin su consentimiento no se instala ninguna cookie de análisis.',
    reject: 'Rechazar',
    accept: 'Aceptar',
  },

  footer: {
    desc: 'Mediador de seguros para clientes privados con patrimonios relevantes en España y Portugal, con oficinas en Lisboa y Lagos. Suscripción individual, asesoramiento por escrito y un único interlocutor del primer contacto al siniestro.',
    badge: 'Mediador de seguros registrado — ASF n.º 425591790/3',
    coverTitle: 'Seguros',
    coverLinks: [
      { url: '/es/seguro-hogar-alto-valor/', label: 'Hogar de alto valor' },
      { url: '/es/seguro-salud-internacional/', label: 'Salud internacional' },
      { url: '/es/seguro-coche-portugal/', label: 'Seguro de coche' },
      { url: '/es/seguro-responsabilidad-civil-familiar/', label: 'Responsabilidad civil' },
      { url: '/es/guia-seguros-portugal-espana/', label: 'Guía de seguros' },
    ],
    langsTitle: 'Idiomas',
    contactTitle: 'Contacto',
    contactCta: 'Análisis por escrito',
    copy: 'Todos los derechos reservados',
    vault: 'Ir a MyCoverVault',
    privacy: 'Política de privacidad',
    terms: 'Términos y condiciones',
    complaints: 'Libro de reclamaciones',
    asfChannel: 'Canal de denuncias de la ASF',
    regulatory: [
      'Adler &amp; Rochefort es una marca de Ownizo, Unipessoal Lda.',
      'Ownizo, Unipessoal Lda. está inscrita en la Autoridade de Supervisão de Seguros e Fundos de Pensões (ASF), el supervisor portugués, como agente de seguros con el n.º 425591790/3, y ejerce en España en régimen de libre prestación de servicios de la Unión Europea. Asesoramos dentro de nuestra cartera de aseguradoras.',
      'Esta página contiene información general y no constituye asesoramiento individual en materia de seguros ni asesoramiento jurídico. La cobertura adecuada depende de su situación y de las condiciones de la póliza elegida.',
    ],
  },
};
