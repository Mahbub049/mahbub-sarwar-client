"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import { ArrowUpRight, Braces, FileText, GraduationCap, Mail, Microscope } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import type { MouseEvent } from "react";
import { site } from "@/lib/site-data";
import { CvViewerModal } from "@/components/cv-viewer-modal";

const FULL_NAME = "Mahbub Sarwar";

const orbitNodes = [
  { label: "AI", className: "left-[1%] top-[25%]" },
  { label: "WEB", className: "right-[-1%] top-[34%]" },
  { label: "XAI", className: "bottom-[15%] left-[8%]" },
  { label: "EDU", className: "bottom-[8%] right-[9%]" },
];

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const sync = () => setMatches(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, [query]);

  return matches;
}

function PortraitStage() {
  const reduceMotion = useReducedMotion();
  const compact = useMediaQuery("(max-width: 767px)");
  const finePointer = useMediaQuery("(hover: hover) and (pointer: fine)");
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 110, damping: 20 });
  const springY = useSpring(y, { stiffness: 110, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-6, 6]);
  const allowTilt = !reduceMotion && finePointer;

  function handleMove(event: MouseEvent<HTMLDivElement>) {
    if (!allowTilt) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={allowTilt ? { rotateX, rotateY, transformPerspective: 1000 } : undefined}
      className="relative mx-auto aspect-[0.94] w-full max-w-[350px] touch-pan-y sm:max-w-[430px] lg:ml-auto lg:mr-0 lg:w-[470px] lg:max-w-none xl:w-[515px] 2xl:w-[550px]"
    >
      <div className="absolute inset-[3%] rounded-[42%_58%_55%_45%/45%_42%_58%_55%] bg-gradient-to-br from-cyan-400/18 via-blue-500/12 to-violet-500/16 blur-2xl" />

      <motion.div
        aria-hidden="true"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: compact ? 34 : 28, repeat: Infinity, ease: "linear" }}
        className="orbit-ring absolute inset-[1%] rounded-full border border-dashed border-cyan-400/30 will-change-transform"
      />
      <motion.div
        aria-hidden="true"
        animate={reduceMotion ? undefined : { rotate: -360 }}
        transition={{ duration: compact ? 44 : 38, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[10%] rounded-full border border-dotted border-violet-400/25 will-change-transform"
      />

      <svg className="absolute inset-0 h-full w-full opacity-70" viewBox="0 0 500 540" fill="none" aria-hidden="true">
        <motion.path
          d="M58 160C118 72 207 60 254 80C330 113 413 103 452 180"
          stroke="url(#hero-line)"
          strokeWidth="1.2"
          strokeDasharray="5 10"
          initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
          animate={reduceMotion ? undefined : { pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.8, delay: 0.45 }}
        />
        <motion.path
          d="M50 350C130 430 222 451 302 414C365 385 420 397 462 350"
          stroke="url(#hero-line)"
          strokeWidth="1.2"
          strokeDasharray="5 10"
          initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
          animate={reduceMotion ? undefined : { pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.8, delay: 0.7 }}
        />
        <defs>
          <linearGradient id="hero-line" x1="0" y1="0" x2="500" y2="540">
            <stop stopColor="#29D3E2" />
            <stop offset="0.5" stopColor="#3DA0FF" />
            <stop offset="1" stopColor="#9078FF" />
          </linearGradient>
        </defs>
      </svg>

      {orbitNodes.map((node, index) => (
        <motion.div
          key={node.label}
          animate={reduceMotion ? undefined : { y: [0, index % 2 ? (compact ? 4 : 8) : compact ? -4 : -8, 0] }}
          transition={{ duration: 4.5 + index, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute z-30 ${node.className}`}
        >
          <div className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-slate-950/82 font-display text-[8px] font-bold tracking-[0.14em] text-cyan-100 shadow-xl backdrop-blur-xl sm:h-12 sm:w-12 sm:text-[10px] sm:tracking-[0.16em]">
            {node.label}
          </div>
        </motion.div>
      ))}

      <motion.div
        animate={
          reduceMotion
            ? undefined
            : compact
              ? { y: [0, -7, 0], rotate: [0, -0.12, 0.1, 0] }
              : { y: [0, -16, 0], rotate: [0, -0.45, 0.35, 0] }
        }
        transition={{ duration: compact ? 7.4 : 6.8, repeat: Infinity, ease: "easeInOut" }}
        style={{ willChange: "transform", backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        className="absolute inset-[8%] overflow-hidden rounded-[36%_64%_54%_46%/42%_38%_62%_58%] border border-white/15 bg-slate-900 shadow-[0_24px_70px_rgba(0,0,0,0.3)] sm:shadow-[0_35px_100px_rgba(0,0,0,0.38)]"
      >
        <Image
          src="/images/profile.jpg"
          alt="Muhammad Mahbub Sarwar Shafi"
          fill
          priority
          sizes="(max-width: 640px) 84vw, (max-width: 1024px) 70vw, 560px"
          className="object-cover object-[50%_30%] grayscale-[0.05] contrast-[1.04] [backface-visibility:hidden]"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-950/72 to-transparent" />
      </motion.div>

      <motion.div
        animate={reduceMotion ? undefined : { y: [0, compact ? -4 : -7, 0] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
        className="glass-panel absolute bottom-[6%] right-[1%] z-30 w-[150px] rounded-2xl p-3 sm:bottom-[7%] sm:w-[190px] sm:p-3.5"
      >
        <div className="flex items-center gap-2.5 sm:gap-3">
          <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
            <span className="relative inline-flex h-full w-full rounded-full bg-emerald-400" />
          </span>
          <div>
            <p className="text-[7px] font-extrabold uppercase tracking-[0.18em] text-[var(--muted)] sm:text-[9px] sm:tracking-[0.2em]">Current role</p>
            <p className="mt-0.5 font-display text-xs font-semibold sm:text-sm">Lecturer · CSE</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function RepeatingTypeName() {
  const reduceMotion = useReducedMotion();
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting" | "waiting">("typing");

  useEffect(() => {
    if (reduceMotion) {
      setText(FULL_NAME);
      return;
    }

    let timeout: ReturnType<typeof setTimeout> | undefined;

    if (phase === "typing") {
      if (text.length < FULL_NAME.length) {
        timeout = setTimeout(() => setText(FULL_NAME.slice(0, text.length + 1)), 95);
      } else {
        timeout = setTimeout(() => setPhase("holding"), 5200);
      }
    } else if (phase === "holding") {
      setPhase("deleting");
    } else if (phase === "deleting") {
      if (text.length > 0) {
        timeout = setTimeout(() => setText((value) => value.slice(0, -1)), 60);
      } else {
        timeout = setTimeout(() => setPhase("waiting"), 1200);
      }
    } else {
      setPhase("typing");
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [phase, reduceMotion, text]);

  const firstName = text.slice(0, Math.min(text.length, 6));
  const showSpace = text.length > 6;
  const surname = text.length > 7 ? text.slice(7) : "";

  return (
    <span aria-hidden="true">
      <span>{firstName}</span>
      {showSpace ? <span className="inline-block w-[0.24em]" /> : null}
      {surname ? <span className="text-gradient">{surname}</span> : null}
      <span className="typing-caret" />
    </span>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();
  const [cvOpen, setCvOpen] = useState(false);

  return (
    <section id="about" className="relative min-h-screen overflow-hidden pt-24 sm:pt-28 md:pt-32">
      <div className="spectral-beam pointer-events-none absolute left-[-8%] top-[35%] -z-10 h-20 w-[116%] -rotate-[7deg] opacity-45" />
      <div className="pointer-events-none absolute right-[8%] top-24 -z-10 h-px w-56 bg-gradient-to-r from-transparent via-cyan-400/35 to-transparent" />

      <div className="site-shell grid min-h-[calc(100vh-6rem)] items-center gap-7 pb-12 sm:gap-10 sm:pb-16 lg:min-h-[calc(100vh-8rem)] lg:grid-cols-[minmax(0,1fr)_minmax(430px,.82fr)] lg:gap-20 lg:pb-10 xl:gap-24 2xl:gap-28">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 order-2 min-w-0 text-center lg:order-1 lg:text-left"
        >
          <p className="mb-3 font-display text-xs font-semibold tracking-[-0.01em] text-[var(--accent)] sm:mb-5 sm:text-base">
            {site.role}
          </p>

          <h1
            aria-label="Mahbub Sarwar"
            className="relative mx-auto h-[1.04em] w-full min-w-0 max-w-full font-display text-[clamp(2.35rem,11vw,4.9rem)] font-semibold leading-[0.94] tracking-[-0.005em] lg:mx-0 lg:text-[clamp(2.65rem,4.05vw,4.9rem)]"
          >
            <span className="absolute inset-x-0 top-0 whitespace-nowrap">
              <RepeatingTypeName />
            </span>
          </h1>

          <div className="mx-auto mt-5 max-w-[40rem] sm:mt-7 lg:mx-0">
            <div className="flex flex-col items-center gap-3 lg:flex-row lg:items-start lg:gap-3.5">
              <span
                aria-hidden="true"
                className="h-[3px] w-14 shrink-0 rounded-full bg-gradient-to-r from-[var(--accent)] via-cyan-400/70 to-transparent lg:mt-1 lg:h-12 lg:w-[3px] lg:bg-gradient-to-b"
              />
              <p className="max-w-2xl text-sm font-medium leading-6 text-[var(--muted)] sm:text-base sm:leading-7 lg:text-left">
                {site.headline}
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3 sm:mt-8 lg:justify-start">
            <a href="#projects" className="btn-primary focus-ring group rounded-full px-5 py-3 text-sm font-extrabold">
              Explore work
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <button
              type="button"
              onClick={() => setCvOpen(true)}
              className="btn-secondary focus-ring group rounded-full px-5 py-3 text-sm font-extrabold"
            >
              <FileText size={16} className="transition-transform duration-200 group-hover:-translate-y-0.5" />
              View CV
            </button>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:mt-9 lg:justify-start">
            {[
              { label: "LinkedIn", href: site.linkedin, icon: FaLinkedinIn },
              { label: "GitHub", href: site.github, icon: FaGithub },
              { label: "Email", href: `mailto:${site.email}`, icon: Mail },
            ].map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
                className="focus-ring grid h-11 w-11 place-items-center rounded-full border hairline bg-[var(--surface)] text-[var(--muted)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-400/30 hover:text-[var(--text)]"
              >
                <Icon size={17} />
              </a>
            ))}
            <span className="w-full pt-1 text-center text-[11px] font-semibold text-[var(--muted)] sm:w-auto sm:pt-0 lg:ml-2 lg:text-left">{site.location}</span>
          </div>

          <div className="mx-auto mt-7 grid max-w-2xl grid-cols-3 gap-2 sm:mt-10 lg:mx-0 lg:gap-2">
            {[
              { icon: GraduationCap, label: "Teaching", value: "Lecturer", compactValue: "Lecturer" },
              { icon: Braces, label: "Engineering", value: "Full-stack", compactValue: "Full-stack" },
              { icon: Microscope, label: "Research", value: "Biomedical Imaging · NLP · AI", compactValue: "Bio · NLP · AI" },
            ].map(({ icon: Icon, label, value, compactValue }) => (
              <div
                key={label}
                className="min-w-0 rounded-2xl border hairline bg-[var(--surface)] px-2 py-3 text-center backdrop-blur-xl lg:rounded-none lg:border-0 lg:border-l lg:bg-transparent lg:px-0 lg:py-2 lg:pl-4 lg:text-left lg:backdrop-blur-none"
              >
                <div className="flex items-center justify-center gap-1.5 text-[8px] font-extrabold uppercase tracking-[0.12em] text-[var(--muted)] sm:text-[9px] lg:justify-start lg:gap-2 lg:text-[10px] lg:tracking-[0.18em]">
                  <Icon size={12} /> <span className="truncate">{label}</span>
                </div>
                <p className="mt-1.5 font-display text-[11px] font-semibold sm:text-xs lg:text-sm">
                  <span className="block truncate lg:hidden">{compactValue}</span>
                  <span className="hidden lg:inline">{value}</span>
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.94, y: 22 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-1 min-w-0 lg:order-2 lg:justify-self-end"
        >
          <PortraitStage />
        </motion.div>
      </div>

      <CvViewerModal open={cvOpen} onClose={() => setCvOpen(false)} />
    </section>
  );
}
