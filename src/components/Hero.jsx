import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from 'react-icons/fa';
import profilePic from '../assets/profile.jpg';

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-[1100px] flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">

        {/* 🧑 Text Content */}
        <motion.div
          className="w-full md:w-[55%] text-center md:text-left space-y-5"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Muhammad Mahbub Sarwar Shafi
          </h1>
          <p className="text-xl text-gray-700 font-semibold">
            Lecturer | Full Stack Web Developer
          </p>
          <p className="text-gray-600">
            Dedicated teaching enthusiast with a strong academic record and hands-on experience in tech clubs.
            Passionate about mentoring students and building impactful web applications.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-5 text-xl text-blue-600">
            <a href="mailto:mahbubsarwar5@gmail.com" className="hover:scale-125 transition-transform"><FaEnvelope /></a>
            <a href="tel:+8801999949083" className="hover:scale-125 transition-transform"><FaPhone /></a>
            <a href="https://www.linkedin.com/in/mahbubsarwar49" target="_blank" rel="noreferrer" className="hover:scale-125 transition-transform"><FaLinkedin /></a>
            <a href="https://github.com/Mahbub049" target="_blank" rel="noreferrer" className="hover:scale-125 transition-transform"><FaGithub /></a>
          </div>

          {/* Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/Mahbub-CV.pdf"
              download
              className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="px-6 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-100 transition-all shadow"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* 🖼️ Image Section */}
        <motion.div
          className="w-full md:w-[45%] flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <img
              src={profilePic}
              alt="Profile"
              className="w-[350px] h-[350px] md:w-[400px] md:h-[400px] object-cover rounded-full border-4 border-blue-400 shadow-2xl"
            />
            <div className="absolute inset-0 rounded-full border-8 border-blue-100 animate-ping opacity-20 z-[-1]"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
