import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import profilePic from '../assets/profile.jpg';
import { FaDownload, FaPaperPlane } from 'react-icons/fa';


export default function Hero() {
    return (
        <section
            className="min-h-screen font-montserrat flex items-center justify-center px-6 pt-28 pb-16"
            id="hero"
        >
            <div className="w-full max-w-7xl flex flex-col-reverse md:grid md:grid-cols-2 gap-10 items-center">
                {/* 🧑‍💻 Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6 text-center md:text-left"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-700 dark:text-blue-400 leading-snug tracking-tight">
                        <Typewriter
                            words={['Muhammad Mahbub Sarwar Shafi']}
                            loop={false}
                            cursor
                            cursorStyle="_"
                            typeSpeed={80}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                    </h1>

                    <p className="text-lg sm:text-xl font-semibold text-blue-700 dark:text-blue-400">
                        Lecturer | Full Stack Web Developer
                    </p>

                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg text-justify max-w-xl mx-auto md:mx-0">
                        Dedicated teaching professional with a solid academic background and practical experience in modern web technologies. Currently working as a Lecturer in Computer Science and Engineering at BUBT, with previous roles as a Teaching Assistant and Full Stack Web Development intern. Focused on effective student guidance, contributing to academic and technical initiatives, and developing web applications that integrate theoretical knowledge with real-world use. Also interested in conducting research in areas related to computing and emerging technologies.

                    </p>

                    {/* 🔗 Social Links */}
                    <div className="flex justify-center md:justify-start gap-5 text-xl text-blue-600 dark:text-blue-400">
                        <a href="mailto:mahbubsarwar5@gmail.com" aria-label="Email" className="hover:scale-110 transition-transform"><FaEnvelope /></a>
                        <a href="tel:+8801999949083" aria-label="Phone" className="hover:scale-110 transition-transform"><FaPhone /></a>
                        <a href="https://www.linkedin.com/in/mahbubsarwar49" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:scale-110 transition-transform"><FaLinkedin /></a>
                        <a href="https://github.com/Mahbub049" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:scale-110 transition-transform"><FaGithub /></a>
                    </div>

                    {/* 📎 Buttons */}
                    {/* <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a
                            href="/Mahbub-CV.pdf"
                            download
                            className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 shadow-md flex items-center gap-2 justify-center"
                        >
                            <FaDownload />
                            <span>Download CV</span>
                        </a>

                        <a
                            href="#contact"
                            className="px-6 py-2 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition duration-300 shadow-sm flex items-center gap-2 justify-center"
                        >
                            <FaPaperPlane />
                            <span>Contact Me</span>
                        </a>
                    </div> */}
                </motion.div>


                {/* 🖼️ Profile Image */}
                <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="flex justify-center"
                >
                    <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96">
                        <img
                            src={profilePic}
                            alt="Profile"
                            className="w-full h-full object-cover rounded-full border-4 border-blue-500 shadow-lg"
                        />
                    </div>
                </motion.div>

            </div>
        </section>

    );
}
