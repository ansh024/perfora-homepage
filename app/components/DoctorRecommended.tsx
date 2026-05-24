"use client";

import Image from "next/image";
import React from "react";

// ─── Trust stats ───────────────────────────────────────────────────────────────
const STATS = [
  { value: "10+",     label: "Dentists trust Perfora", animate: true },
  { value: "4.8 ★",   label: "Average clinical rating"      },
  { value: "98%",     label: "Would recommend to patients"  },
];

// ─── Section ───────────────────────────────────────────────────────────────────
export default function DoctorRecommended() {
  const [dentistCount, setDentistCount] = React.useState(1);

  React.useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      const frameId = requestAnimationFrame(() => setDentistCount(10));
      return () => cancelAnimationFrame(frameId);
    }

    let frameId = 0;
    const duration = 1100;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setDentistCount(Math.round(1 + eased * 9));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <section
      style={{
        background:   "#FFFFFF",
        borderTop:    "1px solid #F0EDFC",
        borderBottom: "1px solid #F0EDFC",
        overflow:     "hidden",
      }}
    >
      <div
        className="flex flex-col md:flex-row"
        style={{
          maxWidth:   1280,
          margin:     "0 auto",
          alignItems: "stretch",
          minHeight:  350,
        }}
      >
        {/* ── Left: Doctor visual panel ── */}
        <div
          className="w-full md:flex-shrink-0 h-[320px] md:h-auto md:w-[504px]"
          style={{
            position:   "relative",
            overflow:   "hidden",
            background: "#EDE9FB",
          }}
        >
          <Image
            src="/dentist-photo.jpg"
            alt="Dentist with smiling patient in clinic"
            fill
            sizes="(min-width: 768px) 504px, 100vw"
            loading="lazy"
            style={{
              objectFit:      "cover",
              objectPosition: "center 38%",
            }}
          />

          {/* Soft top blush — palette warmth, clears face area */}
          <div
            style={{
              position:      "absolute",
              inset:         0,
              background:    "linear-gradient(to bottom, rgba(155,127,212,0.18) 0%, transparent 55%)",
              pointerEvents: "none",
            }}
          />

          {/* Bottom anchor — prevents hard cutoff at panel edge */}
          <div
            style={{
              position:      "absolute",
              inset:         0,
              background:    "linear-gradient(to top, rgba(61,31,143,0.20) 0%, transparent 40%)",
              pointerEvents: "none",
            }}
          />

          {/* Verified badge — flush left edge tab */}
          <div
            style={{
              position:     "absolute",
              top:          22,
              left:         0,
              background:   "#FFFFFF",
              borderRadius: "0 8px 8px 0",
              padding:      "8px 14px 8px 16px",
              display:      "flex",
              alignItems:   "center",
              gap:          8,
              boxShadow:    "0 2px 12px rgba(61,31,143,0.13)",
            }}
          >
            <div
              style={{
                width:          20,
                height:         20,
                borderRadius:   "50%",
                background:     "#DCFCE7",
                display:        "flex",
                alignItems:     "center",
                justifyContent: "center",
                flexShrink:     0,
              }}
            >
              <svg width="11" height="9" viewBox="0 0 10 8" fill="none">
                <path d="M1 4L3.5 6.5L9 1" stroke="#15803D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span
              style={{
                fontFamily:    "var(--font-inter)",
                fontSize:      11,
                fontWeight:    700,
                color:         "#3D1F8F",
                letterSpacing: "0.07em",
                textTransform: "uppercase",
              }}
            >
              Clinically Verified
            </span>
          </div>
        </div>

        {/* ── Right: Content ── */}
        <div
          style={{
            flex:           1,
            paddingLeft:    "clamp(24px, 4vw, 56px)",
            paddingRight:   "clamp(20px, 4vw, 48px)",
            paddingTop:     "clamp(28px, 3.5vw, 44px)",
            paddingBottom:  "clamp(28px, 3.5vw, 44px)",
            display:        "flex",
            flexDirection:  "column",
            justifyContent: "center",
          }}
        >
          {/* Eyebrow */}
          <p
            style={{
              fontFamily:    "var(--font-inter)",
              fontSize:      10,
              fontWeight:    600,
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color:         "#9B7FD4",
              marginBottom:  12,
            }}
          >
            Dentist Recommended
          </p>

          {/* Heading */}
          <h2
            className="font-display"
            style={{
              fontWeight:    700,
              fontSize:      "clamp(1.5rem, 2.6vw, 2.1rem)",
              lineHeight:    1.12,
              color:         "#1A0A3D",
              letterSpacing: "-0.015em",
              marginBottom:  14,
            }}
          >
            Clinically proven.{" "}
            <em style={{ fontStyle: "italic", color: "#6B4FB3" }}>
              Professionally trusted.
            </em>
          </h2>

          {/* Pull quote */}
          <blockquote
            style={{
              margin:      "0 0 18px",
              paddingLeft: 14,
              borderLeft:  "3px solid #C4BDE8",
              fontFamily:  "var(--font-inter)",
              fontSize:    "clamp(13px, 1.05vw, 14px)",
              color:       "#6B5A8A",
              lineHeight:  1.68,
              fontStyle:   "italic",
              maxWidth:    "54ch",
            }}
          >
            &ldquo;Perfora&rsquo;s sonic technology delivers genuine clinical results &mdash; the
            kind I&rsquo;d confidently recommend to every patient at our clinic.&rdquo;
          </blockquote>

          {/* Doctor attribution */}
          <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 20 }}>
            <div
              style={{
                width:          34,
                height:         34,
                borderRadius:   "50%",
                background:     "linear-gradient(135deg, #3D1F8F 0%, #9B7FD4 100%)",
                display:        "flex",
                alignItems:     "center",
                justifyContent: "center",
                flexShrink:     0,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize:   12,
                  fontWeight: 700,
                  color:      "#FFFFFF",
                }}
              >
                PS
              </span>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize:   13,
                  fontWeight: 600,
                  color:      "#1A0A3D",
                  lineHeight: 1.3,
                }}
              >
                Dr. Priya Sharma, BDS
              </p>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize:   11,
                  color:      "#8B7AAA",
                  lineHeight: 1.35,
                }}
              >
                Cosmetic Dentist · AIIMS Graduate · 12 Years Experience
              </p>
            </div>
          </div>

          {/* Stats row */}
          <div
            style={{
              display:    "flex",
              gap:        "clamp(20px, 3.5vw, 40px)",
              flexWrap:   "wrap",
              paddingTop: 16,
              borderTop:  "1px solid #F0EDFC",
            }}
          >
            {STATS.map(s => (
              <div key={s.value}>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize:   "clamp(17px, 1.8vw, 21px)",
                    fontWeight: 700,
                    color:      "#3D1F8F",
                    lineHeight: 1,
                  }}
                >
                  {s.animate ? `${dentistCount}+` : s.value}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize:   10.5,
                    color:      "#9B8FBB",
                    lineHeight: 1.45,
                    marginTop:  4,
                    maxWidth:   "15ch",
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
