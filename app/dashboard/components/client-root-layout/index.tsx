import React from "react";
import Header from "../header";
import MainBar from "../mainbar";

export default function ClientRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <Header />
      <section className="flex mt-12">
        <MainBar>{children}</MainBar>
      </section>
    </div>
  );
}
