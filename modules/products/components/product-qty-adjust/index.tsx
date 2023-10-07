"use client";

import React, { useEffect, useState } from "react";
import { VscAdd, VscRemove, VscEdit } from "react-icons/vsc";
import { LoadingSpinner, TextInput } from "@components";
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

  const { id, title, price, discountPercentage, stock } = dataProduct;

  const totalPrice = curQty * price;
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
    discountPercentage: number,
    note: string
  ) {
    const objPrd = {
      id,
      title,
      qty,
      price,
      discountPercentage,
      note,
    };
    addToCart(objPrd);
  }

  return (
    <>
      <h2 className="mb-4">Atur Jumlah dan Catatan</h2>
      <div className="flex items-center gap-2 mb-2">
        <div className="rounded-lg shadow-lg w-28 border border-gray-300 flex flex-col items-center justify-center">
          <div className="flex gap-2 p-2">
            <button
              disabled={curQty === 1}
              onClick={() => setCurQty((prev) => prev - 1)}
            >
              <VscRemove color={curQty === 1 ? "grey" : "red"} />
            </button>
            <input
              type="text"
              name="curQty"
              value={curQty}
              className="w-9 text-center"
              onChange={(e) => setCurQty(parseInt(e.target.value, 10))}
            />
            <button onClick={() => setCurQty((prev) => prev + 1)}>
              <VscAdd color="green" />
            </button>
          </div>
        </div>
        <div>Stok:{stock}</div>
      </div>
      {!isNoteShow && (
        <div className="flex gap-1 justify-start mb-4">
          <button
            className="flex items-center gap-3"
            onClick={() => setIsNoteShow(true)}
          >
            <VscEdit />
            <span>Tambah Catatan</span>
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
          <button onClick={cancelNote}>Batalkan Catatan</button>
        </div>
      )}
      <div className="flex justify-between">
        <span>Sub Total</span> <span>$ {totalPrice.toLocaleString()}</span>
      </div>
      <div className="flex justify-between">
        <span>Diskon</span> <span>$ {totalDiskon.toLocaleString()}</span>
      </div>
      <div className="flex justify-between">
        <span>Harga</span> <span>$ {finalPrice.toLocaleString()}</span>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={() =>
            addToCartPrd(id, title, curQty, price, discountPercentage, note)
          }
          className="bg-blue-500 text-white rounded-lg px-4 py-2 w-full hover:bg-green-700 transition duration-300 ease-in-out"
        >
          Tambah ke Keranjang
        </button>
      </div>
    </>
  );
}
