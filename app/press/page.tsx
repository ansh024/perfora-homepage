"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import SiteFooter from "../components/SiteFooter";

// ─── Data ─────────────────────────────────────────────────────────────────────

const LOGOS = [
  { pub: "Times of India",  src: "https://perforacare.com/cdn/shop/files/toi-1-66600c54d7459.webp?v=1717570784",            h: 28 },
  { pub: "Moneycontrol",    src: "https://perforacare.com/cdn/shop/files/money-control-1-66600c54138bc.webp?v=1717570715",  h: 22 },
  { pub: "Vogue India",     src: "https://perforacare.com/cdn/shop/files/Vogue.webp?v=1658167060",                          h: 28 },
  { pub: "Elle India",      src: "https://perforacare.com/cdn/shop/files/Untitled-1-01_1.png?v=1658137283",                h: 24 },
  { pub: "Grazia",          src: "https://perforacare.com/cdn/shop/files/Grazia_1.png?v=1658137294",                       h: 26 },
  { pub: "Outlook India",   src: "https://perforacare.com/cdn/shop/files/Outlook.webp?v=1658166962",                       h: 30 },
  { pub: "YourStory",       src: "https://perforacare.com/cdn/shop/files/Your_Story_Logo_1.png?v=1658137210",              h: 22 },
  { pub: "Campaign India",  src: "https://perforacare.com/cdn/shop/files/campaign-1-66600c5185d1f.webp?v=1717570945",      h: 24 },
  { pub: "HomeGrown",       src: "https://perforacare.com/cdn/shop/files/HomeGrown.webp?v=1658166904",                     h: 22 },
  { pub: "BW Disrupt",      src: "https://perforacare.com/cdn/shop/files/BW-Disrupt.webp?v=1658167177",                    h: 26 },
  { pub: "Indian Retailer", src: "https://perforacare.com/cdn/shop/files/Indian-Retailer-logo.webp?v=1658167177",          h: 24 },
];

const FEATURED = [
  {
    id:          "moneycontrol",
    pub:         "Moneycontrol",
    logo:        "https://perforacare.com/cdn/shop/files/money-control-1-66600c54138bc.webp?v=1717570715",
    date:        "August 2023",
    tag:         "Business",
    tagColor:    "#3D1F8F",
    headline:    "Shark Tank India's Namita Thapar on Perfora",
    quote:       "Sales rose from ₹70 lakh to ₹3.5 crore a month.",
    attribution: "Namita Thapar — Shark Tank India",
    context:     "After Perfora's Shark Tank India appearance, investor Namita Thapar publicly praised the brand's explosive growth — a 5× revenue jump in months.",
    url:         "https://www.moneycontrol.com/",
    dark:        true,
  },
  {
    id:          "elle",
    pub:         "Elle India",
    logo:        "https://perforacare.com/cdn/shop/files/Untitled-1-01_1.png?v=1658137283",
    date:        "December 2021",
    tag:         "Lifestyle",
    tagColor:    "#B5541B",
    headline:    "I Tried The Perfora Electric Toothbrush",
    quote:       "My mouth felt extremely clean and fresh.",
    attribution: "Editorial Review — Elle India",
    context:     "India's leading fashion and lifestyle magazine put Perfora's electric toothbrush through a real-world test — and the results spoke for themselves.",
    url:         "https://elle.in/",
    dark:        false,
  },
  {
    id:          "outlook",
    pub:         "Outlook India",
    logo:        "https://perforacare.com/cdn/shop/files/Outlook.webp?v=1658166962",
    date:        "April 2024",
    tag:         "Product Award",
    tagColor:    "#1A6B42",
    headline:    "10 Best Electric Toothbrushes in India (2024)",
    quote:       "Efficient brushing with two modes, smart timer, and eco-friendly design.",
    attribution: "Outlook India — Product Awards 2024",
    context:     "One of India's most-read news publications independently ranked Perfora among the country's top ten electric toothbrushes.",
    url:         "https://www.outlookindia.com/",
    dark:        false,
  },
];

const ALL_COVERAGE = [
  {
    id:   "toi",
    pub:  "Times of India",
    logo: "https://perforacare.com/cdn/shop/files/toi-1-66600c54d7459.webp?v=1717570784",
    date: "Jan 2024",
    tag:  "Product",
    tagColor: "#1B4E8A",
    headline: "Perfora's first-ever oscillating electric toothbrush comes with USB Type-C charging",
    url:  "https://timesofindia.indiatimes.com/",
  },
  {
    id:   "moneycontrol",
    pub:  "Moneycontrol",
    logo: "https://perforacare.com/cdn/shop/files/money-control-1-66600c54138bc.webp?v=1717570715",
    date: "Aug 2023",
    tag:  "Business",
    tagColor: "#3D1F8F",
    headline: "Shark Tank India's Namita Thapar: 'Sales rose from ₹70 lakh to ₹3.5 crore a month'",
    url:  "https://www.moneycontrol.com/",
  },
  {
    id:   "campaign",
    pub:  "Campaign India",
    logo: "https://perforacare.com/cdn/shop/files/campaign-1-66600c5185d1f.webp?v=1717570945",
    date: "Dec 2023",
    tag:  "Campaign",
    tagColor: "#7A1F5E",
    headline: "Jim Sarbh advocates the switch to Perfora for dental wellness",
    url:  "https://www.campaignindia.in/",
  },
  {
    id:   "outlook",
    pub:  "Outlook India",
    logo: "https://perforacare.com/cdn/shop/files/Outlook.webp?v=1658166962",
    date: "Apr 2024",
    tag:  "Award",
    tagColor: "#1A6B42",
    headline: "10 Best Electric Toothbrushes in India (2024)",
    url:  "https://www.outlookindia.com/",
  },
  {
    id:   "vogue",
    pub:  "Vogue India",
    logo: "https://perforacare.com/cdn/shop/files/Vogue.webp?v=1658167060",
    date: "Sep 2021",
    tag:  "Lifestyle",
    tagColor: "#B5541B",
    headline: "Perfora is Here To Elevate Your Everyday Experience",
    url:  "https://www.vogue.in/",
  },
  {
    id:   "elle",
    pub:  "Elle India",
    logo: "https://perforacare.com/cdn/shop/files/Untitled-1-01_1.png?v=1658137283",
    date: "Dec 2021",
    tag:  "Review",
    tagColor: "#B5541B",
    headline: "I Tried The Perfora Electric Toothbrush And Here Are My Thoughts",
    url:  "https://elle.in/",
  },
  {
    id:   "grazia",
    pub:  "Grazia India",
    logo: "https://perforacare.com/cdn/shop/files/Grazia_1.png?v=1658137294",
    date: "Nov 2021",
    tag:  "Lifestyle",
    tagColor: "#B5541B",
    headline: "The Best Beauty Drops We Loved This November",
    url:  "https://www.grazia.co.in/",
  },
  {
    id:   "yourstory",
    pub:  "YourStory",
    logo: "https://perforacare.com/cdn/shop/files/Your_Story_Logo_1.png?v=1658137210",
    date: "Dec 2021",
    tag:  "Startup",
    tagColor: "#7A5C00",
    headline: "This Gurugram-based D2C startup aims to elevate your everyday dental regime",
    url:  "https://yourstory.com/",
  },
  {
    id:   "homegrown",
    pub:  "Homegrown",
    logo: "https://perforacare.com/cdn/shop/files/HomeGrown.webp?v=1658166904",
    date: "Sep 2021",
    tag:  "Startup",
    tagColor: "#7A5C00",
    headline: "Redesigning Oral Hygiene With This New Homegrown Brand",
    url:  "https://homegrown.co.in/",
  },
  {
    id:   "bwdisrupt",
    pub:  "BW Disrupt",
    logo: "https://perforacare.com/cdn/shop/files/BW-Disrupt.webp?v=1658167177",
    date: "Sep 2021",
    tag:  "Business",
    tagColor: "#3D1F8F",
    headline: "Homegrown Healthcare Startup Perfora is Keen to 'Elevate' Oral Care",
    url:  "https://bwdisrupt.businessworld.in/",
  },
  {
    id:   "indianretailer",
    pub:  "Indian Retailer",
    logo: "https://perforacare.com/cdn/shop/files/Indian-Retailer-logo.webp?v=1658167177",
    date: "Sep 2021",
    tag:  "Industry",
    tagColor: "#1B4E8A",
    headline: "How New-Age Brands are Evolving Oral Healthcare Industry in India",
    url:  "https://www.indianretailer.com/",
  },
];

// ─── Logo Marquee ─────────────────────────────────────────────────────────────

function LogoMarquee() {
  const doubled = [...LOGOS, ...LOGOS];
  return (
    <div
      style={{
        background:   "#FAFAFA",
        borderTop:    "1px solid #EDE9FB",
        borderBottom: "1px solid #EDE9FB",
        padding:      "28px 0",
        overflow:     "hidden",
      }}
    >
      <p
        style={{
          fontFamily:    "var(--font-inter)",
          fontSize:      10,
          fontWeight:    700,
          letterSpacing: "0.18em",
          color:         "#9B8CB8",
          textAlign:     "center",
          textTransform: "uppercase",
          marginBottom:  20,
        }}
      >
        As seen in
      </p>
      <div style={{ position: "relative", overflow: "hidden" }}>
        {/* Fade edges */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(to right, #FAFAFA, transparent)", zIndex: 2, pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(to left, #FAFAFA, transparent)", zIndex: 2, pointerEvents: "none" }} />
        <div
          className="press-marquee"
          style={{
            display:   "flex",
            alignItems: "center",
            gap:        56,
            width:      "max-content",
            animation:  "pressScroll 28s linear infinite",
          }}
        >
          {doubled.map((l, i) => (
            <img
              key={i}
              src={l.src}
              alt={l.pub}
              style={{
                height:   l.h,
                width:    "auto",
                objectFit: "contain",
                opacity:  0.55,
                filter:   "grayscale(100%)",
                flexShrink: 0,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Featured card ─────────────────────────────────────────────────────────────

function FeaturedCard({ item, large }: { item: typeof FEATURED[0]; large?: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display:        "flex",
        flexDirection:  "column",
        justifyContent: "space-between",
        padding:        large ? "clamp(28px,4vw,44px)" : "clamp(22px,3vw,34px)",
        borderRadius:   20,
        textDecoration: "none",
        background:     item.dark
          ? "linear-gradient(145deg, #1A0A3D 0%, #2D1260 100%)"
          : "#FFFFFF",
        border:         item.dark ? "none" : "1.5px solid #EDE9FB",
        boxShadow:      hovered
          ? item.dark
            ? "0 24px 60px rgba(61,31,143,0.35)"
            : "0 16px 48px rgba(61,31,143,0.12)"
          : item.dark
            ? "0 8px 32px rgba(10,4,28,0.3)"
            : "0 2px 12px rgba(61,31,143,0.06)",
        transform:     hovered ? "translateY(-3px)" : "translateY(0)",
        transition:    "all 0.25s ease",
        height:        "100%",
        minHeight:     large ? 320 : 240,
      }}
    >
      {/* Top: logo + tag */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 20 }}>
        <img
          src={item.logo}
          alt={item.pub}
          style={{
            height:    22,
            width:     "auto",
            objectFit: "contain",
            filter:    item.dark ? "brightness(0) invert(1)" : "grayscale(100%)",
            opacity:   item.dark ? 0.9 : 0.65,
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span
            style={{
              fontFamily:    "var(--font-inter)",
              fontSize:      10.5,
              fontWeight:    600,
              letterSpacing: "0.1em",
              textTransform: "uppercase" as const,
              color:         item.dark ? "rgba(180,160,255,0.9)" : item.tagColor,
              background:    item.dark ? "rgba(255,255,255,0.08)" : `${item.tagColor}14`,
              padding:       "3px 9px",
              borderRadius:  20,
            }}
          >
            {item.tag}
          </span>
          <span style={{
            fontFamily: "var(--font-inter)",
            fontSize:   10.5,
            color:      item.dark ? "rgba(180,160,255,0.55)" : "#9B8CB8",
          }}>
            {item.date}
          </span>
        </div>
      </div>

      {/* Quote */}
      <blockquote style={{ margin: "0 0 16px", flex: 1 }}>
        <p
          className="font-display"
          style={{
            fontStyle:   "italic",
            fontSize:    large ? "clamp(1.25rem,2.2vw,1.65rem)" : "clamp(1.05rem,1.7vw,1.3rem)",
            lineHeight:  1.35,
            color:       item.dark ? "#F0EAFF" : "#1A0A3D",
            margin:      0,
            fontWeight:  400,
          }}
        >
          "{item.quote}"
        </p>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize:   12,
            fontWeight: 500,
            color:      item.dark ? "rgba(180,160,255,0.7)" : "#6B4FB3",
            marginTop:  10,
          }}
        >
          — {item.attribution}
        </p>
      </blockquote>

      {/* Context + CTA */}
      <div>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize:   13,
            lineHeight: 1.6,
            color:      item.dark ? "rgba(200,185,240,0.75)" : "#666077",
            marginBottom: 18,
          }}
        >
          {item.context}
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span
            style={{
              fontFamily:    "var(--font-inter)",
              fontSize:      12.5,
              fontWeight:    600,
              color:         item.dark ? "#A78BFA" : "#3D1F8F",
              letterSpacing: "0.02em",
            }}
          >
            Read the story
          </span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ transform: hovered ? "translateX(3px)" : "translateX(0)", transition: "transform 0.2s" }}>
            <path d="M3 7h8M8 4l3 3-3 3" stroke={item.dark ? "#A78BFA" : "#3D1F8F"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </a>
  );
}

// ─── Coverage row card ────────────────────────────────────────────────────────

function CoverageCard({ item }: { item: typeof ALL_COVERAGE[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display:        "flex",
        flexDirection:  "column",
        padding:        "20px 22px",
        borderRadius:   16,
        textDecoration: "none",
        background:     hovered ? "#F7F4FF" : "#FFFFFF",
        border:         `1.5px solid ${hovered ? "#C4B5F0" : "#EDE9FB"}`,
        boxShadow:      hovered ? "0 8px 28px rgba(61,31,143,0.1)" : "0 1px 4px rgba(61,31,143,0.04)",
        transform:      hovered ? "translateY(-2px)" : "translateY(0)",
        transition:     "all 0.22s ease",
        gap:            12,
        height:         "100%",
      }}
    >
      {/* Publication logo */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <img
          src={item.logo}
          alt={item.pub}
          style={{
            height: 20, width: "auto", objectFit: "contain",
            filter: "grayscale(100%)", opacity: hovered ? 0.8 : 0.5,
            transition: "opacity 0.2s",
          }}
        />
        <span style={{
          fontFamily:    "var(--font-inter)",
          fontSize:      9.5,
          fontWeight:    600,
          letterSpacing: "0.1em",
          textTransform: "uppercase" as const,
          color:         item.tagColor,
          background:    `${item.tagColor}12`,
          padding:       "2px 7px",
          borderRadius:  10,
        }}>
          {item.tag}
        </span>
      </div>

      {/* Headline */}
      <p style={{
        fontFamily: "var(--font-inter)",
        fontSize:   13.5,
        fontWeight: 600,
        lineHeight: 1.45,
        color:      "#1A0A3D",
        margin:     0,
        flex:       1,
      }}>
        {item.headline}
      </p>

      {/* Date + arrow */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{
          fontFamily: "var(--font-inter)",
          fontSize:   11,
          color:      "#9B8CB8",
        }}>
          {item.date}
        </span>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
          style={{ opacity: hovered ? 1 : 0.4, transition: "opacity 0.2s", transform: hovered ? "translateX(2px)" : "none" }}>
          <path d="M3 7h8M8 4l3 3-3 3" stroke="#3D1F8F" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </a>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PressPage() {
  const [visible, setVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Injected keyframes */}
      <style>{`
        @keyframes pressScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes pressFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .press-fade-up {
          opacity: 0;
          animation: pressFadeUp 0.65s ease forwards;
        }
      `}</style>

      <Navbar />

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        style={{
          background:   "linear-gradient(155deg, #0D0521 0%, #1A0A3D 55%, #2D1260 100%)",
          paddingTop:    "clamp(72px,9vw,120px)",
          paddingBottom: "clamp(60px,8vw,100px)",
          paddingLeft:   "clamp(20px,5vw,80px)",
          paddingRight:  "clamp(20px,5vw,80px)",
          position:      "relative",
          overflow:      "hidden",
        }}
      >
        {/* Decorative glow blobs */}
        <div style={{ position: "absolute", top: -80, right: -60, width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(107,79,179,0.22) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -40, left: -80, width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(61,31,143,0.18) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>

          {/* Eyebrow */}
          <div
            className="press-fade-up"
            style={{ animationDelay: "0ms", display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 24 }}
          >
            <span style={{ display: "block", width: 28, height: 1.5, background: "#A78BFA" }} />
            <span style={{
              fontFamily:    "var(--font-inter)",
              fontSize:      11,
              fontWeight:    700,
              letterSpacing: "0.2em",
              textTransform: "uppercase" as const,
              color:         "#A78BFA",
            }}>
              In The Press
            </span>
            <span style={{ display: "block", width: 28, height: 1.5, background: "#A78BFA" }} />
          </div>

          {/* Headline */}
          <h1
            className="font-display press-fade-up"
            style={{
              animationDelay: "120ms",
              fontSize:       "clamp(2rem,5.5vw,4rem)",
              fontWeight:     700,
              lineHeight:     1.1,
              letterSpacing:  "-0.03em",
              color:          "#F0EAFF",
              margin:         "0 0 20px",
            }}
          >
            India's oral care story,<br />
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "#C4B5F0" }}>
              told by those who noticed first.
            </em>
          </h1>

          {/* Sub */}
          <p
            className="press-fade-up"
            style={{
              animationDelay: "220ms",
              fontFamily:     "var(--font-inter)",
              fontSize:       "clamp(14px,1.5vw,17px)",
              color:          "rgba(190,175,230,0.85)",
              lineHeight:     1.7,
              maxWidth:       560,
              margin:         "0 auto 44px",
            }}
          >
            From Vogue to Moneycontrol, from Shark Tank India to Elle — 11 trusted publications
            have independently covered our story. Here it is, in their words.
          </p>

          {/* Stats row */}
          <div
            className="press-fade-up"
            style={{
              animationDelay:  "320ms",
              display:         "flex",
              justifyContent:  "center",
              flexWrap:        "wrap",
              gap:             "clamp(16px,3vw,48px)",
            }}
          >
            {[
              { value: "11+", label: "Media Features" },
              { value: "5×",  label: "Revenue Growth Post Shark Tank" },
              { value: "2021–2024", label: "3 Years of Coverage" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <p
                  className="font-display"
                  style={{
                    fontSize:   "clamp(1.6rem,3.5vw,2.6rem)",
                    fontWeight: 700,
                    color:      "#E9E0FF",
                    margin:     0,
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </p>
                <p style={{
                  fontFamily: "var(--font-inter)",
                  fontSize:   11.5,
                  color:      "rgba(170,155,210,0.8)",
                  margin:     "6px 0 0",
                  letterSpacing: "0.03em",
                }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOGO MARQUEE ── */}
      <LogoMarquee />

      {/* ── FEATURED COVERAGE ── */}
      <section
        style={{
          background:    "#F5F3FF",
          paddingTop:    "clamp(52px,6vw,88px)",
          paddingBottom: "clamp(52px,6vw,88px)",
          paddingLeft:   "clamp(20px,4vw,64px)",
          paddingRight:  "clamp(20px,4vw,64px)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* Section label */}
          <div style={{ marginBottom: "clamp(28px,3vw,44px)" }}>
            <p style={{
              fontFamily:    "var(--font-inter)",
              fontSize:      10.5,
              fontWeight:    700,
              letterSpacing: "0.18em",
              textTransform: "uppercase" as const,
              color:         "#9B8CB8",
              marginBottom:  10,
            }}>
              Spotlight Coverage
            </p>
            <h2
              className="font-display"
              style={{
                fontSize:      "clamp(1.5rem,3vw,2.2rem)",
                fontWeight:    700,
                letterSpacing: "-0.025em",
                color:         "#1A0A3D",
                margin:        0,
              }}
            >
              The stories that shaped{" "}
              <em style={{ fontStyle: "italic", fontWeight: 400, color: "#6B4FB3" }}>
                how India sees us
              </em>
            </h2>
          </div>

          {/* Two cards side-by-side on desktop, stacked on mobile */}
          <div style={{
            display:             "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap:                 "clamp(12px,1.5vw,20px)",
            alignItems:         "stretch",
          }}>
            <FeaturedCard item={FEATURED[1]} large />
            <FeaturedCard item={FEATURED[2]} large />
          </div>
        </div>
      </section>

      {/* ── SHARK TANK CALLOUT BANNER ── */}
      <div style={{
        background:   "linear-gradient(to right, #3D1F8F, #6B3FA0)",
        padding:      "clamp(24px,3vw,36px) clamp(20px,5vw,80px)",
        display:      "flex",
        alignItems:   "center",
        justifyContent: "center",
        gap:          "clamp(16px,2vw,32px)",
        flexWrap:     "wrap",
        textAlign:    "center",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="15" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
            <path d="M16 8l2 5.5h5.5l-4.5 3.2 1.7 5.3L16 19l-4.7 3 1.7-5.3-4.5-3.2H14z" fill="white"/>
          </svg>
          <p style={{
            fontFamily: "var(--font-inter)",
            fontSize:   "clamp(13px,1.5vw,16px)",
            fontWeight: 600,
            color:      "#fff",
            margin:     0,
          }}>
            Featured on Shark Tank India
          </p>
        </div>
        <div style={{ width: 1, height: 32, background: "rgba(255,255,255,0.2)" }} className="hidden md:block" />
        <p style={{
          fontFamily: "var(--font-inter)",
          fontSize:   "clamp(12px,1.3vw,14.5px)",
          color:      "rgba(225,210,255,0.9)",
          margin:     0,
          maxWidth:   520,
        }}>
          After our Shark Tank India appearance, investor Namita Thapar reported our monthly sales jumped from{" "}
          <strong style={{ color: "#fff" }}>₹70 lakh to ₹3.5 crore</strong> — a 5× growth that India's business media couldn't stop talking about.
        </p>
      </div>

      {/* ── ALL COVERAGE GRID ── */}
      <section
        style={{
          background:    "#FFFFFF",
          paddingTop:    "clamp(52px,6vw,80px)",
          paddingBottom: "clamp(52px,6vw,80px)",
          paddingLeft:   "clamp(20px,4vw,64px)",
          paddingRight:  "clamp(20px,4vw,64px)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          <div style={{ marginBottom: "clamp(28px,3vw,44px)" }}>
            <p style={{
              fontFamily:    "var(--font-inter)",
              fontSize:      10.5,
              fontWeight:    700,
              letterSpacing: "0.18em",
              textTransform: "uppercase" as const,
              color:         "#9B8CB8",
              marginBottom:  10,
            }}>
              Full Media Coverage
            </p>
            <h2
              className="font-display"
              style={{
                fontSize:      "clamp(1.5rem,3vw,2.2rem)",
                fontWeight:    700,
                letterSpacing: "-0.025em",
                color:         "#1A0A3D",
                margin:        0,
              }}
            >
              Every article.{" "}
              <em style={{ fontStyle: "italic", fontWeight: 400, color: "#6B4FB3" }}>Every mention.</em>
            </h2>
          </div>

          <div style={{
            display:             "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
            gap:                 "clamp(10px,1.2vw,16px)",
          }}>
            {ALL_COVERAGE.map((item) => (
              <CoverageCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── MEDIA KIT CTA ── */}
      <section
        style={{
          background:    "linear-gradient(160deg, #1A0A3D 0%, #0D0521 100%)",
          paddingTop:    "clamp(56px,7vw,96px)",
          paddingBottom: "clamp(56px,7vw,96px)",
          paddingLeft:   "clamp(20px,4vw,64px)",
          paddingRight:  "clamp(20px,4vw,64px)",
          textAlign:     "center",
        }}
      >
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          {/* Icon */}
          <div style={{
            width:          64,
            height:         64,
            borderRadius:   "50%",
            background:     "rgba(107,79,179,0.2)",
            border:         "1.5px solid rgba(167,139,250,0.3)",
            display:        "flex",
            alignItems:     "center",
            justifyContent: "center",
            margin:         "0 auto 24px",
          }}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M5 20V7a2 2 0 012-2h7l5 5v10a2 2 0 01-2 2H7a2 2 0 01-2-2z" stroke="#A78BFA" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M14 5v5h5M9 14h10M9 17.5h6" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>

          <h2
            className="font-display"
            style={{
              fontSize:      "clamp(1.6rem,3.5vw,2.4rem)",
              fontWeight:    700,
              letterSpacing: "-0.025em",
              color:         "#F0EAFF",
              margin:        "0 0 14px",
            }}
          >
            Writing about Perfora?
          </h2>
          <p style={{
            fontFamily: "var(--font-inter)",
            fontSize:   "clamp(14px,1.4vw,16px)",
            color:      "rgba(190,175,230,0.8)",
            lineHeight: 1.7,
            margin:     "0 0 36px",
          }}>
            We'd love to tell you our full story — brand assets, founder bios,
            product photography, and data are all ready to go. Drop us a line.
          </p>

          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 14 }}>
            <a
              href="mailto:press@perforacare.com"
              style={{
                display:        "inline-flex",
                alignItems:     "center",
                gap:            8,
                padding:        "13px 28px",
                borderRadius:   40,
                background:     "#3D1F8F",
                color:          "#fff",
                fontFamily:     "var(--font-inter)",
                fontSize:       14,
                fontWeight:     600,
                textDecoration: "none",
                letterSpacing:  "0.02em",
                border:         "none",
                transition:     "background 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#5130B8"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#3D1F8F"; (e.currentTarget as HTMLElement).style.transform = "none"; }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" stroke="white" strokeWidth="1.4"/>
                <path d="M1.5 5.5l6.5 4 6.5-4" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
              press@perforacare.com
            </a>
            <a
              href="https://perforacare.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display:        "inline-flex",
                alignItems:     "center",
                gap:            8,
                padding:        "13px 28px",
                borderRadius:   40,
                background:     "transparent",
                color:          "#A78BFA",
                fontFamily:     "var(--font-inter)",
                fontSize:       14,
                fontWeight:     600,
                textDecoration: "none",
                letterSpacing:  "0.02em",
                border:         "1.5px solid rgba(167,139,250,0.35)",
                transition:     "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(167,139,250,0.7)"; el.style.color = "#C4B5F0"; }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(167,139,250,0.35)"; el.style.color = "#A78BFA"; }}
            >
              Visit our website
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
