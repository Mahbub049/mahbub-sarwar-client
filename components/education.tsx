"use client";

import { BookOpenText, GraduationCap } from "lucide-react";
import { useState } from "react";
import { education } from "@/lib/site-data";
import { academicRecords } from "@/lib/academic-records";
import { AcademicRecordModal } from "./academic-record-modal";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Education() {
  const [activeRecordId, setActiveRecordId] = useState<string | null>(null);
  const activeRecord = activeRecordId ? academicRecords[activeRecordId] : undefined;

  return (
    <section id="education" className="section-pad relative border-t hairline">
      <div className="site-shell relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow="Education"
            number="01"
            title="Academic Background"
            copy="Postgraduate and undergraduate training in Information and Communication Engineering."
          />
        </Reveal>

        <div className="relative">
          <div className="absolute bottom-0 left-[6.75rem] top-0 hidden w-px bg-[var(--line)] md:block" />
          {education.map((item, index) => (
            <Reveal key={item.degree} delay={index * 0.06}>
              <article className="group grid gap-4 border-b hairline py-8 last:border-b-0 md:grid-cols-[7rem_1fr_auto] md:items-start md:gap-8 md:py-10">
                <div className="relative flex items-center gap-3 md:flex-col md:items-center md:gap-3">
                  <p className="font-display text-xs font-bold tracking-[0.03em] text-[var(--muted)] md:text-center">
                    {item.period}
                  </p>

                  <div
                    className="group/logo relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[var(--line)] bg-white p-1.5 shadow-[0_8px_24px_rgba(15,23,42,.08)] transition duration-300 group-hover:-translate-y-0.5 group-hover:border-[color-mix(in_srgb,var(--accent)_28%,var(--line))] group-hover:shadow-[0_10px_28px_rgba(31,93,170,.12)] md:h-12 md:w-12"
                    title={item.institution}
                  >
                    <img
                      src={item.logo}
                      alt={`${item.institution} logo`}
                      loading="lazy"
                      className="h-full w-full object-contain"
                    />
                    <span className="pointer-events-none absolute -inset-1 -z-10 rounded-[1.15rem] bg-[color-mix(in_srgb,var(--accent)_10%,transparent)] opacity-0 blur-md transition-opacity duration-300 group-hover/logo:opacity-100" />
                  </div>

                  <span className="absolute -right-[2.03rem] top-1.5 hidden h-2.5 w-2.5 rounded-full border-2 border-[var(--bg)] bg-[var(--accent)] shadow-[0_0_0_4px_rgba(61,160,255,.12)] md:block" />
                </div>

                <div className="max-w-3xl">
                  <div className="mb-3 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[var(--accent)]">
                    <GraduationCap size={14} /> {item.level}
                  </div>
                  <h3 className="font-display text-xl font-semibold tracking-[-0.035em] transition group-hover:text-[var(--accent)] sm:text-2xl">
                    {item.degree}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.institution}</p>
                </div>

                <div className="flex flex-col items-start gap-2.5 md:items-end md:text-right">
                  <span className="inline-flex rounded-full border hairline bg-[var(--surface)] px-3 py-2 text-xs font-extrabold">
                    {item.result}
                  </span>

                  {item.academicRecordId ? (
                    <button
                      type="button"
                      onClick={() => setActiveRecordId(item.academicRecordId ?? null)}
                      aria-label={`View ${item.degree} transcript`}
                      className="focus-ring group/record inline-flex items-center gap-1.5 rounded-full border border-[color-mix(in_srgb,var(--accent)_24%,var(--line))] bg-[color-mix(in_srgb,var(--accent)_8%,var(--surface))] px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.08em] text-[var(--accent)] shadow-[0_10px_30px_rgba(31,93,170,.08)] transition hover:-translate-y-0.5 hover:border-[color-mix(in_srgb,var(--accent)_44%,var(--line))] hover:bg-[color-mix(in_srgb,var(--accent)_12%,var(--surface))]"
                    >
                      <BookOpenText size={13} />
                      Transcript
                    </button>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {activeRecord ? (
        <AcademicRecordModal
          record={activeRecord}
          open={Boolean(activeRecord)}
          onClose={() => setActiveRecordId(null)}
        />
      ) : null}
    </section>
  );
}
