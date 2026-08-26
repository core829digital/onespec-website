import { useTranslations } from "next-intl";
import { Reveal } from "@/components/reveal";
import { SITE } from "@/lib/site-config";

type Section = {
  heading: string;
  body?: string;
  list?: string[];
};

/** Sostituisce il placeholder {email} nel testo con un mailto: cliccabile. */
function renderWithEmail(body: string) {
  const parts = body.split("{email}");
  if (parts.length === 1) return body;
  return (
    <>
      {parts[0]}
      <a
        href={`mailto:${SITE.email}`}
        className="text-[var(--color-mint-dark)] hover:underline"
      >
        {SITE.email}
      </a>
      {parts[1]}
    </>
  );
}

export function LegalPage({ namespace }: { namespace: "privacy" | "termini" | "cookie" }) {
  const t = useTranslations(`legal.${namespace}`);
  const tLegal = useTranslations("legal");
  const sections = t.raw("sections") as Section[];

  return (
    <section className="pt-20 pb-24 sm:pt-28">
      <div className="container-onespec">
        <Reveal className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
            {t("title")}
          </h1>
          <p className="mt-2 text-[13px] text-[var(--color-text-secondary)]">
            {tLegal("updatedLabel", { date: t("updated") })}
          </p>
          <div className="prose-legal mt-10 space-y-6 text-[15px] leading-relaxed text-[var(--color-text)]">
            <p className="text-[var(--color-text-secondary)]">{t("intro")}</p>
            {sections.map((s) => (
              <div key={s.heading}>
                <h2 className="mt-8 text-[18px] font-semibold text-[var(--color-text)]">
                  {s.heading}
                </h2>
                {s.body && (
                  <p className="mt-3 text-[var(--color-text-secondary)]">
                    {renderWithEmail(s.body)}
                  </p>
                )}
                {s.list && (
                  <ul className="mt-3 list-disc space-y-1.5 pl-5">
                    {s.list.map((item) => (
                      <li key={item} className="text-[var(--color-text-secondary)]">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
