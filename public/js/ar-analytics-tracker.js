(function () {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  var path = window.location.pathname || "/";
  if (path.startsWith("/vault/")) return;
  if (path.startsWith("/.netlify/") || path.startsWith("/api/")) return;

  try {
    if (window.localStorage && window.localStorage.getItem("ar_analytics_optout") === "1") return;
  } catch (_) {}

  var sessionKey = "ar_metrics_session_id";
  var visitPrefix = "ar_metrics_visit_";

  function safeUUID() {
    if (window.crypto && typeof window.crypto.randomUUID === "function") {
      return window.crypto.randomUUID();
    }
    return "v-" + Date.now() + "-" + Math.random().toString(16).slice(2);
  }

  function getSessionId() {
    try {
      var existing = window.sessionStorage.getItem(sessionKey);
      if (existing) return existing;
      var created = safeUUID();
      window.sessionStorage.setItem(sessionKey, created);
      return created;
    } catch (_) {
      return safeUUID();
    }
  }

  var startedAt = new Date();
  var dateKey = startedAt.toISOString().slice(0, 10);
  var visitId = safeUUID();
  var sessionId = getSessionId();
  var visitStorageKey = visitPrefix + path;

  try {
    var previousVisit = window.sessionStorage.getItem(visitStorageKey);
    if (previousVisit) {
      visitId = previousVisit;
    } else {
      window.sessionStorage.setItem(visitStorageKey, visitId);
    }
  } catch (_) {}

  function postJSON(payload, useBeacon) {
    var endpoint = "/api/metrics/track";

    if (useBeacon && navigator.sendBeacon) {
      try {
        var blob = new Blob([JSON.stringify(payload)], { type: "application/json" });
        navigator.sendBeacon(endpoint, blob);
        return;
      } catch (_) {}
    }

    fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: !!useBeacon,
    }).catch(function () {});
  }

  postJSON({
    action: "visit-start",
    visitId: visitId,
    sessionId: sessionId,
    path: path,
    url: window.location.href,
    referrer: document.referrer || "",
    startedAt: startedAt.toISOString(),
    clientHour: new Date().getHours(),
  }, false);

  var sentEnd = false;
  function sendVisitEnd() {
    if (sentEnd) return;
    sentEnd = true;

    var endedAt = new Date();
    var seconds = Math.round((endedAt.getTime() - startedAt.getTime()) / 1000);
    if (!Number.isFinite(seconds) || seconds < 0) seconds = 0;
    if (seconds > 7200) seconds = 7200;

    postJSON({
      action: "visit-end",
      visitId: visitId,
      dateKey: dateKey,
      durationSeconds: seconds,
      endedAt: endedAt.toISOString(),
    }, true);
  }

  window.addEventListener("pagehide", sendVisitEnd);
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "hidden") sendVisitEnd();
  });
})();
