/**
 * /es/siniestros-portugal/
 *
 * Search intent: "cómo reclamar al seguro en Portugal", "siniestro seguro
 * hogar Portugal plazo", "reclamación aseguradora Portugal" — a Latin
 * American policyholder with a loss in Portugal, often while abroad, who has
 * to deal with a Portuguese insurer and a Portuguese loss adjuster.
 *
 * The angle: the claim happens in Portuguese, on Portuguese deadlines, and
 * often while the owner is on the other side of the Atlantic. The page sets
 * out the legal default notice period (eight days unless the policy says
 * otherwise), the duty to limit the damage, the written challenge, the
 * arbitral expert procedure of article 50 of the insurance contract law
 * (perito de parte), and the routes outside the contract (CIMPAS, Livro de
 * Reclamações, ASF) — mirroring the NL page's substance — and what we do
 * and do not do as intermediary.
 */
import { BREADCRUMB_PORTUGAL, withSibling, siblingCallout } from './shared.mjs';

const toSpainClaims = siblingCallout({
  label: '¿El siniestro es en España?',
  text: 'Allí el plazo legal para comunicarlo es de siete días, y los riesgos extraordinarios los paga el Consorcio.',
  url: '/es/seguros-espana/',
  linkText: 'Seguros en España',
});

export const PT_CLAIMS_PAGE = {
  slug: 'siniestros-portugal',
  url: '/es/siniestros-portugal/',
  cluster: 'pt-claims',
  title: 'Cómo se gestiona un siniestro en Portugal | Adler & Rochefort',
  description:
    'Siniestros en Portugal explicados en español: plazos de comunicación, el perito, cómo discutir la valoración y a quién reclamar si no hay acuerdo.',
  keywords:
    'siniestro seguro Portugal, reclamar aseguradora Portugal, plazo comunicar siniestro Portugal, perito seguro Portugal, peritaje arbitral Portugal, CIMPAS, libro de reclamaciones Portugal, ASF reclamación, siniestro casa Portugal extranjero',
  eyebrow: 'Portugal · Siniestros',
  h1: 'Cómo se gestiona un siniestro en Portugal — aunque usted esté al otro lado del Atlántico',
  standfirst:
    'El agua que inunda el piso de abajo, el robo durante el verano, la tormenta que levanta el tejado. El siniestro llega en portugués, con plazos portugueses, y a menudo mientras usted está en su país. Esto es lo que hay que hacer, en qué orden, y qué puede hacer si no está de acuerdo con lo que le ofrecen.',
  published: '2026-10-02T09:00:00+00:00',
  modified: '2026-10-02T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_PORTUGAL, { name: 'Siniestros' }],
  pullquote: 'La valoración de la aseguradora es una propuesta. No es la última palabra.',
  schemaType: 'Article',
  formHeading: 'Cuéntenos su siniestro',
  formBranch: '',
  formSubject: 'Siniestro en Portugal',
  formCta: 'Enviar',
  formIntro:
    'Si su póliza está con nosotros, escríbanos de inmediato con lo ocurrido, la fecha y fotografías. Si no lo está y necesita orientación, cuéntenos el caso: le diremos por escrito qué podemos hacer.',
  formPlaceholder:
    'Por ejemplo: escape de agua en nuestro piso de Lisboa mientras estábamos en Bogotá; el vecino de abajo tiene daños; lo descubrimos ayer.',
  sections: withSibling(`
<section class="section plain" aria-labelledby="primeras">
  <div class="container narrow article-body">
    <h2 id="primeras">Las primeras horas</h2>
    <ol class="process-steps">
      <li><div><strong>Limite el daño.</strong><span> Cierre el agua, proteja lo que pueda, llame a la asistencia de la póliza. La ley obliga al asegurado a hacer lo razonable para que el daño no crezca, y los gastos razonables para lograrlo se reembolsan.</span></div></li>
      <li><div><strong>Documente antes de reparar.</strong><span> Fotografías y vídeo de todo, también de lo que parezca menor. No tire nada dañado hasta que lo vea el perito, salvo que sea peligroso.</span></div></li>
      <li><div><strong>En caso de robo, denuncia.</strong><span> Ante la policía (PSP o GNR), con la lista de lo robado. La aseguradora la pedirá.</span></div></li>
      <li><div><strong>Comunique el siniestro en plazo.</strong><span> El que fije la póliza o, si no lo fija, ocho días desde que tuvo conocimiento. Por escrito.</span></div></li>
    </ol>
    <div class="callout">
      <span class="callout-label">Si usted está fuera de Portugal</span>
      El plazo corre desde que usted tiene conocimiento, no desde que vuelve. Tenga a alguien de confianza en Portugal con llaves que pueda abrir al técnico y al perito, y escríbanos desde donde esté: comunicamos el siniestro y llevamos la correspondencia en portugués por usted.
    </div>
  </div>
</section>

<section class="section tint" aria-labelledby="perito">
  <div class="container narrow article-body">
    <h2 id="perito">El perito y la valoración</h2>
    <p>La aseguradora nombra un perito que visita la vivienda, comprueba las causas y valora el daño. Su informe es la base de la propuesta de indemnización. Tres cosas que conviene saber:</p>
    <ul>
      <li><strong>El perito trabaja para la aseguradora.</strong> Es un profesional, pero lo nombra y le paga la compañía.</li>
      <li><strong>Compare lo que ve con lo que está asegurado.</strong> Si la vivienda real no coincide con la declarada — ampliaciones, uso, capital —, aparecerán las reducciones. Véase <a href="/es/vivienda-no-legalizada-portugal-seguro/">vivienda no legalizada</a>.</li>
      <li><strong>Guarde facturas y presupuestos.</strong> La valoración se discute mejor con documentos que con impresiones.</li>
    </ul>
  </div>
</section>

<section class="section plain" aria-labelledby="desacuerdo">
  <div class="container narrow article-body">
    <h2 id="desacuerdo">Si no está de acuerdo</h2>
    <h3>1. Pida la justificación por escrito</h3>
    <p>Qué se midió, qué pruebas se usaron y qué cláusula o exclusión explica cada reducción. Muchos desacuerdos se resuelven en este paso, cuando el razonamiento real aparece en papel en lugar de una cifra global en un correo.</p>
    <h3>2. El peritaje arbitral: su propio perito</h3>
    <p>La ley portuguesa del contrato de seguro prevé que la determinación de las causas, circunstancias y consecuencias de un siniestro pueda encargarse a peritos árbitros nombrados por las partes, en las condiciones que fije la póliza o que se acuerden después. En la práctica, usted nombra y paga un perito de parte; la aseguradora tiene el suyo; y, si no se ponen de acuerdo, la póliza dice cómo se nombra un tercero. Antes de contratar a nadie, confirme por escrito qué dice exactamente su póliza sobre este procedimiento y si hay plazo para invocarlo.</p>
    <h3>3. Las vías fuera del contrato</h3>
    <ul>
      <li><strong>El defensor del cliente</strong> (<em>provedor do cliente</em>) de la aseguradora, que toda compañía debe tener.</li>
      <li><strong>CIMPAS</strong>, el centro de información, mediación y arbitraje de seguros, una vía extrajudicial especializada en conflictos de contratos de seguro.</li>
      <li><strong>El <em>Livro de Reclamações</em></strong>, físico o electrónico, que deja constancia oficial y se remite al supervisor.</li>
      <li><strong>La ASF</strong>, el supervisor de seguros, que recibe reclamaciones sobre la conducta de las aseguradoras.</li>
      <li><strong>Los tribunales</strong>, siempre abiertos.</li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="nosotros">
  <div class="container narrow article-body">
    <h2 id="nosotros">Lo que hacemos — y lo que no</h2>
    <p>No somos la aseguradora: no decidimos el siniestro ni fijamos la indemnización. Lo que sí hacemos, para las pólizas que gestionamos:</p>
    <ul>
      <li>Comunicar el siniestro y llevar la correspondencia en portugués, explicándole todo en español.</li>
      <li>Ordenar la documentación para que nada se pierda y las fechas queden claras.</li>
      <li>Revisar la propuesta de la aseguradora frente a las condiciones de la póliza y decirle por escrito dónde vemos margen de discusión.</li>
      <li>Explicarle, si hace falta, qué dice su póliza sobre el peritaje arbitral antes de que contrate a un perito.</li>
    </ul>
  </div>
</section>`, toSpainClaims),
  faqTitle: 'Siniestros en Portugal — preguntas',
  faq: [
    {
      q: '¿Cuánto tiempo tengo para comunicar un siniestro en Portugal?',
      a: '<p>El que fije la póliza; si no fija ninguno, la ley establece ocho días desde que tuvo conocimiento del siniestro. Comuníquelo siempre por escrito y guarde la prueba.</p>',
    },
    {
      q: '¿Puedo reparar antes de que venga el perito?',
      a: '<p>Haga lo urgente para limitar el daño — y documéntelo —, pero no haga reparaciones definitivas ni tire lo dañado hasta que el perito lo vea o la aseguradora lo autorice por escrito.</p>',
    },
    {
      q: 'No estoy de acuerdo con la indemnización. ¿Qué hago?',
      a: '<p>Pida primero la justificación por escrito. Si no se resuelve, la ley y su póliza prevén un peritaje arbitral con un perito de parte nombrado por usted. Además, puede acudir al defensor del cliente de la aseguradora, a CIMPAS, al Livro de Reclamações, a la ASF o a los tribunales.</p>',
    },
    {
      q: 'Estoy fuera del país. ¿Pueden gestionarlo por mí?',
      a: '<p>Si la póliza está con nosotros, sí: comunicamos el siniestro y llevamos la correspondencia con la aseguradora en portugués, mientras usted nos sigue por escrito en español desde donde esté. Necesitará a alguien de confianza en Portugal para dar acceso a la vivienda.</p>',
    },
  ],
  related: [
    { url: '/es/seguro-hogar-alto-valor/', label: 'Seguro de hogar en Portugal' },
    { url: '/es/guia-seguros-portugal-espana/', label: 'Guía de seguros en Portugal y España' },
    { url: '/es/seguros-portugal/', label: 'Seguros en Portugal: visión general' },
  ],
};
