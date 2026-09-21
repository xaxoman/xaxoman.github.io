import { ImageResponse } from "next/og"
import { BLOG_POSTS, getPostBySlug } from "@/lib/blog-data"

export const alt = "Guida di Dennis Xhafaj"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

const ACCENT = ["#7dd3fc", "#c4b5fd", "#fcd34d", "#6ee7b7"]

export default async function BlogOpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  // stesso criterio della copertina in pagina: il colore deriva dallo slug
  let h = 0
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0
  const accent = ACCENT[h % 4]

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#000000",
          color: "#ffffff",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontSize: 28, letterSpacing: 4, color: "#9ca3af" }}>DENNIS XHAFAJ</div>
          <div style={{ fontSize: 24, letterSpacing: 3, color: accent, textTransform: "uppercase" }}>
            {post?.category ?? "Guida"}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ width: 96, height: 5, background: accent, marginBottom: 34 }} />
          <div style={{ fontSize: post && post.title.length > 58 ? 54 : 64, lineHeight: 1.14, fontWeight: 700 }}>
            {post?.title ?? "Guide su siti web, e-commerce e SEO"}
          </div>
        </div>

        <div style={{ fontSize: 26, color: "#9ca3af" }}>albaniancoder.vercel.app/blog</div>
      </div>
    ),
    size,
  )
}
