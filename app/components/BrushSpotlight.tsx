"use client";

export default function BrushSpotlight() {
  return (
    <section
      style={{
        background:     "#5D4697",
        padding:        "clamp(40px, 5vw, 64px) 24px",
        display:        "flex",
        flexDirection:  "column",
        alignItems:     "center",
        gap:            "clamp(24px, 3vw, 36px)",
      }}
    >
      {/* Headline */}
      <h2
        style={{
          fontFamily:  "var(--spectral), Georgia, serif",
          fontSize:    "clamp(1.75rem, 3.5vw, 2.75rem)",
          fontWeight:  400,
          color:       "#FFFFFF",
          textAlign:   "center",
          lineHeight:  1.2,
          margin:      0,
        }}
      >
        Your Perfect Brush is Here!
      </h2>

      {/* White pill container with GIF */}
      <div
        style={{
          background:     "#FFFFFF",
          borderRadius:   999,
          width:          "100%",
          maxWidth:       760,
          padding:        "16px clamp(32px, 5vw, 56px)",
          overflow:       "hidden",
          height:         150,
          display:        "flex",
          alignItems:     "center",
          justifyContent: "center",
          position:       "relative",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/ezgif.com-speed.gif"
          alt="Perfora electric toothbrush"
          style={{
            height:    "380px",
            width:     "auto",
            display:   "block",
            flexShrink: 0,
          }}
        />
      </div>

      {/* Shop Now button */}
      <a
        href="/collections/electric-toothbrush"
        style={{
          background:    "#FFFFFF",
          color:         "#3D1F8F",
          fontFamily:    "var(--font-inter)",
          fontSize:      "clamp(14px, 1.2vw, 16px)",
          fontWeight:    600,
          letterSpacing: "0.01em",
          padding:       "14px 48px",
          borderRadius:  999,
          textDecoration:"none",
          display:       "inline-block",
          transition:    "opacity 0.2s",
        }}
        onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
        onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
      >
        Shop Now
      </a>
    </section>
  );
}
