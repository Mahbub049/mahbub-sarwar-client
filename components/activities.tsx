"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  Images,
  PlayCircle,
  Radio,
  Users,
} from "lucide-react";
import { activities } from "@/lib/site-data";
import { AchievementGalleryModal } from "./achievement-gallery";
import {
  ActivityMediaItem,
  ActivityMediaModal,
} from "./activity-media-modal";
import { Reveal } from "./reveal";

type Activity = (typeof activities)[number];
type ActivityRole = Activity["roles"][number];

type SelectedGallery = {
  organization: string;
  role: string;
  photos: NonNullable<ActivityRole["gallery"]>;
};

type SelectedMedia = {
  organization: string;
  role: string;
  media: ActivityMediaItem;
};

export function Activities() {
  const [selectedGallery, setSelectedGallery] = useState<SelectedGallery | null>(null);
  const [selectedMedia, setSelectedMedia] = useState<SelectedMedia | null>(null);

  const renderActivity = (activity: Activity, index: number) => (
    <Reveal key={activity.organization} delay={index * 0.05} className="h-full">
      <article className="group h-full rounded-[1.5rem] border hairline bg-[var(--surface)] p-5 transition duration-300 hover:-translate-y-1 hover:bg-[var(--surface-strong)] sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[var(--accent)]">
              {activity.meta}
            </p>
            <h3 className="mt-2 font-display text-xl font-semibold tracking-[-0.03em] sm:text-2xl">
              {activity.organization}
            </h3>
          </div>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border hairline bg-[var(--bg)] text-[var(--muted)] transition group-hover:text-[var(--accent)]">
            <Users size={17} />
          </span>
        </div>

        <div className="mt-6 space-y-5 border-l hairline pl-5">
          {activity.roles.map((role) => {
            const hasGallery = role.gallery && role.gallery.length > 0;
            const links = "links" in role && role.links ? role.links : [];

            return (
              <div
                key={`${activity.organization}-${role.title}-${role.period}`}
                className="relative"
              >
                <span className="absolute -left-[1.47rem] top-1.5 h-2 w-2 rounded-full bg-[var(--accent)]" />

                <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:gap-5">
                  <div className="min-w-0">
                    <h4 className="font-display text-base font-semibold">{role.title}</h4>

                    <ul className="mt-3 space-y-2 text-sm leading-6 text-[var(--muted)]">
                      {role.points.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <ArrowUpRight
                            size={13}
                            className="mt-1.5 shrink-0 text-[var(--accent)]"
                          />
                          <span className="min-w-0 flex-1 text-justify">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex shrink-0 flex-col items-start gap-1.5 sm:min-w-[116px] sm:items-end">
                    <span className="mb-0.5 text-xs font-semibold text-[var(--muted)]">
                      {role.period}
                    </span>

                    {hasGallery ? (
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedGallery({
                            organization: activity.organization,
                            role: role.title,
                            photos: role.gallery,
                          })
                        }
                        className="focus-ring inline-flex h-7 items-center gap-1 rounded-full border hairline bg-[var(--bg)] px-2.5 text-[8px] font-extrabold uppercase tracking-[0.09em] text-[var(--text)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                        aria-label={`View gallery for ${role.title} at ${activity.organization}`}
                      >
                        <Images size={10} />
                        Gallery
                        <span className="text-[8px] text-[var(--muted)]">
                          {role.gallery.length}
                        </span>
                      </button>
                    ) : null}

                    {links.map((link) => {
                      const isEvent = link.type === "event";
                      const Icon = isEvent ? CalendarDays : PlayCircle;

                      return (
                        <button
                          key={`${link.label}-${link.href}`}
                          type="button"
                          onClick={() =>
                            setSelectedMedia({
                              organization: activity.organization,
                              role: role.title,
                              media: link as ActivityMediaItem,
                            })
                          }
                          className="focus-ring inline-flex h-7 items-center gap-1.5 rounded-full border hairline bg-[var(--bg)] px-2.5 text-[8px] font-extrabold uppercase tracking-[0.09em] text-[var(--text)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                          aria-label={`View ${link.label} for ${role.title}`}
                        >
                          <Icon size={10} />
                          {link.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </article>
    </Reveal>
  );

  return (
    <section id="leadership" className="section-pad relative overflow-hidden border-t hairline">
      <div className="site-shell relative z-10">
        <Reveal>
          <div className="mb-10 border-b hairline pb-7 md:mb-12">
            <div className="mb-4 flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--muted)]">
              <span className="font-display text-[var(--accent)]">07</span><span className="h-px w-7 bg-[var(--line)]" /><Radio size={14} className="text-[var(--accent)]" /> Leadership
            </div>
            <h2 className="font-display text-4xl font-semibold tracking-[-0.025em] sm:text-5xl">
              Leadership & Activities
            </h2>
            <p className="mt-4 max-w-2xl text-justify text-sm leading-7 text-[var(--muted)]">
              Leadership roles, technical events, and service contributions.
            </p>
          </div>
        </Reveal>

        {/*
          Desktop uses an asymmetric editorial layout: the detailed IEEE CS
          leadership card anchors the left column while the three shorter
          activity cards stack naturally on the right. This avoids forcing
          unrelated cards to inherit the height of the longest card.
        */}
        <div className="grid gap-4 lg:grid-cols-[1.04fr_0.96fr] lg:items-stretch">
          <div className="min-w-0">{renderActivity(activities[0], 0)}</div>

          <div className="grid min-w-0 gap-4">
            {activities.slice(1).map((activity, index) =>
              renderActivity(activity, index + 1),
            )}
          </div>
        </div>
      </div>

      <AchievementGalleryModal
        open={Boolean(selectedGallery)}
        eyebrow="Activity gallery"
        title={selectedGallery?.role ?? ""}
        issuer={selectedGallery?.organization ?? ""}
        photos={selectedGallery?.photos ?? []}
        onClose={() => setSelectedGallery(null)}
      />

      <ActivityMediaModal
        open={Boolean(selectedMedia)}
        organization={selectedMedia?.organization ?? ""}
        role={selectedMedia?.role ?? ""}
        media={selectedMedia?.media ?? null}
        onClose={() => setSelectedMedia(null)}
      />
    </section>
  );
}
