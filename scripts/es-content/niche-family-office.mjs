/**
 * /es/seguro-family-office/  (cluster: niche-familyoffice)
 *
 * Search intent: "seguro family office", "seguro D&O holding familiar",
 * "seguros para family office España Portugal" — single-family offices and
 * the families behind them, many of them Latin American, with a holding in
 * Madrid or Lisbon, homes in both countries and business still running in
 * the Americas.
 *
 * The page is the Spanish member of the October 2026 family-office pillar
 * (PT /private-clients/family-offices/, EN /en/family-office-insurance/, DE,
 * FR, IT). Topic first — what a family office is and where its risk sits —
 * then the protections. Legal points are stated cautiously and only where
 * verified at source: CSC art. 396 (Portugal), LSC arts. 236 and 367 (Spain),
 * Ley 29/1987 art. 3.1.c, Código do Imposto do Selo art. 1(5)(a), and the
 * HCCH status table for the 1985 Trusts Convention. No insurer named, no
 * prices; placed through insurers and specialist markets.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';
import { section, cardsSection, compareTable, howWeWork, disclaimer } from './niche-shared.mjs';

export const NICHE_FAMILY_OFFICE_PAGE = {
  slug: 'seguro-family-office',
  url: '/es/seguro-family-office/',
  cluster: 'niche-familyoffice',
  title: 'Seguros para family offices · España y Portugal',
  description:
    'Seguros para family offices en España y Portugal: D&O de la holding, trustees, viviendas y yate, fraude, ciberriesgo, secuestro, vida y sucesión.',
  keywords:
    'seguro family office, family office España seguros, family office Portugal, seguro D&O holding familiar, responsabilidad trustee, seguro fraude family office, seguro secuestro familia, seguro de vida impuesto de sucesiones',
  eyebrow: 'Private clients · Family offices',
  h1: 'Seguros para family offices en España y Portugal',
  standfirst:
    'Un family office existe para mantener unido el patrimonio de una familia entre generaciones, sociedades y países. Sus seguros, casi siempre, hacen lo contrario: una póliza por sociedad, por casa, por barco, contratadas en momentos distintos. Primero miramos el conjunto — personas, sociedades y bienes — y después colocamos cada riesgo donde se suscribe bien.',
  published: '2026-10-03T09:00:00+00:00',
  modified: '2026-10-03T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Family offices' }],
  pullquote:
    'El riesgo de un family office no está en una póliza concreta, sino en los huecos entre todas ellas.',
  schemaType: 'Article',
  formHeading: 'Solicite un análisis confidencial por escrito',
  formBranch: 'Español · Family office',
  formSubject: 'Family office — análisis del programa de seguros',
  formCta: 'Solicitar el análisis',
  formIntro:
    'Basta con una descripción general de la estructura: sociedades, viviendas y otros bienes, y quién toma las decisiones. Tratamos la solicitud con reserva y le respondemos por escrito.',
  formPlaceholder:
    'Por ejemplo: holding en Madrid con filiales en México y Portugal, casas en Madrid y Cascais, un yate en Palma; uno de los hijos es trustee de un trust extranjero.',
  sections: `${section(
    'plain',
    'que-es',
    `    <h2 id="que-es">Qué es un family office y por qué su riesgo es distinto</h2>
    <p>Un <strong>single family office</strong> gestiona las inversiones, las empresas, los inmuebles y los asuntos de una familia; un <strong>multi family office</strong> hace lo mismo, como actividad profesional, para varias familias. En España y Portugal la estructura suele ser una <em>sociedad holding</em> o una <em>sociedade gestora de participações sociais</em>, a veces junto a una fundación o a trusts sujetos a una ley extranjera, con familiares, directivos ajenos a la familia y personal doméstico entre Madrid, Marbella, las Baleares, Lisboa, Cascais y el Algarve — y, para muchas familias latinoamericanas, con negocios que siguen funcionando al otro lado del Atlántico.</p>
    <p>Esa forma cambia lo que puede salir mal. Deciden pocas personas que son a la vez propietarias y gestoras, a menudo por cuenta de familiares. Se mueven grandes importes entre sociedades y países. Los bienes son visibles. Y las personas implicadas quedan expuestas a título personal de un modo para el que un programa de seguros de empresa convencional nunca fue pensado.</p>
    <h3>Personas, sociedades y bienes</h3>
    <ul>
      <li><strong>Las personas</strong>: administradores de la holding y del family office, trustees y protectores, familiares en comités de inversión y quienes ejecutan los pagos. Una reclamación contra ellos alcanza su patrimonio personal.</li>
      <li><strong>Las sociedades</strong>: la holding, sus filiales, la propia sociedad del family office y las fundaciones, cada una con su gobierno y su exposición ante autoridades, acreedores y socios familiares minoritarios.</li>
      <li><strong>Los bienes</strong>: casas en dos países, arte y colecciones, vehículos, un yate, a veces un avión o una finca — asegurados uno a uno, en momentos distintos y con bases de valor distintas.</li>
    </ul>`
  )}
${cardsSection(
    'tint',
    'coberturas',
    'Las coberturas que reúne un programa de family office',
    'No todas las familias necesitan todas. Estas son las que analizamos en una primera revisión:',
    [
      ['D&amp;O de la holding y del family office', 'La responsabilidad personal de los administradores por sus decisiones de gestión, también frente a socios familiares, acreedores y autoridades, con la cobertura «Side A» que protege a la persona cuando la sociedad no puede indemnizarla.'],
      ['Responsabilidad de trustees y protectores', 'Para quien actúa como trustee, protector o patrono de una fundación: el deber es fiduciario y la reclamación suele venir de la propia familia.'],
      ['Un programa para viviendas, yate y colecciones', 'Varias residencias en España y Portugal, contenido, arte y un yate, coordinados, a valor convenido y con un único vencimiento cuando el mercado lo permite.'],
      ['Fraude, ingeniería social y ciberriesgo', 'Fraude del CEO y de cambio de cuenta, infidelidad de empleados y ciberataques en el family office y en los dispositivos de la familia. <a href="/es/seguro-ciber-fraude-familiar/">Ciberriesgo familiar</a>.'],
      ['Secuestro, rescate y extorsión', 'Consultoría de crisis especializada y reembolso para la familia, el personal y los invitados, con la reserva que exige esta cobertura. <a href="/es/seguro-secuestro-extorsion/">Ver la cobertura</a>.'],
      ['Vida y sucesión', 'Liquidez cuando más se necesita: para el impuesto de sucesiones en España, para igualar a los herederos o para que una empresa siga funcionando tras la muerte de una persona clave. <a href="/es/seguro-vida-espana/">Seguro de vida en España</a>.'],
    ]
  )}
${section(
    'plain',
    'espana-portugal',
    `    <h2 id="espana-portugal">Lo que cambia entre España y Portugal</h2>
    <p>El análisis jurídico y fiscal corresponde a los abogados y asesores fiscales de la familia. Para el seguro, estos son los puntos que más pesan:</p>
${compareTable('Diferencias entre España y Portugal para un family office', [
  ['Responsabilidad de los administradores', 'Ley de Sociedades de Capital, arts. 236 y siguientes; el art. 367 hace responder solidariamente a los administradores de las obligaciones sociales posteriores a una causa legal de disolución si no actúan', 'Código das Sociedades Comerciais; en la sociedade anónima, el art. 396 exige una caución a los administradores, sustituible por un seguro de responsabilidad salvo dispensa legal'],
  ['Trusts', 'Sin ley general de trusts en el derecho interno; España no ha ratificado el Convenio de La Haya de 1985', 'Lo mismo: sin ley general de trusts y sin ratificación del Convenio de La Haya'],
  ['Seguro de vida al fallecimiento', 'Sujeto al Impuesto sobre Sucesiones y Donaciones cuando el beneficiario no es el tomador (Ley 29/1987, art. 3.1.c), con reducciones que dependen mucho de la comunidad autónoma', 'No hay impuesto sucesorio; las transmisiones gratuitas tributan por Imposto do Selo, del que están exentos cónyuge, descendientes y ascendientes, y los capitales de seguros de vida no están sujetos'],
  ['Colocación', 'En libre prestación de servicios, con aseguradoras autorizadas en España y mercados especializados', 'Desde nuestras oficinas de Lisboa y Lagos'],
])}
    <p>Para los artículos de fondo, en inglés: <a href="/en/blog/family-office-holding-d-and-o-insurance/" hreflang="en">D&amp;O para holdings y family offices</a>, <a href="/en/blog/fiduciary-family-office-liability-portugal/" hreflang="en">responsabilidad de trustees</a> y <a href="/en/blog/life-insurance-succession-spain-portugal/" hreflang="en">seguro de vida y sucesión</a>.</p>`
  )}
${howWeWork('tint', 'las aseguradoras y los mercados especializados que suscriben cada riesgo')}
${disclaimer('plain', 'La información fiscal de esta página es general; la situación de cada familia debe confirmarse con un asesor fiscal.')}`,
  faqTitle: 'Seguros para family offices — preguntas',
  faq: [
    {
      q: '¿Qué es, en la práctica, un «seguro para family office»?',
      a: '<p>No es una póliza única, sino un programa coordinado: para las personas que gestionan los asuntos de la familia (D&amp;O, responsabilidad de trustees), para las sociedades (fraude, ciberriesgo y, si prestan servicios, responsabilidad profesional) y para los bienes y la vida de la familia (casas, colecciones, yate, secuestro, vida). Su valor está en que límites, asegurados y territorios coincidan.</p>',
    },
    {
      q: '¿Una holding familiar sin socios externos necesita un D&amp;O?',
      a: '<p>A menudo, sí. Las reclamaciones llegan también de acreedores, de la Agencia Tributaria y otros reguladores, de contrapartes en operaciones y, en las empresas familiares, de familiares que heredan participaciones. Sin seguro, solo los costes de defensa recaen ya sobre el administrador.</p>',
    },
    {
      q: '¿Pueden ir las casas de España y Portugal y el yate en un solo programa?',
      a: '<p>Las casas y su contenido en los dos países pueden ir, muchas veces, en un programa de hogar de alto valor, a valor convenido y con un único vencimiento, si la aseguradora suscribe cada ubicación. El yate suele ir en una póliza marítima propia, coordinada en responsabilidad civil y asegurados.</p>',
    },
    {
      q: '¿Tributa en España el capital de un seguro de vida?',
      a: '<p>Por regla general, sí, cuando el beneficiario no es el tomador: entra en el Impuesto sobre Sucesiones y Donaciones (Ley 29/1987, art. 3.1.c), con reducciones fijadas en buena parte por cada comunidad autónoma. En Portugal, los capitales de seguros de vida no están sujetos al Imposto do Selo sobre transmisiones gratuitas. Confírmelo siempre con un asesor fiscal.</p>',
    },
    {
      q: '¿Trabajan con nuestros abogados y gestores de patrimonio?',
      a: '<p>Sí, y lo preferimos. El seguro tiene que seguir la estructura que han diseñado los asesores de la familia; compartimos con ellos nuestro análisis escrito, siempre por indicación suya.</p>',
    },
  ],
  related: [
    { url: '/es/', label: 'Seguros private client y expatriados — España y Portugal' },
    { url: '/es/seguro-secuestro-extorsion/', label: 'Secuestro, rescate y extorsión' },
    { url: '/es/seguro-ciber-fraude-familiar/', label: 'Ciberriesgo, fraude e identidad de la familia' },
    { url: '/es/seguro-hogar-alto-valor/', label: 'Seguro de hogar de alto valor' },
  ],
};
