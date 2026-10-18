"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

type Step = { label: string; title: string; body: string; alt: string };

// Real captures of the platform (demo data), one set per language: public/product/{s1..s4}-{locale}.webp.
const SHOTS = [
  { file: "s1", w: 700, h: 1250 },
  { file: "s2", w: 702, h: 920 },
  { file: "s3", w: 666, h: 1480 },
  { file: "s4", w: 1800, h: 1085 },
] as const;
const AUTOPLAY_MS = 6500;

/**
 * "OneSpec in action": the four moments of a real request, from the customer choosing the window on the dealer's site to the request
 * landing in the platform. Steps advance by themselves while the frame is on screen, until the visitor picks one (never with reduced
 * motion).
 */
export function ProductStoryboard() {
  const t = useTranslations("prodotto.inAction");
  const locale = useLocale();
  const steps = t.raw("steps") as Step[];
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!auto || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timer: number | undefined;
    const io = new IntersectionObserver(([entry]) => {
      window.clearInterval(timer);
      if (entry?.isIntersecting) timer = window.setInterval(() => setActive((a) => (a + 1) % SHOTS.length), AUTOPLAY_MS);
    }, { threshold: 0.4 });
    if (root.current) io.observe(root.current);
    return () => {
      io.disconnect();
      window.clearInterval(timer);
    };
  }, [auto]);

  const pick = (i: number) => {
    setAuto(false);
    setActive(i);
  };

  return (
    <div ref={root} className="grid items-start gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-10">
      <ol className="order-2 space-y-2 lg:order-1">
        {steps.map((s, i) => {
          const on = i === active;
          return (
            <li key={s.label}>
              <button
                type="button"
                onClick={() => pick(i)}
                aria-pressed={on}
                className={`w-full cursor-pointer rounded-2xl border p-4 text-left transition-colors sm:p-5 ${
                  on
                    ? "border-[var(--color-mint)]/50 bg-[var(--color-bg-alt)]"
                    : "border-[var(--color-border-subtle)] hover:border-[var(--color-border)]"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[12px] font-semibold ${
                      on ? "bg-[var(--color-mint)] text-[#04231a]" : "bg-[var(--color-bg-alt)] text-[var(--color-text-secondary)]"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">{s.label}</span>
                    <span className="block text-[15px] font-semibold text-[var(--color-text)]">{s.title}</span>
                  </span>
                </span>
                <span className={`grid transition-[grid-template-rows] duration-300 ${on ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <span className="overflow-hidden">
                    <span className="block pt-3 text-[14px] leading-relaxed text-[var(--color-text-secondary)] sm:pl-10">{s.body}</span>
                  </span>
                </span>
                {on && auto ? (
                  <span className="mt-3 block h-0.5 overflow-hidden rounded-full bg-[var(--color-border-subtle)] sm:ml-10" aria-hidden="true">
                    <span key={active} className="os-step-progress block h-full bg-[var(--color-mint)]" style={{ animationDuration: `${AUTOPLAY_MS}ms` }} />
                  </span>
                ) : null}
              </button>
            </li>
          );
        })}
      </ol>

      <figure className="order-1 min-w-0 lg:order-2 lg:sticky lg:top-24">
        <div className="overflow-hidden rounded-3xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-alt)] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.45)]">
          <div className="flex items-center gap-1.5 border-b border-[var(--color-border-subtle)] bg-[var(--color-bg)] px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 truncate text-[11px] font-medium text-[var(--color-text-secondary)]">{steps[active]?.label}</span>
            <span className="ml-auto shrink-0 rounded-full border border-[var(--color-border-subtle)] px-2 py-0.5 text-[10px] text-[var(--color-text-secondary)]">
              {t("sample")}
            </span>
          </div>
          <div className="relative h-[440px] bg-[var(--color-bg)] sm:h-[520px] lg:h-[560px]">
            {SHOTS.map((shot, i) => (
              <Image
                key={shot.file}
                src={`/product/${shot.file}-${locale}.webp`}
                alt={steps[i]?.alt ?? ""}
                width={shot.w}
                height={shot.h}
                sizes="(min-width: 1024px) 640px, 100vw"
                priority={i === 0}
                aria-hidden={i !== active}
                className={`absolute inset-0 h-full w-full object-contain p-3 transition-opacity duration-500 sm:p-5 ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </figure>
    </div>
  );
}
