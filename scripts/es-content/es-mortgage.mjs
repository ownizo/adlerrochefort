/**
 * /es/seguro-hipoteca-espana/
 *
 * Search intent: "seguros obligatorios hipoteca España", "seguro de vida
 * hipoteca obligatorio", "cambiar seguro hipoteca banco", "hipoteca no
 * residente España seguro" — a Latin American buyer financing a Spanish home
 * who is handed a FEIN with three insurance policies attached.
 *
 * The angle: under Ley 5/2019 the bank may reward insurance bought through
 * it (combined sales) but may not force its own insurer on the borrower; the
 * only insurance the law requires is damage cover on the mortgaged property.
 * Life and payment-protection cover are commercial choices. The Latin
 * American specifics: income earned outside Spain and in another currency,
 * which the bank weighs and the insurance does not fix; medical underwriting
 * for larger loans and older borrowers; and keeping the bank's beneficiary
 * designation consistent with the family's own estate planning across two
 * jurisdictions.
 */
import { BREADCRUMB_SPAIN, withSibling, toPortugal } from './shared.mjs';

export const ES_MORTGAGE_PAGE = {
  slug: 'seguro-hipoteca-espana',
  url: '/es/seguro-hipoteca-espana/',
  cluster: 'es-mortgage',
  title: 'Los seguros de la hipoteca en España | Adler & Rochefort',
  description:
    'Qué seguros exige de verdad una hipoteca española, cuáles son opcionales, cómo funcionan las bonificaciones y cómo cambiar de aseguradora.',
  keywords:
    'seguros obligatorios hipoteca España, seguro vida hipoteca obligatorio, cambiar seguro hipoteca banco, bonificación hipoteca seguros, Ley 5/2019 seguros vinculados, hipoteca no residente España, seguro amortización préstamo, seguro protección de pagos hipoteca',
  eyebrow: 'España · Hipoteca',
  h1: 'Los seguros de la hipoteca en España: lo obligatorio, lo bonificado y lo que puede elegir',
  standfirst:
    'Con la oferta de hipoteca llegan casi siempre tres o cuatro seguros. Uno lo exige la ley. Los demás los propone el banco a cambio de un tipo de interés más bajo. Saber cuál es cuál — y hacer la cuenta completa — puede valer mucho dinero a lo largo de veinte o veinticinco años.',
  published: '2026-10-02T09:00:00+00:00',
  modified: '2026-10-02T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_SPAIN, { name: 'Seguros de la hipoteca' }],
  pullquote: 'La bonificación se ve en la cuota. El coste del seguro, en el recibo de cada año.',
  schemaType: 'Article',
  formHeading: 'Revise los seguros de su hipoteca',
  formBranch: 'Español · Vida e hipoteca',
  formSubject: 'Seguros de la hipoteca en España',
  formCta: 'Solicitar revisión',
  formIntro:
    'Envíenos, si la tiene, la oferta del banco (FEIN) con los seguros que le proponen, o cuéntenos importe, plazo y edades de los titulares. Le respondemos por escrito con la comparación completa.',
  formPlaceholder:
    'Por ejemplo: hipoteca de 600.000 € a 25 años en Barcelona, dos titulares de 47 y 44; el banco bonifica el tipo con vida, hogar y protección de pagos.',
  sections: withSibling(`
<section class="section plain" aria-labelledby="mapa">
  <div class="container narrow article-body">
    <h2 id="mapa">El mapa: qué exige la ley y qué propone el banco</h2>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Seguros asociados a una hipoteca en España</caption>
        <thead>
          <tr><th scope="col">Seguro</th><th scope="col">¿Obligatorio?</th><th scope="col">Lo que conviene saber</th></tr>
        </thead>
        <tbody>
          <tr><td>Daños (hogar) sobre la vivienda</td><td>Sí, por ley</td><td>Puede contratarlo con cualquier aseguradora; el banco figura como beneficiario</td></tr>
          <tr><td>Vida (amortización)</td><td>No</td><td>Muy recomendable si hay familia; el banco lo bonifica, pero no puede imponer su aseguradora</td></tr>
          <tr><td>Protección de pagos (desempleo, incapacidad)</td><td>No</td><td>Útil para asalariados en España; poco sentido si sus ingresos son rentas o vienen de fuera</td></tr>
          <tr><td>Otros (salud, auto, alarma)</td><td>No</td><td>A veces forman parte del paquete de bonificaciones; sume su coste real</td></tr>
        </tbody>
      </table>
    </div>
    <p>Desde la Ley 5/2019 de contratos de crédito inmobiliario, el banco puede ofrecer condiciones mejores si contrata con él otros productos — lo que se llama una venta combinada —, pero <strong>debe aceptar pólizas de otras aseguradoras</strong> con coberturas equivalentes. El notario le explicará las condiciones antes de la firma, en el acta de transparencia.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="cuenta">
  <div class="container narrow article-body">
    <h2 id="cuenta">La cuenta que hay que hacer</h2>
    <p>La bonificación es real: unas décimas de tipo de interés durante toda la vida del préstamo. Pero los seguros del banco también se pagan cada año, y a menudo suben con la edad. La comparación honesta tiene tres columnas:</p>
    <ol class="process-steps">
      <li><div><strong>Ahorro en intereses</strong><span> con la bonificación, durante todo el plazo, según el cuadro de amortización.</span></div></li>
      <li><div><strong>Coste de los seguros del banco</strong><span> durante el mismo plazo, incluidas las subidas previsibles.</span></div></li>
      <li><div><strong>Coste de pólizas equivalentes</strong><span> fuera del banco — o mejores —, durante el mismo plazo.</span></div></li>
    </ol>
    <p>Muchas veces la bonificación compensa; otras, no. Y la calidad de la cobertura cuenta tanto como el precio: un seguro de vida con exclusiones amplias no protege a su familia, aunque cumpla para el banco.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="vida">
  <div class="container narrow article-body">
    <h2 id="vida">El seguro de vida de la hipoteca, visto desde América</h2>
    <ul>
      <li><strong>Capital decreciente o constante.</strong> El seguro del banco suele seguir la deuda pendiente. Un seguro de vida propio puede tener un capital mayor y constante, con el banco como beneficiario solo hasta la deuda y su familia por el resto.</li>
      <li><strong>Cuestionario y pruebas médicas.</strong> Para importes altos o edades avanzadas, la aseguradora puede pedir reconocimiento médico. Conviene empezar antes de tener fecha de firma.</li>
      <li><strong>Ingresos en otra moneda.</strong> Si sus ingresos están en dólares o en pesos, el banco lo tendrá en cuenta al concederle el préstamo. El seguro no cubre el riesgo de cambio; lo que sí puede hacer es que la deuda no recaiga sobre su familia si usted falta.</li>
      <li><strong>Coherencia con su planificación.</strong> Si su familia tiene patrimonio en dos continentes, los beneficiarios de los seguros de vida deben encajar con el resto de su planificación sucesoria. Vea con su asesor legal cómo tributa la indemnización en España para sus beneficiarios.</li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="cambiar">
  <div class="container narrow article-body">
    <h2 id="cambiar">Cambiar de seguro después de firmar</h2>
    <p>Puede hacerlo. Los seguros de daños y de vida anuales se pueden cambiar al vencimiento, oponiéndose a la renovación por escrito con al menos un mes de antelación y presentando al banco la nueva póliza con coberturas equivalentes y el banco como beneficiario. Compruebe en la escritura si el cambio afecta a la bonificación y en cuánto.</p>
    <p>Las primas únicas — un solo pago al principio por varios años de cobertura — merecen especial atención: si cancela o amortiza antes, pregunte por escrito qué parte de la prima no consumida le devuelven.</p>
  </div>
</section>`, toPortugal.life),
  faqTitle: 'Los seguros de la hipoteca en España — preguntas',
  faq: [
    {
      q: '¿Qué seguro es obligatorio para una hipoteca en España?',
      a: '<p>Solo el seguro de daños sobre la vivienda hipotecada. El seguro de vida, el de protección de pagos y cualquier otro son voluntarios, aunque el banco pueda ofrecer un tipo de interés más bajo si los contrata con él.</p>',
    },
    {
      q: '¿Puede el banco negarme la hipoteca si no contrato su seguro de vida?',
      a: '<p>Puede valorar en su análisis de riesgo que exista un seguro de vida, pero no puede obligarle a contratarlo con su aseguradora: debe aceptar una póliza equivalente de otra compañía. Lo que sí puede es no aplicarle la bonificación.</p>',
    },
    {
      q: 'Soy no residente y mis ingresos son de fuera. ¿Influye en los seguros?',
      a: '<p>Influye sobre todo en la concesión del préstamo. Para el seguro de vida cuentan la edad, la salud, el importe y, en algunos casos, el país de residencia. Algunas aseguradoras ponen condiciones a quien reside fuera de España; lo comprobamos antes de proponer.</p>',
    },
    {
      q: '¿Cómo cambio el seguro de vida que contraté con el banco?',
      a: '<p>Al vencimiento anual, oponiéndose a la renovación por escrito con al menos un mes de antelación y presentando al banco la nueva póliza con coberturas equivalentes y el banco como beneficiario. Antes, calcule si pierde bonificación y cuánto.</p>',
    },
  ],
  related: [
    { url: '/es/seguro-vida-espana/', label: 'Seguro de vida en España' },
    { url: '/es/comprar-casa-en-espana-seguro/', label: 'Comprar casa en España: los seguros' },
    { url: '/es/seguro-hogar-espana/', label: 'Seguro de hogar en España' },
  ],
};
