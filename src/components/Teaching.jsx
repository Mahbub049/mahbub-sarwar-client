import { motion } from "framer-motion";
import {
    FaBookOpen,
    FaChalkboardTeacher,
    FaUsers,
    FaCalendarAlt,
    FaDatabase,
    FaLaptopCode,
    FaChartBar,
} from "react-icons/fa";

const teachingData = [
    {
        course: "Computer and Its Application in Business",
        semester: "Fall 2025",
        type: "Theory + Lab",
        students: 120,
    },
    {
        course: "Database Systems",
        semester: "Spring 2026",
        type: "Theory + Lab",
        students: 40,
    },
    {
        course: "E-Commerce and Web Management",
        semester: "Spring 2026",
        type: "Theory + Lab",
        students: 40,
    },
];

const totalStudents = teachingData.reduce((sum, item) => sum + item.students, 0);

export default function Teaching() {
    const maxStudents = Math.max(...teachingData.map((item) => item.students));

    const getIcon = (course) => {
        const text = course.toLowerCase();

        if (text.includes("database")) return <FaDatabase />;
        if (text.includes("commerce")) return <FaLaptopCode />;

        return <FaBookOpen />;
    };

    return (
        <section
            id="teaching"
            className="relative overflow-hidden bg-slate-50 px-4 py-16 font-montserrat text-slate-900 dark:bg-slate-950 dark:text-white md:px-6"
        >
            <div className="mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
                >
                    <div>
                        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
                            <FaChalkboardTeacher />
                            Teaching Portfolio
                        </span>

                        <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
                            Courses{" "}
                            <span className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                                Taught
                            </span>
                        </h2>

                        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
                            A clean teaching summary showing courses, semester, type, and
                            student load.
                        </p>
                    </div>

                    <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 text-center shadow-lg shadow-slate-200/70 dark:border-white/10 dark:bg-white/[0.06] dark:shadow-black/20">
                        <p className="text-4xl font-black text-blue-600 dark:text-blue-300">
                            {totalStudents}+
                        </p>
                        <p className="mt-1 text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                            Total Students
                        </p>
                    </div>
                </motion.div>

                <div className="grid gap-6 lg:grid-cols-[0.9fr_1.4fr]">
                    {/* Mini Chart */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55 }}
                        className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 dark:border-white/10 dark:bg-white/[0.06] dark:shadow-black/20"
                    >
                        <div className="mb-6 flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-blue-600 text-white shadow-lg">
                                <FaChartBar />
                            </div>

                            <div>
                                <h3 className="text-xl font-black text-slate-900 dark:text-white">
                                    Student Distribution
                                </h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                    Course-wise teaching load
                                </p>
                            </div>
                        </div>

                        <div className="space-y-5">
                            {teachingData.map((item, index) => {
                                const percentage = Math.round(
                                    (item.students / maxStudents) * 100
                                );

                                return (
                                    <div key={item.course}>
                                        <div className="mb-2 flex items-center justify-between gap-3">
                                            <p className="truncate text-sm font-bold text-slate-700 dark:text-slate-200">
                                                {item.course}
                                            </p>

                                            <span className="text-sm font-black text-blue-600 dark:text-blue-300">
                                                {item.students}
                                            </span>
                                        </div>

                                        <div className="h-3 overflow-hidden rounded-full bg-slate-100 dark:bg-white/10">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${percentage}%` }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    duration: 1,
                                                    delay: index * 0.1,
                                                    ease: "easeOut",
                                                }}
                                                className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600"
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Course Cards */}
                    <div className="grid gap-5">
                        {teachingData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 24 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.45, delay: index * 0.08 }}
                                className="group rounded-[1.7rem] border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-white/[0.06] dark:shadow-black/20"
                            >
                                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                                    <div className="flex gap-4">
                                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-blue-600 text-xl text-white shadow-lg transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                                            {getIcon(item.course)}
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-black leading-snug text-slate-900 dark:text-white sm:text-xl">
                                                {item.course}
                                            </h3>

                                            <div className="mt-3 flex flex-wrap gap-2">
                                                <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700 dark:bg-blue-400/10 dark:text-blue-200">
                                                    <FaCalendarAlt />
                                                    {item.semester}
                                                </span>

                                                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-200">
                                                    <FaBookOpen />
                                                    {item.type}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-fit rounded-2xl border border-violet-200 bg-violet-50 px-5 py-3 text-center dark:border-violet-400/20 dark:bg-violet-400/10">
                                        <p className="flex items-center justify-center gap-2 text-2xl font-black text-violet-700 dark:text-violet-200">
                                            <FaUsers />
                                            {item.students}
                                        </p>
                                        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-violet-500 dark:text-violet-300">
                                            Students
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}