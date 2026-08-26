"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Unico proprietario dell'istanza Lenis di tutto il sito.
 *
 * Importante: non creare altre istanze Lenis nei singoli componenti. Due istanze
 * attive si contendono lo scroll e producono jitter. I componenti che animano
 * sullo scroll usano ScrollTrigger, che qui viene agganciato a Lenis e al ticker
 * di GSAP (un solo requestAnimationFrame per tutta la pagina).
 */
export function SmoothScroll() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Con "riduci movimento" niente smooth scroll: si lascia lo scroll nativo,
    // ma ScrollTrigger resta attivo cosi i componenti possono mostrare lo stato
    // finale delle animazioni invece di restare a meta.
    if (prefersReducedMotion) {
      ScrollTrigger.refresh();
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return null;
}
