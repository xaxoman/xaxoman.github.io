import type { Metadata } from "next"
import JsonLd from "@/components/json-ld"
import WorkClient from "./work-client"

export const metadata: Metadata = {
  title: "Portfolio Progetti Web e App – Dennis Xhafaj",
  description:
    "Progetti realizzati: siti web, e-commerce e app mobile per aziende e professionisti. Tecnologie usate, obiettivi e risultato di ogni lavoro.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Portfolio Progetti Web e App – Dennis Xhafaj",
    description: "Progetti realizzati: siti web, e-commerce e app mobile per aziende e professionisti. Tecnologie usate, obiettivi e risultato di ogni lavoro.",
    url: "/work",
    type: "website",
  },
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://albaniancoder.vercel.app" },
    { "@type": "ListItem", position: 2, name: "Lavori", item: "https://albaniancoder.vercel.app/work" },
  ],
}

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <WorkClient />
    </>
  )
}
