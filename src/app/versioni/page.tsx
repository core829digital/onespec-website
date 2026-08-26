import { Package, Sparkle } from "@phosphor-icons/react/dist/ssr";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { AlphaBadge } from "@/components/showcase/alpha-badge";
import {
  CHANGELOG,
  type ChangelogChannel,
  type ChangelogEntry,
} from "@/lib/site-config";

export const metadata = {
  title: "Versioni — onespec",
  description:
    "Changelog di onespec: aggiornamenti del prodotto e novita del programma Alpha, versione per versione.",
};

const TAG_STYLES: Record<ChangelogEntry["tag"], string> = {
  Nuovo: "bg-[var(--color-mint-light)] text-[var(--color-mint-dark)]",
  Miglioramento: "bg-[#eaf1ff] text-[#2952cc]",
  Fix: "bg-[#fdeeee] text-[#b23a3a]",
};

function entriesFor(channel: ChangelogChannel) {
  return CHANGELOG.filter((e) => e.channel === channel);
}

function ChangelogList({ channel }: { channel: ChangelogChannel }) {
  const entries = entriesFor(channel);

  if (entries.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-[var(--color-border)] px-6 py-10 text-center text-[14px] text-[var(--color-text-secondary)]">
        Ancora nessuna voce in questo canale. Le novita compaiono qui appena
        vengono rilasciate.
      </p>
    );
  }

  return (
    <RevealGroup className="divide-y divide-[var(--color-border-subtle)]">
      {entries.map((entry) => (
        <RevealItem key={entry.version} className="py-8 first:pt-0">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-[13px] font-semibold text-[var(--color-text)]">
              {channel === "alpha" ? entry.version : `v${entry.version}`}
            </span>
            <span
              className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${TAG_STYLES[entry.tag]}`}
            >
              {entry.tag}
            </span>
            <time
              dateTime={entry.date}
              className="text-[12px] text-[var(--color-text-secondary)]"
            >
              {new Date(entry.date).toLocaleDateString("it-IT", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </div>
          <h3 className="mt-3 text-[18px] font-semibold text-[var(--color-text)]">
            {entry.title}
          </h3>
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
  );
}

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
              onespec e in sviluppo attivo. Gli aggiornamenti sono divisi in due
              canali: quelli del prodotto e quelli riservati al programma Alpha.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Canale 1 — prodotto */}
      <section className="pb-20">
        <div className="container-onespec">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div className="flex items-start gap-4 border-b border-[var(--color-border)] pb-6">
                <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-mint-light)] text-[var(--color-mint-dark)]">
                  <Package size={21} weight="bold" />
                </span>
                <div>
                  <h2 className="text-[22px] font-semibold tracking-tight text-[var(--color-text)]">
                    Aggiornamenti prodotto
                  </h2>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-[var(--color-text-secondary)]">
                    Cosa cambia nel configuratore e nella piattaforma per chi li usa
                    gia. Disponibile a tutti i clienti attivi.
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="mt-8">
              <ChangelogList channel="prodotto" />
            </div>
          </div>
        </div>
      </section>

      {/* Canale 2 — programma Alpha */}
      <section className="border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-alt)] py-20">
        <div className="container-onespec">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div className="flex items-start gap-4 border-b border-[var(--color-border)] pb-6">
                <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-mint-light)] text-[var(--color-mint-dark)]">
                  <Sparkle size={21} weight="bold" />
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-[22px] font-semibold tracking-tight text-[var(--color-text)]">
                      Aggiornamenti accesso Alpha
                    </h2>
                    <AlphaBadge />
                  </div>
                  <p className="mt-2 text-[14px] leading-relaxed text-[var(--color-text-secondary)]">
                    La vita del programma Alpha: posti, build in anteprima e
                    vantaggi riservati a chi e entrato tra i primi.
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="mt-8">
              <ChangelogList channel="alpha" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
