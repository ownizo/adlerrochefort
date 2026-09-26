/**
 * The five language-market clusters, in one place.
 *
 * Poland (/pl/), Sweden (/se/), Denmark (/dk/), the Simplified Chinese market
 * (/zh/) and the Hebrew market (/il/) are generated from the same renderer
 * (scripts/lib/market-cluster.mjs) and differ only in their market
 * descriptor: language codes, interface copy, footer, form identity and the
 * eight page objects. Registering them here rather than in each consumer means
 * the renderer, the hreflang post-processor and the language selector all read
 * the same list, so a page cannot exist for one of them and not the others.
 *
 * Nothing in this module may import the renderer — content flows one way.
 */
import { PL_MARKET } from '../pl-cluster.data.mjs';
import { SE_MARKET } from '../se-cluster.data.mjs';
import { DK_MARKET } from '../dk-cluster.data.mjs';
import { ZH_MARKET } from '../zh-cluster.data.mjs';
import { IL_MARKET } from '../il-cluster.data.mjs';
import { ES_MARKET } from '../es-cluster.data.mjs';
import { IT_MARKET } from '../it-cluster.data.mjs';

// Spanish (/es/) joined in September 2026. Order here is registration order:
// it decides the order of hreflang alternates in the generated pages, so a new
// market is appended, never inserted.
export const MARKETS = [PL_MARKET, SE_MARKET, DK_MARKET, ZH_MARKET, IL_MARKET, ES_MARKET, IT_MARKET];
export const MARKET_BY_KEY = Object.fromEntries(MARKETS.map((m) => [m.key, m]));
export const MARKET_KEYS = MARKETS.map((m) => m.key);

/** Every generated path in the five clusters, for audits and reports. */
export const MARKET_PATHS = MARKETS.flatMap((m) => m.pages.map((p) => p.url));
