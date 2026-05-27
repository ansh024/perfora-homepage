"use client";

import { useState } from "react";
import Image from "next/image";

// ─── Constants ────────────────────────────────────────────────────────────────
const NAV_H = 61;

// ─── Product data ─────────────────────────────────────────────────────────────
const PRODUCT = {
  name: "Purple Magic Teeth Whitening Serum - 30ml / 1.01oz",
  rating: 4.7,
  reviewCount: 1200,
  image: "/product-images/whitening-serum.webp",
  sizes: [
    { id: "30ml", label: "30ml / 1.01oz", price: 1386, originalPrice: 1699, discount: 18 },
  ],
  trustBadges: [
    { emoji: "🚚", line1: "Free", line2: "Delivery" },
    { emoji: "↩", line1: "Easy", line2: "Returns" },
    { emoji: "🛡", line1: "Authentic", line2: "Products" },
    { emoji: "💳", line1: "Pay", line2: "Later" },
  ],
  benefits: [
    "Whitens teeth up to 8 shades in 7 days",
    "100% peroxide-free — no sensitivity",
    "Safe for enamel & gums",
    "Long-lasting colour correction",
    "Clinically tested on 40 subjects",
  ],
  howToUse: [
    "Apply a thin layer of serum onto teeth using the applicator.",
    "Leave on for 30 minutes — don't eat or drink.",
    "Rinse thoroughly with water.",
    "Use once daily for best results.",
  ],
  ingredients:
    "Aqua, Glycerin, Hydroxyapatite, PAP (Phthalimidoperoxycaproic Acid), Potassium Nitrate, Xylitol, Menthol, Carbomer, Sodium Hydroxide, Tetrasodium EDTA.",
  bundles: [
    {
      id: "b1",
      name: "Power Flosser — Sterling Grey",
      image: "/product-images/power-flosser.webp",
      price: 1999,
      originalPrice: 2499,
      saveLabel: "Save 20%",
    },
    {
      id: "b2",
      name: "Whitening Strips Pro",
      image: "/product-images/whitening-strips-pro.webp",
      price: 899,
      originalPrice: 1199,
      saveLabel: "Save 25%",
    },
  ],
};

// ─── Stars ────────────────────────────────────────────────────────────────────
function Stars({ rating, size = 12 }: { rating: number; size?: number }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} width={size} height={size} viewBox="0 0 12 12" fill="none">
          <path
            d="M6 1l1.18 2.56 2.82.4-2.04 1.99.48 2.81L6 7.38 3.56 8.76l.48-2.81L2 3.96l2.82-.4L6 1z"
            fill={s <= Math.round(rating) ? "#F5A623" : "#E5E7EB"}
          />
        </svg>
      ))}
    </div>
  );
}

// ─── Accordion ────────────────────────────────────────────────────────────────
function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid #EBEBEB" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 20px",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 14,
            fontWeight: 600,
            color: "#1A0A3D",
          }}
        >
          {title}
        </span>
        <span
          style={{
            fontSize: 22,
            fontWeight: 300,
            color: "#6B4FB3",
            lineHeight: 1,
            display: "inline-block",
            transform: open ? "rotate(45deg)" : "none",
            transition: "transform 0.2s ease",
          }}
        >
          +
        </span>
      </button>
      {open && (
        <div
          style={{
            padding: "0 20px 20px",
            fontFamily: "var(--font-inter)",
            fontSize: 13,
            color: "#555",
            lineHeight: 1.65,
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function PDPHero() {
  const size = PRODUCT.sizes[0];

  return (
    <section style={{ paddingTop: NAV_H, background: "#FFFFFF" }}>

      {/* ── Product image ── */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "1 / 1",
          background: "#F6F1FF",
        }}
      >
        <Image
          src={PRODUCT.image}
          alt={PRODUCT.name}
          fill
          priority
          style={{ objectFit: "contain", padding: 32 }}
        />
      </div>

      {/* ── Info block ── */}
      <div style={{ padding: "20px 20px 0" }}>

        {/* Rating row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: 10,
          }}
        >
          <Stars rating={PRODUCT.rating} />
          <span
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 12,
              color: "#6B7280",
              fontWeight: 500,
            }}
          >
            {PRODUCT.reviewCount.toLocaleString("en-IN")}+ Reviews
          </span>
          <span
            style={{
              background: "#DCFCE7",
              color: "#15803D",
              fontSize: 10,
              fontWeight: 700,
              padding: "3px 10px",
              borderRadius: 999,
              fontFamily: "var(--font-inter)",
            }}
          >
            ✓ Clinically Tested
          </span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 18,
            fontWeight: 700,
            color: "#1A0A3D",
            lineHeight: 1.4,
            marginBottom: 20,
          }}
        >
          {PRODUCT.name}
        </h1>

        {/* Size selector */}
        <div style={{ marginBottom: 16 }}>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 11,
              fontWeight: 700,
              color: "#9CA3AF",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: 8,
            }}
          >
            Select Size
          </p>
          <div style={{ display: "flex", gap: 8 }}>
            {PRODUCT.sizes.map((s) => (
              <button
                key={s.id}
                style={{
                  padding: "9px 18px",
                  borderRadius: 10,
                  border: "2px solid #6B4FB3",
                  background: "#F0ECFF",
                  color: "#6B4FB3",
                  fontFamily: "var(--font-inter)",
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Price row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 6,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 24,
              fontWeight: 800,
              color: "#1A0A3D",
            }}
          >
            ₹{size.price.toLocaleString("en-IN")}
          </span>
          <span
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 14,
              color: "#9CA3AF",
              textDecoration: "line-through",
            }}
          >
            ₹{size.originalPrice.toLocaleString("en-IN")}
          </span>
          <span
            style={{
              background: "rgba(22,163,74,0.12)",
              color: "#15803D",
              fontSize: 12,
              fontWeight: 700,
              padding: "4px 10px",
              borderRadius: 999,
              fontFamily: "var(--font-inter)",
            }}
          >
            {size.discount}% OFF
          </span>
        </div>

        {/* Delivery note */}
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 12,
            color: "#6B7280",
            marginBottom: 20,
          }}
        >
          🚚 Free delivery on orders above ₹499
        </p>

        {/* Add to Cart */}
        <button
          style={{
            width: "100%",
            padding: "16px",
            background: "#1A0A3D",
            color: "#FFFFFF",
            fontFamily: "var(--font-inter)",
            fontSize: 15,
            fontWeight: 700,
            borderRadius: 50,
            border: "none",
            cursor: "pointer",
            letterSpacing: "0.02em",
            marginBottom: 24,
          }}
        >
          Add To Cart
        </button>

        {/* Trust badges */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 4,
            paddingBottom: 24,
            borderBottom: "1px solid #F3F4F6",
          }}
        >
          {PRODUCT.trustBadges.map((b) => (
            <div key={b.line1} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 22, marginBottom: 5 }}>{b.emoji}</div>
              <div
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 10,
                  color: "#374151",
                  fontWeight: 500,
                  lineHeight: 1.4,
                }}
              >
                {b.line1}
                <br />
                {b.line2}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Accordions ── */}
      <div style={{ marginTop: 8 }}>
        <Accordion title="Benefits">
          <ul style={{ paddingLeft: 16, margin: 0 }}>
            {PRODUCT.benefits.map((b, i) => (
              <li key={i} style={{ marginBottom: 6 }}>
                {b}
              </li>
            ))}
          </ul>
        </Accordion>
        <Accordion title="How To Use">
          <ol style={{ paddingLeft: 16, margin: 0 }}>
            {PRODUCT.howToUse.map((step, i) => (
              <li key={i} style={{ marginBottom: 8 }}>
                {step}
              </li>
            ))}
          </ol>
        </Accordion>
        <Accordion title="Ingredients">
          <p style={{ margin: 0 }}>{PRODUCT.ingredients}</p>
        </Accordion>
      </div>

      {/* ── Bundle section ── */}
      <div
        style={{
          background: "#F6F1FF",
          marginTop: 24,
          padding: "24px 20px",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 16,
            fontWeight: 700,
            color: "#1A0A3D",
            marginBottom: 16,
          }}
        >
          Bundle + Save
        </h3>
        {PRODUCT.bundles.map((bundle) => (
          <div
            key={bundle.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              background: "#FFFFFF",
              borderRadius: 16,
              padding: "12px 14px",
              marginBottom: 10,
              border: "1px solid rgba(107,79,179,0.1)",
            }}
          >
            <div
              style={{
                position: "relative",
                width: 60,
                height: 60,
                flexShrink: 0,
                borderRadius: 12,
                overflow: "hidden",
                background: "#F8F4FF",
              }}
            >
              <Image
                src={bundle.image}
                alt={bundle.name}
                fill
                style={{ objectFit: "contain", padding: 6 }}
              />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#1A0A3D",
                  lineHeight: 1.35,
                  marginBottom: 5,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {bundle.name}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#1A0A3D",
                  }}
                >
                  ₹{bundle.price.toLocaleString("en-IN")}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: 11,
                    color: "#9CA3AF",
                    textDecoration: "line-through",
                  }}
                >
                  ₹{bundle.originalPrice.toLocaleString("en-IN")}
                </span>
                <span
                  style={{
                    fontSize: 9,
                    fontWeight: 700,
                    color: "#15803D",
                    background: "rgba(22,163,74,0.1)",
                    padding: "2px 6px",
                    borderRadius: 999,
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  {bundle.saveLabel}
                </span>
              </div>
            </div>
            <button
              style={{
                flexShrink: 0,
                padding: "8px 20px",
                background: "#1A0A3D",
                color: "#FFFFFF",
                borderRadius: 999,
                border: "none",
                fontFamily: "var(--font-inter)",
                fontSize: 12,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Add
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
