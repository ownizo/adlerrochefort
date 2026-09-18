/**
 * Content for the seven Spain informational articles — Phase 2.
 *
 * Three health, four property. Each routes commercial intent to exactly one
 * Spain commercial page (never to a Portuguese one), and none of them is a
 * second commercial landing: no quote form, no country-of-availability claim
 * beyond what the corresponding commercial page already states.
 *
 * Same compliance rules as spain-cluster.data.mjs: no Spanish insurer named,
 * no DGSFP registration, no invented statutory citation, no PT fact (ASF as
 * Spain's regulator, IMT, Decreto-Lei, bónus-malus, Cartão de Cidadão)
 * anywhere in the body. build-spain-articles.mjs's validate() step enforces
 * this the same way build-spain-cluster.mjs's does.
 *
 * The visa/residency article (H3) is the highest-risk piece in this file: it
 * makes no claim about which route requires what, states explicitly that
 * requirements depend on the route and the authority handling it, and never
 * promises that a policy will be accepted because it is labelled "visa
 * insurance". That discipline is deliberate, not an oversight — a wrong
 * specific claim here is worse than a vaguer true one.
 */

const CARE_NOTE =
  'General information only, not immigration, legal or tax advice. Requirements change and depend on individual circumstances — confirm your own position with the relevant authority before relying on anything here.';

// -----------------------------------------------------------------------------
// H1 — /en/blog/private-health-insurance-spain-expats/
// -----------------------------------------------------------------------------

const HEALTH_GUIDE = {
  slug: 'private-health-insurance-spain-expats',
  category: 'spain-health',
  tag: 'Health insurance',
  title: 'Private Health Insurance in Spain: A Guide for Expats | Adler & Rochefort',
  description:
    'How private health insurance fits alongside Spain’s public healthcare system, what it typically covers, and the practical questions to ask before you buy — written for expats and international residents.',
  h1: 'Private Health Insurance in Spain: A Guide for Expats',
  standfirst:
    'Spain’s public healthcare system is broad and well regarded. Private insurance sits alongside it rather than replacing it — this guide explains where the two actually differ, and what to check before choosing a policy.',
  published: '2026-08-28T09:00:00+00:00',
  destination: '/en/health-insurance-spain/',
  toc: [
    { href: '#public-private', label: 'Public and private are not competitors' },
    { href: '#who-needs-it', label: 'Who actually ends up buying private cover' },
    { href: '#what-it-covers', label: 'What a private plan typically covers' },
    { href: '#copayments', label: 'Copayments, and why they change the price' },
    { href: '#pre-existing', label: 'Pre-existing conditions and underwriting' },
    { href: '#networks', label: 'How provider networks work' },
    { href: '#choosing', label: 'What to actually compare between plans' },
    { href: '#faq', label: 'Frequently asked questions' },
  ],
  bodyHtml: `
    <h2 id="public-private">Public and private are not competitors</h2>
    <p>Spain's public healthcare system — funded through taxation and, for employees, social security contributions — is one of the more comprehensive public systems in Europe, and legal residents who are properly registered can generally use it. That is worth saying plainly, because a lot of English-language content about Spain implies private cover is the only serious option. It is not: for genuine emergencies, major surgery and long-term treatment, the public hospital is frequently exactly where you want to be.</p>
    <p>What differs is speed of access to non-urgent care, choice of provider, and language. Private insurance buys a faster route to a specialist consultation, the ability to choose which clinic you go to, and — depending on the insurer's network — treatment in English. It is a complement to the public system for most people who hold it, not a replacement.</p>

    <h2 id="who-needs-it">Who actually ends up buying private cover</h2>
    <p>In practice, four groups make up most of the people we hear from about health insurance in Spain:</p>
    <ul>
      <li>People whose visa or residence application asks for proof of private cover as part of the paperwork.</li>
      <li>People who are eligible for the public system but want faster access to specialists or a choice of provider.</li>
      <li>Self-employed and international workers whose access to the public system is less straightforward than an employee's.</li>
      <li>Families who want continuity of care in English, particularly for children.</li>
    </ul>
    <p>Whether you fall into the first category — a genuine requirement rather than a preference — depends on your specific route into Spain, and is not something a general guide can answer for you. See <a href="/en/blog/spain-health-insurance-visa-residency/">health insurance for Spanish visas and residency</a> if that is your situation.</p>

    <h2 id="what-it-covers">What a private plan typically covers</h2>
    <p>There is no single "Spanish private health policy" — cover is set by the insurer and the specific plan, and varies meaningfully between them. Categories commonly addressed, subject to the actual policy wording, include GP and specialist consultations, diagnostic tests, hospital treatment and surgery, and outpatient care. Maternity and mental health cover are offered by some plans and not others, and where offered are frequently subject to a waiting period. Treat any list like this — including this one — as a set of questions to ask about a specific plan, not a guarantee of what it contains.</p>

    <h2 id="copayments">Copayments, and why they change the price</h2>
    <p>Some plans charge a small fee per consultation or procedure (a copayment) and cost less as a result. Others are priced with no copayment at all. Neither is objectively better — it is a trade-off between a lower monthly premium and a small cost each time you use the plan, versus a higher premium and nothing to pay at the point of care. How often you expect to actually use the cover is the relevant question, not which structure sounds more generous.</p>

    <h2 id="pre-existing">Pre-existing conditions and underwriting</h2>
    <p>Private insurers in Spain ask medical questions before offering cover, and how a specific pre-existing condition is treated is an underwriting decision that varies by insurer and by condition — some exclude it, some cover it after a delay, some price around it. No guide, including this one, can tell you in advance how a specific insurer will treat a specific condition. Declare medical history accurately: understating it to get a better quote is one of the most common reasons a later claim is refused, and it tends to cost far more than it saves.</p>

    <h2 id="networks">How provider networks work</h2>
    <p>Private insurers contract with a defined network of clinics, hospitals and specialists rather than every provider in the country. Which hospitals and doctors are actually available to you depends on the insurer, the specific plan, and often the region you live in. Claims of access to "the best hospitals" or a specific named network are only meaningful against an actual policy wording — ask for the network detail for the plan you are actually being quoted, not a general answer.</p>

    <h2 id="choosing">What to actually compare between plans</h2>
    <p>Price is the easiest thing to compare and often the least useful one on its own. More useful: whether maternity or mental health cover is included and after what waiting period; whether the network covers the area you actually live in; whether the plan is domestic (Spain only) or has broader international scope, which matters if you travel or split time between countries; and how the insurer's claims process actually works day to day, not just what the brochure says.</p>

    <div class="callout">
      <div class="callout-title">The practical starting point</div>
      <p>Rather than start from a product, start from who needs to be covered, roughly where you'll be living in Spain, and whether timing is driven by a visa or residence application. That is what actually narrows the field of realistic options — see <a href="/en/health-insurance-spain/">health insurance in Spain</a> for the next step.</p>
    </div>

    <h2 id="faq">Frequently asked questions</h2>

    <h3>Does having private insurance mean I lose access to the public system?</h3>
    <p>No. Private cover does not remove entitlement to the public system where you already have it; the two typically operate alongside each other, and most people who hold private insurance keep their public entitlement as well.</p>

    <h3>Is private health insurance required to live in Spain?</h3>
    <p>Not universally. It depends on your residence route and personal circumstances, and for some visa and residence applications it is a genuine requirement. This is a question for the relevant consulate or immigration authority, not something a general guide can confirm for your specific case.</p>

    <h3>How do I know if a plan’s network covers where I live?</h3>
    <p>Ask for the network list for the specific plan and region before you buy — network availability is not uniform across Spain, and a plan that works well in one area may have limited coverage in another.</p>

    ${CARE_NOTE_HTML()}
  `,
  faq: [
    { q: 'Does having private insurance mean I lose access to the public system?', a: 'No. Private cover does not remove entitlement to the public system where you already have it; the two typically operate alongside each other, and most people who hold private insurance keep their public entitlement as well.' },
    { q: 'Is private health insurance required to live in Spain?', a: 'Not universally. It depends on your residence route and personal circumstances, and for some visa and residence applications it is a genuine requirement. This is a question for the relevant consulate or immigration authority, not something a general guide can confirm for your specific case.' },
    { q: 'How do I know if a plan’s network covers where I live?', a: 'Ask for the network list for the specific plan and region before you buy — network availability is not uniform across Spain, and a plan that works well in one area may have limited coverage in another.' },
  ],
  related: [
    { href: '/en/health-insurance-spain/', tag: 'Health insurance', title: 'Health insurance in Spain for expats' },
    { href: '/en/blog/health-insurance-moving-to-spain/', tag: 'Moving', title: 'Health insurance when moving to Spain' },
    { href: '/en/blog/spain-health-insurance-visa-residency/', tag: 'Visa & residency', title: 'Health insurance for Spanish visas and residency' },
    { href: '/en/expat-insurance-spain/', tag: 'Spain', title: 'Insurance for expats in Spain' },
  ],
};

// -----------------------------------------------------------------------------
// H2 — /en/blog/health-insurance-moving-to-spain/
// -----------------------------------------------------------------------------

const HEALTH_MOVING = {
  slug: 'health-insurance-moving-to-spain',
  category: 'spain-health',
  tag: 'Moving to Spain',
  title: 'Health Insurance When Moving to Spain: What International Residents Should Check | Adler & Rochefort',
  description:
    'What to sort out on the health insurance side before and after moving to Spain — timing, documentation, family considerations, and the questions worth asking before you choose cover.',
  h1: 'Health Insurance When Moving to Spain: What International Residents Should Check',
  standfirst:
    'The insurance side of a move to Spain is rarely complicated once the timeline is clear. Here is what to check, roughly in the order it comes up.',
  published: '2026-08-28T09:00:00+00:00',
  destination: '/en/health-insurance-spain/',
  toc: [
    { href: '#before-during-after', label: 'Before, during and after the move' },
    { href: '#public-entitlement', label: 'Public healthcare entitlement is not automatic' },
    { href: '#documentation', label: 'What documentation actually matters' },
    { href: '#timing', label: 'Timing: when to actually buy the policy' },
    { href: '#family', label: 'Moving as a family' },
    { href: '#existing-cover', label: 'What happens to health cover you already have' },
    { href: '#faq', label: 'Frequently asked questions' },
  ],
  bodyHtml: `
    <h2 id="before-during-after">Before, during and after the move</h2>
    <p>Health insurance for a move to Spain tends to raise three separate questions at three different times: what you need in place before you can complete a visa or residence application, if one is involved; what you actually want once you arrive, which may be different from the minimum required; and what happens to cover you already hold once you are no longer living in your previous country. Treating these as one question is usually where people get stuck.</p>

    <h2 id="public-entitlement">Public healthcare entitlement is not automatic</h2>
    <p>Access to Spain's public healthcare system depends on your residence status and how you have registered — it is not something that starts the day you arrive, and it is not identical for every nationality or every route into the country. If your plan is to rely on the public system once you are settled, confirm the actual registration process and timeline with the relevant authority rather than assuming continuity from day one.</p>

    <h2 id="documentation">What documentation actually matters</h2>
    <p>If a visa or residence application is involved, the health insurance documentation required is set by the route and the authority handling it — not by this guide, and not by any insurer's marketing description of its own product. "Visa-compliant" on a product page is not the same as confirmation from the actual authority that a specific policy will be accepted. See <a href="/en/blog/spain-health-insurance-visa-residency/">health insurance for Spanish visas and residency</a> for how to approach that question properly.</p>
    <p>If no visa or residence application is involved — an EU citizen exercising free movement, for example — the documentation questions are usually simpler and are more about registering with the relevant local authority than about the insurance policy itself.</p>

    <h2 id="timing">Timing: when to actually buy the policy</h2>
    <p>Buying too early can mean paying for months of cover you are not yet using; buying too late can leave a gap, or miss a deadline tied to an application. As a practical matter, it is worth having a clear answer ready — insurer, plan, price — a few weeks before you actually need cover to start, rather than starting the search the week you arrive.</p>

    <h2 id="family">Moving as a family</h2>
    <p>Each family member is underwritten individually even on a policy billed as a single family plan, so age, and any relevant medical history, matter per person rather than as a household average. If children are moving with you, ask specifically about paediatric care and, if relevant, continuity of any ongoing treatment — do not assume a "family plan" automatically includes everything a family needs.</p>

    <h2 id="existing-cover">What happens to health cover you already have</h2>
    <p>A domestic health plan from your previous country of residence is generally written around that country's provider network and does not automatically respond to routine treatment in Spain. If you are relying on cover from elsewhere, check its actual territorial scope rather than assuming it travels with you — this is one of the most common gaps we see, and it is avoidable by asking the question before you move rather than at a claim.</p>

    <div class="callout">
      <div class="callout-title">Where this leads</div>
      <p>Once the timeline and the visa/residence question (if any) are clear, the practical next step is a quote based on who actually needs covering — see <a href="/en/health-insurance-spain/">health insurance in Spain</a>.</p>
    </div>

    <h2 id="faq">Frequently asked questions</h2>

    <h3>Can I buy Spanish health insurance before I arrive?</h3>
    <p>In most cases, yes — insurers can generally issue a policy in advance of your move, subject to underwriting. Whether that is necessary depends on your route into Spain and any application deadlines involved.</p>

    <h3>Does my UK, US or other home-country health insurance work in Spain?</h3>
    <p>Usually not for routine treatment. Domestic health plans are typically built around the provider network of the country that issued them and rarely respond the same way abroad. Confirm the actual territorial scope of any existing policy rather than assuming it continues to work once you have moved.</p>

    <h3>Do I need to register with a doctor before I can use private cover?</h3>
    <p>This depends on the insurer and plan — some require you to select or register with a network provider, others do not. Ask the specific insurer once a plan has been identified.</p>

    ${CARE_NOTE_HTML()}
  `,
  faq: [
    { q: 'Can I buy Spanish health insurance before I arrive?', a: 'In most cases, yes — insurers can generally issue a policy in advance of your move, subject to underwriting. Whether that is necessary depends on your route into Spain and any application deadlines involved.' },
    { q: 'Does my UK, US or other home-country health insurance work in Spain?', a: 'Usually not for routine treatment. Domestic health plans are typically built around the provider network of the country that issued them and rarely respond the same way abroad. Confirm the actual territorial scope of any existing policy rather than assuming it continues to work once you have moved.' },
    { q: 'Do I need to register with a doctor before I can use private cover?', a: 'This depends on the insurer and plan — some require you to select or register with a network provider, others do not. Ask the specific insurer once a plan has been identified.' },
  ],
  related: [
    { href: '/en/health-insurance-spain/', tag: 'Health insurance', title: 'Health insurance in Spain for expats' },
    { href: '/en/blog/private-health-insurance-spain-expats/', tag: 'Guide', title: 'Private health insurance in Spain: a guide for expats' },
    { href: '/en/blog/spain-health-insurance-visa-residency/', tag: 'Visa & residency', title: 'Health insurance for Spanish visas and residency' },
    { href: '/en/blog/insurance-portugal-spain-international-residents/', tag: 'Portugal & Spain', title: 'Insurance in Portugal and Spain for international residents' },
  ],
};

// -----------------------------------------------------------------------------
// H3 — /en/blog/spain-health-insurance-visa-residency/  (high-risk article)
// -----------------------------------------------------------------------------

const HEALTH_VISA = {
  slug: 'spain-health-insurance-visa-residency',
  category: 'spain-health',
  tag: 'Visa & residency',
  title: 'Health Insurance for Spanish Visas and Residency: What to Check Before You Apply | Adler & Rochefort',
  description:
    'What to verify about health insurance requirements before a Spanish visa or residence application — and why "visa insurance" on a product page is not the same as confirmation from the authority handling your case.',
  h1: 'Health Insurance for Spanish Visas and Residency: What to Check Before You Apply',
  standfirst:
    'This page deliberately does not state a single rule for every visa or residence route. Requirements depend on the route, your circumstances and the authority handling the application — here is how to check properly, and what to be wary of.',
  published: '2026-08-28T09:00:00+00:00',
  destination: '/en/health-insurance-spain/',
  toc: [
    { href: '#why-no-single-rule', label: 'Why there is no single rule to state here' },
    { href: '#depends-on-route', label: 'It depends on the route' },
    { href: '#visa-insurance-label', label: 'The "visa insurance" label is not a guarantee' },
    { href: '#what-to-verify', label: 'What to verify, and with whom' },
    { href: '#timing', label: 'Timing and lead time' },
    { href: '#what-we-can-help-with', label: 'What we can, and cannot, help with' },
    { href: '#faq', label: 'Frequently asked questions' },
  ],
  bodyHtml: `
    <h2 id="why-no-single-rule">Why there is no single rule to state here</h2>
    <p>Spain has several distinct visa and residence routes for non-EU nationals, alongside the separate position of EU/EEA citizens exercising free movement, and the health-insurance requirement — if any — attached to each one is set by the immigration rules for that route, not by a general pattern that applies across all of them. A guide that states one rule as if it covered every case would be wrong for a meaningful share of its readers. We would rather tell you how to find the correct answer for your route than state a confident-sounding rule that may not apply to you.</p>

    <h2 id="depends-on-route">It depends on the route</h2>
    <p>Broadly, the routes that come up most often in conversations with international clients include the non-lucrative visa, the digital nomad visa, student routes, and EU citizens registering residence under free movement — and each has its own application process, documentary requirements and competent authority. Some routes have historically asked for evidence of health cover with no co-payments and with cover comparable to the Spanish public system; others have different expectations, or none related to health insurance at all. Because these requirements are set by immigration policy and can be updated, we do not restate specific figures or conditions here — that is precisely the kind of detail that goes stale fastest and does the most damage if it is wrong.</p>

    <h2 id="visa-insurance-label">The "visa insurance" label is not a guarantee</h2>
    <p>Insurers and comparison sites frequently market a product as "visa-compliant" or "visa insurance." That label describes how the insurer has designed the product — it is not confirmation from the Spanish consulate or immigration authority that your specific application will accept it. Two applicants with what looks like the same policy can have different outcomes depending on the route, the consulate, and how the application is presented. Do not treat a marketing label as equivalent to official confirmation.</p>

    <h2 id="what-to-verify">What to verify, and with whom</h2>
    <p>Before buying a policy specifically for a visa or residence application, verify directly with the competent authority — the Spanish consulate handling your application, or the relevant immigration authority if you are applying from within Spain — exactly what the current documentary requirements are for your route. Ask specifically about: whether health cover is required at all for your route; whether copayments are acceptable or must be excluded; the minimum scope or duration of cover; and whether the policy needs to be from a specific type of provider. Keep a written record of what you were told, including the date, since requirements can be updated.</p>

    <h2 id="timing">Timing and lead time</h2>
    <p>Consulates and immigration authorities generally expect supporting documents, including proof of insurance, to be current at the time of the appointment or submission — a certificate issued too far in advance, or one that has since lapsed, is a common and avoidable cause of delay. Build in enough lead time to buy the policy, obtain any certificate the insurer needs to issue, and still meet your appointment or submission date comfortably.</p>

    <h2 id="what-we-can-help-with">What we can, and cannot, help with</h2>
    <p>We are an insurance intermediary, not an immigration adviser, and this page is not legal or immigration advice. What we can do: help you get a private health policy in place with realistic lead time, and explain plainly what that policy does and does not include. What we cannot do: confirm on behalf of a consulate or immigration authority that a specific policy will be accepted for your specific application — that confirmation has to come from them.</p>

    <div class="callout">
      <div class="callout-title">A sensible order of operations</div>
      <p>Verify the requirement with the authority first. Then come to us with what they told you, and we will help you find a policy that actually matches it — see <a href="/en/health-insurance-spain/">health insurance in Spain</a>.</p>
    </div>

    <h2 id="faq">Frequently asked questions</h2>

    <h3>Will Adler &amp; Rochefort confirm my policy meets my visa requirements?</h3>
    <p>We can tell you plainly what a policy includes and does not include. Confirmation that a specific policy satisfies a specific visa or residence application has to come from the consulate or immigration authority handling that application — we are not in a position to make that determination on their behalf.</p>

    <h3>Is there one health insurance requirement for all Spanish visas?</h3>
    <p>No. Requirements vary by route — non-lucrative visa, digital nomad visa, student routes and EU free-movement registration are not the same process and are not guaranteed to have the same insurance requirement. Check your specific route with the relevant authority.</p>

    <h3>What happens if my insurance certificate expires before my appointment?</h3>
    <p>This is a common, avoidable problem. Consulates generally expect supporting documents to be current at the time of the appointment — build in enough lead time, and reissue the certificate if there is any risk it will have lapsed.</p>

    ${CARE_NOTE_HTML()}
  `,
  faq: [
    { q: 'Will Adler & Rochefort confirm my policy meets my visa requirements?', a: 'We can tell you plainly what a policy includes and does not include. Confirmation that a specific policy satisfies a specific visa or residence application has to come from the consulate or immigration authority handling that application — we are not in a position to make that determination on their behalf.' },
    { q: 'Is there one health insurance requirement for all Spanish visas?', a: 'No. Requirements vary by route — non-lucrative visa, digital nomad visa, student routes and EU free-movement registration are not the same process and are not guaranteed to have the same insurance requirement. Check your specific route with the relevant authority.' },
    { q: 'What happens if my insurance certificate expires before my appointment?', a: 'This is a common, avoidable problem. Consulates generally expect supporting documents to be current at the time of the appointment — build in enough lead time, and reissue the certificate if there is any risk it will have lapsed.' },
  ],
  related: [
    { href: '/en/health-insurance-spain/', tag: 'Health insurance', title: 'Health insurance in Spain for expats' },
    { href: '/en/blog/health-insurance-moving-to-spain/', tag: 'Moving', title: 'Health insurance when moving to Spain' },
    { href: '/en/blog/private-health-insurance-spain-expats/', tag: 'Guide', title: 'Private health insurance in Spain: a guide for expats' },
    { href: '/en/expat-insurance-spain/', tag: 'Spain', title: 'Insurance for expats in Spain' },
  ],
};

// -----------------------------------------------------------------------------
// P1 — Community insurance / apartment owners
// -----------------------------------------------------------------------------

const PROP_COMMUNITY = {
  slug: 'community-insurance-apartment-owners-spain',
  category: 'spain-property',
  tag: 'Property',
  title: 'Community Insurance and Apartment Ownership in Spain: What Owners Need to Know | Adler & Rochefort',
  description:
    'How a comunidad de propietarios building policy interacts with your own apartment cover in Spain, and what actually stays your responsibility to insure.',
  h1: 'Community Insurance and Apartment Ownership in Spain: What Owners Need to Know',
  standfirst:
    'Own an apartment inside a managed community in Spain? The building is often already insured — knowing what that policy actually covers, and what it does not, is what decides whether you have a gap.',
  published: '2026-08-28T09:00:00+00:00',
  destination: '/en/home-insurance-spain/',
  toc: [
    { href: '#two-policies', label: 'Two policies, not one' },
    { href: '#what-community-covers', label: 'What the community policy typically covers' },
    { href: '#what-it-doesnt', label: 'What it typically does not cover' },
    { href: '#confirm-dont-assume', label: 'Confirm, don’t assume' },
    { href: '#non-resident', label: 'Non-resident apartment owners' },
    { href: '#faq', label: 'Frequently asked questions' },
  ],
  bodyHtml: `
    <h2 id="two-policies">Two policies, not one</h2>
    <p>An apartment inside a managed community (a <em>comunidad de propietarios</em>) in Spain usually sits under two separate layers of insurance: the community's own building policy, arranged and paid for collectively through community fees, and whatever the individual owner arranges for their own unit. The building policy is not automatically enough on its own, and the individual owner's policy is not automatically duplicating it — they are meant to cover different things.</p>

    <h2 id="what-community-covers">What the community policy typically covers</h2>
    <p>Community policies commonly cover the building's shared structure — exterior walls, roof, communal areas, shared installations such as lifts or the pool — against risks like fire, storm and structural damage. Coverage varies by community and by the specific policy the community's administrator has arranged, so "the community is insured" is a starting point for a question, not a complete answer.</p>

    <h2 id="what-it-doesnt">What it typically does not cover</h2>
    <p>What the community policy generally does not extend to: the interior of your own apartment, your contents, fixtures and fittings you have installed yourself, and your own liability as an occupier. If a pipe bursts inside your apartment and damages your own belongings, that is typically your own policy's problem, not the community's.</p>

    <h2 id="confirm-dont-assume">Confirm, don’t assume</h2>
    <p>The single most common gap we see with apartment owners is assuming the community policy covers more than it does, and only finding out otherwise at a claim. Two questions are worth asking your community administrator directly: what exactly the building policy covers, and what its sum insured is — an outdated rebuild valuation on an old community policy is a real and recurring problem, and it affects every owner in the building, not just you.</p>

    <h2 id="non-resident">Non-resident apartment owners</h2>
    <p>None of this changes if you do not live in Spain full-time. Non-resident ownership is common and normally insurable — what matters to an insurer is accurate information about the property and how it is used, not where you personally live. If the apartment sits empty for long periods, or is let out occasionally, say so when arranging your own cover — see <a href="/en/home-insurance-spain/">home insurance in Spain</a> for how occupancy affects the policy.</p>

    <div class="callout">
      <div class="callout-title">Where this leads</div>
      <p>Once you know what the community policy covers, your own policy only needs to fill the gap — contents, interior fittings, and your own liability. See <a href="/en/home-insurance-spain/">home insurance in Spain</a> for the next step.</p>
    </div>

    <h2 id="faq">Frequently asked questions</h2>

    <h3>Do I need my own home insurance if the community is already insured?</h3>
    <p>In almost every case, yes. The community policy generally covers the shared building structure, not the interior of your own apartment, your contents, or your own liability — those typically need to be arranged separately.</p>

    <h3>How do I find out what the community policy actually covers?</h3>
    <p>Ask the community's administrator (<em>administrador de fincas</em>) directly for the policy summary and sum insured. This is normal to request and normally available to any owner in the building.</p>

    <h3>What if the community’s building sum insured looks out of date?</h3>
    <p>Raise it with the administrator or at the next community meeting — an outdated rebuild valuation affects every owner, and it is a community decision to update it, not something an individual owner's own policy can fix.</p>

    ${CARE_NOTE_HTML()}
  `,
  faq: [
    { q: 'Do I need my own home insurance if the community is already insured?', a: 'In almost every case, yes. The community policy generally covers the shared building structure, not the interior of your own apartment, your contents, or your own liability — those typically need to be arranged separately.' },
    { q: 'How do I find out what the community policy actually covers?', a: 'Ask the community’s administrator (administrador de fincas) directly for the policy summary and sum insured. This is normal to request and normally available to any owner in the building.' },
    { q: 'What if the community’s building sum insured looks out of date?', a: 'Raise it with the administrator or at the next community meeting — an outdated rebuild valuation affects every owner, and it is a community decision to update it, not something an individual owner’s own policy can fix.' },
  ],
  related: [
    { href: '/en/home-insurance-spain/', tag: 'Home insurance', title: 'Home insurance in Spain for international owners' },
    { href: '/en/blog/non-resident-property-insurance-spain/', tag: 'Non-resident', title: 'Property insurance in Spain for non-resident owners' },
    { href: '/en/blog/second-home-insurance-spain/', tag: 'Second home', title: 'Second home insurance in Spain' },
    { href: '/en/expat-insurance-spain/', tag: 'Spain', title: 'Insurance for expats in Spain' },
  ],
};

// -----------------------------------------------------------------------------
// P2 — Non-resident property insurance
// -----------------------------------------------------------------------------

const PROP_NON_RESIDENT = {
  slug: 'non-resident-property-insurance-spain',
  situation: 'non_resident_owner',
  category: 'spain-property',
  tag: 'Non-resident',
  title: 'Property Insurance in Spain for Non-Resident Owners | Adler & Rochefort',
  description:
    'Owning property in Spain without living there is common and normally insurable. What an insurer actually needs to know, and the details that most affect the outcome.',
  h1: 'Property Insurance in Spain for Non-Resident Owners',
  standfirst:
    'You do not need to live in Spain to insure a Spanish property properly. Here is what actually matters to an insurer when the owner lives elsewhere.',
  published: '2026-08-28T09:00:00+00:00',
  destination: '/en/home-insurance-spain/',
  toc: [
    { href: '#normal-not-exotic', label: 'Non-resident ownership is normal, not exotic' },
    { href: '#what-matters', label: 'What actually matters to an insurer' },
    { href: '#unoccupancy', label: 'Unoccupancy: the detail most owners underestimate' },
    { href: '#keyholders', label: 'Keyholders and local management' },
    { href: '#correspondence', label: 'Correspondence and claims from abroad' },
    { href: '#faq', label: 'Frequently asked questions' },
  ],
  bodyHtml: `
    <h2 id="normal-not-exotic">Non-resident ownership is normal, not exotic</h2>
    <p>A large share of the international property owners we hear from about Spain do not live there — in the UK, elsewhere in Europe, or further afield. Insurers in this market are used to this. What decides whether a property can be insured, and on what terms, is the property itself and how it is actually used — not where the owner is registered as resident.</p>

    <h2 id="what-matters">What actually matters to an insurer</h2>
    <p>Accurate answers to a small number of questions matter far more than residency status: what the property is, how it is constructed, where it sits, how often someone is actually there, whether it is ever let to guests, and what security it has. Getting these right at quote stage is what makes the policy actually respond when something happens — getting them wrong, even through a genuine misunderstanding rather than dishonesty, is one of the more common reasons a claim is contested.</p>

    <h2 id="unoccupancy">Unoccupancy: the detail most owners underestimate</h2>
    <p>Almost every property policy has a condition about how long a home can sit empty before cover is restricted or additional requirements kick in — things like draining the water system, or having someone check the property periodically. For a property used seasonally, this is not a small print detail; it is one of the first things worth confirming, because a claim during an unoccupied period that breached the policy's condition is a common and avoidable way to lose cover exactly when you need it.</p>

    <h2 id="keyholders">Keyholders and local management</h2>
    <p>Many non-resident owners use a local keyholder, property manager, or letting agent to check on the property periodically. This is generally a positive from an insurer's perspective — it reduces the practical risk of an unoccupied property — but it is worth mentioning explicitly when arranging cover rather than assuming it is implied.</p>

    <h2 id="correspondence">Correspondence and claims from abroad</h2>
    <p>Distance and time zones make a written process more useful than a phone-based one in most cases — policy documents, correspondence and claims handling that work by email rather than requiring a call at a specific hour suit most non-resident owners better. This is how we work by default rather than an exception arranged on request.</p>

    <div class="callout">
      <div class="callout-title">Where this leads</div>
      <p>Tell us about the property and how it is used — including how often you are actually there — and we will confirm what can currently be arranged. See <a href="/en/home-insurance-spain/">home insurance in Spain</a>.</p>
    </div>

    <h2 id="faq">Frequently asked questions</h2>

    <h3>Can I insure a Spanish property if I have never lived there?</h3>
    <p>Yes, in principle — this is a normal and common situation. What an insurer needs is accurate information about the property and how it is used, not proof of residency.</p>

    <h3>Does an empty property cost more to insure?</h3>
    <p>It can, and more importantly it usually comes with specific conditions attached — how long it can remain empty, and sometimes requirements like draining water systems for extended absences. Confirm these conditions explicitly rather than assuming standard occupied-home terms apply.</p>

    <h3>Do I need a local keyholder to insure an unoccupied property?</h3>
    <p>Not always required, but it is worth mentioning if you have one — it can be relevant to how an insurer views the risk, and periodic checks reduce the practical chance of undetected damage.</p>

    ${CARE_NOTE_HTML()}
  `,
  faq: [
    { q: 'Can I insure a Spanish property if I have never lived there?', a: 'Yes, in principle — this is a normal and common situation. What an insurer needs is accurate information about the property and how it is used, not proof of residency.' },
    { q: 'Does an empty property cost more to insure?', a: 'It can, and more importantly it usually comes with specific conditions attached — how long it can remain empty, and sometimes requirements like draining water systems for extended absences. Confirm these conditions explicitly rather than assuming standard occupied-home terms apply.' },
    { q: 'Do I need a local keyholder to insure an unoccupied property?', a: 'Not always required, but it is worth mentioning if you have one — it can be relevant to how an insurer views the risk, and periodic checks reduce the practical chance of undetected damage.' },
  ],
  related: [
    { href: '/en/home-insurance-spain/', tag: 'Home insurance', title: 'Home insurance in Spain for international owners' },
    { href: '/en/blog/second-home-insurance-spain/', tag: 'Second home', title: 'Second home insurance in Spain' },
    { href: '/en/blog/community-insurance-apartment-owners-spain/', tag: 'Community', title: 'Community insurance and apartment ownership in Spain' },
    { href: '/en/landlord-insurance-spain/', tag: 'Landlord', title: 'Landlord insurance in Spain' },
    { href: '/en/private-clients-spain/', tag: 'Private clients', title: 'Private client insurance in Spain' },
  ],
};

// -----------------------------------------------------------------------------
// P3 — Second-home insurance
// -----------------------------------------------------------------------------

const PROP_SECOND_HOME = {
  slug: 'second-home-insurance-spain',
  situation: 'second_home',
  category: 'spain-property',
  tag: 'Second home',
  title: 'Second Home Insurance in Spain: What to Check Before You Buy Cover | Adler & Rochefort',
  description:
    'A second home in Spain is used differently to a permanent residence, and the insurance needs to reflect that. What to check before buying cover for a holiday home.',
  h1: 'Second Home Insurance in Spain: What to Check Before You Buy Cover',
  standfirst:
    'A home used for six weeks a year is a different risk to insure than one lived in daily — not worse, just different. Here is what changes.',
  published: '2026-08-28T09:00:00+00:00',
  destination: '/en/home-insurance-spain/',
  toc: [
    { href: '#different-risk', label: 'Why a second home is a different risk to insure' },
    { href: '#occupancy-pattern', label: 'Be specific about the occupancy pattern' },
    { href: '#seasonal-issues', label: 'Issues that are specific to seasonal use' },
    { href: '#letting-it-out', label: 'If you sometimes let it out' },
    { href: '#contents', label: 'Contents in a home you are not always in' },
    { href: '#faq', label: 'Frequently asked questions' },
  ],
  bodyHtml: `
    <h2 id="different-risk">Why a second home is a different risk to insure</h2>
    <p>Standard home insurance assumes daily occupation — someone who would notice a leak, a break-in, or a fault within hours rather than weeks. A second home used seasonally does not have that safety net by default, and the risks that actually matter shift accordingly: water damage that goes undetected for weeks, security while the property sits empty, and weather events with nobody there to respond.</p>

    <h2 id="occupancy-pattern">Be specific about the occupancy pattern</h2>
    <p>"A few weeks a year" and "most of the summer, then closed up from October to April" are different risks even if the total occupied time is similar — the length of continuous unoccupied periods usually matters more to an insurer than the total days used. Be specific about the actual pattern rather than rounding to "occasional use."</p>

    <h2 id="seasonal-issues">Issues that are specific to seasonal use</h2>
    <p>A handful of things come up disproportionately often with seasonal second homes: water systems left pressurised over a long unoccupied period, which is a common source of undetected leaks; security expectations that are stricter for a property known to be regularly empty; and, in some areas, weather-related risks that vary by season and region. None of this makes a second home uninsurable — it makes the details worth getting right rather than assumed.</p>

    <h2 id="letting-it-out">If you sometimes let it out</h2>
    <p>The moment paying guests stay in the property — even occasionally, even just to cover costs while you are away — a standard home policy is usually the wrong contract. This is a landlord insurance question, not a home insurance one, even for a property you also use yourself for part of the year. See <a href="/en/landlord-insurance-spain/">landlord insurance in Spain</a> if this applies to you.</p>

    <h2 id="contents">Contents in a home you are not always in</h2>
    <p>Sums insured for contents should reflect what is actually in the property when you are not there, not just what you bring for a holiday — furniture, appliances and fittings left year-round are the real exposure, and it is worth revisiting the figure periodically rather than setting it once and forgetting it.</p>

    <div class="callout">
      <div class="callout-title">Where this leads</div>
      <p>Tell us the actual occupancy pattern — how much of the year the property is used, and by whom — and we will confirm what can currently be arranged. See <a href="/en/home-insurance-spain/">home insurance in Spain</a>.</p>
    </div>

    <h2 id="faq">Frequently asked questions</h2>

    <h3>Does a second home cost more to insure than a full-time residence?</h3>
    <p>It depends on the specific risk factors — location, security, and the length of unoccupied periods matter more than the "second home" label itself. There is no single answer that applies to every property.</p>

    <h3>What counts as &quot;unoccupied&quot; for insurance purposes?</h3>
    <p>This is defined in the specific policy wording, not universally — some policies count from a certain number of consecutive days empty, others from a cumulative total across the year. Check the actual definition in your policy rather than assuming.</p>

    <h3>Can I insure a second home if I only use it a few weeks a year?</h3>
    <p>Yes — this is a normal pattern for a second home, and insurable, but be specific about the actual pattern of use when arranging cover rather than describing it generically.</p>

    ${CARE_NOTE_HTML()}
  `,
  faq: [
    { q: 'Does a second home cost more to insure than a full-time residence?', a: 'It depends on the specific risk factors — location, security, and the length of unoccupied periods matter more than the "second home" label itself. There is no single answer that applies to every property.' },
    { q: 'What counts as "unoccupied" for insurance purposes?', a: 'This is defined in the specific policy wording, not universally — some policies count from a certain number of consecutive days empty, others from a cumulative total across the year. Check the actual definition in your policy rather than assuming.' },
    { q: 'Can I insure a second home if I only use it a few weeks a year?', a: 'Yes — this is a normal pattern for a second home, and insurable, but be specific about the actual pattern of use when arranging cover rather than describing it generically.' },
  ],
  related: [
    { href: '/en/home-insurance-spain/', tag: 'Home insurance', title: 'Home insurance in Spain for international owners' },
    { href: '/en/blog/non-resident-property-insurance-spain/', tag: 'Non-resident', title: 'Property insurance in Spain for non-resident owners' },
    { href: '/en/blog/renting-out-property-in-spain/', tag: 'Renting out', title: 'Renting out property in Spain' },
    { href: '/en/landlord-insurance-spain/', tag: 'Landlord', title: 'Landlord insurance in Spain' },
    { href: '/en/private-clients-spain/', tag: 'Private clients', title: 'Private client insurance in Spain' },
  ],
};

// -----------------------------------------------------------------------------
// P4 — Renting out property in Spain
// -----------------------------------------------------------------------------

const PROP_RENTING_OUT = {
  slug: 'renting-out-property-in-spain',
  situation: 'landlord',
  category: 'spain-property',
  tag: 'Renting out',
  title: 'Renting Out Property in Spain: Why Your Home Policy May Not Cover It | Adler & Rochefort',
  description:
    'The moment you let a Spanish property to paying guests or tenants, standard home insurance is usually the wrong contract. What changes, and what to check.',
  h1: 'Renting Out Property in Spain: Why Your Home Policy May Not Cover It',
  standfirst:
    'A home policy is written for the owner living there. Letting the property — long-term or occasionally — changes the risk an insurer is being asked to price.',
  published: '2026-08-28T09:00:00+00:00',
  destination: '/en/landlord-insurance-spain/',
  toc: [
    { href: '#why-it-changes', label: 'Why letting the property changes the insurance question' },
    { href: '#long-vs-short', label: 'Long-term versus short-term letting' },
    { href: '#licensing', label: 'Local licensing rules — check locally, not here' },
    { href: '#what-changes', label: 'What actually changes about the cover' },
    { href: '#remote-landlords', label: 'If you manage the letting from abroad' },
    { href: '#faq', label: 'Frequently asked questions' },
  ],
  bodyHtml: `
    <h2 id="why-it-changes">Why letting the property changes the insurance question</h2>
    <p>Standard home insurance is priced and written around an owner living in the property. Once someone else — a long-term tenant or a paying holiday guest — is staying there instead, the risk is genuinely different: different wear on the property, different liability exposure if a guest is injured, and often a policy condition that simply excludes rental use outright. This applies whether the letting is occasional or continuous, and whether you manage it yourself or through a local agency.</p>

    <h2 id="long-vs-short">Long-term versus short-term letting</h2>
    <p>A long-term tenancy — one household in place for months or years — and short-term holiday letting with frequent guest changeovers are genuinely different situations from an insurance perspective, even though both fall outside standard home cover. Be specific about which one applies, or whether it is a mix, when arranging cover: the two are not interchangeable and a policy suited to one is not automatically suited to the other.</p>

    <h2 id="licensing">Local licensing rules — check locally, not here</h2>
    <p>Whether a property can legally be let short-term, and what registration or licence is required, is set by the autonomous community and often the specific municipality where the property sits — there is no single nationwide rule, and rules in this area have been actively changing in various parts of Spain. This is not something we can advise on. Check the current licensing position with the relevant regional or local authority before you start letting, and keep any registration documentation — we can help with the insurance side once that position is confirmed.</p>

    <h2 id="what-changes">What actually changes about the cover</h2>
    <p>Depending on the insurer and product, letting the property can affect: whether the buildings and landlord's own contents are covered on landlord rather than owner-occupier terms; whether landlord liability is included, given that guests or tenants — not just the owner — are now on the property; and whether options like loss of rent or legal protection are available. None of these is a standard, guaranteed inclusion — they are the questions worth asking about a specific policy rather than assumptions to make.</p>

    <h2 id="remote-landlords">If you manage the letting from abroad</h2>
    <p>Managing a Spanish rental property from another country, directly or through a local letting agent, is common and does not itself prevent the property being insured. What matters to an insurer is how the property is actually let and maintained — who manages changeovers, cleaning and maintenance — not where the owner personally lives.</p>

    <div class="callout">
      <div class="callout-title">Where this leads</div>
      <p>Tell us how the property is let — long-term, short-term, or a mix — and who manages it, and we will confirm what can currently be arranged. See <a href="/en/landlord-insurance-spain/">landlord insurance in Spain</a>.</p>
    </div>

    <h2 id="faq">Frequently asked questions</h2>

    <h3>Will my existing home insurance cover a property I now rent out?</h3>
    <p>Often not, and this is worth checking rather than assuming. Standard home policies are frequently written to exclude rental use, whether long-term or short-term — a landlord product is usually the right contract instead.</p>

    <h3>Do I need a licence to let my property short-term in Spain?</h3>
    <p>This depends on the autonomous community and municipality where the property is located, and rules vary and change. We cannot advise on licensing — check directly with the relevant regional or local authority before you start letting.</p>

    <h3>Can I insure a rental property I manage from another country?</h3>
    <p>Yes, in principle — this is a normal arrangement. What matters to an insurer is how the property is let and maintained, not where the owner personally lives.</p>

    ${CARE_NOTE_HTML()}
  `,
  faq: [
    { q: 'Will my existing home insurance cover a property I now rent out?', a: 'Often not, and this is worth checking rather than assuming. Standard home policies are frequently written to exclude rental use, whether long-term or short-term — a landlord product is usually the right contract instead.' },
    { q: 'Do I need a licence to let my property short-term in Spain?', a: 'This depends on the autonomous community and municipality where the property is located, and rules vary and change. We cannot advise on licensing — check directly with the relevant regional or local authority before you start letting.' },
    { q: 'Can I insure a rental property I manage from another country?', a: 'Yes, in principle — this is a normal arrangement. What matters to an insurer is how the property is let and maintained, not where the owner personally lives.' },
  ],
  related: [
    { href: '/en/landlord-insurance-spain/', tag: 'Landlord insurance', title: 'Landlord insurance in Spain for international property owners' },
    { href: '/en/blog/second-home-insurance-spain/', tag: 'Second home', title: 'Second home insurance in Spain' },
    { href: '/en/blog/non-resident-property-insurance-spain/', tag: 'Non-resident', title: 'Property insurance in Spain for non-resident owners' },
    { href: '/en/home-insurance-spain/', tag: 'Home insurance', title: 'Home insurance in Spain for international owners' },
  ],
};

function CARE_NOTE_HTML() {
  return `<p style="border-top:1px solid #DAD5C8;padding-top:18px;margin:36px 0 0;font-size:14px;line-height:1.7;color:#526984;"><strong>General information only.</strong> ${CARE_NOTE}</p>`;
}

// -----------------------------------------------------------------------------
// C1 — /en/blog/car-insurance-spain-expats/  (complete guide)
// -----------------------------------------------------------------------------

const CAR_GUIDE = {
  slug: 'car-insurance-spain-expats',
  category: 'spain-car',
  tag: 'Car insurance',
  title: 'Car Insurance in Spain for Expats: Complete Guide | Adler &amp; Rochefort',
  description:
    'A complete guide to car insurance in Spain for expats and international residents: the legal baseline, cover types, foreign licences, foreign vehicles, documents and how to get a quote.',
  h1: 'Car Insurance in Spain for Expats: Complete Guide',
  standfirst:
    'Everything an international driver needs to work through before asking for a quote — the legal minimum, what sits above it, and the situations that come up most often for people arriving from abroad.',
  published: '2026-08-28T09:00:00+00:00',
  destination: '/en/car-insurance-spain/',
  toc: [
    { href: '#legal-baseline', label: 'The legal baseline' },
    { href: '#cover-types', label: 'Cover types, and how they differ' },
    { href: '#licences', label: 'Foreign licences, briefly' },
    { href: '#buying', label: 'Buying a car in Spain' },
    { href: '#foreign-vehicles', label: 'Bringing a foreign vehicle, briefly' },
    { href: '#documents', label: 'What you will be asked for' },
    { href: '#claims-history', label: 'Claims history, briefly' },
    { href: '#quote', label: 'How to get a quote' },
    { href: '#faq', label: 'Frequently asked questions' },
  ],
  bodyHtml: `
    <h2 id="legal-baseline">The legal baseline</h2>
    <p>Third-party liability is compulsory for every motor vehicle in Spain. The governing law is the consolidated <em>Ley sobre responsabilidad civil y seguro en la circulación de vehículos a motor</em> — Real Decreto Legislativo 8/2004, de 29 de octubre, most recently amended by Ley 5/2025. That compulsory cover exists to pay injury and damage you cause to <em>other people</em>; it does nothing for your own vehicle and, on most wordings, nothing for you as the driver.</p>
    <p>We do not restate the specific statutory minimum liability capitals here. They are set out in the law above and are periodically revised, and printing a figure we have not verified against the current text — rather than against a secondary source repeating an older one — is exactly the kind of small inaccuracy that erodes trust in everything else on the page. The current text is public on <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2004-18911" target="_blank" rel="noopener">boe.es</a>, and any insurer will confirm the current position at quote stage.</p>

    <h2 id="cover-types">Cover types, and how they differ</h2>
    <p>Above the compulsory minimum, the market is generally organised into recognisable tiers, though insurers name and package them differently:</p>
    <ul>
      <li><strong>Third-party liability (seguro obligatorio).</strong> The legal minimum — pays third parties, not you.</li>
      <li><strong>Broader third-party cover.</strong> Liability plus named extras such as theft, fire or glass, depending on the insurer.</li>
      <li><strong>Own-damage / comprehensive-type cover.</strong> Adds damage to your own vehicle, written with an excess and rated against declared value.</li>
      <li><strong>Roadside assistance and legal cover.</strong> Frequently optional rather than standard — worth checking explicitly.</li>
    </ul>
    <p>What any specific policy actually includes, and at what limit, is set by the insurer and the wording — treat any list, including this one, as questions to ask rather than guaranteed inclusions.</p>

    <h2 id="licences">Foreign licences, briefly</h2>
    <p>Whether your licence lets you drive in Spain, and whether a given insurer is comfortable underwriting against it, are two separate questions. EU/EEA licences are generally usable without exchange while valid; UK licences fall under a bilateral direct-exchange agreement with the DGT that has been in force since 2023; other countries vary by whether Spain has an exchange agreement with them. The full detail — including what the UK exchange process actually involves — is in <a href="/en/blog/foreign-driving-licence-car-insurance-spain/">car insurance in Spain with a foreign driving licence</a>.</p>

    <h2 id="buying">Buying a car in Spain</h2>
    <p>The most straightforward case: you are purchasing a vehicle that already carries, or will carry, Spanish registration. Cover has to be in force before you drive it away, so it is worth starting the quote process before you collect the car rather than on the day. The information an insurer needs is the same whether you are buying new or used — see the documents section below.</p>

    <h2 id="foreign-vehicles">Bringing a foreign vehicle, briefly</h2>
    <p>A vehicle that is still registered abroad but kept in Spain is a more complex case than a Spanish-registered car, and availability depends on the vehicle, how long it has been or will be in Spain, and the individual insurer — we cannot promise it can always be arranged. The factors that matter, and what we need to assess a specific case, are set out in <a href="/en/blog/foreign-registered-car-insurance-spain/">insuring a foreign-registered car in Spain</a>, and the registration process itself — separate from insurance — is covered in <a href="/en/blog/importing-car-to-spain-insurance/">importing a car to Spain</a>.</p>

    <h2 id="documents">What you will be asked for</h2>
    <p>Most insurers want broadly the same starting information: your age and how long you have held a licence, the make/model/year of the vehicle and its current registration status, your claims history (with a letter from a previous insurer if you have one), where the car is kept, and details of any current policy. Not every insurer asks for exactly the same documents beyond that, so treat this as the starting list rather than the complete one.</p>

    <h2 id="claims-history">Claims history, briefly</h2>
    <p>A Portuguese, British, or other foreign claims-free record does not transfer automatically. Some Spanish insurers will take a documented foreign record into account when quoting; not all do, and it is an underwriting decision rather than a guarantee. The mechanics of gathering that evidence properly are in <a href="/en/blog/no-claims-history-car-insurance-spain/">using foreign no-claims history for car insurance in Spain</a>.</p>

    <h2 id="quote">How to get a quote</h2>
    <p>Start with the driver and the vehicle — you do not need every document to begin. Tell us your licence country, roughly how long you have held it, the vehicle's registration status, and where the car will be kept, and we will tell you what else is needed and what can currently be arranged.</p>

    <div class="callout">
      <div class="callout-title">Where this leads</div>
      <p>See <a href="/en/car-insurance-spain/">car insurance in Spain</a> for the commercial page and the quote form.</p>
    </div>

    <h2 id="faq">Frequently asked questions</h2>

    <h3>Is car insurance compulsory in Spain?</h3>
    <p>Yes. Third-party liability is compulsory for every motor vehicle under Real Decreto Legislativo 8/2004, as amended. We do not restate the specific statutory minimum capitals here — see the current text on boe.es or confirm with an insurer at quote stage.</p>

    <h3>Do I need a Spanish driving licence to insure a car in Spain?</h3>
    <p>Not necessarily — whether your existing licence is usable, and for how long, depends on where it was issued and your residency status. See our guide to foreign driving licences for the detail.</p>

    <h3>Can I insure a car before it has Spanish plates?</h3>
    <p>It depends on the vehicle and the insurer — this is genuinely more complex than insuring an already Spanish-registered car. See our guide to foreign-registered vehicles for what actually matters.</p>

    ${CARE_NOTE_HTML()}
  `,
  faq: [
    { q: 'Is car insurance compulsory in Spain?', a: 'Yes. Third-party liability is compulsory for every motor vehicle under Real Decreto Legislativo 8/2004, as amended. We do not restate the specific statutory minimum capitals here — see the current text on boe.es or confirm with an insurer at quote stage.' },
    { q: 'Do I need a Spanish driving licence to insure a car in Spain?', a: 'Not necessarily — whether your existing licence is usable, and for how long, depends on where it was issued and your residency status. See our guide to foreign driving licences for the detail.' },
    { q: 'Can I insure a car before it has Spanish plates?', a: 'It depends on the vehicle and the insurer — this is genuinely more complex than insuring an already Spanish-registered car. See our guide to foreign-registered vehicles for what actually matters.' },
  ],
  related: [
    { href: '/en/car-insurance-spain/', tag: 'Car insurance', title: 'Car insurance in Spain for expats' },
    { href: '/en/blog/foreign-driving-licence-car-insurance-spain/', tag: 'Licences', title: 'Car insurance in Spain with a foreign driving licence' },
    { href: '/en/blog/foreign-registered-car-insurance-spain/', tag: 'Foreign-registered', title: 'Insuring a foreign-registered car in Spain' },
    { href: '/en/expat-insurance-spain/', tag: 'Spain', title: 'Insurance for expats in Spain' },
  ],
};

// -----------------------------------------------------------------------------
// C2 — /en/blog/foreign-driving-licence-car-insurance-spain/
// -----------------------------------------------------------------------------

const CAR_LICENCE = {
  slug: 'foreign-driving-licence-car-insurance-spain',
  category: 'spain-car',
  tag: 'Licences',
  title: 'Car Insurance in Spain with a Foreign Driving Licence | Adler &amp; Rochefort',
  description:
    'Can you get Spanish car insurance with a foreign driving licence? EU/EEA, UK and other licences explained, and the difference between licence validity and insurer underwriting.',
  h1: 'Car Insurance in Spain with a Foreign Driving Licence',
  standfirst:
    'Whether you can drive on it and whether an insurer is comfortable underwriting against it are two different questions. Here is how they actually differ, by licence type.',
  published: '2026-08-28T09:00:00+00:00',
  destination: '/en/car-insurance-spain/',
  toc: [
    { href: '#two-questions', label: 'Two separate questions' },
    { href: '#eu-eea', label: 'EU/EEA licences' },
    { href: '#uk', label: 'UK licences' },
    { href: '#other', label: 'Other non-EU licences' },
    { href: '#documentation', label: 'What to have ready' },
    { href: '#faq', label: 'Frequently asked questions' },
  ],
  bodyHtml: `
    <h2 id="two-questions">Two separate questions</h2>
    <p>The first question is whether Spanish traffic law lets you drive on your current licence, and for how long — that is a matter for the <abbr title="Dirección General de Tráfico">DGT</abbr>, and in some cases involves an exchange process. The second question is whether a specific insurer is willing to underwrite against that licence — a licence can be entirely valid to drive on and still prompt questions from a particular insurer, especially if it was issued very recently or from a country the insurer sees rarely. We ask about both, separately, before quoting.</p>

    <h2 id="eu-eea">EU/EEA licences</h2>
    <p>A driving licence issued by another EU/EEA member state is generally usable in Spain without exchange while it remains valid, under EU mutual-recognition rules. If you become a long-term resident, your position can depend on how long you have been resident and whether the licence needs to be exchanged eventually — confirm your specific case with the DGT rather than assuming indefinite use.</p>

    <h2 id="uk">UK licences</h2>
    <p>A bilateral direct-exchange agreement between Spain and the UK has been in force since 2023 and was renewed for an indefinite duration. In broad terms: residents are generally expected to exchange their UK licence for a Spanish one within a set window after registering residency; the exchange typically requires a medical fitness certificate from a licensed medical centre, but not a new theory or practical test for standard categories; and once the exchange is complete, the UK licence is no longer valid to drive on anywhere, including back in the UK.</p>
    <p>We describe the mechanics here in outline because bilateral agreements are exactly the kind of arrangement that can be renegotiated or adjusted — confirm the current requirement, deadline and process with the DGT before relying on this summary.</p>

    <h2 id="other">Other non-EU licences</h2>
    <p>Rules vary by country of issue, and by whether Spain has a specific exchange agreement with that country. This is a DGT question rather than an insurance one — we ask about your licence at quote stage, but the exchange process itself, where one applies, is administered by the DGT, not by us.</p>

    <h2 id="documentation">What to have ready</h2>
    <p>Whichever licence you hold, an insurer will typically want: the country that issued it, the date you first held a full licence (not just the current document's issue date, if it has been renewed or replaced), and — if applicable — evidence of any exchange already completed with the DGT. Having this ready before you ask for a quote speeds up the process considerably.</p>

    <div class="callout">
      <div class="callout-title">Where this leads</div>
      <p>Tell us your licence country and how long you have held it, and we will tell you what an insurer is likely to need. See <a href="/en/car-insurance-spain/">car insurance in Spain</a>.</p>
    </div>

    <h2 id="faq">Frequently asked questions</h2>

    <h3>Can I drive in Spain on my UK licence while I sort out the exchange?</h3>
    <p>In general, yes, for a defined period after you become resident — but the exact window and requirements are set by the DGT and can change. Confirm your current position directly with them rather than relying on a fixed number here.</p>

    <h3>Do I need a medical exam to exchange a UK licence for a Spanish one?</h3>
    <p>Generally yes, at a licensed driver medical centre (centro de reconocimiento de conductores), as part of the standard exchange process — this applies broadly to licence exchanges in Spain, not just the UK agreement specifically.</p>

    <h3>Will an insurer refuse cover because my licence is foreign?</h3>
    <p>Not automatically, but a foreign licence — particularly one held for a short time, or issued somewhere an insurer rarely sees — can affect which insurers are willing to quote and on what terms. This is an underwriting question we work through with you rather than something we can answer in general terms.</p>

    ${CARE_NOTE_HTML()}
  `,
  faq: [
    { q: 'Can I drive in Spain on my UK licence while I sort out the exchange?', a: 'In general, yes, for a defined period after you become resident — but the exact window and requirements are set by the DGT and can change. Confirm your current position directly with them rather than relying on a fixed number here.' },
    { q: 'Do I need a medical exam to exchange a UK licence for a Spanish one?', a: 'Generally yes, at a licensed driver medical centre (centro de reconocimiento de conductores), as part of the standard exchange process — this applies broadly to licence exchanges in Spain, not just the UK agreement specifically.' },
    { q: 'Will an insurer refuse cover because my licence is foreign?', a: 'Not automatically, but a foreign licence — particularly one held for a short time, or issued somewhere an insurer rarely sees — can affect which insurers are willing to quote and on what terms. This is an underwriting question we work through with you rather than something we can answer in general terms.' },
  ],
  related: [
    { href: '/en/car-insurance-spain/', tag: 'Car insurance', title: 'Car insurance in Spain for expats' },
    { href: '/en/blog/car-insurance-spain-expats/', tag: 'Guide', title: 'Car insurance in Spain for expats: complete guide' },
    { href: '/en/blog/no-claims-history-car-insurance-spain/', tag: 'No-claims', title: 'Using foreign no-claims history for car insurance in Spain' },
    { href: '/en/expat-insurance-spain/', tag: 'Spain', title: 'Insurance for expats in Spain' },
  ],
};

// -----------------------------------------------------------------------------
// C3 — /en/blog/foreign-registered-car-insurance-spain/
// -----------------------------------------------------------------------------

const CAR_FOREIGN_REG = {
  slug: 'foreign-registered-car-insurance-spain',
  category: 'spain-car',
  tag: 'Foreign-registered',
  title: 'Insuring a Foreign-Registered Car in Spain | Adler &amp; Rochefort',
  description:
    'Insuring a vehicle that is still registered abroad but kept in Spain is more complex than insuring a Spanish-registered car. What actually matters, and what we need to assess a specific case.',
  h1: 'Insuring a Foreign-Registered Car in Spain',
  standfirst:
    'A vehicle on foreign plates kept in Spain is a genuinely different question from a Spanish-registered car — not impossible, but not something we can promise in general terms either.',
  published: '2026-08-28T09:00:00+00:00',
  destination: '/en/car-insurance-spain/',
  toc: [
    { href: '#why-different', label: 'Why this is a different question' },
    { href: '#temporary-vs-permanent', label: 'Temporary stay or permanent move' },
    { href: '#habitual-location', label: 'Habitual location' },
    { href: '#transition', label: 'Moving towards Spanish registration' },
    { href: '#what-we-need', label: 'What we need to assess your case' },
    { href: '#faq', label: 'Frequently asked questions' },
  ],
  bodyHtml: `
    <h2 id="why-different">Why this is a different question</h2>
    <p>A vehicle registered in another country was insured under that country's rules, by an insurer that priced it against that country's risk. Bringing it to Spain, even temporarily, changes several things an insurer cares about at once: where the vehicle actually lives, which country's roads it is mostly driven on, and whether the existing policy's territorial scope even extends to Spain in the first place. None of that makes the vehicle uninsurable — it means the answer depends on specifics we cannot generalise from a webpage.</p>

    <h2 id="temporary-vs-permanent">Temporary stay or permanent move</h2>
    <p>A car brought for a holiday or a short stay is a different situation from one that has, in practice, moved to Spain with its owner. Spanish rules on how long a foreign-registered vehicle can remain on its original plates before registration becomes a legal requirement depend on residency status and the specific circumstances — this is a DGT and Agencia Tributaria question, and the answer changes if your own residency status changes partway through, so it is worth checking your current position rather than assuming a fixed window applies indefinitely.</p>

    <h2 id="habitual-location">Habitual location</h2>
    <p>Where a vehicle is genuinely based — not just where it happens to be on a given day — is one of the first things an insurer asks about a foreign-registered risk. A car that spends most of the year in Spain is a different underwriting question to one that visits for a few weeks. Be specific about the actual pattern rather than rounding it to "sometimes."</p>

    <h2 id="transition">Moving towards Spanish registration</h2>
    <p>If the plan is to register the vehicle in Spain eventually, the insurance question changes shape as the vehicle moves through that process — from foreign-registered, to registration in progress, to holding a Spanish plate. Each stage can need a different insurance answer, and the point at which cover has to change is worth planning for rather than discovering mid-process. The registration process itself is covered separately in <a href="/en/blog/importing-car-to-spain-insurance/">importing a car to Spain</a>.</p>

    <h2 id="what-we-need">What we need to assess your case</h2>
    <p>To give an honest answer rather than a generic one, we ask for: the vehicle's current country of registration, how long it has been (or will be) in Spain, whether you are the registered owner, whether you intend to register it in Spain and on what timeline, and what cover — if any — you currently hold on it. Some of these questions we can only answer once we know the specifics, and we would rather tell you plainly that a case falls outside what we can currently arrange than guess.</p>

    <div class="callout">
      <div class="callout-title">Where this leads</div>
      <p>Tell us about the vehicle in the form on <a href="/en/car-insurance-spain/">car insurance in Spain</a> and we will confirm what can currently be arranged.</p>
    </div>

    <h2 id="faq">Frequently asked questions</h2>

    <h3>Can you insure any foreign-registered car kept in Spain?</h3>
    <p>Not as a blanket answer — it depends on the vehicle, how long it has been or will be in Spain, and the individual insurer. We assess each case rather than promising availability in general terms.</p>

    <h3>How long can a foreign-registered car stay in Spain before it needs Spanish plates?</h3>
    <p>This depends on your residency status and specific circumstances, and is a matter for the DGT and Agencia Tributaria rather than something we can state as one fixed rule here. Confirm your current position with them.</p>

    <h3>Does my existing foreign insurance cover the car while it is in Spain?</h3>
    <p>Not automatically — this depends on the territorial scope of that specific policy, which is a question for the insurer that issued it, in writing, before you rely on it.</p>

    ${CARE_NOTE_HTML()}
  `,
  faq: [
    { q: 'Can you insure any foreign-registered car kept in Spain?', a: 'Not as a blanket answer — it depends on the vehicle, how long it has been or will be in Spain, and the individual insurer. We assess each case rather than promising availability in general terms.' },
    { q: 'How long can a foreign-registered car stay in Spain before it needs Spanish plates?', a: 'This depends on your residency status and specific circumstances, and is a matter for the DGT and Agencia Tributaria rather than something we can state as one fixed rule here. Confirm your current position with them.' },
    { q: 'Does my existing foreign insurance cover the car while it is in Spain?', a: 'Not automatically — this depends on the territorial scope of that specific policy, which is a question for the insurer that issued it, in writing, before you rely on it.' },
  ],
  related: [
    { href: '/en/car-insurance-spain/', tag: 'Car insurance', title: 'Car insurance in Spain for expats' },
    { href: '/en/blog/importing-car-to-spain-insurance/', tag: 'Importing', title: 'Importing a car to Spain: when do you need insurance?' },
    { href: '/en/blog/car-insurance-spain-expats/', tag: 'Guide', title: 'Car insurance in Spain for expats: complete guide' },
    { href: '/en/expat-insurance-spain/', tag: 'Spain', title: 'Insurance for expats in Spain' },
  ],
};

// -----------------------------------------------------------------------------
// C4 — /en/blog/importing-car-to-spain-insurance/
// -----------------------------------------------------------------------------

const CAR_IMPORTING = {
  slug: 'importing-car-to-spain-insurance',
  category: 'spain-car',
  tag: 'Importing',
  title: 'Importing a Car to Spain: When Do You Need Insurance? | Adler &amp; Rochefort',
  description:
    'How insurance fits into the process of importing and registering a car in Spain — the ITV, Agencia Tributaria and DGT sequence, and where cover needs to be in place.',
  h1: 'Importing a Car to Spain: When Do You Need Insurance?',
  standfirst:
    'Registering an imported car in Spain runs through three separate authorities. This is about the one part of that process that is genuinely an insurance question — not a replacement for import or tax advice.',
  published: '2026-08-28T09:00:00+00:00',
  destination: '/en/car-insurance-spain/',
  toc: [
    { href: '#three-authorities', label: 'Three authorities, one vehicle' },
    { href: '#insurance-at-each-stage', label: 'What insurance needs to look like at each stage' },
    { href: '#itv', label: 'The ITV technical inspection' },
    { href: '#tax', label: 'Registration tax (Agencia Tributaria)' },
    { href: '#final-registration', label: 'Final registration (DGT)' },
    { href: '#not-a-substitute', label: 'What this article is not' },
    { href: '#faq', label: 'Frequently asked questions' },
  ],
  bodyHtml: `
    <h2 id="three-authorities">Three authorities, one vehicle</h2>
    <p>Importing and registering a car in Spain runs through three separate bodies: the ITV station, which carries out a technical inspection to confirm the vehicle meets Spanish standards; the Agencia Tributaria (Hacienda), which handles the registration tax declaration; and the <abbr title="Dirección General de Tráfico">DGT</abbr>, which verifies everything is in order and issues the final Spanish registration and plates. Insurance touches this process at more than one point, and the cover that is right at the start is not necessarily the cover that is right at the end.</p>

    <h2 id="insurance-at-each-stage">What insurance needs to look like at each stage</h2>
    <p>Broadly, a vehicle moving through this process passes through three insurance-relevant states: still on its original foreign plates, in the process of being registered, and finally holding Spanish plates. A policy that responds correctly at one stage is not automatically the right contract for the next — see <a href="/en/blog/foreign-registered-car-insurance-spain/">insuring a foreign-registered car in Spain</a> for the detail on the first of these, and the sections below for how the middle and final stages fit together.</p>

    <h2 id="itv">The ITV technical inspection</h2>
    <p>Before registration can proceed, the vehicle typically needs to pass a technical inspection at an approved ITV station, confirming it meets Spanish roadworthiness and technical standards. This is a vehicle-condition question, not an insurance one — we mention it here because it sits early in the sequence and because some ITV stations may ask for evidence that the vehicle is currently insured before they will test it; confirm this with the specific station beforehand.</p>

    <h2 id="tax">Registration tax (Agencia Tributaria)</h2>
    <p>The registration tax declaration (Impuesto de Matriculación) is generally submitted to the Agencia Tributaria, commonly via their online systems (Modelo 576). This is a tax question with its own exemptions and calculations depending on your circumstances — not something we advise on, and not something insurance touches directly, beyond the fact that the vehicle needs to be correctly insured throughout the period this is being sorted out.</p>

    <h2 id="final-registration">Final registration (DGT)</h2>
    <p>Once the ITV and tax steps are complete, the full application goes to the DGT, which issues the permiso de circulación (Spanish registration certificate) and the new plates. From that point, the vehicle needs a policy from an insurer operating in the Spanish market on Spanish-plate terms — cover written against the old foreign registration is no longer the right contract for it.</p>

    <h2 id="not-a-substitute">What this article is not</h2>
    <p>This is not a complete import or tax guide, and it does not replace the Agencia Tributaria or DGT's own procedural information — for the technical and tax specifics, those are the right sources, along with a specialist import agent if your case is complex. What we can help with is the insurance side of the process, at whichever stage you are currently at.</p>

    <div class="callout">
      <div class="callout-title">Where this leads</div>
      <p>Tell us which stage the import is at and we will confirm what cover is appropriate now. See <a href="/en/car-insurance-spain/">car insurance in Spain</a>.</p>
    </div>

    <h2 id="faq">Frequently asked questions</h2>

    <h3>Do I need Spanish insurance before the car has Spanish plates?</h3>
    <p>The vehicle needs to be insured throughout the process, but the right policy depends on which stage you are at — foreign-registered, mid-registration, or newly Spanish-plated. See our guide to foreign-registered vehicles for the detail on the earlier stages.</p>

    <h3>Does the ITV station need proof of insurance?</h3>
    <p>Some stations may ask for it — confirm with the specific ITV station you are using, as practice can vary.</p>

    <h3>Can you help with the tax and registration paperwork itself?</h3>
    <p>No — that is a matter for the Agencia Tributaria and DGT, or a specialist import agent for a complex case. We handle the insurance side once your registration status is clear.</p>

    ${CARE_NOTE_HTML()}
  `,
  faq: [
    { q: 'Do I need Spanish insurance before the car has Spanish plates?', a: 'The vehicle needs to be insured throughout the process, but the right policy depends on which stage you are at — foreign-registered, mid-registration, or newly Spanish-plated. See our guide to foreign-registered vehicles for the detail on the earlier stages.' },
    { q: 'Does the ITV station need proof of insurance?', a: 'Some stations may ask for it — confirm with the specific ITV station you are using, as practice can vary.' },
    { q: 'Can you help with the tax and registration paperwork itself?', a: 'No — that is a matter for the Agencia Tributaria and DGT, or a specialist import agent for a complex case. We handle the insurance side once your registration status is clear.' },
  ],
  related: [
    { href: '/en/car-insurance-spain/', tag: 'Car insurance', title: 'Car insurance in Spain for expats' },
    { href: '/en/blog/foreign-registered-car-insurance-spain/', tag: 'Foreign-registered', title: 'Insuring a foreign-registered car in Spain' },
    { href: '/en/blog/car-insurance-spain-expats/', tag: 'Guide', title: 'Car insurance in Spain for expats: complete guide' },
    { href: '/en/expat-insurance-spain/', tag: 'Spain', title: 'Insurance for expats in Spain' },
  ],
};

// -----------------------------------------------------------------------------
// C5 — /en/blog/no-claims-history-car-insurance-spain/
// -----------------------------------------------------------------------------

const CAR_NO_CLAIMS = {
  slug: 'no-claims-history-car-insurance-spain',
  category: 'spain-car',
  tag: 'No-claims',
  title: 'Using Foreign No-Claims History for Car Insurance in Spain | Adler &amp; Rochefort',
  description:
    'How foreign no-claims and claims history can be used when insuring a car in Spain, what evidence insurers actually look for, and why acceptance depends on the individual insurer.',
  h1: 'Using Foreign No-Claims History for Car Insurance in Spain',
  standfirst:
    'A clean driving record earned abroad does not travel automatically, but documented properly, it is worth presenting. Here is what that evidence needs to look like.',
  published: '2026-08-28T09:00:00+00:00',
  destination: '/en/car-insurance-spain/',
  toc: [
    { href: '#why-it-matters', label: 'Why this is worth getting right' },
    { href: '#what-is-evidence', label: 'What "previous-insurance evidence" actually means' },
    { href: '#why-insurers-ask', label: 'Why insurers ask for it' },
    { href: '#getting-it-right', label: 'Getting the documentation right' },
    { href: '#translation', label: 'Documents not in Spanish' },
    { href: '#no-guarantee', label: 'What this does not guarantee' },
    { href: '#faq', label: 'Frequently asked questions' },
  ],
  bodyHtml: `
    <h2 id="why-it-matters">Why this is worth getting right</h2>
    <p>A Spanish insurer that cannot see any driving record for you will generally rate you from a base tier, which is often noticeably more expensive than the price the same driver would be offered with a documented clean history. Arriving with years of claim-free driving abroad and no way to show it is one of the more avoidable reasons a first Spanish premium comes in higher than expected.</p>

    <h2 id="what-is-evidence">What "previous-insurance evidence" actually means</h2>
    <p>In practice, this usually means a letter or statement from your previous insurer, on their letterhead, confirming the number of consecutive claim-free years and your at-fault claims position over a defined period — sometimes called a claims-experience letter or no-claims certificate depending on the country. It is not the same as simply telling an insurer "I have never claimed" — they generally want it in writing, from the party who actually held the risk.</p>

    <h2 id="why-insurers-ask">Why insurers ask for it</h2>
    <p>Your claims history is one of the main things that determines how an insurer prices you. Without documented evidence, there is nothing for them to price against except the general risk of an unknown driver — which is why the letter matters more for an expat than it typically does for a driver moving between two Spanish insurers, where the record is often visible to both sides already.</p>

    <h2 id="getting-it-right">Getting the documentation right</h2>
    <p>A few things make the difference between a letter that helps and one that gets ignored:</p>
    <ul>
      <li><strong>Ask before you cancel.</strong> Request the letter from your current insurer while the policy is still live — it is usually still obtainable afterwards, but slower and more awkward exactly when you are in a hurry.</li>
      <li><strong>Present it at quotation, not after.</strong> Any recognition of foreign history generally has to be built into the price when the risk is first rated.</li>
      <li><strong>Cover the right period.</strong> A letter covering one year is worth less than one covering several consecutive years, if that history exists.</li>
    </ul>

    <h2 id="translation">Documents not in Spanish</h2>
    <p>A letter in English, or another language, is often acceptable, sometimes with a translation depending on the insurer — ask what a specific insurer needs before assuming either way. We can tell you what a given proposal actually requires once we know which insurer is being approached.</p>

    <h2 id="no-guarantee">What this does not guarantee</h2>
    <p>We cannot promise that a given insurer will accept a given foreign record, or that a specific number of years automatically produces a specific discount — that is an underwriting decision, and insurers weigh foreign records differently. What documented evidence does is put you in the strongest position to have that history considered at all, rather than defaulting to the base tier by omission.</p>

    <div class="callout">
      <div class="callout-title">Where this leads</div>
      <p>If you have — or can obtain — a claims-experience letter, tell us at quote stage. See <a href="/en/car-insurance-spain/">car insurance in Spain</a>.</p>
    </div>

    <h2 id="faq">Frequently asked questions</h2>

    <h3>Will my UK no-claims bonus transfer to a Spanish policy?</h3>
    <p>Not automatically, and not as a guaranteed discount. Some insurers take documented UK history into account when quoting; others do not, or weigh it differently. Presenting a proper claims-experience letter is the best way to have it considered.</p>

    <h3>What if I already cancelled my old policy and did not get a letter?</h3>
    <p>It is usually still possible to request one after cancellation, though it can take longer and be more awkward to obtain. Ask your previous insurer directly, and start the process as soon as possible.</p>

    <h3>Does the letter need to be translated into Spanish?</h3>
    <p>It depends on the insurer — some accept English documentation, others prefer a translation. We can tell you what a specific proposal requires once we know which insurer is realistic for your case.</p>

    ${CARE_NOTE_HTML()}
  `,
  faq: [
    { q: 'Will my UK no-claims bonus transfer to a Spanish policy?', a: 'Not automatically, and not as a guaranteed discount. Some insurers take documented UK history into account when quoting; others do not, or weigh it differently. Presenting a proper claims-experience letter is the best way to have it considered.' },
    { q: 'What if I already cancelled my old policy and did not get a letter?', a: 'It is usually still possible to request one after cancellation, though it can take longer and be more awkward to obtain. Ask your previous insurer directly, and start the process as soon as possible.' },
    { q: 'Does the letter need to be translated into Spanish?', a: 'It depends on the insurer — some accept English documentation, others prefer a translation. We can tell you what a specific proposal requires once we know which insurer is realistic for your case.' },
  ],
  related: [
    { href: '/en/car-insurance-spain/', tag: 'Car insurance', title: 'Car insurance in Spain for expats' },
    { href: '/en/blog/car-insurance-spain-expats/', tag: 'Guide', title: 'Car insurance in Spain for expats: complete guide' },
    { href: '/en/blog/foreign-driving-licence-car-insurance-spain/', tag: 'Licences', title: 'Car insurance in Spain with a foreign driving licence' },
    { href: '/en/expat-insurance-spain/', tag: 'Spain', title: 'Insurance for expats in Spain' },
  ],
};

// -----------------------------------------------------------------------------
// L1 — /en/blog/life-insurance-spain-expats/
// -----------------------------------------------------------------------------

const LIFE_GUIDE = {
  slug: 'life-insurance-spain-expats',
  category: 'spain-life',
  tag: 'Life insurance',
  title: 'Life Insurance in Spain for Expats: What to Consider | Adler &amp; Rochefort',
  description:
    'Practical considerations for expats thinking about life insurance in Spain — term cover, sum insured, underwriting, existing foreign policies and how a mortgage fits in.',
  h1: 'Life Insurance in Spain for Expats: What to Consider',
  standfirst:
    'Not everyone needs life insurance, and this guide does not assume you do. Here is how to think through whether it is relevant to your situation, and what to check if it is.',
  published: '2026-08-28T09:00:00+00:00',
  destination: '/en/life-insurance-spain/',
  toc: [
    { href: '#does-it-apply', label: 'Working out if it applies to you' },
    { href: '#term-cover', label: 'Term cover, in plain terms' },
    { href: '#sum-insured', label: 'Thinking about the sum insured' },
    { href: '#underwriting', label: 'Underwriting, briefly' },
    { href: '#existing-cover', label: 'Cover you already hold from another country' },
    { href: '#beneficiaries', label: 'Beneficiaries, briefly' },
    { href: '#mortgage-link', label: 'How a mortgage fits in' },
    { href: '#faq', label: 'Frequently asked questions' },
  ],
  bodyHtml: `
    <h2 id="does-it-apply">Working out if it applies to you</h2>
    <p>Life insurance becomes genuinely relevant in a fairly narrow set of situations: dependants who rely on your income, a mortgage or significant debt that would otherwise fall to your family, a business obligation tied to your life, or a foreign policy that needs reviewing now that your circumstances have changed. If none of those describes you, it may simply not be a priority right now — and no honest guide should tell you otherwise.</p>

    <h2 id="term-cover">Term cover, in plain terms</h2>
    <p>The product most people mean by "life insurance" pays a defined sum if you die within a defined term. Insurers structure the details differently — level cover that stays constant, decreasing cover often paired with a repayment mortgage, and different renewal or conversion options — and not every insurer offers the same structure. Treat any product description, including this one, as a starting point for questions rather than a guarantee of what a specific policy contains.</p>

    <h2 id="sum-insured">Thinking about the sum insured</h2>
    <p>There is no universal multiplier that fits everyone. What actually feeds into a sensible figure: outstanding debts (including but not limited to a mortgage), how many dependants you have and for how long they would need support, what income would genuinely need replacing, education costs where relevant, and what savings or existing cover a family could already draw on. A number picked from a generic online calculator rarely reflects the specifics of a real household.</p>

    <h2 id="underwriting">Underwriting, briefly</h2>
    <p>Insurers assess applications individually based on age, health, smoking status, occupation, lifestyle, the sum insured requested and the term. No guide can tell you in advance what a specific insurer will decide for a specific case — and a reputable broker should not collect detailed medical information through a generic website form; that belongs with the insurer, as part of underwriting.</p>

    <h2 id="existing-cover">Cover you already hold from another country</h2>
    <p>Moving to Spain is not, by itself, a reason to cancel an existing UK, EU or other international life policy. Before assuming it still works exactly as before, check with the insurer that issued it: its territorial scope, any residency conditions, whether the sum insured still makes sense in its original currency, whether beneficiaries are still correctly named, and whether the policy has its own continuation rules for a move abroad.</p>

    <h2 id="beneficiaries">Beneficiaries, briefly</h2>
    <p>Naming beneficiaries deliberately, rather than leaving a policy to default, generally matters. Where Spanish succession or tax treatment of a payout becomes relevant, that is a question for a Spanish lawyer or tax adviser — not something a general guide, or an insurance broker, should attempt to answer.</p>

    <h2 id="mortgage-link">How a mortgage fits in</h2>
    <p>If a Spanish mortgage is part of your situation, the question of what your lender actually requires versus what it merely offers is genuinely worth getting right before you assume either answer — see <a href="/en/blog/mortgage-life-insurance-spain/">do you need life insurance for a mortgage in Spain?</a> for the detail.</p>

    <div class="callout">
      <div class="callout-title">Where this leads</div>
      <p>Tell us your situation and we will work through what actually applies, rather than sell you a product before we understand it. See <a href="/en/life-insurance-spain/">life insurance in Spain</a>.</p>
    </div>

    <h2 id="faq">Frequently asked questions</h2>

    <h3>Is life insurance compulsory in Spain?</h3>
    <p>No. It is not a legal requirement for residents generally, and — see our dedicated guide — not a nationwide legal requirement for a mortgage either, though lenders commonly request it.</p>

    <h3>Can I get life insurance in Spain without cancelling my UK policy first?</h3>
    <p>Yes — there is no need to cancel an existing policy before exploring Spanish options. Check its terms first rather than assuming either that it still works perfectly, or that it needs to be replaced.</p>

    <h3>Do I need to disclose pre-existing health conditions?</h3>
    <p>Yes, accurately — this is standard underwriting practice for any life insurer, and an inaccurate declaration is one of the most common reasons a later claim is refused.</p>

    ${CARE_NOTE_HTML()}
  `,
  faq: [
    { q: 'Is life insurance compulsory in Spain?', a: 'No. It is not a legal requirement for residents generally, and — see our dedicated guide — not a nationwide legal requirement for a mortgage either, though lenders commonly request it.' },
    { q: 'Can I get life insurance in Spain without cancelling my UK policy first?', a: 'Yes — there is no need to cancel an existing policy before exploring Spanish options. Check its terms first rather than assuming either that it still works perfectly, or that it needs to be replaced.' },
    { q: 'Do I need to disclose pre-existing health conditions?', a: 'Yes, accurately — this is standard underwriting practice for any life insurer, and an inaccurate declaration is one of the most common reasons a later claim is refused.' },
  ],
  related: [
    { href: '/en/life-insurance-spain/', tag: 'Life insurance', title: 'Life insurance in Spain for international residents' },
    { href: '/en/blog/mortgage-life-insurance-spain/', tag: 'Mortgage', title: 'Do you need life insurance for a mortgage in Spain?' },
    { href: '/en/blog/insurance-review-expats-spain/', tag: 'Review', title: 'Why expats in Spain should review their insurance as a whole' },
    { href: '/en/expat-insurance-spain/', tag: 'Spain', title: 'Insurance for expats in Spain' },
  ],
};

// -----------------------------------------------------------------------------
// L2 — /en/blog/mortgage-life-insurance-spain/
// -----------------------------------------------------------------------------
//
// The highest-care article in this file, alongside the visa/residency health
// article. Position verified against Banco de España's own client guidance
// and Ley 5/2019, de 15 de marzo — see the header comment on the MORTGAGE
// commercial page in spain-cluster.data.mjs for the full sourcing note.

const MORTGAGE_ARTICLE = {
  slug: 'mortgage-life-insurance-spain',
  category: 'spain-life',
  tag: 'Mortgage',
  title: 'Do You Need Life Insurance for a Mortgage in Spain? | Adler &amp; Rochefort',
  description:
    'A properly sourced answer, not bank marketing: what a Spanish mortgage lender actually requires by law, what it commonly requests, and your right to choose your own provider.',
  h1: 'Do You Need Life Insurance for a Mortgage in Spain?',
  standfirst:
    'The honest answer is not a simple yes or no. Here is the actual legal position, checked against Banco de España\'s own guidance and Spanish mortgage-lending law — not against what a bank\'s brochure implies.',
  published: '2026-08-28T09:00:00+00:00',
  destination: '/en/mortgage-protection-spain/',
  toc: [
    { href: '#the-actual-answer', label: 'The actual answer' },
    { href: '#whats-really-required', label: 'What is genuinely required by law' },
    { href: '#lender-requests', label: 'What a lender commonly requests' },
    { href: '#bank-bundling', label: 'Bank bundling and interest-rate incentives' },
    { href: '#your-right-to-choose', label: 'Your right to choose your own provider' },
    { href: '#protecting-family-vs-bank', label: 'Protecting your family, not just the loan' },
    { href: '#faq', label: 'Frequently asked questions' },
  ],
  bodyHtml: `
    <h2 id="the-actual-answer">The actual answer</h2>
    <p>No — life insurance is not a nationwide legal requirement to obtain a mortgage in Spain. What a lender is actually required to insist on is buildings insurance, covering the property that secures the loan. This is worth stating plainly at the top, because a lot of what circulates online on this topic reflects how banks present the question commercially, not what the law actually requires.</p>

    <h2 id="whats-really-required">What is genuinely required by law</h2>
    <p>Under Spanish mortgage-lending practice, confirmed by Banco de España's own consumer guidance, the insurance genuinely tied to granting a mortgage is buildings (property damage) insurance — protecting the physical asset the lender is lending against. There is no equivalent nationwide legal requirement specifically for life insurance.</p>

    <h2 id="lender-requests">What a lender commonly requests</h2>
    <p>In practice, many lenders ask borrowers to take out a life insurance policy as additional security for the loan — reasonable from the lender's perspective, since it protects them if a borrower dies with the loan outstanding. This is a lending practice, not a statutory requirement, and it is legally permitted for a lender to ask for it as one of the conditions attached to the specific loan offer, provided the other rules below are respected.</p>

    <h2 id="bank-bundling">Bank bundling and interest-rate incentives</h2>
    <p>Where things get genuinely confusing for buyers: banks frequently offer a better headline interest rate to borrowers who take out the bank's own bundled life insurance product alongside the mortgage. This is a commercial incentive, not a legal obligation — but because the rate difference can be significant, it often feels compulsory even where it is not. Bundled bank policies have also, in some documented cases, been priced considerably higher than equivalent standalone cover from an independent insurer.</p>

    <h2 id="your-right-to-choose">Your right to choose your own provider</h2>
    <p><em>Ley 5/2019, de 15 de marzo, reguladora de los contratos de crédito inmobiliario</em>, prohibits a lender from making a mortgage loan itself conditional on the borrower buying the bank's own tied insurance product, and requires the lender to accept an equivalent policy from another provider offering comparable cover and conditions. In practice: you can generally source your own life insurance policy, present it to the lender, and expect it to be accepted if it genuinely matches what the lender's own policy would have provided — though the lender is not obliged to extend the same discounted interest rate it offers for taking its own bundled product.</p>
    <p>Separately, Spain's Supreme Court has in recent years found certain single-premium life insurance policies — where the policy was effectively imposed as a lending condition, paid as one large upfront premium, and its true cost not made transparent to the borrower — to be abusive and therefore void in specific circumstances. This is a developing area of case law rather than a blanket rule for every bundled policy, and a genuinely disputed policy is a matter for a Spanish lawyer, not something this article can resolve for you.</p>

    <h2 id="protecting-family-vs-bank">Protecting your family, not just the loan</h2>
    <p>A policy sized precisely to clear the mortgage balance protects the lender's interest — your family still loses the home's equity contribution and whatever else the household needed. It is worth deciding, deliberately, whether you want cover that simply clears the debt or cover that also protects your family's wider financial position — see <a href="/en/life-insurance-spain/">life insurance in Spain</a> for how to think about the broader figure.</p>

    <div class="callout">
      <div class="callout-title">Where this leads</div>
      <p>Tell us about your mortgage and we will confirm what your lender actually requires versus what it offers, and what independent options exist. See <a href="/en/mortgage-protection-spain/">mortgage protection in Spain</a>.</p>
    </div>

    <h2 id="faq">Frequently asked questions</h2>

    <h3>Can my bank refuse my mortgage if I do not take their life insurance?</h3>
    <p>They cannot make the loan itself conditional on buying their tied insurance product, under Ley 5/2019 — but they can decline to offer the discounted interest rate associated with taking it, and can still legitimately require some form of equivalent life cover as loan security, which you can source independently.</p>

    <h3>Is a single-premium life policy sold with a mortgage always abusive?</h3>
    <p>No — Spanish courts have found specific cases abusive where the policy was effectively imposed, paid as one large upfront sum, and its cost not made transparent. Not every bundled policy meets that description. A genuinely disputed case is a matter for a Spanish lawyer to assess.</p>

    <h3>Will I get a worse mortgage rate if I use an independent life insurer?</h3>
    <p>Possibly — many banks offer a discounted rate specifically for taking their own bundled product. Whether the rate saving outweighs a potentially cheaper or better-structured independent policy is worth comparing directly, not assuming either way.</p>

    ${CARE_NOTE_HTML()}
  `,
  faq: [
    { q: 'Can my bank refuse my mortgage if I do not take their life insurance?', a: 'They cannot make the loan itself conditional on buying their tied insurance product, under Ley 5/2019 — but they can decline to offer the discounted interest rate associated with taking it, and can still legitimately require some form of equivalent life cover as loan security, which you can source independently.' },
    { q: 'Is a single-premium life policy sold with a mortgage always abusive?', a: 'No — Spanish courts have found specific cases abusive where the policy was effectively imposed, paid as one large upfront sum, and its cost not made transparent. Not every bundled policy meets that description. A genuinely disputed case is a matter for a Spanish lawyer to assess.' },
    { q: 'Will I get a worse mortgage rate if I use an independent life insurer?', a: 'Possibly — many banks offer a discounted rate specifically for taking their own bundled product. Whether the rate saving outweighs a potentially cheaper or better-structured independent policy is worth comparing directly, not assuming either way.' },
  ],
  related: [
    { href: '/en/mortgage-protection-spain/', tag: 'Mortgage protection', title: 'Mortgage protection in Spain for international property buyers' },
    { href: '/en/blog/life-insurance-spain-expats/', tag: 'Guide', title: 'Life insurance in Spain for expats: what to consider' },
    { href: '/en/blog/insurance-buying-property-spain/', tag: 'Buying property', title: 'Insurance to consider when buying property in Spain' },
    { href: '/en/life-insurance-spain/', tag: 'Life insurance', title: 'Life insurance in Spain for international residents' },
  ],
};

// -----------------------------------------------------------------------------
// L3 — /en/blog/insurance-buying-property-spain/  (cross-cluster article)
// -----------------------------------------------------------------------------

const BUYING_PROPERTY = {
  slug: 'insurance-buying-property-spain',
  situation: 'buying_property',
  category: 'spain-property',
  tag: 'Buying property',
  title: 'Insurance to Consider When Buying Property in Spain | Adler &amp; Rochefort',
  description:
    'A practical checklist of the insurance questions that come up when buying property in Spain — buildings, contents, mortgage protection, life cover and landlord insurance if you plan to let it.',
  h1: 'Insurance to Consider When Buying Property in Spain',
  standfirst:
    'Buying property in Spain raises several separate insurance questions at once. Here is the practical order to think about them in — not a property-law guide, an insurance one.',
  published: '2026-08-28T09:00:00+00:00',
  destination: '/en/home-insurance-spain/',
  toc: [
    { href: '#not-a-legal-guide', label: 'What this is, and is not' },
    { href: '#buildings', label: 'Buildings insurance' },
    { href: '#contents', label: 'Contents' },
    { href: '#mortgage-protection', label: 'Mortgage protection, if borrowing' },
    { href: '#life', label: 'Life insurance, more broadly' },
    { href: '#landlord', label: 'If you plan to let it out' },
    { href: '#health-car', label: 'Health and car, where relocation makes them relevant' },
    { href: '#faq', label: 'Frequently asked questions' },
  ],
  bodyHtml: `
    <h2 id="not-a-legal-guide">What this is, and is not</h2>
    <p>Buying property in Spain involves a legal and tax process this article does not attempt to explain — notaries, land registry, taxes and conveyancing are questions for a lawyer and, where relevant, a tax adviser. What follows is the insurance side only: the covers worth thinking about, roughly in the order they become relevant during a purchase.</p>

    <h2 id="buildings">Buildings insurance</h2>
    <p>If you are borrowing to buy, buildings cover is what your lender will actually require — see <a href="/en/home-insurance-spain/">home insurance in Spain</a> for what this typically involves. It needs to be in place from the point you take on the risk, not arranged after completion.</p>

    <h2 id="contents">Contents</h2>
    <p>Separate from the buildings themselves — what you actually own inside the property. Worth arranging alongside buildings cover rather than as an afterthought, particularly if you are furnishing the property as part of the purchase.</p>

    <h2 id="mortgage-protection">Mortgage protection, if borrowing</h2>
    <p>If a mortgage is part of the purchase, it is worth understanding early what your lender actually requires versus what it merely offers — see <a href="/en/blog/mortgage-life-insurance-spain/">do you need life insurance for a mortgage in Spain?</a> for the detail, and <a href="/en/mortgage-protection-spain/">mortgage protection in Spain</a> for the commercial page.</p>

    <h2 id="life">Life insurance, more broadly</h2>
    <p>Buying property is a common moment for people to think about life insurance more generally, beyond just the mortgage — particularly if the purchase means taking on new financial obligations as a household. See <a href="/en/life-insurance-spain/">life insurance in Spain</a> if this applies to you.</p>

    <h2 id="landlord">If you plan to let it out</h2>
    <p>A property bought with the intention of renting it out — long-term or as a holiday let — generally needs landlord cover rather than standard home insurance from day one. See <a href="/en/landlord-insurance-spain/">landlord insurance in Spain</a>.</p>

    <h2 id="health-car">Health and car, where relocation makes them relevant</h2>
    <p>If the purchase is part of a wider move to Spain rather than a standalone investment, it is also worth thinking about <a href="/en/health-insurance-spain/">health insurance in Spain</a> and, if a vehicle is involved, <a href="/en/car-insurance-spain/">car insurance in Spain</a> — not because every property buyer needs both, but because a move often raises both questions at the same time as the property itself.</p>

    <div class="callout">
      <div class="callout-title">Managing several of these at once</div>
      <p>If your purchase touches more than one of these — a mortgage, a rental plan, a wider move — a coordinated review across all of it at once is often more useful than treating each as a separate task. See <a href="/en/private-clients-spain/">private client insurance in Spain</a>.</p>
    </div>

    <h2 id="faq">Frequently asked questions</h2>

    <h3>What insurance is legally required to buy property in Spain?</h3>
    <p>If you are borrowing, your lender will require buildings insurance on the property. Beyond that, there is no single "property purchase insurance" required by law — the other covers on this page are about what is genuinely useful, not what is mandated.</p>

    <h3>Do I need insurance before I complete the purchase?</h3>
    <p>Buildings cover needs to be in place from the point you take on the risk, which for a mortgaged purchase is typically expected at or before completion — confirm the exact timing with your lender.</p>

    <h3>Should I sort out insurance myself or let my lender's bank arrange it?</h3>
    <p>You are generally entitled to choose your own provider for cover a lender requires, provided it offers equivalent terms — see our guide to mortgage life insurance in Spain for how this works in practice for life cover specifically.</p>

    ${CARE_NOTE_HTML()}
  `,
  faq: [
    { q: 'What insurance is legally required to buy property in Spain?', a: 'If you are borrowing, your lender will require buildings insurance on the property. Beyond that, there is no single "property purchase insurance" required by law — the other covers on this page are about what is genuinely useful, not what is mandated.' },
    { q: 'Do I need insurance before I complete the purchase?', a: 'Buildings cover needs to be in place from the point you take on the risk, which for a mortgaged purchase is typically expected at or before completion — confirm the exact timing with your lender.' },
    { q: 'Should I sort out insurance myself or let my lender\'s bank arrange it?', a: 'You are generally entitled to choose your own provider for cover a lender requires, provided it offers equivalent terms — see our guide to mortgage life insurance in Spain for how this works in practice for life cover specifically.' },
  ],
  related: [
    { href: '/en/home-insurance-spain/', tag: 'Home insurance', title: 'Home insurance in Spain for international owners' },
    { href: '/en/mortgage-protection-spain/', tag: 'Mortgage protection', title: 'Mortgage protection in Spain for international property buyers' },
    { href: '/en/blog/mortgage-life-insurance-spain/', tag: 'Mortgage', title: 'Do you need life insurance for a mortgage in Spain?' },
    { href: '/en/landlord-insurance-spain/', tag: 'Landlord insurance', title: 'Landlord insurance in Spain for international property owners' },
    { href: '/en/private-clients-spain/', tag: 'Private clients', title: 'Private client insurance in Spain' },
  ],
};

// -----------------------------------------------------------------------------
// L4 — /en/blog/high-value-home-insurance-spain/
// -----------------------------------------------------------------------------

const HIGH_VALUE_HOME = {
  slug: 'high-value-home-insurance-spain',
  situation: 'private_client',
  category: 'spain-private-clients',
  tag: 'Private clients',
  title: 'Insuring a High-Value Home in Spain: What International Owners Should Check | Adler &amp; Rochefort',
  description:
    'What genuinely changes when insuring a higher-value property in Spain — rebuilding value, contents sums, security, occupancy and valuables — and what not to assume is automatically included.',
  h1: 'Insuring a High-Value Home in Spain: What International Owners Should Check',
  standfirst:
    'A higher-value property raises the same questions as any home insurance, with higher stakes if any of them are answered carelessly. Here is what to check specifically.',
  published: '2026-08-28T09:00:00+00:00',
  destination: '/en/private-clients-spain/',
  toc: [
    { href: '#rebuilding-value', label: 'Accurate rebuilding value' },
    { href: '#contents', label: 'High contents sums' },
    { href: '#security', label: 'Security expectations' },
    { href: '#occupancy', label: 'Occupancy and second-home use' },
    { href: '#valuables', label: 'Valuables — what to check, not assume' },
    { href: '#liability', label: 'Liability' },
    { href: '#claims', label: 'Claims handling at this level' },
    { href: '#faq', label: 'Frequently asked questions' },
  ],
  bodyHtml: `
    <h2 id="rebuilding-value">Accurate rebuilding value</h2>
    <p>The rebuild cost of a larger or more architecturally complex property is not simply its market value scaled up, and it is one of the figures most likely to be quietly out of date on an existing policy. An inaccurate rebuild value discovered at a claim — rather than at renewal — is one of the more expensive mistakes a homeowner can make at any value, and the stakes rise with the property.</p>

    <h2 id="contents">High contents sums</h2>
    <p>Sums insured need to reflect what is genuinely in the property, not a round figure carried over from a previous, smaller home. This matters more, not less, as contents values rise, and it is worth revisiting periodically rather than setting once.</p>

    <h2 id="security">Security expectations</h2>
    <p>Insurers underwriting higher-value properties commonly expect more from security than a standard policy — alarm systems, safes for specific categories of item, monitored response, or similar, depending on the insurer and the specific risk. What is actually required is set by the insurer and the policy, not a universal standard, so confirm the specifics for your case rather than assume a general baseline applies.</p>

    <h2 id="occupancy">Occupancy and second-home use</h2>
    <p>The same occupancy principles that apply to any second home apply here — see <a href="/en/home-insurance-spain/">home insurance in Spain</a> — but a higher-value property left unoccupied for extended periods often draws closer underwriting attention, and the security/monitoring conditions attached to unoccupancy can be stricter than on a lower-value home.</p>

    <h2 id="valuables">Valuables — what to check, not assume</h2>
    <p>Whether items such as jewellery, watches, fine art or collections can be included, and on what basis, depends entirely on the actual insurer and product — we do not promise cover for any of these categories in general terms, and neither should any broker describing a "high-value home" product. If you have valuables of this kind, tell us specifically what they are and we will confirm honestly whether, and how, they can currently be arranged.</p>

    <h2 id="liability">Liability</h2>
    <p>Owner liability exposure tends to scale with the size and use of a property — more staff, more visitors, more shared amenities such as a pool. This is worth reviewing explicitly against your actual sum insured rather than assuming a standard limit is automatically sufficient.</p>

    <h2 id="claims">Claims handling at this level</h2>
    <p>How a claim is actually handled — who assesses it, how quickly, and with what expectations around documentation — is set by the insurer and the specific policy, not something we can generalise here. It is one of the genuinely useful questions to ask before choosing a product, not just after a claim happens.</p>

    <div class="callout">
      <div class="callout-title">Where this leads</div>
      <p>For a property with any of these characteristics, a coordinated review alongside your other cover is often more useful than treating it in isolation. See <a href="/en/private-clients-spain/">private client insurance in Spain</a>.</p>
    </div>

    <h2 id="faq">Frequently asked questions</h2>

    <h3>Is a high-value home automatically harder to insure in Spain?</h3>
    <p>Not automatically — but it does typically draw closer underwriting attention on rebuild value, security and occupancy. Getting these details precisely right is what actually determines whether cover is straightforward.</p>

    <h3>Do you insure fine art, jewellery or collections?</h3>
    <p>Only where it can genuinely be arranged and supported by an actual insurer relationship. We do not promise this in general terms — tell us what you have and we will confirm honestly what is currently possible.</p>

    <h3>Should a high-value property be reviewed alongside my other insurance?</h3>
    <p>Often, yes — a property at this level is frequently one part of a wider household picture (vehicles, health, life cover) that benefits from being looked at together rather than policy by policy.</p>

    ${CARE_NOTE_HTML()}
  `,
  faq: [
    { q: 'Is a high-value home automatically harder to insure in Spain?', a: 'Not automatically — but it does typically draw closer underwriting attention on rebuild value, security and occupancy. Getting these details precisely right is what actually determines whether cover is straightforward.' },
    { q: 'Do you insure fine art, jewellery or collections?', a: 'Only where it can genuinely be arranged and supported by an actual insurer relationship. We do not promise this in general terms — tell us what you have and we will confirm honestly what is currently possible.' },
    { q: 'Should a high-value property be reviewed alongside my other insurance?', a: 'Often, yes — a property at this level is frequently one part of a wider household picture (vehicles, health, life cover) that benefits from being looked at together rather than policy by policy.' },
  ],
  related: [
    { href: '/en/private-clients-spain/', tag: 'Private clients', title: 'Private client insurance in Spain' },
    { href: '/en/home-insurance-spain/', tag: 'Home insurance', title: 'Home insurance in Spain for international owners' },
    { href: '/en/blog/insurance-review-expats-spain/', tag: 'Review', title: 'Why expats in Spain should review their insurance as a whole' },
    { href: '/en/blog/second-home-insurance-spain/', tag: 'Second home', title: 'Second home insurance in Spain' },
  ],
};

// -----------------------------------------------------------------------------
// L5 — /en/blog/insurance-review-expats-spain/
// -----------------------------------------------------------------------------

const INSURANCE_REVIEW = {
  slug: 'insurance-review-expats-spain',
  category: 'spain-private-clients',
  tag: 'Private clients',
  title: 'Why Expats in Spain Should Review Their Insurance as a Whole | Adler &amp; Rochefort',
  description:
    'How separate policies arranged at different times can quietly create gaps, overlaps and outdated information — and why a coordinated review across all of them tends to catch what a single renewal never would.',
  h1: 'Why Expats in Spain Should Review Their Insurance as a Whole',
  standfirst:
    'Most people\'s insurance was never designed as a system — it accumulated, one policy at a time. Here is what that tends to produce, and why looking at it together is worth doing at least once.',
  published: '2026-08-28T09:00:00+00:00',
  destination: '/en/private-clients-spain/',
  toc: [
    { href: '#accumulated-not-designed', label: 'Accumulated, not designed' },
    { href: '#gaps', label: 'Gaps between policies' },
    { href: '#overlaps', label: 'Overlaps and duplication' },
    { href: '#outdated-info', label: 'Outdated residency and occupancy information' },
    { href: '#duplicated-assistance', label: 'Duplicated assistance cover' },
    { href: '#missing-protection', label: 'Missing family protection' },
    { href: '#faq', label: 'Frequently asked questions' },
  ],
  bodyHtml: `
    <h2 id="accumulated-not-designed">Accumulated, not designed</h2>
    <p>Nobody sits down and designs their insurance as a coordinated system. A home policy gets arranged on moving day, a car policy when the car is bought, health cover when someone first mentions the public system doesn't fully apply, life insurance whenever it first comes up — each decision reasonable on its own, each made separately, often years apart, sometimes in different languages with different insurers. What that process rarely produces, without someone deliberately checking, is a picture that actually fits together.</p>

    <h2 id="gaps">Gaps between policies</h2>
    <p>Gaps tend to hide in the space between two policies that each assume the other one covers something. A landlord's building policy and a tenant's contents policy that both assume liability sits with the other party is a classic example — and the property version of this exact gap is covered in <a href="/en/blog/community-insurance-apartment-owners-spain/">community insurance and apartment ownership in Spain</a>.</p>

    <h2 id="overlaps">Overlaps and duplication</h2>
    <p>The opposite problem is just as common and less obviously a problem, until you notice you are paying twice for the same protection — two assistance covers on the same vehicle, or a legal-expenses add-on repeated across two unrelated policies. Not dangerous, but not free either.</p>

    <h2 id="outdated-info">Outdated residency and occupancy information</h2>
    <p>A policy taken out when you first arrived, describing your residency status or how a property is occupied as it was then, does not update itself as your situation changes. A property described as a permanent residence that is now a second home, or a contents figure that has never been revisited since the original purchase, are two of the most common things a proper review actually finds.</p>

    <h2 id="duplicated-assistance">Duplicated assistance cover</h2>
    <p>Roadside assistance, travel assistance and similar add-ons are often included, sometimes without the policyholder realising, across more than one policy — home, car and even some bank accounts can carry overlapping versions of similar cover. Reviewing everything together is usually the only way this becomes visible.</p>

    <h2 id="missing-protection">Missing family protection</h2>
    <p>The most consequential gap we see is not a small overlap — it is life insurance that was never arranged at all, or a foreign policy nobody has checked since a house purchase or a change in family circumstances. See <a href="/en/life-insurance-spain/">life insurance in Spain</a> if this describes your situation, or <a href="/en/blog/family-insurance-spain/">insurance for families living in Spain</a> for how health, home, car and life tend to connect for a family specifically.</p>

    <div class="callout">
      <div class="callout-title">Where this leads</div>
      <p>Tell us what you currently hold and with whom, and we will review it together rather than one policy at a time. See <a href="/en/private-clients-spain/">private client insurance in Spain</a>.</p>
    </div>

    <h2 id="faq">Frequently asked questions</h2>

    <h3>Is this just a way to sell me more insurance?</h3>
    <p>No — a review sometimes finds that you have too much cover in one place and too little in another, not simply that you need to buy more. The point is an accurate picture, not a bigger bill.</p>

    <h3>What do I need to prepare for a review?</h3>
    <p>Whatever policies you currently hold and roughly when they renew. We start from what you have, not from a blank slate.</p>

    <h3>Does this cost anything?</h3>
    <p>The review itself is free and without obligation — the same basis as every quote request on this site.</p>

    ${CARE_NOTE_HTML()}
  `,
  faq: [
    { q: 'Is this just a way to sell me more insurance?', a: 'No — a review sometimes finds that you have too much cover in one place and too little in another, not simply that you need to buy more. The point is an accurate picture, not a bigger bill.' },
    { q: 'What do I need to prepare for a review?', a: 'Whatever policies you currently hold and roughly when they renew. We start from what you have, not from a blank slate.' },
    { q: 'Does this cost anything?', a: 'The review itself is free and without obligation — the same basis as every quote request on this site.' },
  ],
  related: [
    { href: '/en/private-clients-spain/', tag: 'Private clients', title: 'Private client insurance in Spain' },
    { href: '/en/blog/high-value-home-insurance-spain/', tag: 'High-value homes', title: 'Insuring a high-value home in Spain' },
    { href: '/en/life-insurance-spain/', tag: 'Life insurance', title: 'Life insurance in Spain for international residents' },
    { href: '/en/blog/family-insurance-spain/', tag: 'Family', title: 'Insurance for families living in Spain' },
  ],
};

// -----------------------------------------------------------------------------
// L6 — /en/blog/family-insurance-spain/  (Phase 7: situation-based acquisition)
// -----------------------------------------------------------------------------
// Deliberately a different angle from insurance-review-expats-spain (above):
// that article is for someone auditing policies they already hold; this one
// is for a family working out what to arrange in the first place. Cross-
// linked in both directions rather than left to compete on the same intent.

const FAMILY_SPAIN = {
  slug: 'family-insurance-spain',
  situation: 'family',
  category: 'spain-health',
  tag: 'Family',
  title: 'Insurance for Families Living in Spain | What International Residents Should Review',
  description:
    'What insurance actually comes up for a family living in Spain — health, home, car and life — and how to work out which of them apply to your situation rather than assuming you need all four.',
  h1: 'Insurance for Families Living in Spain: What Should You Review?',
  standfirst:
    'Not every family needs every product. Here is how the four that come up most often — health, home, car and life — tend to connect for a family actually living in Spain, so you can work out which apply to you.',
  published: '2026-08-28T09:00:00+00:00',
  destination: '/en/health-insurance-spain/',
  toc: [
    { href: '#not-a-bundle', label: 'This is not a bundle' },
    { href: '#health', label: 'Health insurance' },
    { href: '#home', label: 'Home insurance' },
    { href: '#car', label: 'Car insurance' },
    { href: '#life', label: 'Life and family protection' },
    { href: '#already-hold-cover', label: 'Already hold some of this?' },
    { href: '#faq', label: 'Frequently asked questions' },
  ],
  bodyHtml: `
    <h2 id="not-a-bundle">This is not a bundle</h2>
    <p>Families ask us about insurance in Spain for genuinely different reasons — a couple with young children has a different set of questions to a single parent, or to adult siblings who each own a share of a family property. There is no single "family policy," and we do not assume every household needs health, home, car and life cover all at once. What follows is how each one tends to connect to family circumstances specifically, so you can work out which apply to yours.</p>

    <h2 id="health">Health insurance</h2>
    <p>For a family, health cover usually raises questions that do not come up for a single applicant on their own — whether children are covered on the same policy or a separate one, how maternity is treated if that is relevant, and whether pre-existing conditions across several family members are declared and assessed individually. See <a href="/en/health-insurance-spain/">health insurance in Spain</a> for how cover works in general; the family-specific detail is in how many people are being insured and what each of them actually needs.</p>

    <h2 id="home">Home insurance</h2>
    <p>The property a family lives in full-time is usually the more straightforward end of home insurance — occupied, lived-in, used daily — but family liability is worth checking specifically: cover for accidental damage or injury caused by a member of the household, including children, to someone outside it. See <a href="/en/home-insurance-spain/">home insurance in Spain</a>.</p>

    <h2 id="car">Car insurance</h2>
    <p>A family with more than one driver, or a driver who has just moved their licence and no-claims history from another country, has questions that a single-driver policy does not. Worth checking: whether every driver in the household needs to be named, and how a foreign licence and driving history are actually treated. See <a href="/en/car-insurance-spain/">car insurance in Spain</a>.</p>

    <h2 id="life">Life and family protection</h2>
    <p>This is the one families most often postpone rather than decide against — usually not because it does not matter, but because nobody has actually sat down to work out what sum insured makes sense, or whether an existing policy from another country still applies once the family has moved. If there are dependants, or a mortgage on a Spanish property, this is worth deciding rather than leaving open. See <a href="/en/life-insurance-spain/">life insurance in Spain</a>.</p>

    <div class="callout">
      <div class="callout-title">Where this leads</div>
      <p>Tell us about your family's situation — who needs to be covered, and for what — and we will tell you honestly which of these actually apply, not sell you all four by default.</p>
    </div>

    <h2 id="already-hold-cover">Already hold some of this?</h2>
    <p>If your family already has policies arranged at different times — a health plan from one insurer, home cover from another, life insurance nobody has looked at since it was taken out — the more useful exercise is often a coordinated review of what you already hold, rather than arranging something new. See <a href="/en/blog/insurance-review-expats-spain/">why expats in Spain should review their insurance as a whole</a>. Families with several properties, vehicles or a more complex household picture may also want <a href="/en/private-clients-spain/">private client insurance in Spain</a> — one coordinated relationship rather than several unconnected policies.</p>

    <h2 id="faq">Frequently asked questions</h2>

    <h3>Do we need health, home, car and life insurance all at once?</h3>
    <p>Not necessarily — it depends on your family's actual circumstances. Some families need all four, others only one or two. Tell us your situation and we will tell you honestly which apply, rather than assume.</p>

    <h3>Can children be added to a health policy, or do they need their own?</h3>
    <p>This depends on the insurer and plan — some cover a family under one policy, others price and underwrite each person, including children, separately. Confirm this specifically rather than assuming either approach.</p>

    <h3>We already have insurance from another country — does it still count?</h3>
    <p>Sometimes, in part — a foreign policy is worth checking against what it actually covers in Spain rather than assumed to transfer automatically or assumed to stop working the moment you arrive. See <a href="/en/blog/insurance-review-expats-spain/">reviewing insurance you already hold</a>.</p>

    ${CARE_NOTE_HTML()}
  `,
  faq: [
    { q: 'Do we need health, home, car and life insurance all at once?', a: 'Not necessarily — it depends on your family\'s actual circumstances. Some families need all four, others only one or two. Tell us your situation and we will tell you honestly which apply, rather than assume.' },
    { q: 'Can children be added to a health policy, or do they need their own?', a: 'This depends on the insurer and plan — some cover a family under one policy, others price and underwrite each person, including children, separately. Confirm this specifically rather than assuming either approach.' },
    { q: 'We already have insurance from another country — does it still count?', a: 'Sometimes, in part — a foreign policy is worth checking against what it actually covers in Spain rather than assumed to transfer automatically or assumed to stop working the moment you arrive.' },
  ],
  related: [
    { href: '/en/health-insurance-spain/', tag: 'Health insurance', title: 'Health insurance in Spain for expats' },
    { href: '/en/home-insurance-spain/', tag: 'Home insurance', title: 'Home insurance in Spain for international owners' },
    { href: '/en/car-insurance-spain/', tag: 'Car insurance', title: 'Car insurance in Spain for expats' },
    { href: '/en/life-insurance-spain/', tag: 'Life insurance', title: 'Life insurance in Spain for international residents' },
    { href: '/en/private-clients-spain/', tag: 'Private clients', title: 'Private client insurance in Spain' },
  ],
};

export const ARTICLES = [
  HEALTH_GUIDE,
  HEALTH_MOVING,
  HEALTH_VISA,
  PROP_COMMUNITY,
  PROP_NON_RESIDENT,
  PROP_SECOND_HOME,
  PROP_RENTING_OUT,
  CAR_GUIDE,
  CAR_LICENCE,
  CAR_FOREIGN_REG,
  CAR_IMPORTING,
  CAR_NO_CLAIMS,
  LIFE_GUIDE,
  MORTGAGE_ARTICLE,
  BUYING_PROPERTY,
  HIGH_VALUE_HOME,
  INSURANCE_REVIEW,
  FAMILY_SPAIN,
];
