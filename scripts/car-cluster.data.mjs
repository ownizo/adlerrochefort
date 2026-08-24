/**
 * Content for the Car Insurance commercial pillar (/en/).
 *
 * Consumed by build-car-cluster.mjs. The cluster currently has one page: the
 * national commercial pillar. It exists because the English side of the site
 * had substantial motor *content* — five guides plus the classic, collection
 * and track-day articles — and no commercial destination at all. The footer's
 * "Car Insurance" entry pointed at an article, and the homepage's car service
 * card opened a generic contact form. This page is the destination those two
 * were missing; the articles stay exactly as they are.
 *
 * Editorial rules that apply to every string in this file:
 *
 *  - Nothing here states what "a Portuguese motor policy covers". Cover is
 *    decided by the insurer and by the wording of the individual policy, and
 *    the copy says so wherever a reader could otherwise assume otherwise.
 *  - The only figures quoted are the statutory minimum liability capitals and
 *    the legal basis, both of which the site already states in
 *    /en/blog/car-insurance-complete-guide/. No premium ranges appear here:
 *    pricing belongs to /en/blog/car-insurance-cost-portugal/, which owns that
 *    intent and keeps the numbers in one place.
 *  - Driving-licence and vehicle-import rules are described as processes that
 *    depend on the licence, the country and the vehicle, and every one of them
 *    routes to the IMT or to the guide that covers it. Deadlines change; this
 *    page does not restate them as if they were fixed.
 *  - Foreign no-claims history is never promised. "Some insurers", "depending
 *    on the documentation", and the honest observation that insurers weigh a
 *    foreign record differently.
 *  - No claim of independence beyond what the site already states: an
 *    ASF-registered broker that is not tied to a single insurer. Not "all
 *    insurers", not "the whole market".
 *  - No immigration, tax or legal advice.
 */

/** The commercial pillar this cluster is built around. */
export const PILLAR = '/en/car-insurance-portugal/';

/** Portuguese counterpart, used for the language switcher. */
export const PT_EQUIVALENT = '/seguros/auto/';

const DISCLAIM_NOTE =
  'Everything on this page is general guidance. Which covers are available, what they include, the excesses that apply and the exclusions that sit behind them differ between insurers and between policies. The wording of your own policy is what decides a claim.';

const TRUSTBAR = [
  '<strong>We are not tied to one insurer.</strong> We place motor business with insurers operating in the Portuguese market and compare what they will actually offer for your profile.',
  '<strong>Everything in English.</strong> The quote, the cover comparison, the renewal and the claim. Portuguese insurers issue policies in Portuguese by law; you will know what yours says before you sign it.',
  '<strong>We know the expat file.</strong> Foreign licences, imported vehicles, claims-experience letters and plates that have not changed over yet.',
  '<strong>A written comparison, normally within 24 hours.</strong> No cost, no obligation.',
];

export const PAGE = {
  slug: 'car-insurance-portugal',
  crumb: 'Car insurance',
  title: 'Car Insurance in Portugal | Cover for Expats &amp; Foreign Drivers',
  description:
    'Car insurance in Portugal arranged by an ASF-registered broker. Third-party liability, extended and own-damage cover explained in English, for expats, foreign licences and imported vehicles. Free quote.',
  keywords:
    'car insurance portugal, car insurance in portugal, portuguese car insurance, car insurance for expats portugal, expat car insurance portugal, car insurance for foreigners in portugal, car insurance broker portugal, car insurance quote portugal, insure a car in portugal',
  eyebrow: 'Motor &middot; Portugal',
  h1: 'Car Insurance in Portugal',
  heroSub:
    'Car insurance for expats, international residents and foreign drivers in Portugal &mdash; explained in plain English and arranged through an ASF-registered insurance broker. Tell us about the car and how you came to own it, and we will come back with a written comparison.',
  heroCta: 'Get a car insurance quote',
  heroTrust:
    '<strong>ASF-registered insurance broker n.&ordm; 425591790/3</strong> &middot; Not tied to a single insurer &middot; English throughout',
  topBarCta: 'Get a car insurance quote',
  stickyCta: 'Get a car insurance quote',
  whatsapp: 'Hello, I would like a car insurance quote for a vehicle in Portugal.',
  trustbar: TRUSTBAR,
  chatTopics: ['auto_geral', 'auto_expatriados', 'auto_luxo', 'auto_classicos', 'auto_colecao'],
  service: {
    name: 'Car insurance in Portugal',
    type: 'Motor insurance broking',
    description:
      'Broking of Portuguese motor insurance for private drivers in Portugal, including expats and international residents, foreign driving licences, imported vehicles and drivers arriving with a claims history earned abroad. Arranged and serviced in English by an ASF-registered insurance broker.',
  },

  sections: [
    {
      id: 'how-it-works',
      h2: 'How car insurance works in Portugal',
      blocks: [
        {
          kind: 'p',
          html:
            'Motor third-party liability has been compulsory in Portugal since 1980, and the regime in force is set by <em>Decreto-Lei n.&ordm; 291/2007</em>. Every vehicle registered here has to carry it, whoever owns the car and whatever passport they hold. Driving without it is an offence, and the consequences run from a fine to seizure of the vehicle and personal liability for the damage caused.',
        },
        {
          kind: 'p',
          html:
            'The statutory minimum liability capitals are &euro;6,450,000 for bodily injury and &euro;1,300,000 for material damage per claim. Those are the limits the insurer pays to <em>other people</em>. Nothing in the compulsory cover repairs your own car, and on its own it does nothing for you or your passengers. Everything above that line &mdash; theft, fire, glass, storm, own damage, assistance, a replacement vehicle &mdash; is bought on top, and how much of it you need depends on what the car is worth and what losing it for a month would cost you.',
        },
        {
          kind: 'p',
          html:
            'The second thing worth knowing early is that price in Portugal is largely a function of your recorded driving history. Insurers work on a <em>b&oacute;nus-malus</em> basis: a long claim-free record earns a discount, and an at-fault claim removes part of it. That is why arriving from another country with no local record is the single biggest thing that pushes an expat&rsquo;s first Portuguese premium up &mdash; and why the paperwork in the <a href="#no-claims">no-claims section below</a> is worth more than most people expect.',
        },
        { kind: 'note', html: DISCLAIM_NOTE },
      ],
    },

    {
      id: 'cover',
      h2: 'The three levels of cover, and how to choose between them',
      blocks: [
        {
          kind: 'p',
          html:
            'The Portuguese market is built around three tiers. Each one starts from the compulsory liability cover and adds to it. Insurers package the middle tier differently and give it different names, so the useful question is never "which tier is this?" but "which of these items is actually in the wording, and at what limit?"',
        },
        {
          kind: 'compare',
          columns: [
            {
              title: 'Third-party liability',
              points: [
                '<em>Responsabilidade civil</em> &mdash; the legal minimum.',
                'Pays for injury and damage you cause to other people.',
                'Nothing for your own vehicle, and typically nothing for you as the driver.',
                'Usually only sensible on a car whose market value is genuinely low.',
              ],
            },
            {
              title: 'Third party, extended',
              points: [
                'Liability plus a selection of named covers.',
                'Commonly offered: theft, fire, natural events, vandalism, glass and roadside assistance.',
                'What is in the package varies by insurer &mdash; two "extended" policies are rarely the same policy.',
                'Often the sensible middle ground for a car of moderate value.',
              ],
            },
            {
              title: 'Comprehensive / own damage',
              points: [
                '<em>Danos pr&oacute;prios</em> &mdash; adds damage to your own vehicle, including at-fault accidents.',
                'Written with an excess (<em>franquia</em>) and rated against the vehicle&rsquo;s declared value.',
                'Normally required by the lender on a financed or leased car.',
                'The tier where the declared value, the excess and the write-off basis matter most.',
              ],
            },
          ],
        },
        {
          kind: 'p',
          html:
            'Beyond the tier itself, most insurers offer optional covers that can be added or left out. Availability, limits and conditions differ, so treat this as the list of questions to ask rather than a list of things you have:',
        },
        {
          kind: 'covers',
          items: [
            { title: 'Theft and fire.', body: ' Frequently the first two covers added above the legal minimum, and often subject to security or parking conditions.' },
            { title: 'Glass and windscreen.', body: ' Usually a separate item with its own limit, and sometimes its own excess. Worth checking rather than assuming.' },
            { title: 'Natural events and vandalism.', body: ' Storm, hail, flood and malicious damage are named covers in Portuguese wordings, not automatic extensions of liability cover.' },
            { title: 'Own damage (<em>danos pr&oacute;prios</em>).', body: ' Repairs your own vehicle after a collision, including one that was your fault. Priced against the declared value and written with an excess.' },
            { title: 'Roadside assistance.', body: ' Breakdown, towing and, on some products, cover that continues outside Portugal. The territorial scope and the distance-from-home condition are the two things to read.' },
            { title: 'Replacement vehicle.', body: ' Where available, for a defined number of days and usually only in defined circumstances. It is not a standard inclusion.' },
            { title: 'Occupants and driver cover.', body: ' The compulsory cover protects third parties. Protection for the people in your own car is a separate item.' },
            { title: 'Legal protection.', body: ' Cover for the cost of pursuing or defending a claim. Low-cost, and routinely left out by people who later need it.' },
          ],
        },
        {
          kind: 'note',
          html:
            'If you want the long-form version of this comparison &mdash; including how the tiers behave on an older car and where the break-even sits &mdash; it is set out in our <a href="/en/blog/car-insurance-complete-guide/">complete guide to car insurance in Portugal</a>. For what a policy is likely to cost, see <a href="/en/blog/car-insurance-cost-portugal/">car insurance costs in Portugal</a>.',
        },
      ],
    },

    {
      id: 'expats',
      h2: 'Car insurance in Portugal for expats',
      blocks: [
        {
          kind: 'p',
          html:
            'Most of the difficulty international clients run into is not about cover at all. It is about the order in which Portuguese bureaucracy wants things done, and about a driving history that exists somewhere a Portuguese underwriter cannot see. Both are solvable, and neither is a reason to accept a worse policy.',
        },
        {
          kind: 'grid',
          items: [
            {
              title: 'You arrived with a foreign licence',
              body: 'Whether a licence can be used as it is, and for how long, depends on where it was issued and on your residence status. EU/EEA licences and licences from outside the EU are treated differently, and the exchange itself is done at the <abbr title="Instituto da Mobilidade e dos Transportes">IMT</abbr>. What matters for insurance is that the licence you hold is valid when the policy starts and when a claim happens. We ask about it before quoting rather than after.',
            },
            {
              title: 'Your no-claims record is in another country',
              body: 'Years of clean driving with a British, Dutch, German, Irish or American insurer do not transfer automatically. Some Portuguese insurers will take a foreign record into account if it is documented properly, and they do not all weigh it the same way. <a href="#no-claims">More on this below.</a>',
            },
            {
              title: 'The car is still on foreign plates',
              body: 'A vehicle brought into Portugal has a registration process ahead of it, and the insurance question changes as the vehicle moves through it. The gap between arriving and holding a Portuguese <em>matr&iacute;cula</em> is exactly where people end up driving on cover they have not checked.',
            },
            {
              title: 'You are buying a car after arriving',
              body: 'The simplest case, and the one where the price still depends on your history rather than the car. Cover has to be in force before the vehicle is used, so it is worth starting the quote before you collect it.',
            },
            {
              title: 'The paperwork is not finished yet',
              body: 'A NIF makes issuing a policy considerably easier and a Portuguese address determines your rating postcode. Neither has to be complete before you ask for a quote &mdash; tell us what stage you are at and we will tell you what is possible now and what has to wait.',
            },
            {
              title: 'Nobody has explained the wording to you',
              body: 'Portuguese policies use terms &mdash; <em>franquia</em>, <em>b&oacute;nus-malus</em>, <em>danos pr&oacute;prios</em>, <em>carta verde</em> &mdash; that do not map neatly onto their English equivalents. We translate the wording, not just the covering letter.',
            },
          ],
        },
        {
          kind: 'note',
          html:
            'The full walkthrough for new arrivals &mdash; licences, documents, imported vehicles and the mistakes that cost the most &mdash; is in <a href="/en/blog/car-insurance-expatriates/">car insurance for expatriates in Portugal</a>. If the car is one of several things you need to sort out after moving, start at <a href="/en/expat-insurance-portugal/">insurance for expats in Portugal</a>. Licence validity and exchange deadlines are set by the IMT and change from time to time; check your own case with them rather than relying on any summary, including ours.',
        },
      ],
    },

    {
      id: 'imported',
      h2: 'Imported and foreign-registered vehicles',
      blocks: [
        {
          kind: 'p',
          html:
            'Bringing a car with you is common and the insurance side of it is manageable, provided the cover matches the vehicle&rsquo;s actual registration status at each point. There are broadly three states, and they are not interchangeable:',
        },
        {
          kind: 'steps',
          items: [
            { title: 'Still on foreign plates, insured abroad.', body: 'A policy issued in another country is written for a vehicle registered in that country. Whether it continues to respond in Portugal, and for how long, is a question for that insurer &mdash; in writing, before you rely on it.' },
            { title: 'Registration in progress.', body: 'While the vehicle is being legalised and re-registered, insurers can generally arrange cover against the foreign registration or the pending Portuguese plate, so there is no uninsured window. This is the stage worth planning rather than improvising.' },
            { title: 'Portuguese <em>matr&iacute;cula</em> issued.', body: 'Once the vehicle carries a Portuguese plate it needs a policy from an insurer operating in the Portuguese market. Cover written against the old foreign registration is no longer the right contract for it.' },
          ],
        },
        {
          kind: 'p',
          html:
            'The registration process itself &mdash; customs where applicable, ISV, inspection and the IMT &mdash; is administrative rather than an insurance matter, and any exemptions depend on your own circumstances. Keep the foreign registration document, the customs paperwork and the proof of the import request together: insurers use them to identify the vehicle and to date your risk correctly.',
        },
        {
          kind: 'note',
          html:
            'The customs, ISV and matr&iacute;cula sequence, with the deadline attached to each step, is set out in <a href="/en/blog/importing-a-car-to-portugal/">importing a car to Portugal</a>. The shorter version is in the <a href="/en/blog/car-insurance-expatriates/#imported-vehicles-registration-and-insurance">imported vehicles section</a> of our expatriate guide, and the foreign-plate question is covered in the <a href="/en/blog/car-insurance-complete-guide/#pillar-2-how-to-insure-a-car-with-foreign-plates">complete guide</a>. If the vehicle is a classic or has been restored, the registration route and the valuation basis are both different &mdash; see <a href="/en/blog/classic-collector-cars-portugal-matriculation-agreed-value/">classic and collector cars in Portugal</a>.',
        },
      ],
    },

    {
      id: 'no-claims',
      h2: 'Foreign no-claims history',
      blocks: [
        {
          kind: 'p',
          html:
            'This is the item most often left on the table. A Portuguese insurer that cannot see any driving record will rate you from the base tier, which is materially more expensive than the price the same driver would be offered with a documented clean history. Some insurers will take a foreign record into account. Not all of them do, and those that do apply their own rules to how much of it counts.',
        },
        {
          kind: 'covers',
          items: [
            { title: 'Ask before you cancel.', body: ' Request a claims-experience letter from your current insurer <em>while the policy is still live</em>. Once it has been cancelled the document is usually still obtainable, but it becomes slower and more awkward exactly when you are in a hurry.' },
            { title: 'Get it in the right form.', body: ' A statement on the insurer&rsquo;s letterhead giving the number of consecutive claim-free years and confirming the at-fault claims position over the relevant period. In English, or with a certified translation.' },
            { title: 'Present it at quotation.', body: ' A discount has to be built into the price when the risk is rated. Producing the letter after the policy has been issued is a much weaker position than producing it before.' },
            { title: 'Expect variation.', body: ' Insurers weigh a foreign record differently, and some are more receptive to particular markets than others. That variation is precisely why comparing several proposals is worth more for an expat than it is for a local driver.' },
          ],
        },
        {
          kind: 'note',
          html:
            'We cannot promise that a given insurer will accept a given foreign record &mdash; that is an underwriting decision and it depends on the documentation. What we can do is put the evidence in front of the right insurers in the form they want it. The mechanics are set out in <a href="/en/blog/car-insurance-complete-guide/#pillar-3-transferring-your-no-claims-bonus-bonus-malus">transferring your no-claims bonus</a>.',
        },
      ],
    },

    {
      id: 'price',
      h2: 'What moves the price',
      blocks: [
        {
          kind: 'p',
          html:
            'Two drivers with the same car can be quoted very different premiums, and almost all of the difference sits in this list. None of it is negotiable in itself &mdash; but which insurer you put it in front of is.',
        },
        {
          kind: 'grid',
          items: [
            { title: 'Your recorded history', body: 'The <em>b&oacute;nus-malus</em> position, including anything a Portuguese insurer is prepared to recognise from abroad. Usually the largest single factor.' },
            { title: 'The driver', body: 'Age, how long you have held a licence, and the claims of the past few years. Young and newly licensed drivers pay significantly more.' },
            { title: 'The vehicle', body: 'Value, age, engine, power and how expensive it is to repair. High-performance and high-value cars cost more to insure and are underwritten more carefully.' },
            { title: 'Where it lives', body: 'The postcode where the car is kept, and whether it sits in a garage, on a private drive or in the street.' },
            { title: 'How it is used', body: 'Annual mileage, commuting, and whether the car is ever used for work. Undeclared professional use is a claim problem, not a saving.' },
            { title: 'Cover and excess', body: 'The tier you choose, the options attached to it, the declared value and the excess you accept on own damage.' },
          ],
        },
        {
          kind: 'note',
          html:
            'For indicative figures and what actually reduces a premium without cutting protection, see <a href="/en/blog/car-insurance-cost-portugal/">car insurance cost in Portugal</a>. If you drive for a ride-hailing platform, a private policy is the wrong contract entirely &mdash; that is <a href="/en/insurance/tvde/">TVDE insurance</a>.',
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
            { title: 'The vehicle.', body: 'Make, model, year and, if it already has one, the Portuguese registration. If it is still on foreign plates, tell us which country and what stage the import is at.' },
            { title: 'The main driver.', body: 'Age, the country that issued the licence and roughly how long it has been held. Any additional drivers who will use the car regularly.' },
            { title: 'Your claims history.', body: 'Claim-free years and whether you have &mdash; or can obtain &mdash; a letter from your previous insurer. Even a partial record is worth presenting.' },
            { title: 'Where the car is kept.', body: 'The postcode, and whether it is garaged. This is what determines your rating area.' },
            { title: 'What you have now.', body: 'Your current policy, if there is one, and its renewal date. We compare against it rather than around it.' },
          ],
        },
        {
          kind: 'p',
          html:
            'You do not need all of it to start. A quote can begin with the vehicle and the driver, and the rest can follow as it comes through. You will get a written comparison setting out what each insurer will and will not do, where the excesses sit, and which of the optional covers are actually in each proposal.',
        },
      ],
    },

    {
      id: 'situations',
      h2: 'Which situation are you in?',
      blocks: [
        {
          kind: 'cluster',
          items: [
            { href: '/en/blog/car-insurance-expatriates/', title: 'I am moving to Portugal with my car', blurb: 'Licences, documents and what happens to cover while the vehicle changes registration.' },
            { href: '#quote-form', title: 'I am buying a car in Portugal', blurb: 'Cover has to be in force before you drive it away. Start here and we will have it ready.' },
            { href: '/en/blog/car-insurance-expatriates/#imported-vehicles-registration-and-insurance', title: 'I am importing a vehicle', blurb: 'The three registration states, and which policy belongs to each of them.' },
            { href: '/en/blog/british-expats-brexit-insurance-portugal/', title: 'I am British and moved after Brexit', blurb: 'What changed for British residents in Portugal, across motor and the rest of the file.' },
            { href: '/en/blog/car-insurance-complete-guide/#pillar-3-transferring-your-no-claims-bonus-bonus-malus', title: 'I have foreign no-claims history', blurb: 'The document to ask for, when to ask for it, and how far it travels.' },
            { href: '#quote-form', title: 'I am already insured in Portugal', blurb: 'Send us the current policy and the renewal date and we will review it against the market.' },
            { href: '/en/blog/luxury-car-insurance-portugal/', title: 'The car is worth more than a retail policy will accept', blurb: 'High-value and performance cars, individual underwriting and agreed value.' },
            { href: '/en/insurance/tvde/', title: 'I drive for Uber, Bolt or Free Now', blurb: 'Private cover does not respond to ride-hailing work. This is the policy that does.' },
          ],
        },
        {
          kind: 'note',
          html:
            'Not on the list? Say so in the form. Fleets, company-owned vehicles, classic collections and vehicles kept in Portugal by owners who live elsewhere all come up regularly, and they are all better handled by asking than by guessing.',
        },
      ],
    },

    {
      id: 'broker',
      h2: 'Why arrange it through a broker',
      blocks: [
        {
          kind: 'p',
          html:
            'Adler &amp; Rochefort is an insurance broker registered with the ASF (<em>Autoridade de Supervis&atilde;o de Seguros e Fundos de Pens&otilde;es</em>) under no. 425591790/3. A registered intermediary is required to act in the client&rsquo;s interest, and we are not tied to a single insurer. In practice that means:',
        },
        {
          kind: 'covers',
          items: [
            { title: 'Several proposals, not one.', body: ' We approach insurers operating in the Portuguese market and compare what each will actually offer for your profile &mdash; which matters more than usual when your history was earned abroad.' },
            { title: 'The wording explained.', body: ' What is covered, what the excess is, and which exclusion would have applied. In English, before you sign, not after a claim.' },
            { title: 'Your paperwork positioned properly.', body: ' Claims-experience letters, foreign registration documents and import evidence presented in the form underwriters want them.' },
            { title: 'Someone to call when it goes wrong.', body: ' We handle the claim with the insurer on your behalf, which removes both the language barrier and the follow-up.' },
            { title: 'Changes during the policy year.', body: ' New plate, new address, a driver added, a car sold. These are the changes people put off and then forget, and they matter at claim time.' },
          ],
        },
        {
          kind: 'note',
          html:
            'We do not have access to every insurer in Portugal and we will not pretend otherwise. If the policy you already hold is the better one, we will tell you so.',
        },
      ],
    },
  ],

  form: {
    heading: 'Get a car insurance quote',
    sub: 'Tell us about the car and how you came to own it. The registration status and your claims history change the price more than anything else on this form.',
    name: 'car-insurance-quote',
    gaField: 'registration-status',
    submit: 'Get my quote',
    fields: [
      [
        { name: 'name', label: 'Full name', required: true, placeholder: 'Jane Smith', autocomplete: 'name' },
        { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'you@example.com', autocomplete: 'email' },
      ],
      [
        { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', required: true, placeholder: '+351 000 000 000', autocomplete: 'tel', inputmode: 'tel' },
        { name: 'postcode', label: 'Postcode where the car is kept', required: true, placeholder: '8600-324', autocomplete: 'postal-code' },
      ],
      [
        { name: 'vehicle', label: 'Make, model and year', required: true, placeholder: 'e.g. Volkswagen Golf 2019' },
        {
          name: 'registration-status',
          label: 'Registration status',
          type: 'select',
          required: true,
          placeholder: 'Select one',
          options: [
            'Portuguese plate already',
            'Foreign plate, import under way',
            'Foreign plate, import not started',
            'Buying a car in Portugal, not chosen yet',
            'Classic or historic vehicle',
            'Not sure',
          ],
        },
      ],
      [
        { name: 'licence-country', label: 'Country that issued your licence', required: true, placeholder: 'e.g. United Kingdom' },
        {
          name: 'claims-history',
          label: 'Claims history',
          type: 'select',
          placeholder: 'Select one',
          options: [
            'Claim-free, letter from previous insurer available',
            'Claim-free, no letter yet',
            'One or more claims in the last 5 years',
            'Already have a Portuguese no-claims record',
            'Newly licensed / no history yet',
          ],
        },
      ],
      [
        {
          name: 'cover-level',
          label: 'Cover you are looking for',
          type: 'select',
          placeholder: 'Select one',
          options: [
            'Not sure &ndash; advise me',
            'Third-party liability only',
            'Third party, extended',
            'Comprehensive / own damage',
          ],
        },
        {
          name: 'current-policy',
          label: 'Current insurance',
          type: 'select',
          placeholder: 'Select one',
          options: [
            'No policy yet',
            'Insured in Portugal, renewal coming up',
            'Insured abroad on this vehicle',
            'Not sure what I have',
          ],
        },
      ],
      {
        name: 'message',
        label: 'Anything we should know?',
        type: 'textarea',
        placeholder: 'Additional drivers, annual mileage, whether the car is garaged, or where you are in the import process.',
      },
    ],
  },

  faq: [
    {
      q: 'Is car insurance compulsory in Portugal?',
      a: 'Yes. Motor third-party liability has been compulsory since 1980, under the regime set by Decreto-Lei n.&ordm; 291/2007, and it applies to every vehicle registered in Portugal regardless of the owner&rsquo;s nationality. The statutory minimum capitals are &euro;6,450,000 for bodily injury and &euro;1,300,000 for material damage per claim.',
    },
    {
      q: 'Can I insure a car in Portugal with a foreign driving licence?',
      a: 'In general yes, and it is a routine situation. What varies is how long a particular licence can be used before it has to be exchanged, which depends on where it was issued and on your residence status &mdash; that is a matter for the IMT rather than for the insurer. What the insurer needs is that the licence held is valid at the time the policy is taken out and at the time of a claim, so we ask about it before quoting.',
    },
    {
      q: 'Will my no-claims bonus from another country be recognised?',
      a: 'Some insurers will take a documented foreign record into account, and they do not all treat it the same way. You will normally need a claims-experience letter from your previous insurer stating your consecutive claim-free years. It is not a guarantee &mdash; it is an underwriting decision that depends on the insurer and on the evidence &mdash; but it is worth requesting before you cancel the old policy.',
    },
    {
      q: 'Can I insure a car that still has foreign plates?',
      a: 'While a vehicle is being legalised and re-registered, insurers can generally arrange cover against the foreign registration or the pending Portuguese plate, so there is no gap. Once the Portuguese registration has been issued, the vehicle needs a policy from an insurer operating in the Portuguese market; a policy written against the old foreign registration is no longer the right contract for it.',
    },
    {
      q: 'What is the difference between third-party and comprehensive cover?',
      a: 'Third-party liability pays for injury and damage you cause to other people and covers nothing of your own. Comprehensive cover, called <em>danos pr&oacute;prios</em>, adds damage to your own vehicle including in an accident that was your fault. It carries an excess and is rated against the vehicle&rsquo;s declared value. Between the two sits an extended tier that adds named covers such as theft, fire, glass and assistance &mdash; but which of those are included depends on the insurer and the policy.',
    },
    {
      q: 'Is roadside assistance included?',
      a: 'Not automatically. Assistance is an option on most Portuguese motor products rather than a universal inclusion, and the ones that do include it differ on the territorial scope and on how far from home the cover starts. It is one of the items we check explicitly on every proposal.',
    },
    {
      q: 'Do I need a NIF before I can take out a policy?',
      a: 'A Portuguese tax number makes issuing a policy considerably easier, and a Portuguese address determines the rating postcode. Neither has to be in place before you ask for a quote &mdash; tell us where you are in the process and we will tell you what can be arranged now and what has to wait.',
    },
    {
      q: 'Can you insure a car if I live outside Portugal?',
      a: 'It depends on the vehicle&rsquo;s registration and on the insurer, and it is not something to assume in either direction. Tell us where you are resident and where the car is registered and kept, and we will tell you honestly whether we can place it before you spend any time on it.',
    },
    {
      q: 'How long does a quote take?',
      a: 'A written comparison normally within 24 hours. High-value vehicles, classics and anything needing an individual valuation can take longer because they are referred to an underwriter, and we will say so at the outset if yours is one of them.',
    },
  ],

  related: [
    {
      h2: 'Motor guides worth reading first',
      blocks: [
        {
          kind: 'guides',
          items: [
            { href: '/en/blog/car-insurance-complete-guide/', text: 'Car insurance in Portugal: the complete guide', note: 'cover types, foreign plates, no-claims and documents, end to end' },
            { href: '/en/blog/car-insurance-expatriates/', text: 'Car insurance for expatriates in Portugal', note: 'licences, imported vehicles and the mistakes that cost most' },
            { href: '/en/blog/car-insurance-cost-portugal/', text: 'What car insurance costs in Portugal', note: 'indicative ranges and what moves them' },
            { href: '/en/blog/individual-car-insurance/', text: 'What to check before signing a motor policy', note: 'the five things people find out about too late' },
            { href: '/en/blog/track-days-performance-driving-motor-policy-exclusion/', text: 'The track-day exclusion in your motor policy' },
            { href: '/en/blog/british-expats-brexit-insurance-portugal/', text: 'British residents in Portugal after Brexit' },
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
            { href: '/en/expat-insurance-portugal/', title: 'Insurance for expats in Portugal', blurb: 'Start here if the car is one of several things you need to arrange after moving.' },
            { href: '/en/insurance/tvde/', title: 'TVDE insurance', blurb: 'Ride-hailing work needs its own contract. A private motor policy will not respond.' },
            { href: '/en/private-clients/', title: 'High-value and collector vehicles', blurb: 'Agreed value, individual underwriting and collections held under one contract.' },
            { href: '/en/home-insurance-quote/', title: 'Home insurance in Portugal', blurb: 'The other policy almost every new arrival needs, arranged the same way.' },
          ],
        },
      ],
    },
  ],
};

export const PAGES = [PAGE];
