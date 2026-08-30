"use client"

import type React from "react"
import { createContext, useState, useEffect, useContext } from "react"

type Language = "en" | "it"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  translations: Record<string, string>
}

const defaultLanguage: Language = "en"

// Define translations directly in the file
const translationData = {
  en: {
    // Navigation
    "nav.home": "HOME",
    "nav.services": "SERVICES",
    "nav.work": "WORK",
    "nav.about": "ABOUT",
    "nav.contact": "CONTACT",
    "nav.cta": "Start a brief",

    // Home — hero
    "home.badge": "AVAILABLE FOR NEW PROJECTS",
    "home.hero.title": "Let's build your",
    "home.hero.word.0": "website.",
    "home.hero.cta.0": "Start a website brief",
    "home.hero.word.1": "online store.",
    "home.hero.cta.1": "Start a store brief",
    "home.hero.word.2": "mobile app.",
    "home.hero.cta.2": "Start an app brief",
    "home.hero.word.3": "AI automation.",
    "home.hero.cta.3": "Start an automation brief",
    "home.hero.description":
      "I'm Dennis Xhafaj, a freelance full-stack developer in Crema, Italy. You describe the problem in a short brief; I come back with scope, timeline and a fixed quote — no discovery theatre, no retainer you didn't ask for.",
    "home.hero.secondaryCta": "See recent work",
    "home.hero.audience.0": "E-commerce owners",
    "home.hero.audience.1": "Founders building an MVP",
    "home.hero.audience.2": "Agencies subcontracting dev work",
    "home.hero.audience.3": "Teams automating with AI",

    // Home — four things
    "home.build.eyebrow": "What I build",
    "home.build.title": "Four things, done properly.",
    "home.build.allServices": "All services →",

    "service.websites.index": "01",
    "service.websites.title": "Websites",
    "service.websites.description":
      "Fast, responsive marketing sites that load quickly and rank. Built to be edited by you, not by me on retainer.",
    "service.websites.bullet.0": "Design and build from scratch",
    "service.websites.bullet.1": "SEO fundamentals and analytics",
    "service.websites.bullet.2": "Content editing you control",

    "service.ecommerce.index": "02",
    "service.ecommerce.title": "E-commerce",
    "service.ecommerce.description":
      "Stores built around the checkout, the catalogue and the numbers behind them — not around a theme demo.",
    "service.ecommerce.bullet.0": "Payments, shipping and tax setup",
    "service.ecommerce.bullet.1": "Product and inventory structure",
    "service.ecommerce.bullet.2": "Migration from an existing store",

    "service.apps.index": "03",
    "service.apps.title": "Web & mobile apps",
    "service.apps.description":
      "Product work: an MVP you can put in front of users, or the internal tool your team keeps rebuilding in spreadsheets.",
    "service.apps.bullet.0": "React, Next.js, React Native",
    "service.apps.bullet.1": "Auth, database and API work",
    "service.apps.bullet.2": "Android and iOS builds",

    "service.automation.index": "04",
    "service.automation.badge": "New",
    "service.automation.title": "AI automation",
    "service.automation.description":
      "Agents and generative workflows that take repetitive work off your team, wired into the systems you already pay for.",
    "service.automation.bullet.0": "Agentic multi-step workflows",
    "service.automation.bullet.1": "Content and code generation at scale",
    "service.automation.bullet.2": "n8n, Make and Zapier integrations",

    // Home — AI automation band
    "automation.eyebrow": "New service",
    "automation.title": "AI automation for businesses",
    "automation.description":
      "Most companies don't need a new AI product. They need the work that happens between their existing tools to stop being done by hand. That's what I build.",
    "automation.card.agentic.title": "Agentic AI Workflows",
    "automation.card.agentic.description":
      "Uses autonomous multi-step agents that operate independently across different APIs and enterprise systems to achieve defined objectives.",
    "automation.card.generative.title": "Generative AI Automation",
    "automation.card.generative.description":
      "Automates the creation of text, code, images, and marketing content at scale with tools like n8n, make and zapier.",
    "automation.startsWith": "Usually starts with",
    "automation.chip.0": "Order and invoice processing",
    "automation.chip.1": "Support triage",
    "automation.chip.2": "Lead qualification",
    "automation.chip.3": "Content production",
    "automation.chip.4": "Weekly reporting",

    // Home — selected work
    "home.work.eyebrow": "Selected work",
    "home.work.title": "Shipped, not mocked up.",
    "home.work.allWork": "All work →",

    "tag.freelance": "Freelance",
    "tag.mobileApp": "Mobile app",
    "tag.openSource": "Open source",

    "project.wakeForFajr.title": "Wake for Fajr",
    "project.wakeForFajr.description":
      "An Android alarm clock whose alarms follow the prayer times: set \u201CFajr \u2212 15 min\u201D once and it re-computes itself every day. Times, qibla compass and home-screen widget all work offline.",
    "project.emerson.title": "Emerson Telefonia",
    "project.emerson.description":
      "Website for a mobile telephony service provider. Designed to be user-friendly and easy to navigate.",
    "project.contabite.title": "ContaBite",
    "project.contabite.description": "An app for counting calories and tracking diet achievements using AI.",
    "project.pizzeriaKing.title": "Pizzeria King",
    "project.pizzeriaKing.description":
      "A modern and responsive website for a pizzeria, showcasing their menu and services.",
    "project.itrack.title": "iTrack Workout App",
    "project.itrack.description":
      "Open-source workout application designed to help users track their workouts, monitor progress, and achieve fitness goals.",
    "project.addictionTracker.title": "Addiction Tracker",
    "project.addictionTracker.description":
      "An Android app to help users track and manage their addictions, providing insights and support.",

    "project.link.visitSite": "Visit site →",
    "project.link.askMe": "Ask me about it →",
    "project.link.viewGithub": "View on GitHub →",
    "project.link.privacy": "Privacy policy →",

    // Home — steps
    "steps.eyebrow": "How it works",
    "steps.title": "Four steps from brief to live.",
    "step.0.label": "STEP 01",
    "step.0.title": "You send a brief",
    "step.0.description": "Six fields, two minutes. What you need, roughly when, and what “done” looks like.",
    "step.1.label": "STEP 02",
    "step.1.title": "I reply with a quote",
    "step.1.description": "Scope, fixed price, timeline. If it isn't a good fit, I'll say so and point you elsewhere.",
    "step.2.label": "STEP 03",
    "step.2.title": "We build in the open",
    "step.2.description": "A staging link from day one and a short update each week. You see progress, not promises.",
    "step.3.label": "STEP 04",
    "step.3.title": "You own it",
    "step.3.description": "Code, accounts and access handed over, with a walkthrough. Support after launch if you want it.",

    // Home — proof slot
    "proof.label": "PROOF SLOT — TO FILL IN",
    "proof.text":
      "Two or three real client quotes belong here, with a name and a company. This is the single biggest lever on the page — one honest sentence from Emerson Telefonia or Pizzeria King will outperform anything else I can write.",

    // Home — FAQ
    "faq.eyebrow": "Straight answers",
    "faq.title": "Before you ask.",
    "faq.0.q": "What does it cost?",
    "faq.0.a":
      "Every project is quoted after I've read your brief, because a five-page site and a store with 800 SKUs are not the same job. You get one fixed number before anything starts.",
    "faq.1.q": "How long does it take?",
    "faq.1.a":
      "A marketing site is usually two to three weeks. Stores and apps run longer. Automation work often ships its first useful workflow inside a week.",
    "faq.2.q": "Do you work with agencies?",
    "faq.2.a":
      "Yes. White-label build work under your process and your client relationship, with your PM as the only contact if you prefer it that way.",
    "faq.3.q": "Is AI automation just chatbots?",
    "faq.3.a":
      "No. Most of it is invisible: agents reading your systems, making decisions and writing back to them. A chat interface is optional and often unnecessary.",
    "faq.4.q": "What happens if I need changes after launch?",
    "faq.4.a":
      "Small fixes in the first weeks are on me. Beyond that, changes are quoted the same way the project was: agreed before the work starts, never billed by surprise.",
    "faq.5.q": "Who owns the code and the accounts?",
    "faq.5.a":
      "You do, from day one. Repository, hosting, domains and any third-party accounts are in your name, and you get a walkthrough at handover.",

    // Home — final CTA
    "homeCta.title": "Tell me what you need built.",
    "homeCta.description":
      "The brief takes about two minutes. I read every one myself and reply with a real answer, not a calendar link.",
    "homeCta.badge.0": "Reply within one working day",
    "homeCta.badge.1": "Fixed quote",
    "homeCta.badge.2": "No sales sequence",
    "homeCta.preview.label": "Project brief",
    "homeCta.preview.step": "1 of 6",
    "homeCta.preview.nameLabel": "Your name",
    "homeCta.preview.name": "Maria Rossi",
    "homeCta.preview.needLabel": "What you need",
    "homeCta.preview.need.0": "Website",
    "homeCta.preview.need.1": "Store",
    "homeCta.preview.need.2": "AI automation",
    "homeCta.preview.problemLabel": "What's the problem?",
    "homeCta.preview.problem": "My team re-types every order by hand",

    // Services page
    "services.hero.eyebrow": "Services",
    "services.hero.title": "What you can hire me for.",
    "services.hero.description":
      "Four services, one developer. No account manager, no handover to a junior. Pricing is quoted per project once I understand the scope.",

    "services.websites.eyebrow": "01 — Websites",
    "services.websites.title": "Sites that earn their traffic",
    "services.websites.description":
      "For businesses whose website is currently a brochure nobody reads. Built on Next.js, fast by default, structured so search engines and humans both find what they came for.",
    "services.websites.row.0": "Design and build, mobile first",
    "services.websites.row.1": "Technical SEO, sitemap, metadata, speed",
    "services.websites.row.2": "A CMS so your team edits copy without me",
    "services.websites.row.3": "Analytics and conversion tracking wired up",
    "services.websites.row.4": "Hosting, domains and deployment handled",

    "services.ecommerce.eyebrow": "02 — E-commerce",
    "services.ecommerce.title": "Stores built around the checkout",
    "services.ecommerce.description":
      "For owners already doing volume who are losing orders to a slow, badly structured store. The work concentrates where the money is: product pages, cart, checkout, and the operations behind them.",
    "services.ecommerce.row.0": "Catalogue, variants and inventory structure",
    "services.ecommerce.row.1": "Payments, shipping rules and tax configuration",
    "services.ecommerce.row.2": "Migration from Shopify, WooCommerce or custom",
    "services.ecommerce.row.3": "Order flow automation into your back office",
    "services.ecommerce.row.4": "Speed work on Core Web Vitals",

    "services.apps.eyebrow": "03 — Web & mobile apps",
    "services.apps.title": "From idea to something users can open",
    "services.apps.description":
      "For founders who need a first version in front of real users, and for teams whose critical process lives in a spreadsheet nobody trusts. Scope gets cut to what proves the point.",
    "services.apps.row.0": "MVP scoping: what ships now, what waits",
    "services.apps.row.1": "React, Next.js, React Native and Capacitor",
    "services.apps.row.2": "Auth, database, file storage, third-party APIs",
    "services.apps.row.3": "Android and iOS builds, store submission",
    "services.apps.row.4": "Internal tools that replace the spreadsheet",

    "services.automation.eyebrow": "04 — AI automation",
    "services.automation.title": "Work your team stops doing by hand",
    "services.automation.description":
      "Two kinds of build, both wired into the systems you already run. We start with one process, measure the hours it gives back, then decide what's next.",

    "services.engagement.eyebrow": "Engagement",
    "services.engagement.title": "Three ways to work together",
    "services.engagement.description": "All quoted per project. No hourly billing, no surprise invoices, no monthly minimum.",
    "engagement.fixed.title": "Fixed-scope project",
    "engagement.fixed.description": "One agreed deliverable, one price, one deadline. The default.",
    "engagement.pilot.title": "Automation pilot",
    "engagement.pilot.description": "One workflow, built and measured, before you commit to more.",
    "engagement.subcontract.title": "Agency subcontract",
    "engagement.subcontract.description": "White-label build capacity under your brand and process.",
    "services.footer.text": "Not sure which one fits? Describe the problem and I'll tell you.",

    // Work page
    "work.hero.eyebrow": "Work",
    "work.hero.title": "Things I've built and shipped.",
    "work.hero.description":
      "Client work and my own projects. The open-source ones are on GitHub if you'd rather read the code than the description.",
    "work.next.label": "NEXT CASE STUDY",
    "work.next.title": "An automation build belongs here",
    "work.next.description":
      "Once the first AI workflow ships, this slot becomes the strongest card on the page: the process before, the process after, and the hours it gave back.",
    "work.next.cta": "Be the first one →",

    // About page
    "about.eyebrow": "About",
    "about.title": "I'm Denis Xhafaj, a full-stack developer and tech enthusiast.",
    "about.p0":
      "I work as a freelance developer from Crema, Italy, building websites, online stores, apps and — increasingly — the AI automation that sits behind them. Most of my clients are small teams who need one person who can take a problem from conversation to production without a project manager in between.",
    "about.p1":
      "I approach my work with discipline, integrity, trust and reliability. In practice that means telling you when something is a bad idea, quoting a number I can hold, and handing over code you could give to another developer tomorrow without embarrassment.",
    "about.p2":
      "In my free time I dedicate myself to the gym, and to open-source side projects — which is where most of what I know about shipping mobile apps actually came from.",
    "about.info.basedIn.label": "Based in",
    "about.info.basedIn.value": "Crema, Italy",
    "about.info.works.label": "Works",
    "about.info.works.value": "Remote, EU timezones",
    "about.info.languages.label": "Languages",
    "about.info.languages.value": "Italian, English, Albanian",
    "about.info.status.label": "Status",
    "about.info.status.value": "Open to projects",

    "rules.eyebrow": "How I work",
    "rules.title": "Four rules I don't break.",
    "rule.0.title": "One price, agreed first",
    "rule.0.description":
      "You know the number before work starts. If scope changes, we agree the change before I write the code, not after.",
    "rule.1.title": "You keep everything",
    "rule.1.description": "Repository, hosting, domains and accounts are in your name from day one. No hostage situations.",
    "rule.2.title": "Plain language",
    "rule.2.description":
      "I explain technical decisions in terms of what they cost you and what they get you. You should never need me to translate my own updates.",
    "rule.3.title": "Automate before you hire",
    "rule.3.description":
      "If a workflow can remove the work instead of a person doing it faster, I'll say that — even when it makes the project smaller.",

    "stack.eyebrow": "Stack",
    "stack.title": "What I build with",
    "stack.footer.text": "Enough about me. What are you trying to build?",

    // Contact page
    "contact.eyebrow": "Project brief",
    "contact.title": "Six fields. About two minutes.",
    "contact.description":
      "The more concrete you are about the problem, the more useful my reply will be. If you'd rather just email me, that works too.",
    "contact.form.name": "Your name",
    "contact.form.name.placeholder": "Maria Rossi",
    "contact.form.email": "Email",
    "contact.form.email.placeholder": "you@company.com",
    "contact.form.company": "Company or project name",
    "contact.form.company.placeholder": "Optional",
    "contact.form.need": "What you need",
    "contact.form.need.0": "A website",
    "contact.form.need.1": "An online store",
    "contact.form.need.2": "A web or mobile app",
    "contact.form.need.3": "AI automation",
    "contact.form.need.4": "Subcontract dev work",
    "contact.form.need.5": "Not sure yet",
    "contact.form.timeline": "Timeline",
    "contact.form.timeline.0": "As soon as possible",
    "contact.form.timeline.1": "Within a month",
    "contact.form.timeline.2": "One to three months",
    "contact.form.timeline.3": "Just exploring",
    "contact.form.brief": "What's the problem?",
    "contact.form.brief.placeholder":
      "What isn't working today, and what would make it a success? Links to your current site or tools help.",
    "contact.form.send": "Send the brief",
    "contact.form.sending": "Sending...",
    "contact.form.note": "No newsletter, no sales sequence.",
    "contact.form.error": "Something went wrong. Please try again.",
    "contact.sent.title": "Brief received.",
    "contact.sent.description":
      "Thanks — I'll read it properly and come back with scope, timeline and a price. If anything is unclear I'll ask one round of questions rather than guess.",
    "contact.sent.again": "Send another",
    "contact.next.eyebrow": "What happens next",
    "contact.next.0": "I read the brief and reply, usually within one working day.",
    "contact.next.1": "A short call only if the scope actually needs one.",
    "contact.next.2": "You get a written scope, fixed price and start date.",
    "contact.direct.eyebrow": "Direct",
    "contact.email": "Email",
    "contact.schedule": "Schedule a meeting",
    "contact.direct.location": "Crema, Italy — working remotely across EU timezones.",

    // Footer
    "footer.tagline": "Freelance full-stack developer. Websites, stores, apps and AI automation, built from Crema, Italy.",
    "footer.pages": "Pages",
    "footer.elsewhere": "Elsewhere",
    "footer.copyright": "© {year} Dennis Xhafaj. All rights reserved.",
    "footer.location": "Crema, Italy",
    "footer.privacy.wakeForFajr": "Wake for Fajr — privacy",
  },
  it: {
    // Navigation
    "nav.home": "HOME",
    "nav.services": "SERVIZI",
    "nav.work": "LAVORI",
    "nav.about": "CHI SONO",
    "nav.contact": "CONTATTI",
    "nav.cta": "Invia un brief",

    // Home — hero
    "home.badge": "DISPONIBILE PER NUOVI PROGETTI",
    "home.hero.title": "Costruiamo il tuo",
    "home.hero.word.0": "sito web.",
    "home.hero.cta.0": "Invia un brief per il sito",
    "home.hero.word.1": "negozio online.",
    "home.hero.cta.1": "Invia un brief per il negozio",
    "home.hero.word.2": "app mobile.",
    "home.hero.cta.2": "Invia un brief per l'app",
    "home.hero.word.3": "automazione AI.",
    "home.hero.cta.3": "Invia un brief per l'automazione",
    "home.hero.description":
      "Sono Dennis Xhafaj, sviluppatore full-stack freelance a Crema, Italia. Mi descrivi il problema in un breve brief; io torno con perimetro, tempistiche e un preventivo fisso — niente teatrini di discovery, niente abbonamento che non hai chiesto.",
    "home.hero.secondaryCta": "Guarda i lavori recenti",
    "home.hero.audience.0": "Titolari di e-commerce",
    "home.hero.audience.1": "Founder che costruiscono un MVP",
    "home.hero.audience.2": "Agenzie che esternalizzano sviluppo",
    "home.hero.audience.3": "Team che automatizzano con l'AI",

    // Home — four things
    "home.build.eyebrow": "Cosa realizzo",
    "home.build.title": "Quattro cose, fatte bene.",
    "home.build.allServices": "Tutti i servizi →",

    "service.websites.index": "01",
    "service.websites.title": "Siti web",
    "service.websites.description":
      "Siti vetrina veloci e responsive che si caricano in fretta e si posizionano. Costruiti per essere modificati da te, non da me su abbonamento.",
    "service.websites.bullet.0": "Design e sviluppo da zero",
    "service.websites.bullet.1": "Fondamentali SEO e analytics",
    "service.websites.bullet.2": "Modifica dei contenuti sotto il tuo controllo",

    "service.ecommerce.index": "02",
    "service.ecommerce.title": "E-commerce",
    "service.ecommerce.description":
      "Negozi costruiti attorno al checkout, al catalogo e ai numeri che li muovono — non attorno a un template dimostrativo.",
    "service.ecommerce.bullet.0": "Configurazione pagamenti, spedizioni e tasse",
    "service.ecommerce.bullet.1": "Struttura prodotti e inventario",
    "service.ecommerce.bullet.2": "Migrazione da un negozio esistente",

    "service.apps.index": "03",
    "service.apps.title": "App web e mobile",
    "service.apps.description":
      "Lavoro di prodotto: un MVP da mostrare agli utenti, oppure lo strumento interno che il tuo team continua a ricostruire nei fogli di calcolo.",
    "service.apps.bullet.0": "React, Next.js, React Native",
    "service.apps.bullet.1": "Autenticazione, database e API",
    "service.apps.bullet.2": "Build Android e iOS",

    "service.automation.index": "04",
    "service.automation.badge": "Nuovo",
    "service.automation.title": "Automazione AI",
    "service.automation.description":
      "Agenti e flussi generativi che tolgono al tuo team il lavoro ripetitivo, collegati ai sistemi che già usi.",
    "service.automation.bullet.0": "Flussi agentici multi-step",
    "service.automation.bullet.1": "Generazione di contenuti e codice su larga scala",
    "service.automation.bullet.2": "Integrazioni con n8n, Make e Zapier",

    // Home — AI automation band
    "automation.eyebrow": "Nuovo servizio",
    "automation.title": "Automazione AI per le aziende",
    "automation.description":
      "La maggior parte delle aziende non ha bisogno di un nuovo prodotto AI. Ha bisogno che il lavoro tra i propri strumenti smetta di essere fatto a mano. È questo che costruisco.",
    "automation.card.agentic.title": "Flussi di lavoro con agenti AI",
    "automation.card.agentic.description":
      "Usa agenti autonomi multi-step che operano in modo indipendente tra API e sistemi aziendali diversi per raggiungere obiettivi definiti.",
    "automation.card.generative.title": "Automazione AI generativa",
    "automation.card.generative.description":
      "Automatizza la creazione di testi, codice, immagini e contenuti di marketing su larga scala con strumenti come n8n, make e zapier.",
    "automation.startsWith": "Di solito si parte da",
    "automation.chip.0": "Gestione ordini e fatture",
    "automation.chip.1": "Smistamento richieste di supporto",
    "automation.chip.2": "Qualificazione dei lead",
    "automation.chip.3": "Produzione di contenuti",
    "automation.chip.4": "Reportistica settimanale",

    // Home — selected work
    "home.work.eyebrow": "Lavori selezionati",
    "home.work.title": "Consegnati, non solo mostrati.",
    "home.work.allWork": "Tutti i lavori →",

    "tag.freelance": "Freelance",
    "tag.mobileApp": "App mobile",
    "tag.openSource": "Open source",

    "project.wakeForFajr.title": "Wake for Fajr",
    "project.wakeForFajr.description":
      "Una sveglia Android che segue gli orari delle preghiere: imposti \u201CFajr \u2212 15 min\u201D una volta e si ricalcola ogni giorno. Orari, bussola qibla e widget funzionano offline.",
    "project.emerson.title": "Emerson Telefonia",
    "project.emerson.description":
      "Sito web per un operatore di telefonia mobile. Progettato per essere semplice da usare e navigare.",
    "project.contabite.title": "ContaBite",
    "project.contabite.description": "Un'app per contare le calorie e monitorare i progressi alimentari con l'AI.",
    "project.pizzeriaKing.title": "Pizzeria King",
    "project.pizzeriaKing.description":
      "Un sito web moderno e responsive per una pizzeria, con menu e servizi in evidenza.",
    "project.itrack.title": "iTrack Workout App",
    "project.itrack.description":
      "App open-source per l'allenamento, pensata per aiutare gli utenti a tracciare gli allenamenti, monitorare i progressi e raggiungere gli obiettivi di fitness.",
    "project.addictionTracker.title": "Addiction Tracker",
    "project.addictionTracker.description":
      "Un'app Android per aiutare gli utenti a monitorare e gestire le proprie dipendenze, con approfondimenti e supporto.",

    "project.link.visitSite": "Visita il sito →",
    "project.link.askMe": "Chiedimi di più →",
    "project.link.viewGithub": "Vedi su GitHub →",
    "project.link.privacy": "Informativa privacy →",

    // Home — steps
    "steps.eyebrow": "Come funziona",
    "steps.title": "Quattro passaggi dal brief alla messa online.",
    "step.0.label": "PASSO 01",
    "step.0.title": "Mi invii un brief",
    "step.0.description": "Sei campi, due minuti. Cosa ti serve, per quando all'incirca, e com'è fatto “finito”.",
    "step.1.label": "PASSO 02",
    "step.1.title": "Rispondo con un preventivo",
    "step.1.description":
      "Perimetro, prezzo fisso, tempistiche. Se non è adatto te lo dico subito e ti indirizzo altrove.",
    "step.2.label": "PASSO 03",
    "step.2.title": "Costruiamo alla luce del sole",
    "step.2.description":
      "Un link di staging fin dal primo giorno e un breve aggiornamento ogni settimana. Vedi i progressi, non le promesse.",
    "step.3.label": "PASSO 04",
    "step.3.title": "È tuo",
    "step.3.description": "Codice, account e accessi consegnati, con un walkthrough. Supporto dopo il lancio se lo desideri.",

    // Home — proof slot
    "proof.label": "SPAZIO TESTIMONIANZE — DA COMPLETARE",
    "proof.text":
      "Qui andrebbero due o tre citazioni vere di clienti, con nome e azienda. È la leva più forte di questa pagina — una frase onesta di Emerson Telefonia o Pizzeria King varrà più di qualsiasi cosa possa scrivere io.",

    // Home — FAQ
    "faq.eyebrow": "Risposte dirette",
    "faq.title": "Prima che tu me lo chieda.",
    "faq.0.q": "Quanto costa?",
    "faq.0.a":
      "Ogni progetto viene quotato dopo aver letto il tuo brief, perché un sito di cinque pagine e un negozio con 800 SKU non sono lo stesso lavoro. Ricevi un numero fisso prima che inizi qualsiasi cosa.",
    "faq.1.q": "Quanto tempo ci vuole?",
    "faq.1.a":
      "Un sito vetrina richiede di solito due o tre settimane. Negozi e app richiedono più tempo. Un progetto di automazione spesso rilascia il primo flusso utile entro una settimana.",
    "faq.2.q": "Lavori con le agenzie?",
    "faq.2.a":
      "Sì. Lavoro white-label secondo il tuo processo e la tua relazione con il cliente, con il tuo PM come unico contatto se preferisci così.",
    "faq.3.q": "L'automazione AI è solo chatbot?",
    "faq.3.a":
      "No. Nella maggior parte dei casi è invisibile: agenti che leggono i tuoi sistemi, prendono decisioni e ci riscrivono sopra. Un'interfaccia di chat è opzionale e spesso superflua.",
    "faq.4.q": "Cosa succede se servono modifiche dopo il lancio?",
    "faq.4.a":
      "Le piccole correzioni nelle prime settimane sono a mio carico. Oltre a questo, le modifiche vengono quotate come il progetto originale: concordate prima di iniziare il lavoro, mai fatturate a sorpresa.",
    "faq.5.q": "Di chi sono il codice e gli account?",
    "faq.5.a":
      "Tuoi, fin dal primo giorno. Repository, hosting, domini ed eventuali account di terze parti sono a tuo nome, e ricevi un walkthrough alla consegna.",

    // Home — final CTA
    "homeCta.title": "Dimmi cosa devo costruire.",
    "homeCta.description":
      "Il brief richiede circa due minuti. Li leggo tutti personalmente e rispondo con una risposta vera, non un link a un calendario.",
    "homeCta.badge.0": "Risposta entro un giorno lavorativo",
    "homeCta.badge.1": "Preventivo fisso",
    "homeCta.badge.2": "Nessuna sequenza di vendita",
    "homeCta.preview.label": "Brief di progetto",
    "homeCta.preview.step": "1 di 6",
    "homeCta.preview.nameLabel": "Il tuo nome",
    "homeCta.preview.name": "Maria Rossi",
    "homeCta.preview.needLabel": "Di cosa hai bisogno",
    "homeCta.preview.need.0": "Sito web",
    "homeCta.preview.need.1": "Negozio",
    "homeCta.preview.need.2": "Automazione AI",
    "homeCta.preview.problemLabel": "Qual è il problema?",
    "homeCta.preview.problem": "Il mio team ricopia ogni ordine a mano",

    // Services page
    "services.hero.eyebrow": "Servizi",
    "services.hero.title": "Per cosa puoi assumermi.",
    "services.hero.description":
      "Quattro servizi, uno sviluppatore. Nessun account manager, nessun passaggio a un junior. Il prezzo viene quotato per progetto una volta capito il perimetro.",

    "services.websites.eyebrow": "01 — Siti web",
    "services.websites.title": "Siti che si guadagnano il traffico",
    "services.websites.description":
      "Per aziende il cui sito è oggi una brochure che nessuno legge. Costruiti su Next.js, veloci di default, strutturati perché motori di ricerca e persone trovino quello che cercano.",
    "services.websites.row.0": "Design e sviluppo, mobile first",
    "services.websites.row.1": "SEO tecnica, sitemap, metadati, velocità",
    "services.websites.row.2": "Un CMS così il tuo team modifica i testi senza di me",
    "services.websites.row.3": "Analytics e tracciamento delle conversioni collegati",
    "services.websites.row.4": "Hosting, domini e deployment gestiti",

    "services.ecommerce.eyebrow": "02 — E-commerce",
    "services.ecommerce.title": "Negozi costruiti attorno al checkout",
    "services.ecommerce.description":
      "Per chi fa già volumi e perde ordini per colpa di un negozio lento e mal strutturato. Il lavoro si concentra dove ci sono i soldi: schede prodotto, carrello, checkout e le operazioni dietro di essi.",
    "services.ecommerce.row.0": "Struttura di catalogo, varianti e inventario",
    "services.ecommerce.row.1": "Pagamenti, regole di spedizione e configurazione fiscale",
    "services.ecommerce.row.2": "Migrazione da Shopify, WooCommerce o soluzioni custom",
    "services.ecommerce.row.3": "Automazione del flusso ordini verso il tuo back office",
    "services.ecommerce.row.4": "Lavoro di velocità sui Core Web Vitals",

    "services.apps.eyebrow": "03 — App web e mobile",
    "services.apps.title": "Dall'idea a qualcosa che gli utenti possono aprire",
    "services.apps.description":
      "Per founder che hanno bisogno di una prima versione da mostrare a utenti reali, e per team il cui processo critico vive in un foglio di calcolo di cui nessuno si fida. Il perimetro viene ridotto a ciò che dimostra il punto.",
    "services.apps.row.0": "Scoping dell'MVP: cosa esce ora, cosa aspetta",
    "services.apps.row.1": "React, Next.js, React Native e Capacitor",
    "services.apps.row.2": "Autenticazione, database, storage file, API di terze parti",
    "services.apps.row.3": "Build Android e iOS, pubblicazione sugli store",
    "services.apps.row.4": "Strumenti interni che sostituiscono il foglio di calcolo",

    "services.automation.eyebrow": "04 — Automazione AI",
    "services.automation.title": "Il lavoro che il tuo team smette di fare a mano",
    "services.automation.description":
      "Due tipi di intervento, entrambi collegati ai sistemi che già usi. Iniziamo con un processo, misuriamo le ore restituite, poi decidiamo cosa viene dopo.",

    "services.engagement.eyebrow": "Modalità di collaborazione",
    "services.engagement.title": "Tre modi di lavorare insieme",
    "services.engagement.description":
      "Tutto quotato per progetto. Nessuna fatturazione oraria, nessuna fattura a sorpresa, nessun minimo mensile.",
    "engagement.fixed.title": "Progetto a perimetro fisso",
    "engagement.fixed.description": "Un risultato concordato, un prezzo, una scadenza. L'opzione predefinita.",
    "engagement.pilot.title": "Pilota di automazione",
    "engagement.pilot.description": "Un flusso, costruito e misurato, prima di impegnarti su altro.",
    "engagement.subcontract.title": "Subappalto per agenzie",
    "engagement.subcontract.description": "Capacità di sviluppo white-label sotto il tuo brand e il tuo processo.",
    "services.footer.text": "Non sai quale scegliere? Descrivimi il problema e te lo dico io.",

    // Work page
    "work.hero.eyebrow": "Lavori",
    "work.hero.title": "Cose che ho costruito e consegnato.",
    "work.hero.description":
      "Lavori per clienti e progetti personali. Quelli open-source sono su GitHub, se preferisci leggere il codice invece della descrizione.",
    "work.next.label": "PROSSIMO CASO STUDIO",
    "work.next.title": "Qui andrebbe un progetto di automazione",
    "work.next.description":
      "Quando il primo flusso AI andrà live, questo spazio diventerà la card più forte della pagina: il processo prima, il processo dopo, e le ore restituite.",
    "work.next.cta": "Sii il primo →",

    // About page
    "about.eyebrow": "Chi sono",
    "about.title": "Sono Denis Xhafaj, sviluppatore full-stack e appassionato di tecnologia.",
    "about.p0":
      "Lavoro come sviluppatore freelance da Crema, Italia, costruendo siti web, negozi online, app e — sempre di più — l'automazione AI che sta dietro a tutto questo. La maggior parte dei miei clienti sono piccoli team che hanno bisogno di una sola persona in grado di portare un problema dalla conversazione alla produzione, senza un project manager in mezzo.",
    "about.p1":
      "Affronto il lavoro con disciplina, integrità, fiducia e affidabilità. In pratica significa dirti quando un'idea non è buona, quotare un numero su cui posso reggere, e consegnarti codice che potresti dare a un altro sviluppatore domani senza vergognarti.",
    "about.p2":
      "Nel tempo libero mi dedico alla palestra e a progetti open-source personali — che è da dove viene gran parte di ciò che so sul rilasciare app mobile.",
    "about.info.basedIn.label": "Sede",
    "about.info.basedIn.value": "Crema, Italia",
    "about.info.works.label": "Lavora",
    "about.info.works.value": "Da remoto, fuso orario europeo",
    "about.info.languages.label": "Lingue",
    "about.info.languages.value": "Italiano, Inglese, Albanese",
    "about.info.status.label": "Stato",
    "about.info.status.value": "Aperto a nuovi progetti",

    "rules.eyebrow": "Come lavoro",
    "rules.title": "Quattro regole che non infrango.",
    "rule.0.title": "Un prezzo, concordato prima",
    "rule.0.description":
      "Sai il numero prima che il lavoro inizi. Se il perimetro cambia, concordiamo la modifica prima che io scriva il codice, non dopo.",
    "rule.1.title": "Ti tieni tutto",
    "rule.1.description": "Repository, hosting, domini e account sono a tuo nome fin dal primo giorno. Nessuna situazione da ostaggio.",
    "rule.2.title": "Linguaggio semplice",
    "rule.2.description":
      "Spiego le decisioni tecniche in termini di cosa ti costano e cosa ti danno. Non dovresti mai aver bisogno che ti traduca i miei stessi aggiornamenti.",
    "rule.3.title": "Automatizza prima di assumere",
    "rule.3.description":
      "Se un flusso può eliminare il lavoro invece di farlo fare più in fretta a una persona, te lo dico — anche quando rende il progetto più piccolo.",

    "stack.eyebrow": "Stack",
    "stack.title": "Con cosa costruisco",
    "stack.footer.text": "Basta parlare di me. Tu cosa stai cercando di costruire?",

    // Contact page
    "contact.eyebrow": "Brief di progetto",
    "contact.title": "Sei campi. Circa due minuti.",
    "contact.description":
      "Più sei concreto sul problema, più la mia risposta sarà utile. Se preferisci semplicemente scrivermi una email, va bene lo stesso.",
    "contact.form.name": "Il tuo nome",
    "contact.form.name.placeholder": "Maria Rossi",
    "contact.form.email": "Email",
    "contact.form.email.placeholder": "tu@azienda.com",
    "contact.form.company": "Azienda o nome del progetto",
    "contact.form.company.placeholder": "Facoltativo",
    "contact.form.need": "Di cosa hai bisogno",
    "contact.form.need.0": "Un sito web",
    "contact.form.need.1": "Un negozio online",
    "contact.form.need.2": "Un'app web o mobile",
    "contact.form.need.3": "Automazione AI",
    "contact.form.need.4": "Lavoro di sviluppo in subappalto",
    "contact.form.need.5": "Non ancora sicuro",
    "contact.form.timeline": "Tempistiche",
    "contact.form.timeline.0": "Il prima possibile",
    "contact.form.timeline.1": "Entro un mese",
    "contact.form.timeline.2": "Da uno a tre mesi",
    "contact.form.timeline.3": "Sto solo esplorando",
    "contact.form.brief": "Qual è il problema?",
    "contact.form.brief.placeholder":
      "Cosa non funziona oggi, e cosa renderebbe il progetto un successo? Link al tuo sito o strumenti attuali sono utili.",
    "contact.form.send": "Invia il brief",
    "contact.form.sending": "Invio in corso...",
    "contact.form.note": "Niente newsletter, niente sequenze di vendita.",
    "contact.form.error": "Qualcosa è andato storto. Riprova.",
    "contact.sent.title": "Brief ricevuto.",
    "contact.sent.description":
      "Grazie — lo leggerò con attenzione e tornerò con perimetro, tempistiche e un prezzo. Se qualcosa non è chiaro farò un giro di domande invece di indovinare.",
    "contact.sent.again": "Invia un altro",
    "contact.next.eyebrow": "Cosa succede dopo",
    "contact.next.0": "Leggo il brief e rispondo, di solito entro un giorno lavorativo.",
    "contact.next.1": "Una breve chiamata solo se il perimetro la richiede davvero.",
    "contact.next.2": "Ricevi un perimetro scritto, un prezzo fisso e una data di inizio.",
    "contact.direct.eyebrow": "Contatto diretto",
    "contact.email": "Email",
    "contact.schedule": "Pianifica un incontro",
    "contact.direct.location": "Crema, Italia — lavoro da remoto nel fuso orario europeo.",

    // Footer
    "footer.tagline": "Sviluppatore full-stack freelance. Siti, negozi, app e automazione AI, costruiti da Crema, Italia.",
    "footer.pages": "Pagine",
    "footer.elsewhere": "Altrove",
    "footer.copyright": "© {year} Dennis Xhafaj. Tutti i diritti riservati.",
    "footer.location": "Crema, Italia",
    "footer.privacy.wakeForFajr": "Wake for Fajr — privacy",
  },
}

// Initial context values
const LanguageContext = createContext<LanguageContextType>({
  language: defaultLanguage,
  setLanguage: () => {},
  translations: {},
})

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>(defaultLanguage)
  const [translations, setTranslations] = useState<Record<string, string>>(translationData[defaultLanguage])

  // Load saved language preference from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "it")) {
      setLanguage(savedLanguage)
      setTranslations(translationData[savedLanguage])
    }
  }, [])

  // Update translations and save to localStorage when language changes
  useEffect(() => {
    setTranslations(translationData[language])
    localStorage.setItem("language", language)
  }, [language])

  return <LanguageContext.Provider value={{ language, setLanguage, translations }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => useContext(LanguageContext)

export function t(key: string): string {
  const { translations } = useLanguage()
  return translations[key] || key
}
