import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
    ExternalLink,
    Github,
    Server,
    Code2,
    FolderKanban,
    Boxes,
    Filter,
} from "lucide-react";

import project01 from "../assets/project-images/project05.png";
import project02 from "../assets/project-images/project01.png";
import project03 from "../assets/project-images/project02.png";
import project04 from "../assets/project-images/project03.png";
import project05 from "../assets/project-images/project04.png";
import project06 from "../assets/project-images/project06.png";

const allProjects = [
    {
        title: "Class Routine Management System",
        image: project06,
        description:
            "This class routine management system streamlines academic scheduling with an admin panel for managing routines, faculty, and courses, and a public view for students and staff. Built with React, Tailwind CSS, Node.js, and MongoDB, it ensures real-time updates, conflict-free scheduling, and responsive design.",
        tech: ["React", "Tailwind", "MongoDB", "Express", "Node", "JWT"],
        category: "MERN",
        live: "https://ictroutine.vercel.app/",
        client: "https://github.com/Mahbub049/Routine-Management-Client.git",
        server: "https://github.com/Mahbub049/Routine-Management-Server.git",
    },
    {
        title: "Professional Personal Faculty Website",
        image: project01,
        description:
            "This professional portfolio website showcases a faculty member’s academic credentials, research, and teaching experience in a clean, responsive layout. Built with React and Tailwind CSS, it ensures fast navigation and cross-device compatibility.",
        tech: ["React", "Tailwind", "Framer Motion"],
        category: "Portfolio",
        live: "https://nasiruddin.vercel.app/",
    },
    {
        title: "HostelMania - Hostel Management System",
        image: project02,
        description:
            "HostelMania is a web-based meal management system for student hostels, enabling students to choose meals, track orders, and give feedback. Built with React and Firebase, it ensures real-time updates, security, and mobile responsiveness.",
        tech: ["React", "Tailwind", "Firebase", "MongoDB"],
        category: "Firebase",
        live: "https://hostelmaniabd.web.app/",
        client: "https://github.com/yourrepo2-client",
        server: "https://github.com/yourrepo2-server",
    },
    {
        title: "TrioEats – Food Ordering",
        image: project03,
        description:
            "TrioEats is a restaurant management website offering a seamless dining experience. Customers can explore top dishes, reserve seats, contact the restaurant, and view its location through an interactive map.",
        tech: ["React", "Tailwind", "Firebase"],
        category: "Firebase",
        live: "https://trioeats-8ebfe.web.app/",
        client: "https://github.com/yourrepo3-client",
        server: "https://github.com/yourrepo3-server",
    },
    {
        title: "WanderSea – Tour Booking",
        image: project04,
        description:
            "WanderSEA is a tourism management platform showcasing Southeast Asia’s beauty and culture. Users can add, update, or delete tourist spots, while visitors explore destinations without login.",
        tech: ["React", "Tailwind", "Firebase"],
        category: "Firebase",
        live: "https://wandersea-d210a.web.app/",
        client: "https://github.com/yourrepo4-client",
        server: "https://github.com/yourrepo4-server",
    },
    {
        title: "Radiant Residences",
        image: project05,
        description:
            "Radiant Residences is a luxury accommodation platform featuring curated, high-end properties in top global destinations. It offers a refined, responsive browsing and booking experience.",
        tech: ["React", "Tailwind", "Firebase"],
        category: "Firebase",
        live: "https://radiant-residences.web.app/",
        client: "https://github.com/Mahbub049/Radiant-Residences",
    },
];

const filters = ["All", "MERN", "Firebase", "Portfolio"];

const fadeUp = {
    hidden: { opacity: 0, y: 22 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export default function Projects() {
    const [showAll, setShowAll] = useState(false);
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredProjects = useMemo(() => {
        if (activeFilter === "All") return allProjects;
        return allProjects.filter((project) => project.category === activeFilter);
    }, [activeFilter]);

    const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);

    const stats = [
        { label: "Projects", value: allProjects.length },
        { label: "Live", value: allProjects.filter((project) => project.live).length },
        { label: "Categories", value: filters.length - 1 },
    ];

    const getGradient = (index) => {
        const gradients = [
            "from-cyan-500 to-blue-600",
            "from-violet-500 to-fuchsia-600",
            "from-emerald-500 to-teal-600",
            "from-amber-500 to-orange-600",
            "from-blue-500 to-indigo-600",
            "from-rose-500 to-pink-600",
        ];

        return gradients[index % gradients.length];
    };

    return (
        <section
            id="projects"
            className="relative overflow-hidden bg-slate-50 px-4 py-16 font-montserrat text-slate-900 dark:bg-slate-950 dark:text-white md:px-6"
        >
            <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl dark:bg-cyan-500/10" />
            <div className="pointer-events-none absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-violet-300/20 blur-3xl dark:bg-violet-500/10" />

            <div className="relative z-10 mx-auto max-w-7xl">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"
                >
                    <div className="max-w-2xl">
                        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-cyan-700 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
                            <FolderKanban size={14} />
                            Development Portfolio
                        </span>

                        <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
                            Featured{" "}
                            <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 bg-clip-text text-transparent">
                                Projects
                            </span>
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
                            Selected development works with quick filters, live links, and
                            repository access.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                        {stats.map((item) => (
                            <div
                                key={item.label}
                                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-center shadow-sm dark:border-white/10 dark:bg-white/[0.06]"
                            >
                                <p className="text-2xl font-black text-blue-600 dark:text-blue-300">
                                    {item.value}
                                </p>
                                <p className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45 }}
                    className="mb-8 flex flex-wrap items-center gap-3"
                >
                    <span className="inline-flex items-center gap-2 text-sm font-black text-slate-500 dark:text-slate-400">
                        <Filter size={16} />
                        Filter:
                    </span>

                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => {
                                setActiveFilter(filter);
                                setShowAll(false);
                            }}
                            className={`rounded-full px-4 py-2 text-sm font-bold transition-all duration-300 ${
                                activeFilter === filter
                                    ? "bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-lg shadow-blue-500/25"
                                    : "border border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300 dark:hover:bg-blue-400/10 dark:hover:text-blue-200"
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </motion.div>

                {/* Project Cards */}
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {visibleProjects.map((project, index) => {
                        const gradient = getGradient(index);

                        return (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 26 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.45, delay: index * 0.06 }}
                                whileHover={{ y: -6 }}
                                className="group flex h-full flex-col overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white shadow-lg shadow-slate-200/70 transition-all duration-300 hover:border-blue-200 hover:shadow-2xl dark:border-white/10 dark:bg-white/[0.06] dark:shadow-black/20"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                                    <div
                                        className={`absolute left-4 top-4 rounded-2xl bg-gradient-to-r ${gradient} p-3 text-white shadow-lg`}
                                    >
                                        <Code2 size={20} />
                                    </div>

                                    <span className="absolute right-4 top-4 rounded-full bg-white/15 px-3 py-2 text-xs font-black text-white backdrop-blur-xl">
                                        {project.category}
                                    </span>

                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="text-xl font-black leading-tight text-white">
                                            {project.title}
                                        </h3>
                                    </div>
                                </div>

                                <div className="flex flex-1 flex-col p-5">
                                    <p className="text-justify text-sm leading-7 text-slate-600 dark:text-slate-300">
                                        {project.description}
                                    </p>

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700 dark:bg-blue-400/10 dark:text-blue-200"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-auto pt-5">
                                        <div className="grid gap-3">
                                            {project.live && (
                                                <a
                                                    href={project.live}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className={`inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r ${gradient} px-5 py-3 text-sm font-black text-white shadow-lg transition hover:shadow-xl`}
                                                >
                                                    <ExternalLink size={16} />
                                                    Live View
                                                </a>
                                            )}

                                            {(project.client || project.server) && (
                                                <div className="grid gap-3 sm:grid-cols-2">
                                                    {project.client && (
                                                        <a
                                                            href={project.client}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className={`inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-black text-white transition hover:bg-slate-800 ${
                                                                !project.server ? "sm:col-span-2" : ""
                                                            }`}
                                                        >
                                                            <Github size={16} />
                                                            Client
                                                        </a>
                                                    )}

                                                    {project.server && (
                                                        <a
                                                            href={project.server}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className={`inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-black text-white transition hover:bg-slate-800 ${
                                                                !project.client ? "sm:col-span-2" : ""
                                                            }`}
                                                        >
                                                            <Server size={16} />
                                                            Server
                                                        </a>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {!showAll && filteredProjects.length > 4 && (
                    <div className="mt-10 flex justify-center">
                        <motion.button
                            onClick={() => setShowAll(true)}
                            whileHover={{ y: -3, scale: 1.02 }}
                            whileTap={{ scale: 0.96 }}
                            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 px-7 py-3 text-sm font-black text-white shadow-xl shadow-blue-500/25"
                        >
                            <Boxes size={17} />
                            See All Projects
                        </motion.button>
                    </div>
                )}

                {visibleProjects.length === 0 && (
                    <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-sm font-bold text-slate-500 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300">
                        No projects found for this filter.
                    </div>
                )}
            </div>
        </section>
    );
}