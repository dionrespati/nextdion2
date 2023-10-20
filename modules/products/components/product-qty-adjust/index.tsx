"use client";

import React, { useEffect, useState } from "react";
import { VscAdd, VscRemove, VscEdit } from "react-icons/vsc";
import { Button, LoadingSpinner, TextInput } from "@components";
import { IProduct } from "@types";
import { useCartStore } from "@modules";

interface ProductQtyAdjustProps {
  dataProduct: IProduct | undefined; // Tentukan tipe data untuk properti dataProduct
}

export function ProductQtyAdjust({ dataProduct }: ProductQtyAdjustProps) {
  const [curQty, setCurQty] = useState(1);
  const [isNoteShow, setIsNoteShow] = useState(false);
  const [note, setNote] = useState("");

  const { cart, addToCart } = useCartStore();

  useEffect(() => {
    console.log("ProductQtyAdjustProps rendered..");
  });

  useEffect(() => {
    console.log({ cart });
  }, [cart]);

  if (!dataProduct) {
    return <LoadingSpinner />;
  }

  const { id, title, price, thumbnail, discountPercentage, stock } =
    dataProduct;

  const totalPrice = curQty * price * 14000;
  // Menghitung jumlah diskon dalam jumlah persen
  const diskonDesimal = discountPercentage / 100; // Mengubah persentase ke desimal
  const totalDiskon = Math.ceil(totalPrice * diskonDesimal);
  const finalPrice = totalPrice - totalDiskon;

  function cancelNote() {
    setNote("");
    setIsNoteShow(false);
  }

  function addToCartPrd(
    id: number,
    title: string,
    qty: number,
    price: number,
    thumbnail: string,
    discountPercentage: number,
    note: string,
    stock: number
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

  return (
    <>
      <h2 className="mb-4 font-bold">Atur Jumlah dan Catatan</h2>
      <div className="flex items-center gap-2 mb-6">
        <div className="rounded-lg shadow-lg w-28 border border-gray-300 flex flex-col items-center justify-center">
          <div className="flex gap-2 p-1">
            <button
              disabled={curQty === 1}
              onClick={() => setCurQty((prev) => prev - 1)}
            >
              <VscRemove color={curQty === 1 ? "grey" : "red"} />
            </button>
            <input
              type="text"
              name="curQty"
              value={curQty > stock ? stock.toString() : curQty.toString()}
              className="w-9 text-center"
              onChange={(e) => setCurQty(parseInt(e.target.value, 10))}
            />
            <button
              onClick={() => setCurQty((prev) => prev + 1)}
              disabled={curQty >= stock}
            >
              <VscAdd
                className="font-bold"
                color={curQty >= stock ? "grey" : "green"}
              />
            </button>
          </div>
        </div>
        <div>Stok : {stock}</div>
      </div>
      {curQty > stock && (
        <h3 className="text-red-700">Max Pembelian : {stock}</h3>
      )}
      {!isNoteShow && (
        <div className="flex gap-1 justify-start mb-4">
          <button
            className="flex items-center gap-3"
            onClick={() => setIsNoteShow(true)}
          >
            <VscEdit className="text-green-800" />
            <span className="text-green-800 font-bold text-sm">
              Tambah Catatan
            </span>
          </button>
        </div>
      )}
      {isNoteShow && (
        <div className="flex flex-col gap-1 justify-start mb-4">
          <TextInput
            name="note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <span onClick={cancelNote}>
            <h4 className="text-red-600 font-bold text-sm">Batalkan Catatan</h4>
          </span>
        </div>
      )}
      <div className="flex justify-between mb-1">
        <span className="text-sm">Sub Total</span>{" "}
        <span className="text-sm">Rp {totalPrice.toLocaleString()}</span>
      </div>
      <div className="flex justify-between mb-1">
        <span className="text-sm">Diskon</span>{" "}
        <span className="text-sm">Rp {totalDiskon.toLocaleString()}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-sm">Harga</span>{" "}
        <span className="text-sm">Rp {finalPrice.toLocaleString()}</span>
      </div>
      <div className="flex justify-between mt-6">
        <button
          onClick={() =>
            addToCartPrd(
              id,
              title,
              curQty,
              price,
              thumbnail,
              discountPercentage,
              note,
              stock
            )
          }
          className="bg-green-700 text-white rounded-lg px-4 py-2 w-full hover:bg-green-700 transition duration-300 ease-in-out"
        >
          + Keranjang
        </button>
      </div>
    </>
  );
}
