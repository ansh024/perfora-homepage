"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SiteFooter from "../components/SiteFooter";

const BELIEFS = [
  {
    n: "01",
    title: "Boring has no place here.",
    body: "Every product we make has to look good on your shelf, feel good in your hand, and actually work. That's the bar. We don't ship below it.",
  },
  {
    n: "02",
    title: "Expert-backed, always.",
    body: "Dentist-formulated. Clinically tested. We believe in science as much as we believe in design — you deserve both.",
  },
  {
    n: "03",
    title: "Built for the everyday.",
    body: "Not for special occasions. For the two minutes you spend brushing every morning and night. We made those minutes worth it.",
  },
];

export default function AboutPage() {
  const [vis, setVis] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVis(true), 40); return () => clearTimeout(t); }, []);

  return (
    <>
      <style>{`
        @keyframes fu { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
        .fu { opacity:0; animation: fu 0.7s cubic-bezier(.22,.68,0,1.2) forwards; }
        @keyframes li { from { opacity:0; transform:scaleX(0); } to { opacity:1; transform:scaleX(1); } }
        .li { opacity:0; animation: li 0.9s cubic-bezier(.22,1,.36,1) forwards; transform-origin: left; }
      `}</style>
      <Navbar />

      {/* ── SCREEN 1: MANIFESTO HERO ── */}
      <section
        style={{
          minHeight:      "100svh",
          background:     "linear-gradient(160deg,#07020F 0%,#120636 50%,#1E0A52 100%)",
          display:        "flex",
          flexDirection:  "column",
          justifyContent: "center",
          padding:        "clamp(100px,10vw,130px) clamp(24px,7vw,96px) clamp(64px,8vw,96px)",
          position:       "relative",
          overflow:       "hidden",
        }}
      >
        {/* Glow orbs */}
        <div style={{ position:"absolute", top:"10%", right:"-5%", width:"min(480px,50vw)", height:"min(480px,50vw)", borderRadius:"50%", background:"radial-gradient(circle,rgba(107,79,179,0.28) 0%,transparent 70%)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:"5%", left:"-8%", width:"min(340px,40vw)", height:"min(340px,40vw)", borderRadius:"50%", background:"radial-gradient(circle,rgba(61,31,143,0.22) 0%,transparent 70%)", pointerEvents:"none" }} />

        <div style={{ maxWidth:900, position:"relative", zIndex:1 }}>

          {/* Eyebrow */}
          <div className={vis ? "fu" : ""} style={{ animationDelay:"0ms", display:"flex", alignItems:"center", gap:10, marginBottom:28 }}>
            <span className={vis ? "li" : ""} style={{ animationDelay:"80ms", display:"block", height:1.5, width:32, background:"#7C5CDB" }} />
            <span style={{ fontFamily:"var(--font-inter)", fontSize:11, fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", color:"#7C5CDB" }}>
              Our Story
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`font-display ${vis ? "fu" : ""}`}
            style={{
              animationDelay:  "100ms",
              fontSize:        "clamp(2.8rem,7vw,5.6rem)",
              fontWeight:      700,
              lineHeight:      1.0,
              letterSpacing:   "-0.035em",
              color:           "#EDE6FF",
              margin:          "0 0 clamp(20px,2.5vw,32px)",
            }}
          >
            We made oral care<br />
            <em style={{ fontStyle:"italic", fontWeight:400, color:"#A78BFA" }}>
              worth caring about.
            </em>
          </h1>

          {/* Divider */}
          <div className={vis ? "li" : ""} style={{ animationDelay:"200ms", height:1, width:"min(320px,60%)", background:"linear-gradient(to right,rgba(167,139,250,0.5),transparent)", marginBottom:"clamp(24px,3vw,36px)" }} />

          {/* Body */}
          <p
            className={vis ? "fu" : ""}
            style={{
              animationDelay: "260ms",
              fontFamily:     "var(--font-inter)",
              fontSize:       "clamp(15px,1.6vw,18px)",
              color:          "rgba(210,195,250,0.8)",
              lineHeight:     1.8,
              maxWidth:       580,
              margin:         "0 0 clamp(36px,4vw,52px)",
            }}
          >
            In 2021, Tushar and Jatan looked at the oral care aisle and saw a category that had been neglected for decades. Generic packaging. Boring formulas. No joy whatsoever. So they built Perfora — a brand that treats your daily routine as a ritual worth elevating.
          </p>

          {/* Founders' quote */}
          <div
            className={vis ? "fu" : ""}
            style={{
              animationDelay:  "340ms",
              display:         "flex",
              alignItems:      "flex-start",
              gap:             20,
              maxWidth:        560,
              marginBottom:    "clamp(40px,5vw,60px)",
            }}
          >
            <span style={{ fontFamily:"var(--spectral)", fontSize:"clamp(3rem,6vw,5rem)", lineHeight:0.6, color:"#5B3FBF", marginTop:14, flexShrink:0 }}>"</span>
            <div>
              <p style={{ fontFamily:"var(--spectral)", fontStyle:"italic", fontSize:"clamp(1.05rem,1.8vw,1.3rem)", color:"#D4C4F8", lineHeight:1.6, margin:"0 0 12px" }}>
                We're a little anxious about whether we can build something iconic. But we believe in learning along the way.
              </p>
              <span style={{ fontFamily:"var(--font-inter)", fontSize:12, fontWeight:600, letterSpacing:"0.06em", color:"#7C5CDB", textTransform:"uppercase" }}>
                — Tushar &amp; Jatan, Founders
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className={vis ? "fu" : ""} style={{ animationDelay:"420ms", display:"flex", gap:12, flexWrap:"wrap", alignItems:"center" }}>
            <a
              href="/collections"
              style={{
                display:        "inline-flex",
                alignItems:     "center",
                gap:            8,
                padding:        "13px 28px",
                borderRadius:   999,
                background:     "#FFFFFF",
                color:          "#1A0A3D",
                fontFamily:     "var(--font-inter)",
                fontSize:       14,
                fontWeight:     600,
                textDecoration: "none",
              }}
            >
              Shop the range
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="#1A0A3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{ position:"absolute", bottom:32, left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:8, opacity:0.35 }}>
          <span style={{ fontFamily:"var(--font-inter)", fontSize:10, letterSpacing:"0.15em", textTransform:"uppercase", color:"#A78BFA" }}>scroll</span>
          <svg width="14" height="20" viewBox="0 0 14 24" fill="none">
            <rect x="1" y="1" width="12" height="22" rx="6" stroke="#A78BFA" strokeWidth="1.5" />
            <circle cx="7" cy="7" r="2" fill="#A78BFA">
              <animate attributeName="cy" values="7;14;7" dur="1.8s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
      </section>

      {/* ── SCREEN 2: BELIEFS + MEDIA ── */}
      <section
        style={{
          background:     "#FAFAFA",
          padding:        "clamp(56px,7vw,96px) clamp(24px,7vw,96px)",
        }}
      >
        <div style={{ maxWidth:1100, margin:"0 auto" }}>

          {/* Section label */}
          <p style={{ fontFamily:"var(--font-inter)", fontSize:10.5, fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase", color:"#9B8CB8", marginBottom:14 }}>
            What we stand for
          </p>
          <h2
            className="font-display"
            style={{
              fontSize:      "clamp(1.7rem,3vw,2.4rem)",
              fontWeight:    700,
              letterSpacing: "-0.025em",
              color:         "#1A0A3D",
              margin:        "0 0 clamp(40px,5vw,64px)",
              lineHeight:    1.15,
            }}
          >
            Three things we'll never<br />
            <em style={{ fontStyle:"italic", fontWeight:400, color:"#6B4FB3" }}>compromise on.</em>
          </h2>

          {/* Belief cards — horizontal strip */}
          <div
            style={{
              display:             "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))",
              gap:                 "clamp(1px,0.2vw,2px)",
              marginBottom:        "clamp(56px,7vw,80px)",
            }}
          >
            {BELIEFS.map((b, i) => (
              <div
                key={b.n}
                style={{
                  borderLeft:  i === 0 ? "none" : "1px solid #E8E1F7",
                  paddingLeft: i === 0 ? 0 : "clamp(24px,3vw,40px)",
                  paddingRight:"clamp(0px,2vw,24px)",
                  paddingBottom: "clamp(28px,3vw,0px)",
                }}
              >
                <span
                  style={{
                    fontFamily:    "var(--spectral)",
                    fontStyle:     "italic",
                    fontSize:      "clamp(2.2rem,4vw,3.2rem)",
                    fontWeight:    700,
                    color:         "#EDE9FB",
                    lineHeight:    1,
                    display:       "block",
                    marginBottom:  12,
                  }}
                >
                  {b.n}
                </span>
                <h3
                  className="font-display"
                  style={{
                    fontSize:      "clamp(1.05rem,1.6vw,1.2rem)",
                    fontWeight:    700,
                    color:         "#1A0A3D",
                    margin:        "0 0 12px",
                    lineHeight:    1.25,
                  }}
                >
                  {b.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize:   14,
                    lineHeight: 1.75,
                    color:      "#5A5070",
                    margin:     0,
                  }}
                >
                  {b.body}
                </p>
              </div>
            ))}
          </div>

          {/* Media logos */}
          <div style={{ borderTop:"1px solid #E8E1F7", paddingTop:"clamp(36px,4vw,52px)" }}>
            <p style={{ fontFamily:"var(--font-inter)", fontSize:10, fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", color:"#BDB0D8", marginBottom:22, textAlign:"center" }}>
              As seen in
            </p>
            <div style={{ display:"flex", justifyContent:"center", alignItems:"center", flexWrap:"wrap", gap:"clamp(20px,4vw,48px)" }}>
              {[
                { pub:"Vogue India",    src:"https://perforacare.com/cdn/shop/files/Vogue.webp?v=1658167060" },
                { pub:"Elle India",     src:"https://perforacare.com/cdn/shop/files/Untitled-1-01_1.png?v=1658137283" },
                { pub:"Moneycontrol",  src:"https://perforacare.com/cdn/shop/files/money-control-1-66600c54138bc.webp?v=1717570715" },
                { pub:"YourStory",     src:"https://perforacare.com/cdn/shop/files/Your_Story_Logo_1.png?v=1658137210" },
                { pub:"Outlook India", src:"https://perforacare.com/cdn/shop/files/Outlook.webp?v=1658166962" },
              ].map(l => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={l.pub} src={l.src} alt={l.pub} style={{ height:20, width:"auto", objectFit:"contain", filter:"grayscale(1) brightness(0)", opacity:0.25 }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
