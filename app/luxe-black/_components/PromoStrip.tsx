const ITEMS = [
  "2 Years Warranty",
  "Easy Exchange",
  "COD Available",
  "Free Delivery",
  "Free Gifts Worth ₹159 with Every Order",
];

export default function PromoStrip() {
  const track = [...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <section
      aria-label="Order benefits"
      style={{
        background: "linear-gradient(90deg, #7C3AED 0%, #6B4FB3 50%, #7C3AED 100%)",
        overflow: "hidden",
        padding: "12px 0",
      }}
    >
      <ul className="sr-only">
        {ITEMS.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div
        aria-hidden="true"
        style={{
          display: "flex",
          alignItems: "center",
          width: "max-content",
          animation: "perfora-marquee-triple 22s linear infinite",
          willChange: "transform",
        }}
      >
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              padding: "0 24px",
              fontFamily: "var(--font-inter)",
              fontSize: 13.5,
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: "0.02em",
              whiteSpace: "nowrap",
            }}
          >
            {item}
            <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}>✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
