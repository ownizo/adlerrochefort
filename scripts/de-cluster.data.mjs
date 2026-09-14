/**
 * Content definitions for the German cluster.
 *
 * The pages themselves are rendered by scripts/generate-de-cluster.mjs. This
 * module aggregates the editorial content and per-page metadata, split by
 * theme across ./de-content/*.mjs so each file stays readable — mirroring
 * scripts/nl-cluster.data.mjs.
 *
 * Part 13 of the brief: "Start with the hub and the anchor page, then
 * report... then after every three pages." All eleven pages of the original
 * round's scope are built: hub, anchor (Umzug), Kranken, Haus, Auto, Leben,
 * Private Clients, and the four local pages (Algarve, Lagos, Lissabon,
 * Cascais). A twelfth page, Anwartschaftsversicherung, was split out of the
 * anchor page's PKV section on the following round (its own request).
 *
 * German Phase 2 (content/cluster-completion): the four satellites named in
 * the original strategy brief's own slug-level plan — Vorerkrankungen,
 * Rentner/S1, non-legalised property and the ISV exemption — see
 * ./de-content/phase2.mjs.
 */
import { HUB_PAGE } from './de-content/hub.mjs';
import { MOVING_PAGE } from './de-content/moving.mjs';
import { HEALTH_PAGE } from './de-content/health.mjs';
import { HOME_PAGE } from './de-content/home.mjs';
import { MOTOR_PAGE } from './de-content/motor.mjs';
import { LIFE_PAGE } from './de-content/life.mjs';
import { PRIVATE_CLIENTS_PAGE } from './de-content/private-clients.mjs';
import { LOCAL_PAGES } from './de-content/local.mjs';
import { ANWARTSCHAFT_PAGE } from './de-content/anwartschaft.mjs';
import { PHASE2_PAGES } from './de-content/phase2.mjs';
import { THERAPEUTEN_WELLNESS_PAGE } from './de-content/therapeuten-wellness.mjs';

export { LANG_POLICY_DE, BREADCRUMB_ROOT } from './de-content/shared.mjs';

export const PAGES = [
  HUB_PAGE,
  MOVING_PAGE,
  ANWARTSCHAFT_PAGE,
  HEALTH_PAGE,
  HOME_PAGE,
  MOTOR_PAGE,
  LIFE_PAGE,
  PRIVATE_CLIENTS_PAGE,
  THERAPEUTEN_WELLNESS_PAGE,
  ...LOCAL_PAGES,
  ...PHASE2_PAGES,
];
