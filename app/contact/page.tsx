import type { Metadata } from "next"
import JsonLd from "@/components/json-ld"
import ContactClient from "./contact-client"

export const metadata: Metadata = {
  title: "Richiedi un Preventivo per il Tuo Sito Web – Crema",
  description:
    "Descrivi il progetto in un breve brief: ricevi perimetro, tempistiche e un preventivo fisso, di solito entro un giorno lavorativo. Crema e da remoto.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Richiedi un Preventivo per il Tuo Sito Web – Crema",
    description: "Descrivi il progetto in un breve brief: ricevi perimetro, tempistiche e un preventivo fisso, di solito entro un giorno lavorativo. Crema e da remoto.",
    url: "/contact",
    type: "website",
  },
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://albaniancoder.vercel.app" },
    { "@type": "ListItem", position: 2, name: "Contatti", item: "https://albaniancoder.vercel.app/contact" },
  ],
}

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <ContactClient />
    </>
  )
}
