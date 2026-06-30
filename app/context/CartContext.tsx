"use client";
import { createContext, useContext, useState, useCallback, ReactNode } from "react";

export interface CartItem {
  id: string;
  name: string;
  variant: string;
  price: number;
  qty: number;
}

interface CartCtx {
  items: CartItem[];
  count: number;
  addItem: (item: Omit<CartItem, "qty">) => void;
  removeItem: (id: string, variant: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartCtx>({
  items: [], count: 0,
  addItem: () => {}, removeItem: () => {}, clearCart: () => {},
});

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = useCallback((item: Omit<CartItem, "qty">) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === item.id && i.variant === item.variant);
      if (existing) return prev.map(i => i.id === item.id && i.variant === item.variant ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...item, qty: 1 }];
    });
  }, []);

  const removeItem = useCallback((id: string, variant: string) => {
    setItems(prev => prev.filter(i => !(i.id === id && i.variant === variant)));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);
  const count = items.reduce((s, i) => s + i.qty, 0);

  return <CartContext.Provider value={{ items, count, addItem, removeItem, clearCart }}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
