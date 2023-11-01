import { LoadingSpinner } from "@components";
import { useListProductCategory } from "@modules";
import Link from "next/link";
import React from "react";

export function ProductCategory({
  categoryName,
}: {
  categoryName: string | undefined;
}) {
  const { data, isLoading } = useListProductCategory();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <aside className="fixed lg:w-[260px] rounded-lg shadow-md border border-gray-200 h-96 overflow-y-auto">
      <div>
        <div className="sticky top-0 z-10 bg-white p-2 flex justify-center items-center border-b border-gray-300">
          <h2 className="text-lg font-semibold text-green-700 ">
            Kategori Produk
          </h2>
        </div>
        <ul className="relative top-1">
          {data?.map((category) => (
            <li key={category} className="p-1 ml-2 hover:bg-green-300">
              <Link
                href={`/products/category/${category}`}
                className={
                  category === categoryName ? `text-green-800` : `text-gray-700`
                }
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
