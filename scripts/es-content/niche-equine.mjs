/**
 * /es/seguro-caballos/  (cluster: niche-equine)
 *
 * Search intent: "seguro caballo mortalidad", "seguro responsabilidad civil
 * caballo", "seguro yeguada", "seguro caballo PRE" — owners of sport, breeding
 * and leisure horses, and of stables and equestrian properties: Comporta,
 * Sintra/Cascais and Lusitano breeding in the Ribatejo/Alentejo; Sotogrande
 * (polo), Andalusia (PRE), Madrid, Valencia/Oliva (show jumping).
 *
 * Spanish-specific angle: the PRE and the Lusitano are the two Iberian breeds
 * the reader will recognise; liability rests on strict keeper's liability in
 * both civil codes (ES art. 1905; PT art. 502). Placed through specialist
 * bloodstock/equine markets and co-brokerage partners.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';
import { section, cardsSection, compareTable, howWeWork, disclaimer } from './niche-shared.mjs';

export const NICHE_EQUINE_PAGE = {
  slug: 'seguro-caballos',
  url: '/es/seguro-caballos/',
  cluster: 'niche-equine',
  title: 'Seguro de caballos y cuadras | Adler & Rochefort',
  description:
    'Seguro de caballos en España y Portugal: mortalidad y robo a valor convenido, veterinario, pérdida de uso, cuadras y responsabilidad civil del poseedor.',
  keywords:
    'seguro caballo, seguro mortalidad caballo, seguro responsabilidad civil caballo, seguro caballo PRE, seguro caballo lusitano, seguro yeguada, seguro cuadra, seguro caballo de polo, seguro caballo salto, seguro centro ecuestre',
  eyebrow: 'Coberturas especializadas · Caballos',
  h1: 'Seguro de caballos, cuadras e instalaciones ecuestres',
  standfirst:
    'Un caballo de deporte o de cría puede valer tanto como una casa, y responde de lo que hace como ninguna casa: la responsabilidad de su poseedor es objetiva en España y en Portugal. Aseguramos los caballos, las instalaciones y esa responsabilidad, con mercados especializados.',
  published: '2026-09-26T09:00:00+00:00',
  modified: '2026-09-26T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Caballos' }],
  pullquote:
    'El valor de un caballo se fija antes de la póliza, con un veterinario — no después del siniestro, con un perito.',
  schemaType: 'Article',
  formHeading: 'Solicite un análisis por escrito para sus caballos',
  formBranch: 'Español · Caballos',
  formSubject: 'Caballos e instalaciones ecuestres',
  formCta: 'Solicitar el análisis',
  formIntro:
    'Indíquenos cuántos caballos tiene, su uso — deporte, cría, ocio — y su valor aproximado, y si tiene cuadras o un centro ecuestre. Le respondemos por escrito.',
  formPlaceholder:
    'Por ejemplo: tres caballos de salto en Oliva, uno en competición internacional; cuadra propia con pista cubierta en una finca cerca de Valencia; mozo de cuadra a tiempo completo.',
  sections: `${section(
    'plain',
    'para-quien',
    `    <h2 id="para-quien">Para quién es</h2>
    <p>Para propietarios de caballos de deporte, de cría y de ocio, y para quienes tienen cuadras, pistas o un centro ecuestre en su propiedad. En Portugal, familias con caballos en la Comporta o en Sintra y Cascais, y criadores de <strong>lusitanos</strong> en el Ribatejo y el Alentejo. En España, el polo en Sotogrande, la cría del <strong>Pura Raza Española</strong> en Andalucía, la doma y el salto en Madrid y los circuitos internacionales de salto de Valencia y Oliva.</p>
    <p>Algunos tienen un caballo de ocio en pupilaje; otros, una yeguada con sementales, yeguas de vientre y potros, o varios caballos de competición que viajan por Europa. La estructura del seguro es la misma; las sumas, las coberturas y los mercados, no.</p>`
  )}
${cardsSection(
    'tint',
    'caballo',
    'El caballo: lo que puede asegurarse',
    'Las pólizas de este mercado se construyen por capas. La base es la mortalidad; el resto se añade según el caballo y su uso:',
    [
      ['Mortalidad y robo', 'Muerte por enfermedad o accidente, sacrificio necesario por razones humanitarias y robo, a un valor convenido fijado al inicio, normalmente con reconocimiento veterinario previo.'],
      ['Gastos veterinarios y quirúrgicos', 'Cirugía — el cólico es el ejemplo clásico — y tratamiento veterinario, con límites por año o por siniestro.'],
      ['Pérdida de uso', 'Cuando el caballo sobrevive pero ya no puede dedicarse a la actividad para la que se aseguró: competición, polo o cría.'],
      ['Incapacidad permanente', 'Una indemnización cuando una lesión o enfermedad incapacita definitivamente al caballo, según las condiciones.'],
      ['Infertilidad del semental', 'Para sementales en servicio: la pérdida de capacidad reproductiva por accidente o enfermedad.'],
      ['Transporte', 'Los traslados por carretera, en ferry o por avión, a concursos, a subastas o a la yeguada, dentro y fuera de la Península.'],
      ['Guarnicionería y material', 'Sillas, bridas, mantas, camiones y remolques de caballos, dentro de la póliza o en coberturas asociadas.'],
    ]
  )}
${section(
    'plain',
    'responsabilidad',
    `    <h2 id="responsabilidad">La responsabilidad del poseedor: objetiva a los dos lados de la frontera</h2>
    <p>Esta es la cobertura que más se olvida y la que puede costar más. En los dos países, quien tiene un caballo responde de los daños que cause, aunque no haya culpa propia:</p>
${compareTable('Responsabilidad civil por daños causados por caballos en España y en Portugal', [
  ['Norma', 'Código Civil, art. 1905', 'Código Civil, art. 502'],
  ['Quién responde', 'El poseedor del animal, o quien se sirve de él', 'Quien utiliza el animal en su propio interés'],
  ['Carácter', 'Responsabilidad objetiva: se responde aunque el caballo se escape o se extravíe, salvo fuerza mayor o culpa del perjudicado', 'Responsabilidad por riesgo: se responde de los daños que resulten del peligro especial del animal'],
])}
    <p>Un caballo que se escapa a una carretera, un visitante coceado en la cuadra, un jinete invitado que cae, un caballo que daña un vehículo en un concurso: son reclamaciones corrientes, y las lesiones personales pueden alcanzar cifras muy altas. Por eso la responsabilidad civil del propietario es imprescindible, y debe incluir a los mozos, jinetes y amazonas que montan sus caballos, a quienes los tienen cedidos o en <em>leasing</em> y, si procede, la actividad de pupilaje o de clases.</p>
    <p>La responsabilidad civil familiar de una póliza de hogar puede incluir caballos de ocio en algunos casos, pero rara vez caballos de competición, de cría o una actividad con terceros. Conviene comprobarlo por escrito.</p>`
  )}
${cardsSection(
    'tint',
    'instalaciones',
    'Las instalaciones ecuestres',
    'Las cuadras, las pistas y los almacenes tienen riesgos propios — el incendio de un henil es el más grave — y deben asegurarse por su valor real:',
    [
      ['Cuadras y boxes', 'Por su coste de reconstrucción, incluidos equipamientos como duchas, caminadores y sistemas de ventilación.'],
      ['Pistas y picaderos', 'Pistas cubiertas y exteriores, con su superficie técnica, iluminación y vallados.'],
      ['Heniles y almacenes', 'El heno y la paja son combustibles de primer orden: el almacenamiento, la distancia a las cuadras y la detección influyen en las condiciones.'],
      ['Centro ecuestre', 'Si hay pupilaje, clases o eventos: responsabilidad de explotación, accidentes del personal y pérdida de ingresos tras un siniestro.'],
    ]
  )}
${section(
    'plain',
    'lagunas',
    `    <h2 id="lagunas">Lo que suele fallar</h2>
    <ul>
      <li><strong>Un valor convenido desactualizado.</strong> Un caballo joven que triunfa en competición puede multiplicar su valor; una póliza que no se revisa se queda atrás.</li>
      <li><strong>Sin reconocimiento veterinario previo</strong>, las enfermedades preexistentes quedan excluidas y la discusión llega en el peor momento.</li>
      <li><strong>Declarar un uso distinto del real</strong> — ocio cuando el caballo compite, o competición nacional cuando viaja al extranjero.</li>
      <li><strong>Olvidar la responsabilidad civil</strong> porque el caballo está en una cuadra ajena: el propietario sigue respondiendo en muchos casos.</li>
      <li><strong>No comunicar a tiempo</strong> una enfermedad o una cirugía: las pólizas de mortalidad exigen avisos rápidos y, a menudo, autorización antes del sacrificio salvo urgencia.</li>
    </ul>`
  )}
${section(
    'tint',
    'que-necesitamos',
    `    <h2 id="que-necesitamos">Lo que necesitamos para obtener condiciones</h2>
    <ul>
      <li>Por cada caballo: nombre, raza, sexo, edad, uso y valor propuesto, con la factura de compra o una justificación del valor.</li>
      <li>El reconocimiento veterinario previo — o la disposición a hacerlo — y el historial clínico relevante.</li>
      <li>Dónde están alojados y quién los cuida y los monta.</li>
      <li>El calendario de competición o de cría, y los viajes previstos.</li>
      <li>Las instalaciones: cuadras, pistas, heniles, sistemas de protección contra incendios.</li>
      <li>Si hay actividad con terceros: pupilaje, clases, cesiones, eventos.</li>
    </ul>`
  )}
${howWeWork('plain', 'mercados especializados en caballos y riesgos ecuestres')}
${disclaimer('tint')}`,
  faqTitle: 'Seguro de caballos — preguntas',
  faq: [
    {
      q: '¿Cómo se fija el valor de un caballo en la póliza?',
      a: '<p>Se pacta al inicio un valor convenido, justificado con la factura de compra, los resultados deportivos o el valor genético, y normalmente con un reconocimiento veterinario previo. En caso de muerte o robo cubiertos, ese es el valor de referencia. Conviene revisarlo cada año.</p>',
    },
    {
      q: '¿Por qué necesito responsabilidad civil si mi caballo es tranquilo?',
      a: '<p>Porque en España y en Portugal la responsabilidad del poseedor de un animal es objetiva o por riesgo: se responde de los daños que cause el caballo aunque no haya culpa del propietario. Un caballo que se escapa o que cocea a un visitante puede originar reclamaciones muy elevadas.</p>',
    },
    {
      q: '¿Cubre el seguro la cirugía de cólico?',
      a: '<p>Si la póliza incluye gastos veterinarios y quirúrgicos, normalmente sí, dentro de los límites pactados. Es una de las coberturas más utilizadas. Conviene saber de antemano el límite por siniestro y si hay que avisar a la aseguradora antes de operar.</p>',
    },
    {
      q: 'Mi caballo compite en el extranjero. ¿Está cubierto?',
      a: '<p>Las pólizas de este mercado suelen cubrir Europa o todo el mundo, incluido el transporte, pero hay que declararlo. Los traslados aéreos y la competición internacional pueden requerir condiciones específicas.</p>',
    },
    {
      q: 'Tengo cuadras en mi finca. ¿Las cubre el seguro de la casa?',
      a: '<p>A veces como construcción auxiliar y con sumas limitadas. Si hay caballos de valor, heniles y, sobre todo, actividad con terceros como pupilaje o clases, conviene una cobertura específica para las instalaciones y para la responsabilidad de explotación.</p>',
    },
  ],
  related: [
    { url: '/es/', label: 'Seguros para grandes patrimonios en España y Portugal' },
    { url: '/es/seguro-hogar-alto-valor/', label: 'Seguro de hogar de alto valor' },
    { url: '/es/seguro-finca-vinedo/', label: 'Seguro de fincas, bodegas y viñedos' },
    { url: '/es/seguro-alquiler-villa-lujo/', label: 'Seguro para el alquiler de una villa de lujo' },
  ],
};
