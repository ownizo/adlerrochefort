/**
 * Content definitions for the German cluster.
 *
 * The pages themselves are rendered by scripts/generate-de-cluster.mjs. This
 * module aggregates the editorial content and per-page metadata, split by
 * theme across ./de-content/*.mjs so each file stays readable — mirroring
 * scripts/nl-cluster.data.mjs.
 *
 * Part 13 of the brief: "Start with the hub and the anchor page, then
 * report." This file currently lists only those two; the remaining nine
 * (Kranken, Haus, Auto, Leben, Private Clients, and the four local pages) are
 * added here as each is built, in the same three-page batches the brief's
 * reporting cadence calls for.
 */
import { HUB_PAGE } from './de-content/hub.mjs';
import { MOVING_PAGE } from './de-content/moving.mjs';

export { LANG_POLICY_DE, BREADCRUMB_ROOT } from './de-content/shared.mjs';

export const PAGES = [HUB_PAGE, MOVING_PAGE];
