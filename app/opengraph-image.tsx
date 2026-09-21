import { ImageResponse } from "next/og"

export const alt = "Dennis Xhafaj — sviluppatore full-stack freelance a Crema"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
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
        <div style={{ fontSize: 30, letterSpacing: 4, color: "#9ca3af" }}>DENNIS XHAFAJ</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 68, lineHeight: 1.1, fontWeight: 700 }}>
            Sviluppatore full-stack freelance
          </div>
          <div style={{ fontSize: 68, lineHeight: 1.1, fontWeight: 700, color: "#9ca3af" }}>
            a Crema, Italia
          </div>
        </div>
        <div style={{ fontSize: 28, color: "#9ca3af" }}>
          Siti web · E-commerce · App · Automazioni AI
        </div>
      </div>
    ),
    size,
  )
}
