import type { LegalI18nSet } from "./types";

const IDENTITY = {
  h: "Operatorul de date",
  p: [
    "OneSpec este un produs digital al CORE829 SRL, care îl administrează de la sediul social din Str. Mihai Eminescu, 10, Roman, România, CUI/CIF RO54616345 — Reg. com. J2026029428009, telefon +40 766 668 482 (România) · +39 375 946 8881 (Italia), PEC (e-mail certificat italian): nu se aplică — CORE829 SRL este o societate de drept român, pentru care acest sistem nu există.",
    "Pentru orice solicitare privind datele cu caracter personal puteți scrie la hello@onespec.eu. Nu a fost desemnat un responsabil cu protecția datelor (DPO); datele de contact ale DPO: nu se aplică — niciun DPO desemnat la data revizuirii.",
  ],
};

const RIGHTS = {
  h: "Drepturile persoanei vizate",
  p: [
    "În calitate de persoană vizată, puteți exercita drepturile prevăzute de art. 15–22 GDPR: acces, rectificare, ștergere, restricționare, portabilitate, opoziție și retragerea consimțământului.",
    "Acces și portabilitate: din pagina Cont puteți descărca oricând o copie a datelor dumneavoastră în format JSON; exportul include și tichetele de asistență deschise de dumneavoastră (cu răspunsurile echipei noastre și numele fișierelor atașate) și mesajele trimise din pagina „Contactați-ne” cu adresa dumneavoastră de e-mail. Exportul include și notele interne de lucru ale tichetelor dumneavoastră, în limitele prevăzute de lege (sunt excluse informațiile care privesc alte persoane sau care ar încălca drepturile altora). Datele tehnice de securitate (de exemplu adresa IP, păstrată doar sub formă de hash) sunt date cu caracter personal pseudonimizate și pot fi solicitate la hello@onespec.eu.",
    "Ștergere: din pagina Cont puteți cere ștergerea contului; cererea este executată după o perioadă de reflecție de 30 de zile, cu excepția obligațiilor de păstrare. Odată cu contul sunt șterse și tichetele de asistență deschise de dumneavoastră, mesajele, notele interne și atașamentele aferente, precum și mesajele trimise din pagina „Contactați-ne” cu e-mailul dumneavoastră.",
    "Plângere: puteți depune o plângere la autoritatea de supraveghere dacă considerați că prelucrarea încalcă legislația. Deoarece operatorul are sediul în România, autoritatea principală este Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP, dataprotection.ro); vă puteți adresa în orice caz autorității din țara în care locuiți sau lucrați (pentru Italia, Garante per la protezione dei dati personali).",
  ],
};

const CONTACT = {
  h: "Contact pentru aspecte juridice și contractuale",
  p: [
    "Pentru aspecte contractuale, contestații sau comunicări juridice privind prezentul document: office@core829.net.",
    "Pentru solicitări comerciale: sales@core829.net. Pentru asistență privind serviciul și solicitări de planuri Enterprise personalizate: hello@onespec.eu.",
  ],
};

export const RO: LegalI18nSet = {
  privacy: {
    title: "Politica de confidențialitate",
    summary: "Ce date cu caracter personal prelucrăm, de ce și pentru cât timp.",
    sections: [
      IDENTITY,
      {
        h: "Date prelucrate",
        p: [
          "Cont: nume, adresă de e-mail, limba preferată, țara (dedusă la înregistrare din rețea sau din limba browserului), data nașterii (cerută la înregistrare doar pentru a verifica majoratul), data înregistrării, starea de verificare a e-mailului.",
          "Verificare în doi pași (opțională): dacă o activați, păstrăm secretul aplicației de autentificare în formă criptată, amprenta (hash) codurilor de recuperare și numărul de încercări greșite; nu păstrăm codurile unice generate de aplicația dumneavoastră.",
          "Organizație: denumire, cod de TVA, adresă, telefon și e-mail introduse de utilizator în setările de branding.",
          "Cereri de ofertă generate de widget: nume, e-mail, telefon, firmă și mesajul clientului potențial, împreună cu configurația tehnică aleasă și prețul orientativ calculat.",
          "Date tehnice ale widgetului: hash al adresei IP (IP-ul în clar nu este păstrat), user agent, rezultatul verificării anti-bot, scorul anti-spam.",
          "Asistență: subiectul, textul și atașamentele (imagini sau PDF) ale tichetelor pe care le deschideți din platformă, categoria, starea, eventuala evaluare de la 1 la 5, răspunsurile echipei noastre și notele interne de lucru (nevizibile pentru dumneavoastră).",
          "Pagina „Contactați-ne” (pentru cine nu se poate autentifica): numele, adresa de e-mail și mesajul introduse, subiectul ales, limba și hash-ul adresei IP (IP-ul în clar nu este păstrat), folosit pentru limitarea abuzurilor.",
          "Registrul de activitate (audit log) al acțiunilor administrative și al operațiunilor sensibile, inclusiv acțiunile pe tichete (identificatori și tipul acțiunii, fără textul mesajelor).",
        ],
      },
      {
        h: "Scopuri și temeiuri juridice",
        p: [
          "Furnizarea serviciului și gestionarea contului — executarea contractului (art. 6 alin. 1 lit. b GDPR).",
          "Asistență prin tichete — executarea contractului (art. 6 alin. 1 lit. b). Răspunsul la mesajele trimise din pagina „Contactați-ne” de persoane fără cont — măsuri precontractuale sau contractuale luate la cererea persoanei vizate (art. 6 alin. 1 lit. b) și, pentru solicitările necontractuale, interes legitim de a răspunde (art. 6 alin. 1 lit. f).",
          "Securitate, prevenirea abuzurilor, limitarea frecvenței și audit (inclusiv pe pagina „Contactați-ne” și pe tichete) — interes legitim (art. 6 alin. 1 lit. f).",
          "E-mailurile despre tichete (răspuns nou, tichet rezolvat) sunt comunicări de serviciu legate de solicitarea dumneavoastră, nu comunicări comerciale; le puteți dezactiva din preferințele de notificare.",
          "Trimiterea de comunicări despre produs și comerciale — consimțământ (art. 6 alin. 1 lit. a), care poate fi retras din pagina Cont.",
          "Obligații fiscale și contabile legate de abonamentele plătite — obligație legală (art. 6 alin. 1 lit. c).",
        ],
      },
      {
        h: "Păstrare",
        p: [
          "Datele contului: pe toată durata relației și șterse în 30 de zile de la cererea de ștergere.",
          "Cererile de ofertă, registrul de activitate și jurnalele de securitate: păstrate cât timp organizația este activă pe platformă; în prezent nu există o ștergere automată programată a acestor date, care sunt șterse la cerere conform procedurii descrise în secțiunea „Drepturile persoanei vizate”.",
          "Tichete de asistență: tichetele închise sunt șterse automat, cu mesaje, note interne și atașamente, la 730 de zile (24 de luni) după ultima activitate; tichetele rezolvate fără alte răspunsuri se închid singure după 7 zile; fișierele încărcate dar netrimise sunt șterse după 24 de ore. Această perioadă servește la gestionarea eventualelor contestații privind asistența oferită și la apărarea unui drept în instanță.",
          "Mesajele din pagina „Contactați-ne”: șterse la 90 de zile după ce au fost gestionate și în orice caz în 365 de zile de la primire.",
          "Notificări în aplicație: 365 de zile. Registrul e-mailurilor de serviciu trimise: 90 de zile.",
          "La ștergerea contului ștergem și tichetele, mesajele, notele interne și atașamentele deschise de dumneavoastră și mesajele „Contactați-ne” trimise cu e-mailul dumneavoastră; în registrul de activitate rămân doar identificatorii și tipul acțiunii, fără text.",
          "Documente fiscale aferente abonamentelor plătite: pe perioada prevăzută de normele fiscale și contabile aplicabile la sediul operatorului.",
        ],
      },
      {
        h: "Asistență și tichete: cine ce vede",
        p: [
          "Un tichet este vizibil persoanei care l-a deschis, proprietarilor și administratorilor organizației sale pe platformă și personalului de asistență OneSpec autorizat în mod expres și obligat la confidențialitate. Fiecare deschidere a unui atașament de către personalul nostru este înregistrată. Înainte de a fi puse la dispoziție, atașamentele trec printr-un control automat de securitate (detectarea conținutului dăunător și semnătură de integritate); fișierele respinse nu sunt păstrate. Este un control intern, nu un serviciu antivirus al unei terțe părți. Notele interne ale echipei nu sunt vizibile clientului.",
          "Pentru datele dumneavoastră de contact și pentru gestionarea asistenței, OneSpec acționează ca operator. Dacă însă introduceți în tichet date cu caracter personal ale unor terți (de exemplu clienții organizației dumneavoastră), OneSpec le prelucrează ca persoană împuternicită, în numele organizației dumneavoastră, conform acordului de prelucrare a datelor (DPA) și doar pentru a rezolva solicitarea. Introduceți doar datele strict necesare.",
          "Nu trimiteți niciodată parole, coduri de verificare, date ale cardurilor de plată, categorii speciale de date cu caracter personal (art. 9 GDPR, de exemplu date privind sănătatea) sau documente de identitate: nu sunt necesare pentru asistență.",
        ],
      },
      {
        h: "Furnizori și subîmputerniciți",
        p: [
          "OneSpec se bazează pe următorii furnizori, care prelucrează date în numele operatorului pe baza unor acorduri conform art. 28 GDPR:",
          "• Convex (Convex, Inc.) — bază de date, backend aplicativ și stocarea fișierelor atașate la tichetele de asistență. Locația datelor: Statele Unite ale Americii.",
          "• Stripe (Stripe Payments Europe, Ltd.) — gestionarea abonamentelor și a plăților; datele cardului sunt prelucrate direct de Stripe și nici nu trec prin OneSpec, nici nu sunt păstrate de aceasta.",
          "• Resend (Resend, Inc.) — trimiterea e-mailurilor tranzacționale (coduri de verificare, notificări de ofertă, alerte privind tichetele de asistență; acestea din urmă nu conțin textul mesajelor).",
          "• Cloudflare Turnstile (Cloudflare, Inc.) — verificare anti-bot la trimiterea ofertelor din widget și la formularele de autentificare, înregistrare, recuperare a parolei și „Contactați-ne”.",
          "• Vercel (Vercel, Inc.) — găzduirea aplicației web și a site-ului, măsurarea performanței (Speed Insights, fără cookie-uri) și statistici agregate de vizite (Web Analytics, fără cookie-uri, doar cu consimțământ prealabil).",
          "• PostHog (PostHog Inc.) — analiza produsului și înregistrarea sesiunii (clicuri, derulare, navigare) pentru a identifica și corecta defecțiuni; valorile tastate în câmpurile formularelor rămân mascate. Activ doar după consimțământul explicit prin bannerul de cookie-uri.",
          "• Sentry (Functional Software, Inc.) — detectarea erorilor tehnice; înregistrarea vizuală a sesiunii (Session Replay) este activă doar după același consimțământ, iar simpla raportare a erorilor rămâne mereu activă pentru a asigura securitatea și stabilitatea serviciului.",
          "Eventualele transferuri către țări terțe au loc pe baza clauzelor contractuale standard ale Comisiei Europene. Lista actualizată a subîmputerniciților și detaliile acestora este disponibilă la cerere la hello@onespec.eu.",
        ],
      },
      RIGHTS,
      {
        h: "Modificări",
        p: [
          "Eventualele actualizări ale politicii sunt publicate pe această pagină cu noua dată a revizuirii. Modificările substanțiale sunt comunicate și prin e-mail utilizatorilor înregistrați.",
        ],
      },
      CONTACT,
    ],
  },
  "termini-di-servizio": {
    title: "Termenii serviciului",
    summary: "Condițiile contractuale dintre OneSpec și organizația client.",
    sections: [
      {
        h: "Obiect",
        p: [
          "Prezenții Termeni reglementează utilizarea platformei OneSpec de către organizația client („Clientul”) și de persoanele autorizate de aceasta.",
          "OneSpec este un produs digital al CORE829 SRL, care este furnizorul și titularul contractelor, al facturării și al plăților (gestionate prin Stripe). În prezenții Termeni, „OneSpec” desemnează serviciul și echipa sa.",
        ],
      },
      {
        h: "Cont și înregistrare",
        p: [
          "Accesul necesită crearea unui cont și verificarea adresei de e-mail.",
          "Înregistrările noi pot fi deschise sau suspendate de OneSpec. Fiecare organizație accesează serviciul cu planul plătit ales, în condițiile indicate la momentul aderării.",
        ],
      },
      {
        h: "Planuri și prețuri",
        p: [
          "OneSpec oferă două familii de abonamente: planurile „Oferte online” (Level 1, Level 2, Level 3), dedicate configuratorului care poate fi publicat pe site-ul Clientului și, unde este inclus, configuratorului Showroom; și planurile „Platformă completă” (Base, Pro, Agency, Enterprise), care includ și modulele de gestionare a lucrărilor. Clientul alege liber familia și planul și poate trece de la una la alta oricând din secțiunea „Plan și facturare”.",
          "Planurile, limitele și prețurile în vigoare sunt cele publicate pe pagina de prețuri la momentul subscrierii. Prețurile sunt indicate fără TVA, care se aplică pe factură conform legislației în vigoare.",
          "Condiții economice detaliate, facturare, taxe aplicabile și modalități de plată: prețurile sunt cele indicate pe pagina Planuri și la momentul cumpărării în checkout; abonamentul se reînnoiește automat lunar sau anual și poate fi anulat oricând din pagina Facturare, cu efect la sfârșitul perioadei deja plătite; plățile sunt gestionate de Stripe; taxele aplicabile sunt calculate și indicate în checkout conform legislației în vigoare; în caz de neplată, accesul poate fi suspendat după somațiile prevăzute de serviciu.",
          "Neplata poate duce la suspendarea accesului după o notificare prealabilă.",
        ],
      },
      {
        h: "Planurile „Oferte online” (Level 1, Level 2, Level 3)",
        p: [
          "Planurile Level sunt facturate exclusiv lunar, nu prevăd o perioadă de probă gratuită și pot fi anulate oricând cu efect de la sfârșitul perioadei deja plătite.",
          "Fiecare plan Level include, pentru fiecare lună calendaristică, un număr maxim de: cereri de ofertă primite prin configuratorul public; documente PDF descărcabile de Client; trimiteri prin WhatsApp efectuate de Client din aplicație; și, unde este prevăzut, oferte, documente și trimiteri WhatsApp ale configuratorului Showroom. Include de asemenea un număr maxim de configuratoare și de utilizatori. Valorile fiecărui plan sunt cele publicate pe pagina de prețuri; Level 2 și Level 3 prevăd de două, respectiv de cinci ori limitele lunare ale Level 1.",
          "Un document PDF sau o trimitere WhatsApp aferentă aceleiași cereri sau aceleiași oferte se numără o singură dată: descărcarea sau trimiterea ei din nou nu consumă unități suplimentare. Contoarele se resetează în prima zi a fiecărei luni calendaristice.",
          "Cererile primite peste limita lunară nu se pierd: sunt înregistrate, dar datele de contact ale solicitantului devin vizibile Clientului doar după trecerea la un plan superior sau din prima zi a lunii următoare. Odată atinsă limita lunară de PDF-uri sau de trimiteri WhatsApp, funcțiile respective redevin disponibile din luna următoare sau cu un plan superior.",
          "Modulele neincluse în planurile Level (printre care oferte B2B cu semnătură, clienți și tranzacții, șantiere, măsurători, montaj, recepții, dosare QR, statistici și, în funcție de plan, Showroom și logistică) rămân vizibile, dar nu pot fi utilizate. Mențiunea „Powered by OneSpec” este afișată în configuratorul planului Level 1; planurile Level 2 și Level 3 includ personalizarea cu marca Clientului (white-label).",
          "Limitele măsoară utilizarea funcțiilor aplicației; Clientul se obligă să nu le eludeze prin mijloace tehnice (vezi „Utilizare acceptabilă”).",
        ],
      },
      {
        h: "Schimbarea planului, anularea și suspendarea",
        p: [
          "Trecerea la un plan superior are efect imediat: noile limite se aplică imediat, iar cererile înregistrate peste limita lunii în curs devin vizibile. Trecerea la un plan inferior sau de la un plan „Platformă completă” la un plan Level nu presupune ștergerea datelor: modulele neincluse în noul plan devin temporar inutilizabile și redevin disponibile cu un plan care le include.",
          "Trecerea la un plan cu mai puțini utilizatori decât utilizatorii activi ai Clientului este posibilă doar după eliminarea utilizatorilor în exces. Dacă Clientul are mai multe configuratoare publicate decât prevede noul plan Level, rămân accesibile publicului doar cele mai vechi configuratoare în limita planului.",
          "În caz de anulare sau suspendare a abonamentului, pentru orice plan, configuratorul public încetează să fie disponibil vizitatorilor la sfârșitul perioadei plătite. Eventualele cereri primite în timpul suspendării sunt înregistrate, dar datele lor de contact devin vizibile doar la reactivarea abonamentului.",
        ],
      },
      {
        h: "Rambursări",
        p: [
          "OneSpec este un produs digital furnizat prin abonament (lunar sau anual): accesul la platformă și la funcțiile sale este pus la dispoziția Clientului imediat la momentul plății sau al reînnoirii. Din acest motiv, cu excepția celor prevăzute imperativ de legea aplicabilă, sumele plătite nu sunt rambursabile, nici în totalitate, nici parțial, inclusiv în cazul neutilizării serviciului în perioada deja plătită.",
          "În cazul trecerii la un plan inferior (downgrade), eventuala diferență în favoarea Clientului acumulată pe perioada deja plătită nu se rambursează în bani, ci rămâne disponibilă ca credit pe platformă, aplicat automat la următoarea reînnoire sau debitare — consultabil oricând în secțiunea „Plan și facturare” a contului.",
          "Anularea abonamentului (oprirea reînnoirii) nu dă dreptul la rambursarea sumei deja plătite pentru perioada în curs: accesul rămâne activ până la sfârșitul acelei perioade, așa cum este indicat la momentul anulării.",
          "Rămân neafectate eventualele drepturi imperative prevăzute de legea aplicabilă pentru cazurile de nefurnizare a serviciului imputabilă OneSpec.",
        ],
      },
      {
        h: "Utilizare acceptabilă",
        p: [
          "Clientul se obligă să nu utilizeze serviciul pentru activități ilicite, să nu încerce să eludeze limitele tehnice, de securitate sau limitele de utilizare ale planului său și să nu încarce conținut asupra căruia nu deține drepturi. Clientul păstrează în siguranță datele de autentificare și codurile de recuperare ale verificării în doi pași, pe care vă recomandăm să o activați pentru toate persoanele cu acces la platformă.",
          "Clientul este responsabil pentru conținutul, listele de prețuri și datele pe care le introduce și pentru conformitatea acestora cu legislația aplicabilă.",
        ],
      },
      {
        h: "Asistență",
        p: [
          "Asistența este oferită prin tichetele din secțiunea „Suport” a platformei și, pentru cine nu se poate autentifica, prin pagina „Contactați-ne”. Personalul OneSpec răspunde în zilele lucrătoare.",
          "Timpii de primă răspuns și de rezolvare pe care OneSpec și-i propune sunt obiective interne, nu garanții sau niveluri de serviciu obligatorii, cu excepția unui acord scris diferit cu Clientul Enterprise (vezi „Limitarea răspunderii” și condițiile de disponibilitate convenite).",
          "În tichete, Clientul se obligă să nu introducă parole, coduri de verificare, date ale cardurilor de plată sau date cu caracter personal inutile, să nu atașeze conținut ilicit, ofensator sau asupra căruia nu deține drepturi și să folosească doar atașamentele permise (imagini PNG, JPG, WebP și PDF, până la 3 fișiere pe mesaj și 8 MB fiecare). OneSpec poate elimina conținutul neconform și poate închide tichetele care abuzează de serviciu. Atașamentele sunt verificate automat, iar cele care nu trec controlul de securitate sunt respinse.",
          "Un tichet rezolvat fără alte răspunsuri se închide automat după 7 zile; tichetele închise și atașamentele lor sunt șterse conform termenelor indicate în politica de confidențialitate.",
        ],
      },
      {
        h: "Prețurile orientative ale configuratorului",
        p: [
          "Prețurile afișate de widget sunt estimări orientative calculate pe baza listelor de prețuri furnizate de Client și nu constituie o ofertă contractuală către consumatorul final, cu excepția unei setări diferite permise de reglementările locale.",
        ],
      },
      {
        h: "Limitarea răspunderii",
        p: [
          "Serviciul este furnizat „ca atare”. În limitele permise de lege, răspunderea OneSpec este limitată la suma plătită de Client către OneSpec în cele douăsprezece luni anterioare evenimentului care a cauzat prejudiciul, excluzând în orice caz pierderile indirecte (beneficiu nerealizat, pierderea clienților sau a datelor neimputabilă OneSpec); rămân neafectate răspunderile pe care legea nu permite limitarea lor (dol, culpă gravă, vătămări corporale).",
          "Rămân neafectate drepturile imperative ale Clientului consumator, acolo unde se aplică.",
        ],
      },
      {
        h: "Durată, retragere și legea aplicabilă",
        p: [
          "Contractul are o durată egală cu perioada abonamentului și se reînnoiește, cu excepția anulării.",
          "Portabilitate și schimbarea furnizorului (Regulamentul (UE) 2023/2854, „Data Act”): oricând, inclusiv după anulare și timp de cel puțin 30 de zile, Clientul își poate exporta datele din pagina Cont într-un format structurat (JSON) sau poate solicita asistență pentru migrarea către alt furnizor scriind la hello@onespec.eu; după această perioadă datele sunt șterse conform politicii de confidențialitate.",
          "Fiind vorba de un serviciu prin abonament destinat unei organizații profesionale, dreptul de retragere prevăzut de Codul italian al consumului pentru contractele la distanță cu consumatorii nu se aplică. Chiar dacă s-ar aplica, acest drept s-ar pierde în orice caz pentru furnizarea de conținut digital care nu este livrat pe un suport material și a cărui executare a început cu acordul expres al Clientului, cu renunțarea la dreptul de retragere, la activarea abonamentului (art. 59 lit. o, Decretul legislativ italian 206/2005).",
          "Relația este guvernată de legea română (cu aplicarea imperativă a normelor UE, în special a GDPR), cu excluderea Convenției de la Viena privind vânzarea internațională de mărfuri. Instanța competentă: instanțele competente din Roman / Neamț (România), sediul social al CORE829 SRL, fără a aduce atingere competenței imperative a consumatorului, acolo unde se aplică.",
        ],
      },
      CONTACT,
    ],
  },
  "termini-di-utilizzo": {
    title: "Termeni de utilizare",
    summary: "Reguli de utilizare a aplicației web și a widgetului care poate fi încorporat.",
    sections: [
      {
        h: "Utilizatori autorizați",
        p: [
          "Accesul în zona rezervată este permis doar persoanelor autorizate de organizație, fiecare cu date de autentificare personale și rol atribuit.",
          "Utilizatorul trebuie să-și păstreze în siguranță datele de autentificare și să semnaleze imediat orice acces neautorizat.",
        ],
      },
      {
        h: "Widget care poate fi încorporat",
        p: [
          "Widgetul poate fi încorporat doar pe domeniile indicate în configurație. Încorporarea este controlată prin antete de securitate (Content-Security-Policy cu lista domeniilor autorizate).",
          "Este interzisă modificarea, ofuscarea sau reîmpachetarea widgetului sau utilizarea lui pentru colectarea de date în alte scopuri decât cererea de ofertă.",
        ],
      },
      {
        h: "Disponibilitate și mentenanță",
        p: [
          "OneSpec poate suspenda temporar serviciul pentru mentenanță sau din motive de securitate, reducând pe cât posibil neplăcerile.",
          "Niveluri de serviciu (SLA) specifice: cu excepția unui acord scris diferit, OneSpec își asumă un obiectiv de disponibilitate lunară de 99,5% (excluzând mentenanța programată anunțată în prealabil), fără credite automate; niveluri de serviciu și timpi de răspuns dedicați pot fi conveniți în scris cu Clientul Enterprise.",
        ],
      },
      {
        h: "Proprietate intelectuală",
        p: [
          "Software-ul, interfața și documentația OneSpec rămân proprietatea CORE829 SRL. Datele, listele de prețuri și mărcile Clientului rămân proprietatea Clientului.",
        ],
      },
      CONTACT,
    ],
  },
  cookie: {
    title: "Cookie-uri și tehnologii similare",
    summary: "Ce cookie-uri și stocări locale folosesc site-ul onespec.eu și platforma.",
    sections: [
      {
        h: "Cookie-uri tehnice esențiale",
        p: [
          "Autentificarea folosește un cookie de sesiune necesar funcționării zonei rezervate. Fără acest cookie nu vă puteți autentifica. Nu necesită consimțământ.",
          "Atât site-ul onespec.eu, cât și platforma salvează limba aleasă într-un cookie tehnic („NEXT_LOCALE”), pentru a vă afișa paginile în limba dumneavoastră la vizita următoare. Nu conține date cu caracter personal și nu necesită consimțământ.",
        ],
      },
      {
        h: "Stocare locală funcțională",
        p: [
          "Preferința de temă (luminoasă/întunecată) este salvată în browser prin localStorage cu cheia „onespec-theme”. Este o dată tehnică ce nu părăsește dispozitivul.",
        ],
      },
      {
        h: "Cod de invitație (stocare locală)",
        p: [
          "Dacă ajungeți pe OneSpec printr-un link de invitație (care conține „?ref=…”), codul de invitație este salvat în browser prin localStorage cu cheia „onespec-ref” timp de 30 de zile, doar pentru a lega înregistrarea dumneavoastră de cine v-a invitat. Nu este un cookie, nu conține date cu caracter personal și nu este trimis terților; îl puteți șterge oricând golind datele site-ului.",
        ],
      },
      {
        h: "Verificare anti-bot (Cloudflare Turnstile)",
        p: [
          "Formularele de autentificare, înregistrare, recuperare a parolei și „Contactați-ne”, precum și trimiterea ofertelor din widget, folosesc Cloudflare Turnstile pentru a verifica faptul că le completează o persoană. Este o măsură de securitate strict necesară și nu necesită consimțământ; nu este folosită pentru publicitate sau pentru crearea de profiluri.",
        ],
      },
      {
        h: "Măsurarea performanței",
        p: [
          "Performanța paginilor este măsurată cu Vercel Speed Insights, care nu folosește cookie-uri și nu urmărește utilizatorii individuali.",
        ],
      },
      {
        h: "Statistici de vizită (cu consimțământ prealabil)",
        p: [
          "Pe site-ul onespec.eu și pe platformă folosim Vercel Web Analytics pentru a număra în formă agregată paginile vizitate (pagina, țara, tipul de dispozitiv și de browser). Nu folosește cookie-uri, nu creează profiluri și nu vă poate recunoaște de la o zi la alta; înainte de trimitere eliminăm din adresele paginilor parametrii și codurile linkurilor private.",
          "Se activează doar dacă acceptați instrumentele opționale din bannerul de cookie-uri; cât timp nu acceptați, sau dacă refuzați, nu se trimite nimic. Vă puteți răzgândi oricând: pe site, din linkul „Preferințe cookie” din josul paginii.",
        ],
      },
      {
        h: "Înregistrarea alegerii privind cookie-urile",
        p: [
          "Alegerea dumneavoastră din banner (accept / refuz) este salvată în browser prin localStorage, cu cheia „onespec-cookie-consent” pe platformă și „onespec-site-consent” pe site, ca să nu v-o cerem la fiecare vizită. Este o dată tehnică ce nu părăsește dispozitivul.",
        ],
      },
      {
        h: "Analiză și înregistrarea sesiunii (cu consimțământ prealabil)",
        p: [
          "Folosim PostHog pentru analiza produsului și înregistrarea sesiunii (clicuri, derulare, traseu de navigare) și Sentry Replay pentru a revedea vizual ce a cauzat o eroare tehnică — ambele servesc la identificarea și corectarea defecțiunilor platformei. Valorile tastate în câmpurile formularelor rămân întotdeauna mascate în înregistrare.",
          "Aceste instrumente nu se activează automat: la primul acces, un banner cere consimțământul; până când acesta nu este acordat, aceste instrumente nu colectează date de navigare. Simpla raportare tehnică a erorilor (fără înregistrare vizuală și fără date de navigare) rămâne în schimb mereu activă, ca măsură de securitate și stabilitate a serviciului.",
          "Nu sunt folosite cookie-uri publicitare sau de profilare comercială ale terților.",
        ],
      },
      CONTACT,
    ],
  },
  gdpr: {
    title: "Drepturile persoanelor vizate (GDPR)",
    summary: "Cum exercitați accesul, portabilitatea, rectificarea, ștergerea și opoziția.",
    sections: [
      IDENTITY,
      RIGHTS,
      {
        h: "Cum vă exercitați drepturile",
        p: [
          "Din pagina Cont: export de date (JSON, inclusiv tichetele de asistență și mesajele „Contactați-ne”), actualizarea profilului, gestionarea consimțămintelor, cererea de ștergere.",
          "Prin e-mail la hello@onespec.eu pentru solicitările pe care nu le puteți rezolva singur. Răspundem în termen de o lună, prelungibil cu două luni pentru solicitările complexe.",
        ],
      },
      {
        h: "Prelucrări automatizate",
        p: [
          "Calculul prețului orientativ și controalele anti-abuz (limitarea frecvenței, verificarea anti-bot, scorul anti-spam) sunt automatizate, dar nu produc efecte juridice asupra persoanei vizate. Deciziile comerciale privind cererea rămân în sarcina organizației.",
        ],
      },
      CONTACT,
    ],
  },
  sicurezza: {
    title: "Securitate și controale",
    summary: "Măsurile tehnice și organizatorice adoptate efectiv.",
    sections: [
      {
        h: "Protecția datelor în tranzit și în repaus",
        p: [
          "Toate comunicațiile au loc prin TLS. Datele în repaus sunt criptate de furnizorii de infrastructură (Convex, Vercel).",
          "Detalii privind cheile și gestionarea criptării în repaus: datele în repaus sunt criptate cu algoritmi standard din industrie (AES-256) de către furnizorii de infrastructură, care gestionează și cheile; OneSpec nu are acces la chei și nu păstrează nicio copie a acestora.",
        ],
      },
      {
        h: "Controlul accesului",
        p: [
          "Acces bazat pe roluri (proprietar, administrator, membru) cu verificare pe server la fiecare operațiune. Fiecare înregistrare sensibilă este asociată organizației, iar interogările sunt izolate pe organizație.",
          "Un singur super-administrator al platformei este definit printr-o listă de adrese de e-mail într-o variabilă de mediu.",
          "Gestionarea sesiunilor cu posibilitatea de a revoca dispozitive individuale și de a vă deconecta de pe toate dispozitivele.",
        ],
      },
      {
        h: "Secrete și configurare",
        p: [
          "Cheile și secretele sunt gestionate prin variabile de mediu ale platformei de implementare și nu sunt prezente în cod, în jurnale sau în răspunsurile de eroare.",
        ],
      },
      {
        h: "Antete de securitate",
        p: [
          "Aplicația aplică HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy și o Content-Security-Policy care interzice încorporarea zonei rezervate. Widgetul folosește o CSP dedicată, cu lista domeniilor autorizate pentru fiecare organizație.",
        ],
      },
      {
        h: "Limitarea frecvenței și anti-abuz",
        p: [
          "Limite aplicate pentru: autentificare, trimiterea ofertelor din widget (pe IP și pe configurator), exporturile de date. Verificare anti-bot Cloudflare Turnstile la trimiterile din widget.",
        ],
      },
      {
        h: "Registru de activitate",
        p: [
          "Acțiunile administrative și operațiunile sensibile (publicarea cataloagelor, schimbările de stare, exporturile, cererile de ștergere) sunt înregistrate cu autorul, obiectul și momentul.",
        ],
      },
      {
        h: "Backup și continuitate",
        p: [
          "Backupurile și restaurarea sunt gestionate de furnizorul bazei de date. Politica de backup, obiectivele RPO/RTO și testele periodice de restaurare: furnizorul efectuează backupul infrastructurii, iar OneSpec poate exporta datele; în prezent nu sunt garantate obiective contractuale RPO/RTO; acestea sunt verificate periodic și comunicate la cerere.",
        ],
      },
      {
        h: "Gestionarea vulnerabilităților și răspunsul la incidente",
        p: [
          "Scanarea dependențelor și a secretelor, actualizări și revizuire de securitate înainte de lansări.",
          "Procedura de răspuns la incidente și termenele de notificare: în cazul unei încălcări a securității datelor cu caracter personal, OneSpec inițiază procedura internă de limitare și analiză și informează Clientul fără întârzieri nejustificate și în orice caz în 72 de ore de la descoperire, pentru ca acesta să-și poată îndeplini obligațiile prevăzute de art. 33 GDPR.",
          "Pentru semnalări de securitate: hello@onespec.eu.",
        ],
      },
      CONTACT,
    ],
  },
  "regolamento-inviti": {
    title: "Regulamentul programului de invitații",
    summary: "Cum funcționează recompensele, reducerile, plățile și controalele programului „Invită și economisește”.",
    sections: [
      {
        h: "Ce este programul",
        p: [
          "Programul „Invită și economisește” permite unei organizații client OneSpec („invitatorul”) să invite o altă firmă („invitatul”) prin codul sau linkul personal. Programul este o inițiativă comercială a OneSpec, poate fi activat, modificat sau suspendat oricând și privește exclusiv clienții profesioniști (B2B).",
          "Proiect în așteptarea revizuirii juridice: [[revisione legale del regolamento]].",
        ],
      },
      {
        h: "Avantaje",
        p: [
          "Invitatul primește o reducere de 10% la prima factură a abonamentului plătit, calculată la prețul de listă al planului și al ciclului alese.",
          "Invitatorul primește o recompensă egală cu 10% din prețul de listă, fără TVA, al planului și al ciclului de facturare cumpărate efectiv de invitat (anualul se calculează ca zece rate lunare). Recompensa se acordă o singură dată pentru fiecare cont invitat.",
          "Planul Enterprise, gestionat comercial, este exclus din programul automat.",
        ],
      },
      {
        h: "Când se câștigă recompensa",
        p: [
          "Recompensa se câștigă doar după prima plată reală a invitatului și după trecerea a 30 de zile, cu condiția ca între timp plata să nu fi fost rambursată sau contestată și ca abonamentul invitatului să fie în regulă.",
          "Fiecare invitator poate primi cel mult 10 recompense în 12 luni consecutive. Dacă invitatorul nu este eligibil în 90 de zile de la sfârșitul perioadei de așteptare, invitația expiră fără recompensă.",
        ],
      },
      {
        h: "Cum se plătește recompensa",
        p: [
          "Proprietarul organizației alege între două modalități: credit pe soldul Stripe, care reduce următoarele facturi OneSpec, sau transfer în bani prin Stripe Connect în contul conectat de invitator. Plata în bani necesită finalizarea verificării de identitate cerute de Stripe.",
          "Creditul nu poate fi convertit în bani. Eventualele aspecte fiscale ale recompensei în bani (facturare, rețineri, TVA) sunt în sarcina invitatorului, cu excepția unor dispoziții legale contrare: [[trattamento fiscale del premio, da definire con il commercialista]].",
        ],
      },
      {
        h: "Revocarea recompensei",
        p: [
          "Dacă în 60 de zile de la plata calificantă invitatul obține o rambursare sau deschide o contestație, recompensa deja acordată este revocată: creditul este stornat din soldul Stripe sau transferul este anulat prin stornarea acestuia.",
        ],
      },
      {
        h: "Controale și utilizare abuzivă",
        p: [
          "Nu sunt permise: auto-invitațiile, invitațiile între firme din același grup sau cu același domeniu de firmă, adresele de e-mail temporare, conturile create doar pentru a obține recompensa și folosirea aceluiași card sau aceluiași client de plată de către invitator și invitat.",
          "Invitațiile care nu respectă aceste reguli sunt respinse, iar OneSpec poate suspenda codul unui invitator și poate anula recompensele obținute în mod abuziv. În aplicarea controalelor, OneSpec prelucrează adresa de e-mail a proprietarilor și identificatorul de plată Stripe exclusiv în scopul prevenirii abuzurilor.",
        ],
      },
      {
        h: "Confidențialitatea invitatului",
        p: [
          "Invitatorului i se afișează numele firmei invitate în formă mascată (de exemplu „Se*** Srl”) și starea invitației, fără alte date despre invitat.",
        ],
      },
      CONTACT,
    ],
  },
  qualita: {
    title: "Calitate și certificări",
    summary: "Registrul certificărilor și atestatelor deținute efectiv.",
    sections: [
      {
        h: "Situație",
        p: [
          "La data revizuirii, OneSpec nu declară certificări ale unor terți (de exemplu ISO/IEC 27001) decât dacă sunt enumerate explicit mai jos. Nicio certificare nu este declarată fără un atestat verificabil.",
        ],
      },
      {
        h: "Certificări și atestate deținute",
        p: [
          "La data revizuirii nu este deținută nicio certificare a unor terți. Această secțiune va fi actualizată de îndată ce, și doar dacă, o certificare va fi obținută efectiv.",
        ],
      },
      {
        h: "Conformitatea legală a prețurilor pe regiuni",
        p: [
          "Regulile regionale privind comunicarea prețurilor către consumatori (modul „generare de contacte / interval orientativ” pentru IT/FR/BE/DE/LU, modul cu prețuri mai transparente pentru NL în planurile admise) sunt gestionate ca reguli configurabile cu dată de valabilitate și sursă.",
          "Referințe normative concrete și date de actualizare: Regulamentul (UE) 2016/679 (GDPR); Directiva 2002/58/CE (ePrivacy); Directiva 98/6/CE privind indicarea prețurilor; Directiva 2005/29/CE privind practicile comerciale neloiale; pentru piața italiană, Decretul legislativ 196/2003, Decretul legislativ 206/2005 (Codul consumului) și normele privind deducerile fiscale pentru renovarea energetică; regulile fiecărei țări sunt revizuite la fiecare actualizare a serviciului și indicate cu dată și sursă în setările configuratorului.",
        ],
      },
      CONTACT,
    ],
  },
};
