/**
 * /es/seguro-finca-vinedo/  (cluster: niche-estate)
 *
 * Search intent: "seguro finca rústica", "seguro viñedo", "seguro bodega",
 * "seguro quinta Portugal" — owners of fincas, cortijos, quintas and herdades
 * where a family residence, a farm, a winery and often a hospitality business
 * share one ownership.
 *
 * Spanish-specific angle: the reader knows Agroseguro and the Spanish
 * combined agricultural insurance system; Portugal has its own state-supported
 * crop insurance scheme. Both are a separate layer, mentioned generally. The
 * core message is consolidation: one coherent programme instead of five
 * inconsistent policies. Placed through specialist markets and co-brokerage
 * partners; no insurer named, no prices.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';
import { section, cardsSection, compareTable, howWeWork, disclaimer } from './niche-shared.mjs';

export const NICHE_ESTATE_PAGE = {
  slug: 'seguro-finca-vinedo',
  url: '/es/seguro-finca-vinedo/',
  cluster: 'niche-estate',
  title: 'Seguro de fincas, bodegas y viñedos | Adler & Rochefort',
  description:
    'Fincas, quintas, bodegas y viñedos en España y Portugal: vivienda, explotación, vino en bodega, incendio forestal y enoturismo en un programa coherente.',
  keywords:
    'seguro finca rústica, seguro viñedo, seguro bodega, seguro quinta Portugal, seguro herdade Alentejo, seguro cortijo, seguro enoturismo, seguro vino en bodega, seguro incendio forestal finca, seguro finca Mallorca',
  eyebrow: 'Coberturas especializadas · Fincas y viñedos',
  h1: 'Seguro de fincas, bodegas y viñedos en España y Portugal',
  standfirst:
    'Una casa familiar, una explotación agrícola, una bodega y, a menudo, un pequeño negocio de enoturismo o de eventos — con un solo propietario y, casi siempre, cinco pólizas que nadie ha leído juntas. Ordenamos ese conjunto en un programa coherente.',
  published: '2026-09-26T09:00:00+00:00',
  modified: '2026-09-26T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Fincas y viñedos' }],
  pullquote:
    'Una finca no es una casa con terreno: es una casa, una empresa y un paisaje que arden con el mismo incendio.',
  schemaType: 'Article',
  formHeading: 'Solicite un análisis por escrito de su finca',
  formBranch: 'Español · Finca y viñedo',
  formSubject: 'Finca, bodega o viñedo',
  formCta: 'Solicitar el análisis',
  formIntro:
    'Descríbanos la finca — edificios, superficie, actividad agrícola, bodega y uso turístico — o envíenos las pólizas actuales. Le respondemos por escrito con un mapa de coberturas y lagunas.',
  formPlaceholder:
    'Por ejemplo: quinta en el Douro con casa principal, dos casas de huéspedes, 18 ha de viña, bodega propia con catas y bodas en verano; cuatro pólizas distintas.',
  sections: `${section(
    'plain',
    'para-quien',
    `    <h2 id="para-quien">Para quién es</h2>
    <p>Trabajamos con propietarios de fincas, cortijos, masías y bodegas en España, y de <em>quintas</em> y <em>herdades</em> en Portugal. Los paisajes cambian; la situación, casi nunca:</p>
    <ul>
      <li><strong>En Portugal</strong>: quintas vinícolas en el Douro, <em>herdades</em> en el Alentejo, casas de campo en la Comporta y fincas históricas en Sintra.</li>
      <li><strong>En España</strong>: bodegas en La Rioja y la Ribera del Duero, cortijos y fincas en Andalucía, <em>possessions</em> en Mallorca y masías en el Empordà.</li>
    </ul>
    <p>La casa principal suele estar asegurada con una póliza de hogar; la explotación, con otra; la maquinaria, con una tercera; la cosecha, en el sistema de seguros agrarios; y la actividad turística, si existe, con una responsabilidad civil contratada deprisa cuando se abrió al público. Cada póliza tiene sus propias sumas, sus propias exclusiones y su propia fecha de renovación. En un siniestro grave — un incendio forestal, por ejemplo — todas intervienen a la vez, y los huecos aparecen entre ellas.</p>`
  )}
${section(
    'tint',
    'riesgos',
    `    <h2 id="riesgos">Los riesgos, y lo que cambia entre España y Portugal</h2>
    <p>El <strong>incendio forestal</strong> es la exposición dominante en el interior de los dos países, y en ambos se ha agravado con veranos más largos y secos. En Portugal, la legislación de defensa contra incendios impone a los propietarios la gestión del combustible — el desbroce — en franjas alrededor de los edificios; en España, las normas son autonómicas y municipales. El incumplimiento puede tener consecuencias en la responsabilidad frente a terceros y en la valoración de un siniestro.</p>
    <p>Otras diferencias que conviene conocer:</p>
${compareTable('Diferencias relevantes entre España y Portugal para asegurar una finca o una bodega', [
  ['Seguro agrario', 'Sistema de seguros agrarios combinados, con apoyo público (Agroseguro y subvenciones estatales y autonómicas)', 'Sistema de seguro de colheitas con apoyo público; también una capa separada'],
  ['Riesgos extraordinarios', 'El Consorcio de Compensación de Seguros cubre terremoto e inundación extraordinaria en las pólizas de daños', 'No hay organismo equivalente: la cobertura sísmica se contrata aparte'],
  ['Accidentes de los trabajadores', 'Contingencias profesionales a través de la Seguridad Social y mutuas colaboradoras', 'Seguro obligatorio de <em>acidentes de trabalho</em>, contratado con una aseguradora privada'],
  ['Denominación de la finca', 'Finca, cortijo, masía, <em>possessió</em>', '<em>Quinta</em>, <em>herdade</em>, <em>monte</em>'],
])}
    <p>El agua — pozos, depósitos, balsas y pequeñas presas — merece una mención propia: su rotura puede dañar fincas vecinas, y no todas las pólizas la tratan igual.</p>`
  )}
${cardsSection(
    'plain',
    'coberturas',
    'Lo que incluye un programa bien diseñado',
    'Estas son las piezas que revisamos y, cuando procede, reunimos en un único programa con criterios comunes de valoración:',
    [
      ['Casa principal y casas de huéspedes', 'Por su coste real de reconstrucción, incluidos edificios históricos y materiales tradicionales, con las condiciones de una vivienda de alto valor.'],
      ['Construcciones auxiliares, muros y agua', 'Naves, almacenes, cuadras, muros de piedra y de contención, pozos, depósitos, balsas y sistemas de riego, con sumas propias.'],
      ['Contenido, arte y colecciones', 'El mobiliario de la casa y, aparte y a valor convenido, las obras de arte, las antigüedades y las colecciones.'],
      ['Vino en bodega', 'Valoración a precio de coste o de mercado, según convenga; para los vinos de alta gama, valores convenidos por referencia. También la pérdida por avería de la climatización o contaminación, cuando se incluye.'],
      ['Equipos de bodega y maquinaria', 'Depósitos, prensas, líneas de embotellado, tractores y maquinaria agrícola, con avería de maquinaria donde proceda.'],
      ['Cosechas', 'El seguro agrario, con apoyo público en ambos países, como capa separada y coordinada con el resto del programa.'],
      ['Responsabilidad civil y de productos', 'Frente a visitantes, en catas, visitas guiadas, eventos y bodas, y por los productos vendidos: el vino y cualquier otro producto de la finca.'],
      ['Responsabilidad medioambiental', 'Los costes de reparar un daño medioambiental — un vertido, un incendio que se extiende — que las responsabilidades civiles generales suelen excluir.'],
      ['Pérdida de beneficios', 'La interrupción de la actividad de la bodega o del negocio turístico tras un siniestro cubierto, incluida la pérdida de reservas.'],
      ['Personal', 'Los accidentes de trabajo de los empleados — obligatorios en los dos países — y la responsabilidad del empleador.'],
    ]
  )}
${section(
    'tint',
    'lagunas',
    `    <h2 id="lagunas">Lo que suele fallar en las pólizas de una finca</h2>
    <ul>
      <li><strong>Una póliza de hogar para toda la finca.</strong> La póliza de hogar cubre una vivienda. No está escrita para naves, bodega, maquinaria ni visitantes de pago, y la actividad económica no declarada es una causa clásica de rechazo.</li>
      <li><strong>El vino valorado a precio de coste</strong> cuando lo que se ha perdido son añadas con valor de mercado muy superior — o al revés.</li>
      <li><strong>El enoturismo añadido sin avisar.</strong> Las catas, las bodas y el alojamiento cambian el riesgo. Si la aseguradora no lo sabe, la responsabilidad civil puede no responder.</li>
      <li><strong>Sumas antiguas en edificios rehabilitados.</strong> La restauración de un edificio con piedra, madera y técnicas tradicionales cuesta mucho más que una construcción estándar.</li>
      <li><strong>Pólizas que no hablan entre sí.</strong> Tras un incendio, cada aseguradora mira su parte; lo que cae entre dos pólizas no lo paga ninguna.</li>
      <li><strong>Olvidar la pérdida de beneficios.</strong> Una bodega puede tardar años en recuperar su producción y su clientela; el daño material es solo una parte de la pérdida.</li>
    </ul>`
  )}
${section(
    'plain',
    'que-necesitamos',
    `    <h2 id="que-necesitamos">Lo que necesitamos para obtener condiciones</h2>
    <ul>
      <li>Un plano o una descripción de la finca: edificios, usos, superficies construidas y año o época de construcción.</li>
      <li>La superficie cultivada, los cultivos y si ya existe seguro agrario.</li>
      <li>La producción de la bodega, el inventario de vino y cómo se valora hoy.</li>
      <li>La actividad turística: visitas, catas, eventos, alojamiento, número de visitantes al año.</li>
      <li>Medidas de protección contra incendios: franjas de desbroce, agua disponible, accesos, sistemas de detección.</li>
      <li>El número de empleados, fijos y de temporada.</li>
      <li>Las pólizas actuales y el historial de siniestros de los últimos años.</li>
    </ul>
    <p>Para fincas de mayor valor, una inspección — normalmente sin coste para usted — permite fijar las sumas con rigor y recomendar medidas de prevención.</p>`
  )}
${howWeWork('tint', 'mercados especializados en propiedades rurales, bodegas y patrimonio de alto valor')}
${disclaimer('plain', 'El seguro agrario se rige por su propio sistema en cada país y se contrata en sus términos.')}`,
  faqTitle: 'Seguro de fincas y viñedos — preguntas',
  faq: [
    {
      q: '¿Puedo asegurar la casa, la bodega y la actividad turística en una sola póliza?',
      a: '<p>A menudo sí, en un programa único o en un conjunto coordinado de pólizas con criterios comunes, y esa es precisamente nuestra recomendación. Algunas piezas, como el seguro agrario de las cosechas, siguen su propio sistema y se coordinan por separado.</p>',
    },
    {
      q: '¿Cómo se valora el vino en bodega?',
      a: '<p>Puede valorarse a precio de coste o a precio de mercado. Para vinos de alta gama o añadas antiguas conviene pactar valores por referencia, con documentación, para evitar discusiones tras un siniestro. La elección depende de si el vino es existencia comercial o colección.</p>',
    },
    {
      q: '¿Está cubierto el incendio forestal?',
      a: '<p>El incendio es una cobertura básica de las pólizas de daños, también cuando procede de un incendio forestal. Lo que hay que comprobar son las sumas, las construcciones y bienes exteriores incluidos, la pérdida de beneficios y las obligaciones de prevención, como el desbroce, que pueden afectar a un siniestro.</p>',
    },
    {
      q: 'Organizamos bodas y catas en la finca. ¿Qué necesitamos?',
      a: '<p>Una responsabilidad civil que describa esa actividad: visitantes, eventos, servicio de comida y bebida y venta de productos. Una responsabilidad civil de hogar o agrícola no suele cubrirlo. También conviene revisar la pérdida de beneficios por cancelación de eventos tras un siniestro.</p>',
    },
    {
      q: '¿Qué diferencia hay entre asegurar una finca en España y en Portugal?',
      a: '<p>Entre otras: en España el Consorcio de Compensación de Seguros cubre terremoto e inundación extraordinaria dentro de las pólizas de daños, y en Portugal la cobertura sísmica se contrata aparte; y los accidentes de trabajo son un seguro privado obligatorio en Portugal, mientras que en España pasan por la Seguridad Social y las mutuas.</p>',
    },
  ],
  related: [
    { url: '/es/', label: 'Seguros para grandes patrimonios en España y Portugal' },
    { url: '/es/seguro-hogar-alto-valor/', label: 'Seguro de hogar de alto valor' },
    { url: '/es/seguro-caballos/', label: 'Seguro de caballos e instalaciones ecuestres' },
    { url: '/es/seguro-alquiler-villa-lujo/', label: 'Seguro para el alquiler de una villa de lujo' },
  ],
};
