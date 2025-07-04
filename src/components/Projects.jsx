import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

import project01 from '../assets/project-images/project05.png';
import project02 from '../assets/project-images/project01.png';
import project03 from '../assets/project-images/project02.png';
import project04 from '../assets/project-images/project03.png';
import project05 from '../assets/project-images/project04.png';
import project06 from '../assets/project-images/project06.png';

const allProjects = [
        {
        title: "Class Routine Management System",
        image: project06,
        description: "This class routine management website offers a complete solution for academic scheduling through an integrated admin panel and a responsive public view. Designed for educational institutions, it enables seamless creation, management, and display of class routines with real-time updates. The admin panel allows authorized personnel to add, edit, or delete routines, manage faculty details, course information, and site settings—ensuring accurate and conflict-free scheduling. The public interface presents a clean, searchable, and printable routine view accessible to students and faculty. Built with React.js, Tailwind CSS, and backed by a robust Node.js/Express and MongoDB backend, it guarantees high performance, user-friendliness, and cross-device compatibility. The platform enhances academic transparency, reduces manual workload, and improves communication by providing an intuitive and accessible class routine management experience.",
        tech: ["React", "Tailwind", "MongoDB", "Express", "Node", "JWT" ],
        live: "https://ictroutine.vercel.app/",
        client: "https://github.com/Mahbub049/Routine-Management-Client.git",
        server: "https://github.com/Mahbub049/Routine-Management-Server.git"
    },
    {
        title: "Professional Personal Faculty Website",
        image: project01,
        description: "This professional portfolio website is designed to represent a faculty member’s academic and research credentials in a structured and elegant way. It showcases academic achievements, research publications, teaching experiences, and educational background, all organized in a clean, responsive layout. Built with React and Tailwind CSS, it ensures cross-device compatibility and fast navigation. The site features easily accessible contact options, a well-structured UI, and clearly categorized sections. It improves professional visibility, encourages academic networking, and offers a user-friendly experience for students, collaborators, or institutions seeking information about the faculty member.",
        tech: ["React", "Tailwind", "Framer Motion"],
        live: "https://nasiruddin.vercel.app/",
    },
    {
        title: "HostelMania - Hostel Management System",
        image: project02,
        description: "HostelMania is a comprehensive web-based meal management system crafted for student hostels. It offers an efficient, intuitive platform where students can select meals, track orders, and submit feedback, while hostel admins manage inventory, menus, and user engagement. The system supports dynamic meal scheduling, rating systems, and reviews to encourage participation. Built with Firebase and React, it ensures real-time updates, secure access, and mobile responsiveness. With a focus on simplicity, performance, and clarity, HostelMania improves user satisfaction and streamlines meal operations in hostel environments through a responsive, modern user interface.",
        tech: ["React", "Tailwind", "Firebase", "MongoDB"],
        live: "https://hostelmaniabd.web.app/",
        client: "https://github.com/yourrepo2-client",
        server: "https://github.com/yourrepo2-server"
    },
    {
        title: "TrioEats – Food Ordering",
        image: project03,
        description: "TrioEats is a comprehensive restaurant management website designed to provide users with an exceptional dining experience through a modern, user-friendly platform. It allows customers to explore top-selling products, reserve seats, contact the restaurant, and view the exact location on an interactive map, ensuring both convenience and clarity. From extensive menu displays and categorized food listings to effortless ordering processes and interactive image galleries, TrioEats streamlines restaurant operations. With responsive design, smooth navigation, and real-time updates, it enhances customer satisfaction and supports restaurant staff.",
        tech: ["React", "Tailwind", "Firebase"],
        live: "https://trioeats-8ebfe.web.app/",
        client: "https://github.com/yourrepo3-client",
        server: "https://github.com/yourrepo3-server"
    },
    {
        title: "WanderSea – Tour Booking",
        image: project04,
        description: "WanderSEA is a feature-rich tourism management platform highlighting the beauty and culture of Southeast Asia. It enables users to add, update, and delete tourist spots, while allowing general visitors to freely explore destinations without requiring login. Designed with modern technologies like React, Node.js, and MongoDB, WanderSEA ensures seamless trip planning, dynamic content handling, and a smooth browsing experience. The platform emphasizes user convenience, showcasing key tourist information with an intuitive layout, responsive interface, and fast performance for both contributors and casual explorers seeking reliable travel resources.",
        tech: ["React", "Tailwind", "Firebase"],
        live: "https://wandersea-d210a.web.app/",
        client: "https://github.com/yourrepo4-client",
        server: "https://github.com/yourrepo4-server"
    },
    {
        title: "Radiant Residences",
        image: project05,
        description: "Radiant Residences is a luxury accommodation platform offering an elegant selection of curated properties for high-end travelers. Each listing is handpicked to reflect superior quality, comfort, and style in the world’s most desirable destinations. The site provides rich media galleries, detailed amenities, and real-time availability to support easy trip planning. With a strong commitment to excellence and hospitality, Radiant Residences ensures a seamless experience from browsing to booking. Its responsive design, refined layout, and engaging content create a memorable and visually appealing journey for luxury-seeking guests around the globe.",
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
