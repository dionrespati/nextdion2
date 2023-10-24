"use client";
import React from "react";
import { useListProducts, ProductList, IProduct } from "@modules";
import { ErrorMessage, LoadingSpinner } from "@components";
import { useSearchParams } from "next/navigation";

export default function Products() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") ?? "";

  const { data, isLoading } = useListProducts(search);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const { products }: { products?: IProduct[] } = data ?? {};

  if (products?.length === 0) {
    return (
      <ErrorMessage
        pesan="Produk yang anda cari tidak ditemukan.."
        timeout={3000}
      />
    );
  }
  return (
    <>
      <ProductList products={products} />
    </>
  );
}
