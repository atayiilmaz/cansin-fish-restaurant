"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

export function MotionEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const mm = gsap.matchMedia();
    const observers: IntersectionObserver[] = [];

    mm.add({ animate: "(prefers-reduced-motion: no-preference)" }, () => {
      gsap.fromTo("[data-hero-reveal]", { y: 34, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1, stagger: 0.11, ease: "power3.out" });

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const children = entry.target.querySelectorAll("[data-reveal-item]");
          gsap.fromTo(children.length ? children : entry.target, { y: 34 }, { y: 0, duration: .8, stagger: .09, ease: "power3.out" });
          observer.unobserve(entry.target);
        });
      }, { threshold: .13 });
      document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
      observers.push(observer);
    });

    mm.add({ desktop: "(min-width: 821px)", animate: "(prefers-reduced-motion: no-preference)" }, (context) => {
      if (!context.conditions?.desktop || !context.conditions?.animate) return;
      const images = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
      let frame = 0;
      const update = () => {
        frame = 0;
        const viewport = window.innerHeight;
        images.forEach((image) => {
          const parent = image.parentElement;
          if (!parent) return;
          const rect = parent.getBoundingClientRect();
          if (rect.bottom < -100 || rect.top > viewport + 100) return;
          const progress = (rect.top + rect.height / 2 - viewport / 2) / viewport;
          gsap.to(image, { y: Math.max(-54, Math.min(54, progress * -72)), duration: .55, ease: "power1.out", overwrite: "auto" });
        });
      };
      const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
      update();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      return () => {
        if (frame) cancelAnimationFrame(frame);
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      };
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
      mm.revert();
    };
  }, [pathname]);

  return null;
}
