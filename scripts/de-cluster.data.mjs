/**
 * Content definitions for the German cluster.
 *
 * The pages themselves are rendered by scripts/generate-de-cluster.mjs. This
 * module aggregates the editorial content and per-page metadata, split by
 * theme across ./de-content/*.mjs so each file stays readable — mirroring
 * scripts/nl-cluster.data.mjs.
 *
 * Part 13 of the brief: "Start with the hub and the anchor page, then
 * report... then after every three pages." Built so far: hub, anchor
 * (Umzug), Kranken, Haus, Auto. Remaining: Leben, Private Clients, and the
 * four local pages, added here as each batch is built.
 */
import { HUB_PAGE } from './de-content/hub.mjs';
import { MOVING_PAGE } from './de-content/moving.mjs';
import { HEALTH_PAGE } from './de-content/health.mjs';
import { HOME_PAGE } from './de-content/home.mjs';
import { MOTOR_PAGE } from './de-content/motor.mjs';

export { LANG_POLICY_DE, BREADCRUMB_ROOT } from './de-content/shared.mjs';

export const PAGES = [HUB_PAGE, MOVING_PAGE, HEALTH_PAGE, HOME_PAGE, MOTOR_PAGE];
