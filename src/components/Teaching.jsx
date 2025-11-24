import { motion } from "framer-motion";

const teachingData = [
    { course: "Computer and Its Application in Business", semester: "Fall 2025", type: "Theory + Lab", students: 120 },
    { course: "Database Systems", semester: "Spring 2026", type: "Theory + Lab", students: 40 },
    { course: "E-Commerce and Web Management", semester: "Spring 2026", type: "Theory + Lab", students: 40 },
];

const totalStudents = teachingData.reduce((sum, item) => sum + item.students, 0);

export default function Teaching() {
    return (
        <section id="teaching" className="py-20 font-montserrat">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
                    Teaching Portfolio
                </h2>

                <p className="text-center text-gray-600 dark:text-gray-300 mb-14 text-lg font-medium">
                    Total Students Taught: <span className="font-bold text-blue-600 dark:text-blue-400">{totalStudents}+ Students</span>
                </p>

                <div className="grid md:grid-cols-2 gap-10">
                    {teachingData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-gray-800 border-l-4 border-blue-500 rounded-lg p-6 shadow-md hover:shadow-xl transition duration-300"
                        >
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{item.course}</h3>
                            <p className="text-blue-600 font-medium">{item.semester}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 italic">{item.type}</p>

                            <p className="mt-3 text-gray-700 dark:text-gray-300 font-semibold">
                                👥 Students: <span className="text-blue-600 dark:text-blue-400">{item.students}</span>
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
