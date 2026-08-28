"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import LanguageSwitcher from "./language-switcher"
import ThemeToggle from "./theme-toggle"
import { t } from "@/contexts/language-context"
import ClientOnly from "@/components/client-only"

const NAV = [
  { key: "nav.home", href: "/" },
  { key: "nav.services", href: "/services" },
  { key: "nav.work", href: "/work" },
  { key: "nav.about", href: "/about" },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "var(--header-bg)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "0 24px",
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <Link href="/" style={{ fontSize: 15, fontWeight: 700, letterSpacing: "0.06em", color: "var(--fg)" }}>
          DENNIS XHAFAJ
        </Link>

        <nav className="hidden md:flex" style={{ alignItems: "center", gap: 28 }}>
          {NAV.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 5,
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  color: active ? "var(--fg)" : "var(--muted)",
                }}
              >
                <ClientOnly>{t(item.key)}</ClientOnly>
                <span
                  style={{
                    display: "block",
                    width: "100%",
                    height: 1,
                    background: "var(--fg)",
                    opacity: active ? 1 : 0,
                  }}
                />
              </Link>
            )
          })}
          <Link
            href="/contact"
            style={{
              background: "var(--btn-bg)",
              color: "var(--btn-fg)",
              borderRadius: 9999,
              padding: "11px 20px",
              fontSize: 13,
              fontWeight: 700,
            }}
          >
            <ClientOnly>{t("nav.cta")}</ClientOnly>
          </Link>
          <LanguageSwitcher />
          <ThemeToggle />
        </nav>

        <div className="flex md:hidden" style={{ alignItems: "center", gap: 12 }}>
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            style={{ background: "none", border: "none", color: "var(--fg)", cursor: "pointer", padding: 4 }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="md:hidden"
          style={{
            borderTop: "1px solid var(--line)",
            background: "var(--bg)",
            padding: "20px 24px 28px",
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontSize: 15,
                fontWeight: 500,
                color: pathname === item.href ? "var(--fg)" : "var(--muted)",
              }}
            >
              <ClientOnly>{t(item.key)}</ClientOnly>
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            style={{
              background: "var(--btn-bg)",
              color: "var(--btn-fg)",
              borderRadius: 9999,
              padding: "13px 20px",
              fontSize: 14,
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            <ClientOnly>{t("nav.cta")}</ClientOnly>
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 4 }}>
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  )
}
