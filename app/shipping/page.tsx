"use client";

import Navbar from "../components/Navbar";
import SiteFooter from "../components/SiteFooter";

const CARDS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="5.5" cy="18.5" r="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="18.5" cy="18.5" r="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Pan-India delivery",
    body: "We ship to all serviceable PIN codes in India as per government guidelines.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M2 9h20" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 14h4M7 17h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "48-hour dispatch",
    body: "All orders are dispatched within 48 hours of receipt, excluding Sundays and public holidays.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "5–7 day delivery",
    body: "Please allow 5–7 days from receipt of your order for delivery to your door.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Reputed couriers",
    body: "All purchases are shipped via trusted courier partners from our warehouse.",
  },
];

const POLICIES = [
  {
    heading: "Cancellations & shipping charges",
    body: "For orders cancelled after dispatch or rejected (COD orders), shipping costs will be charged for both to & fro at actuals. Pre-paid orders cancelled post-dispatch are not eligible for a refund. Shipping charges applied to an order are non-refundable. Shipping will be applicable on all orders placed during Sale.",
  },
  {
    heading: "Address changes",
    body: "The shipping address can be updated post-shipment, but the PIN code and state must remain unchanged. Please communicate any address changes to hello@perforacare.com or call us at 011 4309 2293.",
  },
  {
    heading: "Delivery responsibility",
    body: "Perfora shall not be responsible for delivery taken by an alternative person.",
  },
  {
    heading: "Damage or shortage claims",
    body: "All claims for shortages or damages must be reported to customer service on the day of delivery with an unboxing video via email at hello@perforacare.com, call 011 4309 2293, or WhatsApp +91 99992 89288. An unboxing video is mandatory to claim shortage or damage in transit.",
    bold: true,
    boldNote: "An unboxing video is mandatory to claim shortage or damage in transit.",
  },
];

export default function ShippingPage() {
  return (
    <>
      <Navbar />

      {/* ── SCROLL 1: Hero + cards + policy blocks ── */}
      <section style={{ background: "#F5F3FF", padding: "clamp(80px,10vw,120px) clamp(20px,6vw,88px) clamp(60px,7vw,88px)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>

          {/* Heading */}
          <div style={{ marginBottom: "clamp(40px,5vw,56px)" }}>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#9B8CB8", marginBottom: 14 }}>
              Delivery info
            </p>
            <h1 className="font-display" style={{ fontSize: "clamp(2.2rem,5vw,3.6rem)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.08, color: "#1A0A3D", margin: "0 0 16px" }}>
              Shipping &{" "}
              <em style={{ fontStyle: "italic", fontWeight: 400, color: "#6B4FB3" }}>Delivery</em>
            </h1>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(14px,1.4vw,16px)", color: "#666077", lineHeight: 1.7, maxWidth: 540, margin: 0 }}>
              Questions? Reach us at{" "}
              <a href="mailto:hello@perforacare.com" style={{ color: "#3D1F8F", fontWeight: 600, textDecoration: "none" }}>hello@perforacare.com</a>
              {" "}or call{" "}
              <a href="tel:01143092293" style={{ color: "#3D1F8F", fontWeight: 600, textDecoration: "none" }}>011 4309 2293</a>.
            </p>
          </div>

          {/* Summary cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 210px), 1fr))", gap: 14, marginBottom: "clamp(40px,5vw,56px)" }}>
            {CARDS.map(c => (
              <div key={c.title} style={{ background: "#fff", border: "1.5px solid #EDE9FB", borderRadius: 18, padding: "22px 20px", boxShadow: "0 2px 12px rgba(61,31,143,0.05)" }}>
                <div style={{ width: 46, height: 46, borderRadius: 13, background: "#F0EBFF", color: "#3D1F8F", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                  {c.icon}
                </div>
                <h3 style={{ fontFamily: "var(--font-inter)", fontSize: 14, fontWeight: 700, color: "#1A0A3D", margin: "0 0 6px" }}>{c.title}</h3>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: 13, lineHeight: 1.65, color: "#666077", margin: 0 }}>{c.body}</p>
              </div>
            ))}
          </div>

          {/* Policy blocks */}
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 2 }}>
            {POLICIES.map((p, i) => (
              <div key={i} style={{ background: "#fff", border: "1.5px solid #EDE9FB", borderRadius: 16, padding: "22px 26px" }}>
                <h3 style={{ fontFamily: "var(--font-inter)", fontSize: 14, fontWeight: 700, color: "#1A0A3D", margin: "0 0 8px" }}>{p.heading}</h3>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: 14, lineHeight: 1.7, color: "#4A4458", margin: 0 }}>
                  {p.boldNote
                    ? p.body.replace(p.boldNote, "").trim().concat(" ")
                    : p.body}
                  {p.boldNote && <strong style={{ color: "#1A0A3D" }}>{p.boldNote}</strong>}
                </p>
              </div>
            ))}
          </div>

          {/* Return link */}
          <div style={{ marginTop: 28, padding: "18px 26px", background: "linear-gradient(145deg,#1A0A3D,#2D1260)", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" as const, gap: 12 }}>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: 14, color: "rgba(200,185,240,0.85)", margin: 0 }}>
              Want to initiate a return or check our refund policy?
            </p>
            <a href="/returns" style={{ fontFamily: "var(--font-inter)", fontSize: 14, fontWeight: 600, color: "#A78BFA", textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
              View returns policy →
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
