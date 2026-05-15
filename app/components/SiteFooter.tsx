"use client";

import { useState } from "react";

// ─── Data ──────────────────────────────────────────────────────────────────────
const QUICK_LINKS = ["Blog", "Contact Us", "Shipping & Delivery", "Refund Policy"];
const SUPPORT_LINKS = ["Loyalty", "Order Tracker", "FAQs", "Privacy Policy"];

// ─── Social icons ──────────────────────────────────────────────────────────────
function SocialIcon({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <a
      href="#"
      aria-label={label}
      style={{
        width:           38,
        height:          38,
        borderRadius:    "50%",
        background:      "#1A0A3D",
        display:         "flex",
        alignItems:      "center",
        justifyContent:  "center",
        flexShrink:      0,
        transition:      "background 0.18s",
      }}
      onMouseEnter={e => (e.currentTarget.style.background = "#3D1F8F")}
      onMouseLeave={e => (e.currentTarget.style.background = "#1A0A3D")}
    >
      {children}
    </a>
  );
}

// ─── Column heading ────────────────────────────────────────────────────────────
function ColHeading({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily:    "var(--font-inter)",
        fontSize:      11,
        fontWeight:    700,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color:         "#1A0A3D",
        marginBottom:  18,
      }}
    >
      {children}
    </p>
  );
}

// ─── Footer link ───────────────────────────────────────────────────────────────
function FooterLink({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="#"
      style={{
        display:        "block",
        fontFamily:     "var(--font-inter)",
        fontSize:       13,
        color:          "#6B5A8A",
        lineHeight:     1,
        marginBottom:   13,
        textDecoration: "none",
        transition:     "color 0.15s",
      }}
      onMouseEnter={e => (e.currentTarget.style.color = "#3D1F8F")}
      onMouseLeave={e => (e.currentTarget.style.color = "#6B5A8A")}
    >
      {children}
    </a>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────────
export default function SiteFooter() {
  const [email, setEmail] = useState("");

  return (
    <footer
      aria-label="Perfora footer"
      style={{
        background: "#F3EFF9",
        borderTop:  "1px solid #E4DDF5",
        position:   "relative",
        overflow:   "hidden",
      }}
    >
      {/* ── Main columns ── */}
      <div
        style={{
          maxWidth:     1280,
          margin:       "0 auto",
          paddingLeft:  "clamp(20px, 4vw, 48px)",
          paddingRight: "clamp(20px, 4vw, 48px)",
          paddingTop:   "clamp(40px, 4vw, 56px)",
          paddingBottom: "clamp(32px, 3vw, 44px)",
          position:     "relative",
          zIndex:       1,
        }}
      >
        <div
          className="flex flex-col md:flex-row"
          style={{ gap: "clamp(32px, 4vw, 48px)" }}
        >
          {/* ── Col 1: About ── */}
          <div style={{ flex: "0 0 auto", maxWidth: 280 }}>
            <ColHeading>About Perfora</ColHeading>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize:   13,
                color:      "#6B5A8A",
                lineHeight: 1.7,
              }}
            >
              Perfora is practical, promising and precisely designed to elevate your
              everyday oral care. We are an innovative brand with products that make
              oral care easy, inviting and enjoyable!
            </p>
          </div>

          {/* ── Col 2: Quick Links ── */}
          <div style={{ flex: "0 0 auto" }}>
            <ColHeading>Quick Links</ColHeading>
            {QUICK_LINKS.map(l => <FooterLink key={l}>{l}</FooterLink>)}
          </div>

          {/* ── Col 3: Support ── */}
          <div style={{ flex: "0 0 auto" }}>
            <ColHeading>Support</ColHeading>
            {SUPPORT_LINKS.map(l => <FooterLink key={l}>{l}</FooterLink>)}
          </div>

          {/* ── Col 4: Help + Newsletter ── */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <ColHeading>Happy to Help!</ColHeading>

            {/* Contact row */}
            <div
              style={{
                display:   "flex",
                gap:       "clamp(16px, 3vw, 40px)",
                flexWrap:  "wrap",
                marginBottom: 6,
              }}
            >
              {/* WhatsApp */}
              <a
                href="tel:+919999289288"
                style={{
                  display:        "flex",
                  alignItems:     "center",
                  gap:            7,
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    width:           22,
                    height:          22,
                    borderRadius:    "50%",
                    background:      "#25D366",
                    display:         "flex",
                    alignItems:      "center",
                    justifyContent:  "center",
                    flexShrink:      0,
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize:   13,
                    fontWeight: 600,
                    color:      "#1A0A3D",
                  }}
                >
                  +91 9999289288
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:hello@perfora.com"
                style={{
                  display:        "flex",
                  alignItems:     "center",
                  gap:            7,
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    width:           22,
                    height:          22,
                    borderRadius:    "50%",
                    background:      "#3D1F8F",
                    display:         "flex",
                    alignItems:      "center",
                    justifyContent:  "center",
                    flexShrink:      0,
                  }}
                >
                  <svg width="11" height="8" viewBox="0 0 20 14" fill="none">
                    <path d="M18 0H2C.9 0 0 .9 0 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V2l8 5 8-5v2z" fill="white" />
                  </svg>
                </span>
                <span
                  style={{
                    fontFamily:     "var(--font-inter)",
                    fontSize:       13,
                    fontWeight:     600,
                    color:          "#3D1F8F",
                    textDecoration: "none",
                  }}
                >
                  hello@perfora.com
                </span>
              </a>
            </div>

            <p
              style={{
                fontFamily:   "var(--font-inter)",
                fontSize:     11.5,
                color:        "#9B8FBB",
                lineHeight:   1.5,
                marginBottom: 20,
              }}
            >
              We&rsquo;re here to help Monday–Saturday, 10 AM to 6 PM.
            </p>

            {/* Newsletter */}
            <p
              style={{
                fontFamily:    "var(--font-inter)",
                fontSize:      11,
                fontWeight:    700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color:         "#1A0A3D",
                marginBottom:  12,
              }}
            >
              Join the Perfora Family
            </p>

            <form
              onSubmit={e => e.preventDefault()}
              style={{ display: "flex", gap: 8, maxWidth: 380 }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{
                  flex:         1,
                  height:       44,
                  borderRadius: 8,
                  border:       "1.5px solid #D4CBF8",
                  background:   "#FFFFFF",
                  padding:      "0 14px",
                  fontFamily:   "var(--font-inter)",
                  fontSize:     13,
                  color:        "#1A0A3D",
                  outline:      "none",
                  minWidth:     0,
                }}
                onFocus={e => (e.currentTarget.style.borderColor = "#3D1F8F")}
                onBlur={e  => (e.currentTarget.style.borderColor = "#D4CBF8")}
              />
              <button
                type="submit"
                style={{
                  height:        44,
                  padding:       "0 22px",
                  borderRadius:  8,
                  background:    "#3D1F8F",
                  color:         "#FFFFFF",
                  fontFamily:    "var(--font-inter)",
                  fontSize:      13,
                  fontWeight:    600,
                  border:        "none",
                  cursor:        "pointer",
                  whiteSpace:    "nowrap",
                  transition:    "background 0.18s",
                  flexShrink:    0,
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "#2D1570")}
                onMouseLeave={e => (e.currentTarget.style.background = "#3D1F8F")}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* ── Divider ── */}
        <div
          style={{
            height:     1,
            background: "#E0D8F0",
            margin:     "clamp(28px, 3vw, 40px) 0 clamp(20px, 2.5vw, 30px)",
          }}
        />

        {/* ── Social + copyright ── */}
        <div
          style={{
            display:        "flex",
            flexDirection:  "column",
            alignItems:     "center",
            gap:            16,
          }}
        >
          {/* Social icons */}
          <div style={{ display: "flex", gap: 10 }}>
            {/* Facebook */}
            <SocialIcon label="Perfora on Facebook">
              <svg width="10" height="18" viewBox="0 0 10 18" fill="none">
                <path d="M6.5 18V9.75h2.75l.375-3H6.5V5.25c0-.875.25-1.5 1.625-1.5H9.75V1.125C9.375 1.063 8.313 1 7.063 1 4.625 1 3 2.438 3 5.125V6.75H.25v3H3V18h3.5z" fill="white" />
              </svg>
            </SocialIcon>

            {/* X / Twitter */}
            <SocialIcon label="Perfora on X">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M10.95 1h2.09L8.47 6.34 14 13H9.6L6.18 8.56 2.27 13H.18l4.87-5.67L0 1h4.51l3.1 4.1L10.95 1zm-.74 10.8h1.16L3.83 2.19H2.58l7.63 9.61z" fill="white" />
              </svg>
            </SocialIcon>

            {/* Instagram */}
            <SocialIcon label="Perfora on Instagram">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 0C5.1 0 4.86.01 4.12.04 3.38.08 2.87.2 2.42.37c-.46.18-.86.42-1.25.81C.78 1.57.54 1.96.37 2.42.2 2.87.08 3.38.04 4.12.01 4.86 0 5.1 0 7s.01 2.14.04 2.88c.04.74.16 1.25.33 1.7.18.46.42.86.81 1.25.39.39.79.63 1.25.81.45.17.96.29 1.7.33.74.03.98.04 2.87.04s2.14-.01 2.88-.04c.74-.04 1.25-.16 1.7-.33.46-.18.86-.42 1.25-.81.39-.39.63-.79.81-1.25.17-.45.29-.96.33-1.7.03-.74.04-.98.04-2.88s-.01-2.14-.04-2.88c-.04-.74-.16-1.25-.33-1.7-.18-.46-.42-.86-.81-1.25C12.43.78 12.04.54 11.58.37 11.13.2 10.62.08 9.88.04 9.14.01 8.9 0 7 0zm0 1.26c1.87 0 2.09.01 2.83.04.68.03 1.05.14 1.3.24.32.13.56.28.8.52.24.24.4.48.52.8.1.25.21.62.24 1.3.03.74.04.96.04 2.84s-.01 2.1-.04 2.83c-.03.68-.14 1.05-.24 1.3-.12.32-.28.55-.52.8-.24.24-.48.4-.8.52-.25.1-.62.21-1.3.24-.74.03-.96.04-2.83.04s-2.1-.01-2.83-.04c-.68-.03-1.05-.14-1.3-.24-.32-.12-.55-.28-.8-.52-.24-.25-.4-.48-.52-.8-.1-.25-.21-.62-.24-1.3-.03-.73-.04-.96-.04-2.83s.01-2.1.04-2.84c.03-.68.14-1.05.24-1.3.12-.32.28-.56.52-.8.25-.24.48-.4.8-.52.25-.1.62-.21 1.3-.24.73-.03.96-.04 2.83-.04zM7 3.4a3.6 3.6 0 100 7.2A3.6 3.6 0 007 3.4zm0 5.94a2.34 2.34 0 110-4.68 2.34 2.34 0 010 4.68zm4.59-6.08a.84.84 0 100 1.68.84.84 0 000-1.68z" fill="white" />
              </svg>
            </SocialIcon>

            {/* YouTube */}
            <SocialIcon label="Perfora on YouTube">
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                <path d="M15.67 1.88A2.01 2.01 0 0014.26.46C13.02.12 8 .12 8 .12s-5.02 0-6.26.34A2.01 2.01 0 00.33 1.88C0 3.13 0 5.72 0 5.72s0 2.59.33 3.84a2.01 2.01 0 001.41 1.42C2.98 11.32 8 11.32 8 11.32s5.02 0 6.26-.34a2.01 2.01 0 001.41-1.42C16 8.31 16 5.72 16 5.72s0-2.59-.33-3.84zM6.4 8.15V3.29l4.18 2.43L6.4 8.15z" fill="white" />
              </svg>
            </SocialIcon>
          </div>

          {/* Copyright */}
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize:   12,
              color:      "#9B8FBB",
            }}
          >
            &copy; 2023 Perfora. All rights reserved.
          </p>
        </div>
      </div>

      {/* ── Oversized watermark wordmark ── */}
      <div
        aria-hidden
        style={{
          position:       "absolute",
          bottom:         "-14%",
          left:           "50%",
          transform:      "translateX(-50%)",
          whiteSpace:     "nowrap",
          fontFamily:     "var(--font-display)",
          fontSize:       "clamp(100px, 18vw, 230px)",
          fontWeight:     700,
          fontStyle:      "italic",
          color:          "rgba(180,165,218,0.22)",
          letterSpacing:  "-0.03em",
          lineHeight:     1,
          pointerEvents:  "none",
          userSelect:     "none",
          zIndex:         0,
        }}
      >
        perfora
        <sup
          style={{
            fontSize:      "0.28em",
            verticalAlign: "super",
            lineHeight:    0,
            opacity:       0.7,
          }}
        >
          ®
        </sup>
      </div>
    </footer>
  );
}
