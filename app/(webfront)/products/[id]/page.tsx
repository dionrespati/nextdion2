"use client";

import React from "react";
import { useProductDetail } from "../hooks/use-product";
import Image from "next/image";
import SearchProduct from "../components/product-searching";

export default function ProductDetailPage({ params }: any) {
  const { id } = params;

  const { data, isLoading } = useProductDetail(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const {
    title,
    description,
    price,
    discountPercentage,
    stock,
    brand,
    category,
    thumbnail,
  } = data || {};

  return (
    <div>
      <div className="container mx-auto p-5">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="md:w-1/2 sm:w-full">
            <Image
              src={thumbnail || "/next.svg"}
              alt={title || "Product"}
              width={500}
              height={500}
              className="rounded-t-lg"
              quality={50}
            />
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-lg text-gray-600 mb-4">{description}</p>
            <p className="text-lg text-gray-800 mb-4">Price: ${price}</p>
            <p className="text-lg text-gray-800 mb-4">
              Discount: {discountPercentage}%
            </p>
            {/* <p className="text-lg text-gray-800 mb-4">Rating: {rating}</p> */}
            <p className="text-lg text-gray-800 mb-4">Stock: {stock}</p>
            <p className="text-lg text-gray-800 mb-4">Brand: {brand}</p>
            <p className="text-lg text-gray-800 mb-4">Category: {category}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
