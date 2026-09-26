/**
 * /es/guia-seguros-portugal-espana/
 *
 * Search intent: "seguros en Portugal", "cómo funcionan los seguros en
 * Portugal" — the market-explainer page, written for a reader who already
 * knows the Spanish market and needs the Portuguese one mapped onto it.
 *
 * It sets the two markets side by side: supervisors (ASF / DGSFP), agents and
 * brokers, the three documents of a policy, claims, renewal and cancellation,
 * complaints. Deadlines are hedged to "según las condiciones" wherever they
 * depend on the contract rather than on the law.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';

export const GUIDE_PAGE = {
  slug: 'guia-seguros-portugal-espana',
  url: '/es/guia-seguros-portugal-espana/',
  cluster: 'guide',
  title: 'Guía de seguros en Portugal y España | Adler & Rochefort',
  description:
    'Cómo funciona el mercado de seguros portugués frente al español: supervisores, mediadores, las partes de la póliza, el siniestro, la renovación y la anulación.',
  keywords:
    'seguros en Portugal, guía seguros Portugal, mercado asegurador portugués, ASF Portugal, mediador de seguros Portugal, anular seguro Portugal, siniestro Portugal, seguros España y Portugal',
  eyebrow: 'Guía',
  h1: 'Guía de seguros en Portugal y España: cómo funciona el mercado',
  standfirst:
    'Si conoce el mercado español, conoce ya la mitad del portugués. Esta guía se ocupa de la otra mitad: quién es quién, qué documentos forman la póliza, cómo se gestiona un siniestro y cómo se renueva o se anula un contrato.',
  published: '2026-09-26T09:00:00+00:00',
  modified: '2026-09-26T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Guía de seguros' }],
  pullquote: 'Las exclusiones se leen antes de firmar. Es el único momento en que todavía se pueden cambiar.',
  schemaType: 'Article',
  formHeading: 'Haga su consulta sobre seguros en Portugal o España',
  formBranch: '',
  formSubject: 'Consulta general — seguros en Portugal y España',
  formCta: 'Enviar la consulta',
  formIntro:
    'Plantéenos su pregunta, por concreta o general que sea. Le respondemos por escrito y en español, normalmente en un día laborable.',
  formPlaceholder:
    'Por ejemplo: tenemos una póliza portuguesa que se renueva en marzo y no entendemos la franquicia de daños por agua; ¿pueden revisarla?',
  sections: `
<section class="section plain" aria-labelledby="actores">
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
          <tr><td>Riesgos extraordinarios</td><td>Consorcio de Compensación de Seguros</td><td>Sin equivalente; cobertura opcional en la póliza</td></tr>
          <tr><td>Reclamaciones</td><td>Servicio de atención al cliente de la aseguradora y, después, el supervisor</td><td>Gestión de reclamaciones de la aseguradora, <em>Livro de Reclamações</em> y la ASF</td></tr>
        </tbody>
      </table>
    </div>
    <p>Adler &amp; Rochefort es un agente de seguros inscrito en la ASF con el n.º 425591790/3. No tenemos contrato de exclusividad con ninguna aseguradora: trabajamos con varias y asesoramos dentro de nuestra cartera. En España ejercemos en régimen de libre prestación de servicios de la Unión Europea.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="poliza">
  <div class="container narrow article-body">
    <h2 id="poliza">Las tres partes de una póliza</h2>
    <p>Como en España, la póliza portuguesa (<em>apólice</em>) no es un documento, sino tres:</p>
    <ul>
      <li><strong>Condiciones generales</strong> (<em>condições gerais</em>) — el texto común a todos los clientes de ese producto: definiciones, coberturas posibles, exclusiones generales.</li>
      <li><strong>Condiciones especiales</strong> (<em>condições especiais</em>) — las garantías concretas contratadas, cada una con su texto.</li>
      <li><strong>Condiciones particulares</strong> (<em>condições particulares</em>) — las suyas: tomador, riesgo, sumas aseguradas, franquicias, fechas. Si algo contradice a las generales, prevalece lo particular.</li>
    </ul>
    <p>El error habitual es leer solo las particulares porque son las que llevan su nombre. Las exclusiones importantes están casi siempre en las otras dos.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="siniestro">
  <div class="container narrow article-body">
    <h2 id="siniestro">Cuando hay un siniestro</h2>
    <ol class="process-steps">
      <li><div><strong>Limite el daño</strong><span> — cierre la llave de paso, proteja lo que pueda. Es una obligación del asegurado y los gastos razonables suelen estar cubiertos.</span></div></li>
      <li><div><strong>Documente</strong><span> con fotografías y vídeo antes de reparar o tirar nada.</span></div></li>
      <li><div><strong>Denuncie</strong><span> ante la policía en caso de robo; la aseguradora pedirá la copia.</span></div></li>
      <li><div><strong>Comunique el siniestro en plazo</strong><span> — el plazo figura en las condiciones y suele ser corto. Llámenos: lo comunicamos nosotros.</span></div></li>
      <li><div><strong>Peritación</strong><span> — la aseguradora envía un perito. Le acompañamos, en portugués, y revisamos su informe.</span></div></li>
      <li><div><strong>Indemnización</strong><span> — o reparación. Si la propuesta no se corresponde con la póliza, la discutimos por escrito.</span></div></li>
    </ol>
  </div>
</section>

<section class="section tint" aria-labelledby="renovacion">
  <div class="container narrow article-body">
    <h2 id="renovacion">Renovación y anulación</h2>
    <p>La mayoría de las pólizas portuguesas son anuales y se renuevan tácitamente, como en España. Para no renovar, hay que comunicarlo antes del vencimiento con la antelación que fijen la ley y las condiciones; hágalo siempre por escrito y guarde el justificante. Dos diferencias prácticas:</p>
    <ul>
      <li><strong>Cambios en la prima o en las condiciones</strong> en la renovación deben comunicarse con antelación. Léalos: una renovación es el momento en que una franquicia puede cambiar sin que nadie lo diga en voz alta.</li>
      <li><strong>Pólizas ligadas a una hipoteca</strong> — si cambia de aseguradora, el banco debe recibir la nueva póliza con él como beneficiario antes de que termine la anterior. Nosotros coordinamos esa transición.</li>
    </ul>
  </div>
</section>

<section class="section plain" aria-labelledby="mediador">
  <div class="container narrow article-body">
    <h2 id="mediador">Por qué un mediador, y qué cuesta</h2>
    <p>La remuneración del mediador está incluida en la prima y la paga la aseguradora; contratar a través de nosotros no le cuesta más que contratar directamente. Lo que obtiene es trabajo: alguien que fija las sumas con usted, lee las exclusiones antes de firmar, compara coberturas por escrito y gestiona el siniestro hasta el final — en español, ante aseguradoras que trabajan en portugués.</p>
  </div>
</section>`,
  faqTitle: 'Seguros en Portugal y España — preguntas generales',
  faq: [
    {
      q: '¿Quién supervisa a las aseguradoras y a los mediadores en Portugal?',
      a: '<p>La ASF — <em>Autoridade de Supervisão de Seguros e Fundos de Pensões</em>. Es el equivalente a la DGSFP española. Todos los mediadores deben estar inscritos en ella; puede comprobar nuestra inscripción con el n.º 425591790/3.</p>',
    },
    {
      q: '¿En qué idioma trabajan?',
      a: '<p>En español: propuestas, explicación de las condiciones, correspondencia y siniestros. Las pólizas portuguesas se emiten por regla general en portugués, y se las explicamos por escrito en español antes de firmar; las españolas, en español.</p>',
    },
    {
      q: '¿Cómo anulo una póliza portuguesa?',
      a: '<p>Comunicando por escrito, antes del vencimiento y con la antelación que fijan la ley y las condiciones, que no desea renovarla. Si la póliza está ligada a una hipoteca, la nueva debe estar en vigor, con el banco como beneficiario, antes de que termine la anterior.</p>',
    },
    {
      q: '¿Qué hago si no estoy de acuerdo con la indemnización?',
      a: '<p>Primero, la reclamación ante la propia aseguradora, por escrito y con los fundamentos de la póliza — eso lo hacemos nosotros. Si no se resuelve, existen el <em>Livro de Reclamações</em> y la reclamación ante la ASF. La mayoría de las discrepancias se resuelven antes, cuando alguien discute con la póliza en la mano.</p>',
    },
    {
      q: '¿Es más caro contratar a través de un mediador?',
      a: '<p>No. La remuneración del mediador está incluida en la prima y la paga la aseguradora, contrate usted directamente o a través de nosotros.</p>',
    },
  ],
  related: [
    { url: '/es/seguro-hogar-alto-valor/', label: 'Seguro de hogar de alto valor' },
    { url: '/es/mudarse-a-portugal-seguros/', label: 'Mudarse a Portugal: los seguros en el orden correcto' },
  ],
};
