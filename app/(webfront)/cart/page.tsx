"use client";
import React from "react";
import { useCartStore } from "@modules";

export default function CartList() {
  const { cart } = useCartStore();

  if (cart.length === 0) {
    return <div>Keranjang anda masih kosong</div>;
  }

  return (
    <div>
      <h2>Keranjang Belanja Anda</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.title} - Jumlah: {item.qty}
          </li>
        ))}
      </ul>
    </div>
  );
}
