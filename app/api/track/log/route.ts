import { NextRequest, NextResponse } from "next/server"
import { head } from "@vercel/blob"

const LOG_PATH = "outreach-opens.json"

export const runtime = "nodejs"

// Gated by a shared secret (TRACK_READ_SECRET) so the open log — which contains every recipient's
// tracking id and open timestamps — isn't world-readable. Only check_opens.py, run locally by
// Dennis, knows this secret.
export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret")
  if (!process.env.TRACK_READ_SECRET || secret !== process.env.TRACK_READ_SECRET) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 })
  }

  try {
    const info = await head(LOG_PATH)
    const res = await fetch(info.url, { cache: "no-store" })
    if (!res.ok) return NextResponse.json({})
    const log = await res.json()
    return NextResponse.json(log)
  } catch {
    return NextResponse.json({})
  }
}
