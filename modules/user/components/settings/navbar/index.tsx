import React from "react";
import { NavbarUserSetting } from "@modules";
import { listMenu } from "./constant";

export function UserSettingNavbar({ tipe }: { tipe: string }) {
  return (
    <div className="mb-3">
      <NavbarUserSetting listMenu={listMenu} tipe={tipe} />
    </div>
  );
}
