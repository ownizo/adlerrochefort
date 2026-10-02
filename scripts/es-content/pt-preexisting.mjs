/**
 * /es/seguro-salud-preexistencias-portugal/
 *
 * Search intent: "seguro de salud con preexistencias Portugal", "seguro
 * médico Portugal enfermedad crónica", "seguro salud Portugal mayores sin
 * límite de edad" — a Latin American family, often with older parents, where
 * someone has a known condition.
 *
 * The angle, from how the Portuguese market actually works: alongside the
 * usual questionnaire-based policies there are policies with no medical
 * questionnaire that apply a waiting period (typically a year) to
 * pre-existing conditions and assess them at claim stage — some without an
 * upper entry age, but requiring at least two insured persons. That route
 * barely exists in Latin America and changes the options for older parents.
 * The SNS is presented as the realistic backstop for an excluded chronic
 * condition once the family is resident. Insurers are never named;
 * conditions are hedged as "some policies".
 */
import { BREADCRUMB_PORTUGAL, withSibling, toSpain } from './shared.mjs';

export const PT_PREEXISTING_PAGE = {
  slug: 'seguro-salud-preexistencias-portugal',
  url: '/es/seguro-salud-preexistencias-portugal/',
  cluster: 'pt-preexisting',
  title: 'Seguro de salud con preexistencias en Portugal | Adler & Rochefort',
  description:
    'Enfermedades previas y seguro de salud en Portugal: con y sin cuestionario médico, carencias, padres mayores y el SNS como respaldo.',
  keywords:
    'seguro de salud preexistencias Portugal, seguro médico Portugal enfermedad crónica, seguro salud Portugal sin cuestionario médico, seguro salud Portugal mayores, seguro salud Portugal sin límite de edad, doenças pré-existentes seguro, carencia preexistencias, seguro padres mayores Portugal',
  eyebrow: 'Portugal · Salud',
  h1: 'Seguro de salud en Portugal con una enfermedad previa',
  standfirst:
    'Una hipertensión, una diabetes, una operación de rodilla hace cinco años, unos padres de 74 y 71 que vienen a vivir con la familia. En Portugal hay más caminos de los que parece para asegurar a quien ya tiene un historial — siempre que se elijan antes de firmar, y con la información completa.',
  published: '2026-10-02T09:00:00+00:00',
  modified: '2026-10-02T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_PORTUGAL, { name: 'Enfermedades preexistentes' }],
  pullquote: 'Lo que no se declara no se cubre. Y lo que se declara bien, a veces sí.',
  schemaType: 'Article',
  formHeading: 'Consulte su caso con una enfermedad previa',
  formBranch: 'Español · Salud',
  formSubject: 'Salud con preexistencias en Portugal',
  formCta: 'Enviar consulta',
  formIntro:
    'Indíquenos quién debe quedar cubierto (edades) y si ya tienen domicilio y NIF en Portugal. No incluya información médica: se da después, directamente en la solicitud a la aseguradora.',
  formPlaceholder:
    'Por ejemplo: mis padres (74 y 71) se mudan con nosotros a Cascais; uno de ellos tiene una condición crónica controlada. Ya tienen NIF.',
  sections: withSibling(`
<section class="section plain" aria-labelledby="caminos">
  <div class="container narrow article-body">
    <h2 id="caminos">Dos caminos en el mercado portugués</h2>
    <p>En Portugal conviven dos formas de aceptar a una persona con antecedentes, y conviene conocer las dos antes de elegir:</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Formas de aceptación en el seguro de salud en Portugal</caption>
        <thead>
          <tr><th scope="col"></th><th scope="col">Con cuestionario médico</th><th scope="col">Sin cuestionario médico</th></tr>
        </thead>
        <tbody>
          <tr><td>Cómo se decide</td><td>La aseguradora valora sus respuestas antes de aceptar</td><td>No hay valoración previa; las enfermedades anteriores se analizan al tramitar un siniestro</td></tr>
          <tr><td>Enfermedades previas</td><td>Excluidas, cubiertas con sobreprima o aceptadas, según el caso</td><td>Sujetas a una carencia — por ejemplo, de un año — antes de poder cubrirse</td></tr>
          <tr><td>Certeza</td><td>Sabe desde el primer día qué queda fuera</td><td>Más flexible, pero con preguntas de la aseguradora si el historial reciente es intenso</td></tr>
          <tr><td>Edad</td><td>Suele haber edad máxima de entrada</td><td>Algunas pólizas no tienen edad máxima, pero pueden exigir un mínimo de dos personas aseguradas</td></tr>
        </tbody>
      </table>
    </div>
    <p>Ninguno de los dos es mejor en abstracto. Para una persona con una enfermedad grave y reciente, la certeza de un cuestionario puede valer más; para unos padres mayores con enfermedades controladas, una póliza sin cuestionario y sin edad máxima puede ser la única vía realista.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="carencia">
  <div class="container narrow article-body">
    <h2 id="carencia">Cómo funciona una carencia para enfermedades previas</h2>
    <p>En las pólizas sin cuestionario, las enfermedades anteriores a la contratación no se cubren durante un periodo inicial. Pasado ese plazo pueden quedar cubiertas, en los términos de la póliza. Dos detalles que conviene entender:</p>
    <ul>
      <li><strong>La aseguradora puede preguntar.</strong> Si en los meses siguientes a la contratación hay muchas consultas por el mismo problema de salud, es razonable que pida información para saber si era anterior.</li>
      <li><strong>La carencia no es una exclusión.</strong> Es una espera. Por eso la fecha de contratación importa: cuanto antes empiece a contar, antes termina.</li>
    </ul>
  </div>
</section>

<section class="section plain" aria-labelledby="sns">
  <div class="container narrow article-body">
    <h2 id="sns">El SNS como respaldo para lo que quede excluido</h2>
    <p>Una ventaja de vivir en Portugal que pocas familias latinoamericanas tienen en cuenta: una vez que son residentes e inscritos en el SNS, la sanidad pública atiende también las enfermedades que la póliza privada excluye. La combinación sensata suele ser:</p>
    <ul>
      <li><strong>El SNS</strong> para el seguimiento de la enfermedad crónica excluida, con su médico de familia.</li>
      <li><strong>La póliza privada</strong> para todo lo demás: especialistas sin espera, cirugía programada, urgencias en hospital privado.</li>
      <li><strong>Una póliza internacional</strong>, si interesa, para seguir tratándose con su médico de siempre en su país de origen.</li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="padres">
  <div class="container narrow article-body">
    <h2 id="padres">Padres mayores que vienen con la familia</h2>
    <p>Es muy habitual entre familias latinoamericanas: los abuelos acompañan el traslado. Para ellos, el seguro de salud es lo más difícil de resolver, y el que más se complica esperando.</p>
    <ol class="process-steps">
      <li><div><strong>NIF y domicilio en Portugal</strong><span> para ellos también: la póliza portuguesa los necesita.</span></div></li>
      <li><div><strong>Póliza sin edad máxima</strong><span>, si la hay disponible para su caso, contratada cuanto antes para que la carencia empiece a correr.</span></div></li>
      <li><div><strong>Inscripción en el SNS</strong><span> en cuanto tengan la documentación de residencia.</span></div></li>
      <li><div><strong>Medicación y especialista de origen</strong><span>: lleven informes recientes y la lista de tratamientos, con los nombres de los principios activos.</span></div></li>
    </ol>
  </div>
</section>

<section class="section plain" aria-labelledby="declarar">
  <div class="container narrow article-body">
    <h2 id="declarar">Declarar bien</h2>
    <p>Cuando hay cuestionario, responda de forma completa y veraz: la ley portuguesa permite a la aseguradora reducir o rechazar una indemnización si hubo omisiones o inexactitudes, y anular el contrato si fueron dolosas. Una exclusión clara aceptada por escrito es mucho mejor que una discusión en mitad de un tratamiento.</p>
    <p>Los datos de salud se dan directamente a la aseguradora, en la solicitud. No los pedimos por correo ni a través de este sitio.</p>
  </div>
</section>`, toSpain.preexisting),
  faqTitle: 'Enfermedades preexistentes en Portugal — preguntas',
  faq: [
    {
      q: '¿Hay seguros de salud en Portugal sin cuestionario médico?',
      a: '<p>Sí, algunos. En lugar de valorar su salud antes de aceptar, aplican una carencia a las enfermedades preexistentes y las analizan al tramitar un siniestro. Pueden exigir un mínimo de dos personas aseguradas. Le explicamos por escrito las condiciones exactas antes de contratar.</p>',
    },
    {
      q: 'Mis padres tienen más de 70 años. ¿Pueden contratar?',
      a: '<p>En algunas pólizas portuguesas no hay edad máxima de adhesión. Las condiciones — carencias, número mínimo de asegurados, capitales — varían, y las opciones se reducen con el tiempo. Necesitarán NIF y domicilio en Portugal.</p>',
    },
    {
      q: 'Si la póliza excluye mi enfermedad, ¿quién la trata?',
      a: '<p>Como residente inscrito en el SNS, la sanidad pública portuguesa. Muchas familias combinan el SNS para la enfermedad crónica con la póliza privada para todo lo demás.</p>',
    },
    {
      q: '¿Qué pasa si no declaro algo en el cuestionario?',
      a: '<p>La aseguradora puede reducir o rechazar la indemnización y, si la omisión fue intencionada, anular el contrato. Es el error más caro que se puede cometer con un seguro de salud.</p>',
    },
  ],
  related: [
    { url: '/es/seguro-salud-internacional/', label: 'Seguro de salud en Portugal' },
    { url: '/es/seguro-medico-visado-portugal/', label: 'Seguro médico para el visado portugués' },
    { url: '/es/seguros-portugal/', label: 'Seguros en Portugal: visión general' },
  ],
};
