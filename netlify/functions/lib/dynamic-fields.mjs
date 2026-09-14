// -----------------------------------------------------------------------------
// dynamic-fields.mjs — server-side counterpart to public/js/quote-wizard.js's
// dynamic-block serialisation. The wizard writes a JSON array of block
// objects into the form's hidden `dados_dinamicos` field before submit (see
// that file's own comment on why the listener runs in the capture phase);
// this module reads it back on the way into quote_requests.
//
// Defensive by requirement (Fase 1 prompt): invalid JSON, an empty string,
// or a missing field must never throw and must never stop the rest of the
// submission — the row is still written with whatever else it has, and the
// parse failure is recorded rather than silently dropped.
// -----------------------------------------------------------------------------

/**
 * Parses the raw `dados_dinamicos` form value. Never throws.
 *
 * @returns {{ blocks: object[], error: string|null }} `error` is one of
 *   null (parsed fine, `blocks` may still be an empty array — nothing was
 *   ever registered, which is the normal case for a ramo with no repeater,
 *   e.g. Auto), 'invalid_json' (present but not parseable), or
 *   'not_an_array' (parsed but not the array shape the wizard always sends).
 */
export function parseDynamicFields(raw) {
  if (raw == null || String(raw).trim() === "") {
    return { blocks: [], error: null };
  }
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (err) {
    return { blocks: [], error: "invalid_json" };
  }
  if (!Array.isArray(parsed)) {
    return { blocks: [], error: "not_an_array" };
  }
  return { blocks: parsed, error: null };
}

/**
 * Where the parsed blocks belong in the quote_requests row, depending on
 * ramo (Especificação v2, secção 9): saúde's blocks are the household's
 * "pessoas seguras" repeater rows and go in their own column; every other
 * ramo's dynamic blocks (none exist yet — this is the general mechanism
 * Fase 1 builds ahead of Fase 2 needing it) fold into dados_risco under a
 * namespaced key, never overwriting a same-named field the form already
 * sent directly.
 */
export function applyDynamicFields(row, ramo, raw) {
  const { blocks, error } = parseDynamicFields(raw);
  if (error) {
    row.dados_risco = { ...row.dados_risco, dados_dinamicos_erro: error };
    return row;
  }
  if (!blocks.length) return row;

  if (ramo === "saude") {
    row.pessoas_seguras = blocks;
  } else {
    row.dados_risco = { ...row.dados_risco, blocos_dinamicos: blocks };
  }
  return row;
}
