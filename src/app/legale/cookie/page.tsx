import { LegalPage } from "@/components/legal-page";
import { SITE } from "@/lib/site-config";

export const metadata = {
  title: "Cookie Policy — onespec",
};

export default function CookiePage() {
  return (
    <LegalPage title="Cookie Policy" updated="21 agosto 2026">
      <p>
        Questo sito utilizza un numero minimo di cookie e tecnologie simili, necessari al
        funzionamento di base e, dove attivati, per la misurazione anonima del traffico.
      </p>

      <h2>Cookie tecnici</h2>
      <p>
        Necessari al corretto funzionamento del sito (es. preferenze di navigazione). Non
        richiedono consenso preventivo.
      </p>

      <h2>Cookie statistici</h2>
      <p>
        Se attivati, raccolgono dati aggregati e anonimi sull&apos;utilizzo del sito per
        migliorarne i contenuti. Puoi rifiutarli senza impatti sulla navigazione.
      </p>

      <h2>Gestione delle preferenze</h2>
      <p>
        Puoi modificare o revocare il consenso ai cookie non tecnici in qualsiasi momento
        tramite le impostazioni del tuo browser.
      </p>

      <h2>Contatti</h2>
      <p>
        Per domande sulla cookie policy scrivi a{" "}
        <a href={`mailto:${SITE.email}`} className="text-[var(--color-mint-dark)] hover:underline">
          {SITE.email}
        </a>
        .
      </p>
    </LegalPage>
  );
}
