import Image from "next/image";
import { ArrowUpRight, MessageCircle, Users, Laptop, Sparkles } from "lucide-react";

export default function OraviaCommunitySection() {
  const perks = [
    {
      icon: MessageCircle,
      title: "Real-Time Exchange",
      desc: "Ask technical questions, share what you are building, and discuss software architecture with fellow developers.",
    },
    {
      icon: Users,
      title: "Collaborative Projects",
      desc: "Find co-builders, designers, and frontend/backend peers to ship side projects and open initiatives.",
    },
    {
      icon: Laptop,
      title: "Work & Gigs",
      desc: "Direct access to freelance opportunities, startup roles, and internship recommendations across the network.",
    },
    {
      icon: Sparkles,
      title: "AMAs & Showcases",
      desc: "Community product demos, feedback sessions with experienced engineers, and tech updates.",
    },
  ];

  return (
    <section
      id="community"
      className="py-20 sm:py-28 px-4 sm:px-8 lg:px-0 max-w-6xl mx-auto w-full z-10 relative scroll-mt-20"
      aria-label="Builders Circle Community"
    >
      <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-14 shadow-lg shadow-neutral-200/60">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Brand & Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] text-neutral-500 uppercase">
                COMMUNITY · BUILDERS CIRCLE
              </span>
              <h2 className="font-sans text-2xl sm:text-4xl font-bold tracking-tight text-[#111111] leading-tight">
                Connect with Africa’s Next Generation of Tech Builders
              </h2>
            </div>

            <p className="font-sans text-sm sm:text-base text-[#666666] leading-relaxed">
              Builders Circle is Kenule Africa’s WhatsApp community for software engineers, product designers,
              data specialists, and tech enthusiasts. Join an active space to exchange knowledge, get feedback on code,
              and build meaningful projects together.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="https://chat.whatsapp.com/Hhu3IVicy470u0yVdWjF8J?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#111111] text-white font-semibold text-xs sm:text-sm tracking-tight shadow-sm hover:bg-black transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] focus:outline-none"
              >
                <span>Join Builders Circle on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <span className="font-mono text-xs text-neutral-500 text-center sm:text-left">
                Free to join · WhatsApp Group
              </span>
            </div>
          </div>

          {/* Right Column: Logo Emblem & Clean Feature Tiles */}
          <div className="lg:col-span-5 flex flex-col items-center gap-5">
            <div className="w-full bg-[#FAFAFA] rounded-2xl p-6 flex items-center justify-center shadow-sm">
              <div className="w-24 h-24 sm:w-28 sm:h-28 relative flex items-center justify-center">
                <Image
                  src="/assets/builderCircle.png"
                  alt="Builders Circle Logo"
                  width={112}
                  height={112}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
              {perks.map((perk, idx) => {
                const Icon = perk.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#FAFAFA] space-y-1 transition-colors hover:bg-neutral-100/70"
                  >
                    <div className="flex items-center gap-1.5 text-[#111111]">
                      <Icon className="w-3.5 h-3.5 text-neutral-700 shrink-0" />
                      <span className="font-semibold text-xs text-[#111111]">
                        {perk.title}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#666666] leading-snug">
                      {perk.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
