/**
 * /es/seguro-obra-vivienda-lujo/  (cluster: niche-build)
 *
 * Search intent: "seguro todo riesgo construcción vivienda", "seguro decenal
 * autopromotor", "seguro reforma integral villa" — an owner building or
 * renovating a high-value home in Comporta, the Algarve, Cascais/Sintra,
 * Marbella, Ibiza, Mallorca or Madrid.
 *
 * Spanish-specific angle: the Spanish reader has heard of the seguro decenal
 * and the LOE; the page states the LOE periods (10/3/1 years), the compulsory
 * decennial insurance for promoters of new housing and the self-promoter
 * exception carefully and generally, and contrasts it with Portugal (Código
 * Civil art. 1225, five years; no general compulsory decennial insurance for
 * private homes). Not legal advice.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';
import { section, cardsSection, compareTable, howWeWork, disclaimer } from './niche-shared.mjs';

export const NICHE_BUILD_PAGE = {
  slug: 'seguro-obra-vivienda-lujo',
  url: '/es/seguro-obra-vivienda-lujo/',
  cluster: 'niche-build',
  title: 'Seguro de obra para viviendas de lujo | Adler & Rochefort',
  description:
    'Obra o reforma de una vivienda de alto valor en España o Portugal: todo riesgo construcción, responsabilidad del promotor, seguro decenal y entrega.',
  keywords:
    'seguro todo riesgo construcción, seguro obra vivienda, seguro decenal autopromotor, seguro reforma integral, seguro construcción villa, responsabilidad civil promotor, seguro obra Portugal, LOE seguro decenal, seguro reforma casa lujo',
  eyebrow: 'Coberturas especializadas · Obra y reforma',
  h1: 'Seguro para construir o reformar una vivienda de alto valor',
  standfirst:
    'Durante una obra, la casa deja de ser una casa a efectos del seguro: la póliza de hogar se restringe, el contratista asegura lo suyo y el propietario responde frente a los vecinos. Así se cubre cada fase, de la primera excavación a la entrega de llaves — en España y en Portugal.',
  published: '2026-09-26T09:00:00+00:00',
  modified: '2026-09-26T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Obra y reforma' }],
  pullquote:
    'La obra termina con la entrega de llaves. El seguro de la casa tiene que empezar ese mismo día, no una semana después.',
  schemaType: 'Article',
  formHeading: 'Solicite un análisis por escrito de su obra',
  formBranch: 'Español · Obra de vivienda',
  formSubject: 'Construcción o reforma de vivienda',
  formCta: 'Solicitar el análisis',
  formIntro:
    'Cuéntenos qué va a construir o reformar, dónde, con qué presupuesto de obra aproximado y en qué plazo, o envíenos el contrato de obra y las pólizas del contratista. Le respondemos por escrito.',
  formPlaceholder:
    'Por ejemplo: reforma integral de una casa de los años 70 en Marbella, 14 meses de obra, contratista local; seguimos viviendo en el anexo durante la obra.',
  sections: `${section(
    'plain',
    'para-quien',
    `    <h2 id="para-quien">Para quién es</h2>
    <p>Para propietarios que construyen una vivienda nueva o acometen una reforma de envergadura: una villa en la Comporta, en el Algarve o en Cascais y Sintra; una casa en Marbella, Ibiza o Mallorca; una vivienda en Madrid rehabilitada de arriba abajo. También para quien compra una casa para reformarla antes de mudarse, y para quien vive en la propiedad mientras las obras avanzan.</p>
    <p>En todos los casos hay varias partes con intereses distintos — propietario, contratista, arquitecto, ingenieros, a veces un <em>project manager</em> y el banco — y cada una asegura lo suyo. La pregunta que casi nadie se hace es quién asegura <strong>el conjunto</strong>, y en interés de quién.</p>`
  )}
${cardsSection(
    'tint',
    'coberturas',
    'Lo que incluye una cobertura bien estructurada',
    'Una obra bien asegurada combina varias pólizas coordinadas, con fechas de inicio y fin que encajan entre sí:',
    [
      ['Todo riesgo construcción', 'Los daños materiales a la obra en curso — incendio, agua, tormenta, robo, errores de ejecución, derrumbe — hasta la recepción. Puede contratarla el contratista o el propietario; más abajo explicamos por qué importa quién.'],
      ['Responsabilidad civil del propietario', 'Como <em>promotor</em> en España o <em>dono da obra</em> en Portugal, usted puede responder de los daños a vecinos y terceros — grietas en la casa de al lado, un transeúnte herido — aunque la obra la ejecute otro.'],
      ['La construcción existente', 'En una reforma, el edificio que ya existe y su contenido. Muchas pólizas de hogar suspenden o limitan la cobertura durante obras importantes; hay que acordarlo expresamente.'],
      ['Robo de materiales y equipos', 'Los materiales acopiados en la obra — a menudo de alto valor: piedra, carpinterías, sanitarios, domótica — y su custodia.'],
      ['Retraso en la entrada', 'Según el mercado: la pérdida financiera o los gastos de alojamiento alternativo si un siniestro cubierto retrasa la entrega.'],
      ['Transición al seguro de hogar', 'La póliza definitiva de la vivienda, con sus sumas ya fijadas, lista para empezar el día de la recepción, sin un solo día al descubierto.'],
    ]
  )}
${section(
    'plain',
    'quien-contrata',
    `    <h2 id="quien-contrata">¿Quién debe contratar el todo riesgo construcción?</h2>
    <p>En muchos contratos lo contrata el contratista, y parece cómodo. El problema es que esa póliza protege sobre todo sus intereses: sus límites, sus franquicias y sus exclusiones los elige él, a menudo es una póliza anual para todas sus obras y el propietario no siempre figura como asegurado.</p>
    <p>Una póliza <strong>contratada o controlada por el propietario</strong>, con el contratista y los subcontratistas como asegurados adicionales, tiene ventajas claras en una obra de alto valor: las sumas reflejan el valor real de la obra y de los acabados, la cobertura no depende de que el contratista pague su prima y, en caso de siniestro, el propietario negocia directamente con la aseguradora. En una reforma, además, permite coordinar la obra nueva con la cobertura de la construcción existente.</p>
    <p>Sea cual sea la fórmula, pida siempre copia de las pólizas del contratista — todo riesgo y responsabilidad civil — y compruebe límites, vigencia y asegurados antes del primer pago.</p>`
  )}
${section(
    'tint',
    'marco-legal',
    `    <h2 id="marco-legal">España y Portugal: la responsabilidad por defectos no es la misma</h2>
    <p>Terminada la obra, empieza otra etapa: la responsabilidad por los defectos que aparezcan después. Aquí los dos países divergen de forma notable.</p>
${compareTable('Responsabilidad por defectos de construcción en España y en Portugal', [
  ['Norma principal', 'Ley de Ordenación de la Edificación (LOE, Ley 38/1999)', 'Código Civil, art. 1225, y régimen general de la empreitada'],
  ['Plazos', '10 años para daños estructurales; 3 años para defectos de habitabilidad; 1 año para defectos de acabado', '5 años para defectos en obras de inmuebles destinados a larga duración'],
  ['Seguro obligatorio', 'Seguro decenal obligatorio para el promotor de viviendas nuevas', 'No existe un seguro decenal obligatorio general para viviendas privadas'],
  ['Autopromotor', 'Excepción para el autopromotor de una única vivienda unifamiliar para uso propio; si la vende en los diez años, la cuestión reaparece', 'Sin régimen específico equivalente'],
])}
    <p>En España, quien construye su propia casa para vivir en ella puede estar exento del seguro decenal, pero esa exención no es un cheque en blanco: si vende la vivienda dentro de los diez años, la ley vuelve a exigir el seguro salvo en los supuestos que prevé, y un comprador bien asesorado lo pedirá. Contratar el decenal desde el principio suele ser más sencillo que intentarlo después.</p>
    <p>En Portugal no hay un decenal obligatorio para la vivienda privada, pero el constructor responde durante cinco años de los defectos de la obra. La solvencia del constructor pasa a ser, en la práctica, la garantía — y por eso conviene conocer sus seguros y, según el caso, valorar coberturas adicionales.</p>
    <p>Los edificios catalogados o protegidos — un Bien de Interés Cultural en España, un <em>imóvel classificado</em> en Portugal — añaden exigencias de materiales y técnicas que encarecen la reconstrucción y deben reflejarse en las sumas. Y la responsabilidad profesional del arquitecto y de los ingenieros es una póliza suya, distinta de todas las anteriores.</p>
    <p style="font-size:14px;color:var(--muted);">Resumen general, no asesoramiento jurídico: la aplicación concreta de estas normas debe confirmarla su abogado o el técnico director de la obra.</p>`
  )}
${section(
    'plain',
    'lagunas',
    `    <h2 id="lagunas">Lo que suele fallar</h2>
    <ul>
      <li><strong>No avisar a la aseguradora del hogar de la reforma.</strong> Una obra importante agrava el riesgo; si no se declara, la póliza puede no responder precisamente cuando más falta hace.</li>
      <li><strong>Confiar en la póliza del contratista sin haberla visto.</strong> Límites bajos, franquicias altas, pólizas vencidas o que no nombran al propietario.</li>
      <li><strong>Olvidar a los vecinos.</strong> Los daños a colindantes por excavaciones, vibraciones o recalces son de las reclamaciones más frecuentes y costosas.</li>
      <li><strong>Materiales sin custodia.</strong> El robo de materiales acopiados o ya instalados, sin vigilancia ni cobertura.</li>
      <li><strong>El hueco de la entrega.</strong> El todo riesgo termina con la recepción y la póliza de hogar aún no ha empezado — o se contrata con las sumas de antes de la obra.</li>
    </ul>`
  )}
${section(
    'tint',
    'que-necesitamos',
    `    <h2 id="que-necesitamos">Lo que necesitamos para obtener condiciones</h2>
    <ul>
      <li>La descripción de la obra: nueva construcción o reforma, superficie, sistema constructivo y si hay demoliciones, excavaciones o sótanos.</li>
      <li>El presupuesto de ejecución y el calendario previsto.</li>
      <li>El contratista principal, su experiencia y sus pólizas.</li>
      <li>El proyecto y la dirección técnica: arquitecto, ingenieros, licencia de obra.</li>
      <li>La situación de los edificios colindantes y si la vivienda estará ocupada durante la obra.</li>
      <li>El valor de los acabados especiales y de los equipos que se instalen.</li>
    </ul>`
  )}
${howWeWork('plain', 'mercados especializados en riesgos de construcción y viviendas de alto valor')}
${disclaimer('tint', 'Las referencias legales de esta página son un resumen general y no constituyen asesoramiento jurídico.')}`,
  faqTitle: 'Seguro de obra y reforma — preguntas',
  faq: [
    {
      q: '¿Mi seguro de hogar me cubre durante la reforma?',
      a: '<p>No debe darlo por supuesto. Muchas pólizas de hogar suspenden o limitan coberturas durante obras importantes, sobre todo si la vivienda queda deshabitada o abierta. Hay que comunicar la obra a la aseguradora y acordar por escrito cómo queda la cobertura del edificio existente y del contenido.</p>',
    },
    {
      q: '¿Quién debería contratar el todo riesgo construcción, el contratista o yo?',
      a: '<p>En una obra de alto valor, suele convenir una póliza contratada o controlada por el propietario, con el contratista como asegurado adicional: las sumas reflejan el valor real, la cobertura no depende de terceros y usted negocia directamente el siniestro. Si la contrata el contratista, pida copia y compruebe que usted figura como asegurado.</p>',
    },
    {
      q: 'Construyo mi casa en España para vivir en ella. ¿Necesito seguro decenal?',
      a: '<p>La LOE prevé una excepción para el autopromotor de una única vivienda unifamiliar para uso propio. Pero si la vende dentro de los diez años, la exigencia puede reaparecer, y un comprador lo pedirá. Por eso muchos autopromotores lo contratan desde el principio. Confírmelo con su abogado o su técnico.</p>',
    },
    {
      q: '¿Existe el seguro decenal en Portugal?',
      a: '<p>No hay un seguro decenal obligatorio general para las viviendas privadas. El constructor responde de los defectos de la obra durante cinco años, según el Código Civil. En la práctica, la solvencia del constructor y sus seguros son la garantía, y conviene revisarlos antes de firmar el contrato de obra.</p>',
    },
    {
      q: '¿Qué pasa con los daños a los vecinos durante la obra?',
      a: '<p>Como propietario de la obra, usted puede responder frente a los vecinos aunque la ejecute otro. Por eso conviene una responsabilidad civil propia como promotor o dueño de la obra, además de exigir la del contratista con un límite suficiente.</p>',
    },
  ],
  related: [
    { url: '/es/', label: 'Seguros para grandes patrimonios en España y Portugal' },
    { url: '/es/seguro-hogar-alto-valor/', label: 'Seguro de hogar de alto valor' },
    { url: '/es/seguro-finca-vinedo/', label: 'Seguro de fincas, bodegas y viñedos' },
    { url: '/es/seguro-alquiler-villa-lujo/', label: 'Seguro para el alquiler de una villa de lujo' },
  ],
};
