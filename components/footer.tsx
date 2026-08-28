"use client"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { t } from "@/contexts/language-context"
import ClientOnly from "@/components/client-only"

const PAGES = [
  { key: "nav.home", href: "/" },
  { key: "nav.services", href: "/services" },
  { key: "nav.work", href: "/work" },
  { key: "nav.about", href: "/about" },
  { key: "nav.contact", href: "/contact" },
]

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--line)" }}>
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "64px 24px 40px",
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr 1fr",
          gap: 40,
        }}
        className="!grid-cols-1 md:!grid-cols-3"
      >
        <div>
          <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: "0.06em", marginBottom: 14 }}>DENNIS XHAFAJ</div>
          <ClientOnly>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--muted)", margin: 0, maxWidth: 300 }}>
              {t("footer.tagline")}
            </p>
          </ClientOnly>
        </div>

        <div>
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
            <ClientOnly>{t("footer.pages")}</ClientOnly>
          </div>
          <div style={{ display: "grid", gap: 11, justifyItems: "start", fontSize: 15 }}>
            {PAGES.map((p) => (
              <Link key={p.href} href={p.href} style={{ color: "var(--muted)", fontSize: 15 }}>
                <ClientOnly>{t(p.key)}</ClientOnly>
              </Link>
            ))}
          </div>
        </div>

        <div>
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
            <ClientOnly>{t("footer.elsewhere")}</ClientOnly>
          </div>
          <div style={{ display: "grid", gap: 13, justifyItems: "start", fontSize: 15 }}>
            <a
              href="https://github.com/xaxoman"
              target="_blank"
              rel="noopener"
              style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "var(--muted)" }}
            >
              <Github size={15} /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/dennis-xhafaj-b48a2528a"
              target="_blank"
              rel="noopener"
              style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "var(--muted)" }}
            >
              <Linkedin size={15} /> LinkedIn
            </a>
            <a
              href="mailto:xhafaj.dennis@protonmail.com"
              style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "var(--muted)" }}
            >
              <Mail size={15} /> Email
            </a>
          </div>
        </div>
      </div>
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "24px 24px 40px",
          borderTop: "1px solid var(--line)",
          display: "flex",
          justifyContent: "space-between",
          gap: 20,
          flexWrap: "wrap",
          fontSize: 13,
          color: "var(--dim)",
        }}
      >
        <ClientOnly>
          <span>{t("footer.copyright").replace("{year}", new Date().getFullYear().toString())}</span>
        </ClientOnly>
        <ClientOnly>
          <span>{t("footer.location")}</span>
        </ClientOnly>
      </div>
    </footer>
  )
}
