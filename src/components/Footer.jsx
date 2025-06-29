// src/components/Footer.jsx
import { Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-center md:text-left">© 2025 Mahbub Sarwar. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="https://www.linkedin.com/in/mahbub049" target="_blank" className="hover:text-white">
            <Linkedin size={20} />
          </a>
          <a href="https://github.com/mahbub049" target="_blank" className="hover:text-white">
            <Github size={20} />
          </a>
          <a href="mailto:mahbubsarwar49@gmail.com" className="hover:text-white">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
