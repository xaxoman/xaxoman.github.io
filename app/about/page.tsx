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

const BASE = "https://albaniancoder.vercel.app"

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${BASE}/about#person`,
      name: "Dennis Xhafaj",
      jobTitle: "Sviluppatore full-stack freelance",
      description:
        "Sviluppatore full-stack freelance a Crema: siti web, e-commerce, app web e mobile e automazioni AI per PMI e professionisti.",
      url: `${BASE}/about`,
      mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE}/about` },
      email: "xhafaj.dennis@protonmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Crema",
        addressRegion: "CR",
        postalCode: "26013",
        addressCountry: "IT",
      },
      knowsLanguage: ["it", "en", "sq"],
      knowsAbout: [
        "Sviluppo web full-stack",
        "Siti web per PMI",
        "E-commerce",
        "Gestionali su misura",
        "App mobile",
        "Automazioni AI",
        "SEO locale",
        "TypeScript",
        "React",
        "Angular",
        ".NET",
        "Node.js",
      ],
      worksFor: { "@id": `${BASE}/#business` },
      sameAs: ["https://github.com/xaxoman", "https://linkedin.com/in/dennis-xhafaj-b48a2528a"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${BASE}/about#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE },
        { "@type": "ListItem", position: 2, name: "Chi sono", item: `${BASE}/about` },
      ],
    },
  ],
}

export default function Page() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <AboutClient />
    </>
  )
}
