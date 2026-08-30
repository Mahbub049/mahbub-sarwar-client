import { ArrowUpRight, FileText, Microscope } from "lucide-react";
import { publications } from "@/lib/site-data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Publications() {
  return (
    <section id="research" className="section-pad relative border-t hairline">
      <div className="site-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Research"
            number="04"
            title="Research & Publications"
            copy="Selected work in explainable AI, biomedical imaging, and natural language processing."
            action={
              <div className="flex items-center gap-3 rounded-2xl border hairline bg-[var(--surface)] px-5 py-4 backdrop-blur-xl">
                <Microscope size={18} className="text-[var(--accent)]" />
                <div>
                  <p className="font-display text-2xl font-semibold">{publications.length}</p>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[var(--muted)]">Published works</p>
                </div>
              </div>
            }
          />
        </Reveal>

        <div className="space-y-4">
          {publications.map((publication, index) => (
            <Reveal key={publication.title} delay={index * 0.07}>
              <article className="group relative overflow-hidden rounded-[1.65rem] border hairline bg-[var(--surface)] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--surface-strong)] sm:p-8 lg:px-10 lg:py-9">
                <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-cyan-400/55 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="grid gap-5 sm:grid-cols-[52px_minmax(0,1fr)_auto] sm:items-start">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border hairline bg-[var(--surface-strong)] text-[var(--accent)]">
                    <FileText size={19} />
                  </span>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[var(--muted)]">
                      <span className="text-[var(--accent)]">{publication.status}</span>
                      <span>·</span>
                      <span>{publication.year}</span>
                      <span>·</span>
                      <span>{publication.area}</span>
                    </div>
                    <h3 className="mt-3 max-w-5xl font-display text-xl font-semibold leading-[1.32] tracking-[-0.025em] sm:text-2xl lg:text-[1.7rem]">
                      {publication.title}
                    </h3>
                    <div className="mt-5 border-t hairline pt-4">
                      <p className="text-xs font-semibold text-[var(--muted)] sm:text-sm">{publication.venue}</p>
                    </div>
                  </div>

                  <a
                    href={publication.researchGateUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${publication.title} on ResearchGate`}
                    className="inline-flex w-fit items-center gap-2 rounded-full border hairline bg-[var(--surface-strong)] px-3.5 py-2 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[var(--muted)] transition hover:border-cyan-400/35 hover:text-[var(--accent)] sm:mt-0"
                  >
                    <span>ResearchGate</span>
                    <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
