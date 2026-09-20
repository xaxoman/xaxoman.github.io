"use client"

import type React from "react"
import Link from "next/link"
import Reveal from "@/components/reveal"
import { useLanguage } from "@/contexts/language-context"
import { POLICY } from "./content"

const cardStyle: React.CSSProperties = {
  border: "1px solid var(--line2)",
  borderRadius: 12,
  background: "var(--card)",
  boxShadow: "var(--shadow)",
  padding: 28,
}

const proseStyle: React.CSSProperties = {
  fontSize: 16,
  lineHeight: 1.75,
  color: "var(--muted)",
  margin: "0 0 16px",
}

/**
 * The policy renders from the language context rather than from the shared
 * `t()` dictionary, so the server output is the full English document — a Play
 * Store reviewer, or a crawler, reads real text instead of an empty shell.
 */
export default function Policy() {
  const { language } = useLanguage()
  const c = POLICY[language] ?? POLICY.en

  return (
    <>
      <Reveal style={{ maxWidth: 820, margin: "0 auto", padding: "96px 24px 40px" }}>
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
          {c.eyebrow}
        </div>
        <h1 style={{ fontSize: 52, lineHeight: 1.06, letterSpacing: "-0.03em", fontWeight: 700, margin: 0 }}>
          {c.title}
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.65, color: "var(--muted)", margin: "24px 0 0" }}>{c.subtitle}</p>
        <p
          style={{
            fontFamily: "ui-monospace,'SF Mono',Menlo,Consolas,monospace",
            fontSize: 12,
            letterSpacing: "0.04em",
            color: "var(--dim)",
            margin: "22px 0 0",
          }}
        >
          {c.updated}
        </p>
      </Reveal>

      <Reveal style={{ maxWidth: 820, margin: "0 auto", padding: "0 24px 40px" }}>
        <div style={cardStyle}>
          <h2 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 16px" }}>{c.glanceTitle}</h2>
          <ul style={{ margin: 0, paddingLeft: 22, listStyleType: "disc", display: "grid", gap: 12 }}>
            {c.glance.map((item) => (
              <li key={item} style={{ fontSize: 16, lineHeight: 1.7, color: "var(--soft)", display: "list-item" }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal style={{ maxWidth: 820, margin: "0 auto", padding: "0 24px 24px" }}>
        {c.sections.map((s) => (
          <section key={s.h} style={{ borderTop: "1px solid var(--line)", padding: "34px 0 6px" }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.01em", margin: "0 0 16px" }}>{s.h}</h2>
            {s.p.map((paragraph) => (
              <p key={paragraph} style={proseStyle}>
                {paragraph}
              </p>
            ))}
            {s.list && (
              <ul style={{ margin: "0 0 16px", paddingLeft: 22, listStyleType: "disc", display: "grid", gap: 10 }}>
                {s.list.map((item) => (
                  <li key={item} style={{ fontSize: 16, lineHeight: 1.7, color: "var(--muted)", display: "list-item" }}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </Reveal>

      <Reveal style={{ maxWidth: 820, margin: "0 auto", padding: "0 24px 40px" }}>
        <section style={{ borderTop: "1px solid var(--line)", padding: "34px 0 0" }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.01em", margin: "0 0 16px" }}>{c.permTitle}</h2>
          <p style={proseStyle}>{c.permIntro}</p>
          <div style={{ overflowX: "auto", border: "1px solid var(--line2)", borderRadius: 12 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 620, fontSize: 15 }}>
              <thead>
                <tr>
                  {c.permHead.map((head) => (
                    <th
                      key={head}
                      style={{
                        textAlign: "left",
                        padding: "14px 16px",
                        fontSize: 11,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--dim)",
                        fontWeight: 500,
                        borderBottom: "1px solid var(--line2)",
                        background: "var(--faint)",
                      }}
                    >
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.perms.map((row) => (
                  <tr key={row[0]}>
                    <td style={{ padding: "14px 16px", borderTop: "1px solid var(--line)", color: "var(--fg)", fontWeight: 500, verticalAlign: "top" }}>
                      {row[0]}
                    </td>
                    <td style={{ padding: "14px 16px", borderTop: "1px solid var(--line)", color: "var(--muted)", lineHeight: 1.6, verticalAlign: "top" }}>
                      {row[1]}
                    </td>
                    <td style={{ padding: "14px 16px", borderTop: "1px solid var(--line)", color: "var(--soft)", verticalAlign: "top" }}>
                      {row[2]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </Reveal>

      <Reveal style={{ maxWidth: 820, margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={cardStyle}>
          <h2 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px" }}>{c.contactTitle}</h2>
          <p style={{ ...proseStyle, margin: "0 0 18px" }}>{c.contactBody}</p>
          <a href={`mailto:${c.contactEmail}`} style={{ fontSize: 16, fontWeight: 500 }}>
            {c.contactEmail}
          </a>
        </div>
        <div style={{ marginTop: 32 }}>
          <Link href="/work" style={{ fontSize: 15, color: "var(--muted)" }}>
            {c.backToWork}
          </Link>
        </div>
      </Reveal>
    </>
  )
}
