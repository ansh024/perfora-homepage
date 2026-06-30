"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import SiteFooter from "../components/SiteFooter";

const CHANNELS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M2 7l9 5.5L20 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    label: "Email us",
    value: "hello@perforacare.com",
    href: "mailto:hello@perforacare.com",
    tag: "General enquiries",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M20 15.5c0 .4-.1.8-.3 1.2-.2.4-.4.7-.8 1-.5.5-1 .7-1.7.7-.4 0-.9-.1-1.4-.3-1.9-.8-3.6-2-5.1-3.5-1.5-1.5-2.7-3.2-3.5-5.1C7 9 6.9 8.5 6.9 8c0-.6.2-1.1.6-1.6.5-.5 1-.7 1.6-.7.2 0 .4 0 .6.1.2.1.4.2.6.5l2 2.8c.2.3.3.5.4.8.1.2.1.4.1.6 0 .3-.1.5-.2.7-.1.2-.3.4-.5.6l-.5.6c-.1.1-.1.2-.1.3 0 .1 0 .2.1.3.2.4.5.7.9 1.2.4.5.8.9 1.3 1.3.5.4.9.7 1.3.9.1.1.2.1.3.1.1 0 .2-.1.3-.2l.6-.6c.2-.2.4-.4.7-.5.2-.1.5-.2.7-.2.2 0 .4 0 .6.1.2.1.5.2.8.4l2.9 2c.3.2.5.4.6.7.1.2.1.4.1.6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Call us",
    value: "011 4309 2293",
    href: "tel:01143092293",
    tag: "Mon–Sat · 10 AM–6 PM",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2C6.03 2 2 6.03 2 11c0 1.6.42 3.1 1.14 4.42L2 20l4.7-1.12A8.96 8.96 0 0011 20c4.97 0 9-4.03 9-9s-4.03-9-9-9z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M7.5 10.5c.28-1.22 1.38-2.1 2.65-2.1.47 0 .92.13 1.3.36.75.45 1.25 1.26 1.25 2.18 0 1.27-.87 2.06-1.72 2.73-.57.44-1.06.88-1.29 1.39" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="11" cy="16.75" r=".75" fill="currentColor"/>
      </svg>
    ),
    label: "WhatsApp",
    value: "+91 99992 89288",
    href: "https://wa.me/919999289288",
    tag: "Quickest response",
  },
];

const EXTRAS = [
  { label: "Collaborations", email: "collab@perforacare.com" },
  { label: "Careers", email: "future@perforacare.com" },
  { label: "Corporate gifting", email: "hello@perforacare.com" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <Navbar />

      {/* ── SCROLL 1: hero + channels + form ── */}
      <section style={{ background: "#F5F3FF", minHeight: "100vh", display: "flex", alignItems: "center", padding: "clamp(80px,10vw,120px) clamp(20px,6vw,88px) clamp(60px,8vw,96px)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%" }}>

          {/* heading */}
          <div style={{ marginBottom: "clamp(40px,5vw,60px)" }}>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9B8CB8", marginBottom: 14 }}>Get in touch</p>
            <h1 className="font-display" style={{ fontSize: "clamp(2.2rem,5vw,3.8rem)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.08, color: "#1A0A3D", margin: "0 0 16px" }}>
              We'd love to{" "}
              <em style={{ fontStyle: "italic", fontWeight: 400, color: "#6B4FB3" }}>hear from you.</em>
            </h1>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(14px,1.4vw,16px)", color: "#666077", lineHeight: 1.7, maxWidth: 520, margin: 0 }}>
              Our team is available Monday to Saturday, 10 AM – 6 PM. We typically reply within a few hours.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: "clamp(24px,3vw,44px)", alignItems: "start" }}>

            {/* Left — channels + extras */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>

              {/* Contact channel cards */}
              {CHANNELS.map(c => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{ display: "flex", alignItems: "center", gap: 18, background: "#fff", border: "1.5px solid #EDE9FB", borderRadius: 18, padding: "20px 22px", textDecoration: "none", transition: "border-color 0.18s, box-shadow 0.18s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#C4B5F0"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(61,31,143,0.10)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#EDE9FB"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
                >
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: "#F0EBFF", color: "#3D1F8F", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {c.icon}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#9B8CB8", margin: "0 0 3px" }}>{c.label}</p>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: 15, fontWeight: 600, color: "#1A0A3D", margin: "0 0 2px", letterSpacing: "-0.01em" }}>{c.value}</p>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: 12, color: "#9B8CB8", margin: 0 }}>{c.tag}</p>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, opacity: 0.4 }}>
                    <path d="M3 8h10M9 5l4 3-4 3" stroke="#3D1F8F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              ))}

              {/* Address */}
              <div style={{ background: "#fff", border: "1.5px solid #EDE9FB", borderRadius: 18, padding: "20px 22px", display: "flex", gap: 18, alignItems: "flex-start" }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: "#F0EBFF", color: "#3D1F8F", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M11 2C7.69 2 5 4.69 5 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.31-2.69-6-6-6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                    <circle cx="11" cy="8" r="2" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#9B8CB8", margin: "0 0 5px" }}>Office</p>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: 14, color: "#1A0A3D", lineHeight: 1.6, margin: "0 0 8px" }}>
                    1st Floor, MPD Tower, Golf Course Rd,<br />
                    Sector 43, Gurugram, Haryana 122002
                  </p>
                  <a href="https://maps.google.com/?q=MPD+Tower+Golf+Course+Rd+Sector+43+Gurugram" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-inter)", fontSize: 12.5, fontWeight: 600, color: "#6B4FB3", textDecoration: "none" }}>
                    Open in Google Maps →
                  </a>
                </div>
              </div>

              {/* Extras */}
              <div style={{ background: "linear-gradient(145deg,#1A0A3D,#2D1260)", border: "1px solid rgba(167,139,250,0.2)", borderRadius: 18, padding: "20px 22px" }}>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#A78BFA", margin: "0 0 14px" }}>Other enquiries</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {EXTRAS.map(x => (
                    <div key={x.label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                      <span style={{ fontFamily: "var(--font-inter)", fontSize: 13, color: "rgba(200,185,240,0.75)" }}>{x.label}</span>
                      <a href={`mailto:${x.email}`} style={{ fontFamily: "var(--font-inter)", fontSize: 13, fontWeight: 600, color: "#C4B5F0", textDecoration: "none" }}>{x.email}</a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div style={{ background: "#fff", border: "1.5px solid #EDE9FB", borderRadius: 22, padding: "clamp(28px,3.5vw,44px)", boxShadow: "0 4px 24px rgba(61,31,143,0.07)" }}>
              {sent ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#F0EBFF", color: "#3D1F8F", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                      <path d="M5 13l6 6L21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="font-display" style={{ fontSize: "1.6rem", fontWeight: 700, color: "#1A0A3D", margin: "0 0 10px" }}>Message sent!</h3>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: 14, color: "#666077", lineHeight: 1.65, margin: 0 }}>We'll get back to you within a few hours. Talk soon.</p>
                </div>
              ) : (
                <>
                  <h2 className="font-display" style={{ fontSize: "clamp(1.4rem,2.4vw,1.9rem)", fontWeight: 700, color: "#1A0A3D", margin: "0 0 6px", letterSpacing: "-0.02em" }}>Send us a message</h2>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: 13.5, color: "#9B8CB8", margin: "0 0 28px", lineHeight: 1.5 }}>We read every message personally.</p>

                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    {(["name", "email", "message"] as const).map(field => {
                      const isTextarea = field === "message";
                      const labels: Record<string, string> = { name: "Your Name", email: "Your Email", message: "Your Message" };
                      const inputStyle: React.CSSProperties = {
                        width: "100%", fontFamily: "var(--font-inter)", fontSize: 14.5, color: "#1A0A3D",
                        background: "#F7F4FF", border: "1.5px solid #EDE9FB", borderRadius: 12, padding: "13px 16px",
                        outline: "none", resize: isTextarea ? "vertical" : undefined,
                        minHeight: isTextarea ? 130 : undefined, boxSizing: "border-box",
                      };
                      return (
                        <div key={field}>
                          <label style={{ fontFamily: "var(--font-inter)", fontSize: 12, fontWeight: 600, color: "#4A4458", letterSpacing: "0.04em", display: "block", marginBottom: 7 }}>
                            {labels[field]}{field !== "name" ? " *" : ""}
                          </label>
                          {isTextarea ? (
                            <textarea
                              required
                              value={form[field]}
                              onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
                              style={inputStyle}
                              onFocus={e => { e.currentTarget.style.borderColor = "#9B7FD4"; e.currentTarget.style.background = "#fff"; }}
                              onBlur={e => { e.currentTarget.style.borderColor = "#EDE9FB"; e.currentTarget.style.background = "#F7F4FF"; }}
                            />
                          ) : (
                            <input
                              type={field === "email" ? "email" : "text"}
                              required={field === "email"}
                              value={form[field]}
                              onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
                              style={inputStyle}
                              onFocus={e => { e.currentTarget.style.borderColor = "#9B7FD4"; e.currentTarget.style.background = "#fff"; }}
                              onBlur={e => { e.currentTarget.style.borderColor = "#EDE9FB"; e.currentTarget.style.background = "#F7F4FF"; }}
                            />
                          )}
                        </div>
                      );
                    })}
                    <button
                      type="submit"
                      style={{ marginTop: 4, padding: "14px 28px", borderRadius: 40, background: "#3D1F8F", color: "#fff", fontFamily: "var(--font-inter)", fontSize: 14.5, fontWeight: 600, border: "none", cursor: "pointer", letterSpacing: "0.01em", transition: "background 0.18s, transform 0.15s" }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#5130B8"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#3D1F8F"; (e.currentTarget as HTMLElement).style.transform = "none"; }}
                    >
                      Send message →
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
