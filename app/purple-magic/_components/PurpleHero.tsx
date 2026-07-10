import Image from "next/image";
import styles from "./PurpleHero.module.css";

export default function PurpleHero() {
  return (
    <section className={styles.ph} aria-labelledby="ph-headline">
      <div className={styles.inner}>

        {/* ── Eyebrow + Headline ─────────────────────────────────────── */}
        <header className={styles.header}>
          <p className={styles.eyebrow}>
            Purple Color Correction Technology
          </p>
          <h1 className={styles.headline} id="ph-headline">
            Whitening,<br />Reimagined.
          </h1>
        </header>

        {/* ── Product Visual ────────────────────────────────────────── */}
        <div className={styles.visual} aria-hidden="true">
          <div className={styles.orb} />
          <div className={styles.ring} />
          <div className={styles.imgWrap}>
            <Image
              src="/product-images/whitening-serum.webp"
              alt="Purple Magic Whitening Serum bottle"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 80vw"
              className={styles.productImg}
            />
          </div>
        </div>

        {/* ── Subheading + CTAs ─────────────────────────────────────── */}
        <div className={styles.body}>
          <p className={styles.subheading}>
            A modern approach to brighter-looking teeth — combining instant
            color correction with ingredients designed to help reduce surface
            stains over time.
          </p>
          <div className={styles.ctas} role="group" aria-label="Product actions">
            <a href="#buy" className={`${styles.cta} ${styles.ctaPrimary}`}>
              Shop Purple Serum
            </a>
            <a href="#how-it-works" className={`${styles.cta} ${styles.ctaSecondary}`}>
              Discover How It Works
            </a>
          </div>
        </div>

      </div>

      {/* ── Scroll indicator ──────────────────────────────────────── */}
      <div className={styles.scroll} aria-hidden="true">
        <span className={styles.scrollLabel}>Scroll to discover</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
