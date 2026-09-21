import type React from "react"
import type { BlogPost } from "@/lib/blog-data"

/** Copertine generate, non fotografie. Il motivo racconta la categoria, mentre
 *  colore e posizione dell'alone derivano dallo slug: due articoli della stessa
 *  categoria restano diversi da guardare, affiancati nella griglia. */
function seedOf(slug: string) {
  let h = 0
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0
  return h
}

function Motif({ category }: { category: BlogPost["category"] }) {
  const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const }

  if (category === "Siti web")
    return (
      <g {...stroke}>
        <rect x="96" y="44" width="128" height="92" rx="7" />
        <path d="M96 62h128" />
        <circle cx="107" cy="53" r="2.4" fill="currentColor" stroke="none" />
        <circle cx="116" cy="53" r="2.4" fill="currentColor" stroke="none" />
        <circle cx="125" cy="53" r="2.4" fill="currentColor" stroke="none" />
        <rect x="108" y="74" width="104" height="26" rx="4" opacity="0.45" />
        <path d="M108 112h72M108 122h48" opacity="0.6" />
      </g>
    )

  if (category === "E-commerce")
    return (
      <g {...stroke}>
        <path d="M104 68h112l-9 64a10 10 0 0 1-10 9h-74a10 10 0 0 1-10-9z" />
        <path d="M133 78V60a27 27 0 0 1 54 0v18" />
        <path d="M133 101h54" opacity="0.5" />
        <circle cx="146" cy="118" r="4" opacity="0.6" />
        <circle cx="174" cy="118" r="4" opacity="0.6" />
      </g>
    )

  if (category === "Gestionali & Web App")
    return (
      <g {...stroke}>
        <rect x="88" y="44" width="144" height="92" rx="7" />
        <path d="M124 44v92" />
        <path d="M96 60h20M96 74h20M96 88h20" opacity="0.55" />
        <path d="M136 62h84M136 80h84M136 98h56M136 116h68" opacity="0.7" />
      </g>
    )

  if (category === "SEO & Performance")
    return (
      <g {...stroke}>
        <path d="M92 136h136" opacity="0.5" />
        <rect x="104" y="104" width="18" height="32" rx="3" />
        <rect x="132" y="86" width="18" height="50" rx="3" />
        <rect x="160" y="66" width="18" height="70" rx="3" />
        <circle cx="200" cy="66" r="18" />
        <path d="m213 79 13 13" />
      </g>
    )

  return (
    <g {...stroke}>
      <path d="M170 44h44a8 8 0 0 1 8 8v44l-62 62a8 8 0 0 1-11 0l-41-41a8 8 0 0 1 0-11z" />
      <circle cx="200" cy="66" r="7" />
      <path d="M124 104h28M124 116h16" opacity="0.6" />
    </g>
  )
}

export default function BlogCover({
  category,
  slug,
  ratio = "16 / 9",
}: {
  category: BlogPost["category"]
  slug: string
  ratio?: string
}) {
  const seed = seedOf(slug)
  const accent = `var(--s${(seed % 4) + 1})`
  const cx = 18 + ((seed >> 3) % 5) * 16
  const cy = 22 + ((seed >> 6) % 4) * 14
  const id = slug.replace(/[^a-z]/gi, "").toLowerCase()

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: ratio,
        borderRadius: 12,
        overflow: "hidden",
        border: "1px solid var(--line)",
        background: "var(--faint)",
      }}
    >
      <svg
        viewBox="0 0 320 180"
        preserveAspectRatio="xMidYMid slice"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", color: accent }}
        aria-hidden="true"
      >
        <defs>
          <pattern id={`dots-${id}`} width="12" height="12" patternUnits="userSpaceOnUse">
            <circle cx="1.4" cy="1.4" r="1.4" fill="var(--dots)" />
          </pattern>
          <radialGradient id={`wash-${id}`} cx={`${cx}%`} cy={`${cy}%`} r="72%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.22" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="320" height="180" fill={`url(#dots-${id})`} opacity="0.5" />
        <rect width="320" height="180" fill={`url(#wash-${id})`} />
        <Motif category={category} />
      </svg>
    </div>
  )
}
