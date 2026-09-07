"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollAnimator() {
  useEffect(() => {
    // Register plugin
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    // Staggered reveal for section cards and blocks
    const revealElements = document.querySelectorAll(".gsap-reveal");
    revealElements.forEach((el) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Staggered group elements
    const staggerContainers = document.querySelectorAll(".gsap-stagger-group");
    staggerContainers.forEach((container) => {
      const children = container.querySelectorAll(".gsap-stagger-item");
      if (children.length > 0) {
        gsap.fromTo(
          children,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: container,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}
