/**
 * /es/puertos-deportivos-yates-portugal-espana/  (cluster: nautical)
 *
 * Pillar article, September 2026. The sea comes first: the marinas and
 * sailing grounds of Portugal and Spain (~45%), then the waterfront homes and
 * berths (~30%), then protecting the yacht, the crew, the house and the family
 * (~25%), closing on a written assessment.
 *
 * Spanish reader: knows Palma, the Copa del Rey regatta, Puerto Banús and the
 * America's Cup in Valencia and Barcelona; often less familiar with the
 * Portuguese Atlantic coast, Madeira and the Azores. Formal usted. No insurer
 * named, no prices; compulsory-insurance and crewing rules kept general.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';
import { section, compareTable } from './niche-shared.mjs';

export const NAUTICAL_PAGE = {
  slug: 'puertos-deportivos-yates-portugal-espana',
  url: '/es/puertos-deportivos-yates-portugal-espana/',
  cluster: 'nautical',
  title: 'Puertos deportivos y yates: Portugal y España | Adler & Rochefort',
  description:
    'De Palma y Puerto Banús a Vilamoura, Cascais y Horta: los grandes puertos deportivos de la península, las casas frente al mar y cómo proteger el yate.',
  keywords:
    'puertos deportivos Portugal, marina Vilamoura, marina Cascais, Club de Mar Palma, Puerto Portals, Port Adriano, Puerto Banús, Sotogrande puerto, ARC Las Palmas, Horta Azores, seguro yate, seguro embarcación de recreo, vivienda frente al mar',
  eyebrow: 'Private Clients · Náutica',
  h1: 'Puertos deportivos y yates en Portugal y España: del Mediterráneo al Atlántico',
  standfirst:
    'Palma y Puerto Banús, Vilamoura y Cascais, Horta y Las Palmas: una guía de los puertos y aguas que definen la náutica en la península, de las casas que miran al pantalán y de lo que conviene tener resuelto antes de soltar amarras.',
  published: '2026-09-27T09:00:00+00:00',
  modified: '2026-09-27T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Puertos deportivos y yates' }],
  pullquote:
    'El mar no distingue entre el Mediterráneo y el Atlántico. La póliza, sí — y conviene saber dónde traza la línea.',
  schemaType: 'Article',
  formHeading: 'Solicite un análisis por escrito de su yate y su casa',
  formBranch: 'Español · Yate y vivienda frente al mar',
  formSubject: 'Yate, embarcación y vivienda frente al mar',
  formCta: 'Solicitar el análisis',
  formIntro:
    'Cuéntenos qué embarcación tiene, dónde tiene el amarre, por dónde navega y si la fleta, o envíenos las pólizas actuales del barco y de la casa. Le respondemos por escrito.',
  formPlaceholder:
    'Por ejemplo: velero de 20 metros con amarre en Puerto Portals, patrón profesional, invernada en Palma y travesía al Caribe prevista; apartamento frente al puerto.',
  sections: `${section(
    'plain',
    'mar',
    `    <h2 id="mar">Dos mares y una península</h2>
    <p>Pocas costas del mundo ofrecen tanta variedad en tan pocas millas. Al este, el Mediterráneo de las Baleares y la Costa del Sol: calas de agua transparente, puertos llenos de historia y una temporada que se alarga de mayo a octubre. Al oeste y al sur, el Atlántico portugués: vientos constantes, olas de verdad y una tradición de navegación oceánica que empieza en Lisboa y continúa hasta Madeira y las Azores.</p>
    <p>España ha sido dos veces el centro del mundo de la vela en este siglo: Valencia acogió la America’s Cup en 2007 y en 2010, y Barcelona celebró la 37.ª edición en 2024. Cada verano, la Copa del Rey reúne en Palma a una de las flotas más espectaculares del Mediterráneo. Portugal, por su parte, es la escala natural de quien cruza el Atlántico. Esta guía recorre los dos países desde el agua, después desde el muelle, y termina con lo que conviene tener resuelto.</p>`
  )}
${section(
    'tint',
    'portugal',
    `    <h2 id="portugal">Portugal: la costa atlántica y sus islas</h2>
    <h3>Vilamoura, Lagos y Portimão</h3>
    <p>La <strong>marina de Vilamoura</strong> es el gran puerto deportivo del Algarve, rodeada de restaurantes, hoteles y apartamentos, a un paso de los campos de golf. Más al oeste, la <strong>marina de Lagos</strong>, al abrigo de la ciudad histórica, es punto de partida y de llegada de muchas travesías oceánicas, y <strong>Portimão</strong> ofrece fondeaderos y una marina bien protegida junto a la Praia da Rocha.</p>
    <h3>Cascais y Lisboa</h3>
    <p>La <strong>marina de Cascais</strong>, frente a la ciudadela, es la base de la vela de competición portuguesa y ha acogido regatas internacionales de primer nivel. En Lisboa, el Tajo ofrece una de las entradas más bellas de Europa: la <strong>Doca de Alcântara</strong>, bajo el puente 25 de Abril, y la <strong>marina del Parque das Nações</strong>, en la zona moderna de la ciudad. Al otro lado del estuario, <strong>Tróia</strong> abre la puerta a la península y a la Comporta.</p>
    <h3>Madeira y las Azores</h3>
    <p>En Madeira, <strong>Funchal</strong> y la <strong>marina de Calheta</strong>, en la costa soleada del sur, son escalas de clima suave todo el año. Y en las Azores, <strong>Horta</strong>, en la isla de Faial, es la parada mítica de la navegación transatlántica: la tradición manda que cada tripulación deje pintado su emblema en el muelle antes de seguir viaje, y el café del puerto guarda décadas de historias de travesía.</p>
    <h3>La ruta del Atlántico</h3>
    <p>Cada otoño, decenas de yates bajan por la costa portuguesa hacia Madeira y Canarias para cruzar al Caribe con el alisio. Muchos tomarán la salida de la ARC en Las Palmas. Para el armador de la península, Portugal es a la vez destino y etapa.</p>`
  )}
${section(
    'plain',
    'espana',
    `    <h2 id="espana">España: del Mediterráneo a Canarias</h2>
    <h3>Palma de Mallorca</h3>
    <p>Palma es la capital náutica del Mediterráneo occidental y uno de los grandes centros de superyates del mundo. El <strong>Club de Mar</strong> recibe algunas de las mayores esloras del Mediterráneo; el <strong>Real Club Náutico de Palma</strong> organiza la Copa del Rey; <strong>Puerto Portals</strong> es el punto de encuentro social del verano, y <strong>Port Adriano</strong>, en El Toro, combina amarres para grandes esloras con una arquitectura muy cuidada. Palma es también el lugar donde se reparan, se reforman y se invernan muchos yates del Mediterráneo.</p>
    <h3>Ibiza</h3>
    <p><strong>Marina Ibiza</strong> e <strong>Ibiza Magna</strong>, frente a Dalt Vila, son la base de una temporada que vive tanto en el agua como en tierra, con Formentera a la vista.</p>
    <h3>La Costa del Sol</h3>
    <p><strong>Puerto Banús</strong> es desde hace décadas la imagen del lujo marbellí, con sus yates alineados junto al paseo. Más al oeste, el puerto de <strong>Sotogrande</strong> ofrece una náutica más tranquila, integrada en la urbanización, con casas y apartamentos que dan directamente a los pantalanes.</p>
    <h3>Barcelona, Valencia y la Costa Brava</h3>
    <p><strong>OneOcean Port Vell</strong>, en el corazón de Barcelona, es una de las marinas de grandes esloras más importantes del Mediterráneo y la sede de la America’s Cup de 2024. Valencia conserva la huella de las dos ediciones de 2007 y 2010. Y la <strong>Costa Brava</strong>, con sus calas y sus puertos pequeños, sigue siendo la navegación de verano de muchas familias catalanas.</p>
    <h3>Canarias</h3>
    <p><strong>Las Palmas de Gran Canaria</strong> es el punto de partida de la ARC, el gran rally transatlántico hacia el Caribe, y cada noviembre su puerto se llena de tripulaciones de medio mundo preparando la travesía.</p>`
  )}
${section(
    'tint',
    'vivir',
    `    <h2 id="vivir">Vivir frente al mar: casas, apartamentos y amarres</h2>
    <p>La vida náutica también se compra en tierra. En los destinos que acabamos de recorrer hay tres formas habituales de hacerlo:</p>
    <ul>
      <li><strong>El apartamento de marina.</strong> En Vilamoura, en Puerto Portals, en Port Adriano o en el puerto de Sotogrande: la terraza sobre el agua y el barco a pocos pasos.</li>
      <li><strong>La villa frente al mar.</strong> En primera línea en Cascais, en el sur de Mallorca, en la Costa del Sol o en la costa portuguesa, a veces con acceso directo al agua.</li>
      <li><strong>La casa con embarcadero.</strong> Donde la normativa costera lo permite, una casa con pantalán o embarcadero privado. En los dos países el dominio público marítimo-terrestre limita mucho lo que se puede construir y mantener en la orilla, y cada caso depende de su autorización.</li>
    </ul>
    <p>El amarre merece una nota aparte. En la mayoría de los puertos deportivos de España y de Portugal, lo que se adquiere no es la propiedad del agua, sino un derecho de uso por un periodo largo, ligado a la concesión del puerto. Es un activo valioso, que se compra, se vende y se alquila, pero sus condiciones — duración, transmisión, obligaciones — dependen del reglamento de cada puerto.</p>
    <p>Y la vida frente al mar tiene sus propias exigencias: el salitre, que castiga carpinterías, climatización y domótica; los temporales de invierno, que en el Atlántico y en el Mediterráneo pueden ser violentos; y casas que pasan meses cerradas mientras la familia navega o está en otro país.</p>`
  )}
${section(
    'plain',
    'proteger',
    `    <h2 id="proteger">Proteger el yate, la tripulación y la casa</h2>
    <ul>
      <li><strong>Casco y máquinas a valor convenido.</strong> El valor del yate se acuerda al contratar, para que en una pérdida total no haya discusión sobre cuánto valía.</li>
      <li><strong>Responsabilidad civil.</strong> El seguro de responsabilidad civil de las embarcaciones de recreo es obligatorio en los dos países; los mínimos legales son bajos para un yate de alto valor, y conviene contratar límites acordes con el riesgo real.</li>
      <li><strong>La tripulación y el patrón profesional.</strong> Quien contrata a la tripulación es su empleador, con las obligaciones de seguridad social y accidentes de trabajo que correspondan. En yates comerciales de cierto tamaño se aplican además las normas internacionales del trabajo marítimo (MLC).</li>
      <li><strong>Uso privado o chárter.</strong> Fletar el yate es una actividad comercial: exige el registro adecuado y una póliza que lo contemple. Una póliza de uso privado no cubre un chárter.</li>
      <li><strong>Zona de navegación.</strong> La póliza delimita dónde puede navegar el barco. Pasar del Mediterráneo al Atlántico, cruzar al Caribe o navegar en temporada de huracanes exige ampliar la zona — o se queda sin cobertura. La invernada también se declara.</li>
      <li><strong>Auxiliares y juguetes.</strong> La neumática, las motos de agua, los <em>seabobs</em> y demás juguetes necesitan figurar en la póliza, con su propia responsabilidad civil.</li>
      <li><strong>Efectos personales a bordo.</strong> Joyas, relojes, equipos y ropa de la familia y de los invitados.</li>
      <li><strong>Responsabilidad en el puerto.</strong> Daños a otros barcos, al pantalán o a las instalaciones; muchos puertos exigen acreditar un límite mínimo.</li>
      <li><strong>La casa frente al mar.</strong> Temporal, inundación y la corrosión del salitre (que suele tratarse como desgaste y no como siniestro); y, si hay embarcadero o pantalán, la responsabilidad frente a quien lo use.</li>
      <li><strong>La familia.</strong> Una responsabilidad civil familiar con ámbito mundial completa el conjunto, sin sustituir la del barco.</li>
    </ul>
${compareTable('Riesgos extraordinarios y náutica en España y en Portugal', [
  ['Riesgos extraordinarios en la casa', 'El Consorcio de Compensación de Seguros cubre inundación, terremoto o tempestad ciclónica atípica a través del recargo de las pólizas de daños', 'Sin sistema público equivalente; el fenómeno sísmico es opcional y se contrata expresamente'],
  ['Responsabilidad civil del barco', 'Obligatoria para las embarcaciones de recreo', 'Obligatoria para las embarcaciones de recreo'],
  ['Chárter', 'Registro y seguro específicos para uso comercial', 'Igual: licencia de actividad y seguro adecuado'],
])}`
  )}
${section(
    'tint',
    'lista',
    `    <h2 id="lista">Lista de comprobación antes de la temporada</h2>
    <ul>
      <li>Valor convenido del yate actualizado; auxiliares y juguetes relacionados.</li>
      <li>Límite de responsabilidad civil acorde con la eslora y con lo que exige el puerto.</li>
      <li>Zona de navegación y periodo de invernada coherentes con los planes del año.</li>
      <li>Uso privado o chárter correctamente declarado.</li>
      <li>Tripulación y patrón: contrato, empleador y seguros en regla.</li>
      <li>La casa frente al mar: temporal, inundación, ausencias y embarcadero.</li>
      <li>En Portugal, fenómeno sísmico contratado; en España, conocer lo que cubre el Consorcio.</li>
    </ul>`
  )}
${section(
    'plain',
    'aviso',
    `    <h2 id="aviso" class="visually-hidden">Aviso importante</h2>
    <div class="callout">
      <span class="callout-label">Aviso importante</span>
      Esta guía es informativa y no constituye una oferta ni asesoramiento jurídico. Los seguros obligatorios, el registro de las embarcaciones y las obligaciones laborales de la tripulación dependen de la bandera, del uso y del tamaño del yate, y deben confirmarse en cada caso. La cobertura depende siempre de la suscripción del riesgo por la aseguradora y de las condiciones de la póliza efectivamente emitida.
    </div>`
  )}`,
  faqTitle: 'Puertos deportivos y yates — preguntas',
  faq: [
    {
      q: '¿Es obligatorio asegurar un yate de recreo?',
      a: '<p>Sí. Tanto en España como en Portugal la responsabilidad civil de las embarcaciones de recreo es obligatoria. Los mínimos legales, sin embargo, son modestos para un yate de alto valor; lo razonable es contratar límites acordes con el riesgo y añadir el casco a valor convenido.</p>',
    },
    {
      q: '¿Puedo fletar mi yate algunas semanas con mi póliza actual?',
      a: '<p>No. El chárter es una actividad comercial que exige el registro adecuado y una póliza que lo contemple. Fletar con una póliza de uso privado puede dejar el barco, la tripulación y los invitados sin cobertura.</p>',
    },
    {
      q: 'Quiero cruzar al Caribe con la ARC. ¿Qué debo revisar?',
      a: '<p>Sobre todo la zona de navegación: la mayoría de pólizas del Mediterráneo no cubren la travesía atlántica ni el Caribe sin una ampliación, y suelen excluir o condicionar la temporada de huracanes. También la tripulación, el equipo de seguridad exigido y los efectos personales a bordo.</p>',
    },
    {
      q: 'El amarre en el puerto, ¿es de mi propiedad?',
      a: '<p>En la mayoría de los puertos deportivos se adquiere un derecho de uso por un periodo largo, ligado a la concesión del puerto, y no la propiedad. Sus condiciones dependen del reglamento de cada puerto; para cualquier compra conviene revisarlas con un abogado.</p>',
    },
    {
      q: '¿El seguro de la casa cubre el daño del salitre?',
      a: '<p>Por lo general no: la corrosión progresiva se considera desgaste y mantenimiento. Lo que sí debe cubrir una buena póliza es el daño súbito de un temporal, una inundación o la entrada de agua de mar, con las condiciones pactadas.</p>',
    },
  ],
  related: [
    { url: '/es/', label: 'Seguros para grandes patrimonios en España y Portugal' },
    { url: '/es/seguro-hogar-alto-valor/', label: 'Seguro de hogar de alto valor' },
    { url: '/es/seguro-responsabilidad-civil-familiar/', label: 'Responsabilidad civil familiar' },
    { url: '/es/seguro-alquiler-villa-lujo/', label: 'Alquiler vacacional de una villa de lujo' },
    { url: '/es/golf-viviendas-lujo-portugal-espana/', label: 'Golf y viviendas de lujo en Portugal y España' },
  ],
};
