import Link from "next/link";
import React, { Fragment } from "react";
import { listMenu } from "./constant";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineLogout } from "react-icons/ai";

export function SideBarUser() {
  return (
    <aside className="relative p-0 rounded-md border border-solid border-gray-300 w-56">
      <div className="flex item-center gap-2 p-2 bg-green-600 text-white font-semibold">
        <RxHamburgerMenu size={24} />
        <h3>Menu Utama</h3>
      </div>
      <ul>
        {listMenu.map((menuItem, index) => (
          <Fragment key={index}>
            <Link
              href={menuItem.link}
              className="flex border-b border-b-slate-300 items-center gap-2 p-2 w-full text-gray-700 hover:bg-green-600 hover:rounded-md hover:border hover:border-solid hover:border-green-700 hover:text-white hover:font-semibold"
            >
              {menuItem.icon}
              <span>{menuItem.name}</span>
            </Link>
          </Fragment>
        ))}
      </ul>
      <div className="flex items-center gap-2 p-2 text-red-700">
        <AiOutlineLogout size={24} />
        <span>Logout</span>
      </div>
    </aside>
  );
}
