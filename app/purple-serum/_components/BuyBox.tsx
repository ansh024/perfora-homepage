"use client";

import { useState } from "react";
import Image from "next/image";

const SIZES = [
  {
    id: "2x60",
    label: "Pack of 2 — 60 ml",
    price: 933,
    mrp: 1086,
    discount: 15,
    badge: "Best Value",
  },
  {
    id: "3x50",
    label: "Pack of 3 — 50 ml",
    price: 1299,
    mrp: 1599,
    discount: 19,
    badge: "Most Popular",
  },
];

const TRUST = [
  { icon: "🚚", label: "Free Shipping", sub: "Over ₹999" },
  { icon: "↩", label: "30-Day Returns", sub: "Easy & Hassle-Free" },
  { icon: "🔒", label: "Secure Checkout", sub: "256-bit SSL" },
];

const BENEFITS = [
  "Whitens teeth up to 8 shades in 7 days",
  "100% peroxide-free — zero sensitivity",
  "Safe for enamel & gums",
  "Clinically tested on 40 subjects",
];

export default function BuyBox() {
  const [selectedSize, setSelectedSize] = useState(SIZES[0].id);
  const selected = SIZES.find((s) => s.id === selectedSize)!;

  return (
    <section
      id="buy"
      style={{
        background: "#FFFFFF",
        padding: "72px 20px",
        borderTop: "1px solid #F0ECFF",
      }}
    >
      <div
        className="buybox-grid"
        style={{ maxWidth: 1100, margin: "0 auto" }}
      >
        {/* ── Image column ── */}
        <div>
          {/* Main product image */}
          <div
            style={{
              borderRadius: 24,
              overflow: "hidden",
              background: "linear-gradient(135deg, #F6F1FF 0%, #EDE9FB 100%)",
              position: "relative",
              aspectRatio: "1 / 1",
              marginBottom: 16,
              boxShadow: "0 4px 40px rgba(107,79,179,0.12)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 14,
                left: 14,
                background: "#15803D",
                color: "#fff",
                padding: "5px 14px",
                borderRadius: 999,
                fontSize: 11,
                fontWeight: 700,
                fontFamily: "var(--font-inter)",
                zIndex: 1,
                letterSpacing: "0.03em",
              }}
            >
              ✓ Clinically Proven
            </div>
            <Image
              src="/product-images/whitening-serum.webp"
              alt="Perfora Purple Magic Whitening Serum bottle — 60ml"
              fill
              priority
              style={{ objectFit: "contain", padding: 36 }}
            />
          </div>

          {/* Social proof stat */}
          <div
            style={{
              background: "#1A0A3D",
              borderRadius: 16,
              padding: "18px 22px",
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <span style={{ fontSize: 32, lineHeight: 1 }}>🦷</span>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 800,
                  fontSize: 16,
                  color: "#FFFFFF",
                  margin: "0 0 2px",
                }}
              >
                1 million+ people
              </p>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 12,
                  color: "#C4B5FD",
                  margin: 0,
                }}
              >
                have seen a change in tooth color
              </p>
            </div>
          </div>

          {/* Benefit checklist (desktop only) */}
          <div
            className="buybox-benefits"
            style={{
              marginTop: 20,
              padding: "18px 20px",
              background: "#F5F3FF",
              borderRadius: 16,
            }}
          >
            {BENEFITS.map((b) => (
              <div
                key={b}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  marginBottom: 10,
                }}
              >
                <span
                  style={{
                    width: 20,
                    height: 20,
                    background: "#6B4FB3",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: 1,
                  }}
                >
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path
                      d="M1 4L3.5 6.5L9 1"
                      stroke="#fff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: 13,
                    color: "#374151",
                    lineHeight: 1.5,
                  }}
                >
                  {b}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Info column ── */}
        <div>
          {/* Rating */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 12,
            }}
          >
            <div style={{ display: "flex", gap: 2 }}>
              {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} width="16" height="16" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M6 1l1.18 2.56 2.82.4-2.04 1.99.48 2.81L6 7.38 3.56 8.76l.48-2.81L2 3.96l2.82-.4L6 1z"
                    fill={s <= 4 ? "#F5A623" : "#F5A623"}
                  />
                </svg>
              ))}
            </div>
            <span
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 13,
                color: "#6B7280",
                fontWeight: 500,
              }}
            >
              4.8 | 2,500+ reviews
            </span>
          </div>

          {/* Product name */}
          <h2
            style={{
              fontFamily: "var(--spectral)",
              fontSize: "clamp(22px, 2.5vw, 30px)",
              fontWeight: 700,
              color: "#1A0A3D",
              lineHeight: 1.25,
              marginBottom: 18,
            }}
          >
            Purple Serum — Instant Teeth Whitening Solution
          </h2>

          {/* Trust badges row */}
          <div
            style={{
              display: "flex",
              gap: 12,
              marginBottom: 22,
              paddingBottom: 22,
              borderBottom: "1px solid #F3F4F6",
              flexWrap: "wrap",
            }}
          >
            {TRUST.map((t) => (
              <div
                key={t.label}
                style={{ display: "flex", alignItems: "center", gap: 7 }}
              >
                <span style={{ fontSize: 18 }}>{t.icon}</span>
                <div
                  style={{
                    fontFamily: "var(--font-inter)",
                    lineHeight: 1.25,
                  }}
                >
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: "#1A0A3D",
                      display: "block",
                    }}
                  >
                    {t.label}
                  </span>
                  <span style={{ fontSize: 11, color: "#9CA3AF" }}>{t.sub}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Price */}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 10,
              marginBottom: 22,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 34,
                fontWeight: 800,
                color: "#1A0A3D",
              }}
            >
              ₹{selected.price.toLocaleString("en-IN")}
            </span>
            <span
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 16,
                color: "#9CA3AF",
                textDecoration: "line-through",
              }}
            >
              ₹{selected.mrp.toLocaleString("en-IN")}
            </span>
            <span
              style={{
                background: "rgba(22,163,74,0.12)",
                color: "#15803D",
                fontSize: 13,
                fontWeight: 700,
                padding: "4px 12px",
                borderRadius: 999,
                fontFamily: "var(--font-inter)",
              }}
            >
              Save {selected.discount}%
            </span>
          </div>

          {/* Size selector */}
          <div style={{ marginBottom: 24 }}>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 11,
                fontWeight: 700,
                color: "#9CA3AF",
                textTransform: "uppercase",
                letterSpacing: "0.09em",
                marginBottom: 10,
              }}
            >
              SIZE
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {SIZES.map((s) => {
                const active = selectedSize === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => setSelectedSize(s.id)}
                    style={{
                      padding: "13px 18px",
                      borderRadius: 14,
                      border: `2px solid ${active ? "#6B4FB3" : "#E5E7EB"}`,
                      background: active ? "#F0ECFF" : "#FAFAFA",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      transition: "all 0.15s ease",
                    }}
                  >
                    <div style={{ textAlign: "left" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontSize: 14,
                          fontWeight: 600,
                          color: active ? "#6B4FB3" : "#374151",
                          display: "block",
                          marginBottom: 2,
                        }}
                      >
                        {s.label}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontSize: 11,
                          color: active ? "#6B4FB3" : "#9CA3AF",
                          fontWeight: active ? 600 : 400,
                        }}
                      >
                        {s.badge}
                      </span>
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: 15,
                        fontWeight: 700,
                        color: active ? "#6B4FB3" : "#374151",
                      }}
                    >
                      ₹{s.price.toLocaleString("en-IN")}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <button
              style={{
                width: "100%",
                padding: "17px",
                background: "#1A0A3D",
                color: "#FFFFFF",
                borderRadius: 50,
                border: "none",
                fontFamily: "var(--font-inter)",
                fontSize: 16,
                fontWeight: 700,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                letterSpacing: "0.01em",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Add to Cart
            </button>
            <button
              style={{
                width: "100%",
                padding: "16px",
                background: "transparent",
                color: "#1A0A3D",
                borderRadius: 50,
                border: "2px solid #1A0A3D",
                fontFamily: "var(--font-inter)",
                fontSize: 16,
                fontWeight: 700,
                cursor: "pointer",
                letterSpacing: "0.01em",
              }}
            >
              Buy It Now
            </button>
          </div>

          {/* Micro guarantee */}
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 12,
              color: "#9CA3AF",
              textAlign: "center",
              marginTop: 14,
            }}
          >
            🔒 &nbsp;30-day money-back guarantee · Secure checkout
          </p>
        </div>
      </div>
    </section>
  );
}
