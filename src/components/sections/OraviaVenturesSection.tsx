"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, ArrowUpRight, ExternalLink } from "lucide-react";

export default function OraviaVenturesSection() {
  const [selectedId, setSelectedId] = useState("venture-legitlab");

  const cards = [
    {
      id: "venture-deypay",
      title: "DeyPay",
      category: "Fintech · Coming Soon",
      price: "Neobank",
      period: "Infrastructure",
      description:
        "Stablecoin-powered banking engineered for how Africa moves money. Payment rails, savings, remittances, and decentralized prediction pools.",
      features: [
        "Stablecoin & local currency wallets",
        "Instant borderless peer-to-peer transfers",
        "Smart savings & prediction markets",
        "Merchant API integrations",
      ],
      btnText: "Join Waitlist",
      btnHref: "#contact",
      isExternal: false,
    },
    {
      id: "venture-legitlab",
      title: "LegitLab Academy",
      category: "Education · Enrolling",
      price: "100% Free",
      period: "Tuition",
      description:
        "Intensive, cohort-based talent accelerator equipping youth with high-income proficiencies in UI/UX, Web Design, Web3, Digital Marketing, and YouTube Automation.",
      features: [
        "Zero tuition or hidden costs",
        "5 practical, high-income learning tracks",
        "Industry mentors & portfolio building",
        "Internship & freelance readiness",
      ],
      btnText: "Apply to Cohort",
      btnHref: "https://forms.gle/PzbnPTfnHMCd79uj8",
      isExternal: true,
    },
    {
      id: "venture-expo",
      title: "Jos Tech Expo",
      category: "Conferences · Annual",
      price: "Festival",
      period: "Northern Hub",
      description:
        "The premier Northern Nigerian technology and innovation conference uniting founders, builders, creators, policy leaders, and investors in Plateau State.",
      features: [
        "Keynote debates & workshops",
        "Startup pitch grants & showcases",
        "Venture capital & talent networking",
        "Regional ecosystem acceleration",
      ],
      btnText: "Get Expo Updates",
      btnHref: "#contact",
      isExternal: false,
    },
  ];

  return (
    <section id="ventures" className="py-32 px-6 md:px-12 lg:px-20 border-b border-[#EAEAEA] bg-[#FAFAFA] scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <h2 className="font-sans text-3xl md:text-4xl font-semibold text-[#111111] tracking-tight">
            Our Flagship Ventures
          </h2>
          <p className="text-[#666666] text-base max-w-xl mx-auto">
            Three interconnected initiatives driving African digital mobility, education, and ecosystem growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {cards.map((card) => {
            const isSelected = selectedId === card.id;

            return (
              <div
                key={card.id}
                onClick={() => setSelectedId(card.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedId(card.id);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-pressed={isSelected}
                className={`pricing-transition group relative p-8 rounded-xl flex flex-col justify-between cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#111111] focus:ring-offset-2 ${
                  isSelected
                    ? "bg-[#111111] text-white shadow-2xl scale-[1.02] z-10 opacity-100 ring-1 ring-black/5"
                    : "bg-white text-[#111111] border border-[#EAEAEA] opacity-75 hover:opacity-100 hover:shadow-xl hover:border-[#111111]/30 scale-[0.98]"
                }`}
              >
                {/* Subtle Gradient Reveal */}
                {!isSelected && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-[#111111]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                )}

                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <span
                      className={`font-semibold text-sm ${
                        isSelected ? "text-white" : "text-[#111111]"
                      }`}
                    >
                      {card.title}
                    </span>
                    <span
                      className={`font-mono text-[10px] px-2 py-0.5 rounded border uppercase tracking-wider ${
                        isSelected
                          ? "bg-white/10 text-gray-200 border-white/20"
                          : "bg-gray-100 text-[#666666] border-[#EAEAEA]"
                      }`}
                    >
                      {card.category}
                    </span>
                  </div>

                  <div className="mb-4 flex items-baseline gap-1.5">
                    <span
                      className={`text-3xl font-semibold ${
                        isSelected ? "text-white" : "text-[#111111]"
                      }`}
                    >
                      {card.price}
                    </span>
                    <span
                      className={`text-xs ${
                        isSelected ? "text-white/60" : "text-[#666666]"
                      }`}
                    >
                      /{card.period}
                    </span>
                  </div>

                  <p
                    className={`text-sm mb-8 leading-relaxed ${
                      isSelected ? "text-white/70" : "text-[#666666]"
                    }`}
                  >
                    {card.description}
                  </p>

                  <ul className="space-y-3.5 mb-8">
                    {card.features.map((feat, idx) => (
                      <li
                        key={idx}
                        className={`flex items-start gap-2.5 text-xs ${
                          isSelected ? "text-white/80" : "text-[#666666]"
                        }`}
                      >
                        <Check
                          className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                            isSelected ? "text-emerald-400" : "text-[#111111]"
                          }`}
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={card.btnHref}
                  target={card.isExternal ? "_blank" : undefined}
                  rel={card.isExternal ? "noopener noreferrer" : undefined}
                  onClick={(e) => e.stopPropagation()}
                  className={`w-full py-3 rounded-lg text-xs font-semibold text-center block transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.97] ${
                    isSelected
                      ? "bg-white text-[#111111] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                      : "bg-[#111111] text-white hover:bg-black"
                  }`}
                >
                  <span className="inline-flex items-center gap-1.5">
                    {card.btnText}
                    {card.isExternal ? (
                      <ExternalLink className="w-3 h-3" />
                    ) : (
                      <ArrowUpRight className="w-3 h-3" />
                    )}
                  </span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
