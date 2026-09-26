/**
 * /es/seguro-salud-internacional/
 *
 * Search intent: "seguro de salud internacional", "seguro médico Portugal" —
 * a family living between Spain, Portugal and Latin America working out how
 * public healthcare works on each side and what private cover must add.
 *
 * Spanish-specific hooks: the Spanish reader already buys private health
 * insurance on top of the public system as a matter of course, so the
 * question is not "why private?" but "which policy travels with us". The
 * tarjeta sanitaria europea is for temporary stays only; the S1 matters for
 * Spanish pensioners; Latin American families are outside EU coordination
 * altogether. Underwriting and pre-existing conditions are hedged throughout.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';

export const HEALTH_PAGE = {
  slug: 'seguro-salud-internacional',
  url: '/es/seguro-salud-internacional/',
  cluster: 'health',
  title: 'Seguro de salud internacional para familias | Adler & Rochefort',
  description:
    'Seguro de salud internacional para familias en España y Portugal: libre elección de médico, tratamiento en el extranjero y cómo encaja con la sanidad pública.',
  keywords:
    'seguro de salud internacional, seguro médico internacional familia, seguro de salud Portugal, seguro médico Lisboa, SNS Portugal, tarjeta sanitaria europea Portugal, formulario S1 Portugal, seguro salud expatriados',
  eyebrow: 'Salud internacional',
  h1: 'Seguro de salud internacional para familias en España y Portugal',
  standfirst:
    'Para una familia que vive entre Madrid, Lisboa y el otro lado del Atlántico, el seguro de salud es una cuestión de libertad: elegir médico y hospital, también fuera del país de residencia. Así funciona una póliza internacional, así encaja con la sanidad pública y esto es lo que la aseguradora pregunta antes de aceptar.',
  published: '2026-09-26T09:00:00+00:00',
  modified: '2026-09-26T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Salud internacional' }],
  pullquote: 'El seguro de salud se contrata con buena salud. Después solo se compra lo que la aseguradora quiera ofrecer.',
  schemaType: 'Article',
  formHeading: 'Solicite una propuesta de salud internacional',
  formBranch: 'Español · Salud',
  formSubject: 'Seguro de salud internacional',
  formCta: 'Solicitar la propuesta',
  formIntro:
    'Indíquenos quién debe quedar cubierto, dónde vive la familia y dónde quiere poder tratarse. No nos envíe información médica: el cuestionario de salud se hace directamente con la aseguradora.',
  formPlaceholder:
    'Por ejemplo: dos adultos (51 y 47) y dos hijos, vivimos en Lisboa, pasamos temporadas en Madrid y en México; queremos cobertura en Europa y en América.',
  sections: `
<section class="section plain" aria-labelledby="internacional">
  <div class="container narrow article-body">
    <h2 id="internacional">Qué aporta una póliza internacional</h2>
    <p>En España, contratar un seguro médico privado además de la sanidad pública es algo corriente. La dificultad empieza cuando la vida de la familia deja de caber en un solo país: las pólizas nacionales, en España como en Portugal, se construyen alrededor de un cuadro médico y de un territorio. Un <strong>seguro de salud internacional</strong> parte de otra lógica:</p>
    <ul>
      <li><strong>Libre elección de médico y hospital</strong> — en España, en Portugal y en el extranjero, no solo dentro de un cuadro médico local.</li>
      <li><strong>Capitales anuales elevados</strong> para hospitalización, cirugía y enfermedades graves, de modo que la cobertura no se agote a mitad de un tratamiento.</li>
      <li><strong>Ámbito geográfico a medida</strong> — Europa o todo el mundo, con o sin Estados Unidos.</li>
      <li><strong>Evacuación y repatriación</strong> cuando el tratamiento necesario no está disponible donde uno se encuentra.</li>
      <li><strong>Una sola póliza para toda la familia</strong>, que sigue cubriendo si se traslada de país.</li>
    </ul>
    <p>Qué solución conviene — internacional o nacional, amplia o más acotada — depende de dónde vive y viaja la familia, de las edades y del resultado de la valoración médica. Comparamos las condiciones y le damos la recomendación por escrito.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="sns">
  <div class="container narrow article-body">
    <h2 id="sns">La sanidad pública portuguesa: el SNS</h2>
    <p>El <em>Serviço Nacional de Saúde</em> es el sistema público portugués, accesible para quien reside legalmente en el país. El acceso se obtiene inscribiéndose en el centro de salud (<em>centro de saúde</em>) correspondiente a su domicilio — normalmente con NIF, documento de identidad, justificante de domicilio y documentación de residencia. Tras la inscripción recibe un <em>número de utente</em> y, según la disponibilidad, se le asigna un <em>médico de família</em>.</p>
    <p>La lógica es conocida para quien viene del sistema español: el médico de familia es la puerta de entrada y deriva al especialista. La diferencia práctica es que la asignación de médico no es automática y en algunas zonas hay espera. Los tiempos para especialista y para cirugía programada varían mucho entre regiones y especialidades.</p>
    <p>La urgencia está disponible en cualquier caso, y los copagos del SNS son bajos. No es un sistema contra el que haya que asegurarse; es un sistema cuyas colas conviene poder evitar cuando algo es importante pero no urgente.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="tarjeta">
  <div class="container narrow article-body">
    <h2 id="tarjeta">Tarjeta sanitaria europea, formulario S1 y familias no comunitarias</h2>
    <p>Esta es la parte que más a menudo se pasa por alto, porque parece un trámite. Decide si tiene acceso a la atención médica durante los primeros meses.</p>
    <h3>La tarjeta sanitaria europea</h3>
    <p>Está pensada para <strong>estancias temporales</strong> — vacaciones, viajes de trabajo, visitas cortas. No es una base para recibir tratamiento cuando se ha trasladado la residencia a otro país. Una vez que vive en Portugal y deja de estar cubierto por el sistema español, la tarjeta no cumple su función aunque siga vigente en la cartera.</p>
    <h3>El formulario S1</h3>
    <p>Para determinados grupos — en particular pensionistas con pensión española y trabajadores desplazados — existe un mecanismo europeo por el que el derecho a la asistencia sigue al titular: el documento S1, emitido por la institución del país que sigue siendo competente. Inscrito en Portugal, da acceso al SNS en las mismas condiciones que un residente. Es coordinación de la seguridad social, no un seguro privado; no emitimos estos documentos ni asesoramos ante las administraciones. Lo mencionamos porque cambia por completo el cálculo.</p>
    <h3>Familias de fuera de la Unión Europea</h3>
    <p>Para una familia mexicana, venezolana, argentina o colombiana que se instala en Lisboa o en Madrid, la coordinación europea no se aplica. El acceso a la sanidad pública depende de la residencia legal y de los trámites de cada país, y en el proceso de residencia suele pedirse un seguro de salud privado. Por eso, para estas familias, la póliza privada no es un complemento: es la base de la cobertura desde el primer día.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="poliza">
  <div class="container narrow article-body">
    <h2 id="poliza">Cómo está hecha una póliza privada</h2>
    <p>Las pólizas nacionales portuguesas se basan casi siempre en un <strong>cuadro médico</strong> (<em>rede convencionada</em>): dentro de la red se paga un copago fijo y bajo por consulta o prueba; fuera de ella rige el reembolso según baremo, con una parte mayor a su cargo. Es la misma lógica que el seguro médico español con cuadro médico, y por eso el cuadro es una de las primeras preguntas que hacemos. Una póliza con buen baremo y sin hospital a una distancia razonable no es una buena póliza.</p>
    <p>Los elementos que conviene conocer de cualquier propuesta, nacional o internacional:</p>
    <ul>
      <li><strong>Capital anual</strong> — separado para ambulatorio y para hospitalización, a menudo con importes muy distintos.</li>
      <li><strong>Copago</strong> (<em>copagamento</em>) — importe o porcentaje por acto; dentro de la red, normalmente pequeño.</li>
      <li><strong>Carencias</strong> (<em>períodos de carência</em>) — véase más abajo.</li>
      <li><strong>Ámbito geográfico</strong> — si la póliza cubre en España o en América, y de qué forma.</li>
      <li><strong>Edad de contratación y edad máxima</strong> — los límites varían entre aseguradoras y a menudo son decisivos.</li>
    </ul>
  </div>
</section>

<section class="section plain" aria-labelledby="carencias">
  <div class="container narrow article-body">
    <h2 id="carencias">Carencias, cuestionario de salud y enfermedades preexistentes</h2>
    <h3>Carencias</h3>
    <p>Casi todas las pólizas de salud tienen carencias: plazos desde la contratación durante los cuales determinadas coberturas aún no pueden utilizarse. Suelen ser cortas para consultas, más largas para cirugía programada y las más largas para embarazo y parto. Su duración depende de la aseguradora y de la modalidad; se la indicamos siempre por escrito antes de contratar.</p>
    <h3>Cuestionario de salud (<em>questionário clínico</em>)</h3>
    <p>Al contratar se rellena una declaración de salud; a veces se piden informes o un reconocimiento. Con esa base la aseguradora decide: aceptación en condiciones normales, aceptación con exclusión de determinadas dolencias, aceptación con sobreprima o rechazo. No influimos en esa decisión ni prometemos su resultado.</p>
    <div class="callout">
      <span class="callout-label">Lo más importante de esta página</span>
      Las enfermedades y dolencias que existen antes de contratar (<em>doenças pré-existentes</em>) quedan <strong>normalmente excluidas</strong>. Hay modalidades y programas colectivos en los que parte de ellas puede quedar cubierta tras un plazo o tras una valoración individual — depende de la aseguradora, de la modalidad y de la valoración, y nunca está decidido de antemano. Al mismo tiempo, omitir información en el cuestionario es el camino más rápido hacia un rechazo en el siniestro. Respondemos con veracidad y buscamos la cobertura que realmente es posible.
    </div>
    <h3>Por qué la edad importa tanto</h3>
    <p>La prima aumenta con la edad y, por encima de ciertos límites, algunas aseguradoras no aceptan nuevas pólizas. Y hay algo más sencillo: cuanto más tarde se contrata, más probable es que algo ya esté diagnosticado y pase a ser preexistente.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="familia">
  <div class="container narrow article-body">
    <h2 id="familia">La cobertura familiar</h2>
    <ul>
      <li><strong>Cada persona se valora por separado.</strong> Es perfectamente posible que una sea aceptada en condiciones normales y otra con la exclusión de una dolencia concreta.</li>
      <li><strong>Hijos</strong> — compruebe si están incluidas vacunas, revisiones y odontología, y hasta qué edad pueden seguir en la póliza familiar.</li>
      <li><strong>Hijos que estudian fuera</strong> — una póliza internacional les sigue a Londres, a Boston o a Madrid; una nacional, normalmente no.</li>
      <li><strong>Embarazo y parto</strong> tienen normalmente la carencia más larga. Es uno de los pocos casos en que la fecha de contratación hay que calcularla en serio.</li>
    </ul>
  </div>
</section>

<section class="section plain" aria-labelledby="residencia">
  <div class="container narrow article-body">
    <h2 id="residencia">Seguro y trámites de residencia</h2>
    <p>Una pregunta muy habitual, cuya respuesta debe ser prudente. <strong>No podemos confirmar que una póliza cumpla los requisitos de un procedimiento concreto de residencia o de visado.</strong> Los requisitos los fijan las autoridades, varían según el tipo de solicitud y la situación del solicitante, y pueden cambiar. La valoración la hace la administración, y la interpretación de las normas, un asesor jurídico.</p>
    <p>Lo que sí hacemos: conseguir un seguro de salud con una cobertura, unos capitales y un ámbito geográfico determinados, y entregarle la documentación y la confirmación por escrito. Si su asesor le indica unos mínimos, adaptamos la propuesta a ellos y le señalamos con claridad qué cubre la póliza y qué no.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="lista">
  <div class="container narrow article-body">
    <h2 id="lista">Lista de comprobación</h2>
    <ol class="process-steps">
      <li><div><strong>Inscripción en el SNS</strong><span> hecha o prevista: <em>centro de saúde</em>, <em>número de utente</em>.</span></div></li>
      <li><div><strong>Su situación en el sistema de origen</strong><span> aclarada por escrito, y comprobado si le corresponde el S1.</span></div></li>
      <li><div><strong>El ámbito geográfico</strong><span> incluye todos los países donde vive, trabaja o estudia la familia.</span></div></li>
      <li><div><strong>Las carencias</strong><span> son conocidas para cada cobertura relevante — sobre todo cirugía programada o embarazo.</span></div></li>
      <li><div><strong>El cuestionario de salud</strong><span> está respondido con veracidad, y la decisión de la aseguradora, por escrito antes del inicio.</span></div></li>
      <li><div><strong>Capitales y copagos</strong><span> entendidos por separado para ambulatorio y hospitalización.</span></div></li>
    </ol>
  </div>
</section>`,
  faqTitle: 'Seguro de salud internacional — preguntas',
  faq: [
    {
      q: '¿Qué diferencia hay entre un seguro de salud internacional y uno nacional?',
      a: '<p>Una póliza nacional, en España o en Portugal, se construye alrededor de un cuadro médico local y cubre sobre todo en ese país. Una póliza internacional da libre elección de médico y hospital en varios países, capitales anuales más altos y, a menudo, evacuación y repatriación. Para familias que viven entre varios países suele ser la solución más adecuada; lo que puede contratarse depende de la edad y de la valoración médica.</p>',
    },
    {
      q: '¿Tengo derecho a la sanidad pública si resido en Portugal?',
      a: '<p>Quien reside legalmente puede inscribirse en el SNS en el centro de salud de su domicilio y obtener un <em>número de utente</em>. La documentación exigida varía algo entre centros; normalmente NIF, documento de identidad, justificante de domicilio y documentación de residencia. Las condiciones de acceso las fijan las autoridades, no la aseguradora.</p>',
    },
    {
      q: '¿Cubre una póliza privada una enfermedad que ya tengo?',
      a: '<p>Normalmente no: las dolencias existentes antes de contratar suelen quedar excluidas. En algunas modalidades y programas colectivos parte de ellas puede cubrirse tras un plazo o una valoración individual, pero depende de la aseguradora y de la modalidad y nunca está garantizado. Respondemos siempre el cuestionario con veracidad y buscamos la cobertura realmente posible.</p>',
    },
    {
      q: '¿Puedo usar la tarjeta sanitaria europea después de mudarme a Portugal?',
      a: '<p>No como base de su cobertura. La tarjeta sanitaria europea sirve para estancias temporales, no para quien ha trasladado su residencia. Tras el traslado, la base es la inscripción en el SNS como residente y, en ciertos casos — por ejemplo, pensionistas con pensión española —, el documento S1.</p>',
    },
    {
      q: 'Somos una familia venezolana que se instala en Lisboa. ¿Qué necesitamos?',
      a: '<p>Para ciudadanos de fuera de la Unión Europea no se aplica la coordinación europea, y en el proceso de residencia suele pedirse un seguro de salud privado. Por eso recomendamos contratar la póliza — idealmente internacional — antes del traslado. No podemos confirmar que una póliza cumpla un requisito administrativo concreto; sí adaptarla a los mínimos que le indique su asesor.</p>',
    },
    {
      q: '¿Me cubre la póliza cuando estoy en España o en América?',
      a: '<p>Depende del ámbito geográfico. Algunas pólizas nacionales portuguesas cubren en el extranjero solo urgencias o mediante reembolso; otras, solo en Portugal. Una póliza internacional define su ámbito — Europa, mundo sin Estados Unidos o mundo entero — y es una de las primeras preguntas que le hacemos.</p>',
    },
  ],
  related: [
    { url: '/es/mudarse-a-portugal-seguros/', label: 'Mudarse a Portugal: los seguros en el orden correcto' },
    { url: '/es/guia-seguros-portugal-espana/', label: 'Guía de seguros en Portugal y España' },
  ],
};
