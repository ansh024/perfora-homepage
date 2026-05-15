"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const values = [
  {
    icon: "✦",
    title: "Pure Botanicals",
    desc: "Hand-selected from the world's most biodiverse regions, every ingredient is certified organic and ethically sourced.",
  },
  {
    icon: "◈",
    title: "Science-Backed",
    desc: "Each formula undergoes 24 months of clinical testing, with visible results proven in independent studies.",
  },
  {
    icon: "◇",
    title: "Zero Compromise",
    desc: "Free from parabens, sulfates, and synthetic fragrances. Cruelty-free and sustainably packaged.",
  },
];

export default function BrandValues() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 px-6 bg-[#F0E8DE]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.5em] uppercase text-[#C9A96E] mb-4">
            Our Philosophy
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-[#3D2B1F]">
            Beauty, Elevated
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#D4C4B0]">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="bg-[#F0E8DE] p-10 md:p-12 group hover:bg-[#FAF7F2] transition-colors duration-500"
            >
              <span className="text-2xl text-[#C9A96E] block mb-6">{v.icon}</span>
              <h3 className="font-display text-2xl font-medium text-[#3D2B1F] mb-4 group-hover:text-[#C9A96E] transition-colors duration-300">
                {v.title}
              </h3>
              <p className="text-sm text-[#6B4C38] leading-relaxed font-light">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
