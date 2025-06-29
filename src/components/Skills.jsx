import { FaDatabase, FaGitAlt, FaGithub, FaJava, FaPhp, FaPython, FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiCanva, SiCplusplus, SiFirebase, SiGoogledrive, SiMongodb, SiVercel } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-blue-500 text-4xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-4xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700 text-4xl" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-4xl" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-700 text-4xl" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500 text-4xl" /> },
  { name: "Python", icon: <FaPython className="text-yellow-600 text-4xl" /> },
  { name: "PHP", icon: <FaPhp className="text-indigo-600 text-4xl" /> },
  { name: "Java", icon: <FaJava className="text-red-700 text-4xl" /> },
  { name: "MySQL", icon: <FaDatabase className="text-gray-700 text-4xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500 text-4xl" /> },
  { name: "GitHub", icon: <FaGithub className="text-black text-4xl" /> },
  { name: "C/C++", icon: <SiCplusplus className="text-blue-500 text-4xl" /> },
];

const tools = [
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500 text-4xl" /> },
  { name: "Vercel", icon: <SiVercel className="text-black text-4xl" /> },
  { name: "Canva", icon: <SiCanva className="text-sky-500 text-4xl" /> },
  { name: "Google Drive", icon: <SiGoogledrive className="text-green-500 text-4xl" /> },
];

export default function Skills() {
  return (
    <section className="py-16 font-montserrat bg-gray-50" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-14">Skills & Tools</h2>

        {/* Developer Skills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-12">
          {skills.map((skill, idx) => (
            <div key={idx} className="flex flex-col items-center hover:scale-105 transition duration-300">
              {skill.icon}
              <p className="mt-2 text-sm font-medium">{skill.name}</p>
            </div>
          ))}
        </div>

        {/* Tools */}
        <h3 className="text-2xl font-semibold text-center mb-6">Tools</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {tools.map((tool, idx) => (
            <div key={idx} className="flex flex-col items-center hover:scale-105 transition duration-300">
              {tool.icon}
              <p className="mt-2 text-sm font-medium">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
