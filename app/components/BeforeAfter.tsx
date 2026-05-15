"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useCallback } from "react";

const stats = [
  { value: "94%", label: "saw visible brightening in 2 weeks" },
  { value: "87%", label: "reported reduced fine lines" },
  { value: "98%", label: "would recommend to a friend" },
];

export default function BeforeAfter() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const sliderRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(50);
  const [dragging, setDragging] = useState(false);

  const updateSlider = useCallback((clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const pos = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(95, Math.max(5, pos)));
  }, []);

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (dragging) updateSlider(e.clientX);
    },
    [dragging, updateSlider]
  );

  const onTouchMove = useCallback(
    (e: React.TouchEvent) => {
      updateSlider(e.touches[0].clientX);
    },
    [updateSlider]
  );

  return (
    <section id="results" ref={sectionRef} className="py-28 px-6 bg-[#3D2B1F]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.5em] uppercase text-[#C9A96E] mb-4">
            Proven Results
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-[#FAF7F2]">
            The Transformation
          </h2>
          <p className="mt-4 text-sm text-[#E8C4B8] font-light tracking-wide max-w-md mx-auto">
            Drag the slider to see real results after 28 days of the Lumière Radiance Protocol.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative"
        >
          {/* Slider container */}
          <div
            ref={sliderRef}
            className="relative aspect-[16/7] overflow-hidden cursor-ew-resize select-none rounded-sm"
            onMouseMove={onMouseMove}
            onMouseDown={() => setDragging(true)}
            onMouseUp={() => setDragging(false)}
            onMouseLeave={() => setDragging(false)}
            onTouchMove={onTouchMove}
          >
            {/* BEFORE side */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#6B4C38] via-[#8B7355] to-[#5A3E2B]">
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-24 h-24 md:w-36 md:h-36 rounded-full bg-[#8B7355] opacity-60 blur-xl" />
                <div className="relative z-10 text-center mt-2">
                  <p className="font-display text-5xl md:text-7xl italic text-[#FAF7F2]/20 font-light">Before</p>
                </div>
              </div>
              {/* Skin texture overlay */}
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "radial-gradient(circle at 30% 50%, #E8C4B8 0%, transparent 60%), radial-gradient(circle at 70% 30%, #C9A96E 0%, transparent 50%)",
                }}
              />
              {/* Label */}
              <div className="absolute bottom-6 left-6 px-4 py-2 bg-[#FAF7F2]/10 backdrop-blur-sm border border-[#FAF7F2]/20">
                <p className="text-[#FAF7F2] text-xs tracking-widest uppercase">Day 0</p>
              </div>
            </div>

            {/* AFTER side — clipped */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-[#E8C4B8] via-[#F0E8DE] to-[#C9A96E]"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-24 h-24 md:w-36 md:h-36 rounded-full bg-[#C9A96E] opacity-40 blur-xl" />
                <div className="relative z-10 text-center mt-2">
                  <p className="font-display text-5xl md:text-7xl italic text-[#3D2B1F]/20 font-light">After</p>
                </div>
              </div>
              <div className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: "radial-gradient(circle at 60% 40%, #FAF7F2 0%, transparent 60%), radial-gradient(circle at 30% 70%, #C9A96E 0%, transparent 50%)",
                }}
              />
              {/* Label */}
              <div className="absolute bottom-6 right-6 px-4 py-2 bg-[#3D2B1F]/10 backdrop-blur-sm border border-[#3D2B1F]/20">
                <p className="text-[#3D2B1F] text-xs tracking-widest uppercase">Day 28</p>
              </div>
            </div>

            {/* Divider line */}
            <div
              className="absolute top-0 bottom-0 w-px bg-white/60"
              style={{ left: `${sliderPos}%` }}
            />

            {/* Handle */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 pointer-events-none"
              style={{ left: `${sliderPos}%` }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center">
                <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                  <path d="M1 6H19M1 6L5 2M1 6L5 10M19 6L15 2M19 6L15 10" stroke="#3D2B1F" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 + i * 0.15 }}
              className="text-center"
            >
              <p className="font-display text-6xl font-light text-[#C9A96E] mb-2">
                {s.value}
              </p>
              <p className="text-xs text-[#E8C4B8] tracking-wide font-light">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
