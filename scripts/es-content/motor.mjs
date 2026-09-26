/**
 * /es/seguro-coche-portugal/
 *
 * Search intent: "seguro coche Portugal", "matrícula española en Portugal" —
 * a Spanish or Latin American family that either brings a Spanish-registered
 * car when moving to Portugal, or insures a newer, more valuable car on
 * either side of the border.
 *
 * Spanish-specific angles: the reader thinks in terceros / terceros ampliado /
 * todo riesgo, which Portugal splits differently; the Spanish plate stops
 * matching reality once residence moves; ISV looks like the impuesto de
 * matriculación but is calculated on engine size and CO2; and the certificado
 * de siniestralidad has to be requested before the Spanish policy ends.
 * Acceptance of foreign claims history is hedged: EU rules require insurers
 * not to treat it less favourably, but how it is priced remains theirs.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';

export const MOTOR_PAGE = {
  slug: 'seguro-coche-portugal',
  url: '/es/seguro-coche-portugal/',
  cluster: 'motor',
  title: 'Seguro de coche en Portugal | Adler & Rochefort',
  description:
    'Seguro de coche en Portugal para familias españolas: todo riesgo, coches de alto valor, matrícula española o portuguesa, ISV e importación y su historial.',
  keywords:
    'seguro coche Portugal, seguro de coche en Portugal, matrícula española en Portugal, importar coche a Portugal ISV, certificado de siniestralidad, carnet de conducir español Portugal, seguro todo riesgo Portugal',
  eyebrow: 'Seguro de coche',
  h1: 'Seguro de coche en Portugal: matrícula, coberturas y su historial',
  standfirst:
    'La cuestión rara vez es si puede traer el coche, sino si le compensa — y cómo evitar el hueco entre la matrícula española y la portuguesa. Aquí están las dos cosas, sin promesas que ninguna aseguradora puede hacer.',
  published: '2026-09-26T09:00:00+00:00',
  modified: '2026-09-26T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Seguro de coche' }],
  pullquote: 'La cobertura tiene que seguir mientras cambia la matrícula — no después.',
  schemaType: 'Article',
  formHeading: 'Solicite una propuesta para su coche',
  formBranch: 'Español · Coche',
  formSubject: 'Seguro de coche',
  formCta: 'Solicitar la propuesta',
  formIntro:
    'Indíquenos el vehículo, su matrícula actual y los años sin siniestros. Le respondemos por escrito con las coberturas, las franquicias y el calendario si hay importación.',
  formPlaceholder:
    'Por ejemplo: Range Rover de 2024 con matrícula española, nos trasladamos a Cascais en enero, 20 años sin siniestros.',
  sections: `
<section class="section plain" aria-labelledby="coberturas">
  <div class="container narrow article-body">
    <h2 id="coberturas">Terceros, terceros ampliado, todo riesgo — y cómo lo divide Portugal</h2>
    <p>La escalera española no existe con la misma forma. Portugal tiene dos bloques base y vende el resto como garantías opcionales:</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Modalidades del seguro de coche en España y sus equivalentes en Portugal</caption>
        <thead>
          <tr><th scope="col">En España</th><th scope="col">En Portugal</th><th scope="col">La diferencia que se nota</th></tr>
        </thead>
        <tbody>
          <tr><td>Responsabilidad civil obligatoria</td><td><em>Responsabilidade civil automóvel</em></td><td>Obligatoria y equivalente: los daños que causa a terceros.</td></tr>
          <tr><td>Terceros ampliado</td><td>Sin producto equivalente cerrado</td><td>Lunas, robo, incendio o asistencia se contratan como garantías sueltas.</td></tr>
          <tr><td>Todo riesgo</td><td><em>Danos próprios</em></td><td>Daños al propio vehículo; la franquicia suele ser un porcentaje del valor, con un mínimo.</td></tr>
          <tr><td>Defensa jurídica</td><td><em>Proteção jurídica</em></td><td>Normalmente opcional, no incluida.</td></tr>
          <tr><td>Asistencia en viaje</td><td><em>Assistência em viagem</em></td><td>Opcional, por niveles: grúa, repatriación, vehículo de sustitución.</td></tr>
          <tr><td>Seguro del conductor</td><td><em>Ocupantes</em> y conductor, por separado</td><td>Hay que elegirlo expresamente.</td></tr>
        </tbody>
      </table>
    </div>
    <p>La consecuencia: una propuesta portuguesa que parece un todo riesgo puede cubrir lo mismo que su póliza española — o carecer de tres de las cosas que allí venían incluidas. Revisamos las garantías una a una y le damos la comparación por escrito, en lugar de enfrentar dos precios finales.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="alto-valor">
  <div class="container narrow article-body">
    <h2 id="alto-valor">Coches recientes y de mayor valor</h2>
    <p>En un vehículo de gama alta, tres puntos deciden si la póliza está a la altura, y conviene tenerlos por escrito antes de firmar:</p>
    <ul>
      <li><strong>El valor en caso de pérdida total</strong> — valor a nuevo durante un plazo, valor venal o valor convenido. La diferencia, en un coche de dos años, es considerable.</li>
      <li><strong>La reparación</strong> — en taller oficial de la marca y con piezas originales, o en la red de talleres de la aseguradora.</li>
      <li><strong>La franquicia porcentual</strong> — un porcentaje del valor del vehículo pesa mucho más en un coche caro que una franquicia fija española.</li>
    </ul>
    <p>Para familias con varios vehículos, clásicos o de colección, existen programas específicos; los tratamos caso por caso.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="matricula">
  <div class="container narrow article-body">
    <h2 id="matricula">Matrícula española en Portugal — y el hueco intermedio</h2>
    <p>Mientras usted resida en España, su coche con matrícula española y su póliza española circulan por Portugal sin problema: el seguro obligatorio cubre en toda la Unión Europea. El planteamiento cambia cuando traslada su residencia a Portugal. Un residente en Portugal debe, con carácter general, legalizar el vehículo en Portugal en los plazos que fija la administración tributaria, y la póliza española se contrató sobre una residencia en España que ya no se corresponde con la realidad. A su vez, una póliza portuguesa corriente normalmente solo se emite sobre una <em>matrícula</em> portuguesa.</p>
    <div class="callout">
      <span class="callout-label">Lo que funciona</span>
      Comunique el traslado a su aseguradora española con la fecha exacta y pregunte <strong>por escrito</strong> si la cobertura se mantiene tras el cambio de residencia y durante cuánto tiempo. Si ese plazo es más corto que la importación — lo que ocurre a menudo —, organizamos la cobertura intermedia y hacemos coincidir el inicio de la póliza portuguesa definitiva con el día en que se emite la matrícula. Nunca anule primero la póliza española para resolver después la continuidad.
    </div>
  </div>
</section>

<section class="section tint" aria-labelledby="isv">
  <div class="container narrow article-body">
    <h2 id="isv">El ISV y la importación — visión general</h2>
    <p>Somos mediadores de seguros, no gestores aduaneros. Esto es la visión general que necesita para decidir, no una guía del trámite; en la práctica casi todo el mundo recurre a un <em>despachante</em>, el equivalente a un gestor.</p>
    <h3>El ISV — <em>Imposto sobre Veículos</em></h3>
    <p>Es el impuesto que se paga en la primera matriculación en Portugal, y recuerda al impuesto de matriculación español. Su cálculo, sin embargo, se basa en dos componentes — la <strong>cilindrada</strong> y las <strong>emisiones de CO₂</strong> — con una reducción según la antigüedad del vehículo. Por eso el resultado sorprende: un diésel grande y reciente puede generar un ISV muy elevado, mientras que un coche pequeño y antiguo sale relativamente barato, costase lo que costase.</p>
    <p>Si se traslada de forma permanente, puede ser posible una <strong>exención por cambio de residencia</strong>. Las condiciones son estrictas — entre otras, cuánto tiempo ha sido propietario del vehículo antes del traslado y cuánto debe conservarlo después — y la solicitud está sujeta a plazos. Hay que estudiarla antes de mover el coche, no después.</p>
    <h3>Los pasos</h3>
    <ol>
      <li>Declaración aduanera (<em>Alfândega</em>) y liquidación del ISV, o solicitud de exención.</li>
      <li>Inspección técnica para vehículos importados, con verificación de la conformidad europea.</li>
      <li>Homologación ante el IMT (<em>Instituto da Mobilidade e dos Transportes</em>) y asignación de matrícula portuguesa.</li>
      <li>Emisión del <em>Documento Único Automóvel</em>, el permiso de circulación portugués.</li>
    </ol>
    <p>Con la matrícula portuguesa emitida empieza la póliza portuguesa definitiva.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="historial">
  <div class="container narrow article-body">
    <h2 id="historial">Su historial sin siniestros</h2>
    <p>Los años sin siniestros en una aseguradora española tienen valor económico también en Portugal. La normativa europea obliga a su aseguradora a emitirle un <strong>certificado de siniestralidad</strong> cuando lo solicite, y a las aseguradoras de otros países a no tratarlo de forma menos favorable por venir de otro Estado miembro. Cómo lo traduce cada una en la prima, en cambio, sigue siendo decisión suya: no podemos prometer que todas lo reconozcan por completo.</p>
    <p>Lo que debe hacer: pida el certificado <strong>antes de que termine la póliza española</strong>, con los años asegurados, el tomador, el vehículo y los siniestros, si los hubo. Después cuesta más obtenerlo, y sin él negociamos desde una posición claramente más débil.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="carnet">
  <div class="container narrow article-body">
    <h2 id="carnet">Su permiso de conducir</h2>
    <p>El permiso español es un permiso comunitario y es válido para conducir en Portugal; no hay que canjearlo para poder conducir. Cuando le toque renovarlo siendo residente en Portugal, la renovación se hace ante el IMT. Para permisos expedidos fuera de la Unión Europea — mexicanos, venezolanos, argentinos, colombianos — las reglas son distintas y existe un plazo para el canje tras fijar la residencia; conviene consultarlo en el IMT al llegar.</p>
    <p>Por qué figura en una página de seguros: en un siniestro se comprueba si el conductor estaba habilitado para conducir. Un permiso en situación irregular es exactamente el tipo de cabo suelto que retrasa un expediente cuando más prisa corre.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="accidente">
  <div class="container narrow article-body">
    <h2 id="accidente">En caso de accidente: la <em>Declaração Amigável</em></h2>
    <p>Es la versión portuguesa del parte amistoso europeo, y conviene llevarla en el coche. El formato es el mismo que conoce de España; se rellena en portugués, y el documento firmado orienta en la práctica cómo se reparte la responsabilidad.</p>
    <ol class="process-steps">
      <li><div><strong>Asegure el lugar</strong><span> y llame a las autoridades si hay heridos o no hay acuerdo. Con heridos: 112.</span></div></li>
      <li><div><strong>Rellenen el parte juntos</strong><span> — croquis, casillas, matrículas, aseguradoras y las dos firmas. Firme solo aquello con lo que esté de acuerdo.</span></div></li>
      <li><div><strong>Haga fotografías</strong><span> de la posición de los vehículos antes de moverlos, de los daños, las matrículas y la señalización.</span></div></li>
      <li><div><strong>Comuníquelo en el plazo de la póliza</strong><span>, normalmente pocos días. Llámenos: lo comunicamos por usted y seguimos el expediente.</span></div></li>
    </ol>
  </div>
</section>`,
  faqTitle: 'Seguro de coche en Portugal — preguntas',
  faq: [
    {
      q: '¿Puedo asegurar en Portugal mi coche con matrícula española?',
      a: '<p>Mientras el coche conserve la matrícula española, la cobertura se mantiene normalmente a través de su aseguradora española, con confirmación por escrito de hasta cuándo es válida tras el cambio de residencia. Una póliza portuguesa corriente presupone, por lo general, una matrícula portuguesa.</p>',
    },
    {
      q: '¿Tengo que matricular el coche en Portugal?',
      a: '<p>Si fija su residencia en Portugal, con carácter general sí, en los plazos que marca la administración. El camino pasa por la aduana y el ISV (o la exención por cambio de residencia), la inspección técnica y la homologación ante el IMT. Calcule semanas, no días — y calcule el ISV antes de decidir.</p>',
    },
    {
      q: '¿Cuentan en Portugal mis años sin siniestros en España?',
      a: '<p>Deberían tenerse en cuenta: la normativa europea exige que el certificado de siniestralidad de otro Estado miembro no se trate de forma menos favorable. Cómo lo valora cada aseguradora en la prima depende de ella. Pida el certificado a su aseguradora española antes de que termine la póliza.</p>',
    },
    {
      q: '¿Qué equivale al terceros ampliado en Portugal?',
      a: '<p>No hay un producto cerrado equivalente. Portugal tiene la responsabilidad civil obligatoria y los daños propios (<em>danos próprios</em>); lunas, robo, incendio o asistencia se contratan como garantías independientes. Por eso comparamos garantía a garantía y no precios finales.</p>',
    },
    {
      q: '¿Tengo que canjear mi permiso de conducir español?',
      a: '<p>No para conducir: el permiso español es comunitario y válido en Portugal. Las renovaciones, una vez residente en Portugal, se hacen ante el IMT. Los permisos de fuera de la Unión Europea siguen reglas distintas, con un plazo de canje tras fijar la residencia.</p>',
    },
  ],
  related: [
    { url: '/es/mudarse-a-portugal-seguros/', label: 'Mudarse a Portugal: los seguros en el orden correcto' },
    { url: '/es/seguro-hogar-alto-valor/', label: 'Seguro de hogar de alto valor' },
  ],
};
