/**
 * /es/mudarse-a-portugal-seguros/ — moving to Portugal from Latin America.
 *
 * Search intent: "mudarse a Portugal desde México", "vivir en Portugal
 * venezolanos", "emigrar a Portugal desde Colombia seguros" — the sequencing
 * page: what to arrange before leaving, during the move and in the first
 * months, and in what order.
 *
 * October 2026 rewrite for the Latin American reader (the URL is kept; the
 * page is the Portugal member of the `moving` cluster). The Spain side lives
 * on /es/mudarse-a-espana-seguros/.
 *
 * The angle: the move starts at a consulate. The visa needs travel insurance;
 * the Portuguese health policy needs a Portuguese address and a NIF for every
 * family member, children included; the container spends weeks at sea with
 * goods that no home policy covers; the licence rules change with residence.
 * The order of those steps is the page.
 */
import { BREADCRUMB_PORTUGAL, withSibling, toSpain } from './shared.mjs';

export const MOVING_PAGE = {
  slug: 'mudarse-a-portugal-seguros',
  url: '/es/mudarse-a-portugal-seguros/',
  cluster: 'moving',
  title: 'Mudarse a Portugal desde Latinoamérica: seguros',
  description:
    'Mudarse a Portugal desde México, Venezuela, Colombia o Argentina: visado, NIF, salud, hogar, auto y la mudanza internacional, en el orden que funciona.',
  keywords:
    'mudarse a Portugal desde México, vivir en Portugal venezolanos, emigrar a Portugal desde Colombia, mudarse a Lisboa seguros, NIF Portugal extranjeros, visado D7 seguros, mudanza internacional Portugal seguro, latinoamericanos en Portugal',
  eyebrow: 'Portugal · Traslado',
  h1: 'Mudarse a Portugal desde América Latina: los seguros, en el orden correcto',
  standfirst:
    'Casi todo lo que sale mal en un traslado sale mal por el orden, no por la elección de aseguradora. En Portugal, además, el orden lo marcan tres cosas muy concretas: el visado, el NIF y el domicilio. Estas son las lagunas que se abren al cruzar el Atlántico y cómo cerrarlas.',
  published: '2026-09-26T09:00:00+00:00',
  modified: '2026-10-02T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_PORTUGAL, { name: 'Mudarse a Portugal' }],
  pullquote: 'Nadie anula sus seguros. Uno simplemente se muda — y un día la póliza ya no describe su vida.',
  schemaType: 'Article',
  formHeading: 'Planifique los seguros de su traslado a Portugal',
  formBranch: '',
  formSubject: 'Traslado a Portugal — seguros',
  formCta: 'Planificar el traslado',
  formIntro:
    'Cuéntenos desde dónde se traslada, con qué visado, quién viene y en qué fecha — y, si quiere, qué pólizas tiene hoy. Le respondemos por escrito con lo que hay que resolver y en qué orden.',
  formPlaceholder:
    'Por ejemplo: nos trasladamos de Bogotá a Lisboa en septiembre con visado D7, dos adultos, dos hijos y la abuela; enviamos un contenedor con muebles y algo de arte.',
  sections: withSibling(`
<section class="section plain" aria-labelledby="tres">
  <div class="container narrow article-body">
    <h2 id="tres">Tres llaves: visado, NIF y domicilio</h2>
    <p>En Portugal, casi todos los seguros dependen de tres cosas que se obtienen en un orden determinado:</p>
    <ul>
      <li><strong>El visado</strong> — D7, D8, D2 u otro —, que exige en la solicitud un seguro de viaje con cobertura médica. Véase <a href="/es/seguro-medico-visado-portugal/">seguro médico para el visado portugués</a>.</li>
      <li><strong>El NIF</strong>, el número de contribuyente portugués, para cada miembro de la familia — también los menores, que lo necesitarán para la póliza de salud.</li>
      <li><strong>El domicilio en Portugal</strong> — contrato de alquiler o escritura —, sin el cual las aseguradoras portuguesas no emiten la póliza de salud.</li>
    </ul>
    <p>Quien entiende ese orden evita la laguna más frecuente: llegar con un seguro de viaje que se termina antes de que la póliza definitiva pueda emitirse.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="antes">
  <div class="container narrow article-body">
    <h2 id="antes">Antes de salir: de tres a seis meses</h2>
    <ol class="process-steps">
      <li><div><strong>NIF de toda la familia.</strong><span> Puede obtenerse antes de viajar y es requisito para casi todo: alquiler, cuenta bancaria, compra de vivienda, seguros.</span></div></li>
      <li><div><strong>Seguro de viaje para el visado</strong><span>, con la duración suficiente para cubrir la espera hasta tener domicilio y póliza definitiva.</span></div></li>
      <li><div><strong>Cartas de sus aseguradoras actuales</strong><span>: historial del auto, historial del seguro de hogar y qué cubre su póliza de salud si usted deja de residir en su país.</span></div></li>
      <li><div><strong>Tasaciones de arte, joyas y relojes</strong><span>, recientes y documentadas: son la base del valor convenido en Portugal y del seguro de la mudanza.</span></div></li>
      <li><div><strong>Informes médicos</strong><span> de cada miembro de la familia y lista de medicamentos con los principios activos — sobre todo si vienen personas mayores.</span></div></li>
    </ol>
  </div>
</section>

<section class="section plain" aria-labelledby="contenedor">
  <div class="container narrow article-body">
    <h2 id="contenedor">Durante el traslado: el contenedor en el mar</h2>
    <p>Una mudanza desde América viaja normalmente en contenedor y tarda semanas. Durante ese tiempo, sus bienes no están cubiertos por el seguro de hogar de origen — ya no están en la casa — ni por el portugués — todavía no han llegado. Dependen de:</p>
    <ul>
      <li><strong>La responsabilidad de la empresa de mudanzas</strong>, casi siempre limitada por peso o por bulto y muy inferior al valor real.</li>
      <li><strong>Un seguro de transporte</strong> específico, a todo riesgo y por valor declarado, con inventario detallado y fotografías.</li>
    </ul>
    <p>Con obras de arte y antigüedades, el embalaje profesional y la cobertura «de clavo a clavo» — de la pared de origen a la de destino — no son un lujo. Pida el límite de responsabilidad de la empresa de mudanzas por escrito y compárelo con lo que envía.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="llegada">
  <div class="container narrow article-body">
    <h2 id="llegada">Al llegar: los primeros meses</h2>
    <ol class="process-steps">
      <li><div><strong>Seguro de hogar desde el día de la entrada</strong><span> — también si alquila: el propietario asegura el edificio, no su contenido ni su responsabilidad. Véase <a href="/es/seguro-hogar-alto-valor/">seguro de hogar en Portugal</a>.</span></div></li>
      <li><div><strong>Póliza de salud definitiva</strong><span>, portuguesa o internacional, con efecto antes de que termine el seguro de viaje. Véase <a href="/es/seguro-salud-internacional/">seguro de salud en Portugal</a>.</span></div></li>
      <li><div><strong>Autorización de residencia e inscripción en el SNS</strong><span>, cuando tenga la documentación.</span></div></li>
      <li><div><strong>El auto</strong>:<span> compruebe en el IMT qué hacer con su permiso como residente y compre el vehículo en Portugal. Véase <a href="/es/seguro-coche-portugal/">seguro de auto en Portugal</a>.</span></div></li>
      <li><div><strong>La responsabilidad civil</strong><span> familiar y, si trabaja desde Portugal con visado D8, la <a href="/es/seguro-responsabilidad-profesional-portugal/">profesional</a>.</span></div></li>
      <li><div><strong>Revisión a los seis meses</strong>:<span> la casa, la dirección y el trabajo rara vez acaban como estaba previsto.</span></div></li>
    </ol>
  </div>
</section>

<section class="section plain" aria-labelledby="regla">
  <div class="container narrow article-body">
    <h2 id="regla">La única regla que importa</h2>
    <div class="callout">
      <span class="callout-label">Continuidad antes que todo</span>
      No cancele ningún seguro en su país hasta que el de Portugal esté emitido y en vigor. Pida a cada aseguradora de origen, <strong>por escrito</strong>, qué se mantiene cuando usted deja de residir allí y hasta cuándo. Y domicilie los recibos portugueses en una cuenta que usted vigile: una póliza anulada por un recibo devuelto es la laguna más tonta de todas.
    </div>
  </div>
</section>`, toSpain.moving),
  faqTitle: 'Mudarse a Portugal — preguntas sobre seguros',
  faq: [
    {
      q: '¿Qué debo resolver primero?',
      a: '<p>El NIF de toda la familia y el seguro de viaje para el visado. Después, el domicilio en Portugal, que es lo que permite emitir la póliza de salud portuguesa. El hogar y el auto siguen las fechas de la entrada en la vivienda y de la compra del vehículo.</p>',
    },
    {
      q: '¿Puedo contratar la póliza de salud portuguesa antes de viajar?',
      a: '<p>Normalmente no: las aseguradoras portuguesas la emiten con domicilio de residencia en Portugal y NIF de cada asegurado. Para el periodo previo se usa un seguro de viaje; una póliza internacional puede, según la aseguradora, contratarse antes.</p>',
    },
    {
      q: '¿Cubre mi seguro de hogar la mudanza?',
      a: '<p>Normalmente no, ni el de origen ni el portugués. Los bienes en tránsito dependen de la responsabilidad de la empresa de mudanzas, casi siempre limitada, o de un seguro de transporte específico — imprescindible con arte o antigüedades.</p>',
    },
    {
      q: '¿Necesito seguro de hogar si alquilo?',
      a: '<p>Sí, para su contenido y su responsabilidad civil. El propietario asegura normalmente el edificio, no lo que usted tiene dentro ni los daños que usted cause. Muchos contratos de alquiler lo exigen.</p>',
    },
    {
      q: 'Todavía dudamos entre Portugal y España. ¿Nos ayudan a comparar?',
      a: '<p>Sí, en lo que se refiere a seguros: qué exige cada visado, cómo funciona la sanidad, qué cubre la póliza de hogar y qué pasa con su permiso de conducir en cada país. Trabajamos en los dos y le respondemos por escrito.</p>',
    },
  ],
  related: [
    { url: '/es/seguro-medico-visado-portugal/', label: 'Seguro médico para el visado portugués' },
    { url: '/es/seguro-salud-internacional/', label: 'Seguro de salud en Portugal' },
    { url: '/es/seguros-portugal/', label: 'Seguros en Portugal: visión general' },
  ],
};
