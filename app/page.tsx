import type { Metadata } from "next"
import HomeClient from "./home-client"
import JsonLd from "@/components/json-ld"

export const metadata: Metadata = {
  title: "Sviluppatore Web Freelance a Crema – Siti, App e Automazioni AI",
  description:
    "Sviluppatore full-stack freelance a Crema. Realizzo siti web, e-commerce, app e automazioni AI per PMI e professionisti: perimetro, tempi e prezzo fisso.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Sviluppatore Web Freelance a Crema – Siti, App e Automazioni AI",
    description: "Sviluppatore full-stack freelance a Crema. Realizzo siti web, e-commerce, app e automazioni AI per PMI e professionisti: perimetro, tempi e prezzo fisso.",
    url: "/",
    type: "website",
  },
}

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Dennis Xhafaj — Sviluppo Web e Automazioni AI",
  url: "https://albaniancoder.vercel.app",
  description:
    "Sviluppatore full-stack freelance a Crema: siti web, e-commerce, app web e mobile e automazioni AI per PMI e professionisti.",
  areaServed: ["Crema", "Provincia di Cremona", "Lombardia", "Italia"],
  knowsLanguage: ["it", "en"],
  founder: {
    "@type": "Person",
    name: "Dennis Xhafaj",
    jobTitle: "Sviluppatore full-stack freelance",
    url: "https://albaniancoder.vercel.app/about",
    sameAs: ["https://github.com/xaxoman", "https://linkedin.com/in/dennis-xhafaj-b48a2528a"],
  },
}

export default function Page() {
  return (
    <>
      <JsonLd data={businessJsonLd} />
      <HomeClient />
    </>
  )
}
