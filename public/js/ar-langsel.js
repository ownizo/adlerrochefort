/*
 * Language selector behaviour — no dependencies, ~2 KB.
 *
 * Markup comes from scripts/lib/lang-selector.mjs: a disclosure button plus a
 * plain list of links. The disclosure pattern is deliberate — a list of eight
 * anchors that navigate is exactly what it looks like, so there is no
 * role="listbox"/role="menu" to contradict the links' own semantics. The
 * button owns aria-expanded and aria-controls; the current language carries
 * aria-current="true" and is named in the button's aria-label.
 *
 * Progressive enhancement: with JavaScript unavailable the menu stays hidden
 * and the control does nothing, so every page that carries it also keeps a
 * link to its own language's home in the footer. With JavaScript the control
 * opens on click or on ArrowUp/ArrowDown/Enter/Space, closes on Escape, on a
 * click outside, and when focus leaves the component.
 */
(function () {
  "use strict";

  var FOCUSABLE = "a[href]";

  function items(root) {
    return Array.prototype.slice.call(root.querySelectorAll(".ar-langsel-menu " + FOCUSABLE));
  }

  function setup(root) {
    var button = root.querySelector(".ar-langsel-btn");
    var menu = root.querySelector(".ar-langsel-menu");
    if (!button || !menu) return;

    function isOpen() {
      return button.getAttribute("aria-expanded") === "true";
    }

    function open(focusIndex) {
      // Only one selector open at a time — the header copy and the drawer copy
      // coexist on the same page.
      closeAll(root);
      menu.hidden = false;
      button.setAttribute("aria-expanded", "true");
      if (typeof focusIndex === "number") {
        var list = items(root);
        var target = list[focusIndex] || list[0];
        if (target) target.focus();
      }
    }

    function close(returnFocus) {
      if (!isOpen()) return;
      menu.hidden = true;
      button.setAttribute("aria-expanded", "false");
      if (returnFocus) button.focus();
    }

    root._arLangselClose = close;

    function currentIndex() {
      var list = items(root);
      for (var i = 0; i < list.length; i++) {
        if (list[i].getAttribute("aria-current") === "true") return i;
      }
      return 0;
    }

    button.addEventListener("click", function (event) {
      event.preventDefault();
      if (isOpen()) close(false);
      else open(currentIndex());
    });

    button.addEventListener("keydown", function (event) {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        open(isOpen() ? 0 : currentIndex());
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        var list = items(root);
        open(list.length - 1);
      } else if (event.key === "Escape") {
        close(false);
      }
    });

    menu.addEventListener("keydown", function (event) {
      var list = items(root);
      var index = list.indexOf(document.activeElement);

      if (event.key === "Escape") {
        event.preventDefault();
        close(true);
        return;
      }
      if (event.key === "Tab") {
        // Tabbing out of the list is a legitimate exit, not a trap.
        close(false);
        return;
      }
      if (index === -1) return;

      if (event.key === "ArrowDown") {
        event.preventDefault();
        (list[index + 1] || list[0]).focus();
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        (list[index - 1] || list[list.length - 1]).focus();
      } else if (event.key === "Home") {
        event.preventDefault();
        list[0].focus();
      } else if (event.key === "End") {
        event.preventDefault();
        list[list.length - 1].focus();
      }
    });

    // Focus leaving the component closes it. Deferred, because focusout fires
    // before the incoming element becomes document.activeElement.
    root.addEventListener("focusout", function () {
      window.setTimeout(function () {
        if (!root.contains(document.activeElement)) close(false);
      }, 0);
    });
  }

  function closeAll(except) {
    var all = document.querySelectorAll("[data-ar-langsel]");
    for (var i = 0; i < all.length; i++) {
      if (all[i] !== except && typeof all[i]._arLangselClose === "function") {
        all[i]._arLangselClose(false);
      }
    }
  }

  function init() {
    var roots = document.querySelectorAll("[data-ar-langsel]");
    if (!roots.length) return;
    for (var i = 0; i < roots.length; i++) setup(roots[i]);

    document.addEventListener("click", function (event) {
      var inside = event.target && event.target.closest ? event.target.closest("[data-ar-langsel]") : null;
      closeAll(inside);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeAll(null);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
