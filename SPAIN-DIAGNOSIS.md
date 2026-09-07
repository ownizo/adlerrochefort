# Spain structure diagnosis — adlerrochefort.com

**Repo:** `ownizo/adlerrochefort`, branch `main` (confirmed: `git remote -v` →
`https://github.com/ownizo/adlerrochefort.git`, clean working tree).
**Method:** read from the actual files in `public/`, `netlify/`, `scripts/`, and
git history — not from Search Console exports. Every claim below is marked
**Verified** (read directly in code/config) or **Inferred** (reasoned from what
was read, but not something the repo can confirm on its own).

**Framework/router, corrected up front:** there is no SSG and no client router.
Per `README.md` and confirmed by inspection, `public/` is hand-authored HTML —
one `index.html` per route — published as-is by Netlify. "Routing" is the
directory structure plus `netlify/edge-functions/lang-router.ts` (homepage-only
language redirect) and `public/_redirects` / `netlify.toml` (301/302s). Pages
are produced two ways: written by hand, or emitted by one-off Node generator
scripts in `scripts/` that read a co-located `*.data.mjs` content file and
write finished HTML. The Spain cluster is the second kind — this matters for
Part 2 below.

---

## 0. The fact that reframes everything else

**Verified**, from git history:

```
2026-08-28  Add Spain market layer, Phase 1 (hub, home, landlord)
2026-08-28  Add Spain Health insurance + Phase 2 (7 articles)
2026-08-28  Add Spain Car insurance + Phase 3 (5 articles)
2026-08-28  Add Spain Life, Mortgage Protection & Private Clients + Phase 4
2026-08-28  International growth Phase 5/7/9/10 (cross-sell, journeys, trust, tracking)
2026-08-29  Merge: fix-spain-blog-article-template
```

Every Spain route in this diagnosis — all 8 commercial pages and all 20
blog/category pages — **was created on a single day, 2026-08-28**, with one
template fix merged the next day. Nothing Spain-related predates that.

The Search Console window in this brief runs to **2026-09-05**, 28 days back.
That means these URLs existed for at most **8–9 days** inside the measurement
window; for roughly two-thirds of the 28-day window, the pages being measured
did not exist yet. An average position of 55–71 for a set of commercial pages
that are a week old, in a niche (insurance) where the SERP is dominated by
comparison sites and insurers with years of accumulated authority, is the
expected early-life position for a page with no external backlinks yet — not
evidence of a structural defect on its own. This doesn't excuse the two
patterns asked about (both have a real, code-level explanation below), but it
sets the right prior: the headline number (1 click / 926 impressions) is a
week-one snapshot, not a mature-page failure.

---

## 1. Structure as it actually is

### 1.1 Route inventory (330 `index.html` files total)

| Segment | Routes | Notes |
|---|---|---|
| `/` (root, `pt-PT`) | 92 | 71 blog, 13 `/seguros/*`, 1 `/seguros-empresas-lagos/`, 7 institutional/legal/root pages |
| `/en/` | 223 | 157 blog, 66 top-level (commercial + institutional) |
| `/nl/` | 13 | Standalone Dutch expat cluster (visa/S1/car-import topics) — **no Spain content** |
| `/de/` | 1 | Single landing page only |
| `/fr/` | 1 | Single landing page only |

`de` and `fr` are not full sections — confirmed in
`netlify/edge-functions/lang-router.ts`, whose own comment calls this
"Bloco A": a homepage-only redirect that sends a browser with `Accept-Language:
de`/`fr` to a single dedicated landing page, nothing more. `nl` has a real
13-page cluster but it is entirely Portugal-focused; grepping `nl/` for
"spain" returns nothing. **Spain content exists only under `/en/`.** The
prompt's implicit assumption that Spain might have a footprint in `de`/`fr`/`nl`
is wrong — worth stating explicitly since assuming it does (or extrapolating
Spain's problems as multi-language) would be a mistake in any follow-up work.

### 1.2 Every Spain-related route (28 tracked in Search Console + 4 more)

**Commercial (8, all under `/en/`, all created 2026-08-28):**

| Route | Title | H1 | Content |
|---|---|---|---|
| `/en/expat-insurance-spain/` | Insurance for Expats in Spain \| English-Speaking Service | Insurance for Expats in Spain | Hub — unique |
| `/en/health-insurance-spain/` | Health Insurance in Spain for Expats | Health Insurance in Spain for Expats | Unique |
| `/en/home-insurance-spain/` | Home Insurance in Spain for International Owners | same | Unique |
| `/en/car-insurance-spain/` | Car Insurance in Spain for Expats | same | Unique |
| `/en/landlord-insurance-spain/` | Landlord Insurance in Spain for International Property Owners | same | Unique |
| `/en/life-insurance-spain/` | Life Insurance in Spain for International Residents | same | Unique |
| `/en/mortgage-protection-spain/` | Mortgage Protection in Spain for International Property Buyers | same | Unique |
| `/en/private-clients-spain/` | Private Client Insurance in Spain | Private Client Insurance in Spain | Unique |

All 8 are produced by `scripts/build-spain-cluster.mjs` /
`build-spain-articles.mjs` reading `scripts/spain-cluster.data.mjs` (2,719
lines of Spain-specific copy) — **generated, but from Spain-authored content,
not from Portugal's content with the country name swapped.** See Part 2.

**Blog/category (20):** 19 articles + `/en/blog/category/spain-property/`, all
listed in the SC table, all created the same day. Four more category pages
exist (`spain-car`, `spain-health`, `spain-life`, `spain-private-clients`) —
indexable, ~600–800 words each, present in the sitemap, but **zero impressions**
in the 28-day window, presumably not yet crawled/ranked at all. Total Spain
footprint: **32 pages**, of which 28 have any recorded impressions.

### 1.3 Navigation — the four-column mega menu is real, but it is an island

**Verified.** The "Overview / Personal / Property / Private Clients"
structure the brief describes is real and lives at `public/en/index.html:2464-
2492`, inside `.nav-panel--4` under a "Insurance in Spain" trigger, alongside
an equivalent Portugal panel ("Overview / Personal Insurance / Moving &
Property") and a small "Private Clients" cross-country picker. It maps
correctly to live routes: Overview → `/en/expat-insurance-spain/`, Personal →
health/home/car/life, Property → landlord/mortgage-protection, Private
Clients → `/en/private-clients-spain/`. Every link resolves.

**The correction:** `grep -rl "nav-panel-cols" --include=index.html .` across
the entire `public/` tree returns exactly **one file: `en/index.html`.** This
mega menu exists nowhere else — not on the Portuguese homepage, not on any
commercial page, not on any blog post. Two other nav tiers exist instead:

- **Commercial pages** (`lp-*` template, both Spain and Portugal) carry a flat
  list of that country's own product pages only (e.g. Spain pages link to the
  other 7 Spain pages, never to Portugal's).
- **Blog articles** carry a minimal nav: logo, "Back to Insights", and a
  market indicator (`🇪🇸 Spain` / link to the Portugal equivalent) — **no
  product links at all.**

So a visitor who lands directly on a Spain blog post (where 693 of the
cluster's 926 impressions are) sees no path into the commercial pages in the
header. Discovery depends entirely on in-body "Related reading" cards and one
mid-article CTA link.

`scripts/unify-chrome.mjs`'s own header comment confirms this is by design,
not oversight, for the *header*: "the homepage navigations... are the source
being copied" — i.e., the homepage nav is deliberately never propagated
elsewhere. The footer is a different story (Part 3.7 below).

### 1.4 The Spain hub

`/en/expat-insurance-spain/` is confirmed as the hub: it is the "Overview"
entry in the Spain nav panel, the breadcrumb parent for all 7 other commercial
pages (`<div class="lp-crumb">Home / Insurance for expats in Spain / Health
insurance`, etc.), and the target of the homepage's "Moving to Portugal /
Insurance in Spain" `country-router` card. It has its own country-aware
lead-capture form (Part 3). It is linked from the homepage mega menu, the
homepage footer, and four generic EN pages (`insurance-review`,
`claims-support`, `why-use-an-insurance-broker`, `how-we-work`) — 37 inbound
links total, the most of any Spain route, though see 1.5 on what that
inbound count actually consists of.

### 1.5 Reachable from where

Internal inbound-link counts (grep across every `index.html` in `public/`,
counting `href="...spain..."` occurrences, including self-cluster links):

| Route | Inbound links |
|---|---|
| `/en/expat-insurance-spain/` | 37 |
| `/en/car-insurance-spain/` | 34 |
| `/en/private-clients-spain/` | 34 |
| `/en/health-insurance-spain/` | 33 |
| `/en/home-insurance-spain/` | 33 |
| `/en/landlord-insurance-spain/` | 33 |
| `/en/life-insurance-spain/` | 33 |
| `/en/mortgage-protection-spain/` | **7** |
| Blog posts (individually) | **4–5 each** |

**Verified and important:** almost every one of those inbound links comes
from *inside the Spain cluster itself* (the 28 Spain pages cross-link to each
other), plus the homepage (mega menu + footer) and the same four generic
"why us"-type EN pages. **Zero** of the ~90 PT-root pages and **zero** of the
~150 Portugal-themed EN pages/blog posts link into the Spain cluster (checked
directly: `grep` across every non-`spain` EN blog post and every PT-root page
for `insurance-spain` returns nothing). The Spain cluster is a closed loop
attached to the site by a handful of threads, not woven into the ~250-page
Portugal corpus that carries the site's actual link equity. `Root cause`,
verified in Part 3.7: this isn't a deliberate decision, it's a stale chrome
propagation.

---

## 2. Portugal/Spain duplication test — **hypothesis is false**

Method: extracted plain body text (`<main>`, tags stripped) for each pair,
normalized `Spain/Spanish` ↔ `Portugal/Portuguese` to a common token, then
compared at both character level (`difflib.SequenceMatcher`) and sentence
level (exact match after normalization, and fuzzy match >0.85 ratio).

| Pair | Words (ES/PT) | Sentence exact-match after country-normalization | Fuzzy match (>0.85) |
|---|---|---|---|
| car-insurance | 2,955 / 4,031 | 3 / 129 (2%) | 9 / 129 (7%) |
| expat-insurance | 3,161 / 3,787 | 3 / 146 (2%) | 6 / 146 (4%) |
| landlord-insurance | 1,661 / 2,601 | 3 / 88 (3%) | 3 / 88 (3%) |
| private-clients | 1,347 / 3,138 | 0 / 57 (0%) | 0 / 57 (0%) |

Between 0% and 7% of sentences match even loosely after swapping the country
name back and forth. Section outlines are topically similar but not
identical: `car-insurance-spain` has H2 ids `who-for / basics / cover /
licences / no-claims / foreign-registered / importing / price / documents /
claims`; `car-insurance-portugal` has `how-it-works / cover / expats /
imported / no-claims / price / documents / situations / broker`. Same
subject area, genuinely different structure and prose.

**Also worth correcting:** three of the seven pairs the brief asked about
**do not exist as named**. There is no `/en/health-insurance-portugal/` (the
closest equivalent is `/en/international-health-insurance-portugal/` plus the
generic `/en/health-insurance-quote/`), no `/en/home-insurance-portugal/`
(closest: `/en/apartment-insurance-portugal/`, `/en/second-home-insurance-
portugal/`, `/en/unoccupied-home-insurance-portugal/`,
`/en/rental-property-insurance-portugal/` — several narrower niches instead
of one generic page), no `/en/life-insurance-portugal/`, and no
`/en/mortgage-protection-portugal/` (Portugal's life/mortgage topic lives only
as a blog post, `/en/blog/mortgage-life-insurance-foreign-buyers-portugal/`,
linked from the nav's "Life & Mortgage Protection" item). So for health, home,
life and mortgage protection there is no true 1:1 Portugal counterpart to even
run a duplication test against — the Spain cluster invented a page shape
Portugal never had for those topics.

The generator script confirms this was deliberate, not accidental. From
`scripts/build-spain-cluster.mjs`'s own header:

> "This generator is deliberately self-contained rather than built on top of
> `build-car-cluster.mjs` or `build-expat-hub.mjs`: those two files render the
> Portugal chrome... baked directly into their markup, and reusing them as-is
> would either (a) leak that Portugal chrome onto Spain pages, or (b) require
> editing those files to branch on country — which risks the one thing this
> task must not risk, a Portugal regression."

**Verdict: the duplication hypothesis is false.** The Spain commercial pages
are not near-duplicates of Portugal pages with the country swapped — they are
independently written, from a dedicated 2,719-line content file, specifically
to avoid inheriting Portugal's copy. Whatever is holding these pages back at
position 55–71, it is not thin/duplicate content in the classic sense.

---

## 3. Conversion path audit

### 3.1 Lead-capture forms (inventory)

Two distinct form families, both real, both functioning:

1. **`lp-form-section` (commercial landing pages, both countries).** Fields:
   name, email, phone, "where do you currently live", a product-specific
   "what do you need help with" select, a product-specific "your situation"
   select, free-text message. Netlify Forms (`data-netlify="true"`,
   honeypot field). Each page's form carries **hidden fields specific to that
   page**: `source` (`landing:<slug>`), `country` (hardcoded per page —
   `"Spain"` on all 8 Spain pages, verified individually), `landing_page` and
   `source_url` (populated client-side by `js/ar-quote-form.js`, which
   explicitly implements first-touch attribution via `sessionStorage`).
2. **`hero-card-form` (homepage only) and the shared `/en/insurance-review/`
   review form.** These are the two places with a *visible, user-facing*
   "Country / Market" select rather than a hardcoded value.

### 3.2 The "truly protected in Portugal" headline — real, but not on the hub

**Correction to the brief's premise:** this headline is not on the Spain hub.
`grep -rl "truly protected"` across all 330 pages returns it in exactly one
place that matters here: `public/en/index.html:2651`, the `hero-card-title`
in the **English homepage's** hero widget:

```html
<h1 class="hero-title">Insurance in Portugal<br>and Spain,<br><em>explained in English.</em></h1>
...
<div class="hero-card-title">Find out if you're truly protected in Portugal</div>
```

So the brief's description is accurate in substance (an H1 spanning both
countries, paired with a Portugal-only sidebar form headline) but the location
is the **homepage**, not `/en/expat-insurance-spain/`. `expat-insurance-spain/`
and all 7 other Spain commercial pages have their own form headline
("Get an Insurance Review", "Get a Health Insurance Quote", etc.) with no
Portugal-specific copy — checked individually, all 8. **This bug affects one
page (the homepage), not the Spain cluster**, but it is the highest-traffic
entry point on the site, and it undersells Spain to exactly the visitors the
H1 just told "we cover Spain too."

### 3.3 The Country / Market select

Two live instances, both **Verified**:

- **Homepage hero-card-form**: `<select name="country">` with options
  Portugal / Spain / Not sure / Other. Not pre-filled from the visitor or the
  page — always starts blank. Submission payload does *not* carry a
  `landing_page`/`source` field the way the `lp-form-section` forms do (no
  such hidden input exists in this form), so a lead from this form cannot be
  traced back to "which page" beyond whatever the visible fields say.
- **`/en/insurance-review/`**: `<select id="q-country" name="country"
  data-branch-select>` with Portugal / Spain. **This one is pre-filled**, and
  correctly: an inline script (`en/insurance-review/index.html:445-479`)
  reads `?market=Portugal|Spain` from the URL and sets the select before the
  page's branch-logic runs, plus a parallel `?situation=` param that stamps a
  hidden `entry_situation` field. This is exactly how the Spain blog posts'
  CTA link works — e.g. `private-health-insurance-spain-expats` links to
  `/en/insurance-review/?market=Spain` — and it is correctly wired end to end.
  This part of the funnel is well-built, not a gap.

### 3.4 "Choose your country" — an anchor, not a gate

**Verified.** `grep -i "choose your country"` matches one page: the homepage.
It is a plain in-page anchor (`<a href="#country-router" class="btn-primary">
Choose your country</a>`) that scrolls to a two-card section further down
the same page ("Moving to Portugal" / "Insurance in Spain" cards, each linking
to its own hub). **It does not exist on any Spain page**, so the brief's
framing — "does a visitor arriving on a Spain page have to interact with it
before reaching Spain content" — doesn't apply: a visitor who lands directly
on a Spain page (via search, which is the scenario this whole diagnosis is
about) never encounters this control at all. It only gates the path *through
the homepage*, and even there it's an optional scroll aid, not a blocking
toggle.

### 3.5 CTA hierarchy — symmetric

Compared hero CTAs directly (`car-insurance-spain` vs `car-insurance-
portugal`): identical structure, identical classes (`btn-primary` → `#quote-
form`, `lp-btn-wa` → WhatsApp deep link with page-specific pre-filled text),
identical `lp-trust` bar position. Same components, same prominence, same
destinations, just country-specific copy inside them. No asymmetry found
between the two countries' commercial-page CTAs.

### 3.6 Analytics — more granular than assumed, but unevenly applied

`js/ar-conversion-events.js` is a dedicated, well-documented event-tracking
module firing to `gtag()`: `market_selected`, `insurance_review_started`,
`situation_selected` / `spain_situation_selected`, `spain_product_clicked`
(any nav/footer click into a `*-spain/` URL), `product_selected`,
`quote_started` (first focus into any `data-quote-form`, fired once),
`multi_product_selected`, `cross_sell_clicked`. It reads page context from
`data-page-type` / `data-market` / `data-product` attributes on `<body>`.
**Verified:** Spain commercial pages carry this tagging —
`<body data-market="spain" data-page-type="commercial_product"
data-product="health_insurance">` — but the Portugal pages checked
(`car-insurance-portugal`) carry **no `<body>` data attributes at all**. This
instrumentation was added as part of the same Aug-28 Spain project and was
never backfilled onto the pre-existing Portugal pages, so GA segmentation by
market/page-type is currently asymmetric: complete for Spain, absent for
Portugal. Not a blocker for measuring Spain, but it means a Spain-vs-Portugal
comparison in GA itself will undercount Portugal's side of any of these
custom events.

### 3.7 The footer — this is the real internal-linking bug

This is the most concrete, fixable finding in the whole audit. `public/
en/index.html`'s footer **does** have a Spain column, added on 2026-08-28:

```html
<div class="footer-col-title">Spain</div>
  <li><a href="/en/expat-insurance-spain/">Insurance for Expats</a></li>
  <li><a href="/en/home-insurance-spain/">Home Insurance</a></li>
  <li><a href="/en/health-insurance-spain/">Health Insurance</a></li>
  <li><a href="/en/car-insurance-spain/">Car Insurance</a></li>
  <li><a href="/en/landlord-insurance-spain/">Landlord Insurance</a></li>
  <li><a href="/en/life-insurance-spain/">Life Insurance</a></li>
  <li><a href="/en/private-clients-spain/">Private Clients</a></li>
```

(Note in passing: this column is itself incomplete — it omits Mortgage
Protection, consistent with that page's unusually low 7-link inbound count.)

But the site's own tooling exists precisely to keep the footer identical
everywhere: `scripts/unify-chrome.mjs`'s stated job is "replaces the
hand-copied chrome on every page with the single partial... run it after
editing the chrome on `public/index.html`, `public/en/index.html` or
`public/nl/index.html`. Those three pages are the source; every other page is
a consumer." `scripts/lib/partials.mjs`, which holds the actual footer
template the script propagates, **contains zero mentions of Spain** —
confirmed by grep. That means either `unify-chrome.mjs` was never re-run after
the homepage's footer was edited for Spain, or `partials.mjs`'s captured
snapshot predates that edit. Either way, the ~220 pages this script treats as
"consumers" — effectively the entire Portugal blog and commercial corpus —
are still serving the pre-Spain footer. **This, not a deliberate design
choice, is why zero Portugal pages link to the Spain cluster**: the
propagation step that would have put Spain links in front of ~250 pages'
worth of readers simply never ran.

---

## 4. Technical SEO on the Spain cluster

All checked directly on the 8 commercial pages (representative; blog posts
follow the same generator conventions):

- **Canonical:** present, correct, self-referencing on all 8
  (`https://adlerrochefort.com/en/<slug>/`).
- **hreflang:** absent on every Spain page — **verified deliberate**, not a
  gap. `build-spain-cluster.mjs`'s header states: "Spain pages carry no
  hreflang alternates at all — they are country variants of an English-
  language intent, not language translations of a Portuguese page, and the
  site's own `hreflang.mjs` already enforces that a page declares hreflang
  only when a real translated counterpart exists on disk. None does for Spain
  yet." This is technically correct: hreflang signals *language* equivalence,
  not *market* equivalence, and an `en-ES` tag would be the wrong tool here
  even if one wanted to signal "this page targets English speakers in Spain" —
  that's normally done with `Service`/`areaServed` schema (which is present)
  or a Spain ccTLD/subfolder strategy (out of scope), not hreflang.
- **JSON-LD:** present and correct on the pages checked —
  `Service` with `areaServed: {"@type":"Country","name":"Spain"}`,
  `provider` (InsuranceAgency, ASF identifier, PT address — correctly
  disclosing the cross-border basis), `FAQPage`, and `BreadcrumbList`
  matching the real hub → page hierarchy.
- **Robots:** `index, follow, max-image-preview:large, max-snippet:-1` on
  every Spain page checked. `robots.txt` blocks only `/.netlify/`,
  `/descarregar/`, `/alterarmediador/`. `netlify.toml`'s only page-specific
  `noindex` headers target two unrelated fiscal-representation drafts. **No
  Spain route is noindexed.**
- **Sitemap:** all 28 SC-tracked Spain URLs are present, split across
  `sitemap-pages.xml` (8 commercial + 5 category) and `sitemap-blog.xml` (19
  articles + implied). No sitemap gap.
- **Internal inbound links:** as covered in 1.5/3.7 — technically fine
  (crawlable, in sitemap) but structurally isolated from the site's main
  link graph.
- **Title/meta patterns:** each page's title and meta description read as
  hand-written for that specific product ("Health Insurance in Spain for
  Expats", "Mortgage Protection in Spain for International Property Buyers"),
  not a single mechanical template with only the noun swapped — consistent
  with the Part 2 finding that this is authored content, not string
  interpolation over a shared skeleton. They are, however, internally
  consistent with each other (`<Product> in/for Spain for <audience>`),
  which is a deliberate content-file convention, not evidence of low effort.

---

## 5. Explaining the two patterns from Search Console

### Pattern A — commercial pages rank below their own blog posts, in every theme

**Verified contributing factors:**

1. **Page age dominates at this stage.** Both the commercial pages and the
   blog posts launched the same day (2026-08-28), so age alone doesn't
   separate them — but it means *neither* cluster has had time to accumulate
   external signals, and commercial ("money") keywords in insurance are
   contested by comparison sites and insurers with years of domain authority,
   while long-tail informational queries have far less competition to
   out-rank in week one. This is the standard shape for a brand-new
   commercial cluster: informational long-tail ranks first, commercial head
   terms lag until backlinks and engagement signals accumulate. (**Inferred**
   — backlink profiles aren't visible from the repo; see Part 6.)
2. **It is not an internal-link-count effect**, and the data argues against
   that being the driver: the commercial pages actually have *more* internal
   inbound links (33–37) than the blog posts that outrank them (4–5 each).
   `mortgage-protection-spain` — the most under-linked commercial page at 7
   inbound links — is also the *best-positioned* commercial page (8.6
   average), which is the opposite of what a pure link-count story predicts.
   So while Part 3.7's footer-propagation bug is real and worth fixing, it is
   not, on this evidence, the reason commercial pages specifically underrank
   their own blog posts.
3. **It is not a duplication/thin-content effect** — Part 2 shows the
   commercial pages are original, adequately long (1,347–3,161 words on the
   pages sampled), well-marked-up content.
4. **Query-type/competitiveness is the more likely driver** (**Inferred**):
   "home insurance spain" is a generic head term competing against
   established comparison platforms and insurers; "no-claims history car
   insurance spain" or "foreign driving licence car insurance spain" have a
   tiny pool of pages that address them at all, so a new, well-written,
   on-topic page can rank near the top almost immediately — which is exactly
   the pattern in the SC table (positions 4.0–7.3 for the narrowest queries).

### Pattern B — narrow cross-border queries rank 2–10, generic head terms rank 55–71

Same underlying mechanism as above, more visible here: no-claims-history,
foreign-driving-licence, foreign-registered-vehicle, insurance-review, and
private-clients-spain queries are specific enough that almost no other site
has written directly to them, so a week-old, on-topic, correctly-marked-up
page can rank on relevance alone. "Health insurance spain" and "home
insurance spain" are broad enough that ranking requires competing with
pages that have had months or years to accumulate the authority signals this
cluster does not have yet at 8 days old. **This is an inference about the
competitive landscape** (not something visible in this repo), but it is the
explanation best supported by what *is* verifiable: the on-page quality,
technical SEO, and internal link count of the commercial pages are all
adequate-to-good, which rules out the code-level explanations (thin content,
duplication, noindex, sitemap gaps, broken links) one at a time, leaving
keyword competitiveness and accumulated authority as the residual explanation.

---

## 6. Prioritised recommendations

Ranked by effect-to-risk ratio. **Portugal carries ~97% of the site's clicks,
so every item states its blast radius on Portugal explicitly.**

### 1. Re-run `unify-chrome.mjs` to propagate the Spain footer column site-wide
- **Problem:** ~220 Portugal-corpus pages serve a footer with no Spain links
  (Part 3.7), which is the direct, mechanical cause of the internal-link
  silo in Part 1.5.
- **Change:** update `scripts/lib/partials.mjs`'s footer template to include
  the Spain column (and add the missing Mortgage Protection link to it), then
  run `node scripts/unify-chrome.mjs`.
- **Files affected:** `scripts/lib/partials.mjs` (source of truth), then a
  mechanical rewrite of the footer block in every consumer page under
  `public/` (~220 files, footer region only per the script's own documented
  contract: "page body content... is left alone").
- **Expected effect:** every Portugal page site-wide starts passing a small
  amount of link equity and click-through opportunity to the Spain hub and
  each commercial page, closing the silo identified in Part 1.5.
- **Risk on Portugal: low, but wide.** The change is purely additive (one
  more footer column) and the script is designed for exactly this, but it
  touches ~220 files in one commit. Before running for real: diff a handful
  of representative consumer pages (a PT blog post, an EN blog post, a
  commercial `lp-*` page) against the script's dry-run output, confirm no
  unrelated drift gets pulled in from whatever `partials.mjs` currently
  captures, and review the full diff before merging rather than trusting the
  script blind.

### 2. Fix the homepage hero-card headline
- **Problem:** the highest-traffic entry point on the site has an H1 that
  says "Insurance in Portugal and Spain" directly above a sidebar form titled
  "Find out if you're truly protected **in Portugal**" (Part 3.2) — the one
  real, confirmed instance of Portugal-specific copy contradicting
  Spain-inclusive copy on the same page.
- **Change:** make `hero-card-title` react to the visitor's `country` select
  (e.g. default to a country-neutral phrase like "Find out if you're truly
  protected" and only specialise once a country is chosen), or simply drop
  the country name from the fixed headline.
- **Files affected:** `public/en/index.html` only (one file, one string plus
  minor JS if made reactive).
- **Expected effect:** small but real conversion lift on homepage form
  starts from Spain-interested visitors; removes the one visible
  Spain-sees-Portugal-copy bug found in this audit.
- **Risk on Portugal: essentially none.** Single file, single page, no
  shared component touched, and the fallback (country-neutral copy) reads
  fine for Portugal visitors too.

### 3. Backfill `data-page-type`/`data-market`/`data-product` onto Portugal pages
- **Problem:** analytics segmentation by market/page-type currently only
  exists for Spain (Part 3.6), so any Spain-vs-Portugal GA comparison is
  measuring an instrumented cluster against an uninstrumented one.
- **Change:** add the same `<body>` data attributes to the Portugal
  commercial/blog templates, matching the taxonomy already defined for the
  Spain rollout (`scripts/lib/page-type.mjs`, referenced in
  `ar-conversion-events.js`'s comments).
- **Files affected:** Portugal page templates/generators; a body-tag
  attribute addition only, no visible or behavioural change.
- **Expected effect:** apples-to-apples market comparison in GA going
  forward; no direct SEO or conversion effect.
- **Risk on Portugal: none functionally** (data attributes are inert), but
  touches many files — same "review the diff before merging" caution as #1.

### 4. Do not touch the Spain commercial page content yet
- **Problem (anticipated, not found):** the natural instinct after "pages
  rank 55–71" is to rewrite them. Part 2 shows they are not duplicates, not
  thin, and technically clean; Part 0 shows they are 8 days old. Rewriting
  content now would reset whatever crawl/trust signal Google has already
  started accumulating on the current URLs, for a problem the evidence
  doesn't point to.
- **Change:** none — explicitly hold, and re-measure with a fresh 28-day SC
  pull no earlier than ~6 weeks post-launch (i.e., mid-October) before
  concluding the content itself needs work.
- **Risk on Portugal: none** (this is a recommendation to not act).

### 5. Consider surfacing a lightweight Spain link on blog-article nav
- **Problem:** Part 1.3 — a visitor landing on a Spain blog post (611 of the
  cluster's 926 impressions) has no navigational path to the commercial pages
  beyond in-body links and one mid-article CTA.
- **Change:** add one link (not a full menu) to the article nav bar for
  Spain-tagged posts pointing at the relevant commercial hub, mirroring the
  existing "🇪🇸 Spain | Looking for Portugal?" market indicator that's already
  there.
- **Files affected:** the blog-article template/generator for Spain posts
  only (`build-spain-articles.mjs` / the article partial it uses) — does not
  touch the Portugal blog template.
- **Expected effect:** more of the cluster's own traffic actually reaches a
  commercial page; second-order effect on rank is unproven and secondary to
  the direct conversion benefit.
- **Risk on Portugal: none** — scoped to the Spain article template, separate
  file from the Portugal equivalent by the generator's own design (Part 2).

---

## 7. What could not be determined from the code

- **Backlink profile.** Nothing in this repo shows external links into the
  Spain cluster. The "narrow queries rank well, broad ones don't" explanation
  in Part 5 assumes the broad terms face real external competition and the
  narrow ones don't — that's a reasonable inference from SERP economics, not
  something verifiable from the codebase. Ahrefs/GSC "Links" data would
  confirm or refute it.
- **Actual indexing/crawl status per URL.** Robots/sitemap/canonical are all
  clean, which rules out technical exclusion, but only Google Search
  Console's URL Inspection tool (not the repo) can confirm whether each of
  the 32 Spain URLs is actually indexed versus "crawled, not indexed" —
  material given the 8-day age.
- **Whether `unify-chrome.mjs` is safe to run today as-is.** Its own comments
  describe what it's supposed to leave alone, but this diagnosis did not
  execute it (out of scope — no production code in this pass) or diff its
  output against the current `public/` tree, so recommendation #1 above
  should be preceded by an actual dry run and file-by-file diff, not applied
  on the strength of the script's comments alone.
- **GA4/Search Console event volumes.** The event names and payloads in
  `ar-conversion-events.js` are verified from source; whether they are
  actually firing correctly in production, and what the resulting funnel
  numbers look like, requires access to the GA4 property, which this
  diagnosis did not have.
- **Why the homepage footer was updated for Spain but `unify-chrome.mjs` was
  not re-run afterward.** The repo shows the end state, not the intent — it's
  possible this was a deliberate deferral (e.g., waiting for the Spain
  content to stabilise before wiring it into every page) rather than an
  oversight. Worth a two-line question to whoever ran the Aug 28–29 merges
  before assuming it's simply a missed step.
