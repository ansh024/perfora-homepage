"use client";
import { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import SiteFooter from "../components/SiteFooter";
import { useCart } from "../context/CartContext";
import {
  PRODUCTS, TRUST_BADGES, SORT_OPTIONS, REVIEWS, FAQS,
  type Category, type Product,
} from "../lib/products";

// ─── helpers ──────────────────────────────────────────────────────────────────
function discount(p: Product) {
  return Math.round((1 - p.price / p.originalPrice) * 100);
}

function imgPlaceholder(id: string, size = 260) {
  const hues: Record<string, string> = {
    whitening: "253,91%,82%", brushes: "210,70%,78%",
    toothpaste: "170,60%,78%", kits: "300,50%,82%",
  };
  const cat = PRODUCTS.find(p => p.id === id)?.category ?? "whitening";
  return `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
      <rect width="${size}" height="${size}" fill="hsl(${hues[cat] ?? "253,91%,82%"})"/>
      <text x="50%" y="50%" font-family="sans-serif" font-size="13" fill="rgba(30,10,80,0.5)" text-anchor="middle" dominant-baseline="middle">perfora</text>
    </svg>`
  )}`;
}

const BADGE_COLORS: Record<string, { bg: string; color: string }> = {
  "BEST SELLER": { bg: "#1A0A3D", color: "#fff" },
  "NEW LAUNCH":  { bg: "#E8540A", color: "#fff" },
  "TOP RATED":   { bg: "#3D1F8F", color: "#fff" },
};

// ─── sub-components ───────────────────────────────────────────────────────────
function Stars({ rating, size = 13 }: { rating: number; size?: number }) {
  return (
    <span style={{ display: "inline-flex", gap: 1 }}>
      {[1,2,3,4,5].map(i => (
        <svg key={i} width={size} height={size} viewBox="0 0 14 14" fill={i <= Math.round(rating) ? "#F5A623" : "#E0D4F0"}>
          <path d="M7 1l1.8 3.6L13 5.3l-3 2.9.7 4.1L7 10.3l-3.7 2 .7-4.1-3-2.9 4.2-.7z"/>
        </svg>
      ))}
    </span>
  );
}

function Toast({ msg, onClose }: { msg: string; onClose: () => void }) {
  return (
    <div style={{
      position: "fixed", bottom: 28, left: "50%", transform: "translateX(-50%)",
      background: "#1A0A3D", color: "#fff", borderRadius: 12,
      padding: "14px 24px", fontFamily: "var(--font-inter)", fontSize: 14, fontWeight: 600,
      zIndex: 9999, display: "flex", alignItems: "center", gap: 12,
      boxShadow: "0 8px 32px rgba(26,10,61,0.3)", whiteSpace: "nowrap",
    }}>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="8" stroke="#A78BFA" strokeWidth="1.5"/>
        <path d="M5.5 9l2.5 2.5 4.5-5" stroke="#A78BFA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      {msg}
      <button onClick={onClose} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.6)", cursor: "pointer", fontSize: 18, lineHeight: 1, padding: 0 }}>×</button>
    </div>
  );
}

function ProductCard({ product, onAdd }: { product: Product; onAdd: (v: string) => void }) {
  const [variant, setVariant] = useState(product.variants[0]);
  const d = discount(product);

  return (
    <div style={{
      background: "#F0EBFF", borderRadius: 20, overflow: "hidden",
      display: "flex", flexDirection: "column",
      border: "1.5px solid #E4DBF8",
      transition: "box-shadow 0.2s",
    }}
      onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 8px 32px rgba(61,31,143,0.12)")}
      onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
    >
      {/* Image area */}
      <div style={{ position: "relative", background: "#fff", padding: "20px 20px 12px" }}>
        {product.badge && (
          <span style={{
            position: "absolute", top: 12, left: 12, zIndex: 1,
            background: BADGE_COLORS[product.badge].bg,
            color: BADGE_COLORS[product.badge].color,
            fontFamily: "var(--font-inter)", fontSize: 10, fontWeight: 700,
            letterSpacing: "0.08em", padding: "4px 10px", borderRadius: 20,
          }}>{product.badge}</span>
        )}
        <img
          src={imgPlaceholder(product.id)}
          alt={product.name}
          style={{ width: "100%", aspectRatio: "1", objectFit: "contain", borderRadius: 10 }}
        />
      </div>

      {/* Details */}
      <div style={{ padding: "14px 16px 18px", display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <Stars rating={product.rating} />
          <span style={{ fontFamily: "var(--font-inter)", fontSize: 12, fontWeight: 600, color: "#1A0A3D" }}>{product.rating}</span>
          <span style={{ fontFamily: "var(--font-inter)", fontSize: 12, color: "#9B8CB8" }}>({product.reviews})</span>
        </div>

        <p style={{ fontFamily: "var(--font-inter)", fontSize: 14, fontWeight: 700, color: "#1A0A3D", margin: 0, lineHeight: 1.35 }}>{product.name}</p>
        <p style={{ fontFamily: "var(--font-inter)", fontSize: 12, color: "#6B5E8A", margin: 0, lineHeight: 1.5 }}>{product.description}</p>

        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
          <span style={{ fontFamily: "var(--font-inter)", fontSize: 17, fontWeight: 800, color: "#1A0A3D" }}>₹{product.price.toLocaleString("en-IN")}</span>
          <span style={{ fontFamily: "var(--font-inter)", fontSize: 13, color: "#9B8CB8", textDecoration: "line-through" }}>₹{product.originalPrice.toLocaleString("en-IN")}</span>
          <span style={{ background: "#16A34A", color: "#fff", fontFamily: "var(--font-inter)", fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20 }}>{d}% OFF</span>
        </div>

        <select
          value={variant}
          onChange={e => setVariant(e.target.value)}
          style={{
            border: "1.5px solid #D4CBF8", borderRadius: 10, padding: "8px 12px",
            fontFamily: "var(--font-inter)", fontSize: 13, color: "#1A0A3D",
            background: "#fff", cursor: "pointer", outline: "none", marginTop: 2,
          }}
        >
          {product.variants.map(v => <option key={v}>{v}</option>)}
        </select>

        <button
          onClick={() => onAdd(variant)}
          style={{
            background: "#1A0A3D", color: "#fff", border: "none", borderRadius: 12,
            padding: "12px", fontFamily: "var(--font-inter)", fontSize: 14, fontWeight: 700,
            cursor: "pointer", marginTop: "auto", transition: "background 0.18s",
          }}
          onMouseEnter={e => (e.currentTarget.style.background = "#3D1F8F")}
          onMouseLeave={e => (e.currentTarget.style.background = "#1A0A3D")}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
const CATEGORIES: { value: Category; label: string }[] = [
  { value: "all", label: "All Products" },
  { value: "whitening", label: "Whitening" },
  { value: "brushes", label: "Brushes" },
  { value: "toothpaste", label: "Toothpaste" },
  { value: "kits", label: "Kits" },
];

export default function CollectionsPage() {
  const { addItem, count } = useCart();
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [sortBy, setSortBy] = useState("best-selling");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const featured = PRODUCTS.find(p => p.featured)!;

  const filtered = useMemo(() => {
    let list = activeCategory === "all" ? PRODUCTS : PRODUCTS.filter(p => p.category === activeCategory);
    list = list.filter(p => !p.featured);
    switch (sortBy) {
      case "price-low":  return [...list].sort((a, b) => a.price - b.price);
      case "price-high": return [...list].sort((a, b) => b.price - a.price);
      case "top-rated":  return [...list].sort((a, b) => b.rating - a.rating);
      default:           return list;
    }
  }, [activeCategory, sortBy]);

  function handleAdd(product: Product, variant: string) {
    addItem({ id: product.id, name: product.name, variant, price: product.price });
    setToast(`${product.name.slice(0, 30)}… added to cart`);
    setTimeout(() => setToast(null), 2800);
  }

  return (
    <>
      <Navbar />

      {/* ── Announcement bar ── */}
      <div style={{ background: "#1A0A3D", padding: "10px 0", overflow: "hidden" }}>
        <div style={{ display: "flex", gap: 48, animation: "marquee 24s linear infinite", whiteSpace: "nowrap" }}>
          {[...Array(3)].map((_, i) => (
            <span key={i} style={{ display: "flex", gap: 48, flexShrink: 0 }}>
              <span style={{ fontFamily: "var(--font-inter)", fontSize: 12, fontWeight: 600, color: "#fff", letterSpacing: "0.04em" }}>
                ✦ NEW LAUNCH → Purple Magic Teeth Whitening Self Dissolving Strips
              </span>
              <span style={{ fontFamily: "var(--font-inter)", fontSize: 12, fontWeight: 600, color: "#A78BFA", letterSpacing: "0.04em" }}>
                ✦ Ships above ₹999 and get freebies worth ₹99
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Hero ── */}
      <section style={{
        background: "linear-gradient(135deg, #0F0520 0%, #1A0A3D 50%, #2D1260 100%)",
        padding: "clamp(48px,6vw,80px) clamp(20px,6vw,88px)",
        position: "relative", overflow: "hidden",
      }}>
        {/* sparkles */}
        {["8% 20%","85% 15%","5% 75%","90% 70%","50% 8%"].map((pos, i) => (
          <div key={i} aria-hidden style={{ position: "absolute", left: pos.split(" ")[0], top: pos.split(" ")[1], width: i % 2 === 0 ? 6 : 8, height: i % 2 === 0 ? 6 : 8, background: "#A78BFA", borderRadius: "50%", opacity: 0.5 }} />
        ))}
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <Stars rating={5} size={16} />
              <span style={{ fontFamily: "var(--font-inter)", fontSize: 13, color: "rgba(255,255,255,0.75)" }}>
                1,00,000+ Reviews · Rated 4.4/5
              </span>
            </div>
            <h1 className="font-display" style={{ fontSize: "clamp(2rem,4.5vw,3.6rem)", fontWeight: 700, color: "#fff", lineHeight: 1.1, margin: "0 0 16px", letterSpacing: "-0.03em" }}>
              Purple science for{" "}
              <em style={{ fontStyle: "italic", color: "#C4B5F0" }}>whiter teeth</em>
            </h1>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(14px,1.4vw,16px)", color: "rgba(255,255,255,0.7)", margin: "0 0 28px", lineHeight: 1.6 }}>
              Instant results. No tooth sensitivity.
            </p>
            <button
              onClick={() => document.getElementById("product-grid")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                background: "#fff", color: "#1A0A3D", border: "none", borderRadius: 10,
                padding: "14px 28px", fontFamily: "var(--font-inter)", fontSize: 15, fontWeight: 700,
                cursor: "pointer", transition: "background 0.18s",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "#EDE9FB")}
              onMouseLeave={e => (e.currentTarget.style.background = "#fff")}
            >
              Limited Units
            </button>
          </div>

          {/* Hero product visual placeholder */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{
              width: "clamp(200px,30vw,340px)", height: "clamp(200px,30vw,340px)",
              background: "radial-gradient(circle at 60% 40%, #6B4FB3 0%, #2D1260 70%)",
              borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 0 80px rgba(167,139,250,0.3)",
            }}>
              <span className="font-display" style={{ fontSize: "clamp(1.4rem,3vw,2.4rem)", fontWeight: 700, fontStyle: "italic", color: "rgba(255,255,255,0.35)", letterSpacing: "-0.02em" }}>perfora</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust strip ── */}
      <div style={{ background: "#fff", borderBottom: "1px solid #EDE9FB", overflowX: "auto" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px,4vw,48px)", display: "flex", gap: 0 }}>
          {TRUST_BADGES.map((b, i) => (
            <div key={b} style={{
              display: "flex", alignItems: "center", gap: 8, padding: "14px clamp(12px,2vw,24px)",
              borderRight: i < TRUST_BADGES.length - 1 ? "1px solid #EDE9FB" : undefined,
              flexShrink: 0,
            }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#3D1F8F", flexShrink: 0 }} />
              <span style={{ fontFamily: "var(--font-inter)", fontSize: 11, fontWeight: 700, color: "#3D1F8F", letterSpacing: "0.1em", whiteSpace: "nowrap" }}>{b}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Featured bestseller ── */}
      <section style={{ background: "#F5F3FF", padding: "clamp(32px,4vw,56px) clamp(20px,6vw,88px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{
            background: "#fff", borderRadius: 24, border: "1.5px solid #EDE9FB",
            display: "grid", gridTemplateColumns: "280px 1fr", overflow: "hidden",
            boxShadow: "0 4px 24px rgba(61,31,143,0.08)",
          }}>
            <div style={{ background: "#F0EBFF", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 32, position: "relative" }}>
              <span style={{ position: "absolute", top: 16, left: 16, background: "#1A0A3D", color: "#fff", fontFamily: "var(--font-inter)", fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", padding: "4px 12px", borderRadius: 20 }}>BESTSELLER</span>
              <img src={imgPlaceholder(featured.id, 220)} alt={featured.name} style={{ width: 200, height: 200, objectFit: "contain" }} />
            </div>
            <div style={{ padding: "32px 36px", display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Stars rating={featured.rating} size={15} />
                <span style={{ fontFamily: "var(--font-inter)", fontSize: 13, fontWeight: 600, color: "#1A0A3D" }}>{featured.rating}/5.0</span>
                <span style={{ fontFamily: "var(--font-inter)", fontSize: 13, color: "#9B8CB8" }}>{featured.reviews}+ Customers</span>
              </div>
              <h2 className="font-display" style={{ fontSize: "clamp(1.4rem,2.5vw,2rem)", fontWeight: 700, color: "#1A0A3D", margin: 0, lineHeight: 1.2 }}>{featured.name}</h2>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: 14, color: "#6B5E8A", margin: 0 }}>{featured.description}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {featured.featuredBenefits?.map(b => (
                  <div key={b} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 16, height: 16, borderRadius: "50%", background: "#F0EBFF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l1.5 1.5 3.5-3.5" stroke="#3D1F8F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <span style={{ fontFamily: "var(--font-inter)", fontSize: 13, color: "#4A4458" }}>{b}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 4 }}>
                <span style={{ fontFamily: "var(--font-inter)", fontSize: 22, fontWeight: 800, color: "#1A0A3D" }}>₹{featured.price}</span>
                <span style={{ fontFamily: "var(--font-inter)", fontSize: 14, color: "#9B8CB8", textDecoration: "line-through" }}>₹{featured.originalPrice}</span>
                <span style={{ background: "#16A34A", color: "#fff", fontFamily: "var(--font-inter)", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20 }}>{discount(featured)}% OFF</span>
              </div>
              <button
                onClick={() => handleAdd(featured, featured.variants[0])}
                style={{
                  background: "#1A0A3D", color: "#fff", border: "none", borderRadius: 12,
                  padding: "14px 32px", fontFamily: "var(--font-inter)", fontSize: 15, fontWeight: 700,
                  cursor: "pointer", alignSelf: "flex-start", marginTop: 4, transition: "background 0.18s",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "#3D1F8F")}
                onMouseLeave={e => (e.currentTarget.style.background = "#1A0A3D")}
              >
                Add to Cart →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Filter bar + Product grid ── */}
      <section id="product-grid" style={{ background: "#F5F3FF", padding: "0 clamp(20px,6vw,88px) clamp(48px,6vw,72px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* Filter bar */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 28, paddingTop: 8 }}>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {CATEGORIES.map(c => (
                <button
                  key={c.value}
                  onClick={() => setActiveCategory(c.value)}
                  style={{
                    background: activeCategory === c.value ? "#1A0A3D" : "#fff",
                    color: activeCategory === c.value ? "#fff" : "#1A0A3D",
                    border: `1.5px solid ${activeCategory === c.value ? "#1A0A3D" : "#D4CBF8"}`,
                    borderRadius: 24, padding: "8px 18px",
                    fontFamily: "var(--font-inter)", fontSize: 13, fontWeight: 600,
                    cursor: "pointer", transition: "all 0.15s",
                  }}
                >{c.label}</button>
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontFamily: "var(--font-inter)", fontSize: 13, color: "#9B8CB8" }}>Sort by</span>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                style={{
                  border: "1.5px solid #D4CBF8", borderRadius: 10, padding: "8px 12px",
                  fontFamily: "var(--font-inter)", fontSize: 13, color: "#1A0A3D",
                  background: "#fff", cursor: "pointer", outline: "none",
                }}
              >
                {SORT_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            </div>
          </div>

          {/* Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))", gap: 18 }}>
            {filtered.map(p => (
              <ProductCard key={p.id} product={p} onAdd={(v) => handleAdd(p, v)} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "60px 0", color: "#9B8CB8", fontFamily: "var(--font-inter)", fontSize: 15 }}>
              No products found in this category.
            </div>
          )}
        </div>
      </section>

      {/* ── Combo banner ── */}
      <section style={{ background: "#fff", padding: "clamp(40px,5vw,64px) clamp(20px,6vw,88px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{
            background: "linear-gradient(135deg, #EDE9FB 0%, #E4DBF8 100%)",
            borderRadius: 24, padding: "clamp(32px,4vw,56px)",
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center",
            border: "1.5px solid #D4CBF8",
          }}>
            <div>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9B8CB8", margin: "0 0 12px" }}>Save More</p>
              <h2 className="font-display" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 700, color: "#1A0A3D", margin: "0 0 14px", lineHeight: 1.15 }}>
                Visible results,{" "}
                <em style={{ fontStyle: "italic", color: "#6B4FB3" }}>bigger savings!</em>
              </h2>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(14px,1.3vw,15px)", color: "#4A4458", margin: "0 0 28px", lineHeight: 1.65 }}>
                Because your teeth deserve more.<br />Save up to 30% when you shop a combo.
              </p>
              <button
                onClick={() => setActiveCategory("kits")}
                style={{
                  background: "#1A0A3D", color: "#fff", border: "none", borderRadius: 12,
                  padding: "13px 28px", fontFamily: "var(--font-inter)", fontSize: 14, fontWeight: 700,
                  cursor: "pointer", transition: "background 0.18s",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "#3D1F8F")}
                onMouseLeave={e => (e.currentTarget.style.background = "#1A0A3D")}
              >
                Explore Combos
              </button>
            </div>
            <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
              {["kits","whitening","toothpaste"].map(cat => (
                <div key={cat} style={{
                  width: 100, height: 140, background: `hsl(${cat === "kits" ? "300,40%,88%" : cat === "whitening" ? "253,70%,88%" : "170,50%,86%"})`,
                  borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 4px 16px rgba(61,31,143,0.1)",
                }}>
                  <span className="font-display" style={{ fontSize: 11, fontStyle: "italic", color: "rgba(30,10,80,0.4)", fontWeight: 700 }}>perfora</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Real People Real Results ── */}
      <section style={{ background: "#F5F3FF", padding: "clamp(40px,5vw,64px) 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px,6vw,88px)" }}>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9B8CB8", marginBottom: 8, textAlign: "center" }}>Social Proof</p>
          <h2 className="font-display" style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 700, color: "#1A0A3D", textAlign: "center", margin: "0 0 32px" }}>
            Real People,{" "}
            <em style={{ fontStyle: "italic", color: "#6B4FB3" }}>Real Results</em>
          </h2>
        </div>
        <div style={{ display: "flex", gap: 14, overflowX: "auto", paddingLeft: "clamp(20px,6vw,88px)", paddingRight: 40, paddingBottom: 8 }}>
          {["Game changer for me","Obsessed with this","Finally no gum issues","Switched to Perfora","My dentist noticed!","3 months of results"].map((label, i) => (
            <div key={i} style={{
              flexShrink: 0, width: 160,
              background: `linear-gradient(145deg, #${["1A0A3D","2D1260","3D1F8F","1A0A3D","2D1260","3D1F8F"][i]} 0%, #${["2D1260","3D1F8F","6B4FB3","2D1260","3D1F8F","6B4FB3"][i]} 100%)`,
              borderRadius: 16, padding: "16px 14px",
              display: "flex", flexDirection: "column", justifyContent: "space-between",
              minHeight: 200, border: "1px solid rgba(167,139,250,0.2)",
            }}>
              <div style={{ display: "flex", gap: 2 }}>
                {[1,2,3,4,5].map(s => <svg key={s} width="10" height="10" viewBox="0 0 14 14" fill="#F5A623"><path d="M7 1l1.8 3.6L13 5.3l-3 2.9.7 4.1L7 10.3l-3.7 2 .7-4.1-3-2.9 4.2-.7z"/></svg>)}
              </div>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: 13, fontWeight: 600, color: "#fff", margin: 0, lineHeight: 1.4 }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Reviews ── */}
      <section style={{ background: "#fff", padding: "clamp(40px,5vw,64px) clamp(20px,6vw,88px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9B8CB8", marginBottom: 8 }}>Real Customer Stories</p>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 32 }}>
            <div>
              <h2 className="font-display" style={{ fontSize: "clamp(1.8rem,3vw,2.4rem)", fontWeight: 700, color: "#1A0A3D", margin: "0 0 8px", lineHeight: 1.2 }}>
                Trusted by{" "}
                <em style={{ fontStyle: "italic", color: "#6B4FB3" }}>thousands of smiles.</em>
              </h2>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Stars rating={4.8} size={15} />
                <span style={{ fontFamily: "var(--font-inter)", fontSize: 14, fontWeight: 700, color: "#1A0A3D" }}>4.8</span>
                <span style={{ fontFamily: "var(--font-inter)", fontSize: 13, color: "#9B8CB8" }}>Based on 12,000+ verified reviews</span>
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 16 }}>
            {REVIEWS.map(r => (
              <div key={r.id} style={{ background: "#F5F3FF", borderRadius: 18, padding: "22px 24px", border: "1.5px solid #EDE9FB" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#3D1F8F", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontFamily: "var(--font-inter)", fontSize: 16, fontWeight: 700, color: "#fff" }}>{r.name[0]}</span>
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: 14, fontWeight: 700, color: "#1A0A3D", margin: 0 }}>{r.name}</p>
                    {r.verified && <span style={{ fontFamily: "var(--font-inter)", fontSize: 11, color: "#16A34A", fontWeight: 600 }}>✓ Verified</span>}
                  </div>
                  <Stars rating={r.rating} />
                </div>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: 14, lineHeight: 1.7, color: "#4A4458", margin: "0 0 12px" }}>"{r.text}"</p>
                <span style={{ background: "#EDE9FB", color: "#3D1F8F", fontFamily: "var(--font-inter)", fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 20 }}>{r.product}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: "#F5F3FF", padding: "clamp(40px,5vw,64px) clamp(20px,6vw,88px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 className="font-display" style={{ fontSize: "clamp(1.8rem,3vw,2.4rem)", fontWeight: 700, color: "#1A0A3D", textAlign: "center", margin: "0 0 36px" }}>
            Frequently Asked{" "}
            <em style={{ fontStyle: "italic", color: "#6B4FB3" }}>Questions</em>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 32, alignItems: "start" }}>
            {/* Left sidebar */}
            <div style={{ background: "#fff", borderRadius: 18, padding: "24px", border: "1.5px solid #EDE9FB", textAlign: "center" }}>
              <div style={{ width: 64, height: 64, borderRadius: 16, background: "#F0EBFF", margin: "0 auto 14px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M14 3C9.03 3 5 7.03 5 12c0 5.52 7.5 13 9 13s9-7.48 9-13c0-4.97-4.03-9-9-9z" stroke="#3D1F8F" strokeWidth="1.5" strokeLinejoin="round"/>
                  <circle cx="14" cy="12" r="3" stroke="#3D1F8F" strokeWidth="1.5"/>
                </svg>
              </div>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9B8CB8", margin: "0 0 4px" }}>Teeth Whitening</p>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: 13, color: "#4A4458", margin: 0, lineHeight: 1.5 }}>Learn about Serum benefits, usage, etc.</p>
            </div>
            {/* Accordion */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {FAQS.map((faq, i) => (
                <div key={i} style={{ background: "#fff", borderRadius: 14, border: "1.5px solid #EDE9FB", overflow: "hidden" }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                      padding: "16px 20px", background: "none", border: "none", cursor: "pointer",
                      fontFamily: "var(--font-inter)", fontSize: 14, fontWeight: 600, color: "#1A0A3D", textAlign: "left",
                    }}
                  >
                    {faq.q}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, transition: "transform 0.2s", transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)" }}>
                      <path d="M8 3v10M3 8h10" stroke="#3D1F8F" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: "0 20px 18px" }}>
                      <p style={{ fontFamily: "var(--font-inter)", fontSize: 14, lineHeight: 1.7, color: "#4A4458", margin: 0 }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />

      {toast && <Toast msg={toast} onClose={() => setToast(null)} />}

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        ::-webkit-scrollbar { height: 4px; width: 4px; }
        ::-webkit-scrollbar-track { background: #F0EBFF; }
        ::-webkit-scrollbar-thumb { background: #C4B5F0; border-radius: 4px; }
      `}</style>
    </>
  );
}
