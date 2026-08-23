import Link from "next/link";
import {
  Code,
  Palette,
  Lightning,
  ShieldCheck,
  ChartLineUp,
  FileArrowUp,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { ChartCard } from "@/components/showcase/chart-card";
import { HeroGemini } from "@/components/showcase/hero-gemini";
import { PRICING_TIERS } from "@/lib/site-config";

const FEATURES = [
  {
    icon: Code,
    title: "Un iFrame, e sei live",
    description:
      "Incolli un codice sul tuo sito e il configuratore appare, gia funzionante. Nessuno sviluppo, nessuna manutenzione tecnica.",
  },
  {
    icon: Palette,
    title: "Brandizzabile al 100%",
    description:
      "Colori, font e logo del tuo configuratore si allineano al tuo brand. Il cliente non sa nemmeno che esiste onespec.",
  },
  {
    icon: FileArrowUp,
    title: "Listino da file, sempre aggiornato",
    description:
      "Carichi il tuo listino prezzi, il configuratore lo decodifica. Aggiorni il file, il widget si aggiorna ovunque sia installato.",
  },
  {
    icon: ShieldCheck,
    title: "Filtra chi non e cliente vero",
    description:
      "Basta perdere tempo con chi vuole solo confrontare il prezzo per fare dumping. Il configuratore qualifica la richiesta prima che arrivi a te.",
  },
  {
    icon: ChartLineUp,
    title: "Prezzi vicini alla realta",
    description:
      "Regole di prezzo configurabili per materiali, misure e finiture: il preventivo che il cliente vede e quasi quello finale.",
  },
  {
    icon: Lightning,
    title: "Aggiornamenti instantanei",
    description:
      "Modifichi il configuratore dalla piattaforma onespec: le modifiche sono live su tutti i siti dove e installato, subito.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Carichi il tuo listino",
    description: "Un file con prodotti, misure, materiali e prezzi. onespec lo legge e lo trasforma in un configuratore.",
  },
  {
    n: "02",
    title: "Personalizzi il widget",
    description: "Colori, logo, testi e regole di prezzo dalla piattaforma. Nessuna riga di codice.",
  },
  {
    n: "03",
    title: "Incolli il codice iFrame",
    description: "Il configuratore appare sul tuo sito, adattivo su desktop e mobile, pronto a raccogliere richieste.",
  },
  {
    n: "04",
    title: "Ricevi preventivi qualificati",
    description: "Ogni richiesta arriva gia con misure, materiali e budget indicativo del cliente.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroGemini />

      {/* Product preview */}
      <section className="relative overflow-hidden bg-[var(--color-bg)] pt-16 pb-24">
        <Reveal className="container-onespec">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-alt)] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.15)]">
            <div className="flex items-center gap-1.5 border-b border-[var(--color-border-subtle)] bg-[var(--color-bg)] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-[11px] text-[var(--color-text-secondary)]">
                tuosito-infissi.it
              </span>
            </div>
            <div className="flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-[var(--color-mint-light)] via-[var(--color-bg-alt)] to-[var(--color-bg-alt)]">
              <div className="flex flex-col items-center gap-2 text-center">
                <span className="rounded-full bg-white px-4 py-1.5 text-[12px] font-medium text-[var(--color-mint-dark)] shadow-sm">
                  Anteprima configuratore
                </span>
                <p className="max-w-xs text-[13px] text-[var(--color-text-secondary)]">
                  Il widget onespec si carica qui, dentro il sito del tuo cliente.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Value prop */}
      <section className="border-y border-[var(--color-border-subtle)] bg-[var(--color-bg-alt)] py-20">
        <div className="container-onespec">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
              Ogni giorno perdi tempo con richieste che non portano a niente
            </h2>
            <p className="mt-5 text-balance text-lg leading-relaxed text-[var(--color-text-secondary)]">
              Telefonate per curiosita, sopralluoghi inutili, concorrenti travestiti da clienti
              che vogliono solo il tuo prezzo per fare dumping. onespec mette un configuratore
              tra te e queste richieste: chi arriva a te ha gia capito prodotto e budget.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="container-onespec">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
              Tutto quello che serve, niente di superfluo
            </h2>
          </Reveal>

          <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <RevealItem
                key={f.title}
                className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg)] p-7 transition-colors hover:border-[var(--color-border)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-mint-light)] text-[var(--color-mint-dark)]">
                  <f.icon size={22} weight="bold" />
                </div>
                <h3 className="mt-5 text-[17px] font-semibold text-[var(--color-text)]">
                  {f.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[var(--color-text-secondary)]">
                  {f.description}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Live stats */}
      <section className="py-24">
        <div className="container-onespec grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
              I preventivi arrivano, tu li vedi in tempo reale
            </h2>
            <p className="mt-5 max-w-md text-balance text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
              Ogni richiesta generata dal configuratore finisce subito nella dashboard: quante
              richieste arrivano, in che periodo, e come cresce settimana dopo settimana.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="flex justify-center lg:justify-end">
            <ChartCard />
          </Reveal>
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-[var(--color-border-subtle)] bg-[var(--color-bg-alt)] py-24">
        <div className="container-onespec">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
              Da listino a preventivo live in quattro passaggi
            </h2>
          </Reveal>

          <RevealGroup className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <RevealItem key={s.n}>
                <span className="text-[13px] font-mono font-semibold text-[var(--color-mint-dark)]">
                  {s.n}
                </span>
                <h3 className="mt-3 text-[16px] font-semibold text-[var(--color-text)]">
                  {s.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[var(--color-text-secondary)]">
                  {s.description}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Pricing preview */}
      <section className="py-24">
        <div className="container-onespec">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
              Paghi in base a quanto il configuratore lavora per te
            </h2>
            <p className="mt-4 text-[15px] text-[var(--color-text-secondary)]">
              Tre piani, in base a richieste preventivo mensili e brandizzazione.
            </p>
          </Reveal>

          <RevealGroup className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {PRICING_TIERS.map((tier) => (
              <RevealItem
                key={tier.id}
                className={
                  tier.highlighted
                    ? "rounded-3xl border-2 border-[var(--color-mint)] bg-[var(--color-bg)] p-8"
                    : "rounded-3xl border border-[var(--color-border-subtle)] bg-[var(--color-bg)] p-8"
                }
              >
                {tier.highlighted && (
                  <span className="inline-block rounded-full bg-[var(--color-mint-light)] px-3 py-1 text-[11px] font-semibold text-[var(--color-mint-dark)]">
                    Piu scelto
                  </span>
                )}
                <h3 className="mt-3 text-[18px] font-semibold text-[var(--color-text)]">
                  {tier.name}
                </h3>
                <p className="mt-1 flex items-baseline gap-1">
                  <span className="text-3xl font-semibold tracking-tight text-[var(--color-text)]">
                    {tier.price}
                  </span>
                  <span className="text-[13px] text-[var(--color-text-secondary)]">
                    {tier.priceNote}
                  </span>
                </p>
                <p className="mt-3 text-[13px] leading-relaxed text-[var(--color-text-secondary)]">
                  {tier.description}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal className="mt-10 text-center">
            <Link
              href="/prezzi"
              className="inline-flex cursor-pointer items-center gap-2 text-[15px] font-medium text-[var(--color-mint-dark)] hover:underline"
            >
              Confronta tutti i piani in dettaglio
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[var(--color-bg-inverse)] py-24">
        <div className="container-onespec text-center">
          <Reveal>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Sii tra i primi a portare onespec sul tuo sito
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[15px] text-white/60">
              Fase Alpha, posti limitati. Chi entra ora aiuta a definire il prodotto e blocca il prezzo di lancio.
            </p>
            <Link
              href="/prezzi"
              className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full bg-[var(--color-mint)] px-6 py-3.5 text-[15px] font-medium text-[#04231a] transition-transform duration-200 ease-out hover:scale-[1.02] active:scale-[0.98]"
            >
              Richiedi accesso Alpha
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
