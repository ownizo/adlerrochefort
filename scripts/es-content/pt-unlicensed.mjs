/**
 * /es/vivienda-no-legalizada-portugal-seguro/
 *
 * Search intent: "casa no legalizada Portugal seguro", "licencia de
 * utilización Portugal comprar", "terreno rústico casa Portugal" — a Latin
 * American buyer of a quinta, a country house or an Algarve villa with
 * extensions that were never registered.
 *
 * The angle: Latin American readers know informal construction well, and
 * know that at home it rarely stops a sale or a policy. In Portugal it does
 * not stop the sale either — the notary checks the deed, not the land — but
 * it decides what can be insured and, above all, what is paid at claim
 * stage, when the loss adjuster compares what stands with what was declared.
 * Three registration situations, what is and is not insurable, and the
 * one-hour document check before buying. Mirrors the NL/DE pages' substance.
 */
import { BREADCRUMB_PORTUGAL, withSibling, siblingCallout } from './shared.mjs';

const toSpainBuy = siblingCallout({
  label: '¿Compra en España?',
  text: 'Allí la nota simple del Registro y la situación urbanística cumplen la misma función.',
  url: '/es/comprar-casa-en-espana-seguro/',
  linkText: 'Comprar casa en España',
});

export const PT_UNLICENSED_PAGE = {
  slug: 'vivienda-no-legalizada-portugal-seguro',
  url: '/es/vivienda-no-legalizada-portugal-seguro/',
  cluster: 'pt-unlicensed',
  title: 'Asegurar una vivienda no legalizada en Portugal',
  description:
    'Casas, anexos y piscinas sin legalizar en Portugal: qué se puede asegurar, qué pasa en el siniestro y qué documentos revisar antes de comprar.',
  keywords:
    'vivienda no legalizada Portugal seguro, casa sin licencia de utilización Portugal, licença de utilização, terreno rústico casa Portugal, comprar quinta Portugal seguro, anexo sin legalizar seguro, caderneta predial, comprar casa Algarve legalización',
  eyebrow: 'Portugal · Vivienda',
  h1: 'Asegurar una vivienda no legalizada en Portugal',
  standfirst:
    'En buena parte de América Latina, una ampliación sin permiso es casi una costumbre, y rara vez impide vender o asegurar. En Portugal tampoco impide comprar: el notario revisa la escritura, no el terreno. Lo que sí decide es qué paga la aseguradora el día del siniestro.',
  published: '2026-10-02T09:00:00+00:00',
  modified: '2026-10-02T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_PORTUGAL, { name: 'Vivienda no legalizada' }],
  pullquote: 'Una aseguradora que lo sabe de antemano ha aceptado el riesgo. Una que lo descubre en el siniestro, no.',
  schemaType: 'Article',
  formHeading: 'Consulte su caso antes de comprar o de asegurar',
  formBranch: 'Español · Hogar',
  formSubject: 'Vivienda no legalizada en Portugal',
  formCta: 'Enviar consulta',
  formIntro:
    'Cuéntenos qué hay en el terreno, qué figura en los documentos y qué no, y en qué fase está la compra o la legalización. Le respondemos por escrito con lo que puede asegurarse hoy.',
  formPlaceholder:
    'Por ejemplo: quinta en el interior del Algarve, la casa principal está registrada pero la casa de invitados y la piscina no; firmamos la escritura en dos meses.',
  sections: withSibling(`
<section class="section plain" aria-labelledby="como">
  <div class="container narrow article-body">
    <h2 id="como">Cómo se llega a esta situación</h2>
    <p>En el interior de Portugal y en partes del Algarve, las construcciones han crecido durante décadas al ritmo del uso: un establo se convirtió en almacén, el almacén en casa, se añadió una cocina, una piscina, un anexo. No siempre quedó registrado — muchas veces porque el terreno es <em>rústico</em> y allí la vivienda nunca pudo autorizarse tal como está.</p>
    <p>En la práctica hay tres situaciones, de menor a mayor gravedad:</p>
    <ul>
      <li><strong>Totalmente legal.</strong> El terreno es <em>urbano</em>, el edificio figura en la <em>caderneta predial urbana</em> y existe <em>licença de utilização</em> para vivienda.</li>
      <li><strong>Registrado, pero sin licencia</strong> de utilización, o con una licencia para otro uso. Frecuente en construcciones antiguas.</li>
      <li><strong>No registrado.</strong> Para Hacienda y el catastro, el terreno está vacío.</li>
    </ul>
    <p>El notario controla lo que dice la escritura, no lo que hay en el terreno. Se puede ser propietario legítimo de un terreno con una casa que, administrativamente, no existe.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="asegurable">
  <div class="container narrow article-body">
    <h2 id="asegurable">Qué se puede asegurar y qué no</h2>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Qué se puede asegurar en una vivienda no legalizada en Portugal</caption>
        <thead>
          <tr><th scope="col">Normalmente asegurable</th><th scope="col">Normalmente no</th></tr>
        </thead>
        <tbody>
          <tr><td>El contenido: sus bienes son suyos, sea cual sea la situación del edificio</td><td>El edificio que no figura en ningún registro</td></tr>
          <tr><td>Su responsabilidad civil como propietario u ocupante</td><td>Construcciones en terreno rústico que no pueden legalizarse</td></tr>
          <tr><td>Edificios registrados sin licencia de utilización, en algunas aseguradoras y tras valoración</td><td>Ampliaciones y anexos construidos después del registro y nunca inscritos</td></tr>
          <tr><td>Viviendas en proceso de legalización, a veces de forma temporal</td><td>El alquiler de una vivienda sin la licencia correspondiente</td></tr>
        </tbody>
      </table>
    </div>
    <p>La zona intermedia es donde más difieren las aseguradoras. Un «no» de una compañía no significa que no haya solución: vale la pena presentar el expediente a varias.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="siniestro">
  <div class="container narrow article-body">
    <h2 id="siniestro">Lo que pasa en el siniestro</h2>
    <p>Contratar rara vez es el problema: para una póliza de hogar corriente, la aseguradora no inspecciona antes, sino que se basa en lo que usted declara. El problema llega con el siniestro, porque entonces sí viene un perito, que compara lo que ve con lo que está asegurado. Si no coincide:</p>
    <ul>
      <li><strong>La parte no registrada queda fuera.</strong> El anexo donde empezó el incendio no se indemniza.</li>
      <li><strong>La regla proporcional reduce todo.</strong> El capital declarado correspondía a un edificio más pequeño que el real, y la indemnización baja también en la parte legal.</li>
      <li><strong>La aseguradora alega una declaración inexacta del riesgo</strong>, y toda la cobertura queda en discusión.</li>
    </ul>
    <div class="callout">
      <span class="callout-label">La única línea sensata</span>
      Declare la situación real, aunque sea complicada. Lo que la aseguradora sabe y acepta antes de emitir la póliza forma parte del contrato; lo que descubre después, no.
    </div>
  </div>
</section>

<section class="section tint" aria-labelledby="revisar">
  <div class="container narrow article-body">
    <h2 id="revisar">Qué revisar antes de comprar</h2>
    <p>Es una hora de trabajo — suya o de su abogado — y evita la mayoría de los problemas de esta página:</p>
    <ol class="process-steps">
      <li><div><strong>Caderneta predial</strong><span> en Finanças: ¿el terreno es urbano o rústico? ¿La superficie registrada coincide con lo que ve?</span></div></li>
      <li><div><strong>Certidão permanente</strong><span> del Registro Predial: titularidad, cargas y descripción del inmueble.</span></div></li>
      <li><div><strong>Licença de utilização</strong><span> en el ayuntamiento: ¿existe, y para qué uso?</span></div></li>
      <li><div><strong>Planos aprobados</strong><span>, comparados con lo construido: piscina, anexos, cerramientos, casa de invitados.</span></div></li>
    </ol>
    <p>Si hay diferencias, la legalización puede ser posible o no, y lleva tiempo. Que se haga antes o después de la compra es una negociación de precio; que se declare a la aseguradora no es negociable.</p>
  </div>
</section>`, toSpainBuy),
  faqTitle: 'Vivienda no legalizada en Portugal — preguntas',
  faq: [
    {
      q: '¿Puedo asegurar una casa sin licencia de utilización?',
      a: '<p>A veces sí: algunas aseguradoras aceptan edificios registrados sin licencia, tras valorar el caso. Lo que casi nunca se asegura es un edificio que no figura en ningún registro. El contenido y la responsabilidad civil, en cambio, normalmente sí.</p>',
    },
    {
      q: '¿Qué pasa si no lo declaro?',
      a: '<p>En el siniestro, el perito comparará lo construido con lo asegurado. La parte no registrada puede quedar fuera, la indemnización puede reducirse proporcionalmente y la aseguradora puede discutir toda la cobertura por declaración inexacta.</p>',
    },
    {
      q: 'El notario no dijo nada. ¿No está todo en regla?',
      a: '<p>El notario controla lo que dice la escritura, no lo que hay construido en el terreno. Es perfectamente posible comprar legalmente un terreno con una construcción no registrada.</p>',
    },
    {
      q: '¿Puedo alquilar una vivienda no legalizada?',
      a: '<p>El alquiler — sobre todo el turístico — exige la licencia correspondiente, y las aseguradoras normalmente no cubren la actividad sin ella. Resuelva primero la legalización.</p>',
    },
  ],
  related: [
    { url: '/es/comprar-casa-en-portugal-seguro/', label: 'Comprar casa en Portugal' },
    { url: '/es/seguro-hogar-alto-valor/', label: 'Seguro de hogar en Portugal' },
    { url: '/es/seguro-finca-vinedo/', label: 'Fincas, bodegas y viñedos' },
  ],
};
