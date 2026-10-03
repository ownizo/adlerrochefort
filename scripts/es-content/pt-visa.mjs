/**
 * /es/seguro-medico-visado-portugal/
 *
 * Search intent: "seguro médico visa D7 Portugal", "seguro para visa nómada
 * digital Portugal D8", "seguro de viaje visado Portugal" — a Latin American
 * applicant preparing a Portuguese national visa file at the consulate or the
 * visa centre in their country.
 *
 * The angle, which comes from how the Portuguese market actually works: the
 * consulate asks for travel insurance with medical cover and repatriation for
 * the visa period, and a Portuguese health policy cannot normally be issued
 * yet — insurers require a residential address in Portugal and a Portuguese
 * NIF for every insured person. So the page separates the two moments: the
 * travel policy that opens the visa, and the definitive health policy once
 * there is a home in Portugal. It also warns that the wait between arrival
 * and the residence appointment can outlast a travel policy. Golden visa:
 * the property route was closed in 2023; mentioned only to redirect.
 * Requirements are hedged and the reader is sent to the consulate.
 */
import { BREADCRUMB_PORTUGAL, withSibling, toSpain } from './shared.mjs';

export const PT_VISA_PAGE = {
  slug: 'seguro-medico-visado-portugal',
  url: '/es/seguro-medico-visado-portugal/',
  cluster: 'pt-visa',
  title: 'Seguro médico para el visado portugués D7 y D8',
  description:
    'Seguro para el visado D7, D8 o D2 de Portugal: qué pide el consulado, por qué al principio es un seguro de viaje y cuándo llega la póliza de salud portuguesa.',
  keywords:
    'seguro médico visa D7 Portugal, seguro visa nómada digital Portugal, seguro D8 Portugal, seguro de viaje visado Portugal, seguro médico visa Portugal colombianos, seguro visa Portugal mexicanos, seguro salud residencia Portugal, visto D7 seguro',
  eyebrow: 'Portugal · Visados',
  h1: 'Seguro médico para el visado portugués: dos momentos, dos pólizas',
  standfirst:
    'El consulado portugués pide un seguro para conceder el visado D7, D8 o D2. Pero ese seguro no es la póliza de salud con la que vivirá en Portugal — y no puede serlo, por una razón práctica que conviene conocer antes de la cita. Así se ordenan las dos.',
  published: '2026-10-02T09:00:00+00:00',
  modified: '2026-10-02T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_PORTUGAL, { name: 'Seguro médico para el visado' }],
  pullquote: 'El seguro del visado le abre la puerta. La póliza de salud es la que le acompaña dentro.',
  schemaType: 'Article',
  formHeading: 'Prepare el seguro de su visado portugués',
  formBranch: 'Español · Salud para visado',
  formSubject: 'Seguro médico para visado en Portugal',
  formCta: 'Enviar consulta',
  formIntro:
    'Indíquenos el tipo de visado, desde qué país lo pide, quién viaja (edades) y cuándo prevé llegar. Le respondemos por escrito con lo que necesita para la solicitud y con la póliza de salud que tendrá sentido una vez instalado.',
  formPlaceholder:
    'Por ejemplo: visado D8, solicitud en Ciudad de México, pareja de 38 y 36 años con un bebé, llegada prevista a Oporto en abril.',
  sections: withSibling(`
<section class="section plain" aria-labelledby="momentos">
  <div class="container narrow article-body">
    <h2 id="momentos">Dos momentos que no conviene confundir</h2>
    <p>Los visados de residencia portugueses más habituales entre latinoamericanos — el <strong>D7</strong> para quien vive de rentas o pensiones, el <strong>D8</strong> para quien trabaja en remoto para clientes o empresas de fuera, el <strong>D2</strong> para emprendedores — tienen dos fases: el visado que concede el consulado, válido para entrar y pedir la residencia, y la autorización de residencia que se tramita ya en Portugal.</p>
    <p>El seguro acompaña esas dos fases de forma distinta:</p>
    <ul>
      <li><strong>Para la solicitud del visado</strong>, los consulados piden habitualmente un <strong>seguro de viaje</strong> que cubra gastos médicos — incluida la asistencia urgente y la repatriación — durante el periodo del visado.</li>
      <li><strong>Para vivir en Portugal</strong>, lo que necesita es una <strong>póliza de salud de verdad</strong>, portuguesa o internacional, con la que su familia va al médico.</li>
    </ul>
    <p>La práctica concreta varía según el consulado y el centro de visados: confirme la lista de documentos que le corresponde antes de contratar nada.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="por-que-viaje">
  <div class="container narrow article-body">
    <h2 id="por-que-viaje">Por qué al principio es un seguro de viaje</h2>
    <p>Muchas familias preguntan por qué no contratan directamente la póliza de salud portuguesa y la presentan en el consulado. La razón es práctica: las aseguradoras portuguesas emiten las pólizas de salud a quien tiene <strong>domicilio de residencia en Portugal</strong> y piden el <strong>NIF portugués de cada asegurado</strong>. Mientras usted vive en Bogotá o en Buenos Aires, ese domicilio todavía no existe.</p>
    <div class="callout">
      <span class="callout-label">Lo que hacemos en esta fase</span>
      Le indicamos por escrito qué debe cubrir el seguro de viaje para su solicitud — duración, gastos médicos, repatriación, personas — y preparamos con usted la póliza de salud definitiva para el día en que tenga domicilio en Portugal. Si prefiere una póliza internacional que pueda contratarse antes de llegar, le explicamos cuándo es posible y qué cuesta en coberturas.
    </div>
  </div>
</section>

<section class="section plain" aria-labelledby="viaje">
  <div class="container narrow article-body">
    <h2 id="viaje">El seguro de viaje del visado: lo que hay que mirar</h2>
    <ul>
      <li><strong>La duración.</strong> Que cubra todo el periodo del visado, no solo unas semanas. Las pólizas de viaje corrientes tienen un máximo de días por viaje.</li>
      <li><strong>La espera hasta la cita de residencia.</strong> Entre la llegada y la autorización de residencia pueden pasar meses. Compruebe si la póliza se puede prorrogar y hasta cuándo, o prevea la póliza definitiva antes de que termine.</li>
      <li><strong>Gastos médicos y repatriación</strong>, con importes suficientes para una hospitalización en Europa.</li>
      <li><strong>Todas las personas</strong> que viajan, con sus nombres como en el pasaporte.</li>
      <li><strong>Las enfermedades previas</strong>, que los seguros de viaje suelen excluir salvo urgencias. Si alguien de la familia tiene una enfermedad conocida, no cuente con el seguro de viaje para tratarla.</li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="definitiva">
  <div class="container narrow article-body">
    <h2 id="definitiva">La póliza definitiva, una vez instalado</h2>
    <ol class="process-steps">
      <li><div><strong>NIF de toda la familia</strong><span>, menores incluidos. Puede obtenerse antes de viajar.</span></div></li>
      <li><div><strong>Domicilio en Portugal</strong><span>: contrato de alquiler o escritura de compra.</span></div></li>
      <li><div><strong>Póliza portuguesa o internacional</strong><span>, con efecto antes de que termine el seguro de viaje. Véase <a href="/es/seguro-salud-internacional/">seguro de salud en Portugal</a>.</span></div></li>
      <li><div><strong>Inscripción en el SNS</strong><span> cuando tenga la documentación de residencia.</span></div></li>
    </ol>
    <p>Para el D8, si trabaja como profesional independiente, piense además en la <a href="/es/seguro-responsabilidad-profesional-portugal/">responsabilidad civil profesional</a>: sus clientes siguen fuera, pero usted ya trabaja desde Portugal.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="golden">
  <div class="container narrow article-body">
    <h2 id="golden">¿Y la golden visa?</h2>
    <p>La autorización de residencia para actividad de inversión sigue existiendo en Portugal, pero desde 2023 ya no se obtiene comprando vivienda; las vías actuales son otras, como determinados fondos de inversión o la creación de empleo. Para el seguro, la lógica es la misma: la póliza de salud portuguesa llega con el domicilio en Portugal, y durante las estancias previas lo que protege a la familia es un seguro de viaje o una póliza internacional.</p>
  </div>
</section>`, toSpain.visa),
  faqTitle: 'Seguro médico para el visado portugués — preguntas',
  faq: [
    {
      q: '¿Qué seguro pide el consulado para el visado D7 o D8?',
      a: '<p>Habitualmente, un seguro de viaje que cubra gastos médicos, incluida la asistencia urgente y la repatriación, durante el periodo del visado. Confirme la lista exacta de documentos en el consulado o centro de visados donde presenta la solicitud.</p>',
    },
    {
      q: '¿Puedo presentar una póliza de salud portuguesa en el consulado?',
      a: '<p>Normalmente no es posible todavía: las aseguradoras portuguesas emiten la póliza de salud con domicilio de residencia en Portugal y NIF de cada asegurado. Por eso, en la fase de visado, se usa un seguro de viaje; la póliza portuguesa llega cuando tiene casa en Portugal.</p>',
    },
    {
      q: '¿Y si la cita de residencia tarda más que mi seguro de viaje?',
      a: '<p>Es una situación frecuente. Compruebe al contratar si el seguro de viaje se puede prorrogar, y prevea la póliza de salud definitiva en cuanto tenga domicilio, sin esperar a la autorización de residencia.</p>',
    },
    {
      q: '¿Me sirve mi seguro de gastos médicos mayores de mi país?',
      a: '<p>Solo si cubre la asistencia en Portugal, incluida la repatriación, durante todo el periodo, y si la aseguradora emite un certificado que el consulado acepte. Muchas pólizas locales limitan la cobertura en el extranjero. Pídalo por escrito a su aseguradora.</p>',
    },
    {
      q: '¿El seguro de viaje cubre una enfermedad que ya tengo?',
      a: '<p>Por regla general, solo las urgencias, y a veces ni eso. Si alguien de la familia tiene una enfermedad conocida, planifique cómo se va a tratar en Portugal y considere una póliza internacional desde el principio.</p>',
    },
  ],
  related: [
    { url: '/es/seguro-salud-internacional/', label: 'Seguro de salud en Portugal' },
    { url: '/es/mudarse-a-portugal-seguros/', label: 'Mudarse a Portugal desde América Latina' },
    { url: '/es/seguros-portugal/', label: 'Seguros en Portugal: visión general' },
  ],
};
