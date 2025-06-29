import { motion } from 'framer-motion';

const experienceData = [
    {
        title: "Teaching Assistant",
        company: "Dept. of ICT, FST, BUP",
        duration: "Aug 2024 – Present",
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
        <section className="py-20 font-montserrat bg-gradient-to-b from-white via-blue-50 to-white" id="experience">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-14">
                    Experience
                </h2>

                <div className="grid md:grid-cols-2 gap-10">
                    {experienceData.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="bg-white border-l-4 border-blue-500 rounded-lg p-6 pr-12 shadow-md hover:shadow-lg transition duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xl font-bold text-gray-800 mb-1">{exp.title}</h3>
                            <p className="text-blue-600 font-medium">{exp.company}</p>
                            <p className="text-sm text-gray-500 mb-3 italic">{exp.duration}</p>

                            <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm leading-relaxed text-justify">
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
