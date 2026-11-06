import test from "node:test";
import assert from "node:assert/strict";

const { default: langRouter } = await import("../netlify/edge-functions/lang-router.ts");

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

test("explicit ar_lang=en cookie redirects to /en/ with the query string intact, overriding Accept-Language", async () => {
  const req = request("https://adlerrochefort.com/?source=blog%3Atest", {
    "accept-language": "pt-PT",
    cookie: "ar_lang=en",
  });
  const res = await langRouter(req, {});
  assert.equal(res.headers.get("location"), "https://adlerrochefort.com/en/?source=blog%3Atest");
});

test("explicit ar_lang=pt cookie keeps the visitor on / with the query string intact, overriding Accept-Language", async () => {
  const req = request("https://adlerrochefort.com/?source=blog%3Atest", {
    "accept-language": "en-GB",
    cookie: "ar_lang=pt",
  });
  const res = await langRouter(req, {});
  assert.equal(res, undefined);
});

test("Spanish (incl. Latin American) and Italian browsers land on /es/ and /it/", async () => {
  for (const [al, seg] of [["es-ES,es;q=0.9", "es"], ["es-MX", "es"], ["es-AR,es;q=0.8", "es"], ["es-419", "es"], ["ca-ES", "es"], ["it-IT,it;q=0.9", "it"]]) {
    const res = await langRouter(request("https://adlerrochefort.com/", { "accept-language": al }), {});
    assert.equal(res.headers.get("location"), `https://adlerrochefort.com/${seg}/`, al);
  }
});

test("explicit ar_lang choice for a localized market wins over the browser language", async () => {
  const res = await langRouter(request("https://adlerrochefort.com/", { "accept-language": "en-GB", cookie: "ar_lang=es" }), {});
  assert.equal(res.headers.get("location"), "https://adlerrochefort.com/es/");
});

test("legacy nf_lang cookie no longer pins a Spanish browser to /en/", async () => {
  const res = await langRouter(request("https://adlerrochefort.com/", { "accept-language": "es-ES", cookie: "nf_lang=en" }), {});
  assert.equal(res.headers.get("location"), "https://adlerrochefort.com/es/");
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
