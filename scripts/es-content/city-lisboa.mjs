/**
 * /es/seguros-lisboa/
 *
 * Why this city page exists (October 2026): Lisbon and its coast (Cascais,
 * Estoril, Oeiras) are where Spanish-speaking Latin American families who
 * choose Portugal on a D7, D8 or investment route overwhelmingly settle, and
 * where the firm has its head office. Demand evidence is weaker than for
 * Madrid, Barcelona or Valencia — Portugal's Latin American population is
 * overwhelmingly Brazilian — which is why Porto was not given a page; Lisbon
 * is kept as the Portuguese counterpart the Spanish city pages point to.
 *
 * Local angles: the highest seismic exposure in mainland Portugal and old
 * building stock (Pombaline, gaioleiro), urban flooding (December 2022),
 * Alojamento Local restrictions in much of the city, and the Cascais family
 * villa. Pairs with the German Lisbon page where a reciprocal block exists.
 */
import { BREADCRUMB_PORTUGAL, withSibling, siblingCallout } from './shared.mjs';

const toMadrid = siblingCallout({
  label: '¿Duda entre Lisboa y Madrid?',
  text: 'Allí la póliza del visado es otra, y el Consorcio cubre el terremoto dentro de la póliza de hogar.',
  url: '/es/seguros-madrid/',
  linkText: 'Seguros en Madrid',
});

export const CITY_LISBOA_PAGE = {
  slug: 'seguros-lisboa',
  url: '/es/seguros-lisboa/',
  cluster: 'city-lisboa',
  title: 'Seguros en Lisboa y Cascais para latinoamericanos',
  description:
    'Seguros en Lisboa y Cascais para familias latinoamericanas: terremoto y edificios antiguos, inundaciones, Alojamento Local, salud para el visado D7 y D8.',
  keywords:
    'seguros Lisboa latinoamericanos, seguro hogar Lisboa, seguro casa Cascais, seguro terremoto Lisboa, seguro departamento Lisboa edificio antiguo, seguro médico Lisboa visado D7, seguro alojamiento local Lisboa, venezolanos en Lisboa seguros, mexicanos en Lisboa seguros',
  eyebrow: 'Portugal · Lisboa',
  h1: 'Seguros en Lisboa y Cascais para familias latinoamericanas',
  standfirst:
    'La mayoría de las familias latinoamericanas que eligen Portugal acaban en Lisboa o en la costa de Cascais y Estoril. Es también la zona del país con más riesgo sísmico, con muchos edificios centenarios y con el alquiler turístico más restringido. Lo que conviene asegurar aquí empieza por ahí.',
  published: '2026-10-02T09:00:00+00:00',
  modified: '2026-10-02T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_PORTUGAL, { name: 'Lisboa' }],
  pullquote: 'En Lisboa, el terremoto no es una hipótesis histórica. Es una línea de la póliza que hay que marcar.',
  schemaType: 'Article',
  formHeading: 'Consulte sus seguros en Lisboa',
  formBranch: '',
  formSubject: 'Seguros en Lisboa',
  formCta: 'Enviar consulta',
  formIntro:
    'Cuéntenos en qué zona vive o va a vivir — Lisboa, Cascais, Estoril, Oeiras —, si es compra o alquiler, con qué visado y quién forma la familia. Le respondemos por escrito y en español.',
  formPlaceholder:
    'Por ejemplo: llegamos de Ciudad de México con visado D7, alquilamos en Estoril mientras compramos un departamento en Príncipe Real; dos adultos y dos hijos.',
  sections: withSibling(`
<section class="section plain" aria-labelledby="sismo">
  <div class="container narrow article-body">
    <h2 id="sismo">El terremoto y los edificios antiguos</h2>
    <p>La región de Lisboa y el valle del Tajo es la zona de mayor riesgo sísmico del Portugal continental, y gran parte del centro — Baixa, Chiado, Príncipe Real, Estrela, Lapa — está construido en edificios de los siglos XVIII al XX: pombalinos, <em>gaioleiros</em>, muchos rehabilitados por dentro.</p>
    <ul>
      <li><strong>El terremoto no viene en la póliza.</strong> La garantía de <em>fenómenos sísmicos</em> se contrata aparte, con una franquicia que suele ser un porcentaje del capital. En Lisboa conviene decidirlo con la cifra delante. Véase <a href="/es/seguro-terremoto-portugal/">el terremoto en Portugal</a>.</li>
      <li><strong>El <em>condomínio</em> suele asegurar solo el incendio</strong>, que es el mínimo legal. Pida la póliza al administrador antes de contratar la suya.</li>
      <li><strong>La rehabilitación eleva el capital.</strong> Un departamento rehabilitado en un edificio antiguo cuesta mucho reconstruir; el capital del edificio en su póliza debe reflejarlo.</li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="agua">
  <div class="container narrow article-body">
    <h2 id="agua">Agua: del vecino y de la calle</h2>
    <p>En los edificios antiguos de Lisboa, los daños por agua entre pisos son el siniestro más frecuente. Y la ciudad conoce también las inundaciones urbanas: en diciembre de 2022, lluvias intensas inundaron calles y plantas bajas en varias zonas de Lisboa y alrededores.</p>
    <ul>
      <li>Compruebe que su póliza cubre la rotura de tuberías, la localización de la avería y los daños al vecino.</li>
      <li>En plantas bajas y garajes, mire cómo trata la póliza la entrada de agua desde la calle; los fenómenos atmosféricos y las inundaciones tienen sus propias condiciones.</li>
      <li>En Portugal no hay Consorcio: lo que no está en su póliza no lo paga nadie.</li>
    </ul>
  </div>
</section>

<section class="section plain" aria-labelledby="cascais">
  <div class="container narrow article-body">
    <h2 id="cascais">La villa familiar en Cascais y Estoril</h2>
    <p>Muchas familias con hijos eligen la costa por los colegios internacionales y el espacio. Una villa con piscina y jardín en Cascais, Estoril o la Quinta da Marinha se asegura con la lógica de las viviendas de alto valor: inspección y coste de reconstrucción, sin regla proporcional, arte y joyas a valor convenido, alojamiento alternativo equivalente y responsabilidad civil familiar con límites de varios millones. Véase <a href="/es/seguro-hogar-alto-valor/">seguro de hogar de alto valor en Portugal</a>.</p>
    <p>La piscina es la principal fuente de responsabilidad en una casa con invitados y niños; vallado, cubierta y vigilancia cuentan para la aseguradora.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="al-salud">
  <div class="container narrow article-body">
    <h2 id="al-salud">Alojamento Local, salud y visado</h2>
    <ul>
      <li><strong>Alojamento Local</strong>: Lisboa limita los nuevos registros en buena parte de sus <em>freguesias</em>. Compruebe la situación de la zona antes de comprar para alquilar a turistas. Si el registro existe, la ley exige un seguro de responsabilidad civil específico. Véase <a href="/es/seguro-alquiler-portugal/">alquilar su vivienda en Portugal</a>.</li>
      <li><strong>Visado D7 o D8</strong>: para la solicitud, un seguro de viaje con gastos médicos y repatriación; la póliza de salud portuguesa llega con el domicilio en Portugal y el NIF de cada asegurado. Véase <a href="/es/seguro-medico-visado-portugal/">seguro médico para el visado portugués</a>.</li>
      <li><strong>Salud</strong>: Lisboa concentra los principales hospitales privados del país, lo que hace que una póliza portuguesa con buena red funcione bien aquí. Véase <a href="/es/seguro-salud-internacional/">seguro de salud en Portugal</a>.</li>
    </ul>
  </div>
</section>`, toMadrid),
  faqTitle: 'Seguros en Lisboa — preguntas',
  faq: [
    {
      q: '¿Debo contratar el terremoto en Lisboa?',
      a: '<p>Es una decisión suya, pero Lisboa es la zona de mayor riesgo sísmico del Portugal continental y la cobertura no viene incluida. Le damos el coste adicional por escrito para que decida con la cifra delante.</p>',
    },
    {
      q: 'Compro un departamento en un edificio antiguo. ¿Qué asegura el condominio?',
      a: '<p>Normalmente solo el incendio, que es lo que exige la ley. Pida la póliza al administrador: lo que no cubra el condominio — agua, terremoto, la parte construida de su fracción — debe ir en su póliza.</p>',
    },
    {
      q: '¿Puedo comprar en Lisboa para alquilar a turistas?',
      a: '<p>Depende de la zona: Lisboa limita los nuevos registros de Alojamento Local en muchas freguesias. Compruébelo antes de comprar. Si el registro existe, necesitará el seguro de responsabilidad civil que exige la ley.</p>',
    },
    {
      q: '¿Tienen oficina en Lisboa?',
      a: '<p>Sí, nuestra sede está en Lisboa, además de la oficina de Lagos. Trabajamos por escrito y en español, esté usted en Lisboa o todavía en su país.</p>',
    },
  ],
  related: [
    { url: '/es/seguro-terremoto-portugal/', label: 'El terremoto en Portugal' },
    { url: '/es/seguro-hogar-alto-valor/', label: 'Seguro de hogar en Portugal' },
    { url: '/es/mudarse-a-portugal-seguros/', label: 'Mudarse a Portugal desde América Latina' },
  ],
};
