"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  CalendarDays,
  ExternalLink,
  LoaderCircle,
  PlayCircle,
  X,
} from "lucide-react";

export type ActivityMediaItem = {
  label: string;
  href: string;
  type: "youtube" | "photos-video" | "event";
  embedUrl?: string;
  poster?: {
    src: string;
    alt: string;
  };
};

type ActivityMediaModalProps = {
  open: boolean;
  organization: string;
  role: string;
  media: ActivityMediaItem | null;
  onClose: () => void;
};

export function ActivityMediaModal({
  open,
  organization,
  role,
  media,
  onClose,
}: ActivityMediaModalProps) {
  const [mounted, setMounted] = useState(false);
  const [photosVideo, setPhotosVideo] = useState<{
    videoUrl: string;
    posterUrl: string | null;
  } | null>(null);
  const [photosVideoLoading, setPhotosVideoLoading] = useState(false);
  const [photosVideoReady, setPhotosVideoReady] = useState(false);
  const [photosVideoError, setPhotosVideoError] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open || media?.type !== "photos-video") {
      setPhotosVideo(null);
      setPhotosVideoLoading(false);
      setPhotosVideoReady(false);
      setPhotosVideoError(null);
      return;
    }

    const controller = new AbortController();
    setPhotosVideo(null);
    setPhotosVideoReady(false);
    setPhotosVideoError(null);
    setPhotosVideoLoading(true);

    fetch(`/api/google-photos-video?url=${encodeURIComponent(media.href)}`, {
      signal: controller.signal,
    })
      .then(async (response) => {
        const payload = (await response.json()) as {
          videoUrl?: string;
          posterUrl?: string | null;
          error?: string;
        };

        if (!response.ok || !payload.videoUrl) {
          throw new Error(payload.error || "Unable to load this Google Photos video.");
        }

        setPhotosVideo({
          videoUrl: payload.videoUrl,
          posterUrl: payload.posterUrl ?? null,
        });
      })
      .catch((error: unknown) => {
        if (controller.signal.aborted) return;
        setPhotosVideoError(
          error instanceof Error
            ? error.message
            : "Unable to load this Google Photos video.",
        );
      })
      .finally(() => {
        if (!controller.signal.aborted) setPhotosVideoLoading(false);
      });

    return () => controller.abort();
  }, [open, media]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!mounted || !open || !media) return null;

  const isYouTube = media.type === "youtube";
  const isPhotosVideo = media.type === "photos-video";
  const isEvent = media.type === "event";

  return createPortal(
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/70 p-3 backdrop-blur-md sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${media.label} for ${role}`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="relative flex max-h-[94vh] w-full max-w-[1080px] flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-[var(--surface-strong)] shadow-[0_32px_100px_rgba(0,0,0,0.45)]">
        <div className="flex items-start justify-between gap-4 border-b hairline px-5 py-4 sm:px-6 sm:py-5">
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[var(--accent)]">
              {isEvent ? <CalendarDays size={14} /> : <PlayCircle size={14} />}
              Activity media
            </div>
            <h3 className="mt-1.5 font-display text-xl font-semibold tracking-[-0.03em] sm:text-2xl">
              {media.label}
            </h3>
            <p className="mt-1 text-xs text-[var(--muted)] sm:text-sm">
              {role} · {organization}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="focus-ring grid h-10 w-10 shrink-0 place-items-center rounded-full border hairline bg-[var(--surface)] text-[var(--text)] transition hover:-translate-y-0.5 hover:bg-[var(--bg)]"
            aria-label="Close media viewer"
          >
            <X size={18} />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto p-3 sm:p-5">
          {isYouTube ? (
            <div className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-black shadow-inner">
              <div className="aspect-video w-full">
                <iframe
                  src={media.embedUrl ?? media.href}
                  title={`${media.label} video`}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          ) : null}

          {isPhotosVideo ? (
            <div className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-black shadow-inner">
              <div className="relative grid min-h-[330px] place-items-center bg-black sm:min-h-[520px]">
                {photosVideoLoading ? (
                  <div className="flex flex-col items-center gap-3 text-center text-white/70">
                    <LoaderCircle size={30} className="animate-spin text-[var(--accent)]" />
                    <div>
                      <p className="text-sm font-semibold text-white">Preparing video</p>
                      <p className="mt-1 text-xs text-white/50">Resolving the public Google Photos media…</p>
                    </div>
                  </div>
                ) : null}

                {!photosVideoLoading && photosVideo ? (
                  <>
                    {!photosVideoReady && !photosVideoError ? (
                      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-black text-center text-white/70">
                        <LoaderCircle size={30} className="animate-spin text-[var(--accent)]" />
                        <div>
                          <p className="text-sm font-semibold text-white">Loading video</p>
                          <p className="mt-1 text-xs text-white/50">Preparing the stream for playback…</p>
                        </div>
                      </div>
                    ) : null}

                    <video
                      key={photosVideo.videoUrl}
                      src={photosVideo.videoUrl}
                      poster={photosVideo.posterUrl ?? undefined}
                      className={`max-h-[70vh] w-full bg-black object-contain transition-opacity ${
                        photosVideoReady && !photosVideoError ? "opacity-100" : "opacity-0"
                      }`}
                      controls
                      playsInline
                      preload="metadata"
                      onCanPlay={() => setPhotosVideoReady(true)}
                      onLoadedMetadata={(event) => {
                        if (Number.isFinite(event.currentTarget.duration) && event.currentTarget.duration > 0) {
                          setPhotosVideoReady(true);
                        }
                      }}
                      onError={() => {
                        setPhotosVideoReady(false);
                        setPhotosVideoError(
                          "This Google Photos video could not be prepared for inline playback.",
                        );
                      }}
                    >
                      Your browser does not support HTML video.
                    </video>
                  </>
                ) : null}

                {!photosVideoLoading && photosVideoError ? (
                  <div className="max-w-md px-6 py-12 text-center">
                    <PlayCircle size={34} className="mx-auto text-[var(--accent)]" />
                    <h4 className="mt-4 font-display text-lg font-semibold text-white">Video unavailable</h4>
                    <p className="mt-2 text-sm leading-6 text-white/55">
                      {photosVideoError}
                    </p>
                    <p className="mt-3 text-xs leading-5 text-white/35">
                      The gallery and other activity media remain available normally. A locally hosted MP4 can be used later if Google changes access to this shared video.
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
          ) : null}

          {isEvent ? (
            <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_280px]">
              <div className="relative min-h-[360px] overflow-hidden rounded-[1.35rem] border border-white/10 bg-black/90 sm:min-h-[520px]">
                {media.poster ? (
                  <Image
                    src={media.poster.src}
                    alt={media.poster.alt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 95vw, 720px"
                    className="object-contain p-2 sm:p-4"
                  />
                ) : (
                  <div className="grid h-full min-h-[360px] place-items-center p-8 text-center text-[var(--muted)]">
                    <CalendarDays size={36} className="mb-3 text-[var(--accent)]" />
                    Event preview
                  </div>
                )}
              </div>

              <aside className="flex flex-col justify-between rounded-[1.35rem] border hairline bg-[var(--surface)] p-5">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border hairline bg-[var(--bg)] text-[var(--accent)]">
                    <CalendarDays size={19} />
                  </div>
                  <p className="mt-5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[var(--accent)]">
                    Event source
                  </p>
                  <h4 className="mt-2 font-display text-lg font-semibold">{media.label}</h4>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    Previewed here inside the portfolio so the visitor does not have to leave the page just to see the event material.
                  </p>
                </div>

                <a
                  href={media.href}
                  className="focus-ring mt-6 inline-flex items-center justify-center gap-2 rounded-full border hairline bg-[var(--bg)] px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-[0.1em] text-[var(--text)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  Facebook source
                  <ExternalLink size={11} />
                </a>
              </aside>
            </div>
          ) : null}
        </div>
      </div>
    </div>,
    document.body,
  );
}
