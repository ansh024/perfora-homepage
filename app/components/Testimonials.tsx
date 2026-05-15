"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "My skin has never looked this good. After just three weeks with the Radiance Serum, my dermatologist asked what I'd changed. I told her: everything.",
    name: "Isabelle M.",
    title: "Paris, France",
    rating: 5,
    product: "Radiance Serum",
  },
  {
    quote:
      "I've tried luxury skincare costing twice as much and nothing has matched this. The Velvet Crème is genuinely life-changing for dry skin.",
    name: "Charlotte R.",
    title: "London, UK",
    rating: 5,
    product: "Velvet Crème",
  },
  {
    quote:
      "The Golden Elixir transformed my morning routine into a ritual. My skin feels firmer, looks brighter. I'm completely obsessed.",
    name: "Yuki T.",
    title: "Tokyo, Japan",
    rating: 5,
    product: "Golden Elixir",
  },
  {
    quote:
      "Finally, a brand that delivers on every promise. Ethically made, beautifully packaged, and my skin has never felt so healthy.",
    name: "Amara O.",
    title: "Lagos, Nigeria",
    rating: 5,
    product: "Full Ritual Set",
  },
];

const StarRating = ({ count }: { count: number }) => (
  <div className="flex gap-1 mb-6">
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} className="text-[#C9A96E] text-sm">★</span>
    ))}
  </div>
);

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  const go = (dir: 1 | -1) => {
    setActive((v) => (v + dir + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" ref={ref} className="py-28 px-6 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.5em] uppercase text-[#C9A96E] mb-4">
            Testimonials
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-[#3D2B1F]">
            What They&apos;re Saying
          </h2>
        </motion.div>

        {/* Featured large testimonial */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative border border-[#E8DDD0] p-10 md:p-16 mb-8"
        >
          <div className="absolute top-8 left-10 font-display text-[8rem] leading-none text-[#E8DDD0] select-none">
            &ldquo;
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10"
            >
              <StarRating count={testimonials[active].rating} />
              <p className="font-display text-2xl md:text-3xl lg:text-4xl font-light italic text-[#3D2B1F] leading-snug mb-8 max-w-3xl">
                {testimonials[active].quote}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E8C4B8] to-[#C9A96E]" />
                <div>
                  <p className="text-sm font-medium text-[#3D2B1F] tracking-wide">
                    {testimonials[active].name}
                  </p>
                  <p className="text-xs text-[#9CAF88] tracking-widest uppercase">
                    {testimonials[active].title}
                  </p>
                </div>
                <div className="ml-auto px-3 py-1 border border-[#E8DDD0] text-[10px] tracking-widest uppercase text-[#C9A96E]">
                  {testimonials[active].product}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="absolute bottom-8 right-10 flex gap-3">
            <motion.button
              onClick={() => go(-1)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 border border-[#3D2B1F] flex items-center justify-center text-[#3D2B1F] hover:bg-[#3D2B1F] hover:text-[#FAF7F2] transition-colors duration-300"
            >
              ←
            </motion.button>
            <motion.button
              onClick={() => go(1)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 border border-[#3D2B1F] flex items-center justify-center text-[#3D2B1F] hover:bg-[#3D2B1F] hover:text-[#FAF7F2] transition-colors duration-300"
            >
              →
            </motion.button>
          </div>
        </motion.div>

        {/* Dots */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`transition-all duration-300 rounded-full ${
                i === active
                  ? "w-8 h-1.5 bg-[#C9A96E]"
                  : "w-1.5 h-1.5 bg-[#D4C4B0]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
