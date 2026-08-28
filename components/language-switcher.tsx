"use client"

import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/contexts/language-context"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (open && ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("click", onDocClick)
    return () => document.removeEventListener("click", onDocClick)
  }, [open])

  const pick = (lang: "en" | "it") => {
    setLanguage(lang)
    setOpen(false)
  }

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button
        onClick={() => setOpen((v) => !v)}
        title="Language"
        aria-expanded={open}
        aria-label="Switch language"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 7,
          border: "1px solid var(--line2)",
          borderRadius: 9999,
          background: "transparent",
          color: "var(--fg)",
          padding: "9px 13px",
          fontSize: 12,
          fontWeight: 500,
          letterSpacing: "0.1em",
          cursor: "pointer",
        }}
        className="hover:bg-[var(--chip)]"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M2 12h20"></path>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
        {language === "it" ? "IT" : "EN"}
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ color: "var(--dim)" }} aria-hidden="true">
          <path d="m6 9 6 6 6-6"></path>
        </svg>
      </button>
      {open && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 10px)",
            right: 0,
            minWidth: 180,
            background: "var(--bg)",
            border: "1px solid var(--line2)",
            borderRadius: 12,
            boxShadow: "var(--shadow)",
            padding: 6,
            zIndex: 60,
          }}
        >
          {([
            ["en", "English"],
            ["it", "Italiano"],
          ] as const).map(([code, label]) => (
            <button
              key={code}
              onClick={() => pick(code)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
                width: "100%",
                background: "transparent",
                border: "none",
                borderRadius: 8,
                padding: "10px 12px",
                color: "var(--fg)",
                fontSize: 14,
                cursor: "pointer",
                textAlign: "left",
              }}
              className="hover:bg-[var(--chip)]"
            >
              {label}
              {language === code && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
