"use client";

import { useEffect, useRef, useState } from "react";

const SRC = "/configuratore-demo.html";

/**
 * Anteprima live del configuratore, servita in iframe esattamente come lo
 * riceve un cliente. L'iframe e same-origin, quindi possiamo misurare
 * l'altezza reale del contenuto e adattare il box senza scrollbar interne.
 */
export function ConfiguratorEmbed({
  className,
  chromeLabel = "tuosito-infissi.it",
}: {
  className?: string;
  chromeLabel?: string;
}) {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(1100);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    let observer: ResizeObserver | null = null;
    let themeObserver: MutationObserver | null = null;

    /** Riporta il tema del sito dentro l'iframe (same-origin). */
    function syncTheme() {
      const doc = frame?.contentDocument;
      if (!doc?.documentElement) return;
      const light =
        document.documentElement.getAttribute("data-theme") === "light";
      if (light) doc.documentElement.removeAttribute("data-theme");
      else doc.documentElement.setAttribute("data-theme", "dark");
    }

    function measure() {
      try {
        const doc = frame?.contentDocument;
        if (!doc?.body) return;
        const next = Math.ceil(
          Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight)
        );
        if (next > 0) setHeight(next);
      } catch {
        // Se per qualsiasi motivo il documento non fosse leggibile, si tiene
        // l'altezza di fallback: il widget resta usabile, con scroll interno.
      }
    }

    function onLoad() {
      setLoaded(true);
      syncTheme();
      measure();
      const doc = frame?.contentDocument;
      if (doc?.body && typeof ResizeObserver !== "undefined") {
        observer = new ResizeObserver(measure);
        observer.observe(doc.body);
      }
    }

    frame.addEventListener("load", onLoad);
    // L'iframe puo essere gia caricato quando l'effetto parte.
    if (frame.contentDocument?.readyState === "complete") onLoad();

    // Il toggle tema del sito cambia data-theme sull'<html>: lo seguiamo.
    themeObserver = new MutationObserver(syncTheme);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      frame.removeEventListener("load", onLoad);
      observer?.disconnect();
      themeObserver?.disconnect();
    };
  }, []);

  return (
    <div
      className={`overflow-hidden rounded-3xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-alt)] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)] ${className ?? ""}`}
    >
      {/* Finta chrome del browser: comunica "questo gira dentro il tuo sito". */}
      <div className="flex items-center gap-1.5 border-b border-[var(--color-border-subtle)] bg-[var(--color-bg)] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 truncate text-[11px] text-[var(--color-text-secondary)]">
          {chromeLabel}
        </span>
        <span className="ml-auto flex shrink-0 items-center gap-1.5 rounded-full bg-[var(--color-mint-light)] px-2.5 py-1 text-[10px] font-semibold text-[var(--color-mint-dark)]">
          <span className="h-1 w-1 rounded-full bg-[var(--color-mint-dark)]" />
          LIVE
        </span>
      </div>

      <div className="relative bg-[var(--color-bg)]">
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-bg-alt)]">
            <span className="text-[13px] text-[var(--color-text-secondary)]">
              Caricamento configuratore…
            </span>
          </div>
        )}
        <iframe
          ref={frameRef}
          src={SRC}
          title="Configuratore onespec — anteprima interattiva"
          loading="lazy"
          style={{ height }}
          className="block w-full border-0"
        />
      </div>
    </div>
  );
}
