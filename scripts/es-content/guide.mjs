/**
 * /es/guia-seguros-portugal-espana/
 *
 * Search intent: "cómo funcionan los seguros en Portugal y España",
 * "diferencias seguros Europa América Latina", "glosario de seguros España
 * Portugal" — the market-explainer page, written (October 2026 rewrite) for a
 * Latin American reader who knows how insurance works at home and needs
 * both Iberian markets mapped onto that.
 *
 * It sets three columns side by side — the reader's own vocabulary, Spain
 * and Portugal — then supervisors (with the Latin American counterparts the
 * reader already knows), intermediaries, the three documents of a policy,
 * claims (anchor #siniestro, used by the "Why us" menu), renewal and
 * cancellation, complaints. Deadlines are given where the law sets a
 * default, and hedged to "according to the policy" elsewhere.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';

export const GUIDE_PAGE = {
  slug: 'guia-seguros-portugal-espana',
  url: '/es/guia-seguros-portugal-espana/',
  cluster: 'guide',
  title: 'Guía de seguros en Portugal y España | Adler & Rochefort',
  description:
    'Cómo funcionan los seguros en Portugal y España, explicado desde América Latina: vocabulario, supervisores, la póliza, siniestros y renovación.',
  keywords:
    'seguros en Portugal y España, guía de seguros Europa latinoamericanos, glosario seguros España Portugal, deducible franquicia, ASF Portugal, DGSFP España, mediador de seguros Portugal, anular seguro Portugal, siniestro Portugal España',
  eyebrow: 'Guía',
  h1: 'Guía de seguros en Portugal y España, explicada desde América Latina',
  standfirst:
    'Usted ya sabe cómo funciona un seguro. Lo que cambia al cruzar el Atlántico son las palabras, los plazos y algunas reglas que en Europa se dan por supuestas. Esta guía pone las tres columnas una al lado de la otra: su país, España y Portugal.',
  published: '2026-09-26T09:00:00+00:00',
  modified: '2026-10-02T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Guía de seguros' }],
  pullquote: 'Las exclusiones se leen antes de firmar. Es el único momento en que todavía se pueden cambiar.',
  schemaType: 'Article',
  formHeading: 'Haga su consulta sobre seguros en Portugal o España',
  formBranch: '',
  formSubject: 'Consulta general — seguros en Portugal y España',
  formCta: 'Enviar la consulta',
  formIntro:
    'Plantéenos su pregunta, por concreta o general que sea. Le respondemos por escrito y en español, normalmente en un día laborable — esté usted en Europa o en América.',
  formPlaceholder:
    'Por ejemplo: tenemos una póliza portuguesa que se renueva en marzo y no entendemos la franquicia de daños por agua; ¿pueden revisarla?',
  sections: `
<section class="section plain" aria-labelledby="vocabulario">
  <div class="container narrow article-body">
    <h2 id="vocabulario">Tres vocabularios para las mismas cosas</h2>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Términos de seguros en América Latina, España y Portugal</caption>
        <thead>
          <tr><th scope="col">En buena parte de América Latina</th><th scope="col">En España</th><th scope="col">En Portugal</th></tr>
        </thead>
        <tbody>
          <tr><td>Póliza</td><td>Póliza</td><td><em>Apólice</em></td></tr>
          <tr><td>Prima</td><td>Prima</td><td><em>Prémio</em></td></tr>
          <tr><td>Deducible</td><td>Franquicia</td><td><em>Franquia</em></td></tr>
          <tr><td>Suma asegurada</td><td>Suma o capital asegurado</td><td><em>Capital seguro</em></td></tr>
          <tr><td>Coaseguro (México), copago</td><td>Copago</td><td><em>Copagamento</em></td></tr>
          <tr><td>Periodo de espera</td><td>Carencia</td><td><em>Período de carência</em></td></tr>
          <tr><td>Preexistencias</td><td>Enfermedades preexistentes</td><td><em>Doenças pré-existentes</em></td></tr>
          <tr><td>Seguro de casa: inmueble y contenidos</td><td>Multirriesgo hogar: continente y contenido</td><td><em>Multirriscos habitação</em>: <em>edifício</em> y <em>recheio</em></td></tr>
          <tr><td>Cobertura amplia del auto</td><td>Todo riesgo</td><td><em>Danos próprios</em></td></tr>
          <tr><td>Siniestro, reclamo</td><td>Siniestro</td><td><em>Sinistro</em></td></tr>
          <tr><td>Ajustador</td><td>Perito</td><td><em>Perito</em></td></tr>
          <tr><td>RFC, RUT, cédula, CUIT</td><td>NIE</td><td><em>NIF</em></td></tr>
        </tbody>
      </table>
    </div>
    <p>Las equivalencias son funcionales y aproximadas: cada país tiene sus matices, y lo que vale es lo que dicen las condiciones de la póliza concreta.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="actores">
  <div class="container narrow article-body">
    <h2 id="actores">Quién es quién</h2>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Actores del mercado de seguros en España y en Portugal</caption>
        <thead>
          <tr><th scope="col"></th><th scope="col">En España</th><th scope="col">En Portugal</th></tr>
        </thead>
        <tbody>
          <tr><td>Supervisor</td><td>Dirección General de Seguros y Fondos de Pensiones (DGSFP)</td><td><em>Autoridade de Supervisão de Seguros e Fundos de Pensões</em> (ASF)</td></tr>
          <tr><td>Mediadores</td><td>Agentes (exclusivos o vinculados) y corredores</td><td><em>Agentes de seguros</em> y <em>corretores</em>, inscritos en la ASF</td></tr>
          <tr><td>Riesgos extraordinarios</td><td>Consorcio de Compensación de Seguros, incluido en la póliza</td><td>Sin organismo en funcionamiento; cobertura opcional en la póliza</td></tr>
          <tr><td>Reclamaciones</td><td>Servicio de atención al cliente de la aseguradora y, después, el supervisor</td><td>Gestión de reclamaciones de la aseguradora, <em>Livro de Reclamações</em>, CIMPAS y la ASF</td></tr>
        </tbody>
      </table>
    </div>
    <p>La DGSFP y la ASF cumplen la función que en su país tienen la CNSF en México, la Superintendencia Financiera en Colombia, la CMF en Chile, la SSN en Argentina o la SBS en Perú.</p>
    <p>Adler &amp; Rochefort es un agente de seguros inscrito en la ASF con el n.º 425591790/3. No tenemos contrato de exclusividad con ninguna aseguradora: trabajamos con varias y asesoramos dentro de nuestra cartera. En España ejercemos en régimen de libre prestación de servicios de la Unión Europea.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="poliza">
  <div class="container narrow article-body">
    <h2 id="poliza">Las tres partes de una póliza</h2>
    <p>En España y en Portugal, la póliza no es un documento, sino tres:</p>
    <ul>
      <li><strong>Condiciones generales</strong> (<em>condições gerais</em>) — el texto común a todos los clientes de ese producto: definiciones, coberturas posibles, exclusiones generales.</li>
      <li><strong>Condiciones especiales</strong> (<em>condições especiais</em>) — las garantías concretas contratadas, cada una con su texto.</li>
      <li><strong>Condiciones particulares</strong> (<em>condições particulares</em>) — las suyas: tomador, riesgo, sumas aseguradas, franquicias, fechas. Si algo contradice a las generales, prevalece lo particular.</li>
    </ul>
    <p>El error habitual es leer solo las particulares porque son las que llevan su nombre. Las exclusiones importantes están casi siempre en las otras dos.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="siniestro">
  <div class="container narrow article-body">
    <h2 id="siniestro">Cuando hay un siniestro</h2>
    <ol class="process-steps">
      <li><div><strong>Limite el daño</strong><span> — cierre la llave de paso, proteja lo que pueda. Es una obligación del asegurado y los gastos razonables suelen estar cubiertos.</span></div></li>
      <li><div><strong>Documente</strong><span> con fotografías y vídeo antes de reparar o tirar nada.</span></div></li>
      <li><div><strong>Denuncie</strong><span> ante la policía en caso de robo; la aseguradora pedirá la copia.</span></div></li>
      <li><div><strong>Comunique el siniestro en plazo</strong><span> — el que fije la póliza o, si no lo fija, el legal: siete días en España y ocho en Portugal desde que lo conoce. Escríbanos: lo comunicamos nosotros.</span></div></li>
      <li><div><strong>Peritación</strong><span> — la aseguradora envía un perito, el equivalente a su ajustador. Le acompañamos, en portugués o en español, y revisamos su informe.</span></div></li>
      <li><div><strong>Indemnización</strong><span> — o reparación. Si la propuesta no se corresponde con la póliza, la discutimos por escrito. Véase <a href="/es/siniestros-portugal/">siniestros en Portugal</a>.</span></div></li>
    </ol>
  </div>
</section>

<section class="section plain" aria-labelledby="renovacion">
  <div class="container narrow article-body">
    <h2 id="renovacion">Renovación y anulación</h2>
    <p>En los dos países la mayoría de las pólizas son anuales y se renuevan automáticamente. Quien llega de un mercado donde la póliza simplemente vence se sorprende: aquí, si no hace nada, sigue pagando. Para no renovar hay que oponerse por escrito antes del vencimiento — en España, el tomador con al menos un mes de antelación; en Portugal, por regla general, con al menos 30 días, salvo que la póliza diga otra cosa.</p>
    <ul>
      <li><strong>Los cambios en la renovación</strong> — prima, franquicia, condiciones — deben comunicarse con antelación. Léalos: es el momento en que una franquicia puede cambiar sin que nadie lo diga en voz alta.</li>
      <li><strong>Las pólizas ligadas a una hipoteca</strong> — si cambia de aseguradora, el banco debe recibir la nueva póliza con él como beneficiario antes de que termine la anterior. Nosotros coordinamos esa transición.</li>
      <li><strong>El cobro por domiciliación</strong> en una cuenta SEPA es lo habitual. Un recibo devuelto puede dejar la póliza sin efecto: vigile la cuenta, sobre todo mientras vive entre dos continentes.</li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="mediador">
  <div class="container narrow article-body">
    <h2 id="mediador">Por qué un mediador, y qué cuesta</h2>
    <p>La remuneración del mediador está incluida en la prima y la paga la aseguradora; contratar a través de nosotros no le cuesta más que contratar directamente. Lo que obtiene es trabajo: alguien que fija las sumas con usted, lee las exclusiones antes de firmar, compara coberturas por escrito y gestiona el siniestro hasta el final — en español, ante aseguradoras que en Portugal trabajan en portugués.</p>
  </div>
</section>`,
  faqTitle: 'Seguros en Portugal y España — preguntas generales',
  faq: [
    {
      q: '¿Quién supervisa a las aseguradoras y a los mediadores?',
      a: '<p>En Portugal, la ASF — <em>Autoridade de Supervisão de Seguros e Fundos de Pensões</em>; en España, la DGSFP. Cumplen la función de la CNSF mexicana, la Superintendencia Financiera de Colombia o la CMF chilena. Puede comprobar nuestra inscripción en la ASF con el n.º 425591790/3.</p>',
    },
    {
      q: '¿En qué idioma trabajan?',
      a: '<p>En español: propuestas, explicación de las condiciones, correspondencia y siniestros. Las pólizas portuguesas se emiten por regla general en portugués, y se las explicamos por escrito en español antes de firmar; las españolas, en español.</p>',
    },
    {
      q: '¿Por qué se renueva mi póliza si yo no la he renovado?',
      a: '<p>Porque en España y en Portugal las pólizas anuales se renuevan automáticamente salvo que una de las partes se oponga por escrito antes del vencimiento, con la antelación que fijan la ley y la póliza. Si no quiere renovar, comuníquelo a tiempo y guarde el justificante.</p>',
    },
    {
      q: '¿Qué hago si no estoy de acuerdo con la indemnización?',
      a: '<p>Primero, la reclamación ante la propia aseguradora, por escrito y con los fundamentos de la póliza — eso lo hacemos nosotros. Si no se resuelve, en Portugal existen el peritaje arbitral, CIMPAS, el <em>Livro de Reclamações</em> y la ASF; en España, el servicio de atención al cliente de la aseguradora y el servicio de reclamaciones del supervisor.</p>',
    },
    {
      q: '¿Es más caro contratar a través de un mediador?',
      a: '<p>No. La remuneración del mediador está incluida en la prima y la paga la aseguradora, contrate usted directamente o a través de nosotros.</p>',
    },
  ],
  related: [
    { url: '/es/seguros-portugal/', label: 'Seguros en Portugal: visión general' },
    { url: '/es/seguros-espana/', label: 'Seguros en España: visión general' },
    { url: '/es/siniestros-portugal/', label: 'Cómo se gestiona un siniestro en Portugal' },
  ],
};
