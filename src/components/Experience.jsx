import { motion } from 'framer-motion';

const experienceData = [
  {
    title: "Teaching Assistant",
    company: "Dept. of ICT, FST, BUP",
    duration: "Aug 2024 – Present",
    responsibilities: [
      "Assisting the faculty with the course content",
      "Helping conduct class, manage marks and examinations"
    ]
  },
  {
    title: "Full Stack Web Developer (Intern)",
    company: "Genuity Systems Ltd, Dhaka",
    duration: "Nov 2022 – Dec 2022",
    responsibilities: [
      "Developed ecommerce site with Laravel, PHP, HTML5, CSS3",
      "Followed MVC pattern, coding standards, ER diagrams"
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white" id="experience">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-14">
          Experience
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-white border-l-4 border-blue-500 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-1">{exp.title}</h3>
              <p className="text-blue-600 font-medium">{exp.company}</p>
              <p className="text-sm text-gray-500 mb-3 italic">{exp.duration}</p>

              <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm leading-relaxed">
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
