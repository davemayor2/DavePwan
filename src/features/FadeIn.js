import React from "react";
import { useInView } from "@/features/hooks/useInView";

/**
 * Simple fade/slide-in on scroll.
 * Props:
 * - delayMs: number (stagger)
 * - y: number (initial translateY pixels)
 * - as: element type (div by default)
 */
export default function FadeIn({ children, delayMs = 0, y = 16, as: Tag = "div", className = "" }) {
  const { ref, isInView } = useInView({ rootMargin: "0px 0px -10% 0px", threshold: 0.05 });

  const style = {
    transition: "opacity 600ms ease, transform 600ms ease",
    transitionDelay: `${delayMs}ms`,
    opacity: isInView ? 1 : 0,
    transform: isInView ? "translateY(0px)" : `translateY(${y}px)`,
  };

  return (
    <Tag ref={ref} style={style} className={className}>
      {children}
    </Tag>
  );
}



