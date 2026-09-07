import { Award, Zap, Users, Globe2, Quote } from "lucide-react";

export default function ImpactSection() {
  const stats = [
    {
      value: "500+",
      label: "Young Talents Trained",
      subtext: "Equipped through free LegitLab cohorts across Plateau State & Nigeria.",
      color: "text-[#f0b90b]",
    },
    {
      value: "3",
      label: "Flagship Ventures",
      subtext: "Bridging fintech infrastructure, technical education, and major conferences.",
      color: "text-white",
    },
    {
      value: "100%",
      label: "Free Tuition Model",
      subtext: "Zero financial barriers for students learning high-income digital crafts.",
      color: "text-[#14f7b0]",
    },
    {
      value: "RC: 8380017",
      label: "Verified Enterprise",
      subtext: "Incorporated and operating under Nigerian corporate technology standards.",
      color: "text-purple-300",
    },
  ];

  return (
    <section
      id="impact"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 scroll-mt-20"
      aria-labelledby="impact-heading"
    >
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#f0b90b] font-mono text-xs tracking-wider uppercase">
          <Zap className="w-3.5 h-3.5" />
          <span>Track Record</span>
        </div>

        <h2
          id="impact-heading"
          className="font-syne text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
        >
          Proof in the Numbers
        </h2>

        <p className="text-base sm:text-lg text-gray-300 font-normal">
          Measurable momentum creating opportunity, technical competence, and digital wealth.
        </p>
      </div>

      {/* 4 Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col justify-between hover:border-[#f0b90b]/30 transition-all duration-300"
          >
            <div>
              <div className={`font-syne text-3xl sm:text-4xl font-extrabold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <h3 className="font-syne text-base font-bold text-white mb-2">
                {stat.label}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {stat.subtext}
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-500">
              <span>METRIC 0{i + 1}</span>
              <span>VERIFIED</span>
            </div>
          </div>
        ))}
      </div>

      {/* Leadership Statement Banner */}
      <div className="glass-card-gold rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-[#f0b90b]/20">
        <div className="max-w-3xl space-y-6 relative z-10">
          <Quote className="w-10 h-10 text-[#f0b90b] opacity-60" />

          <p className="font-serif italic text-xl sm:text-3xl text-white leading-snug">
            “We don’t believe in copying models from Silicon Valley or London and forcing them on
            Nigeria. True African innovation starts by building for how people here actually live, trade,
            and learn.”
          </p>

          <div className="flex items-center gap-4 pt-4 border-t border-white/10">
            <div className="w-10 h-10 rounded-full bg-[#f0b90b] text-black font-syne font-extrabold flex items-center justify-center text-sm">
              KA
            </div>
            <div>
              <span className="font-syne text-sm font-bold text-white block">
                Founding Partner & Engineering Team
              </span>
              <span className="font-mono text-xs text-gray-400">
                Kenule Africa · Jos, Plateau State, Nigeria
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
