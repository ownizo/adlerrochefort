/**
 * The page-type taxonomy referenced across this phase's SEO/conversion
 * tooling (query-ownership.mjs, cannibalization-check.mjs) and, in the
 * markup, exposed as `data-page-type` on the pages listed in
 * data/page-metadata.mjs.
 *
 * Kept deliberately small and stable: analytics and the checker scripts
 * both key off these exact strings, so adding a new one is a two-line
 * change here plus wherever a page needs it, not a rename anywhere already
 * shipped.
 */
export const PAGE_TYPES = /** @type {const} */ ([
  'homepage',
  'market_hub',
  'commercial_product',
  'situation_guide',
  'informational_article',
  'trust_page',
  'conversion_utility',
]);

export function isValidPageType(value) {
  return PAGE_TYPES.includes(value);
}
