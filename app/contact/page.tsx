"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Github, Linkedin, Calendar } from "lucide-react"
import { t } from "@/contexts/language-context"
import ClientOnly from "@/components/client-only"
import Reveal from "@/components/reveal"
import CalEmbed from "./CalEmbed"

const WEB3FORMS_ACCESS_KEY = "dcb39c5a-4bb5-4ae3-8108-449c261f52cc"

const fieldLabel: React.CSSProperties = { fontSize: 13, fontWeight: 500, letterSpacing: "0.04em", color: "var(--soft)" }
const fieldInput: React.CSSProperties = {
  background: "var(--faint)",
  border: "1px solid var(--line2)",
  borderRadius: 12,
  padding: "14px 16px",
  color: "var(--fg)",
  fontSize: 15,
  outline: "none",
  width: "100%",
}
const sideCard: React.CSSProperties = {
  border: "1px solid var(--line2)",
  borderRadius: 12,
  background: "var(--card)",
  boxShadow: "var(--shadow)",
  padding: 28,
}

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    setError(false)

    const form = e.currentTarget
    const data = new FormData(form)
    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `New project brief from ${data.get("name")}`,
      name: data.get("name"),
      email: data.get("email"),
      company: data.get("company"),
      need: data.get("need"),
      timeline: data.get("timeline"),
      message: data.get("brief"),
      botcheck: data.get("botcheck"),
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      })
      const result = await response.json()
      if (result.success) {
        setSent(true)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <Reveal style={{ maxWidth: 1120, margin: "0 auto", padding: "96px 24px 104px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.25fr 1fr", gap: 64, alignItems: "stretch" }} className="!grid-cols-1 lg:!grid-cols-[1.25fr_1fr]">
        <div>
          <ClientOnly>
            <div style={{ fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--dim)", fontWeight: 500, marginBottom: 18 }}>
              {t("contact.eyebrow")}
            </div>
            <h1 style={{ fontSize: 48, lineHeight: 1.06, letterSpacing: "-0.03em", fontWeight: 700, margin: "0 0 20px" }}>
              {t("contact.title")}
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--muted)", margin: "0 0 44px", maxWidth: 520 }}>
              {t("contact.description")}
            </p>
          </ClientOnly>

          {!sent ? (
            <ClientOnly>
              <form onSubmit={handleSubmit} style={{ display: "grid", gap: 22, maxWidth: 560 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }} className="!grid-cols-1 sm:!grid-cols-2">
                  <label style={{ display: "grid", gap: 9 }}>
                    <span style={fieldLabel}>{t("contact.form.name")}</span>
                    <input name="name" required placeholder={t("contact.form.name.placeholder")} style={fieldInput} />
                  </label>
                  <label style={{ display: "grid", gap: 9 }}>
                    <span style={fieldLabel}>{t("contact.form.email")}</span>
                    <input name="email" type="email" required placeholder={t("contact.form.email.placeholder")} style={fieldInput} />
                  </label>
                </div>
                <label style={{ display: "grid", gap: 9 }}>
                  <span style={fieldLabel}>{t("contact.form.company")}</span>
                  <input name="company" placeholder={t("contact.form.company.placeholder")} style={fieldInput} />
                </label>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }} className="!grid-cols-1 sm:!grid-cols-2">
                  <label style={{ display: "grid", gap: 9 }}>
                    <span style={fieldLabel}>{t("contact.form.need")}</span>
                    <select name="need" style={{ ...fieldInput, appearance: "none" }}>
                      {[0, 1, 2, 3, 4, 5].map((i) => (
                        <option key={i}>{t(`contact.form.need.${i}`)}</option>
                      ))}
                    </select>
                  </label>
                  <label style={{ display: "grid", gap: 9 }}>
                    <span style={fieldLabel}>{t("contact.form.timeline")}</span>
                    <select name="timeline" style={{ ...fieldInput, appearance: "none" }}>
                      {[0, 1, 2, 3].map((i) => (
                        <option key={i}>{t(`contact.form.timeline.${i}`)}</option>
                      ))}
                    </select>
                  </label>
                </div>
                <label style={{ display: "grid", gap: 9 }}>
                  <span style={fieldLabel}>{t("contact.form.brief")}</span>
                  <textarea
                    name="brief"
                    rows={5}
                    required
                    placeholder={t("contact.form.brief.placeholder")}
                    style={{ ...fieldInput, resize: "vertical", lineHeight: 1.6 }}
                  />
                </label>
                <div style={{ display: "none" }}>
                  <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
                  <button
                    type="submit"
                    disabled={sending}
                    style={{ background: "var(--btn-bg)", color: "var(--btn-fg)", border: "none", borderRadius: 9999, padding: "15px 32px", fontSize: 15, fontWeight: 700, cursor: "pointer" }}
                  >
                    {sending ? t("contact.form.sending") : t("contact.form.send")}
                  </button>
                  <span style={{ fontSize: 13, color: "var(--dim)" }}>{t("contact.form.note")}</span>
                </div>
                {error && <p style={{ fontSize: 14, color: "#f87171", margin: 0 }}>{t("contact.form.error")}</p>}
              </form>
            </ClientOnly>
          ) : (
            <ClientOnly>
              <div style={{ border: "1px solid var(--line2)", borderRadius: 12, background: "var(--card-hi)", boxShadow: "var(--shadow)", padding: 40, maxWidth: 560 }}>
                <div style={{ width: 8, height: 8, borderRadius: 9999, background: "var(--ok)", marginBottom: 22 }} />
                <h2 style={{ fontSize: 28, fontWeight: 700, margin: "0 0 14px" }}>{t("contact.sent.title")}</h2>
                <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--muted)", margin: "0 0 28px" }}>{t("contact.sent.description")}</p>
                <button
                  onClick={() => setSent(false)}
                  style={{ background: "transparent", color: "var(--fg)", border: "1px solid var(--line2)", borderRadius: 9999, padding: "13px 26px", fontSize: 14, fontWeight: 500, cursor: "pointer" }}
                >
                  {t("contact.sent.again")}
                </button>
              </div>
            </ClientOnly>
          )}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <ClientOnly>
            <div style={sideCard}>
              <div style={{ fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--dim)", fontWeight: 500, marginBottom: 20 }}>
                {t("contact.next.eyebrow")}
              </div>
              <div style={{ display: "grid", gap: 18 }}>
                {[0, 1, 2].map((i) => (
                  <div key={i} style={{ display: "flex", gap: 14 }}>
                    <span style={{ color: "var(--dim)", fontSize: 14, fontWeight: 500, minWidth: 22 }}>{`0${i + 1}`}</span>
                    <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--soft)", margin: 0 }}>{t(`contact.next.${i}`)}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={sideCard}>
              <div style={{ fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--dim)", fontWeight: 500, marginBottom: 18 }}>
                {t("contact.direct.eyebrow")}
              </div>
              <div style={{ display: "grid", gap: 14, fontSize: 15 }}>
                <a href="mailto:xhafaj.dennis@protonmail.com" style={{ display: "inline-flex", alignItems: "center", gap: 11 }}>
                  <Mail size={16} /> xhafaj.dennis@protonmail.com
                </a>
                <a href="https://linkedin.com/in/dennis-xhafaj-b48a2528a" target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: 11 }}>
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a href="https://github.com/xaxoman" target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: 11 }}>
                  <Github size={16} /> GitHub
                </a>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 11 }}>
                  <Calendar size={16} />
                  <CalEmbed />
                </span>
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--dim)", margin: "22px 0 0" }}>{t("contact.direct.location")}</p>
            </div>
          </ClientOnly>
        </div>
      </div>
    </Reveal>
  )
}
