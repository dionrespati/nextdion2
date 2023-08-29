"use client";

import React from "react";
import { useListProductByCategory } from "../../hooks/use-product";
import { IProduct } from "../../types";
import { ProductList } from "../../components";
import LoadingSpinner from "@/components/loading-spinner";

export default function ProductByCat({ params }: string | any) {
  const { categoryName } = params;

  const { data, isLoading } = useListProductByCategory(categoryName);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const { products }: { products?: IProduct[] } = data ?? {};

  return <ProductList products={products} />;
}
