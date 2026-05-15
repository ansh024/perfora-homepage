"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = ["Shop", "Concern", "Kids", "Learn"];

// Placeholder — replace with real cart state
const CART_COUNT = 2;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-t-[3px] border-[#3D1F8F] transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_16px_0_rgba(61,31,143,0.09)]" : "shadow-none"
      }`}
    >
      {/* ── Main bar ── */}
      <div className="max-w-[1320px] mx-auto px-5 md:px-8 lg:px-12 h-[58px] flex items-center justify-between gap-4">

        {/* LEFT: Logo + Desktop nav */}
        <div className="flex items-center gap-7 lg:gap-9 flex-shrink-0">

          {/* Wordmark */}
          <motion.a
            href="#"
            aria-label="Perfora home"
            whileHover={{ opacity: 0.82 }}
            transition={{ duration: 0.15 }}
            className="flex items-baseline leading-none select-none"
          >
            <span
              className="text-[#0D0B10]"
              style={{
                fontFamily: "var(--font-playfair)",
                fontWeight: 900,
                fontSize: "clamp(22px, 2.1vw, 27px)",
                letterSpacing: "-0.02em",
              }}
            >
              perfora
            </span>
            {/* ® as raised small character — matches reference logo signature */}
            <span
              className="text-[#0D0B10]"
              style={{
                fontFamily: "var(--font-playfair)",
                fontWeight: 900,
                fontSize: "clamp(9px, 0.9vw, 11px)",
                verticalAlign: "super",
                lineHeight: 1,
                marginLeft: "1px",
              }}
            >
              ®
            </span>
          </motion.a>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                whileHover={{ color: "#3D1F8F" }}
                transition={{ duration: 0.15 }}
                className="text-[13.5px] font-normal text-[#1A0A3D] hover:text-[#3D1F8F] transition-colors duration-200 whitespace-nowrap"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {link}
              </motion.a>
            ))}
          </nav>
        </div>

        {/* RIGHT: Search + Account + Cart — desktop only */}
        <div className="hidden md:flex items-center gap-1.5">

          {/* Search pill */}
          <div className="relative flex items-center">
            <span className="absolute left-3 pointer-events-none text-[#A094C0]" aria-hidden>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="5.8" cy="5.8" r="4.05" stroke="currentColor" strokeWidth="1.35" />
                <path d="M9.5 9.5L12 12" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
              </svg>
            </span>
            <input
              type="search"
              placeholder="Search"
              aria-label="Search products"
              className="h-[34px] pl-[30px] pr-4 rounded-full border border-[#E2DCF5] bg-[#F7F5FF] text-[13px] text-[#1A0A3D] placeholder:text-[#A094C0] focus:outline-none focus:border-[#6B4FB3] focus:bg-white transition-all duration-200"
              style={{
                width: "clamp(160px, 17vw, 240px)",
                fontFamily: "var(--font-inter)",
              }}
            />
          </div>

          {/* Account */}
          <button
            aria-label="My account"
            className="p-2 text-[#1A0A3D] hover:text-[#3D1F8F] transition-colors duration-200 rounded-full hover:bg-[#F5F3FF]"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
              <circle cx="10" cy="6.5" r="3.25" stroke="currentColor" strokeWidth="1.5" />
              <path d="M3.25 17.5c0-3.176 3.022-5.75 6.75-5.75s6.75 2.574 6.75 5.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {/* Cart */}
          <button
            aria-label={`Cart, ${CART_COUNT} items`}
            className="p-2 relative text-[#1A0A3D] hover:text-[#3D1F8F] transition-colors duration-200 rounded-full hover:bg-[#F5F3FF]"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
              <path d="M6.75 7.25V6A3.25 3.25 0 0 1 13.25 6v1.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <rect x="2.75" y="7.25" width="14.5" height="10.5" rx="2" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <span
              className="absolute -top-[1px] -right-[1px] min-w-[16px] h-4 bg-[#3D1F8F] text-white rounded-full flex items-center justify-center leading-none"
              style={{
                fontSize: "9px",
                fontFamily: "var(--font-inter)",
                fontWeight: 600,
                padding: "0 3px",
              }}
              aria-hidden
            >
              {CART_COUNT}
            </span>
          </button>
        </div>

        {/* MOBILE RIGHT: Cart + Hamburger */}
        <div className="flex md:hidden items-center gap-0.5">
          <button
            aria-label={`Cart, ${CART_COUNT} items`}
            className="p-2 relative text-[#1A0A3D]"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
              <path d="M6.75 7.25V6A3.25 3.25 0 0 1 13.25 6v1.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <rect x="2.75" y="7.25" width="14.5" height="10.5" rx="2" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <span
              className="absolute top-1 right-1 min-w-[14px] h-[14px] bg-[#3D1F8F] text-white rounded-full flex items-center justify-center leading-none"
              style={{ fontSize: "8px", fontFamily: "var(--font-inter)", fontWeight: 600, padding: "0 2px" }}
              aria-hidden
            >
              {CART_COUNT}
            </span>
          </button>

          <button
            className="p-2 flex flex-col gap-[5px]"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-5 h-px bg-[#1A0A3D] origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-5 h-px bg-[#1A0A3D]"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-5 h-px bg-[#1A0A3D] origin-center"
            />
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-white border-t border-[#EDE9FB]"
          >
            <div className="px-5 pt-4 pb-6 flex flex-col gap-1">
              {/* Mobile search */}
              <div className="relative mb-3">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#A094C0]">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="5.8" cy="5.8" r="4.05" stroke="currentColor" strokeWidth="1.35" />
                    <path d="M9.5 9.5L12 12" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
                  </svg>
                </span>
                <input
                  type="search"
                  placeholder="Search products"
                  className="w-full h-10 pl-8 pr-4 rounded-full border border-[#E2DCF5] bg-[#F7F5FF] text-[13px] text-[#1A0A3D] placeholder:text-[#A094C0] focus:outline-none focus:border-[#6B4FB3]"
                  style={{ fontFamily: "var(--font-inter)" }}
                />
              </div>

              {/* Nav links */}
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-[14px] text-[#1A0A3D] hover:text-[#3D1F8F] transition-colors py-2.5 border-b border-[#F0EDFC] last:border-0"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {link}
                </a>
              ))}

              {/* Account */}
              <a
                href="#account"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2.5 text-[14px] text-[#1A0A3D] hover:text-[#3D1F8F] transition-colors pt-3"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="6.5" r="3.25" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M3.25 17.5c0-3.176 3.022-5.75 6.75-5.75s6.75 2.574 6.75 5.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                My Account
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
