import type { Metadata } from "next"
import Link from "next/link"
import { CASE_STUDIES } from "@/lib/case-studies-data"
import { ArrowRight, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Case Study & Soluzioni per Aziende a Crema | Dennis Xhafaj",
  description:
    "Approfondimenti e case study per PMI, liberi professionisti e attività a Crema: creazione siti web performanti, e-commerce, gestionali su misura e Local SEO.",
}

const solidBtn: React.CSSProperties = {
  background: "var(--btn-bg)",
  color: "var(--btn-fg)",
  borderRadius: 9999,
  padding: "15px 30px",
  fontSize: 15,
  fontWeight: 700,
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
}

export default function CaseStudiesIndexPage() {
  return (
    <main style={{ maxWidth: 1120, margin: "0 auto", padding: "88px 24px 104px" }}>
      {/* Hero Header */}
      <div style={{ maxWidth: 760, marginBottom: 64 }}>
        <div
          style={{
            fontSize: 12,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--dim)",
            fontWeight: 500,
            marginBottom: 18,
          }}
        >
          STUDI DI CASO & APPROFONDIMENTI
        </div>

        <h1
          style={{
            fontSize: "clamp(36px, 5.5vw, 52px)",
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            fontWeight: 700,
            color: "var(--fg)",
            margin: "0 0 24px",
          }}
        >
          Soluzioni concrete per aziende e professionisti.
        </h1>

        <p
          style={{
            fontSize: 18,
            lineHeight: 1.7,
            color: "var(--muted)",
            margin: 0,
          }}
        >
          Dalla modernizzazione di siti web obsoleti allo sviluppo di software gestionali che sostituiscono fogli Excel:
          ecco come affrontiamo ogni necessità a Crema e provincia con codice moderno e preventivo a prezzo fisso.
        </p>
      </div>

      {/* Grid of 10 Case Studies */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: 20,
        }}
      >
        {CASE_STUDIES.map((item) => (
          <article
            key={item.slug}
            style={{
              background: "var(--card)",
              border: "1px solid var(--line2)",
              borderRadius: 12,
              padding: 28,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "var(--shadow)",
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
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 5,
                  }}
                >
                  <Clock size={12} /> {item.readTime}
                </span>
              </div>

              <h2
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  lineHeight: 1.3,
                  letterSpacing: "-0.015em",
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
                  lineHeight: 1.6,
                  color: "var(--muted)",
                  margin: "0 0 24px",
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
                  gap: 6,
                  fontSize: 14,
                  fontWeight: 600,
                  color: "var(--fg)",
                  textDecoration: "none",
                }}
                className="hover:underline"
              >
                Leggi il case study <ArrowRight size={14} />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Footer Section */}
      <div
        style={{
          marginTop: 80,
          borderTop: "1px solid var(--line)",
          paddingTop: 48,
          display: "flex",
          flexWrap: "wrap",
          gap: 24,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h3
            style={{
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "-0.015em",
              color: "var(--fg)",
              margin: "0 0 6px",
            }}
          >
            Hai una sfida simile per la tua attività?
          </h3>
          <p
            style={{
              fontSize: 15,
              color: "var(--muted)",
              margin: 0,
            }}
          >
            Invia un breve brief: ti rispondo con ambito, tempi e preventivo a prezzo fisso.
          </p>
        </div>

        <Link href="/contact" style={solidBtn}>
          Invia un brief <ArrowRight size={16} />
        </Link>
      </div>
    </main>
  )
}
