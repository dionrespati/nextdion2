"use client";
import React, { useState } from "react";
import {
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
  AiOutlineEdit,
  AiOutlineDelete,
} from "react-icons/ai";
import { useCartStore, dollar_ind_curr } from "@modules";
import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import clsx from "clsx";
import { ErrorMessage } from "@components";

export default function CartList() {
  const { cart, addToCart, selectProductToChecked, setCheckedAllProduct } =
    useCartStore();
  const [selectAllCart, setSelectAllCart] = useState(false);

  if (cart.length === 0) {
    return <ErrorMessage message="Keranjang Belanja anda masih kosong.." />;
  }

  function addToCartPrd(
    id: number,
    title: string,
    qty: number,
    price: number,
    thumbnail: string,
    discountPercentage: number,
    note: string,
    stock: number,
    checked: boolean
  ) {
    if (qty > stock) {
      return alert(`Jumlah maksimum pembelian adalah ${stock}`);
    }
    const objPrd = {
      id,
      title,
      qty,
      price,
      thumbnail,
      discountPercentage,
      note,
      stock,
      checked: false,
    };
    addToCart(objPrd);
  }

  let totalQtyChecked = 0;
  let totalPriceChecked = 0;
  cart.forEach((item) => {
    const { checked, price, discountPercentage, qty } = item;
    if (checked) {
      totalQtyChecked += qty;
      const priceInd = price * dollar_ind_curr;
      const totalDiskon = Math.ceil(priceInd * (discountPercentage / 100));
      totalPriceChecked += qty * (priceInd - totalDiskon);
    }
  });

  function checkUncheckAllCart(nilaiPilihan: boolean) {
    setCheckedAllProduct(nilaiPilihan);
    setSelectAllCart(nilaiPilihan);
  }

  return (
    <div className="relative p-5">
      <h2 className="fixed text-green-700 text-xl font-semibold mb-5 bg-white top-15">
        Keranjang Belanja Anda
      </h2>
      <div className="relative flex p-3 gap-10 mt-10">
        <div className="mt-2 ml-4 lg:w-2/3">
          <div className="fixed p-2 flex items-center gap-5 bg-white lg:w-[900px]">
            <input
              checked={selectAllCart}
              type="checkbox"
              onChange={() => checkUncheckAllCart(!selectAllCart)}
              className="w-6 h-6 rounded text-lg"
            />
            <h3 className="font-semibold text-lg">Pilih Semua Produk</h3>
          </div>
          <div className="mt-16">
            {cart.map((item) => {
              const {
                id,
                title,
                qty,
                price,
                thumbnail,
                discountPercentage,
                note,
                stock,
                checked,
              } = item;

              //console.log(`item ${title} di render..`);

              const priceIndonesia = price * 14000;
              // Menghitung jumlah diskon dalam jumlah persen
              const diskonDesimal = discountPercentage / 100; // Mengubah persentase ke desimal
              const totalDiskon = Math.ceil(priceIndonesia * diskonDesimal);
              const finalPrice = priceIndonesia - totalDiskon;
              return (
                <Fragment key={item.id}>
                  <section
                    className={clsx("flex gap-6 mb-4 p-3 rounded-lg border", {
                      "bg-green-200 border-green-600": item.checked,
                      "bg-white border-slate-300": !item.checked,
                    })}
                  >
                    <div className="flex items-center">
                      <input
                        checked={checked}
                        type="checkbox"
                        onChange={() => selectProductToChecked(id, !checked)}
                        className="w-6 h-6 rounded text-lg"
                      />
                    </div>
                    <div className="w-full">
                      <div className="flex items-center gap-2">
                        <div>
                          <Image
                            src={thumbnail || "/next.svg"}
                            alt={title || "Product"}
                            width={60}
                            height={60}
                            className="rounded-t-lg"
                            quality={50}
                          />
                        </div>
                        <div>
                          <h1 className="text-lg mb-1">{title}</h1>
                          <h3 className="mb-2 text-sm">
                            Rp {finalPrice.toLocaleString()}
                          </h3>
                        </div>
                      </div>
                      <div className="flex p-2">
                        <div className="lg:w-2/5">
                          {note === "" ? (
                            <div className="flex gap-1 justify-start mb-4">
                              <button className="flex items-center gap-2">
                                <AiOutlineEdit className="text-green-700" />
                                <span className="text-green-700 font-bold">
                                  Tulis Catatan
                                </span>
                              </button>
                            </div>
                          ) : null}
                          {note !== "" ? (
                            <div className="flex gap-1 justify-start mb-4">
                              <button className="flex items-center gap-2">
                                Note : {note}
                                <span className="text-green-700 font-bold">
                                  Ubah
                                </span>
                              </button>
                            </div>
                          ) : null}
                        </div>
                        <div className="flex justify-center items-center gap-5 lg:w-3/5">
                          <Link className="text-sm" href={`wishlist/${id}`}>
                            Masukkan ke Wishlist
                          </Link>
                          <span>|</span>
                          <AiOutlineDelete size={24} className="text-red-700" />
                          <button
                            onClick={() => {
                              addToCartPrd(
                                id,
                                title,
                                -1,
                                price,
                                thumbnail,
                                discountPercentage,
                                note || "",
                                stock || 0,
                                false
                              );
                            }}
                            disabled={qty === 1}
                          >
                            <AiOutlineMinusCircle
                              size={26}
                              className={
                                qty === 1 ? `text-slate-400` : `text-red-700`
                              }
                            />
                          </button>
                          {qty}
                          <button
                            onClick={() =>
                              addToCartPrd(
                                id,
                                title,
                                1,
                                price,
                                thumbnail,
                                discountPercentage,
                                note || "",
                                stock || 0,
                                false
                              )
                            }
                          >
                            <AiOutlinePlusCircle
                              size={26}
                              className="text-green-700"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>
                </Fragment>
              );
            })}
          </div>
        </div>
        <div className="fixed mt-2 p-5 top-50 right-5 lg:ml-auto lg:w-[400px] rounded-lg shadow-lg border border-gray-300">
          <h2 className="text-left font-bold">Ringkasan Belanja</h2>
          <hr className="my-4 border-t-2 border-gray-300" />
          <div className="mt-2">
            Total Produk dipilih ({totalQtyChecked}) Barang
          </div>
          <div className="mt-2">
            Total Harga Rp {totalPriceChecked.toLocaleString()}
          </div>
          <hr className="my-4 border-t-2 border-gray-300" />
          <div className="mt-4 w-full">
            <button
              className={
                totalQtyChecked === 0
                  ? `bg-slate-300 text-black rounded-lg w-full p-2 font-semibold`
                  : `bg-green-700 text-white text-md rounded-lg w-full p-2 font-semibold`
              }
              disabled={totalQtyChecked === 0}
            >
              Beli ({totalQtyChecked})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
