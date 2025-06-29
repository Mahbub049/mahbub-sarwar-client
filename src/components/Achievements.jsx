// src/components/Achievements.js
import { motion } from "framer-motion";
import { FaTrophy } from "react-icons/fa";

const achievements = [
    {
        title: "Dean's Appreciation",
        date: "2023 (2 Semesters)",
        description: "Recognized for outstanding academic performance in two consecutive semesters.",
    },
    {
        title: "BUP Scholarship",
        date: "2021–2023 (4 Semesters)",
        description: "Awarded based on consistent academic excellence across four semesters.",
    },
    {
        title: "1st Runner-up – IEEE COVID-19 Congress",
        date: "2020",
        description: "Earned 2nd position in an international idea contest organized by IEEE.",
    },
    {
        title: "6th Place – MindExperia Idea Contest",
        date: "2020",
        description: "Ranked 6th nationally in a BUP Robotics Club tech-idea competition.",
    },
    {
        title: "Champion – Independence Day Essay Competition",
        date: "2019",
        description: "Secured 1st place in the national-level writing competition held at ACC.",
    },
];

export default function Achievements() {
    return (
        <section id="achievements" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-indigo-800">
                    🎖️ Achievements
                </h2>

                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="border border-indigo-100 rounded-xl p-5 bg-gray-50 shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <div className="flex items-center mb-4 text-indigo-600">
                                <FaTrophy className="mr-2 text-xl" />
                                <h3 className="font-semibold text-lg">{item.title}</h3>
                            </div>
                            <p className="text-sm text-gray-500 italic mb-2">{item.date}</p>
                            <p className="text-sm text-gray-700">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
