"use client";

import { InputSearch, LoadingSpinner } from "@components";
import React, { useState } from "react";

import { useRouter } from "next/navigation";

export function ProductSearching() {
  const { push } = useRouter();

  const [searchText, setSearchText] = useState("");

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

  return (
    //className="fixed top-[50px] flex w-full flex-col bg-slate-200 sm:flex-row items-center gap-2 p-2"
    <div className="flex w-full gap-3">
      <div className="flex justify-center flex-col lg:w-16 lg:flex-row items-center gap-2 hover:bg-slate-200 cursor-pointer">
        <span className="text-sm font-semibold">Kategori</span>
      </div>
      <div className="flex flex-col lg:w-[400px] lg:flex-row items-center gap-2">
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
