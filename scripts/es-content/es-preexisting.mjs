/**
 * /es/seguro-salud-preexistencias-espana/
 *
 * Search intent: "seguro médico con preexistencias España", "seguro de salud
 * enfermedad crónica España extranjeros", "seguro visado España diabetes" —
 * a Latin American family with a known condition (diabetes, hypertension,
 * a past cancer, a heart problem) that needs cover in Spain and fears it
 * will be refused or that the visa will be compromised.
 *
 * The angle: three underwriting routes (full questionnaire, moratorium,
 * continuation from an existing international policy) explained in plain
 * Spanish, the visa constraint (no carencias) that removes the "cover after
 * a waiting period" option from Spanish visa policies, and the fact that
 * outpatient pharmacy is usually outside Spanish private policies — which
 * matters more to a chronic patient than any hospital limit. Hedged
 * throughout: every acceptance is individual.
 */
import { BREADCRUMB_SPAIN, withSibling, toPortugal } from './shared.mjs';

export const ES_PREEXISTING_PAGE = {
  slug: 'seguro-salud-preexistencias-espana',
  url: '/es/seguro-salud-preexistencias-espana/',
  cluster: 'es-preexisting',
  title: 'Seguro de salud con preexistencias en España | Adler & Rochefort',
  description:
    'Enfermedades preexistentes y seguro de salud en España: cuestionario, exclusiones, moratoria, pólizas internacionales y el requisito del visado.',
  keywords:
    'seguro médico preexistencias España, seguro salud enfermedad crónica España, seguro médico diabetes España, seguro salud hipertensión extranjeros, preexistencias visado no lucrativo, cuestionario de salud seguro, seguro internacional moratoria, seguro salud cáncer superado España',
  eyebrow: 'España · Salud',
  h1: 'Seguro de salud en España con una enfermedad previa',
  standfirst:
    'Una hipertensión controlada, una diabetes, un cáncer superado hace años: casi todas las familias tienen algo que declarar. No impide asegurarse en España, ni obtener el visado. Lo que cambia es qué queda cubierto, y eso se decide antes de firmar — no el día del siniestro.',
  published: '2026-10-02T09:00:00+00:00',
  modified: '2026-10-02T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_SPAIN, { name: 'Enfermedades preexistentes' }],
  pullquote: 'Una exclusión aceptada por escrito es una decisión. Una omisión en el cuestionario es un siniestro rechazado.',
  schemaType: 'Article',
  formHeading: 'Consulte su caso con una enfermedad previa',
  formBranch: 'Español · Salud',
  formSubject: 'Salud con preexistencias en España',
  formCta: 'Enviar consulta',
  formIntro:
    'Indíquenos quién debe quedar cubierto (edades), dónde vive o vivirá y si necesita la póliza para un visado. No incluya aquí información médica: la daremos por el canal adecuado, directamente en la solicitud a la aseguradora.',
  formPlaceholder:
    'Por ejemplo: matrimonio de 62 y 60 años, nos mudamos de Lima a Málaga con visado no lucrativo; uno de los dos tiene una condición crónica controlada.',
  sections: withSibling(`
<section class="section plain" aria-labelledby="como">
  <div class="container narrow article-body">
    <h2 id="como">Cómo trata una aseguradora una enfermedad conocida</h2>
    <p>Antes de aceptar, la aseguradora pide a cada persona un cuestionario de salud. Con esa información puede hacer, básicamente, una de estas cosas:</p>
    <ul>
      <li><strong>Aceptar sin restricciones</strong>, cuando la enfermedad es menor o está resuelta.</li>
      <li><strong>Excluir la enfermedad declarada</strong> — y a veces todo lo relacionado con ella —, cubriendo todo lo demás.</li>
      <li><strong>Aceptar con un recargo</strong> en la prima.</li>
      <li><strong>Rechazar la solicitud</strong>, normalmente en casos graves o a edades avanzadas.</li>
    </ul>
    <p>La decisión es individual y varía mucho de una aseguradora a otra. Por eso no tiene sentido comparar primas sin comparar antes cómo trata cada compañía su caso concreto.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="visado">
  <div class="container narrow article-body">
    <h2 id="visado">El requisito del visado lo complica — un poco</h2>
    <p>En el mercado ordinario, algunas aseguradoras ofrecen cubrir ciertas enfermedades previas después de un periodo de carencia. Para el visado de residencia no lucrativa esa vía se cierra: la póliza no puede tener carencias. Lo que queda es la aceptación con o sin exclusión.</p>
    <div class="callout">
      <span class="callout-label">Lo que tranquiliza</span>
      Una exclusión no impide obtener el visado. El consulado comprueba que la póliza tenga cobertura completa, sin copagos ni carencias; no exige que cubra sus enfermedades previas. Lo que conviene es saber, antes de firmar y por escrito, qué no estará cubierto — y prever cómo se va a atender esa enfermedad en España.
    </div>
  </div>
</section>

<section class="section plain" aria-labelledby="internacional">
  <div class="container narrow article-body">
    <h2 id="internacional">Pólizas internacionales: tres formas de aceptación</h2>
    <p>Las pólizas internacionales de salud trabajan con fórmulas que el mercado español ordinario apenas usa, y que pueden ser muy útiles para una familia que llega de América:</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Formas de aceptación en pólizas de salud internacionales</caption>
        <thead>
          <tr><th scope="col">Fórmula</th><th scope="col">Cómo funciona</th><th scope="col">Cuándo conviene</th></tr>
        </thead>
        <tbody>
          <tr><td>Cuestionario completo</td><td>Usted declara todo; la aseguradora decide de antemano qué excluye</td><td>Cuando quiere certeza desde el primer día</td></tr>
          <tr><td>Moratoria</td><td>Sin cuestionario; las enfermedades de los últimos años quedan fuera hasta que pase un periodo sin síntomas ni tratamiento</td><td>Cuando las enfermedades previas son antiguas o menores</td></tr>
          <tr><td>Continuidad de una póliza internacional anterior</td><td>La nueva aseguradora mantiene las condiciones de aceptación de la póliza que usted ya tenía</td><td>Cuando ya tiene una póliza internacional y quiere cambiar sin perder cobertura</td></tr>
        </tbody>
      </table>
    </div>
    <p>Las condiciones exactas dependen de la aseguradora y del plan. Y si la póliza va a servir también para el visado, hay que comprobar además que cumpla los requisitos españoles.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="cronica">
  <div class="container narrow article-body">
    <h2 id="cronica">Lo que importa de verdad a un paciente crónico</h2>
    <p>Quien convive con una enfermedad crónica no se juega casi nunca el seguro en una gran hospitalización, sino en lo de todos los días:</p>
    <ul>
      <li><strong>La farmacia.</strong> Las pólizas privadas españolas normalmente no cubren los medicamentos que se compran en la farmacia fuera del hospital. Para un tratamiento continuado, ese coste va aparte.</li>
      <li><strong>Las revisiones y pruebas periódicas.</strong> Si la enfermedad está excluida, sus controles también lo están.</li>
      <li><strong>La continuidad con su médico.</strong> Si quiere seguir con su especialista en su país, piense en una póliza que cubra allí, o en cómo coordinar los dos lados.</li>
    </ul>
    <p>Por eso, en estos casos, la pregunta útil no es «¿me aceptan?», sino «¿cómo voy a atender esta enfermedad en España, y quién lo paga?». Respondida esa, la elección de póliza suele ser evidente.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="declarar">
  <div class="container narrow article-body">
    <h2 id="declarar">Declarar bien: la regla que protege su póliza</h2>
    <p>La ley española obliga al asegurado a responder con veracidad al cuestionario. Si oculta algo de mala fe, la aseguradora puede quedar liberada de pagar; si se equivoca sin intención, puede reducir la indemnización. En ambos casos, el problema aparece cuando más se necesita la póliza.</p>
    <ul>
      <li>Responda pensando en lo que le han diagnosticado, tratado o estudiado, aunque hoy esté bien.</li>
      <li>Si duda, declare y explique. Una exclusión clara es mejor que una discusión posterior.</li>
      <li>Guarde copia del cuestionario firmado.</li>
    </ul>
    <p>Los datos de salud se dan directamente a la aseguradora, en su solicitud. Nosotros no los pedimos por correo ni a través de este sitio.</p>
  </div>
</section>`, toPortugal.preexisting),
  faqTitle: 'Enfermedades preexistentes en España — preguntas',
  faq: [
    {
      q: '¿Puedo conseguir el visado si tengo una enfermedad crónica?',
      a: '<p>Sí. El visado exige una póliza con cobertura completa, sin copagos ni carencias; no exige que la póliza cubra sus enfermedades previas. La aseguradora puede excluirlas, y lo importante es que usted lo sepa por escrito antes de firmar.</p>',
    },
    {
      q: '¿Hay alguna aseguradora que cubra las preexistencias?',
      a: '<p>Depende de la enfermedad, de cuándo se diagnosticó y de cómo está ahora. Algunas compañías aceptan enfermedades controladas, otras las excluyen y otras aplican un recargo. Las pólizas internacionales ofrecen además fórmulas como la moratoria. Comparamos cómo trata cada una su caso antes de hablar de prima.</p>',
    },
    {
      q: '¿Qué pasa si no declaro una enfermedad?',
      a: '<p>Si se descubre al tramitar un siniestro, la aseguradora puede negarse a pagar o reducir la indemnización, y en caso de mala fe, quedar liberada. Es el error más caro que se puede cometer con un seguro de salud.</p>',
    },
    {
      q: 'Tuve un cáncer hace años y estoy curado. ¿Tengo que declararlo?',
      a: '<p>Responda a lo que pregunta el cuestionario, en los términos y plazos que indica. Muchas aseguradoras tratan de forma distinta un cáncer superado hace tiempo. Si tiene dudas sobre cómo responder, consúltenos antes de enviar la solicitud.</p>',
    },
    {
      q: 'Tengo una póliza internacional en mi país. ¿Puedo cambiarla sin perder la cobertura de mis enfermedades?',
      a: '<p>A veces sí: algunas aseguradoras internacionales aceptan mantener las condiciones de aceptación de una póliza internacional anterior. No cancele la póliza actual hasta tener la nueva aceptada por escrito.</p>',
    },
  ],
  related: [
    { url: '/es/seguro-salud-espana/', label: 'Seguro de salud en España' },
    { url: '/es/seguro-medico-visado-espana/', label: 'Seguro médico para el visado español' },
    { url: '/es/seguros-espana/', label: 'Seguros en España: visión general' },
  ],
};
