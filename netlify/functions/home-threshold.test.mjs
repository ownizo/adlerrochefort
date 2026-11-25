import { test } from "node:test";
import assert from "node:assert/strict";
import { belowHomeThreshold } from "./submission-created.mjs";

test("home leads below the €700,000 rebuild threshold are flagged", () => {
  assert.equal(belowHomeThreshold({ "rebuild-value": "Under €700,000 (below our threshold)" }), true);
  assert.equal(belowHomeThreshold({ home_rebuild_value: "€120,000" }), true);
  assert.equal(belowHomeThreshold({ habitacao_valor: "160 000 €" }), true);
});

test("home leads at or above the threshold, or unparseable, are not flagged", () => {
  assert.equal(belowHomeThreshold({ "rebuild-value": "€700,000–€1,000,000" }), false);
  assert.equal(belowHomeThreshold({ home_rebuild_value: "€1,200,000" }), false);
  assert.equal(belowHomeThreshold({ home_rebuild_value: "1.2M" }), false);
  assert.equal(belowHomeThreshold({ "rebuild-value": "Not sure" }), false);
  assert.equal(belowHomeThreshold({}), false);
});
