import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CASE_STUDIES, getCaseStudyBySlug } from "@/lib/case-studies-data"
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  HelpCircle,
  TrendingUp,
} from "lucide-react"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({
    slug: cs.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudyBySlug(slug)
  if (!study) return {}

  const canonicalUrl = `https://albaniancoder.vercel.app/case-studies/${study.slug}`

  return {
    title: `${study.title} | Dennis Xhafaj`,
    description: study.description,
    keywords: study.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: study.title,
      description: study.description,
      url: canonicalUrl,
      type: "article",
      locale: "it_IT",
      publishedTime: "2026-09-01T00:00:00.000Z",
      authors: ["Dennis Xhafaj"],
    },
  }
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params
  const study = getCaseStudyBySlug(slug)

  if (!study) {
    notFound()
  }

  // Schema.org structured data JSON-LD (Article + FAQPage + ProfessionalService)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `https://albaniancoder.vercel.app/case-studies/${study.slug}#article`,
        "headline": study.title,
        "description": study.description,
        "datePublished": "2026-09-01T00:00:00+02:00",
        "dateModified": "2026-09-07T00:00:00+02:00",
        "author": {
          "@type": "Person",
          "name": "Dennis Xhafaj",
          "url": "https://albaniancoder.vercel.app",
          "jobTitle": "Freelance Full-Stack Developer",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Crema",
            "addressRegion": "CR",
            "addressCountry": "IT",
          },
        },
        "publisher": {
          "@type": "Person",
          "name": "Dennis Xhafaj",
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://albaniancoder.vercel.app/#localbusiness",
        "name": "Dennis Xhafaj - Sviluppo Web & Software a Crema",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Crema",
          "addressRegion": "CR",
          "postalCode": "26013",
          "addressCountry": "IT",
        },
        "areaServed": ["Crema", "Cremona", "Lodi", "Milano", "Lombardia"],
        "priceRange": "€€",
        "url": "https://albaniancoder.vercel.app",
      },
      {
        "@type": "FAQPage",
        "@id": `https://albaniancoder.vercel.app/case-studies/${study.slug}#faq`,
        "mainEntity": study.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
        })),
      },
    ],
  }

  const currentIndex = CASE_STUDIES.findIndex((c) => c.slug === study.slug)
  const prevStudy = currentIndex > 0 ? CASE_STUDIES[currentIndex - 1] : null
  const nextStudy = currentIndex < CASE_STUDIES.length - 1 ? CASE_STUDIES[currentIndex + 1] : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px 96px" }}>
        {/* Breadcrumb & back button */}
        <div style={{ marginBottom: 32, display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "var(--dim)" }}>
          <Link href="/case-studies" style={{ color: "var(--dim)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
            <ArrowLeft size={14} /> Tutti i Case Study
          </Link>
          <span>/</span>
          <span style={{ color: "var(--muted)" }}>{study.category}</span>
        </div>

        {/* Hero header */}
        <header style={{ marginBottom: 40 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16, flexWrap: "wrap" }}>
            <span
              style={{
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontWeight: 600,
                color: "var(--tag-b-fg)",
                background: "var(--tag-b-bg)",
                borderRadius: 9999,
                padding: "5px 12px",
              }}
            >
              {study.badge}
            </span>
            <span style={{ fontSize: 13, color: "var(--dim)", display: "inline-flex", alignItems: "center", gap: 4 }}>
              <Clock size={13} /> {study.readTime}
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(28px, 4.5vw, 42px)",
              fontWeight: 800,
              lineHeight: 1.18,
              letterSpacing: "-0.025em",
              color: "var(--fg)",
              marginBottom: 16,
            }}
          >
            {study.title}
          </h1>

          <p
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: "var(--muted)",
            }}
          >
            {study.subtitle}
          </p>
        </header>

        {/* Target Profile Card */}
        <section
          style={{
            background: "var(--card)",
            border: "1px solid var(--line2)",
            borderRadius: 14,
            padding: 24,
            marginBottom: 44,
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 16,
          }}
          className="sm:!grid-cols-2"
        >
          <div>
            <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--dim)", fontWeight: 600, marginBottom: 4 }}>
              Azienda Target
            </div>
            <div style={{ fontSize: 15, fontWeight: 700, color: "var(--fg)" }}>
              {study.targetClient}
            </div>
          </div>
          <div>
            <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--dim)", fontWeight: 600, marginBottom: 4 }}>
              Esigenza Principale
            </div>
            <div style={{ fontSize: 14, color: "var(--soft)", lineHeight: 1.5 }}>
              {study.need}
            </div>
          </div>
        </section>

        {/* Section 1: The Problem */}
        <section style={{ marginBottom: 48 }}>
          <h2
            style={{
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--fg)",
              marginBottom: 16,
            }}
          >
            {study.problem.title}
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--muted)", marginBottom: 18 }}>
            {study.problem.intro}
          </p>

          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0", display: "flex", flexDirection: "column", gap: 12 }}>
            {study.problem.points.map((pt, i) => (
              <li
                key={i}
                style={{
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "var(--fg)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                }}
              >
                <span
                  style={{
                    color: "#ef4444",
                    background: "rgba(239, 68, 68, 0.12)",
                    borderRadius: "50%",
                    width: 22,
                    height: 22,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    fontSize: 12,
                    fontWeight: 700,
                    marginTop: 2,
                  }}
                >
                  ✕
                </span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>

          {study.problem.quote && (
            <blockquote
              style={{
                borderLeft: "3px solid var(--accent, #3b82f6)",
                background: "var(--bg)",
                padding: "16px 20px",
                borderRadius: "0 10px 10px 0",
                fontSize: 15,
                fontStyle: "italic",
                lineHeight: 1.65,
                color: "var(--muted)",
                margin: "24px 0",
              }}
            >
              “{study.problem.quote}”
            </blockquote>
          )}
        </section>

        {/* Section 2: The Solution */}
        <section style={{ marginBottom: 48 }}>
          <h2
            style={{
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--fg)",
              marginBottom: 16,
            }}
          >
            {study.solution.title}
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--muted)", marginBottom: 24 }}>
            {study.solution.intro}
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {study.solution.steps.map((step, idx) => (
              <div
                key={idx}
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--line2)",
                  borderRadius: 12,
                  padding: 22,
                }}
              >
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: "var(--fg)",
                    marginBottom: 10,
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--muted)", marginBottom: step.bullets ? 14 : 0 }}>
                  {step.description}
                </p>

                {step.bullets && (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {step.bullets.map((b, bi) => (
                      <span
                        key={bi}
                        style={{
                          fontSize: 12,
                          color: "var(--soft)",
                          background: "var(--chip)",
                          borderRadius: 9999,
                          padding: "4px 12px",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                        }}
                      >
                        <CheckCircle2 size={12} style={{ color: "var(--tag-g-fg)" }} /> {b}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Before vs After Results Table */}
        <section style={{ marginBottom: 52 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <TrendingUp size={20} style={{ color: "var(--tag-g-fg)" }} />
            <h2
              style={{
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--fg)",
                margin: 0,
              }}
            >
              I Risultati Misurabili (Prima vs Dopo)
            </h2>
          </div>

          <div
            style={{
              overflowX: "auto",
              border: "1px solid var(--line2)",
              borderRadius: 12,
              background: "var(--card)",
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: 14 }}>
              <thead>
                <tr style={{ background: "var(--bg)", borderBottom: "1px solid var(--line2)" }}>
                  <th style={{ padding: "14px 18px", color: "var(--dim)", fontWeight: 600, fontSize: 12, textTransform: "uppercase" }}>
                    Indicatore Chiave
                  </th>
                  <th style={{ padding: "14px 18px", color: "#ef4444", fontWeight: 600, fontSize: 12, textTransform: "uppercase" }}>
                    Prima dell'Intervento
                  </th>
                  <th style={{ padding: "14px 18px", color: "var(--tag-g-fg)", fontWeight: 600, fontSize: 12, textTransform: "uppercase" }}>
                    Dopo con Dennis Xhafaj
                  </th>
                </tr>
              </thead>
              <tbody>
                {study.results.map((res, ri) => (
                  <tr
                    key={ri}
                    style={{
                      borderBottom: ri === study.results.length - 1 ? "none" : "1px solid var(--line)",
                    }}
                  >
                    <td style={{ padding: "14px 18px", fontWeight: 600, color: "var(--fg)" }}>
                      {res.metric}
                    </td>
                    <td style={{ padding: "14px 18px", color: "var(--muted)" }}>
                      {res.before}
                    </td>
                    <td style={{ padding: "14px 18px", fontWeight: 700, color: "var(--tag-g-fg)" }}>
                      {res.after}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4: FAQ */}
        <section style={{ marginBottom: 56 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
            <HelpCircle size={20} style={{ color: "var(--tag-b-fg)" }} />
            <h2
              style={{
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--fg)",
                margin: 0,
              }}
            >
              Domande Frequenti (FAQ)
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {study.faqs.map((faq, fi) => (
              <div
                key={fi}
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--line2)",
                  borderRadius: 12,
                  padding: "18px 22px",
                }}
              >
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: "var(--fg)",
                    marginBottom: 8,
                  }}
                >
                  {faq.question}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--muted)", margin: 0 }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Card */}
        <section
          style={{
            background: "var(--card)",
            border: "1px solid var(--line2)",
            borderRadius: 16,
            padding: "36px 30px",
            boxShadow: "var(--shadow)",
            marginBottom: 48,
          }}
        >
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
          <h2
            style={{
              fontSize: 24,
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "var(--fg)",
              marginTop: 6,
              marginBottom: 10,
            }}
          >
            Hai una sfida simile per la tua attività a Crema?
          </h2>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.6,
              color: "var(--muted)",
              marginBottom: 24,
              maxWidth: 640,
            }}
          >
            Invia un brief iniziale di 2 minuti. Riceverai ambito di lavoro dettagliato, tempi certi di consegna e
            un preventivo a prezzo fisso senza impegno.
          </p>

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
            Inizia il tuo brief a prezzo fisso <ArrowRight size={16} />
          </Link>
        </section>

        {/* Prev / Next navigation */}
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 16,
            borderTop: "1px solid var(--line2)",
            paddingTop: 28,
            flexWrap: "wrap",
          }}
        >
          {prevStudy ? (
            <Link
              href={`/case-studies/${prevStudy.slug}`}
              style={{
                fontSize: 13,
                color: "var(--muted)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
              }}
              className="hover:underline"
            >
              <ArrowLeft size={14} /> {prevStudy.title.slice(0, 40)}...
            </Link>
          ) : (
            <div />
          )}

          {nextStudy && (
            <Link
              href={`/case-studies/${nextStudy.slug}`}
              style={{
                fontSize: 13,
                color: "var(--muted)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
              }}
              className="hover:underline"
            >
              {nextStudy.title.slice(0, 40)}... <ArrowRight size={14} />
            </Link>
          )}
        </nav>
      </article>
    </>
  )
}
