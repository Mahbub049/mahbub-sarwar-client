// src/App.jsx

import { useState, useEffect } from "react";
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Publications from './components/Publications';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ExtraCurricular from './components/Extracurricular';
import Navbar from './components/Navbar';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true; // default to dark
  });

  // Apply or remove the dark class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen transition-colors duration-500 font-montserrat">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <Education />
      <Experience />
      <ExtraCurricular />
      <Skills />
      <Projects />
      <Achievements />
      <Publications />
      <ContactForm />
      <Footer />
    </div>
  );
}
