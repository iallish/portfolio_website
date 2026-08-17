"use client";

import { useEffect, useRef } from "react";

/**
 * Hook that applies a fade-in-up animation when an element scrolls into view.
 * Attach the returned ref to a wrapper element. The element should have the
 * `fadeInUp` class from globals.css — this hook adds the `visible` class
 * when the element enters the viewport.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options?: IntersectionObserverInit
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      {
        rootMargin: "0px 0px -60px 0px",
        threshold: 0.1,
        ...options,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return ref;
}
