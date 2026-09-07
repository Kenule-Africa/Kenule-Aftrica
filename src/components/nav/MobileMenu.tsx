"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ArrowRight, ExternalLink } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const links = [
    { name: "About Us", href: "#about" },
    { name: "Ventures", href: "#ventures" },
    { name: "LegitLab", href: "#legitlab" },
    { name: "Impact & Numbers", href: "#impact" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="fixed inset-0 z-[100] md:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-xl transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#080811] border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl z-10 animate-in slide-in-from-right duration-300">
        <div>
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg border border-white/15 bg-[#121224] flex items-center justify-center overflow-hidden">
                <Image
                  src="/assets/logo.png"
                  alt="Kenule Africa"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-syne text-sm font-bold text-white tracking-tight">
                KENULE <span className="text-[#f0b90b]">AFRICA</span>
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-8 flex flex-col gap-4">
            {links.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={onClose}
                className="flex items-center justify-between text-base font-medium text-gray-300 hover:text-[#f0b90b] py-2.5 px-3 rounded-lg hover:bg-white/5 transition-all"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 opacity-50" />
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom CTA */}
        <div className="pt-6 border-t border-white/10 space-y-4">
          <a
            href="https://forms.gle/PzbnPTfnHMCd79uj8"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#f0b90b] text-black font-syne font-bold text-xs uppercase tracking-wider hover:bg-[#ffc820] transition-colors"
          >
            <span>Apply to LegitLab</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <div className="text-center">
            <span className="font-mono text-[10px] text-gray-500 tracking-wider">
              RC: 8380017 · BUILT IN NIGERIA
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
