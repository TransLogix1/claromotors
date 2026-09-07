import { useEffect } from 'react';

/**
 * Observes all elements with the `.reveal` class currently in the DOM and adds
 * `.is-visible` the first time each one enters the viewport, triggering the
 * CSS transition defined in index.css. Safe to call once per page/route.
 */
export function useScrollReveal(deps: unknown[] = []) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal'));
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
