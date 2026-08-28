"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Link } from "@/i18n/navigation";
import { ShaderBackground } from "@/components/ui/shader-background";

/**
 * Hero a tutta larghezza/altezza con sfondo WebGL animato (palette onespec:
 * nero -> mint). Full-bleed: nessun container, occupa l'intero viewport.
 */
export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative h-dvh min-h-[640px] w-full overflow-hidden bg-[var(--color-bg-inverse)]">
      <ShaderBackground className="absolute inset-0" />

      {/* Scurisce il basso per far leggere bene il testo e agganciare la
          sezione successiva senza un taglio netto. */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,11,13,0) 0%, rgba(10,11,13,0.75) 65%, var(--color-bg) 100%)",
        }}
      />

      <div className="relative z-10 flex h-full w-full items-center justify-center px-6">
        <div className="mx-auto max-w-3xl text-center">
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
      </div>

      <div
        className="pointer-events-none absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[11px] tracking-[0.12em] text-white/45 uppercase"
        aria-hidden="true"
      >
        <span>{t("scroll")}</span>
        <span className="h-[34px] w-px bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
}
