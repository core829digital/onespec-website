"use client";

import { useSyncExternalStore } from "react";
import { useTranslations } from "next-intl";
import { Moon, Sun } from "@phosphor-icons/react/dist/ssr";

const STORAGE_KEY = "onespec-theme";

const THEME_EVENT = "onespec:theme";

function subscribe(cb: () => void) {
  window.addEventListener(THEME_EVENT, cb);
  return () => window.removeEventListener(THEME_EVENT, cb);
}

export function ThemeToggle() {
  const t = useTranslations("theme");
  // Legge il tema direttamente dal documento (impostato dallo script iniziale):
  // sul server resta "non pronto", cosi' il pulsante compare solo dopo l'idratazione.
  const theme = useSyncExternalStore(
    subscribe,
    () => (document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark"),
    () => null,
  );
  const mounted = theme !== null;
  const isLight = theme === "light";

  function toggle() {
    const next = !isLight;
    if (next) {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem(STORAGE_KEY, "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem(STORAGE_KEY, "dark");
    }
    window.dispatchEvent(new Event(THEME_EVENT));
  }

  if (!mounted) return null;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isLight ? t("toDark") : t("toLight")}
      aria-pressed={isLight}
      className="fixed right-6 bottom-[calc(1.5rem+env(safe-area-inset-bottom))] z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg-alt)]/90 text-[var(--color-text)] shadow-[0_8px_24px_-8px_rgba(0,0,0,0.35)] backdrop-blur-md transition-transform duration-200 ease-out hover:scale-105 active:scale-95"
    >
      {isLight ? <Moon size={19} weight="bold" /> : <Sun size={19} weight="bold" />}
    </button>
  );
}
