import { Header } from "@components";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="mt-32 lg:mt-14">{children}</div>
    </>
  );
}
