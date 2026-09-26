/**
 * /es/ — the Spanish market homepage, which is also the cluster hub.
 *
 * Audience: Spanish owners with homes in Spain and/or Portugal, Spaniards
 * buying in Lisbon, Porto or on the Portuguese coast, and Latin American
 * families (Mexico, Venezuela, Argentina, Colombia) living between Madrid,
 * Marbella and Lisbon.
 *
 * The angle that makes this page Spanish rather than translated: a Spanish
 * reader already knows the multirriesgo hogar, the continente/contenido split
 * and — without thinking about it — the Consorcio de Compensación de Seguros,
 * which covers earthquake and flood inside every Spanish property policy.
 * Portugal has no such pool: seismic cover is an optional extra that has to be
 * chosen. And family liability, habitually bundled into the Spanish home
 * policy, is an option in Portugal. Those two reversals are the page.
 */
export const HUB_PAGE = {
  slug: 'es',
  url: '/es/',
  cluster: 'hub',
  isHub: true,
  title: 'Seguros para grandes patrimonios | Adler & Rochefort',
  description:
    'Seguros para patrimonios relevantes en España y Portugal: hogar de alto valor, arte, responsabilidad civil millonaria y salud internacional. En español.',
  ogTitle: 'Seguros para grandes patrimonios — España y Portugal',
  ogDescription:
    'Residencias, arte y colecciones, responsabilidad civil y protección de la familia, en España y Portugal. Suscripción individual, asesoramiento por escrito y un único interlocutor.',
  keywords:
    'seguros grandes patrimonios, seguro hogar alto valor, seguro arte y colecciones, seguros Portugal, seguros España y Portugal, seguro vivienda Lisboa, seguro casa Portugal españoles, mediador de seguros Portugal, private client seguros',
  eyebrow: 'Private clients · España y Portugal',
  h1: 'Seguros para<br><em>grandes patrimonios.</em>',
  standfirst:
    'Residencias, arte y colecciones, responsabilidad civil y protección de la familia, en España y Portugal. Suscripción individual, asesoramiento por escrito y un único interlocutor — del primer contacto al siniestro.',
  published: '2026-09-26T09:00:00+00:00',
  modified: '2026-09-26T09:00:00+00:00',
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
    'Por ejemplo: casa en Marbella y piso en Lisboa, una pequeña colección de pintura, dos hijos estudiando fuera — queremos revisar las pólizas.',
  sections: `
<section class="section plain" aria-labelledby="quienes">
  <div class="container narrow article-body">
    <h2 id="quienes">Un mediador para clientes privados en España y Portugal</h2>
    <p>Adler &amp; Rochefort es un mediador de seguros portugués, inscrito en el supervisor ASF con el n.º 425591790/3, con oficinas en <strong>Lisboa y Lagos</strong>. Trabajamos para familias con patrimonios relevantes en todo Portugal y — en régimen de libre prestación de servicios de la Unión Europea — en España.</p>
    <p>Nuestro trabajo se concentra en los riesgos en los que una póliza estándar se queda corta:</p>
    <ul>
      <li><strong>Viviendas de alto valor</strong> — villas, casas de ciudad y fincas con piscina, anexos y casa de invitados, aseguradas por su coste real de reconstrucción.</li>
      <li><strong>Arte, joyas, relojes y colecciones</strong> — a valor convenido y sin franquicia.</li>
      <li><strong>Responsabilidad civil de la familia</strong> — con límites de varios millones de euros, en todo el mundo, y los gastos de defensa por encima del límite.</li>
      <li><strong>Salud internacional</strong> para familias que viven y viajan entre varios países.</li>
      <li><strong>Automóviles</strong>, incluidos vehículos recientes y de mayor valor.</li>
    </ul>
    <p>Cada riesgo se suscribe de forma individual, el asesoramiento se da por escrito y usted tiene el mismo interlocutor desde el primer contacto hasta un eventual siniestro — en español.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="dos-paises">
  <div class="container narrow article-body">
    <h2 id="dos-paises">Dos países vecinos, dos lógicas de seguro</h2>
    <p>Quien tiene casa en Madrid o en Marbella da por supuestas cosas que en Portugal no lo son. El seguro de hogar español lleva dentro, sin que nadie lo pida, dos protecciones que el portugués deja fuera o convierte en opción:</p>
    <ul>
      <li><strong>Los riesgos extraordinarios.</strong> En España, el Consorcio de Compensación de Seguros cubre terremotos, inundaciones extraordinarias y otros fenómenos dentro de cualquier póliza de daños, a cambio de un recargo incluido en la prima. En Portugal no existe un organismo equivalente: la cobertura de fenómenos sísmicos es una garantía opcional y, si no se contrata, el terremoto no está cubierto.</li>
      <li><strong>La responsabilidad civil familiar.</strong> En España suele venir incluida en el multirriesgo hogar, aunque con límites modestos. En Portugal la <em>multirriscos habitação</em> se centra en el edificio y el contenido; la responsabilidad civil es una opción, a menudo limitada a la propia vivienda.</li>
    </ul>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Diferencias entre el seguro de hogar en España y en Portugal</caption>
        <thead>
          <tr><th scope="col"></th><th scope="col">En España</th><th scope="col">En Portugal</th></tr>
        </thead>
        <tbody>
          <tr><td>Póliza de hogar</td><td>Multirriesgo hogar: continente y contenido</td><td><em>Multirriscos habitação</em>: <em>edifício</em> y <em>recheio</em></td></tr>
          <tr><td>Terremoto e inundación</td><td>Consorcio de Compensación de Seguros, incluido</td><td>Garantía opcional (<em>fenómenos sísmicos</em>); hay que elegirla</td></tr>
          <tr><td>Responsabilidad civil</td><td>Habitualmente incluida, con límites moderados</td><td>Opcional, a menudo ligada solo a la vivienda</td></tr>
          <tr><td>Infraseguro</td><td>Regla proporcional</td><td><em>Regra proporcional</em> — misma lógica</td></tr>
          <tr><td>Idioma de la póliza</td><td>Español</td><td>Por regla general, portugués</td></tr>
          <tr><td>Supervisor</td><td>DGSFP</td><td>ASF</td></tr>
        </tbody>
      </table>
    </div>
    <p>La consecuencia para quien compra en Portugal "lo mismo que en España": el edificio y el contenido quedan cubiertos, pero el terremoto y la responsabilidad civil — las dos coberturas que en casa llegaban solas — pueden no estar. Es exactamente la sorpresa contraria a la que se espera.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="vocabulario">
  <div class="container narrow article-body">
    <h2 id="vocabulario">El portugués de su póliza, en siete palabras</h2>
    <p>El portugués se parece al español lo bastante como para leerse con confianza — y lo bastante poco como para malinterpretar una cláusula. Estas son las palabras que deciden la indemnización:</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Términos de seguros en portugués y su equivalente en español</caption>
        <thead>
          <tr><th scope="col">Portugués</th><th scope="col">Español</th><th scope="col">Por qué importa</th></tr>
        </thead>
        <tbody>
          <tr><td><em>Apólice</em></td><td>Póliza</td><td>Condiciones generales, especiales y particulares: tres documentos, no uno.</td></tr>
          <tr><td><em>Prémio</em></td><td>Prima</td><td>Lo que usted paga. No es un premio, aunque lo parezca.</td></tr>
          <tr><td><em>Franquia</em></td><td>Franquicia</td><td>A menudo un porcentaje de la suma asegurada, no un importe fijo.</td></tr>
          <tr><td><em>Capital seguro</em></td><td>Suma asegurada</td><td>La cifra más importante del contrato; véase el coste de reconstrucción.</td></tr>
          <tr><td><em>Recheio</em></td><td>Contenido</td><td>No es "relleno": es todo lo que hay dentro de la casa.</td></tr>
          <tr><td><em>Sinistro</em></td><td>Siniestro</td><td>El plazo para comunicarlo está en las condiciones y suele ser corto.</td></tr>
          <tr><td><em>Exclusões</em></td><td>Exclusiones</td><td>Se leen antes de firmar: es el único momento en que se pueden negociar.</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section class="section tint" aria-labelledby="aseguramos">
  <div class="container narrow article-body">
    <h2 id="aseguramos">Lo que aseguramos</h2>
    <ul class="hub-list">
      <li class="hub-item">
        <h3><a href="/es/seguro-hogar-alto-valor/">Viviendas de alto valor</a></h3>
        <p>Inspección y coste de reconstrucción, sin regla proporcional, reconstrucción garantizada, contenido en todo el mundo y objetos de valor a valor convenido — en España y en Portugal.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/en/private-clients/" hreflang="en">Arte, colecciones y el patrimonio familiar completo (en inglés)</a></h3>
        <p>El programa private client en su conjunto: arte y colecciones, joyas y relojes, bodega, protección de la familia y varias residencias en una sola cobertura coherente.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/seguro-salud-internacional/">Seguro de salud internacional</a></h3>
        <p>Libre elección de médico y hospital, tratamiento en España, en Portugal y en el extranjero, y cómo encaja con la sanidad pública de cada país.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/seguro-coche-portugal/">Seguro de coche</a></h3>
        <p>Matrícula española o portuguesa, la importación y el ISV, su historial sin siniestros y los vehículos de mayor valor.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/seguro-responsabilidad-civil-familiar/">Responsabilidad civil familiar</a></h3>
        <p>Límites de varios millones de euros, en todo el mundo y con los gastos de defensa por encima del límite; la responsabilidad profesional, en póliza aparte.</p>
      </li>
    </ul>
  </div>
</section>

<section class="section plain" aria-labelledby="especializadas">
  <div class="container narrow article-body">
    <h2 id="especializadas">Coberturas especializadas</h2>
    <p>Algunos riesgos no se colocan en el mercado minorista. Los presentamos, a través de mercados especializados y de nuestros socios de mediación, con el mismo método: análisis por escrito y un único interlocutor. Cada guía trata las diferencias entre España y Portugal.</p>
    <ul class="hub-list">
      <li class="hub-item">
        <h3><a href="/es/seguro-secuestro-extorsion/">Secuestro, rescate y extorsión</a></h3>
        <p>Consultoría de crisis 24/7, reembolso de rescates y extorsiones y total confidencialidad, para la familia y el personal, en todo el mundo.</p>
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
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="guias">
  <div class="container narrow article-body">
    <h2 id="guias">Tres guías para la situación, no para el producto</h2>
    <ul class="hub-list">
      <li class="hub-item">
        <h3><a href="/es/mudarse-a-portugal-seguros/">Mudarse a Portugal</a></h3>
        <p>El orden correcto: qué resolver antes de salir de España o de América, qué solo puede hacerse con el NIF portugués y dónde se abren las lagunas.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/comprar-casa-en-portugal-seguro/">Comprar casa en Portugal</a></h3>
        <p>Del CPCV a la <em>escritura</em>: qué exige el banco, desde qué día responde usted de la vivienda y por qué el precio no es la suma asegurada.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/guia-seguros-portugal-espana/">Guía de seguros en Portugal y España</a></h3>
        <p>Cómo funcionan los dos mercados: quién es quién, las partes de la póliza, el siniestro, la renovación y la anulación.</p>
      </li>
    </ul>
  </div>
</section>

<section class="section plain" aria-labelledby="dos-casas">
  <div class="container narrow article-body">
    <h2 id="dos-casas">Una familia, dos países, un solo programa</h2>
    <p>Muchas de las familias con las que trabajamos tienen casa en los dos lados de la frontera: la residencia principal en Madrid o en Ciudad de México y una segunda vivienda en Lisboa, Cascais o la Comporta; o al revés, la vida en Lisboa y la casa de verano en la Costa del Sol. Lo habitual es que cada vivienda tenga su propia póliza, contratada en momentos distintos, con criterios distintos y con límites que nadie ha comparado.</p>
    <p>Lo que proponemos es ordenar ese conjunto:</p>
    <ul>
      <li><strong>Criterios comunes</strong> para las sumas aseguradas — coste de reconstrucción, valor de reposición del contenido, tasación de las obras de arte — en todas las viviendas.</li>
      <li><strong>Una responsabilidad civil familiar</strong> con límite suficiente, válida en todo el mundo, en lugar de varias pequeñas que se solapan o dejan huecos.</li>
      <li><strong>Los objetos de valor</strong> listados una sola vez, cubiertos donde estén: en casa, de viaje o en la otra residencia.</li>
      <li><strong>Un único interlocutor</strong> que conoce todas las pólizas y gestiona el siniestro, sea cual sea el país.</li>
    </ul>
    <p>Las viviendas vacías buena parte del año merecen además una mención: los periodos de desocupación están definidos en las condiciones y pueden limitar las coberturas de robo y de daños por agua. Hay que declarar el uso real desde el principio.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="como">
  <div class="container narrow article-body">
    <h2 id="como">Cómo trabajamos</h2>
    <ol class="process-steps">
      <li><div><strong>Empezamos por la situación, no por el producto.</strong><span> Dónde vive, cuánto tiempo, qué posee, a quién hay que cubrir y a qué se dedica. El producto se deriva de las respuestas.</span></div></li>
      <li><div><strong>Fijamos las sumas antes de hablar de prima.</strong><span> Coste de reconstrucción del edificio, valor de reposición del contenido, tasaciones del arte y las joyas. Una suma equivocada hace insuficiente cualquier póliza.</span></div></li>
      <li><div><strong>Leemos las exclusiones en voz alta.</strong><span> Por escrito y en español, antes de la firma: las exclusiones relevantes de esa póliza concreta.</span></div></li>
      <li><div><strong>Consultamos dentro de nuestra cartera de aseguradoras</strong><span> y le explicamos por escrito en qué se diferencian las coberturas.</span></div></li>
      <li><div><strong>Gestionamos el siniestro por usted.</strong><span> Ante la aseguradora y el perito, en portugués o en español, hasta el cierre del expediente.</span></div></li>
      <li><div><strong>Revisamos las pólizas una vez al año.</strong><span> La casa, la colección y la familia rara vez se quedan como estaban.</span></div></li>
    </ol>
  </div>
</section>

<section class="section plain" aria-labelledby="errores">
  <div class="container narrow article-body">
    <h2 id="errores">Cinco errores que vemos una y otra vez</h2>
    <ul>
      <li><strong>Dar por hecho que el terremoto está cubierto en Portugal.</strong> En España lo cubre el Consorcio. En Portugal hay que contratarlo.</li>
      <li><strong>Asegurar la vivienda por el precio de compra.</strong> El precio incluye el suelo, la ubicación y las vistas, y nada de eso se quema. La suma debe ser el coste de reconstrucción.</li>
      <li><strong>Firmar la póliza del banco sin leerla.</strong> El banco tiene un interés legítimo en que la casa esté asegurada; no ha comprobado si la cobertura le conviene a usted.</li>
      <li><strong>Dejar las joyas y el arte dentro del contenido general.</strong> Sin relación individual a valor convenido, la indemnización se discute pieza a pieza — con límites por objeto que casi nunca bastan.</li>
      <li><strong>Mantener la responsabilidad civil de la póliza de hogar como única protección.</strong> Un límite de unos cientos de miles de euros no responde a una reclamación grave por lesiones.</li>
    </ul>
  </div>
</section>`,
  audience: {
    heading: 'Para quién <em>trabajamos</em>',
    body:
      'Trabajamos para familias con patrimonios relevantes en España y Portugal — propietarios con varias residencias, coleccionistas, empresarios y familias latinoamericanas que han trasladado toda o parte de su vida a la Península. Desde nuestras oficinas en Lisboa y Lagos nos ocupamos de todo el seguro: asesoramiento, suscripción individual, servicio continuado y gestión de siniestros, con el mismo interlocutor en todo momento y en español.',
    alt: 'Asesor de seguros para clientes privados con patrimonios relevantes en España y Portugal',
  },
  insurers: {
    heading: 'Aseguradoras y socios de coaseguro <em>con los que trabajamos</em>',
    lead:
      'No estamos vinculados a una sola compañía. Asesoramos dentro de nuestra cartera de aseguradoras y recomendamos por escrito la cobertura adecuada para la familia y su patrimonio.',
  },
  faqTitle: 'Seguros en España y Portugal — preguntas frecuentes',
  faq: [
    {
      q: '¿Me atienden en español?',
      a: '<p>Sí. Trabajamos en español de principio a fin: propuestas, explicación de las condiciones, correspondencia y siniestros. Las pólizas españolas se emiten en español; las portuguesas, por regla general en portugués, y se las explicamos por escrito en español antes de firmar.</p>',
    },
    {
      q: '¿Para quién trabajan?',
      a: '<p>Para familias con patrimonios relevantes en España y Portugal: viviendas de alto valor, arte y colecciones, responsabilidad civil familiar con límites millonarios, salud internacional y automóviles. Cada riesgo se suscribe individualmente, el asesoramiento se da por escrito y usted tiene un único interlocutor del primer contacto al siniestro.</p>',
    },
    {
      q: '¿Pueden asegurar riesgos situados en España?',
      a: '<p>Sí. Estamos inscritos en Portugal ante la ASF con el n.º 425591790/3 y ejercemos en España en régimen de libre prestación de servicios de la Unión Europea. Muchos de nuestros clientes tienen vivienda en los dos países, y tener ambas con el mismo asesor es una ventaja real.</p>',
    },
    {
      q: '¿Puedo asegurar mi casa de Portugal con mi aseguradora española?',
      a: '<p>Normalmente no. Los seguros de daños se contratan, por lo general, con una aseguradora autorizada para operar donde está el inmueble, y la gestión de siniestros requiere presencia local. Pida una respuesta por escrito a su compañía antes de dar por hecho que algo le cubre en Portugal.</p>',
    },
    {
      q: '¿Cuánto cuesta trabajar con un mediador?',
      a: '<p>Nada más allá de la prima. La remuneración del mediador está incluida en la prima y la paga la aseguradora, contrate usted directamente o a través de nosotros. La diferencia es que alguien lee las condiciones, fija las sumas con usted y lleva el siniestro.</p>',
    },
    {
      q: '¿Está cubierto el terremoto en una póliza de hogar portuguesa?',
      a: '<p>Solo si se ha contratado la garantía de <em>fenómenos sísmicos</em>, que en Portugal es opcional. A diferencia de España, donde el Consorcio de Compensación de Seguros cubre los riesgos extraordinarios dentro de la póliza, en Portugal no hay un organismo equivalente. Le indicamos el coste adicional para que decida con una cifra delante.</p>',
    },
    {
      q: 'Usamos la casa de Portugal unos meses al año. ¿Cambia algo?',
      a: '<p>Sí, bastante. Los periodos de desocupación están definidos en las condiciones portuguesas y pueden limitar las coberturas de robo y daños por agua, a veces con exigencias de vigilancia o de cerrar la llave de paso. Declare el uso real desde el principio en lugar de describir la vivienda como residencia habitual.</p>',
    },
  ],
  related: [
    { url: '/es/comprar-casa-en-portugal-seguro/', label: 'Comprar casa en Portugal: el seguro paso a paso' },
    { url: '/es/guia-seguros-portugal-espana/', label: 'Guía de seguros en Portugal y España' },
  ],
};
