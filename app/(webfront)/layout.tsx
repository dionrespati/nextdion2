import { Footer, Header } from "@components";
import React from "react";
import { ProductSearching } from "@page-components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <ProductSearching />
      <div className="mt-24">{children}</div>
      {/*       <Footer /> */}
    </div>
  );
}
