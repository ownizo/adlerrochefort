/**
 * Content for the South African-audience hub —
 * /en/insurance-for-south-africans-portugal/ — and its three satellite
 * articles in the EN blog (October 2026).
 *
 * Why: around 12,500 South Africans have settled in Portugal (Overseas Trust
 * and Pension, reported by BusinessDay, 2024), a markedly wealthy and
 * English-speaking group, and South Africa has ranked among the leading
 * nationalities of the Portuguese golden visa. None of the existing English
 * hubs (US, Canada, Ireland) speaks to them.
 *
 * Same renderer and editorial rules as scripts/irish-hub.data.mjs: no
 * premium ranges, no invented statistics, no insurer named; legal points
 * hedged and sent to the authority. The angle: South Africa sits outside EU
 * social-security coordination (no S1, no EHIC), medical aid does not follow
 * a move, the licence and the claims record need checking, and South African
 * security habits translate into Portuguese policy conditions.
 */

const wa = (msg) => `https://wa.me/351928226570?text=${encodeURIComponent(msg)}`;

export const GDPR =
  'We reply within 24 working hours. Your details are used only to prepare the review and handled under GDPR — see our <a href="/en/privacy-policy/">Privacy Policy</a>.';

export const ZA_ARTICLES = [
  {
    slug: 'south-african-medical-aid-portugal-health-insurance',
    tag: 'For South Africans',
    category: 'moving-to-portugal',
    title: 'South African medical aid and health insurance in Portugal',
    metaTitle: 'South African Medical Aid and Health Insurance in Portugal | Adler & Rochefort',
    description:
      'Your medical aid scheme stops at the border once you live in Portugal. How the SNS, Portuguese health insurance and international cover fit together for South Africans.',
    keywords: 'South African medical aid Portugal, health insurance Portugal South Africans, SNS South Africans, international health insurance Portugal, D7 visa health insurance South Africa',
    image: '/images/blog/topics/1613490493576-7fde63acd811.jpg',
    readingTime: 6,
    body: `
    <p>For most South African families, medical aid is the backbone of private healthcare: the hospital plan, the gap cover, the specialist network you know. None of it is designed to follow you once you live in Portugal — and because South Africa is outside the EU, none of the European shortcuts apply either.</p>

    <h2>Medical aid does not move with you</h2>
    <p>South African medical schemes are built around care in South Africa. Some include limited emergency cover while travelling; that is not the same as cover for someone who now lives abroad. Ask your scheme, in writing, what happens to your membership and benefits once you emigrate — and do not resign before Portuguese cover is in force.</p>

    <h2>No S1, no EHIC</h2>
    <p>EU citizens moving to Portugal often rely on an S1 form or the European Health Insurance Card. As South African nationals, you do not have those routes. Access to the public <em>Serviço Nacional de Saúde</em> (SNS) comes with legal residence and registration at the local health centre, where you receive a <em>número de utente</em>. Until that is in place, private cover is your cover.</p>

    <h2>Portuguese or international health insurance</h2>
    <ul>
      <li><strong>Portuguese policies</strong> work through a provider network with a small co-payment per visit, and are issued to people with a <strong>residential address in Portugal</strong> and a <strong>Portuguese NIF for every insured person</strong>, children included.</li>
      <li><strong>International policies</strong> cover several countries — South Africa included, if the area of cover says so — with free choice of doctor and direct billing. They suit families who travel back regularly or want treatment at home.</li>
    </ul>

    <h2>The visa stage</h2>
    <p>For a D7 or D8 application, consulates usually ask for travel insurance with medical expenses and repatriation for the visa period. The Portuguese health policy follows once you have an address here. Check how long the travel policy can be extended: the wait for a residence appointment can be long.</p>

    <h2>Pre-existing conditions and age</h2>
    <p>Known conditions are normally excluded or subject to a waiting period. Some Portuguese policies have no medical questionnaire and no maximum entry age — useful for parents who move with the family. Health information goes directly to the insurer on the application, never through a website form.</p>
`,
    faq: [
      { q: 'Does my medical aid cover me in Portugal?', a: 'Not as cover for someone who lives here. Some schemes include limited emergency cover while travelling. Ask your scheme in writing before you emigrate.' },
      { q: 'Can I use the SNS as a South African?', a: 'Yes, once you are legally resident and registered at your local health centre. There is no S1 or EHIC route for South African nationals.' },
      { q: 'Can I buy Portuguese health insurance before I arrive?', a: 'Usually not: Portuguese insurers require a residential address in Portugal and a NIF for every insured person. Some international policies can be taken out beforehand.' },
      { q: 'Will a policy cover treatment back in South Africa?', a: 'A Portuguese policy, normally only emergencies abroad. An international policy whose area of cover includes South Africa can.' },
    ],
  },
  {
    slug: 'south-african-driving-licence-portugal-car-insurance',
    tag: 'For South Africans',
    category: 'motor',
    title: 'South African driving licence and car insurance in Portugal',
    metaTitle: 'South African Driving Licence and Car Insurance in Portugal | Adler & Rochefort',
    description:
      'What happens to a South African licence once you are resident in Portugal, how Portuguese motor cover is structured, and whether your no-claims record counts.',
    keywords: 'South African driving licence Portugal, exchange South African licence IMT, car insurance Portugal South Africans, no claims South Africa Portugal, motor insurance Portugal expats',
    image: '/images/blog/topics/1503376780353-7e6692767b70.jpg',
    readingTime: 5,
    body: `
    <p>Buying a car is usually one of the first things a South African family does in Portugal. Before the policy is signed, two things need settling: the licence, and the claims record. Neither works quite the way it does at home.</p>

    <h2>The licence: check it before the clock runs out</h2>
    <p>As a visitor you can drive on your South African licence under the rules that apply to your country. Once you become resident, the position changes. South Africa is not among the OECD and CPLP countries whose licences Portugal recognises under its simplified regime, so for most South African residents the route is an exchange (<em>troca</em>) at the IMT, the Portuguese transport authority. Whether that requires a test, and the deadline that runs from the start of your residence, are for the IMT to confirm in your case — check early.</p>
    <p>Why this belongs on an insurance page: after an accident, the first thing checked is whether the driver held a valid licence. An expired right to drive is exactly the loose end that turns a routine claim into a difficult one.</p>

    <h2>How Portuguese motor cover is built</h2>
    <ul>
      <li><strong>Third-party liability</strong> (<em>responsabilidade civil</em>) — compulsory.</li>
      <li><strong>Own damage</strong> (<em>danos próprios</em>) — the comprehensive element, usually with an excess expressed as a percentage of the vehicle’s value.</li>
      <li><strong>Optional covers</strong> — glass, theft, fire, roadside assistance, occupants — chosen one by one rather than bundled.</li>
    </ul>

    <h2>Your no-claims record</h2>
    <p>Portuguese insurers cannot see your South African history, and the EU rules that make insurers recognise each other’s claims certificates do not apply to South Africa. Before cancelling at home, ask your insurer for a letter stating years insured, drivers and claims. Some Portuguese insurers give it weight; others do not.</p>

    <h2>Bringing the car</h2>
    <p>Rarely worth it. A right-hand-drive vehicle built for the South African market faces European homologation, customs and the ISV vehicle tax. Most families sell at home and buy here.</p>
`,
    faq: [
      { q: 'Can I drive in Portugal on my South African licence?', a: 'As a visitor, under the rules for your country. As a resident, you will normally need to exchange it at the IMT within the period that applies; confirm whether a test is required in your case.' },
      { q: 'Will my South African no-claims record reduce my premium?', a: 'Not automatically. Some insurers give weight to a letter from your previous insurer; ask for it before cancelling.' },
      { q: 'What is compulsory?', a: 'Third-party liability. Own-damage cover is optional.' },
      { q: 'Should I ship my car from South Africa?', a: 'Rarely: homologation, customs and ISV make it slow and expensive, and right-hand drive is impractical. Most people buy locally.' },
    ],
  },
  {
    slug: 'south-african-owners-portugal-home-insurance',
    tag: 'For South Africans',
    category: 'home-property',
    title: 'Insuring a home in Portugal as a South African',
    metaTitle: 'Insuring a Home in Portugal as a South African | Adler & Rochefort',
    description:
      'Rebuild value in euros, earthquake as an option, security conditions and long absences: what South African owners in Cascais, Lisbon and the Algarve need to know.',
    keywords: 'home insurance Portugal South Africans, South African property Portugal insurance, rebuild value Portugal, earthquake insurance Portugal, Algarve villa insurance South African',
    image: '/images/blog/topics/1613977257363-707ba9348227.jpg',
    readingTime: 6,
    body: `
    <p>South African buyers tend to arrive with two instincts: security first, and a sharp eye on the exchange rate. Both are useful in Portugal — but they translate into policy conditions and sums insured in ways that are worth understanding before you sign.</p>

    <h2>Insure the rebuild value, in euros</h2>
    <p>The building sum insured should be the cost of rebuilding the house, not the price you paid and not a figure converted from rand at the time of purchase. If it is too low, Portuguese policies apply the <strong>proportional rule</strong>: a house insured for 60% of its rebuild value is paid 60% of every claim, however small. See <a href="/en/rebuild-value-home-insurance-portugal/">how to work out the rebuild value</a>, with the free SCRIM simulator.</p>

    <h2>Earthquake is an option, not a given</h2>
    <p>The Lisbon region and the Algarve are mainland Portugal’s highest seismic-risk areas, and earthquake cover (<em>fenómenos sísmicos</em>) is an optional extra with a percentage excess. If it is not chosen, it is not covered.</p>

    <h2>Security: declared, working, and a condition of cover</h2>
    <p>Many South African owners fit alarms, safes and monitored systems as a matter of course. In Portugal those measures often become <strong>conditions</strong> of the theft cover, particularly for jewellery and watches: they have to be declared, and working on the day of a loss. Armed-response services are far less common here; a monitored alarm and a trusted key-holder do the same job for the insurer.</p>

    <h2>Long absences</h2>
    <p>If the house stands empty while you are in South Africa, the unoccupancy clause matters: past a set number of consecutive days, theft and water-damage cover can be restricted. Declare how the house is really used.</p>

    <h2>High-value homes</h2>
    <p>For villas in Cascais, Quinta da Marinha or the Algarve, we place policies beyond the generalist insurers: an on-site survey, no proportional rule once the recommended sums are accepted, and — after a total loss, by agreement between insurer and insured — a settlement up to the maximum sum insured, above the rebuild value.</p>
`,
    faq: [
      { q: 'What sum should I insure my Portuguese home for?', a: 'The rebuild value in euros, not the purchase price. The APS SCRIM simulator gives an indicative figure; for higher-value homes the insurer’s survey sets it.' },
      { q: 'Is earthquake covered?', a: 'Only if you add the optional seismic cover.' },
      { q: 'Do my alarm and safe affect the policy?', a: 'Yes. Declared security measures are often conditions of theft cover and must be working at the time of a loss.' },
      { q: 'We spend months in South Africa each year. Does that matter?', a: 'Yes. Unoccupancy clauses can restrict theft and water-damage cover after a set number of days; declare the real pattern of use.' },
    ],
  },
];

export const ZA_HUB = {
  lang: 'en',
  url: '/en/insurance-for-south-africans-portugal/',
  slug: 'insurance-for-south-africans-portugal',
  metaTitle: 'Insurance for South Africans in Portugal | Adler &amp; Rochefort',
  metaDescription:
    'Insurance for South Africans buying property, relocating to, or living in Portugal: what medical aid leaves behind, your licence and claims record, and insuring a home in euros.',
  h1: 'Insurance for South Africans in Portugal',
  heroSub:
    'Relocating, retiring or investing in Portugal from South Africa? Several things you rely on at home do not carry over: medical aid stops at the border, there is no S1 or EHIC route, your licence and no-claims record need checking, and your home is insured in euros at its rebuild value. We explain it in writing, in English.',
  ctaPrimary: 'Get an Insurance Review',
  ctaSecondary: 'Message us on WhatsApp',
  whatsapp: wa("Hi, I'm South African and looking into insurance for a move or a property in Portugal."),
  trust: [
    'ASF-registered broker &middot; no. 425591790/3',
    'English throughout, in writing',
    'Lisbon and Lagos &middot; Portugal and Spain',
  ],
  serviceName: 'Insurance guidance for South Africans buying, relocating to, or living in Portugal',
  serviceType: 'Insurance intermediation',
  audience: 'South African citizens, families and property buyers in Portugal',
  formSourceId: 'south-african-hub-source',
  crumbs: [
    { name: 'Home', url: '/en/' },
    { name: 'Insurance for South Africans in Portugal' },
  ],

  law: [
    'South Africa is outside EU social-security co-ordination, so there is no S1 form and no European Health Insurance Card. Access to the Portuguese SNS comes with legal residence and registration at your local health centre; until then, private cover is your cover.',
    'Portuguese health insurers issue policies to people with a <strong>residential address in Portugal</strong> and a <strong>Portuguese NIF for every insured person</strong>. For the D7 or D8 visa application itself, consulates usually ask for travel insurance with medical cover.',
    'A South African licence is not among those Portugal recognises under its simplified OECD/CPLP regime; as a resident you will normally need to exchange it at the IMT. A South African no-claims record does not transfer automatically.',
    'We give the same kind of market-specific guidance to <a href="/en/insurance-for-americans-in-portugal/">Americans</a>, <a href="/en/insurance-for-canadians-portugal/">Canadians</a> and <a href="/en/insurance-for-irish-residents-portugal/">Irish residents</a>.',
  ],

  essentialIntro: 'The core categories almost every South African family in Portugal ends up arranging locally.',
  essential: [
    { title: 'Health insurance', text: 'Portuguese or international, alongside the SNS. See <a href="/en/blog/south-african-medical-aid-portugal-health-insurance/">medical aid and health insurance in Portugal</a> and <a href="/en/health-insurance-quote/">health insurance in Portugal</a>.' },
    { title: 'Home insurance', text: 'At the rebuild value, in euros, with earthquake decided deliberately. See <a href="/en/blog/south-african-owners-portugal-home-insurance/">insuring a home as a South African</a>.' },
    { title: 'Car insurance', text: 'Your licence, the Portuguese structure of cover and your claims record. See <a href="/en/blog/south-african-driving-licence-portugal-car-insurance/">South African licence and car insurance</a>.' },
    { title: 'Landlord insurance', text: 'If the property will be let, short-term or long-term. See <a href="/en/landlord-insurance-portugal/">landlord insurance in Portugal</a>.' },
  ],

  recommendedIntro: 'The questions that come up specifically because the buyer, mover or resident is South African.',
  recommended: [
    { title: 'The rebuild value', text: 'Not the price you paid, and not a rand conversion. See <a href="/en/rebuild-value-home-insurance-portugal/">rebuild value</a> and the SCRIM simulator.' },
    { title: 'High-value homes and collections', text: 'Survey, no proportional rule and agreed-value art and jewellery. See <a href="/en/private-clients/">Private Clients</a>.' },
    { title: 'Visa-stage cover', text: 'What the consulate asks for and when the Portuguese policy follows. See <a href="/en/expat-visa-insurance-portugal/">visa health insurance in Portugal</a>.' },
  ],

  mistakes: [
    { title: 'Resigning from medical aid before Portuguese cover starts', text: 'The gap between arrival and a Portuguese policy can be weeks. New cover first, resignation second.' },
    { title: 'Insuring the house at a converted purchase price', text: 'The right figure is the rebuild value in euros, reviewed every year.' },
    { title: 'Driving on a licence that is no longer valid for residents', text: 'Check the exchange route and deadline with the IMT as soon as you are resident.' },
    { title: 'Leaving security measures undeclared', text: 'Alarms and safes help only if the policy knows about them — and they must be working on the day.' },
  ],

  steps: [
    { title: 'Your situation', text: 'Visa route, timeline, the property, the family and what you still hold in South Africa.' },
    { title: 'Market consultation', text: 'We take the same risk, described the same way, to the insurers we work with, chosen for their cover and claims service rather than the lowest premium.' },
    { title: 'Side-by-side comparison', text: 'Limits, excesses, exclusions and premium in one table, in English.' },
    { title: 'Issuance and claims', text: 'We handle issuance and stay your point of contact if something happens.' },
  ],

  faq: [
    { q: 'Does my medical aid cover me once I live in Portugal?', a: 'Not as resident cover. See <a href="/en/blog/south-african-medical-aid-portugal-health-insurance/">medical aid and health insurance in Portugal</a>.' },
    { q: 'Is there an S1 or EHIC route for South Africans?', a: 'No. Those are EU mechanisms. Public healthcare comes with residence and SNS registration.' },
    { q: 'Can I keep driving on my South African licence?', a: 'As a resident you will normally need to exchange it at the IMT. Confirm the deadline and whether a test applies in your case.' },
    { q: 'Do you handle everything in English?', a: 'Yes. Quotes, policy explanations, correspondence and claims, in writing. Portuguese policies are issued in Portuguese; we make sure you understand them before you sign.' },
  ],

  finalCta: `<section class="cta-strip" aria-label="Contact">
  <div class="cta-strip-text">
    <h2 class="cta-strip-title">Get a written insurance review</h2>
    <p class="cta-strip-sub">Tell us about the move, the property and the cover you hold in South Africa. We reply in writing, in English, within 24 working hours.</p>
    <div style="margin-top:36px;display:flex;gap:18px;flex-wrap:wrap;align-items:center;">
      <a href="#pedido" class="btn-primary">Get an Insurance Review</a>
      <a href="${wa("Hi, I'm South African and looking into insurance for a move or a property in Portugal.")}" class="btn-ghost" rel="noopener" target="_blank">Message us on WhatsApp</a>
    </div>
  </div>
  <div class="cta-strip-actions">
    <div class="cta-contact-item"><div><div class="cta-contact-label">Phone</div><div class="cta-contact-value"><a href="tel:+351928226570" style="color:inherit;text-decoration:none;">+351 928 226 570</a></div></div></div>
    <div class="cta-contact-item"><div><div class="cta-contact-label">Email</div><div class="cta-contact-value"><a href="mailto:insurance@adlerrochefort.com" style="color:inherit;text-decoration:none;">insurance@adlerrochefort.com</a></div></div></div>
  </div>
</section>`,
};
