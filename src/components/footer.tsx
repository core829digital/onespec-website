import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Logo } from "@/components/logo";
import { BrandCube } from "@/components/showcase/brand-cube";
import { SITE } from "@/lib/site-config";
import {
  FOOTER_PRODOTTO_KEYS,
  FOOTER_PRODOTTO_HREFS,
  FOOTER_AZIENDA_KEYS,
  FOOTER_AZIENDA_HREFS,
  FOOTER_LEGALE_KEYS,
  FOOTER_LEGALE_HREFS,
} from "@/lib/site-config";

const COLUMNS = [
  { titleKey: "colProdotto", keys: FOOTER_PRODOTTO_KEYS, hrefs: FOOTER_PRODOTTO_HREFS },
  { titleKey: "colAzienda", keys: FOOTER_AZIENDA_KEYS, hrefs: FOOTER_AZIENDA_HREFS },
  { titleKey: "colLegale", keys: FOOTER_LEGALE_KEYS, hrefs: FOOTER_LEGALE_HREFS },
] as const;

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-alt)]">
      <div className="container-onespec py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Logo className="h-8 w-auto" />
            <p className="mt-3 max-w-[220px] text-[13px] leading-relaxed text-[var(--color-text-secondary)]">
              {t("tagline")}
            </p>
            <div className="mt-6">
              <BrandCube />
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.titleKey}>
              <h3 className="text-[12px] font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
                {t(col.titleKey)}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.keys.map((key) => {
                  const href = (col.hrefs as Record<string, string>)[key];
                  const className =
                    "text-[13px] text-[var(--color-text)] transition-colors hover:text-[var(--color-mint-dark)]";
                  // mailto:/http(s) sono link esterni al routing i18n: usare
                  // il Link di next-intl li romperebbe (proverebbe a
                  // prefissare lo scheme con la lingua).
                  return (
                    <li key={key}>
                      {href.startsWith("mailto:") || href.startsWith("http") ? (
                        <a href={href} className={className}>
                          {t(key)}
                        </a>
                      ) : (
                        <Link href={href} className={className}>
                          {t(key)}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col-reverse items-start justify-between gap-4 border-t border-[var(--color-border-subtle)] pt-6 sm:flex-row sm:items-center">
          <p className="text-[12px] text-[var(--color-text-secondary)]">
            {t("copyright", { year: new Date().getFullYear() })}
          </p>
          <p className="text-[12px] text-[var(--color-text-secondary)]">
            {t("faseAlpha")} &middot;{" "}
            <a href={`mailto:${SITE.email}`} className="hover:text-[var(--color-mint-dark)]">
              {SITE.email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
