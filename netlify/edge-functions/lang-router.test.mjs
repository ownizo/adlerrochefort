import test from "node:test";
import assert from "node:assert/strict";

const { default: langRouter } = await import("./lang-router.ts");

function request(url, headers = {}) {
  return new Request(url, { headers });
}

test("PT-browser visitor stays on / with the query string intact", async () => {
  const req = request("https://adlerrochefort.com/?source=blog%3Aseguro-titulo-imovel-portugal", {
    "accept-language": "pt-PT,pt;q=0.9",
  });
  const res = await langRouter(req, {});
  assert.equal(res, undefined, "PT browser should not be redirected");
});

test("non-PT-browser visitor is redirected to /en/ with the query string intact", async () => {
  const req = request("https://adlerrochefort.com/?source=blog%3Aseguro-titulo-imovel-portugal", {
    "accept-language": "en-GB,en;q=0.9",
  });
  const res = await langRouter(req, {});
  assert.ok(res, "expected a redirect response");
  assert.equal(res.status, 302);
  assert.equal(res.headers.get("location"), "https://adlerrochefort.com/en/?source=blog%3Aseguro-titulo-imovel-portugal");
});

test("a visit with no query parameters behaves exactly as before (no regression)", async () => {
  const ptReq = request("https://adlerrochefort.com/", { "accept-language": "pt-PT" });
  assert.equal(await langRouter(ptReq, {}), undefined);

  const enReq = request("https://adlerrochefort.com/", { "accept-language": "en-US,en;q=0.9" });
  const enRes = await langRouter(enReq, {});
  assert.equal(enRes.status, 302);
  assert.equal(enRes.headers.get("location"), "https://adlerrochefort.com/en/");

  const deReq = request("https://adlerrochefort.com/", { "accept-language": "de-DE,de;q=0.9" });
  const deRes = await langRouter(deReq, {});
  assert.equal(deRes.headers.get("location"), "https://adlerrochefort.com/de/");
});

test("explicit nf_lang=en cookie redirects to /en/ with the query string intact, overriding Accept-Language", async () => {
  const req = request("https://adlerrochefort.com/?source=blog%3Atest", {
    "accept-language": "pt-PT",
    cookie: "nf_lang=en",
  });
  const res = await langRouter(req, {});
  assert.equal(res.headers.get("location"), "https://adlerrochefort.com/en/?source=blog%3Atest");
});

test("explicit nf_lang=pt cookie keeps the visitor on / with the query string intact, overriding Accept-Language", async () => {
  const req = request("https://adlerrochefort.com/?source=blog%3Atest", {
    "accept-language": "en-GB",
    cookie: "nf_lang=pt",
  });
  const res = await langRouter(req, {});
  assert.equal(res, undefined);
});

// Documents the existing SEO-safety behavior (unchanged by this fix): a
// crawler that sends no Accept-Language header — Googlebot's documented
// default — falls through to the PT homepage rather than being redirected,
// so the x-default version stays crawlable and indexable at "/".
test("a request with no Accept-Language header (Googlebot's documented default) is not redirected", async () => {
  const req = request("https://adlerrochefort.com/");
  const res = await langRouter(req, {});
  assert.equal(res, undefined, "a crawler with no Accept-Language header must see the PT homepage, not a redirect");
});

test("deep pages are never redirected, regardless of Accept-Language", async () => {
  const req = request("https://adlerrochefort.com/blog/seguro-titulo-imovel-portugal/", {
    "accept-language": "en-GB",
  });
  const res = await langRouter(req, {});
  assert.equal(res, undefined);
});
