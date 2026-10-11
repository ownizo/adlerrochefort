/**
 * October 2026 HNW pages, Spanish (neutral formal Spanish, usted).
 *
 *   IPMI_PAGE          /es/allianz-care-vs-cigna-global-seguro-salud-internacional/  (cluster: ipmi)
 *   CLASSIC_CARS_PAGE  /es/seguro-coches-clasicos-alto-valor-portugal-espana/        (cluster: classic-cars)
 *   MADRID_HNW_PAGE    /es/familias-alto-patrimonio-madrid-seguros/                  (Spanish only)
 *
 * The Madrid page is the high-net-worth companion of /es/seguros-madrid/ (the
 * general city page for Latin American families): it covers what changes when
 * the family has significant wealth — security, art, international health with
 * cover at home and in the US, K&R, staff, the family holding — and links both
 * ways so the two do not compete. No prices; insurers named only in the IPMI page.
 */
import { BREADCRUMB_ROOT, BREADCRUMB_SPAIN } from './shared.mjs';
import { sec, table, ul, p, PUBLISHED_OCT } from '../lib/hnw-oct-sections.mjs';

export const IPMI_PAGE = {
  slug: 'allianz-care-vs-cigna-global-seguro-salud-internacional',
  url: '/es/allianz-care-vs-cigna-global-seguro-salud-internacional/',
  cluster: 'ipmi',
  title: 'Allianz Care o Cigna Global: seguro de salud internacional | Adler & Rochefort',
  description:
    'Allianz Care o Cigna Global: cómo se comparan los dos seguros de salud internacionales para familias en Portugal y España, con o sin cobertura en Estados Unidos.',
  keywords:
    'Allianz Care vs Cigna Global, seguro de salud internacional España, seguro de salud internacional Portugal, seguro médico internacional latinoamericanos, Cigna Global España, Allianz Care España, seguro de salud con cobertura en Estados Unidos, seguro médico internacional Miami',
  eyebrow: 'Salud internacional · Portugal y España',
  h1: 'Allianz Care o Cigna Global: el seguro de salud internacional para familias en Portugal y España',
  standfirst:
    'Para muchas familias basta una póliza española o portuguesa. Pero quien vive entre Madrid, Miami y su país de origen, o quiere poder tratarse en el mejor hospital para cada enfermedad, necesita un seguro de salud internacional. Comparamos dos de los planes por los que más nos preguntan.',
  published: PUBLISHED_OCT,
  modified: PUBLISHED_OCT,
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Allianz Care o Cigna Global' }],
  pullquote: 'La pregunta no es qué seguro es mejor. Es dónde quiere usted poder tratarse.',
  schemaType: 'Article',
  formHeading: 'Solicite una comparación por escrito',
  formBranch: 'Español · Salud',
  formSubject: 'Allianz Care o Cigna Global',
  formCta: 'Solicitar la comparación',
  formIntro:
    'Cuéntenos quién necesita cobertura, dónde vive la familia y dónde querría poder tratarse — incluido Estados Unidos o su país de origen. Le respondemos por escrito con los dos planes configurados para su caso.',
  formPlaceholder:
    'Por ejemplo: matrimonio de 48 y 45 años con dos hijos, vivimos en Madrid, viajamos a Caracas y a Miami varias veces al año y queremos cobertura también en Estados Unidos.',
  sections: [
    sec('plain', 'local-o-internacional', '¿Póliza local o seguro internacional?', `${p(
      'Los seguros de salud privados españoles y portugueses se construyen alrededor de un cuadro médico nacional. Funcionan bien para quien se trata donde vive, pero tienen límites que pesan en una familia con vida internacional:'
    )}
${ul([
      '<strong>Límites anuales</strong> por cobertura, suficientes para lo cotidiano y a veces cortos para un tratamiento oncológico largo o una cirugía compleja.',
      '<strong>Cobertura en el extranjero</strong> limitada, normalmente, a urgencias durante un viaje: el tratamiento programado en otro país suele quedar fuera.',
      '<strong>Condiciones de entrada:</strong> en Portugal, las aseguradoras exigen NIF y domicilio portugués al tomador y a cada asegurado, y muchas pólizas tienen edad máxima de contratación.',
    ])}
${p(
      'Un seguro internacional (IPMI, por sus siglas en inglés) funciona al revés: límites medidos en millones, tratamiento programado en el área del mundo que usted elija — Europa, mundo sin Estados Unidos o mundo completo, que incluye su país de origen — y una póliza que acompaña a la familia si vuelve a mudarse. La evacuación y la repatriación forman parte del diseño.'
    )}`),
    sec('tint', 'allianz-care', 'Allianz Care: la nueva gama', `${p(
      'Allianz Care es la marca de salud internacional de Allianz Partners. En noviembre de 2025 lanzó una nueva gama para particulares y familias que viven fuera de su país desde hace al menos doce meses, comercializada sobre todo en la Unión Europea y el Reino Unido.'
    )}
${ul([
      '<strong>Tres planes base: Base, Enhanced y Signature</strong>, todos con hospitalización, habitación individual y repatriación médica incluidas.',
      '<strong>Maternidad</strong> en Enhanced y Signature, tras un periodo de carencia de doce meses.',
      '<strong>Consultas ambulatorias y dental</strong> como coberturas opcionales.',
      '<strong>Chequeos, cribados de cáncer y terapia hormonal sustitutiva</strong> en toda la gama; psiquiatría y psicoterapia ambulatorias sin carencia.',
      '<strong>Un área de cobertura solo Europa</strong>, junto a las opciones mundiales.',
    ])}`),
    sec('plain', 'cigna-global', 'Cigna Global: un plan por módulos', `${p('Cigna Global es el seguro internacional individual de Cigna Healthcare y se construye por capas:')}
${ul([
      '<strong>Tres niveles de cobertura base: Silver, Gold y Platinum</strong> — hospitalización, tratamiento especializado en hospital, oncología y psiquiatría con ingreso. Platinum tiene el límite anual más alto, sin tope fijo.',
      '<strong>Cuatro módulos opcionales:</strong> ambulatorio internacional, evacuación médica, salud y bienestar, y visión y dental.',
      '<strong>Área de cobertura:</strong> mundo sin Estados Unidos o mundo con Estados Unidos.',
      '<strong>Franquicia y copago</strong> a elección, con un máximo anual a cargo del asegurado: la principal palanca para ajustar la prima.',
      '<strong>Maternidad</strong> en Gold y Platinum, después de doce meses asegurada.',
    ])}`),
    sec('tint', 'comparacion', 'Uno al lado del otro', `${table('Allianz Care y Cigna Global comparados', ['', 'Allianz Care', 'Cigna Global'], [
      ['Niveles base', 'Base, Enhanced, Signature', 'Silver, Gold, Platinum'],
      ['Hospitalización, habitación individual', 'En todos los planes', 'En la cobertura base'],
      ['Repatriación / evacuación', 'Repatriación en todos los planes', 'Módulo opcional de evacuación'],
      ['Ambulatorio', 'Opcional', 'Módulo opcional'],
      ['Dental', 'Opcional', 'Módulo opcional (con visión)'],
      ['Maternidad', 'Enhanced y Signature, tras 12 meses', 'Gold y Platinum, tras 12 meses'],
      ['Área de cobertura', 'Incluye opción solo Europa y opciones mundiales', 'Mundo sin EE. UU. o con EE. UU.'],
      ['Cómo se ajusta la prima', 'Nivel, área y coberturas opcionales', 'Franquicia, copago, área y módulos'],
    ])}
${p('Límites, carencias y exclusiones dependen del nivel y figuran en la tabla de prestaciones de cada aseguradora. Las enviamos con cada comparación.')}`),
    sec('plain', 'a-quien', 'A qué familia conviene cada uno', ul([
      '<strong>Una vida en Europa</strong> — casa en Madrid o en Lisboa, colegio y trabajo aquí, viajes ocasionales: Allianz Care con área Europa o mundo sin Estados Unidos suele encajar bien, con la repatriación ya incluida.',
      '<strong>Un pie en Estados Unidos</strong> — casa en Miami, hijos en la universidad en Boston, un hospital de referencia allí: hace falta cobertura mundial con Estados Unidos, y es justo ahí donde más difieren las primas de ambos planes para un mismo perfil. Conviene cotizar los dos.',
      '<strong>El país de origen.</strong> Ambos planes cubren tratamiento programado en América Latina dentro del área mundial; para muchas familias es la razón principal para elegir un seguro internacional.',
      '<strong>Solo para el gran riesgo:</strong> Cigna Global con franquicia alta y copago, pagando lo cotidiano de su bolsillo.',
      '<strong>Antecedentes médicos:</strong> ambas aseguradoras valoran un cuestionario de salud y pueden excluir una enfermedad preexistente o aplicar un recargo. La respuesta puede ser distinta en cada una.',
    ])),
    sec('tint', 'visado', 'Visados y residencia en España y Portugal', `${p(
      'Para el <strong>visado de residencia no lucrativa</strong> en España, los consulados suelen exigir un seguro de salud privado de una aseguradora autorizada a operar en España, con cobertura completa y sin copagos ni carencias. No todas las configuraciones de un seguro internacional cumplen ese requisito — las franquicias y los copagos, por ejemplo —, así que el plan debe configurarse pensando en el visado y comprobarse con el consulado. En <strong>Portugal</strong>, el seguro internacional se usa con frecuencia para acreditar la cobertura en visados de residencia como el D7 o el D8.',
      'Para las familias que viven entre los dos países, un seguro internacional tiene una ventaja evidente: una sola póliza, la misma cobertura en Madrid y en Lisboa, y ningún cambio de aseguradora en la próxima mudanza.'
    )}`),
    sec('plain', 'lista', 'Lista de comprobación', ul([
      'Decida dónde quiere tratarse: Europa, mundo sin Estados Unidos o mundo completo.',
      'Elija primero el nivel base y añada después ambulatorio, dental y evacuación.',
      'Fije la franquicia con criterio: es la palanca principal de la prima.',
      'Si planean un hijo, elijan ya un nivel con maternidad: la carencia empieza el primer día.',
      'Declare los antecedentes médicos completos y pregunte antes cómo los trataría cada aseguradora.',
      'Si el seguro es para un visado español, configúrelo según los requisitos del consulado antes de contratar.',
    ])),
  ].join('\n'),
  faqTitle: 'Allianz Care y Cigna Global — preguntas',
  faq: [
    { q: '¿Es mejor Allianz Care o Cigna Global?', a: '<p>Ninguno es mejor en abstracto. Allianz Care incluye hospitalización y repatriación en todos sus planes y ofrece un área solo Europa; Cigna Global es modular, con franquicias y copagos flexibles y la opción de cubrir o no Estados Unidos. Lo decisivo es dónde vive la familia, adónde viaja, dónde quiere tratarse y qué condiciones ofrece cada aseguradora para sus antecedentes médicos.</p>' },
    { q: '¿Necesito cobertura en Estados Unidos?', a: '<p>Solo si prevé tratarse allí fuera de una urgencia en viaje. El área con Estados Unidos es la más cara en ambos planes y compensa cuando hay un motivo concreto: una casa, hijos que estudian allí o un hospital de referencia.</p>' },
    { q: '¿Me cubre en mi país de origen?', a: '<p>Sí, si elige un área mundial: el tratamiento programado en México, Colombia, Venezuela, Argentina o cualquier otro país de América Latina queda dentro de la cobertura, en las condiciones del plan.</p>' },
    { q: '¿Sirve un seguro internacional para el visado no lucrativo?', a: '<p>Puede servir, pero los consulados suelen exigir una aseguradora autorizada en España y una póliza sin copagos ni carencias. El plan debe configurarse en ese sentido y comprobarse con los requisitos vigentes del consulado.</p>' },
    { q: '¿La maternidad está cubierta desde el principio?', a: '<p>No. Solo en los niveles superiores — Enhanced y Signature en Allianz Care, Gold y Platinum en Cigna Global — y después de doce meses de seguro.</p>' },
  ],
  related: [
    { url: '/es/seguro-salud-espana/', label: 'Seguro de salud en España' },
    { url: '/es/seguro-salud-internacional/', label: 'Seguro de salud en Portugal' },
    { url: '/es/seguro-medico-visado-espana/', label: 'Seguro médico para el visado en España' },
    { url: '/es/familias-alto-patrimonio-madrid-seguros/', label: 'Familias de alto patrimonio en Madrid' },
    { url: '/es/seguro-coches-clasicos-alto-valor-portugal-espana/', label: 'Coches clásicos y de alto valor' },
  ],
};

export const CLASSIC_CARS_PAGE = {
  slug: 'seguro-coches-clasicos-alto-valor-portugal-espana',
  url: '/es/seguro-coches-clasicos-alto-valor-portugal-espana/',
  cluster: 'classic-cars',
  title: 'Seguro de coches clásicos y de alto valor | Adler & Rochefort',
  description:
    'Seguro de coches clásicos y de alto valor en España y Portugal: vehículo histórico, valor convenido, colecciones, uso, circuitos y matrículas extranjeras.',
  keywords:
    'seguro coche clásico, seguro vehículo histórico, reglamento vehículos históricos 2024, seguro valor convenido, seguro coche de lujo España, seguro colección de coches, seguro superdeportivo Marbella, seguro coche clásico Portugal',
  eyebrow: 'Private Clients · Automóviles',
  h1: 'Coches clásicos y de alto valor en España y Portugal: estatus histórico, valor convenido y colecciones',
  standfirst:
    'El clima cuida la chapa, las carreteras de montaña parecen trazadas para un deportivo de los sesenta y en la Costa del Sol hay más superdeportivos que casi en ningún otro lugar de Europa. Una póliza de auto corriente no se escribió para ninguno de ellos.',
  published: PUBLISHED_OCT,
  modified: PUBLISHED_OCT,
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Coches clásicos y de alto valor' }],
  pullquote: 'Después de un siniestro total, la póliza corriente paga lo que vale un coche viejo. La de un clásico paga lo que vale su coche.',
  schemaType: 'Article',
  formHeading: 'Solicite un análisis por escrito de sus coches',
  formBranch: 'Español · Coche',
  formSubject: 'Coches clásicos y de alto valor',
  formCta: 'Solicitar el análisis',
  formIntro:
    'Envíenos la lista de los coches — marca, modelo, año, dónde se guardan y cómo se usan — y las tasaciones que tenga. Le respondemos por escrito: qué pagaría hoy su póliza tras un siniestro total y qué debería pagar.',
  formPlaceholder:
    'Por ejemplo: un Mercedes 280 SL de 1970, un Porsche 911 de 1989 y un deportivo actual; garaje cerrado con alarma en La Moraleja; concentraciones del club dos o tres veces al año.',
  sections: [
    sec('plain', 'espana', 'España: el nuevo Reglamento de Vehículos Históricos', `${p('Desde el 1 de octubre de 2024 rige en España un nuevo Reglamento de Vehículos Históricos, que sustituye al de 1995:')}
${ul([
      'Puede ser histórico el vehículo fabricado o matriculado por primera vez hace al menos treinta años, que ya no se produce y se conserva en estado original o con modificaciones aceptadas.',
      'Muchos coches conservan su matrícula y su tarjeta ITV ordinarias y llevan en el parabrisas un distintivo amarillo con una «H»; otros se catalogan como históricos en la Jefatura de Tráfico tras un informe técnico.',
      'La ITV se espacia: cada dos años entre los 30 y los 40, cada tres entre los 40 y los 45, cada cuatro por encima de los 45; a partir de los 60 años queda exenta.',
      'Las modificaciones no originales deben certificarse por un club o entidad vinculada a los vehículos históricos.',
    ])}`),
    sec('tint', 'portugal', 'Portugal: vehículos de interés histórico', p(
      'En Portugal, un coche con al menos treinta años, fuera de producción, en buen estado y sin alteraciones significativas puede certificarse como <em>veículo de interesse histórico</em> por entidades reconocidas — entre ellas ACP Clássicos, el Clube Português de Automóveis Antigos y el Museu do Caramulo. Los vehículos certificados con más de treinta años están dispensados de la inspección periódica desde 2018 y, en determinadas condiciones, pueden quedar exentos del impuesto de circulación (IUC), algo que conviene confirmar caso por caso. Para el seguro, el certificado es sobre todo una prueba de originalidad y estado.'
    )),
    sec('plain', 'valor', 'Valor convenido, no valor venal', `${p('La cláusula más importante de la póliza de un clásico o de un coche de alto valor es la base de indemnización.')}
${ul([
      '<strong>Valor venal:</strong> lo que paga una póliza corriente tras un siniestro total. En un clásico casi siempre es bajo, y lo fija la aseguradora después del siniestro.',
      '<strong>Valor convenido:</strong> se fija al contratar, con una tasación reciente, fotografías y documentación, y es lo que se paga en caso de siniestro total.',
    ])}
${p('Los valores de los buenos clásicos han cambiado mucho en quince años: el valor convenido debe revisarse cada pocos años y después de cualquier restauración. En un superdeportivo moderno las preguntas son otras: valor de nuevo en los primeros años, cómo se tratan los extras y la personalización, recambios originales y taller oficial.')}`),
    sec('tint', 'coleccion', 'Una colección, no una lista de coches', `${p('Un coleccionista rara vez tiene un solo coche. Una póliza de colección trata el garaje como un todo:')}
${ul([
      'una sola póliza con todos los coches y sus valores convenidos;',
      'coches inmovilizados o en restauración asegurados contra incendio, robo y daños, sin pagar una cobertura de circulación que no usan;',
      'conductores designados, a menudo el propietario y familiares;',
      'cobertura durante el transporte en remolque o por transportista especializado, y en el taller del restaurador;',
      'el propio garaje — protección contra incendio y seguridad — como parte del riesgo.',
    ])}
${p('Algunos productos para coches de lujo solo se suscriben junto con el seguro del hogar: una razón más para mirar el patrimonio en conjunto.')}`),
    sec('plain', 'uso', 'Cómo se usa el coche', ul([
      '<strong>Kilometraje y finalidad:</strong> las pólizas de clásicos parten de un uso de ocio y kilometraje anual limitado.',
      '<strong>Rallies de regularidad, concursos y salidas de club</strong> en carretera abierta suelen ser asegurables; la competición cronometrada y los circuitos, no.',
      '<strong>Tandas en circuito</strong> — Ascari, el Circuito de Jerez, el Autódromo do Algarve — quedan excluidas de casi todas las pólizas de carretera y necesitan un seguro específico para ese día.',
      '<strong>Robo sin llave:</strong> en los coches modernos de alto valor, el robo por amplificación de señal es real; las aseguradoras preguntan por el garaje, el localizador y cómo se guardan las llaves.',
    ])),
    sec('tint', 'matricula', 'Matrículas extranjeras y mudanzas', p(
      'Muchos clásicos llegan con su propietario desde México, Argentina o Estados Unidos, o con matrícula de otro país europeo. En España y en Portugal, quien pasa a ser residente debe matricular el coche dentro de plazos definidos, con inspección e impuestos — en España ante la DGT; en Portugal, con el proceso de importación y el ISV. Hasta entonces hay que resolver qué permite la póliza extranjera, durante cuánto tiempo y qué ocurre tras un siniestro. En un clásico, la mudanza suele ser el momento de resolver a la vez la matrícula y el estatus histórico.'
    )),
    sec('plain', 'lista', 'Lista de comprobación', ul([
      'Valor convenido para cada coche, con una tasación de menos de tres años.',
      'Recambios originales y talleres especializados previstos en la póliza.',
      'Coches inmovilizados o en restauración incluidos.',
      'Rallies, salidas y transporte en remolque confirmados por escrito; circuitos asegurados aparte.',
      'Garaje, seguridad y llaves descritos con exactitud.',
      'Matrícula extranjera: calendario de la matriculación y cobertura hasta entonces acordados antes de la mudanza.',
    ])),
  ].join('\n'),
  faqTitle: 'Coches clásicos y de alto valor — preguntas',
  faq: [
    { q: '¿Un coche histórico necesita un seguro especial?', a: '<p>El seguro obligatorio de responsabilidad civil se aplica a cualquier vehículo en circulación. Lo que cambia es el resto de la póliza: la de un clásico asegura a valor convenido, presupone un uso de ocio limitado y reconoce los eventos de club.</p>' },
    { q: '¿Qué diferencia hay entre valor convenido y valor venal?', a: '<p>El valor convenido se fija al contratar, a partir de una tasación, y se paga tras un siniestro total. El valor venal lo determina la aseguradora después del siniestro, y en un clásico suele ser muy inferior.</p>' },
    { q: '¿Las tandas en circuito están cubiertas?', a: '<p>Casi nunca en una póliza de carretera. La competición y los días de circuito son exclusiones habituales; hace falta un seguro específico para cada evento.</p>' },
    { q: '¿Puedo asegurar varios coches en una sola póliza?', a: '<p>Sí. Una póliza de colección cubre todos los coches con valores convenidos, conductores designados y cobertura para los coches inmovilizados, en transporte o en restauración.</p>' },
  ],
  related: [
    { url: '/es/seguro-coche-espana/', label: 'Seguro de auto en España' },
    { url: '/es/seguro-coche-portugal/', label: 'Seguro de auto en Portugal' },
    { url: '/es/seguro-hogar-alto-valor/', label: 'Seguro de hogar de alto valor' },
    { url: '/es/allianz-care-vs-cigna-global-seguro-salud-internacional/', label: 'Allianz Care o Cigna Global' },
    { url: '/es/familias-alto-patrimonio-madrid-seguros/', label: 'Familias de alto patrimonio en Madrid' },
  ],
};

export const MADRID_HNW_PAGE = {
  slug: 'familias-alto-patrimonio-madrid-seguros',
  url: '/es/familias-alto-patrimonio-madrid-seguros/',
  cluster: 'es-madrid-hnw',
  title: 'Familias latinoamericanas de alto patrimonio en Madrid | Adler & Rochefort',
  description:
    'Familias latinoamericanas de alto patrimonio en Madrid: la casa en Salamanca o La Moraleja, el arte, la salud internacional, el secuestro y la extorsión, el personal y el family office.',
  keywords:
    'familias latinoamericanas alto patrimonio Madrid, seguros grandes patrimonios Madrid, seguro hogar alto valor Madrid, seguro chalet La Moraleja, seguro arte Madrid, seguro secuestro extorsión latinoamericanos, seguro salud internacional Madrid Miami, venezolanos Madrid patrimonio, mexicanos Madrid patrimonio, family office Madrid seguros',
  eyebrow: 'España · Madrid · Private Clients',
  h1: 'Madrid y las familias latinoamericanas de alto patrimonio: lo que conviene tener asegurado',
  standfirst:
    'Madrid se ha convertido en la capital europea de muchas familias mexicanas, venezolanas, colombianas y argentinas con patrimonio. Llegan con una vida repartida entre dos o tres continentes, con arte, con empresas y con riesgos que una póliza española corriente no contempla.',
  published: PUBLISHED_OCT,
  modified: PUBLISHED_OCT,
  breadcrumb: [...BREADCRUMB_SPAIN, { name: 'Madrid', url: '/es/seguros-madrid/' }, { name: 'Familias de alto patrimonio' }],
  pullquote: 'La familia vive en Madrid, pero su riesgo no vive solo en Madrid.',
  schemaType: 'Article',
  formHeading: 'Solicite una revisión por escrito del patrimonio familiar',
  formBranch: 'Español · Family office',
  formSubject: 'Familia de alto patrimonio en Madrid',
  formCta: 'Solicitar la revisión',
  formIntro:
    'Cuéntenos dónde vive la familia, qué hay que proteger — casas, arte, coches, la salud de todos, las empresas — y entre qué países se reparte su vida. Le respondemos por escrito, en español, con lo que está cubierto, lo que falta y las opciones.',
  formPlaceholder:
    'Por ejemplo: llegamos de Caracas hace un año, compramos un piso en el barrio de Salamanca y una casa en Sotogrande, tenemos obra latinoamericana, dos hijos en un colegio internacional y una holding familiar en España.',
  sections: [
    sec('plain', 'por-que-madrid', 'Por qué Madrid', `${p(
      'En pocos años Madrid ha pasado de ser una escala a ser la casa. Para muchas familias latinoamericanas con patrimonio, la ciudad reúne lo que buscan: idioma, seguridad, buenos colegios, una conexión aérea directa con casi todas las capitales de América, una banca privada acostumbrada a su perfil y un mercado inmobiliario donde comprar con tranquilidad.',
      'El perfil es reconocible: el empresario mexicano que traslada parte de la familia y mantiene el negocio en Monterrey; la familia venezolana que lleva años en Madrid y ya tiene la nacionalidad; los colombianos y argentinos que combinan Madrid con Miami. Muchas de estas familias comparten una realidad: su vida, y su riesgo, se reparten entre varios países.'
    )}`),
    sec('tint', 'llegada', 'Cómo se llega hoy', `${p(
      'El visado por inversión inmobiliaria — la llamada «golden visa» — desapareció en España el 3 de abril de 2025. Hoy las familias llegan por otras vías: el visado de residencia no lucrativa, la residencia vinculada a una actividad empresarial o profesional, el régimen de los trabajadores desplazados para quien viene a trabajar o a dirigir una empresa, y para muchos latinoamericanos la nacionalidad española, accesible tras un periodo de residencia legal más corto que para otros extranjeros.',
      'Para el seguro, la vía de llegada importa por una razón práctica: el visado no lucrativo exige un seguro de salud privado con condiciones muy concretas. Lo tratamos más abajo.'
    )}`),
    sec('plain', 'casa', 'La casa: Salamanca, Chamberí, El Viso, La Moraleja', `${p(
      'Las familias se reparten entre dos tipos de vivienda muy distintos. En la ciudad, el piso en una finca señorial de Salamanca, Chamberí o Almagro, o la casa de El Viso; fuera, el chalet de La Moraleja, La Finca, Somosaguas o Puerta de Hierro. Cada uno tiene su propio riesgo.'
    )}
${ul([
      '<strong>La finca señorial:</strong> reformas interiores de muy alto nivel sobre bajantes y tejados centenarios. El siniestro más frecuente no es el robo, es el agua — la que usted sufre y la que causa al vecino —, y la póliza de la comunidad casi nunca cubre las mejoras de su piso.',
      '<strong>El chalet en urbanización cerrada:</strong> seguridad privada, personal interno, piscina y jardín. El valor de reconstrucción de una casa de arquitecto es muy superior al catastral; la suma asegurada debe partir de ese coste.',
      '<strong>Las ausencias:</strong> agosto, Navidad en el país de origen, semanas en Miami. Las pólizas limitan el robo y los daños por agua cuando la casa está vacía demasiado tiempo; hay que declarar el uso real.',
      '<strong>La segunda residencia</strong> — Sotogrande, Marbella, Mallorca o el Algarve — conviene revisarla con la misma lógica y, si es posible, con el mismo interlocutor.',
    ])}`),
    sec('tint', 'arte', 'Arte, joyas y relojes', p(
      'Muchas de estas familias han reunido colecciones de arte latinoamericano moderno y contemporáneo, además de joyas y relojes que viajan con ellas. Una póliza de hogar estándar los cubre con sublímites que se quedan cortos al primer cuadro importante. Lo adecuado es una póliza de arte y objetos de valor a <strong>valor convenido</strong>, con cobertura mundial «todo riesgo» — en casa, en tránsito, en préstamo a una exposición o en la otra residencia — y un inventario tasado. El traslado de la colección desde América es, además, el momento de mayor riesgo: el embalaje, el transporte y la llegada deben estar asegurados de puerta a puerta.'
    )),
    sec('plain', 'salud', 'La salud: Madrid, el país de origen y Estados Unidos', `${p(
      'Madrid tiene una red de hospitales privados excelente, y una póliza española con cuadro médico funciona muy bien para la vida diaria. Pero para una familia que pasa temporadas en su país de origen y que, ante un diagnóstico grave, querría tratarse en Houston, Nueva York o Miami, la pregunta es otra: <strong>dónde quiere poder tratarse</strong>.'
    )}
${p(
      'Ahí entra el seguro de salud internacional, con área mundial e incluso Estados Unidos, límites en millones y repatriación. Trabajamos con <a href="/es/allianz-care-vs-cigna-global-seguro-salud-internacional/">Allianz Care y Cigna Global</a>. Para el visado no lucrativo, en cambio, los consulados suelen pedir una aseguradora autorizada en España, sin copagos ni carencias: muchas familias combinan una póliza española para el visado y el día a día con un plan internacional para el gran riesgo.'
    )}`),
    sec('tint', 'secuestro', 'Secuestro, extorsión y viajes', p(
      'Para una familia que sigue viajando a México, Venezuela o Colombia, o que mantiene allí empresas y empleados, el riesgo de secuestro y extorsión no es teórico — incluido el «secuestro virtual», la llamada que finge tener a un hijo retenido. El <a href="/es/seguro-secuestro-extorsion/">seguro de secuestro, rescate y extorsión</a> no solo indemniza: da acceso inmediato a consultores especializados en crisis que gestionan la situación desde la primera llamada, y cubre a la familia en sus viajes. Es una póliza discreta por naturaleza: su existencia no debe conocerse fuera del círculo más cercano.'
    )),
    sec('plain', 'personal', 'El personal de la casa', p(
      'Interna, chófer, jardinero, escolta: en España, el empleado del hogar debe estar dado de alta en la Seguridad Social desde el primer día, y la familia, como empleadora, tiene obligaciones que conviene cumplir con rigor. Más allá de eso, la responsabilidad civil familiar debe contemplar los daños que el personal pueda causar a terceros en el ejercicio de su trabajo, y el seguro del coche debe incluir al chófer como conductor habitual. Son detalles pequeños que, olvidados, se convierten en el siniestro que nadie había previsto.'
    )),
    sec('tint', 'holding', 'La empresa familiar y el family office', p(
      'Muchas familias estructuran su patrimonio en España a través de una sociedad patrimonial o de un family office. Sus administradores — a menudo los propios miembros de la familia — responden con su patrimonio personal de las decisiones que toman. El <a href="/es/seguro-family-office/">seguro de responsabilidad de administradores (D&amp;O)</a> protege a la familia y a los consejeros externos, y el <a href="/es/seguro-ciber-fraude-familiar/">seguro de ciberriesgo y fraude familiar</a> cubre lo que hoy es la vía de ataque más habitual: la suplantación por correo o por teléfono para ordenar una transferencia.'
    )),
    sec('plain', 'rc', 'Responsabilidad civil: la póliza que protege todo lo demás', p(
      'Cuanto mayor es el patrimonio, mayor es el interés en reclamarlo. Una <a href="/es/seguro-responsabilidad-civil-familiar/">responsabilidad civil familiar</a> con un límite acorde al patrimonio, cobertura mundial y extensión a los hijos, al personal, a los deportes y a la segunda residencia es la base sobre la que descansa todo lo anterior. Es también la póliza que más a menudo encontramos con un límite pensado para otra vida.'
    )),
    sec('tint', 'lista', 'Lista de comprobación para una familia que se instala en Madrid', ul([
      'Suma asegurada de cada casa basada en el coste de reconstrucción, y la póliza de la comunidad leída junto a la propia.',
      'Arte, joyas y relojes inventariados y asegurados a valor convenido, con el traslado cubierto de puerta a puerta.',
      'Salud: póliza española para el visado y el día a día, y seguro internacional si quieren poder tratarse en su país o en Estados Unidos.',
      'Secuestro y extorsión si la familia viaja o tiene intereses en países de riesgo.',
      'Personal de la casa dado de alta e incluido en la responsabilidad civil y en el seguro del coche.',
      'D&amp;O y ciberfraude si existe una sociedad patrimonial o un family office.',
      'Responsabilidad civil familiar con un límite proporcional al patrimonio.',
    ])),
  ].join('\n'),
  faqTitle: 'Familias de alto patrimonio en Madrid — preguntas',
  faq: [
    { q: '¿Sigue existiendo la golden visa en España?', a: '<p>No. El visado por inversión inmobiliaria se eliminó el 3 de abril de 2025. Las familias llegan hoy por otras vías, como el visado no lucrativo, la residencia ligada a una actividad empresarial o profesional, o la nacionalidad tras el periodo de residencia legal exigido.</p>' },
    { q: '¿La póliza de la comunidad cubre mi piso en una finca señorial?', a: '<p>Solo en parte. Cubre los elementos comunes y, según los estatutos, la estructura. Las mejoras de su piso, el contenido, el arte y su responsabilidad como propietario necesitan una póliza propia, coordinada con la de la comunidad.</p>' },
    { q: '¿Puedo tener un seguro de salud que me cubra en Madrid, en mi país y en Estados Unidos?', a: '<p>Sí: un seguro de salud internacional con área mundial que incluya Estados Unidos. Para el visado no lucrativo, sin embargo, los consulados suelen exigir una aseguradora autorizada en España sin copagos ni carencias, por lo que muchas familias combinan las dos pólizas.</p>' },
    { q: '¿Qué cubre un seguro de secuestro y extorsión?', a: '<p>El rescate y los gastos asociados, pero sobre todo el acceso inmediato a consultores especializados que gestionan la crisis, incluidos los casos de extorsión y de secuestro virtual. Cubre a los miembros de la familia designados en sus viajes.</p>' },
    { q: '¿Atienden en español?', a: '<p>Sí. Atendemos en español, por escrito, a familias en España y en Portugal.</p>' },
  ],
  related: [
    { url: '/es/seguros-madrid/', label: 'Seguros en Madrid para familias latinoamericanas' },
    { url: '/es/seguro-hogar-alto-valor/', label: 'Seguro de hogar de alto valor' },
    { url: '/es/seguro-secuestro-extorsion/', label: 'Secuestro, rescate y extorsión' },
    { url: '/es/seguro-family-office/', label: 'Family offices' },
    { url: '/es/allianz-care-vs-cigna-global-seguro-salud-internacional/', label: 'Allianz Care o Cigna Global' },
    { url: '/es/golf-viviendas-lujo-portugal-espana/', label: 'Golf y viviendas de lujo en Portugal y España' },
  ],
};
