"use client";

import { useState } from "react";
import Image from "next/image";
import {
  GraduationCap,
  Layout,
  Code,
  TrendingUp,
  Video,
  Coins,
  CheckCircle2,
  ExternalLink,
  Users,
  Clock,
  MapPin,
  Sparkles,
} from "lucide-react";

export default function LegitLabSection() {
  const [activeTrack, setActiveTrack] = useState(0);

  const tracks = [
    {
      id: "uiux",
      number: "01",
      title: "UI/UX & Product Design",
      icon: Layout,
      color: "text-[#f0b90b]",
      bgColor: "bg-[#f0b90b]/10",
      description:
        "Master industry-standard design thinking, Figma workflows, design systems, responsive prototyping, user research methodologies, and building portfolio-ready digital products.",
      outcomes: [
        "Figma masterclasses & Auto-layout workflows",
        "Wireframing, User Personas & Usability Testing",
        "Micro-interactions, component libraries & style guides",
        "Publish 2 complete case studies to Behance/Dribbble",
      ],
      duration: "8 Weeks",
      level: "Beginner to Intermediate",
    },
    {
      id: "webdev",
      number: "02",
      title: "Web Design & Frontend Development",
      icon: Code,
      color: "text-[#14f7b0]",
      bgColor: "bg-[#14f7b0]/10",
      description:
        "Learn how to build, style, and launch lightning-fast websites using modern HTML5, Tailwind CSS, JavaScript, responsive design principles, and deployment workflows.",
      outcomes: [
        "Semantic HTML5, CSS Grid, Flexbox & Tailwind CSS",
        "Vanilla JavaScript DOM manipulation & APIs",
        "Responsive cross-device optimization & Web Vitals",
        "Deploy 3 live client projects to Vercel/Netlify",
      ],
      duration: "8 Weeks",
      level: "Beginner to Intermediate",
    },
    {
      id: "marketing",
      number: "03",
      title: "Digital Marketing & Growth",
      icon: TrendingUp,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      description:
        "Develop high-converting customer acquisition strategies, SEO fundamentals, persuasive copywriting, email marketing, and social media growth tactics tailored for digital ventures.",
      outcomes: [
        "High-conversion copywriting & content strategies",
        "Search Engine Optimization (SEO) & Analytics",
        "Paid Ads (Meta, Google) & audience targeting",
        "Email marketing automation & lead generation funnels",
      ],
      duration: "6 Weeks",
      level: "Beginner to Intermediate",
    },
    {
      id: "youtube",
      number: "04",
      title: "YouTube Automation & Video Creation",
      icon: Video,
      color: "text-red-400",
      bgColor: "bg-red-500/10",
      description:
        "Discover the mechanics of faceless YouTube channels, viral niche selection, AI-assisted scriptwriting, video editing pipelines, thumbnail psychology, and monetization.",
      outcomes: [
        "Profitable niche validation & competitor auditing",
        "Scriptwriting, voiceovers & CapCut/Premiere workflows",
        "High-CTR thumbnail design & title psychology",
        "Channel analytics, monetization & sponsorship outreach",
      ],
      duration: "6 Weeks",
      level: "Beginner to Intermediate",
    },
    {
      id: "web3",
      number: "05",
      title: "Web3 & Blockchain Fundamentals",
      icon: Coins,
      color: "text-amber-400",
      bgColor: "bg-amber-500/10",
      description:
        "Understand the technological foundation of blockchains, decentralized finance (DeFi), non-custodial wallets, smart contracts, and stablecoin payment infrastructure in Africa.",
      outcomes: [
        "Blockchain mechanics, cryptography & consensus",
        "Non-custodial wallet security & DeFi protocols",
        "Stablecoin architecture & cross-border payment use cases",
        "Web3 ecosystem career pathways & community management",
      ],
      duration: "6 Weeks",
      level: "Beginner",
    },
  ];

  const current = tracks[activeTrack];

  return (
    <section
      id="legitlab"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 scroll-mt-20"
      aria-labelledby="legitlab-heading"
    >
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-8 border-b border-white/10">
        <div className="max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14f7b0]/10 border border-[#14f7b0]/20 text-[#14f7b0] font-mono text-xs tracking-wider uppercase">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Free Digital Talent Accelerator</span>
          </div>

          <h2
            id="legitlab-heading"
            className="font-syne text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            LegitLab Academy
          </h2>

          <p className="text-base sm:text-lg text-gray-300 font-normal">
            Equipping young Africans in Jos and beyond with verified, income-generating digital
            skills, completely free. Structured tracks, practical mentorship, and zero tuition.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-gray-300">
            <MapPin className="w-3.5 h-3.5 text-[#f0b90b]" />
            <span>Jos, Plateau State (Hybrid)</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-[#14f7b0]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>100% Free Tuition</span>
          </div>
        </div>
      </div>

      {/* Interactive Track Explorer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Track Selector Navigation */}
        <div className="lg:col-span-5 space-y-3" role="tablist" aria-label="LegitLab Learning Tracks">
          {tracks.map((track, index) => {
            const Icon = track.icon;
            const isSelected = activeTrack === index;
            return (
              <button
                key={track.id}
                role="tab"
                aria-selected={isSelected}
                aria-controls={`track-panel-${track.id}`}
                onClick={() => setActiveTrack(index)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group ${
                  isSelected
                    ? "bg-[#121224] border-[#f0b90b] shadow-[0_0_20px_rgba(240,185,11,0.15)] ring-1 ring-[#f0b90b]/50"
                    : "bg-[#080811] border-white/10 hover:border-white/20 hover:bg-white/5 opacity-80 hover:opacity-100"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center font-mono text-sm font-bold ${
                      isSelected ? "bg-[#f0b90b] text-black" : "bg-white/10 text-white"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div>
                    <span className="font-mono text-[10px] text-gray-400 uppercase tracking-wider block">
                      Track {track.number}
                    </span>
                    <h3
                      className={`font-syne text-sm sm:text-base font-bold transition-colors ${
                        isSelected ? "text-white" : "text-gray-300 group-hover:text-white"
                      }`}
                    >
                      {track.title}
                    </h3>
                  </div>
                </div>

                <span
                  className={`font-mono text-xs px-2.5 py-0.5 rounded-full border ${
                    isSelected
                      ? "bg-[#f0b90b]/15 text-[#f0b90b] border-[#f0b90b]/30"
                      : "bg-white/5 text-gray-400 border-white/10"
                  }`}
                >
                  {track.duration}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Track Detail Card */}
        <div className="lg:col-span-7">
          <div
            id={`track-panel-${current.id}`}
            role="tabpanel"
            className="glass-card-gold rounded-2xl p-8 border border-[#f0b90b]/30 space-y-6 animate-in fade-in duration-300"
          >
            <div className="flex items-start justify-between gap-4 pb-6 border-b border-white/10">
              <div className="space-y-1">
                <span className="font-mono text-xs text-[#f0b90b] uppercase tracking-wider">
                  Detailed Curriculum · Track {current.number}
                </span>
                <h3 className="font-syne text-2xl sm:text-3xl font-extrabold text-white">
                  {current.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-gray-300 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                  {current.level}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-base text-gray-300 leading-relaxed font-normal">
              {current.description}
            </p>

            {/* Key Curriculum Outcomes */}
            <div className="space-y-3 pt-2">
              <h4 className="font-syne text-sm font-bold uppercase tracking-wider text-white">
                What You Will Build & Master:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {current.outcomes.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-black/40 border border-white/10 text-xs text-gray-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#14f7b0] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Action Footer */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                <Users className="w-4 h-4 text-[#f0b90b]" />
                <span>Mentors: Industry Practitioners</span>
              </div>

              <a
                href="https://forms.gle/PzbnPTfnHMCd79uj8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#f0b90b] text-black font-syne font-extrabold text-xs uppercase tracking-wider hover:bg-[#ffc820] hover:scale-105 active:scale-95 transition-all shadow-[0_0_25px_rgba(240,185,11,0.3)]"
              >
                <span>Apply for Next Cohort</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
