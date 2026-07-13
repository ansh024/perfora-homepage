import Image from "next/image";

export default function WhyChooseBanner() {
  return (
    <section aria-label="Why Choose Luxe Black" style={{ background: "#FFFFFF" }}>
      <div className="lb-hero-desktop" style={{ position: "relative", width: "100%", aspectRatio: "1708 / 921" }}>
        <Image
          src="/luxe-black/why-choose-banner-desktop.png"
          alt="Why Choose Luxe Black — Pressure Sensor, Oscillating Cleaning Technology, 3 Cleaning Modes, 21-Day Battery Life"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="lb-hero-mobile" style={{ position: "relative", width: "100%", aspectRatio: "1 / 1" }}>
        <Image
          src="/luxe-black/why-choose-banner-mobile.png"
          alt="Why Choose Luxe Black — Pressure Sensor, Oscillating Cleaning Technology, 3 Cleaning Modes, 21-Day Battery Life"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
}
