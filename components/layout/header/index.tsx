"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { Badge, Notif, UserIcon } from "@components";
import Image from "next/image";
import { ProductSearching } from "@modules";
import { useListProductCategory } from "@modules";

const Header = () => {
  const { data } = useListProductCategory();
  const categories = data ?? [];

  return (
    <header className="relative">
      <section className="fixed bg-slate-100 top-0 w-full z-10 h-[50px] flex justify-between gap-2 items-center">
        <div className="flex justify-center items-center gap-2 ml-3 w-full">
          <Image width={45} height={45} alt="prop" src="/assets/ic-logo.png" />
          <Link
            href="/products"
            className="hidden text-2xl font-semibold lg:block"
          >
            Bakul<span className="text-green-800">Murah</span>
          </Link>
          <ProductSearching />
        </div>
        <div className="flex gap-2 items-center">
          <Badge />
          <Notif totalItems={0} />
          <UserIcon />
          {/* <button className="lg:hidden" onClick={toggleMenu}>
            <MdMenu width={20} height={20} />
          </button> */}
        </div>
      </section>
    </header>
  );
};

export default Header;
