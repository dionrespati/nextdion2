import { UserSettingNavbar } from "@modules";
import React from "react";
import { FaRegUser } from "react-icons/fa";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center justify-start gap-2 mb-2">
        <FaRegUser />
        <h3>Dion Respati</h3>
      </div>
      <div className="rounded-lg border border-solid border-gray-300 p-2">
        <UserSettingNavbar />
        {children}
      </div>
    </div>
  );
}
