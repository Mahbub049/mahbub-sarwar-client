"use client";

import { AnimatePresence, motion } from "motion/react";
import {
  Award,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import type { AcademicRecord } from "@/lib/academic-records";

function formatCredit(value: number) {
  return Number.isInteger(value) ? value.toFixed(0) : value.toFixed(1);
}

function gradeTone(letterGrade: string) {
  if (letterGrade === "A+") return "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300";
  if (letterGrade === "A") return "border-sky-500/20 bg-sky-500/10 text-sky-700 dark:text-sky-300";
  if (letterGrade === "A-") return "border-violet-500/20 bg-violet-500/10 text-violet-700 dark:text-violet-300";
  return "border-amber-500/20 bg-amber-500/10 text-amber-700 dark:text-amber-300";
}

export function AcademicRecordModal({
  record,
  open,
  onClose,
}: {
  record: AcademicRecord;
  open: boolean;
  onClose: () => void;
}) {
  const [activeSemester, setActiveSemester] = useState(record.semesters[0]?.id ?? "");

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  const semester = useMemo(
    () => record.semesters.find((item) => item.id === activeSemester) ?? record.semesters[0],
    [activeSemester, record.semesters],
  );

  const totalCourses = useMemo(
    () => record.semesters.reduce((count, item) => count + item.courses.length, 0),
    [record.semesters],
  );

  const chart = useMemo(() => {
    const width = 520;
    const height = 82;
    const paddingX = 24;
    const plotTop = 12;
    const plotBottom = 50;
    const lowestSemesterGpa = record.semesters.length
      ? Math.min(...record.semesters.map((item) => item.sgpa))
      : record.maxCgpa;
    const minGpa = Math.max(0, Math.floor((lowestSemesterGpa - 0.1) * 10) / 10);
    const maxGpa = record.maxCgpa;
    const gpaRange = Math.max(0.1, maxGpa - minGpa);
    const usableWidth = width - paddingX * 2;

    const points = record.semesters.map((item, index) => {
      const x =
        record.semesters.length <= 1
          ? width / 2
          : paddingX + (index / (record.semesters.length - 1)) * usableWidth;
      const normalized = Math.max(0, Math.min(1, (item.sgpa - minGpa) / gpaRange));
      const y = plotBottom - normalized * (plotBottom - plotTop);
      return { ...item, index, x, y };
    });

    return {
      width,
      height,
      plotTop,
      plotBottom,
      minGpa,
      maxGpa,
      gpaRange,
      points,
      polyline: points.map((point) => `${point.x},${point.y}`).join(" "),
    };
  }, [record.maxCgpa, record.semesters]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/60 p-0 backdrop-blur-md sm:p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) onClose();
          }}
          role="dialog"
          aria-modal="true"
          aria-label={`${record.shortDegree} academic record`}
        >
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.99 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex h-[100dvh] w-full flex-col overflow-hidden border-[var(--line)] bg-[var(--bg)] shadow-2xl sm:h-[min(92dvh,900px)] sm:max-w-[1320px] sm:rounded-[2rem] sm:border"
          >
            <div className="pointer-events-none absolute inset-0 opacity-70 topography" />
            <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-24 top-20 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />

            <header className="relative z-10 shrink-0 border-b hairline bg-[color:var(--surface-strong)]/90 px-4 py-4 backdrop-blur-2xl sm:px-7 sm:py-5">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="mb-2 flex flex-wrap items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[var(--accent)]">
                    <span className="inline-flex items-center gap-1.5 rounded-full border hairline bg-[var(--surface)] px-2.5 py-1.5">
                      <GraduationCap size={13} /> Academic Record
                    </span>
                    <span className="hidden sm:inline">{record.sourceLabel ?? "Verified from official transcript"}</span>
                  </div>
                  <h2 className="font-display text-xl font-semibold tracking-[-0.035em] sm:text-2xl lg:text-[1.75rem]">
                    {record.shortDegree}
                  </h2>
                  <p className="mt-1 text-xs text-[var(--muted)] sm:text-sm">{record.university}</p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="focus-ring grid h-10 w-10 shrink-0 place-items-center rounded-full border hairline bg-[var(--surface)] transition hover:bg-[var(--surface-strong)]"
                  aria-label="Close academic record"
                >
                  <X size={18} />
                </button>
              </div>
            </header>

            <div className="relative z-10 min-h-0 flex-1 overflow-y-auto overscroll-contain">
              <div className="mx-auto w-full max-w-[1240px] px-4 py-5 sm:px-7 sm:py-7">
                <section className="overflow-hidden rounded-[1.6rem] border hairline bg-[var(--surface)] shadow-[0_18px_70px_rgba(38,55,80,.08)] backdrop-blur-xl">
                  <div className="grid gap-5 p-5 sm:p-6 lg:grid-cols-[1.5fr_.75fr] lg:items-start">
                    <div>
                      <div className="mb-4 flex items-center gap-3">
                        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-[color-mix(in_srgb,var(--accent)_22%,var(--line))] bg-[color-mix(in_srgb,var(--accent)_10%,transparent)] text-[var(--accent)]">
                          <BookOpen size={22} />
                        </div>
                        <div>
                          <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[var(--muted)]">Transcript Overview</p>
                          <h3 className="mt-1 font-display text-lg font-semibold tracking-[-0.025em] sm:text-xl">{record.degree}</h3>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                        {[
                          ["CGPA", `${record.cgpa.toFixed(2)} / ${record.maxCgpa.toFixed(2)}`],
                          ["Credits", record.creditsRequired != null ? `${formatCredit(record.creditsEarned)} / ${formatCredit(record.creditsRequired)}` : `${formatCredit(record.creditsEarned)} earned`],
                          ["Semesters", String(record.semesters.length)],
                          ["Courses", String(totalCourses)],
                        ].map(([label, value]) => (
                          <div key={label} className="rounded-2xl border hairline bg-[var(--surface-strong)] px-3 py-3.5">
                            <p className="text-[9px] font-extrabold uppercase tracking-[0.15em] text-[var(--muted)]">{label}</p>
                            <p className="mt-1.5 font-display text-lg font-bold tracking-[-0.035em]">{value}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[1.3rem] border hairline bg-[var(--surface-strong)] p-4">
                      <div className="mb-1.5 flex items-start justify-between gap-3">
                        <div>
                          <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-[var(--muted)]">Academic Progress</p>
                          <p className="mt-1 font-display text-base font-semibold">Semester GPA trend</p>
                        </div>
                        {record.status === "Degree Awarded" ? (
                          <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[9px] font-extrabold text-emerald-700 dark:text-emerald-300">
                            <CheckCircle2 size={11} /> {record.status}
                          </span>
                        ) : (
                          <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-sky-500/20 bg-sky-500/10 px-2.5 py-1 text-[9px] font-extrabold text-sky-700 dark:text-sky-300">
                            <Sparkles size={11} /> {record.status}
                          </span>
                        )}
                      </div>

                      <div className="relative -mx-1 mt-1">
                        <svg
                          viewBox={`0 0 ${chart.width} ${chart.height}`}
                          className="h-[76px] w-full overflow-visible"
                          role="group"
                          aria-label={`Semester GPA trend from ${record.semesters[0]?.sgpa.toFixed(2)} to ${record.semesters[record.semesters.length - 1]?.sgpa.toFixed(2)}`}
                        >
                          {[chart.minGpa, chart.minGpa + chart.gpaRange / 2, chart.maxGpa].map((value, index) => {
                            const y = chart.plotBottom - ((value - chart.minGpa) / chart.gpaRange) * (chart.plotBottom - chart.plotTop);
                            return (
                              <line
                                key={value}
                                x1="24"
                                x2={chart.width - 24}
                                y1={y}
                                y2={y}
                                stroke="var(--line)"
                                strokeWidth="1"
                                strokeDasharray={index === 1 ? "3 5" : undefined}
                                opacity={index === 1 ? 0.55 : 0.8}
                              />
                            );
                          })}

                          <polyline
                            points={chart.polyline}
                            fill="none"
                            stroke="var(--accent)"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />

                          {chart.points.map((point) => {
                            const selected = point.id === activeSemester;
                            return (
                              <g
                                key={point.id}
                                role="button"
                                tabIndex={0}
                                className="cursor-pointer outline-none"
                                aria-label={`Open ${point.label}, SGPA ${point.sgpa.toFixed(2)}`}
                                onClick={() => setActiveSemester(point.id)}
                                onKeyDown={(event) => {
                                  if (event.key === "Enter" || event.key === " ") {
                                    event.preventDefault();
                                    setActiveSemester(point.id);
                                  }
                                }}
                              >
                                {selected ? (
                                  <circle
                                    cx={point.x}
                                    cy={point.y}
                                    r="8"
                                    fill="color-mix(in srgb, var(--accent) 15%, transparent)"
                                    stroke="var(--accent)"
                                    strokeWidth="1"
                                  />
                                ) : null}
                                <circle
                                  cx={point.x}
                                  cy={point.y}
                                  r={selected ? 4.5 : 3.5}
                                  fill="var(--accent)"
                                  stroke="var(--surface-strong)"
                                  strokeWidth="2"
                                />
                                <text
                                  x={point.x}
                                  y={Math.max(9, point.y - 9)}
                                  textAnchor="middle"
                                  fill={selected ? "var(--accent)" : "var(--muted)"}
                                  fontSize="8.5"
                                  fontWeight="800"
                                >
                                  {point.sgpa.toFixed(2)}
                                </text>
                                <text
                                  x={point.x}
                                  y="72"
                                  textAnchor="middle"
                                  fill={selected ? "var(--accent)" : "var(--muted)"}
                                  fontSize="8.5"
                                  fontWeight="800"
                                >
                                  S{point.index + 1}
                                </text>
                              </g>
                            );
                          })}
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="grid border-t hairline sm:grid-cols-2 lg:grid-cols-4">
                    {[
                      [CalendarDays, "Session", record.session],
                      [Award, "Faculty", record.faculty],
                      [BookOpen, "Medium", record.medium],
                      record.resultPublished
                        ? [Sparkles, "Published", record.resultPublished]
                        : [Sparkles, "Batch", record.batch ?? "Current"],
                    ].map(([Icon, label, value], index) => {
                      const IconComponent = Icon as typeof CalendarDays;
                      return (
                        <div key={String(label)} className={`flex gap-3 px-5 py-4 ${index > 0 ? "sm:border-l sm:hairline" : ""} ${index > 1 ? "border-t hairline sm:border-t-0" : index === 1 ? "border-t hairline sm:border-t-0" : ""}`}>
                          <IconComponent size={16} className="mt-0.5 shrink-0 text-[var(--accent)]" />
                          <div className="min-w-0">
                            <p className="text-[9px] font-extrabold uppercase tracking-[0.14em] text-[var(--muted)]">{String(label)}</p>
                            <p className="mt-1 text-xs font-semibold leading-5">{String(value)}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>

                <section className="mt-5 grid gap-4 lg:grid-cols-[250px_1fr] lg:gap-5">
                  <aside className="lg:sticky lg:top-0 lg:self-start">
                    <div className="rounded-[1.4rem] border hairline bg-[var(--surface)] p-2.5 backdrop-blur-xl">
                      <p className="px-3 pb-2 pt-2 text-[9px] font-extrabold uppercase tracking-[0.16em] text-[var(--muted)]">Semesters</p>
                      <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-4 lg:grid-cols-1">
                        {record.semesters.map((item, index) => {
                          const selected = item.id === activeSemester;
                          return (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => setActiveSemester(item.id)}
                              className={`focus-ring group flex min-w-0 items-center justify-between gap-2 rounded-xl border px-3 py-2.5 text-left transition ${
                                selected
                                  ? "border-[color-mix(in_srgb,var(--accent)_35%,var(--line))] bg-[color-mix(in_srgb,var(--accent)_10%,var(--surface))]"
                                  : "border-transparent hover:border-[var(--line)] hover:bg-[var(--surface-strong)]"
                              }`}
                            >
                              <div className="min-w-0">
                                <p className={`text-[10px] font-extrabold uppercase tracking-[0.08em] ${selected ? "text-[var(--accent)]" : "text-[var(--muted)]"}`}>Semester {index + 1}</p>
                                <p className="mt-0.5 truncate text-xs font-semibold">SGPA {item.sgpa.toFixed(2)}</p>
                              </div>
                              <ChevronRight size={14} className={`shrink-0 transition ${selected ? "translate-x-0 text-[var(--accent)]" : "-translate-x-1 text-[var(--muted)] group-hover:translate-x-0"}`} />
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </aside>

                  {semester ? (
                    <motion.div
                      key={semester.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden rounded-[1.5rem] border hairline bg-[var(--surface)] backdrop-blur-xl"
                    >
                      <div className="flex flex-col gap-3 border-b hairline p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
                        <div>
                          <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-[var(--accent)]">{semester.session}</p>
                          <h3 className="mt-1 font-display text-lg font-semibold tracking-[-0.025em] sm:text-xl">{semester.label}</h3>
                        </div>
                        <div className="flex gap-2">
                          <span className="rounded-full border hairline bg-[var(--surface-strong)] px-3 py-1.5 text-[10px] font-extrabold">{formatCredit(semester.credits)} Credits</span>
                          <span className="rounded-full border border-[color-mix(in_srgb,var(--accent)_22%,var(--line))] bg-[color-mix(in_srgb,var(--accent)_10%,transparent)] px-3 py-1.5 text-[10px] font-extrabold text-[var(--accent)]">SGPA {semester.sgpa.toFixed(2)}</span>
                        </div>
                      </div>

                      <div className="hidden overflow-x-auto sm:block">
                        <table className="w-full min-w-[720px] border-collapse text-left">
                          <thead>
                            <tr className="border-b hairline bg-[var(--surface-strong)] text-[9px] font-extrabold uppercase tracking-[0.13em] text-[var(--muted)]">
                              <th className="px-4 py-3 sm:px-5">Course</th>
                              <th className="px-4 py-3">Title</th>
                              <th className="px-4 py-3 text-center">Credit</th>
                              <th className="px-4 py-3 text-center">Grade</th>
                              <th className="px-4 py-3 text-center">GP</th>
                            </tr>
                          </thead>
                          <tbody>
                            {semester.courses.map((course) => (
                              <tr key={course.code} className="border-b hairline last:border-b-0 transition hover:bg-[var(--surface-strong)]/70">
                                <td className="px-4 py-3.5 sm:px-5">
                                  <span className="font-mono text-[11px] font-bold text-[var(--accent)]">{course.code}</span>
                                </td>
                                <td className="px-4 py-3.5 text-xs font-semibold leading-5">{course.title}</td>
                                <td className="px-4 py-3.5 text-center text-xs font-semibold text-[var(--muted)]">{formatCredit(course.credit)}</td>
                                <td className="px-4 py-3.5 text-center">
                                  <span className={`inline-flex min-w-10 justify-center rounded-full border px-2.5 py-1 text-[10px] font-extrabold ${gradeTone(course.letterGrade)}`}>{course.letterGrade}</span>
                                </td>
                                <td className="px-4 py-3.5 text-center text-xs font-bold">{course.gradePoint.toFixed(2)}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <div className="divide-y divide-[var(--line)] sm:hidden">
                        {semester.courses.map((course) => (
                          <article key={course.code} className="p-4">
                            <div className="flex items-start justify-between gap-3">
                              <div className="min-w-0">
                                <p className="font-mono text-[10px] font-bold text-[var(--accent)]">{course.code}</p>
                                <p className="mt-1.5 text-[13px] font-semibold leading-5">{course.title}</p>
                              </div>
                              <span className={`inline-flex shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-extrabold ${gradeTone(course.letterGrade)}`}>{course.letterGrade}</span>
                            </div>
                            <div className="mt-3 flex items-center gap-2 text-[10px] font-bold text-[var(--muted)]">
                              <span>{formatCredit(course.credit)} Credit{course.credit === 1 ? "" : "s"}</span>
                              <span>•</span>
                              <span>Grade Point {course.gradePoint.toFixed(2)}</span>
                            </div>
                          </article>
                        ))}
                      </div>
                    </motion.div>
                  ) : null}
                </section>

                <p className="mt-4 text-center text-[10px] leading-5 text-[var(--muted)]">
                  This is a portfolio presentation of the academic record, not a replacement for the official university transcript.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
