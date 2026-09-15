#!/usr/bin/env node
/**
 * Fails the build if any public form, in any language, asks for special-
 * category health data — a diagnosis, a treatment, medication, a medical
 * condition, a clinical/health history. "Nenhuma recolha de informação
 * clínica em formulário público, em nenhum ramo e em nenhuma língua" has
 * been the same transversal restriction in every round of the Formulários
 * de Cotação v2 work, and the same class of problem has now been found and
 * fixed four times independently, in four different components, because
 * nothing before this script actually enforced it:
 *
 *   1. A1 — the shared blog-CTA branch fields (scripts/upgrade-forms.mjs),
 *      81 pages, a `saude_preexistentes`/`health_preexisting` field.
 *   2. A1 — the PL/SE/DK/ZH/IL market-cluster branch fields
 *      (scripts/{pl,se,dk,zh,il}-content/ui.mjs), a `health_history` field.
 *   3. A1 — DE/NL free-text formIntro/placeholder copy that actively
 *      invited clinical detail in a message field, on 5 pages.
 *   4. This round — the NL shared branch-select form (public/nl/*), a
 *      `zorg_aandoeningen` field on 16 pages, PLUS a second instance A1's
 *      own method (searching free-text fields) would have caught but never
 *      looked for outside DE/NL's dedicated `-content/*.mjs` generators: a
 *      one-off formIntro/placeholder pair on
 *      zorgverzekering-bestaande-aandoening-portugal, not driven by any
 *      generator at all.
 *
 * Each of the four was found by hand, in a different sweep, using a
 * different method — which is exactly why the same class of bug kept
 * coming back. This script is the fifth method: a single, permanent,
 * automated sweep of every public/ page's every <form>, run on every
 * `npm test` (wired into "pretest", next to the esbuild bundle check),
 * covering both places a public form can solicit clinical data:
 *
 *   - a field's own `name="..."` (a v2 field-naming convention is
 *     snake_case, English-ish tokens — "health_history", "zorg_
 *     aandoeningen" — checked as a substring against each language's own
 *     token list)
 *   - visible text a visitor actually reads: <label>, <option> and
 *     `placeholder="..."` content, PLUS free paragraph copy immediately
 *     framing the form (`class="form-intro"`/`class="lp-form-sub"` and
 *     similar) — checked against each language's own phrase list.
 *
 * Deliberately scoped per page language (public/<lang>/... or public/en/,
 * public/seguros|blog/... treated as pt): a term list is only ever checked
 * against pages in that same language, so Swedish "medicin" never gets
 * checked against a Portuguese page's "Medicina Tradicional Chinesa" (a
 * legitimate RC-therapy activity name, not clinical data about a visitor —
 * confirmed a real false positive during this file's own construction).
 *
 * Deliberately NOT a check of the whole page: editorial/article body copy
 * that explains a general process (e.g. "prepare a clinical summary before
 * you approach an insurer directly") is not itself a public form asking a
 * visitor for that data — only text inside a <form>...</form> block, or a
 * field's own name, counts. A false positive here is meant to be rare, not
 * impossible: read the match before deciding it's real (see FORM-SCOPED
 * TERMS' own comments for the false positives already found and excluded).
 *
 * FR is included, scoped, and never fixed by this script or from this
 * round's own work — "restantes línguas" prompt: "Francês: não tocar, em
 * nenhuma circunstância." A hit there still fails the build (RGPD doesn't
 * carve out an exception for a language nobody is actively working on) but
 * fixing it, if one is ever found, is explicitly out of scope for whoever
 * is running this script under that instruction.
 *
 * Usage: node scripts/check-clinical-data-guard.mjs (also `npm run
 * check:clinical-data`, and wired into `npm test`'s pretest step).
 */
import { readFile } from 'node:fs/promises';
import { globSync } from 'node:fs';
import { join } from 'node:path';
import { PUBLIC } from './lib/chrome.mjs';

// Substrings checked against a field's own `name="..."` — case-insensitive,
// plain substring (v2's own naming convention concatenates freely, e.g.
// "zorg_aandoeningen", "health_history", "kv_vorerkrankung").
const NAME_TERMS = {
  pt: ['doenca', 'doença', 'patologia', 'diagnostic', 'preexist', 'pre_exist', 'historico_clinic', 'historial_medic'],
  en: ['medical_cond', 'pre_existing', 'preexisting', 'diagnos', 'medication', 'illness', 'disease', 'health_hist', 'health_cond', 'medical_hist'],
  nl: ['aandoening', 'ziekte', 'behandeling', 'medicatie', 'diagnose', 'gezondheidstoestand', 'voorgeschiedenis'],
  de: ['erkrankung', 'krankheit', 'behandlung', 'medikament', 'diagnose', 'gesundheitszustand'],
  fr: ['maladie', 'traitement_medic', 'medicament', 'diagnostic', 'antecedent_medic', 'etat_de_sante', 'pathologi'],
  pl: ['choroba', 'schorzeni', 'leczeni', 'diagnoz', 'medyczna', 'zdrowia'],
  sv: ['sjukdom', 'halsotillstand', 'medicinering', 'diagnos', 'sjukdomshist'],
  da: ['sygdom', 'helbredstilstand', 'medicin', 'diagnose', 'sygdomshist'],
  zh: ['疾病', '病情', '治疗', '药物', '诊断', '病史'],
  he: ['מחלה', 'מצברפוא', 'תרופ', 'אבחון'],
};

// Phrases checked against visible text (<label>, <option>, placeholder=,
// and the paragraph(s) that directly frame a form — class="form-intro" and
// similar). Longer/compound phrases only, deliberately — a bare 3-letter
// token like Polish "lek" (medicine/drug) matched "elektronika" as a
// substring during this file's own construction; dropped rather than
// word-boundaried, since the compound phrases below already catch every
// real instance found across two audit rounds without that noise. Swedish
// "hälsotillstånd"/Danish "helbredstilstand" (compounds) are used instead
// of the bare, more generic "tillstånd"/"tilstand" ("condition" but also
// ordinary "permit" — a home-insurance page can legitimately say
// "byggtillstånd", building permit) for the same reason.
const TEXT_TERMS = {
  pt: ['doença', 'doenca', 'patologia', 'diagnóstic', 'diagnostic', 'tratamento médic', 'tratamento medic', 'medicação', 'medicacao', 'histórico clínico', 'historico clinico', 'pré-existente', 'pre-existente', 'preexistente', 'condição de saúde', 'condicao de saude'],
  en: ['medical condition', 'pre-existing condition', 'preexisting condition', 'diagnosis', 'diagnose', 'medication', 'illness', 'disease', 'health history', 'medical history', 'current treatment'],
  nl: ['aandoening', 'ziekte', 'behandeling', 'medicatie', 'diagnose', 'gezondheidstoestand', 'voorgeschiedenis'],
  de: ['erkrankung', 'krankheit', 'behandlung', 'medikament', 'diagnose', 'gesundheitszustand'],
  fr: ['maladie', 'traitement médical', 'traitement medical', 'médicament', 'medicament', 'diagnostic', 'antécédents médicaux', 'antecedents medicaux', 'état de santé', 'etat de sante', 'pathologie'],
  pl: ['choroba', 'schorzeni', 'leczeni', 'diagnoz', 'historia medyczna', 'stan zdrowia'],
  sv: ['sjukdom', 'hälsotillstånd', 'halsotillstand', 'medicinering', 'diagnos', 'sjukdomshistoria', 'medicinsk behandling'],
  da: ['sygdom', 'helbredstilstand', 'medicin', 'diagnose', 'sygdomshistorie', 'medicinsk behandling'],
  zh: ['疾病', '病情', '治疗', '药物', '诊断', '病史'],
  he: ['מחלה', 'מצב רפואי', 'טיפול תרופתי', 'תרופות', 'אבחון', 'היסטוריה רפואית'],
};

// A page whose entire topic is pre-existing conditions has to *name* the
// concept to reassure a visitor it isn't collected here — "we discuss the
// condition separately, never via the form" necessarily contains the word
// "condition". Confirmed real during this file's construction: both NL's
// own fix (just above) and DE's pre-existing, already-good page tripped a
// naive text match on exactly that sentence. A hit within a short window of
// one of these markers is the reassurance pattern itself, not a
// solicitation — skipped rather than flagged. Every marker here is the
// literal phrasing already live on a page that passed manual review; a
// future language gets a plausible equivalent so the same fix, once
// applied there too, does not retrigger this guard.
const SAFE_MARKERS = {
  pt: ['nunca pelo formulário', 'nunca pelo formulario', 'tratamos à parte', 'tratamos a parte'],
  en: ['never via the form', 'handled separately', 'separately, never'],
  nl: ['nooit via het formulier', 'bespreken wij apart', 'apart, nooit via het formulier'],
  de: ['nie über das formular', 'besprechen wir separat', 'separat, nie über das formular'],
  fr: ['jamais via le formulaire', 'traité séparément', 'traite separement'],
  pl: ['nigdy przez formularz', 'omawiamy osobno'],
  sv: ['aldrig via formuläret', 'aldrig via formularet', 'tar vi enskilt'],
  da: ['aldrig via formularen', 'tager vi separat'],
  zh: ['从不通过表格', '单独讨论'],
  he: ['לעולם לא דרך הטופס', 'דנים בנפרד'],
};

const MARKER_WINDOW = 150;

function nearSafeMarker(text, matchIndex, lang) {
  const markers = SAFE_MARKERS[lang] || [];
  if (!markers.length) return false;
  const windowStart = Math.max(0, matchIndex - MARKER_WINDOW);
  const windowEnd = Math.min(text.length, matchIndex + MARKER_WINDOW);
  const around = text.slice(windowStart, windowEnd).toLowerCase();
  return markers.some((marker) => around.includes(marker.toLowerCase()));
}

const LANG_DIRS = {
  nl: 'nl', de: 'de', fr: 'fr', pl: 'pl', zh: 'zh', he: 'il',
  // sv/da's URL-path language codes don't match their i18n/vocabulary
  // codes either (see data/i18n/quote-form/{sv,da}.json vs. /se//dk/) —
  // same gotcha, same fix: map explicitly rather than derive from the path.
  sv: 'se', da: 'dk',
};

function langForPath(relPath) {
  for (const [lang, dir] of Object.entries(LANG_DIRS)) {
    if (relPath === dir || relPath.startsWith(dir + '/')) return lang;
  }
  if (relPath === 'en' || relPath.startsWith('en/')) return 'en';
  return 'pt'; // everything else — seguros/, blog/, the PT root, etc.
}

const FORM_INTRO_CLASSES = ['form-intro', 'lp-form-sub', 'hero-form-note', 'wizard-helper'];

function extractFormBlocks(html) {
  const blocks = [];
  const re = /<form\b[\s\S]*?<\/form>/gi;
  let m;
  while ((m = re.exec(html))) blocks.push(m[0]);
  return blocks;
}

function extractVisibleText(formHtml) {
  const parts = [];
  for (const m of formHtml.matchAll(/<label\b[^>]*>([\s\S]*?)<\/label>/gi)) parts.push(m[1]);
  for (const m of formHtml.matchAll(/<option\b[^>]*>([\s\S]*?)<\/option>/gi)) parts.push(m[1]);
  for (const m of formHtml.matchAll(/\bplaceholder="([^"]*)"/gi)) parts.push(m[1]);
  return parts.join(' \n ');
}

// A form's own intro paragraph is framing text right before it, not inside
// the <form> tag itself — checked separately, within a window immediately
// preceding each form block, rather than page-wide (so an unrelated
// article section two screens above the form never counts).
function extractPreFormIntro(html, formStart) {
  const windowStart = Math.max(0, formStart - 1200);
  const before = html.slice(windowStart, formStart);
  const parts = [];
  for (const cls of FORM_INTRO_CLASSES) {
    const re = new RegExp(`class="[^"]*\\b${cls}\\b[^"]*"[^>]*>([\\s\\S]*?)</p>`, 'gi');
    for (const m of before.matchAll(re)) parts.push(m[1]);
  }
  return parts.join(' \n ');
}

const files = globSync('**/*.html', { cwd: PUBLIC });
const hits = [];

for (const rel of files) {
  const html = await readFile(join(PUBLIC, rel), 'utf8');
  const relPath = rel.replace(/\/index\.html$/, '').replace(/^\/+/, '');
  const lang = langForPath(relPath);
  const nameTerms = NAME_TERMS[lang] || [];
  const textTerms = TEXT_TERMS[lang] || [];
  if (!nameTerms.length && !textTerms.length) continue;

  const re = /<form\b[\s\S]*?<\/form>/gi;
  let m;
  while ((m = re.exec(html))) {
    const formHtml = m[0];

    for (const nm of formHtml.matchAll(/\bname="([^"]+)"/gi)) {
      const value = nm[1].toLowerCase();
      for (const term of nameTerms) {
        if (value.includes(term.toLowerCase())) {
          hits.push({ file: rel, lang, kind: 'field name', term, detail: `name="${nm[1]}"` });
        }
      }
    }

    const visible = extractVisibleText(formHtml) + ' \n ' + extractPreFormIntro(html, m.index);
    const visibleLower = visible.toLowerCase();
    for (const term of textTerms) {
      const termLower = term.toLowerCase();
      let searchFrom = 0;
      while (true) {
        const idx = visibleLower.indexOf(termLower, searchFrom);
        if (idx === -1) break;
        searchFrom = idx + termLower.length;
        if (nearSafeMarker(visible, idx, lang)) continue; // the reassurance pattern itself, not a solicitation
        const ctx = visible.slice(Math.max(0, idx - 30), idx + term.length + 30).replace(/\s+/g, ' ').trim();
        hits.push({ file: rel, lang, kind: 'visible text', term, detail: `…${ctx}…` });
        break; // one hit per term per form is enough to fail the build and point at the file
      }
    }
  }
}

console.log('=== Clinical-data guard (public forms, every language) ===\n');
console.log(`html files scanned: ${files.length}`);

if (hits.length) {
  console.log(`\nFAIL (${hits.length}):`);
  for (const h of hits) {
    console.log(`  [${h.lang}] public/${h.file} — ${h.kind} matched "${h.term}": ${h.detail}`);
  }
  console.log(
    '\nA public form must never ask for a diagnosis, a treatment, medication, a medical/health condition or history — ' +
      'in any ramo, in any language. Remove the field (or rewrite the copy so it stops inviting clinical detail), ' +
      'the same way the four prior instances of this were fixed. See this file\'s own header comment for precedent.'
  );
} else {
  console.log('\nno clinical-data pattern found in any public form, in any language.');
}

console.log(`\n=== ${hits.length} failure(s) ===`);
process.exit(hits.length ? 1 : 0);
