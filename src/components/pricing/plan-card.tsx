import { Check, Minus } from "@phosphor-icons/react/dist/ssr";
import { useTranslations } from "next-intl";
import { RevealItem } from "@/components/reveal";
import { SITE, platformRegister, type PricingTierMeta } from "@/lib/site-config";

export type PricingCopy = {
  id: string;
  name: string;
  description: string;
  quotesLimit: string;
  features: string[];
  cta: string;
};

const fmt = (locale: string, value: number) =>
  new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
  }).format(value);

/**
 * Scheda di un piano. Prezzi, famiglia e flag vengono da PRICING_TIERS_META
 * (specchio di billingPlans.ts / entitlements.ts della piattaforma); i testi da
 * messages/*.json. Ogni piano self-serve porta alla registrazione diretta sulla
 * piattaforma, dove si sceglie il piano e si paga con Stripe.
 */
export function PlanCard({ meta, copy, locale }: { meta: PricingTierMeta; copy: PricingCopy; locale: string }) {
  const t = useTranslations("prezzi");
  const enterprise = meta.id === "enterprise";
  return (
    <RevealItem
      className={
        meta.highlighted
          ? "flex flex-col rounded-3xl border-2 border-[var(--color-mint)] bg-[var(--color-bg)] p-8"
          : "flex flex-col rounded-3xl border border-[var(--color-border-subtle)] bg-[var(--color-bg)] p-8"
      }
    >
      {meta.highlighted ? (
        <span className="inline-block w-fit rounded-full bg-[var(--color-mint-light)] px-3 py-1 text-[11px] font-semibold text-[var(--color-mint-dark)]">
          {t("piuScelto")}
        </span>
      ) : (
        <span className="h-[22px]" />
      )}
      <h3 className="mt-3 text-[19px] font-semibold text-[var(--color-text)]">{copy.name}</h3>
      <p className="mt-1 flex items-baseline gap-1">
        <span className="text-4xl font-semibold tracking-tight text-[var(--color-text)]">
          {fmt(locale, meta.monthly ?? 0)}
        </span>
        <span className="text-[13px] text-[var(--color-text-secondary)]">
          {t("priceNote")} {t("taxNote")}
        </span>
      </p>
      {meta.annual !== null ? (
        <p className="mt-2 text-[12px] font-medium text-[var(--color-mint-dark)]">
          {t("annualNote", { price: fmt(locale, meta.annual) })}
        </p>
      ) : enterprise ? (
        <p className="mt-2 text-[12px] text-[var(--color-text-secondary)]">{t("enterpriseNote")}</p>
      ) : (
        <p className="mt-2 text-[12px] text-[var(--color-text-secondary)]">{t("monthlyOnly")}</p>
      )}
      {meta.trial && (
        <p className="mt-2 w-fit rounded-full bg-[var(--color-mint-light)] px-2.5 py-0.5 text-[11px] font-semibold text-[var(--color-mint-dark)]">
          {t("trialBadge")}
        </p>
      )}
      <p className="mt-3 text-[13px] leading-relaxed text-[var(--color-text-secondary)]">{copy.description}</p>

      <div className="mt-6 rounded-xl bg-[var(--color-bg-alt)] px-4 py-3">
        <p className="text-[13px] font-medium text-[var(--color-text)]">{copy.quotesLimit}</p>
        <p className="mt-1 flex items-center gap-1.5 text-[12px] text-[var(--color-text-secondary)]">
          {meta.whitelabel ? <Check size={14} className="text-[var(--color-mint-dark)]" /> : <Minus size={14} />}
          {meta.whitelabel ? t("whitelabelYes") : t("whitelabelNo")}
        </p>
      </div>

      <ul className="mt-6 flex-1 space-y-3">
        {copy.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-[13px] text-[var(--color-text)]">
            <Check size={16} className="mt-0.5 shrink-0 text-[var(--color-mint-dark)]" />
            {f}
          </li>
        ))}
      </ul>

      <a
        // Self-serve (Level, Base, Pro, Agency): registrazione diretta sulla piattaforma, poi
        // scelta del piano e pagamento Stripe. Enterprise e' commerciale (selfServeCheckout: false).
        href={enterprise ? `mailto:${SITE.salesEmail}` : platformRegister(locale)}
        className={
          meta.highlighted
            ? "mt-8 inline-flex cursor-pointer items-center justify-center rounded-full bg-[var(--color-mint)] px-5 py-3 text-[14px] font-medium text-[#04231a] transition-transform duration-200 ease-out hover:scale-[1.02] active:scale-[0.98]"
            : "mt-8 inline-flex cursor-pointer items-center justify-center rounded-full border border-[var(--color-border)] px-5 py-3 text-[14px] font-medium text-[var(--color-text)] transition-colors hover:bg-[var(--color-bg-alt)]"
        }
      >
        {copy.cta}
      </a>
    </RevealItem>
  );
}
