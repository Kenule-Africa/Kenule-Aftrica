import { ArrowRight } from "lucide-react";

export default function OraviaHeroSection() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 pt-36 pb-20 gap-16 max-w-7xl mx-auto w-full z-10">
        <div className="max-w-2xl space-y-8 relative z-10">
          <div className="space-y-6">
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white border border-[#EAEAEA]/80 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-sans text-[11px] font-medium text-[#666666] tracking-tight">
                RC: 8380017 · Corporate Entity Verified
              </span>
            </div>

            {/* Giant Title */}
            <h1 className="font-sans text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-[#111111] leading-[0.95]">
              African Reality.
              <br />
              <span className="text-[#666666]">Engineered.</span>
            </h1>

            {/* Description */}
            <p className="max-w-lg font-sans text-base text-[#666666] leading-relaxed">
              The foundational technology and digital talent layer for Africa’s next decade.
              Engineering fintech rails, democratizing high-income digital skills, and uniting
              regional ecosystems, designed specifically for how Africa actually works.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#ventures"
              className="group relative isolate overflow-hidden bg-[#111111] text-white text-sm font-semibold px-8 py-3.5 rounded shadow-[0_1px_2px_rgba(0,0,0,0.08)] ring-1 ring-white/10 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-[1.03] hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.3)] hover:ring-white/20 active:scale-[0.98] focus:outline-none flex items-center gap-2"
            >
              <div className="shimmer-layer absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent z-0 pointer-events-none"></div>
              <span className="relative z-10">Explore Our Ventures</span>
              <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#about"
              className="px-8 py-3.5 bg-white text-[#111111] border border-[#EAEAEA] text-sm font-medium rounded shadow-sm transition-all duration-300 ease-out hover:bg-gray-50 hover:border-[#111111]/40 hover:text-black hover:shadow-md active:scale-[0.97] focus:outline-none"
            >
              Our Philosophy
            </a>
          </div>
        </div>

        {/* Visual: Live African Innovation Logic Graph */}
        <div className="relative w-full max-w-lg aspect-square lg:aspect-[4/3] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#FAFAFA] via-white to-[#FAFAFA] opacity-50 blur-3xl"></div>
          <div className="premium-card w-full h-full p-6 relative overflow-hidden rounded-xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#111111] to-transparent"></div>

            <div className="h-full w-full flex flex-col justify-between">
              {/* Header */}
              <div className="flex justify-between items-center mb-6 border-b border-[#EAEAEA]/80 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#666666]">
                    Kenule Innovation Engine
                  </span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#666666]">
                  <span>RC: 8380017</span>
                </div>
              </div>

              {/* Animated SVG Graph */}
              <div className="flex-1 relative flex items-center justify-center">
                <svg className="w-full h-full max-h-[240px]" viewBox="0 0 400 240">
                  <style>{`
                    .signal-path {
                      stroke-dasharray: 60 400;
                      stroke-dashoffset: 60;
                      animation: signal-flow 6s linear infinite;
                    }
                    @keyframes signal-flow {
                      0% { stroke-dashoffset: 60; opacity: 0; }
                      5% { opacity: 1; }
                      90% { stroke-dashoffset: -360; opacity: 1; }
                      95% { opacity: 0; }
                      100% { stroke-dashoffset: -360; opacity: 0; }
                    }
                    .node-context { animation: pulse-context 6s infinite ease-out; transform-origin: 50px 120px; }
                    @keyframes pulse-context {
                      0% { transform: scale(1); fill: #111; }
                      5% { transform: scale(1.3); fill: #000; }
                      15% { transform: scale(1); fill: #111; }
                    }
                    .node-assumptions { animation: pulse-assumptions 6s infinite ease-out; transform-origin: 190px 60px; }
                    @keyframes pulse-assumptions {
                      25% { stroke-width: 1.5; transform: scale(1); }
                      30% { stroke-width: 2.5; transform: scale(1.05); stroke: #000; }
                      40% { stroke-width: 1.5; transform: scale(1); stroke: #111; }
                    }
                    .node-evidence { animation: pulse-evidence 6s infinite ease-out; transform-origin: 280px 100px; }
                    @keyframes pulse-evidence {
                      55% { stroke-width: 1.5; transform: scale(1); }
                      60% { stroke-width: 2.5; transform: scale(1.05); stroke: #000; }
                      70% { stroke-width: 1.5; transform: scale(1); stroke: #111; }
                    }
                    .node-outcome { animation: pulse-outcome 6s infinite ease-out; transform-origin: 330px 120px; }
                    @keyframes pulse-outcome {
                      85% { transform: scale(1); fill: #111; }
                      90% { transform: scale(1.25); fill: #000; }
                      100% { transform: scale(1); fill: #111; }
                    }
                    .outcome-check {
                      stroke-dasharray: 12;
                      stroke-dashoffset: 12;
                      animation: check-draw 6s linear infinite;
                    }
                    @keyframes check-draw {
                      0%, 88% { stroke-dashoffset: 12; opacity: 0; }
                      92% { stroke-dashoffset: 0; opacity: 1; }
                      100% { stroke-dashoffset: 0; opacity: 0; }
                    }
                  `}</style>

                  {/* Static Base Paths */}
                  <path d="M50,120 C100,120 100,60 150,60" fill="none" stroke="#EAEAEA" strokeWidth="2"></path>
                  <path d="M50,120 C100,120 100,180 150,180" fill="none" stroke="#EAEAEA" strokeWidth="2"></path>
                  <path d="M150,60 C200,60 200,100 250,100" fill="none" stroke="#EAEAEA" strokeWidth="2"></path>
                  <path d="M150,180 C200,180 200,140 250,140" fill="none" stroke="#EAEAEA" strokeWidth="2"></path>
                  <path d="M250,100 L330,120" fill="none" stroke="#EAEAEA" strokeWidth="2"></path>
                  <path d="M250,140 L330,120" fill="none" stroke="#EAEAEA" strokeWidth="2"></path>

                  {/* Active Signal Path */}
                  <path d="M50,120 C100,120 100,60 150,60 C200,60 200,100 250,100 L330,120" fill="none" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" className="signal-path"></path>

                  {/* Nodes & Labels */}
                  <circle cx="50" cy="120" r="6" fill="#111111" className="node-context"></circle>
                  <text x="50" y="142" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fontWeight="600" fill="#111111">
                    Context
                  </text>

                  <rect x="150" y="50" width="84" height="20" rx="4" fill="white" stroke="#111111" strokeWidth="1.5" className="node-assumptions"></rect>
                  <text x="192" y="63" textAnchor="middle" fontFamily="sans-serif" fontSize="8.5" fontWeight="600" fill="#111111" dy="1">
                    Local Problem
                  </text>

                  <rect x="150" y="170" width="84" height="20" rx="4" fill="white" stroke="#EAEAEA"></rect>
                  <text x="192" y="183" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="#666666" dy="1">
                    Iteration
                  </text>

                  <rect x="250" y="90" width="70" height="20" rx="4" fill="white" stroke="#111111" strokeWidth="1.5" className="node-evidence"></rect>
                  <text x="285" y="103" textAnchor="middle" fontFamily="sans-serif" fontSize="8.5" fontWeight="600" fill="#111111" dy="1">
                    Execution
                  </text>

                  <circle cx="330" cy="120" r="11" fill="#111111" className="node-outcome"></circle>
                  <path d="M326 120l3 3 5-5" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="outcome-check"></path>
                  <text x="330" y="144" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fontWeight="600" fill="#111111">
                    Impact
                  </text>
                </svg>

                {/* Floating Confidence Badge */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#111111] text-white text-[10px] font-medium px-3 py-1.5 rounded shadow-xl pointer-events-none">
                  African Built: 100%
                </div>
              </div>

              {/* Card Footer */}
              <div className="flex items-center justify-between text-[11px] font-mono text-[#666666] pt-3 border-t border-[#EAEAEA]/80">
                <span>DeyPay · LegitLab · Jos Expo</span>
                <span className="text-emerald-600 font-semibold">Active Pipeline</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM LOGOS TICKER */}
      <section className="border-y border-[#EAEAEA]/80 py-12 bg-white z-10 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-xs font-semibold text-[#111111] uppercase tracking-wider whitespace-nowrap md:w-auto w-full text-center md:text-left">
            KENULE INITIATIVES & HUBS
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-12 gap-y-6 opacity-70 hover:opacity-100 transition-opacity duration-300">
            <span className="font-sans text-base sm:text-lg font-extrabold text-[#111111] tracking-tight">
              DEYPAY
            </span>
            <span className="font-sans text-base sm:text-lg font-extrabold text-[#111111] tracking-tight">
              LEGITLAB
            </span>
            <span className="font-sans text-base sm:text-lg font-extrabold text-[#111111] tracking-tight">
              JOS TECH EXPO
            </span>
            <span className="font-sans text-base sm:text-lg font-extrabold text-[#111111] tracking-tight">
              PLATEAU HUB
            </span>
            <span className="font-sans text-base sm:text-lg font-extrabold text-[#111111] tracking-tight">
              AFRICA DEV
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
