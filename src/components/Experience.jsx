import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaBriefcase,
    FaChalkboardTeacher,
    FaCode,
    FaBuilding,
    FaCalendarAlt,
    FaCheckCircle,
    FaArrowRight,
    FaUniversity,
    FaLaptopCode,
    FaLayerGroup,
} from "react-icons/fa";

const experienceData = [
    {
        title: "Lecturer",
        company: "Dept. of CSE, BUBT",
        duration: "Jul 2025 - Present",
        status: "Current",
        icon: "teaching",
        summary:
            "Currently serving as a Lecturer with responsibilities in teaching, academic planning, student guidance, research, and curriculum development.",
        responsibilities: [
            "Developed and delivered comprehensive lectures, tutorials, and lab sessions for undergraduate courses.",
            "Designed course outlines and instructional materials aligned with the academic curriculum and learning outcomes.",
            "Conducted research activities and collaborated on departmental projects to promote academic growth.",
            "Engaged in continuous curriculum improvement by incorporating feedback and latest industry trends.",
        ],
    },
    {
        title: "Teaching Assistant",
        company: "Dept. of ICT, FST, BUP",
        duration: "Aug 2024 – Jun 2025",
        status: "Completed",
        icon: "university",
        summary:
            "Supported academic operations through class assistance, assessment work, student mentoring, and examination-related responsibilities.",
        responsibilities: [
            "Assisted course instructors in delivering lectures and managing class materials.",
            "Participated in assessment tasks including paper scrutiny, result entry, and preparing question sets.",
            "Supported students by providing mentorship and clarifying course-related doubts.",
            "Helped maintain academic integrity by organizing invigilation and examination duties.",
        ],
    },
    {
        title: "Full Stack Web Developer (Intern)",
        company: "Genuity Systems Ltd, Dhaka",
        duration: "Nov 2022 – Dec 2022",
        status: "Completed",
        icon: "code",
        summary:
            "Worked in a practical software development environment and contributed to an e-commerce platform using modern web technologies.",
        responsibilities: [
            "Developed a dynamic e-commerce platform using Laravel, PHP, HTML5, and CSS3.",
            "Ensured best practices in software engineering through the implementation of MVC architecture.",
            "Designed and documented system architecture using Entity Relationship Diagrams.",
            "Collaborated with a team to maintain clean code, version control, and proper testing protocols.",
        ],
    },
];

const getIcon = (type) => {
    if (type === "teaching") return <FaChalkboardTeacher />;
    if (type === "university") return <FaUniversity />;
    return <FaCode />;
};

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: "easeOut" },
    },
};

export default function Experience() {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeExperience = experienceData[activeIndex];

    return (
        <section
            id="experience"
            className="relative overflow-hidden bg-white px-4 py-16 font-montserrat text-slate-900 dark:bg-slate-950 dark:text-white md:px-6"
        >
            <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-violet-300/20 blur-3xl dark:bg-violet-500/10" />
            <div className="pointer-events-none absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl dark:bg-cyan-500/10" />

            <div className="relative z-10 mx-auto max-w-7xl">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
                >
                    <div>
                        <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-violet-700 dark:border-violet-400/20 dark:bg-violet-400/10 dark:text-violet-200">
                            <FaBriefcase />
                            Professional Growth
                        </span>

                        <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
                            Work{" "}
                            <span className="bg-gradient-to-r from-violet-500 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                                Experience
                            </span>
                        </h2>

                        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
                            A compact career overview showing academic, teaching, and software
                            development experience.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-center shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
                            <p className="text-2xl font-black text-blue-600 dark:text-blue-300">
                                03
                            </p>
                            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                                Roles
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-center shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
                            <p className="text-2xl font-black text-emerald-600 dark:text-emerald-300">
                                12
                            </p>
                            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                                Duties
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-center shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
                            <p className="text-2xl font-black text-violet-600 dark:text-violet-300">
                                01
                            </p>
                            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                                Current
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Main Career Panel */}
                <div className="grid gap-6 lg:grid-cols-[0.85fr_1.35fr]">
                    {/* Left Role Selector */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55 }}
                        className="rounded-[2rem] border border-slate-200 bg-slate-50 p-4 shadow-xl shadow-slate-200/70 dark:border-white/10 dark:bg-white/[0.06] dark:shadow-black/20"
                    >
                        <div className="mb-4 rounded-3xl bg-gradient-to-br from-slate-950 via-blue-950 to-violet-950 p-5 text-white">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-cyan-200">
                                <FaLayerGroup />
                            </div>

                            <h3 className="mt-4 text-xl font-black">
                                Career Timeline
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-slate-300">
                                Select a role to view detailed responsibilities.
                            </p>
                        </div>

                        <div className="space-y-3">
                            {experienceData.map((exp, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`group w-full rounded-3xl border p-4 text-left transition-all duration-300 ${
                                        activeIndex === index
                                            ? "border-blue-300 bg-white shadow-lg shadow-blue-100 dark:border-blue-400/30 dark:bg-blue-400/10 dark:shadow-black/20"
                                            : "border-slate-200 bg-white/70 hover:border-blue-200 hover:bg-white dark:border-white/10 dark:bg-slate-950/30 dark:hover:bg-white/[0.08]"
                                    }`}
                                >
                                    <div className="flex items-start gap-4">
                                        <div
                                            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-lg text-white shadow-lg transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105 ${
                                                activeIndex === index
                                                    ? "bg-gradient-to-br from-cyan-500 to-violet-600"
                                                    : "bg-gradient-to-br from-slate-500 to-slate-800"
                                            }`}
                                        >
                                            {getIcon(exp.icon)}
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <div className="flex items-start justify-between gap-2">
                                                <h4 className="text-sm font-black leading-snug text-slate-900 dark:text-white">
                                                    {exp.title}
                                                </h4>

                                                {activeIndex === index && (
                                                    <FaArrowRight className="mt-1 shrink-0 text-blue-500" />
                                                )}
                                            </div>

                                            <p className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                                                {exp.company}
                                            </p>

                                            <p className="mt-2 inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-bold text-blue-700 dark:bg-blue-400/10 dark:text-blue-200">
                                                <FaCalendarAlt />
                                                {exp.duration}
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Detail Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55 }}
                        className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/70 dark:border-white/10 dark:bg-white/[0.06] dark:shadow-black/20"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, y: 18 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -18 }}
                                transition={{ duration: 0.28 }}
                                className="p-5 md:p-7"
                            >
                                <div className="flex flex-col gap-5 border-b border-slate-100 pb-6 dark:border-white/10 md:flex-row md:items-start md:justify-between">
                                    <div className="flex gap-4">
                                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500 to-violet-600 text-2xl text-white shadow-lg shadow-blue-500/25">
                                            {getIcon(activeExperience.icon)}
                                        </div>

                                        <div>
                                            <span
                                                className={`inline-flex rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.14em] ${
                                                    activeExperience.status === "Current"
                                                        ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-200"
                                                        : "bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-200"
                                                }`}
                                            >
                                                {activeExperience.status}
                                            </span>

                                            <h3 className="mt-3 text-2xl font-black leading-tight text-slate-950 dark:text-white md:text-3xl">
                                                {activeExperience.title}
                                            </h3>

                                            <p className="mt-2 flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-slate-300">
                                                <FaBuilding className="text-cyan-500 dark:text-cyan-300" />
                                                {activeExperience.company}
                                            </p>

                                            <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
                                                <FaCalendarAlt className="text-violet-500 dark:text-violet-300" />
                                                {activeExperience.duration}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 rounded-3xl border border-slate-100 bg-slate-50 p-5 dark:border-white/10 dark:bg-slate-950/40">
                                    <h4 className="text-sm font-black uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                                        Role Summary
                                    </h4>

                                    <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
                                        {activeExperience.summary}
                                    </p>
                                </div>

                                <div className="mt-6">
                                    <h4 className="mb-4 text-sm font-black uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                                        Key Responsibilities
                                    </h4>

                                    <div className="grid gap-3 md:grid-cols-2">
                                        {activeExperience.responsibilities.map((point, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 12 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.25, delay: index * 0.05 }}
                                                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700 dark:border-white/10 dark:bg-slate-950/40 dark:text-slate-300"
                                            >
                                                <FaCheckCircle className="mt-1 shrink-0 text-emerald-500 dark:text-emerald-300" />
                                                <span>{point}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                                    <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-4 dark:border-cyan-400/20 dark:bg-cyan-400/10">
                                        <FaChalkboardTeacher className="text-cyan-600 dark:text-cyan-300" />
                                        <p className="mt-2 text-xs font-black uppercase tracking-[0.14em] text-cyan-700 dark:text-cyan-200">
                                            Teaching
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border border-violet-200 bg-violet-50 p-4 dark:border-violet-400/20 dark:bg-violet-400/10">
                                        <FaLaptopCode className="text-violet-600 dark:text-violet-300" />
                                        <p className="mt-2 text-xs font-black uppercase tracking-[0.14em] text-violet-700 dark:text-violet-200">
                                            Development
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-400/20 dark:bg-emerald-400/10">
                                        <FaBriefcase className="text-emerald-600 dark:text-emerald-300" />
                                        <p className="mt-2 text-xs font-black uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-200">
                                            Professional
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}