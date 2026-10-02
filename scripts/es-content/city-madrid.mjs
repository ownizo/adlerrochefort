/**
 * /es/seguros-madrid/
 *
 * Why this city page exists (October 2026, demand checked before writing):
 * the Comunidad de Madrid had about 1.04 million residents born in
 * Spanish-speaking Latin America on 1 January 2024 (INE), roughly one in
 * seven inhabitants; Latin Americans made about a fifth of foreign home
 * purchases in Madrid in 2019–2024, concentrated in Centro, Chamberí and
 * Salamanca, with Mexicans, Venezuelans and Argentines the leading
 * nationalities. It is the single largest Latin American market for this
 * cluster.
 *
 * Local angles: the finca señorial in Salamanca / Chamberí (old pipes,
 * the comunidad's policy, water damage between neighbours), empty homes in
 * August and while the family is in America, the low-emission zone and the
 * DGT environmental label when buying a car, and the dense private hospital
 * network that makes a cuadro-médico policy work well here.
 */
import { BREADCRUMB_SPAIN, withSibling, siblingCallout } from './shared.mjs';

const toLisboa = siblingCallout({
  label: '¿Duda entre Madrid y Lisboa?',
  text: 'Otro visado, otra sanidad y una póliza de hogar donde el terremoto no viene de serie.',
  url: '/es/seguros-lisboa/',
  linkText: 'Seguros en Lisboa',
});

export const CITY_MADRID_PAGE = {
  slug: 'seguros-madrid',
  url: '/es/seguros-madrid/',
  cluster: 'city-madrid',
  title: 'Seguros en Madrid para latinoamericanos | Adler & Rochefort',
  description:
    'Seguros en Madrid para familias latinoamericanas: piso en una finca antigua, casa vacía en verano, salud para el visado, auto y zona de bajas emisiones.',
  keywords:
    'seguros Madrid latinoamericanos, seguro hogar Madrid, seguro piso barrio de Salamanca, seguro vivienda Chamberí, seguro médico Madrid extranjeros, seguro salud Madrid visado, seguro coche Madrid extranjero, venezolanos en Madrid seguros, mexicanos en Madrid seguros, colombianos en Madrid seguros',
  eyebrow: 'España · Madrid',
  h1: 'Seguros en Madrid para familias latinoamericanas',
  standfirst:
    'Más de un millón de personas nacidas en Hispanoamérica viven en la Comunidad de Madrid, y buena parte de las familias con patrimonio compran en Salamanca, Chamberí o el centro. Lo que conviene asegurar aquí no es lo mismo que en la costa — ni que en Bogotá o Ciudad de México.',
  published: '2026-10-02T09:00:00+00:00',
  modified: '2026-10-02T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_SPAIN, { name: 'Madrid' }],
  pullquote: 'En una finca de 1910, el siniestro más probable no es el robo. Es el agua del vecino de arriba.',
  schemaType: 'Article',
  formHeading: 'Consulte sus seguros en Madrid',
  formBranch: '',
  formSubject: 'Seguros en Madrid',
  formCta: 'Enviar consulta',
  formIntro:
    'Cuéntenos en qué zona de Madrid vive o va a vivir, si es compra o alquiler, con qué visado y quién forma la familia. Le respondemos por escrito con lo que conviene asegurar.',
  formPlaceholder:
    'Por ejemplo: compramos un piso de 1920 en el barrio de Salamanca, llegamos de Caracas con visado no lucrativo, dos adultos y dos hijos; pasaremos julio y agosto fuera.',
  sections: withSibling(`
<section class="section plain" aria-labelledby="finca">
  <div class="container narrow article-body">
    <h2 id="finca">El piso en una finca antigua</h2>
    <p>Muchas familias latinoamericanas compran en edificios de principios del siglo XX — las fincas señoriales de Salamanca, Chamberí, Almagro o Justicia —: techos altos, carpinterías de época, una reforma integral reciente por dentro y bajantes centenarias por fuera.</p>
    <ul>
      <li><strong>El agua es el siniestro estrella.</strong> Las fugas entre pisos son lo que más reclaman los edificios de Madrid. Su póliza debe cubrir los daños que usted sufre y los que causa al vecino, y conviene saber qué cubre la de la comunidad.</li>
      <li><strong>La reforma eleva el continente.</strong> Una cocina, unos baños y unas carpinterías de calidad cuestan mucho reponer. El continente de su piso debe incluirlos, no solo la parte proporcional del edificio.</li>
      <li><strong>Pida la póliza de la comunidad.</strong> Al administrador de fincas: sumas, coberturas y si incluye la responsabilidad civil de la comunidad. Sin ella, no sabe dónde termina lo común y empieza lo suyo.</li>
    </ul>
    <p>Si la vivienda es una casa en La Moraleja, Pozuelo, Aravaca o Majadahonda, la lógica es la de una vivienda de alto valor: coste de reconstrucción, piscina, jardín y medidas de seguridad. Véase <a href="/es/seguro-hogar-espana/">seguro de hogar en España</a>.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="vacia">
  <div class="container narrow article-body">
    <h2 id="vacia">Agosto en Madrid, Navidad en casa</h2>
    <p>Madrid se vacía en agosto, y muchas familias latinoamericanas pasan además las fiestas en su país. Una vivienda vacía varias semanas tiene dos riesgos y una cláusula:</p>
    <ul>
      <li><strong>El robo</strong> en viviendas cerradas, sobre todo en plantas bajas y áticos.</li>
      <li><strong>La ocupación</strong>, que preocupa a muchos propietarios. Algunas pólizas incluyen defensa jurídica para recuperar la posesión.</li>
      <li><strong>La cláusula de deshabitación</strong>, que define a partir de cuántos días seguidos se limitan el robo o los daños por agua. Declare el uso real y cierre la llave de paso al salir.</li>
    </ul>
  </div>
</section>

<section class="section plain" aria-labelledby="salud">
  <div class="container narrow article-body">
    <h2 id="salud">Salud: Madrid es donde mejor funciona un cuadro médico</h2>
    <p>Madrid concentra una de las redes de hospitales y clínicas privadas más densas de Europa. Eso hace que una póliza de cuadro médico funcione especialmente bien aquí — también la que se contrata para el visado, siempre que sea completa, sin copagos ni carencias. Lo que hay que mirar es si el cuadro incluye los hospitales y especialistas que la familia quiere, cerca de casa y del colegio.</p>
    <p>Si quiere seguir atendiéndose en su país o en Miami, la póliza española no basta: necesitará una cobertura internacional. Véanse <a href="/es/seguro-medico-visado-espana/">seguro médico para el visado</a> y <a href="/es/seguro-salud-espana/">seguro de salud en España</a>.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="auto">
  <div class="container narrow article-body">
    <h2 id="auto">El auto en Madrid</h2>
    <ul>
      <li><strong>Su permiso de origen sirve seis meses</strong> desde que obtiene la residencia. Las citas de canje en Madrid se agotan: pídala pronto. Véase <a href="/es/seguro-coche-espana/">seguro de auto en España</a>.</li>
      <li><strong>La zona de bajas emisiones</strong> restringe en la ciudad a los vehículos sin etiqueta ambiental de la DGT. Si compra un auto, compruebe la etiqueta antes que el color.</li>
      <li><strong>El garaje cuenta.</strong> Dónde duerme el vehículo influye en la prima y en la cobertura de robo; declárelo bien.</li>
    </ul>
  </div>
</section>`, toLisboa),
  faqTitle: 'Seguros en Madrid — preguntas',
  faq: [
    {
      q: '¿Qué seguro necesito para un piso en una finca antigua de Madrid?',
      a: '<p>Un multirriesgo hogar que cubra el contenido, la parte privativa del continente — reformas, cocina, baños, carpinterías — y la responsabilidad civil, con especial atención a los daños por agua entre vecinos. Pida además la póliza de la comunidad para saber qué cubre ella.</p>',
    },
    {
      q: 'Nos vamos todo el verano. ¿Pierdo la cobertura?',
      a: '<p>No necesariamente, pero las cláusulas de deshabitación pueden limitar el robo y los daños por agua a partir de un número de días. Declare el uso real al contratar, cierre la llave de paso y, si puede, conecte la alarma a una central.</p>',
    },
    {
      q: '¿Sirve en Madrid la póliza del visado para ir al médico?',
      a: '<p>Sí, si se eligió bien: una póliza de cuadro médico completa, sin copagos ni carencias, da acceso a la red privada de Madrid. Compruebe antes que el cuadro incluya los hospitales y especialistas que la familia usará.</p>',
    },
    {
      q: '¿Pueden ayudarme también con la casa que tengo en mi país?',
      a: '<p>Trabajamos en España y en Portugal. Sí tenemos en cuenta lo que conserva en América — una responsabilidad civil de ámbito mundial, objetos de valor que viajan, salud internacional — para que las pólizas de los dos lados no se pisen ni dejen huecos.</p>',
    },
  ],
  related: [
    { url: '/es/seguro-hogar-espana/', label: 'Seguro de hogar en España' },
    { url: '/es/seguro-medico-visado-espana/', label: 'Seguro médico para el visado español' },
    { url: '/es/comprar-casa-en-espana-seguro/', label: 'Comprar casa en España' },
  ],
};
