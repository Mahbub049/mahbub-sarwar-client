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
import Teaching from './components/Teaching';


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
    <div className="text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-500 font-montserrat overflow-x-hidden">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-24 -left-20 w-96 h-96 rounded-full bg-cyan-300/40 dark:bg-cyan-500/20 blur-3xl" />
        <div className="absolute top-1/3 -right-20 w-[28rem] h-[28rem] rounded-full bg-violet-300/40 dark:bg-violet-600/20 blur-3xl" />
      </div>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <Education />
      <Experience />
      <Teaching />
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
