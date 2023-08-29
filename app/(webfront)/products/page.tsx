"use client";
import React from "react";
import { useListProducts } from "./hooks/use-product";
import { IProduct } from "./types";
import { ProductList } from "./components";
import LoadingSpinner from "@/components/loading-spinner";
import { useSearchParams } from "next/navigation";

export default function Products() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") ?? "";

  const { data, isLoading } = useListProducts(search);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const { products }: { products?: IProduct[] } = data ?? {};
  return <ProductList products={products} />;
}
