"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import SiteFooter from "../components/SiteFooter";

function SmartImg({ src, alt, style }: { src: string; alt: string; style?: React.CSSProperties }) {
  const [err, setErr] = useState(false);
  const ref = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (el && el.complete && el.naturalWidth === 0) setErr(true);
  }, []);
  if (err) return (
    <div style={{ ...style, background: "linear-gradient(135deg,#2D1260,#6B4FB3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <span style={{ fontFamily: "var(--font-inter)", fontSize: 11, color: "rgba(255,255,255,0.45)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
        Add photo → {src}
      </span>
    </div>
  );
  // eslint-disable-next-line @next/next/no-img-element
  return <img ref={ref} src={src} alt={alt} style={style} onError={() => setErr(true)} />;
}

const TIMELINE = [
  { year: "2021", title: "Two friends, one frustration", body: "Tushar and Jatan looked at the oral care shelf and saw a category nobody had bothered to make exciting. Perfora was born in Gurugram." },
  { year: "2022–23", title: "A full ritual, not just a tube", body: "Electric toothbrushes, water flossers, teeth whitening, mouth fresheners — every launch held to the same bar: design-led, expert-backed, better for you." },
  { year: "2023", title: "Shark Tank India → 5× growth", body: "After the pitch, investor Namita Thapar reported monthly sales jumped from ₹70 lakh to ₹3.5 crore. Eleven media features followed. The founders were named Entrepreneur's 35 Under 35." },
];

export default function AboutPage() {
  const [vis, setVis] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVis(true), 60); return () => clearTimeout(t); }, []);

  return (
    <>
      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        .fu { opacity:0; animation: fadeUp 0.65s ease forwards; }
      `}</style>
      <Navbar />

      {/* ── SCROLL 1: HERO — dark, two-col ── */}
      <section style={{ background: "linear-gradient(155deg,#0D0521 0%,#1A0A3D 55%,#2D1260 100%)", minHeight: "100vh", display: "flex", alignItems: "center", padding: "clamp(80px,10vw,120px) clamp(20px,6vw,88px) clamp(56px,7vw,88px)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -100, right: -80, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(107,79,179,0.25) 0%,transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", gap: "clamp(36px,5vw,72px)", alignItems: "center", position: "relative", zIndex: 1 }}>

          <div>
            <div className={vis ? "fu" : ""} style={{ animationDelay: "0ms", display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
              <span style={{ width: 28, height: 1.5, background: "#A78BFA", display: "block" }} />
              <span style={{ fontFamily: "var(--font-inter)", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A78BFA" }}>Our Story</span>
            </div>
            <h1 className={`font-display ${vis ? "fu" : ""}`} style={{ animationDelay: "100ms", fontSize: "clamp(2.4rem,5.5vw,4.2rem)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.03em", color: "#F0EAFF", margin: "0 0 20px" }}>
              Elevating<br /><em style={{ fontStyle: "italic", fontWeight: 400, color: "#C4B5F0" }}>the everyday ritual.</em>
            </h1>
            <p className={vis ? "fu" : ""} style={{ animationDelay: "200ms", fontFamily: "var(--font-inter)", fontSize: "clamp(15px,1.5vw,17px)", color: "rgba(200,185,240,0.85)", lineHeight: 1.75, maxWidth: 460, margin: "0 0 32px" }}>
              We're Tushar and Jatan — two friends who refused to believe oral care had to be boring. In 2021 we started Perfora in Gurugram to build a clean, design-led brand that makes the most everyday routine feel anything but ordinary.
            </p>
            <div className={vis ? "fu" : ""} style={{ animationDelay: "300ms", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
              <a href="/" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", borderRadius: 40, background: "#fff", color: "#1A0A3D", fontFamily: "var(--font-inter)", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
                Shop the range
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="#1A0A3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
              <span style={{ fontFamily: "var(--spectral)", fontStyle: "italic", fontSize: 15, color: "rgba(180,160,255,0.8)" }}>— Tushar &amp; Jatan</span>
            </div>
          </div>

          {/* Founders photo grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div style={{ borderRadius: 20, overflow: "hidden", gridColumn: "1/-1", aspectRatio: "16/9", boxShadow: "0 20px 60px rgba(10,4,28,0.5)", border: "1px solid rgba(167,139,250,0.15)" }}>
              <SmartImg src="/about/founders-products.jpg" alt="Perfora founders holding products" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "4/5", boxShadow: "0 12px 36px rgba(10,4,28,0.4)", border: "1px solid rgba(167,139,250,0.12)" }}>
              <SmartImg src="/about/founders-portrait.jpg" alt="Perfora founders — Entrepreneur 35 Under 35" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "4/5", boxShadow: "0 12px 36px rgba(10,4,28,0.4)", border: "1px solid rgba(167,139,250,0.12)" }}>
              <SmartImg src="/about/shark-tank.jpg" alt="Perfora on Shark Tank India" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── SCROLL 2: JOURNEY — light, timeline + stats ── */}
      <section style={{ background: "#F5F3FF", padding: "clamp(64px,8vw,104px) clamp(20px,6vw,88px)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", gap: "clamp(40px,5vw,80px)", alignItems: "start" }}>

            {/* Timeline */}
            <div>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: 10.5, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#9B8CB8", marginBottom: 14 }}>The Journey</p>
              <h2 className="font-display" style={{ fontSize: "clamp(1.7rem,3.2vw,2.5rem)", fontWeight: 700, letterSpacing: "-0.025em", color: "#1A0A3D", margin: "0 0 36px", lineHeight: 1.15 }}>
                From a frustrated bathroom shelf{" "}
                <em style={{ fontStyle: "italic", fontWeight: 400, color: "#6B4FB3" }}>to a national stage.</em>
              </h2>
              <div style={{ position: "relative" }}>
                <div style={{ position: "absolute", left: 7, top: 4, bottom: 4, width: 2, background: "linear-gradient(to bottom,#3D1F8F,#C4B5F0)" }} />
                {TIMELINE.map((t, i) => (
                  <div key={i} style={{ position: "relative", paddingLeft: 36, paddingBottom: i < TIMELINE.length - 1 ? 32 : 0 }}>
                    <div style={{ position: "absolute", left: 0, top: 4, width: 16, height: 16, borderRadius: "50%", background: "#3D1F8F", border: "3px solid #EDE9FB" }} />
                    <span style={{ fontFamily: "var(--font-inter)", fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", color: "#6B4FB3", background: "#EDE9FB", padding: "3px 10px", borderRadius: 20, display: "inline-block", marginBottom: 10 }}>{t.year}</span>
                    <h3 className="font-display" style={{ fontSize: "clamp(1.1rem,1.8vw,1.3rem)", fontWeight: 700, color: "#1A0A3D", margin: "0 0 7px" }}>{t.title}</h3>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: 14, lineHeight: 1.7, color: "#4A4458", margin: 0 }}>{t.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats + values */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {/* Stats */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {[
                  { v: "5×", l: "Revenue growth post Shark Tank" },
                  { v: "₹3.5Cr", l: "Monthly sales (from ₹70L)" },
                  { v: "11+", l: "National media features" },
                  { v: "35 Under 35", l: "Entrepreneur India" },
                ].map(s => (
                  <div key={s.l} style={{ background: "#fff", border: "1.5px solid #EDE9FB", borderRadius: 18, padding: "22px 20px", boxShadow: "0 2px 12px rgba(61,31,143,0.06)" }}>
                    <p className="font-display" style={{ fontSize: "clamp(1.5rem,2.5vw,2rem)", fontWeight: 700, color: "#1A0A3D", margin: "0 0 4px", letterSpacing: "-0.02em" }}>{s.v}</p>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: 12, lineHeight: 1.45, color: "#9B8CB8", margin: 0 }}>{s.l}</p>
                  </div>
                ))}
              </div>

              {/* Founder note */}
              <blockquote style={{ margin: 0, background: "linear-gradient(145deg,#1A0A3D,#2D1260)", borderRadius: 20, padding: "clamp(24px,3vw,32px)", border: "1px solid rgba(167,139,250,0.2)" }}>
                <p className="font-display" style={{ fontStyle: "italic", fontSize: "clamp(1.1rem,2vw,1.35rem)", lineHeight: 1.55, color: "#EDE6FF", margin: "0 0 14px", fontWeight: 400 }}>
                  "To be candid, we're a little anxious about whether we can build something iconic. But we believe in learning along the way."
                </p>
                <p style={{ fontFamily: "var(--spectral)", fontStyle: "italic", fontSize: 14, color: "#A78BFA", margin: 0 }}>— Tushar &amp; Jatan, Founders</p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── SCROLL 3: CTA ── */}
      <section style={{ background: "linear-gradient(160deg,#1A0A3D 0%,#0D0521 100%)", padding: "clamp(64px,8vw,108px) clamp(20px,5vw,80px)", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-inter)", fontSize: 10.5, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A78BFA", marginBottom: 18 }}>Come be part of it</p>
        <h2 className="font-display" style={{ fontSize: "clamp(2rem,4.5vw,3.4rem)", fontWeight: 700, letterSpacing: "-0.03em", color: "#F0EAFF", margin: "0 0 16px", lineHeight: 1.1 }}>
          We're still on day one<br /><em style={{ fontStyle: "italic", fontWeight: 400, color: "#C4B5F0" }}>of the mission.</em>
        </h2>
        <p style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(14px,1.5vw,17px)", color: "rgba(190,175,230,0.8)", lineHeight: 1.7, maxWidth: 520, margin: "0 auto 40px" }}>
          Try the range that's redefining oral care in India — or just say hello. We read every message.
        </p>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 14 }}>
          <a href="/" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 30px", borderRadius: 40, background: "#fff", color: "#1A0A3D", fontFamily: "var(--font-inter)", fontSize: 14.5, fontWeight: 600, textDecoration: "none" }}>
            Shop Perfora
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="#1A0A3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
          <a href="mailto:founders@perforacare.com" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 30px", borderRadius: 40, background: "transparent", color: "#A78BFA", fontFamily: "var(--font-inter)", fontSize: 14.5, fontWeight: 600, textDecoration: "none", border: "1.5px solid rgba(167,139,250,0.35)" }}>
            founders@perforacare.com
          </a>
        </div>
        {/* Media logos row */}
        <div style={{ marginTop: "clamp(44px,5vw,64px)", borderTop: "1px solid rgba(167,139,250,0.15)", paddingTop: "clamp(32px,4vw,48px)" }}>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(167,139,250,0.5)", marginBottom: 22 }}>As seen in</p>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "clamp(16px,3vw,32px)", alignItems: "center" }}>
            {[
              { pub: "Vogue India", src: "https://perforacare.com/cdn/shop/files/Vogue.webp?v=1658167060" },
              { pub: "Elle India", src: "https://perforacare.com/cdn/shop/files/Untitled-1-01_1.png?v=1658137283" },
              { pub: "Moneycontrol", src: "https://perforacare.com/cdn/shop/files/money-control-1-66600c54138bc.webp?v=1717570715" },
              { pub: "YourStory", src: "https://perforacare.com/cdn/shop/files/Your_Story_Logo_1.png?v=1658137210" },
              { pub: "Outlook India", src: "https://perforacare.com/cdn/shop/files/Outlook.webp?v=1658166962" },
            ].map(l => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={l.pub} src={l.src} alt={l.pub} style={{ height: 22, width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.4 }} />
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
