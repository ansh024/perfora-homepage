"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";

// ─── Category data ────────────────────────────────────────────────────────────
const CATEGORIES = [
  {
    key:   "shop-all",
    label: "Shop All\nProducts",
    img:   "/new-icons/cat-shop-all.png",
    href:  "/collections/all",
  },
  {
    key:   "electric-toothbrush",
    label: "Electric\nToothbrush",
    img:   "/new-icons/cat-electric-toothbrush.png",
    href:  "/collections/electric-toothbrush",
  },
  {
    key:   "toothpaste-mouthwash",
    label: "Toothpaste\n& Mouthwash",
    img:   "/new-icons/cat-toothpaste-mouthwash.png",
    href:  "/collections/toothpaste-mouthwash",
  },
  {
    key:   "water-flosser",
    label: "Water\nFlosser",
    img:   "/new-icons/cat-water-flosser.png",
    href:  "/collections/water-flosser",
  },
  {
    key:   "teeth-whitening",
    label: "Teeth\nWhitening",
    img:   "/new-icons/cat-teeth-whitening.png",
    href:  "/collections/teeth-whitening",
  },
  {
    key:   "tongue-cleaner",
    label: "Tongue Cleaner\n& Mouthwash",
    img:   "/new-icons/cat-tongue-cleaner.png",
    href:  "/collections/tongue-cleaner-mouthwash",
  },
] as const;

// ─── Single category card ─────────────────────────────────────────────────────
function CategoryCard({
  label,
  img,
  href,
}: {
  label: string;
  img:   string;
  href:  string;
}) {
  return (
    <motion.a
      href={href}
      whileHover="hovered"
      whileTap={{ scale: 0.97 }}
      initial="rest"
      animate="rest"
      style={{
        display:                 "flex",
        flexDirection:           "column",
        alignItems:              "center",
        textDecoration:          "none",
        cursor:                  "pointer",
        outline:                 "none",
        WebkitTapHighlightColor: "transparent",
      }}
    >
      {/*
       * Fixed-height container — makes every product icon exactly the same
       * rendered height regardless of the source image's aspect ratio.
       * The white PNG backgrounds are invisible on the white section canvas,
       * so the baked-in lavender ovals show cleanly with no rectangle "frames".
       */}
      <div
        style={{
          width:           "100%",
          height:          "clamp(150px, 14vw, 205px)",
          display:         "flex",
          alignItems:      "center",
          justifyContent:  "center",
          position:        "relative",
        }}
      >
        <motion.img
          src={img}
          alt={label.replace("\n", " ")}
          loading="lazy"
          variants={{
            rest: {
              y:      0,
              scale:  1,
              filter: "drop-shadow(0px 6px 18px rgba(107,79,179,0.16))",
            },
            hovered: {
              y:      -7,
              scale:  1.05,
              filter: "drop-shadow(0px 12px 28px rgba(107,79,179,0.28))",
            },
          }}
          transition={{ duration: 0.32, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            // Let image fill the container height; width auto-scales by ratio.
            // maxWidth caps very wide images from overflowing the column.
            maxWidth:  "100%",
            maxHeight: "100%",
            width:     "auto",
            height:    "100%",
            objectFit: "contain",
            display:   "block",
          }}
        />
      </div>

      {/* Category label */}
      <motion.p
        variants={{
          rest:    { color: "#1A0A3D" },
          hovered: { color: "#5B21B6" },
        }}
        transition={{ duration: 0.2 }}
        style={{
          marginTop:     "clamp(8px, 0.8vw, 12px)",
          fontFamily:    "var(--font-inter), sans-serif",
          fontSize:      "clamp(11px, 0.9vw, 13px)",
          fontWeight:    500,
          textAlign:     "center",
          lineHeight:    1.45,
          letterSpacing: "0.01em",
          whiteSpace:    "pre-line",
        }}
      >
        {label}
      </motion.p>
    </motion.a>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────
export default function ShopByCategory() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section
      style={{
        // FIX 1 — pure white so the PNG white backgrounds are invisible
        background:    "#FFFFFF",
        paddingTop:    "clamp(28px, 3vw, 44px)",
        paddingBottom: "clamp(32px, 3.5vw, 52px)",
        overflow:      "hidden",
      }}
    >
      <div
        style={{
          maxWidth:     1440,
          marginLeft:   "auto",
          marginRight:  "auto",
          paddingLeft:  "clamp(20px, 3vw, 56px)",
          paddingRight: "clamp(20px, 3vw, 56px)",
        }}
      >
        {/* ── Heading block — no stars, tight spacing ──────────────────── */}
        <div style={{ textAlign: "center", marginBottom: "clamp(16px, 2vw, 28px)" }}>

          {/* FIX 2 — dark purple heading, no sparkles above/below (FIX 3) */}
          <h2
            className="font-display"
            style={{
              fontSize:      "clamp(1.9rem, 3.3vw, 3rem)",
              fontWeight:    700,
              lineHeight:    1.1,
              letterSpacing: "-0.025em",
              margin:        0,
            }}
          >
            <span style={{ color: "#1A0A3D" }}>Explore</span>{" "}
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "#6B3FA0" }}>
              Oral Care
            </em>
          </h2>

        </div>

        {/* ── Desktop grid: all 6 in one row ──────────────────────────── */}
        <div
          className="hidden md:grid"
          role="list"
          aria-label="Product categories"
          style={{
            gridTemplateColumns: "repeat(6, 1fr)",
            gap:                 "clamp(4px, 1vw, 16px)",
            alignItems:          "start",
          }}
        >
          {CATEGORIES.map(({ key, ...rest }) => (
            <CategoryCard key={key} {...rest} />
          ))}
        </div>

        {/* ── Mobile carousel: swipe + snap + peek ────────────────────── */}
        <div className="block md:hidden">
          <div
            ref={scrollRef}
            className="no-scrollbar"
            style={{
              overflowX:               "auto",
              overflowY:               "visible",
              WebkitOverflowScrolling: "touch",
              scrollSnapType:          "x mandatory",
              marginLeft:              "-20px",
              marginRight:             "-20px",
              paddingLeft:             "20px",
              paddingRight:            "20px",
              paddingBottom:           8,
            }}
          >
            <div
              role="list"
              aria-label="Product categories"
              style={{
                display: "flex",
                gap:     "clamp(8px, 3vw, 14px)",
                width:   "max-content",
              }}
            >
              {CATEGORIES.map(({ key, ...rest }) => (
                <div
                  key={key}
                  style={{
                    width:           "clamp(150px, 50vw, 195px)",
                    scrollSnapAlign: "start",
                    flexShrink:      0,
                  }}
                >
                  <CategoryCard {...rest} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
