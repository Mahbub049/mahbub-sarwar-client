"use client";

import { useState } from "react";
import {
  Award,
  Building2,
  Crown,
  GraduationCap,
  Images,
  Medal,
  Sparkles,
  Trophy,
} from "lucide-react";
import { achievements } from "@/lib/site-data";
import { AchievementGalleryModal } from "./achievement-gallery";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const icons = [Crown, Award, GraduationCap, Medal, Trophy, Sparkles];

type Achievement = (typeof achievements)[number];

export function Achievements() {
  const [selected, setSelected] = useState<Achievement | null>(null);

  return (
    <section id="highlights" className="section-pad relative border-t hairline">
      <div className="site-shell relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow="Recognition"
            number="06"
            title="Awards & Achievements"
            copy="Academic honors, university recognition, and competitive distinctions."
          />
        </Reveal>

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {achievements.map((item, index) => {
            const Icon = icons[index] || Award;
            const hasGallery = item.gallery.length > 0;

            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="group relative h-full min-h-[292px] overflow-hidden rounded-[1.6rem] border hairline bg-[var(--surface)] p-6 transition duration-300 hover:-translate-y-1 sm:p-7">
                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full border border-[var(--line)]" />
                  <div className="pointer-events-none absolute right-5 top-5 h-16 w-16 rounded-full border border-[var(--line)]" />

                  <div className="relative flex h-full flex-col">
                    <div className="flex items-start">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border hairline bg-[var(--bg)] text-[var(--accent)]">
                        <Icon size={18} />
                      </span>
                    </div>

                    <div className="absolute right-0 top-0 z-20 flex flex-col items-center gap-3.5">
                      <span className="rounded-full border hairline bg-[var(--surface-strong)] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[var(--muted)]">
                        {item.year}
                      </span>

                      {hasGallery ? (
                        <button
                          type="button"
                          onClick={() => setSelected(item)}
                          className="focus-ring inline-flex items-center gap-1.5 rounded-full border hairline bg-[var(--surface-strong)] px-2.5 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.1em] text-[var(--text)] shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                          aria-label={`View photos for ${item.title}`}
                        >
                          <Images size={11} />
                          Gallery
                          <span className="text-[8px] font-black leading-none text-[var(--muted)]">
                            {item.gallery.length}
                          </span>
                        </button>
                      ) : null}
                    </div>

                    <div className="mt-10 flex flex-1 flex-col">
                      <p className="font-display text-3xl font-semibold tracking-[-0.055em] text-gradient sm:text-4xl">
                        {item.value}
                      </p>
                      <h3 className="mt-3 font-display text-lg font-semibold tracking-[-0.025em] sm:text-xl">
                        {item.title}
                      </h3>

                      <div className="mt-4 flex items-start gap-2 border-t hairline pt-4">
                        <Building2 size={15} className="mt-0.5 shrink-0 text-[var(--accent)]" />
                        <p className="font-display text-sm font-semibold leading-5 text-[var(--text)] sm:text-base">
                          {item.issuer}
                        </p>
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

      <AchievementGalleryModal
        open={Boolean(selected)}
        title={selected?.title ?? ""}
        issuer={selected?.issuer ?? ""}
        photos={selected?.gallery ?? []}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
