"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { PLATFORM_URL } from "@/lib/site-config";

const DEMO_ORIGIN = PLATFORM_URL;
const MIN_HEIGHT = 640;
const MAX_HEIGHT = 6000;

type Kind = "widget" | "showroom";

/**
 * Two live, fully interactive demos served by the platform (same code as the
 * product, static catalogue, nothing is ever sent). They are framed from the
 * platform origin and report their height through validated postMessage.
 */
export function DemoConfigurators() {
  const t = useTranslations("demoConfigurators");
  const locale = useLocale();
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [heights, setHeights] = useState<Record<Kind, number>>({ widget: 900, showroom: 1400 });
  const [loaded, setLoaded] = useState<Record<Kind, boolean>>({ widget: false, showroom: false });

  useEffect(() => {
    const read = () =>
      setTheme(document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark");
    read();
    const mo = new MutationObserver(read);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => mo.disconnect();
  }, []);

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.origin !== DEMO_ORIGIN) return;
      const d = e.data as { type?: unknown; publicId?: unknown; height?: unknown } | null;
      if (!d || d.type !== "onespec:resize" || typeof d.height !== "number" || !Number.isFinite(d.height)) return;
      const kind: Kind | null = d.publicId === "DEMO000000" ? "widget" : d.publicId === "DEMOSHOWROOM" ? "showroom" : null;
      if (!kind) return;
      const h = Math.min(MAX_HEIGHT, Math.max(MIN_HEIGHT, Math.ceil(d.height)));
      setHeights((prev) => (prev[kind] === h ? prev : { ...prev, [kind]: h }));
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  const panes: Array<{ kind: Kind; label: string; caption: string; url: string }> = [
    { kind: "widget", label: t("widgetLabel"), caption: t("widgetCaption"), url: `${DEMO_ORIGIN}/demo/widget` },
    { kind: "showroom", label: t("showroomLabel"), caption: t("showroomCaption"), url: `${DEMO_ORIGIN}/demo/showroom` },
  ];

  return (
    <div className="grid items-start gap-6 lg:grid-cols-2">
      {panes.map((p) => (
        <figure key={p.kind} className="min-w-0">
          <div className="overflow-hidden rounded-3xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-alt)] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)]">
            <div className="flex items-center gap-1.5 border-b border-[var(--color-border-subtle)] bg-[var(--color-bg)] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 truncate text-[11px] font-medium text-[var(--color-text-secondary)]">{p.label}</span>
              <span className="ml-auto flex shrink-0 items-center gap-1.5 rounded-full bg-[var(--color-mint-light)] px-2.5 py-1 text-[10px] font-semibold text-[var(--color-mint-dark)]">
                <span className="h-1 w-1 rounded-full bg-[var(--color-mint-dark)]" />
                {t("badge")}
              </span>
            </div>
            <div className="relative bg-[var(--color-bg)]">
              {!loaded[p.kind] && (
                <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-bg-alt)]">
                  <span className="text-[13px] text-[var(--color-text-secondary)]">{t("loading")}</span>
                </div>
              )}
              <iframe
                src={`${p.url}?lang=${locale}&theme=${theme}`}
                title={p.label}
                loading="lazy"
                onLoad={() => setLoaded((l) => ({ ...l, [p.kind]: true }))}
                style={{ height: heights[p.kind] }}
                className="block w-full border-0"
              />
            </div>
          </div>
          <figcaption className="mt-4 px-1 text-center text-[13px] leading-relaxed text-[var(--color-text-secondary)]">
            <span className="font-semibold text-[var(--color-text)]">{p.label}</span> — {p.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
