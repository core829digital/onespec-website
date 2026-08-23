"use client";

import Link from "next/link";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";

export function HeroGemini() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <section
      ref={ref}
      className="relative h-[190vh] w-full overflow-clip bg-[var(--color-bg-inverse)]"
    >
      <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden">
        <GoogleGeminiEffect
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
        />

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[12px] font-medium text-white/70 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-mint)]" />
            In sviluppo &middot; versione Alpha
          </span>

          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl">
            Il configuratore di infissi che qualifica i clienti al posto tuo
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed text-white/60 sm:text-xl">
            Un widget integrabile via iFrame per aziende di produzione e rivendita infissi.
            Preventivi automatici, prezzi sempre aggiornati, brand tuo.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/prezzi"
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-[var(--color-mint)] px-6 py-3.5 text-[15px] font-medium text-[#04231a] transition-transform duration-200 ease-out hover:scale-[1.02] active:scale-[0.98]"
            >
              Richiedi accesso Alpha
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
            <Link
              href="/prodotto"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-white/10"
            >
              Scopri come funziona
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
