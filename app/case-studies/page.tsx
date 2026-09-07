import type { Metadata } from "next"
import Link from "next/link"
import { CASE_STUDIES } from "@/lib/case-studies-data"
import { ArrowRight, CheckCircle2, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Case Study & Risultati SEO per Aziende a Crema | Dennis Xhafaj",
  description:
    "Approfondimenti, case study reali e guide pratiche per PMI, liberi professionisti e negozi a Crema e provincia: creazione siti web veloci, e-commerce, gestionali e Local SEO.",
  keywords: [
    "creazione siti web crema",
    "sviluppo siti web per pmi crema e provincia",
    "sviluppo gestionali su misura crema",
    "creazione ecommerce crema",
    "posizionamento seo siti internet crema",
    "web designer freelance crema",
    "preventivo sito web crema",
  ],
}

export default function CaseStudiesIndexPage() {
  return (
    <main style={{ maxWidth: 1120, margin: "0 auto", padding: "56px 24px 96px" }}>
      {/* Header section */}
      <div style={{ marginBottom: 48, maxWidth: 840 }}>
        <div style={{ marginBottom: 16 }}>
          <span
            style={{
              fontSize: 12,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 600,
              color: "var(--dim)",
            }}
          >
            STUDI DI CASO & APPROFONDIMENTI
          </span>
        </div>

        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 46px)",
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            color: "var(--fg)",
            marginBottom: 20,
          }}
        >
          Progetti reali, numeri concreti e soluzioni digitali per il territorio.
        </h1>

        <p
          style={{
            fontSize: 17,
            lineHeight: 1.6,
            color: "var(--muted)",
          }}
        >
          Ogni azienda e professionista ha sfide diverse: dal rifacimento di un sito vetrina obsoleto alla sostituzione di
          decine di fogli Excel con un gestionale su misura. Qui trovi come affrontiamo ogni scenario a Crema e provincia
          con codice moderno, preventivo a prezzo fisso e zero fumo negli occhi.
        </p>
      </div>

      {/* Grid of 10 Case Studies */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: 24,
        }}
      >
        {CASE_STUDIES.map((item, idx) => (
          <article
            key={item.slug}
            style={{
              background: "var(--card)",
              border: "1px solid var(--line2)",
              borderRadius: 14,
              padding: 26,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "var(--shadow)",
              transition: "transform 0.2s ease, border-color 0.2s ease",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 16,
                  gap: 12,
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    color: "var(--tag-b-fg)",
                    background: "var(--tag-b-bg)",
                    borderRadius: 9999,
                    padding: "4px 10px",
                  }}
                >
                  {item.category}
                </span>
                <span
                  style={{
                    fontSize: 12,
                    color: "var(--dim)",
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                  }}
                >
                  <Clock size={13} /> {item.readTime}
                </span>
              </div>

              <h2
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  lineHeight: 1.3,
                  letterSpacing: "-0.01em",
                  marginBottom: 12,
                  color: "var(--fg)",
                }}
              >
                <Link
                  href={`/case-studies/${item.slug}`}
                  style={{ color: "inherit", textDecoration: "none" }}
                  className="hover:underline"
                >
                  {item.title}
                </Link>
              </h2>

              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.55,
                  color: "var(--muted)",
                  marginBottom: 24,
                }}
              >
                {item.subtitle}
              </p>
            </div>

            <div>
              <Link
                href={`/case-studies/${item.slug}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 14,
                  fontWeight: 600,
                  color: "var(--fg)",
                  textDecoration: "none",
                }}
                className="hover:opacity-80"
              >
                Leggi il case study completo <ArrowRight size={15} />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom CTA Box */}
      <div
        style={{
          marginTop: 64,
          padding: "40px 32px",
          background: "var(--card)",
          border: "1px solid var(--line2)",
          borderRadius: 16,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 20,
          boxShadow: "var(--shadow)",
        }}
      >
        <div>
          <span
            style={{
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontWeight: 600,
              color: "var(--dim)",
            }}
          >
            PARLIAMO DEL TUO PROGETTO
          </span>
          <h3
            style={{
              fontSize: 26,
              fontWeight: 700,
              color: "var(--fg)",
              marginTop: 6,
              letterSpacing: "-0.02em",
            }}
          >
            Hai una necessità simile per la tua azienda o studio a Crema?
          </h3>
          <p
            style={{
              fontSize: 15,
              color: "var(--muted)",
              marginTop: 8,
              maxWidth: 680,
              lineHeight: 1.6,
            }}
          >
            Invia una descrizione del tuo progetto in pochi campi: riceverai ambito di lavoro, data di consegna e preventivo
            a prezzo fisso entro 24-48 ore. Senza canoni forzati e senza lunghe riunioni commerciali.
          </p>
        </div>

        <Link
          href="/contact"
          style={{
            background: "var(--btn-bg)",
            color: "var(--btn-fg)",
            borderRadius: 9999,
            padding: "14px 28px",
            fontSize: 14,
            fontWeight: 700,
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          Avvia un brief a prezzo fisso <ArrowRight size={16} />
        </Link>
      </div>
    </main>
  )
}
