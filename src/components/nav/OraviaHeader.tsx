"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";

export default function OraviaHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-8 md:px-12 lg:px-20 py-3.5 sm:py-4 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[#EAEAEA] shadow-sm"
            : "bg-[#FAFAFA]/95 backdrop-blur-md border-b border-[#EAEAEA]/50"
        }`}
      >
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 focus:outline-none group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden flex items-center justify-center transition-transform group-hover:scale-105 shrink-0">
              <Image
                src="/assets/logo.png"
                alt="Kenule Africa Logo"
                width={36}
                height={36}
                className="w-full h-full object-contain rounded-full"
                priority
              />
            </div>
            <span className="font-sans text-sm sm:text-base font-bold tracking-tight text-[#111111]">
              KENULE AFRICA
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="font-sans text-xs font-medium text-[#666666] hover:text-[#111111] transition-colors"
            >
              Our Story
            </a>
            <a
              href="#ventures"
              className="font-sans text-xs font-medium text-[#666666] hover:text-[#111111] transition-colors"
            >
              Ventures
            </a>
            <a
              href="#lifecycle"
              className="font-sans text-xs font-medium text-[#666666] hover:text-[#111111] transition-colors"
            >
              Methodology
            </a>
            <a
              href="#legitlab"
              className="font-sans text-xs font-medium text-[#666666] hover:text-[#111111] transition-colors"
            >
              LegitLab
            </a>
            <a
              href="#contact"
              className="font-sans text-xs font-medium text-[#666666] hover:text-[#111111] transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="https://forms.gle/PzbnPTfnHMCd79uj8"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex group relative isolate overflow-hidden bg-[#111111] text-white text-xs font-semibold px-5 sm:px-6 py-2.5 rounded shadow-[0_1px_2px_rgba(0,0,0,0.08)] ring-1 ring-white/10 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-[1.04] hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.25)] hover:ring-white/20 active:scale-[0.98] focus:outline-none items-center gap-1.5"
            >
              <div className="shimmer-layer absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent z-10 pointer-events-none"></div>
              <span className="relative z-20">Apply to LegitLab</span>
              <ArrowRight className="w-3.5 h-3.5 relative z-20 transition-transform group-hover:translate-x-0.5" />
            </a>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#111111] hover:bg-black/5 active:bg-black/10 rounded-lg border border-[#EAEAEA] bg-white transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FAFAFA]/98 backdrop-blur-2xl md:hidden flex flex-col justify-between p-6 pt-24 pb-8 animate-in fade-in duration-200">
          <div className="flex flex-col gap-1 text-base font-medium text-[#111111] divide-y divide-[#EAEAEA]/80">
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-3.5 px-2 flex items-center justify-between text-[#111111] hover:text-black font-semibold text-lg"
            >
              <span>Our Story</span>
              <ArrowRight className="w-4 h-4 text-[#888888]" />
            </a>
            <a
              href="#ventures"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-3.5 px-2 flex items-center justify-between text-[#111111] hover:text-black font-semibold text-lg"
            >
              <span>Ventures</span>
              <ArrowRight className="w-4 h-4 text-[#888888]" />
            </a>
            <a
              href="#lifecycle"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-3.5 px-2 flex items-center justify-between text-[#111111] hover:text-black font-semibold text-lg"
            >
              <span>Methodology</span>
              <ArrowRight className="w-4 h-4 text-[#888888]" />
            </a>
            <a
              href="#legitlab"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-3.5 px-2 flex items-center justify-between text-[#111111] hover:text-black font-semibold text-lg"
            >
              <span>LegitLab</span>
              <ArrowRight className="w-4 h-4 text-[#888888]" />
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-3.5 px-2 flex items-center justify-between text-[#111111] hover:text-black font-semibold text-lg"
            >
              <span>Contact</span>
              <ArrowRight className="w-4 h-4 text-[#888888]" />
            </a>
          </div>

          <div className="pt-6 space-y-4">
            <a
              href="https://forms.gle/PzbnPTfnHMCd79uj8"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-4 bg-[#111111] text-white rounded-xl font-semibold text-sm shadow-lg shadow-black/10 flex items-center justify-center gap-2 active:scale-[0.99]"
            >
              <span>Apply to LegitLab Cohort</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <div className="text-center font-mono text-[10px] text-[#777777] tracking-wider uppercase">
              RC: 8380017 · Jos, Plateau State, Nigeria
            </div>
          </div>
        </div>
      )}
    </>
  );
}
