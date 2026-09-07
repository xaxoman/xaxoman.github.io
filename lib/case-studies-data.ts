export interface CaseStudy {
  slug: string
  title: string
  subtitle: string
  description: string
  keywords: string[]
  targetClient: string
  need: string
  category: "Websites" | "E-Commerce" | "Gestionali & Web App" | "Local SEO & Performance" | "Guide & Costi"
  readTime: string
  date: string
  badge: string
  problem: {
    title: string
    intro: string
    points: string[]
    quote?: string
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
  results: {
    metric: string
    before: string
    after: string
  }[]
  faqs: {
    question: string
    answer: string
  }[]
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "creazione-siti-web-crema-pmi-manifatturiera",
    title: "Creazione Siti Web a Crema: Come Rilanciare la Presenza Digitale di una PMI Manifatturiera",
    subtitle: "Trasformare un vecchio sito vetrina obsoleto in uno strumento B2B che genera richieste d'offerta qualificate nel Nord Italia.",
    description: "Case study e guida pratica sulla creazione e sviluppo di siti web per PMI a Crema e provincia. Focus su velocità, catalogo macchinari e lead generation B2B.",
    keywords: ["creazione siti web crema", "sviluppo siti web per pmi crema e provincia", "rifacimento sito web aziendale crema", "web designer freelance crema"],
    targetClient: "Azienda Meccanica di Precisione (PMI Cremasca)",
    need: "Rinnovare il vecchio sito fermo al 2014, presentare il parco macchine CNC e acquisire nuovi committenti industriali.",
    category: "Websites",
    readTime: "5 min",
    date: "Settembre 2026",
    badge: "Case Study & Guida",
    problem: {
      title: "Il Problema: La Sindrome del 'Sito Biglietto da Visita'",
      intro: "Nel polo produttivo tra Crema, Cremona e Lodi molte officine di precisione e PMI eccellenti nel lavoro quotidiano si presentano online con siti web fermi a dieci anni fa:",
      points: [
        "Piattaforma WordPress datata, mai aggiornata per timore di conflitti tra plugin.",
        "Completamente illeggibile da smartphone o tablet.",
        "Nessuna valorizzazione del parco macchine CNC, delle certificazioni ISO o delle tolleranze di lavorazione.",
        "Tempo di caricamento superiore ai 5 secondi, con punteggio Google PageSpeed inferiore a 35/100.",
        "Invisibilità totale per ricerche locali e regionali come 'lavorazioni meccaniche conto terzi Crema'."
      ],
      quote: "I clienti storici ci conoscono per passaparola, ma quando un buyer o ingegnere di Milano o Bergamo cerca un nuovo fornitore, il nostro sito attuale ci fa sembrare un'officina del secolo scorso."
    },
    solution: {
      title: "La Soluzione: Sviluppo Siti Web per PMI ad Alte Prestazioni",
      intro: "Invece di installare l'ennesimo tema pesante e difficile da manutenere, abbiamo ricostruito la presenza online da zero con un'architettura moderna:",
      steps: [
        {
          title: "1. Codice Moderno con Next.js e Tailwind CSS",
          description: "Pagine statiche pre-renderizzate che caricano in meno di 0.7 secondi, garantendo sicurezza totale (zero database esposti ad attacchi) e punteggi 95+ su Google PageSpeed Insights.",
          bullets: ["Caricamento istantaneo", "Zero plugin vulnerabili", "Navigazione fluida e responsive nativa"]
        },
        {
          title: "2. Catalogo Lavorazioni e Schede Macchinari Dettagliate",
          description: "Riorganizzazione delle competenze per comparti (automotive, packaging, energia), con schede tecniche su corse, assi e tolleranze e certificazioni di qualità in primo piano.",
          bullets: ["Foto ad alta risoluzione WebP", "Schede tecniche scaricabili", "Modulo invio file CAD/disegni tecnici"]
        },
        {
          title: "3. Ottimizzazione Local SEO per Crema e Lombardia",
          description: "Integrazione dei dati strutturati Schema.org (ManufacturingBusiness), configurazione Google Business Profile e indicizzazione delle parole chiave di comparto.",
          bullets: ["Schema.org JSON-LD", "Coerenza NAP sul territorio", "Form di contatto con filtro anti-spam avanzato"]
        }
      ]
    },
    results: [
      { metric: "Tempo caricamento mobile", before: "5.4 secondi", after: "0.6 secondi" },
      { metric: "Punteggio Google PageSpeed", before: "32 / 100", after: "98 / 100" },
      { metric: "Richieste preventivo al mese", before: "~1 ogni 2 mesi", after: "4 - 6 richieste qualificate/mese" },
      { metric: "Posizionamento ricerche di settore", before: "Oltre la 4ª pagina", after: "Prima pagina su Google" }
    ],
    faqs: [
      {
        question: "Quanto tempo richiede la creazione di un sito web per una PMI a Crema?",
        answer: "Per un sito aziendale completo (Home, Chi Siamo, Servizi, Parco Macchine, Certificazioni, Contatti) i tempi medi sono tra le 3 e le 5 settimane dall'approvazione del brief iniziale."
      },
      {
        question: "Se abbiamo già un sito, perderemo le posizioni su Google durante il rifacimento?",
        answer: "No. Eseguiamo una mappatura rigorosa degli URL esistenti con redirect 301 permanenti, salvaguardando il ranking pregresso e migliorandolo grazie ai nuovi tempi di caricamento."
      }
    ]
  },
  {
    slug: "siti-internet-professionisti-crema-studio-legale-commercialista",
    title: "Realizzazione Siti Internet per Professionisti a Crema: Studi Legali e Commercialisti",
    subtitle: "Come uno studio associato di Crema supera la dipendenza dal solo passaparola e acquisisce clienti qualificati sul territorio.",
    description: "Guida e case study sulla realizzazione di siti internet per liberi professionisti a Crema e provincia. Come trasmettere credibilità, rispettare la deontologia e posizionarsi su Google.",
    keywords: ["realizzazione siti internet per professionisti crema", "web designer freelance crema", "posizionamento seo siti internet crema", "migliorare presenza online attività crema"],
    targetClient: "Studio Associato di Commercialisti e Consulenti del Lavoro (Crema Centro)",
    need: "Rinnovare l'immagine digitale dello studio, presentare le aree di specializzazione e attrarre nuove imprese nel cremasco.",
    category: "Websites",
    readTime: "4 min",
    date: "Settembre 2026",
    badge: "Studi Professionali",
    problem: {
      title: "Il Problema: Il Passaparola Oggi Passa Prima da Google",
      intro: "Anche quando un potenziale cliente riceve una raccomandazione su uno studio di Crema, la prima cosa che fa è cercare il nome del professionista o dello studio su Google:",
      points: [
        "Unica pagina statica con elenco generico di 20 materie, senza approfondimenti.",
        "Invisibilità per ricerche verticali come 'consulenza passaggio generazionale Crema' o 'assistenza fiscale società Crema'.",
        "Assenza di foto del team e scarsa chiarezza su quali clienti lo studio segua con maggior successo.",
        "Modulo di contatto inesistente e cookie policy non aggiornata."
      ],
      quote: "Ci siamo resi conto che molti giovani imprenditori del territorio si rivolgevano a studi di Milano semplicemente perché online trasmettevano un'organizzazione più strutturata della nostra."
    },
    solution: {
      title: "La Soluzione: Eleganza Tipografica, Pagine Verticali e Local SEO",
      intro: "Un approccio sobrio e istituzionale, focalizzato su trasparenza e facilità di contatto:",
      steps: [
        {
          title: "1. Design Istituzionale e Tipografia Curata",
          description: "Layout pulito, palette colori autorevole e navigazione fluida senza animazioni superflue o effetti distraenti.",
          bullets: ["Design minimale", "Ottima leggibilità", "Presentazione trasparente dei soci"]
        },
        {
          title: "2. Pagine di Servizio Verticali per la SEO",
          description: "Creazione di landing dedicate per ciascuna area: Consulenza Fiscale Societaria, Gestione Paghe, Contenzioso Tributario, Apertura Partite IVA.",
          bullets: ["Contenuti orientati alle esigenze del cliente", "Parole chiave locali", "FAQ chiare per ogni servizio"]
        },
        {
          title: "3. Prenotazione Primo Colloquio Senza Frizioni",
          description: "Modulo profilato con scelta dell'argomento e possibilità di integrare un calendario di prenotazione automatica.",
          bullets: ["Filtro per tipologia di cliente", "Conformità GDPR rigorosa", "Zero cookie di profilazione invasivi"]
        }
      ]
    },
    results: [
      { metric: "Visite organiche locali", before: "30 / mese", after: "+140% di traffico qualificato da Crema" },
      { metric: "Ranking per ricerche di nicchia", before: "Assente", after: "Top 3 su Google per consulenza fiscale a Crema" },
      { metric: "Richieste di contatto al mese", before: "< 1 ogni trimestre", after: "3 - 4 contatti qualificati a settimana" },
      { metric: "Conformità privacy", before: "A rischio sanzione", after: "100% GDPR compliant privacy-first" }
    ],
    faqs: [
      {
        question: "Come gestite la privacy e il GDPR per gli studi professionali?",
        answer: "I nostri siti sono realizzati senza strumenti di tracciamento invasivi. Utilizziamo analitiche anonimizzate conformi al GDPR che eliminano la necessità di banner cookie bloccanti."
      },
      {
        question: "Possiamo pubblicare circolari o articoli in autonomia?",
        answer: "Sì. Il sito viene configurato con una gestione contenuti estremamente semplice (Markdown/CMS leggero) per pubblicare aggiornamenti in 2 minuti senza toccare codice."
      }
    ]
  },
  {
    slug: "creazione-ecommerce-crema-negozio-retail-produttore",
    title: "Creazione E-Commerce a Crema: Dal Negozio Fisico allo Shop Online ad Alte Conversioni",
    subtitle: "Come un'attività commerciale o produttore artigianale cremasco ha iniziato a vendere in tutta Italia con carrello rapido e zero commissioni di marketplace.",
    description: "Guida e case study pratico sulla creazione di siti e-commerce a Crema. Come lanciare uno shop online veloce, ottimizzato per smartphone e con Apple Pay/Google Pay.",
    keywords: ["creazione ecommerce crema", "sviluppo siti ecommerce per negozi crema", "realizzazione shop online crema e provincia", "consulente ecommerce crema"],
    targetClient: "Bottega Storica / Produttore Artigianale (Crema)",
    need: "Affiancare al punto vendita fisico un e-commerce per vendere prodotti tipici e collezioni su scala nazionale senza intermediari.",
    category: "E-Commerce",
    readTime: "5 min",
    date: "Settembre 2026",
    badge: "E-Commerce",
    problem: {
      title: "Il Problema: L'E-Commerce che Non Convertiva",
      intro: "Molte attività di Crema investono budget considerevoli in e-commerce che finiscono per diventare costose vetrine statiche:",
      points: [
        "Piattaforma WooCommerce con 45 plugin attivi e tempo di caricamento di oltre 8 secondi su smartphone.",
        "Tasso di abbandono del carrello all'88% a causa di un checkout a 5 passaggi macchinoso.",
        "Nessuna sincronizzazione con il magazzino del negozio reale, con rischio di vendere merce già esaurita a scaffale.",
        "Spese di spedizione nascoste fino all'ultimo click che spaventavano gli acquirenti."
      ],
      quote: "Pagavamo canoni di manutenzione mensili per un negozio online che generava appena 8 ordini al mese, mentre i clienti locali si lamentavano che il sito era lentissimo da cellulare."
    },
    solution: {
      title: "La Soluzione: E-Commerce Sartoriale ad Altissime Prestazioni",
      intro: "Ricostruzione dello store con architettura moderna orientata alla velocità e alla facilità di pagamento:",
      steps: [
        {
          title: "1. Pagine Prodotto Ultra-Rapide (< 0.8s)",
          description: "Immagini ottimizzate WebP/AVIF, rendering istantaneo da mobile e navigazione fluida tra varianti e collezioni.",
          bullets: ["Caricamento < 1s da 4G", "UI mobile-first con pulsanti a portata di pollice", "Filtri categoria immediati"]
        },
        {
          title: "2. Checkout One-Step con Apple Pay e Google Pay",
          description: "Acquisto con 1 click senza obbligo di creare un account password prima di completare il pagamento.",
          bullets: ["Integrazione Stripe e PayPal", "Autocompletamento indirizzo con Google Places", "Barra di spedizione gratuita dinamica"]
        },
        {
          title: "3. Sincronizzazione Magazzino e Spedizioni",
          description: "Collegamento con software di spedizione per generare lettere di vettura e aggiornare le giacenze in tempo reale.",
          bullets: ["Avvisi di stock esaurito", "Tracking ordine automatico via email", "Fatturazione automatica SDI"]
        }
      ]
    },
    results: [
      { metric: "Tempo caricamento prodotto", before: "6.2 secondi", after: "0.7 secondi" },
      { metric: "Tasso di abbandono carrello", before: "88%", after: "59% (-29% di abbandoni)" },
      { metric: "Tasso di conversione medio", before: "0.6%", after: "2.4% (+300%)" },
      { metric: "Ordini mensili medi", before: "8 - 12 ordini", after: "45 - 60 ordini ricorrenti" }
    ],
    faqs: [
      {
        question: "È meglio Shopify, WooCommerce o una soluzione su misura?",
        answer: "Per chi cerca velocità estrema, zero canoni mensili fissi e personalizzazione totale del checkout, una soluzione Next.js + Stripe è imbattibile. Per cataloghi complessi con molte promozioni, Shopify come motore backend e frontend custom offre la combinazione perfetta."
      },
      {
        question: "Come vengono gestite le etichette di spedizione e la fatturazione?",
        answer: "Integriamo l'e-commerce con servizi come Sendcloud o Qapla' e con software di fatturazione elettronica (es. Fatture in Cloud), automatizzando la generazione delle etichette del corriere e delle fatture."
      }
    ]
  },
  {
    slug: "sviluppo-gestionali-su-misura-crema-officina-logistica",
    title: "Sviluppo Gestionali su Misura a Crema: Eliminare 40 Fogli Excel con un Software Web Dedicato",
    subtitle: "Case study pratico su come un'azienda di impianti industriali del cremasco ha digitalizzato commesse, rapportini e magazzino con una web app su misura.",
    description: "Sviluppo software gestionali personalizzati per aziende a Crema. Come sostituire fogli Excel e chat WhatsApp con un gestionale web sicuro e facile da usare.",
    keywords: ["sviluppo gestionali su misura crema", "software gestionale personalizzato per aziende crema", "sviluppatore software freelance crema", "creazione web app aziendali crema"],
    targetClient: "Azienda di Impianti e Manutenzioni Industriali (Crema)",
    need: "Sostituire un sistema frammentato di decine di fogli Excel e rapportini cartacei con un software gestionale web centralizzato accessibile anche da tablet.",
    category: "Gestionali & Web App",
    readTime: "6 min",
    date: "Settembre 2026",
    badge: "Software Custom",
    problem: {
      title: "Il Problema: Il Caos Operativo tra Fogli di Calcolo e WhatsApp",
      intro: "L'azienda contava 4 impiegati in ufficio e 12 tecnici sul campo che operavano ogni giorno tra Lombardia ed Emilia-Romagna:",
      points: [
        "Oltre 30 fogli Excel duplicati per tracciare ore lavorate, commesse aperte e pezzi di ricambio.",
        "Rapportini cartacei compilati a mano o foto sfuocate su WhatsApp che l'ufficio doveva ricopiare faticosamente.",
        "Nessun tracciamento dello storico interventi: impossibile sapere al volo quali pezzi fossero stati montati l'anno prima su un impianto.",
        "Errori frequenti di fatturazione e ritardi di 15 giorni nell'emissione del documento finale."
      ],
      quote: "I software ERP preconfezionati che avevamo valutato costavano 20.000 € più canoni per utente, ma erano troppo complicati e rigidi per il nostro modo di lavorare."
    },
    solution: {
      title: "La Soluzione: Web App Gestionale Modellata sui Processi Reali",
      intro: "Abbiamo sviluppato una web application proprietaria, leggera e utilizzabile sia da PC che da smartphone in cantiere:",
      steps: [
        {
          title: "1. Interfaccia Semplice per Ruoli",
          description: "I tecnici vedono solo gli interventi del giorno, caricano le foto del prima/dopo e registrano i pezzi impiegati in 3 tocchi.",
          bullets: ["Pulsanti grandi e chiari", "Firma digitale del cliente su touchscreen", "Generazione PDF immediata"]
        },
        {
          title: "2. Controllo Magazzino e Allarmi Scorta",
          description: "Scarico automatico dei ricambi utilizzati e notifica via email quando un articolo scende sotto la scorta di sicurezza.",
          bullets: ["Giacenze in tempo reale", "Storico matricole per cliente", "Esportazione CSV per il commercialista"]
        },
        {
          title: "3. Proprietà Totale Senza Canoni a Utente",
          description: "Architettura con database PostgreSQL sicuro su cloud conforme GDPR. Nessun costo ricorrente per ogni nuovo operaio assunto.",
          bullets: ["Dati di proprietà dell'azienda", "Backup orari automatici", "Autenticazione a due fattori"]
        }
      ]
    },
    results: [
      { metric: "Tempo medio emissione fattura", before: "12 - 15 giorni", after: "24 ore (immediato)" },
      { metric: "Ore d'ufficio per inserimento dati", before: "18 ore / settimana", after: "< 2 ore / settimana" },
      { metric: "Errori di trascrizione rapportini", before: "Frequenti (calli illeggibili)", after: "Zero contestazioni" },
      { metric: "Canoni software terzi", before: "Costi ricorrenti a licenza", after: "Zero canoni per utente" }
    ],
    faqs: [
      {
        question: "I nostri dipendenti non sono esperti di tecnologia, riusciranno a usarlo?",
        answer: "Assolutamente sì. L'interfaccia è pensata specificamente per chi è abituato al lavoro manuale: pochi pulsanti, testi in italiano chiaro e zero gergo informatico. L'apprendimento richiede meno di 20 minuti."
      },
      {
        question: "I dati dell'azienda sono al sicuro?",
        answer: "I dati risiedono su database crittografati con backup automatici continui in datacenter europei certificati ISO 27001 e conformi GDPR."
      }
    ]
  },
  {
    slug: "creazione-web-app-aziendali-crema-portale-clienti-b2b",
    title: "Creazione Web App Aziendali a Crema: Il Portale Ordini B2B che Risparmia 15 Ore di Centralino",
    subtitle: "Come un grossista cremasco ha automatizzato l'inoltro ordini e la consultazione listini per oltre 150 rivenditori.",
    description: "Case study sulla creazione di web app aziendali e portali riservati B2B a Crema. Ordini veloci per codice articolo, listini personalizzati e download documenti contabili.",
    keywords: ["creazione web app aziendali crema", "software gestionale personalizzato per aziende crema", "sviluppatore software freelance crema", "sviluppo gestionali su misura crema"],
    targetClient: "Distributore all'Ingrosso / Grossista del Cremasco",
    need: "Creare un'area riservata B2B per consentire ai clienti abituali di consultare listini personalizzati, schede tecniche e inoltrare ordini h24.",
    category: "Gestionali & Web App",
    readTime: "5 min",
    date: "Settembre 2026",
    badge: "Portale B2B",
    problem: {
      title: "Il Problema: Il Collo di Bottiglia degli Ordini Telefonici e WhatsApp",
      intro: "Un distributore all'ingrosso di Crema gestiva quotidianamente decine di ordini via telefono, fax e messaggi vocali:",
      points: [
        "Personale commerciale costretto a passare 3 ore al giorno a trascrivere codici articolo al computer.",
        "Listini personalizzati con matrici di sconto complesse per cliente gestite a memoria o su agende.",
        "Clienti che ordinavano merce temporaneamente a zero senza saperlo.",
        "Richieste continue di rinvio copie conformi di fatture e documenti di trasporto smarriti."
      ],
      quote: "Non potevamo assumere un'altra persona in ufficio solo per rispondere al telefono e confermare i prezzi dei codici articolo."
    },
    solution: {
      title: "La Soluzione: Portale Web App B2B con Next.js e TypeScript",
      intro: "Sviluppo di una piattaforma web privata, veloce e intuitiva accessibile con credenziali aziendali:",
      steps: [
        {
          title: "1. Calcolo Prezzi e Sconti Dinamico",
          description: "Ogni rivenditore effettua il login e visualizza all'istante il proprio prezzo netto contrattuale, senza rivelare sconti concessi ad altri.",
          bullets: ["Listini riservati", "Controllo disponibilità a semaforo", "Funzione riordino veloce del mese precedente"]
        },
        {
          title: "2. Importazione Massiva e Schede Tecniche",
          description: "Possibilità di caricare direttamente file Excel con codici e quantità, e download istantaneo di schede di sicurezza (MSDS) in PDF.",
          bullets: ["Caricamento file ordini", "Download fatture e DDT", "Notifica automatica presa in carico ordine"]
        },
        {
          title: "3. Sincronizzazione con il Gestionale Centrale",
          description: "Gli ordini validati vengono trasmessi via API direttamente al server aziendale per l'elaborazione del magazzino.",
          bullets: ["Integrazione API/webhook", "Zero trascrizioni manuali", "Compatibile con qualsiasi browser"]
        }
      ]
    },
    results: [
      { metric: "Ordini transitati online", before: "0% (tutto manuale)", after: "72% degli ordini ricevuti dalla web app" },
      { metric: "Tempo risparmiato dal reparto vendite", before: "15 ore / settimana perse al centralino", after: "15 ore reinvestite in new business" },
      { metric: "Errori di spedizione merce", before: "3 - 4 errori al mese", after: "Azzerati completamente" },
      { metric: "Disponibilità per il cliente", before: "Solo orari d'ufficio (8:30 - 18:00)", after: "Ordini attivi 24 ore su 24, 7 giorni su 7" }
    ],
    faqs: [
      {
        question: "Possiamo collegare la web app al nostro gestionale (es. Zucchetti, TeamSystem)?",
        answer: "Sì. Se il vostro software gestionale supporta API REST o esportazioni pianificate (CSV/JSON), possiamo sincronizzare articoli, prezzi e ordini automaticamente."
      },
      {
        question: "I clienti possono accedere da smartphone?",
        answer: "Sì, l'applicazione è una Progressive Web App totalmente responsive, utilizzabile da PC, tablet e qualsiasi smartphone senza necessità di download dagli store."
      }
    ]
  },
  {
    slug: "rifacimento-sito-web-aziendale-crema-modernizzazione-performance",
    title: "Rifacimento Sito Web Aziendale a Crema: Da un Sito Lento a Punteggio 98/100",
    subtitle: "Come rinnovare un sito web aziendale obsoleto preservando il ranking SEO storico e migliorando drasticamente la velocità di conversione.",
    description: "Case study sul rifacimento e modernizzazione di siti web aziendali a Crema. Migrazione da WordPress a Next.js con redirect 301 e Core Web Vitals eccellenti.",
    keywords: ["rifacimento sito web aziendale crema", "posizionamento seo siti internet crema", "creazione siti web crema", "web designer freelance crema"],
    targetClient: "Azienda di Servizi Energetici e Impianti (Crema)",
    need: "Rifare completamente un sito web lento (6.8 secondi), insicuro e non responsive, preservando le posizioni su Google e aumentando i contatti.",
    category: "Websites",
    readTime: "5 min",
    date: "Settembre 2026",
    badge: "Restyling & Performance",
    problem: {
      title: "Il Problema: Il Sito 'Zavorra' che Faceva Perdere Clienti",
      intro: "L'azienda aveva realizzato il sito nel 2017. Con il passare degli anni e l'aggiunta disordinata di plugin, la piattaforma era diventata ingestibile:",
      points: [
        "Tempo di caricamento da mobile di 6.8 secondi: oltre l'80% degli utenti abbandonava la pagina prima di vederla.",
        "Punteggio Google PageSpeed di appena 28/100.",
        "Plugin di sicurezza obsoleti con vulnerabilità note.",
        "Form di contatto tagliato su iPhone e conversioni ferme allo 0.2%."
      ],
      quote: "Volevamo rifare il sito da tempo, ma avevamo il terrore di perdere il posizionamento storico su Google che ci portava qualche cliente ogni mese."
    },
    solution: {
      title: "La Soluzione: Metodo di Migrazione Rigoroso e Architettura Next.js",
      intro: "Un percorso di rifacimento in 4 fasi che ha garantito continuità SEO e salto generazionale di prestazioni:",
      steps: [
        {
          title: "1. Mappatura SEO Preventiva e Redirect 301",
          description: "Tracciamento meticoloso di tutti gli URL storici con impostazione di reindirizzamenti permanenti verso le nuove pagine, salvaguardando il 100% dell'autorità Google.",
          bullets: ["Zero errori 404", "Preservazione metatag performanti", "Miglioramento dei segnali di user experience"]
        },
        {
          title: "2. Sviluppo in Next.js e Tailwind CSS",
          description: "Generazione statica del codice HTML: caricamento istantaneo, zero database esposti e sicurezza di livello aziendale.",
          bullets: ["Tempo di risposta sotto 0.5s", "Interfaccia pulita e moderna", "Componenti accessibili e responsive"]
        },
        {
          title: "3. Configuratore / Preventivatore Interattivo",
          description: "Inserimento di un form guidato in 3 step per calcolare il fabbisogno energetico e richiedere un sopralluogo a Crema e provincia.",
          bullets: ["Lead qualification immediata", "Notifiche istantanee all'ufficio commerciale"]
        }
      ]
    },
    results: [
      { metric: "Tempo caricamento mobile", before: "6.8 secondi", after: "0.5 secondi" },
      { metric: "Punteggio Google PageSpeed", before: "28 / 100", after: "98 / 100" },
      { metric: "Posizionamento SEO Google", before: "In progressivo calo", after: "Recuperate e migliorate (+4 posizioni medie)" },
      { metric: "Lead e contatti generati al mese", before: "3 - 4 contatti generici", after: "21 richieste profilate con dati impianto" }
    ],
    faqs: [
      {
        question: "Cosa succede al mio posizionamento su Google quando si rifà il sito?",
        answer: "Con una corretta strategia di redirect 301, preservazione dei tag chiave e miglioramento dei Core Web Vitals, il ranking non solo viene protetto ma solitamente beneficia di un incremento sensibile."
      },
      {
        question: "Quanto costa rifare un sito web aziendale a Crema?",
        answer: "I costi variano in base alla quantità di contenuti da migrare e alla complessità funzionale, ma a differenza delle grandi agenzie offriamo preventivi a prezzo fisso senza costi orari imprevisti."
      }
    ]
  },
  {
    slug: "consulente-ecommerce-strategia-vendita-online-crema",
    title: "Consulente E-Commerce a Crema: Raddoppiare il Tasso di Conversione di uno Shop Esistente",
    subtitle: "Analisi di usabilità (CRO), eliminazione degli ostacoli al checkout e recupero carrelli abbandonati per trasformare visitatori in clienti paganti.",
    description: "Consulenza e-commerce a Crema: come aumentare il conversion rate, ottimizzare la pagina prodotto e velocizzare i pagamenti online su smartphone.",
    keywords: ["consulente ecommerce crema", "realizzazione shop online crema e provincia", "creazione ecommerce crema", "sviluppo siti ecommerce per negozi crema"],
    targetClient: "Brand di Prodotti Artigianali / Cosmesi (Crema)",
    need: "Ottimizzare uno store online che riceveva buon traffico social ma registrava un tasso di conversione bassissimo e troppi carrelli abbandonati.",
    category: "E-Commerce",
    readTime: "5 min",
    date: "Settembre 2026",
    badge: "Consulenza & CRO",
    problem: {
      title: "Il Problema: Tanto Traffico ma Pochi Ordini Reali",
      intro: "L'azienda investiva oltre 1.500 € al mese in inserzioni su Instagram e Facebook, portando circa 6.500 visitatori qualificati al mese sullo shop:",
      points: [
        "Tasso di conversione dello 0.4% (appena 26 ordini al mese).",
        "Abbandono del carrello all'82%: gli utenti riempivano il cestino ma scappavano al momento di pagare.",
        "Selettore fragranze e formati che si inceppava su smartphone.",
        "Costo di spedizione (7,90 €) rivelato a sorpresa solo nell'ultima schermata."
      ],
      quote: "Continuavamo ad aumentare il budget pubblicitario credendo servisse più traffico, quando in realtà stavamo versando acqua in un secchio bucato."
    },
    solution: {
      title: "La Soluzione: Audit UX/CRO e Ottimizzazione Tecnica",
      intro: "Un intervento chirurgico mirato a eliminare ogni frizione d'acquisto:",
      steps: [
        {
          title: "1. Revisione Scheda Prodotto",
          description: "Informazioni fondamentali posizionate prima dello scroll: disponibilità reale, tempi di spedizione a Crema e in Italia (24/48h) e recensioni verificate in evidenza.",
          bullets: ["Selettore varianti reattivo", "Barra dinamica per spedizione gratuita sopra i 50 €", "Badge di garanzia soddisfatti o rimborsati"]
        },
        {
          title: "2. Express Checkout One-Click",
          description: "Integrazione in cima al carrello dei pulsanti Apple Pay, Google Pay e Satispay con compilazione automatica dell'indirizzo.",
          bullets: ["Zero registrazione obbligatoria", "Checkout in una sola pagina", "Metodi di pagamento locali italiani"]
        },
        {
          title: "3. Workflow Recupero Carrelli Automatico",
          description: "Sequenza di due promemoria leggeri via email e messaggio a distanza di 1 ora e 24 ore dall'abbandono del carrello.",
          bullets: ["Link diretto al carrello ripristinato", "Tasso di recupero del 14%", "Zero spam invasivo"]
        }
      ]
    },
    results: [
      { metric: "Tasso di conversione globale", before: "0.42%", after: "1.85% (+340%)" },
      { metric: "Valore medio dell'ordine (AOV)", before: "38,00 €", after: "49,50 € (+30%)" },
      { metric: "Carrelli abbandonati recuperati", before: "2%", after: "14%" },
      { metric: "Fatturato mensile online", before: "~980 € / mese", after: "~5.900 € / mese a parità di spesa adv" }
    ],
    faqs: [
      {
        question: "Effettuate consulenze anche su e-commerce già attivi su Shopify o WooCommerce?",
        answer: "Sì. Eseguiamo audit completi su piattaforme esistenti per individuare bug, problemi di velocità e colli di bottiglia nel checkout senza dover per forza rifare tutto da zero."
      },
      {
        question: "Quanto dura un intervento di ottimizzazione conversioni?",
        answer: "L'analisi iniziale e le modifiche ad alto impatto (checkout, mobile UX, tracking) si implementano in genere entro 2-3 settimane."
      }
    ]
  },
  {
    slug: "posizionamento-seo-e-visibilita-google-crema-attivita-locali",
    title: "Posizionamento SEO e Visibilità su Google a Crema: Scalare il Local Pack di Google Maps",
    subtitle: "Come un'attività locale o studio professionale di Crema conquista le prime 3 posizioni sulla mappa e quadruplica le chiamate dai clienti.",
    description: "Guida e case study sulla Local SEO a Crema. Come ottimizzare Google Business Profile, Schema.org e posizionarsi nelle prime posizioni a Crema e provincia.",
    keywords: ["posizionamento seo siti internet crema", "migliorare presenza online attività crema", "consulente visibilità su google crema", "ottimizzazione google per attività locali crema"],
    targetClient: "Centro Fisioterapico / Poliambulatorio Specialistico (Crema)",
    need: "Farsi trovare da pazienti e clienti del territorio cremasco nelle prime 3 posizioni di Google Maps e nelle ricerche organiche locali.",
    category: "Local SEO & Performance",
    readTime: "4 min",
    date: "Settembre 2026",
    badge: "Local SEO",
    problem: {
      title: "Il Problema: Invisibilità Nelle Ricerche Geografiche",
      intro: "Il centro disponeva di specialisti eccellenti e macchinari all'avanguardia, ma sui motori di ricerca era praticamente trasparente:",
      points: [
        "Scheda Google Business Profile generata in automatico, priva di foto, orari precisi e con sole 3 recensioni.",
        "Incongruenza dei dati aziendali (NAP): indirizzo e telefono diversi tra sito, social e portali locali.",
        "Sito web privo di dati strutturati Schema.org: Google non collegava le pagine ai trattamenti specifici.",
        "Posizione oltre la 15ª su Google Maps per 'fisioterapia Crema' e ricerche correlate."
      ],
      quote: "Vedevamo pazienti andare in strutture concorrenti a Pandino o Lodi semplicemente perché apparivano subito in cima quando cercavano da smartphone."
    },
    solution: {
      title: "La Soluzione: Ottimizzazione Local SEO a 360° per Crema",
      intro: "Un piano strategico focalizzato sui tre fattori chiave di Google per le ricerche locali (Rilevanza, Distanza, Evidenza):",
      steps: [
        {
          title: "1. Bonifica e Potenziamento Google Business Profile",
          description: "Configurazione della categoria principale e secondarie, caricamento foto degli ambienti ad alta definizione, listino servizi dettagliato.",
          bullets: ["Categorie primarie e secondarie ottimizzate", "Link breve per recensioni via WhatsApp", "Post periodici e orari verificati"]
        },
        {
          title: "2. Dati Strutturati Schema.org nel Codice del Sito",
          description: "Inserimento del markup JSON-LD (MedicalBusiness / LocalBusiness) con coordinate GPS, orari, numeri di telefono e aree servite.",
          bullets: ["Markup semantico JSON-LD", "Caricamento mobile in 0.5 secondi", "Pulsante chiamata rapida 'Click-to-Call'"]
        },
        {
          title: "3. Landing Page Locali per Specialità",
          description: "Creazione di pagine dedicate per ciascuna branca: Fisioterapia a Crema, Riabilitazione Sportiva, Osteopatia Posturale.",
          bullets: ["Testimonianze reali del territorio", "Mappa interattiva con indicazioni stradali", "Contenuti orientati alle domande frequenti dei pazienti"]
        }
      ]
    },
    results: [
      { metric: "Posizione Google Maps ('fisioterapia Crema')", before: "Posizione 18", after: "Posizione 2 (Top 3 Local Pack)" },
      { metric: "Visualizzazioni scheda Google Maps", before: "350 / mese", after: "2.800+ / mese" },
      { metric: "Chiamate telefoniche dirette da Google", before: "4 - 6 al mese", after: "38 chiamate / mese tracciate" },
      { metric: "Recensioni a 5 stelle verificate", before: "3 recensioni (4.0)", after: "42 recensioni (4.9)" }
    ],
    faqs: [
      {
        question: "Quanto tempo ci vuole per scalare Google Maps a Crema?",
        answer: "A differenza della SEO nazionale, a livello locale a Crema i primi miglioramenti sensibili in termini di visualizzazioni e chiamate si riscontrano in genere tra i 30 e i 60 giorni dalla corretta configurazione tecnica."
      },
      {
        question: "Bisogna continuare a pagare ogni mese per mantenere la posizione?",
        answer: "No. Il posizionamento organico locale è un asset stabile. Una volta conquistata la vetta, è sufficiente mantenere aggiornati gli orari e raccogliere con regolarità recensioni autentiche dei clienti."
      }
    ]
  },
  {
    slug: "web-designer-freelance-vs-agenzia-crema",
    title: "Web Designer Freelance vs Agenzia a Crema: Guida alla Scelta per Imprenditori e PMI",
    subtitle: "Confronto trasparente tra agenzia web tradizionale e sviluppatore freelance full-stack a Crema: costi, tempi, flessibilità e qualità del codice.",
    description: "Web designer freelance o agenzia a Crema? Tabella di confronto oggettiva per titolari di PMI e professionisti. Perché evitare preventivi gonfiati e discovery theatre.",
    keywords: ["web designer freelance crema", "migliore agenzia web a crema per aziende", "agenzia digital marketing per pmi crema", "creazione siti web crema"],
    targetClient: "Titolare di PMI o Studio Professionale a Crema in Fase Decisionale",
    need: "Capire a chi affidare la realizzazione del sito o software aziendale senza sorprese di budget o ritardi di mesi.",
    category: "Guide & Costi",
    readTime: "6 min",
    date: "Settembre 2026",
    badge: "Guida Comparativa",
    problem: {
      title: "Il Dilemma: A Chi Affidare il Proprio Progetto Digitale?",
      intro: "Quando un'azienda cremasca decide di investire sul proprio sito web o software, si scontra con due realtà contrapposte:",
      points: [
        "Le grandi agenzie che propongono preventivi da 10.000 € con mesi di riunioni ('discovery theatre') e canoni di gestione obbligatori.",
        "I programmatori improvvisati a basso costo che consegnano template scadenti e spariscono alla prima richiesta di assistenza.",
        "Il 'telefono senza fili' delle agenzie: parli con un commerciale, che riferisce a un project manager, che delega a uno stagista junior.",
        "La mancanza di trasparenza sulla reale proprietà del codice sorgente."
      ],
      quote: "Volevamo solo un sito veloce e ben fatto, senza dover fare sei riunioni di due ore per decidere la sfumatura di un pulsante."
    },
    solution: {
      title: "La Soluzione: Il Modello Agile del Freelance Full-Stack",
      intro: "Un approccio diretto, chiaro e fondato sulla concretezza ingegneristica:",
      steps: [
        {
          title: "1. Contatto Diretto con Chi Scrive il Codice",
          description: "Nessun intermediario non tecnico. Le decisioni operative si concordano direttamente con chi sviluppa il progetto.",
          bullets: ["Comunicazione rapida e reattiva", "Risposte tecniche precise", "Tempi di consegna certi"]
        },
        {
          title: "2. Nessun Costo di Struttura Inutile",
          description: "Non paghi gli uffici di rappresentanza o la piramide gestionale dell'agenzia: paghi solo il valore del lavoro svolto.",
          bullets: ["Prezzo fisso garantito nel brief", "Nessun canone mensile obbligatorio", "Codice moderno e pulito (Next.js / Tailwind)"]
        },
        {
          title: "3. Proprietà Totale Senza Vincoli (Zero Lock-In)",
          description: "Il codice e il sito sono al 100% tuoi, con documentazione chiara che consente a qualsiasi sviluppatore di proseguire i lavori in futuro.",
          bullets: ["Accesso amministrativo totale", "Codice conforme agli standard", "Autonomia per modifiche future"]
        }
      ]
    },
    results: [
      { metric: "Interlocutore di progetto", before: "Account / Commerciale", after: "Direttamente lo sviluppatore" },
      { metric: "Tempi medi di consegna", before: "3 - 5 mesi di passaggi interni", after: "2 - 4 settimane con scadenze precise" },
      { metric: "Velocità sito (PageSpeed)", before: "Spesso media (40 - 65)", after: "Eccellente (95 - 100)" },
      { metric: "Costi di manutenzione forzati", before: "Canoni annuali obbligatori", after: "Zero vincoli (interventi su richiesta)" }
    ],
    faqs: [
      {
        question: "Cosa succede se in futuro avrò bisogno di modifiche?",
        answer: "Il codice è scritto in TypeScript moderno e pulito secondo le convenzioni standard di Next.js. Potrai rivolgerti a me in qualsiasi momento con un intervento a tariffa concordata, oppure far intervenire qualsiasi altro professionista senza dover riscrivere nulla."
      },
      {
        question: "Offri garanzia sul lavoro consegnato?",
        answer: "Certamente. Ogni progetto include un periodo di collaudo e assistenza post-rilascio per correggere qualsiasi eventuale anomalia a costo zero."
      }
    ]
  },
  {
    slug: "preventivo-costo-realizzazione-sito-internet-crema",
    title: "Preventivo e Costo Realizzazione Sito Internet a Crema: Guida Trasparente ai Prezzi",
    subtitle: "Quanto costa davvero fare un sito web professionale a Crema? Fasce di investimento per siti vetrina, e-commerce e gestionali, ed errori da evitare.",
    description: "Guida trasparente ai prezzi per la realizzazione di siti web a Crema. Quanto costa un sito vetrina, un e-commerce o una web app aziendale a prezzo fisso.",
    keywords: ["preventivo sito web crema", "costo realizzazione sito internet crema", "creazione siti web crema", "sviluppo siti web per pmi crema e provincia"],
    targetClient: "Imprenditore, Artigiano o Libero Professionista a Crema",
    need: "Orientarsi tra preventivi da 300 € e offerte da 10.000 € per capire cosa determina il valore reale di un investimento digitale.",
    category: "Guide & Costi",
    readTime: "5 min",
    date: "Settembre 2026",
    badge: "Trasparenza Prezzi",
    problem: {
      title: "Il Problema: L'Opacità dei Preventivi Web",
      intro: "La domanda più frequente di chi vuole fare un sito a Crema è: 'Quanto costa?'. La risposta tipica del settore è spesso un frustrante 'Dipende', seguito da proposte economiche indecifrabili:",
      points: [
        "Siti civetta a 300 € che si rivelano template gratuiti lenti, pieni di bug e con costi nascosti ad ogni richiesta.",
        "Preventivi di agenzie gonfiati con voci vaghe come 'strategia di posizionamento olistica' e canoni mensili perenni.",
        "Mancanza di chiarezza su chi sia l'effettivo proprietario del dominio e dei contenuti.",
        "Preventivi orari a consuntivo che lievitano a fine progetto con spiacevoli sorprese."
      ],
      quote: "Non abbiamo problemi a investire per il nostro lavoro, ma vogliamo sapere esattamente cosa stiamo comprando, quando sarà pronto e quanto costerà alla fine."
    },
    solution: {
      title: "La Soluzione: Fasce di Prezzo Realistiche e Preventivo a Prezzo Fisso",
      intro: "Ecco una panoramica trasparente delle fasce di investimento realistiche per progetti digitali professionali:",
      steps: [
        {
          title: "Fascia 1: Sito Vetrina & Corporate per PMI e Professionisti (1.200 € - 2.500 €)",
          description: "Design su misura, tecnologia Next.js ad altissima velocità (< 1s), Local SEO per Crema e provincia, modulo contatti profilato e conformità GDPR.",
          bullets: ["Ideale per studi legali, commercialisti, officine e PMI manifatturiere", "Punteggi Google PageSpeed 95+", "Tempi di consegna: 2-4 settimane"]
        },
        {
          title: "Fascia 2: E-Commerce ad Alte Prestazioni (2.500 € - 5.500 €)",
          description: "Store rapido ottimizzato per smartphone, carrello one-step con Apple Pay/Google Pay, sincronizzazione magazzino e tracking spedizioni.",
          bullets: ["Ideale per negozi retail e produttori tipici", "Zero canoni di manutenzione forzati", "Tempi di consegna: 4-6 settimane"]
        },
        {
          title: "Fascia 3: Web App, Gestionali su Misura e Portali B2B (3.500 € - 8.000 €+)",
          description: "Digitalizzazione di flussi aziendali, aree riservate per clienti o tecnici, database PostgreSQL, integrazione API e generazione automatica PDF.",
          bullets: ["Ideale per logistica, distributori all'ingrosso e manutentori", "Sviluppo a milestone concordate", "Zero costi licenza per utente"]
        }
      ]
    },
    results: [
      { metric: "Metodo di preventivazione", before: "Tariffa oraria aperta / variabile", after: "Prezzo fisso garantito nel brief" },
      { metric: "Costi di hosting vivi", before: "Canoni esagerati di agenzia", after: "20 - 70 € / anno direttamente al provider" },
      { metric: "Tempi di risposta per stima economica", before: "1 - 2 settimane dopo riunioni", after: "Entro 24 - 48 ore dalla ricezione del brief" },
      { metric: "Proprietà intellettuale", before: "Spesso vincolata all'agenzia", after: "100% di proprietà del cliente" }
    ],
    faqs: [
      {
        question: "Come si avvia una richiesta di preventivo con Dennis Xhafaj?",
        answer: "Bastano due minuti: compili il breve modulo su dennisxhafaj.com/contact indicando cosa ti serve e quali obiettivi hai. Entro 24/48 ore riceverai una risposta chiara con ambito di lavoro, costi fissi e data di consegna."
      },
      {
        question: "Come vengono gestiti i pagamenti?",
        answer: "Tipicamente lavoriamo con un acconto iniziale (es. 40-50%) per dare il via ai lavori e il saldo finale alla pubblicazione del sito dopo il tuo collaudo e approvazione."
      }
    ]
  }
]

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((cs) => cs.slug === slug)
}

export function getAllCaseStudySlugs(): string[] {
  return CASE_STUDIES.map((cs) => cs.slug)
}
