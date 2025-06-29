// Publications.jsx
import { motion } from 'framer-motion';
import { FaFileAlt } from 'react-icons/fa';

const publications = [
  {
    title: 'BERT-based Sentiment Analysis of Depression Posts with LIME-based Interpretability',
    journal: 'Submitted to: Journal of Computational Psychiatry',
    year: 2025,
    status: 'Submitted'
  },
  {
    title: 'Explainable Brain Tumor Classification using Ensemble Deep Learning and XAI',
    journal: 'Accepted in: BUP Journal Volume 3, Issue-01',
    year: 2025,
    status: 'Accepted'
  },
  {
    title: 'Survey on Explainable AI Techniques in Medical Imaging',
    journal: 'Under Review: Asian Journal of Computer Science',
    year: 2025,
    status: 'Under Review'
  }
];

export default function Publications() {
  return (
    <div className="py-20 px-4 bg-[#f9fafb]">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Publications</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        {publications.map((pub, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white shadow-md hover:shadow-lg transition rounded-lg p-6 border-l-4 border-indigo-500 flex items-start gap-4"
          >
            <div className="mt-1 text-indigo-600">
              <FaFileAlt size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 leading-snug mb-1">{pub.title}</h3>
              <p className="text-sm text-gray-600 italic">{pub.journal}</p>
              <p className="text-sm text-gray-500 mt-1">{pub.year} &middot; {pub.status}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
