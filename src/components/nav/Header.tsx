"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, ArrowUpRight } from "lucide-react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#010105]/90 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Registration Tag */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#f0b90b]/50 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl border border-white/15 bg-[#121224] flex items-center justify-center overflow-hidden shadow-md group-hover:border-[#f0b90b]/50 transition-colors">
              <Image
                src="/assets/logo.png"
                alt="Kenule Africa"
                width={40}
                height={40}
                priority
                className="w-full h-full object-contain p-1"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-syne text-sm sm:text-base font-extrabold tracking-tight text-white flex items-center gap-1.5">
                KENULE <span className="text-[#f0b90b]">AFRICA</span>
              </span>
              <span className="font-mono text-[9px] text-gray-400 tracking-wider">
                RC: 8380017
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest text-gray-300 font-syne"
          >
            <a
              href="#about"
              className="hover:text-white transition-colors focus:outline-none focus:text-[#f0b90b]"
            >
              About
            </a>
            <a
              href="#ventures"
              className="hover:text-white transition-colors focus:outline-none focus:text-[#f0b90b]"
            >
              Ventures
            </a>
            <a
              href="#legitlab"
              className="hover:text-white transition-colors focus:outline-none focus:text-[#f0b90b]"
            >
              LegitLab
            </a>
            <a
              href="#impact"
              className="hover:text-white transition-colors focus:outline-none focus:text-[#f0b90b]"
            >
              Impact
            </a>
            <a
              href="#contact"
              className="hover:text-white transition-colors focus:outline-none focus:text-[#f0b90b]"
            >
              Contact
            </a>
          </nav>

          {/* Action CTA & Mobile Trigger */}
          <div className="flex items-center gap-4">
            <a
              href="https://forms.gle/PzbnPTfnHMCd79uj8"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#f0b90b] text-black font-syne font-extrabold text-xs uppercase tracking-wider hover:bg-[#ffc820] hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(240,185,11,0.25)]"
            >
              <span>Apply Now</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-200 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
