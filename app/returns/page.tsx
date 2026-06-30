"use client";

import Navbar from "../components/Navbar";
import SiteFooter from "../components/SiteFooter";

const HIGHLIGHTS = [
  { v: "15 days", l: "Return window" },
  { v: "3–5 days", l: "Refund processing" },
  { v: "24 hrs", l: "Dispatch after QC" },
  { v: "1–2 days", l: "QC at warehouse" },
];

const WARRANTY_CONDITIONS = [
  "Manufacturing Defects – Faults in material or workmanship affecting functionality.",
  "Non-Operational Units – Product not functioning as intended upon delivery.",
  "Physical Damage Upon Delivery – Damage during transit (must be reported within 2 days of delivery).",
  "Proof of purchase is required for availing warranty services.",
  "All components including manuals, accessories, and tags must be returned with the item.",
];

const WARRANTY_EXCLUSIONS = [
  "Normal wear and tear",
  "Damage caused by misuse, mishandling, or improper usage",
  "Products out of the warranty coverage period",
  "Issues arising from unauthorized repairs or modifications",
];

const RETURN_STEPS = [
  { n: "01", title: "Raise a return request", body: "Visit the link below or email support@perforacare.com with your order ID and reason. Our system confirms eligibility instantly.", tag: "⚡ Instant confirmation" },
  { n: "02", title: "Schedule a pickup", body: "A courier partner will be assigned and a pickup scheduled at your address. You'll receive an SMS with slot details and a 4-digit OTP.", tag: "📲 OTP verification required" },
  { n: "03", title: "Hand over the package", body: "Share the OTP with the delivery agent. Keep the product in its original packaging — the agent will scan and collect.", tag: "📦 Original packaging required" },
  { n: "04", title: "Refund after QC", body: "Once the item reaches our warehouse and passes quality check, your refund is automatically triggered. You'll be notified at every step.", tag: "💸 3–5 business days" },
];

const EXCHANGE_STEPS = [
  { n: "01", title: "Raise an exchange request", body: "Raise a request through the link below or contact us with your order ID." },
  { n: "02", title: "Schedule a pickup", body: "A courier partner will be assigned and a pickup scheduled. You'll receive an SMS with slot details." },
  { n: "03", title: "QC check at warehouse", body: "Once we receive the item our team conducts a quick quality check. This takes 1–2 business days." },
  { n: "04", title: "New item dispatched", body: "After QC passes, your replacement is packed and shipped within 24 hrs. You'll receive a new tracking link via SMS." },
];

function Step({ step, dark = false }: { step: { n: string; title: string; body: string; tag?: string }; dark?: boolean }) {
  return (
    <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
      <div style={{ width: 40, height: 40, borderRadius: "50%", background: dark ? "rgba(167,139,250,0.15)" : "#F0EBFF", color: dark ? "#C4B5F0" : "#3D1F8F", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-inter)", fontSize: 13, fontWeight: 700, flexShrink: 0 }}>
        {step.n}
      </div>
      <div>
        <h4 style={{ fontFamily: "var(--font-inter)", fontSize: 14, fontWeight: 700, color: dark ? "#F0EAFF" : "#1A0A3D", margin: "0 0 5px" }}>{step.title}</h4>
        <p style={{ fontFamily: "var(--font-inter)", fontSize: 13.5, lineHeight: 1.65, color: dark ? "rgba(200,185,240,0.8)" : "#4A4458", margin: "0 0 6px" }}>{step.body}</p>
        {step.tag && <span style={{ fontFamily: "var(--font-inter)", fontSize: 12, fontWeight: 600, color: dark ? "#A78BFA" : "#6B4FB3" }}>{step.tag}</span>}
      </div>
    </div>
  );
}

export default function ReturnsPage() {
  return (
    <>
      <Navbar />

      {/* ── SCROLL 1: Hero + highlights + warranty ── */}
      <section style={{ background: "#F5F3FF", padding: "clamp(80px,10vw,120px) clamp(20px,6vw,88px) clamp(60px,7vw,88px)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>

          {/* Heading */}
          <div style={{ marginBottom: "clamp(36px,4vw,52px)" }}>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#9B8CB8", marginBottom: 14 }}>
              Hassle-free
            </p>
            <h1 className="font-display" style={{ fontSize: "clamp(2.2rem,5vw,3.6rem)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.08, color: "#1A0A3D", margin: "0 0 16px" }}>
              Return &{" "}
              <em style={{ fontStyle: "italic", fontWeight: 400, color: "#6B4FB3" }}>Exchange</em>
            </h1>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(14px,1.4vw,16px)", color: "#666077", lineHeight: 1.7, maxWidth: 540, margin: 0 }}>
              We provide a warranty on all electronic products covering manufacturing defects and non-functional units. Easy exchanges available for the same or a different product.
            </p>
          </div>

          {/* Highlights */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: "clamp(36px,4vw,52px)" }}>
            {HIGHLIGHTS.map(h => (
              <div key={h.l} style={{ background: "#fff", border: "1.5px solid #EDE9FB", borderRadius: 16, padding: "18px 16px", textAlign: "center" as const, boxShadow: "0 2px 10px rgba(61,31,143,0.05)" }}>
                <p className="font-display" style={{ fontSize: "clamp(1.4rem,2.2vw,1.9rem)", fontWeight: 700, color: "#3D1F8F", margin: "0 0 4px", letterSpacing: "-0.02em" }}>{h.v}</p>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: 12, color: "#9B8CB8", margin: 0, lineHeight: 1.4 }}>{h.l}</p>
              </div>
            ))}
          </div>

          {/* Warranty + conditions in two columns */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 440px), 1fr))", gap: 14 }}>

            {/* Eligibility */}
            <div style={{ background: "#fff", border: "1.5px solid #EDE9FB", borderRadius: 18, padding: "26px 28px" }}>
              <h2 style={{ fontFamily: "var(--font-inter)", fontSize: 15, fontWeight: 700, color: "#1A0A3D", margin: "0 0 18px" }}>Eligibility conditions</h2>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 10 }}>
                {WARRANTY_CONDITIONS.map((c, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#F0EBFF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="#3D1F8F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: 13.5, lineHeight: 1.6, color: "#4A4458", margin: 0 }}>{c}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Exclusions */}
            <div style={{ background: "#fff", border: "1.5px solid #EDE9FB", borderRadius: 18, padding: "26px 28px" }}>
              <h2 style={{ fontFamily: "var(--font-inter)", fontSize: 15, fontWeight: 700, color: "#1A0A3D", margin: "0 0 6px" }}>Exclusions</h2>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: 13, color: "#9B8CB8", margin: "0 0 18px" }}>These are not covered under warranty:</p>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 10 }}>
                {WARRANTY_EXCLUSIONS.map((e, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#FFF0F0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M3 3l4 4M7 3l-4 4" stroke="#E05050" strokeWidth="1.5" strokeLinecap="round"/></svg>
                    </div>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: 13.5, lineHeight: 1.6, color: "#4A4458", margin: 0 }}>{e}</p>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid #EDE9FB" }}>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: 13, lineHeight: 1.65, color: "#4A4458", margin: 0 }}>
                  To initiate a warranty claim, contact our support team with proof of defect (images or videos). Our team will review and provide a resolution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SCROLL 2: Return & Exchange steps ── */}
      <section style={{ background: "#fff", padding: "clamp(56px,7vw,88px) clamp(20px,6vw,88px)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", gap: "clamp(24px,3vw,40px)" }}>

            {/* How to Return */}
            <div style={{ background: "#F5F3FF", border: "1.5px solid #EDE9FB", borderRadius: 22, padding: "clamp(24px,3vw,36px)" }}>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: 10.5, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase" as const, color: "#9B8CB8", marginBottom: 10 }}>Simple 4-step process</p>
              <h2 className="font-display" style={{ fontSize: "clamp(1.4rem,2.4vw,1.9rem)", fontWeight: 700, letterSpacing: "-0.02em", color: "#1A0A3D", margin: "0 0 28px" }}>
                How to <em style={{ fontStyle: "italic", fontWeight: 400, color: "#6B4FB3" }}>return</em>
              </h2>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 24 }}>
                {RETURN_STEPS.map(s => <Step key={s.n} step={s} />)}
              </div>
              <a href="mailto:support@perforacare.com" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 28, padding: "12px 22px", borderRadius: 40, background: "#3D1F8F", color: "#fff", fontFamily: "var(--font-inter)", fontSize: 13.5, fontWeight: 600, textDecoration: "none" }}>
                Raise a return request →
              </a>
            </div>

            {/* How to Exchange */}
            <div style={{ background: "linear-gradient(155deg,#0D0521,#2D1260)", borderRadius: 22, padding: "clamp(24px,3vw,36px)", border: "1px solid rgba(167,139,250,0.2)" }}>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: 10.5, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase" as const, color: "#A78BFA", marginBottom: 10 }}>Fully automated</p>
              <h2 className="font-display" style={{ fontSize: "clamp(1.4rem,2.4vw,1.9rem)", fontWeight: 700, letterSpacing: "-0.02em", color: "#F0EAFF", margin: "0 0 28px" }}>
                How to <em style={{ fontStyle: "italic", fontWeight: 400, color: "#C4B5F0" }}>exchange</em>
              </h2>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 24 }}>
                {EXCHANGE_STEPS.map(s => <Step key={s.n} step={s} dark />)}
              </div>
              <a href="https://perforacare.clickpost.in/en/returns" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 28, padding: "12px 22px", borderRadius: 40, background: "rgba(167,139,250,0.15)", color: "#C4B5F0", fontFamily: "var(--font-inter)", fontSize: 13.5, fontWeight: 600, textDecoration: "none", border: "1px solid rgba(167,139,250,0.3)" }}>
                Place your exchange request →
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
