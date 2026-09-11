# Content audit — market expansion planning (2026-09)

**Repo:** `ownizo/adlerrochefort` (public site, `adlerrochefort.com`). **Not**
`ownizo/adlerpro` — that is the client-portal repo and was not touched.
**Branch:** `content/market-expansion-2026`, cut from `main` at `bddcc7e`
(fast-forwarded from `6f46d0d` immediately before this branch was created).
**Method:** read from the repository itself — file contents, `data/*.json`
registries the repo's own tooling produces, and `git log` — not from the live
site and not from memory of prior sessions. No `public/`, `netlify/`, or
`scripts/` file has been created, edited, renamed or deleted in this phase.
The only file this phase creates is this one.

**Status: Phase 1, items A–E only.** Items F (coverage matrix) and G (risk
list) are **blocked** — see the note at the end. Nothing below authorizes
writing any page.

---

## 0. Why this audit leans on existing repo tooling

This is not this project's first content-expansion pass. `git branch -a`
lists **~100 prior agent branches**, and a parallel Spain-market expansion
(2026-08-28 onward) is still being wired in on the branch this one was cut
from — the immediately preceding three commits on `main` were themselves
that Spain work being propagated site-wide. The repo has therefore already
built its own audit tooling for exactly this kind of question, and that
tooling is more reliable than anything I could recompute by hand in one
pass: `data/articles.json`, `data/hreflang-report.json`,
`data/generated-landing-pages.json`, `data/en-categories-proposal.json`, and
`SPAIN-DIAGNOSIS.md` (a full structural diagnosis of the Spain rollout,
committed two days ago). Sections A–E below are sourced from those files
plus direct reads of the generator scripts and a handful of representative
pages; each claim says where it came from and how fresh that source is.

---

## A. Routing and page architecture

**Verified**, from `README.md` and direct inspection.

- **No SSG, no client router.** `public/` is hand-authored, one `index.html`
  per route, published as-is by Netlify (`netlify.toml`: `publish = "public"`).
  "Routing" is the directory structure plus two mechanisms:
  - `netlify/edge-functions/` — the language router (homepage-only
    `Accept-Language` redirect for `de`/`fr` visitors to a single landing
    page each; see below).
  - `public/_redirects` and `netlify.toml` `[[redirects]]` — 301s for
    retired URLs, standardised `/seguros/{slug}/` paths, and 302 UTM short
    links (`/go/*`). Permanent redirects live in `_redirects`, campaign
    short links live in `netlify.toml`; the file itself documents this split.
- **Two ways a page comes into existence:**
  1. Hand-written HTML, edited directly.
  2. Emitted by a one-off Node generator script in `scripts/` (e.g.
     `build-spain-cluster.mjs`, `build-car-cluster.mjs`,
     `generate-nl-cluster.mjs`, `generate-blog.mjs`) that reads a co-located
     `*.data.mjs` or `data/*.json` content file and writes finished HTML.
     Generators are **not re-run automatically** — they are "operational
     scripts run by hand" per `README.md`'s own description of `scripts/`.
     A generator script's job is finished once its output HTML is committed;
     editing content later generally means editing the HTML directly, not
     re-running the generator (`build-spain-cluster.mjs`'s header explicitly
     warns against retrofitting an existing generator to branch on a new
     country, for exactly this reason).
- **Current route count: 330 `index.html` files**, confirmed by direct count
  today (matches `SPAIN-DIAGNOSIS.md`'s figure from two days ago — the
  intervening commits edited chrome, they did not add or remove pages):

  | Segment | Routes |
  |---|---|
  | `/en/` (includes `/en/blog/`) | 223 |
  | `/` root PT blog (`/blog/`) | 71 |
  | `/seguros/` (PT commercial) | 13 |
  | `/nl/` | 13 |
  | `/de/` | 1 |
  | `/fr/` | 1 |
  | PT-root institutional/legal (`private-clients`, `termos-e-condicoes`, `politica-de-privacidade`, `obrigado`, `seguros-empresas-lagos`, `alterarmediador`, `descarregar`, homepage) | 7 |

- **`/nl/` is a real, standalone Dutch-**language** cluster** (not English
  content for a Dutch audience) — confirmed by slug content: `woonverzekering-
  portugal` (home insurance), `zorgverzekering-portugal` (health insurance),
  `s1-formulier-cak-portugal` (the S1/CAK healthcare-transfer form),
  `auto-importeren-portugal-verzekering` (car import),
  `zzp-beroepsaansprakelijkheid-portugal` (self-employed professional
  liability), `schadevrije-jaren-meenemen-portugal` (transferring no-claims
  years), `alojamento-local-verzekering-portugal` (holiday-let insurance),
  `bosbrandrisico-woonverzekering-portugal` (forest-fire risk),
  `niet-gelegaliseerde-woning-verzekeren-portugal` (unlegalised-home
  insurance), `uitschrijven-nederland-zorgverzekering-portugal`
  (deregistering Dutch health insurance) — 13 pages total, built by
  `scripts/generate-nl-cluster.mjs` from `scripts/nl-cluster.data.mjs` and
  `scripts/nl-content/{business,health,housing,hub,motor,shared}.mjs`.
  **This is directly relevant to an "NL market" item in any expansion plan:
  there is already a real, generator-backed Dutch cluster to check against
  before assuming a topic is missing.**
- **`/de/` and `/fr/` are not sections, they are single pages.** Confirmed in
  the language-router edge function: a browser with `Accept-Language: de` or
  `fr` is redirected to one dedicated landing page each, nothing more. There
  is no German or French cluster analogous to `/nl/` or the Spain cluster to
  check content against — anything German- or French-language would be
  close to a greenfield build, not an expansion of an existing tree.
- **Metadata/frontmatter has two different homes depending on how the page
  was made:**
  - Generator-built pages (blog articles, Spain cluster, NL cluster) carry
    their metadata in the co-located data file, not inline. For blog
    articles specifically, `data/articles.json` is the registry (see B) —
    fields present on every entry: `slug`, `lang`, `status`, `url`,
    `category`, `tag`, `title`, `metaTitle`, `description`, `excerpt`,
    `image`, `imageGradient`, `imageAlt`, `published`, `modified`,
    `dateLabel`, `readingTime`, `featured`, `translationOf` (the field the
    hreflang system keys off — see D).
  - Hand-authored commercial pages carry their metadata inline in the
    `<head>` (`<title>`, `<meta name="description">`, canonical `<link>`,
    JSON-LD blocks) and, where instrumented, on `<body data-page-type=""
    data-market="" data-product="">`. The taxonomy for `data-page-type` is
    centralised in `scripts/lib/page-type.mjs`: `homepage`, `market_hub`,
    `commercial_product`, `situation_guide`, `informational_article`,
    `trust_page`, `conversion_utility`. Its own comment says analytics and
    checker scripts key off these exact strings, so a new page type is a
    small, deliberate addition there, not a free-text field.

## B. Full page inventory

A hand-built 330-row table would be lower-quality than the registry the repo
already maintains and keeps in sync with the generators. Rather than
duplicate it here (and risk it drifting from the source), this section
records **what the authoritative sources are, their current counts, and how
stale each one is** — the actual per-row data should be read live from these
files rather than copied into a second, staler copy inside this report:

| Source | Covers | Rows | Last regenerated |
|---|---|---|---|
| `data/articles.json` (`.articles`) | All blog posts, PT/EN/NL | pt: 72, en: 156, nl: 11 (239 total) | 2026-08-29 (git) — **12 days stale as of today**, will not include anything merged since, e.g. the Spain 19 blog posts if they were added to a different registry (see note below) |
| `data/generated-landing-pages.json` | Generator-built commercial/landing pages only | 8 (PT `/seguros/*` cluster + 1 EN TVDE page) | 2026-08-29 |
| `SPAIN-DIAGNOSIS.md` §1.1–1.2 | Full Spain cluster (8 commercial + 20 blog/category) | 28 tracked + 4 more | 2026-09-09 |
| Direct `find public -name index.html` | Every route, no metadata | 330 | today |

**A gap worth flagging, not silently closing:** `data/articles.json` records
239 blog posts, but direct filesystem count is 223 EN routes (of which 157
are `/en/blog/*` per `SPAIN-DIAGNOSIS.md`) + 71 PT `/blog/*` = 228 blog-shaped
routes before counting category/pagination pages, and the Spain cluster adds
19 more EN blog posts on top of that per `SPAIN-DIAGNOSIS.md` — meaning the
Spain blog posts most likely are **not** in `data/articles.json`'s 156 EN
count (156 + 19 ≈ 175, not matching 157 either way this is sliced). I have
not reconciled this discrepancy — it needs `scripts/build-spain-articles.mjs`
read against `data/articles.json` directly, which I have not yet done. Flag
this rather than presenting a number I have not verified as internally
consistent.

Commercial/service pages outside the two generator registries above (i.e.
most of the ~66 EN top-level pages and the Spain 8) are hand-authored and
have no single JSON index; the fastest reliable path to a full row-by-row
table, if wanted, is a small script that reads `<title>`, `<meta
name="description">`, and `<body data-*>` out of every `public/**/index.html`
directly plus `git log -1 --format=%cd` per file for "last modified" — I have
not built or run this yet because items F/G (which would consume that table)
are blocked; no point producing a 330-row table before knowing which rows
the actual plan needs scrutinised.

## C. Category/taxonomy system (EN blog)

**Verified**, from `data/articles.json`'s `categories.en` array and
cross-checked against `data/en-categories-proposal.json`:

EN blog categories currently defined: `health-insurance`, `home-property`,
`motor`, `business-liability`, `personal-family`, `holiday-lets-hospitality`,
`valuables-collections`, `marine`, `moving-to-portugal`, plus four Spain-only
categories added 2026-08-28: `spain-property`, `spain-car`, `spain-health`,
`spain-life`, `spain-private-clients`.

A post is assigned to a category via the `category` field on its
`data/articles.json` entry (singular, not multi-select — confirmed no post
sampled carries more than one). Each category has a corresponding
`/en/blog/category/{slug}/` archive page (and paginated `/page/N/` variants
for categories with more than roughly 10 posts — `home-property` runs to
`page/4/`). `data/en-categories-proposal.json` (14 Aug, predates the current
live set) looks like the working file that proposed this taxonomy before it
shipped — worth treating as historical, not current, if referenced.

**PT categories** are a separate, shorter list defined in the same file's
`categories.pt`: `seguros-auto-tvde`, `hotelaria-turismo`,
`seguros-empresariais`, `habitacao-particulares`, `condominios`,
`seguros-saude`, `tecnologia-parcerias` — each optionally linked to a
`/seguros/{slug}/` landing page via a `landing`/`landingLabel` pair on the
category entry, which is a nice piece of infrastructure: it's how a blog
category and a commercial page declare themselves the same topic.

**NL categories exist as a key (`categories.nl`) but I have not yet read its
contents** — noting the gap rather than guessing.

## D. Internal linking and hreflang

**Verified from `data/hreflang-report.json`** (generated by
`scripts/hreflang.mjs`, **dated 2026-08-24 — this predates the Spain launch
(08-28) and the just-merged footer propagation (09-11), so treat the exact
counts as directional, not current; re-running `scripts/hreflang.mjs` would
refresh it and cost nothing since it's a read-only report generator**):

- 268 HTML files scanned, 83 carry hreflang tags, 28 confirmed article pairs
  (a translated counterpart genuinely exists on disk), 0 broken hreflang
  targets, 0 unilateral declarations, 6 `x-default` pages.
- **Hreflang is computed per page from what actually exists on disk, not
  hardcoded to language homepages.** `scripts/hreflang.mjs`'s own logic (per
  `SPAIN-DIAGNOSIS.md` §4, cross-checked against the report's `note` field)
  declares an alternate only when a real translated counterpart file exists;
  a page with no translation gets no hreflang block at all rather than a
  fallback to the homepage. The report explicitly calls "monolingual"
  pages (104 EN-only, 12 PT-only) **the intended state, not a defect** — so
  the earlier premise that hreflang might be defaulting to language
  homepages is not what the tooling does; it fails closed (no tag) rather
  than wrong (wrong tag).
- **Confirmed deliberately absent on Spain pages specifically**:
  `build-spain-cluster.mjs`'s own header states Spain pages carry no
  hreflang because they are market variants of English-language intent, not
  language translations of a Portuguese page — hreflang signals language
  equivalence, not market equivalence, and the site's own generator
  correctly declines to misuse it. This is the right call technically and
  is worth carrying into any new market cluster: **a new English-language
  page written for a US or Dutch/German audience is a market variant, like
  Spain, not a translation** — it should not get hreflang to a Portuguese
  or Dutch-language page just because the audience is associated with that
  country.
- **Chrome/nav:** the four-column mega menu (Overview / Personal / Property
  / Private Clients per country) lives in exactly one file,
  `public/en/index.html`, and is not propagated anywhere else by design —
  confirmed by `scripts/unify-chrome.mjs`'s own comment, which calls out
  that the homepage nav is deliberately never copied to other pages. Footer
  propagation, by contrast, **is** supposed to be universal:
  `scripts/unify-chrome.mjs` treats `public/index.html`, `public/en/index.html`
  and `public/nl/index.html` as the three source-of-truth pages and
  overwrites the footer region only (leaving page body content alone) on
  every other page. `SPAIN-DIAGNOSIS.md` found this had fallen out of sync
  for two weeks after the Spain footer column was added by hand; the three
  commits immediately preceding this branch (`c83ea74`, `f9be4a2`, `31249cf`)
  are that catch-up being applied. **I have not re-verified that the
  propagation is now fully consistent** — that would mean diffing the
  footer block across a sample of consumer pages, which I have not done in
  this pass.

## E. Shared components a new page must reuse

Because there is no component framework, "shared component" means one of:
a chrome partial `unify-chrome.mjs` propagates, a markup pattern a generator
script emits identically across its outputs, or a JS module referenced by
`data-*` attributes. Confirmed pieces, from `scripts/lib/` and
`js/ar-conversion-events.js`/`js/ar-quote-form.js` (referenced in
`SPAIN-DIAGNOSIS.md` §3.1, §3.6 — not yet independently re-opened by me this
pass):

- **Quote/lead form** — `lp-form-section` on commercial pages: name, email,
  phone, "where do you live", product-specific "what do you need help with"
  and "your situation" selects, free-text message. Netlify Forms with a
  honeypot. Hidden fields (`source`, `country`, `landing_page`, `source_url`)
  are page-specific and populated by `js/ar-quote-form.js`, which implements
  first-touch attribution via `sessionStorage`. A second form family,
  `hero-card-form` (homepage only) and the `/en/insurance-review/` review
  form, is the only place with a live Country/Market `<select>` rather than
  a hardcoded `country` value — `/en/insurance-review/` pre-fills it from a
  `?market=` URL parameter, which is how existing cross-sell CTAs link into
  it.
- **FAQ / schema** — `FAQPage` JSON-LD confirmed present on Spain commercial
  pages, alongside `Service` (with `areaServed`), `provider` (InsuranceAgency
  + ASF registration number + PT address), and `BreadcrumbList` matching the
  real hub hierarchy. This is the schema shape a new commercial page should
  match — I have not yet opened a non-Spain, non-Portugal example to confirm
  the same four blocks are the universal pattern rather than a Spain-specific
  addition.
- **Related reading / author box / tables** — referenced in
  `SPAIN-DIAGNOSIS.md` (in-body "Related reading" cards, a mid-article CTA)
  but I have not yet opened the actual partial/generator code for these, so
  I can't yet say where the canonical version lives or what fields it takes.
  Flagging as **not yet verified** rather than describing it from inference.
- **Analytics instrumentation** — `js/ar-conversion-events.js` fires to
  `gtag()` keyed off `<body data-page-type data-market data-product>`.
  Confirmed present on Spain pages, confirmed **absent** on at least one
  Portugal page checked (`car-insurance-portugal`) as of two days ago. Any
  new market page should carry these attributes from the start — the gap
  identified in Spain (retrofitting them onto Portugal afterward) is a
  cleanup, not something worth repeating.

**Not yet done, flagging rather than skipping silently:** I have not read
`scripts/lib/chrome.mjs`, `scripts/lib/partials.mjs`, `scripts/lib/landing.mjs`,
or `scripts/lib/blog-parts.mjs` in full — only referenced their existence and
role via `SPAIN-DIAGNOSIS.md` and their filenames. Before Phase 2 writes a
single page, these need a direct read so a new page's markup is built from
the actual current partial, not from a two-day-old secondary description of
it.

## F. Coverage matrix for the four topics in the plan — BLOCKED

**Cannot be produced.** The task instructions describe a list of candidate
pages ("Every page in the plan below is a CANDIDATE") and later refer to
"the four topics below" and "each candidate page in the plan" for this exact
matrix — but no plan, topic list, or candidate-page list was included in
the message I received. The message also ends mid-sentence, inside the
compliance-constraints section:

> In German use "Versicherungsvermittler", not "Makler"; in French
> "intermédiaire

with the rest of that sentence (and presumably the French-language
equivalent constraint, and anything after it) missing.

Rather than invent a plausible-looking list of "four topics" for US/NL/DE
and run the coverage check against my own guess — which is exactly the
failure mode this task's brief is explicitly guarding against — I've stopped
here. **Please resend the plan section** (the actual candidate pages/topics
for the US, NL and DE markets) and the rest of the compliance paragraph, and
I'll complete F and G against it directly; A–E above don't depend on it and
should still be a useful starting point regardless of what the final plan
contains.

## G. Risk list — partially blocked, one item found independently

Can't be completed without the plan (a real risk list has to be checked
against actual candidate slugs/keywords). One risk surfaced independently
while reading for A–E, unrelated to the missing plan, and important enough
to flag now rather than hold for later:

**The compliance instruction in the task conflicts with the repo's own
current, deliberately-corrected terminology standard.** The task states (in
the part received): *"In German use 'Versicherungsvermittler', not
'Makler'."* `scripts/lib/terminology-rules.mjs` — which its own docblock
describes as "the single source of truth," written specifically to resolve
a prior disagreement between two enforcement scripts — states the opposite:

> "the noun is kept in every language: broker (EN), courtier (FR),
> **Versicherungsmakler/Makler (DE)**, mediador de seguros (PT),
> verzekeringsagent/verzekeringsbemiddelaar (NL)."

and its rule tables actively rewrite German copy *toward* "Makler"/
"Versicherungsmakler" (e.g. `'Unabhängiger Versicherungsmakler' →
'Versicherungsmakler'`), the reverse of what the task instructs. Same
pattern for French: the task's cut-off sentence was headed toward
"intermédiaire," while the repo's table standardises on "courtier" and
explicitly avoids "intermediary"/"intermédiaire" as the noun for
Adler & Rochefort's own self-description, for both English and French.

This is a regulated-terminology question — "Makler" and
"Versicherungsvermittler" are not interchangeable synonyms under German
insurance-mediation law (they describe different registration categories),
and the same is true for "courtier" vs. "intermédiaire" in French usage.
I am not resolving this myself in either direction: not by silently
following the task's instruction (which would put newly written pages out
of step with the site's own just-corrected standard, re-introducing the
exact drift `terminology-rules.mjs` was written to fix), and not by
silently following the repo (which would override an explicit "hard
compliance constraint... do not soften" instruction on a genuinely
regulatory point). **This needs your explicit call before any DE or FR copy
is written**, and ideally the full original sentence, since I only have it
up to the point it was cut off and don't know if there's a stated reason
for the discrepancy (e.g. the repo's rule predates a since-changed legal
read, or the task's instruction is the one that's stale).

---

## What I need back before Phase 2

1. **The plan** — the actual list of candidate pages/topics for the US, NL
   and DE markets ("the four topics" referenced in the brief).
2. **The rest of the compliance-constraints paragraph**, starting from
   "in French 'intermédiaire…'" — and a decision on the Makler/
   Versicherungsvermittler and courtier/intermédiaire conflict above.

Everything in A–E is safe to treat as current groundwork regardless of how
those two land. Nothing has been written to `public/`, `netlify/`, or
`scripts/`; the only new file on this branch is this one.
