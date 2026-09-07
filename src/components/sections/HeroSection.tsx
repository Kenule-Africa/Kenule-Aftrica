import { ArrowRight, MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10"
      aria-label="Hero Introduction"
    >
      <div className="max-w-3xl space-y-6">
        {/* Verification & Location Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
          <span className="font-mono text-xs text-gray-300 tracking-wider">
            RC: 8380017 · BUILT IN NIGERIA
          </span>
          <span className="text-gray-500">|</span>
          <span className="font-mono text-xs text-[#f0b90b] flex items-center gap-1">
            <MapPin className="w-3 h-3" /> Jos, Plateau State
          </span>
        </div>

        {/* Primary Semantic H1 Heading */}
        <h1 className="font-syne text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
          Building Tomorrow’s <br />
          <span className="font-serif italic font-normal text-[#f0b90b] relative">
            African Reality
            <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#f0b90b] to-transparent opacity-60"></span>
          </span>
        </h1>

        {/* High-visibility description */}
        <p className="text-lg sm:text-xl text-gray-300 font-normal leading-relaxed max-w-2xl">
          From fintech infrastructure to free tech education, we engineer digital products
          and nurture talent designed specifically for the unique realities of African life,
          never borrowed from elsewhere.
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#ventures"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#f0b90b] text-black font-syne font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#ffc820] hover:scale-105 active:scale-95 transition-all shadow-[0_0_25px_rgba(240,185,11,0.3)]"
          >
            <span>See What We’re Building</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#about"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/5 border border-white/15 text-white font-syne font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-white/10 hover:border-white/30 transition-all"
          >
            <span>Our Story</span>
          </a>
        </div>
      </div>

      {/* Metrics Strip */}
      <div className="mt-20 pt-10 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6">
        <div className="space-y-1">
          <div className="font-syne text-2xl sm:text-3xl font-extrabold text-[#f0b90b] flex items-center gap-1">
            <span>500+</span>
          </div>
          <p className="font-mono text-xs text-gray-400 uppercase tracking-wider">
            Youth Trained Free
          </p>
        </div>

        <div className="space-y-1">
          <div className="font-syne text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-1">
            <span>3</span>
          </div>
          <p className="font-mono text-xs text-gray-400 uppercase tracking-wider">
            Flagship Ventures
          </p>
        </div>

        <div className="space-y-1">
          <div className="font-syne text-2xl sm:text-3xl font-extrabold text-[#14f7b0] flex items-center gap-1">
            <span>100%</span>
          </div>
          <p className="font-mono text-xs text-gray-400 uppercase tracking-wider">
            African Engineered
          </p>
        </div>

        <div className="space-y-1">
          <div className="font-syne text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-1">
            <span>#1</span>
          </div>
          <p className="font-mono text-xs text-gray-400 uppercase tracking-wider">
            Northern Tech Expo
          </p>
        </div>
      </div>
    </section>
  );
}
