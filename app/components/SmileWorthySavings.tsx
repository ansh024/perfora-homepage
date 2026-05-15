"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  animate,
  AnimatePresence,
} from "framer-motion";
import type { PanInfo } from "framer-motion";

// ─── Layout constants ──────────────────────────────────────────────────────────
const CARD_W   = 258;
const CARD_GAP = 16;
const STEP     = CARD_W + CARD_GAP;

// ─── Types ─────────────────────────────────────────────────────────────────────
interface ColorVariant { label: string; hex: string }
interface Product {
  id:            string;
  image:         string;
  badge?:        { text: string; bg: string };
  name:          string;
  subtitle:      string;
  rating:        number;
  reviewCount:   string;
  price:         number;
  originalPrice: number;
  colors?:       ColorVariant[];
  options?:      string[];
}

// ─── Product data ──────────────────────────────────────────────────────────────
const PRODUCTS: Product[] = [
  {
    id:            "electric-toothbrush",
    image:         "/product-images/electric-toothbrush.webp",
    badge:         { text: "Best Seller", bg: "#1A0A3D" },
    name:          "Truth Brush Electric Toothbrush",
    subtitle:      "Sonic Technology · 3 Modes · 2-min Timer",
    rating:        4.7,
    reviewCount:   "12K+",
    price:         1399,
    originalPrice: 1699,
    colors: [
      { label: "Charcoal Grey", hex: "#3A3A3A" },
      { label: "Pearl White",   hex: "#EDE9FB" },
      { label: "Muted Lilac",   hex: "#9B7FD4" },
    ],
  },
  {
    id:            "whitening-serum",
    image:         "/product-images/whitening-serum.webp",
    badge:         { text: "New Launch", bg: "#3D1F8F" },
    name:          "Purple Magic Whitening Serum",
    subtitle:      "30ml × 3 · Enamel Safe · No Sensitivity",
    rating:        4.6,
    reviewCount:   "3K+",
    price:         1797,
    originalPrice: 2097,
    options: ["Pack of 1", "Pack of 2", "Pack of 3"],
  },
  {
    id:            "charcoal-toothpaste",
    image:         "/product-images/charcoal-toothpaste.webp",
    badge:         { text: "Value Pick", bg: "#166534" },
    name:          "Activated Charcoal Toothpaste",
    subtitle:      "100g × 2 · Deep Cleanse · SLS Free",
    rating:        4.4,
    reviewCount:   "8K+",
    price:         598,
    originalPrice: 698,
    options: ["Pack of 2", "Pack of 4", "Pack of 6"],
  },
  {
    id:            "whitening-combo",
    image:         "/product-images/whitening-combo.webp",
    badge:         { text: "17% Off", bg: "#B91C1C" },
    name:          "Teeth Whitening Essentials Combo",
    subtitle:      "Strips + Serum + Toothpaste Bundle",
    rating:        4.8,
    reviewCount:   "2K+",
    price:         2499,
    originalPrice: 2999,
    options: ["Starter Kit", "Pro Kit"],
  },
  {
    id:            "power-flosser",
    image:         "/product-images/power-flosser.webp",
    name:          "Power Flosser Sterling Grey",
    subtitle:      "Water Flosser · 3 Pressure Modes",
    rating:        4.6,
    reviewCount:   "5K+",
    price:         2499,
    originalPrice: 2999,
    colors: [
      { label: "Sterling Grey", hex: "#9BA3B2" },
      { label: "Pearl White",   hex: "#EDE9FB" },
    ],
  },
  {
    id:            "whitening-strips-pro",
    image:         "/product-images/whitening-strips-pro.webp",
    badge:         { text: "Free Serum", bg: "#6D28D9" },
    name:          "PRO+ Whitening Strips",
    subtitle:      "14-Day Treatment · Includes Free Serum",
    rating:        4.5,
    reviewCount:   "4K+",
    price:         1299,
    originalPrice: 1599,
    options: ["14-Day Kit", "28-Day Kit"],
  },
];

// ─── Mobile concern filters ────────────────────────────────────────────────────
const MOBILE_CONCERNS = ["All", "Teeth whitening", "Fresh breath", "Plaque removal", "Tooth sensitivity"];

const CONCERN_PRODUCT_IDS: Record<string, string[]> = {
  "Teeth whitening":   ["whitening-serum", "whitening-combo", "whitening-strips-pro"],
  "Fresh breath":      ["charcoal-toothpaste", "electric-toothbrush", "power-flosser"],
  "Plaque removal":    ["electric-toothbrush", "charcoal-toothpaste", "power-flosser"],
  "Tooth sensitivity": ["electric-toothbrush", "whitening-serum", "whitening-strips-pro"],
};

// ─── Stars ─────────────────────────────────────────────────────────────────────
function Stars({ rating, count }: { rating: number; count: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
      <span style={{ color: "#F5A623", fontSize: 14, lineHeight: 1 }}>★</span>
      <span style={{ fontFamily: "var(--font-inter)", fontSize: 12, fontWeight: 600, color: "#1A0A3D", lineHeight: 1 }}>
        {rating}
      </span>
      <span style={{ fontFamily: "var(--font-inter)", fontSize: 11, color: "#9B8FBB", lineHeight: 1 }}>
        ({count})
      </span>
    </div>
  );
}

// ─── Concern dropdown ──────────────────────────────────────────────────────────
function ConcernButton() {
  const OPTIONS = [
    "Shop by concern",
    "Teeth whitening",
    "Fresh breath",
    "Plaque removal",
    "Tooth sensitivity",
  ];
  const [sel,  setSel]  = useState(0);
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <div ref={wrapRef} style={{ position: "relative", alignSelf: "flex-start" }}>
      <motion.button
        onClick={() => setOpen(o => !o)}
        whileHover={{ borderColor: "#6B4FB3" }}
        transition={{ duration: 0.15 }}
        style={{
          display:      "inline-flex",
          alignItems:   "center",
          gap:          10,
          padding:      "10px 18px",
          borderRadius: 100,
          border:       "1.5px solid #C4BDE8",
          background:   "white",
          cursor:       "pointer",
          fontFamily:   "var(--font-inter)",
          fontSize:     13,
          fontWeight:   500,
          color:        "#3D1F8F",
          whiteSpace:   "nowrap",
        }}
      >
        <span>{OPTIONS[sel]}</span>
        <motion.svg
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
        >
          <path
            d="M1 1l4 4 4-4"
            stroke="#6B4FB3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.97 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            style={{
              position:     "absolute",
              top:          "calc(100% + 6px)",
              left:         0,
              minWidth:     "100%",
              background:   "white",
              borderRadius: 14,
              border:       "1px solid #EDE9FB",
              boxShadow:    "0 8px 32px rgba(61,31,143,0.12)",
              overflow:     "hidden",
              zIndex:       20,
            }}
          >
            {OPTIONS.map((opt, i) => (
              <button
                key={opt}
                onClick={() => { setSel(i); setOpen(false); }}
                style={{
                  display:    "block",
                  width:      "100%",
                  padding:    "10px 16px",
                  textAlign:  "left",
                  background: i === sel ? "#F6F1FF" : "transparent",
                  border:     "none",
                  cursor:     "pointer",
                  fontFamily: "var(--font-inter)",
                  fontSize:   13,
                  color:      i === sel ? "#3D1F8F" : "#4A3A70",
                  fontWeight: i === sel ? 600 : 400,
                  transition: "background 0.15s",
                }}
              >
                {opt}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Nav arrow button ──────────────────────────────────────────────────────────
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
      whileHover={
        disabled
          ? {}
          : { backgroundColor: "#3D1F8F", borderColor: "#3D1F8F", color: "#FFFFFF" }
      }
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
        opacity:        disabled ? 0.4 : 1,
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

// ─── Product card ──────────────────────────────────────────────────────────────
function ProductCard({
  product,
  isActive,
}: {
  product:  Product;
  isActive: boolean;
}) {
  const [selectedOpt, setSelectedOpt] = useState(0);
  const [imgHover, setImgHover]       = useState(false);
  const discount = Math.round((1 - product.price / product.originalPrice) * 100);

  return (
    <motion.div
      animate={{
        scale: isActive ? 1.025 : 1,
        y:     isActive ? -5 : 0,
      }}
      whileHover={{ y: isActive ? -9 : -6, boxShadow: "0 20px 48px rgba(61,31,143,0.14)" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{
        width:         CARD_W,
        flexShrink:    0,
        background:    "#FFFFFF",
        borderRadius:  20,
        overflow:      "hidden",
        boxShadow:     isActive
          ? "0 8px 32px rgba(61,31,143,0.10)"
          : "0 2px 14px rgba(61,31,143,0.06)",
        display:       "flex",
        flexDirection: "column",
        userSelect:    "none",
        cursor:        "pointer",
      }}
    >
      {/* Image area */}
      <div
        onMouseEnter={() => setImgHover(true)}
        onMouseLeave={() => setImgHover(false)}
        style={{
          position:   "relative",
          height:     220,
          background: "#FFFFFF",
          flexShrink: 0,
          overflow:   "hidden",
        }}
      >
        {product.badge && (
          <div
            style={{
              position:      "absolute",
              top:           12,
              left:          12,
              zIndex:        2,
              background:    product.badge.bg,
              color:         "white",
              fontFamily:    "var(--font-inter)",
              fontSize:      9.5,
              fontWeight:    700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding:       "4px 10px",
              borderRadius:  20,
            }}
          >
            {product.badge.text}
          </div>
        )}
        <motion.div
          animate={{ scale: imgHover ? 1.06 : 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ position: "absolute", inset: "12px" }}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="258px"
            style={{ objectFit: "contain" }}
            loading="lazy"
            draggable={false}
          />
        </motion.div>
      </div>

      {/* Card content */}
      <div
        style={{
          padding:       "14px 15px 16px",
          display:       "flex",
          flexDirection: "column",
          flex:          1,
        }}
      >
        <Stars rating={product.rating} count={product.reviewCount} />

        <h3
          style={{
            marginTop:         8,
            fontFamily:        "var(--font-inter)",
            fontSize:          13.5,
            fontWeight:        600,
            color:             "#1A0A3D",
            lineHeight:        1.38,
            display:           "-webkit-box",
            WebkitLineClamp:   2,
            WebkitBoxOrient:   "vertical",
            overflow:          "hidden",
          }}
        >
          {product.name}
        </h3>

        <p
          style={{
            marginTop:  3,
            fontFamily: "var(--font-inter)",
            fontSize:   11.5,
            color:      "#8B7AAA",
            lineHeight: 1.4,
          }}
        >
          {product.subtitle}
        </p>

        {/* Price row */}
        <div
          style={{
            marginTop:  10,
            display:    "flex",
            alignItems: "center",
            gap:        6,
            flexWrap:   "nowrap",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-inter)",
              fontSize:   17,
              fontWeight: 700,
              color:      "#1A0A3D",
              lineHeight: 1,
            }}
          >
            ₹{product.price.toLocaleString("en-IN")}
          </span>
          <span
            style={{
              fontFamily:      "var(--font-inter)",
              fontSize:        12,
              color:           "#A899CC",
              textDecoration:  "line-through",
              lineHeight:      1,
            }}
          >
            ₹{product.originalPrice.toLocaleString("en-IN")}
          </span>
          {discount > 0 && (
            <span
              style={{
                fontFamily:   "var(--font-inter)",
                fontSize:     10,
                fontWeight:   700,
                color:        "#15803D",
                background:   "#DCFCE7",
                padding:      "3px 7px",
                borderRadius: 20,
                whiteSpace:   "nowrap",
                flexShrink:   0,
              }}
            >
              {discount}% OFF
            </span>
          )}
        </div>

        {/* Color dots */}
        {product.colors && (
          <div
            style={{
              marginTop:  10,
              display:    "flex",
              gap:        7,
              alignItems: "center",
            }}
          >
            {product.colors.map((c, i) => (
              <button
                key={c.label}
                title={c.label}
                onClick={() => setSelectedOpt(i)}
                style={{
                  width:        18,
                  height:       18,
                  borderRadius: "50%",
                  background:   c.hex,
                  // ring: double shadow for selection
                  boxShadow:    selectedOpt === i
                    ? `0 0 0 2px white, 0 0 0 3.5px #3D1F8F`
                    : `inset 0 0 0 1px rgba(61,31,143,0.18)`,
                  border:      "none",
                  cursor:      "pointer",
                  padding:     0,
                  flexShrink:  0,
                  outline:     "none",
                }}
              />
            ))}
            <span
              style={{
                fontFamily: "var(--font-inter)",
                fontSize:   10.5,
                color:      "#8B7AAA",
                marginLeft: 1,
              }}
            >
              {product.colors[selectedOpt]?.label}
            </span>
          </div>
        )}

        {/* Option pills */}
        {product.options && (
          <div
            style={{
              marginTop: 10,
              display:   "flex",
              gap:       5,
              flexWrap:  "wrap",
            }}
          >
            {product.options.map((o, i) => (
              <button
                key={o}
                onClick={() => setSelectedOpt(i)}
                style={{
                  padding:      "4px 10px",
                  borderRadius: 20,
                  border:       `1.5px solid ${selectedOpt === i ? "#3D1F8F" : "#E0D9F8"}`,
                  background:   selectedOpt === i ? "#F0ECFF" : "transparent",
                  color:        selectedOpt === i ? "#3D1F8F" : "#8B7AAA",
                  fontFamily:   "var(--font-inter)",
                  fontSize:     10.5,
                  fontWeight:   selectedOpt === i ? 600 : 400,
                  cursor:       "pointer",
                  whiteSpace:   "nowrap",
                  transition:   "border-color 0.15s, background 0.15s",
                }}
              >
                {o}
              </button>
            ))}
          </div>
        )}

        {/* Push CTA to bottom */}
        <div style={{ flex: 1, minHeight: 8 }} />

        {/* Add to Cart */}
        <motion.button
          whileHover={{ backgroundColor: "#3D1F8F" }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.18 }}
          style={{
            marginTop:       12,
            width:           "100%",
            height:          42,
            borderRadius:    "100vw",
            backgroundColor: "#1A0A3D",
            color:           "white",
            fontFamily:      "var(--font-inter)",
            fontSize:        12.5,
            fontWeight:      600,
            border:          "none",
            cursor:          "pointer",
            letterSpacing:   "0.03em",
          }}
        >
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
}

// ─── Section ────────────────────────────────────────────────────────────────────
export default function SmileWorthySavings() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef     = useRef<HTMLDivElement>(null);
  const mobileRef    = useRef<HTMLDivElement>(null);

  const x            = useMotionValue(0);
  const [dragLeft,  setDragLeft]  = useState(0);
  const [activeIdx, setActiveIdx] = useState(0);
  const [progress,  setProgress]  = useState(0);
  const [mobileIdx,     setMobileIdx]     = useState(0);
  const [mobileConcern, setMobileConcern] = useState<string | null>(null);

  // Filtered products for mobile concern chips
  const mobileProducts = mobileConcern
    ? PRODUCTS.filter(p => CONCERN_PRODUCT_IDS[mobileConcern]?.includes(p.id))
    : PRODUCTS;

  // Compute drag constraint after mount + on resize
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

  // Sync x → progress + active card index
  useMotionValueEvent(x, "change", (xVal) => {
    if (dragLeft <= 0) return;
    setProgress(Math.max(0, Math.min(100, (-xVal / dragLeft) * 100)));
    setActiveIdx(
      Math.max(0, Math.min(PRODUCTS.length - 1, Math.round(-xVal / STEP)))
    );
  });

  // Trackpad / mouse-wheel horizontal scroll
  const handleWheel = useCallback(
    (e: WheelEvent) => {
      e.preventDefault();
      const delta =
        Math.abs(e.deltaX) >= Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
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

  // Snap to nearest card on drag release (with velocity awareness)
  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const vx     = info.velocity.x;
    const raw    = -x.get() / STEP;
    let   target = Math.abs(vx) > 200
      ? vx < 0 ? Math.ceil(raw)  : Math.floor(raw)
      : Math.round(raw);
    target = Math.max(0, Math.min(PRODUCTS.length - 1, target));
    animate(x, -target * STEP, { type: "spring", stiffness: 300, damping: 35, mass: 0.8 });
  };

  // Nav button handler
  const goTo = (idx: number) => {
    const target = Math.max(0, Math.min(PRODUCTS.length - 1, idx));
    animate(x, -target * STEP, { type: "spring", stiffness: 300, damping: 35 });
  };

  // Reset mobile carousel when concern filter changes
  useEffect(() => {
    if (mobileRef.current) mobileRef.current.scrollLeft = 0;
    setMobileIdx(0);
  }, [mobileConcern]);

  // Mobile scroll → dot indicator
  const handleMobileScroll = () => {
    const el = mobileRef.current;
    if (!el || !el.firstElementChild) return;
    const step = (el.firstElementChild as HTMLElement).offsetWidth + CARD_GAP;
    const idx  = Math.round(el.scrollLeft / step);
    setMobileIdx(Math.max(0, Math.min(mobileProducts.length - 1, idx)));
  };

  return (
    <section
      style={{
        background:    "#F6F1FF",
        paddingTop:    "clamp(48px, 4.5vw, 68px)",
        paddingBottom: "clamp(48px, 4.5vw, 68px)",
        borderTop:     "1px solid #EDE9FB",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* ══ DESKTOP ══════════════════════════════════════════════════════════ */}
        <div className="hidden md:flex" style={{ alignItems: "stretch" }}>

          {/* ── Left panel ── */}
          <div
            style={{
              flexShrink:     0,
              width:          "clamp(260px, 26vw, 320px)",
              paddingLeft:    "clamp(20px, 4vw, 48px)",
              paddingRight:   "clamp(16px, 2.5vw, 36px)",
              display:        "flex",
              flexDirection:  "column",
              justifyContent: "center",
              gap:            20,
            }}
          >
            <div>
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
                Shop bestsellers
              </p>
              <h2
                className="font-display"
                style={{
                  fontWeight:    700,
                  fontSize:      "clamp(2rem, 3vw, 2.75rem)",
                  lineHeight:    1.1,
                  color:         "#1A0A3D",
                  letterSpacing: "-0.02em",
                }}
              >
                Smile-worthy
                <br />
                <em style={{ fontStyle: "italic", color: "#6B4FB3" }}>
                  savings.
                </em>
              </h2>
              <p
                style={{
                  marginTop:  14,
                  fontFamily: "var(--font-inter)",
                  fontSize:   "clamp(13px, 1.1vw, 15px)",
                  color:      "#6B5A8A",
                  lineHeight: 1.65,
                  maxWidth:   "28ch",
                }}
              >
                Systems, brush head multipacks, and limited-edition colors — while they last.
              </p>
            </div>

            <ConcernButton />

            {/* Arrow nav */}
            <div style={{ display: "flex", gap: 10 }}>
              <NavArrow
                direction="left"
                onClick={() => goTo(activeIdx - 1)}
                disabled={activeIdx === 0}
              />
              <NavArrow
                direction="right"
                onClick={() => goTo(activeIdx + 1)}
                disabled={activeIdx >= PRODUCTS.length - 1}
              />
            </div>
          </div>

          {/* ── Right carousel ── */}
          <div
            ref={containerRef}
            style={{
              flex:      1,
              overflow:  "hidden",
              position:  "relative",
              paddingTop:    8,
              paddingBottom: 8,
            }}
          >
            {/* Left edge fade — visible once scrolled */}
            <motion.div
              animate={{ opacity: progress > 3 ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              style={{
                position:      "absolute",
                left:          0,
                top:           0,
                bottom:        0,
                width:         56,
                background:    "linear-gradient(to right, #F6F1FF 0%, transparent 100%)",
                pointerEvents: "none",
                zIndex:        3,
              }}
            />
            {/* Right edge fade — always visible to hint scrollability */}
            <div
              style={{
                position:      "absolute",
                right:         0,
                top:           0,
                bottom:        0,
                width:         88,
                background:    "linear-gradient(to left, #F6F1FF 10%, transparent 100%)",
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
              {PRODUCTS.map((p, i) => (
                <ProductCard key={p.id} product={p} isActive={i === activeIdx} />
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
              fontFamily:    "var(--font-inter)",
              fontSize:      11.5,
              color:         "#9B8FBB",
              flexShrink:    0,
              minWidth:      42,
              letterSpacing: "0.06em",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {String(activeIdx + 1).padStart(2, "0")} / {String(PRODUCTS.length).padStart(2, "0")}
          </span>
          {/* Bar track */}
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
                height:     "100%",
                background: "linear-gradient(to right, #9B7FD4, #3D1F8F)",
                borderRadius: 2,
              }}
            />
          </div>
        </div>

        {/* ══ MOBILE ═══════════════════════════════════════════════════════════ */}
        <div className="md:hidden">

          {/* Top text */}
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
              Shop bestsellers
            </p>
            <h2
              className="font-display"
              style={{
                fontWeight:    700,
                fontSize:      "clamp(1.75rem, 6vw, 2.4rem)",
                lineHeight:    1.1,
                color:         "#1A0A3D",
                letterSpacing: "-0.02em",
                marginBottom:  10,
              }}
            >
              Smile-worthy{" "}
              <em style={{ fontStyle: "italic", color: "#6B4FB3" }}>savings.</em>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize:   14,
                color:      "#6B5A8A",
                lineHeight: 1.6,
              }}
            >
              Systems, brush head multipacks, and limited-edition colors.
            </p>
          </div>

          {/* Concern filter pills */}
          <div
            className="no-scrollbar"
            style={{
              overflowX:    "auto",
              display:      "flex",
              gap:          8,
              paddingLeft:  "clamp(20px, 5vw, 40px)",
              paddingRight: "clamp(20px, 5vw, 40px)",
              paddingBottom: 4,
              marginBottom:  16,
            }}
          >
            {MOBILE_CONCERNS.map((concern) => {
              const isActive = concern === "All" ? mobileConcern === null : mobileConcern === concern;
              return (
                <button
                  key={concern}
                  onClick={() => setMobileConcern(concern === "All" ? null : concern)}
                  style={{
                    flexShrink:  0,
                    padding:     "0 16px",
                    height:      44,
                    borderRadius: 100,
                    border:      `1.5px solid ${isActive ? "#3D1F8F" : "#C4BDE8"}`,
                    background:  isActive ? "#3D1F8F" : "white",
                    color:       isActive ? "#FFFFFF" : "#6B4FB3",
                    fontFamily:  "var(--font-inter)",
                    fontSize:    13,
                    fontWeight:  isActive ? 600 : 500,
                    cursor:      "pointer",
                    whiteSpace:  "nowrap",
                    display:     "flex",
                    alignItems:  "center",
                    transition:  "background 0.18s, border-color 0.18s, color 0.18s",
                  }}
                >
                  {concern}
                </button>
              );
            })}
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
              paddingLeft:             "clamp(20px, 5vw, 40px)",
              paddingRight:            "clamp(20px, 5vw, 40px)",
              paddingBottom:           8,
            }}
          >
            {mobileProducts.map(p => (
              <div
                key={p.id}
                style={{
                  flexShrink:      0,
                  width:           "min(82vw, 280px)",
                  scrollSnapAlign: "start",
                }}
              >
                <ProductCard product={p} isActive={false} />
              </div>
            ))}
          </div>

          {/* Pill-dot progress indicator */}
          <div
            style={{
              display:        "flex",
              justifyContent: "center",
              gap:            6,
              marginTop:      16,
            }}
          >
            {mobileProducts.map((_, i) => (
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
