import { motion } from 'framer-motion';

const experienceData = [
    {
        title: "Lecturer",
        company: "Dept. of CSE, BUBT",
        duration: "Jul 2025 - Present",
        responsibilities: [
            'Developed and delivered comprehensive lectures, tutorials, and lab sessions for undergraduate courses.',
            'Designed course outlines and instructional materials aligned with the academic curriculum and learning outcomes.',
            'Conducted research activities and collaborated on departmental projects to promote academic growth.',
            'Engaged in continuous curriculum improvement by incorporating feedback and latest industry trends.'
        ]
    },
    {
        title: "Teaching Assistant",
        company: "Dept. of ICT, FST, BUP",
        duration: "Aug 2024 – Jun 2025",
        responsibilities: [
            "Assisted course instructors in delivering lectures and managing class materials.",
            'Participated in assessment tasks including paper scrutiny, result entry, and preparing question sets.',
            'Supported students by providing mentorship and clarifying course-related doubts.',
            'Helped maintain academic integrity by organizing invigilation and examination duties.'
        ]
    },
    {
        title: "Full Stack Web Developer (Intern)",
        company: "Genuity Systems Ltd, Dhaka",
        duration: "Nov 2022 – Dec 2022",
        responsibilities: [
            'Developed a dynamic e-commerce platform using Laravel, PHP, HTML5, and CSS3.',
            'Ensured best practices in software engineering through the implementation of MVC architecture.',
            'Designed and documented system architecture using Entity Relationship Diagrams (ERDs).',
            'Collaborated with a team to maintain clean code, version control, and proper testing protocols.'
        ]
    }
];

export default function Experience() {
    return (
        <section className="py-20 font-montserrat" id="experience">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
                    Experience
                </h2>

                <div className="grid md:grid-cols-2 gap-10">
                    {experienceData.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="bg-white dark:bg-gray-800 border-l-4 border-blue-500 rounded-lg p-6 pr-12 shadow-md hover:shadow-lg transition duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">{exp.title}</h3>
                            <p className="text-blue-600 font-medium">{exp.company}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 italic">{exp.duration}</p>

                            <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300 text-sm leading-relaxed text-justify">
                                {exp.responsibilities.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
