"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Only enable on devices with a mouse/pointer and hover support
    const hasPointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!hasPointer) return;

    setIsEnabled(true);
    document.body.classList.add("custom-cursor-active");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
    };

    const render = () => {
      // Spring lerp for trailing ring
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    animationFrameId = requestAnimationFrame(render);

    // Attach hover listeners to interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target?.closest(
          "a, button, input, textarea, select, [role='button'], .interactive-hover"
        )
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  if (!isEnabled) return null;

  return (
    <>
      {/* Tiny sharp center dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#f0b90b] rounded-full pointer-events-none z-[9999] transition-opacity duration-200"
        style={{ willChange: "transform" }}
      />
      {/* Trailing luminous gold ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border transition-[width,height,border-color,opacity,background-color] duration-300 ease-out ${
          isHovered
            ? "w-12 h-12 border-[#f0b90b] bg-[#f0b90b]/10 opacity-100 shadow-[0_0_15px_rgba(240,185,11,0.4)]"
            : "w-8 h-8 border-[#f0b90b]/40 bg-transparent opacity-60"
        }`}
        style={{ willChange: "transform" }}
      />
    </>
  );
}
