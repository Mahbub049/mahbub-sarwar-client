import { GraduationCap } from "lucide-react";
import { education } from "@/lib/site-data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Education() {
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
                <div className="relative">
                  <p className="font-display text-xs font-bold tracking-[0.03em] text-[var(--muted)]">{item.period}</p>
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

                <div className="md:text-right">
                  <span className="inline-flex rounded-full border hairline bg-[var(--surface)] px-3 py-2 text-xs font-extrabold">
                    {item.result}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
