import React from "react";
import Link from "next/link";

const listMenu = [
  {
    link: "/user/settings",
    name: "Biodata",
  },
  {
    link: "/user/settings/alamat",
    name: "Daftar Alamat",
  },
  {
    link: "/user/settings/rekening",
    name: "Rekening Bank",
  },
];

export function UserSettingNavbar() {
  return (
    <div className="mb-3">
      <ul className="flex justify-start items-center gap-7 border-b">
        {listMenu.map((menuItem, index) => (
          <Link key={index} href={menuItem.link}>
            <span className="text-black font-semibold">{menuItem.name}</span>
          </Link>
        ))}
      </ul>
    </div>
  );
}
