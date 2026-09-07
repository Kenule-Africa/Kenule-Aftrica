import { GitBranch, Shield, Workflow, Cpu } from "lucide-react";

export default function OraviaBentoFeatures() {
  return (
    <section id="about" className="py-20 sm:py-32 px-4 sm:px-8 lg:px-0 max-w-7xl mx-auto w-full z-10 relative scroll-mt-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-20 gap-6 sm:gap-8">
        <div className="max-w-xl">
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-semibold text-[#111111] tracking-tight mb-4 sm:mb-6 leading-[1.1]">
            Engineering defensibility.
            <span className="text-[#666666] block">Not just digital hype.</span>
          </h2>
          <p className="text-[#666666] text-base sm:text-lg leading-relaxed">
            Bridging the gap between raw African potential and tier-one scalable infrastructure
            with products designed for real-world resilience.
          </p>
        </div>
        <a
          href="#ventures"
          className="pb-1 border-b border-[#111111] text-xs sm:text-sm font-medium hover:opacity-70 transition-opacity mb-2"
        >
          Explore Portfolio Architecture →
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Card 1: Venture Lineage (Col 8) */}
        <div className="md:col-span-8 group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 shadow-md hover:shadow-xl">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

          <div className="relative z-10 p-6 sm:p-10 h-full flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="max-w-md">
                <div className="w-10 h-10 bg-[#FAFAFA] rounded-xl flex items-center justify-center mb-6 text-[#111111] shadow-sm">
                  <GitBranch className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#111111] mb-2 sm:mb-3">
                  Ecosystem Lineage
                </h3>
                <p className="text-[#666666] leading-relaxed text-xs sm:text-base">
                  Traverse our product lineage from local market insight to deployed software.
                  Every venture is purpose-built and interconnected.
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="px-3 py-1 bg-[#FAFAFA] rounded-md text-[10px] font-mono text-[#666666] uppercase tracking-wider group-hover:text-[#111111] transition-colors shadow-sm">
                  LIVE PIPELINE
                </div>
              </div>
            </div>

            {/* Animated SVG Path Line */}
            <div className="mt-8 sm:mt-12 h-28 sm:h-32 w-full relative flex items-center border-t border-[#EAEAEA]/60 pt-4 sm:pt-6 overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 600 100" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <marker id="arrow-head" markerWidth="4" markerHeight="4" refX="2" refY="2" orient="auto">
                    <path d="M0,0 L4,2 L0,4" fill="#111"></path>
                  </marker>
                </defs>
                <path
                  d="M20,50 C100,50 120,20 200,20 C280,20 300,80 380,80 C460,80 480,50 560,50"
                  fill="none"
                  stroke="#EAEAEA"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                ></path>
                <path
                  d="M20,50 C100,50 120,20 200,20 C280,20 300,80 380,80 C460,80 480,50 560,50"
                  fill="none"
                  stroke="#111111"
                  strokeWidth="1.5"
                  strokeDasharray="600"
                  strokeDashoffset="600"
                  className="transition-all duration-[1500ms] ease-in-out group-hover:stroke-dashoffset-0"
                  markerEnd="url(#arrow-head)"
                ></path>
                <g className="transition-all duration-500 opacity-100 group-hover:scale-110 origin-center">
                  <circle cx="20" cy="50" r="4" fill="#111111"></circle>
                  <text x="20" y="70" textAnchor="middle" className="text-[8px] font-mono fill-[#666666] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    PROBLEM
                  </text>
                </g>
                <g className="transition-all duration-500 delay-[400ms] opacity-50 scale-75 group-hover:opacity-100 group-hover:scale-100 origin-center">
                  <circle cx="200" cy="20" r="4" fill="#fff" stroke="#111" strokeWidth="1.5"></circle>
                  <text x="200" y="40" textAnchor="middle" className="text-[8px] font-mono fill-[#666666] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    LEGITLAB
                  </text>
                </g>
                <g className="transition-all duration-500 delay-[800ms] opacity-50 scale-75 group-hover:opacity-100 group-hover:scale-100 origin-center">
                  <circle cx="380" cy="80" r="4" fill="#fff" stroke="#111" strokeWidth="1.5"></circle>
                  <text x="380" y="100" textAnchor="middle" className="text-[8px] font-mono fill-[#666666] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    DEYPAY
                  </text>
                </g>
                <g className="transition-all duration-500 delay-[1200ms] opacity-50 scale-75 group-hover:opacity-100 group-hover:scale-100 origin-center">
                  <circle cx="560" cy="50" r="4" fill="#111111"></circle>
                  <text x="560" y="70" textAnchor="middle" className="text-[8px] font-mono fill-[#111111] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    JOS EXPO
                  </text>
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Card 2: Immutable Governance (Col 4) */}
        <div className="md:col-span-4 group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 flex flex-col shadow-md hover:shadow-xl">
          <div className="p-6 sm:p-10 relative z-10 flex flex-col h-full">
            <div className="w-10 h-10 bg-[#FAFAFA] rounded-xl flex items-center justify-center mb-6 text-[#111111] shadow-sm">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-semibold text-[#111111] mb-2 sm:mb-3">
              Corporate Governance
            </h3>
            <p className="text-xs sm:text-sm text-[#666666] leading-relaxed mb-8">
              Registered with the Corporate Affairs Commission. Operating with legal clarity and long-term vision.
            </p>

            {/* Stacked Elements */}
            <div className="mt-auto relative w-full h-32 flex flex-col justify-end items-center">
              <div className="absolute w-[80%] h-12 bg-neutral-100 rounded-t-lg top-4 scale-90 opacity-0 group-hover:opacity-100 group-hover:top-0 transition-all duration-500 ease-out shadow-sm"></div>
              <div className="absolute w-[90%] h-12 bg-neutral-50 rounded-t-lg top-8 scale-95 opacity-50 group-hover:opacity-80 group-hover:top-6 transition-all duration-500 ease-out delay-75 shadow-sm"></div>

              <div className="relative w-full h-16 bg-white rounded-xl shadow-md flex items-center px-4 gap-3 z-10 transition-transform duration-300 group-hover:translate-y-[-5px] group-hover:shadow-lg">
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] font-bold text-[#111111] uppercase tracking-wide">
                      Kenule Africa Ltd
                    </span>
                    <span className="text-[10px] font-mono text-[#666666]">
                      RC: 8380017
                    </span>
                  </div>
                  <div className="h-1 w-full bg-slate-100 rounded overflow-hidden">
                    <div className="h-full w-4/5 bg-[#111111]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Automated Synthesis & Talent Engine (Col 12) */}
        <div className="md:col-span-12 group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 shadow-md hover:shadow-xl">
          <div className="p-6 sm:p-10 flex flex-col md:flex-row items-center gap-8 sm:gap-12">
            <div className="flex-1 max-w-lg">
              <div className="w-10 h-10 bg-[#FAFAFA] rounded-xl flex items-center justify-center mb-6 text-[#111111] shadow-sm">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-[#111111] mb-2">
                Talent Synthesis & Free Education
              </h3>
              <p className="text-[#666666] leading-relaxed text-sm sm:text-base">
                Transforming untrained youth into high-income designers, frontend developers, and digital operators
                through zero-cost, mentor-led intensive curriculums.
              </p>
            </div>

            {/* Document Flow Animation */}
            <div className="flex-1 w-full flex items-center justify-center gap-6 h-32 relative">
              <div className="flex flex-col gap-2 relative">
                <div className="w-10 h-12 bg-white shadow-md rounded-md flex items-center justify-center transition-all duration-700 ease-in-out group-hover:translate-x-12 group-hover:opacity-0 group-hover:scale-50">
                  <div className="w-4 h-0.5 bg-[#666666]/30"></div>
                </div>
                <div className="w-10 h-12 bg-white shadow-md rounded-md flex items-center justify-center absolute top-2 left-2 transition-all duration-700 ease-in-out delay-100 group-hover:translate-x-10 group-hover:opacity-0 group-hover:scale-50">
                  <div className="w-4 h-0.5 bg-[#666666]/30"></div>
                </div>
              </div>

              <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center relative shadow-sm">
                <Workflow className="w-5 h-5 text-[#666666] group-hover:text-[#111111] transition-colors" />
              </div>

              <div className="w-28 h-32 bg-white shadow-xl rounded-xl p-4 space-y-3 transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105">
                <div className="w-6 h-6 rounded bg-[#111111]/5 flex items-center justify-center text-[10px] font-mono font-bold text-[#111111]">
                  LAB
                </div>
                <div className="space-y-1.5">
                  <div className="h-1.5 w-full bg-[#111111]/10 rounded overflow-hidden">
                    <div className="h-full w-0 bg-[#111111] group-hover:w-full transition-all duration-700 delay-300 ease-out"></div>
                  </div>
                  <div className="h-1.5 w-3/4 bg-[#111111]/10 rounded overflow-hidden">
                    <div className="h-full w-0 bg-[#111111] group-hover:w-full transition-all duration-700 delay-500 ease-out"></div>
                  </div>
                  <div className="h-1.5 w-5/6 bg-[#111111]/10 rounded overflow-hidden">
                    <div className="h-full w-0 bg-[#111111] group-hover:w-full transition-all duration-700 delay-700 ease-out"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
