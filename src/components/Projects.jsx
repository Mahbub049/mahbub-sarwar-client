import { useState } from "react";
import { motion } from "framer-motion";
import project01 from '../assets/project-images/project05.png';
import project02 from '../assets/project-images/project01.png';
import project03 from '../assets/project-images/project02.png';
import project04 from '../assets/project-images/project03.png';
import project05 from '../assets/project-images/project04.png';

const allProjects = [
    {
        title: "Personal Portfolio",
        image: project01,
        description: "Modern portfolio website to showcase profile, education, projects, and publications.",
        tech: ["React", "Tailwind", "Framer Motion"],
        live: "https://nasiruddin.vercel.app/",
        client: "https://github.com/yourrepo1-client",
        server: "https://github.com/yourrepo1-server"
    },
    {
        title: "Bachelor Housing Finder",
        image: project02,
        description: "A MERN stack platform to list and book bachelor/shared housing with filters and media support.",
        tech: ["React", "Tailwind", "Firebase", "MongoDB"],
        live: "https://hostelmaniabd.web.app/",
        client: "https://github.com/yourrepo2-client",
        server: "https://github.com/yourrepo2-server"
    },
    {
        title: "TrioEats – Food Ordering",
        image: project03,
        description: "A food ordering web app with dynamic menus, booking system, and Firebase authentication.",
        tech: ["React", "Tailwind", "Firebase"],
        live: "https://trioeats-8ebfe.web.app/",
        client: "https://github.com/yourrepo3-client",
        server: "https://github.com/yourrepo3-server"
    },
    {
        title: "WanderSea – Tour Booking",
        image: project04,
        description: "Tour booking platform with filters, package details, and user login using Firebase.",
        tech: ["React", "Tailwind", "Firebase"],
        live: "https://wandersea-d210a.web.app/",
        client: "https://github.com/yourrepo4-client",
        server: "https://github.com/yourrepo4-server"
    },
    {
        title: "Radiant Residences",
        image: project05,
        description: "Elegant real estate website for showcasing apartments and booking inquiries.",
        tech: ["React", "Tailwind", "Firebase"],
        live: "https://radiant-residences.web.app/",
        client: "https://github.com/yourrepo5-client",
        server: "https://github.com/yourrepo5-server"
    },
];

export default function Projects() {
    const [showAll, setShowAll] = useState(false);
    const visibleProjects = showAll ? allProjects : allProjects.slice(0, 4);

    return (
        <section id="projects" className="bg-white py-16">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

                <div className="grid gap-8 md:grid-cols-2">
                    {visibleProjects.map((project, index) => (
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            key={index}
                            className="rounded-lg shadow-md border overflow-hidden flex flex-col"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-4 flex flex-col justify-between h-full">
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                    <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 text-xs mb-6">
                                        {project.tech.map((t, i) => (
                                            <span
                                                key={i}
                                                className="bg-blue-100 text-blue-600 px-2 py-1 rounded"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-auto px-2 pb-4">
                                    <div className="flex justify-between gap-3">
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="w-1/3 text-center bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md font-medium transition"
                                        >
                                            Live View
                                        </a>
                                        <a
                                            href={project.client}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="w-1/3 text-center bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md font-medium transition"
                                        >
                                            Client Code
                                        </a>
                                        <a
                                            href={project.server}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="w-1/3 text-center bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md font-medium transition"
                                        >
                                            Server Code
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>

                {!showAll && allProjects.length > 4 && (
                    <div className="text-center mt-10">
                        <button
                            onClick={() => setShowAll(true)}
                            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            See All Projects
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
