"use client";

import { useRef } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────
const RATING_BREAKDOWN = [
  { stars: 5, pct: 83 },
  { stars: 4, pct: 11 },
  { stars: 3, pct: 4 },
  { stars: 2, pct: 1 },
  { stars: 1, pct: 1 },
];

const REVIEW_PHOTOS = [
  "/dentist-photo.png",
  "/dentist-clinic.jpeg",
  "/product-images/whitening-serum.webp",
  "/product-images/whitening-strips-pro.webp",
];

const REVIEWS = [
  {
    id: "r1",
    name: "Pranya P.",
    location: "Mumbai",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    title: "Purple Magic",
    text: "I have already seen improvements in my teeth! They are looking bright and vibrant. I love the taste and received a good amount of the product.",
    tag: "Purple Magic",
    date: "2 weeks ago",
  },
  {
    id: "r2",
    name: "Ramen by Tarun",
    location: "Delhi",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    title: "Great product!",
    text: "My teeth look noticeably whiter after just one week of use. The formula is gentle and doesn't cause any sensitivity whatsoever.",
    tag: "Whitening Serum",
    date: "1 month ago",
  },
];

// ─── Stars row ────────────────────────────────────────────────────────────────
function StarRow({ rating, size = 13 }: { rating: number; size?: number }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <span
          key={s}
          style={{
            fontSize: size,
            color: s <= rating ? "#F5A623" : "#E5E7EB",
            lineHeight: 1,
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function PDPReviews() {
  const photoRef = useRef<HTMLDivElement>(null);

  return (
    <section style={{ background: "#FFFFFF", padding: "48px 0 44px" }}>
      <div style={{ padding: "0 20px" }}>
        <h2
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 20,
            fontWeight: 700,
            color: "#1A0A3D",
            marginBottom: 24,
          }}
        >
          Customer Reviews
        </h2>

        {/* Rating overview */}
        <div
          style={{
            display: "flex",
            gap: 20,
            alignItems: "flex-start",
            marginBottom: 28,
          }}
        >
          {/* Big number */}
          <div style={{ textAlign: "center", flexShrink: 0 }}>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 42,
                fontWeight: 800,
                color: "#1A0A3D",
                lineHeight: 1,
                marginBottom: 6,
              }}
            >
              4.75
            </p>
            <StarRow rating={5} size={15} />
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 11,
                color: "#9CA3AF",
                marginTop: 5,
                lineHeight: 1.4,
              }}
            >
              Based on
              <br />
              1016 reviews
            </p>
          </div>

          {/* Star bars */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 7,
              paddingTop: 4,
            }}
          >
            {RATING_BREAKDOWN.map(({ stars, pct }) => (
              <div
                key={stars}
                style={{ display: "flex", alignItems: "center", gap: 6 }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: 11,
                    color: "#6B7280",
                    width: 10,
                    textAlign: "right",
                    flexShrink: 0,
                  }}
                >
                  {stars}
                </span>
                <span style={{ color: "#F5A623", fontSize: 11, flexShrink: 0 }}>★</span>
                <div
                  style={{
                    flex: 1,
                    height: 6,
                    background: "#F3F4F6",
                    borderRadius: 999,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${pct}%`,
                      background: "#F5A623",
                      borderRadius: 999,
                    }}
                  />
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: 10,
                    color: "#9CA3AF",
                    width: 26,
                    textAlign: "right",
                    flexShrink: 0,
                  }}
                >
                  {pct}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Customer photos */}
      <div style={{ marginBottom: 28 }}>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 13,
            fontWeight: 600,
            color: "#1A0A3D",
            padding: "0 20px",
            marginBottom: 12,
          }}
        >
          Customer photos &amp; videos
        </p>
        <div
          ref={photoRef}
          className="no-scrollbar"
          style={{
            display: "flex",
            gap: 8,
            overflowX: "auto",
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          {REVIEW_PHOTOS.map((src, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                width: 88,
                height: 88,
                borderRadius: 12,
                overflow: "hidden",
                background: "#F3F4F6",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Review cards */}
      <div
        style={{
          padding: "0 20px",
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        {REVIEWS.map((review) => (
          <div
            key={review.id}
            style={{
              border: "1px solid #F3F4F6",
              borderRadius: 16,
              padding: "16px",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 10,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={review.avatar}
                alt={review.name}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  objectFit: "cover",
                  flexShrink: 0,
                }}
              />
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#1A0A3D",
                  }}
                >
                  {review.name}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: 11,
                    color: "#9CA3AF",
                  }}
                >
                  {review.location}
                </p>
              </div>
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  color: "#6B4FB3",
                  background: "#F0ECFF",
                  padding: "3px 8px",
                  borderRadius: 999,
                  fontFamily: "var(--font-inter)",
                  flexShrink: 0,
                }}
              >
                ✓ Verified
              </span>
            </div>

            <StarRow rating={review.rating} />

            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 14,
                fontWeight: 600,
                color: "#1A0A3D",
                margin: "8px 0 4px",
              }}
            >
              {review.title}
            </p>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 13,
                color: "#4B5563",
                lineHeight: 1.6,
                margin: "0 0 10px",
              }}
            >
              {review.text}
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: "#6B4FB3",
                  background: "#F0ECFF",
                  padding: "3px 10px",
                  borderRadius: 999,
                  fontFamily: "var(--font-inter)",
                }}
              >
                {review.tag}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 11,
                  color: "#9CA3AF",
                }}
              >
                {review.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
