"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function SonicVideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.15 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      aria-label="Perfora Sonic Electric Toothbrush"
      style={{
        position:      "relative",
        overflow:      "hidden",
        minHeight:     "clamp(540px, 70vh, 760px)",
        display:       "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background:    "#08021A",
      }}
    >
      {/* ── Background video ── */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="metadata"
        style={{
          position:       "absolute",
          inset:          0,
          width:          "100%",
          height:         "100%",
          objectFit:      "cover",
          objectPosition: "center center",
          display:        "block",
        }}
      >
        <source src="/assets/sonic%20ETB.mp4" type="video/mp4" />
      </video>

      {/* ── Gradient overlay — dark top & bottom, transparent middle ── */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset:    0,
          background:
            "linear-gradient(to bottom, rgba(8,2,24,0.82) 0%, rgba(8,2,24,0.12) 36%, rgba(8,2,24,0.12) 64%, rgba(8,2,24,0.78) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Top: eyebrow + heading + sub ── */}
      <div
        style={{
          position:  "relative",
          zIndex:    2,
          textAlign: "center",
          padding:   "clamp(48px, 6vw, 88px) clamp(20px, 8vw, 120px) 0",
        }}
      >
        {/* Eyebrow */}
        <p
          style={{
            fontFamily:    "var(--font-inter)",
            fontSize:      "clamp(9px, 0.9vw, 10.5px)",
            fontWeight:    700,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color:         "#B8A8E8",
            margin:        "0 0 clamp(16px, 2.2vw, 24px)",
          }}
        >
          Perfora Sonic Series
        </p>

        {/* Main heading */}
        <h2
          className="font-display"
          style={{
            fontWeight:    700,
            fontSize:      "clamp(1.9rem, 4.2vw, 3.4rem)",
            lineHeight:    1.09,
            color:         "#FFFFFF",
            letterSpacing: "-0.022em",
            maxWidth:      "17ch",
            margin:        "0 auto",
          }}
        >
          Your search for the{" "}
          <em style={{ fontStyle: "italic", color: "#C8B8FF" }}>
            perfect toothbrush
          </em>{" "}
          ends here.
        </h2>

        {/* Subheading */}
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize:   "clamp(13px, 1.3vw, 15.5px)",
            color:      "rgba(210,200,255,0.72)",
            lineHeight: 1.65,
            maxWidth:   "40ch",
            margin:     "clamp(14px, 2vw, 22px) auto 0",
            fontWeight: 400,
          }}
        >
          Clinically designed sonic care for cleaner, brighter smiles.
        </p>
      </div>

      {/* ── Bottom: CTA ── */}
      <div
        style={{
          position:      "relative",
          zIndex:        2,
          textAlign:     "center",
          paddingBottom: "clamp(44px, 6vw, 84px)",
        }}
      >
        <motion.a
          href="#products"
          whileHover={{
            scale:     1.04,
            boxShadow: "0 0 44px rgba(107,79,179,0.72), 0 8px 32px rgba(61,31,143,0.58)",
          }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          style={{
            display:        "inline-flex",
            alignItems:     "center",
            gap:            10,
            padding:        "clamp(13px, 1.3vw, 16px) clamp(28px, 3vw, 42px)",
            borderRadius:   "100vw",
            background:     "#3D1F8F",
            color:          "#FFFFFF",
            fontFamily:     "var(--font-inter)",
            fontSize:       "clamp(13px, 1.15vw, 15px)",
            fontWeight:     600,
            letterSpacing:  "0.025em",
            boxShadow:      "0 0 28px rgba(61,31,143,0.52), 0 4px 20px rgba(61,31,143,0.38)",
            textDecoration: "none",
            whiteSpace:     "nowrap",
          }}
        >
          Explore Electric Toothbrush
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path
              d="M2 7h10M8 3l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.a>
      </div>
    </section>
  );
}
