/**
 * Constants shared by every page in the Spanish cluster.
 *
 * Separate from the market descriptor to avoid an import cycle: the descriptor
 * imports the page modules, and the page modules import the breadcrumb root.
 *
 * Audience (October 2026 rewrite): Latin American families — Mexico,
 * Colombia, Venezuela, Argentina, Chile, Peru and the rest of the continent —
 * who live, or are about to live, in Portugal or Spain, or who own property
 * there. Not Spaniards reading about Portugal. That reader arrives with a
 * Latin American frame of reference (deducible, coaseguro, gastos médicos
 * mayores, prepaga, SOAT…), is a third-country national for EU purposes (no
 * EHIC, no S1, visa before residence) and usually keeps assets, family and a
 * second life on the other side of the Atlantic. Every page is written from
 * that starting point.
 *
 * The cluster has two halves, mirroring /de/ and /nl/:
 *   * Portugal — breadcrumb Inicio › Portugal (/es/seguros-portugal/);
 *   * España   — breadcrumb Inicio › España   (/es/seguros-espana/).
 *
 * LANG_POLICY is the working-language disclosure every generated market
 * carries. For /es/ it says the opposite of the Danish/Swedish/Polish one: the
 * service runs in Spanish. Spanish policies are issued in Spanish; Portuguese
 * insurers issue theirs in Portuguese, and we explain them in Spanish before
 * signature.
 */
export const LANG_POLICY_ES = {
  heading: 'Trabajamos en español',
  body: [
    'Le atendemos en español de principio a fin: propuestas, explicación de las condiciones, correspondencia y gestión de siniestros, siempre por escrito y en su idioma — esté usted en Lisboa, en Madrid, en Bogotá o en Ciudad de México.',
    'Las pólizas de riesgos situados en España se emiten en español. Las aseguradoras portuguesas emiten las suyas, por regla general, en portugués; antes de la firma le explicamos por escrito, en español, qué dice exactamente cada una: coberturas, sumas aseguradas, franquicias (lo que en buena parte de América Latina se llama deducible) y exclusiones.',
  ],
};

/** /es/ is itself the hub, so landing pages sit one level below it. */
export const BREADCRUMB_ROOT = [{ name: 'Inicio', url: '/es/' }];

/** The Portugal landing page is the parent of every Portugal page. */
export const BREADCRUMB_PORTUGAL = [...BREADCRUMB_ROOT, { name: 'Portugal', url: '/es/seguros-portugal/' }];

/** The Spain landing page is the parent of every Spain page. */
export const BREADCRUMB_SPAIN = [...BREADCRUMB_ROOT, { name: 'España', url: '/es/seguros-espana/' }];

/**
 * The Portugal ↔ Spain sibling link. Rendered as a callout at the end of a
 * page's first section, so the reader who is still choosing between the two
 * countries — a very common Latin American situation — sees the other side
 * before the detail rather than only in "Páginas relacionadas".
 */
export function siblingCallout({ label, text, url, linkText }) {
  return `    <div class="callout">
      <span class="callout-label">${label}</span>
      ${text} <a href="${url}">${linkText} &rarr;</a>
    </div>`;
}

/** Inserts `html` just before the closing of the first section in `sections`. */
export function withSibling(sections, html) {
  const marker = '\n  </div>\n</section>';
  const i = sections.indexOf(marker);
  if (i === -1) throw new Error('withSibling: no section close found');
  return `${sections.slice(0, i)}\n${html}${sections.slice(i)}`;
}

/** Ready-made callouts: `toSpain.home` on the Portugal page, `toPortugal.home` on the Spain page. */
export const toSpain = {
  guide: siblingCallout({ label: '¿Duda entre Portugal y España?', text: 'El mercado español funciona con otra lógica: el Consorcio, la comunidad de propietarios y las pólizas en español.', url: '/es/seguros-espana/', linkText: 'Seguros en España' }),
  home: siblingCallout({ label: '¿También tiene casa en España?', text: 'Allí el terremoto y la inundación los cubre el Consorcio dentro de la póliza, y la comunidad asegura solo el edificio.', url: '/es/seguro-hogar-espana/', linkText: 'Seguro de hogar en España' }),
  health: siblingCallout({ label: '¿Vivirá en España?', text: 'El visado exige allí una póliza sin copagos ni carencias, contratada con una aseguradora autorizada en España.', url: '/es/seguro-salud-espana/', linkText: 'Seguro de salud en España' }),
  visa: siblingCallout({ label: '¿Su visado es para España?', text: 'Residencia no lucrativa, nómada digital o estudiante: el consulado español pide una póliza con requisitos muy concretos.', url: '/es/seguro-medico-visado-espana/', linkText: 'Seguro médico para el visado español' }),
  preexisting: siblingCallout({ label: '¿Se instala en España?', text: 'Allí la póliza del visado no admite carencias, y eso cambia cómo se tratan las enfermedades previas.', url: '/es/seguro-salud-preexistencias-espana/', linkText: 'Preexistencias en España' }),
  motor: siblingCallout({ label: '¿El auto estará en España?', text: 'Canje del permiso latinoamericano, seis meses de plazo y matrícula española.', url: '/es/seguro-coche-espana/', linkText: 'Seguro de auto en España' }),
  liability: siblingCallout({ label: '¿También vive en España?', text: 'Perros, personal doméstico, embarcaciones y alquileres tienen allí sus propias reglas.', url: '/es/seguro-responsabilidad-civil-espana/', linkText: 'Responsabilidad civil en España' }),
  property: siblingCallout({ label: '¿Compra en España?', text: 'Arras, notario, Registro de la Propiedad y los seguros que el banco intentará venderle.', url: '/es/comprar-casa-en-espana-seguro/', linkText: 'Comprar casa en España' }),
  moving: siblingCallout({ label: '¿Y si el destino es España?', text: 'Visado, NIE, empadronamiento y un plazo de seis meses para el permiso de conducir.', url: '/es/mudarse-a-espana-seguros/', linkText: 'Mudarse a España' }),
  life: siblingCallout({ label: '¿La hipoteca es española?', text: 'En España el banco puede bonificar el tipo si contrata su seguro de vida, pero no puede imponerle su aseguradora.', url: '/es/seguro-vida-espana/', linkText: 'Seguro de vida en España' }),
  rental: siblingCallout({ label: '¿Alquila en España?', text: 'Impago de rentas, licencia turística y la responsabilidad del propietario no residente.', url: '/es/seguro-alquiler-espana/', linkText: 'Seguro de alquiler en España' }),
};

export const toPortugal = {
  guide: siblingCallout({ label: '¿Duda entre España y Portugal?', text: 'El mercado portugués tiene su propia lógica: el terremoto es opcional, la póliza se emite en portugués y casi todo empieza por el NIF.', url: '/es/seguros-portugal/', linkText: 'Seguros en Portugal' }),
  home: siblingCallout({ label: '¿También tiene casa en Portugal?', text: 'Allí no hay Consorcio: el terremoto se contrata aparte o no está cubierto.', url: '/es/seguro-hogar-alto-valor/', linkText: 'Seguro de hogar en Portugal' }),
  health: siblingCallout({ label: '¿Vivirá en Portugal?', text: 'SNS, NIF y una póliza que solo se emite con domicilio en Portugal: el orden es distinto.', url: '/es/seguro-salud-internacional/', linkText: 'Seguro de salud en Portugal' }),
  visa: siblingCallout({ label: '¿Su visado es para Portugal?', text: 'D7, D8 o D2: lo que pide el consulado portugués y por qué la póliza portuguesa llega después.', url: '/es/seguro-medico-visado-portugal/', linkText: 'Seguro médico para el visado portugués' }),
  preexisting: siblingCallout({ label: '¿Se instala en Portugal?', text: 'Allí algunas pólizas no hacen cuestionario médico y aplican una carencia a las enfermedades previas.', url: '/es/seguro-salud-preexistencias-portugal/', linkText: 'Preexistencias en Portugal' }),
  motor: siblingCallout({ label: '¿El auto estará en Portugal?', text: 'Permiso latinoamericano, canje en el IMT y su historial de conductor.', url: '/es/seguro-coche-portugal/', linkText: 'Seguro de auto en Portugal' }),
  liability: siblingCallout({ label: '¿También vive en Portugal?', text: 'Allí la responsabilidad civil no viene sola en la póliza de hogar: hay que pedirla.', url: '/es/seguro-responsabilidad-civil-familiar/', linkText: 'Responsabilidad civil en Portugal' }),
  property: siblingCallout({ label: '¿Compra en Portugal?', text: 'CPCV, escritura y lo que el banco exige desde el primer día.', url: '/es/comprar-casa-en-portugal-seguro/', linkText: 'Comprar casa en Portugal' }),
  moving: siblingCallout({ label: '¿Y si el destino es Portugal?', text: 'NIF, visado D7 o D8, domicilio y el orden en que se resuelve cada seguro.', url: '/es/mudarse-a-portugal-seguros/', linkText: 'Mudarse a Portugal' }),
  life: siblingCallout({ label: '¿La hipoteca es portuguesa?', text: 'El banco exige seguro de vida, pero usted puede elegir la aseguradora.', url: '/es/seguro-vida-portugal/', linkText: 'Seguro de vida en Portugal' }),
  rental: siblingCallout({ label: '¿Alquila en Portugal?', text: 'Alojamento Local, arrendamiento de larga duración y el seguro que exige la ley.', url: '/es/seguro-alquiler-portugal/', linkText: 'Seguro de alquiler en Portugal' }),
};
