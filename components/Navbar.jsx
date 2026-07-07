"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/lib/data";
import { useActiveSection } from "@/lib/useActiveSection";
import ThemeToggle from "@/components/ThemeToggle";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(navLinks.map((l) => l.href));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-editorial ${
          scrolled
            ? "bg-paper/90 dark:bg-obsidian/90 backdrop-blur-md border-b border-hairline-light dark:border-hairline-dark py-3"
            : "bg-transparent py-6"
        }`}
      >
        <nav
          className={`section-px flex items-center justify-between transition-colors duration-500 ease-editorial ${
            scrolled ? "text-ink dark:text-bone" : "text-white"
          }`}
        >
          <button
            onClick={() => scrollTo("home")}
            className="font-display text-lg tracking-wide"
            aria-label="Go to homepage"
          >
            {profile.name.split(" ")[0]}{" "}
            <span className="text-brass">{profile.name.split(" ")[1]?.[0]}.</span>
          </button>

          <ul className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="group relative text-sm tracking-wide"
                >
                  <span
                    className={
                      active === link.href
                        ? "text-brass"
                        : `${scrolled ? "text-ink/80 dark:text-bone/80" : "text-white/85"} group-hover:text-brass`
                    }
                  >
                    {link.label}
                  </span>
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-brass transition-all duration-300 ease-editorial ${
                      active === link.href ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle
              className={scrolled ? "border-current/20" : "border-white/40 hover:border-brass"}
            />
            <Button
              variant={scrolled ? "primary" : "onDark"}
              onClick={() => scrollTo("contact")}
            >
              Hire Me
            </Button>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle
              className={scrolled ? "border-current/20" : "border-white/40 hover:border-brass"}
            />
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="flex h-9 w-9 items-center justify-center"
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-paper dark:bg-obsidian lg:hidden"
          >
            <div className="section-px flex items-center justify-between py-6">
              <span className="font-display text-lg">{profile.name}</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center"
              >
                <X size={22} />
              </button>
            </div>
            <ul className="section-px mt-10 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="font-display text-4xl font-light py-3 text-ink dark:text-bone"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
            <div className="section-px mt-10">
              <Button variant="primary" onClick={() => scrollTo("contact")} className="w-full">
                Hire Me
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
