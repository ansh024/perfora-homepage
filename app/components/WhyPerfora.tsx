"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WhyPerfora() {
  return (
    <section
      aria-label="Why Perfora"
      style={{
        background: "#EEE8F8",
        borderTop:  "1px solid #E8E0F5",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        style={{ maxWidth: 1280, margin: "0 auto" }}
      >
        <Image
          src="/why-perfora-new.png"
          alt="What sets Perfora apart — Vegan, Cruelty-Free, Paraben Free, Fluoride Free, SLS Free, and more"
          width={1584}
          height={672}
          sizes="(min-width: 1280px) 1280px, 100vw"
          className="block w-full h-auto"
          loading="lazy"
        />
      </motion.div>
    </section>
  );
}
