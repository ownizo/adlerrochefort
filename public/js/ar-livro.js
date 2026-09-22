/*
 * Livro de Reclamações plaque.
 *
 * Desktop (hover + fine pointer): CSS :hover / :focus-within shows the card;
 * the footer label still navigates on click.
 * Coarse pointer (phones): the first tap on the footer label opens the card
 * instead of leaving the page. The plaque is the link to livroreclamacoes.pt.
 * Tap the backdrop or Escape to close. Idempotent via __arLivroBound.
 */
(function () {
  "use strict";

  if (window.__arLivroBound) return;
  window.__arLivroBound = true;

  function fineHover() {
    return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  }

  function setExpanded(wrap, open) {
    var link = wrap.querySelector(".footer-livro-link");
    if (link) link.setAttribute("aria-expanded", open ? "true" : "false");
  }

  function closeAll(except) {
    var open = document.querySelectorAll(".footer-livro.is-open");
    for (var i = 0; i < open.length; i++) {
      if (open[i] !== except) {
        open[i].classList.remove("is-open");
        setExpanded(open[i], false);
      }
    }
  }

  function onClick(e) {
    var target = e.target;
    if (!target || !target.closest) return;

    var wrap = target.closest(".footer-livro");
    if (!wrap) {
      closeAll(null);
      return;
    }

    if (target.closest(".footer-livro-card")) return;

    var link = target.closest(".footer-livro-link");
    if (link && !fineHover()) {
      e.preventDefault();
      if (wrap.classList.contains("is-open")) {
        wrap.classList.remove("is-open");
        setExpanded(wrap, false);
      } else {
        closeAll(wrap);
        wrap.classList.add("is-open");
        setExpanded(wrap, true);
      }
      return;
    }

    if (wrap.classList.contains("is-open") && !link) {
      closeAll(null);
    }
  }

  function onKey(e) {
    if (e.key === "Escape") closeAll(null);
  }

  document.addEventListener("click", onClick);
  document.addEventListener("keydown", onKey);
})();
