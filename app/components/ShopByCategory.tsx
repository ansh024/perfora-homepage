"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";

// ─── Category data ──────────────────────────────────────────────────────────────
type CategoryItem = {
  key:           string;
  label:         string;
  circleFill:    string;
  isOffer:       boolean;
  imageSrc?:     string;
  Illustration?: () => React.ReactElement;
};

const CATEGORIES: CategoryItem[] = [
  {
    key:        "special-offer",
    label:      "Special Offer",
    imageSrc:   "/category-icons/IMG_8399.webp",
    circleFill: "#E2D9F8",
    isOffer:    true,
  },
  {
    key:        "electric-toothbrush",
    label:      "Electric\nToothbrush",
    imageSrc:   "/category-icons/electric-toothbrush-category.webp",
    circleFill: "#EDE9FB",
    isOffer:    false,
  },
  {
    key:        "teeth-whitening",
    label:      "Teeth\nWhitening",
    imageSrc:   "/category-icons/teethwhitening-category.webp",
    circleFill: "#EDE9FB",
    isOffer:    false,
  },
  {
    key:        "flosser",
    label:      "Dental\nFlosser",
    imageSrc:   "/category-icons/flosser-category.webp",
    circleFill: "#EDE9FB",
    isOffer:    false,
  },
  {
    key:        "combos",
    label:      "Combos",
    imageSrc:   "/category-icons/combos-category.webp",
    circleFill: "#EDE9FB",
    isOffer:    false,
  },
  {
    key:        "toothpaste",
    label:      "Toothpaste",
    imageSrc:   "/category-icons/toothpaste-category.webp",
    circleFill: "#EDE9FB",
    isOffer:    false,
  },
  {
    key:        "tongue-cleaner",
    label:      "Tongue\nCleaner",
    imageSrc:   "/category-icons/tonguecleaner-category.webp",
    circleFill: "#EDE9FB",
    isOffer:    false,
  },
  {
    key:        "mouth-freshener",
    label:      "Mouth\nFreshener",
    imageSrc:   "/category-icons/Mouth_Freshner_Banner_130126.webp",
    circleFill: "#EDE9FB",
    isOffer:    false,
  },
  {
    key:        "brush-heads",
    label:      "Brush\nHeads",
    imageSrc:   "/category-icons/brushhead-category.webp",
    circleFill: "#EDE9FB",
    isOffer:    false,
  },
];

// ─── Category card ──────────────────────────────────────────────────────────────
function CategoryCard({ label, circleFill, isOffer, imageSrc, Illustration }: CategoryItem) {
  const SIZE = "clamp(92px, 13.5vw, 112px)";

  return (
    <motion.button
      role="listitem"
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      aria-label={label.replace("\n", " ")}
      className="flex-shrink-0 flex flex-col items-center focus:outline-none"
      style={{
        scrollSnapAlign: "start",
        width:           SIZE,
        background:      "none",
        border:          "none",
        cursor:          "pointer",
        padding:         0,
      }}
    >
      {/* ── Circle ── */}
      <div style={{ position: "relative", width: SIZE, height: SIZE, flexShrink: 0 }}>

        {/* Background circle — clips the real image to the circle shape */}
        <div
          style={{
            position:     "absolute",
            inset:        0,
            borderRadius: "50%",
            background:   circleFill,
            boxShadow:    "inset 0 1px 3px rgba(61,31,143,0.06)",
            overflow:     "hidden",
          }}
        >
          {imageSrc && (
            <img
              src={imageSrc}
              alt=""
              aria-hidden
              style={{
                width:      "100%",
                height:     "100%",
                objectFit:  "cover",
                // Scale the image down slightly so the product fills the circle
                // without the hard-cropped square edge feeling too tight
                transform:  "scale(1.0)",
                display:    "block",
              }}
            />
          )}
        </div>

        {/* Dashed ring for Special Offer */}
        {isOffer && (
          <div
            style={{
              position:      "absolute",
              inset:         -3,
              borderRadius:  "50%",
              border:        "1.5px dashed #A898D8",
              opacity:       0.65,
              pointerEvents: "none",
            }}
          />
        )}

        {/* SVG fallback for Brush Heads (no real asset) */}
        {!imageSrc && Illustration && (
          <div
            style={{
              position:   "absolute",
              bottom:     0,
              left:       "50%",
              transform:  "translateX(-50%) translateY(-8px)",
              display:    "flex",
              alignItems: "flex-end",
              overflow:   "visible",
            }}
          >
            <Illustration />
          </div>
        )}
      </div>

      {/* ── Label ── */}
      <p
        style={{
          marginTop:     "clamp(9px, 1.3vw, 12px)",
          fontFamily:    "var(--font-inter), sans-serif",
          fontSize:      "clamp(10px, 1.4vw, 11.5px)",
          fontWeight:    isOffer ? 600 : 400,
          color:         isOffer ? "#4A3A99" : "#1A0A3D",
          textAlign:     "center",
          lineHeight:    1.4,
          letterSpacing: "0.01em",
          whiteSpace:    "pre-line",
        }}
      >
        {label}
      </p>
    </motion.button>
  );
}

// ─── Section ────────────────────────────────────────────────────────────────────
export default function ShopByCategory() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className="w-full bg-white"
      style={{
        paddingTop:    "clamp(40px, 4vw, 56px)",
        paddingBottom: "clamp(40px, 4vw, 56px)",
      }}
    >
      {/* ── Heading ── */}
      <div
        style={{
          maxWidth:     1280,
          marginLeft:   "auto",
          marginRight:  "auto",
          textAlign:    "center",
          marginBottom: "clamp(20px, 2.5vw, 30px)",
          paddingLeft:  "clamp(20px, 4vw, 48px)",
          paddingRight: "clamp(20px, 4vw, 48px)",
        }}
      >
        <h2
          className="font-display"
          style={{
            fontWeight:    700,
            fontSize:      "clamp(1.5rem, 2.8vw, 2rem)",
            letterSpacing: "-0.01em",
            lineHeight:    1.1,
            color:         "#1A0A3D",
          }}
        >
          Shop by{" "}
          <em style={{ fontStyle: "italic", fontWeight: 700, color: "#6B5A8A" }}>
            Category
          </em>
        </h2>
      </div>

      {/* ── Scrollable track ──
          Two-div pattern: outer owns scroll; inner uses width:fit-content +
          min-width:100% + justify-content:center so on desktop items are centered,
          while on mobile the track expands and scrolls correctly. */}
      <div
        ref={scrollRef}
        className="no-scrollbar"
        style={{
          overflowX:               "auto",
          overflowY:               "visible",
          WebkitOverflowScrolling: "touch",
          scrollSnapType:          "x mandatory",
        }}
      >
        <div
          role="list"
          aria-label="Product categories"
          style={{
            display:        "flex",
            flexDirection:  "row",
            justifyContent: "center",
            alignItems:     "flex-start",
            gap:            "clamp(10px, 1.6vw, 20px)",
            width:          "fit-content",
            minWidth:       "100%",
            maxWidth:       1280,
            marginLeft:     "auto",
            marginRight:    "auto",
            boxSizing:      "border-box",
            paddingLeft:    "clamp(20px, 4vw, 48px)",
            paddingRight:   "clamp(20px, 4vw, 48px)",
            paddingTop:     "10px",
            paddingBottom:  "16px",
          }}
        >
          {CATEGORIES.map((cat) => (
            <CategoryCard
              key={cat.key}
              label={cat.label}
              circleFill={cat.circleFill}
              isOffer={cat.isOffer}
              imageSrc={cat.imageSrc}
              Illustration={cat.Illustration}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
