/**
 * Copy for the national expat acquisition hub, /en/expat-insurance-portugal/.
 *
 * The page is the commercial entry point for national expat searches
 * ("insurance for expats in Portugal", "expat insurance Portugal"). It owns one
 * intent and one only: *which* insurance does an international resident need,
 * and who arranges it. Every product intent stays with the page that already
 * owns it — home with /en/home-insurance-quote/, health with
 * /en/health-insurance-quote/, landlord with /en/landlord-insurance-portugal/,
 * Lagos/Algarve with /en/expat-insurance-lagos-portugal/ — so the sections
 * below qualify and route rather than re-explain cover.
 *
 * Every href here is a page or article that exists on disk. Products the
 * homepage advertises without a commercial destination (car, mortgage life,
 * personal accident) route to their strongest published guide, and the lead is
 * taken on this page's own form.
 *
 * Claims are limited to what the rest of the site already states: ASF
 * registration 425591790/3, an English-speaking team, agency agreements with
 * several insurers rather than one, and a free written comparison within 24
 * hours. No client counts, no years of experience, no savings percentages.
 */

export const PAGE = {
  slug: 'expat-insurance-portugal',

  title: 'Insurance for Expats in Portugal | English-Speaking Broker',
  description:
    'Insurance for expats in Portugal, explained in English. Work out what health, home, landlord, car or life cover you actually need, and get a free written review from an ASF-registered broker.',
  keywords:
    'insurance for expats in Portugal, expat insurance Portugal, insurance in Portugal for expats, expat insurance broker Portugal, insurance for foreigners in Portugal, insurance for foreign residents Portugal, insurance for international residents Portugal, English-speaking insurance broker Portugal',

  crumb: 'Insurance for expats',
  eyebrow: 'For expats &amp; international residents in Portugal',
  h1: 'Insurance for Expats in Portugal',
  heroSub:
    'Insurance in Portugal, explained in English. Whether you are moving here, already live here, own a property or split your year between two countries, we help you work out what cover you actually need &mdash; and arrange it with you.',
  heroCta: 'Get Your Free Insurance Review',
  heroGhost: { label: 'What insurance do I need?', href: '#what-insurance' },
  topBarCta: 'Get your free insurance review',
  stickyCta: 'Get your free insurance review',
  whatsapp: 'Hello, I am an expat in Portugal and would like help working out what insurance I need.',

  trustbar: [
    '<strong>A broker, not one insurer.</strong> We hold distribution agreements with Allianz, Zurich, M&eacute;dis, Hiscox, MGEN, Asisa and Allianz Partners, and compare them for you.',
    '<strong>Everything in English.</strong> The questions, the comparison, the renewal and the claim. Portuguese insurers issue the policy in Portuguese by law; you will know what it says before you sign.',
    '<strong>More than one insurance line.</strong> Health, home, landlord, motor, life and specialist cover handled by the same people, so nothing falls between two brokers.',
    '<strong>A written comparison in 24 hours.</strong> Free, no obligation, and no call centre.',
  ],

  sections: [
    {
      id: 'why-expats',
      h2: 'Why insurance in Portugal is a different problem when you have moved here',
      blocks: [
        {
          kind: 'p',
          html: 'Nothing about Portuguese insurance is designed for someone who arrived last year. The policy wording is Portuguese, the assumptions behind it are Portuguese, and the questions an insurer asks &mdash; how the house is occupied, who holds the title, how long you have held a licence, whether you are tax resident &mdash; have answers that are straightforward for a Portuguese family and complicated for almost everyone else.',
        },
        {
          kind: 'p',
          html: 'The result is rarely a dramatic failure. It is a quietly wrong policy: a house described as a permanent residence when it is empty for seven months, contents insured for a number nobody has revisited since the purchase, a health plan bought for a visa appointment that turns out not to cover the thing you actually needed. Those gaps surface at a claim, which is the worst possible moment to find them.',
        },
        {
          kind: 'p',
          html: 'This page exists to answer one question before you spend money: <strong>what insurance do you actually need in Portugal, and in what order?</strong> Once that is clear, each product below has its own page, with its own quote form.',
        },
        {
          kind: 'note',
          html: 'General guidance only. What any particular policy covers depends on the insurer, the wording and your circumstances &mdash; and nothing here is legal, tax or immigration advice.',
        },
      ],
    },

    {
      id: 'what-insurance',
      h2: 'What insurance can I get in Portugal?',
      blocks: [
        {
          kind: 'p',
          html: 'These are the covers international residents ask us for most. Each one links to the page that handles it properly &mdash; this page is the map, not the destination.',
        },
        { kind: 'h3', text: 'Health' },
        {
          kind: 'cluster',
          items: [
            {
              href: '/en/health-insurance-quote/',
              title: 'Private health insurance',
              blurb: 'Cover in Portugal for individuals and families: networks, waiting periods, medical history and what a plan will and will not accept.',
            },
            {
              href: '/en/international-health-insurance-portugal/',
              title: 'International health insurance',
              blurb: 'For people whose life is not confined to one country &mdash; treatment in more than one jurisdiction, wider geographical scope.',
            },
            {
              href: '/en/expat-visa-insurance-portugal/',
              title: 'Insurance for a visa or AIMA appointment',
              blurb: 'What the health cover behind a D7, D8, Golden Visa or Schengen application is normally expected to show.',
            },
          ],
        },
        { kind: 'h3', text: 'Home &amp; property' },
        {
          kind: 'cluster',
          items: [
            {
              href: '/en/home-insurance-quote/',
              title: 'Home insurance',
              blurb: 'Buildings, contents and family liability for the home you live in &mdash; house, villa or apartment.',
            },
            {
              href: '/en/second-home-insurance-portugal/',
              title: 'Second &amp; holiday homes',
              blurb: 'A property used for part of the year is a different risk, and most insurers word it differently.',
            },
            {
              href: '/en/apartment-insurance-portugal/',
              title: 'Apartment insurance',
              blurb: 'Where the condominium policy stops and your own cover has to start.',
            },
            {
              href: '/en/unoccupied-home-insurance-portugal/',
              title: 'Unoccupied property',
              blurb: 'Houses standing empty between owners, tenants, renovations or seasons.',
            },
            {
              href: '/en/private-clients/',
              title: 'High-value homes &amp; contents',
              blurb: 'Villas, scheduled jewellery, art and collections above what a retail policy will accept.',
            },
            {
              href: '/en/condominium-insurance-algarve/',
              title: 'Condominium insurance',
              blurb: 'For owners and administrators who need the building policy audited rather than renewed blind.',
            },
          ],
        },
        { kind: 'h3', text: 'Letting a property' },
        {
          kind: 'cluster',
          items: [
            {
              href: '/en/landlord-insurance-portugal/',
              title: 'Landlord insurance',
              blurb: 'The starting point for any Portuguese property that produces rent.',
            },
            {
              href: '/en/non-resident-landlord-insurance-portugal/',
              title: 'Non-resident landlords',
              blurb: 'You own and let in Portugal but live somewhere else, and everything has to work remotely.',
            },
            {
              href: '/en/rental-property-insurance-portugal/',
              title: 'Long-term lets',
              blurb: 'Residential tenancies, and what the tenant is and is not expected to insure.',
            },
            {
              href: '/en/landlord-liability-insurance-portugal/',
              title: 'Landlord liability',
              blurb: 'The owner&rsquo;s own responsibility for the building, its installations and its grounds.',
            },
          ],
        },
        { kind: 'h3', text: 'Motor, life and specialist cover' },
        {
          kind: 'cluster',
          items: [
            {
              href: '/en/car-insurance-portugal/',
              title: 'Car insurance',
              blurb: 'Portuguese-plated and imported vehicles, foreign licences, and what happens to your claims history.',
            },
            {
              href: '/en/blog/mortgage-life-insurance-foreign-buyers-portugal/',
              title: 'Life &amp; mortgage protection',
              blurb: 'The life policy a Portuguese bank attaches to a mortgage does not have to be the bank&rsquo;s policy.',
            },
            {
              href: '/en/blog/boat-insurance-portugal/',
              title: 'Boat &amp; marine',
              blurb: 'Private boats and yachts kept in Portuguese waters &mdash; hull, liability, navigation limits and lay-up.',
            },
            {
              href: '/en/blog/travel-insurance-expats-portugal/',
              title: 'Travel cover once you live here',
              blurb: 'Travel insurance sold to residents of Portugal is not the policy you bought as a visitor.',
            },
            {
              href: '/en/flood-insurance-portugal/',
              title: 'Flood &amp; storm',
              blurb: 'Water damage and flood are separate items in Portuguese wordings, and not every policy carries both.',
            },
            {
              href: '/en/earthquake-insurance-portugal/',
              title: 'Earthquake cover',
              blurb: 'Seismic cover is optional in Portugal and is missing from more policies than owners expect.',
            },
          ],
        },
        {
          kind: 'note',
          html: 'If what you need is not here &mdash; personal accident, professional liability, domestic staff, cyber and fraud &mdash; describe it on the form and we will tell you whether we can place it.',
        },
      ],
    },

    {
      id: 'situations',
      h2: 'Which situation are you in?',
      blocks: [
        {
          kind: 'p',
          html: 'Most people arrive here knowing their circumstances rather than their product. Find yourself below and start where it makes sense to start.',
        },
        { kind: 'h3', text: 'I am moving to Portugal' },
        {
          kind: 'guides',
          items: [
            { href: '/en/health-insurance-quote/', text: 'Private health insurance', note: 'usually the first thing arranged, and the one with medical questions attached' },
            { href: '/en/expat-visa-insurance-portugal/', text: 'Insurance for a visa or residence permit', note: 'what the cover behind an application is normally expected to show' },
            { href: '/en/home-insurance-quote/', text: 'Home insurance', note: 'from the day you complete, not the day you move in' },
            { href: '/en/car-insurance-portugal/', text: 'Car insurance', note: 'foreign licences, imported vehicles and a no-claims record earned somewhere else' },
            { href: '/en/blog/getting-insurance-portugal-before-nif-residency/', text: 'Getting insured before you have a NIF or residency' },
          ],
        },
        { kind: 'h3', text: 'I already live in Portugal' },
        {
          kind: 'guides',
          items: [
            { href: '#quote-form', text: 'Have your existing policies reviewed', note: 'we read what you already hold and tell you plainly whether it is worth changing' },
            { href: '/en/health-insurance-quote/', text: 'Health insurance', note: 'including moving from one insurer to another' },
            { href: '/en/home-insurance-quote/', text: 'Home insurance' },
            { href: '/en/car-insurance-portugal/', text: 'Car insurance', note: 'including a review of the policy you already hold' },
          ],
        },
        { kind: 'h3', text: 'I have bought a property in Portugal' },
        {
          kind: 'guides',
          items: [
            { href: '/en/home-insurance-quote/', text: 'Home insurance', note: 'buildings and contents, on values that reflect rebuilding rather than purchase price' },
            { href: '/en/blog/mortgage-life-insurance-foreign-buyers-portugal/', text: 'Mortgage life insurance', note: 'the bank&rsquo;s proposal is not the only one available' },
            { href: '/en/apartment-insurance-portugal/', text: 'Apartment insurance', note: 'if the condominium policy leaves your side uncovered' },
            { href: '/en/blog/documents-to-insure-property-portugal/', text: 'The documents an insurer will ask you for' },
          ],
        },
        { kind: 'h3', text: 'I rent out my property' },
        {
          kind: 'guides',
          items: [
            { href: '/en/landlord-insurance-portugal/', text: 'Landlord insurance', note: 'start here whatever the letting arrangement' },
            { href: '/en/rental-property-insurance-portugal/', text: 'Long-term residential lets' },
            { href: '/en/non-resident-landlord-insurance-portugal/', text: 'Letting from abroad' },
            { href: '/en/blog/alojamento-local-insurance-requirements/', text: 'Holiday letting and Alojamento Local' },
          ],
        },
        { kind: 'h3', text: 'I live between Portugal and another country' },
        {
          kind: 'guides',
          items: [
            { href: '/en/international-health-insurance-portugal/', text: 'International health insurance', note: 'when treatment may happen in more than one country' },
            { href: '/en/second-home-insurance-portugal/', text: 'Second home insurance' },
            { href: '/en/unoccupied-home-insurance-portugal/', text: 'Cover for the months the house is empty' },
            { href: '/en/blog/insurance-portugal-spain-international-residents/', text: 'Holding cover in Portugal and elsewhere' },
          ],
        },
        { kind: 'h3', text: 'I am retiring in Portugal' },
        {
          kind: 'guides',
          items: [
            { href: '/en/health-insurance-quote/', text: 'Health insurance', note: 'age limits and medical history matter more here than anywhere else' },
            { href: '/en/blog/retiring-algarve-health-cover-65-plus/', text: 'Health cover that still accepts you at 65+' },
            { href: '/en/home-insurance-quote/', text: 'Home insurance' },
            { href: '/en/blog/long-term-care-planning-foreign-residents-portugal/', text: 'Long-term care planning' },
          ],
        },
        { kind: 'h3', text: 'I own valuable property or assets' },
        {
          kind: 'guides',
          items: [
            { href: '/en/private-clients/', text: 'High-value homes, art, jewellery and marine', note: 'scheduled cover rather than a contents sub-limit' },
            { href: '/en/blog/luxury-home-insurance-portugal/', text: 'What changes above the retail range' },
            { href: '/en/blog/insuring-art-portugal/', text: 'Art and collections in a Portuguese home' },
          ],
        },
      ],
    },

    {
      id: 'moving',
      h2: 'Moving to Portugal? Start with the insurance you actually need',
      blocks: [
        {
          kind: 'p',
          html: 'There is no single checklist, because what you need depends on what you are doing here. The honest version is a short list of questions, and the answers point at different products.',
        },
        {
          kind: 'covers',
          items: [
            { title: 'Are you applying for a visa or a residence permit?', body: ' Applications are normally expected to be supported by health cover, and what qualifies depends on the route and on what is asked for at the time. We work from what is actually being requested rather than from a general rule &mdash; see <a href="/en/expat-visa-insurance-portugal/">insurance for a Portuguese visa</a> and <a href="/en/blog/health-insurance-requirements-portuguese-residence-visas/">what counts as valid proof</a>.' },
            { title: 'Are you buying, or renting?', body: ' Buyers need buildings cover from completion, and a mortgage normally brings a life policy with it. Tenants insure their own contents and their own liability, not the landlord&rsquo;s building.' },
            { title: 'Are you bringing a car?', body: ' An imported vehicle has to be matriculated before a Portuguese motor policy attaches to it, and your foreign claims history may or may not be recognised by the insurer you approach.' },
            { title: 'Will the property sit empty?', body: ' Unoccupancy is the single most common reason an otherwise good home policy stops responding. Say it out loud at quotation, not at claim.' },
            { title: 'Are you retiring here?', body: ' Health insurance is the product where age and medical history bite hardest, and the options narrow the longer it is left.' },
            { title: 'Are you working remotely, or still running something abroad?', body: ' Income earned outside Portugal, and businesses still held elsewhere, change which liability and health arrangements make sense.' },
            { title: 'Will you keep a base in another country?', body: ' Splitting your year is the case international health insurance exists for, and it is worth deciding before you buy a domestic plan.' },
          ],
        },
        {
          kind: 'p',
          html: 'The practical parts of arriving &mdash; the NIF, the bank account, a Portuguese address for correspondence &mdash; are handled on <a href="/en/relocation-services/">our relocation page</a>, and <a href="/en/fiscal-representation-portugal/">fiscal representation</a> is there for owners who are not tax resident.',
        },
        {
          kind: 'note',
          html: 'We are an insurance broker. We do not give immigration advice, and we do not tell you what a visa route requires &mdash; we arrange the insurance and explain what it does.',
        },
      ],
    },

    {
      id: 'already-here',
      h2: 'Already living in Portugal? The review is the useful part',
      blocks: [
        {
          kind: 'p',
          html: 'Most of the people who come to us already have policies. They were bought quickly, in a language nobody read closely, often through whoever was standing nearest at the time &mdash; the bank at the mortgage signing, the dealer at the car handover, the previous owner&rsquo;s broker at completion.',
        },
        {
          kind: 'p',
          html: 'A review is not a sales exercise. It is us reading what you hold and telling you three things: what it covers, what it does not, and whether it is worth changing. Sometimes the answer is that it is fine and you should keep it.',
        },
        {
          kind: 'compare',
          columns: [
            {
              title: 'What we look for',
              points: [
                'Sums insured that no longer match what rebuilding or replacing would cost',
                'Occupancy described in a way the property no longer matches',
                'Seismic, flood or water damage missing from a home policy',
                'Health plans with waiting periods or exclusions you were never told about',
                'Two policies quietly covering the same thing',
                'Cover you are paying for that cannot apply to you',
              ],
            },
            {
              title: 'What you get back',
              points: [
                'A written comparison, in English, within 24 hours',
                'The exclusions read to you before anything is signed',
                'A plain recommendation, including &ldquo;keep what you have&rdquo;',
                'One point of contact across every line you hold with us',
                'Help with the claim if one happens',
              ],
            },
          ],
        },
      ],
    },

    {
      id: 'property-owners',
      h2: 'If you own property in Portugal but live somewhere else',
      blocks: [
        {
          kind: 'p',
          html: 'Non-resident ownership is normal here and insurers deal with it routinely, but it changes the shape of the policy. The property is empty for long stretches, nobody local is responsible for it day to day, the correspondence goes abroad, and a claim has to be handled by someone who is not standing in the building.',
        },
        {
          kind: 'covers',
          items: [
            { title: 'Occupancy is the material fact', body: ' A house used eight weeks a year is not the risk an insurer prices as a permanent home. Describing it accurately at quotation is what keeps the policy responding later &mdash; see <a href="/en/second-home-insurance-portugal/">second home insurance</a> and <a href="/en/unoccupied-home-insurance-portugal/">unoccupied property</a>.' },
            { title: 'Letting changes the contract', body: ' Rent turns a home policy into a landlord policy, and long-term tenancies and holiday letting are underwritten differently. Start at <a href="/en/landlord-insurance-portugal/">landlord insurance</a>, or at <a href="/en/non-resident-landlord-insurance-portugal/">non-resident landlord cover</a> if you are abroad.' },
            { title: 'You will need a NIF', body: ' A Portuguese tax number is normally needed to hold a policy on a Portuguese property, and it is the item that most often holds a purchase up. <a href="/en/blog/how-to-get-nif-portugal-non-resident/">How to get one as a non-resident</a>, and <a href="/en/fiscal-representation-portugal/">fiscal representation</a> if you need a representative address.' },
            { title: 'Claims happen while you are not here', body: ' Water escaping in an empty house is the classic non-resident claim. We handle the insurer&rsquo;s side in Portuguese and report back to you in English.' },
            { title: 'The title may be held through a company', body: ' Ownership through a company or a trust changes who the policyholder is, and getting that wrong is a problem at claim rather than at quotation.' },
          ],
        },
      ],
    },

    {
      id: 'problems',
      h2: 'The problems international clients actually bring us',
      blocks: [
        {
          kind: 'grid',
          items: [
            { title: 'The policy is in Portuguese', body: 'By law, a Portuguese insurer issues the contract in Portuguese. We go through it with you in English first, so signing is not an act of faith.' },
            { title: 'The terminology does not translate cleanly', body: 'Franquia, capital seguro, propriedade horizontal, multirriscos, tomador versus segurado. These are not exotic words, but guessing at them is how people end up with the wrong cover.' },
            { title: 'Your insurance history is somewhere else', body: 'Years of good conduct with a British, Dutch, German or American insurer do not transfer automatically. What a Portuguese insurer will accept as evidence varies, so we ask before assuming.' },
            { title: 'Foreign no-claims history on a motor policy', body: 'Some insurers recognise a foreign claims record with the right documentation, others do not. It is worth establishing at quotation, because it moves the premium.' },
            { title: 'The house is empty half the year', body: 'The unoccupancy clause is where most second-home claims are lost. It is also the easiest thing to get right in advance.' },
            { title: 'You live in more than one country', body: 'Residency, treatment abroad and where the property sits pull in different directions. This is what international health cover exists for.' },
            { title: 'Something happened while you were abroad', body: 'A claim reported late, from another timezone, in a language you do not have, is a bad combination. We report it, chase it and translate it.' },
            { title: 'You want to change insurer or broker', body: 'Moving an existing policy is normal and largely administrative, but there are timing and notice questions worth getting right.' },
            { title: 'Nobody explained the exclusions', body: 'Exclusions are not fine print &mdash; they are the actual shape of the cover. We read the relevant ones to you before you buy.' },
          ],
        },
        {
          kind: 'p',
          html: 'Two further reads if any of this is familiar: <a href="/en/blog/insurance-claim-portugal-no-portuguese/">making a claim in Portugal when you do not speak Portuguese</a>, and <a href="/en/blog/british-expats-brexit-insurance-portugal/">what changed for British residents after Brexit</a>.',
        },
      ],
    },

    {
      id: 'why-us',
      h2: 'Why Adler &amp; Rochefort',
      blocks: [
        {
          kind: 'p',
          html: 'We are an insurance broker registered with the Portuguese supervisory authority (ASF) under no. 425591790/3, based in Lagos in the Algarve and working with international clients across Portugal. English is our working language.',
        },
        {
          kind: 'covers',
          items: [
            { title: 'A broker, not an insurer', body: ' We hold agency agreements with several insurers and place your risk where it fits, rather than fitting you to one company&rsquo;s product.' },
            { title: 'Everything explained in English', body: ' The questions we ask, the comparison we send, the exclusions we read to you, and the renewal a year later.' },
            { title: 'Advice across more than one line', body: ' Health, home, letting, motor, life and specialist cover in one place, which is what most international households actually need.' },
            { title: 'Experience with international clients', body: ' Non-resident owners, second homes, foreign licences, company-held title and dual-country lives are ordinary work here, not exceptions.' },
            { title: 'Support after the policy is issued', body: ' Mid-term changes, renewals and claims. We deal with the insurer in Portuguese and come back to you in English.' },
            { title: 'A free written comparison in 24 hours', body: ' In writing, so you can read it twice. No obligation and no call centre.' },
          ],
        },
        {
          kind: 'p',
          html: 'If you are in Lagos, Luz, Portim&atilde;o or the wider Algarve, our local page has the detail for the area: <a href="/en/expat-insurance-lagos-portugal/">insurance for expats in Lagos and the Algarve</a>.',
        },
      ],
    },
  ],

  form: {
    name: 'expat-insurance-review',
    gaField: 'insurance_type',
    heading: 'Tell us what you need',
    sub: 'Six questions, then a free written review within 24 hours. If you are not sure which insurance you need, say so &mdash; that is the most common answer we get, and working it out is the point of this page.',
    submit: 'Get my free insurance review',
    fields: [
      [
        { name: 'name', label: 'Full name', type: 'text', placeholder: 'Jane Smith', autocomplete: 'name', required: true },
        { name: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com', autocomplete: 'email', required: true },
      ],
      [
        { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', placeholder: '+351 000 000 000', autocomplete: 'tel', inputmode: 'tel', required: true },
        {
          name: 'insurance_type',
          label: 'What do you need?',
          type: 'select',
          required: true,
          placeholder: 'Select what you need',
          options: [
            'Not sure yet',
            'Home',
            'Landlord / rental property',
            'Health',
            'International health',
            'Car',
            'Life & mortgage protection',
            'Boat',
            'High-value home, art or valuables',
            'Review my existing policies',
            'Other',
          ],
        },
      ],
      [
        {
          name: 'situation',
          label: 'Where are you in the process?',
          type: 'select',
          required: true,
          placeholder: 'Select your situation',
          options: [
            'Moving to Portugal',
            'Already living in Portugal',
            'I have bought a property in Portugal',
            'I let out a property in Portugal',
            'I live between Portugal and another country',
            'Retiring in Portugal',
            'Other',
          ],
        },
        {
          name: 'owner_location',
          label: 'Where do you live now?',
          type: 'select',
          required: true,
          placeholder: 'Select one',
          options: [
            'In Portugal',
            'United Kingdom',
            'Ireland',
            'Elsewhere in the EU',
            'United States or Canada',
            'Elsewhere',
          ],
        },
      ],
      {
        name: 'message',
        label: 'Anything we should know?',
        type: 'textarea',
        placeholder: 'For example: buying an apartment in Lisbon in March, bringing a car from the UK, and I already have health cover I would like reviewed.',
      },
    ],
  },

  faq: [
    {
      q: 'What insurance do expats need in Portugal?',
      a: 'There is no single answer, because it depends on what you are doing here. Most international residents end up with health insurance and home insurance first, then add motor cover if they drive, life cover if there is a mortgage, and landlord cover if the property is let. Someone splitting their year between two countries often needs international health cover instead of a domestic plan. The <a href="#situations">situation section above</a> is the quickest way to see which applies to you.',
    },
    {
      q: 'Can foreigners get insurance in Portugal?',
      a: 'Yes. Non-nationals and non-residents hold Portuguese policies routinely. You will normally need a Portuguese tax number (NIF), and individual insurers set their own acceptance criteria, so the practical question is which insurer will write the risk rather than whether it can be written at all.',
    },
    {
      q: 'Can I get insurance before I move to Portugal?',
      a: 'In many cases yes, and for some products it is the sensible order &mdash; buildings cover from the day you complete on a purchase, for example. What is possible before you arrive depends on the product and the insurer. We cover the practicalities in <a href="/en/blog/getting-insurance-portugal-before-nif-residency/">getting insurance in Portugal before you have a NIF or residency</a>.',
    },
    {
      q: 'Do I need Portuguese residency to take out a policy?',
      a: 'Not necessarily. Non-resident owners insure Portuguese property as a matter of course, and residency is a different question from tax number. Whether a specific policy is available to a non-resident is set by the insurer and the product, so it is worth asking before assuming either way.',
    },
    {
      q: 'Can I insure a property in Portugal if I live abroad?',
      a: 'Yes, and it is one of the most common things we arrange. What changes is the detail: how the property is occupied, who holds a key, where the correspondence goes and how a claim is handled while you are not in the country. See <a href="/en/second-home-insurance-portugal/">second home insurance</a> or, if the property is let, <a href="/en/non-resident-landlord-insurance-portugal/">non-resident landlord insurance</a>.',
    },
    {
      q: 'Can I keep my no-claims history from another country?',
      a: 'Sometimes. Some Portuguese motor insurers will take a documented claims record from a foreign insurer into account, others will not, and what they accept as evidence differs. It is worth establishing at quotation rather than after the policy is issued, because it affects the premium.',
    },
    {
      q: 'Can Adler &amp; Rochefort arrange everything in English?',
      a: 'Yes &mdash; English is our working language. The questions, the comparison, the explanation of the terms, renewals and claims are all handled in English. The policy itself is issued in Portuguese by the insurer, because Portuguese law requires it; what we add is that you understand exactly what it says before you sign.',
    },
    {
      q: 'Can I have more than one type of insurance with you?',
      a: 'Yes, and most of our international clients do. Health, home, letting, motor, life and specialist cover are handled by the same people, which is largely the point &mdash; the gaps tend to appear between products rather than inside them.',
    },
    {
      q: 'What insurance do I need when buying a property in Portugal?',
      a: 'Buildings cover from completion is the immediate one, and a mortgage will normally bring a life policy with it, and it is worth asking what your options are there rather than defaulting to whatever the lender offers. Contents, family liability and, depending on the property, flood and seismic cover are the usual additions. Start at <a href="/en/home-insurance-quote/">home insurance</a>.',
    },
    {
      q: 'What insurance do landlords need in Portugal?',
      a: 'A property that produces rent is not covered by an ordinary home policy. Landlord insurance covers the building, the owner&rsquo;s liability and, depending on the arrangement, loss of rent. Long-term tenancies and holiday letting (Alojamento Local) are underwritten differently. Start at <a href="/en/landlord-insurance-portugal/">landlord insurance in Portugal</a>.',
    },
    {
      q: 'Do you only work in the Algarve?',
      a: 'We are based in Lagos and know the Algarve especially well, but we arrange insurance for clients across Portugal. If you are local to the western Algarve, <a href="/en/expat-insurance-lagos-portugal/">our Lagos page</a> has the detail for the area.',
    },
    {
      q: 'What does the free insurance review cost?',
      a: 'Nothing, and it carries no obligation. You get a written comparison within 24 hours, and if the recommendation is to keep what you already have, that is what we will tell you.',
    },
  ],

  related: [
    {
      h2: 'Guides for international residents',
      blocks: [
        {
          kind: 'p',
          html: 'Written for people who did not grow up with the Portuguese system.',
        },
        {
          kind: 'guides',
          items: [
            { href: '/en/blog/health-insurance-expats-portugal/', text: 'Health insurance for expats in Portugal' },
            { href: '/en/blog/sns-vs-private-insurance-expats-portugal/', text: 'SNS or private cover &mdash; do expats need both?' },
            { href: '/en/blog/portuguese-vs-international-health-insurance/', text: 'Portuguese health insurance vs international health insurance' },
            { href: '/en/blog/insurance-guide-americans-moving-to-portugal/', text: 'A complete insurance guide for Americans moving to Portugal' },
            { href: '/en/blog/british-expats-brexit-insurance-portugal/', text: 'British residents after Brexit: what changed' },
            { href: '/en/blog/insurance-portugal-spain-international-residents/', text: 'Insurance in Portugal and Spain, by nationality' },
            { href: '/en/blog/car-insurance-expatriates/', text: 'Car insurance for expatriates in Portugal' },
            { href: '/en/blog/moving-to-portugal-pre-existing-condition-health-cover/', text: 'Moving with a pre-existing condition' },
            { href: '/en/blog/insurance-claim-portugal-no-portuguese/', text: 'Making a claim when you do not speak Portuguese' },
            { href: '/en/blog/how-to-get-nif-portugal-non-resident/', text: 'How to get a NIF as a non-resident' },
          ],
        },
      ],
    },
  ],

  chatTopics: ['parcerias_expat', 'sns_vs_privado', 'casa_geral', 'auto_expatriados', 'vida_hipoteca'],

  service: {
    name: 'Insurance brokerage for expats and international residents in Portugal',
    type: 'Insurance brokerage',
    description:
      'English-speaking, ASF-registered insurance brokerage for expats, foreign residents and non-resident property owners in Portugal: health, home, landlord, motor, life and specialist cover compared across insurers and explained in English.',
    audience: 'Expats, foreign residents and international property owners in Portugal',
  },
};
