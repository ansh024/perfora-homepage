"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function HeroBanner() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !rootRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(".lb-hero-frame", { opacity: 0, y: 28, scale: 0.98 });
      gsap.to(".lb-hero-frame", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        delay: 0.1,
      });
    }, rootRef);

    // Safety net: if the tab is backgrounded/throttled and the rAF-driven
    // tween never runs, don't leave the hero permanently invisible.
    const safety = window.setTimeout(() => {
      gsap.set(".lb-hero-frame", { opacity: 1, y: 0, scale: 1 });
    }, 2000);

    return () => {
      window.clearTimeout(safety);
      ctx.revert();
    };
  }, []);

  return (
    <section aria-label="Hero — Luxe Black Electric Toothbrush" style={{ background: "#FFFFFF" }} ref={rootRef}>
      <a
        href="#buy"
        aria-label="Shop the Luxe Black Electric Toothbrush"
        className="lb-hero-frame"
        style={{
          display: "block",
          position: "relative",
          width: "100%",
          overflow: "hidden",
        }}
      >
        {/* Desktop banner */}
        <div className="lb-hero-desktop" style={{ position: "relative", width: "100%", aspectRatio: "1586 / 992" }}>
          <Image
            src="/luxe-black/hero-banner-desktop.png"
            alt="Perfora Luxe Black Electric Toothbrush — Brushing, Upgraded. Powerful sonic cleaning with a premium design engineered for healthier teeth and gums."
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Mobile banner */}
        <div className="lb-hero-mobile" style={{ position: "relative", width: "100%", aspectRatio: "1 / 1" }}>
          <Image
            src="/luxe-black/hero-banner-mobile.png"
            alt="Perfora Luxe Black Electric Toothbrush — Brushing, Upgraded. Powerful sonic cleaning with a premium design engineered for healthier teeth and gums."
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </a>
    </section>
  );
}
