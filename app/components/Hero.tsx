"use client";

import { motion } from "framer-motion";

const NAV_H = 61;

export default function Hero() {
  return (
    <>
      {/* ── Mobile layout ── */}
      <section className="block md:hidden" aria-label="Hero" style={{ paddingTop: NAV_H }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/mobile-hero.png"
          alt="Perfora complete oral care products"
          style={{ width: "100%", display: "block" }}
        />

        <div style={{ background: "#EFEFF1", padding: "24px 20px 40px", textAlign: "center" }}>
          {/* Tag pills */}
          <div style={{ display: "flex", gap: 8, marginBottom: 16, justifyContent: "center" }}>
            {["Paraben Free", "Clinically Tested"].map((t) => (
              <div
                key={t}
                style={{
                  padding:      "5px 14px",
                  borderRadius: 999,
                  border:       "1px solid rgba(26,10,61,0.25)",
                  fontSize:     11,
                  fontWeight:   500,
                  color:        "#1A0A3D",
                  fontFamily:   "var(--font-inter)",
                }}
              >
                {t}
              </div>
            ))}
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily:    "var(--spectral)",
              fontSize:      "30px",
              fontWeight:    600,
              color:         "#1A0A3D",
              lineHeight:    1.08,
              marginBottom:  6,
            }}
          >
            Your Complete Oral Ritual.
          </h1>

          {/* Body */}
          <p
            style={{
              fontFamily:   "var(--font-inter)",
              fontSize:     16,
              fontWeight:   400,
              color:        "#232323",
              lineHeight:   1.55,
              marginBottom: 28,
            }}
          >
            The full Perfora regimen - brush, whiten, rinse, repeat.
          </p>

          {/* CTA */}
          <a
            href="#products"
            style={{
              display:         "flex",
              alignItems:      "center",
              justifyContent:  "center",
              gap:             8,
              background:      "#1A0A3D",
              color:           "#FFFFFF",
              fontFamily:      "var(--font-inter)",
              fontSize:        14,
              fontWeight:      600,
              padding:         "15px 28px",
              borderRadius:    999,
              textDecoration:  "none",
            }}
          >
            Shop Oral Healthcare
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
              <path d="M2 6.5h9M8 3l3.5 3.5L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>

      {/* ── Desktop layout ── */}
      <section
        className="hidden md:block"
        aria-label="Hero"
        style={{
          position:        "relative",
          backgroundColor: "#7B4ABD",
          aspectRatio:     "292/122",
          width:           "100%",
          overflow:        "hidden",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero-v5.png"
          alt=""
          aria-hidden
          style={{
            position:       "absolute",
            inset:          0,
            width:          "100%",
            height:         "100%",
            objectFit:      "cover",
            objectPosition: "right top",
            display:        "block",
            pointerEvents:  "none",
          }}
        />

        <div
          className="absolute inset-0 flex flex-col justify-center"
          style={{ paddingTop: NAV_H }}
        >
          <div
            className="relative z-10 flex flex-col pl-14 pr-6 py-0 lg:pl-16 lg:pr-8"
            style={{ maxWidth: "clamp(280px, 48%, 560px)" }}
          >
            {/* Tag pills */}
            <div className="flex items-center gap-2 self-start mb-3">
              {["Paraben Free", "Clinically Tested"].map((t) => (
                <div
                  key={t}
                  className="inline-flex items-center px-3 py-[5px] rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.14)",
                    border:     "1px solid rgba(255,255,255,0.55)",
                  }}
                >
                  <span
                    className="text-[10px] font-semibold tracking-[0.13em] uppercase"
                    style={{ color: "rgba(255,255,255,0.92)", fontFamily: "var(--font-inter)" }}
                  >
                    {t}
                  </span>
                </div>
              ))}
            </div>

            {/* Headline */}
            <h1
              className="mb-3"
              style={{
                fontFamily:    "var(--spectral)",
                fontSize:      "48px",
                fontWeight:    500,
                color:         "#FFFFFF",
                lineHeight:    "120%",
                fontStyle:     "normal",
                whiteSpace:    "normal",
                letterSpacing: "0",
              }}
            >
              Your Complete
              <br />
              Oral Ritual.
            </h1>

            {/* Body */}
            <p
              className="text-[14.5px] leading-[1.55] mb-6 max-w-[300px]"
              style={{ color: "rgba(255,255,255,0.72)", fontFamily: "var(--font-inter)", fontWeight: 500 }}
            >
              The full Perfora regimen - brush, whiten, rinse, repeat.
            </p>

            {/* CTA */}
            <motion.a
              href="#products"
              whileHover={{ scale: 1.02, opacity: 0.92 }}
              whileTap={{ scale: 0.975 }}
              className="inline-flex items-center gap-2 px-5 py-[11px] rounded-sm text-[13px] font-medium self-start"
              style={{
                background:    "#FFFFFF",
                color:         "#1A0A3D",
                fontFamily:    "var(--font-inter)",
                letterSpacing: "0.01em",
              }}
            >
              Shop Oral Healthcare
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
                <path d="M2 6.5h9M8 3l3.5 3.5L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
          </div>
        </div>
      </section>
    </>
  );
}
