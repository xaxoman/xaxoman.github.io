export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  description: string
  keyword: string
  category: "Siti web" | "E-commerce" | "Gestionali & Web App" | "SEO & Performance" | "Guide & Costi"
  readTime: string
  publishedAt: string
  updatedAt: string
  intro: string
  problem: {
    title: string
    intro: string
    points: string[]
  }
  solution: {
    title: string
    intro: string
    steps: {
      title: string
      description: string
      bullets?: string[]
    }[]
  }
  costs?: {
    title: string
    intro: string
    rows: { label: string; range: string; note: string }[]
  }
  faqs: { question: string; answer: string }[]
  service: { label: string; href: string }
  related: string[]
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "sito-web-aziende-manifatturiere",
    title: "Sito web per aziende manifatturiere: cosa cerca davvero un buyer",
    excerpt:
      "Un buyer che cerca un fornitore non legge la storia aziendale: cerca tolleranze, certificazioni e un modo per mandarti un disegno. Ecco cosa deve esserci.",
    description:
      "Come deve essere fatto un sito web per aziende manifatturiere: parco macchine, tolleranze, certificazioni e richiesta preventivo. Guida pratica per PMI.",
    keyword: "sito web per aziende manifatturiere",
    category: "Siti web",
    readTime: "6 min",
    publishedAt: "2026-09-21",
    updatedAt: "2026-09-21",
    intro:
      "Nelle PMI meccaniche il lavoro arriva quasi sempre per passaparola, e il sito viene percepito come una formalità. Il problema si presenta quando un ufficio acquisti di un'altra provincia deve qualificare un nuovo fornitore: a quel punto il sito è la prima cosa che guarda, e spesso è l'unica che vede prima di decidere se chiamarti.",
    problem: {
      title: "Perché un sito vetrina generico non funziona nel B2B",
      intro:
        "Un buyer industriale non naviga come un consumatore. Ha una specifica in mano e sta cercando di capire in pochi minuti se sei in grado di produrla. I siti manifatturieri tipici glielo rendono difficile:",
      points: [
        "Parlano di 'qualità', 'esperienza trentennale' e 'passione' senza mai indicare una tolleranza, un materiale o una dimensione massima lavorabile.",
        "Mostrano il capannone e non il parco macchine, quindi non si capisce cosa puoi effettivamente produrre.",
        "Non riportano le certificazioni, o le nascondono in un PDF nella sezione 'Azienda'.",
        "Non permettono di allegare un disegno: l'unico contatto è un modulo con nome, email e messaggio.",
        "Sono illeggibili da telefono, che è dove il buyer li apre mentre è in reparto.",
      ],
    },
    solution: {
      title: "Cosa mettere al posto della brochure",
      intro:
        "L'obiettivo non è essere belli: è far arrivare una richiesta d'offerta già qualificata, con il disegno allegato. In pratica servono quattro cose.",
      steps: [
        {
          title: "1. Una pagina per ogni lavorazione, non una pagina 'Servizi'",
          description:
            "Tornitura, fresatura, rettifica e assemblaggio meritano pagine separate. Sono ricerche diverse, con intenti diversi, e una pagina unica non si posiziona per nessuna delle tre.",
          bullets: [
            "Materiali lavorati e tolleranze raggiungibili",
            "Dimensioni massime e minime del pezzo",
            "Settori serviti (automotive, packaging, energia)",
          ],
        },
        {
          title: "2. Il parco macchine come tabella, non come galleria fotografica",
          description:
            "Marca, modello, corse sui tre assi, numero di assi controllati. È l'informazione che permette a un tecnico di capire in dieci secondi se il tuo reparto può fare il suo pezzo.",
          bullets: ["Una riga per macchina", "Corse e assi espliciti", "Capacità produttiva indicativa"],
        },
        {
          title: "3. Certificazioni visibili senza cercarle",
          description:
            "ISO 9001, IATF 16949, EN 1090: se le hai, vanno nell'header o comunque sopra la piega. Per molti uffici acquisti sono un requisito di ammissione, non un vezzo.",
        },
        {
          title: "4. Un modulo che accetta allegati",
          description:
            "Il form deve permettere l'upload di un file CAD o di un PDF di disegno, con i campi che servono a te per rispondere: quantità, materiale, data richiesta. Un buyer che deve scriverti una mail a parte per mandare il disegno spesso non lo fa.",
          bullets: ["Upload di STEP, DWG, PDF", "Campo quantità e lotti", "Conferma automatica di ricezione"],
        },
      ],
    },
    faqs: [
      {
        question: "Quanto tempo serve per rifare il sito di un'azienda manifatturiera?",
        answer:
          "Tra le tre e le cinque settimane per un sito completo con pagine lavorazioni, parco macchine, certificazioni e modulo con allegati. La parte che di solito allunga i tempi non è lo sviluppo, ma il reperimento delle schede tecniche e delle foto dei macchinari.",
      },
      {
        question: "Ha senso tradurre il sito in inglese?",
        answer:
          "Ha senso se vendi o vuoi vendere fuori dall'Italia, altrimenti no. Tradurre raddoppia le pagine da mantenere aggiornate e, se le traduzioni sono automatiche e approssimative, l'effetto sul buyer straniero è peggiore dell'assenza della versione inglese.",
      },
      {
        question: "Serve un blog anche a un'officina?",
        answer:
          "Solo se hai qualcosa di tecnico da dire e qualcuno che lo scriva. Meglio tre pagine di lavorazioni fatte bene che venti articoli generici: nel B2B industriale le pagine di servizio portano quasi tutte le richieste.",
      },
    ],
    service: { label: "Come lavoro sui siti aziendali", href: "/services#siti-web" },
    related: ["rifare-sito-senza-perdere-posizionamento", "quanto-costa-un-sito-web", "seo-locale-google-maps-crema"],
  },
  {
    slug: "sito-web-studio-legale-commercialista",
    title: "Sito web per studio professionale: cosa serve a un avvocato o a un commercialista",
    excerpt:
      "Chi cerca un professionista sta valutando se fidarsi. Il sito serve a far capire di cosa ti occupi davvero e a farti contattare senza imbarazzo.",
    description:
      "Come costruire il sito web di uno studio legale o di un commercialista: aree di attività, presentazione dei professionisti, contatti e conformità privacy.",
    keyword: "sito web per studio professionale",
    category: "Siti web",
    readTime: "5 min",
    publishedAt: "2026-09-21",
    updatedAt: "2026-09-21",
    intro:
      "Chi cerca un avvocato o un commercialista online ha quasi sempre un problema concreto e un po' di ansia. Non sta confrontando prezzi come farebbe per un elettrodomestico: sta cercando di capire se sei la persona giusta e se può fidarsi. Il sito di uno studio professionale serve esattamente a questo, e quasi tutto il resto è rumore.",
    problem: {
      title: "Gli errori ricorrenti nei siti degli studi",
      intro:
        "I siti degli studi professionali si somigliano tutti, e si somigliano nel modo sbagliato:",
      points: [
        "Una homepage con la bilancia della giustizia o una stretta di mano, e nessuna informazione utile.",
        "Un elenco di venti materie che nessuno studio può seguire davvero tutte, il che rende impossibile capire di cosa ti occupi.",
        "Nessuna foto dei professionisti: per un servizio basato sulla fiducia è un problema serio.",
        "Testi copiati da altri studi, spesso riconoscibili perché citano fori o normative che non c'entrano.",
        "Nessuna informativa privacy corretta, nonostante si trattino dati personali fin dal modulo di contatto.",
      ],
    },
    solution: {
      title: "Come impostarlo",
      intro:
        "Il sito di uno studio non deve vendere: deve qualificare. Meglio ricevere cinque richieste pertinenti che cinquanta fuori materia.",
      steps: [
        {
          title: "1. Scegli tre o quattro aree e scrivile bene",
          description:
            "Una pagina per area (diritto del lavoro, separazioni, recupero crediti, contenzioso tributario) scritta in italiano comprensibile, che spieghi quando serve rivolgersi a te e cosa succede dopo il primo incontro.",
          bullets: [
            "Una pagina per area, non un elenco puntato",
            "Linguaggio da cliente, non da atto giudiziario",
            "Cosa succede dopo il primo contatto",
          ],
        },
        {
          title: "2. Metti i volti e i percorsi",
          description:
            "Foto professionali e una biografia vera per ogni professionista: dove si è laureato, di cosa si occupa, da quanto. È la sezione più visitata di questi siti, insieme ai contatti.",
        },
        {
          title: "3. Rendi il contatto facile e a bassa pressione",
          description:
            "Telefono cliccabile da mobile, email, indirizzo con mappa e un modulo breve. Molti clienti preferiscono scrivere prima di telefonare, soprattutto per materie delicate.",
          bullets: ["Telefono cliccabile", "Modulo con pochi campi", "Orari e indirizzo visibili"],
        },
        {
          title: "4. Sistema privacy e cookie sul serio",
          description:
            "Un modulo di contatto raccoglie dati personali, e in uno studio professionale possono essere dati particolari. Servono informativa corretta, base giuridica esplicita e un banner cookie che non si limiti a un 'Accetto' finto.",
        },
      ],
    },
    faqs: [
      {
        question: "Un professionista può pubblicizzarsi online?",
        answer:
          "Sì, entro i limiti deontologici del proprio ordine: l'informazione deve essere veritiera, non comparativa e non suggestiva. In pratica significa che puoi descrivere le tue aree e la tua esperienza, ma non promettere esiti né confrontarti con colleghi.",
      },
      {
        question: "Servono i nomi dei clienti come referenze?",
        answer:
          "Nella grande maggioranza dei casi no, ed è spesso vietato dal segreto professionale. Funziona molto meglio descrivere tipologie di casi trattati in forma anonima e generale.",
      },
      {
        question: "Meglio un sito o solo un profilo LinkedIn?",
        answer:
          "LinkedIn è utile per la rete professionale, ma non intercetta chi cerca su Google 'avvocato lavoro Crema'. Le due cose rispondono a bisogni diversi e non si sostituiscono.",
      },
    ],
    service: { label: "Siti per professionisti e PMI", href: "/services#siti-web" },
    related: ["seo-locale-google-maps-crema", "quanto-costa-un-sito-web", "freelance-o-agenzia-web"],
  },
  {
    slug: "aprire-ecommerce-negozio-fisico",
    title: "Aprire un e-commerce avendo già un negozio fisico: cosa cambia davvero",
    excerpt:
      "La parte difficile non è il sito. È il magazzino condiviso, chi prepara i pacchi e cosa succede quando vendi online l'ultimo pezzo in vetrina.",
    description:
      "Aprire un e-commerce per un negozio fisico: gestione del magazzino condiviso, spedizioni, resi e organizzazione interna. Guida pratica ai problemi reali.",
    keyword: "aprire un e-commerce per un negozio fisico",
    category: "E-commerce",
    readTime: "7 min",
    publishedAt: "2026-09-21",
    updatedAt: "2026-09-21",
    intro:
      "Quasi tutte le guide sull'apertura di un e-commerce parlano di piattaforme, temi e metodi di pagamento. Sono la parte semplice. Se hai già un negozio fisico, i problemi veri arrivano dopo il primo ordine: chi lo prepara, da quale scaffale esce la merce, e cosa succede quando il pezzo venduto online era l'ultimo rimasto in vetrina.",
    problem: {
      title: "I tre problemi che nessuno ti anticipa",
      intro:
        "Un negozio che apre online non aggiunge un canale: cambia il modo in cui lavora il banco. Se non lo si prevede, si scopre in corsa.",
      points: [
        "Il magazzino è uno solo, ma le vendite sono due. Senza una sincronizzazione vendi online merce che hai appena venduto in negozio.",
        "La preparazione degli ordini costa tempo a qualcuno. Venti ordini al giorno sono circa due ore di lavoro, tutti i giorni, festivi compresi.",
        "I resi online sono un diritto di legge (quattordici giorni, senza motivazione), mentre in negozio decidi tu la politica. Sono due mondi diversi che convivono nello stesso bilancio.",
      ],
    },
    solution: {
      title: "Come impostarlo senza farsi male",
      intro:
        "L'e-commerce di un negozio fisico funziona quando è progettato attorno ai vincoli del negozio, non contro di essi.",
      steps: [
        {
          title: "1. Parti da un catalogo ridotto",
          description:
            "Non caricare tutto il magazzino. Scegli i cinquanta o cento articoli che vendi meglio, che sono facili da spedire e che hai quasi sempre disponibili. Amplierai dopo, quando il flusso sarà rodato.",
          bullets: ["Articoli a rotazione alta", "Niente pezzi fragili o ingombranti all'inizio", "Schede con foto vere, non del fornitore"],
        },
        {
          title: "2. Decidi come sincronizzare le giacenze",
          description:
            "Se hai un gestionale, collegalo. Se non ce l'hai, tieni uno stock dedicato all'online fisicamente separato: è meno elegante ma elimina il problema alla radice, e costa molto meno di un'integrazione.",
          bullets: [
            "Integrazione col gestionale se esiste",
            "Altrimenti stock separato per l'online",
            "Soglia di riordino sotto cui il prodotto si nasconde da solo",
          ],
        },
        {
          title: "3. Metti il ritiro in negozio",
          description:
            "È l'opzione che converte meglio per chi è vicino: niente spese di spedizione per il cliente, nessun costo per te, e la persona entra in negozio, dove spesso compra altro.",
        },
        {
          title: "4. Scrivi le politiche prima di aprire",
          description:
            "Spese di spedizione, tempi, resi, garanzia: devono essere pagine chiare e pubblicate. Oltre che obbligatorie, sono le pagine che i clienti leggono prima di comprare la prima volta da te.",
          bullets: ["Costi e tempi espliciti", "Procedura di reso in cinque righe", "Contatti reali, non solo un form"],
        },
      ],
    },
    costs: {
      title: "Cosa mettere a bilancio",
      intro:
        "Oltre allo sviluppo iniziale ci sono voci ricorrenti che è meglio conoscere prima che dopo.",
      rows: [
        { label: "Commissioni di pagamento", range: "1,4% – 2,5% + 0,25 €", note: "Per transazione, a seconda del circuito" },
        { label: "Spedizione", range: "5 – 9 € per collo", note: "Meno con volumi e contratto diretto col corriere" },
        { label: "Hosting e dominio", range: "20 – 200 € / anno", note: "Dipende dalla piattaforma scelta" },
        { label: "Tempo di gestione", range: "5 – 8 min per ordine", note: "Preparazione, imballo, etichetta, comunicazioni" },
      ],
    },
    faqs: [
      {
        question: "Meglio Shopify o un e-commerce su misura?",
        answer:
          "Shopify conviene se vuoi partire in fretta e il catalogo è standard: paghi un canone e non pensi all'infrastruttura. Una soluzione su misura conviene quando i canoni diventano significativi rispetto al fatturato o quando hai logiche di prezzo, listini o integrazioni che la piattaforma non gestisce.",
      },
      {
        question: "Quanto tempo serve per andare online?",
        answer:
          "Dalle quattro alle sei settimane per uno store con catalogo ridotto, pagamenti, spedizioni e pagine legali. La variabile che pesa di più sono le schede prodotto: fotografare e descrivere cento articoli richiede più tempo di quanto si pensi.",
      },
      {
        question: "Devo aprire una partita IVA diversa per l'online?",
        answer:
          "No, l'e-commerce è un canale di vendita della stessa attività. Vanno però verificati alcuni adempimenti specifici con il commercialista, in particolare sulla vendita a distanza e sulle vendite verso altri Paesi UE.",
      },
    ],
    service: { label: "Come realizzo gli e-commerce", href: "/services#ecommerce" },
    related: ["aumentare-conversioni-ecommerce", "quanto-costa-un-sito-web", "gestionale-su-misura-vs-excel"],
  },
  {
    slug: "gestionale-su-misura-vs-excel",
    title: "Gestionale su misura o Excel: quando conviene smettere con i fogli",
    excerpt:
      "Excel non è il nemico. Lo diventa quando tre persone modificano lo stesso file e nessuno sa più quale versione sia quella buona.",
    description:
      "Quando conviene passare da Excel a un gestionale su misura: i segnali da riconoscere, cosa si guadagna, quanto costa e come evitare progetti infiniti.",
    keyword: "gestionale su misura",
    category: "Gestionali & Web App",
    readTime: "6 min",
    publishedAt: "2026-09-21",
    updatedAt: "2026-09-21",
    intro:
      "Molte aziende mandano avanti processi importanti con un foglio di calcolo, e per anni funziona benissimo. Excel è veloce, lo sanno usare tutti e non richiede un progetto. Il punto in cui smette di funzionare è abbastanza riconoscibile, e conviene accorgersene prima che diventi un problema operativo.",
    problem: {
      title: "I segnali che il foglio non basta più",
      intro:
        "Non è una questione di numero di righe. È una questione di quante persone lo toccano e di quanto costa un errore:",
      points: [
        "Esistono copie con nomi tipo 'definitivo_v3_ok' e nessuno è sicuro di quale sia quella giusta.",
        "Due persone non possono lavorarci insieme senza sovrascriversi a vicenda.",
        "Ogni mese qualcuno passa mezza giornata a ricopiare dati da un foglio all'altro.",
        "Un errore di formula è già costato un ordine sbagliato o una fattura errata.",
        "Non si riesce a sapere chi ha modificato cosa e quando.",
        "Le informazioni servono anche fuori ufficio, ma il file sta su un PC in sede.",
      ],
    },
    solution: {
      title: "Cosa significa passare a un gestionale su misura",
      intro:
        "Un gestionale su misura non è un software gigante: è un'applicazione che fa bene le tre o quattro cose che oggi fai a mano, e nient'altro.",
      steps: [
        {
          title: "1. Si parte da un processo, non dal software",
          description:
            "Il primo passo è mappare come funziona oggi: chi inserisce un dato, chi lo controlla, dove finisce. Nella maggior parte dei casi emerge che due passaggi su cinque esistono solo perché il foglio non poteva fare altro.",
        },
        {
          title: "2. Database vero, accessi separati",
          description:
            "Ogni persona ha il suo accesso e vede quello che le compete. Le modifiche sono tracciate. Due utenti possono lavorare contemporaneamente senza conflitti, che è il motivo principale per cui si abbandona il foglio.",
          bullets: ["Utenti e permessi", "Storico delle modifiche", "Nessun file da passarsi via email"],
        },
        {
          title: "3. Si usa dal telefono",
          description:
            "Magazzino, cantiere, furgone: se il dato nasce fuori dall'ufficio, deve poter essere inserito fuori dall'ufficio. È spesso il guadagno più grande, perché elimina il doppio inserimento a fine giornata.",
        },
        {
          title: "4. Si rilascia a pezzi",
          description:
            "Prima il modulo che fa più male, in produzione, usato davvero. Poi il successivo. I progetti gestionali che falliscono sono quasi sempre quelli consegnati tutti insieme dopo sei mesi.",
          bullets: ["Primo modulo in 3-4 settimane", "Feedback su dati reali", "Moduli successivi a scaglioni"],
        },
      ],
    },
    costs: {
      title: "Ordini di grandezza",
      intro: "Per un'applicazione gestionale su misura, senza licenze per utente:",
      rows: [
        { label: "Modulo singolo (es. ordini o rapportini)", range: "3.500 – 6.000 €", note: "3-5 settimane" },
        { label: "Gestionale con 3-4 moduli", range: "6.000 – 12.000 €", note: "Rilascio progressivo" },
        { label: "Hosting e database", range: "20 – 80 € / mese", note: "Pagato direttamente al provider" },
        { label: "Licenze per utente", range: "0 €", note: "Aggiungere utenti non aumenta il costo" },
      ],
    },
    faqs: [
      {
        question: "Perché non un gestionale commerciale già pronto?",
        answer:
          "Se il tuo processo è standard, un gestionale di mercato è quasi sempre la scelta giusta e costa meno. Il su misura ha senso quando il tuo modo di lavorare è il tuo vantaggio competitivo, oppure quando adattare il software standard richiede più personalizzazioni del software stesso.",
      },
      {
        question: "I dati che ho su Excel si possono importare?",
        answer:
          "Sì, ed è normalmente la prima cosa che si fa. La parte delicata non è tecnica ma di pulizia: nei fogli storici ci sono quasi sempre duplicati, formati di data incoerenti e campi usati per due scopi diversi.",
      },
      {
        question: "Cosa succede se poi voglio cambiare fornitore?",
        answer:
          "Il codice e il database sono tuoi e vanno consegnati. È una clausola da mettere per iscritto prima di iniziare, insieme agli accessi all'hosting: è la differenza tra un software tuo e un software che usi.",
      },
    ],
    service: { label: "Web app e gestionali su misura", href: "/services#app" },
    related: ["portale-ordini-b2b", "quanto-costa-un-sito-web", "aprire-ecommerce-negozio-fisico"],
  },
  {
    slug: "portale-ordini-b2b",
    title: "Portale ordini B2B: far ordinare i clienti da soli, senza telefonate e PDF",
    excerpt:
      "Se i tuoi clienti ordinano via WhatsApp, email e telefono, qualcuno in ufficio sta ribattendo tutto a mano. Un portale ordini elimina quel passaggio.",
    description:
      "Come funziona un portale ordini B2B: listini personalizzati, disponibilità, storico e riordino rapido. Cosa serve davvero e quando conviene realizzarlo.",
    keyword: "portale ordini B2B",
    category: "Gestionali & Web App",
    readTime: "6 min",
    publishedAt: "2026-09-21",
    updatedAt: "2026-09-21",
    intro:
      "Nella distribuzione e nell'ingrosso gli ordini arrivano ancora quasi sempre allo stesso modo: una telefonata, una mail con un PDF, un messaggio WhatsApp con la foto di un foglio scritto a mano. Funziona, ma ogni ordine passa dalle mani di una persona che lo ribatte nel gestionale. È lì che si perdono tempo e precisione.",
    problem: {
      title: "Il costo nascosto degli ordini ribattuti a mano",
      intro:
        "Il problema non è l'ordine singolo, è il volume. Cinquanta ordini al giorno a quattro minuti l'uno fanno più di tre ore di lavoro quotidiano che non aggiunge valore:",
      points: [
        "Errori di trascrizione su codici articolo simili, che diventano resi e note di credito.",
        "Clienti che chiedono per telefono se un articolo è disponibile, interrompendo altro lavoro.",
        "Listini personalizzati gestiti a memoria o su fogli separati, con il rischio di applicare il prezzo sbagliato.",
        "Nessuno storico consultabile dal cliente, che quindi richiama per sapere cosa aveva ordinato il mese prima.",
        "Ordini che arrivano fuori orario e restano fermi fino al giorno dopo.",
      ],
    },
    solution: {
      title: "Cosa deve fare un portale ordini per essere usato davvero",
      intro:
        "Il rischio principale di questi progetti non è tecnico: è che i clienti continuino a telefonare. Il portale deve essere più comodo del telefono, non solo più moderno.",
      steps: [
        {
          title: "1. Ogni cliente vede il suo listino",
          description:
            "Prezzi, sconti e condizioni di pagamento sono quelli concordati con lui. È la funzione che più di ogni altra convince un cliente ad abbandonare la mail, perché elimina la domanda 'quanto mi costa a me'.",
        },
        {
          title: "2. Riordina in due clic",
          description:
            "Lo storico ordini con un pulsante 'riordina' copre la maggior parte del lavoro reale: nel B2B si ricompra spesso le stesse cose. Aggiungi una lista dei preferiti e hai coperto quasi tutto.",
          bullets: ["Storico completo consultabile", "Riordino di un ordine intero", "Liste ricorrenti salvate"],
        },
        {
          title: "3. Disponibilità visibile",
          description:
            "Anche approssimativa: disponibile, in arrivo, esaurito. Elimina la telefonata di verifica, che è la più frequente di tutte.",
        },
        {
          title: "4. Collegamento al gestionale",
          description:
            "L'ordine deve entrare nel gestionale senza che nessuno lo ricopi, altrimenti hai solo spostato il lavoro. Se il gestionale non espone API, spesso si può lavorare su scambio file programmato.",
          bullets: ["Integrazione via API quando esiste", "Altrimenti import automatico programmato", "Conferma d'ordine automatica al cliente"],
        },
      ],
    },
    faqs: [
      {
        question: "I clienti più anziani lo useranno?",
        answer:
          "Alcuni sì e alcuni no, ed è normale non arrivare al cento per cento. L'obiettivo realistico è spostare online il sessanta o settanta per cento degli ordini: già così il tempo liberato in ufficio è significativo. Il telefono resta per chi lo preferisce.",
      },
      {
        question: "Serve anche un'app?",
        answer:
          "Quasi mai all'inizio. Un portale web fatto bene funziona da telefono come un'app e non richiede installazione né aggiornamenti dagli store, che nel B2B sono un ostacolo reale all'adozione.",
      },
      {
        question: "Quanto tempo serve?",
        answer:
          "Da sei a dieci settimane per una prima versione con listini, catalogo, carrello, storico e integrazione. Il fattore che determina i tempi è quasi sempre l'accesso ai dati del gestionale esistente.",
      },
    ],
    service: { label: "Web app e portali B2B", href: "/services#app" },
    related: ["gestionale-su-misura-vs-excel", "aprire-ecommerce-negozio-fisico", "quanto-costa-un-sito-web"],
  },
  {
    slug: "rifare-sito-senza-perdere-posizionamento",
    title: "Rifare il sito senza perdere il posizionamento: la checklist dei redirect",
    excerpt:
      "Il calo di traffico dopo un restyling quasi sempre non dipende dal design nuovo: dipende da venti URL che non esistono più e nessuno ha reindirizzato.",
    description:
      "Come rifare un sito web senza perdere posizionamento su Google: mappatura URL, redirect 301, controlli prima e dopo il lancio. Checklist operativa.",
    keyword: "rifacimento sito senza perdere SEO",
    category: "SEO & Performance",
    readTime: "6 min",
    publishedAt: "2026-09-21",
    updatedAt: "2026-09-21",
    intro:
      "La storia si ripete con una regolarità sospetta: si rifà il sito, è più bello e più veloce, e dopo tre settimane le visite da Google sono dimezzate. Nella quasi totalità dei casi la causa non è il design nuovo, ma il fatto che gli indirizzi delle pagine sono cambiati senza che nessuno li abbia reindirizzati.",
    problem: {
      title: "Cosa succede tecnicamente",
      intro:
        "Google ha in archivio i vecchi indirizzi del tuo sito, con la loro reputazione accumulata negli anni. Quando quegli indirizzi rispondono 404, quella reputazione non si trasferisce da nessuna parte: si perde.",
      points: [
        "Le pagine vecchie restituiscono 404 e vengono via via tolte dall'indice.",
        "I link che altri siti avevano messo verso di te puntano nel vuoto e smettono di valere.",
        "Le pagine nuove ripartono da zero, anche se il contenuto è lo stesso.",
        "Il calo non è immediato: arriva dopo due o tre settimane, quando è più difficile collegarlo al lancio.",
      ],
    },
    solution: {
      title: "La procedura, in ordine",
      intro:
        "Il lavoro va fatto prima di pubblicare, non dopo. Serve mezza giornata e fa la differenza tra un restyling e un incidente.",
      steps: [
        {
          title: "1. Esporta tutti gli URL esistenti, prima di toccare qualsiasi cosa",
          description:
            "Da Search Console (rapporto Pagine), dalla sitemap attuale e con una scansione del sito. Vanno raccolti tutti, comprese le pagine vecchie che credevi di aver eliminato: se Google le conosce, contano.",
          bullets: ["Export da Search Console", "Sitemap.xml attuale", "Scansione completa del dominio"],
        },
        {
          title: "2. Costruisci la tabella di corrispondenza",
          description:
            "Due colonne: vecchio indirizzo, nuovo indirizzo. Ogni vecchia pagina deve puntare alla pagina nuova più vicina per contenuto. Se non esiste, si punta alla categoria superiore, mai alla homepage per default.",
        },
        {
          title: "3. Imposta redirect 301, non 302",
          description:
            "Il 301 è permanente e trasferisce il valore accumulato; il 302 è temporaneo e non lo fa. È un errore frequente perché molti pannelli propongono il 302 come predefinito.",
          bullets: ["301 permanente per ogni URL cambiato", "Nessuna catena di redirect a più passaggi", "Regola generica solo come ultima riga"],
        },
        {
          title: "4. Verifica prima di pubblicare, e poi di nuovo dopo",
          description:
            "Ogni vecchio indirizzo deve rispondere 301 e atterrare sulla pagina giusta. Dopo il lancio si invia la nuova sitemap e si tiene d'occhio il rapporto Pagine per due o tre settimane.",
          bullets: ["Test riga per riga della tabella", "Invio della nuova sitemap", "Controllo dei 404 per un mese"],
        },
      ],
    },
    faqs: [
      {
        question: "Devo mantenere gli stessi URL per sicurezza?",
        answer:
          "Se sono già leggibili e sensati, sì: è la strada più semplice e senza rischi. Ha senso cambiarli solo quando sono indirizzi tecnici illeggibili, e in quel caso il guadagno va messo a confronto con il lavoro di mappatura.",
      },
      {
        question: "Quanto tempo ci mette Google a recepire i redirect?",
        answer:
          "Le pagine principali vengono aggiornate in pochi giorni, la coda lunga può richiedere qualche settimana. In quel periodo è normale vedere un po' di oscillazione: quello che non è normale è un calo che continua oltre il mese.",
      },
      {
        question: "Se il sito vecchio era su un dominio diverso?",
        answer:
          "Vale lo stesso principio, con un'attenzione in più: il dominio vecchio va mantenuto attivo e pagato per almeno un anno, altrimenti i redirect smettono di funzionare e si perde tutto insieme al dominio.",
      },
    ],
    service: { label: "Rifacimento e performance", href: "/services#siti-web" },
    related: ["seo-locale-google-maps-crema", "sito-web-aziende-manifatturiere", "quanto-costa-un-sito-web"],
  },
  {
    slug: "aumentare-conversioni-ecommerce",
    title: "Aumentare le conversioni di un e-commerce: dove si perdono davvero gli ordini",
    excerpt:
      "Prima di comprare traffico, guarda dove se ne va quello che hai già. Di solito il buco è nel checkout, nelle spese di spedizione o in tre secondi di attesa.",
    description:
      "Come aumentare le conversioni di un e-commerce: checkout, spese di spedizione, velocità e schede prodotto. Cosa misurare e cosa sistemare per primo.",
    keyword: "aumentare le conversioni di un e-commerce",
    category: "E-commerce",
    readTime: "7 min",
    publishedAt: "2026-09-21",
    updatedAt: "2026-09-21",
    intro:
      "Quando uno store vende poco, il primo istinto è portare più visite. È quasi sempre l'ordine sbagliato: se su cento visitatori ne comprano otto decimi di uno, raddoppiare il traffico raddoppia anche lo spreco. Conviene prima capire dove si perdono le persone che stanno già arrivando.",
    problem: {
      title: "I quattro punti dove si perde più carrello",
      intro:
        "In media un e-commerce converte tra l'uno e il tre per cento. Quando sta sotto, la causa è quasi sempre in uno di questi punti:",
      points: [
        "Spese di spedizione che compaiono solo all'ultimo passaggio: è la prima causa di abbandono del carrello, ovunque.",
        "Registrazione obbligatoria per completare l'ordine, quando l'acquisto come ospite basterebbe.",
        "Pagine che caricano in più di tre secondi da telefono, dove ormai avviene la maggioranza delle visite.",
        "Schede prodotto con una foto sola, nessuna misura e nessuna informazione su tempi di consegna e resi.",
      ],
    },
    solution: {
      title: "Cosa sistemare, in ordine di impatto",
      intro:
        "Non serve rifare lo store. Servono quattro interventi mirati, misurando prima e dopo ciascuno.",
      steps: [
        {
          title: "1. Dichiara le spedizioni subito",
          description:
            "Scrivile in homepage, nella scheda prodotto e nel carrello. Se puoi permetterti una soglia di spedizione gratuita, comunicala ovunque: è l'unica leva che sposta il valore medio dell'ordine senza sconti.",
          bullets: ["Costo visibile già nella scheda", "Soglia per la spedizione gratuita", "Tempi di consegna indicati"],
        },
        {
          title: "2. Permetti l'acquisto senza registrazione",
          description:
            "L'account si può proporre dopo l'acquisto, quando la persona ha già pagato ed è più disposta a crearlo. Obbligarlo prima è un filtro che costa ordini veri.",
        },
        {
          title: "3. Misura la velocità da telefono, non da ufficio",
          description:
            "PageSpeed Insights sulla scheda prodotto, non sulla home. Le immagini non compresse sono la causa più frequente, e anche la più semplice da sistemare.",
          bullets: ["Immagini in WebP", "Niente caroselli pesanti", "Meno script di tracciamento"],
        },
        {
          title: "4. Rendi le schede prodotto complete",
          description:
            "Cinque o sei foto, misure reali, materiali, cosa c'è nella confezione, disponibilità e resi. Ogni dubbio che non risolvi lì è una persona che apre un'altra scheda e non torna.",
        },
      ],
    },
    faqs: [
      {
        question: "Da dove comincio se non ho dati?",
        answer:
          "Dal funnel del checkout: quante persone aggiungono al carrello, quante iniziano il pagamento, quante concludono. Bastano gli eventi standard di un qualsiasi strumento di analytics e mostrano subito a quale passaggio si perde più gente.",
      },
      {
        question: "Gli sconti aiutano le conversioni?",
        answer:
          "Nel breve sì, ma se diventano permanenti spostano solo l'attesa dei clienti: smettono di comprare a prezzo pieno. Meglio lavorare su spedizione, chiarezza e velocità, che non erodono il margine.",
      },
      {
        question: "Quanto è una buona percentuale di conversione?",
        answer:
          "Dipende molto dal settore e dallo scontrino medio: tra l'uno e il tre per cento è la norma per molti store, sopra il tre è buono. Ha senso confrontarsi con sé stessi nel tempo più che con medie generali.",
      },
    ],
    service: { label: "E-commerce e checkout", href: "/services#ecommerce" },
    related: ["aprire-ecommerce-negozio-fisico", "rifare-sito-senza-perdere-posizionamento", "quanto-costa-un-sito-web"],
  },
  {
    slug: "seo-locale-google-maps-crema",
    title: "SEO locale a Crema: farsi trovare quando il cliente è a dieci chilometri",
    excerpt:
      "Per un'attività locale la scheda Google conta spesso più del sito. Ecco cosa la fa salire e cosa invece non sposta niente.",
    description:
      "SEO locale a Crema: come ottimizzare la scheda Google Business Profile e il sito per farsi trovare dalle ricerche della zona. Guida pratica per attività locali.",
    keyword: "SEO locale Crema",
    category: "SEO & Performance",
    readTime: "7 min",
    publishedAt: "2026-09-21",
    updatedAt: "2026-09-21",
    intro:
      "Se lavori su Crema e provincia, la maggior parte dei tuoi potenziali clienti non arriva da una ricerca generica: arriva da una ricerca con un'intenzione locale, fatta da telefono, spesso mentre è già in giro. In quelle ricerche il primo risultato non è un sito: è il blocco delle mappe con tre attività. Entrare in quel blocco vale più di molte posizioni nei risultati tradizionali.",
    problem: {
      title: "Perché molte attività locali non compaiono",
      intro:
        "Le cause sono quasi sempre le stesse, e sono tutte risolvibili senza spendere in pubblicità:",
      points: [
        "Scheda Google mai rivendicata, o rivendicata anni fa e mai più aggiornata.",
        "Categoria principale sbagliata: è il singolo fattore che più influenza per quali ricerche compari.",
        "Nome, indirizzo e telefono scritti in modo diverso su sito, scheda e directory.",
        "Zero recensioni recenti, o recensioni mai risposte.",
        "Sito senza una pagina che parli esplicitamente della zona servita.",
      ],
    },
    solution: {
      title: "Cosa fare, in ordine",
      intro:
        "La scheda Google pesa più del sito per le ricerche locali, ma i due si sostengono a vicenda. Conviene partire dalla scheda perché i risultati arrivano prima.",
      steps: [
        {
          title: "1. Sistema la categoria principale",
          description:
            "Scegline una sola come principale, la più precisa possibile, e aggiungi le secondarie pertinenti. Un'officina meccanica che si mette come 'azienda' generica non comparirà mai per le ricerche del suo settore.",
        },
        {
          title: "2. Uniforma nome, indirizzo e telefono",
          description:
            "Devono essere identici ovunque: scheda, sito, Pagine Gialle, social. Anche differenze piccole come 'Via' contro 'V.le' o due numeri di telefono diversi riducono la fiducia dell'algoritmo nei tuoi dati.",
          bullets: ["Stessa forma ovunque", "Un solo numero principale", "Orari aggiornati, festivi compresi"],
        },
        {
          title: "3. Chiedi recensioni, e rispondi a tutte",
          description:
            "Il momento giusto è subito dopo un lavoro andato bene, con un link diretto. Rispondere è importante quanto riceverle, comprese quelle negative: le risposte si leggono e pesano nella decisione.",
          bullets: ["Link diretto alla recensione", "Richiesta a caldo", "Risposta entro pochi giorni"],
        },
        {
          title: "4. Dai alla zona una pagina sul sito",
          description:
            "Non una pagina vuota con dentro venti nomi di paesi: una pagina che spiega cosa fai, dove intervieni e in quanto tempo. Aggiungi i dati strutturati LocalBusiness e mappa incorporata.",
          bullets: ["Zona servita dichiarata", "Dati strutturati LocalBusiness", "Indirizzo e mappa nel footer"],
        },
      ],
    },
    faqs: [
      {
        question: "Funziona anche senza sede aperta al pubblico?",
        answer:
          "Sì. Google prevede le attività con area servita: l'indirizzo resta nascosto e si dichiarano i comuni in cui intervieni. È il caso tipico di artigiani, tecnici e liberi professionisti che lavorano dal cliente.",
      },
      {
        question: "Quanto tempo serve per vedere risultati?",
        answer:
          "Sulla scheda Google le modifiche hanno effetto in giorni o poche settimane. Sul sito i tempi sono più lunghi, di solito qualche mese. È il motivo per cui conviene partire dalla scheda.",
      },
      {
        question: "Vale la pena pagare per comparire più in alto sulle mappe?",
        answer:
          "Gli annunci locali esistono e funzionano, ma su una scheda mal configurata sono soldi sprecati. Prima si sistemano categoria, dati e recensioni, poi eventualmente si valuta la pubblicità.",
      },
    ],
    service: { label: "SEO e performance", href: "/services#siti-web" },
    related: ["rifare-sito-senza-perdere-posizionamento", "sito-web-studio-legale-commercialista", "quanto-costa-un-sito-web"],
  },
  {
    slug: "freelance-o-agenzia-web",
    title: "Web designer freelance o agenzia: come scegliere senza rimpianti",
    excerpt:
      "Non esiste una risposta giusta in assoluto. Esistono progetti che stanno meglio da una parte e progetti che stanno meglio dall'altra.",
    description:
      "Meglio un web designer freelance o un'agenzia? Differenze reali su costi, tempi, continuità e gestione del progetto, con i criteri per decidere.",
    keyword: "web designer freelance o agenzia",
    category: "Guide & Costi",
    readTime: "6 min",
    publishedAt: "2026-09-21",
    updatedAt: "2026-09-21",
    intro:
      "È una delle prime domande che si pone chi deve rifare il sito, e di solito riceve risposte di parte. Provo a dare quella meno comoda per me: ci sono casi in cui un'agenzia è la scelta migliore, e conviene riconoscerli prima di firmare.",
    problem: {
      title: "Le differenze che contano davvero",
      intro:
        "Le differenze di prezzo sono la parte più evidente ma non la più importante. Quelle che determinano come andrà il progetto sono altre:",
      points: [
        "Con un freelance parli con chi scrive il codice; in agenzia parli con un account che poi riferisce a chi lo scrive.",
        "Un freelance ha meno progetti in parallelo, quindi risponde prima ma può essere occupato quando lo cerchi.",
        "Un'agenzia ha continuità strutturale: se una persona se ne va, il progetto resta. Con un freelance quel rischio è concentrato.",
        "Un'agenzia copre competenze diverse sotto lo stesso tetto; un freelance ne copre due o tre e per il resto si appoggia a una rete.",
        "I costi fissi di una struttura finiscono nel preventivo, a parità di lavoro svolto.",
      ],
    },
    solution: {
      title: "Come decidere nel tuo caso",
      intro: "Quattro domande che nella pratica risolvono la scelta quasi sempre.",
      steps: [
        {
          title: "1. Quante competenze diverse servono contemporaneamente?",
          description:
            "Un sito o un'applicazione: un freelance va benissimo. Un progetto con campagne pubblicitarie, produzione video, social e stampa che partono insieme: serve una struttura che coordini, o toccherà a te farlo.",
        },
        {
          title: "2. Quanto è critico il sito per il tuo fatturato?",
          description:
            "Se un fermo di due giorni ti costa ordini veri, la continuità operativa conta più del prezzo, e va messa per iscritto: tempi di risposta garantiti e un sostituto indicato. Vale con entrambi.",
        },
        {
          title: "3. Chi resterà a gestirlo?",
          description:
            "Se dentro la tua azienda nessuno se ne occuperà, un contratto di assistenza strutturato ha senso. Se invece qualcuno lo curerà, un progetto consegnato completo di accessi e documentazione è più economico e più libero.",
        },
        {
          title: "4. Le domande da fare a entrambi",
          description:
            "Sono le stesse, e le risposte dicono molto: chi possiede il codice e il dominio a fine progetto; cosa succede se voglio cambiare fornitore; il prezzo è fisso o a consuntivo; chi risponde se il sito si ferma di sabato.",
          bullets: [
            "Proprietà di codice, dominio e contenuti",
            "Prezzo fisso o a consuntivo",
            "Tempi di risposta in caso di guasto",
          ],
        },
      ],
    },
    faqs: [
      {
        question: "Un freelance costa davvero meno?",
        answer:
          "In genere sì, a parità di lavoro, perché non ci sono i costi di struttura. La differenza si assottiglia sui progetti grandi, dove il coordinamento diventa una voce di lavoro vera e va comunque fatto da qualcuno.",
      },
      {
        question: "E se il freelance sparisce?",
        answer:
          "È il rischio reale di questa scelta e va gestito, non ignorato: pretendi il codice su un repository intestato a te, gli accessi a dominio e hosting a tuo nome, e una documentazione minima. Con quelli in mano, chiunque può riprendere il lavoro.",
      },
      {
        question: "Posso partire con un freelance e passare a un'agenzia?",
        answer:
          "Sì, se il progetto è costruito su tecnologie standard e la proprietà è tua. È esattamente il motivo per cui le domande sulla proprietà vanno fatte all'inizio e non alla fine.",
      },
    ],
    service: { label: "Come lavoro", href: "/services" },
    related: ["quanto-costa-un-sito-web", "sito-web-studio-legale-commercialista", "gestionale-su-misura-vs-excel"],
  },
  {
    slug: "quanto-costa-un-sito-web",
    title: "Quanto costa un sito web: prezzi reali e cosa li fa salire",
    excerpt:
      "Tra un preventivo da 300 € e uno da 10.000 € la differenza non è il ricarico: sono cose precise. Ecco quali, con le fasce di prezzo.",
    description:
      "Quanto costa un sito web nel 2026: fasce di prezzo per sito vetrina, e-commerce e gestionali, cosa fa salire il preventivo e quali costi ricorrenti considerare.",
    keyword: "quanto costa un sito web",
    category: "Guide & Costi",
    readTime: "7 min",
    publishedAt: "2026-09-21",
    updatedAt: "2026-09-21",
    intro:
      "È la domanda più frequente e quella con la risposta più frustrante: dipende. Il problema è che 'dipende' non aiuta a decidere. Provo a spiegare da cosa dipende, con numeri, così puoi leggere un preventivo e capire cosa stai comprando.",
    problem: {
      title: "Perché due preventivi per lo stesso sito differiscono di dieci volte",
      intro:
        "Non è quasi mai il margine. Sono voci concrete che in un preventivo a volte compaiono e a volte no:",
      points: [
        "Design su misura oppure tema comprato e adattato: sono due lavori diversi, con due prezzi diversi.",
        "Testi e foto inclusi o a tuo carico. Scrivere i contenuti di otto pagine è un lavoro vero, e se non è nel preventivo toccherà a te.",
        "Numero di pagine e di moduli: un sito da cinque pagine e uno da trenta non si confrontano.",
        "Funzioni che sembrano dettagli: area riservata, prenotazioni, multilingua, integrazioni con gestionali.",
        "Cosa succede dopo: chi aggiorna, chi ripara, e quanto costa.",
      ],
    },
    solution: {
      title: "Le fasce, e cosa c'è dentro",
      intro:
        "Sono le fasce con cui lavoro io, per progetti a prezzo fisso concordato prima di iniziare. Servono come riferimento per leggere anche preventivi altrui.",
      steps: [
        {
          title: "Sito vetrina per PMI e professionisti — 1.200 € / 2.500 €",
          description:
            "Design su misura, cinque o dieci pagine, ottimizzazione per le ricerche locali, modulo contatti, conformità GDPR, caricamento sotto il secondo. Consegna in due-quattro settimane.",
          bullets: ["Studi professionali, officine, PMI", "Contenuti modificabili da te", "Punteggi PageSpeed sopra 95"],
        },
        {
          title: "E-commerce — 2.500 € / 5.500 €",
          description:
            "Catalogo, carrello, pagamenti, spedizioni, pagine legali e gestione ordini. La variabile principale è il numero di prodotti e se le schede vanno scritte da zero. Consegna in quattro-sei settimane.",
          bullets: ["Negozi retail e produttori", "Nessun canone obbligatorio", "Ritiro in negozio incluso"],
        },
        {
          title: "Web app, gestionali e portali B2B — 3.500 € / 8.000 € e oltre",
          description:
            "Applicazioni con database, utenti e permessi, integrazioni con software esistenti. Si rilasciano a moduli, non tutto insieme. La stima dipende dal numero di processi da coprire.",
          bullets: ["Logistica, distribuzione, servizi", "Nessuna licenza per utente", "Rilascio progressivo"],
        },
      ],
    },
    costs: {
      title: "I costi ricorrenti, quelli che spesso non compaiono",
      intro:
        "Sono spese tue, da pagare direttamente al fornitore. Chiedi sempre a chi sono intestate: è la differenza tra possedere il sito e affittarlo.",
      rows: [
        { label: "Dominio .it", range: "10 – 20 € / anno", note: "Intestato a te, non al fornitore" },
        { label: "Hosting sito vetrina", range: "0 – 70 € / anno", note: "Un sito statico può costare zero" },
        { label: "Hosting e-commerce o web app", range: "15 – 80 € / mese", note: "Dipende da traffico e database" },
        { label: "Manutenzione", range: "Opzionale", note: "Ha senso se nessuno in azienda se ne occupa" },
      ],
    },
    faqs: [
      {
        question: "Perché un sito a 300 € è un problema?",
        answer:
          "Perché a quella cifra non c'è lavoro: è un tema comprato e riempito in fretta. Il costo si sposta dopo, sotto forma di lentezza, difficoltà a farsi trovare e richieste di modifica che si pagano a parte. Se il budget è quello, meglio una pagina sola fatta bene.",
      },
      {
        question: "Come funziona il pagamento?",
        answer:
          "Di solito un acconto tra il quaranta e il cinquanta per cento all'avvio e il saldo alla pubblicazione, dopo il tuo collaudo. Sui progetti a moduli si paga per milestone concordate.",
      },
      {
        question: "Il preventivo può cambiare in corsa?",
        answer:
          "Il prezzo concordato non cambia per il lavoro concordato. Cambia se aggiungi funzioni non previste: in quel caso la cosa corretta è una stima separata prima di procedere, non una sorpresa in fattura.",
      },
      {
        question: "Come chiedo un preventivo?",
        answer:
          "Descrivi in poche righe cosa ti serve e con quali obiettivi nella pagina contatti. Ricevi una risposta con perimetro, tempi e prezzo fisso, di solito entro un giorno lavorativo.",
      },
    ],
    service: { label: "Servizi e modalità di lavoro", href: "/services" },
    related: ["freelance-o-agenzia-web", "aprire-ecommerce-negozio-fisico", "rifare-sito-senza-perdere-posizionamento"],
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug)
}

/** Vecchio slug /case-studies -> nuovo slug /blog. Usata per i redirect 301. */
export const CASE_STUDY_REDIRECTS: Record<string, string> = {
  "creazione-siti-web-crema-pmi-manifatturiera": "sito-web-aziende-manifatturiere",
  "siti-internet-professionisti-crema-studio-legale-commercialista": "sito-web-studio-legale-commercialista",
  "creazione-ecommerce-crema-negozio-retail-produttore": "aprire-ecommerce-negozio-fisico",
  "sviluppo-gestionali-su-misura-crema-officina-logistica": "gestionale-su-misura-vs-excel",
  "creazione-web-app-aziendali-crema-portale-clienti-b2b": "portale-ordini-b2b",
  "rifacimento-sito-web-aziendale-crema-modernizzazione-performance": "rifare-sito-senza-perdere-posizionamento",
  "consulente-ecommerce-strategia-vendita-online-crema": "aumentare-conversioni-ecommerce",
  "posizionamento-seo-e-visibilita-google-crema-attivita-locali": "seo-locale-google-maps-crema",
  "web-designer-freelance-vs-agenzia-crema": "freelance-o-agenzia-web",
  "preventivo-costo-realizzazione-sito-internet-crema": "quanto-costa-un-sito-web",
}
