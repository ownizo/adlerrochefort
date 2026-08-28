/**
 * Query ownership map — the source of truth for "which page owns this
 * search intent."
 *
 * Built by hand from the actually-published slugs, titles and H1s in
 * `public/en/`, not guessed. Two things read this file:
 *
 *   - scripts/cannibalization-check.mjs, to know which page SHOULD be the
 *     strongest match for a given commercial topic, so it can flag a
 *     second page competing for the same one;
 *   - any future builder adding an internal link, so "where does the Spain
 *     home-insurance topic point?" has one answer instead of being
 *     re-decided page by page.
 *
 * Scope, deliberately: this maps PRIMARY COMMERCIAL intent — the pages a
 * paid or organic visitor searching a product/market query should land on
 * — not every informational article. Portugal alone has ~190 published
 * articles; giving each one an entry here would make the file expensive to
 * keep in sync for no real benefit, since articles already declare their
 * own commercial destination inline (a "Need help with this?" link or CTA)
 * rather than through a central map. `relatedInformational` below is a
 * light pointer to the informational pages that most directly support a
 * commercial page, not an exhaustive list.
 *
 * `pageType` values match the taxonomy in scripts/lib/page-type.mjs.
 * `relatedInformational` entries are bare slugs, all under `/en/blog/{slug}/`
 * unless the entry itself says otherwise.
 */

export const QUERY_OWNERSHIP = {
  portugal: [
    {
      topic: 'expat_general',
      primaryQuery: 'insurance for expats portugal',
      destination: '/en/expat-insurance-portugal/',
      pageType: 'market_hub',
      relatedInformational: ['expat-insurance-lagos-portugal', 'expat-visa-insurance-portugal'],
    },
    {
      topic: 'car',
      primaryQuery: 'car insurance portugal',
      destination: '/en/car-insurance-portugal/',
      pageType: 'commercial_product',
    },
    {
      topic: 'home',
      primaryQuery: 'home insurance portugal',
      destination: '/en/home-insurance-quote/',
      pageType: 'commercial_product',
      relatedInformational: ['second-home-insurance-portugal', 'unoccupied-home-insurance-portugal', 'apartment-insurance-portugal', 'flood-insurance-portugal', 'earthquake-insurance-portugal'],
    },
    {
      topic: 'health',
      primaryQuery: 'health insurance portugal',
      destination: '/en/health-insurance-quote/',
      pageType: 'commercial_product',
      relatedInformational: ['international-health-insurance-portugal'],
    },
    {
      topic: 'landlord',
      primaryQuery: 'landlord insurance portugal',
      destination: '/en/landlord-insurance-portugal/',
      pageType: 'commercial_product',
      // Deliberately NOT flattened into one page — see the cannibalization
      // report for why these four are a differentiated cluster, not
      // duplicates: general landlord cover, non-resident-specific,
      // long-term-let-specific, and liability-only each answer a distinct
      // question a landlord searches separately.
      relatedInformational: ['non-resident-landlord-insurance-portugal', 'rental-property-insurance-portugal', 'landlord-liability-insurance-portugal'],
    },
    {
      topic: 'condominium',
      primaryQuery: 'condominium insurance algarve',
      destination: '/en/condominium-insurance-algarve/',
      pageType: 'commercial_product',
    },
    {
      topic: 'private_clients',
      primaryQuery: 'high value home and valuables insurance portugal',
      destination: '/en/private-clients/',
      pageType: 'commercial_product',
    },
    {
      topic: 'tvde',
      primaryQuery: 'tvde insurance portugal',
      destination: '/en/insurance/tvde/',
      pageType: 'commercial_product',
    },
    {
      topic: 'fiscal_representation',
      primaryQuery: 'fiscal representation portugal',
      destination: '/en/fiscal-representation-portugal/',
      pageType: 'commercial_product',
    },
    {
      topic: 'relocation',
      primaryQuery: 'moving to portugal nif bank account',
      destination: '/en/relocation-services/',
      pageType: 'commercial_product',
      // Genuinely different from Spain: relocation support is part of the
      // Portugal business and is NOT offered for Spain — see the Spain
      // system prompt and the Phase 7 asymmetric-journey work. Do not add
      // a Spain equivalent to this entry without that becoming true first.
    },
    {
      topic: 'buying_property',
      primaryQuery: 'insurance buying a property in portugal',
      destination: '/en/blog/insurance-buying-property-portugal/',
      pageType: 'situation_guide',
    },
    {
      topic: 'family_moving',
      primaryQuery: 'moving to portugal with family insurance',
      destination: '/en/blog/family-moving-to-portugal-insurance/',
      pageType: 'situation_guide',
    },
    {
      topic: 'retiring',
      primaryQuery: 'retiring to portugal health cover',
      destination: '/en/blog/retiring-algarve-health-cover-65-plus/',
      pageType: 'situation_guide',
    },
  ],

  spain: [
    {
      topic: 'expat_general',
      primaryQuery: 'insurance for expats spain',
      destination: '/en/expat-insurance-spain/',
      pageType: 'market_hub',
    },
    {
      topic: 'home',
      primaryQuery: 'home insurance spain',
      destination: '/en/home-insurance-spain/',
      pageType: 'commercial_product',
      relatedInformational: ['second-home-insurance-spain', 'non-resident-property-insurance-spain', 'renting-out-property-in-spain'],
    },
    {
      topic: 'landlord',
      primaryQuery: 'landlord insurance spain',
      destination: '/en/landlord-insurance-spain/',
      pageType: 'commercial_product',
    },
    {
      topic: 'health',
      primaryQuery: 'health insurance spain',
      destination: '/en/health-insurance-spain/',
      pageType: 'commercial_product',
    },
    {
      topic: 'car',
      primaryQuery: 'car insurance spain',
      destination: '/en/car-insurance-spain/',
      pageType: 'commercial_product',
    },
    {
      topic: 'life',
      primaryQuery: 'life insurance spain',
      destination: '/en/life-insurance-spain/',
      pageType: 'commercial_product',
    },
    {
      topic: 'mortgage_protection',
      primaryQuery: 'mortgage protection insurance spain',
      destination: '/en/mortgage-protection-spain/',
      pageType: 'commercial_product',
    },
    {
      topic: 'private_clients',
      primaryQuery: 'private client insurance spain',
      destination: '/en/private-clients-spain/',
      pageType: 'commercial_product',
      relatedInformational: ['family-insurance-spain'],
    },
    {
      topic: 'buying_property',
      primaryQuery: 'insurance buying a property in spain',
      destination: '/en/blog/insurance-buying-property-spain/',
      pageType: 'situation_guide',
    },
  ],

  // Market-agnostic: conversion utilities and trust pages own no product
  // query on their own — they support commercial pages rather than compete
  // with them (brief §53's own instruction). Listed here only so the
  // cannibalization checker knows to exempt them from "same topic as a
  // commercial page" flags — a "Why Use a Broker" page mentioning car
  // insurance is not cannibalising the car insurance pillar.
  shared: [
    { topic: 'multi_product_review', destination: '/en/insurance-review/', pageType: 'conversion_utility' },
    { topic: 'about', destination: '/en/about/', pageType: 'trust_page' },
    { topic: 'how_we_work', destination: '/en/how-we-work/', pageType: 'trust_page' },
    { topic: 'why_use_a_broker', destination: '/en/why-use-an-insurance-broker/', pageType: 'trust_page' },
    { topic: 'claims_support', destination: '/en/claims-support/', pageType: 'trust_page' },
    // Comparison/routing role only — brief §34: must not become a
    // commercial pillar for either market's product queries.
    { topic: 'portugal_spain_comparison', destination: '/en/blog/insurance-portugal-spain-international-residents/', pageType: 'informational_article' },
  ],
};

/** Flat list of every {market, ...entry} row, for scripts that just want to iterate. */
export function allOwnershipRows() {
  const rows = [];
  for (const market of ['portugal', 'spain']) {
    for (const entry of QUERY_OWNERSHIP[market]) rows.push({ market, ...entry });
  }
  for (const entry of QUERY_OWNERSHIP.shared) rows.push({ market: 'shared', ...entry });
  return rows;
}
