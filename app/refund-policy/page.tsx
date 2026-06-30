import Navbar from "../components/Navbar";
import SiteFooter from "../components/SiteFooter";

const BLOCKS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L2 7l9 5 9-5-9-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M2 17l9 5 9-5M2 12l9 5 9-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Full-priced electronics",
    body: "We will gladly issue a refund for any full priced (non-discounted) electronic product which is non-personalized and which is unopened, unused and returned within 15 days from the date of purchase. Simply write to us at hello@perforacare.com and return the products to our address. If we arrange for product pick-up, postage will be charged at actual rates and deducted from the refund amount. Personalized products are non-refundable.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3.5c-3 2-5 2.5-7 2.5 0 6 2.5 9.5 7 11 4.5-1.5 7-5 7-11-2 0-4-.5-7-2.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M8 10.5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Consumable products",
    body: "Our consumable products like toothpastes and mouthwashes once delivered cannot be repackaged or resold due to personal hygiene challenges. We cannot offer exchanges or refunds on these products.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M2 9h18M7 5V3M15 5V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Sale orders",
    bold: true,
    body: "All orders placed during the Perfora Sale are not eligible for returns, refunds, or exchanges. This policy applies to all products, including electronics and consumable items.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M2 9l9 5.5L20 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Refund method — Gift Card",
    body: "We do not provide cash refunds for Cash on Delivery or Prepaid orders. In case of a return, you will receive a Perfora Gift Card sent to your registered email on the day of order pickup. This gift card will be issued as a code with lifetime validity.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M11 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Marketplace purchases",
    body: "We do not provide refunds for products purchased from marketplaces or any other websites.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2C7.69 2 5 4.69 5 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.31-2.69-6-6-6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="11" cy="8" r="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Return address",
    body: "You can return the products at: 1st Floor, MPD Tower, Golf Course Rd, Sector 43, Gurugram, Haryana 122002, India.",
  },
];

const CLAIMS = [
  "Do not accept any tampered or damaged orders — Perfora is not responsible for damage after delivery.",
  "Warranty on electric products covers damages during delivery, or any internal defects or product failures only.",
  "No refunds will be processed if a warranty claim is accepted. A successful warranty claim makes you eligible for a replacement only.",
  "Claims for missing, damaged products, or orders marked as delivered but not received must be reported within 3 days of the date of delivery.",
  "An unboxing video or images are mandatory to process claims for shortages or damage during transit.",
];

export default function RefundPolicyPage() {
  return (
    <>
      <Navbar />
      <section style={{ background: "#F5F3FF", padding: "clamp(80px,10vw,120px) clamp(20px,6vw,88px) clamp(60px,7vw,88px)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>

          <div style={{ marginBottom: "clamp(40px,5vw,56px)" }}>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#9B8CB8", marginBottom: 14 }}>
              Policy
            </p>
            <h1 className="font-display" style={{ fontSize: "clamp(2.2rem,5vw,3.6rem)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.08, color: "#1A0A3D", margin: "0 0 16px" }}>
              Refund{" "}
              <em style={{ fontStyle: "italic", fontWeight: 400, color: "#6B4FB3" }}>Policy</em>
            </h1>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(14px,1.4vw,16px)", color: "#4A4458", lineHeight: 1.7, maxWidth: 580, margin: 0 }}>
              At Perfora, your smile and satisfaction is our highest priority. We work tirelessly to delight you with our products and make you feel special. If you are dissatisfied for any reason, write to us at{" "}
              <a href="mailto:hello@perforacare.com" style={{ color: "#3D1F8F", fontWeight: 600, textDecoration: "none" }}>hello@perforacare.com</a>.
            </p>
          </div>

          {/* Policy cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 12, marginBottom: 28 }}>
            {BLOCKS.map(b => (
              <div key={b.title} style={{ background: "#fff", border: `1.5px solid ${b.bold ? "#3D1F8F" : "#EDE9FB"}`, borderRadius: 18, padding: "22px 22px", boxShadow: b.bold ? "0 4px 20px rgba(61,31,143,0.12)" : "0 2px 10px rgba(61,31,143,0.04)" }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: b.bold ? "#3D1F8F" : "#F0EBFF", color: b.bold ? "#fff" : "#3D1F8F", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                  {b.icon}
                </div>
                <h3 style={{ fontFamily: "var(--font-inter)", fontSize: 14, fontWeight: 700, color: "#1A0A3D", margin: "0 0 8px" }}>{b.title}</h3>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: 13.5, lineHeight: 1.7, color: "#4A4458", margin: 0 }}>{b.body}</p>
              </div>
            ))}
          </div>

          {/* Claims notice */}
          <div style={{ background: "linear-gradient(145deg,#1A0A3D,#2D1260)", borderRadius: 18, padding: "clamp(24px,3vw,32px)", border: "1px solid rgba(167,139,250,0.2)" }}>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: "#A78BFA", marginBottom: 16 }}>
              Important notices
            </p>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: 12 }}>
              {CLAIMS.map((c, i) => (
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(167,139,250,0.15)", color: "#A78BFA", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1, fontSize: 11, fontWeight: 700, fontFamily: "var(--font-inter)" }}>
                    {i + 1}
                  </div>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: 14, lineHeight: 1.65, color: "rgba(200,185,240,0.88)", margin: 0 }}>{c}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid rgba(167,139,250,0.15)", display: "flex", gap: 14, flexWrap: "wrap" as const }}>
              <a href="mailto:hello@perforacare.com" style={{ fontFamily: "var(--font-inter)", fontSize: 13.5, fontWeight: 600, color: "#C4B5F0", textDecoration: "none" }}>📩 hello@perforacare.com</a>
              <a href="tel:01143092293" style={{ fontFamily: "var(--font-inter)", fontSize: 13.5, fontWeight: 600, color: "#C4B5F0", textDecoration: "none" }}>📞 011 4309 2293</a>
              <a href="https://wa.me/919999289288" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-inter)", fontSize: 13.5, fontWeight: 600, color: "#C4B5F0", textDecoration: "none" }}>💬 WhatsApp +91 99992 89288</a>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
