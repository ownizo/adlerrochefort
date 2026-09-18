/**
 * Content for the US-audience hub — /en/insurance-for-americans-in-portugal/.
 *
 * Consumed by build-us-hub.mjs, rendered through scripts/lib/landing.mjs's
 * landingPage(), the same renderer the /seguros/* and /en/insurance/tvde/
 * pages use — per explicit instruction: "commercial landing page,
 * landing.mjs, like Spain's". This is an English-language page for a US
 * audience: a market variant of the existing English-language content, not
 * a translation of anything, so it carries no hreflang alternate to any PT
 * or NL page (same rule already applied to the Spain cluster, confirmed in
 * the block 5.8 hreflang review).
 *
 * Editorial rules carried over from the Spain cluster's own data file:
 *  - No premium ranges, no invented statistics, no client counts.
 *  - No specific Portuguese statutory liability-limit figure is cited here
 *    unless sourced — several paragraphs below describe a difference in
 *    kind (no US-style title insurance market, no umbrella policy that
 *    extends here) rather than a specific number.
 *  - Links to the four existing US-audience articles
 *    (us-buyers-property-cover-portugal, property-title-risk-portugal,
 *    health-insurance-portugal-americans, health-insurance-portugal-usa)
 *    and to the four new satellites this hub was built to collect.
 */

const wa = (msg) => `https://wa.me/351928226570?text=${encodeURIComponent(msg)}`;

const GDPR =
  'We reply within 24 working hours. Your details are used only to prepare the review and handled under GDPR — see our <a href="/en/privacy-policy/">Privacy Policy</a>.';

const STEPS = [
  {
    title: 'Your situation',
    text: 'We start with what actually applies to you — a property purchase, a move, a visa timeline, cover you already hold in the US. This is where the assumptions that do not carry over from the US get flagged early, not at a claim.',
  },
  {
    title: 'Market consultation',
    text: 'We take the same risk, described the same way, to the insurers we work with. As an ASF-registered broker we do not represent one company — we negotiate with whichever of them can actually write the risk.',
  },
  {
    title: 'Side-by-side comparison',
    text: 'You receive the proposals in one table: limits, excesses, exclusions and premium. Comparing premiums without comparing exclusions tells you nothing.',
  },
  {
    title: 'Issuance and claims',
    text: 'We handle issuance and stay the point of contact if something happens. The notification, the assessment and the follow-through to payment go through us.',
  },
];

const HUB = {
  lang: 'en',
  url: '/en/insurance-for-americans-in-portugal/',
  slug: 'insurance-for-americans-in-portugal',
  metaTitle: 'Insurance for Americans in Portugal | US Buyers &amp; Residents | Adler &amp; Rochefort',
  metaDescription:
    'Insurance for US citizens buying property, relocating to, or already living in Portugal, explained in English by an ASF-registered broker. What is genuinely different from the US system, and what to arrange in what order.',
  h1: 'Insurance for Americans in Portugal',
  heroSub:
    'Buying property, relocating, or already settled in Portugal as a US citizen? Several assumptions that hold in the United States do not carry over here: there is no US-style title insurance market, no umbrella policy that extends to a Portuguese property or car, and the visa and health-insurance timelines do not run on a US clock. We set out what actually applies to your situation, in English, and arrange it.',
  ctaPrimary: 'Get an Insurance Review',
  ctaSecondary: 'Message us on WhatsApp',
  whatsapp: wa("Hi, I'm a US citizen looking into insurance for a property or a move to Portugal and would like to talk to someone."),
  trust: [
    'ASF-registered broker &middot; no. 425591790/3',
    'English throughout, in writing',
    'We tell you honestly what can be arranged',
  ],
  serviceName: 'Insurance guidance for Americans buying, relocating to, or living in Portugal',
  serviceType: 'Insurance intermediation — client qualification and referral',
  audience: 'US citizens, American expats and property buyers in Portugal',
  formSourceId: 'us-hub-source',
  crumbs: [
    { name: 'Home', url: '/en/' },
    { name: 'Insurance for Americans in Portugal' },
  ],

  law: [
    'Portugal does not have a title-insurance industry structured the way the US market is. Conveyancing risk here runs through the notary, the Land Registry (Conservat&oacute;ria do Registo Predial) and the lawyer or solicitor acting on the purchase, not through a title-insurance policy bought at closing. That does not mean the risk does not exist — it means it is handled differently, and assuming a US-style title search-and-insure process is the default is the single most common misunderstanding we see from American buyers. The detail is covered in full in <a href="/en/blog/property-title-risk-portugal/">title risk when buying property in Portugal</a>.',
    'A US homeowners or personal umbrella policy does not extend to a property, a car or a liability exposure in Portugal. Cover here has to be arranged locally, under a Portuguese policy, regardless of what is already held in the US — <a href="/en/blog/us-buyers-property-cover-portugal/">what changes when the buyer is American</a> sets out the practical differences property cover specifically runs into.',
    'Health cover and the D7, D8 and Golden Visa processes run on a Portuguese timeline, and that timeline often starts earlier than a US-based assumption would suggest — before residency is approved, not after. <a href="/en/blog/health-insurance-portugal-usa/">Health insurance between Portugal and the United States</a> and <a href="/en/blog/health-insurance-portugal-americans/">health insurance in Portugal for Americans</a> cover what actually carries over from US cover and what does not.',
    'We give the same kind of market-specific guidance to buyers and residents from other countries we work with regularly — see <a href="/en/insurance-for-irish-residents-portugal/">insurance for Irish residents</a> and <a href="/en/insurance-for-canadians-portugal/">insurance for Canadians</a> in Portugal if either is a closer fit for someone you know.',
  ],

  essentialIntro:
    'The core categories almost every American buyer, mover or resident in Portugal ends up needing to arrange locally.',
  essential: [
    {
      title: 'Home insurance',
      text: 'Buildings and contents cover for a property in Portugal, arranged under a Portuguese policy regardless of what is held in the US. Start with <a href="/en/home-insurance-quote/">home insurance in Portugal</a>, and read <a href="/en/blog/property-title-risk-portugal/">title risk when buying property in Portugal</a> before completion, not after.',
    },
    {
      title: 'Health insurance',
      text: 'Private cover alongside or instead of the public system (SNS), including what most D7/D8/Golden Visa applications require as proof of cover. See <a href="/en/health-insurance-quote/">health insurance in Portugal</a>.',
    },
    {
      title: 'Car insurance',
      text: 'Third-party liability is compulsory for any vehicle on Portuguese roads, whether imported or bought locally. See <a href="/en/car-insurance-portugal/">car insurance in Portugal</a>.',
    },
    {
      title: 'Landlord insurance',
      text: 'If the property will be let out, long-term or short-term, standard homeowner cover is not the right base policy. See <a href="/en/landlord-insurance-portugal/">landlord insurance in Portugal</a>.',
    },
  ],

  recommendedIntro:
    'The questions that come up specifically because the buyer, mover or resident is American — not covered by the essential categories above, and each explained in full on its own page.',
  recommended: [
    {
      title: 'US umbrella cover vs. Portuguese liability limits',
      text: 'A US umbrella policy does not travel with you. What a Portuguese liability policy actually covers, and how to think about the gap, in <a href="/en/blog/us-umbrella-vs-portuguese-liability-insurance/">US umbrella insurance vs. Portuguese liability cover</a>.',
    },
    {
      title: 'Your US driving record',
      text: 'What a Portuguese insurer can and cannot do with a US driving history when pricing car cover, in <a href="/en/blog/us-driving-record-car-insurance-portugal/">what your US driving record does (and does not) transfer</a>.',
    },
    {
      title: 'Claiming in Portugal, not with a US adjuster',
      text: 'A realistic picture of how a claim actually runs here, in <a href="/en/blog/making-a-claim-portugal-us-perspective/">claiming in Portugal when you are used to a US adjuster</a>.',
    },
    {
      title: 'Cover before residency is approved',
      text: 'D7, D8 and Golden Visa applicants often need proof of cover before the visa is granted, not after. What that means in practice, in <a href="/en/blog/insurance-before-residency-d7-d8-golden-visa/">taking out cover before D7/D8/Golden Visa residency is approved</a>.',
    },
  ],

  mistakes: [
    {
      title: 'Looking for a title-insurance policy',
      text: 'Portugal does not sell property risk this way. Time spent searching for a US-equivalent title policy is time not spent on the notary, Land Registry and legal-due-diligence steps that actually manage the risk here.',
    },
    {
      title: 'Assuming a US umbrella policy already covers it',
      text: 'It does not extend to Portugal. Liability exposure here needs a Portuguese policy, arranged separately, regardless of the limits held in the US.',
    },
    {
      title: 'Waiting until after the visa is approved to arrange health cover',
      text: 'Several residency routes ask for proof of cover as part of the application itself. Arranging it only once approved can mean applying with the wrong document, or later than the process actually required.',
    },
    {
      title: 'Assuming a claim will run the way it does with a US carrier',
      text: 'Correspondence, assessment and settlement in Portugal follow a different process and, for an international client, run in English by arrangement rather than by default. Knowing that before a claim, not during one, is the point of arranging cover with a broker who works in English from the outset.',
    },
  ],

  steps: STEPS,

  faq: [
    {
      q: 'Do I need Portuguese insurance if I already have a US policy?',
      a: 'Almost always, yes, for anything located in Portugal. US home, auto and umbrella policies do not extend to a Portuguese property, vehicle or liability exposure — cover here is arranged under a Portuguese policy, separately from whatever you hold in the US.',
    },
    {
      q: 'Is there a Portuguese equivalent of US title insurance?',
      a: 'Not structured the same way. Portugal handles conveyancing risk through the notary, the Land Registry and the lawyer acting on the purchase rather than through a title-insurance policy bought at closing. See <a href="/en/blog/property-title-risk-portugal/">title risk when buying property in Portugal</a> for what actually protects a buyer here.',
    },
    {
      q: 'When should I arrange health insurance if I am applying for a D7, D8 or Golden Visa?',
      a: 'Often before the visa is approved, not after — several application routes ask for proof of cover as part of the submission itself. Confirm the specific requirement for your route before assuming the timeline works the way US health cover does.',
    },
    {
      q: 'Does my US driving record help when insuring a car in Portugal?',
      a: 'It depends on what a Portuguese insurer will accept as evidence, which is not the same question as whether the record itself is good. See <a href="/en/blog/us-driving-record-car-insurance-portugal/">what your US driving record does and does not transfer</a>.',
    },
    {
      q: 'Do you handle everything in English?',
      a: 'Yes. Quotes, policy explanations, correspondence and claims are handled in English throughout. Portuguese insurers issue their policies in Portuguese because the law requires it; we make sure you understand exactly what one says before you sign.',
    },
  ],

  finalCta: `<section class="cta-strip" aria-label="Contact">
  <div class="cta-strip-text">
    <h2 class="cta-strip-title">Get a written insurance review</h2>
    <p class="cta-strip-sub">Tell us about the property, the move, or the visa timeline. We reply in writing, in English, within 24 working hours — including telling you plainly if something falls outside what we can currently arrange.</p>
    <div style="margin-top:36px;display:flex;gap:18px;flex-wrap:wrap;align-items:center;">
      <a href="#pedido" class="btn-primary">Get an Insurance Review</a>
      <a href="${wa("Hi, I'm a US citizen looking into insurance for a property or a move to Portugal and would like to talk to someone.")}" class="btn-ghost" rel="noopener" target="_blank">Message us on WhatsApp</a>
    </div>
  </div>
  <div class="cta-strip-actions">
    <div class="cta-contact-item">
      <div>
        <div class="cta-contact-label">Phone</div>
        <div class="cta-contact-value"><a href="tel:+351928226570" style="color:inherit;text-decoration:none;">+351 928 226 570</a></div>
      </div>
    </div>
    <div class="cta-contact-item">
      <div>
        <div class="cta-contact-label">Email</div>
        <div class="cta-contact-value"><a href="mailto:insurance@adlerrochefort.com" style="color:inherit;text-decoration:none;">insurance@adlerrochefort.com</a></div>
      </div>
    </div>
  </div>
</section>`,
};

export { HUB, GDPR };
