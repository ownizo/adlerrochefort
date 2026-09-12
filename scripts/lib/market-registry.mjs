/**
 * The four language-market clusters, in one place.
 *
 * Poland (/pl/), Sweden (/se/), Denmark (/dk/) and the Simplified Chinese
 * market (/zh/) are generated from the same renderer
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

export const MARKETS = [PL_MARKET, SE_MARKET, DK_MARKET, ZH_MARKET];
export const MARKET_BY_KEY = Object.fromEntries(MARKETS.map((m) => [m.key, m]));
export const MARKET_KEYS = MARKETS.map((m) => m.key);

/** Every generated path in the four clusters, for audits and reports. */
export const MARKET_PATHS = MARKETS.flatMap((m) => m.pages.map((p) => p.url));
