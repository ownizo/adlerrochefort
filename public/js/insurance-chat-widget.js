(function () {
  "use strict";
  if (typeof window === "undefined" || typeof document === "undefined") return;
  if (document.getElementById("ar-whatsapp")) return;

  var scriptEl = document.currentScript;
  // data-lang when the page sets it; otherwise the page's own <html lang>.
  var lang = (
    (scriptEl && scriptEl.dataset.lang) ||
    document.documentElement.getAttribute("lang") ||
    "pt"
  ).toLowerCase().slice(0, 2);
  var labels = {
    pt: "Falar no WhatsApp",
    en: "Chat on WhatsApp",
    es: "Hablar por WhatsApp",
    fr: "Écrire sur WhatsApp",
    de: "Per WhatsApp schreiben",
    nl: "App via WhatsApp",
    pl: "Napisz na WhatsApp",
    it: "Scrivici su WhatsApp",
    sv: "Skriv på WhatsApp",
    da: "Skriv på WhatsApp",
    zh: "通过 WhatsApp 联系我们",
    he: "כתבו לנו בוואטסאפ",
  };
  var label = labels[lang] || labels.pt;

  // Same clearance the old chat used: sit above the sticky quote bar
  // (--ar-bottom-inset) and the iPhone home indicator, and disappear while
  // the cookie notice is up so it cannot steal the Accept tap. On a phone
  // it is only a 48px circle in the corner, never a wide pill.
  var CSS =
    "#ar-whatsapp{position:fixed;z-index:180;right:16px;" +
    "bottom:calc(16px + env(safe-area-inset-bottom, 0px) + var(--ar-bottom-inset, 0px));" +
    "width:56px;height:56px;border-radius:50%;background:#25D366;color:#fff;" +
    "display:flex;align-items:center;justify-content:center;" +
    "box-shadow:0 6px 18px rgba(0,0,0,.22);text-decoration:none;" +
    "transition:bottom .2s ease, transform .2s ease;}" +
    "#ar-whatsapp:hover{transform:translateY(-2px);}" +
    "#ar-whatsapp:focus-visible{outline:2px solid #292929;outline-offset:3px;}" +
    "#ar-whatsapp svg{width:30px;height:30px;display:block;}" +
    "#cookieBanner.show ~ #ar-whatsapp{display:none;}" +
    "#mobileNav.open ~ #ar-whatsapp{display:none;}" +
    "@media (max-width:480px){#ar-whatsapp{width:48px;height:48px;right:12px;" +
    "bottom:calc(12px + env(safe-area-inset-bottom, 0px) + var(--ar-bottom-inset, 0px));}" +
    "#ar-whatsapp svg{width:26px;height:26px;}}";

  var styleTag = document.createElement("style");
  styleTag.textContent = CSS;
  document.head.appendChild(styleTag);

  var link = document.createElement("a");
  link.id = "ar-whatsapp";
  link.href = "https://wa.me/351928226570";
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.setAttribute("aria-label", label);
  link.innerHTML =
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
    '<path fill="currentColor" d="M20.5 3.5A11 11 0 0 0 2.1 17.2L1 23l5.9-1.1A11 11 0 0 0 20.5 3.5zM12 20.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3.1.6.6-3-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.7.9-.3.2-.5.1a6.7 6.7 0 0 1-2-1.2 7.4 7.4 0 0 1-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.4.1-.3a1.6 1.6 0 0 0 0-.5c0-.1-.5-1.3-.7-1.8s-.4-.4-.5-.4h-.4a.9.9 0 0 0-.6.3 2.6 2.6 0 0 0-.8 2 4.5 4.5 0 0 0 1 2.4 10.3 10.3 0 0 0 4 3.5 13 13 0 0 0 1.4.5 3.4 3.4 0 0 0 1.5.1 2.5 2.5 0 0 0 1.7-1.2 2 2 0 0 0 .1-1.2c-.1-.1-.2-.1-.4-.2z"/>' +
    "</svg>";
  document.body.appendChild(link);
})();
