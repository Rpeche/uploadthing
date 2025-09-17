// src/app/api/debug-env/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    UPLOADTHING_APP_ID: process.env.UPLOADTHING_APP_ID ? "✅ found" : "❌ missing",
    UPLOADTHING_TOKEN: process.env.UPLOADTHING_TOKEN ? "✅ found" : "❌ missing",
    // If you want to double-check, uncomment below but be careful not to leak secrets
    // rawAppId: process.env.UPLOADTHING_APP_ID,
    // rawToken: process.env.UPLOADTHING_TOKEN?.slice(0, 10) + "...",
  });
}
