/**
 * /es/seguro-responsabilidad-profesional-portugal/
 *
 * Search intent: "seguro responsabilidad civil profesional Portugal",
 * "seguro nómada digital Portugal D8", "seguro freelancer Portugal" — a Latin
 * American professional who now works from Portugal (D8, or as a trabalhador
 * independente) for clients who are still in the Americas.
 *
 * The angle: the policy follows the place of work and the clients, and for
 * this reader the clients are in Mexico, Colombia or — most expensively —
 * the United States. Territorial scope and jurisdiction are therefore the
 * first questions, ahead of price. Claims-made wording and retroactive cover
 * explained for someone switching from a home-country policy. The minimum
 * limit we place (EUR 250,000) and the data we need to quote (full name,
 * address, NIF, annual turnover) come from how the firm works; response time
 * is not promised on the page.
 */
import { BREADCRUMB_PORTUGAL, withSibling, siblingCallout } from './shared.mjs';

const toSpainProfessional = siblingCallout({
  label: '¿Trabaja desde España?',
  text: 'El visado de nómada digital español tiene su propia lógica, y la responsabilidad profesional se adapta igual a sus clientes.',
  url: '/es/seguros-espana/',
  linkText: 'Seguros en España',
});

export const PT_PROFESSIONAL_PAGE = {
  slug: 'seguro-responsabilidad-profesional-portugal',
  url: '/es/seguro-responsabilidad-profesional-portugal/',
  cluster: 'pt-professional',
  title: 'Responsabilidad civil profesional en Portugal | Adler & Rochefort',
  description:
    'Responsabilidad civil profesional para latinoamericanos que trabajan desde Portugal: nómadas digitales D8, consultores e independientes con clientes en América.',
  keywords:
    'seguro responsabilidad civil profesional Portugal, seguro nómada digital Portugal, seguro D8 Portugal trabajo remoto, seguro freelancer Portugal, responsabilidad profesional consultor Portugal, seguro errores y omisiones Portugal, trabalhador independente seguro, seguro RC profesional clientes Estados Unidos',
  eyebrow: 'Portugal · Profesionales',
  h1: 'Responsabilidad civil profesional en Portugal, con clientes en América',
  standfirst:
    'Usted vive en Lisboa, pero sus clientes siguen en Ciudad de México, Bogotá o Miami. Un error en un informe, un plazo incumplido, un dato mal entregado: la reclamación llegará desde allí. La póliza que necesita es la que entiende dónde trabaja usted y dónde están ellos.',
  published: '2026-10-02T09:00:00+00:00',
  modified: '2026-10-02T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_PORTUGAL, { name: 'Responsabilidad profesional' }],
  pullquote: 'Su oficina está en Portugal. Sus clientes, y sus tribunales, pueden estar en otro continente.',
  schemaType: 'Article',
  formHeading: 'Solicite su propuesta de responsabilidad profesional',
  formBranch: 'Español · Responsabilidad civil',
  formSubject: 'Responsabilidad civil profesional en Portugal',
  formCta: 'Solicitar propuesta',
  formIntro:
    'Para cotizar necesitamos su nombre completo, su dirección completa, su NIF portugués, su actividad y su facturación anual — y, muy importante, en qué países están sus clientes. Le respondemos por escrito.',
  formPlaceholder:
    'Por ejemplo: consultora de marketing digital con visado D8 en Oporto, clientes en México y Estados Unidos, facturación de 120.000 € al año, un cliente exige seguro por contrato.',
  sections: withSibling(`
<section class="section plain" aria-labelledby="quien">
  <div class="container narrow article-body">
    <h2 id="quien">Para quién es</h2>
    <p>La responsabilidad civil profesional cubre las reclamaciones de clientes o terceros por errores, omisiones o negligencias en su trabajo — no por accidentes, que cubre la responsabilidad civil general. Es especialmente relevante para:</p>
    <ul>
      <li><strong>Profesionales con visado D8</strong> que trabajan en remoto para empresas o clientes de fuera de Portugal.</li>
      <li><strong>Consultores, asesores y analistas</strong> cuyo trabajo es una recomendación o un informe.</li>
      <li><strong>Desarrolladores, diseñadores y agencias digitales</strong>, donde un fallo puede costar dinero al cliente.</li>
      <li><strong>Terapeutas, instructores y profesionales del bienestar</strong> — yoga, pilates, masaje — que atienden personas.</li>
    </ul>
    <p>Muchos clientes, sobre todo empresas y en Estados Unidos, exigen por contrato un seguro con un límite mínimo. Revise sus contratos: la cifra suele estar ahí.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="ambito">
  <div class="container narrow article-body">
    <h2 id="ambito">La primera pregunta: dónde están sus clientes</h2>
    <p>Una póliza de responsabilidad profesional define dos cosas que para usted son decisivas:</p>
    <ul>
      <li><strong>El ámbito territorial</strong>: dónde puede producirse el error o el daño cubierto.</li>
      <li><strong>La jurisdicción</strong>: ante qué tribunales y bajo qué leyes se puede reclamar. Muchas pólizas europeas excluyen o limitan las reclamaciones presentadas en Estados Unidos y Canadá, porque allí el coste de un litigio es mucho mayor.</li>
    </ul>
    <div class="callout">
      <span class="callout-label">Lo que no conviene descubrir tarde</span>
      Si su principal cliente está en Estados Unidos y su póliza excluye esa jurisdicción, la póliza existe, pero no para la reclamación que más probablemente recibirá. Díganos desde el principio dónde están sus clientes; eso decide qué aseguradoras pueden cubrirle.
    </div>
  </div>
</section>

<section class="section plain" aria-labelledby="como">
  <div class="container narrow article-body">
    <h2 id="como">Cómo funciona la póliza</h2>
    <ul>
      <li><strong>Base de reclamación.</strong> La mayoría de estas pólizas cubren las reclamaciones presentadas mientras la póliza está en vigor, aunque el error sea anterior. Por eso no conviene dejar huecos entre una póliza y la siguiente.</li>
      <li><strong>Retroactividad.</strong> Si ya tenía una póliza en su país, pida que la nueva cubra los trabajos anteriores desde una fecha retroactiva, para que lo hecho antes de mudarse no quede sin cobertura.</li>
      <li><strong>Límite.</strong> Trabajamos con límites a partir de 250.000 € por reclamación; lo razonable depende de su actividad, de sus contratos y de dónde están sus clientes.</li>
      <li><strong>Defensa jurídica.</strong> Los gastos de defensa son a menudo la mayor parte del coste de una reclamación, incluso si al final no hay responsabilidad. Compruebe si están dentro o fuera del límite.</li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="datos">
  <div class="container narrow article-body">
    <h2 id="datos">Lo que necesitamos para cotizar</h2>
    <ol class="process-steps">
      <li><div><strong>Nombre completo y dirección completa</strong><span> — la de Portugal.</span></div></li>
      <li><div><strong>NIF portugués</strong><span> — el suyo, o el de su sociedad si factura a través de ella.</span></div></li>
      <li><div><strong>Actividad</strong><span>, descrita con precisión: «consultoría» no basta; «consultoría de marketing digital para empresas del sector salud», sí.</span></div></li>
      <li><div><strong>Facturación anual</strong><span> y, si es posible, su reparto por países.</span></div></li>
      <li><div><strong>Contratos</strong><span> que exijan un límite o una redacción concreta del certificado.</span></div></li>
    </ol>
    <p>Una descripción vaga de la actividad es el origen de muchos rechazos: si hace algo que la póliza no describe, la aseguradora puede discutir que esté cubierto.</p>
  </div>
</section>`, toSpainProfessional),
  faqTitle: 'Responsabilidad civil profesional en Portugal — preguntas',
  faq: [
    {
      q: '¿Es obligatorio el seguro de responsabilidad profesional en Portugal?',
      a: '<p>Para algunas profesiones reguladas, sí. Para la mayoría de consultores, profesionales digitales e independientes, no es obligatorio por ley, pero muchos clientes lo exigen por contrato, y es la protección básica de quien vive de su conocimiento.</p>',
    },
    {
      q: 'Mis clientes están en Estados Unidos. ¿Pueden cubrirme?',
      a: '<p>Hay pólizas que lo hacen, pero muchas excluyen o limitan las reclamaciones en Estados Unidos y Canadá. Es lo primero que comprobamos, antes de hablar de prima.</p>',
    },
    {
      q: 'Tenía un seguro profesional en mi país. ¿Qué pasa con los trabajos anteriores?',
      a: '<p>Pida que la nueva póliza tenga una fecha retroactiva que cubra esos trabajos, y no deje vencer la anterior antes de que la nueva esté en vigor. Las pólizas de reclamación no perdonan los huecos.</p>',
    },
    {
      q: '¿Qué límite mínimo trabajan?',
      a: '<p>A partir de 250.000 € por reclamación. El límite adecuado depende de su actividad, de sus contratos y de la jurisdicción de sus clientes; se lo proponemos por escrito.</p>',
    },
  ],
  related: [
    { url: '/es/seguro-medico-visado-portugal/', label: 'Seguro médico para el visado portugués' },
    { url: '/es/seguro-ciber-fraude-familiar/', label: 'Ciberriesgo, fraude e identidad de la familia' },
    { url: '/es/seguros-portugal/', label: 'Seguros en Portugal: visión general' },
  ],
};
