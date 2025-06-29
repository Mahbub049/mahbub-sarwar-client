import { Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-blue-100 py-8 px-4 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-center md:text-left">
          © 2025 <span className="font-semibold text-blue-200">Mahbub Sarwar</span>. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/mahbub049"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://github.com/mahbub049"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="mailto:mahbubsarwar49@gmail.com"
            className="hover:text-blue-400 transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}
