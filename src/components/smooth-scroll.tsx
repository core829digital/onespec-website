"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Single owner of the smooth scroll for the whole site (never create a second
 * Lenis instance elsewhere: two instances fight over the scroll position).
 *
 * - Wheel input is eased; touch keeps the native (already smooth) scroll.
 * - Skipped with "reduce motion".
 * - The embedded demos are iframes: the mouse wheel over them never reaches this
 *   page, it chains to the page's native scroll, which Lenis follows.
 * - Plain `#anchor` links scroll smoothly through Lenis.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      lerp: 0.09,
      wheelMultiplier: 1,
      smoothWheel: true,
      syncTouch: false,
      anchors: true,
      autoRaf: true,
    });
    return () => lenis.destroy();
  }, []);

  return null;
}
