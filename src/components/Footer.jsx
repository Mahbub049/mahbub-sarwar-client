import { Linkedin, Github, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-slate-950 px-4 py-8 font-montserrat text-white md:px-6">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.05] px-5 py-6 shadow-xl shadow-black/20 backdrop-blur-xl md:flex-row md:items-center md:justify-between">
                    <div className="text-center md:text-left">
                        <h2 className="bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-lg font-black text-transparent">
                            Mahbub Sarwar
                        </h2>

                        <p className="mt-1 text-sm text-slate-400">
                            Lecturer • Full Stack Web Developer • Researcher
                        </p>

                        <p className="mt-3 text-xs text-slate-500">
                            © 2026 Mahbub Sarwar. All rights reserved.
                        </p>
                    </div>

                    <div className="flex items-center justify-center gap-3">
                        <a
                            href="https://www.linkedin.com/in/mahbub049"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-slate-200 transition hover:-translate-y-1 hover:bg-blue-500 hover:text-white"
                        >
                            <Linkedin size={19} />
                        </a>

                        <a
                            href="https://github.com/mahbub049"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-slate-200 transition hover:-translate-y-1 hover:bg-slate-700 hover:text-white"
                        >
                            <Github size={19} />
                        </a>

                        <a
                            href="mailto:mahbubsarwar5@gmail.com"
                            aria-label="Email"
                            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-slate-200 transition hover:-translate-y-1 hover:bg-emerald-500 hover:text-white"
                        >
                            <Mail size={19} />
                        </a>

                        <a
                            href="#hero"
                            aria-label="Back to top"
                            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-lg shadow-blue-500/25 transition hover:-translate-y-1"
                        >
                            <ArrowUp size={19} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}