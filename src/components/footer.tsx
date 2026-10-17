import { useLocale, useTranslations } from "next-intl";
import { EnvelopeSimple, Phone, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { Link } from "@/i18n/navigation";
import { Logo } from "@/components/logo";
import { BrandCube } from "@/components/showcase/brand-cube";
import { SocialLinks } from "@/components/social-links";
import { COMPANY, FOUNDERS, platformLogin, platformRegister, platformSupport } from "@/lib/site-config";
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

const linkClass = "text-[13px] text-[var(--color-text)] transition-colors hover:text-[var(--color-mint-dark)]";
const headClass = "text-[12px] font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]";

export function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const emails = [
    { key: "support", address: COMPANY.emails.support },
    { key: "office", address: COMPANY.emails.office },
    { key: "sales", address: COMPANY.emails.sales },
  ] as const;

  return (
    <footer className="border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-alt)]">
      <div className="container-onespec py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Logo className="h-8 w-auto" />
            <p className="mt-3 max-w-[260px] text-[13px] leading-relaxed text-[var(--color-text-secondary)]">
              {t("tagline")}
            </p>
            <p className={`mt-6 ${headClass}`}>{t("social")}</p>
            <SocialLinks className="mt-3" showHandle />
            <div className="mt-6">
              <BrandCube />
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.titleKey}>
              <h3 className={headClass}>{t(col.titleKey)}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.keys.map((key) => {
                  const raw = (col.hrefs as Record<string, string>)[key];
                  // "login" / "register" / "support" non sono percorsi del sito: portano alla piattaforma.
                  const href = raw === "login" ? platformLogin(locale) : raw === "register" ? platformRegister(locale) : raw === "support" ? platformSupport(locale) : raw;
                  // mailto:/http(s) sono link esterni al routing i18n: usare
                  // il Link di next-intl li romperebbe (proverebbe a
                  // prefissare lo scheme con la lingua).
                  return (
                    <li key={key}>
                      {href.startsWith("mailto:") || href.startsWith("http") ? (
                        <a href={href} className={linkClass}>
                          {t(key)}
                        </a>
                      ) : (
                        <Link href={href} className={linkClass}>
                          {t(key)}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <h3 className={headClass}>{t("colContatti")}</h3>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {FOUNDERS.map((f) => (
                <li key={f.id}>
                  <p className="text-[13px] font-semibold text-[var(--color-text)]">{f.name}</p>
                  <p className="text-[12px] text-[var(--color-text-secondary)]">{t(f.role)}</p>
                  <ul className="mt-1.5 space-y-1">
                    {f.phones.map((p) => (
                      <li key={p.tel}>
                        <a href={`tel:${p.tel}`} className={`${linkClass} inline-flex items-center gap-1.5 whitespace-nowrap`}>
                          <Phone size={14} aria-hidden="true" />
                          {p.display}
                        </a>
                      </li>
                    ))}
                    {f.whatsapp ? (
                      <li>
                        <a
                          href={`https://wa.me/${f.whatsapp}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${linkClass} inline-flex items-center gap-1.5 whitespace-nowrap`}
                        >
                          <WhatsappLogo size={14} aria-hidden="true" />
                          {t("whatsapp")}
                        </a>
                      </li>
                    ) : null}
                  </ul>
                </li>
              ))}
              {emails.map((e) => (
                <li key={e.key}>
                  <p className="text-[12px] text-[var(--color-text-secondary)]">{t(e.key)}</p>
                  <a href={`mailto:${e.address}`} className={`${linkClass} inline-flex items-center gap-1.5 break-all`}>
                    <EnvelopeSimple size={14} aria-hidden="true" className="shrink-0" />
                    {e.address}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-[var(--color-border-subtle)] pt-6">
          <p className="text-[12px] leading-relaxed text-[var(--color-text-secondary)]">
            <span className="font-semibold text-[var(--color-text)]">{t("productOf")}</span>{" "}
            {COMPANY.legalName} · {COMPANY.address} · {t("vat")} {COMPANY.vatId} · {t("register")} {COMPANY.tradeRegister}
          </p>
          <p className="mt-2 text-[12px] text-[var(--color-text-secondary)]">
            {t("copyright", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
}
