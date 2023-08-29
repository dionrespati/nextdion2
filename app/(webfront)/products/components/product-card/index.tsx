import React from "react";
import Link from "next/link";
import Image from "next/image";
import LazyLoad from "react-lazyload";

interface IProductCardProps {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

function addProduct(param: number) {
  console.log({ param });
}

export default function ProductCard({
  id,
  title,
  price,
  thumbnail,
}: IProductCardProps) {
  return (
    <div className="rounded-lg shadow-lg p-4 border border-gray-300 hover:shadow-xl transition duration-300 ease-in-out">
      <Link href={`/products/${id}`}>
        <div className="w-full h-48 md:h-56 overflow-hidden">
          <LazyLoad>
            <Image
              src={thumbnail}
              alt={title}
              width={200}
              height={300}
              className="object-cover rounded-t-lg"
            />
          </LazyLoad>
        </div>
      </Link>
      <div className="flex flex-col justify-between mt-4">
        <div>
          <h2
            className="text-lg font-bold truncate"
            style={{ maxWidth: "150px" }}
          >
            {title}
          </h2>
          <p className="text-gray-600">${price.toLocaleString()}</p>
        </div>
        <div className="flex justify-between mt-4">
          <button
            className="bg-blue-500 text-white rounded-lg px-4 py-2 w-full hover:bg-green-700 transition duration-300 ease-in-out"
            onClick={() => addProduct(id)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
