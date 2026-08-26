"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Check, Copy } from "@phosphor-icons/react/dist/ssr";

const SNIPPET = `<iframe
  src="https://app.onespec.it/w/tuo-id"
  width="100%"
  height="900"
  style="border:0"
  title="Configuratore infissi"
></iframe>`;

export function IframeExplainer() {
  const t = useTranslations("iframeExplainer");
  const points = t.raw("points") as { title: string; body: string }[];
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(SNIPPET);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard negata dal browser: il codice resta comunque selezionabile.
    }
  }

  return (
    <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
      <div>
        <span className="inline-block rounded-full bg-[var(--color-mint-light)] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[var(--color-mint-dark)]">
          {t("kicker")}
        </span>
        <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
          {t("title")}
        </h2>
        <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
          {t("subtitle")}
        </p>

        <dl className="mt-9 space-y-7">
          {points.map((p, i) => (
            <div key={p.title} className="flex gap-4">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-mint-light)] font-mono text-[12px] font-semibold text-[var(--color-mint-dark)]">
                {i + 1}
              </span>
              <div>
                <dt className="text-[16px] font-semibold text-[var(--color-text)]">
                  {p.title}
                </dt>
                <dd className="mt-1.5 text-[14px] leading-relaxed text-[var(--color-text-secondary)]">
                  {p.body}
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </div>

      {/* Snippet reale, copiabile. */}
      <div className="overflow-hidden rounded-2xl border border-[var(--color-border-subtle)] bg-[#0d0f11] shadow-[0_24px_60px_-30px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-1.5 border-b border-white/8 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/40" />
          <span className="ml-3 font-mono text-[11px] text-white/35">
            index.html
          </span>
          <button
            type="button"
            onClick={copy}
            className="ml-auto flex cursor-pointer items-center gap-1.5 rounded-md px-2.5 py-1.5 text-[11px] font-medium text-white/55 transition-colors hover:bg-white/8 hover:text-white/90"
          >
            {copied ? (
              <>
                <Check size={13} weight="bold" />
                {t("copied")}
              </>
            ) : (
              <>
                <Copy size={13} />
                {t("copy")}
              </>
            )}
          </button>
        </div>

        <pre className="overflow-x-auto px-5 py-5">
          <code className="font-mono text-[12.5px] leading-relaxed sm:text-[13px]">
            <span className="text-white/30">&lt;</span>
            <span className="text-[#ff7b9c]">iframe</span>
            {"\n  "}
            <span className="text-[#c9a2ff]">src</span>
            <span className="text-white/30">=</span>
            <span className="text-[var(--color-mint)]">
              &quot;https://app.onespec.it/w/tuo-id&quot;
            </span>
            {"\n  "}
            <span className="text-[#c9a2ff]">width</span>
            <span className="text-white/30">=</span>
            <span className="text-[var(--color-mint)]">&quot;100%&quot;</span>
            {"\n  "}
            <span className="text-[#c9a2ff]">height</span>
            <span className="text-white/30">=</span>
            <span className="text-[var(--color-mint)]">&quot;900&quot;</span>
            {"\n  "}
            <span className="text-[#c9a2ff]">style</span>
            <span className="text-white/30">=</span>
            <span className="text-[var(--color-mint)]">&quot;border:0&quot;</span>
            {"\n  "}
            <span className="text-[#c9a2ff]">title</span>
            <span className="text-white/30">=</span>
            <span className="text-[var(--color-mint)]">
              &quot;Configuratore infissi&quot;
            </span>
            {"\n"}
            <span className="text-white/30">&gt;&lt;/</span>
            <span className="text-[#ff7b9c]">iframe</span>
            <span className="text-white/30">&gt;</span>
          </code>
        </pre>

        <div className="border-t border-white/8 px-5 py-3.5">
          <p className="text-[12px] leading-relaxed text-white/40">
            {t.rich("footnote", {
              id: () => <span className="font-mono text-[var(--color-mint)]">tuo-id</span>,
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
