import type { LegalI18nSet } from "./types";

const IDENTITY = {
  h: "Verwerkingsverantwoordelijke",
  p: [
    "OneSpec is een digitaal product van CORE829 SRL, die het beheert vanuit haar maatschappelijke zetel in Str. Mihai Eminescu, 10, Roman, România, CUI/CIF RO54616345 — Reg. com. J2026029428009, telefoon +40 766 668 482 (Roemenië) · +39 375 946 8881 (Italië), PEC (Italiaanse gecertificeerde e-mail): niet van toepassing — CORE829 SRL is een vennootschap naar Roemeens recht, waarvoor dit systeem niet bestaat.",
    "Voor elk verzoek over persoonsgegevens kunt u schrijven naar hello@onespec.eu. Er is geen functionaris voor gegevensbescherming (FG/DPO) aangesteld; contactgegevens van de DPO: niet van toepassing — geen DPO aangesteld op de datum van herziening.",
  ],
};

const RIGHTS = {
  h: "Rechten van de betrokkene",
  p: [
    "Als betrokkene kunt u de rechten uit de artikelen 15–22 AVG uitoefenen: inzage, rectificatie, wissing, beperking, overdraagbaarheid, bezwaar en intrekking van toestemming.",
    "Inzage en overdraagbaarheid: via de pagina Account kunt u op elk moment een kopie van uw gegevens in JSON-formaat downloaden; de export bevat ook de supporttickets die u hebt geopend (met de antwoorden van ons team en de namen van de bijgevoegde bestanden) en de berichten die u via de pagina ‘Contact’ met uw e-mailadres hebt verzonden. De export bevat ook de interne verwerkingsnotities van uw tickets, binnen de wettelijke grenzen (informatie over andere personen of die de rechten van anderen zou schenden is uitgesloten). Technische beveiligingsgegevens (bijvoorbeeld het IP-adres, alleen als hash bewaard) zijn gepseudonimiseerde persoonsgegevens en kunnen worden opgevraagd via hello@onespec.eu.",
    "Wissing: via de pagina Account kunt u de verwijdering van het account aanvragen; het verzoek wordt uitgevoerd na een bedenktijd van 30 dagen, behoudens bewaarplichten. Met het account worden ook de supporttickets die u hebt geopend, de bijbehorende berichten, interne notities en bijlagen verwijderd, evenals de berichten die u via de pagina ‘Contact’ met uw e-mail hebt verzonden.",
    "Klacht: u kunt een klacht indienen bij de toezichthoudende autoriteit als u van mening bent dat de verwerking in strijd is met de regels. Omdat de verwerkingsverantwoordelijke in Roemenië gevestigd is, is de leidende autoriteit de Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP, dataprotection.ro); u kunt zich in elk geval wenden tot de autoriteit van het land waar u woont of werkt (voor Nederland de Autoriteit Persoonsgegevens, voor België de Gegevensbeschermingsautoriteit, voor Italië de Garante per la protezione dei dati personali).",
  ],
};

const CONTACT = {
  h: "Contact voor juridische en contractuele vragen",
  p: [
    "Voor contractuele vragen, geschillen of juridische mededelingen over dit document: office@core829.net.",
    "Voor commerciële vragen: sales@core829.net. Voor ondersteuning bij de dienst en aanvragen voor Enterprise-abonnementen op maat: hello@onespec.eu.",
  ],
};

export const NL: LegalI18nSet = {
  privacy: {
    title: "Privacyverklaring",
    summary: "Welke persoonsgegevens we verwerken, waarom en hoe lang.",
    sections: [
      IDENTITY,
      {
        h: "Verwerkte gegevens",
        p: [
          "Account: naam, e-mailadres, voorkeurstaal, land (bij de registratie afgeleid van het netwerk of de browsertaal), geboortedatum (bij de registratie alleen gevraagd om na te gaan of u meerderjarig bent), registratiedatum, verificatiestatus van het e-mailadres.",
          "Verificatie in twee stappen (optioneel): als u deze inschakelt, bewaren we het geheim van de authenticatie-app versleuteld, de vingerafdruk (hash) van de herstelcodes en het aantal mislukte pogingen; de eenmalige codes die uw app genereert, bewaren we niet.",
          "Organisatie: bedrijfsnaam, btw-nummer, adres, telefoon en e-mail die de gebruiker invoert in de huisstijlinstellingen.",
          "Offerteaanvragen via de widget: naam, e-mail, telefoon, bedrijf en bericht van de potentiële klant, samen met de gekozen technische configuratie en de berekende indicatieve prijs.",
          "Technische gegevens van de widget: hash van het IP-adres (het IP-adres zelf wordt niet bewaard), user agent, resultaat van de botcontrole, spamscore.",
          "Ondersteuning: onderwerp, tekst en bijlagen (afbeeldingen of pdf) van de tickets die u in het platform opent, categorie, status, eventuele beoordeling van 1 tot 5, de antwoorden van ons team en de interne verwerkingsnotities (niet zichtbaar voor u).",
          "Pagina ‘Contact’ (voor wie niet kan inloggen): naam, e-mailadres en bericht dat u invoert, gekozen onderwerp, taal en hash van het IP-adres (het IP-adres zelf wordt niet bewaard) om misbruik te beperken.",
          "Activiteitenlogboek (auditlog) van administratieve handelingen en gevoelige bewerkingen, inclusief handelingen op tickets (identificatoren en soort handeling, zonder de tekst van berichten).",
          "Uitnodigingsprogramma: uitnodigingscode, gekoppelde accounts, status van de uitnodiging en bedrag van de beloning; voor beloningen in geld de identificator van de Stripe Connect-rekening en de verzonden fiscale documenten (factuur en fiscaal woonplaatsattest).",
        ],
      },
      {
        h: "Doeleinden en rechtsgronden",
        p: [
          "Levering van de dienst en beheer van het account — uitvoering van de overeenkomst (art. 6.1.b AVG).",
          "Ondersteuning via tickets — uitvoering van de overeenkomst (art. 6.1.b). Antwoorden op berichten die via de pagina ‘Contact’ worden verzonden door personen zonder account — precontractuele of contractuele maatregelen op verzoek van de betrokkene (art. 6.1.b) en, voor niet-contractuele verzoeken, gerechtvaardigd belang om te antwoorden (art. 6.1.f).",
          "Beveiliging, voorkoming van misbruik, frequentiebeperking en audit (ook op de pagina ‘Contact’ en bij tickets) — gerechtvaardigd belang (art. 6.1.f).",
          "E-mails over tickets (nieuw antwoord, ticket opgelost) zijn serviceberichten bij uw verzoek, geen commerciële berichten; u kunt ze uitschakelen in de meldingsvoorkeuren.",
          "Verzenden van productinformatie en commerciële berichten — toestemming (art. 6.1.a), in te trekken via de pagina Account.",
          "Fiscale en boekhoudkundige verplichtingen bij betaalde abonnementen — wettelijke verplichting (art. 6.1.c).",
          "Uitnodigingsprogramma — uitvoering van het aanvaarde reglement (art. 6.1.b); controle en bewaring van de fiscale documenten van beloningen in geld — wettelijke verplichting (art. 6.1.c); controles tegen misbruik — gerechtvaardigd belang (art. 6.1.f).",
        ],
      },
      {
        h: "Bewaartermijnen",
        p: [
          "Accountgegevens: gedurende de hele relatie, verwijderd binnen 30 dagen na het verzoek tot verwijdering.",
          "Offerteaanvragen, activiteitenlogboek en beveiligingslogs: bewaard zolang de organisatie actief is op het platform; er is momenteel geen geplande automatische verwijdering van deze gegevens, die op verzoek worden verwijderd volgens de procedure in de sectie ‘Rechten van de betrokkene’.",
          "Supporttickets: gesloten tickets worden met berichten, interne notities en bijlagen automatisch verwijderd 730 dagen (24 maanden) na de laatste activiteit; opgeloste tickets zonder verdere reactie sluiten vanzelf na 7 dagen; geüploade maar nooit verzonden bestanden worden na 24 uur verwijderd. Deze termijn dient om eventuele geschillen over de verleende ondersteuning af te handelen en een recht in rechte te verdedigen.",
          "Berichten van de pagina ‘Contact’: verwijderd 90 dagen na afhandeling en in elk geval binnen 365 dagen na ontvangst.",
          "Meldingen in de applicatie: 365 dagen. Logboek van verzonden service-e-mails: 90 dagen.",
          "Bij verwijdering van het account verwijderen we ook de tickets, berichten, interne notities en bijlagen die u hebt geopend en de ‘Contact’-berichten die met uw e-mail zijn verzonden; in het activiteitenlogboek blijven alleen identificatoren en soort handeling, zonder tekst.",
          "Fiscale documenten bij betaalde abonnementen: gedurende de termijn die de fiscale en boekhoudkundige regels van de zetel van de verwerkingsverantwoordelijke voorschrijven.",
        ],
      },
      {
        h: "Ondersteuning en tickets: wie ziet wat",
        p: [
          "Een ticket is zichtbaar voor de persoon die het heeft geopend, voor de eigenaars en beheerders van diens organisatie op het platform en voor uitdrukkelijk gemachtigde en tot geheimhouding verplichte supportmedewerkers van OneSpec. Elke keer dat onze medewerkers een bijlage openen, wordt dat vastgelegd. Voordat bijlagen beschikbaar worden gesteld, ondergaan ze een automatische veiligheidscontrole (detectie van schadelijke inhoud en integriteitshandtekening); geweigerde bestanden worden niet bewaard. Dit is een interne controle, geen antivirusdienst van derden. De interne notities van het team zijn niet zichtbaar voor de klant.",
          "Voor uw contactgegevens en de afhandeling van ondersteuning treedt OneSpec op als verwerkingsverantwoordelijke. Als u in het ticket echter persoonsgegevens van derden invoert (bijvoorbeeld klanten van uw organisatie), verwerkt OneSpec die als verwerker, namens uw organisatie, volgens de verwerkersovereenkomst (DPA) en alleen om het verzoek op te lossen. Voer alleen de strikt noodzakelijke gegevens in.",
          "Stuur nooit wachtwoorden, verificatiecodes, betaalkaartgegevens, bijzondere categorieën van persoonsgegevens (art. 9 AVG, bijvoorbeeld gezondheidsgegevens) of identiteitsdocumenten: die zijn niet nodig voor ondersteuning.",
        ],
      },
      {
        h: "Leveranciers en subverwerkers",
        p: [
          "OneSpec maakt gebruik van de volgende leveranciers, die gegevens verwerken namens de verwerkingsverantwoordelijke op basis van overeenkomsten volgens art. 28 AVG:",
          "• Convex (Convex, Inc.) — database, applicatiebackend en opslag van bestanden bij supporttickets. Locatie van de gegevens: Verenigde Staten van Amerika.",
          "• Stripe (Stripe Payments Europe, Ltd.) — beheer van abonnementen en betalingen; kaartgegevens worden rechtstreeks door Stripe verwerkt en gaan niet via OneSpec en worden er niet bewaard.",
          "• Resend (Resend, Inc.) — verzending van transactionele e-mails (verificatiecodes, offertemeldingen, meldingen over supporttickets; die laatste bevatten niet de tekst van de berichten).",
          "• Cloudflare Turnstile (Cloudflare, Inc.) — botcontrole bij het verzenden van offertes via de widget en bij de formulieren voor inloggen, registreren, wachtwoordherstel en ‘Contact’.",
          "• Vercel (Vercel, Inc.) — hosting van de webapplicatie en de website, prestatiemeting (Speed Insights, zonder cookies) en geaggregeerde bezoekstatistieken (Web Analytics, zonder cookies, alleen na voorafgaande toestemming).",
          "• PostHog (PostHog Inc.) — productanalyse en sessie-opname (klikken, scrollen, navigatie) om storingen op te sporen en te verhelpen; in formuliervelden getypte waarden blijven afgeschermd. Alleen actief na uitdrukkelijke toestemming via de cookiebanner.",
          "• Sentry (Functional Software, Inc.) — detectie van technische fouten; de visuele sessie-opname (Session Replay) is alleen actief na dezelfde toestemming, terwijl het loutere melden van fouten altijd actief blijft om de veiligheid en stabiliteit van de dienst te waarborgen.",
          "Eventuele doorgiften naar derde landen gebeuren op basis van de modelcontractbepalingen van de Europese Commissie. De actuele lijst van subverwerkers met hun gegevens is op verzoek beschikbaar via hello@onespec.eu.",
        ],
      },
      RIGHTS,
      {
        h: "Wijzigingen",
        p: [
          "Eventuele wijzigingen van deze verklaring worden op deze pagina gepubliceerd met de nieuwe herzieningsdatum. Wezenlijke wijzigingen worden ook per e-mail aan geregistreerde gebruikers meegedeeld.",
        ],
      },
      CONTACT,
    ],
  },
  "termini-di-servizio": {
    title: "Servicevoorwaarden",
    summary: "De contractuele voorwaarden tussen OneSpec en de klantorganisatie.",
    sections: [
      {
        h: "Onderwerp",
        p: [
          "Deze Voorwaarden regelen het gebruik van het OneSpec-platform door de klantorganisatie (‘Klant’) en de personen die zij machtigt.",
          "OneSpec is een digitaal product van CORE829 SRL, die de leverancier is en de contractpartij voor de overeenkomsten, facturatie en betalingen (afgehandeld via Stripe). In deze Voorwaarden betekent ‘OneSpec’ de dienst en zijn team.",
        ],
      },
      {
        h: "Account en registratie",
        p: [
          "Toegang vereist het aanmaken van een account en de verificatie van het e-mailadres.",
          "Nieuwe registraties kunnen door OneSpec worden geopend of opgeschort. Elke organisatie krijgt toegang met het gekozen betaalde abonnement, tegen de voorwaarden die bij de aansluiting worden vermeld.",
        ],
      },
      {
        h: "Abonnementen en vergoedingen",
        p: [
          "OneSpec biedt twee abonnementsfamilies: de abonnementen ‘Online offertes’ (Level 1, Level 2, Level 3), voor de configurator die op de website van de Klant kan worden gepubliceerd en, indien inbegrepen, de Showroom-configurator; en de abonnementen ‘Volledig platform’ (Base, Pro, Agency, Enterprise), die ook de modules voor werkbeheer omvatten. De Klant kiest vrij de familie en het abonnement en kan op elk moment van de ene naar de andere overstappen via de sectie ‘Abonnement en facturatie’.",
          "De geldende abonnementen, limieten en prijzen zijn die welke op het moment van inschrijving op de prijspagina zijn gepubliceerd. Prijzen zijn exclusief btw, die volgens de geldende regels op de factuur wordt toegepast.",
          "Gedetailleerde financiële voorwaarden, facturatie, toepasselijke belastingen en betaalwijzen: de prijzen zijn die op de pagina Abonnementen en bij de aankoop in de checkout; het abonnement wordt automatisch maandelijks of jaarlijks verlengd en kan op elk moment via de pagina Facturatie worden opgezegd, met ingang van het einde van de reeds betaalde periode; betalingen worden afgehandeld door Stripe; toepasselijke belastingen worden in de checkout volgens de geldende regels berekend en vermeld; bij niet-betaling kan de toegang worden opgeschort na de herinneringen die de dienst voorziet.",
          "Niet-betaling kan na kennisgeving leiden tot opschorting van de toegang.",
        ],
      },
      {
        h: "Abonnementen ‘Online offertes’ (Level 1, Level 2, Level 3)",
        p: [
          "De Level-abonnementen worden uitsluitend maandelijks gefactureerd, hebben geen gratis proefperiode en kunnen op elk moment worden opgezegd met ingang van het einde van de reeds betaalde periode.",
          "Elk Level-abonnement omvat per kalendermaand een maximumaantal: offerteaanvragen ontvangen via de openbare configurator; pdf-documenten die de Klant kan downloaden; WhatsApp-verzendingen die de Klant vanuit de applicatie doet; en, waar voorzien, offertes, documenten en WhatsApp-verzendingen van de Showroom-configurator. Het omvat ook een maximumaantal configurators en gebruikers. De waarden van elk abonnement zijn die op de prijspagina; Level 2 en Level 3 bieden respectievelijk het dubbele en het vijfvoudige van de maandelijkse limieten van Level 1.",
          "Een pdf-document of WhatsApp-verzending voor dezelfde aanvraag of dezelfde offerte wordt maar één keer geteld: opnieuw downloaden of verzenden verbruikt geen extra eenheden. De tellers worden op de eerste dag van elke kalendermaand op nul gezet.",
          "Aanvragen die boven de maandlimiet binnenkomen, gaan niet verloren: ze worden vastgelegd, maar de contactgegevens van de aanvrager worden pas zichtbaar voor de Klant na overstap naar een hoger abonnement of vanaf de eerste dag van de volgende maand. Is de maandlimiet voor pdf's of WhatsApp-verzendingen bereikt, dan zijn die functies weer beschikbaar vanaf de volgende maand of met een hoger abonnement.",
          "Modules die niet in de Level-abonnementen zijn inbegrepen (waaronder B2B-offertes met handtekening, klanten en deals, werven, opmetingen, plaatsing, opleveringen, QR-dossiers, statistieken en, afhankelijk van het abonnement, Showroom en logistiek) blijven zichtbaar maar zijn niet bruikbaar. De vermelding ‘Powered by OneSpec’ wordt getoond in de configurator van het Level 1-abonnement; de abonnementen Level 2 en Level 3 omvatten aanpassing aan het merk van de Klant (white-label).",
          "De limieten meten het gebruik van de functies van de applicatie; de Klant verbindt zich ertoe ze niet met technische middelen te omzeilen (zie ‘Aanvaardbaar gebruik’).",
        ],
      },
      {
        h: "Abonnementswijziging, opzegging en opschorting",
        p: [
          "Overstappen naar een hoger abonnement gaat onmiddellijk in: de nieuwe limieten gelden meteen en aanvragen die boven de limiet van de lopende maand zijn vastgelegd, worden zichtbaar. Overstappen naar een lager abonnement, of van een abonnement ‘Volledig platform’ naar een Level-abonnement, verwijdert geen gegevens: modules die niet in het nieuwe abonnement zitten, zijn tijdelijk niet bruikbaar en worden weer beschikbaar met een abonnement dat ze omvat.",
          "Overstappen naar een abonnement met minder gebruikers dan de actieve gebruikers van de Klant is alleen mogelijk na verwijdering van de overtollige gebruikers. Heeft de Klant meer gepubliceerde configurators dan het nieuwe Level-abonnement toestaat, dan blijven alleen de oudste configurators binnen de limiet van het abonnement openbaar toegankelijk.",
          "Bij opzegging of opschorting van het abonnement, voor elk abonnement, is de openbare configurator aan het einde van de betaalde periode niet langer beschikbaar voor bezoekers. Aanvragen die tijdens de opschorting binnenkomen, worden vastgelegd, maar hun contactgegevens worden pas zichtbaar bij heractivering van het abonnement.",
        ],
      },
      {
        h: "Terugbetalingen",
        p: [
          "OneSpec is een digitaal product dat in abonnementsvorm (maandelijks of jaarlijks) wordt geleverd: de toegang tot het platform en zijn functies wordt onmiddellijk bij betaling of verlenging ter beschikking gesteld van de Klant. Daarom zijn betaalde vergoedingen, behoudens dwingende wettelijke bepalingen, niet geheel of gedeeltelijk terugbetaalbaar, ook niet als de dienst tijdens de reeds betaalde periode niet wordt gebruikt.",
          "Bij overstap naar een lager abonnement (downgrade) wordt een eventueel tegoed over de reeds betaalde periode niet in geld terugbetaald, maar blijft het beschikbaar als tegoed op het platform, automatisch toegepast bij de volgende verlenging of afschrijving — op elk moment te raadplegen in de sectie ‘Abonnement en facturatie’ van het account.",
          "Opzegging van het abonnement (stopzetting van de verlenging) geeft geen recht op terugbetaling van het reeds betaalde bedrag voor de lopende periode: de toegang blijft actief tot het einde van die periode, zoals bij de opzegging vermeld.",
          "Eventuele dwingende wettelijke rechten voor gevallen waarin de dienst niet wordt geleverd door een oorzaak die aan OneSpec toe te rekenen is, blijven onverlet.",
        ],
      },
      {
        h: "Promotiecodes",
        p: [
          "OneSpec kan, voor beperkte perioden en in beperkte aantallen, promotiecodes aanbieden die op de betaalpagina worden ingevoerd. De voorwaarden van elke code (korting, betrokken abonnementen, maximaal aantal keer inwisselen en eventuele vervaldatum) zijn die welke samen met de code worden meegedeeld en door het betaalsysteem bij de aankoop worden toegepast; zodra het beschikbare aantal is opgebruikt of de vervaldatum is verstreken, is de code niet meer geldig.",
          "Tenzij anders vermeld, geldt een promotiecode alleen voor de eerste aankoop van een nieuw abonnement en slechts één keer per Klant; geldt hij alleen voor de eerste factuur van maandelijks gefactureerde abonnementen, terwijl vanaf de volgende factuur de geldende catalogusprijs van toepassing is; geldt hij niet voor het Enterprise-abonnement of voor jaarlijkse facturering; is hij niet te combineren met de korting van het uitnodigingsprogramma; heeft hij geen geldwaarde, is hij niet overdraagbaar en geeft hij geen recht op terugbetaling of tegoed.",
          "De btw wordt, waar verschuldigd, berekend over het verlaagde bedrag. OneSpec kan een korting weigeren of intrekken die in strijd met deze voorwaarden is verkregen, bijvoorbeeld door meerdere accounts voor dezelfde organisatie te openen.",
        ],
      },
      {
        h: "Aanvaardbaar gebruik",
        p: [
          "De Klant verbindt zich ertoe de dienst niet te gebruiken voor onrechtmatige activiteiten, niet te proberen technische of beveiligingslimieten of de gebruikslimieten van zijn abonnement te omzeilen en geen inhoud te uploaden waarop hij geen rechten heeft. De Klant bewaart zijn inloggegevens en de herstelcodes van de verificatie in twee stappen zorgvuldig; we raden aan die verificatie in te schakelen voor iedereen met toegang tot het platform.",
          "De Klant is verantwoordelijk voor de inhoud, prijslijsten en gegevens die hij invoert en voor de naleving van de toepasselijke regels.",
        ],
      },
      {
        h: "Ondersteuning",
        p: [
          "Ondersteuning wordt geboden via tickets in de sectie ‘Support’ van het platform en, voor wie niet kan inloggen, via de pagina ‘Contact’. De medewerkers van OneSpec antwoorden op werkdagen.",
          "De tijden voor eerste reactie en oplossing die OneSpec nastreeft, zijn interne doelstellingen, geen garanties of bindende serviceniveaus, tenzij schriftelijk anders overeengekomen met de Enterprise-Klant (zie ‘Beperking van aansprakelijkheid’ en de overeengekomen beschikbaarheidsvoorwaarden).",
          "In tickets verbindt de Klant zich ertoe geen wachtwoorden, verificatiecodes, betaalkaartgegevens of onnodige persoonsgegevens in te voeren, geen onrechtmatige, beledigende of andermans inhoud bij te voegen en alleen de toegestane bijlagen te gebruiken (afbeeldingen PNG, JPG, WebP en pdf, tot 3 bestanden per bericht en elk 8 MB). OneSpec kan niet-conforme inhoud verwijderen en tickets sluiten die misbruik maken van de dienst. Bijlagen worden automatisch gecontroleerd en die welke de veiligheidscontrole niet doorstaan, worden geweigerd.",
          "Een opgelost ticket zonder verdere reactie sluit automatisch na 7 dagen; gesloten tickets en hun bijlagen worden verwijderd volgens de termijnen in de privacyverklaring.",
        ],
      },
      {
        h: "Indicatieve prijzen van de configurator",
        p: [
          "De prijzen die de widget toont, zijn indicatieve schattingen op basis van de prijslijsten van de Klant en vormen geen contractueel aanbod aan de eindconsument, tenzij lokale regelgeving een andere instelling toelaat.",
        ],
      },
      {
        h: "Beperking van aansprakelijkheid",
        p: [
          "De dienst wordt geleverd ‘zoals hij is’. Voor zover wettelijk toegestaan is de aansprakelijkheid van OneSpec beperkt tot het bedrag dat de Klant in de twaalf maanden vóór de gebeurtenis die de schade veroorzaakte aan OneSpec heeft betaald, met uitsluiting in elk geval van indirecte schade (gederfde winst, verlies van klanten of van gegevens dat niet aan OneSpec te wijten is); aansprakelijkheden die de wet niet toestaat te beperken (opzet, grove nalatigheid, lichamelijk letsel) blijven onverlet.",
          "De dwingende rechten van een Klant die consument is, blijven, waar van toepassing, onverlet.",
        ],
      },
      {
        h: "Looptijd, herroeping en toepasselijk recht",
        p: [
          "De overeenkomst loopt voor de duur van de abonnementsperiode en wordt verlengd tenzij opgezegd.",
          "Overdraagbaarheid en overstap naar een andere leverancier (Verordening (EU) 2023/2854, ‘Dataverordening’): op elk moment, ook na opzegging en gedurende ten minste 30 dagen, kan de Klant zijn gegevens via de pagina Account in een gestructureerd formaat (JSON) exporteren of hulp vragen bij de migratie naar een andere leverancier door te schrijven naar hello@onespec.eu; na die periode worden de gegevens verwijderd volgens de privacyverklaring.",
          "Aangezien het gaat om een abonnementsdienst voor een professionele organisatie, is het herroepingsrecht dat het Italiaanse consumentenwetboek voorziet voor overeenkomsten op afstand met consumenten niet van toepassing. Zelfs indien van toepassing, zou dat recht in elk geval vervallen bij de levering van digitale inhoud die niet op een materiële drager wordt geleverd en waarvan de uitvoering met uitdrukkelijke toestemming van de Klant, met afstand van het herroepingsrecht, is begonnen bij de activering van het abonnement (art. 59, letter o, Italiaans wetsbesluit 206/2005).",
          "De relatie wordt beheerst door Roemeens recht (met dwingende toepassing van de EU-regels, in het bijzonder de AVG), met uitsluiting van het Weens Koopverdrag inzake internationale koopovereenkomsten. Bevoegde rechter: de bevoegde rechtbanken van Roman / Neamț (Roemenië), zetel van CORE829 SRL, onverminderd de dwingende bevoegdheid voor consumenten waar van toepassing.",
        ],
      },
      CONTACT,
    ],
  },
  "termini-di-utilizzo": {
    title: "Gebruiksvoorwaarden",
    summary: "Regels voor het gebruik van de webapplicatie en de insluitbare widget.",
    sections: [
      {
        h: "Gemachtigde gebruikers",
        p: [
          "Toegang tot de beveiligde omgeving is alleen toegestaan voor personen die door de organisatie zijn gemachtigd, elk met persoonlijke inloggegevens en een toegewezen rol.",
          "De gebruiker moet zijn inloggegevens zorgvuldig bewaren en elke ongeoorloofde toegang onmiddellijk melden.",
        ],
      },
      {
        h: "Insluitbare widget",
        p: [
          "De widget mag alleen worden ingesloten op de domeinen die in de configuratie zijn opgegeven. Het insluiten wordt gecontroleerd via beveiligingsheaders (Content-Security-Policy met de lijst van toegestane domeinen).",
          "Het is verboden de widget te wijzigen, te verhullen of opnieuw te verpakken of hem te gebruiken om gegevens te verzamelen voor andere doeleinden dan de offerteaanvraag.",
        ],
      },
      {
        h: "Beschikbaarheid en onderhoud",
        p: [
          "OneSpec kan de dienst tijdelijk onderbreken voor onderhoud of om veiligheidsredenen, en beperkt de hinder zoveel mogelijk.",
          "Specifieke serviceniveaus (SLA): tenzij schriftelijk anders overeengekomen, streeft OneSpec naar een maandelijkse beschikbaarheid van 99,5% (exclusief vooraf aangekondigd gepland onderhoud), zonder automatische tegoeden; specifieke serviceniveaus en reactietijden kunnen schriftelijk met de Enterprise-Klant worden overeengekomen.",
        ],
      },
      {
        h: "Intellectuele eigendom",
        p: [
          "De software, interface en documentatie van OneSpec blijven eigendom van CORE829 SRL. De gegevens, prijslijsten en merken van de Klant blijven eigendom van de Klant.",
        ],
      },
      CONTACT,
    ],
  },
  cookie: {
    title: "Cookies en vergelijkbare technieken",
    summary: "Welke cookies en lokale opslag de website onespec.eu en het platform gebruiken.",
    sections: [
      {
        h: "Essentiële technische cookies",
        p: [
          "De authenticatie gebruikt een sessiecookie dat nodig is voor de werking van de beveiligde omgeving. Zonder dit cookie kunt u niet inloggen. Er is geen toestemming voor nodig.",
          "Zowel de website onespec.eu als het platform slaan de gekozen taal op in een technisch cookie (‘NEXT_LOCALE’), om u de pagina's bij uw volgende bezoek in uw taal te tonen. Het bevat geen persoonsgegevens en er is geen toestemming voor nodig.",
        ],
      },
      {
        h: "Functionele lokale opslag",
        p: [
          "De themavoorkeur (licht/donker) wordt in de browser opgeslagen via localStorage met de sleutel ‘onespec-theme’. Het is een technisch gegeven dat het apparaat niet verlaat.",
        ],
      },
      {
        h: "Uitnodigingscode (lokale opslag)",
        p: [
          "Als u via een uitnodigingslink (met ‘?ref=…’) op OneSpec komt, wordt de uitnodigingscode in de browser opgeslagen via localStorage met de sleutel ‘onespec-ref’ gedurende 30 dagen, uitsluitend om uw registratie te koppelen aan wie u heeft uitgenodigd. Het is geen cookie, bevat geen persoonsgegevens en wordt niet naar derden verzonden; u kunt het op elk moment verwijderen door de sitegegevens te wissen.",
        ],
      },
      {
        h: "Botcontrole (Cloudflare Turnstile)",
        p: [
          "De formulieren voor inloggen, registreren, wachtwoordherstel en ‘Contact’, en het verzenden van offertes via de widget, gebruiken Cloudflare Turnstile om te controleren dat een mens ze invult. Het is een strikt noodzakelijke beveiligingsmaatregel waarvoor geen toestemming nodig is; ze wordt niet gebruikt voor reclame of om gebruikers te profileren.",
        ],
      },
      {
        h: "Prestatiemeting",
        p: [
          "De prestaties van de pagina's worden gemeten met Vercel Speed Insights, dat geen cookies gebruikt en geen individuele gebruikers volgt.",
        ],
      },
      {
        h: "Bezoekstatistieken (na voorafgaande toestemming)",
        p: [
          "Op de website onespec.eu en op het platform gebruiken we Vercel Web Analytics om bezochte pagina's geaggregeerd te tellen (pagina, land, type apparaat en browser). Het gebruikt geen cookies, maakt geen profielen en kan u niet van de ene dag op de andere herkennen; vóór verzending verwijderen we uit de paginaadressen de parameters en de codes van privélinks.",
          "Het wordt alleen ingeschakeld als u de optionele tools in de cookiebanner accepteert; zolang u niet accepteert, of als u weigert, wordt niets verzonden. U kunt op elk moment van gedachten veranderen: op de website via de link ‘Cookievoorkeuren’ onderaan de pagina.",
        ],
      },
      {
        h: "Vastlegging van uw cookiekeuze",
        p: [
          "Uw keuze in de banner (accepteren / weigeren) wordt in de browser opgeslagen via localStorage, met de sleutel ‘onespec-cookie-consent’ op het platform en ‘onespec-site-consent’ op de website, zodat we het niet bij elk bezoek opnieuw vragen. Het is een technisch gegeven dat het apparaat niet verlaat.",
        ],
      },
      {
        h: "Analyse en sessie-opname (na voorafgaande toestemming)",
        p: [
          "We gebruiken PostHog voor productanalyse en sessie-opname (klikken, scrollen, navigatiepad) en Sentry Replay om visueel terug te zien wat een technische fout veroorzaakte — beide dienen om storingen van het platform op te sporen en te verhelpen. In formuliervelden getypte waarden blijven in de opname altijd afgeschermd.",
          "Deze tools worden niet automatisch ingeschakeld: bij het eerste bezoek vraagt een banner om toestemming; zolang die niet is gegeven, verzamelen deze tools geen navigatiegegevens. Het loutere technisch melden van fouten (zonder visuele opname of navigatiegegevens) blijft daarentegen altijd actief, als veiligheids- en stabiliteitsmaatregel van de dienst.",
          "Er worden geen advertentie- of commerciële profileringscookies van derden gebruikt.",
        ],
      },
      CONTACT,
    ],
  },
  gdpr: {
    title: "Rechten van betrokkenen (AVG)",
    summary: "Hoe u inzage, overdraagbaarheid, rectificatie, wissing en bezwaar uitoefent.",
    sections: [
      IDENTITY,
      RIGHTS,
      {
        h: "Hoe u uw rechten uitoefent",
        p: [
          "Via de pagina Account: gegevensexport (JSON, inclusief supporttickets en ‘Contact’-berichten), profiel bijwerken, toestemmingen beheren, verwijdering aanvragen.",
          "Per e-mail naar hello@onespec.eu voor verzoeken die u niet zelf kunt afhandelen. We antwoorden binnen een maand, te verlengen met twee maanden voor complexe verzoeken.",
        ],
      },
      {
        h: "Geautomatiseerde verwerking",
        p: [
          "De berekening van de indicatieve prijs en de controles tegen misbruik (frequentiebeperking, botcontrole, spamscore) zijn geautomatiseerd, maar hebben geen rechtsgevolgen voor de betrokkene. Commerciële beslissingen over de aanvraag blijven bij de organisatie.",
        ],
      },
      CONTACT,
    ],
  },
  sicurezza: {
    title: "Beveiliging en controles",
    summary: "De technische en organisatorische maatregelen die daadwerkelijk zijn genomen.",
    sections: [
      {
        h: "Bescherming van gegevens tijdens transport en in rust",
        p: [
          "Alle communicatie verloopt via TLS. Gegevens in rust worden versleuteld door de infrastructuurleveranciers (Convex, Vercel).",
          "Details over sleutels en het beheer van versleuteling in rust: gegevens in rust worden door de infrastructuurleveranciers versleuteld met gangbare algoritmen (AES-256) en de sleutels worden door hen beheerd; OneSpec heeft geen toegang tot de sleutels en bewaart er geen kopie van.",
        ],
      },
      {
        h: "Toegangscontrole",
        p: [
          "Rolgebaseerde toegang (eigenaar, beheerder, lid) met controle aan serverzijde bij elke bewerking. Elk gevoelig record is gekoppeld aan de organisatie en query's zijn per organisatie geïsoleerd.",
          "Eén enkele platform-superbeheerder wordt bepaald via een lijst van e-mailadressen in een omgevingsvariabele.",
          "Sessiebeheer met de mogelijkheid om afzonderlijke apparaten in te trekken en op alle apparaten uit te loggen.",
        ],
      },
      {
        h: "Geheimen en configuratie",
        p: [
          "Sleutels en geheimen worden beheerd via omgevingsvariabelen van het deploymentplatform en staan niet in de code, logs of foutmeldingen.",
        ],
      },
      {
        h: "Beveiligingsheaders",
        p: [
          "De applicatie past HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy en een Content-Security-Policy toe die het insluiten van de beveiligde omgeving verbiedt. De widget gebruikt een eigen CSP met de lijst van per organisatie toegestane domeinen.",
        ],
      },
      {
        h: "Frequentiebeperking en misbruikpreventie",
        p: [
          "Limieten gelden voor: inloggen, het verzenden van offertes via de widget (per IP en per configurator), gegevensexports. Botcontrole met Cloudflare Turnstile bij verzendingen via de widget.",
        ],
      },
      {
        h: "Activiteitenlogboek",
        p: [
          "Administratieve handelingen en gevoelige bewerkingen (publicatie van catalogi, statuswijzigingen, exports, verwijderingsverzoeken) worden vastgelegd met actor, object en tijdstip.",
        ],
      },
      {
        h: "Back-up en continuïteit",
        p: [
          "Back-ups en herstel worden beheerd door de databaseleverancier. Back-upbeleid, RPO/RTO-doelstellingen en periodieke hersteltests: de leverancier maakt back-ups van de infrastructuur en OneSpec kan de gegevens exporteren; contractuele RPO/RTO-doelstellingen worden momenteel niet gegarandeerd; ze worden periodiek gecontroleerd en op verzoek meegedeeld.",
        ],
      },
      {
        h: "Beheer van kwetsbaarheden en reactie op incidenten",
        p: [
          "Scannen van afhankelijkheden en geheimen, updates en beveiligingsreview vóór releases.",
          "Draaiboek voor incidenten en meldingstermijnen: bij een inbreuk in verband met persoonsgegevens start OneSpec de interne procedure voor beperking en analyse en informeert de Klant zonder onredelijke vertraging en in elk geval binnen 72 uur na ontdekking, zodat hij aan de verplichtingen van art. 33 AVG kan voldoen.",
          "Voor beveiligingsmeldingen: hello@onespec.eu.",
        ],
      },
      CONTACT,
    ],
  },
  "regolamento-inviti": {
    title: "Reglement van het uitnodigingsprogramma",
    summary: "Hoe beloningen, kortingen, betalingen en controles van het programma ‘Uitnodigen en besparen’ werken.",
    sections: [
      {
        h: "Wat het programma is",
        p: [
          "Met het programma ‘Uitnodigen en besparen’ kan een klantorganisatie van OneSpec (de ‘uitnodiger’) een ander bedrijf (de ‘genodigde’) uitnodigen via haar persoonlijke code of link. Het programma is een commercieel initiatief van OneSpec, kan op elk moment worden geactiveerd, gewijzigd of opgeschort en is uitsluitend bedoeld voor professionele klanten (B2B).",
          "Versie van het reglement: van kracht sinds 19 oktober 2026, goedgekeurd door de bestuurder van CORE829 SRL; latere wijzigingen worden op deze pagina gepubliceerd met de nieuwe datum en gelden niet voor reeds verdiende beloningen.",
        ],
      },
      {
        h: "Voordelen",
        p: [
          "De genodigde krijgt 10% korting op de eerste factuur van het betaalde abonnement, berekend op de catalogusprijs van het gekozen abonnement en de gekozen cyclus. De korting is niet te combineren met promotiecodes.",
          "De uitnodiger krijgt een beloning van 10% van de catalogusprijs, exclusief btw, van het abonnement en de factuurcyclus die de genodigde daadwerkelijk koopt (jaarlijks wordt berekend als tien maandbedragen). De beloning is voor elk uitgenodigd account maar één keer verschuldigd.",
          "Het commercieel beheerde Enterprise-abonnement is uitgesloten van het automatische programma.",
        ],
      },
      {
        h: "Wanneer de beloning wordt verdiend",
        p: [
          "De beloning wordt pas verdiend na de eerste echte betaling van de genodigde en na 30 dagen, op voorwaarde dat de betaling intussen niet is terugbetaald of betwist en dat het abonnement van de genodigde in orde is.",
          "Een betaling die met een promotiecode is verlaagd, telt niet als eerste echte betaling: de beloning wordt verdiend vanaf de eerstvolgende betaling zonder promotiecode (zie «Promotiecodes» in de Servicevoorwaarden).",
          "Elke uitnodiger kan maximaal 10 beloningen ontvangen in 12 opeenvolgende maanden. Als de uitnodiger binnen 90 dagen na het einde van de wachtperiode niet in aanmerking komt, vervalt de uitnodiging zonder beloning.",
        ],
      },
      {
        h: "Hoe de beloning wordt uitbetaald",
        p: [
          "De eigenaar van de organisatie kiest tussen twee manieren: tegoed op het Stripe-saldo, dat de volgende facturen van OneSpec verlaagt, of een overschrijving in geld via Stripe Connect naar de rekening die de uitnodiger heeft gekoppeld. Uitbetaling in geld vereist het voltooien van de identiteitsverificatie die Stripe vraagt.",
          "Tegoed kan niet in geld worden omgezet: het is een korting op de OneSpec-abonnementen van de uitnodiger, afgetrokken van de volgende facturen van CORE829 SRL, en er zijn geen documenten voor nodig.",
          "De beloning in geld is de vergoeding voor een commerciële aanbrengdienst die de uitnodiger aan CORE829 SRL levert. Wanneer ze verdiend is, vraagt OneSpec de uitnodiger per e-mail: (a) de factuur voor de beloning op naam van CORE829 SRL, Str. Mihai Eminescu 10, Roman, România, CUI/CIF RO54616345; (b) als de uitnodiger niet in Roemenië gevestigd is, het fiscaal woonplaatsattest afgegeven door de belastingdienst van zijn land en geldig voor het jaar van betaling. De documenten worden gestuurd naar office@core829.net; de overschrijving vertrekt pas na controle ervan.",
          "Btw: als de uitnodiger in een andere EU-lidstaat gevestigd is, wordt de dienst geacht in Roemenië te zijn verricht en wordt de factuur zonder btw uitgereikt, met vermelding van de verlegging (‘reverse charge’, artikelen 44 en 196 van Richtlijn 2006/112/EG); de belasting wordt voldaan door CORE829 SRL. Als de uitnodiger in Roemenië gevestigd is en voor btw geregistreerd, vermeldt de factuur Roemeense btw; zo niet, wordt ze zonder btw uitgereikt. Als de uitnodiger buiten de EU gevestigd is, volgt de factuur de regels van zijn land. In alle gevallen is het zoals hierboven berekende bedrag van de beloning het totaal dat CORE829 SRL betaalt, inclusief eventuele btw die de uitnodiger moet aanrekenen.",
          "Bronheffing: voor aanbrengvergoedingen aan niet-ingezeten vennootschappen voorziet de Roemeense wet in een bronheffing (artikel 223 van het Roemeense belastingwetboek, momenteel 16%), die niet van toepassing is of wordt verlaagd op grond van het belastingverdrag tussen Roemenië en het land van de uitnodiger, als die het fiscaal woonplaatsattest voorlegt. Zonder geldig attest doet OneSpec de overschrijving niet; de uitnodiger kan altijd voor tegoed kiezen.",
          "Inkomstenbelasting: de beloning is een bedrijfsinkomen van de uitnodiger en moet worden aangegeven volgens de regels van zijn land. OneSpec geeft geen fiscaal advies: voor zijn eigen situatie raadpleegt de uitnodiger zijn eigen adviseur.",
          "Termijnen: de overschrijving gebeurt binnen 30 dagen na controle van de documenten. Als de volledige documenten niet binnen 90 dagen na het einde van de wachtperiode binnenkomen, vervalt de beloning in geld; tot die datum kan de uitnodiger overstappen op tegoed, dat zonder documenten wordt toegekend.",
        ],
      },
      {
        h: "Intrekking van de beloning",
        p: [
          "Als de genodigde binnen 60 dagen na de kwalificerende betaling een terugbetaling krijgt of een betwisting opent, wordt de reeds toegekende beloning ingetrokken: het tegoed wordt van het Stripe-saldo teruggeboekt of de overschrijving wordt geannuleerd via terugboeking van de transfer. Als de beloning in geld al gefactureerd was, reikt de uitnodiger de bijbehorende creditnota uit.",
        ],
      },
      {
        h: "Controles en misbruik",
        p: [
          "Niet toegestaan zijn: zelfuitnodigingen, uitnodigingen tussen bedrijven van dezelfde groep of met hetzelfde bedrijfsdomein, tijdelijke e-mailadressen, accounts die alleen zijn aangemaakt om de beloning te krijgen en het gebruik van dezelfde kaart of dezelfde betaalklant door uitnodiger en genodigde.",
          "Uitnodigingen die deze regels niet naleven, worden geweigerd, en OneSpec kan de code van een uitnodiger opschorten en onrechtmatig verkregen beloningen annuleren. Bij het toepassen van de controles verwerkt OneSpec het e-mailadres van de eigenaars en de Stripe-betaalidentificator uitsluitend om misbruik te voorkomen.",
        ],
      },
      {
        h: "Vertrouwelijkheid van de genodigde",
        p: [
          "De uitnodiger ziet de naam van het uitgenodigde bedrijf in gemaskeerde vorm (bijvoorbeeld ‘Se*** Srl’) en de status van de uitnodiging, zonder andere gegevens over de genodigde.",
        ],
      },
      CONTACT,
    ],
  },
  qualita: {
    title: "Kwaliteit en certificeringen",
    summary: "Register van de certificeringen en attesten die daadwerkelijk worden bezeten.",
    sections: [
      {
        h: "Status",
        p: [
          "Op de datum van herziening claimt OneSpec geen certificeringen van derden (bijvoorbeeld ISO/IEC 27001), tenzij ze hieronder uitdrukkelijk zijn vermeld. Geen enkele certificering wordt geclaimd zonder verifieerbaar attest.",
        ],
      },
      {
        h: "Bezeten certificeringen en attesten",
        p: [
          "Op de datum van herziening wordt geen certificering van derden bezeten. Deze sectie wordt bijgewerkt zodra, en alleen als, een certificering daadwerkelijk wordt behaald.",
        ],
      },
      {
        h: "Wettelijke conformiteit van prijzen per regio",
        p: [
          "Regionale regels over de prijsaanduiding aan consumenten (modus ‘leadgeneratie / indicatieve bandbreedte’ voor IT/FR/BE/DE/LU, modus met transparantere prijzen voor NL bij de toegestane abonnementen) worden beheerd als configureerbare regels met geldigheidsdatum en bron.",
          "Specifieke wettelijke verwijzingen en data van bijwerking: Verordening (EU) 2016/679 (AVG); Richtlijn 2002/58/EG (ePrivacy); Richtlijn 98/6/EG inzake prijsaanduiding; Richtlijn 2005/29/EG betreffende oneerlijke handelspraktijken; voor de Italiaanse markt wetsbesluit 196/2003, wetsbesluit 206/2005 (consumentenwetboek) en de regels over fiscale aftrek voor energetische renovatie; de regels van elk land worden bij elke update van de dienst herzien en met datum en bron vermeld in de instellingen van de configurator.",
        ],
      },
      CONTACT,
    ],
  },
};
