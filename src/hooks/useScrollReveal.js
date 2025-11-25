import { useEffect } from 'react';

const DEFAULT_OPTIONS = {
  threshold: 0.2,
  rootMargin: '0px 0px -10% 0px',
};

const useScrollReveal = (enabled = true, options = DEFAULT_OPTIONS) => {
  useEffect(() => {
    if (!enabled) return undefined;

    const elements = Array.from(document.querySelectorAll('[data-reveal]'));

    if (!elements.length) return undefined;

    if (!('IntersectionObserver' in window)) {
      elements.forEach((node) => node.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    elements.forEach((node) => observer.observe(node));

    return () => {
      elements.forEach((node) => observer.unobserve(node));
      observer.disconnect();
    };
  }, [enabled, options]);
};

export default useScrollReveal;
