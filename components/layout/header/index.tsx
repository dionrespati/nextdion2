"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MdMenu, MdClear } from "react-icons/md";
import clsx from "clsx";
import { Badge } from "@components";
import Image from "next/image";
import { ProductSearching } from "@modules";

const menu = [
  { url: "/products", linkName: "Produk", icon: "MdLogin" },
  { url: "/about", linkName: "Tentang Kami", icon: "MdInfoOutline" },
  { url: "/special", linkName: "Spesial Promo", icon: "MdOutlineDiscount" },
];

const Header = () => {
  const [toggle, setToggle] = useState(false);

  function toggleMenu() {
    setToggle(!toggle);
  }

  return (
    <header className="fixed top-0 w-full z-10 bg-slate-200 h-[50px]">
      <nav className="text-violet-900 text-lg flex justify-between gap-2 items-center p-2">
        <div className="flex justify-center items-center gap-2">
          <Image width={45} height={45} alt="prop" src="/assets/ic-logo.png" />
          <Link href="/products" className="text-2xl font-semibold">
            BakulMurah
          </Link>
        </div>
        <ul className="hidden lg:flex justify-between items-center gap-5 bg-blue-300">
          {menu.map((item) => (
            <li key={item.url}>
              <Link href={item.url} className="hover:text-red-500">
                {item.linkName}
              </Link>
            </li>
          ))}
          <li>Sign In</li>
          <Badge totalItems={2} />
        </ul>
        <button className="lg:hidden" onClick={toggleMenu}>
          <MdMenu width={20} height={20} />
        </button>
      </nav>
      <div
        className={clsx(
          toggle ? "hidden" : "block",
          "lg:hidden fixed top-0 left-0 w-[300px] h-screen bg-white z-20",
          "transition duration-250 ease-in-out"
        )}
      >
        <div className="absolute right-2 top-2">
          <button onClick={() => setToggle(!toggle)}>
            <MdClear />
          </button>
        </div>
        <div>
          <ul className="flex flex-col justify-start items-start gap-3">
            {menu.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.url}>
                  <Link href={item.url} onClick={() => setToggle(!toggle)}>
                    {item.linkName}
                  </Link>
                </li>
              );
            })}
            <li>Sign In</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
