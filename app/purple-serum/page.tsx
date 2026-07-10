import type { Metadata } from "next";
import Image from "next/image";
import BuyBox from "./_components/BuyBox";
import FaqAccordion from "./_components/FaqAccordion";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Purple Magic Whitening Serum | Instant Teeth Whitening | Perfora",
  description:
    "Whiten your teeth instantly with Perfora's Purple Magic Whitening Serum. Color-correcting purple formula neutralizes stains and delivers a visibly brighter smile in seconds. 100% peroxide-free, enamel-safe, sensitivity-free. Trusted by 10,000+ happy customers. Shop now & get free shipping on orders over ₹999.",
  keywords: [
    "teeth whitening serum india",
    "purple teeth whitening",
    "instant teeth whitening serum",
    "perfora purple magic serum",
    "peroxide free whitening",
    "enamel safe teeth whitening",
    "sensitivity free whitening",
    "dentist approved whitening",
    "teeth whitening gel india",
    "yellow teeth whitening",
  ],
  openGraph: {
    title: "Purple Magic Whitening Serum | Perfora",
    description:
      "Whiten your teeth instantly. Color-correcting purple formula. No sensitivity. 10,000+ happy customers.",
    images: [{ url: "/product-images/whitening-serum.webp", width: 800, height: 800 }],
    type: "website",
    siteName: "Perfora",
  },
  twitter: {
    card: "summary_large_image",
    title: "Purple Magic Whitening Serum | Perfora",
    description:
      "Whiten your teeth instantly. Color-correcting purple formula. No sensitivity.",
    images: ["/product-images/whitening-serum.webp"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/purple-serum" },
};

// ─── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLdProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Perfora Purple Magic Teeth Whitening Serum",
  description:
    "A color-correcting purple formula that neutralizes yellow stains and delivers visibly whiter teeth in seconds. 100% peroxide-free, enamel-safe, and sensitivity-free. Clinically tested on 40 subjects.",
  brand: { "@type": "Brand", name: "Perfora" },
  image: "https://perforacare.com/cdn/shop/files/purple-magic-whitening-serum.webp",
  sku: "PRFR-PMWS-60ML",
  mpn: "PMWS-60ML",
  category: "Teeth Whitening",
  offers: [
    {
      "@type": "Offer",
      name: "Pack of 2 — 60 ml",
      price: "933",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2026-12-31",
      seller: { "@type": "Organization", name: "Perfora" },
    },
    {
      "@type": "Offer",
      name: "Pack of 3 — 50 ml",
      price: "1299",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2026-12-31",
      seller: { "@type": "Organization", name: "Perfora" },
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "2500",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Priya M." },
      reviewBody:
        "Best teeth whitening product I've tried! My teeth look so much whiter after just a week.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Arjun K." },
      reviewBody:
        "Skeptic turned believer — it actually works. Purple Serum actually works after the first few uses.",
    },
  ],
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How quickly will I see results from Purple Magic Whitening Serum?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most customers notice whiter teeth within 3–5 uses. For best results, use daily as part of your brushing routine.",
      },
    },
    {
      "@type": "Question",
      name: "Is Purple Magic Whitening Serum safe for sensitive teeth?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Purple Serum is 100% peroxide-free and formulated specifically for sensitive teeth. It contains Potassium Nitrate to prevent sensitivity — zero pain, all gains.",
      },
    },
    {
      "@type": "Question",
      name: "How do I use Perfora Purple Serum?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Apply a few drops onto your toothbrush, brush for 2 minutes, then rinse thoroughly. Use once daily for best results.",
      },
    },
    {
      "@type": "Question",
      name: "How long does one bottle of Purple Serum last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A 60ml bottle lasts approximately 30 days with daily use. The Pack of 2 gives you 60 days of whitening.",
      },
    },
    {
      "@type": "Question",
      name: "Is Purple Serum safe to use every day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Purple Serum is gentle enough for daily use. The enamel-safe formula contains no harsh chemicals or peroxide.",
      },
    },
    {
      "@type": "Question",
      name: "Does Perfora offer a money-back guarantee on Purple Serum?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer easy 30-day returns. If you're not satisfied, contact our support team and we'll make it right.",
      },
    },
  ],
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const TRUST_METRICS = [
  { stat: "10,000+", label: "Happy Customers" },
  { stat: "4.8★", label: "Average Rating" },
  { stat: "100%", label: "Dentist Approved" },
  { stat: "#1", label: "Teeth Whitening Serum" },
];

const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Apply the Serum",
    desc: "Squeeze a few drops onto your toothbrush or use the applicator directly on teeth.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" fill="#6B4FB3"/>
      </svg>
    ),
  },
  {
    step: "2",
    title: "Brush for 2 Minutes",
    desc: "Let the purple color-correcting formula neutralize stains and get to work.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V2l-1.5 1.5zM19 16H5V5h14v11zM7 7h10v2H7zm0 4h7v2H7z" fill="#6B4FB3"/>
      </svg>
    ),
  },
  {
    step: "3",
    title: "Reveal Your Smile",
    desc: "Rinse thoroughly and enjoy visibly whiter, brighter teeth from day one.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-4-4 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z" fill="#6B4FB3"/>
      </svg>
    ),
  },
];

const WHY_BENEFITS = [
  {
    emoji: "🟣",
    title: "Color-Correcting Formula",
    desc: "Purple pigment neutralizes yellow tones instantly — for a brighter smile without bleaching.",
  },
  {
    emoji: "🛡️",
    title: "Enamel Safe",
    desc: "Gentle on teeth, no harsh chemicals or bleach — yes, naturally effective ingredients.",
  },
  {
    emoji: "✨",
    title: "Sensitivity Free",
    desc: "Designed for all tooth types, even sensitive teeth — zero pain, all gains.",
  },
  {
    emoji: "⚡",
    title: "Fast Results",
    desc: "Visible whitening in as little as 3 uses — see the difference from day one.",
  },
];

const REVIEWS = [
  {
    stars: 5,
    title: "Best teeth whitening product I've tried!",
    body: "My teeth look so much whiter after just a week! The serum is so easy to use and doesn't cause any sensitivity. I've already recommended it to all my friends.",
    author: "Priya M.",
    location: "Mumbai",
    verified: true,
  },
  {
    stars: 5,
    title: "Skeptic turned believer — it actually works",
    body: "I was skeptical at first but wow — Purple Serum actually works! Noticed a difference after the first few uses. My morning routine just got an upgrade.",
    author: "Arjun K.",
    location: "Delhi",
    verified: true,
  },
  {
    stars: 5,
    title: "Gentle AND effective — I'm obsessed!",
    body: "Finally a teeth whitening product that's gentle AND effective. Not just slightly whiter — visibly brighter. I've been telling everyone about it.",
    author: "Shreya T.",
    location: "Bengaluru",
    verified: true,
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function PurpleSerumPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProduct) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* Global layout styles for this page */}
      <style>{`
        /* Layout grids */
        .ps-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 0;
        }
        .ps-hiw-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .ps-why-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        .ps-reviews-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .ps-trust-bar {
          display: flex;
          gap: 48px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .buybox-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }
        .ps-hero-img-col {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px 48px;
        }
        .ps-hero-text-col {
          padding: 60px 60px 60px 0;
        }
        .ps-hiw-arrow { display: block; }
        .buybox-benefits { display: block; }

        /* Mobile overrides */
        @media (max-width: 767px) {
          .ps-hero-grid {
            grid-template-columns: 1fr;
            min-height: unset;
          }
          .ps-hero-img-col {
            padding: 40px 24px 24px;
            order: -1;
          }
          .ps-hero-text-col {
            padding: 0 24px 48px;
            text-align: center;
          }
          .ps-hero-text-col .ps-hero-badges {
            justify-content: center;
          }
          .ps-hero-text-col .ps-hero-ctas {
            justify-content: center;
          }
          .ps-hiw-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .ps-hiw-arrow { display: none; }
          .ps-why-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .ps-reviews-grid {
            grid-template-columns: 1fr;
          }
          .ps-trust-bar {
            gap: 24px;
          }
          .buybox-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .buybox-benefits { display: none; }
        }

        /* Tablet */
        @media (min-width: 768px) and (max-width: 1023px) {
          .ps-hero-text-col { padding: 48px 40px 48px 0; }
          .ps-hero-img-col { padding: 48px 32px; }
          .ps-reviews-grid { grid-template-columns: 1fr 1fr; }
        }

        /* Animations */
        @keyframes ps-fadeup {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ps-animate { animation: ps-fadeup 0.6s ease both; }
        .ps-animate-d1 { animation-delay: 0.1s; }
        .ps-animate-d2 { animation-delay: 0.2s; }
        .ps-animate-d3 { animation-delay: 0.3s; }
      `}</style>

      <main style={{ fontFamily: "var(--font-inter)" }}>

        {/* ── Announcement Bar ─────────────────────────────────────────────── */}
        <div
          style={{
            background: "#1A0A3D",
            color: "#C4B5FD",
            textAlign: "center",
            padding: "10px 20px",
            fontFamily: "var(--font-inter)",
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: "0.03em",
          }}
        >
          🚚 &nbsp;Free shipping on orders over ₹999 &nbsp;·&nbsp; ★ Dentist Approved &nbsp;·&nbsp; 10,000+ Happy Customers
        </div>

        {/* ── Minimal Nav ──────────────────────────────────────────────────── */}
        <nav
          style={{
            position: "sticky",
            top: 0,
            zIndex: 100,
            background: "rgba(255,255,255,0.96)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderBottom: "1px solid #F0ECFF",
            padding: "14px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <a
            href="/"
            style={{
              fontFamily: "var(--spectral)",
              fontSize: 22,
              fontWeight: 700,
              color: "#1A0A3D",
              textDecoration: "none",
              letterSpacing: "-0.02em",
            }}
          >
            perfora
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <a
              href="#buy"
              style={{
                background: "#6B4FB3",
                color: "#fff",
                padding: "10px 22px",
                borderRadius: 50,
                fontFamily: "var(--font-inter)",
                fontSize: 13,
                fontWeight: 700,
                textDecoration: "none",
                letterSpacing: "0.01em",
              }}
            >
              Shop Now
            </a>
          </div>
        </nav>

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section
          aria-label="Hero — Purple Magic Whitening Serum"
          style={{
            background: "linear-gradient(135deg, #7C3AED 0%, #5B21B6 45%, #3D1F8F 100%)",
            overflow: "hidden",
          }}
        >
          <div
            className="ps-hero-grid"
            style={{ maxWidth: 1200, margin: "0 auto" }}
          >
            {/* Image col */}
            <div className="ps-hero-img-col">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: 420,
                  aspectRatio: "1 / 1",
                  filter: "drop-shadow(0 24px 60px rgba(0,0,0,0.35))",
                  mixBlendMode: "normal",
                }}
              >
                <Image
                  src="/product-images/whitening-serum.webp"
                  alt="Perfora Purple Magic Whitening Serum — 60ml bottle"
                  fill
                  priority
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>

            {/* Text col */}
            <div className="ps-hero-text-col">
              {/* Dentist approved badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  borderRadius: 999,
                  padding: "6px 14px",
                  marginBottom: 20,
                }}
              >
                <span style={{ fontSize: 14 }}>🦷</span>
                <span
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#E9D5FF",
                    letterSpacing: "0.04em",
                  }}
                >
                  DENTIST APPROVED
                </span>
              </div>

              <h1
                style={{
                  fontFamily: "var(--spectral)",
                  fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  lineHeight: 1.1,
                  marginBottom: 20,
                  letterSpacing: "-0.02em",
                }}
              >
                Whiten Your Teeth Instantly.
              </h1>

              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "clamp(14px, 1.5vw, 17px)",
                  color: "#DDD6FE",
                  lineHeight: 1.7,
                  marginBottom: 32,
                  maxWidth: 460,
                }}
              >
                The Purple Serum formula neutralizes stains and delivers a
                visibly brighter smile — in seconds. No peroxide, no pain, no
                sensitivity. Just results.
              </p>

              {/* CTA buttons */}
              <div
                className="ps-hero-ctas"
                style={{ display: "flex", gap: 12, marginBottom: 36, flexWrap: "wrap" }}
              >
                <a
                  href="#buy"
                  style={{
                    background: "#FFFFFF",
                    color: "#1A0A3D",
                    padding: "15px 30px",
                    borderRadius: 50,
                    fontFamily: "var(--font-inter)",
                    fontSize: 15,
                    fontWeight: 700,
                    textDecoration: "none",
                    letterSpacing: "0.01em",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                  }}
                >
                  Shop Now
                </a>
                <a
                  href="#how-it-works"
                  style={{
                    background: "transparent",
                    color: "#FFFFFF",
                    padding: "14px 28px",
                    borderRadius: 50,
                    fontFamily: "var(--font-inter)",
                    fontSize: 15,
                    fontWeight: 600,
                    textDecoration: "none",
                    border: "2px solid rgba(255,255,255,0.5)",
                  }}
                >
                  See How It Works
                </a>
              </div>

              {/* Trust badges */}
              <div
                className="ps-hero-badges"
                style={{ display: "flex", gap: 20, flexWrap: "wrap" }}
              >
                {[
                  { icon: "⭐", label: "10,000+ Happy Customers" },
                  { icon: "🦷", label: "Dentist Approved" },
                  { icon: "🚚", label: "Free Shipping on Orders Over ₹999" },
                ].map((b) => (
                  <div
                    key={b.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      fontFamily: "var(--font-inter)",
                      fontSize: 12,
                      color: "#DDD6FE",
                      fontWeight: 500,
                    }}
                  >
                    <span>{b.icon}</span>
                    <span>{b.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Trust Metrics Bar ────────────────────────────────────────────── */}
        <section
          aria-label="Trust metrics"
          style={{ background: "#FFFFFF", borderBottom: "1px solid #F0ECFF" }}
        >
          <div
            className="ps-trust-bar"
            style={{ maxWidth: 1100, margin: "0 auto", padding: "28px 24px" }}
          >
            {TRUST_METRICS.map((m) => (
              <div key={m.stat} style={{ textAlign: "center" }}>
                <p
                  style={{
                    fontFamily: "var(--spectral)",
                    fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                    fontWeight: 700,
                    color: "#1A0A3D",
                    margin: "0 0 2px",
                  }}
                >
                  {m.stat}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: 12,
                    color: "#6B7280",
                    margin: 0,
                    fontWeight: 500,
                  }}
                >
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── How It Works ─────────────────────────────────────────────────── */}
        <section
          id="how-it-works"
          aria-label="How It Works"
          style={{ background: "#F5F3FF", padding: "72px 24px" }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2
              style={{
                fontFamily: "var(--spectral)",
                fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                fontWeight: 700,
                color: "#1A0A3D",
                textAlign: "center",
                marginBottom: 8,
              }}
            >
              How It Works
            </h2>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 15,
                color: "#6B7280",
                textAlign: "center",
                marginBottom: 52,
              }}
            >
              3 simple steps to a visibly brighter smile
            </p>

            <div
              className="ps-hiw-grid"
              style={{ alignItems: "start", position: "relative" }}
            >
              {HOW_IT_WORKS.map((step, idx) => (
                <div key={step.step} style={{ position: "relative" }}>
                  {/* Arrow between steps */}
                  {idx < HOW_IT_WORKS.length - 1 && (
                    <div
                      className="ps-hiw-arrow"
                      style={{
                        position: "absolute",
                        right: -28,
                        top: 28,
                        zIndex: 1,
                        color: "#C4B5FD",
                        fontSize: 24,
                      }}
                    >
                      →
                    </div>
                  )}
                  <div
                    style={{
                      background: "#FFFFFF",
                      borderRadius: 20,
                      padding: "32px 28px",
                      textAlign: "center",
                      border: "1px solid #EDE9FB",
                      height: "100%",
                    }}
                  >
                    {/* Step number + icon */}
                    <div
                      style={{
                        width: 64,
                        height: 64,
                        borderRadius: "50%",
                        background: "#EDE9FB",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 16px",
                        position: "relative",
                      }}
                    >
                      <div style={{ position: "relative", zIndex: 1 }}>{step.icon}</div>
                      <div
                        style={{
                          position: "absolute",
                          top: -4,
                          right: -4,
                          width: 22,
                          height: 22,
                          background: "#6B4FB3",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: "var(--font-inter)",
                          fontSize: 11,
                          fontWeight: 700,
                          color: "#fff",
                        }}
                      >
                        {step.step}
                      </div>
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#1A0A3D",
                        marginBottom: 10,
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: 13,
                        color: "#6B7280",
                        lineHeight: 1.65,
                        margin: 0,
                      }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Purple Serum Works ───────────────────────────────────────── */}
        <section
          id="why"
          aria-label="Why Purple Serum Works"
          style={{ background: "#1A0A3D", padding: "80px 24px" }}
        >
          <div
            className="ps-why-grid"
            style={{ maxWidth: 1100, margin: "0 auto" }}
          >
            {/* Product image */}
            <div style={{ position: "relative" }}>
              <div
                style={{
                  borderRadius: 24,
                  overflow: "hidden",
                  background: "linear-gradient(135deg, #5B21B6 0%, #7C3AED 100%)",
                  aspectRatio: "4 / 5",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "60%",
                    aspectRatio: "1 / 1",
                    filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.5))",
                  }}
                >
                  <Image
                    src="/product-images/whitening-serum.webp"
                    alt="Perfora Purple Magic Whitening Serum ingredients and formula"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>

                {/* Floating stat card */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 24,
                    left: 24,
                    right: 24,
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(16px)",
                    borderRadius: 14,
                    padding: "14px 18px",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#FFFFFF",
                      margin: "0 0 4px",
                    }}
                  >
                    Clinically Tested
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: 12,
                      color: "#C4B5FD",
                      margin: 0,
                    }}
                  >
                    In-vivo study on 40 subjects · Proven whitening in 7 days
                  </p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--spectral)",
                  fontSize: "clamp(1.7rem, 3vw, 2.5rem)",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  lineHeight: 1.2,
                  marginBottom: 12,
                }}
              >
                Why Purple Serum Works
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 15,
                  color: "#C4B5FD",
                  lineHeight: 1.7,
                  marginBottom: 40,
                }}
              >
                Scientifically formulated to neutralize your enamel — without
                sensitivity. Our proprietary PAP technology delivers visible
                results from the very first use.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {WHY_BENEFITS.map((b) => (
                  <div
                    key={b.title}
                    style={{ display: "flex", gap: 16, alignItems: "flex-start" }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        background: "rgba(107,79,179,0.35)",
                        border: "1px solid rgba(196,181,253,0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 20,
                        flexShrink: 0,
                      }}
                    >
                      {b.emoji}
                    </div>
                    <div>
                      <h3
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontSize: 15,
                          fontWeight: 700,
                          color: "#FFFFFF",
                          marginBottom: 4,
                        }}
                      >
                        {b.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontSize: 13,
                          color: "#A78BFA",
                          lineHeight: 1.6,
                          margin: 0,
                        }}
                      >
                        {b.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="#buy"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  marginTop: 40,
                  background: "#7C3AED",
                  color: "#FFFFFF",
                  padding: "14px 28px",
                  borderRadius: 50,
                  fontFamily: "var(--font-inter)",
                  fontSize: 14,
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                Shop Purple Serum
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* ── Clinical Results ─────────────────────────────────────────────── */}
        <section
          aria-label="Clinical results"
          style={{ background: "#FFFFFF", padding: "72px 24px" }}
        >
          <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#F0ECFF",
                borderRadius: 999,
                padding: "6px 16px",
                marginBottom: 16,
              }}
            >
              <span style={{ fontSize: 14 }}>🔬</span>
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#6B4FB3",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                Clinical Proof
              </span>
            </div>
            <h2
              style={{
                fontFamily: "var(--spectral)",
                fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                fontWeight: 700,
                color: "#1A0A3D",
                marginBottom: 12,
              }}
            >
              Clinically Proved{" "}
              <em style={{ fontStyle: "italic", color: "#6B4FB3", fontWeight: 400 }}>
                Results
              </em>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 15,
                color: "#6B7280",
                lineHeight: 1.7,
                maxWidth: 560,
                margin: "0 auto 48px",
              }}
            >
              In-vivo tested on 40 subjects over 2 weeks. Visible whitening
              results documented from Day 1 through Day 7.
            </p>

            {/* Stat cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 20,
                marginBottom: 36,
              }}
              className="ps-stats-grid"
            >
              {[
                { stat: "8 shades", label: "Whiter in 7 days", icon: "🦷" },
                { stat: "40", label: "Subjects clinically tested", icon: "🔬" },
                { stat: "97%", label: "Reported visible whitening", icon: "✅" },
              ].map((s) => (
                <div
                  key={s.stat}
                  style={{
                    background: "#F5F3FF",
                    borderRadius: 16,
                    padding: "28px 20px",
                    border: "1px solid #EDE9FB",
                  }}
                >
                  <div style={{ fontSize: 28, marginBottom: 10 }}>{s.icon}</div>
                  <p
                    style={{
                      fontFamily: "var(--spectral)",
                      fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                      fontWeight: 700,
                      color: "#6B4FB3",
                      margin: "0 0 6px",
                    }}
                  >
                    {s.stat}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: 12,
                      color: "#6B7280",
                      margin: 0,
                    }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 11,
                color: "#9CA3AF",
                marginBottom: 16,
              }}
            >
              *Based on in-vivo study conducted on 40 subjects over 2 weeks
            </p>
            <a
              href="/Teeth_Whitening_Clinical_Trial.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "11px 26px",
                border: "1.5px solid #6B4FB3",
                borderRadius: 999,
                fontFamily: "var(--font-inter)",
                fontSize: 13,
                fontWeight: 600,
                color: "#6B4FB3",
                textDecoration: "none",
              }}
            >
              View Full Clinical Report →
            </a>
          </div>
        </section>

        {/* ── Buy Box (interactive) ─────────────────────────────────────────── */}
        <BuyBox />

        {/* ── Reviews ──────────────────────────────────────────────────────── */}
        <section
          aria-label="Customer reviews"
          style={{ background: "#F5F3FF", padding: "72px 24px" }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2
              style={{
                fontFamily: "var(--spectral)",
                fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                fontWeight: 700,
                color: "#1A0A3D",
                textAlign: "center",
                marginBottom: 8,
              }}
            >
              What Our Customers Are Saying{" "}
              <span style={{ color: "#7C3AED" }}>💜</span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 14,
                color: "#6B7280",
                textAlign: "center",
                marginBottom: 48,
              }}
            >
              Join 10,000+ happy customers who&apos;ve transformed their smile
            </p>

            <div className="ps-reviews-grid">
              {REVIEWS.map((r) => (
                <article
                  key={r.author}
                  style={{
                    background: "#FFFFFF",
                    borderRadius: 20,
                    padding: "28px 24px",
                    border: "1px solid #EDE9FB",
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                  }}
                >
                  {/* Stars */}
                  <div style={{ display: "flex", gap: 3 }}>
                    {Array.from({ length: r.stars }).map((_, i) => (
                      <svg key={i} width="15" height="15" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M6 1l1.18 2.56 2.82.4-2.04 1.99.48 2.81L6 7.38 3.56 8.76l.48-2.81L2 3.96l2.82-.4L6 1z"
                          fill="#F5A623"
                        />
                      </svg>
                    ))}
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: 15,
                      fontWeight: 700,
                      color: "#1A0A3D",
                      margin: 0,
                    }}
                  >
                    {r.title}
                  </h3>

                  {/* Body */}
                  <p
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: 13,
                      color: "#6B7280",
                      lineHeight: 1.7,
                      margin: 0,
                      flex: 1,
                    }}
                  >
                    {r.body}
                  </p>

                  {/* Author */}
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #7C3AED, #5B21B6)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "var(--font-inter)",
                        fontSize: 14,
                        fontWeight: 700,
                        color: "#fff",
                      }}
                    >
                      {r.author[0]}
                    </div>
                    <div>
                      <p
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontSize: 13,
                          fontWeight: 600,
                          color: "#1A0A3D",
                          margin: "0 0 1px",
                        }}
                      >
                        — {r.author}, {r.location}
                      </p>
                      {r.verified && (
                        <span
                          style={{
                            fontFamily: "var(--font-inter)",
                            fontSize: 11,
                            color: "#15803D",
                            fontWeight: 600,
                          }}
                        >
                          ✓ Verified Buyer
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────────── */}
        <section
          id="faq"
          aria-label="Frequently Asked Questions"
          style={{ background: "#FFFFFF", padding: "72px 24px" }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2
              style={{
                fontFamily: "var(--spectral)",
                fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                fontWeight: 700,
                color: "#1A0A3D",
                textAlign: "center",
                marginBottom: 8,
              }}
            >
              Frequently Asked Questions
            </h2>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 14,
                color: "#6B7280",
                textAlign: "center",
                marginBottom: 48,
              }}
            >
              Everything you need to know about Purple Serum
            </p>
            <FaqAccordion />
          </div>
        </section>

        {/* ── Final CTA Banner ─────────────────────────────────────────────── */}
        <section
          aria-label="Shop Purple Serum"
          style={{
            background: "linear-gradient(135deg, #1A0A3D 0%, #3D1F8F 100%)",
            padding: "80px 24px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 680, margin: "0 auto" }}>
            <h2
              style={{
                fontFamily: "var(--spectral)",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1.2,
                marginBottom: 14,
              }}
            >
              Ready for a Brighter Smile?
            </h2>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 15,
                color: "#C4B5FD",
                lineHeight: 1.7,
                marginBottom: 36,
              }}
            >
              Join 10,000+ happy customers who&apos;ve transformed their smile
              with Purple Serum.
            </p>
            <a
              href="#buy"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#FFFFFF",
                color: "#1A0A3D",
                padding: "16px 36px",
                borderRadius: 50,
                fontFamily: "var(--font-inter)",
                fontSize: 16,
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
                letterSpacing: "0.01em",
              }}
            >
              Shop Purple Serum →
            </a>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 12,
                color: "#7C5FBF",
                marginTop: 20,
              }}
            >
              Free shipping on orders over ₹999 &nbsp;·&nbsp; 30-day returns
              &nbsp;·&nbsp; Secure checkout
            </p>
          </div>
        </section>

        {/* ── Footer ───────────────────────────────────────────────────────── */}
        <footer
          style={{
            background: "#0F0520",
            padding: "32px 24px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--spectral)",
              fontSize: 20,
              fontWeight: 700,
              color: "#FFFFFF",
              marginBottom: 12,
            }}
          >
            perfora
          </p>
          <div
            style={{
              display: "flex",
              gap: 20,
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: 20,
            }}
          >
            {["Privacy Policy", "Terms of Service", "Shipping Policy", "Refund Policy", "Contact Us"].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: 12,
                    color: "#7C5FBF",
                    textDecoration: "none",
                  }}
                >
                  {link}
                </a>
              )
            )}
          </div>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 11,
              color: "#4C3677",
            }}
          >
            © 2026 Perfora Care. All rights reserved. &nbsp;|&nbsp; Made with ❤️ in India
          </p>
        </footer>
      </main>
    </>
  );
}
