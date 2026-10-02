/**
 * /es/seguros-espana/ — the Spain landing page of the Spanish cluster.
 *
 * Search intent: "seguros en España para extranjeros", "seguros para
 * latinoamericanos en España", "vivir en España seguros" — a Latin American
 * family that has moved, or is moving, to Madrid, Barcelona, Valencia, Málaga
 * or Marbella, or that has bought a home there, and wants the Spanish market
 * explained from its own starting point.
 *
 * The Latin American angle: the reader speaks the language but not the
 * vocabulary (franquicia, not deducible; copago, not coaseguro; carencia, not
 * periodo de espera), meets a public catastrophe pool — the Consorcio de
 * Compensación de Seguros — that has no real equivalent at home, and arrives
 * as a third-country national whose visa already prescribes one of the
 * policies. The page also says plainly how we work in Spain: a Portuguese
 * intermediary under the EU freedom to provide services, Spanish insurers,
 * policies in Spanish.
 */
import { BREADCRUMB_ROOT, withSibling, toPortugal } from './shared.mjs';

export const ES_GUIDE_PAGE = {
  slug: 'seguros-espana',
  url: '/es/seguros-espana/',
  cluster: 'es-guide',
  title: 'Seguros en España para latinoamericanos | Adler & Rochefort',
  description:
    'Seguros en España para familias latinoamericanas: salud para el visado, hogar con el Consorcio, auto con permiso extranjero y responsabilidad civil. En español.',
  keywords:
    'seguros en España para extranjeros, seguros para latinoamericanos en España, vivir en España seguros, seguro médico España mexicanos, seguro hogar España colombianos, Consorcio de Compensación de Seguros, mediador de seguros España, seguros Madrid venezolanos, seguros Marbella argentinos',
  eyebrow: 'España · Visión general',
  h1: 'Seguros en España para familias latinoamericanas',
  standfirst:
    'El idioma es el mismo; el vocabulario y las reglas, no. En España la franquicia es su deducible, el copago es su coaseguro y existe un organismo público que paga los terremotos. Esto es lo que una familia que llega de América necesita saber del mercado español — y cómo trabajamos en él.',
  published: '2026-10-02T09:00:00+00:00',
  modified: '2026-10-02T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'España' }],
  pullquote: 'En España nadie le hablará de deducibles. Pero los hay — se llaman franquicias, y están en la página doce.',
  schemaType: 'Article',
  formHeading: 'Consulte sobre sus seguros en España',
  formBranch: '',
  formSubject: 'Seguros en España — consulta general',
  formCta: 'Enviar consulta',
  formIntro:
    'Cuéntenos en qué ciudad está o estará, qué visado tiene o va a pedir y qué quiere asegurar — o envíenos sus pólizas actuales. Le respondemos por escrito con lo que cubren, lo que falta y lo que le recomendaríamos.',
  formPlaceholder:
    'Por ejemplo: llegamos de Monterrey a Madrid en enero con visado de residencia no lucrativa, dos adultos y una hija de 14 años, compramos piso en Chamberí.',
  sections: withSibling(`
<section class="section plain" aria-labelledby="como-trabajamos">
  <div class="container narrow article-body">
    <h2 id="como-trabajamos">Cómo trabajamos en España</h2>
    <p>Adler &amp; Rochefort es un mediador de seguros portugués, inscrito en el supervisor ASF con el n.º 425591790/3, con oficinas en Lisboa y Lagos. En España ejercemos en régimen de libre prestación de servicios de la Unión Europea: el mismo mecanismo que permite a un banco o a una aseguradora de un país de la Unión trabajar en otro sin abrir allí una sucursal.</p>
    <p>En la práctica, para usted significa tres cosas:</p>
    <ul>
      <li><strong>Los riesgos situados en España se aseguran con aseguradoras autorizadas para operar en España.</strong> La vivienda de Madrid o de Estepona se asegura con condiciones españolas, con peritos españoles y con acceso al <em>Consorcio de Compensación de Seguros</em>. Y la póliza de salud que pide el consulado para el visado se contrata con una entidad autorizada en España, que es lo que exige la normativa.</li>
      <li><strong>Todo en español, y por escrito.</strong> Las pólizas españolas se emiten en español; nosotros le explicamos qué dicen, qué no dicen y dónde están las exclusiones antes de que firme.</li>
      <li><strong>Un único interlocutor para los dos países.</strong> Muchas familias latinoamericanas eligen entre Portugal y España, o acaban con un pie en cada uno. Que el mismo asesor conozca las pólizas de los dos lados evita pagar dos veces lo mismo y, sobre todo, que el mismo hueco aparezca en dos sitios.</li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="vocabulario">
  <div class="container narrow article-body">
    <h2 id="vocabulario">El mismo idioma, otro vocabulario</h2>
    <p>Un mexicano, una colombiana y un argentino leen una póliza española sin diccionario — y precisamente por eso a veces la leen mal. Estas son las palabras que cambian al cruzar el Atlántico:</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Términos de seguros en América Latina y su equivalente en España</caption>
        <thead>
          <tr><th scope="col">En buena parte de América Latina</th><th scope="col">En España</th><th scope="col">Lo que hay que saber</th></tr>
        </thead>
        <tbody>
          <tr><td>Deducible</td><td>Franquicia</td><td>La parte del daño que paga usted. En hogar puede ser fija; en salud casi nunca se llama así.</td></tr>
          <tr><td>Coaseguro (México), copago (Colombia, Chile)</td><td>Copago</td><td>Lo que usted paga por cada consulta o prueba. La póliza del visado de residencia no lo admite.</td></tr>
          <tr><td>Periodo de espera</td><td>Carencia</td><td>Meses durante los que una cobertura todavía no funciona. La póliza del visado tampoco la admite.</td></tr>
          <tr><td>Gastos médicos mayores, prepaga, medicina prepagada</td><td>Seguro de salud (de asistencia sanitaria o de reembolso)</td><td>En España la mayoría de pólizas dan acceso a un cuadro médico; el reembolso de libre elección es otra modalidad.</td></tr>
          <tr><td>Seguro de daños, seguro de casa</td><td>Multirriesgo hogar: continente y contenido</td><td>El continente es el edificio; el contenido, todo lo que hay dentro.</td></tr>
          <tr><td>SOAT, SOAP, seguro obligatorio</td><td>Seguro obligatorio de automóviles (responsabilidad civil)</td><td>En España cubre los daños a terceros; los propios van aparte.</td></tr>
          <tr><td>Carro, auto</td><td>Coche</td><td>Las aseguradoras hablan de «seguro de coche» o «de automóvil».</td></tr>
          <tr><td>RFC, RUT, cédula, CUIT</td><td>NIE (número de identidad de extranjero)</td><td>Sin NIE no hay contrato de alquiler, cuenta bancaria ni casi ninguna póliza.</td></tr>
        </tbody>
      </table>
    </div>
    <p>Las equivalencias son funcionales y aproximadas: cada país tiene sus matices, y lo que vale es lo que dicen las condiciones de la póliza concreta.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="consorcio">
  <div class="container narrow article-body">
    <h2 id="consorcio">El Consorcio de Compensación de Seguros: lo que no existe en casa</h2>
    <p>Quien viene de Ciudad de México, Santiago, Lima o Bogotá sabe lo que es un sismo y sabe que, en su país, cubrirlo suele ser una decisión: una cobertura adicional, con su propio deducible y su propio precio. En España la lógica es otra.</p>
    <p>El <em>Consorcio de Compensación de Seguros</em> es una entidad pública que indemniza los llamados riesgos extraordinarios — terremotos, inundaciones extraordinarias, tempestades ciclónicas atípicas y vientos extraordinarios, entre otros, además de los actos de terrorismo — siempre que el bien tenga contratada una póliza de daños en España. Se financia con un pequeño recargo que va incluido en la prima, y no hay que pedirlo: viene con la póliza.</p>
    <div class="callout">
      <span class="callout-label">La consecuencia práctica</span>
      El Consorcio paga según lo que esté asegurado en su póliza. Si la vivienda está infraasegurada, el Consorcio aplica la misma reducción proporcional que aplicaría la aseguradora. La suma asegurada correcta sigue siendo la decisión más importante del contrato.
    </div>
    <p>Portugal, en cambio, no tiene un organismo equivalente en funcionamiento: allí el terremoto es una cobertura opcional que hay que contratar. Es una de las diferencias que más importan a quien duda entre los dos países.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="cuatro">
  <div class="container narrow article-body">
    <h2 id="cuatro">Las coberturas que importan a una familia que llega de América</h2>
    <ul class="hub-list">
      <li class="hub-item">
        <h3><a href="/es/seguro-medico-visado-espana/">Seguro médico para el visado</a></h3>
        <p>Residencia no lucrativa, nómada digital, estudiante: lo que exige el consulado, y por qué una póliza internacional no siempre sirve para el trámite.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/seguro-salud-espana/">Seguro de salud en España</a></h3>
        <p>Sanidad pública y privada, el seguro de reembolso y cómo seguir atendiéndose en su país de origen.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/seguro-hogar-espana/">Seguro de hogar en España</a></h3>
        <p>Continente y contenido, el Consorcio, la comunidad de propietarios y las viviendas de alto valor.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/seguro-coche-espana/">Seguro de auto en España</a></h3>
        <p>El plazo de seis meses para el permiso latinoamericano, el canje en la DGT y su historial como conductor.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/seguro-responsabilidad-civil-espana/">Responsabilidad civil familiar</a></h3>
        <p>Por qué la que viene en la póliza de hogar no basta para un patrimonio relevante.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/comprar-casa-en-espana-seguro/">Comprar casa en España</a></h3>
        <p>Arras, notario, registro y los seguros que el banco le pondrá sobre la mesa.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/seguros-madrid/">Madrid</a></h3>
        <p>La finca antigua, la casa vacía en agosto, salud y zona de bajas emisiones.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/seguros-barcelona/">Barcelona</a></h3>
        <p>El Eixample, el robo fuera de casa y el alquiler turístico con fecha de caducidad.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/seguros-valencia/">Valencia</a></h3>
        <p>La lección de la DANA: el Consorcio, los garajes y la póliza en vigor.</p>
      </li>
    </ul>
  </div>
</section>

<section class="section plain" aria-labelledby="poliza">
  <div class="container narrow article-body">
    <h2 id="poliza">Cómo se lee una póliza española</h2>
    <p>Una póliza española no es un documento, sino tres, y el orden de lectura importa:</p>
    <ul>
      <li><strong>Condiciones particulares.</strong> Su nombre, el bien asegurado, las sumas, las franquicias y la prima. Es la página que todo el mundo mira — y la única que casi todo el mundo lee.</li>
      <li><strong>Condiciones especiales.</strong> Las coberturas opcionales que ha contratado y las reglas que solo valen para ellas.</li>
      <li><strong>Condiciones generales.</strong> Las definiciones, las exclusiones y las obligaciones del asegurado. Aquí está, por ejemplo, qué se entiende por «vivienda deshabitada» o cuántos días tiene para comunicar un siniestro.</li>
    </ul>
    <p>Las cláusulas que limitan sus derechos deben aparecer destacadas y aceptadas por escrito. Si una exclusión le parece importante y no recuerda haberla firmado, merece la pena revisarlo con nosotros.</p>
    <p>Dos reglas más que sorprenden a quien llega de fuera: la póliza se <strong>renueva automáticamente</strong> cada año salvo que una de las partes se oponga con antelación — en el caso del tomador, al menos un mes antes del vencimiento —, y la prima se cobra normalmente <strong>por domiciliación bancaria</strong> en una cuenta europea (SEPA).</p>
  </div>
</section>

<section class="section tint" aria-labelledby="errores">
  <div class="container narrow article-body">
    <h2 id="errores">Cuatro errores que vemos en familias recién llegadas</h2>
    <ul>
      <li><strong>Contratar la póliza de salud solo para el sello del consulado.</strong> La póliza más barata que cumple el requisito del visado rara vez es la que una familia quiere usar de verdad. Se puede cumplir el requisito y tener una buena cobertura a la vez.</li>
      <li><strong>Seguir conduciendo con el permiso de origen después de los seis meses.</strong> Pasado ese plazo desde la residencia, el permiso latinoamericano deja de servir en España — y un accidente sin permiso válido es un problema serio con la aseguradora.</li>
      <li><strong>Firmar en el banco todos los seguros de la hipoteca.</strong> El banco puede ofrecerle un tipo de interés más bajo si los contrata con él, pero no puede imponerle su aseguradora. Conviene hacer la cuenta completa.</li>
      <li><strong>Asegurar la vivienda por el precio de compra.</strong> En Madrid o en Marbella el precio refleja sobre todo el suelo y la ubicación. Lo que se asegura es lo que costaría reconstruir.</li>
    </ul>
  </div>
</section>`, toPortugal.guide),
  faqTitle: 'Seguros en España — preguntas frecuentes',
  faq: [
    {
      q: '¿Puedo contratar seguros en España si todavía no vivo allí?',
      a: '<p>Depende del seguro. La póliza de salud para el visado se contrata precisamente antes de llegar, porque es un documento de la solicitud. El seguro de una vivienda que ya es suya también puede contratarse desde fuera. Otros — el del coche, por ejemplo — dependen de la residencia y la matrícula españolas. Para casi todo necesitará el NIE.</p>',
    },
    {
      q: '¿Ustedes son una aseguradora?',
      a: '<p>No. Somos un mediador de seguros inscrito en Portugal ante la ASF (n.º 425591790/3) que ejerce en España en régimen de libre prestación de servicios. Asesoramos dentro de nuestra cartera de aseguradoras, le explicamos las propuestas por escrito y gestionamos el siniestro con usted.</p>',
    },
    {
      q: '¿Cuánto me cuesta trabajar con un mediador?',
      a: '<p>Nada más allá de la prima. La remuneración del mediador está incluida en la prima y la paga la aseguradora, contrate usted directamente o a través de nosotros.</p>',
    },
    {
      q: '¿Cubre el Consorcio un terremoto aunque mi póliza no lo mencione?',
      a: '<p>Sí, si se trata de un riesgo extraordinario según su normativa y el bien tiene una póliza de daños en vigor en España: el recargo va incluido en la prima. El Consorcio indemniza con los mismos límites y sumas de su póliza, por eso la suma asegurada correcta sigue siendo decisiva.</p>',
    },
    {
      q: 'Tengo bienes y familia en mi país. ¿Me pueden ayudar también allí?',
      a: '<p>Trabajamos en Portugal y en España. Lo que sí hacemos es tener en cuenta lo que usted conserva en América — una póliza de salud internacional que le permita atenderse allí, una responsabilidad civil de ámbito mundial, objetos de valor que viajan — para que las pólizas de los dos lados del Atlántico no se pisen ni dejen huecos.</p>',
    },
    {
      q: '¿Necesito una cuenta bancaria española?',
      a: '<p>Las aseguradoras cobran normalmente por domiciliación en una cuenta de la zona SEPA, que puede ser de cualquier país europeo. Si todavía no la tiene, díganoslo al pedir la propuesta y le indicaremos por escrito qué alternativas existen en su caso.</p>',
    },
  ],
  related: [
    { url: '/es/mudarse-a-espana-seguros/', label: 'Mudarse a España desde América Latina' },
    { url: '/es/seguro-medico-visado-espana/', label: 'Seguro médico para el visado español' },
    { url: '/es/seguro-hogar-espana/', label: 'Seguro de hogar en España' },
  ],
};
