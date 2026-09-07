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
      subtitle: "Stablecoin Banking Rails",
      index: "01",
      category: "Fintech Platform",
      sector: "Infrastructure",
      logo: "/assets/depay.png",
      description:
        "Stablecoin-powered banking engineered for how Africa moves money. Built with payment rails, multi-currency savings, borderless remittances, and decentralized prediction pools.",
      features: [
        "Stablecoin and local currency wallets",
        "Instant borderless peer-to-peer transfers",
        "Smart savings and prediction markets",
        "Developer merchant API integrations",
      ],
      btnText: "Join Waitlist",
      btnHref: "#contact",
      isExternal: false,
    },
    {
      id: "venture-legitlab",
      title: "LegitLab Academy",
      subtitle: "100% Free Tech Accelerator",
      index: "02",
      category: "Talent Academy",
      sector: "Education",
      logo: "/assets/legitlab.png",
      description:
        "Intensive, cohort-based talent accelerator equipping African youth with high-income proficiencies in UI/UX Design, Web Development, Web3, Digital Marketing, and YouTube Automation.",
      features: [
        "Zero tuition or hidden costs",
        "5 practical, high-income learning tracks",
        "Industry mentors and portfolio building",
        "Direct internship and freelance pathways",
      ],
      btnText: "Apply to Cohort",
      btnHref: "https://forms.gle/PzbnPTfnHMCd79uj8",
      isExternal: true,
    },
    {
      id: "venture-expo",
      title: "Jos Tech Expo",
      subtitle: "Northern Innovation Summit",
      index: "03",
      category: "Regional Summit",
      sector: "Ecosystem",
      logo: "/assets/joetechexpo.png",
      description:
        "The premier Northern Nigerian technology and innovation conference uniting founders, builders, creators, policy leaders, and institutional investors in Plateau State.",
      features: [
        "Keynote debates and technical workshops",
        "Startup pitch grants and showcases",
        "Venture capital and talent networking",
        "Regional ecosystem acceleration",
      ],
      btnText: "Get Expo Updates",
      btnHref: "#contact",
      isExternal: false,
    },
  ];

  return (
    <section id="ventures" className="py-20 sm:py-32 px-4 sm:px-8 lg:px-0 border-b border-[#EAEAEA] bg-[#FAFAFA] scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-3">
          <h2 className="font-sans text-2xl sm:text-4xl font-semibold text-[#111111] tracking-tight">
            Our Flagship Ventures
          </h2>
          <p className="text-[#666666] text-sm sm:text-base max-w-xl mx-auto">
            Three interconnected initiatives driving African digital mobility, education, and ecosystem growth.
          </p>
        </div>

        {/* 3 Interactive Venture Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {cards.map((card) => {
            const isSelected = selectedId === card.id;

            return (
              <div
                key={card.id}
                onMouseEnter={() => setSelectedId(card.id)}
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
                className={`pricing-transition group relative p-6 sm:p-9 rounded-2xl flex flex-col justify-between cursor-pointer focus:outline-none ${
                  isSelected
                    ? "bg-[#111111] text-white shadow-2xl scale-[1.01] sm:scale-[1.02] z-10 opacity-100"
                    : "bg-white text-[#111111] shadow-lg shadow-neutral-200/60 opacity-90 hover:opacity-100 hover:shadow-2xl scale-100"
                }`}
              >
                <div>
                  {/* Top Bar: Venture Logo & Editorial Category Index */}
                  <div className="mb-6 flex items-center justify-between">
                    <div
                      className="w-12 h-12 flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-105 shrink-0"
                    >
                      <Image
                        src={card.logo}
                        alt={`${card.title} Logo`}
                        width={40}
                        height={40}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div className="flex flex-col items-end text-right">
                      <span
                        className={`text-[10px] font-mono font-semibold tracking-[0.2em] uppercase transition-colors duration-500 ease-out ${
                          isSelected ? "text-amber-400" : "text-[#888888]"
                        }`}
                      >
                        {card.sector}
                      </span>
                      <span
                        className={`text-xs font-medium tracking-tight mt-0.5 transition-colors duration-500 ease-out ${
                          isSelected ? "text-neutral-200" : "text-[#111111]"
                        }`}
                      >
                        {card.category}
                      </span>
                    </div>
                  </div>

                  {/* Venture Title & Subtitle */}
                  <div className="mb-4 space-y-1">
                    <h3
                      className={`text-2xl font-bold tracking-tight transition-colors duration-500 ease-out ${
                        isSelected ? "text-white" : "text-[#111111]"
                      }`}
                    >
                      {card.title}
                    </h3>
                    <div
                      className={`text-xs font-mono font-medium transition-colors duration-500 ease-out ${
                        isSelected ? "text-amber-300" : "text-amber-700"
                      }`}
                    >
                      {card.subtitle}
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    className={`text-sm mb-6 leading-relaxed font-normal transition-colors duration-500 ease-out ${
                      isSelected ? "text-gray-300" : "text-[#666666]"
                    }`}
                  >
                    {card.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8 pt-4 border-t border-dashed border-gray-200/40">
                    {card.features.map((feat, idx) => (
                      <li
                        key={idx}
                        className={`flex items-start gap-2.5 text-xs transition-colors duration-500 ease-out ${
                          isSelected ? "text-gray-200" : "text-[#555555]"
                        }`}
                      >
                        <Check
                          className={`w-3.5 h-3.5 shrink-0 mt-0.5 transition-colors duration-500 ease-out ${
                            isSelected ? "text-emerald-400" : "text-emerald-600"
                          }`}
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call to Action Button */}
                <a
                  href={card.btnHref}
                  target={card.isExternal ? "_blank" : undefined}
                  rel={card.isExternal ? "noopener noreferrer" : undefined}
                  onClick={(e) => e.stopPropagation()}
                  className={`w-full py-3.5 rounded-xl text-xs font-semibold text-center block transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02] active:scale-[0.98] shadow-sm ${
                    isSelected
                      ? "bg-white text-[#111111] hover:bg-gray-100 hover:shadow-lg"
                      : "bg-[#111111] text-white hover:bg-black"
                  }`}
                >
                  <span className="inline-flex items-center gap-1.5">
                    {card.btnText}
                    {card.isExternal ? (
                      <ExternalLink className="w-3.5 h-3.5" />
                    ) : (
                      <ArrowUpRight className="w-3.5 h-3.5" />
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
