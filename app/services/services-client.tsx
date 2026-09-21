"use client"

import type React from "react"
import Link from "next/link"
import { t } from "@/contexts/language-context"
import Reveal from "@/components/reveal"

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

function ServiceBlock({
  id,
  eyebrowKey,
  badgeKey,
  titleKey,
  descKey,
  rowKeys,
  extra,
  guide,
  zIndex,
}: {
  id: string
  guide: { slug: string; label: string }
  eyebrowKey: string
  badgeKey?: string
  titleKey: string
  descKey: string
  rowKeys?: string[]
  extra?: React.ReactNode
  zIndex: number
}) {
  return (
    <div
      id={id}
      style={{
        position: "sticky",
        top: 68,
        scrollMarginTop: 90,
        zIndex,
        background: "var(--bg)",
        borderTop: "1px solid var(--line2)",
        padding: "48px 0 56px",
        display: "grid",
        gridTemplateColumns: "1fr 1.1fr",
        gap: 56,
      }}
      className="!grid-cols-1 md:!grid-cols-2"
    >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--dim)", fontWeight: 500 }}>
              {t(eyebrowKey)}
            </div>
            {badgeKey && (
              <span style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 500, color: "var(--tag-p-fg)", background: "var(--tag-p-bg)", borderRadius: 9999, padding: "5px 12px" }}>
                {t(badgeKey)}
              </span>
            )}
          </div>
          <h2 style={{ fontSize: 34, lineHeight: 1.12, letterSpacing: "-0.02em", fontWeight: 700, margin: "0 0 16px" }}>
            {t(titleKey)}
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--muted)", margin: 0 }}>{t(descKey)}</p>
          <Link
            href={`/blog/${guide.slug}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginTop: 20,
              fontSize: 15,
              fontWeight: 500,
              textDecoration: "underline",
              textUnderlineOffset: 3,
            }}
          >
            {guide.label} →
          </Link>
        </div>
        {rowKeys ? (
          <div style={{ display: "grid", gap: 12, alignContent: "start" }}>
            {rowKeys.map((k) => (
              <div key={k} data-row="1" style={{ border: "1px solid var(--line)", borderRadius: 12, padding: "18px 22px", fontSize: 15, color: "var(--soft)" }}>
                {t(k)}
              </div>
            ))}
          </div>
        ) : (
          extra
        )}
    </div>
  )
}

export default function ServicesClient() {
  return (
    <>
      <Reveal style={{ maxWidth: 1120, margin: "0 auto", padding: "96px 24px 64px" }}>
          <div style={{ fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--dim)", fontWeight: 500, marginBottom: 18 }}>
            {t("services.hero.eyebrow")}
          </div>
          <h1 style={{ fontSize: 56, lineHeight: 1.06, letterSpacing: "-0.03em", fontWeight: 700, margin: 0, maxWidth: 760 }}>
            {t("services.hero.title")}
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: "var(--muted)", maxWidth: 620, margin: "26px 0 0" }}>
            {t("services.hero.description")}
          </p>
      </Reveal>

      <Reveal style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px 40px" }}>
        <ServiceBlock
          id="siti-web"
          guide={{ slug: "sito-web-aziende-manifatturiere", label: "Guida: cosa cerca un buyer in un sito aziendale" }}
          eyebrowKey="services.websites.eyebrow"
          titleKey="services.websites.title"
          descKey="services.websites.description"
          rowKeys={["services.websites.row.0", "services.websites.row.1", "services.websites.row.2", "services.websites.row.3", "services.websites.row.4"]}
          zIndex={1}
        />
        <ServiceBlock
          id="ecommerce"
          guide={{ slug: "aprire-ecommerce-negozio-fisico", label: "Guida: aprire un e-commerce avendo un negozio" }}
          eyebrowKey="services.ecommerce.eyebrow"
          titleKey="services.ecommerce.title"
          descKey="services.ecommerce.description"
          rowKeys={["services.ecommerce.row.0", "services.ecommerce.row.1", "services.ecommerce.row.2", "services.ecommerce.row.3", "services.ecommerce.row.4"]}
          zIndex={2}
        />
        <ServiceBlock
          id="app"
          guide={{ slug: "portale-ordini-b2b", label: "Guida: far ordinare i clienti da soli" }}
          eyebrowKey="services.apps.eyebrow"
          titleKey="services.apps.title"
          descKey="services.apps.description"
          rowKeys={["services.apps.row.0", "services.apps.row.1", "services.apps.row.2", "services.apps.row.3", "services.apps.row.4"]}
          zIndex={3}
        />
        <ServiceBlock
          id="automazione"
          guide={{ slug: "gestionale-su-misura-vs-excel", label: "Guida: quando smettere di usare Excel" }}
          eyebrowKey="services.automation.eyebrow"
          badgeKey="service.automation.badge"
          titleKey="services.automation.title"
          descKey="services.automation.description"
          zIndex={4}
          extra={
            <div style={{ display: "grid", gap: 20, alignContent: "start" }}>
              <div data-lift="1" style={{ border: "1px solid var(--line2)", borderRadius: 12, background: "var(--card)", boxShadow: "var(--shadow)", padding: 26 }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px" }}>{t("automation.card.agentic.title")}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--soft)", margin: 0 }}>{t("automation.card.agentic.description")}</p>
              </div>
              <div data-lift="1" style={{ border: "1px solid var(--line2)", borderRadius: 12, background: "var(--card)", boxShadow: "var(--shadow)", padding: 26 }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px" }}>{t("automation.card.generative.title")}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--soft)", margin: 0 }}>{t("automation.card.generative.description")}</p>
              </div>
            </div>
          }
        />
      </Reveal>

      <Reveal style={{ borderTop: "1px solid var(--line)" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "88px 24px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }} className="!grid-cols-1 md:!grid-cols-2">
              <div>
                <div style={{ fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--dim)", fontWeight: 500, marginBottom: 18 }}>
                  {t("services.engagement.eyebrow")}
                </div>
                <h2 style={{ fontSize: 36, lineHeight: 1.1, letterSpacing: "-0.02em", fontWeight: 700, margin: "0 0 18px" }}>
                  {t("services.engagement.title")}
                </h2>
                <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--muted)", margin: 0 }}>{t("services.engagement.description")}</p>
              </div>
              <div style={{ display: "grid", gap: 12 }}>
                {[
                  ["engagement.fixed.title", "engagement.fixed.description"],
                  ["engagement.pilot.title", "engagement.pilot.description"],
                  ["engagement.subcontract.title", "engagement.subcontract.description"],
                ].map(([titleKey, descKey]) => (
                  <div key={titleKey} data-row="1" style={{ border: "1px solid var(--line)", borderRadius: 12, padding: 22 }}>
                    <h3 style={{ fontSize: 17, fontWeight: 700, margin: "0 0 6px" }}>{t(titleKey)}</h3>
                    <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--muted)", margin: 0 }}>{t(descKey)}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ marginTop: 64, display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", justifyContent: "space-between", borderTop: "1px solid var(--line)", paddingTop: 40 }}>
              <p style={{ fontSize: 18, color: "var(--soft)", margin: 0 }}>{t("services.footer.text")}</p>
              <Link href="/contact" style={solidBtn}>
                {t("nav.cta")}
              </Link>
            </div>
        </div>
      </Reveal>
    </>
  )
}
