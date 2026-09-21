import type { Metadata } from "next"
import type React from "react"
import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import { BLOG_POSTS } from "@/lib/blog-data"
import JsonLd from "@/components/json-ld"
import BlogCover from "@/components/blog-cover"

const BASE = "https://albaniancoder.vercel.app"

export const metadata: Metadata = {
  title: "Blog: Guide su Siti Web, E-commerce e SEO per PMI",
  description:
    "Guide pratiche su siti web, e-commerce, gestionali su misura e SEO locale, scritte per PMI e professionisti. Costi reali, tempi e cosa funziona davvero.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog: Guide su Siti Web, E-commerce e SEO per PMI",
    description:
      "Guide pratiche su siti web, e-commerce, gestionali su misura e SEO locale, scritte per PMI e professionisti.",
    url: "/blog",
    type: "website",
  },
}

const eyebrow: React.CSSProperties = {
  fontSize: 12,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "var(--dim)",
  fontWeight: 500,
  marginBottom: 18,
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("it-IT", { day: "numeric", month: "long", year: "numeric" })
}

export default function BlogIndexPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` },
    ],
  }

  return (
    <main style={{ maxWidth: 1120, margin: "0 auto", padding: "88px 24px 104px" }}>
      <JsonLd data={breadcrumb} />

      <div style={{ maxWidth: 760, marginBottom: 64 }}>
        <div style={eyebrow}>GUIDE E APPROFONDIMENTI</div>
        <h1
          style={{
            fontSize: "clamp(36px, 5.5vw, 52px)",
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            fontWeight: 700,
            margin: "0 0 24px",
          }}
        >
          Quello che di solito spiego al telefono, scritto una volta sola.
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--muted)", margin: 0 }}>
          Guide su siti web, e-commerce, gestionali e posizionamento, pensate per chi deve decidere e non fa questo di
          mestiere. Niente gergo, prezzi indicati dove servono.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }} className="!grid-cols-1 md:!grid-cols-2">
        {BLOG_POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            data-lift="1"
            style={{
              display: "flex",
              flexDirection: "column",
              border: "1px solid var(--line2)",
              borderRadius: 14,
              background: "var(--card)",
              boxShadow: "var(--shadow)",
              padding: 28,
              textDecoration: "none",
              color: "var(--fg)",
            }}
          >
            <div style={{ marginBottom: 20 }}>
              <BlogCover category={post.category} slug={post.slug} />
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, fontSize: 12 }}>
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
                <Clock size={13} /> {post.readTime}
              </span>
            </div>

            <h2 style={{ fontSize: 21, lineHeight: 1.25, fontWeight: 700, letterSpacing: "-0.015em", margin: "0 0 12px" }}>
              {post.title}
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--muted)", margin: 0, flex: 1 }}>{post.excerpt}</p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
                marginTop: 24,
                paddingTop: 20,
                borderTop: "1px solid var(--line)",
                fontSize: 13,
                color: "var(--dim)",
              }}
            >
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--fg)", fontWeight: 500 }}>
                Leggi <ArrowRight size={15} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
