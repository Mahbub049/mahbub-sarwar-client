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
    <section id="publications" className="py-20 bg-gradient-to-b from-blue-50 to-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-14"> Publications</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-blue-100 rounded-xl p-6 shadow hover:shadow-md transition duration-300 flex items-start gap-4"
            >
              <div className="text-blue-600 bg-blue-100 rounded-full p-3 shadow-sm mt-1">
                <FaFileAlt size={20} />
              </div>

              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-gray-800 leading-snug mb-1">{pub.title}</h3>
                <p className="text-sm text-gray-600 italic">{pub.journal}</p>
                <p className="text-sm text-gray-500 mt-1">
                  <span className="font-medium text-gray-600">{pub.year}</span> &middot; 
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

// Helper to color status
function getStatusColor(status) {
  switch (status) {
    case "Accepted":
      return "text-green-600 font-medium";
    case "Submitted":
      return "text-yellow-600 font-medium";
    case "Under Review":
      return "text-orange-600 font-medium";
    default:
      return "text-gray-600";
  }
}
