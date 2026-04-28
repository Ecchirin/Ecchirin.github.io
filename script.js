(function () {
  'use strict';

  // Bail out if the user prefers reduced motion.
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  // Bail out if IntersectionObserver isn't supported.
  if (!('IntersectionObserver' in window)) return;

  // Opt into the reveal effect.
  document.documentElement.classList.add('reveal-prepare');

  const observer = new IntersectionObserver(
    function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
  );

  document.querySelectorAll('main > section, main > article').forEach(function (el) {
    observer.observe(el);
  });
})();
