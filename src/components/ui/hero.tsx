"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { ArrowRight, CheckCircle, Star, StarHalf } from "@phosphor-icons/react/dist/ssr";
import { Link } from "@/i18n/navigation";
import { ShaderBackground } from "@/components/ui/shader-background";
import { SocialLinks } from "@/components/social-links";
import { platformRegister } from "@/lib/site-config";

type Highlight = { title: string; text: string };
/**
 * Recensione REALE di un cliente (con il suo consenso). `rating` da 1 a 5,
 * anche con mezzi punti (es. 4.5). Finché l'elenco in messages/*.json
 * (hero.reviews) è vuoto, il carosello mostra cosa fa OneSpec.
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

/** Fila in loop continuo: la lista è ripetuta due volte (la seconda copia è nascosta ai lettori di schermo). */
function Marquee({ highlights, reviews, label }: { highlights: Highlight[]; reviews: Review[]; label: string }) {
  const useReviews = reviews.length > 0;
  const count = useReviews ? reviews.length : highlights.length;
  const renderSet = (copy: boolean) => (
    <ul className="flex" aria-hidden={copy || undefined} data-marquee-copy={copy || undefined}>
      {useReviews
        ? reviews.map((r, i) => (
            <li key={`r${i}`} className={cardClass}>
              <Stars rating={r.rating} />
              <p className="mt-2 line-clamp-3 text-[13px] leading-snug text-white/90">“{r.quote}”</p>
              <p className="mt-2 text-[12px] font-semibold text-white">
                {r.name} <span className="font-normal text-white/65">· {r.company}{r.city ? `, ${r.city}` : ""}</span>
              </p>
            </li>
          ))
        : highlights.map((h, i) => (
            <li key={`h${i}`} className={cardClass}>
              <span className="flex items-center gap-2 text-[14px] font-semibold text-white">
                <CheckCircle size={18} weight="fill" className="shrink-0 text-[var(--color-mint)]" aria-hidden="true" />
                {h.title}
              </span>
              <span className="mt-1 pl-[26px] text-[12.5px] leading-snug text-white/75">{h.text}</span>
            </li>
          ))}
    </ul>
  );
  return (
    <div className="os-marquee w-full overflow-hidden" role="region" aria-label={label}>
      {/* ~5,5 s per scheda: abbastanza lento da leggere, sempre in movimento. */}
      <div className="os-marquee-track py-1" style={{ ["--os-marquee-duration" as string]: `${count * 5.5}s` }}>
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
  const highlights = t.raw("highlights") as Highlight[];
  const reviews = (t.raw("reviews") as Review[]) ?? [];

  return (
    <section className="relative flex min-h-[calc(100svh-65px)] w-full flex-col overflow-hidden bg-[var(--color-bg-inverse)]">
      <ShaderBackground className="absolute inset-0" />

      {/* Velo scuro al centro: il testo resta leggibile su qualunque fase dello shader. */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 45%, rgba(6,8,9,0.62) 0%, rgba(6,8,9,0.25) 60%, rgba(6,8,9,0) 100%)" }}
      />
      {/* Scurisce il basso per il carosello e per agganciare la sezione successiva. */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5"
        style={{ background: "linear-gradient(to bottom, rgba(10,11,13,0) 0%, rgba(10,11,13,0.8) 55%, var(--color-bg) 100%)" }}
      />

      <div className="relative z-10 flex w-full flex-1 items-center justify-center px-6 pt-20 pb-5 [@media(max-height:820px)]:pt-8 [@media(max-height:820px)]:pb-3">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/55 px-3.5 py-1.5 text-[12px] font-semibold text-white backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-mint)] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-mint)] shadow-[0_0_0_2px_rgba(0,0,0,0.6)]" />
            </span>
            {t("badge")}
          </span>

          <div className="mt-5 flex justify-center [@media(max-height:820px)]:mt-3">
            <span className="inline-flex rounded-2xl border border-white/15 bg-black/60 px-4 py-2.5 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-md">
              <Image
                src="/onespec-logo.png"
                alt="onespec"
                width={2000}
                height={700}
                priority
                className="h-9 w-auto sm:h-11 [@media(max-height:820px)]:sm:h-9"
              />
            </span>
          </div>

          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.06] tracking-tight text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.35)] sm:text-5xl lg:text-[3.6rem] [@media(max-height:820px)]:mt-4 [@media(max-height:820px)]:lg:text-[2.9rem]">
            {t("title")}
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-balance text-lg leading-relaxed text-white/85 sm:text-xl [@media(max-height:820px)]:mt-3 [@media(max-height:820px)]:sm:text-lg">
            {t("subtitle")}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row [@media(max-height:820px)]:mt-5">
            <a
              href={platformRegister(locale)}
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-[var(--color-mint)] px-6 py-3.5 text-[15px] font-medium text-[#04231a] transition-transform duration-200 ease-out hover:scale-[1.02] active:scale-[0.98]"
            >
              {t("ctaPrimary")}
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <Link
              href="/prodotto"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/25 bg-black/40 px-6 py-3.5 text-[15px] font-medium text-white backdrop-blur-md transition-colors duration-150 hover:bg-white/10 active:bg-white/15"
            >
              {t("ctaSecondary")}
            </Link>
          </div>

          <div className="mt-6 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-3 [@media(max-height:820px)]:mt-4">
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70">{t("social")}</span>
            <SocialLinks tone="dark" showHandle />
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full pb-6 [@media(max-height:820px)]:pb-4">
        <p className="mb-3 px-6 text-balance text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-white/75">{t("trustTitle")}</p>
        <Marquee highlights={highlights} reviews={reviews} label={reviews.length ? t("reviewsAria") : t("highlightsAria")} />
      </div>
    </section>
  );
}
