#!/usr/bin/env node
/**
 * Builds the proposed EN taxonomy from the English articles that actually
 * exist. Nothing is generated from this file — it is the sign-off artefact
 * required before `/en/blog/category/{slug}/` pages are created, and it exists
 * so the counts can be verified rather than taken on trust.
 *
 * The taxonomy is derived from the EN corpus itself. It deliberately does not
 * mirror the Portuguese one: the English audience is relocation- and
 * property-driven, and categories such as Marine or Valuables & Collections
 * have no Portuguese counterpart, while TVDE has almost no English coverage.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ROOT } from './lib/chrome.mjs';

const data = JSON.parse(await readFile(join(ROOT, 'data', 'articles.json'), 'utf8'));
const en = data.articles.en.filter((a) => a.status === 'published');

/** slug -> { title, rationale, match(article) } */
const PROPOSED = [
  {
    slug: 'health-insurance',
    title: 'Health Insurance',
    rationale:
      'Largest single English cluster. Residency and visa proof, pre-existing conditions, SNS vs private, repatriation, long-term care.',
    slugs: [
      'allianz-april-medis-health-insurance-portugal-2026',
      'allianz-health-insurance-portugal',
      'april-international-health-insurance-portugal',
      'd7-visa-health-insurance-valid-proof',
      'health-insurance-cost-portugal-2026',
      'health-insurance-expats-portugal',
      'health-insurance-portugal',
      'health-insurance-portugal-americans',
      'health-insurance-portugal-residency-visa',
      'health-insurance-portugal-usa',
      'international-health-cover-children-school-abroad',
      'long-term-care-planning-foreign-residents-portugal',
      'medical-evacuation-repatriation-cover-portugal',
      'medical-evacuation-repatriation-cover-residents-travel-constantly',
      'medis-health-insurance-portugal',
      'moving-to-portugal-pre-existing-condition-health-cover',
      'pre-existing-conditions-health-insurance-portugal',
      'private-health-insurance-pre-existing-condition-portugal',
      'retiring-algarve-health-cover-65-plus',
      'sns-vs-private-insurance-expats-portugal',
      'travel-insurance-expats-portugal',
    ],
  },
  {
    slug: 'home-property',
    title: 'Home & Property',
    rationale:
      'Second largest cluster and the commercial core of the English site. Includes the Algarve town pages and the insurer comparisons, which are all home-insurance led.',
    slugs: [
      'allianz-home-insurance-portugal',
      'best-home-insurance-portugal-2026',
      'building-home-portugal-promoter-insurance-seguro-decenal',
      'change-bank-home-insurance-portugal',
      'coastal-clifftop-properties-algarve-subsidence-erosion-flood',
      'condominium-insurance-doesnt-cover-contents',
      'documents-to-insure-property-portugal',
      'earthquake-cover-algarve-buildings',
      'golf-resort-properties-insurance-portugal',
      'hiscox-home-insurance-portugal',
      'holiday-home-insurance-portugal',
      'home-insurance-cost-algarve-price-drivers',
      'home-insurance-lagoa-carvoeiro',
      'home-insurance-lagos',
      'home-insurance-legalization',
      'home-insurance-loule-almancil',
      'home-insurance-multi-risk',
      'home-insurance-protect-property',
      'home-insurance-tavira',
      'home-staff-quarters-guest-annexes-outbuildings',
      'insuring-a-high-value-apartment-lisbon-cascais',
      'insuring-property-portfolio-two-jurisdictions',
      'liberty-mutual-home-insurance-portugal',
      'luxury-home-insurance-portugal',
      'mortgage-life-insurance-foreign-buyers-portugal',
      'property-held-company-structure-insurance',
      'property-title-risk-portugal',
      'renovating-listed-heritage-property-portugal',
      'safes-alarms-underwriting-requirements-portugal',
      'second-homes-empty-months-unoccupancy-clause-voids-cover',
      'solar-panels-ev-chargers-home-insurance-portugal',
      'solar-panels-home-batteries-ev-chargers-policy-modern',
      'swimming-pools-jetties-private-access-liability-nobody-insures',
      'unoccupied-property-clause-portugal',
      'us-buyers-property-cover-portugal',
      'wine-cellars-home-storage-valuation-cover',
      'zurich-home-insurance-portugal',
    ],
  },
  {
    slug: 'valuables-collections',
    title: 'Valuables & Collections',
    rationale:
      'A genuinely English-only cluster with no Portuguese equivalent: agreed-value cover, valuations, worldwide all-risks, transit.',
    slugs: [
      'art-collection-household-policy-portugal',
      'high-value-bicycles-e-bikes-cover-away-from-home',
      'insuring-antiques-collections-portugal',
      'insuring-appreciating-asset-agreed-value-market-value-cars-wine-art',
      'insuring-art-portugal',
      'insuring-jewellery-watches-portugal',
      'insuring-musical-instruments-portugal',
      'insuring-valuables-portugal',
      'outdated-insured-values',
      'shipping-a-collection-to-portugal',
      'valuations-portugal-who-what-how-often',
      'watches-jewellery-travelling-worldwide-all-risks',
      'worldwide-cover-personal-possessions-portugal',
    ],
  },
  {
    slug: 'business-liability',
    title: 'Business & Liability',
    rationale:
      'Company-side cover written for foreign owners of Portuguese companies: D&O, professional indemnity, cyber, construction, company setup.',
    slugs: [
      'adler-pro-saas-platform',
      'business-insurance-policy-review',
      'construction-works-insurance',
      'cyber-insurance-businesses-portugal',
      'directors-and-officers-insurance-d-o',
      'distribution-companies-insurance',
      'do-exposure-non-executive-directors-abroad',
      'fiduciary-family-office-liability-portugal',
      'how-specialist-risks-are-placed-portugal',
      'key-person-insurance-businesses-abroad',
      'liability-insurance-complementary-therapies',
      'mandatory-insurance-companies-portugal',
      'professional-indemnity-insurance',
      'ransomware-portugal-cyber-risks',
      'real-estate-partnerships-commissions',
      'setting-up-company-portugal-foreigners',
    ],
  },
  {
    slug: 'motor',
    title: 'Motor',
    rationale:
      'Car cover including the collector and performance angles the English audience asks about. Small but coherent; the single TVDE article sits here rather than justifying its own category.',
    slugs: [
      'car-insurance-complete-guide',
      'car-insurance-cost-portugal',
      'car-insurance-expatriates',
      'classic-collector-cars-portugal-matriculation-agreed-value',
      'fleet-insurance-common-mistakes',
      'individual-car-insurance',
      'insuring-car-collection-multiple-vehicles-portugal',
      'luxury-car-insurance-portugal',
      'track-days-performance-driving-motor-policy-exclusion',
      'tvde-insurance-portugal',
    ],
  },
  {
    slug: 'personal-family',
    title: 'Personal & Family',
    rationale:
      'Household liability, domestic staff obligations, legal expenses, fraud and claims handling. Distinct from Home & Property because the subject is the people, not the building.',
    slugs: [
      'divorce-separation-jointly-held-cover-unravels',
      'domestic-staff-insurance-portugal',
      'employing-nanny-driver-gardener-home-employer-obligation',
      'family-liability-cover-portugal',
      'insurance-domestic-staff-portugal',
      'insurance-private-staff-travel-household',
      'personal-fraud-and-extortion-cover-portugal',
      'personal-legal-expenses-cover-portugal',
      'water-damage-claim-portugal',
    ],
  },
  {
    slug: 'holiday-lets-hospitality',
    title: 'Holiday Lets & Hospitality',
    rationale:
      'Alojamento Local and hospitality seen from the owner side, plus the event covers sold into the same Algarve market.',
    slugs: [
      '20-years-tourism-hospitality-insurance',
      'algarve-home-earns-income-personal-use-vs-al-cover',
      'alojamento-local-insurance-requirements',
      'bars-restaurants-insurance-claims',
      'destination-wedding-cancellation-insurance-algarve',
      'mandatory-insurance-hospitality-tourism',
      'prize-indemnity-hole-in-one-insurance-algarve',
      'second-home-rent-out-holiday-let-standard-home-cover',
    ],
  },
  {
    slug: 'moving-to-portugal',
    title: 'Moving to Portugal',
    rationale:
      'Relocation mechanics rather than a product line: NIF, fiscal representation, Brexit status, claiming in a language you do not speak.',
    slugs: [
      'british-expats-brexit-insurance-portugal',
      'fiscal-representation-portugal-explained',
      'getting-insurance-portugal-before-nif-residency',
      'how-to-get-nif-portugal-non-resident',
      'insurance-claim-portugal-no-portuguese',
      'insurance-guide-americans-moving-to-portugal',
    ],
  },
  {
    slug: 'marine',
    title: 'Marine',
    rationale:
      'Smallest proposed category but fully self-contained and commercially distinct. Drop it and these five articles have nowhere sensible to sit.',
    slugs: [
      'boat-insurance-portugal',
      'importing-registering-a-boat-portugal',
      'lay-up-lifting-winter-boat-cover-portugal',
      'private-use-vs-charter-boat-cover-portugal',
      'yacht-insurance-algarve-marinas',
    ],
  },
];

// --- verification ------------------------------------------------------------
const bySlug = new Map(en.map((a) => [a.slug, a]));
const assigned = new Map();
const problems = [];

for (const cat of PROPOSED) {
  for (const s of cat.slugs) {
    if (!bySlug.has(s)) problems.push(`unknown slug in ${cat.slug}: ${s}`);
    if (assigned.has(s)) problems.push(`${s} assigned to both ${assigned.get(s)} and ${cat.slug}`);
    assigned.set(s, cat.slug);
  }
}
const unassigned = en.filter((a) => !assigned.has(a.slug)).map((a) => a.slug);
if (unassigned.length) problems.push(`unassigned: ${unassigned.join(', ')}`);

const proposal = {
  status: 'awaiting-confirmation',
  note:
    'Derived from the English articles that exist today. No category is empty and no Portuguese category is mirrored. Pages are not generated until this list is signed off.',
  totalEnglishArticles: en.length,
  categories: PROPOSED.map((c) => ({
    slug: c.slug,
    proposedUrl: `/en/blog/category/${c.slug}/`,
    title: c.title,
    count: c.slugs.length,
    rationale: c.rationale,
    articles: c.slugs,
  })),
  problems,
};

await writeFile(
  join(ROOT, 'data', 'en-categories-proposal.json'),
  JSON.stringify(proposal, null, 2) + '\n'
);

for (const c of proposal.categories) console.log(String(c.count).padStart(3) + '  ' + c.title);
console.log(`     total assigned: ${assigned.size} / ${en.length}`);
console.log(problems.length ? 'PROBLEMS:\n' + problems.join('\n') : 'no problems');
