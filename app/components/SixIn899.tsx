"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// ─── Timer: counts to 23:59:59, resets at midnight ────────────────────────────
function getTimeLeft() {
  const now = new Date();
  const end = new Date();
  end.setHours(23, 59, 59, 999);
  const diff = Math.max(0, end.getTime() - now.getTime());
  return {
    hrs:  Math.floor(diff / 3_600_000),
    mins: Math.floor((diff % 3_600_000) / 60_000),
    secs: Math.floor((diff % 60_000) / 1_000),
  };
}

// ─── Deals ────────────────────────────────────────────────────────────────────
const DEALS = [
  {
    id:       "d1",
    name:     "Morning & Night Care Kit",
    desc:     "2 Toothpaste · Mouthwash · Tongue Cleaner · 2 Toothbrush",
    price:    899,
    mrp:      1225,
    discount: 27,
    rating:   4.85,
    image:    "/product-images/whitening-combo.webp",
  },
  {
    id:       "d2",
    name:     "Bad Breath Killer Kit",
    desc:     "Mouthwash · Mouthspray · Toothpaste · 2 Toothbrush · Tongue Cleaner",
    price:    899,
    mrp:      1051,
    discount: 14,
    rating:   4.91,
    image:    "/product-images/charcoal-toothpaste.webp",
  },
  {
    id:       "d3",
    name:     "Teeth Whitening Kit",
    desc:     "Toothpaste · Mouthwash · Teeth Powder · Tongue Cleaner · 2 Toothbrush",
    price:    899,
    mrp:      1252,
    discount: 28,
    rating:   4.91,
    image:    "/product-images/purple-whitening-strips.webp",
  },
];

type Deal = (typeof DEALS)[number];

// ─── Timer box — frosted glass ─────────────────────────────────────────────────
function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          background:             "rgba(255,255,255,0.14)",
          border:                 "1px solid rgba(255,255,255,0.22)",
          backdropFilter:         "blur(14px)",
          WebkitBackdropFilter:   "blur(14px)",
          borderRadius:           12,
          width:                  50,
          height:                 50,
          display:                "flex",
          alignItems:             "center",
          justifyContent:         "center",
          fontFamily:             "var(--font-inter)",
          fontSize:               20,
          fontWeight:             800,
          color:                  "#FFFFFF",
          fontVariantNumeric:     "tabular-nums",
        }}
      >
        {String(value).padStart(2, "0")}
      </div>
      <p
        style={{
          fontFamily:    "var(--font-inter)",
          fontSize:      8,
          fontWeight:    600,
          color:         "rgba(255,255,255,0.45)",
          marginTop:     5,
          textTransform: "uppercase",
          letterSpacing: "0.14em",
        }}
      >
        {label}
      </p>
    </div>
  );
}

// ─── Card inner content (shared by mobile carousel + desktop grid) ─────────────
function CardContent({ deal }: { deal: Deal }) {
  return (
    <>
      {/* Image */}
      <div style={{ position: "relative", height: 165, background: "#F6F1FF" }}>

        {/* Discount — top left */}
        <div
          style={{
            position:     "absolute",
            top:          11,
            left:         11,
            zIndex:       2,
            background:   "#16A34A",
            borderRadius: 8,
            padding:      "4px 9px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-inter)",
              fontSize:   10,
              fontWeight: 700,
              color:      "#FFFFFF",
            }}
          >
            {deal.discount}% OFF
          </span>
        </div>

        {/* "6 in ₹899" circle — top right */}
        <div
          style={{
            position:       "absolute",
            top:            11,
            right:          11,
            zIndex:         2,
            background:     "#1A0A3D",
            borderRadius:   "50%",
            width:          50,
            height:         50,
            display:        "flex",
            flexDirection:  "column",
            alignItems:     "center",
            justifyContent: "center",
            boxShadow:      "0 2px 12px rgba(0,0,0,0.22)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-inter)",
              fontSize:   8,
              fontWeight: 700,
              color:      "rgba(255,255,255,0.7)",
              lineHeight: 1.3,
            }}
          >
            6 in
          </span>
          <span
            style={{
              fontFamily: "var(--font-inter)",
              fontSize:   10.5,
              fontWeight: 800,
              color:      "#FCD34D",
              lineHeight: 1.2,
            }}
          >
            ₹899
          </span>
        </div>

        <Image
          src={deal.image}
          alt={deal.name}
          fill
          style={{ objectFit: "contain", padding: 18 }}
        />
      </div>

      {/* Info */}
      <div style={{ padding: "13px 15px 17px" }}>

        {/* Rating pill */}
        <div
          style={{
            display:      "inline-flex",
            alignItems:   "center",
            gap:          4,
            background:   "#1A0A3D",
            borderRadius: 999,
            padding:      "3px 10px",
            marginBottom: 9,
          }}
        >
          <span style={{ fontSize: 10, color: "#FCD34D" }}>★</span>
          <span
            style={{
              fontFamily: "var(--font-inter)",
              fontSize:   11,
              fontWeight: 700,
              color:      "#FFFFFF",
            }}
          >
            {deal.rating}
          </span>
        </div>

        {/* Name */}
        <p
          style={{
            fontFamily:   "var(--font-inter)",
            fontSize:     13,
            fontWeight:   700,
            color:        "#1A0A3D",
            lineHeight:   1.3,
            marginBottom: 4,
          }}
        >
          {deal.name}
        </p>

        {/* Desc */}
        <p
          style={{
            fontFamily:   "var(--font-inter)",
            fontSize:     11,
            color:        "#9CA3AF",
            lineHeight:   1.5,
            marginBottom: 12,
          }}
        >
          {deal.desc}
        </p>

        {/* Price */}
        <div
          style={{
            display:      "flex",
            alignItems:   "center",
            gap:          7,
            marginBottom: 13,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-inter)",
              fontSize:   17,
              fontWeight: 800,
              color:      "#1A0A3D",
            }}
          >
            ₹{deal.price}
          </span>
          <span
            style={{
              fontFamily:     "var(--font-inter)",
              fontSize:       12,
              color:          "#C4C9D4",
              textDecoration: "line-through",
            }}
          >
            ₹{deal.mrp}
          </span>
        </div>

        {/* Add To Cart */}
        <button
          style={{
            width:         "100%",
            padding:       "11px",
            background:    "#1A0A3D",
            color:         "#FFFFFF",
            fontFamily:    "var(--font-inter)",
            fontSize:      13,
            fontWeight:    700,
            borderRadius:  999,
            border:        "none",
            cursor:        "pointer",
            letterSpacing: "0.02em",
          }}
        >
          Add To Cart
        </button>
      </div>
    </>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────
export default function SixIn899() {
  const [time, setTime]           = useState(getTimeLeft());
  const [activeIndex, setActiveIndex] = useState(0);
  const [showHint, setShowHint]   = useState(false);
  const scrollRef  = useRef<HTMLDivElement>(null);
  const cardRefs   = useRef<(HTMLDivElement | null)[]>([]);

  // Tick every second
  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  // Swipe hint — show once per browser session
  useEffect(() => {
    try {
      if (!localStorage.getItem("s899_hint_seen")) {
        setShowHint(true);
        const t = setTimeout(() => {
          setShowHint(false);
          localStorage.setItem("s899_hint_seen", "1");
        }, 3200);
        return () => clearTimeout(t);
      }
    } catch { /* localStorage blocked */ }
  }, []);

  // Active-card tracker
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            const idx = parseInt(
              (entry.target as HTMLElement).dataset.index ?? "0",
              10,
            );
            setActiveIndex(idx);
          }
        });
      },
      { root: container, threshold: 0.5 },
    );

    cardRefs.current.forEach((c) => { if (c) observer.observe(c); });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── Injected styles ── */}
      <style>{`
        /* Keyframes */
        @keyframes s899-blink {
          0%,100% { opacity: 1; }
          50%      { opacity: 0.25; }
        }
        @keyframes s899-swipe {
          0%,100% { transform: translateX(0);   opacity: 0.55; }
          50%     { transform: translateX(9px); opacity: 1;    }
        }

        /* Section */
        .s899-section {
          background: linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%);
          padding-top:    clamp(40px, 7vw, 64px);
          padding-bottom: clamp(40px, 7vw, 64px);
          overflow: hidden;
        }

        /* ── Mobile layout (default) ── */
        .s899-inner  { padding: 0; }
        .s899-header { padding: 0 24px; margin-bottom: 32px; }

        /* Cards */
        .s899-card {
          background:    rgba(255,255,255,0.97);
          border-radius: 24px;
          overflow:      hidden;
          transition:    transform 0.32s ease, box-shadow 0.32s ease,
                         filter 0.32s ease, opacity 0.32s ease;
          will-change:   transform, opacity, filter;
        }
        .s899-card--inactive {
          filter:     blur(1.6px);
          opacity:    0.48;
          transform:  scale(0.95);
          box-shadow: 0 4px 18px rgba(0,0,0,0.12);
        }
        .s899-card--active {
          filter:     none;
          opacity:    1;
          transform:  scale(1.02);
          box-shadow: 0 0 0 2px rgba(255,255,255,0.38),
                      0 20px 60px rgba(0,0,0,0.26);
        }

        /* Mobile snap carousel */
        .s899-carousel {
          display:                  flex;
          gap:                      14px;
          overflow-x:               auto;
          scroll-snap-type:         x mandatory;
          -webkit-overflow-scrolling: touch;
          padding-left:   clamp(16px, 11vw, 64px);
          padding-right:  clamp(16px, 11vw, 64px);
          padding-bottom: 8px;
          margin-bottom:  20px;
          scrollbar-width: none;
        }
        .s899-carousel::-webkit-scrollbar { display: none; }

        .s899-card-wrap {
          flex-shrink:      0;
          width:            clamp(240px, 78vw, 290px);
          scroll-snap-align: center;
        }

        /* Pagination dots */
        .s899-dots {
          display:         flex;
          gap:             6px;
          justify-content: center;
          margin-bottom:   24px;
        }
        .s899-dot {
          height:        6px;
          border-radius: 999px;
          transition:    width 0.3s ease, background 0.3s ease;
        }
        .s899-dot--active  { width: 20px; background: rgba(255,255,255,0.92); }
        .s899-dot--inactive { width: 6px;  background: rgba(255,255,255,0.28); }

        /* Swipe hint */
        .s899-hint {
          display:         flex;
          align-items:     center;
          justify-content: center;
          gap:             8px;
          margin-bottom:   14px;
          opacity:         0;
          transition:      opacity 0.4s ease;
          pointer-events:  none;
        }
        .s899-hint--show { opacity: 1; }
        .s899-hint-arrow {
          display:        inline-block;
          animation:      s899-swipe 1.1s ease-in-out infinite;
          color:          rgba(255,255,255,0.75);
          font-size:      15px;
        }

        /* CTA wrapper */
        .s899-cta-wrap { text-align: center; padding: 0 24px; }

        /* Desktop grid (hidden on mobile) */
        .s899-cards-desktop { display: none; }

        /* ── Desktop (≥ 768px) ── */
        @media (min-width: 768px) {
          .s899-inner {
            display:               grid;
            grid-template-columns: 300px 1fr;
            gap:                   60px;
            align-items:           center;
            padding:               0 clamp(48px, 7vw, 96px);
            max-width:             1280px;
            margin:                0 auto;
          }
          .s899-header { padding: 0; margin-bottom: 0; }

          /* Hide mobile-only elements */
          .s899-carousel { display: none; }
          .s899-dots     { display: none; }
          .s899-hint     { display: none; }

          /* Show desktop grid */
          .s899-cards-desktop {
            display:               grid;
            grid-template-columns: repeat(3, 1fr);
            gap:                   20px;
          }

          /* Reset mobile blur on desktop */
          .s899-card--active,
          .s899-card--inactive {
            filter:     none;
            opacity:    1;
            transform:  none;
            box-shadow: 0 8px 32px rgba(0,0,0,0.11);
          }
          /* Desktop hover lift */
          .s899-card:hover {
            transform:  translateY(-6px) !important;
            box-shadow: 0 18px 50px rgba(0,0,0,0.2) !important;
          }

          .s899-cta-wrap { text-align: left; padding: 0; margin-top: 20px; }
        }
      `}</style>

      <section className="s899-section">
        <div className="s899-inner">

          {/* ── Left / Top: Heading + Countdown ── */}
          <div className="s899-header">

            {/* Eyebrow pill */}
            <div
              style={{
                display:      "inline-flex",
                alignItems:   "center",
                gap:          7,
                background:   "rgba(255,255,255,0.12)",
                border:       "1px solid rgba(255,255,255,0.2)",
                borderRadius: 999,
                padding:      "5px 14px",
                marginBottom: 18,
              }}
            >
              <span
                style={{
                  fontSize:  7,
                  color:     "#FCD34D",
                  animation: "s899-blink 1.6s ease-in-out infinite",
                }}
              >
                ●
              </span>
              <span
                style={{
                  fontFamily:    "var(--font-inter)",
                  fontSize:      9.5,
                  fontWeight:    700,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color:         "rgba(255,255,255,0.88)",
                }}
              >
                Limited Time Deal
              </span>
            </div>

            {/* Headline */}
            <h2
              style={{
                fontFamily: "var(--spectral), Georgia, serif",
                fontSize:   "clamp(2.8rem, 11vw, 3.8rem)",
                fontWeight: 700,
                lineHeight: 0.9,
                color:      "#FFFFFF",
                margin:     "0 0 28px",
              }}
            >
              6{" "}
              <em
                style={{
                  fontStyle:  "italic",
                  fontWeight: 400,
                  color:      "rgba(255,255,255,0.65)",
                }}
              >
                Products
              </em>
              <br />
              <span style={{ color: "#FCD34D" }}>in ₹899</span>
            </h2>

            {/* Countdown label */}
            <p
              style={{
                fontFamily:   "var(--font-inter)",
                fontSize:     11,
                fontWeight:   500,
                color:        "rgba(255,255,255,0.45)",
                marginBottom: 10,
                letterSpacing:"0.01em",
              }}
            >
              Deal resets at midnight
            </p>

            {/* Timer */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: 6 }}>
              <TimeBox value={time.hrs}  label="HRS" />
              <span
                style={{
                  color:      "rgba(255,255,255,0.3)",
                  fontSize:   22,
                  fontWeight: 700,
                  paddingTop: 9,
                  lineHeight: 1,
                }}
              >
                :
              </span>
              <TimeBox value={time.mins} label="MIN" />
              <span
                style={{
                  color:      "rgba(255,255,255,0.3)",
                  fontSize:   22,
                  fontWeight: 700,
                  paddingTop: 9,
                  lineHeight: 1,
                }}
              >
                :
              </span>
              <TimeBox value={time.secs} label="SEC" />
            </div>
          </div>

          {/* ── Right / Below: Cards + CTA ── */}
          <div>

            {/* Swipe hint (mobile, first visit) */}
            <div className={`s899-hint${showHint ? " s899-hint--show" : ""}`}>
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize:   11,
                  fontWeight: 500,
                  color:      "rgba(255,255,255,0.65)",
                }}
              >
                Swipe to explore deals
              </span>
              <span className="s899-hint-arrow">→</span>
            </div>

            {/* ── Mobile: snap carousel ── */}
            <div ref={scrollRef} className="s899-carousel">
              {DEALS.map((deal, i) => (
                <div key={deal.id} className="s899-card-wrap">
                  <div
                    ref={(el) => { cardRefs.current[i] = el; }}
                    data-index={i}
                    className={`s899-card ${
                      activeIndex === i ? "s899-card--active" : "s899-card--inactive"
                    }`}
                  >
                    <CardContent deal={deal} />
                  </div>
                </div>
              ))}
            </div>

            {/* ── Desktop: 3-column grid ── */}
            <div className="s899-cards-desktop">
              {DEALS.map((deal) => (
                <div key={deal.id} className="s899-card">
                  <CardContent deal={deal} />
                </div>
              ))}
            </div>

            {/* Pagination dots (mobile only) */}
            <div className="s899-dots">
              {DEALS.map((_, i) => (
                <div
                  key={i}
                  className={`s899-dot ${
                    activeIndex === i ? "s899-dot--active" : "s899-dot--inactive"
                  }`}
                />
              ))}
            </div>

            {/* View All Offers */}
            <div className="s899-cta-wrap">
              <a
                href="https://perforacare.com/collections/6-in-899"
                style={{
                  display:              "inline-flex",
                  alignItems:           "center",
                  gap:                  7,
                  padding:              "13px 38px",
                  border:               "1.5px solid rgba(255,255,255,0.26)",
                  borderRadius:         999,
                  background:           "rgba(255,255,255,0.09)",
                  backdropFilter:       "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  fontFamily:           "var(--font-inter)",
                  fontSize:             13,
                  fontWeight:           600,
                  color:                "#FFFFFF",
                  textDecoration:       "none",
                  letterSpacing:        "0.01em",
                }}
              >
                View All Offers →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
