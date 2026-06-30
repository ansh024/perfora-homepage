"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../components/SiteFooter";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";
import {
  PRODUCTS,
  FAQS,
  REVIEWS,
  type Category,
  type Product,
} from "../lib/products";

const CDN = "https://cdn.shopify.com/s/files/1/0587/1036/0271/files";

const HERO_IMG = `${CDN}/desktop-homepage-17_490b6cdd-c055-4d5a-ab12-46a50ae71b73.jpg?v=1776492900`;
const COMBO_IMG = `${CDN}/Desktop_2.jpg?v=1780407197`;

const MARQUEE_ITEMS = [
  "Purple Science for Whiter Teeth",
  "Clinically Tested Formula",
  "100% Peroxide Free",
  "42,000+ Happy Customers",
  "Results in 2 Weeks",
  "No Sensitivity",
];

const TABS: { label: string; value: Category }[] = [
  { label: "All Products", value: "all" },
  { label: "Whitening", value: "whitening" },
  { label: "Electric Toothbrushes", value: "brushes" },
  { label: "Toothpastes", value: "toothpaste" },
  { label: "Kits & Combos", value: "kits" },
];

const SORT_OPTIONS = [
  { value: "best-selling", label: "Best Selling" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "top-rated", label: "Top Rated" },
];

const TRUST_ITEMS = [
  { icon: "⚗️", label: "CLINICALLY TESTED" },
  { icon: "🌿", label: "FLUORIDE FREE" },
  { icon: "✦", label: "ENAMEL SAFE" },
  { icon: "🦷", label: "DENTIST FORMULATED" },
  { icon: "🏠", label: "AT-HOME WHITENING" },
  { icon: "⭐", label: "VISIBLE IN 2 WEEKS" },
];

function Star({ filled }: { filled: boolean }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path
        d="M6 1l1.236 2.506L10 3.9l-2 1.949.472 2.751L6 7.25l-2.472 1.35L4 5.85 2 3.9l2.764-.394L6 1z"
        fill={filled ? "#1A0A3D" : "#D1C8F5"}
      />
    </svg>
  );
}

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} filled={i <= Math.round(rating)} />
      ))}
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [added, setAdded] = useState(false);
  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  function handleAdd() {
    addItem({
      id: product.id,
      name: product.name,
      variant: selectedVariant,
      price: product.price,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <div className="flex flex-col rounded-2xl overflow-hidden" style={{ backgroundColor: "#F0EBFF" }}>
      {/* Image area */}
      <div className="relative bg-white mx-3 mt-3 rounded-xl overflow-hidden" style={{ aspectRatio: "1/1" }}>
        {product.badge && (
          <span
            className="absolute top-2 left-2 z-10 text-white text-[10px] font-semibold tracking-widest px-2 py-1 rounded-full"
            style={{ backgroundColor: "#1A0A3D", fontFamily: "var(--font-inter)" }}
          >
            {product.badge}
          </span>
        )}
        <Image
          src={product.img}
          alt={product.name}
          fill
          className="object-contain p-4"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 px-3 pb-3 pt-2.5">
        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <RatingStars rating={product.rating} />
          <span className="text-[11px] text-gray-500" style={{ fontFamily: "var(--font-inter)" }}>
            ({product.reviews}+ Reviews)
          </span>
        </div>

        {/* Name */}
        <p
          className="text-[13px] font-semibold leading-snug text-gray-900 line-clamp-2"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {product.name}
        </p>

        {/* Description */}
        <p
          className="text-[11px] text-gray-500 leading-snug line-clamp-1"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {product.description}
        </p>

        {/* Price row */}
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className="text-[16px] font-bold text-gray-900"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            ₹{product.price.toLocaleString("en-IN")}
          </span>
          {discount > 0 && (
            <>
              <span
                className="text-[13px] text-gray-400 line-through"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                ₹{product.originalPrice.toLocaleString("en-IN")}
              </span>
              <span
                className="text-[11px] font-semibold text-green-700 bg-green-100 px-2 py-0.5 rounded-full"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {discount}% OFF
              </span>
            </>
          )}
        </div>

        {/* Variant selector */}
        <select
          value={selectedVariant}
          onChange={(e) => setSelectedVariant(e.target.value)}
          className="w-full text-[12px] border border-gray-200 bg-white rounded-lg px-3 py-2 outline-none text-gray-700 cursor-pointer"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {product.variants.map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>

        {/* Add to Cart */}
        <button
          onClick={handleAdd}
          className="w-full text-white text-[13px] font-semibold py-2.5 rounded-xl transition-all duration-200"
          style={{
            backgroundColor: added ? "#2D1260" : "#1A0A3D",
            fontFamily: "var(--font-inter)",
          }}
        >
          {added ? "Added ✓" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

function FeaturedCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [added, setAdded] = useState(false);
  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  function handleAdd() {
    addItem({
      id: product.id,
      name: product.name,
      variant: selectedVariant,
      price: product.price,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <div
      className="rounded-2xl overflow-hidden grid md:grid-cols-2 gap-0"
      style={{ backgroundColor: "#F0EBFF" }}
    >
      {/* Left: product image */}
      <div className="relative bg-white flex items-center justify-center min-h-[280px] md:min-h-[360px]">
        <span
          className="absolute top-4 left-4 z-10 text-white text-[11px] font-bold tracking-widest px-3 py-1 rounded-full"
          style={{ backgroundColor: "#FF6B00", fontFamily: "var(--font-inter)" }}
        >
          BESTSELLER
        </span>
        <Image
          src={product.img}
          alt={product.name}
          fill
          className="object-contain p-10"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Right: details */}
      <div className="flex flex-col justify-center gap-4 p-8">
        <div className="flex items-center gap-2">
          <RatingStars rating={product.rating} />
          <span className="text-[12px] text-gray-500" style={{ fontFamily: "var(--font-inter)" }}>
            {product.rating}/5 · {product.reviews}+ Reviews
          </span>
        </div>

        <h2
          className="text-2xl md:text-3xl font-semibold leading-tight text-gray-900"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {product.name}
        </h2>

        {product.featuredBenefits && (
          <ul className="flex flex-col gap-2">
            {product.featuredBenefits.map((b) => (
              <li
                key={b}
                className="flex items-start gap-2 text-[13px] text-gray-700"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                <span className="mt-0.5 text-green-600 font-bold">✓</span>
                {b}
              </li>
            ))}
          </ul>
        )}

        <div className="flex items-center gap-3">
          <span
            className="text-2xl font-bold text-gray-900"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            ₹{product.price.toLocaleString("en-IN")}
          </span>
          {discount > 0 && (
            <>
              <span
                className="text-base text-gray-400 line-through"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                ₹{product.originalPrice.toLocaleString("en-IN")}
              </span>
              <span
                className="text-[12px] font-semibold text-green-700 bg-green-100 px-2 py-0.5 rounded-full"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {discount}% OFF
              </span>
            </>
          )}
        </div>

        <select
          value={selectedVariant}
          onChange={(e) => setSelectedVariant(e.target.value)}
          className="w-full max-w-xs text-[13px] border border-gray-300 bg-white rounded-xl px-3 py-2.5 outline-none text-gray-700 cursor-pointer"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {product.variants.map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>

        <button
          onClick={handleAdd}
          className="w-full max-w-xs text-white font-semibold py-3 rounded-xl transition-all duration-200 text-[14px]"
          style={{
            backgroundColor: added ? "#2D1260" : "#1A0A3D",
            fontFamily: "var(--font-inter)",
          }}
        >
          {added ? "Added to Cart ✓" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

function FAQAccordion({ faqs }: { faqs: typeof FAQS }) {
  const [open, setOpen] = useState<number | null>(0);
  const half = Math.ceil(faqs.length / 2);
  const col1 = faqs.slice(0, half);
  const col2 = faqs.slice(half);

  function Item({ faq, idx }: { faq: (typeof FAQS)[0]; idx: number }) {
    const isOpen = open === idx;
    return (
      <div
        className="border-b border-gray-200 py-4 cursor-pointer"
        onClick={() => setOpen(isOpen ? null : idx)}
      >
        <div className="flex items-start justify-between gap-3">
          <p
            className="text-[14px] font-semibold text-gray-900 flex-1"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {faq.q}
          </p>
          <span className="text-gray-400 text-lg leading-none flex-shrink-0">{isOpen ? "−" : "+"}</span>
        </div>
        {isOpen && (
          <p
            className="mt-3 text-[13px] text-gray-600 leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {faq.a}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-x-12">
      <div>{col1.map((f, i) => <Item key={i} faq={f} idx={i} />)}</div>
      <div>{col2.map((f, i) => <Item key={i + half} faq={f} idx={i + half} />)}</div>
    </div>
  );
}

export default function CollectionsPage() {
  const [activeTab, setActiveTab] = useState<Category>("all");
  const [sort, setSort] = useState("best-selling");
  const gridRef = useRef<HTMLDivElement>(null);

  const featured = PRODUCTS.find((p) => p.featured)!;

  let filtered = activeTab === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === activeTab);

  if (sort === "price-low") filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sort === "price-high") filtered = [...filtered].sort((a, b) => b.price - a.price);
  if (sort === "top-rated") filtered = [...filtered].sort((a, b) => b.rating - a.rating);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "var(--font-inter)" }}>
      <Navbar />

      {/* Announcement marquee */}
      <div className="bg-white border-b border-gray-100 overflow-hidden py-2">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 text-[12px] font-medium text-gray-700 mx-6"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <span style={{ color: "#6B4FB3" }}>✦</span>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section
        className="relative overflow-hidden min-h-[480px] md:min-h-[560px] flex items-center"
        style={{ background: "linear-gradient(145deg, #1A0A3D 0%, #2D1260 60%, #3D1F8F 100%)" }}
      >
        <div className="absolute inset-0 md:left-1/2">
          <Image
            src={HERO_IMG}
            alt="Purple science for whiter teeth"
            fill
            className="object-cover object-left md:object-center opacity-60 md:opacity-80"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #1A0A3D 0%, rgba(26,10,61,0.7) 50%, transparent 100%)" }} />
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 py-16 max-w-6xl">
          <div className="max-w-lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 12 12" fill="#F5D94E">
                    <path d="M6 1l1.236 2.506L10 3.9l-2 1.949.472 2.751L6 7.25l-2.472 1.35L4 5.85 2 3.9l2.764-.394L6 1z" />
                  </svg>
                ))}
              </div>
              <span className="text-white/80 text-[13px]" style={{ fontFamily: "var(--font-inter)" }}>42,000+ Happy Customers</span>
            </div>

            <h1
              className="text-4xl md:text-5xl text-white leading-tight mb-6"
              style={{ fontFamily: "var(--spectral)", fontStyle: "italic" }}
            >
              Purple science for<br />whiter teeth
            </h1>

            <p className="text-white/70 text-[15px] mb-8 max-w-sm leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
              Clinically proven colour-corrective technology. Peroxide-free. Sensitivity-safe. Results in 14 days.
            </p>

            <button
              onClick={() => gridRef.current?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 bg-white text-[14px] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
              style={{ color: "#1A0A3D", fontFamily: "var(--font-inter)" }}
            >
              Shop Collection
            </button>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="py-4 overflow-hidden" style={{ backgroundColor: "#EDE9FB" }}>
        <div className="flex overflow-x-auto px-4 md:px-0 md:justify-center gap-6 md:gap-10">
          {TRUST_ITEMS.map((t) => (
            <div key={t.label} className="flex items-center gap-2 shrink-0">
              <span className="text-lg">{t.icon}</span>
              <span
                className="text-[11px] font-semibold tracking-wider whitespace-nowrap"
                style={{ color: "#3D1F8F", fontFamily: "var(--font-inter)" }}
              >
                {t.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Bestseller */}
      <section className="container mx-auto px-4 md:px-12 py-12 max-w-6xl">
        <FeaturedCard product={featured} />
      </section>

      {/* Filter tabs + Grid */}
      <section ref={gridRef} className="container mx-auto px-4 md:px-12 pb-16 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {TABS.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className="shrink-0 text-[13px] font-medium px-4 py-2 rounded-full border transition-all duration-150"
                style={{
                  fontFamily: "var(--font-inter)",
                  backgroundColor: activeTab === tab.value ? "#1A0A3D" : "white",
                  color: activeTab === tab.value ? "white" : "#374151",
                  borderColor: activeTab === tab.value ? "#1A0A3D" : "#D1D5DB",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[13px] text-gray-500" style={{ fontFamily: "var(--font-inter)" }}>Sort by:</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="text-[13px] border border-gray-200 bg-white rounded-lg px-3 py-2 outline-none text-gray-700 cursor-pointer"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>

        <p className="text-[13px] text-gray-500 mb-6" style={{ fontFamily: "var(--font-inter)" }}>
          {filtered.length} products
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Combo Banner */}
      <section className="mx-4 md:mx-12 mb-16 rounded-3xl overflow-hidden relative min-h-[360px] flex items-center max-w-6xl xl:mx-auto">
        <Image
          src={COMBO_IMG}
          alt="Perfora combo offer"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(26,10,61,0.9) 0%, rgba(26,10,61,0.5) 60%, transparent 100%)" }}
        />
        <div className="relative z-10 p-10 md:p-14 max-w-lg">
          <span
            className="inline-block text-[11px] font-semibold tracking-widest text-white/70 mb-3 uppercase"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Limited Combo Offer
          </span>
          <h2
            className="text-3xl md:text-4xl text-white mb-4 leading-tight"
            style={{ fontFamily: "var(--spectral)", fontStyle: "italic" }}
          >
            Build your complete<br />oral care ritual
          </h2>
          <p className="text-white/70 text-[14px] mb-8 leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
            Save up to 40% when you bundle your favourite Perfora products. Free delivery included.
          </p>
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 bg-white text-[14px] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
            style={{ color: "#1A0A3D", fontFamily: "var(--font-inter)" }}
          >
            Shop Combos
          </Link>
        </div>
      </section>

      {/* Real People Real Results */}
      <section
        className="py-16"
        style={{ background: "linear-gradient(160deg, #1A0A3D 0%, #2D1260 100%)" }}
      >
        <div className="container mx-auto px-4 md:px-12 max-w-6xl">
          <h2
            className="text-3xl md:text-4xl text-white text-center mb-10"
            style={{ fontFamily: "var(--spectral)", fontStyle: "italic" }}
          >
            Real people, real results
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r) => (
              <div
                key={r.id}
                className="rounded-2xl p-6 border"
                style={{ backgroundColor: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.1)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-[14px]"
                    style={{ backgroundColor: "#3D1F8F", fontFamily: "var(--font-inter)" }}
                  >
                    {r.avatar}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-[14px]" style={{ fontFamily: "var(--font-inter)" }}>
                      {r.name}
                    </p>
                    <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-inter)" }}>
                      Verified Purchase · {r.product}
                    </p>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill={i <= r.rating ? "#F5D94E" : "#4B3A7A"}>
                      <path d="M6 1l1.236 2.506L10 3.9l-2 1.949.472 2.751L6 7.25l-2.472 1.35L4 5.85 2 3.9l2.764-.394L6 1z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.8)", fontFamily: "var(--font-inter)" }}>
                  &ldquo;{r.text}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 md:px-12 py-16 max-w-6xl">
        <h2
          className="text-3xl md:text-4xl text-gray-900 mb-10 text-center"
          style={{ fontFamily: "var(--spectral)", fontStyle: "italic" }}
        >
          Frequently asked questions
        </h2>
        <FAQAccordion faqs={FAQS} />
      </section>

      <SiteFooter />
    </div>
  );
}
