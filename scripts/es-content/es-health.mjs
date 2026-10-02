/**
 * /es/seguro-salud-espana/
 *
 * Search intent: "seguro de salud en España para extranjeros", "seguro
 * médico privado España latinoamericanos", "sanidad pública España
 * extranjeros" — a Latin American family already living in Spain, or about
 * to, working out how public and private healthcare fit together once the
 * visa is no longer the question.
 *
 * The Latin American angle: the reader's reference is the gastos médicos
 * mayores policy (Mexico) or the prepaga / medicina prepagada (Argentina,
 * Colombia) — catastrophic cover with a deductible, or a closed network. The
 * Spanish market sells day-to-day access through a cuadro médico, with
 * reembolso as the free-choice alternative. And the family usually wants to
 * keep being treated "at home" too, which a Spanish policy does not do. The
 * visa requirement itself lives on /es/seguro-medico-visado-espana/.
 */
import { BREADCRUMB_SPAIN, withSibling, toPortugal } from './shared.mjs';

export const ES_HEALTH_PAGE = {
  slug: 'seguro-salud-espana',
  url: '/es/seguro-salud-espana/',
  cluster: 'es-health',
  title: 'Seguro de salud en España para latinoamericanos | Adler & Rochefort',
  description:
    'Seguro de salud en España para familias latinoamericanas: sanidad pública, cuadro médico o reembolso, cobertura en su país de origen y enfermedades previas.',
  keywords:
    'seguro de salud España extranjeros, seguro médico privado España, seguro salud España latinoamericanos, seguro de reembolso España, sanidad pública España extranjeros, convenio especial Seguridad Social, seguro médico internacional España, seguro salud España mexicanos, seguro salud Madrid colombianos',
  eyebrow: 'España · Salud',
  h1: 'Seguro de salud en España: sanidad pública, póliza privada y su país de origen',
  standfirst:
    'La sanidad española tiene fama merecida, pero el acceso depende de que usted trabaje y cotice. Mientras tanto — y muchas veces también después —, la póliza privada es la que decide a qué médico va su familia, cuánto espera y si puede seguir atendiéndose en México, Bogotá o Miami.',
  published: '2026-10-02T09:00:00+00:00',
  modified: '2026-10-02T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_SPAIN, { name: 'Seguro de salud' }],
  pullquote: 'El seguro de salud se contrata mientras se está sano. En España, igual que en cualquier otro sitio.',
  schemaType: 'Article',
  formHeading: 'Solicite su propuesta de salud en España',
  formBranch: 'Español · Salud',
  formSubject: 'Seguro de salud en España',
  formCta: 'Solicitar propuesta',
  formIntro:
    'Cuéntenos quién debe quedar cubierto, dónde vive en España y qué espera de la póliza: cumplir un visado, complementar la sanidad pública o atenderse también fuera de España. Los datos de salud se dan después, directamente en la solicitud a la aseguradora.',
  formPlaceholder:
    'Por ejemplo: familia de cuatro (45, 43, 12 y 9) en Barcelona, él trabaja por cuenta ajena, queremos especialistas sin esperas y poder atendernos en Caracas y en Miami.',
  sections: withSibling(`
<section class="section plain" aria-labelledby="publica">
  <div class="container narrow article-body">
    <h2 id="publica">La sanidad pública: a quién cubre y cuándo</h2>
    <p>El Sistema Nacional de Salud español lo gestionan las comunidades autónomas, y el acceso no depende de la nacionalidad, sino de la situación de cada persona:</p>
    <ul>
      <li><strong>Si trabaja en España</strong> — por cuenta ajena o como autónomo — y cotiza a la Seguridad Social, usted y los familiares a su cargo tienen acceso a la sanidad pública.</li>
      <li><strong>Si vive de sus rentas</strong> — con visado de residencia no lucrativa, por ejemplo —, no tiene acceso automático. La póliza privada es su cobertura, y es además un requisito de su residencia.</li>
      <li><strong>Pasado un año de empadronamiento</strong>, quien no tiene derecho por otra vía puede, en determinadas condiciones, suscribir el llamado <em>convenio especial</em> con la sanidad pública, pagando una cuota mensual. No sustituye necesariamente a la póliza privada a efectos de extranjería; conviene confirmarlo antes de dar de baja nada.</li>
    </ul>
    <p>Las reglas concretas dependen de su caso y pueden cambiar. Lo que no cambia es la idea de fondo: hasta que usted cotice en España, la sanidad pública no es su red de seguridad.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="modalidades">
  <div class="container narrow article-body">
    <h2 id="modalidades">Cómo funciona una póliza privada española</h2>
    <p>Quien llega de México piensa en «gastos médicos mayores»: una póliza para lo grande, con deducible y coaseguro, que no se usa para el resfriado. Quien llega de Argentina o Colombia piensa en su prepaga. El mercado español se organiza de otra manera:</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Modalidades de seguro de salud privado en España</caption>
        <thead>
          <tr><th scope="col">Modalidad</th><th scope="col">Cómo funciona</th><th scope="col">Para quién</th></tr>
        </thead>
        <tbody>
          <tr><td>Asistencia sanitaria (cuadro médico)</td><td>Acceso a los médicos y hospitales concertados por la aseguradora; usted no paga, o paga un pequeño copago por acto</td><td>Quien vive en España y acepta la red de la compañía. Es la modalidad más común</td></tr>
          <tr><td>Reembolso</td><td>Libre elección de médico y hospital; la aseguradora reembolsa un porcentaje de la factura, con límites</td><td>Quien quiere elegir especialista o atenderse fuera de la red, en España o en el extranjero</td></tr>
          <tr><td>Mixta</td><td>Cuadro médico más una parte de reembolso</td><td>Familias que usan la red a diario y quieren libertad para lo importante</td></tr>
          <tr><td>Internacional</td><td>Cobertura en varios países, normalmente con libre elección y pago directo al hospital</td><td>Familias que viven entre España y América, o que quieren seguir atendiéndose en su país</td></tr>
        </tbody>
      </table>
    </div>
    <p>Una póliza española de cuadro médico cubre la asistencia en España y, fuera, normalmente solo las urgencias durante un viaje. Para atenderse de forma programada en su país de origen o en Estados Unidos hace falta otra cosa.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="origen">
  <div class="container narrow article-body">
    <h2 id="origen">Seguir atendiéndose en su país de origen</h2>
    <p>Es la petición que más oímos: «Queremos vivir en España, pero si mi madre necesita operarse prefiere hacerlo en Monterrey, con su médico de siempre». Tiene solución, pero no en una póliza española corriente.</p>
    <ul>
      <li><strong>Una póliza internacional</strong> con ámbito geográfico que incluya su país de origen — y, si interesa, Estados Unidos, que casi siempre se contrata aparte por su coste — permite tratarse en cualquiera de ellos con las mismas condiciones.</li>
      <li><strong>Si además necesita cumplir el requisito del visado</strong>, hay que comprobar que la póliza internacional lo cumpla o combinarla con una póliza española. Véase <a href="/es/seguro-medico-visado-espana/">seguro médico para el visado español</a>.</li>
      <li><strong>Su póliza de gastos médicos mayores</strong> de origen puede tener sentido mantenerla mientras la transición dura, pero lea con cuidado qué cubre si usted deja de residir en su país: muchas pólizas locales lo condicionan a la residencia.</li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="salud-previa">
  <div class="container narrow article-body">
    <h2 id="salud-previa">Cuestionario de salud, edad y enfermedades previas</h2>
    <p>La aseguradora española pregunta por la salud de cada persona antes de aceptar. Las enfermedades conocidas pueden quedar excluidas, cubrirse con un recargo o, en algunos casos, aceptarse sin más. Muchas compañías fijan además una edad máxima para contratar.</p>
    <p>Dos recomendaciones que repetimos siempre:</p>
    <ul>
      <li><strong>Contrate antes, no después.</strong> Cada mes que pasa es un mes en el que algo puede convertirse en enfermedad conocida.</li>
      <li><strong>Responda al cuestionario de forma completa.</strong> Una omisión es el motivo más frecuente de rechazo de un siniestro. Los datos de salud se dan directamente a la aseguradora en la solicitud, nunca en un formulario web.</li>
    </ul>
    <p>Las pólizas ordinarias pueden tener carencias para el parto, ciertas cirugías o pruebas de alta tecnología. Si hay un embarazo en el horizonte, díganoslo antes de elegir. Véase también <a href="/es/seguro-salud-preexistencias-espana/">enfermedades preexistentes en España</a>.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="lista">
  <div class="container narrow article-body">
    <h2 id="lista">Antes de firmar, compruebe</h2>
    <ul>
      <li>Si el cuadro médico incluye los especialistas y hospitales que su familia usará en su ciudad.</li>
      <li>Los copagos por acto, si los hay, y su tope anual.</li>
      <li>Las carencias, sobre todo parto, cirugía y pruebas diagnósticas complejas.</li>
      <li>La cobertura fuera de España: solo urgencias en viaje, o asistencia programada en su país.</li>
      <li>La repatriación y la asistencia en viaje, si la familia viaja a menudo a América.</li>
      <li>El tratamiento de las enfermedades previas, por escrito, persona por persona.</li>
      <li>La edad máxima de permanencia: que la póliza no se termine justo cuando más falta hace.</li>
    </ul>
  </div>
</section>`, toPortugal.health),
  faqTitle: 'Seguro de salud en España — preguntas',
  faq: [
    {
      q: '¿Tengo derecho a la sanidad pública española como latinoamericano?',
      a: '<p>Si trabaja en España y cotiza a la Seguridad Social, sí, junto con los familiares a su cargo. Si vive de sus rentas, no de forma automática: su cobertura es la póliza privada, que además exige su visado. El convenio especial es una vía posible tras un año de empadronamiento, con condiciones.</p>',
    },
    {
      q: '¿Qué diferencia hay entre una póliza de cuadro médico y una de reembolso?',
      a: '<p>Con cuadro médico usted va a los profesionales concertados y la aseguradora paga directamente. Con reembolso elige libremente, paga la factura y la aseguradora le devuelve un porcentaje con límites. El reembolso es más caro, pero es la modalidad que da libertad real, también fuera de España.</p>',
    },
    {
      q: '¿Puedo atenderme en mi país con una póliza española?',
      a: '<p>Una póliza española corriente cubre fuera de España solo las urgencias durante un viaje. Para atenderse de forma programada en su país de origen hace falta una póliza internacional, o una de reembolso con ámbito mundial. Le explicamos las opciones según dónde quiera poder tratarse.</p>',
    },
    {
      q: '¿Hay edad máxima para contratar?',
      a: '<p>Muchas aseguradoras fijan una edad máxima de entrada, y las condiciones para personas mayores cambian bastante de una compañía a otra. Cuanto antes se contrate, más opciones hay. Si viaja con sus padres, díganoslo desde el principio.</p>',
    },
    {
      q: 'Ya tengo seguro de gastos médicos mayores en México. ¿Lo mantengo?',
      a: '<p>Puede tener sentido durante la transición, pero compruebe por escrito qué cubre si usted deja de residir en México: muchas pólizas locales limitan la cobertura en el extranjero o la condicionan a la residencia. No la cancele antes de tener resuelta la cobertura en España.</p>',
    },
  ],
  related: [
    { url: '/es/seguro-medico-visado-espana/', label: 'Seguro médico para el visado español' },
    { url: '/es/seguro-salud-preexistencias-espana/', label: 'Enfermedades preexistentes en España' },
    { url: '/es/seguros-espana/', label: 'Seguros en España: visión general' },
  ],
};
