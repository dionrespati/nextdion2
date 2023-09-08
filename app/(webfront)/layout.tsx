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
      <div className="mt-32 lg:mt-28">{children}</div>
      {/*       <Footer /> */}
    </div>
  );
}
