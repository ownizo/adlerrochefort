# EN/DE Private Client implementation — 18 September 2026

## Architecture and routes

| Route | Result |
| --- | --- |
| `/en/private-clients/` | Repositioned Portugal household-coordination hub; preserved technical-library depth |
| `/en/private-clients-spain/` | Spanish country counterpart, same section hierarchy, design, review model and representative path; country-specific content and conditional specialist availability |
| `/de/private-clients/` | **New** principal German acquisition/education hub, with `#portugal` and `#spanien` |
| `/de/private-clients-portugal/` | Existing URL retained, self-canonical, supporting Portugal technical content; links to the new principal hub; intrusive wizard replaced |
| `/de/versicherung-tavira/` | **New** substantive German Tavira / Eastern Algarve guide adapted from the existing English Tavira article |

No `/en/private-clients-portugal/` or `/de/private-clients-spanien/` was created. No route was redirected or deleted. Lagos and Tavira have separate links and content: Tavira discusses Ria Formosa tidal water, traditional roofs and construction, renovation handovers, salt corrosion and maintenance.

The three principal hubs follow the requested hierarchy: household context, fragmented policies, coordination, residences/countries, homes, collections, vehicles/marine, health, liability, staff/management, representatives, review process, renewals/claims, local knowledge, technical guides and confidential review. Portugal retains access to the existing technical library, including agreed value, valuations, underinsurance, restoration, security, surveys, claims history, collections, wine, classic vehicles and marine.

## Sources and regeneration

The sole renderer for the five pages is `scripts/private-client/render.mjs`; content lives in `content.mjs` and the preserved `portugal-guides.mjs`. The German Portugal page continues to read its substantive technical sections from `scripts/de-content/private-clients.mjs`.

Both legacy page generators delegate these routes to the new renderer. The obsolete Spain page/form definition was removed from the Spain data file and replaced by a route descriptor reading current content. Thus running either generator does not restore the malformed checkbox field or the old German form.

Reproduction (writes only the requested EN/DE pages plus scoped sitemap entries):

```sh
node scripts/build-private-clients.mjs
node scripts/generate-de-cluster.mjs --private-clients-only
node scripts/build-spain-cluster.mjs --private-clients-only
node scripts/refresh-en-de-private-client-links.mjs
node scripts/generate-sitemap.mjs --en-de-only
```

The refresh pass applies reviewed terminology contexts to EN/DE public files and dedicated English sources, updates German navigation and includes German-only navigation styling. Hand-authored public pages remain their source; generated listings use the corrected EN records in `data/articles.json` / `data/articles.extracted.json` and the English branch of `generate-blog.mjs`. Portuguese records in the mixed data files were compared with HEAD and remain identical.

## Forms and submission pipeline

| Form name | Pages | Language |
| --- | --- | --- |
| `private-client-review-portugal` | EN Portugal hub | EN |
| `private-client-review-spain` | EN Spain hub; existing form name retained | EN |
| `private-client-review-de` | DE principal hub, Portugal supporting page and Tavira guide | DE |

All use the same static Netlify-detectable field set: name, email, optional phone, preferred contact method, role, country choice, 15 risk checkboxes, approximate property count, locations, existing insurance, approaching renewal, valuations, free-text requirements, authority and privacy consent. Phone is needed only if the visitor elects phone/WhatsApp contact. No NIF, DOB, full address, documentary authority or detailed medical information is requested.

Representatives select their role and answer whether they have authority. “Not yet” is an accepted starting point; the page explains that authority and information-sharing consent are confirmed before personal policy details are discussed. The first form does not invent a power-of-attorney process.

Forms have matching `name` and `form-name`, POST handling, honeypots, native checkbox groups in fieldsets, labelled controls, validation, an accessible status message, success handling and retry without discarding entered information. Checkbox serialization preserves multiple selections. The generic Spain field renderer also now handles a `checkboxes` definition as actual checkbox inputs.

The new forms are registered in `submission-created.mjs`; field labels are intelligible in intake emails. Private Client intake emails explicitly avoid the old default 24-hour promise. The former German wizard and legacy valuables form registrations remain supported for older submissions and other existing pages.

## CRM decision

`lead-classification.mjs` assigns `product: private-client`, `language: EN` or `DE`, and market from the chosen country rather than the language or route alone.

- Portugal: primary market `PT`, metadata `countries: ["PT"]`.
- Spain: primary market `ES`, metadata `countries: ["ES"]`.
- Portugal and Spain: primary market `PT`, metadata `countries: ["PT", "ES"]`.

No new `PT+ES` market enum was introduced. `crm-sync.mjs` also records allowlisted contact role and authority, identifying an assistant as the enquiry contact rather than implying ownership. Requirements, valuations, property details and health selections are not added to the CRM contact payload. Existing Portuguese classification remains unchanged.

## Navigation, SEO and terminology

English hubs have a separate country switch with active country and reciprocal links directly between the two Private Client pages. Language navigation is separate. The German navigation and homepage Private Client entry point primarily to `/de/private-clients/`; the Portugal supporting URL remains reachable from it. German-only navigation styling keeps the new link readable and usable on small screens.

All five pages have self-referencing canonicals and valid JSON-LD. English country variants are not represented as hreflang translations, and the German master is not falsely declared an exact translation of either country page. Both new German routes are in `sitemap-pages.xml`. The scoped sitemap mode preserves every non-EN/DE URL entry and the sitemap index.

`terminology-rules.mjs` no longer deliberately restores broker/Makler self-description in EN/DE. Historical exact phrases now resolve to insurance intermediary / insurance agent / Versicherungsvermittler. Supporting enforcement passes prevent these English changes from affecting root/PT public output. Published URL slugs and fragment identifiers are retained, including `/en/why-use-an-insurance-broker/`. Generic discussion of other intermediaries, real-estate agents and third-party/legal definitions remains distinct from the firm's status.

## Claims intentionally kept conservative

Spain specialist assets, agreed values, worldwide possessions, restoration, wine spoilage, collector vehicles and marine are requirements to review and confirm, not asserted capacity. Portuguese insurer arrangements are not used as proof of Spanish availability. The site states Portugal headquarters, cross-border Freedom of Services/LPS and no physical Spanish office. No Spanish staff, local office, appointment or hyperlocal capacity was invented.

Claims support means helping prepare and communicate the claim and remaining involved; the insurer decides under the contract. No binding, quotation or placement deadline is promised. Selected-insurer service is described as a commercial choice, not a regulatory restriction on access.

## Validation

- `npm test`: **140 passed**, including 17 new Private Client source/form/CRM/scope tests. Its pretests also passed: all four function bundles and the clinical-data guard across 441 HTML files.
- `npm run test:quote-validators`: passed.
- `scripts/wizard-form-integrity-test.mjs`: passed for remaining transactional wizards.
- `scripts/wizard-required-fields-test.mjs`: passed, including degraded-script and restored-draft paths.
- `scripts/form-payload-test.mjs --en-de-only`: passed. The obsolete Spain Private Client case is replaced by the dedicated common-review tests and actual-browser serialization checks.
- Full legacy `scripts/form-payload-test.mjs`: reaches an **existing unrelated Polish mismatch**: the fixture expects `pl-zapytanie-ofertowe`, while HEAD already serves `pl-ubezpieczenie-domu-wizard`. Neither the Polish page nor that case was changed. This is not presented as a passing global check.
- `scripts/link-audit.mjs`: 441 HTML files, **zero broken links, redirects or orphans**. New-page tests also validate linked fragment identifiers.
- `scripts/listing-audit.mjs`: 292 listings, zero duplicate destinations or non-published entries.
- `scripts/check-rendered-text-integrity.mjs`: zero failures.
- `scripts/check-i18n-parity.mjs`: zero failures; nine existing translation-completeness warnings, outside this page-specific implementation.
- `scripts/check-generator-freshness.mjs`: zero failures. Six warnings concern shared chrome differences, the existing shared stylesheet and feed state, and the hreflang audit count after adding two pages. Broad regeneration was deliberately not used to rewrite PT output.
- `scripts/title-quality.mjs`: zero high-severity findings; six pagination-description warnings and 25 low-severity title/H1 flags outside the rebuilt hubs.
- `scripts/cannibalization-check.mjs`: no flagged pairs across 34 compared commercial pages.
- Both existing generators were run with `--private-clients-only`; generated output equals the dedicated renderer. The scoped refresh pass is idempotent.
- Canonicals, JSON-LD, form registration, 15 risk choices, country/role payloads, singular product classification, conservative wording, sitemap inclusion and root/PT scope are covered by the new regression tests.
- Local installed Chromium: **15 successful page/form checks** (five pages at 1440, 390 and 320px), including screenshots, no horizontal overflow, authority handling, multiple checkbox values, success and server-error retry. The 320px German long-word overflow found during QA was fixed.
- The connected Browser runtime reported no available browser. No `access_programs.cyber` was used. Local Chromium and the local HTTP server supplied the working fallback; submissions were intercepted locally, with no real email or CRM lead sent.
- `git diff --check`: passed.

Live Netlify form detection and live CRM delivery were not exercised: this implementation is committed locally and was not deployed or pushed.

## Portuguese/root scope verification

Before implementation, SHA-256 hashes were recorded for all 349 files outside `public/en/` and `public/de/`. The final comparison changes only the authorised shared `sitemap-pages.xml`; all Portuguese/root public pages, forms and shared public assets are byte-for-byte unchanged. All non-EN/DE sitemap entries are unchanged. Portuguese content records in both mixed JSON sources are unchanged. The existing PT Private Client form/classification is unchanged.

The pre-existing untracked `docs/private-client-audit-2026.md` is left untouched and excluded from the implementation commit.

## Complete changed-route and source inventory

The following inventory includes terminology-only and navigation-only changes, so no materially changed route is omitted. The five principal content/form routes are identified above; the wider library was not rewritten.

### All created or changed public routes

- `/de/anwartschaftsversicherung-portugal/`
- `/de/autoversicherung-portugal/`
- `/de/berufshaftpflicht-freiberufler-portugal/`
- `/de/berufshaftpflicht-therapeuten-wellness-portugal/`
- `/de/hausversicherung-portugal/`
- `/de/`
- `/de/isv-befreiung-fahrzeugimport-portugal/`
- `/de/krankenversicherung-portugal/`
- `/de/lebensversicherung-portugal/`
- `/de/nicht-legalisierte-immobilie-versichern-portugal/`
- `/de/private-clients-portugal/`
- `/de/private-clients/` — created
- `/de/s1-formular-rentner-portugal/`
- `/de/umzug-deutschland-portugal-versicherung/`
- `/de/versicherung-algarve/`
- `/de/versicherung-carvoeiro/`
- `/de/versicherung-cascais/`
- `/de/versicherung-comporta/`
- `/de/versicherung-lagos/`
- `/de/versicherung-lissabon/`
- `/de/versicherung-portimao/`
- `/de/versicherung-quinta-do-lago/`
- `/de/versicherung-tavira/` — created
- `/de/versicherung-vilamoura/`
- `/de/vorerkrankungen-krankenversicherung-portugal/`
- `/en/about/`
- `/en/apartment-insurance-portugal/`
- `/en/blog/20-years-tourism-hospitality-insurance/`
- `/en/blog/adler-pro-saas-platform/`
- `/en/blog/algarve-home-earns-income-personal-use-vs-al-cover/`
- `/en/blog/allianz-april-medis-health-insurance-portugal-2026/`
- `/en/blog/allianz-health-insurance-portugal/`
- `/en/blog/allianz-home-insurance-portugal/`
- `/en/blog/alojamento-local-insurance-requirements/`
- `/en/blog/april-international-health-insurance-portugal/`
- `/en/blog/art-collection-household-policy-portugal/`
- `/en/blog/bars-restaurants-insurance-claims/`
- `/en/blog/best-home-insurance-portugal-2026/`
- `/en/blog/boat-insurance-portugal/`
- `/en/blog/british-expats-brexit-insurance-portugal/`
- `/en/blog/building-home-portugal-promoter-insurance-seguro-decenal/`
- `/en/blog/business-insurance-policy-review/`
- `/en/blog/canadian-driving-record-car-insurance-portugal/`
- `/en/blog/canadian-non-resident-property-insurance-portugal/`
- `/en/blog/canadian-provincial-health-coverage-portugal/`
- `/en/blog/car-insurance-complete-guide/`
- `/en/blog/car-insurance-cost-portugal/`
- `/en/blog/car-insurance-expatriates/`
- `/en/blog/car-insurance-spain-expats/`
- `/en/blog/category/business-liability/`
- `/en/blog/category/business-liability/page/2/`
- `/en/blog/category/health-insurance/`
- `/en/blog/category/health-insurance/page/2/`
- `/en/blog/category/health-insurance/page/3/`
- `/en/blog/category/holiday-lets-hospitality/`
- `/en/blog/category/home-property/`
- `/en/blog/category/home-property/page/2/`
- `/en/blog/category/home-property/page/3/`
- `/en/blog/category/home-property/page/4/`
- `/en/blog/category/marine/`
- `/en/blog/category/motor/`
- `/en/blog/category/motor/page/2/`
- `/en/blog/category/moving-to-portugal/`
- `/en/blog/category/personal-family/`
- `/en/blog/category/spain-car/`
- `/en/blog/category/spain-health/`
- `/en/blog/category/spain-life/`
- `/en/blog/category/spain-private-clients/`
- `/en/blog/category/spain-property/`
- `/en/blog/category/valuables-collections/`
- `/en/blog/category/valuables-collections/page/2/`
- `/en/blog/change-bank-home-insurance-portugal/`
- `/en/blog/classic-collector-cars-portugal-matriculation-agreed-value/`
- `/en/blog/coastal-clifftop-properties-algarve-subsidence-erosion-flood/`
- `/en/blog/community-insurance-apartment-owners-spain/`
- `/en/blog/condominium-insurance-doesnt-cover-contents/`
- `/en/blog/construction-works-insurance/`
- `/en/blog/cyber-insurance-businesses-portugal/`
- `/en/blog/d7-visa-health-insurance-valid-proof/`
- `/en/blog/declined-health-cover-portugal/`
- `/en/blog/destination-wedding-cancellation-insurance-algarve/`
- `/en/blog/directors-and-officers-insurance-d-o/`
- `/en/blog/disputing-sum-insured-portugal/`
- `/en/blog/distribution-companies-insurance/`
- `/en/blog/divorce-separation-jointly-held-cover-unravels/`
- `/en/blog/do-exposure-non-executive-directors-abroad/`
- `/en/blog/documents-to-insure-property-portugal/`
- `/en/blog/domestic-staff-insurance-portugal/`
- `/en/blog/earthquake-cover-algarve-buildings/`
- `/en/blog/employing-nanny-driver-gardener-home-employer-obligation/`
- `/en/blog/family-insurance-spain/`
- `/en/blog/family-liability-cover-portugal/`
- `/en/blog/family-moving-to-portugal-insurance/`
- `/en/blog/fiduciary-family-office-liability-portugal/`
- `/en/blog/fiscal-representation-portugal-explained/`
- `/en/blog/fiscal-representation-property-owners-portugal/`
- `/en/blog/fleet-insurance-common-mistakes/`
- `/en/blog/foreign-driving-licence-car-insurance-spain/`
- `/en/blog/foreign-registered-car-insurance-spain/`
- `/en/blog/getting-insurance-portugal-before-nif-residency/`
- `/en/blog/golf-resort-properties-insurance-portugal/`
- `/en/blog/health-cover-70-75-portugal/`
- `/en/blog/health-insurance-cost-portugal-2026/`
- `/en/blog/health-insurance-expats-portugal/`
- `/en/blog/health-insurance-moving-to-spain/`
- `/en/blog/health-insurance-portugal-americans/`
- `/en/blog/health-insurance-portugal-residency-visa/`
- `/en/blog/health-insurance-portugal-usa/`
- `/en/blog/health-insurance-portugal/`
- `/en/blog/health-insurance-requirements-portuguese-residence-visas/`
- `/en/blog/health-insurance-waiting-periods-portugal/`
- `/en/blog/high-value-bicycles-e-bikes-cover-away-from-home/`
- `/en/blog/high-value-home-insurance-spain/`
- `/en/blog/hiscox-home-insurance-portugal/`
- `/en/blog/holiday-home-insurance-portugal/`
- `/en/blog/home-insurance-comporta-melides/`
- `/en/blog/home-insurance-cost-algarve-price-drivers/`
- `/en/blog/home-insurance-lagoa-carvoeiro/`
- `/en/blog/home-insurance-lagos/`
- `/en/blog/home-insurance-legalization/`
- `/en/blog/home-insurance-loule-almancil/`
- `/en/blog/home-insurance-multi-risk/`
- `/en/blog/home-insurance-protect-property/`
- `/en/blog/home-insurance-quinta-do-lago-vale-do-lobo/`
- `/en/blog/home-insurance-sagres-vila-do-bispo/`
- `/en/blog/home-insurance-sintra-cascais-villas/`
- `/en/blog/home-insurance-tavira/`
- `/en/blog/home-insurance-troia-setubal/`
- `/en/blog/home-staff-quarters-guest-annexes-outbuildings/`
- `/en/blog/how-specialist-risks-are-placed-portugal/`
- `/en/blog/how-to-get-nif-portugal-non-resident/`
- `/en/blog/importing-a-car-to-portugal/`
- `/en/blog/importing-car-to-spain-insurance/`
- `/en/blog/importing-registering-a-boat-portugal/`
- `/en/blog/`
- `/en/blog/individual-car-insurance/`
- `/en/blog/insurance-before-residency-d7-d8-golden-visa/`
- `/en/blog/insurance-buying-property-portugal/`
- `/en/blog/insurance-buying-property-spain/`
- `/en/blog/insurance-claim-portugal-no-portuguese/`
- `/en/blog/insurance-domestic-staff-portugal/`
- `/en/blog/insurance-guide-americans-moving-to-portugal/`
- `/en/blog/insurance-portugal-spain-international-residents/`
- `/en/blog/insurance-private-staff-travel-household/`
- `/en/blog/insurance-review-expats-spain/`
- `/en/blog/insuring-a-high-value-apartment-lisbon-cascais/`
- `/en/blog/insuring-antiques-collections-portugal/`
- `/en/blog/insuring-appreciating-asset-agreed-value-market-value-cars-wine-art/`
- `/en/blog/insuring-art-portugal/`
- `/en/blog/insuring-car-collection-multiple-vehicles-portugal/`
- `/en/blog/insuring-jewellery-watches-portugal/`
- `/en/blog/insuring-musical-instruments-portugal/`
- `/en/blog/insuring-property-portfolio-two-jurisdictions/`
- `/en/blog/insuring-valuables-portugal/`
- `/en/blog/international-health-cover-children-school-abroad/`
- `/en/blog/irish-no-claims-bonus-car-insurance-portugal/`
- `/en/blog/irish-owners-algarve-holiday-home-insurance/`
- `/en/blog/key-person-insurance-businesses-abroad/`
- `/en/blog/lay-up-lifting-winter-boat-cover-portugal/`
- `/en/blog/lei-71-2013-therapies-liability-portugal/`
- `/en/blog/liability-insurance-complementary-therapies/`
- `/en/blog/liberty-mutual-home-insurance-portugal/`
- `/en/blog/life-insurance-spain-expats/`
- `/en/blog/long-term-care-planning-foreign-residents-portugal/`
- `/en/blog/luxury-car-insurance-portugal/`
- `/en/blog/luxury-home-insurance-portugal/`
- `/en/blog/making-a-claim-portugal-us-perspective/`
- `/en/blog/mandatory-insurance-companies-portugal/`
- `/en/blog/mandatory-insurance-hospitality-tourism/`
- `/en/blog/massage-spa-therapist-liability-insurance-portugal/`
- `/en/blog/medical-evacuation-repatriation-cover-portugal/`
- `/en/blog/medical-evacuation-repatriation-cover-residents-travel-constantly/`
- `/en/blog/medis-health-insurance-portugal/`
- `/en/blog/mgen-health-insurance-portugal/`
- `/en/blog/mgen-medis-allianz-april-acceptance-comparison/`
- `/en/blog/mortgage-life-insurance-foreign-buyers-portugal/`
- `/en/blog/mortgage-life-insurance-spain/`
- `/en/blog/mortgage-sum-insured-vs-rebuild-cost-portugal/`
- `/en/blog/moving-to-portugal-pre-existing-condition-health-cover/`
- `/en/blog/nif-fiscal-representation-d7-visa-health-insurance/`
- `/en/blog/no-claims-history-car-insurance-spain/`
- `/en/blog/non-resident-property-insurance-spain/`
- `/en/blog/outdated-insured-values/`
- `/en/blog/page/10/`
- `/en/blog/page/11/`
- `/en/blog/page/12/`
- `/en/blog/page/13/`
- `/en/blog/page/14/`
- `/en/blog/page/15/`
- `/en/blog/page/2/`
- `/en/blog/page/3/`
- `/en/blog/page/4/`
- `/en/blog/page/5/`
- `/en/blog/page/6/`
- `/en/blog/page/7/`
- `/en/blog/page/8/`
- `/en/blog/page/9/`
- `/en/blog/personal-fraud-and-extortion-cover-portugal/`
- `/en/blog/personal-legal-expenses-cover-portugal/`
- `/en/blog/pilates-tai-chi-instructor-liability-insurance-portugal/`
- `/en/blog/portuguese-vs-international-health-insurance/`
- `/en/blog/pre-existing-conditions-health-insurance-portugal/`
- `/en/blog/private-health-insurance-pre-existing-condition-portugal/`
- `/en/blog/private-health-insurance-spain-expats/`
- `/en/blog/private-use-vs-charter-boat-cover-portugal/`
- `/en/blog/prize-indemnity-hole-in-one-insurance-algarve/`
- `/en/blog/professional-indemnity-insurance/`
- `/en/blog/professional-indemnity-requirements-portugal/`
- `/en/blog/property-held-company-structure-insurance/`
- `/en/blog/property-title-risk-portugal/`
- `/en/blog/psychologists-nutritionists-liability-portugal/`
- `/en/blog/ransomware-portugal-cyber-risks/`
- `/en/blog/real-estate-partnerships-commissions/`
- `/en/blog/relocating-with-chronic-condition-portugal/`
- `/en/blog/renovating-listed-heritage-property-portugal/`
- `/en/blog/renting-out-property-in-spain/`
- `/en/blog/retiring-algarve-health-cover-65-plus/`
- `/en/blog/retreat-organisers-liability-portugal/`
- `/en/blog/safes-alarms-underwriting-requirements-portugal/`
- `/en/blog/second-home-insurance-spain/`
- `/en/blog/second-home-rent-out-holiday-let-standard-home-cover/`
- `/en/blog/second-homes-empty-months-unoccupancy-clause-voids-cover/`
- `/en/blog/setting-rebuild-value-portugal/`
- `/en/blog/setting-up-company-portugal-foreigners/`
- `/en/blog/shipping-a-collection-to-portugal/`
- `/en/blog/sns-vs-private-insurance-expats-portugal/`
- `/en/blog/solar-panels-home-batteries-ev-chargers-policy-modern/`
- `/en/blog/spain-health-insurance-visa-residency/`
- `/en/blog/swimming-pools-jetties-private-access-liability-nobody-insures/`
- `/en/blog/total-loss-settlement-portugal/`
- `/en/blog/track-days-performance-driving-motor-policy-exclusion/`
- `/en/blog/travel-insurance-expats-portugal/`
- `/en/blog/tvde-insurance-portugal/`
- `/en/blog/us-buyers-property-cover-portugal/`
- `/en/blog/us-driving-record-car-insurance-portugal/`
- `/en/blog/us-umbrella-vs-portuguese-liability-insurance/`
- `/en/blog/valuations-portugal-who-what-how-often/`
- `/en/blog/vhi-laya-irish-life-portugal-health-insurance/`
- `/en/blog/waiver-of-average-portugal/`
- `/en/blog/watches-jewellery-travelling-worldwide-all-risks/`
- `/en/blog/water-damage-claim-portugal/`
- `/en/blog/wine-cellars-home-storage-valuation-cover/`
- `/en/blog/worldwide-cover-personal-possessions-portugal/`
- `/en/blog/yacht-insurance-algarve-marinas/`
- `/en/blog/yoga-instructor-liability-insurance-portugal/`
- `/en/blog/zurich-home-insurance-portugal/`
- `/en/car-insurance-portugal/`
- `/en/car-insurance-spain/`
- `/en/claims-support/`
- `/en/condominium-insurance-algarve/`
- `/en/earthquake-insurance-portugal/`
- `/en/expat-insurance-lagos-portugal/`
- `/en/expat-insurance-portugal/`
- `/en/expat-insurance-spain/`
- `/en/expat-visa-insurance-portugal/`
- `/en/fiscal-representation-portugal/`
- `/en/flood-insurance-portugal/`
- `/en/health-insurance-quote/`
- `/en/health-insurance-spain/`
- `/en/home-insurance-quote/`
- `/en/home-insurance-spain/`
- `/en/how-we-work/`
- `/en/`
- `/en/insurance-for-americans-in-portugal/`
- `/en/insurance-for-canadians-portugal/`
- `/en/insurance-for-irish-residents-portugal/`
- `/en/insurance-review/`
- `/en/insurance/tvde/`
- `/en/international-health-insurance-portugal/`
- `/en/landlord-insurance-portugal/`
- `/en/landlord-insurance-spain/`
- `/en/landlord-liability-insurance-portugal/`
- `/en/life-insurance-spain/`
- `/en/mortgage-protection-spain/`
- `/en/non-resident-landlord-insurance-portugal/`
- `/en/privacy-policy/`
- `/en/private-clients-spain/`
- `/en/private-clients/`
- `/en/professional-liability-insurance-portugal/`
- `/en/relocation-services/`
- `/en/rental-property-insurance-portugal/`
- `/en/second-home-insurance-portugal/`
- `/en/terms-and-conditions/`
- `/en/thank-you/`
- `/en/unoccupied-home-insurance-portugal/`
- `/en/why-use-an-insurance-broker/`

### All changed or created source, generator, test and configuration files

- `data/articles.extracted.json`
- `data/articles.json`
- `netlify/functions/lib/crm-sync.mjs`
- `netlify/functions/lib/lead-classification.mjs`
- `netlify/functions/submission-created.mjs`
- `package.json`
- `scripts/block0-compliance.mjs`
- `scripts/build-car-cluster.mjs`
- `scripts/build-expat-hub.mjs`
- `scripts/build-insurance-review.mjs`
- `scripts/build-location-articles.mjs`
- `scripts/build-private-clients.mjs`
- `scripts/build-property-cluster.mjs`
- `scripts/build-spain-articles.mjs`
- `scripts/build-spain-cluster.mjs`
- `scripts/canadian-hub.data.mjs`
- `scripts/car-cluster.data.mjs`
- `scripts/de-content/anwartschaft.mjs`
- `scripts/de-content/health.mjs`
- `scripts/de-content/home.mjs`
- `scripts/de-content/hub.mjs`
- `scripts/de-content/life.mjs`
- `scripts/de-content/local.mjs`
- `scripts/de-content/motor.mjs`
- `scripts/de-content/moving.mjs`
- `scripts/de-content/phase2.mjs`
- `scripts/de-content/private-clients.mjs`
- `scripts/de-content/therapeuten-wellness.mjs`
- `scripts/expat-hub.data.mjs`
- `scripts/form-payload-test.mjs`
- `scripts/generate-blog.mjs`
- `scripts/generate-de-cluster.mjs`
- `scripts/generate-sitemap.mjs`
- `scripts/irish-hub.data.mjs`
- `scripts/lib/spain-chrome.mjs`
- `scripts/lib/terminology-rules.mjs`
- `scripts/location-articles.data.mjs`
- `scripts/phase2-terminology.mjs`
- `scripts/private-client.test.mjs`
- `scripts/private-client/browser-check.mjs`
- `scripts/private-client/content.mjs`
- `scripts/private-client/navigation.mjs`
- `scripts/private-client/normalise.mjs`
- `scripts/private-client/portugal-guides.mjs`
- `scripts/private-client/render.mjs`
- `scripts/property-cluster.data.mjs`
- `scripts/refresh-en-de-private-client-links.mjs`
- `scripts/spain-articles.data.mjs`
- `scripts/spain-cluster.data.mjs`
- `scripts/terminology.mjs`
- `scripts/us-hub.data.mjs`
- `scripts/wizard-form-integrity-test.mjs`
- `scripts/wizard-required-fields-test.mjs`

Shared public metadata changed: `public/sitemap-pages.xml` (EN/DE entries only).

Inventory: 286 created/changed EN/DE routes; 53 source/generator/test/configuration files. Final commit identity is supplied with the delivery response.
