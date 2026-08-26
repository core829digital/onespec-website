"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { Link } from "@/i18n/navigation";
import { Logo } from "@/components/logo";
import { Countdown } from "@/components/countdown";
import { LanguageSwitcher } from "@/components/language-switcher";
import { NAV_KEYS, NAV_HREFS } from "@/lib/site-config";
import pillStyles from "@/components/showcase/pill-nav.module.css";

export function Header() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-transparent backdrop-blur-md">
      <div className="container-onespec flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className={pillStyles.menu}>
          {NAV_KEYS.map((key) => (
            <Link key={key} href={NAV_HREFS[key]} className={pillStyles.link}>
              {t(key)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitcher />
          <Countdown compact />
          <Link
            href="/prezzi"
            className="cursor-pointer rounded-full bg-[var(--color-mint)] px-4 py-2 text-[13px] font-medium text-[#04231a] transition-transform duration-200 ease-out hover:scale-[1.03] active:scale-[0.98]"
          >
            {t("richiediAccesso")}
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? t("chiudiMenu") : t("apriMenu")}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-[var(--color-text)] md:hidden"
        >
          {open ? <X size={22} /> : <List size={22} />}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-[var(--color-border-subtle)] bg-[var(--color-bg)] md:hidden"
          >
            <div className="container-onespec flex flex-col gap-2 py-4">
              {NAV_KEYS.map((key) => (
                <Link
                  key={key}
                  href={NAV_HREFS[key]}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-[15px] font-medium text-[var(--color-text)] transition-colors duration-150 hover:bg-[var(--color-bg-alt)] active:bg-[var(--color-bg-alt)]"
                >
                  {t(key)}
                </Link>
              ))}
              <div className="mt-2 px-3">
                <Countdown />
              </div>
              <div className="mt-3 px-3">
                <LanguageSwitcher />
              </div>
              <Link
                href="/prezzi"
                onClick={() => setOpen(false)}
                className="mt-3 rounded-full bg-[var(--color-mint)] px-4 py-3.5 text-center text-[15px] font-medium text-[#04231a] transition-transform duration-150 active:scale-[0.98]"
              >
                {t("richiediAccesso")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
