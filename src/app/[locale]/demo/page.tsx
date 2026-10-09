import { useLocale, useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { PlatformDemo } from "@/components/showcase/platform-demo";
import { platformRegister } from "@/lib/site-config";
import type { AppLocale } from "@/i18n/routing";

export async function generateMetadata({ params }: { params: Promise<{ locale: AppLocale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "platformDemo" });
  return { title: `${t("metaTitle")} — onespec`, description: t("metaDescription") };
}

export default async function DemoPage({ params }: { params: Promise<{ locale: AppLocale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <DemoContent />;
}

function DemoContent() {
  const t = useTranslations("platformDemo");
  const locale = useLocale();
  return (
    <>
      <section className="pt-20 pb-10 sm:pt-28">
        <div className="container-onespec text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-mint-light)] px-3.5 py-1.5 text-[12px] font-semibold text-[var(--color-mint-dark)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-mint-dark)]" />
              {t("badge")}
            </span>
            <h1 className="mx-auto mt-5 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-[var(--color-text)] sm:text-5xl">{t("title")}</h1>
            <p className="mx-auto mt-5 max-w-2xl text-balance text-lg leading-relaxed text-[var(--color-text-secondary)]">{t("subtitle")}</p>
          </Reveal>
        </div>
      </section>
      <section className="pb-16">
        <div className="container-onespec">
          <PlatformDemo />
        </div>
      </section>
      <section className="pb-24">
        <div className="container-onespec text-center">
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-[var(--color-text)] sm:text-3xl">{t("ctaTitle")}</h2>
          <a
            href={platformRegister(locale)}
            className="group mt-6 inline-flex cursor-pointer items-center gap-2 rounded-full bg-[var(--color-mint)] px-6 py-3.5 text-[15px] font-medium text-[#04231a] transition-transform duration-200 ease-out hover:scale-[1.02] active:scale-[0.98]"
          >
            {t("cta")}
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </div>
      </section>
    </>
  );
}
