import React from "react";
import { NavbarUserSetting } from "@modules";

const listMenu = [
  {
    link: "/user/transaksi?tipe=Pending",
    name: "Pending",
  },
  {
    link: "/user/transaksi?tipe=Berhasil",
    name: "Berhasil",
  },
];

export function TransaksiNavbar({ tipe }: { tipe: string }) {
  return (
    <div className="mb-3">
      <NavbarUserSetting listMenu={listMenu} tipe={tipe} />
    </div>
  );
}
