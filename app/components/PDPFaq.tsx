"use client";

import { useState } from "react";

const CATEGORIES = [
  { id: "whitening", label: "Teeth\nWhitening", emoji: "🦷" },
  { id: "serum",     label: "Purple Serum\nFeatures", emoji: "💜" },
];

const FAQS = [
  {
    q: "Why should I use this serum?",
    a: "The Purple Magic Whitening Serum uses our proprietary PAP technology to whiten teeth without peroxide. It's clinically tested, enamel-safe, and delivers results in as little as 7 days.",
    cat: "whitening",
  },
  {
    q: "How does The Purple Serum help in teeth whitening?",
    a: "The serum contains PAP (Phthalimidoperoxycaproic Acid) which breaks down chromogens and tannins responsible for staining. Unlike peroxide, it doesn't cause sensitivity while effectively whitening.",
    cat: "serum",
  },
  {
    q: "How long does it take to show results?",
    a: "Most users notice visible whitening within 3–5 days. Optimal results (up to 8 shades whiter) are achieved with consistent use over 2–4 weeks.",
    cat: "whitening",
  },
  {
    q: "How is a serum used in Oral care?",
    a: "Apply a thin layer of the serum directly onto your teeth using the applicator. Leave it for 30 minutes, then rinse thoroughly. Use once daily for best results.",
    cat: "serum",
  },
  {
    q: "Are there any side effects of it?",
    a: "The serum is formulated to be gentle and sensitivity-free. It contains Potassium Nitrate to prevent sensitivity. If you experience any irritation, discontinue use and consult a dentist.",
    cat: "serum",
  },
  {
    q: "How does the Purple Serum last?",
    a: "One 30ml bottle typically lasts 30–45 days with daily use. Store in a cool, dry place away from direct sunlight.",
    cat: "serum",
  },
  {
    q: "Can children use this?",
    a: "This product is formulated for adults (18+). We recommend consulting a dentist before use for anyone under 18.",
    cat: "whitening",
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid #F3F4F6" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: 12,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 14,
            fontWeight: 600,
            color: "#1A0A3D",
            flex: 1,
            lineHeight: 1.4,
          }}
        >
          {question}
        </span>
        <span
          style={{
            flexShrink: 0,
            width: 26,
            height: 26,
            borderRadius: "50%",
            border: "1.5px solid #D1D5DB",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 18,
            fontWeight: 300,
            color: "#6B4FB3",
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
            paddingBottom: 16,
            fontFamily: "var(--font-inter)",
            fontSize: 13,
            color: "#6B7280",
            lineHeight: 1.65,
          }}
        >
          {answer}
        </div>
      )}
    </div>
  );
}

export default function PDPFaq() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? FAQS.filter((f) => f.cat === activeCategory)
    : FAQS;

  return (
    <section style={{ background: "#FFFFFF", padding: "48px 20px 60px" }}>
      <h2
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: 20,
          fontWeight: 700,
          color: "#1A0A3D",
          marginBottom: 24,
        }}
      >
        Frequently Asked Questions
      </h2>

      {/* Category chips */}
      <div
        style={{
          display: "flex",
          gap: 12,
          marginBottom: 24,
          paddingBottom: 20,
          borderBottom: "1px solid #F3F4F6",
        }}
      >
        {CATEGORIES.map((cat) => {
          const active = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() =>
                setActiveCategory(active ? null : cat.id)
              }
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
                padding: "12px 18px",
                borderRadius: 16,
                border: `2px solid ${active ? "#6B4FB3" : "#F3F4F6"}`,
                background: active ? "#F0ECFF" : "#FAFAFA",
                cursor: "pointer",
                minWidth: 110,
              }}
            >
              <span style={{ fontSize: 28 }}>{cat.emoji}</span>
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 11,
                  fontWeight: 600,
                  color: active ? "#6B4FB3" : "#374151",
                  textAlign: "center",
                  lineHeight: 1.35,
                  whiteSpace: "pre-line",
                }}
              >
                {cat.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* FAQ list */}
      <div>
        {filtered.map((faq, i) => (
          <FaqItem key={i} question={faq.q} answer={faq.a} />
        ))}
      </div>
    </section>
  );
}
