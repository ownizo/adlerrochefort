/**
 * /es/golf-viviendas-lujo-portugal-espana/  (cluster: golf)
 *
 * Pillar article, September 2026. The subject comes first: the great golf
 * destinations of Portugal and Spain (~45%), then the high-value homes in the
 * golf communities (~30%), and only at the end protecting the house, the
 * contents and the family (~25%), closing on a written assessment.
 *
 * Spanish reader: knows Valderrama, Seve and Sotogrande from home; often has
 * a club membership in Madrid (Puerta de Hierro, La Moraleja) and is weighing
 * the Algarve, Comporta or Cascais against the Costa del Sol. Formal usted.
 * No insurer named, no prices. Short form pre-selected on the golf branch.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';
import { section, compareTable } from './niche-shared.mjs';

export const GOLF_PAGE = {
  slug: 'golf-viviendas-lujo-portugal-espana',
  url: '/es/golf-viviendas-lujo-portugal-espana/',
  cluster: 'golf',
  title: 'Golf y viviendas de lujo en Portugal y España | Adler & Rochefort',
  description:
    'Del Triángulo de Oro del Algarve a Valderrama y La Zagaleta: los grandes campos de golf de Portugal y España, sus comunidades y cómo proteger la casa.',
  keywords:
    'golf Portugal, golf Algarve, Quinta do Lago, Vale do Lobo, Valderrama, Sotogrande, La Zagaleta, Finca Cortesin, villa en campo de golf, comunidad de golf de lujo, seguro vivienda golf, responsabilidad civil golfista',
  eyebrow: 'Private Clients · Golf',
  h1: 'Golf en Portugal y España: los grandes campos y las casas que los rodean',
  standfirst:
    'Del Triángulo de Oro del Algarve a la Costa del Golf, de la Comporta a Mallorca: una guía de los recorridos que definen la península, de las comunidades que han crecido a su alrededor y de lo que conviene tener resuelto cuando la casa está junto al tee del 1.',
  published: '2026-09-27T09:00:00+00:00',
  modified: '2026-09-27T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Golf y viviendas de lujo' }],
  pullquote:
    'La casa junto al campo se compra por el golf. Se asegura por todo lo demás: la comunidad, las ausencias, el monte y los invitados.',
  schemaType: 'Article',
  formHeading: 'Solicite un análisis por escrito de su casa de golf',
  formBranch: 'Español · Vivienda de golf',
  formSubject: 'Vivienda en comunidad de golf',
  formCta: 'Solicitar el análisis',
  formIntro:
    'Cuéntenos dónde está la casa, en qué comunidad, cuántos meses al año la usa y si la alquila, o envíenos las pólizas actuales — la suya y, si la tiene, la de la comunidad. Le respondemos por escrito.',
  formPlaceholder:
    'Por ejemplo: villa en La Zagaleta, uso de tres meses al año, personal fijo, algo de arte y una bodega; póliza de la comunidad y póliza propia contratadas por separado.',
  sections: `${section(
    'plain',
    'peninsula',
    `    <h2 id="peninsula">La península del golf</h2>
    <p>Pocos lugares de Europa juntan tantos recorridos de primer nivel en tan poca distancia. En 1997 Valderrama acogió la primera Ryder Cup disputada en la Europa continental, y aquella semana en Sotogrande cambió la imagen del golf español para siempre. Seve Ballesteros había abierto el camino; Olazábal, Sergio García y Jon Rahm lo convirtieron en tradición. Al otro lado de la frontera, el Algarve construyó durante medio siglo algo distinto pero igual de sólido: el destino de golf de invierno de media Europa, con greenes rápidos en enero y el Atlántico a la vista.</p>
    <p>Hoy muchas familias que juegan en Madrid, en Puerta de Hierro o en La Moraleja, comparan con seriedad una casa en la Costa del Sol con otra en el Algarve, en la Comporta o en Cascais. Esta guía recorre los dos países con la mirada del jugador, después con la del propietario, y termina con lo que suele quedar sin resolver.</p>`
  )}
${section(
    'tint',
    'portugal',
    `    <h2 id="portugal">Portugal: del Algarve a Madeira</h2>
    <h3>El Triángulo de Oro del Algarve</h3>
    <p>Entre Almancil y Vilamoura se concentran tres nombres que cualquier golfista reconoce. <strong>Quinta do Lago</strong> reúne los recorridos North, South y Laranjal entre pinares y la Ría Formosa; el South ha acogido en varias ocasiones el Open de Portugal. <strong>Vale do Lobo</strong> tiene el Royal y el Ocean, y en el Royal uno de los hoyos más fotografiados de Europa: un par tres que obliga a volar sobre los acantilados rojizos. <strong>Vilamoura</strong> es la historia del golf algarvío: el Old Course, de finales de los años sesenta, sigue siendo un recorrido de pinos y paciencia, y el Victoria fue durante años la sede del Portugal Masters del circuito europeo.</p>
    <h3>Monte Rei y Palmares</h3>
    <p>Hacia el este, cerca de la frontera con Huelva, <strong>Monte Rei</strong> es un diseño de firma de Jack Nicklaus en un valle tranquilo con la sierra al fondo, y figura con frecuencia entre los mejores recorridos del país. En el otro extremo del Algarve, en Lagos, <strong>Palmares</strong> combina hoyos de dunas junto a la playa con hoyos en ladera sobre la bahía, rediseñados por Robert Trent Jones Jr.</p>
    <h3>La Comporta</h3>
    <p>Al sur de Lisboa, entre arrozales y dunas, la Comporta ha pasado de refugio discreto a uno de los destinos residenciales más buscados de Europa. El recorrido <strong>Dunas</strong>, de David McLay Kidd, y <strong>Costa Terra</strong>, diseñado por Tom Fazio, han traído un golf de nivel internacional a una costa que presume, precisamente, de no parecer un resort.</p>
    <h3>Cascais, Sintra y Estoril</h3>
    <p>A media hora de Lisboa, <strong>Oitavos Dunes</strong> se juega entre dunas y viento atlántico, con el cabo da Roca como referencia; <strong>Penha Longa</strong>, a los pies de la sierra de Sintra, mezcla golf y patrimonio, y <strong>Quinta da Marinha</strong> es el club de barrio de muchas familias de Cascais.</p>
    <h3>La costa oeste y Óbidos</h3>
    <p>Al norte de Lisboa, <strong>Praia d’El Rey</strong> corre junto al océano, <strong>West Cliffs</strong> se asoma a los acantilados y <strong>Royal Óbidos</strong> lleva la firma de Seve Ballesteros, uno de sus últimos diseños.</p>
    <h3>Madeira</h3>
    <p>En la isla, <strong>Palheiro</strong> domina Funchal desde lo alto y <strong>Santo da Serra</strong>, que acogió durante años el Open de Madeira, se juega entre nubes y vistas sobre la costa este.</p>`
  )}
${section(
    'plain',
    'espana',
    `    <h2 id="espana">España: de la Costa del Golf a las islas</h2>
    <h3>Sotogrande y Valderrama</h3>
    <p><strong>Valderrama</strong>, rediseñado por Robert Trent Jones Sr., es el club de la Ryder Cup de 1997 y de tantos torneos del circuito europeo, con sus alcornoques y sus greenes implacables. A su lado, el <strong>Real Club de Golf Sotogrande</strong>, del mismo diseñador y de los años sesenta, es uno de los clubes más respetados del país. Sotogrande sigue siendo la urbanización de referencia para muchas familias españolas.</p>
    <h3>Marbella, Benahavís y Casares</h3>
    <p>En la Costa del Sol, la llamada Costa del Golf, conviven recorridos para todos los gustos. <strong>Finca Cortesin</strong>, en Casares, acogió la Solheim Cup de 2023. <strong>La Zagaleta</strong>, en Benahavís, es una finca privada con dos recorridos reservados a sus propietarios y una de las comunidades residenciales más exclusivas de Europa. En Nueva Andalucía, <strong>Las Brisas</strong>, también de Robert Trent Jones Sr., es el corazón del llamado valle del golf de Marbella.</p>
    <h3>Mallorca</h3>
    <p>En la isla, <strong>Son Muntaner</strong>, a pocos minutos de Palma, y <strong>Alcanada</strong>, en Alcúdia, con el faro y la bahía en casi todos los hoyos, son dos de los recorridos que explican por qué tantos propietarios de Mallorca juegan en primavera y en otoño.</p>
    <h3>Cataluña y Madrid</h3>
    <p><strong>PGA Catalunya</strong>, en Caldes de Malavella (Girona), con su recorrido Stadium, ha acogido el Open de España y es la puerta de la Costa Brava para el golfista. En Madrid el golf es de club: el <strong>Real Club de la Puerta de Hierro</strong>, fundado a finales del siglo XIX, y <strong>La Moraleja</strong>, con sus recorridos dentro de una de las urbanizaciones cerradas más consolidadas de España.</p>
    <h3>Canarias y la Costa Blanca</h3>
    <p>En Tenerife, <strong>Abama</strong> baja en terrazas hacia el Atlántico con La Gomera enfrente; es el golf de invierno del sur de Europa. En la Costa Blanca, <strong>Las Colinas</strong>, en Orihuela Costa, ha formado una comunidad residencial alrededor de un recorrido de valle muy cuidado.</p>`
  )}
${section(
    'tint',
    'vivir',
    `    <h2 id="vivir">Vivir junto al campo: villas, comunidades y resorts</h2>
    <p>La casa de golf no es un único producto. En los destinos que acabamos de recorrer conviven tres formas muy distintas de propiedad, y cada una tiene sus propias reglas:</p>
    <ul>
      <li><strong>La villa sobre la calle.</strong> Una casa independiente con vistas al recorrido, a menudo con piscina, jardín, casa de invitados y personal: en Quinta do Lago, Vale do Lobo, Sotogrande o Las Brisas.</li>
      <li><strong>La urbanización cerrada.</strong> Control de accesos, seguridad propia, viales privados y normas de construcción y uso estrictas: La Zagaleta, Monte Rei, Costa Terra, La Moraleja.</li>
      <li><strong>El apartamento de resort.</strong> Una unidad dentro del complejo, muchas veces con un programa de alquiler gestionado por el propio resort cuando el propietario no la usa.</li>
    </ul>
    <p>En casi todos los casos hay una comunidad por medio. En España, la <em>comunidad de propietarios</em> regida por la Ley de Propiedad Horizontal y sus estatutos; en Portugal, la <em>propriedade horizontal</em> y su reglamento de condominio, o una asociación de propietarios en las urbanizaciones de villas. La comunidad fija las normas — obras, alquiler, animales, ruido, uso de los buggies —, gestiona las zonas comunes y suele contratar una póliza para ellas. En Portugal, además, el seguro contra incendio del edificio en propiedad horizontal es obligatorio.</p>
    <p>La vida diaria también es diferente. Hay seguridad privada, jardineros y mantenimiento de piscinas contratados por la comunidad o por el propietario; hay buggies que circulan por viales comunes; hay casas que pasan meses cerradas entre una visita y la siguiente. Nada de eso es un problema, siempre que la póliza lo conozca.</p>`
  )}
${section(
    'plain',
    'proteger',
    `    <h2 id="proteger">Proteger la casa, el contenido y la familia</h2>
    <p>Cuando revisamos las pólizas de una casa de golf, las mismas preguntas aparecen una y otra vez:</p>
    <ul>
      <li><strong>El coste de reconstrucción.</strong> En una urbanización de alto valor, con materiales y normas estéticas exigentes, reconstruir cuesta mucho más que el valor catastral o la media de la zona. La suma asegurada debe partir de ese coste, idealmente con una tasación.</li>
      <li><strong>La póliza de la comunidad frente a la suya.</strong> La de la comunidad cubre las zonas comunes y, a veces, la estructura; casi nunca el interior, las mejoras, el contenido ni su responsabilidad como propietario. Hay que leer las dos juntas para que no haya huecos ni duplicidades.</li>
      <li><strong>El monte y los temporales.</strong> Muchos campos lindan con pinar o con sierra: el Algarve interior y la Serranía de Ronda han vivido incendios forestales graves. Los temporales de viento y lluvia, cada vez más intensos, completan el cuadro.</li>
      <li><strong>Las ausencias largas.</strong> Las condiciones suelen limitar el robo y los daños por agua cuando la casa está desocupada más de cierto tiempo, a veces con exigencias de alarma conectada o de cortar el agua.</li>
      <li><strong>El arte y el contenido.</strong> Obra, joyas, relojes y bodega merecen una relación valorada y, a menudo, una cobertura a valor convenido.</li>
      <li><strong>La responsabilidad civil del golfista.</strong> Una bola desviada puede herir a otro jugador o romper un cristal. La responsabilidad civil familiar, con cobertura mundial, responde de esos daños dentro y fuera del campo; conviene comprobar que la actividad deportiva no está excluida.</li>
      <li><strong>El equipo de golf de viaje.</strong> Palos y bolsa en el avión o en el coche: cobertura de objetos personales fuera de casa.</li>
      <li><strong>El buggy.</strong> En el campo lo suele cubrir el club; si el suyo circula por los viales de la urbanización, puede necesitar seguro propio.</li>
      <li><strong>El alquiler a través del resort.</strong> Un programa de alquiler es un uso comercial y tiene que estar declarado.</li>
      <li><strong>El premio al hoyo en uno.</strong> Si organiza un torneo benéfico o de empresa con un coche como premio, existe un seguro de indemnización de premios que asume ese riesgo.</li>
    </ul>
    <p>Por último, los riesgos extraordinarios, donde los dos países funcionan de forma muy diferente:</p>
${compareTable('Riesgos extraordinarios y comunidad en España y en Portugal', [
  ['Riesgos extraordinarios', 'El Consorcio de Compensación de Seguros cubre inundación, terremoto o tempestad ciclónica atípica, a través del recargo incluido en las pólizas de daños', 'No hay un sistema público equivalente: el fenómeno sísmico es una cobertura opcional que hay que contratar expresamente'],
  ['Comunidad', 'Comunidad de propietarios (Ley de Propiedad Horizontal) y sus estatutos', 'Propriedade horizontal y reglamento de condominio; seguro contra incendio del edificio obligatorio'],
  ['Póliza propia', 'Interior, mejoras, contenido y responsabilidad del propietario', 'Igual; con especial atención al fenómeno sísmico y a los periodos de desocupación'],
])}`
  )}
${section(
    'tint',
    'lista',
    `    <h2 id="lista">Lista de comprobación para una casa de golf</h2>
    <ul>
      <li>Suma asegurada basada en el coste de reconstrucción, no en el precio de compra.</li>
      <li>Póliza de la comunidad leída junto a la propia, con las fronteras claras.</li>
      <li>Periodos de desocupación declarados y medidas de seguridad acordadas por escrito.</li>
      <li>Arte, joyas y bodega relacionados y valorados.</li>
      <li>Responsabilidad civil familiar con ámbito mundial y sin exclusión del golf.</li>
      <li>El alquiler, si existe, declarado; el buggy y el personal, contemplados.</li>
      <li>En Portugal, fenómeno sísmico contratado; en España, conocer lo que cubre el Consorcio.</li>
    </ul>`
  )}
${section(
    'plain',
    'aviso',
    `    <h2 id="aviso" class="visually-hidden">Aviso importante</h2>
    <div class="callout">
      <span class="callout-label">Aviso importante</span>
      Esta guía es informativa y no constituye una oferta ni asesoramiento jurídico. La cobertura depende siempre de la suscripción del riesgo por la aseguradora y de las condiciones de la póliza efectivamente emitida; límites, franquicias y exclusiones varían de un caso a otro.
    </div>`
  )}`,
  faqTitle: 'Golf y viviendas de lujo — preguntas',
  faq: [
    {
      q: '¿La póliza de la comunidad cubre mi villa?',
      a: '<p>Normalmente solo en parte. La póliza de la comunidad cubre las zonas comunes y, según los estatutos, la estructura. El interior, las mejoras, el contenido, el arte y su responsabilidad como propietario suelen quedar fuera y necesitan una póliza propia, coordinada con la de la comunidad.</p>',
    },
    {
      q: 'Si mi bola hiere a otro jugador, ¿quién paga?',
      a: '<p>Usted responde de los daños que cause por negligencia. Una responsabilidad civil familiar con cobertura mundial se ocupa de esa reclamación, incluida la defensa, siempre que el golf no esté excluido. Es una de las primeras cosas que comprobamos en la póliza.</p>',
    },
    {
      q: 'Pasamos meses fuera de la casa. ¿Afecta al seguro?',
      a: '<p>Sí. Las condiciones suelen limitar el robo y los daños por agua cuando la vivienda está desocupada más de un número de días, y pueden exigir alarma conectada o cortar el agua. Hay que declarar el uso real y acordar las medidas por escrito.</p>',
    },
    {
      q: '¿Puedo alquilar mi apartamento a través del programa del resort?',
      a: '<p>Sí, pero es un uso comercial y debe declararse. La póliza del resort protege al resort; su unidad, su contenido y su responsabilidad como propietario necesitan una póliza que admita el alquiler.</p>',
    },
    {
      q: '¿Qué diferencia hay entre España y Portugal ante un terremoto o una inundación?',
      a: '<p>En España el Consorcio de Compensación de Seguros cubre los riesgos extraordinarios a través del recargo incluido en las pólizas de daños. En Portugal no existe un sistema equivalente y el fenómeno sísmico es una cobertura opcional que conviene contratar expresamente.</p>',
    },
  ],
  related: [
    { url: '/es/', label: 'Seguros para grandes patrimonios en España y Portugal' },
    { url: '/es/seguro-hogar-alto-valor/', label: 'Seguro de hogar de alto valor' },
    { url: '/es/seguro-responsabilidad-civil-familiar/', label: 'Responsabilidad civil familiar' },
    { url: '/es/seguro-alquiler-villa-lujo/', label: 'Alquiler vacacional de una villa de lujo' },
    { url: '/es/puertos-deportivos-yates-portugal-espana/', label: 'Puertos deportivos y yates en Portugal y España' },
  ],
};
