// src/components/Navbar.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FaMoon, FaSun } from "react-icons/fa";

const links = [
    { name: "Home", href: "#hero" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Teaching", href: "#teaching" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Achievements", href: "#achievements" },
    { name: "Publications", href: "#publications" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar({ darkMode, setDarkMode }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 w-full z-50 text-slate-800 dark:text-white"
        >
            <div className="max-w-7xl mx-auto mt-3 px-4 md:px-6">
            <div className="px-4 py-3 md:px-6 md:py-4 flex items-center justify-between rounded-2xl border border-white/40 dark:border-white/10 bg-white/75 dark:bg-slate-900/65 backdrop-blur-xl shadow-lg">
                {/* Logo */}
                <a href="#hero" className="text-base md:text-lg font-bold bg-gradient-to-r from-cyan-500 to-violet-500 bg-clip-text text-transparent tracking-wide">
                    M.M.S. SHAFI
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-6">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="hover:text-cyan-600 dark:hover:text-cyan-300 font-medium transition"
                        >
                            {link.name}
                        </a>
                    ))}

                    {/* 🌙 Toggle Dark Mode Button */}
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="ml-4 p-2 rounded-full bg-slate-200/80 dark:bg-slate-700/80 hover:scale-110 transition"
                        aria-label="Toggle Dark Mode"
                    >
                        {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800" />}
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center gap-2">
                    {/* 🌙 Mobile Toggle Dark Mode */}
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2 rounded-full bg-slate-200/80 dark:bg-slate-700/80"
                    >
                        {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800" />}
                    </button>

                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div></div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-2 mx-4 rounded-2xl border border-white/40 dark:border-white/10 bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl px-6 pb-4 pt-2 space-y-3">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="block font-montserrat hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </motion.nav>
    );
}
