import React from "react";
import SearchProduct from "./components/product-searching";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <SearchProduct />
      {children}
    </div>
  );
}
