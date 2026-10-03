/**
 * Professional liability for high-income professions (October 2026):
 *
 *   /es/seguro-responsabilidad-civil-abogados/                (prof-lawyers)
 *   /es/seguro-responsabilidad-civil-medicos-dentistas/       (prof-medical)
 *   /es/seguro-responsabilidad-civil-arquitectos-ingenieros/  (prof-architects)
 *   /es/seguro-responsabilidad-civil-asesores-financieros/    (prof-financial)
 *   /es/seguro-responsabilidad-civil-agentes-inmobiliarios/   (prof-realestate)
 *
 * Each page pairs with a PT page under /seguros/ and an EN page under /en/
 * (PROF_EXTERNAL in scripts/lib/market-hreflang.mjs). Topic first, then the
 * compulsory insurance in each country, then the cover. Legal points were
 * checked at source and are stated cautiously:
 *   - Estatuto da Ordem dos Advogados art. 104 and the Bar's 2025 group
 *     policy (OA portal); Ley 2/2007 art. 11.3 (sociedades profesionales).
 *   - Estatuto da Ordem dos Médicos Dentistas art. 21; Ley 44/2003 arts.
 *     4.8 and 46; no general obligation found in the Estatuto da Ordem dos
 *     Médicos.
 *   - Lei 31/2009 art. 24; Ley 38/1999 (LOE) art. 17.
 *   - RD 813/2023 art. 5.3 (EAFN); Lei 7/2019 and RDL 3/2020 (insurance
 *     distribution). Portuguese CMVM requirements are deliberately not
 *     quantified.
 *   - Lei 15/2013 (EUR 150,000 minimum); Generalitat de Catalunya register
 *     requirements (EUR 100,000 / 600,000; guarantee).
 * No insurer named, no prices.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';
import { section } from './niche-shared.mjs';

const CRUMB = [...BREADCRUMB_ROOT, { name: 'Responsabilidad profesional', url: '/es/seguro-responsabilidad-profesional-portugal/' }];
const DATE = '2026-10-03T09:00:00+00:00';

const page = (o) => ({
  published: DATE,
  modified: DATE,
  schemaType: 'Article',
  formBranch: 'Español · Responsabilidad civil',
  formCta: 'Solicitar propuesta',
  formIntro:
    'Para preparar una propuesta necesitamos su nombre completo, su NIF o NIE, su dirección, su actividad y su facturación anual — y en qué países trabaja y están sus clientes. Le respondemos por escrito.',
  ...o,
  breadcrumb: [...CRUMB, { name: o.crumb }],
});

const blocks = (list) =>
  list
    .map(([id, h2, html], i) =>
      section(i % 2 ? 'tint' : 'plain', id, `    <h2 id="${id}">${h2}</h2>\n${html}`)
    )
    .join('\n');

export const PROF_LAWYERS_PAGE = page({
  slug: 'seguro-responsabilidad-civil-abogados',
  url: '/es/seguro-responsabilidad-civil-abogados/',
  cluster: 'prof-lawyers',
  crumb: 'Abogados',
  title: 'Seguro de responsabilidad civil para abogados · España y Portugal',
  description:
    'Responsabilidad civil profesional para abogados y despachos en España y Portugal: el seguro colegial, el capital de refuerzo y los clientes extranjeros.',
  keywords:
    'seguro responsabilidad civil abogados, seguro RC despacho de abogados, sociedad profesional seguro obligatorio, abogado Portugal seguro Ordem dos Advogados, seguro responsabilidad civil abogados clientes extranjeros',
  eyebrow: 'Profesionales · Abogados',
  h1: 'Seguro de responsabilidad civil para abogados en España y Portugal',
  standfirst:
    'Un plazo vencido, un dictamen que no tuvo en cuenta la ley del país del cliente, una compraventa en la que el comprador extranjero confió en su revisión. Los despachos que trabajan con clientes internacionales y patrimonios relevantes tienen una exposición que el seguro colegial rara vez acompaña.',
  pullquote: 'El valor en juego en una reclamación es el de la operación, no el de los honorarios.',
  formHeading: 'Solicite una propuesta para su despacho',
  formSubject: 'Responsabilidad civil profesional — abogados',
  formPlaceholder: 'Por ejemplo: despacho de cuatro abogados en Madrid y Lisboa, operaciones inmobiliarias y sucesiones de clientes latinoamericanos, facturación de 900.000 € al año.',
  sections: blocks([
    ['riesgo', 'La profesión y dónde está el riesgo', `    <p>La abogacía ha cambiado de escala. Un despacho en Madrid, Marbella, Lisboa o el Algarve gestiona hoy visados y residencia, compras de inmuebles por extranjeros, herencias con bienes en varios países, reorganizaciones societarias y litigios cuyo valor supera con mucho los honorarios. El error detrás de una reclamación rara vez es de mala fe: un plazo de recurso que pasó, una cláusula que no protegió al cliente, una comprobación registral que no se hizo.</p>
    <ul>
      <li><strong>Plazos procesales y de caducidad</strong>, la causa más frecuente.</li>
      <li><strong>Operaciones inmobiliarias y societarias</strong>, donde está en juego el valor del negocio.</li>
      <li><strong>Clientes extranjeros</strong>, que pueden reclamar en su país y conforme a su ley.</li>
      <li><strong>Datos y confidencialidad</strong> de la documentación del cliente.</li>
    </ul>`],
    ['obligatorio', 'Lo que es obligatorio en España y en Portugal', `    <h3>España</h3>
    <p>Las sociedades profesionales — incluidos los despachos constituidos como tales — deben estipular un seguro que cubra su responsabilidad (Ley 2/2007, art. 11.3). Para el ejercicio individual, los colegios de abogados exigen u organizan con frecuencia una cobertura para sus colegiados ejercientes.</p>
    <h3>Portugal</h3>
    <p>El Estatuto da Ordem dos Advogados (art. 104) obliga al abogado inscrito a tener un seguro de responsabilidad civil profesional, y la Ordem contrata un seguro de grupo para sus inscritos — en 2025, con un capital de 150.000 € por siniestro y franquicia. La propia Ordem indica que, para acogerse al régimen de responsabilidad limitada, hace falta un capital total superior al de la póliza de grupo, y muchos abogados contratan un seguro de refuerzo.</p>`],
    ['cobertura', 'Lo que debe cubrir la póliza', `    <ul>
      <li><strong>Capital</strong> acorde con el valor de las operaciones y litigios del despacho.</li>
      <li><strong>Ámbito territorial y jurisdiccional</strong> que incluya los países de los clientes.</li>
      <li><strong>Base de reclamación (claims made) con retroactividad</strong>, para no dejar fuera trabajos anteriores.</li>
      <li><strong>Costes de defensa</strong>, idealmente además del capital.</li>
      <li><strong>Pérdida de documentos y vulneración de la confidencialidad</strong>.</li>
      <li><strong>Cobertura posterior</strong> para la jubilación o el cierre del despacho.</li>
    </ul>
    <p>Para el marco general, vea <a href="/es/seguro-responsabilidad-profesional-portugal/">responsabilidad civil profesional en Portugal</a>.</p>`],
  ]),
  faqTitle: 'Seguro de responsabilidad civil para abogados — preguntas',
  faq: [
    { q: '¿Un despacho constituido como sociedad profesional debe estar asegurado?', a: '<p>Sí. La Ley 2/2007 obliga a las sociedades profesionales a estipular un seguro que cubra su responsabilidad (art. 11.3). Los términos concretos conviene confirmarlos con el colegio correspondiente.</p>' },
    { q: '¿Basta el seguro de grupo de la Ordem dos Advogados en Portugal?', a: '<p>Cumple la obligación básica del Estatuto, pero el capital por siniestro está limitado y tiene franquicia. Para operaciones y litigios de valor elevado, o para el régimen de responsabilidad limitada, suele hacer falta un refuerzo.</p>' },
    { q: '¿La póliza cubre reclamaciones de clientes extranjeros?', a: '<p>Solo si el ámbito territorial y jurisdiccional lo permite. Muchas pólizas se limitan a reclamaciones presentadas en España, en Portugal o en la Unión Europea.</p>' },
    { q: '¿Qué pasa cuando me jubilo?', a: '<p>Como la póliza funciona por reclamación, deja de responder cuando termina. La cobertura posterior prolonga la protección para reclamaciones sobre trabajos realizados durante el ejercicio.</p>' },
  ],
  related: [
    { url: '/es/seguro-responsabilidad-profesional-portugal/', label: 'Responsabilidad civil profesional en Portugal' },
    { url: '/es/seguro-responsabilidad-civil-asesores-financieros/', label: 'Asesores financieros y gestores de patrimonio' },
    { url: '/es/seguro-family-office/', label: 'Seguros para family offices' },
  ],
});

export const PROF_MEDICAL_PAGE = page({
  slug: 'seguro-responsabilidad-civil-medicos-dentistas',
  url: '/es/seguro-responsabilidad-civil-medicos-dentistas/',
  cluster: 'prof-medical',
  crumb: 'Médicos y dentistas',
  title: 'Seguro RC para médicos y dentistas · España y Portugal',
  description:
    'Responsabilidad civil sanitaria para médicos y dentistas en España y Portugal: la Ley 44/2003, la clínica propia, la medicina estética y ejercer en ambos.',
  keywords:
    'seguro responsabilidad civil médicos, seguro RC dentistas, Ley 44/2003 seguro obligatorio, responsabilidad civil sanitaria, seguro clínica dental, médico dentista Portugal seguro obligatorio',
  eyebrow: 'Profesionales · Sanidad',
  h1: 'Seguro de responsabilidad civil para médicos y dentistas',
  standfirst:
    'Medicina privada, clínica dental propia, medicina estética, consultas en España y en Portugal. La exposición de un médico o un dentista depende de lo que hace, dónde y para quién — y las obligaciones legales no son iguales en los dos países.',
  pullquote: 'En la medicina estética el paciente juzga el resultado, no solo el cuidado.',
  formHeading: 'Solicite una propuesta de responsabilidad civil sanitaria',
  formSubject: 'Responsabilidad civil — médicos y dentistas',
  formPlaceholder: 'Por ejemplo: odontólogo con clínica propia en Valencia y consulta dos días al mes en Lisboa; implantología y estética dental.',
  sections: blocks([
    ['riesgo', 'La profesión y dónde está el riesgo', `    <p>Las reclamaciones contra profesionales sanitarios han crecido en España y en Portugal, sobre todo en la medicina privada, la odontología y los actos con finalidad estética. Una reclamación puede afectar al profesional, a la clínica donde ejerce y a la sociedad que la explota — y cada uno debe saber qué póliza responde.</p>
    <ul>
      <li><strong>Actos clínicos y quirúrgicos</strong>: diagnóstico, tratamiento, complicaciones.</li>
      <li><strong>Odontología</strong>: implantes, ortodoncia y rehabilitaciones.</li>
      <li><strong>Medicina y odontología estética</strong>: expectativas y consentimiento informado.</li>
      <li><strong>La clínica</strong>: personal, equipos, instalaciones y datos de salud.</li>
    </ul>`],
    ['obligatorio', 'Lo que es obligatorio en España y en Portugal', `    <h3>España</h3>
    <p>La Ley 44/2003, de ordenación de las profesiones sanitarias, obliga a los profesionales sanitarios que ejercen en la asistencia privada, y a las entidades privadas que prestan servicios sanitarios, a tener un seguro de responsabilidad, un aval u otra garantía financiera (arts. 4.8 y 46). Las comunidades autónomas pueden desarrollar estos requisitos.</p>
    <h3>Portugal</h3>
    <p>Para los <strong>médicos dentistas</strong>, el Estatuto da Ordem dos Médicos Dentistas (art. 21) condiciona el ejercicio de la profesión a un seguro de responsabilidad civil profesional, con condiciones mínimas fijadas por <em>portaria</em>. Para los <strong>médicos</strong>, el Estatuto da Ordem dos Médicos no impone una obligación general equivalente; en la práctica, hospitales, clínicas y contratos la exigen con frecuencia.</p>`],
    ['cobertura', 'Lo que debe cubrir la póliza', `    <ul>
      <li><strong>Los actos que realiza</strong>, descritos con exactitud: especialidad, cirugía, estética, sedación.</li>
      <li><strong>Ejercicio en España y en Portugal</strong>, si consulta en los dos.</li>
      <li><strong>Retroactividad y cobertura posterior</strong> al cese de la actividad.</li>
      <li><strong>Defensa jurídica</strong> en procedimientos civiles, deontológicos y, si se prevé, penales.</li>
      <li><strong>La clínica</strong>, en una póliza coordinada con la del profesional.</li>
    </ul>`],
  ]),
  faqTitle: 'Responsabilidad civil para médicos y dentistas — preguntas',
  faq: [
    { q: '¿Es obligatorio el seguro de responsabilidad civil para un médico en España?', a: '<p>Para los profesionales sanitarios que ejercen en la sanidad privada, sí: la Ley 44/2003 exige un seguro, aval u otra garantía financiera (arts. 4.8 y 46). También a las entidades privadas que prestan servicios sanitarios.</p>' },
    { q: '¿Y para un dentista en Portugal?', a: '<p>Sí. El Estatuto da Ordem dos Médicos Dentistas (art. 21) condiciona el ejercicio a un seguro de responsabilidad civil profesional, con condiciones mínimas fijadas por <em>portaria</em>.</p>' },
    { q: '¿Me cubre la póliza de la clínica donde trabajo?', a: '<p>Depende de la redacción: algunas cubren solo a la entidad, otras a los profesionales, a veces solo a los empleados y no a los autónomos. Conviene confirmarlo por escrito.</p>' },
    { q: '¿Puedo consultar en Portugal con mi póliza española?', a: '<p>Solo si su ámbito territorial lo incluye y se ha declarado esa actividad. Es una de las primeras cosas que revisamos.</p>' },
  ],
  related: [
    { url: '/es/seguro-responsabilidad-profesional-portugal/', label: 'Responsabilidad civil profesional en Portugal' },
    { url: '/es/seguro-ciber-fraude-familiar/', label: 'Ciberriesgo y fraude' },
  ],
});

export const PROF_ARCHITECTS_PAGE = page({
  slug: 'seguro-responsabilidad-civil-arquitectos-ingenieros',
  url: '/es/seguro-responsabilidad-civil-arquitectos-ingenieros/',
  cluster: 'prof-architects',
  crumb: 'Arquitectos e ingenieros',
  title: 'Seguro RC para arquitectos e ingenieros · España y Portugal',
  description:
    'Responsabilidad civil profesional para arquitectos e ingenieros en España y Portugal: la LOE, la Lei 31/2009, la dirección de obra y la responsabilidad decenal.',
  keywords:
    'seguro responsabilidad civil arquitectos, seguro RC ingenieros, LOE responsabilidad arquitecto, dirección facultativa seguro, arquitecto Portugal seguro obligatorio Lei 31/2009',
  eyebrow: 'Profesionales · Arquitectura e ingeniería',
  h1: 'Seguro de responsabilidad civil para arquitectos e ingenieros',
  standfirst:
    'Una villa de autor en Mallorca, la rehabilitación de un palacete en Lisboa, una casa en Marbella para un cliente extranjero. Quien proyecta o dirige una obra responde durante años de lo que hizo — y en Portugal la ley obliga a asegurar esa responsabilidad.',
  pullquote: 'El seguro decenal protege al comprador; la responsabilidad del proyectista es otra póliza.',
  formHeading: 'Solicite una propuesta para su estudio',
  formSubject: 'Responsabilidad civil — arquitectos e ingenieros',
  formPlaceholder: 'Por ejemplo: estudio de arquitectura en Madrid con obras en España y en el Algarve; proyecto y dirección de obra de viviendas unifamiliares de alto valor.',
  sections: blocks([
    ['riesgo', 'La profesión y dónde está el riesgo', `    <p>Arquitectos e ingenieros trabajan cada vez más para clientes internacionales, en obras de alto valor, con plazos ajustados y muchos intervinientes. Las reclamaciones llegan años después: filtraciones, fisuras, incumplimientos de la licencia, retrasos atribuidos al proyecto, sobrecostes.</p>
    <ul>
      <li><strong>Errores de proyecto y de coordinación</strong> entre especialidades.</li>
      <li><strong>Dirección de obra y de ejecución</strong>: lo que se aprobó en obra.</li>
      <li><strong>Licencias</strong>: incumplimientos que retrasan o impiden el uso.</li>
      <li><strong>Rehabilitación</strong> de edificios antiguos.</li>
    </ul>`],
    ['obligatorio', 'Lo que es obligatorio en España y en Portugal', `    <h3>España</h3>
    <p>La Ley de Ordenación de la Edificación (Ley 38/1999, art. 17) hace responder a los agentes de la edificación — entre ellos el proyectista y la dirección facultativa — durante diez años por daños estructurales y tres años por defectos que afecten a la habitabilidad. No hay una obligación estatal general de seguro para el arquitecto individual, pero las sociedades profesionales deben asegurar su responsabilidad (Ley 2/2007, art. 11.3), y colegios y clientes lo exigen con frecuencia.</p>
    <h3>Portugal</h3>
    <p>La Lei n.º 31/2009 (art. 24) obliga al coordinador y a los autores del proyecto, al director de obra y al director de fiscalización, entre otros técnicos, a tener seguro de responsabilidad civil; las empresas donde trabajan pueden ser tomadoras. Las condiciones mínimas se fijan por <em>portaria</em>.</p>`],
    ['cobertura', 'Lo que debe cubrir la póliza', `    <ul>
      <li><strong>Todas las funciones</strong>: proyecto, coordinación, dirección de obra, dirección de ejecución.</li>
      <li><strong>Capital por obra y anual</strong> acorde con el valor de las obras.</li>
      <li><strong>Retroactividad</strong> para proyectos anteriores y <strong>cobertura posterior</strong> al cese.</li>
      <li><strong>Obras en Portugal</strong> u otros países, cuando las hay.</li>
      <li><strong>Defensa jurídica</strong> y costes periciales.</li>
    </ul>
    <p>Vea también <a href="/es/seguro-obra-vivienda-lujo/">el seguro de obra de una vivienda de alto valor</a>.</p>`],
  ]),
  faqTitle: 'Responsabilidad civil para arquitectos e ingenieros — preguntas',
  faq: [
    { q: '¿Es obligatorio el seguro para un arquitecto en España?', a: '<p>No existe una obligación estatal general para el arquitecto individual, aunque la LOE fija su responsabilidad durante diez y tres años. Las sociedades profesionales sí deben asegurar su responsabilidad (Ley 2/2007).</p>' },
    { q: '¿Y en Portugal?', a: '<p>Sí, para quien ejerce las funciones previstas en la Lei n.º 31/2009 — coordinación y autoría de proyecto, dirección de obra y de fiscalización, entre otras (art. 24).</p>' },
    { q: '¿El seguro decenal cubre al arquitecto?', a: '<p>No. Protege al comprador frente a daños estructurales; la aseguradora puede luego repetir contra los responsables, incluido el proyectista.</p>' },
    { q: '¿Qué capital debo contratar?', a: '<p>Depende del valor de las obras, de las funciones y de lo que exijan los contratos. Revisamos la cartera de proyectos antes de proponerlo.</p>' },
  ],
  related: [
    { url: '/es/seguro-obra-vivienda-lujo/', label: 'Seguro de obra de vivienda de alto valor' },
    { url: '/es/seguro-responsabilidad-profesional-portugal/', label: 'Responsabilidad civil profesional en Portugal' },
  ],
});

export const PROF_FINANCIAL_PAGE = page({
  slug: 'seguro-responsabilidad-civil-asesores-financieros',
  url: '/es/seguro-responsabilidad-civil-asesores-financieros/',
  cluster: 'prof-financial',
  crumb: 'Asesores financieros',
  title: 'Seguro RC para asesores financieros · España y Portugal',
  description:
    'Responsabilidad civil profesional para asesores financieros y gestores de patrimonio en España y Portugal: requisitos de la CNMV y de la CMVM y mediación.',
  keywords:
    'seguro responsabilidad civil asesor financiero, empresa de asesoramiento financiero seguro RC, RD 813/2023 seguro, gestor de patrimonio seguro, seguro RC mediador de seguros',
  eyebrow: 'Profesionales · Asesoramiento financiero',
  h1: 'Seguro de responsabilidad civil para asesores financieros y gestores de patrimonio',
  standfirst:
    'Un consejo de inversión que salió mal, una orden mal ejecutada, una estructura que no tuvo el efecto fiscal esperado. Quien asesora patrimonios responde del perjuicio económico del cliente — y los requisitos de seguro dependen del estatuto regulatorio de cada uno.',
  pullquote: 'El mínimo regulatorio no mide el tamaño de los patrimonios que usted asesora.',
  formHeading: 'Solicite una propuesta para su actividad',
  formSubject: 'Responsabilidad civil — asesores financieros',
  formPlaceholder: 'Por ejemplo: empresa de asesoramiento financiero en Madrid con clientes en España, Portugal y México; asesoramiento y distribución de seguros de vida-ahorro.',
  sections: blocks([
    ['riesgo', 'La profesión y dónde está el riesgo', `    <p>Asesores de inversión, gestores de patrimonio, multi-family offices y planificadores financieros trabajan con clientes que les confían decisiones de millones. Las reclamaciones siguen a los mercados: cuando una cartera pierde valor, el cliente mira el consejo que recibió.</p>
    <ul>
      <li><strong>Idoneidad</strong>: un producto o estrategia que no correspondía al perfil del cliente.</li>
      <li><strong>Ejecución</strong>: órdenes erróneas, tardías o fuera del mandato.</li>
      <li><strong>Información</strong>: riesgos, costes o efectos fiscales mal explicados.</li>
      <li><strong>Fraude y ciberriesgo</strong>: instrucciones falsas y datos comprometidos.</li>
    </ul>`],
    ['obligatorio', 'Lo que es obligatorio en España y en Portugal', `    <h3>España</h3>
    <p>Las empresas de asesoramiento financiero nacionales deben contar con un capital inicial de 50.000 € o con un seguro de responsabilidad civil profesional, aval o garantía equivalente con una cobertura mínima de 1.000.000 € por reclamación y 1.500.000 € anuales (Real Decreto 813/2023, art. 5.3). Los mediadores de seguros tienen una obligación equivalente en la normativa de distribución de seguros (Real Decreto-ley 3/2020).</p>
    <h3>Portugal</h3>
    <p>El asesoramiento en materia de inversión exige autorización o registro ante la CMVM, o actuar como agente vinculado de una entidad autorizada; los requisitos de capital o garantía dependen de ese estatuto y deben confirmarse caso por caso. Quien distribuye seguros como mediador debe tener seguro de responsabilidad civil profesional (Lei n.º 7/2019, que transpone la Directiva (UE) 2016/97).</p>`],
    ['cobertura', 'Lo que debe cubrir la póliza', `    <ul>
      <li><strong>Los servicios que presta de verdad</strong>: asesoramiento, gestión discrecional, recepción de órdenes, mediación de seguros.</li>
      <li><strong>Capital</strong> que cumpla el mínimo regulatorio y acompañe a los patrimonios asesorados.</li>
      <li><strong>Clientes y jurisdicciones</strong>: residentes en España, Portugal y otros países.</li>
      <li><strong>Costes de defensa</strong> en reclamaciones de clientes y, si se prevé, de supervisores.</li>
      <li><strong>Crimen y ciberriesgo</strong> como coberturas complementarias.</li>
    </ul>
    <p>Vea también <a href="/es/seguro-family-office/">seguros para family offices</a>.</p>`],
  ]),
  faqTitle: 'Responsabilidad civil para asesores financieros — preguntas',
  faq: [
    { q: '¿Qué seguro necesita una empresa de asesoramiento financiero nacional?', a: '<p>Un capital inicial de 50.000 € o un seguro de responsabilidad civil profesional (o garantía equivalente) de al menos 1.000.000 € por reclamación y 1.500.000 € al año (RD 813/2023, art. 5.3).</p>' },
    { q: '¿Y en Portugal?', a: '<p>Depende del estatuto: entidad autorizada, asesor registrado en la CMVM o agente vinculado. Los requisitos deben confirmarse con la CMVM. Si además distribuye seguros, el seguro de responsabilidad civil es obligatorio por la Lei n.º 7/2019.</p>' },
    { q: '¿Cubre la póliza las pérdidas de mercado?', a: '<p>No. Cubre el perjuicio causado por un error, una omisión o un consejo negligente, no la evolución normal de los mercados.</p>' },
  ],
  related: [
    { url: '/es/seguro-family-office/', label: 'Seguros para family offices' },
    { url: '/es/seguro-responsabilidad-profesional-portugal/', label: 'Responsabilidad civil profesional en Portugal' },
  ],
});

export const PROF_REALESTATE_PAGE = page({
  slug: 'seguro-responsabilidad-civil-agentes-inmobiliarios',
  url: '/es/seguro-responsabilidad-civil-agentes-inmobiliarios/',
  cluster: 'prof-realestate',
  crumb: 'Agentes inmobiliarios',
  title: 'Seguro RC para agentes inmobiliarios · España y Portugal',
  description:
    'Responsabilidad civil para agencias y agentes inmobiliarios en España y Portugal: el registro de Cataluña, el mínimo portugués y los compradores extranjeros.',
  keywords:
    'seguro responsabilidad civil agente inmobiliario, registro agentes inmobiliarios Cataluña seguro, seguro inmobiliaria obligatorio, mediação imobiliária Portugal seguro 150000, seguro caución agencia inmobiliaria',
  eyebrow: 'Profesionales · Inmobiliario',
  h1: 'Seguro de responsabilidad civil para agentes inmobiliarios',
  standfirst:
    'Compradores extranjeros, viviendas de lujo, ampliaciones sin licencia, arras de cientos de miles de euros. Una agencia inmobiliaria responde ante clientes y terceros por lo que informa y por lo que deja de comprobar.',
  pullquote: 'El comprador extranjero confía en el agente para entender un sistema que no conoce.',
  formHeading: 'Solicite una propuesta para su agencia',
  formSubject: 'Responsabilidad civil — agentes inmobiliarios',
  formPlaceholder: 'Por ejemplo: agencia en Marbella con oficina en Lisboa, compradores del norte de Europa y de América, operaciones de 1 a 5 millones de euros.',
  sections: blocks([
    ['riesgo', 'La profesión y dónde está el riesgo', `    <p>El mercado de lujo en Madrid, Marbella, Mallorca, Lisboa, Cascais o el Algarve vive de compradores internacionales que confían en el agente para entender un sistema que no conocen. Las reclamaciones nacen de esa confianza: superficies que no coinciden, licencias que faltan, cargas no detectadas, arras perdidas.</p>
    <ul>
      <li><strong>Información sobre el inmueble</strong>: superficies, licencias, construcciones sin legalizar.</li>
      <li><strong>Situación registral</strong>: cargas, embargos y titularidad.</li>
      <li><strong>Cantidades recibidas</strong>: arras y provisiones.</li>
      <li><strong>Prevención del blanqueo</strong>: deberes de identificación y comunicación.</li>
    </ul>`],
    ['obligatorio', 'Lo que es obligatorio en España y en Portugal', `    <h3>España</h3>
    <p>No existe una licencia estatal de agente inmobiliario. Algunas comunidades autónomas han creado registros con requisitos propios: en Cataluña, la inscripción en el Registro de Agentes Inmobiliarios exige un seguro de responsabilidad civil (para agencias con establecimiento, 100.000 € por siniestro y 600.000 € por año y establecimiento) y una garantía para las cantidades recibidas. En otras regiones, los requisitos deben comprobarse caso por caso.</p>
    <h3>Portugal</h3>
    <p>Las empresas de mediación inmobiliaria establecidas en Portugal necesitan licencia del IMPIC y un seguro de responsabilidad civil con un capital mínimo de 150.000 € (Lei n.º 15/2013). Los consultores que trabajan para una agencia actúan bajo su licencia y su seguro.</p>`],
    ['cobertura', 'Lo que debe cubrir la póliza', `    <ul>
      <li><strong>Capital por encima del mínimo</strong>, acorde con el valor de las operaciones.</li>
      <li><strong>Todos los agentes y colaboradores</strong> que actúan por la agencia.</li>
      <li><strong>Actividad en España y en Portugal</strong>, y clientes de otros países.</li>
      <li><strong>Defensa jurídica</strong>.</li>
      <li><strong>Garantía o seguro de caución</strong> si la agencia recibe cantidades, y crimen y ciberriesgo para fraudes de pago.</li>
    </ul>`],
  ]),
  faqTitle: 'Responsabilidad civil para agentes inmobiliarios — preguntas',
  faq: [
    { q: '¿Es obligatorio el seguro para una inmobiliaria en España?', a: '<p>No a nivel estatal. Algunas comunidades, como Cataluña, exigen registro, seguro de responsabilidad civil y garantía; las reglas de cada región deben comprobarse.</p>' },
    { q: '¿Y para abrir en Portugal?', a: '<p>Hace falta licencia del IMPIC y un seguro de responsabilidad civil con un capital mínimo de 150.000 € (Lei n.º 15/2013).</p>' },
    { q: '¿Cubre la póliza unas arras pagadas a un estafador?', a: '<p>La responsabilidad civil profesional no está pensada para eso. Los fraudes de pago se cubren, por regla general, con seguros de crimen o de ciberriesgo con extensión de ingeniería social.</p>' },
  ],
  related: [
    { url: '/es/vivienda-no-legalizada-portugal-seguro/', label: 'Vivienda no legalizada en Portugal' },
    { url: '/es/comprar-casa-en-espana-seguro/', label: 'Comprar casa en España: los seguros' },
  ],
});

export const PROFESSIONAL_PAGES = [PROF_LAWYERS_PAGE, PROF_MEDICAL_PAGE, PROF_ARCHITECTS_PAGE, PROF_FINANCIAL_PAGE, PROF_REALESTATE_PAGE];
