/*
 * Shared mega-nav behaviour. One file, every language.
 *
 * One capture-phase click listener owns the burger, the desktop mega-menu
 * and the mobile accordion. Capture + stopPropagation on the burger and on
 * .nav-trigger so a leftover inline onclick / IIFE cannot double-toggle
 * (open-then-close on the same click — which looks like the menu does nothing).
 *
 * Named handlers so DevTools EventListener breakpoints land here, not on
 * an anonymous function (e).
 */
(function () {
  "use strict";

  if (window.__arNavBound) return;
  window.__arNavBound = true;

  function toggleMenu() {
    var drawer = document.getElementById("mobileNav");
    var burger = document.querySelector(".nav-burger");
    if (!drawer) return;
    var open = drawer.classList.toggle("open");
    if (burger) burger.setAttribute("aria-expanded", String(open));
  }
  // Always own the global: leftover one-liners used to win because we only
  // defined this when it was missing, and those copies never set aria-expanded.
  window.toggleMenu = toggleMenu;

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

  function togglePanel(trigger) {
    var panel = panelFor(trigger);
    if (!panel) return;
    var isOpen = trigger.getAttribute("aria-expanded") === "true";
    trigger.setAttribute("aria-expanded", String(!isOpen));
    panel.hidden = isOpen;
  }

  function onNavClick(e) {
    var target = e.target && e.target.closest ? e.target : null;
    if (!target || !target.closest) return;

    if (target.closest(".nav-burger")) {
      e.preventDefault();
      e.stopPropagation();
      toggleMenu();
      return;
    }

    var mega = target.closest(".nav-trigger");
    if (mega) {
      e.preventDefault();
      e.stopPropagation();
      var isOpen = mega.getAttribute("aria-expanded") === "true";
      closeMega(mega);
      mega.setAttribute("aria-expanded", String(!isOpen));
      var panel = panelFor(mega);
      if (panel) panel.hidden = isOpen;
      return;
    }

    var accordion = target.closest(".mobile-accordion-trigger");
    if (accordion) {
      togglePanel(accordion);
      return;
    }

    if (target.closest(".nav-panel") || target.closest("#mobileNav")) return;
    closeMega();
  }

  function onNavKeydown(e) {
    if (e.key !== "Escape") return;
    closeMega();
    var drawer = document.getElementById("mobileNav");
    if (drawer && drawer.classList.contains("open")) toggleMenu();
  }

  document.addEventListener("click", onNavClick, true);
  document.addEventListener("keydown", onNavKeydown);
})();
