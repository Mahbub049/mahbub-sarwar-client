// src/components/Achievements.js
import { motion } from "framer-motion";
import {
    FaTrophy,
    FaAward,
    FaMedal,
    FaCalendarAlt,
    FaCrown,
    FaCertificate,
    FaUniversity,
    FaStar,
} from "react-icons/fa";

const achievements = [
    {
        title: "Dean's Appreciation",
        date: "2023 (2 Semesters)",
        description: "Recognized for outstanding academic performance in two consecutive semesters.",
        type: "Academic",
    },
    {
        title: "BUP Scholarship",
        date: "2021–2023 (4 Semesters)",
        description: "Awarded based on consistent academic excellence across four semesters.",
        type: "Scholarship",
    },
    {
        title: "1st Runner-up – IEEE COVID-19 Congress",
        date: "2020",
        description: "Earned 2nd position in an international idea contest organized by IEEE.",
        type: "Competition",
    },
    {
        title: "6th Place – MindExperia Idea Contest",
        date: "2020",
        description: "Ranked 6th nationally in a BUP Robotics Club tech-idea competition.",
        type: "Competition",
    },
    {
        title: "Champion – Independence Day Essay Competition",
        date: "2019",
        description: "Secured 1st place in the national-level writing competition held at ACC.",
        type: "Champion",
    },
];

const getIcon = (title) => {
    const text = title.toLowerCase();

    if (text.includes("champion")) return <FaCrown />;
    if (text.includes("runner")) return <FaMedal />;
    if (text.includes("scholarship")) return <FaUniversity />;
    if (text.includes("dean")) return <FaCertificate />;

    return <FaTrophy />;
};

const getGradient = (index) => {
    const gradients = [
        "from-amber-500 to-orange-600",
        "from-cyan-500 to-blue-600",
        "from-violet-500 to-fuchsia-600",
        "from-emerald-500 to-teal-600",
        "from-rose-500 to-pink-600",
    ];

    return gradients[index % gradients.length];
};

export default function Achievements() {
    const academicCount = achievements.filter(
        (item) => item.type === "Academic" || item.type === "Scholarship"
    ).length;

    const contestCount = achievements.length - academicCount;

    return (
        <section
            id="achievements"
            className="relative overflow-hidden bg-white px-4 py-16 font-montserrat text-slate-900 dark:bg-slate-950 dark:text-white md:px-6"
        >
            <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl dark:bg-amber-500/10" />
            <div className="pointer-events-none absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-violet-300/20 blur-3xl dark:bg-violet-500/10" />

            <div className="relative z-10 mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
                >
                    <div>
                        <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-amber-700 dark:border-amber-400/20 dark:bg-amber-400/10 dark:text-amber-200">
                            <FaTrophy />
                            Awards Wall
                        </span>

                        <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
                            My{" "}
                            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-violet-600 bg-clip-text text-transparent">
                                Achievements
                            </span>
                        </h2>

                        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
                            A compact award wall highlighting academic excellence, scholarships,
                            idea contests, and national-level recognition.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-center shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
                            <p className="text-2xl font-black text-amber-600 dark:text-amber-300">
                                {achievements.length}
                            </p>
                            <p className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">
                                Awards
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-center shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
                            <p className="text-2xl font-black text-blue-600 dark:text-blue-300">
                                {academicCount}
                            </p>
                            <p className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">
                                Academic
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-center shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
                            <p className="text-2xl font-black text-violet-600 dark:text-violet-300">
                                {contestCount}
                            </p>
                            <p className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">
                                Contests
                            </p>
                        </div>
                    </div>
                </motion.div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {achievements.map((item, index) => {
                        const gradient = getGradient(index);

                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.45, delay: index * 0.06 }}
                                whileHover={{ y: -7 }}
                                className={`group relative overflow-hidden rounded-[1.7rem] border border-slate-200 bg-slate-50 p-5 shadow-lg shadow-slate-200/70 transition-all duration-300 hover:bg-white hover:shadow-2xl dark:border-white/10 dark:bg-white/[0.06] dark:shadow-black/20 ${
                                    index === 0 ? "lg:col-span-2" : ""
                                }`}
                            >
                                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-white dark:bg-white/5" />

                                <div className="relative">
                                    <div className="mb-5 flex items-start justify-between gap-4">
                                        <div
                                            className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-xl text-white shadow-lg transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110`}
                                        >
                                            {getIcon(item.title)}
                                        </div>

                                        <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-black text-slate-600 dark:border-white/10 dark:bg-slate-950/40 dark:text-slate-300">
                                            {item.type}
                                        </span>
                                    </div>

                                    <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-700 dark:bg-amber-400/10 dark:text-amber-200">
                                        <FaCalendarAlt />
                                        {item.date}
                                    </div>

                                    <h3 className="text-lg font-black leading-snug text-slate-900 dark:text-white sm:text-xl">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                                        {item.description}
                                    </p>

                                    <div className="mt-5 flex flex-wrap gap-2">
                                        <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700 dark:bg-blue-400/10 dark:text-blue-200">
                                            <FaAward />
                                            Recognition
                                        </span>

                                        <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-3 py-1.5 text-xs font-bold text-violet-700 dark:bg-violet-400/10 dark:text-violet-200">
                                            <FaStar />
                                            Highlight
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}