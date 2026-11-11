import { useEffect, useRef } from "react";

/**
 * Adds "reveal" to the element on mount, then toggles "in-view"
 * whenever it enters / leaves the viewport, so the rise-and-squish
 * animation plays on load and again each time you scroll back to it.
 *
 * Usage:
 *   const formRef = useRevealOnScroll();
 *   <form ref={formRef}> ... </form>
 */
export default function useRevealOnScroll({ threshold = 0.3 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.classList.add("reveal");

    // Old browsers: just show the form
    if (!("IntersectionObserver" in window)) {
      el.classList.add("in-view");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => el.classList.toggle("in-view", entry.isIntersecting),
      { threshold }
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
