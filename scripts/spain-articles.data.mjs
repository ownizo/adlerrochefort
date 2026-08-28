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
  ],
};

// -----------------------------------------------------------------------------
// P3 — Second-home insurance
// -----------------------------------------------------------------------------

const PROP_SECOND_HOME = {
  slug: 'second-home-insurance-spain',
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
  ],
};

// -----------------------------------------------------------------------------
// P4 — Renting out property in Spain
// -----------------------------------------------------------------------------

const PROP_RENTING_OUT = {
  slug: 'renting-out-property-in-spain',
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
  return `<p style="border-top:1px solid #E5DFCB;padding-top:18px;margin:36px 0 0;font-size:14px;line-height:1.7;color:#637060;"><strong>General information only.</strong> ${CARE_NOTE}</p>`;
}

export const ARTICLES = [
  HEALTH_GUIDE,
  HEALTH_MOVING,
  HEALTH_VISA,
  PROP_COMMUNITY,
  PROP_NON_RESIDENT,
  PROP_SECOND_HOME,
  PROP_RENTING_OUT,
];
