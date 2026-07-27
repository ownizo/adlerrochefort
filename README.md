# adlerrochefort.com

Static marketing site for **Adler &amp; Rochefort**, the commercial brand of Ownizo,
Unipessoal, Lda. — an ASF-registered insurance mediator (reg. 425591790/3) based in
Lagos, Algarve.

## Layout

| Path | What it is |
| --- | --- |
| `public/` | The published site. Plain hand-authored HTML, one `index.html` per route, with the page's CSS inlined in `<head>`. This is the Netlify `publish` directory. |
| `netlify/functions/` | Netlify Functions (`.mjs`), including `submission-created.mjs`, which emails the team when an intake form is submitted. |
| `netlify/edge-functions/` | Edge functions, including the language router. |
| `netlify.toml` | Build, headers and redirect configuration. |
| `scripts/` | Operational scripts run by hand. Not part of the build. |

There is no static-site generator and no build step for the site itself: Netlify
publishes `public/` as-is.

## Search Console monitoring (fiscal-representation cluster)

`scripts/search-console-report.mjs` pulls Search Analytics data for the site,
keeps only the queries in the fiscal-representation cluster — those containing
`fiscal`, `nif`, `tax repr` or `representative` — prints clicks, impressions, CTR
and average position per query, and appends one timestamped row per query to
`scripts/data/fiscal-representation-search-history.csv` so movement can be
compared between runs.

It is run **manually**. It is deliberately not wired into CI, into `npm test`, or
into the Netlify build.

### One-time setup

1. In Google Cloud, create a service account and enable the **Google Search
   Console API** for its project. No key file needs to live in this repository.
2. In Search Console, under **Settings → Users and permissions**, add the service
   account's email address as a user with at least **Restricted** access to the
   `adlerrochefort.com` property.
3. Export the credentials into your shell. Use either the split variables:

   ```bash
   export GSC_CLIENT_EMAIL="…@….iam.gserviceaccount.com"
   export GSC_PRIVATE_KEY="$(cat ~/path/to/key.pem)"   # or the PEM with literal \n escapes
   export GSC_SITE_URL="https://adlerrochefort.com/"   # optional, this is the default
   ```

   or point at a service-account JSON file kept outside the repository:

   ```bash
   export GOOGLE_APPLICATION_CREDENTIALS="$HOME/.config/gcloud/adlerrochefort-gsc.json"
   ```

   `GSC_SERVICE_ACCOUNT_JSON` is also accepted if you would rather pass the JSON
   inline. Literal `\n` sequences in the private key are handled, so a key pasted
   from a secrets manager works as-is.

Credentials are read from the environment only. **Never commit a key, and never
commit a `.env` file** — `.env` is in `.gitignore`. The script prints no
credential values, and error messages never include the signed assertion or the
access token.

### Running it

```bash
node scripts/search-console-report.mjs                       # last 28 days
node scripts/search-console-report.mjs --days=90             # last 90 days
node scripts/search-console-report.mjs --start=2026-06-01 --end=2026-06-30
```

The window ends three days before today by default, because Search Console data
lags by roughly two to three days and a partial final day skews the averages.

Sample output:

```
Site      : https://adlerrochefort.com/
Range     : 2026-06-27 to 2026-07-24
Filter    : query contains fiscal, nif, tax repr, representative
Matched   : 3 of 5 queries

query                           clicks    impr     ctr    pos
------------------------------------------------------------
fiscal representation portugal       3     120   2.50%    8.4
nif portugal non resident            1      60   1.67%   14.2
tax representative portugal          0      40   0.00%   27.9
------------------------------------------------------------
TOTAL                                4     220

Appended 3 row(s) to scripts/data/fiscal-representation-search-history.csv
```

The history CSV is safe to commit: it holds aggregate query metrics only, no
personal data. Suggested cadence is monthly, and the point of comparison is
whether `/en/fiscal-representation-portugal/` takes over the transactional
queries while `/en/blog/fiscal-representation-portugal-explained/` holds the
informational ones.

Requires Node 18 or newer (the script uses the built-in `fetch` and
`node:crypto`, and installs no dependencies).
