"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { Link, usePathname } from "@/i18n/navigation";
import { Logo } from "@/components/logo";
import { LanguageSwitcher } from "@/components/language-switcher";
import { SocialLinks } from "@/components/social-links";
import { NAV_KEYS, NAV_HREFS, platformLogin, platformRegister } from "@/lib/site-config";

const linkClass =
  "rounded-full px-3 py-1.5 text-[13px] font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-white/10 hover:text-[var(--color-text)] aria-[current=page]:bg-[var(--color-mint-light)] aria-[current=page]:text-[var(--color-mint-dark)]";

/**
 * Floating, sticky header: a single rounded pill as wide as its content (no full-width bar with empty space), the same height on every
 * page and while scrolling. Large screens: logo, links, social icons, language, sign-in and start. Below 1024px: logo and a menu button
 * that opens a card with the same items.
 */
export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="pointer-events-none sticky top-0 z-50 px-3 pt-3 sm:px-4">
      <div className="pointer-events-auto mx-auto flex h-14 w-full max-w-[1100px] items-center justify-between gap-2 rounded-full border border-white/10 bg-[color-mix(in_srgb,var(--color-bg)_72%,transparent)] pl-5 pr-2 shadow-[0_10px_34px_-14px_rgba(0,0,0,0.65)] backdrop-blur-xl lg:w-fit lg:justify-start lg:gap-1">
        <Link href="/" className="flex items-center lg:mr-2" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label={t("menu")}>
          {NAV_KEYS.map((key) => (
            <Link key={key} href={NAV_HREFS[key]} className={linkClass} aria-current={pathname === NAV_HREFS[key] ? "page" : undefined}>
              {t(key)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-1 lg:flex">
          <span className="mx-1 h-5 w-px bg-white/12" aria-hidden="true" />
          <nav aria-label={t("social")}>
            <SocialLinks iconOnly />
          </nav>
          <LanguageSwitcher />
          <a
            href={platformLogin(locale)}
            className="ml-1 cursor-pointer rounded-full px-3 py-1.5 text-[13px] font-medium text-[var(--color-text)] transition-colors hover:bg-white/10 hover:text-[var(--color-mint-dark)]"
          >
            {t("accedi")}
          </a>
          <a
            href={platformRegister(locale)}
            className="cursor-pointer rounded-full bg-[var(--color-mint)] px-4 py-2 text-[13px] font-medium text-[#04231a] transition-transform duration-200 ease-out hover:scale-[1.03] active:scale-[0.98]"
          >
            {t("inizia")}
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? t("chiudiMenu") : t("apriMenu")}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-[var(--color-text)] hover:bg-white/10 lg:hidden"
        >
          {open ? <X size={22} /> : <List size={22} />}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto mx-auto mt-2 max-w-[1100px] rounded-3xl border border-white/10 bg-[var(--color-bg)] p-3 shadow-[0_18px_44px_-16px_rgba(0,0,0,0.7)] lg:hidden"
          >
            <nav className="flex flex-col gap-1" aria-label={t("menu")}>
              {NAV_KEYS.map((key) => (
                <Link
                  key={key}
                  href={NAV_HREFS[key]}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === NAV_HREFS[key] ? "page" : undefined}
                  className="rounded-xl px-3 py-3 text-[15px] font-medium text-[var(--color-text)] transition-colors hover:bg-[var(--color-bg-alt)] aria-[current=page]:bg-[var(--color-mint-light)] aria-[current=page]:text-[var(--color-mint-dark)]"
                >
                  {t(key)}
                </Link>
              ))}
            </nav>
            <div className="mt-2 flex items-center justify-between gap-3 border-t border-[var(--color-border-subtle)] px-2 pt-3">
              <nav aria-label={t("social")}>
                <SocialLinks iconOnly />
              </nav>
              <LanguageSwitcher />
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <a
                href={platformLogin(locale)}
                className="rounded-full border border-[var(--color-border)] px-4 py-3 text-center text-[15px] font-medium text-[var(--color-text)] transition-colors hover:bg-[var(--color-bg-alt)]"
              >
                {t("accedi")}
              </a>
              <a
                href={platformRegister(locale)}
                className="rounded-full bg-[var(--color-mint)] px-4 py-3 text-center text-[15px] font-medium text-[#04231a] transition-transform duration-150 active:scale-[0.98]"
              >
                {t("inizia")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
