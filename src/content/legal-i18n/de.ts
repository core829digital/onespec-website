import type { LegalI18nSet } from "./types";

const IDENTITY = {
  h: "Verantwortlicher",
  p: [
    "OneSpec ist ein digitales Produkt der CORE829 SRL, die es von ihrem Sitz in Str. Mihai Eminescu, 10, Roman, România betreibt, CUI/CIF RO54616345 — Reg. com. J2026029428009, Telefon +40 766 668 482 (Rumänien) · +39 375 946 8881 (Italien), PEC (italienische zertifizierte E-Mail): nicht anwendbar — die CORE829 SRL ist eine Gesellschaft rumänischen Rechts, für die dieses System nicht besteht.",
    "Für alle Anfragen zu personenbezogenen Daten können Sie an hello@onespec.eu schreiben. Ein Datenschutzbeauftragter (DSB) wurde nicht benannt; Kontaktdaten des DSB: nicht anwendbar — zum Zeitpunkt der Überprüfung ist kein DSB benannt.",
  ],
};

const RIGHTS = {
  h: "Rechte der betroffenen Person",
  p: [
    "Als betroffene Person können Sie die Rechte aus Art. 15–22 DSGVO ausüben: Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerspruch und Widerruf der Einwilligung.",
    "Auskunft und Datenübertragbarkeit: Über die Seite Konto können Sie jederzeit eine Kopie Ihrer Daten im JSON-Format herunterladen; der Export umfasst auch die von Ihnen eröffneten Support-Tickets (mit den Antworten unseres Teams und den Namen der angehängten Dateien) sowie die Nachrichten, die Sie über die Seite „Kontakt“ mit Ihrer E-Mail-Adresse gesendet haben. Der Export umfasst auch die internen Bearbeitungsnotizen zu Ihren Tickets, in den gesetzlichen Grenzen (ausgenommen sind Informationen über andere Personen oder solche, die Rechte Dritter verletzen würden). Technische Sicherheitsdaten (zum Beispiel die nur als Hash gespeicherte IP-Adresse) sind pseudonymisierte personenbezogene Daten und können unter hello@onespec.eu angefordert werden.",
    "Löschung: Über die Seite Konto können Sie die Löschung des Kontos beantragen; der Antrag wird nach einer Bedenkzeit von 30 Tagen ausgeführt, sofern keine Aufbewahrungspflichten bestehen. Mit dem Konto werden auch die von Ihnen eröffneten Support-Tickets, die zugehörigen Nachrichten, internen Notizen und Anhänge sowie die über die Seite „Kontakt“ mit Ihrer E-Mail gesendeten Nachrichten gelöscht.",
    "Beschwerde: Sie können eine Beschwerde bei der Aufsichtsbehörde einreichen, wenn Sie der Ansicht sind, dass die Verarbeitung gegen geltendes Recht verstößt. Da der Verantwortliche seinen Sitz in Rumänien hat, ist die federführende Behörde die Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP, dataprotection.ro); Sie können sich in jedem Fall an die Behörde des Landes wenden, in dem Sie wohnen oder arbeiten (für Italien den Garante per la protezione dei dati personali).",
  ],
};

const CONTACT = {
  h: "Kontakt für rechtliche und vertragliche Fragen",
  p: [
    "Für vertragliche Fragen, Beanstandungen oder rechtliche Mitteilungen zu diesem Dokument: office@core829.net.",
    "Für Vertriebsanfragen: sales@core829.net. Für Support zum Dienst und Anfragen zu individuellen Enterprise-Tarifen: hello@onespec.eu.",
  ],
};

export const DE: LegalI18nSet = {
  privacy: {
    title: "Datenschutzerklärung",
    summary: "Welche personenbezogenen Daten wir verarbeiten, warum und wie lange.",
    sections: [
      IDENTITY,
      {
        h: "Verarbeitete Daten",
        p: [
          "Konto: Name, E-Mail-Adresse, bevorzugte Sprache, Land (bei der Registrierung aus dem Netzwerk oder der Browsersprache abgeleitet), Geburtsdatum (bei der Registrierung nur zur Prüfung der Volljährigkeit abgefragt), Registrierungsdatum, Status der E-Mail-Bestätigung.",
          "Zwei-Faktor-Verifizierung (optional): Wenn Sie sie aktivieren, speichern wir das Geheimnis der Authentifizierungs-App verschlüsselt, den Fingerabdruck (Hash) der Wiederherstellungscodes und die Anzahl fehlgeschlagener Versuche; die von Ihrer App erzeugten Einmalcodes speichern wir nicht.",
          "Organisation: Firmenname, USt-IdNr., Anschrift, Telefon und E-Mail, die der Nutzer in den Branding-Einstellungen eingibt.",
          "Über das Widget erzeugte Angebotsanfragen: Name, E-Mail, Telefon, Unternehmen und Nachricht des potenziellen Kunden, zusammen mit der gewählten technischen Konfiguration und dem berechneten Richtpreis.",
          "Technische Daten des Widgets: Hash der IP-Adresse (die IP im Klartext wird nicht gespeichert), User-Agent, Ergebnis der Bot-Prüfung, Spam-Bewertung.",
          "Support: Betreff, Text und Anhänge (Bilder oder PDF) der Tickets, die Sie in der Plattform eröffnen, Kategorie, Status, etwaige Bewertung von 1 bis 5, die Antworten unseres Teams und die internen Bearbeitungsnotizen (für Sie nicht sichtbar).",
          "Seite „Kontakt“ (für alle, die sich nicht anmelden können): Name, E-Mail-Adresse und Nachricht, die Sie eingeben, gewähltes Thema, Sprache und Hash der IP-Adresse (die IP im Klartext wird nicht gespeichert), der zur Missbrauchsbegrenzung dient.",
          "Aktivitätsprotokoll (Audit-Log) der administrativen Aktionen und sensiblen Vorgänge, einschließlich Aktionen an Tickets (Kennungen und Art der Aktion, ohne den Text der Nachrichten).",
        ],
      },
      {
        h: "Zwecke und Rechtsgrundlagen",
        p: [
          "Erbringung des Dienstes und Verwaltung des Kontos — Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO).",
          "Support über Tickets — Vertragserfüllung (Art. 6 Abs. 1 lit. b). Beantwortung von Nachrichten, die über die Seite „Kontakt“ von Personen ohne Konto gesendet werden — vorvertragliche oder vertragliche Maßnahmen auf Anfrage der betroffenen Person (Art. 6 Abs. 1 lit. b) und, bei nicht vertraglichen Anfragen, berechtigtes Interesse an einer Antwort (Art. 6 Abs. 1 lit. f).",
          "Sicherheit, Missbrauchsverhinderung, Ratenbegrenzung und Audit (auch auf der Seite „Kontakt“ und bei Tickets) — berechtigtes Interesse (Art. 6 Abs. 1 lit. f).",
          "E-Mails zu Tickets (neue Antwort, Ticket gelöst) sind Servicemitteilungen zu Ihrer Anfrage, keine Werbung; Sie können sie in den Benachrichtigungseinstellungen deaktivieren.",
          "Versand von Produkt- und Werbemitteilungen — Einwilligung (Art. 6 Abs. 1 lit. a), über die Seite Konto widerrufbar.",
          "Steuerliche und buchhalterische Pflichten im Zusammenhang mit kostenpflichtigen Abonnements — rechtliche Verpflichtung (Art. 6 Abs. 1 lit. c).",
        ],
      },
      {
        h: "Speicherdauer",
        p: [
          "Kontodaten: für die gesamte Dauer der Geschäftsbeziehung, gelöscht innerhalb von 30 Tagen nach dem Löschantrag.",
          "Angebotsanfragen, Aktivitätsprotokoll und Sicherheitsprotokolle: gespeichert, solange die Organisation auf der Plattform aktiv ist; derzeit gibt es keine geplante automatische Löschung dieser Daten, die auf Antrag nach dem im Abschnitt „Rechte der betroffenen Person“ beschriebenen Verfahren gelöscht werden.",
          "Support-Tickets: Geschlossene Tickets werden mit Nachrichten, internen Notizen und Anhängen 730 Tage (24 Monate) nach der letzten Aktivität automatisch gelöscht; gelöste Tickets ohne weitere Antwort schließen sich nach 7 Tagen von selbst; hochgeladene, aber nie gesendete Dateien werden nach 24 Stunden gelöscht. Dieser Zeitraum dient der Bearbeitung etwaiger Beanstandungen zum geleisteten Support und der Verteidigung von Rechtsansprüchen.",
          "Nachrichten der Seite „Kontakt“: gelöscht 90 Tage nach ihrer Bearbeitung und in jedem Fall innerhalb von 365 Tagen nach Eingang.",
          "Benachrichtigungen in der Anwendung: 365 Tage. Protokoll der gesendeten Service-E-Mails: 90 Tage.",
          "Bei der Löschung des Kontos löschen wir auch die von Ihnen eröffneten Tickets, Nachrichten, internen Notizen und Anhänge sowie die mit Ihrer E-Mail gesendeten „Kontakt“-Nachrichten; im Aktivitätsprotokoll bleiben nur Kennungen und Art der Aktion, ohne Text.",
          "Steuerunterlagen zu kostenpflichtigen Abonnements: für den Zeitraum, den die am Sitz des Verantwortlichen geltenden steuer- und handelsrechtlichen Vorschriften vorsehen.",
        ],
      },
      {
        h: "Support und Tickets: wer was sieht",
        p: [
          "Ein Ticket ist für die Person sichtbar, die es eröffnet hat, für die Inhaber und Administratoren ihrer Organisation auf der Plattform und für ausdrücklich befugte und zur Vertraulichkeit verpflichtete Support-Mitarbeiter von OneSpec. Jedes Öffnen eines Anhangs durch unsere Mitarbeiter wird protokolliert. Bevor Anhänge bereitgestellt werden, durchlaufen sie eine automatische Sicherheitsprüfung (Erkennung schädlicher Inhalte und Integritätssignatur); abgelehnte Dateien werden nicht gespeichert. Es handelt sich um eine interne Prüfung, nicht um einen Antivirus-Dienst Dritter. Die internen Notizen des Teams sind für den Kunden nicht sichtbar.",
          "Für Ihre Kontaktdaten und die Bearbeitung des Supports handelt OneSpec als Verantwortlicher. Wenn Sie im Ticket dagegen personenbezogene Daten Dritter eingeben (zum Beispiel Kunden Ihrer Organisation), verarbeitet OneSpec diese als Auftragsverarbeiter im Auftrag Ihrer Organisation gemäß dem Auftragsverarbeitungsvertrag (AVV/DPA) und nur zur Lösung der Anfrage. Geben Sie nur die unbedingt nötigen Daten ein.",
          "Senden Sie niemals Passwörter, Bestätigungscodes, Zahlungskartendaten, besondere Kategorien personenbezogener Daten (Art. 9 DSGVO, zum Beispiel Gesundheitsdaten) oder Ausweisdokumente: Sie werden für den Support nicht benötigt.",
        ],
      },
      {
        h: "Dienstleister und Unterauftragsverarbeiter",
        p: [
          "OneSpec nutzt die folgenden Dienstleister, die Daten im Auftrag des Verantwortlichen auf Grundlage von Verträgen nach Art. 28 DSGVO verarbeiten:",
          "• Convex (Convex, Inc.) — Datenbank, Anwendungs-Backend und Speicherung der an Support-Tickets angehängten Dateien. Speicherort der Daten: Vereinigte Staaten von Amerika.",
          "• Stripe (Stripe Payments Europe, Ltd.) — Verwaltung von Abonnements und Zahlungen; Kartendaten werden direkt von Stripe verarbeitet und weder über OneSpec geleitet noch dort gespeichert.",
          "• Resend (Resend, Inc.) — Versand transaktionaler E-Mails (Bestätigungscodes, Angebotsbenachrichtigungen, Hinweise zu Support-Tickets; letztere enthalten nicht den Text der Nachrichten).",
          "• Cloudflare Turnstile (Cloudflare, Inc.) — Bot-Prüfung beim Senden von Angeboten über das Widget und bei den Formularen für Anmeldung, Registrierung, Passwort-Wiederherstellung und „Kontakt“.",
          "• Vercel (Vercel, Inc.) — Hosting der Webanwendung und der Website, Leistungsmessung (Speed Insights, ohne Cookies) und aggregierte Besuchsstatistiken (Web Analytics, ohne Cookies, nur nach vorheriger Einwilligung).",
          "• PostHog (PostHog Inc.) — Produktanalyse und Sitzungsaufzeichnung (Klicks, Scrollen, Navigation), um Fehlfunktionen zu erkennen und zu beheben; in Formularfelder eingegebene Werte bleiben verdeckt. Nur nach ausdrücklicher Einwilligung über das Cookie-Banner aktiv.",
          "• Sentry (Functional Software, Inc.) — Erkennung technischer Fehler; die visuelle Sitzungsaufzeichnung (Session Replay) ist nur nach derselben Einwilligung aktiv, die reine Fehlermeldung bleibt zur Gewährleistung der Sicherheit und Stabilität des Dienstes immer aktiv.",
          "Etwaige Übermittlungen in Drittländer erfolgen auf Grundlage der Standardvertragsklauseln der Europäischen Kommission. Die aktuelle Liste der Unterauftragsverarbeiter mit den jeweiligen Angaben ist auf Anfrage unter hello@onespec.eu erhältlich.",
        ],
      },
      RIGHTS,
      {
        h: "Änderungen",
        p: [
          "Etwaige Aktualisierungen dieser Erklärung werden auf dieser Seite mit dem neuen Überarbeitungsdatum veröffentlicht. Wesentliche Änderungen werden registrierten Nutzern zusätzlich per E-Mail mitgeteilt.",
        ],
      },
      CONTACT,
    ],
  },
  "termini-di-servizio": {
    title: "Nutzungsbedingungen für den Dienst",
    summary: "Die vertraglichen Bedingungen zwischen OneSpec und der Kundenorganisation.",
    sections: [
      {
        h: "Gegenstand",
        p: [
          "Diese Bedingungen regeln die Nutzung der Plattform OneSpec durch die Kundenorganisation („Kunde“) und die von ihr befugten Personen.",
          "OneSpec ist ein digitales Produkt der CORE829 SRL, die Anbieterin ist und Vertragspartnerin für Verträge, Rechnungsstellung und Zahlungen (abgewickelt über Stripe). In diesen Bedingungen bezeichnet „OneSpec“ den Dienst und sein Team.",
        ],
      },
      {
        h: "Konto und Registrierung",
        p: [
          "Der Zugang erfordert die Erstellung eines Kontos und die Bestätigung der E-Mail-Adresse.",
          "Neue Registrierungen können von OneSpec geöffnet oder ausgesetzt werden. Jede Organisation nutzt den Dienst mit dem gewählten kostenpflichtigen Tarif zu den beim Abschluss angegebenen Bedingungen.",
        ],
      },
      {
        h: "Tarife und Entgelte",
        p: [
          "OneSpec bietet zwei Abonnementfamilien an: die Tarife „Online-Angebote“ (Level 1, Level 2, Level 3) für den auf der Website des Kunden veröffentlichbaren Konfigurator und, sofern enthalten, den Showroom-Konfigurator; sowie die Tarife „Komplette Plattform“ (Base, Pro, Agency, Enterprise), die auch die Module zur Arbeitsverwaltung umfassen. Der Kunde wählt Familie und Tarif frei und kann jederzeit im Bereich „Tarif und Abrechnung“ zwischen ihnen wechseln.",
          "Es gelten die Tarife, Grenzen und Preise, die zum Zeitpunkt des Abschlusses auf der Preisseite veröffentlicht sind. Die Preise verstehen sich zuzüglich MwSt., die nach geltendem Recht in Rechnung gestellt wird.",
          "Detaillierte wirtschaftliche Bedingungen, Rechnungsstellung, anwendbare Steuern und Zahlungsweisen: Es gelten die Preise auf der Seite Tarife und beim Kauf im Checkout; das Abonnement verlängert sich automatisch monatlich oder jährlich und kann jederzeit auf der Seite Abrechnung zum Ende des bereits bezahlten Zeitraums gekündigt werden; Zahlungen werden über Stripe abgewickelt; anwendbare Steuern werden im Checkout nach geltendem Recht berechnet und angezeigt; bei Nichtzahlung kann der Zugang nach den im Dienst vorgesehenen Mahnungen gesperrt werden.",
          "Bei Nichtzahlung kann der Zugang nach vorheriger Mitteilung gesperrt werden.",
        ],
      },
      {
        h: "Tarife „Online-Angebote“ (Level 1, Level 2, Level 3)",
        p: [
          "Die Level-Tarife werden ausschließlich monatlich abgerechnet, sehen keinen kostenlosen Testzeitraum vor und können jederzeit zum Ende des bereits bezahlten Zeitraums gekündigt werden.",
          "Jeder Level-Tarif umfasst pro Kalendermonat eine Höchstzahl an: über den öffentlichen Konfigurator eingegangenen Angebotsanfragen; vom Kunden herunterladbaren PDF-Dokumenten; vom Kunden aus der Anwendung durchgeführten WhatsApp-Versendungen; und, sofern vorgesehen, Angeboten, Dokumenten und WhatsApp-Versendungen des Showroom-Konfigurators. Er umfasst außerdem eine Höchstzahl an Konfiguratoren und Nutzern. Die Werte jedes Tarifs sind auf der Preisseite veröffentlicht; Level 2 und Level 3 bieten jeweils das Doppelte bzw. Fünffache der monatlichen Grenzen von Level 1.",
          "Ein PDF-Dokument oder eine WhatsApp-Versendung zur selben Anfrage oder zum selben Angebot wird nur einmal gezählt: erneutes Herunterladen oder Senden verbraucht keine weiteren Einheiten. Die Zähler werden am ersten Tag jedes Kalendermonats zurückgesetzt.",
          "Anfragen, die über die monatliche Grenze hinaus eingehen, gehen nicht verloren: Sie werden erfasst, die Kontaktdaten des Anfragenden werden für den Kunden jedoch erst nach dem Wechsel in einen höheren Tarif oder ab dem ersten Tag des Folgemonats sichtbar. Ist die monatliche Grenze für PDFs oder WhatsApp-Versendungen erreicht, stehen die entsprechenden Funktionen ab dem Folgemonat oder mit einem höheren Tarif wieder zur Verfügung.",
          "Nicht in den Level-Tarifen enthaltene Module (darunter B2B-Angebote mit Unterschrift, Kunden und Aufträge, Baustellen, Aufmaße, Montage, Abnahmen, QR-Akten, Statistiken und, je nach Tarif, Showroom und Logistik) bleiben sichtbar, sind aber nicht nutzbar. Der Hinweis „Powered by OneSpec“ wird im Konfigurator des Tarifs Level 1 angezeigt; die Tarife Level 2 und Level 3 umfassen die Anpassung an die Marke des Kunden (White-Label).",
          "Die Grenzen messen die Nutzung der Funktionen der Anwendung; der Kunde verpflichtet sich, sie nicht mit technischen Mitteln zu umgehen (siehe „Zulässige Nutzung“).",
        ],
      },
      {
        h: "Tarifwechsel, Kündigung und Sperrung",
        p: [
          "Der Wechsel in einen höheren Tarif wird sofort wirksam: Die neuen Grenzen gelten sofort, und die über die Grenze des laufenden Monats hinaus erfassten Anfragen werden sichtbar. Der Wechsel in einen niedrigeren Tarif oder von einem Tarif „Komplette Plattform“ in einen Level-Tarif führt nicht zur Löschung von Daten: Im neuen Tarif nicht enthaltene Module sind vorübergehend nicht nutzbar und stehen mit einem Tarif, der sie umfasst, wieder zur Verfügung.",
          "Der Wechsel in einen Tarif mit weniger Nutzern als die aktiven Nutzer des Kunden ist erst nach Entfernung der überzähligen Nutzer möglich. Hat der Kunde mehr veröffentlichte Konfiguratoren, als der neue Level-Tarif vorsieht, bleiben nur die ältesten Konfiguratoren innerhalb der Tarifgrenze öffentlich zugänglich.",
          "Bei Kündigung oder Sperrung des Abonnements, gleich in welchem Tarif, steht der öffentliche Konfigurator den Besuchern zum Ende des bezahlten Zeitraums nicht mehr zur Verfügung. Während der Sperrung eingehende Anfragen werden erfasst, ihre Kontaktdaten werden jedoch erst mit der Reaktivierung des Abonnements sichtbar.",
        ],
      },
      {
        h: "Erstattungen",
        p: [
          "OneSpec ist ein digitales Produkt, das im Abonnement (monatlich oder jährlich) bereitgestellt wird: Der Zugang zur Plattform und zu ihren Funktionen wird dem Kunden unmittelbar mit der Zahlung oder Verlängerung zur Verfügung gestellt. Aus diesem Grund sind gezahlte Entgelte, vorbehaltlich zwingender gesetzlicher Bestimmungen, weder ganz noch teilweise erstattungsfähig, auch nicht bei Nichtnutzung des Dienstes während des bereits bezahlten Zeitraums.",
          "Beim Wechsel in einen niedrigeren Tarif (Downgrade) wird ein etwaiges Guthaben aus dem bereits bezahlten Zeitraum nicht in Geld erstattet, sondern bleibt als Guthaben auf der Plattform verfügbar und wird automatisch bei der nächsten Verlängerung oder Abbuchung angerechnet — jederzeit einsehbar im Bereich „Tarif und Abrechnung“ des Kontos.",
          "Die Kündigung des Abonnements (Beendigung der Verlängerung) begründet keinen Anspruch auf Erstattung des für den laufenden Zeitraum bereits gezahlten Betrags: Der Zugang bleibt bis zum Ende dieses Zeitraums aktiv, wie bei der Kündigung angegeben.",
          "Etwaige zwingende gesetzliche Rechte für Fälle, in denen der Dienst aus von OneSpec zu vertretenden Gründen nicht erbracht wird, bleiben unberührt.",
        ],
      },
      {
        h: "Zulässige Nutzung",
        p: [
          "Der Kunde verpflichtet sich, den Dienst nicht für rechtswidrige Tätigkeiten zu nutzen, nicht zu versuchen, technische oder sicherheitsbezogene Grenzen oder die Nutzungsgrenzen seines Tarifs zu umgehen, und keine Inhalte hochzuladen, an denen er keine Rechte hat. Der Kunde bewahrt seine Zugangsdaten und die Wiederherstellungscodes der Zwei-Faktor-Verifizierung sicher auf; wir empfehlen, diese für alle Personen mit Zugang zur Plattform zu aktivieren.",
          "Der Kunde ist für die von ihm eingegebenen Inhalte, Preislisten und Daten sowie deren Übereinstimmung mit den geltenden Vorschriften verantwortlich.",
        ],
      },
      {
        h: "Support",
        p: [
          "Der Support erfolgt über Tickets im Bereich „Support“ der Plattform und, für alle, die sich nicht anmelden können, über die Seite „Kontakt“. Die Mitarbeiter von OneSpec antworten an Werktagen.",
          "Die von OneSpec angestrebten Erstreaktions- und Lösungszeiten sind interne Ziele, keine Garantien oder verbindlichen Service-Levels, sofern nicht schriftlich etwas anderes mit dem Enterprise-Kunden vereinbart ist (siehe „Haftungsbeschränkung“ und die vereinbarten Verfügbarkeitsbedingungen).",
          "In Tickets verpflichtet sich der Kunde, keine Passwörter, Bestätigungscodes, Zahlungskartendaten oder unnötigen personenbezogenen Daten einzugeben, keine rechtswidrigen, beleidigenden oder fremden Inhalte anzuhängen und nur die zulässigen Anhänge zu verwenden (Bilder PNG, JPG, WebP und PDF, bis zu 3 Dateien pro Nachricht und je 8 MB). OneSpec kann nicht konforme Inhalte entfernen und Tickets schließen, die den Dienst missbrauchen. Anhänge werden automatisch geprüft, und solche, die die Sicherheitsprüfung nicht bestehen, werden abgelehnt.",
          "Ein gelöstes Ticket ohne weitere Antwort schließt sich nach 7 Tagen automatisch; geschlossene Tickets und ihre Anhänge werden gemäß den in der Datenschutzerklärung genannten Fristen gelöscht.",
        ],
      },
      {
        h: "Richtpreise des Konfigurators",
        p: [
          "Die vom Widget angezeigten Preise sind unverbindliche Schätzungen auf Grundlage der vom Kunden bereitgestellten Preislisten und stellen kein vertragliches Angebot gegenüber dem Endverbraucher dar, sofern die örtlichen Vorschriften keine andere Einstellung zulassen.",
        ],
      },
      {
        h: "Haftungsbeschränkung",
        p: [
          "Der Dienst wird „wie besehen“ bereitgestellt. Soweit gesetzlich zulässig, ist die Haftung von OneSpec auf den Betrag beschränkt, den der Kunde in den zwölf Monaten vor dem schadensverursachenden Ereignis an OneSpec gezahlt hat, unter Ausschluss mittelbarer Schäden (entgangener Gewinn, Verlust von Kunden oder nicht von OneSpec verursachter Datenverlust); Haftungen, die das Gesetz nicht zu beschränken erlaubt (Vorsatz, grobe Fahrlässigkeit, Personenschäden), bleiben unberührt.",
          "Die zwingenden Rechte eines Kunden, der Verbraucher ist, bleiben, soweit anwendbar, unberührt.",
        ],
      },
      {
        h: "Laufzeit, Widerruf und anwendbares Recht",
        p: [
          "Der Vertrag läuft für die Dauer des Abonnementzeitraums und verlängert sich, sofern er nicht gekündigt wird.",
          "Datenübertragbarkeit und Anbieterwechsel (Verordnung (EU) 2023/2854, „Data Act“): Jederzeit, auch nach der Kündigung und für mindestens 30 Tage, kann der Kunde seine Daten über die Seite Konto in einem strukturierten Format (JSON) exportieren oder Unterstützung bei der Migration zu einem anderen Anbieter anfordern, indem er an hello@onespec.eu schreibt; nach Ablauf dieses Zeitraums werden die Daten gemäß der Datenschutzerklärung gelöscht.",
          "Da es sich um einen Abonnementdienst für eine berufliche Organisation handelt, findet das im italienischen Verbrauchergesetzbuch für Fernabsatzverträge mit Verbrauchern vorgesehene Widerrufsrecht keine Anwendung. Selbst wenn es anwendbar wäre, würde dieses Recht bei der Bereitstellung digitaler Inhalte, die nicht auf einem körperlichen Datenträger geliefert werden und deren Ausführung mit ausdrücklicher Zustimmung des Kunden unter Verzicht auf das Widerrufsrecht bei der Aktivierung des Abonnements begonnen hat, in jedem Fall erlöschen (Art. 59 Buchst. o, italienisches Gesetzesdekret 206/2005).",
          "Das Vertragsverhältnis unterliegt rumänischem Recht (unter zwingender Anwendung des EU-Rechts, insbesondere der DSGVO), unter Ausschluss des UN-Kaufrechts (Wiener Übereinkommen über den internationalen Warenkauf). Gerichtsstand: die zuständigen Gerichte von Roman / Neamț (Rumänien), Sitz der CORE829 SRL, unbeschadet des zwingenden Verbrauchergerichtsstands, soweit anwendbar.",
        ],
      },
      CONTACT,
    ],
  },
  "termini-di-utilizzo": {
    title: "Nutzungsregeln",
    summary: "Regeln für die Nutzung der Webanwendung und des einbettbaren Widgets.",
    sections: [
      {
        h: "Befugte Nutzer",
        p: [
          "Der Zugang zum geschützten Bereich ist nur den von der Organisation befugten Personen gestattet, jeweils mit persönlichen Zugangsdaten und zugewiesener Rolle.",
          "Der Nutzer muss seine Zugangsdaten sicher aufbewahren und jeden unbefugten Zugriff unverzüglich melden.",
        ],
      },
      {
        h: "Einbettbares Widget",
        p: [
          "Das Widget darf nur auf den in der Konfiguration angegebenen Domains eingebettet werden. Die Einbettung wird über Sicherheits-Header gesteuert (Content-Security-Policy mit Liste der zugelassenen Domains).",
          "Es ist untersagt, das Widget zu verändern, zu verschleiern oder neu zu verpacken oder es zur Erhebung von Daten für andere Zwecke als die Angebotsanfrage zu nutzen.",
        ],
      },
      {
        h: "Verfügbarkeit und Wartung",
        p: [
          "OneSpec kann den Dienst aus Wartungs- oder Sicherheitsgründen vorübergehend unterbrechen und hält die Beeinträchtigungen so gering wie möglich.",
          "Spezifische Service-Levels (SLA): Sofern nicht schriftlich anders vereinbart, verpflichtet sich OneSpec zu einem Ziel von 99,5 % monatlicher Verfügbarkeit (ohne vorab angekündigte geplante Wartung), ohne automatische Gutschriften; eigene Service-Levels und Reaktionszeiten können schriftlich mit dem Enterprise-Kunden vereinbart werden.",
        ],
      },
      {
        h: "Geistiges Eigentum",
        p: [
          "Software, Oberfläche und Dokumentation von OneSpec bleiben Eigentum der CORE829 SRL. Daten, Preislisten und Marken des Kunden bleiben Eigentum des Kunden.",
        ],
      },
      CONTACT,
    ],
  },
  cookie: {
    title: "Cookies und ähnliche Technologien",
    summary: "Welche Cookies und lokalen Speicher die Website onespec.eu und die Plattform verwenden.",
    sections: [
      {
        h: "Technisch notwendige Cookies",
        p: [
          "Die Authentifizierung verwendet ein Sitzungs-Cookie, das für den Betrieb des geschützten Bereichs erforderlich ist. Ohne dieses Cookie ist keine Anmeldung möglich. Es erfordert keine Einwilligung.",
          "Sowohl die Website onespec.eu als auch die Plattform speichern die gewählte Sprache in einem technischen Cookie („NEXT_LOCALE“), um Ihnen die Seiten beim nächsten Besuch in Ihrer Sprache anzuzeigen. Es enthält keine personenbezogenen Daten und erfordert keine Einwilligung.",
        ],
      },
      {
        h: "Funktionaler lokaler Speicher",
        p: [
          "Die Theme-Einstellung (hell/dunkel) wird im Browser über localStorage mit dem Schlüssel „onespec-theme“ gespeichert. Es handelt sich um technische Daten, die das Gerät nicht verlassen.",
        ],
      },
      {
        h: "Einladungscode (lokaler Speicher)",
        p: [
          "Wenn Sie OneSpec über einen Einladungslink (mit „?ref=…“) erreichen, wird der Einladungscode im Browser über localStorage mit dem Schlüssel „onespec-ref“ für 30 Tage gespeichert, ausschließlich um Ihre Registrierung der Person zuzuordnen, die Sie eingeladen hat. Es ist kein Cookie, enthält keine personenbezogenen Daten und wird nicht an Dritte gesendet; Sie können ihn jederzeit löschen, indem Sie die Website-Daten entfernen.",
        ],
      },
      {
        h: "Bot-Prüfung (Cloudflare Turnstile)",
        p: [
          "Die Formulare für Anmeldung, Registrierung, Passwort-Wiederherstellung und „Kontakt“ sowie das Senden von Angeboten über das Widget verwenden Cloudflare Turnstile, um zu prüfen, dass ein Mensch sie ausfüllt. Es ist eine unbedingt erforderliche Sicherheitsmaßnahme und erfordert keine Einwilligung; sie wird weder für Werbung noch zur Profilbildung genutzt.",
        ],
      },
      {
        h: "Leistungsmessung",
        p: [
          "Die Leistung der Seiten wird mit Vercel Speed Insights gemessen, das keine Cookies verwendet und keine einzelnen Nutzer verfolgt.",
        ],
      },
      {
        h: "Besuchsstatistiken (nach vorheriger Einwilligung)",
        p: [
          "Auf der Website onespec.eu und in der Plattform verwenden wir Vercel Web Analytics, um besuchte Seiten in aggregierter Form zu zählen (Seite, Land, Geräte- und Browsertyp). Es verwendet keine Cookies, erstellt keine Profile und kann Sie nicht von einem Tag zum nächsten wiedererkennen; vor dem Senden entfernen wir aus den Seitenadressen Parameter und die Codes privater Links.",
          "Es wird nur aktiviert, wenn Sie die optionalen Tools im Cookie-Banner akzeptieren; solange Sie nicht zustimmen oder wenn Sie ablehnen, wird nichts gesendet. Sie können Ihre Entscheidung jederzeit ändern: auf der Website über den Link „Cookie-Einstellungen“ unten auf der Seite.",
        ],
      },
      {
        h: "Speicherung Ihrer Cookie-Auswahl",
        p: [
          "Ihre Auswahl im Banner (zustimmen / ablehnen) wird im Browser über localStorage gespeichert, mit dem Schlüssel „onespec-cookie-consent“ in der Plattform und „onespec-site-consent“ auf der Website, damit wir Sie nicht bei jedem Besuch erneut fragen. Es handelt sich um technische Daten, die das Gerät nicht verlassen.",
        ],
      },
      {
        h: "Analyse und Sitzungsaufzeichnung (nach vorheriger Einwilligung)",
        p: [
          "Wir verwenden PostHog für die Produktanalyse und Sitzungsaufzeichnung (Klicks, Scrollen, Navigationspfad) und Sentry Replay, um visuell nachzuvollziehen, was einen technischen Fehler verursacht hat — beides dient dazu, Fehlfunktionen der Plattform zu erkennen und zu beheben. In Formularfelder eingegebene Werte bleiben in der Aufzeichnung stets verdeckt.",
          "Diese Tools werden nicht automatisch aktiviert: Beim ersten Zugriff fragt ein Banner nach der Einwilligung; solange sie nicht erteilt ist, erheben diese Tools keine Navigationsdaten. Die reine technische Fehlermeldung (ohne visuelle Aufzeichnung und ohne Navigationsdaten) bleibt dagegen als Sicherheits- und Stabilitätsmaßnahme des Dienstes immer aktiv.",
          "Es werden keine Werbe- oder kommerziellen Profiling-Cookies Dritter verwendet.",
        ],
      },
      CONTACT,
    ],
  },
  gdpr: {
    title: "Rechte der betroffenen Personen (DSGVO)",
    summary: "So üben Sie Auskunft, Datenübertragbarkeit, Berichtigung, Löschung und Widerspruch aus.",
    sections: [
      IDENTITY,
      RIGHTS,
      {
        h: "So üben Sie Ihre Rechte aus",
        p: [
          "Über die Seite Konto: Datenexport (JSON, einschließlich Support-Tickets und „Kontakt“-Nachrichten), Aktualisierung des Profils, Verwaltung der Einwilligungen, Löschantrag.",
          "Per E-Mail an hello@onespec.eu für Anfragen, die Sie nicht selbst erledigen können. Wir antworten innerhalb eines Monats, bei komplexen Anfragen verlängerbar um zwei Monate.",
        ],
      },
      {
        h: "Automatisierte Verarbeitung",
        p: [
          "Die Berechnung des Richtpreises und die Kontrollen gegen Missbrauch (Ratenbegrenzung, Bot-Prüfung, Spam-Bewertung) sind automatisiert, entfalten aber keine Rechtswirkung gegenüber der betroffenen Person. Geschäftliche Entscheidungen über die Anfrage trifft weiterhin die Organisation.",
        ],
      },
      CONTACT,
    ],
  },
  sicurezza: {
    title: "Sicherheit und Kontrollen",
    summary: "Die tatsächlich umgesetzten technischen und organisatorischen Maßnahmen.",
    sections: [
      {
        h: "Schutz der Daten bei der Übertragung und im Ruhezustand",
        p: [
          "Die gesamte Kommunikation erfolgt über TLS. Ruhende Daten werden von den Infrastrukturanbietern verschlüsselt (Convex, Vercel).",
          "Einzelheiten zu Schlüsseln und zur Verwaltung der Verschlüsselung im Ruhezustand: Ruhende Daten werden von den Infrastrukturanbietern mit branchenüblichen Algorithmen (AES-256) verschlüsselt, die auch die Schlüssel verwalten; OneSpec hat keinen Zugriff auf die Schlüssel und bewahrt keine Kopie auf.",
        ],
      },
      {
        h: "Zugriffskontrolle",
        p: [
          "Rollenbasierter Zugriff (Inhaber, Administrator, Mitglied) mit serverseitiger Prüfung bei jedem Vorgang. Jeder sensible Datensatz ist der Organisation zugeordnet, und Abfragen sind pro Organisation isoliert.",
          "Ein einziger Plattform-Superadministrator wird über eine Liste von E-Mail-Adressen in einer Umgebungsvariablen festgelegt.",
          "Sitzungsverwaltung mit der Möglichkeit, einzelne Geräte zu widerrufen und sich von allen Geräten abzumelden.",
        ],
      },
      {
        h: "Geheimnisse und Konfiguration",
        p: [
          "Schlüssel und Geheimnisse werden über Umgebungsvariablen der Deployment-Plattform verwaltet und sind weder im Code noch in Protokollen oder Fehlerantworten enthalten.",
        ],
      },
      {
        h: "Sicherheits-Header",
        p: [
          "Die Anwendung setzt HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy und eine Content-Security-Policy, die das Einbetten des geschützten Bereichs verbietet. Das Widget verwendet eine eigene CSP mit einer Liste der pro Organisation zugelassenen Domains.",
        ],
      },
      {
        h: "Ratenbegrenzung und Missbrauchsschutz",
        p: [
          "Grenzen gelten für: Anmeldung, das Senden von Angeboten über das Widget (pro IP und pro Konfigurator), Datenexporte. Bot-Prüfung mit Cloudflare Turnstile bei Widget-Übermittlungen.",
        ],
      },
      {
        h: "Aktivitätsprotokoll",
        p: [
          "Administrative Aktionen und sensible Vorgänge (Veröffentlichung von Katalogen, Statuswechsel, Exporte, Löschanträge) werden mit Akteur, Objekt und Zeitpunkt protokolliert.",
        ],
      },
      {
        h: "Backup und Kontinuität",
        p: [
          "Backups und Wiederherstellung werden vom Datenbankanbieter verwaltet. Backup-Richtlinie, RPO/RTO-Ziele und regelmäßige Wiederherstellungstests: Der Anbieter sichert die Infrastruktur, und OneSpec kann die Daten exportieren; vertragliche RPO/RTO-Ziele werden derzeit nicht garantiert; sie werden regelmäßig überprüft und auf Anfrage mitgeteilt.",
        ],
      },
      {
        h: "Schwachstellenmanagement und Reaktion auf Vorfälle",
        p: [
          "Prüfung von Abhängigkeiten und Geheimnissen, Aktualisierungen und Sicherheitsprüfung vor Releases.",
          "Ablaufplan für Vorfälle und Meldefristen: Bei einer Verletzung des Schutzes personenbezogener Daten leitet OneSpec das interne Verfahren zur Eindämmung und Analyse ein und informiert den Kunden unverzüglich, spätestens innerhalb von 72 Stunden nach Entdeckung, damit er die Pflichten aus Art. 33 DSGVO erfüllen kann.",
          "Für Sicherheitsmeldungen: hello@onespec.eu.",
        ],
      },
      CONTACT,
    ],
  },
  "regolamento-inviti": {
    title: "Bedingungen des Empfehlungsprogramms",
    summary: "Wie Prämien, Rabatte, Zahlungen und Kontrollen des Programms „Einladen und sparen“ funktionieren.",
    sections: [
      {
        h: "Was das Programm ist",
        p: [
          "Das Programm „Einladen und sparen“ ermöglicht einer Kundenorganisation von OneSpec (dem „Werber“), ein anderes Unternehmen (den „Geworbenen“) über den persönlichen Code oder Link einzuladen. Das Programm ist eine kommerzielle Initiative von OneSpec, kann jederzeit aktiviert, geändert oder ausgesetzt werden und richtet sich ausschließlich an gewerbliche Kunden (B2B).",
          "Entwurf in Erwartung rechtlicher Prüfung: [[revisione legale del regolamento]].",
        ],
      },
      {
        h: "Vorteile",
        p: [
          "Der Geworbene erhält 10 % Rabatt auf die erste Rechnung des kostenpflichtigen Abonnements, berechnet auf den Listenpreis des gewählten Tarifs und Zyklus.",
          "Der Werber erhält eine Prämie in Höhe von 10 % des Listenpreises ohne MwSt. des vom Geworbenen tatsächlich gekauften Tarifs und Abrechnungszyklus (jährlich wird als zehn Monatsbeträge berechnet). Die Prämie steht für jedes geworbene Konto nur einmal zu.",
          "Der kommerziell betreute Enterprise-Tarif ist vom automatischen Programm ausgeschlossen.",
        ],
      },
      {
        h: "Wann die Prämie entsteht",
        p: [
          "Die Prämie entsteht erst nach der ersten tatsächlichen Zahlung des Geworbenen und nach Ablauf von 30 Tagen, sofern die Zahlung in der Zwischenzeit weder erstattet noch angefochten wurde und das Abonnement des Geworbenen ordnungsgemäß ist.",
          "Jeder Werber kann in 12 aufeinanderfolgenden Monaten höchstens 10 Prämien erhalten. Ist der Werber innerhalb von 90 Tagen nach Ende der Wartezeit nicht berechtigt, verfällt die Einladung ohne Prämie.",
        ],
      },
      {
        h: "Wie die Prämie ausgezahlt wird",
        p: [
          "Der Inhaber der Organisation wählt zwischen zwei Möglichkeiten: Guthaben auf dem Stripe-Saldo, das die nächsten OneSpec-Rechnungen verringert, oder eine Geldüberweisung über Stripe Connect auf das vom Werber verknüpfte Konto. Die Auszahlung in Geld erfordert den Abschluss der von Stripe verlangten Identitätsprüfung.",
          "Guthaben kann nicht in Geld umgewandelt werden. Etwaige steuerliche Aspekte der Geldprämie (Rechnungsstellung, Quellensteuer, MwSt.) trägt der Werber, sofern gesetzlich nichts anderes bestimmt ist: [[trattamento fiscale del premio, da definire con il commercialista]].",
        ],
      },
      {
        h: "Widerruf der Prämie",
        p: [
          "Erhält der Geworbene innerhalb von 60 Tagen nach der qualifizierenden Zahlung eine Erstattung oder eröffnet er eine Anfechtung, wird die bereits gewährte Prämie widerrufen: Das Guthaben wird vom Stripe-Saldo zurückgebucht oder die Überweisung durch Stornierung des Transfers rückgängig gemacht.",
        ],
      },
      {
        h: "Kontrollen und Missbrauch",
        p: [
          "Nicht zulässig sind: Selbsteinladungen, Einladungen zwischen Unternehmen derselben Gruppe oder mit derselben Unternehmensdomain, temporäre E-Mail-Adressen, nur zur Erlangung der Prämie erstellte Konten sowie die Verwendung derselben Karte oder desselben Zahlungskunden durch Werber und Geworbenen.",
          "Einladungen, die diese Regeln nicht einhalten, werden abgelehnt, und OneSpec kann den Code eines Werbers sperren und unrechtmäßig erlangte Prämien annullieren. Bei der Anwendung der Kontrollen verarbeitet OneSpec die E-Mail-Adresse der Inhaber und die Stripe-Zahlungskennung ausschließlich zur Missbrauchsverhinderung.",
        ],
      },
      {
        h: "Vertraulichkeit des Geworbenen",
        p: [
          "Dem Werber werden der Name des eingeladenen Unternehmens in maskierter Form (zum Beispiel „Se*** Srl“) und der Status der Einladung angezeigt, ohne weitere Daten über den Geworbenen.",
        ],
      },
      CONTACT,
    ],
  },
  qualita: {
    title: "Qualität und Zertifizierungen",
    summary: "Verzeichnis der tatsächlich vorhandenen Zertifizierungen und Nachweise.",
    sections: [
      {
        h: "Stand",
        p: [
          "Zum Zeitpunkt der Überprüfung beansprucht OneSpec keine Zertifizierungen Dritter (zum Beispiel ISO/IEC 27001), sofern sie nicht unten ausdrücklich aufgeführt sind. Keine Zertifizierung wird ohne überprüfbaren Nachweis behauptet.",
        ],
      },
      {
        h: "Vorhandene Zertifizierungen und Nachweise",
        p: [
          "Zum Zeitpunkt der Überprüfung ist keine Zertifizierung Dritter vorhanden. Dieser Abschnitt wird aktualisiert, sobald — und nur wenn — eine Zertifizierung tatsächlich erlangt wird.",
        ],
      },
      {
        h: "Rechtskonformität der Preise nach Region",
        p: [
          "Regionale Regeln zur Preisangabe gegenüber Verbrauchern (Modus „Kontaktgenerierung / Richtpreisspanne“ für IT/FR/BE/DE/LU, Modus mit transparenteren Preisen für NL in den zulässigen Tarifen) werden als konfigurierbare Regeln mit Gültigkeitsdatum und Quelle verwaltet.",
          "Konkrete Rechtsgrundlagen und Aktualisierungsdaten: Verordnung (EU) 2016/679 (DSGVO); Richtlinie 2002/58/EG (ePrivacy); Richtlinie 98/6/EG über die Preisangabe; Richtlinie 2005/29/EG über unlautere Geschäftspraktiken; für den italienischen Markt Gesetzesdekret 196/2003, Gesetzesdekret 206/2005 (Verbrauchergesetzbuch) und die Regelungen zu Steuerabzügen für energetische Sanierung; die Regeln jedes Landes werden bei jeder Aktualisierung des Dienstes überprüft und mit Datum und Quelle in den Einstellungen des Konfigurators angegeben.",
        ],
      },
      CONTACT,
    ],
  },
};
