import React from "react";
import { ProductCard } from "@page-components";
import { IProduct } from "@types";

interface ProductListProps {
  products?: IProduct[];
}

export function ProductList({ products }: ProductListProps) {
  return (
    <div className="grid grid-cols-4 gap-6 justify-center p-3 w-full">
      {products?.map((prd) => (
        <ProductCard
          key={prd.id}
          id={prd.id}
          title={prd.title}
          price={prd.price}
          thumbnail={prd.thumbnail}
        />
      ))}
    </div>
  );
}
