import { useEffect, useRef } from 'react';

/**
 * Reveal-on-scroll hook. Uses an IntersectionObserver with a tight threshold
 * so elements animate in the instant they enter the viewport — tuned to be
 * aggressively fast. Adds the `is-visible` class to every `.reveal` descendant
 * (and the root itself) the moment it intersects.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const root = ref.current ?? document.body;
    const targets = root.classList.contains('reveal')
      ? [root, ...root.querySelectorAll<HTMLElement>('.reveal')]
      : Array.from(root.querySelectorAll<HTMLElement>('.reveal'));

    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return ref;
}
