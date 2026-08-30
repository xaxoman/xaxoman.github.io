import { NextRequest, NextResponse } from "next/server"
import { put, head } from "@vercel/blob"

// 1x1 transparent GIF — the actual tracking pixel served to email clients.
const PIXEL = Buffer.from("R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==", "base64")

const LOG_PATH = "outreach-opens.json"

export const runtime = "nodejs"

type OpenLog = Record<string, string[]>

async function readLog(): Promise<OpenLog> {
  try {
    const info = await head(LOG_PATH)
    const res = await fetch(info.url, { cache: "no-store" })
    if (!res.ok) return {}
    return (await res.json()) as OpenLog
  } catch {
    // No blob yet (first open ever) or a transient fetch failure — start fresh either way,
    // since losing a would-be duplicate entry on error is far cheaper than blocking the pixel.
    return {}
  }
}

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id")

  if (id) {
    try {
      const log = await readLog()
      const now = new Date().toISOString()
      log[id] = [...(log[id] ?? []), now]
      await put(LOG_PATH, JSON.stringify(log), {
        access: "public",
        addRandomSuffix: false,
        allowOverwrite: true,
        contentType: "application/json",
      })
    } catch (err) {
      // Never let a logging failure surface to the email client — always still return the pixel.
      console.error("track: failed to record open", err)
    }
  }

  return new NextResponse(PIXEL, {
    status: 200,
    headers: {
      "Content-Type": "image/gif",
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      Pragma: "no-cache",
      Expires: "0",
    },
  })
}
