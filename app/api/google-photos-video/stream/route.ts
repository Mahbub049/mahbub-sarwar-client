import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const revalidate = 0;

const GOOGLE_USER_CONTENT_HOST_RE = /(^|\.)googleusercontent\.com$/i;

function isAllowedVideoUrl(value: string) {
  try {
    const url = new URL(value);
    return (
      url.protocol === "https:" &&
      GOOGLE_USER_CONTENT_HOST_RE.test(url.hostname) &&
      /(?:=dv)(?:$|[?#])/.test(url.toString())
    );
  } catch {
    return false;
  }
}

export async function GET(request: NextRequest) {
  const source = request.nextUrl.searchParams.get("source") ?? "";

  if (!isAllowedVideoUrl(source)) {
    return NextResponse.json({ error: "Invalid video source." }, { status: 400 });
  }

  const range = request.headers.get("range");
  const headers = new Headers({
    Accept: "video/*,*/*;q=0.8",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/152 Safari/537.36",
  });

  if (range) headers.set("Range", range);

  try {
    const upstream = await fetch(source, {
      headers,
      redirect: "follow",
      cache: "no-store",
    });

    if (!upstream.ok && upstream.status !== 206) {
      return NextResponse.json(
        { error: "Unable to stream the Google Photos video." },
        { status: 502 },
      );
    }

    const responseHeaders = new Headers();
    const passthrough = [
      "content-type",
      "content-length",
      "content-range",
      "accept-ranges",
      "etag",
      "last-modified",
    ];

    for (const name of passthrough) {
      const value = upstream.headers.get(name);
      if (value) responseHeaders.set(name, value);
    }

    if (!responseHeaders.has("content-type")) {
      responseHeaders.set("content-type", "video/mp4");
    }
    responseHeaders.set("cache-control", "private, no-store");

    return new NextResponse(upstream.body, {
      status: upstream.status,
      headers: responseHeaders,
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to stream the Google Photos video." },
      { status: 502 },
    );
  }
}
