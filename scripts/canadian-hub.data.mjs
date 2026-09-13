/**
 * Content for the Canadian-audience hub — /en/insurance-for-canadians-portugal/.
 *
 * Same shape and same renderer as scripts/us-hub.data.mjs and
 * scripts/irish-hub.data.mjs: landingPage() from scripts/lib/landing.mjs.
 * An English-language market variant, not a translation — no `hreflang`
 * set (landingPage() defaults to `[]`), same rule already applied to
 * Spain, the US hub and the Irish hub.
 *
 * Editorial rules carried over from the US and Irish hubs' own data files:
 *  - No premium ranges, no invented statistics, no client counts.
 *  - Provincial health coverage is described as provincial, not as a
 *    single national rule, per the explicit instruction for this block —
 *    no residency-rule or grace-period figure is asserted for any specific
 *    province here; that belongs on the satellite page, flagged where
 *    genuinely uncertain.
 *  - Links to the three new satellites this hub was built to collect, to
 *    the existing US and Irish hubs, and to the shared EN clusters this
 *    branch was told to connect to: the proportional-rule pillar
 *    (outdated-insured-values), the MGEN pillar
 *    (mgen-health-insurance-portugal) and the claims-disputes pillar
 *    (disputing-sum-insured-portugal).
 */

const wa = (msg) => `https://wa.me/351928226570?text=${encodeURIComponent(msg)}`;

const GDPR =
  'We reply within 24 working hours. Your details are used only to prepare the review and handled under GDPR — see our <a href="/en/privacy-policy/">Privacy Policy</a>.';

const STEPS = [
  {
    title: 'Your situation',
    text: 'We start with what actually applies to you — a property purchase, a move, a residency timeline, provincial health coverage you may still be relying on. This is where the assumptions that do not carry over from Canada get flagged early, not at a claim.',
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
  url: '/en/insurance-for-canadians-portugal/',
  slug: 'insurance-for-canadians-portugal',
  metaTitle: 'Insurance for Canadians in Portugal | Buyers &amp; Residents | Adler &amp; Rochefort',
  metaDescription:
    'Insurance for Canadian citizens buying property, relocating to, or already living in Portugal, explained in English by an ASF-registered broker. What provincial health coverage does and does not do once you leave, and what to arrange in what order.',
  h1: 'Insurance for Canadians in Portugal',
  heroSub:
    'Buying property, relocating, or already settled in Portugal as a Canadian citizen? Several assumptions that hold in Canada do not carry over here: provincial health coverage is provincial, not federal, and the residency rules and grace periods that govern what happens to it when you leave differ by province — there is no single national answer. Owning property here before you actually move, and insuring it correctly during that gap, is its own separate question. We set out what actually applies to your situation, in English, and arrange it.',
  ctaPrimary: 'Get an Insurance Review',
  ctaSecondary: 'Message us on WhatsApp',
  whatsapp: wa("Hi, I'm a Canadian citizen looking into insurance for a property or a move to Portugal and would like to talk to someone."),
  trust: [
    'ASF-registered broker &middot; no. 425591790/3',
    'English throughout, in writing',
    'We tell you honestly what can be arranged',
  ],
  serviceName: 'Insurance guidance for Canadian citizens buying, relocating to, or living in Portugal',
  serviceType: 'Insurance intermediation — client qualification and referral',
  audience: 'Canadian citizens, Canadian expats and non-resident property buyers in Portugal',
  formSourceId: 'canadian-hub-source',
  crumbs: [
    { name: 'Home', url: '/en/' },
    { name: 'Insurance for Canadians in Portugal' },
  ],

  law: [
    'Canadian public health coverage is administered <strong>provincially, not federally</strong> — there is no single Canadian rule for what happens to your coverage when you leave the country, only ten provincial and three territorial ones, and they genuinely differ on residency requirements and on how long a grace period lasts before coverage lapses. A rule you heard applied to a friend who left from Ontario is not necessarily the rule that applies to you leaving from British Columbia or Alberta. See <a href="/en/blog/canadian-provincial-health-coverage-portugal/">what happens to provincial health coverage when you leave Canada</a> for how to check the position for your own province rather than assume a national one exists.',
    'A Canadian driving record does not automatically become a Portuguese no-claims discount, and provincial auto or home insurance does not extend to a vehicle or a property in Portugal — cover here has to be arranged locally, under a Portuguese policy, regardless of what is already held in Canada. See <a href="/en/blog/canadian-driving-record-car-insurance-portugal/">Canadian driving record and Portuguese motor insurers</a>.',
    'Buying property in Portugal before you have moved, or before your residency is approved, raises its own question: the property still needs to be insured correctly from completion, and "correctly" is not the same policy you would arrange once you actually live there. See <a href="/en/blog/canadian-non-resident-property-insurance-portugal/">non-resident property ownership and cover before residency</a>, and, if the property will be let out in the meantime, <a href="/en/non-resident-landlord-insurance-portugal/">non-resident landlord insurance in Portugal</a> for the letting side specifically.',
    'We give the same kind of market-specific guidance to buyers and residents from other countries we work with regularly — see <a href="/en/insurance-for-americans-in-portugal/">insurance for Americans</a> and <a href="/en/insurance-for-irish-residents-portugal/">insurance for Irish residents</a> in Portugal if either is a closer fit for someone you know.',
  ],

  essentialIntro:
    'The core categories almost every Canadian buyer, mover or resident in Portugal ends up needing to arrange locally.',
  essential: [
    {
      title: 'Home insurance',
      text: 'Buildings and contents cover for a property in Portugal, arranged under a Portuguese policy regardless of what is held in Canada. See <a href="/en/home-insurance-quote/">home insurance in Portugal</a>.',
    },
    {
      title: 'Health insurance',
      text: 'Private cover alongside or instead of the public system (SNS), and what to arrange for any gap before or after provincial coverage stops. See <a href="/en/health-insurance-quote/">health insurance in Portugal</a>.',
    },
    {
      title: 'Car insurance',
      text: 'Third-party liability is compulsory for any vehicle on Portuguese roads, whether imported or bought locally. See <a href="/en/car-insurance-portugal/">car insurance in Portugal</a>.',
    },
    {
      title: 'Landlord insurance',
      text: 'If the property will be let out, long-term or short-term, standard homeowner cover is not the right base policy. See <a href="/en/landlord-insurance-portugal/">landlord insurance in Portugal</a> or, for a property you own from abroad, <a href="/en/non-resident-landlord-insurance-portugal/">non-resident landlord insurance in Portugal</a>.',
    },
  ],

  recommendedIntro:
    'The questions that come up specifically because the buyer, mover or resident is Canadian — not covered by the essential categories above, and each explained in full on its own page.',
  recommended: [
    {
      title: 'Provincial health coverage lapsing on departure',
      text: 'Why there is no single national rule, and how to check the residency requirement and grace period for your own province before you leave, in <a href="/en/blog/canadian-provincial-health-coverage-portugal/">what happens to provincial health coverage when you leave Canada</a>.',
    },
    {
      title: 'Your Canadian driving record',
      text: 'What evidence a Portuguese motor insurer can and cannot use from a Canadian driving history, in <a href="/en/blog/canadian-driving-record-car-insurance-portugal/">Canadian driving record and Portuguese motor insurers</a>.',
    },
    {
      title: 'Owning property before you move',
      text: 'Insuring a property you own in Portugal before residency is approved, or before you have actually relocated, in <a href="/en/blog/canadian-non-resident-property-insurance-portugal/">non-resident property ownership and cover before residency</a>.',
    },
  ],

  mistakes: [
    {
      title: 'Assuming provincial health coverage continues indefinitely while abroad',
      text: 'Every province sets its own absence rules. Some allow a limited period abroad before coverage lapses; none of them run on the same clock. Confirm your own province\'s rule directly rather than assuming it matches what you have heard about another one.',
    },
    {
      title: 'Assuming a Canadian driving record transfers automatically',
      text: 'Portuguese insurers decide case by case what weight, if any, to give a Canadian claims history. Bringing the right evidence helps; assuming it transfers by default does not.',
    },
    {
      title: 'Buying property before residency without arranging correct cover',
      text: 'A property owned from abroad, before you have moved or while residency is still pending, still needs to be insured correctly from the date of completion — not from the date you eventually arrive.',
    },
    {
      title: 'Letting the property without telling the insurer',
      text: 'If the property is let out while you are not yet resident, a standard private-use policy will not respond to a claim connected with a paying guest. Say so upfront.',
    },
  ],

  steps: STEPS,

  faq: [
    {
      q: 'Does my provincial health plan cover me while I am living in Portugal?',
      a: 'Not indefinitely, and the rule is set by your own province, not by a single national policy. Most provinces allow only a limited period of absence before coverage lapses, and the exact residency requirement and grace period differ from province to province. See <a href="/en/blog/canadian-provincial-health-coverage-portugal/">what happens to provincial health coverage when you leave Canada</a>.',
    },
    {
      q: 'Does my Canadian no-claims record help with car insurance in Portugal?',
      a: 'It depends on what evidence you can provide and what the specific insurer accepts, not on how good the record is. See <a href="/en/blog/canadian-driving-record-car-insurance-portugal/">Canadian driving record and Portuguese motor insurers</a>.',
    },
    {
      q: 'Can I buy and insure a property in Portugal before I am a resident?',
      a: 'Yes — non-resident property ownership is routine, but the property still needs correct cover from completion, not from the date you eventually move in. See <a href="/en/blog/canadian-non-resident-property-insurance-portugal/">non-resident property ownership and cover before residency</a>.',
    },
    {
      q: 'What if I want to let the property out before I move?',
      a: 'That is a commercial-use question a standard private residential policy does not answer. See <a href="/en/non-resident-landlord-insurance-portugal/">non-resident landlord insurance in Portugal</a>.',
    },
    {
      q: 'Do you handle everything in English?',
      a: 'Yes. Quotes, policy explanations, correspondence and claims are handled in English throughout. Portuguese insurers issue their policies in Portuguese because the law requires it; we make sure you understand exactly what one says before you sign.',
    },
  ],

  finalCta: `<section class="cta-strip" aria-label="Contact">
  <div class="cta-strip-text">
    <h2 class="cta-strip-title">Get a written insurance review</h2>
    <p class="cta-strip-sub">Tell us about the property, the move, or your provincial health coverage. We reply in writing, in English, within 24 working hours — including telling you plainly if something falls outside what we can currently arrange.</p>
    <div style="margin-top:36px;display:flex;gap:18px;flex-wrap:wrap;align-items:center;">
      <a href="#pedido" class="btn-primary">Get an Insurance Review</a>
      <a href="${wa("Hi, I'm a Canadian citizen looking into insurance for a property or a move to Portugal and would like to talk to someone.")}" class="btn-ghost" rel="noopener" target="_blank">Message us on WhatsApp</a>
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
