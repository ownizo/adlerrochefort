/**
 * /es/seguro-coche-espana/
 *
 * Search intent: "seguro de auto en España con licencia extranjera", "canje
 * permiso de conducir España colombianos", "seguro coche España extranjero
 * sin historial" — a Latin American resident who needs to drive in Spain and
 * finds that the licence, the claims history and the vocabulary all work
 * differently.
 *
 * The Latin American angle: the six-month window after residence during
 * which a non-EU licence remains valid, the DGT exchange agreements (most of
 * South and Central America, not Mexico, Venezuela suspended — stated as of
 * writing, and the reader is sent to the current DGT list), the claims
 * history that Spanish insurers are not obliged to recognise when it comes
 * from outside the EU, and the Mexican amplia / limitada / RC mapped onto
 * todo riesgo / terceros ampliado / terceros.
 */
import { BREADCRUMB_SPAIN, withSibling, toPortugal } from './shared.mjs';

export const ES_MOTOR_PAGE = {
  slug: 'seguro-coche-espana',
  url: '/es/seguro-coche-espana/',
  cluster: 'es-motor',
  title: 'Seguro de auto en España para latinoamericanos',
  description:
    'Seguro de auto en España para latinoamericanos: el plazo de seis meses del permiso extranjero, el canje en la DGT, su historial de conductor y las coberturas.',
  keywords:
    'seguro de auto España extranjero, seguro coche España licencia extranjera, canje permiso de conducir España, canje licencia colombiana España, permiso de conducir mexicano España, seguro coche sin historial España, todo riesgo terceros ampliado, seguro coche Madrid latinoamericanos',
  eyebrow: 'España · Automóvil',
  h1: 'Seguro de auto en España: su permiso, su historial y la póliza correcta',
  standfirst:
    'En España el auto se llama coche, la cobertura amplia se llama todo riesgo y su permiso latinoamericano tiene fecha de caducidad desde el día en que pasa a ser residente. Esto es lo que conviene resolver antes de que un accidente lo resuelva por usted.',
  published: '2026-10-02T09:00:00+00:00',
  modified: '2026-10-02T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_SPAIN, { name: 'Seguro de auto' }],
  pullquote: 'Conducir con un permiso que ya no vale no es un problema de tráfico. Es un problema de seguro.',
  schemaType: 'Article',
  formHeading: 'Solicite su propuesta de seguro de auto en España',
  formBranch: 'Español · Coche',
  formSubject: 'Seguro de auto en España',
  formCta: 'Solicitar propuesta',
  formIntro:
    'Indíquenos el vehículo (o el que piensa comprar), dónde vive, el país que expidió su permiso y desde cuándo es residente. Si tiene una carta de su aseguradora anterior sobre su historial, guárdela: le diremos cómo usarla.',
  formPlaceholder:
    'Por ejemplo: residentes en Madrid desde junio, permiso colombiano de 2004, vamos a comprar un SUV híbrido nuevo, 18 años sin siniestros en Bogotá.',
  sections: withSibling(`
<section class="section plain" aria-labelledby="permiso">
  <div class="container narrow article-body">
    <h2 id="permiso">Su permiso de conducir: seis meses y después</h2>
    <p>Como turista, puede conducir en España con su permiso de origen, en las condiciones que correspondan a su país. Pero desde el momento en que obtiene la residencia, empieza a correr un plazo: <strong>durante seis meses</strong> su permiso latinoamericano sigue siendo válido; después, deja de serlo.</p>
    <p>A partir de ahí hay dos caminos:</p>
    <ul>
      <li><strong>Canje.</strong> Si su país tiene convenio con España, puede cambiar su permiso por uno español sin repetir el examen completo, aunque según el convenio se exigen pruebas médicas y, en algunos casos, alguna prueba adicional. A la fecha de redacción, la lista de la DGT incluye a Argentina, Bolivia, Brasil, Chile, Colombia, Costa Rica, Ecuador, El Salvador, Guatemala, Honduras, Nicaragua, Panamá, Paraguay, Perú, República Dominicana y Uruguay. El convenio con Venezuela está suspendido, y México no figura en la lista.</li>
      <li><strong>Examen.</strong> Si su país no tiene convenio vigente, hay que obtener el permiso español con el procedimiento ordinario.</li>
    </ul>
    <p>La lista cambia y cada convenio tiene sus condiciones: compruebe la versión vigente en la DGT antes de planificar. Y no deje el canje para el último mes, porque las citas se agotan.</p>
    <div class="callout">
      <span class="callout-label">Lo que esto significa para el seguro</span>
      Si conduce con un permiso que ya no es válido en España y tiene un accidente, la aseguradora pagará a los terceros — es lo que garantiza el seguro obligatorio —, pero puede reclamarle a usted lo pagado. Los daños de su propio coche pueden quedar sin cubrir.
    </div>
  </div>
</section>

<section class="section tint" aria-labelledby="coberturas">
  <div class="container narrow article-body">
    <h2 id="coberturas">Las coberturas, con sus nombres españoles</h2>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Coberturas del seguro de automóvil en España y su equivalente aproximado en México</caption>
        <thead>
          <tr><th scope="col">En España</th><th scope="col">Equivalente aproximado en México</th><th scope="col">Qué cubre</th></tr>
        </thead>
        <tbody>
          <tr><td>Terceros (obligatorio + voluntario)</td><td>Responsabilidad civil</td><td>Los daños que usted causa a otros, personas y bienes</td></tr>
          <tr><td>Terceros ampliado</td><td>Limitada</td><td>Lo anterior más robo, incendio, lunas (cristales) y, según la póliza, fenómenos atmosféricos</td></tr>
          <tr><td>Todo riesgo con franquicia</td><td>Amplia con deducible</td><td>Además, los daños propios, pagando usted una franquicia por siniestro</td></tr>
          <tr><td>Todo riesgo sin franquicia</td><td>Amplia sin deducible</td><td>Daños propios sin franquicia; la opción más cara y la habitual en vehículos nuevos</td></tr>
        </tbody>
      </table>
    </div>
    <p>En los vehículos de mayor valor conviene mirar además la <strong>valoración en caso de pérdida total</strong> — valor de nuevo durante los primeros años o valor venal —, el vehículo de sustitución y la defensa jurídica. Los riesgos extraordinarios, como una inundación, los cubre el Consorcio si la póliza incluye daños propios o, según el caso, coberturas como el incendio o el robo.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="historial">
  <div class="container narrow article-body">
    <h2 id="historial">Su historial sin siniestros</h2>
    <p>En España la prima depende mucho de los años asegurados sin siniestros. El problema para quien llega de América es que ese historial no está en los ficheros españoles, y la normativa europea que obliga a reconocer los certificados de otras aseguradoras de la Unión no se aplica a los de fuera.</p>
    <ul>
      <li><strong>Pida una carta a su aseguradora actual</strong> antes de cancelar la póliza: años asegurados, conductores y siniestros, en papel con membrete y, si es posible, firmada.</li>
      <li><strong>Algunas aseguradoras la valoran</strong> y otras no. Es una de las razones para comparar compañías antes de elegir.</li>
      <li><strong>Conserve la antigüedad de su permiso.</strong> Tras el canje, el permiso español refleja normalmente la fecha del original; asegúrese de que la aseguradora la tiene en cuenta y no le trata como conductor novel.</li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="importar">
  <div class="container narrow article-body">
    <h2 id="importar">¿Traer el auto desde América?</h2>
    <p>Casi nunca compensa. Un vehículo fabricado para el mercado americano necesita homologación europea, y la importación conlleva aranceles, IVA e impuesto de matriculación. Existe una franquicia por traslado de residencia que puede eximir de parte de esos tributos, con condiciones de tiempo de propiedad y de residencia previa fuera de la Unión, pero la homologación sigue siendo el obstáculo principal.</p>
    <p>Lo habitual es vender en origen y comprar en España. Si piensa hacerlo, pida la propuesta de seguro antes de cerrar la compra: el modelo y su valor cambian mucho la prima, y la aseguradora necesita la matrícula para emitir la póliza.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="accidente">
  <div class="container narrow article-body">
    <h2 id="accidente">Si hay un accidente</h2>
    <ol class="process-steps">
      <li><div><strong>Seguridad primero.</strong><span> Chaleco, señalización y, si hay heridos, el 112.</span></div></li>
      <li><div><strong>El parte amistoso.</strong><span> La declaración amistosa de accidente, firmada por los dos conductores, es el documento clave. Si no hay acuerdo, no firme: anote los datos y llame a la policía.</span></div></li>
      <li><div><strong>Comunique el siniestro en plazo.</strong><span> La ley española da siete días desde que lo conoce, salvo que la póliza prevea un plazo más amplio.</span></div></li>
      <li><div><strong>Escríbanos.</strong><span> Gestionamos el siniestro con la aseguradora, en español y por escrito.</span></div></li>
    </ol>
  </div>
</section>`, toPortugal.motor),
  faqTitle: 'Seguro de auto en España — preguntas',
  faq: [
    {
      q: '¿Cuánto tiempo puedo conducir con mi permiso latinoamericano en España?',
      a: '<p>Como residente, seis meses desde que obtiene la residencia. Después, necesita el permiso español, por canje si su país tiene convenio o por examen si no lo tiene. Compruebe las condiciones vigentes en la DGT.</p>',
    },
    {
      q: '¿Puedo canjear mi licencia mexicana?',
      a: '<p>A la fecha de redacción, México no figura en la lista de países con convenio de canje de la DGT, lo que significa que, como residente, tendría que obtener el permiso español por el procedimiento ordinario. Las listas cambian: verifique la situación actual antes de decidir.</p>',
    },
    {
      q: '¿Me reconocerán en España mis años sin siniestros?',
      a: '<p>No hay obligación legal de hacerlo cuando el historial viene de fuera de la Unión Europea, pero algunas aseguradoras lo valoran si presenta una carta de su aseguradora anterior. Pídala antes de cancelar su póliza en origen.</p>',
    },
    {
      q: '¿Qué seguro es obligatorio?',
      a: '<p>La responsabilidad civil obligatoria por los daños a terceros. Todo lo demás — daños propios, robo, lunas, asistencia — es voluntario. Para un coche nuevo o financiado, lo razonable suele ser todo riesgo durante los primeros años.</p>',
    },
    {
      q: '¿Puedo asegurar en España un coche con matrícula extranjera?',
      a: '<p>Las aseguradoras españolas aseguran normalmente vehículos con matrícula española. Si usted reside en España, el vehículo debe matricularse aquí en los plazos que marca la normativa. Por eso, en la práctica, la mayoría de familias compran el coche en España.</p>',
    },
  ],
  related: [
    { url: '/es/mudarse-a-espana-seguros/', label: 'Mudarse a España desde América Latina' },
    { url: '/es/seguro-responsabilidad-civil-espana/', label: 'Responsabilidad civil familiar en España' },
    { url: '/es/seguros-espana/', label: 'Seguros en España: visión general' },
  ],
};
