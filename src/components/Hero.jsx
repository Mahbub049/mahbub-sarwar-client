import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from 'react-icons/fa';
import profilePic from '../assets/profile.jpg';

export default function Hero() {
  return (
    <section
      className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white flex items-center justify-center px-6 py-16"
      id="hero"
    >
      <div className="w-full max-w-7xl grid md:grid-cols-2 gap-10 items-center">
        {/* 🧑‍💻 Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
            Muhammad Mahbub <br className="hidden md:block" /> Sarwar Shafi
          </h1>
          <p className="text-xl font-semibold text-blue-700">
            Lecturer | Full Stack Web Developer
          </p>
          <p className="text-gray-600 text-base md:text-lg max-w-xl">
            Dedicated teaching enthusiast with a strong academic record and hands-on
            experience in tech clubs. Passionate about mentoring students and building
            impactful web applications.
          </p>

          {/* 🔗 Social Links */}
          <div className="flex justify-center md:justify-start gap-5 text-xl text-blue-600">
            <a href="mailto:mahbubsarwar5@gmail.com" aria-label="Email" className="hover:scale-110 transition-transform"><FaEnvelope /></a>
            <a href="tel:+8801999949083" aria-label="Phone" className="hover:scale-110 transition-transform"><FaPhone /></a>
            <a href="https://www.linkedin.com/in/mahbubsarwar49" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:scale-110 transition-transform"><FaLinkedin /></a>
            <a href="https://github.com/Mahbub049" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:scale-110 transition-transform"><FaGithub /></a>
          </div>

          {/* 📎 Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/Mahbub-CV.pdf"
              download
              className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 shadow-md"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="px-6 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-100 transition duration-300 shadow-sm"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* 🖼️ Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative w-[300px] h-[300px] md:w-[380px] md:h-[380px]">
            <img
              src={profilePic}
              alt="Profile"
              className="w-full h-full object-cover rounded-full border-4 border-blue-500 shadow-lg"
            />
            <div className="absolute inset-0 rounded-full border-8 border-blue-200 animate-ping opacity-10 z-[-1]"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
