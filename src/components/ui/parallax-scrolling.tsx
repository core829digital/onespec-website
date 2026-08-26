"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Link } from "@/i18n/navigation";
import {
  LayerBlueprint,
  LayerWindows,
  LayerConfigCards,
} from "@/components/ui/parallax-layers";
import styles from "./parallax-scrolling.module.css";

/**
 * Quanto ogni layer scorre rispetto allo scroll: piu e basso, piu e "vicino".
 * Il layer 3 (titolo + CTA) non e in questa lista: contiene link cliccabili e
 * deve restare fermo, altrimenti i bottoni scivolano sotto il puntatore
 * mentre l'utente sta scrollando/cliccando.
 */
const LAYERS = [
  { layer: "1", yPercent: 70 },
  { layer: "2", yPercent: 55 },
  { layer: "4", yPercent: 10 },
] as const;

export function ParallaxHero() {
  const t = useTranslations("hero");
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // Con "riduci movimento" i layer restano fermi nella posizione di partenza:
    // la scena resta leggibile, senza spostamenti guidati dallo scroll.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    // gsap.context limita selettori e cleanup a questo sottoalbero: al unmount
    // ctx.revert() rimuove tween e ScrollTrigger creati qui, senza toccare
    // quelli di altri componenti.
    const ctx = gsap.context(() => {
      const track = root.querySelector("[data-parallax-track]");
      const layers = root.querySelector("[data-parallax-layers]");
      if (!track || !layers) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: track,
          // "top top" -> "bottom bottom" copre esattamente il range di scroll
          // per cui il figlio sticky resta agganciato (220vh di pista - 100dvh
          // di sticky = 120vh di scroll reale). Un end diverso da questo
          // desincronizza il parallax dal reale rilascio dello sticky.
          start: "top top",
          end: "bottom bottom",
          // scrub:true (no numero) = animazione agganciata 1:1 alla posizione
          // di scroll. Lenis gia smussa il movimento: un scrub numerico
          // aggiungerebbe un secondo strato di lag sopra quello di Lenis,
          // che e la causa tipica di un parallax "che pattina" o in ritardo.
          scrub: true,
        },
      });

      LAYERS.forEach(({ layer, yPercent }, i) => {
        tl.to(
          layers.querySelectorAll(`[data-parallax-layer="${layer}"]`),
          { yPercent, ease: "none" },
          i === 0 ? undefined : "<"
        );
      });
    }, root);

    // Le altezze definitive dipendono da font e immagini: un refresh dopo il
    // primo paint evita che ScrollTrigger resti su misure stale.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const raf = requestAnimationFrame(refresh);

    return () => {
      window.removeEventListener("load", refresh);
      cancelAnimationFrame(raf);
      ctx.revert();
    };
  }, []);

  return (
    <div className={styles.parallax} ref={rootRef}>
      <section className={styles.header} data-parallax-track>
        <div className={styles.visuals}>
          <div data-parallax-layers className={styles.layers}>
            <div
              data-parallax-layer="1"
              className={`${styles.layer} ${styles.layerDecor}`}
            >
              <LayerBlueprint />
            </div>

            <div
              data-parallax-layer="2"
              className={`${styles.layer} ${styles.layerDecor}`}
            >
              <LayerWindows />
            </div>

            <div
              data-parallax-layer="3"
              className={`${styles.layer} ${styles.layerTitle}`}
            >
              <HeroCopy t={t} />
            </div>

            <div
              data-parallax-layer="4"
              className={`${styles.layer} ${styles.layerDecor}`}
            >
              <LayerConfigCards />
            </div>
          </div>

          <div className={styles.fade} />

          <div className={styles.scrollHint} aria-hidden="true">
            <span>{t("scroll")}</span>
            <span className={styles.scrollHintLine} />
          </div>
        </div>
      </section>
    </div>
  );
}

function HeroCopy({ t }: { t: ReturnType<typeof useTranslations<"hero">> }) {
  return (
    <div className="relative z-10 mx-auto max-w-3xl text-center">
      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[12px] font-medium text-white/70 backdrop-blur-sm">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-mint)]" />
        {t("badge")}
      </span>

      <div className="mt-7 flex justify-center">
        <Image
          src="/onespec-logo.png"
          alt="onespec"
          width={2000}
          height={700}
          priority
          className="h-11 w-auto sm:h-14"
        />
      </div>

      <h1 className="mt-7 text-balance text-4xl font-semibold leading-[1.06] tracking-tight text-white sm:text-6xl">
        {t("title")}
      </h1>

      <p className="mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed text-white/60 sm:text-xl">
        {t("subtitle")}
      </p>

      <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link
          href="/prezzi"
          className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-[var(--color-mint)] px-6 py-3.5 text-[15px] font-medium text-[#04231a] transition-transform duration-200 ease-out hover:scale-[1.02] active:scale-[0.98]"
        >
          {t("ctaPrimary")}
          <ArrowRight
            size={16}
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </Link>
        <Link
          href="/prodotto"
          className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-3.5 text-[15px] font-medium text-white transition-colors duration-150 hover:bg-white/10 active:bg-white/15"
        >
          {t("ctaSecondary")}
        </Link>
      </div>
    </div>
  );
}
