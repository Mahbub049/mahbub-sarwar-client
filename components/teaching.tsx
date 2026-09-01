"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  BookOpenCheck,
  ChevronDown,
  Code2,
  Database,
  Laptop,
  RadioTower,
  ShoppingBag,
  Users,
  Workflow,
} from "lucide-react";
import { teaching } from "@/lib/site-data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const courseVisuals = [
  { icon: Code2, tone: "from-cyan-400/18 via-blue-500/10 to-transparent", iconTone: "text-cyan-400" },
  { icon: RadioTower, tone: "from-violet-500/18 via-indigo-500/10 to-transparent", iconTone: "text-violet-400" },
  { icon: Laptop, tone: "from-blue-500/18 via-cyan-500/10 to-transparent", iconTone: "text-blue-400" },
  { icon: Workflow, tone: "from-indigo-500/18 via-blue-500/10 to-transparent", iconTone: "text-indigo-400" },
  { icon: Database, tone: "from-violet-500/18 via-fuchsia-500/8 to-transparent", iconTone: "text-violet-400" },
  { icon: ShoppingBag, tone: "from-emerald-400/16 via-cyan-500/8 to-transparent", iconTone: "text-emerald-400" },
];

export function Teaching() {
  const [showAll, setShowAll] = useState(false);
  const totalStudents = teaching.reduce((sum, item) => sum + item.students, 0);
  const visibleCourses = showAll ? teaching : teaching.slice(0, 4);

  return (
    <section id="teaching" className="section-pad relative overflow-hidden border-t hairline">
      <div className="tech-diagram pointer-events-none absolute inset-0 opacity-25 [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]" />
      <div className="site-shell relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow="Teaching"
            number="04"
            title="Teaching Experience"
            copy="Undergraduate instruction across programming, systems, databases, and communication engineering."
            action={
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-2xl border hairline bg-[var(--surface)] px-5 py-3 text-center backdrop-blur-xl">
                  <p className="font-display text-2xl font-semibold tracking-[-0.04em]">{totalStudents}+</p>
                  <p className="mt-1 text-[9px] font-extrabold uppercase tracking-[0.16em] text-[var(--muted)]">Students</p>
                </div>
                <div className="rounded-2xl border hairline bg-[var(--surface)] px-5 py-3 text-center backdrop-blur-xl">
                  <p className="font-display text-2xl font-semibold tracking-[-0.04em]">{teaching.length}</p>
                  <p className="mt-1 text-[9px] font-extrabold uppercase tracking-[0.16em] text-[var(--muted)]">Courses</p>
                </div>
              </div>
            }
          />
        </Reveal>

        <motion.div layout className="grid gap-4 md:grid-cols-2">
          <AnimatePresence initial={false}>
            {visibleCourses.map((item, index) => {
              const visual = courseVisuals[index % courseVisuals.length];
              const Icon = visual.icon;
              return (
                <motion.article
                  layout
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.28, delay: Math.min(index, 3) * 0.035 }}
                  key={item.course}
                  className="group relative h-full overflow-hidden rounded-[1.6rem] border hairline bg-[var(--surface)] p-6 shadow-[0_18px_55px_rgba(18,32,53,.06)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-[var(--surface-strong)] sm:p-7"
                >
                  <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${visual.tone} opacity-80`} />
                  <div className="pointer-events-none absolute right-[-2rem] top-[-2rem] h-36 w-36 rounded-full border border-[var(--line)] opacity-70" />
                  <div className="pointer-events-none absolute right-[1rem] top-[1rem] h-16 w-16 rounded-full border border-[var(--line)] opacity-60" />

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <span className={`grid h-12 w-12 place-items-center rounded-2xl border hairline bg-[var(--bg)] ${visual.iconTone}`}>
                        <Icon size={20} />
                      </span>
                      <span className="font-display text-xs font-bold tracking-[0.12em] text-[var(--muted)]">{String(index + 1).padStart(2, "0")}</span>
                    </div>

                    <h3 className="mt-8 max-w-md font-display text-xl font-semibold leading-[1.25] tracking-[-0.035em] sm:text-[1.55rem]">{item.course}</h3>
                    <p className="mt-3 text-xs font-semibold leading-5 text-[var(--muted)]">{item.semester}</p>

                    <div className="mt-8 grid grid-cols-2 gap-2 border-t hairline pt-4">
                      <div className="flex items-center gap-2 text-xs font-semibold text-[var(--muted)]">
                        <Users size={14} className="text-[var(--accent)]" /> {item.students} students
                      </div>
                      <div className="flex items-center justify-end gap-2 text-xs font-semibold text-[var(--muted)]">
                        <BookOpenCheck size={14} className="text-[var(--accent)]" /> {item.type}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {teaching.length > 4 ? (
          <div className="mt-7 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((value) => !value)}
              className="btn-secondary focus-ring group rounded-full px-5 py-3 text-sm font-extrabold"
              aria-expanded={showAll}
            >
              {showAll ? "Show fewer courses" : `View all ${teaching.length} courses`}
              <ChevronDown size={16} className={`transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} />
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
