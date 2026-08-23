import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { CHANGELOG, type ChangelogEntry } from "@/lib/site-config";

export const metadata = {
  title: "Versioni — onespec",
  description: "Changelog di onespec: cosa e cambiato nel configuratore, versione per versione.",
};

const TAG_STYLES: Record<ChangelogEntry["tag"], string> = {
  Nuovo: "bg-[var(--color-mint-light)] text-[var(--color-mint-dark)]",
  Miglioramento: "bg-[#eaf1ff] text-[#2952cc]",
  Fix: "bg-[#fdeeee] text-[#b23a3a]",
};

export default function VersioniPage() {
  return (
    <>
      <section className="pt-20 pb-12 sm:pt-28">
        <div className="container-onespec text-center">
          <Reveal>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-[var(--color-text)] sm:text-5xl">
              Versioni e changelog
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-balance text-lg leading-relaxed text-[var(--color-text-secondary)]">
              onespec e in sviluppo attivo. Qui trovi cosa cambia versione dopo versione,
              prima ancora del lancio pubblico.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-onespec">
          <RevealGroup className="mx-auto max-w-2xl divide-y divide-[var(--color-border-subtle)]">
            {CHANGELOG.map((entry) => (
              <RevealItem key={entry.version} className="py-8 first:pt-0">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-[13px] font-semibold text-[var(--color-text)]">
                    v{entry.version}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${TAG_STYLES[entry.tag]}`}
                  >
                    {entry.tag}
                  </span>
                  <time className="text-[12px] text-[var(--color-text-secondary)]">
                    {new Date(entry.date).toLocaleDateString("it-IT", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                </div>
                <h2 className="mt-3 text-[18px] font-semibold text-[var(--color-text)]">
                  {entry.title}
                </h2>
                <ul className="mt-3 space-y-2">
                  {entry.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-[14px] leading-relaxed text-[var(--color-text-secondary)]"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-text-secondary)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
