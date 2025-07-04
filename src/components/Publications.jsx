import { motion } from 'framer-motion';
import { FaFileAlt } from 'react-icons/fa';

const publications = [
    {
        title: 'An Explainable Ensemble Learning Framework for Brain Tumor Classification Using Pretrained Models and XAI Techniques',
        journal: 'Accepted in: Journal of FST Volume 3, Issue-01',
        year: 2025,
        status: 'Accepted'
    },
    {
        title: 'Sentiment Classification in Movie Reviews Through a Comparative Analysis of Machine Learning Models',
        journal: 'Accepted in: Journal of FST Volume 3, Issue-01',
        year: 2025,
        status: 'Accepted'
    },
    {
        title: 'Advanced Brain Tumor Classification and Segmentation with an Enhanced Weighted Ensemble of CNN Models and UNet Architecture',
        journal: 'Under Review',
        year: 2025,
        status: 'Under Review'
    }
];

export default function Publications() {
    return (
        <section id="publications" className="py-20 font-montserrat px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">Publications</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {publications.map((pub, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-gray-800 border border-blue-100 dark:border-gray-700 rounded-xl p-6 shadow hover:shadow-md transition duration-300 flex items-start gap-4"
                        >
                            <div className="text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-950 rounded-full p-3 shadow-sm mt-1">
                                <FaFileAlt size={20} />
                            </div>

                            <div className="flex flex-col">
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white leading-snug mb-1">{pub.title}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 italic">{pub.journal}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                    <span className="font-medium text-gray-600 dark:text-gray-300">{pub.year}</span> &middot;
                                    <span className={`ml-1 ${getStatusColor(pub.status)}`}>{pub.status}</span>
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

    );
}

function getStatusColor(status) {
    switch (status) {
        case "Accepted":
            return "text-green-600 dark:text-green-400 font-medium";
        case "Submitted":
            return "text-yellow-600 dark:text-yellow-400 font-medium";
        case "Under Review":
            return "text-orange-600 dark:text-orange-400 font-medium";
        default:
            return "text-gray-600 dark:text-gray-300";
    }
}

