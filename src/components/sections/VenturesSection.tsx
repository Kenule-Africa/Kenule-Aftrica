import Image from "next/image";
import { ArrowUpRight, Rocket, GraduationCap, Calendar, CheckCircle } from "lucide-react";

export default function VenturesSection() {
  const ventures = [
    {
      id: "deypay",
      title: "DeyPay",
      tagline: "Banking built for how Africa actually moves money.",
      category: "Fintech · In Development",
      categoryColor: "text-[#f0b90b] bg-[#f0b90b]/10 border-[#f0b90b]/30",
      description:
        "A next-generation, stablecoin-powered neobank engineered with native tools for instant payments, savings, borderless remittance, and decentralized prediction markets, crafted for an African generation that demands better financial mobility.",
      logo: "/assets/depay.png",
      features: [
        "Stablecoin & Local Currency Wallets",
        "Instant Borderless Peer-to-Peer Payments",
        "High-Yield Smart Savings & Prediction Pools",
      ],
      linkText: "Join the Waitlist",
      linkHref: "#contact",
      badge: "Coming Soon",
      isExternal: false,
    },
    {
      id: "legitlab",
      title: "LegitLab",
      tagline: "Real skills. Real careers. Zero gatekeeping.",
      category: "Digital Education · Active",
      categoryColor: "text-[#14f7b0] bg-[#14f7b0]/10 border-[#14f7b0]/30",
      description:
        "A free, intensive cohort-based training institute equipping Nigerian and African youth with high-income digital proficiencies in UI/UX Design, Web Development, Digital Marketing, YouTube Automation, and Web3 Fundamentals.",
      logo: "/assets/legitlab.png",
      features: [
        "100% Free Tuition & Mentor Support",
        "Practical Portfolio-Driven Curriculum",
        "Direct Internship & Freelance Pathways",
      ],
      linkText: "Apply for Next Cohort",
      linkHref: "https://forms.gle/PzbnPTfnHMCd79uj8",
      badge: "Cohort Enrolling",
      isExternal: true,
    },
    {
      id: "jostechexpo",
      title: "Jos Tech Expo",
      tagline: "The Premier Northern Nigerian Tech Festival.",
      category: "Ecosystem & Events · In Planning",
      categoryColor: "text-purple-400 bg-purple-500/10 border-purple-500/30",
      description:
        "The flagship annual innovation festival uniting founders, developers, product designers, policy leaders, and venture investors in Plateau State to elevate Northern Nigeria's booming technology renaissance.",
      logo: "/assets/joetechexpo.png",
      features: [
        "Keynotes, Panel Debates & Workshops",
        "Startup Pitch Competitions & Grants",
        "High-Impact Networking & Talent Showcase",
      ],
      linkText: "Get Event Updates",
      linkHref: "#contact",
      badge: "Annual Expo",
      isExternal: false,
    },
  ];

  return (
    <section
      id="ventures"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 scroll-mt-20"
      aria-labelledby="ventures-heading"
    >
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#f0b90b] font-mono text-xs tracking-wider uppercase">
          <Rocket className="w-3.5 h-3.5" />
          <span>Our Portfolio</span>
        </div>

        <h2
          id="ventures-heading"
          className="font-syne text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
        >
          What We’re Building
        </h2>

        <p className="text-base sm:text-lg text-gray-300 font-normal">
          Three dedicated initiatives. One unified vision to expand Africa’s technological and economic horizon.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ventures.map((venture) => (
          <article
            key={venture.id}
            className="glass-panel rounded-2xl p-7 flex flex-col justify-between relative group hover:border-[#f0b90b]/40 transition-all duration-300"
          >
            <div className="space-y-6">
              {/* Header Badge & Logo */}
              <div className="flex items-start justify-between gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#121224] border border-white/10 p-2 flex items-center justify-center overflow-hidden shadow-lg group-hover:scale-105 transition-transform">
                  <Image
                    src={venture.logo}
                    alt={`${venture.title} Logo`}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>

                <span
                  className={`font-mono text-[11px] font-semibold px-2.5 py-1 rounded-full border uppercase tracking-wider ${venture.categoryColor}`}
                >
                  {venture.badge}
                </span>
              </div>

              {/* Title & Tagline */}
              <div>
                <span className="font-mono text-xs text-gray-400 block mb-1">
                  {venture.category}
                </span>
                <h3 className="font-syne text-2xl font-bold text-white group-hover:text-[#f0b90b] transition-colors">
                  {venture.title}
                </h3>
                <p className="font-serif italic text-base text-gray-300 mt-1">
                  {venture.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-300 leading-relaxed font-normal">
                {venture.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 pt-2 border-t border-white/10">
                {venture.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-gray-300">
                    <CheckCircle className="w-3.5 h-3.5 text-[#14f7b0] shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div className="pt-6 mt-6 border-t border-white/10">
              <a
                href={venture.linkHref}
                target={venture.isExternal ? "_blank" : undefined}
                rel={venture.isExternal ? "noopener noreferrer" : undefined}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 border border-white/15 text-white font-syne font-bold text-xs uppercase tracking-wider hover:bg-[#f0b90b] hover:text-black hover:border-[#f0b90b] transition-all shadow-sm group-hover:shadow-[0_0_20px_rgba(240,185,11,0.2)]"
              >
                <span>{venture.linkText}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
