/**
 * /es/seguros-barcelona/
 *
 * Why this city page exists (October 2026, demand checked before writing):
 * Barcelona's municipal register shows Argentines, Colombians, Peruvians and
 * Venezuelans leading the city's foreign-born population, which is now about
 * 31 % of residents; Catalonia is one of the three regions with the most
 * Colombians in Spain. A Latin American market in its own right.
 *
 * Local angles: the Eixample building (old installations, water damage, the
 * comunidad), street theft and what a home policy does and does not cover
 * outside the home, the city's announced end of tourist-flat licences
 * (hedged: announced for November 2028, check the current position), and
 * the Catalan specifics a buyer meets. Kept factual and hedged.
 */
import { BREADCRUMB_SPAIN, withSibling, siblingCallout } from './shared.mjs';

const toPortugal = siblingCallout({
  label: '¿Duda entre Barcelona y Lisboa?',
  text: 'Otro visado, otra sanidad y una póliza de hogar donde el terremoto no viene de serie.',
  url: '/es/seguros-lisboa/',
  linkText: 'Seguros en Lisboa',
});

export const CITY_BARCELONA_PAGE = {
  slug: 'seguros-barcelona',
  url: '/es/seguros-barcelona/',
  cluster: 'city-barcelona',
  title: 'Seguros en Barcelona para latinoamericanos | Adler & Rochefort',
  description:
    'Seguros en Barcelona para familias latinoamericanas: piso en el Eixample, robos y objetos de valor, salud para el visado, alquiler turístico y auto.',
  keywords:
    'seguros Barcelona latinoamericanos, seguro hogar Barcelona, seguro piso Eixample, seguro médico Barcelona extranjeros, seguro salud Barcelona visado, seguro alquiler turístico Barcelona, argentinos en Barcelona seguros, colombianos en Barcelona seguros, venezolanos en Barcelona seguros',
  eyebrow: 'España · Barcelona',
  h1: 'Seguros en Barcelona para familias latinoamericanas',
  standfirst:
    'Argentinos, colombianos, peruanos y venezolanos encabezan la población nacida fuera de España en Barcelona. Para quien llega con patrimonio, la ciudad tiene tres particularidades de seguro: el edificio del Eixample, el robo fuera de casa y un alquiler turístico con fecha de caducidad anunciada.',
  published: '2026-10-02T09:00:00+00:00',
  modified: '2026-10-02T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_SPAIN, { name: 'Barcelona' }],
  pullquote: 'Un reloj robado en la calle no es un robo en la vivienda. Para la póliza, la diferencia es enorme.',
  schemaType: 'Article',
  formHeading: 'Consulte sus seguros en Barcelona',
  formBranch: '',
  formSubject: 'Seguros en Barcelona',
  formCta: 'Enviar consulta',
  formIntro:
    'Cuéntenos en qué barrio vive o va a vivir, si es compra o alquiler, con qué visado y quién forma la familia. Le respondemos por escrito con lo que conviene asegurar.',
  formPlaceholder:
    'Por ejemplo: compramos un piso modernista en el Eixample, venimos de Buenos Aires, dos adultos y un hijo; tenemos relojes y algo de joyería.',
  sections: withSibling(`
<section class="section plain" aria-labelledby="eixample">
  <div class="container narrow article-body">
    <h2 id="eixample">El piso del Eixample y los edificios antiguos</h2>
    <p>Las fincas del Eixample, de Gràcia o de Sant Gervasi combinan techos altos, mosaicos hidráulicos, carpinterías originales y — muchas veces — instalaciones antiguas detrás de una reforma reciente.</p>
    <ul>
      <li><strong>Daños por agua entre vecinos</strong>: el siniestro más frecuente. Su póliza debe cubrir lo que sufre y lo que causa.</li>
      <li><strong>Elementos de valor del propio piso</strong> — mosaicos, molduras, carpinterías de época — cuestan mucho más reponer que un acabado estándar. El continente debe reflejarlo.</li>
      <li><strong>La póliza de la comunidad</strong>: pídala al administrador para saber qué cubre la fachada, la cubierta y las bajantes comunes.</li>
    </ul>
    <p>Para casas en Pedralbes, Sarrià o la costa del Maresme y el Garraf, la lógica es la de una vivienda de alto valor. Véase <a href="/es/seguro-hogar-espana/">seguro de hogar en España</a>.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="robo">
  <div class="container narrow article-body">
    <h2 id="robo">Joyas, relojes y el robo fuera de casa</h2>
    <p>Barcelona tiene fama de hurtos en la vía pública, y es una fama que conviene tener en cuenta al asegurar. Una póliza de hogar estándar cubre el robo en la vivienda; fuera de ella, los objetos que lleva consigo están limitados o excluidos, y el hurto sin violencia muchas veces no se cubre.</p>
    <ul>
      <li>Relacione individualmente las joyas y los relojes de valor, a valor convenido y con tasación.</li>
      <li>Elija una cobertura «todo riesgo, en todo el mundo» para lo que lleva puesto o viaja con usted — también a América.</li>
      <li>Lea cómo define la póliza robo, atraco y hurto: son tres cosas distintas.</li>
    </ul>
  </div>
</section>

<section class="section plain" aria-labelledby="turistico">
  <div class="container narrow article-body">
    <h2 id="turistico">El alquiler turístico tiene fecha de caducidad anunciada</h2>
    <p>Muchas familias compran en Barcelona pensando en alquilar a turistas parte del año. Conviene saber que el Ayuntamiento anunció en 2024 que no renovará las licencias de viviendas de uso turístico cuando venzan, con el horizonte de noviembre de 2028. Compruebe la situación vigente antes de comprar con ese plan.</p>
    <p>Mientras la licencia exista, la vivienda necesita una póliza que cubra la actividad turística, con la responsabilidad civil que exige la normativa catalana. Para el alquiler de larga duración, la lógica es la del seguro de impago. Véase <a href="/es/seguro-alquiler-espana/">alquilar su vivienda en España</a>.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="salud-auto">
  <div class="container narrow article-body">
    <h2 id="salud-auto">Salud y auto</h2>
    <ul>
      <li><strong>Salud</strong>: Barcelona tiene una red privada amplia, y una póliza de cuadro médico completa, sin copagos ni carencias, sirve para el visado y para el día a día. Compruebe que incluya los centros que la familia usará. Véase <a href="/es/seguro-medico-visado-espana/">seguro médico para el visado</a>.</li>
      <li><strong>Permiso de conducir</strong>: seis meses con el de origen desde la residencia; después, canje si su país tiene convenio. Argentina, Colombia, Perú y la mayoría de países sudamericanos lo tienen; Venezuela, suspendido.</li>
      <li><strong>Zona de bajas emisiones</strong>: el área metropolitana restringe a los vehículos sin etiqueta ambiental. Compruébela antes de comprar.</li>
    </ul>
  </div>
</section>`, toPortugal),
  faqTitle: 'Seguros en Barcelona — preguntas',
  faq: [
    {
      q: '¿Cubre mi seguro de hogar un robo en la calle?',
      a: '<p>Una póliza estándar, normalmente no, o con límites muy bajos, y el hurto sin violencia suele quedar fuera. Para joyas y relojes que lleva consigo, necesita una cobertura de objetos de valor «todo riesgo, en todo el mundo».</p>',
    },
    {
      q: '¿Puedo comprar en Barcelona para alquilar a turistas?',
      a: '<p>Hay que mirarlo con cuidado: el Ayuntamiento anunció que no renovará las licencias de pisos turísticos cuando venzan, con horizonte en noviembre de 2028. Compruebe la situación vigente y la licencia concreta antes de comprar.</p>',
    },
    {
      q: '¿Qué asegura la comunidad de propietarios?',
      a: '<p>Normalmente la estructura y los elementos comunes. No su contenido, ni la parte privativa de su piso, ni su responsabilidad como ocupante. Pida el certificado de la póliza al administrador.</p>',
    },
    {
      q: 'Soy argentino. ¿Puedo canjear mi licencia?',
      a: '<p>Argentina figura, a la fecha de redacción, en la lista de países con convenio de canje con España. Tiene seis meses desde la residencia para conducir con su permiso; después, necesita el español. Verifique las condiciones vigentes en la DGT.</p>',
    },
  ],
  related: [
    { url: '/es/seguro-hogar-espana/', label: 'Seguro de hogar en España' },
    { url: '/es/seguro-alquiler-espana/', label: 'Alquilar su vivienda en España' },
    { url: '/es/seguro-medico-visado-espana/', label: 'Seguro médico para el visado español' },
  ],
};
