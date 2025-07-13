import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

import project01 from '../assets/project-images/project05.png';
import project02 from '../assets/project-images/project01.png';
import project03 from '../assets/project-images/project02.png';
import project04 from '../assets/project-images/project03.png';
import project05 from '../assets/project-images/project04.png';
import project06 from '../assets/project-images/project06.png';

// DESCRIPTION IN 60 WORDS ALWAYS
const allProjects = [
        {
        title: "Class Routine Management System",
        image: project06,
        description: "This class routine management system streamlines academic scheduling with an admin panel for managing routines, faculty, and courses, and a public view for students and staff. Built with React, Tailwind CSS, Node.js, and MongoDB, it ensures real-time updates, conflict-free scheduling, and responsive design. It improves transparency, reduces manual tasks, and offers a clean, printable routine interface.",
        tech: ["React", "Tailwind", "MongoDB", "Express", "Node", "JWT" ],
        live: "https://ictroutine.vercel.app/",
        client: "https://github.com/Mahbub049/Routine-Management-Client.git",
        server: "https://github.com/Mahbub049/Routine-Management-Server.git"
    },
    {
        title: "Professional Personal Faculty Website",
        image: project01,
        description: "This professional portfolio website showcases a faculty member’s academic credentials, research, and teaching experience in a clean, responsive layout. Built with React and Tailwind CSS, it ensures fast navigation and cross-device compatibility. With organized sections and accessible contact options, it enhances professional visibility, supports academic networking, and offers an intuitive experience for students and collaborators.",
        tech: ["React", "Tailwind", "Framer Motion"],
        live: "https://nasiruddin.vercel.app/",
    },
    {
        title: "HostelMania - Hostel Management System",
        image: project02,
        description: "HostelMania is a web-based meal management system for student hostels, enabling students to choose meals, track orders, and give feedback. Admins manage menus, inventory, and engagement. Built with React and Firebase, it ensures real-time updates, security, and mobile responsiveness. With dynamic scheduling and reviews, it streamlines hostel meal operations and enhances user satisfaction through a modern, intuitive interface.",
        tech: ["React", "Tailwind", "Firebase", "MongoDB"],
        live: "https://hostelmaniabd.web.app/",
        client: "https://github.com/yourrepo2-client",
        server: "https://github.com/yourrepo2-server"
    },
    {
        title: "TrioEats – Food Ordering",
        image: project03,
        description: "TrioEats is a restaurant management website offering a seamless dining experience. Customers can explore top dishes, reserve seats, contact the restaurant, and view its location via an interactive map. Featuring categorized menus, image galleries, and real-time updates, it streamlines ordering and boosts staff efficiency. Its responsive, user-friendly design ensures smooth navigation and enhances overall customer satisfaction.",
        tech: ["React", "Tailwind", "Firebase"],
        live: "https://trioeats-8ebfe.web.app/",
        client: "https://github.com/yourrepo3-client",
        server: "https://github.com/yourrepo3-server"
    },
    {
        title: "WanderSea – Tour Booking",
        image: project04,
        description: "WanderSEA is a tourism management platform showcasing Southeast Asia’s beauty and culture. Users can add, update, or delete tourist spots, while visitors explore destinations without login. Built with React, Node.js, and MongoDB, it ensures smooth trip planning, dynamic content, and fast performance. Its intuitive layout and responsive design enhance convenience for both contributors and travel enthusiasts.",
        tech: ["React", "Tailwind", "Firebase"],
        live: "https://wandersea-d210a.web.app/",
        client: "https://github.com/yourrepo4-client",
        server: "https://github.com/yourrepo4-server"
    },
    {
        title: "Radiant Residences",
        image: project05,
        description: "Radiant Residences is a luxury accommodation platform featuring curated, high-end properties in top global destinations. Each listing highlights superior comfort, style, and amenities with rich media and real-time availability. Designed for seamless trip planning, the site offers a refined, responsive layout that ensures an elegant browsing and booking experience for discerning travelers seeking exceptional stays.",
        tech: ["React", "Tailwind", "Firebase"],
        live: "https://radiant-residences.web.app/",
        client: "https://github.com/Mahbub049/Radiant-Residences",
    }
];

export default function Projects() {
    const [showAll, setShowAll] = useState(false);
    const visibleProjects = showAll ? allProjects : allProjects.slice(0, 4);

    return (
        <section id="projects" className="font-montserrat py-20 px-4 md:px-6 lg:px-10">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">Projects</h2>

                <div className="grid gap-10 md:grid-cols-2 auto-rows-fr">
                    {visibleProjects.map((project, index) => (
                        <motion.div
                            whileHover={{ scale: 1.015 }}
                            transition={{ duration: 0.3 }}
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full"
                        >
                            {/* Image with zoom effect */}
                            <div className="w-full h-48 overflow-hidden group">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Card Content */}
                            <div className="p-6 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 text-justify">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 text-xs mb-3">
                                        {project.tech.map((tech, i) => (
                                            <span key={i} className="bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-md font-medium">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Buttons Section */}
                                <div className="mt-4 flex flex-col gap-3">
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center justify-center gap-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-md transition"
                                        >
                                            <ExternalLink size={16} /> Live View
                                        </a>
                                    )}

                                    {(project.client || project.server) && (
                                        <div className="flex gap-3">
                                            {project.client && (
                                                <a
                                                    href={project.client}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className={`flex items-center justify-center gap-2 text-sm font-medium text-white bg-gray-800 hover:bg-gray-900 py-2 rounded-md transition ${!project.server ? 'w-full' : 'flex-1'}`}
                                                >
                                                    <Github size={16} /> Client
                                                </a>
                                            )}
                                            {project.server && (
                                                <a
                                                    href={project.server}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className={`flex items-center justify-center gap-2 text-sm font-medium text-white bg-gray-800 hover:bg-gray-900 py-2 rounded-md transition ${!project.client ? 'w-full' : 'flex-1'}`}
                                                >
                                                    <Github size={16} /> Server
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Show more button */}
                {!showAll && allProjects.length > 4 && (
                    <div className="text-center mt-12">
                        <button
                            onClick={() => setShowAll(true)}
                            className="px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition"
                        >
                            See All Projects
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
