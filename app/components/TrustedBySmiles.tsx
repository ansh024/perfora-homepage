"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  animate,
} from "framer-motion";
import type { PanInfo } from "framer-motion";

// ─── Layout constants ──────────────────────────────────────────────────────────
const CARD_W   = 286;
const CARD_GAP = 16;
const STEP     = CARD_W + CARD_GAP;

// ─── Reviews ──────────────────────────────────────────────────────────────────
interface Review {
  id: string; initials: string; gradient: string; name: string;
  city: string; ago: string; rating: number; product: string; quote: string;
  photo: string;
}

const REVIEWS: Review[] = [
  {
    id:       "r1",
    initials: "PA",
    gradient: "linear-gradient(135deg, #3D1F8F 0%, #9B7FD4 100%)",
    photo:    "https://randomuser.me/api/portraits/women/44.jpg",
    name:     "Priya A.",
    city:     "Mumbai",
    ago:      "2 weeks ago",
    rating:   5,
    product:  "Electric Toothbrush",
    quote:    "My dentist actually commented on how clean my teeth were at my last check-up. She asked what changed — I told her I switched to Perfora. Worth every rupee.",
  },
  {
    id:       "r2",
    initials: "RK",
    gradient: "linear-gradient(135deg, #6240B0 0%, #C4B0F0 100%)",
    photo:    "https://randomuser.me/api/portraits/men/32.jpg",
    name:     "Rohan K.",
    city:     "Bangalore",
    ago:      "1 month ago",
    rating:   5,
    product:  "Whitening Strips",
    quote:    "I was skeptical about at-home whitening but the results after 7 days genuinely surprised me. No sensitivity at all and my smile looks noticeably brighter in photos.",
  },
  {
    id:       "r3",
    initials: "SA",
    gradient: "linear-gradient(135deg, #1A0A3D 0%, #6B4FB3 100%)",
    photo:    "https://randomuser.me/api/portraits/women/65.jpg",
    name:     "Sneha A.",
    city:     "Delhi",
    ago:      "3 weeks ago",
    rating:   5,
    product:  "Power Flosser",
    quote:    "The power flosser transformed my routine. My gums stopped bleeding within the first week. It's the one product I recommend to literally everyone I know.",
  },
  {
    id:       "r4",
    initials: "AM",
    gradient: "linear-gradient(135deg, #4C2E96 0%, #B09FD8 100%)",
    photo:    "https://randomuser.me/api/portraits/men/46.jpg",
    name:     "Arjun M.",
    city:     "Pune",
    ago:      "5 days ago",
    rating:   5,
    product:  "Charcoal Toothpaste",
    quote:    "Switched to the charcoal toothpaste two months ago. My teeth feel cleaner after each brush and the Watermelon Mint flavour makes me actually look forward to brushing.",
  },
  {
    id:       "r5",
    initials: "NK",
    gradient: "linear-gradient(135deg, #3D1F8F 0%, #7B5FBF 100%)",
    photo:    "https://randomuser.me/api/portraits/women/47.jpg",
    name:     "Nisha K.",
    city:     "Hyderabad",
    ago:      "2 months ago",
    rating:   5,
    product:  "Whitening Combo",
    quote:    "Bought the whitening combo before a wedding and results were visible in under 10 days. Received so many compliments on my smile. Genuinely obsessed with this brand.",
  },
  {
    id:       "r6",
    initials: "VR",
    gradient: "linear-gradient(135deg, #2D1570 0%, #9B7FD4 100%)",
    photo:    "https://randomuser.me/api/portraits/men/68.jpg",
    name:     "Vivek R.",
    city:     "Chennai",
    ago:      "6 weeks ago",
    rating:   5,
    product:  "Whitening Serum",
    quote:    "Tried multiple whitening serums and nothing lasted. Perfora's formula is genuinely different — it works, my teeth haven't felt sensitive once. Found my forever product.",
  },
];

// ─── Nav arrow ─────────────────────────────────────────────────────────────────
function NavArrow({
  direction,
  onClick,
  disabled,
}: {
  direction: "left" | "right";
  onClick:   () => void;
  disabled:  boolean;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={disabled ? {} : { backgroundColor: "#3D1F8F", borderColor: "#3D1F8F", color: "#FFFFFF" }}
      whileTap={disabled ? {} : { scale: 0.94 }}
      transition={{ duration: 0.18 }}
      disabled={disabled}
      style={{
        width:          44,
        height:         44,
        borderRadius:   "50%",
        border:         "1.5px solid #C4BDE8",
        background:     "white",
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
        cursor:         disabled ? "default" : "pointer",
        color:          "#3D1F8F",
        opacity:        disabled ? 0.35 : 1,
        flexShrink:     0,
      }}
    >
      {direction === "left" ? (
        <svg width="9" height="15" viewBox="0 0 9 15" fill="none">
          <path d="M7.5 1.5L2 7.5L7.5 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg width="9" height="15" viewBox="0 0 9 15" fill="none">
          <path d="M1.5 1.5L7 7.5L1.5 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </motion.button>
  );
}

// ─── Review card ───────────────────────────────────────────────────────────────
function ReviewCard({ review }: { review: Review }) {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 20px 48px rgba(61,31,143,0.12)" }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      style={{
        width:         CARD_W,
        flexShrink:    0,
        background:    "#FFFFFF",
        borderRadius:  20,
        padding:       "20px 20px 18px",
        boxShadow:     "0 2px 16px rgba(61,31,143,0.07)",
        display:       "flex",
        flexDirection: "column",
        gap:           12,
        cursor:        "default",
        userSelect:    "none",
        border:        "1px solid rgba(196,189,232,0.35)",
      }}
    >
      {/* ── User photo + name at top ── */}
      <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
        <img
          src={review.photo}
          alt={review.name}
          width={46}
          height={46}
          style={{
            width:        46,
            height:       46,
            borderRadius: "50%",
            objectFit:    "cover",
            flexShrink:   0,
            border:       "2px solid #EDE9FB",
            display:      "block",
          }}
        />
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: 13, fontWeight: 600, color: "#1A0A3D", lineHeight: 1.3 }}>
            {review.name}
          </p>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: 11, color: "#232323", lineHeight: 1.3 }}>
            {review.city}
          </p>
        </div>
        {/* Verified badge */}
        <div
          style={{
            display:      "inline-flex",
            alignItems:   "center",
            gap:          4,
            padding:      "3px 8px",
            borderRadius: 20,
            background:   "#F0ECFF",
            flexShrink:   0,
          }}
        >
          <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
            <circle cx="4.5" cy="4.5" r="4.5" fill="#6B4FB3" />
            <path d="M2.5 4.5L4 6L6.5 3" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ fontFamily: "var(--font-inter)", fontSize: 9.5, fontWeight: 600, color: "#6B4FB3", letterSpacing: "0.02em" }}>
            Verified
          </span>
        </div>
      </div>

      {/* Stars */}
      <div style={{ display: "flex", gap: 3 }}>
        {Array.from({ length: review.rating }).map((_, i) => (
          <span key={i} style={{ color: "#F5A623", fontSize: 13, lineHeight: 1 }}>★</span>
        ))}
      </div>

      {/* Quote */}
      <p
        style={{
          fontFamily:      "var(--font-inter)",
          fontSize:        13.5,
          color:           "#2D1A5C",
          lineHeight:      1.65,
          flex:            1,
          display:         "-webkit-box",
          WebkitLineClamp: 4,
          WebkitBoxOrient: "vertical",
          overflow:        "hidden",
        }}
      >
        &ldquo;{review.quote}&rdquo;
      </p>

      {/* Footer: product tag + date */}
      <div
        style={{
          display:        "flex",
          alignItems:     "center",
          justifyContent: "space-between",
          paddingTop:     10,
          borderTop:      "1px solid #F0ECFF",
          marginTop:      "auto",
        }}
      >
        <div
          style={{
            display:       "inline-flex",
            padding:       "4px 10px",
            borderRadius:  20,
            background:    "#F0ECFF",
            fontFamily:    "var(--font-inter)",
            fontSize:      10.5,
            fontWeight:    600,
            color:         "#6B4FB3",
            letterSpacing: "0.02em",
          }}
        >
          {review.product}
        </div>
        <span style={{ fontFamily: "var(--font-inter)", fontSize: 11, color: "#C4BDE8", flexShrink: 0 }}>
          {review.ago}
        </span>
      </div>
    </motion.div>
  );
}

// ─── Section ───────────────────────────────────────────────────────────────────
export default function TrustedBySmiles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef     = useRef<HTMLDivElement>(null);
  const mobileRef    = useRef<HTMLDivElement>(null);

  const x            = useMotionValue(0);
  const [dragLeft,  setDragLeft]  = useState(0);
  const [activeIdx, setActiveIdx] = useState(0);
  const [progress,  setProgress]  = useState(0);
  const [mobileIdx, setMobileIdx] = useState(0);

  useEffect(() => {
    const update = () => {
      const c = containerRef.current;
      const t = trackRef.current;
      if (!c || !t) return;
      setDragLeft(Math.max(0, t.scrollWidth - c.clientWidth));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useMotionValueEvent(x, "change", (xVal) => {
    if (dragLeft <= 0) return;
    setProgress(Math.max(0, Math.min(100, (-xVal / dragLeft) * 100)));
    setActiveIdx(
      Math.max(0, Math.min(REVIEWS.length - 1, Math.round(-xVal / STEP)))
    );
  });

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      e.preventDefault();
      const delta = Math.abs(e.deltaX) >= Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      x.set(Math.max(-dragLeft, Math.min(0, x.get() - delta)));
    },
    [x, dragLeft]
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [handleWheel]);

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const vx  = info.velocity.x;
    const raw = -x.get() / STEP;
    let target = Math.abs(vx) > 200
      ? vx < 0 ? Math.ceil(raw) : Math.floor(raw)
      : Math.round(raw);
    target = Math.max(0, Math.min(REVIEWS.length - 1, target));
    animate(x, -target * STEP, { type: "spring", stiffness: 300, damping: 35, mass: 0.8 });
  };

  const goTo = (idx: number) => {
    const target = Math.max(0, Math.min(REVIEWS.length - 1, idx));
    animate(x, -target * STEP, { type: "spring", stiffness: 300, damping: 35 });
  };

  const handleMobileScroll = () => {
    const el = mobileRef.current;
    if (!el || !el.firstElementChild) return;
    const step = (el.firstElementChild as HTMLElement).offsetWidth + CARD_GAP;
    setMobileIdx(Math.max(0, Math.min(REVIEWS.length - 1, Math.round(el.scrollLeft / step))));
  };

  return (
    <section
      style={{
        background:    "#FFFFFF",
        paddingTop:    "clamp(38px, 3.6vw, 54px)",
        paddingBottom: "clamp(38px, 3.6vw, 54px)",
        borderTop:     "1px solid #F0EDFC",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* ══ DESKTOP ═══════════════════════════════════════════════════════════ */}
        <div className="hidden md:flex" style={{ alignItems: "stretch" }}>

          {/* ── Left panel ── */}
          <div
            style={{
              flexShrink:     0,
              width:          "clamp(260px, 26vw, 320px)",
              paddingLeft:    "clamp(20px, 4vw, 48px)",
              paddingRight:   "clamp(16px, 2.5vw, 32px)",
              display:        "flex",
              flexDirection:  "column",
              justifyContent: "center",
              gap:            20,
              position:       "relative",
            }}
          >
            {/* Background quotation mark */}
            <div
              aria-hidden
              style={{
                position:      "absolute",
                top:           -8,
                left:          "clamp(14px, 3.5vw, 38px)",
                fontFamily:    "var(--font-display)",
                fontSize:      "clamp(100px, 14vw, 160px)",
                lineHeight:    1,
                color:         "rgba(155,127,212,0.10)",
                fontStyle:     "italic",
                fontWeight:    700,
                pointerEvents: "none",
                userSelect:    "none",
                zIndex:        0,
              }}
            >
              &ldquo;
            </div>

            <div style={{ position: "relative", zIndex: 1 }}>
              <p
                style={{
                  fontFamily:    "var(--font-inter)",
                  fontSize:      10.5,
                  fontWeight:    700,
                  letterSpacing: "0.26em",
                  textTransform: "uppercase",
                  color:         "#9B7FD4",
                  marginBottom:  12,
                }}
              >
                Real Customer Stories
              </p>

              <h2
                className="font-display"
                style={{
                  fontWeight:    700,
                  fontSize:      "clamp(1.9rem, 2.8vw, 2.6rem)",
                  lineHeight:    1.08,
                  color:         "#1A0A3D",
                  letterSpacing: "-0.02em",
                  marginBottom:  14,
                }}
              >
                Trusted by
                <br />
                <em style={{ fontStyle: "italic", color: "#6B4FB3" }}>
                  thousands of smiles.
                </em>
              </h2>

              <p
                style={{
                  fontFamily:   "var(--font-inter)",
                  fontSize:     "clamp(13px, 1.05vw, 14.5px)",
                  color:        "#232323",
                  lineHeight:   1.65,
                  maxWidth:     "26ch",
                  marginBottom: 20,
                }}
              >
                Real people. Real routines. Real visible results.
              </p>

              {/* Aggregate rating */}
              <div
                style={{
                  display:       "flex",
                  flexDirection: "column",
                  gap:           5,
                  paddingTop:    16,
                  borderTop:     "1px solid #EDE9FB",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} style={{ color: "#F5A623", fontSize: 16, lineHeight: 1 }}>★</span>
                  ))}
                  <span style={{ fontFamily: "var(--font-inter)", fontSize: 15, fontWeight: 700, color: "#1A0A3D", marginLeft: 2 }}>
                    4.8<span style={{ fontSize: 12, color: "#232323", fontWeight: 500 }}>/5</span>
                  </span>
                </div>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: 11.5, color: "#232323" }}>
                  Based on 12,000+ verified reviews
                </p>
              </div>
            </div>

            {/* Arrow nav */}
            <div style={{ display: "flex", gap: 10 }}>
              <NavArrow direction="left"  onClick={() => goTo(activeIdx - 1)} disabled={activeIdx === 0} />
              <NavArrow direction="right" onClick={() => goTo(activeIdx + 1)} disabled={activeIdx >= REVIEWS.length - 1} />
            </div>
          </div>

          {/* ── Right: draggable carousel ── */}
          <div
            ref={containerRef}
            style={{
              flex:          1,
              overflow:      "hidden",
              position:      "relative",
              paddingTop:    8,
              paddingBottom: 8,
            }}
          >
            {/* Left edge fade */}
            <motion.div
              animate={{ opacity: progress > 3 ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              style={{
                position:      "absolute",
                left:          0,
                top:           0,
                bottom:        0,
                width:         56,
                background:    "linear-gradient(to right, #FFFFFF 0%, transparent 100%)",
                pointerEvents: "none",
                zIndex:        3,
              }}
            />
            {/* Right edge fade */}
            <div
              style={{
                position:      "absolute",
                right:         0,
                top:           0,
                bottom:        0,
                width:         88,
                background:    "linear-gradient(to left, #FFFFFF 10%, transparent 100%)",
                pointerEvents: "none",
                zIndex:        3,
              }}
            />

            {/* Draggable track */}
            <motion.div
              ref={trackRef}
              drag="x"
              dragConstraints={{ left: dragLeft > 0 ? -dragLeft : 0, right: 0 }}
              dragElastic={0.04}
              dragMomentum={false}
              onDragEnd={handleDragEnd}
              style={{
                x,
                display:      "flex",
                gap:          CARD_GAP,
                paddingLeft:  4,
                paddingRight: "clamp(20px, 4vw, 48px)",
                cursor:       "grab",
              }}
              whileDrag={{ cursor: "grabbing" }}
            >
              {REVIEWS.map(r => (
                <ReviewCard key={r.id} review={r} />
              ))}
            </motion.div>
          </div>
        </div>

        {/* ── Progress bar (desktop) ── */}
        <div
          className="hidden md:flex"
          style={{
            alignItems:   "center",
            gap:          16,
            marginTop:    20,
            paddingLeft:  "clamp(20px, 4vw, 48px)",
            paddingRight: "clamp(20px, 4vw, 48px)",
          }}
        >
          <span
            style={{
              fontFamily:         "var(--font-inter)",
              fontSize:           11.5,
              color:              "#232323",
              flexShrink:         0,
              minWidth:           42,
              letterSpacing:      "0.06em",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {String(activeIdx + 1).padStart(2, "0")} / {String(REVIEWS.length).padStart(2, "0")}
          </span>
          <div
            style={{
              flex:         1,
              height:       2,
              background:   "#DDD6F8",
              borderRadius: 2,
              overflow:     "hidden",
            }}
          >
            <motion.div
              animate={{ width: `${Math.max(3, progress)}%` }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              style={{
                height:       "100%",
                background:   "linear-gradient(to right, #9B7FD4, #3D1F8F)",
                borderRadius: 2,
              }}
            />
          </div>
        </div>

        {/* ══ MOBILE ════════════════════════════════════════════════════════════ */}
        <div className="md:hidden">
          <div
            style={{
              paddingLeft:  "clamp(20px, 5vw, 40px)",
              paddingRight: "clamp(20px, 5vw, 40px)",
              marginBottom: 20,
            }}
          >
            <p
              style={{
                fontFamily:    "var(--font-inter)",
                fontSize:      10,
                fontWeight:    700,
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color:         "#9B7FD4",
                marginBottom:  10,
              }}
            >
              Real Customer Stories
            </p>
            <h2
              className="font-display"
              style={{
                fontWeight:    700,
                fontSize:      "clamp(1.75rem, 6vw, 2.4rem)",
                lineHeight:    1.08,
                color:         "#1A0A3D",
                letterSpacing: "-0.02em",
                marginBottom:  10,
              }}
            >
              Trusted by{" "}
              <em style={{ fontStyle: "italic", color: "#6B4FB3" }}>
                thousands of smiles.
              </em>
            </h2>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 8 }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} style={{ color: "#F5A623", fontSize: 14, lineHeight: 1 }}>★</span>
              ))}
              <span style={{ fontFamily: "var(--font-inter)", fontSize: 13, fontWeight: 600, color: "#1A0A3D" }}>
                4.8/5
              </span>
              <span style={{ fontFamily: "var(--font-inter)", fontSize: 11.5, color: "#232323" }}>
                · 12,000+ reviews
              </span>
            </div>
          </div>

          {/* Swipe carousel */}
          <div
            ref={mobileRef}
            className="no-scrollbar"
            onScroll={handleMobileScroll}
            style={{
              overflowX:               "auto",
              WebkitOverflowScrolling: "touch",
              scrollSnapType:          "x mandatory",
              display:                 "flex",
              gap:                     CARD_GAP,
              marginLeft:              "12px",
              paddingLeft:             0,
              paddingRight:            "clamp(20px, 5vw, 40px)",
              paddingBottom:           8,
            }}
          >
            {REVIEWS.map(r => (
              <div
                key={r.id}
                style={{ flexShrink: 0, width: "min(82vw, 286px)", scrollSnapAlign: "start" }}
              >
                <ReviewCard review={r} />
              </div>
            ))}
          </div>

          {/* Pill-dot indicator */}
          <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 16 }}>
            {REVIEWS.map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  width:      i === mobileIdx ? 22 : 6,
                  background: i === mobileIdx ? "#3D1F8F" : "#C4BDE8",
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{ height: 6, borderRadius: 3 }}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
