"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const products = [
  {
    name: "Radiance Serum",
    subtitle: "Vitamin C Complex",
    price: "$148",
    tag: "Bestseller",
    gradient: "from-[#E8C4B8] to-[#C9A96E]",
    desc: "15% stabilized vitamin C + hyaluronic acid for a luminous, even complexion.",
    ml: "30ml",
  },
  {
    name: "Velvet Crème",
    subtitle: "Deep Hydration",
    price: "$186",
    tag: "New",
    gradient: "from-[#9CAF88] to-[#6B8F5C]",
    desc: "A rich, whipped moisturiser with shea butter and squalane for 72h hydration.",
    ml: "50ml",
  },
  {
    name: "Golden Elixir",
    subtitle: "Anti-Ageing Oil",
    price: "$224",
    tag: "Limited",
    gradient: "from-[#C9A96E] to-[#8B6B3A]",
    desc: "24-karat gold infused with rosehip and bakuchiol for visibly firmer skin.",
    ml: "20ml",
  },
  {
    name: "Petal Mist",
    subtitle: "Rosewater Toner",
    price: "$96",
    tag: null,
    gradient: "from-[#E8C4B8] to-[#C4849C]",
    desc: "Bulgarian rose extract with niacinamide to refine pores and brighten tone.",
    ml: "120ml",
  },
];

export default function Products() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="products" ref={ref} className="py-28 px-6 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <p className="text-xs tracking-[0.5em] uppercase text-[#C9A96E] mb-4">
              The Collection
            </p>
            <h2 className="font-display text-5xl md:text-6xl font-light text-[#3D2B1F]">
              Signature<br />
              <span className="italic">Formulas</span>
            </h2>
          </div>
          <a
            href="#"
            className="text-xs tracking-[0.3em] uppercase text-[#6B4C38] hover:text-[#C9A96E] transition-colors border-b border-current pb-1 self-start md:self-end"
          >
            View All Products →
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              className="group cursor-pointer"
            >
              {/* Product image area */}
              <div className="relative aspect-[3/4] overflow-hidden mb-5">
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${p.gradient}`}
                  animate={{ scale: hovered === i ? 1.04 : 1 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />

                {/* Floating product bottle illustration */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ y: hovered === i ? -8 : 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="relative">
                    {/* Stylised bottle shape */}
                    <div className="w-16 h-32 bg-white/20 backdrop-blur-sm rounded-full mx-auto relative">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 w-5 h-6 bg-white/30 rounded-sm" />
                      <div className="absolute inset-4 rounded-full bg-white/10" />
                    </div>
                    <p className="text-white/80 text-xs tracking-widest uppercase text-center mt-3 font-light">
                      {p.ml}
                    </p>
                  </div>
                </motion.div>

                {/* Tag */}
                {p.tag && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#3D2B1F] text-[#FAF7F2] text-[10px] tracking-widest uppercase">
                    {p.tag}
                  </div>
                )}

                {/* Quick add overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hovered === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 bg-[#3D2B1F]/90 py-4 text-center"
                >
                  <span className="text-[#FAF7F2] text-xs tracking-[0.25em] uppercase">
                    Add to Bag
                  </span>
                </motion.div>
              </div>

              {/* Product info */}
              <div>
                <div className="flex items-start justify-between mb-1">
                  <div>
                    <h3 className="font-display text-xl text-[#3D2B1F] font-medium">
                      {p.name}
                    </h3>
                    <p className="text-xs tracking-widest uppercase text-[#9CAF88] mt-0.5">
                      {p.subtitle}
                    </p>
                  </div>
                  <span className="font-display text-lg text-[#C9A96E]">
                    {p.price}
                  </span>
                </div>
                <p className="text-xs text-[#6B4C38] leading-relaxed mt-2 font-light">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
