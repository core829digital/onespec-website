import { LegalPage } from "@/components/legal-page";
import { SITE } from "@/lib/site-config";

export const metadata = {
  title: "Privacy Policy — onespec",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="21 agosto 2026">
      <p>
        Questa pagina descrive come onespec (&quot;noi&quot;) raccoglie, utilizza e protegge
        i dati personali di chi visita il sito o utilizza la piattaforma, in conformita al
        Regolamento (UE) 2016/679 (GDPR).
      </p>

      <h2>Titolare del trattamento</h2>
      <p>
        Il titolare del trattamento e onespec. Per qualsiasi richiesta relativa ai dati
        personali puoi scrivere a{" "}
        <a href={`mailto:${SITE.email}`} className="text-[var(--color-mint-dark)] hover:underline">
          {SITE.email}
        </a>
        .
      </p>

      <h2>Dati raccolti</h2>
      <ul>
        <li>Dati di contatto forniti volontariamente (nome, email, azienda) tramite form o email.</li>
        <li>Dati tecnici di navigazione (indirizzo IP, tipo di browser, pagine visitate) raccolti in forma aggregata.</li>
        <li>Dati relativi alle richieste di preventivo generate tramite il configuratore, quando applicabile.</li>
      </ul>

      <h2>Finalita del trattamento</h2>
      <ul>
        <li>Rispondere a richieste di informazioni, accesso alla fase Alpha o partnership.</li>
        <li>Gestire l&apos;erogazione del servizio per i clienti abbonati alla piattaforma.</li>
        <li>Migliorare il sito e la piattaforma tramite analisi statistiche aggregate.</li>
      </ul>

      <h2>Base giuridica</h2>
      <p>
        Il trattamento si basa sul consenso dell&apos;interessato, sull&apos;esecuzione di un
        contratto o misure precontrattuali, e sul legittimo interesse a mantenere e migliorare
        il servizio.
      </p>

      <h2>Conservazione dei dati</h2>
      <p>
        I dati sono conservati per il tempo necessario a raggiungere le finalita indicate,
        e comunque non oltre i termini previsti dalla normativa vigente.
      </p>

      <h2>Diritti dell&apos;interessato</h2>
      <p>
        Puoi richiedere in qualsiasi momento accesso, rettifica, cancellazione, limitazione
        del trattamento o portabilita dei tuoi dati, scrivendo a{" "}
        <a href={`mailto:${SITE.email}`} className="text-[var(--color-mint-dark)] hover:underline">
          {SITE.email}
        </a>
        .
      </p>
    </LegalPage>
  );
}
