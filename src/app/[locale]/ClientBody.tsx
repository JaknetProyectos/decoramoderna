"use client";

import { CartProvider } from "@/context/CartContext";

export function ClientBody({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>{children}</CartProvider>
  );
}
