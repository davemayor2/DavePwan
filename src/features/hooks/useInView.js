import { useEffect, useRef, useState } from "react";

/**
 * Observe when an element enters the viewport.
 * Returns a ref to attach and a boolean indicating visibility.
 */
export function useInView({ root = null, rootMargin = "0px 0px -10% 0px", threshold = 0 } = {}) {
  const elementRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else {
            setIsInView(false);
          }
        });
      },
      { root, rootMargin, threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [root, rootMargin, threshold]);

  return { ref: elementRef, isInView };
}



