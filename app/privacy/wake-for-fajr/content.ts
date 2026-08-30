/**
 * Wake for Fajr — privacy policy copy, in both site languages.
 *
 * Kept beside the page rather than in the shared dictionary: it is a legal
 * document that has to change as one piece, and forty prose keys would drown
 * the interface strings the rest of the site shares.
 */

export type Section = {
  h: string
  p: string[]
  list?: string[]
}

export type Policy = {
  eyebrow: string
  title: string
  subtitle: string
  updated: string
  glanceTitle: string
  glance: string[]
  sections: Section[]
  permTitle: string
  permIntro: string
  permHead: [string, string, string]
  perms: [string, string, string][]
  contactTitle: string
  contactBody: string
  contactEmail: string
  backToWork: string
}

const CONTACT_EMAIL = "xhafaj.dennis@protonmail.com"

export const POLICY: Record<"en" | "it", Policy> = {
  en: {
    eyebrow: "Privacy policy",
    title: "Wake for Fajr",
    subtitle:
      "Wake for Fajr is an alarm clock with prayer times built in. It works entirely on your phone: there is no account, no server of mine behind it, and nothing about you is sent to me.",
    updated: "Last updated 30 August 2026 · Applies to Wake for Fajr for Android, version 1.0.0",
    glanceTitle: "At a glance",
    glance: [
      "I collect no personal data. None of it reaches me, because the app has no backend to send it to.",
      "Your location is read on the phone, used on the phone to compute prayer times and the qibla, and saved on the phone. You can skip it entirely and pick a city by hand.",
      "The camera only reads the code that stops an alarm. Frames are decoded live and never stored or uploaded.",
      "No accounts, no advertising, no analytics, no crash reporting, no third-party trackers.",
      "Uninstalling the app, or clearing its storage, erases everything it holds.",
    ],
    sections: [
      {
        h: "Who is responsible",
        p: [
          "Wake for Fajr is published by Dennis Xhafaj, an independent developer based in Crema (CR), Italy, acting as data controller for the purposes of the EU General Data Protection Regulation (GDPR).",
          `For any question about this policy or about the app, write to ${CONTACT_EMAIL}. I answer these myself.`,
        ],
      },
      {
        h: "What the app keeps, and where",
        p: [
          "Everything the app remembers lives in its own private storage on your device, in the sandbox Android gives it. It is not readable by other apps, and it is not copied anywhere by me.",
          "That data is:",
        ],
        list: [
          "your alarms, timers, stopwatch laps and reminders, with their labels, repeat days and sounds;",
          "your settings: language, theme, calculation method, madhab, the adhan you chose, snooze limits;",
          "the last known coordinates and the place name used to compute prayer times, or the city you selected by hand;",
          "the text of any barcode or QR code you registered as the code that stops an alarm.",
        ],
      },
      {
        h: "Location",
        p: [
          "Prayer times depend on where you are, so the app can ask for location access. It is optional: in Settings you can turn device location off and choose a city manually, and the app will never ask the system for a position again.",
          "When it is on, the app reads a coarse position through Android's location services, uses it locally to compute the day's prayer times and the direction of the qibla, and stores the coordinates on the device so the times still work with no signal. The coordinates are never transmitted to me, and I have no way of seeing them.",
          "One nuance worth stating plainly: to show a readable place name (\"Crema, Italy\" rather than a pair of numbers), the app asks Android to turn the coordinates into a name. That request is handled by the operating system's own geocoder, which on most phones is provided by Google and may involve a network call made by Android itself. If that lookup fails, the app simply carries on with the coordinates. Google's handling of that request is governed by Google's own privacy policy, not by mine.",
        ],
      },
      {
        h: "Camera",
        p: [
          "An alarm can be set so that stopping it requires scanning a code you chose in advance — a barcode on a box in the kitchen, a QR sticker on the bathroom mirror — which is what gets you out of bed.",
          "The camera opens only on the alarm screen and in the editor where you register a code. Frames are decoded on the device, in the moment, and are never recorded, saved or uploaded. The only thing stored is the decoded text of the code you registered, so the app can compare it with what you scan. No photos or video are produced at any point.",
        ],
      },
      {
        h: "Notifications and alarms",
        p: [
          "Notifications are created locally by the app on your device. There is no push service, no notification server, and therefore no device token, no advertising ID and no identifier of any kind sent anywhere.",
          "So that an alarm rings at the right minute even on a sleeping phone, the app asks Android for exact alarms and, if you agree, for an exemption from battery optimisation. These permissions change how Android schedules the app; they do not give it access to any information about you.",
        ],
      },
      {
        h: "Connections the app makes",
        p: [
          "Wake for Fajr works offline. Prayer times are computed on the device with a published astronomical algorithm, not fetched from an API. There are exactly two moments when something leaves the phone, and neither involves me:",
        ],
        list: [
          "The first time you pick one of the recorded calls to prayer, the app downloads that single audio file from the public mirror cdn.islamic.network so it can ring offline afterwards. That server sees the request, which means your IP address and the file requested — as any website you visit would. It is operated by Islamic Network, not by me, and no adhan you never select is ever downloaded.",
          "The place-name lookup described under Location, which Android performs on the app's behalf.",
        ],
      },
      {
        h: "What the app does not do",
        p: [
          "There is no sign-up and no login. There is no analytics SDK, no crash reporter, no advertising, no social login, no marketing pixel, no fingerprinting and no third-party tracker of any sort in the app. Nothing about you is sold, rented or shared, because nothing about you is collected in the first place.",
        ],
      },
      {
        h: "Backups",
        p: [
          "Android may include an app's private data in the automatic backup of your own device, if you have that feature enabled in your Google account. That backup belongs to you and is governed by Google's terms; it is not something I can read or reach. Turning off backup for the app in your Android settings stops it.",
        ],
      },
      {
        h: "Children",
        p: [
          "The app is not directed at children and has no content aimed at them. It collects nothing from anyone, whatever their age.",
        ],
      },
      {
        h: "Your rights, and how to erase everything",
        p: [
          "Under the GDPR you have the right to access, rectify, erase, restrict and port your personal data, and to object to its processing. In practice these rights have almost nothing to bite on here: I hold no data about you, so there is nothing for me to hand over, correct or delete on your behalf.",
          "The data on your device is entirely under your control. Deleting an alarm, a reminder or a saved code removes it. Clearing the app's storage in Android's settings (Settings › Apps › Wake for Fajr › Storage › Clear data), or uninstalling the app, erases everything it holds, permanently and locally.",
          "If you believe your data has been handled improperly, you can contact me first, and you retain the right to complain to a supervisory authority — in Italy, the Garante per la protezione dei dati personali.",
        ],
      },
      {
        h: "Changes to this policy",
        p: [
          "If a future version of the app changes what it touches, this page changes with it, and the date at the top will say when. Material changes will also be described in the app's release notes on Google Play.",
        ],
      },
    ],
    permTitle: "Permissions, one by one",
    permIntro:
      "Google Play lists the permissions an app declares without saying why. Here is the whole list, with a reason for each.",
    permHead: ["Permission", "Why the app asks for it", "Leaves your phone?"],
    perms: [
      ["Location (approximate and precise)", "Compute prayer times and the qibla direction for where you are. Optional — a manually chosen city replaces it.", "No (except the place-name lookup Android performs)"],
      ["Camera", "Read the barcode or QR code that stops an alarm.", "No"],
      ["Notifications", "Show the alarm, the countdown and reminders.", "No"],
      ["Exact alarms", "Ring at the exact minute rather than whenever the system feels like it.", "No"],
      ["Ignore battery optimisation", "Keep alarms reliable on phones that aggressively suspend apps. Optional.", "No"],
      ["Run at startup", "Restore your scheduled alarms after the phone reboots.", "No"],
      ["Vibration and wake lock", "Vibrate and light the screen while an alarm rings.", "No"],
    ],
    contactTitle: "Contact",
    contactBody:
      "Questions about this policy, or about anything the app does, go straight to me — Dennis Xhafaj, Crema (CR), Italy.",
    contactEmail: CONTACT_EMAIL,
    backToWork: "← Back to work",
  },

  it: {
    eyebrow: "Informativa sulla privacy",
    title: "Wake for Fajr",
    subtitle:
      "Wake for Fajr è una sveglia con gli orari delle preghiere integrati. Funziona interamente sul telefono: non c'è un account, non c'è un mio server dietro, e su di te non mi arriva nulla.",
    updated: "Ultimo aggiornamento 30 agosto 2026 · Vale per Wake for Fajr per Android, versione 1.0.0",
    glanceTitle: "In breve",
    glance: [
      "Non raccolgo alcun dato personale. Non mi arriva nulla, perché l'app non ha un backend a cui mandarlo.",
      "La posizione viene letta sul telefono, usata sul telefono per calcolare gli orari e la qibla, e salvata sul telefono. Puoi rinunciarvi del tutto e scegliere una città a mano.",
      "La fotocamera legge solo il codice che spegne una sveglia. Le immagini sono decodificate al volo e mai salvate né inviate.",
      "Nessun account, nessuna pubblicità, nessuna analitica, nessun report di crash, nessun tracciatore di terze parti.",
      "Disinstallando l'app, o cancellandone i dati, sparisce tutto quello che conserva.",
    ],
    sections: [
      {
        h: "Chi è responsabile",
        p: [
          "Wake for Fajr è pubblicata da Dennis Xhafaj, sviluppatore indipendente con sede a Crema (CR), Italia, che agisce come titolare del trattamento ai sensi del Regolamento europeo sulla protezione dei dati (GDPR).",
          `Per qualsiasi domanda su questa informativa o sull'app, scrivi a ${CONTACT_EMAIL}. Rispondo personalmente.`,
        ],
      },
      {
        h: "Cosa conserva l'app, e dove",
        p: [
          "Tutto ciò che l'app ricorda resta nella sua area privata sul dispositivo, nella sandbox che Android le assegna. Non è leggibile dalle altre app e non viene copiato da nessuna parte da me.",
          "Questi dati sono:",
        ],
        list: [
          "le sveglie, i timer, i giri del cronometro e i promemoria, con etichette, giorni di ripetizione e suoni;",
          "le impostazioni: lingua, tema, metodo di calcolo, madhab, l'adhan scelto, il limite di rinvii;",
          "le ultime coordinate note e il nome del luogo usati per calcolare gli orari, oppure la città che hai scelto a mano;",
          "il testo del codice a barre o QR che hai registrato come codice per spegnere una sveglia.",
        ],
      },
      {
        h: "Posizione",
        p: [
          "Gli orari delle preghiere dipendono da dove ti trovi, quindi l'app può chiedere l'accesso alla posizione. È facoltativo: dalle impostazioni puoi disattivare la posizione del dispositivo e scegliere una città manualmente, e l'app non chiederà più al sistema dove sei.",
          "Quando è attiva, l'app legge una posizione approssimata tramite i servizi di localizzazione di Android, la usa in locale per calcolare gli orari del giorno e la direzione della qibla, e salva le coordinate sul dispositivo perché gli orari funzionino anche senza rete. Le coordinate non mi vengono mai trasmesse e non ho modo di vederle.",
          "Una precisazione doverosa: per mostrare un nome leggibile (\"Crema, Italia\" invece di due numeri), l'app chiede ad Android di trasformare le coordinate in un nome. Quella richiesta è gestita dal geocodificatore del sistema operativo, che sulla maggior parte dei telefoni è fornito da Google e può comportare una chiamata di rete fatta da Android stesso. Se la ricerca fallisce, l'app prosegue con le sole coordinate. Il trattamento di quella richiesta da parte di Google è regolato dall'informativa di Google, non dalla mia.",
        ],
      },
      {
        h: "Fotocamera",
        p: [
          "Una sveglia può essere impostata in modo che per spegnerla serva scansionare un codice scelto in anticipo — il codice a barre di una scatola in cucina, un adesivo QR sullo specchio del bagno — ed è questo che ti fa alzare dal letto.",
          "La fotocamera si apre solo nella schermata della sveglia e nell'editor dove registri un codice. Le immagini sono decodificate sul dispositivo, sul momento, e non vengono mai registrate, salvate o inviate. L'unica cosa memorizzata è il testo del codice che hai registrato, per poterlo confrontare con quello che scansioni. Non viene prodotta alcuna foto o video, in nessun momento.",
        ],
      },
      {
        h: "Notifiche e sveglie",
        p: [
          "Le notifiche sono create localmente dall'app sul tuo dispositivo. Non c'è un servizio push, non c'è un server di notifiche e quindi non esiste alcun token del dispositivo, alcun ID pubblicitario o identificatore di altro tipo inviato da qualche parte.",
          "Perché una sveglia suoni al minuto giusto anche a telefono addormentato, l'app chiede ad Android le sveglie esatte e, se acconsenti, l'esenzione dall'ottimizzazione della batteria. Questi permessi cambiano il modo in cui Android pianifica l'app; non le danno accesso ad alcuna informazione su di te.",
        ],
      },
      {
        h: "Connessioni che l'app effettua",
        p: [
          "Wake for Fajr funziona offline. Gli orari sono calcolati sul dispositivo con un algoritmo astronomico pubblicato, non scaricati da un'API. Ci sono esattamente due momenti in cui qualcosa esce dal telefono, e nessuno dei due passa da me:",
        ],
        list: [
          "La prima volta che scegli una delle chiamate alla preghiera registrate, l'app scarica quel singolo file audio dal mirror pubblico cdn.islamic.network, così da poter suonare offline in seguito. Quel server vede la richiesta, cioè il tuo indirizzo IP e il file richiesto — come farebbe qualsiasi sito che visiti. È gestito da Islamic Network, non da me, e nessun adhan che non selezioni viene mai scaricato.",
          "La ricerca del nome del luogo descritta nella sezione Posizione, che Android esegue per conto dell'app.",
        ],
      },
      {
        h: "Cosa l'app non fa",
        p: [
          "Non c'è registrazione né login. Nell'app non c'è alcun SDK di analitica, alcun raccoglitore di crash, alcuna pubblicità, alcun login social, alcun pixel di marketing, alcun fingerprinting e alcun tracciatore di terze parti. Niente che ti riguardi viene venduto, ceduto o condiviso, perché niente che ti riguardi viene raccolto in partenza.",
        ],
      },
      {
        h: "Backup",
        p: [
          "Android può includere i dati privati di un'app nel backup automatico del tuo dispositivo, se hai attivato quella funzione nel tuo account Google. Quel backup è tuo ed è regolato dalle condizioni di Google; non è qualcosa che io possa leggere o raggiungere. Disattivando il backup per l'app nelle impostazioni di Android, la cosa si ferma lì.",
        ],
      },
      {
        h: "Minori",
        p: [
          "L'app non è rivolta ai minori e non contiene materiale pensato per loro. Non raccoglie nulla da nessuno, a qualsiasi età.",
        ],
      },
      {
        h: "I tuoi diritti, e come cancellare tutto",
        p: [
          "Il GDPR ti riconosce il diritto di accedere ai tuoi dati personali, rettificarli, cancellarli, limitarne il trattamento, riceverli in forma portabile e opporti al trattamento. In pratica qui questi diritti hanno ben poco su cui esercitarsi: non detengo dati che ti riguardano, quindi non c'è nulla che io possa consegnarti, correggere o cancellare per tuo conto.",
          "I dati sul tuo dispositivo sono interamente sotto il tuo controllo. Cancellare una sveglia, un promemoria o un codice salvato li rimuove. Cancellare i dati dell'app dalle impostazioni di Android (Impostazioni › App › Wake for Fajr › Spazio di archiviazione › Cancella dati), o disinstallare l'app, elimina definitivamente e localmente tutto ciò che conserva.",
          "Se ritieni che i tuoi dati siano stati trattati in modo scorretto, puoi scrivermi, e resti libero di proporre reclamo a un'autorità di controllo — in Italia, il Garante per la protezione dei dati personali.",
        ],
      },
      {
        h: "Modifiche a questa informativa",
        p: [
          "Se una versione futura dell'app cambia ciò che tocca, questa pagina cambia con lei, e la data in alto dirà quando. Le modifiche sostanziali saranno descritte anche nelle note di rilascio dell'app su Google Play.",
        ],
      },
    ],
    permTitle: "I permessi, uno per uno",
    permIntro:
      "Google Play elenca i permessi dichiarati da un'app senza dire perché. Ecco la lista completa, con una ragione per ciascuno.",
    permHead: ["Permesso", "Perché l'app lo chiede", "Esce dal telefono?"],
    perms: [
      ["Posizione (approssimata e precisa)", "Calcolare gli orari delle preghiere e la direzione della qibla per dove ti trovi. Facoltativo — una città scelta a mano la sostituisce.", "No (a parte la ricerca del nome del luogo fatta da Android)"],
      ["Fotocamera", "Leggere il codice a barre o QR che spegne una sveglia.", "No"],
      ["Notifiche", "Mostrare la sveglia, il conto alla rovescia e i promemoria.", "No"],
      ["Sveglie esatte", "Suonare al minuto esatto invece che quando il sistema decide.", "No"],
      ["Ignora ottimizzazione batteria", "Mantenere affidabili le sveglie sui telefoni che sospendono le app in modo aggressivo. Facoltativo.", "No"],
      ["Avvio all'accensione", "Ripristinare le sveglie pianificate dopo un riavvio del telefono.", "No"],
      ["Vibrazione e wake lock", "Vibrare e accendere lo schermo mentre una sveglia suona.", "No"],
    ],
    contactTitle: "Contatti",
    contactBody:
      "Domande su questa informativa, o su qualsiasi cosa faccia l'app, arrivano direttamente a me — Dennis Xhafaj, Crema (CR), Italia.",
    contactEmail: CONTACT_EMAIL,
    backToWork: "← Torna ai progetti",
  },
}
