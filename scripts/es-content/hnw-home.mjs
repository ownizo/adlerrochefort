/**
 * High-value home conditions (October 2026), Spanish — four pages, clusters
 * home-conditions / art-beyond / family-protection / home-declare (URLs in
 * scripts/lib/hnw-home-urls.mjs). Insurer never named; no premiums.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';
import { sec, ul, p, PUBLISHED_OCT } from '../lib/hnw-oct-sections.mjs';
import { homeSlug, homeUrl } from '../lib/hnw-home-urls.mjs';

const C = 'es';
const base = (key, crumb) => ({
  slug: homeSlug(key, C),
  url: homeUrl(key, C),
  cluster: key,
  published: PUBLISHED_OCT,
  modified: PUBLISHED_OCT,
  breadcrumb: [...BREADCRUMB_ROOT, { name: crumb }],
  schemaType: 'Article',
  formBranch: 'Español · Hogar',
  formCta: 'Solicitar el análisis',
});
const rel = (key, label) => ({ url: homeUrl(key, C), label });
const AVISO = sec('plain', 'aviso', 'Aviso importante', p('Información general de un mediador de seguros, no asesoramiento personalizado. La cobertura depende de la aceptación del riesgo por la aseguradora y de las condiciones de la póliza emitida.'));

export const HOME_PAGES = [
  {
    ...base('home-conditions', 'Hogar de alto valor: las condiciones'),
    title: 'Seguro de hogar de alto valor: las condiciones | Adler & Rochefort',
    description: 'Lo que cambia un seguro de hogar para grandes patrimonios en España y Portugal: reconstrucción garantizada, sin regla proporcional, sin franquicia en los grandes siniestros.',
    keywords: 'seguro hogar alto valor condiciones, seguro villa lujo España, sin regla proporcional, reconstrucción garantizada, alojamiento alternativo, búsqueda de fugas, seguro hogar grandes patrimonios',
    eyebrow: 'Private Clients · Hogar',
    h1: 'Seguro de hogar de alto valor en España y Portugal: las condiciones, cláusula por cláusula',
    standfirst: 'La póliza de hogar corriente está pensada para la vivienda media. En una villa en Marbella, un chalet en La Moraleja o una quinta en el Algarve muestra sus límites justo cuando el siniestro es grande. Las condiciones Private Clients que colocamos están construidas al revés.',
    pullquote: 'La regla proporcional no se negocia el día del siniestro. Se elimina antes.',
    formHeading: 'Solicite un análisis por escrito de su póliza',
    formSubject: 'Hogar de alto valor — condiciones',
    formIntro: 'Envíenos su póliza actual. Le respondemos por escrito, cláusula por cláusula: qué tiene, qué le falta y qué significa en un siniestro.',
    formPlaceholder: 'Por ejemplo: villa en Sotogrande con casa de invitados, piscina y muros de contención; póliza actual de un banco; obra de arte y relojes sin especificar.',
    sections: [
      sec('plain', 'capital', 'El capital: tasación y reconstrucción garantizada', ul([
        '<strong>Tasación sin coste</strong> por un técnico de la aseguradora: coste de reconstrucción, capitales de contenido y objetos de valor, y recomendaciones de prevención.',
        '<strong>Reconstrucción garantizada:</strong> si se aceptan las recomendaciones, la casa se reconstruye tras una pérdida total aunque el coste supere el capital.',
        '<strong>Sin regla proporcional:</strong> un siniestro parcial se paga entero, sin reducción por infraseguro.',
        '<strong>Coste real de reconstrucción:</strong> mismo diseño y calidad de materiales, honorarios, nuevas exigencias legales y retirada de escombros, con actualización anual del capital.',
      ])),
      sec('tint', 'terreno', 'La casa, las construcciones y el terreno', ul([
        '<strong>Otras construcciones</strong> — casa de invitados, garaje, muros — un 20 % adicional del capital de la casa, sin sublímite propio para muros de contención o de cerramiento.',
        '<strong>Árboles, arbustos y césped</strong> hasta el 10 %; <strong>estabilización del terreno</strong> con un 10 % adicional del siniestro.',
        '<strong>Búsqueda y reparación de fugas sin sublímite</strong>, más el agua o el gasóleo perdidos.',
        '<strong>La casa de hoy:</strong> contribución a un sistema de detección de fugas, a placas solares o geotermia al reconstruir y a un generador tras un corte por temporal; cerraduras sin límite ni franquicia; adaptación de la vivienda por invalidez permanente.',
      ])),
      sec('plain', 'alojamiento', 'Cuando la casa no se puede habitar', ul([
        '<strong>Alojamiento equivalente</strong>, incluidos animales y caballos, durante todo el tiempo necesario, sin franquicia ni plazo máximo fijo para la casa.',
        '<strong>Pérdida de alquileres</strong> y <strong>evacuación ordenada</strong> por la autoridad por daños en una propiedad vecina.',
      ])),
      sec('tint', 'contenido', 'El contenido, en casa y fuera', `${ul([
        '<strong>Todo riesgo en todo el mundo</strong>, sin necesidad de un seguro de equipaje aparte.',
        '<strong>Hasta un 25 % por encima del capital de contenido</strong>; valor de nuevo sin deducción; bienes de invitados y personal; nuevas adquisiciones 90 días; cancelación de celebraciones y carpas.',
      ])}
${p('Atención: el contenido no especificado tiene límites especiales para dinero, joyas y relojes, plata, colecciones y vino. Lo que tiene valor debe especificarse como objeto de valor, a valor convenido.')}`),
      sec('plain', 'siniestro', 'El siniestro', ul([
        '<strong>Sin franquicia en los grandes siniestros:</strong> la franquicia básica no se aplica a ningún siniestro cubierto superior a 10.000 €.',
        '<strong>Indemnización a su elección:</strong> en dinero o reparación por los proveedores y artesanos que elija, sin penalización.',
        '<strong>Reparaciones urgentes</strong> por encima del capital y gestión del siniestro por la propia aseguradora.',
      ])),
      AVISO,
    ].join('\n'),
    faqTitle: 'Hogar de alto valor — preguntas',
    faq: [
      { q: '¿Se aplica la regla proporcional en un seguro de hogar de alto valor?', a: '<p>No en las condiciones Private Clients que colocamos: el infraseguro no reduce la indemnización y un siniestro parcial se paga entero.</p>' },
      { q: '¿Durante cuánto tiempo se paga el alojamiento alternativo?', a: '<p>Para la casa, todo el tiempo necesario para volver a habitarla, en una vivienda equivalente y sin franquicia.</p>' },
      { q: '¿Hay franquicia en un siniestro grande?', a: '<p>La franquicia básica no se aplica a siniestros superiores a 10.000 €. Las franquicias especiales, como la de vivienda desocupada, se mantienen.</p>' },
    ],
    related: [
      rel('art-beyond', 'Arte y joyas más allá del valor convenido'),
      rel('family-protection', 'Protección familiar en el seguro de hogar'),
      rel('home-declare', 'Lo que debe declarar a la aseguradora'),
      { url: '/es/seguro-hogar-alto-valor/', label: 'Seguro de hogar de alto valor' },
    ],
  },
  {
    ...base('art-beyond', 'Arte y joyas'),
    title: 'Arte y joyas más allá del valor convenido | Adler & Rochefort',
    description: 'El valor convenido es el principio: infravaloración, título defectuoso, encargos en curso, préstamos y nuevas adquisiciones en una póliza Private Clients.',
    keywords: 'seguro de arte España, seguro obras de arte Portugal, valor convenido arte, título defectuoso seguro, préstamo obra de arte museo seguro, seguro joyas',
    eyebrow: 'Private Clients · Arte y colecciones',
    h1: 'Arte y joyas más allá del valor convenido: infravaloración, título, encargos y préstamos',
    standfirst: 'Asegurar las piezas importantes a valor convenido es la primera regla. Las condiciones Private Clients que colocamos van más allá — y ahí es donde el coleccionista se lleva las sorpresas agradables, si la relación está al día.',
    pullquote: 'La fecha de la tasación forma parte de su cobertura.',
    formHeading: 'Solicite un análisis por escrito de su colección',
    formSubject: 'Arte y joyas — valor convenido',
    formIntro: 'Envíenos la relación de piezas, las fechas de tasación y la póliza actual. Le decimos por escrito lo que se pagaría hoy.',
    formPlaceholder: 'Por ejemplo: obra latinoamericana del siglo XX tasada en 2019, relojes sin especificar, un cuadro prestado a una exposición en Madrid.',
    sections: [
      sec('plain', 'mercado', 'Cuando el mercado ha subido', `${ul([
        '<strong>Arte:</strong> si una obra especificada vale más que su capital y fue tasada profesionalmente en los cinco años anteriores al siniestro, la póliza paga el valor de mercado hasta el doble del capital, con un máximo adicional de 5 millones de euros.',
        '<strong>Joyas, relojes y otros objetos de valor:</strong> el mismo principio con una ventana de dos años, hasta el capital total de la categoría.',
      ])}
${p('Revalorice el arte al menos cada cinco años y las joyas y relojes cada dos.')}`),
      sec('tint', 'parcial', 'Daño parcial y depreciación', p('Se pagan la restauración, sin deducción por uso, y la pérdida de valor que quede después. En pares y juegos de arte o joyería, puede entregar la pieza superviviente y cobrar el juego completo.')),
      sec('plain', 'titulo', 'Título defectuoso', p('Si un tercero reclama que una obra comprada durante el seguro fue robada o nunca vendida legítimamente, la póliza paga la defensa jurídica y, si la reclamación prospera, la pérdida de la obra — hasta un límite anual y siempre que se haya hecho una comprobación razonable de la procedencia.')),
      sec('tint', 'encargos', 'Encargos, préstamos y nuevas adquisiciones', ul([
        '<strong>Obras en curso</strong> dañadas antes de terminarse o inacabadas por fallecimiento del artista: materiales y mano de obra contratada.',
        '<strong>Obras prestadas a usted</strong>, los primeros siete días; <strong>sus préstamos</strong> a museos, cubiertos si se comunican antes.',
        '<strong>Nuevas adquisiciones</strong> 90 días automáticamente, hasta una cuarta parte del capital de la categoría; <strong>robo por personal doméstico</strong> cubierto.',
      ])),
      AVISO,
    ].join('\n'),
    faqTitle: 'Arte y joyas — preguntas',
    faq: [
      { q: '¿Y si mi cuadro vale más que su capital asegurado?', a: '<p>Con una tasación profesional de menos de cinco años, la póliza paga el valor de mercado hasta el doble del capital, con un máximo adicional de 5 millones de euros.</p>' },
      { q: '¿Qué cubre el título defectuoso?', a: '<p>La defensa jurídica frente a quien reclame la propiedad de una obra especificada y la pérdida de la obra si la reclamación prospera, con límite anual.</p>' },
    ],
    related: [
      rel('home-conditions', 'Hogar de alto valor: las condiciones'),
      { url: '/es/seguro-hogar-alto-valor/', label: 'Seguro de hogar de alto valor' },
    ],
  },
  {
    ...base('family-protection', 'Protección familiar'),
    title: 'Protección familiar en el seguro de hogar | Adler & Rochefort',
    description: 'Carjacking, asalto en casa, acoso, secuestro de menores, ciberacoso y gastos de secuestro: la protección familiar dentro de un seguro de hogar Private Clients.',
    keywords: 'protección familiar seguro hogar, seguro carjacking, seguro asalto vivienda, seguro acoso, gastos secuestro seguro, ciberacoso seguro, seguro familias alto patrimonio',
    eyebrow: 'Private Clients · Familia',
    h1: 'Protección familiar en el seguro de hogar: carjacking, asalto, acoso y gastos de secuestro',
    standfirst: 'Algunos de los riesgos de una familia con patrimonio no tienen nada que ver con el edificio. Los mejores seguros de hogar los cubren igualmente, en una sección de protección familiar.',
    pullquote: '¿Está asegurada su familia, o solo su casa?',
    formHeading: 'Solicite una revisión discreta y por escrito',
    formSubject: 'Protección familiar',
    formIntro: 'Envíenos sus pólizas de hogar y de responsabilidad civil. Le decimos por escrito, con total discreción, lo que falta.',
    formPlaceholder: 'Por ejemplo: familia de cinco en Madrid, viajes frecuentes a México y Colombia, chófer y empleada interna.',
    sections: [
      sec('plain', 'cubre', 'Lo que cubre la protección familiar', `${ul([
        '<strong>Carjacking</strong> — retirada o retención forzosa de un familiar durante el robo de un coche.',
        '<strong>Asalto en la vivienda</strong> — violencia o amenaza por un intruso en la casa, una residencia temporal, el barco o la autocaravana, con la familia o invitados presentes.',
        '<strong>Robo con violencia</strong> fuera de casa.',
        '<strong>Acoso</strong> por alguien que ya tiene una orden judicial de alejamiento.',
        '<strong>Secuestro de menores</strong> de 13 años; <strong>secuestro</strong> de más de cuatro horas a bordo de un transporte público; <strong>air rage y road rage</strong>.',
      ])}
${p('Según el caso: gastos médicos, apoyo psicológico, recuperación, consultores y vigilantes de seguridad, refuerzo de la seguridad de la casa, traslado temporal y un capital por invalidez permanente o fallecimiento. En todo el mundo, salvo países con aviso de viaje oficial.')}`),
      sec('tint', 'secuestro', 'Secuestro: lo que permite la ley', p('En Portugal, la ley (art. 14 del Decreto-Ley 72/2008) prohíbe asegurar el riesgo de secuestro en sí. Lo que sí se cubre son los <strong>gastos</strong>: negociador, consultores de seguridad y comunicación, viajes y alojamiento de la familia, abogados, atención médica y psicológica, ingresos perdidos y recompensa por información. Para familias con exposición real, conviene además un <a href="/es/seguro-secuestro-extorsion/">seguro de secuestro y extorsión</a> propio.')),
      sec('plain', 'ciberacoso', 'Ciberacoso y reputación', p('Ante un acoso repetido en internet que provoque un despido, una sanción escolar o más de una semana sin poder ir a clase o al trabajo: consultor de comunicación, perito forense digital, consultor de ciberseguridad, gestión de reputación, salario perdido y traslado temporal.')),
      sec('tint', 'rc', 'La responsabilidad civil alrededor', `${ul([
        'Responsabilidad civil familiar mundial de hasta 10 millones de euros, con defensa aparte.',
        'Golf, camas elásticas e hinchables, carritos de golf y quads en la finca, personal doméstico por culpa del empleador, tarjetas y cheques falsificados.',
      ])}
${p('Exclusiones: embarcaciones de 26 pies o más o de más de 50 CV, cargos de consejero remunerados (D&amp;O), actividades profesionales y perros peligrosos.')}`),
      AVISO,
    ].join('\n'),
    faqTitle: 'Protección familiar — preguntas',
    faq: [
      { q: '¿Un seguro de hogar cubre de verdad el carjacking?', a: '<p>En las condiciones Private Clients que colocamos, sí: gastos médicos, apoyo psicológico y un capital por invalidez permanente, entre otros.</p>' },
      { q: '¿Se puede asegurar el secuestro?', a: '<p>En Portugal, el riesgo en sí no; los gastos que siguen a un secuestro, sí.</p>' },
    ],
    related: [
      rel('home-conditions', 'Hogar de alto valor: las condiciones'),
      { url: '/es/seguro-secuestro-extorsion/', label: 'Secuestro, rescate y extorsión' },
      { url: '/es/familias-alto-patrimonio-madrid-seguros/', label: 'Familias de alto patrimonio en Madrid' },
    ],
  },
  {
    ...base('home-declare', 'Lo que debe declarar'),
    title: 'Lo que debe declarar a la aseguradora | Adler & Rochefort',
    description: 'Alquiler, obras, meses de casa cerrada, préstamos de arte, cambios de seguridad: lo que exige declarar un seguro de hogar de alto valor y qué hacer tras un siniestro.',
    keywords: 'agravación del riesgo seguro hogar, qué declarar aseguradora, vivienda desocupada seguro, obras seguro hogar, alquiler seguro hogar, deberes tras siniestro',
    eyebrow: 'Private Clients · Hogar',
    h1: 'Lo que debe declarar a la aseguradora: las obligaciones de un seguro de hogar de alto valor',
    standfirst: 'La mayoría de los siniestros rechazados o reducidos en este segmento no tienen que ver con exclusiones, sino con algo que cambió y nunca se declaró. La lista práctica.',
    pullquote: 'La mejor póliza del mercado puede fallar por lo que no se declaró.',
    formHeading: 'Nosotros nos ocupamos de las declaraciones',
    formSubject: 'Declaraciones a la aseguradora',
    formIntro: 'Díganos qué va a cambiar — obras, alquiler, una ausencia larga. Lo comunicamos por escrito a la aseguradora y le confirmamos las condiciones.',
    formPlaceholder: 'Por ejemplo: vamos a reformar la cocina y los baños en primavera, y la casa estará cerrada de enero a marzo.',
    sections: [
      sec('plain', 'antes', 'Declarar antes de que ocurra', ul(['Cambio de ocupación: alquilar la casa, también de corta duración.', 'Cambio de uso: actividad profesional o huéspedes de pago.', 'Obras con un coste previsto superior a 250.000 €.', 'Préstamo de arte u objetos de valor a galerías, museos o ferias.'])),
      sec('tint', 'cuanto-antes', 'Declarar en cuanto ocurra', `${ul(['Deterioro del inmueble, incluidos indicios de asentamiento o deslizamiento.', 'Cualquier cambio en la seguridad: alarma desconectada, contrato con la central rescindido, caja fuerte retirada.', 'Cambio relevante de profesión, imputación o condena (salvo tráfico) o insolvencia de un familiar.'])}
${p('La agravación del riesgo debe comunicarse en un plazo de 14 días.')}`),
      sec('plain', 'cerrada', 'Los meses de casa cerrada', `${ul(['<strong>Vivienda desocupada:</strong> si lleva más de 30 días consecutivos prácticamente vacía y no se avisó, la franquicia sube al 5 % del capital.', '<strong>Heladas:</strong> los daños por congelación de tuberías quedan excluidos tras más de 60 días deshabitada, salvo que se mantenga la calefacción o se vacíe la instalación.'])}
${p('Una casa amueblada que se usa parte del año no está «vacía». Describa el patrón de uso al principio y mantenga la alarma y la vigilancia tal como se declararon.')}`),
      sec('tint', 'siniestro', 'Después de un siniestro', ul(['Comunique rápido — y, en caso de robo o de un hecho de protección familiar, también a la policía.', 'Proteja el inmueble y guarde las facturas de las reparaciones urgentes; las demás, con acuerdo previo.', 'Conserve los bienes dañados, prepare un inventario con facturas y presente una declaración firmada en 60 días desde que se la pidan.', 'Inicie la reparación de un siniestro parcial en 180 días; si no, se paga la reconstrucción menos la depreciación.', 'No reconozca responsabilidad ante terceros sin acuerdo escrito.'])),
      AVISO,
    ].join('\n'),
    faqTitle: 'Declaraciones — preguntas',
    faq: [
      { q: '¿Tengo que avisar si alquilo la casa?', a: '<p>Sí, antes de hacerlo, también en alquiler de corta duración. La aseguradora puede ajustar condiciones o prima.</p>' },
      { q: '¿Y si la casa está vacía unos meses?', a: '<p>Tras más de 30 días prácticamente vacía sin aviso, la franquicia sube al 5 % del capital; las heladas quedan excluidas tras 60 días sin calefacción ni vaciado.</p>' },
    ],
    related: [
      rel('home-conditions', 'Hogar de alto valor: las condiciones'),
      { url: '/es/seguro-alquiler-villa-lujo/', label: 'Alquiler vacacional de una villa de lujo' },
    ],
  },
];
