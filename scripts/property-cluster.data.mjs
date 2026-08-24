/**
 * Content for the Home & Property commercial cluster (/en/).
 *
 * Consumed by build-property-cluster.mjs. One entry per page; the builder
 * refuses to write two pages that share a <title> or an H1, which is the
 * cheapest cannibalisation check there is.
 *
 * Editorial rules that apply to every string in this file:
 *
 *  - No page states what "a Portuguese policy covers". Cover depends on the
 *    insurer and on the wording of the individual policy, and the copy says so
 *    wherever a reader could otherwise assume otherwise.
 *  - No universal occupancy threshold is quoted. There is no legal 30/60/90-day
 *    rule in Portugal; each insurer sets its own condition.
 *  - Nothing is offered that Adler & Rochefort cannot actually quote. Rent
 *    guarantee and landlord legal expenses are described honestly as "ask us
 *    what is available" rather than as products on the shelf.
 *  - No legal or tax advice, and no claims about what a court or the NRAU would
 *    decide in a dispute.
 */

export const PILLAR = '/en/home-insurance-quote/';

// --- shared form parts -------------------------------------------------------

const CONTACT_ROWS = [
  [
    { name: 'name', label: 'Full name', required: true, placeholder: 'Jane Smith', autocomplete: 'name' },
    { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'you@example.com', autocomplete: 'email' },
  ],
  [
    { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', required: true, placeholder: '+351 000 000 000', autocomplete: 'tel', inputmode: 'tel' },
    { name: 'postcode', label: 'Property postcode', required: true, placeholder: '8600-324', autocomplete: 'postal-code' },
  ],
];

const PROPERTY_TYPE = {
  name: 'property-type',
  label: 'Property type',
  type: 'select',
  required: true,
  placeholder: 'Select property type',
  options: ['Apartment', 'Townhouse', 'Detached villa', 'Semi-detached house', 'Rural property / quinta', 'Other'],
};

const REBUILD = {
  name: 'rebuild-value',
  label: 'Approximate rebuild value (€)',
  placeholder: 'An estimate is fine',
  inputmode: 'numeric',
};

const YEAR = {
  name: 'construction-year',
  label: 'Year built (approx.)',
  placeholder: 'e.g. 2004',
  inputmode: 'numeric',
};

const CURRENT_POLICY = {
  name: 'current-policy',
  label: 'Current insurance',
  type: 'select',
  placeholder: 'Select one',
  options: [
    'No policy yet',
    'Policy arranged through my bank',
    'Policy with a Portuguese insurer',
    'Policy with a foreign insurer',
    'Not sure what I have',
  ],
};

const message = (placeholder) => ({
  name: 'message',
  label: 'Anything we should know?',
  type: 'textarea',
  placeholder,
});

/** Home-side pages post to the same Netlify form as the pillar. */
const HOME_FORM = 'home-insurance-quote';
/** Landlord-side pages post to their own form so the enquiries arrive tagged. */
const LANDLORD_FORM = 'landlord-insurance-quote';

const SMALL_TRUST = [
  '<strong>We compare the market.</strong> Zurich, Allianz, Fidelidade, Generali Tranquilidade, Liberty, Hiscox and others &mdash; not one insurer&rsquo;s panel.',
  '<strong>Everything in English.</strong> The quote, the terms, the renewal and the claim. Policies are issued in Portuguese by law; you will know what they say first.',
  '<strong>We read the exclusions to you.</strong> Before you sign, not after a claim is declined.',
  '<strong>A written comparison in 24 hours.</strong> No cost, no obligation, no call centre.',
];

const DISCLAIM_NOTE =
  'Everything on this page is general guidance. Sub-limits, excesses, occupancy conditions and exclusions differ between insurers and between policies, and the wording of your own policy is what decides a claim.';

// --- pages -------------------------------------------------------------------

const secondHome = {
  slug: 'second-home-insurance-portugal',
  crumb: 'Second home',
  title: 'Second Home Insurance in Portugal | Quote for Expat Owners',
  description:
    'Second home insurance in Portugal for owners who live abroad. Empty months, occupancy conditions, theft, storm and water damage explained in English. Free quote in 24h.',
  keywords:
    'second home insurance portugal, second home insurance expats, holiday home insurance portugal, second property insurance portugal, insurance for a holiday home in portugal',
  eyebrow: 'Home &amp; Property &middot; Second homes',
  h1: 'Second home insurance in Portugal, for owners who live somewhere else',
  heroSub:
    'A house you use for eight weeks a year is not the same risk as the house you sleep in every night, and most insurers price and word it differently. We arrange cover that matches how your Portuguese property is actually used &mdash; and we tell you which conditions attach to the empty months.',
  heroCta: 'Get a second home insurance quote',
  topBarCta: 'Get a second home quote',
  stickyCta: 'Get a second home quote',
  whatsapp: 'Hello, I would like a quote for my second home in Portugal.',
  trustbar: SMALL_TRUST,
  chatTopics: ['casa_segunda_habitacao', 'casa_geral', 'casa_custo_algarve', 'erros_comuns', 'casa_valores_desatualizados'],
  service: {
    name: 'Second home insurance in Portugal',
    type: 'Second home and holiday home insurance broking',
    description:
      'Independent broking of multi-risk home insurance for second homes and holiday homes in Portugal owned by residents and non-residents, arranged and serviced in English.',
  },
  sections: [
    {
      h2: 'Who this is for',
      blocks: [
        {
          kind: 'p',
          html:
            'You own a property in Portugal that you do not live in all year. It might be the apartment in Cascais you use in spring and autumn, the villa in the Algarve the family gathers at in August, or the house you bought for a retirement that has not started yet. For the rest of the year it sits closed, watched by a neighbour, a key-holder or nobody at all.',
        },
        {
          kind: 'p',
          html:
            'That pattern changes what an insurer wants to know and, often, what it is willing to cover. It is also the single most common reason a Portuguese home claim runs into difficulty: the policy was bought as if the house were permanently occupied, because nobody asked the question.',
        },
        {
          kind: 'grid',
          items: [
            { title: 'Non-resident owners', body: 'You live in the UK, Ireland, the Netherlands, Germany, France, Scandinavia or the US and fly in a few times a year.' },
            { title: 'Residents with two homes', body: 'You live in Portugal but also own a coastal or country property used seasonally.' },
            { title: 'Future retirees', body: 'You bought early. The house waits, half-furnished, until you move over properly.' },
            { title: 'Family properties', body: 'Inherited or co-owned houses used by several branches of a family at different times of the year.' },
          ],
        },
      ],
    },
    {
      h2: 'Why a second home is underwritten differently',
      blocks: [
        {
          kind: 'p',
          html:
            'Nothing about the building changes when you fly home. What changes is how long a problem goes unnoticed. A washing machine hose that fails on a Tuesday in an occupied house is a mopped floor. The same failure in a house nobody enters for six weeks is a rebuilt kitchen, a ruined ceiling below and, in an apartment block, a claim from the neighbour underneath.',
        },
        {
          kind: 'covers',
          items: [
            { title: 'Occupancy conditions.', body: ' Most Portuguese multi-risk policies contain a clause about properties left unoccupied. Insurers set their own thresholds and their own requirements &mdash; there is no single national rule and no universal number of days. What matters is what <em>your</em> policy says, and whether the pattern you have described to the insurer matches how the house is really used.' },
            { title: 'Escape of water.', body: ' The cover most likely to be restricted or excluded during long empty periods, and the peril that causes the most expensive second home claims in Portugal.' },
            { title: 'Theft and forced entry.', body: ' Insurers often ask about doors, shutters, window locks, alarms and safes. Some make cover conditional on specific security being in place and in use.' },
            { title: 'Storm and coastal exposure.', body: ' Winter storms hit an empty house exactly as hard as a full one, and the damage is discovered later.' },
            { title: 'Declared use.', body: ' A property described as a permanent residence but used for eight weeks a year has been declared incorrectly. That is the kind of mismatch that surfaces at claim time.' },
          ],
        },
        { kind: 'note', html: DISCLAIM_NOTE },
      ],
    },
    {
      h2: 'What can usually be arranged',
      blocks: [
        {
          kind: 'p',
          html:
            'A Portuguese multi-risk home policy (<em>seguro multirriscos habita&ccedil;&atilde;o</em>) is built from a set of covers. Which of them are included, and at what limits, is a decision made policy by policy. These are the ones that matter most for a house that stands empty:',
        },
        {
          kind: 'covers',
          items: [
            { title: 'Buildings.', body: ' Insured on a rebuild basis &mdash; the cost of rebuilding the structure, not what you paid or what an agent would list it for.' },
            { title: 'Contents.', body: ' Furniture, appliances, and the things left behind between visits. Jewellery, art, watches and similar items are usually subject to their own sub-limits and may need to be listed.' },
            { title: 'Water damage.', body: ' Burst pipes, failed appliance hoses, leaks from an upstairs neighbour &mdash; and, importantly, the damage you cause to somebody else&rsquo;s apartment.' },
            { title: 'Storm, fire and impact.', body: ' The classic property perils, plus fallen trees, aerials and satellite dishes where included.' },
            { title: 'Theft.', body: ' Frequently written with security conditions attached, and often with a lower limit for cash and valuables.' },
            { title: 'Seismic cover.', body: ' Earthquake protection is a distinct cover in Portugal and is not always present by default. <a href="/en/earthquake-insurance-portugal/">Check whether yours includes it</a>.' },
            { title: 'Liability.', body: ' Claims from third parties &mdash; a neighbour, a visitor, a contractor &mdash; arising from the property.' },
            { title: 'Pools, gates and outbuildings.', body: ' Often need to be declared separately rather than being assumed to fall under the main building.' },
          ],
        },
      ],
    },
    {
      h2: 'What usually needs to be declared or added',
      blocks: [
        {
          kind: 'p',
          html:
            'The gap between a policy that pays and one that argues is almost always in this list. None of it is exotic; it is simply the information insurers use to decide whether to cover a house they know will be empty.',
        },
        {
          kind: 'grid',
          items: [
            { title: 'The real occupancy pattern', body: 'How many weeks a year, and in which months. Say it plainly on the proposal rather than rounding it in your favour.' },
            { title: 'Who holds a key', body: 'A neighbour, a management company, a cleaner, a key-holding service. Some insurers ask for periodic inspection of empty properties.' },
            { title: 'Water and power arrangements', body: 'Whether the stopcock is closed and the boiler drained between visits. It is often the cheapest risk reduction available.' },
            { title: 'Security in place', body: 'Alarm, monitoring, shutters, grilles, safe. Declare what exists, and be sure it is actually switched on when you leave.' },
            { title: 'High-value contents', body: 'Art, jewellery, watches, wine, bicycles, instruments. These usually sit outside the standard contents limit.' },
            { title: 'Any letting at all', body: 'Even a few weeks to friends-of-friends for money changes the risk. If the house earns income, say so &mdash; the cover is different.' },
          ],
        },
        {
          kind: 'note',
          html:
            'If your property is empty for long, continuous stretches rather than seasonally, read <a href="/en/unoccupied-home-insurance-portugal/">unoccupied property insurance</a> instead &mdash; the underwriting question there is a different one.',
        },
      ],
    },
    {
      h2: 'Second home, holiday let or long-term rental?',
      blocks: [
        {
          kind: 'p',
          html:
            'These three are often treated as one thing by owners and as three quite separate risks by insurers. The distinction decides which policy you need, and getting it wrong is the most expensive mistake in this whole cluster.',
        },
        {
          kind: 'compare',
          columns: [
            {
              title: 'Second home, private use',
              points: [
                'Used by you, your family and unpaid guests.',
                'No income from the property.',
                'Standard multi-risk home cover, with the occupancy pattern declared.',
                'Empty-period conditions are the thing to check.',
              ],
            },
            {
              title: 'Holiday rental / Alojamento Local',
              points: [
                'Paying guests, short stays, turnover through the year.',
                'Registered as AL, with the obligations that come with it.',
                'A private home policy is frequently not the right contract for this.',
                'See <a href="/en/blog/alojamento-local-insurance-requirements/">AL insurance requirements</a>.',
              ],
            },
            {
              title: 'Long-term rental',
              points: [
                'A tenant lives there under a residential lease.',
                'Your interest is the building, your liability as owner and loss of rent where available.',
                'The tenant&rsquo;s own belongings are not yours to insure.',
                'See <a href="/en/landlord-insurance-portugal/">landlord insurance</a>.',
              ],
            },
          ],
        },
        {
          kind: 'note',
          html:
            'Renting out a second home on a private home policy without telling the insurer is a common and avoidable problem. We wrote about it here: <a href="/en/blog/second-home-rent-out-holiday-let-standard-home-cover/">what happens when a second home starts earning</a>.',
        },
      ],
    },
    {
      h2: 'Practical points if you live abroad',
      blocks: [
        {
          kind: 'grid',
          items: [
            { title: 'You will need a NIF', body: 'A Portuguese tax number is needed to hold a policy. If you do not have one yet, <a href="/en/blog/how-to-get-nif-portugal-non-resident/">this explains how non-residents get one</a>.' },
            { title: 'Bank-sold policies', body: 'If you bought with a Portuguese mortgage you were probably sold the bank&rsquo;s policy. You are generally free to insure elsewhere &mdash; <a href="/en/blog/change-bank-home-insurance-portugal/">here is how that works</a>.' },
            { title: 'Documents', body: 'Caderneta predial, certid&atilde;o permanente and the deed help us quote accurately. <a href="/en/blog/documents-to-insure-property-portugal/">The full list is here</a>.' },
            { title: 'Claims from another country', body: 'You will not be there when the ceiling comes down. Agree in advance who opens the door for a loss adjuster.' },
            { title: 'Fiscal representation', body: 'Non-resident owners often need a fiscal representative for tax correspondence. We can <a href="/en/fiscal-representation-portugal/">arrange that too</a>.' },
            { title: 'Renewals in Portuguese', body: 'Renewal notices and endorsements arrive in Portuguese. We read them, summarise them in English and tell you if something material changed.' },
          ],
        },
      ],
    },
    {
      h2: 'What we need to prepare your quote',
      blocks: [
        {
          kind: 'steps',
          items: [
            { title: 'The property.', body: 'Address or postcode, type, approximate size, year built, and whether there is a pool, annexe or outbuilding.' },
            { title: 'The rebuild value.', body: 'An estimate is enough to start. If yours has not been reviewed for years, it is probably low &mdash; <a href="/en/blog/outdated-insured-values/">this explains why that matters</a>.' },
            { title: 'How it is used.', body: 'Roughly how many weeks a year, in which months, and whether anyone else stays there.' },
            { title: 'Security and key-holding.', body: 'Alarm, shutters, safe, and who can access the property when you are away.' },
            { title: 'What you have now.', body: 'Your current policy, if any. We will compare against it rather than around it.' },
          ],
        },
        {
          kind: 'p',
          html:
            'You get a written comparison within 24 hours: what each insurer will and will not do, what the empty-period conditions are, and where the excesses sit. If the policy you already hold is the better deal, we will tell you that.',
        },
      ],
    },
  ],
  form: {
    heading: 'Get your second home insurance quote',
    sub: 'Tell us how the property is really used. That single answer changes more about the quote than anything else on this form.',
    name: HOME_FORM,
    gaField: 'property-use',
    submit: 'Get my quote',
    fields: [
      ...CONTACT_ROWS,
      [PROPERTY_TYPE, {
        name: 'property-use',
        label: 'How is it used?',
        type: 'select',
        required: true,
        placeholder: 'Select use',
        options: [
          'Second home &ndash; used a few weeks a year',
          'Second home &ndash; used several months a year',
          'Second home, currently empty most of the year',
          'Second home I sometimes lend to friends and family',
          'Second home I am thinking of renting out',
        ],
      }],
      [REBUILD, YEAR],
      CURRENT_POLICY,
      message('How many weeks a year is it used, in which months, and who holds a key while you are away?'),
    ],
  },
  faq: [
    {
      q: 'Is second home insurance different from normal home insurance in Portugal?',
      a: 'It is usually the same type of contract &mdash; a multi-risk home policy &mdash; underwritten on different information. The insurer prices and words it around the fact that the property is empty for part of the year, which typically means specific conditions attached to unoccupied periods.',
    },
    {
      q: 'After how many days does my house count as unoccupied?',
      a: 'There is no single national rule. Each insurer defines unoccupancy in its own policy wording, and the thresholds and requirements differ. The only reliable answer is the one in your own policy, which we will read and explain to you before you sign.',
    },
    {
      q: 'Can I insure a Portuguese second home if I do not live in Portugal?',
      a: 'Yes. Non-resident owners insure Portuguese property routinely. You will need a Portuguese tax number (NIF), and we handle the rest of the process in English from wherever you are.',
    },
    {
      q: 'Do I need to tell the insurer that the house is empty in winter?',
      a: 'Yes. Occupancy is material information. Describing a seasonally used property as a permanent residence is the kind of inaccuracy that gets discovered during a claim, which is the worst possible moment to discover it.',
    },
    {
      q: 'Is earthquake cover included?',
      a: 'Not automatically. Seismic cover is a separate item in Portuguese policies and some are written without it, particularly older or bank-arranged contracts. We check it explicitly on every quote and flag it if it is missing.',
    },
    {
      q: 'What if I let the property out for a few weeks a year?',
      a: 'Then it is no longer purely a private second home, and a standard home policy may not respond. Tell us and we will look at the right structure &mdash; holiday letting and long-term letting are underwritten differently again.',
    },
    {
      q: 'Should I turn the water off when I leave?',
      a: 'It is one of the most effective things you can do. Escape of water causes a large share of second home claims, and some insurers make shutting off the supply during empty periods an explicit condition of cover.',
    },
    {
      q: 'How long does a quote take?',
      a: 'A written comparison within 24 hours in almost every case. Larger or unusual properties occasionally need a survey or a referral to an underwriter, and we will tell you at the outset if yours is one of them.',
    },
  ],
  related: [
    {
      h2: 'Related cover',
      blocks: [
        {
          kind: 'cluster',
          items: [
            { href: '/en/home-insurance-quote/', title: 'Home insurance in Portugal', blurb: 'The main page for permanent and holiday homes, with the full multi-risk explanation.' },
            { href: '/en/unoccupied-home-insurance-portugal/', title: 'Unoccupied property insurance', blurb: 'For houses standing empty for long, continuous periods rather than seasonally.' },
            { href: '/en/landlord-insurance-portugal/', title: 'Landlord insurance', blurb: 'If the property is let, or you are considering letting it.' },
            { href: '/en/apartment-insurance-portugal/', title: 'Apartment insurance', blurb: 'Where the condominium policy stops and yours has to start.' },
          ],
        },
      ],
    },
    {
      h2: 'Read before you buy',
      blocks: [
        {
          kind: 'guides',
          items: [
            { href: '/en/blog/second-homes-empty-months-unoccupancy-clause-voids-cover/', text: 'The unoccupancy clause that quietly voids cover', note: 'what the empty months actually do to a policy' },
            { href: '/en/blog/holiday-home-insurance-portugal/', text: 'Holiday home insurance in Portugal' },
            { href: '/en/blog/second-home-rent-out-holiday-let-standard-home-cover/', text: 'Renting out a second home on a standard home policy' },
            { href: '/en/blog/water-damage-claim-portugal/', text: 'How a water damage claim actually runs in Portugal' },
            { href: '/en/blog/outdated-insured-values/', text: 'Insured values that stopped being true years ago' },
            { href: '/en/blog/home-insurance-cost-algarve-price-drivers/', text: 'What actually drives home insurance prices in the Algarve' },
          ],
        },
      ],
    },
  ],
};

const unoccupied = {
  slug: 'unoccupied-home-insurance-portugal',
  crumb: 'Unoccupied property',
  title: 'Unoccupied Property Insurance Portugal | Empty House Cover',
  description:
    'Insurance for empty and unoccupied property in Portugal: houses between tenants, under renovation, inherited or waiting for an owner abroad. Occupancy conditions explained. Free quote.',
  keywords:
    'unoccupied home insurance portugal, vacant property insurance portugal, empty house insurance portugal, insurance for unoccupied property portugal, unoccupied property cover portugal',
  eyebrow: 'Home &amp; Property &middot; Empty properties',
  h1: 'Unoccupied property insurance in Portugal',
  heroSub:
    'An empty house is not an unloved house. It is a renovation, an inheritance, a gap between tenants, or a purchase waiting for its owner to retire. Insurers treat all of them as a different risk from an occupied home &mdash; and most standard policies say so somewhere in the wording.',
  heroCta: 'Get a quote for an empty property',
  topBarCta: 'Insure an empty property',
  stickyCta: 'Insure an empty property',
  whatsapp: 'Hello, I need insurance for a property in Portugal that is currently empty.',
  trustbar: SMALL_TRUST,
  chatTopics: ['casa_segunda_habitacao', 'casa_geral', 'erros_comuns', 'casa_legalizacao', 'casa_valores_desatualizados'],
  service: {
    name: 'Unoccupied property insurance in Portugal',
    type: 'Vacant and unoccupied property insurance broking',
    description:
      'Independent broking of insurance for unoccupied, vacant and empty residential property in Portugal, including properties under renovation, between tenants or held by owners living abroad.',
  },
  sections: [
    {
      h2: 'Who this is for',
      blocks: [
        {
          kind: 'p',
          html:
            'Properties end up empty for ordinary reasons. Someone dies and the estate takes eighteen months to settle. A tenant leaves in November and the next one signs in March. A renovation runs long. An owner in Dublin or D&uuml;sseldorf buys the house they will retire to in four years&rsquo; time. In every one of those cases the building still needs insuring, and in every one of them the standard assumption behind a home policy &mdash; that somebody is living there &mdash; has stopped being true.',
        },
        {
          kind: 'grid',
          items: [
            { title: 'Between tenants', body: 'A rental property with a vacancy running longer than the usual few weeks.' },
            { title: 'Under renovation', body: 'Works in progress, contractors on site, the house uninhabitable in the meantime.' },
            { title: 'Inherited property', body: 'An estate not yet settled, heirs abroad, nobody with the time to be there.' },
            { title: 'Bought but not moved into', body: 'A purchase made years before the move, sitting empty and largely unfurnished.' },
            { title: 'For sale', body: 'A property on the market that has already been emptied of its owner and its furniture.' },
            { title: 'Owner living abroad', body: 'A house visited so rarely that the empty state is the normal state.' },
          ],
        },
      ],
    },
    {
      h2: 'Why insurers treat empty property differently',
      blocks: [
        {
          kind: 'p',
          html:
            'The risks are not exotic. They are the same risks any house faces, with the person who would have noticed them removed. A dripping joint becomes a saturated floor. A loose tile becomes a wet ceiling over a winter. A break-in in an occupied street is interrupted; in an empty house it is thorough.',
        },
        {
          kind: 'covers',
          items: [
            { title: 'Escape of water.', body: ' Consistently the largest cause of loss in empty properties, and the cover most likely to be limited or excluded while a property is unoccupied.' },
            { title: 'Theft and vandalism.', body: ' Copper pipe, boilers, air-conditioning units and solar equipment are stolen from empty houses. Squatting and casual damage are less common but not unknown.' },
            { title: 'Undetected deterioration.', body: ' Damp, mould and rot are usually excluded as gradual causes in any case, but an empty house is where they get the time to develop.' },
            { title: 'Storm damage found late.', body: ' Roof damage in January, discovered in April, with four months of rain in between.' },
            { title: 'Liability.', body: ' The building still exists in relation to neighbours and the street. A falling tile or a leak into the flat below does not wait for occupancy.' },
          ],
        },
        {
          kind: 'note',
          html:
            '<strong>There is no universal number of days.</strong> Portugal does not set a national threshold at which a home becomes &ldquo;unoccupied&rdquo;. Each insurer defines it in its own wording, with its own period and its own conditions, and those definitions genuinely differ from one contract to another. Anybody who tells you the answer is 30, 60 or 90 days is quoting one insurer and calling it a rule. We read your actual wording and tell you what yours says.',
        },
      ],
    },
    {
      h2: 'What can usually be arranged, and what usually cannot',
      blocks: [
        {
          kind: 'p',
          html:
            'Cover for an empty property is generally narrower than cover for an occupied one, and the narrowing is deliberate rather than punitive. What is available depends on the insurer, the reason the property is empty and how long it will stay that way.',
        },
        {
          kind: 'compare',
          columns: [
            {
              title: 'Often available',
              points: [
                'Fire, lightning and explosion.',
                'Storm and impact damage to the building.',
                'Liability arising from the property.',
                'Theft, frequently with security conditions attached.',
                'Seismic cover, where the policy includes it.',
              ],
            },
            {
              title: 'Often restricted',
              points: [
                'Escape of water during the unoccupied period.',
                'Malicious damage and vandalism.',
                'Contents, particularly anything portable or valuable.',
                'Glass breakage.',
                'Higher excesses than an occupied property would carry.',
              ],
            },
            {
              title: 'Usually conditional',
              points: [
                'Water supply shut off and systems drained.',
                'Periodic inspection by a named person, and a record of it.',
                'Alarm set and maintained where one exists.',
                'The property kept secure, tidy and visibly attended.',
                'The insurer told before the empty period begins, not after.',
              ],
            },
          ],
        },
        { kind: 'note', html: DISCLAIM_NOTE },
      ],
    },
    {
      h2: 'If the property is being renovated',
      blocks: [
        {
          kind: 'p',
          html:
            'Renovation changes the question again. A home policy is written for a finished, habitable building; a building site with contractors, scaffolding and an open roof is not that. Depending on the scale of the works, the right answer may be a home policy with the works declared and endorsed, or it may be a different contract altogether alongside the contractor&rsquo;s own insurance.',
        },
        {
          kind: 'covers',
          items: [
            { title: 'Tell the insurer before works start.', body: ' Not when the claim happens. Structural work carried out without notice is a familiar reason for a declined claim.' },
            { title: 'Check what the builder carries.', body: ' The contractor&rsquo;s liability and, on larger projects, their own construction cover. Ask for the certificate rather than the reassurance.' },
            { title: 'Structural works have their own regime.', body: ' On substantial building projects Portuguese rules can bring other insurances into play &mdash; <a href="/en/blog/building-home-portugal-promoter-insurance-seguro-decenal/">we explain that here</a>.' },
            { title: 'Listed and heritage buildings.', body: ' Reinstatement obligations can change the sum insured materially. See <a href="/en/blog/renovating-listed-heritage-property-portugal/">renovating a listed property</a>.' },
          ],
        },
      ],
    },
    {
      h2: 'Practical steps that keep cover intact',
      blocks: [
        {
          kind: 'grid',
          items: [
            { title: 'Turn the water off', body: 'At the mains, and drain down where the property will be empty over winter. It removes the single biggest cause of loss.' },
            { title: 'Arrange a key-holder', body: 'A named person who can enter, inspect and let a loss adjuster in. Many insurers ask who this is.' },
            { title: 'Keep a record of inspections', body: 'A dated note or a photo each visit. If cover depends on inspection, evidence of it is what settles the argument.' },
            { title: 'Do not let it look empty', body: 'Post piling up, an overgrown garden and permanently closed shutters advertise the fact.' },
            { title: 'Tell us when it changes', body: 'When a tenant moves in, works finish, or the estate settles, the risk changes and so should the policy.' },
            { title: 'Keep the alarm working', body: 'A declared alarm that has been unplugged for a year is worse than no alarm at all.' },
          ],
        },
      ],
    },
    {
      h2: 'What we need to prepare your quote',
      blocks: [
        {
          kind: 'steps',
          items: [
            { title: 'Why it is empty.', body: 'Between tenants, renovation, inheritance, waiting for a move &mdash; insurers respond differently to each.' },
            { title: 'How long, realistically.', body: 'An honest estimate is worth more than an optimistic one.' },
            { title: 'The property itself.', body: 'Address or postcode, type, size, year built, condition, and whether it is furnished.' },
            { title: 'Security and access.', body: 'Locks, shutters, alarm, and who holds a key locally.' },
            { title: 'Utilities.', body: 'Whether water and power are on, and whether the system has been drained.' },
          ],
        },
        {
          kind: 'p',
          html:
            'We come back within 24 hours with what is available, in writing, including the conditions attached to the empty period. Where an insurer will not cover a property in its current state we say so plainly rather than quoting something that would not respond.',
        },
      ],
    },
  ],
  form: {
    heading: 'Get a quote for an empty property',
    sub: 'The reason a property is empty matters as much as the fact that it is. Tell us which situation you are in.',
    name: HOME_FORM,
    gaField: 'property-use',
    submit: 'Get my quote',
    fields: [
      ...CONTACT_ROWS,
      [PROPERTY_TYPE, {
        name: 'property-use',
        label: 'Why is it empty?',
        type: 'select',
        required: true,
        placeholder: 'Select the situation',
        options: [
          'Between tenants',
          'Undergoing renovation',
          'Inherited / estate not settled',
          'Bought but not yet lived in',
          'On the market for sale',
          'Owner lives abroad, rarely visited',
        ],
      }],
      [{
        name: 'empty-period',
        label: 'Expected empty period',
        type: 'select',
        required: true,
        placeholder: 'Select a period',
        options: ['Under 3 months', '3 to 6 months', '6 to 12 months', 'More than a year', 'Indefinite / unknown'],
      }, REBUILD],
      [YEAR, CURRENT_POLICY],
      message('Is the water shut off? Is anyone inspecting the property, and how often? Are works in progress?'),
    ],
  },
  faq: [
    {
      q: 'How long can a property be empty before it counts as unoccupied?',
      a: 'There is no national rule in Portugal. Each insurer sets its own definition and its own conditions in the policy wording, and they differ meaningfully between contracts. The only answer that protects you is the one written in your own policy, which we read and explain before you sign.',
    },
    {
      q: 'Will my existing home insurance still cover an empty house?',
      a: 'It may, in a reduced form, and it may not. Most Portuguese multi-risk policies contain a clause dealing with unoccupied periods, and the usual effect is that some covers &mdash; escape of water in particular &mdash; become restricted or fall away. Send us the policy and we will tell you exactly where yours stands.',
    },
    {
      q: 'Do I have to tell the insurer the property is empty?',
      a: 'Yes. Occupancy is material to the risk. An insurer that finds out at claim stage that a property had been empty for a year without notice is entitled to take that into account, and the outcome is rarely in the owner’s favour.',
    },
    {
      q: 'Can I insure a property that is being renovated?',
      a: 'Usually, but the works have to be declared and the right structure depends on their scale. Cosmetic work is often handled by endorsement; substantial structural work may need a different contract alongside the builder’s own insurance.',
    },
    {
      q: 'What about a property I have inherited?',
      a: 'Inherited property can be insured while the estate is being settled. We will need to know who the legal owners are, or who is acting for the estate, and it helps to sort the cover early rather than after the first winter of nobody checking.',
    },
    {
      q: 'Is theft covered in an empty house?',
      a: 'Often, but usually with conditions about locks, shutters and alarms, and sometimes with a lower limit than an occupied property would carry. Insurers vary considerably here, which is precisely why comparing wordings rather than prices is worth the effort.',
    },
    {
      q: 'Does turning off the water really make a difference?',
      a: 'A large one. Escape of water is the most common and most expensive loss in empty properties, and some insurers make shutting off the supply during unoccupied periods an explicit condition of cover rather than a suggestion.',
    },
    {
      q: 'What happens when the property is occupied again?',
      a: 'Tell us and we adjust the policy. A property that returns to full occupancy usually goes back onto ordinary home terms, and there is no reason to keep paying for a restricted contract once the restriction no longer applies.',
    },
  ],
  related: [
    {
      h2: 'Related cover',
      blocks: [
        {
          kind: 'cluster',
          items: [
            { href: '/en/home-insurance-quote/', title: 'Home insurance in Portugal', blurb: 'The main page for occupied homes, with the full multi-risk explanation.' },
            { href: '/en/second-home-insurance-portugal/', title: 'Second home insurance', blurb: 'For properties empty seasonally rather than continuously.' },
            { href: '/en/landlord-insurance-portugal/', title: 'Landlord insurance', blurb: 'If the property is let, or will be once the vacancy ends.' },
            { href: '/en/rental-property-insurance-portugal/', title: 'Rental property insurance', blurb: 'Long-term letting, including the gaps between tenants.' },
          ],
        },
      ],
    },
    {
      h2: 'Read before you buy',
      blocks: [
        {
          kind: 'guides',
          items: [
            { href: '/en/blog/second-homes-empty-months-unoccupancy-clause-voids-cover/', text: 'The unoccupancy clause that quietly voids cover' },
            { href: '/en/blog/water-damage-claim-portugal/', text: 'How a water damage claim actually runs in Portugal' },
            { href: '/en/blog/documents-to-insure-property-portugal/', text: 'The documents you need to insure a Portuguese property' },
            { href: '/en/blog/home-insurance-legalization/', text: 'When a property is not quite legal on paper' },
            { href: '/en/blog/safes-alarms-underwriting-requirements-portugal/', text: 'Safes, alarms and what underwriters actually require' },
            { href: '/en/blog/renovating-listed-heritage-property-portugal/', text: 'Renovating a listed or heritage property' },
          ],
        },
      ],
    },
  ],
};

const apartment = {
  slug: 'apartment-insurance-portugal',
  crumb: 'Apartment',
  title: 'Apartment Insurance in Portugal | What Owners Actually Need',
  description:
    'Apartment insurance in Portugal for expat owners. Where the condominium policy stops, what you must insure yourself, and who pays when water reaches the flat below. Free quote in 24h.',
  keywords:
    'apartment insurance portugal, flat insurance portugal, apartment insurance for expats, apartment home insurance portugal, condominium apartment insurance portugal',
  eyebrow: 'Home &amp; Property &middot; Apartments',
  h1: 'I live in an apartment in Portugal. What insurance do I actually need?',
  heroSub:
    'The condominium has a policy. You have a policy. Almost nobody can say where one ends and the other begins &mdash; until water comes through a ceiling and two insurers start pointing at each other. This page draws the line, in English, before that happens.',
  heroCta: 'Get an apartment insurance quote',
  topBarCta: 'Get an apartment quote',
  stickyCta: 'Get an apartment quote',
  whatsapp: 'Hello, I would like a quote for my apartment in Portugal.',
  trustbar: SMALL_TRUST,
  chatTopics: ['casa_geral', 'condominio_obrigatorio', 'condominio_conteudos', 'condominio_capitais_desatualizados', 'erros_comuns', 'casa_valores_desatualizados'],
  service: {
    name: 'Apartment insurance in Portugal',
    type: 'Apartment and flat home insurance broking',
    description:
      'Independent broking of multi-risk home insurance for apartment owners in Portugal, covering the private fraction, contents and personal liability alongside the condominium policy, handled in English.',
  },
  sections: [
    {
      h2: 'The one distinction that matters',
      blocks: [
        {
          kind: 'p',
          html:
            'A Portuguese apartment building is divided into <em>partes comuns</em> &mdash; the common parts &mdash; and <em>fra&ccedil;&otilde;es aut&oacute;nomas</em>, the individual fractions people own. The condominium insures the first. You insure the second. Everything confusing about apartment insurance in Portugal comes from the fact that the boundary between them is not where most owners assume it is.',
        },
        {
          kind: 'compare',
          columns: [
            {
              title: 'The condominium policy',
              points: [
                'Structure, roof, facade, foundations.',
                'Stairwells, lifts, entrance halls, corridors.',
                'Common pipework, shared installations, communal areas.',
                'Arranged by the administrator and paid from the condominium budget.',
                'Frequently insured for a sum set years ago and never revised.',
              ],
            },
            {
              title: 'Your own policy',
              points: [
                'Everything inside your front door.',
                'Kitchens, bathrooms, fitted wardrobes, flooring, internal walls.',
                'Your furniture, appliances, electronics and valuables.',
                'Your personal and family liability.',
                'Damage your apartment causes to a neighbour&rsquo;s.',
              ],
            },
            {
              title: 'The grey areas',
              points: [
                'Windows, terraces and balconies &mdash; treated differently building to building.',
                'Pipework inside your walls versus the riser it joins.',
                'Improvements a previous owner made to the fraction.',
                'Parking spaces and storage rooms, which may be separate fractions.',
                'Settled by the condominium&rsquo;s constitutive title, not by assumption.',
              ],
            },
          ],
        },
        {
          kind: 'note',
          html:
            'If you also sit on the condominium&rsquo;s side of this &mdash; as an owner-administrator or on the committee &mdash; the building policy itself is covered on our <a href="/en/condominium-insurance-algarve/">condominium insurance page</a>.',
        },
      ],
    },
    {
      h2: 'What the condominium policy will not do for you',
      blocks: [
        {
          kind: 'p',
          html:
            'This is the point at which most apartment owners in Portugal discover they are underinsured, and it is almost always the same discovery.',
        },
        {
          kind: 'covers',
          items: [
            { title: 'It does not cover your contents.', body: ' Not your furniture, not your television, not your jewellery. A building policy insures a building. We wrote about the consequences: <a href="/en/blog/condominium-insurance-doesnt-cover-contents/">why the condominium policy does not cover your things</a>.' },
            { title: 'It does not cover your liability.', body: ' If your bathroom leaks into the apartment below, that is your claim, not the building&rsquo;s.' },
            { title: 'It may not cover your improvements.', body: ' A renovated kitchen, new flooring, air conditioning and fitted units are usually yours to insure.' },
            { title: 'Its sum insured may be old.', body: ' Buildings insured at values fixed a decade ago are common, and in a total loss every owner shares the shortfall proportionally.' },
            { title: 'It does not pay for alternative accommodation.', body: ' Where that cover exists, it typically sits in the owner&rsquo;s own policy.' },
          ],
        },
      ],
    },
    {
      h2: 'Water damage: the claim that involves everyone',
      blocks: [
        {
          kind: 'p',
          html:
            'Vertical living means shared plumbing and shared consequences. The overwhelming majority of apartment claims in Portugal involve water, and they are the claims most likely to turn into a dispute &mdash; because three parties are usually involved and each of them has a different insurer.',
        },
        {
          kind: 'grid',
          items: [
            { title: 'Your pipe, their ceiling', body: 'Damage you cause below is dealt with through your liability and water damage cover, not the condominium&rsquo;s.' },
            { title: 'Their pipe, your ceiling', body: 'You claim from your own policy or pursue the neighbour. Having your own cover is what stops you waiting on someone else&rsquo;s goodwill.' },
            { title: 'The common riser', body: 'A failure in shared pipework is the condominium&rsquo;s claim &mdash; if the building policy is in force and adequate.' },
            { title: 'Nobody knows whose pipe it was', body: 'The common case. It is settled by investigation, and it takes longer than anyone wants.' },
          ],
        },
        {
          kind: 'note',
          html:
            'How these claims run in practice, and what to photograph on day one: <a href="/en/blog/water-damage-claim-portugal/">the water damage claim, step by step</a>. If flooding rather than plumbing is your concern, see <a href="/en/flood-insurance-portugal/">flood insurance in Portugal</a>.',
        },
      ],
    },
    {
      h2: 'What an apartment policy usually includes',
      blocks: [
        {
          kind: 'covers',
          items: [
            { title: 'The private fraction.', body: ' Your part of the building, insured on a rebuild basis appropriate to an apartment rather than to a whole house.' },
            { title: 'Contents.', body: ' Furnishings and belongings, with separate sub-limits for jewellery, watches, art and cash.' },
            { title: 'Water damage.', body: ' Escape of water within your fraction, and the damage it causes elsewhere in the building.' },
            { title: 'Personal and family liability.', body: ' Third-party claims arising from your household. <a href="/en/blog/family-liability-cover-portugal/">More on how family liability works</a>.' },
            { title: 'Theft.', body: ' Often with conditions about locks and, on ground and first floors, about grilles or shutters.' },
            { title: 'Fire, storm and impact.', body: ' Including damage to your fraction from events affecting the building.' },
            { title: 'Seismic cover.', body: ' A distinct item, and not always present. In an apartment block it is worth confirming that both the building policy and yours include it &mdash; <a href="/en/earthquake-insurance-portugal/">see earthquake cover</a>.' },
            { title: 'Alternative accommodation.', body: ' Where included, the cost of somewhere to live while your apartment is repaired.' },
          ],
        },
        { kind: 'note', html: DISCLAIM_NOTE },
      ],
    },
    {
      h2: 'Practical points for international owners',
      blocks: [
        {
          kind: 'grid',
          items: [
            { title: 'Ask for the condominium policy', body: 'The administrator should provide the schedule. Read what it insures and for how much before deciding what you need on top.' },
            { title: 'Check the constitutive title', body: 'The <em>t&iacute;tulo constitutivo</em> defines what your fraction actually is, including terraces, storage and parking.' },
            { title: 'Mortgage policies are a floor, not a ceiling', body: 'A bank-arranged policy typically protects the bank&rsquo;s interest. <a href="/en/blog/change-bank-home-insurance-portugal/">You can usually insure elsewhere</a>.' },
            { title: 'High-value apartments', body: 'Lisbon and Cascais apartments frequently exceed standard contents limits. <a href="/en/blog/insuring-a-high-value-apartment-lisbon-cascais/">Here is what changes</a>.' },
            { title: 'Empty part of the year', body: 'A city apartment used seasonally raises occupancy questions &mdash; see <a href="/en/second-home-insurance-portugal/">second home insurance</a>.' },
            { title: 'Letting it out', body: 'Short-term or long-term letting is a different contract. Start at <a href="/en/landlord-insurance-portugal/">landlord insurance</a>.' },
          ],
        },
      ],
    },
    {
      h2: 'What we need to prepare your quote',
      blocks: [
        {
          kind: 'steps',
          items: [
            { title: 'The apartment.', body: 'Address or postcode, floor, approximate area, year built, and how many fractions are in the building.' },
            { title: 'What is yours.', body: 'Terrace, balcony, parking space, storage room &mdash; and whether they are part of your fraction.' },
            { title: 'Improvements.', body: 'Any renovation you or a previous owner made that a standard rebuild figure would not reflect.' },
            { title: 'Contents value.', body: 'A rough total, plus anything individually valuable enough to list.' },
            { title: 'The condominium policy.', body: 'If you can get the schedule from the administrator, we will read it and quote around it rather than over it.' },
          ],
        },
        {
          kind: 'p',
          html:
            'You get a written comparison within 24 hours, showing what each insurer covers inside your fraction, where the liability limits sit, and what is left to the building policy.',
        },
      ],
    },
  ],
  form: {
    heading: 'Get your apartment insurance quote',
    sub: 'Tell us about the apartment and, if you have it, what the condominium policy already covers. We will quote the gap rather than duplicate the building.',
    name: HOME_FORM,
    gaField: 'property-use',
    submit: 'Get my quote',
    fields: [
      ...CONTACT_ROWS,
      [{
        name: 'property-use',
        label: 'How is the apartment used?',
        type: 'select',
        required: true,
        placeholder: 'Select use',
        options: [
          'My permanent home',
          'Second home / used seasonally',
          'Empty most of the year',
          'Let on a long-term lease',
          'Short-term / holiday letting',
        ],
      }, {
        name: 'apartment-floor',
        label: 'Floor',
        placeholder: 'e.g. 3rd of 6',
      }],
      [REBUILD, YEAR],
      [{
        name: 'condominium-policy',
        label: 'Condominium policy',
        type: 'select',
        placeholder: 'Select one',
        options: ['I have a copy of the schedule', 'I know it exists but have not seen it', 'I do not know', 'There is no condominium'],
      }, CURRENT_POLICY],
      message('Terrace, balcony, parking, storage? Any renovation worth reflecting in the sum insured?'),
    ],
  },
  faq: [
    {
      q: 'Do I need my own insurance if the condominium already has a policy?',
      a: 'In practice, yes. The condominium policy insures the building and the common parts. It does not insure your contents, your improvements or your personal liability, and those are usually the losses an owner actually feels.',
    },
    {
      q: 'Who pays when my bathroom leaks into the apartment below?',
      a: 'Ordinarily this runs through your own policy, via water damage and liability cover, rather than through the condominium. It is one of the clearest reasons for an apartment owner to hold their own contract.',
    },
    {
      q: 'Is home insurance compulsory for an apartment in Portugal?',
      a: 'Fire cover for the building is a legal requirement for properties in a condominium regime in Portugal, and lenders require insurance for mortgaged property. Cover beyond that &mdash; contents, liability, water damage &mdash; is your choice, and it is where most of the practical protection lives.',
    },
    {
      q: 'Are my balcony and terrace covered by the building or by me?',
      a: 'It depends on the building&rsquo;s constitutive title, which defines the boundaries of each fraction. Some balconies are private, some are common parts with private use. We check the title rather than guessing.',
    },
    {
      q: 'What if the condominium is underinsured?',
      a: 'It is common: building sums insured are often set once and left. In a major loss the shortfall is shared proportionally between owners, which can mean a significant call on you personally. Raising it at the assembly is worth doing before anything happens.',
    },
    {
      q: 'Does an apartment policy include earthquake cover?',
      a: 'Not automatically. Seismic cover is a separate item in Portuguese policies. In an apartment it is worth confirming that the condominium policy and your own both include it, since a building can be seismically damaged as a whole.',
    },
    {
      q: 'Can I insure an apartment I do not live in permanently?',
      a: 'Yes, but the occupancy pattern must be declared, and unoccupied periods usually carry their own conditions. If the apartment is empty for much of the year, our second home and unoccupied property pages cover that specifically.',
    },
    {
      q: 'I bought with a Portuguese mortgage. Am I tied to the bank&rsquo;s policy?',
      a: 'Generally not. Your lender requires that the property is insured to an acceptable standard, not that the policy is theirs. Owners switch away from bank-arranged cover regularly and we handle the process for you.',
    },
  ],
  related: [
    {
      h2: 'Related cover',
      blocks: [
        {
          kind: 'cluster',
          items: [
            { href: '/en/home-insurance-quote/', title: 'Home insurance in Portugal', blurb: 'The main page, covering houses, villas and apartments alike.' },
            { href: '/en/condominium-insurance-algarve/', title: 'Condominium insurance', blurb: 'The building policy itself, for administrators and owner committees.' },
            { href: '/en/second-home-insurance-portugal/', title: 'Second home insurance', blurb: 'If the apartment is used seasonally rather than lived in.' },
            { href: '/en/landlord-insurance-portugal/', title: 'Landlord insurance', blurb: 'If you let the apartment to tenants or holiday guests.' },
          ],
        },
      ],
    },
    {
      h2: 'Read before you buy',
      blocks: [
        {
          kind: 'guides',
          items: [
            { href: '/en/blog/condominium-insurance-doesnt-cover-contents/', text: 'Why the condominium policy does not cover your contents' },
            { href: '/en/blog/insuring-a-high-value-apartment-lisbon-cascais/', text: 'Insuring a high-value apartment in Lisbon or Cascais' },
            { href: '/en/blog/water-damage-claim-portugal/', text: 'How a water damage claim actually runs in Portugal' },
            { href: '/en/blog/outdated-insured-values/', text: 'Insured values that stopped being true years ago' },
            { href: '/en/blog/family-liability-cover-portugal/', text: 'Family liability cover, and what it is really for' },
            { href: '/en/blog/home-insurance-multi-risk/', text: 'What a Portuguese multi-risk policy is made of' },
          ],
        },
      ],
    },
  ],
};

const flood = {
  slug: 'flood-insurance-portugal',
  crumb: 'Flood',
  title: 'Flood Insurance in Portugal | Storm &amp; Water Damage Cover',
  description:
    'Flood and water damage cover for property in Portugal. The difference between burst pipes, storm damage and external flooding, and why it decides whether a claim is paid. Free quote.',
  keywords:
    'flood insurance portugal, flood cover portugal, home flood insurance portugal, flood insurance for expats, storm damage insurance portugal, water damage cover portugal',
  eyebrow: 'Home &amp; Property &middot; Flood &amp; water',
  h1: 'Flood and water damage cover for property in Portugal',
  heroSub:
    'Water reaches a Portuguese house in at least five different ways, and your policy may treat each of them as a separate question. Knowing which category your loss falls into is what decides whether it is paid. We read the wording before you need it to be right.',
  heroCta: 'Check my flood and water cover',
  topBarCta: 'Check your flood cover',
  stickyCta: 'Check my flood cover',
  whatsapp: 'Hello, I would like to check the flood and water damage cover on my Portuguese property.',
  trustbar: SMALL_TRUST,
  chatTopics: ['casa_geral', 'erros_comuns', 'casa_custo_algarve', 'condominio_conteudos', 'casa_valores_desatualizados'],
  service: {
    name: 'Flood and water damage insurance in Portugal',
    type: 'Flood, storm and water damage insurance broking',
    description:
      'Independent broking and policy review for flood, storm and water damage cover on residential property in Portugal, including coastal and riverside exposure, handled in English.',
  },
  sections: [
    {
      h2: 'Five kinds of water, five different answers',
      blocks: [
        {
          kind: 'p',
          html:
            'Owners describe all of it as &ldquo;flooding&rdquo;. Policies do not. A Portuguese multi-risk policy typically separates water losses into distinct covers with their own limits, their own excesses and their own exclusions, and it is entirely possible to be well covered for one and not covered at all for another.',
        },
        {
          kind: 'covers',
          items: [
            { title: 'Escape of water from your own installations.', body: ' A burst pipe, a failed washing-machine hose, a leaking boiler. The most frequent domestic water claim by a wide margin.' },
            { title: 'Water from someone else&rsquo;s property.', body: ' The apartment above, the neighbouring house, the common riser. Usually handled through liability and water damage cover between the parties involved.' },
            { title: 'Storm and rain damage.', body: ' Wind-driven rain, a roof lifted in a gale, water entering through storm damage to the structure.' },
            { title: 'External flooding.', body: ' Water arriving from outside &mdash; a river, a stream, a saturated hillside, an overwhelmed drainage system, the sea. This is the cover most often written as a distinct item.' },
            { title: 'Groundwater and seepage.', body: ' Rising damp, water finding its way through walls or floors over time. Gradual causes are commonly excluded in any policy, anywhere.' },
          ],
        },
        {
          kind: 'note',
          html:
            '<strong>None of these is automatically covered.</strong> Whether a particular Portuguese policy responds to a particular water event depends on that insurer&rsquo;s wording, on which optional covers were bought, and on the property. There is no standard national policy, and no honest broker will tell you there is. What we can do is show you, in writing, exactly which of the five your policy answers.',
        },
      ],
    },
    {
      h2: 'Where the exposure actually is in Portugal',
      blocks: [
        {
          kind: 'p',
          html:
            'Portugal&rsquo;s rainfall arrives concentrated. Long dry summers leave ground that sheds water rather than absorbing it, and an autumn storm can put more rain on a hillside in six hours than the previous three months combined. The resulting problems are geographic and specific.',
        },
        {
          kind: 'grid',
          items: [
            { title: 'Algarve <em>ribeiras</em>', body: 'Dry watercourses that run through towns for most of the year unnoticed, and carry serious volume after heavy rain.' },
            { title: 'Coastal and clifftop property', body: 'Sea, wind and erosion in combination. See <a href="/en/blog/coastal-clifftop-properties-algarve-subsidence-erosion-flood/">coastal properties, subsidence and erosion</a>.' },
            { title: 'Sloping plots', body: 'Villas cut into hillsides where surface water arrives at the back of the house rather than the front.' },
            { title: 'Basements and garages', body: 'Below-ground levels are where flood water ends up, and often where the plant, the boiler and the stored belongings are.' },
            { title: 'Older urban buildings', body: 'Lisbon and Porto buildings with original drainage and shared downpipes serving several fractions.' },
            { title: 'Pools and irrigation', body: 'Failures in pool plant and irrigation systems that are neither storm nor plumbing, and may sit outside both covers.' },
          ],
        },
      ],
    },
    {
      h2: 'The questions worth asking about your current policy',
      blocks: [
        {
          kind: 'p',
          html:
            'Most owners discover the answers during a claim. It costs nothing to find them out now, and these are the five that decide the outcome.',
        },
        {
          kind: 'steps',
          items: [
            { title: 'Is external flooding actually included?', body: 'It is a distinct cover in many Portuguese policies. Its absence is not obvious from the front page of a schedule.' },
            { title: 'What is the excess for water?', body: 'Water excesses are frequently higher than the general excess, and sometimes calculated as a percentage.' },
            { title: 'Is there a sub-limit?', body: 'Some policies cap water damage well below the building sum insured.' },
            { title: 'Is the cause of damage covered as well as the damage?', body: 'Finding and repairing the failed pipe (<em>trace and access</em>) is not always included alongside repairing the ceiling.' },
            { title: 'What does it say about empty periods?', body: 'Water cover is the first thing that changes when a property is unoccupied. See <a href="/en/unoccupied-home-insurance-portugal/">unoccupied property insurance</a>.' },
          ],
        },
      ],
    },
    {
      h2: 'What tends to be excluded, whichever insurer you use',
      blocks: [
        {
          kind: 'covers',
          items: [
            { title: 'Gradual causes.', body: ' Damp, rot, mould and long-term seepage are wear rather than sudden events.' },
            { title: 'Poor maintenance.', body: ' Blocked gutters, unmaintained drainage, a roof that had needed attention for years.' },
            { title: 'Known defects.', body: ' A problem you were aware of before the policy started.' },
            { title: 'Some outdoor items.', body: ' Garden structures, retaining walls, landscaping and pool surrounds are often limited or excluded, and worth declaring specifically.' },
            { title: 'Property in a known flood zone.', body: ' Not universally excluded, but it can affect terms, excesses or availability. Insurers differ, which is precisely why comparing them is worthwhile.' },
          ],
        },
        { kind: 'note', html: DISCLAIM_NOTE },
      ],
    },
    {
      h2: 'What to do if water is already coming in',
      blocks: [
        {
          kind: 'steps',
          items: [
            { title: 'Make it safe.', body: 'Power off if water is near electrics. Nothing else matters more than this.' },
            { title: 'Stop the source if you can.', body: 'Mains stopcock for plumbing; there is less to be done about a river.' },
            { title: 'Photograph everything.', body: 'Before you clear up. Wide shots and close-ups, with the water still visible.' },
            { title: 'Tell us immediately.', body: 'Portuguese policies have notification deadlines and we would rather start the claim today than argue about the date later.' },
            { title: 'Keep receipts.', body: 'Emergency drying, pumping and temporary repairs are often recoverable.' },
            { title: 'Do not dispose of damaged items.', body: 'Not until the loss adjuster has seen them or agreed in writing that you can.' },
          ],
        },
        {
          kind: 'p',
          html:
            'We handle the claim with the insurer on your behalf, in Portuguese where necessary, and report back to you in English. That is the part of this that is genuinely hard to do from another country. There is more on the process here: <a href="/en/blog/insurance-claim-portugal-no-portuguese/">making a claim in Portugal without speaking Portuguese</a>.',
        },
      ],
    },
  ],
  form: {
    heading: 'Check your flood and water damage cover',
    sub: 'Send us the property details and, if you have one, your current policy. We will tell you in writing which kinds of water it actually answers.',
    name: HOME_FORM,
    gaField: 'property-use',
    submit: 'Check my cover',
    fields: [
      ...CONTACT_ROWS,
      [PROPERTY_TYPE, {
        name: 'property-use',
        label: 'How is it used?',
        type: 'select',
        required: true,
        placeholder: 'Select use',
        options: ['Permanent home', 'Second home', 'Empty most of the year', 'Long-term rental', 'Holiday rental / AL'],
      }],
      [{
        name: 'water-exposure',
        label: 'Anything nearby?',
        type: 'select',
        placeholder: 'Select if relevant',
        options: [
          'River, stream or ribeira',
          'Coastal or clifftop',
          'On a slope / below a hillside',
          'Has a basement or underground garage',
          'None of these',
          'Not sure',
        ],
      }, REBUILD],
      [YEAR, CURRENT_POLICY],
      message('Has the property flooded before, or had a water damage claim? What happened?'),
    ],
  },
  faq: [
    {
      q: 'Is flood damage covered by standard home insurance in Portugal?',
      a: 'Not as a given. Portuguese multi-risk policies treat different water events as different covers, and external flooding in particular is frequently a distinct item that may or may not have been included. The answer is in your schedule and wording, and we will read both.',
    },
    {
      q: 'What is the difference between water damage and flood cover?',
      a: 'Water damage usually refers to water escaping from installations inside or around the property &mdash; pipes, appliances, a neighbour&rsquo;s bathroom. Flood generally refers to water arriving from outside, such as a river, the sea or surface water. Many policies cover the first and treat the second separately.',
    },
    {
      q: 'Can I insure a property that has flooded before?',
      a: 'Often, yes, though previous flooding is material information you must disclose and it may affect terms, excess or availability. Insurers take different views of the same property, which is exactly the situation where comparing the market is worth the effort.',
    },
    {
      q: 'Does my policy cover the cost of finding the leak?',
      a: 'Sometimes. Cover for tracing and accessing the source of a leak &mdash; lifting floors, opening walls &mdash; is separate from repairing the visible damage, and it is not present in every policy. It is one of the specific items we check.',
    },
    {
      q: 'My neighbour&rsquo;s apartment flooded mine. Whose insurer pays?',
      a: 'Usually it runs through the neighbour&rsquo;s liability and water damage cover, though you may claim on your own policy and let the insurers settle between themselves. Having your own cover means you are not dependent on your neighbour&rsquo;s cooperation.',
    },
    {
      q: 'Are storm damage and flood the same thing?',
      a: 'No. Storm cover typically deals with wind and rain damaging the structure. Flood deals with water arriving from outside. A single autumn event can involve both, and a policy can respond to one and not the other.',
    },
    {
      q: 'Is my swimming pool or garden covered?',
      a: 'Frequently limited or excluded unless specifically declared. Pools, pool plant, retaining walls, landscaping and outbuildings usually need naming rather than assuming, and the same applies to the liability that comes with a pool.',
    },
    {
      q: 'What about an empty property?',
      a: 'Water cover is normally the first thing that changes when a property is unoccupied, and shutting off the supply is often an explicit condition. Our unoccupied property page deals with that situation specifically.',
    },
  ],
  related: [
    {
      h2: 'Related cover',
      blocks: [
        {
          kind: 'cluster',
          items: [
            { href: '/en/home-insurance-quote/', title: 'Home insurance in Portugal', blurb: 'The full multi-risk policy, of which water cover is one part.' },
            { href: '/en/earthquake-insurance-portugal/', title: 'Earthquake insurance', blurb: 'The other catastrophe cover that is not always included by default.' },
            { href: '/en/apartment-insurance-portugal/', title: 'Apartment insurance', blurb: 'Where water damage becomes a conversation between three insurers.' },
            { href: '/en/unoccupied-home-insurance-portugal/', title: 'Unoccupied property insurance', blurb: 'Empty houses and the water cover that changes when nobody is home.' },
          ],
        },
      ],
    },
    {
      h2: 'Read before you buy',
      blocks: [
        {
          kind: 'guides',
          items: [
            { href: '/en/blog/water-damage-claim-portugal/', text: 'How a water damage claim actually runs in Portugal' },
            { href: '/en/blog/coastal-clifftop-properties-algarve-subsidence-erosion-flood/', text: 'Coastal and clifftop property: subsidence, erosion and flood' },
            { href: '/en/blog/insurance-claim-portugal-no-portuguese/', text: 'Making a claim in Portugal without speaking Portuguese' },
            { href: '/en/blog/home-insurance-multi-risk/', text: 'What a Portuguese multi-risk policy is made of' },
            { href: '/en/blog/swimming-pools-jetties-private-access-liability-nobody-insures/', text: 'Pools, jetties and the liability nobody insures' },
            { href: '/en/blog/home-insurance-protect-property/', text: 'What home insurance in Portugal actually protects' },
          ],
        },
      ],
    },
  ],
};

const earthquake = {
  slug: 'earthquake-insurance-portugal',
  crumb: 'Earthquake',
  title: 'Earthquake Insurance in Portugal | Seismic Cover for Owners',
  description:
    'Earthquake insurance in Portugal explained in English. Why seismic cover is optional, how to check whether your policy has it, and what it costs to add. Free quote in 24 hours.',
  keywords:
    'earthquake insurance portugal, seismic cover portugal, earthquake cover home insurance portugal, earthquake insurance for expats, sismo seguro habitacao',
  eyebrow: 'Home &amp; Property &middot; Seismic cover',
  h1: 'Earthquake insurance in Portugal: check before you assume',
  heroSub:
    'Seismic cover is a separate, optional item in Portuguese home insurance. A large number of policies &mdash; particularly older ones and those arranged through a bank &mdash; simply do not have it, and the owner has no idea. It takes us ten minutes to tell you which kind you hold.',
  heroCta: 'Check my earthquake cover',
  topBarCta: 'Check your seismic cover',
  stickyCta: 'Check my earthquake cover',
  whatsapp: 'Hello, I would like to know whether my Portuguese policy includes earthquake cover.',
  trustbar: SMALL_TRUST,
  chatTopics: ['casa_geral', 'condominio_sismo', 'erros_comuns', 'casa_valores_desatualizados', 'casa_custo_algarve'],
  service: {
    name: 'Earthquake insurance in Portugal',
    type: 'Seismic and earthquake insurance broking',
    description:
      'Independent broking and policy review for earthquake and seismic cover on residential property in Portugal, including buildings, contents and condominium exposure, handled in English.',
  },
  sections: [
    {
      h2: 'Why this page exists',
      blocks: [
        {
          kind: 'p',
          html:
            'Portugal sits near the boundary between the African and Eurasian plates. The 1755 Lisbon earthquake is the event everyone knows; the 1969 offshore Gon&ccedil;alves Zarco earthquake, felt across the south of the country, is the one that reminds insurers the exposure is current rather than historical. Buildings in the Algarve and the Lisbon and Set&uacute;bal areas sit in the parts of the country where seismic hazard is treated most seriously.',
        },
        {
          kind: 'p',
          html:
            'The insurance point is narrower and more useful than the geology. In Portugal, earthquake cover (<em>cobertura de sismo</em>) is an optional extension to a multi-risk home policy, not a standard component of it. It can be added, it is usually a modest proportion of the premium, and a great many policies do not have it &mdash; including a large share of those arranged as a formality alongside a mortgage.',
        },
        {
          kind: 'note',
          html:
            'We are not going to tell you an earthquake is likely. We are going to tell you that a cover which is optional, inexpensive and frequently absent is worth two minutes of checking, and that the check costs you nothing.',
        },
      ],
    },
    {
      h2: 'How to tell whether you already have it',
      blocks: [
        {
          kind: 'steps',
          items: [
            { title: 'Find the <em>condi&ccedil;&otilde;es particulares</em>.', body: 'The particular conditions page of your policy, which lists the covers actually bought and their capital limits.' },
            { title: 'Look for <em>sismos</em>, <em>fen&oacute;menos s&iacute;smicos</em> or <em>terramoto</em>.', body: 'If the line is absent, or shows no capital against it, you do not have the cover.' },
            { title: 'Check the excess.', body: 'Seismic cover typically carries its own excess, often expressed as a percentage of the sum insured rather than a fixed amount.' },
            { title: 'Check contents as well as buildings.', body: 'The two are separately insured and it is possible to have seismic cover on one and not the other.' },
            { title: 'In an apartment, check both policies.', body: 'Yours and the condominium&rsquo;s. A building can be seismically damaged as a whole while every individual policy responds only to its own fraction.' },
            { title: 'Or send it to us.', body: 'Email the policy and we will read it and answer in English, whether or not you end up buying anything from us.' },
          ],
        },
      ],
    },
    {
      h2: 'What seismic cover typically responds to',
      blocks: [
        {
          kind: 'covers',
          items: [
            { title: 'Structural damage to the building.', body: ' Repair or rebuilding following an earthquake, up to the insured capital.' },
            { title: 'Contents damage.', body: ' Where contents are insured and seismic cover extends to them.' },
            { title: 'Associated events.', body: ' Policies frequently group earthquake with other seismic phenomena and, in some wordings, with volcanic activity and tidal effects. The grouping varies by insurer.' },
            { title: 'Debris removal and demolition.', body: ' Where included, the cost of clearing the site before rebuilding.' },
            { title: 'Alternative accommodation.', body: ' Where the policy provides it, somewhere to live while the property is uninhabitable.' },
          ],
        },
        {
          kind: 'note',
          html:
            'What is <em>not</em> covered varies just as much: pre-existing structural defects, unauthorised construction, and damage to items excluded generally are typical carve-outs. As with every cover on this site, the wording of your own policy is what decides a claim &mdash; not a summary on a broker&rsquo;s website, including this one.',
        },
      ],
    },
    {
      h2: 'The sum insured is where this goes wrong',
      blocks: [
        {
          kind: 'p',
          html:
            'Seismic cover is one of the few places where the sum insured has to be right rather than approximately right, because it is one of the few perils capable of producing a total loss. A house insured for &euro;200,000 that would cost &euro;450,000 to rebuild is not two-thirds insured against a total loss; it is a proportional settlement waiting to be explained to somebody who has just lost a house.',
        },
        {
          kind: 'grid',
          items: [
            { title: 'Insure the rebuild, not the market value', body: 'Construction cost plus demolition, professional fees and VAT. The land is not at risk and does not belong in the figure.' },
            { title: 'Construction costs have moved', body: 'Materials and labour in Portugal have risen substantially. A figure set in 2015 is not a figure for today. <a href="/en/blog/outdated-insured-values/">More on outdated values</a>.' },
            { title: 'Underinsurance is proportional', body: 'Insure at half the correct value and a partial claim can be reduced accordingly, not only a total one.' },
            { title: 'Condominium buildings too', body: 'Building sums insured set years ago and never revised are common, and the shortfall falls on the owners. See <a href="/en/blog/earthquake-cover-algarve-buildings/">earthquake cover for Algarve buildings</a>.' },
          ],
        },
      ],
    },
    {
      h2: 'What we do about it',
      blocks: [
        {
          kind: 'steps',
          items: [
            { title: 'Read what you have.', body: 'We check whether seismic cover is present, on buildings and on contents, and at what capital and excess.' },
            { title: 'Sanity-check the sum insured.', body: 'Against the property&rsquo;s size, construction and location. If it is materially low we will say so.' },
            { title: 'Price the addition.', body: 'Where seismic cover is missing, we obtain the cost of adding it &mdash; from your current insurer and from others.' },
            { title: 'Compare properly.', body: 'A written comparison covering seismic capital, excess, and the rest of the policy alongside it. Cover, not just price.' },
            { title: 'Tell you if you should stay put.', body: 'If your existing policy is already the right answer, that is what the report will say.' },
          ],
        },
      ],
    },
  ],
  form: {
    heading: 'Check your earthquake cover',
    sub: 'Send the property details, or attach your current policy by email afterwards. We will tell you in writing whether seismic cover is there, and what it would cost to add.',
    name: HOME_FORM,
    gaField: 'property-use',
    submit: 'Check my cover',
    fields: [
      ...CONTACT_ROWS,
      [PROPERTY_TYPE, {
        name: 'property-use',
        label: 'How is it used?',
        type: 'select',
        required: true,
        placeholder: 'Select use',
        options: ['Permanent home', 'Second home', 'Empty most of the year', 'Long-term rental', 'Holiday rental / AL'],
      }],
      [REBUILD, YEAR],
      [{
        name: 'seismic-cover',
        label: 'Do you have seismic cover now?',
        type: 'select',
        placeholder: 'Select one',
        options: ['Yes, it is on the policy', 'No, it is not included', 'I do not know', 'I have no policy yet'],
      }, CURRENT_POLICY],
      message('Construction type, number of floors, and anything unusual about the building?'),
    ],
  },
  faq: [
    {
      q: 'Is earthquake cover included in Portuguese home insurance?',
      a: 'Not by default. It is an optional extension to a multi-risk policy, and many policies &mdash; particularly older ones and those arranged through a bank alongside a mortgage &mdash; do not include it. The only way to know is to read the particular conditions of your own policy.',
    },
    {
      q: 'How do I check whether my policy has it?',
      a: 'Look at the <em>condições particulares</em> for a line referring to <em>sismos</em>, <em>fenómenos sísmicos</em> or <em>terramoto</em> with a capital against it. If it is not listed, it is not covered. Send us the policy and we will check it for you in English.',
    },
    {
      q: 'How much does earthquake cover cost to add?',
      a: 'It is usually a modest proportion of the total premium rather than a doubling of it, and the exact figure depends on the insurer, the location, the construction and the sum insured. We obtain the cost from your current insurer and from others so you can see the difference.',
    },
    {
      q: 'Is there a separate excess for earthquake claims?',
      a: 'Almost always, and it is often calculated as a percentage of the sum insured rather than as a fixed amount. This is one of the numbers most worth comparing between insurers, because it varies more than the premium does.',
    },
    {
      q: 'Does it cover contents as well as the building?',
      a: 'Only if contents are insured and the seismic extension applies to them. Buildings and contents are separate covers and it is possible to hold the extension on one and not the other, which is a gap worth closing deliberately rather than by accident.',
    },
    {
      q: 'I live in an apartment. Whose policy covers an earthquake?',
      a: 'Potentially both. The condominium policy deals with the building and common parts; your own policy deals with your fraction and contents. Both need to include seismic cover for the building to be properly protected, and both are worth checking.',
    },
    {
      q: 'Which parts of Portugal are most exposed?',
      a: 'Seismic hazard in Portugal is generally treated as highest in the Algarve and the greater Lisbon and Setúbal areas, reflecting proximity to the Azores–Gibraltar fault zone. Insurers price accordingly, but cover is available across the country.',
    },
    {
      q: 'Will an insurer refuse seismic cover on an old building?',
      a: 'Some are more cautious about older or non-standard construction, and terms can differ. Refusal is not the norm, but the appetite genuinely varies between insurers, which is the practical argument for going to several rather than one.',
    },
  ],
  related: [
    {
      h2: 'Related cover',
      blocks: [
        {
          kind: 'cluster',
          items: [
            { href: '/en/home-insurance-quote/', title: 'Home insurance in Portugal', blurb: 'The full multi-risk policy that seismic cover attaches to.' },
            { href: '/en/flood-insurance-portugal/', title: 'Flood and water damage cover', blurb: 'The other catastrophe question worth asking of the same policy.' },
            { href: '/en/apartment-insurance-portugal/', title: 'Apartment insurance', blurb: 'Where your policy and the condominium&rsquo;s have to line up.' },
            { href: '/en/condominium-insurance-algarve/', title: 'Condominium insurance', blurb: 'Seismic cover and sums insured on the building policy itself.' },
          ],
        },
      ],
    },
    {
      h2: 'Read before you buy',
      blocks: [
        {
          kind: 'guides',
          items: [
            { href: '/en/blog/earthquake-cover-algarve-buildings/', text: 'Earthquake cover for Algarve buildings' },
            { href: '/en/blog/outdated-insured-values/', text: 'Insured values that stopped being true years ago' },
            { href: '/en/blog/home-insurance-multi-risk/', text: 'What a Portuguese multi-risk policy is made of' },
            { href: '/en/blog/best-home-insurance-portugal-2026/', text: 'Comparing home insurers in Portugal' },
            { href: '/en/blog/change-bank-home-insurance-portugal/', text: 'Moving away from a bank-arranged home policy' },
            { href: '/en/blog/valuations-portugal-who-what-how-often/', text: 'Valuations: who does them, and how often' },
          ],
        },
      ],
    },
  ],
};

// --- landlord subcluster -----------------------------------------------------

const LANDLORD_PARENT = { label: 'Landlord insurance', href: '/en/landlord-insurance-portugal/' };

const RENTAL_TYPE = {
  name: 'rental-type',
  label: 'How is it let?',
  type: 'select',
  required: true,
  placeholder: 'Select letting type',
  options: [
    'Long-term residential lease',
    'Short-term / holiday rental (AL)',
    'Both, at different times of year',
    'Currently empty, looking for a tenant',
    'Not let yet &ndash; planning to',
  ],
};

const OWNER_LOCATION = {
  name: 'owner-location',
  label: 'Where do you live?',
  type: 'select',
  required: true,
  placeholder: 'Select one',
  options: ['In Portugal', 'United Kingdom', 'Ireland', 'Elsewhere in the EU', 'United States or Canada', 'Elsewhere'],
};

const OWNERSHIP = {
  name: 'ownership',
  label: 'Who owns the property?',
  type: 'select',
  placeholder: 'Select one',
  options: ['Me personally', 'Me and a spouse or partner', 'A Portuguese company', 'A foreign company', 'A trust or estate'],
};

const landlord = {
  slug: 'landlord-insurance-portugal',
  crumb: 'Landlord',
  title: 'Landlord Insurance in Portugal | Cover for Foreign Owners',
  description:
    'Landlord insurance in Portugal for foreign and non-resident owners who rent out property. Long-term lets, holiday rentals, liability and empty periods, arranged in English.',
  keywords:
    'landlord insurance portugal, landlord insurance in portugal, landlord insurance for expats, landlord insurance for foreigners, property rental insurance portugal, buy to let insurance portugal',
  eyebrow: 'Home &amp; Property &middot; Landlords',
  h1: 'Landlord insurance in Portugal for foreign property owners',
  heroSub:
    'You own a property in Portugal and someone else lives in it. That single fact changes what you need to insure, what you can insure, and who is responsible when something goes wrong. We arrange landlord cover for owners in the UK, Ireland, northern Europe and the US &mdash; and we run it in English.',
  heroCta: 'Get a landlord insurance quote',
  topBarCta: 'Get a landlord quote',
  stickyCta: 'Get a landlord quote',
  whatsapp: 'Hello, I rent out a property in Portugal and would like a landlord insurance quote.',
  trustbar: SMALL_TRUST,
  chatTopics: ['casa_geral', 'casa_segunda_habitacao', 'alojamento_local', 'erros_comuns', 'casa_valores_desatualizados'],
  service: {
    name: 'Landlord insurance in Portugal',
    type: 'Landlord and rental property insurance broking',
    description:
      'Independent broking of landlord and rental property insurance in Portugal for resident and non-resident owners, covering long-term lets, holiday rentals, owner liability and empty periods, handled in English.',
  },
  sections: [
    {
      h2: 'Four ways a Portuguese property gets used, four different policies',
      blocks: [
        {
          kind: 'p',
          html:
            'Almost every problem in this part of the market comes from a policy bought for one of these situations and used in another. Insurers underwrite the use, not the building. Find the column you are in.',
        },
        {
          kind: 'compare',
          columns: [
            {
              title: 'Owner-occupied',
              points: [
                'You live there.',
                'Standard multi-risk home policy.',
                'Your building, your contents, your liability.',
                'See <a href="/en/home-insurance-quote/">home insurance</a>.',
              ],
            },
            {
              title: 'Second home',
              points: [
                'Used by you and unpaid guests.',
                'No income from the property.',
                'Home policy with the occupancy pattern declared.',
                'See <a href="/en/second-home-insurance-portugal/">second home insurance</a>.',
              ],
            },
            {
              title: 'Long-term rental',
              points: [
                'A tenant lives there under a residential lease.',
                'You insure the building, your fixtures and your liability as owner.',
                'The tenant&rsquo;s belongings are not yours to insure.',
                'See <a href="/en/rental-property-insurance-portugal/">rental property insurance</a>.',
              ],
            },
            {
              title: 'Holiday rental / AL',
              points: [
                'Paying guests, short stays, constant turnover.',
                'Registered under the Alojamento Local regime.',
                'Different obligations and a different risk profile again.',
                'See <a href="/en/blog/alojamento-local-insurance-requirements/">AL insurance requirements</a>.',
              ],
            },
          ],
        },
        {
          kind: 'note',
          html:
            'If a property moves between columns during the year &mdash; family in August, holiday guests in July, empty in February &mdash; say so. That pattern is entirely normal and entirely insurable, but only if the insurer knows about it.',
        },
      ],
    },
    {
      h2: 'Who this page is for',
      blocks: [
        {
          kind: 'p',
          html:
            'Most of the landlords we act for do not live in Portugal. They bought an apartment in Lisbon or Porto as an investment, inherited a house in the Algarve, or kept the property they used to holiday in and put a tenant in it. They deal with a Portuguese agent or manager, receive a Portuguese policy they cannot read, and discover the gaps in it at the worst possible moment.',
        },
        {
          kind: 'grid',
          items: [
            { title: 'Non-resident owners', body: 'Living in the UK, Ireland, the Netherlands, Germany, France, Scandinavia or the US, with a property let in Portugal. <a href="/en/non-resident-landlord-insurance-portugal/">More on that here</a>.' },
            { title: 'Resident landlords', body: 'Living in Portugal and letting a second property, an inherited house or a converted annexe.' },
            { title: 'Accidental landlords', body: 'You moved, could not sell, or decided to keep the property. Now someone else lives in it.' },
            { title: 'Small portfolios', body: 'Two, three or four properties, often in different towns and on different policies. <a href="/en/blog/insuring-property-portfolio-two-jurisdictions/">Portfolios across jurisdictions</a>.' },
            { title: 'Company-held property', body: 'The property sits in a Portuguese or foreign company. <a href="/en/blog/property-held-company-structure-insurance/">The structure changes the policy</a>.' },
            { title: 'Mixed-use owners', body: 'Family use for part of the year and paying guests for the rest.' },
          ],
        },
      ],
    },
    {
      h2: 'What a landlord actually needs to insure',
      blocks: [
        {
          kind: 'p',
          html:
            'A landlord policy in Portugal is built from the same set of multi-risk covers as a home policy, assembled around a different question: not &ldquo;what do I lose if this burns down&rdquo; but &ldquo;what am I responsible for while someone else lives here&rdquo;.',
        },
        {
          kind: 'covers',
          items: [
            { title: 'The building.', body: ' Structure, fixtures, fitted kitchens and bathrooms, insured on a rebuild basis. This is the core of the policy and it is your responsibility, not the tenant&rsquo;s.' },
            { title: 'Landlord&rsquo;s contents.', body: ' What you supplied: white goods, furniture in a furnished let, curtains, air conditioning. Not the tenant&rsquo;s possessions.' },
            { title: 'Owner&rsquo;s liability.', body: ' Third-party claims arising from the property &mdash; a defective installation, a falling balcony rail, water reaching the flat below. <a href="/en/landlord-liability-insurance-portugal/">Explained in full here</a>.' },
            { title: 'Water damage.', body: ' Both to your property and, importantly, to the neighbours it reaches. The most common claim in Portuguese rentals.' },
            { title: 'Fire, storm and impact.', body: ' The standard perils, with the same rebuild-value logic as any home policy.' },
            { title: 'Seismic cover.', body: ' Optional in Portugal and frequently missing from older policies. <a href="/en/earthquake-insurance-portugal/">Worth checking on a let property too</a>.' },
            { title: 'Loss of rent.', body: ' Where available, income lost while the property is genuinely uninhabitable after an insured event. This is not the same thing as a tenant who stops paying.' },
            { title: 'Empty periods.', body: ' Between tenants, the property is unoccupied and the policy usually treats it differently. <a href="/en/unoccupied-home-insurance-portugal/">See unoccupied property cover</a>.' },
          ],
        },
        { kind: 'note', html: DISCLAIM_NOTE },
      ],
    },
    {
      h2: 'What landlord insurance does not do',
      blocks: [
        {
          kind: 'p',
          html:
            'Being straight about this saves everyone time, and it is the part most owners arriving from the UK or Ireland expect to work differently.',
        },
        {
          kind: 'covers',
          items: [
            { title: 'It does not insure the tenant&rsquo;s belongings.', body: ' Their furniture, electronics and clothes are theirs to insure. Many leases require them to hold their own contents policy; that is a matter for the lease, not for your policy.' },
            { title: 'It is not a rent guarantee.', body: ' Loss of rent cover, where it exists, responds when the property cannot be lived in after an insured loss. It does not respond to a tenant who simply stops paying. <a href="#rent-guarantee">More on that below</a>.' },
            { title: 'It does not cover wear and tear.', body: ' Ageing installations, tired paint and general deterioration are maintenance, not insured perils.' },
            { title: 'It does not replace legal process.', body: ' Recovering possession of a property in Portugal is a legal matter with its own timetable. No policy shortens it.' },
            { title: 'It does not cover undeclared letting.', body: ' A property let on a policy that describes it as owner-occupied is the single most common reason a landlord claim runs into trouble.' },
          ],
        },
      ],
    },
    {
      h2: 'Rent guarantee and landlord legal expenses: an honest answer',
      id: 'rent-guarantee',
      blocks: [
        {
          kind: 'p',
          html:
            'These two come up in almost every conversation with a British or Irish landlord, because in those markets they are standard bolt-ons. In Portugal the picture is different, and rather than publish a page pretending otherwise, here is the position as it actually stands.',
        },
        {
          kind: 'covers',
          items: [
            { title: 'Rent guarantee.', body: ' Products addressing non-payment of rent do exist in the Portuguese market, but availability, eligibility criteria and tenant vetting requirements vary considerably and they are not a routine extension of a landlord policy. We will tell you honestly what we can and cannot obtain for your specific situation rather than quoting something generic. Ask us, and we will come back with a straight answer.' },
            { title: 'Landlord legal expenses.', body: ' Legal expenses cover exists in Portugal and is more commonly written for individuals and households than as a landlord-specific product. Where a policy we can access extends to disputes arising from a let property, we will say so; where it does not, we will say that instead. There is background on how legal expenses cover works here: <a href="/en/blog/personal-legal-expenses-cover-portugal/">personal legal expenses cover in Portugal</a>.' },
            { title: 'Deposits and lease terms.', body: ' The deposit, the guarantor and the lease wording remain the primary protections against non-payment for most Portuguese landlords. Those are legal instruments rather than insurance ones, and your lawyer is the right person for them.' },
          ],
        },
        {
          kind: 'note',
          html:
            'We are a broker, not a product manufacturer. If we cannot place something we say so; we would rather lose a quote than sell you a policy that does not do what you thought it did.',
        },
      ],
    },
    {
      h2: 'Practical points for landlords who live abroad',
      blocks: [
        {
          kind: 'grid',
          items: [
            { title: 'Somebody must be reachable', body: 'A leak at 11pm needs a decision. Agree in advance who that is: a manager, an agent, a neighbour with a key.' },
            { title: 'Rental income is taxable in Portugal', body: 'Independently of where you live. Non-residents commonly need a fiscal representative &mdash; <a href="/en/fiscal-representation-portugal/">we arrange that</a>.' },
            { title: 'Long-term and holiday letting are different regimes', body: 'Legally and for insurance. Do not move a property between them without telling us.' },
            { title: 'Check what your manager arranged', body: 'Agency-arranged policies are often minimal, and sometimes insure the agency&rsquo;s interest rather than yours.' },
            { title: 'Apartments involve the condominium', body: 'The building policy covers common parts only. <a href="/en/apartment-insurance-portugal/">Where the line falls</a>.' },
            { title: 'Company ownership changes things', body: 'A property held in a company is insured in the company&rsquo;s name, with different consequences. <a href="/en/blog/property-held-company-structure-insurance/">Read this first</a>.' },
          ],
        },
      ],
    },
    {
      h2: 'What we need to prepare your quote',
      blocks: [
        {
          kind: 'steps',
          items: [
            { title: 'The property.', body: 'Address or postcode, type, size, year built, furnished or unfurnished.' },
            { title: 'How it is let.', body: 'Long-term lease, holiday rental, both, or currently empty between tenants.' },
            { title: 'Who owns it.', body: 'You personally, jointly, or through a company. This changes whose name the policy is in.' },
            { title: 'The rebuild value.', body: 'Construction cost, not the price you paid and not what it would sell for.' },
            { title: 'Who manages it.', body: 'You, an agent, a property manager, or a family member on the ground.' },
            { title: 'What you have now.', body: 'Send us the current policy and we will tell you what it does before we tell you what we would change.' },
          ],
        },
        {
          kind: 'p',
          html:
            'You get a written comparison within 24 hours: what each insurer covers, where liability limits sit, what happens between tenants, and what is genuinely not available. In English, with the exclusions spelled out rather than referenced.',
        },
      ],
    },
  ],
  form: {
    heading: 'Get your landlord insurance quote',
    sub: 'Six questions and a free written comparison within 24 hours. If you already have cover, we will tell you plainly whether it is worth changing.',
    name: LANDLORD_FORM,
    gaField: 'rental-type',
    submit: 'Get my landlord quote',
    fields: [
      ...CONTACT_ROWS,
      [PROPERTY_TYPE, RENTAL_TYPE],
      [OWNER_LOCATION, OWNERSHIP],
      [REBUILD, CURRENT_POLICY],
      message('Is it furnished? Who manages it locally? Is it let now, or between tenants?'),
    ],
  },
  faq: [
    {
      q: 'Do I need landlord insurance to rent out a property in Portugal?',
      a: 'Buildings in a condominium regime must carry fire cover by law, and a mortgage lender will require insurance. Beyond that, letting without cover for the building and for your liability as owner leaves you personally exposed to losses that can run well past the value of the rent.',
    },
    {
      q: 'Can I just keep my normal home insurance and put a tenant in?',
      a: 'No, and this is the most common mistake we see. A home policy is underwritten on the basis that the owner occupies the property. Letting it without telling the insurer is a change of risk, and it is the sort of thing that surfaces during a claim rather than before one.',
    },
    {
      q: 'Does landlord insurance cover my tenant&rsquo;s belongings?',
      a: 'No. Your policy covers the building, anything you supplied, and your liability as owner. The tenant&rsquo;s own possessions are theirs to insure, and many leases require them to do so.',
    },
    {
      q: 'What happens between tenants when the property is empty?',
      a: 'The property becomes unoccupied, and most policies treat unoccupied periods differently &mdash; typically with conditions attached and some covers, especially escape of water, restricted. Insurers define this in their own wording rather than by a national rule. Tell us when a vacancy is likely to run long.',
    },
    {
      q: 'Can I insure a Portuguese rental property if I live in the UK or Ireland?',
      a: 'Yes. Non-resident landlords insure Portuguese property routinely. You will need a Portuguese tax number, and everything else &mdash; quote, policy, renewal, claim &mdash; we handle in English from wherever you are.',
    },
    {
      q: 'Is rent guarantee insurance available in Portugal?',
      a: 'Products addressing non-payment exist in the market, but they are not a routine extension of a landlord policy and eligibility varies. We will tell you honestly what we can obtain for your situation instead of implying it is a standard bolt-on.',
    },
    {
      q: 'What if I let the property to holiday guests instead?',
      a: 'That is the Alojamento Local regime, and it is a different risk with different obligations. A long-term landlord policy is generally not the right contract for short-stay guests. Tell us which you are doing, or if you are doing both.',
    },
    {
      q: 'The property is owned by a company. Does that matter?',
      a: 'Yes. The policyholder is the company rather than you, which affects the documentation, the insurable interest and sometimes the insurers available. It is entirely workable; it just needs to be set up correctly from the start.',
    },
    {
      q: 'How much does landlord insurance cost in Portugal?',
      a: 'It depends on the rebuild value, the location, the construction, the letting type and the covers chosen, so a single figure would be dishonest. A let property is not automatically more expensive than an owner-occupied one, and comparing insurers moves the number more than most owners expect.',
    },
  ],
  related: [
    {
      h2: 'The landlord subcluster',
      blocks: [
        {
          kind: 'cluster',
          items: [
            { href: '/en/rental-property-insurance-portugal/', title: 'Rental property insurance', blurb: 'Long-term residential letting: the lease, the tenant, the fixtures and the gaps.' },
            { href: '/en/non-resident-landlord-insurance-portugal/', title: 'Non-resident landlord insurance', blurb: 'Owning in Portugal and living somewhere else, with claims handled remotely.' },
            { href: '/en/landlord-liability-insurance-portugal/', title: 'Landlord liability insurance', blurb: 'What you are answerable for as owner, and to whom.' },
            { href: '/en/unoccupied-home-insurance-portugal/', title: 'Unoccupied property insurance', blurb: 'The vacancy between tenants, and what it does to the policy.' },
            { href: '/en/home-insurance-quote/', title: 'Home insurance in Portugal', blurb: 'If you also own a property you live in yourself.' },
            { href: '/en/apartment-insurance-portugal/', title: 'Apartment insurance', blurb: 'Letting a flat: where the condominium policy stops and yours begins.' },
          ],
        },
      ],
    },
    {
      h2: 'Holiday letting and Alojamento Local',
      blocks: [
        {
          kind: 'p',
          html:
            'If the property takes paying guests for short stays, you are in the AL regime rather than the residential letting one. Registration under AL is an administrative and legal matter &mdash; it is not insurance, and holding an AL licence does not by itself protect you against anything. The cover has to be arranged separately and specifically.',
        },
        {
          kind: 'guides',
          items: [
            { href: '/en/blog/alojamento-local-insurance-requirements/', text: 'Alojamento Local: the insurance requirements', note: 'what the regime expects, and what it does not provide' },
            { href: '/en/blog/algarve-home-earns-income-personal-use-vs-al-cover/', text: 'When an Algarve home starts earning: personal use versus AL cover' },
            { href: '/en/blog/second-home-rent-out-holiday-let-standard-home-cover/', text: 'Renting out a second home on a standard home policy' },
            { href: '/en/blog/holiday-home-insurance-portugal/', text: 'Holiday home insurance in Portugal' },
          ],
        },
      ],
    },
    {
      h2: 'Read before you buy',
      blocks: [
        {
          kind: 'guides',
          items: [
            { href: '/en/blog/property-held-company-structure-insurance/', text: 'Property held through a company: what changes on the policy' },
            { href: '/en/blog/insuring-property-portfolio-two-jurisdictions/', text: 'Insuring a property portfolio across two jurisdictions' },
            { href: '/en/blog/water-damage-claim-portugal/', text: 'How a water damage claim actually runs in Portugal' },
            { href: '/en/blog/fiscal-representation-property-owners-portugal/', text: 'Fiscal representation for property owners' },
            { href: '/en/blog/documents-to-insure-property-portugal/', text: 'The documents you need to insure a Portuguese property' },
            { href: '/en/blog/personal-legal-expenses-cover-portugal/', text: 'Personal legal expenses cover in Portugal' },
          ],
        },
      ],
    },
  ],
};

const rentalProperty = {
  slug: 'rental-property-insurance-portugal',
  crumb: 'Rental property',
  parent: LANDLORD_PARENT,
  title: 'Rental Property Insurance Portugal | Long-Term Let Cover',
  description:
    'Insurance for long-term rental property in Portugal. What the owner insures, what the tenant insures, fixtures, liability and the gap between tenancies. Quote in 24 hours.',
  keywords:
    'rental property insurance portugal, rental property insurance for foreigners, rental property insurance for expats, buy to let insurance portugal, long term rental insurance portugal',
  eyebrow: 'Landlord insurance &middot; Long-term lets',
  h1: 'Rental property insurance for long-term lets in Portugal',
  heroSub:
    'A tenant on a residential lease is the most stable thing that can happen to an investment property, and the least visible. You are not there, and the first you hear of a problem is usually a message from an agent. This is what to insure, what the tenant insures, and where the two are assumed to meet and do not.',
  heroCta: 'Get a rental property quote',
  topBarCta: 'Get a rental property quote',
  stickyCta: 'Get a rental property quote',
  whatsapp: 'Hello, I would like a quote for a long-term rental property in Portugal.',
  trustbar: SMALL_TRUST,
  chatTopics: ['casa_geral', 'casa_segunda_habitacao', 'erros_comuns', 'condominio_conteudos', 'casa_valores_desatualizados'],
  service: {
    name: 'Rental property insurance in Portugal',
    type: 'Long-term rental property insurance broking',
    description:
      'Independent broking of building, contents and liability insurance for long-term residential rental property in Portugal, for resident and non-resident owners, handled in English.',
  },
  sections: [
    {
      h2: 'Where the owner stops and the tenant starts',
      blocks: [
        {
          kind: 'p',
          html:
            'A long-term let in Portugal (<em>arrendamento habitacional</em>) divides responsibility between two parties. Almost everything that goes wrong at claim stage comes from one of them assuming the other had it covered.',
        },
        {
          kind: 'compare',
          columns: [
            {
              title: 'You insure',
              points: [
                'The structure: walls, roof, floors, windows.',
                'Fitted kitchens, bathrooms, built-in wardrobes.',
                'Installations: plumbing, wiring, heating, air conditioning.',
                'Appliances and furniture you supplied.',
                'Your liability as owner of the building.',
              ],
            },
            {
              title: 'The tenant insures',
              points: [
                'Their own furniture and belongings.',
                'Their own liability towards you and towards neighbours.',
                'Anything they installed or brought with them.',
                'Frequently required by the lease &mdash; and frequently never actually arranged.',
              ],
            },
            {
              title: 'Nobody insures',
              points: [
                'Wear and tear on ageing installations.',
                'Damage a tenant causes deliberately, in most wordings.',
                'Unpaid rent &mdash; that is a legal matter, not an insured peril.',
                'Improvements neither party declared.',
              ],
            },
          ],
        },
        {
          kind: 'note',
          html:
            'Requiring the tenant to hold contents and liability cover is a lease clause worth including, and worth checking annually. Insurance you never asked to see is insurance that may not exist.',
        },
      ],
    },
    {
      h2: 'What to insure on a let property',
      blocks: [
        {
          kind: 'covers',
          items: [
            { title: 'Buildings at rebuild value.', body: ' The cost of putting the property back, not what you paid for it. Construction costs in Portugal have risen sharply; a figure set at purchase is often well short by now.' },
            { title: 'Landlord&rsquo;s fixtures and contents.', body: ' The oven, the washing machine, the fitted units, the furniture in a furnished let. Insured as your property, because it is.' },
            { title: 'Owner&rsquo;s liability.', body: ' Claims arising from the building itself &mdash; a defective installation, a falling element, water reaching a neighbour. <a href="/en/landlord-liability-insurance-portugal/">The detail is here</a>.' },
            { title: 'Water damage.', body: ' The commonest claim on a Portuguese rental, and the one that most often involves a third party downstairs.' },
            { title: 'Fire, storm, impact and theft.', body: ' The standard perils, underwritten on a let property rather than an owner-occupied one.' },
            { title: 'Seismic cover.', body: ' Optional in Portugal and often missing. <a href="/en/earthquake-insurance-portugal/">Check whether the policy has it</a>.' },
            { title: 'Loss of rent.', body: ' Where available, income lost while an insured event makes the property uninhabitable. Not a remedy for a tenant who stops paying.' },
            { title: 'Glass and sanitaryware.', body: ' Small covers that turn up disproportionately often in tenanted properties.' },
          ],
        },
        { kind: 'note', html: DISCLAIM_NOTE },
      ],
    },
    {
      h2: 'The gap between tenancies',
      blocks: [
        {
          kind: 'p',
          html:
            'A tenant leaves at the end of October. The next one signs in February. For those months the property is unoccupied, and most Portuguese policies say something specific about unoccupied periods &mdash; usually with conditions attached and some covers, escape of water in particular, restricted or suspended.',
        },
        {
          kind: 'covers',
          items: [
            { title: 'There is no universal threshold.', body: ' Each insurer sets its own definition of unoccupancy in its own wording. A vacancy that is fine on one policy may trigger conditions on another.' },
            { title: 'Tell us before, not after.', body: ' A vacancy declared in advance is an administrative matter. The same vacancy discovered during a claim is an argument.' },
            { title: 'Shut off the water.', body: ' Between tenants, in an empty flat, over a Portuguese winter. It is the cheapest loss prevention there is.' },
            { title: 'Keep it looking lived-in.', body: ' Clear the post, keep the garden cut, keep the shutters moving.' },
            { title: 'Longer vacancies need their own cover.', body: ' If the gap will run for months rather than weeks, see <a href="/en/unoccupied-home-insurance-portugal/">unoccupied property insurance</a>.' },
          ],
        },
      ],
    },
    {
      h2: 'What is not an insurance problem',
      blocks: [
        {
          kind: 'p',
          html:
            'Landlords arriving from the UK, Ireland or the US often expect insurance to solve things that, in Portugal, sit with the lease and the courts. Being clear about the boundary is more useful than being encouraging about it.',
        },
        {
          kind: 'grid',
          items: [
            { title: 'Unpaid rent', body: 'Not an insured peril under a standard landlord policy. Deposits, guarantors and lease terms are the usual protections; ask us what, if anything, is obtainable for your case.' },
            { title: 'Recovering possession', body: 'A legal process with its own timetable. Insurance does not accelerate it.' },
            { title: 'Tenant disputes', body: 'A matter for your lawyer. Legal expenses cover exists in Portugal but is not a routine landlord bolt-on &mdash; see the <a href="/en/landlord-insurance-portugal/#rent-guarantee">honest answer on the landlord page</a>.' },
            { title: 'Deliberate tenant damage', body: 'Commonly excluded. The deposit is the first line, and thorough inventories at check-in and check-out are the second.' },
            { title: 'Gradual deterioration', body: 'A boiler at the end of its life is a maintenance cost. Policies respond to sudden, accidental events.' },
            { title: 'Undeclared letting', body: 'If the policy still says owner-occupied, the cover is built on a fact that is no longer true.' },
          ],
        },
      ],
    },
    {
      h2: 'What we need to prepare your quote',
      blocks: [
        {
          kind: 'steps',
          items: [
            { title: 'The property.', body: 'Address or postcode, type, size, year built, and whether it is an apartment in a condominium.' },
            { title: 'Furnished or unfurnished.', body: 'And roughly what you supplied, if furnished.' },
            { title: 'The lease.', body: 'Long-term residential, its length, and whether a tenant is in place now.' },
            { title: 'The rebuild value.', body: 'Construction cost. An estimate is a fine starting point.' },
            { title: 'Management.', body: 'Who deals with a problem locally when you are not there.' },
          ],
        },
        {
          kind: 'p',
          html:
            'A written comparison within 24 hours, covering what each insurer includes for a tenanted property, where the liability limits sit, and what happens during a vacancy.',
        },
      ],
    },
  ],
  form: {
    heading: 'Get your rental property quote',
    sub: 'Tell us about the property and the tenancy. We will come back with a written comparison, in English, within 24 hours.',
    name: LANDLORD_FORM,
    gaField: 'rental-type',
    submit: 'Get my quote',
    fields: [
      ...CONTACT_ROWS,
      [PROPERTY_TYPE, {
        name: 'rental-type',
        label: 'Tenancy status',
        type: 'select',
        required: true,
        placeholder: 'Select one',
        options: [
          'Let on a long-term lease now',
          'Between tenants',
          'About to be let for the first time',
          'Let to a company or on a corporate lease',
          'Part let, part used by me',
        ],
      }],
      [{
        name: 'furnishing',
        label: 'Furnished?',
        type: 'select',
        placeholder: 'Select one',
        options: ['Fully furnished', 'Part furnished (white goods only)', 'Unfurnished'],
      }, OWNER_LOCATION],
      [REBUILD, CURRENT_POLICY],
      message('How long is the lease, and who manages the property locally?'),
    ],
  },
  faq: [
    {
      q: 'What is the difference between landlord insurance and rental property insurance?',
      a: 'In practice they describe the same cover. We use this page for the specifics of long-term residential letting &mdash; the lease, the tenant, the fixtures and the vacancy &mdash; while the main landlord page covers the wider picture including holiday letting and company ownership.',
    },
    {
      q: 'Does the tenant need their own insurance?',
      a: 'Your policy will not cover their belongings or their personal liability, so it is in their interest. Many Portuguese leases require the tenant to hold cover, and it is worth asking to see the certificate rather than assuming the clause did the work.',
    },
    {
      q: 'Am I covered if a tenant damages the property?',
      a: 'Accidental damage may be covered depending on the policy; deliberate damage by a tenant is commonly excluded. The deposit and a thorough inventory at check-in and check-out are the practical protections, and both matter more than most landlords expect.',
    },
    {
      q: 'What happens to the policy between tenants?',
      a: 'The property becomes unoccupied and most policies attach conditions to that. Insurers define unoccupancy differently, with no common national threshold, so tell us when a vacancy is likely to run long and we will confirm what your wording requires.',
    },
    {
      q: 'Can I claim for lost rent?',
      a: 'Loss of rent cover, where the policy includes it, responds when an insured event makes the property uninhabitable. It does not respond to a tenant who stops paying, which is a legal matter rather than an insured peril.',
    },
    {
      q: 'Is a let apartment different from a let house?',
      a: 'Yes, because the condominium policy covers the common parts and yours covers your fraction. Water damage claims in a let apartment routinely involve three parties, which is why liability limits deserve a closer look than usual.',
    },
    {
      q: 'I live abroad. Can I still arrange this?',
      a: 'Yes, and most of our landlord clients do. You will need a Portuguese tax number; everything else runs by email in English, including the claim if one happens.',
    },
    {
      q: 'Do I need a different policy if I switch to holiday letting?',
      a: 'Almost certainly. Short-stay paying guests fall under the Alojamento Local regime, which is a materially different risk. Tell us before you switch rather than after the first booking.',
    },
  ],
  related: [
    {
      h2: 'Related cover',
      blocks: [
        {
          kind: 'cluster',
          items: [
            { href: '/en/landlord-insurance-portugal/', title: 'Landlord insurance in Portugal', blurb: 'The main landlord page, covering every letting type.' },
            { href: '/en/non-resident-landlord-insurance-portugal/', title: 'Non-resident landlord insurance', blurb: 'Letting a Portuguese property while living somewhere else.' },
            { href: '/en/landlord-liability-insurance-portugal/', title: 'Landlord liability insurance', blurb: 'Third-party claims arising from a property you own but do not occupy.' },
            { href: '/en/unoccupied-home-insurance-portugal/', title: 'Unoccupied property insurance', blurb: 'When the gap between tenants stops being a gap.' },
          ],
        },
      ],
    },
    {
      h2: 'Read before you buy',
      blocks: [
        {
          kind: 'guides',
          items: [
            { href: '/en/blog/water-damage-claim-portugal/', text: 'How a water damage claim actually runs in Portugal' },
            { href: '/en/blog/condominium-insurance-doesnt-cover-contents/', text: 'Why the condominium policy does not cover contents' },
            { href: '/en/blog/outdated-insured-values/', text: 'Insured values that stopped being true years ago' },
            { href: '/en/blog/documents-to-insure-property-portugal/', text: 'The documents you need to insure a Portuguese property' },
            { href: '/en/blog/property-held-company-structure-insurance/', text: 'Property held through a company structure' },
            { href: '/en/blog/insuring-property-portfolio-two-jurisdictions/', text: 'Insuring a portfolio across two jurisdictions' },
          ],
        },
      ],
    },
  ],
};

const nonResident = {
  slug: 'non-resident-landlord-insurance-portugal',
  crumb: 'Non-resident landlord',
  parent: LANDLORD_PARENT,
  title: 'Non-Resident Landlord Insurance Portugal | Owners Abroad',
  description:
    'Property insurance for non-resident landlords in Portugal. Managing a let property from abroad, claims you cannot attend, vacancies and local representation. Free quote in English.',
  keywords:
    'non resident landlord insurance portugal, landlord insurance for non residents, property insurance portugal non resident, overseas landlord insurance portugal, foreign owner rental insurance portugal',
  eyebrow: 'Landlord insurance &middot; Owners abroad',
  h1: 'Insurance for non-resident landlords with property in Portugal',
  heroSub:
    'The property is in Portugal. You are not. Everything about insuring a let property changes when the owner is two thousand kilometres away and the policy, the loss adjuster and the plumber all work in Portuguese. This page is about closing that distance.',
  heroCta: 'Get a non-resident landlord quote',
  topBarCta: 'Insure from abroad',
  stickyCta: 'Get a quote from abroad',
  whatsapp: 'Hello, I live outside Portugal and rent out a property there. I would like a quote.',
  trustbar: SMALL_TRUST,
  chatTopics: ['casa_geral', 'casa_segunda_habitacao', 'erros_comuns', 'alojamento_local', 'casa_valores_desatualizados'],
  service: {
    name: 'Non-resident landlord insurance in Portugal',
    type: 'Insurance broking for non-resident property owners',
    description:
      'Independent broking of landlord and rental property insurance in Portugal for owners living abroad, including remote claims handling and English-language policy servicing.',
  },
  sections: [
    {
      h2: 'The problem is distance, not the policy',
      blocks: [
        {
          kind: 'p',
          html:
            'A non-resident landlord is insuring the same building against the same perils as anybody else. What is different is everything around it: nobody can open the door, the renewal notice arrives in a language you do not read, the agent who arranged the cover chose the cheapest option, and when a claim happens you are managing it from another country and another time zone.',
        },
        {
          kind: 'grid',
          items: [
            { title: 'You cannot inspect', body: 'You are relying on a tenant, an agent or a neighbour to tell you something is wrong &mdash; and to tell you promptly.' },
            { title: 'You cannot let anyone in', body: 'A loss adjuster needs access. So does the plumber. Somebody local has to be able to say yes.' },
            { title: 'You cannot read the policy', body: 'Portuguese insurers issue in Portuguese by law. The exclusions are in there, and they matter.' },
            { title: 'Deadlines still apply', body: 'Notification periods run from the event, not from the day the news reaches you in Manchester.' },
            { title: 'Renewals happen quietly', body: 'Policies renew, premiums move, terms change. Without someone reading them, nothing gets questioned.' },
            { title: 'Payment and banking', body: 'Direct debits from a Portuguese account, or an alternative arrangement that actually works from abroad.' },
          ],
        },
      ],
    },
    {
      h2: 'What we do differently for owners abroad',
      blocks: [
        {
          kind: 'covers',
          items: [
            { title: 'Everything in English, in writing.', body: ' Quotes, comparisons, endorsements, renewal notices and claim correspondence. Portuguese insurers issue policies in Portuguese; we make sure you know what yours says before you sign it.' },
            { title: 'We are your local presence.', body: ' We deal with the insurer, the loss adjuster and the paperwork in Portuguese so that you do not have to be on the phone at 9am Lisbon time.' },
            { title: 'We check the occupancy question.', body: ' Non-resident landlords are the group most likely to have a policy that quietly assumes the owner lives there.' },
            { title: 'We tell you what your current policy does.', body: ' Send us the agency-arranged contract you inherited. We will translate it into an English summary and say whether it is adequate.' },
            { title: 'We handle renewals actively.', body: ' A note in English if something material changed, and a re-comparison if the premium moves without reason.' },
            { title: 'We can arrange fiscal representation.', body: ' Rental income is taxable in Portugal regardless of where you live, and non-residents commonly need a representative for tax correspondence. <a href="/en/fiscal-representation-portugal/">That service is here</a>.' },
          ],
        },
      ],
    },
    {
      h2: 'Set this up before you need it',
      blocks: [
        {
          kind: 'p',
          html:
            'The difference between a claim that runs smoothly from abroad and one that does not is almost always decided months earlier, by whether these five things were arranged.',
        },
        {
          kind: 'steps',
          items: [
            { title: 'A named key-holder.', body: 'A manager, an agent, a trusted neighbour. Someone who can enter the property, take photographs and admit a loss adjuster.' },
            { title: 'A written escalation route.', body: 'Who the tenant calls at 11pm, who authorises an emergency repair, and up to what amount without asking you.' },
            { title: 'A contractor you have already chosen.', body: 'Rather than the first plumber your tenant finds on a Sunday.' },
            { title: 'Documents held digitally.', body: 'Deed, caderneta predial, policy, inventory, photographs of the property in good condition. All of it in a folder you can reach from anywhere.' },
            { title: 'A single point of contact for insurance.', body: 'So that a claim is one email in English, not a series of calls in a language you do not speak.' },
          ],
        },
        {
          kind: 'note',
          html:
            'On the mechanics of running a claim in Portugal when you do not speak the language: <a href="/en/blog/insurance-claim-portugal-no-portuguese/">making a claim without Portuguese</a>.',
        },
      ],
    },
    {
      h2: 'The practical requirements',
      blocks: [
        {
          kind: 'grid',
          items: [
            { title: 'A Portuguese NIF', body: 'Needed to hold a policy on Portuguese property. Non-residents can obtain one &mdash; <a href="/en/blog/how-to-get-nif-portugal-non-resident/">here is how</a>.' },
            { title: 'Proof of ownership', body: 'Deed, caderneta predial and certid&atilde;o permanente. <a href="/en/blog/documents-to-insure-property-portugal/">The full list</a>.' },
            { title: 'A payment method that works', body: 'Portuguese direct debit is simplest; we will tell you what an insurer will accept if you do not have one.' },
            { title: 'Fiscal representation', body: 'Frequently required for non-resident owners. <a href="/en/blog/fiscal-representation-property-owners-portugal/">Why it matters for property owners</a>.' },
            { title: 'A correct occupancy declaration', body: 'Let, empty, or used by you for part of the year. Say which, honestly.' },
            { title: 'A realistic rebuild value', body: 'Portuguese construction costs, not the price you paid in 2011.' },
          ],
        },
      ],
    },
    {
      h2: 'If the property is between tenants',
      blocks: [
        {
          kind: 'p',
          html:
            'For a non-resident owner, a vacancy is more than lost income. It is a building with nobody in it, in a country you are not in, for an indefinite period. Insurers treat unoccupied property differently, each defining unoccupancy in its own wording rather than by any national rule, and escape of water is usually the first cover to be restricted.',
        },
        {
          kind: 'covers',
          items: [
            { title: 'Tell us as soon as the tenant gives notice.', body: ' Not when the vacancy has been running for four months.' },
            { title: 'Have the water shut off.', body: ' Ask your manager to do it, and to confirm in writing that they did.' },
            { title: 'Arrange inspections.', body: ' Some insurers require them during unoccupied periods, and a dated photograph each visit is the record that settles the question.' },
            { title: 'Consider dedicated cover for a long vacancy.', body: ' See <a href="/en/unoccupied-home-insurance-portugal/">unoccupied property insurance</a>.' },
          ],
        },
        { kind: 'note', html: DISCLAIM_NOTE },
      ],
    },
  ],
  form: {
    heading: 'Get a quote as a non-resident landlord',
    sub: 'Tell us where you live and how the property is let. We work entirely by email, in English, and reply within 24 hours.',
    name: LANDLORD_FORM,
    gaField: 'rental-type',
    submit: 'Get my quote',
    fields: [
      ...CONTACT_ROWS,
      [OWNER_LOCATION, RENTAL_TYPE],
      [PROPERTY_TYPE, OWNERSHIP],
      [REBUILD, CURRENT_POLICY],
      message('Who manages the property in Portugal, and who holds a key? Do you have a Portuguese NIF?'),
    ],
  },
  faq: [
    {
      q: 'Can I insure a Portuguese property if I do not live in Portugal?',
      a: 'Yes. Non-resident owners insure Portuguese property routinely. The main practical requirement is a Portuguese tax number (NIF), plus proof of ownership and a payment method the insurer accepts.',
    },
    {
      q: 'Do I need a Portuguese bank account?',
      a: 'It makes things simpler, because most insurers prefer direct debit from a Portuguese account, but it is not universally required. Tell us your situation and we will confirm which insurers can work with what you have.',
    },
    {
      q: 'Do I need a fiscal representative?',
      a: 'Non-resident owners commonly need a fiscal representative in Portugal for tax correspondence, which is a separate matter from insurance but frequently arises alongside it. We arrange fiscal representation as a service and can handle both together.',
    },
    {
      q: 'Who deals with a claim when I am not in the country?',
      a: 'We do the Portuguese-language part: reporting the claim, dealing with the insurer and the loss adjuster, chasing the settlement. What we cannot do is open your front door, so a named local key-holder needs to be arranged in advance.',
    },
    {
      q: 'My agent already arranged a policy. Is that enough?',
      a: 'Sometimes, and often not. Agency-arranged cover tends to be minimal, occasionally insures the agency&rsquo;s interest rather than the owner&rsquo;s, and is rarely reviewed. Send us the policy and we will summarise in English what it actually does.',
    },
    {
      q: 'The policy is in Portuguese. Can you tell me what it says?',
      a: 'Yes, and we do it regularly. Portuguese insurers must issue policies in Portuguese; we read the particular conditions and the exclusions and give you a written summary in English before you commit to anything.',
    },
    {
      q: 'Does it cost more to insure as a non-resident?',
      a: 'Residence itself is not usually the price driver. What moves the premium is occupancy: a property that stands empty for long periods is a different risk from one with a tenant in it, and that is what the underwriting reflects.',
    },
    {
      q: 'What if I use the property myself for part of the year?',
      a: 'That is common and entirely insurable, but the mixed use must be declared. A property let for ten months and used by the family for two is neither a pure rental nor a pure second home, and the policy should say so.',
    },
  ],
  related: [
    {
      h2: 'Related cover',
      blocks: [
        {
          kind: 'cluster',
          items: [
            { href: '/en/landlord-insurance-portugal/', title: 'Landlord insurance in Portugal', blurb: 'The main landlord page, covering every letting type.' },
            { href: '/en/rental-property-insurance-portugal/', title: 'Rental property insurance', blurb: 'The detail of long-term residential letting.' },
            { href: '/en/second-home-insurance-portugal/', title: 'Second home insurance', blurb: 'If you also keep the property for your own use part of the year.' },
            { href: '/en/unoccupied-home-insurance-portugal/', title: 'Unoccupied property insurance', blurb: 'For vacancies that run into months.' },
          ],
        },
      ],
    },
    {
      h2: 'Read before you buy',
      blocks: [
        {
          kind: 'guides',
          items: [
            { href: '/en/blog/insurance-claim-portugal-no-portuguese/', text: 'Making a claim in Portugal without speaking Portuguese' },
            { href: '/en/blog/how-to-get-nif-portugal-non-resident/', text: 'How a non-resident gets a Portuguese NIF' },
            { href: '/en/blog/fiscal-representation-property-owners-portugal/', text: 'Fiscal representation for property owners' },
            { href: '/en/blog/getting-insurance-portugal-before-nif-residency/', text: 'Arranging insurance before the NIF and residency are settled' },
            { href: '/en/blog/us-buyers-property-cover-portugal/', text: 'US buyers: property cover in Portugal' },
            { href: '/en/blog/british-expats-brexit-insurance-portugal/', text: 'British owners in Portugal after Brexit' },
          ],
        },
      ],
    },
  ],
};

const landlordLiability = {
  slug: 'landlord-liability-insurance-portugal',
  crumb: 'Landlord liability',
  parent: LANDLORD_PARENT,
  title: 'Landlord Liability Insurance Portugal | Owner&rsquo;s Responsibility',
  description:
    'Landlord liability cover in Portugal: claims from tenants, neighbours and visitors arising from a property you own but do not live in. What it covers, and what it does not.',
  keywords:
    'landlord liability insurance portugal, rental property liability insurance, landlord responsibility insurance portugal, owner liability cover portugal, third party liability landlord portugal',
  eyebrow: 'Landlord insurance &middot; Liability',
  h1: 'Landlord liability cover in Portugal',
  heroSub:
    'A building you own can cause harm to people who are not you: a tenant, a neighbour downstairs, a visitor on the stairs, a contractor on the roof. Liability cover is the part of a landlord policy that answers for that &mdash; and it is the part most owners never look at until it is needed.',
  heroCta: 'Get a landlord liability quote',
  topBarCta: 'Check your liability cover',
  stickyCta: 'Check my liability cover',
  whatsapp: 'Hello, I would like to check the liability cover on my rental property in Portugal.',
  trustbar: SMALL_TRUST,
  chatTopics: ['casa_geral', 'erros_comuns', 'condominio_conteudos', 'casa_segunda_habitacao', 'alojamento_local'],
  service: {
    name: 'Landlord liability insurance in Portugal',
    type: 'Property owner liability insurance broking',
    description:
      'Independent broking of owner liability cover for landlords in Portugal, responding to third-party claims from tenants, neighbours and visitors arising from a let property.',
  },
  sections: [
    {
      h2: 'What owner liability actually means',
      blocks: [
        {
          kind: 'p',
          html:
            'Liability cover responds when someone else suffers loss, damage or injury and holds you responsible for it as owner of the property. In a Portuguese multi-risk policy this is <em>responsabilidade civil</em>, and on a let property it is the cover that matters most, because the people who might be harmed are no longer only your own family.',
        },
        {
          kind: 'p',
          html:
            'It has a limit, an excess and a set of exclusions, and those three things differ substantially between insurers. Whether a particular claim is met is a question for the wording and, ultimately, for the facts. Nothing on this page determines the outcome of a real dispute, and nothing on it is legal advice.',
        },
      ],
    },
    {
      h2: 'The situations that generate claims',
      blocks: [
        {
          kind: 'p',
          html:
            'These are the scenarios landlords in Portugal actually encounter. They are unremarkable, which is precisely the point.',
        },
        {
          kind: 'grid',
          items: [
            { title: 'Water reaching the flat below', body: 'A pipe in your wall fails and the neighbour&rsquo;s ceiling comes down. By some distance the most common liability claim in Portuguese apartments.' },
            { title: 'Something falls from the building', body: 'A tile, a section of render, a balcony rail, an air-conditioning unit. Onto a car, a pavement or a person.' },
            { title: 'A defective installation', body: 'Old wiring, a failing gas installation, a water heater that was never serviced.' },
            { title: 'Injury on the property', body: 'A broken step, an unlit stairwell, an unguarded pool. See <a href="/en/blog/swimming-pools-jetties-private-access-liability-nobody-insures/">pools and the liability nobody insures</a>.' },
            { title: 'Fire spreading', body: 'A fire that starts in your property and damages a neighbouring one.' },
            { title: 'A contractor on site', body: 'Someone working on your property causing damage or being injured. Check what their own insurance covers before they start.' },
          ],
        },
      ],
    },
    {
      h2: 'Who can bring a claim',
      blocks: [
        {
          kind: 'compare',
          columns: [
            {
              title: 'Your tenant',
              points: [
                'Injury or damage caused by a defect in the building.',
                'Their belongings damaged by a failure of your installations.',
                'Distinct from the tenant&rsquo;s own liability towards others.',
              ],
            },
            {
              title: 'Neighbours',
              points: [
                'Water damage from your property into theirs.',
                'Damage from falling elements or fire spread.',
                'In a condominium, potentially the condominium itself.',
              ],
            },
            {
              title: 'Third parties',
              points: [
                'Visitors, delivery drivers, contractors, passers-by.',
                'Guests of the tenant, who are not parties to the lease.',
                'Anyone the building can reach.',
              ],
            },
          ],
        },
      ],
    },
    {
      h2: 'Where owner liability stops',
      blocks: [
        {
          kind: 'covers',
          items: [
            { title: 'It is not the tenant&rsquo;s liability.', body: ' If your tenant floods the neighbour by leaving a tap running, that is their responsibility and their policy, not yours. This is one good reason for a lease to require the tenant to carry cover.' },
            { title: 'It is not the condominium&rsquo;s liability.', body: ' Injuries and damage arising in the common parts belong to the building&rsquo;s policy. <a href="/en/condominium-insurance-algarve/">Condominium cover is a separate contract</a>.' },
            { title: 'It does not cover known neglect.', body: ' A defect you were told about and did not address is a weak position, whatever the policy says.' },
            { title: 'It does not cover contractual disputes.', body: ' Arguments about rent, deposits or the terms of the lease are not third-party liability claims.' },
            { title: 'It is not employer&rsquo;s liability.', body: ' If you employ a cleaner, gardener or caretaker directly, Portugal has its own requirements &mdash; <a href="/en/blog/employing-nanny-driver-gardener-home-employer-obligation/">explained here</a>.' },
            { title: 'It does not cover business activity.', body: ' Running a hospitality operation from the property is a different exposure. Short-term letting under the AL regime has its own requirements &mdash; <a href="/en/blog/alojamento-local-insurance-requirements/">see AL insurance</a>.' },
          ],
        },
        { kind: 'note', html: DISCLAIM_NOTE },
      ],
    },
    {
      h2: 'How much liability cover is enough',
      blocks: [
        {
          kind: 'p',
          html:
            'Liability limits on Portuguese home policies are frequently set at a level that made sense when the policy was written and looks thin against a serious injury claim today. It is one of the few things in a policy that can be improved for very little money, because the premium for a higher limit is usually modest relative to the increase in protection.',
        },
        {
          kind: 'steps',
          items: [
            { title: 'Find the limit.', body: 'On the <em>condi&ccedil;&otilde;es particulares</em>, under <em>responsabilidade civil</em>. If you cannot find it, send us the policy.' },
            { title: 'Ask what it would cover.', body: 'Not a broken window. A serious injury, or a fire that damages two neighbouring properties.' },
            { title: 'Check whether tenants are third parties.', body: 'Some wordings treat the occupier differently from a stranger. It is worth knowing which yours does.' },
            { title: 'Check the excess.', body: 'Liability excesses are often separate from the property excess.' },
            { title: 'Ask what a higher limit costs.', body: 'Frequently much less than owners expect. We will get the figure.' },
          ],
        },
      ],
    },
    {
      h2: 'What we need to prepare your quote',
      blocks: [
        {
          kind: 'steps',
          items: [
            { title: 'The property.', body: 'Address or postcode, type, size, year built, and whether it is in a condominium.' },
            { title: 'How it is let.', body: 'Long-term lease, holiday rental, or empty between tenants.' },
            { title: 'Features that raise exposure.', body: 'Pool, terrace, gates, lift, steep access, outbuildings, solar installation.' },
            { title: 'Anyone you employ.', body: 'A cleaner, gardener or caretaker paid directly by you.' },
            { title: 'Your current limit.', body: 'If you have a policy, we will benchmark it rather than replace it blindly.' },
          ],
        },
        {
          kind: 'p',
          html:
            'A written comparison within 24 hours, showing liability limits and excesses side by side alongside the rest of the cover. Liability is rarely the reason a policy is chosen, and it is often the reason one is regretted.',
        },
      ],
    },
  ],
  form: {
    heading: 'Check your landlord liability cover',
    sub: 'Send us the property details, or your current policy afterwards. We will benchmark the liability limit and tell you what a higher one costs.',
    name: LANDLORD_FORM,
    gaField: 'rental-type',
    submit: 'Check my cover',
    fields: [
      ...CONTACT_ROWS,
      [PROPERTY_TYPE, RENTAL_TYPE],
      [{
        name: 'liability-features',
        label: 'Does the property have',
        type: 'select',
        placeholder: 'Select if relevant',
        options: ['A swimming pool', 'A terrace or roof terrace', 'Gates or automatic access', 'Steep or difficult access', 'Outbuildings or an annexe', 'None of these'],
      }, OWNER_LOCATION],
      [REBUILD, CURRENT_POLICY],
      message('Do you employ anyone at the property? Any previous liability claims or disputes?'),
    ],
  },
  faq: [
    {
      q: 'Is landlord liability insurance compulsory in Portugal?',
      a: 'Liability cover as such is not generally a standalone legal requirement for a residential landlord, though fire cover is required for property in a condominium regime and lenders impose their own conditions. The practical argument for liability cover is exposure, not obligation: without it, a serious third-party claim comes out of your own assets.',
    },
    {
      q: 'Is it not included in my normal home insurance?',
      a: 'Most multi-risk policies include a liability section, but the limit may be modest and the wording may assume the owner occupies the property. On a let property both points deserve checking, because the people who might be harmed are no longer only your own household.',
    },
    {
      q: 'My tenant flooded the neighbour. Am I liable?',
      a: 'Responsibility depends on the cause. Damage arising from the tenant&rsquo;s own actions is generally their responsibility; damage arising from a defect in the building is generally the owner&rsquo;s. Which applies is a question of fact, and it is a good reason for both parties to be insured.',
    },
    {
      q: 'What limit should I have?',
      a: 'There is no universally correct figure, but limits set years ago are often thin against a serious injury claim. Because higher limits usually cost relatively little, this is one of the cheapest improvements available on a landlord policy. We will price the options so you can decide.',
    },
    {
      q: 'Does liability cover legal costs?',
      a: 'Policies commonly include defence costs within the liability section, though the extent varies. That is different from a legal expenses policy, which is a separate product and not a routine landlord bolt-on in Portugal.',
    },
    {
      q: 'What about the condominium&rsquo;s liability?',
      a: 'Claims arising in the common parts &mdash; the stairwell, the lift, the entrance &mdash; belong to the condominium&rsquo;s own policy. Yours responds to claims arising from your fraction. In practice a single incident sometimes involves both, which is when having proper cover on your side matters.',
    },
    {
      q: 'I have a pool. Does that change anything?',
      a: 'It raises the exposure meaningfully, and pools, terraces and gates often need declaring specifically rather than being assumed. Insurers take different views, and an undeclared pool is an avoidable weakness in a claim.',
    },
    {
      q: 'Does this cover disputes with my tenant?',
      a: 'No. Liability cover answers third-party claims for loss, damage or injury. Disputes over rent, deposits or the lease are contractual matters for a lawyer, and we will say plainly what is and is not obtainable in the way of legal expenses cover.',
    },
  ],
  related: [
    {
      h2: 'Related cover',
      blocks: [
        {
          kind: 'cluster',
          items: [
            { href: '/en/landlord-insurance-portugal/', title: 'Landlord insurance in Portugal', blurb: 'The main landlord page, covering every letting type.' },
            { href: '/en/rental-property-insurance-portugal/', title: 'Rental property insurance', blurb: 'Long-term letting: building, fixtures and vacancies.' },
            { href: '/en/non-resident-landlord-insurance-portugal/', title: 'Non-resident landlord insurance', blurb: 'Managing a Portuguese let property from abroad.' },
            { href: '/en/condominium-insurance-algarve/', title: 'Condominium insurance', blurb: 'The building&rsquo;s own liability, for common parts.' },
          ],
        },
      ],
    },
    {
      h2: 'Read before you buy',
      blocks: [
        {
          kind: 'guides',
          items: [
            { href: '/en/blog/family-liability-cover-portugal/', text: 'How liability cover works on a Portuguese policy' },
            { href: '/en/blog/swimming-pools-jetties-private-access-liability-nobody-insures/', text: 'Pools, jetties and the liability nobody insures' },
            { href: '/en/blog/employing-nanny-driver-gardener-home-employer-obligation/', text: 'Employing staff at a property: what the law expects' },
            { href: '/en/blog/water-damage-claim-portugal/', text: 'How a water damage claim actually runs in Portugal' },
            { href: '/en/blog/personal-legal-expenses-cover-portugal/', text: 'Personal legal expenses cover in Portugal' },
            { href: '/en/blog/alojamento-local-insurance-requirements/', text: 'Alojamento Local: the insurance requirements' },
          ],
        },
      ],
    },
  ],
};

export const PAGES = [
  secondHome,
  unoccupied,
  apartment,
  flood,
  earthquake,
  landlord,
  rentalProperty,
  nonResident,
  landlordLiability,
];
