import { Award, Building2, Crown, Medal, Sparkles, Trophy } from "lucide-react";
import { achievements } from "@/lib/site-data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const icons = [Award, Sparkles, Medal, Trophy, Crown];
const spans = ["md:col-span-2", "md:col-span-2", "", "", "md:col-span-2"];

export function Achievements() {
  return (
    <section id="highlights" className="section-pad relative border-t hairline">
      <div className="site-shell relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow="Recognition"
            number="06"
            title="Awards & Achievements"
            copy="Academic honors, scholarships, and competitive distinctions."
          />
        </Reveal>

        <div className="grid gap-3 md:grid-cols-4">
          {achievements.map((item, index) => {
            const Icon = icons[index] || Award;
            return (
              <Reveal key={item.title} delay={index * 0.05} className={spans[index] || ""}>
                <article className="group relative h-full min-h-[250px] overflow-hidden rounded-[1.6rem] border hairline bg-[var(--surface)] p-6 transition duration-300 hover:-translate-y-1 sm:p-7">
                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full border border-[var(--line)]" />
                  <div className="pointer-events-none absolute right-5 top-5 h-16 w-16 rounded-full border border-[var(--line)]" />
                  <div className="relative flex h-full flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <span className="grid h-11 w-11 place-items-center rounded-2xl border hairline bg-[var(--bg)] text-[var(--accent)]"><Icon size={18} /></span>
                      <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[var(--muted)]">{item.year}</span>
                    </div>
                    <div className="mt-auto pt-9">
                      <p className="font-display text-3xl font-semibold tracking-[-0.055em] text-gradient sm:text-4xl">{item.value}</p>
                      <h3 className="mt-3 font-display text-lg font-semibold tracking-[-0.025em] sm:text-xl">{item.title}</h3>
                      <div className="mt-4 flex items-start gap-2 border-t hairline pt-4">
                        <Building2 size={15} className="mt-0.5 shrink-0 text-[var(--accent)]" />
                        <p className="font-display text-sm font-semibold leading-5 text-[var(--text)] sm:text-base">{item.issuer}</p>
                      </div>
                      <p className="mt-3 max-w-lg text-xs leading-6 text-[var(--muted)]">{item.copy}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
