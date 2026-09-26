/**
 * /es/seguro-aviacion-privada/  (cluster: niche-aviation)
 *
 * Search intent: "seguro avión privado", "seguro helicóptero privado",
 * "seguro casco aeronave", "seguro dron finca" — owners of private aircraft and
 * helicopters based at Cascais/Tires, Portimão or Madeira, Madrid (Torrejón,
 * Cuatro Vientos), Málaga, Ibiza, Palma or Barcelona, and estates using drones.
 *
 * Placed exclusively through specialist aviation markets via a co-brokerage
 * partner — the page says so plainly. Regulatory references kept general:
 * Regulation (EC) No 785/2004 for operators' minimum insurance, the EU drone
 * framework, AESA in Spain and ANAC in Portugal.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';
import { section, cardsSection, compareTable, howWeWork, disclaimer } from './niche-shared.mjs';

export const NICHE_AVIATION_PAGE = {
  slug: 'seguro-aviacion-privada',
  url: '/es/seguro-aviacion-privada/',
  cluster: 'niche-aviation',
  title: 'Seguro de aviación privada | Adler & Rochefort',
  description:
    'Aviones privados, helicópteros y drones en España y Portugal: casco a valor convenido, responsabilidad civil y de pasajeros, tripulación y hangar.',
  keywords:
    'seguro avión privado, seguro helicóptero privado, seguro casco aeronave, seguro responsabilidad civil aeronave, seguro aviación privada España, seguro aviação Portugal, seguro dron finca, seguro hangar, Reglamento 785/2004 seguro',
  eyebrow: 'Coberturas especializadas · Aviación privada',
  h1: 'Seguro de aviación privada: aviones, helicópteros y drones',
  standfirst:
    'Una aeronave privada se asegura en un mercado propio, con suscriptores especializados y exigencias legales europeas. La colocamos a través de un socio de mediación especializado en aviación, y le acompañamos como único interlocutor en España y en Portugal.',
  published: '2026-09-26T09:00:00+00:00',
  modified: '2026-09-26T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Aviación privada' }],
  pullquote:
    'En aviación, la póliza empieza por una pregunta sencilla que casi nunca lo es: quién opera la aeronave.',
  schemaType: 'Article',
  formHeading: 'Solicite un análisis por escrito para su aeronave',
  formBranch: 'Español · Aviación privada',
  formSubject: 'Aviación privada',
  formCta: 'Solicitar el análisis',
  formIntro:
    'Indíquenos el tipo de aeronave, su base, el uso y quién la opera, o envíenos la póliza actual. Le respondemos por escrito con los siguientes pasos.',
  formPlaceholder:
    'Por ejemplo: helicóptero biturbina con base en Cascais, uso privado, gestionado por una empresa de gestión con piloto contratado; vuelos frecuentes a Madrid y Mallorca.',
  sections: `${section(
    'plain',
    'para-quien',
    `    <h2 id="para-quien">Para quién es</h2>
    <p>Para propietarios de aviones y helicópteros privados — de un monomotor de pistón a un reactor ejecutivo — con base en aeródromos y aeropuertos de la Península y las islas: en Portugal, Cascais-Tires, Portimão o Madeira; en España, Madrid (Torrejón y Cuatro Vientos), Málaga, Ibiza, Palma o Barcelona. También para quienes tienen una participación en una aeronave compartida o la utilizan en arrendamiento, y para las fincas que emplean drones en la gestión agrícola, la vigilancia o la fotografía.</p>
    <p>Lo decimos con claridad: <strong>los riesgos de aviación los colocamos exclusivamente en mercados especializados de aviación, a través de un socio de mediación (co-corretaje) dedicado a este sector.</strong> Nuestro papel es entender su situación, coordinarla con el resto de su patrimonio asegurado, explicarle las condiciones en español y estar a su lado en la renovación y en un siniestro.</p>`
  )}
${cardsSection(
    'tint',
    'coberturas',
    'Lo que incluye una póliza bien colocada',
    'Una póliza de aviación privada combina, normalmente, estas coberturas:',
    [
      ['Casco a todo riesgo', 'Los daños a la aeronave en vuelo, en rodaje y en tierra, a un valor convenido fijado al inicio, incluidas las operaciones de salvamento y retirada.'],
      ['Casco — riesgos de guerra', 'Guerra, secuestro, confiscación y actos malintencionados, excluidos del casco básico y cubiertos mediante una cobertura aparte.'],
      ['Responsabilidad civil frente a terceros', 'Los daños causados a terceros en tierra o en otras aeronaves, con los mínimos exigidos por el Reglamento (CE) n.º 785/2004 y límites superiores cuando conviene.'],
      ['Responsabilidad frente a pasajeros', 'Las lesiones de los pasajeros y los daños a su equipaje, también con los mínimos legales europeos por pasajero.'],
      ['Accidentes de la tripulación', 'Capitales por fallecimiento o invalidez del piloto y la tripulación, más allá de su propia cobertura laboral.'],
      ['Hangar y tierra', 'La responsabilidad del titular de un hangar por las aeronaves de terceros que custodia, y los riesgos en tierra de equipos y repuestos.'],
    ]
  )}
${section(
    'plain',
    'quien-opera',
    `    <h2 id="quien-opera">Propietario, operador y empresa de gestión</h2>
    <p>En aviación privada, el propietario de la aeronave y su operador no siempre son la misma persona. Muchos propietarios confían la aeronave a una <strong>empresa de gestión</strong> que contrata a los pilotos, organiza el mantenimiento y, a veces, la explota comercialmente en los periodos en que el propietario no vuela. Cada fórmula tiene consecuencias en el seguro:</p>
    <ul>
      <li><strong>Uso privado por el propietario</strong>: la póliza se contrata a nombre del propietario u operador, con los pilotos autorizados nombrados o definidos por su experiencia.</li>
      <li><strong>Aeronave gestionada</strong>: la póliza debe reflejar quién es el operador, quién el propietario y quién el acreedor financiero, con los intereses de cada uno bien identificados.</li>
      <li><strong>Explotación comercial</strong>: el uso por terceros o los vuelos de pago cambian por completo el riesgo y deben declararse.</li>
      <li><strong>Propiedad compartida y arrendamiento</strong>: los programas de propiedad fraccionada y los arrendamientos tienen su propia estructura contractual, que el seguro tiene que seguir.</li>
    </ul>
    <p>Una aeronave financiada suele incluir, además, exigencias del banco o la sociedad de <em>leasing</em> sobre el valor asegurado y la designación de beneficiario.</p>`
  )}
${section(
    'tint',
    'espana-portugal',
    `    <h2 id="espana-portugal">España, Portugal y el marco europeo</h2>
    <p>El seguro obligatorio de las aeronaves se rige, en lo esencial, por normas europeas comunes a los dos países; las autoridades nacionales supervisan la matrícula, la operación y los drones:</p>
${compareTable('Marco del seguro de aviación privada en España y en Portugal', [
  ['Seguro mínimo de operadores', 'Reglamento (CE) n.º 785/2004: mínimos de responsabilidad frente a terceros y pasajeros según el peso de la aeronave', 'El mismo Reglamento europeo, de aplicación directa'],
  ['Autoridad de aviación civil', 'Agencia Estatal de Seguridad Aérea (AESA)', 'Autoridade Nacional da Aviação Civil (ANAC)'],
  ['Drones', 'Marco europeo de drones y normativa nacional complementaria; registro de operadores ante AESA', 'Marco europeo de drones y normativa nacional complementaria; registro de operadores ante ANAC'],
  ['Operaciones habituales', 'Madrid, costa mediterránea, Baleares', 'Lisboa-Cascais, Algarve, Madeira'],
])}
    <p><strong>Los drones</strong> merecen una nota aparte. En una finca, un dron se utiliza para vigilar cultivos, controlar vallados o hacer fotografía, y quien lo opera responde de los daños que cause. El marco europeo clasifica las operaciones por categorías de riesgo y exige el registro del operador en la mayoría de los casos; la normativa nacional puede exigir un seguro de responsabilidad civil. La responsabilidad civil familiar o de la finca no siempre cubre los drones: hay que comprobarlo.</p>`
  )}
${section(
    'plain',
    'lagunas',
    `    <h2 id="lagunas">Lo que suele fallar</h2>
    <ul>
      <li><strong>Pilotos no autorizados en la póliza.</strong> Un piloto que no cumple la experiencia exigida o no está nombrado puede dejar la aeronave sin cobertura.</li>
      <li><strong>Uso declarado distinto del real</strong>, sobre todo cuando la empresa de gestión explota la aeronave comercialmente.</li>
      <li><strong>Valor convenido desactualizado</strong> tras una remodelación de cabina, una nueva aviónica o un cambio de mercado.</li>
      <li><strong>Límites de responsabilidad en el mínimo legal</strong> cuando el patrimonio del propietario justificaría límites muy superiores.</li>
      <li><strong>Drones fuera de toda póliza</strong>, operados por personal de la finca sin registro ni seguro.</li>
    </ul>`
  )}
${section(
    'tint',
    'que-necesitamos',
    `    <h2 id="que-necesitamos">Lo que necesitamos para obtener condiciones</h2>
    <ul>
      <li>Tipo, modelo, año y matrícula de la aeronave, y su valor.</li>
      <li>Base principal, hangar y zonas de operación.</li>
      <li>Uso: privado, de negocio, gestionado, explotación comercial.</li>
      <li>Pilotos: licencias, habilitaciones, horas totales y en el tipo.</li>
      <li>Estructura de propiedad y financiación, y la empresa de gestión si la hay.</li>
      <li>Historial de siniestros y póliza actual.</li>
      <li>Para drones: modelos, uso, categoría de operación y registro del operador.</li>
    </ul>`
  )}
${howWeWork('plain', 'mercados especializados de aviación')}
${disclaimer('tint', 'Los riesgos de aviación se colocan exclusivamente a través de un socio de mediación especializado en este mercado.')}`,
  faqTitle: 'Seguro de aviación privada — preguntas',
  faq: [
    {
      q: '¿Colocan ustedes mismos el seguro de mi aeronave?',
      a: '<p>Lo colocamos a través de un socio de mediación especializado en aviación, que accede a los mercados de este sector. Nosotros entendemos su situación, coordinamos la póliza con el resto de su patrimonio, le explicamos las condiciones en español y le acompañamos en la renovación y en un siniestro.</p>',
    },
    {
      q: '¿Qué seguro es obligatorio para una aeronave privada?',
      a: '<p>El Reglamento (CE) n.º 785/2004 fija, para toda la Unión Europea, unos mínimos de seguro de responsabilidad frente a terceros y frente a pasajeros según el peso de la aeronave. El casco no es obligatorio por ley, aunque lo exigirá cualquier entidad que financie la aeronave.</p>',
    },
    {
      q: 'Mi aeronave la gestiona una empresa. ¿Quién debe contratar el seguro?',
      a: '<p>Depende del contrato de gestión y de quién sea el operador. Lo importante es que la póliza refleje correctamente al propietario, al operador y al acreedor financiero, y el uso real de la aeronave, incluida cualquier explotación comercial.</p>',
    },
    {
      q: '¿Está cubierto el riesgo de guerra o de secuestro de la aeronave?',
      a: '<p>No en el casco básico. Los riesgos de guerra, secuestro, confiscación y actos malintencionados se cubren con una póliza o extensión específica de casco de guerra, que conviene incluir en el programa.</p>',
    },
    {
      q: 'Usamos un dron en la finca. ¿Necesita seguro?',
      a: '<p>El operador de un dron responde de los daños que cause, y la normativa puede exigir registro y, según el caso, un seguro de responsabilidad civil. Las pólizas de hogar o de la finca no siempre cubren los drones, así que conviene revisarlo y, si procede, asegurarlo aparte.</p>',
    },
  ],
  related: [
    { url: '/es/', label: 'Seguros para grandes patrimonios en España y Portugal' },
    { url: '/es/seguro-hogar-alto-valor/', label: 'Seguro de hogar de alto valor' },
    { url: '/es/seguro-secuestro-extorsion/', label: 'Seguro de secuestro, rescate y extorsión' },
    { url: '/es/seguro-finca-vinedo/', label: 'Seguro de fincas, bodegas y viñedos' },
  ],
};
