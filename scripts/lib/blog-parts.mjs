/**
 * Shared building blocks for the generated listing pages (blog index,
 * pagination, category pages). Markup reuses the homepage's own classes so the
 * cards render identically to the Insights section on `/`.
 */
import { esc, ORIGIN } from './chrome.mjs';

export function card(a, i = 0) {
  const img = a.image
    ? `<img src="${esc(a.image)}" alt="${esc(a.imageAlt || a.title)}" width="640" height="360" loading="lazy" style="width: 100%; height: 100%; object-fit: cover; position: absolute; inset: 0;">`
    : '';
  // Cards without artwork carry the same inline gradient the homepage gives
  // them; without it they would fall back to a flat tile and look unfinished.
  const bgStyle = !a.image && a.imageGradient ? ` style="background: ${esc(a.imageGradient)};"` : '';
  const readLabel = a.lang === 'en' ? 'Read article' : 'Ler artigo';
  return `    <a href="${a.url}" class="blog-card fade-up" style="transition-delay: ${(i % 6) * 0.05}s; text-decoration: none; color: inherit;">
      <div class="blog-card-img">
        <div class="blog-card-img-bg"${bgStyle}>${img}</div>
        <div class="blog-card-tag">${esc(a.tag || '')}</div>
      </div>
      <div class="blog-card-body">
        <div class="blog-card-date">${esc(a.dateLabel || '')}</div>
        <h3 class="blog-card-title">${esc(a.title)}</h3>
        <p class="blog-card-excerpt">${esc(a.excerpt || a.description || '')}</p>
        <span class="blog-card-link">${readLabel}</span>
      </div>
    </a>`;
}

export const grid = (items) =>
  `<section class="blog-section" aria-label="${items[0]?.lang === 'en' ? 'Articles' : 'Artigos'}">\n  <div class="blog-grid">\n${items
    .map(card)
    .join('\n\n')}\n  </div>\n</section>`;

export function breadcrumbHtml(items) {
  return `<nav class="breadcrumb" aria-label="Breadcrumb">${items
    .map((it, i) =>
      (i ? '<span>&rsaquo;</span>' : '') +
      (it.url ? `<a href="${it.url}">${esc(it.name)}</a>` : esc(it.name))
    )
    .join('')}</nav>`;
}

/**
 * Numbered pagination. `href(n)` maps a page number to its URL so the PT and
 * EN sections can keep their own path shape.
 */
export function pagination(current, total, href, lang = 'pt') {
  if (total <= 1) return '';
  const prev = lang === 'en' ? 'Previous' : 'Anterior';
  const next = lang === 'en' ? 'Next' : 'Seguinte';
  const label = lang === 'en' ? 'Pagination' : 'Paginação';
  const out = [];
  if (current > 1) out.push(`<a href="${href(current - 1)}" rel="prev">&larr; ${prev}</a>`);
  for (let n = 1; n <= total; n++) {
    out.push(
      n === current
        ? `<span class="current" aria-current="page">${n}</span>`
        : `<a href="${href(n)}">${n}</a>`
    );
  }
  if (current < total) out.push(`<a href="${href(current + 1)}" rel="next">${next} &rarr;</a>`);
  return `<nav class="pagination" aria-label="${label}">${out.join('')}</nav>`;
}

const PHONE_ICON = `<svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.72 6.72l1.27-.33a2 2 0 012.11.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg>`;
const MAIL_ICON = `<svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`;
const PIN_ICON = `<svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`;

const ctaContacts = (phoneLabel, locationLabel) => `  <div class="cta-strip-actions">
    <div class="cta-contact-item">
      <div class="cta-contact-icon">${PHONE_ICON}</div>
      <div>
        <div class="cta-contact-label">${phoneLabel}</div>
        <div class="cta-contact-value"><a href="tel:+351928226570" style="color:inherit;text-decoration:none;">+351 928 226 570</a></div>
      </div>
    </div>
    <div class="cta-contact-item">
      <div class="cta-contact-icon">${MAIL_ICON}</div>
      <div>
        <div class="cta-contact-label">Email</div>
        <div class="cta-contact-value"><a href="mailto:insurance@adlerrochefort.com" style="color:inherit;text-decoration:none;">insurance@adlerrochefort.com</a></div>
      </div>
    </div>
    <div class="cta-contact-item">
      <div class="cta-contact-icon">${PIN_ICON}</div>
      <div>
        <div class="cta-contact-label">${locationLabel}</div>
        <div class="cta-contact-value">Lisboa &amp; Lagos, Portugal</div>
      </div>
    </div>
  </div>`;

export const CTA_PT = `<section class="cta-strip" aria-label="Contacto">
  <div class="cta-strip-text">
    <h2 class="cta-strip-title">Prefere falar<br><em>com alguém</em></h2>
    <p class="cta-strip-sub">Um mediador de seguros registado na ASF analisa a sua situação, compara as propostas do mercado e responde em 24 horas úteis. Sem compromisso.</p>
    <div style="margin-top:36px;display:flex;gap:18px;flex-wrap:wrap;align-items:center;">
      <a href="/#contacto" class="btn-primary">Pedir análise gratuita</a>
      <a href="https://wa.me/351928226570?text=${encodeURIComponent(
        'Olá, gostaria de falar sobre seguros com um mediador registado na ASF.'
      )}" class="btn-ghost" rel="noopener" target="_blank">Falar por WhatsApp</a>
    </div>
  </div>
${ctaContacts('Telefone', 'Localização')}
</section>`;

export const CTA_EN = `<section class="cta-strip" aria-label="Contact">
  <div class="cta-strip-text">
    <h2 class="cta-strip-title">Rather talk<br><em>it through</em></h2>
    <p class="cta-strip-sub">An ASF-registered insurance broker reviews your situation, compares the market and replies within one working day. No obligation, in English.</p>
    <div style="margin-top:36px;display:flex;gap:18px;flex-wrap:wrap;align-items:center;">
      <a href="/en/#contact" class="btn-primary">Request a free review</a>
      <a href="https://wa.me/351928226570?text=${encodeURIComponent(
        "Hi, I'd like to talk about insurance in Portugal with an ASF-registered broker."
      )}" class="btn-ghost" rel="noopener" target="_blank">Message on WhatsApp</a>
    </div>
  </div>
${ctaContacts('Phone', 'Location')}
</section>`;

export const metaHead = ({ title, description, canonical, ogImage, robots, hreflang = [], prev, next, feed }) =>
  [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}">`,
    robots ? `<meta name="robots" content="${robots}">` : '<meta name="robots" content="index, follow">',
    `<link rel="canonical" href="${ORIGIN}${canonical}">`,
    feed ? `<link rel="alternate" type="application/rss+xml" title="${esc(title)}" href="${ORIGIN}${feed}">` : '',
    prev ? `<link rel="prev" href="${ORIGIN}${prev}">` : '',
    next ? `<link rel="next" href="${ORIGIN}${next}">` : '',
    ...hreflang.map((h) => `<link rel="alternate" hreflang="${h.lang}" href="${ORIGIN}${h.url}">`),
    `<meta property="og:type" content="website">`,
    `<meta property="og:title" content="${esc(title)}">`,
    `<meta property="og:description" content="${esc(description)}">`,
    `<meta property="og:url" content="${ORIGIN}${canonical}">`,
    `<meta property="og:image" content="${ORIGIN}${ogImage || '/images/og-image-adlerrochefort.png'}">`,
    `<meta property="og:site_name" content="Adler &amp; Rochefort">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${esc(title)}">`,
    `<meta name="twitter:description" content="${esc(description)}">`,
    `<meta name="twitter:image" content="${ORIGIN}${ogImage || '/images/og-image-adlerrochefort.png'}">`,
  ]
    .filter(Boolean)
    .join('\n');
