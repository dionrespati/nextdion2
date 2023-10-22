import { SideBarUser } from "@modules";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex p-4 gap-4">
      <SideBarUser />
      <div className="w-3/4 p-2">{children}</div>
    </div>
  );
}
