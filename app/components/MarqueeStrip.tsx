"use client";

import React from "react";

// ─── Logo registry ─────────────────────────────────────────────────────────────
// All logos sourced from official brand assets / Wikimedia Commons.
// Heights are tuned so each brand reads at similar visual weight in the strip.

type LogoEntry = {
  key: string;
  label: string;
  src: string;
  height: number;
  imgStyle?: React.CSSProperties;
};

const LOGOS: LogoEntry[] = [
  {
    key:    "amazon",
    label:  "Amazon",
    src:    "/logos/amazon.svg",
    height: 26,
  },
  {
    key:    "flipkart",
    label:  "Flipkart",
    src:    "/logos/flipkart.svg",
    height: 28,
  },
  {
    key:      "blinkit",
    label:    "Blinkit",
    src:      "/logos/blinkit.svg",
    height:   32,
    imgStyle: { borderRadius: 6 },
  },
  {
    key:    "zepto",
    label:  "Zepto",
    src:    "/logos/zepto.svg",
    height: 26,
  },
  {
    key:    "swiggy",
    label:  "Swiggy Instamart",
    src:    "/logos/swiggy.webp",
    height: 28,
  },
  {
    key:    "nykaa",
    label:  "Nykaa",
    src:    "/logos/nykaa.svg",
    height: 22,
  },
  {
    key:    "myntra",
    label:  "Myntra",
    src:    "/logos/myntra.svg",
    height: 26,
  },
];

// ─── Section ───────────────────────────────────────────────────────────────────
export default function MarqueeStrip() {
  const track = [...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <section
      className="w-full bg-white"
      style={{
        borderTop:    "1px solid #EDEAF7",
        borderBottom: "1px solid #EDEAF7",
        paddingTop:    "14px",
        paddingBottom: "14px",
      }}
    >
      {/* Screen-reader–only platform list */}
      <ul className="sr-only">
        {LOGOS.map(({ key, label }) => (
          <li key={key}>{label}</li>
        ))}
      </ul>

      {/* ── Label ── */}
      <p
        style={{
          textAlign:     "center",
          fontFamily:    "var(--font-inter)",
          fontSize:      "10px",
          fontWeight:    400,
          letterSpacing: "0.24em",
          textTransform: "uppercase",
          color:         "#B8AFCF",
          marginBottom:  "12px",
        }}
      >
        Trusted by shoppers across
      </p>

      {/* ── Marquee ── */}
      <div
        aria-hidden="true"
        className="overflow-hidden"
        style={{
          maskImage:       "linear-gradient(to right, transparent 0%, black 9%, black 91%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 9%, black 91%, transparent 100%)",
        }}
      >
        <div
          className="flex items-center"
          style={{
            animation:  "perfora-marquee-triple 28s linear infinite",
            width:      "max-content",
            willChange: "transform",
          }}
        >
          {track.map(({ key, label, src, height, imgStyle }, i) => (
            <span
              key={`${key}-${i}`}
              className="inline-flex items-center flex-shrink-0"
              style={{
                padding: "0 38px",
                opacity: 0.85,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={label}
                style={{
                  height,
                  width:     "auto",
                  display:   "block",
                  objectFit: "contain",
                  ...imgStyle,
                }}
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
