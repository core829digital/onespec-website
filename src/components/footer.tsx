import Link from "next/link";
import { Logo } from "@/components/logo";
import { BrandCube } from "@/components/showcase/brand-cube";
import { FOOTER_LINKS, SITE } from "@/lib/site-config";

const COLUMNS: { title: string; key: keyof typeof FOOTER_LINKS }[] = [
  { title: "Prodotto", key: "prodotto" },
  { title: "Azienda", key: "azienda" },
  { title: "Legale", key: "legale" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-alt)]">
      <div className="container-onespec py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-3 max-w-[220px] text-[13px] leading-relaxed text-[var(--color-text-secondary)]">
              {SITE.tagline}
            </p>
            <div className="mt-6">
              <BrandCube />
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.key}>
              <h3 className="text-[12px] font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {FOOTER_LINKS[col.key].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-[var(--color-text)] transition-colors hover:text-[var(--color-mint-dark)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col-reverse items-start justify-between gap-4 border-t border-[var(--color-border-subtle)] pt-6 sm:flex-row sm:items-center">
          <p className="text-[12px] text-[var(--color-text-secondary)]">
            &copy; {new Date().getFullYear()} onespec. Tutti i diritti riservati.
          </p>
          <p className="text-[12px] text-[var(--color-text-secondary)]">
            Prodotto in fase Alpha &middot;{" "}
            <a href={`mailto:${SITE.email}`} className="hover:text-[var(--color-mint-dark)]">
              {SITE.email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
