/**
 * Building blocks shared by the seven specialist ("niche") pages of the
 * Spanish cluster: kidnap & ransom, rural estates and vineyards, building a
 * high-value home, letting a luxury villa, horses, private aviation and family
 * cyber/fraud.
 *
 * These lines are placed through specialist markets and co-brokerage
 * partners, never named. No prices, no premium figures, and every page closes
 * with the same underwriting disclaimer. The markup reuses the classes the
 * home page already uses (section plain/tint, feature-grid, feature-card,
 * callout, process-steps, compare-table), so nothing new reaches the CSS.
 */

/** Section wrapper with the cluster's usual narrow article column. */
export const section = (band, id, inner) => `
<section class="section ${band}" aria-labelledby="${id}">
  <div class="container narrow article-body">
${inner}
  </div>
</section>`;

/** A grid of cards: [[title, body], ...]. */
export const cardsSection = (band, id, heading, intro, cards) => `
<section class="section ${band}" aria-labelledby="${id}">
  <div class="container">
    <div class="article-body" style="max-width:760px;">
      <h2 id="${id}">${heading}</h2>
      <p>${intro}</p>
    </div>
    <div class="feature-grid" style="margin-top:12px;">
${cards
  .map(
    ([h, p]) => `      <div class="feature-card">
        <h3>${h}</h3>
        <p>${p}</p>
      </div>`
  )
  .join('\n')}
    </div>
  </div>
</section>`;

/** Two-column Spain / Portugal comparison table: [[aspect, es, pt], ...]. */
export const compareTable = (caption, rows) => `    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">${caption}</caption>
        <thead>
          <tr><th scope="col"></th><th scope="col">En España</th><th scope="col">En Portugal</th></tr>
        </thead>
        <tbody>
${rows.map(([a, es, pt]) => `          <tr><td>${a}</td><td>${es}</td><td>${pt}</td></tr>`).join('\n')}
        </tbody>
      </table>
    </div>`;

/**
 * "Cómo trabajamos" for a specialist line. `market` names the kind of
 * specialist market in the page's own words (e.g. "mercados especializados en
 * aviación"), so the step reads naturally on each page.
 */
export const howWeWork = (band, market) =>
  section(
    band,
    'como-trabajamos',
    `    <h2 id="como-trabajamos">Cómo trabajamos</h2>
    <ol class="process-steps">
      <li><div><strong>Un análisis por escrito.</strong><span> Antes de hablar de pólizas, le enviamos por escrito cómo vemos el riesgo, qué cubren hoy sus pólizas y dónde están las lagunas.</span></div></li>
      <li><div><strong>El mercado especializado adecuado.</strong><span> Este riesgo no se coloca en el mercado minorista. Lo presentamos a ${market} a través de nuestros socios de mediación (coaseguro y co-corretaje), con la información ordenada como la necesita un suscriptor.</span></div></li>
      <li><div><strong>Las condiciones, explicadas antes de firmar.</strong><span> Coberturas, límites, sublímites, franquicias y exclusiones, en español y por escrito — incluido lo que la propuesta no cubre.</span></div></li>
      <li><div><strong>Un único interlocutor.</strong><span> La misma persona desde el primer contacto, en la renovación y ante cualquier cambio de la situación.</span></div></li>
      <li><div><strong>El siniestro, a su lado.</strong><span> Comunicación, documentación y seguimiento ante la aseguradora y sus peritos hasta el cierre del expediente.</span></div></li>
    </ol>`
  );

/** The closing disclaimer every specialist page carries. */
export const disclaimer = (band, extra = '') =>
  section(
    band,
    'aviso',
    `    <h2 id="aviso" class="visually-hidden">Aviso importante</h2>
    <div class="callout">
      <span class="callout-label">Aviso importante</span>
      Esta página es informativa y describe coberturas habituales en este mercado especializado. No es una oferta ni asesoramiento jurídico. La cobertura depende siempre de la suscripción del riesgo por la aseguradora y de las condiciones generales, especiales y particulares de la póliza efectivamente emitida; límites, franquicias y exclusiones varían de un caso a otro.${extra ? ` ${extra}` : ''}
    </div>`
  );
