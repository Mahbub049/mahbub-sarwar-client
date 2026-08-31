"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

export function BackgroundMotion() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const yPrimary = useTransform(scrollYProgress, [0, 1], ["-4%", "16%"]);
  const ySecondary = useTransform(scrollYProgress, [0, 1], ["14%", "-10%"]);
  const xPrimary = useTransform(scrollYProgress, [0, 1], ["-6%", "5%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-7, 8]);
  const lineShift = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);

  return (
    <div className="ambient-motion pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        style={reduceMotion ? undefined : { x: xPrimary, y: yPrimary, rotate }}
        animate={
          reduceMotion
            ? undefined
            : {
                scale: [1, 1.055, 0.985, 1],
                opacity: [0.72, 0.92, 0.76, 0.72],
              }
        }
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-[18vw] top-[8vh] h-[42rem] w-[72vw] rounded-[50%] bg-cyan-400/[0.055] blur-[120px] dark:bg-cyan-400/[0.045]"
      />
      <motion.div
        style={reduceMotion ? undefined : { y: ySecondary }}
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, -34, 14, 0],
                scale: [1, 0.98, 1.045, 1],
              }
        }
        transition={{ duration: 38, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-[20vw] top-[38vh] h-[46rem] w-[68vw] rounded-[50%] bg-violet-500/[0.055] blur-[130px] dark:bg-violet-500/[0.045]"
      />

      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, 42, 8, -28, 0],
                y: [0, -18, 24, 8, 0],
                opacity: [0.22, 0.38, 0.28, 0.34, 0.22],
              }
        }
        transition={{ duration: 46, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[42%] top-[18%] h-48 w-48 rounded-full bg-blue-400/[0.055] blur-[90px] dark:bg-blue-400/[0.045]"
      />

      <motion.svg
        style={reduceMotion ? undefined : { y: lineShift }}
        className="absolute left-0 top-[-10%] h-[125%] w-full opacity-[0.28] dark:opacity-[0.22]"
        viewBox="0 0 1600 1200"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="scroll-field" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="var(--accent-2)" stopOpacity="0" />
            <stop offset="0.35" stopColor="var(--accent-2)" stopOpacity="0.42" />
            <stop offset="0.68" stopColor="var(--accent)" stopOpacity="0.30" />
            <stop offset="1" stopColor="var(--accent-3)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d="M-140 220C190 48 390 395 690 212S1170 52 1740 290"
          fill="none"
          stroke="url(#scroll-field)"
          strokeWidth="1.1"
          strokeDasharray="8 22"
          animate={reduceMotion ? undefined : { strokeDashoffset: [0, -120] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M-170 392C145 214 410 530 730 352S1210 205 1760 456"
          fill="none"
          stroke="url(#scroll-field)"
          strokeWidth="0.9"
          strokeDasharray="6 28"
          animate={reduceMotion ? undefined : { strokeDashoffset: [0, 132] }}
          transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M-110 690C250 500 480 835 820 652S1270 520 1730 740"
          fill="none"
          stroke="url(#scroll-field)"
          strokeWidth="1"
          strokeDasharray="10 30"
          animate={reduceMotion ? undefined : { strokeDashoffset: [0, -150] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M-130 906C190 738 510 1038 850 860S1310 730 1760 955"
          fill="none"
          stroke="url(#scroll-field)"
          strokeWidth="0.8"
          strokeDasharray="5 26"
          animate={reduceMotion ? undefined : { strokeDashoffset: [0, 118] }}
          transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
        />
      </motion.svg>

      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                x: ["-8vw", "7vw", "-8vw"],
                opacity: [0.18, 0.34, 0.18],
              }
        }
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[28%] top-[58%] h-px w-[34vw] bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent blur-[0.5px]"
      />

      <motion.div
        style={reduceMotion ? undefined : { y: ySecondary, rotate }}
        className="absolute left-1/2 top-1/2 h-[90vh] w-px origin-center bg-gradient-to-b from-transparent via-blue-400/15 to-transparent"
      />
    </div>
  );
}
