#!/usr/bin/env node
// Inserts the Private Client & Expat "one-stop-shop" block at the top of the
// Private Client hub pages, above the existing hero. Nothing existing is
// removed or rewritten: the block sits between <!-- AR-OSS --> markers and is
// replaced in place on re-runs. The existing H1 and all content stay as they are.
//
// Usage: node scripts/apply-one-stop-shop.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', 'public');
const CSS = '<link rel="stylesheet" href="/css/ar-oss.css">';
const START = '<!-- AR-OSS -->';
const END = '<!-- /AR-OSS -->';

const esc = (s) => s.replace(/&(?!(?:[a-z]+|#\d+);)/g, '&amp;');

// One entry per hub page. Spain comes first in every switch and list.
const PAGES = {
  es: {
    file: 'en/private-clients-spain/index.html',
    name: 'Spain',
    anchor: '#quote-form',
    headline: 'Everything you own in Spain, protected as one.',
    intro: 'High-value homes, luxury and classic cars, jewellery and health in Spain — from the same adviser who looks after Portugal.',
    pillars: [
      { n: '01', title: 'Home', kicker: 'Second home or primary residence', status: 'Available', href: '/en/home-insurance-spain/',
        points: ['High-value homes, from €1 million', 'Holiday and second homes for non-resident owners', 'Jewellery and watches insured separately from the home'] },
      { n: '02', title: 'Luxury & classic cars', kicker: 'Classic, collector or performance', status: 'Available', href: '/en/luxury-car-insurance-spain/',
        points: ['Luxury cars on agreed value, from €200,000', 'Classic cars — one car or a whole collection', 'Designed to sit alongside your home and collections cover'] },
      { n: '03', title: 'Health', kicker: 'International and domestic plans', status: 'International + domestic', href: '/en/health-insurance-portugal-spain/',
        points: ['International health (IPMI): treatment wherever you are, in Spain or abroad', 'Domestic health plans in Spain: coming soon', 'Plans built for life between Spain and your home country'] },
      { n: '04', title: 'Travel', kicker: 'Holidays and business trips', status: 'Buy online', href: '/en/travel-insurance/',
        points: ['Single-trip and annual travel cover', 'Compare and buy online in minutes', 'For holidays, family travel and business trips'] },
      { n: '05', title: 'Professional liability', kicker: 'For independent professionals', status: 'Available', href: '/en/therapists-yoga-pilates-liability-insurance/',
        points: ['Therapists, yoga, Pilates and Tai Chi instructors', 'Written under EU freedom of services', 'Same adviser, same file as your personal programme'] }
    ],
    beyond: [
      ['Art & collections', 'Fine art, wine and collections, at home or on loan.', '/en/art-jewellery-watches-insurance/'],
      ['Jewellery & watches', 'Standalone all-risks cover, at home and when you travel.', '/en/jewellery-watch-insurance-spain/'],
      ['Yachts & boats', 'Hull and liability for boats kept in Iberian marinas.', '/en/blog/marinas-yachts-portugal-spain/'],
      ['Family office', 'One coordinated programme for the family’s assets and people.', '/en/family-office-insurance/'],
      ['Family liability', 'Personal liability for the whole household.', '/en/family-liability-insurance-spain/'],
      ['Kidnap, ransom & extortion', 'Discreet cover and crisis response for families and executives.', '/en/kidnap-ransom-extortion-insurance/']
    ],
    guides: [
      ['Home', 'Second home insurance in Spain: what to check first', '/en/blog/second-home-insurance-spain/'],
      ['Cars', 'Classic and high-value car insurance in Spain', '/en/blog/classic-high-value-car-insurance-spain/'],
      ['Health', 'Allianz Care vs Cigna Global in Portugal & Spain', '/en/blog/allianz-care-vs-cigna-global-portugal-spain/']
    ]
  },
  pt: {
    file: 'en/private-clients/index.html',
    name: 'Portugal',
    anchor: '#ar-quote-form',
    headline: 'Everything you own in Portugal, protected as one.',
    intro: 'Specialist insurers for high-value homes, collector cars and international health — with domestic plans where they serve you better.',
    pillars: [
      { n: '01', title: 'Home', kicker: 'Second home or primary residence', status: 'Available', href: '/en/blog/luxury-home-insurance-portugal/',
        points: ['Primary residences, second homes and holiday homes', 'Insured on rebuild value, not market price', 'Jewellery, art and valuables written with the home policy'] },
      { n: '02', title: 'Luxury & classic cars', kicker: 'Classic, collector or performance', status: 'Available', href: '/en/blog/luxury-car-insurance-portugal/',
        points: ['Luxury and performance cars', 'Classic and collector cars on agreed value', 'Motor liability up to €50M, arranged alongside the vehicle cover'] },
      { n: '03', title: 'Health', kicker: 'International and domestic plans', status: 'International + domestic', href: '/en/international-health-insurance-portugal/',
        points: ['International health (IPMI): treatment wherever you are, in Portugal or abroad', 'Domestic health plans, including options for households over 65', 'A written comparison of every option on cover and claims service'] },
      { n: '04', title: 'Travel', kicker: 'Holidays and business trips', status: 'Buy online', href: '/en/travel-insurance/',
        points: ['Single-trip and annual travel cover', 'Compare and buy online in minutes', 'For holidays, family travel and business trips'] },
      { n: '05', title: 'Professional liability', kicker: 'For independent professionals', status: 'Available', href: '/en/professional-liability-insurance-portugal/',
        points: ['Therapists, consultants, instructors and liberal professions', 'Limits from €250,000', 'Proposals prepared individually, after a detailed review of the risk'] }
    ],
    beyond: [
      ['Art & collections', 'Fine art, wine and collections, at home or on loan.', '/en/art-jewellery-watches-insurance/'],
      ['Jewellery & watches', 'All-risks cover, at home and when you travel.', '/en/art-jewellery-watches-insurance/'],
      ['Yachts & boats', 'Hull and liability for boats kept in Iberian marinas.', '/en/blog/marinas-yachts-portugal-spain/'],
      ['Family office', 'One coordinated programme for the family’s assets and people.', '/en/family-office-insurance/'],
      ['Family liability', 'Personal liability for the whole household.', '/en/blog/family-liability-cover-portugal/'],
      ['Kidnap, ransom & extortion', 'Discreet cover and crisis response for families and executives.', '/en/kidnap-ransom-extortion-insurance/']
    ],
    guides: [
      ['Health', 'Allianz Care vs Cigna Global in Portugal & Spain', '/en/blog/allianz-care-vs-cigna-global-portugal-spain/'],
      ['Home', 'Rebuild value: how much to insure your home for', '/en/rebuild-value-home-insurance-portugal/'],
      ['Cars', 'Classic car insurance in Portugal: registration and agreed value', '/en/blog/classic-collector-cars-portugal-matriculation-agreed-value/']
    ]
  }
};

// Names come only from data/partners.json, the approved single source for the
// insurers shown as partners. Brokers and co-broking partners are split out.
const BROKERS = new Set(['Hispania', 'Innovarisk']);
const { partners: APPROVED } = JSON.parse(readFileSync(join(ROOT, '..', 'data', 'partners.json'), 'utf8'));
const INSURERS = APPROVED.filter((n) => !BROKERS.has(n));
const PARTNERS = APPROVED.filter((n) => BROKERS.has(n));

function block(key) {
  const p = PAGES[key];
  const sw = `<nav class="ar-oss-switch" aria-label="Country"><a href="/en/private-clients-spain/"${key === 'es' ? ' aria-current="page"' : ''}>España</a><a href="/en/private-clients/"${key === 'pt' ? ' aria-current="page"' : ''}>Portugal</a></nav>`;
  const cards = p.pillars.map((c) => `
    <article class="ar-oss-card">
      <div class="ar-oss-card-top"><span>${c.n} — ${esc(c.kicker)}</span><span class="ar-oss-badge">${esc(c.status)}</span></div>
      <h3>${esc(c.title)}</h3>
      <ul>${c.points.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
      <a class="ar-oss-btn ar-oss-btn-line" href="${c.href}">Explore ${esc(c.title.toLowerCase())} in ${p.name}</a>
    </article>`).join('');
  const beyond = p.beyond.map(([t, b, h]) => `<a class="ar-oss-tile" href="${h}"><strong>${esc(t)}</strong><span>${esc(b)}</span></a>`).join('');
  const guides = p.guides.map(([tag, t, h]) => `<a class="ar-oss-guide" href="${h}"><em>${esc(tag)}</em><strong>${esc(t)}</strong><span>Read the guide</span></a>`).join('');
  return `${START}
<div class="ar-oss" id="one-stop-shop">
  <section class="ar-oss-block ar-oss-dark ar-oss-hero" aria-labelledby="ar-oss-title">
    <div class="ar-oss-hero-main">
      <div>${sw}</div>
      <h2 id="ar-oss-title">One adviser for everything you live in, drive and value.</h2>
      <p class="ar-oss-lead">Home, luxury and collector cars, health, travel and professional liability — arranged with specialist insurers, held in one file, renewed on one calendar. For HNW and UHNW families settling in, investing in or moving between Spain and Portugal.</p>
      <div class="ar-oss-actions">
        <a class="ar-oss-btn ar-oss-btn-primary" href="${p.anchor}">Request a written proposal</a>
        <a class="ar-oss-btn ar-oss-btn-ghost" href="#ar-oss-pillars">What we arrange in ${p.name}</a>
      </div>
    </div>
    <div class="ar-oss-hero-side">
      <blockquote class="ar-oss-quote">“Protection first. The premium is a consequence, never the brief.”</blockquote>
      <p class="ar-oss-quote-by">Hugo Gonçalves, Founder &amp; Managing Director</p>
    </div>
  </section>

  <section class="ar-oss-block" id="ar-oss-pillars" aria-labelledby="ar-oss-pillars-h">
    <div class="ar-oss-head">
      <div><span class="ar-oss-eyebrow">The five pillars · ${p.name}</span><h2 id="ar-oss-pillars-h">${esc(p.headline)}</h2><p>${esc(p.intro)}</p></div>
    </div>
    <div class="ar-oss-grid">${cards}
    <article class="ar-oss-card ar-oss-card-accent">
      <h3>Built to work together — not five policies, one programme.</h3>
      <p>Collector cars and fine jewellery are often written alongside the home policy. We design the programme as a whole, so each cover strengthens the next and nothing falls between two insurers.</p>
      <a class="ar-oss-btn" href="${p.anchor}">Start with what you own</a>
    </article>
    </div>
  </section>

  <section class="ar-oss-block partners-section" aria-labelledby="ar-oss-partners-h">
    <div class="ar-oss-head"><div><h2 id="ar-oss-partners-h" style="font-size:clamp(28px,3vw,38px)">The insurers and partners we work with</h2></div><p>Independent: no exclusive agreement with any insurer. Each option is chosen on wording, limits and claims service.</p></div>
    <span class="ar-oss-label">Insurers</span>
    <ul class="ar-oss-chips">${INSURERS.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
    <span class="ar-oss-label">Specialist brokers &amp; co-broking partners</span>
    <ul class="ar-oss-chips ar-oss-chips-dark" style="margin-bottom:0">${PARTNERS.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
  </section>

  <section class="ar-oss-block ar-oss-dark" aria-labelledby="ar-oss-beyond-h">
    <div class="ar-oss-head"><div><span class="ar-oss-eyebrow">Beyond the five pillars</span><h2 id="ar-oss-beyond-h">For what doesn’t fit in a standard policy.</h2></div><p>Specialist cover, arranged within the same programme.</p></div>
    <div class="ar-oss-grid">${beyond}</div>
  </section>

  <section class="ar-oss-block" aria-labelledby="ar-oss-guides-h">
    <div class="ar-oss-head"><div><span class="ar-oss-eyebrow">Guides &amp; insights · ${p.name}</span><h2 id="ar-oss-guides-h">Read before you decide.</h2></div><a class="ar-oss-more" href="#ar-oss-more">More on private client cover in ${p.name} below</a></div>
    <div class="ar-oss-grid">${guides}</div>
  </section>
</div>
<div id="ar-oss-more"></div>
${END}
`;
}

for (const key of Object.keys(PAGES)) {
  const path = join(ROOT, PAGES[key].file);
  let html = readFileSync(path, 'utf8');
  const before = html.length;
  if (!html.includes(CSS)) {
    if (!html.includes('</head>')) throw new Error(`no </head> in ${path}`);
    html = html.replace('</head>', `${CSS}\n</head>`);
  }
  const b = block(key);
  if (html.includes(START)) {
    const s = html.indexOf(START), e = html.indexOf(END) + END.length + 1;
    html = html.slice(0, s) + b + html.slice(e);
  } else {
    const marker = '<!-- HERO -->';
    if (html.split(marker).length !== 2) throw new Error(`expected exactly one ${marker} in ${path}`);
    html = html.replace(marker, `${b}\n${marker}`);
  }
  writeFileSync(path, html);
  console.log(`${PAGES[key].file}: ${before} -> ${html.length} bytes`);
}
