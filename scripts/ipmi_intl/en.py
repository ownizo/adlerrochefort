"""English: Allianz Care and Cigna Global pages under the existing EN hub.

Facts: see scripts/ipmi_intl/README.md (sources). No figure here that is not
already published on the site or stated by the owner.
"""
UI = {
    "home": "Home",
    "hub": "International health insurance",
    "meta": "EU-regulated insurance broker · ASF no. 425591790/3 · Lisbon · Reviewed 18 October 2026",
    "author": "Written and reviewed by <strong>Hugo Gonçalves</strong>, Founder &amp; Risk Management Specialist at Adler &amp; Rochefort. Degree in Business Management (University of Hertfordshire) and ongoing training at the Chartered Insurance Institute (CII), London.",
    "lang_policy": None,
    "facts_h2": "Key facts",
    "faq_h2": "Frequently asked questions",
    "related_h2": "Related pages",
    "cta": "Get a written quote",
    "form": {
        "hp": "Don&rsquo;t fill this in:",
        "name": "Full name *", "name_ph": "As shown on your passport",
        "dob": "Date of birth *",
        "nat": "Nationality *", "nat_ph": "Select your nationality",
        "country": "Country where you will live *", "country_ph": "Select a country",
        "state": "US state where you live *", "state_ph": "Select a state",
        "us_note": "For US citizens we quote Cigna Global, which accepts Americans living outside the United States. Your state matters for tax purposes.",
        "same_note": "International plans are designed for people living outside their country of nationality. Send the request anyway &mdash; if you hold a second nationality or another option fits, we will tell you.",
        "email": "Email *", "email_ph": "Where we send your quotes",
        "phone": "WhatsApp", "phone_ph": "Optional, with country code",
        "submit": "Request my quote",
        "small": "Your details are used only to prepare your quotation, under the GDPR. See our <a href=\"/en/privacy-policy/\">privacy policy</a>.",
        "success_h": "Thank you",
        "success_p": "We will come back to you in writing within one working day.",
        "trust": ["EU-regulated insurance broker", "Appointed by Allianz Care and Cigna Global", "Advice given in writing", "No fee to you"],
    },
    "table_note": "Indicative premiums before medical underwriting. Your premium is set by the insurer on your own details and confirmed in writing before you commit.",
}

HUB = None  # /en/international-health-insurance/ already exists

ALLIANZ = {
    "title": "Allianz Care International Health Insurance | Adler & Rochefort",
    "desc": "Allianz Care international health insurance for expats: Base, Enhanced and Signature plans, Europe or worldwide cover, real 2026 premiums. Quote from an appointed broker.",
    "eyebrow": "International health insurance · Allianz Care",
    "crumb": "Allianz Care",
    "h1": "Allianz Care international health insurance for expats",
    "lead": "Allianz Care is the international health brand of Allianz Partners. We are an EU-regulated broker appointed by Allianz Care: we configure the plan for where you actually live, handle the medical application and stay with you at claim time. Four details are enough to start.",
    "facts": [
        "Plans: Base, Enhanced and Signature, each with hospital treatment, a private room and medical repatriation built in.",
        "For individuals and families who live outside their country of nationality, for at least twelve months.",
        "Area of cover: a Europe-only option, plus worldwide options.",
        "Not available to US citizens or to residents of Brazil. Americans are placed with <a href=\"{HUB}cigna-global/\">Cigna Global</a>.",
        "Real 2026 premiums: from €5,241 a year (64, Europe, hospital only).",
        "To quote: full name, date of birth, nationality and the country where you will live. No fee to you.",
    ],
    "sections": [
        ("The Allianz Care plan range",
         "<p>In November 2025 Allianz Care launched a new range of plans for individuals and families living abroad for at least twelve months. The range is deliberately complete at the core, and you add day-to-day care according to how you use it.</p>"
         "<ul><li><strong>Three core plans: Base, Enhanced and Signature.</strong> Each includes in-patient treatment, a private room in hospital and medical repatriation as standard.</li>"
         "<li><strong>Maternity</strong> is included in Enhanced and Signature, after a twelve-month waiting period.</li>"
         "<li><strong>Out-patient and dental</strong> are optional additions.</li>"
         "<li><strong>Cancer screenings, health checks and hormone replacement therapy</strong> are covered across the range, and out-patient psychiatry and psychotherapy carry no waiting period.</li>"
         "<li><strong>A Europe area of cover</strong> sits alongside the worldwide options, useful when your life is in Europe and you do not need, or want to pay for, cover in the United States.</li></ul>"
         "<p>Benefit limits, waiting periods and exclusions vary by plan level and are set out in the Allianz Care table of benefits, which we send with every quote.</p>"),
        ("Who Allianz Care suits",
         "<p>Allianz Care is often the right plan for a family whose life is mainly in Europe or Asia, that wants hospital, private room and repatriation built in from the start, and that values a consistent claims experience. In our experience, Allianz Care stands out for the strength of its protection, its customer support and its claims handling.</p>"
         "<p>It is also a natural fit for people who move within Europe, for example from Germany, the Netherlands or the UK to Portugal or Spain, and want one policy that follows them if they move again.</p>"),
        ("Who cannot take Allianz Care",
         "<ul><li><strong>US citizens.</strong> Allianz Care does not accept them. For Americans living outside the United States we configure <a href=\"{HUB}cigna-global/\">Cigna Global</a>.</li>"
         "<li><strong>Residents of Brazil.</strong> Brazil requires residents to hold cover from a locally licensed insurer.</li>"
         "<li><strong>People living in their own country.</strong> International plans are for expatriates: a German citizen living in Germany, for example, is normally not eligible.</li></ul>"),
        ("What Allianz Care costs: real quotes",
         "<p>Real quotes we obtained for clients in September and October 2026, anonymised, with no deductible.</p>"
         "<div class=\"ipmi-table\"><table><thead><tr><th>Profile</th><th>Area of cover</th><th>Annual premium, entry to top level</th></tr></thead><tbody>"
         "<tr><td>One person, 64, living in Portugal</td><td>Europe</td><td>€5,241 (Base, hospital only) to €14,027 (Signature, with out-patient)</td></tr>"
         "<tr><td>One person, 43, living in Portugal</td><td>Worldwide</td><td>€8,818 (Base) to €16,641 (Signature), with out-patient and dental</td></tr>"
         "</tbody></table></div>"
         "<p>The levers are the plan level, the area of cover and the optional covers. A Europe-only area and hospital-only cover bring the premium down most.</p>"),
        ("Medical history and underwriting",
         "<p>You declare your medical history and Allianz Care sets your terms: a pre-existing condition may be covered, excluded or covered with a loading. Declaring everything is what protects a future claim. We help you complete the application clearly and explain the insurer's decision before you accept it. If the terms are not right for you, we can ask <a href=\"{HUB}cigna-global/\">Cigna Global</a> for its terms on the same history.</p>"),
        ("Why arrange Allianz Care through us",
         "<ul><li><strong>A second opinion built in.</strong> We are also appointed by Cigna Global, so we can show you both on the same terms instead of selling you one.</li>"
         "<li><strong>One adviser, quote to claim.</strong> The person who quotes your plan handles the application, the certificate, renewals and claims.</li>"
         "<li><strong>Regulated in the EU.</strong> Adler &amp; Rochefort is the brand of Ownizo, Unipessoal Lda., registered with Portugal's ASF under no. 425591790/3.</li>"
         "<li><strong>No fee to you.</strong> We are paid by the insurer.</li></ul>"),
    ],
    "faq": [
        ("Is Allianz Care the same as Allianz private health insurance in Portugal?", "No. Allianz Care is the international health brand of Allianz Partners, for people living outside their country of nationality, with cover in Europe or worldwide. Allianz health insurance in Portugal is a domestic plan built around a Portuguese hospital network."),
        ("Can a US citizen buy Allianz Care?", "No. Allianz Care does not accept US citizens. We place American clients living outside the United States with Cigna Global."),
        ("Is maternity covered?", "On Enhanced and Signature, after twelve months of cover. If a child is planned, the level that includes maternity should be chosen from the start, because the waiting period begins on day one."),
        ("Are pre-existing conditions covered?", "It depends on the medical underwriting. Allianz Care may cover a condition, exclude it or cover it with a loading. We explain the decision before you accept the policy."),
        ("What do you need to quote?", "Your full name, date of birth, nationality and the country where you will live. We reply in writing within one working day."),
    ],
    "form_h2": "Get your Allianz Care quote",
    "form_lead": "Four details are enough to start. We reply in writing within one working day, with Allianz Care configured for you and, where it helps, Cigna Global on the same terms.",
    "related": [("/en/international-health-insurance/", "International health insurance for expats"), ("{HUB}cigna-global/", "Cigna Global international health insurance"),
                ("/en/blog/allianz-care-vs-cigna-global-portugal-spain/", "Allianz Care vs Cigna Global"), ("/en/international-health-insurance/retirees-abroad/", "Retirees living abroad"), ("/en/cancer-cover-health-insurance-portugal/", "Cancer cover in health insurance")],
}

CIGNA = {
    "title": "Cigna Global International Health Insurance | Adler & Rochefort",
    "desc": "Cigna Global for expats and US citizens abroad: Silver, Gold and Platinum, optional modules, deductibles, real 2026 premiums. Quote from an appointed broker.",
    "eyebrow": "International health insurance · Cigna Global",
    "crumb": "Cigna Global",
    "h1": "Cigna Global international health insurance for expats",
    "lead": "Cigna Global is the individual international plan of Cigna Healthcare, built module by module. It is also the plan for US citizens living outside the United States. We are an EU-regulated broker appointed by Cigna Global: we build the plan with you, handle the application and stay with you at claim time.",
    "facts": [
        "Core levels: Silver, Gold and Platinum, with optional modules added one by one.",
        "Area of cover: worldwide excluding the United States, or worldwide including it.",
        "Accepts US citizens living outside the United States. Allianz Care does not.",
        "Deductibles from €275 to €7,400 on hospital cover; 10% off when you pay annually.",
        "Real 2026 premiums: couple aged 55 and 59, worldwide excl. USA, from €15,951 a year.",
        "To quote: full name, date of birth, nationality, the country where you will live and, for US nationals, the state. No fee to you.",
    ],
    "sections": [
        ("How Cigna Global is built",
         "<ul><li><strong>Three levels of core cover: Silver, Gold and Platinum.</strong> The core is international medical insurance: hospital stays, specialist treatment in hospital, cancer care and in-patient psychiatric care. Platinum carries the highest annual limit, without a fixed cap.</li>"
         "<li><strong>Four optional modules:</strong> International Outpatient, International Medical Evacuation, International Health and Wellbeing, and International Vision and Dental.</li>"
         "<li><strong>Area of cover:</strong> worldwide excluding the United States, or worldwide including it.</li>"
         "<li><strong>Deductible and cost-share:</strong> you choose a deductible and can add a cost-share percentage with an annual out-of-pocket maximum.</li>"
         "<li><strong>Maternity</strong> is part of Gold and Platinum once the mother has been insured for twelve months.</li></ul>"
         "<p>The strength of the design is flexibility: high core cover with a large deductible for protection against big bills, or a fuller plan with out-patient and dental for everyday use.</p>"),
        ("The United States in your cover",
         "<p>Including the United States is the single biggest driver of price. Plans that exclude the US still include emergency hospital treatment there, up to €75,000 on Silver and €200,000 on Gold, and paid in full on Platinum. When your country of nationality is inside your area of cover, temporary stays there are covered for up to 180 days per policy year.</p>"),
        ("US citizens living abroad",
         "<p>Cigna Global accepts US citizens who live outside the United States, which is why it is the plan we configure for American families. We ask for the state where you live or last lived because Cigna needs it for tax purposes. We price worldwide cover with and without the US so you can see what the US element really costs. See also <a href=\"/en/international-health-insurance/us-citizens-abroad/\">health insurance for US citizens abroad</a>.</p>"),
        ("What Cigna Global costs: real quotes",
         "<p>Real quotes we obtained for clients in September and October 2026, anonymised, with no deductible.</p>"
         "<div class=\"ipmi-table\"><table><thead><tr><th>Profile</th><th>Area of cover</th><th>Annual premium, Silver to Platinum</th></tr></thead><tbody>"
         "<tr><td>Couple, 55 and 59, living in Portugal</td><td>Worldwide excl. USA</td><td>€15,951 to €31,904, all modules, monthly payment</td></tr>"
         "<tr><td>Family of five: two adults around 40, three children under 8</td><td>Worldwide excl. USA</td><td>€19,769 to €39,634, all modules</td></tr>"
         "<tr><td>US couple, 67 and 68, moving to Portugal</td><td>Worldwide excl. USA</td><td>US$24,597 (Silver), US$35,738 (Gold), US$47,963 (Platinum)</td></tr>"
         "</tbody></table></div>"),
        ("How to bring the premium down",
         "<ul><li>Leave the United States out of the area of cover.</li>"
         "<li>Add a deductible: hospital deductibles run from €275 to €7,400 and out-patient deductibles from €110 to €1,100.</li>"
         "<li>Add only the modules you will use.</li>"
         "<li>Pay annually: Cigna Global gives 10% off compared with monthly payment.</li></ul>"
         "<p>If the plan is needed for a visa, check the deductible first: some consulates do not accept co-payments, so the plan has to be set up with the visa in mind.</p>"),
        ("Medical history and underwriting",
         "<p>Cigna Global underwrites on a medical questionnaire and may cover, exclude or load a pre-existing condition. The terms offered for the same history can differ from those of <a href=\"{HUB}allianz-care/\">Allianz Care</a>, which is one reason to apply through a broker who can present both.</p>"),
    ],
    "faq": [
        ("Can US citizens get Cigna Global?", "Yes, provided they live outside the United States. Cigna Global is the international plan we configure for American clients; Allianz Care does not accept US citizens."),
        ("Does a plan without US cover pay anything in the United States?", "Yes, emergency hospital treatment, up to €75,000 on Silver and €200,000 on Gold, and in full on Platinum."),
        ("Can I be treated in my home country?", "When your country of nationality is inside your area of cover, temporary stays there are covered for up to 180 days per policy year. International plans do not cover people who live in their own country."),
        ("How much can a deductible save?", "It depends on age and plan, but the deductible is the main lever on the premium. Hospital deductibles run from €275 to €7,400. We quote with and without one so you can see the difference."),
        ("What do you need to quote?", "Full name, date of birth, nationality, the country where you will live and, for US nationals, the state. We reply in writing within one working day."),
    ],
    "form_h2": "Get your Cigna Global quote",
    "form_lead": "Four details are enough to start. We reply in writing within one working day, with Cigna Global configured for you and, where you are eligible, Allianz Care on the same terms.",
    "related": [("/en/international-health-insurance/", "International health insurance for expats"), ("{HUB}allianz-care/", "Allianz Care international health insurance"),
                ("/en/international-health-insurance/us-citizens-abroad/", "US citizens living abroad"), ("/en/blog/allianz-care-vs-cigna-global-portugal-spain/", "Allianz Care vs Cigna Global"), ("/en/cancer-cover-health-insurance-portugal/", "Cancer cover in health insurance")],
}
