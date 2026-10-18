"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { useTranslations } from "next-intl";
import { Analytics } from "@vercel/analytics/next";
import { Link } from "@/i18n/navigation";
import { onConsentChange, onOpenCookiePreferences, openCookiePreferences, readConsent, saveConsent } from "@/lib/consent";

const subscribe = (cb: () => void) => onConsentChange(cb);
// Server render and the first client render agree on "not decided yet, banner hidden": the banner appears right after hydration.
const serverSnapshot = () => undefined;

/**
 * Cookie and privacy banner shown on the first visit. Accept and Reject look exactly the same (no pre-ticked boxes, no dark patterns);
 * "Customise" lists each category. Optional tools run only after consent, and the choice can be changed at any time from the footer.
 */
export function CookieBanner() {
  const t = useTranslations("cookieBanner");
  const consent = useSyncExternalStore(subscribe, readConsent, serverSnapshot);
  const [reopened, setReopened] = useState(false);
  const [custom, setCustom] = useState(false);
  const [statistics, setStatistics] = useState(false);

  useEffect(
    () =>
      onOpenCookiePreferences(() => {
        setStatistics(readConsent()?.statistics ?? false);
        setCustom(true);
        setReopened(true);
      }),
    [],
  );

  const decide = (stats: boolean) => {
    saveConsent(stats);
    setReopened(false);
    setCustom(false);
  };

  const open = consent === null || reopened;
  const btn = "inline-flex min-h-11 items-center justify-center rounded-full px-5 text-[14px] font-medium transition-colors";
  const secondary = `${btn} border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-text-secondary)]`;
  const primary = `${btn} bg-[var(--color-mint)] text-[#04231a] hover:brightness-95`;

  return (
    <>
      {consent?.statistics ? <Analytics /> : null}
      {open ? (
        <div
          role="dialog"
          aria-modal="false"
          aria-labelledby="cookie-banner-title"
          className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-3xl rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-alt)]/95 p-5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:p-6"
        >
          <h2 id="cookie-banner-title" className="text-[15px] font-semibold text-[var(--color-text)]">
            {t("title")}
          </h2>
          <p className="mt-2 text-[13px] leading-relaxed text-[var(--color-text-secondary)]">
            {t("body")}{" "}
            <Link href="/legale/cookie" className="text-[var(--color-mint)] underline-offset-2 hover:underline">
              {t("cookiePolicy")}
            </Link>{" "}
            ·{" "}
            <Link href="/legale/privacy" className="text-[var(--color-mint)] underline-offset-2 hover:underline">
              {t("privacyPolicy")}
            </Link>
          </p>

          {custom ? (
            <ul className="mt-4 space-y-3">
              <li className="flex items-start justify-between gap-4 rounded-xl border border-[var(--color-border-subtle)] p-3.5">
                <div>
                  <p className="text-[13px] font-medium text-[var(--color-text)]">{t("necessaryTitle")}</p>
                  <p className="mt-0.5 text-[12px] leading-relaxed text-[var(--color-text-secondary)]">{t("necessaryBody")}</p>
                </div>
                <span className="shrink-0 pt-0.5 text-[12px] font-medium text-[var(--color-text-secondary)]">{t("alwaysOn")}</span>
              </li>
              <li className="flex items-start justify-between gap-4 rounded-xl border border-[var(--color-border-subtle)] p-3.5">
                <label htmlFor="cookie-statistics" className="cursor-pointer">
                  <span className="block text-[13px] font-medium text-[var(--color-text)]">{t("statisticsTitle")}</span>
                  <span className="mt-0.5 block text-[12px] leading-relaxed text-[var(--color-text-secondary)]">{t("statisticsBody")}</span>
                </label>
                <input
                  id="cookie-statistics"
                  type="checkbox"
                  role="switch"
                  checked={statistics}
                  onChange={(e) => setStatistics(e.target.checked)}
                  className="mt-1 h-5 w-5 shrink-0 cursor-pointer accent-[var(--color-mint)]"
                />
              </li>
            </ul>
          ) : null}

          <div className="mt-5 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            {custom ? (
              <button type="button" onClick={() => decide(statistics)} className={secondary}>
                {t("save")}
              </button>
            ) : (
              <button type="button" onClick={() => setCustom(true)} className={secondary}>
                {t("customise")}
              </button>
            )}
            <button type="button" onClick={() => decide(false)} className={primary}>
              {t("reject")}
            </button>
            <button type="button" onClick={() => decide(true)} className={primary}>
              {t("accept")}
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

/** Footer link that opens the banner again, so the visitor can change the choice at any time. */
export function CookiePreferencesLink({ className }: { className?: string }) {
  const t = useTranslations("cookieBanner");
  return (
    <button type="button" onClick={openCookiePreferences} className={className}>
      {t("preferences")}
    </button>
  );
}
