/**
 * /es/seguro-salud-internacional/ — health insurance in Portugal.
 *
 * Search intent: "seguro de salud en Portugal", "seguro médico Portugal
 * extranjeros", "seguro de salud internacional Lisboa" — a Latin American
 * family that lives, or is about to live, in Portugal and needs to know how
 * the SNS, a Portuguese policy and an international policy fit together.
 *
 * October 2026 rewrite for the Latin American reader (the URL is kept; the
 * page is the Portugal member of the `health` cluster and pairs with the
 * Portugal health pages of the other markets).
 *
 * The angle: EU coordination (EHIC, S1) never applies to this reader, so the
 * private policy is the base, not a complement. The practical constraint that
 * shapes the order of events: Portuguese insurers issue a health policy to
 * someone with a residential address in Portugal, and require a Portuguese
 * NIF for the policyholder and every insured person, children included. The
 * visa itself lives on /es/seguro-medico-visado-portugal/. Underwriting and
 * pre-existing conditions are hedged throughout; insurers are never named.
 */
import { BREADCRUMB_PORTUGAL, withSibling, toSpain } from './shared.mjs';

export const HEALTH_PAGE = {
  slug: 'seguro-salud-internacional',
  url: '/es/seguro-salud-internacional/',
  cluster: 'health',
  title: 'Seguro de salud en Portugal para latinoamericanos | Adler & Rochefort',
  description:
    'Seguro de salud en Portugal para familias latinoamericanas: el SNS, la póliza portuguesa, la póliza internacional y cómo seguir atendiéndose en su país.',
  keywords:
    'seguro de salud Portugal, seguro médico Portugal extranjeros, seguro salud Portugal latinoamericanos, seguro de salud internacional Portugal, SNS Portugal extranjeros, número de utente, seguro médico Lisboa, seguro salud Portugal mexicanos, seguro salud Portugal venezolanos',
  eyebrow: 'Portugal · Salud',
  h1: 'Seguro de salud en Portugal: el SNS, la póliza portuguesa y la internacional',
  standfirst:
    'Para una familia que llega a Lisboa desde Caracas, Bogotá o Ciudad de México, el seguro de salud no es un complemento de la sanidad pública: durante los primeros meses es la única cobertura que tiene. Así encajan las tres piezas — y en este orden se resuelven.',
  published: '2026-09-26T09:00:00+00:00',
  modified: '2026-10-02T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_PORTUGAL, { name: 'Seguro de salud' }],
  pullquote: 'El seguro de salud se contrata con buena salud. Después solo se compra lo que la aseguradora quiera ofrecer.',
  schemaType: 'Article',
  formHeading: 'Solicite su propuesta de salud en Portugal',
  formBranch: 'Español · Salud',
  formSubject: 'Seguro de salud en Portugal',
  formCta: 'Solicitar la propuesta',
  formIntro:
    'Indíquenos quién debe quedar cubierto (edades), si ya tiene domicilio y NIF en Portugal y dónde quiere poder tratarse — también en su país de origen. No nos envíe información médica: el cuestionario de salud se hace directamente con la aseguradora.',
  formPlaceholder:
    'Por ejemplo: dos adultos (51 y 47) y dos hijos, llegamos a Lisboa en enero con visado D7, ya tenemos NIF; queremos poder atendernos también en México.',
  sections: withSibling(`
<section class="section plain" aria-labelledby="base">
  <div class="container narrow article-body">
    <h2 id="base">Por qué, para usted, la póliza privada es la base</h2>
    <p>Un ciudadano europeo que se muda a Portugal llega con su tarjeta sanitaria europea o con un formulario S1 que le da acceso a la sanidad pública desde el primer día. Para un ciudadano latinoamericano esa coordinación no existe. El acceso al <em>Serviço Nacional de Saúde</em> (SNS) llega con la residencia legal y la inscripción en el centro de salud — y eso lleva su tiempo.</p>
    <p>Entre la llegada y el momento en que el SNS funciona de verdad para su familia, la póliza privada es la cobertura. Y después, para muchas familias, sigue siéndolo: es la que decide a qué especialista se va, cuánto se espera y si se puede seguir atendiendo en su país.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="orden">
  <div class="container narrow article-body">
    <h2 id="orden">El orden importa: NIF, domicilio y póliza</h2>
    <p>Hay un detalle práctico que condiciona todo el calendario y que casi nadie explica: las aseguradoras portuguesas emiten las pólizas de salud a quien tiene <strong>domicilio de residencia en Portugal</strong>, y exigen un <strong>NIF portugués para el tomador y para cada persona asegurada</strong> — hijos incluidos. Tener NIF no basta si todavía no hay domicilio.</p>
    <ol class="process-steps">
      <li><div><strong>Para el visado</strong><span>, antes de viajar: normalmente un seguro de viaje con cobertura médica para el periodo inicial. Véase <a href="/es/seguro-medico-visado-portugal/">seguro médico para el visado portugués</a>.</span></div></li>
      <li><div><strong>NIF para toda la familia</strong><span>, también para los menores. Se puede obtener antes de llegar.</span></div></li>
      <li><div><strong>Domicilio en Portugal</strong><span> — contrato de alquiler o escritura — y, con él, la póliza portuguesa o la internacional definitiva.</span></div></li>
      <li><div><strong>Inscripción en el SNS</strong><span> en el centro de salud de su zona, cuando tenga la documentación de residencia.</span></div></li>
    </ol>
    <p>Una póliza internacional puede, según la aseguradora, contratarse antes de la llegada y cubrir la transición. Es una de las razones por las que la recomendamos a familias que se trasladan desde América.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="sns">
  <div class="container narrow article-body">
    <h2 id="sns">La sanidad pública portuguesa: el SNS</h2>
    <p>El SNS es accesible para quien reside legalmente en Portugal. El acceso se obtiene inscribiéndose en el centro de salud (<em>centro de saúde</em>) de su domicilio, normalmente con NIF, documento de identidad, justificante de domicilio y documentación de residencia. Tras la inscripción recibe un <em>número de utente</em> y, según la disponibilidad, se le asigna un <em>médico de família</em>.</p>
    <p>El médico de familia es la puerta de entrada y deriva al especialista. La asignación no es automática y en algunas zonas hay espera; los tiempos para especialista y cirugía programada varían mucho entre regiones. La urgencia está disponible en cualquier caso. No es un sistema contra el que haya que asegurarse, sino uno cuyas colas conviene poder evitar cuando algo es importante pero no urgente.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="poliza">
  <div class="container narrow article-body">
    <h2 id="poliza">Póliza portuguesa o internacional</h2>
    <p>Quien viene de México piensa en gastos médicos mayores; quien viene de Argentina o Colombia, en su prepaga. Las pólizas portuguesas se parecen más a lo segundo: se basan en un <strong>cuadro médico</strong> (<em>rede convencionada</em>), con un copago pequeño por consulta o prueba dentro de la red y reembolso según baremo fuera de ella.</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Póliza de salud portuguesa comparada con una póliza internacional</caption>
        <thead>
          <tr><th scope="col"></th><th scope="col">Póliza portuguesa</th><th scope="col">Póliza internacional</th></tr>
        </thead>
        <tbody>
          <tr><td>Dónde cubre</td><td>Portugal; en el extranjero, normalmente urgencias o reembolso limitado</td><td>Europa o el mundo, con o sin Estados Unidos — su país de origen incluido</td></tr>
          <tr><td>Médicos y hospitales</td><td>Red de la aseguradora en Portugal</td><td>Libre elección, a menudo con pago directo al hospital</td></tr>
          <tr><td>Capitales</td><td>Separados para ambulatorio y hospitalización, a veces modestos</td><td>Elevados, pensados para tratamientos graves</td></tr>
          <tr><td>Cuándo se contrata</td><td>Con domicilio en Portugal y NIF de cada asegurado</td><td>Según la aseguradora, también antes de llegar</td></tr>
          <tr><td>Para quién</td><td>Quien vive en Portugal y se trata en Portugal</td><td>Familias que viven entre Portugal y América, o que viajan mucho</td></tr>
        </tbody>
      </table>
    </div>
    <p>Las pólizas portuguesas indican los capitales, los copagos (<em>copagamentos</em>) y las carencias (<em>períodos de carência</em>) por cobertura. Algunas no tienen edad máxima de adhesión, lo que es decisivo para padres mayores. Se lo explicamos todo por escrito, en español, antes de firmar.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="origen">
  <div class="container narrow article-body">
    <h2 id="origen">Seguir atendiéndose en su país</h2>
    <p>«Queremos vivir en Lisboa, pero si hay que operarse preferimos hacerlo en Bogotá, con el médico de siempre.» Es razonable, y tiene solución — pero no en una póliza portuguesa corriente, que fuera de Portugal cubre normalmente solo urgencias en viaje.</p>
    <ul>
      <li>Una <strong>póliza internacional</strong> con un ámbito geográfico que incluya su país de origen permite tratarse allí en las mismas condiciones.</li>
      <li><strong>Estados Unidos</strong> casi siempre se contrata aparte, por su coste. Si la familia se atiende en Miami o en Houston, hay que decirlo desde el principio.</li>
      <li>Su <strong>póliza de origen</strong> puede tener sentido durante la transición, pero compruebe por escrito qué cubre si usted deja de residir en su país.</li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="carencias">
  <div class="container narrow article-body">
    <h2 id="carencias">Carencias, cuestionario de salud y enfermedades previas</h2>
    <p>Casi todas las pólizas de salud tienen carencias: plazos desde la contratación durante los cuales determinadas coberturas todavía no funcionan. Suelen ser cortas para consultas, más largas para cirugía programada y las más largas para embarazo y parto.</p>
    <p>Al contratar se rellena, normalmente, un cuestionario de salud (<em>questionário clínico</em>). Con esa base la aseguradora acepta en condiciones normales, excluye determinadas dolencias, aplica una sobreprima o rechaza. Algunas pólizas portuguesas no hacen cuestionario y aplican, en cambio, una carencia a las enfermedades preexistentes.</p>
    <div class="callout">
      <span class="callout-label">Lo más importante de esta página</span>
      Las enfermedades que existen antes de contratar (<em>doenças pré-existentes</em>) quedan <strong>normalmente excluidas</strong> o sujetas a condiciones. Omitirlas en el cuestionario es el camino más rápido hacia un siniestro rechazado. Véase <a href="/es/seguro-salud-preexistencias-portugal/">enfermedades preexistentes en Portugal</a>.
    </div>
    <p>Cada persona de la familia se valora por separado. Los hijos que estudian fuera — en Madrid, en Boston, de vuelta en su país — solo siguen cubiertos con una póliza cuyo ámbito lo permita.</p>
  </div>
</section>`, toSpain.health),
  faqTitle: 'Seguro de salud en Portugal — preguntas',
  faq: [
    {
      q: '¿Puedo contratar una póliza de salud portuguesa antes de llegar?',
      a: '<p>Normalmente no: las aseguradoras portuguesas emiten la póliza de salud a quien tiene domicilio de residencia en Portugal y piden el NIF portugués de cada asegurado. Para el visado y el periodo inicial se usa habitualmente un seguro de viaje; una póliza internacional puede, según la aseguradora, contratarse antes.</p>',
    },
    {
      q: '¿Mis hijos necesitan NIF para estar en la póliza?',
      a: '<p>Sí. Las aseguradoras portuguesas piden el NIF del tomador y de cada persona asegurada, también de los menores. Conviene solicitarlo para toda la familia al mismo tiempo.</p>',
    },
    {
      q: '¿Tengo derecho a la sanidad pública si resido en Portugal?',
      a: '<p>Quien reside legalmente puede inscribirse en el SNS en el centro de salud de su domicilio y obtener un <em>número de utente</em>. La documentación varía algo entre centros; normalmente NIF, documento de identidad, justificante de domicilio y documentación de residencia.</p>',
    },
    {
      q: '¿Cubre la póliza tratamientos en mi país de origen?',
      a: '<p>Una póliza portuguesa corriente, normalmente solo urgencias en viaje. Una póliza internacional con el ámbito geográfico adecuado, sí. Es una de las primeras preguntas que le hacemos.</p>',
    },
    {
      q: 'Mis padres tienen más de 70 años. ¿Pueden asegurarse?',
      a: '<p>Hay pólizas portuguesas sin edad máxima de adhesión, aunque con condiciones — por ejemplo, un mínimo de personas aseguradas o carencias para las enfermedades previas. Las opciones existen, pero se reducen con cada año que pasa. Díganoslo desde el principio.</p>',
    },
    {
      q: '¿Cubre una póliza privada una enfermedad que ya tengo?',
      a: '<p>Normalmente no de forma inmediata: las dolencias previas suelen excluirse o quedar sujetas a una carencia. Depende de la aseguradora y de la modalidad, y nunca está garantizado. Respondemos el cuestionario con veracidad y buscamos la cobertura realmente posible.</p>',
    },
  ],
  related: [
    { url: '/es/seguro-medico-visado-portugal/', label: 'Seguro médico para el visado portugués' },
    { url: '/es/seguro-salud-preexistencias-portugal/', label: 'Enfermedades preexistentes en Portugal' },
    { url: '/es/mudarse-a-portugal-seguros/', label: 'Mudarse a Portugal desde América Latina' },
  ],
};
