import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CASE_STUDIES, getCaseStudyBySlug } from "@/lib/case-studies-data"
import { ArrowLeft, ArrowRight } from "lucide-react"

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

  // Schema.org structured data JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `https://albaniancoder.vercel.app/case-studies/${study.slug}#article`,
        headline: study.title,
        description: study.description,
        datePublished: "2026-09-01T00:00:00+02:00",
        dateModified: "2026-09-07T00:00:00+02:00",
        author: {
          "@type": "Person",
          name: "Dennis Xhafaj",
          url: "https://albaniancoder.vercel.app",
          jobTitle: "Freelance Full-Stack Developer",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Crema",
            addressRegion: "CR",
            addressCountry: "IT",
          },
        },
        publisher: {
          "@type": "Person",
          name: "Dennis Xhafaj",
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://albaniancoder.vercel.app/#localbusiness",
        name: "Dennis Xhafaj - Sviluppo Web & Software a Crema",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Crema",
          addressRegion: "CR",
          postalCode: "26013",
          addressCountry: "IT",
        },
        areaServed: ["Crema", "Cremona", "Lodi", "Milano", "Lombardia"],
        priceRange: "€€",
        url: "https://albaniancoder.vercel.app",
      },
      {
        "@type": "FAQPage",
        "@id": `https://albaniancoder.vercel.app/case-studies/${study.slug}#faq`,
        mainEntity: study.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
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

      <article style={{ maxWidth: 740, margin: "0 auto", padding: "56px 24px 120px" }}>
        {/* Navigation back */}
        <div style={{ marginBottom: 40 }}>
          <Link
            href="/case-studies"
            style={{
              color: "var(--dim)",
              fontSize: 13,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontWeight: 500,
            }}
            className="hover:underline"
          >
            <ArrowLeft size={14} /> Torna a tutti i case study
          </Link>
        </div>

        {/* Editorial Header */}
        <header style={{ marginBottom: 48 }}>
          <div
            style={{
              fontSize: 12,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--dim)",
              fontWeight: 600,
              marginBottom: 16,
            }}
          >
            {study.category} · {study.readTime} di lettura · Crema
          </div>

          <h1
            style={{
              fontSize: "clamp(30px, 4.5vw, 44px)",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              color: "var(--fg)",
              margin: "0 0 20px",
            }}
          >
            {study.title}
          </h1>

          <p
            style={{
              fontSize: 19,
              lineHeight: 1.65,
              color: "var(--muted)",
              margin: 0,
            }}
          >
            {study.subtitle}
          </p>
        </header>

        {/* Quiet Meta Details Strip */}
        <div
          style={{
            borderTop: "1px solid var(--line)",
            borderBottom: "1px solid var(--line)",
            padding: "24px 0",
            marginBottom: 56,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 28,
          }}
          className="!grid-cols-1 sm:!grid-cols-2"
        >
          <div>
            <div
              style={{
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--dim)",
                fontWeight: 600,
                marginBottom: 6,
              }}
            >
              Azienda Target
            </div>
            <div style={{ fontSize: 15, fontWeight: 600, color: "var(--fg)", lineHeight: 1.4 }}>
              {study.targetClient}
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--dim)",
                fontWeight: 600,
                marginBottom: 6,
              }}
            >
              Esigenza Principale
            </div>
            <div style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.5 }}>
              {study.need}
            </div>
          </div>
        </div>

        {/* Section 1: The Problem */}
        <section style={{ marginBottom: 60 }}>
          <h2
            style={{
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--fg)",
              margin: "0 0 20px",
            }}
          >
            {study.problem.title}
          </h2>

          <p
            style={{
              fontSize: 17,
              lineHeight: 1.8,
              color: "var(--muted)",
              marginBottom: 24,
            }}
          >
            {study.problem.intro}
          </p>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "0 0 32px",
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            {study.problem.points.map((pt, i) => (
              <li
                key={i}
                style={{
                  fontSize: 16,
                  lineHeight: 1.7,
                  color: "var(--fg)",
                  display: "flex",
                  alignItems: "baseline",
                  gap: 12,
                }}
              >
                <span style={{ color: "var(--dim)", fontSize: 16, userSelect: "none" }}>—</span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>

          {study.problem.quote && (
            <blockquote
              style={{
                borderLeft: "2px solid var(--line2)",
                paddingLeft: 24,
                margin: "36px 0",
                fontStyle: "italic",
                fontSize: 18,
                lineHeight: 1.7,
                color: "var(--fg)",
              }}
            >
              “{study.problem.quote}”
            </blockquote>
          )}
        </section>

        {/* Section 2: The Solution */}
        <section style={{ marginBottom: 64 }}>
          <h2
            style={{
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--fg)",
              margin: "0 0 20px",
            }}
          >
            {study.solution.title}
          </h2>

          <p
            style={{
              fontSize: 17,
              lineHeight: 1.8,
              color: "var(--muted)",
              marginBottom: 36,
            }}
          >
            {study.solution.intro}
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
            {study.solution.steps.map((step, idx) => (
              <div key={idx}>
                <h3
                  style={{
                    fontSize: 19,
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                    color: "var(--fg)",
                    marginBottom: 10,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: 16,
                    lineHeight: 1.8,
                    color: "var(--muted)",
                    margin: step.bullets ? "0 0 14px" : 0,
                  }}
                >
                  {step.description}
                </p>

                {step.bullets && (
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                    }}
                  >
                    {step.bullets.map((b, bi) => (
                      <li
                        key={bi}
                        style={{
                          fontSize: 15,
                          lineHeight: 1.6,
                          color: "var(--soft)",
                          display: "flex",
                          alignItems: "baseline",
                          gap: 10,
                        }}
                      >
                        <span style={{ color: "var(--dim)", fontSize: 14 }}>•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Measurable Results (Clean Stat Grid) */}
        <section style={{ borderTop: "1px solid var(--line)", paddingTop: 52, marginBottom: 64 }}>
          <h2
            style={{
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--fg)",
              margin: "0 0 28px",
            }}
          >
            Risultati misurabili
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 16,
            }}
            className="!grid-cols-1 sm:!grid-cols-2"
          >
            {study.results.map((res, ri) => (
              <div
                key={ri}
                style={{
                  border: "1px solid var(--line2)",
                  borderRadius: 12,
                  padding: "20px 22px",
                  background: "var(--card)",
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--dim)",
                    fontWeight: 600,
                    marginBottom: 8,
                  }}
                >
                  {res.metric}
                </div>
                <div
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: "var(--fg)",
                    letterSpacing: "-0.01em",
                    marginBottom: 4,
                  }}
                >
                  {res.after}
                </div>
                <div style={{ fontSize: 13, color: "var(--muted)" }}>
                  Prima: {res.before}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: FAQ (Clean narrative style) */}
        <section style={{ borderTop: "1px solid var(--line)", paddingTop: 52, marginBottom: 64 }}>
          <h2
            style={{
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--fg)",
              margin: "0 0 32px",
            }}
          >
            Domande frequenti
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {study.faqs.map((faq, fi) => (
              <div key={fi}>
                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 600,
                    color: "var(--fg)",
                    marginBottom: 10,
                  }}
                >
                  {faq.question}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.75,
                    color: "var(--muted)",
                    margin: 0,
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Next Step / Contact */}
        <section
          style={{
            borderTop: "1px solid var(--line)",
            paddingTop: 52,
            marginBottom: 64,
          }}
        >
          <div
            style={{
              fontSize: 12,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--dim)",
              fontWeight: 600,
              marginBottom: 12,
            }}
          >
            PROSSIMO PASSO
          </div>
          <h3
            style={{
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--fg)",
              margin: "0 0 12px",
            }}
          >
            Hai una sfida simile per la tua attività a Crema?
          </h3>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.7,
              color: "var(--muted)",
              marginBottom: 28,
              maxWidth: 580,
            }}
          >
            Puoi inviare un breve brief descrivendo le tue necessità. Rispondo entro 24-48 ore con scope, tempi e
            preventivo a prezzo fisso — senza intermediari e senza canoni forzati.
          </p>

          <Link
            href="/contact"
            style={{
              background: "var(--btn-bg)",
              color: "var(--btn-fg)",
              borderRadius: 9999,
              padding: "13px 26px",
              fontSize: 14,
              fontWeight: 700,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            Avvia un brief <ArrowRight size={15} />
          </Link>
        </section>

        {/* Prev / Next Pagination */}
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 20,
            borderTop: "1px solid var(--line)",
            paddingTop: 32,
            flexWrap: "wrap",
          }}
        >
          {prevStudy ? (
            <Link
              href={`/case-studies/${prevStudy.slug}`}
              style={{
                fontSize: 14,
                color: "var(--muted)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
              className="hover:underline"
            >
              <ArrowLeft size={15} /> {prevStudy.title.slice(0, 36)}...
            </Link>
          ) : (
            <div />
          )}

          {nextStudy && (
            <Link
              href={`/case-studies/${nextStudy.slug}`}
              style={{
                fontSize: 14,
                color: "var(--muted)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
              className="hover:underline"
            >
              {nextStudy.title.slice(0, 36)}... <ArrowRight size={15} />
            </Link>
          )}
        </nav>
      </article>
    </>
  )
}
