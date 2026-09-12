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

---

## Block 1 report — partner list

Approved list applied: Hiscox, Allianz, Zurich, MGEN, Asisa, April, Chubb,
now defined once in `data/partners.json`.

**Files changed** (4 commits):
- `data/partners.json` — new, the single source of truth.
- `scripts/lib/landing.mjs` — `PARTNERS` now reads the JSON file instead of
  a hardcoded array.
- `scripts/apply-partner-list.mjs` — new, one-off sync script; mechanically
  rewrote 11 hand-authored pages carrying the same `.partners-logos`
  markup the generator emits but that aren't themselves generator output
  (`public/index.html`, `public/private-clients/index.html`,
  `public/en/insurance/tvde/index.html`, and 8 of the 9 `public/seguros/*`
  pages — `responsabilidade-civil-profissional` included, it uses the same
  markup despite not being in `data/generated-landing-pages.json`).
- `public/en/index.html` — hand-edited (its partner strip links three
  names to editorial blog articles, which the mechanical pass wasn't safe
  to touch); removed Médis and Liberty Mutual, added Asisa and Chubb, kept
  the Allianz/Zurich/Hiscox article links.
- `public/nl/index.html`, `public/de/index.html`, `public/fr/index.html` —
  hand-edited. Insurer names on these three pages are hardcoded into prose
  (hero-trust line, brand-chip row, feature-card copy, FAQ answers, both
  meta descriptions) rather than sourced from `landing.mjs`, so each
  occurrence needed a direct edit — 11 on NL, 8 on DE, 8 on FR. Bupa (the
  only non-approved name on these three pages) is now at zero occurrences
  site-wide; MGEN and Hiscox take its place in the affected sentences.
- `public/de/index.html`, `public/fr/index.html` — separately, added the
  working-language disclosure block (`#sprachpolitik` / `#politique-
  linguistique`), mirroring `public/en/index.html`'s `#ar-language-policy`
  and `public/nl/index.html`'s fuller `#taalbeleid` version. Both pages
  promised advice, explanations and claims handling entirely in
  German/French (hero subtitle, meta description) with no disclosure
  anywhere on the page before this.

**Where the list was hardcoded** (found by direct grep, not assumed):
`scripts/lib/landing.mjs` (now fixed) and, as prose rather than a list
variable, the five homepages above. No other `data/*.json` file, Netlify
function, or script held a duplicate copy.

**Not changed, and not a removal of the list's intent — an editorial
reference left alone as instructed:** the ~80–130 files (per insurer) that
mention Hiscox, Allianz, Zurich, Médis, Liberty Mutual, AdvanceCare or
similar in blog-article body text (e.g. `hiscox-home-insurance-portugal`,
`medis-health-insurance-portugal`, `liberty-mutual-home-insurance-
portugal`). These are named-insurer guides, not partnership claims, and
the task's own scope boundary says leave them alone.

### Found, not resolved: "Innovarisk" is not a simple removal — flagging per the stop conditions

`Innovarisk` was on the old 5-name list, is not on the new 7-name list, and
so reads at first like a straightforward removal alongside Médis/Liberty
Mutual/Bupa/AdvanceCare. It **is not one**, and I did not touch it. Direct
reads of every remaining occurrence (9 files, all still present) show it
is not a partner-logo decoration anywhere — it is described, in running
commercial-page copy, as the **specific mechanism** by which two live
product lines are delivered:

1. **Non-standard/high-value property placement.** `public/en/private-
   clients/index.html:205-211` and `public/en/blog/liberty-mutual-home-
   insurance-portugal/index.html` (a 2026-dated article, not a legacy
   leftover) describe "Liberty Mutual, through Innovarisk" as the current,
   named route to specialty underwriting capacity for non-conventional
   construction, mixed use, short-term letting/Alojamento Local and
   properties with a prior claims record — explicitly contrasted with
   "Liberty Seguros" (the unrelated retail brand, since sold to Generali).
2. **Professional-liability niches.** `public/seguros/responsabilidade-
   civil-profissional/index.html:267-268`, `public/seguros/rc-profissoes-
   especificas/index.html:265-266`, `public/seguros/responsabilidade-
   civil-eventos/index.html:217`, and two articles
   (`seguro-responsabilidade-civil-naturopatas`,
   `seguro-responsabilidade-civil-acupuntores`) all state that access to
   specialised cover for non-conventional therapies and specific
   professions comes "através da parceria com a Innovarisk" (through the
   partnership with Innovarisk).

This is squarely one of the three stop conditions in the brief: **a
factual claim cannot be written without inventing something.** If
Innovarisk is genuinely removed as a partner, the pages above lose their
stated mechanism for delivering those two product lines, and I have no
truthful replacement to put there — I don't know which, if any, of the
seven approved names (Hiscox, Allianz, Zurich, MGEN, Asisa, April, Chubb)
underwrites non-standard high-value property or takes on naturopath/
acupuncturist professional-liability risk, and inventing that pairing is
exactly what I'm told not to do. It also intersects directly with block
5.3 below (professional liability — therapies and professions), which
asks me to check whether this exact page already covers the topic before
writing anything new — it does, and its "how we access this cover"
explanation rests entirely on the relationship in question.

**What I need:** is "Innovarisk" in scope for this list at all, or is it a
different kind of relationship (a specialist MGA/capacity channel, not a
"partner we display a logo for") that the new 7-name list was never meant
to touch? If it does need to change, what replaces it as the stated
mechanism on those five pages — I can write the copy once I'm not
inventing the insurer.

**Holding, not blocking everything downstream:** block 5.3's coverage-
matrix entries below are written and are true regardless of how this
resolves (the pages EXIST either way). I have not written any new
professional-liability copy that would depend on the answer.

---

## Block 2 — the B discrepancy, reconciled

**Cause, confirmed by direct comparison: there is no discrepancy. The
registry is internally consistent — I miscounted in Phase 1 by not reading
its own `status` field before declaring a mismatch, and caught this myself
mid-fix, before committing anything.**

154 real article directories exist under `public/en/blog/` (Spain's 19
included). All 154 carry `"status": "published"` in `data/articles.json`
and are correctly registered. The registry's total of 156 is exactly
154 + 2 — and those 2 are not drift, they're a deliberate design I hadn't
noticed: `data/articles.json` uses `status` as a real taxonomy
(`published` / `draft` / `merged`), and the 2 extra rows both carry
`"status": "merged"` plus a `mergedInto` field pointing at the article's
current slug:

| Old slug (`status: merged`) | `mergedInto` | Matches `public/_redirects`? |
|---|---|---|
| `unoccupied-property-clause-portugal` | `/en/blog/second-homes-empty-months-unoccupancy-clause-voids-cover/` | Yes, 301, exact match |
| `solar-panels-ev-chargers-home-insurance-portugal` | `/en/blog/solar-panels-home-batteries-ev-chargers-policy-modern/` | Yes, 301, exact match |

So the registry keeps a tombstone record for a merged article on purpose —
old slug, `mergedInto` pointer, matching the live redirect — rather than
silently deleting history. (The same field also surfaced 2 `status: draft`
entries, `fiscal-representation-property-owners-portugal` and
`nif-fiscal-representation-d7-visa-health-insurance` — exactly the two
pages `netlify.toml` noindexes as unpublished drafts, which cross-checks
the taxonomy as accurate elsewhere too.)

**What actually happened here, stated plainly:** I ran a Python one-off
that deleted the two `merged` rows from `data/articles.json`, treating
them as leftover duplicates without reading past the `slug` field. The
diff (44 deletions, reviewed before committing) showed `"status": "merged"`
and `"mergedInto"` on both removed entries, which is what caught the
mistake — I reverted with `git checkout -- data/articles.json` immediately
and nothing was committed. Leaving this paragraph in rather than quietly
fixing my own workflow, since the task record should show what actually
happened, not a tidied version of it.

**Fix applied: none needed.** `data/articles.json` is unchanged from
`main`. My original Phase 1 flag was itself the error, now closed.

**Checked PT and NL with the corrected method (reading `status`, not just
counting slugs) before writing anything about them:** the PT registry
(`articles.pt`, 72 rows) has the same 52 on-disk rows correctly registered,
plus 20 rows not on disk — all 20 accounted for, 18 `status: draft`
(planned/unpublished, not yet built) and 2 `status: merged`. No orphaned or
inaccurate rows. NL's registry (11 rows) matches its 11 published articles
exactly. Both clean; nothing to fix in either.

---

## Status update — both original blockers resolved, work resumed

*(This section originally said Phase 2 was blocked on the missing plan and
the terminology conflict. Both arrived in the follow-up message. Recorded
here rather than deleted, so the branch history explains why work paused
and then resumed.)*

1. **The plan** arrived as block 5 of the follow-up (candidates 5.1–5.8
   below). Coverage matrix and risk list follow in the next section.
2. **The terminology conflict** was resolved by the follow-up message
   itself: `scripts/lib/terminology-rules.mjs` is confirmed authoritative
   and frozen (German "Versicherungsmakler/Makler", French "courtier").
   Not revisited, not re-proposed.

One new item is open — the Innovarisk finding immediately above — and is
being tracked the same way: flagged, not guessed at, not blocking the rest
of the plan.

---

## Block 3 — coverage matrix (1F) and risk list (1G)

Method: slug/title/body search per candidate, conservative — PARTIAL when a
topic exists but not as its own resource, EXISTS only when a page already
does the job the candidate describes.

### 5.1 Proportional rule / underinsurance (EN)

| Candidate | Status | Path | Note |
|---|---|---|---|
| Pillar (proportional rule, partial + total loss examples, retail vs individually-underwritten wording) | **PARTIAL — extend, don't duplicate** | `/en/blog/outdated-insured-values/` | 492 lines. Already has: the rule explained, a worked **partial**-loss example, over-insurance, a revaluation-cadence table, indexation limits, FAQ schema. Missing: a **total**-loss worked example (demolition/fees/VAT/alternative accommodation), and the retail-vs-individually-underwritten-wording distinction the brief asks for. |
| Total-loss settlement mechanics (demolition, fees, VAT, alternative accommodation) | MISSING | — | Not covered as a worked example anywhere in EN. |
| Setting the rebuild value | PARTIAL | `/en/blog/outdated-insured-values/` §"How often each class actually needs revaluing" | Table gives cadence, not method. A dedicated "how to actually get to the number" satellite is still missing. |
| Waiver of average | PARTIAL | `/en/blog/outdated-insured-values/` (one paragraph) | Named and explained in one paragraph; not its own resource. |
| Bank insuring to loan amount rather than rebuild cost | MISSING | — | No EN page addresses this specifically; the mortgage-protection pages found are about life cover, not the sum-insured-vs-loan-amount problem. |
| Disputing the sum insured (perito de parte, CIMPAS, Livro de Reclamações, ASF) | MISSING | — | Zero matches for any of the four named mechanisms anywhere in `public/en/`. |
| Named adjacent pages (`luxury-home-insurance-portugal`, `us-buyers-property-cover-portugal`, `hiscox-home-insurance-portugal`, `liberty-mutual-home-insurance-portugal`, `best-home-insurance-portugal-2026`) | EXISTS, unaffected | — | All confirmed present; the new satellites should link to these, not replace them. |

**Decision, logged rather than assumed:** no new pillar page. Extending
`outdated-insured-values` with a "total loss" section and a "retail vs.
individually underwritten" section risks the least (one edit to an
existing page, explicit "your yes required page by page" per the
standing rule — **holding that edit for your go-ahead**, not making it
unasked). Writing the two clearly-missing satellites (rebuild-value method,
disputing the sum insured) as new pages linking into the existing pillar
does not require that same permission and is lower risk. Bank-insures-
to-loan-amount is genuinely new ground; no existing page to collide with.

### 5.2 MGEN health

**Confirmed: no dedicated MGEN page in any language** — zero `<title>`
matches site-wide.

| Candidate | Status | Path | Note |
|---|---|---|---|
| Pillar (no questionnaire, no age limit, no pre-existing exclusion, honest waiting-period trade-off) | MISSING (the facts exist, the page doesn't) | — | See below — the underlying facts are already established and consistent across 3 live pages. |
| — existing EN source | EXISTS | `/en/blog/pre-existing-conditions-health-insurance-portugal/` | States MGEN by name: mutual/membership-based acceptance, no medical questionnaire, no exclusion, **365-day waiting period** for the pre-existing condition once covered. |
| — existing NL source (age angle) | EXISTS | `/nl/zorgverzekering-portugal/#mutualista`, `/nl/s1-formulier-cak-portugal/` | Same mechanism, framed around the regular market's maximum entry age rather than pre-existing conditions. Internally consistent with the EN page — same "membership not individual risk-selection" explanation. |
| — existing DE source | MISSING | — | Zero MGEN content on `/de/` beyond the partner-strip mention added in Block 1. |
| Declined → what's left | MISSING | — | |
| Cover at 70 and 75 | PARTIAL | `/nl/zorgverzekering-portugal/`, `/nl/s1-formulier-cak-portugal/` | Covered for NL audience via the age angle; no EN equivalent. |
| Acceptance-not-price comparison | MISSING | — | |
| Waiting periods product by product | PARTIAL | pre-existing-conditions page states the 365-day figure once, for pre-existing conditions specifically; not a full product-by-product table. |
| Moving with a chronic condition | PARTIAL | Same EN page covers the core mechanism; not written as its own "moving with X" narrative. |
| Link insertion into pillar from the two existing articles | Per brief — link only, no rewrite | Applies to `pre-existing-conditions-health-insurance-portugal` (EN) and `zorgverzekering-portugal`/`s1-formulier-cak-portugal` (NL) once the pillar exists. |

**Risk:** none found — the 365-day figure and the "membership not
individual underwriting" mechanism are already asserted identically across
3 live pages in 2 languages, so the pillar can reuse them as established
fact rather than needing fresh `[VERIFY]` tags for the core mechanism.

### 5.3 Professional liability — therapies and professions — **on hold, Innovarisk**

| Candidate | Status | Path |
|---|---|---|
| EN pillar | **EXISTS, strong** | `/en/blog/liability-insurance-complementary-therapies/` — 1,115 lines. Covers Lei 71/2013 + Lei 45/2003, the six regulated practices, ACSS licensing, and explicitly addresses yoga's unregulated-but-exposed status. |
| PT pillar-equivalent | EXISTS | `/seguros/responsabilidade-civil-profissional/`, `/seguros/rc-profissoes-especificas/` |
| Acupuncture/TCM | EXISTS (PT only) | `/blog/seguro-responsabilidade-civil-acupuntores/` |
| Naturopathy | EXISTS (PT only) | `/blog/seguro-responsabilidade-civil-naturopatas/` |
| General "non-conventional therapies" | EXISTS (PT only) | `/blog/seguro-responsabilidade-civil-terapeuticas-nao-convencionais/` |
| Osteopathy/chiropractic, homeopathy, yoga, Pilates/Tai Chi, massage/spa, retreat organisers, personal trainers, psychologists/psychotherapists, nutritionists | MISSING in every language | — |
| NL/DE versions of `liability-insurance-complementary-therapies` | MISSING | Confirmed, as the brief asked. |
| Reference table of which PT professional bodies require cover | MISSING | — |

**One citation discrepancy worth a second look, not something I'm
correcting myself:** the existing EN pillar cites **"Article 5"** of Lei
71/2013 as establishing the insurance requirement. The brief pre-approves
**"art. 10.º n.º 1"** (paired with Portaria n.º 200/2014's EUR 150,000
minimum) for the same requirement. These may both be correct — Article 5
could be the general licensing clause, Article 10º n.º1 the specific
insurance-minimum clause — but I haven't read the statute itself to
confirm, and I'm not editing the existing page on my own judgment either
way. Any *new* copy I write uses the brief's citation (art. 10.º n.º1 +
Portaria 200/2014) as instructed; flagging the existing page's "Article 5"
in case it's worth a look separately.

**Not writing anything for 5.3 this pass** — see the Innovarisk finding
above. The pillar and 3 PT satellites all state the specialised cover is
accessed "through the partnership with Innovarisk"; I can't write new
satellite pages (or extend the pillar) for the same product line without
either repeating a claim I've been told may be wrong, or inventing a
replacement mechanism.

### 5.4 US audience hub

| Candidate | Status | Path |
|---|---|---|
| Hub | MISSING | Confirmed — no `american`/`usa`/`united-states`-named page exists outside blog posts; nothing plays the "Overview" role Spain's `expat-insurance-spain` does. |
| `us-buyers-property-cover-portugal` | EXISTS | Strong, per the brief's own list. |
| `property-title-risk-portugal` | EXISTS | |
| `health-insurance-portugal-americans` | EXISTS | |
| `health-insurance-portugal-usa` | EXISTS | |
| US umbrella vs. Portuguese liability limits | MISSING | |
| US driving record transfer | MISSING | (Spain has a "no-claims-history" article; nothing about a US record specifically, for either country.) |
| Claiming in Portugal vs. a US adjuster | MISSING | |
| D7/D8/Golden Visa owners taking cover pre-residency | MISSING | Visa-linked health-insurance content exists generically; nothing framed around US applicants pre-residency specifically. |

**Risk:** low. No existing hub-shaped page to collide with, four solid
existing articles to link from once the hub exists, four genuinely new
satellites.

### 5.5 DE tree — confirmed greenfield

`/de/` is one page (Block 0/A). Every item in the brief's list — hub,
Abmeldung/GKV/PKV + Anwartschaftsversicherung, S1 for pensioners,
Vorerkrankungen, Unterversicherung/Proportionalregel, Privathaftpflicht,
Erdbebenversicherung, SF-Klasse transfer, car import/ISV, Waldbrandrisiko,
unlegalised-property insurance, Alojamento Local, Berufshaftpflicht — is
**MISSING** in German. None collide with anything existing (there's
nothing in German to collide with). Two items are explicitly designed to
link into pillars from other blocks: Vorerkrankungen → 5.2's MGEN pillar,
Unterversicherung/Proportionalregel → 5.1's `outdated-insured-values`.
Berufshaftpflicht is the German label for the same professional-liability
line as 5.3 — **on hold for the same Innovarisk reason**, not because the
German content itself has a problem.

Scale note for the writing plan: the 13 existing NL pages this is meant to
mirror run 719–757 lines each (full page, chrome included). A
same-fidelity 13-page German cluster is a large body of work — see the
Block 5 writing report below for what's actually been written this pass
versus queued.

### 5.6 NL tree — extend only

| Candidate | Status | Path | Note |
|---|---|---|---|
| evenredigheidsregel bij totaal verlies (proportional rule) | MISSING as own page | — | No NL equivalent of `outdated-insured-values` at all yet. |
| aardbevingsdekking (earthquake cover) | PARTIAL | `/nl/woonverzekering-portugal/`, `/nl/verzekeringen-portugal/` | Mentioned, not a dedicated resource — `bosbrandrisico-woonverzekering-portugal` (forest fire) is the closest existing single-peril deep-dive to mirror the structure of. |
| bestaande aandoening (pre-existing condition) | PARTIAL | `/nl/zorgverzekering-portugal/#mutualista` | Covers the mechanism via the age angle; a pre-existing-condition-specific framing (mirroring the EN page in 5.2) is still missing. |
| AVP vs Portuguese liability | MISSING | — | |
| beroepsaansprakelijkheid voor therapeuten en yogadocenten | MISSING | — | **On hold — same Innovarisk reason as 5.3.** |
| ORV bij een Portugese hypotheek (mortgage life) | MISSING as own page | `/nl/woonverzekering-portugal/`, `/nl/niet-gelegaliseerde-woning-verzekeren-portugal/`, `/nl/bosbrandrisico-woonverzekering-portugal/` mention "hypotheek" in passing (building-insurance context, not mortgage-life) | |
| VvE (condominium) | PARTIAL | `/nl/woonverzekering-portugal/` | Mentioned, no dedicated page. |
| leegstandsclausule (vacancy clause) | MISSING | — | EN has the underlying facts (`second-homes-empty-months-unoccupancy-clause-voids-cover`, formerly `unoccupied-property-clause-portugal`) to translate the *concept* from — not the text itself. |
| boot verzekeren (boat) | MISSING | — | |

**Risk:** none found beyond the shared Innovarisk hold. "Extend only,
change nothing existing" is straightforward here since 6 of 8 candidates
have no dedicated NL page to collide with.

### 5.7 FR

Per the brief: no pages this round. Clone plan queued below in the Block 5
report rather than written now.

---

## Block 5 — writing report

**Written this pass (5.1, 5.2 — "write in this order" honoured):**

| Page | Slug | Status |
|---|---|---|
| Disputing a property claim settlement (perito de parte, CIMPAS, Livro de Reclamações, ASF) | `/en/blog/disputing-sum-insured-portugal/` | Published, registered, linked from/to `outdated-insured-values` and `claims-support` |
| Bank's insurance requirement vs. rebuild cost | `/en/blog/mortgage-sum-insured-vs-rebuild-cost-portugal/` | Published, registered, linked from/to `outdated-insured-values` and `mortgage-life-insurance-foreign-buyers-portugal` |
| MGEN health insurance pillar | `/en/blog/mgen-health-insurance-portugal/` | Published, registered; link insertion (not rewrite) into 3 existing pages that already stated these facts |

**Held, not written:**
- The "total-loss worked example" and "retail vs. individually underwritten wording" additions to `outdated-insured-values/` itself — extending an existing page needs your explicit per-page go-ahead under the standing rule. Ready to do the moment you confirm.
- A dedicated "setting the rebuild value" satellite — lower priority than the two written, queued below.
- Everything in 5.3 — held on the Innovarisk finding.

**Not yet started, with a concrete plan for each so the pattern already proven above can be picked up directly:**

### 5.4 build plan — US audience hub

- **Hub**, new: `/en/us-buyers-insurance-portugal/` (commercial `lp-*` template, matching `expat-insurance-spain`'s role — Overview entry, breadcrumb parent, own lead form) or `/en/blog/insurance-guide-americans-portugal/` as a lighter blog-shaped hub if a full commercial page isn't wanted yet — **this choice is worth a quick steer from you**, since it decides which shared component (`landing.mjs` vs. the blog template used for 5.1/5.2) governs the page. Links out to the 4 existing articles (`us-buyers-property-cover-portugal`, `property-title-risk-portugal`, `health-insurance-portugal-americans`, `health-insurance-portugal-usa`).
- **Satellite: US umbrella vs. Portuguese liability limits.** Explains that a US umbrella policy does not travel with the owner to a Portuguese property; Portuguese household/RC limits are structured differently. No specific PT limit figures asserted without a source — `[VERIFY]` any number used.
- **Satellite: what a US driving record does and doesn't transfer.** No-claims history is not portable the way it is between some EU states (compare the existing Spain article `no-claims-history-car-insurance-spain` for the adjacent EU case, which does not apply the same way to a US record) — `[VERIFY]` before asserting exactly what Portuguese insurers accept as evidence from a US record.
- **Satellite: claiming in Portugal vs. a US adjuster.** Practical-expectations piece: no direct equivalent of a US-style adjuster relationship; written, non-native-language claims correspondence; realistic timelines. No statutory citation needed.
- **Satellite: D7/D8/Golden Visa owners taking cover before residency.** Ties into the existing `health-insurance-portugal-residency-visa` and `nif-fiscal-representation-d7-visa-health-insurance` articles — link, don't duplicate their visa-process detail; this satellite's own job is the "before you're resident" cover gap specifically.

### 5.5 build plan — DE tree (confirmed greenfield)

Mirrors the 13-page NL cluster's shape (`scripts/generate-nl-cluster.mjs` + `scripts/nl-content/*.mjs` + `scripts/nl-cluster.data.mjs` is the closest generator precedent, though — per Block 4's rule — a new DE cluster should follow whichever mechanism its nearest neighbour uses, and `/de/` currently has no generator of its own, so hand-authoring each page from the NL page's structure, the way the 3 pages above were built from the EN blog template, is the safer default unless you'd rather a `build-de-cluster.mjs` be written first). Proposed slugs, mirroring NL's naming pattern:

| Topic | Proposed slug | Links to |
|---|---|---|
| Hub | `/de/versicherungen-portugal/` | all of the below |
| Abmeldung + GKV/PKV + Anwartschaftsversicherung | `/de/gkv-pkv-abmeldung-portugal/` | — |
| S1 for pensioners | `/de/s1-formular-portugal/` | mirrors `/nl/s1-formulier-cak-portugal/`'s structure |
| Vorerkrankungen | `/de/vorerkrankung-krankenversicherung-portugal/` | **into 5.2's pillar** (`mgen-health-insurance-portugal`) |
| Unterversicherung / Proportionalregel | `/de/unterversicherung-portugal/` | **into 5.1's pillar** (`outdated-insured-values`) |
| Privathaftpflicht in Portugal | `/de/privathaftpflicht-portugal/` | — |
| Erdbebenversicherung | `/de/erdbebenversicherung-portugal/` | — |
| SF-Klasse (no-claims) transfer | `/de/sf-klasse-uebertragen-portugal/` | mirrors `/nl/schadevrije-jaren-meenemen-portugal/` |
| Car import / ISV | `/de/auto-import-portugal-versicherung/` | mirrors `/nl/auto-importeren-portugal-verzekering/` |
| Waldbrandrisiko | `/de/waldbrandrisiko-hausversicherung-portugal/` | mirrors `/nl/bosbrandrisico-woonverzekering-portugal/` |
| Unlegalised property | `/de/nicht-legalisierte-immobilie-versichern-portugal/` | mirrors `/nl/niet-gelegaliseerde-woning-verzekeren-portugal/` |
| Alojamento Local | `/de/ferienvermietung-versicherung-portugal/` | mirrors `/nl/alojamento-local-verzekering-portugal/` |
| Berufshaftpflicht | — | **on hold, Innovarisk** |

12 of 13 buildable now (Berufshaftpflicht held). Not started this pass —
13 full pages at NL's ~700–760-line fidelity is a substantial body of
work better done deliberately than rushed alongside everything else in
this response.

### 5.6 build plan — NL extensions

7 of 8 buildable now (`beroepsaansprakelijkheid voor therapeuten en yogadocenten` held on Innovarisk):

| Topic | Proposed slug | Note |
|---|---|---|
| evenredigheidsregel bij totaal verlies | `/nl/onderverzekering-evenredigheidsregel-portugal/` | Translate the *mechanism* from `outdated-insured-values`, don't machine-translate the English text; link back to it as the EN reference. |
| aardbevingsdekking | `/nl/aardbevingsdekking-portugal/` | Mirrors `/nl/bosbrandrisico-woonverzekering-portugal/`'s single-peril structure. |
| bestaande aandoening | `/nl/bestaande-aandoening-zorgverzekering-portugal/` | Link into 5.2's EN pillar the same way `zorgverzekering-portugal` and `s1-formulier-cak-portugal` now do. |
| AVP vs Portuguese liability | `/nl/aansprakelijkheidsverzekering-particulieren-portugal/` | |
| ORV bij een Portugese hypotheek | `/nl/overlijdensrisicoverzekering-hypotheek-portugal/` | |
| VvE | `/nl/vve-verzekering-portugal/` | |
| leegstandsclausule | `/nl/leegstandsclausule-portugal/` | Translate the concept from the EN unoccupancy-clause article (`second-homes-empty-months-unoccupancy-clause-voids-cover`), not its text. |
| boot verzekeren | `/nl/boot-verzekeren-portugal/` | |

### 5.7 FR clone plan (per the brief: no pages this round)

Once DE (5.5) is complete and reviewed, the same 13-topic list translates
directly to French with the same slug pattern (`/fr/assurances-portugal/`
as hub, etc.) — holding this until DE is done and approved rather than
running two greenfield trees in parallel, since DE was named first and a
reviewed DE pattern is a better template for FR than an unreviewed one.

### 5.8 hreflang

From Phase 1D: 0 broken hreflang targets, hreflang computed per real
translated file (never hardcoded to a homepage), Spain correctly carries
none (market variant, not a translation). **Nothing needs fixing.**
New pages from this plan should follow the same rule confirmed there: a
US-audience EN page is a market variant like Spain (no hreflang); a new
DE or FR page is a genuine language translation only if it translates an
existing page 1:1 (none of the candidates here do — they're new topics),
so none of the new pages in this plan should declare hreflang alternates
to each other. **Item closed, no code change.**

---

## Block 6 — final consolidated report

**Files changed in Block 1, and where the partner list was hardcoded:**
`data/partners.json` (new, single source of truth), `scripts/lib/landing.mjs`
(now reads it), `scripts/apply-partner-list.mjs` (new sync script), plus 15
pages hand-edited where the list was hardcoded in markup or prose —
`public/en/index.html` (linked logos), the 11 pages the sync script fixed
(`public/index.html`, `public/private-clients/index.html`,
`public/en/insurance/tvde/index.html`, 8 of the `public/seguros/*` pages),
and `public/nl/index.html` / `public/de/index.html` / `public/fr/index.html`
(hardcoded prose — hero-trust line, brand-chip row, feature copy, FAQ
answers, meta descriptions). `public/de/index.html` and `public/fr/index.html`
also got the working-language disclosure block, since both promised
advice/claims handling entirely in German/French with no disclosure present.
Full detail in the Block 1 report above.

**The B discrepancy:** not a real discrepancy. `data/articles.json` uses
`status: merged` and `status: draft` as a deliberate taxonomy; the two
"extra" EN rows I originally flagged are `merged` tombstones with matching
live redirects. I caught my own mistake mid-fix (a script that would have
deleted them) before committing anything. `data/articles.json` is unchanged
from `main`. Full detail in the Block 2 section above.

**Coverage matrix outcome — everything classified EXISTS or PARTIAL and
therefore not (re)written:**
- 5.1 pillar: **PARTIAL** — `outdated-insured-values` already covers the
  rule and a worked partial-loss example; not duplicated, extension held
  for your go-ahead.
- 5.2: the core MGEN facts **EXISTS** across `pre-existing-conditions-
  health-insurance-portugal` (EN) and `zorgverzekering-portugal` /
  `s1-formulier-cak-portugal` (NL) — reused as established fact, linked
  rather than rewritten.
- 5.3 pillar: **EXISTS, strong** — `liability-insurance-complementary-
  therapies` (EN, 1,115 lines) plus 3 PT satellites — untouched, held on
  Innovarisk.
- 5.4: the 4 named existing articles (`us-buyers-property-cover-portugal`,
  `property-title-risk-portugal`, `health-insurance-portugal-americans`,
  `health-insurance-portugal-usa`) **EXIST** and were left alone; only the
  hub and 4 new satellites are planned as new pages.
- Named adjacent pages across the whole brief (`luxury-home-insurance-
  portugal`, `hiscox-home-insurance-portugal`, `liberty-mutual-home-
  insurance-portugal`, `best-home-insurance-portugal-2026`, and all of
  5.5/5.6's "mirrors" targets in the existing NL cluster) — confirmed
  **EXISTS**, none touched, none duplicated.

**Every page created this pass (3):**
1. `/en/blog/disputing-sum-insured-portugal/`
2. `/en/blog/mortgage-sum-insured-vs-rebuild-cost-portugal/`
3. `/en/blog/mgen-health-insurance-portugal/`

All three: registered in `data/articles.json`, one commit each, linked
into their nearest existing pillar/neighbours. None are yet wired into
`/en/blog/`'s index, category pages, RSS feed or `sitemap.xml` — those are
produced by `scripts/generate-blog.mjs` and `scripts/generate-sitemap.mjs`,
which touch many existing files per run. Deliberately queued for one
reviewed run once this branch's content is otherwise settled, rather than
run three times, once per page, each producing its own wide diff.

**Every `[VERIFY]` placeholder left, consolidated:**
1. `disputing-sum-insured-portugal` — exact statutory basis (RJCS article)
   for the peritagem/arbitration mechanism.
2. `disputing-sum-insured-portugal` — CIMPAS's precise role in a disputed-
   settlement scenario specifically.
3. `mgen-health-insurance-portugal` — whether waiting periods vary by
   product beyond the confirmed 365-day pre-existing-condition figure.

Three. All inline in the published HTML as visible `[VERIFY]` boxes, not
buried in a comment — easy to grep for (`grep -rn '\[VERIFY\]' public/`)
when you're ready to work through them.

**Open items, not guessed at either direction:**
- **Innovarisk** (Block 1) — blocks all of 5.3 and 2 of 5.5/5.6's items.
  Needs your call on whether it's in scope for the partner-list change at
  all.
- **5.4's hub template** — commercial `lp-*` page vs. blog-shaped hub;
  a quick steer avoids building the wrong shared-component shape.
- **The "Article 5" vs. "art. 10.º n.º1" citation discrepancy** on the
  existing `liability-insurance-complementary-therapies` page (Block 3,
  5.3) — found, not corrected, flagged for whoever owns that page.

**Anything else I was unsure about:** the exact article number for the
peritagem/arbitration mechanism (flagged as `[VERIFY]` rather than
guessed), and CIMPAS's specific procedural role in a settlement dispute
(same). Nothing else in this pass required inventing a fact I couldn't
support — where the coverage matrix showed a fact already established
elsewhere on the live site (the MGEN mechanism), I treated it as reusable;
where it didn't, I either wrote around it honestly or flagged it and
stopped, per the standing rule.

---

## Round 2 — Innovarisk resolved, 5.3 unblocked, 5.4 built, 5.5/5.6/5.7 stopped

### 1. Innovarisk — category confusion, not a conflict. Confirmed, nothing changed.

The seven-name list governs **insurers** — the partner-logo strips. Innovarisk
is an underwriting agency (an MGA), the *channel* through which some cover is
reached, not an insurer on that list. It was never in scope for removal.
`data/partners.json`, `scripts/lib/landing.mjs` and every page touched in
Block 1 are unchanged from that finding — no new edit was needed, because
none of them ever listed Innovarisk as a partner logo in the first place
(confirmed again by re-reading the Block 1 report above: the removals were
Médis, Liberty Mutual and Bupa; Innovarisk's non-logo uses were flagged,
not removed). This unblocks 5.3 in full, plus the one NL and one DE item
that were held for the same reason (still not built — see below).

### 2. Legal citation — fixed in both pages, verified against primary sources

Detailed in the two commits above (`fix(content): correct Lei 71/2013
citation...` and `fix(content): source and correct [VERIFY] 1 and 2...`).
Summary: `Artigo 10.º, n.º 1` of Lei 71/2013 imposes the insurance
obligation (not Artigo 5.º, which governs professional access — the degree
requirement); Portaria n.º 200/2014 sets the €150,000 minimum. Verified
against pgdlisboa.pt's consolidated text (reflecting amendments by Lei
1/2017 and Lei 109/2019). The EN pillar had the wrong article; the PT
equivalent already had the right one — checked before assuming both were
wrong, and only the EN page needed correcting.

`[VERIFY]` 1 (peritagem's statutory basis) is now fully sourced: RJCS,
Decreto-Lei n.º 72/2008, Artigo 50.º (*Perícia arbitral*) — cited directly
in `disputing-sum-insured-portugal`.

`[VERIFY]` 2 (CIMPAS) — the original text was factually **wrong**, not just
unconfirmed: it described CIMPAS as a claims-history/anti-fraud database.
CIMPAS is actually the Centro de Informação, Mediação e Arbitragem de
Seguros, a Ministry-of-Justice-authorised consumer ADR body for insurance
disputes generally (information → mediation → arbitration). Corrected. A
narrower residual `[VERIFY]` remains — whether its arbitration stage
routinely covers settlement-*amount* disputes specifically, its cost, and
its relationship to court action are not confirmed to the precision the
page would need to recommend it as a specific next step.

`[VERIFY]` 3 (MGEN waiting periods, broken down by product) — left open as
instructed; you're sourcing it.

### 3. 5.3 — pillar confirmed solid, 3 of 11 profession satellites written

Written: yoga instructors, Pilates/Tai Chi instructors, massage & spa
therapists — the three "not one of the six regulated therapies, but
genuinely exposed and increasingly required contractually" topics, chosen
first because they share one clean framing and, for massage, an existing
PT article (`responsabilidade-civil-massagistas`) to draw verified facts
from rather than invent. Each carries a `[VERIFY]` on capital minimums
(none exists by law for these three, unlike the regulated six under
Portaria 200/2014) rather than a guessed figure. Cross-linked to each
other and to the pillar; one link inserted into the pillar's existing
yoga paragraph, extended to mention all three (not rewritten).

**Not written this pass:** acupuncture/TCM, osteopathy/chiropractic,
naturopathy/phytotherapy, homeopathy (EN versions — PT exists for
naturopathy and acupuncture already), retreat organisers, personal
trainers, psychologists/psychotherapists, nutritionists, and the reference
table of which Portuguese professional bodies require cover. Flagging one
thing rather than guessing at it: **psychologists and psychotherapists in
Portugal are regulated by the Ordem dos Psicólogos Portugueses, a
different regulatory framework entirely from Lei 71/2013's ACSS-licensed
complementary therapies** — I have not verified that framework's own
insurance requirements, and writing that satellite with the same Lei
71/2013/Portaria 200/2014 framing the other pages use would risk exactly
the kind of citation error just corrected above. Worth its own verification
pass before it's written, not a same-afternoon extension of this batch.

### 4. 5.4 — hub and all 4 satellites written (reported above, restated briefly)

`/en/insurance-for-americans-in-portugal/` built via `landing.mjs`, plus 4
new satellites (US umbrella vs. PT liability, US driving record, claiming
in Portugal vs. a US adjuster, cover before D7/D8/Golden Visa residency).
Full detail in the 5 commits above.

### 5. 5.5, 5.6, 5.7 — stopped, exactly as instructed

**5.5 (DE tree): all 12 buildable pages on indefinite hold.** Not touched.
The build plan from Round 1 stays in this doc for when the competitor
analysis is done and the German cluster's design is actually decided
against it, rather than written blind now and possibly reworked later.

**5.6 (NL extensions): not touched, and the existing NL cluster itself was
not touched either** (correctly — none of this round's edits touched any
`/nl/*` page). Waiting on your topic selection.

**5.7 (FR): still deferred**, per Round 1's plan and this round's
instruction alike.

### What I'm still unsure about, stated plainly

- Whether CIMPAS's arbitration stage specifically handles settlement-amount
  disputes (narrowed from Round 1's broader uncertainty about what CIMPAS
  even is, which is now resolved).
- The psychologists/psychotherapists regulatory framework (Ordem dos
  Psicólogos Portugueses) — flagged above, not written into, not guessed at.
- Nothing else in this round required inventing a fact. Where I drew on an
  existing page's already-established content (the PT massagistas article,
  the EN pillar's own yoga paragraph), I treated it as reusable; everything
  else new either cites a source fetched and checked this round (RJCS Art.
  50.º, Lei 71/2013 Art. 10.º, Portaria 200/2014, CIMPAS's actual role) or
  carries a visible `[VERIFY]`.

---

## Round 3 — status re-verified, generator pass attempted and reverted

### Status corrections (verified against git log/file contents, not memory)

Two corrections to the round-2 status request's own framing, found while verifying rather than assumed:

1. **5.1's pillar was never extended.** `git log main..content/market-expansion-2026 -- public/en/blog/outdated-insured-values/index.html` returns nothing — the file is untouched. Only the two satellites exist, linking to it one-directionally.
2. **Lei 71/2013 recognises seven therapies, not six.** Re-verified Artigo 2.º directly (pgdlisboa.pt): Acupuncture, Phytotherapy, Homeopathy, Traditional Chinese Medicine, Naturopathy, Osteopathy, **and Chiropractic (Quiropraxia)** — the existing EN pillar (`liability-insurance-complementary-therapies`) currently says "six practices" and omits Chiropractic from its own list. Found, not yet fixed.
3. Also found while checking 5.2: a pre-existing, pre-branch article (`retiring-algarve-health-cover-65-plus`) already covers the general 65+ angle — missed in the original coverage matrix.

### The generator task — attempted, reverted, blocked on a real finding

Ran `node scripts/generate-blog.mjs` then `node scripts/generate-sitemap.mjs` against a clean baseline (commit `127c727`). Result: 37 modified + 3 new files. Diff summary by type:

| Type | Count | Expected? |
|---|---|---|
| EN blog index + pagination (`/en/blog/`, `/en/blog/page/2-11/`, 3 new page/12-14/) | 14 | Yes — new articles push pagination out |
| EN category pages (10 categories, some with page/2) | 15 | Yes — new articles need to appear here |
| RSS (`/en/blog/feed.xml`) | 1 | Yes |
| Sitemap (`sitemap.xml`, `sitemap-pages.xml`, `sitemap-blog.xml`) | 3 | Yes |
| `data/generated-blog-pages.json` (registry) | 1 | Yes |
| `public/css/ar-site.css` (shared stylesheet, regenerated as a side effect of `generate-blog.mjs`) | 1 | **No — see below** |
| PT blog pages | 0 | Correct — none of this branch's new content is PT |
| Individual article/commercial/landing pages | 0 | Correct — confirmed by direct grep, none touched |

**Two problems found before committing anything, both now reverted, nothing committed:**

1. **`ar-site.css` regeneration would break 4 live PT pages.** The regenerated stylesheet drops the `.lp-form-note` rule (23 insertions, 7 deletions net). That class is still referenced by 4 live pages this branch never touched — `public/seguros/rc-massagistas/`, `responsabilidade-civil-profissional/`, `rc-terapeuticas-nao-convencionais/`, `tvde/`. The rule seems to have been renamed to `.hero-form-note` in `public/index.html`'s own source `<style>` block by an earlier, unrelated commit (`70a9c38`, on `main` before this branch existed) without the 4 dependent pages being updated to match — a real, pre-existing bug, not something this branch caused. Committing the regenerated CSS as-is would silently break those 4 pages' form styling. **Reverted; not committed.**

2. **Every one of the 30 EN blog HTML files carries an unrelated, large nav overhaul, not just my new articles.** `chrome.mjs`'s `NAV_EN` constant already contains the current 3-column mega-menu (with the Spain panel) that's live on `public/en/index.html` — but the EN blog index/category/pagination pages were last generated *before* that menu existed, and nobody has re-run `generate-blog.mjs` since. So regenerating them for my new articles necessarily also rewrites their entire chrome to match the current mega-menu — confirmed present in the diff of **all 30** modified HTML files, including ones with none of my new content (e.g. `spain-car`, `marine`, `holiday-lets-hospitality`). This is the same "edited the source, never re-ran the generator" pattern `SPAIN-DIAGNOSIS.md` already found for `unify-chrome.mjs`'s footer — here it's `generate-blog.mjs`'s nav, on a set of pages that diagnosis didn't cover. **Reverted; not committed.**

**Current state: exactly as before this round started.** `git rev-parse HEAD` = `127c727...`, `git status` clean. Nothing from the generator pass is committed. The branch's reviewability is still blocked on this — see the chat response for the decision this needs.

---

## Round 4 — the two independent fixes done; generator task still blocked, new finding

### Fix 1: 5.1 pillar reciprocal links — done

`outdated-insured-values` now links to both satellites via its existing
cluster-links line. Link insertion only, confirmed by diff: exactly one
line changed, no prose touched.

### Fix 2: seven-therapies sweep — done, 5 pages

Swept rather than patched, per instruction. Found and fixed:
`liability-insurance-complementary-therapies` (EN pillar — both the prose
enumeration and its bulleted list said six and omitted Chiropractic),
`seguro-responsabilidade-civil-terapeuticas-nao-convencionais` (PT pillar
— only the opening paragraph was wrong; its own later bulleted list
already correctly said seven and already had Quiroprática, citing Artigo
2.º — the article was internally inconsistent with itself, now isn't),
and this branch's own three satellites (yoga, Pilates/Tai Chi, massage —
each said "six" between 9 and 11 times across meta/JSON-LD/visible copy).
Checked and correctly left alone: `public/seguros/rc-terapeuticas-nao-
convencionais/` already had all seven, including Quiroprática, in both
its form dropdown and its FAQ — nothing to fix there.

### Generator task, step 1 (CSS fix) — done and committed

Renamed `.lp-form-note` → `.hero-form-note` on the 4 affected `/seguros/*`
pages to match the already-current source, then regenerated
`public/css/ar-site.css` — confirmed the regeneration is now a clean,
expected diff (old rule dropped, nothing left referencing it).

### Generator task, step 2 (nav sync) — attempted, found a third pre-existing gap, stopped as instructed

Per the instruction ("if step 2 turns out to carry anything beyond the nav
change, stop again and tell me before committing"): ran the nav-only
regeneration by temporarily swapping in `main`'s exact `data/articles.json`
(confirmed via `git diff main -- data/articles.json` that the only
difference between the two is this branch's 10 new EN articles — nothing
else changed, so `main`'s file is a valid stand-in for "the article set as
currently committed"). Regenerating against that unchanged article set
should have produced a nav-only diff. It didn't:

**`main`'s own EN blog pagination is already short by 2 pages.** The
generator computed 13 EN index pages are needed for the 154 currently-
published EN articles (154 ÷ 12 = 12.83 → 13); only pages 2–11 are
committed, on `main` and on this branch alike. Confirmed via
`git ls-tree main -- public/en/blog/page/` and the same on `HEAD` — both
stop at 11. This is a third instance of the same "content added, generator
never re-run" family as the CSS class and the nav menu, but it's not the
nav change itself — it's a pagination gap that predates this branch and
has nothing to do with chrome. Reverted everything from this attempt
(`data/articles.json`, all regenerated blog/sitemap files); `HEAD` and
working tree confirmed unchanged. **Nothing committed. Waiting on how you
want this folded in** — as a fourth scoped commit before the nav sync, as
part of the nav-sync commit since it's mechanically the same regeneration,
or something else.

Step 3 (article wiring) not started — waiting on step 2.

---

## Branch summary — closing for review

32 commits, `content/market-expansion-2026` off `main` at `bddcc7e`. Zero
failures on `node scripts/check-generator-freshness.mjs` was the condition
for closing the branch; that's now true. `main` is untouched throughout —
verified repeatedly, most recently by running the freshness checker against
it in a disposable `git worktree` that was removed afterward.

### What shipped

**Partner list (Block 1).** `data/partners.json` — Hiscox, Allianz, Zurich,
MGEN, Asisa, April, Chubb — as the single source of truth, wired into
`scripts/lib/landing.mjs`. 15 pages synced off the old hardcoded lists (11
via a new one-off sync script, `public/en/index.html` and the NL/DE/FR
homepages by hand). Working-language disclosure added to DE/FR, matching
the pattern already on EN/NL. Innovarisk resolved as a category confusion,
not a conflict — it's the MGA channel to some of the seven insurers, never
itself one of them; nothing was ever removed there.

**5.1 — proportional rule.** Two satellites shipped: disputing a settlement
figure (perito de parte, sourced to RJCS Art. 50.º; CIMPAS corrected after
the original description turned out to be factually wrong, not just
unconfirmed) and the bank's-figure-vs-rebuild-cost distinction. The pillar
(`outdated-insured-values`) was **not** extended — only linked to,
reciprocally, via its existing cluster-links line. Total-loss mechanics,
the rebuild-value-setting method, and waiver of average as its own resource
remain queued; extending the pillar itself still needs your explicit
go-ahead, not given this branch.

**5.2 — MGEN.** One pillar, consolidating facts already live and consistent
across 3 pre-existing pages before this branch touched anything. Declined-
and-what's-left and waiting-periods-by-product ([VERIFY] 3, staying with
you) were never written, even as pillar sections. Cover-at-70/75 and
moving-with-a-chronic-condition exist only as sections inside the pillar,
not their own pages — and a pre-existing, pre-branch article
(`retiring-algarve-health-cover-65-plus`) already covers the 65+ angle
generally, missed in the original coverage matrix and disclosed once found.

**5.3 — therapist liability.** Three satellites (yoga, Pilates/Tai Chi,
massage & spa) — the "not one of the regulated seven, still exposed"
cluster, chosen first because massage had an existing PT article to draw
verified facts from rather than invent. Two citation errors found and
swept across every page stating them, not patched on the one page found
first: Lei 71/2013's insurance obligation is Art. 10.º n.º 1, not Art.
5.º (5 pages); the law recognises **seven** therapies, not six — Chiropractic
(Quiropraxia) was missing from both the EN and PT pillars' own lists (5
pages, one of which — the PT pillar — was internally self-contradictory,
agreeing with itself only after the fix). Both verified against pgdlisboa.pt's
consolidated text before writing anything. Remaining: the other six of the
seven regulated professions (zero EN satellites for any), the combined
psychologist/nutritionist page (queued — separate regulatory bodies, Ordem
dos Psicólogos and Ordem dos Nutricionistas, not Lei 71/2013 — needs its
own verification pass before writing, not a same-afternoon extension of
this batch), retreat organisers, personal trainers, and the reference
table of which professional bodies require cover.

**5.4 — US audience.** Complete: hub (`/en/insurance-for-americans-in-portugal/`,
built via `landing.mjs`, the same renderer `/seguros/*` uses) plus all 4
satellites (US umbrella vs. PT liability, US driving record, claiming in
Portugal vs. a US adjuster, cover before D7/D8/Golden Visa residency).
Nothing outstanding.

**Generator wiring**, sequenced exactly as directed rather than as one
blind regeneration: CSS class fix (4 `/seguros/*` pages moved off the
retired `.lp-form-note`, `ar-site.css` regenerated clean) → nav sync (31
EN blog pages, chrome only, confirmed via line-by-line diff) → article
wiring (this branch's 10 new articles into index/categories/sitemap) →
feed + pagination together at the final count (166 registered, 162
published, 14 index pages, up from 11).

**The staleness tool.** `scripts/check-generator-freshness.mjs`
(`npm run check:freshness`) — read-only, five checks. FAIL: a class a
rebuild would drop that a page still uses (the three-way committed-vs-
rebuilt-vs-markup comparison, not a blanket "every class needs a rule",
which produced ~300 false positives against structural classes like
`landing.mjs`'s own `.field` before being narrowed); pagination count vs.
published articles. WARN: chrome partials (delegated to
`unify-chrome.mjs --dry-run`, not reimplemented), the two rebuildable
stylesheets vs. their builder functions, RSS feed contents vs. the true
latest-30, `hreflang-report.json`'s recorded totals vs. two independently
recomputed proxy figures. Required one small, verified-behaviour-preserving
split in `scripts/lib/chrome.mjs` (`buildSharedStylesheet()` extracted as a
pure function). Confirmed by running it against `main`: it independently
rediscovers the exact 4-page CSS break and the EN pagination gap this
branch already found and fixed — the tool would have caught the original
incident before a client did.

### The 5 warnings deliberately left on this branch, untouched per instruction

1–2. **Chrome partials** — 237 files stale (topBar 205, footer 294, cookie
   289, nav 202, landingNav 2, landingDrawer 2, css 2), plus 11 files (all
   `/nl/*`) missing topBar/footer entirely. Pre-existing, predates this
   branch, gets its own pass after this one merges. Not touched.
3–4. **RSS feeds** — both PT and EN feeds carry one article each just past
   the true latest-30-by-date window. Minor, self-correcting on the next
   real regeneration. Not touched.
5. **`data/hreflang-report.json`** — recorded `htmlFiles: 268` vs. 344
   current. Stale since Phase 1, predates this branch. Not touched.

### Queued work, explicit

- **5.1**: pillar extension (total-loss mechanics, retail-vs-individually-
  underwritten wording) pending your go-ahead; rebuild-value-setting method
  and waiver-of-average as their own satellites.
- **5.2**: declined-and-what's-left, `[VERIFY]` 3 (waiting periods by
  product, staying with you), and whether cover-at-70/75 /
  moving-with-a-chronic-condition warrant their own pages or stay as
  pillar sections.
- **5.3**: the other six of the seven regulated therapies in English
  (acupuncture, phytotherapy, homeopathy, TCM, naturopathy, osteopathy —
  none have an EN satellite yet), the psychologist/nutritionist page
  (own regulatory bodies, needs its own verification pass first),
  retreat organisers, personal trainers, the professional-bodies
  reference table.
- **5.5 (DE)**: all 13 pages stopped — competitor analysis (C1 Broker's
  60+ page German cluster) needed before designing against it, not an
  Innovarisk question any more.
- **5.6 (NL)**: 8 extensions stopped, topic selection pending; existing
  NL cluster untouched throughout this branch.
- **5.7 (FR)**: stopped, clone plan deferred until DE is built and reviewed.
- **Chrome sweep**: running `unify-chrome.mjs` for real (not `--dry-run`)
  across the 237+11 stale files — its own header already recommends a
  dry-run diff review "before every run that follows more than a trivial
  chrome edit," which this qualifies as.

### For the record — `main`'s own state, not urgent, not touched

`node scripts/check-generator-freshness.mjs` reports **5 failures on `main`
right now**, independent of this branch: the same 4 `.lp-form-note`
class-drop pages, plus `/en/blog/` needing 13 pages for its 152 published
articles against 11 that exist. Both have been live for some time,
unnoticed, before this branch started. Both resolve automatically once
this branch merges, since this branch already fixes both — noted here so
that fact isn't lost, not because either needs action before then.
