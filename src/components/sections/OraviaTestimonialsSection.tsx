"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

export default function OraviaTestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      quote:
        "“We don’t believe in copying models from Silicon Valley or London and forcing them on Nigeria. True African innovation starts by building for how people here actually trade, save, and learn.”",
      author: "Founding Partner",
      role: "Kenule Africa & DeyPay Architecture",
    },
    {
      quote:
        "“LegitLab gave me more practical UI/UX skills and mentor feedback in 8 weeks than years of random internet tutorials. It completely changed my career trajectory in Jos.”",
      author: "LegitLab Alumni Cohort",
      role: "Product Designer, Lagos",
    },
    {
      quote:
        "“Jos Tech Expo is positioning Plateau State as the premier technology and startup nexus for Northern Nigeria. The energy, talent, and builders here are unmatched.”",
      author: "Ecosystem Partner",
      role: "Northern Tech Network",
    },
  ];

  const stats = [
    [
      { val: "500+", lbl: "Youth Trained Free" },
      { val: "100%", lbl: "Zero Gatekeeping" },
      { val: "Zero", lbl: "Tuition Cost" },
    ],
    [
      { val: "3", lbl: "Active Ventures" },
      { val: "8wks", lbl: "Intensive Cohorts" },
      { val: "Full", lbl: "Mentor Support" },
    ],
    [
      { val: "1st", lbl: "Northern Expo" },
      { val: "RC:", lbl: "8380017 Registered" },
      { val: "100%", lbl: "African Built" },
    ],
  ];

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <section className="py-20 sm:py-32 bg-[#111111] text-white relative overflow-hidden z-10 px-4 sm:px-8 lg:px-0">
      {/* Background Dots */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 items-center">
          {/* Left: Testimonial Carousel */}
          <div>
            <div className="relative w-full min-h-[220px] sm:min-h-[260px] flex flex-col justify-center">
              {slides.map((slide, index) => {
                const isActive = index === currentIndex;
                return (
                  <div
                    key={index}
                    className={`transition-all duration-700 ease-in-out ${
                      isActive
                        ? "opacity-100 relative translate-x-0"
                        : "opacity-0 absolute top-0 left-0 pointer-events-none -translate-x-4"
                    }`}
                  >
                    <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold tracking-tighter mb-6 sm:mb-8 leading-snug font-serif italic text-gray-100">
                      {slide.quote}
                    </h2>

                    <div className="flex items-center gap-3.5 sm:gap-4">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-bold text-xs sm:text-sm text-white shrink-0">
                        KA
                      </div>
                      <div>
                        <div className="font-medium text-white text-sm sm:text-base">
                          {slide.author}
                        </div>
                        <div className="text-xs sm:text-sm text-white/50">{slide.role}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-3 mt-8 sm:mt-10">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="group w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white hover:bg-white/10 transition-all disabled:opacity-20 disabled:cursor-not-allowed active:scale-95"
                aria-label="Previous quote"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex === slides.length - 1}
                className="group w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white hover:bg-white/10 transition-all disabled:opacity-20 disabled:cursor-not-allowed active:scale-95"
                aria-label="Next quote"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: Live Synchronized Animated Metrics */}
          <div className="grid grid-cols-3 md:flex md:flex-col justify-between gap-3 sm:gap-6 md:gap-0 md:space-y-12 border-t md:border-t-0 md:border-l border-white/10 pt-6 sm:pt-8 md:pt-0 md:pl-16">
            {stats[currentIndex].map((stat, i) => (
              <div key={i} className="transition-all duration-500 ease-out">
                <div className="text-2xl sm:text-4xl font-bold mb-0.5 sm:mb-1 tracking-tight text-white">
                  {stat.val}
                </div>
                <div className="text-[10px] sm:text-sm text-white/50 uppercase font-mono tracking-wider">
                  {stat.lbl}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
