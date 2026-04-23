(function () {
  "use strict";

  function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function scrollToHash(hash, { updateHistory = true } = {}) {
    if (!hash || hash === "#") return;
    const id = hash.replace(/^#/, "");
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: prefersReducedMotion() ? "auto" : "smooth",
      block: "start",
    });

    if (updateHistory) {
      history.pushState(null, "", hash);
    }
    const focusable = el.querySelector(
        'h1, h2, h3, [tabindex]:not([tabindex="-1"])'
      ) || el;
    if (focusable && typeof focusable.focus === "function") {
      try {
        focusable.setAttribute("tabindex", "-1");
        focusable.focus({ preventScroll: true });
      } catch (_) {
        /* ignore */
      }
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    var yearEl = document.getElementById("year");
    if (yearEl) {
      yearEl.textContent = String(new Date().getFullYear());
    }

    document.querySelectorAll('a[data-smooth][href^="#"]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        var href = a.getAttribute("href");
        if (!href || href.length < 2) return;
        e.preventDefault();
        scrollToHash(href);
      });
    });

    document.querySelectorAll('.site-nav a[href^="#"]').forEach(function (a) {
      if (a.hasAttribute("data-smooth")) return;
      a.addEventListener("click", function (e) {
        var href = a.getAttribute("href");
        if (!href || href.length < 2) return;
        e.preventDefault();
        scrollToHash(href);
      });
    });

    if (window.location.hash) {
      requestAnimationFrame(function () {
        scrollToHash(window.location.hash, { updateHistory: false });
      });
    }
  });
})();
