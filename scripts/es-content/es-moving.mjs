/**
 * /es/mudarse-a-espana-seguros/
 *
 * Search intent: "mudarse a España desde México", "vivir en España desde
 * Colombia seguros", "emigrar a España checklist" — the sequencing page for a
 * Latin American family moving to Spain: what to arrange before leaving,
 * during the move and in the first months, and in what order.
 *
 * The angle: the move starts at a consulate, not at a removal company. The
 * visa fixes the health policy; the NIE unlocks almost everything else; the
 * six-month licence window starts with residence; the shipping container
 * spends weeks at sea with goods that neither the old nor the new home policy
 * covers. The two-year route to Spanish nationality for Ibero-American
 * nationals is mentioned once, because it makes continuous, documented
 * residence — and therefore uninterrupted cover — worth more.
 */
import { BREADCRUMB_SPAIN, withSibling, toPortugal } from './shared.mjs';

export const ES_MOVING_PAGE = {
  slug: 'mudarse-a-espana-seguros',
  url: '/es/mudarse-a-espana-seguros/',
  cluster: 'es-moving',
  title: 'Mudarse a España desde Latinoamérica: seguros | Adler & Rochefort',
  description:
    'Mudarse a España desde México, Colombia, Venezuela o Argentina: visado, NIE, salud, auto, hogar y la mudanza internacional, en el orden que funciona.',
  keywords:
    'mudarse a España desde México, emigrar a España desde Colombia, vivir en España venezolanos seguros, mudanza internacional España seguro, NIE seguros España, checklist mudarse a España, seguro mudanza contenedor, latinoamericanos en España seguros',
  eyebrow: 'España · Traslado',
  h1: 'Mudarse a España desde América Latina: los seguros, en el orden correcto',
  standfirst:
    'Un traslado a España empieza en un consulado, no en una empresa de mudanzas. El visado decide la póliza de salud, el NIE abre casi todas las demás puertas y el contenedor pasa semanas en el mar sin que ningún seguro de hogar lo cubra. Este es el orden que evita las lagunas.',
  published: '2026-10-02T09:00:00+00:00',
  modified: '2026-10-02T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_SPAIN, { name: 'Mudarse a España' }],
  pullquote: 'Casi todo lo que sale mal en un traslado sale mal por el orden, no por la elección de la aseguradora.',
  schemaType: 'Article',
  formHeading: 'Planifique los seguros de su traslado a España',
  formBranch: '',
  formSubject: 'Traslado a España — seguros',
  formCta: 'Planificar el traslado',
  formIntro:
    'Cuéntenos desde dónde se traslada, con qué visado, quién viene y en qué fecha — y, si quiere, qué pólizas tiene hoy. Le respondemos por escrito con lo que hay que resolver y en qué orden.',
  formPlaceholder:
    'Por ejemplo: nos mudamos de Caracas a Madrid vía Panamá en febrero, dos adultos y dos hijos, visado no lucrativo, traemos un contenedor con muebles y algunas obras de arte.',
  sections: withSibling(`
<section class="section plain" aria-labelledby="antes">
  <div class="container narrow article-body">
    <h2 id="antes">Antes de salir: de tres a seis meses</h2>
    <ol class="process-steps">
      <li><div><strong>El visado y su póliza de salud.</strong><span> La mayoría de los visados de residencia exigen un seguro de salud con requisitos concretos. Es lo primero, porque sin él no hay cita. Véase <a href="/es/seguro-medico-visado-espana/">seguro médico para el visado</a>.</span></div></li>
      <li><div><strong>El NIE.</strong><span> El número de identidad de extranjero se puede solicitar desde el consulado, y lo necesitará para el alquiler, la cuenta bancaria y casi cualquier póliza.</span></div></li>
      <li><div><strong>Cartas de sus aseguradoras actuales.</strong><span> Historial del auto (años sin siniestros), historial del seguro de hogar, y confirmación de qué cubre su póliza de salud de origen cuando usted deje de residir allí.</span></div></li>
      <li><div><strong>Tasaciones de arte, joyas y relojes.</strong><span> Recientes y documentadas: son la base del valor convenido en la póliza española y del seguro de la mudanza.</span></div></li>
      <li><div><strong>Documentos apostillados</strong><span> que vaya a necesitar en España: actas de matrimonio y nacimiento, títulos, antecedentes. No son seguros, pero sin ellos se detienen los trámites de los que dependen los seguros.</span></div></li>
    </ol>
  </div>
</section>

<section class="section tint" aria-labelledby="durante">
  <div class="container narrow article-body">
    <h2 id="durante">Durante el traslado: el contenedor en el mar</h2>
    <p>Una mudanza desde América viaja normalmente en contenedor y tarda semanas. Durante ese tiempo, sus bienes no están cubiertos por el seguro de hogar de origen — ya no están en la casa — ni por el español — todavía no han llegado. Dependen de dos cosas:</p>
    <ul>
      <li><strong>La responsabilidad de la empresa de mudanzas</strong>, casi siempre limitada por peso o por bulto, muy por debajo del valor real.</li>
      <li><strong>Un seguro de transporte</strong> específico, a todo riesgo y por valor declarado, que conviene contratar con inventario detallado y fotografías.</li>
    </ul>
    <p>Para obras de arte y objetos de valor, el embalaje profesional, el inventario con tasación y la cobertura «de clavo a clavo» — desde la pared de origen hasta la de destino — no son un lujo. Pida a la empresa de mudanzas el límite de su responsabilidad por escrito y compárelo con lo que envía.</p>
    <p>Los bienes de uso personal pueden entrar en España con exención de aranceles e IVA por traslado de residencia, con condiciones. Su agente de aduanas le dirá cuáles.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="llegada">
  <div class="container narrow article-body">
    <h2 id="llegada">Al llegar: las primeras semanas</h2>
    <ol class="process-steps">
      <li><div><strong>Empadronamiento y tarjeta de identidad de extranjero (TIE).</strong><span> El padrón en su ayuntamiento y la TIE con huellas son la base de casi todo lo demás.</span></div></li>
      <li><div><strong>Seguro de hogar desde el día de la entrada.</strong><span> También si alquila: el propietario asegura el edificio, no su contenido ni su responsabilidad. Véase <a href="/es/seguro-hogar-espana/">seguro de hogar en España</a>.</span></div></li>
      <li><div><strong>La póliza de salud, en uso.</strong><span> Tarjetas, aplicación, médico de cabecera y pediatra dentro del cuadro médico. Si quiere seguir atendiéndose en su país, coordine la cobertura internacional.</span></div></li>
      <li><div><strong>El auto.</strong><span> Desde que obtiene la residencia, tiene seis meses para conducir con su permiso de origen. Pida la cita de canje pronto. Véase <a href="/es/seguro-coche-espana/">seguro de auto en España</a>.</span></div></li>
      <li><div><strong>La responsabilidad civil familiar</strong><span>, con un límite a la altura de su patrimonio y ámbito mundial.</span></div></li>
    </ol>
  </div>
</section>

<section class="section tint" aria-labelledby="continuidad">
  <div class="container narrow article-body">
    <h2 id="continuidad">Por qué la continuidad vale tanto</h2>
    <p>Las autorizaciones de residencia se renuevan, y en cada renovación vuelve a comprobarse que se cumplen los requisitos — entre ellos, el seguro de salud cuando su visado lo exige. Además, para los nacionales de países iberoamericanos, dos años de residencia legal y continuada abren la vía de la nacionalidad española. Una póliza anulada por un recibo devuelto o un hueco de unas semanas entre dos pólizas puede costar mucho más que la prima.</p>
    <div class="callout">
      <span class="callout-label">La regla que aplicamos</span>
      Nunca cancele un seguro en origen hasta que el de España esté emitido y en vigor. Y domicilie los recibos en una cuenta que usted vigile: el seguro que se pierde por un impago es el más tonto de todos.
    </div>
  </div>
</section>`, toPortugal.moving),
  faqTitle: 'Mudarse a España — preguntas sobre seguros',
  faq: [
    {
      q: '¿Qué seguro necesito primero?',
      a: '<p>El de salud, porque normalmente forma parte de la solicitud del visado. Después, el de hogar desde la entrada en la vivienda, y el del auto cuando compre o matricule el vehículo en España.</p>',
    },
    {
      q: '¿Cubre mi seguro de hogar la mudanza?',
      a: '<p>Normalmente no, ni el de origen ni el español. Los bienes en tránsito dependen de la responsabilidad de la empresa de mudanzas, casi siempre limitada, o de un seguro de transporte específico. Con arte o antigüedades, el seguro de transporte es imprescindible.</p>',
    },
    {
      q: '¿Puedo mantener mi seguro de gastos médicos de mi país?',
      a: '<p>Puede tener sentido durante la transición o para atenderse allí, pero compruebe por escrito qué cubre si deja de residir en su país. Para el visado y para vivir en España, normalmente necesitará además una póliza que cumpla los requisitos españoles.</p>',
    },
    {
      q: '¿Cuánto tiempo puedo conducir con mi licencia?',
      a: '<p>Seis meses desde que obtiene la residencia. Después, necesitará el permiso español, por canje si su país tiene convenio vigente o por examen si no lo tiene.</p>',
    },
    {
      q: 'Todavía dudamos entre España y Portugal. ¿Pueden ayudarnos a comparar?',
      a: '<p>Sí, en lo que se refiere a seguros: qué exige cada visado, cómo funciona la sanidad, qué cubre la póliza de hogar y qué pasa con su permiso de conducir en cada país. Trabajamos en los dos y le respondemos por escrito.</p>',
    },
  ],
  related: [
    { url: '/es/seguro-medico-visado-espana/', label: 'Seguro médico para el visado español' },
    { url: '/es/seguro-coche-espana/', label: 'Seguro de auto en España' },
    { url: '/es/seguros-espana/', label: 'Seguros en España: visión general' },
  ],
};
