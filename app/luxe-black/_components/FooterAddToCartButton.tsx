"use client";

import { useCart } from "../../context/CartContext";

const PRODUCT_ID = "luxe-black-etb";
const PRODUCT_NAME = "Luxe Black Electric Toothbrush";
const PRODUCT_PRICE = 3499;

export default function FooterAddToCartButton() {
  const { addItem } = useCart();

  return (
    <button
      onClick={() => addItem({ id: PRODUCT_ID, name: PRODUCT_NAME, variant: "Standard", price: PRODUCT_PRICE })}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        background: "#FFFFFF",
        color: "#1A0A3D",
        padding: "16px 38px",
        borderRadius: 50,
        border: "none",
        fontFamily: "var(--font-inter)",
        fontSize: 16,
        fontWeight: 700,
        cursor: "pointer",
        boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
      }}
    >
      Buy Now
    </button>
  );
}
