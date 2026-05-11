import React from "react";
import { motion } from "framer-motion";
import {
    FaGraduationCap,
    FaUniversity,
    FaSchool,
    FaCalendarAlt,
    FaAward,
} from "react-icons/fa";

const educationData = [
    {
        title: "M.Sc in Information and Communication Engineering",
        institution: "Bangladesh University of Professionals",
        duration: "2024 – Present",
        gpa: "Current CGPA: 3.94",
    },
    {
        title: "B.Sc in Information and Communication Engineering",
        institution: "Bangladesh University of Professionals",
        duration: "2020 – 2024",
        gpa: "CGPA: 3.89",
    },
    {
        title: "Higher Secondary Certificate",
        institution: "Adamjee Cantonment College",
        duration: "2017 – 2019",
        gpa: "GPA: 4.83",
    },
    {
        title: "Secondary School Certificate",
        institution: "Shaheed Ramiz Uddin Cantonment School",
        duration: "2015 – 2017",
        gpa: "GPA: 5.00",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: "easeOut" },
    },
};

export default function Education() {
    return (
        <section
            id="education"
            className="relative overflow-hidden bg-slate-50 px-4 py-16 font-montserrat text-slate-900 dark:bg-slate-950 dark:text-white md:px-6"
        >
            <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl dark:bg-cyan-500/10" />
            <div className="pointer-events-none absolute -right-24 bottom-16 h-72 w-72 rounded-full bg-violet-300/20 blur-3xl dark:bg-violet-500/10" />

            <div className="relative z-10 mx-auto max-w-7xl">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
                >
                    <div>
                        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-cyan-700 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
                            <FaGraduationCap />
                            Academic Path
                        </span>

                        <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
                            Education{" "}
                            <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 bg-clip-text text-transparent">
                                Journey
                            </span>
                        </h2>

                        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
                            A compact overview of my academic background from school to
                            postgraduate study.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                        <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-center shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
                            <p className="text-2xl font-black text-blue-600 dark:text-blue-300">
                                04
                            </p>
                            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                                Records
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-center shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
                            <p className="text-2xl font-black text-emerald-600 dark:text-emerald-300">
                                3.94
                            </p>
                            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                                Current
                            </p>
                        </div>

                        <div className="col-span-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-center shadow-sm dark:border-white/10 dark:bg-white/[0.06] sm:col-span-1">
                            <p className="text-2xl font-black text-violet-600 dark:text-violet-300">
                                M.Sc
                            </p>
                            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                                Ongoing
                            </p>
                        </div>
                    </div>
                </motion.div>

                <div className="relative rounded-[2rem] border border-slate-200 bg-white/85 p-5 shadow-xl shadow-slate-200/70 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06] dark:shadow-black/20 md:p-7">
                    <div className="absolute left-8 top-10 hidden h-[calc(100%-5rem)] w-1 rounded-full bg-gradient-to-b from-cyan-500 via-blue-600 to-violet-600 md:block" />

                    <div className="space-y-5">
                        {educationData.map((item, index) => {
                            const isUniversity = index < 2;
                            const Icon = isUniversity ? FaUniversity : FaSchool;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -24 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45, delay: index * 0.08 }}
                                    className="group relative md:pl-16"
                                >
                                    <div className="absolute left-0 top-6 hidden h-11 w-11 items-center justify-center rounded-2xl border-4 border-white bg-gradient-to-br from-cyan-500 to-violet-600 text-white shadow-lg dark:border-slate-950 md:flex">
                                        <Icon />
                                    </div>

                                    <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-white group-hover:shadow-lg dark:border-white/10 dark:bg-slate-950/40 dark:group-hover:bg-white/[0.08]">
                                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                            <div>
                                                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700 dark:bg-blue-400/10 dark:text-blue-200">
                                                    <FaCalendarAlt />
                                                    {item.duration}
                                                </div>

                                                <h3 className="text-lg font-black text-slate-900 dark:text-white sm:text-xl">
                                                    {item.title}
                                                </h3>

                                                <p className="mt-2 text-sm font-medium leading-6 text-slate-600 dark:text-slate-300">
                                                    {item.institution}
                                                </p>
                                            </div>

                                            <div className="w-fit rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-black text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
                                                <span className="inline-flex items-center gap-2">
                                                    <FaAward />
                                                    {item.gpa}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}