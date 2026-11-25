# -*- coding: utf-8 -*-
"""EN travel insurance landings (other trip types) and guides — 25 Nov 2026.
Built by scripts/build-travel-landings.py. Comparison service only."""

UI = {"en": dict(guides="Travel insurance guides by situation")}
P = {"en": {}}
E = P["en"]

E["nomad"] = dict(
    slug="digital-nomads", preset=dict(intent="digitalNomad"),
    title="Travel Insurance for Digital Nomads — Compare Premium Plans | Adler & Rochefort",
    desc="Compare travel insurance for digital nomads and remote workers: medical ceiling, repatriation and liability for months abroad. Several insurers, ranked by protection. Buy online.",
    crumb="Digital nomads", eyebrow="Travel insurance for digital nomads",
    h1="Travel insurance for digital nomads: months abroad, covered properly",
    lead="Working from Lisbon in spring, Bali in summer and Mexico City in winter is a lifestyle, not a holiday — and a standard holiday policy is not built for it. Compare nomad plans from several insurers, ranked by medical and repatriation cover.",
    sections=[
        ("What a nomad policy has to do", "<ul><li><strong>Cover long periods</strong>, often renewable month by month, without a return date fixed in advance.</li><li><strong>Several countries</strong> on one policy, including the USA if you will pass through it.</li><li><strong>High medical ceiling and repatriation</strong> at actual cost, with 24/7 assistance in English.</li><li><strong>Personal liability</strong> for damage you cause in a rented flat or a coworking space.</li><li><strong>Equipment.</strong> Laptops and cameras usually have low limits per item — read them in each offer.</li></ul>"),
        ("Nomad visas: what the consulate asks for", "<p>Portugal's D8 and Spain's digital nomad visa both ask for health cover. Depending on the consulate and the stage of the process, travel insurance may be accepted for the first period, or annual health insurance may be required. Check the exact wording you were given before you buy — see our guide to the <a href=\"/en/blog/spain-digital-nomad-visa-insurance-requirements/\">Spain digital nomad visa</a> and the <a href=\"/en/blog/portugal-d7-d8-visa-travel-insurance-repatriation/\">Portugal D7 and D8 visa</a>.</p>"),
        ("When you need health insurance instead", "<p>Once you settle in one country for most of the year, a travel policy is no longer the right tool: it covers trips, not a life abroad. That is when <a href=\"/en/international-health-insurance/digital-nomads/\">international health insurance for digital nomads</a> takes over.</p>"),
    ],
    faq=[
        ("Can I buy travel insurance if I have already left home?", "Some plans allow it, often with a waiting period; others must be bought before departure. The conditions are in each offer's documents."),
        ("Does a nomad plan cover my home country?", "Usually only for short visits, if at all. Read the territorial scope and the rules on returning home."),
        ("Is my laptop covered?", "Usually within the baggage limit, with a low limit per item. High-value equipment may need separate cover."),
    ],
    related=[("/en/international-health-insurance/digital-nomads/", "International health insurance for digital nomads")],
)

E["longstay"] = dict(
    slug="long-stay", preset=dict(intent="expat"),
    title="Long-Stay Travel Insurance — Months Abroad, Compared | Adler & Rochefort",
    desc="Compare long-stay travel insurance for sabbaticals, winters abroad and the months before a move: medical, repatriation and liability limits from several insurers. Buy online.",
    crumb="Long stays", eyebrow="Long-stay travel insurance",
    h1="Long-stay travel insurance: from a winter abroad to the months before a move",
    lead="A sabbatical, a winter in the Algarve, a season on the Costa del Sol, or the months between arriving in Portugal or Spain and getting a residence permit. Compare long-stay plans by the limits that matter when you are away for months.",
    sections=[
        ("Who long-stay cover is for", "<ul><li><strong>Winter residents</strong> spending three to six months in Portugal or Spain.</li><li><strong>Sabbaticals and career breaks</strong> with several countries in one trip.</li><li><strong>New arrivals</strong> waiting for residence and local health insurance — see <a href=\"/en/blog/insurance-gap-arrival-residence-permit-portugal-spain/\">insurance between arrival and the residence permit</a>.</li><li><strong>Families on extended stays</strong> with children in local schools for a term.</li></ul>"),
        ("What to compare", "<ul><li><strong>Maximum duration</strong> and whether the policy can be extended from abroad.</li><li><strong>Medical ceiling</strong> per person and direct payment to hospitals.</li><li><strong>Repatriation at actual cost</strong> and the return of family members.</li><li><strong>Visits home</strong> during the period: allowed, and for how long.</li><li><strong>Pre-existing conditions</strong>: each insurer treats them differently — declare them.</li></ul>"),
        ("The limit of a travel policy", "<p>Long-stay travel insurance still covers a stay away from your country of residence. When Portugal or Spain becomes home, you need health insurance there — <a href=\"/en/health-insurance-portugal-spain/\">domestic or international</a>.</p>"),
    ],
    faq=[
        ("How long can a long-stay plan last?", "It depends on the plan: several months is common and some reach a year. The maximum is shown in each offer."),
        ("Can I go home during the stay?", "Many plans allow short visits home. Check the conditions before you plan one."),
        ("Is it accepted for a residence visa?", "Sometimes, for the first period. Check the consulate's requirements before buying."),
    ],
    related=[("/en/international-health-insurance/short-term-stays/", "Short-term international health insurance, stays under 12 months")],
)

E["cancel"] = dict(
    slug="trip-cancellation", preset=dict(intent="cancellation"),
    title="Trip Cancellation Insurance for High-Value Trips — Compare | Adler & Rochefort",
    desc="Compare trip cancellation insurance for safaris, villas, yacht charters and long-haul holidays: cancellation limit, covered reasons and interruption. Several insurers, buy online.",
    crumb="Trip cancellation", eyebrow="Trip cancellation insurance",
    h1="Trip cancellation insurance for trips you cannot afford to lose",
    lead="A safari lodge, a villa for the family, a yacht charter or a long-haul trip booked a year ahead: non-refundable deposits add up fast. Compare cancellation plans by the amount they really pay and the reasons they accept.",
    sections=[
        ("Size the cover to the trip", "<p>The cancellation limit should match the total non-refundable cost: flights, accommodation, charter fees, guides, event tickets — for everyone travelling. A plan that caps cancellation at a few thousand euros is not protecting a six-figure booking.</p>"),
        ("What to compare", "<ul><li><strong>Covered reasons.</strong> A defined list (illness, death of a relative, damage to your home) or any justified reason.</li><li><strong>Interruption.</strong> The unused part of the trip and the extra cost of coming home early.</li><li><strong>When cover starts.</strong> Buy as soon as you pay the first deposit.</li><li><strong>Excess</strong> per claim and per person.</li><li><strong>Pre-existing conditions</strong> of the traveller and of close relatives.</li></ul>"),
        ("Cancellation alone, or the full package", "<p>If you already have strong medical cover for the trip, a cancellation-only plan may be enough. For long-haul and the USA, compare full plans: the medical ceiling matters more than anything else once you are there.</p>"),
    ],
    faq=[
        ("When should I buy cancellation insurance?", "As soon as you book or pay the first deposit; many plans do not cover reasons that arise before the purchase."),
        ("Does it cover a change of mind?", "No. Only the reasons listed in the policy, or any justified reason where the plan offers it."),
        ("Are villa and charter deposits covered?", "If they are non-refundable trip costs within the limit. Keep the booking terms and receipts."),
    ],
    related=[],
)

E["group"] = dict(
    slug="group-travel", preset=dict(intent="groupTravel"),
    title="Group Travel Insurance — Weddings, Golf Groups & Retreats | Adler & Rochefort",
    desc="Compare group travel insurance for destination weddings, golf groups, family reunions and company retreats in Portugal, Spain and beyond. One search for the whole group, buy online.",
    crumb="Group travel", eyebrow="Group travel insurance",
    h1="Group travel insurance: one search for the whole party",
    lead="A destination wedding in Comporta, a golf week in the Algarve, a family reunion in Mallorca or a leadership retreat in Madrid. Compare group plans with everyone on one quote, ranked by medical and repatriation cover.",
    sections=[
        ("Typical group trips", "<ul><li><strong>Destination weddings</strong> with guests flying in from several countries.</li><li><strong>Golf groups</strong> — see <a href=\"/en/blog/golf-travel-insurance-portugal-spain/\">golf travel insurance for Portugal and Spain</a>.</li><li><strong>Multi-generational family trips</strong>, where age limits matter.</li><li><strong>Company retreats and incentives</strong>.</li></ul>"),
        ("What to check for a group", "<ul><li><strong>Group size</strong> accepted and whether everyone must live in the same country.</li><li><strong>Ages</strong>: one older traveller can change the price or eligibility of the whole quote.</li><li><strong>Cancellation</strong> if one member cannot travel, and whether the others are covered.</li><li><strong>Liability</strong> for activities: golf, boats, sports.</li></ul>"),
        ("Guests from different countries", "<p>Travel insurance is priced by country of residence. Guests living elsewhere can use the same comparison with their own country of residence selected.</p>"),
    ],
    faq=[
        ("How many people can be on one quote?", "The comparison accepts up to 12 travellers per search; larger groups can run several searches."),
        ("Do all travellers need the same plan?", "On one quote, yes. Travellers with different needs can be quoted separately."),
        ("Are wedding guests from the USA covered?", "If they buy a plan with the USA as their country of residence, yes — they search with their own residence."),
    ],
    related=[],
)

E["study"] = dict(
    slug="students", preset=dict(intent="studyInternship"),
    title="Student Travel Insurance Abroad — Compare Premium Plans | Adler & Rochefort",
    desc="Compare travel insurance for students and interns abroad: medical ceiling, repatriation, liability and cover for the whole academic year. Several insurers, buy online.",
    crumb="Students", eyebrow="Travel insurance for students abroad",
    h1="Student travel insurance: a year abroad, properly covered",
    lead="A semester in London, a master's in the United States, an internship in Singapore. Universities set minimums; parents usually want more. Compare student plans by medical ceiling and repatriation, not by the cheapest premium.",
    sections=[
        ("What universities ask for — and what parents should want", "<ul><li><strong>The university's minimum</strong>, which is a threshold, not a target.</li><li><strong>High medical ceiling</strong>, essential in the USA and Canada.</li><li><strong>Repatriation</strong> and a family member's travel to the bedside.</li><li><strong>Personal liability</strong> in student housing.</li><li><strong>Mental health and sports</strong>: read how each plan treats them.</li></ul>"),
        ("USA, UK and the rest of the world", "<p>US universities often require a specific plan or a waiver form with minimum limits; check it before buying. In the UK, students on longer courses pay the immigration health surcharge, and travel insurance tops up repatriation and private care.</p>"),
        ("Internships and au pair stays", "<p>Internships with an employer abroad may need liability and work-related cover. The comparison includes study, internship and au pair trip types.</p>"),
    ],
    faq=[
        ("Will the university accept this policy?", "Compare the plan's limits with the university's written requirements; some US universities only accept their own plan or a formal waiver."),
        ("Can parents buy it for an adult student?", "Yes. The travel details and ages are entered for the student who is travelling."),
        ("Does it cover the whole academic year?", "Plans for study abroad usually cover long periods; the maximum duration is shown in each offer."),
    ],
    related=[],
)

# ------------------------------------------------------------------ guides
E["ees"] = dict(
    slug="ees-etias-missed-flights", kind="guide", preset=dict(intent="forTourism"),
    title="EES & ETIAS: Border Queues, Missed Flights and Travel Insurance | Adler & Rochefort",
    desc="The EU Entry/Exit System is live and ETIAS has no start date. What it means for UK, US and Canadian travellers to Portugal and Spain, and what travel insurance pays for missed flights and delays.",
    crumb="EES and ETIAS", eyebrow="EES & ETIAS: what changes for your trip",
    h1="EES and ETIAS: border queues, missed flights and what travel insurance pays",
    lead="Since April 2026 every non-EU traveller entering the Schengen area is registered with fingerprints and a facial image. The queues have been long, and ETIAS is still to come. Here is what it means for British, American and Canadian travellers — and for your policy.",
    sections=[
        ("What EES is, and what ETIAS will be", "<p>The Entry/Exit System (EES) replaces passport stamps for non-EU nationals on short stays. It has been fully operational at every external Schengen border since 10 April 2026. The first registration takes longer; later crossings should be faster.</p><p>ETIAS is a separate pre-travel authorisation for visa-exempt visitors, with a fee. The EU has not set its start date and has said it will announce it several months in advance. Until then, there is nothing to apply for.</p>"),
        ("Does travel insurance pay if the queue makes you miss a flight?", "<p>It depends on the wording. Some plans include <strong>missed departure</strong> or <strong>travel delay</strong> cover, but often only for defined causes — public transport failure, accidents, strikes, severe weather. Delays caused by border formalities, or arriving late at the airport, may be excluded. Read the missed-departure clause in each offer before you buy, and arrive early.</p>"),
        ("What still matters most", "<p>EES changes the border, not the risk. For British travellers the GHIC gives access to public healthcare only; for Americans and Canadians there is no public cover at all. A high medical ceiling and repatriation at actual cost remain the core of a good policy — see <a href=\"/en/blog/ghic-vs-travel-insurance-spain-portugal/\">GHIC vs travel insurance</a> and <a href=\"/en/blog/medicare-coverage-portugal-spain-travel-insurance/\">Medicare abroad</a>.</p>"),
        ("Second-home owners and the 90/180 rule", "<p>EES counts days automatically. Owners of homes in Portugal or Spain who are not EU residents should track their 90 days in any 180 carefully: overstaying is now recorded. An <a href=\"/en/travel-insurance/annual-multi-trip/\">annual multi-trip plan</a> covers repeated stays, within the days per trip of the plan.</p>"),
    ],
    faq=[
        ("Do I need ETIAS for Portugal or Spain now?", "No. ETIAS is not in operation and has no start date. Beware of websites charging for 'ETIAS applications'."),
        ("Does EES apply to UK citizens?", "Yes. British citizens are non-EU nationals and are registered under EES at their first entry."),
        ("Is a flight missed because of border queues covered?", "Only if the plan's missed-departure or delay wording covers that cause. Many do not; check before you buy."),
    ],
    related=[],
)

E["canada"] = dict(
    slug="canadian-snowbirds-portugal-spain", kind="guide", preset=dict(residence="CA", dest="PT", intent="forTourism"),
    title="Canadian Snowbirds in Portugal & Spain: Travel Insurance Guide | Adler & Rochefort",
    desc="Wintering in the Algarve or on the Costa del Sol? What provincial health plans pay abroad, how long you can stay away, and how to compare travel insurance for a long winter.",
    crumb="Canadian snowbirds", eyebrow="Canadian snowbirds in Portugal & Spain",
    h1="Canadian snowbirds in Portugal and Spain: travel insurance for a long winter",
    lead="More Canadians are trading Florida for the Algarve and the Costa del Sol. Provincial health plans travel badly, and a winter abroad is long. What to check before you go.",
    sections=[
        ("What your provincial plan pays abroad", "<p>Provincial plans pay only limited amounts for emergency care outside Canada — often a fraction of a private hospital bill — and nothing for repatriation. Each province also sets how long you can be away and keep your coverage. Check your province's rules before you plan a long winter.</p>"),
        ("What to compare for a winter abroad", "<ul><li><strong>Trip length</strong>: the whole winter on one policy, or an annual plan with enough days per trip.</li><li><strong>Medical ceiling</strong> and direct payment to hospitals in Portugal and Spain.</li><li><strong>Repatriation to Canada</strong> at actual cost, including a medical escort.</li><li><strong>Pre-existing conditions</strong> and stability periods: declare them accurately.</li><li><strong>Trips from Europe</strong> during the winter — Morocco, the UK, a cruise.</li></ul>"),
        ("Coming every year, or staying for good", "<p>If you are heading towards residence in Portugal or Spain, travel insurance stops being the right tool. See <a href=\"/en/international-health-insurance/retirees-abroad/\">international health insurance for retirees abroad</a>.</p>"),
    ],
    faq=[
        ("Can I buy travel insurance as a Canadian resident here?", "Yes. The comparison is preset with Canada as the country of residence and Portugal as the destination; change it to match your trip."),
        ("Does my provincial plan cover Portugal or Spain?", "Only limited emergency amounts and under its own conditions. It does not pay for repatriation."),
        ("Is the whole winter covered on one policy?", "Depending on the plan. Check the maximum trip length in each offer."),
    ],
    related=[],
)

E["ireland"] = dict(
    slug="ireland-ehic-portugal-spain", kind="guide", preset=dict(residence="IE", intent="forTourism"),
    title="Irish Travellers: EHIC vs Travel Insurance in Portugal & Spain | Adler & Rochefort",
    desc="Living in Ireland and travelling to Portugal or Spain? What the EHIC covers, what it does not, and how to compare travel insurance for holidays and second homes.",
    crumb="Ireland: EHIC", eyebrow="Irish travellers: EHIC or travel insurance?",
    h1="Travelling from Ireland: what the EHIC covers in Portugal and Spain — and what it does not",
    lead="Irish residents carry the European Health Insurance Card and many assume it is enough for a week in the Algarve or a month at a villa in Spain. It is a useful card, not a travel policy.",
    sections=[
        ("What the EHIC does", "<p>The EHIC gives access to state healthcare in Portugal and Spain on the same terms as local residents — including any patient charges. It is accepted in public hospitals and health centres.</p>"),
        ("What the EHIC does not do", "<ul><li>It does not pay for <strong>private hospitals and clinics</strong>, where many tourist areas have their emergency care.</li><li>It does not pay for <strong>repatriation</strong> to Ireland.</li><li>It does not cover <strong>mountain rescue</strong>, cancellation, baggage or liability.</li><li>It is not valid on <strong>cruise ships</strong> or outside the EU/EEA and Switzerland.</li></ul>"),
        ("Holiday homes and frequent trips", "<p>If you go several times a year, compare <a href=\"/en/travel-insurance/annual-multi-trip/\">annual multi-trip plans</a>. The comparison is preset with Ireland as country of residence.</p>"),
    ],
    faq=[
        ("Is the EHIC enough for Portugal?", "It covers public healthcare on local terms. For private care, repatriation and cancellation you need travel insurance."),
        ("Can I buy travel insurance here as an Irish resident?", "Yes. Select Ireland as country of residence — it is preset on this page."),
        ("Do I still need the EHIC with travel insurance?", "Carry both: many insurers expect you to use public care with the EHIC where appropriate."),
    ],
    related=[("/en/blog/ghic-vs-travel-insurance-spain-portugal/", "GHIC vs travel insurance in Spain and Portugal (UK)")],
)

E["seniors"] = dict(
    slug="over-75s", kind="guide", preset=dict(intent="forTourism"),
    title="Travel Insurance Over 75: Compare Plans That Still Protect | Adler & Rochefort",
    desc="Travel insurance for travellers over 75 and multi-generational family trips: age limits, pre-existing conditions, medical ceilings and repatriation. Compare several insurers.",
    crumb="Over 75s", eyebrow="Travel insurance over 75",
    h1="Travel insurance over 75: what to compare when age limits apply",
    lead="Grandparents on the family holiday, a long-haul anniversary trip, a winter in the sun. After 75 the choice narrows and the small print matters more. Enter each traveller's real age and compare what is still on offer.",
    sections=[
        ("Where age makes a difference", "<ul><li><strong>Maximum age</strong> at purchase, which varies by insurer and by plan type — annual plans are often stricter.</li><li><strong>Premiums by age band</strong>: one older traveller can raise the price of a family quote.</li><li><strong>Medical ceiling and repatriation</strong>: the cover that matters most at this age.</li></ul>"),
        ("Pre-existing conditions", "<p>Every insurer treats existing conditions differently: some exclude them, some cover them if stable, some ask for a declaration. Declare them accurately — an undeclared condition is the most common reason a claim is refused.</p>"),
        ("Multi-generational trips", "<p>Quote the whole family together first; if an older traveller limits the options, quote them separately on a plan built for their age.</p>"),
    ],
    faq=[
        ("Is there an upper age limit?", "Most plans have one, and it differs by insurer. The comparison shows only plans available for the ages you enter."),
        ("Are existing conditions covered?", "It depends on the plan and on the condition. Read the medical terms and declare them."),
        ("Is an annual plan possible over 75?", "Sometimes, but annual plans are often stricter on age than single-trip plans."),
    ],
    related=[("/en/international-health-insurance/retirees-abroad/", "International health insurance for retirees abroad")],
)

E["remote"] = dict(
    slug="remote-destinations-expeditions", kind="guide", preset=dict(intent="forTourism"),
    title="Travel Insurance for Safaris, Antarctica & Remote Trips | Adler & Rochefort",
    desc="Safaris, Antarctic and Arctic expeditions, Patagonia, the Himalayas: what a travel policy has to pay for medical evacuation from remote places, and how to compare plans.",
    crumb="Remote destinations", eyebrow="Safaris, polar and remote trips",
    h1="Safaris, polar expeditions and remote trips: insurance for when help is far away",
    lead="On a safari in Botswana, a ship off the Antarctic Peninsula or a trek in Patagonia, the nearest proper hospital can be a flight away. In remote places evacuation is the risk that costs most.",
    sections=[
        ("Evacuation is the core of the policy", "<p>Medical evacuation by light aircraft, helicopter or ship can cost more than the trip itself. Look for evacuation and repatriation <strong>at actual cost</strong>, organised by a 24/7 assistance team, and for a medical ceiling high enough for the country you will be taken to.</p>"),
        ("What to check for expeditions", "<ul><li><strong>Polar voyages</strong>: some operators require a minimum evacuation amount — compare it with the plan.</li><li><strong>Altitude</strong>: treks above a certain height may need the sports option or be excluded.</li><li><strong>Activities</strong>: kayaking, diving, glacier walks.</li><li><strong>Cancellation</strong> sized to the expedition fare, often paid a year ahead.</li></ul>"),
        ("Valuables on the road", "<p>Cameras, binoculars and watches have low limits per item in travel plans. For high-value pieces, see <a href=\"/en/art-jewellery-watches-insurance/\">art, jewellery and watches</a>.</p>"),
    ],
    faq=[
        ("Is helicopter evacuation covered?", "In many plans, within the repatriation and transport cover. Read the amount and conditions in each offer."),
        ("My expedition operator requires a minimum cover — will this plan meet it?", "Compare the operator's written requirement with the plan's evacuation and medical limits before you buy."),
        ("Is trekking at altitude covered?", "Often up to a stated altitude, or with the sports option. Check the policy terms."),
    ],
    related=[("/en/blog/medical-evacuation-repatriation-cover-residents-travel-constantly/", "Medical evacuation cover for residents who travel constantly")],
)

E["sports"] = dict(
    slug="sports-adventure", kind="guide", preset=dict(intent="forTourism", sports=True),
    title="Sports Travel Insurance: Diving, Sailing, Hunting, Polo & More | Adler & Rochefort",
    desc="Diving, sailing and regattas, hunting in Spain, polo, riding, marathons, kitesurf: how sports change a travel policy and how to compare plans with the sports option.",
    crumb="Sports trips", eyebrow="Sports and adventure travel insurance",
    h1="Sports travel insurance: diving, sailing, hunting, polo and more",
    lead="A regatta in Palma, a hunting weekend in Toledo, diving in the Red Sea, polo in Sotogrande, a marathon in New York. Many standard plans exclude sport. Compare plans with the sports option already ticked.",
    sections=[
        ("Why sport changes the policy", "<p>Sports raise the chance of injury and often need rescue. Most insurers group activities into categories: some are included, some need the sports option, some are excluded altogether. The list is in each policy's terms.</p>"),
        ("Activity by activity", "<ul><li><strong>Diving</strong>: maximum depth and certification; decompression chamber treatment.</li><li><strong>Sailing and regattas</strong>: distance from the coast, crewing and racing.</li><li><strong>Hunting</strong>: liability matters as much as medical cover — check firearm-related exclusions.</li><li><strong>Riding and polo</strong>: often a higher-risk category.</li><li><strong>Marathons and triathlons</strong>: competitions may be treated differently from training.</li><li><strong>Kitesurf and surf</strong>: frequent on the Portuguese and Spanish coast; see <a href=\"/en/travel-insurance/ski/\">ski insurance</a> for winter sports.</li></ul>"),
        ("Liability on the field", "<p>Personal liability abroad pays for injury or damage you cause to others. In sports with horses, boats or firearms, compare the liability limit carefully.</p>"),
    ],
    faq=[
        ("Is my sport covered?", "Check the list of activities in the policy terms; the sports option, ticked here, extends cover to more activities."),
        ("Are competitions covered?", "Often not, or only amateur events. Read the definition in each offer."),
        ("Is my equipment covered?", "Some sports options include equipment within a limit; high-value gear may need separate cover."),
    ],
    related=[("/en/blog/golf-travel-insurance-portugal-spain/", "Golf travel insurance for Portugal and Spain")],
)
