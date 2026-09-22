/*
 * Shared mega-nav behaviour. One file, every language.
 *
 * Click-to-toggle on desktop (.nav-trigger) and accordion on mobile.
 * Bound once, in the capture phase, so a page that still carries an older
 * inline copy of this wiring cannot double-toggle (open-then-close on the
 * same click — which looks like the menu does nothing).
 */
(function () {
  "use strict";

  if (window.__arNavBound) return;
  window.__arNavBound = true;

  if (typeof window.toggleMenu !== "function") {
    window.toggleMenu = function toggleMenu() {
      var drawer = document.getElementById("mobileNav");
      var burger = document.querySelector(".nav-burger");
      if (!drawer) return;
      var open = drawer.classList.toggle("open");
      if (burger) burger.setAttribute("aria-expanded", String(open));
    };
  }

  function panelFor(trigger) {
    var id = trigger.getAttribute("aria-controls");
    return id ? document.getElementById(id) : null;
  }

  function closeMega(except) {
    var triggers = document.querySelectorAll(".nav-trigger");
    for (var i = 0; i < triggers.length; i++) {
      var t = triggers[i];
      if (t === except) continue;
      t.setAttribute("aria-expanded", "false");
      var panel = panelFor(t);
      if (panel) panel.hidden = true;
    }
  }

  document.addEventListener(
    "click",
    function (e) {
      var target = e.target && e.target.closest ? e.target : null;
      if (!target || !target.closest) return;

      var trigger = target.closest(".nav-trigger");
      if (trigger) {
        e.preventDefault();
        e.stopPropagation();
        var panel = panelFor(trigger);
        if (!panel) return;
        var isOpen = trigger.getAttribute("aria-expanded") === "true";
        closeMega(trigger);
        trigger.setAttribute("aria-expanded", String(!isOpen));
        panel.hidden = isOpen;
        return;
      }

      if (target.closest(".nav-panel")) return;
      closeMega();
    },
    true
  );

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMega();
  });

  document.addEventListener("click", function (e) {
    var target = e.target && e.target.closest ? e.target : null;
    if (!target || !target.closest) return;
    var trigger = target.closest(".mobile-accordion-trigger");
    if (!trigger) return;
    var panel = panelFor(trigger);
    if (!panel) return;
    var isOpen = trigger.getAttribute("aria-expanded") === "true";
    trigger.setAttribute("aria-expanded", String(!isOpen));
    panel.hidden = isOpen;
  });
})();
