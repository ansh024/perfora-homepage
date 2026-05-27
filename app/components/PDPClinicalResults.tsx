// No client directive needed — purely static

const DAYS = [
  { day: "Day 1", image: "/dentist-photo.png" },
  { day: "Day 3", image: "/dentist-photo.png" },
  { day: "Day 5", image: "/dentist-photo.png" },
  { day: "Day 7", image: "/dentist-photo.png" },
];

export default function PDPClinicalResults() {
  return (
    <section style={{ background: "#FFFFFF", padding: "48px 0 44px" }}>

      {/* Heading */}
      <div style={{ textAlign: "center", padding: "0 20px", marginBottom: 24 }}>
        <h2
          style={{
            fontFamily: "var(--spectral)",
            fontSize: "clamp(1.5rem, 5.5vw, 2.2rem)",
            fontWeight: 600,
            color: "#1A0A3D",
            lineHeight: 1.2,
            margin: 0,
          }}
        >
          Clinically proved{" "}
          <em style={{ fontStyle: "italic", color: "#6B4FB3", fontWeight: 400 }}>
            Results
          </em>
        </h2>
      </div>

      {/* Day photos — 4-column grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 6,
          padding: "0 16px",
          marginBottom: 22,
        }}
      >
        {DAYS.map(({ day, image }) => (
          <div
            key={day}
            style={{
              position: "relative",
              borderRadius: 12,
              overflow: "hidden",
              aspectRatio: "3 / 4",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt={day}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            {/* Day label overlay */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                background: "#5B21B6",
                padding: "6px 4px",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  letterSpacing: "0.04em",
                }}
              >
                {day}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Study note + CTA */}
      <div style={{ padding: "0 20px", textAlign: "center" }}>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 11,
            color: "#9CA3AF",
            lineHeight: 1.5,
            marginBottom: 8,
          }}
        >
          *Based on study done on 40 subjects over 2 weeks
        </p>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 12,
            fontWeight: 600,
            color: "#374151",
            marginBottom: 24,
          }}
        >
          In-vivo Tested, Clinically Proven Formulation
        </p>
        <a
          href="#"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: "11px 26px",
            border: "1.5px solid #6B4FB3",
            borderRadius: 999,
            fontFamily: "var(--font-inter)",
            fontSize: 13,
            fontWeight: 600,
            color: "#6B4FB3",
            textDecoration: "none",
          }}
        >
          View Full Clinical Report →
        </a>
      </div>
    </section>
  );
}
