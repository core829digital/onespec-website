"use client";

import { useLocale, useTranslations } from "next-intl";

/** The film is narrated in Italian: it is shown in the Italian site only (a visitor in another language would hear one they cannot follow). */
const VIDEO_LOCALE = "it";

/** Presentation film with its heading, served from /public/video (no third-party player, no tracking). Renders nothing outside the Italian site. */
export function PresentationVideo() {
  const t = useTranslations("demoConfigurators");
  const locale = useLocale();
  if (locale !== VIDEO_LOCALE) return null;
  return (
    <div className="mx-auto mt-20 max-w-4xl">
      <h3 className="text-balance text-center text-2xl font-semibold tracking-tight text-[var(--color-text)] sm:text-3xl">{t("videoTitle")}</h3>
      <p className="mx-auto mb-8 mt-3 max-w-xl text-balance text-center text-[15px] leading-relaxed text-[var(--color-text-secondary)]">{t("videoSubtitle")}</p>
      <div className="overflow-hidden rounded-3xl border border-[var(--color-border-subtle)] bg-black shadow-[0_30px_80px_-30px_rgba(0,0,0,0.45)]">
        <video
          className="block aspect-video w-full"
          controls
          playsInline
          preload="none"
          poster="/video/onespec-film-anteprima.jpg"
          aria-label={t("videoTitle")}
        >
          <source src="/video/onespec-film-anteprima.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
