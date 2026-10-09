"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { ArrowSquareOut, DeviceMobile, DeviceTablet, Desktop } from "@phosphor-icons/react";
import { DEMO_PLATFORM_URL } from "@/lib/site-config";

const DEVICES = [
  { id: "desktop", width: "100%", icon: Desktop },
  { id: "tablet", width: "820px", icon: DeviceTablet },
  { id: "phone", width: "390px", icon: DeviceMobile },
] as const;
type DeviceId = (typeof DEVICES)[number]["id"];

/** The whole platform in demo mode (served by demo.<domain>, running in the visitor's browser), shown at desktop, tablet or phone width. */
export function PlatformDemo() {
  const t = useTranslations("platformDemo");
  const locale = useLocale();
  const [device, setDevice] = useState<DeviceId>("desktop");
  const [loaded, setLoaded] = useState(false);
  const src = `${DEMO_PLATFORM_URL}/${locale}/app/dashboard`;
  const width = DEVICES.find((d) => d.id === device)?.width ?? "100%";

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <div role="group" aria-label={t("deviceLabel")} className="inline-flex rounded-full border border-[var(--color-border-subtle)] bg-[var(--color-bg-alt)] p-1">
          {DEVICES.map(({ id, icon: Icon }) => (
            <button
              key={id}
              type="button"
              aria-pressed={device === id}
              onClick={() => setDevice(id)}
              className={`inline-flex min-h-10 cursor-pointer items-center gap-2 rounded-full px-4 text-[13px] font-medium transition-colors ${device === id ? "bg-[var(--color-mint)] text-[#04231a]" : "text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"}`}
            >
              <Icon size={18} />
              {t(id)}
            </button>
          ))}
        </div>
        <a href={src} target="_blank" rel="noopener" className="inline-flex min-h-10 items-center gap-2 rounded-full border border-[var(--color-border-subtle)] px-4 text-[13px] font-medium text-[var(--color-text)] hover:bg-[var(--color-bg-alt)]">
          <ArrowSquareOut size={16} />
          {t("openFull")}
        </a>
      </div>

      <div className="mt-6 flex justify-center">
        <div style={{ width, maxWidth: "100%" }} className="overflow-hidden rounded-3xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-alt)] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)] transition-[width] duration-300">
          <div className="flex items-center gap-1.5 border-b border-[var(--color-border-subtle)] bg-[var(--color-bg)] px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 truncate text-[11px] font-medium text-[var(--color-text-secondary)]">{t("label")}</span>
            <span className="ml-auto shrink-0 rounded-full bg-[var(--color-mint-light)] px-2.5 py-1 text-[10px] font-semibold text-[var(--color-mint-dark)]">{t("badge")}</span>
          </div>
          <div className="relative bg-[var(--color-bg)]">
            {!loaded && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-[var(--color-bg-alt)]">
                <span className="text-[13px] text-[var(--color-text-secondary)]">{t("loading")}</span>
              </div>
            )}
            <iframe key={`${device}`} src={src} title={t("label")} loading="lazy" onLoad={() => setLoaded(true)} className="block h-[78vh] min-h-[560px] w-full border-0" />
          </div>
        </div>
      </div>
      <p className="mx-auto mt-5 max-w-2xl text-center text-[13px] leading-relaxed text-[var(--color-text-secondary)]">{t("note")}</p>
    </div>
  );
}
