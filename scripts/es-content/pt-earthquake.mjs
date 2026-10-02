/**
 * /es/seguro-terremoto-portugal/
 *
 * Search intent: "seguro terremoto Portugal", "riesgo sísmico Lisboa casa",
 * "fenómenos sísmicos seguro" — a Latin American owner, often from a seismic
 * country (Chile, Mexico, Peru, Ecuador, Colombia), who assumes that a home
 * policy covers earthquakes or who has just learnt that in Portugal it does
 * not.
 *
 * The angle: the reader knows earthquakes and knows that at home cover is a
 * conscious decision; Portugal works the same way, with no public pool in
 * operation (unlike Spain's Consorcio), a percentage deductible and low
 * take-up. The government's announced compulsory scheme and catastrophe fund
 * is mentioned as announced and not in force at the time of writing. Apartment
 * owners learn that the building's compulsory fire insurance does not carry
 * seismic cover.
 */
import { BREADCRUMB_PORTUGAL, withSibling, toSpain } from './shared.mjs';

export const PT_EARTHQUAKE_PAGE = {
  slug: 'seguro-terremoto-portugal',
  url: '/es/seguro-terremoto-portugal/',
  cluster: 'pt-earthquake',
  title: 'Seguro de terremoto en Portugal | Adler & Rochefort',
  description:
    'El terremoto en Portugal no está cubierto si no se contrata: fenómenos sísmicos, franquicia en porcentaje, pisos en edificios y el seguro obligatorio anunciado.',
  keywords:
    'seguro terremoto Portugal, seguro sismo Portugal, fenómenos sísmicos seguro, riesgo sísmico Lisboa, seguro casa terremoto Lisboa, franquicia terremoto Portugal, seguro sísmico obligatorio Portugal, terremoto Algarve seguro',
  eyebrow: 'Portugal · Vivienda',
  h1: 'El terremoto en Portugal: una cobertura que hay que elegir',
  standfirst:
    'Quien viene de Santiago, Ciudad de México o Lima no necesita que le expliquen qué es un sismo. Lo que sí conviene explicarle es que en Portugal — a diferencia de España — la póliza de hogar no lo cubre si no se pide, y que la mayoría de las viviendas del país siguen sin esa cobertura.',
  published: '2026-10-02T09:00:00+00:00',
  modified: '2026-10-02T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_PORTUGAL, { name: 'Seguro de terremoto' }],
  pullquote: 'En Portugal el terremoto no es una exclusión. Es una cobertura que nadie contrató.',
  schemaType: 'Article',
  formHeading: 'Consulte la cobertura sísmica de su vivienda',
  formBranch: 'Español · Hogar',
  formSubject: 'Terremoto en Portugal',
  formCta: 'Enviar consulta',
  formIntro:
    'Indíquenos dónde está la vivienda (casa o piso), el año aproximado de construcción y, si la tiene, envíenos la póliza actual. Le respondemos por escrito con lo que cubre hoy y lo que costaría añadir el terremoto.',
  formPlaceholder:
    'Por ejemplo: piso en un edificio de 1920 en Lisboa, Príncipe Real; la póliza la contrató el banco y no sé si incluye sismo.',
  sections: withSibling(`
<section class="section plain" aria-labelledby="riesgo">
  <div class="container narrow article-body">
    <h2 id="riesgo">Un riesgo real, una cobertura poco contratada</h2>
    <p>Portugal tiene historia sísmica: el terremoto de Lisboa de 1755 es uno de los más conocidos de Europa, y la región de Lisboa y el valle del Tajo, el Algarve y las Azores son las zonas de mayor riesgo. Aun así, según datos publicados por el sector, solo alrededor de una de cada cinco viviendas tiene cobertura sísmica.</p>
    <p>La razón es estructural. En Portugal no funciona hoy un organismo público equivalente al Consorcio de Compensación de Seguros español, que cubre el terremoto dentro de cualquier póliza de daños. La cobertura de <em>fenómenos sísmicos</em> es una garantía opcional de la póliza de hogar: si no se contrata, el terremoto no está cubierto.</p>
    <div class="callout">
      <span class="callout-label">Lo que se ha anunciado</span>
      El Gobierno portugués ha anunciado la creación de un seguro sísmico obligatorio y de un fondo de catástrofes, con entrada en funcionamiento prevista para los próximos años. A la fecha de redacción no está en vigor, y sus condiciones finales no se conocen. Hasta entonces, la decisión es suya.
    </div>
  </div>
</section>

<section class="section tint" aria-labelledby="como">
  <div class="container narrow article-body">
    <h2 id="como">Cómo funciona la cobertura</h2>
    <ul>
      <li><strong>Se contrata como garantía adicional</strong> de la <em>multirriscos habitação</em>, sobre el edificio, el contenido o ambos.</li>
      <li><strong>La franquicia suele ser un porcentaje del capital asegurado</strong> — por ejemplo, un 5 % —, no un importe fijo. En una casa asegurada por un millón de euros, eso significa que los primeros cincuenta mil corren por cuenta del propietario.</li>
      <li><strong>Cubre normalmente los daños causados por el temblor</strong> y, según las condiciones, los incendios, inundaciones o derrumbes que provoque. Lea la definición: es donde más difieren las pólizas.</li>
      <li><strong>El coste depende de la zona</strong> y del tipo de construcción. En las zonas de mayor riesgo puede ser una parte relevante de la prima.</li>
    </ul>
    <p>Quien viene de Chile o de México reconocerá la lógica: es exactamente la decisión que se toma allí. La diferencia es que en Portugal muchas viviendas se compraron sin que nadie la planteara.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="pisos">
  <div class="container narrow article-body">
    <h2 id="pisos">Si su vivienda está en un edificio</h2>
    <p>En los edificios en propiedad horizontal, la ley portuguesa obliga a asegurar el edificio contra incendio. Ese seguro obligatorio del <em>condomínio</em> no incluye el terremoto. Algunos condominios contratan pólizas más amplias; muchos se quedan en el mínimo legal.</p>
    <ul>
      <li>Pida al administrador del condominio la póliza del edificio y compruebe si incluye fenómenos sísmicos.</li>
      <li>Si no los incluye, puede asegurar en su póliza individual la parte que le corresponde del edificio, además de su contenido.</li>
      <li>En edificios antiguos del centro de Lisboa o de Oporto, la construcción y las reformas que ha tenido el edificio importan para la aseguradora.</li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="decidir">
  <div class="container narrow article-body">
    <h2 id="decidir">Cómo decidir</h2>
    <p>No hay una respuesta universal. Hay preguntas que la ordenan:</p>
    <ol class="process-steps">
      <li><div><strong>¿Dónde está la vivienda?</strong><span> Lisboa, el valle del Tajo y el Algarve no son el interior norte.</span></div></li>
      <li><div><strong>¿Podría reconstruirla sin la indemnización?</strong><span> Si la respuesta es no, la cobertura deja de ser opcional para usted.</span></div></li>
      <li><div><strong>¿Hay hipoteca?</strong><span> La deuda sigue aunque la casa no exista.</span></div></li>
      <li><div><strong>¿Cuánto cuesta, con la cifra delante?</strong><span> Le damos la prima adicional por escrito para que decida con el dato, no con la intuición.</span></div></li>
    </ol>
  </div>
</section>`, toSpain.home),
  faqTitle: 'El terremoto en Portugal — preguntas',
  faq: [
    {
      q: '¿Mi seguro de hogar portugués cubre el terremoto?',
      a: '<p>Solo si incluye la garantía de <em>fenómenos sísmicos</em>. Búsquela en las condiciones particulares: si no aparece, el terremoto no está cubierto.</p>',
    },
    {
      q: '¿Es obligatorio el seguro de terremoto en Portugal?',
      a: '<p>A la fecha de redacción, no. El Gobierno ha anunciado un seguro sísmico obligatorio y un fondo de catástrofes, pero todavía no está en vigor. Lo actualizaremos cuando cambie.</p>',
    },
    {
      q: '¿Cuál es la franquicia habitual?',
      a: '<p>Suele ser un porcentaje del capital asegurado, con frecuencia del orden del 5 %, a veces con un mínimo. Es mucho más alta que la de otros riesgos, y conviene conocerla antes de contratar.</p>',
    },
    {
      q: 'Vivo en un piso. ¿No lo cubre el seguro del edificio?',
      a: '<p>El seguro obligatorio del condominio es de incendio y no incluye el terremoto. Compruebe la póliza del edificio; si no lo cubre, puede asegurar su parte en su póliza individual.</p>',
    },
  ],
  related: [
    { url: '/es/seguro-hogar-alto-valor/', label: 'Seguro de hogar en Portugal' },
    { url: '/es/comprar-casa-en-portugal-seguro/', label: 'Comprar casa en Portugal' },
    { url: '/es/seguros-portugal/', label: 'Seguros en Portugal: visión general' },
  ],
};
