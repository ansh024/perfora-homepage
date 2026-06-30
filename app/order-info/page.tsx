import Navbar from "../components/Navbar";
import SiteFooter from "../components/SiteFooter";

const CARDS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="3" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 3V1M15 3V1M2 8h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M6 13h4M6 16.5h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    label: "Order Confirmation",
    title: "Placing an order is extremely simple",
    body: `You can complete your purchase by entering your contact details on checkout. You can also become a registered user on the website to facilitate future purchases.

You can register by clicking on the user icon on the right and filling the necessary information. We only ask for details that are absolutely necessary.

Once you register, your order information will always be available to you in your account. If you are a guest customer, you can access the details through the link we send you in your confirmation email.`,
    steps: [
      "Add items to your cart",
      "Enter contact details at checkout",
      "Receive confirmation email with order details",
      "Track via your account or the link in the email",
    ],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 11h14M13 7l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 3H5a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    label: "Order Modification",
    title: "Modify before processing",
    body: "We can modify your order before it has been processed. Please note we will not be able to modify any orders post processing.",
    cta: { label: "Write to us at hello@perforacare.com", href: "mailto:hello@perforacare.com" },
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 8l6 6M14 8l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    label: "Order Cancellation",
    title: "Cancel within 6 hours or before printing",
    body: "We will only be able to cancel orders that have not been processed or printed, or cancelled post 6 hours whichever is earlier. In case your order is printed, orders cannot be cancelled.",
    cta: { label: "Write to us at hello@perforacare.com", href: "mailto:hello@perforacare.com" },
    warning: true,
  },
];

export default function OrderInfoPage() {
  return (
    <>
      <Navbar />
      <section style={{ background: "#F5F3FF", minHeight: "100vh", display: "flex", alignItems: "center", padding: "clamp(80px,10vw,120px) clamp(20px,6vw,88px) clamp(60px,7vw,88px)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", width: "100%" }}>

          <div style={{ marginBottom: "clamp(40px,5vw,56px)" }}>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#9B8CB8", marginBottom: 14 }}>
              Orders
            </p>
            <h1 className="font-display" style={{ fontSize: "clamp(2.2rem,5vw,3.6rem)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.08, color: "#1A0A3D", margin: "0 0 16px" }}>
              Order Confirmation{" "}
              <em style={{ fontStyle: "italic", fontWeight: 400, color: "#6B4FB3" }}>&amp; Cancellation</em>
            </h1>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(14px,1.4vw,16px)", color: "#666077", lineHeight: 1.7, maxWidth: 540, margin: 0 }}>
              Everything you need to know about placing, modifying, and cancelling your Perfora order.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column" as const, gap: 14 }}>
            {CARDS.map(c => (
              <div key={c.label} style={{ background: "#fff", border: `1.5px solid ${c.warning ? "#FDEEEE" : "#EDE9FB"}`, borderRadius: 20, overflow: "hidden" }}>
                {/* Header */}
                <div style={{ background: c.warning ? "#FFF5F5" : "#F7F4FF", borderBottom: `1px solid ${c.warning ? "#FDEEEE" : "#EDE9FB"}`, padding: "16px 26px", display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 11, background: c.warning ? "#FDEEEE" : "#F0EBFF", color: c.warning ? "#C0392B" : "#3D1F8F", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {c.icon}
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: 10.5, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: c.warning ? "#C0392B" : "#9B8CB8", margin: 0 }}>{c.label}</p>
                    <h2 style={{ fontFamily: "var(--font-inter)", fontSize: 15, fontWeight: 700, color: "#1A0A3D", margin: "2px 0 0" }}>{c.title}</h2>
                  </div>
                </div>
                {/* Body */}
                <div style={{ padding: "22px 26px", display: "grid", gridTemplateColumns: c.steps ? "1fr 1fr" : "1fr", gap: "clamp(16px,2vw,28px)" }}>
                  <div>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: 14, lineHeight: 1.78, color: "#4A4458", margin: "0 0 16px", whiteSpace: "pre-line" as const }}>{c.body}</p>
                    {c.cta && (
                      <a href={c.cta.href} style={{ fontFamily: "var(--font-inter)", fontSize: 13.5, fontWeight: 600, color: "#3D1F8F", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
                        {c.cta.label}
                        <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="#3D1F8F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </a>
                    )}
                  </div>
                  {c.steps && (
                    <div>
                      <p style={{ fontFamily: "var(--font-inter)", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#9B8CB8", marginBottom: 14 }}>How it works</p>
                      <div style={{ display: "flex", flexDirection: "column" as const, gap: 10 }}>
                        {c.steps.map((s, i) => (
                          <div key={i} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                            <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#F0EBFF", color: "#3D1F8F", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 12, fontWeight: 700, fontFamily: "var(--font-inter)" }}>
                              {i + 1}
                            </div>
                            <p style={{ fontFamily: "var(--font-inter)", fontSize: 13.5, color: "#1A0A3D", margin: 0 }}>{s}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Quick contact */}
          <div style={{ marginTop: 20, background: "linear-gradient(145deg,#1A0A3D,#2D1260)", borderRadius: 16, padding: "18px 26px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" as const, gap: 12, border: "1px solid rgba(167,139,250,0.2)" }}>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: 14, color: "rgba(200,185,240,0.85)", margin: 0 }}>
              Need help with an order? We're here Mon–Sat, 10 AM–6 PM.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" as const }}>
              <a href="mailto:hello@perforacare.com" style={{ fontFamily: "var(--font-inter)", fontSize: 13.5, fontWeight: 600, color: "#C4B5F0", textDecoration: "none" }}>📩 hello@perforacare.com</a>
              <a href="https://wa.me/919999289288" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-inter)", fontSize: 13.5, fontWeight: 600, color: "#C4B5F0", textDecoration: "none" }}>💬 WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
