import type { ComponentType } from "react";
import {
  BrainCircuit,
  Microscope,
  Layers3,
  Network,
  Palette,
} from "lucide-react";
import { FaJava } from "react-icons/fa6";
import {
  SiCplusplus,
  SiCss,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGoogledrive,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { skills } from "@/lib/site-data";
import { Reveal } from "./reveal";

type SkillIcon = ComponentType<{ size?: string | number; className?: string }>;

const skillIcons: Record<string, SkillIcon> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  "Tailwind CSS": SiTailwindcss,
  Python: SiPython,
  "C/C++": SiCplusplus,
  Java: FaJava,
  PHP: SiPhp,
  HTML5: SiHtml5,
  CSS3: SiCss,
  Git: SiGit,
  GitHub: SiGithub,
  Firebase: SiFirebase,
  Vercel: SiVercel,
  Canva: Palette,
  "Google Drive": SiGoogledrive,
  "Biomedical imaging": Microscope,
  NLP: Network,
  AI: BrainCircuit,
};

const groups = [
  { label: "Engineering", items: skills.engineering, fallback: Layers3 },
  { label: "Languages", items: skills.languages, fallback: SiJavascript },
  { label: "Tools", items: skills.tools, fallback: SiGit },
  { label: "Research focus", items: skills.focus, fallback: BrainCircuit },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="section-pad relative border-t hairline"
    >
      <div className="site-shell">
        <Reveal>
          <div className="mb-10 border-b hairline pb-7 md:mb-12">
            <div className="flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--muted)]">
              <span className="font-display text-[var(--accent)]">06</span>
              <span className="h-px w-7 bg-[var(--line)]" />
              <span>Skills</span>
            </div>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.025em] sm:text-5xl">
              Skills & Technologies
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)]">
              Technologies and research tools used across software engineering, teaching, and AI.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          {groups.map((group, groupIndex) => (
            <Reveal key={group.label} delay={groupIndex * 0.05}>
              <article className="h-full rounded-[1.55rem] border hairline bg-[var(--surface)] p-5 sm:p-6">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <h3 className="font-display text-lg font-semibold tracking-[-0.025em]">
                    {group.label}
                  </h3>
                  <span className="text-[9px] font-extrabold uppercase tracking-[0.17em] text-[var(--muted)]">
                    {String(group.items.length).padStart(2, "0")} skills
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {group.items.map((item) => {
                    const Icon = skillIcons[item] || group.fallback;

                    return (
                      <div
                        key={item}
                        className="group flex min-h-[82px] items-center gap-3 rounded-2xl border hairline bg-[var(--bg)] p-3 transition hover:-translate-y-0.5 hover:bg-[var(--surface-strong)]"
                      >
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border hairline bg-[var(--surface)] text-[var(--accent)] transition group-hover:scale-105">
                          <Icon size={19} />
                        </span>
                        <span className="text-xs font-bold leading-5 text-[var(--text)]">
                          {item}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
