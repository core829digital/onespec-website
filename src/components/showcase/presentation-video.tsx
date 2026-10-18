"use client";

import { useLocale, useTranslations } from "next-intl";

/** The film is narrated in Italian: it is shown in the Italian site only (a visitor in another language would hear one they cannot follow). */
const VIDEO_LOCALE = "it";

/** Presentation film served from /public/video (no third-party player, no tracking). Renders nothing outside the Italian site. */
export function PresentationVideo() {
  const t = useTranslations("prodotto.inAction");
  const locale = useLocale();
  if (locale !== VIDEO_LOCALE) return null;
  return (
    <figure className="mx-auto mt-16 max-w-4xl">
      <div className="overflow-hidden rounded-3xl border border-[var(--color-border-subtle)] bg-black shadow-[0_30px_80px_-30px_rgba(0,0,0,0.45)]">
        <video
          className="block aspect-video w-full"
          controls
          playsInline
          preload="none"
          poster="/video/onespec-film-anteprima.jpg"
          aria-label={t("videoLabel")}
        >
          <source src="/video/onespec-film-anteprima.mp4" type="video/mp4" />
        </video>
      </div>
      <figcaption className="mt-3 text-center text-[13px] text-[var(--color-text-secondary)]">{t("videoCaption")}</figcaption>
    </figure>
  );
}
