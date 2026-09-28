/**
 * Trustpilot reviews block (September 2026).
 *
 * Real reviews from https://www.trustpilot.com/review/adlerrochefort.com,
 * quoted verbatim (excerpts marked with …), with reviewer name, country and
 * date as published. Update SCORE/COUNT/AS_OF and the quotes when the profile
 * changes — the block states the date it was taken so it never pretends to be
 * live. No AggregateRating markup: Google does not show self-served review
 * stars for an organisation's own reviews.
 *
 * Used by scripts/lib/market-cluster.mjs (generated hubs) and
 * scripts/insert-trustpilot.mjs (hand-authored pages).
 */
export const TRUSTPILOT_URL = 'https://www.trustpilot.com/review/adlerrochefort.com';
export const SCORE = '4.3';
export const COUNT = 8;

export const QUOTES = [
  {
    name: 'Jim Gilkeson', country: 'US', date: '2026-09-14',
    title: 'Great for this US expat with ‘vacation’ property awaiting my relocation',
    text: 'I was drawn to Adler &amp; Rochefort because they were comfortable with English communication … and worked with second/vacation home owners. It was reassuring that I was asked for specific information about the property and my needs, with follow-up, before a quote was obtained. … Coverage is a clear match for my needs.',
  },
  {
    name: 'J M', country: 'US', date: '2026-09-09',
    title: 'Hugo provided excellent detailed and…',
    text: 'Hugo provided excellent detailed and thorough service in the transition from our old policy to a new and better policy that served our needs. We highly recommend him and Adler &amp; Rochefort for their professionalism and attentiveness.',
  },
  {
    name: 'Georgie', country: 'GB', date: '2026-09-17',
    title: 'Amazing service - highly recommend',
    text: 'Amazing service. Hugo was hugely knowledgeable and gave us quotes incredibly fast. He was always at the end of the phone answering questions and was very diligent in getting the right insurance for us. Highly recommend.',
  },
];

const L = {
  pt: { h: 'O que dizem os nossos clientes', reviews: 'avaliações', all: 'Ver todas as avaliações no Trustpilot', note: 'Avaliações originais em inglês, publicadas no Trustpilot (setembro de 2026).', dec: ',' },
  en: { h: 'What our clients say', reviews: 'reviews', all: 'Read all reviews on Trustpilot', note: 'Reviews as published on Trustpilot (September 2026).', dec: '.' },
  de: { h: 'Was unsere Kunden sagen', reviews: 'Bewertungen', all: 'Alle Bewertungen auf Trustpilot lesen', note: 'Originalbewertungen auf Englisch, veröffentlicht auf Trustpilot (September 2026).', dec: ',' },
  fr: { h: 'Ce que disent nos clients', reviews: 'avis', all: 'Lire tous les avis sur Trustpilot', note: 'Avis originaux en anglais, publiés sur Trustpilot (septembre 2026).', dec: ',' },
  nl: { h: 'Wat onze klanten zeggen', reviews: 'beoordelingen', all: 'Alle beoordelingen op Trustpilot lezen', note: 'Oorspronkelijke beoordelingen in het Engels, gepubliceerd op Trustpilot (september 2026).', dec: ',' },
  es: { h: 'Lo que dicen nuestros clientes', reviews: 'opiniones', all: 'Leer todas las opiniones en Trustpilot', note: 'Opiniones originales en inglés, publicadas en Trustpilot (septiembre de 2026).', dec: ',' },
  it: { h: 'Che cosa dicono i nostri clienti', reviews: 'recensioni', all: 'Leggi tutte le recensioni su Trustpilot', note: 'Recensioni originali in inglese, pubblicate su Trustpilot (settembre 2026).', dec: ',' },
  pl: { h: 'Co mówią nasi klienci', reviews: 'opinii', all: 'Wszystkie opinie na Trustpilot', note: 'Oryginalne opinie w języku angielskim, opublikowane na Trustpilot (wrzesień 2026).', dec: ',' },
  dk: { h: 'Det siger vores kunder', reviews: 'anmeldelser', all: 'Læs alle anmeldelser på Trustpilot', note: 'Originale anmeldelser på engelsk, offentliggjort på Trustpilot (september 2026).', dec: ',' },
  se: { h: 'Vad våra kunder säger', reviews: 'omdömen', all: 'Läs alla omdömen på Trustpilot', note: 'Originalomdömen på engelska, publicerade på Trustpilot (september 2026).', dec: ',' },
  il: { h: 'מה הלקוחות שלנו אומרים', reviews: 'ביקורות', all: 'לכל הביקורות ב-Trustpilot', note: 'ביקורות מקוריות באנגלית, כפי שפורסמו ב-Trustpilot (ספטמבר 2026).', dec: '.' },
  zh: { h: '客户评价', reviews: '条评价', all: '在 Trustpilot 查看全部评价', note: '评价原文为英文，发布于 Trustpilot（2026年9月）。', dec: '.' },
};

const STAR = '<span class="tp-star" aria-hidden="true">★</span>';

export function trustpilotBlock(lang = 'en') {
  const t = L[lang] || L.en;
  const score = SCORE.replace('.', t.dec);
  const cards = QUOTES.map((q) => `      <figure class="tp-card" lang="en" dir="ltr">
        <div class="tp-stars" role="img" aria-label="5/5">${STAR.repeat(5)}</div>
        <blockquote><p class="tp-title">${q.title}</p><p>${q.text}</p></blockquote>
        <figcaption>${q.name} · ${q.country} · <time datetime="${q.date}">${q.date.split('-').reverse().join('.')}</time></figcaption>
      </figure>`).join('\n');
  return `<!-- trustpilot:start -->
<section class="tp-reviews" aria-labelledby="tp-title-${lang}">
  <style>
    .tp-reviews{background:#F5F1E8;padding:72px 24px}
    .tp-reviews .tp-inner{max-width:1120px;margin:0 auto}
    .tp-reviews h2{font-size:30px;line-height:1.2;color:#283113;margin:0 0 10px;text-align:center}
    .tp-reviews .tp-score{text-align:center;color:#565F48;font-size:15px;margin:0 0 36px}
    .tp-reviews .tp-score strong{color:#283113}
    .tp-reviews .tp-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px}
    .tp-reviews .tp-card{background:#fff;border:1px solid #E8E5DF;border-radius:10px;padding:24px;margin:0;display:flex;flex-direction:column;text-align:left}
    .tp-reviews .tp-stars{display:flex;gap:3px;margin-bottom:14px}
    .tp-reviews .tp-star{display:inline-flex;width:22px;height:22px;align-items:center;justify-content:center;background:#00B67A;color:#fff;font-size:15px;line-height:1}
    .tp-reviews blockquote{margin:0;flex:1}
    .tp-reviews blockquote p{margin:0 0 10px;color:#283113;font-size:15px;line-height:1.65}
    .tp-reviews .tp-title{font-weight:700}
    .tp-reviews figcaption{margin-top:14px;color:#565F48;font-size:13px}
    .tp-reviews .tp-foot{text-align:center;margin-top:28px;font-size:14px;color:#565F48}
    .tp-reviews .tp-foot a{color:#283113;font-weight:700;text-decoration:underline;text-underline-offset:3px}
  </style>
  <div class="tp-inner">
    <h2 id="tp-title-${lang}">${t.h}</h2>
    <p class="tp-score"><strong>TrustScore ${score}/5</strong> · ${COUNT} ${t.reviews} · Trustpilot</p>
    <div class="tp-grid">
${cards}
    </div>
    <p class="tp-foot"><a href="${TRUSTPILOT_URL}" target="_blank" rel="noopener">${t.all} →</a><br><span>${t.note}</span></p>
  </div>
</section>
<!-- trustpilot:end -->`;
}
