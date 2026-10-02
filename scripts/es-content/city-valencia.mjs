/**
 * /es/seguros-valencia/
 *
 * Why this city page exists (October 2026, demand checked before writing):
 * Valencia's municipal register (1 January 2025) puts Colombia first among
 * the city's foreign nationalities (20,461) and Venezuela third (10,264),
 * with Honduras, Argentina and Ecuador also prominent; the Comunitat
 * Valenciana is one of the three regions with the most Colombians in Spain.
 *
 * Local angle: the October 2024 DANA, after which the Consorcio de
 * Compensación de Seguros paid out more than EUR 4 billion (Government of
 * Spain, November 2025). For this reader it turns an abstract point —
 * extraordinary risks are covered only if the property or car has a policy
 * in force — into the most practical advice on the page.
 */
import { BREADCRUMB_SPAIN, withSibling, siblingCallout } from './shared.mjs';

const toPortugal = siblingCallout({
  label: '¿Y en Portugal?',
  text: 'Allí no hay Consorcio: la inundación y el terremoto dependen de lo que diga su póliza.',
  url: '/es/seguros-portugal/',
  linkText: 'Seguros en Portugal',
});

export const CITY_VALENCIA_PAGE = {
  slug: 'seguros-valencia',
  url: '/es/seguros-valencia/',
  cluster: 'city-valencia',
  title: 'Seguros en Valencia para latinoamericanos | Adler & Rochefort',
  description:
    'Seguros en Valencia para familias latinoamericanas: inundaciones y el Consorcio tras la DANA, hogar, auto en garaje, salud para el visado y alquiler.',
  keywords:
    'seguros Valencia latinoamericanos, seguro hogar Valencia, seguro inundación Valencia, DANA Consorcio de Compensación de Seguros, seguro coche inundación Valencia, seguro médico Valencia extranjeros, colombianos en Valencia seguros, venezolanos en Valencia seguros',
  eyebrow: 'España · Valencia',
  h1: 'Seguros en Valencia para familias latinoamericanas',
  standfirst:
    'Los colombianos son la primera comunidad extranjera de Valencia y los venezolanos, la tercera. Después de la DANA de octubre de 2024, aquí nadie necesita que le expliquen qué es una inundación — pero muchos descubrieron entonces que el Consorcio solo paga si había una póliza en vigor.',
  published: '2026-10-02T09:00:00+00:00',
  modified: '2026-10-02T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_SPAIN, { name: 'Valencia' }],
  pullquote: 'El Consorcio no asegura su casa. Paga a quien ya la tenía asegurada.',
  schemaType: 'Article',
  formHeading: 'Consulte sus seguros en Valencia',
  formBranch: '',
  formSubject: 'Seguros en Valencia',
  formCta: 'Enviar consulta',
  formIntro:
    'Cuéntenos dónde está o estará la vivienda — ciudad, huerta, playa —, si hay garaje o planta baja, con qué visado y quién forma la familia. Le respondemos por escrito.',
  formPlaceholder:
    'Por ejemplo: llegamos de Medellín, compramos un piso en Ruzafa con plaza de garaje, dos adultos y dos niños, visado de nómada digital.',
  sections: withSibling(`
<section class="section plain" aria-labelledby="dana">
  <div class="container narrow article-body">
    <h2 id="dana">La lección de la DANA: el Consorcio y su póliza</h2>
    <p>La DANA de octubre de 2024 fue la mayor catástrofe atendida por el Consorcio de Compensación de Seguros: a finales de 2025 llevaba pagados más de 4.000 millones de euros en indemnizaciones, sobre todo por viviendas, vehículos y negocios. La regla que lo explica todo es sencilla:</p>
    <div class="callout">
      <span class="callout-label">Sin póliza, no hay Consorcio</span>
      El Consorcio indemniza las inundaciones extraordinarias y otros riesgos extraordinarios <strong>solo si el bien tenía contratada una póliza en vigor</strong> en España: de hogar para la vivienda, de auto con daños propios — o con coberturas como incendio o robo, según el caso — para el vehículo. Y paga según las sumas de esa póliza.
    </div>
    <ul>
      <li><strong>Asegure el contenido</strong>, no solo el continente. En una inundación se pierde sobre todo lo que hay dentro.</li>
      <li><strong>No infraasegure.</strong> Con una suma baja, el Consorcio aplica la misma reducción proporcional que la aseguradora.</li>
      <li><strong>No deje que la póliza caduque</strong> por un recibo devuelto, sobre todo si pasa temporadas en América.</li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="planta">
  <div class="container narrow article-body">
    <h2 id="planta">Garajes, plantas bajas y trasteros</h2>
    <p>En la DANA, buena parte de los daños se concentró en garajes subterráneos, plantas bajas y trasteros. Si su vivienda o su auto están en alguno de ellos:</p>
    <ul>
      <li>El auto solo tiene Consorcio por inundación si la póliza incluye daños propios o, según el caso, coberturas como incendio o robo. Un seguro solo a terceros no basta.</li>
      <li>Lo que guarda en el trastero debe estar incluido en el contenido de la póliza, y a veces tiene un límite propio.</li>
      <li>En una planta baja, compruebe cómo trata la póliza la entrada de agua por la calle y por la red de saneamiento.</li>
    </ul>
  </div>
</section>

<section class="section plain" aria-labelledby="vivienda">
  <div class="container narrow article-body">
    <h2 id="vivienda">La vivienda en Valencia</h2>
    <p>Muchas familias latinoamericanas compran en Ruzafa, El Carmen, el Ensanche o junto a la playa, y otras en las urbanizaciones de los alrededores. Las reglas generales del seguro de hogar español valen aquí igual — continente y contenido, comunidad de propietarios, responsabilidad civil —, con una atención especial al agua, de dentro y de fuera. Véase <a href="/es/seguro-hogar-espana/">seguro de hogar en España</a>.</p>
    <p>Si piensa alquilar, recuerde que la Comunitat Valenciana regula el alquiler turístico con su propio registro, y que la póliza debe cubrir esa actividad. Véase <a href="/es/seguro-alquiler-espana/">alquilar su vivienda en España</a>.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="salud-auto">
  <div class="container narrow article-body">
    <h2 id="salud-auto">Salud y auto</h2>
    <ul>
      <li><strong>Salud</strong>: para el visado, una póliza completa, sin copagos ni carencias, con aseguradora autorizada en España; para la vida diaria, que el cuadro médico incluya los hospitales de Valencia que la familia usará. Véase <a href="/es/seguro-medico-visado-espana/">seguro médico para el visado</a>.</li>
      <li><strong>Permiso de conducir</strong>: seis meses con el de origen desde la residencia. Colombia y la mayoría de países sudamericanos tienen convenio de canje; el de Venezuela está suspendido. Véase <a href="/es/seguro-coche-espana/">seguro de auto en España</a>.</li>
    </ul>
  </div>
</section>`, toPortugal),
  faqTitle: 'Seguros en Valencia — preguntas',
  faq: [
    {
      q: '¿Mi seguro de hogar cubre una inundación como la de la DANA?',
      a: '<p>Las inundaciones extraordinarias las indemniza el Consorcio de Compensación de Seguros, pero solo si la vivienda tenía una póliza en vigor, y según las sumas de esa póliza. Asegure continente y contenido por su valor real.</p>',
    },
    {
      q: 'Mi auto está en un garaje subterráneo. ¿Está cubierto si se inunda?',
      a: '<p>Por el Consorcio, si la póliza del auto incluye daños propios o, según el caso, coberturas como incendio o robo. Un seguro solo a terceros no da derecho a la indemnización por inundación del propio vehículo.</p>',
    },
    {
      q: 'Soy venezolano. ¿Puedo canjear mi licencia en Valencia?',
      a: '<p>A la fecha de redacción, el convenio de canje con Venezuela está suspendido. Como residente, puede conducir seis meses con su permiso; después necesitará obtener el permiso español por el procedimiento ordinario. Verifique la situación vigente en la DGT.</p>',
    },
    {
      q: '¿Puedo contratar desde Colombia antes de llegar?',
      a: '<p>La póliza de salud para el visado, sí: se contrata precisamente antes. El seguro de la vivienda, desde la fecha de la escritura o del contrato de alquiler. Para casi todo necesitará el NIE.</p>',
    },
  ],
  related: [
    { url: '/es/seguro-hogar-espana/', label: 'Seguro de hogar en España' },
    { url: '/es/seguro-coche-espana/', label: 'Seguro de auto en España' },
    { url: '/es/seguros-espana/', label: 'Seguros en España: visión general' },
  ],
};
