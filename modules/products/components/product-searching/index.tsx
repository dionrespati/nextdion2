"use client";

import { InputSearch, LoadingSpinner } from "@components";
import React, { useState } from "react";
import { useListProductCategory } from "@modules";

import { useRouter } from "next/navigation";

export function ProductSearching() {
  const { push } = useRouter();

  const { data, isLoading, isSuccess } = useListProductCategory();

  const [category, setCategory] = useState("");
  const [searchText, setSearchText] = useState("");

  function pilihCategory(e: React.ChangeEvent<HTMLSelectElement>) {
    const { value } = e.target;
    setCategory(value);
    e.preventDefault();

    if (value !== "") {
      push(`/products/category/${value}`);
    } else {
      push(`/products`);
    }
  }

  function handleSearchTextChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setSearchText(value);
  }

  function findProducts() {
    const searchQuery = `/products?search=${searchText}`;
    //console.log({ searchQuery });
    push(searchQuery);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent the form submission
      findProducts();
    }
  }

  function handleSelect() {}

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const categories = data ?? [];

  return (
    <div className="fixed top-[50px] flex w-full flex-col bg-slate-200 sm:flex-row items-center gap-2 p-2">
      <div className="flex w-full flex-col md:w-1/5 md:flex-row items-center gap-2">
        {/* <AutoCompleteSelect options={categories} onSelect={handleSelect} /> */}
        <select
          name="category"
          id=""
          onChange={pilihCategory}
          className="w-full p-2 rounded-lg text-lg font-normal"
        >
          <option value="">--Pilih Kategori--</option>
          {data?.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="flex w-full flex-col md:w-2/5 md:flex-row items-center gap-2">
        <InputSearch
          placeholder="Cari produk disini.."
          name="searchPrd"
          value={searchText}
          onChange={handleSearchTextChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
}
