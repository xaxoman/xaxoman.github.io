"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { t } from "@/contexts/language-context"
import ClientOnly from "@/components/client-only"
import Reveal from "@/components/reveal"

const cardStyle: React.CSSProperties = {
  border: "1px solid var(--line2)",
  borderRadius: 12,
  background: "var(--card)",
  boxShadow: "var(--shadow)",
  padding: 24,
}

const techPill: React.CSSProperties = {
  fontSize: 12,
  padding: "5px 12px",
  background: "var(--chip)",
  borderRadius: 9999,
  color: "var(--soft)",
}

function TagBadge({ tagKey, kind }: { tagKey: string; kind: "green" | "blue" }) {
  return (
    <span
      style={{
        fontSize: 11,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        fontWeight: 500,
        color: kind === "green" ? "var(--tag-g-fg)" : "var(--tag-b-fg)",
        background: kind === "green" ? "var(--tag-g-bg)" : "var(--tag-b-bg)",
        borderRadius: 9999,
        padding: "5px 12px",
      }}
    >
      {t(tagKey)}
    </span>
  )
}

const PROJECTS = [
  {
    img: "/about-projects/project_emerson.png",
    tagKey: "tag.freelance",
    kind: "green" as const,
    titleKey: "project.emerson.title",
    descKey: "project.emerson.description",
    tech: ["HTML", "CSS", "JavaScript", "HUGO"],
    link: { href: "https://www.emersontelefonia.com", labelKey: "project.link.visitSite", external: true },
  },
  {
    img: "/about-projects/contabite.webp",
    tagKey: "tag.mobileApp",
    kind: "blue" as const,
    titleKey: "project.contabite.title",
    descKey: "project.contabite.description",
    tech: ["React Native", "Expo", "AI"],
    link: { href: "/contact", labelKey: "project.link.askMe", external: false },
  },
  {
    img: "/about-projects/itrack-frame.png",
    tagKey: "tag.openSource",
    kind: "blue" as const,
    titleKey: "project.itrack.title",
    descKey: "project.itrack.description",
    tech: ["TypeScript", "React", "Tailwind CSS"],
    link: { href: "https://github.com/xaxoman/iTrack-open-source-workout-app", labelKey: "project.link.viewGithub", external: true },
  },
  {
    img: "/about-projects/pizzeria-king.png",
    tagKey: "tag.freelance",
    kind: "green" as const,
    titleKey: "project.pizzeriaKing.title",
    descKey: "project.pizzeriaKing.description",
    tech: ["React", "HTML", "CSS", "JavaScript"],
    link: { href: "/contact", labelKey: "project.link.askMe", external: false },
  },
  {
    img: "/about-projects/addiction_tracker.png",
    tagKey: "tag.mobileApp",
    kind: "blue" as const,
    titleKey: "project.addictionTracker.title",
    descKey: "project.addictionTracker.description",
    tech: ["Next.js", "React", "Capacitor", "Tailwind CSS"],
    link: { href: "https://github.com/xaxoman", labelKey: "project.link.viewGithub", external: true },
  },
]

export default function Work() {
  return (
    <>
      <Reveal style={{ maxWidth: 1120, margin: "0 auto", padding: "96px 24px 56px" }}>
        <ClientOnly>
          <div style={{ fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--dim)", fontWeight: 500, marginBottom: 18 }}>
            {t("work.hero.eyebrow")}
          </div>
          <h1 style={{ fontSize: 56, lineHeight: 1.06, letterSpacing: "-0.03em", fontWeight: 700, margin: 0, maxWidth: 700 }}>
            {t("work.hero.title")}
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: "var(--muted)", maxWidth: 620, margin: "26px 0 0" }}>
            {t("work.hero.description")}
          </p>
        </ClientOnly>
      </Reveal>

      <Reveal style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="!grid-cols-1 md:!grid-cols-2">
          {PROJECTS.map((p) => (
            <div key={p.titleKey} data-lift="1" style={cardStyle}>
              <div style={{ borderRadius: 12, overflow: "hidden", aspectRatio: "4/3", marginBottom: 22, background: "var(--faint)", position: "relative" }}>
                <Image src={p.img} alt={p.titleKey} fill style={{ objectFit: "cover" }} />
              </div>
              <ClientOnly>
                <TagBadge tagKey={p.tagKey} kind={p.kind} />
                <h2 style={{ fontSize: 22, fontWeight: 700, margin: "18px 0 10px" }}>{t(p.titleKey)}</h2>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--muted)", margin: "0 0 20px" }}>{t(p.descKey)}</p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 22 }}>
                  {p.tech.map((tech) => (
                    <span key={tech} style={techPill}>
                      {tech}
                    </span>
                  ))}
                </div>
                {p.link.external ? (
                  <a href={p.link.href} target="_blank" rel="noopener" style={{ fontSize: 15, fontWeight: 500 }}>
                    {t(p.link.labelKey)}
                  </a>
                ) : (
                  <Link href={p.link.href} style={{ fontSize: 15, fontWeight: 500 }}>
                    {t(p.link.labelKey)}
                  </Link>
                )}
              </ClientOnly>
            </div>
          ))}

          <ClientOnly>
            <div style={{ border: "1px dashed var(--line2)", borderRadius: 12, padding: 32, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ fontFamily: "ui-monospace,'SF Mono',Menlo,Consolas,monospace", fontSize: 12, letterSpacing: "0.1em", color: "var(--dim)", marginBottom: 14 }}>
                {t("work.next.label")}
              </div>
              <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>{t("work.next.title")}</h2>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--muted)", margin: "0 0 22px" }}>{t("work.next.description")}</p>
              <Link
                href="/contact"
                style={{ background: "transparent", color: "var(--fg)", border: "1px solid var(--line2)", borderRadius: 9999, padding: "13px 24px", fontSize: 14, fontWeight: 500, alignSelf: "flex-start" }}
              >
                {t("work.next.cta")}
              </Link>
            </div>
          </ClientOnly>
        </div>
      </Reveal>
    </>
  )
}
