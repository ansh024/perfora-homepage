"use client";

import { motion } from "framer-motion";

export default function OurStorySection() {
  return (
    <section
      aria-label="Our Story"
      style={{
        background: "linear-gradient(175deg,#2A1060 0%,#140838 45%,#0E0528 100%)",
        position:   "relative",
        overflow:   "hidden",
      }}
    >
      {/* Glow orbs */}
      <div style={{ position:"absolute", top:"8%", right:"-4%", width:"min(380px,40vw)", height:"min(380px,40vw)", borderRadius:"50%", background:"radial-gradient(circle,rgba(107,79,179,0.2) 0%,transparent 70%)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:"10%", left:"-5%", width:"min(280px,30vw)", height:"min(280px,30vw)", borderRadius:"50%", background:"radial-gradient(circle,rgba(61,31,143,0.15) 0%,transparent 70%)", pointerEvents:"none" }} />

      <div
        style={{
          maxWidth: 1200,
          margin:   "0 auto",
          padding:  "clamp(48px,5.5vw,80px) clamp(20px,6vw,80px)",
          position: "relative",
          zIndex:   1,
        }}
      >
        {/* ── Eyebrow + Title (full width) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: "clamp(24px,3vw,40px)" }}
        >
          <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:14 }}>
            <span style={{ display:"block", height:1.5, width:28, background:"#7C5CDB" }} />
            <span style={{ fontFamily:"var(--font-inter)", fontSize:11, fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", color:"#7C5CDB" }}>
              Our Story
            </span>
          </div>
          <h2
            className="font-display"
            style={{
              fontSize:      "clamp(2rem,3.5vw,3.2rem)",
              fontWeight:    700,
              lineHeight:    1.07,
              letterSpacing: "-0.03em",
              color:         "#EDE6FF",
              margin:        0,
            }}
          >
            We made oral care<br />
            <em style={{ fontStyle:"italic", fontWeight:400, color:"#A78BFA" }}>
              worth caring about.
            </em>
          </h2>
        </motion.div>

        {/* ── Photo + Quote grid ── */}
        <div
          className="our-story-grid"
          style={{
            display:             "grid",
            gridTemplateColumns: "1fr 1fr",
            gap:                 "clamp(24px,4vw,60px)",
            alignItems:          "center",
          }}
        >
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            style={{
              borderRadius: 20,
              overflow:     "hidden",
              boxShadow:    "0 20px 56px rgba(0,0,0,0.4)",
              border:       "1.5px solid rgba(167,139,250,0.15)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/founders-mobile.png"
              alt="Tushar and Jatan, Perfora founders"
              style={{ width:"100%", display:"block", objectFit:"cover" }}
            />
          </motion.div>

          {/* Quote + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
          >
            {/* Divider */}
            <div style={{ height:1, width:"min(200px,50%)", background:"linear-gradient(to right,rgba(167,139,250,0.5),transparent)", marginBottom:"clamp(18px,2.5vw,28px)" }} />

            {/* Quote */}
            <div style={{ display:"flex", alignItems:"flex-start", gap:14, marginBottom:"clamp(24px,3vw,36px)" }}>
              <span style={{ fontFamily:"var(--spectral)", fontSize:"clamp(2.2rem,4vw,3.5rem)", lineHeight:0.6, color:"#5B3FBF", marginTop:10, flexShrink:0 }}>"</span>
              <div>
                <p style={{ fontFamily:"var(--spectral)", fontStyle:"italic", fontSize:"clamp(1rem,1.5vw,1.2rem)", color:"#D4C4F8", lineHeight:1.65, margin:"0 0 12px" }}>
                  We're a little anxious about whether we can build something iconic. But we believe in learning along the way.
                </p>
                <span style={{ fontFamily:"var(--font-inter)", fontSize:11, fontWeight:600, letterSpacing:"0.08em", color:"#7C5CDB", textTransform:"uppercase" }}>
                  — Tushar &amp; Jatan, Founders
                </span>
              </div>
            </div>

            {/* CTA */}
            <a
              href="/about"
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
                transition:     "opacity 0.18s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.88"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
            >
              Know more
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="#1A0A3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .our-story-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
