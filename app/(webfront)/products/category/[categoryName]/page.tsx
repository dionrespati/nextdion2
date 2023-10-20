"use client";

import React from "react";
import { useListProductByCategory } from "@modules";
import { IProduct } from "@types";
import { ProductList } from "@page-components";
import { LoadingSpinner } from "@components";

export default function ProductByCat({ params }: string | any) {
  const { categoryName } = params;

  const { data, isLoading } = useListProductByCategory(categoryName);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const { products }: { products?: IProduct[] } = data ?? {};

  if (products?.length === 0) {
    return <div>Ngga ada</div>;
  }

  return (
    <>
      <ProductList products={products} />
    </>
  );
}
