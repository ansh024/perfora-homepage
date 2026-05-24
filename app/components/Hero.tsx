"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Slide data ───────────────────────────────────────────────────────────────
type Slide = {
  id:              number;
  bg:              string;
  theme:           "dark" | "light";
  tag:             string;
  headline:        [string, string];
  body:            string;
  cta:             string;
  ctaHref:         string;
  videoSrc?:       string;
  imageSrc?:       string;
  imageAlt?:       string;
  backgroundImage?: string;
};

const slides: Slide[] = [
  {
    id:       1,
    bg:       "#3D1F8F",
    theme:    "dark",
    tag:      "New Launch",
    headline: ["Sonic Clean.", "Brighter Smile."],
    body:     "32,000 strokes/min. Dentist-recommended sonic technology for 10× cleaner teeth.",
    cta:      "Shop Electric Brush",
    ctaHref:  "#products",
    videoSrc: "/sonic.mp4",
  },
  {
    id:       2,
    bg:       "#EDE9FB",
    theme:    "light",
    tag:      "Bestseller",
    headline: ["Visibly Whiter", "in 7 Days."],
    body:     "Enamel-safe formula. No sensitivity. Clinical-grade whitening, at home.",
    cta:      "Shop Whitening Strips",
    ctaHref:  "#products",
    imageSrc: "/product-images/purple-whitening-strips.webp",
    imageAlt: "Perfora Whitening Strips",
  },
  {
    id:              3,
    bg:              "#2A1070",
    theme:           "dark",
    tag:             "Bundle & Save",
    headline:        ["Your Complete", "Oral Ritual."],
    body:            "The full Perfora regimen — brush, whiten, rinse, repeat.",
    cta:             "Shop the Kit",
    ctaHref:         "#products",
    backgroundImage: "/hero-bundle-bg.png",
  },
];

const slideVariants = {
  enter:  (dir: number) => ({ x: dir > 0 ? "62%" : "-62%", opacity: 0 }),
  center: { x: "0%", opacity: 1 },
  exit:   (dir: number) => ({ x: dir > 0 ? "-62%" : "62%", opacity: 0 }),
};

const transition = {
  x:       { type: "tween" as const, duration: 0.58, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  opacity: { duration: 0.32 },
};

// Keep in sync with Navbar.tsx h-[58px] + border-t-[3px]
const NAV_H = 61;

// ─── Component ────────────────────────────────────────────────────────────────
export default function Hero() {
  const [active, setActive] = useState(0);
  const [dir, setDir]       = useState(1);
  const [paused, setPaused] = useState(false);
  const touchStartX         = useRef(0);
  const timerRef            = useRef<ReturnType<typeof setTimeout> | null>(null);
  const videoRef            = useRef<HTMLVideoElement>(null);

  // Play/pause video based on viewport visibility
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [active]);

  const goTo = useCallback((next: number, direction: number) => {
    setDir(direction);
    setActive(next);
  }, []);

  const advance = useCallback(() => goTo((active + 1) % slides.length, 1),  [active, goTo]);
  const retreat = useCallback(() => goTo((active - 1 + slides.length) % slides.length, -1), [active, goTo]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(advance, 5200);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [active, paused, advance]);

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd   = (e: React.TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 44) delta > 0 ? advance() : retreat();
  };

  const slide  = slides[active];
  const isDark = slide.theme === "dark";

  // Theme-derived colours
  const headingColor = isDark ? "#FFFFFF"                : "#1A0A3D";
  const bodyColor    = isDark ? "rgba(255,255,255,0.72)" : "#6B5A8A";
  const tagBg        = isDark ? "rgba(255,255,255,0.14)" : "rgba(61,31,143,0.09)";
  const tagColor     = isDark ? "rgba(255,255,255,0.92)" : "#3D1F8F";
  const ctaBg        = isDark ? "#FFFFFF"                : "#3D1F8F";
  const ctaText      = isDark ? "#1A0A3D"                : "#FFFFFF";
  const dotActive    = isDark ? "#FFFFFF"                : "#3D1F8F";
  const dotInactive  = isDark ? "rgba(255,255,255,0.3)"  : "rgba(61,31,143,0.18)";
  const arrowStroke  = isDark ? "rgba(255,255,255,0.55)" : "rgba(26,10,61,0.32)";

  // Desktop left-to-right gradient that bleeds the bg colour over the photo
  const desktopGradient = isDark
    ? `linear-gradient(to right, rgba(61,31,143,0.97) 0%, rgba(61,31,143,0.88) 30%, rgba(61,31,143,0.55) 55%, rgba(61,31,143,0.10) 78%, transparent 100%)`
    : `linear-gradient(to right, rgba(237,233,251,1.00) 0%, rgba(237,233,251,0.92) 32%, rgba(237,233,251,0.60) 58%, rgba(237,233,251,0.10) 80%, transparent 100%)`;

  // Mobile bottom gradient so text stays legible over the image
  const mobileGradient = isDark
    ? `linear-gradient(to top, rgba(42,16,112,1) 0%, rgba(42,16,112,0.92) 35%, rgba(42,16,112,0.60) 60%, transparent 100%)`
    : `linear-gradient(to top, rgba(237,233,251,1) 0%, rgba(237,233,251,0.9) 35%, rgba(237,233,251,0.55) 60%, transparent 100%)`;

  return (
    <section
      aria-label="Hero carousel"
      style={{
        position:        "relative",
        backgroundColor: slide.bg,
        transition:      "background-color 700ms ease",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── 1280px content container ── */}
      <div
        className="relative overflow-hidden mx-auto min-h-[690px] md:h-[600px] md:min-h-0"
        style={{ maxWidth: 1280 }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Slides */}
        <AnimatePresence custom={dir} mode="wait">
          <motion.div
            key={slide.id}
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transition}
            className="absolute inset-0"
          >
            {/* ─────────────────────────────────────────────────────────────
                LAYER 1 — Solid background colour (always present)
            ───────────────────────────────────────────────────────────── */}
            <div className="absolute inset-0" style={{ background: slide.bg }} />

            {/* ─────────────────────────────────────────────────────────────
                LAYER 2 — Full-bleed media (image or video)
            ───────────────────────────────────────────────────────────── */}

            {/* Slide 3: hero-bundle-bg.png — fills entire slide */}
            {slide.backgroundImage && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={slide.backgroundImage}
                alt=""
                aria-hidden
                style={{
                  position:      "absolute",
                  inset:         0,
                  width:         "100%",
                  height:        "100%",
                  objectFit:     "cover",
                  objectPosition:"center",
                  display:       "block",
                  pointerEvents: "none",
                }}
              />
            )}

            {/* Slide 1: sonic.mp4 — full-bleed video */}
            {slide.videoSrc && (
              <video
                ref={videoRef}
                muted
                loop
                playsInline
                preload="metadata"
                style={{
                  position:  "absolute",
                  inset:     0,
                  width:     "100%",
                  height:    "100%",
                  objectFit: "cover",
                  display:   "block",
                }}
              >
                <source src={slide.videoSrc} type="video/mp4" />
              </video>
            )}

            {/* Slide 2: product image — large, right-anchored on desktop */}
            {slide.imageSrc && !slide.backgroundImage && !slide.videoSrc && (
              <>
                {/* Desktop: right-side float */}
                <div
                  className="hidden md:flex absolute items-center justify-center"
                  style={{
                    right:  0,
                    top:    NAV_H,
                    bottom: 0,
                    width:  "52%",
                  }}
                >
                  <img
                    src={slide.imageSrc}
                    alt={slide.imageAlt ?? ""}
                    draggable={false}
                    style={{
                      maxWidth:      "88%",
                      maxHeight:     "92%",
                      objectFit:     "contain",
                      display:       "block",
                      mixBlendMode:  "multiply",
                      userSelect:    "none",
                      pointerEvents: "none",
                    }}
                  />
                </div>

                {/* Mobile: top portion behind gradient */}
                <div
                  className="flex md:hidden absolute items-center justify-center"
                  style={{
                    inset:  0,
                    bottom: "44%",  // occupies top 56% of slide
                  }}
                >
                  <img
                    src={slide.imageSrc}
                    alt={slide.imageAlt ?? ""}
                    draggable={false}
                    style={{
                      maxWidth:      "72%",
                      maxHeight:     "100%",
                      objectFit:     "contain",
                      display:       "block",
                      mixBlendMode:  "multiply",
                      userSelect:    "none",
                      pointerEvents: "none",
                    }}
                  />
                </div>
              </>
            )}

            {/* ─────────────────────────────────────────────────────────────
                LAYER 3 — Gradient overlays for text readability
            ───────────────────────────────────────────────────────────── */}

            {/* Desktop: left-to-transparent */}
            <div
              className="hidden md:block absolute inset-0"
              style={{ background: desktopGradient, pointerEvents: "none" }}
            />

            {/* Mobile: bottom-to-transparent */}
            <div
              className="block md:hidden absolute inset-0"
              style={{ background: mobileGradient, pointerEvents: "none" }}
            />

            {/* ─────────────────────────────────────────────────────────────
                LAYER 4 — Text content
            ───────────────────────────────────────────────────────────── */}
            <div
              className="absolute inset-0 flex flex-col justify-end md:justify-center"
              style={{ paddingTop: NAV_H }}
            >
              <div
                className="
                  relative z-10 flex flex-col
                  px-6 pb-10 pt-3
                  md:pl-14 md:pr-6 md:py-0
                  lg:pl-16 lg:pr-8
                "
                style={{ maxWidth: "clamp(280px, 48%, 520px)" }}
              >
                {/* Tag pill */}
                <div
                  className="inline-flex items-center self-start mb-3 px-3 py-[5px] rounded-full"
                  style={{ background: tagBg }}
                >
                  <span
                    className="text-[10px] font-semibold tracking-[0.13em] uppercase"
                    style={{ color: tagColor, fontFamily: "var(--font-inter)" }}
                  >
                    {slide.tag}
                  </span>
                </div>

                {/* Headline */}
                <h1
                  className="font-display leading-[1.08] md:leading-[1.06] mb-2 md:mb-3 text-[1.35rem] md:text-[clamp(1.75rem,4vw,2.75rem)]"
                  style={{
                    color:         headingColor,
                    fontWeight:    700,
                    letterSpacing: "-0.015em",
                    whiteSpace:    "nowrap",
                  }}
                >
                  {slide.headline[0]}
                  <br className="hidden md:block" />
                  {" "}
                  <em style={{ fontStyle: "italic" }}>{slide.headline[1]}</em>
                </h1>

                {/* Body */}
                <p
                  className="text-[12.5px] md:text-[14.5px] leading-[1.55] mb-4 md:mb-6 max-w-[95%] md:max-w-[300px]"
                  style={{ color: bodyColor, fontFamily: "var(--font-inter)", fontWeight: 400 }}
                >
                  {slide.body}
                </p>

                {/* CTA row */}
                <div className="flex items-center gap-4">
                  <motion.a
                    href={slide.ctaHref}
                    whileHover={{ scale: 1.02, opacity: 0.92 }}
                    whileTap={{ scale: 0.975 }}
                    className="inline-flex items-center gap-2 px-5 py-[11px] rounded-sm text-[13px] font-medium"
                    style={{
                      background:    ctaBg,
                      color:         ctaText,
                      fontFamily:    "var(--font-inter)",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {slide.cta}
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
                      <path d="M2 6.5h9M8 3l3.5 3.5L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.a>

                  <a
                    href="#"
                    className="hidden md:inline-flex text-[12px] font-medium items-center gap-1.5 transition-opacity duration-200 hover:opacity-60"
                    style={{ color: isDark ? "rgba(255,255,255,0.7)" : "#6B5A8A", fontFamily: "var(--font-inter)" }}
                  >
                    Learn more
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden>
                      <path d="M1 5.5h9M7 2l3.5 3.5L7 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>

                {/* Mobile-only dots */}
                <div className="flex md:hidden items-center gap-[7px] mt-4">
                  {slides.map((s, i) => (
                    <button
                      key={s.id}
                      aria-label={`Go to slide ${i + 1}`}
                      onClick={() => goTo(i, i > active ? 1 : -1)}
                      className="rounded-full transition-all duration-300"
                      style={{
                        width:      i === active ? "20px" : "6px",
                        height:     "6px",
                        background: i === active ? dotActive : dotInactive,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── Prev arrow ── */}
        <button
          aria-label="Previous slide"
          onClick={retreat}
          className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full hover:bg-black/10 transition-colors duration-200"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
            <path d="M11.5 14.5L6 9l5.5-5.5" stroke={arrowStroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* ── Next arrow ── */}
        <button
          aria-label="Next slide"
          onClick={advance}
          className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full hover:bg-black/10 transition-colors duration-200"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
            <path d="M6.5 3.5L12 9l-5.5 5.5" stroke={arrowStroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* ── Dot indicators — desktop only ── */}
        <div className="hidden md:flex absolute bottom-5 left-1/2 -translate-x-1/2 z-20 items-center gap-[7px]">
          {slides.map((s, i) => (
            <button
              key={s.id}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i, i > active ? 1 : -1)}
              className="rounded-full transition-all duration-300"
              style={{
                width:      i === active ? "20px" : "6px",
                height:     "6px",
                background: i === active ? dotActive : dotInactive,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
