/**
 * Content for the Spain market layer — Phase 1.
 *
 * Consumed by build-spain-cluster.mjs. Three pages: the national expat hub and
 * two commercial pillars underneath it (Home, Landlord). This is the first
 * Adler & Rochefort content written for Spain rather than adapted from
 * Portugal — no sentence here was translated from car-cluster.data.mjs,
 * property-cluster.data.mjs or expat-hub.data.mjs.
 *
 * Editorial rules that apply to every string in this file, carried over from
 * the compliance discipline already established for the Portuguese pillars,
 * plus the constraints specific to a market where nothing has been verified
 * yet:
 *
 *  - No Spanish insurer is named. No claim of a Spanish insurer panel, of
 *    "comparing the market" in Spain, or of any specific number of insurers
 *    appointed there. Zero is confirmed in this repository at the time of
 *    writing, so the copy never implies otherwise.
 *  - No DGSFP registration number, no Spanish office, no Spanish phone number,
 *    no Spanish postal address. The only regulatory identity used is the real
 *    one: Ownizo, Unipessoal Lda., ASF 425591790/3, Lagos, Portugal.
 *  - The cross-border basis is described softly and without a completion
 *    date, because the notification itself has not been confirmed in this
 *    repository. "We are extending our service to Spain" — never "we are
 *    licensed in Spain" and never "DGSFP-registered".
 *  - No Spanish statutory citation is invented. Where Portuguese pages cite a
 *    Decreto-Lei by number, these pages describe common lender/community
 *    practice in general terms and say plainly that the specifics depend on
 *    the property, the region and the individual case.
 *  - Short-term/holiday letting rules are explicitly flagged as varying by
 *    autonomous community and municipality — never stated as a single
 *    nationwide rule.
 *  - No premium ranges, no invented statistics, no client counts.
 */

const DISCLAIM_NOTE =
  'General guidance only, for international clients considering or arranging insurance in Spain. What a policy actually covers, its excesses and its exclusions are set by the insurer and the wording of that specific policy — not by this page. Nothing here is legal, tax or immigration advice, and nothing here should be read as confirmation that a particular product is currently available: tell us your situation and we will confirm honestly what can be arranged.';

const AVAILABILITY_NOTE =
  'We are building our insurer relationships in Spain. Rather than guess at what we can place, we ask you a short set of questions about the property or the situation, then come back with a clear written answer — including telling you plainly if a particular case falls outside what we can currently arrange.';

const WHY_US_INTRO =
  'Adler & Rochefort is the trading name of Ownizo, Unipessoal Lda., an insurance intermediary registered with Portugal’s insurance supervisor, the ASF (Autoridade de Supervisão de Seguros e Fundos de Pensões), under no. 425591790/3. We have spent several years arranging insurance in English for expats, foreign residents and property owners in Portugal, and we are extending that service to cover Spain.';

// -----------------------------------------------------------------------------
// HUB — /en/expat-insurance-spain/
// -----------------------------------------------------------------------------

const HUB = {
  slug: 'expat-insurance-spain',
  crumb: 'Insurance for expats',
  title: 'Insurance for Expats in Spain | English-Speaking Service',
  description:
    'Insurance for expats, foreign residents and property owners in Spain, explained in English. Tell us your situation and we will confirm what can be arranged. Free written review.',
  keywords:
    'insurance for expats in spain, expat insurance spain, insurance for foreigners in spain, insurance broker for expats spain, insurance for international residents spain, moving to spain insurance, insurance for foreign property owners spain',
  eyebrow: 'Spain · for expats, foreign residents &amp; property owners',
  h1: 'Insurance for Expats in Spain',
  heroSub:
    'Considering, moving to, or already living in Spain? We help international clients work out what insurance actually applies to their situation, and arrange it in English — from Portugal, extending the same service we have provided for expats here for several years.',
  heroCta: 'Get an Insurance Review',
  heroSecondary: 'Explore Insurance Options',
  heroTrust:
    '<strong>English throughout</strong> · Registered with Portugal’s ASF (no. 425591790/3) · A written answer, honestly, on what we can arrange',
  topBarCta: 'Get an Insurance Review',
  stickyCta: 'Get an Insurance Review',
  whatsapp: 'Hello, I am looking into insurance for a property or a move to Spain and would like to talk to someone.',
  market: 'spain',
  chatTopics: ['spain_general', 'spain_health', 'spain_home', 'spain_landlord'],
  service: {
    name: 'Insurance guidance for expats and property owners in Spain',
    type: 'Insurance intermediation — client qualification and referral',
    description:
      'Helping international residents, expats and foreign property owners in Spain work out what insurance applies to their situation, in English, extending the service Adler & Rochefort has provided to expats in Portugal.',
  },

  sections: [
    {
      id: 'why-different',
      h2: 'Insurance in Spain, for people who did not grow up with it',
      blocks: [
        {
          kind: 'p',
          html:
            'Spanish insurance is not written for someone reading it for the first time from abroad. The policy wording is Spanish, the assumptions behind it are Spanish, and the questions an insurer asks — how the property is used, who holds the title, whether you are resident — have answers that are straightforward if you grew up with the system and much less obvious if you did not.',
        },
        {
          kind: 'p',
          html:
            'That gap rarely shows up as a dramatic failure. It shows up as a policy that quietly does not match the situation: a home insured as a permanent residence when it stands empty for most of the year, a rental property covered under a standard homeowner policy that was never designed for tenants, cover bought quickly to satisfy a mortgage lender and then never looked at again. Those gaps tend to surface at a claim, which is the worst moment to discover them.',
        },
        {
          kind: 'p',
          html:
            'This page exists to answer one question first: <strong>what insurance actually applies to your situation in Spain, and what should you sort out in what order?</strong> Once that is clear, the product pages below cover the detail, each with its own form.',
        },
        { kind: 'note', html: DISCLAIM_NOTE },
      ],
    },

    {
      id: 'what-you-need',
      h2: 'What insurance do you need in Spain?',
      blocks: [
        {
          kind: 'p',
          html:
            'The products we can currently discuss properly for Spain are set out below. If your situation is different — car, life, a business — say so in the form at the bottom of this page and we will tell you honestly whether it is something we can help with yet.',
        },
        {
          kind: 'cluster',
          items: [
            {
              href: '/en/health-insurance-spain/',
              title: 'Health insurance',
              blurb: 'Private medical cover for individuals and families moving to, or already living in, Spain.',
            },
            {
              href: '/en/home-insurance-spain/',
              title: 'Home insurance',
              blurb: 'Permanent residences, holiday homes and second homes — resident or non-resident owner.',
            },
            {
              href: '/en/landlord-insurance-spain/',
              title: 'Landlord insurance',
              blurb: 'Property you let out in Spain, long-term or holiday rental, managed locally or remotely.',
            },
          ],
        },
        {
          kind: 'note',
          html: AVAILABILITY_NOTE,
        },
      ],
    },

    {
      id: 'health',
      h2: 'Health insurance in Spain',
      blocks: [
        {
          kind: 'p',
          html:
            'Private health insurance is one of the most common questions we hear from people moving to Spain — often because a visa or residence application asks for proof of cover, and often simply because private access sits alongside the public system rather than replacing it. What a plan actually includes, and what it costs, depends on the insurer, the plan and the people being covered.',
        },
        {
          kind: 'note',
          html:
            'This is covered in full on <a href="/en/health-insurance-spain/">health insurance in Spain</a>, including what typically decides cover, pre-existing conditions, and what to check before a visa or residence application.',
        },
      ],
    },

    {
      id: 'moving',
      h2: 'Moving to Spain',
      blocks: [
        {
          kind: 'p',
          html:
            'People moving to Spain usually have one insurance question that is urgent — the property they are buying or renting — and several others that can wait a few weeks. We are not an immigration or tax adviser and this page is not visa guidance; what we can do is help you sequence the insurance side sensibly once the property and the timeline are clear.',
        },
        {
          kind: 'grid',
          items: [
            {
              title: 'Buying before you move',
              body: 'A mortgage lender in Spain will typically expect buildings cover in place before completion. Exactly what is required varies by lender and by property — tell us the timeline and we will tell you what to have ready.',
            },
            {
              title: 'Renting while you settle in',
              body: 'A landlord’s own building insurance does not cover your belongings. If you are renting, contents cover for what you actually own is a separate, usually inexpensive, item worth arranging early.',
            },
            {
              title: 'The property will sit empty for a while',
              body: 'A home that is unoccupied for an extended period is a different risk to underwrite than one lived in daily — insurers ask about this directly, and answering it accurately matters more than it looks.',
            },
            {
              title: 'You are not resident yet, but you own the property already',
              body: 'Non-resident ownership is common and normally insurable, but the paperwork an insurer wants and the postal address they use for correspondence both need to be right from the start.',
            },
          ],
        },
      ],
    },

    {
      id: 'already-here',
      h2: 'Already living in Spain',
      blocks: [
        {
          kind: 'p',
          html:
            'If you already have a Spanish home insurance policy, the most useful thing we can usually do is look at what you have. Sums insured that were never updated, a policy written in Spanish that nobody has fully explained, cover bought quickly on moving day and never revisited — these come up constantly, and a review costs you nothing to find out.',
        },
        {
          kind: 'note',
          html:
            'Send us your current policy and we will tell you plainly what it covers, in English, and whether it still matches how you actually use the property.',
        },
      ],
    },

    {
      id: 'buying-property',
      h2: 'Buying property in Spain',
      blocks: [
        {
          kind: 'p',
          html:
            'Whether the property is a full-time home, a holiday house you will use for part of the year, or an investment, the starting point is the same: buildings cover in place from the date you take on the risk, and a clear answer on what contents cover you actually need. The detail — sums insured, unoccupancy terms, whether the property sits within a community of owners with its own building policy — is what the form on the next page walks through.',
        },
        {
          kind: 'note',
          html: 'This is covered in full on <a href="/en/home-insurance-spain/">home insurance in Spain</a>.',
        },
      ],
    },

    {
      id: 'renting-out',
      h2: 'Renting out property in Spain',
      blocks: [
        {
          kind: 'p',
          html:
            'A standard home policy is written around an owner living in the property. The moment someone else is paying to stay there — a long-term tenant or a short holiday let — the risk changes, and a homeowner policy is usually the wrong contract for it. This applies whether you manage the property yourself or through a local agency.',
        },
        {
          kind: 'note',
          html: 'This is covered in full on <a href="/en/landlord-insurance-spain/">landlord insurance in Spain</a>.',
        },
      ],
    },

    {
      id: 'non-resident-owners',
      h2: 'Non-resident property owners',
      blocks: [
        {
          kind: 'p',
          html:
            'A large share of the international owners we hear from do not live in Spain at all — in the UK, elsewhere in Europe, or further afield — and manage a Spanish property from a distance, using it seasonally, renting it out, or leaving it with a keyholder. None of that is unusual, and none of it should mean guessing at cover in a language you do not read fluently.',
        },
        {
          kind: 'grid',
          items: [
            { title: 'You live in the UK', body: 'Correspondence, claims and the policy explanation all happen in English, whichever country the property sits in.' },
            { title: 'You live elsewhere in Europe', body: 'Same principle — the working language is English, and we ask about your own residency and tax position only where it genuinely affects the cover.' },
            { title: 'You live outside Europe', body: 'Time zones and distance make a written comparison more useful than a phone call; that is how we normally work in any case.' },
            { title: 'The property is used seasonally, or let out when you are away', body: 'Both change the risk an insurer is actually being asked to price. Tell us the pattern of use and we will ask the right questions rather than the generic ones.' },
          ],
        },
      ],
    },

    {
      id: 'not-sure',
      h2: 'Not sure what insurance you need?',
      blocks: [
        {
          kind: 'p',
          html:
            'That is the normal starting point, not an unusual one. Tell us about the property and your situation below and we will come back with a clear, written answer — what we think you need, what we can currently arrange, and what to look into next if it is outside what we can help with today.',
        },
      ],
    },

    {
      id: 'why-us',
      h2: 'Why Adler &amp; Rochefort',
      blocks: [
        { kind: 'p', html: WHY_US_INTRO },
        {
          kind: 'covers',
          items: [
            { title: 'English throughout.', body: ' The questions, the explanation of what a policy covers, and the correspondence. We do not ask you to read a Spanish policy wording unassisted.' },
            { title: 'A straight answer, not a sales pitch.', body: ' If a case falls outside what we can currently arrange in Spain, we say so rather than take a lead we cannot service.' },
            { title: 'One point of contact.', body: ' The same team that already handles home and landlord cover for international clients in Portugal.' },
          ],
        },
        {
          kind: 'note',
          html:
            'Adler &amp; Rochefort operates in Spain on a cross-border basis from its Portuguese registration, under the EU framework that allows an insurance intermediary authorised in one EU/EEA state to offer services in another. We do not hold a separate Spanish licence, we do not have a Spanish office, and we do not claim to compare the whole Spanish insurance market — only what we say plainly, above, that we can currently arrange.',
        },
      ],
    },
  ],

  form: {
    heading: 'Get an Insurance Review',
    sub: 'Tell us about the property and your situation. We will come back with a written answer on what applies to you and what we can currently arrange.',
    name: 'expat-insurance-review-spain',
    gaField: 'insurance-need',
    submit: 'Send my details',
    fields: [
      [
        { name: 'name', label: 'Full name', required: true, placeholder: 'Jane Smith', autocomplete: 'name' },
        { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'you@example.com', autocomplete: 'email' },
      ],
      [
        { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', required: true, placeholder: '+44 000 000 000', autocomplete: 'tel', inputmode: 'tel' },
        { name: 'current_location', label: 'Where do you currently live?', required: true, placeholder: 'e.g. United Kingdom' },
      ],
      [
        {
          name: 'insurance_need',
          label: 'What do you need help with?',
          type: 'select',
          required: true,
          placeholder: 'Select one',
          options: [
            'Home insurance for a property in Spain',
            'Landlord / rental property insurance',
            'Reviewing a policy I already have',
            'Not sure — help me work it out',
            'Something else (tell us below)',
          ],
        },
        {
          name: 'ownership_status',
          label: 'Your situation',
          type: 'select',
          placeholder: 'Select one',
          options: [
            'I own property in Spain and live there',
            'I own property in Spain but live elsewhere',
            'I am buying property in Spain',
            'I am renting in Spain',
            'I do not have a property in Spain yet',
          ],
        },
      ],
      {
        name: 'message',
        label: 'Tell us about the property or situation',
        type: 'textarea',
        placeholder: 'Location, type of property, how it is used, and anything else that would help us give you an accurate answer.',
      },
    ],
  },

  faq: [
    {
      q: 'Is Adler &amp; Rochefort licensed in Spain?',
      a: 'We are registered with Portugal’s insurance supervisor, the ASF, under no. 425591790/3, and we operate in Spain on a cross-border basis from that registration, under the EU framework that lets an insurance intermediary authorised in one member state offer services in another. We do not hold a separate Spanish licence and we do not have a Spanish office.',
    },
    {
      q: 'Can you insure any property in Spain?',
      a: 'We are honest that our Spanish insurer relationships are still being built. Rather than promise cover before we know your case, we ask a short set of questions and come back with a clear written answer — including telling you plainly if something falls outside what we can currently arrange.',
    },
    {
      q: 'Do I need to be resident in Spain to get insurance there?',
      a: 'No. Non-resident ownership is common and normally insurable. What matters to an insurer is accurate information about the property and how it is used, not where you personally live.',
    },
    {
      q: 'What if I do not know exactly what cover I need?',
      a: 'That is the normal starting point. Tell us about the property — what it is, where it is, how you use it — and we will tell you what to consider and in what order, rather than sell you a product before we understand the situation.',
    },
    {
      q: 'Is this page about car or life insurance too?',
      a: 'Not yet. This page currently covers health, home and landlord insurance in Spain. If your question is about a different product, say so in the form and we will tell you honestly whether it is something we can help with.',
    },
    {
      q: 'Do you provide immigration, residency or tax advice?',
      a: 'No. We are an insurance intermediary. For residency, visa or tax questions, you should speak to a qualified immigration or tax adviser — we are glad to work alongside one on the insurance side.',
    },
  ],

  related: [
    {
      h2: 'Related reading',
      blocks: [
        {
          kind: 'guides',
          items: [
            { href: '/en/blog/insurance-portugal-spain-international-residents/', text: 'Insurance in Portugal and Spain for international residents', note: 'for owners weighing up, or splitting time between, both countries' },
          ],
        },
      ],
    },
    {
      h2: 'Elsewhere on Adler &amp; Rochefort',
      blocks: [
        {
          kind: 'cluster',
          items: [
            { href: '/en/expat-insurance-portugal/', title: 'Insurance for expats in Portugal', blurb: 'Our original market — the same approach, several years of practice behind it.' },
          ],
        },
      ],
    },
  ],
};

// -----------------------------------------------------------------------------
// HOME — /en/home-insurance-spain/
// -----------------------------------------------------------------------------

const HOME = {
  slug: 'home-insurance-spain',
  crumb: 'Home insurance',
  parent: { href: '/en/expat-insurance-spain/', label: 'Insurance for expats in Spain' },
  title: 'Home Insurance in Spain for International Owners',
  description:
    'Home insurance in Spain for expats, second-home owners and non-resident property owners. Explained in English — tell us about the property and we will confirm what can be arranged.',
  keywords:
    'home insurance spain expats, property insurance spain foreigners, home insurance spain non residents, house insurance spain expats, property insurance spain international owners, second home insurance spain',
  eyebrow: 'Spain · Home insurance',
  h1: 'Home Insurance in Spain for International Owners',
  heroSub:
    'Whether the property is where you live full-time, a holiday home you use for part of the year, or an investment held from abroad, cover has to match how you actually use it. Tell us about the property and we will confirm what can currently be arranged.',
  heroCta: 'Get a home insurance quote',
  heroTrust: '<strong>English throughout</strong> · Registered with Portugal’s ASF (no. 425591790/3) · A written answer on what can be arranged',
  topBarCta: 'Get a home insurance quote',
  stickyCta: 'Get a home insurance quote',
  whatsapp: 'Hello, I would like a home insurance quote for a property in Spain.',
  market: 'spain',
  chatTopics: ['spain_general', 'spain_home'],
  service: {
    name: 'Home insurance guidance in Spain',
    type: 'Property insurance intermediation',
    description:
      'Helping international owners of permanent residences, holiday homes and second homes in Spain work out what buildings and contents cover applies, and arranging it where it can be honestly confirmed.',
  },

  sections: [
    {
      id: 'who-this-is-for',
      h2: 'Home insurance for every kind of international owner',
      blocks: [
        {
          kind: 'p',
          html:
            'Spanish home insurance is not one product. What suits a full-time resident in an apartment inside a community of owners is not what suits a stand-alone villa used six weeks a year. The starting point is always the same question: how is this property actually occupied and used?',
        },
        {
          kind: 'grid',
          items: [
            { title: 'Permanent residence', body: 'Your main home, lived in year-round. Cover is built around normal daily occupation.' },
            { title: 'Holiday home / second home', body: 'Used for part of the year and left empty the rest. Insurers ask about the pattern of unoccupancy — answering it accurately matters.' },
            { title: 'Apartment or villa within a community', body: 'Where the building itself is often insured under a community (comunidad de propietarios) policy, separate from your own contents and interior cover.' },
            { title: 'Property owned but not yet lived in', body: 'Bought, being renovated, or awaiting your move — cover still needs to be in place from the point you take on the risk.' },
          ],
        },
        { kind: 'note', html: DISCLAIM_NOTE },
      ],
    },

    {
      id: 'what-cover-involves',
      h2: 'What home insurance in Spain typically involves',
      blocks: [
        {
          kind: 'p',
          html:
            'Cover, wording, excesses and exclusions are all set by the individual insurer and policy — nothing here is a statement of what a specific product includes. In general terms, a Spanish home policy is built around a small number of components, and the questions worth asking are the same whichever insurer ends up quoting:',
        },
        {
          kind: 'covers',
          items: [
            { title: 'Buildings.', body: ' The structure itself — walls, roof, fixed installations. Where a property sits inside a community of owners, the exterior structure may already be insured under the community’s own policy; worth confirming before assuming you need to duplicate it.' },
            { title: 'Contents.', body: ' What you own inside the property. Sums insured should reflect what is actually there today, not a figure carried over from years ago.' },
            { title: 'Owner liability.', body: ' Where applicable, cover for injury or damage caused to third parties in connection with the property — relevant if visitors, guests or neighbours could be affected.' },
            { title: 'Unoccupancy.', body: ' Most policies have a condition about how long a property can sit empty before cover is restricted. If the home is used seasonally, this is one of the first things to check, not an afterthought.' },
            { title: 'Third-party letting.', body: ' A property let to paying guests, even occasionally, generally needs different cover to a home occupied only by the owner — see <a href="/en/landlord-insurance-spain/">landlord insurance in Spain</a>.' },
          ],
        },
        {
          kind: 'note',
          html: AVAILABILITY_NOTE,
        },
      ],
    },

    {
      id: 'what-decides-cover',
      h2: 'What decides the cover and the price',
      blocks: [
        {
          kind: 'p',
          html:
            'None of the following is fixed or universal — it is what an underwriter is actually looking at, and getting the details right up front avoids a policy that turns out not to match the property when a claim happens.',
        },
        {
          kind: 'grid',
          items: [
            { title: 'The insurer', body: 'Availability, wording and price vary by insurer. There is no single "Spanish home policy".' },
            { title: 'The property', body: 'Construction, age, size and condition all matter, as does whether it sits within a managed community.' },
            { title: 'Location', body: 'Region, proximity to the coast and known local risks (flood, wildfire) all factor into underwriting.' },
            { title: 'Occupancy and use', body: 'Full-time, seasonal, or let out — this changes the type of cover you actually need, not just the price.' },
            { title: 'Sums insured', body: 'What the buildings would cost to rebuild and what the contents are genuinely worth — both need revisiting periodically, not set once and forgotten.' },
            { title: 'Claims history', body: 'Yours, and where relevant the property’s. Being upfront about it at quote stage is always the stronger position.' },
          ],
        },
      ],
    },

    {
      id: 'non-resident',
      h2: 'Non-resident owners',
      blocks: [
        {
          kind: 'p',
          html:
            'Owning a property in Spain without living there is common, and it is normally insurable. What an insurer needs is accurate information — how the property is used, whether it sits empty for long periods, who has access to it — not proof of Spanish residency. Correspondence, the policy explanation and any claim are all handled in English regardless of where you live.',
        },
      ],
    },

    {
      id: 'documents',
      h2: 'What we need to prepare your quote',
      blocks: [
        {
          kind: 'steps',
          items: [
            { title: 'The property.', body: 'Type, size, age and location, and whether it forms part of a managed community.' },
            { title: 'How it is used.', body: 'Permanent residence, holiday home, or let out — and roughly how many weeks a year it stands empty.' },
            { title: 'What you need covered.', body: 'Buildings, contents, or both — and, if contents, a rough idea of what is inside.' },
            { title: 'What you have now.', body: 'Your current policy, if any, and its renewal date, so we can compare against it rather than around it.' },
          ],
        },
        {
          kind: 'p',
          html:
            'You do not need everything to start — the form below can begin with the basics, and we will ask for the rest as it comes through.',
        },
      ],
    },

    {
      id: 'not-sure',
      h2: 'Renting the property out?',
      blocks: [
        {
          kind: 'p',
          html:
            'If anyone other than you or your family stays in the property and pays for it — whether that is a long-term tenant or an occasional holiday guest — the cover you need changes. See <a href="/en/landlord-insurance-spain/">landlord insurance in Spain</a>, or tell us in the form below and we will point you the right way.',
        },
      ],
    },
  ],

  form: {
    heading: 'Get a home insurance quote',
    sub: 'Tell us about the property. Where it is, how it is used, and what you need covered change the answer more than anything else on this form.',
    name: 'home-insurance-quote-spain',
    gaField: 'property_type',
    submit: 'Get my quote',
    fields: [
      [
        { name: 'name', label: 'Full name', required: true, placeholder: 'Jane Smith', autocomplete: 'name' },
        { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'you@example.com', autocomplete: 'email' },
      ],
      [
        { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', required: true, placeholder: '+44 000 000 000', autocomplete: 'tel', inputmode: 'tel' },
        { name: 'property_location', label: 'Where is the property? (town/region, Spain)', required: true, placeholder: 'e.g. Alicante, Costa Blanca' },
      ],
      [
        {
          name: 'property_type',
          label: 'Property type',
          type: 'select',
          required: true,
          placeholder: 'Select one',
          options: ['Apartment', 'Villa / detached house', 'Townhouse', 'Other'],
        },
        {
          name: 'ownership',
          label: 'Your situation',
          type: 'select',
          required: true,
          placeholder: 'Select one',
          options: ['Resident owner', 'Non-resident owner', 'Buying — not completed yet', 'Renting (contents only)'],
        },
      ],
      [
        {
          name: 'occupancy',
          label: 'How is the property used?',
          type: 'select',
          placeholder: 'Select one',
          options: ['Permanent residence', 'Holiday home / used part of the year', 'Currently empty', 'Let out to tenants or guests'],
        },
        {
          name: 'cover_needed',
          label: 'Cover you are looking for',
          type: 'select',
          placeholder: 'Select one',
          options: ['Not sure — advise me', 'Buildings only', 'Contents only', 'Buildings and contents'],
        },
      ],
      {
        name: 'message',
        label: 'Anything we should know?',
        type: 'textarea',
        placeholder: 'Community/building details, current insurer and renewal date, or anything unusual about the property.',
      },
    ],
  },

  faq: [
    {
      q: 'Can I insure a home in Spain if I do not live there?',
      a: 'Yes — non-resident ownership is common and normally insurable. What an insurer needs is accurate information about the property and how it is used, not proof of residency.',
    },
    {
      q: 'Do I need separate buildings cover if my property is in a community?',
      a: 'Often the exterior structure is already insured under the community (comunidad de propietarios) policy, in which case your own cover is usually about contents and interior fittings — but this varies by community, so it is worth confirming rather than assuming.',
    },
    {
      q: 'What happens if the property is empty for months at a time?',
      a: 'Most policies have a condition about how long a property can stand empty before cover is affected. If your home is used seasonally, tell us the pattern up front — it is one of the details that most changes what an insurer will offer.',
    },
    {
      q: 'Can you name which Spanish insurers you work with?',
      a: 'Not yet, honestly — our Spanish insurer relationships are still being built. We ask about your property and situation and come back with a clear written answer on what can currently be arranged, rather than promise a panel we do not yet have.',
    },
    {
      q: 'Is this the same policy as for a property in Portugal?',
      a: 'No. Spanish and Portuguese home insurance are different products, from different insurers, under different rules. This page was written specifically for Spain — for Portugal, see <a href="/en/home-insurance-quote/">home insurance in Portugal</a>.',
    },
    {
      q: 'How long does a quote take?',
      a: 'We aim to come back with a written answer within a few working days. If your case needs an individual referral — an unusual property, or something outside what we can currently place — we will tell you that plainly rather than leave you waiting.',
    },
  ],

  related: [
    {
      h2: 'Guides worth reading first',
      blocks: [
        {
          kind: 'guides',
          items: [
            { href: '/en/blog/community-insurance-apartment-owners-spain/', text: 'Community insurance and apartment ownership in Spain', note: 'what a comunidad de propietarios policy covers, and what stays your responsibility' },
            { href: '/en/blog/non-resident-property-insurance-spain/', text: 'Property insurance in Spain for non-resident owners', note: 'what actually matters to an insurer when you live elsewhere' },
            { href: '/en/blog/second-home-insurance-spain/', text: 'Second home insurance in Spain', note: 'what changes when a property is used seasonally' },
            { href: '/en/blog/category/spain-property/', text: 'All property guides for Spain' },
          ],
        },
      ],
    },
    {
      h2: 'Related cover',
      blocks: [
        {
          kind: 'cluster',
          items: [
            { href: '/en/expat-insurance-spain/', title: 'Insurance for expats in Spain', blurb: 'Start here if you are not sure yet what you need.' },
            { href: '/en/landlord-insurance-spain/', title: 'Landlord insurance in Spain', blurb: 'For property let out to tenants or holiday guests.' },
            { href: '/en/blog/insurance-portugal-spain-international-residents/', title: 'Insurance in Portugal and Spain for international residents', blurb: 'For owners with property in, or moving between, both countries.' },
          ],
        },
      ],
    },
  ],
};

// -----------------------------------------------------------------------------
// LANDLORD — /en/landlord-insurance-spain/
// -----------------------------------------------------------------------------

const LANDLORD = {
  slug: 'landlord-insurance-spain',
  crumb: 'Landlord insurance',
  parent: { href: '/en/home-insurance-spain/', label: 'Home insurance in Spain' },
  title: 'Landlord Insurance in Spain for International Property Owners',
  description:
    'Landlord and rental property insurance in Spain for international owners — long-term or holiday letting, resident or non-resident. Explained in English, free written review.',
  keywords:
    'landlord insurance spain, rental property insurance spain, non resident landlord insurance spain, insurance for rental property spain, landlord insurance spain expats',
  eyebrow: 'Spain · Landlord insurance',
  h1: 'Landlord Insurance in Spain for International Property Owners',
  heroSub:
    'A standard home policy is written for an owner living in the property. The moment you let it to someone else — long-term or as a holiday rental — that is usually the wrong contract. Tell us about the property and how it is let, and we will confirm what applies.',
  heroCta: 'Get a landlord insurance quote',
  heroTrust: '<strong>English throughout</strong> · Registered with Portugal’s ASF (no. 425591790/3) · A written answer on what can be arranged',
  topBarCta: 'Get a landlord insurance quote',
  stickyCta: 'Get a landlord insurance quote',
  whatsapp: 'Hello, I would like a landlord insurance quote for a rental property in Spain.',
  market: 'spain',
  chatTopics: ['spain_general', 'spain_landlord'],
  service: {
    name: 'Landlord insurance guidance in Spain',
    type: 'Rental property insurance intermediation',
    description:
      'Helping international landlords letting property in Spain — long-term or short-term — work out what cover applies, and arranging it where it can be honestly confirmed.',
  },

  sections: [
    {
      id: 'why-different',
      h2: 'Why a home policy is not enough once you let the property',
      blocks: [
        {
          kind: 'p',
          html:
            'Standard home insurance assumes the owner is the one living there. Once someone else — a long-term tenant or a paying holiday guest — occupies the property instead, the risk an insurer is being asked to price changes: different wear, different liability exposure, and often a policy condition that simply excludes rental use altogether. This applies whether you manage the letting yourself or through a local agency, and whether you live in Spain or manage the property from abroad.',
        },
        { kind: 'note', html: DISCLAIM_NOTE },
      ],
    },

    {
      id: 'rental-types',
      h2: 'Long-term or short-term — the starting point is different',
      blocks: [
        {
          kind: 'compare',
          columns: [
            {
              title: 'Long-term rental',
              points: [
                'One tenant (or household) in place for months or years at a time.',
                'Typically furnished or unfurnished — tell us which, as it changes the contents question.',
                'Fewer changeovers, but the property is occupied by someone who is not the owner for extended periods.',
              ],
            },
            {
              title: 'Short-term / holiday letting',
              points: [
                'Guests staying for days or weeks, with regular changeovers.',
                'Often furnished and let with linen, utilities and cleaning included.',
                'May be subject to local licensing rules — see the note below. This is not something we can advise on; it is a matter for the relevant regional or local authority.',
              ],
            },
          ],
        },
        {
          kind: 'note',
          html:
            'Short-term and holiday letting rules in Spain vary by autonomous community and, often, by municipality — there is no single nationwide rule we can state here. If you let, or plan to let, a property short-term, check the current licensing position with the relevant regional or local authority; we can arrange the insurance side once that is confirmed.',
        },
      ],
    },

    {
      id: 'what-cover-involves',
      h2: 'What landlord cover typically involves',
      blocks: [
        {
          kind: 'p',
          html:
            'What is actually included, and at what limit, is set by the individual insurer and policy — the list below is what to ask about, not a statement of standard inclusions:',
        },
        {
          kind: 'covers',
          items: [
            { title: 'Buildings.', body: ' The structure, on landlord terms rather than owner-occupier terms — relevant conditions differ once the property is let.' },
            { title: 'Contents belonging to the landlord.', body: ' Furniture, appliances and fittings you provide, if the property is let furnished. Tenants’ or guests’ own possessions are their responsibility, not yours.' },
            { title: 'Landlord liability.', body: ' Cover for injury or damage for which you, as landlord, could be held responsible — relevant to most rental arrangements.' },
            { title: 'Malicious damage by a tenant, where available.', body: ' Not a standard inclusion on every product — worth asking about explicitly rather than assuming.' },
            { title: 'Loss of rent, where available.', body: ' Cover for lost rental income following an insured event that makes the property unlettable — again, product-dependent.' },
            { title: 'Legal protection, where available.', body: ' Cover for the cost of pursuing or defending a landlord-related dispute — low-cost where offered, and easy to overlook.' },
          ],
        },
        { kind: 'note', html: AVAILABILITY_NOTE },
      ],
    },

    {
      id: 'remote-management',
      h2: 'Managed remotely',
      blocks: [
        {
          kind: 'p',
          html:
            'Plenty of landlords letting property in Spain do not live there and manage everything — tenants, maintenance, sometimes the letting itself — through a local agent. That is a normal arrangement and does not, on its own, prevent the property being insured. What matters to an insurer is how the property is actually let and maintained, not where the owner personally lives.',
        },
      ],
    },

    {
      id: 'documents',
      h2: 'What we need to prepare your quote',
      blocks: [
        {
          kind: 'steps',
          items: [
            { title: 'The property.', body: 'Type, size, location, and whether it is furnished or unfurnished.' },
            { title: 'How it is let.', body: 'Long-term or short-term/holiday, and roughly how often it changes occupants.' },
            { title: 'Who manages it.', body: 'You directly, or a local letting agent — and whether that arrangement is likely to change.' },
            { title: 'What you have now.', body: 'Your current policy, if there is one, and its renewal date.' },
          ],
        },
      ],
    },
  ],

  form: {
    heading: 'Get a landlord insurance quote',
    sub: 'Tell us about the property and how it is let. Long-term versus short-term changes the answer more than anything else on this form.',
    name: 'landlord-insurance-quote-spain',
    gaField: 'rental_type',
    submit: 'Get my quote',
    fields: [
      [
        { name: 'name', label: 'Full name', required: true, placeholder: 'Jane Smith', autocomplete: 'name' },
        { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'you@example.com', autocomplete: 'email' },
      ],
      [
        { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', required: true, placeholder: '+44 000 000 000', autocomplete: 'tel', inputmode: 'tel' },
        { name: 'property_location', label: 'Where is the property? (town/region, Spain)', required: true, placeholder: 'e.g. Málaga province' },
      ],
      [
        {
          name: 'rental_type',
          label: 'How is the property let?',
          type: 'select',
          required: true,
          placeholder: 'Select one',
          options: ['Long-term rental', 'Short-term / holiday letting', 'A mix of both', 'Not let yet — planning to'],
        },
        {
          name: 'furnished',
          label: 'Furnished?',
          type: 'select',
          placeholder: 'Select one',
          options: ['Furnished', 'Unfurnished', 'Partly furnished'],
        },
      ],
      [
        {
          name: 'landlord_residency',
          label: 'Your situation',
          type: 'select',
          placeholder: 'Select one',
          options: ['I live in Spain', 'I live outside Spain', 'Managed by a local agent on my behalf'],
        },
        {
          name: 'current_policy',
          label: 'Current insurance',
          type: 'select',
          placeholder: 'Select one',
          options: ['No policy yet', 'Standard home policy (may need to change)', 'Already have landlord cover, renewal coming up', 'Not sure what I have'],
        },
      ],
      {
        name: 'message',
        label: 'Anything we should know?',
        type: 'textarea',
        placeholder: 'Local licensing status if short-term let, how often the property changes occupants, or anything else relevant.',
      },
    ],
  },

  faq: [
    {
      q: 'Do I need landlord insurance instead of home insurance in Spain?',
      a: 'If anyone other than you or your family occupies the property and pays for it — a tenant or a holiday guest — then generally yes. A standard home policy is written around owner occupation and often excludes rental use outright, so it is worth checking rather than assuming your existing cover responds.',
    },
    {
      q: 'Is short-term holiday letting legal everywhere in Spain?',
      a: 'Licensing rules for short-term and holiday letting vary by autonomous community and, often, by municipality. We are not able to advise on licensing — that is a matter for the relevant regional or local authority — but we can arrange the insurance side once your situation is confirmed.',
    },
    {
      q: 'Can I insure a rental property I manage remotely?',
      a: 'Yes, in principle — this is common. What matters to an insurer is how the property is let and maintained, not where you personally live. Tell us if the property is managed by a local agent, as that is usually a relevant detail.',
    },
    {
      q: 'Does landlord insurance cover damage caused by tenants?',
      a: 'Malicious damage cover, where available, is product-dependent — not a standard inclusion on every policy. It is one of the specific items we check on any proposal rather than assume is included.',
    },
    {
      q: 'What about the tenant’s own belongings?',
      a: 'Not your responsibility to insure. Landlord contents cover is for what you, as the owner, provide — furniture, appliances, fittings — not for a tenant’s or guest’s personal possessions.',
    },
    {
      q: 'Can you name which Spanish insurers offer landlord cover?',
      a: 'Not yet, honestly. Our Spanish insurer relationships are still being built, and we would rather tell you clearly what we can currently arrange than promise a panel that does not exist yet.',
    },
  ],

  related: [
    {
      h2: 'Guides worth reading first',
      blocks: [
        {
          kind: 'guides',
          items: [
            { href: '/en/blog/renting-out-property-in-spain/', text: 'Renting out property in Spain', note: 'why a standard home policy usually stops working the moment you let it' },
            { href: '/en/blog/second-home-insurance-spain/', text: 'Second home insurance in Spain', note: 'for a property you also use yourself part of the year' },
            { href: '/en/blog/category/spain-property/', text: 'All property guides for Spain' },
          ],
        },
      ],
    },
    {
      h2: 'Related cover',
      blocks: [
        {
          kind: 'cluster',
          items: [
            { href: '/en/home-insurance-spain/', title: 'Home insurance in Spain', blurb: 'If the property is not let out, this is the right starting point instead.' },
            { href: '/en/expat-insurance-spain/', title: 'Insurance for expats in Spain', blurb: 'Not sure yet what you need? Start at the hub.' },
            { href: '/en/blog/insurance-portugal-spain-international-residents/', title: 'Insurance in Portugal and Spain for international residents', blurb: 'For owners with property in, or moving between, both countries.' },
          ],
        },
      ],
    },
  ],
};

// -----------------------------------------------------------------------------
// HEALTH — /en/health-insurance-spain/
// -----------------------------------------------------------------------------

const HEALTH = {
  slug: 'health-insurance-spain',
  crumb: 'Health insurance',
  parent: { href: '/en/expat-insurance-spain/', label: 'Insurance for expats in Spain' },
  title: 'Health Insurance in Spain for Expats | Adler & Rochefort',
  description:
    'Private health insurance in Spain for expats and international residents. What it typically covers, how it sits alongside the public system, and what to check before you buy. Free written review.',
  keywords:
    'health insurance spain expats, health insurance for expats in spain, private health insurance spain, health insurance for foreigners in spain, expat health insurance spain, private medical insurance spain expats, health insurance spain non residents, medical insurance spain foreigners, english speaking health insurance spain',
  eyebrow: 'Spain · Health insurance',
  h1: 'Health Insurance in Spain for Expats',
  heroSub:
    'Moving to Spain, or already there and thinking about private cover? We help you work out what actually applies to your situation — individual or family, resident or arriving soon — and tell you honestly what can currently be arranged.',
  heroCta: 'Get a Health Insurance Quote',
  heroSecondary: 'Ask About Your Situation',
  heroTrust: '<strong>English throughout</strong> · Registered with Portugal’s ASF (no. 425591790/3) · A written answer on what can be arranged',
  topBarCta: 'Get a Health Insurance Quote',
  stickyCta: 'Get a Health Insurance Quote',
  whatsapp: 'Hello, I would like a health insurance quote for Spain.',
  market: 'spain',
  chatTopics: ['spain_general', 'spain_health'],
  service: {
    name: 'Health insurance guidance in Spain',
    type: 'Private health insurance intermediation',
    description:
      'Helping expats, international residents and families in Spain work out what private health cover applies to their situation, and arranging it where it can be honestly confirmed.',
  },

  sections: [
    {
      id: 'private-vs-public',
      h2: 'Private health insurance in Spain',
      blocks: [
        {
          kind: 'p',
          html:
            'Spain has a broad, tax-funded public healthcare system, and a large private sector that operates alongside it rather than instead of it. Whether you can register with the public system, and on what basis, depends on your residence status and how you entered it — that is not something this page can answer for you in general terms, and it is worth checking directly with the relevant authority once your situation is clear.',
        },
        {
          kind: 'p',
          html:
            'What private medical insurance adds is not a replacement for the public system but a different way in: faster access to a specialist, a choice of clinic or hospital, treatment in English where the insurer’s network supports it, and — for some visa and residence routes — documentation that the application process asks for. Not everyone needs it, and not every foreign resident has identical access to the public system, so we start from your situation rather than a blanket assumption.',
        },
        { kind: 'note', html: DISCLAIM_NOTE },
      ],
    },

    {
      id: 'who-for',
      h2: 'Who this is for',
      blocks: [
        {
          kind: 'p',
          html: 'People come to this page from several different situations. Say which one is closest and we will ask the right follow-up questions rather than the generic ones.',
        },
        {
          kind: 'grid',
          items: [
            { title: 'Moving to Spain', body: 'Whether cover needs to be in place before you arrive depends on your route — see the visa and residence note below.' },
            { title: 'Already an international resident', body: 'Reviewing what you have, or arranging cover for the first time now that you are settled.' },
            { title: 'Foreign professionals and the self-employed', body: 'Individual cover, arranged the same way regardless of who employs you.' },
            { title: 'Families', body: 'Adults and children together, or as separate policies — see the families section below.' },
            { title: 'Retirees', body: 'See the dedicated section below — entitlement and requirements vary by circumstances, not by age alone.' },
            { title: 'Non-Spanish-speaking clients', body: 'The questions, the comparison and the policy explanation are all in English.' },
          ],
        },
      ],
    },

    {
      id: 'what-cover-involves',
      h2: 'What private health insurance can cover',
      blocks: [
        {
          kind: 'p',
          html:
            'What a specific plan actually includes is set by the insurer and the plan, never by this page — the categories below are what plans in this market commonly address, not a guarantee of what any one policy contains:',
        },
        {
          kind: 'covers',
          items: [
            { title: 'GP and primary care.', body: ' Access to a general practitioner, in-network or via consultation, depending on the plan.' },
            { title: 'Specialists.', body: ' Referral to specialist consultations, usually within the insurer’s network.' },
            { title: 'Diagnostic tests.', body: ' Scans, bloodwork and imaging — scope and any pre-authorisation requirement vary by plan.' },
            { title: 'Hospital treatment and surgery.', body: ' Typically the core of a private medical plan, with sub-limits that differ by insurer.' },
            { title: 'Emergency and outpatient care.', body: ' Included on most plans, though territorial scope and network conditions differ.' },
            { title: 'Maternity, where available.', body: ' Not universal, and frequently subject to a waiting period — confirm before assuming it is included.' },
            { title: 'Mental health, where available.', body: ' Scope varies significantly by insurer and plan; worth checking explicitly rather than assuming parity with physical health cover.' },
            { title: 'Physiotherapy, where available.', body: ' Often included with session limits rather than unlimited access.' },
          ],
        },
        { kind: 'note', html: AVAILABILITY_NOTE },
      ],
    },

    {
      id: 'copayments',
      h2: 'With or without copayments',
      blocks: [
        {
          kind: 'p',
          html:
            'Some plans charge a small copayment per consultation or procedure and cost less as a result; others are written with no copayment and a correspondingly different price. Neither is universally "better" — it depends on how often you expect to use the cover and what monthly cost you would rather carry instead. We set out both options where the insurer offers them, rather than defaulting to one.',
        },
      ],
    },

    {
      id: 'networks',
      h2: 'Medical networks',
      blocks: [
        {
          kind: 'p',
          html:
            'Private insurers work with defined networks of clinics, hospitals and specialists rather than every provider in Spain. Which hospitals and doctors you can access depends on the insurer, the plan and, often, the region — we do not claim access to a specific hospital or network here, because that claim only means anything against an actual policy wording. Ask us for the network detail once we know which insurer and plan is realistic for your case.',
        },
      ],
    },

    {
      id: 'pre-existing',
      h2: 'Pre-existing conditions',
      blocks: [
        {
          kind: 'p',
          html:
            'Insurers ask medical questions before offering health cover, and how they treat a pre-existing condition is an underwriting decision that varies by insurer and by condition — some exclude it, some cover it after a delay, some price around it. We cannot promise acceptance or promise that a specific condition will be covered before an insurer has actually assessed the case.',
        },
        {
          kind: 'note',
          html: 'Declare medical history accurately at application. An inaccurate declaration is one of the most common reasons a claim is later declined — understating something to get a better price almost always costs more than it saves.',
        },
      ],
    },

    {
      id: 'waiting-periods',
      h2: 'Waiting periods',
      blocks: [
        {
          kind: 'p',
          html:
            'Some benefits — maternity is a common example — carry a waiting period before they become active, and some plans apply a general waiting period to new members. We do not state a universal number here because it depends on the insurer and the plan; we will tell you the actual figure once we know which product is being quoted.',
        },
      ],
    },

    {
      id: 'moving-visa',
      h2: 'Moving to Spain, visas and residence',
      blocks: [
        {
          kind: 'p',
          html:
            'This is the section that needs the most care, and where we are most likely to say "check with the relevant authority" rather than state a rule. Different residence and visa routes — a non-lucrative visa, a digital nomad visa, an EU citizen exercising free movement, a student route — can carry different requirements for proof of health cover, and those requirements are set and interpreted by the consulate or immigration authority handling the application, not by us.',
        },
        {
          kind: 'note',
          html:
            'We do not promise that any policy will be accepted by a consulate or immigration authority simply because it is described as "visa insurance." Requirements depend on the route, the applicant’s circumstances and the authority handling the case, and they can change. Confirm the current position with the relevant consulate or immigration authority before you buy, and read <a href="/en/blog/spain-health-insurance-visa-residency/">health insurance for Spanish visas and residency</a> for what to check.',
        },
        {
          kind: 'p',
          html:
            'What we can do is help you get a policy in place with enough lead time, and tell you plainly what the plan does and does not include — the confirmation that it satisfies a specific application belongs with the authority processing it, not with us.',
        },
      ],
    },

    {
      id: 'international-vs-domestic',
      h2: 'Domestic Spanish cover or wider international cover?',
      blocks: [
        {
          kind: 'p',
          html:
            'A domestic private medical plan in Spain is built around Spanish providers and Spanish territory. Broader international private medical insurance can extend geographic scope beyond Spain, at a different price point. Which is right depends on where you actually live, whether you travel or split time between countries, the providers you want access to, and budget — not on one being categorically better than the other. Tell us your situation and we will say honestly which shape of product it points to, and whether both are realistic options for your case today.',
        },
      ],
    },

    {
      id: 'families',
      h2: 'Families',
      blocks: [
        {
          kind: 'p',
          html:
            'Cover for a family usually means separate underwriting per person even when it is billed as one policy — a child\'s plan and an adult\'s plan are not priced or underwritten identically, and paediatric care, where included, is typically a distinct benefit rather than an extension of adult cover. Maternity, where relevant and where available, is worth raising early given the waiting periods noted above. We ask about everyone to be insured individually rather than quote a household as a single unit.',
        },
      ],
    },

    {
      id: 'retirees',
      h2: 'Retirees',
      blocks: [
        {
          kind: 'p',
          html:
            'Private health insurance is not a universal legal requirement for every foreign retiree in Spain — whether it is required, and what public healthcare entitlement looks like, depends on your specific residence and pension circumstances, including whether a form such as the EU’s S1 applies to your case. We are not the right source for that determination; what we can help with is the private cover itself, once you know what you actually need it to do alongside whatever public entitlement applies to you.',
        },
      ],
    },

    {
      id: 'price',
      h2: 'What affects the price',
      blocks: [
        {
          kind: 'p',
          html:
            'We do not publish average health insurance costs for Spain here — a number picked up for its SEO value rather than checked against a real quote is worse than no number at all. What genuinely moves the price:',
        },
        {
          kind: 'grid',
          items: [
            { title: 'Age', body: 'The single largest factor on most personal health plans.' },
            { title: 'Location', body: 'Available networks and regional pricing both vary.' },
            { title: 'Insurer and plan', body: 'There is no single "Spanish health policy" — products differ meaningfully between insurers.' },
            { title: 'Copayments', body: 'A plan with copayments is typically cheaper than an equivalent plan without them.' },
            { title: 'Medical underwriting', body: 'Declared health history affects both price and terms.' },
            { title: 'Number of people insured', body: 'Each person is underwritten individually, as noted under Families above.' },
            { title: 'Geographic scope', body: 'Domestic Spanish cover versus broader international scope changes the price materially.' },
            { title: 'Benefits selected', body: 'Maternity, dental extensions and higher outpatient limits all move the premium.' },
          ],
        },
      ],
    },

    {
      id: 'get-quote',
      h2: 'How to get a quote',
      blocks: [
        {
          kind: 'steps',
          items: [
            { title: 'Who needs to be covered.', body: 'Ages of everyone to be insured, and whether it is an individual or family policy.' },
            { title: 'Where you are, or will be.', body: 'Current location and, if different, where in Spain you are moving to or already live.' },
            { title: 'Timing.', body: 'Already resident, or working to a moving date — and whether a visa or residence application is involved.' },
            { title: 'What you have now.', body: 'Any existing health cover, domestic or international, and its renewal date if applicable.' },
          ],
        },
        {
          kind: 'p',
          html:
            'We ask for this much and no more at quote stage — we do not collect detailed medical history through the website form. Any medical questions an insurer needs answered are handled directly with the insurer as part of underwriting, not gathered upfront on a generic web form.',
        },
      ],
    },
  ],

  form: {
    heading: 'Get a health insurance quote',
    sub: 'Tell us who needs cover and where you are in the move. We do not ask for medical details here — that stays with the insurer, as part of underwriting.',
    name: 'health-insurance-quote-spain',
    gaField: 'moving_status',
    submit: 'Get my quote',
    fields: [
      [
        { name: 'name', label: 'Full name', required: true, placeholder: 'Jane Smith', autocomplete: 'name' },
        { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'you@example.com', autocomplete: 'email' },
      ],
      [
        { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', required: true, placeholder: '+44 000 000 000', autocomplete: 'tel', inputmode: 'tel' },
        { name: 'current_country', label: 'Where do you currently live?', required: true, placeholder: 'e.g. United Kingdom' },
      ],
      [
        { name: 'spain_location', label: 'Where in Spain?', required: true, placeholder: 'e.g. Alicante, Costa Blanca' },
        {
          name: 'people_count',
          label: 'Number of people to insure',
          type: 'select',
          required: true,
          placeholder: 'Select one',
          options: ['1 (just me)', '2', '3', '4', '5 or more'],
        },
      ],
      [
        { name: 'ages', label: 'Age(s) of those to be insured', required: true, placeholder: 'e.g. 42, 39, 8' },
        {
          name: 'moving_status',
          label: 'Your situation',
          type: 'select',
          required: true,
          placeholder: 'Select one',
          options: ['Already resident in Spain', 'Moving to Spain soon', 'Considering a move, no date yet'],
        },
      ],
      [
        {
          name: 'cover_type',
          label: 'Type of cover needed',
          type: 'select',
          placeholder: 'Select one',
          options: ['Not sure — advise me', 'Individual', 'Family', 'Individual with copayments (lower cost)', 'Individual without copayments'],
        },
        {
          name: 'visa_related',
          label: 'Is this for a visa or residence application?',
          type: 'select',
          placeholder: 'Select one',
          options: ['Yes', 'No', 'Not sure'],
        },
      ],
      {
        name: 'existing_cover',
        label: 'Existing health insurance, and any notes',
        type: 'textarea',
        placeholder: 'Current policy and renewal date if you have one, and anything else that would help us give an accurate answer.',
      },
    ],
  },

  faq: [
    {
      q: 'Do I need private health insurance to live in Spain?',
      a: 'Not universally — it depends on your residence route and personal circumstances, including whether you can register with the public system. Some visa and residence routes require proof of private cover as part of the application; others do not. We are an insurance intermediary, not an immigration adviser, so for a definitive answer on your specific case, check with the relevant consulate or immigration authority.',
    },
    {
      q: 'Will a policy be accepted for my visa application?',
      a: 'We cannot promise that. Acceptance depends on the visa or residence route, the applicant’s circumstances and the authority handling the application — a policy being labelled "visa insurance" is not a guarantee it will be accepted. Confirm the current documentary requirements with the relevant authority before you buy, and see our guide to <a href="/en/blog/spain-health-insurance-visa-residency/">health insurance for Spanish visas and residency</a>.',
    },
    {
      q: 'Are pre-existing conditions covered?',
      a: 'It depends on the insurer, the condition and how it is declared. Some insurers exclude a pre-existing condition, some cover it after a waiting period, and some price around it. We cannot promise acceptance before an insurer has actually assessed your case — declare your history accurately, as an inaccurate declaration is one of the most common reasons a later claim is refused.',
    },
    {
      q: 'Can you name which Spanish health insurers you work with?',
      a: 'Not yet, honestly. Our Spanish insurer relationships are still being built, and we would rather tell you clearly what can currently be arranged than name a panel we do not actually have.',
    },
    {
      q: 'What is the difference between domestic and international health cover?',
      a: 'Domestic Spanish private medical cover is built around Spanish providers and territory. International private medical insurance extends geographic scope beyond Spain, usually at a higher price. Which is right depends on where you live, whether you travel, and the providers you want — not on one being automatically better.',
    },
    {
      q: 'How much does health insurance in Spain cost?',
      a: 'We do not publish a generic figure — age, location, insurer, plan, copayments and the number of people insured all move the price meaningfully, and a number picked for a webpage rather than checked against a real quote would not be honest. Tell us who needs cover and we will come back with an actual written quote.',
    },
    {
      q: 'Do you collect medical information through this form?',
      a: 'No. We ask for ages, location and the basics needed to identify the right product. Any medical questions an insurer needs answered are handled directly with the insurer, as part of underwriting — not collected upfront on a generic website form.',
    },
  ],

  related: [
    {
      h2: 'Guides worth reading first',
      blocks: [
        {
          kind: 'guides',
          items: [
            { href: '/en/blog/private-health-insurance-spain-expats/', text: 'Private health insurance in Spain: a guide for expats', note: 'the private-vs-public landscape and how to think about it' },
            { href: '/en/blog/health-insurance-moving-to-spain/', text: 'Health insurance when moving to Spain', note: 'what to check before and after the move' },
            { href: '/en/blog/spain-health-insurance-visa-residency/', text: 'Health insurance for Spanish visas and residency', note: 'what to verify before you apply' },
            { href: '/en/blog/category/spain-health/', text: 'All health guides for Spain' },
          ],
        },
      ],
    },
    {
      h2: 'Related cover',
      blocks: [
        {
          kind: 'cluster',
          items: [
            { href: '/en/expat-insurance-spain/', title: 'Insurance for expats in Spain', blurb: 'Not sure yet what you need? Start at the hub.' },
            { href: '/en/home-insurance-spain/', title: 'Home insurance in Spain', blurb: 'The other line most new arrivals need to sort out.' },
            { href: '/en/blog/insurance-portugal-spain-international-residents/', title: 'Insurance in Portugal and Spain for international residents', blurb: 'For people with ties to, or moving between, both countries.' },
          ],
        },
      ],
    },
  ],
};

export const PAGES = [HUB, HOME, LANDLORD, HEALTH];
export const HUB_SLUG = HUB.slug;
