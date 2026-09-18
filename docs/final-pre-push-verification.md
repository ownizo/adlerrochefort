# Final pre-push verification — 18 September 2026

This report covers the combined Private Client commit and the uncommitted multilingual quotation corrections. No push, deployment, database schema change, production submission or real email send was performed during this verification pass.

## Git state and scope

- Current HEAD: `04e8a31e47b4631de8419fe7e320e940993729b7` (Private Client implementation).
- Its parent, used to audit the terminology changes: `f8e9bfe5e5d6bcb8e41c0fa2dac9381561b09e4e`.
- The quotation corrections and this verification's fixes are **uncommitted**. Consequently, no commit SHA yet represents the final working tree. No commit was created as part of this verification.
- The user's pre-existing untracked `docs/private-client-audit-2026.md` was left untouched and is excluded from the task's file counts.

## Quotation routes and search intent

The exhaustive [route inventory](quotation-route-inventory.tsv) lists **134 affected URLs** with language, product, purpose, supported existing pages, quotation destination, canonical, indexability and search-intent assessment. It includes the 40 core product flows, 73 existing CTA/enquiry pages, ten homepages, four Private Client pages and seven other existing specialist/general form pages. The historical [commit form audit](quotation-form-commit-audit.md) separately records the before/after form changes in the Private Client commit.

Only **five URLs were created for quotation purposes**:

| URL | Language | Product | Supports | Canonical | Indexable / overlapping intent |
|---|---|---|---|---|---|
| `/fr/devis-auto/` | FR | Auto | `/fr/` product selector | `https://adlerrochefort.com/fr/devis-auto/` | No: `noindex,follow`; form utility, no other French product quotation page |
| `/fr/devis-habitacao/` | FR | Home | `/fr/` product selector | `https://adlerrochefort.com/fr/devis-habitacao/` | No: `noindex,follow`; form utility, no other French product quotation page |
| `/fr/devis-saude/` | FR | Health | `/fr/` product selector | `https://adlerrochefort.com/fr/devis-saude/` | No: `noindex,follow`; form utility, no other French product quotation page |
| `/fr/devis-profissional/` | FR | Professional / Liability | `/fr/` product selector | `https://adlerrochefort.com/fr/devis-profissional/` | No: `noindex,follow`; form utility, no other French product quotation page |
| `/nl/autoverzekering-portugal/` | NL | Auto | `/nl/` product selector | `https://adlerrochefort.com/nl/autoverzekering-portugal/` | No: `noindex,follow`; existing import/no-claims guides are informational |

These fill missing language/product form destinations using the existing wizard renderer. They are excluded from the sitemap and are not intended to compete in organic search. The other 35 core flows reuse established indexable product pages with their existing self-canonicals. Existing informational and narrower-risk pages can overlap a product topic; they were not duplicated or removed. The existing English query-ownership map still assigns generic Home, Health and Auto intent to the established quotation/product pages. No unnecessary duplicate indexable product or quotation page was introduced, and no canonical correction was needed.

This pass fixed two routing regressions:

1. Article buttons using `#ar-quote-form` had escaped the earlier correction. On the **62 applicable core-product source pages**, quotation links now lead to the complete existing product flow. Local short forms are explicitly labelled as enquiries; their fields are preserved.
2. **Eleven specialist/claims articles** had been assigned standard Home/Health destinations despite discussing a different risk. Those incorrect directions were removed; the existing specialist/claims enquiry fields and pipeline remain. These are hospitality experience, bars/restaurants claims, construction/decennial cover, domestic staff, mandatory hospitality cover, mortgage life, title risk, travel insurance, claims without Portuguese, water-damage claims and long-term-care planning. Their exact URLs appear in the inventory with product “Specialist / claims enquiry”. No new specialist questionnaire was invented.

## Portuguese homepage

Verified on the rendered DOM and through an intercepted browser submission:

- Required: Nome (displayed as “Nome completo”), Email, Tipo de seguro.
- Optional: Telefone, Empresa.
- Exactly five visible fields. Hidden attribution, form identity and the honeypot are retained.
- The original **“Antes de preencher”** block is byte-equivalent to the committed block, appears above the fields, and retains cream `#F5F1E8` / red left border `#B8323E` styling.
- That block was not added to any other language homepage. Product-specific Portuguese blocks also remain outside the form fields.

The homepage has its existing explanatory privacy text, not a sixth consent field. The storage mapper does not invent affirmative checkbox consent for a form without that field.

## Detailed quotation compliance

Every core product flow requires full policyholder name, NIF, adult date of birth, full address, locality, Portuguese postcode, phone, email, searchable nationality, fiscal-residence answer, intended start date and GDPR consent. Non-residence does not remove the address. All use three steps and the existing draft mechanism.

| Product | Verified underwriting information and behaviour |
|---|---|
| Auto | Common identification/contact/address; plate; driving-licence date; start date. Four Portuguese plate formats accept unhyphenated input and normalize to uppercase with hyphens. Licence/DOB consistency remains enforced. |
| Home | Property address/postcode; exclusive main residence/holiday home/AL selection; AL full-time/part-time only when applicable; construction year; gross area; bathrooms; optional renovations with required year and meaningful description when selected; building and contents sums; start date. Hidden AL and renovation values are cleared and excluded. Renovation year cannot precede construction or exceed the current year. |
| Health | Adult policyholder information; explicit number of insured people; one full-name/DOB/NIF block per person; no clinical questions. Insured children are accepted: their DOB is checked for validity and not being in the future, without the policyholder's 18-year rule. Removing people removes their payload entries; children survive draft restoration. The existing maximum of ten and existing insured-person NIF requirement remain; no previously available missing-NIF override was removed. |
| Professional / Liability | Common identification/contact/address/DOB; annual turnover; start date. Existing specialist questionnaires and branch-specific questions remain, including profession/limit/required-cover and business-activity questions where those forms already have them. The standard RC flow does not replace those specialist enquiries. |

No detailed quotation form was shortened for conversion optimisation. The four approved standard flows collect the specified underwriting dataset at first submission, supporting immediate quotation work with minimal follow-up. This is not a guarantee that every insurer or specialist risk can be quoted without clarification. The separately labelled specialist/claims enquiries are not represented as complete standard-product quotation intake.

NIF checksum, Portuguese postcode masking, start-date validation, adult policyholder rules, conditional cleanup and plate normalization are shared across languages. Impossible calendar dates are rejected rather than rolled into another month. Existing numeric limits and decimal inputs are respected. Dates remain `YYYY-MM-DD`; submitted numeric values remain unformatted raw Netlify values, not locale-formatted currency strings.

## Multilingual implementation and rendering

All four flows exist in **PT, EN, NL, DE, FR, PL, SV, DA, ZH and HE**. Swedish, Danish and Hebrew use the established `/se/`, `/dk/` and `/il/` trees. Ten existing translation JSON files supply shared labels, runtime validation and customer acknowledgements. Each detailed flow has the full 249-country list. Portuguese validation remains the same in every language.

Core/common/country translation-key parity passes. Nine warnings remain for existing Life/Business/Private Client keys outside this four-product scope. The Portuguese-only contextual block is deliberately exempt from translation parity.

Hebrew retains RTL labels/layout and LTR Portuguese-format fields. Chinese form labels wrap within their controls. Local Chromium checks cover desktop 1440 px and mobile 390/320 px; external requests are blocked and all form POSTs are intercepted. See the test results and existing page-overflow limitation below.

## Broker/agent terminology

Audited the exact before/after changes in `04e8a31`, rather than replacing every instance of “intermediary” or “agent”. Restored legitimate EN broker/insurance broker/brokerage and DE Makler/Versicherungsmakler wording in affected marketing copy, badges, headings, navigation, metadata, generator sources and article data. Corrected the normalizer and tests that had forbidden these commercial terms. Grammar checks guard against malformed articles such as “an broker”.

The contextual rule tables retain the separate safeguards concerning independence and insurer relationships. Automatic marketing rules no longer rewrite formal entity-registration notices. Portuguese-category disclosures remain, including the Private Client footer/topline and provider descriptions. Existing contextual English distinctions (for example insurance versus tax/legal advice) remain where they predated the commit. Third-party terminology and real-estate Makler references are preserved. Portuguese self-description was not changed to “corretor”; the site's Portuguese registered category remains agente de seguros não ligado.

## Private Client preservation

Verified source/output consistency, country navigation, representative authority, selected risks, links, canonical, structured data and sitemap presence for:

- `/en/private-clients/`
- `/en/private-clients-spain/`
- `/de/private-clients/`
- `/de/private-clients-portugal/`
- `/de/versicherung-tavira/`

A direct comparison with HEAD confirms the five pages' content is unchanged apart from the added product-route navigation on applicable Portugal pages and the allowed German terminology correction. The Spain-only review remains a Spain review. Portugal/Spain coordination, Lagos/Tavira distinction, Personal Assistant, Property Manager and Family Office journeys, technical/hyperlocal content, country navigation and SEO structure were preserved. Tests also compare Portuguese public-page content outside the authorised form/navigation regions against HEAD.

## Infrastructure, production test data and consent

There is **one existing pipeline**: Netlify Forms → `submission-created.mjs` → the existing Supabase quotation storage, existing CRM synchronization and existing Resend account/handler. No second endpoint, table, database architecture or email pipeline was introduced. No migration or schema change is in the diff.

- Supabase: existing `public.quote_requests`, with common/risk JSON, insured-person JSON, consent JSON, language/form/submission metadata and status. Existing server insertion and backoffice assumptions remain. Live readback confirms RLS enabled and an authenticated SELECT policy requiring `is_admin()`. No anonymous insert policy was added; server insertion uses the existing service-role path.
- Production cleanup: a fresh read-only query returned **0 rows** for `submission_id = 'quotation-correction-rollback-test-20260918'`. The earlier transactional live test was rolled back successfully. This statement concerns this task's test identifier, not a claim that all historical test rows in the database have been removed. No further live insert was made in this pass.
- Resend: existing complete internal notification retained, with source language and submitted risk/repeater data. The prior quotation correction added the previously absent translated customer acknowledgement inside the same handler/account, with an acknowledgement idempotency key when a submission ID is available. Customer messages do not echo underwriting data. Mocked handler tests verify both email calls and the existing Supabase insertion. Actual post-deployment delivery has not been exercised.
- CRM: existing restricted contact/attribution payload remains; full underwriting information is stored in `quote_requests` and the internal notification. Five new form identities use the existing classification maps; the German `telefon` alias is recognized.
- Anti-spam: existing Netlify honeypot/submission handling retained; no visible CAPTCHA or new anti-spam service was introduced.

Consent storage is `consentimento.aceite`, `timestamp`, `versao_politica`, and `ip`:

- Acceptance recognizes existing language/checkbox aliases, including Private Client `privacy=accepted`. Missing explicit consent remains unspecified, never assumed true.
- Timestamp is generated with `new Date().toISOString()` when the server builds the quotation row. It is server processing time, not proof of the exact browser click time.
- Privacy-policy version remains the existing fixed value **`2026-03-05`**. It is not automatically bumped by a form submission or this task.
- **IP remains null.** The Netlify submission event does not establish a reliable end-user IP in this implementation. The webhook caller's IP must not be misrepresented as the customer's. No new IP-capture architecture was built.

## Tests and results

| Check | Result |
|---|---|
| `npm test` | 140 passed, 0 failed, including function bundle and clinical-data prechecks |
| `node scripts/quotation-corrections.test.mjs` | 46 passed, 0 failed: forty language/product contracts, required fields, minors, drafts, conditionals, formats, acknowledgement/storage integration and corrected enquiry routing |
| `node scripts/quote-validators.test.mjs` | 19 passed, 0 failed |
| `node --test scripts/pre-push-verification.test.mjs` | 44 passed, 0 failed: forty routes, PT homepage/context, Private Client preservation, sitemap/canonicals and terminology |
| `node scripts/wizard-required-fields-test.mjs` | All checks passed: withheld required fields, degraded startup, nationality restoration and translated Health repeaters |
| `node scripts/wizard-form-integrity-test.mjs` | All 37 existing wizard checks passed; the five new utilities are covered by the forty-product contracts |
| `node scripts/form-payload-test.mjs` | All 37 cases passed |
| `npm run check:i18n` | 0 failures, 9 out-of-scope translation warnings |
| `node scripts/build-quote-i18n.mjs --check` | Passed |
| `node scripts/correct-quotation-forms.mjs --check` | Passed |
| `npm run check:freshness` | 0 failures, 6 warnings detailed below |
| `node scripts/check-rendered-text-integrity.mjs` | 446 HTML files scanned; 0 failures |
| Existing `link-audit.mjs` logic, temporary report destination | 446 files / 432 indexed URLs; 0 broken links, 0 redirected links, 0 orphaned sitemap pages |
| Existing `cannibalization-check.mjs` logic, temporary report destination | 34 existing commercial/hub pages checked; 0 flagged pairs at threshold 0.45; new utilities separately checked for noindex/sitemap exclusion |
| Local quotation Chromium checks | 120 language/product/viewport combinations × 3 steps = 360 step-layout checks passed; 30 intercepted homepage submissions passed with phone/company blank; minors accepted in all ten Health flows |
| Local Private Client Chromium checks | All 5 pages × 3 widths = 15 passed; representative authority, risk selections and intercepted submissions checked |
| Hebrew 320 px baseline comparison | Existing document width 381 px in both HEAD and working tree; form-control bounds and numeric direction checks passed |
| Live Supabase readback | Task test row count 0; RLS true; authenticated SELECT restricted by `is_admin()` |
| `git diff --check` | Passed |

The ordinary sandbox prevented the tests' Git subprocesses and local browser access; those checks were rerun successfully with the approved execution permissions. No successful test result above relies on the failed sandbox attempt. Browser and handler tests did not send production submissions or real email.

## Remaining limitations

1. Consent IP is null; timestamp is server handling time, as documented above.
2. Existing page-wide horizontal overflow remains on some very narrow pages outside the form controls, including PT/NL/PL/SV/DA/DE/ZH/HE content/chrome at 320 or 390 px. Hebrew at 320 px has the same 381 px document width in HEAD. The form controls pass their bounds checks; this is not a claim that every entire page is overflow-free. Unrelated page layout was not redesigned.
3. Freshness still reports six warnings: shared chrome drift, missing chrome on a small number of pages, `ar-site.css` drift, one stale article in each PT/EN feed, and a hreflang inventory recorded as 439 versus 446 current HTML files. The count increase includes two committed Private Client pages and five utility forms. These are reported rather than concealed by a broad regeneration.
4. Nine existing translation warnings concern products outside the approved four-product scope. The core flows have parity.
5. The link audit also reports 16 pages with a single inbound link and three pages deeper than three clicks. Those are existing SEO observations, not broken links or grounds for redesign in this pass.
6. The eleven specialist/claims enquiries retain their existing questions and may require specialist follow-up; they are no longer incorrectly directed to standard Home/Health forms. Core quotation completeness is not asserted for these separate enquiry workflows.
7. New Netlify form discovery and actual production email delivery require a later authorised deployment. No live end-to-end submission/delivery is claimed here.
8. Legacy generators that cannot yet faithfully reproduce authored wizards refuse to overwrite them. Their existing safeguard is preserved; this verification did not replace that architecture.

## Changed files and diff summary

Current task diff: **401 files: 380 tracked modifications and 21 new files**. This excludes the untouched pre-existing user audit.

| Category | Files |
|---|---:|
| Source, browser runtime, styles and data | 54 |
| Translation JSON files | 10 |
| Published HTML/pages (321 modified + 5 new) | 326 |
| Tests and browser checks | 5 |
| Documentation and inventories | 6 |

Tracked `git diff --stat`: **380 files changed, 4,138 insertions, 4,803 deletions**. Including new task files: approximately **6,125 added / 4,803 removed lines**. The file inventory contains the exact per-path counts.

The large diff is chiefly repeated static HTML: quotation field corrections and the requested site-wide reversal of confirmed EN/DE terminology regressions. It does not represent hundreds of new routes. Some older public HTML files are maintained source, so “generated output” is not an accurate description of every page. Source corrections are retained alongside output; runtime translation objects are generated from the existing JSON tables.

Every material path and its line counts appear in [final-pre-push-files.tsv](final-pre-push-files.tsv), grouped into source/runtime/data, translations, published HTML/pages, tests and documentation. The earlier [quotation-form-changes.tsv](quotation-form-changes.tsv) is the historical inventory from the preceding form correction, not the current final total.

No push or deployment was performed. Human review remains possible against the full local diff; the current HEAD alone does not include the uncommitted corrections.
