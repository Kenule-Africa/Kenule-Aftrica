import { CheckCircle2, ShieldCheck, Compass, Lightbulb, Users, Layers } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 scroll-mt-20"
      aria-labelledby="about-heading"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Narrative */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0b90b]/10 border border-[#f0b90b]/20 text-[#f0b90b] font-mono text-xs tracking-wider uppercase">
            <span>Our Purpose & Philosophy</span>
          </div>

          <h2
            id="about-heading"
            className="font-syne text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            Built in Nigeria. <br />
            <span className="font-serif italic text-gray-300 font-normal">
              Rooted in the African Future.
            </span>
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            <p>
              <strong className="text-white font-semibold">Kenule Africa (RC: 8380017)</strong> is a
              forward-looking technology and ventures enterprise based in Nigeria. We build products
              across fintech infrastructure, high-impact tech gatherings, and free digital talent
              accelerators.
            </p>
            <p>
              Everything we ship is guided by a singular, uncompromising question:{" "}
              <span className="text-[#f0b90b] font-medium italic">
                “Does this solve real problems for the people using it?”
              </span>
            </p>
            <p>
              We reject half-measures. We prototype, rigorously test, iterate, and refine until our
              software and education models deliver tangible economic mobility.
            </p>
          </div>

          {/* Core Commitments */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#0d0d1a] border border-white/10">
              <ShieldCheck className="w-5 h-5 text-[#14f7b0] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-syne text-sm font-bold text-white">Full Legal Compliance</h3>
                <p className="text-xs text-gray-400 mt-1">
                  Registered Nigerian Corporate Entity (RC: 8380017) with transparent governance.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#0d0d1a] border border-white/10">
              <Users className="w-5 h-5 text-[#f0b90b] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-syne text-sm font-bold text-white">Community First</h3>
                <p className="text-xs text-gray-400 mt-1">
                  Empowering youth in Plateau State and across Africa with zero-cost digital careers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Feature Card */}
        <div className="lg:col-span-5">
          <div className="glass-card-gold p-8 rounded-2xl relative overflow-hidden border border-[#f0b90b]/20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#f0b90b]/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="space-y-6 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-[#121224] border border-[#f0b90b]/30 flex items-center justify-center text-[#f0b90b]">
                <Layers className="w-6 h-6" />
              </div>

              <div>
                <span className="font-mono text-xs text-[#f0b90b] uppercase tracking-wider">
                  Our Operating Engine
                </span>
                <h3 className="font-syne text-2xl font-bold text-white mt-1">
                  Three Pillars of Impact
                </h3>
              </div>

              <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-white/10 text-white flex items-center justify-center font-mono text-xs shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <strong className="text-white block font-semibold">Fintech Infrastructure</strong>
                    Modern payment rails and stablecoin tools via DeyPay.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-white/10 text-white flex items-center justify-center font-mono text-xs shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <strong className="text-white block font-semibold">Skill Democratization</strong>
                    Free cohort-based bootcamps through LegitLab.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-white/10 text-white flex items-center justify-center font-mono text-xs shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <strong className="text-white block font-semibold">Regional Tech Ecosystems</strong>
                    Catalyzing Northern Nigeria via Jos Tech Expo.
                  </div>
                </li>
              </ul>

              <div className="pt-4 border-t border-white/10">
                <a
                  href="#contact"
                  className="text-xs font-mono text-[#f0b90b] hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Partner with Kenule Africa</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
