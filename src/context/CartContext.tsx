"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;

  variant?: string;
  description?: string;

  meta?: {
    folio?: string;
    nombre?: string;
    apellidos?: string;
    email?: string;
    descripcion?: string;
  };
}

interface CartContextType {
  items: CartItem[];

  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;

  clearCart: () => void;

  total: number;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  /* =========================
     🛒 ADD
  ========================== */
  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);

      // 👉 Si ya existe, suma cantidad
      if (existing) {
        return prev.map((i) =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }

      // 👉 Si es nuevo
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  /* =========================
     ❌ REMOVE (solo 1 unidad)
  ========================== */
  const removeFromCart = (id: string) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === id);

      if (!existing) return prev;

      // 👉 Si hay más de 1, resta
      if (existing.quantity > 1) {
        return prev.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }

      // 👉 Si solo hay 1, elimina
      return prev.filter((item) => item.id !== id);
    });
  };

  /* =========================
     🔄 UPDATE QUANTITY
  ========================== */
  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((item) => item.id !== id));
      return;
    }

    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  /* =========================
     🧹 CLEAR
  ========================== */
  const clearCart = () => {
    setItems([]);
  };

  /* =========================
     💰 TOTAL
  ========================== */
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  /* =========================
     🔢 ITEM COUNT REAL
  ========================== */
  const itemCount = items.reduce(
    (count, item) => count + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        total,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

/* =========================
   🧠 HOOK
========================== */
export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}