import { NextResponse } from "next/server"
import { put, head } from "@vercel/blob"

// TEMPORARY diagnostic route — not linked from anywhere, safe to leave briefly but should be
// deleted once open tracking is confirmed working (it reveals whether the write token exists).
export const runtime = "nodejs"

const LOG_PATH = "outreach-opens.json"

async function inspect(pathname: string) {
  const result: Record<string, unknown> = { pathname }
  try {
    const info = await head(pathname)
    result.headOk = true
    result.url = info.url
    result.size = info.size
    try {
      const res = await fetch(info.url, { cache: "no-store" })
      result.fetchStatus = res.status
      result.fetchBody = await res.text()
    } catch (e: any) {
      result.fetchError = String(e?.message || e)
    }
  } catch (e: any) {
    result.headOk = false
    result.headError = String(e?.message || e)
  }
  return result
}

export async function GET() {
  const hasToken = !!process.env.BLOB_READ_WRITE_TOKEN

  let putOk = false
  let putError: string | null = null
  try {
    await put("debug-test.json", JSON.stringify({ ts: Date.now() }), {
      access: "public",
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: "application/json",
    })
    putOk = true
  } catch (e: any) {
    putError = String(e?.message || e)
  }

  const debugTest = await inspect("debug-test.json")
  const outreachLog = await inspect(LOG_PATH)

  return NextResponse.json({ hasToken, putOk, putError, debugTest, outreachLog })
}
