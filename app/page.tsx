"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Link from "next/link"
import { t } from "@/contexts/language-context"
import ClientOnly from "@/components/client-only"
import Reveal from "@/components/reveal"

const WORDS = [0, 1, 2, 3]

// PLACEHOLDER TESTIMONIALS — the people, companies and figures below are
// invented. Swap each entry for a real client quote (with their
// permission) before treating this section as anything a visitor should
// rely on. The copy lives in the translation files under `review.<id>.*`.
const REVIEWS = [
  { id: "bonometti", initials: "MB" },
  { id: "reboldi", initials: "AR" },
  { id: "terzi", initials: "GT" },
  { id: "vimercati", initials: "PV" },
  { id: "grassi", initials: "EG" },
  { id: "cattaneo", initials: "DC" },
] as const

const HERO_SERVICES = [
  { id: "websites" },
  { id: "ecommerce" },
  { id: "apps" },
  { id: "automation" },
] as const

function ServiceIcon({ id }: { id: (typeof HERO_SERVICES)[number]["id"] }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  }
  if (id === "websites")
    return (
      <svg {...common}>
        <rect x="2.5" y="4" width="19" height="13" rx="2"></rect>
        <path d="M2.5 8.5h19"></path>
        <path d="M8 21h8"></path>
        <path d="M12 17v4"></path>
      </svg>
    )
  if (id === "ecommerce")
    return (
      <svg {...common}>
        <path d="M4 7h16l-1.2 11.2a2 2 0 0 1-2 1.8H7.2a2 2 0 0 1-2-1.8z"></path>
        <path d="M8.5 10V6.5a3.5 3.5 0 0 1 7 0V10"></path>
      </svg>
    )
  if (id === "apps")
    return (
      <svg {...common}>
        <rect x="2.5" y="3.5" width="14" height="13" rx="2"></rect>
        <path d="M2.5 7.5h14"></path>
        <rect x="14.5" y="10" width="7" height="10.5" rx="1.8"></rect>
      </svg>
    )
  return (
    <svg {...common}>
      <path d="M12 3v3"></path>
      <path d="M12 18v3"></path>
      <path d="M3 12h3"></path>
      <path d="M18 12h3"></path>
      <circle cx="12" cy="12" r="4"></circle>
      <path d="m5.6 5.6 2.1 2.1"></path>
      <path d="m16.3 16.3 2.1 2.1"></path>
      <path d="m18.4 5.6-2.1 2.1"></path>
      <path d="m7.7 16.3-2.1 2.1"></path>
    </svg>
  )
}

function Stars() {
  return (
    <span style={{ display: "flex", gap: 3 }} aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="var(--s3)" stroke="none">
          <path d="m12 2.6 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3-5.8 3 1.1-6.5L2.6 9.4l6.5-.9z"></path>
        </svg>
      ))}
    </span>
  )
}

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
          paddingTop: 56,
        }}
        className="!grid-cols-1 md:!grid-cols-2"
      >
        <div className={reverse ? "md:order-2" : undefined}>{text}</div>
        <div className={reverse ? "md:order-1" : undefined}>{visual}</div>
      </div>
    </Reveal>
  )
}

// Testimonial slider: one card in focus, its neighbours peeking in at
// reduced scale and opacity. Clicking a neighbour brings it forward.
function ReviewCarousel() {
  // The strip is the review list three times over, and the window sits on
  // the middle copy. Stepping past either end of that copy lands on an
  // identical card in a neighbouring one, and the transition-end handler
  // silently shifts back to the middle — so the slider loops with a
  // neighbour always peeking in on both sides.
  const n = REVIEWS.length
  const items = [...REVIEWS, ...REVIEWS, ...REVIEWS]
  const [pos, setPos] = useState<number>(n)
  const [animate, setAnimate] = useState(true)

  const [paused, setPaused] = useState(false)

  const go = (dir: -1 | 1) => {
    setAnimate(true)
    setPos((i) => i + dir)
  }

  // Advance every 3s. Listing `pos` restarts the timer after any move, so
  // a card the visitor just chose gets its full three seconds. Hovering,
  // or tabbing into the slider, holds it; so does a reduced-motion setting.
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const id = setInterval(() => go(1), 3000)
    return () => clearInterval(id)
  }, [paused, pos])

  const normalise = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget || e.propertyName !== "transform") return
    if (pos < n) {
      setAnimate(false)
      setPos(pos + n)
    } else if (pos >= 2 * n) {
      setAnimate(false)
      setPos(pos - n)
    }
  }

  const arrow: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 52,
    height: 52,
    borderRadius: 9999,
    border: "1px solid var(--line2)",
    background: "transparent",
    color: "var(--fg)",
    cursor: "pointer",
    padding: 0,
  }

  return (
    <div
      style={{ "--card": "clamp(268px, 80vw, 560px)", "--gap": "24px" } as React.CSSProperties}
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div style={{ overflow: "hidden", padding: "48px 0 8px" }}>
        <div
          style={{
            position: "relative",
            left: "50%",
            display: "flex",
            gap: "var(--gap)",
            width: "max-content",
            transform: `translateX(calc(-0.5 * var(--card) - ${pos} * (var(--card) + var(--gap))))`,
            transition: animate ? "transform .55s cubic-bezier(.22,.61,.36,1)" : "none",
          }}
          onTransitionEnd={normalise}
        >
          {items.map((r, i) => {
            const on = i === pos
            return (
              <div
                key={`${r.id}-${i}`}
                role="group"
                aria-roledescription="slide"
                aria-hidden={i < n || i >= 2 * n ? true : undefined}
                aria-label={`${(i % n) + 1} / ${n}`}
                onClick={() => {
                  if (on) return
                  setAnimate(true)
                  setPos(i)
                }}
                style={{
                  width: "var(--card)",
                  flex: "none",
                  boxSizing: "border-box",
                  border: `1px solid ${on ? "var(--focus)" : "var(--line2)"}`,
                  borderRadius: 16,
                  background: on ? "var(--card-hi)" : "var(--card)",
                  boxShadow: on ? "var(--shadow)" : "none",
                  padding: "26px 30px 24px",
                  cursor: on ? "default" : "pointer",
                  opacity: on ? 1 : 0.45,
                  transform: on ? "none" : "scale(0.94)",
                  transition: "opacity .45s ease, transform .45s cubic-bezier(.22,.61,.36,1), border-color .45s ease, background .45s ease",
                }}
              >
                <ClientOnly>
                  <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--soft)", margin: 0 }}>
                    {t(`review.${r.id}.quote`)}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 16,
                      flexWrap: "wrap",
                      marginTop: 26,
                    }}
                  >
                    <span style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 0 }}>
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 40,
                          height: 40,
                          flex: "none",
                          borderRadius: 9999,
                          border: "1px solid var(--line2)",
                          background: "var(--faint)",
                          fontSize: 14,
                          fontWeight: 700,
                        }}
                      >
                        {r.initials}
                      </span>
                      <span style={{ minWidth: 0, textAlign: "left" }}>
                        <span style={{ display: "block", fontSize: 15, fontWeight: 700 }}>{t(`review.${r.id}.name`)}</span>
                        <span style={{ display: "block", fontSize: 13, color: "var(--muted)", marginTop: 2 }}>
                          {t(`review.${r.id}.role`)}
                        </span>
                      </span>
                    </span>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 4,
                        borderRadius: 9999,
                        padding: "7px 12px",
                        background: "var(--chip)",
                      }}
                    >
                      <Stars />
                    </span>
                  </div>
                </ClientOnly>
              </div>
            )
          })}
        </div>
      </div>

      <ClientOnly>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 16, margin: "40px 0 56px" }}>
          <button type="button" onClick={() => go(-1)} style={arrow} aria-label={t("reviews.prev")} className="hover:bg-[var(--chip)]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m14 6-6 6 6 6"></path>
            </svg>
          </button>
          <button type="button" onClick={() => go(1)} style={arrow} aria-label={t("reviews.next")} className="hover:bg-[var(--chip)]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m10 6 6 6-6 6"></path>
            </svg>
          </button>
        </div>
      </ClientOnly>
    </div>
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

  // The pointer is a lamp: it lights the dot grid it passes over, and the
  // primary CTA blooms and drifts toward it.
  const trackHero = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    el.style.setProperty("--mx", `${e.clientX - r.left}px`)
    el.style.setProperty("--my", `${e.clientY - r.top}px`)
  }
  const resetHero = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.style.setProperty("--mx", "-999px")
    e.currentTarget.style.setProperty("--my", "-999px")
  }
  const trackLamp = (e: React.PointerEvent<HTMLSpanElement>) => {
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    const x = e.clientX - r.left
    const y = e.clientY - r.top
    el.style.setProperty("--px", `${x}px`)
    el.style.setProperty("--py", `${y}px`)
    el.style.setProperty("--tx", `${(x / r.width - 0.5) * 12}px`)
    el.style.setProperty("--ty", `${(y / r.height - 0.5) * 6}px`)
  }
  const resetLamp = (e: React.PointerEvent<HTMLSpanElement>) => {
    e.currentTarget.style.setProperty("--tx", "0px")
    e.currentTarget.style.setProperty("--ty", "0px")
  }

  return (
    <>
      {/* Hero */}
      <Reveal style={{ borderBottom: "1px solid var(--line)" }}>
        <div data-hero="1" onPointerMove={trackHero} onPointerLeave={resetHero} style={{ position: "relative", overflow: "hidden" }}>
          {WORDS.map((i) => (
            <span
              key={i}
              data-hero-layer="1"
              data-hero-wash="1"
              data-on={i === wordIndex ? "1" : undefined}
              style={{ background: `radial-gradient(ellipse 48% 46% at 32% 38%, var(--s${i + 1}), transparent 70%)` }}
            />
          ))}
          <span data-hero-layer="1" data-hero-grid="1" />
          <span data-hero-layer="1" data-hero-lit="1" />
          <div style={{ position: "relative", maxWidth: 1120, margin: "0 auto", padding: "104px 24px 72px" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
              <h1
                style={{
                  fontSize: "clamp(38px, 5.6vw, 68px)",
                  lineHeight: 1.06,
                  letterSpacing: "-0.03em",
                  fontWeight: 700,
                  margin: 0,
                  maxWidth: 940,
                }}
              >
                <ClientOnly>
                  <span style={{ color: "var(--muted)" }}>{t("home.hero.title")}</span>
                </ClientOnly>
                <span style={{ display: "grid", gridTemplateColumns: "1fr", overflow: "hidden" }}>
                  <ClientOnly>
                    {WORDS.map((i) => (
                      <span
                        key={i}
                        data-word={i === wordIndex ? wordPhase : undefined}
                        style={{ gridArea: "1 / 1", visibility: i === wordIndex ? "visible" : "hidden" }}
                      >
                        {t(`home.hero.word.${i}`)}
                      </span>
                    ))}
                  </ClientOnly>
                </span>
              </h1>

              <ClientOnly>
                <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--muted)", maxWidth: 620, margin: "28px 0 0" }}>
                  {t("home.hero.description")}
                </p>
              </ClientOnly>

              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14, marginTop: 38 }}>
                <ClientOnly>
                  <span data-lamp="1" onPointerMove={trackLamp} onPointerLeave={resetLamp}>
                    <span data-lamp-glow="1" aria-hidden="true" />
                    <Link
                      data-lamp-btn="1"
                      href="/contact"
                      style={{ ...solidBtn, display: "inline-flex", alignItems: "center", gap: 10, minWidth: 250, justifyContent: "center", whiteSpace: "nowrap" }}
                    >
                      {t(`home.hero.cta.${wordIndex}`)}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M7 17 17 7"></path>
                        <path d="M8 7h9v9"></path>
                      </svg>
                    </Link>
                  </span>
                </ClientOnly>
                <ClientOnly>
                  <Link href="/work" style={{ background: "transparent", color: "var(--fg)", border: "1px solid var(--line2)", borderRadius: 9999, padding: "15px 30px", fontSize: 15, fontWeight: 500 }}>
                    {t("home.hero.secondaryCta")}
                  </Link>
                </ClientOnly>
              </div>

              <ClientOnly>
                <div
                  className="!hidden md:!flex"
                  style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px 24px", marginTop: 40, fontSize: 13, letterSpacing: "0.04em" }}
                >
                  {[0, 1, 2, 3].map((i, idx) => (
                    <span key={i} style={{ display: "flex", gap: 24 }}>
                      <span style={{ color: `var(--s${i + 1})`, fontWeight: 500 }}>{t(`home.hero.audience.${i}`)}</span>
                      {idx < 3 && (
                        <span className="hidden sm:inline" style={{ color: "var(--rule)" }}>
                          /
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </ClientOnly>
            </div>

            <div style={{ display: "grid", gap: 20, marginTop: 72 }} className="!grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-4">
              {HERO_SERVICES.map((svc, i) => (
                <Link
                  key={svc.id}
                  href="/services"
                  data-lift="1"
                  style={{
                    display: "block",
                    border: "1px solid var(--line2)",
                    borderRadius: 14,
                    background: "var(--card)",
                    boxShadow: "var(--shadow)",
                    padding: "26px 24px 28px",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 44,
                      height: 44,
                      borderRadius: 9999,
                      background: "var(--chip)",
                      color: `var(--s${i + 1})`,
                      marginBottom: 26,
                    }}
                  >
                    <ServiceIcon id={svc.id} />
                  </span>
                  <ClientOnly>
                    <h2 style={{ fontSize: 19, fontWeight: 700, letterSpacing: "-0.01em", margin: "0 0 10px" }}>
                      {t(`service.${svc.id}.title`)}
                    </h2>
                    <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--muted)", margin: 0 }}>
                      {t(`service.${svc.id}.short`)}
                    </p>
                  </ClientOnly>
                </Link>
              ))}
            </div>
          </div>
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
        </div>
      </Reveal>

      {/* Reviews */}
      <Reveal style={{ padding: "96px 0" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <ClientOnly>
            <span
              style={{
                display: "inline-block",
                border: "1px solid var(--line2)",
                borderRadius: 9999,
                padding: "8px 20px",
                fontSize: 13,
                color: "var(--soft)",
                background: "var(--faint)",
              }}
            >
              {t("reviews.badge")}
            </span>
            <h2
              style={{
                fontSize: "clamp(30px, 4.2vw, 50px)",
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                fontWeight: 700,
                margin: "26px auto 0",
                maxWidth: 780,
              }}
            >
              {t("reviews.title")}
              <br />
              <span style={{ color: "var(--muted)" }}>{t("reviews.title2")}</span>
            </h2>
          </ClientOnly>
        </div>

        <ReviewCarousel />
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
                <Link href="/contact" data-anim="1" style={{ border: "1px solid var(--line2)", borderRadius: 14, background: "var(--bg)", boxShadow: "var(--shadow)", padding: 24, display: "grid", gap: 18, cursor: "pointer", overflow: "hidden" }}>
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
                    <div style={{ border: "1px solid var(--line)", borderRadius: 9, padding: "11px 13px", background: "var(--faint)", minHeight: 78, overflow: "hidden" }}>
                      <span style={{ display: "block", fontSize: 14, lineHeight: 1.55, color: "var(--soft)", whiteSpace: "nowrap", overflow: "hidden", maxWidth: "100%", animation: "dx-type 7s steps(38, end) infinite", animationDelay: ".8s" }}>
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
