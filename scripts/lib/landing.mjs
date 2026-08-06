/**
 * Renderer for the commercial landing pages under /seguros/ (and their English
 * counterparts). Every page follows the same twelve-part structure so the
 * sections stay comparable and the schema stays consistent; the copy itself
 * comes from the spec object passed in.
 */
import { esc, ORIGIN, jsonLd, breadcrumbLd, ORGANIZATION, page } from './chrome.mjs';
import { breadcrumbHtml, metaHead, card } from './blog-parts.mjs';

const PARTNERS = ['Hiscox', 'Allianz', 'Zurich', 'Asisa', 'Innovarisk'];

const partnersSection = (eyebrow, title) => `<section class="partners-section">
  <div class="fade-up">
    <div class="section-eyebrow">${eyebrow}</div>
    <h2 class="section-title">${title}</h2>
  </div>
  <div class="partners-logos fade-up">
${PARTNERS.map((p) => `    <div class="partner-logo"><span class="partner-logo-text">${p}</span></div>`).join('\n')}
  </div>
</section>`;

export const PARTNERS_PT = partnersSection(
  'Seguradoras parceiras',
  'Comparamos o <em>mercado</em>'
);
export const PARTNERS_EN = partnersSection(
  'Partner insurers',
  'We compare the <em>market</em>'
);

/** Renders one form field from a compact spec. */
function field(f) {
  const cls = f.full ? ' full' : '';
  const req = f.required ? ' required' : '';
  const label = `<label for="${f.name}">${esc(f.label)}${f.required ? ' *' : ''}</label>`;
  if (f.type === 'select') {
    const opts = f.options
      .map((o) => `<option value="${esc(o)}">${esc(o)}</option>`)
      .join('');
    return `<div class="field${cls}">${label}<select id="${f.name}" name="${f.name}"${req}><option value="">${esc(f.placeholder || 'Selecionar')}</option>${opts}</select></div>`;
  }
  if (f.type === 'textarea') {
    return `<div class="field${cls}">${label}<textarea id="${f.name}" name="${f.name}" rows="3" placeholder="${esc(f.placeholder || '')}"${req}></textarea></div>`;
  }
  if (f.type === 'checkboxes') {
    return `<div class="field full">${label}<div class="lp-check-grid">${f.options
      .map(
        (o, i) =>
          `<label for="${f.name}-${i}"><input type="checkbox" id="${f.name}-${i}" name="${f.name}" value="${esc(o)}"> ${esc(o)}</label>`
      )
      .join('')}</div></div>`;
  }
  if (f.type === 'radio') {
    return `<div class="field full">${label}<div class="radio-row">${f.options
      .map(
        (o, i) =>
          `<label for="${f.name}-${i}"><input type="radio" id="${f.name}-${i}" name="${f.name}" value="${esc(o)}"${i === 0 && f.required ? ' required' : ''}> ${esc(o)}</label>`
      )
      .join('')}</div></div>`;
  }
  return `<div class="field${cls}">${label}<input type="${f.type || 'text'}" id="${f.name}" name="${f.name}" placeholder="${esc(f.placeholder || '')}"${req}></div>`;
}

/**
 * The inline quote form. Each landing page gets its own Netlify form name so
 * that its branch-specific fields are registered independently at deploy time.
 */
export function quoteForm({ formName, branch, title, subtitle, submit, fields, micro, lang = 'pt' }) {
  return `<div class="lp-form-card fade-up">
  <h2>${esc(title)}</h2>
  <p class="lp-form-sub">${esc(subtitle)}</p>
  <form name="${formName}" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/${lang === 'en' ? 'en/' : ''}obrigado/">
    <input type="hidden" name="form-name" value="${formName}">
    <input type="hidden" name="ramo" value="${esc(branch)}">
    <input type="hidden" name="source_url" id="${formName}-source" value="">
    <p style="display:none"><label>Don't fill this out: <input name="bot-field"></label></p>
    <div class="lp-form-grid">
${fields.map((f) => '      ' + field(f)).join('\n')}
    </div>
    <button type="submit" class="lp-form-submit">${esc(submit)}</button>
    <p class="lp-form-micro">${micro}</p>
  </form>
</div>`;
}

const list = (items) => `<ul class="lp-list">${items.map((i) => `<li>${i}</li>`).join('')}</ul>`;

const cardsGrid = (items) =>
  `<div class="lp-grid">${items
    .map((c) => `<div class="lp-card"><h3>${esc(c.title)}</h3><p>${c.text}</p></div>`)
    .join('')}</div>`;

const stepsGrid = (steps) =>
  `<div class="lp-steps">${steps
    .map(
      (s, i) =>
        `<div><div class="lp-step-num">Passo ${String(i + 1).padStart(2, '0')}</div><h3>${esc(s.title)}</h3><p>${s.text}</p></div>`
    )
    .join('')}</div>`;

const stepsGridEn = (steps) =>
  `<div class="lp-steps">${steps
    .map(
      (s, i) =>
        `<div><div class="lp-step-num">Step ${String(i + 1).padStart(2, '0')}</div><h3>${esc(s.title)}</h3><p>${s.text}</p></div>`
    )
    .join('')}</div>`;

const faqSection = (heading, faq) => `<section class="lp-section" id="faq">
  <h2>${esc(heading)}</h2>
  <div class="lp-faq">
${faq.map((q) => `    <details><summary>${esc(q.q)}</summary><p>${q.a}</p></details>`).join('\n')}
  </div>
</section>`;

const relatedSection = (heading, articles, landingCard) => {
  if (!articles.length && !landingCard) return '';
  return `<section class="blog-section" aria-label="${esc(heading)}">
  <div class="blog-header fade-up"><div><div class="section-eyebrow">${esc(heading)}</div></div></div>
  <div class="blog-grid">
${articles.map((a, i) => card(a, i)).join('\n\n')}
  </div>
</section>`;
};

/**
 * Builds a complete landing page. `spec` carries the copy; `related` the
 * articles picked automatically from the cluster.
 */
export function landingPage(spec, related = []) {
  const en = spec.lang === 'en';
  const T = en
    ? {
        law: 'What the law requires',
        essential: 'Essential cover',
        recommended: 'Cover worth adding',
        mistakes: 'The mistakes we see most often',
        how: 'How we work',
        faq: 'Frequently asked questions',
        related: 'Related reading',
      }
    : {
        law: 'O que a lei exige',
        essential: 'Coberturas essenciais',
        recommended: 'Coberturas recomendadas além do mínimo',
        mistakes: 'Erros mais comuns',
        how: 'Como trabalhamos',
        faq: 'Perguntas frequentes',
        related: 'Leitura relacionada',
      };

  const head = metaHead({
    title: spec.metaTitle,
    description: spec.metaDescription,
    canonical: spec.url,
    robots: 'index, follow',
    hreflang: spec.hreflang || [],
  });

  const body = [
    breadcrumbHtml(spec.crumbs),

    `<section class="lp-hero">
  <div class="lp-hero-inner">
    <div>
      <h1>${spec.h1}</h1>
      <p class="lp-hero-sub">${spec.heroSub}</p>
      <div class="lp-hero-actions">
        <a href="#pedido" class="btn-primary">${esc(spec.ctaPrimary)}</a>
        <a href="${spec.whatsapp}" class="btn-secondary" rel="noopener" target="_blank">${esc(spec.ctaSecondary)}</a>
      </div>
      <div class="lp-trust">
${spec.trust.map((t) => `        <div>${esc(t)}</div>`).join('\n')}
      </div>
    </div>
    <div id="pedido">
${spec.form}
    </div>
  </div>
</section>`,

    `<section class="lp-section">
  <h2>${T.law}</h2>
  ${spec.law.map((p) => `<p>${p}</p>`).join('\n  ')}
  ${spec.lawList ? list(spec.lawList) : ''}
</section>`,

    `<section class="lp-section" style="background:var(--cream2);max-width:none;">
  <div style="max-width:1400px;margin:0 auto;">
    <h2>${T.essential}</h2>
    <p>${spec.essentialIntro}</p>
    ${cardsGrid(spec.essential)}
  </div>
</section>`,

    `<section class="lp-section">
  <h2>${T.recommended}</h2>
  <p>${spec.recommendedIntro}</p>
  ${cardsGrid(spec.recommended)}
</section>`,

    `<section class="lp-section" style="background:var(--cream2);max-width:none;">
  <div style="max-width:1400px;margin:0 auto;">
    <h2>${T.mistakes}</h2>
    ${spec.mistakes.map((m) => `<h3>${esc(m.title)}</h3><p>${m.text}</p>`).join('\n    ')}
  </div>
</section>`,

    `<section class="lp-section">
  <h2>${T.how}</h2>
  ${en ? stepsGridEn(spec.steps) : stepsGrid(spec.steps)}
</section>`,

    en ? PARTNERS_EN : PARTNERS_PT,

    faqSection(T.faq, spec.faq),

    relatedSection(T.related, related),

    spec.finalCta,
  ]
    .filter(Boolean)
    .join('\n\n');

  const bodyEnd = [
    jsonLd({
      '@context': 'https://schema.org',
      '@graph': [
        ORGANIZATION,
        {
          '@type': 'Service',
          '@id': `${ORIGIN}${spec.url}#service`,
          name: spec.serviceName,
          serviceType: spec.serviceType,
          description: spec.metaDescription,
          url: ORIGIN + spec.url,
          provider: { '@id': `${ORIGIN}/#organization` },
          areaServed: { '@type': 'Country', name: 'Portugal' },
          audience: { '@type': 'Audience', audienceType: spec.audience },
        },
      ],
    }),
    jsonLd(breadcrumbLd(spec.crumbs)),
    jsonLd({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: spec.faq.map((q) => ({
        '@type': 'Question',
        name: q.q,
        acceptedAnswer: { '@type': 'Answer', text: q.a.replace(/<[^>]+>/g, '') },
      })),
    }),
    `<script>
  (function () {
    var f = document.getElementById('${spec.formSourceId}');
    if (f) f.value = window.location.href;
  })();
</script>`,
  ].join('\n');

  return page({ lang: en ? 'en-GB' : 'pt-PT', head, body, bodyEnd });
}
