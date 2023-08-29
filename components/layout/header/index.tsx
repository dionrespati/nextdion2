import React from "react";
import Link from "next/link";

const menu = [
  { url: "/products", linkName: "Produk" },
  { url: "/about", linkName: "Tentang Kami" },
  { url: "/signin", linkName: "Sign In" },
];

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="hidden sm:block">
          <Link href="/products" className="text-2xl font-semibold">
            BakulMurah
          </Link>
        </div>
        <ul className="flex space-x-4 sm:flex-row">
          {menu.map((item) => (
            <li key={item.url}>
              <Link href={item.url} className="hover:text-gray-300">
                {item.linkName}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
