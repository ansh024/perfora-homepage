"use client";

import React from "react";

const PRESS_LOGOS = [
  { key: "toi",           pub: "Times of India",  src: "/press-logos/toi.webp",           h: 28 },
  { key: "vogue",         pub: "Vogue India",     src: "/press-logos/vogue.webp",         h: 26 },
  { key: "elle",          pub: "Elle India",      src: "/press-logos/elle.png",           h: 24 },
  { key: "moneycontrol",  pub: "Moneycontrol",    src: "/press-logos/moneycontrol.webp",  h: 22 },
  { key: "grazia",        pub: "Grazia",          src: "/press-logos/grazia.png",         h: 26 },
  { key: "outlook",       pub: "Outlook India",   src: "/press-logos/outlook.webp",       h: 28 },
  { key: "yourstory",     pub: "YourStory",       src: "/press-logos/yourstory.png",      h: 22 },
  { key: "campaign",      pub: "Campaign India",  src: "/press-logos/campaign.webp",      h: 24 },
  { key: "homegrown",     pub: "HomeGrown",       src: "/press-logos/homegrown.webp",     h: 22 },
  { key: "bwdisrupt",     pub: "BW Disrupt",      src: "/press-logos/bwdisrupt.webp",     h: 26 },
  { key: "indianretailer",pub: "Indian Retailer", src: "/press-logos/indianretailer.webp",h: 24 },
] as const;

// Triple for seamless loop
const track = [...PRESS_LOGOS, ...PRESS_LOGOS, ...PRESS_LOGOS];

export default function PressMarqueeStrip() {
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
      {/* Screen-reader–only list */}
      <ul className="sr-only">
        {PRESS_LOGOS.map(l => <li key={l.key}>{l.pub}</li>)}
      </ul>

      {/* Label */}
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

      {/* Marquee */}
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
          {track.map((logo, i) => (
            <span
              key={`${logo.key}-${i}`}
              className="inline-flex items-center flex-shrink-0"
              style={{ padding: "0 38px" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.pub}
                style={{
                  height:     logo.h,
                  width:      "auto",
                  objectFit:  "contain",
                  display:    "block",
                }}
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
