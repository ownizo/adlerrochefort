/**
 * /es/seguro-hogar-espana/
 *
 * Search intent: "seguro de hogar en España", "seguro casa Madrid
 * extranjeros", "seguro vivienda alto valor España" — a Latin American family
 * that owns or rents a flat in Madrid or Barcelona, or a villa on the Costa
 * del Sol, and wants it insured properly.
 *
 * The Latin American angle: earthquake cover is something the reader decides
 * on at home; in Spain the Consorcio carries it inside the policy. The
 * reader's security reflexes (alarm, safe, guards) map onto Spanish policy
 * conditions for theft and for jewellery. And the typical pattern — part of
 * the year in Spain, part in America — collides with two Spanish specifics:
 * unoccupancy clauses and squatting (ocupación ilegal). High-value framing
 * follows the Portugal home page; insurers and prices are never named.
 */
import { BREADCRUMB_SPAIN, withSibling, toPortugal } from './shared.mjs';

export const ES_HOME_PAGE = {
  slug: 'seguro-hogar-espana',
  url: '/es/seguro-hogar-espana/',
  cluster: 'es-home',
  title: 'Seguro de hogar en España | Adler & Rochefort',
  description:
    'Seguro de hogar en España: continente y contenido, el Consorcio, la comunidad de propietarios, viviendas vacías parte del año y casas de alto valor. En español.',
  keywords:
    'seguro de hogar España, seguro casa España extranjeros, seguro vivienda Madrid, seguro villa Marbella, multirriesgo hogar, continente y contenido, Consorcio de Compensación de Seguros, seguro hogar alto valor España, seguro vivienda vacía España, seguro ocupación ilegal',
  eyebrow: 'España · Vivienda',
  h1: 'Seguro de hogar en España: lo que cubre, lo que no y lo que cambia si vive entre dos continentes',
  standfirst:
    'Un piso en el barrio de Salamanca, un ático en Barcelona, una villa en Benahavís. La póliza de hogar española es más completa de serie que la de muchos países latinoamericanos — y precisamente por eso se firma sin leer. Estos son los puntos que deciden la indemnización.',
  published: '2026-10-02T09:00:00+00:00',
  modified: '2026-10-02T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_SPAIN, { name: 'Seguro de hogar' }],
  pullquote: 'La póliza española trae el terremoto de serie. Lo que no trae es la suma asegurada correcta.',
  schemaType: 'Article',
  formHeading: 'Solicite un análisis de su vivienda en España',
  formBranch: 'Español · Hogar',
  formSubject: 'Seguro de hogar en España',
  formCta: 'Solicitar el análisis',
  formIntro:
    'Cuéntenos dónde está la vivienda, cómo la usa (todo el año o por temporadas) y qué hay dentro que tenga valor — o envíenos su póliza actual. Le respondemos por escrito con lo que cubre y lo que le falta.',
  formPlaceholder:
    'Por ejemplo: villa en Marbella con piscina, la usamos de junio a octubre, el resto del año vivimos en Ciudad de México; hay arte y joyas. Póliza contratada con el banco al comprar.',
  sections: withSibling(`
<section class="section plain" aria-labelledby="estructura">
  <div class="container narrow article-body">
    <h2 id="estructura">Continente, contenido y lo que viene incluido</h2>
    <p>El seguro de hogar español se llama <em>multirriesgo hogar</em> y separa dos cosas: el <strong>continente</strong> — el edificio, sus instalaciones fijas, los suelos, las paredes, la piscina — y el <strong>contenido</strong>, todo lo que hay dentro y se puede llevar. Cada uno tiene su suma asegurada.</p>
    <p>Lo que suele sorprender a quien llega de América es lo mucho que viene incluido sin pedirlo:</p>
    <ul>
      <li><strong>Los riesgos extraordinarios</strong> — terremoto, inundación extraordinaria y otros —, a través del Consorcio de Compensación de Seguros, con un recargo incluido en la prima.</li>
      <li><strong>La responsabilidad civil familiar</strong>, normalmente incluida, aunque con límites modestos para un patrimonio relevante.</li>
      <li><strong>Asistencia en el hogar</strong> — fontanero, cerrajero, electricista urgentes — y, a menudo, defensa jurídica.</li>
    </ul>
    <p>Que venga incluido no significa que esté bien dimensionado. La responsabilidad civil de una póliza de hogar rara vez alcanza para una reclamación grave por lesiones; para eso existe la <a href="/es/seguro-responsabilidad-civil-espana/">responsabilidad civil familiar</a> independiente.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="comunidad">
  <div class="container narrow article-body">
    <h2 id="comunidad">Piso en un edificio: lo que asegura la comunidad y lo que asegura usted</h2>
    <p>Si su vivienda está en un edificio, la comunidad de propietarios suele tener una póliza que cubre la estructura y los elementos comunes: fachada, cubierta, portal, ascensores, conducciones generales. Esa póliza no cubre su contenido, ni las mejoras que usted haya hecho dentro, ni su responsabilidad como ocupante.</p>
    <ul>
      <li>Pida el certificado de la póliza de la comunidad y compruebe sumas, coberturas y si incluye la responsabilidad civil de la comunidad.</li>
      <li>En su póliza individual, asegure el contenido y, como continente, lo que es privativo de su vivienda: reformas, cocina, baños, carpinterías, suelos.</li>
      <li>Los daños por agua entre vecinos son el siniestro más frecuente en los edificios españoles. Conviene que su póliza cubra tanto los daños que usted sufre como los que causa.</li>
    </ul>
  </div>
</section>

<section class="section plain" aria-labelledby="temporadas">
  <div class="container narrow article-body">
    <h2 id="temporadas">Vivir por temporadas: la casa vacía y la ocupación</h2>
    <p>Muchas familias latinoamericanas pasan en España una parte del año — el verano europeo, los estudios de los hijos, unos meses de descanso — y el resto en su país. Para la póliza, eso tiene dos consecuencias.</p>
    <h3>Las cláusulas de deshabitación</h3>
    <p>Las condiciones definen qué es una vivienda deshabitada, normalmente por un número de días seguidos sin nadie dentro. Superado ese plazo, el robo o los daños por agua pueden quedar limitados o excluidos, o exigir medidas como cerrar la llave de paso o tener alarma conectada. Hay que declarar el uso real al contratar y elegir una póliza pensada para segunda residencia.</p>
    <h3>La ocupación ilegal</h3>
    <p>La ocupación de viviendas vacías es una preocupación real en algunas zonas de España. Algunas pólizas incluyen defensa jurídica y gastos para recuperar la posesión, o una cobertura específica. No sustituye a la prevención — alarma conectada a central, alguien que pase por la casa —, pero cambia mucho el coste de un problema.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="alto-valor">
  <div class="container narrow article-body">
    <h2 id="alto-valor">Viviendas de alto valor, arte y joyas</h2>
    <p>Una villa en La Zagaleta o un piso señorial en Chamberí no se aseguran bien con un multirriesgo estándar. Las pólizas para patrimonios de alto valor trabajan con otra lógica:</p>
    <ul>
      <li><strong>Inspección</strong> de la vivienda para fijar el coste de reconstrucción y, aceptadas las sumas, renuncia a la regla proporcional.</li>
      <li><strong>Reconstrucción garantizada</strong> aunque el coste supere la suma, dentro de lo pactado.</li>
      <li><strong>Arte, joyas y relojes a valor convenido</strong>, relacionados con tasación, sin franquicia y cubiertos también cuando viajan con usted — a América incluida.</li>
      <li><strong>Alojamiento alternativo de nivel equivalente</strong> mientras la casa no pueda habitarse, sin el límite de pocos meses del mercado minorista.</li>
    </ul>
    <div class="callout">
      <span class="callout-label">Las medidas de seguridad son condiciones del contrato</span>
      Para cubrir joyas y objetos de valor, las aseguradoras exigen a menudo caja fuerte anclada, alarma conectada a central o cerraduras de seguridad. Quien viene de ciudades donde la seguridad es un tema cotidiano suele tenerlas — pero deben estar declaradas en la póliza y funcionando el día del robo.
    </div>
  </div>
</section>

<section class="section plain" aria-labelledby="suma">
  <div class="container narrow article-body">
    <h2 id="suma">La suma asegurada: reconstrucción, no precio</h2>
    <p>El continente se asegura por lo que costaría reconstruir el edificio — no por el precio que pagó, que en Madrid, Barcelona o la Costa del Sol refleja sobre todo el suelo y la ubicación. El contenido, por su valor de reposición a nuevo.</p>
    <p>Si la suma es insuficiente, la aseguradora aplica la <strong>regla proporcional</strong>: asegurada la casa por la mitad de su valor, cobra la mitad de cualquier siniestro, incluso de uno pequeño. Y el Consorcio aplica la misma reducción. Si la suma es excesiva, paga prima por algo que nunca podrá cobrar.</p>
  </div>
</section>`, toPortugal.home),
  faqTitle: 'Seguro de hogar en España — preguntas',
  faq: [
    {
      q: '¿El seguro de hogar es obligatorio en España?',
      a: '<p>Para una vivienda sin hipoteca, por regla general no. Si hay hipoteca, la ley exige asegurar el inmueble contra daños, y el banco lo comprobará. En los edificios, la comunidad tiene normalmente su propia póliza para los elementos comunes. Y los contratos de alquiler suelen pedir al inquilino un seguro propio.</p>',
    },
    {
      q: '¿Está cubierto un terremoto?',
      a: '<p>Sí, a través del Consorcio de Compensación de Seguros, siempre que la vivienda tenga una póliza de daños en vigor en España y se trate de un riesgo extraordinario según su normativa. Indemniza según las sumas de su póliza; por eso la suma asegurada correcta importa también aquí.</p>',
    },
    {
      q: 'Pasamos medio año en España y medio en América. ¿Qué tengo que declarar?',
      a: '<p>El uso real: que es una segunda residencia y cuánto tiempo permanece vacía. Las cláusulas de deshabitación pueden limitar el robo y los daños por agua, y algunas pólizas exigen medidas concretas durante la ausencia. Declararlo bien desde el principio evita la discusión en el siniestro.</p>',
    },
    {
      q: '¿Cubre la póliza las joyas que llevo cuando viajo a mi país?',
      a: '<p>Una póliza estándar, normalmente no, o con límites muy bajos fuera de la vivienda. Las pólizas para objetos de valor con cobertura «todo riesgo, en todo el mundo» sí, siempre que las piezas estén relacionadas y se respeten las condiciones de custodia.</p>',
    },
    {
      q: '¿Puedo cambiar el seguro de hogar que me hizo contratar el banco?',
      a: '<p>Sí. El banco puede exigir que la vivienda esté asegurada, pero no que lo esté con su aseguradora. Si cambia, comunique la nueva póliza al banco, respete el plazo de oposición a la renovación y compruebe si pierde alguna bonificación del tipo de interés.</p>',
    },
  ],
  related: [
    { url: '/es/comprar-casa-en-espana-seguro/', label: 'Comprar casa en España: los seguros' },
    { url: '/es/seguro-responsabilidad-civil-espana/', label: 'Responsabilidad civil familiar en España' },
    { url: '/es/seguro-alquiler-espana/', label: 'Seguro para propietarios que alquilan en España' },
  ],
};
