/**
 * Content definitions for the Dutch cluster.
 *
 * The pages themselves are rendered by scripts/generate-nl-cluster.mjs. This
 * module aggregates the editorial content and the per-page metadata, split by
 * theme across ./nl-content/*.mjs so each file stays readable.
 *
 * The language-policy wording and the breadcrumb root live in
 * ./nl-content/shared.mjs and are re-exported here — centralised so the policy
 * block is provably identical on every page rather than eleven copies that
 * drift apart.
 */
import { HEALTH_PAGES } from './nl-content/health.mjs';
import { MOTOR_PAGES } from './nl-content/motor.mjs';
import { HOUSING_PAGES } from './nl-content/housing.mjs';
import { BUSINESS_PAGES } from './nl-content/business.mjs';
import { HUB_PAGE } from './nl-content/hub.mjs';

export { LANG_POLICY_NL, BREADCRUMB_ROOT } from './nl-content/shared.mjs';

export const PAGES = [
  ...HEALTH_PAGES,
  ...MOTOR_PAGES,
  ...HOUSING_PAGES,
  ...BUSINESS_PAGES,
  HUB_PAGE,
];
