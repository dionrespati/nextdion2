"use client";

import Button from "@/components/button";
import TextInput from "@/components/text-input";
import React, { useState } from "react";
import { useListProductCategory } from "../../hooks/use-product";

import { useRouter } from "next/navigation";

const SearchProduct = () => {
  const { push } = useRouter();

  const { data, isLoading } = useListProductCategory();

  const [category, setCategory] = useState("");
  const [searchText, setSearchText] = useState("");

  function pilihCategory(e: React.ChangeEvent<HTMLSelectElement>) {
    const { value } = e.target;

    e.preventDefault();
    push(`/products/category/${value}`);
    setCategory(value);
  }

  function handleSearchTextChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setSearchText(value);
  }

  function findProducts() {
    //const searchQuery = `/products?searchxa=${searchText}`;
    //console.log({ searchQuery });
    //push(searchQuery);
  }

  function handleSelect() {}

  return (
    <div className="flex md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center">
      <div className="flex w-2/5 flex-col sm:flex-row sm:w-full">
        {/* <AutoCompleteSelect options={data} onSelect={handleSelect} /> */}
        <select name="category" id="" onChange={pilihCategory}>
          <option value="">--Pilih Kategori--</option>
          {data?.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="flex w-2/5 flex-col sm:flex-row sm:w-full">
        <form onSubmit={findProducts}>
          <TextInput
            placeholder="Cari produk disini.."
            type="search"
            name="search"
            value={searchText}
            onChange={handleSearchTextChange}
          />
        </form>
      </div>
    </div>
  );
};

export default SearchProduct;
