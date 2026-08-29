(function () {
  "use strict";
  if (typeof window === "undefined" || typeof document === "undefined") return;

  var scriptEl = document.currentScript;
  var lang = ((scriptEl && scriptEl.dataset.lang) || "pt").toLowerCase() === "en" ? "en" : "pt";
  // Set only by the Spain pages (data-market="spain"); every other page leaves
  // this unset, which keeps the request payload — and so the backend's
  // Portuguese behaviour — exactly as it was before this attribute existed.
  var market = ((scriptEl && scriptEl.dataset.market) || "").toLowerCase();
  var topicsAttr = (scriptEl && scriptEl.dataset.topics) || "";
  var topics = topicsAttr
    .split(",")
    .map(function (t) { return t.trim(); })
    .filter(Boolean);

  var STRINGS = {
    pt: {
      launcherLabel: "Fale connosco",
      title: "Assistente Adler & Rochefort",
      placeholder: "Escreva a sua mensagem...",
      send: "Enviar",
      intro:
        "Olá! Sou o assistente de seguros da Adler & Rochefort (mediador registado na ASF nº 425591790/3). Posso ajudar a perceber que seguro faz sentido para si e dar-lhe uma estimativa indicativa.",
      privacyNote:
        "Antes de lhe pedir nome ou outros dados pessoais, vou informá-lo(a) e pedir o seu consentimento. Os dados são tratados de forma confidencial nos termos do RGPD — consulte a nossa",
      privacyLinkText: "Política de Privacidade",
      privacyUrl: "/politica-de-privacidade/",
      errorGeneric: "Ocorreu um erro. Tente novamente.",
      closeLabel: "Fechar",
      typing: "a escrever...",
    },
    en: {
      launcherLabel: "Chat with us",
      title: "Adler & Rochefort Assistant",
      placeholder: "Type your message...",
      send: "Send",
      intro:
        "Hi! I'm the insurance assistant for Adler & Rochefort. I can help you work out what cover makes sense and give you an indicative estimate.",
      privacyNote:
        "Before asking for your name or other personal data, I'll let you know and ask for your consent. Your data is handled confidentially under GDPR — see our",
      privacyLinkText: "Privacy Policy",
      privacyUrl: "/en/privacy-policy/",
      errorGeneric: "Something went wrong. Please try again.",
      closeLabel: "Close",
      typing: "typing...",
    },
  };
  var t = STRINGS[lang];

  // Two fixed strips can end up at the bottom of a phone screen: the cookie
  // notice, and the sticky quote bar on the commercial landing pages. The
  // launcher used to ignore both and sit at bottom:20px on top of whatever was
  // there. Against the cookie notice (z-index 9998 vs 200) that meant a tap
  // aimed at Accept opened the chat instead, so the notice could never be
  // dismissed at all.
  //
  // The notice is answered in one tap and blocks nothing else, so the launcher
  // simply stands down for as long as it is showing — moving the launcher up
  // instead would park it over the hero's own call to action. Both elements are
  // children of <body> and the notice comes first in the markup, so a sibling
  // selector is enough and no script has to coordinate it.
  //
  // The sticky quote bar is permanent once consent is given, so that one is
  // cleared by height: the landing pages publish it as --ar-bottom-inset.
  // Defaults to 0, so nothing moves on a page that never sets it.
  var CSS =
    "#ar-chat-launcher{position:fixed;right:20px;bottom:calc(20px + var(--ar-bottom-inset, 0px));z-index:9998;background:#111927;color:#fff;border:none;" +
    "border-radius:999px;padding:14px 20px;font-family:Arial,Helvetica,sans-serif;font-size:15px;font-weight:600;" +
    "box-shadow:0 6px 20px rgba(0,0,0,.2);cursor:pointer;display:flex;align-items:center;gap:8px;transition:bottom .2s ease;}" +
    "#ar-chat-launcher:hover{background:#223553;}" +
    "#cookieBanner.show ~ #ar-chat-launcher,#cookieBanner.show ~ #ar-chat-panel{display:none;}" +
    "#ar-chat-panel{position:fixed;right:20px;bottom:calc(90px + var(--ar-bottom-inset, 0px));z-index:9999;width:360px;max-width:calc(100vw - 40px);" +
    "height:520px;max-height:calc(100vh - 120px);background:#fff;border-radius:16px;box-shadow:0 10px 40px rgba(0,0,0,.25);" +
    "display:none;flex-direction:column;overflow:hidden;font-family:Arial,Helvetica,sans-serif;}" +
    "#ar-chat-panel.ar-open{display:flex;}" +
    "#ar-chat-header{background:#111927;color:#fff;padding:14px 16px;display:flex;justify-content:space-between;align-items:center;}" +
    "#ar-chat-header h3{margin:0;font-size:15px;font-weight:700;}" +
    "#ar-chat-close{background:none;border:none;color:#fff;font-size:20px;cursor:pointer;line-height:1;padding:0 4px;}" +
    "#ar-chat-messages{flex:1;overflow-y:auto;padding:14px;background:#F7F6F2;display:flex;flex-direction:column;gap:10px;}" +
    ".ar-msg{max-width:85%;padding:10px 12px;border-radius:12px;font-size:13.5px;line-height:1.45;white-space:pre-wrap;word-wrap:break-word;}" +
    ".ar-msg-assistant{align-self:flex-start;background:#fff;border:1px solid #e4e2dc;color:#2b2b26;}" +
    ".ar-msg-user{align-self:flex-end;background:#111927;color:#fff;}" +
    ".ar-msg-note{align-self:center;background:#eef1ec;color:#111927;font-size:12px;text-align:center;border-radius:10px;}" +
    ".ar-msg-note a{color:#111927;font-weight:700;}" +
    ".ar-typing{align-self:flex-start;color:#8a887f;font-size:12px;font-style:italic;padding:0 4px;}" +
    "#ar-chat-form{display:flex;border-top:1px solid #e4e2dc;padding:10px;gap:8px;background:#fff;}" +
    "#ar-chat-input{flex:1;border:1px solid #ddd;border-radius:20px;padding:9px 14px;font-size:13.5px;font-family:inherit;resize:none;}" +
    "#ar-chat-input:focus{outline:none;border-color:#111927;}" +
    "#ar-chat-send{background:#111927;color:#fff;border:none;border-radius:20px;padding:0 18px;font-size:13.5px;font-weight:600;cursor:pointer;}" +
    "#ar-chat-send:disabled{opacity:.5;cursor:default;}" +
    // Phase (mobile UX fix): the launcher is a full desktop-style pill at
    // every width, which on a 390px phone sits directly beside — often
    // felt as "on top of" — a sticky commercial CTA bar the same height.
    // Below 480px it shrinks to a smaller pill (less padding, smaller
    // type) rather than the full-size one, so the two controls read as
    // clearly separate, appropriately-sized actions instead of competing
    // for the same strip of screen. Text stays rather than icon-only —
    // "Chat with us"/"Fale connosco" are already short, and a label is
    // clearer than a bare icon for a first-time visitor.
    "@media (max-width:480px){#ar-chat-panel{right:10px;left:10px;width:auto;bottom:calc(80px + var(--ar-bottom-inset, 0px));}" +
    "#ar-chat-launcher{right:10px;bottom:calc(10px + var(--ar-bottom-inset, 0px));padding:10px 16px;font-size:13px;gap:6px;}}";

  var styleTag = document.createElement("style");
  styleTag.textContent = CSS;
  document.head.appendChild(styleTag);

  var launcher = document.createElement("button");
  launcher.id = "ar-chat-launcher";
  launcher.type = "button";
  launcher.textContent = t.launcherLabel;

  var panel = document.createElement("div");
  panel.id = "ar-chat-panel";
  panel.innerHTML =
    '<div id="ar-chat-header"><h3></h3><button id="ar-chat-close" type="button" aria-label=""></button></div>' +
    '<div id="ar-chat-messages"></div>' +
    '<form id="ar-chat-form">' +
    '<textarea id="ar-chat-input" rows="1" required></textarea>' +
    '<button id="ar-chat-send" type="submit"></button>' +
    "</form>";

  document.body.appendChild(launcher);
  document.body.appendChild(panel);

  panel.querySelector("#ar-chat-header h3").textContent = t.title;
  var closeBtn = panel.querySelector("#ar-chat-close");
  closeBtn.textContent = "×";
  closeBtn.setAttribute("aria-label", t.closeLabel);
  var input = panel.querySelector("#ar-chat-input");
  input.placeholder = t.placeholder;
  var sendBtn = panel.querySelector("#ar-chat-send");
  sendBtn.textContent = t.send;
  var messagesEl = panel.querySelector("#ar-chat-messages");
  var formEl = panel.querySelector("#ar-chat-form");

  var conversation = [];
  var leadSent = false;
  var opened = false;
  var sending = false;

  function appendBubble(role, text) {
    var div = document.createElement("div");
    div.className = "ar-msg ar-msg-" + role;
    div.textContent = text;
    messagesEl.appendChild(div);
    messagesEl.scrollTop = messagesEl.scrollHeight;
    return div;
  }

  function appendPrivacyNote() {
    var div = document.createElement("div");
    div.className = "ar-msg ar-msg-note";
    var link = document.createElement("a");
    link.href = t.privacyUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = t.privacyLinkText;
    div.appendChild(document.createTextNode(t.privacyNote + " "));
    div.appendChild(link);
    div.appendChild(document.createTextNode("."));
    messagesEl.appendChild(div);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function showTyping() {
    var div = document.createElement("div");
    div.className = "ar-typing";
    div.id = "ar-typing-indicator";
    div.textContent = t.typing;
    messagesEl.appendChild(div);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function hideTyping() {
    var el = document.getElementById("ar-typing-indicator");
    if (el) el.remove();
  }

  function setSending(value) {
    sending = value;
    sendBtn.disabled = value;
    input.disabled = value;
  }

  function sendMessage(text) {
    conversation.push({ role: "user", content: text });
    appendBubble("user", text);
    setSending(true);
    showTyping();

    fetch("/api/insurance-chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: conversation, lang: lang, topics: topics, leadSent: leadSent, market: market }),
    })
      .then(function (res) {
        return res.json().then(function (data) { return { ok: res.ok, data: data }; });
      })
      .then(function (result) {
        hideTyping();
        setSending(false);
        if (!result.ok) {
          appendBubble("assistant", (result.data && result.data.error) || t.errorGeneric);
          return;
        }
        leadSent = Boolean(result.data.leadSent) || leadSent;
        var reply = (result.data && result.data.reply) || t.errorGeneric;
        conversation.push({ role: "assistant", content: reply });
        appendBubble("assistant", reply);
      })
      .catch(function () {
        hideTyping();
        setSending(false);
        appendBubble("assistant", t.errorGeneric);
      });
  }

  formEl.addEventListener("submit", function (e) {
    e.preventDefault();
    if (sending) return;
    var text = input.value.trim();
    if (!text) return;
    input.value = "";
    sendMessage(text);
  });

  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      formEl.requestSubmit();
    }
  });

  function openPanel() {
    panel.classList.add("ar-open");
    if (!opened) {
      opened = true;
      appendBubble("assistant", t.intro);
      appendPrivacyNote();
    }
    input.focus();
  }

  function closePanel() {
    panel.classList.remove("ar-open");
  }

  launcher.addEventListener("click", function () {
    if (panel.classList.contains("ar-open")) {
      closePanel();
    } else {
      openPanel();
    }
  });
  closeBtn.addEventListener("click", closePanel);
})();
