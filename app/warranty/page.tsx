import Navbar from "../components/Navbar";
import SiteFooter from "../components/SiteFooter";

const WARRANTY_TABLE = [
  { product: "Kids Electric Toothbrush Boy (Zou)", period: "1 year" },
  { product: "Kids Electric Toothbrush Girl (Zi)", period: "1 year" },
  { product: "Sonic Electric Toothbrush AAA battery Model 001", period: "1 year" },
  { product: "Sonic Electric Toothbrush AAA battery Model 002", period: "1 year" },
  { product: "Sonic Electric Toothbrush — Rechargeable Model 005", period: "1 year" },
  { product: "Artistic Electric Toothbrush — Rechargeable", period: "1 year" },
  { product: "Electric Toothbrush M001 — Rechargeable", period: "1 year" },
  { product: "Smart Sonic Electric Toothbrush — Rechargeable", period: "2 years" },
  { product: "Oscillating Electric Toothbrush — Rechargeable", period: "2 years" },
  { product: "Sonic Electric Toothbrush — Rechargeable Model 004", period: "2 years" },
  { product: "Smart Dental Flosser", period: "2 years" },
  { product: "Power Dental Flosser", period: "2 years" },
];

const NOTES = [
  "Product video is mandatory for all warranty claims/complaints. Physical damages are not covered under the warranty.",
  "If a product replacement is required within the warranty period and is out of stock, an available or upgraded model of equivalent price will be offered, no gift card or refund will be provided, and the warranty will continue from the original purchase date.",
  "The peeling or fading of the product's color or personalization due to normal wear and tear, usage, or environmental factors is not covered under the warranty.",
  "To initiate a warranty claim, please reach out to us over email or WhatsApp with proof of defect including images and videos. Our team will review and provide a resolution.",
];

const ELIGIBLE = [
  "Manufacturing Defects — Faults in material or workmanship affecting functionality.",
  "Non-Operational Units — Product not functioning as intended upon delivery.",
  "Physical Damage Upon Delivery — Damage during transit (must be reported within 2 days of delivery).",
  "Proof of purchase is required to be presented for availing warranty services.",
];

const EXCLUDED = [
  "Normal wear and tear",
  "Damage caused by misuse, mishandling, or improper usage",
  "Products out of the warranty coverage period",
  "Issues arising from unauthorized repairs or modifications",
];

export default function WarrantyPage() {
  const oneYear = WARRANTY_TABLE.filter(w => w.period === "1 year");
  const twoYear = WARRANTY_TABLE.filter(w => w.period === "2 years");

  return (
    <>
      <Navbar />
      <section style={{ background: "#F5F3FF", padding: "clamp(80px,10vw,120px) clamp(20px,6vw,88px) clamp(60px,7vw,88px)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>

          <div style={{ marginBottom: "clamp(40px,5vw,56px)" }}>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#9B8CB8", marginBottom: 14 }}>
              Coverage
            </p>
            <h1 className="font-display" style={{ fontSize: "clamp(2.2rem,5vw,3.6rem)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.08, color: "#1A0A3D", margin: "0 0 16px" }}>
              Warranty{" "}
              <em style={{ fontStyle: "italic", fontWeight: 400, color: "#6B4FB3" }}>Guidelines</em>
            </h1>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(14px,1.4vw,16px)", color: "#4A4458", lineHeight: 1.7, maxWidth: 580, margin: 0 }}>
              We provide a warranty on all our electronic products, ensuring coverage for manufacturing defects and non-functional units as per our warranty policy.
            </p>
          </div>

          {/* Warranty period cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 440px), 1fr))", gap: 14, marginBottom: 28 }}>
            {[{ label: "1 Year Warranty", items: oneYear, accent: "#3D1F8F" }, { label: "2 Years Warranty", items: twoYear, accent: "#6B4FB3" }].map(group => (
              <div key={group.label} style={{ background: "#fff", border: "1.5px solid #EDE9FB", borderRadius: 18, overflow: "hidden" }}>
                <div style={{ background: group.accent, padding: "14px 22px", display: "flex", alignItems: "center", gap: 10 }}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 1.5L2 5.5c0 5 3 8.5 7 9.5 4-1 7-4.5 7-9.5L9 1.5z" stroke="white" strokeWidth="1.4" strokeLinejoin="round"/>
                    <path d="M6 9l2 2 4-4" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span style={{ fontFamily: "var(--font-inter)", fontSize: 13, fontWeight: 700, color: "#fff", letterSpacing: "0.02em" }}>{group.label}</span>
                </div>
                <div style={{ padding: "4px 0" }}>
                  {group.items.map((w, i) => (
                    <div key={i} style={{ padding: "12px 22px", borderBottom: i < group.items.length - 1 ? "1px solid #F0EBFF" : undefined, display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: group.accent, flexShrink: 0 }} />
                      <span style={{ fontFamily: "var(--font-inter)", fontSize: 13.5, color: "#1A0A3D", lineHeight: 1.4 }}>{w.product}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Notes */}
          <div style={{ background: "#fff", border: "1.5px solid #EDE9FB", borderRadius: 18, padding: "clamp(22px,3vw,32px)", marginBottom: 14 }}>
            <h2 style={{ fontFamily: "var(--font-inter)", fontSize: 15, fontWeight: 700, color: "#1A0A3D", margin: "0 0 18px" }}>Important notes</h2>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: 12 }}>
              {NOTES.map((n, i) => (
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#F0EBFF", color: "#3D1F8F", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 11, fontWeight: 700, fontFamily: "var(--font-inter)" }}>{i + 1}</div>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: 13.5, lineHeight: 1.7, color: "#4A4458", margin: 0 }}>{n}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Eligibility + Exclusions */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", gap: 14, marginBottom: 14 }}>
            <div style={{ background: "#fff", border: "1.5px solid #EDE9FB", borderRadius: 18, padding: "22px 24px" }}>
              <h2 style={{ fontFamily: "var(--font-inter)", fontSize: 14, fontWeight: 700, color: "#1A0A3D", margin: "0 0 16px" }}>Eligible for replacement</h2>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 10 }}>
                {ELIGIBLE.map((e, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#F0EBFF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="#3D1F8F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: 13.5, lineHeight: 1.65, color: "#4A4458", margin: 0 }}>{e}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: "#fff", border: "1.5px solid #EDE9FB", borderRadius: 18, padding: "22px 24px" }}>
              <h2 style={{ fontFamily: "var(--font-inter)", fontSize: 14, fontWeight: 700, color: "#1A0A3D", margin: "0 0 16px" }}>Exclusions</h2>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 10 }}>
                {EXCLUDED.map((e, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#FFF0F0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M3 3l4 4M7 3l-4 4" stroke="#E05050" strokeWidth="1.5" strokeLinecap="round"/></svg>
                    </div>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: 13.5, lineHeight: 1.65, color: "#4A4458", margin: 0 }}>{e}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact strip */}
          <div style={{ background: "linear-gradient(145deg,#1A0A3D,#2D1260)", borderRadius: 18, padding: "20px 26px", display: "flex", flexWrap: "wrap" as const, alignItems: "center", justifyContent: "space-between", gap: 14, border: "1px solid rgba(167,139,250,0.2)" }}>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: 14, color: "rgba(200,185,240,0.85)", margin: 0 }}>
              To initiate a warranty claim, reach out with proof of defect (images or videos).
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" as const }}>
              <a href="mailto:hello@perforacare.com" style={{ fontFamily: "var(--font-inter)", fontSize: 13.5, fontWeight: 600, color: "#C4B5F0", textDecoration: "none" }}>📩 hello@perforacare.com</a>
              <a href="https://wa.me/919999289288" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-inter)", fontSize: 13.5, fontWeight: 600, color: "#C4B5F0", textDecoration: "none" }}>💬 WhatsApp +91 99992 89288</a>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
