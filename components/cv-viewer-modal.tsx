"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Download, FileText, X } from "lucide-react";
import { site } from "@/lib/site-data";

type CvViewerModalProps = {
  open: boolean;
  onClose: () => void;
};

export function CvViewerModal({ open, onClose }: CvViewerModalProps) {
  const [mounted, setMounted] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => setMounted(true), []);

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

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-5 md:p-8"
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.22 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cv-viewer-title"
        >
          <motion.button
            type="button"
            aria-label="Close CV viewer"
            className="absolute inset-0 cursor-default bg-slate-950/70 backdrop-blur-md"
            onClick={onClose}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.section
            initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.975 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.985 }}
            transition={{ duration: reduceMotion ? 0 : 0.34, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex h-[min(90vh,920px)] w-full max-w-[1180px] flex-col overflow-hidden rounded-[1.75rem] border hairline bg-[var(--surface-strong)] shadow-[0_35px_120px_rgba(0,0,0,0.42)]"
          >
            <header className="flex shrink-0 items-center justify-between gap-4 border-b hairline px-4 py-3.5 sm:px-6 sm:py-4">
              <div className="flex min-w-0 items-center gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border hairline bg-[var(--surface)] text-[var(--accent)]">
                  <FileText size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-[var(--accent)]">Curriculum Vitae</p>
                  <h2 id="cv-viewer-title" className="truncate font-display text-base font-semibold sm:text-lg">
                    Mahbub Sarwar · CV
                  </h2>
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={site.cv}
                  download="Mahbub-Sarwar-CV.pdf"
                  className="btn-primary focus-ring inline-flex h-10 items-center gap-2 rounded-full px-3.5 text-xs font-extrabold sm:px-4"
                >
                  <Download size={15} />
                  <span className="hidden sm:inline">Download CV</span>
                  <span className="sm:hidden">Download</span>
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close CV viewer"
                  className="focus-ring grid h-10 w-10 place-items-center rounded-full border hairline bg-[var(--surface)] text-[var(--muted)] transition hover:bg-[var(--surface-strong)] hover:text-[var(--text)]"
                >
                  <X size={18} />
                </button>
              </div>
            </header>

            <div className="min-h-0 flex-1 bg-slate-950/95 p-2 sm:p-3">
              <div className="h-full overflow-hidden rounded-[1.15rem] bg-white">
                <iframe
                  src={`${site.cv}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
                  title="Mahbub Sarwar CV PDF viewer"
                  className="h-full w-full border-0 bg-white"
                />
              </div>
            </div>

            <div className="hidden shrink-0 items-center justify-between gap-4 border-t hairline px-6 py-2.5 text-[10px] font-semibold text-[var(--muted)] sm:flex">
              <span>Use the PDF toolbar to zoom, search, print, or change pages.</span>
              <span>Press Esc to close</span>
            </div>
          </motion.section>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
