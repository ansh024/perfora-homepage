"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useAnimationFrame,
  animate,
} from "framer-motion";
import type { PanInfo } from "framer-motion";

// ─── Layout ────────────────────────────────────────────────────────────────────
const CARD_W   = 185;
const CARD_H   = 328;
const CARD_GAP = 16;
const STEP     = CARD_W + CARD_GAP;
const SPEED    = 0.042; // px per ms (~42px/sec)

// ─── Data ──────────────────────────────────────────────────────────────────────
interface VideoReview { id: string; src: string; title: string; tag: string }

const VIDEOS: VideoReview[] = [
  { id: "v1", src: "/review-videos/review-1.mp4", title: "Switched to Perfora",    tag: "Electric Toothbrush" },
  { id: "v2", src: "/review-videos/review-2.mp4", title: "My dentist noticed!",    tag: "Whitening Serum"     },
  { id: "v3", src: "/review-videos/review-3.mp4", title: "3 months of results",    tag: "Morning Routine"     },
  { id: "v4", src: "/review-videos/review-4.mp4", title: "Game changer for me",    tag: "Charcoal Paste"      },
  { id: "v5", src: "/review-videos/review-5.mp4", title: "Obsessed with this",     tag: "Whitening Kit"       },
  { id: "v6", src: "/review-videos/review-6.mp4", title: "Finally my go-to brand", tag: "Full Oral Care"      },
];

const LOOPED  = [...VIDEOS, ...VIDEOS, ...VIDEOS];
const SINGLE_W = VIDEOS.length * STEP;

// ─── Video card ────────────────────────────────────────────────────────────────
function VideoCard({ video }: { video: VideoReview }) {
  const videoRef        = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);

  // Auto-play when the card enters the viewport, pause when it leaves
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{
        y:         hovered ? -8 : 0,
        boxShadow: hovered
          ? "0 20px 48px rgba(61,31,143,0.24), 0 0 0 2px #9B7FD4"
          : "0 4px 20px rgba(61,31,143,0.10), 0 0 0 1.5px rgba(155,127,212,0.12)",
      }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      style={{
        width:        CARD_W,
        flexShrink:   0,
        borderRadius: 20,
        overflow:     "hidden",
        background:   "#120730",
        cursor:       "pointer",
        userSelect:   "none",
      }}
    >
      {/* Video */}
      <div style={{ position: "relative", width: CARD_W, height: CARD_H }}>
        <video
          ref={videoRef}
          src={video.src}
          muted
          playsInline
          loop
          preload="metadata"
          style={{
            width:        "100%",
            height:       "100%",
            objectFit:    "cover",
            display:      "block",
            borderRadius: "20px 20px 0 0",
          }}
        />

        {/* Category pill */}
        <div
          style={{
            position:       "absolute",
            top:            12,
            left:           11,
            background:     "rgba(61,31,143,0.68)",
            backdropFilter: "blur(8px)",
            borderRadius:   20,
            padding:        "4px 11px",
            fontFamily:     "var(--font-inter)",
            fontSize:       10,
            fontWeight:     600,
            color:          "#DDD0FF",
            letterSpacing:  "0.05em",
            pointerEvents:  "none",
          }}
        >
          {video.tag}
        </div>

        {/* Bottom gradient for label readability */}
        <div
          style={{
            position:      "absolute",
            bottom:        0,
            left:          0,
            right:         0,
            height:        72,
            background:    "linear-gradient(to top, rgba(18,7,48,0.62) 0%, transparent 100%)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Label strip */}
      <div style={{ padding: "11px 13px 13px", background: "#FFFFFF" }}>
        <p
          style={{
            fontFamily:   "var(--font-inter)",
            fontSize:     12.5,
            fontWeight:   600,
            color:        "#1A0A3D",
            margin:       0,
            lineHeight:   1.3,
            whiteSpace:   "nowrap",
            overflow:     "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {video.title}
        </p>
        <div style={{ marginTop: 5, display: "flex", alignItems: "center", gap: 5 }}>
          <div style={{ display: "flex", gap: 1.5 }}>
            {[0, 1, 2, 3, 4].map((i) => (
              <svg key={i} width="9" height="9" viewBox="0 0 10 10" fill="none">
                <path
                  d="M5 1l1.18 2.39L9 3.82 6.9 5.86l.53 2.73L5 7.27 2.57 8.59l.53-2.73L1 3.82l2.82-.43L5 1z"
                  fill="#F59E0B"
                />
              </svg>
            ))}
          </div>
          <span style={{ fontFamily: "var(--font-inter)", fontSize: 10, color: "#9B8FBE", marginLeft: 1 }}>
            Verified review
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Section ────────────────────────────────────────────────────────────────────
export default function VideoTestimonials() {
  const x          = useMotionValue(-SINGLE_W);
  const pauseRef   = useRef(false);
  const isDragging = useRef(false);

  // Continuous auto-scroll
  useAnimationFrame((_, delta) => {
    if (pauseRef.current) return;
    let cur = x.get() - delta * SPEED;
    if (cur <= -2 * SINGLE_W) cur += SINGLE_W;
    x.set(cur);
  });

  const onDragStart = useCallback(() => {
    isDragging.current = true;
    pauseRef.current   = true;
  }, []);

  const onDragEnd = useCallback(
    (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      const vx   = info.velocity.x;
      const raw  = -x.get() / STEP;
      let snap   = Math.abs(vx) > 250
        ? vx < 0 ? Math.ceil(raw) : Math.floor(raw)
        : Math.round(raw);

      animate(x, -snap * STEP, {
        type:      "spring",
        stiffness: 280,
        damping:   34,
        mass:      0.9,
        onComplete: () => {
          let norm = x.get();
          while (norm <= -2 * SINGLE_W) norm += SINGLE_W;
          while (norm > 0)              norm -= SINGLE_W;
          x.set(norm);
          isDragging.current = false;
          pauseRef.current   = false;
        },
      });
    },
    [x]
  );

  return (
    <section
      aria-label="Video testimonials"
      style={{
        background:    "#F9F7FF",
        paddingTop:    "clamp(40px, 4vw, 60px)",
        paddingBottom: "clamp(40px, 4vw, 60px)",
        borderTop:     "1px solid #EDE8FB",
        overflow:      "hidden",
      }}
    >
      {/* Section label */}
      <div
        style={{
          maxWidth:     1280,
          margin:       "0 auto",
          paddingLeft:  "clamp(20px, 4vw, 48px)",
          paddingRight: "clamp(20px, 4vw, 48px)",
          marginBottom: 28,
          display:      "flex",
          alignItems:   "center",
          gap:          16,
        }}
      >
        <p
          style={{
            fontFamily:    "var(--font-inter)",
            fontSize:      10.5,
            fontWeight:    700,
            letterSpacing: "0.26em",
            textTransform: "uppercase",
            color:         "#9B7FD4",
            margin:        0,
            whiteSpace:    "nowrap",
          }}
        >
          Real people, real results
        </p>
        <div style={{ flex: 1, height: 1, background: "#E8E0F5" }} />
      </div>

      {/* Infinite reel strip — no edge masks */}
      <div style={{ overflow: "hidden", cursor: "grab" }}>
        <motion.div
          drag="x"
          dragConstraints={{ left: -3 * SINGLE_W, right: 0 }}
          dragElastic={0.04}
          dragMomentum={false}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          style={{
            x,
            display:       "flex",
            gap:           CARD_GAP,
            alignItems:    "flex-start",
            paddingTop:    8,
            paddingBottom: 20,
            paddingLeft:   "clamp(20px, 4vw, 48px)",
            width:         "max-content",
            willChange:    "transform",
          }}
        >
          {LOOPED.map((v, i) => (
            <VideoCard key={`${v.id}-${i}`} video={v} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
