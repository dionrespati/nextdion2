"use client";
import React from "react";
import { useListProducts } from "@modules";
import { IProduct } from "@types";
import { ProductList } from "@page-components";
import { LoadingSpinner } from "@components";
import { useSearchParams } from "next/navigation";

export default function Products() {
  /* const searchParams = useSearchParams();
  const search = searchParams.get("search") ?? "";

  const { data, isLoading } = useListProducts(search);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const { products }: { products?: IProduct[] } = data ?? {};

  if (products?.length === 0) {
    return <div>Ngga ada</div>;
  }
  return <ProductList products={products} />; */
  return <div>Tolong</div>;
}
