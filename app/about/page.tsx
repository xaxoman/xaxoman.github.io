import type { Metadata } from "next"
import JsonLd from "@/components/json-ld"
import AboutClient from "./about-client"

export const metadata: Metadata = {
  title: "Chi Sono – Dennis Xhafaj, Sviluppatore Full-Stack a Crema",
  description:
    "Dennis Xhafaj, sviluppatore full-stack freelance a Crema. Come lavoro, quali tecnologie uso e perché un freelance costa meno di un'agenzia.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Chi Sono – Dennis Xhafaj, Sviluppatore Full-Stack a Crema",
    description: "Dennis Xhafaj, sviluppatore full-stack freelance a Crema. Come lavoro, quali tecnologie uso e perché un freelance costa meno di un'agenzia.",
    url: "/about",
    type: "website",
  },
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://albaniancoder.vercel.app" },
    { "@type": "ListItem", position: 2, name: "Chi sono", item: "https://albaniancoder.vercel.app/about" },
  ],
}

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <AboutClient />
    </>
  )
}
