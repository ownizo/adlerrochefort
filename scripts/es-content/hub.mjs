/**
 * /es/ — the Spanish market homepage, which is also the cluster hub.
 *
 * Audience (October 2026 rewrite): Latin American families — Mexico,
 * Colombia, Venezuela, Argentina, Chile, Peru and the rest of the continent —
 * with significant assets, who live, are about to live, or own property in
 * Portugal and/or Spain. The private-client positioning is the same as on
 * /en/, /de/ and /nl/; the angle is theirs.
 *
 * What makes the page Latin American rather than translated: the reader is a
 * third-country national, so the move starts at a consulate and the health
 * policy is part of the visa file (with different rules in each country);
 * the reader knows earthquakes, and finds Spain carries them by law
 * (Consorcio) while Portugal leaves them optional; the reader's vocabulary
 * (deducible, coaseguro, periodo de espera) is neither Spanish nor
 * Portuguese; and the family's life — children's universities, a flat in
 * Miami, parents back home — keeps running on the other side of the
 * Atlantic. The two clusters below mirror the Portugal and Spain halves of
 * /de/ and /nl/.
 */
export const HUB_PAGE = {
  slug: 'es',
  url: '/es/',
  cluster: 'hub',
  isHub: true,
  title: 'Seguros private client y expatriados · España y Portugal',
  description:
    'Seguros para familias latinoamericanas y expatriados con patrimonio en España y Portugal: salud y visado, hogar de alto valor, arte y responsabilidad civil.',
  ogTitle: 'Seguros private client y expatriados — España y Portugal',
  ogDescription:
    'Para familias latinoamericanas que viven o invierten en Portugal y España: residencias, arte, responsabilidad civil, salud y protección de la familia. Por escrito, en español y con un único interlocutor.',
  keywords:
    'seguros para latinoamericanos en Portugal, seguros para latinoamericanos en España, seguros grandes patrimonios, seguro médico visa Portugal España, seguro hogar alto valor, seguro arte y colecciones, mediador de seguros Portugal España, seguros mexicanos en España, seguros venezolanos en Portugal, private client seguros',
  eyebrow: 'Private clients · Portugal y España',
  h1: 'Seguros para<br><em>grandes patrimonios.</em>',
  standfirst:
    'Para familias latinoamericanas que viven, invierten o pasan parte del año en Portugal y España: residencias, arte y colecciones, responsabilidad civil, salud y protección de la familia. Suscripción individual, asesoramiento por escrito y un único interlocutor — en español, del primer contacto al siniestro.',
  published: '2026-09-26T09:00:00+00:00',
  modified: '2026-10-02T09:00:00+00:00',
  breadcrumb: [{ name: 'Inicio', url: '/es/' }],
  pullquote:
    'Una póliza no se juzga el día en que se firma, sino el día en que tiene que pagar.',
  schemaType: 'WebPage',
  formHeading: 'Solicite un análisis por escrito',
  formBranch: '',
  formSubject: 'Consulta general (ES)',
  formCta: 'Enviar solicitud',
  formIntro:
    'Cuéntenos qué hay que asegurar o envíenos sus pólizas actuales. Le respondemos por escrito con lo que cubren, dónde están las lagunas y qué le recomendaríamos.',
  formPlaceholder:
    'Por ejemplo: nos mudamos de Ciudad de México a Lisboa, compramos casa en Cascais y un piso en Madrid para los hijos; hay una colección de pintura y un apartamento en Miami.',
  sections: `
<section class="section plain" aria-labelledby="quienes">
  <div class="container narrow article-body">
    <h2 id="quienes">Un mediador para familias latinoamericanas en Portugal y España</h2>
    <p>Adler &amp; Rochefort es un mediador de seguros portugués, inscrito en el supervisor ASF con el n.º 425591790/3, con oficinas en <strong>Lisboa y Lagos</strong>. Trabajamos para familias con patrimonios relevantes en todo Portugal y — en régimen de libre prestación de servicios de la Unión Europea — en España.</p>
    <p>Cada vez más, esas familias llegan de Ciudad de México, Caracas, Bogotá, Buenos Aires, Santiago o Lima. Nuestro trabajo se concentra en los riesgos en los que una póliza estándar se queda corta:</p>
    <ul>
      <li><strong>Salud</strong> — la póliza que exige el visado y la que la familia usará de verdad, también para seguir atendiéndose en su país.</li>
      <li><strong>Viviendas de alto valor</strong> — villas, casas de ciudad y fincas, aseguradas por su coste real de reconstrucción, con una decisión consciente sobre el terremoto.</li>
      <li><strong>Arte, joyas, relojes y colecciones</strong> — a valor convenido, sin franquicia y cubiertos también cuando viajan a América.</li>
      <li><strong>Responsabilidad civil de la familia</strong> — con límites de varios millones de euros, en todo el mundo, Estados Unidos incluido si se pide.</li>
      <li><strong>Automóviles</strong>, con un permiso latinoamericano que cambia de reglas el día en que usted pasa a ser residente.</li>
    </ul>
    <p>Cada riesgo se suscribe de forma individual, el asesoramiento se da por escrito y usted tiene el mismo interlocutor desde el primer contacto hasta un eventual siniestro — en español.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="dos-paises">
  <div class="container narrow article-body">
    <h2 id="dos-paises">Portugal o España: lo que cambia para una familia que llega de América</h2>
    <p>Muchas familias deciden entre los dos países, o acaban con un pie en cada uno. En lo que se refiere a seguros, las diferencias son más grandes de lo que la cercanía hace pensar:</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Diferencias de seguros entre Portugal y España para una familia latinoamericana</caption>
        <thead>
          <tr><th scope="col"></th><th scope="col">En Portugal</th><th scope="col">En España</th></tr>
        </thead>
        <tbody>
          <tr><td>Seguro para el visado</td><td>Seguro de viaje con gastos médicos y repatriación; la póliza de salud llega con el domicilio</td><td>Póliza de salud sin copagos ni carencias, con aseguradora autorizada en España</td></tr>
          <tr><td>Póliza de salud</td><td>Con domicilio en Portugal y NIF de cada asegurado</td><td>Se contrata desde fuera para el visado</td></tr>
          <tr><td>Terremoto e inundación</td><td>Opcional: hay que contratar los <em>fenómenos sísmicos</em></td><td>Incluido por ley a través del Consorcio de Compensación de Seguros</td></tr>
          <tr><td>Responsabilidad civil familiar</td><td>Opcional en la póliza de hogar</td><td>Incluida en la póliza de hogar, con límites modestos</td></tr>
          <tr><td>Permiso de conducir</td><td>Reconocido con condiciones para algunos países (Chile, Brasil); canje en el IMT para la mayoría</td><td>Válido seis meses desde la residencia; después, canje si hay convenio o examen</td></tr>
          <tr><td>Idioma de la póliza</td><td>Por regla general, portugués</td><td>Español</td></tr>
          <tr><td>Supervisor</td><td>ASF</td><td>DGSFP</td></tr>
        </tbody>
      </table>
    </div>
    <p>Lo explicamos con detalle en <a href="/es/seguros-portugal/">seguros en Portugal</a>, <a href="/es/seguros-espana/">seguros en España</a> y la <a href="/es/guia-seguros-portugal-espana/">guía de seguros para latinoamericanos</a>, con el vocabulario de su país al lado del de cada uno.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="paises">
  <div class="container narrow article-body">
    <h2 id="paises">Portugal y España</h2>
    <p>Las mismas personas, las mismas condiciones escritas, dos mercados con reglas distintas. Elija el país de la vivienda o de la residencia.</p>
    <h3 id="portugal"><a href="/es/seguros-portugal/">Portugal</a></h3>
    <ul class="hub-list">
      <li class="hub-item">
        <h3><a href="/es/seguro-medico-visado-portugal/">Seguro médico para el visado</a></h3>
        <p>D7, D8, D2: lo que pide el consulado y por qué la póliza portuguesa llega después.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/seguro-salud-internacional/">Salud en Portugal</a></h3>
        <p>El SNS, la póliza portuguesa, la internacional y cómo seguir atendiéndose en su país.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/seguro-salud-preexistencias-portugal/">Enfermedades previas y padres mayores</a></h3>
        <p>Pólizas con y sin cuestionario médico, carencias y el SNS como respaldo.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/seguro-hogar-alto-valor/">Vivienda de alto valor en Portugal</a></h3>
        <p>Coste de reconstrucción, el <em>condomínio</em>, la casa vacía mientras está en América y el arte a valor convenido.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/seguro-terremoto-portugal/">El terremoto en Portugal</a></h3>
        <p>Una cobertura que hay que elegir, con su franquicia en porcentaje.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/seguro-coche-portugal/">Auto en Portugal</a></h3>
        <p>Su permiso latinoamericano, el canje en el IMT y su historial como conductor.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/seguro-responsabilidad-civil-familiar/">Responsabilidad civil familiar</a></h3>
        <p>Límites de varios millones, con Estados Unidos dentro si la familia vive o estudia allí.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/seguro-responsabilidad-profesional-portugal/">Responsabilidad profesional y visado D8</a></h3>
        <p>Trabajar desde Portugal para clientes en América: ámbito, jurisdicción y retroactividad.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/seguro-vida-portugal/">Seguro de vida en Portugal</a></h3>
        <p>Lo que exige el banco, su derecho a elegir la aseguradora y la protección de la familia.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/seguro-alquiler-portugal/">Alquilar su vivienda en Portugal</a></h3>
        <p>El seguro obligatorio del Alojamento Local y el alquiler de larga duración.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/comprar-casa-en-portugal-seguro/">Comprar casa en Portugal</a></h3>
        <p>Del CPCV a la <em>escritura</em>, lo que exige el banco y la transferencia desde América.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/vivienda-no-legalizada-portugal-seguro/">Vivienda no legalizada</a></h3>
        <p>Anexos, piscinas y casas sin licencia: qué se asegura y qué pasa en el siniestro.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/mudarse-a-portugal-seguros/">Mudarse a Portugal</a></h3>
        <p>Visado, NIF y domicilio: el orden en que se resuelve cada seguro.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/siniestros-portugal/">Siniestros en Portugal</a></h3>
        <p>Plazos, el perito y qué hacer si no está de acuerdo — aunque esté al otro lado del Atlántico.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/seguros-lisboa/">Lisboa y Cascais</a></h3>
        <p>Terremoto y edificios antiguos, inundaciones, Alojamento Local y la villa familiar.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/seguros-madeira/">Madeira</a></h3>
        <p>Para venezolanos y lusovenezolanos: aluviones e incendios, SESARAM y padres mayores.</p>
      </li>
    </ul>
    <h3 id="espana"><a href="/es/seguros-espana/">España</a></h3>
    <ul class="hub-list">
      <li class="hub-item">
        <h3><a href="/es/seguro-medico-visado-espana/">Seguro médico para el visado</a></h3>
        <p>Residencia no lucrativa, nómada digital, estudiante: sin copagos, sin carencias y con certificado correcto.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/seguro-salud-espana/">Salud en España</a></h3>
        <p>Sanidad pública y privada, cuadro médico o reembolso, y atenderse también en su país.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/seguro-salud-preexistencias-espana/">Enfermedades previas en España</a></h3>
        <p>Cuestionario, exclusiones, moratoria y lo que el visado permite y no permite.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/seguro-hogar-espana/">Vivienda en España</a></h3>
        <p>Continente y contenido, el Consorcio, la comunidad de propietarios y la casa vacía por temporadas.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/seguro-coche-espana/">Auto en España</a></h3>
        <p>Seis meses con su permiso, el canje en la DGT y su historial sin siniestros.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/seguro-responsabilidad-civil-espana/">Responsabilidad civil familiar en España</a></h3>
        <p>Perros, personal doméstico, embarcaciones y Estados Unidos.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/seguro-vida-espana/">Seguro de vida en España</a></h3>
        <p>Liquidez para una familia con patrimonio en dos continentes y la cláusula de beneficiarios.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/seguro-hipoteca-espana/">Los seguros de la hipoteca</a></h3>
        <p>Lo obligatorio, lo bonificado y lo que puede elegir usted.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/seguro-alquiler-espana/">Alquilar su vivienda en España</a></h3>
        <p>Impago de rentas, alquiler vacacional y gestión a distancia.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/comprar-casa-en-espana-seguro/">Comprar casa en España</a></h3>
        <p>Arras, escritura, obra nueva con aval y decenal, y la transferencia desde América.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/mudarse-a-espana-seguros/">Mudarse a España</a></h3>
        <p>Visado, NIE, contenedor y los primeros meses, en el orden correcto.</p>
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

<section class="section tint" aria-labelledby="especializadas">
  <div class="container narrow article-body">
    <h2 id="especializadas">Coberturas especializadas</h2>
    <p>Algunos riesgos no se colocan en el mercado minorista. Los presentamos, a través de mercados especializados y de nuestros socios de mediación, con el mismo método: análisis por escrito y un único interlocutor. Cada guía trata las diferencias entre Portugal y España.</p>
    <ul class="hub-list">
      <li class="hub-item">
        <h3><a href="/es/seguro-family-office/">Family offices</a></h3>
        <p>D&amp;O de la holding, trustees, viviendas y yate, fraude, secuestro y sucesión, en un programa pensado como un todo.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/seguro-secuestro-extorsion/">Secuestro, rescate y extorsión</a></h3>
        <p>Consultoría de crisis 24/7, reembolso de rescates y extorsiones y total confidencialidad, para la familia y el personal — también en los viajes a América.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/seguro-finca-vinedo/">Fincas, bodegas y viñedos</a></h3>
        <p>Casa, explotación, vino en bodega, incendio forestal y enoturismo, de la Rioja al Douro, en un programa coherente.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/seguro-obra-vivienda-lujo/">Construir o reformar una vivienda de alto valor</a></h3>
        <p>Todo riesgo construcción, responsabilidad del promotor, seguro decenal en España y la entrega sin un día al descubierto.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/seguro-alquiler-villa-lujo/">Alquiler vacacional de una villa de lujo</a></h3>
        <p>Daños por huéspedes, pérdida de rentas, responsabilidad civil y el seguro que exigen la licencia turística y el Alojamento Local.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/seguro-caballos/">Caballos, cuadras e instalaciones ecuestres</a></h3>
        <p>Mortalidad a valor convenido, veterinario, pérdida de uso y la responsabilidad objetiva del poseedor del caballo.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/seguro-aviacion-privada/">Aviación privada: aviones, helicópteros y drones</a></h3>
        <p>Casco a valor convenido, responsabilidad frente a terceros y pasajeros y drones en la finca, a través de un socio especializado en aviación.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/seguro-ciber-fraude-familiar/">Ciberriesgo, fraude e identidad de la familia</a></h3>
        <p>Transferencias desviadas en una compraventa, ciberextorsión, suplantación de identidad y ciberacoso, con respuesta 24 horas.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/golf-viviendas-lujo-portugal-espana/">Golf y viviendas de lujo en Portugal y España</a></h3>
        <p>Del Triángulo de Oro del Algarve a Valderrama y La Zagaleta: los grandes campos, sus comunidades y cómo proteger la casa.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/puertos-deportivos-yates-portugal-espana/">Puertos deportivos y yates en Portugal y España</a></h3>
        <p>De Palma y Puerto Banús a Vilamoura, Cascais y Horta: los puertos, las casas frente al mar y cómo proteger el yate.</p>
      </li>
    </ul>
  </div>
</section>

<section class="section plain" aria-labelledby="dos-casas">
  <div class="container narrow article-body">
    <h2 id="dos-casas">Una familia, dos continentes, un solo programa</h2>
    <p>Las familias con las que trabajamos rara vez viven en un solo lugar: la residencia en Lisboa o en Madrid, la casa de siempre en Bogotá o en Monterrey, un apartamento en Miami, los hijos estudiando en Boston o en Londres. Lo habitual es que cada pieza tenga su propia póliza, contratada en momentos distintos, con criterios distintos y con límites que nadie ha comparado.</p>
    <p>Lo que proponemos es ordenar ese conjunto desde Europa:</p>
    <ul>
      <li><strong>Criterios comunes</strong> para las sumas aseguradas — coste de reconstrucción, valor de reposición del contenido, tasación de las obras de arte — en todas las viviendas.</li>
      <li><strong>Una responsabilidad civil familiar</strong> con límite suficiente y un ámbito mundial que incluya, si hace falta, Estados Unidos y su país de origen.</li>
      <li><strong>Los objetos de valor</strong> relacionados una sola vez, cubiertos donde estén: en casa, de viaje o en la otra residencia.</li>
      <li><strong>Una salud que cruce el Atlántico</strong>: la póliza que exige el visado europeo y la cobertura que permite seguir tratándose en su país.</li>
      <li><strong>Un único interlocutor</strong> que conoce todas las pólizas europeas y gestiona el siniestro, sea cual sea el país.</li>
    </ul>
    <p>Las viviendas vacías buena parte del año merecen además una mención: los periodos de desocupación están definidos en las condiciones y pueden limitar las coberturas de robo y de daños por agua. Hay que declarar el uso real desde el principio.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="como">
  <div class="container narrow article-body">
    <h2 id="como">Cómo trabajamos</h2>
    <ol class="process-steps">
      <li><div><strong>Empezamos por la situación, no por el producto.</strong><span> Dónde vive y dónde vivirá, con qué visado, qué posee, a quién hay que cubrir y a qué se dedica. El producto se deriva de las respuestas.</span></div></li>
      <li><div><strong>Fijamos las sumas antes de hablar de prima.</strong><span> Coste de reconstrucción del edificio, valor de reposición del contenido, tasaciones del arte y las joyas. Una suma equivocada hace insuficiente cualquier póliza.</span></div></li>
      <li><div><strong>Leemos las exclusiones en voz alta.</strong><span> Por escrito y en español, antes de la firma: las exclusiones relevantes de esa póliza concreta.</span></div></li>
      <li><div><strong>Consultamos dentro de nuestra cartera de aseguradoras</strong><span> y le explicamos por escrito en qué se diferencian las coberturas.</span></div></li>
      <li><div><strong>Gestionamos el siniestro por usted.</strong><span> Ante la aseguradora y el perito, en portugués o en español, hasta el cierre del expediente — también si usted está en América.</span></div></li>
      <li><div><strong>Revisamos las pólizas una vez al año.</strong><span> La casa, la colección y la familia rara vez se quedan como estaban.</span></div></li>
    </ol>
  </div>
</section>

<section class="section plain" aria-labelledby="errores">
  <div class="container narrow article-body">
    <h2 id="errores">Cinco errores que vemos en familias que llegan de América</h2>
    <ul>
      <li><strong>Contratar la póliza de salud solo para el sello del consulado.</strong> Cumple el trámite; luego, el día que hace falta un especialista, se descubre lo que se compró.</li>
      <li><strong>Dar por hecho que el terremoto está cubierto en Portugal.</strong> En España lo cubre el Consorcio. En Portugal hay que contratarlo.</li>
      <li><strong>Seguir conduciendo con el permiso de origen cuando ya no vale.</strong> En España, seis meses desde la residencia; en Portugal, depende del país. Un accidente sin permiso válido es un problema serio con la aseguradora.</li>
      <li><strong>Asegurar la vivienda por el precio de compra.</strong> El precio incluye el suelo, la ubicación y las vistas, y nada de eso se quema. La suma debe ser el coste de reconstrucción.</li>
      <li><strong>Cancelar las pólizas de su país antes de tener las europeas en vigor.</strong> Una semana sin seguro de salud durante un traslado es exactamente la semana en que algo pasa.</li>
    </ul>
  </div>
</section>`,
  audience: {
    heading: 'Para quién <em>trabajamos</em>',
    body:
      'Trabajamos para familias latinoamericanas con patrimonios relevantes que han trasladado toda o parte de su vida a Portugal o a España — empresarios, profesionales, inversores, coleccionistas y sus padres e hijos. Desde nuestras oficinas en Lisboa y Lagos nos ocupamos de todo el seguro: asesoramiento, suscripción individual, servicio continuado y gestión de siniestros, con el mismo interlocutor en todo momento y en español.',
    alt: 'Asesor de seguros para familias latinoamericanas con patrimonios relevantes en Portugal y España',
  },
  insurers: {
    heading: 'Aseguradoras y socios de coaseguro <em>con los que trabajamos</em>',
    lead:
      'No estamos vinculados a una sola compañía. Asesoramos dentro de nuestra cartera de aseguradoras y recomendamos por escrito la cobertura adecuada para la familia y su patrimonio.',
  },
  faqTitle: 'Seguros en Portugal y España — preguntas frecuentes',
  faq: [
    {
      q: '¿Me atienden en español?',
      a: '<p>Sí. Trabajamos en español de principio a fin: propuestas, explicación de las condiciones, correspondencia y siniestros. Las pólizas españolas se emiten en español; las portuguesas, por regla general en portugués, y se las explicamos por escrito en español antes de firmar.</p>',
    },
    {
      q: '¿Para quién trabajan?',
      a: '<p>Para familias con patrimonios relevantes en Portugal y España — cada vez más, familias latinoamericanas: salud para el visado y para la vida diaria, viviendas de alto valor, arte y colecciones, responsabilidad civil familiar con límites millonarios y automóviles. Cada riesgo se suscribe individualmente, el asesoramiento se da por escrito y usted tiene un único interlocutor del primer contacto al siniestro.</p>',
    },
    {
      q: 'Todavía vivo en mi país. ¿Pueden ayudarme a preparar el traslado?',
      a: '<p>Sí, y es el mejor momento. Le explicamos por escrito qué seguro exige el visado del país que elija, qué conviene resolver antes de salir y qué solo puede contratarse una vez allí — por ejemplo, la póliza de salud portuguesa, que necesita domicilio en Portugal. Véanse <a href="/es/mudarse-a-portugal-seguros/">mudarse a Portugal</a> y <a href="/es/mudarse-a-espana-seguros/">mudarse a España</a>.</p>',
    },
    {
      q: '¿Pueden asegurar riesgos situados en España?',
      a: '<p>Sí. Estamos inscritos en Portugal ante la ASF con el n.º 425591790/3 y ejercemos en España en régimen de libre prestación de servicios de la Unión Europea. Muchos de nuestros clientes tienen vivienda en los dos países, y tener ambas con el mismo asesor es una ventaja real.</p>',
    },
    {
      q: '¿Me sirve mi seguro de gastos médicos mayores de mi país?',
      a: '<p>A veces durante un tiempo, pero rara vez como solución. Muchas pólizas latinoamericanas limitan la cobertura en el extranjero o la condicionan a la residencia, y no suelen cumplir los requisitos de los visados europeos. Pida por escrito a su aseguradora qué cubre si deja de residir en su país, y no la cancele hasta tener la nueva en vigor.</p>',
    },
    {
      q: '¿Cuánto cuesta trabajar con un mediador?',
      a: '<p>Nada más allá de la prima. La remuneración del mediador está incluida en la prima y la paga la aseguradora, contrate usted directamente o a través de nosotros. La diferencia es que alguien lee las condiciones, fija las sumas con usted y lleva el siniestro.</p>',
    },
    {
      q: '¿Está cubierto el terremoto?',
      a: '<p>En España, sí: el Consorcio de Compensación de Seguros cubre los riesgos extraordinarios dentro de cualquier póliza de daños. En Portugal, solo si se ha contratado la garantía de <em>fenómenos sísmicos</em>, que hoy es opcional. Le indicamos el coste adicional para que decida con una cifra delante.</p>',
    },
    {
      q: 'Pasamos parte del año en nuestro país. ¿Cambia algo en la póliza de la casa europea?',
      a: '<p>Sí, bastante. Los periodos de desocupación están definidos en las condiciones y pueden limitar las coberturas de robo y daños por agua, a veces con exigencias de vigilancia o de cerrar la llave de paso. Declare el uso real desde el principio en lugar de describir la vivienda como residencia habitual.</p>',
    },
  ],
  related: [
    { url: '/es/seguros-portugal/', label: 'Seguros en Portugal para latinoamericanos' },
    { url: '/es/seguros-espana/', label: 'Seguros en España para latinoamericanos' },
    { url: '/es/guia-seguros-portugal-espana/', label: 'Guía de seguros en Portugal y España' },
    { url: '/es/golf-viviendas-lujo-portugal-espana/', label: 'Golf y viviendas de lujo en Portugal y España' },
  ],
};
