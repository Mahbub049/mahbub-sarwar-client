import { ArrowUpRight, Radio, Users } from "lucide-react";
import { activities } from "@/lib/site-data";
import { Reveal } from "./reveal";

export function Activities() {
  return (
    <section className="section-pad relative overflow-hidden border-t hairline">
      <div className="site-shell relative z-10">
        <Reveal>
          <div className="mb-10 border-b hairline pb-7 md:mb-12">
            <div className="mb-4 flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--muted)]">
              <Radio size={14} className="text-[var(--accent)]" /> Leadership
            </div>
            <h2 className="font-display text-4xl font-semibold tracking-[-0.025em] sm:text-5xl">Leadership & Activities</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)]">Leadership roles, technical events, and service contributions.</p>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          {activities.map((activity, index) => (
            <Reveal key={activity.organization} delay={index * 0.05} className="h-full">
              <article className="group h-full rounded-[1.5rem] border hairline bg-[var(--surface)] p-5 transition duration-300 hover:-translate-y-1 hover:bg-[var(--surface-strong)] sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[var(--accent)]">{activity.meta}</p>
                    <h3 className="mt-2 font-display text-xl font-semibold tracking-[-0.03em] sm:text-2xl">{activity.organization}</h3>
                  </div>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border hairline bg-[var(--bg)] text-[var(--muted)] transition group-hover:text-[var(--accent)]"><Users size={17} /></span>
                </div>

                <div className="mt-6 space-y-5 border-l hairline pl-5">
                  {activity.roles.map((role) => (
                    <div key={`${activity.organization}-${role.title}-${role.period}`} className="relative">
                      <span className="absolute -left-[1.47rem] top-1.5 h-2 w-2 rounded-full bg-[var(--accent)]" />
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                        <h4 className="font-display text-base font-semibold">{role.title}</h4>
                        <span className="text-xs font-semibold text-[var(--muted)]">{role.period}</span>
                      </div>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-[var(--muted)]">
                        {role.points.map((point) => (
                          <li key={point} className="flex gap-2"><ArrowUpRight size={13} className="mt-1.5 shrink-0 text-[var(--accent)]" /> {point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
