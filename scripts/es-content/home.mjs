/**
 * /es/seguro-hogar-alto-valor/ — high-value home insurance in Portugal.
 *
 * Search intent: "seguro hogar alto valor Portugal", "seguro casa Portugal",
 * "seguro villa Cascais" — a Latin American owner insuring a high-value home
 * in Portugal: a villa in Cascais or Quinta do Lago, a townhouse in Lisbon,
 * a quinta in the Douro or the Alentejo.
 *
 * October 2026 rewrite for the Latin American reader (the URL is kept; the
 * page is the Portugal member of the `home` cluster). The Spain side lives on
 * /es/seguro-hogar-espana/.
 *
 * Latin American angles: earthquake cover is a conscious decision at home
 * (Chile, Mexico, Peru) and is one in Portugal too — but many Portuguese
 * homes were bought without anyone raising it. The reader's security
 * reflexes become policy conditions for jewellery and theft. The family
 * spends part of the year in America, so unoccupancy clauses matter. The
 * coverage framework itself is insurer-neutral and price-free, translated
 * from the COV reference used on the PT/EN/DE pages.
 */
import { BREADCRUMB_PORTUGAL, toSpain } from './shared.mjs';

const card = (h, p) => `      <div class="feature-card">
        <h3>${h}</h3>
        <p>${p}</p>
      </div>`;

const group = (title, cards) => `    <div class="article-body"><h3>${title}</h3></div>
    <div class="feature-grid" style="margin-top:12px;margin-bottom:28px;">
${cards.map(([h, p]) => card(h, p)).join('\n')}
    </div>`;

const COV = {
  house: [
    ['Inspección y coste de reconstrucción', 'En las viviendas de mayor valor, la aseguradora realiza una inspección sin coste para usted: confirma el coste de reconstrucción, aconseja las sumas de contenido y de objetos de valor y recomienda medidas de prevención.'],
    ['Sin regla proporcional', 'Aceptadas las sumas recomendadas, la aseguradora renuncia a la regla proporcional: un siniestro parcial se paga íntegramente, aunque el coste de construcción haya subido desde entonces.'],
    ['Reconstrucción garantizada', 'En caso de pérdida total, la casa se reconstruye aunque el coste supere la suma asegurada del edificio — siempre que se hayan aceptado las sumas recomendadas en la inspección.'],
    ['Alojamiento equivalente', 'Alojamiento alternativo de nivel comparable, también para animales de compañía y caballos, mientras la casa no pueda habitarse — sin el límite de pocos meses habitual en el mercado minorista.'],
    ['Jardines, muros y otras construcciones', 'Árboles, arbustos y césped, muros de cerramiento y de contención, piscinas, anexos y casas de invitados con sumas propias — no reducidos a un importe simbólico.'],
    ['Agua, gas y localización de averías', 'Localización y reparación de fugas de agua, gas o calefacción sin sublímite propio, y el agua o el combustible perdidos con la fuga.'],
    ['Indemnización a su elección', 'Pago en efectivo o reparación con los proveedores, artesanos y restauradores que usted elija, sin penalización por ninguna de las dos opciones.'],
    ['Sin franquicia en los siniestros graves', 'Por encima de un determinado importe de siniestro, la franquicia deja de aplicarse — justo cuando más pesaría.'],
    ['La casa de hoy', 'Placas solares, baterías y generadores de apoyo, mejora ecológica en la reconstrucción y cambio de cerraduras si las llaves se pierden o se roban.'],
    ['Adaptación por invalidez', 'Obras de adaptación de la vivienda cuando un miembro de la familia sufre una invalidez permanente por accidente o enfermedad.'],
  ],
  contents: [
    ['Todo riesgo, en todo el mundo', 'Los bienes personales están cubiertos a todo riesgo — en casa, de viaje y en la segunda residencia — sin sublímite propio para lo que lleva consigo.'],
    ['Contenido por encima de la suma', 'Aceptadas las sumas recomendadas, la indemnización puede superar la suma de contenido en un margen pactado de antemano si el valor real resulta mayor.'],
    ['Sin sublímites en lo esencial', 'Daños y pérdidas accidentales, robo en trasteros y bodegas y mobiliario de exterior, sin sublímites propios que vacíen la cobertura.'],
    ['Bienes de los invitados y compras recientes', 'Los bienes de sus invitados quedan protegidos, y lo que ha comprado recientemente queda cubierto automáticamente durante un plazo de declaración.'],
    ['Celebraciones en casa', 'Cancelación de eventos y estructuras temporales — carpas, escenarios — para celebraciones organizadas en casa.'],
  ],
  valuables: [
    ['Valor convenido', 'Arte, joyas, relojes y colecciones relacionados por un valor fijado al inicio del contrato, con tasación — es el importe que se paga en caso de pérdida total, sin discusión sobre depreciación.'],
    ['Sin franquicia', 'Los objetos de valor asegurados a valor convenido o declarado no soportan franquicia.'],
    ['Depreciación tras la restauración', 'Cuando una pieza se restaura pero pierde valor de mercado, se indemniza la diferencia — y las reparaciones no tienen límite de coste.'],
    ['Protección frente a la infravaloración', 'Si una pieza con tasación profesional reciente vale más que la suma asegurada el día del siniestro, la póliza paga por encima del valor convenido, dentro de un margen definido.'],
    ['Nuevas adquisiciones y bodegas', 'Las piezas nuevas quedan cubiertas automáticamente durante un plazo, y las bodegas de vinos y licores tienen sus propias condiciones de conservación.'],
  ],
  liability: [
    ['Límites a la medida del patrimonio', 'Responsabilidad civil familiar con límites de varios millones de euros y ámbito mundial.'],
    ['Defensa por encima del límite', 'Los gastos de defensa jurídica se pagan por encima de la suma asegurada, no se descuentan de ella.'],
    ['Quién está cubierto', 'La unidad familiar, incluidos los hijos que estudian fuera, y quien cuida ocasionalmente de sus animales; invitados y personal doméstico en el ámbito de la residencia.'],
    ['Todas las residencias', 'Como propietario, inquilino u ocupante, en España, en Portugal o donde la familia tenga casa.'],
  ],
  family: [
    ['Secuestro y extorsión', 'Gastos derivados del secuestro y rescate de un miembro de la familia, incluidos consultores especializados y recompensas por información.'],
    ['Robo de vehículo con violencia y asalto a la vivienda', 'Apoyo e indemnización tras un robo de vehículo con violencia, un asalto agravado a la vivienda, una agresión o episodios de violencia en carretera o a bordo.'],
    ['Amenazas y acoso', 'Asesoramiento de seguridad, traslado temporal y apoyo jurídico ante amenazas o acoso a un miembro de la familia.'],
    ['Ciberacoso y reputación', 'Psicólogo, consultor de seguridad informática, abogado y, si fuera necesario, los gastos de cambio de colegio tras episodios reiterados de ciberacoso.'],
    ['Apoyo psicológico', 'Acompañamiento profesional para la familia tras cualquiera de estos hechos.'],
  ],
  disclaimer:
    'Estas son las condiciones de referencia de las pólizas para patrimonios de alto valor que colocamos. Coberturas, límites, franquicias y exclusiones varían según la aseguradora y el riesgo, y solo quedan confirmados en las condiciones generales, especiales y particulares de la póliza emitida.',
};

export const HOME_PAGE = {
  slug: 'seguro-hogar-alto-valor',
  url: '/es/seguro-hogar-alto-valor/',
  cluster: 'home',
  title: 'Seguro de hogar de alto valor en Portugal | Adler & Rochefort',
  description:
    'Villas y viviendas de alto valor en Portugal: inspección, sin regla proporcional, reconstrucción garantizada, terremoto y arte a valor convenido.',
  keywords:
    'seguro hogar alto valor Portugal, seguro casa Portugal, seguro villa Portugal, seguro casa Lisboa, seguro villa Cascais, seguro arte y joyas Portugal, multirriscos habitação, coste de reconstrucción, terremoto Portugal seguro, seguro casa Portugal latinoamericanos',
  eyebrow: 'Portugal · Viviendas de alto valor',
  h1: 'Seguro de hogar de alto valor en Portugal',
  standfirst:
    'Una villa en Cascais, una casa señorial en Lisboa o una quinta en el Douro deben asegurarse con condiciones escritas para ese tipo de vivienda: inspección, reconstrucción sin tope, contenido y arte a valor convenido, responsabilidad civil millonaria — y una decisión consciente sobre el terremoto. Esto es lo que exigimos a una póliza.',
  published: '2026-09-26T09:00:00+00:00',
  modified: '2026-10-02T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_PORTUGAL, { name: 'Seguro de hogar' }],
  pullquote: 'La suma asegurada decide la indemnización. Por eso se fija primero — y por escrito.',
  schemaType: 'Article',
  formHeading: 'Solicite un análisis por escrito de su vivienda',
  formBranch: 'Español · Hogar',
  formSubject: 'Seguro de hogar de alto valor',
  formCta: 'Solicitar el análisis',
  formIntro:
    'Cuéntenos dónde está la vivienda y qué contiene, o envíenos su póliza actual. Le respondemos por escrito con lo que cubre, dónde se queda corta y qué le recomendaríamos.',
  formPlaceholder:
    'Por ejemplo: villa de 1990 en Cascais, 450 m², piscina y casa de invitados, algo de pintura contemporánea; pasamos el invierno en Ciudad de México y la póliza actual es la del banco.',
  sections: `
<section class="section plain" aria-labelledby="condiciones">
  <div class="container">
    <div class="article-body" style="max-width:760px;">
      <h2 id="condiciones">Las condiciones que exigimos para una vivienda de alto valor</h2>
      <p>Una villa, una casa de ciudad o una finca con piscina y casa de invitados necesita otras condiciones que un multirriesgo hogar corriente. Estas son las condiciones de referencia de las pólizas private client que colocamos. Antes de recomendar una póliza la contrastamos con ellas por escrito — y le explicamos con precisión en qué punto una propuesta no las alcanza.</p>
    </div>
${group('La casa', COV.house)}
${group('El contenido', COV.contents)}
${group('Objetos de valor y colecciones', COV.valuables)}
${group('Responsabilidad civil', COV.liability)}
${group('La familia', COV.family)}
    <p class="article-body" style="max-width:760px;margin:8px 0 0;font-size:14px;color:var(--muted);">${COV.disclaimer}</p>
  </div>
</section>

<section class="section tint" aria-labelledby="diferente">
  <div class="container narrow article-body">
    <h2 id="diferente">Lo que funciona distinto en Portugal</h2>
    <p>El seguro de hogar portugués se llama <em>multirriscos habitação</em> y separa el <em>edifício</em> (el edificio) del <em>recheio</em> (el contenido). Hasta ahí, nada nuevo para quien ha asegurado una casa en Santiago, en Bogotá o en Ciudad de México. Las diferencias están en lo que no viene incluido:</p>
    <ul>
      <li><strong>El terremoto.</strong> La garantía de <em>fenómenos sísmicos</em> es opcional y se contrata aparte, con una franquicia que suele ser un porcentaje del capital. Quien viene de un país sísmico sabe que es una decisión; en Portugal, muchas viviendas se compraron sin que nadie la planteara. Véase <a href="/es/seguro-terremoto-portugal/">el terremoto en Portugal</a>.</li>
      <li><strong>La responsabilidad civil.</strong> En la póliza portuguesa corriente es una opción, a menudo limitada a la responsabilidad del propietario del inmueble.</li>
      <li><strong>La asistencia y la defensa jurídica</strong> se eligen garantía por garantía.</li>
    </ul>
    <p>En las pólizas private client que colocamos para viviendas de alto valor, la responsabilidad civil familiar forma parte del programa — límites de varios millones de euros, en todo el mundo, con los gastos de defensa por encima del límite — y el terremoto se plantea siempre, con la cifra delante.</p>
${toSpain.home}
  </div>
</section>

<section class="section plain" aria-labelledby="reconstruccion">
  <div class="container narrow article-body">
    <h2 id="reconstruccion">El coste de reconstrucción: la cifra de la que depende todo</h2>
    <p>La suma asegurada del edificio debe ser el <strong>coste de reconstrucción</strong>: lo que costaría volver a levantar el mismo edificio en el mismo lugar, a precios de construcción actuales, incluidos demolición, desescombro y honorarios técnicos. No es el precio de compra ni el valor de tasación hipotecaria.</p>
    <div class="callout">
      <span class="callout-label">Por qué no es un detalle</span>
      Si la suma es insuficiente, la aseguradora aplica la regla proporcional — en Portugal, <em>regra proporcional</em>. Asegurado el edificio por la mitad de su coste de reconstrucción, usted cobra la mitad de cualquier siniestro, también de uno pequeño muy por debajo de la suma. Si la suma es excesiva, paga prima por algo que nunca podrá cobrar, porque la indemnización nunca supera el daño real.
    </div>
    <p>El precio incluye el suelo, la ubicación, las vistas y el mercado, y nada de eso se quema. Un piso en Chiado y otro equivalente en el interior del país pueden costar cantidades muy distintas y casi lo mismo a la hora de reconstruirse. En las viviendas de mayor valor, la inspección de la aseguradora fija esa cifra con usted — y, aceptada, elimina la regla proporcional.</p>
    <p>Para el contenido, el criterio es el valor de reposición a nuevo. El ejercicio que funciona es recorrer la casa habitación por habitación y anotar importes; la suma final casi siempre supera la estimación inicial. Las obras de arte, las joyas y los relojes van aparte, relacionados uno a uno.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="condominio">
  <div class="container narrow article-body">
    <h2 id="condominio">Un departamento en Portugal: lo que asegura el <em>condomínio</em></h2>
    <p>Quien compra un piso — un departamento — en Lisboa o en Oporto adquiere una <em>fração autónoma</em> y una cuota en los elementos comunes. Es el régimen de condominio que usted conoce, con una particularidad portuguesa: la ley solo obliga a asegurar el edificio contra incendio, y muchos condominios se quedan en ese mínimo.</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Qué cubre la póliza del condomínio y qué debe cubrir la suya</caption>
        <thead>
          <tr><th scope="col"></th><th scope="col">Lo que se suele dar por hecho</th><th scope="col">Lo que pasa a menudo en Portugal</th></tr>
        </thead>
        <tbody>
          <tr><td>Seguro del edificio</td><td>El condominio tiene una póliza amplia</td><td>Solo el incendio obligatorio, o poco más</td></tr>
          <tr><td>Daños por agua en elementos comunes</td><td>Cubiertos por la póliza común</td><td>Depende de lo que haya contratado el condominio</td></tr>
          <tr><td>Terremoto</td><td>Incluido o decidido por el condominio</td><td>Normalmente no incluido</td></tr>
          <tr><td>Lo que necesita usted</td><td>Contenido y responsabilidad civil</td><td><em>Multirriscos</em> de su fracción, incluida la parte construida, más contenido y responsabilidad civil</td></tr>
        </tbody>
      </table>
    </div>
    <p>La consecuencia práctica: pida al <em>administrador</em> las condiciones de la póliza del <em>condomínio</em> antes de contratar la suya. Sin ellas, adivina qué está cubierto — y la frontera entre lo común y lo privativo pasa justo por las instalaciones que más daños por agua provocan.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="agua-sismo">
  <div class="container narrow article-body">
    <h2 id="agua-sismo">Daños por agua y terremoto: las dos cláusulas que hay que leer despacio</h2>
    <h3>Daños por agua (<em>danos por água</em>)</h3>
    <p>El siniestro más frecuente en las viviendas portuguesas, y el de condiciones más detalladas. Las pólizas suelen distinguir entre:</p>
    <ul>
      <li><strong>Rotura de tuberías fijas</strong> — normalmente cubierta, a veces con un límite de antigüedad de la instalación.</li>
      <li><strong>Filtraciones lentas y humedades</strong> — a menudo excluidas, precisamente porque se desarrollan con el tiempo.</li>
      <li><strong>Entrada de agua por cubierta o fachada</strong> — tratada aparte y vinculada al estado de conservación del edificio.</li>
      <li><strong>El coste de localizar y reparar la avería</strong> — no siempre incluido en la cobertura del daño. Pregunte expresamente.</li>
      <li><strong>Los daños al vecino</strong> — eso es responsabilidad civil, no daños propios.</li>
    </ul>
    <h3>Terremoto (<em>fenómenos sísmicos</em>)</h3>
    <p>Portugal tiene actividad sísmica, y la región de Lisboa y el Algarve están entre las zonas donde el riesgo ha estado presente históricamente. La cobertura es <strong>una garantía opcional</strong>: si no se ha contratado, el daño no está cubierto — no hay, a día de hoy, un fondo público que responda. Su franquicia suele ser un porcentaje de la suma asegurada del edificio.</p>
    <p>Que convenga para su edificio depende de la ubicación, el año y el tipo de construcción, y de si podría reconstruir con fondos propios. Le indicamos el coste adicional para que decida con una cifra delante, no con una impresión. Si hay hipoteca, algunos bancos exigen incluirla.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="temporada">
  <div class="container narrow article-body">
    <h2 id="temporada">Vivir entre Portugal y América: la casa vacía</h2>
    <p>Muchas familias latinoamericanas pasan en Portugal una parte del año y el resto en su país. Una casa vacía varios meses es un riesgo distinto de una residencia habitual, y las condiciones portuguesas lo tratan aparte.</p>
    <ul>
      <li><strong>El límite de desocupación continuada</strong> figura en las condiciones como un número de días. Si se supera, pueden limitarse o decaer coberturas — típicamente robo y daños por agua.</li>
      <li><strong>Exigencias de vigilancia</strong> o de cerrar la llave de paso aparecen a veces, y se convierten en condición para cobrar.</li>
      <li><strong>Las medidas de seguridad</strong> — cerraduras, persianas, alarma conectada — cuentan en la valoración del robo.</li>
      <li><strong>Las medidas de seguridad declaradas son condiciones del contrato.</strong> Caja fuerte anclada, alarma conectada a central: si están en la póliza, deben funcionar el día del robo.</li>
      <li><strong>El alquiler, aunque sea unas semanas</strong>, debe declararse. Véase <a href="/es/seguro-alquiler-portugal/">alquilar su vivienda en Portugal</a>.</li>
    </ul>
  </div>
</section>

<section class="section plain" aria-labelledby="banco">
  <div class="container narrow article-body">
    <h2 id="banco">La póliza del banco</h2>
    <p>Con hipoteca en un banco portugués, el banco exige un seguro de hogar con él como beneficiario por el importe del préstamo. Es razonable: la vivienda es la garantía.</p>
    <p>Lo que se exige es que exista un seguro — no que se contrate con el banco. Puede presentar una póliza de otra aseguradora siempre que cumpla las coberturas exigidas. La póliza que se firma en la misma reunión que el préstamo se eligió porque encaja en el proceso del banco; nadie la ha contrastado con su casa: si el coste de reconstrucción está bien fijado, si incluye el terremoto, cómo trata la desocupación y si hay responsabilidad civil.</p>
    <p>Preparamos con gusto una póliza que cumpla los requisitos del banco y que, al mismo tiempo, esté hecha a la medida de la vivienda.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="comprobaciones">
  <div class="container narrow article-body">
    <h2 id="comprobaciones">Comprobaciones antes de firmar</h2>
    <ol class="process-steps">
      <li><div><strong>El coste de reconstrucción</strong><span> se ha calculado con precios de construcción, no con el precio de compra ni la tasación.</span></div></li>
      <li><div><strong>La suma de contenido</strong><span> se ha hecho habitación por habitación, no a ojo.</span></div></li>
      <li><div><strong>Arte, joyas y relojes</strong><span> están relacionados uno a uno, a valor convenido, con una tasación reciente.</span></div></li>
      <li><div><strong>La responsabilidad civil</strong><span> está contratada y conoce el límite.</span></div></li>
      <li><div><strong>El terremoto</strong><span> está contratado o descartado conscientemente, con el coste adicional delante.</span></div></li>
      <li><div><strong>La cláusula de daños por agua</strong><span> está leída, incluidos los límites de antigüedad y la localización de la avería.</span></div></li>
      <li><div><strong>Los periodos de desocupación</strong><span> están declarados según el uso real de la vivienda.</span></div></li>
      <li><div><strong>La póliza del condomínio</strong><span>, si es un piso, está en su poder, para no pagar dos veces ni dejar un hueco.</span></div></li>
      <li><div><strong>La franquicia</strong><span> de cada garantía es conocida — y sabe si es un importe o un porcentaje.</span></div></li>
    </ol>
  </div>
</section>`,
  faqTitle: 'Seguro de hogar de alto valor en Portugal — preguntas',
  faq: [
    {
      q: '¿Es obligatorio el seguro de hogar en Portugal?',
      a: '<p>En los edificios en propiedad horizontal es obligatorio el seguro de incendio de cada fracción, que el <em>condomínio</em> suele contratar para todo el edificio. Para una vivienda unifamiliar no existe una obligación general, salvo que el banco lo exija como condición del préstamo.</p>',
    },
    {
      q: '¿Qué diferencia una póliza para una vivienda de alto valor de una póliza de hogar corriente?',
      a: '<p>Las condiciones. La aseguradora inspecciona la vivienda y fija el coste de reconstrucción, renuncia a la regla proporcional cuando se aceptan las sumas recomendadas y garantiza la reconstrucción tras una pérdida total. El contenido queda cubierto a todo riesgo en todo el mundo, el arte y las joyas a valor convenido sin franquicia, y la responsabilidad civil familiar con límites de varios millones de euros. El contenido exacto depende de la aseguradora y del riesgo, y solo queda confirmado en la póliza emitida.</p>',
    },
    {
      q: '¿Por qué importe debo asegurar el edificio?',
      a: '<p>Por el coste de reconstrucción — lo que costaría volver a construirlo a precios actuales —, no por el precio de compra ni por la tasación. Una suma insuficiente lleva a la regla proporcional en cualquier siniestro; una excesiva, a pagar prima sin contrapartida.</p>',
    },
    {
      q: '¿Cubre el terremoto mi póliza portuguesa?',
      a: '<p>Solo si se ha contratado la garantía de <em>fenómenos sísmicos</em>. En Portugal no funciona hoy un organismo como el Consorcio español, así que la cobertura es opcional y tiene su propia franquicia, normalmente un porcentaje del capital. Le indicamos el coste adicional para que decida con una cifra delante.</p>',
    },
    {
      q: '¿Pueden asegurar mis joyas y obras de arte también cuando viajo?',
      a: '<p>Sí. En las pólizas private client que colocamos, los objetos de valor relacionados a valor convenido quedan cubiertos a todo riesgo en todo el mundo — en casa, de viaje a su país o en la otra residencia —, sin franquicia. Cada pieza de valor relevante se relaciona con una tasación reciente.</p>',
    },
    {
      q: 'Pasamos parte del año en nuestro país. ¿Hay algo especial?',
      a: '<p>Sí. Los periodos de desocupación están definidos en las condiciones y, si se supera el límite, las coberturas de robo y de daños por agua pueden quedar limitadas. Algunas aseguradoras exigen vigilancia o cerrar la llave de paso. Declare el uso real desde el principio; de lo contrario, la discrepancia aparece en el siniestro.</p>',
    },
  ],
  related: [
    { url: '/es/seguro-terremoto-portugal/', label: 'El terremoto en Portugal' },
    { url: '/es/comprar-casa-en-portugal-seguro/', label: 'Comprar casa en Portugal: el seguro paso a paso' },
    { url: '/es/seguro-responsabilidad-civil-familiar/', label: 'Responsabilidad civil familiar en Portugal' },
  ],
};
