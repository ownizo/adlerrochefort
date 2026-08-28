# Search Console exports

Place one or more Search Console CSV exports in this directory, then run:

```bash
node scripts/search-opportunities.mjs
```

This directory is empty in the repository except for this file and
`.template.csv` — a format example with clearly fake, zeroed-out numbers,
never real performance data. Every real export you add here is your own
local file; `.gitignore` excludes `*.csv` in this directory so an export
never gets committed by accident (see the rule near the bottom of the
repo's `.gitignore`).

## Where to get the export

1. Go to [Search Console](https://search.google.com/search-console) for
   `adlerrochefort.com`.
2. **Performance** → **Search results**.
3. Set the date range (28 or 90 days both work — `search-opportunities.mjs`
   doesn't care, it just reports on whatever's in the file).
4. Add the **Pages** dimension alongside the default **Queries** one — the
   cannibalisation and "no strong landing page" checks need the page
   column to mean anything. A query-only export (no Pages dimension) still
   works for the CTR and position checks, it just skips those two.
5. Export → **Download CSV**, or use **Export data** on the API if you'd
   rather script the pull. Either way, save the file into this directory.

## Expected columns

| column      | required? | notes                                              |
|-------------|-----------|-----------------------------------------------------|
| `query`     | yes       | the search query                                    |
| `page`      | no        | full URL; without it, per-page checks are skipped   |
| `clicks`    | yes       |                                                       |
| `impressions` | yes     |                                                       |
| `ctr`       | yes       | either `0.021` or `2.1%` — both are accepted        |
| `position`  | yes       | average position                                     |
| `country`   | no        |                                                       |
| `device`    | no        |                                                       |
| `date`      | no        |                                                       |

Multiple CSVs are combined — export Portugal and Spain traffic separately
(filtered by page path, or by country) if that's easier than one combined
pull, and drop both files in here.

## What the script does with it

`scripts/search-opportunities.mjs` reads every `.csv` here, rolls rows up
to one line per (query, page), and classifies each into an opportunity
category — high impressions/low CTR, page-1 but not top-of-page-1,
multiple pages ranking for the same query, or a query with meaningful
impressions but no recognised commercial landing page. Output goes to
`audit/search-opportunities.json` and `audit/search-opportunities.md`.

It never rewrites a page itself. Every recommendation is one of:
strengthen, improve CTR, improve internal linking, consolidate, redirect,
monitor, or (never as a default) consider a new page — for a human or a
future agent session to act on, the same as `audit/cannibalization.md`.

## If this directory is empty

The script still runs. It writes a report that says plainly that no export
was found, rather than inventing numbers — see the Phase 9 implementation
report's own note on this. Nothing downstream should ever read
`audit/search-opportunities.json`'s `opportunities` array without first
checking `status === "ok"`.

## Live query monitoring (separate tool)

This directory's workflow is for broad, ad-hoc analysis. For the one
query cluster that already has a live, credentialed Search Console API
pull running on a schedule, see `scripts/search-console-report.mjs` and
the "Search Console monitoring" section of the repo's top-level
`README.md` — that tool is deliberately separate and untouched by this
one.
