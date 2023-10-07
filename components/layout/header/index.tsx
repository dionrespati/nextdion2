"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { Badge, Notif } from "@components";
import Image from "next/image";
import { ProductSearching } from "@modules";
import { useListProductCategory } from "@modules";

const Header = () => {
  const { data } = useListProductCategory();
  const categories = data ?? [];

  return (
    <div className="relative">
      <header className="fixed bg-slate-100 top-0 w-full z-10 h-[50px] flex justify-between gap-2 items-center">
        <div className="flex justify-center items-center gap-1 ml-3">
          <Image width={45} height={45} alt="prop" src="/assets/ic-logo.png" />
          <Link
            href="/products"
            className="hidden text-2xl f  ont-semibold lg:block"
          >
            Bakul<span className="text-green-800">Murah</span>
          </Link>
        </div>
        <div className="flex gap-2 items-center">
          <ProductSearching />
          <Badge />
          <Notif totalItems={0} />
          {/* <button className="lg:hidden" onClick={toggleMenu}>
            <MdMenu width={20} height={20} />
          </button> */}
        </div>
      </header>
    </div>
  );
};

export default Header;
