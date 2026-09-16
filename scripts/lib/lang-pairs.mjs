/**
 * Which pages are counterparts of which, across the site's eight languages.
 *
 * Two scripts write a language selector into pages that already exist:
 * scripts/lang-switcher.mjs (the canonical pass, over the whole corpus) and
 * scripts/unify-chrome.mjs (which rebuilds the reading header and the two
 * commercial landing headers from scripts/lib/partials.mjs). Each used to
 * carry its own idea of what pairs with what, and the narrower one lost:
 * unify-chrome knew only the PT<->EN article pairs, so every run replaced the
 * real Dutch link on /en/blog/home-insurance-legalization/ with a dimmed
 * "home page" row, and the next run of lang-switcher.mjs put it back. Two
 * passes undoing each other is not a disagreement worth keeping, so the
 * record of the pairs lives here and both import it.
 *
 * The market clusters are deliberately NOT listed: scripts/lib/market-hreflang.mjs
 * derives those from the page objects themselves, so a pairing cannot be
 * asserted for a page nobody wrote. Callers merge both sources.
 *
 * scripts/hreflang.mjs keeps its own literal record for a documented reason
 * (see the comment above its PAGE_CLUSTERS) — it is the written-down history
 * of what the markup declared and which declarations were corrected.
 */
import { readFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { existsSync } from 'node:fs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const PUBLIC = join(ROOT, 'public');

export const PAGE_CLUSTERS = [
  // The homepage cluster is the one place where all eight languages genuinely
  // have the same page. The three market homepages are not listed here: they
  // come from scripts/lib/market-hreflang.mjs, which derives them from the page
  // objects themselves, so this array cannot fall out of step with what exists.
  { pt: '/', en: '/en/', de: '/de/', fr: '/fr/', nl: '/nl/' },
  { pt: '/blog/', en: '/en/blog/' },
  { pt: '/seguros/tvde/', en: '/en/insurance/tvde/' },
  // Motor. The pair was added to scripts/hreflang.mjs when the English car
  // page was built but not here, so this pass was quietly demoting the
  // pillar's PT link to the homepage every time it ran.
  // `de` added Especificação v2, Parte 2 continuação — synced from
  // scripts/hreflang.mjs's own PAGE_CLUSTERS after this file's stale copy
  // was caught silently reverting /seguros/auto/'s DE switcher link back
  // to the homepage on every scripts/lang-switcher.mjs run (found running
  // that pass for the Parte B PL/SE/DK/ZH work — same "two passes undoing
  // each other" failure this file's own top comment describes, just
  // between this file and scripts/hreflang.mjs rather than unify-chrome).
  { pt: '/seguros/auto/', en: '/en/car-insurance-portugal/', de: '/de/autoversicherung-portugal/' },
  { pt: '/seguros/condominios/', en: '/en/condominium-insurance-algarve/' },
  // Professional liability — therapies and wellbeing. The EN side is
  // article-shaped (each with its own quote form), not a /seguros/-style
  // landing page, and liability-insurance-complementary-therapies already
  // has its own true translationOf pair with the PT blog article — that
  // pairing is untouched. These two entries give the PT *product* pages
  // (built in September 2026, after the EN cluster existed) an EN
  // counterpart of their own, since neither had one before.
  { pt: '/seguros/rc-terapeuticas-nao-convencionais/', en: '/en/blog/liability-insurance-complementary-therapies/' },
  { pt: '/seguros/rc-yoga-pilates-bem-estar/', en: '/en/blog/yoga-instructor-liability-insurance-portugal/' },
  { pt: '/seguros-empresas-lagos/', en: '/en/expat-insurance-lagos-portugal/', nl: '/nl/verzekeringen-portugal/' },
  // `de` added, same reasoning as /seguros/auto/ above.
  { pt: '/seguros/habitacao/', en: '/en/home-insurance-quote/', nl: '/nl/woonverzekering-portugal/', de: '/de/hausversicherung-portugal/' },
  // Missing entirely before this pass, same reasoning as /seguros/auto/
  // above — synced from scripts/hreflang.mjs.
  { pt: '/seguros/saude/', en: '/en/health-insurance-quote/', nl: '/nl/zorgverzekering-portugal/', de: '/de/krankenversicherung-portugal/' },
  { pt: '/seguros/responsabilidade-civil-profissional/', en: '/en/professional-liability-insurance-portugal/', de: '/de/berufshaftpflicht-freiberufler-portugal/' },
  { pt: '/seguros/alojamento-local/', nl: '/nl/alojamento-local-verzekering-portugal/' },
  { pt: '/politica-de-privacidade/', en: '/en/privacy-policy/' },
  { pt: '/termos-e-condicoes/', en: '/en/terms-and-conditions/' },
];

/**
 * path -> { langKey: path }, including the page's own entry.
 *
 * Built from three sources, in this order: the PT<->EN article pairs in
 * data/articles.json (a pair needs both sides published, pointing at each
 * other, and present on disk), the clusters above, and the Dutch cluster's
 * own `alternates`.
 */
export async function buildPairMap() {
  const data = JSON.parse(await readFile(join(ROOT, 'data', 'articles.json'), 'utf8'));
  const cluster = new Map();

  const byUrl = new Map();
  for (const lang of ['pt', 'en']) for (const a of data.articles[lang]) byUrl.set(a.url, { ...a, lang });

  for (const lang of ['pt', 'en']) {
    for (const a of data.articles[lang]) {
      if (a.status !== 'published' || !a.translationOf) continue;
      const otherUrl = lang === 'pt' ? `/en/blog/${a.translationOf}/` : `/blog/${a.translationOf}/`;
      const other = byUrl.get(otherUrl);
      if (other?.status !== 'published' || other.translationOf !== a.slug) continue;
      if (!existsSync(join(PUBLIC, otherUrl, 'index.html'))) continue;
      cluster.set(a.url, lang === 'pt' ? { pt: a.url, en: otherUrl } : { pt: otherUrl, en: a.url });
    }
  }
  for (const c of PAGE_CLUSTERS) {
    for (const path of Object.values(c)) cluster.set(path, c);
  }

  /*
   * The Dutch cluster, from data/articles.json.
   *
   * Each Dutch page names the counterparts that were confirmed for it, and the
   * Dutch link is added to those pages only — never to their siblings. The
   * English article on health insurance for expatriates gains a Dutch link; its
   * Portuguese twin, which nobody has called the same page as the Dutch one, is
   * left pointing at the Dutch home. Spread rather than mutate: cluster entries
   * from PAGE_CLUSTERS are shared between the members of a cluster, so writing
   * to one in place would leak the Dutch link into all of them.
   */
  for (const a of data.articles.nl || []) {
    if (a.status !== 'published' || !existsSync(join(PUBLIC, a.url, 'index.html'))) continue;
    for (const target of Object.values(a.alternates || {})) {
      cluster.set(target, { ...(cluster.get(target) || {}), nl: a.url });
    }
    cluster.set(a.url, { ...(a.alternates || {}), nl: a.url });
  }

  return cluster;
}
