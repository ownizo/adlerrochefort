import test from "node:test";
import assert from "node:assert/strict";

import { parseDynamicFields, applyDynamicFields } from "./dynamic-fields.mjs";

// ── Round-trip test (Fase 1 prompt: mandatory, phase isn't done without it) ──
// Simulates exactly what public/js/quote-wizard.js's serializeDynamicBlocks()
// does client-side — JSON.stringify(blocks) into the hidden field's .value —
// then feeds that string through the server-side parser, the same shape
// submission-created.mjs receives it in as data.dados_dinamicos.
test("round-trip: three blocks with accented characters and quotes survive serialise -> parse intact", () => {
  const blocks = [
    { nome_completo: "João da Silva Ferreira", data_nascimento: "1985-03-12", nif: "501442600" },
    { nome_completo: 'Maria "Mia" Conceição', data_nascimento: "2012-07-04", nif: "" },
    { nome_completo: "Ångström O'Brien-Núñez", data_nascimento: "1999-12-31", nif: "999888777" },
  ];

  // Client side (the wizard's own logic, reproduced here rather than
  // imported — quote-wizard.js is a browser IIFE with no module exports by
  // design, matching public/js/ar-quote-form.js's house style; what's under
  // test is the wire format the two sides agree on, not the DOM wiring).
  const serialized = JSON.stringify(blocks);

  // Server side.
  const { blocks: recovered, error } = parseDynamicFields(serialized);

  assert.equal(error, null);
  assert.deepEqual(recovered, blocks);
  assert.equal(recovered[1].nome_completo, 'Maria "Mia" Conceição');
  assert.equal(recovered[2].nome_completo, "Ångström O'Brien-Núñez");
});

test("parseDynamicFields: empty string, null and undefined all parse to an empty, error-free result", () => {
  assert.deepEqual(parseDynamicFields(""), { blocks: [], error: null });
  assert.deepEqual(parseDynamicFields("   "), { blocks: [], error: null });
  assert.deepEqual(parseDynamicFields(null), { blocks: [], error: null });
  assert.deepEqual(parseDynamicFields(undefined), { blocks: [], error: null });
});

test("parseDynamicFields: invalid JSON never throws, is reported as invalid_json", () => {
  assert.doesNotThrow(() => parseDynamicFields("{not valid json"));
  assert.deepEqual(parseDynamicFields("{not valid json"), { blocks: [], error: "invalid_json" });
});

test("parseDynamicFields: valid JSON that isn't an array is reported as not_an_array, not thrown", () => {
  assert.deepEqual(parseDynamicFields('{"a":1}'), { blocks: [], error: "not_an_array" });
  assert.deepEqual(parseDynamicFields("42"), { blocks: [], error: "not_an_array" });
  assert.deepEqual(parseDynamicFields('"just a string"'), { blocks: [], error: "not_an_array" });
});

// ── applyDynamicFields: where the parsed blocks land ─────────────────────
test("applyDynamicFields: saúde blocks go to pessoas_seguras, not dados_risco", () => {
  const row = { ramo: "saude", dados_risco: {}, pessoas_seguras: null };
  const blocks = [{ nome_completo: "Criança Um", data_nascimento: "2015-01-01" }];
  applyDynamicFields(row, "saude", JSON.stringify(blocks));
  assert.deepEqual(row.pessoas_seguras, blocks);
  assert.deepEqual(row.dados_risco, {});
});

test("applyDynamicFields: non-saúde ramos fold blocks into dados_risco.blocos_dinamicos, never pessoas_seguras", () => {
  const row = { ramo: "auto", dados_risco: { matricula: "AA-00-BB" }, pessoas_seguras: null };
  const blocks = [{ exemplo: "bloco genérico" }];
  applyDynamicFields(row, "auto", JSON.stringify(blocks));
  assert.deepEqual(row.dados_risco, { matricula: "AA-00-BB", blocos_dinamicos: blocks });
  assert.equal(row.pessoas_seguras, null);
});

test("applyDynamicFields: no dynamic field sent (Auto, Fase 1) leaves the row untouched — the normal case", () => {
  const row = { ramo: "auto", dados_risco: { matricula: "AA-00-BB" }, pessoas_seguras: null };
  applyDynamicFields(row, "auto", undefined);
  assert.deepEqual(row.dados_risco, { matricula: "AA-00-BB" });
  assert.equal(row.pessoas_seguras, null);
});

test("applyDynamicFields: a parse failure is recorded in dados_risco and never throws, rest of the row is untouched", () => {
  const row = { ramo: "auto", dados_risco: { matricula: "AA-00-BB" }, pessoas_seguras: null };
  assert.doesNotThrow(() => applyDynamicFields(row, "auto", "{broken"));
  assert.deepEqual(row.dados_risco, { matricula: "AA-00-BB", dados_dinamicos_erro: "invalid_json" });
});
