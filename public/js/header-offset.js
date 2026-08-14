(function () {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  // Measures the real bottom edge of the fixed <nav>, whatever its height or
  // top offset happens to be on this page/breakpoint, and exposes it as a CSS
  // variable so scroll-padding-top / scroll-margin-top always match the
  // actual fixed header — instead of a single hardcoded pixel value that
  // breaks the moment the header's markup or breakpoint styling changes.
  function setHeaderOffset() {
    var nav = document.querySelector("nav");
    if (!nav) return;

    var offset = Math.ceil(nav.getBoundingClientRect().bottom);
    if (offset > 0) {
      document.documentElement.style.setProperty("--header-offset", offset + "px");
    }
  }

  setHeaderOffset();
  window.addEventListener("load", setHeaderOffset);
  window.addEventListener("resize", setHeaderOffset);
})();
