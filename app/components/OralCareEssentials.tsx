"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// ─── Types ─────────────────────────────────────────────────────────────────────
type BadgeVariant = "launch" | "popular" | "value" | "sale";

interface Product {
  id:            string;
  badge?:        { text: string; variant: BadgeVariant };
  image:         string;
  rating:        number;
  reviewCount:   string;
  title:         string;
  subtitle:      string;
  price:         number;
  originalPrice: number;
  variants:      string[];
  filters:       string[];
}

// ─── Filter tabs ───────────────────────────────────────────────────────────────
const FILTERS = [
  { id: "best-seller",        label: "Best Seller"         },
  { id: "founders-favourite", label: "Founder's Favourite" },
  { id: "value-pack",         label: "Value Pack"          },
  { id: "newly-launched",     label: "Newly Launched"      },
];

// ─── Badge palette ─────────────────────────────────────────────────────────────
const BADGE_STYLE: Record<BadgeVariant, { bg: string; color: string }> = {
  launch:  { bg: "#3D1F8F", color: "#FFFFFF" },
  popular: { bg: "#1A0A3D", color: "#FFFFFF" },
  value:   { bg: "#166534", color: "#FFFFFF" },
  sale:    { bg: "#B91C1C", color: "#FFFFFF" },
};

// ─── Products — real Perfora assets ────────────────────────────────────────────
const PRODUCTS: Product[] = [
  {
    id:            "power-flosser",
    badge:         { text: "Best Seller", variant: "popular" },
    image:         "/product-images/power-flosser.webp",
    rating:        4.7,
    reviewCount:   "12K+",
    title:         "Power Flosser — Sterling Grey",
    subtitle:      "Wireless & Waterproof · 3 Pressure Modes · 2-Year Warranty",
    price:         2499,
    originalPrice: 2999,
    variants:      ["Sterling Grey"],
    filters:       ["best-seller", "founders-favourite"],
  },
  {
    id:            "electric-toothbrush",
    badge:         { text: "Dentist Approved", variant: "popular" },
    image:         "/product-images/electric-toothbrush.webp",
    rating:        4.6,
    reviewCount:   "8K+",
    title:         "Truth Brush — Electric",
    subtitle:      "Charcoal Bristles · Sonic Technology · 2 Brush Heads",
    price:         1399,
    originalPrice: 1799,
    variants:      ["Charcoal Grey", "Pearl White"],
    filters:       ["best-seller", "value-pack"],
  },
  {
    id:            "charcoal-toothpaste",
    badge:         { text: "Value Pick", variant: "value" },
    image:         "/product-images/charcoal-toothpaste.webp",
    rating:        4.5,
    reviewCount:   "15K+",
    title:         "Activated Charcoal Toothpaste",
    subtitle:      "PRO+ · Watermelon Mint · 100g · Pack of 2",
    price:         598,
    originalPrice: 798,
    variants:      ["Pack of 1", "Pack of 2", "Pack of 3"],
    filters:       ["value-pack", "best-seller"],
  },
  {
    id:            "purple-whitening-strips",
    badge:         { text: "Clinically Proven", variant: "launch" },
    image:         "/product-images/purple-whitening-strips.webp",
    rating:        4.5,
    reviewCount:   "5K+",
    title:         "Purple Magic Whitening Strips",
    subtitle:      "7 Treatments · 14 Strips · Mint",
    price:         999,
    originalPrice: 1199,
    variants:      ["7-Day Kit", "14-Day Kit"],
    filters:       ["best-seller", "newly-launched"],
  },
  {
    id:            "whitening-serum",
    badge:         { text: "New Launch", variant: "launch" },
    image:         "/product-images/whitening-serum.webp",
    rating:        4.6,
    reviewCount:   "3K+",
    title:         "Purple Magic Whitening Serum",
    subtitle:      "30ml · Pack of 3 · Enamel Safe",
    price:         1797,
    originalPrice: 2097,
    variants:      ["Pack of 1", "Pack of 2", "Pack of 3"],
    filters:       ["newly-launched", "founders-favourite"],
  },
  {
    id:            "awake-toothpaste",
    badge:         { text: "Value Pick", variant: "value" },
    image:         "/product-images/awake-toothpaste.jpg",
    rating:        4.4,
    reviewCount:   "6K+",
    title:         "Awake Day Toothpaste",
    subtitle:      "N-Hap & Green Tea · Lemon Mint · 100g · Pack of 2",
    price:         498,
    originalPrice: 598,
    variants:      ["Lemon Mint", "Fresh Mint"],
    filters:       ["value-pack", "newly-launched"],
  },
  {
    id:            "whitening-combo",
    badge:         { text: "21% Off", variant: "sale" },
    image:         "/product-images/whitening-combo.webp",
    rating:        4.8,
    reviewCount:   "2K+",
    title:         "Teeth Whitening Essentials Combo",
    subtitle:      "Serum + Powder + Mouthwash + Toothpaste ×2",
    price:         2499,
    originalPrice: 3199,
    variants:      ["Standard Kit", "Premium Kit"],
    filters:       ["value-pack", "founders-favourite"],
  },
  {
    id:            "whitening-strips-pro",
    badge:         { text: "PRO+", variant: "launch" },
    image:         "/product-images/whitening-strips-pro.webp",
    rating:        4.7,
    reviewCount:   "4K+",
    title:         "PRO+ Teeth Whitening Strips",
    subtitle:      "PAP 15% + N-HAP · 14 Treatments · Free Serum Included",
    price:         1299,
    originalPrice: 1599,
    variants:      ["14-Treatment Kit", "28-Treatment Kit"],
    filters:       ["newly-launched", "founders-favourite"],
  },
];

// ─── Star rating ───────────────────────────────────────────────────────────────
function Stars({ rating, count }: { rating: number; count: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
      <span style={{ color: "#F5A623", fontSize: 15, lineHeight: 1 }}>★</span>
      <span style={{ fontFamily: "var(--font-inter)", fontSize: 12.5, fontWeight: 600, color: "#1A0A3D", lineHeight: 1 }}>
        {rating}
      </span>
      <span style={{ fontFamily: "var(--font-inter)", fontSize: 11.5, color: "#9B8FBB", lineHeight: 1 }}>
        ({count})
      </span>
    </div>
  );
}

// ─── Product card ──────────────────────────────────────────────────────────────
function ProductCard({ product, index }: { product: Product; index: number }) {
  const [variant,  setVariant]  = useState(0);
  const [imgHover, setImgHover] = useState(false);

  const discount = Math.round((1 - product.price / product.originalPrice) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.32, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] },
      }}
      whileHover={{ y: -6, boxShadow: "0 20px 48px rgba(61,31,143,0.13)" }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      style={{
        background:    "#EDE9FB",
        borderRadius:  20,
        overflow:      "hidden",
        position:      "relative",
        display:       "flex",
        flexDirection: "column",
        boxShadow:     "0 2px 16px rgba(61,31,143,0.07)",
        cursor:        "pointer",
      }}
    >
      {/* Badge */}
      {product.badge && (
        <div
          style={{
            position:      "absolute",
            top:           12,
            left:          12,
            zIndex:        2,
            background:    BADGE_STYLE[product.badge.variant].bg,
            color:         BADGE_STYLE[product.badge.variant].color,
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

      {/* Image area — white bg so product shots look sharp */}
      <div
        onMouseEnter={() => setImgHover(true)}
        onMouseLeave={() => setImgHover(false)}
        style={{
          position:   "relative",
          height:     218,
          background: "#FFFFFF",
          overflow:   "hidden",
          flexShrink: 0,
        }}
      >
        <motion.div
          animate={{ scale: imgHover ? 1.06 : 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ position: "absolute", inset: "12px" }}
        >
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(min-width: 768px) 25vw, 264px"
            style={{ objectFit: "contain" }}
            loading="lazy"
            draggable={false}
          />
        </motion.div>
      </div>

      {/* Card content */}
      <div style={{ padding: "13px 14px 16px", display: "flex", flexDirection: "column", flex: 1 }}>
        <Stars rating={product.rating} count={product.reviewCount} />

        {/* Title */}
        <h3
          style={{
            marginTop:         8,
            fontFamily:        "var(--font-inter)",
            fontSize:          14,
            fontWeight:        600,
            color:             "#1A0A3D",
            lineHeight:        1.38,
            display:           "-webkit-box",
            WebkitLineClamp:   2,
            WebkitBoxOrient:   "vertical",
            overflow:          "hidden",
          }}
        >
          {product.title}
        </h3>

        {/* Subtitle */}
        <p
          style={{
            marginTop:  4,
            fontFamily: "var(--font-inter)",
            fontSize:   11.5,
            color:      "#8B7AAA",
            lineHeight: 1.4,
          }}
        >
          {product.subtitle}
        </p>

        {/* Price row */}
        <div style={{ marginTop: 10, display: "flex", alignItems: "center", gap: 6, flexWrap: "nowrap" }}>
          <span style={{ fontFamily: "var(--font-inter)", fontSize: 18, fontWeight: 700, color: "#1A0A3D", lineHeight: 1 }}>
            ₹{product.price.toLocaleString("en-IN")}
          </span>
          <span style={{ fontFamily: "var(--font-inter)", fontSize: 12.5, color: "#A899CC", textDecoration: "line-through", lineHeight: 1 }}>
            ₹{product.originalPrice.toLocaleString("en-IN")}
          </span>
          {discount > 0 && (
            <span
              style={{
                fontFamily:   "var(--font-inter)",
                fontSize:     10.5,
                fontWeight:   700,
                color:        "#15803D",
                background:   "#DCFCE7",
                padding:      "3px 8px",
                borderRadius: 20,
                whiteSpace:   "nowrap",
                flexShrink:   0,
              }}
            >
              {discount}% OFF
            </span>
          )}
        </div>

        {/* Variant dropdown */}
        <div style={{ marginTop: 11 }}>
          <select
            value={variant}
            onChange={e => setVariant(Number(e.target.value))}
            style={{
              width:            "100%",
              height:           38,
              borderRadius:     8,
              border:           "1.5px solid #CBC2F0",
              background:       "#FFFFFF",
              color:            "#1A0A3D",
              fontSize:         12.5,
              fontFamily:       "var(--font-inter)",
              padding:          "0 32px 0 12px",
              cursor:           "pointer",
              appearance:       "none",
              WebkitAppearance: "none",
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' fill='none'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%236B4FB3' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
              backgroundRepeat:   "no-repeat",
              backgroundPosition: "right 12px center",
            }}
          >
            {product.variants.map((v, i) => (
              <option key={i} value={i}>{v}</option>
            ))}
          </select>
        </div>

        <div style={{ flex: 1, minHeight: 8 }} />

        {/* Add to Cart */}
        <motion.button
          whileHover={{ backgroundColor: "#3D1F8F" }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
          style={{
            marginTop:       12,
            width:           "100%",
            height:          46,
            borderRadius:    "100vw",
            backgroundColor: "#1A0A3D",
            color:           "white",
            fontFamily:      "var(--font-inter)",
            fontSize:        13.5,
            fontWeight:      600,
            border:          "none",
            cursor:          "pointer",
            letterSpacing:   "0.025em",
          }}
        >
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
}

// ─── Section ───────────────────────────────────────────────────────────────────
export default function OralCareEssentials() {
  const [activeFilter, setActiveFilter] = useState("best-seller");

  const filtered = PRODUCTS.filter(p => p.filters.includes(activeFilter));

  return (
    <section
      className="w-full bg-white"
      style={{
        paddingTop:    "clamp(40px, 4vw, 56px)",
        paddingBottom: "clamp(40px, 4vw, 56px)",
        borderTop:     "1px solid #F0EDFC",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">

        {/* ── Heading ── */}
        <h2
          className="font-display"
          style={{
            fontWeight:    700,
            fontSize:      "clamp(1.6rem, 3vw, 2.2rem)",
            letterSpacing: "-0.015em",
            color:         "#1A0A3D",
            lineHeight:    1.1,
            marginBottom:  "clamp(16px, 2vw, 22px)",
          }}
        >
          Oral Care{" "}
          <em style={{ fontStyle: "italic", fontWeight: 700, color: "#6B5A8A" }}>
            Essentials
          </em>
        </h2>

        {/* ── Filter tabs ── */}
        <div
          className="no-scrollbar"
          style={{
            display:                 "flex",
            gap:                     8,
            overflowX:               "auto",
            WebkitOverflowScrolling: "touch",
            paddingBottom:           4,
            marginBottom:            "clamp(20px, 3vw, 30px)",
          }}
        >
          {FILTERS.map(f => {
            const active = f.id === activeFilter;
            return (
              <motion.button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                whileHover={{ scale: active ? 1 : 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
                style={{
                  flexShrink:    0,
                  padding:       "9px 20px",
                  borderRadius:  24,
                  border:        active ? "1.5px solid transparent" : "1.5px solid #D4CBF8",
                  background:    active ? "#3D1F8F" : "transparent",
                  color:         active ? "#FFFFFF" : "#6B5A8A",
                  fontFamily:    "var(--font-inter)",
                  fontSize:      13,
                  fontWeight:    active ? 600 : 400,
                  cursor:        "pointer",
                  letterSpacing: "0.01em",
                  whiteSpace:    "nowrap",
                  transition:    "background 0.22s, color 0.22s, border-color 0.22s",
                }}
              >
                {f.label}
              </motion.button>
            );
          })}
        </div>

        {/* ── Desktop: 4-card single row ── */}
        <div
          className="hidden md:block"
          style={{
            display:             "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gridTemplateRows:    "auto",
            gap:                 "clamp(12px, 1.6vw, 18px)",
          }}
        >
          {filtered.slice(0, 4).map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>

        {/* ── Mobile horizontal scroll ── */}
        <div
          className="md:hidden no-scrollbar"
          style={{
            overflowX:               "auto",
            WebkitOverflowScrolling: "touch",
            scrollSnapType:          "x mandatory",
            display:                 "flex",
            gap:                     14,
            marginLeft:              "-20px",
            marginRight:             "-20px",
            paddingLeft:             20,
            paddingRight:            20,
            paddingBottom:           8,
          }}
        >
          {filtered.map((p, i) => (
            <div
              key={p.id}
              style={{ flexShrink: 0, width: 264, scrollSnapAlign: "start" }}
            >
              <ProductCard product={p} index={i} />
            </div>
          ))}
        </div>

        {/* ── Show More ── */}
        <div style={{ textAlign: "center", marginTop: "clamp(28px, 3.5vw, 40px)" }}>
          <motion.button
            whileHover={{
              y:           -2,
              boxShadow:   "0 10px 30px rgba(61,31,143,0.16)",
              borderColor: "#6B4FB3",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            style={{
              padding:       "13px 44px",
              borderRadius:  28,
              border:        "1.5px solid #3D1F8F",
              background:    "transparent",
              color:         "#3D1F8F",
              fontFamily:    "var(--font-inter)",
              fontSize:      13.5,
              fontWeight:    600,
              cursor:        "pointer",
              letterSpacing: "0.04em",
            }}
          >
            Show More
          </motion.button>
        </div>

      </div>
    </section>
  );
}
