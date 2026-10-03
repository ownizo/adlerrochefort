/**
 * /es/seguro-alquiler-espana/
 *
 * Search intent: "seguro de impago de alquiler España", "seguro vivienda
 * alquilada propietario no residente", "seguro alquiler vacacional
 * obligatorio" — a Latin American investor who bought in Madrid, Valencia or
 * Málaga to rent, often while still living in America.
 *
 * The angle: the owner who is 9,000 km away. Long-term lets (rent-default
 * insurance and its legal-defence component, the limits the 2023 housing law
 * places on extra guarantees from tenants), holiday lets (regional licensing,
 * the state single register, and the liability insurance several regions
 * require), and the home policy that must say the property is let. Tax for
 * non-resident landlords is mentioned as a separate obligation, never
 * advised on.
 */
import { BREADCRUMB_SPAIN, withSibling, toPortugal } from './shared.mjs';

export const ES_LANDLORD_PAGE = {
  slug: 'seguro-alquiler-espana',
  url: '/es/seguro-alquiler-espana/',
  cluster: 'es-landlord',
  title: 'Seguro para propietarios que alquilan en España',
  description:
    'Alquilar su vivienda en España desde América Latina: seguro de impago, defensa jurídica, alquiler vacacional y la póliza de hogar de una vivienda alquilada.',
  keywords:
    'seguro impago alquiler España, seguro propietario vivienda alquilada, seguro alquiler no residente España, seguro vivienda uso turístico obligatorio, seguro alquiler vacacional España, defensa jurídica desahucio, invertir vivienda España latinoamericanos, seguro piso alquilado Madrid',
  eyebrow: 'España · Alquiler',
  h1: 'Alquilar su vivienda en España desde el otro lado del Atlántico',
  standfirst:
    'Comprar en Madrid, Valencia o Málaga para alquilar es una inversión habitual entre familias latinoamericanas. Lo que no suele calcularse es qué pasa cuando el inquilino deja de pagar, el huésped rompe algo o el agua inunda al vecino — y usted está a nueve mil kilómetros.',
  published: '2026-10-02T09:00:00+00:00',
  modified: '2026-10-02T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_SPAIN, { name: 'Seguro de alquiler' }],
  pullquote: 'Un impago se resuelve con abogados y meses. El seguro decide quién los paga.',
  schemaType: 'Article',
  formHeading: 'Solicite su propuesta para la vivienda alquilada',
  formBranch: 'Español · Alquiler',
  formSubject: 'Seguro de alquiler en España',
  formCta: 'Solicitar propuesta',
  formIntro:
    'Cuéntenos dónde está la vivienda, si el alquiler es de larga duración o vacacional, la renta aproximada y quién la gestiona en España. Le respondemos por escrito con las coberturas que tienen sentido.',
  formPlaceholder:
    'Por ejemplo: dos pisos en Valencia alquilados a largo plazo, renta de 1.300 € cada uno, vivimos en Santiago de Chile y los gestiona una agencia.',
  sections: withSibling(`
<section class="section plain" aria-labelledby="declarar">
  <div class="container narrow article-body">
    <h2 id="declarar">Primero: la póliza de hogar debe saber que la casa está alquilada</h2>
    <p>Un multirriesgo hogar contratado como vivienda propia no está pensado para una vivienda alquilada. Si no se declara, la aseguradora puede discutir el siniestro. La póliza del propietario que alquila cubre:</p>
    <ul>
      <li><strong>El continente</strong> — el edificio, las instalaciones, la cocina, los baños —, que es lo que el propietario debe asegurar.</li>
      <li><strong>El mobiliario del propietario</strong>, si alquila amueblado.</li>
      <li><strong>La responsabilidad civil como propietario</strong>: el balcón que se desprende, la instalación de gas defectuosa.</li>
    </ul>
    <p>Lo que no cubre son los bienes del inquilino ni la responsabilidad del inquilino: eso es cosa de su propia póliza, que muchos contratos de alquiler exigen.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="impago">
  <div class="container narrow article-body">
    <h2 id="impago">Larga duración: el seguro de impago de alquiler</h2>
    <p>Es el seguro que más preguntan los propietarios que viven fuera, y con razón. En España, recuperar una vivienda de un inquilino que no paga exige un procedimiento judicial que puede durar meses. El seguro de impago cubre normalmente:</p>
    <ul>
      <li><strong>Las rentas impagadas</strong>, durante un número máximo de meses y con un periodo de carencia inicial.</li>
      <li><strong>La defensa jurídica</strong>: abogado y procurador para reclamar y, si es necesario, desahuciar.</li>
      <li>Según la póliza, <strong>los daños causados por el inquilino</strong> a la vivienda, con un límite.</li>
    </ul>
    <p>Antes de aceptar al inquilino, la aseguradora estudia su solvencia, y su aceptación es condición de la cobertura. Eso tiene una ventaja que se subestima: un filtro profesional antes de firmar.</p>
    <div class="callout">
      <span class="callout-label">Lo que ya no puede pedir al inquilino</span>
      La ley de vivienda de 2023 limita las garantías adicionales que puede exigir al inquilino en el alquiler de vivienda habitual, además de la fianza legal. Por eso el seguro de impago — que paga el propietario — ha ganado peso frente a los avales y depósitos extra.
    </div>
  </div>
</section>

<section class="section plain" aria-labelledby="vacacional">
  <div class="container narrow article-body">
    <h2 id="vacacional">Alquiler vacacional: licencia, registro y seguro</h2>
    <p>El alquiler turístico en España lo regula cada comunidad autónoma, y muchos municipios añaden sus propias restricciones. Además, desde 2025 existe un registro único estatal para los alquileres de corta duración, cuyo número exigen las plataformas.</p>
    <ul>
      <li><strong>Varias comunidades autónomas exigen un seguro de responsabilidad civil</strong> para las viviendas de uso turístico, con límites mínimos propios.</li>
      <li><strong>La póliza debe cubrir la actividad turística</strong>: un multirriesgo de vivienda alquilada a largo plazo no está pensado para huéspedes que cambian cada semana.</li>
      <li><strong>Las garantías de las plataformas</strong> no sustituyen al seguro: tienen condiciones, límites y exclusiones propias.</li>
    </ul>
    <p>Para villas de lujo con alquiler vacacional, véase <a href="/es/seguro-alquiler-villa-lujo/">alquiler vacacional de una villa de lujo</a>.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="distancia">
  <div class="container narrow article-body">
    <h2 id="distancia">Gestionar a distancia</h2>
    <ul>
      <li><strong>Alguien en España</strong> — una agencia, un administrador, un familiar — que pueda abrir la puerta al perito o al fontanero. Indíquelo en la póliza y en el contrato con el inquilino.</li>
      <li><strong>Los recibos domiciliados</strong> en una cuenta que usted controle, para que la póliza no se anule por un recibo devuelto.</li>
      <li><strong>Las obligaciones fiscales</strong> del propietario no residente son independientes del seguro y conviene llevarlas con un asesor en España.</li>
      <li><strong>Un único interlocutor para los siniestros</strong>, que los gestione por escrito y en español mientras usted está fuera. Es lo que hacemos.</li>
    </ul>
  </div>
</section>`, toPortugal.rental),
  faqTitle: 'Seguro de alquiler en España — preguntas',
  faq: [
    {
      q: '¿Quién paga el seguro de impago, el propietario o el inquilino?',
      a: '<p>El propietario, que es el beneficiario. En el alquiler de vivienda habitual, la ley limita lo que puede exigirse al inquilino además de la fianza, y el seguro de impago es la forma habitual de protegerse.</p>',
    },
    {
      q: '¿Cubre el seguro de impago desde el primer mes?',
      a: '<p>Normalmente hay un periodo de carencia desde la contratación, y la cobertura depende de que la aseguradora haya aceptado al inquilino. Lea los plazos de comunicación del impago: si avisa tarde, puede perder parte de la cobertura.</p>',
    },
    {
      q: '¿Es obligatorio un seguro para el alquiler turístico?',
      a: '<p>Depende de la comunidad autónoma: varias exigen un seguro de responsabilidad civil para las viviendas de uso turístico. Aunque no fuera obligatorio, es imprescindible que la póliza cubra la actividad turística.</p>',
    },
    {
      q: 'Vivo en mi país. ¿Puedo contratar desde allí?',
      a: '<p>Sí. Necesitará el NIE y, en la práctica, una cuenta de la zona SEPA para domiciliar los recibos. Toda la gestión puede hacerse por escrito y a distancia.</p>',
    },
  ],
  related: [
    { url: '/es/seguro-hogar-espana/', label: 'Seguro de hogar en España' },
    { url: '/es/seguro-alquiler-villa-lujo/', label: 'Alquiler vacacional de una villa de lujo' },
    { url: '/es/comprar-casa-en-espana-seguro/', label: 'Comprar casa en España: los seguros' },
  ],
};
