/**
 * /es/seguro-alquiler-villa-lujo/  (cluster: niche-villalet)
 *
 * Search intent: "seguro alquiler vacacional villa", "seguro vivienda de uso
 * turístico", "seguro alojamiento local Portugal" — owners letting a
 * high-value villa for short stays in the Algarve, Comporta, Cascais, Madeira,
 * Ibiza, Mallorca, Marbella or the Costa Brava.
 *
 * Spanish-specific angle: the Spanish owner is used to regional licensing
 * (Balearics, Andalusia VFT, Catalonia HUT) and has heard of the new national
 * register for short-term rentals; Portugal has one national Alojamento Local
 * regime with its own compulsory insurance. Both explained generally, pointing
 * to the applicable regime rather than paraphrasing it in detail.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';
import { section, cardsSection, compareTable, howWeWork, disclaimer } from './niche-shared.mjs';

export const NICHE_VILLALET_PAGE = {
  slug: 'seguro-alquiler-villa-lujo',
  url: '/es/seguro-alquiler-villa-lujo/',
  cluster: 'niche-villalet',
  title: 'Seguro para alquilar una villa de lujo | Adler & Rochefort',
  description:
    'Alquiler vacacional de villas de alto valor en España y Portugal: daños por huéspedes, pérdida de rentas, responsabilidad civil y requisitos de licencia.',
  keywords:
    'seguro alquiler vacacional villa, seguro vivienda uso turístico, seguro alojamiento local Portugal, seguro alquiler turístico Ibiza, seguro villa Marbella alquiler, seguro daños huéspedes, pérdida de rentas seguro, seguro VFT Andalucía, seguro HUT Cataluña',
  eyebrow: 'Coberturas especializadas · Alquiler de villas',
  h1: 'Seguro para el alquiler vacacional de una villa de lujo',
  standfirst:
    'Una póliza de hogar está escrita para una familia que vive en su casa, no para huéspedes que cambian cada semana. Si alquila una villa de alto valor en España o en Portugal, la cobertura tiene que saberlo — y cumplir lo que exige la licencia turística de cada país.',
  published: '2026-09-26T09:00:00+00:00',
  modified: '2026-09-26T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Alquiler de villas' }],
  pullquote:
    'El alquiler que no se declara a la aseguradora es el siniestro que no se cobra.',
  schemaType: 'Article',
  formHeading: 'Solicite un análisis por escrito de su villa',
  formBranch: 'Español · Alquiler de villa',
  formSubject: 'Alquiler vacacional de villa',
  formCta: 'Solicitar el análisis',
  formIntro:
    'Cuéntenos dónde está la villa, cuántas semanas al año la alquila, si hay gestora y qué servicios ofrece, o envíenos la póliza actual. Le respondemos por escrito.',
  formPlaceholder:
    'Por ejemplo: villa de seis dormitorios en Ibiza, con licencia, alquilada 14 semanas al año a través de una gestora; chef y limpieza incluidos; algo de arte contemporáneo.',
  sections: `${section(
    'plain',
    'para-quien',
    `    <h2 id="para-quien">Para quién es</h2>
    <p>Para propietarios de villas y casas de alto valor que las alquilan por temporadas o semanas: en el Algarve, la Comporta, Cascais o Madeira; en Ibiza, Mallorca, Marbella o la Costa Brava. Algunos alquilan unas pocas semanas en verano, cuando no usan la casa; otros la confían todo el año a una gestora de alquiler de lujo, con conserjería, chef, limpieza y servicios a la carta.</p>
    <p>Las dos situaciones son muy distintas para una aseguradora. Un alquiler ocasional puede encajar, con la declaración adecuada, en una póliza de alto valor que lo admita; un programa de alquiler gestionado es una actividad comercial y necesita una cobertura diseñada para ella.</p>`
  )}
${section(
    'tint',
    'el-hueco',
    `    <h2 id="el-hueco">El hueco: la póliza de hogar y el alquiler</h2>
    <p>Las pólizas de hogar, también muchas de alto valor, excluyen o restringen el uso comercial de la vivienda. Los puntos habituales de fricción:</p>
    <ul>
      <li><strong>El robo por huéspedes.</strong> La mayoría de pólizas cubren el robo con violencia o intrusión; el hurto cometido por quien estaba autorizado a estar en la casa suele quedar fuera.</li>
      <li><strong>Los daños causados por huéspedes</strong>, accidentales o intencionados, que la póliza de hogar puede no contemplar.</li>
      <li><strong>La responsabilidad frente a los huéspedes.</strong> La responsabilidad civil familiar cubre la vida privada; frente a quien paga por alojarse, el propietario actúa como explotador.</li>
      <li><strong>Las joyas, el arte y los objetos de valor</strong>, cuya cobertura puede quedar suspendida durante los periodos de alquiler si no se han retirado o protegido.</li>
    </ul>
    <p>La solución no es ocultar el alquiler, sino declararlo y colocar la póliza en un mercado que lo acepte con las condiciones adecuadas.</p>`
  )}
${section(
    'plain',
    'licencias',
    `    <h2 id="licencias">España y Portugal: licencias y seguros obligatorios</h2>
    <p>Los dos países regulan el alquiler turístico de forma muy diferente, y el seguro forma parte de los requisitos:</p>
${compareTable('Regulación del alquiler turístico y seguro en España y en Portugal', [
  ['Régimen', 'Autonómico: cada comunidad tiene su propia norma y su registro (p. ej., Baleares, viviendas con fines turísticos en Andalucía, HUT en Cataluña)', 'Nacional: el régimen de <em>Alojamento Local</em>, con registro municipal'],
  ['Seguro exigido', 'Varias comunidades exigen un seguro de responsabilidad civil para la vivienda turística; los requisitos varían', 'El registro de Alojamento Local exige un seguro que cubra la responsabilidad del titular por daños a huéspedes y terceros'],
  ['Registro estatal', 'Registro único estatal para los arrendamientos de corta duración, además de la licencia autonómica', 'Registro nacional de Alojamento Local'],
  ['Comunidad o condominio', 'Los estatutos y los acuerdos de la comunidad pueden limitar el uso turístico', 'El condominio puede oponerse en determinados casos previstos en el régimen'],
])}
    <p>Las normas cambian con frecuencia y dependen de la comunidad autónoma o del municipio. No gestionamos licencias ni valoramos si una vivienda puede alquilarse: eso corresponde a su abogado o a su gestora. Lo que sí hacemos es comprobar que la póliza cumple el seguro exigido por la licencia y entregarle la documentación que le pidan.</p>`
  )}
${cardsSection(
    'tint',
    'coberturas',
    'Lo que incluye una póliza bien colocada',
    'Para una villa de alto valor en alquiler, estas son las coberturas que revisamos:',
    [
      ['Edificio y contenido durante los alquileres', 'Con las condiciones de una vivienda de alto valor, sin suspensión por el hecho de alquilar, incluidos el mobiliario y el equipamiento pensados para huéspedes.'],
      ['Arte y objetos de valor', 'Qué queda cubierto durante los alquileres y qué debe retirarse o guardarse bajo llave, acordado por escrito.'],
      ['Daños causados por huéspedes', 'Daños accidentales y, según el mercado, maliciosos, más allá de lo que cubre la fianza o la garantía de la plataforma.'],
      ['Pérdida de rentas', 'Las reservas perdidas cuando un siniestro cubierto — un incendio, una inundación — hace la villa inhabitable.'],
      ['Responsabilidad civil de explotación', 'Frente a huéspedes y terceros: piscina, escaleras y terrazas, embarcaciones, bicicletas eléctricas, excursiones organizadas y eventos en la villa.'],
      ['Personal', 'Conserjería, chef, limpieza y jardinería: quién es el empleador, los accidentes de trabajo — obligatorios en los dos países — y la responsabilidad por sus actos.'],
    ]
  )}
${section(
    'plain',
    'lagunas',
    `    <h2 id="lagunas">Lo que suele fallar</h2>
    <ul>
      <li><strong>Declarar la villa como residencia habitual</strong> cuando se alquila varias semanas al año.</li>
      <li><strong>Confiar en la garantía de la plataforma de reservas.</strong> Tiene su propio alcance, sus propias condiciones y no sustituye a una póliza.</li>
      <li><strong>Suponer que la gestora lo cubre todo.</strong> La póliza de la gestora protege a la gestora; el edificio, el contenido y la responsabilidad del propietario siguen siendo suyos.</li>
      <li><strong>Olvidar las embarcaciones y los juguetes acuáticos</strong> que se ponen a disposición de los huéspedes.</li>
      <li><strong>Pensar que la cancelación está cubierta.</strong> Si es usted quien cancela una reserva por motivos propios, la pérdida no está cubierta; la pérdida de rentas responde solo tras un siniestro cubierto.</li>
    </ul>`
  )}
${section(
    'tint',
    'que-necesitamos',
    `    <h2 id="que-necesitamos">Lo que necesitamos para obtener condiciones</h2>
    <ul>
      <li>La ubicación, el tamaño y las características de la villa: piscina, embarcadero, gimnasio, casa de invitados.</li>
      <li>El número de licencia o registro turístico, si existe.</li>
      <li>Semanas de alquiler al año, precio medio por semana y periodos de uso propio.</li>
      <li>Si hay gestora, su contrato y sus pólizas.</li>
      <li>El personal y quién lo contrata.</li>
      <li>El valor del contenido, del arte y de los objetos de valor, y qué permanece en la villa durante los alquileres.</li>
      <li>La póliza actual y el historial de siniestros.</li>
    </ul>`
  )}
${howWeWork('plain', 'mercados especializados en viviendas de alto valor en alquiler')}
${disclaimer('tint', 'No valoramos requisitos de licencia turística; el cumplimiento de la normativa corresponde al titular de la explotación y a sus asesores.')}`,
  faqTitle: 'Seguro para alquilar una villa — preguntas',
  faq: [
    {
      q: '¿Mi seguro de hogar me cubre si alquilo la villa unas semanas en verano?',
      a: '<p>Normalmente no sin más. La mayoría de pólizas de hogar excluyen o restringen el uso comercial y el robo por personas autorizadas a estar en la casa. Hay que declarar el alquiler; algunas pólizas de alto valor admiten el alquiler ocasional con condiciones, y un alquiler regular necesita una cobertura específica.</p>',
    },
    {
      q: '¿Qué seguro exige el Alojamento Local en Portugal?',
      a: '<p>El régimen de Alojamento Local exige al titular un seguro que cubra su responsabilidad por daños a los huéspedes y a terceros derivados de la actividad. Comprobamos que la póliza cumple ese requisito y le entregamos la documentación necesaria para el registro.</p>',
    },
    {
      q: '¿Y en España?',
      a: '<p>Depende de la comunidad autónoma. Baleares, Andalucía y Cataluña, entre otras, tienen su propio régimen de vivienda turística, y varias exigen un seguro de responsabilidad civil. A ello se suma el registro único estatal para los arrendamientos de corta duración. Los requisitos de licencia los confirma su abogado o su gestora.</p>',
    },
    {
      q: '¿Está cubierta la pérdida de rentas si la villa queda inhabitable?',
      a: '<p>Si la póliza incluye la pérdida de rentas y la causa es un siniestro cubierto, como un incendio o un daño por agua, sí, en los términos y límites pactados. No cubre la cancelación de reservas por decisión del propietario ni la falta de demanda.</p>',
    },
    {
      q: 'Tengo una gestora que se ocupa de todo. ¿Necesito mi propio seguro?',
      a: '<p>Sí. La póliza de la gestora protege su actividad, no su edificio, su contenido ni su responsabilidad como propietario. Revisamos el contrato de gestión y las pólizas de la gestora para que las dos coberturas encajen sin huecos ni duplicidades.</p>',
    },
  ],
  related: [
    { url: '/es/', label: 'Seguros para grandes patrimonios en España y Portugal' },
    { url: '/es/seguro-hogar-alto-valor/', label: 'Seguro de hogar de alto valor' },
    { url: '/es/seguro-obra-vivienda-lujo/', label: 'Seguro para construir o reformar una vivienda de alto valor' },
    { url: '/es/seguro-ciber-fraude-familiar/', label: 'Ciberriesgo, fraude e identidad de la familia' },
  ],
};
