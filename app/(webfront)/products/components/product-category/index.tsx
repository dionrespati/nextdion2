import LoadingSpinner from "@/components/loading-spinner";
import { useListProductCategory } from "../../hooks/use-product";
import Link from "next/link";
import React from "react";

export default function ProductCategory() {
  const { data, isLoading } = useListProductCategory();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <aside className="w-full bg-gray-200 p-4">
      <h2 className="text-lg font-bold mb-4 text-black">Categories</h2>
      <ul>
        {data?.map((category) => (
          <li
            key={category}
            className="mb-2 border-b border-gray-400 last:border-b-0"
          >
            <Link
              href={`/products/category/${category}`}
              className="text-black hover:text-teal-400 transition duration-300"
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
