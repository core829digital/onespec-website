import Link from "next/link";
import {
  FileArrowUp,
  Palette,
  Code,
  ChartLineUp,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { ConfiguratorEmbed } from "@/components/showcase/configurator-embed";
import { DashboardMockup } from "@/components/showcase/dashboard-mockup";
import { ColorPicker } from "@/components/showcase/color-picker";
import { EmbedCodeCard } from "@/components/showcase/embed-code-card";
import { PerformanceCard } from "@/components/showcase/performance-card";
import { PhonePreview } from "@/components/showcase/phone-preview";
import { SupportTicket } from "@/components/showcase/support-ticket";

export const metadata = {
  title: "Prodotto — onespec",
  description: "Come funziona il configuratore di infissi onespec, dal listino prezzi al widget installato sul tuo sito.",
};

const BLOCKS = [
  {
    icon: FileArrowUp,
    title: "1. Carichi il listino",
    description:
      "Fornisci i tuoi file di listino: prodotti, misure disponibili, materiali, finiture e prezzi. onespec li decodifica e costruisce automaticamente la logica del configuratore, senza che tu debba reinserire nulla a mano.",
    visual: null,
  },
  {
    icon: Palette,
    title: "2. Brandizzi il widget",
    description:
      "Dalla piattaforma scegli colori, font, logo e testi del configuratore. Il risultato e un widget che sembra costruito su misura per il tuo sito, non un plugin esterno.",
    visual: <ColorPicker />,
  },
  {
    icon: Code,
    title: "3. Incolli il codice iFrame",
    description:
      "Un unico snippet da incollare nella pagina del tuo sito. Il configuratore e responsive di default: pensato per mobile e desktop, non solo adattato.",
    visual: <EmbedCodeCard />,
  },
  {
    icon: ChartLineUp,
    title: "4. Aggiorni sempre dalla piattaforma",
    description:
      "Cambi prezzi, aggiungi prodotti o modifichi regole di sconto dalla dashboard onespec. Le modifiche sono live su ogni sito dove il widget e installato, senza toccare il codice del cliente.",
    visual: null,
  },
];

const SUPPORT_TIERS = [
  {
    plan: "Starter",
    level: "Supporto via email",
    description: "Risposta entro 2 giorni lavorativi su ogni richiesta legata al configuratore.",
    code: "STD-0001",
    color: "#5b6470",
  },
  {
    plan: "Business",
    level: "Supporto prioritario",
    description: "Coda dedicata, risposta entro 24 ore lavorative e assistenza su regole di prezzo.",
    code: "PRI-0001",
    color: "#0fbf8f",
  },
  {
    plan: "Enterprise",
    level: "Account dedicato",
    description: "Referente unico, SLA concordato e onboarding guidato per reti multi-sede.",
    code: "ENT-0001",
    color: "#1d1d1f",
  },
];

export default function ProdottoPage() {
  return (
    <>
      <section className="pt-20 pb-16 sm:pt-28">
        <div className="container-onespec text-center">
          <Reveal>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-[var(--color-text)] sm:text-5xl">
              Un widget, non un progetto software
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-balance text-lg leading-relaxed text-[var(--color-text-secondary)]">
              onespec nasce dalla richiesta diretta di aziende di produzione e rivendita infissi:
              un configuratore interattivo che risparmia tempo, filtra le richieste serie e
              protegge i tuoi prezzi dalla concorrenza sleale.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Configuratore live */}
      <section className="pb-24">
        <div className="container-onespec">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-mint-light)] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[var(--color-mint-dark)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-mint-dark)]" />
              Demo interattiva
            </span>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
              Provalo come lo prova il tuo cliente
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-balance text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
              Il widget qui sotto e caricato in un iFrame, esattamente come
              apparirebbe sul tuo sito. Configura un serramento e guarda il
              preventivo calcolarsi in tempo reale.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-12">
            <ConfiguratorEmbed />
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-onespec">
          <RevealGroup className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {BLOCKS.map((b) => (
              <RevealItem
                key={b.title}
                className="rounded-3xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-alt)] p-8"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[var(--color-mint-dark)]">
                  <b.icon size={22} weight="bold" />
                </div>
                <h2 className="mt-5 text-[19px] font-semibold text-[var(--color-text)]">
                  {b.title}
                </h2>
                <p className="mt-3 text-[14px] leading-relaxed text-[var(--color-text-secondary)]">
                  {b.description}
                </p>
                {b.visual && <div className="mt-5">{b.visual}</div>}
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Dashboard */}
      <section className="border-t border-[var(--color-border-subtle)] pb-24">
        <div className="container-onespec pt-20">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
              La dashboard da cui controlli tutto
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-balance text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
              Richieste ricevute, prodotti piu configurati, valore medio del
              preventivo. Da qui aggiorni listini e regole, e le modifiche vanno
              live ovunque il widget sia installato.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-12">
            <DashboardMockup />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-[var(--color-border-subtle)] bg-[var(--color-bg-inverse)] py-20">
        <div className="container-onespec">
          <Reveal className="mx-auto max-w-xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Meno tempo su curiosi, piu tempo su clienti pronti
            </h2>
            <p className="mt-4 text-[15px] text-white/60">
              Il configuratore raccoglie misure, materiali e budget prima ancora che tu risponda
              al telefono. Chi ti scrive dopo aver configurato ha gia deciso di comprare.
            </p>
          </Reveal>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-10">
            <Reveal>
              <PerformanceCard />
            </Reveal>
            <Reveal delay={0.1}>
              <PhonePreview />
            </Reveal>
          </div>

          <Reveal className="mt-12 text-center">
            <Link
              href="/prezzi"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[var(--color-mint)] px-6 py-3.5 text-[15px] font-medium text-[#04231a] transition-transform duration-200 ease-out hover:scale-[1.02] active:scale-[0.98]"
            >
              Vedi i piani
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="container-onespec">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
              Assistenza inclusa in ogni piano
            </h2>
            <p className="mt-4 text-[15px] text-[var(--color-text-secondary)]">
              Il livello di supporto cresce insieme al piano che scegli.
            </p>
          </Reveal>

          <RevealGroup className="mt-14 flex flex-wrap items-center justify-center gap-8">
            {SUPPORT_TIERS.map((t) => (
              <RevealItem key={t.plan}>
                <SupportTicket {...t} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
