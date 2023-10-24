import { Header } from "@components";
import React from "react";
import { ProductSearching } from "@modules";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <ProductSearching />
      <div className="mt-32 lg:mt-10">{children}</div>
      {/*       <Footer /> */}
    </div>
  );
}
