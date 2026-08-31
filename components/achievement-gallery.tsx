"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { AlertTriangle, ChevronLeft, ChevronRight, Images, X } from "lucide-react";

type GalleryPhoto = {
  src: string;
  alt: string;
};

type AchievementGalleryModalProps = {
  open: boolean;
  eyebrow?: string;
  title: string;
  issuer: string;
  photos: GalleryPhoto[];
  onClose: () => void;
};

export function AchievementGalleryModal({
  open,
  eyebrow = "Award gallery",
  title,
  issuer,
  photos,
  onClose,
}: AchievementGalleryModalProps) {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [failedSources, setFailedSources] = useState<Set<string>>(() => new Set());

  const galleryKey = useMemo(
    () => `${title}::${photos.map((photo) => photo.src).join("|")}`,
    [photos, title],
  );

  const photoCount = photos.length;
  const safeActiveIndex =
    photoCount > 0 ? Math.min(Math.max(activeIndex, 0), photoCount - 1) : 0;
  const activePhoto = photos[safeActiveIndex] ?? null;
  const hasMultiple = photoCount > 1;
  const activePhotoFailed = activePhoto ? failedSources.has(activePhoto.src) : false;

  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset gallery-local state whenever a different gallery is opened.
  // The clamped index above also protects the very first render before this
  // effect runs (for example: close photo 2/2, then open a 1-photo gallery).
  useEffect(() => {
    if (!open) return;
    setActiveIndex(0);
    setFailedSources(new Set());
  }, [galleryKey, open]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (photoCount > 1 && event.key === "ArrowLeft") {
        setActiveIndex((current) => (current - 1 + photoCount) % photoCount);
      }
      if (photoCount > 1 && event.key === "ArrowRight") {
        setActiveIndex((current) => (current + 1) % photoCount);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose, photoCount]);

  if (!mounted || !open || photoCount === 0) return null;

  const goPrevious = () => {
    if (photoCount < 2) return;
    setActiveIndex((current) => (current - 1 + photoCount) % photoCount);
  };

  const goNext = () => {
    if (photoCount < 2) return;
    setActiveIndex((current) => (current + 1) % photoCount);
  };

  const markPhotoFailed = (src: string) => {
    setFailedSources((current) => {
      if (current.has(src)) return current;
      const next = new Set(current);
      next.add(src);
      return next;
    });
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/70 p-3 backdrop-blur-md sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} photo gallery`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="relative flex max-h-[94vh] w-full max-w-[1120px] flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-[var(--surface-strong)] shadow-[0_32px_100px_rgba(0,0,0,0.45)]">
        <div className="flex items-start justify-between gap-4 border-b hairline px-5 py-4 sm:px-6 sm:py-5">
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[var(--accent)]">
              <Images size={14} />
              {eyebrow}
            </div>
            <h3 className="mt-1.5 truncate font-display text-xl font-semibold tracking-[-0.03em] sm:text-2xl">
              {title}
            </h3>
            <p className="mt-1 text-xs text-[var(--muted)] sm:text-sm">{issuer}</p>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <span className="hidden rounded-full border hairline bg-[var(--surface)] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[var(--muted)] sm:inline-flex">
              {safeActiveIndex + 1} / {photoCount}
            </span>
            <button
              type="button"
              onClick={onClose}
              className="focus-ring grid h-10 w-10 place-items-center rounded-full border hairline bg-[var(--surface)] text-[var(--text)] transition hover:-translate-y-0.5 hover:bg-[var(--bg)]"
              aria-label="Close photo gallery"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto p-3 sm:p-5">
          <div className="relative h-[56vh] min-h-[340px] overflow-hidden rounded-[1.35rem] border border-white/10 bg-black/90 sm:h-[64vh] sm:min-h-[430px]">
            {activePhoto && !activePhotoFailed ? (
              <Image
                key={`${galleryKey}:${activePhoto.src}`}
                src={activePhoto.src}
                alt={activePhoto.alt}
                fill
                priority
                unoptimized
                sizes="(max-width: 1200px) 95vw, 1080px"
                className="object-contain p-2 sm:p-4"
                onError={() => markPhotoFailed(activePhoto.src)}
              />
            ) : (
              <div className="absolute inset-0 grid place-items-center p-8 text-center text-white/75">
                <div className="max-w-sm">
                  <AlertTriangle className="mx-auto text-[var(--accent)]" size={30} />
                  <p className="mt-3 text-sm font-semibold text-white">Photo could not be loaded</p>
                  <p className="mt-1 text-xs leading-5 text-white/50">
                    The gallery stayed open safely. Close it and try again after confirming the image file is deployed.
                  </p>
                </div>
              </div>
            )}

            {hasMultiple ? (
              <>
                <button
                  type="button"
                  onClick={goPrevious}
                  className="focus-ring absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/55 text-white shadow-lg backdrop-blur transition hover:scale-105 hover:bg-black/75 sm:left-5"
                  aria-label="Previous photo"
                >
                  <ChevronLeft size={21} />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="focus-ring absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/55 text-white shadow-lg backdrop-blur transition hover:scale-105 hover:bg-black/75 sm:right-5"
                  aria-label="Next photo"
                >
                  <ChevronRight size={21} />
                </button>
              </>
            ) : null}

            <span className="absolute bottom-3 right-3 rounded-full border border-white/15 bg-black/55 px-3 py-1.5 text-[10px] font-bold text-white/85 backdrop-blur sm:hidden">
              {safeActiveIndex + 1} / {photoCount}
            </span>
          </div>

          {hasMultiple ? (
            <div className="mt-3 flex gap-2 overflow-x-auto pb-1 sm:mt-4 sm:justify-center">
              {photos.map((photo, index) => {
                const failed = failedSources.has(photo.src);

                return (
                  <button
                    key={photo.src}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`focus-ring relative h-16 w-24 shrink-0 overflow-hidden rounded-xl border-2 transition sm:h-20 sm:w-28 ${
                      index === safeActiveIndex
                        ? "border-[var(--accent)] ring-2 ring-[var(--accent)] ring-offset-2 ring-offset-[var(--surface-strong)]"
                        : "border-transparent opacity-65 hover:opacity-100"
                    }`}
                    aria-label={`View photo ${index + 1}`}
                    aria-current={index === safeActiveIndex ? "true" : undefined}
                  >
                    {!failed ? (
                      <Image
                        src={photo.src}
                        alt=""
                        fill
                        unoptimized
                        sizes="112px"
                        className="object-cover"
                        onError={() => markPhotoFailed(photo.src)}
                      />
                    ) : (
                      <span className="absolute inset-0 grid place-items-center bg-black/80 text-white/60">
                        <AlertTriangle size={15} />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </div>,
    document.body,
  );
}
