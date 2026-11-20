# -*- coding: utf-8 -*-
"""EN copy for the travel-insurance blog series (November 2026).

Rendered by scripts/build-travel-blog-articles.py. Rules followed: no insurer
names or wording claims (cover differs by plan; the offers show their own
limits); no fixed response times; no offer of calls; visa requirements are
described as published by the authorities and the reader is told to confirm
with the consulate. HTML is allowed in intro/body/faq answers.
"""

TQ = '/en/travel-insurance/#tq'

ARTICLES = [
# ---------------------------------------------------------------------------
dict(
    slug='portugal-d7-d8-visa-travel-insurance-repatriation',
    title='Travel Insurance for the Portugal D7 and D8 Visa: What the Consulate Asks For',
    meta_title='Portugal D7 & D8 Visa Travel Insurance: What Is Required',
    desc='The Portuguese D7 and D8 visa checklists ask for travel insurance covering medical expenses, urgent assistance and repatriation. What that means, how long to buy it for and what comes after.',
    standfirst='Every Portuguese residence visa checklist asks for the same document: valid travel insurance covering medical expenses, urgent medical assistance and possible repatriation. It is the one insurance step in the D7 or D8 process that can be done online in minutes — provided you buy the right thing.',
    tag='Visas · Travel',
    image='/images/blog/topics/1631217868264-e5b90bb7e133.jpg',
    form='Travel insurance',
    toc=[('requirement', 'What the checklist actually says'), ('why-travel', 'Why travel insurance, not health insurance'),
         ('how-long', 'How long the policy should run'), ('checklist', 'What to check on the certificate'),
         ('after', 'What comes after the visa'), ('faq', 'Frequently asked questions')],
    intro='''<h2 id="requirement">What the checklist actually says</h2>
<p>The VFS Global checklists for Portuguese residence visas — the D7 for passive income and retirement, the D8 for remote work, and the other national visas — list the same requirement: <em>valid travel insurance, covering necessary medical expenses, including urgent medical assistance and possible repatriation</em>. The British checklists add that UK nationals may present a stamped S1 form instead.</p>
<p>Three elements, then, have to be visible on the certificate: medical expenses, urgent (emergency) medical assistance and repatriation. A policy that leaves one of them out is the most common reason for a document to be questioned.</p>
''',
    body='''<h2 id="why-travel">Why travel insurance, not health insurance</h2>
<p>The requirement is for the journey and the first period in Portugal, before you hold residence. Portuguese domestic health insurance is designed for residents: it needs a Portuguese address and tax number, and it does not include repatriation. International health insurance can include evacuation and repatriation, but it is a long-term contract, priced accordingly, and underwriting takes time.</p>
<p>A travel policy with medical and repatriation cover is the document built for this stage. On our <a href="/en/travel-insurance/">travel insurance page</a> you can choose the <strong>Expatriation (1 year)</strong> or <strong>Digital nomad / remote work</strong> trip type, set Portugal as the destination and compare offers by medical limit and repatriation before you buy.</p>

<h2 id="how-long">How long the policy should run</h2>
<p>The checklists do not set one duration for everyone, and practice differs between consulates and VFS centres. Some ask for cover for the length of the visa (four months for the D7 and D8 residence visa), some for a longer period that reaches the residence appointment in Portugal. Before you buy, read the current checklist of the consulate where you apply — and if it is unclear, buy for the longer period rather than the shorter.</p>

<h2 id="checklist">What to check on the certificate</h2>
<ul>
<li><strong>The three guarantees by name:</strong> medical expenses abroad, emergency assistance and medical repatriation.</li>
<li><strong>Portugal included</strong> in the territorial scope, and the Schengen area if you will travel within it.</li>
<li><strong>The dates</strong> match the travel dates on your application.</li>
<li><strong>Every applicant named</strong>, including children travelling with you.</li>
<li><strong>The policy documents</strong> (IPID and terms) are attached to every offer on our page, so you can read them before you pay.</li>
</ul>

<h2 id="after">What comes after the visa</h2>
<p>Once you live in Portugal, travel insurance is no longer the right tool: it covers a trip, not a life. You will need annual health insurance where you live — domestic, international or both. The choice depends on your age, your medical history and whether you want to be treated outside Portugal. Our <a href="/en/international-health-insurance/domestic-or-international/">one-minute guide</a> sets out the difference, and our <a href="/en/international-health-insurance/">international health insurance</a> page covers the plans we place for residents.</p>

<div class="callout">
<div class="callout-title">Where this leads</div>
<p>For the visa: <a href="{tq}">compare travel insurance online</a> and buy the certificate you need. For life in Portugal afterwards: send us your ages, nationality and where you will live, and we reply in writing with the health insurance options.</p>
</div>
''',
    faq=[
        ('Is travel insurance accepted for the D7 visa?',
         'The consulate checklists ask for travel insurance covering medical expenses, urgent medical assistance and possible repatriation. Requirements are set by each consulate and can change, so check the current checklist where you apply.'),
        ('Can British applicants use an S1 form?',
         'The UK checklists state that British nationals may present a stamped S1 form as proof. Whether you are entitled to an S1 depends on your UK pension or benefits.'),
        ('Do I still need health insurance once I have residence?',
         'Yes. Travel insurance covers trips. As a resident you need annual health insurance in Portugal, domestic or international.'),
        ('Does the Golden Visa need travel insurance?',
         'The Golden Visa is a residence permit applied for without a consulate residence visa, so the consulate travel-insurance step does not arise in the same way. Health insurance is still part of living in Portugal.'),
    ],
    related=[('/en/travel-insurance/', 'Travel insurance', 'Compare and buy travel insurance online'),
             ('/en/international-health-insurance-portugal/', 'Health', 'International health cover in Portugal'),
             ('/en/international-health-insurance/domestic-or-international/', 'Health', 'Domestic or international health insurance?')],
),
# ---------------------------------------------------------------------------
dict(
    slug='schengen-visa-travel-insurance-portugal-spain',
    title='Schengen Visa Travel Insurance for Portugal and Spain: The Requirements Explained',
    meta_title='Schengen Visa Insurance for Portugal & Spain: Requirements',
    desc='A Schengen visa for Portugal or Spain needs travel medical insurance of at least €30,000, valid in every Schengen country for the whole stay, with repatriation. How to buy a policy that meets it.',
    standfirst='If you need a visa to visit Portugal or Spain, travel medical insurance is not optional: it is one of the documents the consulate checks. The rules are the same for all Schengen countries, and they are precise.',
    tag='Visas · Travel',
    image='/images/blog/topics/1631217868264-e5b90bb7e133.jpg',
    form='Travel insurance',
    toc=[('rules', 'The three rules'), ('who', 'Who needs it'), ('buying', 'Buying a compliant policy'),
         ('family', 'Families, business visitors and property buyers'), ('faq', 'Frequently asked questions')],
    intro='''<h2 id="rules">The three rules</h2>
<p>The EU Visa Code sets the same insurance requirement for every short-stay Schengen visa, whether you apply at a Portuguese or a Spanish consulate:</p>
<ol>
<li><strong>At least €30,000</strong> of cover for medical expenses, emergency hospital treatment and medical repatriation, including repatriation in case of death.</li>
<li><strong>Valid in every Schengen country</strong>, not only in the country of your main destination.</li>
<li><strong>Valid for the whole stay</strong> — every day of the visa you apply for.</li>
</ol>
<p>Portugal's Ministry of Foreign Affairs and the Spanish consulates publish the same conditions on their own pages.</p>
''',
    body='''<h2 id="who">Who needs it</h2>
<p>The requirement applies to nationals of countries that need a visa to enter the Schengen area — for example family members of residents, business visitors, students on short courses and buyers visiting property. Nationals of visa-exempt countries (the United Kingdom, the United States, Canada, Brazil, Australia and others) do not apply for a Schengen visa and are not asked for this document at the border, although travel insurance remains the sensible choice for them too.</p>

<h2 id="buying">Buying a compliant policy</h2>
<p>On our <a href="/en/travel-insurance/">travel insurance page</a>, choose the <strong>Schengen visa application</strong> trip type. The plans returned for that trip type meet the €30,000 minimum. Then check three things before you pay:</p>
<ul>
<li>the destination is the <strong>Schengen area</strong>, not a single country;</li>
<li>the dates cover the <strong>full period of the visa</strong> requested, including the day you enter and the day you leave;</li>
<li>the certificate shows <strong>medical expenses and repatriation</strong> and names every traveller.</li>
</ul>
<p>€30,000 is a minimum, not a recommendation. A fall or a cardiac event in a private hospital in Lisbon or Madrid can cost more, and the offers on our page are ranked by medical cover first for that reason.</p>

<h2 id="family">Families, business visitors and property buyers</h2>
<p>Parents visiting a son or daughter who lives in Portugal or Spain are the most frequent case we see. Older travellers should look carefully at how each plan treats medical conditions they already have: rules differ from one insurer to the next and are set out in the policy terms linked on each offer. For business visitors who come several times a year, a multiple-entry visa needs insurance for the first trip; check with the consulate what it asks for the following ones.</p>

<div class="callout">
<div class="callout-title">Where this leads</div>
<p><a href="{tq}">Compare Schengen visa insurance online</a>, choose a plan and receive the certificate after payment. For a group or a situation the online offers do not fit, write to us with the details.</p>
</div>
''',
    faq=[
        ('What is the minimum cover for a Schengen visa?',
         '€30,000 for medical expenses, emergency hospital treatment and repatriation, valid in all Schengen countries for the whole stay.'),
        ('Does the insurance have to cover the whole Schengen area?',
         'Yes. Insurance valid only in Portugal or only in Spain does not meet the Visa Code requirement.'),
        ('Do UK or US citizens need Schengen visa insurance?',
         'No. They are visa-exempt for short stays and do not apply for a Schengen visa. Travel insurance is still advisable.'),
        ('Can I buy the insurance before the visa is granted?',
         'Yes — the consulate asks for it with the application. Check the cancellation terms of the policy in case the visa is refused.'),
    ],
    related=[('/en/travel-insurance/', 'Travel insurance', 'Compare and buy travel insurance online'),
             ('/en/blog/portugal-d7-d8-visa-travel-insurance-repatriation/', 'Visas', 'Travel insurance for the D7 and D8 visa'),
             ('/en/blog/ghic-vs-travel-insurance-spain-portugal/', 'Travel', 'GHIC or travel insurance?')],
),
# ---------------------------------------------------------------------------
dict(
    slug='spain-digital-nomad-visa-insurance-requirements',
    title='Spain Digital Nomad Visa: Which Insurance Do You Actually Need?',
    meta_title='Spain Digital Nomad Visa Insurance: What Is Accepted',
    desc='Spain’s digital nomad (telework) visa asks for health insurance from an insurer authorised in Spain, not travel insurance. What the requirement means, and where travel insurance still fits.',
    standfirst='Spain’s telework visa is often confused with Portugal’s D8. The insurance requirement is not the same: for Spain, a travel policy does not do the job.',
    tag='Spain · Visas',
    image='/images/blog/topics/1579684385127-1ef15d508118.jpg',
    form='International health insurance (IPMI)',
    toc=[('requirement', 'What Spain asks for'), ('not-travel', 'Why travel insurance is not enough'),
         ('options', 'The two routes that fit'), ('travel-role', 'Where travel insurance still fits'),
         ('faq', 'Frequently asked questions')],
    intro='''<h2 id="requirement">What Spain asks for</h2>
<p>The Spanish international telework visa and residence permit, created by the Startups Law (Ley 28/2022), ask for <strong>public or private health insurance with an insurer authorised to operate in Spain</strong>, covering the applicant and any family members for the period of residence. In practice, the private policies accepted are full health insurance plans: hospital, specialist and primary care, valid in Spain, without the limits typical of travel cover. Many applicants are also told that the policy should have no co-payments.</p>
''',
    body='''<h2 id="not-travel">Why travel insurance is not enough</h2>
<p>Travel insurance covers emergencies during a trip and getting you home. It is not designed to pay for ongoing care where you live, and it is not health insurance in the sense of the Spanish requirement. This is the point where Spain and Portugal differ: Portuguese residence visa checklists ask for travel insurance with repatriation for the visa stage, while the Spanish telework permit asks for health insurance from the start.</p>

<h2 id="options">The two routes that fit</h2>
<ul>
<li><strong>Spanish domestic health insurance</strong> — a plan written for residents of Spain, with a network of doctors and hospitals there.</li>
<li><strong>International health insurance</strong> — a plan that covers you in Spain and in other countries, often chosen by people who travel for work or want treatment in their home country. The plan must still meet the Spanish requirement, which is why the insurer’s authorisation in Spain and the policy certificate matter.</li>
</ul>
<p>Requirements are applied by the unit that processes the permit and can be interpreted strictly, so read the current guidance for your application before you choose. We tell you in writing which plan we propose and why, and see our page on <a href="/en/international-health-insurance/digital-nomads/">health insurance for digital nomads and remote workers</a>.</p>

<h2 id="travel-role">Where travel insurance still fits</h2>
<p>Travel insurance remains useful around the visa, not in place of it: for a scouting trip to choose a city, for the weeks in Spain before a health policy starts, and for trips outside Spain once you live there if your health plan is limited to Spain. For those, <a href="{tq}">compare travel insurance online</a>.</p>

<div class="callout">
<div class="callout-title">Where this leads</div>
<p>Send us your ages, nationality and where in Spain you will live. We reply in writing with the health insurance options for the telework permit and what each one covers.</p>
</div>
''',
    faq=[
        ('Is travel insurance accepted for the Spain digital nomad visa?',
         'The requirement is for public or private health insurance with an insurer authorised to operate in Spain. Travel insurance does not meet it.'),
        ('Can I use international health insurance?',
         'An international plan can be used where it meets the Spanish requirement, including the insurer’s authorisation in Spain. Check the certificate against the current guidance before you apply.'),
        ('Is the Portuguese D8 the same?',
         'No. Portuguese residence visa checklists ask for travel insurance with medical cover and repatriation for the visa stage; health insurance follows once you live in Portugal.'),
    ],
    related=[('/en/international-health-insurance/digital-nomads/', 'Health', 'Health insurance for digital nomads'),
             ('/en/health-insurance-portugal-spain/', 'Health', 'Health insurance in Portugal and Spain'),
             ('/en/travel-insurance/', 'Travel insurance', 'Compare and buy travel insurance online')],
),
# ---------------------------------------------------------------------------
dict(
    slug='insurance-gap-arrival-residence-permit-portugal-spain',
    title='Covered From Day One: Insurance Between Arrival and Your Residence Permit',
    meta_title='Insurance Before Your Residence Permit in Portugal or Spain',
    desc='Between landing in Portugal or Spain and holding a residence permit there are weeks or months when some health plans cannot yet be issued. How to stay covered through that gap.',
    standfirst='You have the visa, the flights and a rented house. What many families do not have is insurance that is valid on the day they land and keeps them covered until the residence card arrives.',
    tag='Moving · Health',
    image='/images/blog/topics/1579684385127-1ef15d508118.jpg',
    form='International health insurance (IPMI)',
    toc=[('gap', 'Where the gap comes from'), ('bridge', 'Three ways to bridge it'),
         ('order', 'The order we suggest'), ('faq', 'Frequently asked questions')],
    intro='''<h2 id="gap">Where the gap comes from</h2>
<p>Domestic health insurance in Portugal is issued to people who live there: insurers ask for a Portuguese address and a tax number (NIF) for every insured person, children included, and some ask for the residence permit itself before they accept the application. Residence permits take time to be issued. The result is a period — sometimes short, sometimes several months — in which you live in the country but cannot yet hold every type of local policy.</p>
<p>The same pattern exists in Spain, where domestic plans are written for residents of Spain.</p>
''',
    body='''<h2 id="bridge">Three ways to bridge it</h2>
<ol>
<li><strong>Extend the travel insurance used for the visa.</strong> A travel policy with medical cover and repatriation, bought for a long enough period, protects you against emergencies while you settle. It does not cover routine care or conditions that are not urgent. <a href="{tq}">Compare long-stay and expatriation plans online</a>.</li>
<li><strong>Start international health insurance before you move.</strong> An international plan does not need a local address or residence permit; it needs your date of birth, nationality and the country where you will live. It is underwritten before it starts, and underwriting takes time — plan for it weeks, not days, before your move.</li>
<li><strong>Take out a domestic plan as soon as the insurer accepts it.</strong> Domestic plans have waiting periods before some treatment is covered, so starting earlier means the waiting periods end earlier. Which insurer accepts you before the residence card, and which only after, differs.</li>
</ol>

<h2 id="order">The order we suggest</h2>
<p>For most families: travel insurance from the day of travel, international or domestic health insurance arranged in parallel, and the travel policy kept until the health plan has started and any waiting periods you care about have passed. For people over 65, or with medical conditions, the choice of health plan narrows and should be made before the move, not after — see <a href="/en/international-health-insurance/domestic-or-international/">domestic or international health insurance</a>.</p>

<div class="callout">
<div class="callout-title">Where this leads</div>
<p>Tell us your arrival date, ages, nationality and where you will live. We reply in writing with the sequence that keeps you covered, and you can buy the travel part <a href="{tq}">online</a> in the meantime.</p>
</div>
''',
    faq=[
        ('Can I get Portuguese health insurance before my residence permit?',
         'Some insurers accept applications with a Portuguese address and NIF before the residence permit is issued; others ask for the permit. Every insured person needs a NIF.'),
        ('Does travel insurance cover me while I wait for residence?',
         'It covers medical emergencies and repatriation for the period bought. It is not a substitute for health insurance once you live in the country.'),
        ('How early should I apply for international health insurance?',
         'Several weeks before you need it. International plans are underwritten before cover starts, and quotes are only valid close to the start date.'),
    ],
    related=[('/en/international-health-insurance/', 'Health', 'International health insurance'),
             ('/en/blog/portugal-d7-d8-visa-travel-insurance-repatriation/', 'Visas', 'Travel insurance for the D7 and D8 visa'),
             ('/en/travel-insurance/', 'Travel insurance', 'Compare and buy travel insurance online')],
),
# ---------------------------------------------------------------------------
dict(
    slug='travel-insurance-vs-international-health-insurance-frequent-travellers',
    title='Travel Insurance or International Health Insurance? A Guide for Frequent Travellers',
    meta_title='Travel vs International Health Insurance for Frequent Travellers',
    desc='If you live in Portugal or Spain and travel often, you may need travel insurance, international health insurance or both. How they differ, where they overlap and how to avoid paying twice.',
    standfirst='A family that lives in Lisbon or Marbella and spends a quarter of the year elsewhere often holds two policies that partly overlap — and still has a gap. The two products answer different questions.',
    tag='Travel · Health',
    image='/images/blog/topics/1579684385127-1ef15d508118.jpg',
    form='International health insurance (IPMI)',
    toc=[('difference', 'Two different questions'), ('compare', 'Side by side'),
         ('which', 'Which one, or both'), ('faq', 'Frequently asked questions')],
    intro='''<h2 id="difference">Two different questions</h2>
<p><strong>Travel insurance</strong> answers: <em>what happens if something goes wrong on this trip?</em> It pays emergency treatment abroad, brings you home, and can cover cancellation, baggage and liability. It ends when the trip ends, and it is not built for ongoing or planned treatment.</p>
<p><strong>International health insurance</strong> answers: <em>where and how will I be treated, wherever I am?</em> It is an annual health plan that covers planned and ongoing care in your country of residence and, depending on the area of cover chosen, in other countries — with evacuation and repatriation as options in many plans.</p>
''',
    body='''<h2 id="compare">Side by side</h2>
<ul>
<li><strong>Planned treatment</strong> (surgery, cancer treatment, specialist follow-up): international health insurance, within the plan’s limits. Travel insurance: no.</li>
<li><strong>Emergency abroad:</strong> both, depending on the area of cover of the health plan.</li>
<li><strong>Repatriation and assistance:</strong> core in travel insurance; optional or included in many international plans.</li>
<li><strong>Trip cancellation, baggage, liability abroad:</strong> travel insurance only.</li>
<li><strong>Medical conditions you already have:</strong> treated differently by each insurer in both products — read the terms.</li>
</ul>

<h2 id="which">Which one, or both</h2>
<p><strong>If your health plan is domestic</strong> (Portuguese or Spanish), it is built for treatment where you live. For trips abroad you need travel insurance — an <a href="/en/blog/annual-multi-trip-travel-insurance-second-home-owners/">annual multi-trip plan</a> if you travel several times a year.</p>
<p><strong>If your health plan is international with worldwide cover</strong>, it already covers medical treatment abroad. Travel insurance may still be worth having for cancellation, baggage and liability, without paying a second time for the medical part.</p>
<p><strong>If your international plan excludes the United States</strong>, a common way to keep the premium reasonable, a trip there needs travel insurance with a high medical limit.</p>
<p>Before you rely on either one for evacuation, read our article on <a href="/en/blog/medical-evacuation-repatriation-cover-residents-travel-constantly/">medical evacuation and repatriation for residents who travel constantly</a>.</p>

<div class="callout">
<div class="callout-title">Where this leads</div>
<p>Send us your current health policy and how your year really looks. We reply in writing with what is covered, where you would pay twice and where there is a gap. For a trip now, <a href="{tq}">compare travel insurance online</a>.</p>
</div>
''',
    faq=[
        ('Does international health insurance replace travel insurance?',
         'For medical treatment abroad, it can, within the plan’s area of cover. It does not cover trip cancellation, baggage or liability abroad.'),
        ('Does travel insurance cover me where I live?',
         'No. Travel insurance covers trips away from your country of residence.'),
        ('Is it worth excluding the United States from an international plan?',
         'It lowers the premium. If you then travel to the US, buy travel insurance with a high medical limit for each trip.'),
    ],
    related=[('/en/international-health-insurance/', 'Health', 'International health insurance'),
             ('/en/blog/medical-evacuation-repatriation-cover-residents-travel-constantly/', 'Travel · Health', 'Evacuation for residents who travel constantly'),
             ('/en/travel-insurance/', 'Travel insurance', 'Compare and buy travel insurance online')],
),
# ---------------------------------------------------------------------------
dict(
    slug='annual-multi-trip-travel-insurance-second-home-owners',
    title='Annual Multi-Trip Travel Insurance for Second-Home Owners in Portugal and Spain',
    meta_title='Annual Multi-Trip Travel Insurance for Second-Home Owners',
    desc='If you fly to your villa in Portugal or Spain several times a year, single-trip policies add up and leave gaps. What an annual multi-trip plan covers and the three lines to check.',
    standfirst='Owners who travel between London, Munich or New York and a house in the Algarve, Comporta or Mallorca five or six times a year often buy a policy per trip — or none at all. One annual plan is usually simpler, and safer.',
    tag='Second homes · Travel',
    image='/images/blog/topics/1587174486073-ae5e5cff23aa.jpg',
    form='Travel insurance',
    toc=[('why', 'Why an annual plan'), ('check', 'Three lines to check'),
         ('residence', 'Where you live decides the policy'), ('home', 'The house is a separate policy'),
         ('faq', 'Frequently asked questions')],
    intro='''<h2 id="why">Why an annual plan</h2>
<p>An annual multi-trip plan covers every trip you make in a twelve-month period, within its conditions. For owners who travel to their second home several times a year, it removes the risk of the one trip that was booked in a hurry and left uninsured, and it is often cheaper than the sum of single-trip policies.</p>
''',
    body='''<h2 id="check">Three lines to check</h2>
<ol>
<li><strong>Maximum days per trip.</strong> Annual plans cover trips up to a maximum length, which varies by plan. A spring that turns into ten weeks at the villa may exceed it. Choose the plan for your longest stay, not your average one.</li>
<li><strong>Medical and repatriation limits.</strong> A fall on a terrace or a cardiac event during a round of golf is the claim that matters. The offers on our page are ranked by medical cover first.</li>
<li><strong>Cancellation.</strong> Whether it is included, up to what amount per trip, and for which reasons. For owners, flights are often the smaller cost; events, guests and staff booked around the stay may be larger.</li>
</ol>

<h2 id="residence">Where you live decides the policy</h2>
<p>Travel insurance is bought by country of residence. If you live in the United Kingdom or Germany and travel to your house in Spain, you buy as a resident of the UK or Germany. If you have moved to Portugal and travel back to see family, you buy as a resident of Portugal — and your trips home are trips abroad. On our <a href="/en/travel-insurance/">travel insurance page</a>, choose <strong>Annual multi-trip</strong>, enter your country of residence and compare.</p>

<h2 id="home">The house is a separate policy</h2>
<p>Travel insurance protects the people travelling. The villa, its contents, the empty months and the guests who use it are a matter for the home policy. If you have not reviewed it since you started spending less time there, read <a href="/en/blog/second-homes-empty-months-unoccupancy-clause-voids-cover/">the unoccupancy clause that can void cover on an empty second home</a>, and see <a href="/en/holiday-home-insurance-spain/">holiday home insurance in Spain</a> and <a href="/en/second-home-insurance-portugal/">second home insurance in Portugal</a>.</p>

<div class="callout">
<div class="callout-title">Where this leads</div>
<p><a href="{tq}">Compare annual multi-trip plans online</a>. For the house itself, send us where it is, its rebuild value and how the year looks, and we reply in writing.</p>
</div>
''',
    faq=[
        ('Does an annual plan cover trips of any length?',
         'No. Each plan sets a maximum number of days per trip, shown in the offer. Choose one that covers your longest stay.'),
        ('Can I buy annual travel insurance if I live in Portugal?',
         'Select Portugal as your country of residence. The offers shown are those available for residents of Portugal.'),
        ('Does travel insurance cover my house?',
         'No. The property and its contents are insured under a home policy.'),
    ],
    related=[('/en/travel-insurance/', 'Travel insurance', 'Compare and buy travel insurance online'),
             ('/en/holiday-home-insurance-spain/', 'Holiday homes', 'Holiday home insurance in Spain'),
             ('/en/second-home-insurance-portugal/', 'Second homes', 'Second home insurance in Portugal')],
),
# ---------------------------------------------------------------------------
dict(
    slug='travel-insurance-jewellery-watches-limits',
    title='Does Travel Insurance Cover Your Jewellery and Watches?',
    meta_title='Does Travel Insurance Cover Jewellery and Watches?',
    desc='Baggage cover in travel insurance has single-item and valuables limits far below the value of a fine watch or a piece of jewellery. What it usually pays, and how to insure valuables you travel with.',
    standfirst='A watch worth €40,000 and a ring worth twice that go on holiday in a carry-on bag. The travel policy bought with the flights was never designed to pay for either.',
    tag='Valuables · Travel',
    image='/images/blog/topics/1613977257363-707ba9348227.jpg',
    form='Art, jewellery &amp; watches',
    toc=[('baggage', 'What baggage cover is built for'), ('limits', 'The limits that matter'),
         ('right-cover', 'The right cover for valuables'), ('practice', 'In practice, when you travel'),
         ('faq', 'Frequently asked questions')],
    intro='''<h2 id="baggage">What baggage cover is built for</h2>
<p>The baggage section of a travel policy pays for clothes, toiletries and personal effects that are lost, stolen or damaged during a trip. It has an overall limit per traveller and, inside it, lower limits for single items and for "valuables" — the category where jewellery and watches usually sit. Those limits vary by plan and are shown in the policy terms; on our <a href="/en/travel-insurance/">travel insurance page</a> each offer shows its baggage limit before you buy.</p>
''',
    body='''<h2 id="limits">The limits that matter</h2>
<ul>
<li><strong>Single-item limit.</strong> The most paid for any one item, whatever it cost.</li>
<li><strong>Valuables limit.</strong> A combined ceiling for jewellery, watches, cameras and similar items.</li>
<li><strong>Conditions.</strong> Many plans exclude valuables left unattended, in a hotel room outside the safe, or in checked luggage.</li>
<li><strong>Proof.</strong> Receipts or valuations, and a police report within a short period after a theft.</li>
</ul>
<p>For everyday luggage, these limits are adequate. For a collection, they are not — and that is by design, not a defect of the policy.</p>

<h2 id="right-cover">The right cover for valuables</h2>
<p>Fine jewellery and watches are insured under a valuables or all-risks policy that lists the pieces with an agreed value and covers them wherever you wear them, at home or abroad. In Portugal we place this cover together with a home policy; in Spain, a standalone policy for jewellery and watches is available. See <a href="/en/art-jewellery-watches-insurance/">art, jewellery and watch insurance</a>, <a href="/en/jewellery-watch-insurance-spain/">jewellery and watch insurance in Spain</a>, and our article on <a href="/en/blog/watches-jewellery-travelling-worldwide-all-risks/">worldwide all-risks cover for watches and jewellery</a>.</p>

<h2 id="practice">In practice, when you travel</h2>
<ol>
<li>Keep pieces of value with you or in the safe, never in checked luggage.</li>
<li>Keep current valuations and photographs, stored outside the luggage.</li>
<li>Check that your valuables policy covers the countries you are visiting and the time abroad.</li>
<li>Buy travel insurance for what it does well: medical expenses, repatriation, cancellation and everyday baggage — <a href="{tq}">compare online</a>.</li>
</ol>

<div class="callout">
<div class="callout-title">Where this leads</div>
<p>Send us the pieces you travel with, their values and where you live. We reply in writing with how they can be insured at home and abroad.</p>
</div>
''',
    faq=[
        ('Will travel insurance pay for a stolen watch?',
         'Up to the plan’s single-item and valuables limits, and only if its conditions were met. For a valuable watch, those limits are usually well below its value.'),
        ('Does home insurance cover jewellery abroad?',
         'Only if the policy includes worldwide cover for valuables. Check the wording, the limits and any security conditions.'),
        ('Can jewellery be insured on its own?',
         'In Spain, yes, with a standalone policy. In Portugal we place jewellery and watches together with a home policy.'),
    ],
    related=[('/en/art-jewellery-watches-insurance/', 'Valuables', 'Art, jewellery and watch insurance'),
             ('/en/blog/watches-jewellery-travelling-worldwide-all-risks/', 'Valuables', 'Watches and jewellery travelling worldwide'),
             ('/en/jewellery-watch-insurance-spain/', 'Spain', 'Jewellery and watch insurance in Spain')],
),
# ---------------------------------------------------------------------------
dict(
    slug='golf-travel-insurance-portugal-spain',
    title='Golf Travel Insurance for Portugal and Spain: What to Check Before You Tee Off',
    meta_title='Golf Travel Insurance for Portugal & Spain: What to Check',
    desc='Golf trips to the Algarve, Costa del Sol or Mallorca: medical cover, cancellation of pre-paid green fees, clubs in transit and liability on the course. What a travel policy covers and what it may not.',
    standfirst='The Algarve, the Costa del Sol and Mallorca receive golfers all year. Most travel policies cover the trip; fewer cover the golf in it as well as players assume.',
    tag='Golf · Travel',
    image='/images/blog/topics/1587174486073-ae5e5cff23aa.jpg',
    form='Travel insurance',
    toc=[('medical', 'Medical cover first'), ('equipment', 'Clubs and equipment'),
         ('fees', 'Pre-paid green fees and cancellation'), ('liability', 'Liability on the course'),
         ('owners', 'If you own a golf property'), ('faq', 'Frequently asked questions')],
    intro='''<h2 id="medical">Medical cover first</h2>
<p>The most expensive golf claims are not lost balls or broken clubs: they are falls, heat illness and cardiac events, often in players over sixty. Medical expenses and repatriation are the first two lines to compare, and the offers on our <a href="/en/travel-insurance/">travel insurance page</a> are ranked by medical cover for that reason.</p>
''',
    body='''<h2 id="equipment">Clubs and equipment</h2>
<p>Golf clubs are usually treated as baggage, with a single-item limit that may be lower than the value of a full set, and with conditions for equipment in the hold or left in a car. Some plans offer specific cover for sports equipment and its hire if the clubs are delayed. Read the baggage section of the plan you choose, or keep the clubs on a home or valuables policy that covers them away from home.</p>

<h2 id="fees">Pre-paid green fees and cancellation</h2>
<p>Tee times, golf packages and tournament entries are often paid in advance and are not refundable. Cancellation cover pays for pre-paid costs when you cannot travel for a reason listed in the policy, up to the amount insured. When you compare offers, tick cancellation cover and enter the full price of the trip, including the golf, so the limit is right.</p>

<h2 id="liability">Liability on the course</h2>
<p>A ball that injures another player or damages a car is a liability claim. Many travel policies include personal liability abroad; check the limit and any exclusions. Golf club and federation memberships sometimes include liability as well. If you live in Portugal or Spain, a <a href="/en/blog/family-liability-cover-portugal/">family liability policy</a> is the permanent answer.</p>

<h2 id="owners">If you own a golf property</h2>
<p>Many golfers own a villa or apartment on a resort. The house, its contents and the guests who use it are a matter for the home policy — see <a href="/en/blog/golf-homes-portugal-spain/">insuring golf homes in Portugal and Spain</a>.</p>

<div class="callout">
<div class="callout-title">Where this leads</div>
<p><a href="{tq}">Compare travel insurance for your golf trip online</a>, with cancellation cover for the green fees. For a group, a tournament or a golf property, write to us with the details.</p>
</div>
''',
    faq=[
        ('Is golf covered by standard travel insurance?',
         'Golf is not usually among the sports that need a special option, but check the list of activities in the plan. What differs most between plans is the cover for equipment, pre-paid fees and liability.'),
        ('Are my clubs covered if the airline loses them?',
         'Usually under baggage, up to the plan’s limits, with delay cover in some plans. Report the loss to the airline at the airport and keep the report.'),
        ('Does cancellation cover pre-paid green fees?',
         'If you include them in the trip price insured and you cancel for a reason the policy lists.'),
    ],
    related=[('/en/travel-insurance/', 'Travel insurance', 'Compare and buy travel insurance online'),
             ('/en/blog/golf-homes-portugal-spain/', 'Golf', 'Golf homes in Portugal and Spain'),
             ('/en/blog/family-liability-cover-portugal/', 'Liability', 'Family liability cover in Portugal')],
),
# ---------------------------------------------------------------------------
dict(
    slug='medicare-coverage-portugal-spain-travel-insurance',
    title='Does Medicare Cover You in Portugal or Spain?',
    meta_title='Does Medicare Cover You in Portugal or Spain? US Travelers',
    desc='Original Medicare generally does not pay for care outside the United States, and Medigap travel cover is limited. What American visitors and retirees need for Portugal and Spain.',
    standfirst='Americans are among the largest groups of visitors and new residents in Portugal and Spain. Many arrive assuming Medicare travels with them. In most cases, it does not.',
    tag='US · Travel',
    image='/images/blog/topics/1549317661-bd32c8ce0db2.jpg',
    form='Travel insurance',
    toc=[('medicare', 'What Medicare pays abroad'), ('medigap', 'Medigap and Medicare Advantage'),
         ('visit', 'If you are visiting'), ('move', 'If you are moving'), ('faq', 'Frequently asked questions')],
    intro='''<h2 id="medicare">What Medicare pays abroad</h2>
<p>According to Medicare’s own fact sheet, <strong>in most situations Medicare does not pay for health care or supplies you get outside the United States</strong>. The exceptions are narrow and concern care near the US border or on certain journeys; a hospital stay in Lisbon, Porto, Madrid or Málaga is not among them.</p>
''',
    body='''<h2 id="medigap">Medigap and Medicare Advantage</h2>
<p>Several standardised Medigap plans include foreign travel emergency cover. Medicare describes it as paying 80% of billed charges for certain medically necessary emergency care after a $250 annual deductible, with a <strong>lifetime limit of $50,000</strong>, and it applies to emergencies that begin in the first 60 days of a trip. It does not include medical repatriation. Some Medicare Advantage plans offer emergency cover abroad; it varies by plan, so ask your plan before you travel.</p>
<p>For a serious accident, a $50,000 lifetime limit with 20% co-insurance is a starting point, not a solution — and repatriation to the US on a medical flight can cost more than the limit on its own.</p>

<h2 id="visit">If you are visiting</h2>
<p>Buy travel insurance with medical expenses and repatriation for every trip, or an annual multi-trip plan if you visit several times a year. On our <a href="/en/travel-insurance/">travel insurance page</a>, select the United States as your country of residence, Portugal or Spain as the destination, and compare by medical limit. If no offer is returned for your situation, send us the trip details and we reply in writing.</p>

<h2 id="move">If you are moving</h2>
<p>Once you live in Portugal or Spain, Medicare will not pay for your care there, and you will need health insurance where you live. US citizens have fewer international options than other nationalities, as some international insurers do not accept them; we place international health insurance for American residents and can explain which plans apply. See <a href="/en/international-health-insurance/cigna-global/">Cigna Global</a> and our page on <a href="/en/international-health-insurance/">international health insurance</a>. Whether to keep Medicare Part B while living abroad is a separate decision with long-term consequences; take advice on it before you cancel anything.</p>

<div class="callout">
<div class="callout-title">Where this leads</div>
<p>Visiting: <a href="{tq}">compare travel insurance online</a>. Moving: send us your ages, the US state where you are resident and where you will live, and we reply in writing with health insurance options.</p>
</div>
''',
    faq=[
        ('Does Medicare cover me in Portugal?',
         'In most situations, no. Medicare generally does not pay for care received outside the United States.'),
        ('Does my Medigap plan cover travel abroad?',
         'Several Medigap plans include foreign travel emergency care: 80% after a $250 deductible, up to a $50,000 lifetime limit, for emergencies starting in the first 60 days of a trip.'),
        ('Do I need travel insurance as an American visitor?',
         'It is not a legal requirement for visa-exempt visitors, but without it you pay any medical bills and repatriation yourself.'),
        ('Why do you ask for my US state?',
         'For international health insurance, the state where a US citizen is resident affects how a plan is offered and taxed.'),
    ],
    related=[('/en/international-health-insurance/cigna-global/', 'Health', 'Cigna Global international health insurance'),
             ('/en/blog/making-a-claim-portugal-us-perspective/', 'Claims', 'Making a claim in Portugal: a US perspective'),
             ('/en/travel-insurance/', 'Travel insurance', 'Compare and buy travel insurance online')],
),
# ---------------------------------------------------------------------------
dict(
    slug='ghic-vs-travel-insurance-spain-portugal',
    title='GHIC or Travel Insurance? What Britons Need in Spain and Portugal',
    meta_title='GHIC vs Travel Insurance in Spain & Portugal: What You Need',
    desc='The UK GHIC gives access to state healthcare in Spain and Portugal on local terms, but no private treatment and no repatriation. What it covers, what it does not and why the NHS says to carry both.',
    standfirst='Spain and Portugal are the two countries British travellers visit most in southern Europe. The GHIC in their wallet is useful — and very often mistaken for insurance.',
    tag='UK · Travel',
    image='/images/blog/topics/1600585154340-be6161a56a0c.jpg',
    form='Travel insurance',
    toc=[('ghic', 'What the GHIC does'), ('not', 'What it does not do'), ('both', 'Why you need both'),
         ('owners', 'Owners and long stays'), ('faq', 'Frequently asked questions')],
    intro='''<h2 id="ghic">What the GHIC does</h2>
<p>The UK Global Health Insurance Card (or a UK EHIC that is still valid) gives you access to medically necessary <strong>state</strong> healthcare in Spain and Portugal, on the same terms as residents there. Where local residents pay a contribution, you pay it too. It is free, and you should travel with it.</p>
''',
    body='''<h2 id="not">What it does not do</h2>
<p>The UK government and the NHS are explicit: a GHIC or EHIC <strong>is not a replacement for travel insurance</strong>. It does not cover:</p>
<ul>
<li>treatment in <strong>private</strong> hospitals and clinics, where many tourists in the Algarve, the Costa del Sol or the islands are taken first;</li>
<li><strong>medical repatriation</strong> — being flown back to the UK;</li>
<li><strong>mountain or ski rescue</strong>;</li>
<li>anything that is not healthcare: cancellation, lost baggage, liability, extra accommodation.</li>
</ul>

<h2 id="both">Why you need both</h2>
<p>The UK government’s travel insurance guidance gives an example: a broken leg in Spain, with hospital treatment and possibly medical repatriation, can cost £25,000 or more. Travel insurance pays for what the GHIC does not and organises the assistance. On our <a href="/en/travel-insurance/">travel insurance page</a>, select the United Kingdom as your country of residence and compare offers by medical and repatriation limits.</p>

<h2 id="owners">Owners and long stays</h2>
<p>British owners of homes in Spain and Portugal who are not resident there remain UK residents for travel insurance, and an <a href="/en/blog/annual-multi-trip-travel-insurance-second-home-owners/">annual multi-trip plan</a> often fits best. Check the maximum days per trip against your longest stay — and remember the 90/180-day Schengen limit, which also changes how long the house stands empty (see <a href="/en/blog/uk-owners-spain-90-180-rule-holiday-home-insurance/">the 90/180-day rule and your Spanish holiday home</a>). If you become resident in Spain or Portugal, your healthcare entitlement changes and you will need health insurance where you live.</p>

<div class="callout">
<div class="callout-title">Where this leads</div>
<p>Carry your GHIC and <a href="{tq}">compare travel insurance online</a> before you go. For the house, write to us with where it is and how the year looks.</p>
</div>
''',
    faq=[
        ('Is the GHIC valid in Spain and Portugal?',
         'Yes. Both are EU countries where the UK GHIC gives access to medically necessary state healthcare on local terms.'),
        ('Does the GHIC cover private hospitals?',
         'No. It covers state healthcare only.'),
        ('Does the GHIC cover repatriation to the UK?',
         'No. Medical repatriation is covered by travel insurance, not by the GHIC.'),
        ('I have an old EHIC. Can I still use it?',
         'A UK EHIC can be used until it expires; after that, apply for a GHIC, or a new UK EHIC if you have rights under the Withdrawal Agreement.'),
    ],
    related=[('/en/travel-insurance/', 'Travel insurance', 'Compare and buy travel insurance online'),
             ('/en/blog/uk-owners-spain-90-180-rule-holiday-home-insurance/', 'UK owners', 'The 90/180-day rule and your Spanish home'),
             ('/en/blog/annual-multi-trip-travel-insurance-second-home-owners/', 'Travel', 'Annual multi-trip for second-home owners')],
),
]
