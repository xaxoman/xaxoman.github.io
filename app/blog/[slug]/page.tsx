import type { Metadata } from "next"
import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, Clock } from "lucide-react"
import { BLOG_POSTS, getPostBySlug } from "@/lib/blog-data"
import JsonLd from "@/components/json-ld"
import BlogCover from "@/components/blog-cover"

const BASE = "https://albaniancoder.vercel.app"

type PageProps = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: "Articolo non trovato" }

  return {
    title: `${post.title} | Dennis Xhafaj`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: ["Dennis Xhafaj"],
    },
  }
}

const h2Style: React.CSSProperties = {
  fontSize: 28,
  lineHeight: 1.2,
  letterSpacing: "-0.02em",
  fontWeight: 700,
  margin: "0 0 20px",
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("it-IT", { day: "numeric", month: "long", year: "numeric" })
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const url = `${BASE}/blog/${post.slug}`
  const related = post.related.map(getPostBySlug).filter(Boolean)

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.description,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        inLanguage: "it-IT",
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        author: {
          "@type": "Person",
          name: "Dennis Xhafaj",
          url: `${BASE}/about`,
          sameAs: ["https://github.com/xaxoman", "https://linkedin.com/in/dennis-xhafaj-b48a2528a"],
        },
        publisher: { "@type": "Person", name: "Dennis Xhafaj", url: BASE },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: post.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ],
  }

  return (
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "56px 24px 104px" }}>
      <JsonLd data={jsonLd} />

      <Link
        href="/blog"
        style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, color: "var(--muted)", marginBottom: 40 }}
      >
        <ArrowLeft size={15} /> Tutte le guide
      </Link>

      <header style={{ marginBottom: 44 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20, fontSize: 12, flexWrap: "wrap" }}>
          <span
            style={{
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontWeight: 500,
              color: "var(--tag-b-fg)",
              background: "var(--tag-b-bg)",
              borderRadius: 9999,
              padding: "5px 12px",
            }}
          >
            {post.category}
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 5, color: "var(--dim)" }}>
            <Clock size={13} /> {post.readTime} di lettura
          </span>
        </div>

        <h1 style={{ fontSize: "clamp(32px, 4.6vw, 44px)", lineHeight: 1.12, letterSpacing: "-0.03em", fontWeight: 700, margin: "0 0 22px" }}>
          {post.title}
        </h1>

        <p style={{ fontSize: 19, lineHeight: 1.65, color: "var(--muted)", margin: "0 0 24px" }}>{post.excerpt}</p>

        <div style={{ fontSize: 13, color: "var(--dim)" }}>
          <span>
            Pubblicato il <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          </span>
          {post.updatedAt !== post.publishedAt && (
            <span>
              {" · "}Aggiornato il <time dateTime={post.updatedAt}>{formatDate(post.updatedAt)}</time>
            </span>
          )}
        </div>
      </header>

      <div style={{ marginBottom: 48 }}>
        <BlogCover category={post.category} slug={post.slug} ratio="2 / 1" />
      </div>

      <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--soft)", margin: "0 0 52px" }}>{post.intro}</p>

      <section style={{ marginBottom: 56 }}>
        <h2 style={h2Style}>{post.problem.title}</h2>
        <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--muted)", margin: "0 0 22px" }}>{post.problem.intro}</p>
        <ul style={{ display: "grid", gap: 14, margin: 0, padding: 0, listStyle: "none" }}>
          {post.problem.points.map((pt) => (
            <li key={pt} style={{ display: "flex", gap: 12, fontSize: 16, lineHeight: 1.7, color: "var(--soft)" }}>
              <span style={{ color: "var(--dim)", flex: "none" }}>—</span>
              <span>{pt}</span>
            </li>
          ))}
        </ul>
      </section>

      <section style={{ borderTop: "1px solid var(--line)", paddingTop: 48, marginBottom: 56 }}>
        <h2 style={h2Style}>{post.solution.title}</h2>
        <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--muted)", margin: "0 0 32px" }}>{post.solution.intro}</p>
        <div style={{ display: "grid", gap: 28 }}>
          {post.solution.steps.map((step) => (
            <div key={step.title}>
              <h3 style={{ fontSize: 19, fontWeight: 700, letterSpacing: "-0.01em", margin: "0 0 10px" }}>{step.title}</h3>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--muted)", margin: 0 }}>{step.description}</p>
              {step.bullets && (
                <div style={{ display: "grid", gap: 10, marginTop: 14 }}>
                  {step.bullets.map((b) => (
                    <div key={b} data-bullet="1" style={{ fontSize: 15, color: "var(--soft)" }}>
                      <span data-bullet-mark="1" style={{ color: "var(--ok)" }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                      {b}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--muted)", margin: "32px 0 0" }}>
          Se vuoi vedere come imposto questi progetti,{" "}
          <Link href={post.service.href} style={{ textDecoration: "underline", textUnderlineOffset: 3 }}>
            {post.service.label}
          </Link>
          .
        </p>
      </section>

      {post.costs && (
        <section style={{ borderTop: "1px solid var(--line)", paddingTop: 48, marginBottom: 56 }}>
          <h2 style={h2Style}>{post.costs.title}</h2>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--muted)", margin: "0 0 28px" }}>{post.costs.intro}</p>
          <div style={{ border: "1px solid var(--line)", borderRadius: 12, overflow: "hidden" }}>
            {post.costs.rows.map((row, i) => (
              <div
                key={row.label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  gap: 20,
                  flexWrap: "wrap",
                  padding: "18px 20px",
                  borderTop: i === 0 ? "none" : "1px solid var(--line)",
                }}
              >
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700 }}>{row.label}</div>
                  <div style={{ fontSize: 13, color: "var(--dim)", marginTop: 3 }}>{row.note}</div>
                </div>
                <div style={{ fontSize: 16, fontWeight: 700, whiteSpace: "nowrap" }}>{row.range}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section style={{ borderTop: "1px solid var(--line)", paddingTop: 48, marginBottom: 56 }}>
        <h2 style={h2Style}>Domande frequenti</h2>
        <div style={{ display: "grid", gap: 26 }}>
          {post.faqs.map((faq) => (
            <div key={faq.question}>
              <h3 style={{ fontSize: 17, fontWeight: 700, margin: "0 0 8px" }}>{faq.question}</h3>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--muted)", margin: 0 }}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Autore */}
      <section
        style={{
          display: "flex",
          gap: 20,
          alignItems: "flex-start",
          border: "1px solid var(--line2)",
          borderRadius: 14,
          background: "var(--card)",
          padding: 24,
          marginBottom: 56,
        }}
      >
        <span style={{ position: "relative", width: 64, height: 64, flex: "none", borderRadius: 9999, overflow: "hidden", background: "var(--faint)" }}>
          <Image src="/profile-image.png" alt="Dennis Xhafaj" fill style={{ objectFit: "cover" }} sizes="64px" />
        </span>
        <div>
          <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>Dennis Xhafaj</div>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--muted)", margin: "0 0 10px" }}>
            Sviluppatore full-stack freelance a Crema. Costruisco siti, e-commerce, app e automazioni per PMI e
            professionisti del territorio.
          </p>
          <Link href="/about" style={{ fontSize: 14, textDecoration: "underline", textUnderlineOffset: 3 }}>
            Chi sono →
          </Link>
        </div>
      </section>

      {related.length > 0 && (
        <section style={{ borderTop: "1px solid var(--line)", paddingTop: 48, marginBottom: 56 }}>
          <h2 style={{ ...h2Style, fontSize: 22 }}>Articoli correlati</h2>
          <div style={{ display: "grid", gap: 12 }}>
            {related.map((r) => (
              <Link
                key={r!.slug}
                href={`/blog/${r!.slug}`}
                data-row="1"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 16,
                  border: "1px solid var(--line)",
                  borderRadius: 12,
                  padding: "18px 20px",
                  fontSize: 16,
                  fontWeight: 500,
                }}
              >
                {r!.title}
                <ArrowRight size={16} style={{ flex: "none", color: "var(--dim)" }} />
              </Link>
            ))}
          </div>
        </section>
      )}

      <section
        style={{
          border: "1px solid var(--line2)",
          borderRadius: 16,
          background: "var(--card-hi)",
          padding: 36,
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 12px" }}>
          Hai un progetto simile?
        </h2>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--muted)", margin: "0 auto 24px", maxWidth: 480 }}>
          Descrivilo in un breve brief: ricevi perimetro, tempistiche e un prezzo fisso, di solito entro un giorno
          lavorativo.
        </p>
        <Link
          href="/contact"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            background: "var(--btn-bg)",
            color: "var(--btn-fg)",
            borderRadius: 9999,
            padding: "15px 30px",
            fontSize: 16,
            fontWeight: 700,
          }}
        >
          Invia un brief <ArrowRight size={17} />
        </Link>
      </section>
    </main>
  )
}
