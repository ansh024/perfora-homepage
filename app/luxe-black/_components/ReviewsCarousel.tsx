"use client";

import { useRef } from "react";

const REVIEWS = [
  {
    name: "Rohan K.",
    location: "Bengaluru",
    stars: 5,
    text: "The oscillating cleaning technology genuinely feels different from a regular brush — teeth feel noticeably cleaner and my gums stopped bleeding within two weeks.",
  },
  {
    name: "Ananya S.",
    location: "Mumbai",
    stars: 5,
    text: "Love the matte finish and how light it feels in hand. The travel case makes it easy to carry, and the battery genuinely lasts as long as they say.",
  },
  {
    name: "Vikram T.",
    location: "Delhi",
    stars: 4,
    text: "Switched from a manual brush and the difference in plaque removal is obvious. The three modes are handy — Whiten before an event, Massage on sensitive days.",
  },
  {
    name: "Meera P.",
    location: "Pune",
    stars: 5,
    text: "Got mine personalised with initials as a gift for my father — he's genuinely used it every single day since. Premium unboxing experience too.",
  },
  {
    name: "Aditya R.",
    location: "Hyderabad",
    stars: 5,
    text: "Rechargeable design means I'm not buying batteries every month. Charges fast and the indicator light is a nice touch.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} width="14" height="14" viewBox="0 0 12 12" fill="none">
          <path
            d="M6 1l1.18 2.56 2.82.4-2.04 1.99.48 2.81L6 7.38 3.56 8.76l.48-2.81L2 3.96l2.82-.4L6 1z"
            fill={s <= count ? "#F5A623" : "#E5E7EB"}
          />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <div>
      <div
        ref={trackRef}
        className="lb-reviews-track no-scrollbar"
        style={{
          display: "flex",
          gap: 20,
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          paddingBottom: 8,
        }}
      >
        {REVIEWS.map((r) => (
          <article
            key={r.name}
            style={{
              flex: "0 0 300px",
              scrollSnapAlign: "start",
              background: "#FFFFFF",
              border: "1px solid #EDE9FB",
              borderRadius: 16,
              padding: "28px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 14,
              boxShadow: "0 4px 24px rgba(61,31,143,0.06)",
            }}
          >
            <Stars count={r.stars} />
            <p style={{ fontFamily: "var(--font-inter)", fontSize: 13.5, color: "#1A0A3D", lineHeight: 1.7, margin: 0, flex: 1 }}>
              &ldquo;{r.text}&rdquo;
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #6B4FB3, #3D1F8F)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-inter)",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#fff",
                  flexShrink: 0,
                }}
              >
                {r.name[0]}
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: 13, fontWeight: 600, color: "#1A0A3D", margin: 0 }}>{r.name}</p>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: 11.5, color: "#1A0A3D", margin: 0 }}>{r.location} · Verified Buyer</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 24 }}>
        <button
          onClick={() => scrollBy(-1)}
          aria-label="Previous reviews"
          style={{
            width: 42,
            height: 42,
            borderRadius: "50%",
            border: "1px solid #E5E7EB",
            background: "#FFFFFF",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8l5 5" stroke="#1A0A3D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          onClick={() => scrollBy(1)}
          aria-label="Next reviews"
          style={{
            width: 42,
            height: 42,
            borderRadius: "50%",
            border: "1px solid #E5E7EB",
            background: "#FFFFFF",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 3l5 5-5 5" stroke="#1A0A3D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
