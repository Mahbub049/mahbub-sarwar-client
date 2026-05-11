// src/components/Navbar.jsx
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed left-0 top-0 z-50 w-full px-3 pt-3 font-montserrat sm:px-4 lg:px-6"
        >
            <div className="mx-auto max-w-7xl">
                <div className="flex min-h-14 items-center justify-between gap-3 rounded-2xl border border-white/60 bg-white/85 px-4 py-2.5 shadow-lg shadow-slate-900/10 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/80 dark:shadow-black/30 lg:px-5">
                    {/* Logo */}
                    <a
                        href="#hero"
                        onClick={closeMenu}
                        className="shrink-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 bg-clip-text text-sm font-black tracking-[0.18em] text-transparent sm:text-base"
                    >
                        MMSS
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 lg:flex xl:gap-1">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="whitespace-nowrap rounded-xl px-2.5 py-2 text-[12px] font-bold text-slate-700 transition-all duration-300 hover:bg-blue-50 hover:text-blue-700 dark:text-slate-200 dark:hover:bg-blue-400/10 dark:hover:text-blue-300 xl:px-3 xl:text-sm"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Controls */}
                    <div className="flex shrink-0 items-center gap-2">
                        <button
                            type="button"
                            onClick={() => setDarkMode(!darkMode)}
                            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-slate-700 transition hover:scale-105 hover:border-blue-200 hover:bg-blue-50 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
                            aria-label="Toggle Dark Mode"
                        >
                            {darkMode ? (
                                <FaSun className="text-yellow-400" />
                            ) : (
                                <FaMoon className="text-slate-800" />
                            )}
                        </button>

                        <button
                            type="button"
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-lg shadow-blue-500/25 lg:hidden"
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <X size={21} /> : <Menu size={21} />}
                        </button>
                    </div>
                </div>

                {/* Mobile / Tablet Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                            className="mt-3 rounded-2xl border border-white/60 bg-white/95 p-3 shadow-xl shadow-slate-900/15 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/95 lg:hidden"
                        >
                            <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                                {links.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={closeMenu}
                                        className="rounded-xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-blue-50 hover:text-blue-700 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-blue-400/10 dark:hover:text-blue-300"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}