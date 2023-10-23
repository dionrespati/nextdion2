import React from "react";
import { NavbarUserSetting } from "@modules";

const listMenu = [
  {
    link: "/user/settings?tipe=Biodata",
    name: "Biodata",
  },
  {
    link: "/user/settings?tipe=Daftar Alamat",
    name: "Daftar Alamat",
  },
  {
    link: "/user/settings?tipe=Rekening Bank",
    name: "Rekening Bank",
  },
];

export function UserSettingNavbar({ tipe }: { tipe: string }) {
  return (
    <div className="mb-3">
      <NavbarUserSetting listMenu={listMenu} tipe={tipe} />
    </div>
  );
}
