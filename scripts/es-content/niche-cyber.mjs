/**
 * /es/seguro-ciber-fraude-familiar/  (cluster: niche-cyber)
 *
 * Search intent: "seguro ciberriesgo familiar", "seguro fraude transferencia",
 * "seguro suplantación de identidad", "seguro ciberacoso" — families with
 * significant assets, many devices, a smart home and large transfers.
 *
 * Spanish-specific angle: the scenario that makes the page concrete is the
 * diverted deposit or completion payment during a property purchase in Spain
 * or Portugal (arras / sinal, escritura) — common and devastating. Practical
 * advice is limited to safe, general verification habits. Cover described as
 * either an extension to a high-value home policy or standalone; limits and
 * funds-transfer sub-limits vary.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';
import { section, cardsSection, compareTable, howWeWork, disclaimer } from './niche-shared.mjs';

export const NICHE_CYBER_PAGE = {
  slug: 'seguro-ciber-fraude-familiar',
  url: '/es/seguro-ciber-fraude-familiar/',
  cluster: 'niche-cyber',
  title: 'Seguro de ciberriesgo y fraude familiar | Adler & Rochefort',
  description:
    'Ciberriesgo para familias en España y Portugal: fraude en transferencias, ciberextorsión, suplantación de identidad, ciberacoso y respuesta 24/7.',
  keywords:
    'seguro ciberriesgo familiar, seguro fraude transferencia, seguro suplantación de identidad, seguro ciberacoso, seguro ciberextorsión particulares, fraude compra vivienda transferencia, seguro cyber familia, seguro ransomware hogar, seguro hogar inteligente',
  eyebrow: 'Coberturas especializadas · Ciberriesgo y fraude',
  h1: 'Ciberriesgo, fraude e identidad: un seguro para la familia',
  standfirst:
    'El mayor riesgo económico para muchas familias ya no es un robo en casa, sino un correo que cambia un número de cuenta. Cubrimos el fraude en transferencias, la ciberextorsión, la suplantación de identidad y el ciberacoso, con respuesta especializada 24 horas, en España y en Portugal.',
  published: '2026-09-26T09:00:00+00:00',
  modified: '2026-09-26T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Ciberriesgo y fraude' }],
  pullquote:
    'Antes de transferir, llame. A un número que ya tenía, no al que viene en el correo.',
  schemaType: 'Article',
  formHeading: 'Solicite un análisis por escrito de su exposición digital',
  formBranch: 'Español · Ciberriesgo y fraude',
  formSubject: 'Ciberriesgo y fraude familiar',
  formCta: 'Solicitar el análisis',
  formIntro:
    'Cuéntenos cómo es la familia — quién vive en casa, qué dispositivos y sistemas utilizan, si hay operaciones importantes previstas — o envíenos la póliza de hogar actual. Le respondemos por escrito.',
  formPlaceholder:
    'Por ejemplo: familia de cinco entre Madrid y Lisboa, casa domotizada, hijos adolescentes muy activos en redes; vamos a comprar una vivienda en Cascais este año.',
  sections: `${section(
    'plain',
    'para-quien',
    `    <h2 id="para-quien">Para quién es</h2>
    <p>Para familias con un patrimonio relevante y una vida digital intensa: varias viviendas conectadas, sistemas de domótica y seguridad gestionados a distancia, hijos con presencia en redes sociales, personal que accede a la red de la casa y, sobre todo, <strong>transferencias importantes</strong> — la compra de una vivienda, una obra, una operación de empresa, los gastos de un colegio en el extranjero.</p>
    <p>Los delincuentes lo saben. Una familia que vende o compra una casa en Marbella, en Mallorca, en Lisboa o en la Comporta es un objetivo previsible: las cantidades son altas, intervienen muchas partes — agencias, abogados, notarios, bancos — y las comunicaciones circulan por correo electrónico.</p>`
  )}
${section(
    'tint',
    'escenario',
    `    <h2 id="escenario">El caso más frecuente: el pago desviado en una compraventa</h2>
    <p>La secuencia se repite en España y en Portugal. Se acerca el pago de las arras — en Portugal, el <em>sinal</em> del contrato de promesa (CPCV) — o el pago final en la escritura. Llega un correo aparentemente del abogado, de la agencia o del vendedor: los datos bancarios han cambiado, por favor utilice esta cuenta. El correo es idéntico a los anteriores, a veces enviado desde la cuenta real, que ha sido comprometida. La transferencia sale, y el dinero desaparece en horas por varias cuentas y países.</p>
    <p>Lo que diferencia a los dos países en este escenario es, sobre todo, el procedimiento de la compraventa:</p>
${compareTable('Momentos de riesgo de fraude en una compraventa inmobiliaria en España y en Portugal', [
  ['Primer pago', 'Arras en el contrato privado', '<em>Sinal</em> en el contrato-promesa (CPCV)'],
  ['Pago final', 'En la escritura ante notario, a menudo con cheque bancario o transferencia', 'En la <em>escritura</em> o en el procedimiento <em>Casa Pronta</em>, habitualmente por transferencia o cheque bancario'],
  ['Quién suele intervenir', 'Agencia, abogado, notario, banco, gestoría', 'Agencia, abogado o <em>solicitador</em>, notario o conservatória, banco'],
])}
    <div class="callout">
      <span class="callout-label">Un hábito que evita la mayoría de estos fraudes</span>
      Antes de cualquier transferencia importante, confirme los datos bancarios por teléfono con la persona que conoce, llamando a un número que ya tenía — nunca al que figura en el correo que pide el cambio. Desconfíe de cualquier cambio de cuenta de última hora, por urgente que parezca. Y si algo no cuadra, avise de inmediato a su banco: las primeras horas son decisivas para intentar detener la transferencia.
    </div>`
  )}
${cardsSection(
    'plain',
    'coberturas',
    'Lo que incluye una buena cobertura',
    'Puede contratarse como extensión de una póliza de hogar de alto valor o como póliza independiente. Estas son las coberturas que buscamos:',
    [
      ['Fraude en transferencias e ingeniería social', 'La pérdida de fondos transferidos por engaño — suplantación de un proveedor, del abogado o de un familiar —, con un sublímite propio que hay que conocer y, si hace falta, ampliar.'],
      ['Ciberextorsión y ransomware', 'La respuesta a un secuestro de datos o a una amenaza en los dispositivos personales o la red doméstica, con expertos que evalúan la situación y, según las condiciones, los pagos relacionados.'],
      ['Suplantación de identidad', 'Los costes de restaurar la identidad — trámites, asesoramiento, gastos jurídicos — cuando alguien utiliza sus datos para abrir cuentas, pedir créditos o cometer fraudes.'],
      ['Ciberacoso y reputación', 'Apoyo ante el acoso en línea, especialmente a menores, y ante ataques a la reputación: asesoramiento especializado, retirada de contenidos y, según la póliza, apoyo psicológico y de comunicación.'],
      ['Restauración de datos y dispositivos', 'La recuperación de datos y la reparación o reinstalación de ordenadores, teléfonos y sistemas tras un ataque cubierto.'],
      ['Hogar inteligente', 'Los sistemas de domótica, seguridad y climatización conectados, cuando un ataque los inutiliza o los manipula.'],
      ['Respuesta 24/7', 'Una línea especializada disponible a cualquier hora que coordina a los técnicos y asesores desde el primer momento.'],
    ]
  )}
${section(
    'tint',
    'lagunas',
    `    <h2 id="lagunas">Lo que suele fallar</h2>
    <ul>
      <li><strong>Suponer que el banco devolverá el dinero.</strong> Si es usted quien autorizó la transferencia, aunque fuera engañado, la recuperación por el banco no está garantizada.</li>
      <li><strong>Un sublímite de fraude demasiado bajo.</strong> Muchas extensiones de hogar incluyen el fraude con límites pensados para compras en línea, no para una compraventa inmobiliaria.</li>
      <li><strong>Confundir la protección de datos del banco con un seguro.</strong> Las herramientas del banco ayudan a prevenir; no indemnizan.</li>
      <li><strong>Olvidar a los hijos y al personal.</strong> Los menores son los más expuestos al ciberacoso, y el personal con acceso a la red de la casa es un punto de entrada frecuente.</li>
      <li><strong>No comunicar de inmediato.</strong> Las pólizas exigen avisar enseguida, y cada hora cuenta para intentar recuperar los fondos.</li>
    </ul>`
  )}
${section(
    'plain',
    'que-necesitamos',
    `    <h2 id="que-necesitamos">Lo que necesitamos para obtener condiciones</h2>
    <ul>
      <li>Las personas que deberían quedar cubiertas y dónde viven.</li>
      <li>Las viviendas y sus sistemas conectados: domótica, alarmas, cámaras.</li>
      <li>Medidas básicas de seguridad: copias de seguridad, doble factor de autenticación, gestión de contraseñas.</li>
      <li>Operaciones importantes previstas, como una compraventa o una obra.</li>
      <li>La póliza de hogar actual, para ver si ya incluye alguna cobertura y con qué límites.</li>
      <li>Incidentes anteriores.</li>
    </ul>`
  )}
${howWeWork('tint', 'mercados especializados en ciberriesgos para particulares')}
${disclaimer('plain', 'Los consejos de esta página son generales y no sustituyen el asesoramiento de un especialista en seguridad informática.')}`,
  faqTitle: 'Ciberriesgo y fraude familiar — preguntas',
  faq: [
    {
      q: '¿Cubre el seguro una transferencia desviada durante la compra de una casa?',
      a: '<p>Las coberturas de fraude en transferencias e ingeniería social están pensadas precisamente para esto, pero con un sublímite que varía mucho de una póliza a otra. Si prevé una compraventa, conviene revisar ese límite antes de los pagos, no después.</p>',
    },
    {
      q: '¿Es una póliza aparte o una extensión del seguro de hogar?',
      a: '<p>Puede ser cualquiera de las dos. Muchas pólizas de hogar de alto valor ofrecen una extensión de ciberriesgo; también existen pólizas independientes con límites más altos. La elección depende de los límites que necesite y de lo que ya tenga contratado.</p>',
    },
    {
      q: '¿Qué hago si recibo un correo que cambia los datos bancarios?',
      a: '<p>No transfiera. Llame a la persona que supuestamente lo envía, a un número que ya tenía y no al del correo, y confirme los datos de viva voz. Si ya ha transferido, avise de inmediato a su banco y a su aseguradora: las primeras horas son decisivas.</p>',
    },
    {
      q: '¿Cubre el ciberacoso a nuestros hijos?',
      a: '<p>Muchas pólizas familiares de ciberriesgo incluyen apoyo ante el ciberacoso: asesoramiento especializado, retirada de contenidos y, según las condiciones, apoyo psicológico. Revisamos con usted qué incluye cada propuesta.</p>',
    },
    {
      q: '¿Está cubierta la domótica de la casa?',
      a: '<p>Algunas pólizas cubren los sistemas de hogar inteligente — alarmas, cámaras, climatización, accesos — cuando un ataque los inutiliza o los manipula, incluida su restauración. No todas lo hacen, y conviene comprobarlo si la casa depende de esos sistemas.</p>',
    },
  ],
  related: [
    { url: '/es/', label: 'Seguros para grandes patrimonios en España y Portugal' },
    { url: '/es/seguro-hogar-alto-valor/', label: 'Seguro de hogar de alto valor' },
    { url: '/es/seguro-secuestro-extorsion/', label: 'Seguro de secuestro, rescate y extorsión' },
    { url: '/es/seguro-alquiler-villa-lujo/', label: 'Seguro para el alquiler de una villa de lujo' },
  ],
};
