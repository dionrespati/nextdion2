import React from "react";
import ProductCard from "../product-card";
import { IProduct } from "../../types";

interface ProductListProps {
  products?: IProduct[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="w-full md:w-full p-4">
          <div className="flex flex-wrap gap-5 justify-center items-center">
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
      </div>
    </div>
  );
}
