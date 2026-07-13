"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const PRODUCT = { price: 2499, mrp: 3499 };

const INCLUDED = [
  "1 x Luxe Black Electric Toothbrush",
  "1 x Premium Travel Case",
  "1 x Charging Cable",
  "1 x Brush Head",
  "User Guide",
];

const TRUST = [
  { label: "2-Year Warranty" },
  { label: "Secure Payments" },
  { label: "Easy Returns" },
];

const CHIPS = [
  "Premium Travel Case",
  "Free Charger Included",
  "Rechargeable",
  "Personalisation Available",
  "Free Shipping",
];

function CheckIcon({ color = "#6B4FB3" }: { color?: string }) {
  return (
    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
      <path d="M1 4L3.5 6.5L9 1" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function BuyBox() {
  const [qty, setQty] = useState(1);
  const [showSticky, setShowSticky] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const discount = Math.round((1 - PRODUCT.price / PRODUCT.mrp) * 100);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowSticky(!entry.isIntersecting && entry.boundingClientRect.top < 0),
      { threshold: 0 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        id="buy"
        aria-label="Purchase Luxe Black Electric Toothbrush"
        style={{
          background: "#FFFFFF",
          padding: "88px 24px",
        }}
      >
        <div ref={sectionRef} className="lb-buy-grid" style={{ maxWidth: 1140, margin: "0 auto" }}>
          {/* ── Image column ── */}
          <div>
            <div
              style={{
                borderRadius: 28,
                overflow: "hidden",
                position: "relative",
                aspectRatio: "1 / 1",
                marginBottom: 20,
                boxShadow: "0 8px 48px rgba(61,31,143,0.10)",
              }}
            >
              <Image
                src="/luxe-black/product-main.png"
                alt="Perfora Luxe Black Electric Toothbrush with retail packaging"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 90vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* ── Info column ── */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 12,
                fontWeight: 700,
                color: "#6B4FB3",
                textTransform: "uppercase",
                letterSpacing: "0.09em",
                marginBottom: 10,
              }}
            >
              Perfora Electric Toothbrush
            </p>

            <h2
              style={{
                fontFamily: "var(--spectral)",
                fontSize: "clamp(24px, 2.6vw, 32px)",
                fontWeight: 700,
                color: "#1A0A3D",
                lineHeight: 1.2,
                marginBottom: 10,
              }}
            >
              Luxe Black Electric Toothbrush
            </h2>

            {/* Ratings summary */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
              <div style={{ display: "flex", gap: 2 }}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} width="14" height="14" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1l1.18 2.56 2.82.4-2.04 1.99.48 2.81L6 7.38 3.56 8.76l.48-2.81L2 3.96l2.82-.4L6 1z" fill="#F5A623" />
                  </svg>
                ))}
              </div>
              <span style={{ fontFamily: "var(--font-inter)", fontSize: 13, color: "#4B5563", fontWeight: 500 }}>
                4.7 &nbsp;·&nbsp; 3,200+ ratings
              </span>
            </div>

            {/* Price + delivery */}
            <div style={{ marginBottom: 22 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 8 }}>
                <span style={{ fontFamily: "var(--font-inter)", fontSize: 32, fontWeight: 800, color: "#1A0A3D" }}>
                  ₹{PRODUCT.price.toLocaleString("en-IN")}
                </span>
                <span style={{ fontFamily: "var(--font-inter)", fontSize: 15, color: "#9CA3AF", textDecoration: "line-through" }}>
                  ₹{PRODUCT.mrp.toLocaleString("en-IN")}
                </span>
                <span
                  style={{
                    background: "rgba(22,163,74,0.12)",
                    color: "#15803D",
                    fontSize: 12,
                    fontWeight: 700,
                    padding: "3px 11px",
                    borderRadius: 999,
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  Save {discount}%
                </span>
              </div>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: 12.5, color: "#6B7280", display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ color: "#6B4FB3" }}>●</span> Free delivery · Dispatched within 24 hours
              </p>
            </div>

            {/* Quantity */}
            <div style={{ marginBottom: 26 }}>
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
                Quantity
              </p>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  border: "1px solid #E5E7EB",
                  borderRadius: 999,
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  style={{ width: 40, height: 40, background: "none", border: "none", cursor: "pointer", fontSize: 18, color: "#1A0A3D" }}
                >
                  −
                </button>
                <span style={{ width: 36, textAlign: "center", fontFamily: "var(--font-inter)", fontWeight: 700, fontSize: 14, color: "#1A0A3D" }}>
                  {qty}
                </span>
                <button
                  onClick={() => setQty((q) => Math.min(9, q + 1))}
                  aria-label="Increase quantity"
                  style={{ width: 40, height: 40, background: "none", border: "none", cursor: "pointer", fontSize: 18, color: "#1A0A3D" }}
                >
                  +
                </button>
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 22 }}>
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
                  letterSpacing: "0.01em",
                }}
              >
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
                Express Checkout
              </button>
            </div>

            {/* Trust badges */}
            <div
              style={{
                display: "flex",
                gap: 18,
                flexWrap: "wrap",
                paddingBottom: 20,
                marginBottom: 20,
                borderBottom: "1px solid #F0ECFF",
              }}
            >
              {TRUST.map((t) => (
                <div key={t.label} style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  <span
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      background: "#EDE9FB",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <CheckIcon />
                  </span>
                  <span style={{ fontFamily: "var(--font-inter)", fontSize: 12.5, color: "#374151", fontWeight: 500 }}>{t.label}</span>
                </div>
              ))}
            </div>

            {/* What's included */}
            <div style={{ marginBottom: 22 }}>
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
                What&apos;s In The Box
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {INCLUDED.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ color: "#6B4FB3", fontSize: 13 }}>•</span>
                    <span style={{ fontFamily: "var(--font-inter)", fontSize: 13, color: "#4B5563" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature chips */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {CHIPS.map((c) => (
                <span
                  key={c}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 5,
                    background: "#F8F6FF",
                    border: "1px solid #EDE9FB",
                    borderRadius: 999,
                    padding: "6px 12px",
                    fontFamily: "var(--font-inter)",
                    fontSize: 11.5,
                    fontWeight: 600,
                    color: "#4B5563",
                  }}
                >
                  <span style={{ color: "#15803D" }}>✓</span> {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Sticky Add to Cart bar ── */}
      <div
        role="region"
        aria-label="Sticky purchase bar"
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: showSticky ? 0 : -100,
          zIndex: 200,
          background: "rgba(255,255,255,0.97)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderTop: "1px solid #EDE9FB",
          boxShadow: "0 -8px 30px rgba(0,0,0,0.08)",
          padding: "12px 20px",
          transition: "bottom 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1140,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 0 }}>
            <div style={{ position: "relative", width: 40, height: 40, borderRadius: 10, background: "#F5F3FF", flexShrink: 0, overflow: "hidden" }}>
              <Image src="/luxe-black/product-main.png" alt="" fill sizes="40px" style={{ objectFit: "contain", padding: 4 }} />
            </div>
            <div style={{ minWidth: 0 }}>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: 13, fontWeight: 700, color: "#1A0A3D", margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                Luxe Black Electric Toothbrush
              </p>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: 12.5, fontWeight: 700, color: "#6B4FB3", margin: 0 }}>
                ₹{PRODUCT.price.toLocaleString("en-IN")}
              </p>
            </div>
          </div>
          <a
            href="#buy"
            style={{
              flexShrink: 0,
              background: "#1A0A3D",
              color: "#fff",
              padding: "11px 22px",
              borderRadius: 50,
              fontFamily: "var(--font-inter)",
              fontSize: 13.5,
              fontWeight: 700,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Add to Cart
          </a>
        </div>
      </div>
    </>
  );
}
