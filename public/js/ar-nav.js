/*
 * Shared mega-nav behaviour. One file, every language.
 *
 * Homepages used to inline this. Inner pages that now carry the same nav
 * would otherwise open a burger that did nothing and dropdowns that never
 * toggle. Idempotent: a page that already defined toggleMenu keeps working.
 */
(function () {
  "use strict";

  if (typeof window.toggleMenu !== "function") {
    window.toggleMenu = function toggleMenu() {
      var drawer = document.getElementById("mobileNav");
      var burger = document.querySelector(".nav-burger");
      if (!drawer) return;
      var open = drawer.classList.toggle("open");
      if (burger) burger.setAttribute("aria-expanded", String(open));
    };
  }

  function setupMega() {
    var triggers = Array.prototype.slice.call(document.querySelectorAll(".nav-trigger"));
    if (!triggers.length) return;

    function closeAll(except) {
      triggers.forEach(function (t) {
        if (t === except) return;
        t.setAttribute("aria-expanded", "false");
        var panel = document.getElementById(t.getAttribute("aria-controls"));
        if (panel) panel.hidden = true;
      });
    }

    triggers.forEach(function (trigger) {
      if (trigger.getAttribute("data-ar-nav")) return;
      trigger.setAttribute("data-ar-nav", "1");
      var panel = document.getElementById(trigger.getAttribute("aria-controls"));
      if (!panel) return;
      trigger.addEventListener("click", function (e) {
        e.stopPropagation();
        var isOpen = trigger.getAttribute("aria-expanded") === "true";
        closeAll(trigger);
        trigger.setAttribute("aria-expanded", String(!isOpen));
        panel.hidden = isOpen;
      });
    });

    document.addEventListener("click", function () {
      closeAll();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeAll();
    });
  }

  function setupAccordion() {
    var accTriggers = Array.prototype.slice.call(
      document.querySelectorAll(".mobile-accordion-trigger")
    );
    accTriggers.forEach(function (trigger) {
      if (trigger.getAttribute("data-ar-nav")) return;
      trigger.setAttribute("data-ar-nav", "1");
      trigger.addEventListener("click", function () {
        var panel = document.getElementById(trigger.getAttribute("aria-controls"));
        if (!panel) return;
        var isOpen = trigger.getAttribute("aria-expanded") === "true";
        trigger.setAttribute("aria-expanded", String(!isOpen));
        panel.hidden = isOpen;
      });
    });
  }

  function init() {
    setupMega();
    setupAccordion();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
