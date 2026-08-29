"use client"

import type React from "react"
import Image from "next/image"
import { Github, Linkedin, Mail } from "lucide-react"
import { t } from "@/contexts/language-context"
import ClientOnly from "@/components/client-only"
import Reveal from "@/components/reveal"
import { STACK } from "./stack"

const socialPill: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 10,
  border: "1px solid var(--line2)",
  borderRadius: 9999,
  padding: "12px 22px",
  fontSize: 14,
  fontWeight: 500,
}

const infoRow: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  gap: 16,
  borderBottom: "1px solid var(--line)",
  paddingBottom: 12,
}

export default function About() {
  return (
    <>
      <Reveal style={{ maxWidth: 1120, margin: "0 auto", padding: "96px 24px 88px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 64, alignItems: "start" }} className="!grid-cols-1 md:!grid-cols-[1fr_380px]">
          <ClientOnly>
            <div>
              <div style={{ fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--dim)", fontWeight: 500, marginBottom: 18 }}>
                {t("about.eyebrow")}
              </div>
              <h1 style={{ fontSize: 52, lineHeight: 1.06, letterSpacing: "-0.03em", fontWeight: 700, margin: "0 0 28px" }}>
                {t("about.title")}
              </h1>
              <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--muted)", margin: "0 0 20px" }}>{t("about.p0")}</p>
              <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--muted)", margin: "0 0 20px" }}>{t("about.p1")}</p>
              <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--muted)", margin: 0 }}>{t("about.p2")}</p>
              <div style={{ display: "flex", gap: 14, marginTop: 36, flexWrap: "wrap" }}>
                <a href="https://github.com/xaxoman" target="_blank" rel="noopener" style={socialPill}>
                  <Github size={16} /> GitHub
                </a>
                <a href="https://linkedin.com/in/dennis-xhafaj-b48a2528a" target="_blank" rel="noopener" style={socialPill}>
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a href="mailto:xhafaj.dennis@protonmail.com" style={socialPill}>
                  <Mail size={16} /> Email
                </a>
              </div>
            </div>
          </ClientOnly>
          <div>
            <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid var(--line2)", aspectRatio: "4/5", background: "var(--faint)", position: "relative" }}>
              <Image src="/profile-image.png" alt="Dennis Xhafaj" fill style={{ objectFit: "cover" }} />
            </div>
            <ClientOnly>
              <div style={{ marginTop: 24, display: "grid", gap: 14, fontSize: 14, color: "var(--muted)" }}>
                <div style={infoRow}>
                  <span style={{ color: "var(--dim)" }}>{t("about.info.basedIn.label")}</span>
                  <span style={{ color: "var(--fg)" }}>{t("about.info.basedIn.value")}</span>
                </div>
                <div style={infoRow}>
                  <span style={{ color: "var(--dim)" }}>{t("about.info.works.label")}</span>
                  <span style={{ color: "var(--fg)" }}>{t("about.info.works.value")}</span>
                </div>
                <div style={infoRow}>
                  <span style={{ color: "var(--dim)" }}>{t("about.info.languages.label")}</span>
                  <span style={{ color: "var(--fg)" }}>{t("about.info.languages.value")}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 16 }}>
                  <span style={{ color: "var(--dim)" }}>{t("about.info.status.label")}</span>
                  <span style={{ color: "var(--ok)" }}>{t("about.info.status.value")}</span>
                </div>
              </div>
            </ClientOnly>
          </div>
        </div>
      </Reveal>

      <Reveal style={{ borderTop: "1px solid var(--line)" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "88px 24px" }}>
          <ClientOnly>
            <div style={{ fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--dim)", fontWeight: 500, marginBottom: 18 }}>
              {t("rules.eyebrow")}
            </div>
            <h2 style={{ fontSize: 40, lineHeight: 1.08, letterSpacing: "-0.02em", fontWeight: 700, margin: "0 0 48px", maxWidth: 620 }}>
              {t("rules.title")}
            </h2>
          </ClientOnly>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }} className="!grid-cols-1 md:!grid-cols-2">
            {[0, 1, 2, 3].map((i) => (
              <ClientOnly key={i}>
                <div data-lift="1" style={{ border: "1px solid var(--line2)", borderRadius: 12, background: "var(--card)", boxShadow: "var(--shadow)", padding: 28 }}>
                  <h3 style={{ fontSize: 19, fontWeight: 700, margin: "0 0 10px" }}>{t(`rule.${i}.title`)}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--muted)", margin: 0 }}>{t(`rule.${i}.description`)}</p>
                </div>
              </ClientOnly>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal style={{ borderTop: "1px solid var(--line)" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "88px 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 56, alignItems: "start" }} className="!grid-cols-1 md:!grid-cols-[1fr_1.4fr]">
            <ClientOnly>
              <div>
                <div style={{ fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--dim)", fontWeight: 500, marginBottom: 18 }}>
                  {t("stack.eyebrow")}
                </div>
                <h2 style={{ fontSize: 36, lineHeight: 1.1, letterSpacing: "-0.02em", fontWeight: 700, margin: 0 }}>{t("stack.title")}</h2>
              </div>
            </ClientOnly>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignContent: "start" }}>
              {STACK.map((tool) => (
                <span
                  key={tool.name}
                  data-tool="1"
                  style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 14, fontWeight: 500, padding: "8px 18px 8px 14px", background: tool.bg, border: `1px solid ${tool.border}`, borderRadius: 9999, color: "var(--fg)" }}
                >
                  <svg viewBox="0 0 24 24" width={18} height={18} fill={tool.color} style={{ flexShrink: 0 }} aria-hidden="true">
                    <path d={tool.path} />
                  </svg>
                  {tool.name}
                </span>
              ))}
            </div>
          </div>
          <ClientOnly>
            <div style={{ marginTop: 64, display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", justifyContent: "space-between", borderTop: "1px solid var(--line)", paddingTop: 40 }}>
              <p style={{ fontSize: 18, color: "var(--soft)", margin: 0 }}>{t("stack.footer.text")}</p>
              <a
                href="/contact"
                style={{ background: "var(--btn-bg)", color: "var(--btn-fg)", borderRadius: 9999, padding: "15px 30px", fontSize: 15, fontWeight: 700 }}
              >
                {t("nav.cta")}
              </a>
            </div>
          </ClientOnly>
        </div>
      </Reveal>
    </>
  )
}
