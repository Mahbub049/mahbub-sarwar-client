"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { navItems, site } from "@/lib/site-data";

function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("portfolio-theme", next ? "dark" : "light");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="focus-ring grid h-10 w-10 place-items-center rounded-full border hairline bg-[var(--surface)] text-[var(--text)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-[var(--surface-strong)]"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {dark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <motion.nav
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className={`mx-auto max-w-[1180px] rounded-[1.25rem] border px-3 transition-all duration-300 md:px-4 ${
          scrolled
            ? "hairline bg-[color:var(--surface-strong)] shadow-[0_16px_48px_rgba(0,0,0,0.12)] backdrop-blur-2xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="flex h-16 items-center justify-between gap-4">
          <a
            href="#about"
            className="focus-ring group rounded-lg font-display text-sm font-semibold tracking-normal sm:text-base"
            onClick={() => setOpen(false)}
            aria-label="Mahbub Sarwar - Home"
          >
            <span>Mahbub</span><span className="ml-[0.24em] text-gradient">Sarwar</span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="focus-ring rounded-full px-3.5 py-2 text-[12px] font-bold text-[var(--muted)] transition hover:bg-[var(--surface)] hover:text-[var(--text)]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a href={site.cv} download className="btn-primary focus-ring hidden rounded-full px-4 py-2.5 text-xs font-extrabold sm:inline-flex">
              CV <ArrowUpRight size={14} />
            </a>
            <button
              type="button"
              className="focus-ring grid h-10 w-10 place-items-center rounded-full border hairline bg-[var(--surface)] lg:hidden"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-label="Toggle navigation"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden lg:hidden"
            >
              <div className="grid gap-1 border-t hairline py-3 sm:grid-cols-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm font-bold text-[var(--muted)] hover:bg-[var(--surface)] hover:text-[var(--text)]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
