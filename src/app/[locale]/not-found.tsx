import { useTranslations } from "next-intl";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("notFound");
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-6 py-24">
      <div className="mx-auto max-w-lg text-center">
        <p className="font-mono text-sm font-semibold text-[var(--color-mint-dark)]">404</p>
        <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
          {t("title")}
        </h1>
        <p className="mt-4 text-balance text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
          {t("body")}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[var(--color-mint)] px-6 py-3 text-[15px] font-medium text-[#04231a] transition-transform duration-200 ease-out hover:scale-[1.02] active:scale-[0.98]"
          >
            {t("home")}
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/prezzi"
            className="inline-flex cursor-pointer items-center rounded-full border border-[var(--color-border-subtle)] px-6 py-3 text-[15px] font-medium text-[var(--color-text)] transition-colors hover:bg-[var(--color-bg-alt)]"
          >
            {t("pricing")}
          </Link>
        </div>
      </div>
    </section>
  );
}
