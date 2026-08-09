/**
 * The sticky "get a quote" bar on the quote landing pages, and the three bits
 * of state that have to stay in step with it.
 *
 * The bar exists because the form sits a long way down a long page and 90% of
 * the traffic arrives on a phone: without it the only route back to the form is
 * a scroll. It hides itself whenever the form is already on screen, so it never
 * competes with the thing it points at, and again while the cookie notice is up
 * — that notice is fixed to the bottom as well, and two stacked strips bury the
 * hero's own button on a 390px screen.
 *
 * Whichever strip does own the bottom edge, its height is published as
 * --ar-bottom-inset so the chat launcher can sit above it instead of on top of
 * it. While the cookie notice is up the launcher hides itself instead, which is
 * handled in the widget's own stylesheet — so the height published here is the
 * bar's, and it is 0 whenever the bar is not showing.
 *
 * The drawer's open state is mirrored onto <body> and onto the burger's
 * aria-expanded here: the inline toggleMenu() only flips a class on the drawer
 * itself, which left the button telling assistive technology that the menu was
 * closed while it was open, and left the bar floating over the open menu.
 */
(function () {
  'use strict';

  var bar = document.querySelector('.lp-sticky-cta');
  if (!bar) return;

  var target = document.querySelector('#quote-form');
  var banner = document.getElementById('cookieBanner');
  var drawer = document.getElementById('mobileNav');
  var burger = document.querySelector('.nav-burger');

  function heightOf(el) {
    if (!el) return 0;
    var style = getComputedStyle(el);
    if (style.display === 'none' || style.visibility === 'hidden') return 0;
    return el.getBoundingClientRect().height;
  }

  function sync() {
    var bannerUp = !!(banner && banner.classList.contains('show'));
    document.body.classList.toggle('cookie-open', bannerUp);

    // The bar is hidden while the notice is up, and the chat launcher hides
    // itself for the same span, so the only strip left to clear is the bar.
    var inset = bannerUp ? 0 : heightOf(bar);
    document.documentElement.style.setProperty(
      '--ar-bottom-inset',
      Math.round(inset) + 'px'
    );
  }

  if (banner) {
    new MutationObserver(sync).observe(banner, {
      attributes: true,
      attributeFilter: ['class'],
    });
  }
  window.addEventListener('resize', sync);

  // --- step aside while the form is on screen -------------------------------
  if (target && 'IntersectionObserver' in window) {
    new IntersectionObserver(
      function (entries) {
        for (var i = 0; i < entries.length; i++) {
          if (entries[i].isIntersecting) bar.setAttribute('hidden', '');
          else bar.removeAttribute('hidden');
        }
        sync();
      },
      { rootMargin: '0px 0px -30% 0px' }
    ).observe(target);
  }

  // --- mirror the drawer's state --------------------------------------------
  if (drawer) {
    new MutationObserver(function () {
      var open = drawer.classList.contains('open');
      document.body.classList.toggle('nav-open', open);
      if (burger) burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      sync();
    }).observe(drawer, { attributes: true, attributeFilter: ['class'] });
  }

  sync();
})();
