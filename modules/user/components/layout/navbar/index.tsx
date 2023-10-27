"use client";
import React from "react";
import clsx from "clsx";
import Link from "next/link";

interface IListMenu {
  link: string;
  name: string;
}

interface INavbarUserSettingProps {
  listMenu: IListMenu[];
  tipe: string;
}

export function NavbarUserSetting({ listMenu, tipe }: INavbarUserSettingProps) {
  return (
    <ul className="flex justify-start items-center gap-7 border-b-2 p-0 mb-2">
      {listMenu.map((menuItem, index) => (
        <Link
          key={index}
          href={menuItem.link}
          className={clsx("hover:text-green-700 p-2", {
            "text-gray-700": menuItem.name !== tipe,
            "border-b-2 border-solid border-green-700 text-green-700 font-semibold":
              menuItem.name === tipe,
          })}
        >
          {menuItem.name}
        </Link>
      ))}
    </ul>
  );
}
