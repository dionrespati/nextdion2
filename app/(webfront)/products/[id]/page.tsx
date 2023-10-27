"use client";

import React, { Fragment } from "react";
import { ProductQtyAdjust, useProductDetail, dollar_ind_curr } from "@modules";
import Image from "next/image";
import { ErrorMessage, LoadingSpinner } from "@components";

const tabInfoList = [
  {
    id: 0,
    infoName: "Detail",
  },
  {
    id: 1,
    infoName: "Info Penting",
  },
];

export default function ProductDetailPage({ params }: any) {
  const { id } = params;

  const { data, isFetched } = useProductDetail(id);

  if (!isFetched) {
    return <LoadingSpinner />;
  }

  const {
    title,
    description,
    price = 0,
    discountPercentage = 0,
    stock,
    brand,
    category,
    thumbnail,
  } = data || {};

  const priceRupiah = Math.ceil(price * dollar_ind_curr);
  const hargaDiskon = priceRupiah - priceRupiah * (discountPercentage / 100);
  const prdInfoCss = `text-lg text-gray-800 mb-2`;
  const sideInfo = `p-2 text-gray-600 hover:text-green-700 hover:font-semibold cursor-pointer`;

  return (
    <section className="container mx-auto p-8 flex flex-col md:flex-row gap-3">
      <section className="md:w-1/3 sm:w-full rounded border border-gray-300">
        <Image
          src={thumbnail || "/next.svg"}
          alt={title || "Product"}
          width={400}
          height={400}
          className="rounded-t-lg"
          quality={50}
        />
      </section>
      <section className="md:w-2/4 mt-4 md:mt:0 p-2">
        <h2 className="text-2xl font-bold mb-2">
          {title?.toLocaleUpperCase()}
        </h2>
        <section className="text-3xl font-bold mb-2">
          <div>
            <span>Rp{Math.ceil(hargaDiskon).toLocaleString()}</span>
          </div>
          {discountPercentage >= 0 ? (
            <>
              <div>
                <span className="text-sm font-semibold rounded-md border border-gray-300 bg-red-200 text-red-500 p-1 mr-2">
                  {Math.ceil(discountPercentage)}%
                </span>
                <s className="text-slate-400 text-base font-normal">
                  Rp{priceRupiah.toLocaleString()}
                </s>
              </div>
            </>
          ) : null}
        </section>
        <hr />
        <section className="flex p-2 gap-2">
          {tabInfoList?.map((info) => {
            const { id, infoName } = info;
            return (
              <Fragment key={id}>
                <article className={sideInfo}>{infoName}</article>
              </Fragment>
            );
          })}
        </section>
        <hr />
        <section className="mt-4 p-2">
          <p>Kondisi:Baru</p>
          <p>Minimal Pemesanan:1 Buah</p>
          <p className="text-gray-800 mb-2 mt-2">{description}</p>
        </section>
      </section>
      <div className="md:w-1/5 rounded-lg shadow-lg p-4 border border-gray-300">
        <ProductQtyAdjust dataProduct={data} />
      </div>
    </section>
  );
}
