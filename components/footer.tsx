"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Eye, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { site } from "@/lib/site-data";

export function Footer() {
  const [visitors, setVisitors] = useState<number | null>(null);

  useEffect(() => {
    let active = true;

    fetch("/api/views", { method: "POST" })
      .then((response) => response.json())
      .then((data: { count?: number; configured?: boolean }) => {
        if (active && data.configured && typeof data.count === "number") {
          setVisitors(data.count);
        }
      })
      .catch(() => undefined);

    return () => {
      active = false;
    };
  }, []);

  return (
    <footer className="border-t hairline pb-8 pt-4">
      <div className="site-shell">
        <div className="flex flex-col gap-6 rounded-[1.5rem] px-1 py-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-2xl font-semibold tracking-[-0.04em]">
              {site.shortName}<span className="text-[var(--accent)]">.</span>
            </p>
            <p className="mt-2 max-w-md text-sm leading-6 text-[var(--muted)]">
              Lecturer · Researcher · Software Engineer working across computing education, software systems, and AI research.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--muted)]">
                © 2026 {site.shortName}. All rights reserved.
              </p>
              {visitors !== null ? (
                <span className="inline-flex items-center gap-1.5 rounded-full border hairline bg-[var(--surface)] px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.12em] text-[var(--muted)]">
                  <Eye size={12} className="text-[var(--accent)]" />
                  {visitors.toLocaleString()} visitors
                </span>
              ) : null}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="focus-ring grid h-10 w-10 place-items-center rounded-full border hairline bg-[var(--surface)] text-[var(--muted)] transition hover:-translate-y-1 hover:text-[var(--text)]"><FaLinkedinIn size={16} /></a>
            <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="focus-ring grid h-10 w-10 place-items-center rounded-full border hairline bg-[var(--surface)] text-[var(--muted)] transition hover:-translate-y-1 hover:text-[var(--text)]"><FaGithub size={16} /></a>
            <a href={`mailto:${site.email}`} aria-label="Email" className="focus-ring grid h-10 w-10 place-items-center rounded-full border hairline bg-[var(--surface)] text-[var(--muted)] transition hover:-translate-y-1 hover:text-[var(--text)]"><Mail size={16} /></a>
            <a href="#about" aria-label="Back to top" className="btn-primary focus-ring ml-2 rounded-full px-4 py-2.5 text-xs font-extrabold">Top <ArrowUp size={14} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
