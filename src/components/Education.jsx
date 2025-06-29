import React from "react";

const educationData = [
  {
    title: "M.Sc in Information and Communication Engineering",
    institution: "Bangladesh University of Professionals",
    duration: "2024 – Present",
    gpa: "Current CGPA: 3.94",
  },
  {
    title: "B.Sc in Information and Communication Engineering",
    institution: "Bangladesh University of Professionals",
    duration: "2020 – 2024",
    gpa: "CGPA: 3.89",
  },
  {
    title: "Higher Secondary Certificate",
    institution: "Adamjee Cantonment College",
    duration: "2017 – 2019",
    gpa: "CGPA: 4.83",
  },
  {
    title: "Secondary School Certificate",
    institution: "Shaheed Ramiz Uddin Cantonment School",
    duration: "2016 – 2017",
    gpa: "GPA: 5.00",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-14">
          Education
        </h2>
        <div className="relative border-l-4 border-blue-600 pl-6 space-y-12">
          {educationData.map((item, index) => (
            <div key={index} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[29px] top-2 w-5 h-5 bg-blue-600 border-4 border-white rounded-full shadow-md z-10"></div>

              {/* Timeline Card */}
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300 border-l-4 border-transparent group-hover:border-blue-300">
                <p className="text-sm text-blue-500 font-semibold mb-1">{item.duration}</p>
                <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                <p className="text-gray-700">{item.institution}</p>
                <p className="text-sm text-gray-500 mt-1">{item.gpa}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
