import { motion } from "framer-motion";
import {
    FaDatabase,
    FaGitAlt,
    FaGithub,
    FaJava,
    FaPhp,
    FaPython,
    FaReact,
    FaNodeJs,
    FaHtml5,
    FaCss3Alt,
    FaCode,
    FaTools,
} from "react-icons/fa";
import {
    SiCanva,
    SiCplusplus,
    SiFirebase,
    SiGoogledrive,
    SiMongodb,
    SiVercel,
    SiJavascript,
    SiTailwindcss,
} from "react-icons/si";

const skills = [
    { name: "React", icon: <FaReact />, type: "Frontend", color: "from-cyan-500 to-blue-600" },
    { name: "Node.js", icon: <FaNodeJs />, type: "Backend", color: "from-emerald-500 to-green-600" },
    { name: "MongoDB", icon: <SiMongodb />, type: "Database", color: "from-green-500 to-emerald-700" },
    { name: "JavaScript", icon: <SiJavascript />, type: "Language", color: "from-yellow-400 to-orange-500" },
    { name: "HTML5", icon: <FaHtml5 />, type: "Frontend", color: "from-orange-500 to-red-500" },
    { name: "CSS3", icon: <FaCss3Alt />, type: "Frontend", color: "from-blue-500 to-indigo-600" },
    { name: "Tailwind", icon: <SiTailwindcss />, type: "Frontend", color: "from-cyan-400 to-sky-600" },
    { name: "Python", icon: <FaPython />, type: "Language", color: "from-yellow-500 to-blue-600" },
    { name: "PHP", icon: <FaPhp />, type: "Backend", color: "from-indigo-500 to-violet-600" },
    { name: "Java", icon: <FaJava />, type: "Language", color: "from-red-500 to-orange-600" },
    { name: "MySQL", icon: <FaDatabase />, type: "Database", color: "from-slate-500 to-blue-600" },
    { name: "Git", icon: <FaGitAlt />, type: "Version Control", color: "from-red-500 to-orange-600" },
    { name: "GitHub", icon: <FaGithub />, type: "Version Control", color: "from-slate-800 to-slate-950" },
    { name: "C/C++", icon: <SiCplusplus />, type: "Language", color: "from-blue-500 to-violet-600" },
];

const tools = [
    { name: "Firebase", icon: <SiFirebase />, type: "Platform", color: "from-yellow-400 to-orange-500" },
    { name: "Vercel", icon: <SiVercel />, type: "Deployment", color: "from-slate-800 to-slate-950" },
    { name: "Canva", icon: <SiCanva />, type: "Design", color: "from-sky-500 to-cyan-600" },
    { name: "Google Drive", icon: <SiGoogledrive />, type: "Productivity", color: "from-green-500 to-emerald-600" },
];

const fadeUp = {
    hidden: { opacity: 0, y: 22 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export default function Skills() {
    return (
        <section
            id="skills"
            className="relative overflow-hidden bg-white px-4 py-16 font-montserrat text-slate-900 dark:bg-slate-950 dark:text-white md:px-6"
        >
            <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl dark:bg-cyan-500/10" />
            <div className="pointer-events-none absolute -right-24 bottom-16 h-72 w-72 rounded-full bg-violet-300/20 blur-3xl dark:bg-violet-500/10" />

            <div className="relative z-10 mx-auto max-w-6xl">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="mb-10 text-center"
                >
                    <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-cyan-700 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
                        <FaCode />
                        Technical Toolkit
                    </span>

                    <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
                        Skills &{" "}
                        <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 bg-clip-text text-transparent">
                            Tools
                        </span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
                        A compact overview of my development stack, programming languages,
                        databases, version control, deployment, and productivity tools.
                    </p>
                </motion.div>

                {/* Skill Count Strip */}
                <motion.div
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 grid gap-3 sm:grid-cols-3"
                >
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-center dark:border-white/10 dark:bg-white/[0.06]">
                        <p className="text-2xl font-black text-blue-600 dark:text-blue-300">
                            {skills.length}
                        </p>
                        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">
                            Developer Skills
                        </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-center dark:border-white/10 dark:bg-white/[0.06]">
                        <p className="text-2xl font-black text-emerald-600 dark:text-emerald-300">
                            {tools.length}
                        </p>
                        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">
                            Tools
                        </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-center dark:border-white/10 dark:bg-white/[0.06]">
                        <p className="text-2xl font-black text-violet-600 dark:text-violet-300">
                            MERN
                        </p>
                        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">
                            Core Stack
                        </p>
                    </div>
                </motion.div>

                {/* Developer Skills */}
                <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-5 shadow-xl shadow-slate-200/70 dark:border-white/10 dark:bg-white/[0.06] dark:shadow-black/20 md:p-7">
                    <div className="mb-6 flex items-center justify-between gap-4">
                        <div>
                            <h3 className="text-xl font-black text-slate-900 dark:text-white">
                                Developer Skills
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                Languages, frameworks, databases and version control
                            </p>
                        </div>

                        <FaCode className="text-2xl text-blue-500 dark:text-blue-300" />
                    </div>

                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.92 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.35, delay: index * 0.03 }}
                                whileHover={{ y: -6, scale: 1.03 }}
                                className="group rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-lg dark:border-white/10 dark:bg-slate-950/40 dark:hover:border-blue-400/30"
                            >
                                <div
                                    className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${skill.color} text-2xl text-white shadow-lg transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110`}
                                >
                                    {skill.icon}
                                </div>

                                <h4 className="mt-3 text-sm font-black text-slate-900 dark:text-white">
                                    {skill.name}
                                </h4>

                                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                                    {skill.type}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Tools */}
                <div className="mt-6 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/70 dark:border-white/10 dark:bg-white/[0.06] dark:shadow-black/20 md:p-7">
                    <div className="mb-6 flex items-center justify-between gap-4">
                        <div>
                            <h3 className="text-xl font-black text-slate-900 dark:text-white">
                                Tools & Platforms
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                Tools used for deployment, design and productivity
                            </p>
                        </div>

                        <FaTools className="text-2xl text-violet-500 dark:text-violet-300" />
                    </div>

                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                        {tools.map((tool, index) => (
                            <motion.div
                                key={tool.name}
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.35, delay: index * 0.04 }}
                                whileHover={{ y: -6, scale: 1.03 }}
                                className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center shadow-sm transition-all duration-300 hover:border-violet-200 hover:bg-white hover:shadow-lg dark:border-white/10 dark:bg-slate-950/40 dark:hover:border-violet-400/30"
                            >
                                <div
                                    className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${tool.color} text-2xl text-white shadow-lg transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110`}
                                >
                                    {tool.icon}
                                </div>

                                <h4 className="mt-3 text-sm font-black text-slate-900 dark:text-white">
                                    {tool.name}
                                </h4>

                                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                                    {tool.type}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}