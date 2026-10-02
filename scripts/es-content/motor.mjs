/**
 * /es/seguro-coche-portugal/ — car insurance in Portugal.
 *
 * Search intent: "seguro de auto Portugal", "licencia de conducir
 * latinoamericana Portugal", "canje permiso conducir Portugal IMT" — a Latin
 * American family that will drive in Portugal, usually with a licence issued
 * outside the EU and a claims history that Portuguese insurers have no file
 * on.
 *
 * October 2026 rewrite for the Latin American reader (the URL is kept; the
 * page is the Portugal member of the `motor` cluster). The Spain side lives
 * on /es/seguro-coche-espana/.
 *
 * Angles: the licence comes first — Portugal recognises, with conditions,
 * licences from certain OECD and CPLP countries (Chile and Brazil among the
 * Latin American ones), and for most others the path is an exchange at the
 * IMT whose conditions depend on the issuing country; stated generally, with
 * the reader sent to the IMT. The Mexican amplia / limitada / RC ladder is
 * mapped onto the Portuguese base-plus-options structure. A home-country
 * claims history is not covered by EU recognition rules. Importing a car from
 * the Americas rarely makes sense; ISV is explained as context for buying in
 * Portugal.
 */
import { BREADCRUMB_PORTUGAL, withSibling, toSpain } from './shared.mjs';

export const MOTOR_PAGE = {
  slug: 'seguro-coche-portugal',
  url: '/es/seguro-coche-portugal/',
  cluster: 'motor',
  title: 'Seguro de auto en Portugal para latinoamericanos | Adler & Rochefort',
  description:
    'Seguro de auto en Portugal para latinoamericanos: su permiso y el canje en el IMT, las coberturas portuguesas, su historial y la importación.',
  keywords:
    'seguro de auto Portugal, seguro coche Portugal extranjero, licencia de conducir latinoamericana Portugal, canje permiso conducir Portugal IMT, troca carta de condução, seguro todo riesgo Portugal, danos próprios, importar auto a Portugal ISV, seguro auto Portugal mexicanos, seguro auto Lisboa colombianos',
  eyebrow: 'Portugal · Automóvil',
  h1: 'Seguro de auto en Portugal: su permiso, las coberturas y su historial',
  standfirst:
    'En Portugal el auto se llama carro, la cobertura amplia se llama danos próprios y su permiso latinoamericano tiene reglas propias desde el día en que pasa a ser residente. Esto es lo que conviene resolver antes de firmar — y antes de que un accidente lo resuelva por usted.',
  published: '2026-09-26T09:00:00+00:00',
  modified: '2026-10-02T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_PORTUGAL, { name: 'Seguro de auto' }],
  pullquote: 'En un siniestro se comprueba quién conducía y con qué permiso. Mejor tenerlo resuelto antes.',
  schemaType: 'Article',
  formHeading: 'Solicite una propuesta para su auto en Portugal',
  formBranch: 'Español · Coche',
  formSubject: 'Seguro de auto en Portugal',
  formCta: 'Solicitar la propuesta',
  formIntro:
    'Indíquenos el vehículo (o el que piensa comprar), el país que expidió su permiso, desde cuándo es residente y sus años sin siniestros. Le respondemos por escrito con las coberturas y las franquicias.',
  formPlaceholder:
    'Por ejemplo: residentes en Cascais desde marzo, permiso chileno de 2008, vamos a comprar un SUV eléctrico nuevo, 16 años sin siniestros en Santiago.',
  sections: withSibling(`
<section class="section plain" aria-labelledby="permiso">
  <div class="container narrow article-body">
    <h2 id="permiso">Primero, su permiso de conducir</h2>
    <p>Como turista, puede conducir en Portugal con su permiso de origen en las condiciones que correspondan a su país. Al fijar la residencia, las reglas cambian, y dependen de qué país expidió su permiso:</p>
    <ul>
      <li><strong>Permisos de ciertos países de la OCDE y de la CPLP</strong> — entre los latinoamericanos, por ejemplo, Chile y Brasil — se reconocen en Portugal con condiciones: permiso válido, expedido hace menos de quince años y titular menor de sesenta, entre otras. El canje por uno portugués es entonces opcional para conducir en Portugal.</li>
      <li><strong>Para la mayoría de los demás permisos latinoamericanos</strong>, el camino es el canje (<em>troca</em>) en el IMT, el <em>Instituto da Mobilidade e dos Transportes</em>. Sus condiciones — y si exige examen — dependen del país emisor y de los convenios aplicables, y hay un plazo desde que fija la residencia.</li>
    </ul>
    <p>Las listas y condiciones cambian: compruébelas en el IMT al llegar, no al final del plazo. Por qué figura esto en una página de seguros: en un siniestro se comprueba si el conductor estaba habilitado para conducir, y un permiso en situación irregular es exactamente el cabo suelto que complica un expediente.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="coberturas">
  <div class="container narrow article-body">
    <h2 id="coberturas">Las coberturas, con sus nombres portugueses</h2>
    <p>Portugal no vende «paquetes» como los que usted conoce. Tiene dos bloques base y el resto se elige garantía por garantía:</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Coberturas del seguro de automóvil en Portugal y su equivalente aproximado en México</caption>
        <thead>
          <tr><th scope="col">En Portugal</th><th scope="col">Equivalente aproximado en México</th><th scope="col">Lo que hay que saber</th></tr>
        </thead>
        <tbody>
          <tr><td><em>Responsabilidade civil automóvel</em></td><td>Responsabilidad civil</td><td>Obligatoria: los daños que usted causa a terceros.</td></tr>
          <tr><td>Garantías sueltas: <em>quebra de vidros</em>, <em>furto ou roubo</em>, <em>incêndio</em></td><td>Limitada</td><td>No hay un producto cerrado; se suman una a una.</td></tr>
          <tr><td><em>Danos próprios</em></td><td>Amplia</td><td>Daños al propio vehículo; la franquicia suele ser un porcentaje del valor, con un mínimo.</td></tr>
          <tr><td><em>Assistência em viagem</em></td><td>Asistencia vial</td><td>Opcional y por niveles: grúa, repatriación, vehículo de sustitución.</td></tr>
          <tr><td><em>Ocupantes</em> y conductor</td><td>Gastos médicos ocupantes</td><td>Hay que elegirlo expresamente.</td></tr>
          <tr><td><em>Proteção jurídica</em></td><td>Asesoría legal</td><td>Normalmente opcional.</td></tr>
        </tbody>
      </table>
    </div>
    <p>La consecuencia: una propuesta portuguesa que parece completa puede carecer de dos o tres cosas que usted daba por incluidas. Revisamos las garantías una a una y le damos la comparación por escrito, en lugar de enfrentar dos precios finales.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="alto-valor">
  <div class="container narrow article-body">
    <h2 id="alto-valor">Vehículos recientes y de mayor valor</h2>
    <ul>
      <li><strong>El valor en caso de pérdida total</strong> — valor a nuevo durante un plazo, valor venal o valor convenido. La diferencia, en un vehículo de dos años, es considerable.</li>
      <li><strong>La reparación</strong> — en taller oficial de la marca y con piezas originales, o en la red de talleres de la aseguradora.</li>
      <li><strong>La franquicia porcentual</strong> — un porcentaje del valor pesa mucho más en un vehículo caro que un deducible fijo.</li>
    </ul>
    <p>Para familias con varios vehículos, clásicos o de colección, existen programas específicos; los tratamos caso por caso.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="historial">
  <div class="container narrow article-body">
    <h2 id="historial">Su historial sin siniestros</h2>
    <p>Los años sin siniestros abaratan la prima en Portugal, pero las aseguradoras portuguesas no tienen acceso a su historial en Bogotá o en Santiago, y la normativa europea que obliga a reconocer los certificados de otros países de la Unión no se aplica a los de fuera.</p>
    <ul>
      <li><strong>Pida una carta a su aseguradora actual</strong> antes de cancelar la póliza: años asegurados, conductores, vehículos y siniestros, con membrete y firma.</li>
      <li><strong>Algunas aseguradoras la valoran y otras no.</strong> Es una de las razones para comparar antes de elegir.</li>
      <li><strong>Guárdela con el resto de documentos del traslado</strong>: pasados unos meses, conseguirla desde Portugal es mucho más difícil.</li>
    </ul>
  </div>
</section>

<section class="section plain" aria-labelledby="isv">
  <div class="container narrow article-body">
    <h2 id="isv">¿Traer el auto desde América? Casi nunca</h2>
    <p>Un vehículo fabricado para el mercado americano necesita la homologación europea, y la importación implica aduana, IVA y el <strong>ISV</strong> — el <em>Imposto sobre Veículos</em>, calculado sobre la cilindrada y las emisiones de CO₂ —, que en un vehículo grande puede ser muy alto. Existe una exención por traslado de residencia, con condiciones estrictas de tiempo de propiedad y de residencia previa, pero la homologación sigue siendo el obstáculo principal.</p>
    <p>Lo habitual es vender en origen y comprar en Portugal, con el ISV ya incluido en el precio. La póliza portuguesa se emite sobre la matrícula portuguesa: pida la propuesta antes de cerrar la compra, porque el modelo cambia mucho la prima.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="accidente">
  <div class="container narrow article-body">
    <h2 id="accidente">En caso de accidente: la <em>Declaração Amigável</em></h2>
    <p>Es la versión portuguesa del parte amistoso europeo: un formulario que firman los dos conductores y que orienta en la práctica el reparto de responsabilidad. Llévela en el auto.</p>
    <ol class="process-steps">
      <li><div><strong>Asegure el lugar</strong><span> y llame a las autoridades si hay heridos o no hay acuerdo. Con heridos: 112.</span></div></li>
      <li><div><strong>Rellenen el parte juntos</strong><span> — croquis, casillas, matrículas, aseguradoras y las dos firmas. Firme solo aquello con lo que esté de acuerdo, aunque esté en portugués.</span></div></li>
      <li><div><strong>Haga fotografías</strong><span> de la posición de los vehículos antes de moverlos, de los daños, las matrículas y la señalización.</span></div></li>
      <li><div><strong>Comuníquelo en plazo</strong><span> — el de la póliza, normalmente pocos días. Escríbanos: lo comunicamos por usted y seguimos el expediente en portugués.</span></div></li>
    </ol>
  </div>
</section>`, toSpain.motor),
  faqTitle: 'Seguro de auto en Portugal — preguntas',
  faq: [
    {
      q: '¿Puedo conducir en Portugal con mi licencia latinoamericana?',
      a: '<p>Como turista, en las condiciones que correspondan a su país. Como residente, depende del país emisor: algunos permisos de países de la OCDE y de la CPLP — como Chile o Brasil — se reconocen con condiciones; para la mayoría de los demás, hay que canjearlo en el IMT dentro de un plazo. Compruebe su caso al llegar.</p>',
    },
    {
      q: '¿Me reconocerán mis años sin siniestros?',
      a: '<p>No hay obligación legal cuando el historial viene de fuera de la Unión Europea, pero algunas aseguradoras lo valoran con una carta de su aseguradora anterior. Pídala antes de cancelar la póliza en su país.</p>',
    },
    {
      q: '¿Qué equivale a la cobertura amplia en Portugal?',
      a: '<p>Los <em>danos próprios</em>, sumados a la responsabilidad civil obligatoria y a las garantías que elija: lunas, robo, incendio, asistencia, ocupantes. Comparamos garantía a garantía, no precios finales.</p>',
    },
    {
      q: '¿Compensa traer el auto desde mi país?',
      a: '<p>Casi nunca: la homologación europea, la aduana y el ISV lo hacen caro y lento. Existe una exención por traslado de residencia con condiciones estrictas, pero lo habitual es comprar en Portugal.</p>',
    },
    {
      q: '¿Puedo asegurar un auto con matrícula extranjera en Portugal?',
      a: '<p>Una póliza portuguesa corriente se emite sobre una matrícula portuguesa. Si usted reside en Portugal, el vehículo debe legalizarse allí en los plazos que fija la administración.</p>',
    },
  ],
  related: [
    { url: '/es/mudarse-a-portugal-seguros/', label: 'Mudarse a Portugal desde América Latina' },
    { url: '/es/seguro-responsabilidad-civil-familiar/', label: 'Responsabilidad civil familiar en Portugal' },
    { url: '/es/seguros-portugal/', label: 'Seguros en Portugal: visión general' },
  ],
};
