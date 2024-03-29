"use client";

import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCartStore } from "@modules";
import Link from "next/link";

export function Badge() {
  const { cart } = useCartStore();
  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <Link href="/cart" className="relative mr-4 text-gray-600">
      <AiOutlineShoppingCart className="text-2xl" />
      {totalItems > 0 ? (
        <div
          className={`absolute -top-1 -right-2 bg-red-500 text-white ${
            totalItems >= 100 ? "w-8 h-4 rounded-full" : "w-4 h-4 rounded-full"
          } flex items-center justify-center text-xs`}
        >
          {totalItems >= 100 ? "99+" : totalItems}
        </div>
      ) : null}
    </Link>
  );
}
