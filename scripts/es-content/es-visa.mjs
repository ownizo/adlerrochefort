/**
 * /es/seguro-medico-visado-espana/
 *
 * Search intent: "seguro médico para visa no lucrativa España", "seguro
 * médico visado nómada digital", "seguro sin copagos ni carencias visado" —
 * by far the most searched insurance question among Latin Americans heading
 * to Spain, because the policy is a document of the visa file.
 *
 * The Latin American angle: no EHIC, no S1, no EU coordination — the reader
 * is a third-country national whose residence depends on a private policy
 * with very specific wording. The three traps are the international policy
 * that is excellent but not accepted, the cheapest compliant policy that is
 * useless in real life, and "sin carencias" read as "covers pre-existing
 * conditions". Requirements are given "as generally applied by consulates";
 * the page sends the reader to their own consulate for the final word. The
 * golden visa for property investment no longer exists (abolished April 2025)
 * and is mentioned only to redirect.
 */
import { BREADCRUMB_SPAIN, withSibling, toPortugal } from './shared.mjs';

export const ES_VISA_PAGE = {
  slug: 'seguro-medico-visado-espana',
  url: '/es/seguro-medico-visado-espana/',
  cluster: 'es-visa',
  title: 'Seguro médico para el visado español | Adler & Rochefort',
  description:
    'Seguro médico para la visa no lucrativa, de nómada digital o de estudiante en España: sin copagos, sin carencias y con aseguradora autorizada.',
  keywords:
    'seguro médico visa no lucrativa España, seguro médico visado residencia no lucrativa, seguro sin copagos sin carencias, seguro médico visa nómada digital España, seguro médico visado estudiante España, seguro salud visado España mexicanos, seguro médico visa España colombianos, certificado seguro médico consulado España',
  eyebrow: 'España · Visados',
  h1: 'Seguro médico para el visado español: lo que pide el consulado y lo que necesita su familia',
  standfirst:
    'Para un ciudadano latinoamericano, la póliza de salud no es un complemento del traslado a España: es un documento del expediente. Los consulados la revisan con lupa, y un certificado mal redactado retrasa la cita. Esto es lo que se exige, según el visado, y cómo cumplirlo sin quedarse con una póliza que no quiere usar.',
  published: '2026-10-02T09:00:00+00:00',
  modified: '2026-10-02T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_SPAIN, { name: 'Seguro médico para el visado' }],
  pullquote: 'El consulado comprueba que la póliza cumple. No comprueba que le sirva a usted.',
  schemaType: 'Article',
  formHeading: 'Solicite su propuesta para el visado español',
  formBranch: 'Español · Salud para visado',
  formSubject: 'Seguro médico para visado en España',
  formCta: 'Solicitar propuesta',
  formIntro:
    'Indíquenos el tipo de visado, el consulado donde lo tramita, quién viaja (edades) y la fecha prevista de entrada en España. Los datos de salud no los pedimos aquí: se dan después, directamente en la solicitud a la aseguradora.',
  formPlaceholder:
    'Por ejemplo: visado de residencia no lucrativa en el consulado de Bogotá, dos adultos (58 y 55), cita en marzo, nos instalamos en Valencia.',
  sections: withSibling(`
<section class="section plain" aria-labelledby="por-que">
  <div class="container narrow article-body">
    <h2 id="por-que">Por qué el seguro es parte del visado</h2>
    <p>Un ciudadano de la Unión Europea que se instala en España se inscribe como residente y, si no trabaja, demuestra medios y un seguro de enfermedad. Un ciudadano latinoamericano pide antes un visado en el consulado de su país, y la normativa española de extranjería exige, para la mayoría de los visados de residencia, un <strong>seguro de enfermedad público o privado contratado con una aseguradora autorizada para operar en España</strong>.</p>
    <p>La tarjeta sanitaria europea y el formulario S1, que resuelven la situación de un europeo, no se aplican. Hasta que usted no trabaje en España y cotice a la Seguridad Social, la póliza privada es, en la práctica, su única cobertura — y la base de la renovación de su permiso.</p>
    <p>Una aclaración que todavía hacemos a menudo: el visado de inversor por compra de vivienda (la llamada <em>golden visa</em>) ya no existe en España; fue suprimido en abril de 2025. Quien compra una vivienda y quiere vivir en ella lo hace hoy, por lo general, con otro visado — y casi siempre con una póliza de salud como la que se describe aquí.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="requisitos">
  <div class="container narrow article-body">
    <h2 id="requisitos">Los requisitos, visado por visado</h2>
    <p>Así se aplican habitualmente los requisitos en los consulados. La práctica varía de uno a otro, y la palabra final la tiene el consulado donde usted presenta la solicitud.</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Requisitos habituales del seguro médico según el tipo de visado español</caption>
        <thead>
          <tr><th scope="col">Visado</th><th scope="col">Lo que suele exigirse a la póliza</th><th scope="col">Detalles que conviene vigilar</th></tr>
        </thead>
        <tbody>
          <tr><td>Residencia no lucrativa</td><td>Cobertura completa equivalente a la sanidad pública, <strong>sin copagos</strong> y <strong>sin carencias</strong>, con aseguradora autorizada en España, para todo el periodo</td><td>El más estricto. Cada miembro de la familia necesita su cobertura; algunos consulados piden el justificante de pago de la anualidad</td></tr>
          <tr><td>Teletrabajo de carácter internacional (nómada digital)</td><td>Seguro de salud con cobertura en España; en la práctica, privado y sin copagos salvo que usted cotice en España</td><td>Si cotiza a la Seguridad Social española, la sanidad pública puede sustituir a la póliza privada</td></tr>
          <tr><td>Estudios</td><td>Seguro con aseguradora autorizada en España que cubra la asistencia durante toda la estancia</td><td>Los requisitos sobre copagos y repatriación varían entre consulados y centros</td></tr>
          <tr><td>Reagrupación de familiares</td><td>Según la situación del familiar que reagrupa</td><td>Si el reagrupante cotiza en España, la familia accede normalmente a la sanidad pública</td></tr>
        </tbody>
      </table>
    </div>
    <div class="callout">
      <span class="callout-label">El certificado importa tanto como la póliza</span>
      El consulado no lee las condiciones generales: lee el certificado de la aseguradora. Debe decir, con estas palabras o equivalentes, que la cobertura es completa en España, que no hay copagos ni carencias, cuáles son las fechas de vigencia y que la entidad está autorizada para operar en España. Un certificado genérico es la causa más frecuente de requerimientos.
    </div>
  </div>
</section>

<section class="section plain" aria-labelledby="internacional">
  <div class="container narrow article-body">
    <h2 id="internacional">¿Sirve mi póliza internacional?</h2>
    <p>Muchas familias latinoamericanas ya tienen una excelente póliza de gastos médicos mayores o un seguro internacional contratado en su país. La pregunta razonable es si sirve para el visado. La respuesta honesta: a veces.</p>
    <ul>
      <li><strong>Sí puede servir</strong> cuando la aseguradora opera legalmente en España, la póliza cubre la asistencia en España sin copagos ni carencias, y la entidad emite un certificado con esas menciones.</li>
      <li><strong>Normalmente no sirve</strong> cuando la póliza está emitida por una aseguradora que solo opera en su país, cuando tiene un deducible o coaseguro por evento, o cuando la cobertura en el extranjero es de urgencias o por un número limitado de días.</li>
    </ul>
    <p>Lo que solemos recomendar es pensar en dos capas: una póliza que cumpla el requisito español y que la familia use de verdad en España, y — si interesa — una cobertura internacional que permita seguir atendiéndose en su país de origen o en Estados Unidos. A veces una sola póliza bien elegida hace las dos cosas; con frecuencia, no.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="trampas">
  <div class="container narrow article-body">
    <h2 id="trampas">Tres malentendidos que cuestan caro</h2>
    <h3>«Sin carencias» no significa «cubre las enfermedades previas»</h3>
    <p>La póliza del visado no puede tener periodos de espera, pero la aseguradora sigue haciendo un cuestionario de salud y puede excluir las enfermedades preexistentes declaradas. Una diabetes o una cardiopatía conocida pueden quedar fuera aunque la póliza cumpla todos los requisitos del consulado. Véase <a href="/es/seguro-salud-preexistencias-espana/">enfermedades preexistentes en España</a>.</p>
    <h3>La póliza más barata que cumple no es la que necesita</h3>
    <p>Hay pólizas diseñadas para pasar el trámite: cuadro médico reducido, sin reembolso, límites bajos de hospitalización. Cumplen; pero el día que necesite un especialista concreto o una cirugía programada, descubrirá lo que compró. La diferencia de prima entre cumplir y estar bien cubierto suele ser menor de lo que se piensa.</p>
    <h3>La renovación también la mira alguien</h3>
    <p>La autorización de residencia se renueva, y en cada renovación vuelve a comprobarse que hay cobertura. Una póliza anulada por un recibo devuelto o dejada vencer entre dos periodos es un problema migratorio, no solo de seguro. Conviene que la prima se cobre en una cuenta que usted vigile y que la renovación esté prevista con tiempo.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="pasos">
  <div class="container narrow article-body">
    <h2 id="pasos">El orden que funciona</h2>
    <ol class="process-steps">
      <li><div><strong>Confirme el visado y el consulado.</strong><span> Los requisitos de la póliza dependen de ambos. Consulte la lista de documentos del consulado que le corresponde.</span></div></li>
      <li><div><strong>Pida la propuesta con antelación.</strong><span> La aseguradora valora el cuestionario de salud de cada persona; con familias o edades avanzadas, eso lleva tiempo.</span></div></li>
      <li><div><strong>Haga coincidir la fecha de efecto con la entrada prevista.</strong><span> Algunos consulados exigen que la póliza esté en vigor desde la llegada; otros, desde la fecha de la solicitud.</span></div></li>
      <li><div><strong>Revise el certificado antes de la cita.</strong><span> Nombres como en el pasaporte, fechas, menciones exigidas y, si se pide, traducción o apostilla de lo que no sea de la aseguradora.</span></div></li>
      <li><div><strong>Ya en España, active la póliza de verdad.</strong><span> Tarjeta, aplicación, médico de cabecera dentro del cuadro y, si la tiene, la cobertura internacional coordinada con la española.</span></div></li>
    </ol>
  </div>
</section>`, toPortugal.visa),
  faqTitle: 'Seguro médico para el visado español — preguntas',
  faq: [
    {
      q: '¿Qué significa «sin copagos y sin carencias»?',
      a: '<p>Sin copagos: usted no paga nada por consulta, prueba o ingreso, más allá de la prima. Sin carencias: todas las coberturas funcionan desde el primer día, sin meses de espera. Es lo que habitualmente exigen los consulados para el visado de residencia no lucrativa.</p>',
    },
    {
      q: '¿Puedo usar un seguro de viaje para el visado de residencia?',
      a: '<p>Para un visado de residencia, normalmente no: un seguro de viaje cubre urgencias durante un viaje y no la asistencia completa en España. Para visados de corta estancia la lógica es otra. Si le han dicho lo contrario, pídalo por escrito al consulado.</p>',
    },
    {
      q: 'Tengo una enfermedad previa. ¿Me rechazarán el visado?',
      a: '<p>El visado no depende de su estado de salud, sino de que tenga una póliza que cumpla. Lo que puede ocurrir es que la aseguradora excluya esa enfermedad de la cobertura. Le explicamos por escrito, antes de contratar, qué queda cubierto y qué no, y buscamos la aseguradora que mejor trate su caso.</p>',
    },
    {
      q: '¿Tiene que pagarse la póliza por adelantado?',
      a: '<p>Algunos consulados piden la póliza pagada por la anualidad completa; otros aceptan pago fraccionado. Confírmelo en la lista de requisitos de su consulado antes de elegir la forma de pago.</p>',
    },
    {
      q: '¿Qué pasa con la póliza cuando empiece a trabajar en España?',
      a: '<p>Si pasa a cotizar a la Seguridad Social, tendrá acceso a la sanidad pública y la póliza privada deja de ser un requisito. Muchas familias la mantienen igualmente, por los tiempos de espera y la libre elección de especialista. La decisión es suya; nosotros le explicamos qué pierde y qué gana en cada caso.</p>',
    },
    {
      q: '¿Me sirve la misma póliza si al final me instalo en Portugal?',
      a: '<p>No. Una póliza española cubre la asistencia en España, y el consulado portugués tiene sus propias reglas. Si todavía duda entre los dos países, díganoslo: es mejor decidir el seguro después de decidir el país.</p>',
    },
  ],
  related: [
    { url: '/es/seguro-salud-espana/', label: 'Seguro de salud en España' },
    { url: '/es/mudarse-a-espana-seguros/', label: 'Mudarse a España desde América Latina' },
    { url: '/es/seguros-espana/', label: 'Seguros en España: visión general' },
  ],
};
