import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const revalidate = 0;

type ResolvedVideo = {
  sourceUrl: string;
  posterUrl: string | null;
};

const ALLOWED_HOSTS = new Set(["photos.app.goo.gl", "photos.google.com"]);
const GOOGLE_USER_CONTENT_HOST_RE = /(^|\.)googleusercontent\.com$/i;

function isAllowedShareUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" && ALLOWED_HOSTS.has(url.hostname);
  } catch {
    return false;
  }
}

function normalizeGooglePhotoHtml(html: string) {
  return html
    .replace(/\\u003d/gi, "=")
    .replace(/\\u0026/gi, "&")
    .replace(/\\u002f/gi, "/")
    .replace(/\\\//g, "/")
    .replace(/&amp;/g, "&");
}

function getGoogleusercontentCandidates(html: string) {
  const normalized = normalizeGooglePhotoHtml(html);
  const matches = normalized.match(/https:\/\/[A-Za-z0-9.-]*googleusercontent\.com\/[A-Za-z0-9_~!$&'()*+,;=:@%./?\-]+/g) ?? [];
  const unique = new Set<string>();

  for (const raw of matches) {
    try {
      const decoded = decodeURIComponent(raw.replace(/["'<>]+$/g, ""));
      const url = new URL(decoded);
      if (!GOOGLE_USER_CONTENT_HOST_RE.test(url.hostname)) continue;

      // Google Photos often appends rendering parameters after the media id.
      // The same base URL with =dv serves video bytes for public video items.
      const base = url.toString().replace(/=(?:w\d+[^?#]*|h\d+[^?#]*|s\d+[^?#]*|d|dv)(?=$|[?#])/i, "");
      unique.add(base);
    } catch {
      // Ignore malformed candidates embedded in page scripts.
    }
  }

  return [...unique];
}

async function resolvesToVideo(url: string) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 6500);

  try {
    const response = await fetch(`${url}=dv`, {
      method: "GET",
      headers: {
        Range: "bytes=0-1",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/152 Safari/537.36",
      },
      redirect: "follow",
      cache: "no-store",
      signal: controller.signal,
    });

    const type = response.headers.get("content-type") ?? "";
    return response.ok && type.toLowerCase().startsWith("video/");
  } catch {
    return false;
  } finally {
    clearTimeout(timeout);
  }
}

async function resolvePublicGooglePhotosVideo(shareUrl: string): Promise<ResolvedVideo | null> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12000);

  try {
    const response = await fetch(shareUrl, {
      headers: {
        Accept: "text/html,application/xhtml+xml",
        "Accept-Language": "en-US,en;q=0.9",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/152 Safari/537.36",
      },
      redirect: "follow",
      cache: "no-store",
      signal: controller.signal,
    });

    if (!response.ok) return null;

    const finalUrl = new URL(response.url);
    if (!ALLOWED_HOSTS.has(finalUrl.hostname)) return null;

    const html = await response.text();
    const candidates = getGoogleusercontentCandidates(html).slice(0, 18);

    // Shared pages contain poster/thumbnail URLs for their media. For a video,
    // the same base URL with Google's =dv suffix resolves to actual video bytes.
    // Probe a few candidates concurrently so opening the modal stays responsive.
    for (let start = 0; start < candidates.length; start += 6) {
      const batch = candidates.slice(start, start + 6);
      const checks = await Promise.all(
        batch.map(async (candidate) => ({
          candidate,
          isVideo: await resolvesToVideo(candidate),
        })),
      );
      const match = checks.find((item) => item.isVideo);
      if (match) {
        return {
          sourceUrl: `${match.candidate}=dv`,
          posterUrl: `${match.candidate}=w1600-h900-no`,
        };
      }
    }

    return null;
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

export async function GET(request: NextRequest) {
  const shareUrl = request.nextUrl.searchParams.get("url") ?? "";

  if (!isAllowedShareUrl(shareUrl)) {
    return NextResponse.json(
      { error: "Invalid Google Photos share URL." },
      { status: 400 },
    );
  }

  const video = await resolvePublicGooglePhotosVideo(shareUrl);

  if (!video) {
    return NextResponse.json(
      {
        error:
          "The shared Google Photos page did not expose a playable public video.",
      },
      { status: 404 },
    );
  }

  return NextResponse.json(
    {
      videoUrl: `/api/google-photos-video/stream?source=${encodeURIComponent(video.sourceUrl)}`,
      posterUrl: video.posterUrl,
    },
    {
      headers: {
        "Cache-Control": "private, max-age=300",
      },
    },
  );
}
