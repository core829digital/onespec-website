"use client";

import { useLocale, useTranslations } from "next-intl";
import { ArrowRight, CheckCircle, Star, StarHalf } from "@phosphor-icons/react/dist/ssr";
import { ShaderBackground } from "@/components/ui/shader-background";
import { platformRegister } from "@/lib/site-config";

/**
 * Recensione REALE di un cliente (con il suo consenso). `rating` da 1 a 5,
 * anche con mezzi punti (es. 4.5). Finché l'elenco in messages/*.json
 * (hero.reviews) è vuoto, sotto i pulsanti compaiono solo tre fatti verificabili:
 * nessuna recensione o caso studio viene mai inventato.
 */
type Review = { quote: string; name: string; company: string; city?: string; rating: number };

function Stars({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-0.5 text-[#ffc94d]" role="img" aria-label={`${rating}/5`}>
      {[1, 2, 3, 4, 5].map((n) =>
        rating >= n ? (
          <Star key={n} size={14} weight="fill" aria-hidden="true" />
        ) : rating >= n - 0.5 ? (
          <StarHalf key={n} size={14} weight="fill" aria-hidden="true" />
        ) : (
          <Star key={n} size={14} weight="regular" className="text-white/35" aria-hidden="true" />
        ),
      )}
    </span>
  );
}

const cardClass =
  "mx-2 flex w-[280px] shrink-0 flex-col justify-center rounded-2xl border border-white/12 bg-black/55 px-4 py-3.5 text-left backdrop-blur-md sm:w-[300px]";

/** Fila in loop continuo di recensioni reali: la lista è ripetuta due volte (la seconda copia è nascosta ai lettori di schermo). */
function Marquee({ reviews, label }: { reviews: Review[]; label: string }) {
  const renderSet = (copy: boolean) => (
    <ul className="flex" aria-hidden={copy || undefined} data-marquee-copy={copy || undefined}>
      {reviews.map((r, i) => (
        <li key={`r${i}`} className={cardClass}>
          <Stars rating={r.rating} />
          <p className="mt-2 line-clamp-3 text-[13px] leading-snug text-white/90">“{r.quote}”</p>
          <p className="mt-2 text-[12px] font-semibold text-white">
            {r.name} <span className="font-normal text-white/65">· {r.company}{r.city ? `, ${r.city}` : ""}</span>
          </p>
        </li>
      ))}
    </ul>
  );
  return (
    <div className="os-marquee w-full overflow-hidden" role="region" aria-label={label}>
      {/* ~5,5 s per scheda: abbastanza lento da leggere, sempre in movimento. */}
      <div className="os-marquee-track py-1" style={{ ["--os-marquee-duration" as string]: `${reviews.length * 5.5}s` }}>
        {renderSet(false)}
        {renderSet(true)}
      </div>
    </div>
  );
}

/**
 * Hero a tutto schermo con sfondo WebGL animato (palette onespec: nero → mint).
 * Badge e logo stanno su una superficie scura semitrasparente: il "spec" mint
 * del logo e il pallino del badge restano leggibili anche quando lo shader
 * passa sul verde.
 */
export function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const facts = t.raw("facts") as string[];
  const reviews = (t.raw("reviews") as Review[]) ?? [];

  // La sezione sale sotto l'header fluttuante (alto 4.25rem): l'animazione copre tutta la sezione, senza fascia vuota in cima.
  return (
    <section className="relative -mt-[4.25rem] flex min-h-[100svh] w-full flex-col overflow-hidden bg-[var(--color-bg-inverse)] pt-[4.25rem]">
      <ShaderBackground className="absolute inset-0" />

      {/* Velo scuro al centro: il testo resta leggibile su qualunque fase dello shader. */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 45%, rgba(6,8,9,0.62) 0%, rgba(6,8,9,0.25) 60%, rgba(6,8,9,0) 100%)" }}
      />
      {/* Scurisce il basso per agganciare la sezione successiva. */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
        style={{ background: "linear-gradient(to bottom, rgba(10,11,13,0) 0%, var(--color-bg) 100%)" }}
      />

      <div className="relative z-10 flex w-full flex-1 items-center justify-center px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/55 px-3.5 py-1.5 text-[12px] font-semibold text-white backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-mint)] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-mint)] shadow-[0_0_0_2px_rgba(0,0,0,0.6)]" />
            </span>
            {t("badge")}
          </span>

          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.06] tracking-tight text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.35)] sm:text-5xl lg:text-[3.6rem]">
            {t("title")}
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-balance text-lg leading-relaxed text-white/85 sm:text-xl">{t("subtitle")}</p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={platformRegister(locale)}
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-[var(--color-mint)] px-6 py-3.5 text-[15px] font-medium text-[#04231a] transition-transform duration-200 ease-out hover:scale-[1.02] active:scale-[0.98]"
            >
              {t("ctaPrimary")}
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#configuratore"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/25 bg-black/40 px-6 py-3.5 text-[15px] font-medium text-white backdrop-blur-md transition-colors duration-150 hover:bg-white/10 active:bg-white/15"
            >
              {t("ctaSecondary")}
            </a>
          </div>

          {reviews.length === 0 ? (
            <ul className="mt-9 flex flex-col items-center justify-center gap-x-6 gap-y-2 sm:flex-row sm:flex-wrap" aria-label={t("factsAria")}>
              {facts.map((f) => (
                <li key={f} className="flex items-center gap-2 text-[13px] font-medium text-white/80">
                  <CheckCircle size={16} weight="fill" className="shrink-0 text-[var(--color-mint)]" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>

      {reviews.length > 0 ? (
        <div className="relative z-10 w-full pb-6">
          <Marquee reviews={reviews} label={t("reviewsAria")} />
        </div>
      ) : null}
    </section>
  );
}
