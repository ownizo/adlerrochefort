/**
 * /es/comprar-casa-en-portugal-seguro/ — buying a home in Portugal.
 *
 * Search intent: "comprar casa en Portugal extranjero", "comprar
 * departamento en Lisboa latinoamericanos", "seguro hipoteca Portugal" — a
 * Latin American family buying in Lisbon, Cascais, Porto or the Algarve,
 * often from abroad and often with funds sent across the Atlantic.
 *
 * October 2026 rewrite for the Latin American reader (the URL is kept; the
 * page is the Portugal member of the `property` cluster). The Spain side
 * lives on /es/comprar-casa-en-espana-seguro/.
 *
 * Angles: the Portuguese purchase steps mapped onto the reader's own
 * (promesa de compraventa, escritura pública, registro público, avalúo
 * catastral); the moment the risk passes; what the bank may and may not
 * impose; the three figures for one property (price, VPT, rebuild cost);
 * renovation in historic centres; the golden visa no longer reachable
 * through property since 2023; and the transatlantic transfer, the moment
 * payment fraud targets.
 */
import { BREADCRUMB_PORTUGAL, withSibling, toSpain } from './shared.mjs';

export const PROPERTY_PAGE = {
  slug: 'comprar-casa-en-portugal-seguro',
  url: '/es/comprar-casa-en-portugal-seguro/',
  cluster: 'property',
  title: 'Comprar casa en Portugal: el seguro | Adler & Rochefort',
  description:
    'Comprar casa en Portugal desde América Latina: del CPCV a la escritura, los seguros que pide el banco, la suma correcta y la transferencia de fondos.',
  keywords:
    'comprar casa en Portugal extranjero, comprar departamento Lisboa, comprar vivienda Portugal latinoamericanos, CPCV Portugal, escritura Portugal, seguro hipoteca Portugal, comprar casa Portugal mexicanos, comprar casa Portugal venezolanos, reforma casa Lisboa seguro',
  eyebrow: 'Portugal · Compra de vivienda',
  h1: 'Comprar casa en Portugal: el seguro, paso a paso',
  standfirst:
    'Del contrato de promesa a la escritura, y de la escritura a la primera reforma: en qué momento la casa pasa a ser su riesgo, qué pedirá el banco, qué cifra debe figurar en la póliza — y cómo proteger el dinero que cruza el Atlántico para pagarla.',
  published: '2026-09-26T09:00:00+00:00',
  modified: '2026-10-02T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_PORTUGAL, { name: 'Comprar casa' }],
  pullquote: 'El banco tiene un interés legítimo en que la casa esté asegurada. Qué aseguradora emite la póliza es otra cuestión.',
  schemaType: 'Article',
  formHeading: 'El seguro de su compra',
  formBranch: 'Español · Hogar',
  formSubject: 'Compra de vivienda en Portugal — seguro',
  formCta: 'Solicitar un análisis por escrito',
  formIntro:
    'Cuéntenos qué compra, dónde y para cuándo está prevista la escritura. Le respondemos por escrito con lo que conviene tener contratado ese día y lo que exigirá el banco.',
  formPlaceholder:
    'Por ejemplo: compramos un departamento rehabilitado en Príncipe Real desde Caracas, escritura en noviembre con poder notarial, hipoteca con un banco portugués; pensamos alquilarlo parte del año.',
  sections: withSibling(`
<section class="section plain" aria-labelledby="pasos">
  <div class="container narrow article-body">
    <h2 id="pasos">Los pasos de la compra, con sus nombres portugueses</h2>
    <p>El proceso portugués se parece al que usted conoce más de lo que su vocabulario sugiere. Estas son las equivalencias que importan:</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Pasos de la compra de vivienda en América Latina y en Portugal</caption>
        <thead>
          <tr><th scope="col">En buena parte de América Latina</th><th scope="col">En Portugal</th><th scope="col">Lo que conviene saber</th></tr>
        </thead>
        <tbody>
          <tr><td>RFC, RUT, cédula, CUIT</td><td><em>NIF</em> portugués</td><td>Imprescindible antes de firmar nada; también para contratar seguros.</td></tr>
          <tr><td>Promesa de compraventa con arras o enganche</td><td><em>CPCV</em> (contrato-promessa) con <em>sinal</em></td><td>Quien incumple pierde la señal, o la devuelve doblada.</td></tr>
          <tr><td>Escritura pública ante notario</td><td><em>Escritura</em> o documento autenticado</td><td>Desde ese día la casa es suya y su riesgo.</td></tr>
          <tr><td>Impuesto de adquisición</td><td><em>IMT</em> e <em>Imposto do Selo</em></td><td>Aquí IMT es un impuesto; no confundirlo con el IMT de tráfico.</td></tr>
          <tr><td>Registro público de la propiedad</td><td><em>Conservatória do Registo Predial</em></td><td>Misma función.</td></tr>
          <tr><td>Avalúo catastral</td><td><em>VPT</em> (valor patrimonial tributário)</td><td>Una base fiscal, no una suma asegurada.</td></tr>
        </tbody>
      </table>
    </div>
    <p>Desde 2023, la compra de vivienda ya no da acceso a la autorización de residencia por inversión (<em>golden visa</em>) en Portugal. Si piensa vivir en la casa, la residencia se tramita por otra vía — y con ella llega el <a href="/es/seguro-medico-visado-portugal/">seguro del visado</a>.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="riesgo">
  <div class="container narrow article-body">
    <h2 id="riesgo">¿Desde cuándo es la casa su riesgo?</h2>
    <p>Desde la <em>escritura</em>. Entre el CPCV y la escritura, el riesgo sigue siendo, en principio, del vendedor, que mantiene su seguro. El día de la escritura se invierte: si la casa se incendia esa noche, el problema es suyo. Por eso la póliza debe empezar ese mismo día — no el lunes siguiente, cuando se haya instalado.</p>
    <p>En la práctica: contrate con antelación, con fecha de efecto el día de la escritura. Si hay hipoteca, el banco pedirá la póliza antes de firmar, así que el calendario se impone solo.</p>
    <div class="callout">
      <span class="callout-label">Un matiz si compra sobre plano o en rehabilitación</span>
      En una obra nueva o una rehabilitación integral, el riesgo durante la obra corresponde al promotor y a su seguro de construcción. Pida por escrito qué está asegurado y hasta cuándo, y en qué fecha exacta pasa a usted.
    </div>
  </div>
</section>

<section class="section plain" aria-labelledby="banco">
  <div class="container narrow article-body">
    <h2 id="banco">Lo que pide el banco — y lo que no puede imponer</h2>
    <p>Con una hipoteca portuguesa, el banco exige habitualmente dos seguros:</p>
    <ul>
      <li><strong>Seguro de hogar</strong> (<em>multirriscos</em>) sobre el edificio, con el banco como beneficiario hasta el importe del préstamo. A veces exige además la cobertura de terremoto.</li>
      <li><strong>Seguro de vida</strong> vinculado al préstamo, sobre los titulares. Véase <a href="/es/seguro-vida-portugal/">seguro de vida en Portugal</a>.</li>
    </ul>
    <p>Lo que el banco exige es que los seguros existan con determinadas coberturas; usted puede presentar pólizas de otra aseguradora que cumplan esos requisitos. La póliza que se ofrece en la misma reunión que el préstamo está pensada para el proceso del banco — no se ha contrastado con su casa ni con su familia.</p>
    <p>Preparamos con gusto pólizas que cumplan los requisitos del banco y que, a la vez, estén hechas a la medida de la vivienda: coste de reconstrucción bien fijado, terremoto contratado o descartado con cifras, contenido y objetos de valor y responsabilidad civil suficiente.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="cifras">
  <div class="container narrow article-body">
    <h2 id="cifras">Tres cifras para la misma casa, y solo una sirve</h2>
    <ul>
      <li><strong>El precio de compra</strong> — lo que paga. Incluye suelo, ubicación, vistas y mercado.</li>
      <li><strong>El VPT</strong> — la base fiscal. Útil para los impuestos, irrelevante para el seguro.</li>
      <li><strong>El coste de reconstrucción</strong> — lo que costaría volver a construir. Es la única cifra que debe figurar como suma asegurada del edificio.</li>
    </ul>
    <p>En Lisboa, en Oporto o en la costa, el precio y el coste de reconstrucción pueden separarse mucho en ambas direcciones: un piso pequeño en Chiado vale mucho más de lo que costaría rehacerlo; una casa antigua con fachada de azulejo, muros de piedra y carpinterías de época puede costar más de reconstruir de lo que se pagó por ella. Por eso la suma se fija con criterios de construcción — y, en las viviendas de mayor valor, con la inspección de la aseguradora.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="reforma">
  <div class="container narrow article-body">
    <h2 id="reforma">La primera reforma</h2>
    <p>Muchos compradores latinoamericanos reforman nada más comprar, sobre todo en los centros históricos de Lisboa y Oporto, y a menudo dirigen la obra a distancia. Durante la obra, la casa es un riesgo distinto: andamios, cubiertas abiertas, instalaciones desconectadas, vivienda deshabitada. Las pólizas de hogar suelen limitar o excluir las coberturas mientras dura una obra importante.</p>
    <ul>
      <li><strong>Declare la obra</strong> a su aseguradora antes de empezar, con el alcance y la duración.</li>
      <li><strong>Pida al constructor</strong> su póliza de responsabilidad civil y, en obras de envergadura, la de todo riesgo construcción. Compruébelas; no las suponga.</li>
      <li><strong>Actualice las sumas</strong> al terminar: una casa reformada cuesta más de reconstruir.</li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="alquiler">
  <div class="container narrow article-body">
    <h2 id="alquiler">Si piensa alquilarla</h2>
    <p>Alquilar a turistas en Portugal exige un registro de <em>alojamento local</em> y un seguro obligatorio pensado para esa actividad: una póliza de hogar corriente no cubre el alquiler turístico sin declararlo. El alquiler de larga duración es otro riesgo, con sus propias coberturas. Díganos desde el principio qué uso tendrá la casa. Véase <a href="/es/seguro-alquiler-portugal/">alquilar su vivienda en Portugal</a>.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="fondos">
  <div class="container narrow article-body">
    <h2 id="fondos">La transferencia desde América: el momento más vulnerable</h2>
    <p>El fraude más frecuente en las compraventas internacionales no es sofisticado: un correo que parece del abogado, de la inmobiliaria o del vendedor anuncia un «cambio de cuenta» días antes de la escritura. La transferencia sale hacia la cuenta del estafador y, cuando se descubre, el dinero ya no está.</p>
    <ul>
      <li>Confirme siempre los datos bancarios por un canal distinto al del correo que los envía.</li>
      <li>Desconfíe de cualquier cambio de cuenta de última hora, venga de quien venga.</li>
      <li>Existen coberturas específicas para este riesgo. Véase <a href="/es/seguro-ciber-fraude-familiar/">ciberriesgo y fraude de la familia</a>.</li>
    </ul>
  </div>
</section>`, toSpain.property),
  faqTitle: 'Comprar casa en Portugal — preguntas sobre el seguro',
  faq: [
    {
      q: '¿Desde qué momento tengo que asegurar la casa?',
      a: '<p>Desde el día de la <em>escritura</em>, que es cuando la casa pasa a ser suya y su riesgo. Contrate la póliza con antelación y fecha de efecto ese mismo día; si hay hipoteca, el banco la pedirá antes de firmar.</p>',
    },
    {
      q: '¿Tengo que contratar los seguros con el banco?',
      a: '<p>No. El banco puede exigir que existan un seguro de hogar y, habitualmente, un seguro de vida con determinadas coberturas, pero usted puede presentar pólizas de otra aseguradora que cumplan esos requisitos.</p>',
    },
    {
      q: '¿Por qué importe aseguro la vivienda que compro?',
      a: '<p>Por el coste de reconstrucción, no por el precio de compra ni por el VPT. El precio incluye el suelo y la ubicación, que no se destruyen; el VPT es una base fiscal. En viviendas de mayor valor, la aseguradora hace una inspección para fijar la cifra con usted.</p>',
    },
    {
      q: 'Compro desde mi país con poder notarial. ¿Cambia algo para el seguro?',
      a: '<p>No en lo esencial: la póliza puede contratarse a su nombre, con NIF portugués, y con efecto en la fecha de la escritura. Asegúrese de que alguien de confianza recibe las llaves ese día y de que la póliza contempla que la casa puede quedar vacía al principio.</p>',
    },
    {
      q: 'Vamos a reformar antes de mudarnos. ¿Qué cambia en el seguro?',
      a: '<p>Hay que declarar la obra antes de empezar: las pólizas de hogar suelen limitar las coberturas durante una obra importante. Compruebe además los seguros del constructor y actualice las sumas aseguradas al terminar.</p>',
    },
    {
      q: '¿Me sirve mi seguro de hogar para alquilar la casa a turistas?',
      a: '<p>Normalmente no sin declararlo. El alquiler turístico requiere un registro de <em>alojamento local</em> y una póliza adecuada a esa actividad. Indíquenos el uso previsto desde el principio.</p>',
    },
  ],
  related: [
    { url: '/es/seguro-hogar-alto-valor/', label: 'Seguro de hogar en Portugal' },
    { url: '/es/vivienda-no-legalizada-portugal-seguro/', label: 'Asegurar una vivienda no legalizada en Portugal' },
    { url: '/es/seguro-vida-portugal/', label: 'Seguro de vida en Portugal' },
  ],
};
