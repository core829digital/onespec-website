import { LegalPage } from "@/components/legal-page";
import { SITE } from "@/lib/site-config";

export const metadata = {
  title: "Termini di Servizio — onespec",
};

export default function TerminiPage() {
  return (
    <LegalPage title="Termini di Servizio" updated="21 agosto 2026">
      <p>
        L&apos;utilizzo del sito e della piattaforma onespec implica l&apos;accettazione dei
        presenti termini. onespec e attualmente in fase Alpha: alcune funzionalita possono
        cambiare o essere interrotte durante lo sviluppo.
      </p>

      <h2>Descrizione del servizio</h2>
      <p>
        onespec fornisce un widget di configurazione infissi integrabile tramite codice
        iFrame, gestibile e aggiornabile dalla piattaforma onespec. Il servizio e offerto
        tramite abbonamento in base al piano scelto.
      </p>

      <h2>Account e responsabilita del cliente</h2>
      <ul>
        <li>Il cliente e responsabile dell&apos;esattezza dei dati e dei listini caricati sulla piattaforma.</li>
        <li>Il cliente e responsabile della correttezza dei preventivi generati in base ai dati forniti.</li>
        <li>L&apos;accesso alla piattaforma e personale e non cedibile a terzi senza autorizzazione.</li>
      </ul>

      <h2>Abbonamenti e fatturazione</h2>
      <p>
        Gli abbonamenti sono rinnovati automaticamente secondo la periodicita scelta, salvo
        disdetta comunicata prima del rinnovo. I limiti di utilizzo (richieste preventivo
        mensili, numero di configuratori) sono definiti dal piano attivo.
      </p>

      <h2>Limitazione di responsabilita</h2>
      <p>
        onespec fornisce lo strumento di configurazione ma non e responsabile per gli accordi
        commerciali, i preventivi finali o le vendite concluse tra il cliente e i propri
        utenti finali.
      </p>

      <h2>Modifiche ai termini</h2>
      <p>
        Durante la fase Alpha i presenti termini possono essere aggiornati con maggiore
        frequenza. Le modifiche rilevanti saranno comunicate ai clienti attivi.
      </p>

      <h2>Contatti</h2>
      <p>
        Per domande sui termini di servizio scrivi a{" "}
        <a href={`mailto:${SITE.email}`} className="text-[var(--color-mint-dark)] hover:underline">
          {SITE.email}
        </a>
        .
      </p>
    </LegalPage>
  );
}
