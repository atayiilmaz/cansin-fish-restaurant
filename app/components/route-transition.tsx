"use client";

import gsap from "gsap";
import { usePathname, useRouter } from "next/navigation";
import { type ReactNode, useEffect, useRef } from "react";

export function RouteTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const contentRef = useRef<HTMLDivElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);
  const navigating = useRef(false);

  useEffect(() => {
    const content = contentRef.current;
    const curtain = curtainRef.current;
    if (!content || !curtain) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (firstRender.current) {
      firstRender.current = false;
      gsap.set(curtain, { scaleY: 0, autoAlpha: 0 });
      return;
    }

    window.scrollTo({ top: 0, behavior: "auto" });
    navigating.current = false;

    if (reducedMotion) {
      gsap.set(curtain, { scaleY: 0, autoAlpha: 0 });
      gsap.set(content, { clearProps: "all" });
      return;
    }

    gsap.killTweensOf([curtain, content]);
    gsap.set(curtain, { transformOrigin: "top center", scaleY: 1, autoAlpha: 1 });
    gsap.fromTo(content, { y: 20, autoAlpha: 0.45 }, { y: 0, autoAlpha: 1, duration: 0.68, ease: "power3.out", clearProps: "transform,opacity,visibility" });
    gsap.to(curtain, { scaleY: 0, duration: 0.62, ease: "power3.inOut", onComplete: () => gsap.set(curtain, { autoAlpha: 0 }) });
  }, [pathname]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || navigating.current) return;

      const anchor = (event.target as HTMLElement).closest<HTMLAnchorElement>("a[href]");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      const target = new URL(anchor.href, window.location.href);
      const current = new URL(window.location.href);
      if (target.origin !== current.origin || target.protocol !== "http:" && target.protocol !== "https:") return;
      if (target.pathname === current.pathname && target.search === current.search) return;

      event.preventDefault();
      const href = `${target.pathname}${target.search}${target.hash}`;
      const curtain = curtainRef.current;

      if (!curtain || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        router.push(href);
        return;
      }

      navigating.current = true;
      gsap.killTweensOf(curtain);
      gsap.set(curtain, { transformOrigin: "bottom center", scaleY: 0, autoAlpha: 1 });
      gsap.to(curtain, { scaleY: 1, duration: 0.46, ease: "power3.inOut", onComplete: () => router.push(href) });
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [router]);

  return (
    <>
      <div ref={contentRef}>{children}</div>
      <div ref={curtainRef} className="route-curtain" aria-hidden="true"><span>Cansın Restaurant</span></div>
    </>
  );
}
