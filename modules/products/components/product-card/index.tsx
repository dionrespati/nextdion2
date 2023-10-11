import React from "react";
import Link from "next/link";
import Image from "next/image";

interface IProductCardProps {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

function addProduct(param: number) {
  console.log({ param });
}

export function ProductCard({
  id,
  title,
  price,
  thumbnail,
}: IProductCardProps) {
  const priceIndonesia = price * 14000;
  return (
    <div className="rounded-lg shadow-lg p-4 border border-gray-300 hover:shadow-xl transition duration-300 ease-in-out">
      <Link href={`/products/${id}`}>
        <div className="w-full h-48 md:h-56 overflow-hidden">
          <Image
            src={thumbnail}
            alt={title}
            width={200}
            height={300}
            className="object-cover rounded-t-lg"
          />
        </div>
      </Link>
      <div className="mt-4">
        <div>
          <h2
            className="text-lg font-bold truncate"
            style={{ maxWidth: "150px" }}
          >
            {title}
          </h2>
          <p className="text-gray-600">Rp {priceIndonesia.toLocaleString()}</p>
        </div>
        <div className="flex justify-between mt-4">
          <button
            className="bg-blue-500 text-white rounded-lg px-4 py-2 w-full hover:bg-green-700 transition duration-300 ease-in-out"
            onClick={() => addProduct(id)}
          >
            Tambah ke Keranjang
          </button>
        </div>
      </div>
    </div>
  );
}
