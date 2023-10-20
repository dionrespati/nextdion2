import React from "react";
import { ProductCard, ProductCategory } from "@page-components";
import { IProduct } from "@types";

interface ProductListProps {
  products?: IProduct[];
}

export function ProductList({ products }: ProductListProps) {
  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-5 gap-4 p-2">
      <div className="grid lg:col-span-1">
        <ProductCategory />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-1 lg:col-span-4 align-top">
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
    </div>
  );
}
