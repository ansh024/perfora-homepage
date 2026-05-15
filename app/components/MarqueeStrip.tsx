"use client";

import React from "react";

// ─── Shared font stack ─────────────────────────────────────────────────────────
const F: React.CSSProperties = {
  fontFamily: "var(--font-inter), 'Helvetica Neue', Arial, sans-serif",
  lineHeight: 1,
  display: "block",
  whiteSpace: "nowrap",
};

// ─── Brand logos ───────────────────────────────────────────────────────────────
// Each logo uses the brand's own color palette.
// A uniform opacity wrapper (0.80) on the track items keeps the strip
// premium and slightly muted without losing brand recognition.

function LogoAmazon() {
  return (
    <span style={{ position: "relative", display: "inline-block", paddingBottom: 9 }}>
      <span style={{ ...F, fontSize: 17, fontWeight: 700, letterSpacing: "-0.03em", color: "#0F1111" }}>
        amazon
      </span>
      {/* Signature smile-to-z arrow in Amazon orange */}
      <svg
        aria-hidden="true"
        style={{ position: "absolute", bottom: 1, left: 2, width: "88%", height: 7 }}
        viewBox="0 0 100 7"
        preserveAspectRatio="none"
        fill="none"
      >
        <path d="M0 4 Q50 8.8 100 2.2" stroke="#FF9900" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M92 0 L100 2.2 L92 4.8" stroke="#FF9900" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function LogoFlipkart() {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
      {/* Shopping bag mark */}
      <svg width="13" height="15" viewBox="0 0 13 15" fill="none" aria-hidden>
        <rect x="0.75" y="4.5" width="11.5" height="9.75" rx="1.5" fill="#2874F0" />
        <path
          d="M3.75 4.5 L3.75 3.25 C3.75 1.87 4.87 0.75 6.25 0.75 C7.63 0.75 8.75 1.87 8.75 3.25 L8.75 4.5"
          stroke="#2874F0" strokeWidth="1.5" strokeLinecap="round" fill="none"
        />
        <path d="M4.25 8.5 L5.75 10 L9 6.5" stroke="white" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span style={{ ...F, fontSize: 16, fontWeight: 700, color: "#2874F0", letterSpacing: "-0.01em" }}>
        Flipkart
      </span>
    </span>
  );
}

function LogoBlinkit() {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
      {/* Lightning bolt */}
      <svg width="9" height="16" viewBox="0 0 9 16" fill="none" aria-hidden>
        <path d="M5.5 0.5 L0.5 8.5 H4 L3.5 15.5 L8.5 7.5 H5 L5.5 0.5Z" fill="#F8C217" />
      </svg>
      <span style={{ ...F, fontSize: 16, fontWeight: 700, color: "#1A1A1A", letterSpacing: "-0.02em" }}>
        blinkit
      </span>
    </span>
  );
}

function LogoZepto() {
  return (
    <span style={{ ...F, fontSize: 18, fontWeight: 800, letterSpacing: "-0.04em", color: "#8025FB" }}>
      zepto
    </span>
  );
}

function LogoInstamart() {
  return (
    <span style={{ display: "inline-flex", flexDirection: "column", gap: 3 }}>
      <span style={{ ...F, fontSize: 13.5, fontWeight: 700, color: "#1A1A1A", letterSpacing: "0.005em" }}>
        Instamart
      </span>
      <span style={{ ...F, fontSize: 8, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "#FC8019" }}>
        by swiggy
      </span>
    </span>
  );
}

function LogoNykaa() {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
      {/* Stylised N lettermark */}
      <svg width="11" height="15" viewBox="0 0 11 15" fill="none" aria-hidden>
        <path d="M1.5 13.5 L1.5 1.5 L9.5 13.5 L9.5 1.5" stroke="#FC2779" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
      <span style={{ ...F, fontSize: 15.5, fontWeight: 600, color: "#FC2779", letterSpacing: "0.01em" }}>
        nykaa
      </span>
    </span>
  );
}

function LogoMyntra() {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
      {/* M lettermark */}
      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" aria-hidden>
        <path d="M1 12.5 L1 1.5 L7 8.5 L13 1.5 L13 12.5" stroke="#FF3F6C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
      <span style={{ ...F, fontSize: 15.5, fontWeight: 600, color: "#FF3F6C", letterSpacing: "-0.01em" }}>
        myntra
      </span>
    </span>
  );
}

// ─── Logo registry ─────────────────────────────────────────────────────────────
const LOGOS = [
  { key: "amazon",    label: "Amazon",          Logo: LogoAmazon    },
  { key: "flipkart",  label: "Flipkart",         Logo: LogoFlipkart  },
  { key: "blinkit",   label: "Blinkit",          Logo: LogoBlinkit   },
  { key: "zepto",     label: "Zepto",            Logo: LogoZepto     },
  { key: "instamart", label: "Swiggy Instamart", Logo: LogoInstamart },
  { key: "nykaa",     label: "Nykaa",            Logo: LogoNykaa     },
  { key: "myntra",    label: "Myntra",           Logo: LogoMyntra    },
] as const;

// ─── Section ───────────────────────────────────────────────────────────────────
export default function MarqueeStrip() {
  // Triple the list so there's always enough content visible on wide screens.
  // The CSS animation runs at exactly -33.333...% (one copy width).
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
          fontFamily:    "var(--font-inter), sans-serif",
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
          {track.map(({ key, Logo }, i) => (
            <span
              key={`${key}-${i}`}
              className="inline-flex items-center flex-shrink-0"
              style={{
                padding: "0 38px",
                opacity: 0.80,
              }}
            >
              <Logo />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
