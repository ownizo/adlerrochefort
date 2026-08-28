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
  chatTopics: ['spain_general', 'spain_health', 'spain_home', 'spain_landlord', 'spain_car', 'spain_life', 'spain_private_clients'],
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
            'The products we can currently discuss properly for Spain are set out below. If your situation is different — a business — say so in the form at the bottom of this page and we will tell you honestly whether it is something we can help with yet.',
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
            {
              href: '/en/car-insurance-spain/',
              title: 'Car insurance',
              blurb: 'For expats, international residents and foreign drivers with a vehicle in Spain.',
            },
            {
              href: '/en/life-insurance-spain/',
              title: 'Life insurance',
              blurb: 'Family and mortgage protection for international residents, and a review of cover you already hold elsewhere.',
            },
            {
              href: '/en/private-clients-spain/',
              title: 'Private clients',
              blurb: 'A coordinated review across several risks at once — for households with more than one property, vehicle or jurisdiction to think about.',
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
      id: 'life',
      h2: 'Life insurance and family protection in Spain',
      blocks: [
        {
          kind: 'p',
          html:
            'Life insurance tends to come up for the same handful of reasons — dependants, a mortgage, a business partner, or simply a foreign policy that needs reviewing now that you live in Spain. What sum insured makes sense, and what a specific policy actually covers, depends on the individual and the insurer, not on a generic rule.',
        },
        {
          kind: 'note',
          html:
            'This is covered in full on <a href="/en/life-insurance-spain/">life insurance in Spain</a>, including what to do about cover you already hold from another country, and how mortgage protection fits in — see <a href="/en/mortgage-protection-spain/">mortgage protection in Spain</a>.',
        },
      ],
    },

    {
      id: 'private-clients',
      h2: 'Managing several risks at once',
      blocks: [
        {
          kind: 'p',
          html:
            'Some households simply have more moving parts — a property or two, a car, health cover for the family, some landlord exposure — arranged with different insurers at different times, in different languages. Reviewing all of it together, once, tends to surface gaps and duplication that nobody notices when each policy is looked at on its own.',
        },
        {
          kind: 'note',
          html:
            'This is covered in full on <a href="/en/private-clients-spain/">private client insurance in Spain</a> — one coordinated review, not a luxury-branded product line.',
        },
      ],
    },

    {
      id: 'car',
      h2: 'Car insurance in Spain',
      blocks: [
        {
          kind: 'p',
          html:
            'Whether you are bringing a car with you, buying one after you arrive, or already driving on a Spanish-registered vehicle, motor cover in Spain has to match the vehicle’s actual situation — where it is registered, who holds the driving licence, and how it is used. Third-party liability is compulsory by law for every vehicle in Spain; what sits above that is a matter of insurer, plan and the profile of the driver.',
        },
        {
          kind: 'note',
          html:
            'This is covered in full on <a href="/en/car-insurance-spain/">car insurance in Spain</a>, including foreign driving licences, foreign-registered vehicles, and what actually affects the price.',
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
      q: 'Do you also help with business insurance in Spain?',
      a: 'Not yet. This page currently covers health, home, landlord, car, life and private client insurance in Spain. If your question is about business cover, say so in the form and we will tell you honestly whether it is something we can help with.',
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
            { href: '/en/mortgage-protection-spain/', title: 'Mortgage protection in Spain', blurb: 'Buying with a mortgage? What your lender actually requires versus what it offers.' },
            { href: '/en/life-insurance-spain/', title: 'Life insurance in Spain', blurb: 'Worth considering alongside a property purchase, beyond just the mortgage.' },
            { href: '/en/private-clients-spain/', title: 'Private client insurance in Spain', blurb: 'For a higher-value property, or more than one, reviewed alongside your other cover.' },
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
            { href: '/en/private-clients-spain/', title: 'Private client insurance in Spain', blurb: 'For more than one rental property, or a higher-value one, reviewed alongside the rest of your cover.' },
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

// -----------------------------------------------------------------------------
// CAR — /en/car-insurance-spain/
// -----------------------------------------------------------------------------
//
// Regulatory grounding, verified before writing (not restated from memory or
// from a competitor site — see the audit's own rule on that):
//   - The governing law is Real Decreto Legislativo 8/2004, de 29 de octubre
//     (the consolidated Ley sobre responsabilidad civil y seguro en la
//     circulación de vehículos a motor), published in BOE no. 267 of 5
//     November 2004, itself amended since, most recently by Ley 5/2025 —
//     confirmed directly against boe.es. This page cites the law by name
//     because that citation is stable; it does not cite specific minimum
//     liability capitals, because those figures could not be verified with
//     the same confidence and are exactly the kind of number that goes
//     stale — the brief's own instruction where a figure can't be safely
//     verified is to omit it, not estimate it.
//   - The UK–Spain bilateral direct-exchange licence agreement is described
//     as in force, with a medical exam required and no test for standard
//     categories, based on multiple consistent (though secondary) sources —
//     flagged for the reader to confirm with the DGT regardless, because
//     bilateral agreements are exactly the sort of thing that can change.
//   - The three-body registration process (ITV / Agencia Tributaria / DGT)
//     is consistently described the same way across independent sources and
//     stated with the same confidence the Portuguese import article gives
//     its own multi-agency process.

const CAR = {
  slug: 'car-insurance-spain',
  crumb: 'Car insurance',
  parent: { href: '/en/expat-insurance-spain/', label: 'Insurance for expats in Spain' },
  title: 'Car Insurance in Spain for Expats | Adler & Rochefort',
  description:
    'Car insurance in Spain for expats, international residents and foreign drivers. Foreign licences, foreign-registered vehicles and what actually affects the price — explained in English.',
  keywords:
    'car insurance spain expats, car insurance for expats in spain, car insurance spain foreigners, car insurance spain international residents, english speaking car insurance spain, spanish car insurance foreign driver, vehicle insurance spain expats',
  eyebrow: 'Spain · Car insurance',
  h1: 'Car Insurance in Spain for Expats',
  heroSub:
    'Already driving in Spain, bringing a car with you, or buying one after you arrive? We help international clients understand what motor cover actually applies to their situation, and arrange it where it can be honestly confirmed.',
  heroCta: 'Get a Car Insurance Quote',
  heroSecondary: 'Ask About Your Vehicle',
  heroTrust: '<strong>English throughout</strong> · Registered with Portugal’s ASF (no. 425591790/3) · A written answer on what can be arranged',
  topBarCta: 'Get a Car Insurance Quote',
  stickyCta: 'Get a Car Insurance Quote',
  whatsapp: 'Hello, I would like a car insurance quote for a vehicle in Spain.',
  market: 'spain',
  chatTopics: ['spain_general', 'spain_car'],
  service: {
    name: 'Car insurance guidance in Spain',
    type: 'Motor insurance intermediation',
    description:
      'Helping expats, international residents and foreign drivers in Spain work out what motor cover applies to their situation — foreign licences, foreign-registered vehicles included — and arranging it where it can be honestly confirmed.',
  },

  sections: [
    {
      id: 'who-for',
      h2: 'Who this is for',
      blocks: [
        {
          kind: 'p',
          html:
            'Motor insurance questions from international clients in Spain tend to fall into a handful of situations. Say which one is closest and we will ask the right follow-up questions rather than the generic ones.',
        },
        {
          kind: 'grid',
          items: [
            { title: 'Already living in Spain', body: 'Reviewing what you have, or arranging cover for the first time now that you are settled.' },
            { title: 'Moving to Spain', body: 'Working out the sequence — licence, vehicle, registration, insurance — before you need to drive.' },
            { title: 'Buying a Spanish-registered vehicle', body: 'The most straightforward case: cover has to be in force before you collect the car.' },
            { title: 'Foreign licence holder', body: 'EU/EEA, UK or other — see the licences section below for what actually differs.' },
            { title: 'Second-home owner keeping a car in Spain', body: 'A vehicle kept in Spain year-round while you live elsewhere is a normal, insurable situation.' },
            { title: 'Bringing a foreign-registered vehicle', body: 'Whether it stays on foreign plates temporarily or moves to Spanish registration — see the dedicated section below.' },
          ],
        },
        { kind: 'note', html: DISCLAIM_NOTE },
      ],
    },

    {
      id: 'basics',
      h2: 'How car insurance works in Spain',
      blocks: [
        {
          kind: 'p',
          html:
            'Third-party liability is compulsory for every motor vehicle in Spain, under the consolidated <em>Ley sobre responsabilidad civil y seguro en la circulación de vehículos a motor</em> (Real Decreto Legislativo 8/2004, most recently amended by Ley 5/2025). That compulsory cover pays for injury and damage you cause to <em>other people</em> — it does nothing for your own vehicle and, on most wordings, nothing for you as the driver.',
        },
        {
          kind: 'note',
          html:
            'We do not quote the statutory minimum liability capitals here. They are set in the law above and periodically revised, and rather than reprint a figure that could be out of date by the time you read this, we would rather point you to the current text — <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2004-18911" target="_blank" rel="noopener">the consolidated law on boe.es</a> — or confirm the current position with your insurer at quote stage.',
        },
        {
          kind: 'p',
          html:
            'Above that compulsory minimum, cover is a matter of insurer and policy, not a fixed national menu. What is actually included, and at what limit, is set by the specific wording — the sections below are what to ask about, not a guarantee of what any particular product contains.',
        },
      ],
    },

    {
      id: 'cover',
      h2: 'Cover levels',
      blocks: [
        {
          kind: 'p',
          html:
            'The Spanish motor market is generally organised around a similar shape to other European markets, though insurers package it differently and use different names for the middle tier — the useful question is always "which of these items is actually in the wording, and at what limit?" rather than "which tier is this?"',
        },
        {
          kind: 'covers',
          items: [
            { title: 'Third-party liability (seguro obligatorio).', body: ' The legal minimum. Pays for injury and damage you cause to other people; nothing for your own vehicle.' },
            { title: 'Broader third-party cover.', body: ' Liability plus a selection of named extras — commonly theft, fire and glass, depending on the insurer and policy.' },
            { title: 'Own-damage / comprehensive-type cover.', body: ' Adds damage to your own vehicle, including at-fault incidents. Written with an excess and rated against the vehicle’s declared value.' },
            { title: 'Roadside assistance.', body: ' Frequently an option rather than a universal inclusion — territorial scope and the distance-from-home condition are worth checking explicitly.' },
            { title: 'Legal assistance.', body: ' Cover for the cost of pursuing or defending a claim — low-cost where offered, and easy to overlook.' },
            { title: 'Driver cover.', body: ' The compulsory cover protects third parties; cover for you as the driver is a separate item where available.' },
          ],
        },
        {
          kind: 'note',
          html:
            'We do not publish fixed package names ("Basic," "Plus," "Premium") here, because doing so would imply a standard product line we do not currently distribute. ' + AVAILABILITY_NOTE,
        },
      ],
    },

    {
      id: 'licences',
      h2: 'Foreign driving licences',
      blocks: [
        {
          kind: 'p',
          html:
            'Two separate questions get conflated here, and it is worth keeping them apart: whether your licence entitles you to drive in Spain at all, and whether a given insurer is comfortable underwriting against it. The first is a matter of Spanish traffic law and, for some licences, an exchange process with the <abbr title="Dirección General de Tráfico">DGT</abbr>. The second is an underwriting decision an insurer makes when quoting — a licence can be perfectly valid to drive on and still raise questions for a particular insurer.',
        },
        {
          kind: 'grid',
          items: [
            {
              title: 'EU/EEA licences',
              body: 'Generally usable in Spain without exchange while the licence remains valid, under EU mutual-recognition rules. Confirm your specific position with the DGT if you become a long-term resident, as the position can depend on how long you have been resident.',
            },
            {
              title: 'UK licences',
              body: 'A bilateral direct-exchange agreement between Spain and the UK has been in force since 2023 and was renewed for an indefinite duration. Residents are generally expected to exchange within a set window after registering residency, and the exchange typically requires a medical fitness certificate but not a new test for standard categories. Confirm the current requirement and deadline with the DGT — bilateral agreements are exactly the kind of arrangement that can be renegotiated.',
            },
            {
              title: 'Other non-EU licences',
              body: 'Rules vary by country of issue and by whether Spain has an exchange agreement with it. This is a DGT question, not an insurance one — we ask about your licence at quote stage, but the exchange process itself is not something we administer.',
            },
          ],
        },
        {
          kind: 'note',
          html:
            'Licence validity and any exchange deadline are set by the DGT and can change; confirm your own position with them rather than relying on a summary, including this one. See <a href="/en/blog/foreign-driving-licence-car-insurance-spain/">car insurance in Spain with a foreign driving licence</a> for the fuller version.',
        },
      ],
    },

    {
      id: 'no-claims',
      h2: 'Foreign no-claims and claims history',
      blocks: [
        {
          kind: 'p',
          html:
            'Arriving in Spain with no local driving record is one of the things that can push a first Spanish premium up, because the insurer cannot see the history you actually have. Some insurers will take documented evidence of a foreign claims-free record into account when quoting; not all of them do, and none of them are obliged to apply it in a specific way.',
        },
        {
          kind: 'covers',
          items: [
            { title: 'Ask before you cancel.', body: ' Request a claims-experience letter from your previous insurer while the policy is still live — it becomes slower to obtain once it has lapsed.' },
            { title: 'Present it at quotation.', body: ' Any recognition of foreign history has to be built into the price when the risk is rated, not added afterwards.' },
            { title: 'Expect variation.', body: ' Insurers weigh foreign records differently. That is one of the reasons comparing more than one proposal is worth more for an expat than it is for a local driver.' },
          ],
        },
        {
          kind: 'note',
          html:
            'We cannot promise that a given insurer will accept a given foreign record, or that a specific number of years automatically produces a discount — that is an underwriting decision, and it depends on the documentation and the insurer. See <a href="/en/blog/no-claims-history-car-insurance-spain/">using foreign no-claims history for car insurance in Spain</a> for what the evidence typically needs to look like.',
        },
      ],
    },

    {
      id: 'foreign-registered',
      h2: 'Foreign-registered vehicles',
      blocks: [
        {
          kind: 'p',
          html:
            'Insuring a vehicle that is still registered abroad but kept in Spain is a genuinely more complex situation than insuring a Spanish-registered car, and we are not able to say in general terms that any foreign-registered vehicle can be insured here — it depends on the vehicle, the circumstances and the insurer.',
        },
        {
          kind: 'grid',
          items: [
            { title: 'Country of registration', body: 'Which country the vehicle is currently registered in affects which insurers will even consider it.' },
            { title: 'Habitual location', body: 'Whether the vehicle genuinely lives in Spain or is only there temporarily changes the risk an insurer is being asked to price.' },
            { title: 'Ownership', body: 'Whether you are the registered owner, and how that is documented.' },
            { title: 'Intended registration', body: 'Whether the vehicle will move to Spanish plates, and on what timeline.' },
            { title: 'Duration in Spain', body: 'A short stay and an indefinite one are different questions, including for whether Spanish registration becomes a legal requirement.' },
            { title: 'Insurer appetite', body: 'Not every insurer we work with is willing to write a foreign-registered risk, regardless of the other factors.' },
          ],
        },
        {
          kind: 'note',
          html:
            'Tell us about the vehicle and we will confirm what can currently be arranged — see <a href="/en/blog/foreign-registered-car-insurance-spain/">insuring a foreign-registered car in Spain</a> for the detail behind each of these factors.',
        },
      ],
    },

    {
      id: 'importing',
      h2: 'Importing and registering a vehicle',
      blocks: [
        {
          kind: 'p',
          html:
            'This page is about insurance, not a substitute for the registration process itself, which runs through the ITV (technical inspection), the Agencia Tributaria (registration tax) and the DGT (final registration and plates) as three separate steps. What matters for insurance is that cover matches the vehicle’s actual registration status at each stage — before, during and after that process — rather than assuming one policy covers all three.',
        },
        {
          kind: 'note',
          html:
            'For the registration and tax process itself, see <a href="/en/blog/importing-car-to-spain-insurance/">importing a car to Spain: when do you need insurance?</a>, which covers the sequence and where insurance fits into it. For anything beyond that — customs, tax calculation, technical inspection appeals — the Agencia Tributaria and the DGT are the right authorities, not us.',
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
            'We do not publish indicative Spanish premium figures here — a number quoted for a webpage rather than checked against a real quote would not be honest. What genuinely moves the price:',
        },
        {
          kind: 'grid',
          items: [
            { title: 'Driver age and history', body: 'How long you have held a licence and your recorded claims, including any documented foreign history.' },
            { title: 'The vehicle', body: 'Value, power, age and how expensive it is to repair.' },
            { title: 'Location', body: 'Where the car is kept and, for some insurers, the specific postcode.' },
            { title: 'Use', body: 'Private, business or other declared use — undeclared use is a claim problem, not a saving.' },
            { title: 'Annual mileage', body: 'Where relevant to the insurer’s rating.' },
            { title: 'Parking', body: 'Garaged, private drive or street parking all factor into underwriting.' },
            { title: 'Cover level and excess', body: 'The tier you choose and the excess you accept on own damage.' },
            { title: 'Insurer underwriting', body: 'The same profile can be priced differently by different insurers — worth comparing rather than assuming one figure applies.' },
          ],
        },
      ],
    },

    {
      id: 'documents',
      h2: 'What we typically need',
      blocks: [
        {
          kind: 'steps',
          items: [
            { title: 'The driver.', body: 'Age, the country that issued your licence and roughly how long you have held it.' },
            { title: 'The vehicle.', body: 'Make, model, year and its current registration status — Spanish plate, foreign plate, or import in progress.' },
            { title: 'Claims history.', body: 'Claim-free years and whether you have, or can obtain, a letter from your previous insurer.' },
            { title: 'Where the car is kept.', body: 'Location and whether it is garaged.' },
            { title: 'What you have now.', body: 'Your current policy, if there is one, and its renewal date.' },
          ],
        },
        {
          kind: 'p',
          html:
            'Not every insurer asks for exactly the same documents — this is the starting list, and we will tell you what else is needed once we know which insurer is realistic for your case.',
        },
      ],
    },

    {
      id: 'claims',
      h2: 'If something happens',
      blocks: [
        {
          kind: 'p',
          html:
            'At a high level, the same principles apply whatever the incident: report it to your insurer promptly, gather evidence (photos, third-party details, a police report where relevant), and avoid admitting fault at the scene before the claim has been assessed. The exact process — who to call, what documentation is needed — depends on the insurer and the specific policy, so we do not publish insurer-specific claims numbers here; we give you the right contact once cover is actually in place.',
        },
      ],
    },
  ],

  form: {
    heading: 'Get a car insurance quote',
    sub: 'Tell us about the driver and the vehicle. Registration status and licence country change the answer more than anything else on this form.',
    name: 'car-insurance-quote-spain',
    gaField: 'registration_status',
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
        { name: 'spain_location', label: 'Where in Spain will the car be kept?', required: true, placeholder: 'e.g. Alicante, Costa Blanca' },
        {
          name: 'registration_status',
          label: 'Vehicle registration status',
          type: 'select',
          required: true,
          placeholder: 'Select one',
          options: ['Spanish-registered already', 'Foreign-registered, import in process', 'Foreign-registered, not yet started', 'Buying a car in Spain, not chosen yet', 'Not sure'],
        },
      ],
      [
        { name: 'vehicle', label: 'Make, model and year', required: true, placeholder: 'e.g. Volkswagen Golf 2019' },
        { name: 'registration_country', label: 'Vehicle’s country of registration', placeholder: 'e.g. United Kingdom, or "Spain"' },
      ],
      [
        { name: 'licence_country', label: 'Country that issued your driving licence', required: true, placeholder: 'e.g. United Kingdom' },
        { name: 'licence_year', label: 'Year you first held a full licence', placeholder: 'e.g. 2005' },
      ],
      [
        {
          name: 'claims_history',
          label: 'Claims history',
          type: 'select',
          placeholder: 'Select one',
          options: ['Claim-free, letter from previous insurer available', 'Claim-free, no letter yet', 'One or more claims in the last 5 years', 'Already have a Spanish claims record', 'Newly licensed / no history yet'],
        },
        {
          name: 'use_type',
          label: 'Intended use',
          type: 'select',
          placeholder: 'Select one',
          options: ['Private', 'Business', 'Other'],
        },
      ],
      {
        name: 'message',
        label: 'Anything we should know?',
        type: 'textarea',
        placeholder: 'Current insurer and renewal date, or where you are in the import/registration process.',
      },
    ],
  },

  faq: [
    {
      q: 'Is car insurance compulsory in Spain?',
      a: 'Yes. Third-party liability is compulsory for every motor vehicle in Spain under the consolidated Ley sobre responsabilidad civil y seguro en la circulación de vehículos a motor (Real Decreto Legislativo 8/2004, as amended). We do not quote the specific statutory minimum capitals here, as they are periodically revised — the current text is available on boe.es, or we can confirm the current position with you at quote stage.',
    },
    {
      q: 'Can I insure a car in Spain with a UK driving licence?',
      a: 'Generally yes, and there is a bilateral direct-exchange agreement between Spain and the UK that has been in force since 2023. Whether and when you need to exchange your licence with the DGT depends on your residency status, and requirements can change — confirm the current position with the DGT rather than relying on a summary, including this one.',
    },
    {
      q: 'Will my foreign no-claims history be recognised?',
      a: 'Some insurers will take a documented foreign record into account; not all do, and none are obliged to weigh it the same way. You will normally need a claims-experience letter from your previous insurer. It is worth requesting before you cancel the old policy, and it is an underwriting decision, not a guarantee.',
    },
    {
      q: 'Can you insure a foreign-registered car kept in Spain?',
      a: 'It depends on the vehicle, how long it has been or will be in Spain, and the insurer — this is genuinely more complex than insuring a Spanish-registered vehicle and we cannot promise availability in general terms. Tell us about the vehicle and we will confirm honestly what can currently be arranged.',
    },
    {
      q: 'Do you name which Spanish motor insurers you work with?',
      a: 'Not yet, honestly. Our Spanish insurer relationships are still being built, and we would rather tell you clearly what can currently be arranged than promise a panel that does not exist yet.',
    },
    {
      q: 'What documents do I need to import and register a car in Spain?',
      a: 'The registration process runs through the ITV, the Agencia Tributaria and the DGT, and the exact documents depend on the vehicle and your circumstances. That is a registration and tax question, not an insurance one — see our guide to importing a car to Spain, or the DGT and Agencia Tributaria directly for the current procedural requirements.',
    },
  ],

  related: [
    {
      h2: 'Guides worth reading first',
      blocks: [
        {
          kind: 'guides',
          items: [
            { href: '/en/blog/car-insurance-spain-expats/', text: 'Car insurance in Spain for expats: complete guide', note: 'the legal baseline, cover types, licences and documents, end to end' },
            { href: '/en/blog/foreign-driving-licence-car-insurance-spain/', text: 'Car insurance in Spain with a foreign driving licence', note: 'EU/EEA, UK and other licences, and what actually differs' },
            { href: '/en/blog/foreign-registered-car-insurance-spain/', text: 'Insuring a foreign-registered car in Spain', note: 'foreign plate vs Spanish plate, and what insurers actually ask' },
            { href: '/en/blog/importing-car-to-spain-insurance/', text: 'Importing a car to Spain: when do you need insurance?', note: 'where insurance fits into the registration sequence' },
            { href: '/en/blog/no-claims-history-car-insurance-spain/', text: 'Using foreign no-claims history for car insurance in Spain', note: 'what evidence to gather, and when to ask for it' },
            { href: '/en/blog/category/spain-car/', text: 'All car guides for Spain' },
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
            { href: '/en/blog/insurance-portugal-spain-international-residents/', title: 'Insurance in Portugal and Spain for international residents', blurb: 'For owners with property in, or moving between, both countries.' },
          ],
        },
      ],
    },
  ],
};

// -----------------------------------------------------------------------------
// LIFE — /en/life-insurance-spain/
// -----------------------------------------------------------------------------
//
// Boundary discipline for this page and its two siblings below, stated once:
// this is an insurance intermediary, not a tax, legal, mortgage or investment
// adviser. Every section that touches succession, tax treatment, mortgage
// lending law or investment-linked products says so explicitly and points to
// the appropriate specialist rather than answering the question itself. No
// investment-linked or savings life product is described anywhere in this
// file — Adler does not currently distribute one, and the brief this was
// built from is explicit that this class of product needs its own compliance
// review before it can appear on the site at all.

const ADVICE_BOUNDARY_NOTE =
  'Adler & Rochefort is an insurance intermediary, not a tax, legal, mortgage or investment adviser. Where a question crosses into tax, succession, mortgage lending law or investment advice, this page says so and points you towards the right kind of specialist — it does not attempt to answer it.';

const LIFE = {
  slug: 'life-insurance-spain',
  crumb: 'Life insurance',
  parent: { href: '/en/expat-insurance-spain/', label: 'Insurance for expats in Spain' },
  title: 'Life Insurance in Spain for International Residents | Adler & Rochefort',
  description:
    'Life insurance in Spain for expats and international residents: family protection, mortgage-related cover, and reviewing a policy you already hold from another country. Explained in English.',
  keywords:
    'life insurance spain expats, life insurance for expats in spain, life cover spain foreigners, life insurance spain international residents, family protection spain expats',
  eyebrow: 'Spain · Life insurance',
  h1: 'Life Insurance in Spain for International Residents',
  heroSub:
    'Whether it is protecting a family, a mortgage, or reviewing cover you already hold from another country, we help you work out what actually applies to your situation — and confirm honestly what can currently be arranged.',
  heroCta: 'Get a Life Insurance Review',
  heroSecondary: 'Discuss Your Situation',
  heroTrust: '<strong>English throughout</strong> · Registered with Portugal’s ASF (no. 425591790/3) · A written answer on what can be arranged',
  topBarCta: 'Get a Life Insurance Review',
  stickyCta: 'Get a Life Insurance Review',
  whatsapp: 'Hello, I would like a life insurance review for my situation in Spain.',
  market: 'spain',
  chatTopics: ['spain_general', 'spain_life'],
  service: {
    name: 'Life insurance guidance in Spain',
    type: 'Life insurance intermediation',
    description:
      'Helping international residents in Spain work out what life and family-protection cover applies to their situation, including reviewing existing foreign cover, and arranging it where it can be honestly confirmed.',
  },

  sections: [
    {
      id: 'who-for',
      h2: 'Who life insurance may be relevant for',
      blocks: [
        {
          kind: 'p',
          html:
            'Life insurance is not something everyone needs, and this page does not assume you do. It tends to become genuinely relevant for a specific set of situations — say which is closest and we will ask the right follow-up questions.',
        },
        {
          kind: 'grid',
          items: [
            { title: 'Families with dependants', body: 'Cover that would replace your income, or fund your children’s upbringing, if you were no longer there.' },
            { title: 'Couples', body: 'Especially where one partner’s income supports the household disproportionately.' },
            { title: 'Property owners with a mortgage', body: 'See the dedicated page on mortgage protection below — a related but distinct question.' },
            { title: 'Business owners', body: 'Cover tied to a business obligation or a partner agreement, rather than personal family protection.' },
            { title: 'People with cross-border financial responsibilities', body: 'Dependants, debts or obligations that sit in more than one country.' },
            { title: 'Anyone with an existing foreign policy', body: 'See the section below on what to check before assuming it still applies.' },
          ],
        },
        { kind: 'note', html: ADVICE_BOUNDARY_NOTE },
      ],
    },

    {
      id: 'types-of-need',
      h2: 'What kind of need this is usually about',
      blocks: [
        {
          kind: 'p',
          html:
            'People rarely start with "I want a life insurance policy" — they start with a specific concern, and the right shape of cover follows from that:',
        },
        {
          kind: 'covers',
          items: [
            { title: 'Family protection.', body: ' Replacing income or providing a lump sum for dependants if you were no longer there.' },
            { title: 'Mortgage protection.', body: ' Cover linked conceptually to an outstanding property debt — see <a href="/en/mortgage-protection-spain/">mortgage protection in Spain</a> for the dedicated page.' },
            { title: 'Income replacement.', body: ' Covering ongoing household costs, not just a one-off debt.' },
            { title: 'Debt protection.', body: ' Beyond a mortgage — other significant borrowing a family would otherwise be left carrying.' },
            { title: 'Business or family obligations.', body: ' A partnership agreement, a family loan, or a similar arrangement with a life-insurance component.' },
            { title: 'Liquidity considerations.', body: ' At a high level only — where a lump sum on death would help a family manage costs or obligations that arise at that point. This is not tax or estate advice, and where those questions come up we say so and point you to a specialist rather than answer them ourselves.' },
          ],
        },
      ],
    },

    {
      id: 'term-life',
      h2: 'Term life insurance, conceptually',
      blocks: [
        {
          kind: 'p',
          html:
            'The core product most people mean by "life insurance" pays a defined sum if you die within a defined term — a straightforward idea, but insurers structure the details differently: level cover that stays the same throughout the term, decreasing cover that reduces over time (often used alongside a repayment mortgage), renewable terms, and convertible options among them. We do not assume every insurer we may work with in Spain offers an identical structure — the products actually available depend on the insurer, and we confirm the real options once we understand your situation.',
        },
      ],
    },

    {
      id: 'sum-insured',
      h2: 'Thinking about how much cover you need',
      blocks: [
        {
          kind: 'p',
          html:
            'There is no single multiplier that fits everyone, whatever a quick online calculator might suggest. What genuinely feeds into the number:',
        },
        {
          kind: 'grid',
          items: [
            { title: 'Outstanding debts', body: 'Including, but not limited to, a mortgage.' },
            { title: 'Dependants', body: 'How many, and for how long they would need support.' },
            { title: 'Household income', body: 'What would actually need replacing, not just a round figure.' },
            { title: 'Education costs', body: 'Where relevant to your family’s plans.' },
            { title: 'Existing savings and assets', body: 'What a family could already draw on.' },
            { title: 'Existing life cover', body: 'From this country or another — see the section below on cover you already hold.' },
          ],
        },
        {
          kind: 'note',
          html: 'We work through this with you rather than hand you a formula — the right number depends on your actual circumstances, not a generic rule of thumb.',
        },
      ],
    },

    {
      id: 'underwriting',
      h2: 'Health and underwriting',
      blocks: [
        {
          kind: 'p',
          html:
            'Insurers assess life insurance applications individually, based on age, health, smoking status, occupation, lifestyle, the sum insured requested and the policy term. We cannot promise a specific outcome before an insurer has actually assessed a case, and we do not collect detailed medical information through the website form below — any medical questions belong with the insurer, as part of underwriting, once a specific application is under way.',
        },
      ],
    },

    {
      id: 'beneficiaries',
      h2: 'Beneficiaries',
      blocks: [
        {
          kind: 'p',
          html:
            'Who receives the proceeds of a policy, and how, matters — and getting it right generally means naming beneficiaries deliberately rather than leaving a policy to default. Where Spanish succession or tax treatment becomes relevant to how a payout is received, that is a question for a Spanish lawyer or tax adviser, not for us — we can tell you how the policy itself is structured, not how it will be treated on the other side.',
        },
        { kind: 'note', html: ADVICE_BOUNDARY_NOTE },
      ],
    },

    {
      id: 'existing-cover',
      h2: 'If you already hold life cover from another country',
      blocks: [
        {
          kind: 'p',
          html:
            'Moving to Spain does not automatically mean your existing UK, EU or other international life policy stops working — and we do not suggest cancelling it before you have actually checked. What is worth confirming with the insurer that issued it:',
        },
        {
          kind: 'covers',
          items: [
            { title: 'Territorial scope.', body: ' Whether the policy responds the same way once you live outside the country it was written in.' },
            { title: 'Residency conditions.', body: ' Some policies have conditions tied to where the policyholder is resident.' },
            { title: 'Policy terms.', body: ' Whether anything else in the wording assumes a specific country of residence.' },
            { title: 'Currency.', body: ' Whether the sum insured is fixed in a currency that still makes sense for your situation.' },
            { title: 'Beneficiaries.', body: ' Whether they are still correctly named and reachable.' },
            { title: 'Continuation rules.', body: ' Whether the policy has its own rules about what happens on a move abroad.' },
          ],
        },
        {
          kind: 'note',
          html: 'We generalise only this far. The actual answer for your policy is in its wording — send it to us and we will tell you plainly what it says, rather than guess based on what is typical.',
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
            'We do not publish indicative premiums here — a figure quoted for a webpage rather than checked against a real underwriting decision would not be honest. Age, health, smoking status, occupation, the sum insured and the policy term all move the price; the only way to get an actual number is a real application.',
        },
      ],
    },

    {
      id: 'get-review',
      h2: 'How to request a review',
      blocks: [
        {
          kind: 'p',
          html:
            'Tell us roughly who needs to be protected, whether a mortgage or specific debt is involved, and whether you already hold cover elsewhere. We do not need medical detail to start the conversation — that comes later, directly with the insurer, if an application goes ahead.',
        },
      ],
    },
  ],

  form: {
    heading: 'Get a life insurance review',
    sub: 'Tell us about your situation. We do not collect medical details here — that stays with the insurer, as part of underwriting.',
    name: 'life-insurance-review-spain',
    gaField: 'main_objective',
    submit: 'Request my review',
    fields: [
      [
        { name: 'name', label: 'Full name', required: true, placeholder: 'Jane Smith', autocomplete: 'name' },
        { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'you@example.com', autocomplete: 'email' },
      ],
      [
        { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', required: true, placeholder: '+44 000 000 000', autocomplete: 'tel', inputmode: 'tel' },
        { name: 'current_country', label: 'Current country of residence', required: true, placeholder: 'e.g. United Kingdom' },
      ],
      [
        { name: 'spain_location', label: 'Where in Spain?', required: true, placeholder: 'e.g. Marbella, Costa del Sol' },
        {
          name: 'age_range',
          label: 'Age range',
          type: 'select',
          required: true,
          placeholder: 'Select one',
          options: ['Under 30', '30–39', '40–49', '50–59', '60 or over'],
        },
      ],
      [
        { name: 'dependants', label: 'Number of dependants', placeholder: 'e.g. 2' },
        { name: 'cover_amount', label: 'Approximate cover required', placeholder: 'e.g. €250,000, or "not sure"' },
      ],
      [
        {
          name: 'has_mortgage',
          label: 'Do you have a mortgage in Spain?',
          type: 'select',
          placeholder: 'Select one',
          options: ['Yes', 'No', 'Not yet, but considering one'],
        },
        {
          name: 'has_existing_cover',
          label: 'Do you already have life cover elsewhere?',
          type: 'select',
          placeholder: 'Select one',
          options: ['Yes', 'No', 'Not sure'],
        },
      ],
      [
        {
          name: 'main_objective',
          label: 'Main objective',
          type: 'select',
          placeholder: 'Select one',
          options: ['Family protection', 'Mortgage protection', 'Business/partnership obligation', 'Reviewing existing cover', 'Not sure — advise me'],
        },
        {
          name: 'smoker',
          label: 'Smoker? (optional)',
          type: 'select',
          placeholder: 'Prefer not to say',
          options: ['Non-smoker', 'Smoker', 'Prefer not to say'],
        },
      ],
      {
        name: 'message',
        label: 'Anything we should know?',
        type: 'textarea',
        placeholder: 'Details of any existing policy, or anything else that would help us give an accurate answer.',
      },
    ],
  },

  faq: [
    {
      q: 'Do I need life insurance in Spain?',
      a: 'Not universally — it depends on your circumstances. It tends to matter most where others depend on your income, where a mortgage or debt would otherwise fall to your family, or where a business or family obligation is tied to it. We work through this with you rather than assume it.',
    },
    {
      q: 'Can I keep my UK or other foreign life insurance policy after moving to Spain?',
      a: 'Often, yes — but check its territorial scope, residency conditions and currency with the insurer that issued it before assuming it continues to work exactly as before. We do not recommend cancelling an existing policy before you have actually confirmed its terms.',
    },
    {
      q: 'How much life insurance do I need?',
      a: 'There is no universal formula. It depends on outstanding debts, dependants, household income, existing savings and any cover you already hold — we work through this with you rather than apply a generic multiplier.',
    },
    {
      q: 'Will you ask for my medical history?',
      a: 'Not through this form. We ask for the basics needed to understand your situation; any medical questions an insurer needs answered are handled directly with the insurer, as part of underwriting.',
    },
    {
      q: 'Can you advise on inheritance tax or succession planning?',
      a: 'No. We are an insurance intermediary, not a tax or legal adviser. Where a question touches Spanish succession or tax treatment, we say so and point you towards a qualified specialist.',
    },
    {
      q: 'Do you offer investment-linked or savings life insurance?',
      a: 'Not currently. This page covers protection-focused life insurance — cover in the event of death — not investment or savings products.',
    },
  ],

  related: [
    {
      h2: 'Guides worth reading first',
      blocks: [
        {
          kind: 'guides',
          items: [
            { href: '/en/blog/life-insurance-spain-expats/', text: 'Life insurance in Spain for expats: what to consider', note: 'the practical questions before you request a review' },
            { href: '/en/blog/mortgage-life-insurance-spain/', text: 'Do you need life insurance for a mortgage in Spain?', note: 'legal requirement vs lender request vs bank bundling, properly explained' },
            { href: '/en/blog/insurance-review-expats-spain/', text: 'Why expats in Spain should review their insurance as a whole', note: 'gaps and duplication across separate policies' },
            { href: '/en/blog/category/spain-life/', text: 'All life insurance guides for Spain' },
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
            { href: '/en/mortgage-protection-spain/', title: 'Mortgage protection in Spain', blurb: 'For property buyers specifically — a related but distinct question.' },
            { href: '/en/private-clients-spain/', title: 'Private client insurance in Spain', blurb: 'For households managing several risks — property, vehicles, health and life — together.' },
            { href: '/en/expat-insurance-spain/', title: 'Insurance for expats in Spain', blurb: 'Not sure yet what you need? Start at the hub.' },
          ],
        },
      ],
    },
  ],
};

// -----------------------------------------------------------------------------
// MORTGAGE — /en/mortgage-protection-spain/
// -----------------------------------------------------------------------------
//
// The one claim this page must never make in general terms: "life insurance
// is required for a mortgage in Spain." Verified position, checked against
// Banco de España's own client guidance and against Ley 5/2019, de 15 de
// marzo (de contratos de crédito inmobiliario):
//   - Buildings/home insurance is what a Spanish mortgage lender actually
//     requires, to protect the property securing the loan.
//   - Life insurance is not a nationwide legal requirement to obtain a
//     mortgage. Lenders commonly ask for it as loan security and often
//     bundle their own product with a better headline rate — but Ley 5/2019
//     prohibits a lender from making the loan itself conditional on buying
//     the bank's own tied product, and requires them to accept an
//     equivalent externally-arranged policy.
// This page states that distinction explicitly rather than a flat yes/no.

const MORTGAGE = {
  slug: 'mortgage-protection-spain',
  crumb: 'Mortgage protection',
  parent: { href: '/en/life-insurance-spain/', label: 'Life insurance in Spain' },
  title: 'Mortgage Protection in Spain for International Property Buyers | Adler & Rochefort',
  description:
    'Mortgage protection in Spain for international buyers: what a lender actually requires by law versus what a bank commonly asks for or bundles, and how to review cover independently.',
  keywords:
    'mortgage protection spain expats, life insurance mortgage spain, mortgage life insurance spain, insurance for spanish mortgage expats, property buyer protection spain',
  eyebrow: 'Spain · Mortgage protection',
  h1: 'Mortgage Protection in Spain for International Property Buyers',
  heroSub:
    'Buying with a mortgage in Spain? We help you understand what your lender actually requires, what it merely offers, and how to protect your family beyond just the loan balance.',
  heroCta: 'Request a Mortgage Protection Review',
  heroSecondary: 'Ask About Your Situation',
  heroTrust: '<strong>English throughout</strong> · Registered with Portugal’s ASF (no. 425591790/3) · A written answer on what can be arranged',
  topBarCta: 'Request a Mortgage Protection Review',
  stickyCta: 'Request a Mortgage Protection Review',
  whatsapp: 'Hello, I would like a mortgage protection review for a property in Spain.',
  market: 'spain',
  chatTopics: ['spain_general', 'spain_mortgage', 'spain_life'],
  service: {
    name: 'Mortgage protection guidance in Spain',
    type: 'Life and property insurance intermediation for mortgage-linked cover',
    description:
      'Helping international property buyers in Spain understand what their lender actually requires versus what it offers, and arranging independent mortgage-linked life and buildings cover where it can be honestly confirmed.',
  },

  sections: [
    {
      id: 'requirement-vs-request',
      h2: 'What is actually required, and what is a lender request',
      blocks: [
        {
          kind: 'p',
          html:
            'This is the single most confused topic in Spanish mortgage insurance, so we state it plainly rather than let a bank\'s marketing answer it for us. What Spanish mortgage lenders are actually required to insist on is <strong>buildings insurance</strong> — cover protecting the physical property that secures the loan. Life insurance is a different matter: it is <strong>not a nationwide legal requirement</strong> to obtain a mortgage in Spain.',
        },
        {
          kind: 'p',
          html:
            'What does happen in practice is that lenders frequently ask for a life insurance policy as additional security for the loan, and often present their own bundled product alongside a better headline interest rate — making it feel obligatory even where it legally is not. Under <em>Ley 5/2019, de 15 de marzo, reguladora de los contratos de crédito inmobiliario</em>, a lender cannot make the loan itself conditional on buying the bank\'s own tied insurance product, and must accept an equivalent policy from another provider offering comparable cover. The rate improvement offered for taking the bank\'s own product is a commercial incentive, not a legal obligation to accept it.',
        },
        {
          kind: 'note',
          html:
            'Confirm the specific position with your own lender and, where the numbers are significant, a Spanish lawyer or mortgage adviser — lending practice and any given bank\'s policy can differ, and this page describes the general legal framework, not your specific contract.',
        },
      ],
    },

    {
      id: 'family-protection',
      h2: 'Protecting the family, not just the bank',
      blocks: [
        {
          kind: 'p',
          html:
            'A policy sized only to clear the mortgage balance protects the lender\'s interest, not necessarily your family\'s. Worth separating the two questions: what would clear the debt, and what would actually let your family stay in the property and maintain their standard of living. They are not always the same number — see <a href="/en/life-insurance-spain/">life insurance in Spain</a> for how to think about the wider figure.',
        },
      ],
    },

    {
      id: 'decreasing-vs-level',
      h2: 'Decreasing versus level cover',
      blocks: [
        {
          kind: 'p',
          html:
            'Where the actual products available support it, mortgage-linked life cover is often offered as decreasing cover — the sum insured falls roughly in line with the outstanding mortgage balance over the term, typically at a lower price than level cover for the same starting amount. Level cover keeps the sum insured constant throughout the term instead. Which is appropriate depends on whether your only goal is clearing the mortgage, or whether you also want protection that does not shrink over time — we confirm which structures are actually available once we know the lender and the loan.',
        },
      ],
    },

    {
      id: 'joint-non-resident',
      h2: 'Joint borrowers and non-resident buyers',
      blocks: [
        {
          kind: 'p',
          html:
            'Where a mortgage is held jointly, cover can sometimes be arranged on a joint-life or first-death basis, or as separate policies on each borrower — the right structure depends on the lender\'s requirement and the couple\'s own preference. Non-resident buyers are not automatically excluded from mortgage-linked life cover, but the underwriting questions and the documentation an insurer wants can differ from a resident applicant\'s — tell us your residency situation at the outset rather than partway through.',
        },
      ],
    },

    {
      id: 'bank-vs-independent',
      h2: 'Bank-sold cover versus an independent review',
      blocks: [
        {
          kind: 'p',
          html:
            'A bank\'s own bundled life policy is not automatically the wrong choice, and we do not tell you to reject it on principle. What is worth doing is comparing it against an independent option before signing — the legal right to do so exists under Ley 5/2019, and the two policies are not always priced or structured the same way for an equivalent level of cover. If you already have a bank policy in place, we can review it against the market on the same terms.',
        },
      ],
    },

    {
      id: 'reviewing-existing',
      h2: 'Reviewing cover you already have',
      blocks: [
        {
          kind: 'p',
          html:
            'If you already hold mortgage-linked life cover — through your lender or otherwise — send us the policy and we will tell you plainly what it actually covers, at what sum insured, and whether it still matches your current mortgage balance and family situation.',
        },
      ],
    },

    {
      id: 'ownership',
      h2: 'Policy ownership and beneficiaries, at a high level',
      blocks: [
        {
          kind: 'p',
          html:
            'Who owns a mortgage-linked policy, and who it is written to benefit, is a structural decision worth getting right — a policy assigned directly to the lender works differently from one held by the borrower with the lender named as a beneficiary up to the outstanding balance. This is a decision to make with the specifics of your loan and family situation in view, not a default to accept without asking.',
        },
        { kind: 'note', html: ADVICE_BOUNDARY_NOTE },
      ],
    },
  ],

  form: {
    heading: 'Request a mortgage protection review',
    sub: 'Tell us about the property and the mortgage. We will confirm what your lender actually requires versus what it offers, and what independent options exist.',
    name: 'mortgage-protection-review-spain',
    gaField: 'mortgage_status',
    submit: 'Request my review',
    fields: [
      [
        { name: 'name', label: 'Full name', required: true, placeholder: 'Jane Smith', autocomplete: 'name' },
        { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'you@example.com', autocomplete: 'email' },
      ],
      [
        { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', required: true, placeholder: '+44 000 000 000', autocomplete: 'tel', inputmode: 'tel' },
        { name: 'spain_location', label: 'Where is the property?', required: true, placeholder: 'e.g. Valencia' },
      ],
      [
        {
          name: 'mortgage_status',
          label: 'Mortgage status',
          type: 'select',
          required: true,
          placeholder: 'Select one',
          options: ['Applying now', 'Mortgage approved, not yet completed', 'Already have a Spanish mortgage', 'Considering a purchase'],
        },
        {
          name: 'borrower_type',
          label: 'Borrower type',
          type: 'select',
          placeholder: 'Select one',
          options: ['Single borrower', 'Joint borrowers', 'Not sure yet'],
        },
      ],
      [
        { name: 'loan_amount', label: 'Approximate loan amount', placeholder: 'e.g. €300,000' },
        {
          name: 'residency_status',
          label: 'Residency status',
          type: 'select',
          placeholder: 'Select one',
          options: ['Resident in Spain', 'Non-resident', 'Becoming resident soon'],
        },
      ],
      {
        name: 'message',
        label: 'Anything we should know?',
        type: 'textarea',
        placeholder: 'Whether your lender has offered a bundled policy, and any details of cover you already have.',
      },
    ],
  },

  faq: [
    {
      q: 'Is life insurance legally required to get a mortgage in Spain?',
      a: 'No — not as a nationwide legal requirement. What a lender is required to insist on is buildings insurance for the property. Life insurance is commonly requested by lenders as additional security, and often bundled with a better rate, but Ley 5/2019 prevents a lender making the loan conditional on buying the bank\'s own tied product and requires them to accept an equivalent independent policy.',
    },
    {
      q: 'Can I use my own insurer instead of the one my bank offers?',
      a: 'Generally yes, under Ley 5/2019, provided the alternative policy offers equivalent cover and conditions. Your lender may offer a better interest rate for taking their own bundled product — that is a commercial incentive, not a legal obligation to accept it.',
    },
    {
      q: 'What is decreasing life cover?',
      a: 'A structure, where available from the insurer, where the sum insured reduces roughly in line with the outstanding mortgage balance over the term — typically cheaper than level cover for the same starting amount, but the protection reduces over time.',
    },
    {
      q: 'Can non-resident buyers get mortgage protection in Spain?',
      a: 'Non-residency does not automatically exclude you, but the underwriting questions and documentation can differ from a resident application. Tell us your residency situation when you start the conversation.',
    },
    {
      q: 'Should I keep my bank\'s life insurance or switch to an independent policy?',
      a: 'It depends on the specific terms and price of each. We compare your bank\'s offer against independent options for an equivalent level of cover rather than assume either is automatically better.',
    },
  ],

  related: [
    {
      h2: 'Guides worth reading first',
      blocks: [
        {
          kind: 'guides',
          items: [
            { href: '/en/blog/mortgage-life-insurance-spain/', text: 'Do you need life insurance for a mortgage in Spain?', note: 'legal requirement vs lender request vs bank bundling, in full' },
            { href: '/en/blog/insurance-buying-property-spain/', text: 'Insurance to consider when buying property in Spain', note: 'the full picture — buildings, mortgage protection, life, landlord' },
            { href: '/en/blog/life-insurance-spain-expats/', text: 'Life insurance in Spain for expats: what to consider', note: 'the wider family-protection picture beyond the mortgage' },
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
            { href: '/en/life-insurance-spain/', title: 'Life insurance in Spain', blurb: 'The wider family-protection picture, beyond the mortgage.' },
            { href: '/en/home-insurance-spain/', title: 'Home insurance in Spain', blurb: 'Buildings cover — the part of this that actually is a lender requirement.' },
            { href: '/en/private-clients-spain/', title: 'Private client insurance in Spain', blurb: 'For a coordinated review across property, life and other cover together.' },
          ],
        },
      ],
    },
  ],
};

// -----------------------------------------------------------------------------
// PRIVATE CLIENTS — /en/private-clients-spain/
// -----------------------------------------------------------------------------

const PRIVATE_CLIENTS = {
  slug: 'private-clients-spain',
  crumb: 'Private clients',
  parent: { href: '/en/expat-insurance-spain/', label: 'Insurance for expats in Spain' },
  title: 'Private Client Insurance in Spain | International Clients | Adler & Rochefort',
  description:
    'Coordinated insurance review for international households in Spain with more than one property, vehicle or type of cover — one broker, several risks, reviewed together.',
  keywords:
    'private client insurance spain, high net worth insurance spain, insurance for wealthy expats spain, high value home insurance spain, international private clients spain',
  eyebrow: 'Spain · Private clients',
  h1: 'Private Client Insurance in Spain',
  heroSub:
    'For households with more than one property, vehicle or type of cover to manage in Spain — one coordinated review, rather than several unrelated policies arranged at different times with different insurers.',
  heroCta: 'Request a Private Client Review',
  heroSecondary: 'Ask About Your Situation',
  heroTrust: '<strong>English throughout</strong> · Registered with Portugal’s ASF (no. 425591790/3) · A written answer on what can be arranged',
  topBarCta: 'Request a Private Client Review',
  stickyCta: 'Request a Private Client Review',
  whatsapp: 'Hello, I would like a private client insurance review for my household in Spain.',
  market: 'spain',
  chatTopics: ['spain_general', 'spain_private_clients'],
  service: {
    name: 'Private client insurance review in Spain',
    type: 'Multi-line insurance intermediation and coordinated review',
    description:
      'A coordinated review across property, vehicles, health, life and landlord cover for international households in Spain with more than one policy to manage — arranged where it can be honestly confirmed.',
  },

  sections: [
    {
      id: 'fragmentation',
      h2: 'Complex households need coordination, not more policies',
      blocks: [
        {
          kind: 'p',
          html:
            'This is not a luxury product line, and we do not market it as one. It is a practical observation: households with a home in one insurer\'s hands, a car with another, health cover arranged somewhere else, and a life policy from years ago — each bought at a different time, by a different route, sometimes in a different language — end up with gaps and overlaps that nobody notices until a claim, because nobody has ever looked at the whole picture at once.',
        },
        {
          kind: 'note',
          html:
            'The proposition here is simple: one broker, reviewing several risks together, for an international client. Not a branded "wealth insurance" product — a coordinated process.',
        },
      ],
    },

    {
      id: 'high-value-property',
      h2: 'High-value property',
      blocks: [
        {
          kind: 'p',
          html:
            'The mechanics are the same as any home insurance question — see <a href="/en/home-insurance-spain/">home insurance in Spain</a> for the full detail — but higher-value properties raise the same questions with higher stakes: an accurate rebuilding value that has not drifted out of date, higher contents sums that actually reflect what is in the property, the security measures an insurer expects at that value, and how occupancy and second-home use are declared. Getting these details precisely right matters more, not less, as the sums involved grow.',
        },
      ],
    },

    {
      id: 'multiple-properties',
      h2: 'Multiple properties',
      blocks: [
        {
          kind: 'p',
          html:
            'Owning property in Spain alongside property elsewhere is common among the households we hear from. We can review and help coordinate the Spanish side of that picture; we do not claim to arrange or review cover for property in jurisdictions where we do not operate, and we say so plainly rather than imply otherwise.',
        },
      ],
    },

    {
      id: 'vehicles',
      h2: 'Vehicles',
      blocks: [
        {
          kind: 'p',
          html:
            'From a single family car to more than one vehicle across a household — see <a href="/en/car-insurance-spain/">car insurance in Spain</a> for the detail, including foreign licences and foreign-registered vehicles, both of which come up regularly at this end of the client base.',
        },
      ],
    },

    {
      id: 'health',
      h2: 'Health',
      blocks: [
        {
          kind: 'p',
          html:
            'Family and individual private health cover — see <a href="/en/health-insurance-spain/">health insurance in Spain</a>. For larger or more complex families, the same principle applies as elsewhere on this page: each person is underwritten individually, and reviewing everyone together at once surfaces inconsistencies a policy-by-policy approach misses.',
        },
      ],
    },

    {
      id: 'life-protection',
      h2: 'Life and family protection',
      blocks: [
        {
          kind: 'p',
          html:
            'See <a href="/en/life-insurance-spain/">life insurance in Spain</a> for family and mortgage-linked protection. For private clients specifically, this is often the policy most likely to be out of date — arranged years ago, in another country, for a sum insured that no longer reflects the household\'s actual circumstances.',
        },
      ],
    },

    {
      id: 'landlord',
      h2: 'Landlord and investment property',
      blocks: [
        {
          kind: 'p',
          html:
            'Where a household holds one or more investment or rental properties in Spain, see <a href="/en/landlord-insurance-spain/">landlord insurance in Spain</a>. A coordinated review is most useful here when there is more than one investment property, or where a mix of long-term and short-term letting makes the picture genuinely complex.',
        },
      ],
    },

    {
      id: 'service',
      h2: 'International client service',
      blocks: [
        {
          kind: 'p',
          html:
            'Everything above is arranged and communicated in English, by a single point of contact, whether you live in Spain full-time or manage the household\'s Spanish affairs remotely. Correspondence, comparison and claims all work the same way whether you are down the road or in a different time zone — that is how we work by default, not an exception arranged on request.',
        },
      ],
    },
  ],

  form: {
    heading: 'Request a private client review',
    sub: 'Tell us what you currently hold, and with whom. We will confirm what can be reviewed together and what can currently be arranged.',
    name: 'private-client-review-spain',
    gaField: 'property_ownership',
    submit: 'Request my review',
    fields: [
      [
        { name: 'name', label: 'Full name', required: true, placeholder: 'Jane Smith', autocomplete: 'name' },
        { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'you@example.com', autocomplete: 'email' },
      ],
      [
        { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', required: true, placeholder: '+44 000 000 000', autocomplete: 'tel', inputmode: 'tel' },
        { name: 'current_country', label: 'Country of residence', required: true, placeholder: 'e.g. United Kingdom' },
      ],
      [
        { name: 'spain_location', label: 'Where in Spain?', required: true, placeholder: 'e.g. Marbella, Costa del Sol' },
        {
          name: 'property_ownership',
          label: 'Property ownership',
          type: 'select',
          required: true,
          placeholder: 'Select one',
          options: ['One property in Spain', 'More than one property in Spain', 'Property in Spain and elsewhere', 'Not yet, planning to buy'],
        },
      ],
      [
        { name: 'property_count', label: 'Number of properties (Spain)', placeholder: 'e.g. 2' },
        { name: 'vehicles', label: 'Vehicles to consider', placeholder: 'e.g. 2 cars' },
      ],
      [
        {
          name: 'interests',
          label: 'Which risks would you like reviewed?',
          type: 'checkboxes',
          options: ['Home / property', 'Landlord / rental property', 'Car', 'Health', 'Life'],
        },
        {
          name: 'preferred_contact',
          label: 'Preferred contact method',
          type: 'select',
          placeholder: 'Select one',
          options: ['Email', 'Phone', 'WhatsApp'],
        },
      ],
      {
        name: 'message',
        label: 'Other risks or notes',
        type: 'textarea',
        placeholder: 'Anything else relevant to a coordinated review — we do not need valuations or sensitive details at this stage.',
      },
    ],
  },

  faq: [
    {
      q: 'What does "private client" mean here — is this a luxury product?',
      a: 'No. It describes a coordinated review across several types of cover for a household with more than one risk to manage — property, vehicles, health, life — rather than a branded luxury insurance product. The underlying products are the same ones covered elsewhere on this site.',
    },
    {
      q: 'Can you insure property I own outside Spain?',
      a: 'We can review and help coordinate the Spanish side of your situation. We do not claim to arrange or review cover for property in jurisdictions where we do not operate.',
    },
    {
      q: 'Do you insure art, jewellery or collections?',
      a: 'Only where it can genuinely be arranged and supported by an actual insurer relationship — we do not promise cover for valuables in general terms. Tell us what you have and we will confirm honestly whether it is something we can currently place.',
    },
    {
      q: 'Is there a minimum value or income to use this service?',
      a: 'No formal threshold. The review is genuinely most useful for households with more than one property, vehicle or line of cover to coordinate — if that describes your situation, this is the right starting point regardless of specific figures.',
    },
    {
      q: 'Will you need detailed financial information to start?',
      a: 'No — we start with what you currently hold and with whom, not valuations or sensitive financial detail. That level of detail, if needed, comes later and only where genuinely relevant to a specific policy.',
    },
  ],

  related: [
    {
      h2: 'Guides worth reading first',
      blocks: [
        {
          kind: 'guides',
          items: [
            { href: '/en/blog/high-value-home-insurance-spain/', text: 'Insuring a high-value home in Spain: what international owners should check', note: 'rebuilding value, security, occupancy and valuables' },
            { href: '/en/blog/insurance-review-expats-spain/', text: 'Why expats in Spain should review their insurance as a whole', note: 'the gaps a policy-by-policy approach tends to miss' },
            { href: '/en/blog/insurance-buying-property-spain/', text: 'Insurance to consider when buying property in Spain', note: 'the full picture for a new purchase' },
            { href: '/en/blog/category/spain-private-clients/', text: 'All private client guides for Spain' },
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
            { href: '/en/home-insurance-spain/', title: 'Home insurance in Spain', blurb: 'The starting point for any property in the review.' },
            { href: '/en/life-insurance-spain/', title: 'Life insurance in Spain', blurb: 'Often the policy most likely to be out of date.' },
            { href: '/en/expat-insurance-spain/', title: 'Insurance for expats in Spain', blurb: 'Not sure yet what you need reviewed? Start at the hub.' },
          ],
        },
      ],
    },
  ],
};

export const PAGES = [HUB, HOME, LANDLORD, HEALTH, CAR, LIFE, MORTGAGE, PRIVATE_CLIENTS];
export const HUB_SLUG = HUB.slug;
