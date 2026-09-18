/**
 * Content for the five new geographic articles in the EN housing cluster.
 *
 * Kept apart from the generator so the prose can be edited without touching the
 * assembly code. Every `body` and `faq` entry is written for the specific
 * underwriting question that makes the location different — the whole point of
 * these pages is that they are not the pillar with the place name swapped in.
 */

const CTA = (title, sub) => ({ title, sub });

export const ARTICLES = [
  // ---------------------------------------------------------------------------
  // A — Comporta, Carvalhal and Melides
  // ---------------------------------------------------------------------------
  {
    slug: 'home-insurance-comporta-melides',
    tag: 'Comporta',
    heroLabel: 'Comporta &amp; Melides',
    gradient: 'linear-gradient(135deg,#6B5B3E 0%,#C9B98A 100%)',
    readingTime: 11,
    title: 'Home insurance in Comporta and Melides: thatch, timber and what insurers ask first',
    metaTitle:
      'Home Insurance in Comporta &amp; Melides: Thatch, Timber and Rebuild Cost | Adler &amp; Rochefort',
    description:
      'Thatched roofs, timber structure and extensive glazing put Comporta and Melides outside a standard Portuguese multi-risk wording. What is declined, what is placed with conditions, and how rebuild cost is set.',
    excerpt:
      'Thatch, timber and glazing put this coast outside a standard multi-risk wording. What insurers decline, what they place with warranties, and why rebuild cost here ignores national averages.',
    keywords:
      'home insurance Comporta, Melides house insurance, thatched roof insurance Portugal, colmo seguro habitação, Carvalhal villa insurance, Alentejo coast home insurance',
    cta: CTA(
      'A thatched or timber house on the Comporta coast?',
      'These are placed with underwriters individually. Send us the construction details and we will tell you who will write it.'
    ),
    intro: `<p>The Comporta peninsula &mdash; Comporta itself, Carvalhal, Brejos, Torre, Pego and on down to Melides &mdash; is one of the few places in Portugal where the first answer from a mainstream insurer is often no. Not because the properties are poor risks in any ordinary sense, but because the architecture that defines the area sits outside the construction categories a retail <em>multirriscos</em> wording was written around.</p>
<p>The practical effect is that a house here is <strong>placed</strong> rather than quoted: it goes to underwriters individually, terms come back with conditions attached, and those conditions are part of the cover. Getting the declaration right at the start is worth more than the premium difference between any two insurers.</p>`,
    body: [
      [
        'Thatch (<em>colmo</em>): the line that decides the placement',
        `<p>The reed and rush thatch that gives the area its look is the single most important line on a Comporta proposal form. <strong>Several mainstream Portuguese insurers do not underwrite thatched roofs at all</strong> &mdash; the risk is declined when the construction is declared, not loaded. The insurers that will write it attach conditions, and the recurring ones are:</p>
<ul><li><strong>Chimneys and flues</strong> &mdash; a minimum height above the ridge, a lined flue, spark arrestors fitted, and sweeping certified annually by a professional.</li><li><strong>Separation distances</strong> between the thatched structure and any other building, barbecue, wood-fired oven or fire pit.</li><li><strong>An electrical inspection certificate</strong>, because fire originating in or spreading to the roof space is precisely the loss being priced.</li><li><strong>Fire detection</strong>, and on larger properties sometimes a dedicated water supply or a sprinkler arrangement over the thatch.</li></ul>
<p>These are warranties, not recommendations. A property whose chimney has not been swept for three seasons can hold a policy that looks entirely valid and have no cover for the one event it was bought for.</p>
<p>The related trap is the <strong>undeclared thatch</strong>. A great many properties here have a tiled main house and a thatched annexe, pool house or shaded dining structure. If the proposal says conventional construction, that structure may not be insured at all &mdash; and where a fire starts there and spreads, the insurer is entitled to ask whether the risk it accepted was the risk that existed.</p>`,
      ],
      [
        'Timber structure and extensive glazing',
        `<p>The other half of the local vocabulary: timber frame and cladding, large sliding glazed elevations facing the pine or the rice fields, low-pitched or flat roofs, and the pool close to the house. Both matter, for different reasons.</p>
<p><strong>Rebuild cost.</strong> Timber construction to the standard actually built here is not cheaper than masonry &mdash; it is usually more expensive, because it is specified rather than standard, and because the glazing at these spans is bespoke with long lead times. A sum insured derived from a per-square-metre table describes a different house.</p>
<p><strong>Fire exposure.</strong> A timber structure is not uninsurable, but it changes the rate and it changes what the underwriter wants to know about heating, wood burners, outdoor cooking and the distance between the house and anything that produces a flame.</p>
<p>Glass is also, by volume, the most frequently claimed item on properties like these. Confirm the glazing sub-limit, whether it applies per pane or per event, and whether accidental damage to fixed glass is included or elective &mdash; on a house with a twelve-metre sliding elevation, that one line can be the difference between a repair and a rebuild of the whole opening.</p>`,
      ],
      [
        'Distance to the fire station, and what &ldquo;isolated&rdquo; means on a proposal',
        `<p>Ask what the real response time is rather than the distance on a map. The <em>bombeiros</em> serving this stretch are based in Gr&acirc;ndola, Alc&aacute;cer do Sal and Santiago do Cac&eacute;m, the settlements are dispersed, and much of the final approach is sand track. Underwriters ask for the distance to the nearest fire station and to the nearest hydrant, and both figures move the terms.</p>
<p>The surrounding land is the other half of the answer. This is standing pine plantation on one side and rice fields on the other &mdash; not scrub. In a bad summer, the difference between a fifteen-minute and a forty-minute response is the difference between a damaged roof and a total loss, and the underwriter prices it that way.</p>`,
      ],
      [
        'Rebuild cost here has little to do with national averages',
        `<p>The default per-square-metre tables that banks and comparison sites apply produce a figure that is simply unrelated to what it costs to rebuild on this coast. Worse, the limitation is not only the price of materials: <strong>finding the labour is itself a constraint on the claim</strong>. The carpenters, thatchers and finishers who built these houses are a small group, they are booked months ahead, and after any regional event they are booked further.</p>
<p>A sum insured that assumes standard Alentejo construction rates will underinsure a Comporta house by a wide margin, and the <em>regra proporcional</em> then reduces <em>every</em> settlement in the same proportion &mdash; including partial claims well inside the sum insured, not merely a total loss. The mechanics are set out in our guide to <a href="/en/blog/luxury-home-insurance-portugal/">high-value home insurance in Portugal</a>, and the drivers behind the figures in the <a href="/en/blog/home-insurance-cost-algarve-price-drivers/">cost guide</a>.</p>`,
      ],
      [
        'Empty for most of the year',
        `<p>Occupancy on this coast is seasonal and concentrated: July and August, a handful of weekends either side, Christmas. That pattern crosses the unoccupancy threshold in most Portuguese wordings, and once it does, theft cover is typically suspended outright and water damage restricted &mdash; the two perils most likely to occur in an empty house. The clause, and the ways to keep the cover intact, are covered in <a href="/en/blog/second-homes-empty-months-unoccupancy-clause-voids-cover/">second homes that sit empty for months</a>.</p>`,
      ],
      [
        'One of the highest seismic zones on the mainland',
        `<p>The Setúbal and Alcácer do Sal area sits in one of the highest seismic bands in mainland Portugal &mdash; materially higher than the Algarve interior. Earthquake cover in a Portuguese <em>multirriscos</em> is elective, it carries its own excess (commonly a percentage of the sum insured rather than a fixed figure), and it is routinely dropped to save premium in exactly the places where the exposure is greatest. Our note on <a href="/en/blog/earthquake-cover-algarve-buildings/">earthquake cover and Portuguese buildings</a> explains how the excess works before you decide.</p>`,
      ],
    ],
    table: [
      ['Property', 'Indicative annual premium'],
      ['Tiled two- or three-bedroom house, conventional construction', '&euro;280&ndash;&euro;520'],
      ['Timber-frame house with extensive glazing, no thatch', '&euro;550&ndash;&euro;1,100'],
      ['Thatched house, conditions met and certified', 'from &euro;1,400, individually underwritten'],
      ['Thatched house, conditions not met', 'frequently declined'],
      ['Estate with main house, annexes and pool', 'from &euro;2,500, individually underwritten'],
    ],
    closing: `<p>We are an ASF-registered, English-speaking insurance broker. Thatch and timber are placements rather than quotes, so the useful first step is a description of the construction &mdash; roof, structure, glazing, chimneys, heating and what else stands on the plot. Send that through the form below or on WhatsApp and you will have a written answer, including who will and will not write it, within 24 hours.</p>`,
    faq: [
      [
        'Will a Portuguese insurer cover a thatched house in Comporta?',
        'Some will and several will not. A number of mainstream Portuguese insurers decline thatch outright at the point the construction is declared. The insurers that do write it attach conditions — chimney height and lining, annual certified sweeping, spark arrestors, separation distances from other structures and open fires, and an electrical inspection certificate. Those conditions are part of the cover, so a property that stops meeting them stops being insured for fire.',
      ],
      [
        'Do I have to declare a thatched annexe if the main house is tiled?',
        'Yes. Declaring the property as conventional construction because the main roof is tiled leaves the annexe potentially uninsured, and gives the insurer a non-disclosure argument if a fire starts there and spreads to the main house. Declare every structure on the plot and how each one is roofed.',
      ],
      [
        'Why is the rebuild cost here so much higher than the national average?',
        'Because the specification is not standard and the trades are not interchangeable. Timber structure, bespoke glazing at large spans, thatch and specialist finishes all cost more than the per-square-metre tables assume, and the small number of people able to rebuild to the same standard is itself a limitation on how quickly and at what price a claim can be settled.',
      ],
      [
        'Is earthquake cover worth adding in Comporta and Melides?',
        'This is one of the highest seismic zones on the mainland, so the exposure is real. Earthquake cover is elective in a Portuguese multi-risk policy and carries its own excess, often expressed as a percentage of the sum insured rather than a fixed amount. Check the excess before deciding — it is the figure that determines whether the cover would actually pay on a moderate event.',
      ],
      [
        'The house is empty from September to June. Does that affect the policy?',
        'Almost certainly. Most Portuguese wordings define a property as unoccupied after 30, 60 or 90 consecutive days, and once that threshold is crossed theft cover is typically suspended and water damage restricted. A policy written from the outset as a seasonal second home, with a named key-holder and the water turned off between visits, keeps the cover intact for a modest loading.',
      ],
    ],
    related: [
      ['/en/blog/second-homes-empty-months-unoccupancy-clause-voids-cover/', 'Second Homes', 'Second homes that sit empty for months: the unoccupancy clause that voids your cover'],
      ['/en/blog/earthquake-cover-algarve-buildings/', 'Seismic', 'Earthquake cover for Portuguese buildings: the elective nobody reads'],
      ['/en/blog/luxury-home-insurance-portugal/', 'High-Value Homes', 'High-value home insurance in Portugal: where the standard policy stops'],
    ],
    chatTopics: 'casa_geral,comporta',
  },

  // ---------------------------------------------------------------------------
  // B — Tróia and the Setúbal peninsula
  // ---------------------------------------------------------------------------
  {
    slug: 'home-insurance-troia-setubal',
    tag: 'Tr&oacute;ia',
    heroLabel: 'Tr&oacute;ia &amp; Set&uacute;bal',
    gradient: 'linear-gradient(135deg,#1F4E5F 0%,#8FBFC9 100%)',
    readingTime: 10,
    title: 'Home insurance in Tr&oacute;ia and the Set&uacute;bal peninsula: where the condominium policy stops',
    metaTitle:
      'Home Insurance in Tr&oacute;ia &amp; the Set&uacute;bal Peninsula | Adler &amp; Rochefort',
    description:
      'Almost every home on Tr&oacute;ia sits inside a development with its own multi-risk policy, and almost every owner over-estimates what it covers. Where the condominium policy ends and yours begins.',
    excerpt:
      'The condominium policy insures the building. Interiors, fit-out, contents and your liability to the flat below are yours — and that line is further inside the apartment than owners assume.',
    keywords:
      'home insurance Tróia, Setúbal peninsula home insurance, condominium insurance Tróia, seguro habitação Troia, Comporta Setúbal property insurance',
    cta: CTA(
      'An apartment or villa on Tr&oacute;ia?',
      'Send us the condominium policy and a note of what you fitted out. We will show you exactly where the two policies meet.'
    ),
    intro: `<p>Almost all residential property on the Tr&oacute;ia peninsula sits inside a development that carries its own <em>multirriscos</em> policy, and almost every owner we speak to over-estimates what that policy does. The condominium insurance is real cover, it is compulsory, and on most Tr&oacute;ia developments it is broader than the legal minimum. It is still not your home insurance.</p>
<p>This page is about where the line falls. The general position is in <a href="/en/blog/condominium-insurance-doesnt-cover-contents/">what condominium insurance does not cover</a> and the administrator&rsquo;s side of it in our guide to <a href="/en/condominium-insurance-algarve/">condominium insurance</a>; what follows is the version that matters on a peninsula of seasonal, sea-facing, largely fitted-out property.</p>`,
    body: [
      [
        'What the development&rsquo;s policy actually covers',
        `<p>Under the <em>propriedade horizontal</em> regime the compulsory minimum is fire and associated perils on the common parts. Most Tr&oacute;ia developments carry considerably more than that &mdash; a full <em>multirriscos</em> on the structure, roof, fa&ccedil;ade, common areas, lifts and common installations, plus the building&rsquo;s own liability. Ask the administrator for the <em>condi&ccedil;&otilde;es particulares</em> rather than the certificate: the certificate proves a policy exists, the particular conditions say what it does.</p>
<p>Two figures on that document are worth finding. The <strong>sum insured for the building</strong>, because if the block is collectively underinsured the proportional rule reduces every owner&rsquo;s share of every settlement. And the <strong>excess</strong>, because it is distributed among owners and a private policy can be arranged to absorb your share of it.</p>`,
      ],
      [
        'Where your responsibility starts',
        `<p>Further inside the apartment than most owners expect. Private, on almost every wording:</p>
<ul><li>Interior finishes &mdash; floors, wall coverings, ceilings, paint.</li><li>The fitted kitchen, wardrobes and all joinery.</li><li>Sanitary ware, taps and the visible plumbing inside the fraction.</li><li>All contents, from furniture to what is in the wardrobe.</li><li><strong>Your liability to neighbours</strong>, which produces the largest bills of anything on this list.</li></ul>
<p>That last item is the one to internalise. Water escaping from your bathroom into the apartment below is your problem, not the condominium&rsquo;s, and on a fitted-out Tr&oacute;ia apartment the downstairs repair alone can run well past &euro;20,000 before anyone looks at your own floor.</p>
<p>The second gap is <strong>improvements</strong>. The condominium policy insures the building as the developer handed it over. If you re-fitted the apartment above that standard &mdash; and on this peninsula most owners have &mdash; the difference is yours to insure and it is rarely declared.</p>`,
      ],
      [
        'Storm, sea and a sand peninsula',
        `<p>Tr&oacute;ia is a sandspit. Wind arrives off the Atlantic across the mouth of the Sado with very little to break it, and the coastline itself is a documented, actively monitored erosion process. Portuguese wordings treat these as two entirely different things, and the distinction matters more here than almost anywhere on the coast.</p>
<p><strong>Storm damage is covered.</strong> <strong>Gradual coastal erosion is excluded</strong>, across the market, without exception &mdash; it is a certainty rather than a risk, and no insurer prices certainties. Sea inundation and storm surge sit somewhere between the two, and some wordings exclude them while covering rainwater ingress under the same storm heading. For a ground-floor or sea-facing property, that is a line to confirm word by word rather than infer. Our article on <a href="/en/blog/coastal-clifftop-properties-algarve-subsidence-erosion-flood/">coastal and clifftop property</a> goes through how insurers separate the three.</p>`,
      ],
      [
        'High seasonal vacancy',
        `<p>Occupancy on Tr&oacute;ia is concentrated into the summer and a handful of weekends. Most Portuguese policies restrict theft and water damage once a property has been unoccupied beyond a stated number of consecutive days, and a development&rsquo;s concierge or security presence does not by itself satisfy the clause &mdash; what satisfies it is usually a named key-holder attending at stated intervals. The full treatment is in <a href="/en/blog/second-homes-empty-months-unoccupancy-clause-voids-cover/">second homes that sit empty for months</a>.</p>`,
      ],
      [
        'Maximum seismic band',
        `<p>The Set&uacute;bal peninsula sits in the highest seismic zone on the Portuguese mainland. Earthquake cover is elective in a <em>multirriscos</em> and it needs checking on two policies here, not one: yours and the condominium&rsquo;s. A building policy without seismic cover leaves every owner exposed on the structure regardless of what their private policy says, and it is a question worth raising at the assembly. See <a href="/en/blog/earthquake-cover-algarve-buildings/">earthquake cover for Portuguese buildings</a>.</p>`,
      ],
    ],
    table: [
      ['Property', 'Indicative annual premium'],
      ['Two-bedroom apartment, contents and fit-out only', '&euro;140&ndash;&euro;260'],
      ['Three-bedroom apartment, high specification fit-out', '&euro;260&ndash;&euro;480'],
      ['Townhouse within a development, building and contents', '&euro;380&ndash;&euro;700'],
      ['Detached villa, private plot and pool', '&euro;700&ndash;&euro;1,500'],
      ['Apartment let short-term', '&euro;350&ndash;&euro;650'],
    ],
    closing: `<p>We are an ASF-registered, English-speaking insurance broker and we read condominium policies for a living. Send us the development&rsquo;s <em>condi&ccedil;&otilde;es particulares</em> and a note of what you fitted out, and we will map the two policies against each other and quote the gap. Written reply within 24 hours, in English.</p>`,
    faq: [
      [
        'If the condominium already has insurance, do I need my own policy?',
        'Yes. The condominium policy insures the building as a shared structure. It does not insure your interior finishes, your fitted kitchen, your contents, or your liability to the apartment below. On a fitted-out Tróia apartment those are the larger part of what you would actually have to replace.',
      ],
      [
        'What happens if water from my apartment damages the one below?',
        'That is your liability, not the condominium’s, and it is settled from the liability section of your private policy. It is the most common claim in Portuguese apartment buildings and the most common reason an owner discovers they had no private cover at all.',
      ],
      [
        'Does the condominium policy cover the kitchen I installed?',
        'Almost never. The building policy insures the property as the developer handed it over. Anything you added above that standard — kitchen, joinery, upgraded finishes, air conditioning — has to be declared and insured on your own policy, and it is the single most commonly omitted item on this peninsula.',
      ],
      [
        'Is coastal erosion covered on Tróia?',
        'No. Gradual coastal erosion is excluded across the Portuguese market, because it is a process rather than an event. Storm damage is covered. Sea inundation and storm surge vary by wording — some policies exclude them while covering rainwater ingress under the same heading, so for anything sea-facing that line needs confirming specifically.',
      ],
      [
        'Should the building have earthquake cover?',
        'The Setúbal peninsula is in the highest seismic band on the mainland, and earthquake cover is elective in Portugal. It is worth confirming on both policies — yours and the condominium’s — because a building policy without it leaves every owner exposed on the structure whatever their private cover says.',
      ],
    ],
    related: [
      ['/en/blog/condominium-insurance-doesnt-cover-contents/', 'Condominium', 'What condominium insurance does not cover'],
      ['/en/blog/coastal-clifftop-properties-algarve-subsidence-erosion-flood/', 'Coastal', 'Clifftop and coastal property: subsidence, erosion and flood'],
      ['/en/blog/home-insurance-comporta-melides/', 'Comporta', 'Home insurance in Comporta and Melides: thatch, timber and what insurers ask first'],
    ],
    chatTopics: 'casa_geral,troia',
  },

  // ---------------------------------------------------------------------------
  // C — Quinta do Lago, Vale do Lobo and Vilamoura
  // ---------------------------------------------------------------------------
  {
    slug: 'home-insurance-quinta-do-lago-vale-do-lobo',
    tag: 'Golden Triangle',
    heroLabel: 'Quinta do Lago &amp; Vale do Lobo',
    gradient: 'linear-gradient(135deg,#2F4A33 0%,#9DBE86 100%)',
    readingTime: 11,
    title: 'Home insurance in Quinta do Lago, Vale do Lobo and Vilamoura: what the sum insured leaves out',
    metaTitle:
      'Home Insurance in Quinta do Lago, Vale do Lobo &amp; Vilamoura | Adler &amp; Rochefort',
    description:
      'Pools, annexes, staff quarters, courts and boundary walls are routinely outside the sum insured on a Golden Triangle villa. What is missing, what letting changes, and the workers&rsquo; compensation nobody arranges.',
    excerpt:
      'Pools, guest annexes, staff quarters, courts, landscaping and boundary walls sit outside most sums insured — on these properties that is a six-figure omission.',
    keywords:
      'home insurance Quinta do Lago, Vale do Lobo villa insurance, Vilamoura home insurance, Golden Triangle Algarve insurance, seguro habitação Almancil',
    cta: CTA(
      'A villa in the Golden Triangle?',
      'Send us the plot as well as the house. Most of what is missing from these policies is outside the front door.'
    ),
    intro: `<p>The general position on resort property &mdash; shared liability, resort rules, the boundary with the development&rsquo;s own cover &mdash; is in our guide to <a href="/en/blog/golf-resort-properties-insurance-portugal/">golf resort properties in Portugal</a>. This page is narrower and more specific: the stock in Quinta do Lago, Vale do Lobo, Almancil and Vilamoura, and the items that are, systematically, not on the schedule.</p>
<p>These are not marginal omissions. On a typical Golden Triangle property the things listed below add somewhere between &euro;150,000 and &euro;400,000 of reinstatement cost that nobody has declared.</p>`,
    body: [
      [
        'What is not in the sum insured',
        `<p>Portuguese wordings define the insured building narrowly, and treat almost anything not attached to the main dwelling as either excluded outright or covered under a small outbuildings sub-limit. On these properties that catches:</p>
<ul><li>The <strong>swimming pool</strong>, its shell, its tiling and the plant room.</li><li>The <strong>guest annexe</strong> or <em>casa de h&oacute;spedes</em>.</li><li><strong>Staff accommodation</strong>, where it is a separate structure.</li><li><strong>Garden structures</strong> &mdash; pergolas, outdoor kitchens, pool houses, shade structures.</li><li><strong>Tennis and padel courts</strong>, their surfaces, fencing and lighting.</li><li><strong>Landscaping and mature planting</strong>, which on a large plot is a genuine capital item.</li><li><strong>Boundary walls, gates and gate automation</strong>, and the irrigation system.</li></ul>
<p>The fix is not complicated: each of these has to be named and valued, or brought inside a wording that insures the plot rather than the dwelling. The detail on how insurers treat detached structures is in <a href="/en/blog/home-staff-quarters-guest-annexes-outbuildings/">staff quarters, guest annexes and outbuildings</a>.</p>`,
      ],
      [
        'Bespoke finishes and the per-square-metre table',
        `<p>Default construction tables put Algarve rebuild cost at a figure that does not describe these houses. Book-matched stone, bespoke joinery, imported sanitary ware, integrated automation and lighting control, specified glazing, natural stone terraces: reinstatement <em>to the same specification</em> means importing the same materials and finding the same trades, in a market where those trades are already committed.</p>
<p>Apply the standard table to a villa built to that standard and the property is underinsured from the first day of the policy &mdash; and the <em>regra proporcional</em> then cuts every settlement, including small ones, in the same proportion. The mechanics are in <a href="/en/blog/luxury-home-insurance-portugal/">high-value home insurance in Portugal</a>.</p>`,
      ],
      [
        'Letting is the norm here, not the exception',
        `<p>A large share of this stock is let for part of the year, whether through a resort rental programme or privately. Two things follow. A residential policy will not respond to a guest claim, and the resort&rsquo;s programme insures its own operation rather than your building &mdash; read what it covers rather than assuming.</p>
<p>If the property is let at all, the policy has to say so. The requirements are set out in <a href="/en/blog/holiday-home-insurance-portugal/">holiday-home and short-term rental insurance</a>, and the registration side in <a href="/en/blog/alojamento-local-insurance-requirements/">what Alojamento Local registration requires</a>.</p>`,
      ],
      [
        'Domestic staff: the most forgotten policy in the household',
        `<p>Housekeepers, gardeners, pool technicians and drivers are the norm rather than the exception on these properties. <strong>Workers&rsquo; compensation insurance &mdash; <em>seguro de acidentes de trabalho</em> &mdash; is mandatory in Portugal for domestic service</strong>, including part-time and hourly work, and it is among the most consistently missing policies in the expatriate household.</p>
<p>It is not covered by the household liability section, which responds to your liability as an occupier and not to your obligations as an employer. It costs very little. The exposure if it is absent is personal and uncapped. The detail is in <a href="/en/blog/domestic-staff-insurance-portugal/">employing domestic staff in Portugal</a>.</p>`,
      ],
      [
        'Fairway proximity and the glazing question',
        `<p>Properties on or beside a fairway take repeated ball strikes, and most policies handle glass under a sub-limit with an excess applied per event. Ask three questions specifically: is glazing damage from golf balls covered at all, is there a limit on the number of occurrences in a policy year, and does the excess apply per pane or per claim. Insurers that have paid two or three of these will often treat the fourth as a maintenance matter, and it is better to establish the position before it becomes a conversation.</p>`,
      ],
    ],
    table: [
      ['Property', 'Indicative annual premium'],
      ['Two-bedroom apartment, Vilamoura marina', '&euro;170&ndash;&euro;320'],
      ['Townhouse within a resort development', '&euro;350&ndash;&euro;650'],
      ['Four-bedroom villa with pool, Almancil or Vilamoura', '&euro;700&ndash;&euro;1,400'],
      ['Quinta do Lago or Vale do Lobo villa, high specification', 'from &euro;2,000, individually underwritten'],
      ['Workers&rsquo; compensation, one part-time housekeeper', '&euro;90&ndash;&euro;180'],
    ],
    closing: `<p>We are an ASF-registered, English-speaking insurance broker working across the Algarve. For a property in the Golden Triangle the useful starting point is the plot rather than the house: what stands on it, what is let, and who works there. Send that through the form below or on WhatsApp and you will have a written comparison within 24 hours.</p>`,
    faq: [
      [
        'Is the swimming pool covered by a standard Portuguese home policy?',
        'Usually not, or only under a small outbuildings and external property sub-limit that would not rebuild it. The pool shell, its tiling and the plant room should be named and valued explicitly, along with the pool house if there is one.',
      ],
      [
        'Do I need workers’ compensation for a housekeeper?',
        'Yes. Seguro de acidentes de trabalho is mandatory in Portugal for domestic service, including part-time and hourly arrangements. It is not covered by the liability section of a household policy, which responds to your liability as an occupier rather than as an employer. It is inexpensive and it is the most commonly missing policy in the expatriate household here.',
      ],
      [
        'My villa is in the resort rental programme — is that covered?',
        'Not by a residential policy, and not necessarily by the programme. The resort’s own insurance covers its operation, not your building or your liability to guests. If the property is let at all, the policy has to be written on that basis or a guest claim will not be met.',
      ],
      [
        'Are golf-ball strikes on the windows covered?',
        'It depends on the wording, and it is worth settling in advance. Glass generally sits under a sub-limit with an excess per event, and insurers that have paid repeatedly on the same elevation may treat subsequent strikes as a maintenance issue. Ask whether cover applies, whether occurrences are limited in a policy year, and how the excess is applied.',
      ],
      [
        'How should a Quinta do Lago villa be valued for insurance?',
        'On the cost of reinstating it to the same specification — which for book-matched stone, bespoke joinery, imported fittings and integrated automation is far above the per-square-metre tables applied to standard Algarve construction. Value the plot as well: pool, annexes, courts, landscaping, walls and gates are routinely left out and are routinely a six-figure omission.',
      ],
    ],
    related: [
      ['/en/blog/golf-resort-properties-insurance-portugal/', 'Resort Property', 'Golf resort properties in Portugal: what the resort covers and what it does not'],
      ['/en/blog/home-staff-quarters-guest-annexes-outbuildings/', 'Outbuildings', 'Staff quarters, guest annexes and outbuildings: the structures outside the sum insured'],
      ['/en/blog/domestic-staff-insurance-portugal/', 'Domestic Staff', 'Employing domestic staff in Portugal: the cover the law requires'],
    ],
    chatTopics: 'casa_geral,quinta_do_lago',
  },

  // ---------------------------------------------------------------------------
  // D — Sagres, Vila do Bispo, Salema and Burgau
  // ---------------------------------------------------------------------------
  {
    slug: 'home-insurance-sagres-vila-do-bispo',
    tag: 'Sagres',
    heroLabel: 'Sagres &amp; Vila do Bispo',
    gradient: 'linear-gradient(135deg,#274156 0%,#8FA9B8 100%)',
    readingTime: 10,
    title: 'Home insurance in Sagres, Vila do Bispo, Salema and Burgau: the wind coast',
    metaTitle:
      'Home Insurance in Sagres, Vila do Bispo, Salema &amp; Burgau | Adler &amp; Rochefort',
    description:
      'The most wind-exposed prime location on the Portuguese mainland. Sustained Atlantic wind, salt corrosion as a gradual rather than sudden cause of loss, isolation, and off-grid systems that must be declared.',
    excerpt:
      'Sustained wind and salt air damage roofs, shutters, metalwork and plant continuously — and continuous is exactly what a policy excludes. Where the line falls, and what to declare.',
    keywords:
      'home insurance Sagres, Vila do Bispo house insurance, Salema property insurance, Burgau home insurance, salt corrosion insurance Portugal, off-grid house insurance Algarve',
    cta: CTA(
      'A property in the south-west corner?',
      'We are in Lagos, half an hour away, and we write a lot of this coast. Send us the details.'
    ),
    intro: `<p>The south-west corner of the Algarve &mdash; Sagres, Vila do Bispo, Raposeira, Salema and Burgau &mdash; is the most wind-exposed prime residential location on the Portuguese mainland. It is also the natural extension of our own patch: our office is in Lagos, half an hour up the road, and this is a coast we write regularly.</p>
<p>The insurance problem here is not exotic. It is that the dominant cause of damage is <em>continuous</em>, and continuous is precisely what a property policy is written not to cover.</p>`,
    body: [
      [
        'Sustained wind, not storm events',
        `<p>An insurance wording pays for storm: a discrete event, usually defined by a wind speed threshold or by the presence of an official meteorological warning. What actually degrades property in Sagres and Vila do Bispo is the ordinary Atlantic wind that blows most of the year. Roof tiles work loose, ridge lines lift, shutters and their fixings fatigue, awnings tear, external metalwork loosens, pool covers fail, solar mountings work at their bolts.</p>
<p>A policy that responds to &ldquo;damage caused by wind exceeding a stated speed&rdquo; does not respond to twenty years of ordinary wind. The practical consequence is that <strong>maintenance conditions in the wording are enforced here more often than anywhere else in the region</strong>. A claim for a roof that lifted in a named storm will be examined for whether the fixings were in serviceable condition beforehand, and photographs of the roof in good order are worth having.</p>`,
      ],
      [
        'Salt: a cause of loss the policy is written to exclude',
        `<p>Salt-laden air corrodes continuously and indiscriminately: window and door hardware, railings and balustrades, garage doors and their motors, gate automation, pool pumps and heat exchangers, air-conditioning condensers, inverters, and the mountings under a photovoltaic array.</p>
<p>Gradual deterioration, corrosion, rust and wear are excluded across the Portuguese market as a matter of course. What <em>is</em> covered is sudden and accidental damage &mdash; and the argument, when it happens, is about whether a component that failed suddenly failed <em>because</em> of corrosion that had been progressing for years. Insurers generally take the view that it did.</p>
<p>The honest position for an owner on this coast is that <strong>a proportion of the annual maintenance cost is not insurable and should be budgeted rather than argued</strong>. The policy should be bought for the events that are insurable &mdash; fire, storm, water, theft, liability &mdash; and specified with sub-limits that reflect what the salt has already cost.</p>`,
      ],
      [
        'Isolation lengthens everything',
        `<p>Distance affects more than the response of the <em>bombeiros</em>. It affects the adjuster&rsquo;s visit, the availability of a contractor to quote, and how long a property sits damaged before anyone reaches it. Two clauses become live as a result.</p>
<p>The first is the <strong>assistance service</strong>. Every retail policy includes 24-hour home assistance; not every one has providers who will actually travel to Vila do Bispo at two in the morning. Ask, before you need it.</p>
<p>The second is the requirement to take <strong>reasonable steps to prevent further damage</strong> after a loss. That is difficult to satisfy from another country with a property an hour from the nearest trade, and it interacts directly with the unoccupancy clause: a key-holder who lives an hour away is a different proposition from one in the same village. See <a href="/en/blog/second-homes-empty-months-unoccupancy-clause-voids-cover/">second homes that sit empty for months</a>.</p>`,
      ],
      [
        'Off-grid and part-off-grid systems must be declared',
        `<p>A meaningful proportion of property out here runs partly or wholly independent of the grid: photovoltaic arrays, battery storage, a generator, a borehole pump and its control gear, occasionally a small wind turbine. All of it has to be declared, for two separate reasons.</p>
<p>It is a <strong>valuation</strong> problem &mdash; an installation of this kind is frequently &euro;15,000 to &euro;40,000 that never reached the sum insured &mdash; and it is a <strong>non-disclosure</strong> problem, because lithium battery storage in particular is now a specific underwriting question and a fire originating in an undeclared installation puts the whole claim in issue, not just the equipment. The declaration itself usually costs a few tens of euros a year. See <a href="/en/blog/solar-panels-home-batteries-ev-chargers-policy-modern/">solar panels, home batteries and EV chargers</a>.</p>`,
      ],
      [
        'What this means for the sum insured',
        `<p>Building here is not cheap. The exposure means heavier specification &mdash; marine-grade fixings, treated timber, better glazing, replaced hardware &mdash; and the trades are thin on the ground west of Lagos. A rebuild figure taken from an Algarve average will be short, and the proportional rule then reduces every settlement rather than only a total loss. The <a href="/en/blog/home-insurance-cost-algarve-price-drivers/">cost guide</a> covers what moves the figure.</p>`,
      ],
    ],
    table: [
      ['Property', 'Indicative annual premium'],
      ['Two-bedroom apartment or townhouse, Burgau or Salema', '&euro;150&ndash;&euro;280'],
      ['Three-bedroom villa with pool, Vila do Bispo', '&euro;400&ndash;&euro;780'],
      ['Coastal villa, exposed position, high specification', 'from &euro;1,100, individually underwritten'],
      ['Rural property with off-grid generation, declared', '&euro;450&ndash;&euro;950'],
      ['Property let as Alojamento Local', '&euro;380&ndash;&euro;700'],
    ],
    closing: `<p>We are an ASF-registered, English-speaking insurance broker based in Lagos, and the south-west concelhos are close enough that we see these properties rather than read about them &mdash; which matters when the question is whether a roof was in serviceable condition. Our guide to <a href="/en/blog/home-insurance-lagos/">home insurance in Lagos</a> covers the neighbouring concelho. Send the property details through the form below or on WhatsApp for a written comparison within 24 hours.</p>`,
    faq: [
      [
        'Is wind damage covered in Sagres?',
        'Storm damage is covered — a discrete event, usually defined by a wind speed threshold or an official warning. Progressive damage from the ordinary sustained wind that blows most of the year is not, because it is treated as wear and maintenance. That distinction is the single most important one on this coast.',
      ],
      [
        'Is corrosion from salt air covered?',
        'No. Corrosion, rust, gradual deterioration and wear are excluded across the Portuguese market. Sudden and accidental damage is covered, but where a component fails after years of corrosion an insurer will usually treat the corrosion as the cause. A realistic budget for replacing hardware, motors, pumps and fixings is part of owning property here.',
      ],
      [
        'Do I need to declare solar panels and a battery?',
        'Yes, on both counts. The installation adds to the rebuild cost and needs to be inside the sum insured, and lithium battery storage is a specific underwriting question. An undeclared installation that causes a fire puts the whole claim in issue rather than only the equipment. Declaring it typically costs a few tens of euros a year.',
      ],
      [
        'Does the 24-hour assistance service actually reach Vila do Bispo?',
        'Not always, and it is worth asking before you rely on it. Every retail policy includes home assistance, but the provider network is thinner in the western concelhos. The same isolation affects how quickly an adjuster attends and how easily you can satisfy the requirement to prevent further damage after a loss — which is why a local key-holder matters more here than elsewhere.',
      ],
      [
        'Is it more expensive to insure a house in Sagres than in Lagos?',
        'Slightly, for comparable property, and mainly because of exposure and distance rather than crime or value. The larger difference is usually the sum insured rather than the rate: building to the specification this coast requires costs more than the Algarve average, and a rebuild figure taken from that average leaves the property underinsured.',
      ],
    ],
    related: [
      ['/en/blog/home-insurance-lagos/', 'Lagos', 'Home insurance in Lagos: what local property actually needs'],
      ['/en/blog/solar-panels-home-batteries-ev-chargers-policy-modern/', 'Modern Homes', 'Solar panels, home batteries and EV chargers: your home is modern, your policy is not'],
      ['/en/blog/coastal-clifftop-properties-algarve-subsidence-erosion-flood/', 'Coastal', 'Clifftop and coastal property: subsidence, erosion and flood'],
    ],
    chatTopics: 'casa_geral,sagres',
  },

  // ---------------------------------------------------------------------------
  // E — Sintra: Linhó, Beloura, Penha Longa and Colares
  // ---------------------------------------------------------------------------
  {
    slug: 'home-insurance-sintra-cascais-villas',
    tag: 'Sintra',
    heroLabel: 'Sintra &amp; the serra',
    gradient: 'linear-gradient(135deg,#2E4034 0%,#8DA98A 100%)',
    readingTime: 11,
    title: 'Home insurance for villas and quintas in Sintra: Linh&oacute;, Beloura, Penha Longa and Colares',
    metaTitle:
      'Home Insurance for Villas &amp; Quintas in Sintra: Linh&oacute;, Beloura, Penha Longa | Adler &amp; Rochefort',
    description:
      'Rural fire and the legal fuel-management obligation, a microclimate that produces infiltration rather than burst pipes, and old quintas where reinstatement costs far more than a rebuild.',
    excerpt:
      'The serra brings a legal land-clearing obligation that can be raised at claim stage, a humidity problem the policy calls maintenance, and quintas where reinstatement is not rebuilding.',
    keywords:
      'home insurance Sintra, Beloura villa insurance, Penha Longa home insurance, Linhó property insurance, Colares quinta insurance, seguro habitação Sintra',
    cta: CTA(
      'A villa or quinta in the Sintra hills?',
      'Send us the property and the land around it. Both decide what the policy will do.'
    ),
    intro: `<p>Our note on <a href="/en/blog/insuring-a-high-value-apartment-lisbon-cascais/">insuring a high-value apartment in Lisbon or Cascais</a> deals with apartments, where the condominium policy does most of the structural work. This page is the other half of the same market: villas and quintas in Linh&oacute;, Beloura, Penha Longa, Quinta da Beloura, the Malveira edge and the Colares side of the serra, where the owner carries the building, the land and everything on it.</p>
<p>Three things make Sintra different from anywhere else within an hour of Lisbon, and all three are decided before a claim rather than during one.</p>`,
    body: [
      [
        'Rural fire, and a legal obligation that becomes an insurance question',
        `<p>The serra is a wooded landscape, and Portuguese law imposes a <strong>fuel-management obligation</strong> on owners of buildings in or adjacent to rural land: a cleared strip around the building &mdash; the figure most owners are held to is 50 metres &mdash; with undergrowth removed and spacing maintained between tree crowns. Municipalities inspect it and fine for non-compliance, and most owners here know that much.</p>
<p>The insurance point is separate and much less known. <strong>Non-compliance with a legal obligation directly connected to the peril can be raised at claim stage.</strong> If fire reaches a house across land the owner was legally required to clear and did not, expect the question, and expect it to be put in writing.</p>
<p>The answer is evidence, gathered before it is needed: dated photographs each season, the contractor&rsquo;s invoice for the clearing, and any municipal correspondence. It costs nothing to keep and it closes the argument.</p>`,
      ],
      [
        'The microclimate: infiltration, not burst pipes',
        `<p>Sintra is materially wetter than places twenty kilometres away. Persistent humidity, prolonged shade under the tree line, moss and vegetation establishing on roofs and walls, and a long wet season. Two consequences follow, and they point the same way.</p>
<p>First, the water damage that actually happens here is <strong>infiltration</strong> rather than a sudden burst. Infiltration, condensation and rising damp are excluded across the Portuguese market, because they are treated as maintenance rather than accident. The cover that responds &mdash; sudden and accidental escape of water from the plumbing &mdash; is not the cover most Sintra owners end up needing.</p>
<p>Second, the <strong>maintenance condition</strong> in the wording is a real condition here rather than boilerplate. A roof that has not been cleared of vegetation, and a gutter and downpipe system that has not been maintained through a wet winter, give an insurer a defensible position on a claim that would be paid without argument elsewhere.</p>`,
      ],
      [
        'Old quintas: reinstatement is not rebuilding',
        `<p>Historic construction is the norm on the Colares side and in pockets throughout the serra: <em>azulejos</em>, <em>cantaria</em> and dressed stone, lime renders, timber structures, and in listed or otherwise protected buildings an obligation to reinstate like for like under the supervision of the heritage authority.</p>
<p>&ldquo;Reinstatement&rdquo; then means something considerably more expensive and considerably slower than a modern rebuild &mdash; specialist trades, materials that have to be sourced or made, and a consent process running alongside the works. A sum insured set from a modern construction table describes a building that is not the one on the deed. Our guide to <a href="/en/blog/renovating-listed-heritage-property-portugal/">renovating a listed or heritage property in Portugal</a> covers what the protection actually requires.</p>`,
      ],
      [
        'The gated developments: Beloura, Penha Longa, Linh&oacute;',
        `<p>Where the property sits inside a condominium or resort structure, the usual boundary question applies &mdash; the development insures the common structure and you insure your side of it, which is dealt with in <a href="/en/blog/condominium-insurance-doesnt-cover-contents/">what condominium insurance does not cover</a>.</p>
<p>What is particular to these developments is how much of the value sits <em>outside</em> the dwelling: substantial private grounds, pools, pool houses, garden structures, boundary walls and gate automation, none of which a standard Portuguese wording insures as part of the building. They have to be named and valued, as set out in <a href="/en/blog/home-staff-quarters-guest-annexes-outbuildings/">staff quarters, guest annexes and outbuildings</a>. Domestic staff are also common here, and <em>seguro de acidentes de trabalho</em> is mandatory for domestic service &mdash; see <a href="/en/blog/domestic-staff-insurance-portugal/">employing domestic staff in Portugal</a>.</p>`,
      ],
    ],
    table: [
      ['Property', 'Indicative annual premium'],
      ['Townhouse within a gated development, Beloura or Linh&oacute;', '&euro;280&ndash;&euro;520'],
      ['Four-bedroom villa with pool and grounds', '&euro;600&ndash;&euro;1,200'],
      ['Villa on the serra edge, wooded plot', '&euro;800&ndash;&euro;1,600'],
      ['Quinta with protected or historic elements', 'from &euro;1,800, individually underwritten'],
      ['Workers&rsquo; compensation, one part-time housekeeper', '&euro;90&ndash;&euro;180'],
    ],
    closing: `<p>We are an ASF-registered, English-speaking insurance broker. We work across Portugal and everything is handled in writing, in English, with the insurer and the loss adjuster dealt with in Portuguese on your behalf. For a Sintra property, send the building details together with a description of the land around it &mdash; on this side of the serra the two are the same question. Written comparison within 24 hours.</p>`,
    faq: [
      [
        'Does my policy require me to clear the land around the house?',
        'The policy usually does not say so in those words, but the law does — owners of buildings in or adjacent to rural land must maintain a fuel-management strip around the building, commonly 50 metres. Because that obligation is directly connected to the fire peril, non-compliance can be raised at claim stage. Keep dated photographs and the contractor’s invoices each season.',
      ],
      [
        'Is damp and infiltration covered?',
        'No. Infiltration, condensation and rising damp are excluded across the Portuguese market as maintenance rather than accident. What is covered is sudden and accidental escape of water from the plumbing. In the Sintra microclimate that is an uncomfortable mismatch, and it makes roof, gutter and downpipe maintenance a genuine insurance matter rather than housekeeping.',
      ],
      [
        'How should a quinta with protected elements be valued?',
        'On the cost of reinstating it as the protection requires — like-for-like materials, specialist trades and a heritage consent process running alongside the works — which is well above a modern construction table. Under-declaring is not a small saving: the proportional rule reduces every settlement, not only a total loss.',
      ],
      [
        'Is wildfire covered in the serra de Sintra?',
        'Fire, including wildfire reaching the property, is covered under the fire and associated perils section of a standard multi-risk policy. What can defeat a claim is not the peril but the conduct around it — most often a failure to meet the legal land-clearing obligation, or a sum insured set too low to reinstate the building that burned.',
      ],
      [
        'Do you cover Sintra and Cascais from the Algarve?',
        'Yes. Placement, documentation and claims are handled in writing and by phone wherever the property is, and we deal with the insurer and the loss adjuster in Portuguese on your behalf. Our office is in Lagos; the property does not have to be.',
      ],
    ],
    related: [
      ['/en/blog/insuring-a-high-value-apartment-lisbon-cascais/', 'Lisbon &amp; Cascais', 'Insuring a high-value apartment in Lisbon or Cascais'],
      ['/en/blog/renovating-listed-heritage-property-portugal/', 'Heritage', 'Renovating a listed or heritage property in Portugal'],
      ['/en/blog/home-staff-quarters-guest-annexes-outbuildings/', 'Outbuildings', 'Staff quarters, guest annexes and outbuildings: the structures outside the sum insured'],
    ],
    chatTopics: 'casa_geral,sintra',
  },
];
