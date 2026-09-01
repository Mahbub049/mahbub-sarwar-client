"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FileText, Menu, Moon, Sun, X } from "lucide-react";
import { navItems } from "@/lib/site-data";
import { CvViewerModal } from "@/components/cv-viewer-modal";

const mobileNavItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Research", href: "#research" },
  { label: "Teaching", href: "#teaching" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Leadership", href: "#leadership" },
  { label: "Awards", href: "#highlights" },
  { label: "Contact", href: "#contact" },
];

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
  const [mobileBrandVisible, setMobileBrandVisible] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const about = document.getElementById("about");
      if (!about) return;
      setMobileBrandVisible(about.getBoundingClientRect().bottom <= 94);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4 md:px-6">
        <motion.nav
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className={`mx-auto max-w-[1180px] rounded-[1.25rem] border px-3 transition-all duration-300 md:px-4 ${
            scrolled || open
              ? "hairline bg-[var(--surface-strong)] shadow-[0_16px_48px_rgba(0,0,0,0.14)] backdrop-blur-2xl"
              : "border-transparent bg-transparent"
          }`}
        >
          <div className="flex h-14 items-center gap-3 sm:h-16 sm:gap-4 lg:h-16 lg:justify-between lg:gap-4">
            <div className="min-w-0 flex-1 lg:flex-none">
              <a
                href="#about"
                className="focus-ring hidden w-fit rounded-lg font-display text-sm font-semibold tracking-normal sm:text-base lg:inline-block"
                aria-label="Mahbub Sarwar - Home"
              >
                <span>Mahbub</span><span className="ml-[0.24em] text-gradient">Sarwar</span>
              </a>

              <div className="lg:hidden">
                <AnimatePresence initial={false}>
                  {mobileBrandVisible ? (
                    <motion.a
                      key="mobile-brand"
                      href="#about"
                      initial={{ opacity: 0, x: -10, filter: "blur(3px)" }}
                      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, x: -8, filter: "blur(3px)" }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="focus-ring inline-block rounded-lg font-display text-sm font-semibold"
                      onClick={() => setOpen(false)}
                      aria-label="Mahbub Sarwar - Home"
                    >
                      <span>Mahbub</span><span className="ml-[0.24em] text-gradient">Sarwar</span>
                    </motion.a>
                  ) : null}
                </AnimatePresence>
              </div>
            </div>

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

            <div className="ml-auto flex shrink-0 items-center gap-2 lg:ml-0">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setCvOpen(true)}
                className="btn-primary focus-ring hidden rounded-full px-4 py-2.5 text-xs font-extrabold lg:inline-flex"
                aria-label="View CV"
              >
                <FileText size={14} />
                CV
              </button>
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
                initial={{ opacity: 0, height: 0, y: -6 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -6 }}
                transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden lg:hidden"
              >
                <div className="mb-3 rounded-[1.1rem] border hairline bg-[var(--bg)] p-2 shadow-[0_18px_48px_rgba(0,0,0,.16)]">
                  <div className="grid grid-cols-2 gap-1">
                    {mobileNavItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="rounded-xl px-3 py-2.5 text-sm font-bold text-[var(--muted)] transition hover:bg-[var(--surface-strong)] hover:text-[var(--text)]"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setOpen(false);
                      setCvOpen(true);
                    }}
                    className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl border hairline bg-[var(--surface)] px-4 py-3 text-sm font-extrabold text-[var(--text)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    <FileText size={16} />
                    View CV
                  </button>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.nav>
      </header>

      <CvViewerModal open={cvOpen} onClose={() => setCvOpen(false)} />
    </>
  );
}
