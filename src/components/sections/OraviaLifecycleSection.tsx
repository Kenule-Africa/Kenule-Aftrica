"use client";

import { useEffect, useRef } from "react";
import { Check, HelpCircle, FileText, BarChart3, ShieldCheck, Layers } from "lucide-react";

export default function OraviaLifecycleSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const line = lineRef.current;
    if (!section || !header || !line) return;

    const steps = section.querySelectorAll<HTMLElement>(".lifecycle-step");

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const viewH = window.innerHeight;
      const travelDistance = rect.height - viewH;
      const scrolled = -rect.top;
      let progress = scrolled / travelDistance;
      progress = Math.max(0, Math.min(1, progress));

      header.style.opacity = progress > 0.01 ? "1" : "0.9";
      line.style.height = `${progress * 100}%`;

      steps.forEach((step) => {
        const t = parseFloat(step.dataset.threshold || "0");
        if (progress >= t) {
          if (progress < t + 0.16) {
            step.classList.add("active");
            step.style.opacity = "1";
            step.style.transform = "scale(1.03)";
          } else {
            step.classList.add("active");
            step.style.opacity = "0.6";
            step.style.transform = "scale(1)";
          }
        } else {
          step.classList.remove("active");
          step.style.opacity = "0.3";
          step.style.transform = "scale(1)";
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="lifecycle"
      ref={sectionRef}
      className="relative w-full bg-[#FAFAFA] border-b border-[#EAEAEA]/80 scroll-mt-10"
      style={{ height: "340vh" }}
      aria-label="Innovation Lifecycle Methodology"
    >
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(#00000008_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

        <div className="max-w-4xl w-full px-6 md:px-12 relative z-10 flex flex-col items-center h-full py-16">
          {/* Sticky Header */}
          <div
            ref={headerRef}
            className="text-center mb-8 shrink-0 opacity-0 transition-opacity duration-500"
          >
            <h2 className="font-sans text-2xl md:text-3xl font-semibold text-[#111111] tracking-tight mb-2">
              The Kenule Innovation Lifecycle
            </h2>
            <p className="text-[#666666] text-xs sm:text-sm max-w-md mx-auto">
              From local African context to scalable, verified digital infrastructure.
            </p>
          </div>

          {/* Central Line & Steps */}
          <div className="relative w-full max-w-2xl flex-1 flex flex-col justify-center my-auto">
            {/* Background Line */}
            <div className="absolute left-1/2 top-4 bottom-4 w-px bg-[#EAEAEA] -translate-x-1/2"></div>

            {/* Dynamic Active Line */}
            <div
              ref={lineRef}
              className="absolute left-1/2 top-4 w-px bg-[#111111] -translate-x-1/2 transition-all duration-75 ease-linear h-0 max-h-[calc(100%-2rem)]"
            ></div>

            <div className="space-y-12 py-4 relative">
              {/* Step 1: Context */}
              <div
                className="lifecycle-step group flex items-center justify-between w-full opacity-30 transition-all duration-300"
                data-threshold="0.08"
              >
                <div className="w-[42%] text-right pr-6 sm:pr-8">
                  <span className="font-mono text-[10px] text-[#666666] uppercase tracking-wider block mb-1">
                    01 Context
                  </span>
                  <h3 className="font-sans text-sm sm:text-base font-semibold text-[#111111]">
                    The African Challenge
                  </h3>
                  <p className="text-xs text-[#666666] mt-0.5 hidden md:block">
                    Identifying systemic friction in finance & tech skills.
                  </p>
                </div>
                <div className="relative shrink-0 z-10">
                  <div className="w-3 h-3 rounded-full border border-[#EAEAEA] bg-[#FAFAFA] group-[.active]:border-[#111111] group-[.active]:bg-[#111111] transition-colors duration-300"></div>
                </div>
                <div className="w-[42%] pl-6 sm:pl-8">
                  <div className="bg-white border border-[#EAEAEA] p-3 rounded shadow-sm inline-block">
                    <div className="flex items-center gap-2">
                      <HelpCircle className="w-3.5 h-3.5 text-[#666666]" />
                      <span className="text-xs font-medium text-[#111111]">
                        How does Africa move value seamlessly?
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Assumption */}
              <div
                className="lifecycle-step group flex items-center justify-between w-full opacity-30 transition-all duration-300"
                data-threshold="0.22"
              >
                <div className="w-[42%] text-right pr-6 sm:pr-8">
                  <div className="bg-white border border-[#EAEAEA] p-3 rounded shadow-sm inline-block text-left">
                    <span className="text-[10px] text-[#666666] block mb-1">Assumption</span>
                    <span className="text-xs font-medium text-[#111111]">
                      Traditional models gatekeep talent & capital
                    </span>
                  </div>
                </div>
                <div className="relative shrink-0 z-10">
                  <div className="w-3 h-3 rounded-full border border-[#EAEAEA] bg-[#FAFAFA] group-[.active]:border-[#111111] group-[.active]:bg-[#111111] transition-colors duration-300"></div>
                </div>
                <div className="w-[42%] pl-6 sm:pl-8">
                  <span className="font-mono text-[10px] text-[#666666] uppercase tracking-wider block mb-1">
                    02 Input
                  </span>
                  <h3 className="font-sans text-sm sm:text-base font-semibold text-[#111111]">
                    Democratization
                  </h3>
                  <p className="text-xs text-[#666666] mt-0.5 hidden md:block">
                    Zero-cost education unlocks untapped potential.
                  </p>
                </div>
              </div>

              {/* Step 3: Evidence */}
              <div
                className="lifecycle-step group flex items-center justify-between w-full opacity-30 transition-all duration-300"
                data-threshold="0.38"
              >
                <div className="w-[42%] text-right pr-6 sm:pr-8">
                  <span className="font-mono text-[10px] text-[#666666] uppercase tracking-wider block mb-1">
                    03 Evidence
                  </span>
                  <h3 className="font-sans text-sm sm:text-base font-semibold text-[#111111]">
                    LegitLab Cohorts
                  </h3>
                  <p className="text-xs text-subtle mt-0.5 hidden md:block">
                    500+ youth trained with measurable career placement.
                  </p>
                </div>
                <div className="relative shrink-0 z-10">
                  <div className="w-3 h-3 rounded-full border border-[#EAEAEA] bg-[#FAFAFA] group-[.active]:border-[#111111] group-[.active]:bg-[#111111] transition-colors duration-300"></div>
                </div>
                <div className="w-[42%] pl-6 sm:pl-8">
                  <div className="bg-white border border-[#EAEAEA] p-3 rounded shadow-sm inline-flex items-center gap-3">
                    <div className="w-8 h-8 bg-slate-50 rounded flex items-center justify-center border border-[#EAEAEA]">
                      <BarChart3 className="w-4 h-4 text-[#666666]" />
                    </div>
                    <div>
                      <div className="text-[10px] text-[#666666]">Jos Plateau Hub</div>
                      <div className="text-xs font-bold text-[#111111]">100% Free Tuition</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4: Logic */}
              <div
                className="lifecycle-step group flex items-center justify-between w-full opacity-30 transition-all duration-300"
                data-threshold="0.54"
              >
                <div className="w-[42%] text-right pr-6 sm:pr-8">
                  <div className="bg-white border border-[#EAEAEA] p-3 rounded shadow-sm inline-block max-w-[210px] text-left">
                    <div className="flex gap-1 mb-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                    </div>
                    <span className="text-xs font-medium text-[#111111]">
                      Stablecoin neobank + community event flywheel
                    </span>
                  </div>
                </div>
                <div className="relative shrink-0 z-10">
                  <div className="w-3 h-3 rounded-full border border-[#EAEAEA] bg-[#FAFAFA] group-[.active]:border-[#111111] group-[.active]:bg-[#111111] transition-colors duration-300"></div>
                </div>
                <div className="w-[42%] pl-6 sm:pl-8">
                  <span className="font-mono text-[10px] text-[#666666] uppercase tracking-wider block mb-1">
                    04 Logic
                  </span>
                  <h3 className="font-sans text-sm sm:text-base font-semibold text-[#111111]">
                    Ecosystem Symbiosis
                  </h3>
                  <p className="text-xs text-[#666666] mt-0.5 hidden md:block">
                    DeyPay + LegitLab + Jos Tech Expo.
                  </p>
                </div>
              </div>

              {/* Step 5: Outcome */}
              <div
                className="lifecycle-step group flex items-center justify-between w-full opacity-30 transition-all duration-300"
                data-threshold="0.70"
              >
                <div className="w-[42%] text-right pr-6 sm:pr-8">
                  <span className="font-mono text-[10px] text-[#666666] uppercase tracking-wider block mb-1">
                    05 Outcome
                  </span>
                  <h3 className="font-sans text-sm sm:text-base font-semibold text-[#111111]">
                    Venture Launch
                  </h3>
                  <p className="text-xs text-[#666666] mt-0.5 hidden md:block">
                    Real software products shipped.
                  </p>
                </div>
                <div className="relative shrink-0 z-10">
                  <div className="w-3 h-3 rounded-full border border-[#EAEAEA] bg-[#FAFAFA] group-[.active]:border-[#111111] group-[.active]:bg-[#111111] transition-colors duration-300"></div>
                </div>
                <div className="w-[42%] pl-6 sm:pl-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#111111] text-white text-xs font-semibold shadow-lg shadow-[#111111]/20">
                    <span>Active Execution</span>
                    <Check className="w-3 h-3" />
                  </span>
                </div>
              </div>

              {/* Step 6: Audit */}
              <div
                className="lifecycle-step group flex items-center justify-between w-full opacity-30 transition-all duration-300"
                data-threshold="0.86"
              >
                <div className="w-[42%] text-right pr-6 sm:pr-8">
                  <span className="font-mono text-[10px] text-[#666666] bg-slate-100 px-2 py-1 rounded inline-block">
                    RC: 8380017
                  </span>
                </div>
                <div className="relative shrink-0 z-10">
                  <div className="w-3 h-3 rounded-full border border-[#EAEAEA] bg-[#FAFAFA] group-[.active]:border-[#111111] group-[.active]:bg-[#111111] transition-colors duration-300"></div>
                </div>
                <div className="w-[42%] pl-6 sm:pl-8">
                  <span className="font-mono text-[10px] text-[#666666] uppercase tracking-wider block mb-1">
                    06 Trust
                  </span>
                  <h3 className="font-sans text-sm sm:text-base font-semibold text-[#111111]">
                    Corporate Integrity
                  </h3>
                  <p className="text-xs text-[#666666] mt-0.5 hidden md:block">
                    Built to endure for generations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
