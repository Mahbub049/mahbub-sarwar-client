"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Code2, ExternalLink, Layers3, Plus, X } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { projects } from "@/lib/site-data";
import { SectionHeading } from "./section-heading";

const filters = ["All", "Academic", "Finance", "Professional", "Portfolio"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((project) => project.category === filter)),
    [filter],
  );
  const visible = showAll ? filtered : filtered.slice(0, 5);

  return (
    <section id="projects" className="section-pad relative border-t hairline">
      <div className="site-shell">
        <SectionHeading
          eyebrow="Projects"
          number="05"
          title="Projects"
          copy="Academic, institutional, finance, and full-stack systems built for practical use."
        />

        <div className="mb-8 flex flex-wrap items-center gap-2">
          {filters.map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => {
                setFilter(item);
                setShowAll(false);
              }}
              className={`focus-ring rounded-full border px-3.5 py-2 text-xs font-extrabold transition ${
                filter === item
                  ? "border-transparent bg-[var(--text)] text-[var(--bg)]"
                  : "hairline bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--text)]"
              }`}
            >
              {item}
            </button>
          ))}
          <span className="ml-auto hidden items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.17em] text-[var(--muted)] sm:flex">
            <Layers3 size={14} /> {filtered.length} projects
          </span>
        </div>

        <motion.div layout className="grid gap-4 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((project, index) => {
              const featured = index === 0 && filter === "All";
              return (
                <motion.article
                  layout
                  key={project.slug}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.35 }}
                  className={`group overflow-hidden rounded-[1.6rem] border hairline bg-[var(--surface)] ${featured ? "lg:col-span-2" : ""}`}
                >
                  <div className={featured ? "lg:grid lg:grid-cols-[1.34fr_.66fr]" : ""}>
                    <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                      <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        fill
                        sizes={featured ? "(max-width: 1024px) 100vw, 790px" : "(max-width: 1024px) 100vw, 580px"}
                        className="object-cover object-top transition duration-700 ease-out group-hover:scale-[1.035]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-80" />
                      <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-slate-950/65 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.18em] text-white backdrop-blur-xl">
                        {project.category}
                      </span>
                    </div>

                    <div className="flex flex-col p-6 sm:p-7">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[var(--accent)]">Project {String(projects.indexOf(project) + 1).padStart(2, "0")}</p>
                          <h3 className="mt-2 font-display text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">{project.title}</h3>
                        </div>
                        <Code2 size={20} className="mt-1 shrink-0 text-[var(--muted)]" />
                      </div>

                      <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{project.description}</p>

                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {project.tech.map((tech) => (
                          <span key={tech} className="rounded-full border hairline bg-[var(--bg)] px-2.5 py-1.5 text-[10px] font-bold text-[var(--muted)]">{tech}</span>
                        ))}
                      </div>

                      <div className="mt-auto flex flex-wrap gap-2 pt-7">
                        {project.live ? (
                          <a href={project.live} target="_blank" rel="noreferrer" className="btn-primary focus-ring rounded-full px-4 py-2.5 text-xs font-extrabold">
                            Live site <ExternalLink size={13} />
                          </a>
                        ) : null}
                        {project.client ? (
                          <a href={project.client} target="_blank" rel="noreferrer" className="btn-secondary focus-ring rounded-full px-4 py-2.5 text-xs font-extrabold">
                            Client <FaGithub size={13} />
                          </a>
                        ) : null}
                        {project.server ? (
                          <a href={project.server} target="_blank" rel="noreferrer" className="btn-secondary focus-ring rounded-full px-4 py-2.5 text-xs font-extrabold">
                            Server <FaGithub size={13} />
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filtered.length > 5 ? (
          <div className="mt-7 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((value) => !value)}
              className="btn-secondary focus-ring rounded-full px-5 py-3 text-xs font-extrabold"
            >
              {showAll ? <><X size={14} /> Show top five</> : <><Plus size={14} /> View all projects</>}
            </button>
          </div>
        ) : null}

      </div>
    </section>
  );
}
