"use client";

import { useQuery } from "@tanstack/react-query";
import {
  getListProducts,
  getDetailProductById,
  getListAllProductCategories,
  getListProductsByCategory,
} from "@modules";

export function useListProducts(searchQuery: string) {
  return useQuery(
    ["prdsearch", searchQuery],
    () => getListProducts(searchQuery),
    {
      staleTime: 20000,
    }
  );
}

export function useProductDetail(id: number) {
  return useQuery(["prddetail", id], () => getDetailProductById(id));
}

export function useListProductCategory() {
  return useQuery(["prdCat"], () => getListAllProductCategories(), {
    staleTime: 20000,
  });
}

export function useListProductByCategory(categoryName: string) {
  return useQuery(["listPrdByCat", categoryName], () =>
    getListProductsByCategory(categoryName)
  );
}
