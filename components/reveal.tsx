"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

export default function Reveal({
  children,
  as: Tag = "div",
  style,
  className,
}: {
  children: React.ReactNode
  as?: keyof React.JSX.IntrinsicElements
  style?: React.CSSProperties
  className?: string
}) {
  const ref = useRef<HTMLElement>(null)
  const [pending, setPending] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const h = window.innerHeight || 800
    if (el.getBoundingClientRect().top < h) return

    setPending(true)
    let rafId: number | null = null

    const check = () => {
      if (!el) return
      if (el.getBoundingClientRect().top < (window.innerHeight || 800)) {
        setPending(false)
        rafId = null
        return
      }
      rafId = requestAnimationFrame(check)
    }
    rafId = requestAnimationFrame(check)

    const fallback = setTimeout(() => setPending(false), 4000)
    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      clearTimeout(fallback)
    }
  }, [])

  return (
    // @ts-expect-error dynamic tag with data attrs
    <Tag ref={ref} data-reveal="1" data-pending={pending ? "1" : undefined} style={style} className={className}>
      {children}
    </Tag>
  )
}
