"use client";

import { useTranslations } from "next-intl";

/** Presentation film, served from /public/video (no third-party player, no tracking). */
export function PresentationVideo() {
  const t = useTranslations("demoConfigurators");
  return (
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
  );
}
