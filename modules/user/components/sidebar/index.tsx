import Link from "next/link";
import React from "react";
import { CiUser, CiHeart, CiShop } from "react-icons/ci";

const listMenu = [
  {
    link: "/user/settings",
    name: "Informasi Personal",
    icon: <CiUser size={24} />,
  },
  {
    link: "/user/transaksi",
    name: "Transaksi Saya",
    icon: <CiShop size={24} />,
  },
  {
    link: "/user/wishlist",
    name: "Wishlist",
    icon: <CiHeart size={24} />,
  },
];

export function SideBarUser() {
  return (
    <div className="w-1/4 bg-gray-100 p-2 rounded-lg border border-solid border-gray-300">
      <ul>
        {listMenu.map((menuItem, index) => (
          <Link
            key={index}
            href={menuItem.link}
            className="flex items-center gap-2 p-2 w-full hover:bg-blue-300 hover:rounded-sm hover:border hover:border-solid hover:border-blue-400"
          >
            <div className="text-teal-500 text-xl">{menuItem.icon}</div>
            <span className="text-black font-semibold">{menuItem.name}</span>
          </Link>
        ))}
      </ul>
    </div>
  );
}
