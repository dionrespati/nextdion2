import { LoadingSpinner } from "@components";
import { useListProductCategory } from "@modules";
import Link from "next/link";
import React from "react";

export function ProductCategory() {
  const { data, isLoading } = useListProductCategory();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <aside className="w-full bg-gray-200 p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-black">Kategori Produk</h2>
      <ul>
        {data?.map((category) => (
          <li
            key={category}
            className="mb-2 border-b border-gray-400 last:border-b-0 transition duration-300 hover:bg-gray-300 hover:shadow-inner"
          >
            <Link
              href={`/products/category/${category}`}
              className="text-black hover:text-teal-400 transition duration-300 block py-2 px-4"
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
