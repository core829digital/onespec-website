"use client";

import Link from "next/link";
import { useState } from "react";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { Logo } from "@/components/logo";
import { Countdown } from "@/components/countdown";
import { NAV_LINKS } from "@/lib/site-config";
import pillStyles from "@/components/showcase/pill-nav.module.css";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-transparent backdrop-blur-md">
      <div className="container-onespec flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className={`hidden md:flex ${pillStyles.menu}`}>
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={pillStyles.link}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Countdown compact />
          <Link
            href="/prezzi"
            className="cursor-pointer rounded-full bg-[var(--color-mint)] px-4 py-2 text-[13px] font-medium text-[#04231a] transition-transform duration-200 ease-out hover:scale-[1.03] active:scale-[0.98]"
          >
            Richiedi accesso
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-[var(--color-text)] md:hidden"
        >
          {open ? <X size={22} /> : <List size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[var(--color-border-subtle)] bg-[var(--color-bg)] md:hidden">
          <div className="container-onespec flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-[var(--color-text)] hover:bg-[var(--color-bg-alt)]"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 px-3">
              <Countdown />
            </div>
            <Link
              href="/prezzi"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-[var(--color-mint)] px-4 py-3 text-center text-[15px] font-medium text-[#04231a]"
            >
              Richiedi accesso
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
