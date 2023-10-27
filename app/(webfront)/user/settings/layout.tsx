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
        <FaRegUser className="text-gray-700" />
        <h3 className="text-gray-700">Dion Respati</h3>
      </div>
      <div className="rounded-lg border border-solid border-gray-300 p-2">
        {children}
      </div>
    </div>
  );
}
