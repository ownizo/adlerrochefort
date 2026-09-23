/*
 * Shared mega-nav behaviour. One file, every language.
 *
 * Event delegation: one capture-phase listener on document, matching with
 * closest(). No per-node addEventListener, no onclick on the burger or on
 * drawer links. Capture + stopPropagation on the burger and on .nav-trigger
 * so a leftover inline onclick / IIFE cannot double-toggle (open-then-close
 * on the same click — which looks like the menu does nothing).
 *
 * Drawer links are different: they must navigate, and gtag's document-bubble
 * click tracker must still see them, so those clicks are not stopped. They
 * call closeMenu() (idempotent), not toggleMenu() — a leftover onclick that
 * toggled would reopen the drawer over a same-page hash target.
 *
 * Named handlers so DevTools EventListener breakpoints land here.
 */
(function () {
  "use strict";

  if (window.__arNavBound) return;
  window.__arNavBound = true;

  function setDrawer(open) {
    var drawer = document.getElementById("mobileNav");
    var burger = document.querySelector(".nav-burger");
    if (!drawer) return;
    drawer.classList.toggle("open", !!open);
    if (burger) burger.setAttribute("aria-expanded", String(!!open));
  }

  function toggleMenu() {
    var drawer = document.getElementById("mobileNav");
    setDrawer(!(drawer && drawer.classList.contains("open")));
  }

  function closeMenu() {
    setDrawer(false);
  }

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

    // Delegated: any link in the drawer closes it. Same-page hashes (#quote-form,
    // #offerte) would otherwise leave the overlay covering the section they
    // jumped to. Do not preventDefault / stopPropagation — the click must
    // navigate, and analytics bubble listeners must still see it.
    if (target.closest("#mobileNav a")) {
      closeMenu();
      return;
    }

    if (target.closest(".nav-panel") || target.closest("#mobileNav")) return;
    closeMega();
  }

  function onNavKeydown(e) {
    if (e.key !== "Escape") return;
    closeMega();
    closeMenu();
  }

  document.addEventListener("click", onNavClick, true);
  document.addEventListener("keydown", onNavKeydown);

  // The cluster mobile bar (.mobile-cta) is a different element from the
  // landing-page bar (.lp-sticky-cta, handled in ar-quote-cta.js). It used
  // to stay on top of the form it links to. Hide it while that target is
  // on screen, and while the cookie notice owns the bottom edge.
  var quoteBar = document.querySelector(".mobile-cta");
  if (quoteBar) {
    var quoteLink = quoteBar.querySelector('a[href^="#"]');
    var quoteId = quoteLink && quoteLink.getAttribute("href").slice(1);
    var quoteTarget = quoteId && document.getElementById(quoteId);
    var cookieBanner = document.getElementById("cookieBanner");
    var quoteOnScreen = false;

    function syncQuoteBar() {
      var bannerUp = !!(cookieBanner && cookieBanner.classList.contains("show"));
      if (bannerUp || quoteOnScreen) quoteBar.setAttribute("hidden", "");
      else quoteBar.removeAttribute("hidden");
    }

    if (quoteTarget && "IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        quoteOnScreen = entries.some(function (entry) { return entry.isIntersecting; });
        syncQuoteBar();
      }, { rootMargin: "0px 0px -25% 0px" }).observe(quoteTarget);
    }
    if (cookieBanner) {
      new MutationObserver(syncQuoteBar).observe(cookieBanner, {
        attributes: true,
        attributeFilter: ["class"],
      });
    }
    syncQuoteBar();
  }
})();
