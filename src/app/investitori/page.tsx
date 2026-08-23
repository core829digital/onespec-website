import { TrendUp, Target, Users, Handshake } from "@phosphor-icons/react/dist/ssr";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { SITE } from "@/lib/site-config";

export const metadata = {
  title: "Investitori — onespec",
  description: "Perche onespec e un'opportunita: mercato, modello di business e come entrare in contatto.",
};

const POINTS = [
  {
    icon: Target,
    title: "Mercato di nicchia, poco servito",
    description:
      "Il settore infissi in Italia e frammentato tra migliaia di produttori e rivenditori, quasi tutti senza uno strumento digitale di configurazione e preventivo. onespec arriva prima della concorrenza diretta.",
  },
  {
    icon: TrendUp,
    title: "Modello ricorrente, scalabile",
    description:
      "Ricavi in abbonamento mensile legati all'uso reale del prodotto (richieste preventivo). Il costo di acquisizione si ammortizza rapidamente grazie a un problema che i clienti sentono ogni giorno.",
  },
  {
    icon: Users,
    title: "Nato da una richiesta reale",
    description:
      "onespec non nasce da un'idea in astratto: nasce da clienti che chiedevano esattamente questo, dopo aver perso tempo e margine con richieste non qualificate e concorrenza sleale sui prezzi.",
  },
  {
    icon: Handshake,
    title: "Espandibile oltre gli infissi",
    description:
      "L'architettura del configuratore (listino da file, regole di prezzo, widget brandizzabile) e replicabile in altri settori con logiche di preventivo simili: serramenti, arredo su misura, edilizia leggera.",
  },
];

export default function InvestitoriPage() {
  return (
    <>
      <section className="pt-20 pb-16 sm:pt-28">
        <div className="container-onespec text-center">
          <Reveal>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-alt)] px-3 py-1 text-[12px] font-medium text-[var(--color-text-secondary)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-mint)]" />
              Fase Alpha &middot; raccolta iniziale
            </span>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-[var(--color-text)] sm:text-5xl">
              Costruiamo lo strumento che mancava a un intero settore
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-balance text-lg leading-relaxed text-[var(--color-text-secondary)]">
              onespec sta cercando chi crede in un prodotto SaaS verticale, con un mercato
              reale e ancora poco digitalizzato. Se vuoi saperne di piu sul progetto e su come
              partecipare, scrivici.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-onespec">
          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {POINTS.map((p) => (
              <RevealItem
                key={p.title}
                className="rounded-3xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-alt)] p-8"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[var(--color-mint-dark)]">
                  <p.icon size={22} weight="bold" />
                </div>
                <h2 className="mt-5 text-[18px] font-semibold text-[var(--color-text)]">
                  {p.title}
                </h2>
                <p className="mt-3 text-[14px] leading-relaxed text-[var(--color-text-secondary)]">
                  {p.description}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-inverse)] py-20">
        <div className="container-onespec text-center">
          <Reveal>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Vuoi parlare del progetto?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[15px] text-white/60">
              Rispondiamo direttamente via email per condividere numeri, roadmap e come
              strutturare una partecipazione al progetto.
            </p>
            <a
              href={`mailto:${SITE.email}?subject=Investitori onespec`}
              className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full bg-[var(--color-mint)] px-6 py-3.5 text-[15px] font-medium text-[#04231a] transition-transform duration-200 ease-out hover:scale-[1.02] active:scale-[0.98]"
            >
              Scrivi a {SITE.email}
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
