"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ingredients = [
  {
    name: "Bulgarian Rose",
    origin: "Valley of Roses, Bulgaria",
    benefit: "Intense hydration & cellular renewal",
    color: "#E8C4B8",
  },
  {
    name: "Bakuchiol",
    origin: "Babchi Plant, India",
    benefit: "Natural retinol alternative, zero irritation",
    color: "#9CAF88",
  },
  {
    name: "Himalayan Gold",
    origin: "Mineral Springs, Nepal",
    benefit: "Anti-inflammatory & skin-firming",
    color: "#C9A96E",
  },
  {
    name: "Blue Tansy",
    origin: "Moroccan Atlas Mountains",
    benefit: "Calming, anti-redness, pore-refining",
    color: "#8B9DC8",
  },
];

export default function Ingredients() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-28 px-6 bg-[#F0E8DE] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.5em] uppercase text-[#C9A96E] mb-4">
            The Ingredients
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-display text-5xl md:text-6xl font-light text-[#3D2B1F]">
              Nature&apos;s Finest,<br />
              <span className="italic">Elevated</span>
            </h2>
            <p className="text-sm text-[#6B4C38] font-light max-w-xs leading-relaxed">
              Every ingredient is sourced at peak potency and cold-processed to preserve its full spectrum of benefits.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#D4C4B0]">
          {ingredients.map((ing, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.12 }}
              className="bg-[#F0E8DE] hover:bg-[#FAF7F2] transition-colors duration-500 p-10 flex items-start gap-6 group"
            >
              <motion.div
                className="w-14 h-14 rounded-full flex-shrink-0 mt-1"
                style={{ backgroundColor: ing.color }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <div>
                <h3 className="font-display text-2xl font-medium text-[#3D2B1F] mb-1 group-hover:text-[#C9A96E] transition-colors duration-300">
                  {ing.name}
                </h3>
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#9CAF88] mb-3">
                  {ing.origin}
                </p>
                <p className="text-sm text-[#6B4C38] font-light leading-relaxed">
                  {ing.benefit}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
