"use client";

import React from "react";

const F: React.CSSProperties = {
  fontFamily: "var(--font-inter)",
  lineHeight: 1,
  display: "block",
  whiteSpace: "nowrap",
};

// ─── Colored SVG logo components ──────────────────────────────────────────────

function LogoTimesOfIndia() {
  return (
    <span style={{ display: "inline-flex", flexDirection: "column", gap: 1 }}>
      <span style={{ ...F, fontSize: 8, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#C8102E" }}>The</span>
      <span style={{ ...F, fontSize: 15, fontWeight: 800, letterSpacing: "0.04em", textTransform: "uppercase", color: "#C8102E" }}>Times of India</span>
    </span>
  );
}

function LogoVogue() {
  // Vogue uses their signature black — but India edition uses deep red on their masthead
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
      <span style={{ ...F, fontSize: 22, fontWeight: 900, letterSpacing: "-0.04em", color: "#B5121B", fontFamily: "var(--spectral)" }}>VOGUE</span>
      <span style={{ ...F, fontSize: 8, fontWeight: 700, letterSpacing: "0.1em", color: "#B5121B", marginTop: 2 }}>INDIA</span>
    </span>
  );
}

function LogoElle() {
  return (
    <span
      style={{
        display:        "inline-flex",
        alignItems:     "center",
        justifyContent: "center",
        background:     "#E2001A",
        padding:        "3px 10px",
        borderRadius:   2,
      }}
    >
      <span style={{ ...F, fontSize: 18, fontWeight: 900, letterSpacing: "0.15em", color: "#FFFFFF", fontFamily: "var(--spectral)" }}>ELLE</span>
    </span>
  );
}

function LogoMoneycontrol() {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
      {/* MC mark */}
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
        <circle cx="9" cy="9" r="9" fill="#0047AB" />
        <path d="M4 13V5l3.5 5 3.5-5v8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M12 9h3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <span style={{ ...F, fontSize: 14, fontWeight: 700, color: "#0047AB", letterSpacing: "-0.01em" }}>moneycontrol</span>
    </span>
  );
}

function LogoGrazia() {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 0 }}>
      <span style={{ ...F, fontSize: 17, fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase", color: "#1A1A1A", fontFamily: "var(--spectral)" }}>GRAZIA</span>
      <span style={{
        display:     "inline-block",
        width:       5,
        height:      5,
        borderRadius:"50%",
        background:  "#FF3B5C",
        marginLeft:  3,
        marginBottom:8,
        flexShrink:  0,
      }} />
    </span>
  );
}

function LogoOutlook() {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
      {/* Compass/eye mark */}
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
        <circle cx="8" cy="8" r="7.5" stroke="#003B7A" strokeWidth="1.2" />
        <circle cx="8" cy="8" r="3" fill="#003B7A" />
        <line x1="8" y1="0.5" x2="8" y2="3.5" stroke="#003B7A" strokeWidth="1.2" />
        <line x1="8" y1="12.5" x2="8" y2="15.5" stroke="#003B7A" strokeWidth="1.2" />
        <line x1="0.5" y1="8" x2="3.5" y2="8" stroke="#003B7A" strokeWidth="1.2" />
        <line x1="12.5" y1="8" x2="15.5" y2="8" stroke="#003B7A" strokeWidth="1.2" />
      </svg>
      <span style={{ display:"inline-flex", flexDirection:"column", gap:1 }}>
        <span style={{ ...F, fontSize: 13.5, fontWeight: 800, letterSpacing: "0.05em", color: "#003B7A" }}>OUTLOOK</span>
        <span style={{ ...F, fontSize: 7.5, fontWeight: 600, letterSpacing: "0.12em", color: "#C8102E" }}>INDIA</span>
      </span>
    </span>
  );
}

function LogoYourStory() {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
      {/* Y mark */}
      <svg width="14" height="16" viewBox="0 0 14 16" fill="none" aria-hidden>
        <path d="M1 1L7 8V15" stroke="#F7941D" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M13 1L7 8" stroke="#F7941D" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
      <span style={{ display:"inline-flex", flexDirection:"column", gap:0 }}>
        <span style={{ ...F, fontSize: 13, fontWeight: 800, color: "#1A1A1A", letterSpacing: "-0.01em" }}>Your<span style={{ color: "#F7941D" }}>Story</span></span>
      </span>
    </span>
  );
}

function LogoCampaign() {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
      <span style={{ ...F, fontSize: 14, fontWeight: 800, letterSpacing: "0.04em", textTransform: "uppercase", color: "#E31837" }}>Campaign</span>
      <span style={{
        background:  "#E31837",
        color:       "#fff",
        fontFamily:  "var(--font-inter)",
        fontSize:    8,
        fontWeight:  700,
        letterSpacing: "0.1em",
        padding:     "2px 5px",
        borderRadius:2,
        lineHeight:  1,
      }}>INDIA</span>
    </span>
  );
}

function LogoHomeGrown() {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
      {/* Leaf mark */}
      <svg width="12" height="15" viewBox="0 0 12 15" fill="none" aria-hidden>
        <path d="M6 14C6 14 1 9.5 1 5.5C1 3.01 3.24 1 6 1C8.76 1 11 3.01 11 5.5C11 9.5 6 14 6 14Z" fill="#2E7D32" />
        <line x1="6" y1="14" x2="6" y2="7" stroke="#1B5E20" strokeWidth="1" />
      </svg>
      <span style={{ ...F, fontSize: 13.5, fontWeight: 700, color: "#2E7D32", letterSpacing: "0.02em" }}>HomeGrown</span>
    </span>
  );
}

function LogoBWDisrupt() {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
      <span style={{
        background:  "#1A1A2E",
        color:       "#fff",
        fontFamily:  "var(--font-inter)",
        fontSize:    13,
        fontWeight:  900,
        letterSpacing:"-0.01em",
        padding:     "3px 6px",
        borderRadius:3,
        lineHeight:  1,
      }}>BW</span>
      <span style={{ ...F, fontSize: 13, fontWeight: 800, color: "#E63946", letterSpacing: "0.04em" }}>DISRUPT</span>
    </span>
  );
}

function LogoIndianRetailer() {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
      {/* Shopping bag mark */}
      <svg width="12" height="14" viewBox="0 0 12 14" fill="none" aria-hidden>
        <rect x="0.75" y="4" width="10.5" height="9.25" rx="1.5" fill="#E87722" />
        <path d="M3.5 4 L3.5 2.8 C3.5 1.67 4.57 0.75 5.875 0.75 C7.18 0.75 8.25 1.67 8.25 2.8 L8.25 4" stroke="#E87722" strokeWidth="1.4" strokeLinecap="round" fill="none" />
        <path d="M4 8.5 L5.2 9.7 L8 6.8" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span style={{ display:"inline-flex", flexDirection:"column", gap:1 }}>
        <span style={{ ...F, fontSize: 11, fontWeight: 800, color: "#E87722", letterSpacing: "0.06em", textTransform: "uppercase" }}>Indian</span>
        <span style={{ ...F, fontSize: 11, fontWeight: 800, color: "#1A1A1A", letterSpacing: "0.06em", textTransform: "uppercase" }}>Retailer</span>
      </span>
    </span>
  );
}

// ─── Registry ─────────────────────────────────────────────────────────────────
const LOGOS = [
  { key: "toi",           pub: "Times of India",  Logo: LogoTimesOfIndia   },
  { key: "vogue",         pub: "Vogue India",     Logo: LogoVogue          },
  { key: "elle",          pub: "Elle India",      Logo: LogoElle           },
  { key: "moneycontrol",  pub: "Moneycontrol",    Logo: LogoMoneycontrol   },
  { key: "grazia",        pub: "Grazia",          Logo: LogoGrazia         },
  { key: "outlook",       pub: "Outlook India",   Logo: LogoOutlook        },
  { key: "yourstory",     pub: "YourStory",       Logo: LogoYourStory      },
  { key: "campaign",      pub: "Campaign India",  Logo: LogoCampaign       },
  { key: "homegrown",     pub: "HomeGrown",       Logo: LogoHomeGrown      },
  { key: "bwdisrupt",     pub: "BW Disrupt",      Logo: LogoBWDisrupt      },
  { key: "indianretailer",pub: "Indian Retailer", Logo: LogoIndianRetailer },
] as const;

const track = [...LOGOS, ...LOGOS, ...LOGOS];

export default function PressMarqueeStrip() {
  return (
    <section
      className="w-full bg-white"
      style={{
        borderTop:     "1px solid #EDEAF7",
        borderBottom:  "1px solid #EDEAF7",
        paddingTop:    "14px",
        paddingBottom: "14px",
      }}
    >
      <ul className="sr-only">
        {LOGOS.map(({ key, pub }) => <li key={key}>{pub}</li>)}
      </ul>

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
        As seen in
      </p>

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
            animation:  "perfora-marquee-triple 32s linear infinite",
            width:      "max-content",
            willChange: "transform",
          }}
        >
          {track.map(({ key, Logo }, i) => (
            <span
              key={`${key}-${i}`}
              className="inline-flex items-center flex-shrink-0"
              style={{ padding: "0 36px" }}
            >
              <Logo />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
