import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { COMPANY, FOUNDERS, SITE_URL } from "@/lib/site-config";
import type { AppLocale } from "@/i18n/routing";

/** The legal representative, from the same founder list used by the footer and the About page. */
const ADMIN = FOUNDERS.find((f) => f.id === "stefan")!;

export async function generateMetadata({ params }: { params: Promise<{ locale: AppLocale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "imprint" });
  return { title: `${t("title")} — onespec`, description: t("metaDescription") };
}

export default async function ImprintPage({ params }: { params: Promise<{ locale: AppLocale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ImprintContent />;
}

/**
 * Legal notice (Impressum / mentions légales / colofon): who runs the site, how to reach them and the company's registry data. Only
 * verified facts from COMPANY and FOUNDERS; nothing here is typed twice.
 */
function ImprintContent() {
  const t = useTranslations("imprint");
  const rows: { label: string; value: React.ReactNode }[] = [
    { label: t("rows.operator"), value: COMPANY.legalName },
    { label: t("rows.address"), value: COMPANY.address },
    { label: t("rows.vat"), value: COMPANY.vatId },
    { label: t("rows.register"), value: COMPANY.tradeRegister },
    { label: t("rows.admin"), value: ADMIN.name },
    {
      label: t("rows.email"),
      value: (
        <>
          <a href={`mailto:${COMPANY.emails.office}`} className="text-[var(--color-mint)] hover:underline">{COMPANY.emails.office}</a>
          {" · "}
          <a href={`mailto:${COMPANY.emails.support}`} className="text-[var(--color-mint)] hover:underline">{COMPANY.emails.support}</a>
        </>
      ),
    },
    {
      label: t("rows.phone"),
      value: ADMIN.phones.map((p, i) => (
        <span key={p.tel}>
          {i > 0 ? " · " : null}
          <a href={`tel:${p.tel}`} className="text-[var(--color-mint)] hover:underline">{p.display}</a>
        </span>
      )),
    },
    { label: t("rows.website"), value: SITE_URL.replace("https://", "") },
  ];

  return (
    <section className="pt-20 pb-24 sm:pt-28">
      <div className="container-onespec">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-[var(--color-text)] sm:text-5xl">{t("title")}</h1>
          <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-text-secondary)]">{t("intro")}</p>

          <dl className="mt-10 divide-y divide-[var(--color-border-subtle)] overflow-hidden rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-alt)]">
            {rows.map((r) => (
              <div key={r.label} className="grid gap-1 px-5 py-4 sm:grid-cols-[200px_minmax(0,1fr)] sm:gap-6">
                <dt className="text-[13px] font-medium text-[var(--color-text-secondary)]">{r.label}</dt>
                <dd className="break-words text-[14px] text-[var(--color-text)]">{r.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 space-y-6 text-[14px] leading-relaxed text-[var(--color-text-secondary)]">
            <div>
              <h2 className="text-[16px] font-semibold text-[var(--color-text)]">{t("contentTitle")}</h2>
              <p className="mt-2">{t("contentBody", { name: ADMIN.name })}</p>
            </div>
            <div>
              <h2 className="text-[16px] font-semibold text-[var(--color-text)]">{t("hostingTitle")}</h2>
              <p className="mt-2">{t("hostingBody")}</p>
            </div>
            <div>
              <h2 className="text-[16px] font-semibold text-[var(--color-text)]">{t("rightsTitle")}</h2>
              <p className="mt-2">{t("rightsBody")}</p>
            </div>
            <p>
              {t("moreBefore")}{" "}
              <Link href="/legale" className="text-[var(--color-mint)] hover:underline">{t("moreLink")}</Link>
              {t("moreAfter")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
