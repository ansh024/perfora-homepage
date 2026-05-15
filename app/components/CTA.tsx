"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden bg-[#FAF7F2]">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/30 to-transparent" />
        <motion.div
          className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#E8C4B8] opacity-20 blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-20 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#C9A96E] opacity-15 blur-3xl"
          animate={{ scale: [1, 1.15, 1], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <p className="text-xs tracking-[0.5em] uppercase text-[#C9A96E] mb-6">
            Begin Your Ritual
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-light text-[#3D2B1F] leading-tight mb-8">
            Your Skin Deserves
            <br />
            <span className="italic text-[#C9A96E]">The Best</span>
          </h2>
          <p className="text-base text-[#6B4C38] font-light leading-relaxed mb-12 max-w-md mx-auto">
            Join over 50,000 women who have transformed their skincare with Lumière. Free shipping on orders over $120.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="#products"
              whileHover={{ scale: 1.03, backgroundColor: "#A8834D" }}
              whileTap={{ scale: 0.97 }}
              className="px-12 py-4 bg-[#C9A96E] text-[#FAF7F2] text-xs tracking-[0.3em] uppercase font-medium transition-colors duration-300"
            >
              Shop The Collection
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="text-xs tracking-[0.3em] uppercase text-[#6B4C38] hover:text-[#C9A96E] transition-colors border-b border-current pb-1"
            >
              Take the Skin Quiz →
            </motion.a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-8 mt-16 pt-12 border-t border-[#E8DDD0]">
            {["Certified Organic", "Cruelty Free", "Dermatologist Tested", "Sustainable Packaging"].map((b) => (
              <div key={b} className="flex items-center gap-2">
                <span className="text-[#C9A96E] text-sm">✓</span>
                <span className="text-xs tracking-widest uppercase text-[#6B4C38] font-light">{b}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
