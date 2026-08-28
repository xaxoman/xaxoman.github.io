"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { t } from "@/contexts/language-context"
import ClientOnly from "@/components/client-only"
import Reveal from "@/components/reveal"

const WORDS = [0, 1, 2, 3]

const eyebrow: React.CSSProperties = {
  fontSize: 12,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "var(--dim)",
  fontWeight: 500,
  marginBottom: 18,
}

const h2Style: React.CSSProperties = {
  fontSize: 44,
  lineHeight: 1.08,
  letterSpacing: "-0.02em",
  fontWeight: 700,
  margin: 0,
}

const ghostBtn: React.CSSProperties = {
  background: "transparent",
  color: "var(--fg)",
  border: "1px solid var(--line2)",
  borderRadius: 9999,
  padding: "12px 22px",
  fontSize: 14,
  fontWeight: 500,
  cursor: "pointer",
}

const solidBtn: React.CSSProperties = {
  background: "var(--btn-bg)",
  color: "var(--btn-fg)",
  border: "none",
  borderRadius: 9999,
  padding: "15px 30px",
  fontSize: 15,
  fontWeight: 700,
  cursor: "pointer",
}

function ServiceRow({
  index,
  titleKey,
  descKey,
  bulletKeys,
  badgeKey,
  visual,
  reverse,
}: {
  index: string
  titleKey: string
  descKey: string
  bulletKeys: string[]
  badgeKey?: string
  visual: React.ReactNode
  reverse?: boolean
}) {
  const text = (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
        <div style={{ fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--dim)", fontWeight: 500 }}>
          {index}
        </div>
        {badgeKey && (
          <ClientOnly>
            <span
              style={{
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontWeight: 500,
                color: "var(--tag-p-fg)",
                background: "var(--tag-p-bg)",
                borderRadius: 9999,
                padding: "5px 12px",
              }}
            >
              {t(badgeKey)}
            </span>
          </ClientOnly>
        )}
      </div>
      <ClientOnly>
        <h3 style={{ fontSize: 32, lineHeight: 1.12, letterSpacing: "-0.02em", fontWeight: 700, margin: "0 0 14px" }}>
          {t(titleKey)}
        </h3>
        <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--muted)", margin: "0 0 24px", maxWidth: 440 }}>
          {t(descKey)}
        </p>
        <div style={{ display: "grid", gap: 10, fontSize: 15, color: "var(--soft)" }}>
          {bulletKeys.map((k) => (
            <div key={k}>✓&nbsp;&nbsp;{t(k)}</div>
          ))}
        </div>
      </ClientOnly>
    </div>
  )

  return (
    <Reveal style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px 88px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: reverse ? "1.05fr 1fr" : "1fr 1.05fr",
          gap: 56,
          alignItems: "center",
          borderTop: "1px solid var(--line)",
          paddingTop: 56,
        }}
        className="!grid-cols-1 md:!grid-cols-2"
      >
        {reverse ? (
          <>
            {visual}
            {text}
          </>
        ) : (
          <>
            {text}
            {visual}
          </>
        )}
      </div>
    </Reveal>
  )
}

export default function Home() {
  const [wordIndex, setWordIndex] = useState(0)
  const [wordPhase, setWordPhase] = useState<"in" | "out">("in")

  useEffect(() => {
    const timer = setInterval(() => {
      setWordPhase("out")
      const swap = setTimeout(() => {
        setWordIndex((i) => (i + 1) % WORDS.length)
        setWordPhase("in")
      }, 340)
      return () => clearTimeout(swap)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      {/* Hero */}
      <Reveal style={{ position: "relative", overflow: "hidden", borderBottom: "1px solid var(--line)" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(var(--dots) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            maskImage: "radial-gradient(ellipse 55% 55% at 50% 35%, #000 10%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse 55% 55% at 50% 35%, #000 10%, transparent 75%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", maxWidth: 1120, margin: "0 auto", padding: "96px 24px 96px" }}>
          <ClientOnly>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                border: "1px solid var(--line2)",
                borderRadius: 9999,
                padding: "7px 16px",
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: "0.12em",
                color: "var(--soft)",
                marginBottom: 36,
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: 9999, background: "var(--ok)", display: "block" }} />
              {t("home.badge")}
            </div>
          </ClientOnly>
          <h1 style={{ fontSize: 56, lineHeight: 1.04, letterSpacing: "-0.03em", fontWeight: 700, margin: 0, maxWidth: 900 }}>
            <ClientOnly>{t("home.hero.title")}</ClientOnly>{" "}
            <span style={{ display: "inline-block", minHeight: 60, overflow: "hidden", verticalAlign: "bottom" }}>
              <ClientOnly>
                <span key={wordIndex} data-word={wordPhase} style={{ display: "inline-block" }}>
                  {t(`home.hero.word.${wordIndex}`)}
                </span>
              </ClientOnly>
            </span>
          </h1>
          <ClientOnly>
            <p style={{ fontSize: 19, lineHeight: 1.6, color: "var(--muted)", maxWidth: 620, margin: "28px 0 0" }}>
              {t("home.hero.description")}
            </p>
          </ClientOnly>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 40 }}>
            <ClientOnly>
              <Link href="/contact" style={{ ...solidBtn, minWidth: 250, textAlign: "center" }}>
                {t(`home.hero.cta.${wordIndex}`)}
              </Link>
            </ClientOnly>
            <ClientOnly>
              <Link href="/work" style={{ background: "transparent", color: "var(--fg)", border: "1px solid var(--line2)", borderRadius: 9999, padding: "15px 30px", fontSize: 15, fontWeight: 500 }}>
                {t("home.hero.secondaryCta")}
              </Link>
            </ClientOnly>
          </div>
          <ClientOnly>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 28px", marginTop: 56, fontSize: 13, color: "var(--dim)", letterSpacing: "0.04em" }}>
              {[0, 1, 2, 3].map((i, idx) => (
                <span key={i} style={{ display: "flex", gap: 28 }}>
                  <span>{t(`home.hero.audience.${i}`)}</span>
                  {idx < 3 && <span style={{ color: "var(--rule)" }}>/</span>}
                </span>
              ))}
            </div>
          </ClientOnly>
        </div>
      </Reveal>

      {/* Four things intro */}
      <Reveal style={{ maxWidth: 1120, margin: "0 auto", padding: "96px 24px 8px" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>
          <ClientOnly>
            <div>
              <div style={eyebrow}>{t("home.build.eyebrow")}</div>
              <h2 style={{ ...h2Style, maxWidth: 600 }}>{t("home.build.title")}</h2>
            </div>
          </ClientOnly>
          <ClientOnly>
            <Link href="/services" style={ghostBtn}>
              {t("home.build.allServices")}
            </Link>
          </ClientOnly>
        </div>
      </Reveal>

      {/* 01 Websites */}
      <ServiceRow
        index="01"
        titleKey="service.websites.title"
        descKey="service.websites.description"
        bulletKeys={["service.websites.bullet.0", "service.websites.bullet.1", "service.websites.bullet.2"]}
        visual={
          <div
            data-anim="1"
            style={{ position: "relative", overflow: "hidden", border: "1px solid var(--line2)", borderRadius: 16, background: "var(--card)", boxShadow: "var(--shadow)", height: 290 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 7, padding: "14px 16px", borderBottom: "1px solid var(--line)" }}>
              <span style={{ width: 9, height: 9, borderRadius: 9999, background: "var(--line2)" }} />
              <span style={{ width: 9, height: 9, borderRadius: 9999, background: "var(--line2)" }} />
              <span style={{ width: 9, height: 9, borderRadius: 9999, background: "var(--line2)" }} />
              <span style={{ flex: 1, height: 18, borderRadius: 9999, background: "var(--faint)", marginLeft: 10 }} />
            </div>
            <div style={{ position: "absolute", top: 47, left: 0, height: 2, background: "var(--fg)", animation: "dx-bar 2.8s ease-in-out infinite" }} />
            <div style={{ padding: "22px 20px", display: "grid", gap: 14 }}>
              <div style={{ height: 70, borderRadius: 10, background: "var(--chip)" }} />
              <div style={{ display: "grid", gap: 9 }}>
                <div style={{ height: 9, width: "82%", borderRadius: 9999, background: "var(--chip)", animation: "dx-line 2.4s ease-in-out infinite" }} />
                <div style={{ height: 9, width: "66%", borderRadius: 9999, background: "var(--chip)", animation: "dx-line 2.4s ease-in-out infinite", animationDelay: ".25s" }} />
                <div style={{ height: 9, width: "47%", borderRadius: 9999, background: "var(--chip)", animation: "dx-line 2.4s ease-in-out infinite", animationDelay: ".5s" }} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
                <div style={{ height: 38, borderRadius: 8, border: "1px solid var(--line)" }} />
                <div style={{ height: 38, borderRadius: 8, border: "1px solid var(--line)" }} />
                <div style={{ height: 38, borderRadius: 8, border: "1px solid var(--line)" }} />
              </div>
            </div>
            <div style={{ position: "absolute", left: 0, right: 0, top: 0, height: 56, background: "linear-gradient(180deg, transparent, var(--chip), transparent)", animation: "dx-scan 3.6s linear infinite", pointerEvents: "none" }} />
          </div>
        }
      />

      {/* 02 E-commerce */}
      <ServiceRow
        index="02"
        titleKey="service.ecommerce.title"
        descKey="service.ecommerce.description"
        bulletKeys={["service.ecommerce.bullet.0", "service.ecommerce.bullet.1", "service.ecommerce.bullet.2"]}
        reverse
        visual={
          <div
            data-anim="1"
            style={{ position: "relative", overflow: "hidden", border: "1px solid var(--line2)", borderRadius: 16, background: "var(--card)", boxShadow: "var(--shadow)", height: 290, display: "flex", flexDirection: "column", justifyContent: "center", gap: 26 }}
          >
            <div style={{ overflow: "hidden" }}>
              <div style={{ display: "flex", gap: 14, width: "max-content", animation: "dx-marquee 16s linear infinite" }}>
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} style={{ width: 96, height: 82, borderRadius: 12, background: i % 2 === 0 ? "var(--chip)" : "var(--faint)", border: "1px solid var(--line)" }} />
                ))}
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "0 24px" }}>
              <div style={{ flex: 1, display: "grid", gap: 8 }}>
                <div style={{ height: 9, width: "60%", borderRadius: 9999, background: "var(--chip)" }} />
                <div style={{ height: 9, width: "36%", borderRadius: 9999, background: "var(--chip)" }} />
              </div>
              <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", width: 52, height: 52, borderRadius: 9999, border: "1px solid var(--line2)", background: "var(--faint)", color: "var(--fg)", animation: "dx-bump 4s ease-in-out infinite" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
                  <path d="M3 4h2.2l2.3 10.4h9.9L19.5 7H7"></path>
                  <circle cx="9.5" cy="19" r="1.4"></circle>
                  <circle cx="16.5" cy="19" r="1.4"></circle>
                </svg>
                <span style={{ position: "absolute", top: -4, right: -4, minWidth: 20, height: 20, padding: "0 5px", borderRadius: 9999, background: "var(--ok)", color: "#04240f", fontSize: 11, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  3
                </span>
              </div>
            </div>
          </div>
        }
      />

      {/* 03 Web & mobile apps */}
      <ServiceRow
        index="03"
        titleKey="service.apps.title"
        descKey="service.apps.description"
        bulletKeys={["service.apps.bullet.0", "service.apps.bullet.1", "service.apps.bullet.2"]}
        visual={
          <div data-anim="1" style={{ position: "relative", overflow: "hidden", border: "1px solid var(--line2)", borderRadius: 16, background: "var(--card)", boxShadow: "var(--shadow)", height: 290, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ position: "relative", width: 148, height: 238, border: "1px solid var(--line2)", borderRadius: 26, background: "var(--bg)", overflow: "hidden", boxShadow: "var(--shadow)" }}>
              <div style={{ position: "absolute", top: 9, left: "50%", transform: "translateX(-50%)", width: 44, height: 5, borderRadius: 9999, background: "var(--line2)", zIndex: 2 }} />
              <div style={{ display: "flex", width: "300%", height: "100%", animation: "dx-slide 10.5s ease-in-out infinite" }}>
                <div style={{ width: "33.3333%", padding: "26px 16px 16px", display: "grid", gap: 9, alignContent: "start" }}>
                  <div style={{ height: 9, width: "70%", borderRadius: 9999, background: "var(--chip)" }} />
                  <div style={{ height: 44, borderRadius: 10, background: "var(--chip)" }} />
                  <div style={{ height: 34, borderRadius: 8, border: "1px solid var(--line)" }} />
                  <div style={{ height: 34, borderRadius: 8, border: "1px solid var(--line)" }} />
                  <div style={{ height: 34, borderRadius: 8, border: "1px solid var(--line)" }} />
                </div>
                <div style={{ width: "33.3333%", padding: "26px 16px 16px", display: "flex", alignItems: "flex-end", gap: 8 }}>
                  <div style={{ flex: 1, height: "38%", borderRadius: "6px 6px 0 0", background: "var(--chip)" }} />
                  <div style={{ flex: 1, height: "66%", borderRadius: "6px 6px 0 0", background: "var(--chip)" }} />
                  <div style={{ flex: 1, height: "50%", borderRadius: "6px 6px 0 0", background: "var(--chip)" }} />
                  <div style={{ flex: 1, height: "82%", borderRadius: "6px 6px 0 0", background: "var(--fg)", opacity: 0.75 }} />
                </div>
                <div style={{ width: "33.3333%", padding: "30px 16px 16px", display: "grid", gap: 11, justifyItems: "center", alignContent: "start" }}>
                  <div style={{ width: 52, height: 52, borderRadius: 9999, background: "var(--chip)" }} />
                  <div style={{ height: 9, width: "64%", borderRadius: 9999, background: "var(--chip)" }} />
                  <div style={{ height: 9, width: "44%", borderRadius: 9999, background: "var(--chip)" }} />
                  <div style={{ marginTop: 6, height: 32, width: "100%", borderRadius: 9999, background: "var(--fg)", opacity: 0.85 }} />
                </div>
              </div>
              <span style={{ position: "absolute", bottom: 26, left: "50%", width: 26, height: 26, marginLeft: -13, borderRadius: 9999, border: "2px solid var(--fg)", animation: "dx-tap 3.5s ease-out infinite", pointerEvents: "none" }} />
            </div>
          </div>
        }
      />

      {/* 04 AI automation */}
      <ServiceRow
        index="04"
        titleKey="service.automation.title"
        descKey="service.automation.description"
        bulletKeys={["service.automation.bullet.0", "service.automation.bullet.1", "service.automation.bullet.2"]}
        badgeKey="service.automation.badge"
        reverse
        visual={
          <div
            data-anim="1"
            style={{ position: "relative", overflow: "hidden", border: "1px solid var(--line2)", borderRadius: 16, background: "var(--card-hi)", boxShadow: "var(--shadow)", height: 290, display: "grid", gridTemplateColumns: "auto 1fr auto 1fr auto", alignItems: "center", gap: 14, padding: "26px 24px" }}
          >
            <div style={{ display: "grid", gap: 10, fontSize: 12, color: "var(--soft)" }}>
              <span style={{ border: "1px solid var(--line2)", borderRadius: 8, padding: "8px 11px", background: "var(--bg)" }}>Inbox</span>
              <span style={{ border: "1px solid var(--line2)", borderRadius: 8, padding: "8px 11px", background: "var(--bg)" }}>Orders</span>
              <span style={{ border: "1px solid var(--line2)", borderRadius: 8, padding: "8px 11px", background: "var(--bg)" }}>CRM</span>
            </div>
            <div style={{ display: "grid", gap: 26 }}>
              {[0, 0.55, 1.1].map((d, i) => (
                <div key={i} style={{ position: "relative", height: 2, background: "var(--line2)", borderRadius: 2 }}>
                  <span style={{ position: "absolute", top: -3, width: 8, height: 8, borderRadius: 9999, background: "var(--tag-p-fg)", animation: "dx-travel 2.6s linear infinite", animationDelay: `${d}s` }} />
                </div>
              ))}
            </div>
            <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", width: 62, height: 62 }}>
              <span style={{ position: "absolute", inset: -9, borderRadius: 9999, border: "1px dashed var(--line2)", animation: "dx-orbit 9s linear infinite" }} />
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 62, height: 62, borderRadius: 9999, background: "var(--bg)", border: "1px solid var(--tag-p-fg)", color: "var(--tag-p-fg)", fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", animation: "dx-node 2.6s ease-in-out infinite" }}>
                AI
              </span>
            </div>
            <div style={{ display: "grid", gap: 26 }}>
              {[0.3, 0.9].map((d, i) => (
                <div key={i} style={{ position: "relative", height: 2, background: "var(--line2)", borderRadius: 2 }}>
                  <span style={{ position: "absolute", top: -3, width: 8, height: 8, borderRadius: 9999, background: "var(--ok)", animation: "dx-travel 2.6s linear infinite", animationDelay: `${d}s` }} />
                </div>
              ))}
            </div>
            <div style={{ display: "grid", gap: 10, fontSize: 12, color: "var(--soft)" }}>
              <span style={{ border: "1px solid var(--line2)", borderRadius: 8, padding: "8px 11px", background: "var(--bg)" }}>Reply sent</span>
              <span style={{ border: "1px solid var(--line2)", borderRadius: 8, padding: "8px 11px", background: "var(--bg)" }}>Report</span>
            </div>
          </div>
        }
      />

      {/* AI automation band */}
      <Reveal style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", background: "var(--band)" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "96px 24px" }}>
          <ClientOnly>
            <div style={eyebrow}>{t("automation.eyebrow")}</div>
            <h2 style={{ ...h2Style, maxWidth: 720 }}>{t("automation.title")}</h2>
            <p style={{ fontSize: 18, lineHeight: 1.65, color: "var(--muted)", maxWidth: 660, margin: "24px 0 56px" }}>
              {t("automation.description")}
            </p>
          </ClientOnly>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="!grid-cols-1 md:!grid-cols-2">
            <div data-lift="1" style={{ border: "1px solid var(--line2)", borderRadius: 12, background: "var(--card)", boxShadow: "var(--shadow)", padding: 32 }}>
              <div data-anim="1" style={{ display: "flex", alignItems: "center", gap: 16, height: 112, marginBottom: 26, padding: "14px 16px", border: "1px solid var(--line)", borderRadius: 10, background: "var(--bg)", overflow: "hidden" }}>
                <div style={{ width: 112, height: "100%", overflow: "hidden", position: "relative" }}>
                  <div style={{ display: "grid", gap: 10, animation: "dx-queue 8s cubic-bezier(.65,0,.35,1) infinite" }}>
                    {["New order", "Invoice PDF", "Support email", "CRM record", "New order"].map((label, i) => (
                      <span key={i} style={{ fontSize: 11, color: "var(--soft)", border: "1px solid var(--line)", borderRadius: 6, padding: "6px 9px", background: "var(--faint)" }}>
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
                <div style={{ flex: 1, display: "grid", gap: 7 }}>
                  <div style={{ height: 2, background: "var(--line2)", borderRadius: 2, position: "relative" }}>
                    <span style={{ position: "absolute", top: -3, width: 8, height: 8, borderRadius: 9999, background: "var(--tag-p-fg)", animation: "dx-travel 2s linear infinite" }} />
                  </div>
                  <div style={{ height: 2, background: "var(--line2)", borderRadius: 2, position: "relative" }}>
                    <span style={{ position: "absolute", top: -3, width: 8, height: 8, borderRadius: 9999, background: "var(--tag-p-fg)", animation: "dx-travel 2s linear infinite", animationDelay: ".4s" }} />
                  </div>
                  <div style={{ height: 2, background: "var(--line2)", borderRadius: 2, position: "relative" }}>
                    <span style={{ position: "absolute", top: -3, width: 8, height: 8, borderRadius: 9999, background: "var(--ok)", animation: "dx-travel 2s linear infinite", animationDelay: ".8s" }} />
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 46, height: 46, flex: "none", borderRadius: 9999, border: "1px solid var(--tag-p-fg)", color: "var(--tag-p-fg)", fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", animation: "dx-pulse-ring 2s ease-out infinite" }}>
                  AI
                </div>
                <div style={{ flex: 1, display: "grid", gap: 9 }}>
                  <div style={{ height: 2, background: "var(--line2)", borderRadius: 2, position: "relative" }}>
                    <span style={{ position: "absolute", top: -3, width: 8, height: 8, borderRadius: 9999, background: "var(--ok)", animation: "dx-travel 2s linear infinite", animationDelay: "1s" }} />
                  </div>
                  <div style={{ height: 2, background: "var(--line2)", borderRadius: 2, position: "relative" }}>
                    <span style={{ position: "absolute", top: -3, width: 8, height: 8, borderRadius: 9999, background: "var(--ok)", animation: "dx-travel 2s linear infinite", animationDelay: "1.4s" }} />
                  </div>
                </div>
                <span style={{ fontSize: 11, color: "var(--soft)", border: "1px solid var(--line)", borderRadius: 6, padding: "6px 9px", background: "var(--faint)", flex: "none" }}>Done</span>
              </div>
              <ClientOnly>
                <h3 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>{t("automation.card.agentic.title")}</h3>
                <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--soft)", margin: 0 }}>{t("automation.card.agentic.description")}</p>
              </ClientOnly>
            </div>

            <div data-lift="1" style={{ border: "1px solid var(--line2)", borderRadius: 12, background: "var(--card)", boxShadow: "var(--shadow)", padding: 32 }}>
              <div data-anim="1" style={{ display: "flex", alignItems: "center", gap: 18, height: 112, marginBottom: 26, padding: "14px 16px", border: "1px solid var(--line)", borderRadius: 10, background: "var(--bg)", overflow: "hidden" }}>
                <div style={{ flex: "none", display: "grid", gap: 7, width: 96 }}>
                  <span style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--dim)" }}>Prompt</span>
                  <div style={{ height: 7, borderRadius: 9999, background: "var(--chip)", overflow: "hidden" }}>
                    <div style={{ height: "100%", background: "var(--tag-p-fg)", animation: "dx-fill 3s ease-in-out infinite" }} />
                  </div>
                  <div style={{ height: 7, width: "70%", borderRadius: 9999, background: "var(--chip)", overflow: "hidden" }}>
                    <div style={{ height: "100%", background: "var(--tag-p-fg)", animation: "dx-fill 3s ease-in-out infinite", animationDelay: ".2s" }} />
                  </div>
                </div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" style={{ color: "var(--dim)", flex: "none" }} aria-hidden="true">
                  <path d="M5 12h13"></path>
                  <path d="m13 7 5 5-5 5"></path>
                </svg>
                <div style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8 }}>
                  {[0, 0.25, 0.5, 0.75].map((d, i) => (
                    <div key={i} style={{ height: 70, borderRadius: 8, border: "1px solid var(--line)", background: "var(--faint)", display: "grid", gap: 5, padding: 8, alignContent: "start", animation: "dx-pop 3s ease-out infinite", animationDelay: `${d}s` }}>
                      <span style={{ height: 5, borderRadius: 9999, background: "var(--chip)" }} />
                      <span style={{ height: 5, width: "65%", borderRadius: 9999, background: "var(--chip)" }} />
                      <span style={{ height: 5, width: "50%", borderRadius: 9999, background: "var(--chip)" }} />
                    </div>
                  ))}
                </div>
              </div>
              <ClientOnly>
                <h3 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>{t("automation.card.generative.title")}</h3>
                <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--soft)", margin: 0 }}>{t("automation.card.generative.description")}</p>
              </ClientOnly>
            </div>
          </div>
          <ClientOnly>
            <div style={{ marginTop: 48, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 14 }}>
              <span style={{ fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--dim)", fontWeight: 500, marginRight: 8 }}>
                {t("automation.startsWith")}
              </span>
              {[0, 1, 2, 3, 4].map((i) => (
                <span key={i} data-chip="1" style={{ fontSize: 14, color: "var(--soft)", border: "1px solid var(--line2)", borderRadius: 9999, padding: "8px 16px" }}>
                  {t(`automation.chip.${i}`)}
                </span>
              ))}
            </div>
          </ClientOnly>
        </div>
      </Reveal>

      {/* Selected work */}
      <Reveal style={{ maxWidth: 1120, margin: "0 auto", padding: "96px 24px" }}>
        <ClientOnly>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 32, flexWrap: "wrap", marginBottom: 48 }}>
            <div>
              <div style={eyebrow}>{t("home.work.eyebrow")}</div>
              <h2 style={h2Style}>{t("home.work.title")}</h2>
            </div>
            <Link href="/work" style={ghostBtn}>
              {t("home.work.allWork")}
            </Link>
          </div>
        </ClientOnly>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} className="!grid-cols-1 md:!grid-cols-3">
          {[
            { img: "/about-projects/project_emerson.png", tagKey: "tag.freelance", titleKey: "project.emerson.title", descKey: "project.emerson.description" },
            { img: "/about-projects/contabite.webp", tagKey: "tag.mobileApp", titleKey: "project.contabite.title", descKey: "project.contabite.description" },
            { img: "/about-projects/pizzeria-king.png", tagKey: "tag.freelance", titleKey: "project.pizzeriaKing.title", descKey: "project.pizzeriaKing.description" },
          ].map((p) => (
            <div key={p.titleKey} data-lift="1" style={{ border: "1px solid var(--line2)", borderRadius: 12, background: "var(--card)", boxShadow: "var(--shadow)", padding: 20 }}>
              <div style={{ borderRadius: 12, overflow: "hidden", aspectRatio: "4/3", marginBottom: 20, background: "var(--faint)", position: "relative" }}>
                <Image src={p.img} alt={p.titleKey} fill style={{ objectFit: "cover" }} />
              </div>
              <ClientOnly>
                <span style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 500, color: p.tagKey === "tag.freelance" ? "var(--tag-g-fg)" : "var(--tag-b-fg)", background: p.tagKey === "tag.freelance" ? "var(--tag-g-bg)" : "var(--tag-b-bg)", borderRadius: 9999, padding: "5px 12px" }}>
                  {t(p.tagKey)}
                </span>
                <h3 style={{ fontSize: 18, fontWeight: 700, margin: "16px 0 8px" }}>{t(p.titleKey)}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--muted)", margin: 0 }}>{t(p.descKey)}</p>
              </ClientOnly>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Four steps */}
      <Reveal style={{ borderTop: "1px solid var(--line)" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "96px 24px" }}>
          <ClientOnly>
            <div style={eyebrow}>{t("steps.eyebrow")}</div>
            <h2 style={{ ...h2Style, marginBottom: 56, maxWidth: 640 }}>{t("steps.title")}</h2>
          </ClientOnly>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }} className="!grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-4">
            {[
              { color: "var(--s1)" },
              { color: "var(--s2)" },
              { color: "var(--s3)" },
              { color: "var(--s4)" },
            ].map((s, i) => (
              <div key={i} data-step={String(i + 1)}>
                <div style={{ display: "flex", alignItems: "center", marginBottom: 22 }}>
                  <span style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", width: 34, height: 34, flex: "none" }}>
                    <span data-step-ring="1" style={{ position: "absolute", inset: 0, borderRadius: 9999, border: `1.5px solid ${s.color}`, opacity: 0 }} />
                    <span data-step-dot="1" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 34, height: 34, borderRadius: 9999, border: `1.5px solid ${s.color}`, background: "var(--bg)", color: s.color }}>
                      {i === 0 && (
                        <svg data-icon="fly" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M21 3 10.5 13.5"></path>
                          <path d="M21 3 14.5 21l-4-7.5L3 9.5z"></path>
                        </svg>
                      )}
                      {i === 1 && (
                        <svg data-icon="reply" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M9 14 4 9l5-5"></path>
                          <path d="M4 9h9a7 7 0 0 1 7 7v4"></path>
                        </svg>
                      )}
                      {i === 2 && (
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect x="2.5" y="4" width="19" height="16" rx="2.5"></rect>
                          <path d="m6.5 10 2.5 2.5-2.5 2.5"></path>
                          <path data-icon="caret" d="M12 15h5"></path>
                        </svg>
                      )}
                      {i === 3 && (
                        <svg data-icon="key" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="8" cy="8" r="4.5"></circle>
                          <path d="m11.5 11.5 8 8"></path>
                          <path d="m16.5 16.5 2-2"></path>
                        </svg>
                      )}
                    </span>
                  </span>
                  <span data-step-rail="1" style={{ flex: 1, height: 3, borderRadius: 2, background: "var(--line)", marginLeft: 12, overflow: "hidden" }}>
                    <span style={{ background: s.color }} />
                  </span>
                </div>
                <ClientOnly>
                  <div style={{ fontSize: 12, letterSpacing: "0.16em", color: "var(--dim)", fontWeight: 500, marginBottom: 8 }}>{t(`step.${i}.label`)}</div>
                  <h3 style={{ fontSize: 19, fontWeight: 700, margin: "0 0 10px" }}>{t(`step.${i}.title`)}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--muted)", margin: 0, maxWidth: 230 }}>{t(`step.${i}.description`)}</p>
                </ClientOnly>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Proof slot */}
      <Reveal style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ border: "1px dashed var(--line2)", borderRadius: 12, padding: 40, display: "flex", gap: 32, flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
          <ClientOnly>
            <div style={{ maxWidth: 560 }}>
              <div style={{ fontFamily: "ui-monospace,'SF Mono',Menlo,Consolas,monospace", fontSize: 12, letterSpacing: "0.1em", color: "var(--dim)", marginBottom: 12 }}>
                {t("proof.label")}
              </div>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--muted)", margin: 0 }}>{t("proof.text")}</p>
            </div>
          </ClientOnly>
          <div style={{ display: "flex", gap: 16 }}>
            <div style={{ width: 150, height: 96, border: "1px solid var(--line)", borderRadius: 12, background: "repeating-linear-gradient(135deg, var(--faint) 0 6px, transparent 6px 12px)" }} />
            <div style={{ width: 150, height: 96, border: "1px solid var(--line)", borderRadius: 12, background: "repeating-linear-gradient(135deg, var(--faint) 0 6px, transparent 6px 12px)" }} />
          </div>
        </div>
      </Reveal>

      {/* FAQ */}
      <Reveal style={{ borderTop: "1px solid var(--line)" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "96px 24px" }}>
          <ClientOnly>
            <div style={eyebrow}>{t("faq.eyebrow")}</div>
            <h2 style={{ ...h2Style, marginBottom: 48 }}>{t("faq.title")}</h2>
          </ClientOnly>
          <ClientOnly>
            <div style={{ borderTop: "1px solid var(--line)" }}>
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <details key={i} data-faq="1" open={i === 0}>
                  <summary>
                    {t(`faq.${i}.q`)}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" aria-hidden="true">
                      <path d="M12 5v14"></path>
                      <path d="M5 12h14"></path>
                    </svg>
                  </summary>
                  <div style={{ padding: "0 40px 26px 4px" }}>
                    <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--muted)", margin: 0 }}>{t(`faq.${i}.a`)}</p>
                  </div>
                </details>
              ))}
            </div>
          </ClientOnly>
        </div>
      </Reveal>

      {/* Final CTA */}
      <Reveal style={{ borderTop: "1px solid var(--line)" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "104px 24px" }}>
          <div data-cta="1" style={{ border: "1px solid var(--line2)", borderRadius: 12, background: "var(--card-hi)", boxShadow: "var(--shadow)", padding: "56px 40px" }}>
            <span data-cta-dots="1" />
            <span data-cta-glow="1" />
            <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }} className="!grid-cols-1 lg:!grid-cols-2">
              <ClientOnly>
                <div>
                  <h2 style={{ ...h2Style, maxWidth: 440 }}>{t("homeCta.title")}</h2>
                  <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--muted)", maxWidth: 440, margin: "20px 0 32px" }}>{t("homeCta.description")}</p>
                  <Link data-cta-btn="1" href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--btn-bg)", color: "var(--btn-fg)", borderRadius: 9999, padding: "16px 34px", fontSize: 16, fontWeight: 700 }}>
                    {t("nav.cta")}
                    <span data-cta-arrow="1">→</span>
                  </Link>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 22px", marginTop: 26, fontSize: 13, color: "var(--dim)" }}>
                    <span>{t("homeCta.badge.0")}</span>
                    <span style={{ color: "var(--rule)" }}>/</span>
                    <span>{t("homeCta.badge.1")}</span>
                    <span style={{ color: "var(--rule)" }}>/</span>
                    <span>{t("homeCta.badge.2")}</span>
                  </div>
                </div>
              </ClientOnly>
              <ClientOnly>
                <Link href="/contact" data-anim="1" style={{ border: "1px solid var(--line2)", borderRadius: 14, background: "var(--bg)", boxShadow: "var(--shadow)", padding: 24, display: "grid", gap: 18, cursor: "pointer" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
                    <span style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--dim)", fontWeight: 500 }}>{t("homeCta.preview.label")}</span>
                    <span style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--dim)" }}>{t("homeCta.preview.step")}</span>
                  </div>
                  <div style={{ display: "grid", gap: 8 }}>
                    <span style={{ fontSize: 12, color: "var(--dim)" }}>{t("homeCta.preview.nameLabel")}</span>
                    <div style={{ border: "1px solid var(--line)", borderRadius: 9, padding: "11px 13px", background: "var(--faint)", overflow: "hidden" }}>
                      <span style={{ display: "block", fontSize: 14, color: "var(--soft)", whiteSpace: "nowrap", overflow: "hidden", animation: "dx-type 7s steps(24, end) infinite" }}>
                        {t("homeCta.preview.name")}
                      </span>
                    </div>
                  </div>
                  <div style={{ display: "grid", gap: 8 }}>
                    <span style={{ fontSize: 12, color: "var(--dim)" }}>{t("homeCta.preview.needLabel")}</span>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      <span style={{ fontSize: 12, color: "var(--soft)", border: "1px solid var(--line)", borderRadius: 9999, padding: "6px 12px", background: "var(--faint)" }}>{t("homeCta.preview.need.0")}</span>
                      <span style={{ fontSize: 12, color: "var(--soft)", border: "1px solid var(--line)", borderRadius: 9999, padding: "6px 12px", background: "var(--faint)" }}>{t("homeCta.preview.need.1")}</span>
                      <span style={{ fontSize: 12, color: "var(--btn-fg)", border: "1px solid var(--fg)", borderRadius: 9999, padding: "6px 12px", background: "var(--fg)", animation: "dx-pop 7s ease-out infinite" }}>{t("homeCta.preview.need.2")}</span>
                    </div>
                  </div>
                  <div style={{ display: "grid", gap: 8 }}>
                    <span style={{ fontSize: 12, color: "var(--dim)" }}>{t("homeCta.preview.problemLabel")}</span>
                    <div style={{ border: "1px solid var(--line)", borderRadius: 9, padding: "11px 13px", background: "var(--faint)", minHeight: 78 }}>
                      <span style={{ display: "block", fontSize: 14, lineHeight: 1.55, color: "var(--soft)", whiteSpace: "nowrap", overflow: "hidden", animation: "dx-type 7s steps(38, end) infinite", animationDelay: ".8s" }}>
                        {t("homeCta.preview.problem")}
                      </span>
                      <span style={{ display: "inline-block", width: 1.5, height: 15, verticalAlign: -2, background: "var(--fg)", animation: "dx-caret 1s step-end infinite" }} />
                    </div>
                  </div>
                </Link>
              </ClientOnly>
            </div>
          </div>
        </div>
      </Reveal>
    </>
  )
}
