// Netlify event-triggered function: runs after every successful production
// deploy and notifies IndexNow (Bing, Yandex, Seznam, Naver…) of the pages
// whose <lastmod> in the sitemaps is recent. Bing's index feeds ChatGPT
// search and Microsoft Copilot, so this shortens the time it takes for new
// or updated pages to be found by AI assistants as well as by Bing.
//
// Best-effort only: any failure is logged and the deploy is unaffected.
// The key file lives at public/36d580a3f038118aef5f86d192b5a1a2.txt (IndexNow ownership proof).

export const INDEXNOW_KEY = "36d580a3f038118aef5f86d192b5a1a2";
const SITE = "https://adlerrochefort.com";
const SITEMAPS = ["/sitemap-pages.xml", "/sitemap-blog.xml"];
const RECENT_DAYS = 3;
const MAX_URLS = 10000;

// Returns the <loc> of every <url> whose <lastmod> is within the window.
export function recentUrls(xml, now = new Date(), days = RECENT_DAYS) {
  const cutoff = new Date(now.getTime() - days * 86400000).toISOString().slice(0, 10);
  const out = [];
  for (const block of xml.split("<url>").slice(1)) {
    const loc = (block.match(/<loc>([^<]+)<\/loc>/) || [])[1];
    const lastmod = (block.match(/<lastmod>([^<]+)<\/lastmod>/) || [])[1];
    if (loc && lastmod && lastmod.slice(0, 10) >= cutoff && loc.startsWith(SITE)) out.push(loc.trim());
  }
  return out;
}

export async function handler(event) {
  try {
    const payload = JSON.parse((event && event.body) || "{}").payload || {};
    if (payload.context && payload.context !== "production") {
      return { statusCode: 200, body: "skipped: not production" };
    }
    const urls = [];
    for (const path of SITEMAPS) {
      const res = await fetch(SITE + path);
      if (!res.ok) continue;
      urls.push(...recentUrls(await res.text()));
    }
    const list = [...new Set(urls)].slice(0, MAX_URLS);
    if (!list.length) return { statusCode: 200, body: "nothing recent" };
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: "adlerrochefort.com",
        key: INDEXNOW_KEY,
        keyLocation: `${SITE}/${INDEXNOW_KEY}.txt`,
        urlList: list,
      }),
    });
    console.log(`IndexNow: ${list.length} URL(s), HTTP ${res.status}`);
    return { statusCode: 200, body: `indexnow ${res.status} ${list.length}` };
  } catch (err) {
    console.error("IndexNow ping failed:", err && err.message);
    return { statusCode: 200, body: "indexnow error" };
  }
}
