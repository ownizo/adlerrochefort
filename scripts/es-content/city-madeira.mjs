/**
 * /es/seguros-madeira/
 *
 * Why this page exists (October 2026, demand checked before writing):
 * Venezuelans are the largest foreign nationality in the Autonomous Region
 * of Madeira — 3,004 residents, 15.5 % of all foreign residents in 2025, and
 * the group that grew most since 2021 (DREM). That figure leaves out the
 * many luso-venezuelanos who hold Portuguese nationality. It is the one
 * place in Portugal where a Spanish-speaking Latin American community is
 * documented at scale — more than Porto, which was therefore not given a
 * page.
 *
 * Local angles: many readers are Portuguese citizens (no visa; family
 * members who are not need one), regional health service SESARAM instead of
 * the mainland SNS, and the island's own hazards — the 2010 aluvião, the
 * 2016 and 2024 wildfires — which make flood, landslide and fire wording
 * more important than earthquake. Pairs with the German Madeira page.
 */
import { BREADCRUMB_PORTUGAL, withSibling, siblingCallout } from './shared.mjs';

const toLisboa = siblingCallout({
  label: '¿También en el continente?',
  text: 'En Lisboa el riesgo principal es otro — el terremoto — y la sanidad pública es el SNS.',
  url: '/es/seguros-lisboa/',
  linkText: 'Seguros en Lisboa',
});

export const CITY_MADEIRA_PAGE = {
  slug: 'seguros-madeira',
  url: '/es/seguros-madeira/',
  cluster: 'city-madeira',
  title: 'Seguros en Madeira para venezolanos y lusovenezolanos | Adler & Rochefort',
  description:
    'Seguros en Madeira para familias venezolanas y lusovenezolanas: aluviones e incendios en la póliza de hogar, salud con el SESARAM, auto y alquiler local.',
  keywords:
    'seguros Madeira venezolanos, seguros Funchal, lusovenezolanos Madeira seguros, seguro hogar Madeira, seguro casa Funchal, seguro salud Madeira, SESARAM, seguro incendio Madeira, aluvión Madeira seguro, alojamiento local Madeira seguro',
  eyebrow: 'Portugal · Madeira',
  h1: 'Seguros en Madeira para familias venezolanas y lusovenezolanas',
  standfirst:
    'Los venezolanos son la primera comunidad extranjera de Madeira — y eso sin contar a los muchos lusovenezolanos que ya tienen nacionalidad portuguesa. En la isla, los riesgos que más importan a la póliza de hogar no son los del continente, y la sanidad pública tiene otro nombre.',
  published: '2026-10-02T09:00:00+00:00',
  modified: '2026-10-02T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_PORTUGAL, { name: 'Madeira' }],
  pullquote: 'En Madeira la pregunta no es si la póliza cubre el terremoto. Es si cubre el agua y la tierra que bajan por la montaña.',
  schemaType: 'Article',
  formHeading: 'Consulte sus seguros en Madeira',
  formBranch: '',
  formSubject: 'Seguros en Madeira',
  formCta: 'Enviar consulta',
  formIntro:
    'Cuéntenos dónde está la vivienda en la isla, si ya tiene nacionalidad portuguesa o residencia, y quién forma la familia. Le respondemos por escrito y en español.',
  formPlaceholder:
    'Por ejemplo: somos lusovenezolanos, volvimos de Caracas a Funchal, compramos una casa en ladera en Santo António; mis padres viven con nosotros.',
  sections: withSibling(`
<section class="section plain" aria-labelledby="quien">
  <div class="container narrow article-body">
    <h2 id="quien">Portugueses de pasaporte, venezolanos de vida</h2>
    <p>Muchas de las familias que llegan de Venezuela a Madeira son lusodescendientes con nacionalidad portuguesa. Para el seguro, eso cambia el punto de partida:</p>
    <ul>
      <li><strong>Quien tiene nacionalidad portuguesa</strong> no necesita visado y accede a la sanidad pública como cualquier ciudadano residente.</li>
      <li><strong>Los familiares que solo tienen nacionalidad venezolana</strong> — un cónyuge, unos padres — siguen el camino de la residencia, y para ellos la póliza de salud privada es la base mientras se resuelve.</li>
      <li><strong>Todos necesitan NIF</strong> para casi cualquier póliza, también los menores en el seguro de salud.</li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="riesgos">
  <div class="container narrow article-body">
    <h2 id="riesgos">Los riesgos de la isla: agua, tierra y fuego</h2>
    <p>Madeira conoce bien sus riesgos: el aluvión de febrero de 2010 en Funchal, los incendios de 2016 que llegaron a la ciudad y los grandes incendios de 2024 en la isla. Para una vivienda en ladera o cerca del monte, la póliza de hogar debe leerse con esto en mente:</p>
    <ul>
      <li><strong>Inundaciones y fenómenos atmosféricos</strong> — cómo los define la póliza y qué excluye.</li>
      <li><strong>Deslizamientos de tierra</strong> (<em>aluimentos de terras</em>) — a menudo una garantía aparte que hay que pedir.</li>
      <li><strong>Incendio forestal</strong> — cubierto como incendio, pero conviene saber si hay exigencias de limpieza del terreno alrededor de la casa.</li>
      <li><strong>Muros de contención y accesos</strong>, que en una isla de laderas pueden costar tanto como una parte de la casa.</li>
    </ul>
    <p>En Portugal no existe un fondo como el Consorcio español: lo que no está en su póliza no lo paga nadie. Véase <a href="/es/seguro-hogar-alto-valor/">seguro de hogar en Portugal</a>.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="salud">
  <div class="container narrow article-body">
    <h2 id="salud">Salud en Madeira: el SESARAM y la póliza privada</h2>
    <p>En Madeira la sanidad pública la presta el servicio regional de salud, el <em>SESARAM</em>, en lugar del SNS del continente. La lógica es la misma: médico de familia, derivación al especialista y esperas que varían.</p>
    <ul>
      <li>Compruebe que la red de la póliza privada incluya médicos y clínicas en Madeira, no solo en Lisboa y Oporto.</li>
      <li>Para tratamientos que solo se hacen en el continente o en el extranjero, mire cómo cubre la póliza los desplazamientos.</li>
      <li>Si la familia sigue viajando a Venezuela o a otros países de América, una póliza internacional puede cubrir también allí. Véase <a href="/es/seguro-salud-internacional/">seguro de salud en Portugal</a>.</li>
      <li>Para padres mayores, hay pólizas portuguesas sin edad máxima de adhesión. Véase <a href="/es/seguro-salud-preexistencias-portugal/">enfermedades previas y padres mayores</a>.</li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="al-auto">
  <div class="container narrow article-body">
    <h2 id="al-auto">Alojamento Local y auto</h2>
    <ul>
      <li><strong>Alojamento Local</strong>: muy extendido en Madeira, exige un seguro de responsabilidad civil específico ligado al registro. Una póliza de hogar corriente no cubre el alquiler turístico. Véase <a href="/es/seguro-alquiler-portugal/">alquilar su vivienda en Portugal</a>.</li>
      <li><strong>Permiso de conducir</strong>: el venezolano no figura entre los reconocidos sin más en Portugal; como residente, el camino es el canje en el IMT en las condiciones que correspondan. Compruébelo al llegar. Véase <a href="/es/seguro-coche-portugal/">seguro de auto en Portugal</a>.</li>
    </ul>
  </div>
</section>`, toLisboa),
  faqTitle: 'Seguros en Madeira — preguntas',
  faq: [
    {
      q: 'Tengo nacionalidad portuguesa. ¿Necesito seguro de salud privado?',
      a: '<p>No es obligatorio: como ciudadano residente accede al servicio regional de salud, el SESARAM. Muchas familias lo complementan con una póliza privada para evitar esperas o atenderse fuera de la isla.</p>',
    },
    {
      q: '¿Cubre mi seguro de hogar un deslizamiento de tierra?',
      a: '<p>No siempre: los deslizamientos (<em>aluimentos de terras</em>) son a menudo una garantía aparte. En una vivienda en ladera, pídala expresamente y lea cómo se define.</p>',
    },
    {
      q: 'Mis padres son venezolanos y viven conmigo. ¿Qué seguro necesitan?',
      a: '<p>Mientras tramitan su residencia, una póliza de salud privada es su cobertura. Hay pólizas portuguesas sin edad máxima de adhesión; necesitarán NIF y domicilio en Portugal.</p>',
    },
    {
      q: '¿Atienden en Madeira aunque sus oficinas estén en Lisboa y Lagos?',
      a: '<p>Sí. Trabajamos por escrito y en español en todo Portugal, incluidas las islas, y gestionamos los siniestros con la aseguradora y el perito en portugués.</p>',
    },
  ],
  related: [
    { url: '/es/seguro-hogar-alto-valor/', label: 'Seguro de hogar en Portugal' },
    { url: '/es/seguro-salud-preexistencias-portugal/', label: 'Enfermedades previas y padres mayores' },
    { url: '/es/seguros-portugal/', label: 'Seguros en Portugal: visión general' },
  ],
};
