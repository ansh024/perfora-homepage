import type { Metadata } from "next";
import Image from "next/image";
import BuyBox from "./_components/BuyBox";
import ReviewsCarousel from "./_components/ReviewsCarousel";
import HeroBanner from "./_components/HeroBanner";
import PromoStrip from "./_components/PromoStrip";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Luxe Black Electric Toothbrush | Perfora",
  description:
    "The Perfora Luxe Black Electric Toothbrush — oscillating cleaning technology, 3 cleaning modes, and a premium matte design built for effective plaque removal and everyday gum care.",
  alternates: { canonical: "/luxe-black" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Luxe Black Electric Toothbrush | Perfora",
    description:
      "Oscillating cleaning technology, 3 cleaning modes, rechargeable design and a premium travel case — built for effective everyday brushing.",
    images: [{ url: "/luxe-black/hero-product.png", width: 1000, height: 1200 }],
    type: "website",
    siteName: "Perfora",
  },
};

// ─── JSON-LD Structured Data ────────────────────────────────────────────────
const jsonLdProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Perfora Luxe Black Electric Toothbrush",
  description:
    "A premium oscillating electric toothbrush with 3 cleaning modes, rechargeable battery and a matte black finish, designed for effective plaque removal and everyday gum care.",
  brand: { "@type": "Brand", name: "Perfora" },
  image: "https://perforacare.com/cdn/shop/files/luxe-black-electric-toothbrush.png",
  sku: "PRFR-ETB-LUXEBLK",
  category: "Electric Toothbrush",
  offers: [
    {
      "@type": "Offer",
      name: "Toothbrush Only",
      price: "2499",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "Perfora" },
    },
    {
      "@type": "Offer",
      name: "Toothbrush + 2 Extra Brush Heads",
      price: "2999",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "Perfora" },
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    reviewCount: "3200",
    bestRating: "5",
    worstRating: "1",
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const WHY_FEATURES_LEFT = [
  {
    title: "Oscillating Cleaning Technology",
    desc: "Removes plaque effectively with a rotating brush head designed for a deeper clean.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="7" stroke="#6B4FB3" strokeWidth="1.6" />
        <path d="M12 5v3M12 16v3M5 12h3M16 12h3" stroke="#6B4FB3" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "3 Cleaning Modes",
    desc: "Choose between cleaning modes suited to your everyday brushing needs.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="4" width="4" height="16" rx="1.5" stroke="#6B4FB3" strokeWidth="1.6" />
        <rect x="10" y="8" width="4" height="12" rx="1.5" stroke="#6B4FB3" strokeWidth="1.6" />
        <rect x="16" y="11" width="4" height="9" rx="1.5" stroke="#6B4FB3" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "Long-lasting Battery",
    desc: "Designed to go longer between charges for uninterrupted use.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="7" width="16" height="10" rx="2" stroke="#6B4FB3" strokeWidth="1.6" />
        <path d="M20 10v4" stroke="#6B4FB3" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M8 10l-1.5 2H9L7.5 14" stroke="#6B4FB3" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Premium Travel Case",
    desc: "Protect and carry your toothbrush wherever you go.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="4" width="14" height="16" rx="5" stroke="#6B4FB3" strokeWidth="1.6" />
      </svg>
    ),
  },
];

const WHY_FEATURES_RIGHT = [
  {
    title: "Rechargeable",
    desc: "Convenient charging for everyday use.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M13 3L5 14h5l-1 7 8-11h-5l1-7z" stroke="#6B4FB3" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Personalisation Available",
    desc: "Make it uniquely yours with personalised engraving.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 20l1-4L16 5l3 3L8 19l-4 1z" stroke="#6B4FB3" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Ergonomic Design",
    desc: "Comfortable grip with a premium matte finish.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 3c-2 3-5 6-5 10a5 5 0 0010 0c0-4-3-7-5-10z" stroke="#6B4FB3" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Designed for Everyday Gum Care",
    desc: "Engineered to support effective yet gentle cleaning.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 21s-7-4.5-7-10a5 5 0 019-3 5 5 0 019 3c0 5.5-7 10-7 10l-2-2-2 2z" stroke="#6B4FB3" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const INCLUDED_CARDS = [
  {
    title: "Premium Travel Case",
    desc: "Carry and protect your toothbrush wherever you go.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="4" width="14" height="16" rx="5" stroke="#3D1F8F" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "Free Charging Cable",
    desc: "Recharge with ease whenever required.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M13 3L5 14h5l-1 7 8-11h-5l1-7z" stroke="#3D1F8F" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "2-Year Warranty",
    desc: "Backed by Perfora's product warranty for added peace of mind.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="#3D1F8F" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Easy Returns & Exchange",
    desc: "Hassle-free support if you need assistance with your purchase.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M4 12a8 8 0 0114-5.3M20 12a8 8 0 01-14 5.3" stroke="#3D1F8F" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M18 3v4h-4M6 21v-4h4" stroke="#3D1F8F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Secure Payments",
    desc: "Shop confidently with secure checkout options.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="10" width="16" height="10" rx="2" stroke="#3D1F8F" strokeWidth="1.6" />
        <path d="M8 10V7a4 4 0 018 0v3" stroke="#3D1F8F" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "Dedicated Customer Support",
    desc: "Our support team is always here to help.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M4 12a8 8 0 1116 0v5a2 2 0 01-2 2h-2v-7h4M4 12v5a2 2 0 002 2h2v-7H4" stroke="#3D1F8F" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
];

function FeatureRow({ feature, align }: { feature: (typeof WHY_FEATURES_LEFT)[number]; align: "left" | "right" }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 14,
        alignItems: "flex-start",
        flexDirection: align === "right" ? "row-reverse" : "row",
        textAlign: align === "right" ? "right" : "left",
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 14,
          background: "#F8F6FF",
          border: "1px solid #EDE9FB",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {feature.icon}
      </div>
      <div>
        <h3 style={{ fontFamily: "var(--font-inter)", fontSize: 14.5, fontWeight: 700, color: "#1A0A3D", marginBottom: 4 }}>{feature.title}</h3>
        <p style={{ fontFamily: "var(--font-inter)", fontSize: 12.5, color: "#6B7280", lineHeight: 1.6, margin: 0 }}>{feature.desc}</p>
      </div>
    </div>
  );
}

export default function LuxeBlackPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProduct) }} />

      <style>{`
        .lb-hero-desktop { display: block; }
        .lb-hero-mobile { display: none; }
        @media (max-width: 767px) {
          .lb-hero-desktop { display: none; }
          .lb-hero-mobile { display: block; }
        }
        .lb-buy-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-areas: "image top" "image bottom";
          gap: 64px;
          align-items: start;
        }
        .lb-buy-top { grid-area: top; }
        .lb-buy-image { grid-area: image; }
        .lb-buy-bottom { grid-area: bottom; }
        .lb-why-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr 1fr;
          gap: 32px;
          align-items: center;
        }
        .lb-why-col { display: flex; flex-direction: column; gap: 36px; }
        .lb-included-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .lb-included-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: center;
        }

        @media (max-width: 900px) {
          .lb-why-grid { grid-template-columns: 1fr; gap: 40px; }
          .lb-why-col { flex-direction: row; flex-wrap: wrap; gap: 24px; }
          .lb-why-col > div { flex: 1 1 220px; text-align: left !important; flex-direction: row !important; }
        }

        @media (max-width: 767px) {
          .lb-buy-grid {
            grid-template-columns: 1fr;
            grid-template-areas: "top" "image" "bottom";
            gap: 32px;
          }
          .lb-included-layout { grid-template-columns: 1fr; gap: 32px; }
          .lb-included-grid { grid-template-columns: 1fr; }
        }

        @keyframes lb-fadeup {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .lb-animate { animation: lb-fadeup 0.7s ease both; }
      `}</style>

      <main style={{ fontFamily: "var(--font-inter)", background: "#FFFFFF" }}>
        {/* ── Minimal Nav ── */}
        <nav
          style={{
            position: "sticky",
            top: 0,
            zIndex: 150,
            background: "rgba(255,255,255,0.96)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderBottom: "1px solid #F0ECFF",
            padding: "16px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <a href="/" style={{ fontFamily: "var(--spectral)", fontSize: 22, fontWeight: 700, color: "#1A0A3D", textDecoration: "none", letterSpacing: "-0.02em" }}>
            perfora
          </a>
          <a
            href="#buy"
            style={{
              background: "#1A0A3D",
              color: "#fff",
              padding: "10px 22px",
              borderRadius: 50,
              fontFamily: "var(--font-inter)",
              fontSize: 13,
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Buy Now
          </a>
        </nav>

        {/* ── Hero ── */}
        <HeroBanner />
        <PromoStrip />
        {/* ── Purchase / Mini-PDP ── */}
        <BuyBox />

        {/* ── Why Choose Perfora ── */}
        <section id="why" aria-label="Why Choose Perfora" style={{ background: "#FDFCFF", padding: "88px 24px 64px" }}>
          <div style={{ maxWidth: 1160, margin: "0 auto" }}>
            <h2
              style={{
                fontFamily: "var(--spectral)",
                fontSize: "clamp(1.7rem, 3.4vw, 2.4rem)",
                fontWeight: 700,
                color: "#1A0A3D",
                textAlign: "center",
                marginBottom: 60,
              }}
            >
              Why Choose Perfora
            </h2>

            <div className="lb-why-grid">
              <div className="lb-why-col">
                {WHY_FEATURES_LEFT.map((f) => (
                  <FeatureRow key={f.title} feature={f} align="left" />
                ))}
              </div>

              <div
                style={{
                  position: "relative",
                  aspectRatio: "4 / 5",
                  borderRadius: 32,
                  background: "linear-gradient(160deg, #F8F6FF 0%, #EDE9FB 100%)",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/luxe-black/group-shot.png"
                  alt="Perfora Luxe Black Electric Toothbrush collection"
                  fill
                  sizes="(min-width: 900px) 32vw, 90vw"
                  style={{ objectFit: "contain", padding: 24 }}
                />
              </div>

              <div className="lb-why-col">
                {WHY_FEATURES_RIGHT.map((f) => (
                  <FeatureRow key={f.title} feature={f} align="right" />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Everything Included ── */}
        <section aria-label="Everything Included" style={{ background: "#FFFFFF", padding: "88px 24px" }}>
          <div className="lb-included-layout" style={{ maxWidth: 1160, margin: "0 auto" }}>
            <div style={{ position: "relative", aspectRatio: "4 / 5", borderRadius: 32, overflow: "hidden", boxShadow: "0 20px 60px rgba(61,31,143,0.12)" }}>
              <Image
                src="/luxe-black/lifestyle-case-warm.png"
                alt="Perfora Luxe Black Electric Toothbrush with premium travel case"
                fill
                sizes="(min-width: 767px) 48vw, 90vw"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div>
              <h2
                style={{
                  fontFamily: "var(--spectral)",
                  fontSize: "clamp(1.7rem, 3.2vw, 2.3rem)",
                  fontWeight: 700,
                  color: "#1A0A3D",
                  lineHeight: 1.25,
                  marginBottom: 14,
                }}
              >
                Everything You Need. Right Out of the Box.
              </h2>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: 14.5, color: "#6B7280", lineHeight: 1.75, marginBottom: 36, maxWidth: 460 }}>
                Designed for everyday convenience, every Luxe Black Electric
                Toothbrush comes with everything you need to start brushing
                from day one.
              </p>

              <div className="lb-included-grid">
                {INCLUDED_CARDS.map((c) => (
                  <div
                    key={c.title}
                    style={{
                      background: "#F8F6FF",
                      border: "1px solid #EDE9FB",
                      borderRadius: 18,
                      padding: "20px 18px",
                    }}
                  >
                    <div
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: 12,
                        background: "#FFFFFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 12,
                      }}
                    >
                      {c.icon}
                    </div>
                    <h3 style={{ fontFamily: "var(--font-inter)", fontSize: 13.5, fontWeight: 700, color: "#1A0A3D", marginBottom: 4 }}>{c.title}</h3>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: 12, color: "#6B7280", lineHeight: 1.55, margin: 0 }}>{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Reviews ── */}
        <section aria-label="Customer Reviews" style={{ background: "#FDFCFF", padding: "88px 0" }}>
          <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
            <h2
              style={{
                fontFamily: "var(--spectral)",
                fontSize: "clamp(1.7rem, 3.2vw, 2.3rem)",
                fontWeight: 700,
                color: "#1A0A3D",
                textAlign: "center",
                marginBottom: 12,
              }}
            >
              Loved by Thousands of Happy Brushers
            </h2>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: 14, color: "#6B7280", textAlign: "center", marginBottom: 48 }}>
              Real experiences from real Perfora customers
            </p>

            <ReviewsCarousel />

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, marginTop: 48 }}>
              <div style={{ display: "flex", gap: 3 }}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} width="22" height="22" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1l1.18 2.56 2.82.4-2.04 1.99.48 2.81L6 7.38 3.56 8.76l.48-2.81L2 3.96l2.82-.4L6 1z" fill="#F5A623" />
                  </svg>
                ))}
              </div>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: 14, fontWeight: 700, color: "#1A0A3D", margin: 0 }}>4.7 out of 5</p>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: 12.5, color: "#9CA3AF", margin: 0 }}>Thousands of satisfied customers</p>
            </div>
          </div>
        </section>

        {/* ── Footer CTA ── */}
        <section aria-label="Shop Luxe Black" style={{ background: "linear-gradient(135deg, #1A0A3D 0%, #3D1F8F 100%)", padding: "84px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <h2
              style={{
                fontFamily: "var(--spectral)",
                fontSize: "clamp(1.8rem, 3.8vw, 2.6rem)",
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1.2,
                marginBottom: 32,
              }}
            >
              Ready to Upgrade Your Brushing Routine?
            </h2>
            <a
              href="#buy"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#FFFFFF",
                color: "#1A0A3D",
                padding: "16px 38px",
                borderRadius: 50,
                fontFamily: "var(--font-inter)",
                fontSize: 16,
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
              }}
            >
              Buy Now
            </a>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer style={{ background: "#0F0520", padding: "32px 24px", textAlign: "center" }}>
          <p style={{ fontFamily: "var(--spectral)", fontSize: 20, fontWeight: 700, color: "#FFFFFF", marginBottom: 12 }}>perfora</p>
          <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap", marginBottom: 20 }}>
            {["Privacy Policy", "Terms of Service", "Shipping Policy", "Refund Policy", "Contact Us"].map((link) => (
              <a key={link} href="#" style={{ fontFamily: "var(--font-inter)", fontSize: 12, color: "#7C5FBF", textDecoration: "none" }}>
                {link}
              </a>
            ))}
          </div>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: 11, color: "#4C3677" }}>© 2026 Perfora Care. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}
