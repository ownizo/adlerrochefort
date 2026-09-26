/**
 * /es/seguro-secuestro-extorsion/  (cluster: niche-kr)
 *
 * Search intent: "seguro de secuestro", "seguro K&R", "seguro extorsión
 * familia" — business owners, public-profile families and Latin American
 * families living between Madrid, Marbella, Lisbon and Cascais, family offices,
 * and families who travel to higher-risk countries.
 *
 * Spanish-specific angle: for many Latin American readers express kidnapping
 * and extortion are not abstract risks; the page speaks to them without drama.
 * Deliberately informational and discreet: what the cover does, why the
 * crisis-response consultancy is the heart of it, why confidentiality matters.
 * No operational security advice. Reimbursement basis, subject to applicable
 * law. Placed through specialist markets and co-brokerage partners.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';
import { section, cardsSection, compareTable, howWeWork, disclaimer } from './niche-shared.mjs';

export const NICHE_KR_PAGE = {
  slug: 'seguro-secuestro-extorsion',
  url: '/es/seguro-secuestro-extorsion/',
  cluster: 'niche-kr',
  title: 'Seguro de secuestro y extorsión (K&R) | Adler & Rochefort',
  description:
    'Seguro de secuestro, rescate y extorsión para familias y empresarios en España y Portugal: consultoría de crisis 24/7, reembolso y total confidencialidad.',
  keywords:
    'seguro de secuestro, seguro K&R, seguro secuestro y rescate, seguro extorsión, secuestro exprés seguro, seguro de secuestro familia, gestión de crisis secuestro, seguro rapto Portugal, seguridad personal family office',
  eyebrow: 'Coberturas especializadas · Secuestro y extorsión',
  h1: 'Seguro de secuestro, rescate y extorsión para la familia',
  standfirst:
    'Una cobertura discreta para familias, empresarios y personas con perfil público en España y Portugal: el reembolso de un rescate o una extorsión y, sobre todo, un equipo especializado en gestión de crisis disponible desde la primera llamada.',
  published: '2026-09-26T09:00:00+00:00',
  modified: '2026-09-26T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Secuestro y extorsión' }],
  pullquote:
    'En un seguro de secuestro, lo más valioso no es el reembolso: es saber a quién llamar en la primera hora.',
  schemaType: 'Article',
  formHeading: 'Solicite un análisis confidencial por escrito',
  formBranch: 'Español · Secuestro y extorsión',
  formSubject: 'Secuestro, rescate y extorsión',
  formCta: 'Solicitar el análisis',
  formIntro:
    'Basta con una descripción general: quién debería quedar cubierto, dónde viven y adónde viajan. Tratamos la solicitud con total reserva y le respondemos por escrito con los siguientes pasos.',
  formPlaceholder:
    'Por ejemplo: familia de cuatro con residencia en Madrid y Lisboa, viajes frecuentes a México y Colombia por negocio; nos interesa una cobertura discreta para todos.',
  sections: `${section(
    'plain',
    'para-quien',
    `    <h2 id="para-quien">Para quién tiene sentido</h2>
    <p>España y Portugal son países seguros, y esta página no pretende sugerir lo contrario. El seguro de secuestro y extorsión — en el mercado, <em>K&amp;R</em>, de <em>kidnap and ransom</em> — no se contrata por el lugar donde se vive, sino por quién se es, qué se tiene y adónde se viaja. Lo vemos con sentido en situaciones como estas:</p>
    <ul>
      <li><strong>Empresarios y accionistas</strong> cuyo nombre y patrimonio son conocidos, con residencia en Madrid, Barcelona, Marbella, Lisboa o Cascais.</li>
      <li><strong>Familias latinoamericanas</strong> que han trasladado su vida a la Península pero mantienen negocios, familia y viajes regulares en México, Venezuela, Colombia, Brasil u otros países de la región.</li>
      <li><strong>Personas con perfil público</strong> — deportistas, artistas, directivos — y sus hijos.</li>
      <li><strong>Family offices</strong> que quieren proteger a varios miembros y generaciones de una familia con una sola póliza.</li>
      <li><strong>Viajes a países de mayor riesgo</strong>, por negocio, por proyectos o por visitas familiares.</li>
    </ul>
    <p>La cobertura puede extenderse al cónyuge, a los hijos y a otros familiares, al personal doméstico y, según las condiciones, a los invitados que se encuentren con la familia.</p>`
  )}
${cardsSection(
    'tint',
    'coberturas',
    'Lo que incluye una póliza bien colocada',
    'Las pólizas de este mercado siguen una estructura reconocible. Lo que cambia de una a otra — y hay que leer con cuidado — son los límites, las personas y los territorios cubiertos:',
    [
      ['Consultoría de gestión de crisis 24/7', 'Los honorarios y gastos de una consultora especializada que asesora a la familia desde la primera llamada, habitualmente sin límite o con un límite muy alto. Es, con diferencia, la parte más valiosa de la póliza.'],
      ['Rescate y extorsión', 'El reembolso de las cantidades pagadas para obtener la liberación de una persona o para poner fin a una amenaza de extorsión, en los términos de la póliza y siempre dentro de la ley aplicable.'],
      ['Pérdida en tránsito', 'La pérdida, el robo o la destrucción del dinero de un rescate mientras se entrega, por quien actúe en nombre de la familia.'],
      ['Secuestro exprés, detención y secuestro de medios de transporte', 'El secuestro de corta duración para obtener dinero de cajeros o cuentas, la detención ilegal y el secuestro de un vehículo, avión o embarcación en que viaje la persona asegurada.'],
      ['Amenazas y ciberextorsión', 'Amenazas de causar daño a personas o bienes y la extorsión digital — por ejemplo, la amenaza de publicar información privada — cuando la póliza la incluye.'],
      ['Gastos adicionales', 'Según las condiciones: gastos de viaje y alojamiento de la familia, asesoramiento jurídico, tratamiento médico y psicológico tras la liberación, recompensas a informantes y lucro cesante de la persona afectada.'],
      ['Ámbito mundial', 'La cobertura suele ser mundial, con algunos países excluidos o sujetos a condiciones especiales que conviene conocer antes del viaje, no después.'],
      ['Evaluaciones previas al viaje', 'Muchas pólizas incluyen el acceso a la consultora antes de un viaje: una valoración de riesgos del destino y recomendaciones, sin necesidad de que haya ocurrido nada.'],
    ]
  )}
${section(
    'plain',
    'espana-portugal',
    `    <h2 id="espana-portugal">Riesgos y diferencias entre España y Portugal</h2>
    <p>En los dos países la tasa de secuestros es baja y la actuación policial es eficaz. Lo que cambia la exposición de una familia es, sobre todo, lo que ocurre fuera: los viajes, los negocios en terceros países y la visibilidad pública. Aun así, hay matices entre un lado y otro de la frontera que conviene tener presentes:</p>
${compareTable('Diferencias relevantes entre España y Portugal para un seguro de secuestro y extorsión', [
  ['Exposición habitual', 'Perfil público y patrimonio conocido; extorsiones y amenazas, a menudo con componente digital', 'Menor visibilidad; el riesgo se concentra en viajes y negocios en el extranjero'],
  ['Autoridades', 'Policía Nacional y Guardia Civil, con unidades especializadas', 'Polícia Judiciária, competente para los delitos de secuestro y extorsión'],
  ['Marco del pago de rescates', 'El pago en sí no está prohibido con carácter general; la póliza opera por reembolso y sujeta a la ley', 'Mismo principio: reembolso, cooperación con las autoridades y respeto a la ley aplicable'],
  ['Idioma de la gestión', 'Español', 'Portugués; la consultora trabaja en varios idiomas'],
])}
    <p>En ambos casos, la póliza no sustituye a la policía ni compite con ella. Las consultoras de crisis trabajan <strong>en coordinación con las autoridades</strong>, y las pólizas suelen exigir que se les informe. Las leyes sobre sanciones internacionales y financiación del terrorismo pueden limitar lo que se puede pagar y a quién; la póliza nunca cubre un pago que la ley prohíba.</p>`
  )}
${section(
    'tint',
    'confidencialidad',
    `    <h2 id="confidencialidad">La confidencialidad forma parte de la cobertura</h2>
    <p>Este seguro tiene una particularidad que sorprende a quien lo contrata por primera vez: <strong>su existencia debe mantenerse en reserva</strong>. Si se sabe que una familia está asegurada, puede convertirse en un objetivo más atractivo — y por eso las pólizas suelen incluir una cláusula por la que la divulgación de la cobertura puede perjudicar o anular el derecho a la indemnización.</p>
    <p>En la práctica, eso significa que solo lo saben las personas que lo necesitan: en una familia, normalmente uno o dos adultos; en una empresa, un número muy reducido de directivos. Nosotros tratamos la información de este expediente con la misma reserva, y los documentos circulan solo entre quien debe verlos.</p>
    <div class="callout">
      <span class="callout-label">Lo que no hacemos</span>
      No damos consejos operativos de seguridad personal ni hablamos en esta página de medidas concretas. Eso corresponde a la consultora especializada, que trabaja caso por caso y con la reserva necesaria.
    </div>`
  )}
${section(
    'plain',
    'lagunas',
    `    <h2 id="lagunas">Lo que suele fallar</h2>
    <p>Muchas familias creen tener algo parecido a esta cobertura y no lo tienen. Los errores que vemos con más frecuencia:</p>
    <ul>
      <li><strong>Suponer que la póliza de la empresa cubre a la familia.</strong> Algunas empresas contratan una póliza K&amp;R para sus directivos en viaje; rara vez cubre al cónyuge, a los hijos o la vida privada.</li>
      <li><strong>Confundir la asistencia en viaje con la gestión de crisis.</strong> Un seguro de viaje repatría y paga gastos médicos; no asesora durante un secuestro ni una extorsión.</li>
      <li><strong>Olvidar a los hijos que estudian fuera</strong> o a los familiares que viven en otro país, cuando la exposición real está precisamente allí.</li>
      <li><strong>Descubrir tarde las exclusiones territoriales.</strong> Algunos países están excluidos o requieren aviso previo; hay que saberlo antes de reservar el viaje.</li>
      <li><strong>Hablar de la póliza.</strong> Con amigos, en redes sociales o con proveedores. Es la forma más sencilla de debilitarla.</li>
    </ul>`
  )}
${section(
    'tint',
    'que-necesitamos',
    `    <h2 id="que-necesitamos">Lo que necesitamos para obtener condiciones</h2>
    <p>El formulario de suscripción de este mercado es breve y se trata con reserva. Para una primera aproximación nos basta con información general:</p>
    <ul>
      <li>Las personas que deberían quedar cubiertas y dónde residen.</li>
      <li>Los países a los que viajan con regularidad, con qué frecuencia y por qué motivo.</li>
      <li>La actividad profesional o empresarial y su visibilidad pública.</li>
      <li>Cualquier incidente, amenaza o intento de extorsión anterior.</li>
      <li>Otras pólizas que ya existan, personales o de empresa, con coberturas parecidas.</li>
    </ul>
    <p>Los detalles más sensibles no hace falta enviarlos por formulario: los tratamos en una conversación directa.</p>`
  )}
${howWeWork('plain', 'mercados especializados en secuestro, rescate y extorsión')}
${disclaimer('tint', 'Las coberturas de rescate y extorsión operan por reembolso y están sujetas a la legislación aplicable, incluidas las normas sobre sanciones internacionales.')}`,
  faqTitle: 'Seguro de secuestro y extorsión — preguntas',
  faq: [
    {
      q: '¿Es legal asegurar un rescate en España y en Portugal?',
      a: '<p>Sí, en los términos en que funcionan estas pólizas: la aseguradora reembolsa lo pagado y cubre los honorarios de la consultora de crisis, siempre con sujeción a la ley. La póliza nunca cubre un pago prohibido, por ejemplo por normas de sanciones internacionales o de financiación del terrorismo, y exige cooperar con las autoridades.</p>',
    },
    {
      q: '¿Qué es lo más importante de la póliza?',
      a: '<p>La consultora especializada en gestión de crisis. Sus honorarios suelen estar cubiertos sin límite o con un límite muy alto, y su intervención desde la primera llamada es lo que más influye en el desenlace. El reembolso económico es importante, pero secundario.</p>',
    },
    {
      q: '¿Por qué no debo contar que tengo este seguro?',
      a: '<p>Porque saber que una familia está asegurada puede convertirla en un objetivo más atractivo. Por eso las pólizas suelen prever que la divulgación de la cobertura pueda perjudicar el derecho a la indemnización. Lo habitual es que lo sepan solo una o dos personas de la familia.</p>',
    },
    {
      q: '¿Cubre el secuestro exprés y la extorsión digital?',
      a: '<p>Las pólizas de este mercado suelen cubrir el secuestro exprés, la detención ilegal y las amenazas de extorsión, y muchas incluyen la ciberextorsión. Los límites y las condiciones varían, y los revisamos por escrito antes de que usted decida.</p>',
    },
    {
      q: '¿Pueden quedar cubiertos el personal doméstico y los invitados?',
      a: '<p>Sí, según la póliza. Muchas cubren al asegurado principal, a su familia, al personal doméstico y a los invitados que se encuentren con la familia en el momento del incidente. Conviene definir con precisión quién es quién desde el principio.</p>',
    },
  ],
  related: [
    { url: '/es/', label: 'Seguros para grandes patrimonios en España y Portugal' },
    { url: '/es/seguro-hogar-alto-valor/', label: 'Seguro de hogar de alto valor' },
    { url: '/es/seguro-ciber-fraude-familiar/', label: 'Ciberriesgo, fraude e identidad de la familia' },
    { url: '/es/seguro-aviacion-privada/', label: 'Seguro de aviación privada' },
  ],
};
