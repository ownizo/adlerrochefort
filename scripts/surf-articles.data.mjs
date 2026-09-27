/**
 * EN content for the surf second-home series (pillar + five destinations).
 *
 * The subject is surf first — the coast, the waves, the seasons and the people
 * who come for them — then the second-home market each place has produced, and
 * only at the end the points of cover that genuinely matter there. Each EN page
 * is an hreflang pair with the DE article at the slug in `de`.
 *
 * Body HTML is written with HTML entities where needed; FAQ entries are plain
 * text so the visible FAQ and the FAQPage JSON-LD stay identical.
 *
 * Built by scripts/build-surf-articles.mjs.
 */

export const PILLAR = '/en/blog/surfing-portugal-second-homes/';

export const ARTICLES = [
  // ---------------------------------------------------------------------------
  // Pillar — Portugal, a surf nation
  // ---------------------------------------------------------------------------
  {
    slug: 'surfing-portugal-second-homes',
    de: 'surfen-portugal-zweitwohnsitz',
    tag: 'Surf &amp; Second Homes',
    heroLabel: 'Portugal &middot; the surf coast',
    gradient: 'linear-gradient(135deg,#1F3B4D 0%,#9DB8B0 100%)',
    title: 'Portugal, a surf nation — and the second homes it attracts',
    metaTitle: 'Surfing Portugal: Second Homes on the Coast | Adler &amp; Rochefort',
    description:
      'Portugal&rsquo;s surf coast from Nazar&eacute; and Ericeira to Aljezur, Sagres and Lagos: the waves, the seasons, the homes they attract and how to protect them.',
    excerpt:
      'From the giant waves of Nazar&eacute; to the reefs of Ericeira and the two coasts of Sagres: why Portugal became a surf nation, the second homes it attracts, and what protecting one involves.',
    keywords:
      'surfing Portugal, Portugal surf destinations, surf second home Portugal, Ericeira surf, Nazaré big waves, Sagres surf, Aljezur surf, Lagos surf, luxury home Portugal coast',
    chatTopics: 'casa_luxo,casa_geral',
    cta: {
      title: 'A house on the Portuguese surf coast?',
      sub: 'Tell us about the property and how you use it. We will come back with a written assessment &mdash; the house, the contents, the people and the gaps.',
    },
    intro: `<p>There are few countries in the world where you can surf a hollow reef in the morning, watch the largest waves ever ridden in the afternoon and still be home for dinner &mdash; and Portugal is one of them. More than 800 kilometres of Atlantic coastline face straight into the swells of the North Atlantic, the climate is mild enough to surf all year, and in the space of two decades a fishing and farming coast has become one of the great surf destinations on earth.</p>
<p>That transformation has produced something else: a market for high-value second homes built around the surf. This guide follows the coast from Nazar&eacute; and Ericeira in the centre down to Aljezur, Sagres and Lagos in the south-west, looks at who buys there and what they buy, and ends with the few insurance points that genuinely matter for a surf house.</p>`,
    body: [
      [
        'Why Portugal became a surf nation',
        `<p>Geography does most of the work. Portugal&rsquo;s west coast is fully exposed to the long-period groundswells that North Atlantic storms send south and east between September and April, and even in summer there is usually some swell. The coastline is remarkably varied &mdash; flat rock reefs, right-hand points, river-mouth sandbanks, open beach breaks, sheltered bays &mdash; so a surfer with a car can almost always find a wave that suits the day. Then the coast turns a corner at Cabo de S&atilde;o Vicente: the Algarve&rsquo;s south coast is sheltered from the northerly winds and wakes up when the west is too big.</p>
<p>The culture followed the waves. Portuguese surfers now compete on the World Surf League&rsquo;s Championship Tour and at the Olympic Games; the tour itself has stopped at Supertubos in Peniche for well over a decade. Ericeira became Europe&rsquo;s first World Surfing Reserve in 2011, the same year a wave at Nazar&eacute; made headlines around the world. Surf schools, shapers, surf houses and a serious local scene now line the coast, and surfing has become part of how the country sees itself.</p>
<p>The seasons are simple to summarise. <strong>Autumn</strong> is the connoisseur&rsquo;s season: consistent swell, lighter winds, the sea still at its warmest. <strong>Winter</strong> brings the biggest and most powerful swells, the reefs and points at their best and, at Nazar&eacute;, the giants. <strong>Spring</strong> is mixed. <strong>Summer</strong> is smaller and busier, with the northerly <em>nortada</em> rising in the afternoons &mdash; the season for beginners, children and dawn sessions. The water is cool by Mediterranean standards: a 3/2&nbsp;mm wetsuit in summer, a 4/3&nbsp;mm in winter.</p>`,
      ],
      [
        'The coast, place by place',
        `<h3>Nazar&eacute; and Peniche</h3>
<p>At <strong>Praia do Norte</strong> in Nazar&eacute;, a submarine canyon focuses winter swells into the biggest waves ever surfed, ridden by tow-in teams with jet skis while crowds watch from the lighthouse. Forty minutes south, the Peniche peninsula has beach breaks facing in almost every direction, the Supertubos barrel and the gentle waves of Baleal. <a href="/en/blog/surfing-nazare-second-home/">Surfing Nazar&eacute; &mdash; and owning a home on the Silver Coast</a>.</p>
<h3>Ericeira</h3>
<p>Forty-five minutes from Lisbon, a whitewashed fishing town above seven world-class waves in four kilometres: the long right point of Ribeira d&rsquo;Ilhas, the heavy reef at Coxos, the barrel at Cave, big-wave S&atilde;o Louren&ccedil;o. A surf town with a real town attached, and the second-home market of choice for Lisbon families. <a href="/en/blog/surfing-ericeira-second-home/">Surfing Ericeira &mdash; and owning a home at the World Surfing Reserve</a>.</p>
<h3>Aljezur and the Costa Vicentina</h3>
<p>The wildest, greenest part of the coast: Arrifana beneath its cliffs, Monte Cl&eacute;rigo, the river mouths at Amoreira and Odeceixe, and the surf-school beaches of Amado and Bordeira just south. Restored farmhouses on large plots, a natural park that protects the landscape &mdash; and a wooded hinterland where wildfire is the defining risk. <a href="/en/blog/surfing-aljezur-second-home/">Surfing Aljezur &mdash; and a home on the Costa Vicentina</a>.</p>
<h3>Sagres</h3>
<p>At the south-western tip of Europe, two coasts meet at a right angle: Tonel, Beliche, Castelejo and Cordoama to the west, Mareta, Martinhal and Zavial to the south. When one is blown out, the other is usually offshore, which makes Sagres surfable almost every day of the year. <a href="/en/blog/surfing-sagres-second-home/">Surfing Sagres &mdash; and a home on the cliffs</a>.</p>
<h3>Lagos</h3>
<p>A year-round historic town with a marina, south-facing beaches that surf on winter swells, and the whole west coast half an hour away. The place where surfing families settle when they want schools, restaurants and an airport within an hour. <a href="/en/blog/surfing-lagos-second-home/">Surfing from Lagos &mdash; and a home in a year-round town</a>.</p>
<p>Between them lie other classic stretches &mdash; Carcavelos and Guincho on the Lisbon coast, Costa da Caparica, Figueira da Foz and the northern coast around Porto and Viana do Castelo &mdash; not to mention Madeira and the Azores. The five places above are where surf and high-value second homes meet most clearly.</p>`,
      ],
      [
        'Who buys a surf second home, and what they buy',
        `<p>The buyers are more varied than the stereotype of the surfer suggests. <strong>Lisbon families</strong> keep the city apartment and use a house in Ericeira or on the Silver Coast at weekends and in the holidays. <strong>Northern Europeans</strong> &mdash; British, German, Dutch, Scandinavian &mdash; have been settling on the south-west coast for decades and now buy at the top end. <strong>Americans</strong> arrive in growing numbers, often with children who surf. And a distinct group of <strong>founders and executives</strong> choose the coast precisely because a session at dawn and a board meeting at ten are now compatible, provided the fibre and the airport are close enough.</p>
<p>What they buy depends on the place: contemporary <strong>architect houses</strong> with glass facing the ocean; <strong>clifftop villas</strong> where the view comes with wind and exposure; <strong>restored <em>montes</em> and <em>quintas</em></strong> on large rural plots, often with boreholes and solar; <strong>village townhouses</strong> renovated behind whitewashed fa&ccedil;ades; and <strong>seafront apartments</strong> in new developments. On much of the south-west coast, inside the Parque Natural do Sudoeste Alentejano e Costa Vicentina, new building is tightly restricted, which keeps the landscape intact and the supply of good houses limited.</p>
<p>Some owners live on the coast year-round; many use the house for weeks at a time and leave it empty in between. The practical realities are the same everywhere on the Atlantic: salt air that corrodes metal, electronics and window frames; winter storms that test roofs, glazing and drainage; cliff edges that erode; in the wooded hinterland, fire; and, in the remoter places, contractors who take time to arrive.</p>`,
      ],
      [
        'Protecting the house and the family',
        `<p>Insurance is not the reason anyone buys a surf house, but a few points decide whether a policy works when it is needed.</p>
<ul>
<li><strong>Rebuild value, not purchase price.</strong> The building should be insured for what it costs to rebuild to the same specification &mdash; and in a natural park, to current rules, with the delays and professional fees that implies. Underinsurance reduces every claim proportionally. See <a href="/en/blog/setting-rebuild-value-portugal/">how rebuild value is set</a>.</li>
<li><strong>Coast and hinterland.</strong> Storm and wind damage are normally covered; gradual salt corrosion and coastal erosion normally are not. Wildfire is covered as fire, but insurers look at vegetation clearance and access. Earthquake is an optional extension in Portugal and worth considering. See <a href="/en/blog/coastal-clifftop-properties-algarve-subsidence-erosion-flood/">clifftop and coastal properties</a>.</li>
<li><strong>Empty months.</strong> Many policies restrict cover once a house has been unoccupied beyond a set period. Regular visits by a key-holder or home-watch service, water shut-off and an alarm are the conditions insurers like to see. See <a href="/en/blog/second-homes-empty-months-unoccupancy-clause-voids-cover/">unoccupancy clauses</a>.</li>
<li><strong>The quiver and the kit.</strong> Custom boards, foils and e-foils, wetsuits, cameras and drones travel in cars and vans and on planes. A contents policy that covers them only at home is not enough; worldwide all-risks cover for valuables and sports equipment usually is.</li>
<li><strong>People.</strong> Personal accident and health policies may exclude or limit hazardous sports; big-wave and tow-in surfing are the classic case. Medical evacuation and international health cover matter for families who surf remote coasts.</li>
<li><strong>Liability and letting.</strong> Guests borrowing boards, a pool, a jet ski or a drone all create liability. Letting the house &mdash; to surfers, or for a retreat &mdash; may fall outside a private home policy; Alojamento Local has its own compulsory cover.</li>
</ul>`,
      ],
    ],
    checklist: [
      'Check the building sum insured against today&rsquo;s rebuild cost, including park or planning constraints.',
      'List boards, foils, cameras and drones with values and photos, and confirm they are covered away from home.',
      'Arrange regular visits while the house is empty, and know what your policy requires.',
      'Clear vegetation around the house before summer if it sits in the countryside.',
      'Tell your insurer about any letting, retreat or commercial use, however occasional.',
    ],
    spain: `<p>Much of what applies in Portugal applies across the border. Spain&rsquo;s north coast is one of Europe&rsquo;s great surf regions: the Basque coast with the famous river-mouth left at <strong>Mundaka</strong> and the beaches of Zarautz, the beach breaks of <strong>Cantabria</strong> around Santander and Somo, and the wild coves of <strong>Asturias</strong>. In the Atlantic, <strong>Fuerteventura</strong> and Lanzarote offer volcanic reefs and winter warmth, and at <strong>Tarifa</strong>, on the Strait of Gibraltar, the wind makes it Europe&rsquo;s kitesurfing capital. We advise clients on homes in Spain under the EU freedom to provide services &mdash; see <a href="/en/home-insurance-spain/">home insurance in Spain</a>.</p>`,
    closing: `<p>Adler &amp; Rochefort is an ASF-registered insurance intermediary with offices in Lisbon and Lagos, advising private clients across Portugal and Spain. For a surf house we start from the property, the way you use it and the people who use it, and give you our view in writing &mdash; one adviser from the first conversation to any claim. For larger or unusual risks we work with specialist markets and co-brokerage partners. See our <a href="/en/private-clients/">private client service</a>.</p>`,
    faq: [
      [
        'When is the best time to surf in Portugal?',
        'Autumn, from September to November, is the favourite of many experienced surfers: consistent swell, lighter winds and the warmest water of the year. Winter brings the biggest swells and the reefs at their best. Summer is smaller and suits beginners, with afternoon northerly winds.',
      ],
      [
        'Which part of Portugal is best for beginners?',
        'Most of the coast has beginner-friendly beaches with schools: Foz do Lizandro near Ericeira, Baleal near Peniche, Amado on the Costa Vicentina, Martinhal near Sagres and Meia Praia in Lagos in winter. The famous reefs and Praia do Norte in Nazaré are for experienced surfers only.',
      ],
      [
        'Where are the biggest waves in Portugal?',
        'At Praia do Norte in Nazaré, where the Nazaré Canyon focuses winter swells into the largest waves ever surfed. They are ridden by tow-in teams with jet skis and water-safety crews, mainly between October and March.',
      ],
      [
        'Can I build a new house on the Costa Vicentina?',
        'Only within tight limits. Much of the coast from Sagres to the Alentejo is inside the Parque Natural do Sudoeste Alentejano e Costa Vicentina, where new construction is strictly restricted and renovation is subject to park and municipal rules. Check what is permitted before buying.',
      ],
      [
        'Does home insurance in Portugal cover my surf equipment?',
        'Usually only inside the house, and sometimes only up to a limit per item. Boards, foils, wetsuits and cameras carried in the car or taken abroad need cover that follows them away from home, such as a worldwide all-risks section for valuables and sports equipment.',
      ],
    ],
    related: [
      ['/en/blog/surfing-ericeira-second-home/', 'Ericeira', 'Surfing Ericeira — and owning a home at the World Surfing Reserve'],
      ['/en/blog/surfing-nazare-second-home/', 'Nazaré', 'Surfing Nazaré — big waves and a home on the Silver Coast'],
      ['/en/blog/surfing-aljezur-second-home/', 'Aljezur', 'Surfing Aljezur — and a home on the Costa Vicentina'],
      ['/en/blog/surfing-sagres-second-home/', 'Sagres', 'Surfing Sagres — two coasts and a home on the cliffs'],
      ['/en/blog/surfing-lagos-second-home/', 'Lagos', 'Surfing from Lagos — and a home in a year-round town'],
      ['/en/private-clients/', 'Private Clients', 'Private client insurance in Portugal and Spain'],
    ],
  },

  // ---------------------------------------------------------------------------
  // Ericeira
  // ---------------------------------------------------------------------------
  {
    slug: 'surfing-ericeira-second-home',
    de: 'surfen-ericeira-zweitwohnsitz',
    tag: 'Ericeira',
    heroLabel: 'Ericeira &middot; World Surfing Reserve',
    gradient: 'linear-gradient(135deg,#23455A 0%,#A9C3C7 100%)',
    title: 'Surfing Ericeira — and owning a home at Europe’s first World Surfing Reserve',
    metaTitle: 'Surfing Ericeira and Owning a Home There | Adler &amp; Rochefort',
    description:
      'The reefs and points of Europe&rsquo;s first World Surfing Reserve, the seasons and the surf culture of Ericeira &mdash; and what owning a high-value home there involves.',
    excerpt:
      'Seven world-class waves in four kilometres, forty-five minutes from Lisbon. The surf, the town, the homes Lisbon families and international buyers choose, and how to protect them.',
    keywords:
      'surfing Ericeira, Ericeira World Surfing Reserve, Ribeira d’Ilhas, Coxos, Ericeira second home, luxury home Ericeira, Ericeira property, home insurance Ericeira',
    chatTopics: 'casa_luxo,casa_geral',
    cta: {
      title: 'A house or apartment in Ericeira?',
      sub: 'Send us the details and we will come back with a written assessment of the building, the contents, the kit and the people.',
    },
    intro: `<p>Some fifty kilometres north-west of Lisbon, a whitewashed fishing town with blue-trimmed windows sits on a low cliff above some of the most consistent reef and point waves in Europe. In 2011 Ericeira became Europe&rsquo;s first World Surfing Reserve &mdash; only the second in the world, after Malibu &mdash; in recognition of a short stretch of coast that holds, within a few kilometres, waves that would each justify a trip on their own.</p>
<p>For a growing number of families, that stretch of coast has become the reason to own a house here: a surf town with a real town attached, forty-five minutes from Lisbon and its airport. This guide starts with the waves, moves on to the houses, and ends &mdash; briefly &mdash; with what it takes to protect both.</p>`,
    body: [
      [
        'Seven waves in four kilometres',
        `<p>The reserve runs from Pedra Branca, just south of the town, to S&atilde;o Louren&ccedil;o in the north, and the variety packed into it is what sets Ericeira apart. Most of the coast here is flat rock reef rather than sand, which gives the waves shape and makes them predictable &mdash; and unforgiving.</p>
<ul>
<li><strong>Ribeira d&rsquo;Ilhas</strong> &mdash; a long right-hand point in a natural amphitheatre below the road, the town&rsquo;s showpiece and a regular venue for international contests, World Surf League events among them. On a clean, mid-sized swell it peels for a long way and suits confident intermediates upwards.</li>
<li><strong>Coxos</strong> &mdash; a few minutes north, a fast, heavy right over shallow reef in a small cove, widely regarded as one of the best waves in Europe. It is for experienced surfers only, and the line-up expects you to know it.</li>
<li><strong>Cave</strong> &mdash; a thick, hollow right breaking onto a rock shelf close to the cliff: a barrel for experts on the right day, a genuinely dangerous wave on the wrong one.</li>
<li><strong>Pedra Branca and Reef</strong> &mdash; rock reefs at the southern end, lefts and rights that come alive on the lower tides and are favoured by bodyboarders as well as surfers.</li>
<li><strong>S&atilde;o Louren&ccedil;o</strong> &mdash; a right-hand reef that holds real size, the local big-wave spot when the Atlantic sends its heaviest winter swells.</li>
</ul>
<p>Outside the reserve, <strong>Foz do Lizandro</strong> &mdash; a sandy river-mouth beach just south of the town &mdash; is where most schools take beginners and children, together with S&atilde;o Juli&atilde;o and the beaches running south towards Sintra.</p>`,
      ],
      [
        'Seasons, swell and wind',
        `<p>Ericeira faces west-north-west into the open Atlantic and picks up the long-period swells generated by North Atlantic storms from autumn to spring. <strong>September to November</strong> is the season many locals would choose if forced to: consistent groundswell, lighter winds and water still at its warmest. Winter brings the biggest, most powerful swells and the reefs at their best, with a 4/3&nbsp;mm wetsuit, often boots, and short days. Spring is changeable.</p>
<p>Summer is smaller, and the northerly <em>nortada</em> tends to strengthen through the afternoon, so the rhythm becomes early sessions and the beach breaks while the town fills with visitors. The best winds here are easterly &mdash; offshore on this coast &mdash; and they are most common on autumn and winter mornings.</p>`,
      ],
      [
        'A surf town with a real town attached',
        `<p>What makes Ericeira work as a place to live, not just to visit, is that it has kept a working heart: fish restaurants around the squares and down by the harbour, a market, cafés full of people who are not on holiday. Around that, surf culture has built an ecosystem &mdash; schools and surf houses, board shapers and repair shops, wetsuit specialists, coffee roasters and co-working spaces used by founders who have realised that a session at seven and a call at nine are entirely compatible.</p>
<p>The crowd in the water is mixed: a strong local community, Lisbon weekenders, international surfers staying for a season, and families whose children learn at Foz do Lizandro and graduate, over the years, to the reefs. Compared with Peniche, forty minutes up the coast &mdash; home of the Championship Tour&rsquo;s stop at Supertubos, where the peninsula almost always offers somewhere offshore &mdash; Ericeira is less about beach-break flexibility and more about quality reefs. Many residents surf both.</p>`,
      ],
      [
        'The second-home market: who buys, and what',
        `<p>Ericeira lies mostly within the municipality of Mafra, with its monumental palace and royal hunting grounds inland, and around forty-five minutes by motorway from Lisbon. That distance shapes the market. Many buyers are <strong>Lisbon-based families</strong> who keep the city apartment and use the Ericeira house for weekends, school holidays and, increasingly, weeks of remote work. Alongside them are <strong>Northern Europeans</strong>, <strong>Americans</strong> and a noticeable group of surf-minded <strong>founders and executives</strong> for whom an international airport and a world-class wave within the hour is the whole brief.</p>
<p>The housing stock reflects that mix: <strong>village townhouses</strong> in the old centre, renovated behind whitewashed façades with roof terraces facing the sea; <strong>contemporary architect houses</strong> with pools and ocean views on the hillsides and in the surrounding villages such as Ribamar and Santo Isidoro; and <strong>new high-end developments and seafront apartments</strong>, usually in condominiums with shared facilities. Ericeira is not inside a natural park, so planning follows ordinary municipal rules, although the cliff line and coastal protection zones still limit building near the edge.</p>
<p>Year-round life is entirely realistic, and plenty of owners who began with weekends end up living here. The realities of ownership are Atlantic ones: salt-laden wind that corrodes metalwork, air-conditioning units, frames and electronics far faster than inland; winter storms that test roofs, glazing and drainage; and damp in houses shut up for weeks.</p>`,
      ],
      [
        'Protecting the house and the family',
        `<p>A few points matter more here than on a typical Portuguese home policy.</p>
<ul>
<li><strong>Rebuild value, not purchase price.</strong> An architect house with large glazing and bespoke joinery costs far more to rebuild than a bank&rsquo;s per-square-metre figure suggests, and underinsurance reduces every claim, not just a total loss. See <a href="/en/blog/setting-rebuild-value-portugal/">how rebuild value is set</a>.</li>
<li><strong>Storm and salt.</strong> Wind and storm damage are normally covered; gradual corrosion from salt air is normally excluded as wear and tear. Documented maintenance of shutters, seals and roof fixings is what counts at claim time.</li>
<li><strong>Apartments: building versus contents.</strong> The condominium policy covers the structure and common parts, not your contents, your improvements or your liability. See <a href="/en/blog/condominium-insurance-doesnt-cover-contents/">why the condominium policy is not enough</a>.</li>
<li><strong>The quiver and the kit.</strong> Custom boards, foils, wetsuits, cameras and drones spend much of their lives in cars and vans. Check whether cover follows them away from home, what it says about theft from an unattended vehicle, and whether worldwide all-risks cover for valuables and sports equipment is the better answer.</li>
<li><strong>People and liability.</strong> Mainstream surfing is rarely a problem on personal accident and health policies, but heavy reef waves and tow-in are worth checking against the wording. Family liability &mdash; a guest injured at the pool, a board that strikes another surfer &mdash; belongs on the household policy with an adequate limit. See <a href="/en/blog/family-liability-cover-portugal/">family liability cover</a>.</li>
<li><strong>Letting.</strong> A private home policy may exclude commercial letting; Alojamento Local has its own compulsory insurance.</li>
</ul>`,
      ],
    ],
    checklist: [
      'Revisit the building sum insured against today&rsquo;s rebuild cost, especially after works.',
      'List boards, foils, cameras and drones with values and photos; confirm cover away from home.',
      'Check shutters, window seals, roof fixings and gutters before the winter storms.',
      'Agree who visits the house when it is empty, and how often.',
      'Tell your insurer if the house will be let, even occasionally.',
    ],
    closing: `<p>Adler &amp; Rochefort is an ASF-registered insurance intermediary with offices in Lisbon and Lagos, advising private clients across Portugal and Spain. For a house in Ericeira we start from the property, the way you use it and the people who use it, and give you our view in writing &mdash; one adviser from the first conversation to any claim. The wider picture is in our guide to <a href="/en/blog/surfing-portugal-second-homes/">surfing Portugal and the second homes it attracts</a>.</p>`,
    faq: [
      [
        'When is the best time to surf in Ericeira?',
        'Autumn, from September to November, is the season many surfers prefer: consistent swell, lighter winds and relatively warm water. Winter brings the biggest swells and the reef breaks at their best. Summer is smaller and better for beginners, with northerly wind in the afternoons.',
      ],
      [
        'Is Ericeira suitable for beginners?',
        'Yes, but not at the famous reefs. Beginners learn at sandy beaches such as Foz do Lizandro and São Julião, where most schools operate. Coxos, Cave and São Lourenço are expert waves breaking over shallow rock.',
      ],
      [
        'How far is Ericeira from Lisbon?',
        'Around 45 minutes by motorway from Lisbon and its airport, depending on traffic. That is why many owners are Lisbon-based families who use the house at weekends and during the holidays.',
      ],
      [
        'Does the condominium insurance cover my apartment in Ericeira?',
        'Only the building and the common parts. Your contents, the improvements you have made to the apartment and your personal liability need a separate household policy.',
      ],
      [
        'Are my surfboards covered by my home insurance?',
        'Usually only while they are in the house, and sometimes only up to a limit per item. Boards, foils and cameras carried in the car or taken abroad need cover that follows them away from home, which is worth confirming in the wording.',
      ],
    ],
    related: [
      ['/en/blog/surfing-portugal-second-homes/', 'Surf &amp; Second Homes', 'Portugal, a surf nation — and the second homes it attracts'],
      ['/en/blog/surfing-nazare-second-home/', 'Nazaré', 'Surfing Nazaré — big waves and a home on the Silver Coast'],
      ['/en/blog/surfing-aljezur-second-home/', 'Aljezur', 'Surfing Aljezur — and a home on the Costa Vicentina'],
      ['/en/blog/coastal-clifftop-properties-algarve-subsidence-erosion-flood/', 'Coastal risk', 'Clifftop and coastal properties: erosion, subsidence and flood'],
      ['/en/private-clients/', 'Private Clients', 'Private client insurance in Portugal and Spain'],
    ],
  },

  // ---------------------------------------------------------------------------
  // Nazaré
  // ---------------------------------------------------------------------------
  {
    slug: 'surfing-nazare-second-home',
    de: 'surfen-nazare-zweitwohnsitz',
    tag: 'Nazar&eacute;',
    heroLabel: 'Nazar&eacute; &middot; Praia do Norte',
    gradient: 'linear-gradient(135deg,#1B2F3F 0%,#7F9BA8 100%)',
    title: 'Surfing Nazaré — big waves, the canyon and a home on the Silver Coast',
    metaTitle: 'Surfing Nazar&eacute; and Owning a Home There | Adler &amp; Rochefort',
    description:
      'Praia do Norte, the Nazar&eacute; Canyon and the biggest waves ever surfed &mdash; the town, the Silver Coast and what owning a high-value home there involves.',
    excerpt:
      'How a submarine canyon made a fishing town the capital of big-wave surfing, where residents surf on ordinary days, the homes on the Silver Coast, and the insurance points specific to Nazaré.',
    keywords:
      'surfing Nazaré, Praia do Norte, Nazaré Canyon, big wave surfing Portugal, Nazaré second home, Silver Coast property, luxury home Nazaré, home insurance Nazaré',
    chatTopics: 'casa_luxo,casa_geral',
    cta: {
      title: 'A home in Nazar&eacute; or on the Silver Coast?',
      sub: 'Send us the details and we will come back with a written assessment &mdash; including the points most policies miss for big-wave surfers.',
    },
    intro: `<p>On a big winter day, thousands of people stand on the headland below the lighthouse of the Forte de S&atilde;o Miguel Arcanjo and watch something that did not happen here twenty years ago: jet skis towing surfers into waves the height of a building. Nazar&eacute; &mdash; a fishing town of painted boats, drying fish and women in the traditional layered skirts &mdash; has become the world capital of big-wave surfing.</p>
<p>It has also become a place people want to own a house. This guide covers the waves and the culture first, then the property market on this stretch of the Silver Coast, and finally the insurance points that are specific to living next to the most famous wave in the world.</p>`,
    body: [
      [
        'Praia do Norte and the Nazaré Canyon',
        `<p>The explanation lies under the water. The <strong>Nazar&eacute; Canyon</strong>, one of the largest submarine canyons in Europe, runs from the deep ocean almost to the shore, reaching depths of several thousand metres. Winter swells travel up it with little loss of energy, then meet the shallower shelf and converge on <strong>Praia do Norte</strong>, north of the headland. On the right swell the result is a peaking wave far larger than anything else on the coast.</p>
<p>The world noticed in 2011, when the Hawaiian surfer Garrett McNamara rode a wave here that was recognised as a record. Since then Praia do Norte has produced a series of the largest waves ever surfed, by men and women &mdash; Maya Gabeira, Rodrigo Koxa and Sebastian Steudtner among them &mdash; and a professional community has formed around it: teams, jet-ski drivers, water-safety crews, photographers and drone pilots who arrive when the forecasts align and, increasingly, live in the town through the winter.</p>
<p>The big-wave season runs roughly <strong>from October to March</strong>, driven by powerful North Atlantic storms. The World Surf League has staged its tow-surfing event here with a winter waiting period, called on only when a qualifying swell appears; the town learns a day or two ahead and fills accordingly.</p>`,
      ],
      [
        'Surfing Nazaré when it is not enormous',
        `<p>Most days, of course, Praia do Norte is not twenty metres. On smaller swells it is a powerful, heavy beach break that still demands experience &mdash; the rips are strong and the shore break is unforgiving. The main town beach, south of the headland and sheltered by it, is often calm, and it is where families swim in summer.</p>
<p>For everyday surfing, residents look around them. <strong>S&atilde;o Martinho do Porto</strong>, a shell-shaped bay to the south, is gentle enough for children&rsquo;s first waves. <strong>Peniche and Baleal</strong>, about forty minutes away, offer a peninsula of beach breaks facing in different directions &mdash; there is almost always an offshore option &mdash; and the Supertubos barrel that hosts the Championship Tour. The lagoon at Foz do Arelho adds kite and wing-foiling. A surfer living in Nazar&eacute; can surf most days of the year; the big days are the spectacle.</p>
<p>Levels matter here more than anywhere. Tow-in at Praia do Norte is an elite discipline with dedicated safety teams, and nobody should paddle out on a big day without that background. For visiting and resident families, the experience is watching from the lighthouse and surfing the beaches around.</p>`,
      ],
      [
        'The town, the Sítio and the Silver Coast',
        `<p>Nazar&eacute; has two levels. The lower town, <strong>Praia</strong>, is a grid of narrow streets and fishermen&rsquo;s houses behind the long beach and promenade. The <strong>S&iacute;tio</strong>, on the cliff above and reached by funicular, has the sanctuary, the main square and the views. Around them the <em>Costa de Prata</em> &mdash; the Silver Coast &mdash; runs south through S&atilde;o Martinho, Foz do Arelho and &Oacute;bidos to Peniche, with golf resorts, pine forest and farmland behind.</p>
<p>Buyers have followed the waves. Some are big-wave enthusiasts who want to be there for the season; many more are <strong>Lisbon families</strong>, <strong>Northern Europeans</strong> and <strong>Americans</strong> drawn by a coast that is about an hour and a quarter from Lisbon airport and considerably quieter than the Algarve. The high-value stock ranges from <strong>restored townhouses</strong> in Praia and the S&iacute;tio and <strong>seafront apartments</strong> on the promenade to <strong>contemporary villas</strong> on the plateau and in the countryside towards Alcoba&ccedil;a, and homes in the golf and resort developments further south.</p>
<p>Many owners live here year-round, and winter, when the swells arrive, is paradoxically the town&rsquo;s most animated season. The practical realities are those of an exposed Atlantic town: storms that drive rain and salt against façades, promenade flats exposed to spray, older buildings of stone and lime with timber floors, and crowded headland roads on the big days.</p>`,
      ],
      [
        'Protecting the house and the family',
        `<ul>
<li><strong>Storms and the seafront.</strong> Wind, storm and water damage are covered on most multi-risk policies, but wordings differ on sea inundation and wave impact &mdash; for promenade properties that distinction matters. Salt corrosion is maintenance, not an insured event.</li>
<li><strong>Old buildings.</strong> A townhouse in Praia or the S&iacute;tio should be insured for the cost of rebuilding in its original construction, typically higher than modern building rates; if it is classified, rebuilding may have to follow heritage rules. See <a href="/en/blog/renovating-listed-heritage-property-portugal/">heritage properties</a>.</li>
<li><strong>People and hazardous sports.</strong> The point most specific to Nazar&eacute;. Personal accident, life and many health and travel policies exclude or limit hazardous sports, and big-wave and tow-in surfing are the textbook case. Anyone in the family who surfs big waves, or drives a water-safety ski, should have the wording checked and, where needed, specialist cover arranged &mdash; medical evacuation included.</li>
<li><strong>Jet skis and drones.</strong> A personal watercraft needs its own policy with third-party liability, and the driver the appropriate licence. Drones used to film sessions fall under EU rules applied in Portugal by ANAC, including operator registration and, in many cases, third-party insurance; household liability sections often exclude aircraft of any kind.</li>
<li><strong>Kit and valuables.</strong> Cameras, lenses, boards and the design furniture that goes into a seafront apartment deserve a proper valuation and, where they travel, worldwide cover. See <a href="/en/blog/worldwide-cover-personal-possessions-portugal/">worldwide cover for possessions</a>.</li>
<li><strong>Letting in the season.</strong> Big-wave days and summer both create letting demand. A private home policy may exclude commercial letting; Alojamento Local requires its own cover. See <a href="/en/blog/alojamento-local-insurance-requirements/">AL insurance requirements</a>.</li>
</ul>`,
      ],
    ],
    checklist: [
      'Check how your policy treats sea inundation and wave impact if the property is on the seafront.',
      'Have personal accident and health wordings read for hazardous-sports exclusions before the season.',
      'Insure any jet ski separately and confirm the driver&rsquo;s licence; register drones and check their liability cover.',
      'Photograph and value cameras, boards and other kit; confirm cover away from home.',
      'Tell your insurer about any letting, even for a single big-wave week.',
    ],
    closing: `<p>Adler &amp; Rochefort is an ASF-registered insurance intermediary with offices in Lisbon and Lagos, advising private clients across Portugal and Spain. For a home in Nazar&eacute; we look at the house, the contents and the people together, and give you our view in writing &mdash; one adviser from the first conversation to any claim, with specialist markets where the risk requires it. The wider picture is in our guide to <a href="/en/blog/surfing-portugal-second-homes/">surfing Portugal and the second homes it attracts</a>.</p>`,
    faq: [
      [
        'When is the big-wave season in Nazaré?',
        'Roughly from October to March, when North Atlantic storms send the long-period swells that the Nazaré Canyon focuses onto Praia do Norte. The truly giant days are few each winter and are forecast several days ahead.',
      ],
      [
        'Can an ordinary surfer surf in Nazaré?',
        'Yes, on smaller days and on the beaches nearby, such as São Martinho do Porto, Baleal and Peniche. Praia do Norte on a big day is only for experienced tow-in teams with water-safety support; even on smaller days it is a powerful beach break with strong currents.',
      ],
      [
        'Does personal accident insurance cover big-wave surfing?',
        'Often not. Many personal accident, life, health and travel policies exclude or limit hazardous sports, and big-wave and tow-in surfing are common exclusions. The wording should be checked and specialist cover arranged where necessary.',
      ],
      [
        'Do I need insurance for a jet ski in Portugal?',
        'Yes. A jet ski needs its own policy with third-party liability, and the driver must hold the appropriate licence. A household policy does not normally extend to personal watercraft.',
      ],
      [
        'How far is Nazaré from Lisbon?',
        'About 120 kilometres, or around an hour and a quarter by motorway from Lisbon and its airport. Peniche is about forty minutes to the south.',
      ],
    ],
    related: [
      ['/en/blog/surfing-portugal-second-homes/', 'Surf &amp; Second Homes', 'Portugal, a surf nation — and the second homes it attracts'],
      ['/en/blog/surfing-ericeira-second-home/', 'Ericeira', 'Surfing Ericeira — and owning a home at the World Surfing Reserve'],
      ['/en/blog/surfing-sagres-second-home/', 'Sagres', 'Surfing Sagres — two coasts and a home on the cliffs'],
      ['/en/blog/coastal-clifftop-properties-algarve-subsidence-erosion-flood/', 'Coastal risk', 'Clifftop and coastal properties: erosion, subsidence and flood'],
      ['/en/private-clients/', 'Private Clients', 'Private client insurance in Portugal and Spain'],
    ],
  },

  // ---------------------------------------------------------------------------
  // Sagres
  // ---------------------------------------------------------------------------
  {
    slug: 'surfing-sagres-second-home',
    de: 'surfen-sagres-zweitwohnsitz',
    tag: 'Sagres',
    heroLabel: 'Sagres &middot; Cabo de S&atilde;o Vicente',
    gradient: 'linear-gradient(135deg,#2A4256 0%,#B7B79A 100%)',
    title: 'Surfing Sagres — two coasts at the end of Europe, and a home on the cliffs',
    metaTitle: 'Surfing Sagres and Owning a Home There | Adler &amp; Rochefort',
    description:
      'Sagres surfs on two coasts almost all year: Tonel, Beliche, Mareta, Zavial. The culture, the natural park and what a high-value home on the cliffs requires.',
    excerpt:
      'West coast or south coast: why Sagres is surfable almost every day, the waves and the way of life at the end of Europe, the homes the natural park allows, and how to protect them.',
    keywords:
      'surfing Sagres, Tonel, Beliche, Mareta, Zavial, Sagres surf, Vila do Bispo, Sagres second home, luxury home Sagres, Costa Vicentina natural park, home insurance Sagres',
    chatTopics: 'casa_luxo,casa_geral',
    cta: {
      title: 'A house in Sagres or Vila do Bispo?',
      sub: 'Send us the details and we will come back with a written assessment &mdash; wind, cliffs, park rules, empty months and all.',
    },
    intro: `<p>At the south-western tip of mainland Europe the land ends in two lines of cliff meeting at a right angle, with the lighthouse of Cabo de S&atilde;o Vicente at the corner. For surfers that geography is everything: Sagres faces the open Atlantic to the west and the sheltered south coast of the Algarve at the same time, and on almost any day of the year one of them is working.</p>
<p>It is an austere, windswept and beautiful place, and that is exactly what draws the people who buy here. This guide starts with the waves and the way of life, moves on to the homes the natural park allows, and ends with the points that matter when protecting a house on the cliffs.</p>`,
    body: [
      [
        'Two coasts, one wind',
        `<p>The logic of Sagres is simple. The <strong>west coast</strong> picks up every North Atlantic swell directly; the <strong>south coast</strong> is sheltered from it and from the prevailing northerly wind, which blows offshore there. When the west is too big or blown out, you drive five minutes to the south; when the south is flat, the west usually has something. Few places in Europe are as reliably surfable across the year.</p>
<ul>
<li><strong>Tonel</strong> &mdash; just west of the town beneath the fortress, the beach most people check first: consistent and powerful, best on moderate swells with light or easterly winds.</li>
<li><strong>Beliche</strong> &mdash; tucked under the cliffs towards the cape and reached by a long stairway, it comes alive on bigger winter swells with northerly winds.</li>
<li><strong>Mareta</strong> &mdash; the town beach, south-facing and sheltered; flat for much of the year, but on a big winter swell wrapping round the point it produces long, clean, offshore waves.</li>
<li><strong>Martinhal</strong> &mdash; the neighbouring bay, gentle and popular with schools, windsurfers and families.</li>
<li><strong>Zavial</strong> &mdash; a few kilometres east, a powerful wave on big swells and a winter favourite.</li>
<li><strong>Castelejo and Cordoama</strong> &mdash; west of Vila do Bispo, long open beaches under high dark cliffs; exposed, heavy and spectacular.</li>
</ul>
<p>Amado and Bordeira at Carrapateira are some twenty minutes north &mdash; see <a href="/en/blog/surfing-aljezur-second-home/">surfing Aljezur and the Costa Vicentina</a>.</p>`,
      ],
      [
        'Seasons and a day in Sagres',
        `<p>Autumn and winter bring the powerful swells and the south coast at its best; spring is changeable but often excellent. Summer brings smaller swells, long warm days and the <em>nortada</em>, a strong northerly that rises in the afternoon &mdash; the west is surfed at dawn and the south coast becomes the refuge. The water is cool all year: a 3/2&nbsp;mm wetsuit in summer, a 4/3&nbsp;mm in winter.</p>
<p>A typical day: a look at Tonel from the clifftop at first light, coffee in the square, a session on whichever coast the wind allows, a long lunch of grilled fish or <em>percebes</em> &mdash; the goose barnacles harvested from these very rocks &mdash; and a walk to the cape at sunset. The surf culture is small and outdoor: schools and surf camps, a few shapers and repairers, climbers on the cliffs, divers, and birdwatchers during the autumn migration. It feels closer to the Atlantic fringe of Ireland or Cornwall than to the resort Algarve half an hour to the east.</p>`,
      ],
      [
        'Owning a home at the end of Europe',
        `<p>Buyers in Sagres and the villages of the municipality of Vila do Bispo &mdash; Vila do Bispo itself, Raposeira, Budens, Salema, Burgau &mdash; are mostly people who choose remoteness deliberately: <strong>Northern Europeans</strong>, <strong>Lisbon families</strong> with a surfing habit, <strong>Americans</strong>, and <strong>founders and executives</strong> who value the silence and can work from anywhere with fibre. Many use the house for weeks at a time rather than weekends; some live here year-round.</p>
<p>Supply is limited, and that shapes everything. Most of this coast lies within the <strong>Parque Natural do Sudoeste Alentejano e Costa Vicentina</strong> and the Natura 2000 network, where new construction is tightly restricted and renovation of existing buildings is subject to park and municipal rules. High-value homes are therefore mostly <strong>contemporary villas</strong> on the few buildable plots, <strong>restored farmhouses</strong> inland, <strong>clifftop houses</strong> with extraordinary views and exposure to match, and village houses in Salema and Burgau.</p>
<p>Faro airport is around an hour and a quarter by motorway, Lisbon under three hours, and Lagos, with its shops and marina, about half an hour. The realities are wind and salt spray that age everything outdoors quickly, erosion on the cliff edge, distance &mdash; contractors, repairers and loss adjusters come from Lagos or further &mdash; and long empty spells between visits.</p>`,
      ],
      [
        'Protecting the house and the family',
        `<ul>
<li><strong>Rebuilding inside the park.</strong> After a serious loss, rebuilding may have to comply with current park and planning rules, with the delays and extra costs that follow. The sum insured, and the allowances for demolition, debris removal, professional fees and compliance with regulations, need to reflect that.</li>
<li><strong>Wind, salt and cliffs.</strong> Sudden storm damage is covered; progressive salt corrosion and coastal erosion normally are not, and landslip may be limited. See our local guide to <a href="/en/blog/home-insurance-sagres-vila-do-bispo/">home insurance in Sagres and Vila do Bispo</a> and <a href="/en/blog/coastal-clifftop-properties-algarve-subsidence-erosion-flood/">clifftop properties</a>.</li>
<li><strong>Empty months.</strong> Many policies restrict cover once a house has been unoccupied beyond a set period. Key-holder or home-watch visits, water shut-off and a monitored alarm are what insurers like to see. See <a href="/en/blog/second-homes-empty-months-unoccupancy-clause-voids-cover/">unoccupancy clauses</a>.</li>
<li><strong>Off-grid systems.</strong> Solar panels, batteries, boreholes and pumps should be declared and included in the sum insured. See <a href="/en/blog/solar-panels-home-batteries-ev-chargers-policy-modern/">solar and batteries</a>.</li>
<li><strong>Earthquake.</strong> An optional extension in Portugal, and worth considering in the south-west.</li>
<li><strong>Kit and people.</strong> Boards and e-foils in the car, cameras and drones need cover away from home. Check personal accident and health wordings for hazardous-sports exclusions, and medical evacuation for a remote coast.</li>
</ul>`,
      ],
    ],
    checklist: [
      'Review the sum insured with park rules, demolition and professional fees in mind.',
      'Check roofs, shutters and metalwork for salt damage before the winter.',
      'Arrange regular visits while the house is empty, and turn off the water between stays.',
      'Declare solar, batteries, boreholes and outbuildings.',
      'Confirm that boards, foils and cameras are covered in the car and abroad.',
    ],
    closing: `<p>Adler &amp; Rochefort is an ASF-registered insurance intermediary with offices in Lisbon and Lagos &mdash; half an hour from Sagres &mdash; advising private clients across Portugal and Spain. We start from the property, the way you use it and the people who use it, and give you our view in writing, with one adviser from the first conversation to any claim. The wider picture is in our guide to <a href="/en/blog/surfing-portugal-second-homes/">surfing Portugal and the second homes it attracts</a>.</p>`,
    faq: [
      [
        'Can you surf in Sagres all year?',
        'Almost. Because Sagres faces both the west coast and the south coast, one side is usually working: the west picks up the swell directly, while the south coast is sheltered and often offshore in the prevailing northerly wind.',
      ],
      [
        'Which beaches in Sagres suit beginners?',
        'Martinhal and, on smaller days, Mareta and Tonel with a school. Beliche, Zavial, Castelejo and Cordoama are better left to experienced surfers when the swell is up.',
      ],
      [
        'Can I build or extend a house in Sagres?',
        'Only within strict limits. Most of the coast is inside the Parque Natural do Sudoeste Alentejano e Costa Vicentina, where new construction is restricted and renovation is subject to park and municipal rules. It is worth checking what is permitted before buying.',
      ],
      [
        'What happens to my insurance if the house is empty for months?',
        'Many policies restrict cover, for example for theft or water damage, once a house has been unoccupied beyond a set period. Regular visits, water shut-off and an alarm, and telling the insurer how the house is used, keep the cover effective.',
      ],
      [
        'How far is Sagres from Faro airport?',
        'Around an hour and a quarter by motorway. Lagos is about half an hour away and Lisbon a little under three hours.',
      ],
    ],
    related: [
      ['/en/blog/surfing-portugal-second-homes/', 'Surf &amp; Second Homes', 'Portugal, a surf nation — and the second homes it attracts'],
      ['/en/blog/surfing-aljezur-second-home/', 'Aljezur', 'Surfing Aljezur — and a home on the Costa Vicentina'],
      ['/en/blog/surfing-lagos-second-home/', 'Lagos', 'Surfing from Lagos — and a home in a year-round town'],
      ['/en/blog/home-insurance-sagres-vila-do-bispo/', 'Sagres', 'Home insurance in Sagres and Vila do Bispo: the wind coast'],
      ['/en/private-clients/', 'Private Clients', 'Private client insurance in Portugal and Spain'],
    ],
  },

  // ---------------------------------------------------------------------------
  // Aljezur
  // ---------------------------------------------------------------------------
  {
    slug: 'surfing-aljezur-second-home',
    de: 'surfen-aljezur-zweitwohnsitz',
    tag: 'Aljezur',
    heroLabel: 'Aljezur &middot; Costa Vicentina',
    gradient: 'linear-gradient(135deg,#2E4A3A 0%,#C2B48A 100%)',
    title: 'Surfing Aljezur — Arrifana, Amado and a home on the Costa Vicentina',
    metaTitle: 'Surfing Aljezur and Owning a Home There | Adler &amp; Rochefort',
    description:
      'Arrifana, Monte Cl&eacute;rigo, Amoreira, Odeceixe and Amado: the surf of Aljezur&rsquo;s wild coast, the montes behind it, and protecting a high-value home there.',
    excerpt:
      'The greenest, wildest stretch of the Algarve: its beaches and waves, a slow outdoor culture, restored farmhouses on large plots &mdash; and wildfire, the risk that defines the hinterland.',
    keywords:
      'surfing Aljezur, Arrifana surf, Monte Clérigo, Amoreira, Odeceixe, Amado surf, Costa Vicentina, Aljezur second home, monte Aljezur, wildfire home insurance Algarve',
    chatTopics: 'casa_luxo,casa_geral',
    cta: {
      title: 'A monte or villa near Aljezur?',
      sub: 'Send us the details and we will come back with a written assessment &mdash; fire, water, outbuildings, empty months and the way you use the house.',
    },
    intro: `<p>North of Sagres the Algarve changes character. The resorts disappear, the cliffs turn dark and green, and the coast becomes a succession of wild beaches at the end of winding roads, backed by hills of pine, cork oak and eucalyptus. The municipality of Aljezur holds most of it, and for many surfers it is the most beautiful stretch of coast in Portugal.</p>
<p>It is also where some of the most characterful second homes in the country are found: old farmhouses restored on large plots, a few minutes from the sea. This guide covers the waves, the culture and the property first, and ends with protecting a house here &mdash; where the defining risk is not the ocean but fire.</p>`,
    body: [
      [
        'The beaches of the Aljezur coast',
        `<ul>
<li><strong>Arrifana</strong> &mdash; a crescent of sand beneath high cliffs, with a small fishing harbour and the Pedra da Agulha sea stack. The bay is sheltered from the northerly wind and works when the open coast is too big; at the northern end a right-hand reef point lines up on the larger swells for experienced surfers. On smaller days it is full of schools.</li>
<li><strong>Monte Cl&eacute;rigo</strong> &mdash; a little village of coloured houses around a beach break, good on moderate swells and quieter than Arrifana.</li>
<li><strong>Amoreira</strong> &mdash; where the Aljezur river meets the sea, with dunes and shifting river-mouth sandbanks that can produce excellent peaks.</li>
<li><strong>Odeceixe</strong> &mdash; at the mouth of the Seixe, on the border with the Alentejo, a beach split between river and sea; smaller, gentler and a favourite with families.</li>
<li><strong>Amado and Bordeira</strong> &mdash; at Carrapateira, just south in the municipality of Vila do Bispo. Amado is one of the great surf-school beaches of the Algarve: long, consistent and with peaks for every level.</li>
</ul>`,
      ],
      [
        'Swell, wind and seasons',
        `<p>This coast faces due west and catches everything the North Atlantic sends. <strong>September to November</strong> is the classic season, with groundswell, lighter winds and warm water; <strong>spring</strong> can be just as good. Winter is big, powerful and sometimes too much for the exposed beaches, which is when sheltered corners like Arrifana come into their own. Summer is smaller and busier: surf early, before the afternoon <em>nortada</em>, and spend the rest of the day on the beach or the river.</p>
<p>A day here tends to be unhurried: a check of two or three beaches, a session, lunch in Aljezur or at a beach restaurant, an afternoon walk on the clifftop Fishermen&rsquo;s Trail of the Rota Vicentina, sunset over Arrifana.</p>`,
      ],
      [
        'A slow, green, outdoor culture',
        `<p>Aljezur itself is a small town on a river, with the ruins of a Moorish castle above it and a reputation for its sweet potatoes. The surrounding hills have long attracted people seeking a different pace: long-established communities of Germans, Dutch and British who came decades ago, young families, artists, organic growers, yoga teachers and surf coaches. Surf and yoga retreats are part of the local economy, and the surf scene is relaxed and community-minded rather than competitive.</p>
<p>Compared with Sagres it is more pastoral; compared with Ericeira it has no real town to speak of. What it offers instead is space, landscape and the sense that the coast has been left largely as it was &mdash; much of it lies within the natural park.</p>`,
      ],
      [
        'Montes, villas and village houses',
        `<p>Buyers are <strong>Northern Europeans</strong>, <strong>Lisbon families</strong>, <strong>Americans</strong> and <strong>founders and executives</strong> who want privacy and land. The characteristic high-value home is a <strong>restored <em>monte</em></strong> &mdash; a traditional farmhouse, often extended with contemporary architecture &mdash; on a plot of several hectares in the valleys and hills, with a pool, outbuildings, stone walls and a view to the sea. There are also <strong>architect houses</strong> near Arrifana and in the Vale da Telha area, and <strong>village houses</strong> in Aljezur and Odeceixe.</p>
<p>Much of the coastal strip lies in the <strong>Parque Natural do Sudoeste Alentejano e Costa Vicentina</strong>, so building and renovation are closely controlled. Many rural properties run on <strong>boreholes and septic systems</strong>, some on <strong>off-grid solar</strong>, and are reached by dirt tracks or narrow cliff roads. Lagos is around half an hour away, Faro airport around an hour and a half, Lisbon under three hours. Some owners live here year-round; many come for weeks at a time.</p>`,
      ],
      [
        'Protecting the house and the family',
        `<ul>
<li><strong>Wildfire.</strong> The defining risk. The hills behind the coast, and the Serra de Monchique beyond, have burned on a large scale more than once this century &mdash; 2003 and 2018 are the years locals name. Fire is part of a standard multi-risk policy, but underwriters look closely at vegetation around the house, access for fire engines, water supply and roofing. Portuguese law requires owners of buildings in rural areas to manage vegetation in a strip around them, generally 50 metres, and a house that ignores it is harder to place.</li>
<li><strong>Rebuild under park rules.</strong> Rebuilding after a fire may have to follow current park and planning rules; the sum insured and the allowances for debris removal, fees and compliance should reflect that.</li>
<li><strong>Everything outside the house.</strong> Outbuildings, walls, pools, boreholes and pumps, solar panels and batteries should all be declared and included; they are often the costliest items to replace after a fire.</li>
<li><strong>Empty months.</strong> Unoccupancy clauses, key-holder or home-watch visits and water shut-off matter on a remote property. See <a href="/en/blog/second-homes-empty-months-unoccupancy-clause-voids-cover/">unoccupancy clauses</a>.</li>
<li><strong>Retreats and letting.</strong> A private home policy usually excludes commercial activity. Hosting surf or yoga retreats needs its own liability cover, and short-term letting its own Alojamento Local insurance. See <a href="/en/blog/retreat-organisers-liability-portugal/">retreat liability</a>.</li>
<li><strong>Kit and people.</strong> Boards and foils in the car, and personal accident wordings with hazardous-sports exclusions, are worth checking for surfing families.</li>
</ul>`,
      ],
    ],
    checklist: [
      'Clear vegetation around the house and outbuildings before summer, and keep a record of it.',
      'Check that fire engines can reach the house and that water is available on the plot.',
      'Include outbuildings, walls, pools, boreholes and solar in the sum insured.',
      'Arrange regular visits while the house is empty.',
      'Tell your insurer about any letting or retreat, however occasional.',
    ],
    closing: `<p>Adler &amp; Rochefort is an ASF-registered insurance intermediary with offices in Lisbon and Lagos, advising private clients across Portugal and Spain. For a monte near Aljezur we look at the house, the land, the contents and the people together, and give you our view in writing &mdash; one adviser from the first conversation to any claim. The wider picture is in our guide to <a href="/en/blog/surfing-portugal-second-homes/">surfing Portugal and the second homes it attracts</a>.</p>`,
    faq: [
      [
        'Which beach near Aljezur is best for beginners?',
        'Amado at Carrapateira and Arrifana on smaller days are the main surf-school beaches, and Odeceixe is gentle enough for children. Monte Clérigo and Amoreira are better on moderate swells for surfers with some experience.',
      ],
      [
        'What are the best months to surf in Aljezur?',
        'September to November, and often spring, bring consistent swell, lighter winds and relatively warm water. Winter is powerful and sometimes too big for the exposed beaches; summer is smaller, best surfed early before the northerly wind.',
      ],
      [
        'Is wildfire covered by home insurance in Portugal?',
        'Fire, including wildfire, is part of a standard multi-risk home policy. Insurers look at vegetation clearance, access and water supply, and the sum insured should include outbuildings, walls, pools and solar systems, which are often badly damaged in a fire.',
      ],
      [
        'Do I have to clear vegetation around my house?',
        'Yes. Owners of buildings in rural areas in Portugal must manage vegetation in a strip around them, generally 50 metres. It is a legal obligation, and insurers take it into account.',
      ],
      [
        'Can I host surf or yoga retreats at my house?',
        'A private home policy usually excludes commercial activity. Retreats need their own liability cover, and short-term letting needs Alojamento Local registration and insurance, so the use should be declared before the first guest arrives.',
      ],
    ],
    related: [
      ['/en/blog/surfing-portugal-second-homes/', 'Surf &amp; Second Homes', 'Portugal, a surf nation — and the second homes it attracts'],
      ['/en/blog/surfing-sagres-second-home/', 'Sagres', 'Surfing Sagres — two coasts and a home on the cliffs'],
      ['/en/blog/surfing-lagos-second-home/', 'Lagos', 'Surfing from Lagos — and a home in a year-round town'],
      ['/en/blog/coastal-clifftop-properties-algarve-subsidence-erosion-flood/', 'Coastal risk', 'Clifftop and coastal properties: erosion, subsidence and flood'],
      ['/en/private-clients/', 'Private Clients', 'Private client insurance in Portugal and Spain'],
    ],
  },

  // ---------------------------------------------------------------------------
  // Lagos
  // ---------------------------------------------------------------------------
  {
    slug: 'surfing-lagos-second-home',
    de: 'surfen-lagos-zweitwohnsitz',
    tag: 'Lagos',
    heroLabel: 'Lagos &middot; two coasts within reach',
    gradient: 'linear-gradient(135deg,#283113 0%,#B9A77A 100%)',
    title: 'Surfing from Lagos — two coasts within reach, and a home in a year-round town',
    metaTitle: 'Surfing Lagos and Owning a Home There | Adler &amp; Rochefort',
    description:
      'Meia Praia, Porto de M&oacute;s and Luz on winter swells, Arrifana and Amado half an hour west: surfing from Lagos, the homes there, and protecting them.',
    excerpt:
      'Lagos surfs on its own beaches in winter and has the whole west coast half an hour away. The town, the homes surfing families choose, and what protecting them involves.',
    keywords:
      'surfing Lagos Portugal, Meia Praia surf, Porto de Mós, Praia da Luz surf, surf Lagos Algarve, Lagos second home, luxury villa Lagos, home insurance Lagos',
    chatTopics: 'casa_luxo,casa_geral,lagos',
    cta: {
      title: 'A home in Lagos? Our office is here.',
      sub: 'Send us the details and we will come back with a written assessment &mdash; the house, letting, the boat and the kit.',
    },
    intro: `<p>Lagos is not, strictly speaking, a surf town. It sits on the south coast of the Algarve, sheltered from most of the Atlantic&rsquo;s swells, around a historic centre, a river and a marina. But it may be the best base in Portugal for a surfing family: its own beaches wake up on winter swells, and the whole wild west coast &mdash; Arrifana, Amado, Castelejo, Sagres &mdash; is half an hour away.</p>
<p>Add a year-round town, international schooling within reach and Faro airport an hour away, and it is easy to see why so many people who come for the surf end up living here. Adler &amp; Rochefort has one of its two offices in Lagos, so this is a coast we know well.</p>`,
    body: [
      [
        'Surfing in Lagos itself',
        `<p>The town&rsquo;s own beaches need a big west or south-west swell to wrap along the coast, which makes them winter spots &mdash; and good ones on the right day, when the west coast is too big and the northerly wind is offshore.</p>
<ul>
<li><strong>Meia Praia</strong> &mdash; the long beach east of the town, with gentle waves on winter swells, surf schools, stand-up paddle and, in summer, kite and wing-foiling when the afternoon breeze fills in.</li>
<li><strong>Porto de M&oacute;s</strong> &mdash; a south-facing bay under the cliffs west of Ponta da Piedade, which picks up the larger swells and can produce clean peaks.</li>
<li><strong>Praia da Luz</strong> &mdash; a village bay a few minutes further west, with reef and sand that come to life on bigger winter swells.</li>
</ul>
<p>Beyond surfing, the sea around Lagos is an outdoor playground: paddling or kayaking among the grottoes of Ponta da Piedade, sailing from the marina, diving, and dolphin watching offshore.</p>`,
      ],
      [
        'West or south: the daily decision',
        `<p>Most Lagos surfers are mobile, and the morning ritual is a look at the forecast and a decision. On a small or moderate swell with light winds, the west coast is the answer: <strong>Arrifana</strong> and <strong>Amado</strong> around half an hour away, <strong>Castelejo</strong> and <strong>Cordoama</strong> about the same, <strong>Tonel</strong> and <strong>Beliche</strong> at Sagres. On a big winter swell with northerly wind, the south coast &mdash; Zavial, Mareta or Lagos itself &mdash; is offshore and sheltered. The surf schools in town run vans every day to wherever the conditions are best, which suits children and visiting friends as much as beginners.</p>
<p>That rhythm shapes the surf community. Lagos has a large and settled scene &mdash; schools and coaches, board shops, repairers, surf-and-yoga houses, and a growing number of resident families whose children learn at Meia Praia or Amado and are soon driving themselves to Arrifana at dawn. A typical day for a surfer living here might be an early session on the west coast, back in town for work by ten, and a paddle round Ponta da Piedade or a sail from the marina in the evening light. Few places combine that much surf with that much ordinary life.</p>
<p>The seasons follow the pattern of the whole south-west: autumn and spring are the sweet spots, winter is big and powerful, summer smaller, busier and best at dawn. See our guides to <a href="/en/blog/surfing-sagres-second-home/">Sagres</a> and <a href="/en/blog/surfing-aljezur-second-home/">Aljezur</a> for the waves themselves.</p>`,
      ],
      [
        'A year-round town',
        `<p>What distinguishes Lagos from the surf villages of the west coast is that it is a real town all year: a walled historic centre that was a port of the Age of Discoveries, restaurants and markets, a marina, sports clubs, and a large international community. Buyers include <strong>Northern Europeans</strong> and <strong>British</strong> owners who have come for decades, <strong>Americans</strong>, <strong>Lisbon families</strong> and <strong>founders and executives</strong> who have moved their working lives here.</p>
<p>The high-value stock is varied: <strong>villas in the hills</strong> behind the town towards Bensafrim and Barão de São João, often on generous plots; <strong>golf and resort homes</strong> such as those around Meia Praia and near Luz; <strong>clifftop villas</strong> at Porto de M&oacute;s and along the coast to Luz; and <strong>apartments</strong> in the centre and at the marina. Many are let when the owners are away, and many owners keep a boat in the marina. The property-by-area detail is in our guide to <a href="/en/blog/home-insurance-lagos/">home insurance in Lagos</a>.</p>
<p>Because the town lives all year, homes here are used more and left empty less than on the west coast &mdash; but letting, boats and more people coming and going bring their own questions.</p>`,
      ],
      [
        'Protecting the house and the family',
        `<ul>
<li><strong>Letting.</strong> Alojamento Local requires its own compulsory insurance, and a private home policy may exclude commercial letting. Loss of rent after an insured event can be covered. See <a href="/en/blog/alojamento-local-insurance-requirements/">AL insurance requirements</a>.</li>
<li><strong>Clifftop and coastal homes.</strong> At Porto de M&oacute;s and Luz, insurers ask about the distance to the cliff edge; erosion is normally excluded as a gradual process. See <a href="/en/blog/coastal-clifftop-properties-algarve-subsidence-erosion-flood/">clifftop properties</a>.</li>
<li><strong>Apartments.</strong> The condominium policy covers the building, not your contents, improvements or liability.</li>
<li><strong>Boats in the marina.</strong> A boat needs its own policy, with liability and, where relevant, cover for racing or charter. See <a href="/en/blog/yacht-insurance-algarve-marinas/">yachts in Algarve marinas</a>.</li>
<li><strong>Pools, guests and liability.</strong> Friends borrowing boards, children at the pool, guests on the boat: family liability with a proper limit sits underneath all of it. See <a href="/en/blog/swimming-pools-jetties-private-access-liability-nobody-insures/">pools and liability</a>.</li>
<li><strong>Kit on the move.</strong> Boards, foils and wetsuits spend their lives in vans between Lagos and the west coast; confirm cover away from home and for theft from vehicles.</li>
<li><strong>Earthquake.</strong> An optional extension in Portugal, worth considering in the Algarve. See <a href="/en/blog/earthquake-cover-algarve-buildings/">earthquake cover</a>.</li>
</ul>`,
      ],
    ],
    checklist: [
      'Check that the home policy matches how the house is really used, letting included.',
      'Confirm loss-of-rent cover if the house earns income.',
      'Insure the boat separately and review the marina&rsquo;s requirements.',
      'List boards, foils and cameras and confirm cover in the car and abroad.',
      'Review the building sum insured against today&rsquo;s rebuild cost.',
    ],
    closing: `<p>Adler &amp; Rochefort is an ASF-registered insurance intermediary with offices in Lisbon and in Lagos, at Varandas de S&atilde;o Jo&atilde;o, advising private clients across Portugal and Spain. For a home in Lagos we look at the house, the letting, the boat and the family together, and give you our view in writing &mdash; one adviser from the first conversation to any claim. The wider picture is in our guide to <a href="/en/blog/surfing-portugal-second-homes/">surfing Portugal and the second homes it attracts</a>.</p>`,
    faq: [
      [
        'Can you surf in Lagos itself?',
        'Yes, mainly in winter, when big west or south-west swells wrap into Meia Praia, Porto de Mós and Praia da Luz. For most of the year Lagos surfers drive to the west coast, around half an hour away.',
      ],
      [
        'How far are the west coast beaches from Lagos?',
        'Arrifana, Amado and Castelejo are each around half an hour by car, and the beaches of Sagres a similar distance. Surf schools in Lagos run daily trips to wherever conditions are best.',
      ],
      [
        'Is Lagos a year-round place to live?',
        'Yes. Unlike the smaller surf villages, Lagos is a working town all year, with a historic centre, a marina, restaurants, services and a large international community, and Faro airport about an hour away.',
      ],
      [
        'Does my home insurance cover the house when it is let?',
        'Not necessarily. A private home policy may exclude commercial letting, and Alojamento Local requires its own compulsory insurance. The policy should reflect the way the house is actually used.',
      ],
      [
        'Do you have an office in Lagos?',
        'Yes. Adler & Rochefort has offices in Lagos, at Varandas de São João, and in Lisbon, and advises private clients across Portugal and Spain.',
      ],
    ],
    related: [
      ['/en/blog/surfing-portugal-second-homes/', 'Surf &amp; Second Homes', 'Portugal, a surf nation — and the second homes it attracts'],
      ['/en/blog/surfing-sagres-second-home/', 'Sagres', 'Surfing Sagres — two coasts and a home on the cliffs'],
      ['/en/blog/surfing-aljezur-second-home/', 'Aljezur', 'Surfing Aljezur — and a home on the Costa Vicentina'],
      ['/en/blog/home-insurance-lagos/', 'Lagos', 'Home insurance in Lagos: what local property actually needs'],
      ['/en/private-clients/', 'Private Clients', 'Private client insurance in Portugal and Spain'],
    ],
  },
];
