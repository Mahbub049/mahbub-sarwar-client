import { motion } from "framer-motion";
import {
    FaLinkedin,
    FaGithub,
    FaPhone,
    FaEnvelope,
    FaDownload,
    FaPaperPlane,
    FaGraduationCap,
    FaLaptopCode,
    FaMicroscope,
    FaUniversity,
    FaArrowRight,
    FaCode,
    FaBookOpen,
    FaStar,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import profilePic from "../assets/profile.jpg";

const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease: "easeOut" },
    },
};

const fadeLeft = {
    hidden: { opacity: 0, x: -32 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: "easeOut" },
    },
};

const fadeRight = {
    hidden: { opacity: 0, x: 32 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: "easeOut" },
    },
};

export default function Hero() {
    const socialLinks = [
        {
            icon: <FaEnvelope />,
            label: "Email",
            href: "mailto:mahbubsarwar5@gmail.com",
        },
        {
            icon: <FaPhone />,
            label: "Phone",
            href: "tel:+8801341883668",
        },
        {
            icon: <FaLinkedin />,
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/mahbubsarwar49",
            external: true,
        },
        {
            icon: <FaGithub />,
            label: "GitHub",
            href: "https://github.com/Mahbub049",
            external: true,
        },
    ];

    const summaryCards = [
        {
            icon: <FaGraduationCap />,
            title: "Academic Role",
            value: "Lecturer",
            color: "from-sky-500 to-cyan-500",
        },
        {
            icon: <FaLaptopCode />,
            title: "Technical Focus",
            value: "Full Stack Web",
            color: "from-violet-500 to-fuchsia-500",
        },
        {
            icon: <FaMicroscope />,
            title: "Research Interest",
            value: "Computing & AI",
            color: "from-emerald-500 to-teal-500",
        },
    ];

    const focusAreas = [
        {
            label: "Teaching",
            value: 92,
            icon: <FaBookOpen />,
            gradient: "from-blue-500 to-cyan-400",
        },
        {
            label: "Web Development",
            value: 88,
            icon: <FaCode />,
            gradient: "from-violet-500 to-purple-400",
        },
        {
            label: "Research",
            value: 78,
            icon: <FaMicroscope />,
            gradient: "from-emerald-500 to-teal-400",
        },
    ];

    return (
        <section
            id="hero"
            className="relative min-h-[calc(100vh-72px)] overflow-hidden bg-slate-50 px-4 pt-24 pb-8 font-montserrat text-slate-900 dark:bg-slate-950 dark:text-white sm:px-6 lg:px-8 lg:pt-24 lg:pb-6"
        >
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -35, 0],
                        scale: [1, 1.08, 1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -top-28 left-8 h-64 w-64 rounded-full bg-cyan-300/30 blur-3xl dark:bg-cyan-500/20"
                />

                <motion.div
                    animate={{
                        x: [0, -45, 0],
                        y: [0, 45, 0],
                        scale: [1, 1.12, 1],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute right-0 top-28 h-72 w-72 rounded-full bg-violet-300/30 blur-3xl dark:bg-violet-500/20"
                />

                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.055)_1px,transparent_1px)] bg-[size:52px_52px] opacity-40 dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px)]" />
            </div>

            <motion.div
                variants={containerVariant}
                initial="hidden"
                animate="visible"
                className="relative z-10 mx-auto grid min-h-[calc(100vh-120px)] w-full max-w-7xl items-center gap-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(340px,0.82fr)] xl:gap-10"
            >
                {/* Left Content */}
                <motion.div
                    variants={fadeLeft}
                    className="w-full rounded-[1.75rem] border border-white/70 bg-white/80 p-5 shadow-[0_22px_70px_rgba(15,23,42,0.12)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.06] dark:shadow-[0_22px_70px_rgba(0,0,0,0.35)] sm:p-6 lg:p-7 xl:p-8"
                >
                    <motion.div
                        variants={fadeUp}
                        className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-bold text-cyan-700 shadow-sm dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200"
                    >
                        <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_16px_rgba(16,185,129,0.8)]" />
                        Lecturer • Developer • Researcher
                    </motion.div>

                    <motion.h1
                        variants={fadeUp}
                        className="max-w-4xl text-center text-3xl font-black leading-tight tracking-tight text-slate-950 dark:text-white sm:text-4xl lg:text-left xl:text-5xl"
                    >
                        <span className="block text-slate-800 dark:text-slate-100">
                            Hello, I am
                        </span>

                        <span className="mt-1 block bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 bg-clip-text text-transparent drop-shadow-sm">
                            <Typewriter
                                words={["Muhammad Mahbub Sarwar Shafi"]}
                                loop={false}
                                cursor
                                cursorStyle="_"
                                typeSpeed={80}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        className="mt-4 text-center text-base font-extrabold text-blue-700 dark:text-blue-300 sm:text-lg lg:text-left"
                    >
                        Lecturer | Full Stack Web Developer
                    </motion.p>

                    <motion.p
                        variants={fadeUp}
                        className="mx-auto mt-4 max-w-3xl text-justify text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-[15px] lg:mx-0"
                    >
                        Dedicated teaching professional with a solid academic background and practical experience in modern web technologies. Currently working as a Lecturer in Computer Science and Engineering at BUBT, with previous roles as a Teaching Assistant and Full Stack Web Development intern. Focused on effective student guidance, contributing to academic and technical initiatives, and developing web applications that integrate theoretical knowledge with real-world use. Also interested in conducting research in areas related to computing and emerging technologies.
                    </motion.p>

                    <motion.div variants={fadeUp} className="mt-6 grid gap-3 sm:grid-cols-3">
                        {summaryCards.map((card) => (
                            <motion.div
                                key={card.title}
                                whileHover={{ y: -5, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                                className="group rounded-2xl border border-slate-200 bg-white p-3 shadow-lg shadow-slate-200/60 transition-all duration-300 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.05] dark:shadow-black/20"
                            >
                                <div
                                    className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${card.color} text-sm text-white shadow-lg transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110`}
                                >
                                    {card.icon}
                                </div>

                                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
                                    {card.title}
                                </p>

                                <h3 className="mt-1 text-sm font-black text-slate-800 dark:text-white">
                                    {card.value}
                                </h3>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        className="mt-6 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between"
                    >
                        <div className="flex justify-center gap-2.5 lg:justify-start">
                            {socialLinks.map((item) => (
                                <motion.a
                                    key={item.label}
                                    href={item.href}
                                    target={item.external ? "_blank" : undefined}
                                    rel={item.external ? "noreferrer" : undefined}
                                    aria-label={item.label}
                                    whileHover={{ y: -4, scale: 1.07 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-base text-blue-600 shadow-md shadow-slate-200/70 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50 dark:border-white/10 dark:bg-white/[0.06] dark:text-blue-300 dark:shadow-black/20 dark:hover:bg-blue-500/10"
                                >
                                    {item.icon}
                                </motion.a>
                            ))}
                        </div>

                        <div className="flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                            <motion.a
                                href="/Mahbub-CV.pdf"
                                download
                                whileHover={{ y: -3, scale: 1.02 }}
                                whileTap={{ scale: 0.97 }}
                                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 px-5 py-3 text-sm font-bold text-white shadow-xl shadow-blue-500/25 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/35"
                            >
                                <FaDownload />
                                <span>Download CV</span>
                                <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                            </motion.a>

                            <motion.a
                                href="#contact"
                                whileHover={{ y: -3, scale: 1.02 }}
                                whileTap={{ scale: 0.97 }}
                                className="inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-300 bg-cyan-50 px-5 py-3 text-sm font-bold text-cyan-700 shadow-lg shadow-cyan-100 transition-all duration-300 hover:bg-cyan-100 dark:border-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-200 dark:shadow-black/20 dark:hover:bg-cyan-400/15"
                            >
                                <FaPaperPlane />
                                <span>Contact Me</span>
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Visual Area */}
                <motion.div variants={fadeRight} className="relative flex items-center justify-center">
                    <div className="relative w-full max-w-[430px]">
                        {/* Portfolio Badge */}
                        <motion.div
                            animate={{ y: [0, -9, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute left-0 top-8 z-30 hidden rounded-2xl border border-white/70 bg-white/90 p-3 shadow-2xl shadow-slate-300/50 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/90 dark:shadow-black/30 sm:block"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg">
                                    <FaStar />
                                </div>

                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                                        Portfolio
                                    </p>
                                    <h4 className="text-xs font-black text-slate-800 dark:text-white">
                                        Faculty Profile
                                    </h4>
                                </div>
                            </div>
                        </motion.div>

                        {/* Image Card */}
                        <motion.div
                            initial={{ y: 0 }}
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="relative mx-auto flex aspect-[1.05/1] w-[260px] items-center justify-center rounded-[2rem] border border-white/70 bg-white/70 p-3 shadow-[0_30px_90px_rgba(59,130,246,0.24)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.06] dark:shadow-[0_30px_90px_rgba(0,0,0,0.45)] sm:w-[330px] lg:w-[385px]"
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 18,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="absolute inset-4 rounded-[1.6rem] border border-dashed border-cyan-300/80 dark:border-cyan-300/30"
                            />

                            <div className="absolute inset-8 rounded-[1.5rem] bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600 opacity-20 blur-2xl" />

                            <div className="relative h-full w-full overflow-hidden rounded-[1.7rem] border-4 border-white bg-slate-100 shadow-2xl dark:border-slate-800 dark:bg-slate-900">
                                <img
                                    src={profilePic}
                                    alt="Profile"
                                    className="h-full w-full object-cover"
                                />

                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent p-5">
                                    <p className="text-xs font-semibold text-cyan-200">
                                        Academic Portfolio
                                    </p>
                                    <h3 className="mt-1 text-lg font-black text-white">
                                        Teaching • Development • Research
                                    </h3>
                                </div>
                            </div>

                            {/* Current Role Badge - now attached to image, not focus card */}
{/* Current Role Badge - bottom-right attached to image */}
<motion.div
    animate={{ y: [0, 7, 0] }}
    transition={{
        duration: 4.8,
        repeat: Infinity,
        ease: "easeInOut",
    }}
    className="absolute -right-6 bottom-28 z-30 hidden rounded-2xl border border-white/70 bg-white/90 p-3 shadow-2xl shadow-slate-300/50 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/90 dark:shadow-black/30 md:block"
>
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 text-white shadow-lg">
                                        <FaUniversity />
                                    </div>

                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                                            Current Role
                                        </p>
                                        <h4 className="text-xs font-black text-slate-800 dark:text-white">
                                            Lecturer in CSE
                                        </h4>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Focus Chart */}
                        <motion.div
                            variants={fadeUp}
                            className="relative z-10 mx-auto -mt-3 max-w-sm rounded-[1.5rem] border border-white/70 bg-white/90 p-4 shadow-2xl shadow-slate-300/40 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/90 dark:shadow-black/30"
                        >
                            <div className="mb-4 flex items-center justify-between gap-4">
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-blue-500 dark:text-blue-300">
                                        Professional Focus
                                    </p>
                                    <h3 className="mt-1 text-base font-black text-slate-900 dark:text-white">
                                        Balanced Academic Profile
                                    </h3>
                                </div>

                                <div className="rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 p-3 text-white shadow-lg">
                                    <FaStar />
                                </div>
                            </div>

                            <div className="space-y-3">
                                {focusAreas.map((item) => (
                                    <div key={item.label}>
                                        <div className="mb-1.5 flex items-center justify-between gap-4">
                                            <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-200">
                                                <span className="text-blue-500 dark:text-blue-300">
                                                    {item.icon}
                                                </span>
                                                {item.label}
                                            </div>

                                            <span className="text-[11px] font-black text-slate-500 dark:text-slate-400">
                                                {item.value}%
                                            </span>
                                        </div>

                                        <div className="h-2.5 overflow-hidden rounded-full bg-slate-100 dark:bg-white/10">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${item.value}%` }}
                                                transition={{
                                                    duration: 1.1,
                                                    ease: "easeOut",
                                                    delay: 0.4,
                                                }}
                                                className={`h-full rounded-full bg-gradient-to-r ${item.gradient} shadow-lg`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}