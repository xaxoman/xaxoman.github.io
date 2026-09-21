import type { Metadata } from "next"
import JsonLd from "@/components/json-ld"
import ServicesClient from "./services-client"

export const metadata: Metadata = {
  title: "Creazione Siti Web, E-commerce e Gestionali a Crema",
  description:
    "Siti web, e-commerce, app web e mobile e automazioni AI per aziende di Crema e provincia. Ogni progetto con perimetro definito, tempi certi e prezzo fisso.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Creazione Siti Web, E-commerce e Gestionali a Crema",
    description: "Siti web, e-commerce, app web e mobile e automazioni AI per aziende di Crema e provincia. Ogni progetto con perimetro definito, tempi certi e prezzo fisso.",
    url: "/services",
    type: "website",
  },
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://albaniancoder.vercel.app" },
    { "@type": "ListItem", position: 2, name: "Servizi", item: "https://albaniancoder.vercel.app/services" },
  ],
}

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <ServicesClient />
    </>
  )
}
