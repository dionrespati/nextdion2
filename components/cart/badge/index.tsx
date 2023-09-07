import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

interface BadgeProps {
  totalItems: number;
}

export function Badge({ totalItems }: BadgeProps) {
  return (
    <div className="relative">
      <AiOutlineShoppingCart className="text-2xl" />
      {totalItems > 0 && (
        <div className="absolute -top-1 -right-2 bg-red-500 text-white w-4 h-4 rounded-full flex items-center justify-center text-xs">
          {totalItems}
        </div>
      )}
    </div>
  );
}
