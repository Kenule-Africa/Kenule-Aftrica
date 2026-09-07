"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

export default function OraviaTrajectorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const stepsData = [
    {
      num: "01",
      title: "UI/UX & Product Design",
      desc: "Figma design systems, auto-layouts, wireframing, and user testing.",
    },
    {
      num: "02",
      title: "Web Development",
      desc: "Modern semantic HTML, Tailwind CSS, JavaScript, and live deployments.",
    },
    {
      num: "03",
      title: "Digital Marketing",
      desc: "SEO fundamentals, persuasive copywriting, and paid acquisition funnels.",
    },
    {
      num: "04",
      title: "YouTube Automation",
      desc: "Niche validation, AI-assisted scripting, video editing & monetization.",
    },
    {
      num: "05",
      title: "Web3 & Blockchain",
      desc: "Stablecoin payment mechanics, non-custodial wallets & DeFi in Africa.",
    },
    {
      num: "06",
      title: "Portfolio & Placement",
      desc: "Verified project case studies, client readiness, and startup internships.",
    },
  ];

  useEffect(() => {
    const grid = gridRef.current;
    const line = lineRef.current;
    const section = sectionRef.current;
    if (!grid || !line || !section) return;

    const steps = grid.querySelectorAll<HTMLElement>(".def-step");

    function activateStep(index: number) {
      setActiveIndex(index);
      const percentage = index === 0 ? 0 : (index / (steps.length - 1)) * 100;
      line!.style.width = `${percentage}%`;

      steps.forEach((step, i) => {
        if (i === index) {
          step.classList.add("def-active");
          step.classList.remove("def-inactive");
        } else {
          step.classList.remove("def-active");
          step.classList.add("def-inactive");
        }
      });
    }

    // Initialize with first step active
    activateStep(0);

    let autoplayTimer: NodeJS.Timeout | null = null;

    // Auto-play sequence on intersection
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          let current = 0;
          activateStep(0);

          if (autoplayTimer) clearInterval(autoplayTimer);
          autoplayTimer = setInterval(() => {
            current++;
            if (current >= steps.length) {
              if (autoplayTimer) clearInterval(autoplayTimer);
            } else {
              activateStep(current);
            }
          }, 850);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    // Scroll scrub listener: as user scrolls across section, step updates smoothly
    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.top < vh * 0.7 && rect.bottom > vh * 0.2) {
        const progress = Math.min(Math.max((vh * 0.7 - rect.top) / (rect.height * 0.8), 0), 1);
        const targetStep = Math.min(Math.floor(progress * steps.length), steps.length - 1);
        if (targetStep >= 0 && targetStep < steps.length) {
          activateStep(targetStep);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Hover overrides
    steps.forEach((step, i) => {
      step.addEventListener("mouseenter", () => {
        if (autoplayTimer) clearInterval(autoplayTimer);
        activateStep(i);
      });
      step.addEventListener("click", () => {
        if (autoplayTimer) clearInterval(autoplayTimer);
        activateStep(i);
      });
    });

    return () => {
      observer.disconnect();
      if (autoplayTimer) clearInterval(autoplayTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="legitlab"
      className="py-16 sm:py-24 px-4 sm:px-8 lg:px-0 border-b border-[#EAEAEA]/80 bg-[#FAFAFA] relative z-10 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 sm:mb-16 lg:mb-20 gap-6 sm:gap-8">
          <div className="max-w-2xl">
            <h2 className="font-sans text-2xl sm:text-4xl font-semibold text-[#111111] tracking-tight mb-3 sm:mb-4">
              How LegitLab Accelerates African Careers
            </h2>
            <p className="font-sans text-[#666666] text-sm sm:text-lg leading-relaxed font-light">
              LegitLab equips youth in Jos and across Nigeria with verified, high-income digital proficiencies,
              completely free of charge.
            </p>
          </div>

          <a
            href="https://forms.gle/PzbnPTfnHMCd79uj8"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#111111] text-white font-semibold text-xs tracking-wider uppercase hover:bg-black transition-all shadow-sm active:scale-[0.98]"
          >
            <span>Apply for Next Cohort</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="relative w-full">
          {/* Dynamic Connecting Line (Desktop) */}
          <div className="absolute top-[1.125rem] left-0 right-0 h-px bg-[#EAEAEA] hidden lg:block z-0">
            <div
              ref={lineRef}
              id="def-line-fill"
              className="h-full bg-[#111111] w-0 transition-all duration-700 ease-in-out"
            ></div>
          </div>

          <div
            ref={gridRef}
            id="def-grid"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-x-6 sm:gap-x-8 gap-y-8 sm:gap-y-12 relative z-10"
          >
            {stepsData.map((step, index) => (
              <div
                key={index}
                className="def-step group flex flex-col gap-3 sm:gap-4 cursor-pointer p-5 sm:p-0 rounded-2xl sm:rounded-none bg-white sm:bg-transparent shadow-md sm:shadow-none"
                data-index={index}
              >
                <div className="flex items-center gap-4">
                  <div className="def-num w-9 h-9 bg-white rounded-lg flex items-center justify-center text-[10px] font-mono font-medium text-[#666666] shadow-sm transition-all duration-500 z-10">
                    {step.num}
                  </div>
                  <div className="h-px flex-1 bg-[#EAEAEA]/80 lg:hidden"></div>
                </div>
                <div className="def-content transition-all duration-500">
                  <h3 className="font-sans text-sm font-semibold text-[#111111] mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
