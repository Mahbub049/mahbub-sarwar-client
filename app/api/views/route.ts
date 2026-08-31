import { NextRequest, NextResponse } from "next/server";

const VIEW_KEY = "portfolio:unique-visitors";
const COOKIE_NAME = "portfolio_viewed";

async function redisCommand(command: Array<string | number>) {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(command),
    cache: "no-store",
  });

  if (!response.ok) return null;
  return response.json() as Promise<{ result?: unknown }>;
}

export async function POST(request: NextRequest) {
  try {
    const alreadyCounted = request.cookies.get(COOKIE_NAME)?.value === "1";
    const command = alreadyCounted ? ["GET", VIEW_KEY] : ["INCR", VIEW_KEY];
    const result = await redisCommand(command);
    const count = Number(result?.result ?? 0);

    const response = NextResponse.json({ count, configured: Boolean(result) });

    if (!alreadyCounted && result) {
      response.cookies.set(COOKIE_NAME, "1", {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
      });
    }

    return response;
  } catch (error) {
    console.error("Visitor counter error:", error);
    return NextResponse.json({ count: 0, configured: false });
  }
}
