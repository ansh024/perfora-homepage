"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";

// ─── Menu data ─────────────────────────────────────────────────────────────────

const SHOP_ITEMS = [
  { label: "Electric Toothbrush", img: "/category-icons/electric-toothbrush-category.webp", href: "#" },
  { label: "Toothpaste",          img: "/category-icons/toothpaste-category.webp",           href: "#" },
  { label: "Mouth Fresheners",    img: "/category-icons/Mouth_Freshner_Banner_130126.webp",  href: "#" },
  { label: "Dental Flosser",      img: "/category-icons/flosser-category.webp",              href: "#" },
  { label: "Teeth Whitening",     img: "/category-icons/teethwhitening-category.webp",       href: "#" },
  { label: "Tongue Cleaner",      img: "/category-icons/tonguecleaner-category.webp",        href: "#" },
  { label: "Value Packs",         img: "/category-icons/combos-category.webp",               href: "#" },
  { label: "All Products",        img: "/category-icons/brushhead-category.webp",            href: "#" },
];

interface ConcernItem { label: string; sub: string; href: string; icon: React.ReactNode }
const CONCERN_ITEMS: ConcernItem[] = [
  {
    label: "Sensitive Teeth", sub: "No sting, no discomfort", href: "#",
    icon: (
      // Tooth outline + lightning bolt — sensitive/electric pain
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        {/* Tooth body */}
        <path d="M14 3.5c-2.2 0-4.1.8-5.5 2.1C7 7 6 9 6 11.3c0 2.5 1.1 4.7 2.9 6.1l-.4 4.6c-.1 1.1.7 2 1.8 2 .9 0 1.6-.6 1.8-1.4l.6-2.1h2.6l.6 2.1c.2.8 1 1.4 1.8 1.4 1.1 0 1.9-.9 1.8-2l-.4-4.6C20.9 16 22 13.8 22 11.3c0-2.3-1-4.3-2.5-5.7C18.1 4.3 16.2 3.5 14 3.5z" stroke="currentColor" strokeWidth="1.55" strokeLinejoin="round"/>
        {/* Lightning bolt */}
        <path d="M15.5 7.5l-3.5 4.5h2.5L13 17l5-6h-2.5l2-3.5z" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Bad Breath", sub: "Fresh from the first rinse", href: "#",
    icon: (
      // Side-profile face + exhale breath waves
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        {/* Head/face profile */}
        <path d="M12 4.5c-3.3 0-6 2.7-6 6 0 2.3 1.3 4.3 3.2 5.3l-.2 1c-.2.8.4 1.6 1.2 1.7h.3c.7 0 1.3-.5 1.5-1.2l.2-1c.5.1 1 .1 1.5 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Nose bump */}
        <path d="M6.5 9.5c-.5.3-.5 1 0 1.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        {/* Mouth open */}
        <path d="M8.5 13c.8.6 2 .8 3 .3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        {/* Breath waves — 3 arcs going right */}
        <path d="M15 11c1.2 0 2.2.8 2.2 2s-1 2-1 3 1 2 2 2" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round"/>
        <path d="M18 12.5c.9 0 1.5.6 1.5 1.5s-.8 1.4-.8 2.2.8 1.3 1.8 1.3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <path d="M20.5 13.5c.6 0 1 .4 1 1s-.5 1-.5 1.6.5.9 1 .9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Yellow Teeth", sub: "Visibly whiter in 7 days", href: "#",
    icon: (
      // Tooth + 4-point sparkle star + shine dots
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        {/* Tooth body */}
        <path d="M14 3.5c-2.2 0-4.1.8-5.5 2.1C7 7 6 9 6 11.3c0 2.5 1.1 4.7 2.9 6.1l-.4 4.6c-.1 1.1.7 2 1.8 2 .9 0 1.6-.6 1.8-1.4l.6-2.1h2.6l.6 2.1c.2.8 1 1.4 1.8 1.4 1.1 0 1.9-.9 1.8-2l-.4-4.6C20.9 16 22 13.8 22 11.3c0-2.3-1-4.3-2.5-5.7C18.1 4.3 16.2 3.5 14 3.5z" stroke="currentColor" strokeWidth="1.55" strokeLinejoin="round"/>
        {/* 4-pointed sparkle star */}
        <path d="M14 6l.7 2.3L17 9l-2.3.7L14 12l-.7-2.3L11 9l2.3-.7z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
        {/* Shine dots */}
        <circle cx="19" cy="6" r=".9" fill="currentColor"/>
        <circle cx="21" cy="9" r=".65" fill="currentColor"/>
        <circle cx="17.5" cy="4" r=".65" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: "Plaque Build Up", sub: "Clinically tested, dentist approved", href: "#",
    icon: (
      // Tooth with plaque/buildup texture at the gumline
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        {/* Tooth body */}
        <path d="M14 3.5c-2.2 0-4.1.8-5.5 2.1C7 7 6 9 6 11.3c0 2.5 1.1 4.7 2.9 6.1l-.4 4.6c-.1 1.1.7 2 1.8 2 .9 0 1.6-.6 1.8-1.4l.6-2.1h2.6l.6 2.1c.2.8 1 1.4 1.8 1.4 1.1 0 1.9-.9 1.8-2l-.4-4.6C20.9 16 22 13.8 22 11.3c0-2.3-1-4.3-2.5-5.7C18.1 4.3 16.2 3.5 14 3.5z" stroke="currentColor" strokeWidth="1.55" strokeLinejoin="round"/>
        {/* Plaque buildup — layered lines inside the tooth */}
        <path d="M9.5 15.5h9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeDasharray="1.8 1.4"/>
        <path d="M10 17.5h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="1.6 1.4"/>
        {/* Bacteria dots */}
        <circle cx="12" cy="10" r=".85" fill="currentColor" opacity=".7"/>
        <circle cx="14.5" cy="9" r=".85" fill="currentColor" opacity=".7"/>
        <circle cx="16.8" cy="10.5" r=".75" fill="currentColor" opacity=".6"/>
      </svg>
    ),
  },
];

const KIDS_ITEMS = [
  { label: "Electric Toothbrush", img: "/category-icons/electric-toothbrush-category.webp", badge: "Ages 3+",         href: "#", circleFill: "#EDE9FB" },
  { label: "Kids Toothpaste",     img: "/category-icons/toothpaste-category.webp",           badge: "Fruity Flavours", href: "#", circleFill: "#E4F3FF" },
  { label: "Combos & Kits",       img: "/category-icons/combos-category.webp",               badge: "Best Value",      href: "#", circleFill: "#FFF3E0" },
  { label: "All Kids Products",   img: "/category-icons/brushhead-category.webp",            badge: "Shop All",        href: "#", circleFill: "#EDFAF1" },
];

interface LearnItem { label: string; sub: string; href: string; icon: React.ReactNode }
const LEARN_ITEMS: LearnItem[] = [
  {
    label: "Our Story", sub: "How a smile sparked a revolution", href: "/about",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M5 20V7a2 2 0 012-2h7l5 5v10a2 2 0 01-2 2H7a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M14 5v5h5M9 13h8M9 16.5h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Press Testimonials", sub: "Perfora in the news & media", href: "/press",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="4" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 9h10M8 13h7M8 16.5h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="19" cy="7" r="3.5" fill="#9B7FD4"/>
        <path d="M18 7l.8.8L20.2 6" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Tooth Talk", sub: "Expert oral health insights", href: "https://perforacare.com/pages/blogs",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M4 6a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-6l-4 4v-4H6a2 2 0 01-2-2V6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M9 10h8M9 13.5h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Sunday Newsletter", sub: "Weekly tips, straight to you", href: "#",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="3" y="6" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 9l10 7 10-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

// CART_COUNT is now sourced from CartContext — see useCart() in the component body

// ─── Animation variants ────────────────────────────────────────────────────────
const megaVariants = {
  hidden:  { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0  },
  exit:    { opacity: 0, y: -6 },
};

// ─── Shared blob-circle menu item (mirrors ShopByCategory visual language) ────
function BlobMenuItem({
  label,
  img,
  href,
  circleFill = "#EDE9FB",
  size = 72,
  badge,
}: {
  label:       string;
  img:         string;
  href:        string;
  circleFill?: string;
  size?:       number;
  badge?:      string;
}) {
  return (
    <a
      href={href}
      style={{
        display:        "flex",
        flexDirection:  "column",
        alignItems:     "center",
        gap:            9,
        textDecoration: "none",
        flexShrink:     0,
      }}
    >
      <motion.div
        whileHover={{ scale: 1.1, y: -5 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{
          width:        size,
          height:       size,
          borderRadius: "50%",
          background:   circleFill,
          boxShadow:    "inset 0 1px 3px rgba(61,31,143,0.07)",
          overflow:     "hidden",
          flexShrink:   0,
        }}
      >
        <img
          src={img}
          alt=""
          aria-hidden
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </motion.div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
        <span
          style={{
            fontFamily:  "var(--font-inter)",
            fontSize:    11.5,
            fontWeight:  500,
            color:       "#1A0A3D",
            textAlign:   "center",
            lineHeight:  1.35,
            maxWidth:    size + 16,
            display:     "block",
          }}
        >
          {label}
        </span>
        {badge && (
          <span
            style={{
              padding:       "2px 8px",
              borderRadius:  20,
              background:    "rgba(155,127,212,0.14)",
              color:         "#5C3FA0",
              fontFamily:    "var(--font-inter)",
              fontSize:      9.5,
              fontWeight:    600,
              letterSpacing: "0.02em",
              whiteSpace:    "nowrap",
            }}
          >
            {badge}
          </span>
        )}
      </div>
    </a>
  );
}

// ─── Shop panel ────────────────────────────────────────────────────────────────
function ShopPanel() {
  return (
    <div style={{ padding: "22px 40px 26px" }}>
      <div
        style={{
          display:         "flex",
          justifyContent:  "center",
          alignItems:      "flex-start",
          gap:             "clamp(8px, 2.2vw, 36px)",
          flexWrap:        "nowrap",
        }}
      >
        {SHOP_ITEMS.map((item) => (
          <BlobMenuItem
            key={item.label}
            label={item.label}
            img={item.img}
            href={item.href}
            circleFill="#EDE9FB"
            size={72}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Concern panel ─────────────────────────────────────────────────────────────
function ConcernPanel() {
  return (
    <div style={{ display: "flex", alignItems: "stretch", padding: "24px 40px 28px", gap: 16 }}>

      {/* ── LEFT 40% — editorial brand panel ── */}
      <div
        style={{
          flex:           "0 0 38%",
          borderRadius:   20,
          background:     "linear-gradient(145deg, #EDE8FF 0%, #DDD4F8 55%, #C8BBF0 100%)",
          border:         "1.5px solid #C4B8EE",
          padding:        "26px 28px",
          display:        "flex",
          flexDirection:  "column",
          justifyContent: "space-between",
          overflow:       "hidden",
          position:       "relative",
        }}
      >
        {/* Decorative circles */}
        <div style={{ position: "absolute", top: -30, right: -30, width: 130, height: 130, borderRadius: "50%", background: "rgba(180,160,240,0.22)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -18, left: -18, width: 90,  height: 90,  borderRadius: "50%", background: "rgba(140,110,220,0.12)", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <p
            style={{
              fontFamily:    "var(--font-inter)",
              fontSize:      9.5,
              fontWeight:    700,
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color:         "#6B4FB3",
              margin:        "0 0 12px",
            }}
          >
            Shop by Concern
          </p>
          <h3
            className="font-display"
            style={{ fontSize: "clamp(1.25rem, 1.9vw, 1.6rem)", fontWeight: 700, color: "#2A0A5E", lineHeight: 1.18, margin: 0 }}
          >
            What's bothering
            <br />
            <em style={{ fontStyle: "italic", color: "#5C3FA0" }}>your teeth?</em>
          </h3>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize:   12.5,
              color:      "#5A4880",
              margin:     "14px 0 0",
              lineHeight: 1.65,
            }}
          >
            Pick your concern — we&apos;ll match you with the right formula.
          </p>
        </div>

        {/* Smile graphic — abstract tooth icon */}
        <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", gap: 12, marginTop: 20 }}>
          <div
            style={{
              display:        "flex",
              alignItems:     "center",
              justifyContent: "center",
              width:          44,
              height:         44,
              borderRadius:   "50%",
              background:     "rgba(255,255,255,0.55)",
              border:         "1.5px solid rgba(130,90,220,0.20)",
              color:          "#6B4FB3",
              flexShrink:     0,
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              {/* Tooth with check badge — clinically tested */}
              <path d="M12 2.5c-2 0-3.7.7-5 1.9C5.6 5.7 5 7.4 5 9.3c0 2.3 1 4.3 2.6 5.6l-.3 3.7c-.1.9.6 1.7 1.5 1.7.8 0 1.5-.5 1.7-1.3l.5-1.7h2l.5 1.7c.2.8.9 1.3 1.7 1.3.9 0 1.6-.8 1.5-1.7l-.3-3.7C17 13.6 18 11.6 18 9.3c0-1.9-.6-3.6-1.9-4.9C14.7 3.2 13 2.5 12 2.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
              {/* Check badge circle */}
              <circle cx="17.5" cy="6.5" r="3.5" fill="#3D1F8F"/>
              <path d="M15.8 6.5l1.1 1.2 2-2" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: 11, fontWeight: 600, color: "#3D1F8F", margin: 0 }}>
              Clinically tested
            </p>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: 10.5, color: "#7B6AAA", margin: "2px 0 0" }}>
              Dentist-recommended formulas
            </p>
          </div>
        </div>
      </div>

      {/* ── RIGHT 60% — concern cards ── */}
      <div
        style={{
          flex:                1,
          display:             "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap:                 10,
        }}
      >
        {CONCERN_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            style={{
              display:        "flex",
              alignItems:     "flex-start",
              gap:            13,
              padding:        "14px 16px",
              borderRadius:   16,
              background:     "#F7F4FF",
              border:         "1.5px solid #EAE3FC",
              textDecoration: "none",
              transition:     "background 0.17s, border-color 0.17s, box-shadow 0.17s, transform 0.17s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background   = "#EDE6FF";
              el.style.borderColor  = "#A890E0";
              el.style.boxShadow    = "0 6px 20px rgba(80,40,180,0.12)";
              el.style.transform    = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background   = "#F7F4FF";
              el.style.borderColor  = "#EAE3FC";
              el.style.boxShadow    = "none";
              el.style.transform    = "translateY(0)";
            }}
          >
            {/* Icon */}
            <div
              style={{
                width:          40,
                height:         40,
                borderRadius:   12,
                background:     "linear-gradient(135deg, #EDE8FF 0%, #DDD4F8 100%)",
                display:        "flex",
                alignItems:     "center",
                justifyContent: "center",
                color:          "#6B4FB3",
                flexShrink:     0,
                boxShadow:      "inset 0 1px 2px rgba(80,40,180,0.08)",
              }}
            >
              {item.icon}
            </div>

            {/* Text */}
            <div style={{ minWidth: 0 }}>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: 13, fontWeight: 600, color: "#1A0A3D", margin: 0, lineHeight: 1.25 }}>
                {item.label}
              </p>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: 11, color: "#232323", margin: "4px 0 0", lineHeight: 1.45 }}>
                {item.sub}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 8 }}>
                <span style={{ fontFamily: "var(--font-inter)", fontSize: 10.5, fontWeight: 600, color: "#7B5CC8" }}>
                  Shop now
                </span>
                <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5h6M5.5 2.5L8 5l-2.5 2.5" stroke="#7B5CC8" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>

    </div>
  );
}

// ─── Kids panel ────────────────────────────────────────────────────────────────
function KidsPanel() {
  return (
    <div style={{ display: "flex", alignItems: "stretch", padding: "24px 40px 28px", gap: 16 }}>

      {/* ── LEFT 70% — editorial story card ── */}
      <div
        style={{
          flex:           "0 0 70%",
          borderRadius:   20,
          background:     "linear-gradient(130deg, #FFF7ED 0%, #FFE8D0 55%, #FFDAB8 100%)",
          border:         "1.5px solid #FFD4A0",
          padding:        "28px 36px",
          display:        "flex",
          flexDirection:  "column",
          justifyContent: "space-between",
          gap:            20,
          overflow:       "hidden",
          position:       "relative",
        }}
      >
        {/* Decorative background circles */}
        <div style={{ position: "absolute", top: -24, right: -24, width: 120, height: 120, borderRadius: "50%", background: "rgba(255,200,140,0.25)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -16, right: 80, width: 80,  height: 80,  borderRadius: "50%", background: "rgba(255,180,100,0.15)", pointerEvents: "none" }} />

        <div>
          <p
            style={{
              fontFamily:    "var(--font-inter)",
              fontSize:      9.5,
              fontWeight:    700,
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color:         "#C47A30",
              margin:        "0 0 12px",
            }}
          >
            Kids Range · Ages 3+
          </p>
          <h3
            className="font-display"
            style={{ fontSize: "clamp(1.5rem, 2.2vw, 1.9rem)", fontWeight: 700, color: "#7A3D00", lineHeight: 1.15, margin: 0 }}
          >
            Little Teeth,
            <br />
            <em style={{ fontStyle: "italic", color: "#B85C00" }}>Big Protection.</em>
          </h3>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize:   13,
              color:      "#A0621A",
              margin:     "14px 0 0",
              lineHeight: 1.65,
              maxWidth:   460,
            }}
          >
            Dentist-formulated for tiny smiles. Safe ingredients, fruity flavours, and zero compromise on clean — because good habits start early.
          </p>
        </div>

        {/* Trust badges + CTA row */}
        <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
          {/* Trust pills */}
          {["Fluoride-safe", "Paediatrician reviewed", "No harsh chemicals"].map((t) => (
            <span
              key={t}
              style={{
                display:       "inline-flex",
                alignItems:    "center",
                gap:           5,
                fontFamily:    "var(--font-inter)",
                fontSize:      10.5,
                fontWeight:    500,
                color:         "#915200",
                background:    "rgba(255,255,255,0.55)",
                borderRadius:  20,
                padding:       "4px 11px",
                border:        "1px solid rgba(200,120,30,0.18)",
              }}
            >
              <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                <circle cx="4.5" cy="4.5" r="4" fill="#E8820A" opacity="0.85"/>
                <path d="M2.5 4.5l1.3 1.4L6.5 3" stroke="white" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {t}
            </span>
          ))}

          <a
            href="#"
            style={{
              marginLeft:     "auto",
              display:        "inline-flex",
              alignItems:     "center",
              gap:            7,
              fontFamily:     "var(--font-inter)",
              fontSize:       13,
              fontWeight:     700,
              color:          "#ffffff",
              background:     "#C47A30",
              padding:        "9px 20px",
              borderRadius:   30,
              textDecoration: "none",
              whiteSpace:     "nowrap",
              boxShadow:      "0 4px 14px rgba(180,100,20,0.22)",
              transition:     "background 0.17s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#A86520"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#C47A30"; }}
          >
            Shop Kids Range
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M6.5 2.5L10 6l-3.5 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      {/* ── RIGHT 30% — featured collection tile ── */}
      <a
        href="#"
        style={{
          flex:           "0 0 calc(30% - 16px)",
          borderRadius:   20,
          background:     "linear-gradient(160deg, #F0EAFF 0%, #E6DCFF 100%)",
          border:         "1.5px solid #D8CCFF",
          padding:        "24px 22px",
          display:        "flex",
          flexDirection:  "column",
          justifyContent: "space-between",
          textDecoration: "none",
          overflow:       "hidden",
          position:       "relative",
          transition:     "box-shadow 0.18s, transform 0.18s",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.boxShadow = "0 8px 28px rgba(100,60,200,0.14)";
          el.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.boxShadow = "none";
          el.style.transform = "translateY(0)";
        }}
      >
        {/* Decorative blob */}
        <div style={{ position: "absolute", top: -20, right: -20, width: 100, height: 100, borderRadius: "50%", background: "rgba(180,150,255,0.20)", pointerEvents: "none" }} />

        {/* Product image collage — three stacked blob circles */}
        <div style={{ display: "flex", justifyContent: "center", gap: 10, marginBottom: 18, position: "relative", zIndex: 1 }}>
          {[
            { img: "/category-icons/electric-toothbrush-category.webp", fill: "#EDE9FB", offset: 6 },
            { img: "/category-icons/toothpaste-category.webp",           fill: "#E4F3FF", offset: 0 },
            { img: "/category-icons/combos-category.webp",               fill: "#FFF3E0", offset: 6 },
          ].map((c, i) => (
            <div
              key={i}
              style={{
                width:        58,
                height:       58,
                borderRadius: "50%",
                background:   c.fill,
                overflow:     "hidden",
                flexShrink:   0,
                boxShadow:    "0 3px 10px rgba(80,40,160,0.10)",
                transform:    `translateY(${c.offset}px)`,
              }}
            >
              <img src={c.img} alt="" aria-hidden style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
          ))}
        </div>

        <div>
          <p
            style={{
              fontFamily:    "var(--font-inter)",
              fontSize:      9.5,
              fontWeight:    700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color:         "#7B5CC8",
              margin:        "0 0 6px",
            }}
          >
            Featured Collection
          </p>
          <p
            className="font-display"
            style={{ fontSize: "1.15rem", fontWeight: 700, color: "#2A0A5E", margin: 0, lineHeight: 1.2 }}
          >
            Shop Kids
            <br />
            <em style={{ fontStyle: "italic", color: "#6B4FB3" }}>Favourites</em>
          </p>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: 11.5, color: "#7B6AAA", margin: "8px 0 0", lineHeight: 1.5 }}>
            Curated picks loved by kids and approved by parents.
          </p>
        </div>

        <div
          style={{
            marginTop:  16,
            display:    "flex",
            alignItems: "center",
            gap:        6,
            fontFamily: "var(--font-inter)",
            fontSize:   12,
            fontWeight: 600,
            color:      "#6B4FB3",
          }}
        >
          Explore collection
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            <path d="M2 6h8M6.5 2.5L10 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </a>

    </div>
  );
}

// ─── Learn panel ───────────────────────────────────────────────────────────────
function LearnPanel() {
  return (
    <div
      style={{
        display:             "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap:                 12,
        padding:             "28px 40px 32px",
      }}
    >
      {LEARN_ITEMS.map((item) => (
        <a
          key={item.label}
          href={item.href}
          style={{
            display:        "flex",
            flexDirection:  "column",
            gap:            12,
            padding:        "20px 18px 22px",
            borderRadius:   18,
            border:         "1.5px solid #EDE9FB",
            textDecoration: "none",
            background:     "#FDFBFF",
            transition:     "border-color 0.17s, background 0.17s, box-shadow 0.17s, transform 0.17s",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor = "#9B7FD4";
            el.style.background  = "#F5F0FF";
            el.style.boxShadow   = "0 6px 24px rgba(61,31,143,0.10)";
            el.style.transform   = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor = "#EDE9FB";
            el.style.background  = "#FDFBFF";
            el.style.boxShadow   = "none";
            el.style.transform   = "translateY(0)";
          }}
        >
          <div
            style={{
              width:          42,
              height:         42,
              borderRadius:   12,
              background:     "#EDE8FF",
              display:        "flex",
              alignItems:     "center",
              justifyContent: "center",
              color:          "#6B4FB3",
            }}
          >
            {item.icon}
          </div>
          <div>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: 14, fontWeight: 600, color: "#1A0A3D", margin: 0, lineHeight: 1.2 }}>
              {item.label}
            </p>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: 11.5, color: "#232323", margin: "5px 0 0", lineHeight: 1.4 }}>
              {item.sub}
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: "auto" }}>
            <span style={{ fontFamily: "var(--font-inter)", fontSize: 11.5, fontWeight: 600, color: "#6B4FB3" }}>
              Explore
            </span>
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M6.5 2.5L10 6l-3.5 3.5" stroke="#6B4FB3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </a>
      ))}
    </div>
  );
}

// ─── Mobile menu data ──────────────────────────────────────────────────────────
const MOBILE_SHOP = [
  {
    key: "bestsellers", label: "Bestsellers", href: "/collections",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
      </svg>
    ),
    active: true,
  },
  {
    key: "brush", label: "Electric Toothbrush", href: "#",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="9" y="2" width="6" height="10" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 12v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M9 20h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 6h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    key: "toothpaste", label: "Toothpaste", href: "#",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M8 3h8v10a4 4 0 01-4 4 4 4 0 01-4-4V3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M8 7h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 17v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    key: "mouthwash", label: "Mouthwash", href: "#",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M9 3h6l1 4H8L9 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M8 7h8v10a3 3 0 01-3 3h-2a3 3 0 01-3-3V7z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M11 11c0 1 2 1 2 2s-2 1-2 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    key: "flosser", label: "Dental Flosser", href: "#",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
        <path d="M12 7V3M17 12h4M12 17v4M7 12H3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    key: "whitening", label: "Teeth Whitening", href: "#",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 3l1.5 4.5H18l-3.7 2.7 1.4 4.3L12 12l-3.7 2.5 1.4-4.3L6 7.5h4.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="19" cy="5" r="1.2" fill="currentColor"/>
        <circle cx="5" cy="18" r="1" fill="currentColor"/>
        <circle cx="20" cy="17" r=".8" fill="currentColor"/>
      </svg>
    ),
  },
  {
    key: "tongue", label: "Tongue Cleaner", href: "#",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M5 12c0-3.87 3.13-7 7-7s7 3.13 7 7c0 2.5-1.5 4.5-3.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 16c.8 1 2 1.5 4 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M7 12h10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    key: "kids", label: "Kids Range", href: "#",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M5 20c0-3.31 3.13-6 7-6s7 2.69 7 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M15 6l1.5-2M9 6L7.5 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    key: "value", label: "Value Packs", href: "#",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="6" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 10h18" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <path d="M8 3v3M16 3v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 14l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const MOBILE_CONCERNS = [
  {
    key: "sensitivity", label: "Sensitivity", recommended: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 3l-7 4v7c0 4.42 2.99 8.56 7 9.56 4.01-1 7-5.14 7-9.56V7l-7-4z" stroke="#3D1F8F" strokeWidth="1.6" strokeLinejoin="round"/>
        <path d="M12 9v4M12 15h.01" stroke="#3D1F8F" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    key: "whitening", label: "Whitening", recommended: false,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="4" stroke="#3D1F8F" strokeWidth="1.6"/>
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="#3D1F8F" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    key: "gumcare", label: "Gum Care", recommended: false,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 4c-2.2 0-4.1.8-5.5 2.1C5 7.6 4 9.3 4 11.3c0 2.5 1.1 4.7 2.9 6.1l-.3 3.3h11l-.3-3.3C19 16 20 13.8 20 11.3c0-2-.9-3.7-2.4-5C16.2 4.9 14.2 4 12 4z" stroke="#3D1F8F" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M9 17.5s1-2 3-2 3 2 3 2" stroke="#3D1F8F" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    key: "breath", label: "Fresh Breath", recommended: false,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M3 8h12M3 12h8M3 16h10" stroke="#3D1F8F" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M18 6c1.5 0 3 1 3 3s-2 2.5-2 4 1.5 3 1.5 3" stroke="#3D1F8F" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    key: "plaque", label: "Plaque Removal", recommended: false,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 3l-7 4v7c0 4.42 2.99 8.56 7 9.56 4.01-1 7-5.14 7-9.56V7l-7-4z" stroke="#3D1F8F" strokeWidth="1.6" strokeLinejoin="round"/>
        <path d="M8.5 12.5l2.5 2.5 4.5-5" stroke="#3D1F8F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

// ─── Account dropdown ──────────────────────────────────────────────────────────
function AccountDropdown({ onClose }: { onClose: () => void }) {
  const links = [
    {
      label: "Order History",
      icon: (
        <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
          <rect x="2" y="1.5" width="12" height="13" rx="2" stroke="currentColor" strokeWidth="1.35"/>
          <path d="M5 5.5h6M5 8.5h6M5 11.5h3.5" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      label: "Perfora Rewards",
      icon: (
        <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
          <path d="M8 2l1.35 2.73 3.01.44-2.18 2.12.51 3-2.69-1.41-2.69 1.42.51-3L3.64 5.17l3.01-.44L8 2z" stroke="currentColor" strokeWidth="1.35" strokeLinejoin="round"/>
          <path d="M5.5 12.5v2M10.5 12.5v2M4 12.5h8" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round"/>
        </svg>
      ),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -8, scale: 0.97 }}
      animate={{ opacity: 1, y: 0,  scale: 1    }}
      exit={{    opacity: 0, y: -6, scale: 0.97 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      style={{
        position:     "absolute",
        top:          "calc(100% + 10px)",
        right:        0,
        width:        224,
        background:   "#FFFFFF",
        border:       "1.5px solid #EAE3FC",
        borderRadius: 18,
        boxShadow:    "0 12px 40px rgba(61,31,143,0.13), 0 2px 8px rgba(61,31,143,0.06)",
        overflow:     "hidden",
        zIndex:       60,
      }}
    >
      {/* Utility section */}
      <div style={{ padding: "8px 8px 6px" }}>
        {links.map((item) => (
          <a
            key={item.label}
            href="#"
            onClick={onClose}
            style={{
              display:        "flex",
              alignItems:     "center",
              gap:            10,
              padding:        "9px 12px",
              borderRadius:   11,
              textDecoration: "none",
              color:          "#2A1060",
              fontFamily:     "var(--font-inter)",
              fontSize:       13,
              fontWeight:     500,
              transition:     "background 0.15s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#F3EEFF"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
          >
            <span style={{ color: "#8B6FCC", flexShrink: 0 }}>{item.icon}</span>
            {item.label}
          </a>
        ))}
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: "#EDE9FB", margin: "0 12px" }} />

      {/* Auth section */}
      <div style={{ padding: "8px 8px 8px" }}>
        {/* Login + Sign Up row */}
        <div style={{ display: "flex", gap: 7, padding: "4px 4px 6px" }}>
          <a
            href="#"
            onClick={onClose}
            style={{
              flex:           1,
              display:        "flex",
              alignItems:     "center",
              justifyContent: "center",
              padding:        "8px 0",
              borderRadius:   10,
              background:     "#3D1F8F",
              color:          "#FFFFFF",
              fontFamily:     "var(--font-inter)",
              fontSize:       12.5,
              fontWeight:     600,
              textDecoration: "none",
              transition:     "background 0.15s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#2D1470"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#3D1F8F"; }}
          >
            Login
          </a>
          <a
            href="#"
            onClick={onClose}
            style={{
              flex:           1,
              display:        "flex",
              alignItems:     "center",
              justifyContent: "center",
              padding:        "8px 0",
              borderRadius:   10,
              background:     "transparent",
              border:         "1.5px solid #C4B8EE",
              color:          "#3D1F8F",
              fontFamily:     "var(--font-inter)",
              fontSize:       12.5,
              fontWeight:     600,
              textDecoration: "none",
              transition:     "background 0.15s, border-color 0.15s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background   = "#F3EEFF";
              el.style.borderColor  = "#9B7FD4";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background   = "transparent";
              el.style.borderColor  = "#C4B8EE";
            }}
          >
            Sign Up
          </a>
        </div>

        {/* Logout */}
        <a
          href="#"
          onClick={onClose}
          style={{
            display:        "flex",
            alignItems:     "center",
            justifyContent: "center",
            gap:            6,
            padding:        "7px 12px",
            borderRadius:   11,
            textDecoration: "none",
            color:          "#9B8FBE",
            fontFamily:     "var(--font-inter)",
            fontSize:       12,
            fontWeight:     400,
            transition:     "color 0.15s, background 0.15s",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.color      = "#6B4FB3";
            el.style.background = "#F7F4FF";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.color      = "#9B8FBE";
            el.style.background = "transparent";
          }}
        >
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
            <path d="M9.5 4.5L12 7l-2.5 2.5M12 7H5.5M7 2H3a1 1 0 00-1 1v8a1 1 0 001 1h4" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Logout
        </a>
      </div>
    </motion.div>
  );
}

// ─── Main Navbar ───────────────────────────────────────────────────────────────
export default function Navbar() {
  const { count: CART_COUNT } = useCart();
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [activeMenu,  setActiveMenu]  = useState<string | null>(null);
  const [accountOpen, setAccountOpen] = useState(false);
  const closeTimer                    = useRef<ReturnType<typeof setTimeout> | null>(null);
  const accountRef                    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close account dropdown on outside click or Escape
  useEffect(() => {
    if (!accountOpen) return;
    const onDown = (e: MouseEvent) => {
      if (accountRef.current && !accountRef.current.contains(e.target as Node)) {
        setAccountOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setAccountOpen(false); };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown",   onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown",   onKey);
    };
  }, [accountOpen]);

  // Hover-intent helpers — prevents flicker when cursor moves from link → panel
  const openMenu = (name: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(name);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 130);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const menuPanels: Record<string, React.ReactNode> = {
    Shop:    <ShopPanel />,
    Concern: <ConcernPanel />,
    Kids:    <KidsPanel />,
    Learn:   <LearnPanel />,
  };

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      onMouseLeave={scheduleClose}
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-t-[3px] border-[#3D1F8F] transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_16px_0_rgba(61,31,143,0.09)]" : "shadow-none"
      }`}
    >
      {/* ── Main bar ─────────────────────────────────────────────────────────── */}
      <div className="max-w-[1320px] mx-auto px-5 md:px-8 lg:px-12 h-[58px] flex items-center justify-between gap-4">

        {/* LEFT */}
        <div className="flex items-center gap-7 lg:gap-9 flex-shrink-0">

          {/* Logo */}
          <motion.a
            href="/"
            aria-label="Perfora home"
            whileHover={{ opacity: 0.82 }}
            transition={{ duration: 0.15 }}
            className="flex items-baseline leading-none select-none"
          >
            <span className="text-[#0D0B10]" style={{ fontFamily: "var(--spectral)", fontWeight: 700, fontSize: "clamp(22px,2.1vw,27px)", letterSpacing: "-0.02em" }}>
              perfora
            </span>
            <span className="text-[#0D0B10]" style={{ fontFamily: "var(--spectral)", fontWeight: 700, fontSize: "clamp(9px,0.9vw,11px)", verticalAlign: "super", lineHeight: 1, marginLeft: "1px" }}>
              ®
            </span>
          </motion.a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7" aria-label="Primary navigation">
            {["Shop", "Concern", "Kids", "Learn"].map((link) => (
              <button
                key={link}
                onMouseEnter={() => openMenu(link)}
                style={{
                  background:    "none",
                  border:        "none",
                  cursor:        "pointer",
                  padding:       "4px 0",
                  display:       "flex",
                  alignItems:    "center",
                  gap:           4,
                  fontFamily:    "var(--font-inter)",
                  fontSize:      13.5,
                  fontWeight:    activeMenu === link ? 600 : 400,
                  color:         activeMenu === link ? "#3D1F8F" : "#1A0A3D",
                  transition:    "color 0.15s, font-weight 0.15s",
                  whiteSpace:    "nowrap",
                }}
              >
                {link}
                <motion.svg
                  animate={{ rotate: activeMenu === link ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  width="10" height="10" viewBox="0 0 10 10" fill="none"
                  style={{ opacity: 0.6 }}
                >
                  <path d="M1.5 3.5L5 7 8.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </motion.svg>
              </button>
            ))}
          </nav>
        </div>

        {/* RIGHT — desktop */}
        <div className="hidden md:flex items-center gap-1.5">
          <div className="relative flex items-center">
            <span className="absolute left-3 pointer-events-none text-[#A094C0]">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="5.8" cy="5.8" r="4.05" stroke="currentColor" strokeWidth="1.35"/>
                <path d="M9.5 9.5L12 12" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round"/>
              </svg>
            </span>
            <input
              type="search"
              placeholder="Search"
              aria-label="Search products"
              className="h-[34px] pl-[30px] pr-4 rounded-full border border-[#E2DCF5] bg-[#F7F5FF] text-[13px] text-[#1A0A3D] placeholder:text-[#A094C0] focus:outline-none focus:border-[#6B4FB3] focus:bg-white transition-all duration-200"
              style={{ width: "clamp(160px,17vw,240px)", fontFamily: "var(--font-inter)" }}
            />
          </div>
          {/* Account icon + dropdown */}
          <div ref={accountRef} style={{ position: "relative" }}>
            <button
              aria-label="My account"
              aria-expanded={accountOpen}
              onClick={() => {
                setAccountOpen((v) => !v);
                // Close any open mega menu
                if (activeMenu) { setActiveMenu(null); }
              }}
              className="p-2 transition-colors rounded-full"
              style={{
                color:      accountOpen ? "#3D1F8F" : "#1A0A3D",
                background: accountOpen ? "#F0ECFF"  : "transparent",
              }}
              onMouseEnter={(e) => {
                if (!accountOpen) (e.currentTarget as HTMLElement).style.background = "#F5F3FF";
              }}
              onMouseLeave={(e) => {
                if (!accountOpen) (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="6.5" r="3.25" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M3.25 17.5c0-3.176 3.022-5.75 6.75-5.75s6.75 2.574 6.75 5.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
            <AnimatePresence>
              {accountOpen && (
                <AccountDropdown onClose={() => setAccountOpen(false)} />
              )}
            </AnimatePresence>
          </div>
          <button aria-label={`Cart, ${CART_COUNT} items`} className="p-2 relative text-[#1A0A3D] hover:text-[#3D1F8F] transition-colors rounded-full hover:bg-[#F5F3FF]">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M6.75 7.25V6A3.25 3.25 0 0 1 13.25 6v1.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <rect x="2.75" y="7.25" width="14.5" height="10.5" rx="2" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            <span className="absolute -top-[1px] -right-[1px] min-w-[16px] h-4 bg-[#3D1F8F] text-white rounded-full flex items-center justify-center leading-none" style={{ fontSize: "9px", fontFamily: "var(--font-inter)", fontWeight: 600, padding: "0 3px" }} aria-hidden>
              {CART_COUNT}
            </span>
          </button>
        </div>

        {/* MOBILE right */}
        <div className="flex md:hidden items-center gap-0.5">
          <button aria-label={`Cart, ${CART_COUNT} items`} className="p-2 relative text-[#1A0A3D]">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M6.75 7.25V6A3.25 3.25 0 0 1 13.25 6v1.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <rect x="2.75" y="7.25" width="14.5" height="10.5" rx="2" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            <span className="absolute top-1 right-1 min-w-[14px] h-[14px] bg-[#3D1F8F] text-white rounded-full flex items-center justify-center leading-none" style={{ fontSize: "8px", fontFamily: "var(--font-inter)", fontWeight: 600, padding: "0 2px" }} aria-hidden>
              {CART_COUNT}
            </span>
          </button>
          <button
            className="p-2 flex flex-col gap-[5px]"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <motion.span animate={menuOpen ? { rotate: 45, y: 7 }  : { rotate: 0, y: 0 }}  transition={{ duration: 0.25 }} className="block w-5 h-px bg-[#1A0A3D] origin-center"/>
            <motion.span animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }} transition={{ duration: 0.2 }} className="block w-5 h-px bg-[#1A0A3D]"/>
            <motion.span animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} transition={{ duration: 0.25 }} className="block w-5 h-px bg-[#1A0A3D] origin-center"/>
          </button>
        </div>
      </div>

      {/* ── Desktop mega menus ────────────────────────────────────────────────── */}
      <AnimatePresence>
        {activeMenu && menuPanels[activeMenu] && (
          <motion.div
            key={activeMenu}
            variants={megaVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.22, ease: "easeOut" }}
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
            style={{
              position:        "absolute",
              top:             "100%",
              left:            0,
              right:           0,
              background:      "rgba(255,255,255,0.97)",
              backdropFilter:  "blur(12px)",
              borderTop:       "1px solid #EDE9FB",
              borderBottom:    "1px solid #EDE9FB",
              boxShadow:       "0 16px 48px rgba(61,31,143,0.09)",
              zIndex:          40,
            }}
          >
            <div style={{ maxWidth: 1280, margin: "0 auto" }}>
              {menuPanels[activeMenu]}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Mobile full-screen drawer ─────────────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden"
            style={{
              position:   "fixed",
              inset:      0,
              zIndex:     100,
              background: "#EEEDF5",
              overflowY:  "auto",
              overflowX:  "hidden",
            }}
          >
            <div style={{ padding: "16px 22px 40px", position: "relative" }}>

              {/* Header: logo row then Menu row */}
              <div style={{ marginBottom: 20 }}>
                {/* Top row: logo + X */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/perfora-logo.png"
                    alt="Perfora"
                    style={{ height: 28, width: "auto", objectFit: "contain", opacity: 0.85 }}
                  />
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  style={{
                    width:          40,
                    height:         40,
                    borderRadius:   "50%",
                    border:         "1.5px solid #D4CBF0",
                    background:     "white",
                    display:        "flex",
                    alignItems:     "center",
                    justifyContent: "center",
                    cursor:         "pointer",
                    color:          "#1A0A3D",
                    flexShrink:     0,
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </button>
                </div>
                {/* Menu heading below logo */}
                <h2 style={{ fontFamily: "var(--font-inter)", fontSize: 26, fontWeight: 700, color: "#1A0A3D", margin: 0 }}>Menu</h2>
              </div>

              {/* Your account Login */}
              <p style={{ fontFamily: "var(--font-inter)", fontSize: 18, color: "#1A0A3D", marginBottom: 24 }}>
                Your account{" "}
                <a href="#" style={{ color: "#3D1F8F", fontWeight: 700, textDecoration: "underline", fontSize: 18 }}>Login</a>
              </p>

              {/* SHOP ALL */}
              <p style={{ fontFamily: "var(--font-inter)", fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9B8CB8", marginBottom: 12 }}>
                Shop All
              </p>

              {/* 3×3 grid */}
              <div
                style={{
                  display:             "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap:                 10,
                  marginBottom:        28,
                }}
              >
                {MOBILE_SHOP.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      display:        "flex",
                      flexDirection:  "column",
                      alignItems:     "center",
                      justifyContent: "center",
                      gap:            8,
                      padding:        "14px 8px",
                      borderRadius:   16,
                      background:     item.active ? "#EDE8FF" : "#FFFFFF",
                      border:         item.active ? "1.5px solid #C4B5F0" : "1.5px solid transparent",
                      textDecoration: "none",
                      color:          "#1A0A3D",
                    }}
                  >
                    <span style={{ color: item.active ? "#3D1F8F" : "#5A5070" }}>{item.icon}</span>
                    <span style={{
                      fontFamily: "var(--font-inter)",
                      fontSize:   11,
                      fontWeight: item.active ? 700 : 500,
                      color:      item.active ? "#3D1F8F" : "#1A0A3D",
                      textAlign:  "center",
                      lineHeight: 1.3,
                    }}>
                      {item.label}
                    </span>
                  </a>
                ))}
              </div>

              {/* ORAL CONCERNS */}
              <p style={{ fontFamily: "var(--font-inter)", fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9B8CB8", marginBottom: 12 }}>
                Oral Concerns
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 2, marginBottom: 28 }}>
                {MOBILE_CONCERNS.map((item) => (
                  <a
                    key={item.key}
                    href="#"
                    onClick={() => setMenuOpen(false)}
                    style={{
                      display:        "flex",
                      alignItems:     "center",
                      gap:            14,
                      padding:        "14px 4px",
                      borderBottom:   "1px solid rgba(61,31,143,0.08)",
                      textDecoration: "none",
                    }}
                  >
                    <span style={{
                      width:          36,
                      height:         36,
                      borderRadius:   "50%",
                      background:     "#EDE8FF",
                      display:        "flex",
                      alignItems:     "center",
                      justifyContent: "center",
                      flexShrink:     0,
                    }}>
                      {item.icon}
                    </span>
                    <span style={{ fontFamily: "var(--font-inter)", fontSize: 15, fontWeight: 500, color: "#1A0A3D", flex: 1 }}>
                      {item.label}
                    </span>
                    {item.recommended && (
                      <span style={{
                        fontFamily:    "var(--font-inter)",
                        fontSize:      9,
                        fontWeight:    700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color:         "#3D1F8F",
                        border:        "1.5px solid #3D1F8F",
                        borderRadius:  20,
                        padding:       "3px 8px",
                        whiteSpace:    "nowrap",
                      }}>
                        Recommended
                      </span>
                    )}
                  </a>
                ))}
              </div>

              {/* Happy to Help footer */}
              <div style={{
                background:   "white",
                borderRadius: 16,
                padding:      "18px 16px",
                marginBottom: 36,
              }}>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#3D1F8F", marginBottom: 12, textAlign: "center" }}>
                  Happy to Help!
                </p>
                <div style={{ display: "flex", gap: 16, marginBottom: 8 }}>
                  <a href="tel:+919999289288" style={{ display: "flex", alignItems: "center", gap: 7, textDecoration: "none" }}>
                    <span style={{ width: 22, height: 22, borderRadius: "50%", background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </span>
                    <span style={{ fontFamily: "var(--font-inter)", fontSize: 13, fontWeight: 600, color: "#1A0A3D" }}>+91 9999289288</span>
                  </a>
                  <a href="mailto:hello@perfora.com" style={{ display: "flex", alignItems: "center", gap: 7, textDecoration: "none" }}>
                    <span style={{ width: 22, height: 22, borderRadius: "50%", background: "#3D1F8F", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="11" height="8" viewBox="0 0 20 14" fill="white">
                        <path d="M18 0H2C.9 0 0 .9 0 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V2l8 5 8-5v2z"/>
                      </svg>
                    </span>
                    <span style={{ fontFamily: "var(--font-inter)", fontSize: 13, fontWeight: 600, color: "#3D1F8F" }}>hello@perfora.com</span>
                  </a>
                </div>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: 11.5, color: "#888", margin: 0 }}>
                  We&rsquo;re here to help Monday–Saturday, 10 AM to 6 PM.
                </p>
              </div>

              {/* Large logo watermark */}
              <div
                aria-hidden
                style={{
                  textAlign:     "center",
                  userSelect:    "none",
                  pointerEvents: "none",
                  paddingBottom: 8,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/perfora-logo.png"
                  alt=""
                  style={{
                    height:    "clamp(48px,16vw,72px)",
                    width:     "auto",
                    objectFit: "contain",
                    opacity:   0.10,
                  }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
