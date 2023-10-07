"use client";

import React, { useEffect, useState } from "react";
import { ProductQtyAdjust, useProductDetail } from "@modules";
import Image from "next/image";
export default function ProductDetailPage({ params }: any) {
  const { id } = params;

  const { data, isLoading } = useProductDetail(id);

  useEffect(() => {
    console.log("Terender...");
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const {
    title,
    description,
    price = 0,
    discountPercentage = 0,
    stock,
    brand,
    category,
    thumbnail,
  } = data || {};

  return (
    <div>
      <div className="container mx-auto p-5">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="md:w-2/5 sm:w-full">
            <Image
              src={thumbnail || "/next.svg"}
              alt={title || "Product"}
              width={500}
              height={500}
              className="rounded-t-lg"
              quality={50}
            />
          </div>
          <div className="md:w-2/5 mt-4 md:mt:0">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-lg text-gray-600 mb-4">{description}</p>
            <p className="text-lg text-gray-800 mb-4">Harga: ${price}</p>
            <p className="text-lg text-gray-800 mb-4">
              Diskon: {discountPercentage}%
            </p>
            {/* <p className="text-lg text-gray-800 mb-4">Rating: {rating}</p> */}
            <p className="text-lg text-gray-800 mb-4">Stok: {stock}</p>
            <p className="text-lg text-gray-800 mb-4">Brand: {brand}</p>
            <p className="text-lg text-gray-800 mb-4">Kategori: {category}</p>
          </div>
          <div className="md:w-1/5 mt-4 md:mt:0 rounded-lg shadow-lg p-4 border border-gray-300">
            <ProductQtyAdjust dataProduct={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
