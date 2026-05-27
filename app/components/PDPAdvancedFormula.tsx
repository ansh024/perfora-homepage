"use client";

import Image from "next/image";

const INGREDIENTS = [
  {
    id: "i1",
    chip: "InnerCare PurWhite19™",
    title: "Color Correction Complex",
    desc: "Our proprietary blend uses micro colour correction to neutralise yellow stains at the molecular level, restoring natural tooth brightness.",
  },
  {
    id: "i2",
    chip: "InnerCare PurWhite19™",
    title: "PAP Technology",
    desc: "Peroxide-free PAP formula whitens without sensitivity — breaks down deep-set stains while preserving enamel integrity.",
  },
  {
    id: "i3",
    chip: "InnerCare PurWhite19™",
    title: "Hydroxyapatite",
    desc: "Natural enamel-identical mineral that remineralises the tooth surface, filling micro-cracks and strengthening the enamel layer.",
  },
  {
    id: "i4",
    chip: "InnerCare PurWhite19™",
    title: "Potassium Nitrate",
    desc: "Clinically proven sensitivity-blocker that reduces nerve signal transmission, ensuring a comfortable whitening experience.",
  },
];

export default function PDPAdvancedFormula() {
  return (
    <section style={{ background: "#FFFFFF", padding: "48px 0" }}>

      {/* Heading */}
      <div style={{ padding: "0 20px", marginBottom: 24 }}>
        <h2
          style={{
            fontFamily: "var(--spectral)",
            fontSize: "clamp(1.4rem, 5.5vw, 2rem)",
            fontWeight: 600,
            lineHeight: 1.2,
            color: "#1A0A3D",
            marginBottom: 14,
          }}
        >
          Advanced{" "}
          <em style={{ fontStyle: "italic", fontWeight: 400, color: "#6B4FB3" }}>
            formula
          </em>{" "}
          for transformative whitening
        </h2>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            background: "#F0ECFF",
            color: "#5B21B6",
            fontSize: 11,
            fontWeight: 700,
            padding: "4px 14px",
            borderRadius: 999,
            fontFamily: "var(--font-inter)",
            letterSpacing: "0.04em",
          }}
        >
          InnerCare PurWhite19™
        </span>
      </div>

      {/* Horizontal scroll */}
      <div
        className="no-scrollbar"
        style={{
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          display: "flex",
          gap: 12,
          paddingLeft: 20,
          paddingRight: 20,
          paddingBottom: 8,
        }}
      >
        {INGREDIENTS.map((item) => (
          <div
            key={item.id}
            style={{
              flexShrink: 0,
              width: 220,
              borderRadius: 20,
              background: "linear-gradient(150deg, #4C1D95 0%, #7C3AED 100%)",
              padding: "20px 18px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            {/* Chip */}
            <span
              style={{
                display: "inline-flex",
                alignSelf: "flex-start",
                background: "rgba(255,255,255,0.18)",
                color: "#FFFFFF",
                fontSize: 9.5,
                fontWeight: 700,
                padding: "3px 10px",
                borderRadius: 999,
                fontFamily: "var(--font-inter)",
                letterSpacing: "0.05em",
              }}
            >
              {item.chip}
            </span>

            {/* Product image */}
            <div style={{ position: "relative", height: 110, width: "100%" }}>
              <Image
                src="/product-images/whitening-serum.webp"
                alt="Purple Magic Serum"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>

            {/* Text */}
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  marginBottom: 7,
                  lineHeight: 1.3,
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 12,
                  color: "rgba(255,255,255,0.78)",
                  lineHeight: 1.55,
                  margin: 0,
                }}
              >
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
