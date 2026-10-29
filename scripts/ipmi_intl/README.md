# IPMI pages in every language — sources

Content for `scripts/build-ipmi-intl-pages.py`. One module per language tree
(`pt`, `en`, `de`, `es`, `nl`, `fr`, `it`, `pl`, `se`, `dk`, `il`, `zh`), each with
`UI`, `HUB` (None where the hub already existed: EN, DE, ES), `ALLIANZ` and `CIGNA`.
`{HUB}` in any string is replaced with that language's hub path.

Every fact is one already published on the site or stated by the owner. Nothing
else may be added without a source.

- Plan structure, Allianz Care range (Nov 2025, 12 months abroad, Base/Enhanced/
  Signature, repatriation in every plan, maternity after 12 months, Europe area,
  screenings/HRT, out-patient psychiatry without waiting period) and Cigna Global
  structure (Silver/Gold/Platinum, four modules, cost-share, Platinum without fixed
  cap): `/en/blog/allianz-care-vs-cigna-global-portugal-spain/`.
- Eligibility rules, US citizens (Cigna only), countries requiring local cover,
  real anonymised premiums Sept–Oct 2026, deductible ranges, 10% annual discount:
  `/en/international-health-insurance/`.
- Allianz Care does not accept residents of Brazil; Cigna Global US emergency
  limits (€75,000 Silver, €200,000 Gold, full on Platinum); 180 days in the
  country of nationality: `scripts/ipmi_pages_content.py` (insurer correspondence
  and quotes, Sept–Oct 2026).
- Quote data (name, date of birth, nationality, country of residence, US state),
  Allianz Care as strongest on protection, support and claims, Portuguese domestic
  plans (pre-existing conditions generally excluded, new members over 65 generally
  not accepted): owner, October 2026.

Service language: English for NL, FR, IT, PL, SE, DK, IL and ZH pages (same
statement as the existing pages in those languages).

## APRIL International (October 2026)

`april.py` holds the APRIL International (MyHealth International) page for every
language and the patches that add APRIL International to the hubs, the trust
strip and the related links. Source: APRIL International MyHealth International
documents 2026-2027 supplied by the owner on 29 October 2026 (brochure, benefits
schedule, IPID, terms and conditions, member guide). The EN, DE and ES hubs are
hand-built and were updated by `scripts/add-april-to-ipmi-hubs.py`.
