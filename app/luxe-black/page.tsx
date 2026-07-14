import type { Metadata } from "next";
import Image from "next/image";
import BuyBox from "./_components/BuyBox";
import ReviewsCarousel from "./_components/ReviewsCarousel";
import HeroBanner from "./_components/HeroBanner";
import PromoStrip from "./_components/PromoStrip";
import WhyChooseBanner from "./_components/WhyChooseBanner";
import WarrantyBadge from "./_components/WarrantyBadge";
import FooterAddToCartButton from "./_components/FooterAddToCartButton";

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
  offers: {
    "@type": "Offer",
    price: "3499",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    seller: { "@type": "Organization", name: "Perfora" },
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    reviewCount: "350",
    bestRating: "5",
    worstRating: "1",
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const INCLUDED_CARDS = [
  {
    title: "Toothbrush Handle & Brush Head",
    desc: "The Luxe Black handle with a pre-fitted rotating brush head, ready to use out of the box.",
  },
  {
    title: "Travel Case",
    desc: "Carry and protect your toothbrush wherever you go.",
  },
  {
    title: "USB Charging Cable",
    desc: "USB DC (circular pin) cable to recharge the handle.",
  },
  {
    title: "User Manual",
    desc: "Full instructions and 2-year warranty details.",
  },
];

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
        .lb-included-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }

        .lb-included-section { padding: 88px 24px; }
        .lb-reviews-section { padding: 88px 0; }

        @media (max-width: 767px) {
          .lb-buy-grid {
            grid-template-columns: 1fr;
            grid-template-areas: "top" "image" "bottom";
            gap: 32px;
          }
          .lb-included-section { padding-top: 62px; padding-bottom: 44px; }
          .lb-reviews-section { padding-top: 44px; }
          .lb-rating-summary { display: none; }
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

        <WhyChooseBanner />

        {/* ── Everything Included ── */}
        <section aria-label="Everything Included" className="lb-included-section" style={{ background: "#FFFFFF" }}>
          <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
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
              Carefully Packed. Thoughtfully Designed.
            </h2>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: 14.5, color: "#1A0A3D", lineHeight: 1.75, marginBottom: 36 }}>
              Packed with all the essentials for a smarter brushing experience.
            </p>

            <div style={{ position: "relative", aspectRatio: "1 / 1", borderRadius: 32, overflow: "hidden", boxShadow: "0 20px 60px rgba(61,31,143,0.12)", marginBottom: 36 }}>
              <Image
                src="/luxe-black/everything-included.png"
                alt="Perfora Luxe Black Electric Toothbrush with travel case, brush head and charging cable"
                fill
                sizes="(min-width: 767px) 640px, 90vw"
                style={{ objectFit: "cover" }}
              />
              <WarrantyBadge />
            </div>

            <div className="lb-included-grid" style={{ textAlign: "left" }}>
              {INCLUDED_CARDS.map((c) => (
                <div
                  key={c.title}
                  style={{
                    background: "#F8F6FF",
                    border: "1px solid #EDE9FB",
                    borderRadius: 16,
                    padding: "18px 20px",
                  }}
                >
                  <h3 style={{ fontFamily: "var(--font-inter)", fontSize: 13.5, fontWeight: 700, color: "#1A0A3D", marginBottom: 4 }}>{c.title}</h3>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: 12, color: "#1A0A3D", lineHeight: 1.55, margin: 0 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Reviews ── */}
        <section aria-label="Customer Reviews" className="lb-reviews-section" style={{ background: "#FDFCFF" }}>
          <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
            <h2
              style={{
                fontFamily: "var(--spectral)",
                fontSize: "clamp(1.7rem, 3.2vw, 2.3rem)",
                fontWeight: 700,
                color: "#1A0A3D",
                textAlign: "center",
                marginBottom: 14,
              }}
            >
              Loved by Thousands of Happy Brushers
            </h2>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: 14.5, color: "#1A0A3D", textAlign: "center", marginBottom: 48 }}>
              Real experiences from real Perfora customers
            </p>

            <ReviewsCarousel />

            <div className="lb-rating-summary" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, marginTop: 48 }}>
              <div style={{ display: "flex", gap: 3 }}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} width="22" height="22" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1l1.18 2.56 2.82.4-2.04 1.99.48 2.81L6 7.38 3.56 8.76l.48-2.81L2 3.96l2.82-.4L6 1z" fill="#F5A623" />
                  </svg>
                ))}
              </div>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: 14, fontWeight: 700, color: "#1A0A3D", margin: 0 }}>4.7 out of 5</p>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: 12.5, color: "#1A0A3D", margin: 0 }}>Thousands of satisfied customers</p>
            </div>
          </div>
        </section>

        {/* ── Footer CTA ── */}
        <section aria-label="Shop Luxe Black" style={{ background: "linear-gradient(135deg, #1A0A3D 0%, #3D1F8F 100%)", padding: "88px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <h2
              style={{
                fontFamily: "var(--spectral)",
                fontSize: "clamp(1.7rem, 3.2vw, 2.3rem)",
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1.25,
                marginBottom: 32,
              }}
            >
              Ready to Upgrade Your Brushing Routine?
            </h2>
            <FooterAddToCartButton />
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
