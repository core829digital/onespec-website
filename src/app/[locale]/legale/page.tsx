import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/reveal";
import { LEGAL_DOCS } from "@/content/legal";
import { platformUrl } from "@/lib/site-config";
import type { AppLocale } from "@/i18n/routing";

export async function generateMetadata({ params }: { params: Promise<{ locale: AppLocale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });
  return { title: `${t("indexTitle")} — onespec`, description: t("indexIntro") };
}

export default async function LegalIndexPage({ params }: { params: Promise<{ locale: AppLocale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "legal" });
  return (
    <section className="pt-20 pb-24 sm:pt-28">
      <div className="container-onespec">
        <Reveal className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
            {t("indexTitle")}
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-text-secondary)]">{t("indexIntro")}</p>
          {locale !== "it" && (
            <p className="mt-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-alt)] px-4 py-3 text-[13px] text-[var(--color-text-secondary)]">
              {t("notice")}
            </p>
          )}
          <ul className="mt-8 divide-y divide-[var(--color-border-subtle)] border-y border-[var(--color-border-subtle)]">
            {LEGAL_DOCS.map((d) => (
              <li key={d.slug}>
                <Link href={`/legale/${d.slug}`} className="-mx-2 block rounded px-2 py-4 hover:bg-[var(--color-bg-alt)]">
                  <span className="font-medium text-[var(--color-text)]">{d.title}</span>
                  <span className="mt-0.5 block text-[13px] text-[var(--color-text-secondary)]">{d.summary}</span>
                </Link>
              </li>
            ))}
            <li>
              <a
                href={platformUrl("/legal/dpa", locale)}
                className="-mx-2 block rounded px-2 py-4 hover:bg-[var(--color-bg-alt)]"
              >
                <span className="font-medium text-[var(--color-text)]">{t("dpaTitle")}</span>
                <span className="mt-0.5 block text-[13px] text-[var(--color-text-secondary)]">{t("dpaBody")}</span>
              </a>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
