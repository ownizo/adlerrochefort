/**
 * /es/seguros-portugal/ — the Portugal landing page of the Spanish cluster.
 *
 * Search intent: "seguros en Portugal para extranjeros", "seguros Portugal
 * latinoamericanos", "vivir en Portugal seguros" — a Latin American family
 * that has moved, or is moving, to Lisbon, Cascais, Porto or the Algarve, or
 * that has bought a home there, and wants the Portuguese market explained
 * from its own starting point.
 *
 * The angle: Portuguese reads close enough to Spanish to be read with false
 * confidence; the reader's Latin American vocabulary maps onto Portuguese
 * terms through a short table; and three structural facts change the
 * calculation — earthquake cover is optional and has to be chosen (with a
 * public scheme announced but not yet in force), family liability does not
 * come with the home policy, and almost everything starts with a Portuguese
 * NIF and a Portuguese address. It is the parent of every Portugal page.
 */
import { BREADCRUMB_ROOT, withSibling, toSpain } from './shared.mjs';

export const PT_LANDING_PAGE = {
  slug: 'seguros-portugal',
  url: '/es/seguros-portugal/',
  cluster: 'pt-landing',
  title: 'Seguros en Portugal para latinoamericanos | Adler & Rochefort',
  description:
    'Seguros en Portugal para familias latinoamericanas: salud y visado, hogar y terremoto, auto, responsabilidad civil y vida. Explicados en español, por escrito.',
  keywords:
    'seguros en Portugal para extranjeros, seguros Portugal latinoamericanos, vivir en Portugal seguros, seguro médico Portugal, seguro hogar Portugal, seguro terremoto Portugal, mediador de seguros Portugal, seguros Lisboa venezolanos, seguros Portugal mexicanos, seguros Portugal colombianos',
  eyebrow: 'Portugal · Visión general',
  h1: 'Seguros en Portugal para familias latinoamericanas',
  standfirst:
    'El portugués se lee casi sin esfuerzo — y por eso se malinterpreta con total confianza. En Portugal el terremoto no viene en la póliza, la responsabilidad civil hay que pedirla y casi todo empieza por un número de contribuinte. Esto es lo que conviene saber del mercado portugués, y cómo trabajamos en él.',
  published: '2026-10-02T09:00:00+00:00',
  modified: '2026-10-02T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Portugal' }],
  pullquote: 'Usted entiende el noventa por ciento de una póliza portuguesa. El problema está en el diez por ciento restante.',
  schemaType: 'Article',
  formHeading: 'Consulte sobre sus seguros en Portugal',
  formBranch: '',
  formSubject: 'Seguros en Portugal — consulta general',
  formCta: 'Enviar consulta',
  formIntro:
    'Cuéntenos dónde está o estará en Portugal, con qué visado, quién forma la familia y qué quiere asegurar — o envíenos sus pólizas actuales. Le respondemos por escrito y en español con lo que cubren y lo que falta.',
  formPlaceholder:
    'Por ejemplo: nos instalamos en Cascais en marzo con visado D7, dos adultos y dos hijos; vamos a comprar una casa y queremos ordenar salud, hogar y auto.',
  sections: withSibling(`
<section class="section plain" aria-labelledby="quienes">
  <div class="container narrow article-body">
    <h2 id="quienes">Quiénes somos en Portugal</h2>
    <p>Adler &amp; Rochefort es un mediador de seguros portugués, inscrito en la <em>Autoridade de Supervisão de Seguros e Fundos de Pensões</em> (ASF) con el n.º 425591790/3, con oficinas en Lisboa y Lagos. Portugal es nuestro mercado de origen: conocemos sus aseguradoras, sus condiciones y sus peritos, y gestionamos los siniestros en portugués ante la compañía.</p>
    <p>Con usted trabajamos en español y por escrito:</p>
    <ul>
      <li><strong>Le explicamos cada póliza en español</strong> antes de firmar — coberturas, capitales, franquicias y exclusiones —, aunque la póliza esté, como es habitual, en portugués.</li>
      <li><strong>Asesoramos dentro de nuestra cartera de aseguradoras</strong> y elegimos por coberturas, asistencia y calidad del servicio en el siniestro — no por la prima más baja.</li>
      <li><strong>Un único interlocutor</strong> desde la primera consulta hasta el siniestro, también si la familia tiene además casa en España.</li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="vocabulario">
  <div class="container narrow article-body">
    <h2 id="vocabulario">Su vocabulario, en portugués</h2>
    <p>Estas son las palabras que deciden la indemnización, con el término que probablemente usa usted en su país:</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Términos de seguros en América Latina y su equivalente en portugués</caption>
        <thead>
          <tr><th scope="col">En buena parte de América Latina</th><th scope="col">En Portugal</th><th scope="col">Lo que hay que saber</th></tr>
        </thead>
        <tbody>
          <tr><td>Póliza</td><td><em>Apólice</em></td><td>Condiciones generales, especiales y particulares: tres documentos, no uno.</td></tr>
          <tr><td>Prima</td><td><em>Prémio</em></td><td>Lo que usted paga. No es un premio, aunque lo parezca.</td></tr>
          <tr><td>Deducible</td><td><em>Franquia</em></td><td>En el terremoto suele ser un porcentaje del capital, no un importe fijo.</td></tr>
          <tr><td>Suma asegurada</td><td><em>Capital seguro</em></td><td>La cifra más importante del contrato.</td></tr>
          <tr><td>Contenido de la casa</td><td><em>Recheio</em></td><td>No es «relleno»: es todo lo que hay dentro de la vivienda.</td></tr>
          <tr><td>Coaseguro, copago</td><td><em>Copagamento</em></td><td>Lo que paga usted por consulta en el seguro de salud.</td></tr>
          <tr><td>Periodo de espera</td><td><em>Período de carência</em></td><td>Meses en los que una cobertura todavía no funciona.</td></tr>
          <tr><td>RFC, RUT, cédula, CUIT</td><td><em>NIF</em> (número de contribuinte)</td><td>Sin él no hay contrato de alquiler, cuenta bancaria ni casi ninguna póliza.</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section class="section plain" aria-labelledby="tres">
  <div class="container narrow article-body">
    <h2 id="tres">Tres cosas que funcionan distinto</h2>
    <h3>El terremoto es opcional</h3>
    <p>Quien viene de Ciudad de México, Santiago o Lima suele dar por hecho que su póliza contempla el sismo, porque en su país es una decisión consciente. En Portugal la cobertura de <em>fenómenos sísmicos</em> hay que contratarla; si no se hace, el terremoto no está cubierto. El Gobierno ha anunciado un seguro sísmico obligatorio con un fondo público, pero a la fecha de redacción no está en vigor. Véase <a href="/es/seguro-terremoto-portugal/">el terremoto en Portugal</a>.</p>
    <h3>La responsabilidad civil no viene sola</h3>
    <p>La póliza de hogar portuguesa — <em>multirriscos habitação</em> — se centra en el edificio y el contenido. La responsabilidad civil familiar es una opción, a menudo limitada a la propia vivienda. Para una familia con patrimonio, hay que pedirla expresamente y con un límite adecuado.</p>
    <h3>Todo empieza por el NIF y el domicilio</h3>
    <p>Las aseguradoras portuguesas piden NIF al tomador y, en salud, a cada persona asegurada. Y la póliza de salud se emite con domicilio de residencia en Portugal. Por eso el orden del traslado importa tanto. Véase <a href="/es/mudarse-a-portugal-seguros/">mudarse a Portugal</a>.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="coberturas">
  <div class="container narrow article-body">
    <h2 id="coberturas">Las coberturas, una por una</h2>
    <ul class="hub-list">
      <li class="hub-item">
        <h3><a href="/es/seguro-medico-visado-portugal/">Seguro médico para el visado</a></h3>
        <p>D7, D8, D2: lo que pide el consulado y por qué la póliza portuguesa llega después.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/seguro-salud-internacional/">Seguro de salud en Portugal</a></h3>
        <p>El SNS, la póliza portuguesa, la internacional y cómo seguir atendiéndose en su país.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/seguro-hogar-alto-valor/">Seguro de hogar en Portugal</a></h3>
        <p>Viviendas de alto valor, coste de reconstrucción, arte y joyas a valor convenido.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/seguro-coche-portugal/">Seguro de auto en Portugal</a></h3>
        <p>Su permiso latinoamericano, el canje en el IMT y su historial como conductor.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/seguro-responsabilidad-civil-familiar/">Responsabilidad civil familiar</a></h3>
        <p>Límites de varios millones, en todo el mundo — Estados Unidos incluido, si se pide.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/seguro-vida-portugal/">Seguro de vida en Portugal</a></h3>
        <p>Para la hipoteca y para la familia: lo que exige el banco y lo que puede elegir usted.</p>
      </li>
    </ul>
  </div>
</section>

<section class="section plain" aria-labelledby="renovar">
  <div class="container narrow article-body">
    <h2 id="renovar">Renovación, cobro y siniestros</h2>
    <ul>
      <li><strong>Renovación automática.</strong> Las pólizas portuguesas se renuevan cada año salvo oposición por escrito. Para no renovar, el tomador debe comunicarlo con la antelación que fije la póliza — por regla general, al menos 30 días antes del vencimiento.</li>
      <li><strong>Cobro.</strong> Las aseguradoras cobran normalmente por domiciliación en una cuenta de la zona SEPA. Si todavía no tiene cuenta europea, díganoslo al pedir la propuesta y le indicaremos por escrito las alternativas en su caso.</li>
      <li><strong>Siniestros.</strong> Hay plazos para comunicarlos, y casi siempre son cortos. Véase <a href="/es/siniestros-portugal/">cómo se gestiona un siniestro en Portugal</a>.</li>
    </ul>
  </div>
</section>`, toSpain.guide),
  faqTitle: 'Seguros en Portugal — preguntas frecuentes',
  faq: [
    {
      q: '¿Puedo contratar seguros en Portugal sin vivir allí?',
      a: '<p>Depende del seguro. La vivienda que ya es suya puede asegurarse aunque usted viva fuera, con NIF portugués. La póliza de salud portuguesa, en cambio, se emite normalmente con domicilio de residencia en Portugal y NIF de cada asegurado. Para el periodo previo se usa un seguro de viaje o, según el caso, una póliza internacional.</p>',
    },
    {
      q: '¿Las pólizas están en español?',
      a: '<p>Las aseguradoras portuguesas emiten sus pólizas, por regla general, en portugués. Nosotros le explicamos cada una por escrito, en español, antes de firmar, y llevamos la correspondencia y los siniestros en su idioma.</p>',
    },
    {
      q: '¿Cuánto cuesta trabajar con un mediador?',
      a: '<p>Nada más allá de la prima. La remuneración del mediador está incluida en la prima y la paga la aseguradora.</p>',
    },
    {
      q: '¿Está cubierto el terremoto en Portugal?',
      a: '<p>Solo si se ha contratado la cobertura de <em>fenómenos sísmicos</em>, que hoy es opcional. Hay un seguro sísmico obligatorio anunciado, pero a la fecha de redacción no está en vigor. Le indicamos el coste adicional para que decida con la cifra delante.</p>',
    },
    {
      q: 'Venimos de Venezuela y todavía no tenemos cuenta bancaria europea. ¿Podemos contratar?',
      a: '<p>Díganoslo al pedir la propuesta. Las aseguradoras cobran normalmente por domiciliación en una cuenta SEPA; mientras la abre, le indicaremos por escrito qué alternativas existen para que la cobertura no tenga que esperar.</p>',
    },
  ],
  related: [
    { url: '/es/mudarse-a-portugal-seguros/', label: 'Mudarse a Portugal desde América Latina' },
    { url: '/es/seguro-medico-visado-portugal/', label: 'Seguro médico para el visado portugués' },
    { url: '/es/guia-seguros-portugal-espana/', label: 'Guía de seguros en Portugal y España' },
  ],
};
