export default function WarrantyBadge() {
  return (
    <div
      style={{
        position: "absolute",
        top: 16,
        right: 16,
        zIndex: 2,
        width: 76,
        height: 76,
        borderRadius: "50%",
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        border: "1.5px solid #6B4FB3",
        boxShadow: "0 6px 20px rgba(61,31,143,0.18)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: 2,
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="#3D1F8F" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="#3D1F8F" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: 12,
          fontWeight: 800,
          color: "#1A0A3D",
          lineHeight: 1.1,
        }}
      >
        2 YEAR
      </span>
      <span
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: 8.5,
          fontWeight: 700,
          color: "#6B4FB3",
          textTransform: "uppercase",
          letterSpacing: "0.04em",
        }}
      >
        Warranty
      </span>
    </div>
  );
}
