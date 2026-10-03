/**
 * /es/seguro-vida-portugal/
 *
 * Search intent: "seguro de vida Portugal crédito habitación", "seguro de
 * vida hipoteca Portugal extranjeros", "seguro de vida Portugal
 * latinoamericanos" — a Latin American buyer with a Portuguese mortgage, or a
 * family settled in Portugal, asking what a life policy is for and who
 * chooses it.
 *
 * The angle: in Portugal the bank requires life cover on a housing loan but
 * must accept a policy from another insurer that meets its conditions, and
 * may reward its own with a lower spread. The 2021 "right to be forgotten"
 * law is mentioned, hedged, for people who have overcome serious illness.
 * For the transatlantic family: liquidity while an estate in two continents
 * is settled, a precise beneficiary clause, and the general point that
 * Portugal has no Spanish-style inheritance tax (stamp duty on gratuitous
 * transfers, with exemptions for close family) — framed as general
 * information and sent to a tax adviser.
 */
import { BREADCRUMB_PORTUGAL, withSibling, toSpain } from './shared.mjs';

export const PT_LIFE_PAGE = {
  slug: 'seguro-vida-portugal',
  url: '/es/seguro-vida-portugal/',
  cluster: 'pt-life',
  title: 'Seguro de vida en Portugal: hipoteca y familia',
  description:
    'Seguro de vida en Portugal: lo que exige el banco en el crédito a la vivienda, su derecho a elegir aseguradora y la protección de la familia.',
  keywords:
    'seguro de vida Portugal, seguro de vida crédito habitación Portugal, seguro vida hipoteca Portugal extranjeros, cambiar seguro de vida banco Portugal, seguro de vida Portugal latinoamericanos, derecho al olvido seguro Portugal, beneficiarios seguro de vida Portugal',
  eyebrow: 'Portugal · Vida',
  h1: 'Seguro de vida en Portugal: para el banco y para su familia',
  standfirst:
    'Si compra con hipoteca en Portugal, el banco le pedirá un seguro de vida. Lo que no siempre le dirá es que la aseguradora puede elegirla usted — ni que esa póliza puede proteger, además de al banco, a la familia que se queda a este lado del Atlántico.',
  published: '2026-10-02T09:00:00+00:00',
  modified: '2026-10-02T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_PORTUGAL, { name: 'Seguro de vida' }],
  pullquote: 'El banco necesita que la deuda quede pagada. Su familia necesita bastante más que eso.',
  schemaType: 'Article',
  formHeading: 'Solicite su propuesta de seguro de vida en Portugal',
  formBranch: 'Español · Vida e hipoteca',
  formSubject: 'Seguro de vida en Portugal',
  formCta: 'Solicitar propuesta',
  formIntro:
    'Cuéntenos el importe y plazo del préstamo (si lo hay), las edades de los titulares y qué quiere proteger además de la deuda. Los datos de salud se dan después, directamente a la aseguradora.',
  formPlaceholder:
    'Por ejemplo: crédito de 450.000 € a 30 años en Oporto, dos titulares de 41 y 39; el banco nos ofrece su seguro y queremos comparar.',
  sections: withSibling(`
<section class="section plain" aria-labelledby="banco">
  <div class="container narrow article-body">
    <h2 id="banco">Lo que exige el banco en el crédito a la vivienda</h2>
    <p>Para conceder un <em>crédito habitação</em>, los bancos portugueses exigen normalmente dos seguros: el de la vivienda (<em>multirriscos</em>, o al menos incendio) y el de vida de los titulares, con el banco como beneficiario hasta la deuda pendiente.</p>
    <ul>
      <li><strong>Usted puede elegir la aseguradora.</strong> El banco puede fijar las coberturas y capitales mínimos, pero debe aceptar una póliza de otra compañía que los cumpla.</li>
      <li><strong>El banco puede bonificar el diferencial</strong> si contrata sus seguros. Haga la cuenta completa: ahorro en intereses durante todo el préstamo frente al coste de los seguros del banco durante el mismo tiempo.</li>
      <li><strong>Puede cambiar después</strong>, presentando al banco una póliza equivalente. Compruebe antes si pierde la bonificación y cuánto vale.</li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="familia">
  <div class="container narrow article-body">
    <h2 id="familia">Lo que el seguro del banco no hace</h2>
    <p>El seguro de vida asociado al crédito está pensado para el banco: su capital sigue la deuda y, cuando la deuda baja, la protección baja con ella. Para una familia latinoamericana instalada en Portugal, lo que suele faltar es lo demás:</p>
    <ul>
      <li><strong>Liquidez mientras se resuelve la herencia.</strong> Con bienes en Portugal y en América, los trámites sucesorios llevan meses en los dos lados. La indemnización de un seguro de vida se paga directamente a los beneficiarios.</li>
      <li><strong>Mantener a la familia</strong> — colegios, alquiler, el día a día — si falta quien genera los ingresos.</li>
      <li><strong>Un capital constante</strong>, no decreciente, con el banco como beneficiario solo hasta la deuda y la familia por el resto.</li>
    </ul>
  </div>
</section>

<section class="section plain" aria-labelledby="salud">
  <div class="container narrow article-body">
    <h2 id="salud">Salud, edad y el derecho al olvido</h2>
    <p>La aseguradora pide un cuestionario de salud y, para capitales altos o edades avanzadas, pruebas médicas. Conviene empezar antes de tener fecha de escritura: una valoración médica puede tardar semanas.</p>
    <p>Desde 2021, la ley portuguesa protege a las personas que han superado o mitigado situaciones de riesgo de salud agravado — por ejemplo, un cáncer — en los seguros asociados al crédito: pasado un determinado plazo desde el final del tratamiento sin recaída, esa información no puede usarse para agravar las condiciones ni para rechazar. Los plazos y requisitos concretos dependen del caso; si le afecta, díganoslo antes de pedir propuestas.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="beneficiarios">
  <div class="container narrow article-body">
    <h2 id="beneficiarios">Beneficiarios y fiscalidad</h2>
    <p>Evite la fórmula genérica «herederos legales». En una familia con hijos en varios países, con distintas uniones o con una ley sucesoria que puede no ser la portuguesa, designe a cada beneficiario por su nombre y documento, con su porcentaje, y prevea qué pasa si alguno falta antes.</p>
    <p>En cuanto a impuestos: Portugal no tiene un impuesto de sucesiones como el español; las transmisiones gratuitas están sujetas al impuesto del sello (<em>imposto do selo</em>), con exenciones para el cónyuge, los descendientes y los ascendientes. Es información general: no damos asesoramiento fiscal, y la estructura de la póliza debe encajar con lo que le recomiende su asesor en Portugal y en su país.</p>
  </div>
</section>`, toSpain.life),
  faqTitle: 'Seguro de vida en Portugal — preguntas',
  faq: [
    {
      q: '¿Es obligatorio el seguro de vida para una hipoteca en Portugal?',
      a: '<p>Los bancos lo exigen normalmente como condición del crédito a la vivienda. Lo que no pueden imponer es su propia aseguradora: deben aceptar una póliza de otra compañía que cumpla las coberturas y capitales exigidos.</p>',
    },
    {
      q: '¿Puedo cambiar el seguro de vida que contraté con el banco?',
      a: '<p>Sí, presentando al banco una póliza equivalente con el banco como beneficiario. Compruebe antes si el cambio afecta a la bonificación del diferencial y haga la cuenta para el resto del préstamo.</p>',
    },
    {
      q: 'Mis ingresos son de fuera de Portugal. ¿Influye?',
      a: '<p>Influye sobre todo en la concesión del crédito. Para el seguro de vida cuentan la edad, la salud y el capital. Algunas aseguradoras ponen condiciones según el país de residencia o de actividad; lo comprobamos antes de proponer.</p>',
    },
    {
      q: 'Tuve un cáncer hace años. ¿Me pueden rechazar?',
      a: '<p>La ley portuguesa protege desde 2021 a quien ha superado situaciones de riesgo de salud agravado en los seguros asociados al crédito, pasado un plazo desde el final del tratamiento sin recaída. Cuéntenos su caso antes de pedir propuestas.</p>',
    },
  ],
  related: [
    { url: '/es/comprar-casa-en-portugal-seguro/', label: 'Comprar casa en Portugal' },
    { url: '/es/seguro-salud-internacional/', label: 'Seguro de salud en Portugal' },
    { url: '/es/seguros-portugal/', label: 'Seguros en Portugal: visión general' },
  ],
};
