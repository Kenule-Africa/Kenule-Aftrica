import Image from "next/image";
import { ArrowUp, Twitter, Linkedin, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#040409] relative z-10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl border border-white/15 bg-[#121224] flex items-center justify-center overflow-hidden">
                <Image
                  src="/assets/logo.png"
                  alt="Kenule Africa"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <span className="font-syne text-base font-extrabold text-white tracking-tight">
                KENULE <span className="text-[#f0b90b]">AFRICA</span>
              </span>
            </div>

            <p className="text-sm text-gray-400 font-normal leading-relaxed max-w-sm">
              Engineering technology, digital skills programs, and transformative regional gatherings
              designed for the realities of African life. Built in Nigeria, designed for Africa.
            </p>

            <div className="font-mono text-xs text-gray-500 pt-2">
              <span>RC: 8380017 · Incorporated in Federal Republic of Nigeria</span>
            </div>
          </div>

          {/* Col 3: Company */}
          <div className="space-y-3">
            <h4 className="font-syne text-xs font-bold text-white uppercase tracking-widest">
              Company
            </h4>
            <ul className="space-y-2 text-xs font-medium text-gray-400">
              <li>
                <a href="#about" className="hover:text-[#f0b90b] transition-colors">
                  Our Purpose
                </a>
              </li>
              <li>
                <a href="#ventures" className="hover:text-[#f0b90b] transition-colors">
                  Ventures Portfolio
                </a>
              </li>
              <li>
                <a href="#impact" className="hover:text-[#f0b90b] transition-colors">
                  Impact & Numbers
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#f0b90b] transition-colors">
                  Partner with Us
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Initiatives */}
          <div className="space-y-3">
            <h4 className="font-syne text-xs font-bold text-white uppercase tracking-widest">
              Initiatives
            </h4>
            <ul className="space-y-2 text-xs font-medium text-gray-400">
              <li>
                <a href="#ventures" className="hover:text-[#f0b90b] transition-colors">
                  DeyPay Neobank
                </a>
              </li>
              <li>
                <a href="#legitlab" className="hover:text-[#f0b90b] transition-colors">
                  LegitLab Academy
                </a>
              </li>
              <li>
                <a href="#ventures" className="hover:text-[#f0b90b] transition-colors">
                  Jos Tech Expo
                </a>
              </li>
              <li>
                <a
                  href="https://forms.gle/PzbnPTfnHMCd79uj8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f0b90b] hover:underline"
                >
                  Cohort Application Form ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Connect */}
          <div className="space-y-3">
            <h4 className="font-syne text-xs font-bold text-white uppercase tracking-widest">
              Channels
            </h4>
            <ul className="space-y-2 text-xs font-medium text-gray-400">
              <li>
                <a
                  href="https://x.com/kenuleafrica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Twitter className="w-3.5 h-3.5 text-[#f0b90b]" />
                  <span>X (Twitter)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/kenuleafrica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#14f7b0]" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:admin@kenuleafrica.xyz"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-purple-400" />
                  <span>admin@kenuleafrica.xyz</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div>
            © {new Date().getFullYear()} Kenule Africa. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="flex items-center gap-1 hover:text-[#f0b90b] transition-colors"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
