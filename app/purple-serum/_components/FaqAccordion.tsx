"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "How quickly will I see results?",
    a: "Most customers notice whiter teeth within 3–5 uses. For best results, use daily as part of your brushing routine.",
  },
  {
    q: "Is it safe for sensitive teeth?",
    a: "Yes! Purple Serum is 100% peroxide-free and specifically formulated for sensitive teeth. It contains Potassium Nitrate to prevent sensitivity — zero pain, all gains.",
  },
  {
    q: "How do I use Purple Serum?",
    a: "Apply a few drops onto your toothbrush, brush for 2 minutes, then rinse thoroughly. Use once daily for best results.",
  },
  {
    q: "How long does one bottle last?",
    a: "A 60ml bottle (Pack of 2) lasts approximately 30 days per bottle with daily use — that's 60 days of whitening.",
  },
  {
    q: "Is it safe to use every day?",
    a: "Absolutely. Purple Serum is gentle enough for daily use. The enamel-safe formula contains no harsh chemicals or peroxide.",
  },
  {
    q: "Do you offer a money-back guarantee?",
    a: "We offer easy 30-day returns. If you're not satisfied with your results, contact our support team and we'll make it right.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        borderBottom: "1px solid #EDE9FB",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: 20,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 15,
            fontWeight: 600,
            color: "#1A0A3D",
            lineHeight: 1.45,
            flex: 1,
          }}
        >
          {q}
        </span>
        <span
          style={{
            flexShrink: 0,
            width: 30,
            height: 30,
            borderRadius: "50%",
            background: open ? "#6B4FB3" : "#EDE9FB",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.2s ease",
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            style={{
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s ease",
            }}
          >
            <path
              d="M2 4l4 4 4-4"
              stroke={open ? "#fff" : "#6B4FB3"}
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      {open && (
        <div
          style={{
            paddingBottom: 20,
            fontFamily: "var(--font-inter)",
            fontSize: 14,
            color: "#6B7280",
            lineHeight: 1.75,
          }}
        >
          {a}
        </div>
      )}
    </div>
  );
}

export default function FaqAccordion() {
  return (
    <div style={{ maxWidth: 760, margin: "0 auto" }}>
      {FAQS.map((faq) => (
        <FaqItem key={faq.q} q={faq.q} a={faq.a} />
      ))}
    </div>
  );
}
