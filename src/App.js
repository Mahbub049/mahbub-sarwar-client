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

function App() {
  return (
    <div className="font-sans">
      <Navbar/>
      <Hero />
      <Education />
      <Experience />
      <ExtraCurricular />
      <Skills />
      <Projects />
      <Achievements />
      <Publications />
      <ContactForm />
      <Footer/>
    </div>
  );
}

export default App;
