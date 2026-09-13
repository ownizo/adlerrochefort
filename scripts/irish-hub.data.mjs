/**
 * Content for the Irish-audience hub — /en/insurance-for-irish-residents-portugal/.
 *
 * Same shape and same renderer as scripts/us-hub.data.mjs: landingPage()
 * from scripts/lib/landing.mjs, the renderer /seguros/*, /en/insurance/tvde/
 * and the US hub already use. An English-language market variant of the
 * existing English-language content, not a translation of anything — no
 * `hreflang` set (landingPage() defaults to `[]`, the same as the US hub),
 * same rule already applied to Spain and to the US hub.
 *
 * Editorial rules carried over from the US hub's own data file:
 *  - No premium ranges, no invented statistics, no client counts.
 *  - Genuinely uncertain specifics (exact HIA loading percentages, whether a
 *    named insurer gives weight to a VHI/Laya/Irish Life letter) are not
 *    asserted — flagged with the .ar-verify pattern on the satellite pages
 *    instead of guessed at here.
 *  - Links to the three new satellites this hub was built to collect, to
 *    the existing US hub, and to the shared EN clusters this branch was
 *    told to connect to: the proportional-rule pillar
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
    text: 'We start with what actually applies to you — a property purchase, a move, a visa or residency timeline, cover you already hold with VHI, Laya or Irish Life. This is where the assumptions that do not carry over from Ireland get flagged early, not at a claim.',
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
  url: '/en/insurance-for-irish-residents-portugal/',
  slug: 'insurance-for-irish-residents-portugal',
  metaTitle: 'Insurance for Irish Residents in Portugal | VHI, Laya &amp; S1 | Adler &amp; Rochefort',
  metaDescription:
    'Insurance for Irish citizens buying property, relocating to, or already living in Portugal, explained in English by an ASF-registered broker. What VHI, Laya and Irish Life cover leaves behind, how the S1 route differs from the UK one, and what to arrange in what order.',
  h1: 'Insurance for Irish Residents in Portugal',
  heroSub:
    'Buying property, relocating, or already settled in Portugal as an Irish citizen? Several assumptions that hold in Ireland do not carry over here: VHI, Laya and Irish Life cover does not extend to a Portuguese property, car or liability exposure, community rating and lifetime community rating loading follow you in ways that are easy to overlook when you leave, and the S1 route works differently than it does for a UK national. We set out what actually applies to your situation, in English, and arrange it.',
  ctaPrimary: 'Get an Insurance Review',
  ctaSecondary: 'Message us on WhatsApp',
  whatsapp: wa("Hi, I'm an Irish citizen looking into insurance for a property or a move to Portugal and would like to talk to someone."),
  trust: [
    'ASF-registered broker &middot; no. 425591790/3',
    'English throughout, in writing',
    'We tell you honestly what can be arranged',
  ],
  serviceName: 'Insurance guidance for Irish citizens buying, relocating to, or living in Portugal',
  serviceType: 'Insurance intermediation — client qualification and referral',
  audience: 'Irish citizens, Irish expats and property buyers in Portugal',
  formSourceId: 'irish-hub-source',
  crumbs: [
    { name: 'Home', url: '/en/' },
    { name: 'Insurance for Irish Residents in Portugal' },
  ],

  law: [
    'Irish private health insurance runs on <strong>community rating</strong> — insurers charge the same premium for a given plan regardless of age or health status, with the trade-off of <strong>lifetime community rating</strong>: a loading applied if you take out cover, or take it out again, after age 35 without continuous prior cover. Moving to Portugal and later returning to Ireland, or simply letting a VHI, Laya or Irish Life policy lapse while abroad, can interact with that loading in ways most people do not check before they leave. Neither the exact loading nor how a specific insurer treats a gap caused by living in Portugal is asserted here — see <a href="/en/blog/vhi-laya-irish-life-portugal-health-insurance/">what transfers from VHI, Laya and Irish Life, and what does not</a> for what is confirmed and what is flagged for you to verify with the Health Insurance Authority or your own insurer before deciding. If age or a health history closes the door on a conventional Portuguese policy later on, a membership-based route such as MGEN is worth knowing about — see <a href="/en/blog/mgen-health-insurance-portugal/">how MGEN works and where it fits</a>.',
    'The S1 route works differently for an Irish national than for a UK one. Ireland is an EU member state, so S1 co-ordination for an Irish pensioner runs under the standard EU social security regulation rather than the Withdrawal Agreement provisions that carry a UK pensioner\'s entitlement across post-Brexit. The practical mechanics — who issues it, what it registers you for, what it does not replace — are covered in <a href="/en/blog/vhi-laya-irish-life-portugal-health-insurance/">the same page</a>, alongside our general note on <a href="/en/blog/health-cover-70-75-portugal/">private health cover at 70 and 75 in Portugal</a>, which covers the S1 route pensioners of any nationality can use once resident.',
    'A no-claims record built with an Irish motor insurer does not automatically become a Portuguese no-claims discount, and a VHI, Laya or Irish Life policy does not extend to a property, a car or a liability exposure here — cover has to be arranged locally, under a Portuguese policy, regardless of what is already held in Ireland. And if a Portuguese insurer\'s figure on a claim ever looks wrong, you are not stuck with it — see <a href="/en/blog/disputing-sum-insured-portugal/">disputing a property claim settlement in Portugal</a> for the escalation path.',
    'We give the same kind of market-specific guidance to buyers and residents from other countries we work with regularly — see <a href="/en/insurance-for-americans-in-portugal/">insurance for Americans</a> and <a href="/en/insurance-for-canadians-portugal/">insurance for Canadians</a> in Portugal if either is a closer fit for someone you know.',
  ],

  essentialIntro:
    'The core categories almost every Irish buyer, mover or resident in Portugal ends up needing to arrange locally.',
  essential: [
    {
      title: 'Home insurance',
      text: 'Buildings and contents cover for a property in Portugal, arranged under a Portuguese policy regardless of what is held in Ireland. See <a href="/en/home-insurance-quote/">home insurance in Portugal</a>.',
    },
    {
      title: 'Health insurance',
      text: 'Private cover alongside or instead of the public system (SNS). See <a href="/en/health-insurance-quote/">health insurance in Portugal</a>, and <a href="/en/blog/vhi-laya-irish-life-portugal-health-insurance/">what your VHI, Laya or Irish Life cover does and does not carry over</a>.',
    },
    {
      title: 'Car insurance',
      text: 'Third-party liability is compulsory for any vehicle on Portuguese roads, whether imported or bought locally. See <a href="/en/car-insurance-portugal/">car insurance in Portugal</a>.',
    },
    {
      title: 'Landlord insurance',
      text: 'If a holiday home or investment property will be let out, long-term or short-term, standard homeowner cover is not the right base policy. See <a href="/en/landlord-insurance-portugal/">landlord insurance in Portugal</a>.',
    },
  ],

  recommendedIntro:
    'The questions that come up specifically because the buyer, mover or resident is Irish — not covered by the essential categories above, and each explained in full on its own page.',
  recommended: [
    {
      title: 'VHI, Laya or Irish Life: what actually transfers',
      text: 'Community rating, lifetime community rating loading, and how the S1 route differs from the UK one, in <a href="/en/blog/vhi-laya-irish-life-portugal-health-insurance/">what transfers from VHI, Laya and Irish Life, and what does not</a>.',
    },
    {
      title: 'Your Irish no-claims bonus',
      text: 'What evidence Portuguese motor insurers accept from an Irish no-claims record, and what they do not, in <a href="/en/blog/irish-no-claims-bonus-car-insurance-portugal/">Irish no-claims bonus and Portuguese motor underwriting</a>.',
    },
    {
      title: 'Holiday homes in the Algarve',
      text: 'Long vacancy, Alojamento Local, and why a sum insured that never gets revisited is the single most expensive mistake on a seasonal property — see <a href="/en/blog/irish-owners-algarve-holiday-home-insurance/">insuring an Irish-owned holiday home in the Algarve</a> and, on underinsurance specifically, <a href="/en/blog/outdated-insured-values/">the proportional rule and outdated insured values</a>.',
    },
  ],

  mistakes: [
    {
      title: 'Assuming a VHI, Laya or Irish Life policy already covers it',
      text: 'It does not extend to Portugal. Health cover here needs a Portuguese or internationally-recognised policy, arranged separately, regardless of what is held in Ireland.',
    },
    {
      title: 'Letting private health cover lapse without checking the loading',
      text: 'A gap in continuous cover can trigger the lifetime community rating loading on return to the Irish market. Check the current position before letting a policy lapse, not after.',
    },
    {
      title: 'Assuming an Irish no-claims record transfers automatically',
      text: 'Portuguese insurers decide case by case what weight, if any, to give an Irish claims history. Bringing the right evidence helps; assuming it transfers by default does not.',
    },
    {
      title: 'Insuring a holiday home as if someone lives there year-round',
      text: 'A property that stands empty for long stretches has different theft and water-damage conditions from a permanent residence. Declaring it correctly matters more than the premium difference.',
    },
  ],

  steps: STEPS,

  faq: [
    {
      q: 'Does my VHI, Laya or Irish Life policy cover me in Portugal?',
      a: 'Not for anything located or happening in Portugal on an ongoing basis. Health cover for a Portuguese resident is arranged separately, under a Portuguese or internationally-recognised policy — see <a href="/en/blog/vhi-laya-irish-life-portugal-health-insurance/">what transfers from VHI, Laya and Irish Life, and what does not</a>.',
    },
    {
      q: 'Will I be hit with a lifetime community rating loading if I move back to Ireland later?',
      a: 'Possibly, if there is a gap in continuous cover — the exact treatment depends on how long the gap is and the insurer\'s own rules. Confirm the current position with the Health Insurance Authority or your insurer before letting a policy lapse.',
    },
    {
      q: 'How does the S1 route work for an Irish pensioner in Portugal?',
      a: 'Under the standard EU social security co-ordination rules, since Ireland is an EU member state — a different mechanism from the post-Brexit arrangement a UK pensioner relies on. See <a href="/en/blog/vhi-laya-irish-life-portugal-health-insurance/">the detail</a> and our general note on <a href="/en/blog/health-cover-70-75-portugal/">private health cover at 70 and 75 in Portugal</a>.',
    },
    {
      q: 'Does my Irish no-claims bonus reduce my Portuguese car insurance premium?',
      a: 'It depends on what evidence you can provide and what the specific insurer accepts — not on how good the record is. See <a href="/en/blog/irish-no-claims-bonus-car-insurance-portugal/">Irish no-claims bonus and Portuguese motor underwriting</a>.',
    },
    {
      q: 'Do you handle everything in English?',
      a: 'Yes. Quotes, policy explanations, correspondence and claims are handled in English throughout. Portuguese insurers issue their policies in Portuguese because the law requires it; we make sure you understand exactly what one says before you sign.',
    },
  ],

  finalCta: `<section class="cta-strip" aria-label="Contact">
  <div class="cta-strip-text">
    <h2 class="cta-strip-title">Get a written insurance review</h2>
    <p class="cta-strip-sub">Tell us about the property, the move, or your VHI, Laya or Irish Life cover. We reply in writing, in English, within 24 working hours — including telling you plainly if something falls outside what we can currently arrange.</p>
    <div style="margin-top:36px;display:flex;gap:18px;flex-wrap:wrap;align-items:center;">
      <a href="#pedido" class="btn-primary">Get an Insurance Review</a>
      <a href="${wa("Hi, I'm an Irish citizen looking into insurance for a property or a move to Portugal and would like to talk to someone.")}" class="btn-ghost" rel="noopener" target="_blank">Message us on WhatsApp</a>
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
