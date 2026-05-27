import Image from "next/image";

const RESULTS = [
  {
    badge: "Instant Stabilization",
    badgeColor: "#6B4FB3",
    badgeBg: "#F0ECFF",
    desc: "The most natural pigment brighteners solve surface whiteness on the tooth surface.",
  },
  {
    badge: "Surface stain removal",
    badgeColor: "#0F766E",
    badgeBg: "#CCFBF1",
    desc: "Non-abrasive cleaning agents effectively dissolve stains from tooth surface.",
  },
  {
    badge: "Long-term brightness",
    badgeColor: "#1D4ED8",
    badgeBg: "#DBEAFE",
    desc: "Long-term brightness is maintained through persistent colour correction & sensitivity protection.",
  },
];

export default function PDPResults7Days() {
  return (
    <section style={{ background: "#FAFAFA", padding: "48px 20px 48px" }}>

      {/* Heading */}
      <h2
        style={{
          fontFamily: "var(--spectral)",
          fontSize: "clamp(1.4rem, 5.5vw, 2rem)",
          fontWeight: 600,
          lineHeight: 1.25,
          color: "#1A0A3D",
          marginBottom: 28,
        }}
      >
        Results that you can feel in as little as{" "}
        <em style={{ fontStyle: "italic", color: "#6B4FB3", fontWeight: 400 }}>
          7 days
        </em>
      </h2>

      {/* Feature points */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 22,
          marginBottom: 36,
        }}
      >
        {RESULTS.map((result, i) => (
          <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
            <span
              style={{
                flexShrink: 0,
                padding: "5px 12px",
                borderRadius: 999,
                background: result.badgeBg,
                color: result.badgeColor,
                fontFamily: "var(--font-inter)",
                fontSize: 11,
                fontWeight: 700,
                whiteSpace: "nowrap",
                marginTop: 1,
              }}
            >
              {result.badge}
            </span>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 13,
                color: "#374151",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              {result.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Product image */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "4 / 3",
          borderRadius: 20,
          overflow: "hidden",
          background: "#F0ECFF",
        }}
      >
        <Image
          src="/product-images/whitening-serum.webp"
          alt="Purple Magic Serum"
          fill
          style={{ objectFit: "contain", padding: 24 }}
        />
      </div>
    </section>
  );
}
