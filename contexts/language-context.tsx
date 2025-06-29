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
    "nav.about": "ABOUT",
    "nav.pricing": "PRICING",
    "nav.blog": "BLOG",
    "nav.projects": "PROJECTS",
    "nav.contact": "CONTACT",

    // Home page
    "hero.greeting": "Hello, I'm Denis.",
    "hero.tagline": "I Turn ideas into impactful code.",
    "hero.description":
      "I'm Denis Xhafaj, a full-stack developer and tech enthusiast. I help businesses and individuals to create a strong online presence and reach their goals.",
    "hero.cta.website": "Get your website",
    "hero.cta.about": "About me",

    "services.title": "Services",
    "services.web.title": "Web Development",
    "services.web.description":
      "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.",
    "services.performance.title": "Performance Optimization",
    "services.performance.description":
      "Speed up your existing website, improve SEO, and enhance user experience through optimization.",
    "services.consultation.title": "Consultation",
    "services.consultation.description":
      "Technical advice, code reviews, and strategic planning for your digital projects.",

    "projects.title": "Featured Projects",
    "projects.cta": "View All Projects",

    "testimonials.title": "Client Testimonials",

    "cta.title": "Ready to bring your ideas to life?",
    "cta.description": "Let's collaborate to create something amazing that helps you achieve your goals.",
    "cta.button": "Get in Touch",

    // Footer
    "footer.description":
      "Full-stack developer turning ideas into impactful code. Building digital experiences that make a difference.",
    "footer.navigation": "Navigation",
    "footer.contact": "Get in Touch",
    "footer.contact.description": "Interested in working together? Feel free to reach out.",
    "footer.contact.button": "Contact Me",
    "footer.copyright": "© {year} Dennis Xhafaj. All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",

    // About page
    "about.title": "About Me",
    "about.intro": "Hi there! My name is Denis Xhafaj",
    "about.bio":
     "I'm an Italian developer with a deep passion for technology and creating positive impact. I approach my work with discipline, integrity, trust, reliability, and a constant desire for learning. In my free time, I dedicate myself to the gym and delving into new themes.",
    "about.resume": "View Resume",
    "about.skills": "My Skills",
    "about.frontend": "Frontend Development",
    "about.backend": "Backend Development",
    "about.devops": "DevOps & Deployment",
    "about.other": "Other Skills",
    "about.experience": "Experience",
    "about.education": "Education",

    // Projects page
    "projects.page.title": "Projects",
    "projects.page.description": "Explore my latest work. Each project represents a unique challenge and solution.",
    "projects.view": "View Details",

    // Pricing page
    "pricing.currency": "USD",
    "pricing.title": "Pricing",
    "pricing.description":
      "Transparent pricing options tailored to your needs. Choose the plan that works best for your project.",
    "pricing.basic.name": "Basic",
    "pricing.basic.price": "$250",
    "pricing.basic.description": "Perfect for small businesses and personal websites",
    "pricing.professional.name": "Professional",
    "pricing.professional.price": "$500",
    "pricing.professional.description": "Ideal for growing businesses and e-commerce",
    "pricing.enterprise.name": "Enterprise",
    "pricing.enterprise.price": "Custom",
    "pricing.enterprise.description": "For large businesses with specific requirements",
    "pricing.get.started": "Get Started",
    "pricing.custom.title": "Need something custom?",
    "pricing.custom.description":
      "I also offer custom development services tailored to your specific requirements. Let's discuss your project and find the best solution.",

    // Contact page
    "contact.title": "Contact",
    "contact.description": "Have a project in mind or want to discuss a collaboration? I'd love to hear from you.",
    "contact.get.in.touch": "Get in Touch",
    "contact.reach.out":
      "Feel free to reach out through the contact form or using the information below. I'll get back to you as soon as possible.",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",
    "contact.form.send": "Send Message",
    "contact.form.sending": "Sending...",
    "contact.form.success": "Thank you for your message! I'll get back to you soon.",
    // Add to your language translation file
    "contact.form.error": "Something went wrong. Please try again.",
    "contact.schedule": "Schedule a meeting",
  },
  it: {
    // Navigation
    "nav.about": "CHI SONO",
    "nav.pricing": "PREZZI",
    "nav.blog": "BLOG",
    "nav.projects": "PROGETTI",
    "nav.contact": "CONTATTI",

    // Home page
    "hero.greeting": "Ciao, sono Denis.",
    "hero.tagline": "Trasformo idee in codice d'impatto.",
    "hero.description":
      "Sono Denis Xhafaj, uno sviluppatore full-stack e appassionato di tecnologia. Aiuto aziende e privati a creare una forte presenza online e raggiungere i loro obiettivi.",
    "hero.cta.website": "Crea il tuo sito",
    "hero.cta.about": "Chi sono",

    "services.title": "Servizi",
    "services.web.title": "Sviluppo Web",
    "services.web.description":
      "Siti web e applicazioni personalizzate costruite con tecnologie moderne come React, Next.js e Node.js.",
    "services.performance.title": "Ottimizzazione Prestazioni",
    "services.performance.description":
      "Velocizza il tuo sito esistente, migliora la SEO e ottimizza l'esperienza utente.",
    "services.consultation.title": "Consulenza",
    "services.consultation.description":
      "Consigli tecnici, revisione del codice e pianificazione strategica per i tuoi progetti digitali.",

    "projects.title": "Progetti in Evidenza",
    "projects.cta": "Vedi Tutti i Progetti",

    "testimonials.title": "Testimonianze dei Clienti",

    "cta.title": "Pronto a dare vita alle tue idee?",
    "cta.description": "Collaboriamo per creare qualcosa di straordinario che ti aiuti a raggiungere i tuoi obiettivi.",
    "cta.button": "Contattami",

    // Footer
    "footer.description":
      "Sviluppatore full-stack che trasforma idee in codice d'impatto. Creo esperienze digitali che fanno la differenza.",
    "footer.navigation": "Navigazione",
    "footer.contact": "Contattami",
    "footer.contact.description": "Interessato a lavorare insieme? Non esitare a contattarmi.",
    "footer.contact.button": "Contattami",
    "footer.copyright": "© {year} Dennis Xhafaj. Tutti i diritti riservati.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Termini di Servizio",

    // About page
    "about.title": "Chi Sono",
    "about.intro": "Ciao! Mi chiamo Denis Xhafaj",
    "about.bio":
      "Sono uno sviluppatore italiano con una profonda passione per la tecnologia e per creare un impatto positivo. Affronto il mio lavoro con disciplina, integrità, fiducia, affidabilità e un costante desiderio di apprendere. Nel tempo libero, mi dedico alla palestra e all'approfondimento di nuovi temi.",
    "about.resume": "Vedi Curriculum",
    "about.skills": "Le Mie Competenze",
    "about.frontend": "Sviluppo Frontend",
    "about.backend": "Sviluppo Backend",
    "about.devops": "DevOps & Deployment",
    "about.other": "Altre Competenze",
    "about.experience": "Esperienza",
    "about.education": "Formazione",

    // Projects page
    "projects.page.title": "Progetti",
    "projects.page.description":
      "Esplora i miei ultimi lavori. Ogni progetto rappresenta una sfida e una soluzione unica.",
    "projects.view": "Vedi Dettagli",

    // Pricing page
    "pricing.currency": "EUR",
    "pricing.title": "Prezzi",
    "pricing.description":
      "Opzioni di prezzo trasparenti adattate alle tue esigenze. Scegli il piano più adatto al tuo progetto.",
    "pricing.basic.name": "Base",
    "pricing.basic.price": "250€",
    "pricing.basic.description": "Perfetto per piccole imprese e siti web personali",
    "pricing.professional.name": "Professionale",
    "pricing.professional.price": "500€",
    "pricing.professional.description": "Ideale per aziende in crescita ed e-commerce",
    "pricing.enterprise.name": "Enterprise",
    "pricing.enterprise.price": "Personalizzato",
    "pricing.enterprise.description": "Per grandi aziende con requisiti specifici",
    "pricing.get.started": "Inizia Ora",
    "pricing.custom.title": "Hai bisogno di qualcosa di personalizzato?",
    "pricing.custom.description":
      "Offro anche servizi di sviluppo personalizzati in base alle tue esigenze specifiche. Discutiamo del tuo progetto e troviamo la soluzione migliore.",

    // Contact page
    "contact.title": "Contatti",
    "contact.description": "Hai un progetto in mente o vuoi discutere di una collaborazione? Mi piacerebbe sentirti.",
    "contact.get.in.touch": "Mettiti in Contatto",
    "contact.reach.out":
      "Sentiti libero di contattarmi tramite il modulo di contatto o utilizzando le informazioni qui sotto. Ti risponderò il prima possibile.",
    "contact.email": "Email",
    "contact.phone": "Telefono",
    "contact.location": "Posizione",
    "contact.form.name": "Nome",
    "contact.form.email": "Email",
    "contact.form.subject": "Oggetto",
    "contact.form.message": "Messaggio",
    "contact.form.send": "Invia Messaggio",
    "contact.form.sending": "Invio in corso...",
    "contact.form.success": "Grazie per il tuo messaggio! Ti risponderò presto.",
    "contact.form.error": "Qualcosa è andato storto. Riprova.",
    "contact.schedule": "Pianifica un incontro"
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
