/**
 * Builds the rebuild-value page object for a generated market cluster from
 * scripts/rebuild-value.data.mjs. Every market gets the same structure and the
 * cluster key 'rebuild-value', which is what pairs the pages for hreflang
 * (scripts/lib/market-hreflang.mjs adds the hand-authored PT/EN/DE/NL/FR
 * members of the group).
 *
 * The form is the market's own home-insurance form: the home page's wizard
 * where the market has one (PL, SE, DK, ZH, IL), otherwise the shared short
 * form with the home branch preselected (ES, IT).
 */
import { REBUILD, REBUILD_URLS } from '../rebuild-value.data.mjs';

export function rebuildValuePage(key, { breadcrumbRoot, homePage, formBranch, hubLabel }) {
  const c = REBUILD[key];
  const url = REBUILD_URLS[key];
  const sections = c.sections
    .map(
      (s, i) => `
<section class="section ${i % 2 ? 'tint' : 'plain'}" aria-labelledby="${s.id}">
  <div class="container narrow article-body">
    <h2 id="${s.id}">${s.h2}</h2>
    ${s.html}
  </div>
</section>`
    )
    .join('\n');

  const page = {
    slug: url.split('/').filter(Boolean).pop(),
    url,
    cluster: 'rebuild-value',
    title: c.title,
    description: c.description,
    keywords: c.keywords,
    eyebrow: c.eyebrow,
    h1: c.h1,
    standfirst: c.standfirst,
    published: '2026-10-02T09:00:00+00:00',
    modified: '2026-10-02T09:00:00+00:00',
    breadcrumb: [...breadcrumbRoot, { name: c.crumb }],
    schemaType: 'Article',
    sections,
    faqTitle: c.h1.split(':')[0].split('：')[0],
    faq: c.faq.map((f) => ({ q: f.q, a: `<p>${f.a}</p>` })),
    related: [
      { url: homePage.url, label: homePage.breadcrumb?.at(-1)?.name || homePage.h1.replace(/<[^>]+>/g, '') },
      { url: breadcrumbRoot[0].url, label: hubLabel || breadcrumbRoot[0].name },
    ],
  };

  if (homePage.wizard) {
    page.wizard = { ...homePage.wizard, heading: c.formHeading };
  } else {
    Object.assign(page, {
      formHeading: c.formHeading,
      formBranch,
      formSubject: c.crumb,
      formCta: homePage.formCta,
      formIntro: homePage.formIntro,
      formPlaceholder: homePage.formPlaceholder,
    });
  }
  return page;
}
