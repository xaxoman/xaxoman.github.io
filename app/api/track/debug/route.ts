import { NextResponse } from "next/server"
import { put, head } from "@vercel/blob"

// TEMPORARY diagnostic route — not linked from anywhere, safe to leave briefly but should be
// deleted once open tracking is confirmed working (it reveals whether the write token exists).
export const runtime = "nodejs"

export async function GET() {
  const hasToken = !!process.env.BLOB_READ_WRITE_TOKEN
  let putOk = false
  let putError: string | null = null
  let headOk = false
  let headError: string | null = null

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

  try {
    await head("debug-test.json")
    headOk = true
  } catch (e: any) {
    headError = String(e?.message || e)
  }

  return NextResponse.json({ hasToken, putOk, putError, headOk, headError })
}
