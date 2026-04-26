"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Rreth Meje", href: "#about" },
  { label: "Shërbimet", href: "#services" },
  { label: "Pse Unë", href: "#why" },
  { label: "Kontakt", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const doScroll = () => {
      const el = document.getElementById(id);
      if (!el) return;
      const navHeight = 72;
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: "smooth" });
    };
    if (open) {
      setOpen(false);
      // Wait for menu close animation (300ms) then scroll
      setTimeout(doScroll, 320);
    } else {
      doScroll();
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#faf9f7]/95 backdrop-blur-md border-b border-[#e5e1da] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between h-18 py-4">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className={`font-[family-name:var(--font-playfair)] text-lg font-semibold tracking-wide hover:text-[#C8A96A] transition-colors duration-300 ${
            scrolled ? "text-[#111]" : "text-white"
          }`}
        >
          Murat Krasniqi
          <span className="block text-[10px] font-[family-name:var(--font-inter)] tracking-[0.25em] uppercase text-[#C8A96A] font-normal leading-none">
            Avokat
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-[13px] tracking-[0.12em] uppercase hover:text-[#C8A96A] transition-colors duration-300 font-medium ${
                scrolled ? "text-[#444]" : "text-white/85"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          aria-label="Hap menunë"
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-[5px] p-2"
        >
          <span
            className={`block h-[1.5px] w-6 transition-all duration-300 ${open ? "rotate-45 translate-y-[6.5px]" : ""} ${
              scrolled ? "bg-[#111]" : "bg-white"
            }`}
          />
          <span
            className={`block h-[1.5px] w-6 transition-all duration-300 ${open ? "opacity-0" : ""} ${
              scrolled ? "bg-[#111]" : "bg-white"
            }`}
          />
          <span
            className={`block h-[1.5px] w-6 transition-all duration-300 ${open ? "-rotate-45 -translate-y-[6.5px]" : ""} ${
              scrolled ? "bg-[#111]" : "bg-white"
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#faf9f7] border-t border-[#e5e1da] overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-[13px] tracking-[0.12em] uppercase text-[#444] hover:text-[#C8A96A] transition-colors duration-300 font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
