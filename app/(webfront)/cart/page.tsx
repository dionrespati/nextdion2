"use client";
import React, { useEffect } from "react";
import { VscEdit } from "react-icons/vsc";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { useCartStore } from "@modules";
import Link from "next/link";
import { Fragment } from "react";
import { Button } from "@components";

export default function CartList() {
  const { cart, addToCart, selectProductToChecked } = useCartStore();

  useEffect(() => {
    console.log({ cart });
  }, [cart]);

  if (cart.length === 0) {
    return <div>Keranjang anda masih kosong</div>;
  }

  function addToCartPrd(
    id: number,
    title: string,
    qty: number,
    price: number,
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
      discountPercentage,
      note,
      stock,
      checked: false,
    };
    addToCart(objPrd);
  }

  function productCheckedList(id: number, checked: boolean) {
    selectProductToChecked(id, checked);
  }

  let totalQtyChecked = 0;
  let totalPriceChecked = 0;
  cart.forEach((item) => {
    const { checked, price, discountPercentage, qty } = item;
    if (checked) {
      totalQtyChecked += qty;
      const priceInd = price * 14000;
      const totalDiskon = Math.ceil(priceInd * (discountPercentage / 100));
      totalPriceChecked += qty * (priceInd - totalDiskon);
    }
  });

  return (
    <div className="p-5">
      <h2 className="text-green-700 text-xl mb-5">Keranjang Belanja Anda</h2>
      <div className="relative flex p-3 gap-10">
        <div className="mt-2 ml-4 lg:w-2/3">
          {cart.map((item) => {
            const {
              id,
              title,
              qty,
              price,
              discountPercentage,
              note,
              stock,
              checked,
            } = item;
            const priceIndonesia = price * 14000;
            // Menghitung jumlah diskon dalam jumlah persen
            const diskonDesimal = discountPercentage / 100; // Mengubah persentase ke desimal
            const totalDiskon = Math.ceil(priceIndonesia * diskonDesimal);
            const finalPrice = priceIndonesia - totalDiskon;
            return (
              <Fragment key={item.id}>
                <div className="mb-4 p-2">
                  <input
                    checked={checked}
                    type="checkbox"
                    onChange={() => productCheckedList(id, !checked)}
                  />
                  <h1>{title}</h1>
                  <div className="mb-2">Rp {finalPrice.toLocaleString()}</div>
                  <div className="flex p-2">
                    <div className="lg:w-2/5">
                      {note === "" && (
                        <div className="flex gap-1 justify-start mb-4">
                          <button className="flex items-center gap-3">
                            <VscEdit className="text-green-700" />
                            <span className="text-green-700 font-bold">
                              Tulis Catatan
                            </span>
                          </button>
                        </div>
                      )}
                      {note !== "" && (
                        <div className="flex gap-1 justify-start mb-4">
                          <button className="flex items-center gap-3">
                            Note : {note}
                            <span className="text-green-700 font-bold">
                              Ubah
                            </span>
                          </button>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-center items-center gap-5 lg:w-3/5">
                      <Link href={`wishlist/${id}`}>Masukkan ke Wishlist</Link>
                      <span>|</span>
                      <BsTrash size={24} className="text-red-700" />
                      <button
                        onClick={() => {
                          addToCartPrd(
                            id,
                            title,
                            -1,
                            price,
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
                <hr className="my-4 border-t-2 border-gray-300" />
              </Fragment>
            );
          })}
        </div>
        <div className="fixed mt-2 p-2 top-50 right-5 lg:ml-auto lg:w-[400px] rounded-lg shadow-lg border border-gray-300">
          <h2 className="text-left font-bold">Ringkasan Belanja</h2>
          <hr className="my-4 border-t-2 border-gray-300" />
          <div className="mt-2">
            Total Produk dipilih ({totalQtyChecked}) Barang
          </div>
          <div className="mt-2">
            Total Harga Rp {totalPriceChecked.toLocaleString()}
          </div>
          <div className="mt-2 w-full">
            <Button
              color="success"
              type="button"
              disabled={totalQtyChecked < 1}
            >
              Beli
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
