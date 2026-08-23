"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { BriefcaseBusiness, Check, Clock3 } from "lucide-react";
import { experience } from "@/lib/site-data";
import { SectionHeading } from "./section-heading";

export function Experience() {
  const [active, setActive] = useState(0);
  const item = experience[active];

  return (
    <section id="experience" className="section-pad relative border-t hairline">
      <div className="site-shell">
        <SectionHeading
          eyebrow="Experience"
          number="02"
          title="Professional Experience"
          copy="University teaching, academic support, and full-stack software development."
        />

        <div className="grid gap-5 lg:grid-cols-[0.56fr_1.44fr]">
          <div className="self-start rounded-[1.5rem] border hairline bg-[var(--surface)] p-3 backdrop-blur-xl">
            {experience.map((entry, index) => {
              const selected = active === index;
              return (
                <button
                  type="button"
                  key={`${entry.role}-${entry.organization}`}
                  onClick={() => setActive(index)}
                  className={`focus-ring group relative flex w-full gap-3 rounded-[1.1rem] p-4 text-left transition ${selected ? "bg-[var(--surface-strong)] shadow-[0_12px_34px_rgba(0,0,0,.08)]" : "hover:bg-[var(--surface-strong)]"}`}
                >
                  <span className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full transition ${selected ? "bg-[var(--accent)] shadow-[0_0_0_5px_rgba(61,160,255,.12)]" : "bg-slate-400/40"}`} />
                  <span className="min-w-0 flex-1">
                    <span className="font-display text-[15px] font-semibold leading-5 tracking-[-0.02em]">{entry.role}</span>
                    <span className="mt-2 block text-[9px] font-extrabold uppercase tracking-[0.14em] text-[var(--muted)]">{entry.period}</span>
                    <span className="mt-1 block text-xs leading-5 text-[var(--muted)]">{entry.organization}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative min-h-[430px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#070b16] p-6 text-white shadow-[0_28px_80px_rgba(0,0,0,.22)] sm:p-8 lg:p-10">
            <div className="topography pointer-events-none absolute inset-0 opacity-20" />
            <div className="spectral-beam pointer-events-none absolute -right-24 top-20 h-20 w-[70%] -rotate-12 opacity-60" />

            <AnimatePresence mode="wait">
              <motion.article
                key={`${item.role}-${item.organization}`}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28 }}
                className="relative z-10"
              >
                <div className="grid gap-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
                  <div className="min-w-0">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-cyan-200">
                      <BriefcaseBusiness size={13} /> {item.status}
                    </span>
                    <h3 className="mt-5 font-display text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">{item.role}</h3>
                    <p className="mt-2 font-display text-lg font-medium text-cyan-300">{item.organization}</p>
                  </div>

                  <div className="min-w-[150px] sm:text-right">
                    <p className="text-xs font-bold text-slate-400">{item.period}</p>
                    <div className="mt-2 flex items-center gap-2 sm:justify-end">
                      <Clock3 size={14} className="text-cyan-300" />
                      <p className="font-display text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">{item.duration}</p>
                    </div>
                    <p className="mt-1 text-[9px] font-extrabold uppercase tracking-[0.18em] text-slate-500">Total tenure</p>
                  </div>
                </div>

                <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">{item.summary}</p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {item.highlights.map((highlight) => (
                    <div key={highlight} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                      <div className="flex gap-3">
                        <Check size={15} className="mt-1 shrink-0 text-cyan-300" />
                        <p className="text-sm leading-6 text-slate-300">{highlight}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
