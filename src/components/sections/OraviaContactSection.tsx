"use client";

import { useState } from "react";
import { Mail, ArrowUpRight, Copy, Check } from "lucide-react";

export default function OraviaContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText("admin@kenuleafrica.xyz");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const contactPoints = [
    {
      id: "whatsapp",
      title: "WhatsApp",
      handle: "+234 (0) 901 967 2049",
      href: "https://wa.me/2349019672049",
      actionText: "Chat",
      iconBg: "bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.54 1.83.822 2.796.823 3.185 0 5.767-2.587 5.768-5.766.001-3.182-2.585-5.769-5.768-5.769zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.08L2 22l5.06-1.33C8.52 21.52 10.21 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.2c-1.63 0-3.17-.46-4.49-1.26l-.32-.2-3.32.87.89-3.23-.21-.34C3.72 14.7 3.2 13.39 3.2 12c0-4.85 3.95-8.8 8.8-8.8s8.8 3.95 8.8 8.8-3.95 8.8-8.8 8.8z" />
        </svg>
      ),
    },
    {
      id: "email",
      title: "Email",
      handle: "admin@kenuleafrica.xyz",
      href: "mailto:admin@kenuleafrica.xyz",
      actionText: "Write",
      iconBg: "bg-amber-500/10 text-amber-400 group-hover:bg-amber-500/20",
      icon: <Mail className="w-5 h-5" />,
    },
    {
      id: "linkedin",
      title: "LinkedIn",
      handle: "Kenule Africa",
      href: "https://linkedin.com/company/kenuleafrica",
      actionText: "Connect",
      iconBg: "bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 1 0 0-3.3 1.65 1.65 0 0 0 0 3.3m1.4 9.74v-8.37H5.06v8.37h2.8z" />
        </svg>
      ),
    },
    {
      id: "x",
      title: "X (Twitter)",
      handle: "@kenuleafrica",
      href: "https://x.com/kenuleafrica",
      actionText: "Follow",
      iconBg: "bg-white/10 text-white group-hover:bg-white/20",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 px-4 sm:px-8 lg:px-0 bg-[#090D16] text-white scroll-mt-20 relative selection:bg-amber-500 selection:text-black"
    >
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl space-y-2 sm:space-y-3">
          <h2 className="font-sans text-2xl sm:text-4xl font-semibold tracking-tight text-white">
            Get in touch with Kenule Africa
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
            Reach our leadership team directly across any of our verified communication channels.
          </p>
        </div>

        {/* 4 Clean, Classic & Borderless Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {contactPoints.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 sm:p-7 rounded-xl sm:rounded-2xl bg-[#0F1422] hover:bg-[#141B2D] shadow-xl transition-all duration-200 flex flex-col justify-between active:scale-[0.99]"
            >
              <div className="space-y-4">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-200 group-hover:scale-105 ${item.iconBg}`}
                >
                  {item.icon}
                </div>

                <div className="space-y-1">
                  <h3 className="font-sans text-base font-bold text-white">
                    {item.title}
                  </h3>
                  <div className="font-mono text-xs text-gray-300 break-all">
                    {item.handle}
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 flex items-center justify-between text-xs font-semibold text-gray-300 group-hover:text-white">
                <span className="flex items-center gap-1">
                  {item.actionText}
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>

                {item.id === "email" && (
                  <button
                    onClick={handleCopyEmail}
                    title="Copy Email Address"
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white transition-colors flex items-center gap-1 text-[11px] font-mono"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
