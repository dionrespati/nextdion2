"use client";

import React from "react";
import { useListProductByCategory, ProductList, IProduct } from "@modules";
import { ErrorMessage, LoadingSpinner } from "@components";

export default function ProductByCat({ params }: string | any) {
  const { categoryName } = params;

  const { data, isFetched } = useListProductByCategory(categoryName);

  if (!isFetched) {
    return <LoadingSpinner />;
  }

  const { products }: { products?: IProduct[] } = data ?? {};

  if (products?.length === 0) {
    return <ErrorMessage message="Produk yang dicari tidak ada.." />;
  }

  return (
    <>
      <ProductList products={products} />
    </>
  );
}
