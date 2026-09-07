"use client";

import { useEffect, useRef } from "react";
import { Check, HelpCircle, FileText, BarChart3, ShieldCheck, Layers } from "lucide-react";

export default function OraviaLifecycleSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const stepsData = [
    {
      num: "01",
      category: "Context",
      title: "The African Challenge",
      desc: "Identifying systemic friction in finance, digital infrastructure, and talent development across emerging markets.",
      callout: "How does Africa move value seamlessly?",
      icon: HelpCircle,
      threshold: 0.08,
    },
    {
      num: "02",
      category: "Input",
      title: "Democratization",
      desc: "Zero-cost education and accessible infrastructure unlock massive untapped potential across Africa.",
      callout: "Traditional models gatekeep talent and capital",
      icon: FileText,
      threshold: 0.24,
    },
    {
      num: "03",
      category: "Evidence",
      title: "LegitLab Cohorts",
      desc: "500+ youth trained with verified portfolio reviews, career readiness, and high-income skills.",
      callout: "Jos Hub · 100% Free Tuition",
      icon: BarChart3,
      threshold: 0.40,
    },
    {
      num: "04",
      category: "Logic",
      title: "Ecosystem Symbiosis",
      desc: "Integrating payments (DeyPay), education (LegitLab), and regional summits (Jos Tech Expo) into a self-reinforcing flywheel.",
      callout: "Stablecoin neobank + community flywheel",
      icon: Layers,
      threshold: 0.56,
    },
    {
      num: "05",
      category: "Outcome",
      title: "Venture Launch",
      desc: "Shipping robust, scalable software products engineered specifically for how African commerce actually functions.",
      callout: "Active Pan-African Execution",
      icon: Check,
      threshold: 0.72,
    },
    {
      num: "06",
      category: "Trust",
      title: "Corporate Integrity",
      desc: "Fully registered corporate entity (RC: 8380017) built on transparent governance and long-term sovereignty.",
      callout: "Verified Entity · RC: 8380017",
      icon: ShieldCheck,
      threshold: 0.88,
    },
  ];

  useEffect(() => {
    // Desktop Scroll Listener
    const section = sectionRef.current;
    const header = headerRef.current;
    const line = lineRef.current;
    if (!section || !header || !line) return;

    const desktopSteps = section.querySelectorAll<HTMLElement>(".desktop-lifecycle-step");

    const handleDesktopScroll = () => {
      if (window.innerWidth < 768) return; // Handled by IntersectionObserver on mobile
      const rect = section.getBoundingClientRect();
      const viewH = window.innerHeight;
      const travelDistance = rect.height - viewH;
      const scrolled = -rect.top;
      let progress = scrolled / travelDistance;
      progress = Math.max(0, Math.min(1, progress));

      header.style.opacity = progress > 0.01 ? "1" : "0.9";
      line.style.height = `${progress * 100}%`;

      desktopSteps.forEach((step) => {
        const t = parseFloat(step.dataset.threshold || "0");
        if (progress >= t) {
          if (progress < t + 0.16) {
            step.classList.add("active");
            step.style.opacity = "1";
            step.style.transform = "scale(1.02)";
          } else {
            step.classList.add("active");
            step.style.opacity = "0.7";
            step.style.transform = "scale(1)";
          }
        } else {
          step.classList.remove("active");
          step.style.opacity = "0.25";
          step.style.transform = "scale(1)";
        }
      });
    };

    window.addEventListener("scroll", handleDesktopScroll, { passive: true });
    handleDesktopScroll();

    // Mobile Intersection Observer for Smooth Step-by-Step Reveal
    const mobileSteps = section.querySelectorAll<HTMLElement>(".mobile-lifecycle-step");
    const mobileObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-30", "translate-y-4");
            const indicator = entry.target.querySelector(".mobile-step-node");
            if (indicator) {
              indicator.classList.add("bg-[#111111]", "scale-110");
              indicator.classList.remove("bg-[#EAEAEA]");
            }
          }
        });
      },
      { threshold: 0.35, rootMargin: "0px 0px -10% 0px" }
    );

    mobileSteps.forEach((step) => mobileObserver.observe(step));

    return () => {
      window.removeEventListener("scroll", handleDesktopScroll);
      mobileObserver.disconnect();
    };
  }, []);

  return (
    <section
      id="lifecycle"
      ref={sectionRef}
      className="relative w-full bg-[#FAFAFA] scroll-mt-10"
      aria-label="Innovation Lifecycle Methodology"
    >
      {/* ========================================================================= */}
      {/* 1. DESKTOP VIEW: Interactive Sticky Pinning Flow (>= md) */}
      {/* ========================================================================= */}
      <div className="hidden md:block relative w-full" style={{ height: "320vh" }}>
        <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(#00000008_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

          <div className="max-w-4xl w-full px-8 lg:px-0 relative z-10 flex flex-col items-center h-full py-16 justify-center">
            {/* Header */}
            <div
              ref={headerRef}
              className="text-center mb-8 shrink-0 transition-opacity duration-500"
            >
              <h2 className="font-sans text-2xl md:text-3xl font-semibold text-[#111111] tracking-tight mb-2">
                The Kenule Innovation Lifecycle
              </h2>
              <p className="text-[#666666] text-sm max-w-md mx-auto">
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

              <div className="space-y-10 py-4 relative">
                {stepsData.map((step, idx) => {
                  const isEven = idx % 2 === 1;
                  const Icon = step.icon;

                  return (
                    <div
                      key={step.num}
                      className="desktop-lifecycle-step group flex items-center justify-between w-full opacity-25 transition-all duration-300"
                      data-threshold={step.threshold}
                    >
                      {/* Left Column */}
                      <div className="w-[42%] text-right pr-8">
                        {!isEven ? (
                          <div>
                            <span className="font-mono text-[10px] text-[#666666] uppercase tracking-wider block mb-1">
                              {step.num} {step.category}
                            </span>
                            <h3 className="font-sans text-base font-semibold text-[#111111]">
                              {step.title}
                            </h3>
                            <p className="text-xs text-[#666666] mt-0.5">
                              {step.desc}
                            </p>
                          </div>
                        ) : (
                          <div className="bg-white p-3.5 rounded-xl shadow-md inline-block text-left">
                            <span className="text-[10px] text-[#666666] block mb-1">{step.category}</span>
                            <span className="text-xs font-medium text-[#111111] leading-tight">
                              {step.callout}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Center Node */}
                      <div className="relative shrink-0 z-10">
                        <div className="w-3 h-3 rounded-full bg-[#EAEAEA] group-[.active]:bg-[#111111] transition-all duration-300"></div>
                      </div>

                      {/* Right Column */}
                      <div className="w-[42%] pl-8">
                        {isEven ? (
                          <div>
                            <span className="font-mono text-[10px] text-[#666666] uppercase tracking-wider block mb-1">
                              {step.num} {step.category}
                            </span>
                            <h3 className="font-sans text-base font-semibold text-[#111111]">
                              {step.title}
                            </h3>
                            <p className="text-xs text-[#666666] mt-0.5">
                              {step.desc}
                            </p>
                          </div>
                        ) : (
                          <div className="bg-white p-3.5 rounded-xl shadow-md inline-flex items-center gap-2.5">
                            <div className="w-7 h-7 bg-neutral-100 rounded-lg flex items-center justify-center shrink-0">
                              <Icon className="w-3.5 h-3.5 text-[#111111]" />
                            </div>
                            <span className="text-xs font-medium text-[#111111] leading-tight">
                              {step.callout}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. MOBILE VIEW: Natural Fluid Scroll Timeline (< md) */}
      {/* ========================================================================= */}
      <div className="block md:hidden py-14 px-4 sm:px-6 relative">
        <div className="max-w-lg mx-auto">
          {/* Mobile Header */}
          <div className="text-center mb-10">
            <span className="text-[10px] font-mono font-bold tracking-widest text-neutral-500 uppercase bg-neutral-100 px-3 py-1 rounded-full inline-block mb-3">
              METHODOLOGY
            </span>
            <h2 className="font-sans text-2xl font-bold text-[#111111] tracking-tight mb-2">
              The Kenule Innovation Lifecycle
            </h2>
            <p className="text-[#666666] text-xs max-w-sm mx-auto leading-relaxed">
              From local African context to scalable, verified digital infrastructure.
            </p>
          </div>

          {/* Mobile Vertical Timeline */}
          <div className="relative pl-7 sm:pl-8 space-y-6">
            {/* Continuous Vertical Timeline Line */}
            <div className="absolute left-2.5 sm:left-3 top-3 bottom-3 w-[2px] bg-neutral-200"></div>

            {stepsData.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.num}
                  className="mobile-lifecycle-step relative opacity-30 translate-y-4 transition-all duration-500 ease-out"
                >
                  {/* Step Node Marker */}
                  <div className="absolute -left-7 sm:-left-8 top-3.5 flex items-center justify-center">
                    <div className="mobile-step-node w-3.5 h-3.5 rounded-full bg-[#EAEAEA] transition-all duration-300"></div>
                  </div>

                  {/* Step Card */}
                  <div className="bg-white rounded-xl shadow-md p-4 sm:p-5 flex flex-col gap-2.5 transition-transform duration-300">
                    {/* Step Number & Category Header */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] font-bold text-neutral-500 uppercase tracking-widest">
                        {step.num} · {step.category}
                      </span>
                      <div className="w-6 h-6 rounded-md bg-neutral-100 flex items-center justify-center shrink-0">
                        <Icon className="w-3.5 h-3.5 text-[#111111]" />
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="font-sans text-sm sm:text-base font-bold text-[#111111]">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs text-[#666666] leading-relaxed">
                      {step.desc}
                    </p>

                    {/* Callout Chip */}
                    <div className="mt-1 pt-2.5 border-t border-neutral-100 flex items-center gap-2">
                      <span className="text-[11px] font-medium text-[#111111] bg-neutral-50 px-2.5 py-1 rounded">
                        {step.callout}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
